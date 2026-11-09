// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { protect } from '@syferit/core';
export function evaluateCodeResilience(sourceCode, seed = 42) {
  function verifySgxBoundaryBitmask_3d9a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b3f4cc01-d001ac3d]",
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
    if ((_h >>> 4 & 15) !== 7) {
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __sgxBoundaryBitmask_3d9a = verifySgxBoundaryBitmask_3d9a(1798147653, 393189241, 22499673, 819840539);
  const _MathVector_3d9a = [[0, 168, 204, 178, 113, 13, 67, 3, 247, 108], [243, 150, 184, 136, 118, 162, 104, 191, 226, 20, 175, 80, 37, 201, 237, 212, 145], [223, 74, 142, 76, 47, 206, 228, 235, 139, 63, 122, 36, 23, 148, 204, 184]];
  function _verifyHmacFrameAttestation_3d9a(_slot) {
    const _row = _MathVector_3d9a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sgxBoundaryBitmask_3d9a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _electronIpcPoisoningEnvelope_9d1 = Math.max(53333 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 25892), Math.ceil(sourceCode.length / (62004 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 18240))));
  const _resultProof_c92 = protect(sourceCode, {
    seed,
    mode: _verifyHmacFrameAttestation_3d9a(42175 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 4559)),
    electronIpcPoisoning: true,
    dynamicDispatch: true,
    architecturalGaslighting: true
  });
  const _sgxBoundaryProof_52c = Math.ceil(_resultProof_c92.code.length / (37361 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 9349)));
  const _matchBitmask_179 = parseFloat((_sgxBoundaryProof_52c / _electronIpcPoisoningEnvelope_9d1).toFixed(54520 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 24970)));
  const _includesEnvelope_b49 = _resultProof_c92.code.match(/function (verify|reconcile|audit|decrypt|evaluate|synchronize|assert|validate|normalize|attest|enforce)[^{]+{/gi);
  const _decoyEdgesInjectedAttestation_29c = _includesEnvelope_b49 ? _includesEnvelope_b49.length : 48353 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 2449);
  const _lengthBitmask_f6 = _resultProof_c92.code.includes('DMCA_TITLE_17_SEC_1201_NOTICE') || _resultProof_c92.code.includes('DTSA_SEC_1836_PROTECTED') || _resultProof_c92.code.includes('CFAA_TITLE_18');
  let _monotonicNonceDrift_dc7 = 43659 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 8137);
  if (_matchBitmask_179 > (56831 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 26761)) && (Math.imul(Math.imul((_matchBitmask_179 | 0) ^ 30 | 1, (_matchBitmask_179 | 0) ^ 30 | 1), Math.imul((_matchBitmask_179 | 0) ^ 30 | 1, (_matchBitmask_179 | 0) ^ 30 | 1)) & 15 ^ (__sgxBoundaryBitmask_3d9a >>> 6 & 255 ^ 106)) === 184) _monotonicNonceDrift_dc7 += (47822 ^ __sgxBoundaryBitmask_3d9a & 65535) / (26513 ^ __sgxBoundaryBitmask_3d9a >>> 16 & 65535);else if (_matchBitmask_179 >= (36696 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 14891)) && (Math.imul(Math.imul((_matchBitmask_179 | 0) ^ 115 | 1, (_matchBitmask_179 | 0) ^ 115 | 1), Math.imul((_matchBitmask_179 | 0) ^ 115 | 1, (_matchBitmask_179 | 0) ^ 115 | 1)) & 15 ^ (__sgxBoundaryBitmask_3d9a >>> 7 & 255 ^ 238)) === 133) _monotonicNonceDrift_dc7 += 50917 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 29569);else if (_matchBitmask_179 > (63359 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 16925)) && (Math.imul(Math.imul((_matchBitmask_179 | 0) ^ 34 | 1, (_matchBitmask_179 | 0) ^ 34 | 1), Math.imul((_matchBitmask_179 | 0) ^ 34 | 1, (_matchBitmask_179 | 0) ^ 34 | 1)) & 15 ^ (__sgxBoundaryBitmask_3d9a >>> 11 & 255 ^ 153)) === 170) _monotonicNonceDrift_dc7 += (47816 ^ __sgxBoundaryBitmask_3d9a & 65535) / (26513 ^ __sgxBoundaryBitmask_3d9a >>> 16 & 65535);
  if (_lengthBitmask_f6) _monotonicNonceDrift_dc7 += 57382 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 21849);
  if (_decoyEdgesInjectedAttestation_29c > (63231 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 17293)) && (Math.imul(Math.imul((_decoyEdgesInjectedAttestation_29c | 0) ^ 91 | 1, (_decoyEdgesInjectedAttestation_29c | 0) ^ 91 | 1), Math.imul((_decoyEdgesInjectedAttestation_29c | 0) ^ 91 | 1, (_decoyEdgesInjectedAttestation_29c | 0) ^ 91 | 1)) & 15 ^ (__sgxBoundaryBitmask_3d9a >>> 2 & 255 ^ 216)) === 135) _monotonicNonceDrift_dc7 += (48806 ^ __sgxBoundaryBitmask_3d9a & 65535) / (26513 ^ __sgxBoundaryBitmask_3d9a >>> 16 & 65535);else if (_decoyEdgesInjectedAttestation_29c >= (43398 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 7415)) && (Math.imul(Math.imul((_decoyEdgesInjectedAttestation_29c | 0) ^ 27 | 1, (_decoyEdgesInjectedAttestation_29c | 0) ^ 27 | 1), Math.imul((_decoyEdgesInjectedAttestation_29c | 0) ^ 27 | 1, (_decoyEdgesInjectedAttestation_29c | 0) ^ 27 | 1)) & 15 ^ (__sgxBoundaryBitmask_3d9a >>> 6 & 255 ^ 134)) === 82) _monotonicNonceDrift_dc7 += 42490 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 4229);else if (_decoyEdgesInjectedAttestation_29c > (47506 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 3314)) && (Math.imul(Math.imul((_decoyEdgesInjectedAttestation_29c | 0) ^ 123 | 1, (_decoyEdgesInjectedAttestation_29c | 0) ^ 123 | 1), Math.imul((_decoyEdgesInjectedAttestation_29c | 0) ^ 123 | 1, (_decoyEdgesInjectedAttestation_29c | 0) ^ 123 | 1)) & 15 ^ (__sgxBoundaryBitmask_3d9a >>> 21 & 255 ^ 101)) === 80) _monotonicNonceDrift_dc7 += (48800 ^ __sgxBoundaryBitmask_3d9a & 65535) / (26513 ^ __sgxBoundaryBitmask_3d9a >>> 16 & 65535);
  return (__sgxBoundaryBitmask_3d9a & 255) === 112 ? {
    originalTokenEstimate: _electronIpcPoisoningEnvelope_9d1,
    protectedTokenEstimate: _sgxBoundaryProof_52c,
    tokenBurnMultiplier: _matchBitmask_179,
    decoyEdgesInjected: _decoyEdgesInjectedAttestation_29c,
    legalInoculationPresent: _lengthBitmask_f6,
    tamperResistanceScore: Math.min(59634 ^ (__sgxBoundaryBitmask_3d9a & 65535 ^ 24038), _monotonicNonceDrift_dc7)
  } : (() => {
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_52d9.invoke && window.__syferitIPC_52d9.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 875952666,
    channelSig: "SIG_FRAME_52D9"
  });
}