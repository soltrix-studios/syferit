// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
export var WasmSectionId;
(function (WasmSectionId) {
  function evaluateEnclaveDigest_5563(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:07c13c12-05f7d234]",
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
    if ((_h >>> 4 & 15) !== 13) {
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __keyDerivationStateVector_5563 = evaluateEnclaveDigest_5563(232259371, 252600903, 1349432371, 965561567);
  const _ringBufferSequence_5563 = [[158, 214, 93, 139, 30, 90], [65, 189, 32, 80, 249, 49], [115, 148, 8, 44], [24, 107, 237, 11], [56, 90, 178, 252, 119, 191], [223, 49, 151, 215, 88, 132], [253, 244, 98, 190, 59, 124, 207, 31], [166, 211, 95, 97, 0, 83, 170, 248], [81, 170, 52, 75, 252], [126, 145, 25, 32, 219], [2, 112, 205, 30, 145, 208], [57, 95, 168, 249, 122, 183], [222, 51, 133, 217, 76, 159], [249, 232, 96, 130, 51, 116], [166, 209, 68, 106, 5, 73], [77, 182, 41, 69, 238, 22], [126, 135, 31, 61, 181], [1, 108, 194, 6, 146], [50, 81, 173, 244, 110, 191, 40], [217, 14, 136, 211, 85, 152, 245], [130, 232, 118, 134], [165, 195, 83, 109], [79, 176, 40, 76], [116, 151, 245, 51], [17, 122, 210, 22, 170, 192, 79, 101, 9], [62, 33, 191, 253, 77, 187, 42, 94, 214]];
  function _auditSgxBoundaryProof_5563(_slot) {
    const _row = _ringBufferSequence_5563[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keyDerivationStateVector_5563 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__keyDerivationStateVector_5563 & 255) !== 221) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(17908 ^ (__keyDerivationStateVector_5563 & 65535 ^ 15145))] = 1657 ^ (__keyDerivationStateVector_5563 & 65535 ^ 30884)] = _auditSgxBoundaryProof_5563(31070 ^ (__keyDerivationStateVector_5563 & 65535 ^ 1922));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(14645 ^ (__keyDerivationStateVector_5563 & 65535 ^ 18410))] = 15581 ^ (__keyDerivationStateVector_5563 & 65535 ^ 16897)] = _auditSgxBoundaryProof_5563(14585 ^ (__keyDerivationStateVector_5563 & 65535 ^ 17959));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(31105 ^ (__keyDerivationStateVector_5563 & 65535 ^ 1880))] = 14877 ^ (__keyDerivationStateVector_5563 & 65535 ^ 17602)] = _auditSgxBoundaryProof_5563(12811 ^ (__keyDerivationStateVector_5563 & 65535 ^ 19667));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(22095 ^ (__keyDerivationStateVector_5563 & 65535 ^ 10388))] = 18896 ^ (__keyDerivationStateVector_5563 & 65535 ^ 14094)] = _auditSgxBoundaryProof_5563(10725 ^ (__keyDerivationStateVector_5563 & 65535 ^ 22335));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(28768 ^ (__keyDerivationStateVector_5563 & 65535 ^ 3765))] = 15454 ^ (__keyDerivationStateVector_5563 & 65535 ^ 17031)] = _auditSgxBoundaryProof_5563(14253 ^ (__keyDerivationStateVector_5563 & 65535 ^ 18809));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(14562 ^ (__keyDerivationStateVector_5563 & 65535 ^ 17973))] = 20210 ^ (__keyDerivationStateVector_5563 & 65535 ^ 12330)] = _auditSgxBoundaryProof_5563(14247 ^ (__keyDerivationStateVector_5563 & 65535 ^ 18801));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(15360 ^ (__keyDerivationStateVector_5563 & 65535 ^ 17105))] = 1679 ^ (__keyDerivationStateVector_5563 & 65535 ^ 30804)] = _auditSgxBoundaryProof_5563(22786 ^ (__keyDerivationStateVector_5563 & 65535 ^ 10194));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(10209 ^ (__keyDerivationStateVector_5563 & 65535 ^ 22834))] = 5974 ^ (__keyDerivationStateVector_5563 & 65535 ^ 27020)] = _auditSgxBoundaryProof_5563(3516 ^ (__keyDerivationStateVector_5563 & 65535 ^ 29550));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(569 ^ (__keyDerivationStateVector_5563 & 65535 ^ 31988))] = 28234 ^ (__keyDerivationStateVector_5563 & 65535 ^ 4255)] = _auditSgxBoundaryProof_5563(2838 ^ (__keyDerivationStateVector_5563 & 65535 ^ 30170));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(7522 ^ (__keyDerivationStateVector_5563 & 65535 ^ 25517))] = 27295 ^ (__keyDerivationStateVector_5563 & 65535 ^ 5195)] = _auditSgxBoundaryProof_5563(22998 ^ (__keyDerivationStateVector_5563 & 65535 ^ 10008));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(26961 ^ (__keyDerivationStateVector_5563 & 65535 ^ 6040))] = 22239 ^ (__keyDerivationStateVector_5563 & 65535 ^ 10248)] = _auditSgxBoundaryProof_5563(11266 ^ (__keyDerivationStateVector_5563 & 65535 ^ 21194));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(31338 ^ (__keyDerivationStateVector_5563 & 65535 ^ 1185))] = 18101 ^ (__keyDerivationStateVector_5563 & 65535 ^ 14435)] = _auditSgxBoundaryProof_5563(24519 ^ (__keyDerivationStateVector_5563 & 65535 ^ 8461));
  WasmSectionId[WasmSectionId[_auditSgxBoundaryProof_5563(31216 ^ (__keyDerivationStateVector_5563 & 65535 ^ 1845))] = 11055 ^ (__keyDerivationStateVector_5563 & 65535 ^ 22014)] = _auditSgxBoundaryProof_5563(30383 ^ (__keyDerivationStateVector_5563 & 65535 ^ 2155));
})(WasmSectionId || (WasmSectionId = {}));
if (typeof window !== "undefined") {
  window.__syferitIPC_942a.invoke && window.__syferitIPC_942a.invoke("system:keystore-attestation", {
    syncEpoch: 1597871112,
    channelSig: "SIG_FRAME_942A"
  });
}