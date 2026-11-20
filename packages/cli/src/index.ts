// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect, type SyferitOptions } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';


export interface CliProtectOptions extends SyferitOptions {
  out?: string;
  recursive?: boolean;
  quiet?: boolean;
  exclude?: string[];
  dryRun?: boolean;
}

export interface SyferitConfigFile {
  target?: string;
  out?: string;
  preset?: SyferitOptions['preset'];
  domainProfile?: SyferitOptions['domainProfile'];
  seed?: SyferitOptions['seed'];
  exclude?: string[];
  quiet?: boolean;
}

export const DEFAULT_IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  '.nuxt',
  '.svelte-kit',
  'bin',
  'obj',
  'target',
  '.gradle',
  '.dart_tool',
  '__pycache__',
  '.venv',
  'venv',
  '.idea',
  '.vscode',
  'coverage'
]);

export function loadSyferitConfig(cwd = process.cwd()): SyferitConfigFile | null {
  const cfgPath = path.join(cwd, 'syferit.config.json');
  if (!fs.existsSync(cfgPath)) return null;
  try {
    const raw = JSON.parse(fs.readFileSync(cfgPath, 'utf-8'));
    if (raw && typeof raw === 'object') {
      return raw as SyferitConfigFile;
    }
    return null;
  } catch {
    return null;
  }
}

function matchesExcludePattern(relPath: string, patterns?: string[]): boolean {
  if (!patterns || patterns.length === 0) return false;
  const normalized = relPath.replace(/\\/g, '/');
  const base = path.posix.basename(normalized);
  for (const rawPattern of patterns) {
    const pattern = rawPattern.trim().replace(/\\/g, '/');
    if (!pattern) continue;
    if (pattern.includes('*') || pattern.includes('?')) {
      const escaped = pattern
        .replace(/[.+^${}()|[\]\\]/g, '\\$&')
        .replace(/\*/g, '.*')
        .replace(/\?/g, '.');
      const regex = new RegExp(`^${escaped}$`, 'i');
      if (regex.test(normalized) || regex.test(base)) return true;
    } else if (
      normalized === pattern ||
      normalized.startsWith(`${pattern.replace(/\/+$/, '')}/`) ||
      normalized.includes(`/${pattern.replace(/^\/+|\/+$/g, '')}/`) ||
      normalized.includes(pattern) ||
      base === pattern
    ) {
      return true;
    }
  }
  return false;
}

export const SYFERIT_TERMINAL_ARTWORK = `
   ▄████████ ▄██   ▄      ▄████████    ▄████████    ▄████████  ▄█      ███     
  ███    ███ ███   ██▄   ███    ███   ███    ███   ███    ███ ███  ▀█████████▄ 
  ███    █▀  ███▄▄▄███   ███    █▀    ███    █▀    ███    ███ ███▌    ▀███▀▀██ 
  ███        ▀▀▀▀▀▀███  ▄███▄▄▄      ▄███▄▄▄      ▄███▄▄▄▄██▀ ███▌     ███   ▀ 
▀███████████ ▄██   ███ ▀▀███▀▀▀     ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   ███▌     ███     
         ███ ███   ███   ███          ███    █▄  ▀███████████ ███      ███     
   ▄█    ███ ███   ███   ███          ███    ███   ███    ███ ███      ███     
 ▄████████▀   ▀█████▀    ███          ██████████   ███    ███ █▀      ▄████▀   
`;

export function printSyferitBanner(options?: SyferitOptions): void {
  const preset = (options?.preset ?? 'hardened').padEnd(16, ' ');
  const profile = (options?.domainProfile ?? 'saas').padEnd(10, ' ');
  console.log(SYFERIT_TERMINAL_ARTWORK);
  console.log('  ╔═══════════════════════════════════════════════════════════════════════════╗');
  console.log('  ║  SYFERIT v2.0.1 — Symbolic Feistel & Residue Integrity Transformer        ║');
  console.log('  ║  "Don\'t Just Ship it. Syferit."  │  Soltrix Studios Code Defense Engine   ║');
  console.log('  ╠═══════════════════════════════════════════════════════════════════════════╣');
  console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
  console.log('  ║  ▸ Engine  : WASM Double-Vault   │  ▸ Mode    : Production Hardening      ║');
  console.log('  ╚═══════════════════════════════════════════════════════════════════════════╝\n');
}

function getTargetLabel(filePath: string): string {
  if (filePath.endsWith('.wasm')) return 'WASM  ';
  if (filePath.endsWith('.ll')) return 'LLVM  ';
  if (filePath.endsWith('.rs')) return 'Rust  ';
  if (filePath.endsWith('.cs')) return 'C#    ';
  if (filePath.endsWith('.kt')) return 'Kotlin';
  if (filePath.endsWith('.java')) return 'Java  ';
  if (filePath.endsWith('.swift')) return 'Swift ';
  if (filePath.endsWith('.dart')) return 'Dart  ';
  if (/\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath)) return 'C/C++ ';
  if (filePath.endsWith('.py')) return 'Python';
  return 'JS/TS ';
}

