// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect, type SyferitOptions } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';


export interface CliProtectOptions extends SyferitOptions {
  out?: string;
  recursive?: boolean;
}

export function protectFile(filePath: string, outPath?: string, options?: SyferitOptions): { transformed: boolean } {
  const isWasm = filePath.endsWith('.wasm');
  const isLlvmIr = filePath.endsWith('.ll');
  const isRust = filePath.endsWith('.rs');
  const isCCpp = /\.(c|cpp|cc|cxx)$/i.test(filePath);
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

  if (isRust || isCCpp) {
    const srcCode = fs.readFileSync(filePath, 'utf-8');
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage: isRust ? 'rust' : 'cpp'
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

export function protectDirectory(dirPath: string, outDir?: string, options?: SyferitOptions): { filesProcessed: number; filesTransformed: number } {
  let filesProcessed = 0;
  let filesTransformed = 0;

  function scan(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== 'node_modules' && entry.name !== '.git') {
          scan(fullPath);
        }
      } else if (
        entry.isFile() &&
        (/\.[cm]?[jt]sx?$/.test(entry.name) ||
         entry.name.endsWith('.wasm') ||
         entry.name.endsWith('.ll') ||
         entry.name.endsWith('.py') ||
         /\.(c|cpp|cc|cxx|rs)$/i.test(entry.name))
      ) {
        filesProcessed++;
        const relPath = path.relative(dirPath, fullPath);
        const destination = outDir ? path.join(outDir, relPath) : fullPath;
        const res = protectFile(fullPath, destination, options);
        if (res.transformed) {
          filesTransformed++;
        }
      }
    }
  }

  scan(dirPath);
  return { filesProcessed, filesTransformed };
}
