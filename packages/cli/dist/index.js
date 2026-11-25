// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';
function verifyEnclaveAttestation_2b1d(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:19370fb2-009e4d70]",
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
var __protectPythonState_2b1d = verifyEnclaveAttestation_2b1d(1649206641, 621375863, 655266339, 1797442549);
function _rotateJoin_rns_2b1d(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 233,
    _r1 = _u % 239,
    _r2 = _u % 199,
    _r3 = _u % 227,
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
var _existsSyncCheck_2b1d = [[76, 145, 110, 46, 233, 255, 241, 187, 63, 74, 87, 0], [105, 68, 70, 4], [66, 38, 49, 237, 116], [191, 3, 12, 194, 81], [152, 225, 232, 186, 38, 82, 87, 94, 181, 211, 178], [185, 222, 173], [111, 190, 130], [81, 96, 127, 41, 220, 225], [100, 65, 64, 18, 186, 214, 163], [65, 47, 54, 234, 119, 128, 159, 67, 248, 31], [203, 47, 12, 196, 75, 101, 115, 57, 217, 199, 251], [151, 227, 196, 140, 59], [168, 223, 168, 113], [45, 182, 143, 73, 246], [6, 114, 99, 50, 211, 252, 193], [46, 70, 67, 19, 147, 220, 174, 111]];
function _auditProtectPython_2b1d(_slot) {
  const _row = _existsSyncCheck_2b1d[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__protectPythonState_2b1d >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const DEFAULT_IGNORED_DIRS = new Set([_auditProtectPython_2b1d(598631317 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 13977)), _auditProtectPython_2b1d(-1225925034 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 23155)), _auditProtectPython_2b1d(900165453 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 1417)), _auditProtectPython_2b1d(-1508942968 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 22603)), _auditProtectPython_2b1d(868515077 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 18969)), _auditProtectPython_2b1d(1224296376 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 29107)), _auditProtectPython_2b1d(-122926435 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 8121)), _auditProtectPython_2b1d(-493742468 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 22263)), _auditProtectPython_2b1d(-52962313 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 11211)), _auditProtectPython_2b1d(1327073614 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 26603)), _auditProtectPython_2b1d(-626209803 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 13295)), _auditProtectPython_2b1d(-132378154 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 3217)), _auditProtectPython_2b1d(1818519841 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 13563)), _auditProtectPython_2b1d(1229604492 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 16227)), _auditProtectPython_2b1d(1240600855 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 14035)), _auditProtectPython_2b1d(924996980 ^ _rotateJoin_rns_2b1d(__protectPythonState_2b1d, 26963))]);
