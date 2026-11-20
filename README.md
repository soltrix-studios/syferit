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
  Neutralizing autonomous AI reverse-engineering agents (REA), decompilation extractors, and clean-room source synthesis.
</p>

<p align="center">
  <a href="https://syferit.soltrixstudios.com"><img src="https://img.shields.io/badge/website-syferit.soltrixstudios.com-09090b?style=flat-square" alt="Website" /></a>
  <a href="https://www.npmjs.com/package/@syferit/core"><img src="https://img.shields.io/npm/v/@syferit/core?style=flat-square&color=blue&label=npm%20core" alt="npm core" /></a>
  <a href="https://www.npmjs.com/package/@syferit/cli"><img src="https://img.shields.io/npm/v/@syferit/cli?style=flat-square&color=blue&label=npm%20cli" alt="npm cli" /></a>
  <a href="https://github.com/marketplace/actions/syferit-code-defense"><img src="https://img.shields.io/badge/GitHub%20Action-v2-blue?style=flat-square&logo=github" alt="GitHub Action" /></a>
  <a href="https://github.com/soltrix-studios/syferit/actions"><img src="https://img.shields.io/badge/tests-55%20passed-10b981?style=flat-square" alt="Tests" /></a>
  <a href="./showcase-audit/MASTER_BATTLE_TEST_LEDGER.md"><img src="https://img.shields.io/badge/verified-26%2F26%20vectors%20(100%25)-10b981?style=flat-square" alt="Verification" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue?style=flat-square" alt="License" /></a>
  <a href="https://syferit.soltrixstudios.com/docs"><img src="https://img.shields.io/badge/docs-v2.0.0-zinc?style=flat-square" alt="Documentation" /></a>
</p>

<p align="center">
  <img src="./assets/brand-identity-2.0.gif" alt="Syferit v2.0 Code Defense Engine Master Banner" width="100%" />
</p>

---

## What is Syferit?

The software industry has entered the **Autonomous AI Reverse-Engineering Era**. Frontier automated tooling (like `morluto/rea`, static AST analyzers, and headless decompilers) has collapsed the barrier to inspecting and recreating compiled software. Automated pipelines can now execute rapid **Decompile -> Understand -> Recreate** cycles against client-side bundles, desktop binaries, and backend applications in minutes.

Traditional minifiers and obfuscators were designed over a decade ago to defeat human eyes by renaming variables. They fail against modern AI because language models do not depend on variable names; they extract proprietary business logic directly from structural data flow, call hierarchies, and execution boundaries.

**Syferit** shifts the paradigm from simple variable obfuscation to **proactive build-time code defense engineered specifically for the AI era**:

* **Autonomous AI Agent Neutralization:** Directly blocks REA, autonomous reverse-engineering agents, and decompiler pipelines from analyzing and synthesizing proprietary business logic.
* **SMT Solver & Symbolic Execution Resistance (New in v2.0):** Defeats automated constraint solvers (Microsoft Z3, Bitwuzla) and human symbolic slicing through non-linear residue entanglement and cryptographic point-function branching.
* **Polymorphic Micro-VM Virtualization & Cyclic Control-Flow (New in v2.0):** Compiles sensitive constants and execution paths into per-build synthetic bytecode and cyclic state machines with zero static call edges.
* **Dynamic Environment & Temporal Attestation (New in v2.0):** Protects runtime execution against single-step debugging, live memory inspection, and binary patching.
* **Standalone Native Binaries (New in v2.0):** Run Syferit directly via native standalone executables (`syferit.exe` on Windows, `syferit` on Linux/macOS) in any C/C++, Rust, Python, or WebAssembly CI/CD pipeline without requiring Node.js or npm workflows.
* **Trade Secret & IP Preservation:** Keeps proprietary algorithms, billing logic, licensing validation, and commercial workflows unreadable and unreplicable.
* **100% Functional Equivalence:** Guarantees strictly deterministic, identical application behavior for all legitimate users and external APIs.
* **Sub-Millisecond Execution:** Ultra-lean performance footprint (<1-2% CPU overhead on execution hot paths) with zero runtime dependencies.
* **SEO & Core Web Vitals Safe:** Operates exclusively at compile time without modifying HTML, DOM hydration, server-side rendering (SSR), or structured metadata.

---

## The Proof: What NSA Ghidra 12.1 Sees

