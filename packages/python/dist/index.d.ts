// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import type { SyferitOptions } from '@syferit/core';
export interface PythonProtectionOptions extends SyferitOptions {
  encryptStrings?: boolean;
}
export interface PythonTransformResult {
  code: string;
  transformedCount: number;
  seedUsed: number;
  inoculationInjected: boolean;
  stateKeyDerived: number;
}
export declare class PythonTransformer {
  constructor(options?: PythonProtectionOptions);
  transform(pythonCode: string): PythonTransformResult;
}
export declare function protectPython(pythonCode: string, options?: PythonProtectionOptions): PythonTransformResult;
