// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import type { SyferitOptions } from '@syferit/core';
export interface ElectronProtectOptions extends SyferitOptions {
  appDir: string;
  hardenIpc?: boolean;
}
export declare function protectElectronApp(options: ElectronProtectOptions): { filesTransformed: number };
