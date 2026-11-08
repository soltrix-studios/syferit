// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import * as t from '@babel/types';
export class MBASynthesizer {
  prng;
  constructor(prng) {
    this.prng = prng;
  }
  computeStringKey(str, salt) {
    function isolateHmacFrameEnvelope_c886(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:dd3c385b-2b84af47]",
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
      if ((_h >>> 4 & 15) !== 11) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __sgxBoundaryIntegrity_c886 = isolateHmacFrameEnvelope_c886(1342722679, 936259565, 1248760755, 766343853);
    const _numericLiteralEnvelope_c886 = [[222, 24, 133, 188, 46, 124, 31, 59, 138, 237, 97, 148, 22, 70, 199, 232], [142, 238, 102, 151, 17, 93], [99, 169, 64, 105, 198, 101, 240, 158, 114, 219, 7, 49, 181, 14, 133, 181, 33], [79, 139, 54, 83, 223, 15, 140, 140, 59, 126, 18, 11, 135, 213, 116, 159]];
    function _unsealSalt_c886(_slot) {
      const _row = _numericLiteralEnvelope_c886[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sgxBoundaryIntegrity_c886 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    let _MBASynthesizerEnvelope_9f3 = 2166136261 + ((__sgxBoundaryIntegrity_c886 & 255) - 187) >>> (16006 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 28477));
    if (typeof salt === _unsealSalt_c886(19828 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 7375)) && (Math.imul(Math.imul(((str.seats || str | 0) | 0) ^ 123 | 1, ((str.seats || str | 0) | 0) ^ 123 | 1), Math.imul(((str.seats || str | 0) | 0) ^ 123 | 1, ((str.seats || str | 0) | 0) ^ 123 | 1)) & 15 ^ (__sgxBoundaryIntegrity_c886 >>> 9 & 255 ^ 21)) === 52) {
      _MBASynthesizerEnvelope_9f3 = (_MBASynthesizerEnvelope_9f3 ^ salt >>> (21405 ^ __sgxBoundaryIntegrity_c886 & 65535) / (24916 ^ __sgxBoundaryIntegrity_c886 >>> 16 & 65535)) >>> (21405 ^ __sgxBoundaryIntegrity_c886 & 65535) / (24916 ^ __sgxBoundaryIntegrity_c886 >>> 16 & 65535);
    } else if (typeof salt === _unsealSalt_c886(32024 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 11426)) && (Math.imul(Math.imul(((str.seats || str | 0) | 0) ^ 41 | 1, ((str.seats || str | 0) | 0) ^ 41 | 1), Math.imul(((str.seats || str | 0) | 0) ^ 41 | 1, ((str.seats || str | 0) | 0) ^ 41 | 1)) & 15 ^ (__sgxBoundaryIntegrity_c886 >>> 7 & 255 ^ 47)) === 141) {
      _MBASynthesizerEnvelope_9f3 = (_MBASynthesizerEnvelope_9f3 ^ salt >>> (11357 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 32230))) >>> (8996 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 29343));
    } else {
      for (let sIdx = 32277 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 12206); sIdx < salt.length; sIdx++) {
        _MBASynthesizerEnvelope_9f3 ^= salt[sIdx] >>> (32047 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 11412));
        _MBASynthesizerEnvelope_9f3 = Math.imul(_MBASynthesizerEnvelope_9f3, 16778758 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 22062)) >>> (18782 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 6373));
        _MBASynthesizerEnvelope_9f3 ^= _MBASynthesizerEnvelope_9f3 >>> (7971 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 20117));
      }
    }
    for (let i = 11509 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 32078); i < str.length; i++) {
      _MBASynthesizerEnvelope_9f3 ^= str.charCodeAt(i);
      _MBASynthesizerEnvelope_9f3 = Math.imul(_MBASynthesizerEnvelope_9f3, 16806775 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 9055)) >>> (22245 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 1886));
      _MBASynthesizerEnvelope_9f3 ^= _MBASynthesizerEnvelope_9f3 >>> (22871 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 2273));
    }
    _MBASynthesizerEnvelope_9f3 = Math.imul(_MBASynthesizerEnvelope_9f3 ^ _MBASynthesizerEnvelope_9f3 >>> (19791 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 7396)), 2246822507 + ((__sgxBoundaryIntegrity_c886 & 255) - 187)) >>> (18976 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 7067));
    _MBASynthesizerEnvelope_9f3 = Math.imul(_MBASynthesizerEnvelope_9f3 ^ _MBASynthesizerEnvelope_9f3 >>> (19933 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 7275)), 3266489909 + ((__sgxBoundaryIntegrity_c886 & 255) - 187)) >>> (22787 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 2232));
    _MBASynthesizerEnvelope_9f3 = (_MBASynthesizerEnvelope_9f3 ^ _MBASynthesizerEnvelope_9f3 >>> (24558 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 3653))) >>> (14918 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 27645));
    if ((_MBASynthesizerEnvelope_9f3 & (61399 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 16787))) === (16242 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 28361))) _MBASynthesizerEnvelope_9f3 = (_MBASynthesizerEnvelope_9f3 | 12263 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 28011)) >>> (7055 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 18996));
    if ((_MBASynthesizerEnvelope_9f3 >>> (13739 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 25600)) & (55177 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 31181))) === (1362 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 21737))) _MBASynthesizerEnvelope_9f3 = (_MBASynthesizerEnvelope_9f3 | 1932591104 + ((__sgxBoundaryIntegrity_c886 & 255) - 187)) >>> (3128 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 23939));
    return (__sgxBoundaryIntegrity_c886 & 255) === 187 ? _MBASynthesizerEnvelope_9f3 >>> (19062 ^ (__sgxBoundaryIntegrity_c886 & 65535 ^ 7117)) : (() => {
      function verifyEnclaveDigestProof_1d31(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d902dbf2-e027f93f]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __tpmPcrBankProof_1d31 = verifyEnclaveDigestProof_1d31(1874369769, 1731051363, 499700109, 1490956879);
      if ((__tpmPcrBankProof_1d31 & 255) !== 131) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateZeroInvariant(paramNode) {
    function rotateConstructor_1f73(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d941fdd0-a895c424]",
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
      if ((_h >>> 4 & 15) !== 10) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __ringBufferEnvelope_1f73 = rotateConstructor_1f73(968931927, 274599351, 1869413535, 2035260503);
    return (__ringBufferEnvelope_1f73 & 255) === 170 ? this.generateNonLinearZero(paramNode) : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateNonLinearZero(paramNode) {
    function rotateOddVal_d84f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fadf5c09-4be3e78a]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __sgxBoundaryAttestation_d84f = rotateOddVal_d84f(859590875, 1683311361, 1359565541, 1826531967);
    const _MathEnvelope_d84f = [[213, 126, 186, 37], [212, 41, 134, 30], [175, 8, 108, 255], [110, 227, 72, 208], [97, 210, 22, 137], [56, 181, 242, 106], [59, 156, 216, 67], [242, 79, 164, 60]];
    function _evaluateEnclaveDigest_d84f(_slot) {
      const _row = _MathEnvelope_d84f[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sgxBoundaryAttestation_d84f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__sgxBoundaryAttestation_d84f & 255) !== 152) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _sgxBoundaryIntegrity_9ea = this.prng.nextRange(62827 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 4083), 44773 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 21631));
    const _hmacFrameSequence_4c4 = t.callExpression(t.memberExpression(t.identifier(_evaluateEnclaveDigest_d84f(62881 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 3897))), t.identifier(_evaluateEnclaveDigest_d84f(59940 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 4285)))), [t.binaryExpression('^', paramNode, t.numericLiteral(this.prng.nextRange(50603 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 15923), 64044 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 32587)))), t.numericLiteral(this.prng.nextRange(55020 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 15477), 17447 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 16704)) | 63115 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 3090))]);
    if (_sgxBoundaryIntegrity_9ea === (35825 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 29033))) {
      const oddVal = t.binaryExpression('|', _hmacFrameSequence_4c4, t.numericLiteral(36799 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 29990)));
      const sq = t.callExpression(t.memberExpression(t.identifier(_evaluateEnclaveDigest_d84f(41318 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 23548))), t.identifier(_evaluateEnclaveDigest_d84f(54437 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 11838)))), [oddVal, oddVal]);
      return t.binaryExpression('-', t.binaryExpression('&', sq, t.numericLiteral(41453 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 23410))), t.numericLiteral(53103 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 13814)));
    } else if (_sgxBoundaryIntegrity_9ea === (62354 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 2315))) {
      const prod = t.callExpression(t.memberExpression(t.identifier(_evaluateEnclaveDigest_d84f(35452 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 28896))), t.identifier(_evaluateEnclaveDigest_d84f(50857 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 15412)))), [_hmacFrameSequence_4c4, t.binaryExpression('+', _hmacFrameSequence_4c4, t.numericLiteral(44092 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 22181)))]);
      return t.binaryExpression('&', prod, t.numericLiteral(60087 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 4142)));
    } else {
      const sq = t.callExpression(t.memberExpression(t.identifier(_evaluateEnclaveDigest_d84f(36998 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 27160))), t.identifier(_evaluateEnclaveDigest_d84f(37099 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 27252)))), [_hmacFrameSequence_4c4, _hmacFrameSequence_4c4]);
      return t.binaryExpression('&', sq, t.numericLiteral(54023 ^ (__sgxBoundaryAttestation_d84f & 65535 ^ 10653)));
    }
  }
  encodeNumberWithKey(target, keyId, keyVal) {
    function verifySyferitEngineContext_8a89(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9277e464-798fcfac]",
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
      if ((_h >>> 4 & 15) !== 10) {
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __hmacFrameSequence_8a89 = verifySyferitEngineContext_8a89(1110120423, 8210637, 1795779771, 347451339);
    const _nextRangeAttestation_8a89 = [[145, 230, 246], [178, 148, 157, 203, 55, 160, 181, 124, 163, 22, 74, 147, 228, 203, 192, 23, 80], [156, 76, 113, 177, 236, 192, 195, 46, 72, 57, 85, 105, 212, 170, 171, 253]];
    function _attestTpmPcrBankProof_8a89(_slot) {
      const _row = _nextRangeAttestation_8a89[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__hmacFrameSequence_8a89 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _pcrPolicyBitmask_7e4 = (keyVal & (22463 ^ (__hmacFrameSequence_8a89 & 65535 ^ 7151))) >>> (44120 ^ (__hmacFrameSequence_8a89 & 65535 ^ 8183));
    const _nextRangeAttestation_a8a = keyVal >>> (62000 ^ (__hmacFrameSequence_8a89 & 65535 ^ 16783)) & (24093 ^ (__hmacFrameSequence_8a89 & 65535 ^ 4685));
    if (Number.isInteger(target) && Math.abs(target) <= (1073699183 ^ (__hmacFrameSequence_8a89 & 65535 ^ 5439))) {
      const mask = _pcrPolicyBitmask_7e4 ^ this.prng.nextRange(59088 ^ (__hmacFrameSequence_8a89 & 65535 ^ 21631), 38488 ^ (__hmacFrameSequence_8a89 & 65535 ^ 23048));
      const encodedTarget = target ^ mask;
      const keyRecoverMask = mask ^ _pcrPolicyBitmask_7e4;
      const expr = t.binaryExpression('^', t.numericLiteral(encodedTarget), t.binaryExpression('^', t.binaryExpression('&', keyId, t.numericLiteral(18250 ^ (__hmacFrameSequence_8a89 & 65535 ^ 2842))), t.numericLiteral(keyRecoverMask)));
      expr.__syferitProtected = true;
      return expr;
    }
    const _monotonicNonceDrift_c07 = [58627 ^ (__hmacFrameSequence_8a89 & 65535 ^ 22116), 50257 ^ (__hmacFrameSequence_8a89 & 65535 ^ 30318), 59802 ^ (__hmacFrameSequence_8a89 & 65535 ^ 23489), 54205 ^ (__hmacFrameSequence_8a89 & 65535 ^ 25594), 44539 ^ (__hmacFrameSequence_8a89 & 65535 ^ 6532), 54973 ^ (__hmacFrameSequence_8a89 & 65535 ^ 27314), 36769 ^ (__hmacFrameSequence_8a89 & 65535 ^ 6942)];
    let _callExpressionIntegrity_93 = 62471 ^ (__hmacFrameSequence_8a89 & 65535 ^ 24760);
    for (const sc of _monotonicNonceDrift_c07) {
      if (Math.abs(Math.round(target * sc) / sc - target) < 1e-9 + ((__hmacFrameSequence_8a89 & 255) - 175)) {
        _callExpressionIntegrity_93 = sc;
        break;
      }
    }
    const _ringBufferProof_340 = Math.round(target * _callExpressionIntegrity_93);
    if (Math.abs(_ringBufferProof_340 / _callExpressionIntegrity_93 - target) < 1e-9 + ((__hmacFrameSequence_8a89 & 255) - 175) && Math.abs(_ringBufferProof_340) <= (1073705653 ^ (__hmacFrameSequence_8a89 & 65535 ^ 16101))) {
      const encodedNum = _ringBufferProof_340 ^ _pcrPolicyBitmask_7e4;
      const encodedDen = _callExpressionIntegrity_93 ^ _nextRangeAttestation_a8a;
      const numExpr = t.binaryExpression('^', t.numericLiteral(encodedNum), t.binaryExpression('&', keyId, t.numericLiteral(19183 ^ (__hmacFrameSequence_8a89 & 65535 ^ 1727))));
      const denExpr = t.binaryExpression('^', t.numericLiteral(encodedDen), t.binaryExpression('&', t.binaryExpression(_attestTpmPcrBankProof_8a89(56022 ^ (__hmacFrameSequence_8a89 & 65535 ^ 27001)), keyId, t.numericLiteral(61372 ^ (__hmacFrameSequence_8a89 & 65535 ^ 23555))), t.numericLiteral(20487 ^ (__hmacFrameSequence_8a89 & 65535 ^ 7255))));
      const ratioExpr = t.binaryExpression('/', numExpr, denExpr);
      ratioExpr.__syferitProtected = true;
      return ratioExpr;
    }
    const _hmacFrameEnvelope_60c = t.binaryExpression('+', t.numericLiteral(target), t.binaryExpression('-', t.binaryExpression('&', keyId, t.numericLiteral(48371 ^ (__hmacFrameSequence_8a89 & 65535 ^ 4003))), t.numericLiteral(keyVal & (44865 ^ (__hmacFrameSequence_8a89 & 65535 ^ 7185)))));
    _hmacFrameEnvelope_60c.__syferitProtected = true;
    return (__hmacFrameSequence_8a89 & 255) === 175 ? _hmacFrameEnvelope_60c : (() => {
      function unsealRingBufferProof_7dae(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:60abaa59-cd5dcb9f]",
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
      const __entropySeedDigest_7dae = unsealRingBufferProof_7dae(1299632391, 1885391639, 1200854681, 1834343033);
      if ((__entropySeedDigest_7dae & 255) !== 14) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  synthesizeQuorumGate(runtimeExpr, keyId, keyVal, shouldBeTrue) {
    function unsealImul_293(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b045ff6b-04a328a7]",
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
    const __keyDerivationStateAttestation_293 = unsealImul_293(188529453, 1224021081, 724245443, 136213597);
    const _charCodeAtBitmask_293 = [[48, 228, 136, 39], [203, 199, 84, 24], [138, 174, 50, 241], [133, 153, 30, 210], [47, 39, 174], [11, 3, 136]];
    function _verifyRingBufferSequence_293(_slot) {
      const _row = _charCodeAtBitmask_293[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keyDerivationStateAttestation_293 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _memberExpressionSequence_4f9 = t.binaryExpression('|', runtimeExpr, t.numericLiteral(14935 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 23082)));
    const _entropyNonceIntegrity_70 = t.binaryExpression('|', t.binaryExpression('^', _memberExpressionSequence_4f9, t.numericLiteral(this.prng.nextRange(32142 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 7650), 23355 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 15161)))), t.numericLiteral(5695 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 30275)));
    const _SyferitEngineDelta_eeb = t.callExpression(t.memberExpression(t.identifier(_verifyRingBufferSequence_293(19066 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 10759))), t.identifier(_verifyRingBufferSequence_293(31351 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 6667)))), [_entropyNonceIntegrity_70, t.cloneNode(_entropyNonceIntegrity_70, true)]);
    const _variantVector_bbf = t.callExpression(t.memberExpression(t.identifier(_verifyRingBufferSequence_293(16800 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 8671))), t.identifier(_verifyRingBufferSequence_293(11387 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 19461)))), [_SyferitEngineDelta_eeb, t.cloneNode(_SyferitEngineDelta_eeb, true)]);
    const _SoltrixStudiosDelta_d0 = this.prng.nextRange(13161 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 21268), 13595 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 21886));
    const _hkdfSaltRotation_d45 = this.prng.nextRange(12834 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 21071), 22077 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 13999));
    const _hmacFrameVector_fc3 = keyVal >>> _SoltrixStudiosDelta_d0 & (16401 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 8339)) ^ _hkdfSaltRotation_d45;
    const _MathEnvelope_1ee = t.binaryExpression('^', t.binaryExpression('&', _variantVector_bbf, t.numericLiteral(8002 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 32560))), t.binaryExpression('^', t.binaryExpression('&', t.binaryExpression(_verifyRingBufferSequence_293(26691 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 2106)), keyId, t.numericLiteral(_SoltrixStudiosDelta_d0)), t.numericLiteral(8873 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 16939))), t.numericLiteral(_hkdfSaltRotation_d45)));
    const _sgxEcallCounter_fb9 = [32064 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 7486), 20103 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 12031), 10475 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 18577), 13340 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 21608), 12164 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 20466), 10403 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 18643), 17411 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 9329)];
    const _tpmPcrBankProof_3be = shouldBeTrue ? 7111 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 31675) : this.prng.pick(_sgxEcallCounter_fb9);
    const _entropyNonceSequence_c97 = (_hmacFrameVector_fc3 ^ _tpmPcrBankProof_3be) & (7109 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 31559));
    return (__keyDerivationStateAttestation_293 & 255) === 125 ? t.binaryExpression(_verifyRingBufferSequence_293(4016 ^ (__keyDerivationStateAttestation_293 & 65535 ^ 28616)), _MathEnvelope_1ee, t.numericLiteral(_entropyNonceSequence_c97)) : (() => {
      function unsealRingBufferEnvelope_4f03(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d063ea19-a89b03e2]",
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
        if ((_h >>> 4 & 15) !== 11) {
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __sgxBoundaryIntegrity_4f03 = unsealRingBufferEnvelope_4f03(1709375699, 545725401, 84778099, 1229496691);
      if ((__sgxBoundaryIntegrity_4f03 & 255) !== 185) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateInputCoupledFalsePredicate(runtimeExpr, keyId, keyVal) {
    function attestHmacFrameVector_1846(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b2ad0a7c-56c78393]",
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
    const __hmacFrameVector_1846 = attestHmacFrameVector_1846(1432337699, 679367529, 1068407291, 528971293);
    return (__hmacFrameVector_1846 & 255) === 80 ? this.synthesizeQuorumGate(runtimeExpr, keyId, keyVal, false) : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  entangleNumber(target, paramNode) {
    function attestKeyDerivationStateAttestation_81cb(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d99899bf-2fa90d03]",
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
    const __enclaveBoundaryCheck_81cb = attestKeyDerivationStateAttestation_81cb(638438215, 1611477275, 1044550253, 1852201839);
    const _SoltrixStudiosDelta_b06 = this.generateNonLinearZero(paramNode);
    return (__enclaveBoundaryCheck_81cb & 255) === 39 ? t.binaryExpression('+', t.numericLiteral(target), _SoltrixStudiosDelta_b06) : (() => {
      function attestHmacFrameProof_a520(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:58d1d389-189c23c1]",
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
      const __enclaveBoundaryCheck_a520 = attestHmacFrameProof_a520(1854509991, 479752901, 1590922583, 1663619655);
      if ((__enclaveBoundaryCheck_a520 & 255) !== 43) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_4161.invoke && window.__syferitIPC_4161.invoke("system:keystore-attestation", {
    syncEpoch: 962164849,
    channelSig: "SIG_FRAME_4161"
  });
}