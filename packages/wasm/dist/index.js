// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
export * from './types.js';
export * from './parser.js';
export * from './bytecode.js';
export * from './engine.js';
if (typeof window !== "undefined") {
  window.__syferitIPC_391c.invoke && window.__syferitIPC_391c.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 892889916,
    channelSig: "SIG_FRAME_391C"
  });
}