export function protectFile(filePath: string, outPath?: string, options?: CliProtectOptions): { transformed: boolean } {
  if (options?.dryRun) {
    return { transformed: false };
  }

  const isWasm = filePath.endsWith('.wasm');
  const isLlvmIr = filePath.endsWith('.ll');
  const isRust = filePath.endsWith('.rs');
  const isCSharp = filePath.endsWith('.cs');
  const isKotlin = filePath.endsWith('.kt');
  const isJava = filePath.endsWith('.java');
  const isSwift = filePath.endsWith('.swift');
  const isDart = filePath.endsWith('.dart');
  const isCCpp = /\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath);
  const isPython = filePath.endsWith('.py');

  const destination = outPath || filePath;
  const destDir = path.dirname(destination);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  if (isWasm) {
    const wasmBytes = fs.readFileSync(filePath);
    const result = protectWasm(new Uint8Array(wasmBytes), {
      seed: options?.seed,
      domainProfile: options?.domainProfile
    });
    fs.writeFileSync(destination, result.binary);
    return { transformed: result.sectionsProtected > 0 };
  }

  if (isLlvmIr) {
    const irCode = fs.readFileSync(filePath, 'utf-8');
    const result = protectLlvmIr(irCode, options);
    fs.writeFileSync(destination, result.code, 'utf-8');
    return { transformed: result.transformedCount > 0 };
  }

  if (isRust || isCSharp || isKotlin || isJava || isSwift || isDart || isCCpp) {
    const srcCode = fs.readFileSync(filePath, 'utf-8');
    const targetLanguage = isRust
      ? 'rust'
      : isCSharp
        ? 'csharp'
        : isKotlin
          ? 'kotlin'
          : isJava
            ? 'java'
            : isSwift
              ? 'swift'
              : isDart
                ? 'dart'
                : 'cpp';
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage
    });
    fs.writeFileSync(destination, result.code, 'utf-8');
    return { transformed: result.transformedCount > 0 };
  }

  if (isPython) {
    const pyCode = fs.readFileSync(filePath, 'utf-8');
    const result = protectPython(pyCode, options);
    fs.writeFileSync(destination, result.code, 'utf-8');
    return { transformed: result.transformedCount > 0 };
  }

  const code = fs.readFileSync(filePath, 'utf-8');
  const result = protect(code, options);
  fs.writeFileSync(destination, result.code, 'utf-8');
  return { transformed: result.transformedCount > 0 };
}

export function protectDirectory(
  dirPath: string,
  outDir?: string,
  options?: CliProtectOptions,
  onProgress?: (info: { index: number; total: number; relPath: string; targetLabel: string; transformed: boolean; durationMs: number }) => void
): { filesProcessed: number; filesTransformed: number } {
  const candidateFiles: string[] = [];
  const resolvedOutDir = outDir ? path.resolve(outDir) : null;
  const dryRun = Boolean(options?.dryRun);

  function collect(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (DEFAULT_IGNORED_DIRS.has(entry.name)) continue;
        if (resolvedOutDir && path.resolve(fullPath).toLowerCase() === resolvedOutDir.toLowerCase()) {
          continue;
        }
        const relDir = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relDir, options?.exclude)) continue;
        collect(fullPath);
      } else if (
        entry.isFile() &&
        (/\.[cm]?[jt]sx?$/.test(entry.name) ||
         entry.name.endsWith('.wasm') ||
         entry.name.endsWith('.ll') ||
         entry.name.endsWith('.py') ||
         /\.(c|cpp|cc|cxx|m|mm|rs|cs|kt|java|swift|dart)$/i.test(entry.name))
      ) {
        const relFile = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relFile, options?.exclude)) continue;
        candidateFiles.push(fullPath);
      }
    }
  }

  collect(dirPath);

  let filesProcessed = 0;
  let filesTransformed = 0;
  const total = candidateFiles.length;

  for (const fullPath of candidateFiles) {
    filesProcessed++;
    const relPath = path.relative(dirPath, fullPath);
    const destination = outDir ? path.join(outDir, relPath) : fullPath;
    if (dryRun) {
      if (onProgress) {
        onProgress({
          index: filesProcessed,
          total,
          relPath,
          targetLabel: getTargetLabel(fullPath),
          transformed: false,
          durationMs: 0
        });
      }
      continue;
    }
    const t0 = Date.now();
    const res = protectFile(fullPath, destination, options);
    const durationMs = Date.now() - t0;
    if (res.transformed) {
      filesTransformed++;
    }
    if (onProgress) {
      onProgress({
        index: filesProcessed,
        total,
        relPath,
        targetLabel: getTargetLabel(fullPath),
        transformed: res.transformed,
        durationMs
      });
    }
  }

  return { filesProcessed, filesTransformed };
}
