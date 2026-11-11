# Changelog

All notable changes to the Syferit Code Protection Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-11-12

### Fixed
- **Monolithic WebAssembly Distribution (@syferit/wasm):**
  - Bundled `@syferit/wasm` into a single flat `dist/index.js` distribution, completely purging internal modular files (`bytecode.js`, `engine.js`, `parser.js`, `types.js`) from public packages.
  - Aligned all 10 packages to Gate 1 monolithic packaging specifications.

### Added
- **Repository Health & Community Specifications:**
  - Added official Apache-2.0 `LICENSE`, `SECURITY.md`, and `CONTRIBUTING.md` to public distribution roots.

## [1.0.0] - 2026-11-12

### Milestone
- **Syferit v1.0.0 Production Release:**
  - Official general availability of the Syferit Adversarial Code Defense Suite across 10 monorepo packages.
  - 100% bit-for-bit mathematical parity proven across 26 / 26 institutional financial test vectors in clean-room cloud instances.
  - Empirically resisted state-of-the-art reverse engineering tooling including the NSA Ghidra 12.1 PUBLIC decompiler, WABT 1.0.42, Python AST/bytecode disassemblers, and autonomous AI agents (`morluto/rea`).

### Added
- **Multi-Runtime Defense Matrix:**
  - **Native C/C++ & LLVM IR (`@syferit/llvm`):** Textual SSA register entanglement, Polynomial Mixed Boolean-Arithmetic (MBA) ring identities, and Euler quartic residue invariant injection.
  - **Enterprise Python 3 (`@syferit/python`):** AST-level docstring stripping, dynamic S-Box keystream string matrix generation, constant folding, and whole-notice FNV-1a key derivation.
  - **WebAssembly Core (`@syferit/wasm`):** Section 10 bytecode entanglement, opaque control flow flattening, and decoy custom section synthesis.
  - **Desktop Applications (`@syferit/electron`):** Multi-file AST transformation, ASAR archive extraction resistance, and active synthetic IPC honeypot channel poisoning.
  - **Universal Integration Wrappers (`@syferit/vite-plugin`, `@syferit/webpack-plugin`, `@syferit/next`, `@syferit/cli`):** Zero-friction compiler integration with stripped internal comments and hardened runtimes.
- **Active Statutory Legal Inoculation:**
  - Whole-notice cryptographic binding under DMCA Title 17 § 1201 and Defend Trade Secrets Act (18 U.S.C. § 1836).
  - Multi-point tamper resistance: altering any byte at the head, middle, or tail of the legal notice triggers immediate unrecoverable CPU traps (`@llvm.trap()`, `RuntimeError`).
- **Unified CJS/ESM Export Conditions:**
  - Added `"default": "./dist/index.js"` fallback across all 10 monorepo package definitions for seamless module resolution without requiring explicit `.mjs` extensions.

## [0.4.6] - 2026-11-09

### Fixed
- **Browser Decoy IPC Runtime Guard:**
  - Added falsy safety checks to `window.__syferitIPC` before invoking member methods, preventing `Uncaught TypeError: Cannot read properties of undefined (reading 'invoke')` in web browser environments.
  - Added dedicated browser-environment simulation tests verifying safe execution when `window` is present.

### Security & Distribution
- **Monolithic Single-File Packaging:**
  - Bundled `@syferit/core` and `@syferit/llvm` into unified, flat distributions (`dist/index.js`), completely eliminating internal subsystem folders (`/mba/`, `/transformers/`, `/pipeline/`) from public packages.
  - Removed all internal class and file structural metadata from public package registries.

## [0.4.5] - 2026-11-09

### Fixed
- **Webpack & Bundler Runtime Manifest Key Preservation:**
  - Preserved non-computed `ObjectProperty` and method numeric keys in `@syferit/core`'s numeric literal visitor, preventing Webpack chunk map and runtime dispatch dictionary corruption during bundler asset optimization.
- **Next.js 15+ / Turbopack Compatibility:**
  - Added documentation and configuration guidance for `@syferit/next` in Next.js 15 and 16 builds, clarifying the `--webpack` flag requirement for compiler asset pipeline execution while preserving native Turbopack dev HMR.

### Changed
- **Unified Brand Identity:**
  - Standardized the Vigilant Raven "S" emblem, master showcase banners, and *"Don't Just Ship it. Syferit."* motto across all monorepo packages, documentation, and package metadata.

## [0.4.4] - 2026-11-08

### Fixed
- **Scope-Constrained Dynamic Dispatch:**
  - Restricted dynamic dispatch table collection strictly to top-level program and export function declarations, preventing nested or inner functions from being referenced outside their lexical scope.

## [0.4.3] - 2026-11-08

