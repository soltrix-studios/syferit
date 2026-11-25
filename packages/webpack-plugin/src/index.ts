// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import v8 from 'node:v8';
import { SyferitEngine, type SyferitOptions } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';


export type AssetFilter = string | RegExp | (string | RegExp)[] | ((assetName: string) => boolean);

export interface SyferitWebpackPluginOptions extends SyferitOptions {
  test?: AssetFilter;

  exclude?: AssetFilter;

  quiet?: boolean;
}

const SYFERIT_BANNER = `
   ▄████████ ▄██   ▄      ▄████████    ▄████████    ▄████████  ▄█      ███     
  ███    ███ ███   ██▄   ███    ███   ███    ███   ███    ███ ███  ▀█████████▄ 
  ███    █▀  ███▄▄▄███   ███    █▀    ███    █▀    ███    ███ ███▌    ▀███▀▀██ 
  ███        ▀▀▀▀▀▀███  ▄███▄▄▄      ▄███▄▄▄      ▄███▄▄▄▄██▀ ███▌     ███   ▀ 
▀███████████ ▄██   ███ ▀▀███▀▀▀     ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   ███▌     ███     
         ███ ███   ███   ███          ███    █▄  ▀███████████ ███      ███     
   ▄█    ███ ███   ███   ███          ███    ███   ███    ███ ███      ███     
 ▄████████▀   ▀█████▀    ███          ██████████   ███    ███ █▀      ▄████▀   
`;

export class SyferitWebpackPlugin {
  private options: SyferitWebpackPluginOptions;
  private engine: SyferitEngine;
  private static bannerPrinted = false;

  constructor(options: SyferitWebpackPluginOptions = {}) {
    this.options = options;
    this.engine = new SyferitEngine({
      ...options,
      mode: options.mode ?? 'production'
    });
  }

