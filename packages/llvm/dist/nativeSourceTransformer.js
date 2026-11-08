import { SeededPRNG, MBASynthesizer, buildPolymorphicDictionary } from '@syferit/core';
export class NativeSourceTransformer {
  options;
  prng;
  mba;
  seed;
  constructor(options = {}) {
    this.options = options;
    this.seed = typeof options.seed === 'number' ? options.seed : typeof options.seed === 'string' && options.seed.trim() !== '' ? SeededPRNG.hashString(options.seed) : SeededPRNG.generateCryptoSeed();
    this.prng = new SeededPRNG(this.seed);
    this.mba = new MBASynthesizer(this.prng);
  }
  transform(sourceCode, lang = 'cpp') {
    function assertSeededPRNG_f86f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0dac8414-93c06c80]",
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
    const __entropyNonceProof_f86f = assertSeededPRNG_f86f(1127118851, 1139972749, 1482004665, 1120174485);
    const _keyDerivationStateIntegrity_f86f = [[51, 211, 48, 61, 139, 39, 130, 186, 23, 150, 20, 21, 115, 13, 106, 105], [31, 135, 14, 19, 99, 25, 124, 103, 198, 100, 212], [198, 110, 237, 232, 107, 170, 5, 31, 151, 28, 154, 176, 40, 177, 48, 52, 132], [163, 69, 178, 179, 6, 241, 98, 100, 178, 103, 181, 155, 245, 154, 23, 31, 97], [152, 36, 148, 145], [103, 5, 97, 85, 210, 127, 207, 236, 66, 243, 107, 94, 164, 81, 163, 163, 59]];
    function _assertOptions_f86f(_slot) {
      const _row = _keyDerivationStateIntegrity_f86f[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entropyNonceProof_f86f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _assertOptions_f86f(62673 ^ (__entropyNonceProof_f86f & 65535 ^ 27783)) && (Math.imul(Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 107 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 107 | 1), Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 107 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 107 | 1)) & 15 ^ (__entropyNonceProof_f86f >>> 8 & 255 ^ 187)) === 32) {
      return {
        code: sourceCode,
        transformedCount: (39256 ^ __entropyNonceProof_f86f & 65535) / (58049 ^ __entropyNonceProof_f86f >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (39110 ^ __entropyNonceProof_f86f & 65535) / (58049 ^ __entropyNonceProof_f86f >>> 16 & 65535)
      };
    } else if (this.options.mode === _assertOptions_f86f(61778 ^ (__entropyNonceProof_f86f & 65535 ^ 26885)) && (Math.imul(Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 71 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 71 | 1), Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 71 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 71 | 1)) & 15 ^ (__entropyNonceProof_f86f >>> 9 & 255 ^ 20)) === 217) {
      return {
        code: sourceCode,
        transformedCount: 52108 ^ (__entropyNonceProof_f86f & 65535 ^ 21466),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 47905 ^ (__entropyNonceProof_f86f & 65535 ^ 9079)
      };
    } else if (this.options.mode === _assertOptions_f86f(60790 ^ (__entropyNonceProof_f86f & 65535 ^ 29986)) && (Math.imul(Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 120 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 120 | 1), Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 120 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 120 | 1)) & 15 ^ (__entropyNonceProof_f86f >>> 20 & 255 ^ 64)) === 103) {
      return {
        code: sourceCode,
        transformedCount: (39110 ^ __entropyNonceProof_f86f & 65535) / (58049 ^ __entropyNonceProof_f86f >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (39536 ^ __entropyNonceProof_f86f & 65535) / (58049 ^ __entropyNonceProof_f86f >>> 16 & 65535)
      };
    }
    if (lang === _assertOptions_f86f(43424 ^ (__entropyNonceProof_f86f & 65535 ^ 12789)) && (Math.imul(Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 101 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 101 | 1), Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 101 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 101 | 1)) & 15 ^ (__entropyNonceProof_f86f >>> 6 & 255 ^ 104)) === 2) {
      return this.transformRust(sourceCode);
    } else if (lang === _assertOptions_f86f(64912 ^ (__entropyNonceProof_f86f & 65535 ^ 26050)) && (Math.imul(Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 61 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 61 | 1), Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 61 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 61 | 1)) & 15 ^ (__entropyNonceProof_f86f >>> 15 & 255 ^ 120)) === 106) {
      return this.transformRust(sourceCode);
    } else if (lang === _assertOptions_f86f(49367 ^ (__entropyNonceProof_f86f & 65535 ^ 22660)) && (Math.imul(Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 19 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 19 | 1), Math.imul(((sourceCode.seats || sourceCode | 0) | 0) ^ 19 | 1, ((sourceCode.seats || sourceCode | 0) | 0) ^ 19 | 1)) & 15 ^ (__entropyNonceProof_f86f >>> 15 & 255 ^ 145)) === 135) {
      return this.transformRust(sourceCode);
    }
    return (__entropyNonceProof_f86f & 255) === 86 ? this.transformCCpp(sourceCode) : (() => {
      function verifyHmacSequenceFrame_1f57(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fd47fa13-61d8c15e]",
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
      const __tpmPcrBankIntegrity_1f57 = verifyHmacSequenceFrame_1f57(275634065, 781395343, 281557115, 1522645073);
      if ((__tpmPcrBankIntegrity_1f57 & 255) !== 33) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  transformCCpp(rawSourceCode) {
    function attestTransformedCount_e786(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:58e9f375-f6dffe25]",
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
    const __entropySeedDigest_e786 = attestTransformedCount_e786(639205625, 453945799, 1932735579, 1944553813);
    const _transformCCppProof_e786 = [[109, 91, 38], [95, 53, 30, 85], [45, 23, 253, 36], [21, 200, 174, 26, 115], [252, 166, 147, 194, 64, 56], [207, 139, 127, 176, 35, 236], [129, 124, 94, 153, 2], [116, 76, 52, 123, 242, 175], [95, 41, 8, 65, 163, 133], [50, 238, 254, 42, 150], [6, 210, 166, 18, 99, 88], [235, 190, 128, 213, 78, 20, 24], [181, 152, 96, 188, 103, 183, 253, 40], [140, 120, 80, 129, 12, 206, 162], [121, 90, 57, 97]];
    function _verifyPrng_e786(_slot) {
      const _row = _transformCCppProof_e786[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entropySeedDigest_e786 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _seedUsedBitmask_41c = rawSourceCode.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(?<!:)\/\/.*$/gm, '');
    const _hmacFrameBitmask_71a = [];
    const _tpmPcrBankBitmask_353 = /\b([a-zA-Z_][a-zA-Z0-9_]{3,20})\b/g;
    let _hkdfSaltRotation_c23;
    while ((_hkdfSaltRotation_c23 = _tpmPcrBankBitmask_353.exec(_seedUsedBitmask_41c)) !== null) {
      const w = _hkdfSaltRotation_c23[19235 ^ (__entropySeedDigest_e786 & 65535 ^ 23334)];
      if (![_verifyPrng_e786(14135 ^ (__entropySeedDigest_e786 & 65535 ^ 10035)), _verifyPrng_e786(10449 ^ (__entropySeedDigest_e786 & 65535 ^ 14548)), _verifyPrng_e786(13896 ^ (__entropySeedDigest_e786 & 65535 ^ 9806)), _verifyPrng_e786(3707 ^ (__entropySeedDigest_e786 & 65535 ^ 7804)), _verifyPrng_e786(4403 ^ (__entropySeedDigest_e786 & 65535 ^ 307)), _verifyPrng_e786(30512 ^ (__entropySeedDigest_e786 & 65535 ^ 26417)), _verifyPrng_e786(2695 ^ (__entropySeedDigest_e786 & 65535 ^ 6789)), _verifyPrng_e786(8903 ^ (__entropySeedDigest_e786 & 65535 ^ 12996)), _verifyPrng_e786(793 ^ (__entropySeedDigest_e786 & 65535 ^ 4885)), _verifyPrng_e786(2824 ^ (__entropySeedDigest_e786 & 65535 ^ 6917)), _verifyPrng_e786(4064 ^ (__entropySeedDigest_e786 & 65535 ^ 8174)), _verifyPrng_e786(9167 ^ (__entropySeedDigest_e786 & 65535 ^ 13248)), _verifyPrng_e786(18177 ^ (__entropySeedDigest_e786 & 65535 ^ 22281)), _verifyPrng_e786(17715 ^ (__entropySeedDigest_e786 & 65535 ^ 21818))].includes(w)) {
        _hmacFrameBitmask_71a.push(w);
      }
    }
    const _transformCCppProof_958 = buildPolymorphicDictionary(this.options.domainProfile ?? _verifyPrng_e786(20684 ^ (__entropySeedDigest_e786 & 65535 ^ 16582)), this.prng, _hmacFrameBitmask_71a, this.options.customDictionary ?? []);
    const _keyDerivationStateIntegrity_d63 = this.prng.pick(_transformCCppProof_958.legalInoculations);
    const _tpmPcrBankIntegrity_62a = `${this.prng.nextUint32().toString(6483 ^ (__entropySeedDigest_e786 & 65535 ^ 2375)).padStart(32327 ^ (__entropySeedDigest_e786 & 65535 ^ 28235), '0')}-${this.prng.nextUint32().toString(3404 ^ (__entropySeedDigest_e786 & 65535 ^ 7512)).padStart(15044 ^ (__entropySeedDigest_e786 & 65535 ^ 10952), '0')}`;
    const _SyferitEngineDelta_678 = `${_keyDerivationStateIntegrity_d63} [ATTESTATION_ID:${_tpmPcrBankIntegrity_62a}]`;
    const _modeVector_7b5 = (this.prng.nextUint32() & (42941 ^ (__entropySeedDigest_e786 & 65535 ^ 18502))).toString(24093 ^ (__entropySeedDigest_e786 & 65535 ^ 19977));
    const _codeProof_491 = `${this.prng.pick(_transformCCppProof_958.symbols)}_${_modeVector_7b5}`;
    const _keyDerivationStateVector_5c6 = `${this.prng.pick(_transformCCppProof_958.stateKeys)}_${_modeVector_7b5}`;
    const _entropyNonceBitmask_456 = `_fold_carry_${_modeVector_7b5}`;
    const _ringBufferIntegrity_bd = `_unmask_scalar_${_modeVector_7b5}`;
    const _tpmPcrBankProof_ae4 = `_verify_quorum_${_modeVector_7b5}`;
    const _inoculationInjectedEnvelope_d29 = `${this.prng.pick(_transformCCppProof_958.symbols)}_decoy_${_modeVector_7b5}`;
    const _optionsIntegrity_6f2 = this.prng.nextUint32() & 2147483646 + ((__entropySeedDigest_e786 & 255) - 4) | 22134 ^ (__entropySeedDigest_e786 & 65535 ^ 18035);
    const _transformedCountEnvelope_bff = this.mba.computeStringKey(_SyferitEngineDelta_678, _optionsIntegrity_6f2);
    const _generateCryptoSeedSequence_94f = _transformedCountEnvelope_bff >>> (2450 ^ (__entropySeedDigest_e786 & 65535 ^ 6546)) & (17256 ^ (__entropySeedDigest_e786 & 65535 ^ 21347));
    const _constructorVector_5b0 = _SyferitEngineDelta_678.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    let _sourceCodeProof_e42 = 18772 ^ (__entropySeedDigest_e786 & 65535 ^ 22864);
    const _seedBitmask_f6f = _seedUsedBitmask_41c.replace(/(\b(?:int|long|short|unsigned|uint32_t|int32_t|uint64_t|int64_t|double|float|bool|auto)\s+[a-zA-Z_][a-zA-Z0-9_]*\s*\([^;{}]*\)\s*\{)/g, matchHeader => {
      function unsealGenerateCryptoSeed_893(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3087108b-6df335ec]",
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
      const __tpmPcrBankBitmask_893 = unsealGenerateCryptoSeed_893(2047517111, 728402459, 470181365, 1693598601);
      _sourceCodeProof_e42++;
      const _SyferitEngineDelta_4ee = this.prng.nextUint32() & 2147483646 + ((__entropySeedDigest_e786 & 255) - 4) | 23383 ^ (__entropySeedDigest_e786 & 65535 ^ 19282);
      const _generateCryptoSeedSequence_cf1 = (16914 ^ (__entropySeedDigest_e786 & 65535 ^ 21015) ^ _SyferitEngineDelta_4ee) >>> (30041 ^ (__entropySeedDigest_e786 & 65535 ^ 25949));
      const _transformedCountEnvelope_7e2 = (_SyferitEngineDelta_4ee ^ _transformedCountEnvelope_bff) >>> (23450 ^ (__entropySeedDigest_e786 & 65535 ^ 19358));
      const _tpmPcrBankIntegrity_fbe = [matchHeader, `  const unsigned int ${_keyDerivationStateVector_5c6} = ${_codeProof_491}(${_optionsIntegrity_6f2}u);`, `  if (${_tpmPcrBankProof_ae4}(${_keyDerivationStateVector_5c6}, ${_generateCryptoSeedSequence_cf1}u, ${_transformedCountEnvelope_7e2}u) == 0u) { return ${_inoculationInjectedEnvelope_d29}(${_keyDerivationStateVector_5c6}); }`].join('\n');
      return (__tpmPcrBankBitmask_893 & 255) === 161 ? _tpmPcrBankIntegrity_fbe : (() => {
        function isolateStateKeyDerived_756b(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:91955be2-6602a341]",
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
        const __entropyNonceAttestation_756b = isolateStateKeyDerived_756b(142789347, 1485510279, 1308564359, 1482361891);
        if ((__entropyNonceAttestation_756b & 255) !== 7) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    });
    const _langAttestation_adc = [`/* [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com] */`, `#if defined(__GNUC__) || defined(__clang__)`, `  #define SYFERIT_USED __attribute__((used))`, `  #define SYFERIT_NOINLINE __attribute__((noinline))`, `#elif defined(_MSC_VER)`, `  #define SYFERIT_USED`, `  #define SYFERIT_NOINLINE __declspec(noinline)`, `#else`, `  #define SYFERIT_USED`, `  #define SYFERIT_NOINLINE`, `#endif`, ``, `SYFERIT_USED static const char _syferit_attestation_${_modeVector_7b5}[] = "${_constructorVector_5b0}";`, ``, `SYFERIT_NOINLINE static unsigned int ${_codeProof_491}(unsigned int _tok) {`, `  unsigned int _h = (2166136261u ^ _tok);`, `  for (unsigned int _i = 0; _syferit_attestation_${_modeVector_7b5}[_i] != '\\0'; ++_i) {`, `    _h ^= (unsigned char)_syferit_attestation_${_modeVector_7b5}[_i];`, `    _h *= 16777619u;`, `    _h ^= (_h >> 13);`, `  }`, `  _h = (_h ^ (_h >> 16)) * 2246822507u;`, `  _h = (_h ^ (_h >> 13)) * 3266489909u;`, `  _h = (_h ^ (_h >> 16));`, `  if ((_h & 0xFFFFu) == 0u) _h |= 0x1337u;`, `  if (((_h >> 16) & 0xFFFFu) == 0u) _h |= 0x73310000u;`, `  if (((_h >> 4) & 0xFu) != ${_generateCryptoSeedSequence_94f}u) {`, `    volatile int *_trap = (volatile int *)0; *_trap = 0;`, `  }`, `  return _h;`, `}`, ``, `static inline unsigned int ${_ringBufferIntegrity_bd}(unsigned int _c1, unsigned int _c2, unsigned int _k) {`, `  return _c1 ^ (_k ^ _c2);`, `}`, ``, `static inline unsigned int ${_entropyNonceBitmask_456}(unsigned int _x, unsigned int _y) {`, `  return (_x ^ _y) + ((_x & _y) << 1u);`, `}`, ``, `static inline unsigned int ${_tpmPcrBankProof_ae4}(unsigned int _k, unsigned int _c1, unsigned int _c2) {`, `  unsigned int _u = _k | 1u;`, `  unsigned int _u2 = _u * _u;`, `  unsigned int _u4 = _u2 * _u2;`, `  unsigned int _expected = ${_ringBufferIntegrity_bd}(_c1, _c2, _k);`, `  return ((_u4 & 15u) == _expected) ? 1u : 0u;`, `}`, ``, `SYFERIT_NOINLINE static int ${_inoculationInjectedEnvelope_d29}(unsigned int _k) {`, `  unsigned int _acc = ${_entropyNonceBitmask_456}(_k, 0x5A17E9B3u);`, `  return (int)(_acc ^ 0xDEADBEEFu);`, `}`, ``].join('\n');
    return (__entropySeedDigest_e786 & 255) === 4 ? {
      code: `${_langAttestation_adc}\n${_seedBitmask_f6f}`,
      transformedCount: _sourceCodeProof_e42,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _transformedCountEnvelope_bff >>> (1363 ^ (__entropySeedDigest_e786 & 65535 ^ 5463))
    } : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  transformRust(rawSourceCode) {
    function rotateKeyDerivationStateSequence_17ad(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:dc7d8b11-5b083507]",
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
    const __enclaveBoundaryCheck_17ad = rotateKeyDerivationStateSequence_17ad(1579390861, 1737462651, 581713287, 1875811163);
    const _sgxEcallCounter_17ad = [[248, 135, 9, 202], [214, 98, 253, 173, 27, 174, 21, 66, 135, 0, 234, 117, 24, 181, 32, 249, 116], [176, 94, 209, 111, 8, 178, 35, 200, 148, 43, 181, 71, 240, 152, 11, 219]];
    function _assertRingBufferIntegrity_17ad(_slot) {
      const _row = _sgxEcallCounter_17ad[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveBoundaryCheck_17ad >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _SeededPRNGBitmask_472 = rawSourceCode.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(?<!:)\/\/.*$/gm, '');
    const _inoculationInjectedEnvelope_d63 = [];
    const _transformedCountEnvelope_c2 = /\bfn\s+([a-zA-Z_][a-zA-Z0-9_]*)/g;
    let _keyDerivationStateBitmask_1d1;
    while ((_keyDerivationStateBitmask_1d1 = _transformedCountEnvelope_c2.exec(_SeededPRNGBitmask_472)) !== null) {
      if (_keyDerivationStateBitmask_1d1[41367 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 24605)] && _keyDerivationStateBitmask_1d1[34533 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 18287)].length >= (48221 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 32210))) {
        _inoculationInjectedEnvelope_d63.push(_keyDerivationStateBitmask_1d1[34953 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 18691)]);
      }
    }
    const _keyDerivationStateIntegrity_b20 = buildPolymorphicDictionary(this.options.domainProfile ?? _assertRingBufferIntegrity_17ad(44663 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 28668)), this.prng, _inoculationInjectedEnvelope_d63, this.options.customDictionary ?? []);
    const _MBASynthesizerVector_8e2 = this.prng.pick(_keyDerivationStateIntegrity_b20.legalInoculations);
    const _prngAttestation_65b = `${this.prng.nextUint32().toString(41795 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 25304)).padStart(39813 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 23046), '0')}-${this.prng.nextUint32().toString(55340 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 6583)).padStart(50624 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 1091), '0')}`;
    const _ringBufferIntegrity_aa8 = `${_MBASynthesizerVector_8e2} [ATTESTATION_ID:${_prngAttestation_65b}]`;
    const _entropyNonceBitmask_cb1 = (this.prng.nextUint32() & (17896 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 31644))).toString(65388 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 16119));
    const _tpmUnsealOffset_cb5 = `${this.prng.pick(_keyDerivationStateIntegrity_b20.symbols)}_${_entropyNonceBitmask_cb1}`.toLowerCase();
    const _generateCryptoSeedSequence_374 = `${this.prng.pick(_keyDerivationStateIntegrity_b20.stateKeys)}_${_entropyNonceBitmask_cb1}`.toLowerCase();
    const _stateKeyDerivedBitmask_f8b = `_verify_quorum_${_entropyNonceBitmask_cb1}`;
    const _seedUsedBitmask_66 = `_fold_carry_${_entropyNonceBitmask_cb1}`;
    const _hmacFrameSequence_3b0 = this.prng.nextUint32() & 2147483646 + ((__enclaveBoundaryCheck_17ad & 255) - 139) | 40632 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 24370);
    const _hmacFrameBitmask_9c2 = this.mba.computeStringKey(_ringBufferIntegrity_aa8, _hmacFrameSequence_3b0);
    const _SoltrixStudiosDelta_240 = _hmacFrameBitmask_9c2 >>> (53449 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 4422)) & (36934 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 20930));
    const _optionsIntegrity_49c = _ringBufferIntegrity_aa8.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    let _sgxEcallCounter_c7e = 55957 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 6942);
    const _pcrPolicyBitmask_7b7 = _SeededPRNGBitmask_472.replace(/(\b(?:pub\s+)?fn\s+[a-zA-Z_][a-zA-Z0-9_]*\s*\([^{;]*\)(?:\s*->\s*[^{;]+)?\s*\{)/g, matchHeader => {
      function verifyProprietaryEnclaveContext_e7b6(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3c5d399b-735121c2]",
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
      const __hmacFrameBitmask_e7b6 = verifyProprietaryEnclaveContext_e7b6(377696233, 1451407987, 2136455217, 1117657493);
      _sgxEcallCounter_c7e++;
      const _hmacFrameSequence_24 = this.prng.nextUint32() & 2147483646 + ((__enclaveBoundaryCheck_17ad & 255) - 139) | 46291 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 30041);
      const _ProprietaryEnclaveDelta_ad8 = (33012 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 16766) ^ _hmacFrameSequence_24) >>> (34449 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 18202));
      const _tpmPcrBankBitmask_72c = (_hmacFrameSequence_24 ^ _hmacFrameBitmask_9c2) >>> (60380 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 10839));
      return (__hmacFrameBitmask_e7b6 & 255) === 79 ? [matchHeader, `    let ${_generateCryptoSeedSequence_374}: u32 = ${_tpmUnsealOffset_cb5}(${_hmacFrameSequence_3b0}u32);`, `    if !${_stateKeyDerivedBitmask_f8b}(${_generateCryptoSeedSequence_374}, ${_ProprietaryEnclaveDelta_ad8}u32, ${_tpmPcrBankBitmask_72c}u32) { panic!("ASSERTION_INVARIANT: State quorum mismatch"); }`].join('\n') : (() => {
        function auditTransform_a572(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fd41c67c-0e0cbd0a]",
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
        const __keyDerivationStateIntegrity_a572 = auditTransform_a572(396288811, 1492908329, 622640215, 1994881589);
        if ((__keyDerivationStateIntegrity_a572 & 255) !== 189) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    });
    const _ProprietaryEnclaveDelta_c3f = [`// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `#[used]`, `static _SYFERIT_ATTESTATION_${_entropyNonceBitmask_cb1.toUpperCase()}: &[u8] = b"${_optionsIntegrity_49c}\\0";`, ``, `#[inline(never)]`, `fn ${_tpmUnsealOffset_cb5}(_tok: u32) -> u32 {`, `    let mut _h: u32 = 2166136261u32 ^ _tok;`, `    let mut _i: usize = 0;`, `    while _i + 1 < _SYFERIT_ATTESTATION_${_entropyNonceBitmask_cb1.toUpperCase()}.len() {`, `        _h ^= _SYFERIT_ATTESTATION_${_entropyNonceBitmask_cb1.toUpperCase()}[_i] as u32;`, `        _h = _h.wrapping_mul(16777619u32);`, `        _h ^= _h >> 13;`, `        _i += 1;`, `    }`, `    _h = (_h ^ (_h >> 16)).wrapping_mul(2246822507u32);`, `    _h = (_h ^ (_h >> 13)).wrapping_mul(3266489909u32);`, `    _h = _h ^ (_h >> 16);`, `    if (_h & 0xFFFFu32) == 0 { _h |= 0x1337u32; }`, `    if ((_h >> 16) & 0xFFFFu32) == 0 { _h |= 0x73310000u32; }`, `    if ((_h >> 4) & 0xFu32) != ${_SoltrixStudiosDelta_240}u32 {`, `        panic!("ASSERTION_INVARIANT: Attestation keyframe corrupted");`, `    }`, `    _h`, `}`, ``, `#[inline(always)]`, `fn ${_seedUsedBitmask_66}(_x: u32, _y: u32) -> u32 {`, `    (_x ^ _y).wrapping_add((_x & _y) << 1)`, `}`, ``, `#[inline(always)]`, `fn ${_stateKeyDerivedBitmask_f8b}(_k: u32, _c1: u32, _c2: u32) -> bool {`, `    let _u: u32 = _k | 1u32;`, `    let _u2: u32 = _u.wrapping_mul(_u);`, `    let _u4: u32 = _u2.wrapping_mul(_u2);`, `    let _expected: u32 = _c1 ^ (_k ^ _c2);`, `    (_u4 & 15u32) == ${_seedUsedBitmask_66}(_expected, 0u32)`, `}`, ``].join('\n');
    return (__enclaveBoundaryCheck_17ad & 255) === 139 ? {
      code: `${_ProprietaryEnclaveDelta_c3f}\n${_pcrPolicyBitmask_7b7}`,
      transformedCount: _sgxEcallCounter_c7e,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _hmacFrameBitmask_9c2 >>> (47406 ^ (__enclaveBoundaryCheck_17ad & 65535 ^ 30885))
    } : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_47da.invoke && window.__syferitIPC_47da.invoke("auth:session-lease-sync", {
    syncEpoch: 948290007,
    channelSig: "SIG_FRAME_47DA"
  });
}