// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import type { Plugin } from 'vite';
import { SyferitEngine, type SyferitOptions } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';


export interface SyferitPluginOptions extends SyferitOptions {
  include?: string | RegExp | readonly (string | RegExp)[];

  exclude?: string | RegExp | readonly (string | RegExp)[];

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

export function syferit(options: SyferitPluginOptions = {}): Plugin {
  let engine: SyferitEngine;
  let isProduction = false;
  let bannerPrinted = false;
  let modulesHardened = 0;

  const ensureBanner = () => {
    if (!bannerPrinted && !options.quiet) {
      bannerPrinted = true;
      const preset = (options.preset ?? 'hardened').padEnd(16, ' ');
      const profile = (options.domainProfile ?? 'saas').padEnd(10, ' ');
      console.log(SYFERIT_BANNER);
      console.log('  ╔═══════════════════════════════════════════════════════════════════════════╗');
      console.log('  ║  SYFERIT v2.0.1 — Symbolic Feistel & Residue Integrity Transformer        ║');
      console.log('  ║  "Don\'t Just Ship it. Syferit."  │  Soltrix Studios Code Defense Engine   ║');
      console.log('  ╠═══════════════════════════════════════════════════════════════════════════╣');
      console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
      console.log('  ║  ▸ Bundler : Vite / Rollup       │  ▸ Mode    : Production Hardening      ║');
      console.log('  ╚═══════════════════════════════════════════════════════════════════════════╝');
    }
  };

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

      const t0 = Date.now();
      const result = engine.transform(code, id);
      if (result.transformedCount === 0) {
        return null;
      }

      ensureBanner();
      modulesHardened++;
      if (!options.quiet) {
        const shortId = id.split(/[/\\]/).slice(-2).join('/');
        console.log(`  [${String(modulesHardened).padStart(2, '0')}] 🛡️  JS/TS  → ${shortId} (Hardened | ${Date.now() - t0}ms)`);
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
            const t0 = Date.now();
            const raw = asset.source;
            const buffer = typeof raw === 'string'
              ? new TextEncoder().encode(raw)
              : new Uint8Array(raw);

            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });

            if (result.sectionsProtected > 0) {
              ensureBanner();
              modulesHardened++;
              if (!options.quiet) {
                console.log(`  [${String(modulesHardened).padStart(2, '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            }
          }
        }
      }
    }
  };
}

export default syferit;
