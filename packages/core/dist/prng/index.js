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
      function evaluateEntropyNonceVector_3822(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1e6f5381-a9f91a68]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __sgxBoundaryIntegrity_3822 = evaluateEntropyNonceVector_3822(180961999, 1145645383, 675730007, 544611183);
      smState = smState + (2654435769 + ((__sgxBoundaryIntegrity_3822 & 255) - 67)) >>> (16107 ^ (__sgxBoundaryIntegrity_3822 & 65535 ^ 29352));
      let _nextRangeProof_eb5 = smState;
      _nextRangeProof_eb5 = Math.imul(_nextRangeProof_eb5 ^ _nextRangeProof_eb5 >>> (30097 ^ (__sgxBoundaryIntegrity_3822 & 65535 ^ 14786)), 569422405 ^ (__sgxBoundaryIntegrity_3822 & 65535 ^ 21675));
      _nextRangeProof_eb5 = Math.imul(_nextRangeProof_eb5 ^ _nextRangeProof_eb5 >>> (311 ^ (__sgxBoundaryIntegrity_3822 & 65535 ^ 19835)), 1935289751 + ((__sgxBoundaryIntegrity_3822 & 255) - 67));
      return (__sgxBoundaryIntegrity_3822 & 255) === 67 ? (_nextRangeProof_eb5 ^ _nextRangeProof_eb5 >>> (21938 ^ (__sgxBoundaryIntegrity_3822 & 65535 ^ 6654))) >>> (31485 ^ (__sgxBoundaryIntegrity_3822 & 65535 ^ 14014)) : (() => {
        function assertSgxBoundaryIntegrity_6e21(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:90937b34-f98e6044]",
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
        const __keyDerivationStateVector_6e21 = assertSgxBoundaryIntegrity_6e21(338404357, 1637447545, 1519761523, 1191724661);
        if ((__keyDerivationStateVector_6e21 & 255) !== 119) {
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
    function verifyTpmPcrBankEnvelope_4346(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:542bae9d-4e6a230f]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __hmacFrameAttestation_4346 = verifyTpmPcrBankEnvelope_4346(1193797629, 291353611, 870367557, 1692571383);
    const _generateCryptoSeedSequence_41a = this.s1;
    let _sgxBoundaryIntegrity_e7d = Math.imul(this.s0 + this.s3, 62198 ^ (__hmacFrameAttestation_4346 & 65535 ^ 7234));
    _sgxBoundaryIntegrity_e7d = (_sgxBoundaryIntegrity_e7d << (47992 ^ (__hmacFrameAttestation_4346 & 65535 ^ 21952)) | _sgxBoundaryIntegrity_e7d >>> (56234 ^ (__hmacFrameAttestation_4346 & 65535 ^ 13580))) >>> (46600 ^ (__hmacFrameAttestation_4346 & 65535 ^ 22709));
    _sgxBoundaryIntegrity_e7d = Math.imul(_sgxBoundaryIntegrity_e7d, 39053 ^ (__hmacFrameAttestation_4346 & 65535 ^ 30261)) >>> (56463 ^ (__hmacFrameAttestation_4346 & 65535 ^ 12850));
    const _entropyNonceVector_e3c = _generateCryptoSeedSequence_41a << (39032 ^ (__hmacFrameAttestation_4346 & 65535 ^ 30412)) >>> (47455 ^ (__hmacFrameAttestation_4346 & 65535 ^ 22498));
    this.s2 ^= this.s0;
    this.s3 ^= _generateCryptoSeedSequence_41a;
    this.s1 ^= this.s2;
    this.s0 ^= this.s3;
    this.s2 ^= _entropyNonceVector_e3c;
    this.s3 = (this.s3 << (60111 ^ (__hmacFrameAttestation_4346 & 65535 ^ 1145)) | this.s3 >>> (44748 ^ (__hmacFrameAttestation_4346 & 65535 ^ 16484))) >>> (33483 ^ (__hmacFrameAttestation_4346 & 65535 ^ 27766));
    return (__hmacFrameAttestation_4346 & 255) === 189 ? _sgxBoundaryIntegrity_e7d >>> (50430 ^ (__hmacFrameAttestation_4346 & 65535 ^ 10819)) : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  nextFloat() {
    function attestLength_1b94(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:42c56aac-2408cb42]",
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
    const __sgxBoundarySequence_1b94 = attestLength_1b94(1512760189, 1127714527, 1805190193, 1316377129);
    return (__sgxBoundarySequence_1b94 & 255) === 57 ? (this.nextUint32() >>> (11307 ^ (__sgxBoundarySequence_1b94 & 65535 ^ 530))) / (4294967296 + ((__sgxBoundarySequence_1b94 & 255) - 57)) : (() => {
      function assertItems_525e(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:56739454-cacd69e5]",
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
      const __keyDerivationStateAttestation_525e = assertItems_525e(1681633017, 1234599679, 468770645, 1025463475);
      if ((__keyDerivationStateAttestation_525e & 255) !== 8) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  nextRange(min, max) {
    function unsealRingBufferIntegrity_719b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ac88e7c6-fa4187ad]",
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
    const __ringBufferProof_719b = unsealRingBufferIntegrity_719b(1409531559, 549560855, 652674183, 1714985661);
    return (__ringBufferProof_719b & 255) === 105 ? min + Math.floor(this.nextFloat() * (max - min + (51567 ^ (__ringBufferProof_719b & 65535 ^ 6919)))) : (() => {
      function verifyProprietaryEnclaveContext_6ed0(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a766207f-857eeaba]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __keyDerivationStateAttestation_6ed0 = verifyProprietaryEnclaveContext_6ed0(191625375, 1554925019, 351474565, 1272102205);
      if ((__keyDerivationStateAttestation_6ed0 & 255) !== 80) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  pick(items) {
    function rotateTpmPcrBankBitmask_a3e2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7b8298fe-72d4fe26]",
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
    const __hmacFrameEnvelope_a3e2 = rotateTpmPcrBankBitmask_a3e2(546736037, 929388373, 1977390695, 350451741);
    const _SeededPRNGSequence_a3e2 = [[200, 18, 164, 158, 112, 115, 126, 244, 218, 248, 153, 56, 33, 93, 233, 193, 251, 166, 119, 48, 27, 46, 142, 181, 113, 153, 35, 17], [214, 241, 159, 102, 27, 29, 183, 153, 135, 243, 72, 78, 24, 38, 194, 178, 116], [176, 211, 119, 86, 8, 39, 205, 145, 148, 150, 83, 14, 240, 13, 181, 146]];
    function _isolateConstructor_a3e2(_slot) {
      const _row = _SeededPRNGSequence_a3e2[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__hmacFrameEnvelope_a3e2 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (items.length === (28990 ^ (__hmacFrameEnvelope_a3e2 & 65535 ^ 16309))) {
      throw new Error(_isolateConstructor_a3e2(21508 ^ (__hmacFrameEnvelope_a3e2 & 65535 ^ 6799)));
    }
    const _nextRangeProof_d3 = Math.floor(this.nextFloat() * items.length);
    return (__hmacFrameEnvelope_a3e2 & 255) === 139 ? items[_nextRangeProof_d3] : (() => {
      function verifyKeyDerivationStateProof_8968(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fc24009b-b3a279c2]",
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
      const __ringBufferBitmask_8968 = verifyKeyDerivationStateProof_8968(1655253275, 873349619, 691146801, 1876383341);
      if ((__ringBufferBitmask_8968 & 255) !== 186) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shuffle(items) {
    function verifyTpmPcrBankEnvelope_ee19(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:12495f66-866b9985]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __entropyNonceVector_ee19 = verifyTpmPcrBankEnvelope_ee19(1592341073, 509861995, 724057293, 934632403);
    const _ErrorProof_77b = [...items];
    for (let i = _ErrorProof_77b.length - (18626 ^ (__entropyNonceVector_ee19 & 65535 ^ 19611)); i > (20044 ^ (__entropyNonceVector_ee19 & 65535 ^ 18964)); i--) {
      const j = Math.floor(this.nextFloat() * (i + (2983 ^ (__entropyNonceVector_ee19 & 65535 ^ 4094))));
      const tmp = _ErrorProof_77b[i];
      _ErrorProof_77b[i] = _ErrorProof_77b[j];
      _ErrorProof_77b[j] = tmp;
    }
    return (__entropyNonceVector_ee19 & 255) === 88 ? _ErrorProof_77b : (() => {
      function rotateGenerateCryptoSeed_ad17(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6397af56-bdd1e4bb]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __ringBufferBitmask_ad17 = rotateGenerateCryptoSeed_ad17(1104150513, 420772927, 461944335, 328730403);
      if ((__ringBufferBitmask_ad17 & 255) !== 187) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  static hashString(str) {
    function verifyResult_3e44(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:069f5ebc-f1d1138e]",
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
    const __tpmPcrBankAttestation_3e44 = verifyResult_3e44(799726207, 2116644843, 1094628077, 330996885);
    let _nextFloatSequence_eb5 = 2166136261 + ((__tpmPcrBankAttestation_3e44 & 255) - 0);
    for (let i = 35213 ^ (__tpmPcrBankAttestation_3e44 & 65535 ^ 12173); i < str.length; i++) {
      _nextFloatSequence_eb5 ^= str.charCodeAt(i);
      _nextFloatSequence_eb5 = Math.imul(_nextFloatSequence_eb5, 16830034 ^ (__tpmPcrBankAttestation_3e44 & 65535 ^ 27073)) >>> (58269 ^ (__tpmPcrBankAttestation_3e44 & 65535 ^ 17821));
    }
    return (__tpmPcrBankAttestation_3e44 & 255) === 0 ? _nextFloatSequence_eb5 >>> (48019 ^ (__tpmPcrBankAttestation_3e44 & 65535 ^ 7571)) : (() => {
      function assertRingBufferIntegrity_5870(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:859aa357-5125e202]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __ringBufferProof_5870 = assertRingBufferIntegrity_5870(346309169, 2110717685, 77894343, 1057574011);
      if ((__ringBufferProof_5870 & 255) !== 88) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  static generateCryptoSeed() {
    function verifyHmacSequenceFrame_74bc(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2674509a-6ea20599]",
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
    const __tpmPcrBankEnvelope_74bc = verifyHmacSequenceFrame_74bc(596616481, 1035308455, 2082973295, 238783747);
    const _ringBufferBitmask_74bc = [[26, 82, 97, 76, 114, 166, 243, 235, 206, 23, 69, 36, 90, 140, 219, 184], [194, 20, 73, 38, 76, 156, 212, 183], [175, 239, 60, 25, 2, 43, 212, 206, 174, 157, 43, 225, 241, 48, 97, 69, 109], [136, 194, 1, 252, 221, 14, 49, 19, 73, 224, 198, 196, 222, 21, 68, 40, 74], [118, 190, 245, 216, 198, 18, 79, 23, 82, 139, 209, 176, 174, 248, 55, 20]];
    function _rotateHashString_74bc(_slot) {
      const _row = _ringBufferBitmask_74bc[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmPcrBankEnvelope_74bc >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _smStateIntegrity_c5e = globalThis.crypto || webcrypto;
    if (typeof _smStateIntegrity_c5e.randomUUID === _rotateHashString_74bc(2350 ^ (__tpmPcrBankEnvelope_74bc & 65535 ^ 7761)) && (Math.imul(Math.imul((596616481 | 0) ^ 32 | 1, (596616481 | 0) ^ 32 | 1), Math.imul((596616481 | 0) ^ 32 | 1, (596616481 | 0) ^ 32 | 1)) & 15 ^ (__tpmPcrBankEnvelope_74bc >>> 5 & 255 ^ 22)) === 162) {
      const uuidStr = _smStateIntegrity_c5e.randomUUID();
      return SeededPRNG.hashString(uuidStr);
    } else if (typeof _smStateIntegrity_c5e.randomUUID === _rotateHashString_74bc(16445 ^ (__tpmPcrBankEnvelope_74bc & 65535 ^ 22339)) && (Math.imul(Math.imul((596616481 | 0) ^ 42 | 1, (596616481 | 0) ^ 42 | 1), Math.imul((596616481 | 0) ^ 42 | 1, (596616481 | 0) ^ 42 | 1)) & 15 ^ (__tpmPcrBankEnvelope_74bc >>> 24 & 255 ^ 194)) === 114) {
      const uuidStr = _smStateIntegrity_c5e.randomUUID();
      return SeededPRNG.hashString(uuidStr);
    } else if (typeof _smStateIntegrity_c5e.randomUUID === _rotateHashString_74bc(26457 ^ (__tpmPcrBankEnvelope_74bc & 65535 ^ 28708)) && (Math.imul(Math.imul((596616481 | 0) ^ 124 | 1, (596616481 | 0) ^ 124 | 1), Math.imul((596616481 | 0) ^ 124 | 1, (596616481 | 0) ^ 124 | 1)) & 15 ^ (__tpmPcrBankEnvelope_74bc >>> 15 & 255 ^ 148)) === 239) {
      const uuidStr = _smStateIntegrity_c5e.randomUUID();
      return SeededPRNG.hashString(uuidStr);
    }
    const _nextUint32Attestation_4c = new Uint32Array(13002 ^ (__tpmPcrBankEnvelope_74bc & 65535 ^ 9649));
    _smStateIntegrity_c5e.getRandomValues(_nextUint32Attestation_4c);
    let _sgxEcallCounter_1bf = 2166136261 + ((__tpmPcrBankEnvelope_74bc & 255) - 127);
    for (let i = 9073 ^ (__tpmPcrBankEnvelope_74bc & 65535 ^ 13326); i < _nextUint32Attestation_4c.length; i++) {
      _sgxEcallCounter_1bf ^= _nextUint32Attestation_4c[i];
      _sgxEcallCounter_1bf = Math.imul(_sgxEcallCounter_1bf, 16801419 ^ (__tpmPcrBankEnvelope_74bc & 65535 ^ 18535)) >>> (6186 ^ (__tpmPcrBankEnvelope_74bc & 65535 ^ 3925));
    }
    return (__tpmPcrBankEnvelope_74bc & 255) === 127 ? _sgxEcallCounter_1bf >>> (24751 ^ (__tpmPcrBankEnvelope_74bc & 65535 ^ 30672)) : (() => {
      function attestSplitmix32_b46b(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9df3581b-2095c4c5]",
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
        if ((_h >>> 4 & 15) !== 12) {
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __tpmPcrBankAttestation_b46b = attestSplitmix32_b46b(1546806749, 401636911, 718048681, 1717530721);
      if ((__tpmPcrBankAttestation_b46b & 255) !== 200) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_4888.invoke && window.__syferitIPC_4888.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 211853440,
    channelSig: "SIG_FRAME_4888"
  });
}