  apply(compiler: any): void {
    const isProduction =
      this.options.mode === 'production' ||
      compiler.options.mode === 'production';

    if (!isProduction && this.options.mode !== 'production') {
      return;
    }

    const pluginName = 'SyferitWebpackPlugin';

    compiler.hooks.compilation.tap(pluginName, (compilation: any) => {
      const stage = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE ?? 700;

      compilation.hooks.processAssets.tapPromise(
        {
          name: pluginName,
          stage
        },
        async (assets: Record<string, any>) => {
          const assetEntries = Object.entries(assets).filter(([pathname]) => {
            if (!this.shouldProcessAsset(pathname)) {
              return false;
            }
            if (!this.options.test && this.isPureNodeModulesChunk(compilation, pathname)) {
              return false;
            }
            return true;
          });
          if (assetEntries.length === 0) {
            return;
          }

          if (!this.options.quiet && !SyferitWebpackPlugin.bannerPrinted) {
            SyferitWebpackPlugin.bannerPrinted = true;
            const preset = (this.options.preset ?? 'v2-quantum-rns').padEnd(16, ' ');
            const profile = (this.options.domainProfile ?? 'saas').padEnd(10, ' ');
            console.log(SYFERIT_BANNER);
            console.log('  ╔═══════════════════════════════════════════════════════════════════════════╗');
            console.log('  ║  SYFERIT v2.1.1 — Symbolic Feistel & Residue Integrity Transformer        ║');
            console.log('  ║  "Don\'t Just Ship it. Syferit."  │  Soltrix Studios Code Defense Engine   ║');
            console.log('  ╠═══════════════════════════════════════════════════════════════════════════╣');
            console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
            console.log('  ║  ▸ Bundler : Webpack 5 / Next.js │  ▸ Mode    : Production Hardening      ║');
            console.log('  ╚═══════════════════════════════════════════════════════════════════════════╝');
          }

          let idx = 0;
          const total = assetEntries.length;
          const batchStart = Date.now();
          let hardenedCount = 0;

          for (const [pathname, asset] of assetEntries) {
            const heap = v8.getHeapStatistics();
            if (heap.heap_size_limit > 0 && heap.used_heap_size / heap.heap_size_limit > 0.85) {
              if (typeof (globalThis as any).gc === 'function') {
                try { (globalThis as any).gc(); } catch { /* ignore */ }
              }
              const afterGc = v8.getHeapStatistics();
              if (afterGc.used_heap_size / afterGc.heap_size_limit > 0.85) {
                if (!this.options.quiet) {
                  console.warn(`  ⚠ [Syferit] V8 heap usage above 85% ceiling; pausing in-bundler pass at ${pathname} to prevent OOM. Run 'syferit protect .next' post-build for a fresh memory process.`);
                }
                break;
              }
            }

            idx++;
            const t0 = Date.now();

            try {
              const rawSource = asset.source();
              const sources = compiler.webpack?.sources ?? (await import('webpack-sources')).default ?? (await import('webpack-sources'));
              const RawSource = sources.RawSource;

              if (pathname.endsWith('.wasm')) {
                const buffer = Buffer.isBuffer(rawSource)
                  ? new Uint8Array(rawSource)
                  : typeof rawSource === 'string'
                    ? new TextEncoder().encode(rawSource)
                    : new Uint8Array(rawSource.buffer || rawSource);

                const result = protectWasm(buffer, {
                  seed: this.options.seed,
                  domainProfile: this.options.domainProfile
                });

                if (result.sectionsProtected > 0) {
                  hardenedCount++;
                  compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                  if (!this.options.quiet) {
                    console.log(`  [${String(idx).padStart(2, '0')}/${String(total).padStart(2, '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                  }
                }
                continue;
              }

              const sourceCode = typeof rawSource === 'string' ? rawSource : rawSource.toString('utf-8');
              const result = this.engine.transform(sourceCode, pathname);

              if (result.transformedCount > 0) {
                hardenedCount++;
                compilation.updateAsset(pathname, new RawSource(result.code));
                if (!this.options.quiet) {
                  console.log(`  [${String(idx).padStart(2, '0')}/${String(total).padStart(2, '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              }
            } catch (err: any) {
              compilation.errors.push(
                new Error(`[SyferitWebpackPlugin] Failed to protect asset "${pathname}": ${err.message}`)
              );
            }
          }

          if (!this.options.quiet && hardenedCount > 0) {
            console.log(`  ✔ Syferit hardened ${hardenedCount}/${total} bundler chunks in ${Date.now() - batchStart}ms\n`);
          }
        }
      );
    });
  }

  private isPureNodeModulesChunk(compilation: any, pathname: string): boolean {
    const chunks = compilation?.chunks;
    const chunkGraph = compilation?.chunkGraph;
    if (!chunks || !chunkGraph?.getChunkModulesIterable) {
      return false;
    }

    const normAsset = pathname.replace(/\\/g, '/');
    for (const chunk of chunks) {
      const files: Iterable<string> | undefined = chunk?.files;
      if (!files) continue;
      let ownsAsset = false;
      for (const f of files) {
        if (f.replace(/\\/g, '/') === normAsset) {
          ownsAsset = true;
          break;
        }
      }
      if (!ownsAsset) continue;

      let withResourceCount = 0;
      let firstPartyCount = 0;
      for (const mod of chunkGraph.getChunkModulesIterable(chunk)) {
        const resPath: string | undefined = mod?.resource || mod?.rootModule?.resource;
        if (!resPath) continue;
        withResourceCount++;
        const normRes = resPath.replace(/\\/g, '/');
        if (!normRes.includes('/node_modules/')) {
          firstPartyCount++;
        }
      }
      if (withResourceCount > 0 && firstPartyCount === 0) {
        return true;
      }
    }
    return false;
  }

  private matchesAssetFilter(filter: AssetFilter, pathname: string): boolean {
    if (typeof filter === 'function') {
      return filter(pathname);
    }
    if (Array.isArray(filter)) {
      return filter.some((item) =>
        typeof item === 'string' ? pathname.includes(item) : item.test(pathname)
      );
    }
    if (typeof filter === 'string') {
      return pathname.includes(filter);
    }
    return filter.test(pathname);
  }

  private shouldProcessAsset(pathname: string): boolean {
    if (!/(\.[cm]?jsx?|\.wasm)($|\?)/.test(pathname)) {
      return false;
    }

    if (/(^|[/\\])(server|edge-server|app[/\\]api|_next[/\\]server)([/\\]|$)/.test(pathname)) {
      return false;
    }

    if (this.options.exclude && this.matchesAssetFilter(this.options.exclude, pathname)) {
      return false;
    }

    if (this.options.test) {
      return this.matchesAssetFilter(this.options.test, pathname);
    }

    if (
      /(^|[/\\])static[/\\]chunks[/\\]([0-9a-f]{8}|[0-9]+|framework|polyfills|webpack|main|main-app)[.-][0-9a-f]+\.js$/i.test(pathname) ||
      /(_ssgManifest|_buildManifest)/i.test(pathname)
    ) {
      return false;
    }

    return true;
  }
}

export default SyferitWebpackPlugin;
