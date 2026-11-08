// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import type { SyferitWebpackPluginOptions } from '@syferit/webpack-plugin';
export interface SyferitNextOptions extends SyferitWebpackPluginOptions {
  protectServer?: boolean;
}
export declare function withSyferit(nextConfig?: any, syferitOptions?: SyferitNextOptions): any;
export default withSyferit;
