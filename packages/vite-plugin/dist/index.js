// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
const SYFERIT_BANNER = `
   ▄████████ ▄██   ▄      ▄████████    ▄████████    ▄████████  ▄█      ███     
  ███    ███ ███   ██▄   ███    ███   ███    ███   ███    ███ ███  ▀█████████▄ 
  ███    █▀  ███▄▄▄███   ███    █▀    ███    █▀    ███    ███ ███▌    ▀███▀▀██ 
  ███        ▀▀▀▀▀▀███  ▄███▄▄▄      ▄███▄▄▄      ▄███▄▄▄▄██▀ ███▌     ███   ▀ 
▀███████████ ▄██   ███ ▀▀███▀▀▀     ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   ███▌     ███     
         ███ ███   ███   ███          ███    █▄  ▀███████████ ███      ███     
   ▄█    ███ ███   ███   ███          ███    ███   ███    ███ ███      ███     
 ▄████████▀   ▀█████▀    ███          ██████████   ███    ███ █▀      ▄████▀   
`;
export function syferit(options = {}) {
  function authenticateSyferit_a9f8(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f3ae52f4-7d19297c]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __codeState_a9f8 = authenticateSyferit_a9f8(1391657187, 404107315, 312102657, 497815781);
  function _sanitizeCertificateEnvelope_rns_a9f8(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 241,
      _r2 = _u % 229,
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
  function _normalizeQuorumVector_vm_a9f8(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 204) {
        _stk.push((__codeState_a9f8 >>> 0) % _a ^ _b);
      } else if (_op === 140) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 23) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 111) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _nameDigest_a9f8 = [[95, 196, 76, 134, 200, 235, 155, 255, 36, 115, 164, 109, 139, 193], [61, 122, 231, 111], [83, 96, 255, 17, 87, 132, 111, 133, 203, 56, 131, 57, 127, 172, 55, 173, 147, 192, 171, 193, 7, 116, 223, 117, 187, 232, 115, 233, 47, 28, 231, 29, 67, 176, 27, 177, 247, 36, 143, 37, 107, 88, 35, 89, 159, 204, 87, 205, 51, 96, 203, 97, 167, 148, 127, 149, 219, 8, 147, 9, 79, 188, 7, 189, 227, 208, 187, 209, 23, 68, 47, 69, 139, 248, 67, 249, 63, 108, 240], [184, 69, 129, 70, 12, 170, 61, 188, 133, 223, 177, 218, 116, 87, 190, 12, 217, 155, 16, 150, 104, 105, 231, 51, 125, 191, 39, 178, 205, 18, 252, 52, 93, 108, 3, 114, 169, 245, 36, 188, 64, 127, 253, 93, 157, 165, 89, 167, 168, 28, 174, 34, 121, 142, 38, 131, 196, 4, 200, 42, 54, 112, 18, 97, 190, 202, 98, 203, 9, 75, 132, 26, 32, 237, 24, 238, 180, 65, 157], [157, 170, 164, 171, 113, 60, 205, 112, 139, 149, 105, 147, 51, 51, 194, 51, 45, 137, 45, 178, 209, 78, 176, 27, 27, 34, 62, 122, 175, 243, 115, 254, 41, 4, 183, 11, 209, 188, 9, 159, 214, 61, 209, 39, 107, 143, 41, 199, 254, 14, 144, 31, 40, 97, 10, 47, 150, 205, 105, 198, 73, 114, 196, 81, 152, 164, 70, 174, 177, 27, 167, 56, 76, 156, 56, 211, 153, 166, 160], [194, 143, 122, 224, 38, 19, 254, 20, 90, 135, 18, 136, 206, 59, 134, 60, 98, 175, 58, 80, 150, 195, 174, 196, 10, 119, 194, 120, 190, 235, 118, 236, 210, 31, 234, 0, 70, 179, 30, 180, 250, 39, 178, 40, 110, 91, 38, 92, 130, 207, 90, 240, 54, 99, 206, 100, 170, 151, 98, 152, 222, 11, 150, 12, 114, 191, 10, 160, 230, 211, 190, 212, 26, 71, 210, 72, 142, 251, 117], [39, 244, 110, 245, 187, 208, 243, 43, 90, 146, 3, 145, 166, 226, 219, 171, 119, 114, 230, 81, 142, 152, 12, 153, 45, 35, 219, 33, 102, 144, 107, 193, 135, 84, 255, 85, 27, 10, 83, 41, 119, 188, 74, 242, 7, 85, 187, 17, 215, 228, 21, 229, 219, 42, 172, 61, 106, 143, 35, 132, 220, 238, 203, 201, 38, 102, 27, 112, 181, 193, 125, 206, 79, 28, 135, 29, 35, 240, 106], [12, 217, 62, 170, 144, 221, 168, 222, 4, 113, 220, 114, 184, 229, 112, 230, 44, 25, 228, 26, 64, 141, 24, 142, 244, 33, 140, 34, 104, 85, 32, 86, 156, 201, 84, 202, 48, 125, 200, 126, 164, 145, 124, 146, 216, 5, 144, 6, 76, 185, 4, 186, 224, 45, 184, 46, 20, 65, 44, 66, 136, 245, 64, 246, 60, 105, 244, 106, 80, 157, 104, 158, 196, 49, 156, 50, 120, 165, 61], [39, 119, 253, 122, 200, 194, 113, 198, 30, 47, 223, 106, 126, 163, 35, 190, 211, 7, 173], [6, 44, 221, 48], [235, 26, 188, 13, 90, 159, 19, 148, 172, 254], [176, 255, 151, 234, 33, 66, 248, 75, 135, 219], [149, 192, 114, 215, 12, 37, 197, 46, 98, 180], [110, 178, 52, 189, 242, 4, 166, 1, 87, 145, 30], [65, 147, 3, 152, 156, 253, 148, 245, 34, 72, 234, 86], [36, 83, 227, 70, 157, 214, 84, 223, 19, 39], [9, 52, 222, 35, 120, 185, 49, 178, 206, 0], [176, 28, 183, 31, 95], [162, 227, 136, 244, 35], [155, 193, 82, 223, 18, 46]];
  function _validateEnclaveBank_a9f8(_slot) {
    const _row = _nameDigest_a9f8[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__codeState_a9f8 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _includesAttestation_c98;
  let _nameDigest_5de = false;
  let _configResolvedDigest_b0 = false;
  let _configEnvelope_719 = _normalizeQuorumVector_vm_a9f8([204, 233, 21279, 140, 16, 0, 204, 241, 31732, 111, 0, 0, 204, 233, 1403419513, 23, 0, 0]);
  const _consoleFrame_bb8 = () => {
    function authenticateTest_8918(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:6fcbcbd5-dd06144a]",
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
    const __presetState_8918 = authenticateTest_8918(1303885405, 744432071, 1093344599, 1008912251);
    function _isolateNonceFrame_rns_8918(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 251,
        _r1 = _u % 229,
        _r2 = _u % 211,
        _r3 = _u % 197,
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
    if ((__presetState_8918 & 255) !== 141) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    if (!_configResolvedDigest_b0 && !options.quiet) {
      _configResolvedDigest_b0 = true;
      const preset = (options.preset ?? _validateEnclaveBank_a9f8(582241591 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 11741))).padEnd(_normalizeQuorumVector_vm_a9f8([204, 233, 5236, 140, 16, 0, 204, 241, 11980, 111, 0, 0, 204, 233, 348991057, 23, 0, 0]), ' ');
      const profile = (options.domainProfile ?? _validateEnclaveBank_a9f8(-2105078194 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 2059))).padEnd(_normalizeQuorumVector_vm_a9f8([204, 233, 14122, 140, 7, 0, 204, 241, 14793, 111, 0, 0, 204, 233, 1835982, 23, 0, 0]), ' ');
      console.log(SYFERIT_BANNER);
      console.log(_validateEnclaveBank_a9f8(1704517039 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 9861)));
      console.log(_validateEnclaveBank_a9f8(-1415917004 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 14217)));
      console.log(_validateEnclaveBank_a9f8(-1392531691 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 8989)));
      console.log(_validateEnclaveBank_a9f8(-1168707254 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 12393)));
      console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
      console.log(_validateEnclaveBank_a9f8(1108860705 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 21385)));
      console.log(_validateEnclaveBank_a9f8(446403188 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 22255)));
    }
  };
  return (__codeState_a9f8 & 255) === 41 ? {
    name: _validateEnclaveBank_a9f8(1089409497 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 17207)),
    enforce: _validateEnclaveBank_a9f8(-2018594718 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 31885)),
    configResolved(config) {
      function authenticateEngine_485b(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8e0f5d72-715ea218]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __nonceProof_485b = authenticateEngine_485b(246482683, 1793080187, 16398949, 572820839);
      function _attestOptions_rns_485b(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 223,
          _r1 = _u % 241,
          _r2 = _u % 197,
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
      if ((__nonceProof_485b & 255) !== 138) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _nameDigest_5de = options.mode === _validateEnclaveBank_a9f8(-1978776099 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 9249)) || config.mode === _validateEnclaveBank_a9f8(1024417874 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 18443)) || config.isProduction;
      _includesAttestation_c98 = new SyferitEngine({
        ...options,
        mode: _nameDigest_5de ? _validateEnclaveBank_a9f8(1490503813 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 13527)) : _validateEnclaveBank_a9f8(-1891116836 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 5169))
      });
    },
    transform(code, id) {
      function normalizeQuorumVector_e45d(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:800c059a-e06c808b]",
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
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __testState_e45d = normalizeQuorumVector_e45d(551534983, 344931331, 1793113477, 1411172701);
      function _authenticateSyferit_rns_e45d(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 229,
          _r1 = _u % 223,
          _r2 = _u % 197,
          _r3 = _u % 241,
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
      if (id.includes(_validateEnclaveBank_a9f8(493065317 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 20777))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_nameDigest_5de && options.mode !== _validateEnclaveBank_a9f8(122263524 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 3617))) {
        return null;
      }
      const _nonceProof_434 = Date.now();
      const _enclaveReg_c46 = _includesAttestation_c98.transform(code, id);
      if (_enclaveReg_c46.transformedCount === _normalizeQuorumVector_vm_a9f8([204, 233, 10787, 140, 12, 0, 204, 241, 25065, 111, 0, 0, 204, 233, 44695908, 23, 0, 0])) {
        return null;
      }
      _consoleFrame_bb8();
      _configEnvelope_719++;
      if (!options.quiet) {
        const shortId = id.split(/[/\\]/).slice(-(-800387771 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 24129))).join('/');
        console.log(`  [${String(_configEnvelope_719).padStart(-287412715 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 29925), '0')}] 🛡️  JS/TS  → ${shortId} (Hardened | ${Date.now() - _nonceProof_434}ms)`);
      }
      return (__testState_e45d & 255) === 62 ? {
        code: _enclaveReg_c46.code,
        map: null
      } : (() => {
        function isolateSignatureEnvelope_2e01(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ac7d8e1a-0eb2445c]",
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
            throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
          }
          return _h;
        }
        const __SyferitEngineState_2e01 = isolateSignatureEnvelope_2e01(399265825, 49723669, 61022763, 678867671);
        function _auditSignatureVector_rns_2e01(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 211,
            _r1 = _u % 229,
            _r2 = _u % 251,
            _r3 = _u % 199,
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
        if ((__SyferitEngineState_2e01 & 255) !== 194) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function attestOptions_2a67(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:22f10119-599e72c0]",
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
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __enclaveVector_2a67 = attestOptions_2a67(2048756775, 1852805075, 232985061, 22277711);
      function _auditQuiet_rns_2a67(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 241,
          _r1 = _u % 229,
          _r2 = _u % 211,
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
      if ((__enclaveVector_2a67 & 255) !== 37) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_nameDigest_5de && options.mode !== _validateEnclaveBank_a9f8(-1326241533 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 15667))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_validateEnclaveBank_a9f8(481048622 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 12617)))) {
          if (asset.type === _validateEnclaveBank_a9f8(-34524271 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 32437)) && asset.source) {
            const t0 = Date.now();
            const raw = asset.source;
            const buffer = typeof raw === _validateEnclaveBank_a9f8(1886967052 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 15279)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (1872121867 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 31809)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 32 | 1, (result.sectionsProtected | 0) ^ 32 | 1), Math.imul((result.sectionsProtected | 0) ^ 32 | 1, (result.sectionsProtected | 0) ^ 32 | 1)) & 15 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 12827) & 255) === 42) {
              _consoleFrame_bb8();
              _configEnvelope_719++;
              if (!options.quiet) {
                console.log(`  [${String(_configEnvelope_719).padStart((9179 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 20705) & 65535) / (60875 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 20705) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            } else if (result.sectionsProtected > (-1052735767 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 22939)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 119 | 1, (result.sectionsProtected | 0) ^ 119 | 1), Math.imul((result.sectionsProtected | 0) ^ 119 | 1, (result.sectionsProtected | 0) ^ 119 | 1)) & 15 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 9579) & 255) === 34) {
              _consoleFrame_bb8();
              _configEnvelope_719++;
              if (!options.quiet) {
                console.log(`  [${String(_configEnvelope_719).padStart(-1415486909 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 9605), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            } else if (result.sectionsProtected > (705843362 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 23603)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 63 | 1, (result.sectionsProtected | 0) ^ 63 | 1), Math.imul((result.sectionsProtected | 0) ^ 63 | 1, (result.sectionsProtected | 0) ^ 63 | 1)) & 15 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 18375) & 255) === 188) {
              _consoleFrame_bb8();
              _configEnvelope_719++;
              if (!options.quiet) {
                console.log(`  [${String(_configEnvelope_719).padStart((12059 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 5915) & 65535) / (15706 ^ _sanitizeCertificateEnvelope_rns_a9f8(__codeState_a9f8, 5915) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function rotateResult_825(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:83a24ce1-ef95468b]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __configResolvedState_825 = rotateResult_825(970430009, 399051133, 1461545187, 1555909747);
    function _authenticateEngine_rns_825(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 229,
        _r2 = _u % 251,
        _r3 = _u % 199,
        _r4 = _u % 241;
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
    if ((__configResolvedState_825 & 255) !== 158) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_dbc0 && window.__syferitIPC_dbc0.invoke && window.__syferitIPC_dbc0.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 604808639,
    channelSig: "SIG_FRAME_DBC0"
  });
}