<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="./assets/icon.png" alt="Syferit Raven Logo" width="120" height="120" />
  </a>
</p>

<h1 align="center">SYFERIT</h1>

<p align="center">
  <strong>Symbolic Feistel &amp; Residue Integrity Transformer</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em><br><br>
  <strong>The open-core build-time code defense engine.</strong><br>
  Neutralizing autonomous AI reverse-engineering agents, REA/Ghidra extractors, and clean-room source synthesis.
</p>

<p align="center">
  <a href="https://syferit.soltrixstudios.com"><img src="https://img.shields.io/badge/website-syferit.soltrixstudios.com-09090b?style=flat-square" alt="Website" /></a>
  <a href="https://github.com/soltrix-studios/syferit/actions"><img src="https://img.shields.io/badge/tests-32%20passed-10b981?style=flat-square" alt="Tests" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue?style=flat-square" alt="License" /></a>
  <a href="https://syferit.soltrixstudios.com/docs"><img src="https://img.shields.io/badge/docs-v0.4.5-zinc?style=flat-square" alt="Documentation" /></a>
</p>

<p align="center">
  <img src="./assets/brand-identity.png" alt="Syferit Code Defense Engine Master Banner" width="100%" />
</p>

---

## What is Syferit?

Modern AI coding agents (such as Claude Code, Cursor, and REA) have collapsed the barrier to reverse-engineering software. Traditional minifiers and obfuscators were designed a decade ago to defeat human eyes by renaming variables; modern AI models ignore variable names and infer business logic from **structural data flow, call graphs, and API boundaries**.

**Syferit** (**Sy**mbolic **Fe**istel & **R**esidue **I**ntegrity **T**ransformer) shifts the paradigm from **erasure** to **mathematical entanglement, one-way state coupling, and cognitive defense**:
* **Symbolic Logic Entanglement:** Replaces plain decision trees and primitives with Mixed Boolean-Arithmetic (MBA) and algebraic invariants that automated theorem provers and SMT solvers cannot reduce.
* **One-Way Feistel Scrambling:** Enforces non-invertible state transitions and S-Box derivation so code runs forward deterministically at native speed while making structural reverse-engineering computationally intractable.
* **Residue Arithmetic Traps:** Employs modular residue algebra to construct invariant labyrinths that lead autonomous decompiler bridges into dead ends.
* **Runtime Integrity Attestation:** Binds calculations to 128-bit cryptographic keyframes and session nonces; any tampering or patch attempt causes the application to immediately halt.
* **100% Functional Equivalence:** Guaranteed deterministic outputs with negligible runtime overhead (<1-2% CPU).
* **SEO & GEO Safe:** Zero impact on HTML, DOM rendering, Core Web Vitals, Googlebot, or AI search discovery (Perplexity, SearchGPT).

---

## Monorepo Packages

| Package | Version | Description |
| :--- | :--- | :--- |
| [`@syferit/core`](./packages/core) | `v0.4.5` | Core AST transformation, PRNG seed engine, and runtime state protection engine. |
| [`@syferit/vite-plugin`](./packages/vite-plugin) | `v0.4.5` | Zero-config build plugin for Vite, Nuxt, SvelteKit, and Astro. |
| [`@syferit/next`](./packages/next) | `v0.4.5` | Next.js adapter (`withSyferit`) protecting client bundles without affecting RSC/SSR. |
| [`@syferit/webpack-plugin`](./packages/webpack-plugin) | `v0.4.5` | Webpack 5 asset optimization plugin for enterprise and custom bundlers. |
| [`@syferit/cli`](./packages/cli) | `v0.4.5` | Universal command-line tool for CI/CD pipelines, Electron apps, and any build system. |
| [`@syferit/electron`](./packages/electron) | `v0.4.5` | Electron ASAR unpack/hardening/repack & IPC boundary decoy defense. |
| [`@syferit/wasm`](./packages/wasm) | `v0.4.5` | WebAssembly (`.wasm`) binary parser, bytecode protection, and section-level defense. |
| [`@syferit/llvm`](./packages/llvm) | `v0.4.5` | Native C, C++, Rust, and LLVM IR (`.ll`) protection engine + native `libSyferitPass` plugin. |
| [`@syferit/python`](./packages/python) | `v0.4.5` | Python 3 (`.py`) source & runtime protection engine for AI/ML and backend applications. |
| [`@syferit/benchmarks`](./packages/benchmarks) | `v0.4.5` | Token Burn Multiplier (TBM) evaluation & adversarial cognitive benchmark suite. |

---

## Quickstart

### 1. Vite & Modern Frontends

```bash
npm install -D @syferit/vite-plugin
```

Add to your `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { syferit } from '@syferit/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    syferit({
      mode: 'production', // Zero-config: protects production builds automatically
      preset: 'hardened', // standard, hardened, or maximum
      seed: null // Auto-generates a fresh CSPRNG UUIDv4 per build
    })
  ]
});
```

### 2. Standalone CLI (CI/CD & Any Framework)

```bash
# Protect an entire build directory into a new protected folder
npx @syferit/cli protect ./dist --out ./dist-protected --preset hardened

# In-place protection
npx @syferit/cli protect ./dist --preset maximum

# Protect with a specific domain profile (saas, fintech, security, gaming)
npx @syferit/cli protect ./dist -d fintech --preset hardened
```

---

## Development & Testing

```bash
# Install dependencies
npm install

# Run unit & anti-tamper tests across all packages
npm test

# Build all TypeScript packages
npm run build
```

---

## Documentation

* [Documentation Hub](./docs/README.md)
* [Quickstart Guide](./docs/QUICKSTART.md)
* [Configuration Reference](./docs/CONFIGURATION.md)
* [Framework Integrations](./docs/FRAMEWORKS.md)
* [WebAssembly Protection Guide](./docs/WEBASSEMBLY.md)
* [Native C, C++, Rust & LLVM Guide](./docs/NATIVE_AND_LLVM.md)
* [Python 3 Protection Guide](./docs/PYTHON.md)
* [FAQ (SEO, Performance, & Security)](./docs/FAQ.md)

---

## License

Apache-2.0 © **Soltrix Studios**
