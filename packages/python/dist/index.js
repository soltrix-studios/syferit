import { SeededPRNG, MBASynthesizer, buildPolymorphicDictionary } from '@syferit/core';
export class PythonTransformer {
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
  transform(pythonCode) {
    function attestSeededPRNG_5094(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:88fe28cd-3666bc94]",
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
    const __tpmPcrBankEnvelope_5094 = attestSeededPRNG_5094(727087545, 2100777669, 68065837, 149903989);
    const _hmacFrameSequence_5094 = [[240, 72, 93, 214, 117, 132, 245, 9, 225, 122, 10, 190, 38, 175, 128, 2, 146], [223, 35, 36, 175, 35, 181, 150, 51, 134, 0, 14], [133, 5, 20, 131, 21, 137, 110, 220, 97, 224, 240, 123, 253, 83, 86, 207], [118, 241, 253, 103], [76, 220, 177, 74, 225, 120, 97, 253, 13, 238, 182, 18, 146, 3, 20, 150, 14], [42, 180, 133, 50, 130, 24, 31, 173, 30, 113, 97, 234, 106, 226, 199, 126]];
    function _unsealPythonTransformer_5094(_slot) {
      const _row = _hmacFrameSequence_5094[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmPcrBankEnvelope_5094 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _unsealPythonTransformer_5094(52952 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 12878)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 93 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 93 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 93 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 93 | 1)) & 15 ^ (__tpmPcrBankEnvelope_5094 >>> 10 & 255 ^ 71)) === 179) {
      return {
        code: pythonCode,
        transformedCount: (65200 ^ __tpmPcrBankEnvelope_5094 & 65535) / (13867 ^ __tpmPcrBankEnvelope_5094 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (65248 ^ __tpmPcrBankEnvelope_5094 & 65535) / (13867 ^ __tpmPcrBankEnvelope_5094 >>> 16 & 65535)
      };
    } else if (this.options.mode === _unsealPythonTransformer_5094(59779 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 5396)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 31 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 31 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 31 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 31 | 1)) & 15 ^ (__tpmPcrBankEnvelope_5094 >>> 1 & 255 ^ 17)) === 91) {
      return {
        code: pythonCode,
        transformedCount: 57115 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 9101),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 42187 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 22621)
      };
    } else if (this.options.mode === _unsealPythonTransformer_5094(36640 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 29620)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 85 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 85 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 85 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 85 | 1)) & 15 ^ (__tpmPcrBankEnvelope_5094 >>> 18 & 255 ^ 54)) === 131) {
      return {
        code: pythonCode,
        transformedCount: (64920 ^ __tpmPcrBankEnvelope_5094 & 65535) / (13867 ^ __tpmPcrBankEnvelope_5094 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (64532 ^ __tpmPcrBankEnvelope_5094 & 65535) / (13867 ^ __tpmPcrBankEnvelope_5094 >>> 16 & 65535)
      };
    }
    const _codeSequence_a95 = [];
    const _modeAttestation_b00 = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _MBASynthesizerBitmask_5d6;
    while ((_MBASynthesizerBitmask_5d6 = _modeAttestation_b00.exec(pythonCode)) !== null) {
      if (_MBASynthesizerBitmask_5d6[55517 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 9290)] && _MBASynthesizerBitmask_5d6[47015 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 19248)].length >= (36352 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 29330)) && !_MBASynthesizerBitmask_5d6[61886 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 3369)].startsWith('__')) {
        _codeSequence_a95.push(_MBASynthesizerBitmask_5d6[35306 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 30077)]);
      }
    }
    const _tpmUnsealOffset_857 = buildPolymorphicDictionary(this.options.domainProfile ?? _unsealPythonTransformer_5094(50560 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 14613)), this.prng, _codeSequence_a95, this.options.customDictionary ?? []);
    const _entropyNonceVector_797 = this.prng.pick(_tpmUnsealOffset_857.legalInoculations);
    const _generateCryptoSeedSequence_a7b = `${this.prng.nextUint32().toString(63530 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 1196)).padStart(64237 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 1651), '0')}-${this.prng.nextUint32().toString(54896 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 10998)).padStart(63425 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 2911), '0')}`;
    const _enclaveDigestEnvelope_b09 = `${_entropyNonceVector_797} [ATTESTATION_ID:${_generateCryptoSeedSequence_a7b}]`;
    const _pcrPolicyBitmask_7 = (this.prng.nextUint32() & (6606 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 6823))).toString(39950 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 24712));
    const _SoltrixStudiosDelta_574 = `_${this.prng.pick(_tpmUnsealOffset_857.stateKeys).replace(/^_+/, '')}_attestation_${_pcrPolicyBitmask_7}`;
    const _transformedCountSequence_4a2 = `_${this.prng.pick(_tpmUnsealOffset_857.symbols)}_${_pcrPolicyBitmask_7}`;
    const _harvestedVector_16c = `_${this.prng.pick(_tpmUnsealOffset_857.stateKeys).replace(/^_+/, '')}_${_pcrPolicyBitmask_7}`;
    const _enclaveDigestSequence_83a = `_enclave_matrix_${_pcrPolicyBitmask_7}`;
    const _SeededPRNGBitmask_2f7 = `_unseal_slot_${_pcrPolicyBitmask_7}`;
    const _hashStringIntegrity_ee3 = `_verify_quorum_${_pcrPolicyBitmask_7}`;
    const _transformSequence_ce4 = `_fold_carry_${_pcrPolicyBitmask_7}`;
    const _constructorProof_a8c = `_${this.prng.pick(_tpmUnsealOffset_857.symbols)}_decoy_${_pcrPolicyBitmask_7}`;
    const _seedUsedIntegrity_ac7 = [this.prng.nextUint32() & 2147483646 + ((__tpmPcrBankEnvelope_5094 & 255) - 150) | 33785 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 32622), this.prng.nextUint32() & 2147483646 + ((__tpmPcrBankEnvelope_5094 & 255) - 150) | 61835 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 3356), this.prng.nextUint32() & 2147483646 + ((__tpmPcrBankEnvelope_5094 & 255) - 150) | 34727 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 31536), this.prng.nextUint32() & 2147483646 + ((__tpmPcrBankEnvelope_5094 & 255) - 150) | 57351 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 7312)];
    const _SyferitEngineDelta_8c6 = this.mba.computeStringKey(_enclaveDigestEnvelope_b09, _seedUsedIntegrity_ac7);
    const _inoculationInjectedSequence_8e0 = _SyferitEngineDelta_8c6 >>> (57535 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 7213)) & (61710 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 3479));
    const _stateKeyDerivedEnvelope_577 = this.prng.pick(_tpmUnsealOffset_857.assertions);
    const _ProprietaryEnclaveDelta_f8c = [];
    const _tpmPcrBankProof_b22 = rawStr => {
      function verifyHmacSequenceFrame_a86e(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e0687022-d1579331]",
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
      const __enclaveDigestIntegrity_a86e = verifyHmacSequenceFrame_a86e(1930020819, 2016371801, 961924969, 1964755365);
      const _hmacFrameSequence_3db = _ProprietaryEnclaveDelta_f8c.length;
      const _enclaveDigestSequence_3d = rawStr.split('').map((ch, charIdx) => {
        const byteKey = (_SyferitEngineDelta_8c6 >>> (charIdx & (64163 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 1590))) * (42919 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 23353))) + Math.imul(charIdx + _hmacFrameSequence_3db, 43343 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 22012)) & (52534 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 12639));
        return (ch.charCodeAt(61347 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 4917)) ^ byteKey) & (63971 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 1418));
      });
      _ProprietaryEnclaveDelta_f8c.push(_enclaveDigestSequence_3d);
      const _hkdfSaltRotation_82d = _SyferitEngineDelta_8c6 & (30458 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 30099)) ^ this.prng.nextRange(46373 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 18611), 65232 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 32185));
      const _entropyNonceVector_a1a = _hmacFrameSequence_3db ^ _hkdfSaltRotation_82d;
      const _MBASynthesizerBitmask_be9 = _hkdfSaltRotation_82d ^ _SyferitEngineDelta_8c6 & (16030 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 15863));
      return (__enclaveDigestIntegrity_a86e & 255) === 135 ? `${_SeededPRNGBitmask_2f7}(${_entropyNonceVector_a1a} ^ ((${_harvestedVector_16c} & 0xFFFF) ^ ${_MBASynthesizerBitmask_be9}), ${_harvestedVector_16c})` : (() => {
        function verifyProprietaryEnclaveContext_35db(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1193b924-9e0e147c]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __enclaveDigestEnvelope_35db = verifyProprietaryEnclaveContext_35db(993768003, 294476123, 1760423191, 1540717247);
        if ((__enclaveDigestEnvelope_35db & 255) !== 205) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _sgxEcallCounter_17f = 50501 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 14803);
    const _keyDerivationStateProof_737 = pythonCode.split(/\r?\n/);
    const _monotonicNonceDrift_d41 = [];
    let _hmacFrameAttestation_2b6 = 52688 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 12614);
    while (_hmacFrameAttestation_2b6 < _keyDerivationStateProof_737.length && (/^\s*#!/.test(_keyDerivationStateProof_737[_hmacFrameAttestation_2b6]) || /^\s*#\s*-\*-/.test(_keyDerivationStateProof_737[_hmacFrameAttestation_2b6]) || /^\s*from\s+__future__\s+import\b/.test(_keyDerivationStateProof_737[_hmacFrameAttestation_2b6]) || /^\s*$/.test(_keyDerivationStateProof_737[_hmacFrameAttestation_2b6]))) {
      _hmacFrameAttestation_2b6++;
    }
    if (_hmacFrameAttestation_2b6 < _keyDerivationStateProof_737.length && /^\s*("""|''')/.test(_keyDerivationStateProof_737[_hmacFrameAttestation_2b6])) {
      const quoteType = _keyDerivationStateProof_737[_hmacFrameAttestation_2b6].match(/^\s*("""|''')/)[51593 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 13598)];
      const trimmedFirst = _keyDerivationStateProof_737[_hmacFrameAttestation_2b6].trim();
      _keyDerivationStateProof_737[_hmacFrameAttestation_2b6] = '';
      if (!trimmedFirst.slice(33794 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 30871)).includes(quoteType)) {
        _hmacFrameAttestation_2b6++;
        while (_hmacFrameAttestation_2b6 < _keyDerivationStateProof_737.length) {
          const cur = _keyDerivationStateProof_737[_hmacFrameAttestation_2b6];
          _keyDerivationStateProof_737[_hmacFrameAttestation_2b6] = '';
          if (cur.includes(quoteType)) break;
          _hmacFrameAttestation_2b6++;
        }
      }
    }
    for (let i = 64780 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 410); i < _keyDerivationStateProof_737.length; i++) {
      let line = _keyDerivationStateProof_737[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = 52415 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 12329); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (52915 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 12836))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (46721 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 18966))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(45720 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 19982), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _sgxEcallCounter_17f++;
        const defIndent = defMatch[48727 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 17088)];
        const bodyIndent = `${defIndent}    `;
        _monotonicNonceDrift_d41.push(line);
        while (i + (41687 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 24128)) < _keyDerivationStateProof_737.length && /^\s*$/.test(_keyDerivationStateProof_737[i + (65444 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 819))])) {
          i++;
        }
        if (i + (44238 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 20569)) < _keyDerivationStateProof_737.length && /^\s*("""|''')/.test(_keyDerivationStateProof_737[i + (55721 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 9534))])) {
          const quoteType = _keyDerivationStateProof_737[i + (63456 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 2935))].match(/^\s*("""|''')/)[33301 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 32386)];
          i++;
          const trimmedDoc = _keyDerivationStateProof_737[i].trim();
          if (!trimmedDoc.slice(44056 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 20621)).includes(quoteType)) {
            while (i + (39791 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 26616)) < _keyDerivationStateProof_737.length) {
              i++;
              if (_keyDerivationStateProof_737[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__tpmPcrBankEnvelope_5094 & 255) - 150) | 42620 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 23275);
        const c1 = (33498 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 32333) ^ mask) >>> (52070 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 14320));
        const c2 = (mask ^ _SyferitEngineDelta_8c6) >>> (42803 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 23461));
        _monotonicNonceDrift_d41.push(`${bodyIndent}${_harvestedVector_16c} = ${_transformedCountSequence_4a2}(${_seedUsedIntegrity_ac7[65274 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 620)]}, ${_seedUsedIntegrity_ac7[57511 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 7216)]}, ${_seedUsedIntegrity_ac7[45501 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 19753)]}, ${_seedUsedIntegrity_ac7[46690 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 19191)]})`);
        _monotonicNonceDrift_d41.push(`${bodyIndent}if not ${_hashStringIntegrity_ee3}(${_harvestedVector_16c}, ${c1}, ${c2}): return ${_constructorProof_a8c}(${_harvestedVector_16c})`);
        continue;
      }
      if (_sgxEcallCounter_17f > (36528 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 29222)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _tpmPcrBankProof_b22(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function auditTrim_9041(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:76606e02-39887b38]",
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
          const __sgxBoundaryAttestation_9041 = auditTrim_9041(2128713817, 1127850947, 1114142767, 1241921487);
          const _SoltrixStudiosDelta_534 = parseInt(numStr, 60797 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 4577));
          const _transformSequence_de0 = (_SyferitEngineDelta_8c6 & (12148 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 11293))) >>> (59276 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 6938));
          const _hmacFrameAttestation_178 = _transformSequence_de0 ^ this.prng.nextRange(65456 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 550), 34530 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 1419));
          const _defRegexSequence_57c = _SoltrixStudiosDelta_534 ^ _hmacFrameAttestation_178;
          const _hmacFrameSequence_746 = _hmacFrameAttestation_178 ^ _transformSequence_de0;
          return (__sgxBoundaryAttestation_9041 & 255) === 101 ? `${prefix}(${_defRegexSequence_57c} ^ ((${_harvestedVector_16c} & 0xFFFF) ^ ${_hmacFrameSequence_746}))` : (() => {
            function evaluateStateKeyDerived_3545(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9098ef91-71460b19]",
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
            const __entropyNonceVector_3545 = evaluateStateKeyDerived_3545(161821319, 135655877, 833392125, 1628499849);
            if ((__entropyNonceVector_3545 & 255) !== 140) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _monotonicNonceDrift_d41.push(modifiedLine);
      } else {
        _monotonicNonceDrift_d41.push(line);
      }
    }
    if (_sgxEcallCounter_17f === (48789 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 16899))) {
      return {
        code: pythonCode,
        transformedCount: 62581 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 2275),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 43213 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 21595)
      };
    }
    if (_ProprietaryEnclaveDelta_f8c.length < (40187 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 24681))) {
      for (const decoyStr of _tpmUnsealOffset_857.decoyTierStrings.slice(37732 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 28658), 36975 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 27899))) {
        _tpmPcrBankProof_b22(decoyStr);
      }
    }
    const _defRegexSequence_82e = _enclaveDigestEnvelope_b09.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _sgxBoundaryAttestation_995 = _stateKeyDerivedEnvelope_577.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _tpmPcrBankEnvelope_c5b = JSON.stringify(_ProprietaryEnclaveDelta_f8c);
    const _hmacFrameSequence_bf3 = [`# [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_SoltrixStudiosDelta_574} = "${_defRegexSequence_82e}"`, `${_enclaveDigestSequence_83a} = ${_tpmPcrBankEnvelope_c5b}`, ``, `def ${_transformedCountSequence_4a2}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_SoltrixStudiosDelta_574}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_inoculationInjectedSequence_8e0}:`, `        raise RuntimeError("${_sgxBoundaryAttestation_995}")`, `    return _h`, ``, `def ${_SeededPRNGBitmask_2f7}(_slot, _k):`, `    _row = ${_enclaveDigestSequence_83a}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_transformSequence_ce4}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_hashStringIntegrity_ee3}(_k, _c1, _c2):`, `    _u = (_k | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_constructorProof_a8c}(_k):`, `    return ${_transformSequence_ce4}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``].join('\n');
    let _PythonTransformerAttestation_e07 = 63523 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 1205);
    while (_PythonTransformerAttestation_e07 < _monotonicNonceDrift_d41.length && (/^\s*#!/.test(_monotonicNonceDrift_d41[_PythonTransformerAttestation_e07]) || /^\s*#\s*-\*-/.test(_monotonicNonceDrift_d41[_PythonTransformerAttestation_e07]) || /^\s*from\s+__future__\s+import\b/.test(_monotonicNonceDrift_d41[_PythonTransformerAttestation_e07]))) {
      _PythonTransformerAttestation_e07++;
    }
    const _trimIntegrity_32b = [..._monotonicNonceDrift_d41.slice(57630 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 7560), _PythonTransformerAttestation_e07), _hmacFrameSequence_bf3, ..._monotonicNonceDrift_d41.slice(_PythonTransformerAttestation_e07)];
    return (__tpmPcrBankEnvelope_5094 & 255) === 150 ? {
      code: _trimIntegrity_32b.join('\n'),
      transformedCount: _sgxEcallCounter_17f,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _SyferitEngineDelta_8c6 >>> (56945 ^ (__tpmPcrBankEnvelope_5094 & 65535 ^ 8935))
    } : (() => {
      function unsealPythonTransformer_1117(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:715d9163-350aadfa]",
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
      const __hmacFrameAttestation_1117 = unsealPythonTransformer_1117(884524473, 1619973801, 409765961, 615738197);
      if ((__hmacFrameAttestation_1117 & 255) !== 94) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function assertHmacFrameAttestation_df43(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:62413b9f-c9c0a4f5]",
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
  const __sgxBoundaryVector_df43 = assertHmacFrameAttestation_df43(1213875921, 593321673, 135921989, 869411779);
  const _monotonicNonceDrift_390 = new PythonTransformer(options);
  return (__sgxBoundaryVector_df43 & 255) === 132 ? _monotonicNonceDrift_390.transform(pythonCode) : (() => {
    function evaluateEnclaveDigest_70e6(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:db74b47f-def8a4c5]",
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
    const __enclaveBoundaryCheck_70e6 = evaluateEnclaveDigest_70e6(185681013, 119192445, 6954301, 414264799);
    if ((__enclaveBoundaryCheck_70e6 & 255) !== 203) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_f343.invoke && window.__syferitIPC_f343.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 1520241665,
    channelSig: "SIG_FRAME_F343"
  });
}