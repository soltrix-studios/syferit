// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { printSyferitBanner } from './index.js';
import { detectInstallMode, SYFERIT_VERSION } from './updater.js';

export function getSyferitBinDir(homeDir = os.homedir()): string {
  return path.join(homeDir, '.syferit', 'bin');
}

function normalizePathEntry(p: string, platform = process.platform): string {
  const cleaned = p.trim().replace(/^"+|"+$/g, '').replace(/[\\/]+$/, '');
  return platform === 'win32' ? cleaned.toLowerCase() : cleaned;
}

export function isDirOnPath(
  dir: string,
  envPath = process.env['PATH'] || process.env['Path'] || '',
  platform = process.platform
): boolean {
  const sep = platform === 'win32' ? ';' : ':';
  const target = normalizePathEntry(dir, platform);
  if (!target) return false;
  const entries = envPath.split(sep).map(e => normalizePathEntry(e, platform));
  return entries.includes(target);
}

export function addPathToShellProfiles(binDir: string, homeDir = os.homedir()): string[] {
  const defaultBin = getSyferitBinDir(homeDir);
  const pathValue =
    path.resolve(binDir) === path.resolve(defaultBin) ? '$HOME/.syferit/bin' : binDir;
  const exportLine = `export PATH="${pathValue}:$PATH"`;

  const candidates = [
    path.join(homeDir, '.zshrc'),
    path.join(homeDir, '.bashrc'),
    path.join(homeDir, '.profile')
  ];

  const existing = candidates.filter(f => fs.existsSync(f));
  const targets = existing.length > 0 ? existing : [candidates[2]!];
  const modified: string[] = [];

  for (const rcFile of targets) {
    try {
      const current = fs.existsSync(rcFile) ? fs.readFileSync(rcFile, 'utf-8') : '';
      if (!current.includes('.syferit/bin') && !current.includes(binDir)) {
        const prefix = current.length === 0 || current.endsWith('\n') ? '' : '\n';
        fs.writeFileSync(rcFile, `${current}${prefix}\n# Syferit CLI\n${exportLine}\n`, 'utf-8');
        modified.push(rcFile);
      }
    } catch {
    }
  }

  return modified;
}

export function registerWindowsUserPath(binDir: string): boolean {
  const psScript = [
    `$binDir = '${binDir.replace(/'/g, "''")}'`,
    `$userPath = [Environment]::GetEnvironmentVariable('Path', 'User')`,
    `if (-not $userPath) { $userPath = '' }`,
    `$entries = $userPath -split ';' | ForEach-Object { $_.Trim().TrimEnd('\\', '/') } | Where-Object { $_ -ne '' }`,
    `$normTarget = $binDir.Trim().TrimEnd('\\', '/')`,
    `if ($entries -notcontains $normTarget) {`,
    `  $newPath = if ($userPath.Trim() -eq '') { $binDir } elseif ($userPath.EndsWith(';')) { "$userPath$binDir" } else { "$userPath;$binDir" }`,
    `  [Environment]::SetEnvironmentVariable('Path', $newPath, 'User')`,
    `}`
  ].join('; ');

  const res = spawnSync('powershell', ['-NoProfile', '-NonInteractive', '-Command', psScript], {
    stdio: 'pipe'
  });
  return res.status === 0;
}

export async function askYesNo(promptText: string, defaultYes = true): Promise<boolean> {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return defaultYes;
  }
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const answer = (await rl.question(promptText)).trim().toLowerCase();
    if (!answer) return defaultYes;
    return answer === 'y' || answer === 'yes';
  } finally {
    rl.close();
  }
}

export async function waitForEnter(): Promise<void> {
  if (!process.stdin.isTTY || !process.stdout.isTTY) return;
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try {
    await rl.question('\n  Press Enter to exit...');
  } finally {
    rl.close();
  }
}

