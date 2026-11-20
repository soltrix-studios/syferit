<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="https://syferit.soltrixstudios.com/icon.png" alt="Syferit Logo" width="80" height="80" />
  </a>
</p>

<h1 align="center">@syferit/python</h1>

<p align="center">
  <strong>Python 3 Code Defense &amp; Dynamic S-Box Keystream Engine (v2.0.0)</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em>
</p>

> Part of the **[Syferit](https://syferit.soltrixstudios.com)** code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

---

## Installation

```bash
npm i -D @syferit/python
```

## Quickstart

```typescript
import { protectPython, PythonTransformer } from '@syferit/python';

const transformer = new PythonTransformer({
  preset: 'v2-quantum-rns',
  domainProfile: 'security',
  encryptStrings: true
});

const result = transformer.transform(rawPythonCode);
console.log(result.code);
```

## Features

- **32-Bit RNS Tuples & 4-Round ARX Mixing:** Eliminates plaintext secrets from Python source and compiled `.pyc` `co_consts` tables.
- **Zero Runtime Dependencies:** Hardened modules run natively across Python 3.9–3.13 with standard library built-ins only.

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
