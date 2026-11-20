// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';
function verifyLoadSyferitConfig_d8ac(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ae708847-520b497c]",
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
var __tokenFrame_d8ac = verifyLoadSyferitConfig_d8ac(511405771, 275820543, 1772563223, 1519001819);
function _sanitizeQuorumVector_rns_d8ac(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 211,
    _r1 = _u % 197,
    _r2 = _u % 227,
    _r3 = _u % 199,
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
var _patternsFrame_d8ac = [[214, 167, 58, 211, 19, 49, 157, 46, 149, 156, 227, 173], [243, 138, 234, 175], [44, 124, 205, 120, 226], [9, 89, 184, 93, 207], [98, 47, 132, 47, 140, 132, 227, 243, 31, 237, 110], [19, 232, 121], [249, 196, 86], [207, 170, 19, 222, 42, 43], [206, 151, 244, 191, 16, 232, 127], [43, 113, 202, 113, 237, 246, 75, 248, 66, 81], [117, 101, 160, 81, 221, 175, 7, 212, 55, 61, 167], [97, 41, 144, 35, 149], [2, 225, 116, 4], [183, 192, 91, 242, 76], [144, 184, 23, 223, 61, 6, 157], [128, 156, 255, 132, 5, 230, 122, 16]];
function _attestPosix_d8ac(_slot) {
  const _row = _patternsFrame_d8ac[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tokenFrame_d8ac >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const DEFAULT_IGNORED_DIRS = new Set([_attestPosix_d8ac(-1986705807 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 23603)), _attestPosix_d8ac(-764038936 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 18239)), _attestPosix_d8ac(1058801399 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 18339)), _attestPosix_d8ac(-231814290 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 22601)), _attestPosix_d8ac(-444418469 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 3435)), _attestPosix_d8ac(301439148 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 15621)), _attestPosix_d8ac(-1695302593 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 25437)), _attestPosix_d8ac(-395393296 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 11839)), _attestPosix_d8ac(-2025222653 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 22823)), _attestPosix_d8ac(526596080 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 27161)), _attestPosix_d8ac(461814111 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 21543)), _attestPosix_d8ac(-1224084704 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 7863)), _attestPosix_d8ac(147138377 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 25819)), _attestPosix_d8ac(1440024256 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 27073)), _attestPosix_d8ac(468417885 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 14987)), _attestPosix_d8ac(491747800 ^ _sanitizeQuorumVector_rns_d8ac(__tokenFrame_d8ac, 22499))]);
