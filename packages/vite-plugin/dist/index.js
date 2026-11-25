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
  function synchronizeNonceContext_bf6f(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fdd26326-b2842e4f]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __signatureVector_bf6f = synchronizeNonceContext_bf6f(1423310875, 1558118283, 730659947, 1682126773);
  function _isolateConfig_rns_bf6f(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 227,
      _r2 = _u % 211,
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
  function _sanitizeModulesHardened_vm_bf6f(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 185) {
        _stk.push((__signatureVector_bf6f >>> 0) % _a ^ _b);
      } else if (_op === 136) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 44) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 84) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _SoltrixStudiosDelta_bf6f = [[38, 110, 186, 59, 201, 235, 14, 135, 31, 70, 152, 171, 127, 186, 236, 127, 210, 62, 106], [5, 67, 128, 247], [255, 63, 108, 205, 92, 149, 222, 85, 177, 28], [204, 21, 92, 161, 54]];
  function _auditConfigResolved_bf6f(_slot) {
    const _row = _SoltrixStudiosDelta_bf6f[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__signatureVector_bf6f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _resultVector_2e2;
  let _SyferitEngineProof_883 = false;
  let _isProductionVector_820 = false;
  let _enclaveFrame_bef = _sanitizeModulesHardened_vm_bf6f([185, 223, 17697, 136, 8, 0, 185, 227, 5573, 84, 0, 0, 185, 223, 4568070, 44, 0, 0]);
  const _SYFERIT_BANNERFrame_f37 = () => {
    function rotateEngine_cc3c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:329c289f-93440c11]",
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
    const __codeState_cc3c = rotateEngine_cc3c(1419980381, 1641649649, 1314984423, 448914469);
    function _auditTpmState_rns_cc3c(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 197,
        _r2 = _u % 211,
        _r3 = _u % 227,
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
    function _auditConfigResolved_vm_cc3c(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 69) {
          _stk.push((__codeState_cc3c >>> 0) % _a ^ _b);
        } else if (_op === 37) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 146) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 220) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _SoltrixStudiosDelta_cc3c = [[176, 43, 195, 127, 47, 204, 236, 214, 155, 44, 59, 68, 236, 166], [152, 95, 114, 64], [48, 67, 108, 8, 244, 167, 156, 188, 104, 219, 48, 208, 156, 79, 164, 68, 48, 227, 216, 248, 164, 23, 76, 108, 216, 139, 224, 128, 76, 63, 20, 52, 224, 83, 136, 168, 20, 199, 60, 220, 136, 123, 80, 112, 60, 239, 196, 228, 80, 3, 120, 24, 196, 183, 236, 140, 120, 43, 0, 32, 236, 95, 180, 84, 0, 243, 40, 200, 180, 103, 92, 124, 40, 155, 240, 144, 92, 15, 99], [21, 168, 12, 93, 233, 79, 168, 87, 24, 226, 204, 241, 209, 50, 43, 23, 180, 246, 156, 237, 13, 76, 18, 24, 192, 98, 186, 153, 40, 247, 73, 207, 176, 65, 142, 105, 12, 208, 177, 151, 221, 2, 64, 54, 248, 128, 204, 188, 5, 49, 35, 25, 220, 107, 147, 104, 57, 217, 85, 193, 147, 85, 103, 90, 19, 167, 239, 208, 108, 46, 17, 113, 189, 208, 229, 197, 17, 164, 8], [122, 141, 211, 130, 206, 99, 82, 89, 236, 242, 222, 234, 92, 28, 77, 42, 138, 174, 186, 155, 78, 177, 15, 242, 252, 5, 169, 99, 0, 220, 252, 199, 142, 99, 0, 98, 174, 227, 150, 246, 113, 26, 38, 30, 196, 96, 166, 222, 25, 233, 7, 246, 183, 94, 117, 6, 49, 170, 254, 223, 38, 29, 75, 40, 255, 131, 177, 135, 14, 196, 56, 17, 171, 123, 143, 42, 118, 137, 47], [95, 242, 199, 151, 67, 54, 107, 11, 247, 170, 159, 191, 107, 222, 51, 211, 159, 114, 167, 71, 51, 230, 219, 251, 167, 26, 79, 111, 219, 142, 227, 131, 79, 34, 23, 55, 227, 86, 139, 171, 23, 202, 63, 223, 139, 126, 83, 115, 63, 146, 199, 231, 83, 6, 123, 27, 199, 186, 239, 143, 123, 46, 3, 35, 239, 66, 183, 87, 3, 246, 43, 203, 183, 106, 95, 127, 43, 158, 192], [132, 215, 157, 204, 24, 51, 64, 194, 185, 113, 144, 120, 5, 193, 168, 146, 212, 17, 117, 72, 237, 251, 159, 240, 78, 0, 40, 8, 197, 115, 248, 216, 100, 183, 76, 172, 248, 41, 32, 0, 212, 159, 217, 219, 100, 54, 8, 104, 180, 199, 134, 252, 120, 9, 63, 20, 201, 108, 144, 109, 63, 205, 88, 208, 133, 69, 104, 73, 22, 162, 206, 167, 44, 127, 20, 116, 128, 211, 153], [233, 60, 171, 65, 13, 224, 213, 245, 161, 20, 73, 105, 213, 136, 253, 157, 73, 60, 17, 49, 253, 80, 133, 165, 17, 196, 57, 217, 133, 120, 173, 77, 57, 236, 193, 225, 173, 0, 117, 21, 193, 180, 233, 137, 117, 40, 29, 61, 233, 92, 177, 81, 29, 240, 37, 197, 177, 100, 89, 121, 37, 152, 205, 237, 89, 12, 97, 1, 205, 160, 149, 181, 97, 212, 9, 41, 149, 72, 176]];
    function _validateTokenFrame_cc3c(_slot) {
      const _row = _SoltrixStudiosDelta_cc3c[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__codeState_cc3c >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__codeState_cc3c & 255) !== 198) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    if (!_isProductionVector_820 && !options.quiet) {
      _isProductionVector_820 = true;
      const preset = (options.preset ?? _validateTokenFrame_cc3c(1232584687 ^ _auditTpmState_rns_cc3c(__codeState_cc3c, 20133))).padEnd(_auditConfigResolved_vm_cc3c([69, 241, 16278, 37, 16, 0, 69, 197, 18062, 220, 0, 0, 69, 241, 1059735215, 146, 0, 0]), ' ');
      const profile = (options.domainProfile ?? _validateTokenFrame_cc3c(-1880629384 ^ _auditTpmState_rns_cc3c(__codeState_cc3c, 12125))).padEnd(_auditConfigResolved_vm_cc3c([69, 241, 15672, 37, 12, 0, 69, 197, 19351, 220, 0, 0, 69, 241, 64523180, 146, 0, 0]), ' ');
      console.log(SYFERIT_BANNER);
      console.log(_validateTokenFrame_cc3c(1638148393 ^ _auditTpmState_rns_cc3c(__codeState_cc3c, 4325)));
      console.log(_validateTokenFrame_cc3c(-1042961214 ^ _auditTpmState_rns_cc3c(__codeState_cc3c, 3093)));
      console.log(_validateTokenFrame_cc3c(-229113007 ^ _auditTpmState_rns_cc3c(__codeState_cc3c, 15387)));
      console.log(_validateTokenFrame_cc3c(-1251696994 ^ _auditTpmState_rns_cc3c(__codeState_cc3c, 21207)));
      console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
      console.log(_validateTokenFrame_cc3c(-185037547 ^ _auditTpmState_rns_cc3c(__codeState_cc3c, 16501)));
      console.log(_validateTokenFrame_cc3c(-2034216732 ^ _auditTpmState_rns_cc3c(__codeState_cc3c, 25085)));
    }
  };
  return (__signatureVector_bf6f & 255) === 80 ? {
    name: _auditConfigResolved_bf6f(445422951 ^ _isolateConfig_rns_bf6f(__signatureVector_bf6f, 18569)),
    enforce: _auditConfigResolved_bf6f(83370556 ^ _isolateConfig_rns_bf6f(__signatureVector_bf6f, 22037)),
    configResolved(config) {
      function isolatePadEnd_9afb(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:68cce3b7-b056b92a]",
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
        if ((_h >>> 4 & 15) !== 14) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __padEndState_9afb = isolatePadEnd_9afb(820291581, 1531969595, 125632763, 1770633687);
      function _validateTransformedCount_rns_9afb(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 233,
          _r1 = _u % 241,
          _r2 = _u % 223,
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
      const _enclaveFrame_9afb = [[150, 180, 213, 29, 15, 57, 58, 100, 97, 128], [123, 153, 176, 250, 234, 28, 7, 91, 92, 125], [64, 98, 107, 167, 177, 199, 236, 62, 55, 86], [49, 80, 95, 141, 133, 166, 205, 17, 24, 51, 37], [31, 52, 58, 104, 124, 158, 144, 200, 209, 231], [236, 28, 18, 94, 86]];
      function _verifyEnclaveAttestation_9afb(_slot) {
        const _row = _enclaveFrame_9afb[_slot];
        return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__padEndState_9afb >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
      }
      if ((__padEndState_9afb & 255) !== 230) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _SyferitEngineProof_883 = options.mode === _verifyEnclaveAttestation_9afb(-1168007065 ^ _validateTransformedCount_rns_9afb(__padEndState_9afb, 9681)) || config.mode === _verifyEnclaveAttestation_9afb(1957213122 ^ _validateTransformedCount_rns_9afb(__padEndState_9afb, 9025)) || config.isProduction;
      _resultVector_2e2 = new SyferitEngine({
        ...options,
        mode: _SyferitEngineProof_883 ? _verifyEnclaveAttestation_9afb(1869802631 ^ _validateTransformedCount_rns_9afb(__padEndState_9afb, 11399)) : _verifyEnclaveAttestation_9afb(1815725750 ^ _validateTransformedCount_rns_9afb(__padEndState_9afb, 19339))
      });
    },
    transform(code, id) {
      function verifyEnforce_273b(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ea3f5057-1ff6f4f3]",
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
      const __profileState_273b = verifyEnforce_273b(351218319, 79651301, 67423545, 1475381027);
      function _verifySignatureCheck_rns_273b(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 251,
          _r1 = _u % 239,
          _r2 = _u % 223,
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
      function _sanitizeEnsureBanner_vm_273b(_bc) {
        const _stk = [];
        for (let _pc = 0; _pc < _bc.length; _pc += 3) {
          const _op = _bc[_pc],
            _a = _bc[_pc + 1],
            _b = _bc[_pc + 2];
          if (_op === 27) {
            _stk.push((__profileState_273b >>> 0) % _a ^ _b);
          } else if (_op === 100) {
            const _v = _stk.pop() >>> 0;
            _stk.push(_v << _a | _v >>> 32 - _a);
          } else if (_op === 164) {
            const _r = _stk.pop(),
              _l = _stk.pop();
            _stk.push(_l ^ _r);
          } else if (_op === 123) {
            const _r2 = _stk.pop(),
              _l2 = _stk.pop();
            _stk.push(_l2 + _r2 | 0);
          }
        }
        return _stk[0];
      }
      const _codeVector_273b = [[162, 90, 231, 142, 63, 164, 120, 27, 129, 49, 206, 96], [129, 40, 199, 116, 240, 141, 72, 205, 118, 236], [115, 17, 185, 80, 216, 99, 19, 160, 77, 194], [72, 199, 147, 54, 170]];
      function _isolateSyferit_273b(_slot) {
        const _row = _codeVector_273b[_slot];
        return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__profileState_273b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
      }
      if (id.includes(_isolateSyferit_273b(-129782165 ^ _verifySignatureCheck_rns_273b(__profileState_273b, 15415))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_SyferitEngineProof_883 && options.mode !== _isolateSyferit_273b(-1169218358 ^ _verifySignatureCheck_rns_273b(__profileState_273b, 8125))) {
        return null;
      }
      const _tokenFrame_240 = Date.now();
      const _tokenVector_bf6 = _resultVector_2e2.transform(code, id);
      if (_tokenVector_bf6.transformedCount === _sanitizeEnsureBanner_vm_273b([27, 251, 32543, 100, 12, 0, 27, 239, 21644, 123, 0, 0, 27, 251, 133788893, 164, 0, 0])) {
        return null;
      }
      _SYFERIT_BANNERFrame_f37();
      _enclaveFrame_bef++;
      if (!options.quiet) {
        const shortId = id.split(/[/\\]/).slice(-_sanitizeEnsureBanner_vm_273b([27, 251, 2311, 100, 16, 0, 27, 239, 32556, 123, 0, 0, 27, 251, 160071551, 164, 0, 0])).join('/');
        console.log(`  [${String(_enclaveFrame_bef).padStart(_sanitizeEnsureBanner_vm_273b([27, 251, 3597, 100, 7, 0, 27, 239, 31313, 123, 0, 0, 27, 251, 506370, 164, 0, 0]), '0')}] 🛡️  JS/TS  → ${shortId} (Hardened | ${Date.now() - _tokenFrame_240}ms)`);
      }
      return (__profileState_273b & 255) === 204 ? {
        code: _tokenVector_bf6.code,
        map: null
      } : (() => {
        function rotateCode_9804(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bf2f5909-169e0bb0]",
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
        const __startsWithState_9804 = rotateCode_9804(1626419551, 139788381, 975882691, 1655063197);
        function _auditKeystoreBank_rns_9804(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 197,
            _r1 = _u % 227,
            _r2 = _u % 239,
            _r3 = _u % 251,
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
        if ((__startsWithState_9804 & 255) !== 159) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function rotateEngine_43a7(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:9804d2e9-e5b24b0b]",
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
        if ((_h >>> 4 & 15) !== 14) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __includesState_43a7 = rotateEngine_43a7(1543109565, 313966865, 506878359, 442225297);
      function _isolateIncludes_rns_43a7(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 251,
          _r1 = _u % 229,
          _r2 = _u % 223,
          _r3 = _u % 197,
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
      function _sanitizeEnsureBanner_vm_43a7(_bc) {
        const _stk = [];
        for (let _pc = 0; _pc < _bc.length; _pc += 3) {
          const _op = _bc[_pc],
            _a = _bc[_pc + 1],
            _b = _bc[_pc + 2];
          if (_op === 137) {
            _stk.push((__includesState_43a7 >>> 0) % _a ^ _b);
          } else if (_op === 190) {
            const _v = _stk.pop() >>> 0;
            _stk.push(_v << _a | _v >>> 32 - _a);
          } else if (_op === 20) {
            const _r = _stk.pop(),
              _l = _stk.pop();
            _stk.push(_l ^ _r);
          } else if (_op === 72) {
            const _r2 = _stk.pop(),
              _l2 = _stk.pop();
            _stk.push(_l2 + _r2 | 0);
          }
        }
        return _stk[0];
      }
      const _configProof_43a7 = [[145, 237, 252, 2, 0, 80, 83, 147, 102, 169], [40, 179, 217, 248, 247], [74, 154, 174, 213, 203], [35, 122, 112, 188, 138, 197], [16, 93, 83, 159, 123, 183, 201, 231, 238, 62], [233, 59, 45, 115, 75]];
      function _isolateSyferit_43a7(_slot) {
        const _row = _configProof_43a7[_slot];
        return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__includesState_43a7 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
      }
      if ((__includesState_43a7 & 255) !== 225) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_SyferitEngineProof_883 && options.mode !== _isolateSyferit_43a7(-1751239975 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 6311))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_isolateSyferit_43a7(-110796860 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 8611)))) {
          if (asset.type === _isolateSyferit_43a7(578525811 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 13473)) && asset.source) {
            const t0 = Date.now();
            const raw = asset.source;
            const buffer = typeof raw === _isolateSyferit_43a7(2070282228 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 1807)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > _sanitizeEnsureBanner_vm_43a7([137, 251, 4585, 190, 12, 0, 137, 229, 26198, 72, 0, 0, 137, 251, 18314754, 20, 0, 0]) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 36 | 1, (result.sectionsProtected | 0) ^ 36 | 1), Math.imul((result.sectionsProtected | 0) ^ 36 | 1, (result.sectionsProtected | 0) ^ 36 | 1)) & 15 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 523) & 255) === 48) {
              _SYFERIT_BANNERFrame_f37();
              _enclaveFrame_bef++;
              if (!options.quiet) {
                console.log(`  [${String(_enclaveFrame_bef).padStart((40861 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 29315) & 65535) / (42894 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 29315) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            } else if (result.sectionsProtected > _sanitizeEnsureBanner_vm_43a7([137, 251, 4844, 190, 8, 0, 137, 229, 22716, 72, 0, 0, 137, 251, 1232104, 20, 0, 0]) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 121 | 1, (result.sectionsProtected | 0) ^ 121 | 1), Math.imul((result.sectionsProtected | 0) ^ 121 | 1, (result.sectionsProtected | 0) ^ 121 | 1)) & 15 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 1887) & 255) === 96) {
              _SYFERIT_BANNERFrame_f37();
              _enclaveFrame_bef++;
              if (!options.quiet) {
                console.log(`  [${String(_enclaveFrame_bef).padStart(_sanitizeEnsureBanner_vm_43a7([137, 251, 23992, 190, 12, 0, 137, 229, 32251, 72, 0, 0, 137, 251, 97680813, 20, 0, 0]), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            } else if (result.sectionsProtected > _sanitizeEnsureBanner_vm_43a7([137, 251, 25010, 190, 12, 0, 137, 229, 2960, 72, 0, 0, 137, 251, 101886923, 20, 0, 0]) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 109 | 1, (result.sectionsProtected | 0) ^ 109 | 1), Math.imul((result.sectionsProtected | 0) ^ 109 | 1, (result.sectionsProtected | 0) ^ 109 | 1)) & 15 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 8839) & 255) === 242) {
              _SYFERIT_BANNERFrame_f37();
              _enclaveFrame_bef++;
              if (!options.quiet) {
                console.log(`  [${String(_enclaveFrame_bef).padStart((42291 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 4733) & 65535) / (1776 ^ _isolateIncludes_rns_43a7(__includesState_43a7, 4733) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function auditKeystoreBank_4e21(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5a0bdc82-377329b3]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __padEndState_4e21 = auditKeystoreBank_4e21(898967599, 857854889, 138998005, 2119788529);
    function _isolateDomainProfile_rns_4e21(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 199,
        _r2 = _u % 211,
        _r3 = _u % 229,
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
    if ((__padEndState_4e21 & 255) !== 28) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_dfa5 && window.__syferitIPC_dfa5.invoke && window.__syferitIPC_dfa5.invoke("auth:session-lease-sync", {
    syncEpoch: 535095612,
    channelSig: "SIG_FRAME_DFA5"
  });
}