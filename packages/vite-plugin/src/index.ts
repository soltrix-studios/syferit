// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import type { Plugin } from 'vite';
import { SyferitEngine, type SyferitOptions } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';


export interface SyferitPluginOptions extends SyferitOptions {
  include?: string | RegExp | readonly (string | RegExp)[];

  exclude?: string | RegExp | readonly (string | RegExp)[];
}


export function syferit(options: SyferitPluginOptions = {}): Plugin {
  let engine: SyferitEngine;
  let isProduction = false;

  return {
    name: 'vite-plugin-syferit',
    enforce: 'post',

    configResolved(config) {
      isProduction = options.mode === 'production' || config.mode === 'production' || config.isProduction;
      engine = new SyferitEngine({
        ...options,
        mode: isProduction ? 'production' : 'development'
      });
    },

    transform(code: string, id: string) {
      if (id.includes('node_modules') || id.startsWith('\0')) {
        return null;
      }

      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }

      if (!isProduction && options.mode !== 'production') {
        return null;
      }

      const result = engine.transform(code, id);
      if (result.transformedCount === 0) {
        return null;
      }

      return {
        code: result.code,
        map: null
      };
    },

    generateBundle(_opts, bundle) {
      if (!isProduction && options.mode !== 'production') {
        return;
      }

      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith('.wasm')) {
          if (asset.type === 'asset' && asset.source) {
            const raw = asset.source;
            const buffer = typeof raw === 'string'
              ? new TextEncoder().encode(raw)
              : new Uint8Array(raw);

            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });

            if (result.sectionsProtected > 0) {
              asset.source = result.binary;
            }
          }
        }
      }
    }
  };
}

export default syferit;
