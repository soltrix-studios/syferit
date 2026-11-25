// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import * as sea from 'node:sea';
function attestCurrent_a3aa(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:5addd06b-ab09f162]",
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
var __keystoreBank_a3aa = attestCurrent_a3aa(813525733, 1931067483, 563103847, 987847765);
function _verifyIsNewerVersion_rns_a3aa(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 197,
    _r1 = _u % 233,
    _r2 = _u % 241,
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
var _GITHUB_REPOBank_a3aa = [[57, 91, 78, 255, 174], [67, 245, 200, 130, 182, 71, 64, 167, 43, 182, 185, 122, 133, 57, 19, 157, 243, 147, 146, 35, 102, 23, 252], [21, 204, 176, 125, 140, 33, 52, 219, 82, 132, 157, 42]];
function _validateNonceFrame_a3aa(_slot) {
  const _row = _GITHUB_REPOBank_a3aa[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreBank_a3aa >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const SYFERIT_VERSION = _validateNonceFrame_a3aa(-636878033 ^ _verifyIsNewerVersion_rns_a3aa(__keystoreBank_a3aa, 525));
const GITHUB_REPO = _validateNonceFrame_a3aa(-1957806638 ^ _verifyIsNewerVersion_rns_a3aa(__keystoreBank_a3aa, 24483));
const NPM_PACKAGE = _validateNonceFrame_a3aa(-512058639 ^ _verifyIsNewerVersion_rns_a3aa(__keystoreBank_a3aa, 23703));
const CHECK_INTERVAL_MS = (308457313 ^ _verifyIsNewerVersion_rns_a3aa(__keystoreBank_a3aa, 5259)) * (-605855621 ^ _verifyIsNewerVersion_rns_a3aa(__keystoreBank_a3aa, 21167)) * (-593407435 ^ _verifyIsNewerVersion_rns_a3aa(__keystoreBank_a3aa, 15551)) * (-854095527 ^ _verifyIsNewerVersion_rns_a3aa(__keystoreBank_a3aa, 12251));
const FETCH_TIMEOUT_MS = -1246195931 ^ _verifyIsNewerVersion_rns_a3aa(__keystoreBank_a3aa, 14225);
function getCacheFilePath() {
  function normalizeQuorumVector_6dcb(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:cf82aeaf-3827ad29]",
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
  const __tokenProof_6dcb = normalizeQuorumVector_6dcb(76453721, 505192667, 791433373, 555722831);
  function _auditSignatureFrame_rns_6dcb(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 239,
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
  const _lMinFrame_6dcb = [[45, 26, 65, 146, 242, 143, 165, 252], [93, 254, 57, 120, 200, 71, 220, 206, 56, 211, 230, 42, 202, 32, 106, 186, 22], [40, 221, 246, 91, 147, 55, 100, 187, 6, 190], [1, 187, 198, 15, 99]];
  function _rotateLatestVersion_6dcb(_slot) {
    const _row = _lMinFrame_6dcb[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tokenProof_6dcb >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__tokenProof_6dcb & 255) === 3 ? path.join(os.homedir(), _rotateLatestVersion_6dcb(-249122423 ^ _auditSignatureFrame_rns_6dcb(__tokenProof_6dcb, 13265)), _rotateLatestVersion_6dcb(68268484 ^ _auditSignatureFrame_rns_6dcb(__tokenProof_6dcb, 10225))) : (() => {
    function sanitizeCMin_4f4e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:68be4fa3-7f9cf8f0]",
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
    const __formatUpdateNoticeState_4f4e = sanitizeCMin_4f4e(1242364663, 1213776199, 1757594421, 1055939185);
    function _validateCPat_rns_4f4e(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 229,
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
    if ((__formatUpdateNoticeState_4f4e & 255) !== 173) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isNewerVersion(latest, current) {
  function isolateSplit_351f(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0ea1c46c-15fafa19]",
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
  const __signatureDigest_351f = isolateSplit_351f(1947812889, 1687268813, 1717158333, 1130328209);
  function _sanitizeCMin_rns_351f(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 211,
      _r2 = _u % 199,
      _r3 = _u % 227,
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
  const _SoltrixStudiosDelta_d04 = v => {
    function verifyParts_8ee2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e60fd42d-fbdc8b68]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __tokenCheck_8ee2 = verifyParts_8ee2(126202171, 757523277, 818410607, 2136164103);
    function _isolateHomedir_rns_8ee2(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 233,
        _r2 = _u % 199,
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
    function _attestSpawnSync_vm_8ee2(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 105) {
          _stk.push((__tokenCheck_8ee2 >>> 0) % _a ^ _b);
        } else if (_op === 183) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 146) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 30) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _nonceBank_8ee2 = [[242, 54, 98, 159, 102], [130, 83, 3, 179, 9, 161, 121, 3, 124, 0], [127, 1, 253, 151, 197]];
    function _authenticateCurrentVersion_8ee2(_slot) {
      const _row = _nonceBank_8ee2[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tokenCheck_8ee2 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _nonceFrame_ec9 = v.trim().replace(/^v/i, '').split('-')[_attestSpawnSync_vm_8ee2([105, 211, 28394, 183, 12, 0, 105, 233, 11898, 30, 0, 0, 105, 211, 116379150, 146, 0, 0])] || _authenticateCurrentVersion_8ee2(305462183 ^ _isolateHomedir_rns_8ee2(__tokenCheck_8ee2, 31467));
    const _cPatAttestation_f37 = _nonceFrame_ec9.split('.').map(n => parseInt(n, _attestSpawnSync_vm_8ee2([105, 211, 25058, 183, 8, 0, 105, 233, 31565, 30, 0, 0, 105, 211, 6450483, 146, 0, 0])) || _attestSpawnSync_vm_8ee2([105, 211, 21784, 183, 8, 0, 105, 233, 12285, 30, 0, 0, 105, 211, 5584777, 146, 0, 0]));
    return (__tokenCheck_8ee2 & 255) === 194 ? [_cPatAttestation_f37[_attestSpawnSync_vm_8ee2([105, 211, 21072, 183, 8, 0, 105, 233, 12246, 30, 0, 0, 105, 211, 5402530, 146, 0, 0])] ?? 1846545403 ^ _isolateHomedir_rns_8ee2(__tokenCheck_8ee2, 30201), _cPatAttestation_f37[1334018164 ^ _isolateHomedir_rns_8ee2(__tokenCheck_8ee2, 30341)] ?? -548781415 ^ _isolateHomedir_rns_8ee2(__tokenCheck_8ee2, 16631), _cPatAttestation_f37[-432483707 ^ _isolateHomedir_rns_8ee2(__tokenCheck_8ee2, 17971)] ?? -1561527293 ^ _isolateHomedir_rns_8ee2(__tokenCheck_8ee2, 15253)] : (() => {
      function authenticateCHECK_INTERVAL_MS_decf(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f81f04ca-7fcb38e9]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __cMajState_decf = authenticateCHECK_INTERVAL_MS_decf(1456238061, 329031185, 2116692085, 1971944367);
      function _validateNonceFrame_rns_decf(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 227,
          _r1 = _u % 239,
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
      if ((__cMajState_decf & 255) !== 123) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  };
  const [_certificateCheck_8c0, _signatureFrame_be1, _tpmEnvelope_140] = _SoltrixStudiosDelta_d04(latest);
  const [_getCacheFilePathBank_60c, _line1Vector_8aa, _joinVector_f3e] = _SoltrixStudiosDelta_d04(current);
  if (_certificateCheck_8c0 !== _getCacheFilePathBank_60c) return _certificateCheck_8c0 > _getCacheFilePathBank_60c;
  if (_signatureFrame_be1 !== _line1Vector_8aa) return _signatureFrame_be1 > _line1Vector_8aa;
  return (__signatureDigest_351f & 255) === 132 ? _tpmEnvelope_140 > _joinVector_f3e : (() => {
    function isolateSYFERIT_VERSION_f1b0(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:cf267332-41a508b2]",
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
    const __nonceBank_f1b0 = isolateSYFERIT_VERSION_f1b0(1753326839, 1453456659, 56568423, 349799605);
    function _attestPath_rns_f1b0(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 223,
        _r2 = _u % 233,
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
    if ((__nonceBank_f1b0 & 255) !== 9) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function formatUpdateNotice(currentVersion, latestVersion) {
  function authenticateCurrentVersion_fa20(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ec2d7e01-6e337215]",
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
  const __partsState_fa20 = authenticateCurrentVersion_fa20(729961825, 34814975, 251200813, 2073794181);
  function _auditJoin_rns_fa20(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 197,
      _r2 = _u % 251,
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
  function _sanitizeLMaj_vm_fa20(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 82) {
        _stk.push((__partsState_fa20 >>> 0) % _a ^ _b);
      } else if (_op === 169) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 123) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 42) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _lMinFrame_618 = `  ⬆  Update available: v${currentVersion} → v${latestVersion}`;
  const _tokenEnvelope_375 = `     Run \`syferit upgrade\` to update seamlessly.`;
  const _parseDigest_85c = _sanitizeLMaj_vm_fa20([82, 199, 774, 169, 16, 0, 82, 197, 25865, 42, 0, 0, 82, 199, 55665924, 123, 0, 0]);
  const _splitProof_8a1 = s => s.padEnd(_parseDigest_85c, ' ');
  return (__partsState_fa20 & 255) === 86 ? [`  ╭${'─'.repeat(_parseDigest_85c)}╮`, `  │${_splitProof_8a1(_lMinFrame_618)}│`, `  │${_splitProof_8a1(_tokenEnvelope_375)}│`, `  ╰${'─'.repeat(_parseDigest_85c)}╯`].join('\n') : (() => {
    function verifyProprietaryEnclaveContext_db33(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:cf7aea25-b7a82425]",
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
    const __joinState_db33 = verifyProprietaryEnclaveContext_db33(465330941, 339045913, 971219261, 787809651);
    function _sanitizeClean_rns_db33(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 251,
        _r2 = _u % 229,
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
    if ((__joinState_db33 & 255) !== 86) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
function readCache() {
  function isolateCertificateCheck_cf97(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:48045cb1-3231059f]",
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
  const __partsState_cf97 = isolateCertificateCheck_cf97(1657754743, 958234749, 636054749, 1508326749);
  function _auditJoin_rns_cf97(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 239,
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
  const _NPM_PACKAGEDigest_cf97 = [[247, 81, 19, 85, 46], [201, 63, 247, 255, 94, 172], [191, 27, 205, 171, 14, 100], [148, 250, 144, 130, 247, 88, 10, 18, 106, 217], [101, 218, 104, 96, 207]];
  function _isolateHomedir_cf97(_slot) {
    const _row = _NPM_PACKAGEDigest_cf97[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__partsState_cf97 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__partsState_cf97 & 255) !== 130) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    const file = getCacheFilePath();
    if (!fs.existsSync(file)) return null;
    const data = JSON.parse(fs.readFileSync(file, _isolateHomedir_cf97(1560621907 ^ _auditJoin_rns_cf97(__partsState_cf97, 12437))));
    if (typeof data?.lastChecked === _isolateHomedir_cf97(-209752394 ^ _auditJoin_rns_cf97(__partsState_cf97, 11147)) && typeof data?.latestVersion === _isolateHomedir_cf97(-1102630159 ^ _auditJoin_rns_cf97(__partsState_cf97, 5317))) {
      return data;
    }
    return null;
  } catch {
    return null;
  }
}
function writeCache(cache) {
  function isolateSYFERIT_VERSION_475b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ad1173bf-8163b7c6]",
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
  const __spawnSyncState_475b = isolateSYFERIT_VERSION_475b(870110551, 2060291663, 1479486265, 1603177327);
  function _sanitizeCMaj_rns_475b(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 251,
      _r2 = _u % 227,
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
  function _validateFormatUpdateNotice_vm_475b(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 158) {
        _stk.push((__spawnSyncState_475b >>> 0) % _a ^ _b);
      } else if (_op === 172) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 31) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 79) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _cleanAttestation_475b = [[225, 226, 119, 118, 16], [220, 213, 66, 229, 63, 63, 184, 125, 146, 134], [173, 131, 58, 201, 23]];
  function _verifyGITHUB_REPO_475b(_slot) {
    const _row = _cleanAttestation_475b[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__spawnSyncState_475b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__spawnSyncState_475b & 255) !== 148) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    const file = getCacheFilePath();
    fs.mkdirSync(path.dirname(file), {
      recursive: true
    });
    fs.writeFileSync(file, JSON.stringify(cache, null, _validateFormatUpdateNotice_vm_475b([158, 229, 28838, 172, 12, 0, 158, 251, 13546, 79, 0, 0, 158, 229, 118207686, 31, 0, 0])), _verifyGITHUB_REPO_475b(1422572187 ^ _sanitizeCMaj_rns_475b(__spawnSyncState_475b, 31081)));
  } catch {}
}
async function fetchJsonWithTimeout(url, timeoutMs = FETCH_TIMEOUT_MS) {
  function auditSignatureFrame_d824(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:53f5d8f5-524b9cea]",
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
  const __splitState_d824 = auditSignatureFrame_d824(277132981, 59880105, 382784483, 240667741);
  function _verifySoltrixStudiosContext_rns_d824(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 199,
      _r2 = _u % 211,
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
  const _partsDigest_d824 = [[235, 203, 186, 20, 73], [219, 184, 110, 254, 37, 8, 251, 95], [133, 157, 83, 157, 21, 234, 214, 35, 110], [102, 103, 58, 139, 242, 200, 191, 15, 70, 80, 28, 32, 181, 189, 98, 141, 48, 14, 238, 95, 158, 153, 5, 161, 12, 224, 172], [73, 82, 27, 105, 178, 160, 113, 201, 39, 1], [34, 2, 245, 93, 128]];
  function _verifySoltrixStudiosContext_d824(_slot) {
    const _row = _partsDigest_d824[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__splitState_d824 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__splitState_d824 & 255) !== 152) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _currentVersionAttestation_d4f = new AbortController();
  const _enclaveReg_55a = setTimeout(() => _currentVersionAttestation_d4f.abort(), timeoutMs);
  if (typeof _enclaveReg_55a.unref === _verifySoltrixStudiosContext_d824(940178203 ^ _verifySoltrixStudiosContext_rns_d824(__splitState_d824, 13019)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 117 | 1, ((url.seats || url | 0) | 0) ^ 117 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 117 | 1, ((url.seats || url | 0) | 0) ^ 117 | 1)) & 15 ^ _verifySoltrixStudiosContext_rns_d824(__splitState_d824, 1329) & 255) === 82) _enclaveReg_55a.unref();else if (typeof _enclaveReg_55a.unref === _verifySoltrixStudiosContext_d824(1348884652 ^ _verifySoltrixStudiosContext_rns_d824(__splitState_d824, 1479)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 19 | 1, ((url.seats || url | 0) | 0) ^ 19 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 19 | 1, ((url.seats || url | 0) | 0) ^ 19 | 1)) & 15 ^ _verifySoltrixStudiosContext_rns_d824(__splitState_d824, 12605) & 255) === 58) _enclaveReg_55a.unref();else if (typeof _enclaveReg_55a.unref === _verifySoltrixStudiosContext_d824(584599317 ^ _verifySoltrixStudiosContext_rns_d824(__splitState_d824, 18865)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 54 | 1, ((url.seats || url | 0) | 0) ^ 54 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 54 | 1, ((url.seats || url | 0) | 0) ^ 54 | 1)) & 15 ^ _verifySoltrixStudiosContext_rns_d824(__splitState_d824, 28715) & 255) === 14) _enclaveReg_55a.unref();
  try {
    const res = await fetch(url, {
      signal: _currentVersionAttestation_d4f.signal,
      headers: {
        'User-Agent': `syferit-cli/${SYFERIT_VERSION}`,
        'Accept': _verifySoltrixStudiosContext_d824(-1019960004 ^ _verifySoltrixStudiosContext_rns_d824(__splitState_d824, 3587))
      }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(_enclaveReg_55a);
  }
}
export async function fetchLatestRelease(timeoutMs = FETCH_TIMEOUT_MS) {
  function validateTpmVector_3173(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:df0b90b8-ab210b2f]",
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
  const __cleanState_3173 = validateTpmVector_3173(167217405, 1194138427, 1112153311, 953832955);
  function _sanitizeCMin_rns_3173(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 199,
      _r2 = _u % 233,
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
  const _pathProof_3173 = [[100, 159, 176, 125, 197, 24], [91, 121, 147, 81, 165, 198], [18, 65, 126, 55, 155, 174], [232, 42, 92], [206, 17, 34, 205, 77, 99, 152, 85, 160, 194], [163, 199, 26, 161, 1]];
  function _isolateSYFERIT_VERSION_3173(_slot) {
    const _row = _pathProof_3173[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cleanState_3173 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _SoltrixStudiosDelta_422 = await fetchJsonWithTimeout(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, timeoutMs);
  if (_SoltrixStudiosDelta_422 && typeof _SoltrixStudiosDelta_422.tag_name === _isolateSYFERIT_VERSION_3173(-917659875 ^ _sanitizeCMin_rns_3173(__cleanState_3173, 30791))) {
    const version = _SoltrixStudiosDelta_422.tag_name.replace(/^v/i, '');
    const assets = Array.isArray(_SoltrixStudiosDelta_422.assets) ? _SoltrixStudiosDelta_422.assets.map(a => ({
      name: String(a.name ?? ''),
      browser_download_url: String(a.browser_download_url ?? '')
    })) : [];
    return {
      version,
      releaseUrl: String(_SoltrixStudiosDelta_422.html_url || `https://github.com/${GITHUB_REPO}/releases/latest`),
      assets,
      source: _isolateSYFERIT_VERSION_3173(1104341300 ^ _sanitizeCMin_rns_3173(__cleanState_3173, 22997))
    };
  }
  const _currentDigest_605 = await fetchJsonWithTimeout(`https://registry.npmjs.org/${NPM_PACKAGE}/latest`, timeoutMs);
  if (_currentDigest_605 && typeof _currentDigest_605.version === _isolateSYFERIT_VERSION_3173(-620468391 ^ _sanitizeCMin_rns_3173(__cleanState_3173, 24305))) {
    return {
      version: _currentDigest_605.version,
      releaseUrl: `https://github.com/${GITHUB_REPO}/releases`,
      assets: [],
      source: _isolateSYFERIT_VERSION_3173(-743483640 ^ _sanitizeCMin_rns_3173(__cleanState_3173, 6207))
    };
  }
  return (__cleanState_3173 & 255) === 23 ? null : (() => {
    function authenticateTrim_788c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:eda6eea5-a34892fb]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __signatureFrame_788c = authenticateTrim_788c(1287845639, 1650518257, 662796583, 59368603);
    function _sanitizeLMaj_rns_788c(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 251,
        _r2 = _u % 199,
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
    if ((__signatureFrame_788c & 255) !== 122) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function notifyIfUpdateAvailable(quiet = false) {
  function attestFETCH_TIMEOUT_MS_6a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:066538b7-6288a697]",
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
  const __isNewerVersionState_6a = attestFETCH_TIMEOUT_MS_6a(930028169, 2050143817, 1061774107, 832926403);
  function _rotateTokenEnvelope_rns_6a(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 251,
      _r2 = _u % 211,
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
  const _SoltrixStudiosDelta_6a = [[21, 180, 74, 180, 136, 200, 244, 218, 32, 90, 107, 76, 82, 237, 137, 249, 211, 98, 31, 9, 111, 146, 187], [31, 96, 68, 115], [245, 89, 34, 94, 86, 187, 152, 166, 203, 58], [198, 63, 26, 12, 44]];
  function _attestNPM_PACKAGE_6a(_slot) {
    const _row = _SoltrixStudiosDelta_6a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__isNewerVersionState_6a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__isNewerVersionState_6a & 255) !== 70) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (quiet) return;
  if (process.env[_attestNPM_PACKAGE_6a(-195068539 ^ _rotateTokenEnvelope_rns_6a(__isNewerVersionState_6a, 20543))] === '1' || process.env['CI'] === _attestNPM_PACKAGE_6a(292972568 ^ _rotateTokenEnvelope_rns_6a(__isNewerVersionState_6a, 11963))) {
    return;
  }
  const _joinVector_854 = readCache();
  if (_joinVector_854 && isNewerVersion(_joinVector_854.latestVersion, SYFERIT_VERSION)) {
    console.log(formatUpdateNotice(SYFERIT_VERSION, _joinVector_854.latestVersion) + '\n');
  }
  const _signatureDigest_9ed = Date.now();
  if (!_joinVector_854 || _signatureDigest_9ed - _joinVector_854.lastChecked >= CHECK_INTERVAL_MS) {
    void fetchLatestRelease(FETCH_TIMEOUT_MS).then(info => {
      function verifySoltrixStudiosContext_cf76(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:04c471cb-d9885c8d]",
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
      const __getCacheFilePathState_cf76 = verifySoltrixStudiosContext_cf76(1386302265, 1566981289, 659508381, 1004910449);
      function _validateCPat_rns_cf76(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 251,
          _r1 = _u % 239,
          _r2 = _u % 241,
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
      if ((__getCacheFilePathState_cf76 & 255) !== 218) {
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
  function attestNPM_PACKAGE_58a9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:895ba58b-536f60d8]",
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
  const __ProprietaryEnclaveQuorum_58a9 = attestNPM_PACKAGE_58a9(1586410557, 1173937901, 1760114819, 1373582733);
  function _rotateLatest_rns_58a9(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 239,
      _r2 = _u % 223,
      _r3 = _u % 197,
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
  const _splitProof_58a9 = [[212, 145, 236, 221, 116, 225, 121, 45], [186, 77, 217, 184, 1, 199, 51, 24, 116, 46], [119, 43, 179, 110, 253]];
  function _validateKeystoreBank_58a9(_slot) {
    const _row = _splitProof_58a9[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ProprietaryEnclaveQuorum_58a9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__ProprietaryEnclaveQuorum_58a9 & 255) !== 186) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    return Boolean(sea?.isSea?.());
  } catch {
    try {
      const builtinSea = process.getBuiltinModule?.(_validateKeystoreBank_58a9(634286125 ^ _rotateLatest_rns_58a9(__ProprietaryEnclaveQuorum_58a9, 13755)));
      return Boolean(builtinSea?.isSea?.());
    } catch {
      return false;
    }
  }
}
export function getPlatformAssetName(platform = process.platform, arch = process.arch) {
  function attestLMin_5a59(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:367b3d0e-75922709]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __formatUpdateNoticeState_5a59 = attestLMin_5a59(1720922175, 1446655363, 868998145, 838463031);
  function _synchronizeNonceContext_rns_5a59(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 251,
      _r2 = _u % 229,
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
  const _FETCH_TIMEOUT_MSFrame_5a59 = [[120, 84, 248, 188, 208, 163, 77, 2, 35], [55, 25, 213, 109, 170, 157, 51, 178, 9, 240, 190], [30, 236, 182, 30, 207], [253, 211, 155, 55, 80, 87, 229, 200, 211, 170, 64], [214, 161, 86, 18, 53, 19, 196, 98, 168, 146], [171, 141, 33, 249, 30, 225, 175, 30, 101, 100, 10], [158, 118, 1, 177, 253, 196, 97, 59, 70, 36, 203, 153, 203, 186], [81, 71, 247, 131, 196, 187, 81, 87, 38, 15, 215, 123, 166, 215, 53, 148, 70], [43, 10, 216, 126, 163], [31, 241, 189, 85, 114, 117, 27, 233, 248, 217, 109, 45, 80, 105, 239, 218, 136], [226, 206, 97, 57, 64], [197, 171, 67, 31, 56, 15, 205, 35, 178, 147, 35, 215, 10, 163, 153, 0, 50], [188, 152, 60, 192, 12, 231, 177, 70, 103], [97, 110, 2, 242, 160], [86, 56, 242, 140, 203, 188, 92, 80, 32, 8, 223, 126, 146, 208, 49, 215, 24, 167, 208], [57, 31, 223, 107, 172, 147, 57, 143, 31, 239, 130, 89, 117, 15, 13, 252, 174], [11, 234, 172, 68, 106, 113], [245, 194, 110, 110, 28], [202, 172, 78, 24, 63, 0, 200, 60, 140, 156, 51, 202, 6, 188, 133, 75, 100, 19, 76], [173, 131, 43, 199, 0, 231, 149, 27, 107, 67, 22, 165, 233, 155, 113, 104, 26], [102, 113, 6, 162, 229, 195, 116, 50, 88, 34], [73, 54, 250, 218, 136], [62, 16, 218, 116, 147, 148, 36, 136, 24, 240, 135, 86, 122, 8, 25, 191, 240, 143, 56], [1, 247, 135, 83, 116, 75, 1, 231, 247, 215, 106, 49, 93, 103, 229, 196, 246], [228, 202, 96, 62, 89, 46, 238]];
  function _verifyTokenProof_5a59(_slot) {
    const _row = _FETCH_TIMEOUT_MSFrame_5a59[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__formatUpdateNoticeState_5a59 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (platform === _verifyTokenProof_5a59(-425005287 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 20453)) && (Math.imul(Math.imul((1720922175 | 0) ^ 33 | 1, (1720922175 | 0) ^ 33 | 1), Math.imul((1720922175 | 0) ^ 33 | 1, (1720922175 | 0) ^ 33 | 1)) & 15 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 8579) & 255) === 64) return _verifyTokenProof_5a59(636999596 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 19253));else if (platform === _verifyTokenProof_5a59(-371557475 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 3019)) && (Math.imul(Math.imul((1720922175 | 0) ^ 30 | 1, (1720922175 | 0) ^ 30 | 1), Math.imul((1720922175 | 0) ^ 30 | 1, (1720922175 | 0) ^ 30 | 1)) & 15 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 31361) & 255) === 214) return _verifyTokenProof_5a59(-1544122048 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 1489));else if (platform === _verifyTokenProof_5a59(-1398272217 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 2939)) && (Math.imul(Math.imul((1720922175 | 0) ^ 20 | 1, (1720922175 | 0) ^ 20 | 1), Math.imul((1720922175 | 0) ^ 20 | 1, (1720922175 | 0) ^ 20 | 1)) & 15 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 29741) & 255) === 174) return _verifyTokenProof_5a59(1165196360 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 8661));
  if (platform === _verifyTokenProof_5a59(1419232911 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 5513)) && (Math.imul(Math.imul((1720922175 | 0) ^ 26 | 1, (1720922175 | 0) ^ 26 | 1), Math.imul((1720922175 | 0) ^ 26 | 1, (1720922175 | 0) ^ 26 | 1)) & 15 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 26931) & 255) === 106) return _verifyTokenProof_5a59(-1798837772 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 6445));else if (platform === _verifyTokenProof_5a59(376218667 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 31391)) && (Math.imul(Math.imul((1720922175 | 0) ^ 99 | 1, (1720922175 | 0) ^ 99 | 1), Math.imul((1720922175 | 0) ^ 99 | 1, (1720922175 | 0) ^ 99 | 1)) & 15 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 17559) & 255) === 166) return _verifyTokenProof_5a59(-1945101554 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 29903));else if (platform === _verifyTokenProof_5a59(1438953925 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 21003)) && (Math.imul(Math.imul((1720922175 | 0) ^ 54 | 1, (1720922175 | 0) ^ 54 | 1), Math.imul((1720922175 | 0) ^ 54 | 1, (1720922175 | 0) ^ 54 | 1)) & 15 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 1089) & 255) === 66) return _verifyTokenProof_5a59(401993742 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 24145));
  if (platform === _verifyTokenProof_5a59(1744563313 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 859)) && (Math.imul(Math.imul((1720922175 | 0) ^ 23 | 1, (1720922175 | 0) ^ 23 | 1), Math.imul((1720922175 | 0) ^ 23 | 1, (1720922175 | 0) ^ 23 | 1)) & 15 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 3783) & 255) === 84) {
    return arch === _verifyTokenProof_5a59(-436176484 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 20547)) ? _verifyTokenProof_5a59(-35296725 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 31627)) : _verifyTokenProof_5a59(1327971052 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 3213));
  } else if (platform === _verifyTokenProof_5a59(-1865278225 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 27317)) && (Math.imul(Math.imul((1720922175 | 0) ^ 70 | 1, (1720922175 | 0) ^ 70 | 1), Math.imul((1720922175 | 0) ^ 70 | 1, (1720922175 | 0) ^ 70 | 1)) & 15 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 29017) & 255) === 46) {
    return arch === _verifyTokenProof_5a59(2096534744 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 1173)) ? _verifyTokenProof_5a59(-1844512503 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 14275)) : _verifyTokenProof_5a59(263826094 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 14221));
  } else if (platform === _verifyTokenProof_5a59(1835930927 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 12093)) && (Math.imul(Math.imul((1720922175 | 0) ^ 31 | 1, (1720922175 | 0) ^ 31 | 1), Math.imul((1720922175 | 0) ^ 31 | 1, (1720922175 | 0) ^ 31 | 1)) & 15 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 11469) & 255) === 40) {
    return arch === _verifyTokenProof_5a59(1732109128 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 12659)) ? _verifyTokenProof_5a59(-98806023 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 25143)) : _verifyTokenProof_5a59(331091660 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 28391));
  }
  return (__formatUpdateNoticeState_5a59 & 255) === 31 ? _verifyTokenProof_5a59(-1642950979 ^ _synchronizeNonceContext_rns_5a59(__formatUpdateNoticeState_5a59, 831)) : (() => {
    function attestNPM_PACKAGE_a3e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bec4d875-4ffb9ef2]",
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
    const __pathState_a3e = attestNPM_PACKAGE_a3e(1445953703, 1425322287, 490893763, 182640775);
    function _auditParse_rns_a3e(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 199,
        _r2 = _u % 223,
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
    if ((__pathState_a3e & 255) !== 230) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function cleanupOldBinaryOnWindows() {
  function sanitizeCMin_3af7(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:334cb0e5-5a2eab85]",
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
  const __signatureDigest_3af7 = sanitizeCMin_3af7(12018273, 1291179533, 1004808637, 377256579);
  function _validateFormatUpdateNotice_rns_3af7(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 223,
      _r2 = _u % 241,
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
  const _lMinFrame_3af7 = [[26, 38, 128, 145, 51], [247, 26, 103, 162, 84, 120, 213, 50, 201, 249], [196, 250, 89, 128, 46]];
  function _attestSpawnSync_3af7(_slot) {
    const _row = _lMinFrame_3af7[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__signatureDigest_3af7 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__signatureDigest_3af7 & 255) !== 109) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (process.platform !== _attestSpawnSync_3af7(819384987 ^ _validateFormatUpdateNotice_rns_3af7(__signatureDigest_3af7, 29227)) || !isSeaBinary()) return;
  const _parseDigest_794 = `${process.execPath}.old`;
  if (fs.existsSync(_parseDigest_794)) {
    try {
      fs.rmSync(_parseDigest_794, {
        force: true
      });
    } catch {}
  }
}
export function detectInstallMode() {
  function rotateLatestVersion_e4e2(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a93a091f-6dee6336]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __nonceContext_e4e2 = rotateLatestVersion_e4e2(1681381263, 887892353, 1256737321, 19282763);
  function _normalizeQuorumVector_rns_e4e2(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 251,
      _r2 = _u % 227,
      _r3 = _u % 239,
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
  function _auditJoin_vm_e4e2(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 76) {
        _stk.push((__nonceContext_e4e2 >>> 0) % _a ^ _b);
      } else if (_op === 157) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 39) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 167) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _tokenCheck_e4e2 = [[49, 0, 251, 15, 232], [28, 231, 212, 5, 144, 85, 61, 216, 246, 206, 135], [224, 220, 172, 239, 92, 106, 17, 115, 214], [230, 129, 66, 238, 27, 37, 204, 96, 159, 73, 98, 146, 35, 205, 159, 55, 68, 124, 28], [173, 148, 71, 180, 1, 230, 206, 73, 103, 93, 52], [136, 75, 32, 198, 161], [74, 40, 23, 127, 231, 182, 104, 202, 57, 3, 254, 49], [43, 5, 246, 17, 183, 115], [30, 254, 206, 13, 122, 8, 51, 145, 248], [253, 198, 143]];
  function _attestPath_e4e2(_slot) {
    const _row = _tokenCheck_e4e2[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceContext_e4e2 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (isSeaBinary()) {
    return {
      mode: process.platform === _attestPath_e4e2(241117115 ^ _normalizeQuorumVector_rns_e4e2(__nonceContext_e4e2, 21925)) ? _attestPath_e4e2(872573584 ^ _normalizeQuorumVector_rns_e4e2(__nonceContext_e4e2, 16573)) : _attestPath_e4e2(-2091818673 ^ _normalizeQuorumVector_rns_e4e2(__nonceContext_e4e2, 30605)),
      binaryPath: process.execPath
    };
  }
  const _SoltrixStudiosDelta_83a = process.env[_attestPath_e4e2(1761222120 ^ _normalizeQuorumVector_rns_e4e2(__nonceContext_e4e2, 32677))];
  if (_SoltrixStudiosDelta_83a && fs.existsSync(_SoltrixStudiosDelta_83a)) {
    return {
      mode: _attestPath_e4e2(-485295065 ^ _normalizeQuorumVector_rns_e4e2(__nonceContext_e4e2, 15093)),
      binaryPath: _SoltrixStudiosDelta_83a
    };
  }
  const _keystoreBank_e65 = process.argv[_auditJoin_vm_e4e2([76, 211, 17887, 157, 7, 0, 76, 251, 21069, 167, 0, 0, 76, 211, 2300079, 39, 0, 0])] || '';
  if (process.platform !== _attestPath_e4e2(-1427184538 ^ _normalizeQuorumVector_rns_e4e2(__nonceContext_e4e2, 22591)) && _keystoreBank_e65 && !_keystoreBank_e65.includes(_attestPath_e4e2(1116167111 ^ _normalizeQuorumVector_rns_e4e2(__nonceContext_e4e2, 14489))) && !_keystoreBank_e65.endsWith(_attestPath_e4e2(1225727978 ^ _normalizeQuorumVector_rns_e4e2(__nonceContext_e4e2, 4181))) && fs.existsSync(_keystoreBank_e65)) {
    return {
      mode: _attestPath_e4e2(1280864375 ^ _normalizeQuorumVector_rns_e4e2(__nonceContext_e4e2, 21261)),
      binaryPath: _keystoreBank_e65
    };
  }
  return (__nonceContext_e4e2 & 255) === 70 ? {
    mode: _attestPath_e4e2(-1601671426 ^ _normalizeQuorumVector_rns_e4e2(__nonceContext_e4e2, 13627))
  } : (() => {
    function isolateParseInt_8ea6(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:cbb53e79-a8604753]",
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
    const __getCacheFilePathState_8ea6 = isolateParseInt_8ea6(1126927099, 662969093, 1517520649, 849845239);
    function _rotateLatestVersion_rns_8ea6(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 251,
        _r1 = _u % 241,
        _r2 = _u % 197,
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
    if ((__getCacheFilePathState_8ea6 & 255) !== 183) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
async function downloadFile(url, destPath) {
  function attestKeystoreBank_a194(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:4742d5e4-e32589b6]",
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
  const __cPatState_a194 = attestKeystoreBank_a194(1174130187, 2126522679, 1946714301, 420686513);
  function _validateTpmVector_rns_a194(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 227,
      _r2 = _u % 251,
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
  function _attestLMin_vm_a194(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 91) {
        _stk.push((__cPatState_a194 >>> 0) % _a ^ _b);
      } else if (_op === 164) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 20) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 143) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _quorumProof_a194 = [[8, 50, 122, 202, 106], [198, 3, 46, 168, 64, 99, 187, 49], [162, 244, 19, 175, 58, 67, 150, 241, 137], [143, 174, 254, 112, 12, 36, 108, 192, 97, 141], [124, 134, 206, 86, 198]];
  function _verifyTokenProof_a194(_slot) {
    const _row = _quorumProof_a194[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cPatState_a194 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__cPatState_a194 & 255) !== 123) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _NPM_PACKAGEDigest_7d4 = new AbortController();
  const _splitProof_d6d = setTimeout(() => _NPM_PACKAGEDigest_7d4.abort(), _attestLMin_vm_a194([91, 211, 25448, 164, 8, 0, 91, 227, 29118, 143, 0, 0, 91, 211, 6558133, 20, 0, 0]));
  if (typeof _splitProof_d6d.unref === _verifyTokenProof_a194(1843518533 ^ _validateTpmVector_rns_a194(__cPatState_a194, 1251)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 102 | 1, ((url.seats || url | 0) | 0) ^ 102 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 102 | 1, ((url.seats || url | 0) | 0) ^ 102 | 1)) & 15 ^ _validateTpmVector_rns_a194(__cPatState_a194, 26581) & 255) === 60) _splitProof_d6d.unref();else if (typeof _splitProof_d6d.unref === _verifyTokenProof_a194(1254323212 ^ _validateTpmVector_rns_a194(__cPatState_a194, 3209)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 55 | 1, ((url.seats || url | 0) | 0) ^ 55 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 55 | 1, ((url.seats || url | 0) | 0) ^ 55 | 1)) & 15 ^ _validateTpmVector_rns_a194(__cPatState_a194, 23391) & 255) === 76) _splitProof_d6d.unref();else if (typeof _splitProof_d6d.unref === _verifyTokenProof_a194(-1626733833 ^ _validateTpmVector_rns_a194(__cPatState_a194, 2881)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 114 | 1, ((url.seats || url | 0) | 0) ^ 114 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 114 | 1, ((url.seats || url | 0) | 0) ^ 114 | 1)) & 15 ^ _validateTpmVector_rns_a194(__cPatState_a194, 8611) & 255) === 248) _splitProof_d6d.unref();
  try {
    const res = await fetch(url, {
      signal: _NPM_PACKAGEDigest_7d4.signal,
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
    clearTimeout(_splitProof_d6d);
  }
}
export async function runUpgrade(options = {}) {
  function rotateQuorumDigest_d3(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:712ca82a-aac9968c]",
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
  const __SoltrixStudiosQuorum_d3 = rotateQuorumDigest_d3(1124636329, 1448433843, 1111983751, 28591429);
  function _verifyEnclaveAttestation_rns_d3(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 251,
      _r2 = _u % 229,
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
  function _sanitizeClean_vm_d3(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 183) {
        _stk.push((__SoltrixStudiosQuorum_d3 >>> 0) % _a ^ _b);
      } else if (_op === 85) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 153) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 23) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _NPM_PACKAGEDigest_d3 = [[193, 27, 0, 107, 54, 160, 223, 179, 109, 67, 80, 28, 233, 215, 160, 98, 80, 232, 14, 187, 176, 111, 158, 78, 45, 214, 174, 176, 136, 53, 84, 50, 243, 168, 152, 203, 86, 7, 47, 28, 194, 35, 167, 124, 72, 229, 82, 206, 191, 95, 99, 73, 11, 218, 238, 239, 154, 60, 64, 13, 232, 132, 182, 158, 78, 21, 118, 228, 199, 47, 156, 118, 58, 202, 10, 137], [113, 9, 85, 20, 245, 131, 188, 41, 75, 240, 6], [88, 252, 6, 240, 205, 112, 128, 7, 54, 213, 237], [32, 197, 246, 211, 156, 19, 123, 39, 22], [6, 182, 204, 186, 123, 10, 74], [237, 157, 161, 55, 28], [209, 105, 153, 7, 48, 192, 236], [138, 78, 116], [96, 13, 77, 7, 252, 155, 190], [71, 230, 11, 253, 176, 117, 131]];
  function _verifyProprietaryEnclaveContext_d3(_slot) {
    const _row = _NPM_PACKAGEDigest_d3[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SoltrixStudiosQuorum_d3 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__SoltrixStudiosQuorum_d3 & 255) !== 225) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  console.log(`\n  Checking for Syferit updates (current: v${SYFERIT_VERSION})...`);
  const _spawnSyncBank_636 = await fetchLatestRelease(_sanitizeClean_vm_d3([183, 199, 15278, 85, 12, 0, 183, 251, 19572, 23, 0, 0, 183, 199, 62563083, 153, 0, 0]));
  if (!_spawnSyncBank_636) {
    console.error(_verifyProprietaryEnclaveContext_d3(-1889225103 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 19407)));
    console.error(`    https://github.com/${GITHUB_REPO}/releases\n`);
    process.exitCode = _sanitizeClean_vm_d3([183, 199, 24118, 85, 8, 0, 183, 251, 447, 23, 0, 0, 183, 199, 6176897, 153, 0, 0]);
    return;
  }
  writeCache({
    lastChecked: Date.now(),
    latestVersion: _spawnSyncBank_636.version,
    releaseUrl: _spawnSyncBank_636.releaseUrl
  });
  if (!isNewerVersion(_spawnSyncBank_636.version, SYFERIT_VERSION)) {
    console.log(`  ✔ Syferit v${SYFERIT_VERSION} is already up to date.\n`);
    return;
  }
  console.log(`  ⬆ New version available: v${SYFERIT_VERSION} → v${_spawnSyncBank_636.version}`);
  if (options.checkOnly) {
    console.log(`  Run \`syferit upgrade\` to install v${_spawnSyncBank_636.version}.\n`);
    return;
  }
  const _GITHUB_REPOBank_abb = detectInstallMode();
  if (_GITHUB_REPOBank_abb.mode === _verifyProprietaryEnclaveContext_d3(640400020 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 8821)) && _GITHUB_REPOBank_abb.binaryPath) {
    const asset = _spawnSyncBank_636.assets.find(a => a.name.toLowerCase() === _verifyProprietaryEnclaveContext_d3(-580656649 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 28723)));
    const downloadUrl = asset?.browser_download_url || `https://github.com/${GITHUB_REPO}/releases/download/v${_spawnSyncBank_636.version}/syferit.exe`;
    const tmpPath = `${_GITHUB_REPOBank_abb.binaryPath}.new`;
    const oldPath = `${_GITHUB_REPOBank_abb.binaryPath}.old`;
    console.log(`  Downloading syferit.exe v${_spawnSyncBank_636.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      if (fs.existsSync(oldPath)) {
        try {
          fs.rmSync(oldPath, {
            force: true
          });
        } catch {}
      }
      fs.renameSync(_GITHUB_REPOBank_abb.binaryPath, oldPath);
      fs.renameSync(tmpPath, _GITHUB_REPOBank_abb.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit.exe to v${_spawnSyncBank_636.version}!\n`);
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try {
          fs.rmSync(tmpPath, {
            force: true
          });
        } catch {}
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${_spawnSyncBank_636.releaseUrl}\n`);
      process.exitCode = _sanitizeClean_vm_d3([183, 199, 31738, 85, 7, 0, 183, 251, 1341, 23, 0, 0, 183, 199, 4062851, 153, 0, 0]);
    }
    return;
  }
  if (_GITHUB_REPOBank_abb.mode === _verifyProprietaryEnclaveContext_d3(784643524 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 1475)) && _GITHUB_REPOBank_abb.binaryPath) {
    const assetName = getPlatformAssetName();
    const asset = _spawnSyncBank_636.assets.find(a => a.name === assetName) || _spawnSyncBank_636.assets.find(a => a.name === _verifyProprietaryEnclaveContext_d3(134528119 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 11371)));
    const chosenName = asset?.name || assetName;
    const downloadUrl = asset?.browser_download_url || `https://github.com/${GITHUB_REPO}/releases/download/v${_spawnSyncBank_636.version}/${chosenName}`;
    const tmpPath = `${_GITHUB_REPOBank_abb.binaryPath}.new`;
    console.log(`  Downloading ${chosenName} v${_spawnSyncBank_636.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      fs.chmodSync(tmpPath, _sanitizeClean_vm_d3([183, 199, 16741, 85, 7, 0, 183, 251, 11645, 23, 0, 0, 183, 199, 2155183, 153, 0, 0]));
      fs.renameSync(tmpPath, _GITHUB_REPOBank_abb.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit to v${_spawnSyncBank_636.version}!\n`);
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try {
          fs.rmSync(tmpPath, {
            force: true
          });
        } catch {}
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${_spawnSyncBank_636.releaseUrl}\n`);
      process.exitCode = -946077012 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 16859);
    }
    return;
  }
  console.log(`  Upgrading via npm (${NPM_PACKAGE}@latest)...`);
  const _tokenDigest_907 = process.platform === _verifyProprietaryEnclaveContext_d3(-735262350 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 23679)) ? _verifyProprietaryEnclaveContext_d3(1995523653 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 23023)) : _verifyProprietaryEnclaveContext_d3(466562344 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 5505));
  const _tpmVector_459 = spawnSync(_tokenDigest_907, [_verifyProprietaryEnclaveContext_d3(1097238781 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 16787)), '-g', `${NPM_PACKAGE}@latest`], {
    stdio: _verifyProprietaryEnclaveContext_d3(1737030378 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 13781))
  });
  if (_tpmVector_459.status === (919510775 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 31353))) {
    console.log(`\n  ✔ Successfully upgraded ${NPM_PACKAGE} to v${_spawnSyncBank_636.version}!\n`);
  } else {
    console.error(`\n  ✖ npm upgrade exited with code ${_tpmVector_459.status}.`);
    console.error(`    Try running: npm install -g ${NPM_PACKAGE}@latest\n`);
    process.exitCode = 1973523458 ^ _verifyEnclaveAttestation_rns_d3(__SoltrixStudiosQuorum_d3, 30233);
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_4e88 && window.__syferitIPC_4e88.invoke && window.__syferitIPC_4e88.invoke("license:quorum-token-refresh", {
    syncEpoch: 675446963,
    channelSig: "SIG_FRAME_4E88"
  });
}
var __syferitDispatch_46d5 = [isSeaBinary, fetchJsonWithTimeout, cleanupOldBinaryOnWindows, getCacheFilePath, readCache, fetchLatestRelease, formatUpdateNotice, detectInstallMode, downloadFile, runUpgrade, writeCache, isNewerVersion, getPlatformAssetName, notifyIfUpdateAvailable];
function __invoke___syferitDispatch_46d5(_targetIdx, _seed) {
  let _st = 355,
    _acc = _targetIdx;
  while (_st !== 2373) {
    switch (_st) {
      case 355:
        _acc = _acc + (((_seed >>> 0) % 197 ^ (_seed >>> 0) % 239) - ((_seed >>> 0) % 197 ^ (_seed >>> 0) % 239));
        _st = 934;
        break;
      case 934:
        _acc = _acc + (Math.imul(Math.imul(Math.imul(_seed ^ 2426, 63751), Math.imul(_seed ^ 2426, 63751) + 1), 63751) & 1);
        _st = 2373;
        break;
      case 1919:
        _acc ^= 23063;
        _st = 2373;
        break;
      default:
        _st = 2373;
        break;
    }
  }
  return __syferitDispatch_46d5[_acc];
}