# Quickstart Guide

Get up and running with Syferit in under 60 seconds.

---

## 1. Vite & Modern Frontends (React, Vue, Svelte, Astro)

### Step 1: Install Plugin

```bash
npm install -D @syferit/vite-plugin
# or
pnpm add -D @syferit/vite-plugin
```

### Step 2: Configure `vite.config.ts`

Add Syferit to your Vite configuration plugins array:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { syferit } from '@syferit/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    syferit({
      mode: 'production' // Automatically activates during production builds
    })
  ]
});
```

### Step 3: Build Your Project

```bash
npm run build
```

Your production bundles in `dist/` are automatically protected against automated reverse engineering and cloning tools.

---

## 2. Next.js (App Router & Pages Router)

### Step 1: Install Adapter
```bash
npm install -D @syferit/next @syferit/webpack-plugin
```

### Step 2: Wrap `next.config.mjs`
```js
import { withSyferit } from '@syferit/next';

export default withSyferit({
  reactStrictMode: true
});
```

---

## 3. Universal CLI (Web, Native C/C++/Rust, Python & Wasm)

The standalone CLI allows you to protect any build directory or multi-language codebase with a single command. It automatically detects and hardens:
* **JavaScript & TypeScript** (`.js`, `.ts`, `.jsx`, `.tsx`, `.mjs`, `.cjs`)
* **WebAssembly Binaries** (`.wasm`)
* **Native C, C++, Rust & LLVM IR** (`.c`, `.cpp`, `.cc`, `.cxx`, `.rs`, `.ll`)
* **Python 3 Source Modules** (`.py`)

### Output to a New Directory (Recommended)

```bash
# Protect dist folder into a new protected directory with hardened preset
npx @syferit/cli protect ./dist --out ./dist-protected --preset hardened

# Target flag syntax
npx @syferit/cli protect -t ./dist -o ./dist-protected --preset maximum
```

### In-Place Protection

```bash
# Overwrite in-place with maximum defense preset
npx @syferit/cli protect ./dist --preset maximum
```

### Using with Specific Domain Profiles

Tailor the protection vocabulary to match your industry vertical:

```bash
# Available profiles: saas, fintech, security, gaming (-d or --domain / -p or --profile)
npx @syferit/cli protect ./dist -d fintech --preset hardened
```

---

## 4. Electron Desktop Applications

To protect Electron desktop applications before packaging:

```bash
npm install -D @syferit/electron
```

In your build script:

```ts
import { protectElectronApp } from '@syferit/electron';

protectElectronApp({
  appDir: './build/unpacked-app',
  hardenIpc: true
});
```

---

## 5. Python 3 & Native C/C++/Rust Applications

Protect Python backend/AI services or native C++/Rust modules directly from the CLI or programmatically:

```bash
# Protect a Python 3 project before packaging or containerization
npx @syferit/cli protect ./app --out ./dist-app --profile saas

# Protect native C/C++ or Rust source files prior to compilation
npx @syferit/cli protect ./src-native --out ./build/src-protected --profile security
```

For full details, see the [Python 3 Protection Guide](./PYTHON.md) and [Native C, C++, Rust & LLVM Guide](./NATIVE_AND_LLVM.md).
