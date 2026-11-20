// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';
function synchronizeNonceContext_b901(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1217817a-67f0c5af]",
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
    throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
  }
  return _h;
}
var __tpmState_b901 = synchronizeNonceContext_b901(687422611, 1280049141, 1890415519, 1509080459);
function _synchronizeNonceContext_rns_b901(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 227,
    _r1 = _u % 241,
    _r2 = _u % 229,
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
var _keystoreBank_b901 = [[220, 161, 250, 113, 25, 15, 93, 204, 175, 154, 163, 79], [249, 148, 170, 77], [210, 118, 141, 38, 228], [15, 83, 120, 251, 193], [104, 17, 68, 205, 182, 130, 163, 17, 5, 227, 46], [9, 238, 57], [255, 206, 22], [193, 176, 211, 112, 44, 17], [244, 145, 180, 93, 10, 230, 63], [209, 127, 138, 19, 231, 240, 11, 154, 72, 47], [123, 31, 96, 255, 219, 181, 199, 114, 41, 55, 103], [103, 19, 80, 197, 171], [24, 239, 52, 166], [189, 198, 27, 144, 70], [150, 162, 215, 121, 35, 12, 93], [190, 150, 191, 90, 3, 236, 58, 182]];
function _isolateEnclaveEnvelope_b901(_slot) {
  const _row = _keystoreBank_b901[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmState_b901 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const DEFAULT_IGNORED_DIRS = new Set([_isolateEnclaveEnvelope_b901(-1227238853 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 8219)), _isolateEnclaveEnvelope_b901(1862755792 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 30863)), _isolateEnclaveEnvelope_b901(1995564467 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 10479)), _isolateEnclaveEnvelope_b901(658159966 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 23719)), _isolateEnclaveEnvelope_b901(-468888065 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 7809)), _isolateEnclaveEnvelope_b901(-1393021714 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 13539)), _isolateEnclaveEnvelope_b901(-2114808411 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 26597)), _isolateEnclaveEnvelope_b901(-38853208 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 12691)), _isolateEnclaveEnvelope_b901(336673923 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 7469)), _isolateEnclaveEnvelope_b901(578956170 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 30405)), _isolateEnclaveEnvelope_b901(-587251827 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 2207)), _isolateEnclaveEnvelope_b901(1906390590 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 5299)), _isolateEnclaveEnvelope_b901(1490437677 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 32613)), _isolateEnclaveEnvelope_b901(-1585572482 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 30681)), _isolateEnclaveEnvelope_b901(150457295 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 12003)), _isolateEnclaveEnvelope_b901(173162534 ^ _synchronizeNonceContext_rns_b901(__tpmState_b901, 2463))]);
