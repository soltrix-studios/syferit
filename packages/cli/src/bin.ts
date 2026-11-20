#!/usr/bin/env node
// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory, printSyferitBanner, loadSyferitConfig } from './index.js';
import { notifyIfUpdateAvailable, runUpgrade, cleanupOldBinaryOnWindows, SYFERIT_VERSION } from './updater.js';
import { runSetup, handleNoArgsInteractiveLaunch } from './setup.js';

cleanupOldBinaryOnWindows();

const PRESET_VALUES = new Set(['standard', 'hardened', 'maximum', 'v2-quantum-rns']);

const program = new Command();

program
  .name('syferit')
  .description('Syferit v2.0: RNS-ARX Entanglement & Symbolic Feistel Code Defense Engine by Soltrix Studios')
  .version(SYFERIT_VERSION);

program
  .command('protect [target]')
  .description('Apply AST logic entanglement, RNS-ARX point functions, and semantic protection to a file or directory')
  .option('-t, --target <path>', 'Path to file or directory to protect')
  .option('-o, --out <path>', 'Destination output path (defaults to in-place overwrite)')
  .option('--output <path>', 'Alias for -o, --out')
  .option('--preset <preset>', 'Protection level: standard, hardened, maximum, or v2-quantum-rns (default: "hardened")')
  .option('-p, --profile <profile>', 'Domain dictionary profile: saas, fintech, security, gaming (default: "saas")')
  .option('-d, --domain <domain>', 'Alias for -p, --profile')
  .option('-s, --seed <seed>', 'Deterministic build seed for reproducible polymorphism')
  .option('-e, --exclude <patterns...>', 'Exclude file or folder patterns from protection (e.g. -e vendor "*.min.js")')
  .option('--dry-run', 'Preview which files would be protected without modifying any files')
  .option('-q, --quiet', 'Suppress ASCII banner and per-file progress output')
  .action((targetArg, options) => {
    const fileConfig = loadSyferitConfig();
    const rawTarget = targetArg || options.target || fileConfig?.target;
    if (!rawTarget) {
      console.error('Error: Please specify a target file or directory to protect (e.g. `syferit protect ./dist` or `syferit protect -t ./dist`)');
      process.exit(1);
    }

    const resolvedPath = path.resolve(process.cwd(), rawTarget);
    if (!fs.existsSync(resolvedPath)) {
      console.error(`Error: Target path does not exist: ${resolvedPath}`);
      process.exit(1);
    }

    let presetVal = options.preset ?? fileConfig?.preset ?? 'hardened';
    let domainVal = options.domain ?? options.profile ?? fileConfig?.domainProfile ?? 'saas';

    if (PRESET_VALUES.has(domainVal) && !options.preset && presetVal === 'hardened') {
      presetVal = domainVal;
      domainVal = fileConfig?.domainProfile ?? 'saas';
    }

    const dryRun = Boolean(options.dryRun);
    const excludeVal = options.exclude ?? fileConfig?.exclude;
    const seedVal = options.seed ?? fileConfig?.seed;
    const stat = fs.statSync(resolvedPath);
    const syferitOpts = {
      seed: seedVal,
      domainProfile: domainVal as any,
      preset: presetVal as any,
      mode: 'production' as const,
      exclude: excludeVal,
      dryRun
    };

    const quiet = Boolean(options.quiet ?? fileConfig?.quiet);
    if (!quiet) {
      printSyferitBanner(syferitOpts);
    }

    const startMs = Date.now();
    const outPath = options.output || options.out || fileConfig?.out;

    if (stat.isDirectory()) {
      const outDir = outPath ? path.resolve(process.cwd(), outPath) : undefined;
      const res = protectDirectory(resolvedPath, outDir, syferitOpts, info => {
        if (!quiet) {
          const width = String(info.total).length;
          const idxStr = String(info.index).padStart(width, '0');
          const totStr = String(info.total).padStart(width, '0');
          const status = dryRun ? 'Dry-Run ' : info.transformed ? 'Hardened' : 'Skipped ';
          console.log(`  [${idxStr}/${totStr}] 🛡️  ${info.targetLabel} → ${info.relPath} (${status} | ${info.durationMs}ms)`);
        }
      });
      const totalMs = Date.now() - startMs;
      if (!quiet) {
        console.log('\n  ─────────────────────────────────────────────────────────────────────────────');
        if (dryRun) {
          console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — ${res.filesProcessed} files matched (0 files modified)`);
        } else {
          console.log(`  ✔ SYFERIT v2.0.0 PROTECTION COMPLETE (${totalMs}ms) — ${res.filesTransformed}/${res.filesProcessed} Artifacts Hardened`);
        }
        console.log('  ─────────────────────────────────────────────────────────────────────────────\n');
      }
      if (dryRun) {
        console.log(`Dry-run complete: ${res.filesProcessed} files matched (0 modified).`);
      } else {
        console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
      }
    } else {
      const outFile = outPath ? path.resolve(process.cwd(), outPath) : undefined;
      const res = protectFile(resolvedPath, outFile, syferitOpts);
      const totalMs = Date.now() - startMs;
      if (!quiet) {
        const fileName = path.basename(resolvedPath);
        const status = dryRun ? 'Dry-Run' : res.transformed ? 'Hardened' : 'Skipped';
        console.log(`  [01/01] 🛡️  Artifact → ${fileName} (${status} | ${totalMs}ms)`);
        console.log('\n  ─────────────────────────────────────────────────────────────────────────────');
        if (dryRun) {
          console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — 1 file matched (0 modified)`);
        } else {
          console.log(`  ✔ SYFERIT v2.0.0 PROTECTION COMPLETE (${totalMs}ms)`);
        }
        console.log('  ─────────────────────────────────────────────────────────────────────────────\n');
      }
      if (dryRun) {
        console.log('Dry-run complete: 1 file matched (0 modified).');
      } else {
        console.log(`File protection complete. Transformed: ${res.transformed}`);
      }
    }

    if (!dryRun) {
      notifyIfUpdateAvailable(quiet);
    }
  });