export function loadSyferitConfig(cwd = process.cwd()) {
  function auditNonceProof_2446(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:53bddd52-55184bc2]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __tokenProof_2446 = auditNonceProof_2446(1585042911, 1015780059, 1927936779, 1802407903);
  function _isolateTokenFrame_rns_2446(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 211,
      _r2 = _u % 233,
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
  const _nonceFrame_2446 = [[254, 125, 244, 99, 83, 241, 82, 180, 214, 67, 212, 72, 32, 167, 96, 168, 174, 59, 140], [199, 93, 209, 6, 126], [184, 44, 182, 53, 8, 150], [153, 29, 117, 16, 226, 119, 231, 96, 87, 254], [82, 251, 71, 246, 208]];
  function _validateNonceFrame_2446(_slot) {
    const _row = _nonceFrame_2446[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tokenProof_2446 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__tokenProof_2446 & 255) !== 141) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _quorumBank_cbe = path.join(cwd, _validateNonceFrame_2446(-1277025173 ^ _isolateTokenFrame_rns_2446(__tokenProof_2446, 30525)));
  if (!fs.existsSync(_quorumBank_cbe)) return null;
  try {
    const raw = JSON.parse(fs.readFileSync(_quorumBank_cbe, _validateNonceFrame_2446(-369718150 ^ _isolateTokenFrame_rns_2446(__tokenProof_2446, 10171))));
    if (raw && typeof raw === _validateNonceFrame_2446(-706623703 ^ _isolateTokenFrame_rns_2446(__tokenProof_2446, 12739))) {
      return raw;
    }
    return null;
  } catch {
    return null;
  }
}
function matchesExcludePattern(relPath, patterns) {
  function isolateRelPath_a4d9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:5cfa95c2-30e50d03]",
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
  const __nonceVector_a4d9 = isolateRelPath_a4d9(791402079, 1089365047, 524281657, 938310559);
  function _isolateQuorumBank_rns_a4d9(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 241,
      _r2 = _u % 233,
      _r3 = _u % 251,
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
  function _verifyEnclaveAttestation_vm_a4d9(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 184) {
        _stk.push((__nonceVector_a4d9 >>> 0) % _a ^ _b);
      } else if (_op === 90) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 140) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 29) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _loadSyferitConfigEnvelope_a4d9 = [[96, 223, 154], [4, 78, 149, 133, 135, 196, 7, 29, 250, 45], [245, 38, 103, 105, 127]];
  function _attestProtectPython_a4d9(_slot) {
    const _row = _loadSyferitConfigEnvelope_a4d9[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceVector_a4d9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (!patterns || patterns.length === _verifyEnclaveAttestation_vm_a4d9([184, 223, 26795, 90, 16, 0, 184, 241, 7362, 29, 0, 0, 184, 223, 1755258042, 140, 0, 0])) return false;
  const _joinCheck_b7a = relPath.replace(/\\/g, '/');
  const _quorumVector_99b = path.posix.basename(_joinCheck_b7a);
  for (const rawPattern of patterns) {
    const pattern = rawPattern.trim().replace(/\\/g, '/');
    if (!pattern) continue;
    if (pattern.includes('*') || pattern.includes('?')) {
      const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, _attestProtectPython_a4d9(-408553931 ^ _isolateQuorumBank_rns_a4d9(__nonceVector_a4d9, 1947))).replace(/\*/g, '.*').replace(/\?/g, '.');
      const regex = new RegExp(`^${escaped}$`, 'i');
      if (regex.test(_joinCheck_b7a) || regex.test(_quorumVector_99b)) return true;
    } else if (_joinCheck_b7a === pattern || _joinCheck_b7a.startsWith(`${pattern.replace(/\/+$/, '')}/`) || _joinCheck_b7a.includes(`/${pattern.replace(/^\/+|\/+$/g, '')}/`) || _joinCheck_b7a.includes(pattern) || _quorumVector_99b === pattern) {
      return true;
    }
  }
  return (__nonceVector_a4d9 & 255) === 60 ? false : (() => {
    function isolateRelPath_2b53(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1030f0e5-26d8d522]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __DEFAULT_IGNORED_DIRSState_2b53 = isolateRelPath_2b53(1831818481, 230983741, 1005467091, 1883129663);
    function _attestTrim_rns_2b53(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 197,
        _r2 = _u % 239,
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
    if ((__DEFAULT_IGNORED_DIRSState_2b53 & 255) !== 71) {
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
  function sanitizeQuorumVector_9909(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d872eb4b-825e7659]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __enclaveAttestation_9909 = sanitizeQuorumVector_9909(1151234427, 1252047769, 691617969, 1175533583);
  function _attestCertificateDigest_rns_9909(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 227,
      _r2 = _u % 241,
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
  function _normalizeQuorumVector_vm_9909(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 157) {
        _stk.push((__enclaveAttestation_9909 >>> 0) % _a ^ _b);
      } else if (_op === 194) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 62) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 102) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _tpmProof_9909 = [[188, 209, 242, 89, 13, 42, 113, 181], [138, 180, 196, 17], [62, 218, 158, 215, 226, 222, 14, 75, 22, 114, 162, 255, 138, 230, 214, 19, 62, 26, 74, 135, 82, 142, 254, 59, 198, 34, 18, 175, 122, 86, 134, 195, 238, 202, 58, 119, 2, 126, 174, 235, 182, 146, 194, 31, 42, 6, 118, 179, 94, 186, 234, 39, 242, 46, 30, 91, 102, 66, 178, 207, 154, 246, 38, 99, 14, 106, 90, 151, 162, 158, 206, 11, 214, 50, 98, 191, 74, 166, 145], [99, 63, 190, 140, 247, 224, 218, 6, 46, 21, 94, 128, 223, 173, 153, 70, 163, 65, 14, 220, 51, 35, 128, 233, 214, 245, 8, 72, 38, 72, 219, 254, 134, 214, 252, 56, 18, 63, 3, 198, 43, 181, 210, 7, 246, 31, 62, 109, 19, 70, 177, 232, 162, 196, 1, 89, 47, 78, 39, 144, 157, 170, 245, 43, 229, 48, 93, 129, 114, 129, 227, 160, 139, 167, 119, 52, 31, 59, 186], [72, 100, 69, 241, 220, 250, 236, 10, 254, 75, 72, 217, 110, 117, 163, 249, 152, 199, 12, 72, 60, 8, 145, 193, 206, 156, 223, 48, 18, 53, 82, 180, 124, 202, 150, 81, 188, 122, 104, 37, 99, 99, 176, 237, 182, 201, 8, 13, 11, 64, 113, 165, 133, 167, 235, 117, 195, 51, 72, 140, 52, 180, 165, 27, 205, 234, 39, 116, 28, 93, 134, 194, 185, 194, 25, 25, 68, 96, 65], [173, 73, 89, 166, 113, 173, 157, 218, 229, 193, 49, 78, 25, 117, 165, 226, 141, 233, 217, 22, 33, 29, 77, 138, 85, 177, 225, 62, 201, 37, 21, 82, 125, 89, 137, 198, 145, 205, 61, 122, 5, 97, 81, 238, 185, 149, 197, 2, 45, 9, 121, 182, 65, 189, 237, 42, 245, 209, 1, 94, 105, 69, 181, 242, 157, 249, 41, 102, 49, 109, 93, 154, 165, 129, 241, 14, 217, 53, 86], [146, 174, 15, 59, 102, 154, 210, 234, 180, 209, 239, 45, 11, 106, 58, 237, 34, 137, 239, 56, 219, 82, 6, 144, 95, 100, 186, 246, 147, 204, 11, 82, 62, 90, 222, 155, 198, 192, 178, 111, 194, 118, 107, 140, 106, 143, 154, 87, 130, 94, 116, 43, 102, 96, 141, 251, 191, 197, 2, 90, 49, 84, 42, 143, 147, 188, 250, 62, 232, 11, 92, 136, 58, 214, 230, 163, 142, 170, 11], [247, 147, 217, 16, 59, 23, 71, 132, 175, 139, 251, 56, 195, 63, 111, 172, 119, 83, 131, 192, 235, 199, 55, 116, 31, 123, 171, 232, 179, 239, 223, 28, 39, 3, 115, 176, 91, 183, 231, 36, 207, 43, 27, 88, 99, 95, 143, 204, 151, 243, 35, 96, 11, 103, 87, 148, 191, 155, 203, 8, 211, 15, 127, 188, 71, 163, 147, 208, 251, 215, 7, 68, 111, 75, 187, 248, 131, 255, 34, 54]];
  function _verifyEnclaveAttestation_9909(_slot) {
    const _row = _tpmProof_9909[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveAttestation_9909 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__enclaveAttestation_9909 & 255) !== 212) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _protectWasmEnvelope_b4c = (options?.preset ?? _verifyEnclaveAttestation_9909(-1608626155 ^ _attestCertificateDigest_rns_9909(__enclaveAttestation_9909, 1993))).padEnd(_normalizeQuorumVector_vm_9909([157, 211, 14296, 194, 7, 0, 157, 227, 21909, 102, 0, 0, 157, 211, 1845766, 62, 0, 0]), ' ');
  const _tokenProof_3ae = (options?.domainProfile ?? _verifyEnclaveAttestation_9909(-867882068 ^ _attestCertificateDigest_rns_9909(__enclaveAttestation_9909, 4435))).padEnd(_normalizeQuorumVector_vm_9909([157, 211, 8781, 194, 16, 0, 157, 227, 11517, 102, 0, 0, 157, 211, 574369012, 62, 0, 0]), ' ');
  console.log(SYFERIT_TERMINAL_ARTWORK);
  console.log(_verifyEnclaveAttestation_9909(1347752509 ^ _attestCertificateDigest_rns_9909(__enclaveAttestation_9909, 17301)));
  console.log(_verifyEnclaveAttestation_9909(619749610 ^ _attestCertificateDigest_rns_9909(__enclaveAttestation_9909, 873)));
  console.log(_verifyEnclaveAttestation_9909(-1422662901 ^ _attestCertificateDigest_rns_9909(__enclaveAttestation_9909, 1359)));
  console.log(_verifyEnclaveAttestation_9909(441889788 ^ _attestCertificateDigest_rns_9909(__enclaveAttestation_9909, 19677)));
  console.log(`  ║  ▸ Preset  : ${_protectWasmEnvelope_b4c}    │  ▸ Profile : ${_tokenProof_3ae}                ║`);
  console.log(_verifyEnclaveAttestation_9909(-1432113757 ^ _attestCertificateDigest_rns_9909(__enclaveAttestation_9909, 16961)));
  console.log(_verifyEnclaveAttestation_9909(779546168 ^ _attestCertificateDigest_rns_9909(__enclaveAttestation_9909, 20269)));
}
function getTargetLabel(filePath) {
  function sanitizeLength_2dc9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a2131972-a1630398]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __JSONState_2dc9 = sanitizeLength_2dc9(1422844617, 846387137, 79945505, 1199391793);
  function _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 197,
      _r2 = _u % 199,
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
  const _tpmVector_2dc9 = [[38, 77, 167, 139, 241], [122, 30, 184, 80, 225, 211], [124, 232, 124], [59, 229, 99, 42, 43, 29], [178, 188, 41], [147, 134, 12, 197, 117, 167], [200, 123, 215], [72, 30, 233, 219, 191, 241], [30, 9, 154], [30, 232, 103, 41, 128, 117], [84, 198, 89, 28, 111], [213, 176, 43, 238, 19, 69], [234, 133, 245, 221, 62, 254], [186, 108, 206, 191, 9, 143], [32, 36, 173, 140, 214], [119, 4, 131, 87, 231, 217], [27, 165, 85, 99, 199, 62], [83, 223, 66], [242, 173, 20, 250, 89, 6], [141, 170, 170, 227, 8, 173]];
  function _attestProtectNativeSource_2dc9(_slot) {
    const _row = _tpmVector_2dc9[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__JSONState_2dc9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (filePath.endsWith(_attestProtectNativeSource_2dc9(1723324867 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 13879)))) return _attestProtectNativeSource_2dc9(1014471102 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 1259));
  if (filePath.endsWith(_attestProtectNativeSource_2dc9(1659108927 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 21419)))) return _attestProtectNativeSource_2dc9(-498359844 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 6487));
  if (filePath.endsWith(_attestProtectNativeSource_2dc9(-1836786463 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 1879)))) return _attestProtectNativeSource_2dc9(-2117060838 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 17215));
  if (filePath.endsWith(_attestProtectNativeSource_2dc9(-1462113125 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 19885)))) return _attestProtectNativeSource_2dc9(553186140 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 16171));
  if (filePath.endsWith(_attestProtectNativeSource_2dc9(-296066255 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 14265)))) return _attestProtectNativeSource_2dc9(814209596 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 13335));
  if (filePath.endsWith(_attestProtectNativeSource_2dc9(1437480147 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 27411)))) return _attestProtectNativeSource_2dc9(-908171718 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 29043));
  if (filePath.endsWith(_attestProtectNativeSource_2dc9(992037391 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 3907)))) return _attestProtectNativeSource_2dc9(6002764 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 10085));
  if (filePath.endsWith(_attestProtectNativeSource_2dc9(1491824343 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 22319)))) return _attestProtectNativeSource_2dc9(2053827686 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 29887));
  if (/\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath)) return _attestProtectNativeSource_2dc9(-1564263739 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 13215));
  if (filePath.endsWith(_attestProtectNativeSource_2dc9(-1244630988 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 12987)))) return _attestProtectNativeSource_2dc9(385415247 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 28139));
  return (__JSONState_2dc9 & 255) === 8 ? _attestProtectNativeSource_2dc9(-2125606562 ^ _rotateDEFAULT_IGNORED_DIRS_rns_2dc9(__JSONState_2dc9, 4289)) : (() => {
    function validateEscaped_7ae7(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f86e5579-42e5f2f0]",
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
    const __escapedState_7ae7 = validateEscaped_7ae7(1729429921, 841260429, 1398179483, 2146705175);
    function _validateEscaped_rns_7ae7(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 199,
        _r2 = _u % 233,
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
    if ((__escapedState_7ae7 & 255) !== 0) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectFile(filePath, outPath, options) {
  function auditJoin_b322(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:dec1586d-68d64446]",
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
  const __protectLlvmIrState_b322 = auditJoin_b322(2116981217, 15078405, 657725281, 1203376197);
  function _verifyBasename_rns_b322(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 197,
      _r2 = _u % 227,
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
  function _reconcileKeystoreQuorum_vm_b322(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 207) {
        _stk.push((__protectLlvmIrState_b322 >>> 0) % _a ^ _b);
      } else if (_op === 95) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 63) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 119) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _processCheck_b322 = [[153, 200, 115, 230, 38], [242, 136, 91], [47, 123, 47], [8, 77, 242], [101, 56, 210], [94, 18, 170, 56, 101], [187, 238, 135, 26, 79, 69], [148, 166, 116, 234, 58], [241, 151, 67], [113, 120, 57, 207, 160], [92, 69, 226, 42, 133], [59, 34, 207, 1, 218], [1, 14, 189, 37], [251, 211, 155, 23, 94, 68], [214, 170, 108, 247, 56, 55], [136, 139, 75, 161], [116, 120, 11, 131, 239], [72, 85, 245, 126], [50, 41, 220], [3, 10, 183, 121, 50], [238, 215, 144, 84, 23], [181, 188, 125, 179, 108], [144, 153, 38, 238, 65], [127, 102, 3, 197, 166]];
  function _attestPosix_b322(_slot) {
    const _row = _processCheck_b322[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__protectLlvmIrState_b322 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (options?.dryRun) {
    return {
      transformed: false
    };
  }
  const _tpmVector_7b9 = filePath.endsWith(_attestPosix_b322(119178189 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 12149)));
  const _signatureCheck_47a = filePath.endsWith(_attestPosix_b322(946535116 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 22053)));
  const _patternProof_a85 = filePath.endsWith(_attestPosix_b322(2131219447 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 29793)));
  const _nonceAttestation_713 = filePath.endsWith(_attestPosix_b322(953246892 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 9121)));
  const _regexBank_140 = filePath.endsWith(_attestPosix_b322(619333691 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 24227)));
  const _SoltrixStudiosDelta_9b8 = filePath.endsWith(_attestPosix_b322(-1204200292 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 5733)));
  const _baseBank_272 = filePath.endsWith(_attestPosix_b322(508460185 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 10099)));
  const _lengthDigest_209 = filePath.endsWith(_attestPosix_b322(-261031084 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 28083)));
  const _parseBank_ee6 = /\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath);
  const _enclaveVector_1fd = filePath.endsWith(_attestPosix_b322(1101805583 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 30031)));
  const _relPathDigest_f0b = outPath || filePath;
  const _nonceProof_684 = path.dirname(_relPathDigest_f0b);
  if (!fs.existsSync(_nonceProof_684)) {
    fs.mkdirSync(_nonceProof_684, {
      recursive: true
    });
  }
  if (_tpmVector_7b9) {
    const wasmBytes = fs.readFileSync(filePath);
    const result = protectWasm(new Uint8Array(wasmBytes), {
      seed: options?.seed,
      domainProfile: options?.domainProfile
    });
    fs.writeFileSync(_relPathDigest_f0b, result.binary);
    return {
      transformed: result.sectionsProtected > _reconcileKeystoreQuorum_vm_b322([207, 251, 1401, 95, 16, 0, 207, 197, 24585, 119, 0, 0, 207, 251, 98066582, 63, 0, 0])
    };
  }
  if (_signatureCheck_47a) {
    const irCode = fs.readFileSync(filePath, _attestPosix_b322(-1487142454 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 16685)));
    const result = protectLlvmIr(irCode, options);
    fs.writeFileSync(_relPathDigest_f0b, result.code, _attestPosix_b322(1163474599 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 18795)));
    return {
      transformed: result.transformedCount > _reconcileKeystoreQuorum_vm_b322([207, 251, 5956, 95, 7, 0, 207, 197, 11456, 119, 0, 0, 207, 251, 794591, 63, 0, 0])
    };
  }
  if (_patternProof_a85 || _nonceAttestation_713 || _regexBank_140 || _SoltrixStudiosDelta_9b8 || _baseBank_272 || _lengthDigest_209 || _parseBank_ee6) {
    const srcCode = fs.readFileSync(filePath, _attestPosix_b322(-1502586304 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 15139)));
    const targetLanguage = _patternProof_a85 ? _attestPosix_b322(-2011305339 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 28503)) : _nonceAttestation_713 ? _attestPosix_b322(1749142278 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 19701)) : _regexBank_140 ? _attestPosix_b322(1781960877 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 21051)) : _SoltrixStudiosDelta_9b8 ? _attestPosix_b322(75497756 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 29695)) : _baseBank_272 ? _attestPosix_b322(-463082517 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 24679)) : _lengthDigest_209 ? _attestPosix_b322(-783921980 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 29281)) : _attestPosix_b322(-859636573 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 5867));
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage
    });
    fs.writeFileSync(_relPathDigest_f0b, result.code, _attestPosix_b322(1595182682 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 28933)));
    return {
      transformed: result.transformedCount > _reconcileKeystoreQuorum_vm_b322([207, 251, 30110, 95, 7, 0, 207, 197, 5581, 119, 0, 0, 207, 251, 3847634, 63, 0, 0])
    };
  }
  if (_enclaveVector_1fd) {
    const pyCode = fs.readFileSync(filePath, _attestPosix_b322(-668128553 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 28451)));
    const result = protectPython(pyCode, options);
    fs.writeFileSync(_relPathDigest_f0b, result.code, _attestPosix_b322(899756378 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 18701)));
    return {
      transformed: result.transformedCount > _reconcileKeystoreQuorum_vm_b322([207, 251, 23574, 95, 7, 0, 207, 197, 10524, 119, 0, 0, 207, 251, 3048451, 63, 0, 0])
    };
  }
  const _posixAttestation_10c = fs.readFileSync(filePath, _attestPosix_b322(-200364769 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 6301)));
  const _rawPatternCheck_666 = protect(_posixAttestation_10c, options);
  fs.writeFileSync(_relPathDigest_f0b, _rawPatternCheck_666.code, _attestPosix_b322(236520676 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 12679)));
  return (__protectLlvmIrState_b322 & 255) === 183 ? {
    transformed: _rawPatternCheck_666.transformedCount > (774685019 ^ _verifyBasename_rns_b322(__protectLlvmIrState_b322, 25355))
  } : (() => {
    function normalizeQuorumVector_63e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:d7e16da8-7593ad8c]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __tpmState_63e = normalizeQuorumVector_63e(449265039, 2025114009, 2024400703, 1516737531);
    function _normalizeQuorumVector_rns_63e(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 199,
        _r2 = _u % 197,
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
    if ((__tpmState_63e & 255) !== 195) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectDirectory(dirPath, outDir, options, onProgress) {
  function auditRegex_7276(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:86330cfe-a3555258]",
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
  const __keystoreVector_7276 = auditRegex_7276(1931484179, 539230639, 422662193, 1472699221);
  function _authenticateQuorumCheck_rns_7276(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 199,
      _r2 = _u % 251,
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
  function _auditProcess_vm_7276(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 132) {
        _stk.push((__keystoreVector_7276 >>> 0) % _a ^ _b);
      } else if (_op === 25) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 72) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 186) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _rawPatternCheck_7276 = [[90, 74, 91, 153, 101], [183, 14, 51], [144, 247, 253], [134, 194, 221, 60, 5, 48, 79, 132, 120, 177], [123, 178, 175, 18, 249]];
  function _isolateQuorumBank_7276(_slot) {
    const _row = _rawPatternCheck_7276[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreVector_7276 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _patternProof_471 = [];
  const _relPathDigest_658 = outDir ? path.resolve(outDir) : null;
  const _basenameBank_246 = Boolean(options?.dryRun);
  function collect(currentDir) {
    function sanitizeQuorumVector_2727(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9f29725d-41a7e809]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __SoltrixStudiosQuorum_2727 = sanitizeQuorumVector_2727(1143159661, 925033057, 1079091329, 385753757);
    function _isolateTokenFrame_rns_2727(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 251,
        _r1 = _u % 199,
        _r2 = _u % 227,
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
    if ((__SoltrixStudiosQuorum_2727 & 255) !== 211) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _pathDigest_f4b = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _pathDigest_f4b) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (DEFAULT_IGNORED_DIRS.has(entry.name)) continue;
        if (_relPathDigest_658 && path.resolve(fullPath).toLowerCase() === _relPathDigest_658.toLowerCase()) {
          continue;
        }
        const relDir = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relDir, options?.exclude)) continue;
        collect(fullPath);
      } else if (entry.isFile() && (/\.[cm]?[jt]sx?$/.test(entry.name) || entry.name.endsWith(_isolateQuorumBank_7276(-2064653289 ^ _authenticateQuorumCheck_rns_7276(__keystoreVector_7276, 7995))) || entry.name.endsWith(_isolateQuorumBank_7276(1966253436 ^ _authenticateQuorumCheck_rns_7276(__keystoreVector_7276, 9219))) || entry.name.endsWith(_isolateQuorumBank_7276(492312997 ^ _authenticateQuorumCheck_rns_7276(__keystoreVector_7276, 11331))) || /\.(c|cpp|cc|cxx|m|mm|rs|cs|kt|java|swift|dart)$/i.test(entry.name))) {
        const relFile = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relFile, options?.exclude)) continue;
        _patternProof_471.push(fullPath);
      }
    }
  }
  collect(dirPath);
  let _certificateDigest_d97 = _auditProcess_vm_7276([132, 241, 19998, 25, 12, 0, 132, 199, 16218, 186, 0, 0, 132, 241, 82440049, 72, 0, 0]);
  let _quorumBank_404 = _auditProcess_vm_7276([132, 241, 4531, 25, 7, 0, 132, 199, 11823, 186, 0, 0, 132, 241, 575748, 72, 0, 0]);
  const _patternsFrame_6bb = _patternProof_471.length;
  for (const fullPath of _patternProof_471) {
    _certificateDigest_d97++;
    const relPath = path.relative(dirPath, fullPath);
    const destination = outDir ? path.join(outDir, relPath) : fullPath;
    if (_basenameBank_246) {
      if (onProgress) {
        onProgress({
          index: _certificateDigest_d97,
          total: _patternsFrame_6bb,
          relPath,
          targetLabel: getTargetLabel(fullPath),
          transformed: false,
          durationMs: _auditProcess_vm_7276([132, 241, 23885, 25, 8, 0, 132, 199, 3465, 186, 0, 0, 132, 241, 6149538, 72, 0, 0])
        });
      }
      continue;
    }
    const t0 = Date.now();
    const res = protectFile(fullPath, destination, options);
    const durationMs = Date.now() - t0;
    if (res.transformed) {
      _quorumBank_404++;
    }
    if (onProgress) {
      onProgress({
        index: _certificateDigest_d97,
        total: _patternsFrame_6bb,
        relPath,
        targetLabel: getTargetLabel(fullPath),
        transformed: res.transformed,
        durationMs
      });
    }
  }
  return (__keystoreVector_7276 & 255) === 116 ? {
    filesProcessed: _certificateDigest_d97,
    filesTransformed: _quorumBank_404
  } : (() => {
    function sanitizeQuorumVector_ba24(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:fd8cf7b9-14350872]",
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
    const __SyferitEngineQuorum_ba24 = sanitizeQuorumVector_ba24(1765006285, 2118141297, 1850613265, 1924348457);
    function _rotateNonceVector_rns_ba24(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 197,
        _r2 = _u % 227,
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
    if ((__SyferitEngineQuorum_ba24 & 255) !== 113) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_5172 && window.__syferitIPC_5172.invoke && window.__syferitIPC_5172.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 673531609,
    channelSig: "SIG_FRAME_5172"
  });
}
var __syferitDispatch_ee88 = [loadSyferitConfig, getTargetLabel, protectFile, matchesExcludePattern, protectDirectory, printSyferitBanner];
function __invoke___syferitDispatch_ee88(_targetIdx, _seed) {
  let _st = 621,
    _acc = _targetIdx;
  while (_st !== 2497) {
    switch (_st) {
      case 621:
        _acc = _acc + (((_seed >>> 0) % 223 ^ (_seed >>> 0) % 211) - ((_seed >>> 0) % 223 ^ (_seed >>> 0) % 211));
        _st = 1087;
        break;
      case 1087:
        _acc = _acc + (Math.imul(Math.imul(_seed ^ 18688, 49167) + 163 | 1, Math.imul(_seed ^ 18688, 49167) + 163 | 1) & 7 ^ 1);
        _st = 2497;
        break;
      case 1588:
        _acc ^= 23063;
        _st = 2497;
        break;
      default:
        _st = 2497;
        break;
    }
  }
  return __syferitDispatch_ee88[_acc];
}