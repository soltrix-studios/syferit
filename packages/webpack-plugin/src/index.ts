// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine, type SyferitOptions } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';


export interface SyferitWebpackPluginOptions extends SyferitOptions {
  test?: RegExp | ((assetName: string) => boolean);

  exclude?: RegExp | ((assetName: string) => boolean);
}


export class SyferitWebpackPlugin {
  private options: SyferitWebpackPluginOptions;
  private engine: SyferitEngine;

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
      const stage = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? 100;

      compilation.hooks.processAssets.tapPromise(
        {
          name: pluginName,
          stage
        },
        async (assets: Record<string, any>) => {
          for (const [pathname, asset] of Object.entries(assets)) {
            if (!this.shouldProcessAsset(pathname)) {
              continue;
            }

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
                  compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                }
                continue;
              }

              const sourceCode = typeof rawSource === 'string' ? rawSource : rawSource.toString('utf-8');
              const result = this.engine.transform(sourceCode, pathname);

              if (result.transformedCount > 0) {
                compilation.updateAsset(pathname, new RawSource(result.code));
              }
            } catch (err: any) {
              compilation.errors.push(
                new Error(`[SyferitWebpackPlugin] Failed to protect asset "${pathname}": ${err.message}`)
              );
            }
          }
        }
      );
    });
  }

  private shouldProcessAsset(pathname: string): boolean {
    if (!/(\.[cm]?jsx?|\.wasm)($|\?)/.test(pathname)) {
      return false;
    }

    if (this.options.exclude) {
      if (typeof this.options.exclude === 'function') {
        if (this.options.exclude(pathname)) return false;
      } else if (this.options.exclude.test(pathname)) {
        return false;
      }
    }

    if (this.options.test) {
      if (typeof this.options.test === 'function') {
        return this.options.test(pathname);
      }
      return this.options.test.test(pathname);
    }

    return true;
  }
}

export default SyferitWebpackPlugin;
