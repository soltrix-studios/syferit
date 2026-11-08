# Changelog

All notable changes to the Syferit Code Protection Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
  - Official Soltrix Studios signature banner (`[Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`) prepended across all protected output formats.
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
