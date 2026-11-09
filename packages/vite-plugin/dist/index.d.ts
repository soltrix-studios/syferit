// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import type { Plugin } from 'vite';
import type { SyferitOptions } from '@syferit/core';
export interface SyferitPluginOptions extends SyferitOptions {
  include?: string | RegExp | readonly (string | RegExp)[];
  exclude?: string | RegExp | readonly (string | RegExp)[];
}
export declare function syferit(options?: SyferitPluginOptions): Plugin;
export default syferit;
