# WebAssembly (Wasm) Protection Guide

Syferit provides comprehensive, zero-friction protection for WebAssembly (`.wasm`) binaries alongside JavaScript and TypeScript codebases.

---

## 🛡️ The Myth of "Compiled Code Security"

A common assumption in modern software engineering is that compiling proprietary C, C++, Rust, or Go algorithms into a WebAssembly (`.wasm`) binary makes them inherently safe from reverse engineering.

**In reality, raw WebAssembly binaries are highly vulnerable to automated extraction:**
1. **Instant Disassembly:** WebAssembly follows a standardized, transparent stack specification. Modern reverse-engineering tools decompile `.wasm` binaries into high-level WebAssembly Text (WAT) or C-like representations in seconds.
2. **AI-Driven Reverse Engineering:** Autonomous coding agents equipped with inspection tools (such as REA's `inspect_wasm_artifact`) ingest `.wasm` binaries directly, mapping exported functions and linear memory layouts to clone proprietary algorithms automatically.
3. **Sensitive Metadata Leaks:** Standard compiler toolchains frequently emit debug custom sections (`name`, `producers`, and source paths) that expose internal function names, developer filesystem structures, and build flags.

**Syferit hardens your WebAssembly binaries directly at the byte level, neutralizing automated reverse-engineering pipelines while preserving 100% runtime performance and spec compliance.**

---

## ⚡ Zero-Config Automatic Protection

If your web or Electron application already bundles `.wasm` files (e.g. within `public/`, `src/`, or imported via bundlers), Syferit automatically identifies and protects them during your regular build process.

### 1. Modern Frontends (Vite, Nuxt 3, SvelteKit, Astro)
When using `@syferit/vite-plugin`, all `.wasm` assets emitted into your production bundle are automatically intercepted and protected:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import { syferit } from '@syferit/vite-plugin';

export default defineConfig({
  plugins: [
    syferit({
      mode: 'production', // Automatically hardens both .js and .wasm assets
      domainProfile: 'saas'
    })
  ]
});
```

### 2. Next.js & Webpack 5
When using `@syferit/next` or `@syferit/webpack-plugin`, emitted WebAssembly chunks are protected during the asset optimization lifecycle:

```js
// next.config.mjs
import { withSyferit } from '@syferit/next';

export default withSyferit({
  reactStrictMode: true
});
```

### 3. Universal CLI (Any Build Pipeline)
When running the Syferit CLI over any build directory or standalone folder:

```bash
# Automatically detects and protects both .js and .wasm files
npx @syferit/cli protect ./dist --out ./dist-protected
```

---

## 🔧 Programmatic Standalone Usage (`@syferit/wasm`)

For native C++/Rust build scripts, custom packaging workflows, or CI/CD pipelines producing standalone `.wasm` binaries, use `@syferit/wasm` directly:

### Installation

```bash
npm install -D @syferit/wasm
# or
pnpm add -D @syferit/wasm
```

### Usage in Build Scripts

```ts
import fs from 'node:fs';
import { protectWasm } from '@syferit/wasm';

const rawBytes = fs.readFileSync('./build/engine.wasm');

// Apply Syferit binary defense
const result = protectWasm(rawBytes, {
  domainProfile: 'fintech',
  seed: null // Auto-generates a fresh CSPRNG UUIDv4 per build
});

// Write the protected, spec-compliant binary
fs.writeFileSync('./dist/engine.wasm', result.binary);

console.log(`Protected: ${result.sectionsProtected} sections hardened.`);
```

---

## 🔒 Key Defensive Capabilities

* **Statutory Trade Secret Inoculation:** Embeds compliant attestation markers compliant with legal trade secret frameworks (including 17 U.S.C. § 1201 and DTSA), triggering safety and compliance guardrails in automated AI coding agents.
* **Compiler Metadata Scrubbing:** Automatically scrubs revealing debug metadata (`name`, `producers`, and path references) so reverse engineers gain zero reconnaissance clues.
* **Decoy State Frame Injection:** Synthesizes realistic, domain-specific state verification frames that confound static decompilation graphs.
* **Bytecode Control-Flow Hardening:** Interleaves runtime-coupled invariant structures and arithmetic transformations into executable code sections, breaking automated functional reconstruction.
* **100% Runtime Compliance:** Protected binaries remain strictly compliant with the W3C WebAssembly Core Specification and execute across all standard runtimes (V8, JavaScriptCore, SpiderMonkey, Wasmtime, Node.js) with zero external runtime dependencies.