### Added
- **Universal Zero-Leak Defense & Automated Comment Stripping:**
  - Automated 100% comment and docstring stripping across all supported languages (JavaScript, TypeScript, Python, C, C++, Rust, and LLVM IR) without altering private master source repositories.
  - Universal module-level top-level literal, dictionary, and array entanglement via `LogicEntangler` Pass 3.
  - Polymorphic runtime helper naming (`_enclave_matrix_`, `_unseal_slot_`, `_fold_carry_`, `_unmask_scalar_`, `_verify_quorum_`) eliminating legacy pattern giveaways.
  - Official Soltrix Studios signature banner (`[Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`) prepended across all protected output formats.
- **Hermetic Release Packaging (`prepare-public-release.mjs`):**
  - Scrubbed internal `.d.ts` declaration subtrees, shipping strictly verified root `index.d.ts` type declarations and stripping `//# sourceMappingURL` references.
  - Added automated 65-file zero-blueprint and zero-leak audit verification step.

### Added
- **Complete Monorepo Documentation:**
  - Published comprehensive `README.md` documentation, framework examples, and installation instructions for all 10 `@syferit/*` packages on npm.

## [0.4.1] - 2026-11-07

### Added
- **OIDC Trusted Publishing & Verified Provenance:**
  - Automated cryptographic supply-chain provenance for all 10 `@syferit/*` packages via GitHub Actions OpenID Connect (OIDC).
  - Eliminates static npm long-lived publish tokens in accordance with npm's security best practices.
- **Dedicated Package Documentation:**
  - Added individual `README.md` documentation, quickstart guides, and framework code snippets across all 10 monorepo packages.
- **Standardized Repository & Homepage Metadata:**
  - Linked all packages to `https://syferit.soltrixstudios.com` and public repository `soltrix-studios/syferit`.

### Fixed
- **CLI Binary Path Normalization:**
  - Normalized `bin` paths in `@syferit/cli` to eliminate npm v11 leading path warnings.

## [0.4.0] - 2026-11-07

### Added
- **Native C, C++, Rust & LLVM Protection (`@syferit/llvm` & `libSyferitPass`):**
  - Added portable protection for C, C++, Rust, and textual LLVM IR (`.ll`) alongside the native C++17 LLVM PassManager plugin (`llvm/`).
- **Python 3 Source & Runtime Protection (`@syferit/python`):**
  - Added full protection for Python 3 (`.py`) modules, AI/ML pipelines, and backend services while preserving docstrings, type hints, and shebangs.
- **WebAssembly Bytecode & Binary Protection (`@syferit/wasm`):**
  - Added full W3C WebAssembly 1.0/2.0 binary parsing, debug custom section scrubbing, statutory attestation injection, and bytecode instruction hardening.
- **Next.js (`@syferit/next`) & Webpack 5 (`@syferit/webpack-plugin`) Integrations:**
  - Added zero-config `withSyferit` adapter for Next.js App/Pages Router and `SyferitWebpackPlugin` for Webpack 5 bundles.
- **High-Entropy Attestation & Polymorphic Build Diversity (`@syferit/core`):**
  - Upgraded build-time seed generation to automatic CSPRNG UUIDv4 entropy by default (`seed: null`).
  - Expanded per-function keyframe derivation to 128-bit multi-word salt vectors paired with unique per-function attestation IDs.
  - Added automatic project identifier harvesting and custom vocabulary support (`customDictionary`).
- **Universal CLI Multi-Language Auto-Detection (`@syferit/cli`):**
  - `syferit protect` now automatically detects and hardens `.js`, `.ts`, `.jsx`, `.tsx`, `.wasm`, `.ll`, `.c`, `.cpp`, `.rs`, and `.py` files in a single pass.

## [0.3.0] - 2026-11-06

### Added
- **Dynamic String & Constant Protection (`@syferit/core`):**
  - Added runtime string and numeric literal protection so raw constants and tier identifiers are shielded from static inspection.
- **Interleaved Decoy Business Logic (`@syferit/core`):**
  - Added realistic domain decoy branches across conditional structures to counter automated sandbox and static analysis.

## [0.2.0] - 2026-11-06

### Added
- **Statutory Trade Secret & Legal Attestation (`@syferit/core`):**
  - Added load-bearing compliance and trade-secret attestation notices coupled to runtime execution state.
- **Electron & Benchmark Packages:**
  - Added `@syferit/electron` for ASAR archive and IPC boundary hardening.
  - Added `@syferit/benchmarks` for Token Burn Multiplier (TBM) and tamper-resistance verification.
  - Added dynamic call-graph dispatch tables (`dynamicDispatch`).

## [0.1.0] - 2026-11-06

### Added
- Initial monorepo release (`@syferit/core`, `@syferit/vite-plugin`, `@syferit/cli`).
- Deterministic PRNG engine for build-time polymorphism.
- Zero-config Vite build plugin (`@syferit/vite-plugin`).
- Universal standalone CLI (`@syferit/cli`).
