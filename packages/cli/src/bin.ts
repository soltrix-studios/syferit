#!/usr/bin/env node
// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory } from './index.js';

const PRESET_VALUES = new Set(['standard', 'hardened', 'maximum']);

const program = new Command();

program
  .name('syferit')
  .description('Syferit: Symbolic Feistel & Residue Integrity Transformer by Soltrix Studios')
  .version('0.4.5');

program
  .command('protect [target]')
  .description('Apply AST logic entanglement and semantic protection to a file or directory')
  .option('-t, --target <path>', 'Path to file or directory to protect')
  .option('-o, --out <path>', 'Destination output path (defaults to in-place overwrite)')
  .option('--output <path>', 'Alias for -o, --out')
  .option('--preset <preset>', 'Protection level: standard, hardened, or maximum', 'hardened')
  .option('-p, --profile <profile>', 'Domain dictionary profile (saas, fintech, security, gaming)', 'saas')
  .option('-d, --domain <domain>', 'Alias for -p, --profile')
  .option('-s, --seed <seed>', 'Deterministic build seed for reproducible polymorphism')
  .action((targetArg, options) => {
    const rawTarget = targetArg || options.target;
    if (!rawTarget) {
      console.error('Error: Please specify a target file or directory to protect (e.g. `syferit protect ./dist` or `syferit protect -t ./dist`)');
      process.exit(1);
    }

    const resolvedPath = path.resolve(process.cwd(), rawTarget);
    if (!fs.existsSync(resolvedPath)) {
      console.error(`Error: Target path does not exist: ${resolvedPath}`);
      process.exit(1);
    }

    let presetVal = options.preset;
    let domainVal = options.domain || options.profile;

    if (PRESET_VALUES.has(domainVal) && presetVal === 'hardened') {
      presetVal = domainVal;
      domainVal = 'saas';
    }

    const stat = fs.statSync(resolvedPath);
    const syferitOpts = {
      seed: options.seed,
      domainProfile: domainVal as any,
      preset: presetVal as any,
      mode: 'production' as const
    };

    const outPath = options.output || options.out;
    if (stat.isDirectory()) {
      const outDir = outPath ? path.resolve(process.cwd(), outPath) : undefined;
      const res = protectDirectory(resolvedPath, outDir, syferitOpts);
      console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
    } else {
      const outFile = outPath ? path.resolve(process.cwd(), outPath) : undefined;
      const res = protectFile(resolvedPath, outFile, syferitOpts);
      console.log(`File protection complete. Transformed: ${res.transformed}`);
    }
  });

program.parse(process.argv);
