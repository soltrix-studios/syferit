// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
export type ProtectionPreset = 'standard' | 'hardened' | 'maximum' | 'v2-quantum-rns';
export interface SyferitOptions {
  preset?: ProtectionPreset;
  rnsArxEntanglement?: boolean;
  seed?: number | string | null;
  mode?: 'development' | 'production';
  domainProfile?: 'saas' | 'fintech' | 'security' | 'gaming';
  customDictionary?: readonly string[];
  entanglementIntensity?: number;
  architecturalGaslighting?: boolean;
  electronIpcPoisoning?: boolean;
  dynamicDispatch?: boolean;
}
export interface TransformResult {
  code: string;
  map?: any;
  transformedCount: number;
  seedUsed: number;
}
export declare class SyferitEngine {
  constructor(options?: SyferitOptions);
  transform(sourceCode: string, filename?: string): TransformResult;
}
export declare function protect(code: string, options?: SyferitOptions): TransformResult;
