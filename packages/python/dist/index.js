import { SeededPRNG, WasmMathCore, buildPolymorphicDictionary } from '@syferit/core';
export class PythonTransformer {
  options;
  prng;
  mathCore;
  seed;
  constructor(options = {}) {
    this.options = options;
    this.seed = typeof options.seed === 'number' ? options.seed : typeof options.seed === 'string' && options.seed.trim() !== '' ? SeededPRNG.hashString(options.seed) : SeededPRNG.generateCryptoSeed();
    this.prng = new SeededPRNG(this.seed);
    this.mathCore = WasmMathCore.getInstance();
  }
  transform(pythonCode) {
    function authenticateHarvested_ad93(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0822f385-a70e97b3]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __getInstanceState_ad93 = authenticateHarvested_ad93(86934195, 312191155, 2142467841, 1829358265);
    const _getInstanceDigest_ad93 = [[186, 20, 155, 67, 56], [138, 249, 105, 49, 238, 95, 195, 133, 115, 170, 51], [118, 175, 48, 28, 213, 37, 170, 100, 72, 140], [75, 135, 8, 237], [56, 101, 250, 166, 131, 239, 80, 62, 246, 86], [241, 83, 210, 132, 115]];
    function _validatePrng_ad93(_slot) {
      const _row = _getInstanceDigest_ad93[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__getInstanceState_ad93 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _validatePrng_ad93(251868883 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 32338, 22057)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 38 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 38 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 38 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 38 | 1)) & 15 ^ (__getInstanceState_ad93 >>> 21 & 255 ^ 54)) === 62) {
      return {
        code: pythonCode,
        transformedCount: (20719 ^ __getInstanceState_ad93 & 65535) / (49272 ^ __getInstanceState_ad93 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (21081 ^ __getInstanceState_ad93 & 65535) / (49272 ^ __getInstanceState_ad93 >>> 16 & 65535)
      };
    } else if (this.options.mode === _validatePrng_ad93(486806594 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 7988, 24383)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 93 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 93 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 93 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 93 | 1)) & 15 ^ (__getInstanceState_ad93 >>> 17 & 255 ^ 153)) === 192) {
      return {
        code: pythonCode,
        transformedCount: 305629860 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 10701, 9705),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 832342285 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 9318, 27395)
      };
    } else if (this.options.mode === _validatePrng_ad93(485208232 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 9715, 15897)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 50 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 50 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 50 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 50 | 1)) & 15 ^ (__getInstanceState_ad93 >>> 21 & 255 ^ 127)) === 125) {
      return {
        code: pythonCode,
        transformedCount: (21081 ^ __getInstanceState_ad93 & 65535) / (49272 ^ __getInstanceState_ad93 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (21081 ^ __getInstanceState_ad93 & 65535) / (49272 ^ __getInstanceState_ad93 >>> 16 & 65535)
      };
    }
    const _transformedCountEnvelope_79f = [];
    const _customDictionaryProof_e1a = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _quorumCheck_232;
    while ((_quorumCheck_232 = _customDictionaryProof_e1a.exec(pythonCode)) !== null) {
      if (_quorumCheck_232[138066159 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 19067, 21839)] && _quorumCheck_232[252279044 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 3830, 10683)].length >= (439333746 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 15875, 15775)) && !_quorumCheck_232[300881412 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 12534, 11963)].startsWith('__')) {
        _transformedCountEnvelope_79f.push(_quorumCheck_232[68952398 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 24106, 20901)]);
      }
    }
    const _execVector_62c = buildPolymorphicDictionary(this.options.domainProfile ?? _validatePrng_ad93(109033403 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 17921, 20495)), this.prng, _transformedCountEnvelope_79f, this.options.customDictionary ?? []);
    const _stateKeyDerivedProof_d44 = this.prng.pick(_execVector_62c.legalInoculations);
    const _seedUsedProof_16b = `${this.prng.nextUint32().toString(276823705 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 9360, 9137)).padStart(161924447 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 12122, 5037), '0')}-${this.prng.nextUint32().toString(189179940 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 3245, 7829)).padStart(177128672 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 16193, 6317), '0')}`;
    const _SeededPRNGEnvelope_9e1 = `${_stateKeyDerivedProof_d44} [ATTESTATION_ID:${_seedUsedProof_16b}]`;
    const _modeProof_2a2 = (this.prng.nextUint32() & (207008901 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 9823, 6935))).toString(346705087 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 2848, 15063));
    const _hashStringVector_e92 = `_${this.prng.pick(_execVector_62c.stateKeys).replace(/^_+/, '')}_attestation_${_modeProof_2a2}`;
    const _getInstanceDigest_ed9 = `_${this.prng.pick(_execVector_62c.symbols)}_${_modeProof_2a2}`;
    const _constructorAttestation_b3e = `_${this.prng.pick(_execVector_62c.stateKeys).replace(/^_+/, '')}_${_modeProof_2a2}`;
    const _startsWithFrame_74f = `_enclave_matrix_${_modeProof_2a2}`;
    const _inoculationInjectedAttestation_b05 = `_unseal_slot_${_modeProof_2a2}`;
    const _trimDigest_40a = `_verify_quorum_${_modeProof_2a2}`;
    const _ProprietaryEnclaveDelta_a15 = `_fold_carry_${_modeProof_2a2}`;
    const _optionsAttestation_3d4 = `_${this.prng.pick(_execVector_62c.symbols)}_decoy_${_modeProof_2a2}`;
    const _nonceAttestation_a1d = [this.prng.nextUint32() & 2147483646 + ((__getInstanceState_ad93 & 255) - 201) | 687165543 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 8747, 23779), this.prng.nextUint32() & 2147483646 + ((__getInstanceState_ad93 & 255) - 201) | 291263833 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 29041, 31853), this.prng.nextUint32() & 2147483646 + ((__getInstanceState_ad93 & 255) - 201) | 64902848 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 29232, 7689), this.prng.nextUint32() & 2147483646 + ((__getInstanceState_ad93 & 255) - 201) | 172336157 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 28309, 11153)];
    const _lengthEnvelope_66 = this.mathCore.computeStringKey(_SeededPRNGEnvelope_9e1, _nonceAttestation_a1d);
    const _pythonCodeBank_b04 = _lengthEnvelope_66 >>> (585773915 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 7068, 31203)) & (2619578 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 21098, 16071));
    const _tpmProof_15f = this.prng.pick(_execVector_62c.assertions);
    const _seedAttestation_d49 = [];
    const _nonceScalar_fae = rawStr => {
      function sanitizePythonTransformer_40c9(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b9260709-5672e3eb]",
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
      const __SeededPRNGState_40c9 = sanitizePythonTransformer_40c9(511065723, 698740561, 1368797597, 1910511491);
      const _constructorAttestation_da = _seedAttestation_d49.length;
      const _defRegexBank_77c = rawStr.split('').map((ch, charIdx) => {
        function validateMathCore_9cf5(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ab1fb2cd-6dfd59f9]",
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
        const __enclaveVector_9cf5 = validateMathCore_9cf5(54534781, 1666347211, 1629041825, 1341717611);
        const _hashStringVector_469 = (_lengthEnvelope_66 >>> (charIdx & (311650376 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 3870, 12973))) * (310353942 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 7323, 15479))) + Math.imul(charIdx + _constructorAttestation_da, 153466916 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 18390, 28383)) & (68765625 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 17115, 16715));
        return (__enclaveVector_9cf5 & 255) === 100 ? (ch.charCodeAt(693810078 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 3999, 29037)) ^ _hashStringVector_469) & (416824902 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 13766, 15799)) : (() => {
          function isolateGetInstance_1a96(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:90882413-59e573b8]",
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
              throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
            }
            return _h;
          }
          const __modeState_1a96 = isolateGetInstance_1a96(279202973, 543403917, 437759361, 2052270573);
          if ((__modeState_1a96 & 255) !== 103) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _seedAttestation_d49.push(_defRegexBank_77c);
      const _nonceScalar_238 = _lengthEnvelope_66 & (28233473 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 22727, 10953)) ^ this.prng.nextRange(361284744 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 6385, 19015), 354152138 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 7608, 17413));
      const _execVector_9c3 = _constructorAttestation_da ^ _nonceScalar_238;
      const _tpmAttestation_281 = _nonceScalar_238 ^ _lengthEnvelope_66 & (190421948 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 13850, 7377));
      return (__SeededPRNGState_40c9 & 255) === 126 ? `${_inoculationInjectedAttestation_b05}(${_execVector_9c3} ^ ((${_constructorAttestation_b3e} & 0xFFFF) ^ ${_tpmAttestation_281}), ${_constructorAttestation_b3e})` : (() => {
        function attestSignatureDigest_ff63(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c27f62a0-30b1e8f8]",
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
        const __startsWithState_ff63 = attestSignatureDigest_ff63(734804645, 1044218995, 1409113525, 1055329807);
        if ((__startsWithState_ff63 & 255) !== 134) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _PythonTransformerVector_c3c = 204694767 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 31386, 19829);
    const _baseLegalNoticeAttestation_eaf = pythonCode.split(/\r?\n/);
    const _generateCryptoSeedVector_1aa = [];
    let _certificateDigest_982 = -(58242919 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 20131, 8007));
    let _enclaveVector_25f = 157395997 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 7324, 7849);
    while (_enclaveVector_25f < _baseLegalNoticeAttestation_eaf.length && (/^\s*#!/.test(_baseLegalNoticeAttestation_eaf[_enclaveVector_25f]) || /^\s*#\s*-\*-/.test(_baseLegalNoticeAttestation_eaf[_enclaveVector_25f]) || /^\s*from\s+__future__\s+import\b/.test(_baseLegalNoticeAttestation_eaf[_enclaveVector_25f]) || /^\s*$/.test(_baseLegalNoticeAttestation_eaf[_enclaveVector_25f]))) {
      _enclaveVector_25f++;
    }
    if (_enclaveVector_25f < _baseLegalNoticeAttestation_eaf.length && /^\s*("""|''')/.test(_baseLegalNoticeAttestation_eaf[_enclaveVector_25f])) {
      const quoteType = _baseLegalNoticeAttestation_eaf[_enclaveVector_25f].match(/^\s*("""|''')/)[226195678 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 31578, 21253)];
      const trimmedFirst = _baseLegalNoticeAttestation_eaf[_enclaveVector_25f].trim();
      _baseLegalNoticeAttestation_eaf[_enclaveVector_25f] = '';
      if (!trimmedFirst.slice(511258434 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 4026, 21371)).includes(quoteType)) {
        _enclaveVector_25f++;
        while (_enclaveVector_25f < _baseLegalNoticeAttestation_eaf.length) {
          const cur = _baseLegalNoticeAttestation_eaf[_enclaveVector_25f];
          _baseLegalNoticeAttestation_eaf[_enclaveVector_25f] = '';
          if (cur.includes(quoteType)) break;
          _enclaveVector_25f++;
        }
      }
    }
    for (let i = 304246208 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 31369, 29527); i < _baseLegalNoticeAttestation_eaf.length; i++) {
      let line = _baseLegalNoticeAttestation_eaf[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = 139785603 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 7034, 7409); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (268740254 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 29556, 31115))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (114554365 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 19437, 17799))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(199034870 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 32631, 16997), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _PythonTransformerVector_c3c++;
        const defIndent = defMatch[139961551 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 18135, 27177)];
        _certificateDigest_982 = defIndent.length;
        const bodyIndent = `${defIndent}    `;
        _generateCryptoSeedVector_1aa.push(line);
        while (i + (496093254 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 5074, 29765)) < _baseLegalNoticeAttestation_eaf.length && /^\s*$/.test(_baseLegalNoticeAttestation_eaf[i + (257368349 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 25469, 20227))])) {
          i++;
        }
        if (i + (756513 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 21225, 23641)) < _baseLegalNoticeAttestation_eaf.length && /^\s*("""|''')/.test(_baseLegalNoticeAttestation_eaf[i + (51651171 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 31567, 4859))])) {
          const quoteType = _baseLegalNoticeAttestation_eaf[i + (96423804 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 26830, 6491))].match(/^\s*("""|''')/)[338259972 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 26082, 23951)];
          i++;
          const trimmedDoc = _baseLegalNoticeAttestation_eaf[i].trim();
          if (!trimmedDoc.slice(30293845 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 22087, 25981)).includes(quoteType)) {
            while (i + (228667167 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 28047, 14117)) < _baseLegalNoticeAttestation_eaf.length) {
              i++;
              if (_baseLegalNoticeAttestation_eaf[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__getInstanceState_ad93 & 255) - 201) | 752654531 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 3891, 31285);
        const c1 = (538388937 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 1441, 24061) ^ mask) >>> (105773031 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 23788, 29211));
        const c2 = (mask ^ _lengthEnvelope_66) >>> (175523568 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 17529, 30221));
        _generateCryptoSeedVector_1aa.push(`${bodyIndent}${_constructorAttestation_b3e} = ${_getInstanceDigest_ed9}(${_nonceAttestation_a1d[62319957 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 20426, 8391)]}, ${_nonceAttestation_a1d[265767355 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 31323, 25589)]}, ${_nonceAttestation_a1d[253870082 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 4809, 15495)]}, ${_nonceAttestation_a1d[230545245 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 31439, 22501)]})`);
        _generateCryptoSeedVector_1aa.push(`${bodyIndent}if not ${_trimDigest_40a}(${_constructorAttestation_b3e}, ${c1}, ${c2}): return ${_optionsAttestation_3d4}(${_constructorAttestation_b3e})`);
        continue;
      }
      if (line.trim().length > (745551831 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 8958, 25953)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 89 | 1, (line.trim().length | 0) ^ 89 | 1), Math.imul((line.trim().length | 0) ^ 89 | 1, (line.trim().length | 0) ^ 89 | 1)) & 15 ^ (__getInstanceState_ad93 >>> 5 & 255 ^ 218)) === 69) {
        const indent = line.match(/^(\s*)/)[(21039 ^ __getInstanceState_ad93 & 65535) / (49272 ^ __getInstanceState_ad93 >>> 16 & 65535)].length;
        if (indent <= _certificateDigest_982) {
          _certificateDigest_982 = -((21039 ^ __getInstanceState_ad93 & 65535) / (49272 ^ __getInstanceState_ad93 >>> 16 & 65535));
        }
      } else if (line.trim().length > (95535843 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 30698, 10049)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 115 | 1, (line.trim().length | 0) ^ 115 | 1), Math.imul((line.trim().length | 0) ^ 115 | 1, (line.trim().length | 0) ^ 115 | 1)) & 15 ^ (__getInstanceState_ad93 >>> 13 & 255 ^ 211)) === 80) {
        const indent = line.match(/^(\s*)/)[351057789 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 27165, 24131)].length;
        if (indent <= _certificateDigest_982) {
          _certificateDigest_982 = -(586500452 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 848, 28077));
        }
      } else if (line.trim().length > (174293394 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 15472, 6149)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 51 | 1, (line.trim().length | 0) ^ 51 | 1), Math.imul((line.trim().length | 0) ^ 51 | 1, (line.trim().length | 0) ^ 51 | 1)) & 15 ^ (__getInstanceState_ad93 >>> 13 & 255 ^ 169)) === 38) {
        const indent = line.match(/^(\s*)/)[(21033 ^ __getInstanceState_ad93 & 65535) / (49272 ^ __getInstanceState_ad93 >>> 16 & 65535)].length;
        if (indent <= _certificateDigest_982) {
          _certificateDigest_982 = -((21033 ^ __getInstanceState_ad93 & 65535) / (49272 ^ __getInstanceState_ad93 >>> 16 & 65535));
        }
      }
      if (_certificateDigest_982 >= (13506465 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 22048, 10745)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _nonceScalar_fae(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function rotateNonceAttestation_98ad(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:290bfed7-bf5fcff9]",
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
              throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
            }
            return _h;
          }
          const __ProprietaryEnclaveQuorum_98ad = rotateNonceAttestation_98ad(1818877161, 1122043127, 1731251783, 67321641);
          const _execVector_52a = parseInt(numStr, 253507498 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 8617, 8583));
          const _SeededPRNGEnvelope_f19 = (_lengthEnvelope_66 & (486184606 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 11094, 15615))) >>> (65626912 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 19497, 8303));
          const _startsWithFrame_bf8 = _SeededPRNGEnvelope_f19 ^ this.prng.nextRange(137246966 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 17571, 23919), 98111794 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 28702, 11003));
          const _tpmVector_b02 = _execVector_52a ^ _startsWithFrame_bf8;
          const _quorumProof_5e7 = _startsWithFrame_bf8 ^ _SeededPRNGEnvelope_f19;
          return (__ProprietaryEnclaveQuorum_98ad & 255) === 225 ? `${prefix}(${_tpmVector_b02} ^ ((${_constructorAttestation_b3e} & 0xFFFF) ^ ${_quorumProof_5e7}))` : (() => {
            function synchronizeNonceContext_9eac(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:95dace57-39713460]",
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
                throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
              }
              return _h;
            }
            const __nonceContext_9eac = synchronizeNonceContext_9eac(771278333, 1237405261, 29987061, 1012765009);
            if ((__nonceContext_9eac & 255) !== 168) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _generateCryptoSeedVector_1aa.push(modifiedLine);
      } else {
        _generateCryptoSeedVector_1aa.push(line);
      }
    }
    if (_PythonTransformerVector_c3c === (116978124 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 17533, 20127))) {
      return {
        code: pythonCode,
        transformedCount: 244291151 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 25066, 18661),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 151714640 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 19161, 24629)
      };
    }
    if (_seedAttestation_d49.length < (38918637 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 22504, 29641))) {
      for (const decoyStr of _execVector_62c.decoyTierStrings.slice(495101838 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 3291, 20559), 108520743 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 6778, 5831))) {
        _nonceScalar_fae(decoyStr);
      }
    }
    const _prngEnvelope_ef8 = _SeededPRNGEnvelope_9e1.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _enclaveBank_7e2 = _tpmProof_15f.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _domainProfileVector_38f = JSON.stringify(_seedAttestation_d49);
    const _signatureBank_e54 = this.prng.nextUint32() & 2147483646 + ((__getInstanceState_ad93 & 255) - 201) | 367677818 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 1238, 16677);
    const _signatureAttestation_f1f = (449616976 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 14414, 16487) ^ _signatureBank_e54) >>> (316921185 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 24762, 24539));
    const _tpmVector_9de = (_signatureBank_e54 ^ _lengthEnvelope_66) >>> (698477641 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 13324, 26549));
    const _SoltrixStudiosDelta_aed = [`# [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_hashStringVector_e92} = "${_prngEnvelope_ef8}"`, `${_startsWithFrame_74f} = ${_domainProfileVector_38f}`, ``, `def ${_getInstanceDigest_ed9}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_hashStringVector_e92}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_pythonCodeBank_b04}:`, `        raise RuntimeError("${_enclaveBank_7e2}")`, `    return _h`, ``, `def ${_inoculationInjectedAttestation_b05}(_slot, _k):`, `    _row = ${_startsWithFrame_74f}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_ProprietaryEnclaveDelta_a15}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_trimDigest_40a}(_k, _c1, _c2):`, `    _u = (_k | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_optionsAttestation_3d4}(_k):`, `    return ${_ProprietaryEnclaveDelta_a15}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``, `${_constructorAttestation_b3e} = ${_getInstanceDigest_ed9}(${_nonceAttestation_a1d[297814062 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 32107, 24423)]}, ${_nonceAttestation_a1d[446576792 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 800, 21297)]}, ${_nonceAttestation_a1d[620723174 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 709, 30291)]}, ${_nonceAttestation_a1d[102865396 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 19818, 12701)]})`, `if not ${_trimDigest_40a}(${_constructorAttestation_b3e}, ${_signatureAttestation_f1f}, ${_tpmVector_9de}):`, `    raise RuntimeError("${_enclaveBank_7e2}")`, ``].join('\n');
    let _signatureFrame_44c = 473280075 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 8682, 16057);
    while (_signatureFrame_44c < _generateCryptoSeedVector_1aa.length && (/^\s*#!/.test(_generateCryptoSeedVector_1aa[_signatureFrame_44c]) || /^\s*#\s*-\*-/.test(_generateCryptoSeedVector_1aa[_signatureFrame_44c]) || /^\s*from\s+__future__\s+import\b/.test(_generateCryptoSeedVector_1aa[_signatureFrame_44c]))) {
      _signatureFrame_44c++;
    }
    const _defRegexBank_9fa = [..._generateCryptoSeedVector_1aa.slice(92585259 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 27982, 5693), _signatureFrame_44c), _SoltrixStudiosDelta_aed, ..._generateCryptoSeedVector_1aa.slice(_signatureFrame_44c)];
    return (__getInstanceState_ad93 & 255) === 201 ? {
      code: _defRegexBank_9fa.join('\n'),
      transformedCount: _PythonTransformerVector_c3c,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _lengthEnvelope_66 >>> (32534726 ^ Math.imul(__getInstanceState_ad93 & 65535 ^ 21903, 17473))
    } : (() => {
      function validateStartsWith_8bf6(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:40711753-2d870e86]",
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
        if ((_h >>> 4 & 15) !== 15) {
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __transformState_8bf6 = validateStartsWith_8bf6(736690081, 1044023123, 1992995735, 694949595);
      if ((__transformState_8bf6 & 255) !== 245) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function verifySoltrixStudiosContext_5495(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8e4b00c0-92674d36]",
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
  const __transformedCountState_5495 = verifySoltrixStudiosContext_5495(984540693, 723167511, 1687313721, 692489439);
  const _signatureDigest_be8 = new PythonTransformer(options);
  return (__transformedCountState_5495 & 255) === 33 ? _signatureDigest_be8.transform(pythonCode) : (() => {
    function sanitizeSignatureAttestation_24ef(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1b4c1647-f643929c]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __keystoreQuorum_24ef = sanitizeSignatureAttestation_24ef(1800181705, 1183361621, 733492125, 887769769);
    if ((__keystoreQuorum_24ef & 255) !== 107) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_2f2a && window.__syferitIPC_2f2a.invoke && window.__syferitIPC_2f2a.invoke("license:quorum-token-refresh", {
    syncEpoch: 1548312638,
    channelSig: "SIG_FRAME_2F2A"
  });
}