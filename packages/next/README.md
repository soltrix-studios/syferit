<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="https://syferit.soltrixstudios.com/icon.png" alt="Syferit Logo" width="80" height="80" />
  </a>
</p>

<h1 align="center">@syferit/next</h1>

<p align="center">
  <strong>Next.js Compiler Adapter for Client-Side Bundle Defense (v2.0.0)</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em>
</p>

> Next.js configuration adapter for Syferit AST hardening across client bundles without touching Server Components (RSC) or SSR. Part of the **[Syferit](https://syferit.soltrixstudios.com)** code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

---

## Installation

```bash
npm i -D @syferit/next @syferit/webpack-plugin
```

## Quickstart

```javascript
// next.config.mjs
import { withSyferit } from '@syferit/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withSyferit(nextConfig, {
  preset: 'v2-quantum-rns',
  domainProfile: 'saas',
  exclude: [/node_modules/, /vendor/]
});
```

### Production Build (`package.json`)

For Next.js 15+ (where Turbopack is the default development engine), configure your production build command with `--webpack` to activate the compiler asset defense pipeline:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build --webpack",
    "start": "next start"
  }
}
```

> **Note:** In development (`next dev`), `@syferit/next` automatically bypasses transformations so your Turbopack/HMR workflow remains completely unmodified and instant.

## Features

- **SEO, SSR & Core Web Vitals Safe:** Concentrates v2.0 hardening strictly on client-side chunks while leaving Server Components (RSC), HTML, and structured Schema.org JSON-LD untouched.
- **Zero Runtime Dependencies:** Sub-millisecond execution with 100% functional equivalence.

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
