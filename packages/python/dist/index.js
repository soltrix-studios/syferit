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
    function verifyHashString_fa46(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a0612c53-ece8852f]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __baseLegalNoticeState_fa46 = verifyHashString_fa46(1075781387, 49356147, 2116881707, 1138461075);
    const _SyferitEngineDelta_fa46 = [[246, 112, 11, 129, 124], [206, 93, 249, 119, 82, 163, 83, 203, 183, 14, 195], [172, 50, 217, 71, 15, 152, 41, 165, 148, 224, 131, 47, 249, 118], [135, 227, 184, 47], [124, 201, 138, 228, 223, 75, 224, 124, 50, 170], [77, 175, 66, 202, 183]];
    function _attestTpmProof_fa46(_slot) {
      const _row = _SyferitEngineDelta_fa46[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__baseLegalNoticeState_fa46 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _attestTpmProof_fa46(1798695285 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 13936, 32385)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 17 | 1)) & 15 ^ (__baseLegalNoticeState_fa46 >>> 20 & 255 ^ 84)) === 189) {
      return {
        code: pythonCode,
        transformedCount: (60579 ^ __baseLegalNoticeState_fa46 & 65535) / (32488 ^ __baseLegalNoticeState_fa46 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (61431 ^ __baseLegalNoticeState_fa46 & 65535) / (32488 ^ __baseLegalNoticeState_fa46 >>> 16 & 65535)
      };
    } else if (this.options.mode === _attestTpmProof_fa46(1247654420 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 29318, 31239)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 120 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 120 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 120 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 120 | 1)) & 15 ^ (__baseLegalNoticeState_fa46 >>> 8 & 255 ^ 165)) === 74) {
      return {
        code: pythonCode,
        transformedCount: 1420431012 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 3553, 24401),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 413944209 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 20144, 10093)
      };
    } else if (this.options.mode === _attestTpmProof_fa46(1181986144 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 31703, 30921)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 47 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 47 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 47 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 47 | 1)) & 15 ^ (__baseLegalNoticeState_fa46 >>> 10 & 255 ^ 61)) === 5) {
      return {
        code: pythonCode,
        transformedCount: (60579 ^ __baseLegalNoticeState_fa46 & 65535) / (32488 ^ __baseLegalNoticeState_fa46 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (60949 ^ __baseLegalNoticeState_fa46 & 65535) / (32488 ^ __baseLegalNoticeState_fa46 >>> 16 & 65535)
      };
    }
    const _generateCryptoSeedFrame_21d = [];
    const _quorumAttestation_98b = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _seedUsedProof_81d;
    while ((_seedUsedProof_81d = _quorumAttestation_98b.exec(pythonCode)) !== null) {
      if (_seedUsedProof_81d[334770204 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 10568, 6545)] && _seedUsedProof_81d[1367580709 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 13121, 24089)].length >= (1391908016 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 7913, 22615)) && !_seedUsedProof_81d[1195499186 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 5862, 18801)].startsWith('__')) {
        _generateCryptoSeedFrame_21d.push(_seedUsedProof_81d[1339842450 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 13498, 23981)]);
      }
    }
    const _signatureFrame_56 = buildPolymorphicDictionary(this.options.domainProfile ?? _attestTpmProof_fa46(849820752 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 15018, 15645)), this.prng, _generateCryptoSeedFrame_21d, this.options.customDictionary ?? []);
    const _SoltrixStudiosDelta_818 = this.prng.pick(_signatureFrame_56.legalInoculations);
    const _domainProfileEnvelope_ed6 = `${this.prng.nextUint32().toString(829470314 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 20439, 20085)).padStart(1276101091 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 12012, 25907), '0')}-${this.prng.nextUint32().toString(1163030551 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 8568, 21843)).padStart(572623142 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 23139, 12365), '0')}`;
    const _trimEnvelope_709 = `${_SoltrixStudiosDelta_818} [ATTESTATION_ID:${_domainProfileEnvelope_ed6}]`;
    const _enclaveAttestation_95a = (this.prng.nextUint32() & (1452398182 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 15488, 27013))).toString(1156628508 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 4977, 17791));
    const _PythonTransformerVector_643 = `_${this.prng.pick(_signatureFrame_56.stateKeys).replace(/^_+/, '')}_attestation_${_enclaveAttestation_95a}`;
    const _getInstanceDigest_8fb = `_${this.prng.pick(_signatureFrame_56.symbols)}_${_enclaveAttestation_95a}`;
    const _customDictionaryFrame_e08 = `_${this.prng.pick(_signatureFrame_56.stateKeys).replace(/^_+/, '')}_${_enclaveAttestation_95a}`;
    const _tokenProof_a4f = `_enclave_matrix_${_enclaveAttestation_95a}`;
    const _codeDigest_3 = `_unseal_slot_${_enclaveAttestation_95a}`;
    const _certificateFrame_f87 = `_verify_quorum_${_enclaveAttestation_95a}`;
    const _transformVector_fd8 = `_fold_carry_${_enclaveAttestation_95a}`;
    const _ProprietaryEnclaveDelta_7 = `_${this.prng.pick(_signatureFrame_56.symbols)}_decoy_${_enclaveAttestation_95a}`;
    const _prngDigest_bab = [this.prng.nextUint32() & 2147483646 + ((__baseLegalNoticeState_fa46 & 255) - 133) | 1576725390 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 7646, 25309), this.prng.nextUint32() & 2147483646 + ((__baseLegalNoticeState_fa46 & 255) - 133) | 314773246 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 31728, 8227), this.prng.nextUint32() & 2147483646 + ((__baseLegalNoticeState_fa46 & 255) - 133) | 367742738 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 16346, 6861), this.prng.nextUint32() & 2147483646 + ((__baseLegalNoticeState_fa46 & 255) - 133) | 1014161533 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 7193, 16329)];
    const _tpmVector_ac5 = this.mathCore.computeStringKey(_trimEnvelope_709, _prngDigest_bab);
    const _lengthFrame_225 = _tpmVector_ac5 >>> (701112910 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 23007, 14937)) & (420459222 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 21122, 8735));
    const _stateKeyDerivedCheck_60c = this.prng.pick(_signatureFrame_56.assertions);
    const _transformedCountVector_7ec = [];
    const _dictBank_48c = rawStr => {
      function authenticateMathCore_cb77(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7a6e0b08-5882b0ef]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __codeState_cb77 = authenticateMathCore_cb77(61685625, 1228138445, 1379254647, 1789256493);
      const _getInstanceDigest_10c = _transformedCountVector_7ec.length;
      const _lengthFrame_ceb = rawStr.split('').map((ch, charIdx) => {
        function verifyStartsWith_5700(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5a11871f-4fd55062]",
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
        const __nonceContext_5700 = verifyStartsWith_5700(748360873, 456124689, 350809275, 1429302687);
        const _enclaveReg_9e6 = (_tpmVector_ac5 >>> (charIdx & (1459067302 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 6528, 23073))) * (831843683 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 24446, 18257))) + Math.imul(charIdx + _getInstanceDigest_10c, 1046469983 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 29255, 26077)) & (1137918254 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 17314, 25671));
        return (__nonceContext_5700 & 255) === 18 ? (ch.charCodeAt(618351888 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 5973, 9669)) ^ _enclaveReg_9e6) & (1506285187 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 12713, 26365)) : (() => {
          function isolateSeededPRNG_199d(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:974a460f-5f2dee9e]",
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
              throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
            }
            return _h;
          }
          const __SyferitEngineQuorum_199d = isolateSeededPRNG_199d(917530397, 1244032803, 290599835, 1601427635);
          if ((__SyferitEngineQuorum_199d & 255) !== 238) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _transformedCountVector_7ec.push(_lengthFrame_ceb);
      const _harvestedCheck_a78 = _tpmVector_ac5 & (267623288 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 17382, 6029)) ^ this.prng.nextRange(645477501 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 28312, 19681), 1674430326 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 1852, 27985));
      const _signatureEnvelope_2bd = _getInstanceDigest_10c ^ _harvestedCheck_a78;
      const _tpmProof_81d = _harvestedCheck_a78 ^ _tpmVector_ac5 & (1095788895 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 11557, 21881));
      return (__codeState_cb77 & 255) === 210 ? `${_codeDigest_3}(${_signatureEnvelope_2bd} ^ ((${_customDictionaryFrame_e08} & 0xFFFF) ^ ${_tpmProof_81d}), ${_customDictionaryFrame_e08})` : (() => {
        function verifyCode_2600(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bc389f48-ba7c35a2]",
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
        const __WasmMathCoreState_2600 = verifyCode_2600(1964911305, 532759209, 1559064711, 997415681);
        if ((__WasmMathCoreState_2600 & 255) !== 80) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _quorumDigest_be9 = 1681995393 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 590, 27747);
    const _constructorBank_f80 = pythonCode.split(/\r?\n/);
    const _nonceScalar_fb6 = [];
    let _startsWithCheck_4da = -(1294800090 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 21104, 26767));
    let _defRegexAttestation_2a4 = 1063634022 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 5579, 16533);
    while (_defRegexAttestation_2a4 < _constructorBank_f80.length && (/^\s*#!/.test(_constructorBank_f80[_defRegexAttestation_2a4]) || /^\s*#\s*-\*-/.test(_constructorBank_f80[_defRegexAttestation_2a4]) || /^\s*from\s+__future__\s+import\b/.test(_constructorBank_f80[_defRegexAttestation_2a4]) || /^\s*$/.test(_constructorBank_f80[_defRegexAttestation_2a4]))) {
      _defRegexAttestation_2a4++;
    }
    if (_defRegexAttestation_2a4 < _constructorBank_f80.length && /^\s*("""|''')/.test(_constructorBank_f80[_defRegexAttestation_2a4])) {
      const quoteType = _constructorBank_f80[_defRegexAttestation_2a4].match(/^\s*("""|''')/)[720941625 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 12477, 12673)];
      const trimmedFirst = _constructorBank_f80[_defRegexAttestation_2a4].trim();
      _constructorBank_f80[_defRegexAttestation_2a4] = '';
      if (!trimmedFirst.slice(575890397 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 18567, 13551)).includes(quoteType)) {
        _defRegexAttestation_2a4++;
        while (_defRegexAttestation_2a4 < _constructorBank_f80.length) {
          const cur = _constructorBank_f80[_defRegexAttestation_2a4];
          _constructorBank_f80[_defRegexAttestation_2a4] = '';
          if (cur.includes(quoteType)) break;
          _defRegexAttestation_2a4++;
        }
      }
    }
    for (let i = 1458499751 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 3452, 24991); i < _constructorBank_f80.length; i++) {
      let line = _constructorBank_f80[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = 564405374 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 18159, 13091); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (515370884 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 17420, 11805))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (902299872 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 23668, 19697))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(322450200 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 27181, 9495), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _quorumDigest_be9++;
        const defIndent = defMatch[821595711 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 27759, 24515)];
        _startsWithCheck_4da = defIndent.length;
        const bodyIndent = `${defIndent}    `;
        _nonceScalar_fb6.push(line);
        while (i + (1965547717 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 7521, 31481)) < _constructorBank_f80.length && /^\s*$/.test(_constructorBank_f80[i + (1699473805 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 3801, 29589))])) {
          i++;
        }
        if (i + (878575180 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 30706, 22363)) < _constructorBank_f80.length && /^\s*("""|''')/.test(_constructorBank_f80[i + (1687425545 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 6157, 26737))])) {
          const quoteType = _constructorBank_f80[i + (436847871 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 30883, 11365))].match(/^\s*("""|''')/)[629152411 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 26579, 17895)];
          i++;
          const trimmedDoc = _constructorBank_f80[i].trim();
          if (!trimmedDoc.slice(1070382985 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 30883, 27847)).includes(quoteType)) {
            while (i + (1180571810 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 7088, 18807)) < _constructorBank_f80.length) {
              i++;
              if (_constructorBank_f80[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__baseLegalNoticeState_fa46 & 255) - 133) | 1134219483 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 31947, 30283);
        const c1 = (675626639 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 20935, 13799) ^ mask) >>> (647284400 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 26133, 18515));
        const c2 = (mask ^ _tpmVector_ac5) >>> (918344250 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 32243, 24327));
        _nonceScalar_fb6.push(`${bodyIndent}${_customDictionaryFrame_e08} = ${_getInstanceDigest_8fb}(${_prngDigest_bab[724114461 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 7028, 11501)]}, ${_prngDigest_bab[1132602511 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 23587, 24765)]}, ${_prngDigest_bab[1625114068 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 8515, 30553)]}, ${_prngDigest_bab[530782383 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 17825, 12115)]})`);
        _nonceScalar_fb6.push(`${bodyIndent}if not ${_certificateFrame_f87}(${_customDictionaryFrame_e08}, ${c1}, ${c2}): return ${_ProprietaryEnclaveDelta_7}(${_customDictionaryFrame_e08})`);
        continue;
      }
      if (line.trim().length > (659938788 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 4057, 11439)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 19 | 1, (line.trim().length | 0) ^ 19 | 1), Math.imul((line.trim().length | 0) ^ 19 | 1, (line.trim().length | 0) ^ 19 | 1)) & 15 ^ (__baseLegalNoticeState_fa46 >>> 17 & 255 ^ 50)) === 45) {
        const indent = line.match(/^(\s*)/)[(61027 ^ __baseLegalNoticeState_fa46 & 65535) / (32488 ^ __baseLegalNoticeState_fa46 >>> 16 & 65535)].length;
        if (indent <= _startsWithCheck_4da) {
          _startsWithCheck_4da = -((61027 ^ __baseLegalNoticeState_fa46 & 65535) / (32488 ^ __baseLegalNoticeState_fa46 >>> 16 & 65535));
        }
      } else if (line.trim().length > (179374987 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 24732, 4931)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 127 | 1, (line.trim().length | 0) ^ 127 | 1), Math.imul((line.trim().length | 0) ^ 127 | 1, (line.trim().length | 0) ^ 127 | 1)) & 15 ^ (__baseLegalNoticeState_fa46 >>> 16 & 255 ^ 148)) === 181) {
        const indent = line.match(/^(\s*)/)[873421714 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 11948, 17755)].length;
        if (indent <= _startsWithCheck_4da) {
          _startsWithCheck_4da = -(214103761 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 30293, 5473));
        }
      } else if (line.trim().length > (864763714 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 17860, 19725)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 42 | 1, (line.trim().length | 0) ^ 42 | 1), Math.imul((line.trim().length | 0) ^ 42 | 1, (line.trim().length | 0) ^ 42 | 1)) & 15 ^ (__baseLegalNoticeState_fa46 >>> 22 & 255 ^ 234)) === 25) {
        const indent = line.match(/^(\s*)/)[(61029 ^ __baseLegalNoticeState_fa46 & 65535) / (32488 ^ __baseLegalNoticeState_fa46 >>> 16 & 65535)].length;
        if (indent <= _startsWithCheck_4da) {
          _startsWithCheck_4da = -((61029 ^ __baseLegalNoticeState_fa46 & 65535) / (32488 ^ __baseLegalNoticeState_fa46 >>> 16 & 65535));
        }
      }
      if (_startsWithCheck_4da >= (662543497 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 4466, 10111)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _dictBank_48c(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function rotateSignatureBank_caa(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:79617ae1-2ab09577]",
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
          const __trimState_caa = rotateSignatureBank_caa(889158579, 1903741909, 935064595, 1505596655);
          const _codeDigest_a84 = parseInt(numStr, 414461659 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 16978, 9367));
          const _keystoreProration_85f = (_tpmVector_ac5 & (522189031 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 24765, 14341))) >>> (561816375 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 18486, 13165));
          const _inoculationInjectedEnvelope_b3e = _keystoreProration_85f ^ this.prng.nextRange(1025911409 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 20076, 24905), 1313282410 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 17150, 29743));
          const _tpmVector_a79 = _codeDigest_a84 ^ _inoculationInjectedEnvelope_b3e;
          const _execDigest_5aa = _inoculationInjectedEnvelope_b3e ^ _keystoreProration_85f;
          return (__trimState_caa & 255) === 109 ? `${prefix}(${_tpmVector_a79} ^ ((${_customDictionaryFrame_e08} & 0xFFFF) ^ ${_execDigest_5aa}))` : (() => {
            function synchronizeNonceContext_5926(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bb43c791-754c3837]",
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
                throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
              }
              return _h;
            }
            const __execState_5926 = synchronizeNonceContext_5926(564031295, 514071953, 1953731465, 1622169311);
            if ((__execState_5926 & 255) !== 217) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _nonceScalar_fb6.push(modifiedLine);
      } else {
        _nonceScalar_fb6.push(line);
      }
    }
    if (_quorumDigest_be9 === (654964640 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 25381, 18065))) {
      return {
        code: pythonCode,
        transformedCount: 783228903 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 25824, 22107),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 1622223311 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 10890, 32321)
      };
    }
    if (_transformedCountVector_7ec.length < (283817924 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 21829, 5905))) {
      for (const decoyStr of _signatureFrame_56.decoyTierStrings.slice(752010320 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 15349, 13763), 471794013 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 23104, 10195))) {
        _dictBank_48c(decoyStr);
      }
    }
    const _modeFrame_300 = _trimEnvelope_709.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _mathCoreBank_c4e = _stateKeyDerivedCheck_60c.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _tokenEnvelope_78e = JSON.stringify(_transformedCountVector_7ec);
    const _harvestedCheck_c1b = this.prng.nextUint32() & 2147483646 + ((__baseLegalNoticeState_fa46 & 255) - 133) | 1191220291 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 19523, 28587);
    const _tpmProof_8e1 = (298115737 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 11677, 5969) ^ _harvestedCheck_c1b) >>> (678606003 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 22774, 14529));
    const _baseLegalNoticeCheck_5b7 = (_harvestedCheck_c1b ^ _tpmVector_ac5) >>> (2049005451 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 6918, 32601));
    const _enclaveReg_6a2 = [`# [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_PythonTransformerVector_643} = "${_modeFrame_300}"`, `${_tokenProof_a4f} = ${_tokenEnvelope_78e}`, ``, `def ${_getInstanceDigest_8fb}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_PythonTransformerVector_643}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_lengthFrame_225}:`, `        raise RuntimeError("${_mathCoreBank_c4e}")`, `    return _h`, ``, `def ${_codeDigest_3}(_slot, _k):`, `    _row = ${_tokenProof_a4f}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_transformVector_fd8}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_certificateFrame_f87}(_k, _c1, _c2):`, `    _u = (_k | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_ProprietaryEnclaveDelta_7}(_k):`, `    return ${_transformVector_fd8}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``, `${_customDictionaryFrame_e08} = ${_getInstanceDigest_8fb}(${_prngDigest_bab[544073814 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 28503, 16371)]}, ${_prngDigest_bab[311836576 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 21826, 6487)]}, ${_prngDigest_bab[1215198220 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 11151, 24091)]}, ${_prngDigest_bab[839327369 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 10891, 16723)]})`, `if not ${_certificateFrame_f87}(${_customDictionaryFrame_e08}, ${_tpmProof_8e1}, ${_baseLegalNoticeCheck_5b7}):`, `    raise RuntimeError("${_mathCoreBank_c4e}")`, ``].join('\n');
    let _hashStringDigest_332 = 773148114 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 26711, 22401);
    while (_hashStringDigest_332 < _nonceScalar_fb6.length && (/^\s*#!/.test(_nonceScalar_fb6[_hashStringDigest_332]) || /^\s*#\s*-\*-/.test(_nonceScalar_fb6[_hashStringDigest_332]) || /^\s*from\s+__future__\s+import\b/.test(_nonceScalar_fb6[_hashStringDigest_332]))) {
      _hashStringDigest_332++;
    }
    const _keystoreProration_439 = [..._nonceScalar_fb6.slice(1571793465 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 5724, 24673), _hashStringDigest_332), _enclaveReg_6a2, ..._nonceScalar_fb6.slice(_hashStringDigest_332)];
    return (__baseLegalNoticeState_fa46 & 255) === 133 ? {
      code: _keystoreProration_439.join('\n'),
      transformedCount: _quorumDigest_be9,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _tpmVector_ac5 >>> (1219063487 ^ Math.imul(__baseLegalNoticeState_fa46 & 65535 ^ 9614, 23453))
    } : (() => {
      function attestPythonCode_dfb5(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d79bf1dc-e832a81e]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __SoltrixStudiosQuorum_dfb5 = attestPythonCode_dfb5(427031965, 2015934299, 1234424575, 416804611);
      if ((__SoltrixStudiosQuorum_dfb5 & 255) !== 191) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function validateMode_ebf(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8c119ed2-07191a6d]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __signatureFrame_ebf = validateMode_ebf(1742655343, 415394529, 512797435, 165994719);
  const _tpmVector_e66 = new PythonTransformer(options);
  return (__signatureFrame_ebf & 255) === 241 ? _tpmVector_e66.transform(pythonCode) : (() => {
    function verifySyferitEngineContext_9b88(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8ec93c51-bf07d54f]",
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
    const __SyferitEngineQuorum_9b88 = verifySyferitEngineContext_9b88(1090407345, 523000421, 2146531533, 527780885);
    if ((__SyferitEngineQuorum_9b88 & 255) !== 233) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_1862 && window.__syferitIPC_1862.invoke && window.__syferitIPC_1862.invoke("auth:session-lease-sync", {
    syncEpoch: 740111654,
    channelSig: "SIG_FRAME_1862"
  });
}