export async function runSetup(options: { yes?: boolean; waitBeforeExit?: boolean } = {}): Promise<void> {
  const install = detectInstallMode();

  if (install.mode === 'npm') {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log('  • If installed via `npm install -g @syferit/cli`, `syferit` is already registered on PATH.');
    console.log('  • For standalone native binaries without Node/npm setup:');
    console.log('    Windows (PowerShell) : irm https://syferit.soltrixstudios.com/install.ps1 | iex');
    console.log('    macOS & Linux        : curl -fsSL https://syferit.soltrixstudios.com/install.sh | sh');
    console.log('    Direct Downloads     : https://github.com/soltrix-studios/syferit/releases/latest\n');
    return;
  }

  const targetDir = getSyferitBinDir();
  const binaryPath = install.binaryPath!;

  if (install.mode === 'windows-exe') {
    const targetExe = path.join(targetDir, 'syferit.exe');
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(
        `  Register 'syferit' in your Windows User PATH (${targetDir})? [Y/n] `,
        true
      );
      if (!ok) {
        console.log('\n  Skipped PATH registration.');
        console.log('  You can still run Syferit directly from any folder as a portable executable:');
        console.log(`    "${binaryPath}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }

    fs.mkdirSync(targetDir, { recursive: true });
    if (path.resolve(binaryPath).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(binaryPath, targetExe);
    }

    const updated = registerWindowsUserPath(targetDir);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${targetDir} in your Windows User PATH.`);
      console.log('  ▸ Open a NEW terminal window and run `syferit --version` or `syferit protect ./dist`.\n');
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${targetDir}\n`);
      process.exitCode = 1;
    }

    if (options.waitBeforeExit) await waitForEnter();
    return;
  }

  const targetBin = path.join(targetDir, 'syferit');
  if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
    const ok = await askYesNo(
      `  Install 'syferit' to ${targetDir} and add it to your shell PATH? [Y/n] `,
      true
    );
    if (!ok) {
      console.log('\n  Skipped PATH registration.');
      console.log('  You can still run Syferit directly as a portable executable:');
      console.log(`    "${binaryPath}" protect ./dist --preset v2-quantum-rns\n`);
      return;
    }
  }

  fs.mkdirSync(targetDir, { recursive: true });
  if (path.resolve(binaryPath) !== path.resolve(targetBin)) {
    fs.copyFileSync(binaryPath, targetBin);
  }
  fs.chmodSync(targetBin, 0o755);

  const modified = addPathToShellProfiles(targetDir);
  console.log(`\n  ✔ Installed syferit → ${targetBin}`);
  if (modified.length > 0) {
    console.log(`  ✔ Updated shell profile(s): ${modified.join(', ')}`);
  }
  console.log('  ▸ Reload your shell or run: export PATH="$HOME/.syferit/bin:$PATH"\n');
}

export async function handleNoArgsInteractiveLaunch(): Promise<boolean> {
  if (
    process.argv.length > 2 ||
    !process.stdin.isTTY ||
    !process.stdout.isTTY ||
    process.env['CI'] === 'true'
  ) {
    return false;
  }

  const install = detectInstallMode();
  if (install.mode === 'npm') {
    return false;
  }

  printSyferitBanner();

  const binDir = getSyferitBinDir();
  if (!isDirOnPath(binDir)) {
    console.log("  ℹ  'syferit' is not yet registered in your system PATH.");
    await runSetup({ yes: false, waitBeforeExit: process.platform === 'win32' });
    return true;
  }

  console.log(`  Syferit v${SYFERIT_VERSION} is installed and ready on your system PATH.\n`);
  console.log('  Quick Commands:');
  console.log('    syferit protect ./dist --preset v2-quantum-rns   Protect a build directory');
  console.log('    syferit upgrade                                  Self-update to latest release');
  console.log('    syferit setup                                    Re-check PATH registration');
  console.log('    syferit --help                                   Show full CLI reference');

  if (process.platform === 'win32') {
    await waitForEnter();
  }
  return true;
}
