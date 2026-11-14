# Syferit: Frequently Asked Questions (FAQ)

## General & Vision

### What is Syferit?
Syferit is an advanced, build-time code protection framework created by Soltrix Studios. It is designed to safeguard proprietary client-side logic, intellectual property, and trade secrets against autonomous AI reverse-engineering agents, automated scrapers, and clone pipelines.

### How does Syferit differ from traditional minifiers and obfuscators?
Traditional tools were built a decade ago to make code difficult for *human eyes* to read. Modern AI-assisted tools do not read code like humans; they analyze execution patterns, dependency graphs, and structural data flow. Syferit is engineered from the ground up to counteract automated cognitive analysis, ensuring that your application's proprietary logic cannot be easily mapped or recreated.

---

## SEO, GEO & Search Discovery

### Will Syferit affect my Google, Bing, or search engine rankings?
**No.** Search engine crawlers (Googlebot, Bingbot) evaluate the **rendered output and semantic content** of your page, including the HTML, heading hierarchy, meta tags, structured JSON-LD data, and visual page speed.

Syferit guarantees **100% functional equivalence**. The final rendered DOM and interactive UI output are completely identical to unprotected code. Because Syferit does not mutate HTML markup, metadata, or SSR outputs, your search rankings and Core Web Vitals remain fully preserved.

### What about GEO (Generative Engine Optimization) and AI Search (Perplexity, ChatGPT Search, Google AI Overviews)?
**Your GEO citations and discovery are completely safe.** AI answer engines index clean text, public API documentation, Markdown, and structured schema markup. Syferit only protects the internal execution logic and proprietary algorithms within your compiled code bundles. It never touches your public copy, schema, or content layers.

### Will Syferit slow down my application or hurt Core Web Vitals?
**No.** Syferit's transformations are engineered to execute in single-digit nanoseconds on modern JavaScript engines. CPU overhead on hot paths is negligible (typically under 1-2%), ensuring that user experience and Google Core Web Vitals (INP, LCP, CLS) are completely unaffected.

---

## Developer Experience & Integration

### How do I install Syferit in my project?
For standard modern web applications, Syferit integrates as a frictionless, zero-config build plugin:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { syferit } from '@syferit/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    syferit({
      mode: 'production' // Automatically protects production builds
    })
  ]
});
```

### Can I protect only specific proprietary functions instead of the whole bundle?
**Yes.** Syferit supports selective protection directives so you can focus hardening directly on your core proprietary algorithms (such as custom rendering engines, pricing calculations, or patented data workflows):

```ts
// @syferit-protect
export function calculateProprietaryMetric(inputs: DataPayload): number {
  // Syferit applies specialized hardening to this routine
}
```

### What platforms, languages, and frameworks does Syferit support?
Syferit provides unified, cross-language protection across:
* **Web & Node.js:** JavaScript and TypeScript (`.js`, `.ts`, `.jsx`, `.tsx`, `.mjs`, `.cjs`) with first-class plugins for Vite, Next.js, Webpack 5, Nuxt 3, SvelteKit, and Astro.
* **Desktop Applications:** Electron (`.asar` archives and IPC channels).
* **WebAssembly:** Compiled `.wasm` binaries (C++, Rust, Go, Unity WebGL).
* **Native Compiled Software:** C, C++, Rust, and LLVM IR (`.c`, `.cpp`, `.rs`, `.ll`) via `@syferit/llvm` and the native `libSyferitPass` compiler plugin.
* **Python 3:** Python applications, AI/ML pipelines, and backend services (`.py`) via `@syferit/python`.

### Does Syferit protect WebAssembly (`.wasm`) modules?
**Yes.** Syferit provides dedicated WebAssembly binary hardening (`@syferit/wasm`). When building with Vite, Webpack, Next.js, or our universal CLI, Syferit automatically detects `.wasm` binaries, scrubs compiler metadata leaks (`name`, `producers`), injects statutory trade-secret attestation sections, and hardens bytecode control flow. Protected `.wasm` files remain 100% compliant with the W3C WebAssembly specification and run identically across all standard runtimes. See the [WebAssembly Guide](./WEBASSEMBLY.md) for details.

### Does Syferit protect native C/C++, Rust, and Python applications?
**Yes.** Syferit includes `@syferit/llvm` (plus the native `libSyferitPass` Clang/Rustc plugin) for hardening C, C++, Rust, and LLVM IR against decompilers such as Ghidra and IDA Pro, as well as `@syferit/python` for protecting Python 3 (`.py`) codebases prior to packaging or deployment. See the [Native & LLVM Guide](./NATIVE_AND_LLVM.md) and [Python 3 Guide](./PYTHON.md) for details.

---

## Security & Reliability

### Is Syferit safe to use in production?
**Yes.** Every transformation applied by Syferit is strictly verified for mathematical correctness and functional equivalence. Your application will behave identically for your legitimate users while remaining shielded from unauthorized automated inspection.
