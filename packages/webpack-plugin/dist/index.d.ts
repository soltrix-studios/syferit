// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import type { SyferitOptions } from '@syferit/core';
export interface SyferitWebpackPluginOptions extends SyferitOptions {
  test?: RegExp | ((assetName: string) => boolean);
  exclude?: RegExp | ((assetName: string) => boolean);
}
export declare class SyferitWebpackPlugin {
  constructor(options?: SyferitWebpackPluginOptions);
  apply(compiler: any): void;
}
export default SyferitWebpackPlugin;
