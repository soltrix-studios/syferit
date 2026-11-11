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
    function isolateTransform_acd4(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:72142fe1-9161e100]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __tokenVector_acd4 = isolateTransform_acd4(1998857301, 366193141, 1176595669, 1493024157);
    const _lengthCheck_acd4 = [[9, 99, 211, 54, 114, 209, 73, 142, 231, 80], [245, 87, 186, 29, 73, 169, 16, 97, 220, 52, 128], [209, 56, 135, 194, 41, 135, 234, 68, 186], [168, 29, 119, 177], [101, 207, 79, 130, 230, 69, 189, 18, 91, 172], [86, 165, 1, 96, 220]];
    function _auditStartsWith_acd4(_slot) {
      const _row = _lengthCheck_acd4[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tokenVector_acd4 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _auditStartsWith_acd4(1008400202 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 19042, 24307)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 43 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 43 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 43 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 43 | 1)) & 15 ^ (__tokenVector_acd4 >>> 23 & 255 ^ 151)) === 92) {
      return {
        code: pythonCode,
        transformedCount: (59644 ^ __tokenVector_acd4 & 65535) / (58517 ^ __tokenVector_acd4 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (59630 ^ __tokenVector_acd4 & 65535) / (58517 ^ __tokenVector_acd4 >>> 16 & 65535)
      };
    } else if (this.options.mode === _auditStartsWith_acd4(1965734028 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 6895, 31663)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 37 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 37 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 37 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 37 | 1)) & 15 ^ (__tokenVector_acd4 >>> 11 & 255 ^ 21)) === 169) {
      return {
        code: pythonCode,
        transformedCount: 492550500 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 9288, 9425),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 319433211 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 30999, 8577)
      };
    } else if (this.options.mode === _auditStartsWith_acd4(757669739 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 31949, 19913)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1)) & 15 ^ (__tokenVector_acd4 >>> 19 & 255 ^ 50)) === 186) {
      return {
        code: pythonCode,
        transformedCount: (59644 ^ __tokenVector_acd4 & 65535) / (58517 ^ __tokenVector_acd4 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (59630 ^ __tokenVector_acd4 & 65535) / (58517 ^ __tokenVector_acd4 >>> 16 & 65535)
      };
    }
    const _nonceBank_818 = [];
    const _inoculationInjectedEnvelope_b29 = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _startsWithProof_76b;
    while ((_startsWithProof_76b = _inoculationInjectedEnvelope_b29.exec(pythonCode)) !== null) {
      if (_startsWithProof_76b[440455429 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 31240, 11753)] && _startsWithProof_76b[834089881 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 19028, 20085)].length >= (770680571 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 15373, 14175)) && !_startsWithProof_76b[678167066 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 31739, 17949)].startsWith('__')) {
        _nonceBank_818.push(_startsWithProof_76b[593101074 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 1369, 9767)]);
      }
    }
    const _seedDigest_f6f = buildPolymorphicDictionary(this.options.domainProfile ?? _auditStartsWith_acd4(1944191357 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 6470, 31491)), this.prng, _nonceBank_818, this.options.customDictionary ?? []);
    const _ProprietaryEnclaveDelta_d80 = this.prng.pick(_seedDigest_f6f.legalInoculations);
    const _SoltrixStudiosDelta_e9c = `${this.prng.nextUint32().toString(368551724 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 28176, 10705)).padStart(673029848 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 8988, 12923), '0')}-${this.prng.nextUint32().toString(537043891 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 8535, 10425)).padStart(1584439462 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 6098, 24201), '0')}`;
    const _nonceScalar_d92 = `${_ProprietaryEnclaveDelta_d80} [ATTESTATION_ID:${_SoltrixStudiosDelta_e9c}]`;
    const _dictFrame_ba4 = (this.prng.nextUint32() & (721541128 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 16389, 16735))).toString(1641960061 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 14213, 28645));
    const _tokenVector_c91 = `_${this.prng.pick(_seedDigest_f6f.stateKeys).replace(/^_+/, '')}_attestation_${_dictFrame_ba4}`;
    const _customDictionaryEnvelope_7de = `_${this.prng.pick(_seedDigest_f6f.symbols)}_${_dictFrame_ba4}`;
    const _transformVector_4bd = `_${this.prng.pick(_seedDigest_f6f.stateKeys).replace(/^_+/, '')}_${_dictFrame_ba4}`;
    const _certificateFrame_8fe = `_enclave_matrix_${_dictFrame_ba4}`;
    const _modeProof_b88 = `_unseal_slot_${_dictFrame_ba4}`;
    const _enclaveEnvelope_da = `_verify_quorum_${_dictFrame_ba4}`;
    const _SyferitEngineDelta_b12 = `_fold_carry_${_dictFrame_ba4}`;
    const _lengthCheck_df7 = `_${this.prng.pick(_seedDigest_f6f.symbols)}_decoy_${_dictFrame_ba4}`;
    const _prngEnvelope_3ab = [this.prng.nextUint32() & 2147483646 + ((__tokenVector_acd4 & 255) - 108) | 1687574698 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 6081, 25783), this.prng.nextUint32() & 2147483646 + ((__tokenVector_acd4 & 255) - 108) | 199319636 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 21935, 4103), this.prng.nextUint32() & 2147483646 + ((__tokenVector_acd4 & 255) - 108) | 1708508074 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 3759, 28921), this.prng.nextUint32() & 2147483646 + ((__tokenVector_acd4 & 255) - 108) | 877862029 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 11240, 17539)];
    const _domainProfileAttestation_2d6 = this.mathCore.computeStringKey(_nonceScalar_d92, _prngEnvelope_3ab);
    const _pushProof_370 = _domainProfileAttestation_2d6 >>> (1374141536 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 10224, 25855)) & (1202481984 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 22355, 24561));
    const _stateKeyDerivedBank_d05 = this.prng.pick(_seedDigest_f6f.assertions);
    const _baseLegalNoticeFrame_778 = [];
    const _hashStringAttestation_b55 = rawStr => {
      function verifySyferitEngineContext_2e2e(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1ee1b391-c7e7bf8a]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __getInstanceState_2e2e = verifySyferitEngineContext_2e2e(1683963423, 911092213, 285537709, 1401036653);
      const _lengthCheck_86d = _baseLegalNoticeFrame_778.length;
      const _quorumEnvelope_473 = rawStr.split('').map((ch, charIdx) => {
        function authenticateGetInstance_db26(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:be5e52ec-c7e2d735]",
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
            throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
          }
          return _h;
        }
        const __nonceFrame_db26 = authenticateGetInstance_db26(1599548333, 667023089, 1855554291, 1136237551);
        const _lengthCheck_d09 = (_domainProfileAttestation_2d6 >>> (charIdx & (1090498848 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 14129, 19071))) * (774107092 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 12072, 15175))) + Math.imul(charIdx + _lengthCheck_86d, 982211999 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 30858, 26479)) & (2013180849 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 6334, 32655));
        return (__nonceFrame_db26 & 255) === 110 ? (ch.charCodeAt(372817460 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 23032, 8201)) ^ _lengthCheck_d09) & (1010165073 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 15026, 18713)) : (() => {
          function isolatePythonTransformer_82bf(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3780afb5-7dedc028]",
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
          const __dictState_82bf = isolatePythonTransformer_82bf(455174405, 469849223, 212726441, 2029384359);
          if ((__dictState_82bf & 255) !== 65) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _baseLegalNoticeFrame_778.push(_quorumEnvelope_473);
      const _trimFrame_c87 = _domainProfileAttestation_2d6 & (263443987 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 31264, 7033)) ^ this.prng.nextRange(563970370 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 22614, 12501), 1463994584 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 5113, 22731));
      const _modeProof_d97 = _lengthCheck_86d ^ _trimFrame_c87;
      const _codeCheck_467 = _trimFrame_c87 ^ _domainProfileAttestation_2d6 & (1038043193 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 11702, 20495));
      return (__getInstanceState_2e2e & 255) === 81 ? `${_modeProof_b88}(${_modeProof_d97} ^ ((${_transformVector_4bd} & 0xFFFF) ^ ${_codeCheck_467}), ${_transformVector_4bd})` : (() => {
        function rotateSeedUsed_d0e2(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7c69edc7-1394d4b8]",
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
            throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
          }
          return _h;
        }
        const __nonceContext_d0e2 = rotateSeedUsed_d0e2(569576153, 1733162269, 1357461923, 299521811);
        if ((__nonceContext_d0e2 & 255) !== 73) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _transformedCountCheck_bc5 = 946250925 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 14343, 17735);
    const _tpmVector_c4e = pythonCode.split(/\r?\n/);
    const _certificateCheck_2d7 = [];
    let _PythonTransformerFrame_95d = -(967616522 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 21139, 20213));
    let _generateCryptoSeedFrame_9db = 1293490306 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 30106, 31987);
    while (_generateCryptoSeedFrame_9db < _tpmVector_c4e.length && (/^\s*#!/.test(_tpmVector_c4e[_generateCryptoSeedFrame_9db]) || /^\s*#\s*-\*-/.test(_tpmVector_c4e[_generateCryptoSeedFrame_9db]) || /^\s*from\s+__future__\s+import\b/.test(_tpmVector_c4e[_generateCryptoSeedFrame_9db]) || /^\s*$/.test(_tpmVector_c4e[_generateCryptoSeedFrame_9db]))) {
      _generateCryptoSeedFrame_9db++;
    }
    if (_generateCryptoSeedFrame_9db < _tpmVector_c4e.length && /^\s*("""|''')/.test(_tpmVector_c4e[_generateCryptoSeedFrame_9db])) {
      const quoteType = _tpmVector_c4e[_generateCryptoSeedFrame_9db].match(/^\s*("""|''')/)[634449215 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 12530, 11441)];
      const trimmedFirst = _tpmVector_c4e[_generateCryptoSeedFrame_9db].trim();
      _tpmVector_c4e[_generateCryptoSeedFrame_9db] = '';
      if (!trimmedFirst.slice(459142915 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 2924, 7901)).includes(quoteType)) {
        _generateCryptoSeedFrame_9db++;
        while (_generateCryptoSeedFrame_9db < _tpmVector_c4e.length) {
          const cur = _tpmVector_c4e[_generateCryptoSeedFrame_9db];
          _tpmVector_c4e[_generateCryptoSeedFrame_9db] = '';
          if (cur.includes(quoteType)) break;
          _generateCryptoSeedFrame_9db++;
        }
      }
    }
    for (let i = 466437420 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 27896, 13743); i < _tpmVector_c4e.length; i++) {
      let line = _tpmVector_c4e[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = 210376502 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 28150, 6151); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (608090671 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 31050, 16365))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (643403322 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 17913, 14479))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(531545904 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 30972, 14363), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _transformedCountCheck_bc5++;
        const defIndent = defMatch[363415481 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 23380, 7921)];
        _PythonTransformerFrame_95d = defIndent.length;
        const bodyIndent = `${defIndent}    `;
        _certificateCheck_2d7.push(line);
        while (i + (578173112 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 32559, 14931)) < _tpmVector_c4e.length && /^\s*$/.test(_tpmVector_c4e[i + (1536913520 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 8079, 24219))])) {
          i++;
        }
        if (i + (1269872476 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 5193, 19673)) < _tpmVector_c4e.length && /^\s*("""|''')/.test(_tpmVector_c4e[i + (488353322 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 30301, 12059))])) {
          const quoteType = _tpmVector_c4e[i + (1673829984 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 5073, 25973))].match(/^\s*("""|''')/)[843354331 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 13630, 14885)];
          i++;
          const trimmedDoc = _tpmVector_c4e[i].trim();
          if (!trimmedDoc.slice(681175157 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 9422, 13003)).includes(quoteType)) {
            while (i + (337691371 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 30710, 8265)) < _tpmVector_c4e.length) {
              i++;
              if (_tpmVector_c4e[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__tokenVector_acd4 & 255) - 108) | 796100215 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 23070, 17427);
        const c1 = (1512387651 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 4302, 23761) ^ mask) >>> (1038188560 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 15260, 19135));
        const c2 = (mask ^ _domainProfileAttestation_2d6) >>> (992585550 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 22774, 21955));
        _certificateCheck_2d7.push(`${bodyIndent}${_transformVector_4bd} = ${_customDictionaryEnvelope_7de}(${_prngEnvelope_3ab[620786501 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 13353, 11009)]}, ${_prngEnvelope_3ab[876531368 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 32281, 22757)]}, ${_prngEnvelope_3ab[757197268 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 5786, 11601)]}, ${_prngEnvelope_3ab[1174217626 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 17981, 26313)]})`);
        _certificateCheck_2d7.push(`${bodyIndent}if not ${_enclaveEnvelope_da}(${_transformVector_4bd}, ${c1}, ${c2}): return ${_lengthCheck_df7}(${_transformVector_4bd})`);
        continue;
      }
      if (line.trim().length > (622456275 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 26449, 16975)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 43 | 1, (line.trim().length | 0) ^ 43 | 1), Math.imul((line.trim().length | 0) ^ 43 | 1, (line.trim().length | 0) ^ 43 | 1)) & 15 ^ (__tokenVector_acd4 >>> 6 & 255 ^ 114)) === 212) {
        const indent = line.match(/^(\s*)/)[(59530 ^ __tokenVector_acd4 & 65535) / (58517 ^ __tokenVector_acd4 >>> 16 & 65535)].length;
        if (indent <= _PythonTransformerFrame_95d) {
          _PythonTransformerFrame_95d = -((59530 ^ __tokenVector_acd4 & 65535) / (58517 ^ __tokenVector_acd4 >>> 16 & 65535));
        }
      } else if (line.trim().length > (900142444 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 22552, 19927)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 37 | 1, (line.trim().length | 0) ^ 37 | 1), Math.imul((line.trim().length | 0) ^ 37 | 1, (line.trim().length | 0) ^ 37 | 1)) & 15 ^ (__tokenVector_acd4 >>> 11 & 255 ^ 38)) === 154) {
        const indent = line.match(/^(\s*)/)[719981474 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 17451, 16325)].length;
        if (indent <= _PythonTransformerFrame_95d) {
          _PythonTransformerFrame_95d = -(997515117 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 5536, 15353));
        }
      } else if (line.trim().length > (1020106848 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 27927, 29853)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 96 | 1, (line.trim().length | 0) ^ 96 | 1), Math.imul((line.trim().length | 0) ^ 96 | 1, (line.trim().length | 0) ^ 96 | 1)) & 15 ^ (__tokenVector_acd4 >>> 24 & 255 ^ 97)) === 138) {
        const indent = line.match(/^(\s*)/)[(59532 ^ __tokenVector_acd4 & 65535) / (58517 ^ __tokenVector_acd4 >>> 16 & 65535)].length;
        if (indent <= _PythonTransformerFrame_95d) {
          _PythonTransformerFrame_95d = -((59532 ^ __tokenVector_acd4 & 65535) / (58517 ^ __tokenVector_acd4 >>> 16 & 65535));
        }
      }
      if (_PythonTransformerFrame_95d >= (419955693 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 8123, 6619)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _hashStringAttestation_b55(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function validateCertificateCheck_8b39(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:543e655a-36eaaa88]",
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
              throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
            }
            return _h;
          }
          const __enclaveAttestation_8b39 = validateCertificateCheck_8b39(1872834295, 691616879, 827632365, 1250619767);
          const _transformVector_ac = parseInt(numStr, 1110449540 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 9266, 21225));
          const _enclaveCheck_bb6 = (_domainProfileAttestation_2d6 & (581159635 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 25480, 16227))) >>> (596533533 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 22513, 12161));
          const _generateCryptoSeedFrame_2c8 = _enclaveCheck_bb6 ^ this.prng.nextRange(816370391 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 16129, 14803), 385492865 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 7306, 6149));
          const _stateKeyDerivedBank_431 = _transformVector_ac ^ _generateCryptoSeedFrame_2c8;
          const _constructorBank_1f7 = _generateCryptoSeedFrame_2c8 ^ _enclaveCheck_bb6;
          return (__enclaveAttestation_8b39 & 255) === 243 ? `${prefix}(${_stateKeyDerivedBank_431} ^ ((${_transformVector_4bd} & 0xFFFF) ^ ${_constructorBank_1f7}))` : (() => {
            function verifyInoculationInjected_7886(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:81941299-df3f4e7c]",
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
            const __quorumEnvelope_7886 = verifyInoculationInjected_7886(1064707801, 536428993, 888161579, 155532717);
            if ((__quorumEnvelope_7886 & 255) !== 224) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _certificateCheck_2d7.push(modifiedLine);
      } else {
        _certificateCheck_2d7.push(line);
      }
    }
    if (_transformedCountCheck_bc5 === (719125200 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 1020, 11925))) {
      return {
        code: pythonCode,
        transformedCount: 675168585 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 28321, 19565),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 985521880 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 28980, 25105)
      };
    }
    if (_baseLegalNoticeFrame_778.length < (1119761004 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 3604, 18979))) {
      for (const decoyStr of _seedDigest_f6f.decoyTierStrings.slice(948906903 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 31149, 25431), 694690013 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 10671, 14005))) {
        _hashStringAttestation_b55(decoyStr);
      }
    }
    const _WasmMathCoreCheck_bd3 = _nonceScalar_d92.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _pythonCodeBank_b38 = _stateKeyDerivedBank_d05.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _enclaveVector_27f = JSON.stringify(_baseLegalNoticeFrame_778);
    const _mathCoreEnvelope_c24 = this.prng.nextUint32() & 2147483646 + ((__tokenVector_acd4 & 255) - 108) | 559636273 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 12444, 10077);
    const _execCheck_d86 = (1409271524 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 10323, 28635) ^ _mathCoreEnvelope_c24) >>> (1044152047 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 17643, 23641));
    const _quorumEnvelope_580 = (_mathCoreEnvelope_c24 ^ _domainProfileAttestation_2d6) >>> (556597263 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 18043, 12489));
    const _nonceFrame_47a = [`# [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_tokenVector_c91} = "${_WasmMathCoreCheck_bd3}"`, `${_certificateFrame_8fe} = ${_enclaveVector_27f}`, ``, `def ${_customDictionaryEnvelope_7de}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_tokenVector_c91}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_pushProof_370}:`, `        raise RuntimeError("${_pythonCodeBank_b38}")`, `    return _h`, ``, `def ${_modeProof_b88}(_slot, _k):`, `    _row = ${_certificateFrame_8fe}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_SyferitEngineDelta_b12}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_enclaveEnvelope_da}(_k, _c1, _c2):`, `    _u = (_k | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_lengthCheck_df7}(_k):`, `    return ${_SyferitEngineDelta_b12}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``, `${_transformVector_4bd} = ${_customDictionaryEnvelope_7de}(${_prngEnvelope_3ab[156997764 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 28408, 4557)]}, ${_prngEnvelope_3ab[862385530 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 13361, 15287)]}, ${_prngEnvelope_3ab[403416683 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 11427, 8007)]}, ${_prngEnvelope_3ab[942292112 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 5735, 14489)]})`, `if not ${_enclaveEnvelope_da}(${_transformVector_4bd}, ${_execCheck_d86}, ${_quorumEnvelope_580}):`, `    raise RuntimeError("${_pythonCodeBank_b38}")`, ``].join('\n');
    let _seedUsedEnvelope_dbb = 382921275 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 5461, 5907);
    while (_seedUsedEnvelope_dbb < _certificateCheck_2d7.length && (/^\s*#!/.test(_certificateCheck_2d7[_seedUsedEnvelope_dbb]) || /^\s*#\s*-\*-/.test(_certificateCheck_2d7[_seedUsedEnvelope_dbb]) || /^\s*from\s+__future__\s+import\b/.test(_certificateCheck_2d7[_seedUsedEnvelope_dbb]))) {
      _seedUsedEnvelope_dbb++;
    }
    const _keystoreProof_c93 = [..._certificateCheck_2d7.slice(714174165 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 31459, 19035), _seedUsedEnvelope_dbb), _nonceFrame_47a, ..._certificateCheck_2d7.slice(_seedUsedEnvelope_dbb)];
    return (__tokenVector_acd4 & 255) === 108 ? {
      code: _keystoreProof_c93.join('\n'),
      transformedCount: _transformedCountCheck_bc5,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _domainProfileAttestation_2d6 >>> (588825789 ^ Math.imul(__tokenVector_acd4 & 65535 ^ 5235, 9123))
    } : (() => {
      function attestCertificateFrame_9913(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:de0f5d77-2c43ae8a]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __WasmMathCoreState_9913 = attestCertificateFrame_9913(1538377159, 1048235921, 1282085107, 1223714209);
      if ((__WasmMathCoreState_9913 & 255) !== 100) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function isolateMode_4abe(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e3931f70-f526aeec]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __enclaveCheck_4abe = isolateMode_4abe(1110924451, 500313373, 205290451, 748130795);
  const _hashStringAttestation_fed = new PythonTransformer(options);
  return (__enclaveCheck_4abe & 255) === 82 ? _hashStringAttestation_fed.transform(pythonCode) : (() => {
    function attestGenerateCryptoSeed_bdf2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:444dcf13-cd0d62f6]",
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
    const __trimState_bdf2 = attestGenerateCryptoSeed_bdf2(1080081493, 1674181771, 1574668795, 2085116077);
    if ((__trimState_bdf2 & 255) !== 132) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_492b && window.__syferitIPC_492b.invoke && window.__syferitIPC_492b.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 801098542,
    channelSig: "SIG_FRAME_492B"
  });
}