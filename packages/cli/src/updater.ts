// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import * as sea from 'node:sea';

export const SYFERIT_VERSION = '2.1.1';
const GITHUB_REPO = 'soltrix-studios/syferit';
const NPM_PACKAGE = '@syferit/cli';
const CHECK_INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 hours
const FETCH_TIMEOUT_MS = 2500;

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

export interface ReleaseInfo {
  version: string;
  releaseUrl: string;
  assets: ReleaseAsset[];
  source: 'github' | 'npm';
}

interface UpdateCache {
  lastChecked: number;
  latestVersion: string;
  releaseUrl: string;
}

function getCacheFilePath(): string {
  return path.join(os.homedir(), '.syferit', 'update-check.json');
}

export function isNewerVersion(latest: string, current: string): boolean {
  const parse = (v: string): [number, number, number] => {
    const clean = v.trim().replace(/^v/i, '').split('-')[0] || '0.0.0';
    const parts = clean.split('.').map(n => parseInt(n, 10) || 0);
    return [parts[0] ?? 0, parts[1] ?? 0, parts[2] ?? 0];
  };

  const [lMaj, lMin, lPat] = parse(latest);
  const [cMaj, cMin, cPat] = parse(current);

  if (lMaj !== cMaj) return lMaj > cMaj;
  if (lMin !== cMin) return lMin > cMin;
  return lPat > cPat;
}

export function formatUpdateNotice(currentVersion: string, latestVersion: string): string {
  const line1 = `  ⬆  Update available: v${currentVersion} → v${latestVersion}`;
  const line2 = `     Run \`syferit upgrade\` to update seamlessly.`;
  const width = 75;
  const pad = (s: string) => s.padEnd(width, ' ');
  return [
    `  ╭${'─'.repeat(width)}╮`,
    `  │${pad(line1)}│`,
    `  │${pad(line2)}│`,
    `  ╰${'─'.repeat(width)}╯`
  ].join('\n');
}

function readCache(): UpdateCache | null {
  try {
    const file = getCacheFilePath();
    if (!fs.existsSync(file)) return null;
    const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
    if (typeof data?.lastChecked === 'number' && typeof data?.latestVersion === 'string') {
      return data as UpdateCache;
    }
    return null;
  } catch {
    return null;
  }
}

function writeCache(cache: UpdateCache): void {
  try {
    const file = getCacheFilePath();
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(cache, null, 2), 'utf-8');
  } catch {
  }
}

async function fetchJsonWithTimeout(url: string, timeoutMs = FETCH_TIMEOUT_MS): Promise<any> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  if (typeof timer.unref === 'function') timer.unref();
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': `syferit-cli/${SYFERIT_VERSION}`,
        'Accept': 'application/vnd.github+json'
      }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchLatestRelease(timeoutMs = FETCH_TIMEOUT_MS): Promise<ReleaseInfo | null> {
  const gh = await fetchJsonWithTimeout(
    `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
    timeoutMs
  );
  if (gh && typeof gh.tag_name === 'string') {
    const version = gh.tag_name.replace(/^v/i, '');
    const assets: ReleaseAsset[] = Array.isArray(gh.assets)
      ? gh.assets.map((a: any) => ({
          name: String(a.name ?? ''),
          browser_download_url: String(a.browser_download_url ?? '')
        }))
      : [];
    return {
      version,
      releaseUrl: String(gh.html_url || `https://github.com/${GITHUB_REPO}/releases/latest`),
      assets,
      source: 'github'
    };
  }

  const npm = await fetchJsonWithTimeout(
    `https://registry.npmjs.org/${NPM_PACKAGE}/latest`,
    timeoutMs
  );
  if (npm && typeof npm.version === 'string') {
    return {
      version: npm.version,
      releaseUrl: `https://github.com/${GITHUB_REPO}/releases`,
      assets: [],
      source: 'npm'
    };
  }

  return null;
}

export function notifyIfUpdateAvailable(quiet = false): void {
  if (quiet) return;
  if (process.env['SYFERIT_NO_UPDATE_CHECK'] === '1' || process.env['CI'] === 'true') {
    return;
  }

  const cache = readCache();
  if (cache && isNewerVersion(cache.latestVersion, SYFERIT_VERSION)) {
    console.log(formatUpdateNotice(SYFERIT_VERSION, cache.latestVersion) + '\n');
  }

  const now = Date.now();
  if (!cache || now - cache.lastChecked >= CHECK_INTERVAL_MS) {
    void fetchLatestRelease(FETCH_TIMEOUT_MS)
      .then(info => {
        if (info) {
          writeCache({
            lastChecked: Date.now(),
            latestVersion: info.version,
            releaseUrl: info.releaseUrl
          });
        }
      })
      .catch(() => {
      });
  }
}

export function isSeaBinary(): boolean {
  try {
    return Boolean(sea?.isSea?.());
  } catch {
    try {
      const builtinSea = (process as any).getBuiltinModule?.('node:sea');
      return Boolean(builtinSea?.isSea?.());
    } catch {
      return false;
    }
  }
}

export function getPlatformAssetName(platform = process.platform, arch = process.arch): string {
  if (platform === 'win32') return 'syferit.exe';
  if (platform === 'linux') return 'syferit-linux-x64';
  if (platform === 'darwin') {
    return arch === 'arm64' ? 'syferit-macos-arm64' : 'syferit-macos-x64';
  }
  return 'syferit';
}

