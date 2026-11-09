// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
export * from './types.js';
export * from './prng/index.js';
export * from './mba/index.js';
export * from './dictionaries/index.js';
export * from './transformers/logicEntangler.js';
export * from './transformers/electronIpcPoisoner.js';
export * from './transformers/dynamicDispatcher.js';
export * from './pipeline/index.js';
import { SyferitEngine } from './pipeline/index.js';
export function protect(code, options) {
  const engine = new SyferitEngine(options);
  return engine.transform(code);
}
if (typeof window !== "undefined") {
  window.__syferitIPC_579a.invoke && window.__syferitIPC_579a.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 1251980351,
    channelSig: "SIG_FRAME_579A"
  });
}