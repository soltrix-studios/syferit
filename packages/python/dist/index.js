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
    function authenticateStartsWith_9d6b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:67c08558-916e0dfb]",
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
    const __keystoreDigest_9d6b = authenticateStartsWith_9d6b(1825949633, 1327235879, 849269389, 1692237325);
    const _nonceScalar_9d6b = [[239, 78, 202, 221, 76, 220, 90, 47, 215, 44, 144, 165, 58, 178], [213, 35, 186, 183, 41, 181, 16, 11, 188, 0, 128], [179, 5, 133, 146, 24, 143, 247, 226, 141, 246], [136, 241, 119, 111], [69, 219, 79, 36, 198, 57, 189, 188, 59, 184], [54, 185, 1, 10, 188]];
    function _auditWasmMathCore_9d6b(_slot) {
      const _row = _nonceScalar_9d6b[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreDigest_9d6b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _auditWasmMathCore_9d6b(1003014122 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 23986, 24299)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 79 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 79 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 79 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 79 | 1)) & 15 ^ (__keystoreDigest_9d6b >>> 1 & 255 ^ 140)) === 199) {
      return {
        code: pythonCode,
        transformedCount: (65194 ^ __keystoreDigest_9d6b & 65535) / (16021 ^ __keystoreDigest_9d6b >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (64526 ^ __keystoreDigest_9d6b & 65535) / (16021 ^ __keystoreDigest_9d6b >>> 16 & 65535)
      };
    } else if (this.options.mode === _auditWasmMathCore_9d6b(655946045 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 25264, 16193)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 48 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 48 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 48 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 48 | 1)) & 15 ^ (__keystoreDigest_9d6b >>> 16 & 255 ^ 87)) === 11) {
      return {
        code: pythonCode,
        transformedCount: 1040197875 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 24533, 24875),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 1650429281 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 5387, 27607)
      };
    } else if (this.options.mode === _auditWasmMathCore_9d6b(305407157 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 30185, 8683)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 82 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 82 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 82 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 82 | 1)) & 15 ^ (__keystoreDigest_9d6b >>> 1 & 255 ^ 145)) === 222) {
      return {
        code: pythonCode,
        transformedCount: (64898 ^ __keystoreDigest_9d6b & 65535) / (16021 ^ __keystoreDigest_9d6b >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (65022 ^ __keystoreDigest_9d6b & 65535) / (16021 ^ __keystoreDigest_9d6b >>> 16 & 65535)
      };
    }
    const _dictBank_502 = [];
    const _mathCoreAttestation_970 = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _keystoreDigest_3c;
    while ((_keystoreDigest_3c = _mathCoreAttestation_970.exec(pythonCode)) !== null) {
      if (_keystoreDigest_3c[829631141 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 11280, 15535)] && _keystoreDigest_3c[634844161 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 18572, 13777)].length >= (501180666 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 20578, 11321)) && !_keystoreDigest_3c[1172112038 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 2037, 18207)].startsWith('__')) {
        _dictBank_502.push(_keystoreDigest_3c[348741583 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 10978, 6353)]);
      }
    }
    const _inoculationInjectedFrame_396 = buildPolymorphicDictionary(this.options.domainProfile ?? _auditWasmMathCore_9d6b(655139477 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 14334, 12579)), this.prng, _dictBank_502, this.options.customDictionary ?? []);
    const _domainProfileVector_3ed = this.prng.pick(_inoculationInjectedFrame_396.legalInoculations);
    const _constructorFrame_b1 = `${this.prng.nextUint32().toString(653246122 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 22518, 14881)).padStart(1586004322 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 2030, 24645), '0')}-${this.prng.nextUint32().toString(720111674 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 20470, 15673)).padStart(507690810 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 23894, 12253), '0')}`;
    const _harvestedProof_d1b = `${_domainProfileVector_3ed} [ATTESTATION_ID:${_constructorFrame_b1}]`;
    const _WasmMathCoreBank_172 = (this.prng.nextUint32() & (191726539 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 23272, 4501))).toString(1127252523 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 3603, 18149));
    const _nonceFrame_2f6 = `_${this.prng.pick(_inoculationInjectedFrame_396.stateKeys).replace(/^_+/, '')}_attestation_${_WasmMathCoreBank_172}`;
    const _quorumFrame_6b7 = `_${this.prng.pick(_inoculationInjectedFrame_396.symbols)}_${_WasmMathCoreBank_172}`;
    const _stateKeyDerivedAttestation_fc2 = `_${this.prng.pick(_inoculationInjectedFrame_396.stateKeys).replace(/^_+/, '')}_${_WasmMathCoreBank_172}`;
    const _enclaveReg_7d4 = `_enclave_matrix_${_WasmMathCoreBank_172}`;
    const _SeededPRNGBank_5e1 = `_unseal_slot_${_WasmMathCoreBank_172}`;
    const _nonceCheck_7e6 = `_verify_quorum_${_WasmMathCoreBank_172}`;
    const _generateCryptoSeedVector_ba5 = `_fold_carry_${_WasmMathCoreBank_172}`;
    const _pushBank_834 = `_${this.prng.pick(_inoculationInjectedFrame_396.symbols)}_decoy_${_WasmMathCoreBank_172}`;
    const _tpmFrame_463 = [this.prng.nextUint32() & 2147483646 + ((__keystoreDigest_9d6b & 255) - 140) | 1995817064 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 3631, 32131), this.prng.nextUint32() & 2147483646 + ((__keystoreDigest_9d6b & 255) - 140) | 1077264802 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 3147, 17477), this.prng.nextUint32() & 2147483646 + ((__keystoreDigest_9d6b & 255) - 140) | 1720085696 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 9887, 30811), this.prng.nextUint32() & 2147483646 + ((__keystoreDigest_9d6b & 255) - 140) | 620830190 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 11223, 11261)];
    const _certificateFrame_c6 = this.mathCore.computeStringKey(_harvestedProof_d1b, _tpmFrame_463);
    const _ProprietaryEnclaveDelta_b98 = _certificateFrame_c6 >>> (904760070 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 13654, 17509)) & (597672458 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 30147, 17003));
    const _baseLegalNoticeEnvelope_c17 = this.prng.pick(_inoculationInjectedFrame_396.assertions);
    const _nonceAttestation_509 = [];
    const _tpmVector_e4d = rawStr => {
      function verifyProprietaryEnclaveContext_2001(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:be73edad-17cd3e34]",
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
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __modeState_2001 = verifyProprietaryEnclaveContext_2001(1767642255, 903201621, 1370510959, 561965125);
      const _harvestedProof_900 = _nonceAttestation_509.length;
      const _pushBank_279 = rawStr.split('').map((ch, charIdx) => {
        function auditTransform_279c(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:226adb79-58c6eb11]",
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
        const __lengthState_279c = auditTransform_279c(386188271, 660077857, 699330095, 2012441691);
        const _certificateBank_c83 = (_certificateFrame_c6 >>> (charIdx & (865643029 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 23566, 21067))) * (1570119844 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 4976, 25557))) + Math.imul(charIdx + _harvestedProof_900, 618750637 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 5396, 10347)) & (810017435 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 25096, 19961));
        return (__lengthState_279c & 255) === 190 ? (ch.charCodeAt(885904740 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 22088, 20265)) ^ _certificateBank_c83) & (1769145509 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 9898, 31679)) : (() => {
          function isolateStateKeyDerived_f30(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:32ecc5ff-3951c756]",
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
          const __optionsState_f30 = isolateStateKeyDerived_f30(1741017157, 1108326389, 875706681, 64500979);
          if ((__optionsState_f30 & 255) !== 91) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _nonceAttestation_509.push(_pushBank_279);
      const _tpmVector_dfc = _certificateFrame_c6 & (1014585587 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 4864, 16545)) ^ this.prng.nextRange(885625751 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 29897, 25387), 702851934 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 30575, 19627));
      const _seedUsedBank_46b = _harvestedProof_900 ^ _tpmVector_dfc;
      const _defRegexFrame_3a8 = _tpmVector_dfc ^ _certificateFrame_c6 & (283042406 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 19985, 6189));
      return (__modeState_2001 & 255) === 44 ? `${_SeededPRNGBank_5e1}(${_seedUsedBank_46b} ^ ((${_stateKeyDerivedAttestation_fc2} & 0xFFFF) ^ ${_defRegexFrame_3a8}), ${_stateKeyDerivedAttestation_fc2})` : (() => {
        function authenticatePush_984(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7070e31f-71058135]",
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
            throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
          }
          return _h;
        }
        const __keystoreQuorum_984 = authenticatePush_984(1856936015, 1141507243, 1705724101, 1511042681);
        if ((__keystoreQuorum_984 & 255) !== 214) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _SyferitEngineDelta_317 = 1552421816 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 14164, 29749);
    const _enclaveDigest_5d2 = pythonCode.split(/\r?\n/);
    const _PythonTransformerAttestation_e5f = [];
    let _customDictionaryCheck_1e0 = -(623393066 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 20105, 13679));
    let _codeProof_70a = 755497935 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 28969, 20835);
    while (_codeProof_70a < _enclaveDigest_5d2.length && (/^\s*#!/.test(_enclaveDigest_5d2[_codeProof_70a]) || /^\s*#\s*-\*-/.test(_enclaveDigest_5d2[_codeProof_70a]) || /^\s*from\s+__future__\s+import\b/.test(_enclaveDigest_5d2[_codeProof_70a]) || /^\s*$/.test(_enclaveDigest_5d2[_codeProof_70a]))) {
      _codeProof_70a++;
    }
    if (_codeProof_70a < _enclaveDigest_5d2.length && /^\s*("""|''')/.test(_enclaveDigest_5d2[_codeProof_70a])) {
      const quoteType = _enclaveDigest_5d2[_codeProof_70a].match(/^\s*("""|''')/)[313796648 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 16799, 6483)];
      const trimmedFirst = _enclaveDigest_5d2[_codeProof_70a].trim();
      _enclaveDigest_5d2[_codeProof_70a] = '';
      if (!trimmedFirst.slice(948031312 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 5827, 15805)).includes(quoteType)) {
        _codeProof_70a++;
        while (_codeProof_70a < _enclaveDigest_5d2.length) {
          const cur = _enclaveDigest_5d2[_codeProof_70a];
          _enclaveDigest_5d2[_codeProof_70a] = '';
          if (cur.includes(quoteType)) break;
          _codeProof_70a++;
        }
      }
    }
    for (let i = 352358855 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 22465, 8035); i < _enclaveDigest_5d2.length; i++) {
      let line = _enclaveDigest_5d2[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = 611454836 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 27808, 16567); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (1215939248 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 4979, 19791))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (938500344 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 25469, 22921))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(1794131378 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 9618, 32279), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _SyferitEngineDelta_317++;
        const defIndent = defMatch[1175985533 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 28384, 31373)];
        _customDictionaryCheck_1e0 = defIndent.length;
        const bodyIndent = `${defIndent}    `;
        _PythonTransformerAttestation_e5f.push(line);
        while (i + (819607761 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 8796, 14369)) < _enclaveDigest_5d2.length && /^\s*$/.test(_enclaveDigest_5d2[i + (291683684 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 30949, 8605))])) {
          i++;
        }
        if (i + (1009000441 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 22260, 23121)) < _enclaveDigest_5d2.length && /^\s*("""|''')/.test(_enclaveDigest_5d2[i + (1443195265 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 12556, 27433))])) {
          const quoteType = _enclaveDigest_5d2[i + (260601991 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 22242, 5973))].match(/^\s*("""|''')/)[2040797727 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 3938, 32681)];
          i++;
          const trimmedDoc = _enclaveDigest_5d2[i].trim();
          if (!trimmedDoc.slice(982730530 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 23023, 23211)).includes(quoteType)) {
            while (i + (1291923170 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 23969, 31311)) < _enclaveDigest_5d2.length) {
              i++;
              if (_enclaveDigest_5d2[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__keystoreDigest_9d6b & 255) - 140) | 898171798 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 32101, 27007);
        const c1 = (1022096696 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 28933, 28209) ^ mask) >>> (1515908079 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 12255, 28021));
        const c2 = (mask ^ _certificateFrame_c6) >>> (230877759 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 14457, 4579));
        _PythonTransformerAttestation_e5f.push(`${bodyIndent}${_stateKeyDerivedAttestation_fc2} = ${_quorumFrame_6b7}(${_tpmFrame_463[501100320 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 19372, 10689)]}, ${_tpmFrame_463[541103624 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 17599, 11475)]}, ${_tpmFrame_463[747545285 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 12387, 14249)]}, ${_tpmFrame_463[1425457927 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 13008, 26983)]})`);
        _PythonTransformerAttestation_e5f.push(`${bodyIndent}if not ${_nonceCheck_7e6}(${_stateKeyDerivedAttestation_fc2}, ${c1}, ${c2}): return ${_pushBank_834}(${_stateKeyDerivedAttestation_fc2})`);
        continue;
      }
      if (line.trim().length > (926183160 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 2308, 14735)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 29 | 1, (line.trim().length | 0) ^ 29 | 1), Math.imul((line.trim().length | 0) ^ 29 | 1, (line.trim().length | 0) ^ 29 | 1)) & 15 ^ (__keystoreDigest_9d6b >>> 4 & 255 ^ 191)) === 112) {
        const indent = line.match(/^(\s*)/)[(64618 ^ __keystoreDigest_9d6b & 65535) / (16021 ^ __keystoreDigest_9d6b >>> 16 & 65535)].length;
        if (indent <= _customDictionaryCheck_1e0) {
          _customDictionaryCheck_1e0 = -((64618 ^ __keystoreDigest_9d6b & 65535) / (16021 ^ __keystoreDigest_9d6b >>> 16 & 65535));
        }
      } else if (line.trim().length > (715073733 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 1265, 11241)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 28 | 1, (line.trim().length | 0) ^ 28 | 1), Math.imul((line.trim().length | 0) ^ 28 | 1, (line.trim().length | 0) ^ 28 | 1)) & 15 ^ (__keystoreDigest_9d6b >>> 6 & 255 ^ 208)) === 35) {
        const indent = line.match(/^(\s*)/)[1354063394 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 21201, 30335)].length;
        if (indent <= _customDictionaryCheck_1e0) {
          _customDictionaryCheck_1e0 = -(537264051 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 3538, 8695));
        }
      } else if (line.trim().length > (850115806 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 21125, 19081)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 49 | 1, (line.trim().length | 0) ^ 49 | 1), Math.imul((line.trim().length | 0) ^ 49 | 1, (line.trim().length | 0) ^ 49 | 1)) & 15 ^ (__keystoreDigest_9d6b >>> 13 & 255 ^ 207)) === 41) {
        const indent = line.match(/^(\s*)/)[(64620 ^ __keystoreDigest_9d6b & 65535) / (16021 ^ __keystoreDigest_9d6b >>> 16 & 65535)].length;
        if (indent <= _customDictionaryCheck_1e0) {
          _customDictionaryCheck_1e0 = -((64620 ^ __keystoreDigest_9d6b & 65535) / (16021 ^ __keystoreDigest_9d6b >>> 16 & 65535));
        }
      }
      if (_customDictionaryCheck_1e0 >= (542101464 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 31140, 15903)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _tpmVector_e4d(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function validatePythonTransformer_8354(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:55a00a03-87340ff0]",
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
          const __defRegexState_8354 = validatePythonTransformer_8354(938966603, 1557042425, 1988953185, 381014467);
          const _certificateFrame_957 = parseInt(numStr, 1314867510 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 13448, 25679));
          const _trimDigest_e30 = (_certificateFrame_c6 & (907384337 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 14482, 18073))) >>> (829334116 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 30256, 23351));
          const _quorumFrame_e9d = _trimDigest_e30 ^ this.prng.nextRange(1186594661 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 16953, 24305), 1083843292 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 6079, 18001));
          const _baseLegalNoticeEnvelope_83b = _certificateFrame_957 ^ _quorumFrame_e9d;
          const _seedUsedBank_86e = _quorumFrame_e9d ^ _trimDigest_e30;
          return (__defRegexState_8354 & 255) === 90 ? `${prefix}(${_baseLegalNoticeEnvelope_83b} ^ ((${_stateKeyDerivedAttestation_fc2} & 0xFFFF) ^ ${_seedUsedBank_86e}))` : (() => {
            function verifyProprietaryEnclaveContext_96c9(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:41a6e091-65f29ac1]",
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
            const __seedUsedState_96c9 = verifyProprietaryEnclaveContext_96c9(738860283, 1138314213, 1512852185, 992124099);
            if ((__seedUsedState_96c9 & 255) !== 196) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _PythonTransformerAttestation_e5f.push(modifiedLine);
      } else {
        _PythonTransformerAttestation_e5f.push(line);
      }
    }
    if (_SyferitEngineDelta_317 === (832760415 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 16197, 16615))) {
      return {
        code: pythonCode,
        transformedCount: 294539916 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 24568, 7039),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 767056785 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 3853, 12305)
      };
    }
    if (_nonceAttestation_509.length < (439130561 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 5941, 7277))) {
      for (const decoyStr of _inoculationInjectedFrame_396.decoyTierStrings.slice(1140027240 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 22372, 25905), 1649937889 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 3863, 26457))) {
        _tpmVector_e4d(decoyStr);
      }
    }
    const _defRegexFrame_ed0 = _harvestedProof_d1b.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _lengthFrame_6d4 = _baseLegalNoticeEnvelope_c17.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _enclaveBank_5c = JSON.stringify(_nonceAttestation_509);
    const _nonceScalar_48 = this.prng.nextUint32() & 2147483646 + ((__keystoreDigest_9d6b & 255) - 140) | 1909187736 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 4281, 31573);
    const _nonceEnvelope_7a = (1415610332 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 5161, 23769) ^ _nonceScalar_48) >>> (555410461 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 5519, 9311));
    const _trimDigest_34c = (_nonceScalar_48 ^ _certificateFrame_c6) >>> (610502174 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 20802, 13721));
    const _transformedCountDigest_559 = [`# [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_nonceFrame_2f6} = "${_defRegexFrame_ed0}"`, `${_enclaveReg_7d4} = ${_enclaveBank_5c}`, ``, `def ${_quorumFrame_6b7}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_nonceFrame_2f6}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_ProprietaryEnclaveDelta_b98}:`, `        raise RuntimeError("${_lengthFrame_6d4}")`, `    return _h`, ``, `def ${_SeededPRNGBank_5e1}(_slot, _k):`, `    _row = ${_enclaveReg_7d4}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_generateCryptoSeedVector_ba5}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_nonceCheck_7e6}(_k, _c1, _c2):`, `    _u = (_k | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_pushBank_834}(_k):`, `    return ${_generateCryptoSeedVector_ba5}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``, `${_stateKeyDerivedAttestation_fc2} = ${_quorumFrame_6b7}(${_tpmFrame_463[487316068 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 26920, 12721)]}, ${_tpmFrame_463[461512452 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 15547, 9379)]}, ${_tpmFrame_463[1444899773 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 17585, 30635)]}, ${_tpmFrame_463[747768974 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 8973, 13069)]})`, `if not ${_nonceCheck_7e6}(${_stateKeyDerivedAttestation_fc2}, ${_nonceEnvelope_7a}, ${_trimDigest_34c}):`, `    raise RuntimeError("${_lengthFrame_6d4}")`, ``].join('\n');
    let _seedDigest_443 = 1469930253 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 11789, 27277);
    while (_seedDigest_443 < _PythonTransformerAttestation_e5f.length && (/^\s*#!/.test(_PythonTransformerAttestation_e5f[_seedDigest_443]) || /^\s*#\s*-\*-/.test(_PythonTransformerAttestation_e5f[_seedDigest_443]) || /^\s*from\s+__future__\s+import\b/.test(_PythonTransformerAttestation_e5f[_seedDigest_443]))) {
      _seedDigest_443++;
    }
    const _certificateBank_854 = [..._PythonTransformerAttestation_e5f.slice(753568255 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 1355, 11785), _seedDigest_443), _transformedCountDigest_559, ..._PythonTransformerAttestation_e5f.slice(_seedDigest_443)];
    return (__keystoreDigest_9d6b & 255) === 140 ? {
      code: _certificateBank_854.join('\n'),
      transformedCount: _SyferitEngineDelta_317,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _certificateFrame_c6 >>> (367818815 ^ Math.imul(__keystoreDigest_9d6b & 65535 ^ 28743, 10205))
    } : (() => {
      function isolateEnclaveDigest_7777(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:226eff1d-59a31b62]",
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
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __seedState_7777 = isolateEnclaveDigest_7777(388177009, 638076435, 1749138873, 92093463);
      if ((__seedState_7777 & 255) !== 26) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function synchronizeNonceContext_d938(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:22dcf686-10db1cef]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __nonceFrame_d938 = synchronizeNonceContext_d938(1552610721, 1331514125, 1195622747, 418831121);
  const _execEnvelope_4ac = new PythonTransformer(options);
  return (__nonceFrame_d938 & 255) === 117 ? _execEnvelope_4ac.transform(pythonCode) : (() => {
    function isolateSeedUsed_a84(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:60f87f98-b7e4d4f1]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __nonceFrame_a84 = isolateSeedUsed_a84(1318217839, 1628299407, 1664225285, 1711511071);
    if ((__nonceFrame_a84 & 255) !== 42) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_7798 && window.__syferitIPC_7798.invoke && window.__syferitIPC_7798.invoke("auth:session-lease-sync", {
    syncEpoch: 179591460,
    channelSig: "SIG_FRAME_7798"
  });
}