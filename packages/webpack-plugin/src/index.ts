// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
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
          const assetEntries = Object.entries(assets).filter(([pathname]) => this.shouldProcessAsset(pathname));
          if (assetEntries.length === 0) {
            return;
          }

          if (!this.options.quiet && !SyferitWebpackPlugin.bannerPrinted) {
            SyferitWebpackPlugin.bannerPrinted = true;
            const preset = (this.options.preset ?? 'hardened').padEnd(16, ' ');
            const profile = (this.options.domainProfile ?? 'saas').padEnd(10, ' ');
            console.log(SYFERIT_BANNER);
            console.log('  ╔═══════════════════════════════════════════════════════════════════════════╗');
            console.log('  ║  SYFERIT v2.0.1 — Symbolic Feistel & Residue Integrity Transformer        ║');
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

    return true;
  }
}

export default SyferitWebpackPlugin;
