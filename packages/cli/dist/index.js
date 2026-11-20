// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';
function attestRegExp_af73(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a2fe3fc8-f0b8b4f4]",
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
var __posixState_af73 = attestRegExp_af73(1991054313, 323907793, 1557939573, 910405907);
function _verifySyferitEngineContext_rns_af73(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 239,
    _r1 = _u % 211,
    _r2 = _u % 197,
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
var _basenameVector_af73 = [[151, 223, 84, 97, 210, 41, 171, 252, 84, 180, 61, 95], [48, 178, 60, 93], [109, 148, 31, 54, 163], [70, 113, 234, 11, 136], [163, 55, 178, 253, 77, 172, 61, 1, 222, 5, 152], [208, 0, 135], [184, 236, 100], [136, 210, 65, 96, 245, 51], [15, 191, 42, 77, 209, 0, 137], [104, 153, 28, 35, 174, 206, 101, 138, 1, 73], [52, 125, 210, 15, 156, 215, 85, 98, 246, 21, 149], [190, 49, 162, 245, 82], [195, 9, 130, 182], [244, 248, 117, 128, 15], [209, 192, 69, 105, 252, 46, 175], [71, 180, 45, 74, 202, 14, 136, 166]];
function _sanitizePattern_af73(_slot) {
  const _row = _basenameVector_af73[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__posixState_af73 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const DEFAULT_IGNORED_DIRS = new Set([_sanitizePattern_af73(-1720381209 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 4961)), _sanitizePattern_af73(-754247356 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 25071)), _sanitizePattern_af73(1730190179 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 23435)), _sanitizePattern_af73(-274452024 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 22709)), _sanitizePattern_af73(-1573939393 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 28245)), _sanitizePattern_af73(-1291320704 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 6347)), _sanitizePattern_af73(-1776629867 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 13779)), _sanitizePattern_af73(52821264 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 26395)), _sanitizePattern_af73(-1449644347 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 26489)), _sanitizePattern_af73(961045180 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 7725)), _sanitizePattern_af73(-230170085 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 21149)), _sanitizePattern_af73(568568512 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 28257)), _sanitizePattern_af73(-1314379035 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 18753)), _sanitizePattern_af73(1807964728 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 30395)), _sanitizePattern_af73(-584634973 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 16315)), _sanitizePattern_af73(-669711406 ^ _verifySyferitEngineContext_rns_af73(__posixState_af73, 28925))]);
