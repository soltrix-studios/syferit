// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
export * from './types.js';
export * from './irTransformer.js';
export * from './nativeSourceTransformer.js';
import { LlvmIrTransformer } from './irTransformer.js';
import { NativeSourceTransformer } from './nativeSourceTransformer.js';
export function protectLlvmIr(irCode, options) {
  const transformer = new LlvmIrTransformer(options);
  return transformer.transform(irCode);
}
export function protectNativeSource(sourceCode, options) {
  function unsealSgxBoundaryEnvelope_7fe9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:747b6947-d68a9560]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3];
    let _h = 2166136261;
    for (let _s = 0; _s < _tokVec.length; _s++) {
      _h = (_h ^ _tokVec[_s] >>> 0) >>> 0;
      _h = Math.imul(_h, 16777619) >>> 0;
      _h ^= _h >>> 13;
    }
    for (let _i = 0; _i < _legalAttestation.length; _i++) {
      _h ^= _legalAttestation.charCodeAt(_i);
      _h = Math.imul(_h, 16777619) >>> 0;
      _h ^= _h >>> 13;
    }
    _h = Math.imul(_h ^ _h >>> 16, 2246822507) >>> 0;
    _h = Math.imul(_h ^ _h >>> 13, 3266489909) >>> 0;
    _h = (_h ^ _h >>> 16) >>> 0;
    if ((_h & 65535) === 0) _h = (_h | 4919) >>> 0;
    if ((_h >>> 16 & 65535) === 0) _h = (_h | 1932591104) >>> 0;
    if ((_h >>> 4 & 15) !== 14) {
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __ringBufferSequence_7fe9 = unsealSgxBoundaryEnvelope_7fe9(481070883, 447459623, 101606871, 1068379947);
  const _SyferitEngineDelta_7fe9 = [[143, 109, 166], [119, 43, 139, 243, 250, 231, 187, 36, 102, 89, 124, 219, 185, 140, 222, 95, 21], [83, 9, 67, 201, 171, 141, 209, 102, 55, 252, 39, 161, 147, 87, 185, 5]];
  function _verifySoltrixStudiosContext_7fe9(_slot) {
    const _row = _SyferitEngineDelta_7fe9[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ringBufferSequence_7fe9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _sgxBoundaryVector_d17 = options?.targetLanguage ?? _verifySoltrixStudiosContext_7fe9(39885 ^ (__ringBufferSequence_7fe9 & 65535 ^ 25377));
  const _monotonicNonceDrift_5d = new NativeSourceTransformer(options);
  return (__ringBufferSequence_7fe9 & 255) === 236 ? _monotonicNonceDrift_5d.transform(sourceCode, _sgxBoundaryVector_d17) : (() => {
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_a316.invoke && window.__syferitIPC_a316.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 320677602,
    channelSig: "SIG_FRAME_A316"
  });
}
const __syferitDispatch_c288 = [protectLlvmIr, protectNativeSource];
function __invoke___syferitDispatch_c288(_targetIdx, _seed) {
  return __syferitDispatch_c288[_targetIdx + (Math.imul(Math.imul(_seed ^ 2301, 22571), Math.imul(_seed ^ 2301, 22571) + 1) & 1)];
}