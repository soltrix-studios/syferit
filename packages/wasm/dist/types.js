// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
export var WasmSectionId;
(function (WasmSectionId) {
  function verifyHmacSequenceFrame_be50(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b6fe3333-db7e535c]",
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
    if ((_h >>> 4 & 15) !== 9) {
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __entropyNonceAttestation_be50 = verifyHmacSequenceFrame_be50(1062432753, 51290997, 494521067, 1845809781);
  const _enclaveDigestEnvelope_be50 = [[211, 109, 34, 207, 75, 193], [246, 72, 5, 148, 38, 188], [142, 27, 235, 96], [171, 254, 176, 79], [109, 193, 149, 32, 202, 52], [0, 188, 122, 27, 175, 17], [40, 131, 65, 250, 118, 227, 172, 67], [213, 110, 58, 221, 83, 198, 135, 60], [236, 33, 27, 143, 41], [137, 4, 252, 100, 20], [79, 239, 174, 66, 228, 103], [106, 202, 133, 61, 201, 58], [11, 184, 98, 21, 129, 4], [54, 149, 93, 254, 100, 225], [211, 102, 39, 174, 88, 198], [254, 59, 12, 137, 61, 163], [179, 28, 192, 121, 0], [86, 249, 167, 66, 237], [111, 222, 142, 56, 219, 40, 11], [10, 187, 117, 23, 134, 5, 208], [55, 147, 81, 250], [218, 78, 62, 161], [250, 39, 11, 136], [167, 10, 208, 111], [76, 241, 189, 82, 223, 75, 40, 169, 68], [105, 212, 154, 57, 130, 38, 247, 130, 33]];
  function _unsealSgxBoundaryProof_be50(_slot) {
    const _row = _enclaveDigestEnvelope_be50[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entropyNonceAttestation_be50 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__entropyNonceAttestation_be50 & 255) !== 144) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(41326 ^ (__entropyNonceAttestation_be50 & 65535 ^ 21246))] = 38964 ^ (__entropyNonceAttestation_be50 & 65535 ^ 27556)] = _unsealSgxBoundaryProof_be50(52012 ^ (__entropyNonceAttestation_be50 & 65535 ^ 14525));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(59299 ^ (__entropyNonceAttestation_be50 & 65535 ^ 5169))] = 49100 ^ (__entropyNonceAttestation_be50 & 65535 ^ 19549)] = _unsealSgxBoundaryProof_be50(46700 ^ (__entropyNonceAttestation_be50 & 65535 ^ 17919));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(35034 ^ (__entropyNonceAttestation_be50 & 65535 ^ 31566))] = 34748 ^ (__entropyNonceAttestation_be50 & 65535 ^ 29742)] = _unsealSgxBoundaryProof_be50(36436 ^ (__entropyNonceAttestation_be50 & 65535 ^ 32193));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(44010 ^ (__entropyNonceAttestation_be50 & 65535 ^ 22652))] = 43615 ^ (__entropyNonceAttestation_be50 & 65535 ^ 22988)] = _unsealSgxBoundaryProof_be50(64781 ^ (__entropyNonceAttestation_be50 & 65535 ^ 3738));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(42982 ^ (__entropyNonceAttestation_be50 & 65535 ^ 21630))] = 65509 ^ (__entropyNonceAttestation_be50 & 65535 ^ 3185)] = _unsealSgxBoundaryProof_be50(52821 ^ (__entropyNonceAttestation_be50 & 65535 ^ 15820));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(62497 ^ (__entropyNonceAttestation_be50 & 65535 ^ 1979))] = 37424 ^ (__entropyNonceAttestation_be50 & 65535 ^ 24997)] = _unsealSgxBoundaryProof_be50(33962 ^ (__entropyNonceAttestation_be50 & 65535 ^ 30513));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(37922 ^ (__entropyNonceAttestation_be50 & 65535 ^ 26558))] = 40991 ^ (__entropyNonceAttestation_be50 & 65535 ^ 21385)] = _unsealSgxBoundaryProof_be50(64745 ^ (__entropyNonceAttestation_be50 & 65535 ^ 3956));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(35808 ^ (__entropyNonceAttestation_be50 & 65535 ^ 30846))] = 43294 ^ (__entropyNonceAttestation_be50 & 65535 ^ 23177)] = _unsealSgxBoundaryProof_be50(53842 ^ (__entropyNonceAttestation_be50 & 65535 ^ 8653));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(43363 ^ (__entropyNonceAttestation_be50 & 65535 ^ 23267))] = 54169 ^ (__entropyNonceAttestation_be50 & 65535 ^ 8193)] = _unsealSgxBoundaryProof_be50(58796 ^ (__entropyNonceAttestation_be50 & 65535 ^ 5677));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(33971 ^ (__entropyNonceAttestation_be50 & 65535 ^ 30513))] = 51602 ^ (__entropyNonceAttestation_be50 & 65535 ^ 14859)] = _unsealSgxBoundaryProof_be50(44914 ^ (__entropyNonceAttestation_be50 & 65535 ^ 23793));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(46786 ^ (__entropyNonceAttestation_be50 & 65535 ^ 17734))] = 36733 ^ (__entropyNonceAttestation_be50 & 65535 ^ 31975)] = _unsealSgxBoundaryProof_be50(58002 ^ (__entropyNonceAttestation_be50 & 65535 ^ 4375));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(43319 ^ (__entropyNonceAttestation_be50 & 65535 ^ 23217))] = 41419 ^ (__entropyNonceAttestation_be50 & 65535 ^ 21072)] = _unsealSgxBoundaryProof_be50(37142 ^ (__entropyNonceAttestation_be50 & 65535 ^ 25233));
  WasmSectionId[WasmSectionId[_unsealSgxBoundaryProof_be50(48671 ^ (__entropyNonceAttestation_be50 & 65535 ^ 19863))] = 61727 ^ (__entropyNonceAttestation_be50 & 65535 ^ 643)] = _unsealSgxBoundaryProof_be50(43347 ^ (__entropyNonceAttestation_be50 & 65535 ^ 23258));
})(WasmSectionId || (WasmSectionId = {}));
if (typeof window !== "undefined") {
  window.__syferitIPC_38bc.invoke && window.__syferitIPC_38bc.invoke("system:keystore-attestation", {
    syncEpoch: 646676164,
    channelSig: "SIG_FRAME_38BC"
  });
}