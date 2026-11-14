# Native C, C++, Rust & LLVM Protection Guide

Syferit provides comprehensive protection for native compiled software (`.c`, `.cpp`, `.rs`, and `.ll` LLVM Intermediate Representation) alongside web and WebAssembly applications.

---

## 🛡️ Defending Native Binaries in the AI Era

Historically, compiling proprietary software into native machine code (`x86_64` or `ARM64` executables, `.dll`, `.so`, `.dylib`, or mobile `.apk`/`.ipa` binaries) offered a strong barrier against casual inspection.

**Today, autonomous AI reverse-engineering pipelines have dramatically lowered that barrier:**
1. **Automated Decompiler Bridges:** AI agents connect directly to industry-standard decompilers (such as Ghidra, IDA Pro, Binary Ninja, and Radare2 via MCP servers) to lift native binaries into clean C-like pseudocode automatically.
2. **Static Binary Relinking & Porting:** Automated tools disassemble compiled binaries, identify standard library boundaries, and recompile proprietary logic for unauthorized platforms.
3. **String & Symbol Cross-Referencing:** Plaintext constants and string tables inside `.rodata` / `.rdata` allow automated scripts to pinpoint licensing checks, pricing formulas, and cryptographic keys in seconds.

**Syferit protects your native C, C++, and Rust codebases before or during compilation, neutralizing automated decompilers and AI agents while preserving full native execution speed.**

---

## ⚡ Two Flexible Integration Modes

Syferit supports two complementary workflows for native applications so you can protect code regardless of your compiler toolchain:

### Mode 1: Universal Source & IR CLI Protection (`@syferit/cli` / `@syferit/llvm`)
Works out-of-the-box with **any compiler** (MSVC, GCC, Clang, `rustc`, Android NDK, and Apple Xcode) with zero C++ plugin dependencies:

```bash
# Protect an entire native C/C++, Rust, or LLVM IR directory prior to compilation
npx @syferit/cli protect ./src-native --out ./src-protected --profile security
```

Or protect individual files directly:

```bash
# Protect a C++ source file
npx @syferit/cli protect ./src/engine.cpp --out ./build/engine.protected.cpp

# Protect a Rust module
npx @syferit/cli protect ./src/lib.rs --out ./build/lib.protected.rs

# Protect an LLVM IR (.ll) module
npx @syferit/cli protect ./build/module.ll --out ./build/module.protected.ll
```

---

### Mode 2: Native Clang / Rustc Compiler Pass Plugin (`libSyferitPass`)
For teams using LLVM-based toolchains (`clang`, `clang++`, `rustc`, or `opt`), Syferit also includes a native C++17 LLVM PassManager plugin located in `llvm/`.

#### Building the Native Pass Plugin
```bash
cmake -S llvm -B llvm/build -DCMAKE_BUILD_TYPE=Release
cmake --build llvm/build --config Release
```

#### Using with Clang / Clang++
```bash
clang++ -O2 -fpass-plugin=./llvm/build/libSyferitPass.so src/engine.cpp -o bin/engine
```

#### Using with Rust (`cargo`)
```bash
RUSTFLAGS="-Z llvm-plugins=./llvm/build/libSyferitPass.so" cargo build --release
```

---

## 🔧 Programmatic API (`@syferit/llvm`)

You can also integrate native source or LLVM IR protection directly into custom Node.js build scripts or CI/CD pipelines:

### Installation
```bash
npm install -D @syferit/llvm
```

### Usage Example
```ts
import fs from 'node:fs';
import { protectNativeSource, protectLlvmIr } from '@syferit/llvm';

// 1. Protect C/C++ or Rust source code
const cppSource = fs.readFileSync('./src/core_engine.cpp', 'utf-8');
const protectedCpp = protectNativeSource(cppSource, {
  targetLanguage: 'cpp',
  domainProfile: 'security'
});
fs.writeFileSync('./build/core_engine.cpp', protectedCpp.code);

// 2. Or protect textual LLVM IR (.ll)
const irSource = fs.readFileSync('./build/module.ll', 'utf-8');
const protectedIr = protectLlvmIr(irSource, {
  domainProfile: 'fintech'
});
fs.writeFileSync('./build/module.protected.ll', protectedIr.code);
```

---

## 🔒 Key Defensive Capabilities

* **Load-Bearing Statutory Attestation:** Embeds compiler-retained legal attestation markers directly into the binary's read-only data segment (`.rodata` / `.rdata`) so they cannot be stripped by linker dead-code elimination.
* **Anti-Tamper Execution Coupling:** Binds runtime execution state directly to the integrity of the protected module. Tampering with or patching out attestation data causes downstream calculations to fail deterministically.
* **Decompiler & Symbolic Execution Hardening:** Restructures arithmetic and control-flow paths to resist automated simplification in Ghidra, IDA Pro, and symbolic execution engines.
* **Cross-Reference (XREF) Shielding:** Protects sensitive string literals and numeric constants so static `strings` scans and decompiler cross-reference graphs cannot locate critical business logic.
