// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
export interface WasmProtectionOptions {
  seed?: number | string | null;
  injectLegalInoculation?: boolean;
  scrambleCustomSections?: boolean;
  poisonWATDisassembly?: boolean;
  domainProfile?: 'saas' | 'fintech' | 'security' | 'gaming';
}
export interface WasmTransformResult {
  binary: Uint8Array;
  sectionsProtected: number;
  inoculationInjected: boolean;
  originalSize: number;
  protectedSize: number;
}
export declare class SyferitWasmEngine {
  constructor(options?: WasmProtectionOptions);
  protect(binaryBuffer: Uint8Array): WasmTransformResult;
}
export declare function protectWasm(binary: Uint8Array, options?: WasmProtectionOptions): WasmTransformResult;
