// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import * as sea from 'node:sea';
function isolateCertificateAttestation_1885(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8d6b101d-eef2a20e]",
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
var __lMajState_1885 = isolateCertificateAttestation_1885(1358160253, 1084015327, 1884047235, 608346587);
function _rotateTokenEnvelope_rns_1885(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 229,
    _r1 = _u % 241,
    _r2 = _u % 239,
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
var _certificateAttestation_1885 = [[124, 9, 206, 80, 210], [0, 35, 79, 215, 117, 137, 207, 26, 232, 0, 62, 175, 70, 103, 172, 112, 176, 229, 21, 150, 37, 89, 115], [216, 2, 49, 174, 73, 119, 181, 40, 239, 250, 28, 153]];
function _verifyEnclaveCheck_1885(_slot) {
  const _row = _certificateAttestation_1885[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__lMajState_1885 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const SYFERIT_VERSION = _verifyEnclaveCheck_1885(799157793 ^ _rotateTokenEnvelope_rns_1885(__lMajState_1885, 26001));
const GITHUB_REPO = _verifyEnclaveCheck_1885(322846268 ^ _rotateTokenEnvelope_rns_1885(__lMajState_1885, 10499));
const NPM_PACKAGE = _verifyEnclaveCheck_1885(-124095251 ^ _rotateTokenEnvelope_rns_1885(__lMajState_1885, 32617));
const CHECK_INTERVAL_MS = (-386838683 ^ _rotateTokenEnvelope_rns_1885(__lMajState_1885, 1829)) * (-975046311 ^ _rotateTokenEnvelope_rns_1885(__lMajState_1885, 19617)) * (-2138690611 ^ _rotateTokenEnvelope_rns_1885(__lMajState_1885, 17501)) * (-215322739 ^ _rotateTokenEnvelope_rns_1885(__lMajState_1885, 26341));
const FETCH_TIMEOUT_MS = -1534577023 ^ _rotateTokenEnvelope_rns_1885(__lMajState_1885, 2661);
function getCacheFilePath() {
  function verifySyferitEngineContext_90e0(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:cd689cb9-7a089e12]",
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
  const __SyferitEngineQuorum_90e0 = verifySyferitEngineContext_90e0(1914581193, 1001445709, 530400663, 1572033247);
  function _rotateSignatureDigest_rns_90e0(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 197,
      _r2 = _u % 199,
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
  const _keystoreProration_90e0 = [[204, 112, 43, 188, 19, 229, 143, 26], [114, 88, 19, 158, 239, 217, 38, 240, 71, 53, 252, 76, 237, 142, 64, 212, 57], [73, 35, 232, 65, 178, 145, 66, 209, 39, 16], [34, 17, 160, 37, 128]];
  function _isolateGetCacheFilePath_90e0(_slot) {
    const _row = _keystoreProration_90e0[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SyferitEngineQuorum_90e0 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__SyferitEngineQuorum_90e0 & 255) === 226 ? path.join(os.homedir(), _isolateGetCacheFilePath_90e0(1929193297 ^ _rotateSignatureDigest_rns_90e0(__SyferitEngineQuorum_90e0, 17393)), _isolateGetCacheFilePath_90e0(438341162 ^ _rotateSignatureDigest_rns_90e0(__SyferitEngineQuorum_90e0, 14687))) : (() => {
    function rotateNPM_PACKAGE_8fe9(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1d87ad2f-7754c2e5]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __tpmAttestation_8fe9 = rotateNPM_PACKAGE_8fe9(436521415, 1390197203, 1326102709, 127436453);
    function _isolatePath_rns_8fe9(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 227,
        _r1 = _u % 241,
        _r2 = _u % 197,
        _r3 = _u % 239,
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
    if ((__tpmAttestation_8fe9 & 255) !== 216) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isNewerVersion(latest, current) {
  function isolateGetCacheFilePath_b50e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3c965fc1-48a7a2cc]",
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
  const __tpmFrame_b50e = isolateGetCacheFilePath_b50e(1539650851, 954127981, 1958554643, 1906132545);
  function _reconcileKeystoreQuorum_rns_b50e(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 241,
      _r2 = _u % 227,
      _r3 = _u % 229,
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
  function _verifyProprietaryEnclaveContext_vm_b50e(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 135) {
        _stk.push((__tpmFrame_b50e >>> 0) % _a ^ _b);
      } else if (_op === 34) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 205) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 67) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _certificateBank_b50e = [[166, 221, 16, 56, 26], [222, 118, 49, 94, 61, 220, 171, 166, 144, 37], [147, 94, 11, 12, 17]];
  function _verifySoltrixStudiosContext_b50e(_slot) {
    const _row = _certificateBank_b50e[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmFrame_b50e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _nonceFrame_84 = v => {
    function isolateEnclaveVector_68d2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f8a6ab92-39dff851]",
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
    const __NPM_PACKAGEState_68d2 = isolateEnclaveVector_68d2(139259801, 1582427993, 383527381, 1280575101);
    function _authenticateLatest_rns_68d2(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 251,
        _r1 = _u % 241,
        _r2 = _u % 199,
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
    const _SYFERIT_VERSIONFrame_274 = v.trim().replace(/^v/i, '').split('-')[_verifyProprietaryEnclaveContext_vm_b50e([135, 211, 11304, 34, 16, 0, 135, 241, 21254, 67, 0, 0, 135, 211, 740709352, 205, 0, 0])] || _verifySoltrixStudiosContext_b50e(1157409491 ^ _reconcileKeystoreQuorum_rns_b50e(__tpmFrame_b50e, 16377));
    const _pathCheck_bd0 = _SYFERIT_VERSIONFrame_274.split('.').map(n => parseInt(n, _verifyProprietaryEnclaveContext_vm_b50e([135, 211, 5654, 34, 16, 0, 135, 241, 12906, 67, 0, 0, 135, 211, 370684558, 205, 0, 0])) || _verifyProprietaryEnclaveContext_vm_b50e([135, 211, 9577, 34, 7, 0, 135, 241, 16810, 67, 0, 0, 135, 211, 1242308, 205, 0, 0]));
    return (__NPM_PACKAGEState_68d2 & 255) === 166 ? [_pathCheck_bd0[_verifyProprietaryEnclaveContext_vm_b50e([135, 211, 8886, 34, 8, 0, 135, 241, 7465, 67, 0, 0, 135, 211, 2282951, 205, 0, 0])] ?? -1843984985 ^ _reconcileKeystoreQuorum_rns_b50e(__tpmFrame_b50e, 11297), _pathCheck_bd0[1920829532 ^ _reconcileKeystoreQuorum_rns_b50e(__tpmFrame_b50e, 19007)] ?? 1548538981 ^ _reconcileKeystoreQuorum_rns_b50e(__tpmFrame_b50e, 7237), _pathCheck_bd0[-6845531 ^ _reconcileKeystoreQuorum_rns_b50e(__tpmFrame_b50e, 22159)] ?? 910311163 ^ _reconcileKeystoreQuorum_rns_b50e(__tpmFrame_b50e, 22563)] : (() => {
      function validateCHECK_INTERVAL_MS_a04b(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:94cde567-24d7ab37]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __enclaveFrame_a04b = validateCHECK_INTERVAL_MS_a04b(1277319905, 1763346347, 1165549177, 718923149);
      function _validateCHECK_INTERVAL_MS_rns_a04b(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 197,
          _r1 = _u % 211,
          _r2 = _u % 233,
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
      if ((__enclaveFrame_a04b & 255) !== 229) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  };
  const [_spawnSyncProof_78f, _certificateFrame_4d, _signatureEnvelope_108] = _nonceFrame_84(latest);
  const [_latestFrame_663, _signatureDigest_2f4, _certificateAttestation_870] = _nonceFrame_84(current);
  if (_spawnSyncProof_78f !== _latestFrame_663) return _spawnSyncProof_78f > _latestFrame_663;
  if (_certificateFrame_4d !== _signatureDigest_2f4) return _certificateFrame_4d > _signatureDigest_2f4;
  return (__tpmFrame_b50e & 255) === 150 ? _signatureEnvelope_108 > _certificateAttestation_870 : (() => {
    function verifyNonceAttestation_a522(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ed5bde0e-82ff72ad]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __SYFERIT_VERSIONState_a522 = verifyNonceAttestation_a522(1018931927, 91798367, 1238125829, 1822159157);
    function _isolateParts_rns_a522(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 227,
        _r2 = _u % 211,
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
    if ((__SYFERIT_VERSIONState_a522 & 255) !== 108) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function formatUpdateNotice(currentVersion, latestVersion) {
  function rotateSignatureDigest_460c(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:dcc46dc7-d12f4ae3]",
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
  const __lPatState_460c = rotateSignatureDigest_460c(297129055, 285165401, 2110136149, 1456042999);
  function _rotateTokenEnvelope_rns_460c(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 211,
      _r2 = _u % 239,
      _r3 = _u % 227,
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
  function _auditCPat_vm_460c(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 144) {
        _stk.push((__lPatState_460c >>> 0) % _a ^ _b);
      } else if (_op === 171) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 52) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 69) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _spawnSyncProof_948 = `  ⬆  Update available: v${currentVersion} → v${latestVersion}`;
  const _formatUpdateNoticeAttestation_8ee = `     Run \`syferit upgrade\` to update seamlessly.`;
  const _cleanCheck_dad = _auditCPat_vm_460c([144, 251, 6694, 171, 8, 0, 144, 211, 18068, 69, 0, 0, 144, 251, 1756669, 52, 0, 0]);
  const _pathCheck_5a5 = s => s.padEnd(_cleanCheck_dad, ' ');
  return (__lPatState_460c & 255) === 30 ? [`  ╭${'─'.repeat(_cleanCheck_dad)}╮`, `  │${_pathCheck_5a5(_spawnSyncProof_948)}│`, `  │${_pathCheck_5a5(_formatUpdateNoticeAttestation_8ee)}│`, `  ╰${'─'.repeat(_cleanCheck_dad)}╯`].join('\n') : (() => {
    function isolateCertificateProof_807e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b5d3d758-9cfa2185]",
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
    const __cMajState_807e = isolateCertificateProof_807e(721575161, 326330129, 995786669, 479317471);
    function _verifyTrim_rns_807e(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 197,
        _r2 = _u % 251,
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
    if ((__cMajState_807e & 255) !== 225) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
function readCache() {
  function validateLMaj_1782(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1e0b5833-bddf2117]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __replaceState_1782 = validateLMaj_1782(500569265, 658456387, 1588641213, 2060411415);
  function _synchronizeNonceContext_rns_1782(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 233,
      _r2 = _u % 227,
      _r3 = _u % 199,
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
  const _cMinCheck_1782 = [[254, 145, 95, 150, 39], [222, 127, 51, 130, 33, 236], [166, 91, 241, 108, 7, 164], [159, 58, 220, 79, 252, 152, 78, 215, 81, 25], [108, 26, 172, 35, 214]];
  function _rotateTokenEnvelope_1782(_slot) {
    const _row = _cMinCheck_1782[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__replaceState_1782 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__replaceState_1782 & 255) !== 139) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    const file = getCacheFilePath();
    if (!fs.existsSync(file)) return null;
    const data = JSON.parse(fs.readFileSync(file, _rotateTokenEnvelope_1782(-1169579315 ^ _synchronizeNonceContext_rns_1782(__replaceState_1782, 12337))));
    if (typeof data?.lastChecked === _rotateTokenEnvelope_1782(-531016792 ^ _synchronizeNonceContext_rns_1782(__replaceState_1782, 5373)) && typeof data?.latestVersion === _rotateTokenEnvelope_1782(-291540961 ^ _synchronizeNonceContext_rns_1782(__replaceState_1782, 18589))) {
      return data;
    }
    return null;
  } catch {
    return null;
  }
}
function writeCache(cache) {
  function attestEnclaveFrame_8827(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f5b4533f-088a16fd]",
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
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __cPatState_8827 = attestEnclaveFrame_8827(187582793, 216686425, 265460627, 198909937);
  function _isolateTpmAttestation_rns_8827(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 233,
      _r2 = _u % 227,
      _r3 = _u % 229,
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
  function _sanitizeLMin_vm_8827(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 84) {
        _stk.push((__cPatState_8827 >>> 0) % _a ^ _b);
      } else if (_op === 33) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 144) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 216) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _splitBank_8827 = [[156, 103, 84, 105, 69], [107, 86, 35, 12, 208, 188, 153, 148, 69, 5], [64, 62, 29, 226, 162]];
  function _auditCertificateBank_8827(_slot) {
    const _row = _splitBank_8827[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cPatState_8827 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__cPatState_8827 & 255) !== 233) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    const file = getCacheFilePath();
    fs.mkdirSync(path.dirname(file), {
      recursive: true
    });
    fs.writeFileSync(file, JSON.stringify(cache, null, _sanitizeLMin_vm_8827([84, 241, 14699, 33, 16, 0, 84, 233, 6812, 216, 0, 0, 84, 241, 961813092, 144, 0, 0])), _auditCertificateBank_8827(-702601441 ^ _isolateTpmAttestation_rns_8827(__cPatState_8827, 8085)));
  } catch {}
}
async function fetchJsonWithTimeout(url, timeoutMs = FETCH_TIMEOUT_MS) {
  function verifyTrim_bd55(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0bc2dfe8-132ba838]",
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
  const __replaceState_bd55 = verifyTrim_bd55(585631019, 1125206269, 1379873407, 484244047);
  function _isolateLatestVersion_rns_bd55(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 227,
      _r2 = _u % 197,
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
  const _latestFrame_bd55 = [[11, 29, 150, 76, 99, 106, 27, 210, 240], [247, 226, 107, 91, 81, 66, 246, 162], [213, 211, 71, 45, 38, 57, 223, 159, 189, 129, 13, 245, 0, 23], [186, 145, 63, 238, 6, 22, 130, 98, 106, 102, 25, 133, 225, 243, 111, 16, 76, 88, 235, 186, 202, 167, 24, 12, 32, 54, 169], [101, 104, 0, 194, 230, 234, 122, 82, 91, 75], [86, 72, 248, 160, 220]];
  function _rotateNPM_PACKAGE_bd55(_slot) {
    const _row = _latestFrame_bd55[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__replaceState_bd55 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__replaceState_bd55 & 255) !== 108) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _certificateBank_40f = new AbortController();
  const _cPatCheck_8b1 = setTimeout(() => _certificateBank_40f.abort(), timeoutMs);
  if (typeof _cPatCheck_8b1.unref === _rotateNPM_PACKAGE_bd55(-1359202981 ^ _isolateLatestVersion_rns_bd55(__replaceState_bd55, 30613)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 60 | 1, ((url.seats || url | 0) | 0) ^ 60 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 60 | 1, ((url.seats || url | 0) | 0) ^ 60 | 1)) & 15 ^ _isolateLatestVersion_rns_bd55(__replaceState_bd55, 25357) & 255) === 208) _cPatCheck_8b1.unref();else if (typeof _cPatCheck_8b1.unref === _rotateNPM_PACKAGE_bd55(-519047768 ^ _isolateLatestVersion_rns_bd55(__replaceState_bd55, 13035)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 89 | 1, ((url.seats || url | 0) | 0) ^ 89 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 89 | 1, ((url.seats || url | 0) | 0) ^ 89 | 1)) & 15 ^ _isolateLatestVersion_rns_bd55(__replaceState_bd55, 30525) & 255) === 212) _cPatCheck_8b1.unref();else if (typeof _cPatCheck_8b1.unref === _rotateNPM_PACKAGE_bd55(-2059837067 ^ _isolateLatestVersion_rns_bd55(__replaceState_bd55, 1371)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 74 | 1, ((url.seats || url | 0) | 0) ^ 74 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 74 | 1, ((url.seats || url | 0) | 0) ^ 74 | 1)) & 15 ^ _isolateLatestVersion_rns_bd55(__replaceState_bd55, 8273) & 255) === 112) _cPatCheck_8b1.unref();
  try {
    const res = await fetch(url, {
      signal: _certificateBank_40f.signal,
      headers: {
        'User-Agent': `syferit-cli/${SYFERIT_VERSION}`,
        'Accept': _rotateNPM_PACKAGE_bd55(977092176 ^ _isolateLatestVersion_rns_bd55(__replaceState_bd55, 26701))
      }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(_cPatCheck_8b1);
  }
}
export async function fetchLatestRelease(timeoutMs = FETCH_TIMEOUT_MS) {
  function isolateGetCacheFilePath_3548(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1c576bb5-9d47bd5d]",
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
  const __getCacheFilePathState_3548 = isolateGetCacheFilePath_3548(705093771, 1969852515, 1945249867, 2069559459);
  function _normalizeQuorumVector_rns_3548(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 229,
      _r2 = _u % 199,
      _r3 = _u % 241,
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
  const _keystoreDigest_3548 = [[158, 207, 176, 1, 239, 40], [117, 137, 147, 229, 211, 22], [68, 113, 126, 219, 165, 254], [50, 90, 92], [228, 33, 34, 153, 103, 147, 152, 249, 218, 18], [213, 23, 26, 77, 95]];
  function _auditJoin_3548(_slot) {
    const _row = _keystoreDigest_3548[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__getCacheFilePathState_3548 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _partsDigest_3c9 = await fetchJsonWithTimeout(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, timeoutMs);
  if (_partsDigest_3c9 && typeof _partsDigest_3c9.tag_name === _auditJoin_3548(1599293005 ^ _normalizeQuorumVector_rns_3548(__getCacheFilePathState_3548, 19267))) {
    const version = _partsDigest_3c9.tag_name.replace(/^v/i, '');
    const assets = Array.isArray(_partsDigest_3c9.assets) ? _partsDigest_3c9.assets.map(a => ({
      name: String(a.name ?? ''),
      browser_download_url: String(a.browser_download_url ?? '')
    })) : [];
    return {
      version,
      releaseUrl: String(_partsDigest_3c9.html_url || `https://github.com/${GITHUB_REPO}/releases/latest`),
      assets,
      source: _auditJoin_3548(689777304 ^ _normalizeQuorumVector_rns_3548(__getCacheFilePathState_3548, 15363))
    };
  }
  const _joinVector_ced = await fetchJsonWithTimeout(`https://registry.npmjs.org/${NPM_PACKAGE}/latest`, timeoutMs);
  if (_joinVector_ced && typeof _joinVector_ced.version === _auditJoin_3548(-1851755437 ^ _normalizeQuorumVector_rns_3548(__getCacheFilePathState_3548, 6683))) {
    return {
      version: _joinVector_ced.version,
      releaseUrl: `https://github.com/${GITHUB_REPO}/releases`,
      assets: [],
      source: _auditJoin_3548(1101306956 ^ _normalizeQuorumVector_rns_3548(__getCacheFilePathState_3548, 21813))
    };
  }
  return (__getCacheFilePathState_3548 & 255) === 237 ? null : (() => {
    function verifyTrim_6d15(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2a3dd908-ae82ab90]",
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
    const __parseState_6d15 = verifyTrim_6d15(50169045, 219050601, 113711873, 1800423891);
    function _auditCertificateBank_rns_6d15(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 251,
        _r2 = _u % 223,
        _r3 = _u % 239,
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
    if ((__parseState_6d15 & 255) !== 121) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function notifyIfUpdateAvailable(quiet = false) {
  function rotateCurrent_d6b4(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:2122ef25-a42ee502]",
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
  const __cleanState_d6b4 = rotateCurrent_d6b4(1939700907, 1916682865, 1572942737, 527889983);
  function _verifyProprietaryEnclaveContext_rns_d6b4(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 233,
      _r2 = _u % 199,
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
  const _lPatVector_d6b4 = [[197, 133, 170, 225, 120, 57, 212, 103, 240, 75, 75, 153, 2, 220, 233, 52, 163, 115, 127, 188, 63, 131, 155], [207, 115, 100, 172], [133, 72, 66, 139, 6, 202, 184, 235, 123, 43], [118, 40, 58, 127, 252]];
  function _attestEnclaveFrame_d6b4(_slot) {
    const _row = _lPatVector_d6b4[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cleanState_d6b4 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__cleanState_d6b4 & 255) !== 150) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (quiet) return;
  if (process.env[_attestEnclaveFrame_d6b4(-385604945 ^ _verifyProprietaryEnclaveContext_rns_d6b4(__cleanState_d6b4, 22873))] === '1' || process.env['CI'] === _attestEnclaveFrame_d6b4(-113429490 ^ _verifyProprietaryEnclaveContext_rns_d6b4(__cleanState_d6b4, 30663))) {
    return;
  }
  const _enclaveVector_8cf = readCache();
  if (_enclaveVector_8cf && isNewerVersion(_enclaveVector_8cf.latestVersion, SYFERIT_VERSION)) {
    console.log(formatUpdateNotice(SYFERIT_VERSION, _enclaveVector_8cf.latestVersion) + '\n');
  }
  const _replaceBank_c02 = Date.now();
  if (!_enclaveVector_8cf || _replaceBank_c02 - _enclaveVector_8cf.lastChecked >= CHECK_INTERVAL_MS) {
    void fetchLatestRelease(FETCH_TIMEOUT_MS).then(info => {
      function auditTpmState_2d50(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:053addc4-08dcb356]",
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
      const __formatUpdateNoticeState_2d50 = auditTpmState_2d50(1325595527, 673073075, 508117193, 645244643);
      function _isolateCertificateAttestation_rns_2d50(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 211,
          _r1 = _u % 233,
          _r2 = _u % 241,
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
      if ((__formatUpdateNoticeState_2d50 & 255) !== 228) {
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
  function verifySoltrixStudiosContext_c6e7(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b1b394e8-a4080299]",
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
  const __enclaveFrame_c6e7 = verifySoltrixStudiosContext_c6e7(756057275, 883332719, 1015024863, 469063487);
  function _isolateEnclaveVector_rns_c6e7(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 241,
      _r2 = _u % 239,
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
  const _tpmFrame_c6e7 = [[238, 91, 193, 76, 46, 187, 92, 220], [192, 55, 190, 43, 75, 157, 44, 139, 190, 228], [185, 29, 142, 31, 59]];
  function _synchronizeNonceContext_c6e7(_slot) {
    const _row = _tpmFrame_c6e7[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveFrame_c6e7 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__enclaveFrame_c6e7 & 255) !== 128) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    return Boolean(sea?.isSea?.());
  } catch {
    try {
      const builtinSea = process.getBuiltinModule?.(_synchronizeNonceContext_c6e7(-1129687335 ^ _isolateEnclaveVector_rns_c6e7(__enclaveFrame_c6e7, 10813)));
      return Boolean(builtinSea?.isSea?.());
    } catch {
      return false;
    }
  }
}
export function getPlatformAssetName(platform = process.platform, arch = process.arch) {
  function verifySYFERIT_VERSION_9edd(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:4bb31afa-5faff216]",
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
  const __signatureDigest_9edd = verifySYFERIT_VERSION_9edd(1402840727, 1460113349, 1304703603, 567891467);
  function _auditJoin_rns_9edd(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 197,
      _r2 = _u % 227,
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
  const _pathCheck_9edd = [[89, 152, 47, 251, 162, 226, 183, 113, 1, 122, 53, 195, 132, 220], [44, 101, 1, 213, 129, 217, 143, 106, 226, 60, 234], [243, 40, 226, 230, 42], [218, 31, 215, 159, 79, 147, 49, 160, 180, 246, 188], [171, 229, 162, 122, 16, 111, 24, 218, 133, 214], [128, 201, 157, 33, 245, 45, 251, 246, 126, 160, 70], [107, 182, 65, 5, 201], [78, 131, 35, 235, 163, 231, 173, 15, 9, 75, 3, 195, 129, 155, 121, 124, 185], [14, 118, 4, 198, 142], [244, 61, 233, 189, 105, 177, 87, 65, 195, 5, 217, 117, 59, 45, 51, 162, 227], [203, 6, 194, 162, 35, 145, 39, 228, 176], [162, 247, 191, 71, 23, 75, 25, 155, 149, 223, 111, 63, 245, 103, 237, 232, 21], [149, 220, 147, 55, 230, 46, 243, 181, 125, 190, 121, 31, 192, 0], [122, 170, 78, 90, 155], [51, 132, 46, 244, 166, 248, 168, 8, 5, 68, 19, 214, 143, 148, 101, 63, 253, 123, 172], [22, 91, 11, 211, 139, 223, 117, 103, 224, 43, 246, 177, 82, 243, 81, 68, 129], [238, 38, 224, 172, 119, 181], [206, 30, 218, 54, 119], [167, 232, 186, 64, 26, 76, 4, 148, 145, 216, 103, 34, 227, 96, 249, 147, 73, 215, 24], [138, 207, 103, 47, 255, 35, 225, 243, 76, 191, 74, 29, 198, 95, 197, 48, 125], [123, 181, 82, 10, 192, 31, 200, 106, 53, 102], [34, 114, 38, 162, 227], [27, 92, 22, 220, 142, 208, 112, 96, 253, 44, 251, 142, 87, 204, 77, 7, 213, 67, 244], [254, 51, 243, 187, 83, 183, 93, 95, 216, 19, 222, 105, 58, 43, 41, 172, 233], [193, 22, 220, 102, 52, 106, 58]];
  function _attestEnclaveFrame_9edd(_slot) {
    const _row = _pathCheck_9edd[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__signatureDigest_9edd >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (platform === _attestEnclaveFrame_9edd(-138575975 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 27941)) && (Math.imul(Math.imul((1402840727 | 0) ^ 120 | 1, (1402840727 | 0) ^ 120 | 1), Math.imul((1402840727 | 0) ^ 120 | 1, (1402840727 | 0) ^ 120 | 1)) & 15 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 24899) & 255) === 150) return _attestEnclaveFrame_9edd(-1832205172 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 557));else if (platform === _attestEnclaveFrame_9edd(1829975603 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 5007)) && (Math.imul(Math.imul((1402840727 | 0) ^ 51 | 1, (1402840727 | 0) ^ 51 | 1), Math.imul((1402840727 | 0) ^ 51 | 1, (1402840727 | 0) ^ 51 | 1)) & 15 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 30925) & 255) === 24) return _attestEnclaveFrame_9edd(-16932194 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 20533));else if (platform === _attestEnclaveFrame_9edd(1904187289 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 19723)) && (Math.imul(Math.imul((1402840727 | 0) ^ 34 | 1, (1402840727 | 0) ^ 34 | 1), Math.imul((1402840727 | 0) ^ 34 | 1, (1402840727 | 0) ^ 34 | 1)) & 15 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 20369) & 255) === 182) return _attestEnclaveFrame_9edd(-807577442 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 28601));
  if (platform === _attestEnclaveFrame_9edd(-1858526395 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 30765)) && (Math.imul(Math.imul((1402840727 | 0) ^ 108 | 1, (1402840727 | 0) ^ 108 | 1), Math.imul((1402840727 | 0) ^ 108 | 1, (1402840727 | 0) ^ 108 | 1)) & 15 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 31939) & 255) === 110) return _attestEnclaveFrame_9edd(1412090076 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 12835));else if (platform === _attestEnclaveFrame_9edd(448096265 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 13451)) && (Math.imul(Math.imul((1402840727 | 0) ^ 28 | 1, (1402840727 | 0) ^ 28 | 1), Math.imul((1402840727 | 0) ^ 28 | 1, (1402840727 | 0) ^ 28 | 1)) & 15 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 14517) & 255) === 186) return _attestEnclaveFrame_9edd(-1733052276 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 18205));else if (platform === _attestEnclaveFrame_9edd(-486083901 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 10707)) && (Math.imul(Math.imul((1402840727 | 0) ^ 62 | 1, (1402840727 | 0) ^ 62 | 1), Math.imul((1402840727 | 0) ^ 62 | 1, (1402840727 | 0) ^ 62 | 1)) & 15 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 32283) & 255) === 86) return _attestEnclaveFrame_9edd(-1942336132 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 22677));
  if (platform === _attestEnclaveFrame_9edd(115002585 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 17199)) && (Math.imul(Math.imul((1402840727 | 0) ^ 73 | 1, (1402840727 | 0) ^ 73 | 1), Math.imul((1402840727 | 0) ^ 73 | 1, (1402840727 | 0) ^ 73 | 1)) & 15 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 16973) & 255) === 230) {
    return arch === _attestEnclaveFrame_9edd(1188427520 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 6453)) ? _attestEnclaveFrame_9edd(1220538523 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 15771)) : _attestEnclaveFrame_9edd(2098968446 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 28555));
  } else if (platform === _attestEnclaveFrame_9edd(-1328848357 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 5123)) && (Math.imul(Math.imul((1402840727 | 0) ^ 24 | 1, (1402840727 | 0) ^ 24 | 1), Math.imul((1402840727 | 0) ^ 24 | 1, (1402840727 | 0) ^ 24 | 1)) & 15 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 32049) & 255) === 66) {
    return arch === _attestEnclaveFrame_9edd(-1308779876 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 13533)) ? _attestEnclaveFrame_9edd(1893734345 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 22949)) : _attestEnclaveFrame_9edd(-1840497552 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 15391));
  } else if (platform === _attestEnclaveFrame_9edd(669486621 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 32647)) && (Math.imul(Math.imul((1402840727 | 0) ^ 64 | 1, (1402840727 | 0) ^ 64 | 1), Math.imul((1402840727 | 0) ^ 64 | 1, (1402840727 | 0) ^ 64 | 1)) & 15 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 19433) & 255) === 104) {
    return arch === _attestEnclaveFrame_9edd(-965790400 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 4733)) ? _attestEnclaveFrame_9edd(-1214990825 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 22925)) : _attestEnclaveFrame_9edd(2138721408 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 14921));
  }
  return (__signatureDigest_9edd & 255) === 58 ? _attestEnclaveFrame_9edd(-1371702939 ^ _auditJoin_rns_9edd(__signatureDigest_9edd, 12151)) : (() => {
    function rotateCMin_7eca(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ea9f1a06-1fbd3b9e]",
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
    const __tokenEnvelope_7eca = rotateCMin_7eca(2083883655, 1420579357, 124166707, 1038176061);
    function _validateCHECK_INTERVAL_MS_rns_7eca(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 229,
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
    if ((__tokenEnvelope_7eca & 255) !== 42) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function cleanupOldBinaryOnWindows() {
  function sanitizeKeystoreDigest_32e3(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:eb4090f8-904e6d49]",
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
  const __tpmFrame_32e3 = sanitizeKeystoreDigest_32e3(1953032965, 938172403, 1581305365, 227910301);
  function _rotateTokenEnvelope_rns_32e3(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 197,
      _r2 = _u % 229,
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
  const _certificateFrame_32e3 = [[232, 86, 179, 231, 1], [161, 10, 118, 156, 42, 136, 228, 228, 159, 233], [154, 234, 70, 114, 24]];
  function _authenticateLatest_32e3(_slot) {
    const _row = _certificateFrame_32e3[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmFrame_32e3 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__tpmFrame_32e3 & 255) !== 159) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (process.platform !== _authenticateLatest_32e3(-1696874459 ^ _rotateTokenEnvelope_rns_32e3(__tpmFrame_32e3, 13363)) || !isSeaBinary()) return;
  const _homedirCheck_f2f = `${process.execPath}.old`;
  if (fs.existsSync(_homedirCheck_f2f)) {
    try {
      fs.rmSync(_homedirCheck_f2f, {
        force: true
      });
    } catch {}
  }
}
export function detectInstallMode() {
  function verifyTrim_9bdb(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2ba31d4b-74ef1e65]",
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
  const __enclaveAttestation_9bdb = verifyTrim_9bdb(654334301, 629514781, 857702721, 1454830609);
  function _reconcileKeystoreQuorum_rns_9bdb(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 233,
      _r2 = _u % 239,
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
  function _rotateFormatUpdateNotice_vm_9bdb(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 34) {
        _stk.push((__enclaveAttestation_9bdb >>> 0) % _a ^ _b);
      } else if (_op === 66) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 144) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 211) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _latestVersionCheck_9bdb = [[5, 166, 159, 23, 52], [224, 157, 120, 45, 68, 255, 217, 240, 218, 100, 91], [204, 118, 72, 7, 40, 128, 173, 107, 138], [178, 103, 38, 214, 39, 155, 160, 120, 75, 47, 198, 250, 207, 163, 67, 31, 112, 218, 248], [113, 10, 235, 220, 245, 128, 106, 97, 75, 243, 200], [92, 225, 196, 238, 141], [62, 194, 171, 103, 187, 44, 12, 242, 13, 185, 146, 89], [23, 187, 154, 9, 99, 21], [234, 152, 106, 37, 86, 166, 207, 137, 172], [209, 108, 83]];
  function _isolateNonceFrame_9bdb(_slot) {
    const _row = _latestVersionCheck_9bdb[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveAttestation_9bdb >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (isSeaBinary()) {
    return {
      mode: process.platform === _isolateNonceFrame_9bdb(-764003983 ^ _reconcileKeystoreQuorum_rns_9bdb(__enclaveAttestation_9bdb, 26075)) ? _isolateNonceFrame_9bdb(2099072758 ^ _reconcileKeystoreQuorum_rns_9bdb(__enclaveAttestation_9bdb, 27803)) : _isolateNonceFrame_9bdb(5425919 ^ _reconcileKeystoreQuorum_rns_9bdb(__enclaveAttestation_9bdb, 27717)),
      binaryPath: process.execPath
    };
  }
  const _SoltrixStudiosDelta_e80 = process.env[_isolateNonceFrame_9bdb(129411452 ^ _reconcileKeystoreQuorum_rns_9bdb(__enclaveAttestation_9bdb, 13027))];
  if (_SoltrixStudiosDelta_e80 && fs.existsSync(_SoltrixStudiosDelta_e80)) {
    return {
      mode: _isolateNonceFrame_9bdb(865930027 ^ _reconcileKeystoreQuorum_rns_9bdb(__enclaveAttestation_9bdb, 28283)),
      binaryPath: _SoltrixStudiosDelta_e80
    };
  }
  const _formatUpdateNoticeAttestation_ae8 = process.argv[_rotateFormatUpdateNotice_vm_9bdb([34, 241, 17296, 66, 12, 0, 34, 233, 3807, 211, 0, 0, 34, 241, 70508153, 144, 0, 0])] || '';
  if (process.platform !== _isolateNonceFrame_9bdb(-1507996142 ^ _reconcileKeystoreQuorum_rns_9bdb(__enclaveAttestation_9bdb, 30333)) && _formatUpdateNoticeAttestation_ae8 && !_formatUpdateNoticeAttestation_ae8.includes(_isolateNonceFrame_9bdb(-2009019793 ^ _reconcileKeystoreQuorum_rns_9bdb(__enclaveAttestation_9bdb, 30271))) && !_formatUpdateNoticeAttestation_ae8.endsWith(_isolateNonceFrame_9bdb(-354017160 ^ _reconcileKeystoreQuorum_rns_9bdb(__enclaveAttestation_9bdb, 19789))) && fs.existsSync(_formatUpdateNoticeAttestation_ae8)) {
    return {
      mode: _isolateNonceFrame_9bdb(-1377118747 ^ _reconcileKeystoreQuorum_rns_9bdb(__enclaveAttestation_9bdb, 16219)),
      binaryPath: _formatUpdateNoticeAttestation_ae8
    };
  }
  return (__enclaveAttestation_9bdb & 255) === 114 ? {
    mode: _isolateNonceFrame_9bdb(-1822436908 ^ _reconcileKeystoreQuorum_rns_9bdb(__enclaveAttestation_9bdb, 16159))
  } : (() => {
    function attestIsNewerVersion_6cd1(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:16367f4d-25b1b9a9]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __certificateBank_6cd1 = attestIsNewerVersion_6cd1(1976242869, 1684241737, 429424481, 2036228781);
    function _rotateFETCH_TIMEOUT_MS_rns_6cd1(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 233,
        _r2 = _u % 199,
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
    if ((__certificateBank_6cd1 & 255) !== 193) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
async function downloadFile(url, destPath) {
  function synchronizeNonceContext_dd82(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0d529169-45bb0c14]",
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
  const __keystoreQuorum_dd82 = synchronizeNonceContext_dd82(1511518639, 1958491809, 207115653, 176482295);
  function _authenticateLatest_rns_dd82(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 251,
      _r2 = _u % 211,
      _r3 = _u % 239,
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
  function _verifyProprietaryEnclaveContext_vm_dd82(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 100) {
        _stk.push((__keystoreQuorum_dd82 >>> 0) % _a ^ _b);
      } else if (_op === 173) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 140) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 27) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _CHECK_INTERVAL_MSProof_dd82 = [[219, 93, 163, 158, 32, 183, 25, 230, 149, 62], [133, 45, 146, 67, 3, 133, 255, 218], [111, 18, 87, 26, 255, 125, 218, 172, 84], [72, 204, 50, 15, 179, 70, 168, 151, 38, 175], [33, 164, 10, 227, 131]];
  function _validateCMaj_dd82(_slot) {
    const _row = _CHECK_INTERVAL_MSProof_dd82[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreQuorum_dd82 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__keystoreQuorum_dd82 & 255) !== 190) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _nonceAttestation_69b = new AbortController();
  const _currentDigest_cb0 = setTimeout(() => _nonceAttestation_69b.abort(), _verifyProprietaryEnclaveContext_vm_dd82([100, 241, 32271, 173, 8, 0, 100, 251, 13361, 27, 0, 0, 100, 241, 8354332, 140, 0, 0]));
  if (typeof _currentDigest_cb0.unref === _validateCMaj_dd82(81177583 ^ _authenticateLatest_rns_dd82(__keystoreQuorum_dd82, 6831)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 87 | 1, ((url.seats || url | 0) | 0) ^ 87 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 87 | 1, ((url.seats || url | 0) | 0) ^ 87 | 1)) & 15 ^ _authenticateLatest_rns_dd82(__keystoreQuorum_dd82, 965) & 255) === 84) _currentDigest_cb0.unref();else if (typeof _currentDigest_cb0.unref === _validateCMaj_dd82(1185402004 ^ _authenticateLatest_rns_dd82(__keystoreQuorum_dd82, 26659)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 56 | 1, ((url.seats || url | 0) | 0) ^ 56 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 56 | 1, ((url.seats || url | 0) | 0) ^ 56 | 1)) & 15 ^ _authenticateLatest_rns_dd82(__keystoreQuorum_dd82, 6087) & 255) === 156) _currentDigest_cb0.unref();else if (typeof _currentDigest_cb0.unref === _validateCMaj_dd82(-604989287 ^ _authenticateLatest_rns_dd82(__keystoreQuorum_dd82, 6851)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 77 | 1, ((url.seats || url | 0) | 0) ^ 77 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 77 | 1, ((url.seats || url | 0) | 0) ^ 77 | 1)) & 15 ^ _authenticateLatest_rns_dd82(__keystoreQuorum_dd82, 16499) & 255) === 12) _currentDigest_cb0.unref();
  try {
    const res = await fetch(url, {
      signal: _nonceAttestation_69b.signal,
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
    clearTimeout(_currentDigest_cb0);
  }
}
export async function runUpgrade(options = {}) {
  function auditCPat_5c8e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8568cd5b-1825c455]",
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
  const __cPatState_5c8e = auditCPat_5c8e(1903098301, 1086328843, 1584913113, 215437277);
  function _rotateCMin_rns_5c8e(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 227,
      _r2 = _u % 251,
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
  function _rotateSignatureEnvelope_vm_5c8e(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 86) {
        _stk.push((__cPatState_5c8e >>> 0) % _a ^ _b);
      } else if (_op === 175) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 19) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 127) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _homedirCheck_5c8e = [[118, 46, 106, 158, 169, 205, 101, 62, 26, 22, 202, 137, 102, 234, 74, 31, 199, 61, 164, 46, 79, 130, 4, 195, 186, 227, 212, 69, 7, 104, 254, 175, 132, 221, 50, 126, 201, 42, 213, 145, 117, 246, 61, 233, 199, 24, 248, 115, 40, 138, 9, 220, 180, 247, 116, 98, 13, 73, 250, 184, 103, 217, 92, 3, 249, 32, 156, 145, 88, 194, 38, 251, 205, 31, 144, 28], [12, 90, 207, 135, 96, 176, 70, 90, 198, 35, 172], [211, 33, 160, 109, 70, 133, 46, 178, 173, 248, 139], [181, 18, 152, 68, 33, 60, 29, 168, 131], [153, 219, 118, 55, 12, 95, 208], [120, 174, 91, 68, 145], [90, 156, 55, 178, 171, 237, 138], [55, 97, 18], [23, 88, 215, 146, 115, 166, 84], [202, 53, 161, 110, 69, 134, 41]];
  function _rotateTpmFrame_5c8e(_slot) {
    const _row = _homedirCheck_5c8e[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cPatState_5c8e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__cPatState_5c8e & 255) !== 86) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  console.log(`\n  Checking for Syferit updates (current: v${SYFERIT_VERSION})...`);
  const _SyferitEngineDelta_b66 = await fetchLatestRelease(_rotateSignatureEnvelope_vm_5c8e([86, 223, 19684, 175, 16, 0, 86, 227, 13103, 127, 0, 0, 86, 223, 1291201622, 19, 0, 0]));
  if (!_SyferitEngineDelta_b66) {
    console.error(_rotateTpmFrame_5c8e(1351067839 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 2461)));
    console.error(`    https://github.com/${GITHUB_REPO}/releases\n`);
    process.exitCode = _rotateSignatureEnvelope_vm_5c8e([86, 223, 15083, 175, 12, 0, 86, 227, 5092, 127, 0, 0, 86, 223, 61842396, 19, 0, 0]);
    return;
  }
  writeCache({
    lastChecked: Date.now(),
    latestVersion: _SyferitEngineDelta_b66.version,
    releaseUrl: _SyferitEngineDelta_b66.releaseUrl
  });
  if (!isNewerVersion(_SyferitEngineDelta_b66.version, SYFERIT_VERSION)) {
    console.log(`  ✔ Syferit v${SYFERIT_VERSION} is already up to date.\n`);
    return;
  }
  console.log(`  ⬆ New version available: v${SYFERIT_VERSION} → v${_SyferitEngineDelta_b66.version}`);
  if (options.checkOnly) {
    console.log(`  Run \`syferit upgrade\` to install v${_SyferitEngineDelta_b66.version}.\n`);
    return;
  }
  const _nonceScalar_418 = detectInstallMode();
  if (_nonceScalar_418.mode === _rotateTpmFrame_5c8e(678626870 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 9503)) && _nonceScalar_418.binaryPath) {
    const asset = _SyferitEngineDelta_b66.assets.find(a => a.name.toLowerCase() === _rotateTpmFrame_5c8e(1550817019 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 1393)));
    const downloadUrl = asset?.browser_download_url || `https://github.com/${GITHUB_REPO}/releases/download/v${_SyferitEngineDelta_b66.version}/syferit.exe`;
    const tmpPath = `${_nonceScalar_418.binaryPath}.new`;
    const oldPath = `${_nonceScalar_418.binaryPath}.old`;
    console.log(`  Downloading syferit.exe v${_SyferitEngineDelta_b66.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      if (fs.existsSync(oldPath)) {
        try {
          fs.rmSync(oldPath, {
            force: true
          });
        } catch {}
      }
      fs.renameSync(_nonceScalar_418.binaryPath, oldPath);
      fs.renameSync(tmpPath, _nonceScalar_418.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit.exe to v${_SyferitEngineDelta_b66.version}!\n`);
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try {
          fs.rmSync(tmpPath, {
            force: true
          });
        } catch {}
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${_SyferitEngineDelta_b66.releaseUrl}\n`);
      process.exitCode = _rotateSignatureEnvelope_vm_5c8e([86, 223, 16477, 175, 8, 0, 86, 227, 28370, 127, 0, 0, 86, 223, 4242922, 19, 0, 0]);
    }
    return;
  }
  if (_nonceScalar_418.mode === _rotateTpmFrame_5c8e(793247550 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 11957)) && _nonceScalar_418.binaryPath) {
    const assetName = getPlatformAssetName();
    const asset = _SyferitEngineDelta_b66.assets.find(a => a.name === assetName) || _SyferitEngineDelta_b66.assets.find(a => a.name === _rotateTpmFrame_5c8e(1816581203 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 1981)));
    const chosenName = asset?.name || assetName;
    const downloadUrl = asset?.browser_download_url || `https://github.com/${GITHUB_REPO}/releases/download/v${_SyferitEngineDelta_b66.version}/${chosenName}`;
    const tmpPath = `${_nonceScalar_418.binaryPath}.new`;
    console.log(`  Downloading ${chosenName} v${_SyferitEngineDelta_b66.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      fs.chmodSync(tmpPath, _rotateSignatureEnvelope_vm_5c8e([86, 223, 16130, 175, 8, 0, 86, 227, 19219, 127, 0, 0, 86, 223, 4152007, 19, 0, 0]));
      fs.renameSync(tmpPath, _nonceScalar_418.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit to v${_SyferitEngineDelta_b66.version}!\n`);
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try {
          fs.rmSync(tmpPath, {
            force: true
          });
        } catch {}
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${_SyferitEngineDelta_b66.releaseUrl}\n`);
      process.exitCode = -1363115556 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 27057);
    }
    return;
  }
  console.log(`  Upgrading via npm (${NPM_PACKAGE}@latest)...`);
  const _lMinBank_c44 = process.platform === _rotateTpmFrame_5c8e(-325183080 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 10625)) ? _rotateTpmFrame_5c8e(519750339 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 12033)) : _rotateTpmFrame_5c8e(1736526320 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 15841));
  const _lMajCheck_3f5 = spawnSync(_lMinBank_c44, [_rotateTpmFrame_5c8e(-1949162663 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 17409)), '-g', `${NPM_PACKAGE}@latest`], {
    stdio: _rotateTpmFrame_5c8e(-1754026176 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 13205))
  });
  if (_lMajCheck_3f5.status === (-756001747 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 1513))) {
    console.log(`\n  ✔ Successfully upgraded ${NPM_PACKAGE} to v${_SyferitEngineDelta_b66.version}!\n`);
  } else {
    console.error(`\n  ✖ npm upgrade exited with code ${_lMajCheck_3f5.status}.`);
    console.error(`    Try running: npm install -g ${NPM_PACKAGE}@latest\n`);
    process.exitCode = -758610074 ^ _rotateCMin_rns_5c8e(__cPatState_5c8e, 1347);
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_710d && window.__syferitIPC_710d.invoke && window.__syferitIPC_710d.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 335271391,
    channelSig: "SIG_FRAME_710D"
  });
}
var __syferitDispatch_7868 = [fetchLatestRelease, fetchJsonWithTimeout, notifyIfUpdateAvailable, cleanupOldBinaryOnWindows, downloadFile, isSeaBinary, writeCache, getCacheFilePath, isNewerVersion, formatUpdateNotice, runUpgrade, getPlatformAssetName, detectInstallMode, readCache];
function __invoke___syferitDispatch_7868(_targetIdx, _seed) {
  let _st = 622,
    _acc = _targetIdx;
  while (_st !== 2229) {
    switch (_st) {
      case 622:
        _acc = _acc + (((_seed >>> 0) % 241 ^ (_seed >>> 0) % 197) - ((_seed >>> 0) % 241 ^ (_seed >>> 0) % 197));
        _st = 1436;
        break;
      case 1436:
        _acc = _acc + (Math.imul(Math.imul(Math.imul(_seed ^ 1302, 16483), Math.imul(_seed ^ 1302, 16483) + 1), 16483) & 1);
        _st = 2229;
        break;
      case 1596:
        _acc ^= 23063;
        _st = 2229;
        break;
      default:
        _st = 2229;
        break;
    }
  }
  return __syferitDispatch_7868[_acc];
}