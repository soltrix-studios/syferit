// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import type { SyferitOptions } from '@syferit/core';
export type AssetFilter = string | RegExp | (string | RegExp)[] | ((assetName: string) => boolean);
export interface SyferitWebpackPluginOptions extends SyferitOptions {
  test?: AssetFilter;
  exclude?: AssetFilter;
  quiet?: boolean;
}
export declare class SyferitWebpackPlugin {
  constructor(options?: SyferitWebpackPluginOptions);
  apply(compiler: any): void;
}
export default SyferitWebpackPlugin;
