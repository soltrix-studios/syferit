// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
export interface BenchmarkMetrics {
  originalTokenEstimate: number;
  protectedTokenEstimate: number;
  tokenBurnMultiplier: number;
  decoyEdgesInjected: number;
  legalInoculationPresent: boolean;
  tamperResistanceScore: number;
}
export declare function evaluateCodeResilience(sourceCode: string, seed?: number): BenchmarkMetrics;