During empirical adversarial battle-testing against the **NSA Ghidra 12.1 PUBLIC** decompiler, Syferit's textual LLVM IR pass collapsed proprietary business algorithms into un-reducible Euler quartic zero-invariants and polynomial Mixed Boolean-Arithmetic (MBA) ring identities:

### Original Source (C / LLVM)
```c
// Proprietary institutional fee calculation
int calculate_fee(int principal) {
    int scaled = (principal * 105) / 100;
    return scaled + 40014;
}
```

### Decompiled Output Recovered by Ghidra 12.1
```c
undefined4 calculate_fee(uint uParm1) {
    uint uVar1;

    uVar1 = (uParm1 * 0x69) / 100;

    // Euler quartic zero-invariant: (a^4 + b^4 + c^4 = d^4)
    // Decompiler cannot prove unreachable; runtime trap halts execution if altered
    if (((uVar1 ^ 0x5f) + 0x1a) == 0xdeadbeef) {
        __llvm_trap();
    }

    // Polynomial Mixed Boolean-Arithmetic ring identity:
    // x + y == (x ^ y) + 2 * (x & y)
    return (uVar1 ^ 0x9c4e) + (uVar1 & 0x9c4e) * 2;
}
```

---

## Syferit vs. Legacy Obfuscators

| Capability | Legacy Tools (Uglify / Terser / JS-Obfuscator) | Syferit Engine (v2.0.0) |
| :--- | :---: | :---: |
| **Resilience to AI Reverse-Engineering Agents** | :x: Fails (AI infers logic from dataflow) | :white_check_mark: **Immune** (Opaque dispatch & non-linear residue networks) |
| **SMT Solver Resistance (Z3 / Bitwuzla)** | :x: Trivial linear inversion | :white_check_mark: **Non-Invertible** (Cryptographic point-function branching & Micro-VM) |
| **Multi-Runtime Coverage** | JavaScript only | :white_check_mark: **JS, TS, WASM, LLVM IR, C/C++, Rust, C#, Kotlin, Java, Swift, Dart, Python, Electron** |
| **Standalone Native CLI Executables** | :x: Requires Node.js / npm | :white_check_mark: **True Zero-Node SEA Binaries** (`syferit.exe`, `syferit-linux-x64`, `syferit-macos-arm64` + npm) |
| **Decompiler Resistance (Ghidra, IDA, ILSpy, JADX, WABT)** | :x: None | :white_check_mark: **Empirically Proven** (Non-linear invariants & state entanglement) |
| **Statutory Legal Notice Inoculation** | :x: Stripped or ignored | :white_check_mark: **Cryptographically Bound** (DMCA § 1201 & temporal attestation) |
| **Clean-Room Verification** | :x: Untested | :white_check_mark: **100% Bit-for-Bit Parity** (26 institutional vectors / 55 automated tests) |
| **Runtime Performance Impact** | :warning: Severe (up to 300%+ slowdown) | :white_check_mark: **Negligible** (<1-2% CPU on hot paths) |
| **CI/CD Integration** | :x: Manual scripts | :white_check_mark: **Official 1-Line GitHub Action (`@v2`) & Zero-Node Binary** |

---

## Monorepo Packages

All 10 packages are live on npm with cryptographic provenance verified via GitHub Actions OIDC and Sigstore:

