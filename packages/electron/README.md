<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="https://syferit.soltrixstudios.com/icon.png" alt="Syferit Logo" width="80" height="80" />
  </a>
</p>

<h1 align="center">@syferit/electron</h1>

<p align="center">
  <strong>Desktop App Defense, ASAR Hardening &amp; IPC Decoy Boundaries (v2.0.0)</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em>
</p>

> Part of the **[Syferit](https://syferit.soltrixstudios.com)** code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

---

## Installation

```bash
npm i -D @syferit/electron
```

## Quickstart

```typescript
import { protectElectronApp } from '@syferit/electron';

const summary = protectElectronApp({
  appDir: './build/unpacked-app',
  hardenIpc: true,
  preset: 'v2-quantum-rns',
  domainProfile: 'security'
});

console.log(`Hardened ${summary.filesTransformed} Electron files.`);
```

## Features

- **Active IPC Honeypots & ASAR Hardening:** Protects Electron main, preload, and renderer scripts before packaging into `app.asar`.
- **v2.0 SMT-Hard Guards:** Combines RNS-ARX entanglement with anti-hook IPC tampering boundaries.
- **Zero Runtime Dependencies:** Compiles cleanly into production bundles without runtime packages.

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
