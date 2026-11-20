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
  function verifyEnforce_7ca9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:44b9af31-2f4ba1b1]",
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
    if ((_h >>> 4 & 15) !== 10) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __enforceState_7ca9 = verifyEnforce_7ca9(309290127, 2042990103, 794710369, 1789231303);
  function _verifySignatureEnvelope_rns_7ca9(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 239,
      _r2 = _u % 251,
      _r3 = _u % 241,
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
  function _validateTest_vm_7ca9(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 207) {
        _stk.push((__enforceState_7ca9 >>> 0) % _a ^ _b);
      } else if (_op === 51) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 78) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 135) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _profileVector_7ca9 = [[202, 2, 255, 103, 83, 153, 68, 243], [180, 233, 211, 91], [204, 141, 131, 29, 208, 17, 59, 177, 68, 133, 175, 37, 248, 57, 195, 89, 108, 173, 119, 205, 128, 193, 235, 97, 52, 117, 31, 149, 168, 233, 179, 9, 220, 29, 39, 189, 112, 177, 91, 209, 228, 37, 207, 69, 24, 89, 99, 249, 140, 205, 151, 109, 32, 97, 11, 129, 84, 149, 191, 53, 200, 9, 211, 169, 124, 189, 71, 221, 144, 209, 251, 113, 4, 69, 111, 229, 184, 249, 132], [49, 242, 173, 82, 133, 53, 201, 64, 124, 168, 109, 206, 237, 248, 138, 0, 81, 12, 124, 226, 225, 150, 179, 47, 228, 40, 27, 134, 116, 189, 40, 56, 212, 27, 239, 102, 32, 106, 16, 128, 249, 200, 161, 73, 4, 74, 45, 171, 33, 139, 130, 22, 240, 49, 242, 159, 93, 147, 52, 222, 207, 31, 198, 109, 55, 125, 78, 223, 128, 212, 240, 102, 89, 26, 68, 250, 45, 238, 169], [22, 215, 112, 183, 234, 169, 241, 68, 48, 56, 61, 159, 184, 198, 174, 39, 166, 20, 25, 142, 106, 251, 108, 15, 128, 79, 202, 118, 36, 102, 95, 202, 162, 185, 227, 23, 74, 41, 117, 235, 173, 208, 133, 43, 224, 58, 5, 211, 117, 147, 100, 227, 211, 20, 214, 59, 13, 96, 93, 202, 194, 231, 168, 37, 19, 89, 18, 178, 42, 142, 155, 12, 247, 49, 236, 223, 18, 211, 76], [123, 60, 38, 236, 191, 224, 138, 0, 211, 20, 62, 180, 71, 136, 82, 40, 251, 60, 198, 92, 111, 80, 122, 240, 131, 196, 238, 100, 55, 120, 2, 152, 171, 236, 182, 12, 223, 0, 42, 160, 115, 180, 94, 212, 231, 40, 242, 72, 27, 92, 102, 252, 143, 240, 154, 16, 35, 100, 14, 132, 87, 152, 162, 56, 203, 12, 214, 172, 127, 160, 74, 192, 147, 212, 254, 116, 7, 72, 33], [160, 97, 58, 193, 52, 109, 223, 55, 221, 7, 247, 101, 89, 143, 7, 167, 240, 199, 210, 69, 1, 5, 96, 229, 170, 214, 143, 53, 249, 61, 87, 205, 0, 193, 43, 161, 148, 119, 191, 53, 240, 41, 126, 198, 184, 248, 231, 29, 80, 17, 97, 241, 84, 183, 128, 1, 237, 58, 247, 144, 67, 131, 55, 197, 161, 243, 207, 68, 58, 124, 81, 210, 200, 137, 243, 105, 92, 29, 54], [133, 70, 202, 86, 105, 170, 116, 202, 157, 222, 232, 126, 49, 114, 28, 146, 165, 230, 176, 6, 217, 26, 36, 186, 77, 142, 88, 46, 225, 34, 204, 66, 21, 86, 96, 246, 137, 202, 148, 106, 61, 126, 8, 158, 81, 146, 188, 50, 197, 6, 208, 166, 121, 186, 68, 218, 237, 46, 248, 78, 1, 66, 108, 226, 181, 246, 128, 22, 41, 106, 52, 138, 93, 158, 168, 62, 241, 50, 209], [188, 226, 193, 78, 115, 111, 37, 202, 149, 218, 179, 126, 245, 62, 23, 130, 104, 178, 113], [159, 223, 169, 36], [100, 167, 144, 17, 221, 10, 231, 96, 83, 147], [73, 136, 75, 254, 184, 237, 204, 71, 14, 76], [46, 109, 38, 219, 135, 208, 169, 58, 233, 41], [231, 33, 24, 129, 123, 183, 114, 21, 206, 2, 226], [198, 6, 247, 108, 99, 144, 72, 249, 165, 253, 222, 66], [189, 252, 215, 74, 20, 65, 56, 171, 154, 216], [130, 193, 178, 55, 243, 36, 5, 142, 117, 181], [57, 175, 99, 11, 198], [93, 142, 84, 248, 164], [18, 86, 62, 171, 155, 209]];
  function _verifyDomainProfile_7ca9(_slot) {
    const _row = _profileVector_7ca9[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enforceState_7ca9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _ensureBannerFrame_c5a;
  let _enclaveDigest_7c2 = false;
  let _nonceScalar_1bf = false;
  let _quorumDigest_7dc = _validateTest_vm_7ca9([207, 197, 764, 51, 16, 0, 207, 239, 17600, 135, 0, 0, 207, 197, 48055438, 78, 0, 0]);
  const _modeAttestation_ed3 = () => {
    function auditEnclaveDigest_fa01(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:dd553612-7c97b553]",
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
      if ((_h >>> 4 & 15) !== 11) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __bannerPrintedState_fa01 = auditEnclaveDigest_fa01(154847803, 1878755489, 537333735, 1859699439);
    function _rotateResult_rns_fa01(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 251,
        _r2 = _u % 199,
        _r3 = _u % 227,
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
    if ((__bannerPrintedState_fa01 & 255) !== 182) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    if (!_nonceScalar_1bf && !options.quiet) {
      _nonceScalar_1bf = true;
      const preset = (options.preset ?? _verifyDomainProfile_7ca9(-2120257397 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 2323))).padEnd(_validateTest_vm_7ca9([207, 197, 22959, 51, 12, 0, 207, 239, 12143, 135, 0, 0, 207, 197, 93916977, 78, 0, 0]), ' ');
      const profile = (options.domainProfile ?? _verifyDomainProfile_7ca9(-654810804 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 22725))).padEnd(_validateTest_vm_7ca9([207, 197, 11216, 51, 16, 0, 207, 239, 6789, 135, 0, 0, 207, 197, 737221313, 78, 0, 0]), ' ');
      console.log(SYFERIT_BANNER);
      console.log(_verifyDomainProfile_7ca9(223747531 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 18327)));
      console.log(_verifyDomainProfile_7ca9(302465698 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 16981)));
      console.log(_verifyDomainProfile_7ca9(1470002505 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 25037)));
      console.log(_verifyDomainProfile_7ca9(1517471314 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 10509)));
      console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
      console.log(_verifyDomainProfile_7ca9(1758410963 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 32409)));
      console.log(_verifyDomainProfile_7ca9(2052673886 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 5651)));
    }
  };
  return (__enforceState_7ca9 & 255) === 162 ? {
    name: _verifyDomainProfile_7ca9(1798916967 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 671)),
    enforce: _verifyDomainProfile_7ca9(-763379288 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 31321)),
    configResolved(config) {
      function validateQuiet_ce7c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3322c8c4-88f2c5f6]",
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
      const __codeState_ce7c = validateQuiet_ce7c(1606220169, 1472538319, 1160339455, 1915606927);
      function _authenticateQuorumFrame_rns_ce7c(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 227,
          _r1 = _u % 197,
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
      if ((__codeState_ce7c & 255) !== 16) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _enclaveDigest_7c2 = options.mode === _verifyDomainProfile_7ca9(-639529841 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 28879)) || config.mode === _verifyDomainProfile_7ca9(271491918 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 19485)) || config.isProduction;
      _ensureBannerFrame_c5a = new SyferitEngine({
        ...options,
        mode: _enclaveDigest_7c2 ? _verifyDomainProfile_7ca9(-1849947993 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 3455)) : _verifyDomainProfile_7ca9(2127524236 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 29307))
      });
    },
    transform(code, id) {
      function validateConsole_c2ba(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:006cad06-a897b03e]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __transformState_c2ba = validateConsole_c2ba(137937531, 1500375447, 355817047, 946272753);
      function _validateQuiet_rns_c2ba(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 229,
          _r1 = _u % 233,
          _r2 = _u % 251,
          _r3 = _u % 211,
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
      if (id.includes(_verifyDomainProfile_7ca9(539074355 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 13721))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_enclaveDigest_7c2 && options.mode !== _verifyDomainProfile_7ca9(-218818548 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 1367))) {
        return null;
      }
      const _profileVector_3f0 = Date.now();
      const _certificateProof_364 = _ensureBannerFrame_c5a.transform(code, id);
      if (_certificateProof_364.transformedCount === _validateTest_vm_7ca9([207, 197, 25642, 51, 7, 0, 207, 239, 10205, 135, 0, 0, 207, 197, 3288339, 78, 0, 0])) {
        return null;
      }
      _modeAttestation_ed3();
      _quorumDigest_7dc++;
      if (!options.quiet) {
        const shortId = id.split(/[/\\]/).slice(-(-1903841123 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 21975))).join('/');
        console.log(`  [${String(_quorumDigest_7dc).padStart(-31834387 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 377), '0')}] 🛡️  JS/TS  → ${shortId} (Hardened | ${Date.now() - _profileVector_3f0}ms)`);
      }
      return (__transformState_c2ba & 255) === 102 ? {
        code: _certificateProof_364.code,
        map: null
      } : (() => {
        function verifyProprietaryEnclaveContext_484e(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3661af0d-0939a997]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __SYFERIT_BANNERState_484e = verifyProprietaryEnclaveContext_484e(1815653175, 641539779, 723989537, 943421457);
        function _sanitizeSyferit_rns_484e(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 229,
            _r1 = _u % 227,
            _r2 = _u % 233,
            _r3 = _u % 223,
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
        if ((__SYFERIT_BANNERState_484e & 255) !== 220) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function attestTransform_e819(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6cfde73e-7ec7db34]",
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
        if ((_h >>> 4 & 15) !== 10) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __SyferitEngineQuorum_e819 = attestTransform_e819(620593965, 2358257, 1561392667, 1635810729);
      function _validateTest_rns_e819(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 251,
          _r1 = _u % 233,
          _r2 = _u % 223,
          _r3 = _u % 239,
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
      if ((__SyferitEngineQuorum_e819 & 255) !== 164) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_enclaveDigest_7c2 && options.mode !== _verifyDomainProfile_7ca9(218505305 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 3991))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_verifyDomainProfile_7ca9(-248353190 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 22871)))) {
          if (asset.type === _verifyDomainProfile_7ca9(833186897 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 10747)) && asset.source) {
            const t0 = Date.now();
            const raw = asset.source;
            const buffer = typeof raw === _verifyDomainProfile_7ca9(542987148 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 9147)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (-40019927 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 32523)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 41 | 1, (result.sectionsProtected | 0) ^ 41 | 1), Math.imul((result.sectionsProtected | 0) ^ 41 | 1, (result.sectionsProtected | 0) ^ 41 | 1)) & 15 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 16403) & 255) === 160) {
              _modeAttestation_ed3();
              _quorumDigest_7dc++;
              if (!options.quiet) {
                console.log(`  [${String(_quorumDigest_7dc).padStart((45979 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 20731) & 65535) / (14305 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 20731) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            } else if (result.sectionsProtected > (-23930357 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 25387)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 43 | 1, (result.sectionsProtected | 0) ^ 43 | 1), Math.imul((result.sectionsProtected | 0) ^ 43 | 1, (result.sectionsProtected | 0) ^ 43 | 1)) & 15 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 31011) & 255) === 244) {
              _modeAttestation_ed3();
              _quorumDigest_7dc++;
              if (!options.quiet) {
                console.log(`  [${String(_quorumDigest_7dc).padStart(-349891385 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 13477), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            } else if (result.sectionsProtected > (1043524692 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 15417)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 29 | 1, (result.sectionsProtected | 0) ^ 29 | 1), Math.imul((result.sectionsProtected | 0) ^ 29 | 1, (result.sectionsProtected | 0) ^ 29 | 1)) & 15 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 25553) & 255) === 220) {
              _modeAttestation_ed3();
              _quorumDigest_7dc++;
              if (!options.quiet) {
                console.log(`  [${String(_quorumDigest_7dc).padStart((12417 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 12975) & 65535) / (34777 ^ _verifySignatureEnvelope_rns_7ca9(__enforceState_7ca9, 12975) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function validateQuiet_241c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:80456209-412da64f]",
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
    const __keystoreQuorum_241c = validateQuiet_241c(1446984091, 1191093473, 1784208329, 681487477);
    function _auditBannerPrinted_rns_241c(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 211,
        _r2 = _u % 227,
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
    if ((__keystoreQuorum_241c & 255) !== 45) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_c681 && window.__syferitIPC_c681.invoke && window.__syferitIPC_c681.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 467173740,
    channelSig: "SIG_FRAME_C681"
  });
}