// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import type { SyferitOptions } from '@syferit/core';
export type NativeTargetLanguage = 'llvm-ir' | 'c' | 'cpp' | 'rust';
export interface NativeProtectionOptions extends SyferitOptions {
  targetLanguage?: NativeTargetLanguage;
}
export interface NativeTransformResult {
  code: string;
  transformedCount: number;
  seedUsed: number;
  inoculationInjected: boolean;
  stateKeyDerived: number;
}
export declare class LlvmIrTransformer {
  constructor(options?: NativeProtectionOptions);
  transform(irCode: string): NativeTransformResult;
}
export declare class NativeSourceTransformer {
  constructor(options?: NativeProtectionOptions);
  transform(sourceCode: string, lang?: NativeTargetLanguage): NativeTransformResult;
}
export declare function protectLlvmIr(irCode: string, options?: NativeProtectionOptions): NativeTransformResult;
export declare function protectNativeSource(sourceCode: string, options?: NativeProtectionOptions): NativeTransformResult;
