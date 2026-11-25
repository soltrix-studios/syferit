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
    function verifyBaseLegalNotice_4e55(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2b7e8e69-b1a95952]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __prngState_4e55 = verifyBaseLegalNotice_4e55(1998766185, 1617437709, 641897641, 1901796495);
    function _sanitizeExec_rns_4e55(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 211,
        _r2 = _u % 223,
        _r3 = _u % 197,
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
    function _auditTpmState_vm_4e55(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 66) {
          _stk.push((__prngState_4e55 >>> 0) % _a ^ _b);
        } else if (_op === 207) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 129) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 21) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _modeProof_4e55 = [[158, 241, 197, 91, 238, 94, 40, 237, 69], [122, 166, 174, 76, 222, 56, 28, 208, 35, 133, 116], [48, 139, 156, 34, 178], [27, 108, 67, 0], [232, 92, 51, 253, 83, 182, 169, 69, 198, 63], [193, 52, 13, 209, 35]];
    function _authenticateCustomDictionary_4e55(_slot) {
      const _row = _modeProof_4e55[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__prngState_4e55 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _authenticateCustomDictionary_4e55(-1043979873 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 13183)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 94 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 94 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 94 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 94 | 1)) & 15 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 11431) & 255) === 100) {
      return {
        code: pythonCode,
        transformedCount: (62093 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 24017) & 65535) / (12734 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 24017) >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (34207 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 31625) & 65535) / (25223 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 31625) >>> 16 & 65535)
      };
    } else if (this.options.mode === _authenticateCustomDictionary_4e55(-1870465186 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 1159)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 83 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 83 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 83 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 83 | 1)) & 15 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 16043) & 255) === 138) {
      return {
        code: pythonCode,
        transformedCount: _auditTpmState_vm_4e55([66, 229, 18632, 207, 16, 0, 66, 211, 19202, 21, 0, 0, 66, 229, 1218464745, 129, 0, 0]),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: _auditTpmState_vm_4e55([66, 229, 5519, 207, 7, 0, 66, 211, 8859, 21, 0, 0, 66, 229, 726512, 129, 0, 0])
      };
    } else if (this.options.mode === _authenticateCustomDictionary_4e55(-428524235 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 10425)) && (Math.imul(Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 28 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 28 | 1), Math.imul(((pythonCode.seats || pythonCode | 0) | 0) ^ 28 | 1, ((pythonCode.seats || pythonCode | 0) | 0) ^ 28 | 1)) & 15 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 12181) & 255) === 158) {
      return {
        code: pythonCode,
        transformedCount: (52835 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 31639) & 65535) / (49311 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 31639) >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (43595 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 22219) & 65535) / (38700 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 22219) >>> 16 & 65535)
      };
    }
    const _SoltrixStudiosDelta_b0b = [];
    const _keystoreAttestation_a45 = /\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _lengthBank_7d1;
    while ((_lengthBank_7d1 = _keystoreAttestation_a45.exec(pythonCode)) !== null) {
      if (_lengthBank_7d1[_auditTpmState_vm_4e55([66, 229, 21213, 207, 16, 0, 66, 211, 32593, 21, 0, 0, 66, 229, 1387626427, 129, 0, 0])] && _lengthBank_7d1[_auditTpmState_vm_4e55([66, 229, 16134, 207, 16, 0, 66, 211, 30500, 21, 0, 0, 66, 229, 1064204238, 129, 0, 0])].length >= (-1708594791 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 1687)) && !_lengthBank_7d1[2139012178 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 30937)].startsWith('__')) {
        _SoltrixStudiosDelta_b0b.push(_lengthBank_7d1[-1826360938 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 8387)]);
      }
    }
    const _enclaveCheck_f8b = buildPolymorphicDictionary(this.options.domainProfile ?? _authenticateCustomDictionary_4e55(135567550 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 6539)), this.prng, _SoltrixStudiosDelta_b0b, this.options.customDictionary ?? []);
    const _harvestedEnvelope_ff8 = this.prng.pick(_enclaveCheck_f8b.legalInoculations);
    const _enclaveVector_790 = `${this.prng.nextUint32().toString(-14460989 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 16197)).padStart(326594625 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 17937), '0')}-${this.prng.nextUint32().toString(1048007475 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 13367)).padStart(-1244411619 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 2579), '0')}`;
    const _customDictionaryVector_bdd = `${_harvestedEnvelope_ff8} [ATTESTATION_ID:${_enclaveVector_790}]`;
    const _certificateAttestation_975 = (this.prng.nextUint32() & (1595758892 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 3981))).toString(-1509852659 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 13613));
    const _keystoreProration_31e = `_${this.prng.pick(_enclaveCheck_f8b.stateKeys).replace(/^_+/, '')}_attestation_${_certificateAttestation_975}`;
    const _tpmVector_341 = `_${this.prng.pick(_enclaveCheck_f8b.symbols)}_${_certificateAttestation_975}`;
    const _mathCoreFrame_5a = `_${this.prng.pick(_enclaveCheck_f8b.stateKeys).replace(/^_+/, '')}_${_certificateAttestation_975}`;
    const _getInstanceFrame_9dc = `_enclave_matrix_${_certificateAttestation_975}`;
    const _domainProfileVector_9b4 = `_unseal_slot_${_certificateAttestation_975}`;
    const _pythonCodeAttestation_374 = `_verify_quorum_${_certificateAttestation_975}`;
    const _startsWithVector_d52 = `_fold_carry_${_certificateAttestation_975}`;
    const _SeededPRNGEnvelope_bce = `_${this.prng.pick(_enclaveCheck_f8b.symbols)}_decoy_${_certificateAttestation_975}`;
    const _WasmMathCoreAttestation_789 = [this.prng.nextUint32() & 2147483646 + ((__prngState_4e55 & 255) - 249) | -1957120236 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 19995), this.prng.nextUint32() & 2147483646 + ((__prngState_4e55 & 255) - 249) | -467811354 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 12893), this.prng.nextUint32() & 2147483646 + ((__prngState_4e55 & 255) - 249) | -1162581444 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 12347), this.prng.nextUint32() & 2147483646 + ((__prngState_4e55 & 255) - 249) | -32069044 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 17643)];
    const _enclaveBank_40a = this.mathCore.computeStringKey(_customDictionaryVector_bdd, _WasmMathCoreAttestation_789);
    const _ProprietaryEnclaveDelta_cbd = _enclaveBank_40a >>> (305368041 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 17031)) & (-531644736 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 30317));
    const _inoculationInjectedAttestation_16f = this.prng.pick(_enclaveCheck_f8b.assertions);
    const _prngAttestation_d37 = [];
    const _optionsDigest_409 = rawStr => {
      function verifySoltrixStudiosContext_cd6c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c09f5987-5e3eac12]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __customDictionaryState_cd6c = verifySoltrixStudiosContext_cd6c(1606796235, 467093907, 1329507031, 1762788323);
      function _validateEnclaveCheck_rns_cd6c(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 197,
          _r1 = _u % 241,
          _r2 = _u % 233,
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
      const _modeProof_827 = _prngAttestation_d37.length;
      const _signatureDigest_bbb = rawStr.split('').map((ch, charIdx) => {
        function verifyInoculationInjected_2a8e(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4c4dbeb0-e4b497e4]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __certificateBank_2a8e = verifyInoculationInjected_2a8e(338394031, 359518381, 1720125661, 256260105);
        function _verifyEnclaveAttestation_rns_2a8e(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 197,
            _r1 = _u % 229,
            _r2 = _u % 199,
            _r3 = _u % 227,
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
        const _SyferitEngineDelta_9a9 = (_enclaveBank_40a >>> (charIdx & (1256641652 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 18041))) * (-1988576777 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 21617))) + Math.imul(charIdx + _modeProof_827, 928144558 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 18573)) & (1422647402 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 28843));
        return (__certificateBank_2a8e & 255) === 24 ? (ch.charCodeAt(2011012481 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 29211)) ^ _SyferitEngineDelta_9a9) & (676030072 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 835)) : (() => {
          function sanitizeMode_d81e(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:328c91a6-42c46a23]",
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
          const __trimState_d81e = sanitizeMode_d81e(1057843351, 1059212209, 1198380491, 709557381);
          function _authenticateCustomDictionary_rns_d81e(_x, _s) {
            const _u = _x >>> 0,
              _r0 = _u % 229,
              _r1 = _u % 241,
              _r2 = _u % 227,
              _r3 = _u % 197,
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
          if ((__trimState_d81e & 255) !== 205) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _prngAttestation_d37.push(_signatureDigest_bbb);
      const _getInstanceFrame_bf2 = _enclaveBank_40a & (2020423186 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 12195)) ^ this.prng.nextRange(334936159 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 6067), -1661188874 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 29335));
      const _PythonTransformerProof_757 = _modeProof_827 ^ _getInstanceFrame_bf2;
      const _pushVector_33f = _getInstanceFrame_bf2 ^ _enclaveBank_40a & (-1841142086 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 22815));
      return (__customDictionaryState_cd6c & 255) === 4 ? `${_domainProfileVector_9b4}(${_PythonTransformerProof_757} ^ ((${_mathCoreFrame_5a} & 0xFFFF) ^ ${_pushVector_33f}), ${_mathCoreFrame_5a})` : (() => {
        function synchronizeNonceContext_5da8(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5a39b1bc-76d8adfe]",
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
        const __nonceContext_5da8 = synchronizeNonceContext_5da8(1168277083, 701295933, 1254054853, 588729705);
        function _auditCertificateBank_rns_5da8(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 197,
            _r1 = _u % 233,
            _r2 = _u % 241,
            _r3 = _u % 211,
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
        if ((__nonceContext_5da8 & 255) !== 138) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    let _pushVector_b3e = 956653973 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 21385);
    const _stateKeyDerivedFrame_d66 = pythonCode.split(/\r?\n/);
    const _tpmAttestation_729 = [];
    let _seedVector_df6 = -(-1686049946 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 20819));
    let _modeProof_c0d = -927093163 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 25361);
    while (_modeProof_c0d < _stateKeyDerivedFrame_d66.length && (/^\s*#!/.test(_stateKeyDerivedFrame_d66[_modeProof_c0d]) || /^\s*#\s*-\*-/.test(_stateKeyDerivedFrame_d66[_modeProof_c0d]) || /^\s*from\s+__future__\s+import\b/.test(_stateKeyDerivedFrame_d66[_modeProof_c0d]) || /^\s*$/.test(_stateKeyDerivedFrame_d66[_modeProof_c0d]))) {
      _modeProof_c0d++;
    }
    if (_modeProof_c0d < _stateKeyDerivedFrame_d66.length && /^\s*("""|''')/.test(_stateKeyDerivedFrame_d66[_modeProof_c0d])) {
      const quoteType = _stateKeyDerivedFrame_d66[_modeProof_c0d].match(/^\s*("""|''')/)[566919180 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 19999)];
      const trimmedFirst = _stateKeyDerivedFrame_d66[_modeProof_c0d].trim();
      _stateKeyDerivedFrame_d66[_modeProof_c0d] = '';
      if (!trimmedFirst.slice(446283910 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 20237)).includes(quoteType)) {
        _modeProof_c0d++;
        while (_modeProof_c0d < _stateKeyDerivedFrame_d66.length) {
          const cur = _stateKeyDerivedFrame_d66[_modeProof_c0d];
          _stateKeyDerivedFrame_d66[_modeProof_c0d] = '';
          if (cur.includes(quoteType)) break;
          _modeProof_c0d++;
        }
      }
    }
    for (let i = -963048185 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 28877); i < _stateKeyDerivedFrame_d66.length; i++) {
      let line = _stateKeyDerivedFrame_d66[i];
      if (/^\s*#/.test(line) && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        continue;
      }
      if (line.includes('#') && !/^\s*#!/.test(line) && !/^\s*#\s*-\*-/.test(line)) {
        let inSingle = false;
        let inDouble = false;
        for (let c = -1540779979 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 14733); c < line.length; c++) {
          const ch = line[c];
          if (ch === "'" && !inDouble && line[c - (1544753148 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 669))] !== '\\') inSingle = !inSingle;else if (ch === '"' && !inSingle && line[c - (-510629942 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 2949))] !== '\\') inDouble = !inDouble;else if (ch === '#' && !inSingle && !inDouble) {
            line = line.slice(1650391797 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 27127), c).trimEnd();
            break;
          }
        }
      }
      const defMatch = line.match(/^(\s*)def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)(\s*(?:->\s*[^:]+)?):(\s*)$/);
      if (defMatch) {
        _pushVector_b3e++;
        const defIndent = defMatch[1092419586 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 2201)];
        _seedVector_df6 = defIndent.length;
        const bodyIndent = `${defIndent}    `;
        _tpmAttestation_729.push(line);
        while (i + (-960008734 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 28113)) < _stateKeyDerivedFrame_d66.length && /^\s*$/.test(_stateKeyDerivedFrame_d66[i + (-2709756 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 11449))])) {
          i++;
        }
        if (i + (-2129267780 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 16623)) < _stateKeyDerivedFrame_d66.length && /^\s*("""|''')/.test(_stateKeyDerivedFrame_d66[i + (-1471395370 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 22987))])) {
          const quoteType = _stateKeyDerivedFrame_d66[i + (1734169880 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 16469))].match(/^\s*("""|''')/)[1607047826 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 14219)];
          i++;
          const trimmedDoc = _stateKeyDerivedFrame_d66[i].trim();
          if (!trimmedDoc.slice(657688064 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 10097)).includes(quoteType)) {
            while (i + (603240310 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 3485)) < _stateKeyDerivedFrame_d66.length) {
              i++;
              if (_stateKeyDerivedFrame_d66[i].includes(quoteType)) break;
            }
          }
        }
        const mask = this.prng.nextUint32() & 2147483646 + ((__prngState_4e55 & 255) - 249) | 912775830 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 11735);
        const c1 = (558205364 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 2449) ^ mask) >>> (-2137295945 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 20901));
        const c2 = (mask ^ _enclaveBank_40a) >>> (1004316323 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 6135));
        _tpmAttestation_729.push(`${bodyIndent}${_mathCoreFrame_5a} = ${_tpmVector_341}(${_WasmMathCoreAttestation_789[145674663 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 9237)]}, ${_WasmMathCoreAttestation_789[1366069230 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 29979)]}, ${_WasmMathCoreAttestation_789[-1265367525 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 2685)]}, ${_WasmMathCoreAttestation_789[2021825640 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 20661)]})`);
        _tpmAttestation_729.push(`${bodyIndent}if not ${_pythonCodeAttestation_374}(${_mathCoreFrame_5a}, ${c1}, ${c2}): return ${_SeededPRNGEnvelope_bce}(${_mathCoreFrame_5a})`);
        continue;
      }
      if (line.trim().length > (969296061 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 12161)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 101 | 1, (line.trim().length | 0) ^ 101 | 1), Math.imul((line.trim().length | 0) ^ 101 | 1, (line.trim().length | 0) ^ 101 | 1)) & 15 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 8711) & 255) === 100) {
        const indent = line.match(/^(\s*)/)[(35795 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 17797) & 65535) / (32334 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 17797) >>> 16 & 65535)].length;
        if (indent <= _seedVector_df6) {
          _seedVector_df6 = -((35891 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 10809) & 65535) / (37991 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 10809) >>> 16 & 65535));
        }
      } else if (line.trim().length > (745119429 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 11339)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 82 | 1, (line.trim().length | 0) ^ 82 | 1), Math.imul((line.trim().length | 0) ^ 82 | 1, (line.trim().length | 0) ^ 82 | 1)) & 15 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 541) & 255) === 244) {
        const indent = line.match(/^(\s*)/)[1764543468 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 10487)].length;
        if (indent <= _seedVector_df6) {
          _seedVector_df6 = -(375017028 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 18889));
        }
      } else if (line.trim().length > (1684083574 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 7355)) && (Math.imul(Math.imul((line.trim().length | 0) ^ 77 | 1, (line.trim().length | 0) ^ 77 | 1), Math.imul((line.trim().length | 0) ^ 77 | 1, (line.trim().length | 0) ^ 77 | 1)) & 15 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 11867) & 255) === 28) {
        const indent = line.match(/^(\s*)/)[(10331 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 22417) & 65535) / (38754 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 22417) >>> 16 & 65535)].length;
        if (indent <= _seedVector_df6) {
          _seedVector_df6 = -((18291 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 28385) & 65535) / (33622 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 28385) >>> 16 & 65535));
        }
      }
      if (_seedVector_df6 >= (1348086315 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 24293)) && /^\s{4,}\S/.test(line) && !/^\s*#/.test(line) && !/^\s*@/.test(line)) {
        let modifiedLine = line;
        if (this.options.encryptStrings !== false) {
          modifiedLine = modifiedLine.replace(/(?<![fFrRbB])"([^"\\\n]{3,40})"/g, (_m, strContent) => _optionsDigest_409(strContent));
        }
        modifiedLine = modifiedLine.replace(/(\breturn\s+|\s=\s*|\s\+\s*|\s-\s*|\s\*\s*)([1-9]\d{0,6})\b(?!\s*\.)/g, (_m, prefix, numStr) => {
          function verifyStateKeyDerived_70ee(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a4c118fd-64f7da9c]",
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
              throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
            }
            return _h;
          }
          const __defRegexState_70ee = verifyStateKeyDerived_70ee(1368792359, 1116813183, 127695977, 1713691015);
          function _sanitizeExec_rns_70ee(_x, _s) {
            const _u = _x >>> 0,
              _r0 = _u % 241,
              _r1 = _u % 233,
              _r2 = _u % 211,
              _r3 = _u % 251,
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
          const _SyferitEngineDelta_608 = parseInt(numStr, -902342777 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 7705));
          const _inoculationInjectedAttestation_ed8 = (_enclaveBank_40a & (-104222498 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 12889))) >>> (1417431675 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 23571));
          const _harvestedEnvelope_e2 = _inoculationInjectedAttestation_ed8 ^ this.prng.nextRange(1202571873 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 19043), 1846391774 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 6645));
          const _nonceScalar_75c = _SyferitEngineDelta_608 ^ _harvestedEnvelope_e2;
          const _WasmMathCoreAttestation_ce3 = _harvestedEnvelope_e2 ^ _inoculationInjectedAttestation_ed8;
          return (__defRegexState_70ee & 255) === 121 ? `${prefix}(${_nonceScalar_75c} ^ ((${_mathCoreFrame_5a} & 0xFFFF) ^ ${_WasmMathCoreAttestation_ce3}))` : (() => {
            function isolateHarvested_f714(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1a8ae8f5-50cb5fb0]",
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
                throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
              }
              return _h;
            }
            const __getInstanceState_f714 = isolateHarvested_f714(1408059415, 1950408125, 1674641315, 1784194997);
            function _synchronizeNonceContext_rns_f714(_x, _s) {
              const _u = _x >>> 0,
                _r0 = _u % 197,
                _r1 = _u % 251,
                _r2 = _u % 227,
                _r3 = _u % 239,
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
            if ((__getInstanceState_f714 & 255) !== 49) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        _tpmAttestation_729.push(modifiedLine);
      } else {
        _tpmAttestation_729.push(line);
      }
    }
    if (_pushVector_b3e === (-1473845539 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 15933))) {
      return {
        code: pythonCode,
        transformedCount: 1996014175 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 24607),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: -1351363695 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 20595)
      };
    }
    if (_prngAttestation_d37.length < (1836689445 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 15021))) {
      for (const decoyStr of _enclaveCheck_f8b.decoyTierStrings.slice(2065927921 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 31807), -1438194591 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 20245))) {
        _optionsDigest_409(decoyStr);
      }
    }
    const _enclaveReg_7f7 = _customDictionaryVector_bdd.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _defRegexEnvelope_c93 = _inoculationInjectedAttestation_16f.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const _transformedCountAttestation_bf3 = JSON.stringify(_prngAttestation_d37);
    const _keystoreFrame_7b8 = this.prng.nextUint32() & 2147483646 + ((__prngState_4e55 & 255) - 249) | 1210245616 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 2407);
    const _certificateVector_e6e = (1616691264 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 25911) ^ _keystoreFrame_7b8) >>> (-1928947145 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 13655));
    const _transformEnvelope_f0f = (_keystoreFrame_7b8 ^ _enclaveBank_40a) >>> (-2018170203 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 5609));
    const _seedUsedProof_5f0 = [`# [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `${_keystoreProration_31e} = "${_enclaveReg_7f7}"`, `${_getInstanceFrame_9dc} = ${_transformedCountAttestation_bf3}`, ``, `def ${_tpmVector_341}(_tok0, _tok1, _tok2, _tok3):`, `    _h = 0x811C9DC5`, `    for _s in (_tok0, _tok1, _tok2, _tok3):`, `        _h = (_h ^ (_s & 0xFFFFFFFF)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    for _ch in ${_keystoreProration_31e}:`, `        _h = (_h ^ ord(_ch)) & 0xFFFFFFFF`, `        _h = ((_h * 0x01000193) & 0xFFFFFFFF)`, `        _h = (_h ^ (_h >> 13)) & 0xFFFFFFFF`, `    _h = (((_h ^ (_h >> 16)) * 0x85EBCA6B) & 0xFFFFFFFF)`, `    _h = (((_h ^ (_h >> 13)) * 0xC2B2AE35) & 0xFFFFFFFF)`, `    _h = (_h ^ (_h >> 16)) & 0xFFFFFFFF`, `    if (_h & 0xFFFF) == 0:`, `        _h = (_h | 0x1337) & 0xFFFFFFFF`, `    if ((_h >> 16) & 0xFFFF) == 0:`, `        _h = (_h | 0x73310000) & 0xFFFFFFFF`, `    if ((_h >> 4) & 0xF) != ${_ProprietaryEnclaveDelta_cbd}:`, `        raise RuntimeError("${_defRegexEnvelope_c93}")`, `    return _h`, ``, `def ${_domainProfileVector_9b4}(_slot, _k):`, `    _row = ${_getInstanceFrame_9dc}[_slot]`, `    return "".join(chr((_b ^ (((_k >> ((_idx & 3) * 8)) + (((_idx + _slot) * 37) & 0xFFFFFFFF)) & 0xFF)) & 0xFF) for _idx, _b in enumerate(_row))`, ``, `def ${_startsWithVector_d52}(_x, _y):`, `    return (((_x ^ _y) + ((_x & _y) << 1)) & 0xFFFFFFFF)`, ``, `def ${_pythonCodeAttestation_374}(_k, _c1, _c2):`, `    _r0 = (_k & 0xFFFFFFFF) % 251`, `    _r1 = (_k & 0xFFFFFFFF) % 241`, `    _r2 = (_k & 0xFFFFFFFF) % 239`, `    _arx = ((((_r0 + _r1) << 16) | ((_r0 + _r1) >> 16)) ^ _r2) & 0xFFFFFFFF`, `    _u = ((_k ^ (_arx - _arx)) | 1) & 0xFFFFFFFF`, `    _u2 = (_u * _u) & 0xFFFFFFFF`, `    _u4 = (_u2 * _u2) & 0xFFFFFFFF`, `    _expected = (_c1 ^ (_k ^ _c2)) & 0xFFFFFFFF`, `    return (_u4 & 15) == _expected`, ``, `def ${_SeededPRNGEnvelope_bce}(_k):`, `    return ${_startsWithVector_d52}(_k, 0x5A17E9B3) ^ 0xDEADBEEF`, ``, `${_mathCoreFrame_5a} = ${_tpmVector_341}(${_WasmMathCoreAttestation_789[895532367 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 4209)]}, ${_WasmMathCoreAttestation_789[-926821958 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 1873)]}, ${_WasmMathCoreAttestation_789[-1281678755 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 2143)]}, ${_WasmMathCoreAttestation_789[1344592622 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 10229)]})`, `if not ${_pythonCodeAttestation_374}(${_mathCoreFrame_5a}, ${_certificateVector_e6e}, ${_transformEnvelope_f0f}):`, `    raise RuntimeError("${_defRegexEnvelope_c93}")`, ``].join('\n');
    let _dictVector_bd6 = 1321609319 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 32171);
    while (_dictVector_bd6 < _tpmAttestation_729.length && (/^\s*#!/.test(_tpmAttestation_729[_dictVector_bd6]) || /^\s*#\s*-\*-/.test(_tpmAttestation_729[_dictVector_bd6]) || /^\s*from\s+__future__\s+import\b/.test(_tpmAttestation_729[_dictVector_bd6]))) {
      _dictVector_bd6++;
    }
    const _hashStringDigest_7d7 = [..._tpmAttestation_729.slice(923659455 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 5955), _dictVector_bd6), _seedUsedProof_5f0, ..._tpmAttestation_729.slice(_dictVector_bd6)];
    return (__prngState_4e55 & 255) === 249 ? {
      code: _hashStringDigest_7d7.join('\n'),
      transformedCount: _pushVector_b3e,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _enclaveBank_40a >>> (-355799839 ^ _sanitizeExec_rns_4e55(__prngState_4e55, 14263))
    } : (() => {
      function validateEnclaveVector_37d7(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b598c105-a4ace7d3]",
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
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __startsWithState_37d7 = validateEnclaveVector_37d7(2077112161, 864953153, 1751085051, 994052855);
      function _sanitizeExec_rns_37d7(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 211,
          _r1 = _u % 223,
          _r2 = _u % 197,
          _r3 = _u % 251,
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
      if ((__startsWithState_37d7 & 255) !== 107) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export function protectPython(pythonCode, options = {}) {
  function isolateSeedUsed_ba6e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:acc7c065-51a8339c]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __baseLegalNoticeState_ba6e = isolateSeedUsed_ba6e(1599206421, 1571273837, 1761869461, 299731655);
  function _validateEnclaveVector_rns_ba6e(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 233,
      _r2 = _u % 251,
      _r3 = _u % 223,
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
  const _seedUsedProof_ce3 = new PythonTransformer(options);
  return (__baseLegalNoticeState_ba6e & 255) === 244 ? _seedUsedProof_ce3.transform(pythonCode) : (() => {
    function attestStartsWith_3bd7(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b215a096-7c51f7a4]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __certificateAttestation_3bd7 = attestStartsWith_3bd7(1832003469, 2081655805, 2041080991, 1093231615);
    function _synchronizeNonceContext_rns_3bd7(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 223,
        _r2 = _u % 199,
        _r3 = _u % 239,
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
    if ((__certificateAttestation_3bd7 & 255) !== 0) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_5adb && window.__syferitIPC_5adb.invoke && window.__syferitIPC_5adb.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 1928512624,
    channelSig: "SIG_FRAME_5ADB"
  });
}