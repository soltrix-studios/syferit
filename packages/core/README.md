<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="https://syferit.soltrixstudios.com/icon.png" alt="Syferit Logo" width="80" height="80" />
  </a>
</p>

<h1 align="center">@syferit/core</h1>

<p align="center">
  <strong>Core AST Transformation, RNS-ARX Entanglement &amp; Polymorphic Micro-VM Engine (v2.0.0)</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em>
</p>

> Part of the **[Syferit](https://syferit.soltrixstudios.com)** code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

---

## Installation

```bash
npm i @syferit/core
```

## Quickstart

```typescript
import { protect, SyferitEngine } from '@syferit/core';

const result = protect('function verifyLicense(key) { return key === 0x4B3A; }', {
  preset: 'v2-quantum-rns',
  domainProfile: 'security'
});

console.log(result.code);

// Reusable engine instance
const engine = new SyferitEngine({
  preset: 'v2-quantum-rns',
  rnsArxEntanglement: true,
  dynamicDispatch: true,
  domainProfile: 'fintech'
});
const hardened = engine.transform(sourceCode, 'pricing.ts');
```

## Features

- **v2.0 RNS-ARX & Point-Function Branching:** Splits secret constants across non-linear modular channels and defeats SMT solvers (Microsoft Z3, Bitwuzla).
- **Polymorphic Micro-VM & Cyclic Control Flow:** Compiles sensitive values into per-build synthetic bytecode with zero static call edges.
- **100% Functional Equivalence & Zero Runtime Dependencies:** Executes 100% locally at build time with sub-millisecond hot-path overhead.

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
