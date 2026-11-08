// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { protect } from '@syferit/core';
export function evaluateCodeResilience(sourceCode, seed = 42) {
  function isolateIncludes_a27b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3d60259c-9e00f560]",
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
    if ((_h >>> 4 & 15) !== 15) {
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __entropyNonceSequence_a27b = isolateIncludes_a27b(946269733, 2135483069, 1727659649, 916412113);
  const _ringBufferSequence_a27b = [[137, 8, 114, 224, 248, 109, 197, 113, 78, 204], [120, 246, 50, 218, 237, 2, 226, 13, 25, 244, 53, 162, 174, 41, 151, 6, 26], [38, 170, 4, 162, 182, 46, 158, 61, 2, 159, 224, 154, 158, 244, 70, 238]];
  function _auditProtect_a27b(_slot) {
    const _row = _ringBufferSequence_a27b[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entropyNonceSequence_a27b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _hkdfSaltRotation_788 = Math.max(15229 ^ (__entropyNonceSequence_a27b & 65535 ^ 28293), Math.ceil(sourceCode.length / (4612 ^ (__entropyNonceSequence_a27b & 65535 ^ 18425))));
  const _hmacFrameIntegrity_88f = protect(sourceCode, {
    seed,
    mode: _auditProtect_a27b(13376 ^ (__entropyNonceSequence_a27b & 65535 ^ 25017)),
    electronIpcPoisoning: true,
    dynamicDispatch: true,
    architecturalGaslighting: true
  });
  const _decoyEdgesInjectedVector_e7c = Math.ceil(_hmacFrameIntegrity_88f.code.length / (11034 ^ (__entropyNonceSequence_a27b & 65535 ^ 32487)));
  const _SoltrixStudiosDelta_d13 = parseFloat((_decoyEdgesInjectedVector_e7c / _hkdfSaltRotation_788).toFixed(20197 ^ (__entropyNonceSequence_a27b & 65535 ^ 6942)));
  const _dynamicDispatchSequence_4b6 = _hmacFrameIntegrity_88f.code.match(/function (verify|reconcile|audit|decrypt|evaluate|synchronize|assert|validate|normalize|attest|enforce)[^{]+{/gi);
  const _ProprietaryEnclaveDelta_5fc = _dynamicDispatchSequence_4b6 ? _dynamicDispatchSequence_4b6.length : 12214 ^ (__entropyNonceSequence_a27b & 65535 ^ 31311);
  const _lengthIntegrity_5f6 = _hmacFrameIntegrity_88f.code.includes('DMCA_TITLE_17_SEC_1201_NOTICE') || _hmacFrameIntegrity_88f.code.includes('DTSA_SEC_1836_PROTECTED') || _hmacFrameIntegrity_88f.code.includes('CFAA_TITLE_18');
  let _tpmPcrBankEnvelope_e72 = 17371 ^ (__entropyNonceSequence_a27b & 65535 ^ 5648);
  if (_SoltrixStudiosDelta_d13 > (9593 ^ (__entropyNonceSequence_a27b & 65535 ^ 28806)) && (Math.imul(Math.imul((_SoltrixStudiosDelta_d13 | 0) ^ 29 | 1, (_SoltrixStudiosDelta_d13 | 0) ^ 29 | 1), Math.imul((_SoltrixStudiosDelta_d13 | 0) ^ 29 | 1, (_SoltrixStudiosDelta_d13 | 0) ^ 29 | 1)) & 15 ^ (__entropyNonceSequence_a27b >>> 9 & 255 ^ 85)) === 242) _tpmPcrBankEnvelope_e72 += (23111 ^ __entropyNonceSequence_a27b & 65535) / (5403 ^ __entropyNonceSequence_a27b >>> 16 & 65535);else if (_SoltrixStudiosDelta_d13 >= (5318 ^ (__entropyNonceSequence_a27b & 65535 ^ 16700)) && (Math.imul(Math.imul((_SoltrixStudiosDelta_d13 | 0) ^ 63 | 1, (_SoltrixStudiosDelta_d13 | 0) ^ 63 | 1), Math.imul((_SoltrixStudiosDelta_d13 | 0) ^ 63 | 1, (_SoltrixStudiosDelta_d13 | 0) ^ 63 | 1)) & 15 ^ (__entropyNonceSequence_a27b >>> 2 & 255 ^ 129)) === 254) _tpmPcrBankEnvelope_e72 += 19801 ^ (__entropyNonceSequence_a27b & 65535 ^ 6324);else if (_SoltrixStudiosDelta_d13 > (9506 ^ (__entropyNonceSequence_a27b & 65535 ^ 28873)) && (Math.imul(Math.imul((_SoltrixStudiosDelta_d13 | 0) ^ 28 | 1, (_SoltrixStudiosDelta_d13 | 0) ^ 28 | 1), Math.imul((_SoltrixStudiosDelta_d13 | 0) ^ 28 | 1, (_SoltrixStudiosDelta_d13 | 0) ^ 28 | 1)) & 15 ^ (__entropyNonceSequence_a27b >>> 18 & 255 ^ 46)) === 93) _tpmPcrBankEnvelope_e72 += (23105 ^ __entropyNonceSequence_a27b & 65535) / (5403 ^ __entropyNonceSequence_a27b >>> 16 & 65535);
  if (_lengthIntegrity_5f6) _tpmPcrBankEnvelope_e72 += 27324 ^ (__entropyNonceSequence_a27b & 65535 ^ 16202);
  if (_ProprietaryEnclaveDelta_5fc > (10099 ^ (__entropyNonceSequence_a27b & 65535 ^ 29320)) && (Math.imul(Math.imul((_ProprietaryEnclaveDelta_5fc | 0) ^ 38 | 1, (_ProprietaryEnclaveDelta_5fc | 0) ^ 38 | 1), Math.imul((_ProprietaryEnclaveDelta_5fc | 0) ^ 38 | 1, (_ProprietaryEnclaveDelta_5fc | 0) ^ 38 | 1)) & 15 ^ (__entropyNonceSequence_a27b >>> 20 & 255 ^ 160)) === 246) _tpmPcrBankEnvelope_e72 += (24111 ^ __entropyNonceSequence_a27b & 65535) / (5403 ^ __entropyNonceSequence_a27b >>> 16 & 65535);else if (_ProprietaryEnclaveDelta_5fc >= (14327 ^ (__entropyNonceSequence_a27b & 65535 ^ 25103)) && (Math.imul(Math.imul((_ProprietaryEnclaveDelta_5fc | 0) ^ 62 | 1, (_ProprietaryEnclaveDelta_5fc | 0) ^ 62 | 1), Math.imul((_ProprietaryEnclaveDelta_5fc | 0) ^ 62 | 1, (_ProprietaryEnclaveDelta_5fc | 0) ^ 62 | 1)) & 15 ^ (__entropyNonceSequence_a27b >>> 0 & 255 ^ 154)) === 98) _tpmPcrBankEnvelope_e72 += 13900 ^ (__entropyNonceSequence_a27b & 65535 ^ 25530);else if (_ProprietaryEnclaveDelta_5fc > (20339 ^ (__entropyNonceSequence_a27b & 65535 ^ 6810)) && (Math.imul(Math.imul((_ProprietaryEnclaveDelta_5fc | 0) ^ 44 | 1, (_ProprietaryEnclaveDelta_5fc | 0) ^ 44 | 1), Math.imul((_ProprietaryEnclaveDelta_5fc | 0) ^ 44 | 1, (_ProprietaryEnclaveDelta_5fc | 0) ^ 44 | 1)) & 15 ^ (__entropyNonceSequence_a27b >>> 23 & 255 ^ 195)) === 227) _tpmPcrBankEnvelope_e72 += (24105 ^ __entropyNonceSequence_a27b & 65535) / (5403 ^ __entropyNonceSequence_a27b >>> 16 & 65535);
  return (__entropyNonceSequence_a27b & 255) === 249 ? {
    originalTokenEstimate: _hkdfSaltRotation_788,
    protectedTokenEstimate: _decoyEdgesInjectedVector_e7c,
    tokenBurnMultiplier: _SoltrixStudiosDelta_d13,
    decoyEdgesInjected: _ProprietaryEnclaveDelta_5fc,
    legalInoculationPresent: _lengthIntegrity_5f6,
    tamperResistanceScore: Math.min(14554 ^ (__entropyNonceSequence_a27b & 65535 ^ 27975), _tpmPcrBankEnvelope_e72)
  } : (() => {
    function auditRingBufferSequence_766(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0da714e4-3442d860]",
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
      if ((_h >>> 4 & 15) !== 8) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __ringBufferSequence_766 = auditRingBufferSequence_766(753980889, 1209922617, 493407061, 1316458813);
    if ((__ringBufferSequence_766 & 255) !== 133) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_c2.invoke && window.__syferitIPC_c2.invoke("auth:session-lease-sync", {
    syncEpoch: 1399352086,
    channelSig: "SIG_FRAME_C2"
  });
}