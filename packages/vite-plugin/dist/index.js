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
  function attestProtectWasm_d0bd(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:efbeb474-82b94cb0]",
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
  const __enclaveDigest_d0bd = attestProtectWasm_d0bd(556551803, 1039266967, 392310059, 1396308331);
  function _attestProtectWasm_rns_d0bd(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 227,
      _r2 = _u % 223,
      _r3 = _u % 239,
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
  function _attestProtectWasm_vm_d0bd(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 156) {
        _stk.push((__enclaveDigest_d0bd >>> 0) % _a ^ _b);
      } else if (_op === 34) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 221) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 95) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _nameProof_d0bd = [[248, 91, 104, 80, 65, 160, 203, 172], [198, 62, 94, 42], [250, 164, 48, 46, 62, 72, 168, 66, 82, 252, 220, 246, 198, 16, 112, 106, 122, 132, 228, 158, 238, 56, 24, 50, 2, 172, 140, 166, 182, 192, 32, 218, 42, 116, 84, 78, 94, 232, 200, 226, 242, 28, 124, 22, 102, 176, 144, 138, 154, 36, 4, 62, 14, 88, 184, 82, 162, 204, 44, 198, 214, 96, 64, 122, 74, 148, 244, 238, 254, 8, 104, 2, 18, 188, 156, 182, 134, 208, 55], [223, 137, 216, 131, 179, 110, 68, 113, 98, 131, 248, 159, 155, 19, 119, 113, 127, 215, 233, 211, 247, 173, 62, 254, 26, 67, 110, 119, 98, 214, 181, 233, 250, 32, 90, 55, 86, 177, 157, 241, 231, 35, 52, 24, 50, 97, 144, 154, 207, 208, 23, 231, 230, 74, 127, 78, 99, 184, 129, 239, 217, 52, 91, 60, 89, 134, 187, 142, 182, 15, 125, 87, 71, 49, 209, 43, 219, 133, 212], [4, 238, 255, 232, 152, 64, 6, 51, 34, 209, 162, 208, 170, 255, 25, 240, 84, 77, 150, 113, 120, 146, 251, 216, 178, 102, 117, 57, 86, 191, 200, 189, 176, 64, 108, 72, 120, 0, 194, 220, 191, 249, 26, 228, 242, 67, 114, 4, 71, 202, 235, 220, 193, 61, 65, 108, 127, 137, 162, 133, 240, 62, 63, 18, 1, 96, 157, 109, 216, 231, 236, 251, 229, 88, 115, 16, 0, 234, 251], [105, 211, 179, 189, 141, 215, 55, 209, 33, 75, 171, 69, 85, 255, 223, 249, 201, 19, 115, 109, 125, 135, 231, 129, 145, 59, 27, 53, 5, 175, 143, 169, 185, 195, 35, 221, 45, 119, 87, 113, 65, 235, 203, 229, 245, 31, 127, 25, 105, 179, 147, 141, 157, 39, 7, 33, 49, 91, 187, 85, 165, 207, 47, 201, 217, 99, 67, 125, 77, 151, 247, 145, 225, 11, 107, 5, 21, 191, 172], [78, 56, 169, 50, 34, 20, 172, 228, 227, 46, 68, 86, 79, 166, 148, 244, 158, 62, 33, 22, 55, 220, 243, 214, 180, 255, 28, 230, 15, 84, 36, 62, 46, 152, 184, 146, 130, 78, 12, 102, 142, 192, 141, 181, 174, 17, 116, 78, 126, 40, 210, 34, 162, 238, 19, 242, 243, 83, 100, 67, 117, 170, 132, 246, 207, 42, 92, 55, 44, 133, 162, 129, 246, 160, 64, 90, 74, 52, 165], [179, 29, 71, 103, 119, 129, 225, 155, 235, 53, 21, 15, 31, 169, 137, 163, 179, 221, 61, 215, 39, 113, 81, 75, 91, 229, 197, 255, 207, 25, 121, 19, 99, 141, 237, 135, 151, 33, 1, 59, 11, 85, 181, 175, 191, 201, 41, 195, 211, 125, 93, 119, 71, 145, 241, 235, 251, 5, 101, 31, 111, 185, 153, 179, 131, 45, 13, 39, 55, 65, 161, 91, 171, 245, 213, 207, 223, 105, 68], [206, 11, 54, 57, 97, 134, 186, 133, 135, 227, 4, 169, 7, 103, 152, 125, 122, 219, 230], [173, 232, 20, 245], [114, 222, 227, 194, 227, 35, 84, 83, 69, 186], [87, 163, 222, 175, 206, 6, 49, 54, 32, 151], [60, 132, 185, 148, 149, 233, 30, 237, 27, 112], [21, 126, 141, 112, 105, 192, 255, 196, 252, 45, 87], [248, 47, 68, 95, 117, 185, 219, 170, 203, 4, 45, 17], [203, 23, 42, 59, 58, 154, 173, 154, 140, 227], [144, 248, 5, 224, 1, 125, 138, 113, 103, 220], [43, 216, 238, 218, 244], [75, 167, 199, 171, 202], [60, 141, 171, 154, 141, 234]];
  function _authenticateQuorumBank_d0bd(_slot) {
    const _row = _nameProof_d0bd[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveDigest_d0bd >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _resultAttestation_be8;
  let _tpmDigest_c1e = false;
  let _tokenAttestation_c3f = false;
  let _ensureBannerProof_e7b = _attestProtectWasm_vm_d0bd([156, 211, 20780, 34, 12, 0, 156, 227, 21263, 95, 0, 0, 156, 211, 85013388, 221, 0, 0]);
  const _profileAttestation_c7d = () => {
    function rotateQuiet_9008(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c2f1b2f7-1d7a3b05]",
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
    const __quietState_9008 = rotateQuiet_9008(1285626697, 642199247, 1180433707, 1587476175);
    function _verifyConsole_rns_9008(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 241,
        _r2 = _u % 251,
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
    if ((__quietState_9008 & 255) !== 149) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    if (!_tokenAttestation_c3f && !options.quiet) {
      _tokenAttestation_c3f = true;
      const preset = (options.preset ?? _authenticateQuorumBank_d0bd(-1885363819 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 19943))).padEnd(_attestProtectWasm_vm_d0bd([156, 211, 20950, 34, 12, 0, 156, 227, 2359, 95, 0, 0, 156, 211, 85936548, 221, 0, 0]), ' ');
      const profile = (options.domainProfile ?? _authenticateQuorumBank_d0bd(-2080405428 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 5629))).padEnd(_attestProtectWasm_vm_d0bd([156, 211, 20806, 34, 12, 0, 156, 227, 19198, 95, 0, 0, 156, 211, 85363319, 221, 0, 0]), ' ');
      console.log(SYFERIT_BANNER);
      console.log(_authenticateQuorumBank_d0bd(868497219 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 4093)));
      console.log(_authenticateQuorumBank_d0bd(838884588 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 28167)));
      console.log(_authenticateQuorumBank_d0bd(-227321833 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 15653)));
      console.log(_authenticateQuorumBank_d0bd(1401560578 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 16433)));
      console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
      console.log(_authenticateQuorumBank_d0bd(-1575909389 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 25647)));
      console.log(_authenticateQuorumBank_d0bd(1031205142 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 677)));
    }
  };
  return (__enclaveDigest_d0bd & 255) === 144 ? {
    name: _authenticateQuorumBank_d0bd(158757495 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 23353)),
    enforce: _authenticateQuorumBank_d0bd(-499502774 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 29759)),
    configResolved(config) {
      function authenticateTpmEnvelope_de70(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d66864dd-f9296426]",
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
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __transformState_de70 = authenticateTpmEnvelope_de70(404451763, 958552305, 1042092553, 1735444059);
      function _verifyName_rns_de70(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 241,
          _r1 = _u % 199,
          _r2 = _u % 239,
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
      if ((__transformState_de70 & 255) !== 186) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _tpmDigest_c1e = options.mode === _authenticateQuorumBank_d0bd(1247596673 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 27857)) || config.mode === _authenticateQuorumBank_d0bd(-360417716 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 15833)) || config.isProduction;
      _resultAttestation_be8 = new SyferitEngine({
        ...options,
        mode: _tpmDigest_c1e ? _authenticateQuorumBank_d0bd(-902471483 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 8751)) : _authenticateQuorumBank_d0bd(276396250 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 22439))
      });
    },
    transform(code, id) {
      function isolateSyferitEngine_ca3f(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ba2c63f0-734501b4]",
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
      const __nonceAttestation_ca3f = isolateSyferitEngine_ca3f(1504545513, 190488601, 259304769, 1747779301);
      function _attestConfigResolved_rns_ca3f(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 239,
          _r1 = _u % 199,
          _r2 = _u % 223,
          _r3 = _u % 227,
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
      if (id.includes(_authenticateQuorumBank_d0bd(-24371633 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 5527))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_tpmDigest_c1e && options.mode !== _authenticateQuorumBank_d0bd(1730352686 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 19075))) {
        return null;
      }
      const _protectWasmCheck_bae = Date.now();
      const _includesProof_2d1 = _resultAttestation_be8.transform(code, id);
      if (_includesProof_2d1.transformedCount === _attestProtectWasm_vm_d0bd([156, 211, 26577, 34, 7, 0, 156, 227, 18933, 95, 0, 0, 156, 211, 3425014, 221, 0, 0])) {
        return null;
      }
      _profileAttestation_c7d();
      _ensureBannerProof_e7b++;
      if (!options.quiet) {
        const shortId = id.split(/[/\\]/).slice(-(233966723 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 11657))).join('/');
        console.log(`  [${String(_ensureBannerProof_e7b).padStart(-21747889 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 19717), '0')}] 🛡️  JS/TS  → ${shortId} (Hardened | ${Date.now() - _protectWasmCheck_bae}ms)`);
      }
      return (__nonceAttestation_ca3f & 255) === 84 ? {
        code: _includesProof_2d1.code,
        map: null
      } : (() => {
        function isolateEnforce_9d8(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:35dc5419-3daff11f]",
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
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __SyferitEngineQuorum_9d8 = isolateEnforce_9d8(614681361, 1749361241, 1021710623, 1608661891);
        function _auditNonceVector_rns_9d8(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 251,
            _r1 = _u % 199,
            _r2 = _u % 211,
            _r3 = _u % 239,
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
        if ((__SyferitEngineQuorum_9d8 & 255) !== 163) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function authenticatePreset_80a(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f77ca963-1db0b85b]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __profileState_80a = authenticatePreset_80a(1476575171, 1172150439, 689363417, 783507599);
      function _isolateStartsWith_rns_80a(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 239,
          _r1 = _u % 229,
          _r2 = _u % 233,
          _r3 = _u % 251,
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
      if ((__profileState_80a & 255) !== 106) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_tpmDigest_c1e && options.mode !== _authenticateQuorumBank_d0bd(1052273805 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 24673))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_authenticateQuorumBank_d0bd(-969535226 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 17299)))) {
          if (asset.type === _authenticateQuorumBank_d0bd(-804840481 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 11793)) && asset.source) {
            const t0 = Date.now();
            const raw = asset.source;
            const buffer = typeof raw === _authenticateQuorumBank_d0bd(1217795418 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 22641)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (-1976894053 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 5869)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 62 | 1, (result.sectionsProtected | 0) ^ 62 | 1), Math.imul((result.sectionsProtected | 0) ^ 62 | 1, (result.sectionsProtected | 0) ^ 62 | 1)) & 15 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 10313) & 255) === 252) {
              _profileAttestation_c7d();
              _ensureBannerProof_e7b++;
              if (!options.quiet) {
                console.log(`  [${String(_ensureBannerProof_e7b).padStart((58535 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 4063) & 65535) / (30755 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 4063) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            } else if (result.sectionsProtected > (-499009335 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 22219)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 127 | 1, (result.sectionsProtected | 0) ^ 127 | 1), Math.imul((result.sectionsProtected | 0) ^ 127 | 1, (result.sectionsProtected | 0) ^ 127 | 1)) & 15 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 31951) & 255) === 76) {
              _profileAttestation_c7d();
              _ensureBannerProof_e7b++;
              if (!options.quiet) {
                console.log(`  [${String(_ensureBannerProof_e7b).padStart(433235511 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 16111), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            } else if (result.sectionsProtected > (1545040056 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 12049)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 73 | 1, (result.sectionsProtected | 0) ^ 73 | 1), Math.imul((result.sectionsProtected | 0) ^ 73 | 1, (result.sectionsProtected | 0) ^ 73 | 1)) & 15 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 18795) & 255) === 124) {
              _profileAttestation_c7d();
              _ensureBannerProof_e7b++;
              if (!options.quiet) {
                console.log(`  [${String(_ensureBannerProof_e7b).padStart((7005 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 2979) & 65535) / (63518 ^ _attestProtectWasm_rns_d0bd(__enclaveDigest_d0bd, 2979) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${fileName} (Hardened | ${Date.now() - t0}ms)`);
              }
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function normalizeQuorumVector_8ba4(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:5d896cea-da533bcf]",
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
    const __nonceContext_8ba4 = normalizeQuorumVector_8ba4(104545865, 2004775199, 1422683915, 758873285);
    function _validateTokenAttestation_rns_8ba4(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 229,
        _r2 = _u % 233,
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
    if ((__nonceContext_8ba4 & 255) !== 0) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_80f4 && window.__syferitIPC_80f4.invoke && window.__syferitIPC_80f4.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 2102965330,
    channelSig: "SIG_FRAME_80F4"
  });
}