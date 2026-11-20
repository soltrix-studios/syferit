// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import * as sea from 'node:sea';
function attestCurrentVersion_8798(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:26da8c78-40327e3e]",
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
var __SyferitEngineQuorum_8798 = attestCurrentVersion_8798(1887773267, 1391327241, 901643995, 654021647);
function _attestClean_rns_8798(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 211,
    _r1 = _u % 199,
    _r2 = _u % 239,
    _r3 = _u % 223,
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
var _splitAttestation_8798 = [[112, 115, 222, 238, 231], [20, 237, 127, 145, 137, 127, 223, 84, 252, 222, 78, 105, 74, 81, 188, 142, 196, 171, 5, 80, 57, 15, 131], [204, 212, 65, 108, 69, 73, 165, 234, 155, 172, 12, 91]];
function _verifyQuorumAttestation_8798(_slot) {
  const _row = _splitAttestation_8798[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SyferitEngineQuorum_8798 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const SYFERIT_VERSION = _verifyQuorumAttestation_8798(-1531277959 ^ _attestClean_rns_8798(__SyferitEngineQuorum_8798, 10501));
const GITHUB_REPO = _verifyQuorumAttestation_8798(808691246 ^ _attestClean_rns_8798(__SyferitEngineQuorum_8798, 30177));
const NPM_PACKAGE = _verifyQuorumAttestation_8798(-407238265 ^ _attestClean_rns_8798(__SyferitEngineQuorum_8798, 15735));
const CHECK_INTERVAL_MS = (-1320648545 ^ _attestClean_rns_8798(__SyferitEngineQuorum_8798, 31319)) * (1943886299 ^ _attestClean_rns_8798(__SyferitEngineQuorum_8798, 4191)) * (84710291 ^ _attestClean_rns_8798(__SyferitEngineQuorum_8798, 29421)) * (1620321395 ^ _attestClean_rns_8798(__SyferitEngineQuorum_8798, 20161));
const FETCH_TIMEOUT_MS = -846714069 ^ _attestClean_rns_8798(__SyferitEngineQuorum_8798, 27887);
function getCacheFilePath() {
  function authenticateTokenBank_59f6(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ff025726-b2e2939f]",
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
  const __latestState_59f6 = authenticateTokenBank_59f6(2125127277, 979265361, 2085922963, 1273358013);
  function _sanitizeParseInt_rns_59f6(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 223,
      _r2 = _u % 197,
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
  const _pathAttestation_59f6 = [[197, 31, 207, 211, 26, 114, 35, 61], [101, 225, 191, 187, 208, 64, 66, 13, 80, 220, 96, 105, 226, 39, 228, 249, 14], [80, 216, 116, 154, 187, 58, 230, 250, 46, 187], [41, 184, 68, 72, 139]];
  function _normalizeQuorumVector_59f6(_slot) {
    const _row = _pathAttestation_59f6[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__latestState_59f6 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__latestState_59f6 & 255) === 235 ? path.join(os.homedir(), _normalizeQuorumVector_59f6(840015269 ^ _sanitizeParseInt_rns_59f6(__latestState_59f6, 14373)), _normalizeQuorumVector_59f6(-980518466 ^ _sanitizeParseInt_rns_59f6(__latestState_59f6, 31973))) : (() => {
    function verifySplit_c59e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:09053e8c-126aba69]",
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
    const __trimState_c59e = verifySplit_c59e(139840663, 1475634879, 1315401529, 1329220701);
    function _verifySplit_rns_c59e(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 199,
        _r2 = _u % 251,
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
    if ((__trimState_c59e & 255) !== 1) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isNewerVersion(latest, current) {
  function rotateQuorumBank_87ba(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b9e73d84-b834e6a9]",
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
  const __quorumBank_87ba = rotateQuorumBank_87ba(937116543, 1075769475, 1495121981, 1695122387);
  function _authenticateLatestVersion_rns_87ba(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 233,
      _r2 = _u % 211,
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
  function _authenticateCMin_vm_87ba(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 46) {
        _stk.push((__quorumBank_87ba >>> 0) % _a ^ _b);
      } else if (_op === 149) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 95) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 206) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _keystoreProration_87ba = [[13, 165, 175, 251, 225], [7, 222, 176, 159, 132, 52, 42, 231, 249, 189], [244, 182, 136, 115, 126]];
  function _rotateIsNewerVersion_87ba(_slot) {
    const _row = _keystoreProration_87ba[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumBank_87ba >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _CHECK_INTERVAL_MSFrame_3e5 = v => {
    function auditParse_603d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:236f53e0-6af3a994]",
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
    const __getCacheFilePathState_603d = auditParse_603d(1096282147, 292250077, 2030868007, 944799303);
    function _validateReplace_rns_603d(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 223,
        _r2 = _u % 239,
        _r3 = _u % 211,
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
    const _lPatProof_49f = v.trim().replace(/^v/i, '').split('-')[_authenticateCMin_vm_87ba([46, 199, 4671, 149, 12, 0, 46, 233, 30361, 206, 0, 0, 46, 199, 19416654, 95, 0, 0])] || _rotateIsNewerVersion_87ba(-993246999 ^ _authenticateLatestVersion_rns_87ba(__quorumBank_87ba, 5627));
    const _SYFERIT_VERSIONCheck_213 = _lPatProof_49f.split('.').map(n => parseInt(n, _authenticateCMin_vm_87ba([46, 199, 15010, 149, 16, 0, 46, 233, 7408, 206, 0, 0, 46, 199, 987765805, 95, 0, 0])) || _authenticateCMin_vm_87ba([46, 199, 11143, 149, 8, 0, 46, 233, 5500, 206, 0, 0, 46, 199, 2874027, 95, 0, 0]));
    return (__getCacheFilePathState_603d & 255) === 89 ? [_SYFERIT_VERSIONCheck_213[_authenticateCMin_vm_87ba([46, 199, 1092, 149, 12, 0, 46, 233, 26865, 206, 0, 0, 46, 199, 4245542, 95, 0, 0])] ?? 364795025 ^ _authenticateLatestVersion_rns_87ba(__quorumBank_87ba, 30597), _SYFERIT_VERSIONCheck_213[1425846572 ^ _authenticateLatestVersion_rns_87ba(__quorumBank_87ba, 15203)] ?? 1414287501 ^ _authenticateLatestVersion_rns_87ba(__quorumBank_87ba, 23421), _SYFERIT_VERSIONCheck_213[-200780767 ^ _authenticateLatestVersion_rns_87ba(__quorumBank_87ba, 1029)] ?? 1451014063 ^ _authenticateLatestVersion_rns_87ba(__quorumBank_87ba, 5305)] : (() => {
      function normalizeQuorumVector_7d5c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:df938abc-d8201ca6]",
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
      const __tokenDigest_7d5c = normalizeQuorumVector_7d5c(230364259, 401046575, 1185805723, 188634111);
      function _rotateLatest_rns_7d5c(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 211,
          _r1 = _u % 199,
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
      if ((__tokenDigest_7d5c & 255) !== 11) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  };
  const [_keystoreDigest_a66, _latestVersionBank_d6b, _cleanDigest_f76] = _CHECK_INTERVAL_MSFrame_3e5(latest);
  const [_nonceFrame_220, _lPatProof_53f, _pathAttestation_63b] = _CHECK_INTERVAL_MSFrame_3e5(current);
  if (_keystoreDigest_a66 !== _nonceFrame_220) return _keystoreDigest_a66 > _nonceFrame_220;
  if (_latestVersionBank_d6b !== _lPatProof_53f) return _latestVersionBank_d6b > _lPatProof_53f;
  return (__quorumBank_87ba & 255) === 61 ? _cleanDigest_f76 > _pathAttestation_63b : (() => {
    function reconcileKeystoreQuorum_1df9(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e630d753-37b9a6d0]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __quorumProof_1df9 = reconcileKeystoreQuorum_1df9(1006441095, 1488901287, 442375523, 1288685455);
    function _verifyProprietaryEnclaveContext_rns_1df9(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 199,
        _r2 = _u % 197,
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
    if ((__quorumProof_1df9 & 255) !== 26) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function formatUpdateNotice(currentVersion, latestVersion) {
  function authenticateTokenBank_4b4b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f907b51e-e2f3679d]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __formatUpdateNoticeState_4b4b = authenticateTokenBank_4b4b(1847511321, 515278543, 1375754943, 1432674401);
  function _verifyTokenProof_rns_4b4b(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 197,
      _r2 = _u % 241,
      _r3 = _u % 223,
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
  function _auditParse_vm_4b4b(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 50) {
        _stk.push((__formatUpdateNoticeState_4b4b >>> 0) % _a ^ _b);
      } else if (_op === 179) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 80) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 124) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _quorumAttestation_819 = `  ⬆  Update available: v${currentVersion} → v${latestVersion}`;
  const _cleanDigest_ff4 = `     Run \`syferit upgrade\` to update seamlessly.`;
  const _trimAttestation_cea = _auditParse_vm_4b4b([50, 211, 2696, 179, 12, 0, 50, 197, 25447, 124, 0, 0, 50, 211, 11154291, 80, 0, 0]);
  const _tokenDigest_7cb = s => s.padEnd(_trimAttestation_cea, ' ');
  return (__formatUpdateNoticeState_4b4b & 255) === 176 ? [`  ╭${'─'.repeat(_trimAttestation_cea)}╮`, `  │${_tokenDigest_7cb(_quorumAttestation_819)}│`, `  │${_tokenDigest_7cb(_cleanDigest_ff4)}│`, `  ╰${'─'.repeat(_trimAttestation_cea)}╯`].join('\n') : (() => {
    function rotateTpmCheck_7ac6(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:87e407b2-14b53ebe]",
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
    const __quorumBank_7ac6 = rotateTpmCheck_7ac6(837559385, 11250431, 128391341, 1985306947);
    function _authenticateSignatureProof_rns_7ac6(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 239,
        _r2 = _u % 197,
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
    if ((__quorumBank_7ac6 & 255) !== 144) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
function readCache() {
  function verifyTokenProof_eab0(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5c4a202a-d30d72ac]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __quorumProof_eab0 = verifyTokenProof_eab0(902782593, 771268333, 174795387, 155867031);
  function _attestTrim_rns_eab0(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 229,
      _r2 = _u % 223,
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
  const _parseIntBank_eab0 = [[101, 44, 45, 225, 156], [91, 8, 29, 147, 172, 99], [41, 214, 231, 127, 128, 81], [26, 169, 206, 94, 97, 43, 60, 166, 212, 138], [215, 143, 190, 12, 93]];
  function _auditSpawnSync_eab0(_slot) {
    const _row = _parseIntBank_eab0[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumProof_eab0 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__quorumProof_eab0 & 255) !== 16) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    const file = getCacheFilePath();
    if (!fs.existsSync(file)) return null;
    const data = JSON.parse(fs.readFileSync(file, _auditSpawnSync_eab0(260839753 ^ _attestTrim_rns_eab0(__quorumProof_eab0, 12419))));
    if (typeof data?.lastChecked === _auditSpawnSync_eab0(-1211890820 ^ _attestTrim_rns_eab0(__quorumProof_eab0, 12217)) && typeof data?.latestVersion === _auditSpawnSync_eab0(-1473514557 ^ _attestTrim_rns_eab0(__quorumProof_eab0, 22969))) {
      return data;
    }
    return null;
  } catch {
    return null;
  }
}
function writeCache(cache) {
  function isolateLine1_8393(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:446d9b08-61dea48e]",
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
  const __CHECK_INTERVAL_MSState_8393 = isolateLine1_8393(414710045, 1155879277, 1020206831, 302109467);
  function _authenticateFETCH_TIMEOUT_MS_rns_8393(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
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
  function _rotateQuorumBank_vm_8393(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 44) {
        _stk.push((__CHECK_INTERVAL_MSState_8393 >>> 0) % _a ^ _b);
      } else if (_op === 114) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 179) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 82) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _CHECK_INTERVAL_MSFrame_8393 = [[223, 52, 72, 237, 6], [170, 11, 39, 128, 17, 137, 149, 16, 132, 232], [135, 233, 25, 102, 237]];
  function _sanitizeNonceCheck_8393(_slot) {
    const _row = _CHECK_INTERVAL_MSFrame_8393[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__CHECK_INTERVAL_MSState_8393 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__CHECK_INTERVAL_MSState_8393 & 255) !== 170) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    const file = getCacheFilePath();
    fs.mkdirSync(path.dirname(file), {
      recursive: true
    });
    fs.writeFileSync(file, JSON.stringify(cache, null, _rotateQuorumBank_vm_8393([44, 233, 27085, 114, 8, 0, 44, 251, 19244, 82, 0, 0, 44, 233, 6931672, 179, 0, 0])), _sanitizeNonceCheck_8393(1923381841 ^ _authenticateFETCH_TIMEOUT_MS_rns_8393(__CHECK_INTERVAL_MSState_8393, 18439)));
  } catch {}
}
async function fetchJsonWithTimeout(url, timeoutMs = FETCH_TIMEOUT_MS) {
  function rotateJoin_a88a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ad611c60-b420e99a]",
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
  const __cleanState_a88a = rotateJoin_a88a(1879857787, 1779501155, 420484619, 932559239);
  function _authenticateCMin_rns_a88a(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 197,
      _r2 = _u % 211,
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
  const _pathAttestation_a88a = [[121, 52, 78, 151, 194, 134, 214, 21, 33, 230, 20, 127, 164, 120], [89, 245, 38, 111, 167, 125, 179, 206], [1, 203, 25, 84, 138, 73, 115, 172, 255, 168], [232, 186, 226, 58, 116, 61, 71, 158, 216, 157, 212, 81, 51, 232, 42, 60, 190, 115, 150, 206, 24, 204, 93, 80, 114, 45, 100], [203, 129, 195, 30, 48, 243, 57, 102, 165, 114], [160, 119, 189, 204, 2]];
  function _sanitizeParseInt_a88a(_slot) {
    const _row = _pathAttestation_a88a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cleanState_a88a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__cleanState_a88a & 255) !== 26) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _quorumProof_f40 = new AbortController();
  const _cPatFrame_8e8 = setTimeout(() => _quorumProof_f40.abort(), timeoutMs);
  if (typeof _cPatFrame_8e8.unref === _sanitizeParseInt_a88a(1459080041 ^ _authenticateCMin_rns_a88a(__cleanState_a88a, 21531)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 116 | 1, ((url.seats || url | 0) | 0) ^ 116 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 116 | 1, ((url.seats || url | 0) | 0) ^ 116 | 1)) & 15 ^ _authenticateCMin_rns_a88a(__cleanState_a88a, 1719) & 255) === 60) _cPatFrame_8e8.unref();else if (typeof _cPatFrame_8e8.unref === _sanitizeParseInt_a88a(-1649167716 ^ _authenticateCMin_rns_a88a(__cleanState_a88a, 12983)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 33 | 1, ((url.seats || url | 0) | 0) ^ 33 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 33 | 1, ((url.seats || url | 0) | 0) ^ 33 | 1)) & 15 ^ _authenticateCMin_rns_a88a(__cleanState_a88a, 4653) & 255) === 118) _cPatFrame_8e8.unref();else if (typeof _cPatFrame_8e8.unref === _sanitizeParseInt_a88a(718368409 ^ _authenticateCMin_rns_a88a(__cleanState_a88a, 31829)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 96 | 1, ((url.seats || url | 0) | 0) ^ 96 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 96 | 1, ((url.seats || url | 0) | 0) ^ 96 | 1)) & 15 ^ _authenticateCMin_rns_a88a(__cleanState_a88a, 26111) & 255) === 230) _cPatFrame_8e8.unref();
  try {
    const res = await fetch(url, {
      signal: _quorumProof_f40.signal,
      headers: {
        'User-Agent': `syferit-cli/${SYFERIT_VERSION}`,
        'Accept': _sanitizeParseInt_a88a(-1226824634 ^ _authenticateCMin_rns_a88a(__cleanState_a88a, 2893))
      }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(_cPatFrame_8e8);
  }
}
export async function fetchLatestRelease(timeoutMs = FETCH_TIMEOUT_MS) {
  function sanitizeHomedir_179e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:5e79b514-4eb8213c]",
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
  const __keystoreDigest_179e = sanitizeHomedir_179e(1876484851, 1636326577, 402357845, 728695989);
  function _sanitizeFormatUpdateNotice_rns_179e(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 199,
      _r2 = _u % 223,
      _r3 = _u % 197,
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
  const _SyferitEngineDelta_179e = [[184, 208, 235, 217, 49, 95], [151, 160, 202, 189, 241, 63], [102, 154, 145, 147, 199, 229], [84, 99, 101], [58, 86, 89, 33, 129, 188, 179, 177, 244, 5], [247, 62, 51, 5, 125]];
  function _isolateCPat_179e(_slot) {
    const _row = _SyferitEngineDelta_179e[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreDigest_179e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _getCacheFilePathFrame_13f = await fetchJsonWithTimeout(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, timeoutMs);
  if (_getCacheFilePathFrame_13f && typeof _getCacheFilePathFrame_13f.tag_name === _isolateCPat_179e(431252533 ^ _sanitizeFormatUpdateNotice_rns_179e(__keystoreDigest_179e, 9873))) {
    const version = _getCacheFilePathFrame_13f.tag_name.replace(/^v/i, '');
    const assets = Array.isArray(_getCacheFilePathFrame_13f.assets) ? _getCacheFilePathFrame_13f.assets.map(a => ({
      name: String(a.name ?? ''),
      browser_download_url: String(a.browser_download_url ?? '')
    })) : [];
    return {
      version,
      releaseUrl: String(_getCacheFilePathFrame_13f.html_url || `https://github.com/${GITHUB_REPO}/releases/latest`),
      assets,
      source: _isolateCPat_179e(1530777754 ^ _sanitizeFormatUpdateNotice_rns_179e(__keystoreDigest_179e, 2023))
    };
  }
  const _cMinAttestation_7e3 = await fetchJsonWithTimeout(`https://registry.npmjs.org/${NPM_PACKAGE}/latest`, timeoutMs);
  if (_cMinAttestation_7e3 && typeof _cMinAttestation_7e3.version === _isolateCPat_179e(-28290479 ^ _sanitizeFormatUpdateNotice_rns_179e(__keystoreDigest_179e, 22349))) {
    return {
      version: _cMinAttestation_7e3.version,
      releaseUrl: `https://github.com/${GITHUB_REPO}/releases`,
      assets: [],
      source: _isolateCPat_179e(-1906333018 ^ _sanitizeFormatUpdateNotice_rns_179e(__keystoreDigest_179e, 6149))
    };
  }
  return (__keystoreDigest_179e & 255) === 203 ? null : (() => {
    function verifySyferitEngineContext_b64d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8e9f95ff-ce8c5ce3]",
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
    const __keystoreQuorum_b64d = verifySyferitEngineContext_b64d(1871582277, 112714387, 1536168257, 1003216407);
    function _reconcileKeystoreQuorum_rns_b64d(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 251,
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
    if ((__keystoreQuorum_b64d & 255) !== 41) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function notifyIfUpdateAvailable(quiet = false) {
  function sanitizeParseInt_4d1f(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6f0ff19c-68ce134e]",
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
  const __quorumProof_4d1f = sanitizeParseInt_4d1f(1319445483, 1272168289, 1848372841, 1700502021);
  function _verifyTokenDigest_rns_4d1f(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 241,
      _r2 = _u % 251,
      _r3 = _u % 227,
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
  const _SyferitEngineDelta_4d1f = [[223, 194, 21, 210, 114, 102, 179, 116, 250, 140, 36, 234, 24, 19, 78, 7, 153, 180, 224, 175, 53, 60, 124], [197, 178, 13, 217], [179, 139, 233, 132, 24, 9, 67, 28, 141, 104], [136, 105, 163, 106, 234]];
  function _rotateTpmCheck_4d1f(_slot) {
    const _row = _SyferitEngineDelta_4d1f[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumProof_4d1f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__quorumProof_4d1f & 255) !== 140) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (quiet) return;
  if (process.env[_rotateTpmCheck_4d1f(-277635355 ^ _verifyTokenDigest_rns_4d1f(__quorumProof_4d1f, 31053))] === '1' || process.env['CI'] === _rotateTpmCheck_4d1f(1044578884 ^ _verifyTokenDigest_rns_4d1f(__quorumProof_4d1f, 9753))) {
    return;
  }
  const _quorumBank_66f = readCache();
  if (_quorumBank_66f && isNewerVersion(_quorumBank_66f.latestVersion, SYFERIT_VERSION)) {
    console.log(formatUpdateNotice(SYFERIT_VERSION, _quorumBank_66f.latestVersion) + '\n');
  }
  const _keystoreDigest_55a = Date.now();
  if (!_quorumBank_66f || _keystoreDigest_55a - _quorumBank_66f.lastChecked >= CHECK_INTERVAL_MS) {
    void fetchLatestRelease(FETCH_TIMEOUT_MS).then(info => {
      function verifyProprietaryEnclaveContext_6b1a(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bf524904-e001f2ed]",
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
      const __quorumProof_6b1a = verifyProprietaryEnclaveContext_6b1a(855638683, 159299911, 81835365, 315409781);
      function _authenticateLMaj_rns_6b1a(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 227,
          _r1 = _u % 229,
          _r2 = _u % 239,
          _r3 = _u % 211,
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
      if ((__quorumProof_6b1a & 255) !== 79) {
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
  function auditGetCacheFilePath_bc0a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4a60e548-29074827]",
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
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __latestVersionState_bc0a = auditGetCacheFilePath_bc0a(251470177, 2010400661, 423531071, 1130742621);
  function _verifyEnclaveFrame_rns_bc0a(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 241,
      _r2 = _u % 223,
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
  const _CHECK_INTERVAL_MSFrame_bc0a = [[144, 155, 84, 199, 168, 251, 161, 87], [70, 119, 33, 162, 197, 221, 155, 50, 56, 36], [59, 93, 27, 128, 185]];
  function _verifySplit_bc0a(_slot) {
    const _row = _CHECK_INTERVAL_MSFrame_bc0a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__latestVersionState_bc0a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__latestVersionState_bc0a & 255) !== 254) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    return Boolean(sea?.isSea?.());
  } catch {
    try {
      const builtinSea = process.getBuiltinModule?.(_verifySplit_bc0a(-558409239 ^ _verifyEnclaveFrame_rns_bc0a(__latestVersionState_bc0a, 12655)));
      return Boolean(builtinSea?.isSea?.());
    } catch {
      return false;
    }
  }
}
export function getPlatformAssetName(platform = process.platform, arch = process.arch) {
  function attestTrim_828b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b0a718a6-58c0248b]",
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
  const __quorumProof_828b = attestTrim_828b(816279235, 1851581331, 142091143, 1202223491);
  function _verifyEnclaveAttestation_rns_828b(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 227,
      _r2 = _u % 233,
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
  const _splitAttestation_828b = [[157, 79, 101, 125, 237, 216, 200, 195, 70], [108, 60, 94, 34, 193, 176, 184, 245, 34, 21, 5], [51, 3, 51, 95, 234], [26, 246, 228, 244, 143, 74, 98, 11, 244, 207, 207], [253, 215, 198, 218, 71], [192, 160, 170, 190, 53, 4, 20, 65, 190, 121, 145], [189, 144, 133, 101, 30, 226, 247, 253, 115, 67], [142, 90, 112, 64, 227, 222, 222, 148, 73, 34, 80, 56, 193, 242, 170, 215, 121], [78, 33, 85, 63, 206], [52, 20, 6, 10, 169, 104, 128, 46, 3, 252, 230, 226, 123, 4, 100, 29, 163], [15, 253, 232, 228, 108, 79, 120, 70, 247, 223, 242, 204, 90, 33], [226, 206, 204, 220, 87, 34, 74, 96, 213, 182, 188, 148, 53, 94, 30, 67, 213], [209, 179, 185, 129, 41, 28, 12, 7, 186], [186, 115, 153, 53, 91], [115, 95, 127, 77, 230, 211, 217, 145, 69, 47, 34, 63, 207, 207, 180, 150, 61, 64, 93], [86, 50, 88, 40, 203, 182, 166, 204, 32, 18, 5, 26, 146, 42, 130, 63, 65], [46, 17, 17, 5, 183, 106], [14, 231, 229, 161, 55], [231, 195, 203, 217, 90, 39, 53, 125, 209, 131, 182, 139, 35, 91, 8, 10, 137, 60, 201], [202, 166, 180, 132, 63, 26, 18, 88, 140, 102, 153, 102, 6, 182, 246, 171, 61], [173, 103, 150, 106, 23], [98, 91, 113, 29, 163], [91, 55, 39, 53, 206, 139, 161, 201, 61, 23, 10, 23, 151, 39, 156, 126, 21, 168, 165], [62, 10, 0, 16, 147, 110, 142, 36, 24, 250, 237, 242, 122, 2, 90, 7, 169], [1, 225, 237, 255, 116, 69, 107]];
  function _authenticateNPM_PACKAGE_828b(_slot) {
    const _row = _splitAttestation_828b[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumProof_828b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (platform === _authenticateNPM_PACKAGE_828b(-1527226363 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 26537)) && (Math.imul(Math.imul((816279235 | 0) ^ 47 | 1, (816279235 | 0) ^ 47 | 1), Math.imul((816279235 | 0) ^ 47 | 1, (816279235 | 0) ^ 47 | 1)) & 15 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 19489) & 255) === 28) return _authenticateNPM_PACKAGE_828b(-1478444454 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 21487));else if (platform === _authenticateNPM_PACKAGE_828b(1273550295 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 5349)) && (Math.imul(Math.imul((816279235 | 0) ^ 108 | 1, (816279235 | 0) ^ 108 | 1), Math.imul((816279235 | 0) ^ 108 | 1, (816279235 | 0) ^ 108 | 1)) & 15 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 32653) & 255) === 212) return _authenticateNPM_PACKAGE_828b(-837260522 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 16141));else if (platform === _authenticateNPM_PACKAGE_828b(1266134465 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 26403)) && (Math.imul(Math.imul((816279235 | 0) ^ 111 | 1, (816279235 | 0) ^ 111 | 1), Math.imul((816279235 | 0) ^ 111 | 1, (816279235 | 0) ^ 111 | 1)) & 15 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 32269) & 255) === 68) return _authenticateNPM_PACKAGE_828b(1597787070 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 503));
  if (platform === _authenticateNPM_PACKAGE_828b(318563671 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 29413)) && (Math.imul(Math.imul((816279235 | 0) ^ 70 | 1, (816279235 | 0) ^ 70 | 1), Math.imul((816279235 | 0) ^ 70 | 1, (816279235 | 0) ^ 70 | 1)) & 15 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 31577) & 255) === 8) return _authenticateNPM_PACKAGE_828b(-306301778 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 21503));else if (platform === _authenticateNPM_PACKAGE_828b(-1664175023 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 32183)) && (Math.imul(Math.imul((816279235 | 0) ^ 57 | 1, (816279235 | 0) ^ 57 | 1), Math.imul((816279235 | 0) ^ 57 | 1, (816279235 | 0) ^ 57 | 1)) & 15 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 1845) & 255) === 108) return _authenticateNPM_PACKAGE_828b(-258444406 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 15725));else if (platform === _authenticateNPM_PACKAGE_828b(-2132320315 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 30859)) && (Math.imul(Math.imul((816279235 | 0) ^ 118 | 1, (816279235 | 0) ^ 118 | 1), Math.imul((816279235 | 0) ^ 118 | 1, (816279235 | 0) ^ 118 | 1)) & 15 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 21133) & 255) === 250) return _authenticateNPM_PACKAGE_828b(1530818992 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 11853));
  if (platform === _authenticateNPM_PACKAGE_828b(1766289025 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 2007)) && (Math.imul(Math.imul((816279235 | 0) ^ 86 | 1, (816279235 | 0) ^ 86 | 1), Math.imul((816279235 | 0) ^ 86 | 1, (816279235 | 0) ^ 86 | 1)) & 15 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 18007) & 255) === 106) {
    return arch === _authenticateNPM_PACKAGE_828b(-1984500702 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 17497)) ? _authenticateNPM_PACKAGE_828b(-427201653 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 6141)) : _authenticateNPM_PACKAGE_828b(1467171498 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 23519));
  } else if (platform === _authenticateNPM_PACKAGE_828b(963099811 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 26689)) && (Math.imul(Math.imul((816279235 | 0) ^ 107 | 1, (816279235 | 0) ^ 107 | 1), Math.imul((816279235 | 0) ^ 107 | 1, (816279235 | 0) ^ 107 | 1)) & 15 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 7321) & 255) === 114) {
    return arch === _authenticateNPM_PACKAGE_828b(-1166788254 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 403)) ? _authenticateNPM_PACKAGE_828b(1420689209 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 25675)) : _authenticateNPM_PACKAGE_828b(1321169140 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 9693));
  } else if (platform === _authenticateNPM_PACKAGE_828b(591674255 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 17427)) && (Math.imul(Math.imul((816279235 | 0) ^ 93 | 1, (816279235 | 0) ^ 93 | 1), Math.imul((816279235 | 0) ^ 93 | 1, (816279235 | 0) ^ 93 | 1)) & 15 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 13069) & 255) === 252) {
    return arch === _authenticateNPM_PACKAGE_828b(-664355672 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 12947)) ? _authenticateNPM_PACKAGE_828b(1363345497 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 32161)) : _authenticateNPM_PACKAGE_828b(218977048 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 2957));
  }
  return (__quorumProof_828b & 255) === 250 ? _authenticateNPM_PACKAGE_828b(-1852300939 ^ _verifyEnclaveAttestation_rns_828b(__quorumProof_828b, 2613)) : (() => {
    function reconcileKeystoreQuorum_9906(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:30766651-d63f72b8]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __formatUpdateNoticeState_9906 = reconcileKeystoreQuorum_9906(1698109261, 853066023, 1657259553, 1129847059);
    function _isolateKeystoreDigest_rns_9906(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 227,
        _r2 = _u % 229,
        _r3 = _u % 233,
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
    if ((__formatUpdateNoticeState_9906 & 255) !== 54) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function cleanupOldBinaryOnWindows() {
  function verifyTokenProof_fdbf(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:984dba1f-8d4e6ee1]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __enclaveBank_fdbf = verifyTokenProof_fdbf(1284189813, 113030781, 688176571, 1797092119);
  function _authenticateSignatureProof_rns_fdbf(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 233,
      _r2 = _u % 251,
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
  const _latestVersionBank_fdbf = [[199, 6, 175, 157, 118], [176, 250, 146, 182, 27, 88, 8, 14, 142, 217], [137, 218, 106, 148, 235]];
  function _authenticateFETCH_TIMEOUT_MS_fdbf(_slot) {
    const _row = _latestVersionBank_fdbf[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveBank_fdbf >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__enclaveBank_fdbf & 255) !== 176) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (process.platform !== _authenticateFETCH_TIMEOUT_MS_fdbf(-1990501725 ^ _authenticateSignatureProof_rns_fdbf(__enclaveBank_fdbf, 7913)) || !isSeaBinary()) return;
  const _line1Bank_89e = `${process.execPath}.old`;
  if (fs.existsSync(_line1Bank_89e)) {
    try {
      fs.rmSync(_line1Bank_89e, {
        force: true
      });
    } catch {}
  }
}
export function detectInstallMode() {
  function auditParse_ff40(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e69a683b-9e550c7a]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __replaceState_ff40 = auditParse_ff40(760173153, 47671357, 1727770595, 1903737519);
  function _auditTpmState_rns_ff40(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 233,
      _r2 = _u % 251,
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
  function _auditQuorumProof_vm_ff40(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 53) {
        _stk.push((__replaceState_ff40 >>> 0) % _a ^ _b);
      } else if (_op === 117) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 196) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 97) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _replaceEnvelope_ff40 = [[170, 254, 7, 222, 67], [117, 213, 224, 118, 249, 39, 81, 139, 79, 156, 211], [87, 142, 192, 94, 195, 88, 37, 162, 33], [31, 95, 158, 25, 178, 211, 56, 175, 54, 103, 78, 197, 90, 155, 203, 72, 221, 2, 96], [6, 66, 147, 229, 106, 200, 226, 56, 252, 43, 64], [225, 57, 76, 149, 24], [213, 26, 35, 174, 16, 100, 180, 59, 150, 241, 10, 128], [130, 243, 2, 222, 30, 93], [117, 208, 226, 124, 225, 126, 71, 192, 67], [68, 148, 219]];
  function _verifyQuorumAttestation_ff40(_slot) {
    const _row = _replaceEnvelope_ff40[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__replaceState_ff40 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (isSeaBinary()) {
    return {
      mode: process.platform === _verifyQuorumAttestation_ff40(881821951 ^ _auditTpmState_rns_ff40(__replaceState_ff40, 10639)) ? _verifyQuorumAttestation_ff40(1787944536 ^ _auditTpmState_rns_ff40(__replaceState_ff40, 12195)) : _verifyQuorumAttestation_ff40(-1800084967 ^ _auditTpmState_rns_ff40(__replaceState_ff40, 24651)),
      binaryPath: process.execPath
    };
  }
  const _quorumDigest_2f8 = process.env[_verifyQuorumAttestation_ff40(-2007579760 ^ _auditTpmState_rns_ff40(__replaceState_ff40, 1381))];
  if (_quorumDigest_2f8 && fs.existsSync(_quorumDigest_2f8)) {
    return {
      mode: _verifyQuorumAttestation_ff40(2003703205 ^ _auditTpmState_rns_ff40(__replaceState_ff40, 29909)),
      binaryPath: _quorumDigest_2f8
    };
  }
  const _tpmCheck_d84 = process.argv[_auditQuorumProof_vm_ff40([53, 197, 3890, 117, 7, 0, 53, 233, 15933, 97, 0, 0, 53, 197, 510012, 196, 0, 0])] || '';
  if (process.platform !== _verifyQuorumAttestation_ff40(-1685969172 ^ _auditTpmState_rns_ff40(__replaceState_ff40, 18565)) && _tpmCheck_d84 && !_tpmCheck_d84.includes(_verifyQuorumAttestation_ff40(172392013 ^ _auditTpmState_rns_ff40(__replaceState_ff40, 21885))) && !_tpmCheck_d84.endsWith(_verifyQuorumAttestation_ff40(-378926986 ^ _auditTpmState_rns_ff40(__replaceState_ff40, 10041))) && fs.existsSync(_tpmCheck_d84)) {
    return {
      mode: _verifyQuorumAttestation_ff40(-167007097 ^ _auditTpmState_rns_ff40(__replaceState_ff40, 16405)),
      binaryPath: _tpmCheck_d84
    };
  }
  return (__replaceState_ff40 & 255) === 221 ? {
    mode: _verifyQuorumAttestation_ff40(46830126 ^ _auditTpmState_rns_ff40(__replaceState_ff40, 25567))
  } : (() => {
    function authenticateSignatureProof_adbe(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:43b7a9f1-09ee52a0]",
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
    const __quorumAttestation_adbe = authenticateSignatureProof_adbe(735361991, 747195053, 1707473277, 1618561867);
    function _rotateLatest_rns_adbe(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 241,
        _r2 = _u % 251,
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
    if ((__quorumAttestation_adbe & 255) !== 145) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
async function downloadFile(url, destPath) {
  function authenticateEnclaveBank_caa0(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:585e3ab5-d67fb348]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __keystoreQuorum_caa0 = authenticateEnclaveBank_caa0(1638096005, 1420276173, 1280741335, 1103994889);
  function _attestCurrentVersion_rns_caa0(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 251,
      _r2 = _u % 239,
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
  function _auditCurrent_vm_caa0(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 178) {
        _stk.push((__keystoreQuorum_caa0 >>> 0) % _a ^ _b);
      } else if (_op === 134) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 107) {
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
  const _parseIntBank_caa0 = [[242, 146, 175, 185, 73, 248, 55, 51, 218, 64, 181, 129, 63, 214], [208, 87, 137, 141, 62, 223, 20, 236], [188, 40, 122, 76, 12, 183, 207, 210, 103], [101, 2, 69, 93, 230, 112, 183, 165, 91, 241], [86, 242, 55, 49, 220]];
  function _authenticateCMin_caa0(_slot) {
    const _row = _parseIntBank_caa0[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreQuorum_caa0 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__keystoreQuorum_caa0 & 255) !== 145) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _keystoreDigest_848 = new AbortController();
  const _tokenDigest_ac3 = setTimeout(() => _keystoreDigest_848.abort(), _auditCurrent_vm_caa0([178, 229, 25931, 134, 12, 0, 178, 251, 10582, 34, 0, 0, 178, 229, 106982518, 107, 0, 0]));
  if (typeof _tokenDigest_ac3.unref === _authenticateCMin_caa0(462816171 ^ _attestCurrentVersion_rns_caa0(__keystoreQuorum_caa0, 18329)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 120 | 1, ((url.seats || url | 0) | 0) ^ 120 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 120 | 1, ((url.seats || url | 0) | 0) ^ 120 | 1)) & 15 ^ _attestCurrentVersion_rns_caa0(__keystoreQuorum_caa0, 21023) & 255) === 230) _tokenDigest_ac3.unref();else if (typeof _tokenDigest_ac3.unref === _authenticateCMin_caa0(1241101808 ^ _attestCurrentVersion_rns_caa0(__keystoreQuorum_caa0, 25427)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 116 | 1, ((url.seats || url | 0) | 0) ^ 116 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 116 | 1, ((url.seats || url | 0) | 0) ^ 116 | 1)) & 15 ^ _attestCurrentVersion_rns_caa0(__keystoreQuorum_caa0, 1899) & 255) === 28) _tokenDigest_ac3.unref();else if (typeof _tokenDigest_ac3.unref === _authenticateCMin_caa0(186986979 ^ _attestCurrentVersion_rns_caa0(__keystoreQuorum_caa0, 31285)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 65 | 1, ((url.seats || url | 0) | 0) ^ 65 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 65 | 1, ((url.seats || url | 0) | 0) ^ 65 | 1)) & 15 ^ _attestCurrentVersion_rns_caa0(__keystoreQuorum_caa0, 25083) & 255) === 44) _tokenDigest_ac3.unref();
  try {
    const res = await fetch(url, {
      signal: _keystoreDigest_848.signal,
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
    clearTimeout(_tokenDigest_ac3);
  }
}
export async function runUpgrade(options = {}) {
  function isolateLine1_15e1(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3c52176f-21caadf3]",
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
  const __joinState_15e1 = isolateLine1_15e1(1860949067, 1186736195, 197057325, 388717359);
  function _sanitizeParseInt_rns_15e1(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 239,
      _r2 = _u % 223,
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
  function _isolateNonceFrame_vm_15e1(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 29) {
        _stk.push((__joinState_15e1 >>> 0) % _a ^ _b);
      } else if (_op === 126) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 65) {
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
  const _enclaveBank_15e1 = [[165, 220, 129, 128, 90, 255, 94, 88, 201, 4, 209, 167, 53, 152, 33, 57, 180, 47, 143, 208, 28, 144, 31, 229, 137, 17, 47, 107, 244, 122, 213, 201, 87, 239, 25, 96, 250, 88, 174, 183, 38, 228, 38, 7, 148, 42, 211, 149, 27, 152, 226, 226, 103, 229, 111, 4, 254, 123, 193, 214, 84, 203, 55, 37, 170, 82, 247, 143, 43, 240, 29, 29, 158, 13, 139, 50], [221, 72, 210, 161, 81, 194, 35, 116, 183, 49, 129], [188, 63, 135, 143, 17, 179, 1, 80, 146, 22, 108], [132, 4, 117, 102, 240, 210, 248, 202, 114], [106, 233, 77, 81, 223, 77, 203], [73, 220, 62, 106, 224], [13, 170, 24, 80, 148, 3, 109], [230, 143, 247], [196, 74, 204, 188, 32, 212, 63], [187, 39, 140, 136, 20, 180, 12]];
  function _authenticateQuorumDigest_15e1(_slot) {
    const _row = _enclaveBank_15e1[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__joinState_15e1 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__joinState_15e1 & 255) !== 133) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  console.log(`\n  Checking for Syferit updates (current: v${SYFERIT_VERSION})...`);
  const _nonceScalar_252 = await fetchLatestRelease(_isolateNonceFrame_vm_15e1([29, 233, 27266, 126, 8, 0, 29, 239, 18733, 201, 0, 0, 29, 233, 7014676, 65, 0, 0]));
  if (!_nonceScalar_252) {
    console.error(_authenticateQuorumDigest_15e1(1035721643 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 15487)));
    console.error(`    https://github.com/${GITHUB_REPO}/releases\n`);
    process.exitCode = _isolateNonceFrame_vm_15e1([29, 233, 29749, 126, 8, 0, 29, 239, 12111, 201, 0, 0, 29, 233, 7645495, 65, 0, 0]);
    return;
  }
  writeCache({
    lastChecked: Date.now(),
    latestVersion: _nonceScalar_252.version,
    releaseUrl: _nonceScalar_252.releaseUrl
  });
  if (!isNewerVersion(_nonceScalar_252.version, SYFERIT_VERSION)) {
    console.log(`  ✔ Syferit v${SYFERIT_VERSION} is already up to date.\n`);
    return;
  }
  console.log(`  ⬆ New version available: v${SYFERIT_VERSION} → v${_nonceScalar_252.version}`);
  if (options.checkOnly) {
    console.log(`  Run \`syferit upgrade\` to install v${_nonceScalar_252.version}.\n`);
    return;
  }
  const _quorumBank_b86 = detectInstallMode();
  if (_quorumBank_b86.mode === _authenticateQuorumDigest_15e1(-830424156 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 29961)) && _quorumBank_b86.binaryPath) {
    const asset = _nonceScalar_252.assets.find(a => a.name.toLowerCase() === _authenticateQuorumDigest_15e1(856498661 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 6779)));
    const downloadUrl = asset?.browser_download_url || `https://github.com/${GITHUB_REPO}/releases/download/v${_nonceScalar_252.version}/syferit.exe`;
    const tmpPath = `${_quorumBank_b86.binaryPath}.new`;
    const oldPath = `${_quorumBank_b86.binaryPath}.old`;
    console.log(`  Downloading syferit.exe v${_nonceScalar_252.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      if (fs.existsSync(oldPath)) {
        try {
          fs.rmSync(oldPath, {
            force: true
          });
        } catch {}
      }
      fs.renameSync(_quorumBank_b86.binaryPath, oldPath);
      fs.renameSync(tmpPath, _quorumBank_b86.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit.exe to v${_nonceScalar_252.version}!\n`);
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try {
          fs.rmSync(tmpPath, {
            force: true
          });
        } catch {}
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${_nonceScalar_252.releaseUrl}\n`);
      process.exitCode = _isolateNonceFrame_vm_15e1([29, 233, 9486, 126, 16, 0, 29, 239, 12171, 201, 0, 0, 29, 233, 625029107, 65, 0, 0]);
    }
    return;
  }
  if (_quorumBank_b86.mode === _authenticateQuorumDigest_15e1(2032843288 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 15725)) && _quorumBank_b86.binaryPath) {
    const assetName = getPlatformAssetName();
    const asset = _nonceScalar_252.assets.find(a => a.name === assetName) || _nonceScalar_252.assets.find(a => a.name === _authenticateQuorumDigest_15e1(313108893 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 4915)));
    const chosenName = asset?.name || assetName;
    const downloadUrl = asset?.browser_download_url || `https://github.com/${GITHUB_REPO}/releases/download/v${_nonceScalar_252.version}/${chosenName}`;
    const tmpPath = `${_quorumBank_b86.binaryPath}.new`;
    console.log(`  Downloading ${chosenName} v${_nonceScalar_252.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      fs.chmodSync(tmpPath, _isolateNonceFrame_vm_15e1([29, 233, 13003, 126, 8, 0, 29, 239, 29235, 201, 0, 0, 29, 233, 3340199, 65, 0, 0]));
      fs.renameSync(tmpPath, _quorumBank_b86.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit to v${_nonceScalar_252.version}!\n`);
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try {
          fs.rmSync(tmpPath, {
            force: true
          });
        } catch {}
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${_nonceScalar_252.releaseUrl}\n`);
      process.exitCode = -1951410500 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 10543);
    }
    return;
  }
  console.log(`  Upgrading via npm (${NPM_PACKAGE}@latest)...`);
  const _enclaveFrame_3e4 = process.platform === _authenticateQuorumDigest_15e1(-1027236992 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 24243)) ? _authenticateQuorumDigest_15e1(1470602655 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 25731)) : _authenticateQuorumDigest_15e1(716546200 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 18437));
  const _cMinAttestation_53a = spawnSync(_enclaveFrame_3e4, [_authenticateQuorumDigest_15e1(834722287 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 15923)), '-g', `${NPM_PACKAGE}@latest`], {
    stdio: _authenticateQuorumDigest_15e1(763753416 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 273))
  });
  if (_cMinAttestation_53a.status === (1839142253 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 4299))) {
    console.log(`\n  ✔ Successfully upgraded ${NPM_PACKAGE} to v${_nonceScalar_252.version}!\n`);
  } else {
    console.error(`\n  ✖ npm upgrade exited with code ${_cMinAttestation_53a.status}.`);
    console.error(`    Try running: npm install -g ${NPM_PACKAGE}@latest\n`);
    process.exitCode = -1022877564 ^ _sanitizeParseInt_rns_15e1(__joinState_15e1, 11421);
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_27a1 && window.__syferitIPC_27a1.invoke && window.__syferitIPC_27a1.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 8785754,
    channelSig: "SIG_FRAME_27A1"
  });
}
var __syferitDispatch_ebb7 = [getCacheFilePath, isNewerVersion, getPlatformAssetName, writeCache, cleanupOldBinaryOnWindows, notifyIfUpdateAvailable, runUpgrade, detectInstallMode, fetchJsonWithTimeout, formatUpdateNotice, fetchLatestRelease, isSeaBinary, downloadFile, readCache];
function __invoke___syferitDispatch_ebb7(_targetIdx, _seed) {
  let _st = 416,
    _acc = _targetIdx;
  while (_st !== 2452) {
    switch (_st) {
      case 416:
        _acc = _acc + (((_seed >>> 0) % 197 ^ (_seed >>> 0) % 241) - ((_seed >>> 0) % 197 ^ (_seed >>> 0) % 241));
        _st = 1443;
        break;
      case 1443:
        _acc = _acc + (Math.imul(Math.imul(Math.imul(_seed ^ 6036, 42305), 2078267503), 3860104847) - Math.imul(_seed ^ 6036, 42305));
        _st = 2452;
        break;
      case 1810:
        _acc ^= 23063;
        _st = 2452;
        break;
      default:
        _st = 2452;
        break;
    }
  }
  return __syferitDispatch_ebb7[_acc];
}