<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="https://syferit.soltrixstudios.com/icon.png" alt="Syferit Logo" width="80" height="80" />
  </a>
</p>

<h1 align="center">@syferit/llvm</h1>

<p align="center">
  <strong>Native C/C++/Rust, C# (.NET/Unity), Mobile (Android/iOS/Flutter) &amp; LLVM IR Defense Engine (v2.0.0)</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em>
</p>

> Part of the **[Syferit](https://syferit.soltrixstudios.com)** code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

---

## Installation

```bash
npm i -D @syferit/llvm
```

## Quickstart

```typescript
import {
  protectLlvmIr,
  protectNativeSource,
  protectCSharp,
  protectKotlin,
  protectJava,
  protectSwift,
  protectDart
} from '@syferit/llvm';

// 1. Protect LLVM IR (.ll)
const hardenedIr = protectLlvmIr(rawLlvmIr, { domainProfile: 'fintech' });

// 2. Protect C / C++ / Rust / Objective-C source files
const hardenedCpp = protectNativeSource(cppSource, {
  targetLanguage: 'cpp',
  domainProfile: 'security'
});

// 3. Protect C# (.NET / Unity), Android (Kotlin / Java), iOS (Swift), Flutter (Dart)
const hardenedCs = protectCSharp(csSource, { domainProfile: 'gaming' });
const hardenedKt = protectKotlin(kotlinSource, { domainProfile: 'fintech' });
const hardenedSwift = protectSwift(swiftSource, { domainProfile: 'saas' });
const hardenedDart = protectDart(dartSource, { domainProfile: 'saas' });
```

## Features

- **Decompiler & SMT Solver Resistance:** Neutralizes NSA Ghidra, IDA Pro, ILSpy, dnSpy, JADX, and Z3/Bitwuzla with non-linear RNS-ARX entanglement and temporal anti-debug guards.
- **Load-Bearing Trade-Secret Attestation:** Cryptographically binds statutory legal markers into `.rodata` / `.rdata` and static enclave objects.
- **Zero Runtime Dependencies:** Produces 100% standard, compiler-ready source and SSA IR modules.

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