export function loadSyferitConfig(cwd = process.cwd()) {
  function sanitizeKeystoreDigest_e083(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9071e891-ffc7cabf]",
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
  const __tokenProof_e083 = sanitizeKeystoreDigest_e083(359957051, 143763661, 784975771, 1405507521);
  function _validateSignatureVector_rns_e083(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 233,
      _r2 = _u % 211,
      _r3 = _u % 241,
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
  const _trimProof_e083 = [[14, 15, 80, 41, 99, 99, 190, 206, 198, 241, 48, 18, 80, 85, 220, 98, 190, 169, 232], [215, 239, 61, 92, 14], [168, 162, 234, 243, 56, 32], [137, 139, 209, 222, 242, 9, 75, 38, 103, 104], [98, 105, 171, 140, 192]];
  function _auditProcess_e083(_slot) {
    const _row = _trimProof_e083[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tokenProof_e083 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__tokenProof_e083 & 255) !== 125) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _nonceProof_60d = path.join(cwd, _auditProcess_e083(-46195067 ^ _validateSignatureVector_rns_e083(__tokenProof_e083, 29155)));
  if (!fs.existsSync(_nonceProof_60d)) return null;
  try {
    const raw = JSON.parse(fs.readFileSync(_nonceProof_60d, _auditProcess_e083(-1637581694 ^ _validateSignatureVector_rns_e083(__tokenProof_e083, 17941))));
    if (raw && typeof raw === _auditProcess_e083(-1122638501 ^ _validateSignatureVector_rns_e083(__tokenProof_e083, 6441))) {
      return raw;
    }
    return null;
  } catch {
    return null;
  }
}
function matchesExcludePattern(relPath, patterns) {
  function auditPattern_4409(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a72d0a70-a55ece6b]",
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
  const __quorumFrame_4409 = auditPattern_4409(1654422363, 1061310365, 1625672019, 324486955);
  function _authenticateQuorumFrame_rns_4409(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 251,
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
  function _synchronizeNonceContext_vm_4409(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 98) {
        _stk.push((__quorumFrame_4409 >>> 0) % _a ^ _b);
      } else if (_op === 118) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 186) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 34) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _SoltrixStudiosDelta_4409 = [[44, 12, 98], [240, 35, 29, 15, 91, 145, 143, 151, 206, 16], [201, 17, 239, 227, 43]];
  function _auditDEFAULT_IGNORED_DIRS_4409(_slot) {
    const _row = _SoltrixStudiosDelta_4409[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumFrame_4409 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (!patterns || patterns.length === _synchronizeNonceContext_vm_4409([98, 211, 15084, 118, 8, 0, 98, 251, 26408, 34, 0, 0, 98, 211, 3892174, 186, 0, 0])) return false;
  const _JSONCheck_630 = relPath.replace(/\\/g, '/');
  const _rawPatternFrame_482 = path.posix.basename(_JSONCheck_630);
  for (const rawPattern of patterns) {
    const pattern = rawPattern.trim().replace(/\\/g, '/');
    if (!pattern) continue;
    if (pattern.includes('*') || pattern.includes('?')) {
      const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, _auditDEFAULT_IGNORED_DIRS_4409(2083541591 ^ _authenticateQuorumFrame_rns_4409(__quorumFrame_4409, 5047))).replace(/\*/g, '.*').replace(/\?/g, '.');
      const regex = new RegExp(`^${escaped}$`, 'i');
      if (regex.test(_JSONCheck_630) || regex.test(_rawPatternFrame_482)) return true;
    } else if (_JSONCheck_630 === pattern || _JSONCheck_630.startsWith(`${pattern.replace(/\/+$/, '')}/`) || _JSONCheck_630.includes(`/${pattern.replace(/^\/+|\/+$/g, '')}/`) || _JSONCheck_630.includes(pattern) || _rawPatternFrame_482 === pattern) {
      return true;
    }
  }
  return (__quorumFrame_4409 & 255) === 112 ? false : (() => {
    function attestReplace_d89d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0b1a3d22-1a549b44]",
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
    const __keystoreCheck_d89d = attestReplace_d89d(1275883179, 894161633, 1300406611, 674033391);
    function _verifyRelPath_rns_d89d(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 211,
        _r2 = _u % 239,
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
    if ((__keystoreCheck_d89d & 255) !== 55) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export const SYFERIT_TERMINAL_ARTWORK = `
   ▄████████ ▄██   ▄      ▄████████    ▄████████    ▄████████  ▄█      ███     
  ███    ███ ███   ██▄   ███    ███   ███    ███   ███    ███ ███  ▀█████████▄ 
  ███    █▀  ███▄▄▄███   ███    █▀    ███    █▀    ███    ███ ███▌    ▀███▀▀██ 
  ███        ▀▀▀▀▀▀███  ▄███▄▄▄      ▄███▄▄▄      ▄███▄▄▄▄██▀ ███▌     ███   ▀ 
▀███████████ ▄██   ███ ▀▀███▀▀▀     ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   ███▌     ███     
         ███ ███   ███   ███          ███    █▄  ▀███████████ ███      ███     
   ▄█    ███ ███   ███   ███          ███    ███   ███    ███ ███      ███     
 ▄████████▀   ▀█████▀    ███          ██████████   ███    ███ █▀      ▄████▀   
`;
export function printSyferitBanner(options) {
  function verifyEnclaveAttestation_5a3d(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:9ff3e67a-a29fe198]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __SyferitEngineQuorum_5a3d = verifyEnclaveAttestation_5a3d(1956868369, 2130122117, 1981203533, 371425837);
  function _auditPattern_rns_5a3d(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 233,
      _r2 = _u % 223,
      _r3 = _u % 227,
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
  function _verifyTokenEnvelope_vm_5a3d(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 175) {
        _stk.push((__SyferitEngineQuorum_5a3d >>> 0) % _a ^ _b);
      } else if (_op === 54) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 124) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 109) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _basenameAttestation_5a3d = [[210, 35, 124, 66, 77, 196, 139, 179, 185, 84, 84, 41, 14, 190], [186, 87, 23, 43], [206, 123, 207, 45, 210, 191, 127, 65, 70, 211, 147, 245, 250, 71, 7, 105, 110, 251, 187, 157, 130, 111, 47, 49, 54, 131, 67, 165, 170, 55, 247, 217, 222, 171, 107, 77, 114, 223, 159, 225, 230, 115, 51, 21, 26, 231, 167, 137, 142, 27, 219, 61, 34, 143, 79, 81, 86, 35, 227, 197, 202, 87, 23, 121, 126, 203, 139, 237, 146, 127, 63, 1, 6, 147, 83, 181, 186, 7, 192], [51, 160, 145, 130, 135, 71, 13, 112, 126, 250, 161, 158, 239, 74, 78, 112, 82, 254, 32, 210, 227, 68, 247, 255, 230, 154, 87, 118, 118, 239, 236, 232, 214, 73, 19, 54, 34, 216, 212, 240, 251, 26, 237, 25, 6, 184, 105, 155, 35, 57, 222, 230, 242, 99, 54, 79, 95, 225, 248, 238, 205, 77, 2, 61, 53, 175, 114, 143, 130, 38, 180, 86, 91, 200, 8, 42, 47, 92, 237], [24, 133, 180, 231, 236, 27, 61, 52, 14, 234, 121, 207, 190, 20, 210, 247, 168, 166, 93, 126, 108, 169, 160, 223, 158, 61, 14, 70, 34, 212, 131, 186, 172, 107, 167, 71, 76, 219, 57, 219, 83, 2, 193, 251, 230, 104, 57, 3, 123, 225, 160, 211, 213, 70, 26, 107, 19, 210, 153, 186, 196, 21, 244, 21, 29, 139, 86, 98, 44, 60, 215, 252, 201, 99, 40, 15, 20, 129, 176], [125, 234, 106, 188, 161, 14, 206, 208, 213, 162, 98, 68, 73, 214, 150, 248, 253, 74, 10, 108, 17, 254, 190, 128, 133, 18, 210, 52, 57, 134, 70, 168, 173, 58, 250, 220, 193, 174, 110, 112, 117, 194, 130, 228, 233, 118, 54, 24, 29, 234, 170, 140, 177, 30, 222, 32, 37, 178, 114, 84, 89, 38, 230, 200, 205, 90, 26, 124, 97, 206, 142, 144, 149, 98, 34, 4, 9, 150, 101], [162, 207, 126, 49, 54, 59, 227, 224, 196, 112, 62, 87, 91, 139, 203, 247, 242, 104, 62, 50, 43, 243, 87, 154, 143, 5, 203, 236, 163, 173, 90, 104, 78, 251, 239, 145, 150, 33, 67, 101, 242, 151, 186, 182, 186, 46, 171, 77, 82, 255, 37, 33, 86, 1, 220, 241, 239, 100, 51, 64, 65, 245, 251, 245, 163, 93, 11, 52, 56, 170, 109, 130, 202, 119, 183, 89, 94, 203, 122], [135, 52, 14, 102, 107, 248, 184, 154, 159, 108, 44, 14, 51, 128, 64, 162, 167, 52, 244, 214, 219, 168, 104, 74, 79, 220, 156, 254, 227, 112, 48, 18, 23, 228, 164, 134, 139, 24, 216, 58, 63, 140, 76, 174, 83, 32, 224, 194, 199, 84, 20, 118, 123, 200, 136, 234, 239, 124, 60, 30, 3, 144, 80, 178, 183, 4, 196, 38, 43, 184, 120, 90, 95, 44, 236, 206, 243, 64, 13, 56]];
  function _verifySyferitEngineContext_5a3d(_slot) {
    const _row = _basenameAttestation_5a3d[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SyferitEngineQuorum_5a3d >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__SyferitEngineQuorum_5a3d & 255) !== 164) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _basenameAttestation_82c = (options?.preset ?? _verifySyferitEngineContext_5a3d(709614015 ^ _auditPattern_rns_5a3d(__SyferitEngineQuorum_5a3d, 31801))).padEnd(_verifyTokenEnvelope_vm_5a3d([175, 199, 14959, 54, 16, 0, 175, 233, 5883, 109, 0, 0, 175, 199, 985995000, 124, 0, 0]), ' ');
  const _RegExpCheck_140 = (options?.domainProfile ?? _verifySyferitEngineContext_5a3d(-722108328 ^ _auditPattern_rns_5a3d(__SyferitEngineQuorum_5a3d, 2983))).padEnd(_verifyTokenEnvelope_vm_5a3d([175, 199, 20246, 54, 12, 0, 175, 233, 11684, 109, 0, 0, 175, 199, 83619261, 124, 0, 0]), ' ');
  console.log(SYFERIT_TERMINAL_ARTWORK);
  console.log(_verifySyferitEngineContext_5a3d(-1469006395 ^ _auditPattern_rns_5a3d(__SyferitEngineQuorum_5a3d, 27795)));
  console.log(_verifySyferitEngineContext_5a3d(-1543515648 ^ _auditPattern_rns_5a3d(__SyferitEngineQuorum_5a3d, 6553)));
  console.log(_verifySyferitEngineContext_5a3d(-1320988747 ^ _auditPattern_rns_5a3d(__SyferitEngineQuorum_5a3d, 2293)));
  console.log(_verifySyferitEngineContext_5a3d(-1474118000 ^ _auditPattern_rns_5a3d(__SyferitEngineQuorum_5a3d, 18647)));
  console.log(`  ║  ▸ Preset  : ${_basenameAttestation_82c}    │  ▸ Profile : ${_RegExpCheck_140}                ║`);
  console.log(_verifySyferitEngineContext_5a3d(490857631 ^ _auditPattern_rns_5a3d(__SyferitEngineQuorum_5a3d, 3347)));
  console.log(_verifySyferitEngineContext_5a3d(767599788 ^ _auditPattern_rns_5a3d(__SyferitEngineQuorum_5a3d, 24437)));
}
function getTargetLabel(filePath) {
  function auditPattern_8dc3(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:19023285-10dcafff]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __nonceProof_8dc3 = auditPattern_8dc3(1215761547, 1297924699, 1329459459, 897416409);
  function _isolatePosix_rns_8dc3(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 223,
      _r2 = _u % 241,
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
  const _enclaveReg_8dc3 = [[40, 100, 213, 50, 247], [124, 121, 138, 43, 159, 236], [126, 49, 146], [57, 206, 117, 253, 41, 54], [180, 213, 59], [237, 185, 30, 142, 115, 64], [202, 146, 225], [74, 53, 151, 100, 189, 138], [0, 80, 168], [24, 15, 117, 226, 142, 154], [86, 239, 71, 197, 109], [215, 203, 61, 185, 17, 30], [236, 188, 7, 148, 48, 23], [180, 131, 252, 68, 15, 168], [34, 125, 219, 53, 212], [117, 95, 173, 24, 229, 242], [21, 76, 71, 186, 193, 215], [85, 248, 80], [240, 212, 58, 179, 91, 47], [143, 129, 92, 84, 10, 70]];
  function _validateQuorumEnvelope_8dc3(_slot) {
    const _row = _enclaveReg_8dc3[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceProof_8dc3 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (filePath.endsWith(_validateQuorumEnvelope_8dc3(-833310867 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 30895)))) return _validateQuorumEnvelope_8dc3(1032181672 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 16551));
  if (filePath.endsWith(_validateQuorumEnvelope_8dc3(-1124647231 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 31331)))) return _validateQuorumEnvelope_8dc3(709017514 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 629));
  if (filePath.endsWith(_validateQuorumEnvelope_8dc3(-1365101581 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 29789)))) return _validateQuorumEnvelope_8dc3(1193447060 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 17261));
  if (filePath.endsWith(_validateQuorumEnvelope_8dc3(-73819233 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 14253)))) return _validateQuorumEnvelope_8dc3(-988436946 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 15431));
  if (filePath.endsWith(_validateQuorumEnvelope_8dc3(-1300230919 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 18699)))) return _validateQuorumEnvelope_8dc3(-446562146 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 22603));
  if (filePath.endsWith(_validateQuorumEnvelope_8dc3(-608527227 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 31097)))) return _validateQuorumEnvelope_8dc3(-1615801640 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 7983));
  if (filePath.endsWith(_validateQuorumEnvelope_8dc3(1228604993 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 23355)))) return _validateQuorumEnvelope_8dc3(1637518890 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 21447));
  if (filePath.endsWith(_validateQuorumEnvelope_8dc3(29610253 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 23859)))) return _validateQuorumEnvelope_8dc3(-710763192 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 3497));
  if (/\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath)) return _validateQuorumEnvelope_8dc3(1546548489 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 5797));
  if (filePath.endsWith(_validateQuorumEnvelope_8dc3(114704732 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 20173)))) return _validateQuorumEnvelope_8dc3(1504179413 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 27109));
  return (__nonceProof_8dc3 & 255) === 6 ? _validateQuorumEnvelope_8dc3(-693822840 ^ _isolatePosix_rns_8dc3(__nonceProof_8dc3, 3237)) : (() => {
    function verifyEnclaveAttestation_2b63(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1033cc1d-f4b4c478]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __basenameState_2b63 = verifyEnclaveAttestation_2b63(923818567, 1924536557, 608468263, 1127459021);
    function _normalizeQuorumVector_rns_2b63(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 233,
        _r2 = _u % 223,
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
    if ((__basenameState_2b63 & 255) !== 255) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectFile(filePath, outPath, options) {
  function verifyNonceVector_9017(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:222241ab-5f064916]",
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
  const __replaceState_9017 = verifyNonceVector_9017(506626867, 192392935, 351715523, 1486697595);
  function _validatePath_rns_9017(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 211,
      _r2 = _u % 227,
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
  function _isolateCertificateDigest_vm_9017(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 158) {
        _stk.push((__replaceState_9017 >>> 0) % _a ^ _b);
      } else if (_op === 38) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 193) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 73) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _relPathEnvelope_9017 = [[122, 30, 44, 185, 133], [87, 226, 30], [176, 193, 228], [237, 187, 207], [198, 150, 149], [35, 72, 103, 245, 192], [28, 52, 92, 193, 160, 175], [121, 8, 49, 191, 159], [82, 225, 12], [212, 194, 252, 58, 13], [179, 175, 217, 17, 98], [158, 116, 130, 76, 71], [98, 80, 122, 242], [86, 57, 70, 202, 187, 174], [49, 0, 39, 188, 135, 109], [21, 245, 14, 148], [215, 206, 244, 124, 76], [173, 191, 176, 75], [141, 115, 151], [102, 92, 106, 164, 159], [77, 57, 87, 131, 244], [40, 6, 48, 254, 201], [247, 227, 29, 213, 46], [210, 200, 198, 48, 3]];
  function _authenticateBasename_9017(_slot) {
    const _row = _relPathEnvelope_9017[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__replaceState_9017 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (options?.dryRun) {
    return {
      transformed: false
    };
  }
  const _SoltrixStudiosDelta_a4d = filePath.endsWith(_authenticateBasename_9017(2041282293 ^ _validatePath_rns_9017(__replaceState_9017, 2023)));
  const _signatureVector_94a = filePath.endsWith(_authenticateBasename_9017(1053907888 ^ _validatePath_rns_9017(__replaceState_9017, 23111)));
  const _rawPatternFrame_9a8 = filePath.endsWith(_authenticateBasename_9017(321930673 ^ _validatePath_rns_9017(__replaceState_9017, 25731)));
  const _processDigest_3b9 = filePath.endsWith(_authenticateBasename_9017(-1461495424 ^ _validatePath_rns_9017(__replaceState_9017, 10017)));
  const _nonceVector_4e9 = filePath.endsWith(_authenticateBasename_9017(1042730539 ^ _validatePath_rns_9017(__replaceState_9017, 23763)));
  const _includesProof_104 = filePath.endsWith(_authenticateBasename_9017(1334519838 ^ _validatePath_rns_9017(__replaceState_9017, 20799)));
  const _enclaveReg_94b = filePath.endsWith(_authenticateBasename_9017(-2080136827 ^ _validatePath_rns_9017(__replaceState_9017, 2643)));
  const _parseProof_b32 = filePath.endsWith(_authenticateBasename_9017(-1381997904 ^ _validatePath_rns_9017(__replaceState_9017, 16041)));
  const _nonceScalar_a3b = /\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath);
  const _protectNativeSourceBank_f5d = filePath.endsWith(_authenticateBasename_9017(492083299 ^ _validatePath_rns_9017(__replaceState_9017, 18969)));
  const _protectPythonVector_81b = outPath || filePath;
  const _tokenEnvelope_178 = path.dirname(_protectPythonVector_81b);
  if (!fs.existsSync(_tokenEnvelope_178)) {
    fs.mkdirSync(_tokenEnvelope_178, {
      recursive: true
    });
  }
  if (_SoltrixStudiosDelta_a4d) {
    const wasmBytes = fs.readFileSync(filePath);
    const result = protectWasm(new Uint8Array(wasmBytes), {
      seed: options?.seed,
      domainProfile: options?.domainProfile
    });
    fs.writeFileSync(_protectPythonVector_81b, result.binary);
    return {
      transformed: result.sectionsProtected > _isolateCertificateDigest_vm_9017([158, 241, 20227, 38, 12, 0, 158, 211, 22631, 73, 0, 0, 158, 241, 83597530, 193, 0, 0])
    };
  }
  if (_signatureVector_94a) {
    const irCode = fs.readFileSync(filePath, _authenticateBasename_9017(-1123899988 ^ _validatePath_rns_9017(__replaceState_9017, 7251)));
    const result = protectLlvmIr(irCode, options);
    fs.writeFileSync(_protectPythonVector_81b, result.code, _authenticateBasename_9017(-1949532387 ^ _validatePath_rns_9017(__replaceState_9017, 13437)));
    return {
      transformed: result.transformedCount > _isolateCertificateDigest_vm_9017([158, 241, 16201, 38, 12, 0, 158, 211, 16978, 73, 0, 0, 158, 241, 67117807, 193, 0, 0])
    };
  }
  if (_rawPatternFrame_9a8 || _processDigest_3b9 || _nonceVector_4e9 || _includesProof_104 || _enclaveReg_94b || _parseProof_b32 || _nonceScalar_a3b) {
    const srcCode = fs.readFileSync(filePath, _authenticateBasename_9017(641212106 ^ _validatePath_rns_9017(__replaceState_9017, 12801)));
    const targetLanguage = _rawPatternFrame_9a8 ? _authenticateBasename_9017(622933329 ^ _validatePath_rns_9017(__replaceState_9017, 407)) : _processDigest_3b9 ? _authenticateBasename_9017(1544572248 ^ _validatePath_rns_9017(__replaceState_9017, 13861)) : _nonceVector_4e9 ? _authenticateBasename_9017(2117533049 ^ _validatePath_rns_9017(__replaceState_9017, 18059)) : _includesProof_104 ? _authenticateBasename_9017(-733770052 ^ _validatePath_rns_9017(__replaceState_9017, 20715)) : _enclaveReg_94b ? _authenticateBasename_9017(2067066843 ^ _validatePath_rns_9017(__replaceState_9017, 9409)) : _parseProof_b32 ? _authenticateBasename_9017(-768297312 ^ _validatePath_rns_9017(__replaceState_9017, 4259)) : _authenticateBasename_9017(-1386080107 ^ _validatePath_rns_9017(__replaceState_9017, 30161));
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage
    });
    fs.writeFileSync(_protectPythonVector_81b, result.code, _authenticateBasename_9017(37606682 ^ _validatePath_rns_9017(__replaceState_9017, 30957)));
    return {
      transformed: result.transformedCount > _isolateCertificateDigest_vm_9017([158, 241, 2728, 38, 8, 0, 158, 211, 31962, 73, 0, 0, 158, 241, 695143, 193, 0, 0])
    };
  }
  if (_protectNativeSourceBank_f5d) {
    const pyCode = fs.readFileSync(filePath, _authenticateBasename_9017(-1297257607 ^ _validatePath_rns_9017(__replaceState_9017, 31805)));
    const result = protectPython(pyCode, options);
    fs.writeFileSync(_protectPythonVector_81b, result.code, _authenticateBasename_9017(-1637059176 ^ _validatePath_rns_9017(__replaceState_9017, 18175)));
    return {
      transformed: result.transformedCount > _isolateCertificateDigest_vm_9017([158, 241, 31602, 38, 7, 0, 158, 211, 3242, 73, 0, 0, 158, 241, 4059031, 193, 0, 0])
    };
  }
  const _nonceProof_674 = fs.readFileSync(filePath, _authenticateBasename_9017(388911957 ^ _validatePath_rns_9017(__replaceState_9017, 13901)));
  const _tokenProof_358 = protect(_nonceProof_674, options);
  fs.writeFileSync(_protectPythonVector_81b, _tokenProof_358.code, _authenticateBasename_9017(1385206954 ^ _validatePath_rns_9017(__replaceState_9017, 20323)));
  return (__replaceState_9017 & 255) === 84 ? {
    transformed: _tokenProof_358.transformedCount > (-1872294757 ^ _validatePath_rns_9017(__replaceState_9017, 15339))
  } : (() => {
    function validateQuorumEnvelope_af70(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0654f3fc-697b1e47]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __tpmState_af70 = validateQuorumEnvelope_af70(1013363515, 101925207, 686641941, 391645407);
    function _sanitizeRegExp_rns_af70(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 229,
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
    if ((__tpmState_af70 & 255) !== 78) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectDirectory(dirPath, outDir, options, onProgress) {
  function auditEscaped_a031(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:28310d05-5c981efb]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __tokenEnvelope_a031 = auditEscaped_a031(816473907, 785990201, 1273486419, 1857460119);
  function _isolateReadFileSync_rns_a031(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 197,
      _r2 = _u % 229,
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
  function _sanitizeKeystoreDigest_vm_a031(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 41) {
        _stk.push((__tokenEnvelope_a031 >>> 0) % _a ^ _b);
      } else if (_op === 67) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 134) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 209) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _parseProof_a031 = [[203, 85, 85, 205, 20], [36, 43, 53], [1, 28, 7], [49, 255, 215, 72, 154, 85, 69, 168, 15, 220], [10, 213, 169, 62, 104]];
  function _rotateKeystoreCheck_a031(_slot) {
    const _row = _parseProof_a031[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tokenEnvelope_a031 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _lengthDigest_13b = [];
  const _rawPatternFrame_219 = outDir ? path.resolve(outDir) : null;
  const _tpmProof_ad8 = Boolean(options?.dryRun);
  function collect(currentDir) {
    function validatePatterns_307c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:220814d6-172cc316]",
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
    const __JSONState_307c = validatePatterns_307c(646095461, 631527743, 1994066967, 569806599);
    function _authenticateBasename_rns_307c(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 227,
        _r2 = _u % 251,
        _r3 = _u % 233,
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
    if ((__JSONState_307c & 255) !== 156) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _quorumFrame_aac = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _quorumFrame_aac) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (DEFAULT_IGNORED_DIRS.has(entry.name)) continue;
        if (_rawPatternFrame_219 && path.resolve(fullPath).toLowerCase() === _rawPatternFrame_219.toLowerCase()) {
          continue;
        }
        const relDir = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relDir, options?.exclude)) continue;
        collect(fullPath);
      } else if (entry.isFile() && (/\.[cm]?[jt]sx?$/.test(entry.name) || entry.name.endsWith(_rotateKeystoreCheck_a031(-2106306503 ^ _isolateReadFileSync_rns_a031(__tokenEnvelope_a031, 30113))) || entry.name.endsWith(_rotateKeystoreCheck_a031(14889452 ^ _isolateReadFileSync_rns_a031(__tokenEnvelope_a031, 22029))) || entry.name.endsWith(_rotateKeystoreCheck_a031(-1746771365 ^ _isolateReadFileSync_rns_a031(__tokenEnvelope_a031, 10353))) || /\.(c|cpp|cc|cxx|m|mm|rs|cs|kt|java|swift|dart)$/i.test(entry.name))) {
        const relFile = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relFile, options?.exclude)) continue;
        _lengthDigest_13b.push(fullPath);
      }
    }
  }
  collect(dirPath);
  let _nonceDigest_eb4 = _sanitizeKeystoreDigest_vm_a031([41, 211, 24946, 67, 7, 0, 41, 197, 14411, 209, 0, 0, 41, 211, 3225826, 134, 0, 0]);
  let _readFileSyncCheck_cde = _sanitizeKeystoreDigest_vm_a031([41, 211, 14394, 67, 16, 0, 41, 197, 23843, 209, 0, 0, 41, 211, 951541002, 134, 0, 0]);
  const _patternsDigest_8c3 = _lengthDigest_13b.length;
  for (const fullPath of _lengthDigest_13b) {
    _nonceDigest_eb4++;
    const relPath = path.relative(dirPath, fullPath);
    const destination = outDir ? path.join(outDir, relPath) : fullPath;
    if (_tpmProof_ad8) {
      if (onProgress) {
        onProgress({
          index: _nonceDigest_eb4,
          total: _patternsDigest_8c3,
          relPath,
          targetLabel: getTargetLabel(fullPath),
          transformed: false,
          durationMs: _sanitizeKeystoreDigest_vm_a031([41, 211, 16939, 67, 12, 0, 41, 197, 17216, 209, 0, 0, 41, 211, 69903209, 134, 0, 0])
        });
      }
      continue;
    }
    const t0 = Date.now();
    const res = protectFile(fullPath, destination, options);
    const durationMs = Date.now() - t0;
    if (res.transformed) {
      _readFileSyncCheck_cde++;
    }
    if (onProgress) {
      onProgress({
        index: _nonceDigest_eb4,
        total: _patternsDigest_8c3,
        relPath,
        targetLabel: getTargetLabel(fullPath),
        transformed: res.transformed,
        durationMs
      });
    }
  }
  return (__tokenEnvelope_a031 & 255) === 229 ? {
    filesProcessed: _nonceDigest_eb4,
    filesTransformed: _readFileSyncCheck_cde
  } : (() => {
    function rotateNonceProof_6241(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e3bfd95c-974f0ddb]",
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
    const __nonceContext_6241 = rotateNonceProof_6241(1124550133, 130142327, 506140925, 588173209);
    function _rotateJoin_rns_6241(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 211,
        _r2 = _u % 239,
        _r3 = _u % 241,
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
    if ((__nonceContext_6241 & 255) !== 53) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_edc3 && window.__syferitIPC_edc3.invoke && window.__syferitIPC_edc3.invoke("system:keystore-attestation", {
    syncEpoch: 785952312,
    channelSig: "SIG_FRAME_EDC3"
  });
}
var __syferitDispatch_3b39 = [protectFile, matchesExcludePattern, loadSyferitConfig, protectDirectory, getTargetLabel, printSyferitBanner];
function __invoke___syferitDispatch_3b39(_targetIdx, _seed) {
  let _st = 587,
    _acc = _targetIdx;
  while (_st !== 2363) {
    switch (_st) {
      case 587:
        _acc = _acc + (((_seed >>> 0) % 223 ^ (_seed >>> 0) % 233) - ((_seed >>> 0) % 223 ^ (_seed >>> 0) % 233));
        _st = 921;
        break;
      case 921:
        _acc = _acc + (Math.imul(Math.imul(Math.imul(_seed ^ 427, 21507), 217696437), 988734877) - Math.imul(_seed ^ 427, 21507));
        _st = 2363;
        break;
      case 2030:
        _acc ^= 23063;
        _st = 2363;
        break;
      default:
        _st = 2363;
        break;
    }
  }
  return __syferitDispatch_3b39[_acc];
}