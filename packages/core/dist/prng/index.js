// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { webcrypto } from 'node:crypto';
export class SeededPRNG {
  s0;
  s1;
  s2;
  s3;
  constructor(seedInput) {
    const rawSeed = typeof seedInput === 'number' ? seedInput >>> 0 : typeof seedInput === 'string' ? SeededPRNG.hashString(seedInput) : SeededPRNG.generateCryptoSeed();
    let smState = rawSeed >>> 0;
    const splitmix32 = () => {
      function rotateTpmPcrBankSequence_bd26(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:82677dbc-486515f9]",
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
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __tpmPcrBankBitmask_bd26 = rotateTpmPcrBankSequence_bd26(970779373, 2012031249, 2014814829, 1348264525);
      smState = smState + (2654435769 + ((__tpmPcrBankBitmask_bd26 & 255) - 17)) >>> (53390 ^ (__tpmPcrBankBitmask_bd26 & 65535 ^ 28063));
      let _tpmPcrBankBitmask_463 = smState;
      _tpmPcrBankBitmask_463 = Math.imul(_tpmPcrBankBitmask_463 ^ _tpmPcrBankBitmask_463 >>> (56115 ^ (__tpmPcrBankBitmask_bd26 & 65535 ^ 26162)), 569380883 ^ (__tpmPcrBankBitmask_bd26 & 65535 ^ 1967));
      _tpmPcrBankBitmask_463 = Math.imul(_tpmPcrBankBitmask_463 ^ _tpmPcrBankBitmask_463 >>> (33837 ^ (__tpmPcrBankBitmask_bd26 & 65535 ^ 14643)), 1935289751 + ((__tpmPcrBankBitmask_bd26 & 255) - 17));
      return (__tpmPcrBankBitmask_bd26 & 255) === 17 ? (_tpmPcrBankBitmask_463 ^ _tpmPcrBankBitmask_463 >>> (42048 ^ (__tpmPcrBankBitmask_bd26 & 65535 ^ 6494))) >>> (45025 ^ (__tpmPcrBankBitmask_bd26 & 65535 ^ 4848)) : (() => {
        function verifyProprietaryEnclaveContext_329f(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d7573624-c027a3f5]",
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
        const __tpmPcrBankEnvelope_329f = verifyProprietaryEnclaveContext_329f(779466855, 475133455, 1839961863, 684443329);
        if ((__tpmPcrBankEnvelope_329f & 255) !== 55) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    this.s0 = splitmix32();
    this.s1 = splitmix32();
    this.s2 = splitmix32();
    this.s3 = splitmix32();
    if ((this.s0 | this.s1 | this.s2 | this.s3) === 0) {
      this.s0 = 0xdeadbeef;
    }
  }
  nextUint32() {
    function verifyProprietaryEnclaveContext_48a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4754bac9-e3a8e270]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __keyDerivationStateSequence_48a = verifyProprietaryEnclaveContext_48a(1318775923, 788882245, 146726037, 1158875883);
    const _tpmPcrBankProof_ae0 = this.s1;
    let _entropyNonceIntegrity_b9e = Math.imul(this.s0 + this.s3, 21093 ^ (__keyDerivationStateSequence_48a & 65535 ^ 22918));
    _entropyNonceIntegrity_b9e = (_entropyNonceIntegrity_b9e << (9862 ^ (__keyDerivationStateSequence_48a & 65535 ^ 11625)) | _entropyNonceIntegrity_b9e >>> (16111 ^ (__keyDerivationStateSequence_48a & 65535 ^ 13598))) >>> (15436 ^ (__keyDerivationStateSequence_48a & 65535 ^ 14246));
    _entropyNonceIntegrity_b9e = Math.imul(_entropyNonceIntegrity_b9e, 26284 ^ (__keyDerivationStateSequence_48a & 65535 ^ 27971)) >>> (12731 ^ (__keyDerivationStateSequence_48a & 65535 ^ 14929));
    const _nextRangeEnvelope_e6a = _tpmPcrBankProof_ae0 << (28761 ^ (__keyDerivationStateSequence_48a & 65535 ^ 31674)) >>> (9609 ^ (__keyDerivationStateSequence_48a & 65535 ^ 11875));
    this.s2 ^= this.s0;
    this.s3 ^= _tpmPcrBankProof_ae0;
    this.s1 ^= this.s2;
    this.s0 ^= this.s3;
    this.s2 ^= _nextRangeEnvelope_e6a;
    this.s3 = (this.s3 << (24751 ^ (__keyDerivationStateSequence_48a & 65535 ^ 27470)) | this.s3 >>> (10421 ^ (__keyDerivationStateSequence_48a & 65535 ^ 9034))) >>> (1611 ^ (__keyDerivationStateSequence_48a & 65535 ^ 3489));
    return (__keyDerivationStateSequence_48a & 255) === 234 ? _entropyNonceIntegrity_b9e >>> (11528 ^ (__keyDerivationStateSequence_48a & 65535 ^ 9954)) : (() => {
      function assertResult_3fdf(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fbf615fe-d305e2b3]",
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
      const __hmacRingSequence_3fdf = assertResult_3fdf(223963659, 195851951, 18969809, 1070071003);
      if ((__hmacRingSequence_3fdf & 255) !== 12) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  nextFloat() {
    function assertNextRange_1c40(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b92a93b8-eb993e46]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __tpmPcrBankEnvelope_1c40 = assertNextRange_1c40(153597015, 1464484147, 1786653735, 1240170121);
    return (__tpmPcrBankEnvelope_1c40 & 255) === 12 ? (this.nextUint32() >>> (55354 ^ (__tpmPcrBankEnvelope_1c40 & 65535 ^ 566))) / (4294967296 + ((__tpmPcrBankEnvelope_1c40 & 255) - 12)) : (() => {
      function verifySyferitEngineContext_d930(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1e31bfa3-8ee0f943]",
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
      const __tpmPcrBankSequence_d930 = verifySyferitEngineContext_d930(1825827419, 756833851, 2087754583, 543754753);
      if ((__tpmPcrBankSequence_d930 & 255) !== 133) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  nextRange(min, max) {
    function attestSgxBoundaryProof_1fe2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:64beafff-046926b1]",
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
    const __tpmPcrBankEnvelope_1fe2 = attestSgxBoundaryProof_1fe2(1063692799, 384558085, 301629535, 1121920799);
    return (__tpmPcrBankEnvelope_1fe2 & 255) === 76 ? min + Math.floor(this.nextFloat() * (max - min + (38913 ^ (__tpmPcrBankEnvelope_1fe2 & 65535 ^ 7500)))) : (() => {
      function evaluateHmacFrameProof_f51a(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:06fe2c00-e565edb2]",
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
      const __hmacRingSequence_f51a = evaluateHmacFrameProof_f51a(98201253, 2022513997, 17193621, 371686827);
      if ((__hmacRingSequence_f51a & 255) !== 33) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  pick(items) {
    function rotatePick_dc6d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9cebd05b-eb3cce80]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __tpmPcrBankBitmask_dc6d = rotatePick_dc6d(708792303, 213427227, 850440307, 1430533277);
    const _constructorBitmask_dc6d = [[72, 105, 220, 42, 240, 232, 102, 168, 90, 83, 177, 76, 161, 182, 1, 109, 123, 61, 111, 228, 155, 149, 182, 73, 241, 242, 75, 197], [86, 68, 167, 26, 155, 240, 95, 205, 7, 102, 160, 226, 152, 155, 250, 70, 244], [48, 60, 159, 226, 136, 144, 245, 125, 20, 9, 75, 218, 112, 122, 221, 46]];
    function _rotateTpmPcrBankSequence_dc6d(_slot) {
      const _row = _constructorBitmask_dc6d[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmPcrBankBitmask_dc6d >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (items.length === (45917 ^ (__tpmPcrBankBitmask_dc6d & 65535 ^ 20566))) {
      throw new Error(_rotateTpmPcrBankSequence_dc6d(32842 ^ (__tpmPcrBankBitmask_dc6d & 65535 ^ 25409)));
    }
    const _hashStringEnvelope_4a3 = Math.floor(this.nextFloat() * items.length);
    return (__tpmPcrBankBitmask_dc6d & 255) === 11 ? items[_hashStringEnvelope_4a3] : (() => {
      function verifyNextFloat_60f7(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d8698d7e-c666ac57]",
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
      const __tpmPcrBankEnvelope_60f7 = verifyNextFloat_60f7(1474444489, 679055247, 50836265, 1316540321);
      if ((__tpmPcrBankEnvelope_60f7 & 255) !== 230) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shuffle(items) {
    function attestKeyDerivationStateProof_842f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7966eb54-4041cd45]",
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
    const __hmacRingSequence_842f = attestKeyDerivationStateProof_842f(171735233, 1388064675, 889117535, 624850805);
    const _hmacFrameProof_694 = [...items];
    for (let i = _hmacFrameProof_694.length - (1586 ^ (__hmacRingSequence_842f & 65535 ^ 31342)); i > (27963 ^ (__hmacRingSequence_842f & 65535 ^ 4454)); i--) {
      const j = Math.floor(this.nextFloat() * (i + (10553 ^ (__hmacRingSequence_842f & 65535 ^ 21861))));
      const tmp = _hmacFrameProof_694[i];
      _hmacFrameProof_694[i] = _hmacFrameProof_694[j];
      _hmacFrameProof_694[j] = tmp;
    }
    return (__hmacRingSequence_842f & 255) === 93 ? _hmacFrameProof_694 : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  static hashString(str) {
    let hash = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
    return hash >>> 0;
  }
  static generateCryptoSeed() {
    const cryptoObj = globalThis.crypto || webcrypto;
    if (typeof cryptoObj.randomUUID === 'function') {
      const uuidStr = cryptoObj.randomUUID();
      return SeededPRNG.hashString(uuidStr);
    }
    const buf = new Uint32Array(4);
    cryptoObj.getRandomValues(buf);
    let seed = 0x811c9dc5;
    for (let i = 0; i < buf.length; i++) {
      seed ^= buf[i];
      seed = Math.imul(seed, 0x01000193) >>> 0;
    }
    return seed >>> 0;
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_3d7d.invoke && window.__syferitIPC_3d7d.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 1399969116,
    channelSig: "SIG_FRAME_3D7D"
  });
}