<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="https://syferit.soltrixstudios.com/icon.png" alt="Syferit Logo" width="80" height="80" />
  </a>
</p>

<h1 align="center">@syferit/wasm</h1>

<p align="center">
  <strong>WebAssembly Binary Hardener &amp; RNS-ARX Bytecode Transformer (v2.0.0)</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em>
</p>

> WebAssembly binary transformer and anti-disassembly defense engine. Part of the **[Syferit](https://syferit.soltrixstudios.com)** code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

---

## Installation

```bash
npm i -D @syferit/wasm
```

## Quickstart

```typescript
import fs from 'node:fs';
import { protectWasm, SyferitWasmEngine } from '@syferit/wasm';

const wasmBytes = new Uint8Array(fs.readFileSync('module.wasm'));
const result = protectWasm(wasmBytes, {
  domainProfile: 'fintech',
  poisonWATDisassembly: true,
  scrambleCustomSections: true
});

fs.writeFileSync('module.protected.wasm', result.binary);
```

## Features

- **W3C Spec-Compliant Hardening:** Injects `i32.rem_u` RNS decomposition, `i32.rotl` ARX keyframes, and scrubs debug custom sections (`name`, `producers`).
- **Neutralizes Decompilers:** Breaks WABT (`wasm-decompile`, `wasm2wat`) and Ghidra WASM reconstruction with zero runtime dependencies.

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