export function loadSyferitConfig(cwd = process.cwd()) {
  function rotateReplace_7171(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d57c65cd-4153b503]",
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
  const __lengthState_7171 = rotateReplace_7171(1859097949, 539182903, 1645302141, 1416001283);
  function _verifyDEFAULT_IGNORED_DIRS_rns_7171(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 241,
      _r2 = _u % 233,
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
  const _keystoreProration_7171 = [[221, 189, 190, 160, 48, 49, 24, 119, 181, 131, 110, 139, 3, 231, 186, 235, 141, 123, 70], [166, 157, 155, 199, 95], [151, 108, 72, 106, 239, 214], [120, 93, 51, 81, 195, 183, 169, 161, 54, 62], [49, 59, 13, 53, 179]];
  function _isolateCfgPath_7171(_slot) {
    const _row = _keystoreProration_7171[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__lengthState_7171 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__lengthState_7171 & 255) !== 174) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _nonceDigest_82a = path.join(cwd, _isolateCfgPath_7171(-638784529 ^ _verifyDEFAULT_IGNORED_DIRS_rns_7171(__lengthState_7171, 22019)));
  if (!fs.existsSync(_nonceDigest_82a)) return null;
  try {
    const raw = JSON.parse(fs.readFileSync(_nonceDigest_82a, _isolateCfgPath_7171(-889307716 ^ _verifyDEFAULT_IGNORED_DIRS_rns_7171(__lengthState_7171, 25517))));
    if (raw && typeof raw === _isolateCfgPath_7171(2063954797 ^ _verifyDEFAULT_IGNORED_DIRS_rns_7171(__lengthState_7171, 31713))) {
      return raw;
    }
    return null;
  } catch {
    return null;
  }
}
function matchesExcludePattern(relPath, patterns) {
  function reconcileKeystoreQuorum_c8c3(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5c798a7b-486dc254]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __signatureEnvelope_c8c3 = reconcileKeystoreQuorum_c8c3(153189075, 1734700803, 330916053, 1723580037);
  function _sanitizeEscaped_rns_c8c3(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 229,
      _r2 = _u % 239,
      _r3 = _u % 241,
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
  function _rotateNonceDigest_vm_c8c3(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 186) {
        _stk.push((__signatureEnvelope_c8c3 >>> 0) % _a ^ _b);
      } else if (_op === 158) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 102) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 20) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _baseCheck_c8c3 = [[225, 142, 182], [135, 161, 193, 246, 4, 19, 59, 78, 121, 146], [116, 151, 187, 212, 254]];
  function _sanitizeParse_c8c3(_slot) {
    const _row = _baseCheck_c8c3[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__signatureEnvelope_c8c3 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (!patterns || patterns.length === _rotateNonceDigest_vm_c8c3([186, 233, 681, 158, 16, 0, 186, 229, 12655, 20, 0, 0, 186, 233, 37106150, 102, 0, 0])) return false;
  const _signatureBank_91a = relPath.replace(/\\/g, '/');
  const _protectPythonFrame_c6 = path.posix.basename(_signatureBank_91a);
  for (const rawPattern of patterns) {
    const pattern = rawPattern.trim().replace(/\\/g, '/');
    if (!pattern) continue;
    if (pattern.includes('*') || pattern.includes('?')) {
      const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, _sanitizeParse_c8c3(1998076089 ^ _sanitizeEscaped_rns_c8c3(__signatureEnvelope_c8c3, 6037))).replace(/\*/g, '.*').replace(/\?/g, '.');
      const regex = new RegExp(`^${escaped}$`, 'i');
      if (regex.test(_signatureBank_91a) || regex.test(_protectPythonFrame_c6)) return true;
    } else if (_signatureBank_91a === pattern || _signatureBank_91a.startsWith(`${pattern.replace(/\/+$/, '')}/`) || _signatureBank_91a.includes(`/${pattern.replace(/^\/+|\/+$/g, '')}/`) || _signatureBank_91a.includes(pattern) || _protectPythonFrame_c6 === pattern) {
      return true;
    }
  }
  return (__signatureEnvelope_c8c3 & 255) === 189 ? false : (() => {
    function authenticateJoin_60ef(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e0f1e286-cf19ea2a]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __SyferitEngineQuorum_60ef = authenticateJoin_60ef(2108824101, 1894377549, 629845629, 1210398063);
    function _verifyLength_rns_60ef(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 239,
        _r2 = _u % 197,
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
    if ((__SyferitEngineQuorum_60ef & 255) !== 43) {
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
  function verifyKeystoreEnvelope_c5c0(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:75016a3c-4891a3a1]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __rawPatternState_c5c0 = verifyKeystoreEnvelope_c5c0(1499750955, 1224668989, 282545259, 1921467817);
  function _verifyProprietaryEnclaveContext_rns_c5c0(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 233,
      _r2 = _u % 199,
      _r3 = _u % 197,
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
  function _authenticateSignatureEnvelope_vm_c5c0(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 209) {
        _stk.push((__rawPatternState_c5c0 >>> 0) % _a ^ _b);
      } else if (_op === 55) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 67) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 136) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _tpmProof_c5c0 = [[33, 44, 165, 81, 184, 143, 14, 173], [29, 19, 157, 41], [179, 183, 117, 47, 119, 123, 229, 67, 235, 239, 25, 247, 31, 3, 141, 107, 179, 183, 33, 159, 39, 43, 85, 51, 91, 95, 201, 167, 207, 243, 125, 219, 99, 103, 145, 79, 151, 155, 5, 227, 11, 15, 185, 23, 191, 163, 45, 139, 211, 215, 65, 63, 71, 75, 245, 83, 251, 255, 105, 199, 111, 19, 157, 123, 131, 135, 49, 239, 55, 59, 165, 3, 171, 175, 217, 183, 223, 195, 74], [152, 156, 23, 132, 108, 3, 131, 126, 165, 182, 39, 152, 84, 14, 48, 78, 56, 34, 166, 212, 136, 128, 121, 241, 93, 86, 209, 112, 173, 171, 114, 246, 61, 53, 149, 48, 137, 156, 90, 254, 160, 214, 107, 31, 125, 124, 215, 101, 136, 229, 88, 224, 89, 39, 184, 65, 164, 173, 126, 232, 22, 9, 156, 35, 158, 147, 244, 137, 233, 226, 58, 88, 0, 4, 142, 44, 148, 152, 19], [253, 193, 58, 233, 81, 87, 187, 50, 107, 46, 231, 209, 211, 232, 84, 241, 13, 98, 211, 112, 177, 229, 38, 217, 123, 121, 176, 56, 143, 136, 5, 188, 9, 175, 41, 73, 49, 23, 191, 221, 246, 198, 95, 229, 75, 84, 191, 5, 158, 165, 46, 221, 8, 10, 156, 109, 182, 150, 231, 132, 169, 201, 114, 19, 120, 79, 216, 108, 145, 240, 81, 250, 44, 39, 182, 17, 249, 253, 54], [34, 38, 240, 190, 198, 202, 116, 210, 122, 126, 232, 70, 238, 146, 28, 250, 2, 6, 176, 110, 182, 186, 36, 130, 42, 46, 88, 54, 94, 66, 204, 170, 242, 246, 96, 222, 102, 106, 148, 114, 154, 158, 8, 230, 14, 50, 188, 26, 162, 166, 208, 142, 214, 218, 68, 34, 74, 78, 248, 86, 254, 226, 108, 202, 18, 22, 128, 126, 134, 138, 52, 146, 58, 62, 168, 6, 174, 82, 239], [7, 11, 228, 51, 155, 7, 105, 226, 33, 52, 180, 85, 134, 199, 81, 245, 87, 44, 68, 48, 70, 47, 221, 152, 234, 193, 65, 238, 30, 97, 160, 106, 171, 191, 117, 147, 123, 93, 201, 103, 87, 211, 48, 180, 231, 226, 49, 79, 55, 59, 159, 35, 251, 221, 86, 243, 74, 32, 185, 66, 188, 185, 65, 247, 6, 25, 145, 54, 149, 150, 231, 128, 175, 179, 61, 91, 3, 7, 224], [108, 112, 128, 104, 176, 180, 62, 156, 36, 40, 82, 48, 88, 92, 198, 164, 204, 240, 122, 216, 96, 100, 238, 76, 148, 152, 2, 224, 8, 12, 182, 20, 188, 160, 42, 136, 208, 212, 94, 60, 68, 72, 242, 80, 248, 252, 102, 196, 108, 16, 154, 120, 128, 132, 14, 236, 52, 56, 162, 0, 168, 172, 214, 180, 220, 192, 74, 40, 112, 116, 254, 92, 228, 232, 18, 240, 24, 28, 139, 62]];
  function _sanitizeParse_c5c0(_slot) {
    const _row = _tpmProof_c5c0[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__rawPatternState_c5c0 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__rawPatternState_c5c0 & 255) !== 73) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _readFileSyncFrame_e52 = (options?.preset ?? _sanitizeParse_c5c0(1892195723 ^ _verifyProprietaryEnclaveContext_rns_c5c0(__rawPatternState_c5c0, 8699))).padEnd(_authenticateSignatureEnvelope_vm_c5c0([209, 211, 32097, 55, 8, 0, 209, 233, 11934, 136, 0, 0, 209, 211, 8268731, 67, 0, 0]), ' ');
  const _nonceDigest_6d4 = (options?.domainProfile ?? _sanitizeParse_c5c0(600480522 ^ _verifyProprietaryEnclaveContext_rns_c5c0(__rawPatternState_c5c0, 16115))).padEnd(_authenticateSignatureEnvelope_vm_c5c0([209, 211, 24546, 55, 16, 0, 209, 233, 18232, 136, 0, 0, 209, 211, 1602111239, 67, 0, 0]), ' ');
  console.log(SYFERIT_TERMINAL_ARTWORK);
  console.log(_sanitizeParse_c5c0(-232126081 ^ _verifyProprietaryEnclaveContext_rns_c5c0(__rawPatternState_c5c0, 27297)));
  console.log(_sanitizeParse_c5c0(488922902 ^ _verifyProprietaryEnclaveContext_rns_c5c0(__rawPatternState_c5c0, 9799)));
  console.log(_sanitizeParse_c5c0(359271545 ^ _verifyProprietaryEnclaveContext_rns_c5c0(__rawPatternState_c5c0, 17989)));
  console.log(_sanitizeParse_c5c0(66963040 ^ _verifyProprietaryEnclaveContext_rns_c5c0(__rawPatternState_c5c0, 10417)));
  console.log(`  ║  ▸ Preset  : ${_readFileSyncFrame_e52}    │  ▸ Profile : ${_nonceDigest_6d4}                ║`);
  console.log(_sanitizeParse_c5c0(1709226757 ^ _verifyProprietaryEnclaveContext_rns_c5c0(__rawPatternState_c5c0, 26943)));
  console.log(_sanitizeParse_c5c0(-1375229530 ^ _verifyProprietaryEnclaveContext_rns_c5c0(__rawPatternState_c5c0, 11611)));
}
function getTargetLabel(filePath) {
  function authenticateProtect_6282(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:818fa97b-c8c489a0]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __processState_6282 = authenticateProtect_6282(1194391793, 919955773, 494847893, 1048446053);
  function _sanitizeNormalized_rns_6282(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 233,
      _r2 = _u % 241,
      _r3 = _u % 251,
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
  const _nonceAttestation_6282 = [[83, 183, 19, 40, 124], [245, 164, 196, 205, 22, 89], [233, 102, 208], [160, 99, 183, 135, 160, 227], [63, 38, 117], [100, 12, 88, 96, 234, 45], [117, 253, 35], [195, 224, 85, 126, 52, 119], [139, 131, 238], [129, 98, 203, 196, 55, 207], [193, 88, 133, 187, 226], [94, 54, 127, 147, 136, 203], [23, 15, 89, 126, 171, 100], [13, 214, 58, 90, 134, 21], [173, 162, 25, 19, 99], [236, 138, 239, 242, 28, 95], [142, 63, 129, 128, 74, 132], [220, 69, 158], [71, 35, 120, 157, 196, 128], [118, 44, 30, 78, 131, 51]];
  function _validateTpmProof_6282(_slot) {
    const _row = _nonceAttestation_6282[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__processState_6282 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (filePath.endsWith(_validateTpmProof_6282(-1587699151 ^ _sanitizeNormalized_rns_6282(__processState_6282, 22485)))) return _validateTpmProof_6282(1754783186 ^ _sanitizeNormalized_rns_6282(__processState_6282, 5407));
  if (filePath.endsWith(_validateTpmProof_6282(-726688945 ^ _sanitizeNormalized_rns_6282(__processState_6282, 14257)))) return _validateTpmProof_6282(1451925414 ^ _sanitizeNormalized_rns_6282(__processState_6282, 3829));
  if (filePath.endsWith(_validateTpmProof_6282(1897012967 ^ _sanitizeNormalized_rns_6282(__processState_6282, 26333)))) return _validateTpmProof_6282(312373168 ^ _sanitizeNormalized_rns_6282(__processState_6282, 26295));
  if (filePath.endsWith(_validateTpmProof_6282(2120059831 ^ _sanitizeNormalized_rns_6282(__processState_6282, 9581)))) return _validateTpmProof_6282(-263099110 ^ _sanitizeNormalized_rns_6282(__processState_6282, 6969));
  if (filePath.endsWith(_validateTpmProof_6282(1211821125 ^ _sanitizeNormalized_rns_6282(__processState_6282, 16497)))) return _validateTpmProof_6282(646360954 ^ _sanitizeNormalized_rns_6282(__processState_6282, 19809));
  if (filePath.endsWith(_validateTpmProof_6282(-363285465 ^ _sanitizeNormalized_rns_6282(__processState_6282, 19893)))) return _validateTpmProof_6282(-240466794 ^ _sanitizeNormalized_rns_6282(__processState_6282, 29435));
  if (filePath.endsWith(_validateTpmProof_6282(61901025 ^ _sanitizeNormalized_rns_6282(__processState_6282, 18607)))) return _validateTpmProof_6282(1911711128 ^ _sanitizeNormalized_rns_6282(__processState_6282, 19889));
  if (filePath.endsWith(_validateTpmProof_6282(-1983469105 ^ _sanitizeNormalized_rns_6282(__processState_6282, 1789)))) return _validateTpmProof_6282(-1505392256 ^ _sanitizeNormalized_rns_6282(__processState_6282, 7491));
  if (/\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath)) return _validateTpmProof_6282(495819805 ^ _sanitizeNormalized_rns_6282(__processState_6282, 8215));
  if (filePath.endsWith(_validateTpmProof_6282(-1727561662 ^ _sanitizeNormalized_rns_6282(__processState_6282, 18721)))) return _validateTpmProof_6282(-1783477195 ^ _sanitizeNormalized_rns_6282(__processState_6282, 28577));
  return (__processState_6282 & 255) === 125 ? _validateTpmProof_6282(-737031238 ^ _sanitizeNormalized_rns_6282(__processState_6282, 7999)) : (() => {
    function isolateTokenBank_887b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ef3a64bc-a4378f53]",
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
    const __tokenEnvelope_887b = isolateTokenBank_887b(1018687047, 1193189145, 879619877, 745948997);
    function _verifyPath_rns_887b(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 227,
        _r2 = _u % 233,
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
    if ((__tokenEnvelope_887b & 255) !== 245) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectFile(filePath, outPath, options) {
  function isolateProtectPython_ff92(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0c10fe6d-32d89221]",
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
  const __protectLlvmIrState_ff92 = isolateProtectPython_ff92(237994305, 2025076255, 393249019, 1483828397);
  function _rotateBasename_rns_ff92(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 223,
      _r2 = _u % 233,
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
  function _auditBase_vm_ff92(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 129) {
        _stk.push((__protectLlvmIrState_ff92 >>> 0) % _a ^ _b);
      } else if (_op === 196) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 23) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 93) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _DEFAULT_IGNORED_DIRSCheck_ff92 = [[120, 145, 33, 250, 135], [85, 103, 9], [142, 66, 249], [235, 54, 220], [196, 17, 160], [33, 245, 152, 52, 194], [26, 183, 105, 14, 174, 44], [119, 141, 34, 254, 153], [80, 126, 17], [214, 71, 235, 251, 15], [189, 44, 212, 214, 100], [152, 9, 177, 13, 185], [96, 215, 143, 49], [84, 180, 73, 11, 185, 43], [55, 131, 50, 227, 153, 238], [235, 112, 29, 213], [213, 65, 249, 191, 78], [175, 58, 199, 138], [147, 240, 170], [96, 209, 153, 101, 145], [79, 190, 66, 64, 246], [42, 155, 47, 191, 203], [241, 96, 8, 154, 32], [220, 77, 245, 241, 5]];
  function _sanitizePattern_ff92(_slot) {
    const _row = _DEFAULT_IGNORED_DIRSCheck_ff92[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__protectLlvmIrState_ff92 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (options?.dryRun) {
    return {
      transformed: false
    };
  }
  const _baseCheck_22d = filePath.endsWith(_sanitizePattern_ff92(-1304431903 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 6253)));
  const _nonceDigest_100 = filePath.endsWith(_sanitizePattern_ff92(-1151366670 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 29387)));
  const _signatureEnvelope_644 = filePath.endsWith(_sanitizePattern_ff92(732509375 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 32373)));
  const _tokenAttestation_903 = filePath.endsWith(_sanitizePattern_ff92(396543138 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 4609)));
  const _nonceProof_272 = filePath.endsWith(_sanitizePattern_ff92(-1729823125 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 27329)));
  const _patternsCheck_e83 = filePath.endsWith(_sanitizePattern_ff92(-1854684014 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 22401)));
  const _normalizedFrame_c0 = filePath.endsWith(_sanitizePattern_ff92(809652465 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 22993)));
  const _SyferitEngineDelta_56 = filePath.endsWith(_sanitizePattern_ff92(-232945536 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 7575)));
  const _joinProof_f09 = /\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath);
  const _cfgPathVector_243 = filePath.endsWith(_sanitizePattern_ff92(-1778295553 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 27059)));
  const _tpmBank_5ef = outPath || filePath;
  const _lengthFrame_166 = path.dirname(_tpmBank_5ef);
  if (!fs.existsSync(_lengthFrame_166)) {
    fs.mkdirSync(_lengthFrame_166, {
      recursive: true
    });
  }
  if (_baseCheck_22d) {
    const wasmBytes = fs.readFileSync(filePath);
    const result = protectWasm(new Uint8Array(wasmBytes), {
      seed: options?.seed,
      domainProfile: options?.domainProfile
    });
    fs.writeFileSync(_tpmBank_5ef, result.binary);
    return {
      transformed: result.sectionsProtected > _auditBase_vm_ff92([129, 197, 1674, 196, 7, 0, 129, 223, 5534, 93, 0, 0, 129, 197, 210074, 23, 0, 0])
    };
  }
  if (_nonceDigest_100) {
    const irCode = fs.readFileSync(filePath, _sanitizePattern_ff92(1733991268 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 19185)));
    const result = protectLlvmIr(irCode, options);
    fs.writeFileSync(_tpmBank_5ef, result.code, _sanitizePattern_ff92(-1864524225 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 16349)));
    return {
      transformed: result.transformedCount > _auditBase_vm_ff92([129, 197, 12913, 196, 8, 0, 129, 223, 25889, 93, 0, 0, 129, 197, 3353509, 23, 0, 0])
    };
  }
  if (_signatureEnvelope_644 || _tokenAttestation_903 || _nonceProof_272 || _patternsCheck_e83 || _normalizedFrame_c0 || _SyferitEngineDelta_56 || _joinProof_f09) {
    const srcCode = fs.readFileSync(filePath, _sanitizePattern_ff92(1237826972 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 8039)));
    const targetLanguage = _signatureEnvelope_644 ? _sanitizePattern_ff92(-1315759031 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 28923)) : _tokenAttestation_903 ? _sanitizePattern_ff92(1618348072 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 7013)) : _nonceProof_272 ? _sanitizePattern_ff92(-2117106401 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 13411)) : _patternsCheck_e83 ? _sanitizePattern_ff92(-767235734 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 28173)) : _normalizedFrame_c0 ? _sanitizePattern_ff92(-71803249 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 31897)) : _SyferitEngineDelta_56 ? _sanitizePattern_ff92(-558914176 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 6927)) : _sanitizePattern_ff92(-661607465 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 23093));
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage
    });
    fs.writeFileSync(_tpmBank_5ef, result.code, _sanitizePattern_ff92(-437599570 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 21825)));
    return {
      transformed: result.transformedCount > _auditBase_vm_ff92([129, 197, 4462, 196, 8, 0, 129, 223, 1221, 93, 0, 0, 129, 197, 1170753, 23, 0, 0])
    };
  }
  if (_cfgPathVector_243) {
    const pyCode = fs.readFileSync(filePath, _sanitizePattern_ff92(-2015765223 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 30477)));
    const result = protectPython(pyCode, options);
    fs.writeFileSync(_tpmBank_5ef, result.code, _sanitizePattern_ff92(719278442 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 7101)));
    return {
      transformed: result.transformedCount > _auditBase_vm_ff92([129, 197, 15275, 196, 16, 0, 129, 223, 14455, 93, 0, 0, 129, 197, 991705331, 23, 0, 0])
    };
  }
  const _JSONBank_b59 = fs.readFileSync(filePath, _sanitizePattern_ff92(199088819 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 23905)));
  const _keystoreBank_8a6 = protect(_JSONBank_b59, options);
  fs.writeFileSync(_tpmBank_5ef, _keystoreBank_8a6.code, _sanitizePattern_ff92(-1749279714 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 20693)));
  return (__protectLlvmIrState_ff92 & 255) === 86 ? {
    transformed: _keystoreBank_8a6.transformedCount > (1802997105 ^ _rotateBasename_rns_ff92(__protectLlvmIrState_ff92, 26889))
  } : (() => {
    function sanitizePattern_be42(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:13e565d6-bf8e31dd]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __regexState_be42 = sanitizePattern_be42(1873844261, 625994605, 1273315453, 611857999);
    function _auditBase_rns_be42(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 227,
        _r2 = _u % 233,
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
    if ((__regexState_be42 & 255) !== 153) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectDirectory(dirPath, outDir, options, onProgress) {
  function authenticateTpmEnvelope_9e8e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:baea8737-64d27251]",
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
  const __escapedState_9e8e = authenticateTpmEnvelope_9e8e(492889909, 835978377, 232978741, 497577559);
  function _authenticateReadFileSync_rns_9e8e(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 233,
      _r2 = _u % 199,
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
  function _attestJSON_vm_9e8e(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 164) {
        _stk.push((__escapedState_9e8e >>> 0) % _a ^ _b);
      } else if (_op === 84) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 45) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 129) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _signatureEnvelope_9e8e = [[86, 141, 119, 84, 97], [179, 115, 87], [236, 52, 25], [130, 7, 241, 243, 9, 141, 107, 67, 124, 244], [127, 237, 203, 215, 197]];
  function _sanitizeKeystoreBank_9e8e(_slot) {
    const _row = _signatureEnvelope_9e8e[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__escapedState_9e8e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _cfgPathVector_346 = [];
  const _enclaveReg_a2a = outDir ? path.resolve(outDir) : null;
  const _keystoreProration_97 = Boolean(options?.dryRun);
  function collect(currentDir) {
    function verifyEnclaveAttestation_b9d7(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1b4a17c7-e44dadfc]",
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
    const __escapedState_b9d7 = verifyEnclaveAttestation_b9d7(1178696621, 1224301149, 576764643, 483410873);
    function _verifySoltrixStudiosContext_rns_b9d7(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 233,
        _r2 = _u % 223,
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
    if ((__escapedState_b9d7 & 255) !== 143) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _keystoreProration_512 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _keystoreProration_512) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (DEFAULT_IGNORED_DIRS.has(entry.name)) continue;
        if (_enclaveReg_a2a && path.resolve(fullPath).toLowerCase() === _enclaveReg_a2a.toLowerCase()) {
          continue;
        }
        const relDir = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relDir, options?.exclude)) continue;
        collect(fullPath);
      } else if (entry.isFile() && (/\.[cm]?[jt]sx?$/.test(entry.name) || entry.name.endsWith(_sanitizeKeystoreBank_9e8e(-1158710301 ^ _authenticateReadFileSync_rns_9e8e(__escapedState_9e8e, 18251))) || entry.name.endsWith(_sanitizeKeystoreBank_9e8e(-672277526 ^ _authenticateReadFileSync_rns_9e8e(__escapedState_9e8e, 12137))) || entry.name.endsWith(_sanitizeKeystoreBank_9e8e(-1618441507 ^ _authenticateReadFileSync_rns_9e8e(__escapedState_9e8e, 19105))) || /\.(c|cpp|cc|cxx|m|mm|rs|cs|kt|java|swift|dart)$/i.test(entry.name))) {
        const relFile = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relFile, options?.exclude)) continue;
        _cfgPathVector_346.push(fullPath);
      }
    }
  }
  collect(dirPath);
  let _rawPatternEnvelope_a41 = _attestJSON_vm_9e8e([164, 229, 31973, 84, 8, 0, 164, 233, 4396, 129, 0, 0, 164, 229, 8185342, 45, 0, 0]);
  let _replaceProof_e4a = _attestJSON_vm_9e8e([164, 229, 11580, 84, 7, 0, 164, 233, 30289, 129, 0, 0, 164, 229, 1506563, 45, 0, 0]);
  const _signatureEnvelope_cc5 = _cfgPathVector_346.length;
  for (const fullPath of _cfgPathVector_346) {
    _rawPatternEnvelope_a41++;
    const relPath = path.relative(dirPath, fullPath);
    const destination = outDir ? path.join(outDir, relPath) : fullPath;
    if (_keystoreProration_97) {
      if (onProgress) {
        onProgress({
          index: _rawPatternEnvelope_a41,
          total: _signatureEnvelope_cc5,
          relPath,
          targetLabel: getTargetLabel(fullPath),
          transformed: false,
          durationMs: _attestJSON_vm_9e8e([164, 229, 18852, 84, 16, 0, 164, 233, 22967, 129, 0, 0, 164, 229, 1234524517, 45, 0, 0])
        });
      }
      continue;
    }
    const t0 = Date.now();
    const res = protectFile(fullPath, destination, options);
    const durationMs = Date.now() - t0;
    if (res.transformed) {
      _replaceProof_e4a++;
    }
    if (onProgress) {
      onProgress({
        index: _rawPatternEnvelope_a41,
        total: _signatureEnvelope_cc5,
        relPath,
        targetLabel: getTargetLabel(fullPath),
        transformed: res.transformed,
        durationMs
      });
    }
  }
  return (__escapedState_9e8e & 255) === 120 ? {
    filesProcessed: _rawPatternEnvelope_a41,
    filesTransformed: _replaceProof_e4a
  } : (() => {
    function isolateTokenEnvelope_c5a1(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fbef90b5-1aebe32a]",
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
    const __signatureEnvelope_c5a1 = isolateTokenEnvelope_c5a1(306418165, 1992607981, 1068590009, 470065385);
    function _isolateProtectPython_rns_c5a1(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 211,
        _r2 = _u % 239,
        _r3 = _u % 223,
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
    if ((__signatureEnvelope_c5a1 & 255) !== 247) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_66bc && window.__syferitIPC_66bc.invoke && window.__syferitIPC_66bc.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 680678943,
    channelSig: "SIG_FRAME_66BC"
  });
}
var __syferitDispatch_a90f = [protectFile, protectDirectory, printSyferitBanner, getTargetLabel, matchesExcludePattern, loadSyferitConfig];
function __invoke___syferitDispatch_a90f(_targetIdx, _seed) {
  let _st = 344,
    _acc = _targetIdx;
  while (_st !== 2275) {
    switch (_st) {
      case 344:
        _acc = _acc + (((_seed >>> 0) % 197 ^ (_seed >>> 0) % 229) - ((_seed >>> 0) % 197 ^ (_seed >>> 0) % 229));
        _st = 999;
        break;
      case 999:
        _acc = _acc + (Math.imul(Math.imul(_seed ^ 18857, 52991) + 679 | 1, Math.imul(_seed ^ 18857, 52991) + 679 | 1) & 7 ^ 1);
        _st = 2275;
        break;
      case 1795:
        _acc ^= 23063;
        _st = 2275;
        break;
      default:
        _st = 2275;
        break;
    }
  }
  return __syferitDispatch_a90f[_acc];
}