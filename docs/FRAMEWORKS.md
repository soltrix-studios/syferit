# Framework Integration Guides

Syferit seamlessly integrates into all major modern JavaScript and TypeScript build environments.

---

## 1. Next.js (App Router & Pages Router)

Protect client-side Next.js applications seamlessly using `@syferit/next`. It protects client bundles while keeping server components (RSC) and SSR runtimes 100% stable.

### Step 1: Install Adapter
```bash
npm install -D @syferit/next @syferit/webpack-plugin
```

### Step 2: Wrap `next.config.mjs`
```js
// next.config.mjs
import { withSyferit } from '@syferit/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

// Automatically activates on production builds
export default withSyferit(nextConfig, {
  domainProfile: 'saas',
  seed: null // Fresh CSPRNG UUIDv4 per build
});
```

### Step 3: Configure Production Build (`package.json`)
In Next.js 15+, Turbopack is the default development engine. Because `@syferit/next` injects code defense into the Webpack compilation pipeline, configure your production build command with `--webpack`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build --webpack",
    "start": "next start"
  }
}
```

> **Note:** In `next dev`, `@syferit/next` automatically stands down, allowing Turbopack to deliver instant Hot Module Replacement without interference.

*(Alternatively, if using custom post-build CI scripts, you can run `npx @syferit/cli protect .next/static` directly).*

---

## 2. Webpack 5 (Enterprise & Custom Bundlers)

For standalone Webpack 5 builds, Angular CLI, or Create React App setups:

### Step 1: Install Plugin
```bash
npm install -D @syferit/webpack-plugin
```

### Step 2: Add to `webpack.config.js`
```js
// webpack.config.js
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';

export default {
  mode: 'production',
  plugins: [
    new SyferitWebpackPlugin({
      domainProfile: 'fintech',
      seed: null
    })
  ]
};
```

---

## 3. Nuxt 3 (Vue)

Nuxt 3 uses Vite by default. Add Syferit directly into your `nuxt.config.ts`:

```ts
// nuxt.config.ts
import { syferit } from '@syferit/vite-plugin';

export default defineNuxtConfig({
  vite: {
    plugins: [
      syferit({
        mode: 'production'
      })
    ]
  }
});
```

---

## 4. SvelteKit

Configure Syferit inside `vite.config.ts`:

```ts
// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { syferit } from '@syferit/vite-plugin';

export default defineConfig({
  plugins: [
    sveltekit(),
    syferit({
      mode: 'production'
    })
  ]
});
```

---

## 5. GitHub Actions (Continuous Deployment)

Enforce protection automatically on every production release:

```yaml
name: Deploy Production
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install Dependencies
        run: npm ci

      - name: Build Application
        run: npm run build

      - name: Syferit Code Protection
        run: npx @syferit/cli protect ./dist --mode production

      - name: Deploy Artifacts
        run: npm run deploy
```
