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
    function attestSeed_9ce5(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f70a89b8-572ccac1]",
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
    const __execState_9ce5 = attestSeed_9ce5(1494414533, 1520359399, 2117488849, 1955865877);
    const _tpmVector_9ce5 = [[132, 228, 40, 144, 23, 118, 184, 26, 108, 214, 50, 120, 209, 40], [104, 213, 28, 96, 204, 43, 142, 244, 81, 182, 230], [84, 187, 251, 79, 183, 25, 81, 215, 42, 152], [37, 155, 213, 60], [30, 113, 173, 17, 125, 195, 31, 97, 208, 34], [211, 39, 159, 245, 81]];
    function _normalizeQuorumVector_9ce5(_slot) {
      const _row = _tpmVector_9ce5[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__execState_9ce5 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _normalizeQuorumVector_9ce5(514191775 ^ Math.imul(__execState_9ce5 & 65535 ^ 8768, 29257)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 112 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 112 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 112 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 112 | 1)) & 15 ^ (__execState_9ce5 >>> 9 & 255 ^ 87)) === 231) {
      return {
        code: pythonCode,
        transformedCount: (26231 ^ __execState_9ce5 & 65535) / (28979 ^ __execState_9ce5 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (26213 ^ __execState_9ce5 & 65535) / (28979 ^ __execState_9ce5 >>> 16 & 65535)
      };
    } else if (this.options.mode === _normalizeQuorumVector_9ce5(113409080 ^ Math.imul(__execState_9ce5 & 65535 ^ 18826, 9341)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 52 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 52 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 52 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 52 | 1)) & 15 ^ (__execState_9ce5 >>> 0 & 255 ^ 210)) === 52) {
      return {
        code: pythonCode,
        transformedCount: 355370946 ^ Math.imul(__execState_9ce5 & 65535 ^ 19925, 32137),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 61126884 ^ Math.imul(__execState_9ce5 & 65535 ^ 31299, 8337)
      };
    } else if (this.options.mode === _normalizeQuorumVector_9ce5(178288064 ^ Math.imul(__execState_9ce5 & 65535 ^ 3697, 6659)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 26 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 26 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 26 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 26 | 1)) & 15 ^ (__execState_9ce5 >>> 22 & 255 ^ 80)) === 146) {
      return {
        code: pythonCode,
        transformedCount: (26231 ^ __execState_9ce5 & 65535) / (28979 ^ __execState_9ce5 >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (25793 ^ __execState_9ce5 & 65535) / (28979 ^ __execState_9ce5 >>> 16 & 65535)
      };
    }
    const _startsWithBank_728 = [];
    const _transformedCountEnvelope_d06 = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _signatureCheck_d21;
    while ((_signatureCheck_d21 = _transformedCountEnvelope_d06.exec(pythonCode)) !== null) {
      if (_signatureCheck_d21[230121253 ^ Math.imul(__execState_9ce5 & 65535 ^ 18243, 26721)] && _signatureCheck_d21[196134168 ^ Math.imul(__execState_9ce5 & 65535 ^ 18560, 16511)].length >= (171091601 ^ Math.imul(__execState_9ce5 & 65535 ^ 13270, 7845)) && !_signatureCheck_d21[584807768 ^ Math.imul(__execState_9ce5 & 65535 ^ 6522, 17901)].startsWith('__')) {
        _startsWithBank_728.push(_signatureCheck_d21[181490609 ^ Math.imul(__execState_9ce5 & 65535 ^ 18711, 14789)]);
      }
    }
    const _lengthBank_ae = buildPolymorphicDictionary(this.options.domainProfile ?? _normalizeQuorumVector_9ce5(252985569 ^ Math.imul(__execState_9ce5 & 65535 ^ 841, 9719)), this.prng, _startsWithBank_728, this.options.customDictionary ?? []);
    const _tokenProof_2ff = this.prng.pick(_lengthBank_ae.legalInoculations);
    const _tokenEnvelope_fcc = `${this.prng.nextUint32().toString(192298876 ^ Math.imul(__execState_9ce5 & 65535 ^ 22115, 15483)).padStart(139132122 ^ Math.imul(__execState_9ce5 & 65535 ^ 28969, 22831), '0')}-${this.prng.nextUint32().toString(235766680 ^ Math.imul(__execState_9ce5 & 65535 ^ 11599, 12173)).padStart(107072126 ^ Math.imul(__execState_9ce5 & 65535 ^ 9553, 6177), '0')}`;
    const _mathCoreBank_b93 = `${_tokenProof_2ff} [ATTESTATION_ID:${_tokenEnvelope_fcc}]`;
    const _generateCryptoSeedProof_b87 = (this.prng.nextUint32() & (135254314 ^ Math.imul(__execState_9ce5 & 65535 ^ 30266, 31321))).toString(136341327 ^ Math.imul(__execState_9ce5 & 65535 ^ 11298, 7123));
    const _signatureDigest_66e = `_${this.prng.pick(_lengthBank_ae.stateKeys).replace(/^_+/, '')}_attestation_${_generateCryptoSeedProof_b87}`;
    const _WasmMathCoreDigest_a97 = `_${this.prng.pick(_lengthBank_ae.symbols)}_${_generateCryptoSeedProof_b87}`;
    const _pushAttestation_2ce = `_${this.prng.pick(_lengthBank_ae.stateKeys).replace(/^_+/, '')}_${_generateCryptoSeedProof_b87}`;
    const _seedUsedAttestation_9a6 = `_enclave_matrix_${_generateCryptoSeedProof_b87}`;
    const _SeededPRNGFrame_d40 = `_unseal_slot_${_generateCryptoSeedProof_b87}`;
    const _nonceVector_e90 = `_verify_quorum_${_generateCryptoSeedProof_b87}`;
    const _keystoreVector_252 = `_fold_carry_${_generateCryptoSeedProof_b87}`;
    const _execDigest_2ad = `_${this.prng.pick(_lengthBank_ae.symbols)}_decoy_${_generateCryptoSeedProof_b87}`;
    const _quorumCheck_cba = [this.prng.nextUint32() & 2147483646 + ((__execState_9ce5 & 255) - 231) | 25766300 ^ Math.imul(__execState_9ce5 & 65535 ^ 25880, 25187), this.prng.nextUint32() & 2147483646 + ((__execState_9ce5 & 255) - 231) | 735041711 ^ Math.imul(__execState_9ce5 & 65535 ^ 3521, 26797), this.prng.nextUint32() & 2147483646 + ((__execState_9ce5 & 255) - 231) | 241271456 ^ Math.imul(__execState_9ce5 & 65535 ^ 8540, 13139), this.prng.nextUint32() & 2147483646 + ((__execState_9ce5 & 255) - 231) | 621366434 ^ Math.imul(__execState_9ce5 & 65535 ^ 5966, 21355)];
    const _tpmVector_6ff = this.mathCore.computeStringKey(_mathCoreBank_b93, _quorumCheck_cba);
    const _constructorVector_742 = _tpmVector_6ff >>> (684828631 ^ Math.imul(__execState_9ce5 & 65535 ^ 3860, 25249)) & (200333822 ^ Math.imul(__execState_9ce5 & 65535 ^ 31496, 26143));
    const _trimVector_cc = this.prng.pick(_lengthBank_ae.assertions);
    const _SoltrixStudiosDelta_3b = [];
    const _quorumDigest_74f = rawStr => {
      function isolateExec_7a8e(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:6523d28c-2d24c507]",
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
      const __keystoreProof_7a8e = isolateExec_7a8e(1359388181, 1783939167, 1107915383, 2046372321);
      const _keystoreVector_f78 = _SoltrixStudiosDelta_3b.length;
      const _startsWithBank_ea9 = rawStr.split('').map((ch, charIdx) => {
        function validateQuorumDigest_7a7a(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:40187790-cfb2bdba]",
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
            throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
          }
          return _h;
        }
        const __generateCryptoSeedState_7a7a = validateQuorumDigest_7a7a(1854584481, 2080601773, 808903859, 1307306883);
        const _codeProof_2ac = (_tpmVector_6ff >>> (charIdx & (959108136 ^ Math.imul(__execState_9ce5 & 65535 ^ 7842, 31151))) * (433904191 ^ Math.imul(__execState_9ce5 & 65535 ^ 22728, 27257))) + Math.imul(charIdx + _keystoreVector_f78, 264435175 ^ Math.imul(__execState_9ce5 & 65535 ^ 12293, 11889)) & (82733487 ^ Math.imul(__execState_9ce5 & 65535 ^ 27895, 32117));
        return (__generateCryptoSeedState_7a7a & 255) === 200 ? (ch.charCodeAt(375682905 ^ Math.imul(__execState_9ce5 & 65535 ^ 3036, 13435)) ^ _codeProof_2ac) & (725905324 ^ Math.imul(__execState_9ce5 & 65535 ^ 5712, 25157)) : (() => {
          function authenticatePythonCode_99d0(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ec0283f3-c1ed465b]",
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
          const __SyferitEngineQuorum_99d0 = authenticatePythonCode_99d0(1189803085, 1846159057, 475709781, 1032893683);
          if ((__SyferitEngineQuorum_99d0 & 255) !== 240) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _SoltrixStudiosDelta_3b.push(_startsWithBank_ea9);
      const _SyferitEngineDelta_ede = _tpmVector_6ff & (213834824 ^ Math.imul(__execState_9ce5 & 65535 ^ 9358, 12575)) ^ this.prng.nextRange(4168805 ^ Math.imul(__execState_9ce5 & 65535 ^ 26190, 24669), 319700764 ^ Math.imul(__execState_9ce5 & 65535 ^ 21218, 24007));
      const _transformVector_eb3 = _keystoreVector_f78 ^ _SyferitEngineDelta_ede;
      const _quorumCheck_ed0 = _SyferitEngineDelta_ede ^ _tpmVector_6ff & (192388569 ^ Math.imul(__execState_9ce5 & 65535 ^ 31325, 26159));
      return (__keystoreProof_7a8e & 255) === 118 ? `${_SeededPRNGFrame_d40}(${_transformVector_eb3} ^ ((${_pushAttestation_2ce} & 0xFFFF) ^ ${_quorumCheck_ed0}), ${_pushAttestation_2ce})` : (() => {
        function rotateMode_dbca(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:15e87401-dfed4fb3]",
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
        const __PythonTransformerState_dbca = rotateMode_dbca(89266325, 1736928625, 608165475, 752356543);
        if ((__PythonTransformerState_dbca & 255) !== 176) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _hashStringCheck_9db = 260099697 ^ Math.imul(__execState_9ce5 & 65535 ^ 12188, 13827);
    const _SyferitEngineDelta_ec8 = pythonCode.split(/\r?\n/);
    const _seedFrame_284 = [];
    let _getInstanceFrame_1aa = -(767120887 ^ Math.imul(__execState_9ce5 & 65535 ^ 2549, 26979));
    let _signatureBank_55e = 617041841 ^ Math.imul(__execState_9ce5 & 65535 ^ 6380, 19123);
    while (_signatureBank_55e < _SyferitEngineDelta_ec8.length && (/^\s*#!/.test(_SyferitEngineDelta_ec8[_signatureBank_55e]) || /^\s*#\s*-\*-/.test(_SyferitEngineDelta_ec8[_signatureBank_55e]) || /^\s*from\s+__future__\s+import\b/.test(_SyferitEngineDelta_ec8[_signatureBank_55e]) || /^\s*$/.test(_SyferitEngineDelta_ec8[_signatureBank_55e]))) {
      _signatureBank_55e++;
    }
    if (_signatureBank_55e < _SyferitEngineDelta_ec8.length && /^\s*("""|''')/.test(_SyferitEngineDelta_ec8[_signatureBank_55e])) {
      const quoteType = _SyferitEngineDelta_ec8[_signatureBank_55e].match(/^\s*("""|''')/)[942369834 ^ Math.imul(__execState_9ce5 & 65535 ^ 5072, 31405)];
      const trimmedFirst = _SyferitEngineDelta_ec8[_signatureBank_55e].trim();
      _SyferitEngineDelta_ec8[_signatureBank_55e] = '';
      if (!trimmedFirst.slice(137418605 ^ Math.imul(__execState_9ce5 & 65535 ^ 28877, 24219)).includes(quoteType)) {
        _signatureBank_55e++;
        while (_signatureBank_55e < _SyferitEngineDelta_ec8.length) {
          const cur = _SyferitEngineDelta_ec8[_signatureBank_55e];
          _SyferitEngineDelta_ec8[_signatureBank_55e] = '';
          if (cur.includes(quoteType)) break;
          _signatureBank_55e++;
        }
      }
    }
    for (let i = 154932020 ^ Math.imul(__execState_9ce5 & 65535 ^ 32363, 24655); i < _SyferitEngineDelta_ec8.length; i++) {
      let line = _SyferitEngineDelta_ec8[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = 623629137 ^ Math.imul(__execState_9ce5 & 65535 ^ 15334, 26193); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (520405772 ^ Math.imul(__execState_9ce5 & 65535 ^ 22940, 32023))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (246494895 ^ Math.imul(__execState_9ce5 & 65535 ^ 22317, 19339))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(504960250 ^ Math.imul(__execState_9ce5 & 65535 ^ 14077, 24625), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _hashStringCheck_9db++;
        const defIndent = defMatch[192879202 ^ Math.imul(__execState_9ce5 & 65535 ^ 29002, 31823)];
        _getInstanceFrame_1aa = defIndent.length;
        const bodyIndent = `${defIndent}    `;
        _seedFrame_284.push(line);
        while (i + (493629067 ^ Math.imul(__execState_9ce5 & 65535 ^ 5189, 16821)) < _SyferitEngineDelta_ec8.length && /^\s*$/.test(_SyferitEngineDelta_ec8[i + (38366033 ^ Math.imul(__execState_9ce5 & 65535 ^ 31255, 5179))])) {
          i++;
        }
        if (i + (200640241 ^ Math.imul(__execState_9ce5 & 65535 ^ 32695, 30963)) < _SyferitEngineDelta_ec8.length && /^\s*("""|''')/.test(_SyferitEngineDelta_ec8[i + (128130663 ^ Math.imul(__execState_9ce5 & 65535 ^ 16629, 13147))])) {
          const quoteType = _SyferitEngineDelta_ec8[i + (481978712 ^ Math.imul(__execState_9ce5 & 65535 ^ 9426, 28437))].match(/^\s*("""|''')/)[513856927 ^ Math.imul(__execState_9ce5 & 65535 ^ 4653, 17187)];
          i++;
          const trimmedDoc = _SyferitEngineDelta_ec8[i].trim();
          if (!trimmedDoc.slice(537348183 ^ Math.imul(__execState_9ce5 & 65535 ^ 699, 20915)).includes(quoteType)) {
            while (i + (219245489 ^ Math.imul(__execState_9ce5 & 65535 ^ 19127, 19327)) < _SyferitEngineDelta_ec8.length) {
              i++;
              if (_SyferitEngineDelta_ec8[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__execState_9ce5 & 255) - 231) | 31102773 ^ Math.imul(__execState_9ce5 & 65535 ^ 25107, 24529);
        const c1 = (59446641 ^ Math.imul(__execState_9ce5 & 65535 ^ 27543, 17281) ^ mask) >>> (3900725 ^ Math.imul(__execState_9ce5 & 65535 ^ 25978, 4217));
        const c2 = (mask ^ _tpmVector_6ff) >>> (117111145 ^ Math.imul(__execState_9ce5 & 65535 ^ 30246, 27305));
        _seedFrame_284.push(`${bodyIndent}${_pushAttestation_2ce} = ${_WasmMathCoreDigest_a97}(${_quorumCheck_cba[479926265 ^ Math.imul(__execState_9ce5 & 65535 ^ 10236, 28795)]}, ${_quorumCheck_cba[251747437 ^ Math.imul(__execState_9ce5 & 65535 ^ 21787, 18917)]}, ${_quorumCheck_cba[539915994 ^ Math.imul(__execState_9ce5 & 65535 ^ 16287, 23573)]}, ${_quorumCheck_cba[57523903 ^ Math.imul(__execState_9ce5 & 65535 ^ 26771, 15547)]})`);
        _seedFrame_284.push(`${bodyIndent}if not ${_nonceVector_e90}(${_pushAttestation_2ce}, ${c1}, ${c2}): return ${_execDigest_2ad}(${_pushAttestation_2ce})`);
        continue;
      }
      if (line.trim().length > (673710289 ^ Math.imul(__execState_9ce5 & 65535 ^ 15918, 29641)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 47 | 1, (line.trim().length | 0) ^ 47 | 1), Math.imul((line.trim().length | 0) ^ 47 | 1, (line.trim().length | 0) ^ 47 | 1)) & 15 ^ (__execState_9ce5 >>> 4 & 255 ^ 53)) === 80) {
        const indent = line.match(/^(\s*)/)[(26113 ^ __execState_9ce5 & 65535) / (28979 ^ __execState_9ce5 >>> 16 & 65535)].length;
        if (indent <= _getInstanceFrame_1aa) {
          _getInstanceFrame_1aa = -((26113 ^ __execState_9ce5 & 65535) / (28979 ^ __execState_9ce5 >>> 16 & 65535));
        }
      } else if (line.trim().length > (269206350 ^ Math.imul(__execState_9ce5 & 65535 ^ 22085, 21623)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 74 | 1, (line.trim().length | 0) ^ 74 | 1), Math.imul((line.trim().length | 0) ^ 74 | 1, (line.trim().length | 0) ^ 74 | 1)) & 15 ^ (__execState_9ce5 >>> 16 & 255 ^ 50)) === 200) {
        const indent = line.match(/^(\s*)/)[103873962 ^ Math.imul(__execState_9ce5 & 65535 ^ 31440, 14381)].length;
        if (indent <= _getInstanceFrame_1aa) {
          _getInstanceFrame_1aa = -(315525560 ^ Math.imul(__execState_9ce5 & 65535 ^ 2788, 11411));
        }
      } else if (line.trim().length > (388207822 ^ Math.imul(__execState_9ce5 & 65535 ^ 15134, 16137)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 55 | 1, (line.trim().length | 0) ^ 55 | 1), Math.imul((line.trim().length | 0) ^ 55 | 1, (line.trim().length | 0) ^ 55 | 1)) & 15 ^ (__execState_9ce5 >>> 1 & 255 ^ 113)) === 5) {
        const indent = line.match(/^(\s*)/)[(26119 ^ __execState_9ce5 & 65535) / (28979 ^ __execState_9ce5 >>> 16 & 65535)].length;
        if (indent <= _getInstanceFrame_1aa) {
          _getInstanceFrame_1aa = -((26119 ^ __execState_9ce5 & 65535) / (28979 ^ __execState_9ce5 >>> 16 & 65535));
        }
      }
      if (_getInstanceFrame_1aa >= (399791631 ^ Math.imul(__execState_9ce5 & 65535 ^ 20546, 28579)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _quorumDigest_74f(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function rotateTransform_496d(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b7839a01-afbc1580]",
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
          const __baseLegalNoticeState_496d = rotateTransform_496d(1796380485, 761720207, 1206857367, 122084025);
          const _tpmVector_31b = parseInt(numStr, 779130565 ^ Math.imul(__execState_9ce5 & 65535 ^ 7420, 24925));
          const _lengthBank_395 = (_tpmVector_6ff & (241770547 ^ Math.imul(__execState_9ce5 & 65535 ^ 1995, 9721))) >>> (254739625 ^ Math.imul(__execState_9ce5 & 65535 ^ 1528, 10039));
          const _constructorVector_fa4 = _lengthBank_395 ^ this.prng.nextRange(97397366 ^ Math.imul(__execState_9ce5 & 65535 ^ 17673, 10589), 13375795 ^ Math.imul(__execState_9ce5 & 65535 ^ 26411, 29121));
          const _quorumCheck_649 = _tpmVector_31b ^ _constructorVector_fa4;
          const _signatureCheck_691 = _constructorVector_fa4 ^ _lengthBank_395;
          return (__baseLegalNoticeState_496d & 255) === 91 ? `${prefix}(${_quorumCheck_649} ^ ((${_pushAttestation_2ce} & 0xFFFF) ^ ${_signatureCheck_691}))` : (() => {
            function authenticatePythonCode_c6eb(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:59294dbf-a3c2dc78]",
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
                throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
              }
              return _h;
            }
            const __tokenVector_c6eb = authenticatePythonCode_c6eb(75640477, 1780765065, 1658188249, 1266147251);
            if ((__tokenVector_c6eb & 255) !== 38) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _seedFrame_284.push(modifiedLine);
      } else {
        _seedFrame_284.push(line);
      }
    }
    if (_hashStringCheck_9db === (529350286 ^ Math.imul(__execState_9ce5 & 65535 ^ 10441, 26449))) {
      return {
        code: pythonCode,
        transformedCount: 325306839 ^ Math.imul(__execState_9ce5 & 65535 ^ 23536, 20801),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 261954030 ^ Math.imul(__execState_9ce5 & 65535 ^ 18909, 21667)
      };
    }
    if (_SoltrixStudiosDelta_3b.length < (740024005 ^ Math.imul(__execState_9ce5 & 65535 ^ 5966, 25433))) {
      for (const decoyStr of _lengthBank_ae.decoyTierStrings.slice(331845405 ^ Math.imul(__execState_9ce5 & 65535 ^ 9130, 18705), 55463674 ^ Math.imul(__execState_9ce5 & 65535 ^ 27183, 16951))) {
        _quorumDigest_74f(decoyStr);
      }
    }
    const _inoculationInjectedProof_bd4 = _mathCoreBank_b93.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _pythonCodeAttestation_580 = _trimVector_cc.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _domainProfileProof_b38 = JSON.stringify(_SoltrixStudiosDelta_3b);
    const _transformVector_f88 = this.prng.nextUint32() & 2147483646 + ((__execState_9ce5 & 255) - 231) | 53887264 ^ Math.imul(__execState_9ce5 & 65535 ^ 30662, 12289);
    const _nonceScalar_a59 = (202559091 ^ Math.imul(__execState_9ce5 & 65535 ^ 1585, 8171) ^ _transformVector_f88) >>> (346270443 ^ Math.imul(__execState_9ce5 & 65535 ^ 8788, 19689));
    const _ProprietaryEnclaveDelta_5ca = (_transformVector_f88 ^ _tpmVector_6ff) >>> (8572800 ^ Math.imul(__execState_9ce5 & 65535 ^ 24935, 4465));
    const _baseLegalNoticeAttestation_2c1 = [`# [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_signatureDigest_66e} = "${_inoculationInjectedProof_bd4}"`, `${_seedUsedAttestation_9a6} = ${_domainProfileProof_b38}`, ``, `def ${_WasmMathCoreDigest_a97}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_signatureDigest_66e}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_constructorVector_742}:`, `        raise RuntimeError("${_pythonCodeAttestation_580}")`, `    return _h`, ``, `def ${_SeededPRNGFrame_d40}(_slot, _k):`, `    _row = ${_seedUsedAttestation_9a6}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_keystoreVector_252}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_nonceVector_e90}(_k, _c1, _c2):`, `    _u = (_k | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_execDigest_2ad}(_k):`, `    return ${_keystoreVector_252}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``, `${_pushAttestation_2ce} = ${_WasmMathCoreDigest_a97}(${_quorumCheck_cba[27071972 ^ Math.imul(__execState_9ce5 & 65535 ^ 25371, 17671)]}, ${_quorumCheck_cba[86534521 ^ Math.imul(__execState_9ce5 & 65535 ^ 31119, 10763)]}, ${_quorumCheck_cba[216492289 ^ Math.imul(__execState_9ce5 & 65535 ^ 22214, 17571)]}, ${_quorumCheck_cba[573397098 ^ Math.imul(__execState_9ce5 & 65535 ^ 13260, 26299)]})`, `if not ${_nonceVector_e90}(${_pushAttestation_2ce}, ${_nonceScalar_a59}, ${_ProprietaryEnclaveDelta_5ca}):`, `    raise RuntimeError("${_pythonCodeAttestation_580}")`, ``].join('\n');
    let _tokenVector_1ae = 130513988 ^ Math.imul(__execState_9ce5 & 65535 ^ 11107, 6577);
    while (_tokenVector_1ae < _seedFrame_284.length && (/^\s*#!/.test(_seedFrame_284[_tokenVector_1ae]) || /^\s*#\s*-\*-/.test(_seedFrame_284[_tokenVector_1ae]) || /^\s*from\s+__future__\s+import\b/.test(_seedFrame_284[_tokenVector_1ae]))) {
      _tokenVector_1ae++;
    }
    const _dictProof_fdd = [..._seedFrame_284.slice(514407362 ^ Math.imul(__execState_9ce5 & 65535 ^ 11973, 27857), _tokenVector_1ae), _baseLegalNoticeAttestation_2c1, ..._seedFrame_284.slice(_tokenVector_1ae)];
    return (__execState_9ce5 & 255) === 231 ? {
      code: _dictProof_fdd.join('\n'),
      transformedCount: _hashStringCheck_9db,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _tpmVector_6ff >>> (212841466 ^ Math.imul(__execState_9ce5 & 65535 ^ 11497, 11227))
    } : (() => {
      function isolateTokenVector_d656(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:eeb79d06-c35ee1b9]",
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
      const __tokenEnvelope_d656 = isolateTokenVector_d656(290324453, 872739629, 274520411, 85436507);
      if ((__tokenEnvelope_d656 & 255) !== 203) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function rotateStateKeyDerived_b54c(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6653c9f9-8f3a128d]",
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
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __dictState_b54c = rotateStateKeyDerived_b54c(1760768607, 1915704509, 592925405, 814004009);
  const _defRegexAttestation_466 = new PythonTransformer(options);
  return (__dictState_b54c & 255) === 56 ? _defRegexAttestation_466.transform(pythonCode) : (() => {
    function verifyEnclaveAttestation_3400(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:abffcc71-be7fb4dc]",
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
    const __tpmState_3400 = verifyEnclaveAttestation_3400(2012417105, 1511739979, 1275957507, 1961758319);
    if ((__tpmState_3400 & 255) !== 182) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_dad1 && window.__syferitIPC_dad1.invoke && window.__syferitIPC_dad1.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 857924976,
    channelSig: "SIG_FRAME_DAD1"
  });
}