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
    function rotateSignatureEnvelope_7144(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:701b9aba-0c2d2d3f]",
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
    const __PythonTransformerState_7144 = rotateSignatureEnvelope_7144(1292119079, 699273973, 773441515, 1051545123);
    function _attestExec_rns_7144(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 233,
        _r2 = _u % 227,
        _r3 = _u % 251,
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
    function _attestTransform_vm_7144(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 77) {
          _stk.push((__PythonTransformerState_7144 >>> 0) % _a ^ _b);
        } else if (_op === 116) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 178) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 18) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _certificateCheck_7144 = [[65, 17, 146, 118, 218, 123, 242, 244, 41, 195, 120, 94, 172, 85], [35, 198, 82, 78, 183, 88, 200, 210, 10, 165, 56], [11, 167, 63, 15, 99, 48, 178, 145, 240], [226, 140, 15, 6], [211, 124, 231, 255, 56, 214, 85, 71, 173, 95], [168, 84, 217, 211, 10]];
    function _verifyProprietaryEnclaveContext_7144(_slot) {
      const _row = _certificateCheck_7144[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__PythonTransformerState_7144 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _verifyProprietaryEnclaveContext_7144(-365306185 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 19315)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 117 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 117 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 117 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 117 | 1)) & 15 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 26943) & 255) === 68) {
      return {
        code: pythonCode,
        transformedCount: (19439 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 20519) & 65535) / (17337 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 20519) >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (13155 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 24449) & 65535) / (2341 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 24449) >>> 16 & 65535)
      };
    } else if (this.options.mode === _verifyProprietaryEnclaveContext_7144(1733101010 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 15863)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 96 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 96 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 96 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 96 | 1)) & 15 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 32021) & 255) === 32) {
      return {
        code: pythonCode,
        transformedCount: _attestTransform_vm_7144([77, 223, 22136, 116, 12, 0, 77, 233, 14657, 18, 0, 0, 77, 223, 90511776, 178, 0, 0]),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: _attestTransform_vm_7144([77, 223, 5153, 116, 12, 0, 77, 233, 13795, 18, 0, 0, 77, 223, 21079298, 178, 0, 0])
      };
    } else if (this.options.mode === _verifyProprietaryEnclaveContext_7144(-354194379 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 2127)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 116 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 116 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 116 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 116 | 1)) & 15 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 23783) & 255) === 216) {
      return {
        code: pythonCode,
        transformedCount: (21061 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 27315) & 65535) / (39703 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 27315) >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (5661 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 2809) & 65535) / (49358 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 2809) >>> 16 & 65535)
      };
    }
    const _SoltrixStudiosDelta_da2 = [];
    const _execFrame_7de = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _tpmAttestation_4da;
    while ((_tpmAttestation_4da = _execFrame_7de.exec(pythonCode)) !== null) {
      if (_tpmAttestation_4da[_attestTransform_vm_7144([77, 223, 478, 116, 8, 0, 77, 233, 11410, 18, 0, 0, 77, 223, 136306, 178, 0, 0])] && _tpmAttestation_4da[_attestTransform_vm_7144([77, 223, 12110, 116, 16, 0, 77, 233, 14275, 18, 0, 0, 77, 223, 796407587, 178, 0, 0])].length >= (-1244319257 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 6571)) && !_tpmAttestation_4da[493337760 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 7335)].startsWith('__')) {
        _SoltrixStudiosDelta_da2.push(_tpmAttestation_4da[193588478 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 4401)]);
      }
    }
    const _quorumBank_99 = buildPolymorphicDictionary(this.options.domainProfile ?? _verifyProprietaryEnclaveContext_7144(-642670678 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 17161)), this.prng, _SoltrixStudiosDelta_da2, this.options.customDictionary ?? []);
    const _certificateFrame_23f = this.prng.pick(_quorumBank_99.legalInoculations);
    const _modeEnvelope_347 = `${this.prng.nextUint32().toString(-1765031461 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 21557)).padStart(-767868065 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 29051), '0')}-${this.prng.nextUint32().toString(-1535951979 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 27407)).padStart(-712030065 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 16237), '0')}`;
    const _defRegexFrame_58f = `${_certificateFrame_23f} [ATTESTATION_ID:${_modeEnvelope_347}]`;
    const _getInstanceAttestation_41f = (this.prng.nextUint32() & (1515827170 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 19389))).toString(-2094236059 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 24985));
    const _seedUsedBank_c17 = `_${this.prng.pick(_quorumBank_99.stateKeys).replace(/^_+/, '')}_attestation_${_getInstanceAttestation_41f}`;
    const _seedBank_3a = `_${this.prng.pick(_quorumBank_99.symbols)}_${_getInstanceAttestation_41f}`;
    const _ProprietaryEnclaveDelta_3db = `_${this.prng.pick(_quorumBank_99.stateKeys).replace(/^_+/, '')}_${_getInstanceAttestation_41f}`;
    const _customDictionaryFrame_d7a = `_enclave_matrix_${_getInstanceAttestation_41f}`;
    const _signatureCheck_cfb = `_unseal_slot_${_getInstanceAttestation_41f}`;
    const _baseLegalNoticeProof_e73 = `_verify_quorum_${_getInstanceAttestation_41f}`;
    const _lengthCheck_8fb = `_fold_carry_${_getInstanceAttestation_41f}`;
    const _transformedCountEnvelope_1d9 = `_${this.prng.pick(_quorumBank_99.symbols)}_decoy_${_getInstanceAttestation_41f}`;
    const _certificateCheck_4b8 = [this.prng.nextUint32() & 2147483646 + ((__PythonTransformerState_7144 & 255) - 34) | 183699892 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 3065), this.prng.nextUint32() & 2147483646 + ((__PythonTransformerState_7144 & 255) - 34) | 2027254512 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 4771), this.prng.nextUint32() & 2147483646 + ((__PythonTransformerState_7144 & 255) - 34) | 656700514 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 5115), this.prng.nextUint32() & 2147483646 + ((__PythonTransformerState_7144 & 255) - 34) | 1357008952 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 19085)];
    const _transformCheck_dab = this.mathCore.computeStringKey(_defRegexFrame_58f, _certificateCheck_4b8);
    const _SyferitEngineDelta_bc = _transformCheck_dab >>> (-1373054331 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 26987)) & (-1262102830 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 3793));
    const _generateCryptoSeedFrame_c12 = this.prng.pick(_quorumBank_99.assertions);
    const _pythonCodeDigest_f50 = [];
    const _dictFrame_d6d = rawStr => {
      function validateTransformedCount_a755(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:272333eb-cc63c158]",
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
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __signatureCheck_a755 = validateTransformedCount_a755(528935389, 301162403, 1796587211, 904464807);
      function _attestKeystoreAttestation_rns_a755(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 227,
          _r1 = _u % 229,
          _r2 = _u % 251,
          _r3 = _u % 223,
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
      const _nonceCheck_905 = _pythonCodeDigest_f50.length;
      const _trimFrame_292 = rawStr.split('').map((ch, charIdx) => {
        function isolateCertificateFrame_e76a(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:62d0d2cf-6eaed66e]",
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
        const __customDictionaryState_e76a = isolateCertificateFrame_e76a(1453194767, 1169166949, 1505754729, 63519925);
        function _verifyProprietaryEnclaveContext_rns_e76a(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 223,
            _r1 = _u % 211,
            _r2 = _u % 241,
            _r3 = _u % 233,
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
        const _quorumBank_906 = (_transformCheck_dab >>> (charIdx & (-1359831886 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 985))) * (-464947867 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 17839))) + Math.imul(charIdx + _nonceCheck_905, -52442382 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 14641)) & (1790360618 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 24183));
        return (__customDictionaryState_e76a & 255) === 118 ? (ch.charCodeAt(-842326711 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 6167)) ^ _quorumBank_906) & (-820918700 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 2277)) : (() => {
          function reconcileKeystoreQuorum_cc7d(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:388678bf-bb472259]",
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
          const __getInstanceState_cc7d = reconcileKeystoreQuorum_cc7d(468333883, 1790847415, 1437971277, 417464437);
          function _authenticateCertificateCheck_rns_cc7d(_x, _s) {
            const _u = _x >>> 0,
              _r0 = _u % 223,
              _r1 = _u % 241,
              _r2 = _u % 233,
              _r3 = _u % 239,
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
          if ((__getInstanceState_cc7d & 255) !== 137) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _pythonCodeDigest_f50.push(_trimFrame_292);
      const _customDictionaryFrame_b17 = _transformCheck_dab & (-230169744 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 28761)) ^ this.prng.nextRange(-1684912875 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 10513), 2069323698 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 27035));
      const _execFrame_70f = _nonceCheck_905 ^ _customDictionaryFrame_b17;
      const _nonceEnvelope_e07 = _customDictionaryFrame_b17 ^ _transformCheck_dab & (-561916300 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 19761));
      return (__signatureCheck_a755 & 255) === 128 ? `${_signatureCheck_cfb}(${_execFrame_70f} ^ ((${_ProprietaryEnclaveDelta_3db} & 0xFFFF) ^ ${_nonceEnvelope_e07}), ${_ProprietaryEnclaveDelta_3db})` : (() => {
        function verifyProprietaryEnclaveContext_8d2a(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:66dce2a2-15b06d9a]",
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
        const __keystoreQuorum_8d2a = verifyProprietaryEnclaveContext_8d2a(1833376139, 1629471947, 438975955, 530446755);
        function _validateOptions_rns_8d2a(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 223,
            _r1 = _u % 241,
            _r2 = _u % 239,
            _r3 = _u % 229,
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
        if ((__keystoreQuorum_8d2a & 255) !== 5) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _quorumVector_296 = 1861224811 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 6909);
    const _enclaveReg_6f6 = pythonCode.split(/\r?\n/);
    const _nonceCheck_ef5 = [];
    let _mathCoreDigest_d43 = -(971677264 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 13719));
    let _tpmCheck_c1f = 1939734413 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 28949);
    while (_tpmCheck_c1f < _enclaveReg_6f6.length && (/^\s*#!/.test(_enclaveReg_6f6[_tpmCheck_c1f]) || /^\s*#\s*-\*-/.test(_enclaveReg_6f6[_tpmCheck_c1f]) || /^\s*from\s+__future__\s+import\b/.test(_enclaveReg_6f6[_tpmCheck_c1f]) || /^\s*$/.test(_enclaveReg_6f6[_tpmCheck_c1f]))) {
      _tpmCheck_c1f++;
    }
    if (_tpmCheck_c1f < _enclaveReg_6f6.length && /^\s*("""|''')/.test(_enclaveReg_6f6[_tpmCheck_c1f])) {
      const quoteType = _enclaveReg_6f6[_tpmCheck_c1f].match(/^\s*("""|''')/)[1947408318 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 2365)];
      const trimmedFirst = _enclaveReg_6f6[_tpmCheck_c1f].trim();
      _enclaveReg_6f6[_tpmCheck_c1f] = '';
      if (!trimmedFirst.slice(640927358 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 13757)).includes(quoteType)) {
        _tpmCheck_c1f++;
        while (_tpmCheck_c1f < _enclaveReg_6f6.length) {
          const cur = _enclaveReg_6f6[_tpmCheck_c1f];
          _enclaveReg_6f6[_tpmCheck_c1f] = '';
          if (cur.includes(quoteType)) break;
          _tpmCheck_c1f++;
        }
      }
    }
    for (let i = -365239707 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 14099); i < _enclaveReg_6f6.length; i++) {
      let line = _enclaveReg_6f6[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = 27577467 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 32367); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (-223017662 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 12325))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (1782784642 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 16165))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(-406764097 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 13399), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _quorumVector_296++;
        const defIndent = defMatch[-885328370 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 8177)];
        _mathCoreDigest_d43 = defIndent.length;
        const bodyIndent = `${defIndent}    `;
        _nonceCheck_ef5.push(line);
        while (i + (104129938 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 19575)) < _enclaveReg_6f6.length && /^\s*$/.test(_enclaveReg_6f6[i + (-1714102960 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 14745))])) {
          i++;
        }
        if (i + (-1151038880 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 13415)) < _enclaveReg_6f6.length && /^\s*("""|''')/.test(_enclaveReg_6f6[i + (-955910920 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 1451))])) {
          const quoteType = _enclaveReg_6f6[i + (1040960330 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 26833))].match(/^\s*("""|''')/)[-1976879598 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 7393)];
          i++;
          const trimmedDoc = _enclaveReg_6f6[i].trim();
          if (!trimmedDoc.slice(1242565400 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 30469)).includes(quoteType)) {
            while (i + (-1698001946 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 31805)) < _enclaveReg_6f6.length) {
              i++;
              if (_enclaveReg_6f6[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__PythonTransformerState_7144 & 255) - 34) | -90742 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 25029);
        const c1 = (-2059733590 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 10201) ^ mask) >>> (856123307 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 9019));
        const c2 = (mask ^ _transformCheck_dab) >>> (175318691 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 17563));
        _nonceCheck_ef5.push(`${bodyIndent}${_ProprietaryEnclaveDelta_3db} = ${_seedBank_3a}(${_certificateCheck_4b8[-738830433 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 3807)]}, ${_certificateCheck_4b8[-869086830 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 27177)]}, ${_certificateCheck_4b8[1496652637 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 14119)]}, ${_certificateCheck_4b8[-1116451094 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 21941)]})`);
        _nonceCheck_ef5.push(`${bodyIndent}if not ${_baseLegalNoticeProof_e73}(${_ProprietaryEnclaveDelta_3db}, ${c1}, ${c2}): return ${_transformedCountEnvelope_1d9}(${_ProprietaryEnclaveDelta_3db})`);
        continue;
      }
      if (line.trim().length > (-679833353 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 7187)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 28 | 1, (line.trim().length | 0) ^ 28 | 1), Math.imul((line.trim().length | 0) ^ 28 | 1, (line.trim().length | 0) ^ 28 | 1)) & 15 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 32349) & 255) === 158) {
        const indent = line.match(/^(\s*)/)[(59627 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 631) & 65535) / (45706 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 631) >>> 16 & 65535)].length;
        if (indent <= _mathCoreDigest_d43) {
          _mathCoreDigest_d43 = -((20997 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 16985) & 65535) / (192 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 16985) >>> 16 & 65535));
        }
      } else if (line.trim().length > (-1590933801 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 22025)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 58 | 1, (line.trim().length | 0) ^ 58 | 1), Math.imul((line.trim().length | 0) ^ 58 | 1, (line.trim().length | 0) ^ 58 | 1)) & 15 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 14077) & 255) === 146) {
        const indent = line.match(/^(\s*)/)[176736094 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 23651)].length;
        if (indent <= _mathCoreDigest_d43) {
          _mathCoreDigest_d43 = -(-781663514 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 11215));
        }
      } else if (line.trim().length > (-1558045148 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 14055)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 76 | 1, (line.trim().length | 0) ^ 76 | 1), Math.imul((line.trim().length | 0) ^ 76 | 1, (line.trim().length | 0) ^ 76 | 1)) & 15 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 2991) & 255) === 26) {
        const indent = line.match(/^(\s*)/)[(27733 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 30359) & 65535) / (43134 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 30359) >>> 16 & 65535)].length;
        if (indent <= _mathCoreDigest_d43) {
          _mathCoreDigest_d43 = -((29947 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 17093) & 65535) / (27821 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 17093) >>> 16 & 65535));
        }
      }
      if (_mathCoreDigest_d43 >= (-312511329 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 20145)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _dictFrame_d6d(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function isolateGetInstance_228b(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:79d1c666-d34fac9c]",
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
          const __getInstanceState_228b = isolateGetInstance_228b(665649217, 494093119, 2138690145, 2018559415);
          function _validateMode_rns_228b(_x, _s) {
            const _u = _x >>> 0,
              _r0 = _u % 223,
              _r1 = _u % 251,
              _r2 = _u % 199,
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
          const _codeBank_f35 = parseInt(numStr, 1031473805 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 2085));
          const _hashStringBank_786 = (_transformCheck_dab & (857228130 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 23327))) >>> (-828859191 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 1373));
          const _certificateProof_c73 = _hashStringBank_786 ^ this.prng.nextRange(1601474089 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 31719), -936366140 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 371));
          const _nonceDigest_3c0 = _codeBank_f35 ^ _certificateProof_c73;
          const _execFrame_f40 = _certificateProof_c73 ^ _hashStringBank_786;
          return (__getInstanceState_228b & 255) === 123 ? `${prefix}(${_nonceDigest_3c0} ^ ((${_ProprietaryEnclaveDelta_3db} & 0xFFFF) ^ ${_execFrame_f40}))` : (() => {
            function verifySyferitEngineContext_3982(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:30cf5f9a-fded58c5]",
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
            const __tpmAttestation_3982 = verifySyferitEngineContext_3982(1617936859, 45675207, 193055839, 607917599);
            function _validateQuorumBank_rns_3982(_x, _s) {
              const _u = _x >>> 0,
                _r0 = _u % 211,
                _r1 = _u % 227,
                _r2 = _u % 251,
                _r3 = _u % 199,
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
            if ((__tpmAttestation_3982 & 255) !== 48) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _nonceCheck_ef5.push(modifiedLine);
      } else {
        _nonceCheck_ef5.push(line);
      }
    }
    if (_quorumVector_296 === (-2026906081 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 19173))) {
      return {
        code: pythonCode,
        transformedCount: -2030177681 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 17527),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 1687546835 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 12635)
      };
    }
    if (_pythonCodeDigest_f50.length < (-1905180563 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 17349))) {
      for (const decoyStr of _quorumBank_99.decoyTierStrings.slice(-761949777 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 9767), -469162813 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 3799))) {
        _dictFrame_d6d(decoyStr);
      }
    }
    const _stateKeyDerivedBank_23c = _defRegexFrame_58f.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _WasmMathCoreBank_546 = _generateCryptoSeedFrame_c12.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _certificateProof_c75 = JSON.stringify(_pythonCodeDigest_f50);
    const _optionsVector_631 = this.prng.nextUint32() & 2147483646 + ((__PythonTransformerState_7144 & 255) - 34) | 576632910 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 5221);
    const _prngAttestation_fa4 = (1652148078 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 29929) ^ _optionsVector_631) >>> (-2145852877 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 12289));
    const _inoculationInjectedAttestation_59d = (_optionsVector_631 ^ _transformCheck_dab) >>> (546193181 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 20571));
    const _harvestedAttestation_b98 = [`# [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_seedUsedBank_c17} = "${_stateKeyDerivedBank_23c}"`, `${_customDictionaryFrame_d7a} = ${_certificateProof_c75}`, ``, `def ${_seedBank_3a}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_seedUsedBank_c17}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_SyferitEngineDelta_bc}:`, `        raise RuntimeError("${_WasmMathCoreBank_546}")`, `    return _h`, ``, `def ${_signatureCheck_cfb}(_slot, _k):`, `    _row = ${_customDictionaryFrame_d7a}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_lengthCheck_8fb}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_baseLegalNoticeProof_e73}(_k, _c1, _c2):`, `    _r0 = (_k & 0xFFFFFFFF) % 251`, `    _r1 = (_k & 0xFFFFFFFF) % 241`, `    _r2 = (_k & 0xFFFFFFFF) % 239`, `    _arx = ((((_r0 + _r1) << 16) | ((_r0 + _r1) >> 16)) ^ _r2) & 0xFFFFFFFF`, `    _u = ((_k ^ (_arx - _arx)) | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_transformedCountEnvelope_1d9}(_k):`, `    return ${_lengthCheck_8fb}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``, `${_ProprietaryEnclaveDelta_3db} = ${_seedBank_3a}(${_certificateCheck_4b8[759826079 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 4787)]}, ${_certificateCheck_4b8[-1364415178 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 24713)]}, ${_certificateCheck_4b8[-1074525865 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 5825)]}, ${_certificateCheck_4b8[334714996 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 8091)]})`, `if not ${_baseLegalNoticeProof_e73}(${_ProprietaryEnclaveDelta_3db}, ${_prngAttestation_fa4}, ${_inoculationInjectedAttestation_59d}):`, `    raise RuntimeError("${_WasmMathCoreBank_546}")`, ``].join('\n');
    let _tpmVector_394 = 1773624275 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 4011);
    while (_tpmVector_394 < _nonceCheck_ef5.length && (/^\s*#!/.test(_nonceCheck_ef5[_tpmVector_394]) || /^\s*#\s*-\*-/.test(_nonceCheck_ef5[_tpmVector_394]) || /^\s*from\s+__future__\s+import\b/.test(_nonceCheck_ef5[_tpmVector_394]))) {
      _tpmVector_394++;
    }
    const _trimFrame_ba1 = [..._nonceCheck_ef5.slice(-2073496755 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 28189), _tpmVector_394), _harvestedAttestation_b98, ..._nonceCheck_ef5.slice(_tpmVector_394)];
    return (__PythonTransformerState_7144 & 255) === 34 ? {
      code: _trimFrame_ba1.join('\n'),
      transformedCount: _quorumVector_296,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _transformCheck_dab >>> (-524318473 ^ _attestExec_rns_7144(__PythonTransformerState_7144, 28969))
    } : (() => {
      function synchronizeNonceContext_4c6e(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:02c9765d-4768f3ac]",
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
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __seedUsedState_4c6e = synchronizeNonceContext_4c6e(85781203, 1870003747, 1778799241, 736805463);
      function _attestDict_rns_4c6e(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 241,
          _r1 = _u % 239,
          _r2 = _u % 229,
          _r3 = _u % 251,
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
      if ((__seedUsedState_4c6e & 255) !== 92) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function authenticateWasmMathCore_88a0(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8fcd133f-4287504e]",
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
  const __tpmProof_88a0 = authenticateWasmMathCore_88a0(1734092899, 209565765, 1900842193, 1744975513);
  function _attestDomainProfile_rns_88a0(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 241,
      _r2 = _u % 239,
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
  const _signatureEnvelope_e5 = new PythonTransformer(options);
  return (__tpmProof_88a0 & 255) === 101 ? _signatureEnvelope_e5.transform(pythonCode) : (() => {
    function rotateSignatureEnvelope_59ec(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:03f7d38f-b2bfc4b5]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __codeState_59ec = rotateSignatureEnvelope_59ec(672961767, 1107500787, 1382035853, 1757053563);
    function _authenticateNonceDigest_rns_59ec(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 199,
        _r2 = _u % 223,
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
    if ((__codeState_59ec & 255) !== 48) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_9d3b && window.__syferitIPC_9d3b.invoke && window.__syferitIPC_9d3b.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 48327397,
    channelSig: "SIG_FRAME_9D3B"
  });
}