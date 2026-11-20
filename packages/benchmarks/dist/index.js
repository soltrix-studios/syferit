// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { protect, WasmMathCore } from '@syferit/core';
export function evaluateRnsArxSmtHardness(seed = 2026) {
  function attestEnclaveAttestation_d2ef(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:209f1d87-f0498394]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3],
      _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
    const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
    if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
    if ((_h >>> 4 & 15) !== 0) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __getInstanceState_d2ef = attestEnclaveAttestation_d2ef(1853433527, 976231467, 43092333, 904791003);
  function _authenticateArxQuarterRounds_rns_d2ef(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 227,
      _r2 = _u % 239,
      _r3 = _u % 229,
      _r4 = _u % 233;
    let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
      _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
      _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
      _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
    for (let _rnd = 0; _rnd < 2; _rnd++) {
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
      if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
    }
    return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
  }
  function _rotateProtect_vm_d2ef(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 110) {
        _stk.push((__getInstanceState_d2ef >>> 0) % _a ^ _b);
      } else if (_op === 199) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 36) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 121) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _targetDigestProof_37e = WasmMathCore.getInstance();
  const _basisCheck_bce = _targetDigestProof_37e.selectRnsBasis(seed);
  const _nonceScalar_b10 = 3735884599 + ((__getInstanceState_d2ef & 255) - 14) >>> _rotateProtect_vm_d2ef([110, 199, 26967, 199, 12, 0, 110, 227, 972, 121, 0, 0, 110, 199, 110154737, 36, 0, 0]);
  const _quorumEnvelope_779 = 1497777490 + ((__getInstanceState_d2ef & 255) - 14) >>> _rotateProtect_vm_d2ef([110, 199, 25227, 199, 8, 0, 110, 227, 26121, 121, 0, 0, 110, 199, 6502196, 36, 0, 0]);
  const _signatureEnvelope_5ac = _targetDigestProof_37e.decomposeRns(_nonceScalar_b10, _basisCheck_bce);
  const _rnsModuliCountFrame_fc9 = _targetDigestProof_37e.arxPointDigest(_signatureEnvelope_5ac, _quorumEnvelope_779);
  const _estimatedCnfClausesProof_512 = (_quorumEnvelope_779 | _rotateProtect_vm_d2ef([110, 199, 3774, 199, 12, 0, 110, 227, 1477, 121, 0, 0, 110, 199, 15615481, 36, 0, 0])) >>> _rotateProtect_vm_d2ef([110, 199, 26489, 199, 16, 0, 110, 227, 5261, 121, 0, 0, 110, 199, 1730352304, 36, 0, 0]);
  const _secretAlphaVector_657 = _targetDigestProof_37e.modInverse32(_estimatedCnfClausesProof_512);
  const _alphaResiduesDigest_e9b = Math.imul(_rnsModuliCountFrame_fc9, _secretAlphaVector_657) >>> (39942719 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 14333));
  const _enclaveAttestation_854 = _alphaResiduesDigest_e9b !== _nonceScalar_b10;
  let _tpmBank_4bb = 1024330253 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 23807);
  for (let bit = -519497483 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 12315); bit < (116122707 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 31521)); bit++) {
    const perturbed = (_nonceScalar_b10 ^ (109593544 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 11003)) << bit) >>> (-871190535 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 24159));
    const pResidues = _targetDigestProof_37e.decomposeRns(perturbed, _basisCheck_bce);
    const pDigest = _targetDigestProof_37e.arxPointDigest(pResidues, _quorumEnvelope_779);
    let diff = (_rnsModuliCountFrame_fc9 ^ pDigest) >>> (2121241835 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 5627));
    while (diff !== (-287584515 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 4927))) {
      _tpmBank_4bb += diff & (1887258588 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 12883));
      diff >>>= 210075268 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 31769);
    }
  }
  const _mathCoreBank_125 = Number((_tpmBank_4bb / ((-1640533693 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 17111)) * (1547977797 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 21493)))).toFixed(-117060154 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 4901)));
  const _certificateDigest_dc5 = _basisCheck_bce.length * (394672995 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 531)) + (-1281874799 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 11901)) * (-2108741353 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 14091));
  return (__getInstanceState_d2ef & 255) === 14 ? {
    rnsModuliCount: _basisCheck_bce.length,
    arxQuarterRounds: 211829367 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 30783),
    bitwidthCarryChain: 1254767587 ^ _authenticateArxQuarterRounds_rns_d2ef(__getInstanceState_d2ef, 23295),
    estimatedCnfClauses: _certificateDigest_dc5,
    linearInversionDefeated: _enclaveAttestation_854,
    avalancheBitFlipRatio: _mathCoreBank_125
  } : (() => {
    function attestEnclaveAttestation_7e5b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ff4b6503-8e562951]",
        _tokVec = [_tok0, _tok1, _tok2, _tok3],
        _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
      const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
      if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
      if ((_h >>> 4 & 15) !== 12) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __lengthState_7e5b = attestEnclaveAttestation_7e5b(166898033, 1998595527, 244640761, 625917365);
    function _validateQuorumEnvelope_rns_7e5b(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 227,
        _r2 = _u % 199,
        _r3 = _u % 197,
        _r4 = _u % 223;
      let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
        _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
        _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
        _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
      for (let _rnd = 0; _rnd < 2; _rnd++) {
        _v0 = _v0 + _v1 >>> 0;
        _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
        _v2 = _v2 + _v3 >>> 0;
        _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
        _v0 = _v0 + _v1 >>> 0;
        _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
        _v2 = _v2 + _v3 >>> 0;
        _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
        if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
      }
      return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
    }
    if ((__lengthState_7e5b & 255) !== 197) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function evaluateCodeResilience(sourceCode, seed = 42) {
  function authenticateArxQuarterRounds_20c2(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:46f720b5-8261e843]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3],
      _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
    const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
    if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
    if ((_h >>> 4 & 15) !== 5) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __NumberState_20c2 = authenticateArxQuarterRounds_20c2(364741101, 1968009281, 96707453, 2054629605);
  function _auditPResidues_rns_20c2(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 211,
      _r2 = _u % 251,
      _r3 = _u % 197,
      _r4 = _u % 223;
    let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
      _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
      _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
      _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
    for (let _rnd = 0; _rnd < 2; _rnd++) {
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
      if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
    }
    return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
  }
  function _isolateSeed_vm_20c2(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 56) {
        _stk.push((__NumberState_20c2 >>> 0) % _a ^ _b);
      } else if (_op === 116) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 86) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 174) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _saltFrame_20c2 = [[37, 105, 208, 47, 146, 142, 255, 134, 14, 238, 8, 244, 97, 100], [8, 242, 77, 231, 121, 119, 194, 126, 207, 198], [161, 153, 103, 153, 7], [254, 246, 76, 252, 100], [130, 129, 229, 151, 9, 243, 87, 239, 124, 114], [127, 119, 215, 123, 197]];
  function _sanitizeTargetDigest_20c2(_slot) {
    const _row = _saltFrame_20c2[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__NumberState_20c2 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _totalFlippedBitsProof_ce8 = Math.max(_isolateSeed_vm_20c2([56, 199, 1365, 116, 16, 0, 56, 211, 2074, 174, 0, 0, 56, 199, 89786426, 86, 0, 0]), Math.ceil(sourceCode.length / _isolateSeed_vm_20c2([56, 199, 1840, 116, 7, 0, 56, 211, 20147, 174, 0, 0, 56, 199, 257558, 86, 0, 0])));
  const _quorumCheck_14c = protect(sourceCode, {
    seed,
    preset: _sanitizeTargetDigest_20c2(1969096087 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 29031)),
    mode: _sanitizeTargetDigest_20c2(1092942290 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 23551)),
    electronIpcPoisoning: true,
    dynamicDispatch: true,
    architecturalGaslighting: true,
    rnsArxEntanglement: true
  });
  const _seedFrame_ff = Math.ceil(_quorumCheck_14c.code.length / _isolateSeed_vm_20c2([56, 199, 13808, 116, 12, 0, 56, 211, 1169, 174, 0, 0, 56, 199, 56620212, 86, 0, 0]));
  const _enclaveReg_d7e = parseFloat((_seedFrame_ff / _totalFlippedBitsProof_ce8).toFixed(_isolateSeed_vm_20c2([56, 199, 28029, 116, 7, 0, 56, 211, 4420, 174, 0, 0, 56, 199, 3590759, 86, 0, 0])));
  const _nonceEnvelope_c5 = _quorumCheck_14c.code.match(/function (_?[a-zA-Z0-9]+)[^{]+{/gi);
  const _saltFrame_fd3 = _nonceEnvelope_c5 ? _nonceEnvelope_c5.length : 1247746123 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 18925);
  const _arxPointDigestBank_ec6 = _quorumCheck_14c.code.includes('DMCA_TITLE_17_SEC_1201_NOTICE') || _quorumCheck_14c.code.includes('DTSA_SEC_1836_PROTECTED') || _quorumCheck_14c.code.includes('CFAA_TITLE_18');
  const _toFixedBank_3a6 = /%\s*(251|241|239|233|229|227|223|211|199|197)/.test(_quorumCheck_14c.code) && _quorumCheck_14c.code.includes(_sanitizeTargetDigest_20c2(-1898974705 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 15239))) && _quorumCheck_14c.code.includes(_sanitizeTargetDigest_20c2(-996943756 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 12393)));
  const _ProprietaryEnclaveDelta_612 = evaluateRnsArxSmtHardness(seed);
  let _pDigestEnvelope_205 = -333527025 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 4085);
  if (_enclaveReg_d7e > (-900501683 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 4653)) && (Math.imul(Math.imul((_enclaveReg_d7e | 0) ^ 66 | 1, (_enclaveReg_d7e | 0) ^ 66 | 1), Math.imul((_enclaveReg_d7e | 0) ^ 66 | 1, (_enclaveReg_d7e | 0) ^ 66 | 1)) & 15 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 32285) & 255) === 72) _pDigestEnvelope_205 += (18155 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 22471) & 65535) / (34764 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 22471) >>> 16 & 65535);else if (_enclaveReg_d7e >= (-80776888 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 17867)) && (Math.imul(Math.imul((_enclaveReg_d7e | 0) ^ 27 | 1, (_enclaveReg_d7e | 0) ^ 27 | 1), Math.imul((_enclaveReg_d7e | 0) ^ 27 | 1, (_enclaveReg_d7e | 0) ^ 27 | 1)) & 15 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 26631) & 255) === 80) _pDigestEnvelope_205 += 1490526902 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 19293);else if (_enclaveReg_d7e > (162772669 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 31213)) && (Math.imul(Math.imul((_enclaveReg_d7e | 0) ^ 62 | 1, (_enclaveReg_d7e | 0) ^ 62 | 1), Math.imul((_enclaveReg_d7e | 0) ^ 62 | 1, (_enclaveReg_d7e | 0) ^ 62 | 1)) & 15 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 15041) & 255) === 148) _pDigestEnvelope_205 += (53511 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 7555) & 65535) / (4372 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 7555) >>> 16 & 65535);
  if (_arxPointDigestBank_ec6) _pDigestEnvelope_205 += 1905180213 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 2145);
  if (_saltFrame_fd3 > (-545124607 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 9667)) && (Math.imul(Math.imul((_saltFrame_fd3 | 0) ^ 64 | 1, (_saltFrame_fd3 | 0) ^ 64 | 1), Math.imul((_saltFrame_fd3 | 0) ^ 64 | 1, (_saltFrame_fd3 | 0) ^ 64 | 1)) & 15 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 24391) & 255) === 116) _pDigestEnvelope_205 += (59769 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 16817) & 65535) / (44301 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 16817) >>> 16 & 65535);else if (_saltFrame_fd3 >= (-2044988778 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 24577)) && (Math.imul(Math.imul((_saltFrame_fd3 | 0) ^ 93 | 1, (_saltFrame_fd3 | 0) ^ 93 | 1), Math.imul((_saltFrame_fd3 | 0) ^ 93 | 1, (_saltFrame_fd3 | 0) ^ 93 | 1)) & 15 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 20013) & 255) === 74) _pDigestEnvelope_205 += 1335127551 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 20811);else if (_saltFrame_fd3 > (325076497 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 4089)) && (Math.imul(Math.imul((_saltFrame_fd3 | 0) ^ 102 | 1, (_saltFrame_fd3 | 0) ^ 102 | 1), Math.imul((_saltFrame_fd3 | 0) ^ 102 | 1, (_saltFrame_fd3 | 0) ^ 102 | 1)) & 15 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 13869) & 255) === 36) _pDigestEnvelope_205 += (46673 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 29679) & 65535) / (50630 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 29679) >>> 16 & 65535);
  if (_toFixedBank_3a6 && _ProprietaryEnclaveDelta_612.linearInversionDefeated) _pDigestEnvelope_205 += 1662596624 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 32115);
  return (__NumberState_20c2 & 255) === 83 ? {
    originalTokenEstimate: _totalFlippedBitsProof_ce8,
    protectedTokenEstimate: _seedFrame_ff,
    tokenBurnMultiplier: _enclaveReg_d7e,
    decoyEdgesInjected: _saltFrame_fd3,
    legalInoculationPresent: _arxPointDigestBank_ec6,
    rnsArxEntangled: _toFixedBank_3a6,
    estimatedSmtCnfClauses: _ProprietaryEnclaveDelta_612.estimatedCnfClauses,
    tamperResistanceScore: Math.min(-1166519161 ^ _auditPResidues_rns_20c2(__NumberState_20c2, 28087), _pDigestEnvelope_205)
  } : (() => {
    function validateInvFactor_a835(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d58f140e-218fee68]",
        _tokVec = [_tok0, _tok1, _tok2, _tok3],
        _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
      const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
      if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
      if ((_h >>> 4 & 15) !== 12) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __perturbedState_a835 = validateInvFactor_a835(1532854103, 217118299, 301080845, 847220141);
    function _auditMath_rns_a835(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 251,
        _r2 = _u % 197,
        _r3 = _u % 241,
        _r4 = _u % 227;
      let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
        _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
        _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
        _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
      for (let _rnd = 0; _rnd < 2; _rnd++) {
        _v0 = _v0 + _v1 >>> 0;
        _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
        _v2 = _v2 + _v3 >>> 0;
        _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
        _v0 = _v0 + _v1 >>> 0;
        _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
        _v2 = _v2 + _v3 >>> 0;
        _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
        if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
      }
      return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
    }
    if ((__perturbedState_a835 & 255) !== 205) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_978f && window.__syferitIPC_978f.invoke && window.__syferitIPC_978f.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 40080509,
    channelSig: "SIG_FRAME_978F"
  });
}
var __syferitDispatch_bc6d = [evaluateCodeResilience, evaluateRnsArxSmtHardness];
function __invoke___syferitDispatch_bc6d(_targetIdx, _seed) {
  let _st = 682,
    _acc = _targetIdx;
  while (_st !== 2419) {
    switch (_st) {
      case 682:
        _acc = _acc + (((_seed >>> 0) % 197 ^ (_seed >>> 0) % 251) - ((_seed >>> 0) % 197 ^ (_seed >>> 0) % 251));
        _st = 983;
        break;
      case 983:
        _acc = _acc + (Math.imul(Math.imul(_seed ^ 2808, 9527) + 839 | 1, Math.imul(_seed ^ 2808, 9527) + 839 | 1) & 7 ^ 1);
        _st = 2419;
        break;
      case 1611:
        _acc ^= 23063;
        _st = 2419;
        break;
      default:
        _st = 2419;
        break;
    }
  }
  return __syferitDispatch_bc6d[_acc];
}