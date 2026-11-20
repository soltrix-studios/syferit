// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import * as sea from 'node:sea';
function attestLMaj_2ae7(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c698065b-86c98d15]",
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
    throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
  }
  return _h;
}
var __currentVersionState_2ae7 = attestLMaj_2ae7(1028207439, 807416651, 1878174155, 102572947);
function _auditLine1_rns_2ae7(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 223,
    _r1 = _u % 239,
    _r2 = _u % 211,
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
var _FETCH_TIMEOUT_MSAttestation_2ae7 = [[125, 232, 9, 144, 211], [7, 132, 50, 151, 122, 22, 138, 90, 239, 103, 243, 111, 89, 200, 105, 176, 183, 66, 200, 86, 42, 166, 54], [217, 99, 250, 110, 72, 214, 126, 232, 238, 91, 199, 89]];
function _auditTokenProof_2ae7(_slot) {
  const _row = _FETCH_TIMEOUT_MSAttestation_2ae7[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__currentVersionState_2ae7 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const SYFERIT_VERSION = _auditTokenProof_2ae7(-855328379 ^ _auditLine1_rns_2ae7(__currentVersionState_2ae7, 3743));
const GITHUB_REPO = _auditTokenProof_2ae7(485685534 ^ _auditLine1_rns_2ae7(__currentVersionState_2ae7, 14927));
const NPM_PACKAGE = _auditTokenProof_2ae7(773982911 ^ _auditLine1_rns_2ae7(__currentVersionState_2ae7, 2863));
const CHECK_INTERVAL_MS = (-514497251 ^ _auditLine1_rns_2ae7(__currentVersionState_2ae7, 10025)) * (1599812355 ^ _auditLine1_rns_2ae7(__currentVersionState_2ae7, 20385)) * (1269507515 ^ _auditLine1_rns_2ae7(__currentVersionState_2ae7, 27929)) * (-304931087 ^ _auditLine1_rns_2ae7(__currentVersionState_2ae7, 19855));
const FETCH_TIMEOUT_MS = -1762707955 ^ _auditLine1_rns_2ae7(__currentVersionState_2ae7, 25271);
function getCacheFilePath() {
  function validateKeystoreProof_4c4(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f96477a9-cabd9f3e]",
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
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __trimState_4c4 = validateKeystoreProof_4c4(1391541985, 74438867, 1712497093, 1876063205);
  function _rotateCMaj_rns_4c4(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 233,
      _r2 = _u % 211,
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
  const _FETCH_TIMEOUT_MSAttestation_4c4 = [[121, 134, 43, 230, 142, 251, 143, 96], [9, 106, 19, 196, 100, 203, 38, 90, 204, 39, 252, 166, 22, 188, 64, 14, 162], [196, 81, 232, 175, 71, 163, 66, 55, 186, 2], [181, 7, 160, 131, 63]];
  function _reconcileKeystoreQuorum_4c4(_slot) {
    const _row = _FETCH_TIMEOUT_MSAttestation_4c4[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__trimState_4c4 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__trimState_4c4 & 255) === 87 ? path.join(os.homedir(), _reconcileKeystoreQuorum_4c4(-19243775 ^ _rotateCMaj_rns_4c4(__trimState_4c4, 22153)), _reconcileKeystoreQuorum_4c4(44833874 ^ _rotateCMaj_rns_4c4(__trimState_4c4, 23031))) : (() => {
    function sanitizeEnclaveFrame_4e4f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:39db4020-3d6b7183]",
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
    const __tokenVector_4e4f = sanitizeEnclaveFrame_4e4f(1755852445, 1493795945, 763051909, 1411762713);
    function _auditTokenDigest_rns_4e4f(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 227,
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
    if ((__tokenVector_4e4f & 255) !== 61) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isNewerVersion(latest, current) {
  function authenticateNonceDigest_3477(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1d27cf2f-a0e694f4]",
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
  const __pathState_3477 = authenticateNonceDigest_3477(1315356839, 2013599273, 1532218433, 1119353193);
  function _attestLMin_rns_3477(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 211,
      _r2 = _u % 197,
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
  function _auditNPM_PACKAGE_vm_3477(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 62) {
        _stk.push((__pathState_3477 >>> 0) % _a ^ _b);
      } else if (_op === 110) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 157) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 210) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _keystoreProration_3477 = [[214, 184, 239, 242, 74], [110, 213, 112, 100, 237, 63, 234, 252, 64, 134], [67, 131, 72, 74, 161]];
  function _rotateCMaj_3477(_slot) {
    const _row = _keystoreProration_3477[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__pathState_3477 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _keystoreProof_3c6 = v => {
    function attestLMin_a0b2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:01f18cb6-208fd484]",
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
    const __lPatState_a0b2 = attestLMin_a0b2(1845829479, 456009487, 1192826139, 1776546907);
    function _isolateFormatUpdateNotice_rns_a0b2(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 199,
        _r2 = _u % 251,
        _r3 = _u % 211,
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
    const _partsEnvelope_c35 = v.trim().replace(/^v/i, '').split('-')[_auditNPM_PACKAGE_vm_3477([62, 233, 579, 110, 12, 0, 62, 211, 28225, 210, 0, 0, 62, 233, 2125356, 157, 0, 0])] || _rotateCMaj_3477(2080852983 ^ _attestLMin_rns_3477(__pathState_3477, 11645));
    const _currentVersionBank_c79 = _partsEnvelope_c35.split('.').map(n => parseInt(n, _auditNPM_PACKAGE_vm_3477([62, 233, 8171, 110, 16, 0, 62, 211, 17450, 210, 0, 0, 62, 233, 531121229, 157, 0, 0])) || _auditNPM_PACKAGE_vm_3477([62, 233, 612, 110, 16, 0, 62, 211, 31707, 210, 0, 0, 62, 233, 36142006, 157, 0, 0]));
    return (__lPatState_a0b2 & 255) === 254 ? [_currentVersionBank_c79[_auditNPM_PACKAGE_vm_3477([62, 233, 23571, 110, 8, 0, 62, 211, 13977, 210, 0, 0, 62, 233, 6063860, 157, 0, 0])] ?? 994746767 ^ _attestLMin_rns_3477(__pathState_3477, 25551), _currentVersionBank_c79[1552678802 ^ _attestLMin_rns_3477(__pathState_3477, 6325)] ?? 1115539653 ^ _attestLMin_rns_3477(__pathState_3477, 17141), _currentVersionBank_c79[1808259613 ^ _attestLMin_rns_3477(__pathState_3477, 8165)] ?? -1329111297 ^ _attestLMin_rns_3477(__pathState_3477, 20585)] : (() => {
      function reconcileKeystoreQuorum_aa1c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a2649619-ffe3bee7]",
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
      const __certificateAttestation_aa1c = reconcileKeystoreQuorum_aa1c(250007805, 1555416035, 411043293, 1587915671);
      function _verifySyferitEngineContext_rns_aa1c(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 197,
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
      if ((__certificateAttestation_aa1c & 255) !== 245) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  };
  const [_cMajAttestation_f7c, _SoltrixStudiosDelta_90a, _tpmAttestation_9e3] = _keystoreProof_3c6(latest);
  const [_signatureVector_1a4, _certificateFrame_79a, _pathAttestation_d00] = _keystoreProof_3c6(current);
  if (_cMajAttestation_f7c !== _signatureVector_1a4) return _cMajAttestation_f7c > _signatureVector_1a4;
  if (_SoltrixStudiosDelta_90a !== _certificateFrame_79a) return _SoltrixStudiosDelta_90a > _certificateFrame_79a;
  return (__pathState_3477 & 255) === 230 ? _tpmAttestation_9e3 > _pathAttestation_d00 : (() => {
    function authenticateFETCH_TIMEOUT_MS_17c6(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5d216738-d7516a25]",
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
    const __lPatState_17c6 = authenticateFETCH_TIMEOUT_MS_17c6(1089308687, 148706191, 1629044491, 736366689);
    function _authenticateTokenDigest_rns_17c6(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 223,
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
    if ((__lPatState_17c6 & 255) !== 214) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function formatUpdateNotice(currentVersion, latestVersion) {
  function authenticateNonceDigest_f57e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9c111196-9bdc1651]",
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
  const __cMinState_f57e = authenticateNonceDigest_f57e(759727175, 1475627035, 1149609723, 1424146577);
  function _auditLPat_rns_f57e(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 199,
      _r2 = _u % 227,
      _r3 = _u % 239,
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
  function _authenticateTokenDigest_vm_f57e(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 37) {
        _stk.push((__cMinState_f57e >>> 0) % _a ^ _b);
      } else if (_op === 158) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 108) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 201) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _latestVersionAttestation_688 = `  ⬆  Update available: v${currentVersion} → v${latestVersion}`;
  const _currentDigest_b28 = `     Run \`syferit upgrade\` to update seamlessly.`;
  const _nonceDigest_ffa = _authenticateTokenDigest_vm_f57e([37, 233, 10606, 158, 8, 0, 37, 199, 6325, 201, 0, 0, 37, 233, 2757398, 108, 0, 0]);
  const _enclaveBank_a5d = s => s.padEnd(_nonceDigest_ffa, ' ');
  return (__cMinState_f57e & 255) === 180 ? [`  ╭${'─'.repeat(_nonceDigest_ffa)}╮`, `  │${_enclaveBank_a5d(_latestVersionAttestation_688)}│`, `  │${_enclaveBank_a5d(_currentDigest_b28)}│`, `  ╰${'─'.repeat(_nonceDigest_ffa)}╯`].join('\n') : (() => {
    function sanitizeSYFERIT_VERSION_38fb(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2241912a-3a78fe77]",
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
    const __homedirState_38fb = sanitizeSYFERIT_VERSION_38fb(1930869825, 1107141431, 1937927159, 1974277121);
    function _verifyEnclaveAttestation_rns_38fb(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 227,
        _r2 = _u % 197,
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
    if ((__homedirState_38fb & 255) !== 102) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
function readCache() {
  function verifyParts_4d43(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:6a1c340e-c8b72ea2]",
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
  const __enclaveFrame_4d43 = verifyParts_4d43(1931911599, 656204925, 1478068735, 1952305683);
  function _authenticateFETCH_TIMEOUT_MS_rns_4d43(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 211,
      _r2 = _u % 239,
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
  const _nonceScalar_4d43 = [[169, 86, 120, 148, 72], [111, 50, 46, 188, 240, 169], [85, 24, 26, 106, 212, 103], [46, 255, 249, 77, 173, 85, 83, 213, 0, 220], [3, 213, 211, 33, 97]];
  function _authenticateIsNewerVersion_4d43(_slot) {
    const _row = _nonceScalar_4d43[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveFrame_4d43 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__enclaveFrame_4d43 & 255) !== 220) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    const file = getCacheFilePath();
    if (!fs.existsSync(file)) return null;
    const data = JSON.parse(fs.readFileSync(file, _authenticateIsNewerVersion_4d43(182670099 ^ _authenticateFETCH_TIMEOUT_MS_rns_4d43(__enclaveFrame_4d43, 4789))));
    if (typeof data?.lastChecked === _authenticateIsNewerVersion_4d43(996015976 ^ _authenticateFETCH_TIMEOUT_MS_rns_4d43(__enclaveFrame_4d43, 24035)) && typeof data?.latestVersion === _authenticateIsNewerVersion_4d43(-544941875 ^ _authenticateFETCH_TIMEOUT_MS_rns_4d43(__enclaveFrame_4d43, 27129))) {
      return data;
    }
    return null;
  } catch {
    return null;
  }
}
function writeCache(cache) {
  function validateSignatureVector_cbd6(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b350feb4-66a92d42]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __latestVersionState_cbd6 = validateSignatureVector_cbd6(1884475151, 139698169, 1688828227, 834616499);
  function _isolateCurrentVersion_rns_cbd6(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 199,
      _r2 = _u % 197,
      _r3 = _u % 251,
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
  function _attestParse_vm_cbd6(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 29) {
        _stk.push((__latestVersionState_cbd6 >>> 0) % _a ^ _b);
      } else if (_op === 95) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 118) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 182) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _enclaveReg_cbd6 = [[155, 234, 241, 98, 186], [118, 173, 200, 17, 213, 39, 34, 97, 72, 142], [75, 139, 128, 245, 169]];
  function _isolateCurrentVersion_cbd6(_slot) {
    const _row = _enclaveReg_cbd6[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__latestVersionState_cbd6 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__latestVersionState_cbd6 & 255) !== 238) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    const file = getCacheFilePath();
    fs.mkdirSync(path.dirname(file), {
      recursive: true
    });
    fs.writeFileSync(file, JSON.stringify(cache, null, _attestParse_vm_cbd6([29, 223, 21054, 95, 12, 0, 29, 199, 3539, 182, 0, 0, 29, 223, 86113707, 118, 0, 0])), _isolateCurrentVersion_cbd6(-656952867 ^ _isolateCurrentVersion_rns_cbd6(__latestVersionState_cbd6, 31603)));
  } catch {}
}
async function fetchJsonWithTimeout(url, timeoutMs = FETCH_TIMEOUT_MS) {
  function attestTokenVector_986b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6e6c7ffb-20f2c962]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __spawnSyncState_986b = attestTokenVector_986b(80751283, 987276531, 1094177315, 1488299437);
  function _attestCertificateAttestation_rns_986b(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 197,
      _r2 = _u % 239,
      _r3 = _u % 211,
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
  const _tokenEnvelope_986b = [[99, 20, 96, 200, 251, 99, 197, 94, 72], [79, 213, 85, 223, 201, 93, 160, 62], [61, 166, 1, 141, 135], [18, 154, 245, 106, 110, 29, 120, 238, 242, 125, 195, 1, 89, 200, 37, 236, 164, 83, 161, 62, 34, 172, 66, 128, 152, 13, 147], [253, 97, 222, 78, 94, 211, 76, 214, 179, 82], [206, 87, 174, 60, 52]];
  function _auditSpawnSync_986b(_slot) {
    const _row = _tokenEnvelope_986b[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__spawnSyncState_986b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__spawnSyncState_986b & 255) !== 4) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _certificateAttestation_d02 = new AbortController();
  const _tokenEnvelope_203 = setTimeout(() => _certificateAttestation_d02.abort(), timeoutMs);
  if (typeof _tokenEnvelope_203.unref === _auditSpawnSync_986b(2028115737 ^ _attestCertificateAttestation_rns_986b(__spawnSyncState_986b, 16719)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 124 | 1, ((url.seats || url | 0) | 0) ^ 124 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 124 | 1, ((url.seats || url | 0) | 0) ^ 124 | 1)) & 15 ^ _attestCertificateAttestation_rns_986b(__spawnSyncState_986b, 31657) & 255) === 218) _tokenEnvelope_203.unref();else if (typeof _tokenEnvelope_203.unref === _auditSpawnSync_986b(-234789570 ^ _attestCertificateAttestation_rns_986b(__spawnSyncState_986b, 20581)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 24 | 1, ((url.seats || url | 0) | 0) ^ 24 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 24 | 1, ((url.seats || url | 0) | 0) ^ 24 | 1)) & 15 ^ _attestCertificateAttestation_rns_986b(__spawnSyncState_986b, 5369) & 255) === 198) _tokenEnvelope_203.unref();else if (typeof _tokenEnvelope_203.unref === _auditSpawnSync_986b(1295012345 ^ _attestCertificateAttestation_rns_986b(__spawnSyncState_986b, 21459)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 81 | 1, ((url.seats || url | 0) | 0) ^ 81 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 81 | 1, ((url.seats || url | 0) | 0) ^ 81 | 1)) & 15 ^ _attestCertificateAttestation_rns_986b(__spawnSyncState_986b, 18007) & 255) === 124) _tokenEnvelope_203.unref();
  try {
    const res = await fetch(url, {
      signal: _certificateAttestation_d02.signal,
      headers: {
        'User-Agent': `syferit-cli/${SYFERIT_VERSION}`,
        'Accept': _auditSpawnSync_986b(-184360674 ^ _attestCertificateAttestation_rns_986b(__spawnSyncState_986b, 19037))
      }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(_tokenEnvelope_203);
  }
}
export async function fetchLatestRelease(timeoutMs = FETCH_TIMEOUT_MS) {
  function validatePath_f1d6(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fb6759fc-2e7ef366]",
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
  const __nonceContext_f1d6 = validatePath_f1d6(931386671, 1458840637, 653551679, 1560833505);
  function _verifySoltrixStudiosContext_rns_f1d6(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 251,
      _r2 = _u % 239,
      _r3 = _u % 223,
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
  const _certificateFrame_f1d6 = [[225, 61, 144, 230, 72, 186], [208, 7, 115, 220, 62, 96], [175, 231, 94, 176, 30, 64], [111, 200, 60], [67, 179, 2, 70, 200, 1, 120, 222, 61, 96], [56, 97, 250, 36, 186]];
  function _isolateFormatUpdateNotice_f1d6(_slot) {
    const _row = _certificateFrame_f1d6[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceContext_f1d6 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _tokenVector_dfc = await fetchJsonWithTimeout(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, timeoutMs);
  if (_tokenVector_dfc && typeof _tokenVector_dfc.tag_name === _isolateFormatUpdateNotice_f1d6(-917704977 ^ _verifySoltrixStudiosContext_rns_f1d6(__nonceContext_f1d6, 25935))) {
    const version = _tokenVector_dfc.tag_name.replace(/^v/i, '');
    const assets = Array.isArray(_tokenVector_dfc.assets) ? _tokenVector_dfc.assets.map(a => ({
      name: String(a.name ?? ''),
      browser_download_url: String(a.browser_download_url ?? '')
    })) : [];
    return {
      version,
      releaseUrl: String(_tokenVector_dfc.html_url || `https://github.com/${GITHUB_REPO}/releases/latest`),
      assets,
      source: _isolateFormatUpdateNotice_f1d6(-181090876 ^ _verifySoltrixStudiosContext_rns_f1d6(__nonceContext_f1d6, 24121))
    };
  }
  const _latestVersionAttestation_4bb = await fetchJsonWithTimeout(`https://registry.npmjs.org/${NPM_PACKAGE}/latest`, timeoutMs);
  if (_latestVersionAttestation_4bb && typeof _latestVersionAttestation_4bb.version === _isolateFormatUpdateNotice_f1d6(290646173 ^ _verifySoltrixStudiosContext_rns_f1d6(__nonceContext_f1d6, 2187))) {
    return {
      version: _latestVersionAttestation_4bb.version,
      releaseUrl: `https://github.com/${GITHUB_REPO}/releases`,
      assets: [],
      source: _isolateFormatUpdateNotice_f1d6(-1065990630 ^ _verifySoltrixStudiosContext_rns_f1d6(__nonceContext_f1d6, 31089))
    };
  }
  return (__nonceContext_f1d6 & 255) === 146 ? null : (() => {
    function isolateSplit_e8b9(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1465d5ec-f9b2e9d5]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __signatureVector_e8b9 = isolateSplit_e8b9(1540707859, 1451335537, 69321839, 1262416973);
    function _verifyParts_rns_e8b9(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 199,
        _r2 = _u % 241,
        _r3 = _u % 233,
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
    if ((__signatureVector_e8b9 & 255) !== 7) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function notifyIfUpdateAvailable(quiet = false) {
  function verifySoltrixStudiosContext_1f8a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:5880bbff-d2d3ab02]",
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
  const __enclaveBank_1f8a = verifySoltrixStudiosContext_1f8a(1853761945, 1515653447, 693550541, 1791944197);
  function _auditTokenDigest_rns_1f8a(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 199,
      _r2 = _u % 211,
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
  const _tpmCheck_1f8a = [[187, 39, 188, 178, 46, 91, 218, 212, 94, 233, 125, 74, 244, 126, 247, 231, 125, 145, 9, 15, 137, 33, 149], [121, 209, 106, 121], [87, 166, 48, 36, 180, 44, 170, 188, 41, 149], [36, 142, 8, 10, 142]];
  function _isolateGetCacheFilePath_1f8a(_slot) {
    const _row = _tpmCheck_1f8a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveBank_1f8a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__enclaveBank_1f8a & 255) !== 232) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (quiet) return;
  if (process.env[_isolateGetCacheFilePath_1f8a(583252039 ^ _auditTokenDigest_rns_1f8a(__enclaveBank_1f8a, 21491))] === '1' || process.env['CI'] === _isolateGetCacheFilePath_1f8a(-903562212 ^ _auditTokenDigest_rns_1f8a(__enclaveBank_1f8a, 3827))) {
    return;
  }
  const _SyferitEngineDelta_200 = readCache();
  if (_SyferitEngineDelta_200 && isNewerVersion(_SyferitEngineDelta_200.latestVersion, SYFERIT_VERSION)) {
    console.log(formatUpdateNotice(SYFERIT_VERSION, _SyferitEngineDelta_200.latestVersion) + '\n');
  }
  const _lPatEnvelope_c4a = Date.now();
  if (!_SyferitEngineDelta_200 || _lPatEnvelope_c4a - _SyferitEngineDelta_200.lastChecked >= CHECK_INTERVAL_MS) {
    void fetchLatestRelease(FETCH_TIMEOUT_MS).then(info => {
      function auditParseInt_e93d(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:4aded5cb-84d139ac]",
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
      const __tpmCheck_e93d = auditParseInt_e93d(2071370381, 1640337895, 190736831, 398960133);
      function _verifySyferitEngineContext_rns_e93d(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 233,
          _r1 = _u % 229,
          _r2 = _u % 199,
          _r3 = _u % 197,
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
      if ((__tpmCheck_e93d & 255) !== 221) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (info) {
        writeCache({
          lastChecked: Date.now(),
          latestVersion: info.version,
          releaseUrl: info.releaseUrl
        });
      }
    }).catch(() => {});
  }
}
export function isSeaBinary() {
  function sanitizeCMin_c86e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a292cf1f-a77cb790]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __cMajState_c86e = sanitizeCMin_c86e(1428867151, 400868527, 788318593, 360446869);
  function _attestLatest_rns_c86e(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 223,
      _r2 = _u % 239,
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
  const _tokenProof_c86e = [[241, 245, 57, 50, 9, 93, 148, 138], [161, 209, 246, 25, 42, 35, 100, 121, 159, 130], [154, 135, 198, 205, 24]];
  function _auditTokenProof_c86e(_slot) {
    const _row = _tokenProof_c86e[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cMajState_c86e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__cMajState_c86e & 255) !== 159) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    return Boolean(sea?.isSea?.());
  } catch {
    try {
      const builtinSea = process.getBuiltinModule?.(_auditTokenProof_c86e(-2122283377 ^ _attestLatest_rns_c86e(__cMajState_c86e, 8495)));
      return Boolean(builtinSea?.isSea?.());
    } catch {
      return false;
    }
  }
}
export function getPlatformAssetName(platform = process.platform, arch = process.arch) {
  function isolateHomedir_efc(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2a78dd55-bea5cce1]",
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
  const __joinState_efc = isolateHomedir_efc(503791263, 1174741357, 1775223597, 1359397359);
  function _validateCPat_rns_efc(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 223,
      _r2 = _u % 199,
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
  const _tokenEnvelope_efc = [[135, 245, 39, 68, 4, 95, 149, 220, 121, 166], [116, 185, 30, 35, 233, 61, 120, 244, 74, 144, 197], [91, 140, 243, 88, 242], [34, 115, 164, 245, 151, 247, 34, 10, 28, 74, 143], [5, 76, 134, 217, 111], [232, 45, 106, 191, 93, 129, 212, 64, 166, 4, 81], [167, 22, 71, 160, 55, 97, 170, 230, 140], [150, 231, 48, 65, 11, 91, 158, 149, 97, 175, 16, 57, 217, 119, 106, 214, 1], [102, 170, 21, 60, 230], [92, 145, 198, 11, 177, 21, 64, 47, 59, 121, 166, 227, 147, 137, 36, 28, 75], [55, 98, 168, 227, 132, 200, 56, 73, 31, 80, 178, 203, 98, 166], [10, 75, 140, 221, 127, 175, 10, 97, 205, 51, 124, 149, 77, 195, 222, 66, 253], [251, 57, 123, 184, 64, 155, 209, 24, 181, 26], [162, 14, 89, 52, 99], [155, 216, 63, 66, 14, 92, 153, 150, 125, 168, 226, 32, 215, 112, 116, 145, 85, 199, 157], [126, 191, 24, 41, 211, 51, 102, 205, 88, 143, 197, 27, 186, 175, 66, 62, 105], [86, 138, 209, 6, 175, 17], [54, 98, 165, 160, 223], [15, 76, 139, 222, 98, 160, 245, 98, 201, 60, 118, 140, 75, 220, 200, 5, 161, 179, 9], [210, 35, 116, 133, 71, 135, 210, 89, 164, 227, 89, 103, 46, 59, 182, 170, 197], [181, 28, 86, 105, 63], [138, 214, 49, 28, 75], [99, 176, 231, 42, 214, 52, 97, 206, 85, 144, 202, 24, 191, 168, 92, 121, 13, 47, 229], [70, 151, 192, 17, 187, 235, 78, 37, 48, 119, 173, 243, 130, 135, 26, 6, 177], [41, 106, 173, 252, 156, 206, 43]];
  function _synchronizeNonceContext_efc(_slot) {
    const _row = _tokenEnvelope_efc[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__joinState_efc >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (platform === _synchronizeNonceContext_efc(1344249951 ^ _validateCPat_rns_efc(__joinState_efc, 20955)) && (Math.imul(Math.imul((503791263 | 0) ^ 31 | 1, (503791263 | 0) ^ 31 | 1), Math.imul((503791263 | 0) ^ 31 | 1, (503791263 | 0) ^ 31 | 1)) & 15 ^ _validateCPat_rns_efc(__joinState_efc, 3085) & 255) === 104) return _synchronizeNonceContext_efc(-1846100256 ^ _validateCPat_rns_efc(__joinState_efc, 28551));else if (platform === _synchronizeNonceContext_efc(1595368905 ^ _validateCPat_rns_efc(__joinState_efc, 31113)) && (Math.imul(Math.imul((503791263 | 0) ^ 33 | 1, (503791263 | 0) ^ 33 | 1), Math.imul((503791263 | 0) ^ 33 | 1, (503791263 | 0) ^ 33 | 1)) & 15 ^ _validateCPat_rns_efc(__joinState_efc, 4049) & 255) === 166) return _synchronizeNonceContext_efc(-2015757128 ^ _validateCPat_rns_efc(__joinState_efc, 12277));else if (platform === _synchronizeNonceContext_efc(227189191 ^ _validateCPat_rns_efc(__joinState_efc, 21957)) && (Math.imul(Math.imul((503791263 | 0) ^ 73 | 1, (503791263 | 0) ^ 73 | 1), Math.imul((503791263 | 0) ^ 73 | 1, (503791263 | 0) ^ 73 | 1)) & 15 ^ _validateCPat_rns_efc(__joinState_efc, 15413) & 255) === 12) return _synchronizeNonceContext_efc(1815600950 ^ _validateCPat_rns_efc(__joinState_efc, 13327));
  if (platform === _synchronizeNonceContext_efc(-1942876687 ^ _validateCPat_rns_efc(__joinState_efc, 11569)) && (Math.imul(Math.imul((503791263 | 0) ^ 75 | 1, (503791263 | 0) ^ 75 | 1), Math.imul((503791263 | 0) ^ 75 | 1, (503791263 | 0) ^ 75 | 1)) & 15 ^ _validateCPat_rns_efc(__joinState_efc, 25747) & 255) === 92) return _synchronizeNonceContext_efc(182034576 ^ _validateCPat_rns_efc(__joinState_efc, 18889));else if (platform === _synchronizeNonceContext_efc(1502253853 ^ _validateCPat_rns_efc(__joinState_efc, 2249)) && (Math.imul(Math.imul((503791263 | 0) ^ 22 | 1, (503791263 | 0) ^ 22 | 1), Math.imul((503791263 | 0) ^ 22 | 1, (503791263 | 0) ^ 22 | 1)) & 15 ^ _validateCPat_rns_efc(__joinState_efc, 15093) & 255) === 4) return _synchronizeNonceContext_efc(1962015006 ^ _validateCPat_rns_efc(__joinState_efc, 13223));else if (platform === _synchronizeNonceContext_efc(726754289 ^ _validateCPat_rns_efc(__joinState_efc, 27497)) && (Math.imul(Math.imul((503791263 | 0) ^ 52 | 1, (503791263 | 0) ^ 52 | 1), Math.imul((503791263 | 0) ^ 52 | 1, (503791263 | 0) ^ 52 | 1)) & 15 ^ _validateCPat_rns_efc(__joinState_efc, 23179) & 255) === 182) return _synchronizeNonceContext_efc(329470374 ^ _validateCPat_rns_efc(__joinState_efc, 18033));
  if (platform === _synchronizeNonceContext_efc(-1181320295 ^ _validateCPat_rns_efc(__joinState_efc, 16171)) && (Math.imul(Math.imul((503791263 | 0) ^ 36 | 1, (503791263 | 0) ^ 36 | 1), Math.imul((503791263 | 0) ^ 36 | 1, (503791263 | 0) ^ 36 | 1)) & 15 ^ _validateCPat_rns_efc(__joinState_efc, 18539) & 255) === 180) {
    return arch === _synchronizeNonceContext_efc(-897754542 ^ _validateCPat_rns_efc(__joinState_efc, 1515)) ? _synchronizeNonceContext_efc(698114817 ^ _validateCPat_rns_efc(__joinState_efc, 8837)) : _synchronizeNonceContext_efc(1749139324 ^ _validateCPat_rns_efc(__joinState_efc, 17287));
  } else if (platform === _synchronizeNonceContext_efc(-651756527 ^ _validateCPat_rns_efc(__joinState_efc, 31531)) && (Math.imul(Math.imul((503791263 | 0) ^ 58 | 1, (503791263 | 0) ^ 58 | 1), Math.imul((503791263 | 0) ^ 58 | 1, (503791263 | 0) ^ 58 | 1)) & 15 ^ _validateCPat_rns_efc(__joinState_efc, 11405) & 255) === 204) {
    return arch === _synchronizeNonceContext_efc(-662725932 ^ _validateCPat_rns_efc(__joinState_efc, 29743)) ? _synchronizeNonceContext_efc(-1516166359 ^ _validateCPat_rns_efc(__joinState_efc, 25591)) : _synchronizeNonceContext_efc(1101357066 ^ _validateCPat_rns_efc(__joinState_efc, 32067));
  } else if (platform === _synchronizeNonceContext_efc(1570272009 ^ _validateCPat_rns_efc(__joinState_efc, 22323)) && (Math.imul(Math.imul((503791263 | 0) ^ 78 | 1, (503791263 | 0) ^ 78 | 1), Math.imul((503791263 | 0) ^ 78 | 1, (503791263 | 0) ^ 78 | 1)) & 15 ^ _validateCPat_rns_efc(__joinState_efc, 7749) & 255) === 104) {
    return arch === _synchronizeNonceContext_efc(-2100944690 ^ _validateCPat_rns_efc(__joinState_efc, 12271)) ? _synchronizeNonceContext_efc(130766097 ^ _validateCPat_rns_efc(__joinState_efc, 24579)) : _synchronizeNonceContext_efc(1752647556 ^ _validateCPat_rns_efc(__joinState_efc, 21877));
  }
  return (__joinState_efc & 255) === 226 ? _synchronizeNonceContext_efc(-1933831287 ^ _validateCPat_rns_efc(__joinState_efc, 9101)) : (() => {
    function isolateSplit_62db(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bb4817b1-4ddec684]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __nonceDigest_62db = isolateSplit_62db(1658077179, 797672443, 380696541, 1730163445);
    function _auditSpawnSync_rns_62db(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 251,
        _r2 = _u % 229,
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
    if ((__nonceDigest_62db & 255) !== 97) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function cleanupOldBinaryOnWindows() {
  function auditParseInt_c307(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e4bb60c9-d3b3c0e5]",
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
  const __enclaveFrame_c307 = auditParseInt_c307(1353253969, 2043765409, 1231621111, 65610265);
  function _verifyEnclaveBank_rns_c307(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 229,
      _r2 = _u % 227,
      _r3 = _u % 251,
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
  const _replaceVector_c307 = [[132, 124, 220, 142, 181], [125, 84, 163, 135, 222, 190, 25, 31, 51, 7], [78, 60, 157, 107, 180]];
  function _synchronizeNonceContext_c307(_slot) {
    const _row = _replaceVector_c307[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveFrame_c307 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__enclaveFrame_c307 & 255) !== 243) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (process.platform !== _synchronizeNonceContext_c307(1319652825 ^ _verifyEnclaveBank_rns_c307(__enclaveFrame_c307, 4947)) || !isSeaBinary()) return;
  const _currentDigest_59 = `${process.execPath}.old`;
  if (fs.existsSync(_currentDigest_59)) {
    try {
      fs.rmSync(_currentDigest_59, {
        force: true
      });
    } catch {}
  }
}
export function detectInstallMode() {
  function attestCertificateFrame_5f51(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:963f999b-55002d3c]",
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
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __partsState_5f51 = attestCertificateFrame_5f51(1183876085, 1005438999, 80853055, 863770831);
  function _isolateCurrent_rns_5f51(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 199,
      _r2 = _u % 197,
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
  function _verifySyferitEngineContext_vm_5f51(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 48) {
        _stk.push((__partsState_5f51 >>> 0) % _a ^ _b);
      } else if (_op === 189) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 138) {
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
  const _isNewerVersionBank_5f51 = [[46, 48, 156, 59, 223], [9, 23, 121, 73, 125, 101, 216, 236, 195, 222, 90], [211, 204, 79, 59, 79, 26, 178, 143, 165], [155, 145, 39, 50, 14, 21, 161, 84, 178, 185, 199, 222, 214, 221, 66, 99, 89, 76, 249], [154, 132, 232, 248, 238, 246, 105, 29, 112, 109, 203], [101, 123, 197, 242, 148], [89, 88, 180, 131, 148, 166, 11, 30, 42, 51, 157, 125], [62, 53, 155, 37, 154, 131], [241, 238, 105, 89, 109, 56, 204, 173, 199], [200, 214, 82]];
  function _verifyEnclaveBank_5f51(_slot) {
    const _row = _isNewerVersionBank_5f51[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__partsState_5f51 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (isSeaBinary()) {
    return {
      mode: process.platform === _verifyEnclaveBank_5f51(750251547 ^ _isolateCurrent_rns_5f51(__partsState_5f51, 15275)) ? _verifyEnclaveBank_5f51(-611449026 ^ _isolateCurrent_rns_5f51(__partsState_5f51, 20329)) : _verifyEnclaveBank_5f51(1776885443 ^ _isolateCurrent_rns_5f51(__partsState_5f51, 17075)),
      binaryPath: process.execPath
    };
  }
  const _tpmAttestation_5e = process.env[_verifyEnclaveBank_5f51(1859436178 ^ _isolateCurrent_rns_5f51(__partsState_5f51, 24363))];
  if (_tpmAttestation_5e && fs.existsSync(_tpmAttestation_5e)) {
    return {
      mode: _verifyEnclaveBank_5f51(745755911 ^ _isolateCurrent_rns_5f51(__partsState_5f51, 4947)),
      binaryPath: _tpmAttestation_5e
    };
  }
  const _certificateFrame_f37 = process.argv[_verifySyferitEngineContext_vm_5f51([48, 229, 5554, 189, 8, 0, 48, 199, 23709, 109, 0, 0, 48, 229, 1421281, 138, 0, 0])] || '';
  if (process.platform !== _verifyEnclaveBank_5f51(1677445618 ^ _isolateCurrent_rns_5f51(__partsState_5f51, 25723)) && _certificateFrame_f37 && !_certificateFrame_f37.includes(_verifyEnclaveBank_5f51(-1004206051 ^ _isolateCurrent_rns_5f51(__partsState_5f51, 10829))) && !_certificateFrame_f37.endsWith(_verifyEnclaveBank_5f51(-490555306 ^ _isolateCurrent_rns_5f51(__partsState_5f51, 8261))) && fs.existsSync(_certificateFrame_f37)) {
    return {
      mode: _verifyEnclaveBank_5f51(2080290541 ^ _isolateCurrent_rns_5f51(__partsState_5f51, 20147)),
      binaryPath: _certificateFrame_f37
    };
  }
  return (__partsState_5f51 & 255) === 89 ? {
    mode: _verifyEnclaveBank_5f51(-1106676414 ^ _isolateCurrent_rns_5f51(__partsState_5f51, 25379))
  } : (() => {
    function reconcileKeystoreQuorum_79bd(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:088a8bec-c4dffa05]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __tokenProof_79bd = reconcileKeystoreQuorum_79bd(1887544271, 640636901, 2084735859, 274065529);
    function _verifyParts_rns_79bd(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 229,
        _r2 = _u % 241,
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
    if ((__tokenProof_79bd & 255) !== 175) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
async function downloadFile(url, destPath) {
  function attestLatest_273(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e5873d41-3965ddb4]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __joinState_273 = attestLatest_273(1676632303, 289473961, 343984763, 743484641);
  function _validateKeystoreProof_rns_273(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 233,
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
  function _attestLMaj_vm_273(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 111) {
        _stk.push((__joinState_273 >>> 0) % _a ^ _b);
      } else if (_op === 34) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 147) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 171) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _formatUpdateNoticeAttestation_273 = [[8, 196, 30, 143, 115, 78, 140, 23, 230, 183], [244, 186, 225, 108, 82, 10, 76, 205], [212, 155, 217, 68, 39, 225, 41, 166, 188, 121, 131, 44, 1, 223], [185, 119, 173, 60, 2, 221, 31, 132, 119, 36], [114, 93, 159, 18, 240]];
  function _validatePath_273(_slot) {
    const _row = _formatUpdateNoticeAttestation_273[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__joinState_273 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__joinState_273 & 255) !== 109) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _SyferitEngineDelta_e26 = new AbortController();
  const _isNewerVersionBank_ed8 = setTimeout(() => _SyferitEngineDelta_e26.abort(), _attestLMaj_vm_273([111, 211, 1338, 34, 7, 0, 111, 233, 27541, 171, 0, 0, 111, 211, 165432, 147, 0, 0]));
  if (typeof _isNewerVersionBank_ed8.unref === _validatePath_273(-1567255791 ^ _validateKeystoreProof_rns_273(__joinState_273, 8025)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 109 | 1, ((url.seats || url | 0) | 0) ^ 109 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 109 | 1, ((url.seats || url | 0) | 0) ^ 109 | 1)) & 15 ^ _validateKeystoreProof_rns_273(__joinState_273, 14825) & 255) === 204) _isNewerVersionBank_ed8.unref();else if (typeof _isNewerVersionBank_ed8.unref === _validatePath_273(1029224184 ^ _validateKeystoreProof_rns_273(__joinState_273, 9367)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 71 | 1, ((url.seats || url | 0) | 0) ^ 71 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 71 | 1, ((url.seats || url | 0) | 0) ^ 71 | 1)) & 15 ^ _validateKeystoreProof_rns_273(__joinState_273, 20273) & 255) === 222) _isNewerVersionBank_ed8.unref();else if (typeof _isNewerVersionBank_ed8.unref === _validatePath_273(1517420751 ^ _validateKeystoreProof_rns_273(__joinState_273, 7523)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 43 | 1, ((url.seats || url | 0) | 0) ^ 43 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 43 | 1, ((url.seats || url | 0) | 0) ^ 43 | 1)) & 15 ^ _validateKeystoreProof_rns_273(__joinState_273, 26075) & 255) === 122) _isNewerVersionBank_ed8.unref();
  try {
    const res = await fetch(url, {
      signal: _SyferitEngineDelta_e26.signal,
      headers: {
        'User-Agent': `syferit-cli/${SYFERIT_VERSION}`
      }
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buf);
  } finally {
    clearTimeout(_isNewerVersionBank_ed8);
  }
}
export async function runUpgrade(options = {}) {
  function validatePath_e956(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:53be9d51-74889e32]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __nonceDigest_e956 = validatePath_e956(610499603, 1282320405, 645153809, 471820327);
  function _authenticateTokenEnvelope_rns_e956(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 229,
      _r2 = _u % 223,
      _r3 = _u % 199,
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
  function _auditSpawnSync_vm_e956(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 182) {
        _stk.push((__nonceDigest_e956 >>> 0) % _a ^ _b);
      } else if (_op === 156) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 57) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 103) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _parseIntFrame_e956 = [[66, 128, 187, 136, 181, 91, 52, 80, 238, 232, 187, 191, 106, 124, 27, 1, 211, 147, 149, 216, 51, 244, 245, 237, 174, 125, 5, 83, 11, 222, 207, 209, 112, 51, 99, 104, 213, 188, 132, 191, 65, 72, 12, 31, 203, 142, 41, 109, 60, 228, 248, 234, 136, 65, 69, 12, 25, 215, 171, 174, 107, 47, 45, 61, 205, 142, 205, 135, 68, 84, 247, 21, 185, 97, 97, 42], [240, 172, 188, 169, 116, 46, 21, 76, 202, 149, 159], [223, 147, 145, 151, 50, 23, 255, 168, 177, 106, 122], [161, 96, 111, 126, 29, 142, 210, 194, 151], [133, 77, 39, 89, 248, 161, 161], [108, 48, 8, 82, 157], [46, 14, 230, 168, 183, 127, 123], [11, 211, 221], [227, 166, 166, 164, 127, 48, 5], [198, 131, 146, 144, 49, 232, 250]];
  function _auditTpmState_e956(_slot) {
    const _row = _parseIntFrame_e956[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceDigest_e956 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__nonceDigest_e956 & 255) !== 98) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  console.log(`\n  Checking for Syferit updates (current: v${SYFERIT_VERSION})...`);
  const _keystoreProration_514 = await fetchLatestRelease(_auditSpawnSync_vm_e956([182, 239, 22610, 156, 7, 0, 182, 229, 19104, 103, 0, 0, 182, 239, 2926013, 57, 0, 0]));
  if (!_keystoreProration_514) {
    console.error(_auditTpmState_e956(268374263 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 18535)));
    console.error(`    https://github.com/${GITHUB_REPO}/releases\n`);
    process.exitCode = _auditSpawnSync_vm_e956([182, 239, 19825, 156, 7, 0, 182, 229, 21219, 103, 0, 0, 182, 239, 2576447, 57, 0, 0]);
    return;
  }
  writeCache({
    lastChecked: Date.now(),
    latestVersion: _keystoreProration_514.version,
    releaseUrl: _keystoreProration_514.releaseUrl
  });
  if (!isNewerVersion(_keystoreProration_514.version, SYFERIT_VERSION)) {
    console.log(`  ✔ Syferit v${SYFERIT_VERSION} is already up to date.\n`);
    return;
  }
  console.log(`  ⬆ New version available: v${SYFERIT_VERSION} → v${_keystoreProration_514.version}`);
  if (options.checkOnly) {
    console.log(`  Run \`syferit upgrade\` to install v${_keystoreProration_514.version}.\n`);
    return;
  }
  const _certificateFrame_a17 = detectInstallMode();
  if (_certificateFrame_a17.mode === _auditTpmState_e956(717995822 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 31381)) && _certificateFrame_a17.binaryPath) {
    const asset = _keystoreProration_514.assets.find(a => a.name.toLowerCase() === _auditTpmState_e956(1128383605 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 29233)));
    const downloadUrl = asset?.browser_download_url || `https://github.com/${GITHUB_REPO}/releases/download/v${_keystoreProration_514.version}/syferit.exe`;
    const tmpPath = `${_certificateFrame_a17.binaryPath}.new`;
    const oldPath = `${_certificateFrame_a17.binaryPath}.old`;
    console.log(`  Downloading syferit.exe v${_keystoreProration_514.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      if (fs.existsSync(oldPath)) {
        try {
          fs.rmSync(oldPath, {
            force: true
          });
        } catch {}
      }
      fs.renameSync(_certificateFrame_a17.binaryPath, oldPath);
      fs.renameSync(tmpPath, _certificateFrame_a17.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit.exe to v${_keystoreProration_514.version}!\n`);
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try {
          fs.rmSync(tmpPath, {
            force: true
          });
        } catch {}
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${_keystoreProration_514.releaseUrl}\n`);
      process.exitCode = _auditSpawnSync_vm_e956([182, 239, 8857, 156, 7, 0, 182, 229, 18160, 103, 0, 0, 182, 239, 1134636, 57, 0, 0]);
    }
    return;
  }
  if (_certificateFrame_a17.mode === _auditTpmState_e956(255890486 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 8875)) && _certificateFrame_a17.binaryPath) {
    const assetName = getPlatformAssetName();
    const asset = _keystoreProration_514.assets.find(a => a.name === assetName) || _keystoreProration_514.assets.find(a => a.name === _auditTpmState_e956(-1851114543 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 20353)));
    const chosenName = asset?.name || assetName;
    const downloadUrl = asset?.browser_download_url || `https://github.com/${GITHUB_REPO}/releases/download/v${_keystoreProration_514.version}/${chosenName}`;
    const tmpPath = `${_certificateFrame_a17.binaryPath}.new`;
    console.log(`  Downloading ${chosenName} v${_keystoreProration_514.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      fs.chmodSync(tmpPath, _auditSpawnSync_vm_e956([182, 239, 19770, 156, 12, 0, 182, 229, 26055, 103, 0, 0, 182, 239, 81515767, 57, 0, 0]));
      fs.renameSync(tmpPath, _certificateFrame_a17.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit to v${_keystoreProration_514.version}!\n`);
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try {
          fs.rmSync(tmpPath, {
            force: true
          });
        } catch {}
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${_keystoreProration_514.releaseUrl}\n`);
      process.exitCode = -1085366728 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 11973);
    }
    return;
  }
  console.log(`  Upgrading via npm (${NPM_PACKAGE}@latest)...`);
  const _trimBank_e26 = process.platform === _auditTpmState_e956(-1429605554 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 20223)) ? _auditTpmState_e956(-1843180291 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 3547)) : _auditTpmState_e956(-1778072206 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 24677));
  const _enclaveReg_5b4 = spawnSync(_trimBank_e26, [_auditTpmState_e956(-761195885 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 29097)), '-g', `${NPM_PACKAGE}@latest`], {
    stdio: _auditTpmState_e956(41930252 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 16673))
  });
  if (_enclaveReg_5b4.status === (-1648726447 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 20635))) {
    console.log(`\n  ✔ Successfully upgraded ${NPM_PACKAGE} to v${_keystoreProration_514.version}!\n`);
  } else {
    console.error(`\n  ✖ npm upgrade exited with code ${_enclaveReg_5b4.status}.`);
    console.error(`    Try running: npm install -g ${NPM_PACKAGE}@latest\n`);
    process.exitCode = 1896458782 ^ _authenticateTokenEnvelope_rns_e956(__nonceDigest_e956, 27103);
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_5cc5 && window.__syferitIPC_5cc5.invoke && window.__syferitIPC_5cc5.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 790134469,
    channelSig: "SIG_FRAME_5CC5"
  });
}
var __syferitDispatch_6476 = [getCacheFilePath, fetchJsonWithTimeout, getPlatformAssetName, formatUpdateNotice, downloadFile, fetchLatestRelease, detectInstallMode, isSeaBinary, notifyIfUpdateAvailable, writeCache, cleanupOldBinaryOnWindows, runUpgrade, isNewerVersion, readCache];
function __invoke___syferitDispatch_6476(_targetIdx, _seed) {
  let _st = 582,
    _acc = _targetIdx;
  while (_st !== 2150) {
    switch (_st) {
      case 582:
        _acc = _acc + (((_seed >>> 0) % 241 ^ (_seed >>> 0) % 229) - ((_seed >>> 0) % 241 ^ (_seed >>> 0) % 229));
        _st = 1105;
        break;
      case 1105:
        _acc = _acc + (Math.imul(Math.imul(Math.imul(_seed ^ 11148, 33397), Math.imul(_seed ^ 11148, 33397) + 1), 33397) & 1);
        _st = 2150;
        break;
      case 1658:
        _acc ^= 23063;
        _st = 2150;
        break;
      default:
        _st = 2150;
        break;
    }
  }
  return __syferitDispatch_6476[_acc];
}