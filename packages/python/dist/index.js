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
    function verifyTokenCheck_20b9(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3b0b6e77-c6f644e9]",
        _tokVec = [_tok0, _tok1, _tok2, _tok3],
        _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
      const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
      if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
      if ((_h >>> 4 & 15) !== 1) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __dictState_20b9 = verifyTokenCheck_20b9(2038030319, 1323350487, 220256965, 1579349521);
    function _auditTpmState_rns_20b9(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 251,
        _r2 = _u % 229,
        _r3 = _u % 241,
        _r4 = _u % 239;
      let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
        _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
        _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
        _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
      for (let _rnd = 0; _rnd < 2; _rnd++) {
        _v0 = _v0 + _v1 >>> 0;
        _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
        _v2 = _v2 + _v3 >>> 0;
        _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
        _v0 = _v0 + _v1 >>> 0;
        _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
        _v2 = _v2 + _v3 >>> 0;
        _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
        if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
      }
      return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
    }
    function _reconcileKeystoreQuorum_vm_20b9(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 156) {
          _stk.push((__dictState_20b9 >>> 0) % _a ^ _b);
        } else if (_op === 182) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 54) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 108) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _stateKeyDerivedFrame_20b9 = [[122, 189, 128, 25, 193, 23, 250, 121, 52, 158], [32, 157, 111, 196, 180, 227, 221, 88, 9, 78, 53], [26, 126, 95, 170, 152], [253, 35, 2, 152], [214, 9, 252, 117, 53, 139, 110, 205, 168, 234], [171, 239, 204, 89, 9]];
    function _auditTrim_20b9(_slot) {
      const _row = _stateKeyDerivedFrame_20b9[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__dictState_20b9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _auditTrim_20b9(453322977 ^ _auditTpmState_rns_20b9(__dictState_20b9, 16425)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 36 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 36 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 36 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 36 | 1)) & 15 ^ _auditTpmState_rns_20b9(__dictState_20b9, 10979) & 255) === 188) {
      return {
        code: pythonCode,
        transformedCount: (17635 ^ _auditTpmState_rns_20b9(__dictState_20b9, 24193) & 65535) / (55280 ^ _auditTpmState_rns_20b9(__dictState_20b9, 24193) >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (15743 ^ _auditTpmState_rns_20b9(__dictState_20b9, 3463) & 65535) / (17895 ^ _auditTpmState_rns_20b9(__dictState_20b9, 3463) >>> 16 & 65535)
      };
    } else if (this.options.mode === _auditTrim_20b9(-1126532524 ^ _auditTpmState_rns_20b9(__dictState_20b9, 22237)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 84 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 84 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 84 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 84 | 1)) & 15 ^ _auditTpmState_rns_20b9(__dictState_20b9, 3089) & 255) === 84) {
      return {
        code: pythonCode,
        transformedCount: _reconcileKeystoreQuorum_vm_20b9([156, 211, 18399, 182, 7, 0, 156, 251, 7071, 108, 0, 0, 156, 211, 2359154, 54, 0, 0]),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: _reconcileKeystoreQuorum_vm_20b9([156, 211, 20178, 182, 8, 0, 156, 251, 7399, 108, 0, 0, 156, 211, 5169418, 54, 0, 0])
      };
    } else if (this.options.mode === _auditTrim_20b9(-869890157 ^ _auditTpmState_rns_20b9(__dictState_20b9, 3957)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 72 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 72 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 72 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 72 | 1)) & 15 ^ _auditTpmState_rns_20b9(__dictState_20b9, 24085) & 255) === 54) {
      return {
        code: pythonCode,
        transformedCount: (12911 ^ _auditTpmState_rns_20b9(__dictState_20b9, 19275) & 65535) / (58464 ^ _auditTpmState_rns_20b9(__dictState_20b9, 19275) >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (50053 ^ _auditTpmState_rns_20b9(__dictState_20b9, 1779) & 65535) / (49628 ^ _auditTpmState_rns_20b9(__dictState_20b9, 1779) >>> 16 & 65535)
      };
    }
    const _transformedCountFrame_aa9 = [];
    const _customDictionaryEnvelope_2c5 = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _SyferitEngineDelta_ff9;
    while ((_SyferitEngineDelta_ff9 = _customDictionaryEnvelope_2c5.exec(pythonCode)) !== null) {
      if (_SyferitEngineDelta_ff9[_reconcileKeystoreQuorum_vm_20b9([156, 211, 29649, 182, 12, 0, 156, 251, 25427, 108, 0, 0, 156, 211, 121422783, 54, 0, 0])] && _SyferitEngineDelta_ff9[_reconcileKeystoreQuorum_vm_20b9([156, 211, 25523, 182, 12, 0, 156, 251, 24980, 108, 0, 0, 156, 211, 104505720, 54, 0, 0])].length >= (-1081743263 ^ _auditTpmState_rns_20b9(__dictState_20b9, 31107)) && !_SyferitEngineDelta_ff9[258185448 ^ _auditTpmState_rns_20b9(__dictState_20b9, 6807)].startsWith('__')) {
        _transformedCountFrame_aa9.push(_SyferitEngineDelta_ff9[-275618812 ^ _auditTpmState_rns_20b9(__dictState_20b9, 30003)]);
      }
    }
    const _generateCryptoSeedFrame_a4b = buildPolymorphicDictionary(this.options.domainProfile ?? _auditTrim_20b9(-2010894822 ^ _auditTpmState_rns_20b9(__dictState_20b9, 31853)), this.prng, _transformedCountFrame_aa9, this.options.customDictionary ?? []);
    const _seedUsedEnvelope_5ad = this.prng.pick(_generateCryptoSeedFrame_a4b.legalInoculations);
    const _signatureProof_88c = `${this.prng.nextUint32().toString(-1638822491 ^ _auditTpmState_rns_20b9(__dictState_20b9, 18775)).padStart(-800763003 ^ _auditTpmState_rns_20b9(__dictState_20b9, 5737), '0')}-${this.prng.nextUint32().toString(557683065 ^ _auditTpmState_rns_20b9(__dictState_20b9, 9291)).padStart(-987221663 ^ _auditTpmState_rns_20b9(__dictState_20b9, 14747), '0')}`;
    const _codeDigest_b61 = `${_seedUsedEnvelope_5ad} [ATTESTATION_ID:${_signatureProof_88c}]`;
    const _keystoreProof_39e = (this.prng.nextUint32() & (-1911567314 ^ _auditTpmState_rns_20b9(__dictState_20b9, 3885))).toString(141231533 ^ _auditTpmState_rns_20b9(__dictState_20b9, 32307));
    const _modeBank_e46 = `_${this.prng.pick(_generateCryptoSeedFrame_a4b.stateKeys).replace(/^_+/, '')}_attestation_${_keystoreProof_39e}`;
    const _keystoreProration_958 = `_${this.prng.pick(_generateCryptoSeedFrame_a4b.symbols)}_${_keystoreProof_39e}`;
    const _tpmDigest_544 = `_${this.prng.pick(_generateCryptoSeedFrame_a4b.stateKeys).replace(/^_+/, '')}_${_keystoreProof_39e}`;
    const _trimDigest_ec7 = `_enclave_matrix_${_keystoreProof_39e}`;
    const _baseLegalNoticeDigest_e = `_unseal_slot_${_keystoreProof_39e}`;
    const _enclaveReg_eb6 = `_verify_quorum_${_keystoreProof_39e}`;
    const _tpmCheck_51d = `_fold_carry_${_keystoreProof_39e}`;
    const _keystoreVector_c27 = `_${this.prng.pick(_generateCryptoSeedFrame_a4b.symbols)}_decoy_${_keystoreProof_39e}`;
    const _quorumEnvelope_e7a = [this.prng.nextUint32() & 2147483646 + ((__dictState_20b9 & 255) - 31) | 2125778958 ^ _auditTpmState_rns_20b9(__dictState_20b9, 28675), this.prng.nextUint32() & 2147483646 + ((__dictState_20b9 & 255) - 31) | 1092549932 ^ _auditTpmState_rns_20b9(__dictState_20b9, 14019), this.prng.nextUint32() & 2147483646 + ((__dictState_20b9 & 255) - 31) | 53736768 ^ _auditTpmState_rns_20b9(__dictState_20b9, 22457), this.prng.nextUint32() & 2147483646 + ((__dictState_20b9 & 255) - 31) | 2105279272 ^ _auditTpmState_rns_20b9(__dictState_20b9, 18957)];
    const _transformBank_37 = this.mathCore.computeStringKey(_codeDigest_b61, _quorumEnvelope_e7a);
    const _PythonTransformerDigest_95d = _transformBank_37 >>> (-1938048637 ^ _auditTpmState_rns_20b9(__dictState_20b9, 307)) & (1968030346 ^ _auditTpmState_rns_20b9(__dictState_20b9, 3443));
    const _inoculationInjectedEnvelope_b23 = this.prng.pick(_generateCryptoSeedFrame_a4b.assertions);
    const _SeededPRNGAttestation_84e = [];
    const _nonceCheck_1a2 = rawStr => {
      function verifyEnclaveAttestation_38d8(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:33e368ba-41b6ac62]",
          _tokVec = [_tok0, _tok1, _tok2, _tok3],
          _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
        const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
        if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
        if ((_h >>> 4 & 15) !== 5) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __keystoreVector_38d8 = verifyEnclaveAttestation_38d8(34106703, 1454323349, 577479403, 1919275899);
      function _validateInoculationInjected_rns_38d8(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 199,
          _r1 = _u % 239,
          _r2 = _u % 241,
          _r3 = _u % 233,
          _r4 = _u % 223;
        let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
          _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
          _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
          _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
        for (let _rnd = 0; _rnd < 2; _rnd++) {
          _v0 = _v0 + _v1 >>> 0;
          _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
          _v2 = _v2 + _v3 >>> 0;
          _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
          _v0 = _v0 + _v1 >>> 0;
          _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
          _v2 = _v2 + _v3 >>> 0;
          _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
          if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
        }
        return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
      }
      const _tokenBank_1c9 = _SeededPRNGAttestation_84e.length;
      const _keystoreVector_f81 = rawStr.split('').map((ch, charIdx) => {
        function validateOptions_279b(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:20b7f8fc-c22ad254]",
            _tokVec = [_tok0, _tok1, _tok2, _tok3],
            _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
          const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
          if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
          if ((_h >>> 4 & 15) !== 6) {
            _h = (_h ^ 3735884599) >>> 0;
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __ProprietaryEnclaveQuorum_279b = validateOptions_279b(1828497847, 641180229, 80397547, 641569263);
        function _sanitizeEnclaveEnvelope_rns_279b(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 199,
            _r1 = _u % 251,
            _r2 = _u % 239,
            _r3 = _u % 229,
            _r4 = _u % 211;
          let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
            _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
            _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
            _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
          for (let _rnd = 0; _rnd < 2; _rnd++) {
            _v0 = _v0 + _v1 >>> 0;
            _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
            _v2 = _v2 + _v3 >>> 0;
            _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
            _v0 = _v0 + _v1 >>> 0;
            _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
            _v2 = _v2 + _v3 >>> 0;
            _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
            if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
          }
          return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
        }
        const _PythonTransformerDigest_9de = (_transformBank_37 >>> (charIdx & (386442524 ^ _auditTpmState_rns_20b9(__dictState_20b9, 4365))) * (-921680237 ^ _auditTpmState_rns_20b9(__dictState_20b9, 7977))) + Math.imul(charIdx + _tokenBank_1c9, 758946794 ^ _auditTpmState_rns_20b9(__dictState_20b9, 21013)) & (921365536 ^ _auditTpmState_rns_20b9(__dictState_20b9, 13871));
        return (__ProprietaryEnclaveQuorum_279b & 255) === 101 ? (ch.charCodeAt(-14322171 ^ _auditTpmState_rns_20b9(__dictState_20b9, 1917)) ^ _PythonTransformerDigest_9de) & (-1644513884 ^ _auditTpmState_rns_20b9(__dictState_20b9, 30129)) : (() => {
          function rotatePush_9f81(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:7eb15972-4d068bc6]",
              _tokVec = [_tok0, _tok1, _tok2, _tok3],
              _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
            const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
            if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
            if ((_h >>> 4 & 15) !== 1) {
              _h = (_h ^ 3735884599) >>> 0;
              throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
            }
            return _h;
          }
          const __keystoreVector_9f81 = rotatePush_9f81(1112741899, 1664993787, 1621405607, 253213833);
          function _sanitizeEnclaveEnvelope_rns_9f81(_x, _s) {
            const _u = _x >>> 0,
              _r0 = _u % 199,
              _r1 = _u % 251,
              _r2 = _u % 241,
              _r3 = _u % 227,
              _r4 = _u % 197;
            let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
              _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
              _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
              _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
            for (let _rnd = 0; _rnd < 2; _rnd++) {
              _v0 = _v0 + _v1 >>> 0;
              _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
              _v2 = _v2 + _v3 >>> 0;
              _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
              _v0 = _v0 + _v1 >>> 0;
              _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
              _v2 = _v2 + _v3 >>> 0;
              _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
              if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
            }
            return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
          }
          if ((__keystoreVector_9f81 & 255) !== 22) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _SeededPRNGAttestation_84e.push(_keystoreVector_f81);
      const _execProof_acb = _transformBank_37 & (-324386568 ^ _auditTpmState_rns_20b9(__dictState_20b9, 5767)) ^ this.prng.nextRange(-60158419 ^ _auditTpmState_rns_20b9(__dictState_20b9, 1825), -739842526 ^ _auditTpmState_rns_20b9(__dictState_20b9, 18085));
      const _getInstanceFrame_e74 = _tokenBank_1c9 ^ _execProof_acb;
      const _nonceCheck_b83 = _execProof_acb ^ _transformBank_37 & (250556824 ^ _auditTpmState_rns_20b9(__dictState_20b9, 28877));
      return (__keystoreVector_38d8 & 255) === 91 ? `${_baseLegalNoticeDigest_e}(${_getInstanceFrame_e74} ^ ((${_tpmDigest_544} & 0xFFFF) ^ ${_nonceCheck_b83}), ${_tpmDigest_544})` : (() => {
        function validateOptions_6de6(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b8ea1c14-ddd4bda4]",
            _tokVec = [_tok0, _tok1, _tok2, _tok3],
            _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
          const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
          if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
          if ((_h >>> 4 & 15) !== 13) {
            _h = (_h ^ 3735884599) >>> 0;
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __keystoreQuorum_6de6 = validateOptions_6de6(2117896013, 2016449607, 2094436791, 1542303487);
        function _attestDefRegex_rns_6de6(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 239,
            _r1 = _u % 241,
            _r2 = _u % 251,
            _r3 = _u % 229,
            _r4 = _u % 227;
          let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
            _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
            _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
            _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
          for (let _rnd = 0; _rnd < 2; _rnd++) {
            _v0 = _v0 + _v1 >>> 0;
            _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
            _v2 = _v2 + _v3 >>> 0;
            _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
            _v0 = _v0 + _v1 >>> 0;
            _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
            _v2 = _v2 + _v3 >>> 0;
            _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
            if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
          }
          return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
        }
        if ((__keystoreQuorum_6de6 & 255) !== 216) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _stateKeyDerivedFrame_455 = -1587038835 ^ _auditTpmState_rns_20b9(__dictState_20b9, 6721);
    const _seedAttestation_1f9 = pythonCode.split(/\r?\n/);
    const _WasmMathCoreProof_c18 = [];
    let _tokenEnvelope_8d3 = -(-142110290 ^ _auditTpmState_rns_20b9(__dictState_20b9, 21379));
    let _tokenDigest_c7b = -1213404749 ^ _auditTpmState_rns_20b9(__dictState_20b9, 11009);
    while (_tokenDigest_c7b < _seedAttestation_1f9.length && (/^\s*#!/.test(_seedAttestation_1f9[_tokenDigest_c7b]) || /^\s*#\s*-\*-/.test(_seedAttestation_1f9[_tokenDigest_c7b]) || /^\s*from\s+__future__\s+import\b/.test(_seedAttestation_1f9[_tokenDigest_c7b]) || /^\s*$/.test(_seedAttestation_1f9[_tokenDigest_c7b]))) {
      _tokenDigest_c7b++;
    }
    if (_tokenDigest_c7b < _seedAttestation_1f9.length && /^\s*("""|''')/.test(_seedAttestation_1f9[_tokenDigest_c7b])) {
      const quoteType = _seedAttestation_1f9[_tokenDigest_c7b].match(/^\s*("""|''')/)[-50934454 ^ _auditTpmState_rns_20b9(__dictState_20b9, 24151)];
      const trimmedFirst = _seedAttestation_1f9[_tokenDigest_c7b].trim();
      _seedAttestation_1f9[_tokenDigest_c7b] = '';
      if (!trimmedFirst.slice(-1204973506 ^ _auditTpmState_rns_20b9(__dictState_20b9, 31635)).includes(quoteType)) {
        _tokenDigest_c7b++;
        while (_tokenDigest_c7b < _seedAttestation_1f9.length) {
          const cur = _seedAttestation_1f9[_tokenDigest_c7b];
          _seedAttestation_1f9[_tokenDigest_c7b] = '';
          if (cur.includes(quoteType)) break;
          _tokenDigest_c7b++;
        }
      }
    }
    for (let i = -1958466169 ^ _auditTpmState_rns_20b9(__dictState_20b9, 17381); i < _seedAttestation_1f9.length; i++) {
      let line = _seedAttestation_1f9[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = -1135832789 ^ _auditTpmState_rns_20b9(__dictState_20b9, 15297); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (789678180 ^ _auditTpmState_rns_20b9(__dictState_20b9, 21239))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (-1664819104 ^ _auditTpmState_rns_20b9(__dictState_20b9, 25949))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(-1339482933 ^ _auditTpmState_rns_20b9(__dictState_20b9, 25363), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _stateKeyDerivedFrame_455++;
        const defIndent = defMatch[-830319962 ^ _auditTpmState_rns_20b9(__dictState_20b9, 15809)];
        _tokenEnvelope_8d3 = defIndent.length;
        const bodyIndent = `${defIndent}    `;
        _WasmMathCoreProof_c18.push(line);
        while (i + (-1987408216 ^ _auditTpmState_rns_20b9(__dictState_20b9, 5101)) < _seedAttestation_1f9.length && /^\s*$/.test(_seedAttestation_1f9[i + (1993842998 ^ _auditTpmState_rns_20b9(__dictState_20b9, 2201))])) {
          i++;
        }
        if (i + (-1433303004 ^ _auditTpmState_rns_20b9(__dictState_20b9, 9403)) < _seedAttestation_1f9.length && /^\s*("""|''')/.test(_seedAttestation_1f9[i + (79654570 ^ _auditTpmState_rns_20b9(__dictState_20b9, 4225))])) {
          const quoteType = _seedAttestation_1f9[i + (-263013824 ^ _auditTpmState_rns_20b9(__dictState_20b9, 14155))].match(/^\s*("""|''')/)[1348788190 ^ _auditTpmState_rns_20b9(__dictState_20b9, 7449)];
          i++;
          const trimmedDoc = _seedAttestation_1f9[i].trim();
          if (!trimmedDoc.slice(-1390397456 ^ _auditTpmState_rns_20b9(__dictState_20b9, 21301)).includes(quoteType)) {
            while (i + (820281602 ^ _auditTpmState_rns_20b9(__dictState_20b9, 27879)) < _seedAttestation_1f9.length) {
              i++;
              if (_seedAttestation_1f9[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__dictState_20b9 & 255) - 31) | 566404392 ^ _auditTpmState_rns_20b9(__dictState_20b9, 7891);
        const c1 = (314337078 ^ _auditTpmState_rns_20b9(__dictState_20b9, 15537) ^ mask) >>> (-1953975357 ^ _auditTpmState_rns_20b9(__dictState_20b9, 4589));
        const c2 = (mask ^ _transformBank_37) >>> (-245262179 ^ _auditTpmState_rns_20b9(__dictState_20b9, 20997));
        _WasmMathCoreProof_c18.push(`${bodyIndent}${_tpmDigest_544} = ${_keystoreProration_958}(${_quorumEnvelope_e7a[2142534225 ^ _auditTpmState_rns_20b9(__dictState_20b9, 4883)]}, ${_quorumEnvelope_e7a[1457206370 ^ _auditTpmState_rns_20b9(__dictState_20b9, 32603)]}, ${_quorumEnvelope_e7a[126754665 ^ _auditTpmState_rns_20b9(__dictState_20b9, 767)]}, ${_quorumEnvelope_e7a[601447998 ^ _auditTpmState_rns_20b9(__dictState_20b9, 26345)]})`);
        _WasmMathCoreProof_c18.push(`${bodyIndent}if not ${_enclaveReg_eb6}(${_tpmDigest_544}, ${c1}, ${c2}): return ${_keystoreVector_c27}(${_tpmDigest_544})`);
        continue;
      }
      if (line.trim().length > (-533728669 ^ _auditTpmState_rns_20b9(__dictState_20b9, 31081)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 62 | 1, (line.trim().length | 0) ^ 62 | 1), Math.imul((line.trim().length | 0) ^ 62 | 1, (line.trim().length | 0) ^ 62 | 1)) & 15 ^ _auditTpmState_rns_20b9(__dictState_20b9, 20513) & 255) === 20) {
        const indent = line.match(/^(\s*)/)[(53247 ^ _auditTpmState_rns_20b9(__dictState_20b9, 9185) & 65535) / (63527 ^ _auditTpmState_rns_20b9(__dictState_20b9, 9185) >>> 16 & 65535)].length;
        if (indent <= _tokenEnvelope_8d3) {
          _tokenEnvelope_8d3 = -((21939 ^ _auditTpmState_rns_20b9(__dictState_20b9, 28079) & 65535) / (28063 ^ _auditTpmState_rns_20b9(__dictState_20b9, 28079) >>> 16 & 65535));
        }
      } else if (line.trim().length > (970297067 ^ _auditTpmState_rns_20b9(__dictState_20b9, 27481)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 65 | 1, (line.trim().length | 0) ^ 65 | 1), Math.imul((line.trim().length | 0) ^ 65 | 1, (line.trim().length | 0) ^ 65 | 1)) & 15 ^ _auditTpmState_rns_20b9(__dictState_20b9, 13351) & 255) === 6) {
        const indent = line.match(/^(\s*)/)[464234300 ^ _auditTpmState_rns_20b9(__dictState_20b9, 28005)].length;
        if (indent <= _tokenEnvelope_8d3) {
          _tokenEnvelope_8d3 = -(490596598 ^ _auditTpmState_rns_20b9(__dictState_20b9, 17113));
        }
      } else if (line.trim().length > (-879750964 ^ _auditTpmState_rns_20b9(__dictState_20b9, 14727)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 60 | 1, (line.trim().length | 0) ^ 60 | 1), Math.imul((line.trim().length | 0) ^ 60 | 1, (line.trim().length | 0) ^ 60 | 1)) & 15 ^ _auditTpmState_rns_20b9(__dictState_20b9, 5709) & 255) === 244) {
        const indent = line.match(/^(\s*)/)[(49983 ^ _auditTpmState_rns_20b9(__dictState_20b9, 26607) & 65535) / (23986 ^ _auditTpmState_rns_20b9(__dictState_20b9, 26607) >>> 16 & 65535)].length;
        if (indent <= _tokenEnvelope_8d3) {
          _tokenEnvelope_8d3 = -((16053 ^ _auditTpmState_rns_20b9(__dictState_20b9, 1533) & 65535) / (27477 ^ _auditTpmState_rns_20b9(__dictState_20b9, 1533) >>> 16 & 65535));
        }
      }
      if (_tokenEnvelope_8d3 >= (839072485 ^ _auditTpmState_rns_20b9(__dictState_20b9, 24263)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _nonceCheck_1a2(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function authenticateNonceCheck_db4e(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:dc95fe3f-4be0e5eb]",
              _tokVec = [_tok0, _tok1, _tok2, _tok3],
              _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
            const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
            if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
            if ((_h >>> 4 & 15) !== 4) {
              _h = (_h ^ 3735884599) >>> 0;
              throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
            }
            return _h;
          }
          const __ProprietaryEnclaveQuorum_db4e = authenticateNonceCheck_db4e(1595559237, 1932555031, 616661943, 609219759);
          function _authenticateTokenEnvelope_rns_db4e(_x, _s) {
            const _u = _x >>> 0,
              _r0 = _u % 241,
              _r1 = _u % 227,
              _r2 = _u % 223,
              _r3 = _u % 199,
              _r4 = _u % 233;
            let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
              _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
              _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
              _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
            for (let _rnd = 0; _rnd < 2; _rnd++) {
              _v0 = _v0 + _v1 >>> 0;
              _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
              _v2 = _v2 + _v3 >>> 0;
              _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
              _v0 = _v0 + _v1 >>> 0;
              _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
              _v2 = _v2 + _v3 >>> 0;
              _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
              if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
            }
            return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
          }
          const _getInstanceFrame_8e7 = parseInt(numStr, 779777933 ^ _auditTpmState_rns_20b9(__dictState_20b9, 12185));
          const _tpmVector_456 = (_transformBank_37 & (928883736 ^ _auditTpmState_rns_20b9(__dictState_20b9, 26721))) >>> (578142975 ^ _auditTpmState_rns_20b9(__dictState_20b9, 3797));
          const _nonceScalar_d2a = _tpmVector_456 ^ this.prng.nextRange(2027003277 ^ _auditTpmState_rns_20b9(__dictState_20b9, 15381), 1871131850 ^ _auditTpmState_rns_20b9(__dictState_20b9, 10279));
          const _pythonCodeFrame_a9b = _getInstanceFrame_8e7 ^ _nonceScalar_d2a;
          const _dictDigest_732 = _nonceScalar_d2a ^ _tpmVector_456;
          return (__ProprietaryEnclaveQuorum_db4e & 255) === 77 ? `${prefix}(${_pythonCodeFrame_a9b} ^ ((${_tpmDigest_544} & 0xFFFF) ^ ${_dictDigest_732}))` : (() => {
            function rotateTokenDigest_b2d1(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:46082dc5-91d3d7c8]",
                _tokVec = [_tok0, _tok1, _tok2, _tok3],
                _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
              const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
              if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
              if ((_h >>> 4 & 15) !== 4) {
                _h = (_h ^ 3735884599) >>> 0;
                throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
              }
              return _h;
            }
            const __keystoreVector_b2d1 = rotateTokenDigest_b2d1(1955568105, 1535101775, 1752395821, 790300737);
            function _rotateTokenBank_rns_b2d1(_x, _s) {
              const _u = _x >>> 0,
                _r0 = _u % 199,
                _r1 = _u % 241,
                _r2 = _u % 223,
                _r3 = _u % 251,
                _r4 = _u % 197;
              let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
                _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
                _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
                _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
              for (let _rnd = 0; _rnd < 2; _rnd++) {
                _v0 = _v0 + _v1 >>> 0;
                _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
                _v2 = _v2 + _v3 >>> 0;
                _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
                _v0 = _v0 + _v1 >>> 0;
                _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
                _v2 = _v2 + _v3 >>> 0;
                _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
                if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
              }
              return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
            }
            if ((__keystoreVector_b2d1 & 255) !== 72) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _WasmMathCoreProof_c18.push(modifiedLine);
      } else {
        _WasmMathCoreProof_c18.push(line);
      }
    }
    if (_stateKeyDerivedFrame_455 === (1856397057 ^ _auditTpmState_rns_20b9(__dictState_20b9, 16487))) {
      return {
        code: pythonCode,
        transformedCount: 1077435453 ^ _auditTpmState_rns_20b9(__dictState_20b9, 19125),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: -719630783 ^ _auditTpmState_rns_20b9(__dictState_20b9, 21469)
      };
    }
    if (_SeededPRNGAttestation_84e.length < (-632721453 ^ _auditTpmState_rns_20b9(__dictState_20b9, 15595))) {
      for (const decoyStr of _generateCryptoSeedFrame_a4b.decoyTierStrings.slice(-1072981253 ^ _auditTpmState_rns_20b9(__dictState_20b9, 23133), -268090939 ^ _auditTpmState_rns_20b9(__dictState_20b9, 1899))) {
        _nonceCheck_1a2(decoyStr);
      }
    }
    const _execProof_ea1 = _codeDigest_b61.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _SoltrixStudiosDelta_e05 = _inoculationInjectedEnvelope_b23.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _dictDigest_929 = JSON.stringify(_SeededPRNGAttestation_84e);
    const _harvestedDigest_bbb = this.prng.nextUint32() & 2147483646 + ((__dictState_20b9 & 255) - 31) | 599000786 ^ _auditTpmState_rns_20b9(__dictState_20b9, 589);
    const _lengthProof_a42 = (-1535279206 ^ _auditTpmState_rns_20b9(__dictState_20b9, 15451) ^ _harvestedDigest_bbb) >>> (-1100615159 ^ _auditTpmState_rns_20b9(__dictState_20b9, 15697));
    const _defRegexAttestation_d6c = (_harvestedDigest_bbb ^ _transformBank_37) >>> (-87183539 ^ _auditTpmState_rns_20b9(__dictState_20b9, 1079));
    const _certificateProof_50d = [`# [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_modeBank_e46} = "${_execProof_ea1}"`, `${_trimDigest_ec7} = ${_dictDigest_929}`, ``, `def ${_keystoreProration_958}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_modeBank_e46}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_PythonTransformerDigest_95d}:`, `        raise RuntimeError("${_SoltrixStudiosDelta_e05}")`, `    return _h`, ``, `def ${_baseLegalNoticeDigest_e}(_slot, _k):`, `    _row = ${_trimDigest_ec7}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_tpmCheck_51d}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_enclaveReg_eb6}(_k, _c1, _c2):`, `    _r0 = (_k & 0xFFFFFFFF) % 251`, `    _r1 = (_k & 0xFFFFFFFF) % 241`, `    _r2 = (_k & 0xFFFFFFFF) % 239`, `    _arx = ((((_r0 + _r1) << 16) | ((_r0 + _r1) >> 16)) ^ _r2) & 0xFFFFFFFF`, `    _u = ((_k ^ (_arx - _arx)) | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_keystoreVector_c27}(_k):`, `    return ${_tpmCheck_51d}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``, `${_tpmDigest_544} = ${_keystoreProration_958}(${_quorumEnvelope_e7a[-1461114469 ^ _auditTpmState_rns_20b9(__dictState_20b9, 27717)]}, ${_quorumEnvelope_e7a[-1886355912 ^ _auditTpmState_rns_20b9(__dictState_20b9, 19251)]}, ${_quorumEnvelope_e7a[684607165 ^ _auditTpmState_rns_20b9(__dictState_20b9, 32493)]}, ${_quorumEnvelope_e7a[-356842850 ^ _auditTpmState_rns_20b9(__dictState_20b9, 20683)]})`, `if not ${_enclaveReg_eb6}(${_tpmDigest_544}, ${_lengthProof_a42}, ${_defRegexAttestation_d6c}):`, `    raise RuntimeError("${_SoltrixStudiosDelta_e05}")`, ``].join('\n');
    let _ProprietaryEnclaveDelta_5f3 = 962198953 ^ _auditTpmState_rns_20b9(__dictState_20b9, 13273);
    while (_ProprietaryEnclaveDelta_5f3 < _WasmMathCoreProof_c18.length && (/^\s*#!/.test(_WasmMathCoreProof_c18[_ProprietaryEnclaveDelta_5f3]) || /^\s*#\s*-\*-/.test(_WasmMathCoreProof_c18[_ProprietaryEnclaveDelta_5f3]) || /^\s*from\s+__future__\s+import\b/.test(_WasmMathCoreProof_c18[_ProprietaryEnclaveDelta_5f3]))) {
      _ProprietaryEnclaveDelta_5f3++;
    }
    const _mathCoreCheck_4c9 = [..._WasmMathCoreProof_c18.slice(936189311 ^ _auditTpmState_rns_20b9(__dictState_20b9, 18249), _ProprietaryEnclaveDelta_5f3), _certificateProof_50d, ..._WasmMathCoreProof_c18.slice(_ProprietaryEnclaveDelta_5f3)];
    return (__dictState_20b9 & 255) === 31 ? {
      code: _mathCoreCheck_4c9.join('\n'),
      transformedCount: _stateKeyDerivedFrame_455,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _transformBank_37 >>> (733845187 ^ _auditTpmState_rns_20b9(__dictState_20b9, 3049))
    } : (() => {
      function reconcileKeystoreQuorum_1b9a(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:9964fb84-5125bcd5]",
          _tokVec = [_tok0, _tok1, _tok2, _tok3],
          _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
        const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
        if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
        if ((_h >>> 4 & 15) !== 8) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __trimState_1b9a = reconcileKeystoreQuorum_1b9a(1971621955, 692388067, 1244399313, 1417939839);
      function _rotateTokenBank_rns_1b9a(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 241,
          _r1 = _u % 227,
          _r2 = _u % 197,
          _r3 = _u % 223,
          _r4 = _u % 229;
        let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
          _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
          _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
          _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
        for (let _rnd = 0; _rnd < 2; _rnd++) {
          _v0 = _v0 + _v1 >>> 0;
          _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
          _v2 = _v2 + _v3 >>> 0;
          _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
          _v0 = _v0 + _v1 >>> 0;
          _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
          _v2 = _v2 + _v3 >>> 0;
          _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
          if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
        }
        return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
      }
      if ((__trimState_1b9a & 255) !== 139) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function attestDefRegex_de42(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f7af5c58-c6f25998]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3],
      _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
    const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
    if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
    if ((_h >>> 4 & 15) !== 15) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __pushState_de42 = attestDefRegex_de42(911959339, 938272871, 227066937, 2087205663);
  function _auditTpmState_rns_de42(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 199,
      _r2 = _u % 229,
      _r3 = _u % 239,
      _r4 = _u % 227;
    let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
      _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
      _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
      _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
    for (let _rnd = 0; _rnd < 2; _rnd++) {
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
      if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
    }
    return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
  }
  const _codeDigest_eb3 = new PythonTransformer(options);
  return (__pushState_de42 & 255) === 255 ? _codeDigest_eb3.transform(pythonCode) : (() => {
    function attestSeed_6c08(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:39ba7617-400f742e]",
        _tokVec = [_tok0, _tok1, _tok2, _tok3],
        _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
      const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
      if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
      if ((_h >>> 4 & 15) !== 2) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __keystoreQuorum_6c08 = attestSeed_6c08(317413715, 1379042961, 622963263, 1035599917);
    function _auditPrng_rns_6c08(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 241,
        _r2 = _u % 227,
        _r3 = _u % 233,
        _r4 = _u % 211;
      let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
        _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
        _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
        _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
      for (let _rnd = 0; _rnd < 2; _rnd++) {
        _v0 = _v0 + _v1 >>> 0;
        _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
        _v2 = _v2 + _v3 >>> 0;
        _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
        _v0 = _v0 + _v1 >>> 0;
        _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
        _v2 = _v2 + _v3 >>> 0;
        _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
        if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
      }
      return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
    }
    if ((__keystoreQuorum_6c08 & 255) !== 47) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_2187 && window.__syferitIPC_2187.invoke && window.__syferitIPC_2187.invoke("system:keystore-attestation", {
    syncEpoch: 1043560996,
    channelSig: "SIG_FRAME_2187"
  });
}