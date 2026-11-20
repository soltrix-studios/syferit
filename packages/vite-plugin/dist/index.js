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
  function verifyDate_9843(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6540dd4d-381705dd]",
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
  const __quorumAttestation_9843 = verifyDate_9843(1439612681, 528937199, 248263459, 340565561);
  function _attestPadEnd_rns_9843(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 223,
      _r2 = _u % 239,
      _r3 = _u % 197,
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
  function _verifyDate_vm_9843(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 176) {
        _stk.push((__quorumAttestation_9843 >>> 0) % _a ^ _b);
      } else if (_op === 150) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 24) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 89) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _configBank_9843 = [[157, 7, 107, 41, 236, 148, 200, 133], [105, 234, 95, 1], [31, 144, 55, 199, 131, 20, 167, 123, 55, 136, 219, 239, 171, 60, 79, 3, 223, 80, 227, 183, 115, 196, 23, 43, 231, 120, 139, 95, 27, 236, 63, 243, 143, 0, 83, 103, 35, 180, 199, 155, 87, 40, 123, 15, 203, 92, 239, 163, 127, 240, 3, 215, 147, 100, 183, 75, 7, 152, 43, 255, 187, 12, 95, 19, 47, 160, 243, 135, 67, 212, 103, 59, 247, 72, 155, 175, 107, 252, 8], [68, 245, 217, 156, 216, 58, 69, 22, 201, 175, 249, 176, 0, 231, 118, 86, 132, 11, 233, 44, 92, 153, 63, 217, 177, 47, 111, 88, 25, 130, 180, 142, 97, 28, 91, 40, 253, 101, 156, 214, 12, 207, 53, 247, 169, 85, 145, 125, 116, 140, 22, 216, 141, 62, 126, 41, 8, 148, 128, 128, 98, 224, 90, 27, 194, 122, 186, 145, 93, 219, 124, 176, 236, 29, 208, 4, 64, 241, 213], [169, 218, 252, 193, 61, 172, 5, 26, 223, 5, 161, 41, 15, 195, 26, 233, 249, 25, 149, 88, 29, 254, 248, 177, 47, 82, 118, 32, 243, 99, 203, 132, 93, 180, 111, 161, 157, 44, 193, 53, 2, 173, 25, 221, 151, 63, 113, 29, 42, 158, 232, 181, 100, 17, 66, 69, 226, 125, 161, 156, 21, 226, 60, 235, 172, 84, 158, 68, 125, 139, 239, 210, 152, 12, 112, 105, 165, 214, 248], [142, 63, 178, 86, 18, 227, 54, 202, 134, 23, 170, 126, 58, 139, 222, 146, 174, 63, 114, 6, 194, 83, 230, 186, 118, 199, 26, 46, 234, 123, 142, 66, 30, 239, 34, 246, 178, 3, 86, 106, 38, 183, 202, 158, 90, 43, 126, 50, 206, 95, 146, 166, 98, 243, 6, 218, 150, 103, 186, 78, 10, 155, 46, 226, 190, 15, 66, 22, 210, 163, 246, 138, 70, 215, 106, 62, 250, 75, 173], [243, 100, 166, 11, 71, 96, 171, 253, 142, 2, 123, 63, 234, 114, 147, 221, 3, 194, 46, 15, 210, 8, 244, 47, 25, 211, 3, 207, 170, 32, 35, 23, 83, 196, 183, 235, 39, 122, 11, 127, 35, 44, 242, 156, 75, 197, 115, 167, 227, 20, 221, 59, 7, 186, 20, 203, 158, 63, 123, 42, 16, 158, 131, 159, 114, 246, 83, 14, 201, 113, 165, 152, 27, 140, 127, 179, 239, 96, 162], [216, 73, 70, 0, 220, 173, 224, 180, 112, 193, 20, 40, 228, 117, 136, 92, 24, 233, 60, 240, 140, 29, 80, 100, 32, 177, 196, 152, 84, 37, 120, 12, 200, 89, 236, 160, 124, 205, 0, 212, 144, 97, 180, 72, 4, 149, 40, 252, 184, 9, 92, 16, 44, 189, 240, 132, 64, 209, 100, 56, 244, 69, 152, 172, 104, 249, 12, 192, 156, 109, 160, 116, 48, 129, 212, 232, 164, 53, 69], [107, 231, 53, 16, 156, 82, 185, 124, 34, 223, 7, 176, 170, 51, 155, 84, 31, 183, 229], [50, 220, 21, 238], [23, 170, 228, 219, 142, 15, 107, 58, 224, 110], [252, 143, 223, 128, 85, 242, 48, 17, 219, 75], [193, 80, 186, 109, 48, 213, 29, 244, 182, 36], [178, 34, 140, 75, 6, 180, 254, 175, 155, 1, 86], [149, 3, 123, 54, 208, 109, 220, 131, 86, 248, 34, 8], [80, 227, 43, 28, 193, 70, 172, 101, 39, 215], [53, 196, 6, 249, 172, 41, 137, 88, 2, 176], [68, 172, 239, 177, 147], [238, 115, 192, 130, 87], [199, 81, 170, 101, 38, 222]];
  function _synchronizeNonceContext_9843(_slot) {
    const _row = _configBank_9843[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumAttestation_9843 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _nonceProof_5a;
  let _DateCheck_890 = false;
  let _resultEnvelope_905 = false;
  let _enclaveAttestation_552 = _verifyDate_vm_9843([176, 241, 26892, 150, 7, 0, 176, 223, 29816, 89, 0, 0, 176, 241, 3477282, 24, 0, 0]);
  const _tpmDigest_7d7 = () => {
    function isolateProtectWasm_f7f7(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:4c0502ff-d5c989ee]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __keystoreQuorum_f7f7 = isolateProtectWasm_f7f7(1174250067, 1079351523, 1691680421, 643078921);
    function _verifyResult_rns_f7f7(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 199,
        _r2 = _u % 251,
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
    if ((__keystoreQuorum_f7f7 & 255) !== 253) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    if (!_resultEnvelope_905 && !options.quiet) {
      _resultEnvelope_905 = true;
      const preset = (options.preset ?? _synchronizeNonceContext_9843(-450770545 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 3409))).padEnd(_verifyDate_vm_9843([176, 241, 24121, 150, 7, 0, 176, 223, 5828, 89, 0, 0, 176, 241, 3086350, 24, 0, 0]), ' ');
      const profile = (options.domainProfile ?? _synchronizeNonceContext_9843(785433062 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 7931))).padEnd(_verifyDate_vm_9843([176, 241, 19373, 150, 7, 0, 176, 223, 10549, 89, 0, 0, 176, 241, 2487525, 24, 0, 0]), ' ');
      console.log(SYFERIT_BANNER);
      console.log(_synchronizeNonceContext_9843(522280267 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 7779)));
      console.log(_synchronizeNonceContext_9843(1948693216 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 3607)));
      console.log(_synchronizeNonceContext_9843(-284510759 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 13249)));
      console.log(_synchronizeNonceContext_9843(444383330 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 26033)));
      console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
      console.log(_synchronizeNonceContext_9843(864738891 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 29947)));
      console.log(_synchronizeNonceContext_9843(130578598 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 17327)));
    }
  };
  return (__quorumAttestation_9843 & 255) === 245 ? {
    name: _synchronizeNonceContext_9843(-637341301 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 6713)),
    enforce: _synchronizeNonceContext_9843(-1190006570 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 15839)),
    configResolved(config) {
      function attestEnsureBanner_60b9(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:45536c08-bf1e4ea0]",
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
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __domainProfileState_60b9 = attestEnsureBanner_60b9(1812111837, 1480883417, 341281251, 755868569);
      function _attestEnsureBanner_rns_60b9(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 241,
          _r1 = _u % 211,
          _r2 = _u % 229,
          _r3 = _u % 233,
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
      if ((__domainProfileState_60b9 & 255) !== 82) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _DateCheck_890 = options.mode === _synchronizeNonceContext_9843(-1077878267 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 2803)) || config.mode === _synchronizeNonceContext_9843(-1421756850 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 11251)) || config.isProduction;
      _nonceProof_5a = new SyferitEngine({
        ...options,
        mode: _DateCheck_890 ? _synchronizeNonceContext_9843(-1367005519 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 4847)) : _synchronizeNonceContext_9843(-1925483088 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 16997))
      });
    },
    transform(code, id) {
      function rotateMode_7d36(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:78501804-268ecc75]",
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
      const __transformState_7d36 = rotateMode_7d36(1630571297, 1971805183, 1639572085, 1047961883);
      function _attestPadEnd_rns_7d36(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 233,
          _r1 = _u % 251,
          _r2 = _u % 239,
          _r3 = _u % 241,
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
      if (id.includes(_synchronizeNonceContext_9843(-1808326255 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 9669))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_DateCheck_890 && options.mode !== _synchronizeNonceContext_9843(1505326468 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 3143))) {
        return null;
      }
      const _shortIdProof_e1f = Date.now();
      const _nonceProof_a7b = _nonceProof_5a.transform(code, id);
      if (_nonceProof_a7b.transformedCount === _verifyDate_vm_9843([176, 241, 12673, 150, 7, 0, 176, 223, 9775, 89, 0, 0, 176, 241, 1639413, 24, 0, 0])) {
        return null;
      }
      _tpmDigest_7d7();
      _enclaveAttestation_552++;
      if (!options.quiet) {
        const shortId = id.split(/[/\\]/).slice(-(1642759263 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 16861))).join('/');
        console.log(`  [${String(_enclaveAttestation_552).padStart(-378307591 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 20517), '0')}] 🛡️  JS/TS  → ${shortId} (Hardened | ${Date.now() - _shortIdProof_e1f}ms)`);
      }
      return (__transformState_7d36 & 255) === 29 ? {
        code: _nonceProof_a7b.code,
        map: null
      } : (() => {
        function authenticateConfig_b0b9(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ddf33c9c-d52bb7ab]",
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
        const __quietState_b0b9 = authenticateConfig_b0b9(830048829, 1723375081, 928509817, 2135314853);
        function _validateOptions_rns_b0b9(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 229,
            _r1 = _u % 239,
            _r2 = _u % 227,
            _r3 = _u % 211,
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
        if ((__quietState_b0b9 & 255) !== 191) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function authenticateName_9cbb(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:d31615d1-3de6ac87]",
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
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __tpmDigest_9cbb = authenticateName_9cbb(149181389, 962718245, 1659164687, 1483179873);
      function _verifyDate_rns_9cbb(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 229,
          _r1 = _u % 233,
          _r2 = _u % 251,
          _r3 = _u % 223,
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
      if ((__tpmDigest_9cbb & 255) !== 249) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_DateCheck_890 && options.mode !== _synchronizeNonceContext_9843(1156401417 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 19747))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_synchronizeNonceContext_9843(-417683032 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 14101)))) {
          if (asset.type === _synchronizeNonceContext_9843(-1345350961 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 17913)) && asset.source) {
            const t0 = Date.now();
            const raw = asset.source;
            const buffer = typeof raw === _synchronizeNonceContext_9843(858298602 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 21523)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (1542190269 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 11281)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 34 | 1, (result.sectionsProtected | 0) ^ 34 | 1), Math.imul((result.sectionsProtected | 0) ^ 34 | 1, (result.sectionsProtected | 0) ^ 34 | 1)) & 15 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 30131) & 255) === 28) {
              _tpmDigest_7d7();
              _enclaveAttestation_552++;
              if (!options.quiet) {
                console.log(`  [${String(_enclaveAttestation_552).padStart((59829 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 17379) & 65535) / (47215 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 17379) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            } else if (result.sectionsProtected > (-406082893 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 25519)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 72 | 1, (result.sectionsProtected | 0) ^ 72 | 1), Math.imul((result.sectionsProtected | 0) ^ 72 | 1, (result.sectionsProtected | 0) ^ 72 | 1)) & 15 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 21711) & 255) === 186) {
              _tpmDigest_7d7();
              _enclaveAttestation_552++;
              if (!options.quiet) {
                console.log(`  [${String(_enclaveAttestation_552).padStart(285623985 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 4079), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            } else if (result.sectionsProtected > (541657500 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 17759)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 118 | 1, (result.sectionsProtected | 0) ^ 118 | 1), Math.imul((result.sectionsProtected | 0) ^ 118 | 1, (result.sectionsProtected | 0) ^ 118 | 1)) & 15 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 21035) & 255) === 32) {
              _tpmDigest_7d7();
              _enclaveAttestation_552++;
              if (!options.quiet) {
                console.log(`  [${String(_enclaveAttestation_552).padStart((19997 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 9847) & 65535) / (46555 ^ _attestPadEnd_rns_9843(__quorumAttestation_9843, 9847) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function authenticateKeystoreCheck_ef90(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a6efb46f-21be8261]",
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
    const __certificateVector_ef90 = authenticateKeystoreCheck_ef90(2049833179, 1371596163, 1861618697, 1498258559);
    function _rotateMode_rns_ef90(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 233,
        _r2 = _u % 197,
        _r3 = _u % 229,
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
    if ((__certificateVector_ef90 & 255) !== 120) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_ced2 && window.__syferitIPC_ced2.invoke && window.__syferitIPC_ced2.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 403828106,
    channelSig: "SIG_FRAME_CED2"
  });
}