program
  .command('init')
  .description('Create a starter syferit.config.json in the current directory')
  .option('-f, --force', 'Overwrite existing syferit.config.json')
  .action((options) => {
    const cfgPath = path.resolve(process.cwd(), 'syferit.config.json');
    if (fs.existsSync(cfgPath) && !options.force) {
      console.error(`  syferit.config.json already exists at ${cfgPath}. Use --force to overwrite.`);
      process.exitCode = 1;
      return;
    }
    const starter = {
      target: './dist',
      out: './dist-protected',
      preset: 'v2-quantum-rns',
      domainProfile: 'saas',
      exclude: ['vendor', '*.min.js']
    };
    fs.writeFileSync(cfgPath, JSON.stringify(starter, null, 2) + '\n', 'utf-8');
    console.log(`\n  ✔ Created starter config at ${cfgPath}`);
    console.log('  ▸ Run `syferit protect --dry-run` to preview, or `syferit protect` to harden.\n');
  });

program
  .command('setup')
  .description('Install the standalone Syferit binary to ~/.syferit/bin and register it in your system PATH')
  .option('-y, --yes', 'Skip interactive confirmation prompt and register PATH automatically')
  .action(async (options) => {
    await runSetup({ yes: Boolean(options.yes) });
  });

program
  .command('upgrade')
  .description('Check for and install the latest Syferit release seamlessly')
  .option('--check', 'Only check if a newer version is available without installing')
  .action(async (options) => {
    await runUpgrade({ checkOnly: Boolean(options.check) });
  });

(async () => {
  if (await handleNoArgsInteractiveLaunch()) {
    return;
  }
  await program.parseAsync(process.argv);
})();
