// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import * as t from '@babel/types';
export class MBASynthesizer {
  prng;
  constructor(prng) {
    this.prng = prng;
  }
  computeStringKey(str, salt) {
    function verifySyferitEngineContext_7f2c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2765bbd6-e313d5a6]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __keyDerivationStateIntegrity_7f2c = verifySyferitEngineContext_7f2c(838038517, 343880839, 894249713, 1146084931);
    const _enclaveDigestVector_7f2c = [[77, 236, 124, 137, 200, 70, 202, 24, 56, 170, 102, 146, 142, 56, 166, 247, 17], [36, 177, 91, 153, 187, 42], [9, 128, 43, 83, 92, 76, 219, 132, 200, 34, 220, 59, 95, 215, 126, 191, 203], [241, 96, 227, 41, 73, 212, 113, 134, 213, 69, 199, 1, 49, 190, 89, 101]];
    function _auditTpmPcrBankAttestation_7f2c(_slot) {
      const _row = _enclaveDigestVector_7f2c[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keyDerivationStateIntegrity_7f2c >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    let _paramNodeVector_62f = 2166136261 + ((__keyDerivationStateIntegrity_7f2c & 255) - 37) >>> (27885 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 5832));
    if (typeof salt === _auditTpmPcrBankAttestation_7f2c(15063 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 16626)) && (Math.imul(Math.imul(((str.seats || str | 0) | 0) ^ 124 | 1, ((str.seats || str | 0) | 0) ^ 124 | 1), Math.imul(((str.seats || str | 0) | 0) ^ 124 | 1, ((str.seats || str | 0) | 0) ^ 124 | 1)) & 15 ^ (__keyDerivationStateIntegrity_7f2c >>> 17 & 255 ^ 97)) === 133) {
      _paramNodeVector_62f = (_paramNodeVector_62f ^ salt >>> (30803 ^ __keyDerivationStateIntegrity_7f2c & 65535) / (26383 ^ __keyDerivationStateIntegrity_7f2c >>> 16 & 65535)) >>> (30803 ^ __keyDerivationStateIntegrity_7f2c & 65535) / (26383 ^ __keyDerivationStateIntegrity_7f2c >>> 16 & 65535);
    } else if (typeof salt === _auditTpmPcrBankAttestation_7f2c(26756 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 4768)) && (Math.imul(Math.imul(((str.seats || str | 0) | 0) ^ 88 | 1, ((str.seats || str | 0) | 0) ^ 88 | 1), Math.imul(((str.seats || str | 0) | 0) ^ 88 | 1, ((str.seats || str | 0) | 0) ^ 88 | 1)) & 15 ^ (__keyDerivationStateIntegrity_7f2c >>> 23 & 255 ^ 113)) === 191) {
      _paramNodeVector_62f = (_paramNodeVector_62f ^ salt >>> (15514 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 18111))) >>> (29722 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 3647));
    } else {
      for (let sIdx = 27778 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 5799); sIdx < salt.length; sIdx++) {
        _paramNodeVector_62f ^= salt[sIdx] >>> (5840 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 27893));
        _paramNodeVector_62f = Math.imul(_paramNodeVector_62f, 16791588 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 17298)) >>> (336 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 31605));
        _paramNodeVector_62f ^= _paramNodeVector_62f >>> (22126 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 11334));
      }
    }
    for (let i = 22962 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 9111); i < str.length; i++) {
      _paramNodeVector_62f ^= str.charCodeAt(i);
      _paramNodeVector_62f = Math.imul(_paramNodeVector_62f, 16805093 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 5971)) >>> (3419 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 30590));
      _paramNodeVector_62f ^= _paramNodeVector_62f >>> (15333 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 16845));
    }
    _paramNodeVector_62f = Math.imul(_paramNodeVector_62f ^ _paramNodeVector_62f >>> (13335 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 20002)), 2246822507 + ((__keyDerivationStateIntegrity_7f2c & 255) - 37)) >>> (32046 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 1803));
    _paramNodeVector_62f = Math.imul(_paramNodeVector_62f ^ _paramNodeVector_62f >>> (17597 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 16021)), 3266489909 + ((__keyDerivationStateIntegrity_7f2c & 255) - 37)) >>> (24084 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 9265));
    _paramNodeVector_62f = (_paramNodeVector_62f ^ _paramNodeVector_62f >>> (20351 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 13642))) >>> (17903 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 16330));
    if ((_paramNodeVector_62f & (63177 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 29459))) === (1729 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 31972))) _paramNodeVector_62f = (_paramNodeVector_62f | 25632 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 3378)) >>> (21086 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 10363));
    if ((_paramNodeVector_62f >>> (17866 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 16383)) & (38771 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 4777))) === (30391 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 3218))) _paramNodeVector_62f = (_paramNodeVector_62f | 1932591104 + ((__keyDerivationStateIntegrity_7f2c & 255) - 37)) >>> (3806 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 29947));
    return (__keyDerivationStateIntegrity_7f2c & 255) === 37 ? _paramNodeVector_62f >>> (990 ^ (__keyDerivationStateIntegrity_7f2c & 65535 ^ 31227)) : (() => {
      function assertRingBufferIntegrity_8a66(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e2a45d66-05d26819]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __enclaveDigestBitmask_8a66 = assertRingBufferIntegrity_8a66(95751773, 1017779037, 4843449, 10451797);
      if ((__enclaveDigestBitmask_8a66 & 255) !== 107) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateZeroInvariant(paramNode) {
    return this.generateNonLinearZero(paramNode);
  }
  generateNonLinearZero(paramNode) {
    function auditIdentifier_e72b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:58e26154-6fc7a31c]",
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
      if ((_h >>> 4 & 15) !== 1) {
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __enclaveDigestProof_e72b = auditIdentifier_e72b(794022421, 1543284387, 1202124439, 188876877);
    const _numericLiteralAttestation_e72b = [[93, 56, 180, 13], [92, 19, 144, 230], [23, 194, 126, 199], [22, 165, 90, 184], [233, 140, 32, 145], [160, 127, 12, 114], [163, 86, 234, 43], [122, 49, 182, 4]];
    function _assertHmacFrameSequence_e72b(_slot) {
      const _row = _numericLiteralAttestation_e72b[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveDigestProof_e72b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__enclaveDigestProof_e72b & 255) !== 16) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _tpmUnsealOffset_50c = this.prng.nextRange(5203 ^ (__enclaveDigestProof_e72b & 65535 ^ 8259), 15214 ^ (__enclaveDigestProof_e72b & 65535 ^ 3964));
    const _constructorAttestation_c6 = t.callExpression(t.memberExpression(t.identifier(_assertHmacFrameSequence_e72b(4229 ^ (__enclaveDigestProof_e72b & 65535 ^ 9365))), t.identifier(_assertHmacFrameSequence_e72b(177 ^ (__enclaveDigestProof_e72b & 65535 ^ 13472)))), [t.binaryExpression('^', paramNode, t.numericLiteral(this.prng.nextRange(11329 ^ (__enclaveDigestProof_e72b & 65535 ^ 6481), 20775 ^ (__enclaveDigestProof_e72b & 65535 ^ 6856)))), t.numericLiteral(this.prng.nextRange(16767 ^ (__enclaveDigestProof_e72b & 65535 ^ 25966), 37231 ^ (__enclaveDigestProof_e72b & 65535 ^ 23168)) | 27686 ^ (__enclaveDigestProof_e72b & 65535 ^ 22583))]);
    if (_tpmUnsealOffset_50c === (30406 ^ (__enclaveDigestProof_e72b & 65535 ^ 17110))) {
      const oddVal = t.binaryExpression('|', _constructorAttestation_c6, t.numericLiteral(20847 ^ (__enclaveDigestProof_e72b & 65535 ^ 25982)));
      const sq = t.callExpression(t.memberExpression(t.identifier(_assertHmacFrameSequence_e72b(25444 ^ (__enclaveDigestProof_e72b & 65535 ^ 22390))), t.identifier(_assertHmacFrameSequence_e72b(10974 ^ (__enclaveDigestProof_e72b & 65535 ^ 7885)))), [oddVal, oddVal]);
      return t.binaryExpression('-', t.binaryExpression('&', sq, t.numericLiteral(6413 ^ (__enclaveDigestProof_e72b & 65535 ^ 11546))), t.numericLiteral(30077 ^ (__enclaveDigestProof_e72b & 65535 ^ 16748)));
    } else if (_tpmUnsealOffset_50c === (32028 ^ (__enclaveDigestProof_e72b & 65535 ^ 18701))) {
      const prod = t.callExpression(t.memberExpression(t.identifier(_assertHmacFrameSequence_e72b(9227 ^ (__enclaveDigestProof_e72b & 65535 ^ 4127))), t.identifier(_assertHmacFrameSequence_e72b(19518 ^ (__enclaveDigestProof_e72b & 65535 ^ 30763)))), [_constructorAttestation_c6, t.binaryExpression('+', _constructorAttestation_c6, t.numericLiteral(28461 ^ (__enclaveDigestProof_e72b & 65535 ^ 23356)))]);
      return t.binaryExpression('&', prod, t.numericLiteral(6022 ^ (__enclaveDigestProof_e72b & 65535 ^ 9111)));
    } else {
      const sq = t.callExpression(t.memberExpression(t.identifier(_assertHmacFrameSequence_e72b(28144 ^ (__enclaveDigestProof_e72b & 65535 ^ 23014))), t.identifier(_assertHmacFrameSequence_e72b(29555 ^ (__enclaveDigestProof_e72b & 65535 ^ 18276)))), [_constructorAttestation_c6, _constructorAttestation_c6]);
      return t.binaryExpression('&', sq, t.numericLiteral(11179 ^ (__enclaveDigestProof_e72b & 65535 ^ 8121)));
    }
  }
  encodeNumberWithKey(target, keyId, keyVal) {
    function evaluateOddVal_3b0f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a0df80bc-db502cac]",
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
      if ((_h >>> 4 & 15) !== 1) {
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __enclaveDigestBitmask_3b0f = evaluateOddVal_3b0f(1401289605, 1723851355, 195070589, 1086503853);
    const _keyDerivationStateIntegrity_3b0f = [[45, 144, 203], [94, 186, 106, 157, 147, 86, 154, 178, 63, 200, 29, 101, 128, 253, 191, 201, 252], [56, 150, 92, 127, 144, 250, 182, 248, 236, 83, 8, 87, 120, 192, 158, 171]];
    function _isolateImul_3b0f(_slot) {
      const _row = _keyDerivationStateIntegrity_3b0f[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveDigestBitmask_3b0f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _sgxBoundaryBitmask_6a0 = (keyVal & (30056 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 900))) >>> (55965 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 21390));
    const _binaryExpressionAttestation_7ad = keyVal >>> (40834 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 5761)) & (32647 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 2411));
    if (Number.isInteger(target) && Math.abs(target) <= (1073682819 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 28527))) {
      const mask = _sgxBoundaryBitmask_6a0 ^ this.prng.nextRange(60568 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 25739), 43598 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 23714));
      const encodedTarget = target ^ mask;
      const keyRecoverMask = mask ^ _sgxBoundaryBitmask_6a0;
      const expr = t.binaryExpression('^', t.numericLiteral(encodedTarget), t.binaryExpression('^', t.binaryExpression('&', keyId, t.numericLiteral(14194 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 16798))), t.numericLiteral(keyRecoverMask)));
      expr.__syferitProtected = true;
      return expr;
    }
    const _lengthSequence_f07 = [64481 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 29242), 48777 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 13834), 63146 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 32333), 58049 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 26682), 41662 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 11389), 44367 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 11260), 38737 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 14674)];
    let _nextRangeBitmask_cbf = 50926 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 26861);
    for (const sc of _lengthSequence_f07) {
      if (Math.abs(Math.round(target * sc) / sc - target) < 1e-9 + ((__enclaveDigestBitmask_3b0f & 255) - 19)) {
        _nextRangeBitmask_cbf = sc;
        break;
      }
    }
    const _enclaveDigestIntegrity_ed4 = Math.round(target * _nextRangeBitmask_cbf);
    if (Math.abs(_enclaveDigestIntegrity_ed4 / _nextRangeBitmask_cbf - target) < 1e-9 + ((__enclaveDigestBitmask_3b0f & 255) - 19) && Math.abs(_enclaveDigestIntegrity_ed4) <= (1073691679 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 19187))) {
      const encodedNum = _enclaveDigestIntegrity_ed4 ^ _sgxBoundaryBitmask_6a0;
      const encodedDen = _nextRangeBitmask_cbf ^ _binaryExpressionAttestation_7ad;
      const numExpr = t.binaryExpression('^', t.numericLiteral(encodedNum), t.binaryExpression('&', keyId, t.numericLiteral(10616 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 24468))));
      const denExpr = t.binaryExpression('^', t.numericLiteral(encodedDen), t.binaryExpression('&', t.binaryExpression(_isolateImul_3b0f(43169 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 8626)), keyId, t.numericLiteral(59645 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 25086))), t.numericLiteral(4789 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 25689))));
      const ratioExpr = t.binaryExpression('/', numExpr, denExpr);
      ratioExpr.__syferitProtected = true;
      return ratioExpr;
    }
    const _paramNodeVector_353 = t.binaryExpression('+', t.numericLiteral(target), t.binaryExpression('-', t.binaryExpression('&', keyId, t.numericLiteral(57612 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 26848))), t.numericLiteral(keyVal & (41780 ^ (__enclaveDigestBitmask_3b0f & 65535 ^ 10968)))));
    _paramNodeVector_353.__syferitProtected = true;
    return (__enclaveDigestBitmask_3b0f & 255) === 19 ? _paramNodeVector_353 : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  synthesizeQuorumGate(runtimeExpr, keyId, keyVal, shouldBeTrue) {
    function verifyRingBufferProof_a191(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:02648c96-d6201c54]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __sgxBoundaryBitmask_a191 = verifyRingBufferProof_a191(312367689, 1577054581, 1300442529, 1789624365);
    const _memberExpressionVector_a191 = [[63, 85, 131, 95], [254, 52, 105, 48], [241, 31, 53, 233], [136, 206, 19, 202], [56, 246, 181], [22, 208, 141]];
    function _attestSgxBoundaryBitmask_a191(_slot) {
      const _row = _memberExpressionVector_a191[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sgxBoundaryBitmask_a191 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _ProprietaryEnclaveDelta_257 = t.binaryExpression('|', runtimeExpr, t.numericLiteral(18326 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 18660)));
    const _hmacFrameSequence_51 = t.binaryExpression('|', t.binaryExpression('^', _ProprietaryEnclaveDelta_257, t.numericLiteral(this.prng.nextRange(3823 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 396), 18465 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 18220)))), t.numericLiteral(15767 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 13028)));
    const _enclaveDigestProof_ad3 = t.callExpression(t.memberExpression(t.identifier(_attestSgxBoundaryBitmask_a191(8105 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 4315))), t.identifier(_attestSgxBoundaryBitmask_a191(20395 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 16600)))), [_hmacFrameSequence_51, t.cloneNode(_hmacFrameSequence_51, true)]);
    const _SyferitEngineDelta_f77 = t.callExpression(t.memberExpression(t.identifier(_attestSgxBoundaryBitmask_a191(18947 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 17779))), t.identifier(_attestSgxBoundaryBitmask_a191(29517 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 31804)))), [_enclaveDigestProof_ad3, t.cloneNode(_enclaveDigestProof_ad3, true)]);
    const _enclaveDigestIntegrity_923 = this.prng.nextRange(792 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 3178), 18817 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 18155));
    const _saltVector_720 = this.prng.nextRange(16873 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 20107), 1167 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 2834));
    const _MBASynthesizerAttestation_ab = keyVal >>> _enclaveDigestIntegrity_923 & (31687 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 29770)) ^ _saltVector_720;
    const _tpmPcrBankEnvelope_764 = t.binaryExpression('^', t.binaryExpression('&', _SyferitEngineDelta_f77, t.numericLiteral(2937 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 1028))), t.binaryExpression('^', t.binaryExpression('&', t.binaryExpression(_attestSgxBoundaryBitmask_a191(24748 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 28634)), keyId, t.numericLiteral(_enclaveDigestIntegrity_923)), t.numericLiteral(143 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 3842))), t.numericLiteral(_saltVector_720)));
    const _lengthSequence_ffe = [25532 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 27853), 20679 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 24496), 2132 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 1825), 7056 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 5355), 1661 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 2308), 21210 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 23973), 6607 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 5810)];
    const _oddValSequence_326 = shouldBeTrue ? 17447 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 19284) : this.prng.pick(_lengthSequence_ffe);
    const _ringBufferProof_6e5 = (_MBASynthesizerAttestation_ab ^ _oddValSequence_326) & (922 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 3095));
    return (__sgxBoundaryBitmask_a191 & 255) === 114 ? t.binaryExpression(_attestSgxBoundaryBitmask_a191(21524 ^ (__sgxBoundaryBitmask_a191 & 65535 ^ 23395)), _tpmPcrBankEnvelope_764, t.numericLiteral(_ringBufferProof_6e5)) : (() => {
      function attestSgxBoundaryBitmask_cee6(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f5c35238-f1533afe]",
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
        if ((_h >>> 4 & 15) !== 0) {
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __hmacFrameSequence_cee6 = attestSgxBoundaryBitmask_cee6(1045733101, 727536959, 1268519457, 517012089);
      if ((__hmacFrameSequence_cee6 & 255) !== 11) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateInputCoupledFalsePredicate(runtimeExpr, keyId, keyVal) {
    function evaluateOddVal_59d9(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7e644596-7f58e163]",
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
    const __tpmPcrBankProof_59d9 = evaluateOddVal_59d9(407552395, 1428066193, 687455301, 1697514901);
    return (__tpmPcrBankProof_59d9 & 255) === 143 ? this.synthesizeQuorumGate(runtimeExpr, keyId, keyVal, false) : (() => {
      function isolateEnclaveDigestIntegrity_bb25(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3e7996d7-4e9eee53]",
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
      const __ringBufferVector_bb25 = isolateEnclaveDigestIntegrity_bb25(319486381, 331987151, 1842044727, 985091933);
      if ((__ringBufferVector_bb25 & 255) !== 47) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  entangleNumber(target, paramNode) {
    function isolateEnclaveDigestIntegrity_9172(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:dd5bd7ea-b85e586a]",
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
      if ((_h >>> 4 & 15) !== 5) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __enclaveDigestBitmask_9172 = isolateEnclaveDigestIntegrity_9172(1313487247, 2107679111, 1867301089, 626401253);
    const _sgxEcallCounter_8c3 = this.generateNonLinearZero(paramNode);
    return (__enclaveDigestBitmask_9172 & 255) === 82 ? t.binaryExpression('+', t.numericLiteral(target), _sgxEcallCounter_8c3) : (() => {
      function auditVariant_f7b2(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:eece4a69-dbba604d]",
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
      const __hmacRingSequence_f7b2 = auditVariant_f7b2(433305529, 880339479, 1276256621, 1806905897);
      if ((__hmacRingSequence_f7b2 & 255) !== 74) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_2d21.invoke && window.__syferitIPC_2d21.invoke("auth:session-lease-sync", {
    syncEpoch: 870864277,
    channelSig: "SIG_FRAME_2D21"
  });
}