export function cleanupOldBinaryOnWindows(): void {
  if (process.platform !== 'win32' || !isSeaBinary()) return;
  const oldPath = `${process.execPath}.old`;
  if (fs.existsSync(oldPath)) {
    try {
      fs.rmSync(oldPath, { force: true });
    } catch {
    }
  }
}

export function detectInstallMode(): { mode: 'windows-exe' | 'posix-bin' | 'npm'; binaryPath?: string } {
  if (isSeaBinary()) {
    return {
      mode: process.platform === 'win32' ? 'windows-exe' : 'posix-bin',
      binaryPath: process.execPath
    };
  }

  const binEnv = process.env['SYFERIT_BINARY_PATH'];
  if (binEnv && fs.existsSync(binEnv)) {
    return { mode: 'windows-exe', binaryPath: binEnv };
  }

  const entry = process.argv[1] || '';
  if (
    process.platform !== 'win32' &&
    entry &&
    !entry.includes('node_modules') &&
    !entry.endsWith('bin.js') &&
    fs.existsSync(entry)
  ) {
    return { mode: 'posix-bin', binaryPath: entry };
  }

  return { mode: 'npm' };
}

async function downloadFile(url: string, destPath: string): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  if (typeof timer.unref === 'function') timer.unref();
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': `syferit-cli/${SYFERIT_VERSION}` }
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buf);
  } finally {
    clearTimeout(timer);
  }
}

export async function runUpgrade(options: { checkOnly?: boolean } = {}): Promise<void> {
  console.log(`\n  Checking for Syferit updates (current: v${SYFERIT_VERSION})...`);
  const info = await fetchLatestRelease(8000);

  if (!info) {
    console.error('  ✖ Could not reach update servers. Check your internet connection or visit:');
    console.error(`    https://github.com/${GITHUB_REPO}/releases\n`);
    process.exitCode = 1;
    return;
  }

  writeCache({
    lastChecked: Date.now(),
    latestVersion: info.version,
    releaseUrl: info.releaseUrl
  });

  if (!isNewerVersion(info.version, SYFERIT_VERSION)) {
    console.log(`  ✔ Syferit v${SYFERIT_VERSION} is already up to date.\n`);
    return;
  }

  console.log(`  ⬆ New version available: v${SYFERIT_VERSION} → v${info.version}`);

  if (options.checkOnly) {
    console.log(`  Run \`syferit upgrade\` to install v${info.version}.\n`);
    return;
  }

  const install = detectInstallMode();

  if (install.mode === 'windows-exe' && install.binaryPath) {
    const asset = info.assets.find(a => a.name.toLowerCase() === 'syferit.exe');
    const downloadUrl =
      asset?.browser_download_url ||
      `https://github.com/${GITHUB_REPO}/releases/download/v${info.version}/syferit.exe`;

    const tmpPath = `${install.binaryPath}.new`;
    const oldPath = `${install.binaryPath}.old`;

    console.log(`  Downloading syferit.exe v${info.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      if (fs.existsSync(oldPath)) {
        try { fs.rmSync(oldPath, { force: true }); } catch { /* ignore */ }
      }
      fs.renameSync(install.binaryPath, oldPath);
      fs.renameSync(tmpPath, install.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit.exe to v${info.version}!\n`);
    } catch (err: any) {
      if (fs.existsSync(tmpPath)) {
        try { fs.rmSync(tmpPath, { force: true }); } catch { /* ignore */ }
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${info.releaseUrl}\n`);
      process.exitCode = 1;
    }
    return;
  }

  if (install.mode === 'posix-bin' && install.binaryPath) {
    const assetName = getPlatformAssetName();
    const asset =
      info.assets.find(a => a.name === assetName) ||
      info.assets.find(a => a.name === 'syferit');
    const chosenName = asset?.name || assetName;
    const downloadUrl =
      asset?.browser_download_url ||
      `https://github.com/${GITHUB_REPO}/releases/download/v${info.version}/${chosenName}`;

    const tmpPath = `${install.binaryPath}.new`;
    console.log(`  Downloading ${chosenName} v${info.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      fs.chmodSync(tmpPath, 0o755);
      fs.renameSync(tmpPath, install.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit to v${info.version}!\n`);
    } catch (err: any) {
      if (fs.existsSync(tmpPath)) {
        try { fs.rmSync(tmpPath, { force: true }); } catch { /* ignore */ }
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${info.releaseUrl}\n`);
      process.exitCode = 1;
    }
    return;
  }

  console.log(`  Upgrading via npm (${NPM_PACKAGE}@latest)...`);
  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const result = spawnSync(npmCmd, ['install', '-g', `${NPM_PACKAGE}@latest`], {
    stdio: 'inherit'
  });
  if (result.status === 0) {
    console.log(`\n  ✔ Successfully upgraded ${NPM_PACKAGE} to v${info.version}!\n`);
  } else {
    console.error(`\n  ✖ npm upgrade exited with code ${result.status}.`);
    console.error(`    Try running: npm install -g ${NPM_PACKAGE}@latest\n`);
    process.exitCode = 1;
  }
}
