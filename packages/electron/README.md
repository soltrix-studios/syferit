<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="../../assets/icon.png" alt="Syferit Logo" width="80" height="80" />
  </a>
</p>

<h1 align="center">@syferit/electron</h1>

<p align="center">
  <strong>Desktop App Defense, ASAR Hardening &amp; IPC Decoy Boundaries</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em>
</p>

> Part of the **[Syferit](https://syferit.soltrixstudios.com)** code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

---

## Installation

```bash
npm i @syferit/electron
```

## Quickstart

```typescript
import { hardenElectronIPC } from '@syferit/electron';

// Inside your main/preload script:
hardenElectronIPC({
  tamperResponse: 'terminate',
  poisonChannels: true
});
```

## Features

- **Adversarial Resilience:** Specifically designed to defeat autonomous AI reverse-engineering agents, LLM-assisted decompilers, and MCP bridge tools.
- **Provable Equivalence:** Retains 100% deterministic execution behavior while maximizing structural and algorithmic entropy.
- **Zero Runtime Dependencies:** Lean and production-ready for mission-critical deployments.

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
