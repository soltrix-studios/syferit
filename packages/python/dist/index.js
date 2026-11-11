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
    function rotateLength_c984(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2ad0e5ad-df380db1]",
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
    const __nonceContext_c984 = rotateLength_c984(315785905, 1285822857, 292980061, 1626186843);
    const _execVector_c984 = [[220, 126, 39, 142, 63, 204, 191, 252, 132, 92, 45, 86, 9, 162], [128, 83, 25, 70, 20, 165, 115, 218, 105, 48, 227], [108, 53, 224, 45, 239, 159, 90, 181, 66, 230], [93, 225, 216, 30], [54, 203, 170, 247, 149, 73, 0, 79, 8, 168], [11, 169, 98, 219, 105]];
    function _isolateTokenAttestation_c984(_slot) {
      const _row = _execVector_c984[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceContext_c984 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _isolateTokenAttestation_c984(420016831 ^ Math.imul(__nonceContext_c984 & 65535 ^ 2482, 7163)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1)) & 15 ^ (__nonceContext_c984 >>> 3 & 255 ^ 176)) === 44) {
      return {
        code: pythonCode,
        transformedCount: (60877 ^ __nonceContext_c984 & 65535) / (36808 ^ __nonceContext_c984 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (61081 ^ __nonceContext_c984 & 65535) / (36808 ^ __nonceContext_c984 >>> 16 & 65535)
      };
    } else if (this.options.mode === _isolateTokenAttestation_c984(554780619 ^ Math.imul(__nonceContext_c984 & 65535 ^ 7937, 8891)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 118 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 118 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 118 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 118 | 1)) & 15 ^ (__nonceContext_c984 >>> 18 & 255 ^ 61)) === 252) {
      return {
        code: pythonCode,
        transformedCount: 1620252777 ^ Math.imul(__nonceContext_c984 & 65535 ^ 7948, 25971),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 1005109914 ^ Math.imul(__nonceContext_c984 & 65535 ^ 13881, 17967)
      };
    } else if (this.options.mode === _isolateTokenAttestation_c984(823308536 ^ Math.imul(__nonceContext_c984 & 65535 ^ 6681, 13039)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 115 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 115 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 115 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 115 | 1)) & 15 ^ (__nonceContext_c984 >>> 7 & 255 ^ 63)) === 233) {
      return {
        code: pythonCode,
        transformedCount: (60877 ^ __nonceContext_c984 & 65535) / (36808 ^ __nonceContext_c984 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (61081 ^ __nonceContext_c984 & 65535) / (36808 ^ __nonceContext_c984 >>> 16 & 65535)
      };
    }
    const _hashStringCheck_7af = [];
    const _tokenBank_b8d = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _ProprietaryEnclaveDelta_eda;
    while ((_ProprietaryEnclaveDelta_eda = _tokenBank_b8d.exec(pythonCode)) !== null) {
      if (_ProprietaryEnclaveDelta_eda[496291074 ^ Math.imul(__nonceContext_c984 & 65535 ^ 25782, 14251)] && _ProprietaryEnclaveDelta_eda[1876160516 ^ Math.imul(__nonceContext_c984 & 65535 ^ 6676, 29711)].length >= (799805119 ^ Math.imul(__nonceContext_c984 & 65535 ^ 12202, 16015)) && !_ProprietaryEnclaveDelta_eda[284946254 ^ Math.imul(__nonceContext_c984 & 65535 ^ 30882, 7515)].startsWith('__')) {
        _hashStringCheck_7af.push(_ProprietaryEnclaveDelta_eda[395168041 ^ Math.imul(__nonceContext_c984 & 65535 ^ 4391, 6087)]);
      }
    }
    const _startsWithAttestation_6f8 = buildPolymorphicDictionary(this.options.domainProfile ?? _isolateTokenAttestation_c984(1471760201 ^ Math.imul(__nonceContext_c984 & 65535 ^ 10025, 28239)), this.prng, _hashStringCheck_7af, this.options.customDictionary ?? []);
    const _lengthProof_be6 = this.prng.pick(_startsWithAttestation_6f8.legalInoculations);
    const _seedUsedAttestation_3fc = `${this.prng.nextUint32().toString(1562585708 ^ Math.imul(__nonceContext_c984 & 65535 ^ 12371, 27629)).padStart(319549090 ^ Math.imul(__nonceContext_c984 & 65535 ^ 27373, 9293), '0')}-${this.prng.nextUint32().toString(463463079 ^ Math.imul(__nonceContext_c984 & 65535 ^ 12248, 9265)).padStart(415564882 ^ Math.imul(__nonceContext_c984 & 65535 ^ 27897, 12655), '0')}`;
    const _getInstanceBank_d2b = `${_lengthProof_be6} [ATTESTATION_ID:${_seedUsedAttestation_3fc}]`;
    const _signatureProof_6f8 = (this.prng.nextUint32() & (439281597 ^ Math.imul(__nonceContext_c984 & 65535 ^ 4273, 6807))).toString(352071773 ^ Math.imul(__nonceContext_c984 & 65535 ^ 13652, 6311));
    const _signatureVector_457 = `_${this.prng.pick(_startsWithAttestation_6f8.stateKeys).replace(/^_+/, '')}_attestation_${_signatureProof_6f8}`;
    const _certificateBank_e5a = `_${this.prng.pick(_startsWithAttestation_6f8.symbols)}_${_signatureProof_6f8}`;
    const _transformedCountDigest_ace = `_${this.prng.pick(_startsWithAttestation_6f8.stateKeys).replace(/^_+/, '')}_${_signatureProof_6f8}`;
    const _tokenAttestation_db1 = `_enclave_matrix_${_signatureProof_6f8}`;
    const _certificateEnvelope_1a1 = `_unseal_slot_${_signatureProof_6f8}`;
    const _trimCheck_c0c = `_verify_quorum_${_signatureProof_6f8}`;
    const _signatureEnvelope_9ea = `_fold_carry_${_signatureProof_6f8}`;
    const _pythonCodeDigest_f1d = `_${this.prng.pick(_startsWithAttestation_6f8.symbols)}_decoy_${_signatureProof_6f8}`;
    const _codeCheck_f7d = [this.prng.nextUint32() & 2147483646 + ((__nonceContext_c984 & 255) - 191) | 1520012033 ^ Math.imul(__nonceContext_c984 & 65535 ^ 10175, 29249), this.prng.nextUint32() & 2147483646 + ((__nonceContext_c984 & 255) - 191) | 1798578771 ^ Math.imul(__nonceContext_c984 & 65535 ^ 14957, 32705), this.prng.nextUint32() & 2147483646 + ((__nonceContext_c984 & 255) - 191) | 863415704 ^ Math.imul(__nonceContext_c984 & 65535 ^ 25428, 23435), this.prng.nextUint32() & 2147483646 + ((__nonceContext_c984 & 255) - 191) | 464241986 ^ Math.imul(__nonceContext_c984 & 65535 ^ 6508, 7377)];
    const _PythonTransformerAttestation_1de = this.mathCore.computeStringKey(_getInstanceBank_d2b, _codeCheck_f7d);
    const _keystoreBank_403 = _PythonTransformerAttestation_1de >>> (1091480494 ^ Math.imul(__nonceContext_c984 & 65535 ^ 12141, 21773)) & (1386877816 ^ Math.imul(__nonceContext_c984 & 65535 ^ 17282, 30915));
    const _tpmVector_2b3 = this.prng.pick(_startsWithAttestation_6f8.assertions);
    const _transformVector_776 = [];
    const _dictCheck_dbf = rawStr => {
      function validateHashString_fdc(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b164dc11-504002e8]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __pushState_fdc = validateHashString_fdc(385135297, 907910105, 1728742797, 2025397663);
      const _prngDigest_8ab = _transformVector_776.length;
      const _SyferitEngineDelta_767 = rawStr.split('').map((ch, charIdx) => {
        function sanitizeKeystoreEnvelope_f0a7(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bf47bb32-e9295452]",
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
            throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
          }
          return _h;
        }
        const __SeededPRNGState_f0a7 = sanitizeKeystoreEnvelope_f0a7(1023789325, 1708320493, 1652016517, 140539527);
        const _certificateBank_a72 = (_PythonTransformerAttestation_1de >>> (charIdx & (472286069 ^ Math.imul(__nonceContext_c984 & 65535 ^ 5277, 7435))) * (535922684 ^ Math.imul(__nonceContext_c984 & 65535 ^ 8235, 10233))) + Math.imul(charIdx + _prngDigest_8ab, 1593489017 ^ Math.imul(__nonceContext_c984 & 65535 ^ 6875, 25263)) & (1785075173 ^ Math.imul(__nonceContext_c984 & 65535 ^ 2421, 30345));
        return (__SeededPRNGState_f0a7 & 255) === 213 ? (ch.charCodeAt(1045292631 ^ Math.imul(__nonceContext_c984 & 65535 ^ 21130, 21467)) ^ _certificateBank_a72) & (923502926 ^ Math.imul(__nonceContext_c984 & 65535 ^ 26810, 27325)) : (() => {
          function verifySignatureAttestation_9c56(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ed2c5c58-ee9a6344]",
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
              throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
            }
            return _h;
          }
          const __generateCryptoSeedState_9c56 = verifySignatureAttestation_9c56(1605959641, 140038951, 502793615, 1304680117);
          if ((__generateCryptoSeedState_9c56 & 255) !== 63) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _transformVector_776.push(_SyferitEngineDelta_767);
      const _nonceScalar_103 = _PythonTransformerAttestation_1de & (263486178 ^ Math.imul(__nonceContext_c984 & 65535 ^ 24990, 7293)) ^ this.prng.nextRange(580873466 ^ Math.imul(__nonceContext_c984 & 65535 ^ 17953, 13299), 1312830546 ^ Math.imul(__nonceContext_c984 & 65535 ^ 22430, 27405));
      const _tokenAttestation_ac6 = _prngDigest_8ab ^ _nonceScalar_103;
      const _getInstanceBank_e7a = _nonceScalar_103 ^ _PythonTransformerAttestation_1de & (355946123 ^ Math.imul(__nonceContext_c984 & 65535 ^ 16059, 6621));
      return (__pushState_fdc & 255) === 25 ? `${_certificateEnvelope_1a1}(${_tokenAttestation_ac6} ^ ((${_transformedCountDigest_ace} & 0xFFFF) ^ ${_getInstanceBank_e7a}), ${_transformedCountDigest_ace})` : (() => {
        function rotateLength_fca2(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0c01d3df-24a4d0ca]",
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
            throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
          }
          return _h;
        }
        const __signatureProof_fca2 = rotateLength_fca2(1261461469, 1670363005, 1087022019, 1291748179);
        if ((__signatureProof_fca2 & 255) !== 50) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _prngDigest_448 = 316254861 ^ Math.imul(__nonceContext_c984 & 65535 ^ 27468, 9087);
    const _seedBank_73f = pythonCode.split(/\r?\n/);
    const _SyferitEngineDelta_d17 = [];
    let _inoculationInjectedBank_f4a = -(1136734016 ^ Math.imul(__nonceContext_c984 & 65535 ^ 15822, 21201));
    let _stateKeyDerivedAttestation_d26 = 396119045 ^ Math.imul(__nonceContext_c984 & 65535 ^ 32176, 10667);
    while (_stateKeyDerivedAttestation_d26 < _seedBank_73f.length && (/^\s*#!/.test(_seedBank_73f[_stateKeyDerivedAttestation_d26]) || /^\s*#\s*-\*-/.test(_seedBank_73f[_stateKeyDerivedAttestation_d26]) || /^\s*from\s+__future__\s+import\b/.test(_seedBank_73f[_stateKeyDerivedAttestation_d26]) || /^\s*$/.test(_seedBank_73f[_stateKeyDerivedAttestation_d26]))) {
      _stateKeyDerivedAttestation_d26++;
    }
    if (_stateKeyDerivedAttestation_d26 < _seedBank_73f.length && /^\s*("""|''')/.test(_seedBank_73f[_stateKeyDerivedAttestation_d26])) {
      const quoteType = _seedBank_73f[_stateKeyDerivedAttestation_d26].match(/^\s*("""|''')/)[1266714021 ^ Math.imul(__nonceContext_c984 & 65535 ^ 21395, 25883)];
      const trimmedFirst = _seedBank_73f[_stateKeyDerivedAttestation_d26].trim();
      _seedBank_73f[_stateKeyDerivedAttestation_d26] = '';
      if (!trimmedFirst.slice(1007403334 ^ Math.imul(__nonceContext_c984 & 65535 ^ 31452, 26167)).includes(quoteType)) {
        _stateKeyDerivedAttestation_d26++;
        while (_stateKeyDerivedAttestation_d26 < _seedBank_73f.length) {
          const cur = _seedBank_73f[_stateKeyDerivedAttestation_d26];
          _seedBank_73f[_stateKeyDerivedAttestation_d26] = '';
          if (cur.includes(quoteType)) break;
          _stateKeyDerivedAttestation_d26++;
        }
      }
    }
    for (let i = 1061450397 ^ Math.imul(__nonceContext_c984 & 65535 ^ 31592, 27307); i < _seedBank_73f.length; i++) {
      let line = _seedBank_73f[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = 274511100 ^ Math.imul(__nonceContext_c984 & 65535 ^ 20555, 5675); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (888385442 ^ Math.imul(__nonceContext_c984 & 65535 ^ 15048, 16181))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (478651479 ^ Math.imul(__nonceContext_c984 & 65535 ^ 29377, 11797))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(1425991973 ^ Math.imul(__nonceContext_c984 & 65535 ^ 18128, 32683), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _prngDigest_448++;
        const defIndent = defMatch[1299579535 ^ Math.imul(__nonceContext_c984 & 65535 ^ 12593, 22913)];
        _inoculationInjectedBank_f4a = defIndent.length;
        const bodyIndent = `${defIndent}    `;
        _SyferitEngineDelta_d17.push(line);
        while (i + (1469876443 ^ Math.imul(__nonceContext_c984 & 65535 ^ 7253, 23833)) < _seedBank_73f.length && /^\s*$/.test(_seedBank_73f[i + (1463851374 ^ Math.imul(__nonceContext_c984 & 65535 ^ 7698, 23563))])) {
          i++;
        }
        if (i + (934822400 ^ Math.imul(__nonceContext_c984 & 65535 ^ 31850, 25213)) < _seedBank_73f.length && /^\s*("""|''')/.test(_seedBank_73f[i + (643477600 ^ Math.imul(__nonceContext_c984 & 65535 ^ 21466, 13133))])) {
          const quoteType = _seedBank_73f[i + (1016705448 ^ Math.imul(__nonceContext_c984 & 65535 ^ 6834, 16141))].match(/^\s*("""|''')/)[309945195 ^ Math.imul(__nonceContext_c984 & 65535 ^ 13049, 5447)];
          i++;
          const trimmedDoc = _seedBank_73f[i].trim();
          if (!trimmedDoc.slice(927564037 ^ Math.imul(__nonceContext_c984 & 65535 ^ 27493, 26671)).includes(quoteType)) {
            while (i + (387681372 ^ Math.imul(__nonceContext_c984 & 65535 ^ 9040, 7283)) < _seedBank_73f.length) {
              i++;
              if (_seedBank_73f[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__nonceContext_c984 & 255) - 191) | 1244255203 ^ Math.imul(__nonceContext_c984 & 65535 ^ 23185, 26679);
        const c1 = (1789086511 ^ Math.imul(__nonceContext_c984 & 65535 ^ 625, 29265) ^ mask) >>> (974493615 ^ Math.imul(__nonceContext_c984 & 65535 ^ 21610, 20595));
        const c2 = (mask ^ _PythonTransformerAttestation_1de) >>> (307686204 ^ Math.imul(__nonceContext_c984 & 65535 ^ 24307, 6741));
        _SyferitEngineDelta_d17.push(`${bodyIndent}${_transformedCountDigest_ace} = ${_certificateBank_e5a}(${_codeCheck_f7d[568296768 ^ Math.imul(__nonceContext_c984 & 65535 ^ 19455, 13273)]}, ${_codeCheck_f7d[1550264059 ^ Math.imul(__nonceContext_c984 & 65535 ^ 1025, 26019)]}, ${_codeCheck_f7d[1557551072 ^ Math.imul(__nonceContext_c984 & 65535 ^ 1445, 26101)]}, ${_codeCheck_f7d[1140632993 ^ Math.imul(__nonceContext_c984 & 65535 ^ 16545, 25887)]})`);
        _SyferitEngineDelta_d17.push(`${bodyIndent}if not ${_trimCheck_c0c}(${_transformedCountDigest_ace}, ${c1}, ${c2}): return ${_pythonCodeDigest_f1d}(${_transformedCountDigest_ace})`);
        continue;
      }
      if (line.trim().length > (1604341065 ^ Math.imul(__nonceContext_c984 & 65535 ^ 3262, 27977)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 58 | 1, (line.trim().length | 0) ^ 58 | 1), Math.imul((line.trim().length | 0) ^ 58 | 1, (line.trim().length | 0) ^ 58 | 1)) & 15 ^ (__nonceContext_c984 >>> 4 & 255 ^ 143)) === 77) {
        const indent = line.match(/^(\s*)/)[(60505 ^ __nonceContext_c984 & 65535) / (36808 ^ __nonceContext_c984 >>> 16 & 65535)].length;
        if (indent <= _inoculationInjectedBank_f4a) {
          _inoculationInjectedBank_f4a = -((60505 ^ __nonceContext_c984 & 65535) / (36808 ^ __nonceContext_c984 >>> 16 & 65535));
        }
      } else if (line.trim().length > (407000412 ^ Math.imul(__nonceContext_c984 & 65535 ^ 16587, 9219)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 107 | 1, (line.trim().length | 0) ^ 107 | 1), Math.imul((line.trim().length | 0) ^ 107 | 1, (line.trim().length | 0) ^ 107 | 1)) & 15 ^ (__nonceContext_c984 >>> 2 & 255 ^ 201)) === 231) {
        const indent = line.match(/^(\s*)/)[264682881 ^ Math.imul(__nonceContext_c984 & 65535 ^ 3391, 4585)].length;
        if (indent <= _inoculationInjectedBank_f4a) {
          _inoculationInjectedBank_f4a = -(1647909803 ^ Math.imul(__nonceContext_c984 & 65535 ^ 1121, 27643));
        }
      } else if (line.trim().length > (385997386 ^ Math.imul(__nonceContext_c984 & 65535 ^ 19046, 9037)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 98 | 1, (line.trim().length | 0) ^ 98 | 1), Math.imul((line.trim().length | 0) ^ 98 | 1, (line.trim().length | 0) ^ 98 | 1)) & 15 ^ (__nonceContext_c984 >>> 1 & 255 ^ 105)) === 63) {
        const indent = line.match(/^(\s*)/)[(60511 ^ __nonceContext_c984 & 65535) / (36808 ^ __nonceContext_c984 >>> 16 & 65535)].length;
        if (indent <= _inoculationInjectedBank_f4a) {
          _inoculationInjectedBank_f4a = -((60511 ^ __nonceContext_c984 & 65535) / (36808 ^ __nonceContext_c984 >>> 16 & 65535));
        }
      }
      if (_inoculationInjectedBank_f4a >= (464952517 ^ Math.imul(__nonceContext_c984 & 65535 ^ 14074, 8321)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _dictCheck_dbf(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function normalizeQuorumVector_d3d8(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0bb81444-24009795]",
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
              throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
            }
            return _h;
          }
          const __signatureProof_d3d8 = normalizeQuorumVector_d3d8(1542227181, 501591765, 1180963127, 782137343);
          const _startsWithAttestation_df4 = parseInt(numStr, 883264573 ^ Math.imul(__nonceContext_c984 & 65535 ^ 32216, 23729));
          const _signatureVector_367 = (_PythonTransformerAttestation_1de & (410990727 ^ Math.imul(__nonceContext_c984 & 65535 ^ 24487, 8965))) >>> (1519308609 ^ Math.imul(__nonceContext_c984 & 65535 ^ 7296, 24703));
          const _certificateBank_3f = _signatureVector_367 ^ this.prng.nextRange(361216401 ^ Math.imul(__nonceContext_c984 & 65535 ^ 13398, 6505), 1247852118 ^ Math.imul(__nonceContext_c984 & 65535 ^ 30716, 31395));
          const _trimCheck_71f = _startsWithAttestation_df4 ^ _certificateBank_3f;
          const _certificateEnvelope_605 = _certificateBank_3f ^ _signatureVector_367;
          return (__signatureProof_d3d8 & 255) === 89 ? `${prefix}(${_trimCheck_71f} ^ ((${_transformedCountDigest_ace} & 0xFFFF) ^ ${_certificateEnvelope_605}))` : (() => {
            function auditCode_18e(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e562f6cb-de82c3d6]",
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
            const __execState_18e = auditCode_18e(945337271, 958951873, 2123034389, 1562445825);
            if ((__execState_18e & 255) !== 108) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _SyferitEngineDelta_d17.push(modifiedLine);
      } else {
        _SyferitEngineDelta_d17.push(line);
      }
    }
    if (_prngDigest_448 === (618921210 ^ Math.imul(__nonceContext_c984 & 65535 ^ 10081, 11859))) {
      return {
        code: pythonCode,
        transformedCount: 1113631420 ^ Math.imul(__nonceContext_c984 & 65535 ^ 17059, 24985),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 818509344 ^ Math.imul(__nonceContext_c984 & 65535 ^ 21471, 16707)
      };
    }
    if (_transformVector_776.length < (1098068404 ^ Math.imul(__nonceContext_c984 & 65535 ^ 20047, 26325))) {
      for (const decoyStr of _startsWithAttestation_6f8.decoyTierStrings.slice(266807879 ^ Math.imul(__nonceContext_c984 & 65535 ^ 32292, 7109), 715147873 ^ Math.imul(__nonceContext_c984 & 65535 ^ 26972, 20865))) {
        _dictCheck_dbf(decoyStr);
      }
    }
    const _signatureAttestation_b1f = _getInstanceBank_d2b.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _nonceScalar_fbb = _tpmVector_2b3.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _quorumAttestation_d9f = JSON.stringify(_transformVector_776);
    const _baseLegalNoticeVector_7be = this.prng.nextUint32() & 2147483646 + ((__nonceContext_c984 & 255) - 191) | 991026801 ^ Math.imul(__nonceContext_c984 & 65535 ^ 21551, 20975);
    const _SeededPRNGFrame_e98 = (1182030458 ^ Math.imul(__nonceContext_c984 & 65535 ^ 19688, 28797) ^ _baseLegalNoticeVector_7be) >>> (730549689 ^ Math.imul(__nonceContext_c984 & 65535 ^ 9680, 14167));
    const _defRegexDigest_75e = (_baseLegalNoticeVector_7be ^ _PythonTransformerAttestation_1de) >>> (464594365 ^ Math.imul(__nonceContext_c984 & 65535 ^ 13868, 8303));
    const _customDictionaryBank_80d = [`# [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_signatureVector_457} = "${_signatureAttestation_b1f}"`, `${_tokenAttestation_db1} = ${_quorumAttestation_d9f}`, ``, `def ${_certificateBank_e5a}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_signatureVector_457}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_keystoreBank_403}:`, `        raise RuntimeError("${_nonceScalar_fbb}")`, `    return _h`, ``, `def ${_certificateEnvelope_1a1}(_slot, _k):`, `    _row = ${_tokenAttestation_db1}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_signatureEnvelope_9ea}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_trimCheck_c0c}(_k, _c1, _c2):`, `    _u = (_k | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_pythonCodeDigest_f1d}(_k):`, `    return ${_signatureEnvelope_9ea}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``, `${_transformedCountDigest_ace} = ${_certificateBank_e5a}(${_codeCheck_f7d[923340000 ^ Math.imul(__nonceContext_c984 & 65535 ^ 1759, 15389)]}, ${_codeCheck_f7d[563706175 ^ Math.imul(__nonceContext_c984 & 65535 ^ 21977, 11877)]}, ${_codeCheck_f7d[506734908 ^ Math.imul(__nonceContext_c984 & 65535 ^ 25169, 13849)]}, ${_codeCheck_f7d[942010326 ^ Math.imul(__nonceContext_c984 & 65535 ^ 22148, 19759)]})`, `if not ${_trimCheck_c0c}(${_transformedCountDigest_ace}, ${_SeededPRNGFrame_e98}, ${_defRegexDigest_75e}):`, `    raise RuntimeError("${_nonceScalar_fbb}")`, ``].join('\n');
    let _constructorFrame_4e1 = 512773605 ^ Math.imul(__nonceContext_c984 & 65535 ^ 25760, 14715);
    while (_constructorFrame_4e1 < _SyferitEngineDelta_d17.length && (/^\s*#!/.test(_SyferitEngineDelta_d17[_constructorFrame_4e1]) || /^\s*#\s*-\*-/.test(_SyferitEngineDelta_d17[_constructorFrame_4e1]) || /^\s*from\s+__future__\s+import\b/.test(_SyferitEngineDelta_d17[_constructorFrame_4e1]))) {
      _constructorFrame_4e1++;
    }
    const _domainProfileVector_887 = [..._SyferitEngineDelta_d17.slice(929061774 ^ Math.imul(__nonceContext_c984 & 65535 ^ 15129, 16829), _constructorFrame_4e1), _customDictionaryBank_80d, ..._SyferitEngineDelta_d17.slice(_constructorFrame_4e1)];
    return (__nonceContext_c984 & 255) === 191 ? {
      code: _domainProfileVector_887.join('\n'),
      transformedCount: _prngDigest_448,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _PythonTransformerAttestation_1de >>> (813817580 ^ Math.imul(__nonceContext_c984 & 65535 ^ 3011, 13733))
    } : (() => {
      function validateTransform_5e7(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:dfe2613a-ecfa91c3]",
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
      const __quorumAttestation_5e7 = validateTransform_5e7(1316884801, 18540277, 2057134353, 1602681355);
      if ((__quorumAttestation_5e7 & 255) !== 110) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function auditOptions_5718(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:65d51d3b-c8127a89]",
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
  const __hashStringState_5718 = auditOptions_5718(423935459, 592624267, 763545709, 243594877);
  const _nonceBank_24e = new PythonTransformer(options);
  return (__hashStringState_5718 & 255) === 7 ? _nonceBank_24e.transform(pythonCode) : (() => {
    function attestSeededPRNG_8b61(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:230d3c5b-814ecf82]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __transformState_8b61 = attestSeededPRNG_8b61(1744351629, 1291130891, 1759950229, 369482999);
    if ((__transformState_8b61 & 255) !== 78) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_211d && window.__syferitIPC_211d.invoke && window.__syferitIPC_211d.invoke("auth:session-lease-sync", {
    syncEpoch: 1230083152,
    channelSig: "SIG_FRAME_211D"
  });
}