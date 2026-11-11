# Contributing to Syferit

Thank you for your interest in contributing to **Syferit**, the universal code defense framework by Soltrix Studios.

---

## Code of Conduct

We are committed to providing a welcoming, inclusive, and professional environment. Please treat all contributors and maintainers with respect.

---

## Monorepo Architecture

Syferit is structured as an npm workspaces monorepo across 10 packages:

- `packages/core`: Core AST obfuscation and symbolic transformation engine.
- `packages/wasm`: WebAssembly parser and Section 10 instruction flattening.
- `packages/llvm`: Native C/C++ LLVM IR pass and MBA ring identities.
- `packages/python`: Python AST protection and dynamic S-Box keystreams.
- `packages/electron`: Desktop ASAR protection and IPC honeypots.
- `packages/cli`: Standalone CLI for multi-target batch processing.
- `packages/vite-plugin`: Vite / Nuxt / SvelteKit / Astro build plugin.
- `packages/webpack-plugin`: Webpack 5 production compilation plugin.
- `packages/next`: Next.js 14/15/16 client bundle adapter.
- `packages/benchmarks`: Token Burn Multiplier (TBM) evaluation suite.

---

## Local Development Setup

### Prerequisites
- Node.js >= 22.0.0
- npm >= 10.0.0
- Git

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/soltrix-studios/syferit.git
cd syferit

# Install dependencies across all packages
npm install

# Build all packages in dependency order
npm run build

# Run all 45 unit and anti-tamper test suites
npm test
```

---

## Coding Standards

1. **Strict Zero Em-Dash Policy:** Never emit em-dashes (`\u2014`) in any code, comments, documentation, or commit messages. Use colons, standard hyphens, commas, or parentheses instead.
2. **Determinism:** Transformations with identical seeds must produce bit-for-bit identical output.
3. **Equivalence:** All AST and bytecode transformations must maintain 100% mathematical equivalence across edge cases and financial precision types.
4. **Air-Gap Integrity:** Never commit proprietary internal source paths to public distribution manifests.

---

## Pull Request Guidelines

1. Create a feature branch from `main`: `git checkout -b feature/my-enhancement`.
2. Ensure all 45 test suites pass: `npm test`.
3. Verify production build succeeds: `npm run build`.
4. Submit a Pull Request targeting `main` with a clear description of the enhancement or fix.
