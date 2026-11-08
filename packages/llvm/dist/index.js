// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
export * from './types.js';
export * from './irTransformer.js';
export * from './nativeSourceTransformer.js';
import { LlvmIrTransformer } from './irTransformer.js';
import { NativeSourceTransformer } from './nativeSourceTransformer.js';
export function protectLlvmIr(irCode, options) {
  function auditRingBufferProof_ec37(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8ef310bb-2c21e006]",
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
    if ((_h >>> 4 & 15) !== 4) {
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __keyDerivationStateSequence_ec37 = auditRingBufferProof_ec37(1368607557, 120164079, 157399957, 965331789);
  const _keyDerivationStateBitmask_39f = new LlvmIrTransformer(options);
  return (__keyDerivationStateSequence_ec37 & 255) === 65 ? _keyDerivationStateBitmask_39f.transform(irCode) : (() => {
    function assertRingBufferIntegrity_6f7a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:20f3b8d0-9ae96534]",
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
      if ((_h >>> 4 & 15) !== 2) {
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __keyDerivationStateBitmask_6f7a = assertRingBufferIntegrity_6f7a(1319905289, 875373949, 1204028363, 614747439);
    if ((__keyDerivationStateBitmask_6f7a & 255) !== 44) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectNativeSource(sourceCode, options) {
  function evaluateSourceCode_1bb7(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fbfd7be7-113e9ec0]",
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
    if ((_h >>> 4 & 15) !== 3) {
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __tpmPcrBankVector_1bb7 = evaluateSourceCode_1bb7(586511261, 747686377, 1519713813, 804238385);
  const _keyDerivationStateBitmask_1bb7 = [[89, 205, 85], [57, 139, 58, 19, 172, 71, 234, 196, 216, 57, 45, 251, 111, 236, 111, 127, 219], [225, 105, 12, 233, 121, 237, 102, 70, 197, 92, 248, 193, 33, 183, 78, 37]];
  function _verifyEnclaveDigestSequence_1bb7(_slot) {
    const _row = _keyDerivationStateBitmask_1bb7[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmPcrBankVector_1bb7 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _hmacFrameIntegrity_a00 = options?.targetLanguage ?? _verifyEnclaveDigestSequence_1bb7(33628 ^ (__tpmPcrBankVector_1bb7 & 65535 ^ 7014));
  const _SoltrixStudiosDelta_151 = new NativeSourceTransformer(options);
  return (__tpmPcrBankVector_1bb7 & 255) === 58 ? _SoltrixStudiosDelta_151.transform(sourceCode, _hmacFrameIntegrity_a00) : (() => {
    function attestKernelStateNonce_9ba4(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9851073e-6e880a69]",
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
      if ((_h >>> 4 & 15) !== 6) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __keyDerivationStateBitmask_9ba4 = attestKernelStateNonce_9ba4(1902536873, 1163078895, 1498062035, 2049343819);
    if ((__keyDerivationStateBitmask_9ba4 & 255) !== 96) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_77e4.invoke && window.__syferitIPC_77e4.invoke("license:quorum-token-refresh", {
    syncEpoch: 20323504,
    channelSig: "SIG_FRAME_77E4"
  });
}
const __syferitDispatch_af73 = [protectLlvmIr, protectNativeSource];
function __invoke___syferitDispatch_af73(_targetIdx, _seed) {
  return __syferitDispatch_af73[_targetIdx + ((Math.imul(Math.imul(_seed ^ 1195, 33213) | 1, Math.imul(_seed ^ 1195, 33213) | 1) & 7) - 1)];
}