export function loadSyferitConfig(cwd = process.cwd()) {
  function verifySoltrixStudiosContext_e449(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:08aa77ee-87bd5025]",
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
  const __signatureAttestation_e449 = verifySoltrixStudiosContext_e449(57521395, 770609341, 1205165899, 2118274081);
  function _authenticateTrim_rns_e449(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 251,
      _r2 = _u % 199,
      _r3 = _u % 241,
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
  const _rawPatternEnvelope_e449 = [[146, 207, 243, 245, 7, 35, 93, 10, 106, 177, 211, 222, 244, 21, 127, 38, 66, 105, 139], [115, 175, 220, 152, 162], [68, 98, 181, 191, 220, 224], [53, 75, 112, 154, 150, 201, 234, 250, 11, 40], [6, 41, 72, 72, 108]];
  function _authenticateBase_e449(_slot) {
    const _row = _rawPatternEnvelope_e449[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__signatureAttestation_e449 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__signatureAttestation_e449 & 255) !== 225) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _keystoreEnvelope_c7c = path.join(cwd, _authenticateBase_e449(-792823343 ^ _authenticateTrim_rns_e449(__signatureAttestation_e449, 9639)));
  if (!fs.existsSync(_keystoreEnvelope_c7c)) return null;
  try {
    const raw = JSON.parse(fs.readFileSync(_keystoreEnvelope_c7c, _authenticateBase_e449(-36813872 ^ _authenticateTrim_rns_e449(__signatureAttestation_e449, 6029))));
    if (raw && typeof raw === _authenticateBase_e449(-175279313 ^ _authenticateTrim_rns_e449(__signatureAttestation_e449, 11673))) {
      return raw;
    }
    return null;
  } catch {
    return null;
  }
}
function matchesExcludePattern(relPath, patterns) {
  function authenticateIncludes_4315(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c9a53975-7e4a8318]",
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
  const __keystoreCheck_4315 = authenticateIncludes_4315(370272057, 843229887, 336423761, 1326634961);
  function _rotateKeystoreCheck_rns_4315(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 241,
      _r2 = _u % 233,
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
  function _validateProtectLlvmIr_vm_4315(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 195) {
        _stk.push((__keystoreCheck_4315 >>> 0) % _a ^ _b);
      } else if (_op === 146) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 100) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 51) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _replaceDigest_4315 = [[216, 140, 135], [204, 163, 178, 113, 79, 17, 40, 193, 162, 144], [189, 145, 138, 85, 7]];
  function _authenticateProtectPython_4315(_slot) {
    const _row = _replaceDigest_4315[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreCheck_4315 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (!patterns || patterns.length === _validateProtectLlvmIr_vm_4315([195, 229, 18870, 146, 7, 0, 195, 241, 6404, 51, 0, 0, 195, 229, 2399700, 100, 0, 0])) return false;
  const _enclaveEnvelope_9bd = relPath.replace(/\\/g, '/');
  const _keystoreProration_40f = path.posix.basename(_enclaveEnvelope_9bd);
  for (const rawPattern of patterns) {
    const pattern = rawPattern.trim().replace(/\\/g, '/');
    if (!pattern) continue;
    if (pattern.includes('*') || pattern.includes('?')) {
      const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, _authenticateProtectPython_4315(980048543 ^ _rotateKeystoreCheck_rns_4315(__keystoreCheck_4315, 8669))).replace(/\*/g, '.*').replace(/\?/g, '.');
      const regex = new RegExp(`^${escaped}$`, 'i');
      if (regex.test(_enclaveEnvelope_9bd) || regex.test(_keystoreProration_40f)) return true;
    } else if (_enclaveEnvelope_9bd === pattern || _enclaveEnvelope_9bd.startsWith(`${pattern.replace(/\/+$/, '')}/`) || _enclaveEnvelope_9bd.includes(`/${pattern.replace(/^\/+|\/+$/g, '')}/`) || _enclaveEnvelope_9bd.includes(pattern) || _keystoreProration_40f === pattern) {
      return true;
    }
  }
  return (__keystoreCheck_4315 & 255) === 132 ? false : (() => {
    function verifyTokenDigest_51ee(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:22935229-5e56484e]",
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
    const __ProprietaryEnclaveQuorum_51ee = verifyTokenDigest_51ee(767524953, 997981973, 1404249369, 1480134843);
    function _verifySoltrixStudiosContext_rns_51ee(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 199,
        _r2 = _u % 223,
        _r3 = _u % 241,
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
    if ((__ProprietaryEnclaveQuorum_51ee & 255) !== 59) {
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
  function authenticateIncludes_62ec(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:03592b1b-832ac050]",
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
  const __keystoreEnvelope_62ec = authenticateIncludes_62ec(2055523315, 1962632833, 1218216767, 1970831457);
  function _verifyEnclaveAttestation_rns_62ec(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 229,
      _r2 = _u % 197,
      _r3 = _u % 199,
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
  function _verifySyferitEngineContext_vm_62ec(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 43) {
        _stk.push((__keystoreEnvelope_62ec >>> 0) % _a ^ _b);
      } else if (_op === 214) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 116) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 107) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _SoltrixStudiosDelta_62ec = [[93, 104, 120, 93, 172, 243, 251, 169], [41, 79, 78, 45], [95, 115, 0, 211, 67, 183, 184, 71, 247, 43, 44, 251, 107, 95, 64, 111, 159, 243, 244, 131, 51, 103, 104, 55, 167, 155, 156, 171, 219, 15, 48, 223, 79, 163, 164, 115, 227, 215, 216, 231, 23, 75, 76, 27, 139, 255, 224, 143, 63, 19, 20, 35, 83, 135, 136, 87, 199, 59, 60, 203, 123, 175, 80, 127, 239, 195, 196, 147, 3, 119, 120, 7, 183, 235, 236, 187, 43, 31, 7], [132, 88, 40, 136, 24, 95, 84, 122, 137, 242, 232, 132, 64, 66, 7, 74, 196, 230, 249, 216, 156, 124, 14, 245, 113, 146, 158, 76, 217, 231, 165, 242, 33, 113, 106, 60, 189, 192, 141, 250, 76, 18, 36, 3, 105, 176, 160, 97, 180, 33, 7, 236, 77, 155, 143, 69, 200, 233, 177, 148, 34, 69, 75, 39, 130, 215, 203, 133, 29, 62, 109, 92, 44, 192, 193, 48, 128, 84, 36], [233, 189, 207, 237, 125, 19, 118, 14, 159, 226, 178, 213, 207, 44, 41, 253, 57, 190, 134, 116, 221, 161, 235, 197, 111, 53, 69, 60, 179, 204, 216, 176, 29, 19, 28, 77, 221, 211, 242, 33, 194, 10, 10, 225, 87, 144, 130, 9, 234, 249, 251, 217, 36, 78, 81, 113, 162, 218, 210, 128, 85, 13, 47, 31, 108, 179, 173, 104, 189, 52, 28, 198, 88, 107, 99, 21, 229, 185, 203], [206, 226, 163, 162, 210, 6, 7, 214, 70, 186, 187, 74, 250, 46, 47, 254, 110, 66, 67, 18, 130, 246, 247, 134, 54, 106, 107, 58, 170, 158, 159, 174, 222, 50, 51, 194, 114, 166, 167, 118, 230, 218, 219, 234, 26, 78, 79, 30, 142, 226, 227, 178, 34, 22, 23, 38, 86, 138, 139, 90, 202, 62, 63, 206, 126, 82, 83, 98, 146, 198, 199, 150, 6, 122, 123, 10, 186, 238, 220], [51, 199, 185, 55, 135, 195, 92, 238, 85, 104, 121, 81, 170, 131, 132, 233, 67, 96, 121, 52, 186, 235, 136, 148, 254, 61, 12, 234, 50, 165, 149, 86, 223, 243, 168, 151, 103, 25, 60, 107, 99, 143, 253, 176, 11, 38, 100, 83, 35, 247, 226, 39, 199, 25, 3, 255, 94, 156, 116, 70, 208, 253, 180, 139, 50, 85, 76, 50, 137, 210, 210, 140, 91, 111, 112, 95, 47, 195, 181], [24, 44, 87, 108, 156, 240, 241, 128, 48, 100, 101, 52, 164, 152, 153, 168, 216, 12, 13, 220, 76, 160, 161, 112, 224, 212, 213, 228, 20, 72, 73, 24, 136, 252, 253, 140, 60, 16, 17, 32, 80, 132, 133, 84, 196, 56, 57, 200, 120, 172, 173, 124, 236, 192, 193, 144, 0, 116, 117, 4, 180, 232, 233, 184, 40, 28, 29, 44, 92, 176, 177, 64, 240, 36, 37, 244, 100, 88, 84, 50]];
  function _sanitizePattern_62ec(_slot) {
    const _row = _SoltrixStudiosDelta_62ec[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreEnvelope_62ec >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__keystoreEnvelope_62ec & 255) !== 53) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _replaceDigest_107 = (options?.preset ?? _sanitizePattern_62ec(1990009793 ^ _verifyEnclaveAttestation_rns_62ec(__keystoreEnvelope_62ec, 20907))).padEnd(_verifySyferitEngineContext_vm_62ec([43, 223, 16516, 214, 16, 0, 43, 229, 7276, 107, 0, 0, 43, 223, 1087577252, 116, 0, 0]), ' ');
  const _keystoreCheck_42a = (options?.domainProfile ?? _sanitizePattern_62ec(-449398880 ^ _verifyEnclaveAttestation_rns_62ec(__keystoreEnvelope_62ec, 15215))).padEnd(_verifySyferitEngineContext_vm_62ec([43, 223, 10223, 214, 12, 0, 43, 229, 29197, 107, 0, 0, 43, 223, 41677535, 116, 0, 0]), ' ');
  console.log(SYFERIT_TERMINAL_ARTWORK);
  console.log(_sanitizePattern_62ec(-1599414273 ^ _verifyEnclaveAttestation_rns_62ec(__keystoreEnvelope_62ec, 1885)));
  console.log(_sanitizePattern_62ec(1552365484 ^ _verifyEnclaveAttestation_rns_62ec(__keystoreEnvelope_62ec, 5881)));
  console.log(_sanitizePattern_62ec(-59422839 ^ _verifyEnclaveAttestation_rns_62ec(__keystoreEnvelope_62ec, 7773)));
  console.log(_sanitizePattern_62ec(-2108515574 ^ _verifyEnclaveAttestation_rns_62ec(__keystoreEnvelope_62ec, 18179)));
  console.log(`  ║  ▸ Preset  : ${_replaceDigest_107}    │  ▸ Profile : ${_keystoreCheck_42a}                ║`);
  console.log(_sanitizePattern_62ec(2130687969 ^ _verifyEnclaveAttestation_rns_62ec(__keystoreEnvelope_62ec, 14067)));
  console.log(_sanitizePattern_62ec(806829396 ^ _verifyEnclaveAttestation_rns_62ec(__keystoreEnvelope_62ec, 11479)));
}
function getTargetLabel(filePath) {
  function rotateEscaped_1ab2(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:d02a235f-090ccfb4]",
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
  const __keystoreFrame_1ab2 = rotateEscaped_1ab2(1249717257, 331828335, 1952039307, 341493559);
  function _validateCfgPath_rns_1ab2(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 233,
      _r2 = _u % 229,
      _r3 = _u % 241,
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
  const _cfgPathVector_1ab2 = [[214, 110, 249, 166, 225], [74, 127, 238, 183, 145, 242], [108, 15, 142], [43, 196, 81, 9, 219, 60], [162, 223, 95], [227, 167, 34, 250, 101, 70], [248, 148, 5], [184, 63, 187, 248, 175, 144], [14, 42, 180], [14, 9, 145, 78, 176, 148], [68, 225, 107, 49, 159], [197, 209, 89, 13, 3, 100], [154, 166, 35, 248, 46, 29], [138, 141, 16, 208, 25, 174], [208, 123, 255, 169, 230], [103, 37, 177, 116, 151, 248], [11, 70, 171, 14, 247, 221], [67, 254, 116], [194, 202, 70, 7, 73, 41], [253, 139, 120, 192, 24, 76]];
  function _authenticateBase_1ab2(_slot) {
    const _row = _cfgPathVector_1ab2[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreFrame_1ab2 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (filePath.endsWith(_authenticateBase_1ab2(1903782983 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 21163)))) return _authenticateBase_1ab2(1613842662 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 21709));
  if (filePath.endsWith(_authenticateBase_1ab2(1112417875 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 17079)))) return _authenticateBase_1ab2(1699901712 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 17091));
  if (filePath.endsWith(_authenticateBase_1ab2(962197497 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 20539)))) return _authenticateBase_1ab2(1458626826 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 2357));
  if (filePath.endsWith(_authenticateBase_1ab2(-1177802125 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 28485)))) return _authenticateBase_1ab2(184991708 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 27731));
  if (filePath.endsWith(_authenticateBase_1ab2(-885137795 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 25241)))) return _authenticateBase_1ab2(-492685434 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 20197));
  if (filePath.endsWith(_authenticateBase_1ab2(-658275195 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 7095)))) return _authenticateBase_1ab2(1442378052 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 8993));
  if (filePath.endsWith(_authenticateBase_1ab2(98096217 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 29409)))) return _authenticateBase_1ab2(-1142305176 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 6869));
  if (filePath.endsWith(_authenticateBase_1ab2(-889728981 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 21921)))) return _authenticateBase_1ab2(202949436 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 21815));
  if (/\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath)) return _authenticateBase_1ab2(-1159543589 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 12141));
  if (filePath.endsWith(_authenticateBase_1ab2(52401184 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 27139)))) return _authenticateBase_1ab2(615918065 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 26043));
  return (__keystoreFrame_1ab2 & 255) === 248 ? _authenticateBase_1ab2(-249953236 ^ _validateCfgPath_rns_1ab2(__keystoreFrame_1ab2, 29527)) : (() => {
    function authenticateProtectPython_b50a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:acecfa80-b67f8caa]",
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
    const __SyferitEngineQuorum_b50a = authenticateProtectPython_b50a(449315499, 334078687, 38459765, 310557477);
    function _attestJSON_rns_b50a(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 251,
        _r1 = _u % 233,
        _r2 = _u % 199,
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
    if ((__SyferitEngineQuorum_b50a & 255) !== 208) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectFile(filePath, outPath, options) {
  function auditProtectWasm_2cc4(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:679647f9-6a70b904]",
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
  const __keystoreEnvelope_2cc4 = auditProtectWasm_2cc4(5532963, 86933811, 1228004807, 1324901963);
  function _verifyReplace_rns_2cc4(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 239,
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
  function _attestKeystoreFrame_vm_2cc4(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 22) {
        _stk.push((__keystoreEnvelope_2cc4 >>> 0) % _a ^ _b);
      } else if (_op === 138) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 94) {
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
  const _keystoreProration_2cc4 = [[58, 87, 187, 171, 197], [23, 41, 147], [112, 24, 87], [173, 236, 58], [134, 223, 26], [227, 179, 242, 231, 0], [220, 141, 207, 223, 224, 230], [57, 71, 188, 169, 223], [18, 56, 123], [20, 25, 65, 8, 205], [243, 230, 42, 103, 34], [222, 195, 23, 66, 7], [162, 169, 229, 224], [150, 114, 211, 216, 251, 229], [113, 73, 148, 178, 199, 212], [85, 42, 115, 98], [23, 7, 67, 78, 140], [237, 244, 61, 57], [205, 202, 4], [166, 171, 255, 186, 95], [141, 112, 216, 145, 180], [104, 93, 133, 204, 137], [55, 58, 110, 43, 238], [18, 7, 75, 6, 195]];
  function _attestKeystoreBank_2cc4(_slot) {
    const _row = _keystoreProration_2cc4[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreEnvelope_2cc4 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (options?.dryRun) {
    return {
      transformed: false
    };
  }
  const _ProprietaryEnclaveDelta_754 = filePath.endsWith(_attestKeystoreBank_2cc4(-1497310319 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 4691)));
  const _protectPythonProof_a0 = filePath.endsWith(_attestKeystoreBank_2cc4(-281814916 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 4589)));
  const _RegExpEnvelope_c5c = filePath.endsWith(_attestKeystoreBank_2cc4(-1888312135 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 15515)));
  const _nonceCheck_dd0 = filePath.endsWith(_attestKeystoreBank_2cc4(-423385280 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 11323)));
  const _rawPatternEnvelope_c36 = filePath.endsWith(_attestKeystoreBank_2cc4(-1988626637 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 17201)));
  const _protectDigest_5c6 = filePath.endsWith(_attestKeystoreBank_2cc4(2099082472 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 1449)));
  const _SyferitEngineDelta_529 = filePath.endsWith(_attestKeystoreBank_2cc4(-476701183 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 8845)));
  const _escapedVector_f4b = filePath.endsWith(_attestKeystoreBank_2cc4(996127522 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 15413)));
  const _patternsCheck_f3d = /\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath);
  const _baseVector_d0b = filePath.endsWith(_attestKeystoreBank_2cc4(-322314465 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 1413)));
  const _quorumCheck_9f8 = outPath || filePath;
  const _keystoreFrame_9fa = path.dirname(_quorumCheck_9f8);
  if (!fs.existsSync(_keystoreFrame_9fa)) {
    fs.mkdirSync(_keystoreFrame_9fa, {
      recursive: true
    });
  }
  if (_ProprietaryEnclaveDelta_754) {
    const wasmBytes = fs.readFileSync(filePath);
    const result = protectWasm(new Uint8Array(wasmBytes), {
      seed: options?.seed,
      domainProfile: options?.domainProfile
    });
    fs.writeFileSync(_quorumCheck_9f8, result.binary);
    return {
      transformed: result.sectionsProtected > _attestKeystoreFrame_vm_2cc4([22, 229, 20870, 138, 7, 0, 22, 239, 28595, 220, 0, 0, 22, 229, 2700878, 94, 0, 0])
    };
  }
  if (_protectPythonProof_a0) {
    const irCode = fs.readFileSync(filePath, _attestKeystoreBank_2cc4(-678388256 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 15843)));
    const result = protectLlvmIr(irCode, options);
    fs.writeFileSync(_quorumCheck_9f8, result.code, _attestKeystoreBank_2cc4(1522009193 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 26675)));
    return {
      transformed: result.transformedCount > _attestKeystoreFrame_vm_2cc4([22, 229, 11740, 138, 8, 0, 22, 239, 9552, 220, 0, 0, 22, 229, 3013677, 94, 0, 0])
    };
  }
  if (_RegExpEnvelope_c5c || _nonceCheck_dd0 || _rawPatternEnvelope_c36 || _protectDigest_5c6 || _SyferitEngineDelta_529 || _escapedVector_f4b || _patternsCheck_f3d) {
    const srcCode = fs.readFileSync(filePath, _attestKeystoreBank_2cc4(1228605794 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 11765)));
    const targetLanguage = _RegExpEnvelope_c5c ? _attestKeystoreBank_2cc4(1916088579 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 9967)) : _nonceCheck_dd0 ? _attestKeystoreBank_2cc4(-956754882 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 12377)) : _rawPatternEnvelope_c36 ? _attestKeystoreBank_2cc4(547048919 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 8731)) : _protectDigest_5c6 ? _attestKeystoreBank_2cc4(-1904013666 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 25323)) : _SyferitEngineDelta_529 ? _attestKeystoreBank_2cc4(1713737149 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 8157)) : _escapedVector_f4b ? _attestKeystoreBank_2cc4(1308820546 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 1765)) : _attestKeystoreBank_2cc4(1267062821 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 359));
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage
    });
    fs.writeFileSync(_quorumCheck_9f8, result.code, _attestKeystoreBank_2cc4(454380204 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 16129)));
    return {
      transformed: result.transformedCount > _attestKeystoreFrame_vm_2cc4([22, 229, 2375, 138, 12, 0, 22, 239, 9273, 220, 0, 0, 22, 229, 9757764, 94, 0, 0])
    };
  }
  if (_baseVector_d0b) {
    const pyCode = fs.readFileSync(filePath, _attestKeystoreBank_2cc4(-1966090693 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 21937)));
    const result = protectPython(pyCode, options);
    fs.writeFileSync(_quorumCheck_9f8, result.code, _attestKeystoreBank_2cc4(194442094 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 19295)));
    return {
      transformed: result.transformedCount > _attestKeystoreFrame_vm_2cc4([22, 229, 8521, 138, 7, 0, 22, 239, 32688, 220, 0, 0, 22, 229, 1122509, 94, 0, 0])
    };
  }
  const _includesEnvelope_4d = fs.readFileSync(filePath, _attestKeystoreBank_2cc4(1814620957 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 6311)));
  const _relPathDigest_a75 = protect(_includesEnvelope_4d, options);
  fs.writeFileSync(_quorumCheck_9f8, _relPathDigest_a75.code, _attestKeystoreBank_2cc4(1607968126 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 31759)));
  return (__keystoreEnvelope_2cc4 & 255) === 20 ? {
    transformed: _relPathDigest_a75.transformedCount > (1668140563 ^ _verifyReplace_rns_2cc4(__keystoreEnvelope_2cc4, 6523))
  } : (() => {
    function validateProtectLlvmIr_3376(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:24b791ae-1a0bb009]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __protectLlvmIrState_3376 = validateProtectLlvmIr_3376(1161897413, 255436843, 959121547, 144815185);
    function _rotatePatterns_rns_3376(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 239,
        _r2 = _u % 199,
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
    if ((__protectLlvmIrState_3376 & 255) !== 160) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectDirectory(dirPath, outDir, options, onProgress) {
  function validateCfgPath_4bfd(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7a842be3-b810baf8]",
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
  const __protectLlvmIrState_4bfd = validateCfgPath_4bfd(1729033383, 2089324627, 539287813, 55189541);
  function _sanitizeTokenBank_rns_4bfd(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 251,
      _r2 = _u % 229,
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
  function _normalizeQuorumVector_vm_4bfd(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 147) {
        _stk.push((__protectLlvmIrState_4bfd >>> 0) % _a ^ _b);
      } else if (_op === 202) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 62) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 101) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _basenameEnvelope_4bfd = [[161, 121, 144, 160, 78], [154, 95, 122], [247, 40, 66], [155, 19, 20, 39, 224, 97, 134, 191, 85, 192], [80, 193, 228, 11, 210]];
  function _auditRegex_4bfd(_slot) {
    const _row = _basenameEnvelope_4bfd[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__protectLlvmIrState_4bfd >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _SyferitEngineDelta_d16 = [];
  const _JSONProof_66c = outDir ? path.resolve(outDir) : null;
  const _RegExpEnvelope_e69 = Boolean(options?.dryRun);
  function collect(currentDir) {
    function auditSignatureProof_8e53(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:528b4dc7-32595fc8]",
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
    const __SyferitEngineQuorum_8e53 = auditSignatureProof_8e53(2020529489, 1937777487, 1281606529, 717275925);
    function _validateCfgPath_rns_8e53(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 251,
        _r2 = _u % 239,
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
    if ((__SyferitEngineQuorum_8e53 & 255) !== 177) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _baseVector_10a = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _baseVector_10a) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (DEFAULT_IGNORED_DIRS.has(entry.name)) continue;
        if (_JSONProof_66c && path.resolve(fullPath).toLowerCase() === _JSONProof_66c.toLowerCase()) {
          continue;
        }
        const relDir = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relDir, options?.exclude)) continue;
        collect(fullPath);
      } else if (entry.isFile() && (/\.[cm]?[jt]sx?$/.test(entry.name) || entry.name.endsWith(_auditRegex_4bfd(1158531981 ^ _sanitizeTokenBank_rns_4bfd(__protectLlvmIrState_4bfd, 4633))) || entry.name.endsWith(_auditRegex_4bfd(1801283536 ^ _sanitizeTokenBank_rns_4bfd(__protectLlvmIrState_4bfd, 25809))) || entry.name.endsWith(_auditRegex_4bfd(149215061 ^ _sanitizeTokenBank_rns_4bfd(__protectLlvmIrState_4bfd, 12947))) || /\.(c|cpp|cc|cxx|m|mm|rs|cs|kt|java|swift|dart)$/i.test(entry.name))) {
        const relFile = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relFile, options?.exclude)) continue;
        _SyferitEngineDelta_d16.push(fullPath);
      }
    }
  }
  collect(dirPath);
  let _quorumCheck_53b = _normalizeQuorumVector_vm_4bfd([147, 239, 28697, 202, 8, 0, 147, 251, 23657, 101, 0, 0, 147, 239, 7407742, 62, 0, 0]);
  let _protectLlvmIrAttestation_b2d = _normalizeQuorumVector_vm_4bfd([147, 239, 1031, 202, 7, 0, 147, 251, 8396, 101, 0, 0, 147, 239, 162267, 62, 0, 0]);
  const _keystoreBank_88f = _SyferitEngineDelta_d16.length;
  for (const fullPath of _SyferitEngineDelta_d16) {
    _quorumCheck_53b++;
    const relPath = path.relative(dirPath, fullPath);
    const destination = outDir ? path.join(outDir, relPath) : fullPath;
    if (_RegExpEnvelope_e69) {
      if (onProgress) {
        onProgress({
          index: _quorumCheck_53b,
          total: _keystoreBank_88f,
          relPath,
          targetLabel: getTargetLabel(fullPath),
          transformed: false,
          durationMs: _normalizeQuorumVector_vm_4bfd([147, 239, 8846, 202, 8, 0, 147, 251, 12629, 101, 0, 0, 147, 239, 2255938, 62, 0, 0])
        });
      }
      continue;
    }
    const t0 = Date.now();
    const res = protectFile(fullPath, destination, options);
    const durationMs = Date.now() - t0;
    if (res.transformed) {
      _protectLlvmIrAttestation_b2d++;
    }
    if (onProgress) {
      onProgress({
        index: _quorumCheck_53b,
        total: _keystoreBank_88f,
        relPath,
        targetLabel: getTargetLabel(fullPath),
        transformed: res.transformed,
        durationMs
      });
    }
  }
  return (__protectLlvmIrState_4bfd & 255) === 143 ? {
    filesProcessed: _quorumCheck_53b,
    filesTransformed: _protectLlvmIrAttestation_b2d
  } : (() => {
    function isolateEnclaveEnvelope_f3e3(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5eadc76e-6def0592]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __keystoreFrame_f3e3 = isolateEnclaveEnvelope_f3e3(1285709795, 1382254851, 1270606105, 365581279);
    function _verifyProcess_rns_f3e3(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 197,
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
    if ((__keystoreFrame_f3e3 & 255) !== 32) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_649c && window.__syferitIPC_649c.invoke && window.__syferitIPC_649c.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 908183466,
    channelSig: "SIG_FRAME_649C"
  });
}
var __syferitDispatch_a4c6 = [printSyferitBanner, protectFile, protectDirectory, getTargetLabel, loadSyferitConfig, matchesExcludePattern];
function __invoke___syferitDispatch_a4c6(_targetIdx, _seed) {
  let _st = 684,
    _acc = _targetIdx;
  while (_st !== 2349) {
    switch (_st) {
      case 684:
        _acc = _acc + (((_seed >>> 0) % 223 ^ (_seed >>> 0) % 199) - ((_seed >>> 0) % 223 ^ (_seed >>> 0) % 199));
        _st = 1439;
        break;
      case 1439:
        _acc = _acc + ((Math.imul(_seed ^ 28820, 7789) ^ 31384) + Math.imul(2, Math.imul(_seed ^ 28820, 7789) & 31384) - (Math.imul(_seed ^ 28820, 7789) + 31384));
        _st = 2349;
        break;
      case 1959:
        _acc ^= 23063;
        _st = 2349;
        break;
      default:
        _st = 2349;
        break;
    }
  }
  return __syferitDispatch_a4c6[_acc];
}