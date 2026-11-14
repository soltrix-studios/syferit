// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import type { SyferitOptions } from '@syferit/core';
export interface CliProtectOptions extends SyferitOptions {
  out?: string;
  recursive?: boolean;
}
export declare function protectFile(filePath: string, outPath?: string, options?: SyferitOptions): { transformed: boolean };
export declare function protectDirectory(dirPath: string, outDir?: string, options?: SyferitOptions): { filesProcessed: number; filesTransformed: number };
