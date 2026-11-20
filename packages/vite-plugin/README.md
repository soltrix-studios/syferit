<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="https://syferit.soltrixstudios.com/icon.png" alt="Syferit Logo" width="80" height="80" />
  </a>
</p>

<h1 align="center">@syferit/vite-plugin</h1>

<p align="center">
  <strong>Zero-Config Build Plugin for Vite, Nuxt, Svelte, and Astro (v2.0.0)</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em>
</p>

> Zero-config Vite and Rollup plugin for automated Syferit code protection. Part of the **[Syferit](https://syferit.soltrixstudios.com)** code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

---

## Installation

```bash
npm i -D @syferit/vite-plugin
```

## Quickstart

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { syferit } from '@syferit/vite-plugin';

export default defineConfig({
  plugins: [
    syferit({
      mode: 'production',
      preset: 'v2-quantum-rns',
      dynamicDispatch: true,
      domainProfile: 'saas'
    })
  ]
});
```

## Features

- **v2.0 RNS-ARX & Micro-VM Hardening:** Automatically protects emitted JS/TS chunks and `.wasm` assets during `vite build` with live terminal progress receipts.
- **Instant Dev HMR:** Automatically bypasses transformations in development mode (`vite dev`).
- **Zero Runtime Dependencies:** Ships compiled code with 100% deterministic equivalence.

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
