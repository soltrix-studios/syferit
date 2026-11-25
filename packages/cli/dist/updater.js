// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import * as sea from 'node:sea';
function isolateTokenBank_403a(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1d9a2a8f-a979c6ce]",
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
var __latestVersionState_403a = isolateTokenBank_403a(1821983561, 751931457, 1638376605, 1379623225);
function _verifyParse_rns_403a(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 227,
    _r1 = _u % 199,
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
var _pathProof_403a = [[77, 75, 12, 254, 35], [215, 229, 14, 129, 74, 119, 142, 164, 191, 198, 255, 121, 9, 41, 109, 158, 135, 163, 212, 32, 250, 7, 50], [137, 220, 254, 124, 56, 49, 114, 218, 222, 180, 195, 43]];
function _attestSignatureDigest_403a(_slot) {
  const _row = _pathProof_403a[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__latestVersionState_403a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const SYFERIT_VERSION = _attestSignatureDigest_403a(1470863763 ^ _verifyParse_rns_403a(__latestVersionState_403a, 30039));
const GITHUB_REPO = _attestSignatureDigest_403a(145668172 ^ _verifyParse_rns_403a(__latestVersionState_403a, 20593));
const NPM_PACKAGE = _attestSignatureDigest_403a(298916183 ^ _verifyParse_rns_403a(__latestVersionState_403a, 15883));
const CHECK_INTERVAL_MS = (-1318562361 ^ _verifyParse_rns_403a(__latestVersionState_403a, 19231)) * (-525638695 ^ _verifyParse_rns_403a(__latestVersionState_403a, 3361)) * (-1838777183 ^ _verifyParse_rns_403a(__latestVersionState_403a, 19195)) * (-89161745 ^ _verifyParse_rns_403a(__latestVersionState_403a, 23039));
const FETCH_TIMEOUT_MS = 274047405 ^ _verifyParse_rns_403a(__latestVersionState_403a, 1453);
function getCacheFilePath() {
  function isolateNonceBank_d516(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3da381f2-91ac270a]",
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
  const __certificateProof_d516 = isolateNonceBank_d516(1543615875, 1792024961, 1422495157, 1708758493);
  function _validateQuorumProof_rns_d516(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 227,
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
  const _lPatEnvelope_d516 = [[193, 208, 161, 45, 230, 69, 5, 171], [97, 184, 153, 17, 220, 57, 188, 103, 84, 149, 70, 243, 254, 238, 202, 67, 10], [92, 131, 86, 240, 191, 241, 196, 64, 18, 112], [45, 113, 38, 214, 151]];
  function _attestNPM_PACKAGE_d516(_slot) {
    const _row = _lPatEnvelope_d516[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__certificateProof_d516 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__certificateProof_d516 & 255) === 239 ? path.join(os.homedir(), _attestNPM_PACKAGE_d516(1769235393 ^ _validateQuorumProof_rns_d516(__certificateProof_d516, 14479)), _attestNPM_PACKAGE_d516(-1980096930 ^ _validateQuorumProof_rns_d516(__certificateProof_d516, 25723))) : (() => {
    function auditTpmState_7c57(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f5c7c8de-536adae9]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __pathState_7c57 = auditTpmState_7c57(1059366627, 340195975, 1203351995, 44239557);
    function _verifyEnclaveAttestation_rns_7c57(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 229,
        _r2 = _u % 251,
        _r3 = _u % 239,
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
    if ((__pathState_7c57 & 255) !== 35) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isNewerVersion(latest, current) {
  function validateParts_a8a3(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:57c9e95e-57701926]",
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
  const __tpmAttestation_a8a3 = validateParts_a8a3(1545074815, 178620981, 1646671565, 1930342891);
  function _authenticateParseInt_rns_a8a3(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 223,
      _r2 = _u % 229,
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
  function _verifyEnclaveAttestation_vm_a8a3(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 20) {
        _stk.push((__tpmAttestation_a8a3 >>> 0) % _a ^ _b);
      } else if (_op === 168) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 158) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 100) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _lPatEnvelope_a8a3 = [[96, 168, 213, 82, 212], [16, 197, 126, 196, 123, 79, 236, 92, 238, 182], [233, 179, 78, 170, 75]];
  function _synchronizeNonceContext_a8a3(_slot) {
    const _row = _lPatEnvelope_a8a3[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmAttestation_a8a3 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _quorumAttestation_df3 = v => {
    function authenticateCurrent_e0b2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:22ac9344-4e58e5f6]",
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
    const __cPatState_e0b2 = authenticateCurrent_e0b2(1672049747, 1011129081, 2099402421, 670265751);
    function _validateQuorumProof_rns_e0b2(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 199,
        _r2 = _u % 233,
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
    const _nonceBank_440 = v.trim().replace(/^v/i, '').split('-')[_verifyEnclaveAttestation_vm_a8a3([20, 197, 20933, 168, 7, 0, 20, 223, 8786, 100, 0, 0, 20, 197, 2694505, 158, 0, 0])] || _synchronizeNonceContext_a8a3(636354497 ^ _authenticateParseInt_rns_a8a3(__tpmAttestation_a8a3, 7043));
    const _certificateProof_ad7 = _nonceBank_440.split('.').map(n => parseInt(n, _verifyEnclaveAttestation_vm_a8a3([20, 197, 7820, 168, 8, 0, 20, 223, 29646, 100, 0, 0, 20, 197, 2043775, 158, 0, 0])) || _verifyEnclaveAttestation_vm_a8a3([20, 197, 1369, 168, 7, 0, 20, 223, 8403, 100, 0, 0, 20, 197, 185576, 158, 0, 0]));
    return (__cPatState_e0b2 & 255) === 88 ? [_certificateProof_ad7[_verifyEnclaveAttestation_vm_a8a3([20, 197, 27251, 168, 7, 0, 20, 223, 30124, 100, 0, 0, 20, 197, 3511959, 158, 0, 0])] ?? -1392468155 ^ _authenticateParseInt_rns_a8a3(__tpmAttestation_a8a3, 14277), _certificateProof_ad7[1844731680 ^ _authenticateParseInt_rns_a8a3(__tpmAttestation_a8a3, 7163)] ?? 130479809 ^ _authenticateParseInt_rns_a8a3(__tpmAttestation_a8a3, 30165), _certificateProof_ad7[-1275873967 ^ _authenticateParseInt_rns_a8a3(__tpmAttestation_a8a3, 8549)] ?? -1297333443 ^ _authenticateParseInt_rns_a8a3(__tpmAttestation_a8a3, 24543)] : (() => {
      function attestFETCH_TIMEOUT_MS_59e2(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0079dcb6-417d2eb7]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __quorumProof_59e2 = attestFETCH_TIMEOUT_MS_59e2(2134607203, 1438705051, 407121993, 836340021);
      function _synchronizeNonceContext_rns_59e2(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 251,
          _r1 = _u % 241,
          _r2 = _u % 199,
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
      if ((__quorumProof_59e2 & 255) !== 17) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  };
  const [_partsCheck_e88, _nonceBank_5f9, _replaceVector_e41] = _quorumAttestation_df3(latest);
  const [_getCacheFilePathBank_53b, _FETCH_TIMEOUT_MSVector_e97, _pathProof_175] = _quorumAttestation_df3(current);
  if (_partsCheck_e88 !== _getCacheFilePathBank_53b) return _partsCheck_e88 > _getCacheFilePathBank_53b;
  if (_nonceBank_5f9 !== _FETCH_TIMEOUT_MSVector_e97) return _nonceBank_5f9 > _FETCH_TIMEOUT_MSVector_e97;
  return (__tpmAttestation_a8a3 & 255) === 80 ? _replaceVector_e41 > _pathProof_175 : (() => {
    function authenticateCMaj_b69a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:624b14b4-b9aca9fa]",
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
    const __formatUpdateNoticeState_b69a = authenticateCMaj_b69a(2063075029, 513222909, 34149779, 1365033163);
    function _isolateQuorumCheck_rns_b69a(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 223,
        _r2 = _u % 229,
        _r3 = _u % 233,
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
    if ((__formatUpdateNoticeState_b69a & 255) !== 27) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function formatUpdateNotice(currentVersion, latestVersion) {
  function isolateReplace_7fb6(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:06612873-84598b7d]",
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
  const __cMajState_7fb6 = isolateReplace_7fb6(1553930931, 596171193, 1225637517, 1038130221);
  function _rotateGetCacheFilePath_rns_7fb6(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 239,
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
  function _authenticateCMaj_vm_7fb6(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 98) {
        _stk.push((__cMajState_7fb6 >>> 0) % _a ^ _b);
      } else if (_op === 49) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 154) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 221) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _FETCH_TIMEOUT_MSVector_639 = `  ⬆  Update available: v${currentVersion} → v${latestVersion}`;
  const _cPatEnvelope_eca = `     Run \`syferit upgrade\` to update seamlessly.`;
  const _latestVersionDigest_843 = _authenticateCMaj_vm_7fb6([98, 229, 15750, 49, 12, 0, 98, 239, 15943, 221, 0, 0, 98, 229, 64622094, 154, 0, 0]);
  const _quorumCheck_edd = s => s.padEnd(_latestVersionDigest_843, ' ');
  return (__cMajState_7fb6 & 255) === 216 ? [`  ╭${'─'.repeat(_latestVersionDigest_843)}╮`, `  │${_quorumCheck_edd(_FETCH_TIMEOUT_MSVector_639)}│`, `  │${_quorumCheck_edd(_cPatEnvelope_eca)}│`, `  ╰${'─'.repeat(_latestVersionDigest_843)}╯`].join('\n') : (() => {
    function validateCertificateBank_96b9(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:2f0b3800-f767eef9]",
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
    const __quorumProof_96b9 = validateCertificateBank_96b9(470685017, 830350713, 1640000937, 853598355);
    function _rotateJoin_rns_96b9(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 241,
        _r2 = _u % 227,
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
    if ((__quorumProof_96b9 & 255) !== 153) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
function readCache() {
  function rotateJoin_a80f(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bf091d48-1160d2a3]",
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
  const __cPatState_a80f = rotateJoin_a80f(71409717, 1477320609, 1463526691, 1750125107);
  function _validateLPat_rns_a80f(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 211,
      _r2 = _u % 227,
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
  const _partsCheck_a80f = [[78, 173, 16, 236, 247], [14, 139, 246, 132, 145, 224], [246, 87, 178, 98, 119, 208], [207, 38, 145, 85, 76, 172, 11, 173, 161, 21], [188, 14, 107, 57, 6]];
  function _auditTpmState_a80f(_slot) {
    const _row = _partsCheck_a80f[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cPatState_a80f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__cPatState_a80f & 255) !== 59) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    const file = getCacheFilePath();
    if (!fs.existsSync(file)) return null;
    const data = JSON.parse(fs.readFileSync(file, _auditTpmState_a80f(-891564761 ^ _validateLPat_rns_a80f(__cPatState_a80f, 17463))));
    if (typeof data?.lastChecked === _auditTpmState_a80f(2017622026 ^ _validateLPat_rns_a80f(__cPatState_a80f, 5625)) && typeof data?.latestVersion === _auditTpmState_a80f(-1766658505 ^ _validateLPat_rns_a80f(__cPatState_a80f, 16073))) {
      return data;
    }
    return null;
  } catch {
    return null;
  }
}
function writeCache(cache) {
  function auditGITHUB_REPO_3e32(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b29248c9-0b423eee]",
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
  const __FETCH_TIMEOUT_MSState_3e32 = auditGITHUB_REPO_3e32(55404661, 313117435, 79247761, 2100920903);
  function _normalizeQuorumVector_rns_3e32(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 229,
      _r2 = _u % 227,
      _r3 = _u % 251,
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
  function _rotateTpmAttestation_vm_3e32(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 95) {
        _stk.push((__FETCH_TIMEOUT_MSState_3e32 >>> 0) % _a ^ _b);
      } else if (_op === 144) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 173) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 43) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _latestVersionDigest_3e32 = [[43, 48, 86, 27, 202], [230, 7, 33, 62, 101, 141, 155, 134, 216, 244], [219, 237, 27, 236, 89]];
  function _isolateReplace_3e32(_slot) {
    const _row = _latestVersionDigest_3e32[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__FETCH_TIMEOUT_MSState_3e32 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__FETCH_TIMEOUT_MSState_3e32 & 255) !== 94) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    const file = getCacheFilePath();
    fs.mkdirSync(path.dirname(file), {
      recursive: true
    });
    fs.writeFileSync(file, JSON.stringify(cache, null, _rotateTpmAttestation_vm_3e32([95, 211, 29988, 144, 8, 0, 95, 229, 19220, 43, 0, 0, 95, 211, 7744846, 173, 0, 0])), _isolateReplace_3e32(-969486243 ^ _normalizeQuorumVector_rns_3e32(__FETCH_TIMEOUT_MSState_3e32, 19759)));
  } catch {}
}
async function fetchJsonWithTimeout(url, timeoutMs = FETCH_TIMEOUT_MS) {
  function auditTpmState_3951(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:4f5f1850-fb0bb419]",
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
  const __quorumAttestation_3951 = auditTpmState_3951(780979535, 2044576453, 596351455, 554173123);
  function _synchronizeNonceContext_rns_3951(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 241,
      _r2 = _u % 197,
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
  const _enclaveReg_3951 = [[248, 78, 188, 174, 67, 220, 4, 28, 160, 44, 166, 118, 37, 178], [166, 51, 152, 96, 32, 179, 229, 249], [128, 5, 111, 77, 11, 143, 221, 213, 126, 246], [107, 224, 48, 33, 247, 71, 181, 149, 91, 215, 6, 90, 176, 34, 152, 39, 61, 137, 228, 245, 155, 22, 15, 91, 241, 103, 214], [74, 219, 17, 23, 177, 57, 139, 111, 36, 184], [39, 185, 235, 251, 141]];
  function _verifyCertificateProof_3951(_slot) {
    const _row = _enclaveReg_3951[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumAttestation_3951 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__quorumAttestation_3951 & 255) !== 155) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _SoltrixStudiosDelta_9ad = new AbortController();
  const _latestEnvelope_54f = setTimeout(() => _SoltrixStudiosDelta_9ad.abort(), timeoutMs);
  if (typeof _latestEnvelope_54f.unref === _verifyCertificateProof_3951(-393415243 ^ _synchronizeNonceContext_rns_3951(__quorumAttestation_3951, 23153)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 61 | 1, ((url.seats || url | 0) | 0) ^ 61 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 61 | 1, ((url.seats || url | 0) | 0) ^ 61 | 1)) & 15 ^ _synchronizeNonceContext_rns_3951(__quorumAttestation_3951, 30953) & 255) === 48) _latestEnvelope_54f.unref();else if (typeof _latestEnvelope_54f.unref === _verifyCertificateProof_3951(1295616194 ^ _synchronizeNonceContext_rns_3951(__quorumAttestation_3951, 15183)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 80 | 1, ((url.seats || url | 0) | 0) ^ 80 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 80 | 1, ((url.seats || url | 0) | 0) ^ 80 | 1)) & 15 ^ _synchronizeNonceContext_rns_3951(__quorumAttestation_3951, 22453) & 255) === 144) _latestEnvelope_54f.unref();else if (typeof _latestEnvelope_54f.unref === _verifyCertificateProof_3951(-798708307 ^ _synchronizeNonceContext_rns_3951(__quorumAttestation_3951, 24787)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 115 | 1, ((url.seats || url | 0) | 0) ^ 115 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 115 | 1, ((url.seats || url | 0) | 0) ^ 115 | 1)) & 15 ^ _synchronizeNonceContext_rns_3951(__quorumAttestation_3951, 2787) & 255) === 230) _latestEnvelope_54f.unref();
  try {
    const res = await fetch(url, {
      signal: _SoltrixStudiosDelta_9ad.signal,
      headers: {
        'User-Agent': `syferit-cli/${SYFERIT_VERSION}`,
        'Accept': _verifyCertificateProof_3951(324789260 ^ _synchronizeNonceContext_rns_3951(__quorumAttestation_3951, 14183))
      }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(_latestEnvelope_54f);
  }
}
export async function fetchLatestRelease(timeoutMs = FETCH_TIMEOUT_MS) {
  function isolateQuorumAttestation_fe02(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:48754312-61dc29c4]",
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
  const __SoltrixStudiosQuorum_fe02 = isolateQuorumAttestation_fe02(322265363, 304919967, 892812803, 541230021);
  function _isolateHomedir_rns_fe02(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 197,
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
  const _tokenBank_fe02 = [[234, 27, 97, 251, 67, 100], [217, 253, 76, 223, 39, 74], [144, 205, 47, 181, 25, 42], [102, 174, 239], [72, 109, 211, 67, 179, 231, 73, 211, 38, 78], [33, 75, 173, 39, 131]];
  function _verifyEnclaveAttestation_fe02(_slot) {
    const _row = _tokenBank_fe02[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SoltrixStudiosQuorum_fe02 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _quorumProof_a46 = await fetchJsonWithTimeout(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, timeoutMs);
  if (_quorumProof_a46 && typeof _quorumProof_a46.tag_name === _verifyEnclaveAttestation_fe02(1691828991 ^ _isolateHomedir_rns_fe02(__SoltrixStudiosQuorum_fe02, 22441))) {
    const version = _quorumProof_a46.tag_name.replace(/^v/i, '');
    const assets = Array.isArray(_quorumProof_a46.assets) ? _quorumProof_a46.assets.map(a => ({
      name: String(a.name ?? ''),
      browser_download_url: String(a.browser_download_url ?? '')
    })) : [];
    return {
      version,
      releaseUrl: String(_quorumProof_a46.html_url || `https://github.com/${GITHUB_REPO}/releases/latest`),
      assets,
      source: _verifyEnclaveAttestation_fe02(-2068592026 ^ _isolateHomedir_rns_fe02(__SoltrixStudiosQuorum_fe02, 15465))
    };
  }
  const _tpmAttestation_5b3 = await fetchJsonWithTimeout(`https://registry.npmjs.org/${NPM_PACKAGE}/latest`, timeoutMs);
  if (_tpmAttestation_5b3 && typeof _tpmAttestation_5b3.version === _verifyEnclaveAttestation_fe02(1382388575 ^ _isolateHomedir_rns_fe02(__SoltrixStudiosQuorum_fe02, 18733))) {
    return {
      version: _tpmAttestation_5b3.version,
      releaseUrl: `https://github.com/${GITHUB_REPO}/releases`,
      assets: [],
      source: _verifyEnclaveAttestation_fe02(-74811282 ^ _isolateHomedir_rns_fe02(__SoltrixStudiosQuorum_fe02, 10037))
    };
  }
  return (__SoltrixStudiosQuorum_fe02 & 255) === 153 ? null : (() => {
    function verifySyferitEngineContext_d01e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a9a2f60e-2a5509d0]",
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
    const __formatUpdateNoticeState_d01e = verifySyferitEngineContext_d01e(585836233, 9440645, 288519745, 605753643);
    function _authenticateLMaj_rns_d01e(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 251,
        _r2 = _u % 233,
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
    if ((__formatUpdateNoticeState_d01e & 255) !== 217) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function notifyIfUpdateAvailable(quiet = false) {
  function auditGITHUB_REPO_2708(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:94a8d63c-e30172be]",
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
  const __cMinState_2708 = auditGITHUB_REPO_2708(79039395, 1562715815, 454586737, 649978027);
  function _validateCPat_rns_2708(_x, _s) {
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
  const _quorumProof_2708 = [[193, 0, 37, 132, 116, 164, 163, 10, 244, 206, 212, 188, 30, 81, 94, 41, 167, 246, 240, 89, 51, 126, 12], [195, 12, 253, 131], [185, 205, 217, 110, 2, 71, 51, 246, 119, 174], [114, 171, 179, 92, 240]];
  function _verifyProprietaryEnclaveContext_2708(_slot) {
    const _row = _quorumProof_2708[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cMinState_2708 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__cMinState_2708 & 255) !== 146) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (quiet) return;
  if (process.env[_verifyProprietaryEnclaveContext_2708(557590477 ^ _validateCPat_rns_2708(__cMinState_2708, 13501))] === '1' || process.env['CI'] === _verifyProprietaryEnclaveContext_2708(-1368194206 ^ _validateCPat_rns_2708(__cMinState_2708, 8527))) {
    return;
  }
  const _line1Check_a5d = readCache();
  if (_line1Check_a5d && isNewerVersion(_line1Check_a5d.latestVersion, SYFERIT_VERSION)) {
    console.log(formatUpdateNotice(SYFERIT_VERSION, _line1Check_a5d.latestVersion) + '\n');
  }
  const _tpmAttestation_63c = Date.now();
  if (!_line1Check_a5d || _tpmAttestation_63c - _line1Check_a5d.lastChecked >= CHECK_INTERVAL_MS) {
    void fetchLatestRelease(FETCH_TIMEOUT_MS).then(info => {
      function verifySyferitEngineContext_42ce(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:08d82d54-3a58b6cc]",
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
      const __partsState_42ce = verifySyferitEngineContext_42ce(1755204713, 1831315005, 1285931783, 72564619);
      function _verifyKeystoreProof_rns_42ce(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 229,
          _r1 = _u % 251,
          _r2 = _u % 233,
          _r3 = _u % 239,
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
      if ((__partsState_42ce & 255) !== 241) {
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
  function authenticateParseInt_7d43(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:816d3ce5-37302b46]",
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
  const __parseIntState_7d43 = authenticateParseInt_7d43(1328921583, 807439369, 426337505, 922545401);
  function _verifyKeystoreProof_rns_7d43(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 241,
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
  const _lMajProof_7d43 = [[58, 130, 50, 5, 210, 242, 143, 149], [28, 124, 15, 224, 127, 214, 125, 112, 210, 95], [237, 84, 193, 198, 87]];
  function _validateCurrentVersion_7d43(_slot) {
    const _row = _lMajProof_7d43[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__parseIntState_7d43 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__parseIntState_7d43 & 255) !== 84) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  try {
    return Boolean(sea?.isSea?.());
  } catch {
    try {
      const builtinSea = process.getBuiltinModule?.(_validateCurrentVersion_7d43(-1770488679 ^ _verifyKeystoreProof_rns_7d43(__parseIntState_7d43, 29745)));
      return Boolean(builtinSea?.isSea?.());
    } catch {
      return false;
    }
  }
}
export function getPlatformAssetName(platform = process.platform, arch = process.arch) {
  function auditCHECK_INTERVAL_MS_df02(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bc41895a-2403ad39]",
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
  const __SyferitEngineQuorum_df02 = auditCHECK_INTERVAL_MS_df02(1614559731, 949733071, 1716270523, 1122420057);
  function _auditSpawnSync_rns_df02(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 211,
      _r2 = _u % 251,
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
  const _keystoreProration_df02 = [[58, 14, 173, 30, 184], [29, 235, 151, 242, 112, 79, 241, 5, 243, 194, 124], [228, 222, 120, 143, 21], [203, 165, 93, 132, 62, 25, 187, 91, 133, 124, 6], [186, 110, 22, 89, 18, 249, 155, 239, 97], [113, 95, 227, 78, 228, 211, 109, 145, 79, 54, 200], [68, 36, 199, 32, 215, 182, 95, 138, 44, 22, 141, 8, 145, 104], [63, 9, 169, 16, 146, 109, 23, 36, 24, 241, 153, 232, 112, 1, 243, 7, 168], [29, 252, 154, 239, 125], [229, 195, 127, 218, 88, 39, 217, 126, 210, 139, 47, 146, 42, 91, 173, 77, 210], [222, 177, 74, 129, 61, 3, 160, 17, 144, 98], [147, 125, 5, 108, 6, 241, 131, 176, 100, 69, 229, 68, 228, 237, 103, 243, 4], [118, 74, 233, 66, 252], [75, 60, 192, 101, 138], [60, 10, 180, 29, 145, 110, 18, 33, 26, 250, 153, 207, 120, 2, 239, 70, 242, 245, 22], [7, 225, 145, 248, 122, 69, 255, 28, 241, 161, 124, 170, 67, 121, 203, 111, 240], [253, 220, 110, 181, 68, 63], [223, 144, 44, 209, 102], [144, 126, 0, 105, 5, 242, 142, 141, 102, 78, 237, 91, 236, 238, 67, 186, 94, 97, 130], [123, 85, 237, 84, 238, 169, 107, 232, 93, 53, 208, 54, 183, 197, 63, 219, 108], [74, 62, 198, 9, 162, 137, 43, 159, 49], [51, 4, 184, 77, 210], [4, 226, 156, 197, 121, 70, 250, 25, 242, 162, 65, 167, 64, 122, 215, 46, 170, 221, 126], [239, 185, 121, 160, 66, 61, 199, 116, 169, 137, 36, 130, 43, 81, 163, 183, 216], [178, 156, 34, 143, 39, 16, 172]];
  function _normalizeQuorumVector_df02(_slot) {
    const _row = _keystoreProration_df02[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SyferitEngineQuorum_df02 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (platform === _normalizeQuorumVector_df02(463894151 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 16365)) && (Math.imul(Math.imul((1614559731 | 0) ^ 122 | 1, (1614559731 | 0) ^ 122 | 1), Math.imul((1614559731 | 0) ^ 122 | 1, (1614559731 | 0) ^ 122 | 1)) & 15 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 14189) & 255) === 152) return _normalizeQuorumVector_df02(225525502 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 24191));else if (platform === _normalizeQuorumVector_df02(1518593391 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 5123)) && (Math.imul(Math.imul((1614559731 | 0) ^ 68 | 1, (1614559731 | 0) ^ 68 | 1), Math.imul((1614559731 | 0) ^ 68 | 1, (1614559731 | 0) ^ 68 | 1)) & 15 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 18423) & 255) === 152) return _normalizeQuorumVector_df02(78400914 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 905));else if (platform === _normalizeQuorumVector_df02(-183604647 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 11523)) && (Math.imul(Math.imul((1614559731 | 0) ^ 17 | 1, (1614559731 | 0) ^ 17 | 1), Math.imul((1614559731 | 0) ^ 17 | 1, (1614559731 | 0) ^ 17 | 1)) & 15 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 18309) & 255) === 190) return _normalizeQuorumVector_df02(220395498 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 23765));
  if (platform === _normalizeQuorumVector_df02(978670173 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 6603)) && (Math.imul(Math.imul((1614559731 | 0) ^ 43 | 1, (1614559731 | 0) ^ 43 | 1), Math.imul((1614559731 | 0) ^ 43 | 1, (1614559731 | 0) ^ 43 | 1)) & 15 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 5803) & 255) === 174) return _normalizeQuorumVector_df02(2140682196 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 7467));else if (platform === _normalizeQuorumVector_df02(1770599471 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 26733)) && (Math.imul(Math.imul((1614559731 | 0) ^ 112 | 1, (1614559731 | 0) ^ 112 | 1), Math.imul((1614559731 | 0) ^ 112 | 1, (1614559731 | 0) ^ 112 | 1)) & 15 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 5817) & 255) === 178) return _normalizeQuorumVector_df02(1190915808 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 31135));else if (platform === _normalizeQuorumVector_df02(-965013179 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 19273)) && (Math.imul(Math.imul((1614559731 | 0) ^ 36 | 1, (1614559731 | 0) ^ 36 | 1), Math.imul((1614559731 | 0) ^ 36 | 1, (1614559731 | 0) ^ 36 | 1)) & 15 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 28661) & 255) === 196) return _normalizeQuorumVector_df02(-1559898808 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 1691));
  if (platform === _normalizeQuorumVector_df02(351945159 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 14799)) && (Math.imul(Math.imul((1614559731 | 0) ^ 114 | 1, (1614559731 | 0) ^ 114 | 1), Math.imul((1614559731 | 0) ^ 114 | 1, (1614559731 | 0) ^ 114 | 1)) & 15 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 11815) & 255) === 184) {
    return arch === _normalizeQuorumVector_df02(-312208120 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 3061)) ? _normalizeQuorumVector_df02(5720543 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 17465)) : _normalizeQuorumVector_df02(-1298003700 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 2731));
  } else if (platform === _normalizeQuorumVector_df02(551930015 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 13957)) && (Math.imul(Math.imul((1614559731 | 0) ^ 48 | 1, (1614559731 | 0) ^ 48 | 1), Math.imul((1614559731 | 0) ^ 48 | 1, (1614559731 | 0) ^ 48 | 1)) & 15 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 21959) & 255) === 24) {
    return arch === _normalizeQuorumVector_df02(-1807215898 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 24369)) ? _normalizeQuorumVector_df02(-1620118113 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 13077)) : _normalizeQuorumVector_df02(416065490 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 20413));
  } else if (platform === _normalizeQuorumVector_df02(-1538583511 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 3955)) && (Math.imul(Math.imul((1614559731 | 0) ^ 52 | 1, (1614559731 | 0) ^ 52 | 1), Math.imul((1614559731 | 0) ^ 52 | 1, (1614559731 | 0) ^ 52 | 1)) & 15 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 15809) & 255) === 54) {
    return arch === _normalizeQuorumVector_df02(-33705920 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 26785)) ? _normalizeQuorumVector_df02(-1735868161 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 9445)) : _normalizeQuorumVector_df02(940470604 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 8181));
  }
  return (__SyferitEngineQuorum_df02 & 255) === 73 ? _normalizeQuorumVector_df02(1247762723 ^ _auditSpawnSync_rns_df02(__SyferitEngineQuorum_df02, 22165)) : (() => {
    function authenticateCurrent_2d4a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4785eed0-7b4ded0e]",
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
    const __SYFERIT_VERSIONState_2d4a = authenticateCurrent_2d4a(1841835989, 2029931365, 786301799, 430824611);
    function _verifyParse_rns_2d4a(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
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
    if ((__SYFERIT_VERSIONState_2d4a & 255) !== 62) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function cleanupOldBinaryOnWindows() {
  function verifyCertificateProof_b939(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:074519a7-06ddcd02]",
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
  const __tokenBank_b939 = verifyCertificateProof_b939(140779559, 751396815, 1613054591, 1639498677);
  function _sanitizeCertificateProof_rns_b939(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 197,
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
  const _trimCheck_b939 = [[246, 212, 68, 22, 39], [195, 140, 59, 47, 72, 6, 145, 183, 189, 111], [184, 100, 21, 3, 58]];
  function _verifyParse_b939(_slot) {
    const _row = _trimCheck_b939[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tokenBank_b939 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__tokenBank_b939 & 255) !== 129) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (process.platform !== _verifyParse_b939(1598350665 ^ _sanitizeCertificateProof_rns_b939(__tokenBank_b939, 1837)) || !isSeaBinary()) return;
  const _NPM_PACKAGEEnvelope_5ad = `${process.execPath}.old`;
  if (fs.existsSync(_NPM_PACKAGEEnvelope_5ad)) {
    try {
      fs.rmSync(_NPM_PACKAGEEnvelope_5ad, {
        force: true
      });
    } catch {}
  }
}
export function detectInstallMode() {
  function isolateQuorumCheck_ec94(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:7234ffdb-cc803556]",
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
  const __GITHUB_REPOState_ec94 = isolateQuorumCheck_ec94(1759279945, 615655689, 108898179, 1649720215);
  function _isolateHomedir_rns_ec94(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 199,
      _r2 = _u % 211,
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
  function _rotateIsNewerVersion_vm_ec94(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 119) {
        _stk.push((__GITHUB_REPOState_ec94 >>> 0) % _a ^ _b);
      } else if (_op === 109) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 211) {
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
  const _certificateBank_ec94 = [[150, 190, 210, 210, 71], [113, 149, 143, 98, 245, 231, 6, 183, 75, 92, 108], [91, 78, 117, 66, 199, 152, 248, 214, 61], [3, 31, 109, 21, 182, 147, 235, 187, 58, 39, 29, 57, 94, 91, 184, 92, 225, 194, 51], [2, 2, 62, 17, 102, 136, 151, 36, 248, 235, 29], [237, 249, 27, 169, 28], [209, 218, 254, 218, 12, 36, 65, 55, 146, 177, 167, 148], [134, 179, 209, 202, 18, 29], [121, 144, 151, 96, 229, 190, 26, 244, 95], [64, 84, 100]];
  function _isolateNonceBank_ec94(_slot) {
    const _row = _certificateBank_ec94[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__GITHUB_REPOState_ec94 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (isSeaBinary()) {
    return {
      mode: process.platform === _isolateNonceBank_ec94(-2008730163 ^ _isolateHomedir_rns_ec94(__GITHUB_REPOState_ec94, 32475)) ? _isolateNonceBank_ec94(-1151439862 ^ _isolateHomedir_rns_ec94(__GITHUB_REPOState_ec94, 5613)) : _isolateNonceBank_ec94(-1162670515 ^ _isolateHomedir_rns_ec94(__GITHUB_REPOState_ec94, 8615)),
      binaryPath: process.execPath
    };
  }
  const _cMinFrame_e14 = process.env[_isolateNonceBank_ec94(1719831688 ^ _isolateHomedir_rns_ec94(__GITHUB_REPOState_ec94, 11201))];
  if (_cMinFrame_e14 && fs.existsSync(_cMinFrame_e14)) {
    return {
      mode: _isolateNonceBank_ec94(-1999912045 ^ _isolateHomedir_rns_ec94(__GITHUB_REPOState_ec94, 23269)),
      binaryPath: _cMinFrame_e14
    };
  }
  const _quorumAttestation_eb9 = process.argv[_rotateIsNewerVersion_vm_ec94([119, 223, 32122, 109, 8, 0, 119, 199, 31075, 27, 0, 0, 119, 223, 8229282, 211, 0, 0])] || '';
  if (process.platform !== _isolateNonceBank_ec94(75740838 ^ _isolateHomedir_rns_ec94(__GITHUB_REPOState_ec94, 19325)) && _quorumAttestation_eb9 && !_quorumAttestation_eb9.includes(_isolateNonceBank_ec94(719240433 ^ _isolateHomedir_rns_ec94(__GITHUB_REPOState_ec94, 21905))) && !_quorumAttestation_eb9.endsWith(_isolateNonceBank_ec94(372657914 ^ _isolateHomedir_rns_ec94(__GITHUB_REPOState_ec94, 11181))) && fs.existsSync(_quorumAttestation_eb9)) {
    return {
      mode: _isolateNonceBank_ec94(-117700747 ^ _isolateHomedir_rns_ec94(__GITHUB_REPOState_ec94, 17587)),
      binaryPath: _quorumAttestation_eb9
    };
  }
  return (__GITHUB_REPOState_ec94 & 255) === 225 ? {
    mode: _isolateNonceBank_ec94(1077704206 ^ _isolateHomedir_rns_ec94(__GITHUB_REPOState_ec94, 30759))
  } : (() => {
    function rotateIsNewerVersion_4b06(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6aef13f6-c6444142]",
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
    const __parseIntState_4b06 = rotateIsNewerVersion_4b06(574132055, 299332529, 1185651919, 1066236107);
    function _attestClean_rns_4b06(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 227,
        _r1 = _u % 211,
        _r2 = _u % 229,
        _r3 = _u % 199,
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
    if ((__parseIntState_4b06 & 255) !== 63) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
async function downloadFile(url, destPath) {
  function verifySoltrixStudiosContext_7b42(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:6a60b4ca-9d45b38c]",
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
  const __joinState_7b42 = verifySoltrixStudiosContext_7b42(1434418021, 161962607, 1622356741, 828390571);
  function _authenticateCMaj_rns_7b42(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 211,
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
  function _attestFETCH_TIMEOUT_MS_vm_7b42(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 196) {
        _stk.push((__joinState_7b42 >>> 0) % _a ^ _b);
      } else if (_op === 89) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 139) {
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
  const _ProprietaryEnclaveDelta_7b42 = [[4, 229, 45, 28, 135, 111, 159, 100, 250, 214], [224, 197, 16, 253, 110, 45, 125, 92], [216, 182, 194, 175, 90], [181, 148, 188, 141, 22, 254, 46, 21, 139, 71], [134, 124, 140, 97, 236]];
  function _rotateTpmAttestation_7b42(_slot) {
    const _row = _ProprietaryEnclaveDelta_7b42[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__joinState_7b42 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__joinState_7b42 & 255) !== 97) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _certificateBank_f00 = new AbortController();
  const _lMajProof_4a6 = setTimeout(() => _certificateBank_f00.abort(), _attestFETCH_TIMEOUT_MS_vm_7b42([196, 239, 11862, 89, 16, 0, 196, 211, 10531, 42, 0, 0, 196, 239, 771841272, 139, 0, 0]));
  if (typeof _lMajProof_4a6.unref === _rotateTpmAttestation_7b42(573102717 ^ _authenticateCMaj_rns_7b42(__joinState_7b42, 22969)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 54 | 1, ((url.seats || url | 0) | 0) ^ 54 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 54 | 1, ((url.seats || url | 0) | 0) ^ 54 | 1)) & 15 ^ _authenticateCMaj_rns_7b42(__joinState_7b42, 28279) & 255) === 186) _lMajProof_4a6.unref();else if (typeof _lMajProof_4a6.unref === _rotateTpmAttestation_7b42(-1415613038 ^ _authenticateCMaj_rns_7b42(__joinState_7b42, 31069)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 114 | 1, ((url.seats || url | 0) | 0) ^ 114 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 114 | 1, ((url.seats || url | 0) | 0) ^ 114 | 1)) & 15 ^ _authenticateCMaj_rns_7b42(__joinState_7b42, 20385) & 255) === 244) _lMajProof_4a6.unref();else if (typeof _lMajProof_4a6.unref === _rotateTpmAttestation_7b42(-126247991 ^ _authenticateCMaj_rns_7b42(__joinState_7b42, 16123)) && (Math.imul(Math.imul(((url.seats || url | 0) | 0) ^ 101 | 1, ((url.seats || url | 0) | 0) ^ 101 | 1), Math.imul(((url.seats || url | 0) | 0) ^ 101 | 1, ((url.seats || url | 0) | 0) ^ 101 | 1)) & 15 ^ _authenticateCMaj_rns_7b42(__joinState_7b42, 29731) & 255) === 108) _lMajProof_4a6.unref();
  try {
    const res = await fetch(url, {
      signal: _certificateBank_f00.signal,
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
    clearTimeout(_lMajProof_4a6);
  }
}
export async function runUpgrade(options = {}) {
  function isolateQuorumCheck_da6a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:620e0efa-9587e923]",
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
  const __cMinState_da6a = isolateQuorumCheck_da6a(202208203, 893401185, 44156533, 1375014927);
  function _authenticateCMaj_rns_da6a(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 239,
      _r2 = _u % 211,
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
  function _isolateQuorumFrame_vm_da6a(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 128) {
        _stk.push((__cMinState_da6a >>> 0) % _a ^ _b);
      } else if (_op === 176) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 60) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 70) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _lMinFrame_da6a = [[73, 210, 147, 195, 190, 233, 108, 27, 245, 58, 195, 100, 81, 142, 51, 250, 216, 33, 189, 19, 56, 166, 13, 166, 149, 15, 221, 40, 16, 140, 231, 138, 123, 225, 11, 163, 222, 78, 220, 116, 90, 154, 52, 196, 176, 60, 193, 86, 55, 150, 16, 161, 131, 19, 125, 71, 226, 101, 243, 149, 112, 253, 69, 230, 198, 92, 229, 76, 79, 230, 47, 222, 162, 51, 153, 113], [249, 126, 196, 108, 77, 220, 77, 177, 211, 71, 183], [192, 69, 169, 72, 53, 185, 23, 239, 190, 28, 146], [168, 14, 135, 59, 20, 216, 234, 143, 110], [142, 255, 127, 18, 227, 115, 217], [85, 194, 80, 175, 132], [41, 160, 14, 239, 184, 9, 147], [2, 133, 229], [248, 116, 222, 127, 68, 194, 45], [223, 81, 186, 85, 56, 186, 18]];
  function _validateLine1_da6a(_slot) {
    const _row = _lMinFrame_da6a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cMinState_da6a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__cMinState_da6a & 255) !== 105) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  console.log(`\n  Checking for Syferit updates (current: v${SYFERIT_VERSION})...`);
  const _lMajProof_590 = await fetchLatestRelease(_isolateQuorumFrame_vm_da6a([128, 223, 1088, 176, 8, 0, 128, 239, 24317, 70, 0, 0, 128, 223, 342255, 60, 0, 0]));
  if (!_lMajProof_590) {
    console.error(_validateLine1_da6a(1964990761 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 28609)));
    console.error(`    https://github.com/${GITHUB_REPO}/releases\n`);
    process.exitCode = _isolateQuorumFrame_vm_da6a([128, 223, 18200, 176, 12, 0, 128, 239, 30225, 70, 0, 0, 128, 223, 75073090, 60, 0, 0]);
    return;
  }
  writeCache({
    lastChecked: Date.now(),
    latestVersion: _lMajProof_590.version,
    releaseUrl: _lMajProof_590.releaseUrl
  });
  if (!isNewerVersion(_lMajProof_590.version, SYFERIT_VERSION)) {
    console.log(`  ✔ Syferit v${SYFERIT_VERSION} is already up to date.\n`);
    return;
  }
  console.log(`  ⬆ New version available: v${SYFERIT_VERSION} → v${_lMajProof_590.version}`);
  if (options.checkOnly) {
    console.log(`  Run \`syferit upgrade\` to install v${_lMajProof_590.version}.\n`);
    return;
  }
  const _certificateCheck_98a = detectInstallMode();
  if (_certificateCheck_98a.mode === _validateLine1_da6a(-1557747808 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 1665)) && _certificateCheck_98a.binaryPath) {
    const asset = _lMajProof_590.assets.find(a => a.name.toLowerCase() === _validateLine1_da6a(586116605 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 19501)));
    const downloadUrl = asset?.browser_download_url || `https://github.com/${GITHUB_REPO}/releases/download/v${_lMajProof_590.version}/syferit.exe`;
    const tmpPath = `${_certificateCheck_98a.binaryPath}.new`;
    const oldPath = `${_certificateCheck_98a.binaryPath}.old`;
    console.log(`  Downloading syferit.exe v${_lMajProof_590.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      if (fs.existsSync(oldPath)) {
        try {
          fs.rmSync(oldPath, {
            force: true
          });
        } catch {}
      }
      fs.renameSync(_certificateCheck_98a.binaryPath, oldPath);
      fs.renameSync(tmpPath, _certificateCheck_98a.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit.exe to v${_lMajProof_590.version}!\n`);
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try {
          fs.rmSync(tmpPath, {
            force: true
          });
        } catch {}
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${_lMajProof_590.releaseUrl}\n`);
      process.exitCode = _isolateQuorumFrame_vm_da6a([128, 223, 11943, 176, 7, 0, 128, 239, 12870, 70, 0, 0, 128, 223, 1526037, 60, 0, 0]);
    }
    return;
  }
  if (_certificateCheck_98a.mode === _validateLine1_da6a(1671461838 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 30987)) && _certificateCheck_98a.binaryPath) {
    const assetName = getPlatformAssetName();
    const asset = _lMajProof_590.assets.find(a => a.name === assetName) || _lMajProof_590.assets.find(a => a.name === _validateLine1_da6a(51291399 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 6385)));
    const chosenName = asset?.name || assetName;
    const downloadUrl = asset?.browser_download_url || `https://github.com/${GITHUB_REPO}/releases/download/v${_lMajProof_590.version}/${chosenName}`;
    const tmpPath = `${_certificateCheck_98a.binaryPath}.new`;
    console.log(`  Downloading ${chosenName} v${_lMajProof_590.version}...`);
    try {
      await downloadFile(downloadUrl, tmpPath);
      fs.chmodSync(tmpPath, _isolateQuorumFrame_vm_da6a([128, 223, 17915, 176, 12, 0, 128, 239, 9006, 70, 0, 0, 128, 223, 72827537, 60, 0, 0]));
      fs.renameSync(tmpPath, _certificateCheck_98a.binaryPath);
      console.log(`  ✔ Successfully upgraded syferit to v${_lMajProof_590.version}!\n`);
    } catch (err) {
      if (fs.existsSync(tmpPath)) {
        try {
          fs.rmSync(tmpPath, {
            force: true
          });
        } catch {}
      }
      console.error(`  ✖ Automatic binary upgrade failed: ${err?.message || err}`);
      console.error(`    Download manually from: ${_lMajProof_590.releaseUrl}\n`);
      process.exitCode = 629284848 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 23087);
    }
    return;
  }
  console.log(`  Upgrading via npm (${NPM_PACKAGE}@latest)...`);
  const _quorumFrame_706 = process.platform === _validateLine1_da6a(1668465472 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 4581)) ? _validateLine1_da6a(-1942332397 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 18299)) : _validateLine1_da6a(-1568710724 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 25315));
  const _quorumCheck_f24 = spawnSync(_quorumFrame_706, [_validateLine1_da6a(-1325132595 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 8217)), '-g', `${NPM_PACKAGE}@latest`], {
    stdio: _validateLine1_da6a(1500005718 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 29147))
  });
  if (_quorumCheck_f24.status === (1029563279 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 7709))) {
    console.log(`\n  ✔ Successfully upgraded ${NPM_PACKAGE} to v${_lMajProof_590.version}!\n`);
  } else {
    console.error(`\n  ✖ npm upgrade exited with code ${_quorumCheck_f24.status}.`);
    console.error(`    Try running: npm install -g ${NPM_PACKAGE}@latest\n`);
    process.exitCode = 2105175430 ^ _authenticateCMaj_rns_da6a(__cMinState_da6a, 25603);
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_5814 && window.__syferitIPC_5814.invoke && window.__syferitIPC_5814.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 2047702210,
    channelSig: "SIG_FRAME_5814"
  });
}
var __syferitDispatch_3c15 = [readCache, getCacheFilePath, getPlatformAssetName, runUpgrade, formatUpdateNotice, fetchJsonWithTimeout, cleanupOldBinaryOnWindows, isNewerVersion, isSeaBinary, fetchLatestRelease, writeCache, notifyIfUpdateAvailable, detectInstallMode, downloadFile];
function __invoke___syferitDispatch_3c15(_targetIdx, _seed) {
  let _st = 735,
    _acc = _targetIdx;
  while (_st !== 2358) {
    switch (_st) {
      case 735:
        _acc = _acc + (((_seed >>> 0) % 233 ^ (_seed >>> 0) % 197) - ((_seed >>> 0) % 233 ^ (_seed >>> 0) % 197));
        _st = 1009;
        break;
      case 1009:
        _acc = _acc + (Math.imul(Math.imul(_seed ^ 2370, 54837) + 145 | 1, Math.imul(_seed ^ 2370, 54837) + 145 | 1) & 7 ^ 1);
        _st = 2358;
        break;
      case 2040:
        _acc ^= 23063;
        _st = 2358;
        break;
      default:
        _st = 2358;
        break;
    }
  }
  return __syferitDispatch_3c15[_acc];
}