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
    function validateQuorumVector_846f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:51c7f429-e2fc1ed8]",
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
      if ((_h >>> 4 & 15) !== 7) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __nonceAttestation_846f = validateQuorumVector_846f(929398311, 714289949, 1919470099, 726087861);
    function _verifyCertificateProof_rns_846f(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 251,
        _r2 = _u % 197,
        _r3 = _u % 233,
        _r4 = _u % 199;
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
    function _rotateEnclaveBank_vm_846f(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 118) {
          _stk.push((__nonceAttestation_846f >>> 0) % _a ^ _b);
        } else if (_op === 69) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 211) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 26) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _enclaveBank_846f = [[29, 47, 245, 241, 126, 189, 77, 123, 197, 13, 159, 217, 72, 147], [199, 0, 203, 195, 91, 150, 33, 87, 174, 227, 145], [187, 233, 131, 167, 57], [158, 206, 102, 131], [119, 186, 88, 112, 212, 24, 178, 192, 73, 153], [68, 154, 48, 86, 174]];
    function _authenticateInoculationInjected_846f(_slot) {
      const _row = _enclaveBank_846f[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceAttestation_846f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _authenticateInoculationInjected_846f(-734843387 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 28633)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 48 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 48 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 48 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 48 | 1)) & 15 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 11387) & 255) === 180) {
      return {
        code: pythonCode,
        transformedCount: (27683 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 16363) & 65535) / (60419 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 16363) >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (65453 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 3309) & 65535) / (46820 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 3309) >>> 16 & 65535)
      };
    } else if (this.options.mode === _authenticateInoculationInjected_846f(1965147606 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 16741)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 105 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 105 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 105 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 105 | 1)) & 15 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 20799) & 255) === 82) {
      return {
        code: pythonCode,
        transformedCount: _rotateEnclaveBank_vm_846f([118, 241, 12999, 69, 8, 0, 118, 251, 24879, 26, 0, 0, 118, 241, 3358965, 211, 0, 0]),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: _rotateEnclaveBank_vm_846f([118, 241, 19111, 69, 12, 0, 118, 251, 11444, 26, 0, 0, 118, 241, 78388334, 211, 0, 0])
      };
    } else if (this.options.mode === _authenticateInoculationInjected_846f(343814967 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 12001)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 88 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 88 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 88 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 88 | 1)) & 15 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 15665) & 255) === 238) {
      return {
        code: pythonCode,
        transformedCount: (57579 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 27539) & 65535) / (17204 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 27539) >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (44261 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 929) & 65535) / (9529 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 929) >>> 16 & 65535)
      };
    }
    const _nonceFrame_d02 = [];
    const _SeededPRNGAttestation_6eb = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _quorumDigest_f8d;
    while ((_quorumDigest_f8d = _SeededPRNGAttestation_6eb.exec(pythonCode)) !== null) {
      if (_quorumDigest_f8d[_rotateEnclaveBank_vm_846f([118, 241, 29533, 69, 8, 0, 118, 251, 10253, 26, 0, 0, 118, 241, 7564758, 211, 0, 0])] && _quorumDigest_f8d[_rotateEnclaveBank_vm_846f([118, 241, 2671, 69, 7, 0, 118, 251, 9718, 26, 0, 0, 118, 241, 352429, 211, 0, 0])].length >= (1765241889 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 22817)) && !_quorumDigest_f8d[-562970720 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 15765)].startsWith('__')) {
        _nonceFrame_d02.push(_quorumDigest_f8d[-1405102606 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 9185)]);
      }
    }
    const _SyferitEngineDelta_10e = buildPolymorphicDictionary(this.options.domainProfile ?? _authenticateInoculationInjected_846f(1427312442 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 1171)), this.prng, _nonceFrame_d02, this.options.customDictionary ?? []);
    const _dictProof_bc7 = this.prng.pick(_SyferitEngineDelta_10e.legalInoculations);
    const _quorumVector_86e = `${this.prng.nextUint32().toString(1017389071 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 20829)).padStart(1594084781 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 16221), '0')}-${this.prng.nextUint32().toString(-882552465 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 17401)).padStart(-2073829505 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 3059), '0')}`;
    const _pushBank_1b0 = `${_dictProof_bc7} [ATTESTATION_ID:${_quorumVector_86e}]`;
    const _WasmMathCoreCheck_152 = (this.prng.nextUint32() & (1830377424 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 23409))).toString(1244562105 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 20243));
    const _signatureBank_cee = `_${this.prng.pick(_SyferitEngineDelta_10e.stateKeys).replace(/^_+/, '')}_attestation_${_WasmMathCoreCheck_152}`;
    const _transformBank_364 = `_${this.prng.pick(_SyferitEngineDelta_10e.symbols)}_${_WasmMathCoreCheck_152}`;
    const _seedUsedDigest_38a = `_${this.prng.pick(_SyferitEngineDelta_10e.stateKeys).replace(/^_+/, '')}_${_WasmMathCoreCheck_152}`;
    const _keystoreVector_124 = `_enclave_matrix_${_WasmMathCoreCheck_152}`;
    const _tokenFrame_be8 = `_unseal_slot_${_WasmMathCoreCheck_152}`;
    const _PythonTransformerBank_fe0 = `_verify_quorum_${_WasmMathCoreCheck_152}`;
    const _defRegexCheck_bc3 = `_fold_carry_${_WasmMathCoreCheck_152}`;
    const _enclaveBank_5c1 = `_${this.prng.pick(_SyferitEngineDelta_10e.symbols)}_decoy_${_WasmMathCoreCheck_152}`;
    const _modeDigest_4b3 = [this.prng.nextUint32() & 2147483646 + ((__nonceAttestation_846f & 255) - 126) | 306737392 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 12687), this.prng.nextUint32() & 2147483646 + ((__nonceAttestation_846f & 255) - 126) | 907553546 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 29199), this.prng.nextUint32() & 2147483646 + ((__nonceAttestation_846f & 255) - 126) | -1269457508 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 24485), this.prng.nextUint32() & 2147483646 + ((__nonceAttestation_846f & 255) - 126) | 2065354300 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 19159)];
    const _signatureVector_219 = this.mathCore.computeStringKey(_pushBank_1b0, _modeDigest_4b3);
    const _mathCoreProof_f89 = _signatureVector_219 >>> (463613241 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 30653)) & (-1819877876 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 23417));
    const _tpmEnvelope_349 = this.prng.pick(_SyferitEngineDelta_10e.assertions);
    const _hashStringAttestation_288 = [];
    const _certificateProof_49c = rawStr => {
      function sanitizeNonceBank_be46(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b6ca6df6-440ea2a2]",
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
      const __customDictionaryState_be46 = sanitizeNonceBank_be46(146874463, 1551829917, 791301719, 1513702481);
      function _validateSeed_rns_be46(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 233,
          _r1 = _u % 241,
          _r2 = _u % 211,
          _r3 = _u % 199,
          _r4 = _u % 251;
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
      const _mathCoreProof_c2b = _hashStringAttestation_288.length;
      const _nonceFrame_a30 = rawStr.split('').map((ch, charIdx) => {
        function attestStateKeyDerived_2df8(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:7abb8762-b0e9a94a]",
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
          if ((_h >>> 4 & 15) !== 7) {
            _h = (_h ^ 3735884599) >>> 0;
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __stateKeyDerivedState_2df8 = attestStateKeyDerived_2df8(2079177289, 883206157, 1138330409, 42261357);
        function _verifySyferitEngineContext_rns_2df8(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 241,
            _r1 = _u % 233,
            _r2 = _u % 199,
            _r3 = _u % 239,
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
        const _keystoreVector_8ed = (_signatureVector_219 >>> (charIdx & (1771394420 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 11577))) * (815226629 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 6031))) + Math.imul(charIdx + _mathCoreProof_c2b, -469687882 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 25671)) & (970434942 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 23199));
        return (__stateKeyDerivedState_2df8 & 255) === 113 ? (ch.charCodeAt(-850128977 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 20465)) ^ _keystoreVector_8ed) & (2107450632 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 9601)) : (() => {
          function attestCustomDictionary_3d06(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a62c9ce0-02f9e8f9]",
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
            if ((_h >>> 4 & 15) !== 0) {
              _h = (_h ^ 3735884599) >>> 0;
              throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
            }
            return _h;
          }
          const __stateKeyDerivedState_3d06 = attestCustomDictionary_3d06(1634339721, 2106324421, 532656467, 1465420803);
          function _sanitizeNonceBank_rns_3d06(_x, _s) {
            const _u = _x >>> 0,
              _r0 = _u % 197,
              _r1 = _u % 223,
              _r2 = _u % 241,
              _r3 = _u % 211,
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
          if ((__stateKeyDerivedState_3d06 & 255) !== 11) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _hashStringAttestation_288.push(_nonceFrame_a30);
      const _tpmVector_708 = _signatureVector_219 & (2109882986 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 23551)) ^ this.prng.nextRange(-593630909 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 28665), 1989748326 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 22171));
      const _certificateVector_2c0 = _mathCoreProof_c2b ^ _tpmVector_708;
      const _hashStringAttestation_92c = _tpmVector_708 ^ _signatureVector_219 & (1073325406 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 12769));
      return (__customDictionaryState_be46 & 255) === 137 ? `${_tokenFrame_be8}(${_certificateVector_2c0} ^ ((${_seedUsedDigest_38a} & 0xFFFF) ^ ${_hashStringAttestation_92c}), ${_seedUsedDigest_38a})` : (() => {
        function rotateBaseLegalNotice_dc76(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:acaff183-4301d57a]",
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
        const __mathCoreState_dc76 = rotateBaseLegalNotice_dc76(851928515, 1220941847, 2052702257, 1832800281);
        function _attestCustomDictionary_rns_dc76(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 211,
            _r1 = _u % 241,
            _r2 = _u % 197,
            _r3 = _u % 229,
            _r4 = _u % 199;
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
        if ((__mathCoreState_dc76 & 255) !== 82) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _getInstanceAttestation_5d1 = 392688423 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 32021);
    const _SoltrixStudiosDelta_758 = pythonCode.split(/\r?\n/);
    const _optionsDigest_96 = [];
    let _transformedCountEnvelope_b10 = -(1812040254 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 26247));
    let _nonceAttestation_dfd = 872465621 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 15835);
    while (_nonceAttestation_dfd < _SoltrixStudiosDelta_758.length && (/^\s*#!/.test(_SoltrixStudiosDelta_758[_nonceAttestation_dfd]) || /^\s*#\s*-\*-/.test(_SoltrixStudiosDelta_758[_nonceAttestation_dfd]) || /^\s*from\s+__future__\s+import\b/.test(_SoltrixStudiosDelta_758[_nonceAttestation_dfd]) || /^\s*$/.test(_SoltrixStudiosDelta_758[_nonceAttestation_dfd]))) {
      _nonceAttestation_dfd++;
    }
    if (_nonceAttestation_dfd < _SoltrixStudiosDelta_758.length && /^\s*("""|''')/.test(_SoltrixStudiosDelta_758[_nonceAttestation_dfd])) {
      const quoteType = _SoltrixStudiosDelta_758[_nonceAttestation_dfd].match(/^\s*("""|''')/)[-1465884734 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 14195)];
      const trimmedFirst = _SoltrixStudiosDelta_758[_nonceAttestation_dfd].trim();
      _SoltrixStudiosDelta_758[_nonceAttestation_dfd] = '';
      if (!trimmedFirst.slice(55339616 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 6577)).includes(quoteType)) {
        _nonceAttestation_dfd++;
        while (_nonceAttestation_dfd < _SoltrixStudiosDelta_758.length) {
          const cur = _SoltrixStudiosDelta_758[_nonceAttestation_dfd];
          _SoltrixStudiosDelta_758[_nonceAttestation_dfd] = '';
          if (cur.includes(quoteType)) break;
          _nonceAttestation_dfd++;
        }
      }
    }
    for (let i = -1420195741 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 20921); i < _SoltrixStudiosDelta_758.length; i++) {
      let line = _SoltrixStudiosDelta_758[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = -1856361167 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 23755); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (1180796824 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 24813))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (1497695626 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 25743))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(1413998509 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 6013), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _getInstanceAttestation_5d1++;
        const defIndent = defMatch[215296274 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 9561)];
        _transformedCountEnvelope_b10 = defIndent.length;
        const bodyIndent = `${defIndent}    `;
        _optionsDigest_96.push(line);
        while (i + (1010865014 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 20797)) < _SoltrixStudiosDelta_758.length && /^\s*$/.test(_SoltrixStudiosDelta_758[i + (-2053298198 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 305))])) {
          i++;
        }
        if (i + (-813068936 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 1381)) < _SoltrixStudiosDelta_758.length && /^\s*("""|''')/.test(_SoltrixStudiosDelta_758[i + (-156374276 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 30345))])) {
          const quoteType = _SoltrixStudiosDelta_758[i + (315726242 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 12289))].match(/^\s*("""|''')/)[505643696 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 10087)];
          i++;
          const trimmedDoc = _SoltrixStudiosDelta_758[i].trim();
          if (!trimmedDoc.slice(745946348 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 2807)).includes(quoteType)) {
            while (i + (1346456364 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 24167)) < _SoltrixStudiosDelta_758.length) {
              i++;
              if (_SoltrixStudiosDelta_758[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__nonceAttestation_846f & 255) - 126) | 1275685870 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 32729);
        const c1 = (1118522446 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 13961) ^ mask) >>> (-2105277717 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 18077));
        const c2 = (mask ^ _signatureVector_219) >>> (1893571769 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 2233));
        _optionsDigest_96.push(`${bodyIndent}${_seedUsedDigest_38a} = ${_transformBank_364}(${_modeDigest_4b3[1124534945 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 21323)]}, ${_modeDigest_4b3[691838596 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 8483)]}, ${_modeDigest_4b3[340073019 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 22719)]}, ${_modeDigest_4b3[-1930919538 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 25897)]})`);
        _optionsDigest_96.push(`${bodyIndent}if not ${_PythonTransformerBank_fe0}(${_seedUsedDigest_38a}, ${c1}, ${c2}): return ${_enclaveBank_5c1}(${_seedUsedDigest_38a})`);
        continue;
      }
      if (line.trim().length > (1404199631 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 17129)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 75 | 1, (line.trim().length | 0) ^ 75 | 1), Math.imul((line.trim().length | 0) ^ 75 | 1, (line.trim().length | 0) ^ 75 | 1)) & 15 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 2301) & 255) === 144) {
        const indent = line.match(/^(\s*)/)[(32553 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 12019) & 65535) / (62740 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 12019) >>> 16 & 65535)].length;
        if (indent <= _transformedCountEnvelope_b10) {
          _transformedCountEnvelope_b10 = -((25441 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 1039) & 65535) / (49299 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 1039) >>> 16 & 65535));
        }
      } else if (line.trim().length > (-1609510229 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 2877)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 64 | 1, (line.trim().length | 0) ^ 64 | 1), Math.imul((line.trim().length | 0) ^ 64 | 1, (line.trim().length | 0) ^ 64 | 1)) & 15 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 7705) & 255) === 6) {
        const indent = line.match(/^(\s*)/)[570644950 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 26205)].length;
        if (indent <= _transformedCountEnvelope_b10) {
          _transformedCountEnvelope_b10 = -(-1627473140 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 22079));
        }
      } else if (line.trim().length > (1722924726 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 22093)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 90 | 1, (line.trim().length | 0) ^ 90 | 1), Math.imul((line.trim().length | 0) ^ 90 | 1, (line.trim().length | 0) ^ 90 | 1)) & 15 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 14591) & 255) === 200) {
        const indent = line.match(/^(\s*)/)[(27925 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 18357) & 65535) / (21807 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 18357) >>> 16 & 65535)].length;
        if (indent <= _transformedCountEnvelope_b10) {
          _transformedCountEnvelope_b10 = -((33507 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 28759) & 65535) / (752 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 28759) >>> 16 & 65535));
        }
      }
      if (_transformedCountEnvelope_b10 >= (1630559655 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 8195)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _certificateProof_49c(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function validateTransform_1ce6(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:cb8a0d80-f14a29fe]",
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
            if ((_h >>> 4 & 15) !== 12) {
              _h = (_h ^ 3735884599) >>> 0;
              throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
            }
            return _h;
          }
          const __certificateProof_1ce6 = validateTransform_1ce6(93988661, 1561263615, 815003849, 99503039);
          function _verifySyferitEngineContext_rns_1ce6(_x, _s) {
            const _u = _x >>> 0,
              _r0 = _u % 241,
              _r1 = _u % 211,
              _r2 = _u % 223,
              _r3 = _u % 233,
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
          const _PythonTransformerBank_b8f = parseInt(numStr, -1689392147 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 7187));
          const _certificateProof_a62 = (_signatureVector_219 & (-1235416542 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 29647))) >>> (-309861237 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 13097));
          const _dictProof_18 = _certificateProof_a62 ^ this.prng.nextRange(-1307238739 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 5403), -190932642 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 13549));
          const _transformBank_cae = _PythonTransformerBank_b8f ^ _dictProof_18;
          const _transformedCountEnvelope_775 = _dictProof_18 ^ _certificateProof_a62;
          return (__certificateProof_1ce6 & 255) === 207 ? `${prefix}(${_transformBank_cae} ^ ((${_seedUsedDigest_38a} & 0xFFFF) ^ ${_transformedCountEnvelope_775}))` : (() => {
            function auditPush_ff5d(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:68d3fafb-608bb126]",
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
              if ((_h >>> 4 & 15) !== 7) {
                _h = (_h ^ 3735884599) >>> 0;
                throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
              }
              return _h;
            }
            const __certificateProof_ff5d = auditPush_ff5d(2130464993, 1572690863, 2034953531, 1263507047);
            function _validateQuorumVector_rns_ff5d(_x, _s) {
              const _u = _x >>> 0,
                _r0 = _u % 239,
                _r1 = _u % 241,
                _r2 = _u % 223,
                _r3 = _u % 227,
                _r4 = _u % 199;
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
            if ((__certificateProof_ff5d & 255) !== 113) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _optionsDigest_96.push(modifiedLine);
      } else {
        _optionsDigest_96.push(line);
      }
    }
    if (_getInstanceAttestation_5d1 === (561955527 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 24837))) {
      return {
        code: pythonCode,
        transformedCount: 1643836597 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 22283),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: -1170743389 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 32007)
      };
    }
    if (_hashStringAttestation_288.length < (49947643 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 26585))) {
      for (const decoyStr of _SyferitEngineDelta_10e.decoyTierStrings.slice(990614995 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 14883), -951805313 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 18281))) {
        _certificateProof_49c(decoyStr);
      }
    }
    const _generateCryptoSeedCheck_e4 = _pushBank_1b0.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _trimFrame_49f = _tpmEnvelope_349.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _certificateVector_6e9 = JSON.stringify(_hashStringAttestation_288);
    const _stateKeyDerivedProof_95c = this.prng.nextUint32() & 2147483646 + ((__nonceAttestation_846f & 255) - 126) | -558836266 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 23449);
    const _enclaveVector_590 = (-781459154 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 2979) ^ _stateKeyDerivedProof_95c) >>> (1988558895 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 9035));
    const _codeBank_aa4 = (_stateKeyDerivedProof_95c ^ _signatureVector_219) >>> (-1970575107 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 21347));
    const _domainProfileVector_e80 = [`# [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_signatureBank_cee} = "${_generateCryptoSeedCheck_e4}"`, `${_keystoreVector_124} = ${_certificateVector_6e9}`, ``, `def ${_transformBank_364}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_signatureBank_cee}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_mathCoreProof_f89}:`, `        raise RuntimeError("${_trimFrame_49f}")`, `    return _h`, ``, `def ${_tokenFrame_be8}(_slot, _k):`, `    _row = ${_keystoreVector_124}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_defRegexCheck_bc3}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_PythonTransformerBank_fe0}(_k, _c1, _c2):`, `    _r0 = (_k & 0xFFFFFFFF) % 251`, `    _r1 = (_k & 0xFFFFFFFF) % 241`, `    _r2 = (_k & 0xFFFFFFFF) % 239`, `    _arx = ((((_r0 + _r1) << 16) | ((_r0 + _r1) >> 16)) ^ _r2) & 0xFFFFFFFF`, `    _u = ((_k ^ (_arx - _arx)) | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_enclaveBank_5c1}(_k):`, `    return ${_defRegexCheck_bc3}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``, `${_seedUsedDigest_38a} = ${_transformBank_364}(${_modeDigest_4b3[-203713631 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 2703)]}, ${_modeDigest_4b3[1041182732 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 16225)]}, ${_modeDigest_4b3[-189177529 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 23241)]}, ${_modeDigest_4b3[-1410804880 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 4305)]})`, `if not ${_PythonTransformerBank_fe0}(${_seedUsedDigest_38a}, ${_enclaveVector_590}, ${_codeBank_aa4}):`, `    raise RuntimeError("${_trimFrame_49f}")`, ``].join('\n');
    let _keystoreEnvelope_3df = 1419950387 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 20765);
    while (_keystoreEnvelope_3df < _optionsDigest_96.length && (/^\s*#!/.test(_optionsDigest_96[_keystoreEnvelope_3df]) || /^\s*#\s*-\*-/.test(_optionsDigest_96[_keystoreEnvelope_3df]) || /^\s*from\s+__future__\s+import\b/.test(_optionsDigest_96[_keystoreEnvelope_3df]))) {
      _keystoreEnvelope_3df++;
    }
    const _enclaveReg_434 = [..._optionsDigest_96.slice(898884437 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 29167), _keystoreEnvelope_3df), _domainProfileVector_e80, ..._optionsDigest_96.slice(_keystoreEnvelope_3df)];
    return (__nonceAttestation_846f & 255) === 126 ? {
      code: _enclaveReg_434.join('\n'),
      transformedCount: _getInstanceAttestation_5d1,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _signatureVector_219 >>> (-1461805035 ^ _verifyCertificateProof_rns_846f(__nonceAttestation_846f, 30169))
    } : (() => {
      function verifyGenerateCryptoSeed_26bf(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:fdef0249-b0057d36]",
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
        if ((_h >>> 4 & 15) !== 9) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __customDictionaryState_26bf = verifyGenerateCryptoSeed_26bf(573742781, 632735323, 176207145, 1608992409);
      function _attestExec_rns_26bf(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 251,
          _r1 = _u % 197,
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
      if ((__customDictionaryState_26bf & 255) !== 149) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function isolateConstructor_1e3f(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:043d7d69-171f00b0]",
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
    if ((_h >>> 4 & 15) !== 3) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __stateKeyDerivedState_1e3f = isolateConstructor_1e3f(125449283, 759933987, 1387178553, 1968231205);
  function _rotateEnclaveBank_rns_1e3f(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 233,
      _r2 = _u % 199,
      _r3 = _u % 223,
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
  const _dictProof_e98 = new PythonTransformer(options);
  return (__stateKeyDerivedState_1e3f & 255) === 63 ? _dictProof_e98.transform(pythonCode) : (() => {
    function attestSeedUsed_b9a4(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:003b6535-bed1a16f]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __domainProfileState_b9a4 = attestSeedUsed_b9a4(1976450037, 2021126301, 315717555, 946728207);
    function _verifySoltrixStudiosContext_rns_b9a4(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 251,
        _r2 = _u % 241,
        _r3 = _u % 227,
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
    if ((__domainProfileState_b9a4 & 255) !== 67) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_f205 && window.__syferitIPC_f205.invoke && window.__syferitIPC_f205.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 227579455,
    channelSig: "SIG_FRAME_F205"
  });
}