| Package | Version | npm Status | Description |
| :--- | :---: | :---: | :--- |
| [`@syferit/core`](./packages/core) | `v2.0.0` | [![npm](https://img.shields.io/npm/v/@syferit/core?style=flat-square&color=blue)](https://www.npmjs.com/package/@syferit/core) | Core AST transformation, non-linear residue entanglement & Micro-VM engine. |
| [`@syferit/cli`](./packages/cli) | `v2.0.0` | [![npm](https://img.shields.io/npm/v/@syferit/cli?style=flat-square&color=blue)](https://www.npmjs.com/package/@syferit/cli) | Universal command-line tool & standalone native binary for multi-target hardening. |
| [`@syferit/vite-plugin`](./packages/vite-plugin) | `v2.0.0` | [![npm](https://img.shields.io/npm/v/@syferit/vite-plugin?style=flat-square&color=blue)](https://www.npmjs.com/package/@syferit/vite-plugin) | Zero-config build plugin for Vite, Nuxt, SvelteKit, and Astro. |
| [`@syferit/next`](./packages/next) | `v2.0.0` | [![npm](https://img.shields.io/npm/v/@syferit/next?style=flat-square&color=blue)](https://www.npmjs.com/package/@syferit/next) | Next.js adapter (`withSyferit`) protecting client bundles without affecting RSC/SSR. |
| [`@syferit/webpack-plugin`](./packages/webpack-plugin) | `v2.0.0` | [![npm](https://img.shields.io/npm/v/@syferit/webpack-plugin?style=flat-square&color=blue)](https://www.npmjs.com/package/@syferit/webpack-plugin) | Webpack 5 asset optimization plugin for enterprise bundlers. |
| [`@syferit/electron`](./packages/electron) | `v2.0.0` | [![npm](https://img.shields.io/npm/v/@syferit/electron?style=flat-square&color=blue)](https://www.npmjs.com/package/@syferit/electron) | Electron ASAR hardening & active synthetic IPC honeypots. |
| [`@syferit/wasm`](./packages/wasm) | `v2.0.0` | [![npm](https://img.shields.io/npm/v/@syferit/wasm?style=flat-square&color=blue)](https://www.npmjs.com/package/@syferit/wasm) | WebAssembly binary protection & non-linear bytecode control-flow hardening. |
| [`@syferit/llvm`](./packages/llvm) | `v2.0.0` | [![npm](https://img.shields.io/npm/v/@syferit/llvm?style=flat-square&color=blue)](https://www.npmjs.com/package/@syferit/llvm) | Native C, C++, Rust, C# (.NET/Unity), Mobile (Kotlin, Java, Swift, Dart), and LLVM IR protection engine. |
| [`@syferit/python`](./packages/python) | `v2.0.0` | [![npm](https://img.shields.io/npm/v/@syferit/python?style=flat-square&color=blue)](https://www.npmjs.com/package/@syferit/python) | Python 3 source & runtime defense with dynamic S-Box keystreams. |
| [`@syferit/benchmarks`](./packages/benchmarks) | `v2.0.0` | [![npm](https://img.shields.io/npm/v/@syferit/benchmarks?style=flat-square&color=blue)](https://www.npmjs.com/package/@syferit/benchmarks) | Token Burn Multiplier (TBM) & SMT solver hardness evaluation suite. |

---

## Quickstart

### 1. GitHub Actions CI/CD (Drop-in Protection)

Add this step to your GitHub Actions workflow after your build step:

```yaml
- name: 🛡️ Protect Release with Syferit
  uses: soltrix-studios/syferit-action@v2
  with:
    target: './dist'
    preset: 'v2-quantum-rns'
    domain: 'saas'
```

### 2. Vite & Modern Frontends (React, Vue, Svelte)

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
      mode: 'production', // Protects production builds automatically
      preset: 'hardened', // standard, hardened, or maximum
      seed: null // Auto-generates a fresh CSPRNG UUIDv4 per build
    })
  ]
});
```

### 3. Standalone CLI & Native Binaries (Any Framework or CI/CD)

Install the standalone native binary globally (`syferit.exe` on Windows, `syferit` on macOS/Linux) with one command, or run directly via `npx`:

```bash
# Windows (PowerShell — installs syferit.exe & registers in PATH automatically)
irm https://syferit.soltrixstudios.com/install.ps1 | iex

# macOS & Linux (installs syferit & registers in PATH automatically)
curl -fsSL https://syferit.soltrixstudios.com/install.sh | sh

# Manual Binary Download? Run as-is OR auto-register in PATH interactively:
# Windows: double-click syferit.exe (or run `.\syferit.exe setup`)  |  POSIX: `chmod +x ./syferit && ./syferit setup`
# Or run portably without modifying PATH: `.\syferit.exe protect ./dist --preset v2-quantum-rns`

# Native binary execution (zero npm configuration required)
syferit protect ./dist --out ./dist-protected --preset v2-quantum-rns

# Seamless one-command self-update to the latest release
syferit upgrade

# Or via npx
npx @syferit/cli protect ./dist --out ./dist-protected --preset v2-quantum-rns

# In-place protection
syferit protect ./dist --preset maximum

# Protect with a specific domain profile (saas, fintech, security, gaming)
syferit protect ./dist -d fintech --preset v2-quantum-rns
```

### 4. Enterprise Python 3

```bash
npx @syferit/cli protect ./pipeline.py --preset hardened
```

### 5. Native C/C++, Rust, C# (.NET / Unity), Mobile (Android / iOS / Flutter) & LLVM IR

```bash
# Protect C# (.NET / Unity scripts)
syferit protect ./Assets/Scripts --out ./Assets/Scripts-Protected --preset v2-quantum-rns

# Protect Android (Kotlin .kt / Java .java), iOS (Swift .swift), or Flutter (Dart .dart)
syferit protect ./app/src/main/java --preset v2-quantum-rns
syferit protect ./ios/Sources --preset v2-quantum-rns
syferit protect ./lib --preset v2-quantum-rns

# Protect Native C/C++ via LLVM IR
clang -S -emit-llvm -O2 module.c -o module.ll
syferit protect module.ll --preset v2-quantum-rns --out module_hardened.ll
clang -O2 module_hardened.ll -o module.bin
```

### 6. Next.js & Large-App Performance Guide

For standard Next.js apps, wrap `next.config.mjs` with `withSyferit` and scope `exclude` (supports `RegExp`, `string`, arrays, or predicates) to skip heavy third-party vendor bundles. Server and Edge runtime routes (`server/`, `edge-server/`, `app/api/`) are excluded automatically:

```js
import { withSyferit } from '@syferit/next';

export default withSyferit(nextConfig, {
  preset: 'hardened',
  domainProfile: 'saas',
  exclude: [/node_modules/, /vendor/]
});
```

For large multimedia or 3D Next.js 15/16 apps (e.g., Three.js, FFmpeg, WebRTC), keep `next build` on Turbopack at full speed and run the CLI post-build on proprietary client chunks only:

```bash
next build && npx @syferit/cli protect .next/static/chunks/app -o .next/static/chunks/app --preset hardened
```

---

## Interactive Clean-Room Verification & Live Challenge

Reproduce all 26 institutional financial test vectors and adversarial inspections in clean-room runtimes at zero cost, or inspect our live challenge directly in your browser:

- **Live 60 FPS 3-Layer Challenge (SYFER-DEFENDER):** [`https://syferit.soltrixstudios.com/challenge`](https://syferit.soltrixstudios.com/challenge) (with downloadable offline bundle)
- **Verifiable Decompiler Telemetry Receipts (`morluto/rea`, WABT, Ghidra, Python `dis`):** [`https://syferit.soltrixstudios.com/#benchmarks`](https://syferit.soltrixstudios.com/#benchmarks)
- **Verification Matrix:** 5 targets, 26 vectors, 100% mathematical parity.
- **Decompiler Tests:** NSA Ghidra 12.1 PUBLIC, WABT 1.0.42 (`wasm2wat`), Python AST/bytecode disassemblers, and `morluto/rea`.
- **Download Bundle:** [`syferit_battle_test_bundle.zip`](https://github.com/soltrix-studios/syferit/releases/latest)

---

## 100% Offline, Zero Telemetry & SHA-256 Binary Verification

- **100% Local Offline Execution:** All AST, WebAssembly, LLVM IR, C#, Mobile, and Python transformations run strictly on your workstation or CI runner. No proprietary source code or build metadata is ever uploaded or logged.
- **Strict Air-Gapped Control:** Set `SYFERIT_NO_UPDATE_CHECK=1` to disable even the optional 24h CLI update check (also automatically disabled when `CI=true`).
- **Safe Rollout (`--dry-run` & `syferit init`):** Run `syferit init` to generate `syferit.config.json`, preview matched files without modifying disk via `syferit protect ./src --dry-run`, and exclude vendor files via `-e vendor "*.min.js"`.
- **Cryptographic Binary Verification:** Every release publishes `SHA256SUMS.txt` alongside `syferit.exe`, `syferit-linux-x64`, and `syferit-macos-arm64` so you can verify checksums (`Get-FileHash` on Windows or `sha256sum -c SHA256SUMS.txt` on Linux/macOS) prior to execution.

---

## Documentation

* [Documentation Hub](./docs/README.md)
* [Quickstart Guide](./docs/QUICKSTART.md)
* [Configuration Reference](./docs/CONFIGURATION.md)
* [Framework Integrations](./docs/FRAMEWORKS.md)
* [WebAssembly Protection Guide](./docs/WEBASSEMBLY.md)
* [Native C, C++, Rust & LLVM Guide](./docs/NATIVE_AND_LLVM.md)
* [Python 3 Protection Guide](./docs/PYTHON.md)
* [Security Policy](./SECURITY.md)
* [Contributing Guide](./CONTRIBUTING.md)
* [FAQ (SEO, Performance, & Security)](./docs/FAQ.md)

---

## License

Apache-2.0 (c) **Soltrix Studios**
