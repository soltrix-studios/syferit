// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { printSyferitBanner } from './index.js';
import { detectInstallMode, SYFERIT_VERSION } from './updater.js';
export function getSyferitBinDir(homeDir = os.homedir()) {
  function rotateTpmProof_9de8(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8e67c850-6815fd95]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __candidatesState_9de8 = rotateTpmProof_9de8(401681711, 846328567, 522496905, 612148025);
  function _rotateEntries_rns_9de8(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 241,
      _r2 = _u % 197,
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
  const _getSyferitBinDirProof_9de8 = [[0, 93, 11, 246, 167, 176, 111, 80], [49, 58, 249], [29, 22, 200, 191, 126, 124, 34, 7, 211, 197], [238, 254, 128, 147, 84]];
  function _sanitizeSignatureProof_9de8(_slot) {
    const _row = _getSyferitBinDirProof_9de8[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__candidatesState_9de8 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__candidatesState_9de8 & 255) === 46 ? path.join(homeDir, _sanitizeSignatureProof_9de8(-1193135579 ^ _rotateEntries_rns_9de8(__candidatesState_9de8, 16391)), _sanitizeSignatureProof_9de8(-2083811442 ^ _rotateEntries_rns_9de8(__candidatesState_9de8, 18089))) : (() => {
    function rotateEnclaveCheck_177e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:fb95e6fc-c1b8c3b6]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __spawnSyncState_177e = rotateEnclaveCheck_177e(533788661, 1662726991, 381166383, 1020791253);
    function _sanitizeTokenAttestation_rns_177e(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 239,
        _r2 = _u % 227,
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
    if ((__spawnSyncState_177e & 255) !== 30) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
function normalizePathEntry(p, platform = process.platform) {
  function validateTpmEnvelope_f259(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fc3f86c2-abea1ff2]",
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
  const __keystoreBank_f259 = validateTpmEnvelope_f259(613939801, 1642522949, 1517824399, 163532241);
  function _validateDefaultBin_rns_f259(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 239,
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
  const _keystoreProration_f259 = [[239, 175, 120, 196, 30], [216, 133, 79, 121, 35, 15, 189, 217, 150, 118], [145, 115, 1, 45, 19]];
  function _validateKeystoreDigest_f259(_slot) {
    const _row = _keystoreProration_f259[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreBank_f259 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _detectInstallModeEnvelope_823 = p.trim().replace(/^"+|"+$/g, '').replace(/[\\/]+$/, '');
  return (__keystoreBank_f259 & 255) === 152 ? platform === _validateKeystoreDigest_f259(-730417787 ^ _validateDefaultBin_rns_f259(__keystoreBank_f259, 23015)) ? _detectInstallModeEnvelope_823.toLowerCase() : _detectInstallModeEnvelope_823 : (() => {
    function rotateCandidates_f8ae(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ccdad3f2-2ea83f58]",
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
    const __SoltrixStudiosQuorum_f8ae = rotateCandidates_f8ae(1926493949, 1128143373, 1724416857, 1880008321);
    function _attestProcess_rns_f8ae(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 199,
        _r2 = _u % 223,
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
    if ((__SoltrixStudiosQuorum_f8ae & 255) !== 93) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isDirOnPath(dir, envPath = process.env['PATH'] || process.env['Path'] || '', platform = process.platform) {
  function auditCreateInterface_9c18(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ca8bc985-b61115ac]",
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
  const __cleanedState_9c18 = auditCreateInterface_9c18(688097715, 282050125, 88092913, 1333030523);
  function _isolateSplit_rns_9c18(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 227,
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
  const _processDigest_9c18 = [[135, 156, 54, 27, 182], [112, 116, 9, 40, 219, 222, 99, 136, 78, 39], [73, 92, 195, 30, 171]];
  function _auditEnvPath_9c18(_slot) {
    const _row = _processDigest_9c18[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__cleanedState_9c18 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _normalizePathEntryDigest_d1b = platform === _auditEnvPath_9c18(-1575543913 ^ _isolateSplit_rns_9c18(__cleanedState_9c18, 10971)) ? ';' : ':';
  const _existingFrame_f9f = normalizePathEntry(dir, platform);
  if (!_existingFrame_f9f) return false;
  const _tpmVector_934 = envPath.split(_normalizePathEntryDigest_d1b).map(e => normalizePathEntry(e, platform));
  return (__cleanedState_9c18 & 255) === 240 ? _tpmVector_934.includes(_existingFrame_f9f) : (() => {
    function auditBinDir_712d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a19ad4ff-1c3a086b]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __resolveState_712d = auditBinDir_712d(614421709, 1827835989, 1564635523, 1346921635);
    function _rotateHomedir_rns_712d(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 223,
        _r2 = _u % 227,
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
    if ((__resolveState_712d & 255) !== 170) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function addPathToShellProfiles(binDir, homeDir = os.homedir()) {
  function authenticatePathValue_6fbe(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b6f0b364-4f621ae6]",
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
  const __quorumFrame_6fbe = authenticatePathValue_6fbe(1950861275, 215766109, 1786273003, 2129055143);
  function _verifySoltrixStudiosContext_rns_6fbe(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 229,
      _r2 = _u % 199,
      _r3 = _u % 211,
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
  function _rotateSignatureFrame_vm_6fbe(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 90) {
        _stk.push((__quorumFrame_6fbe >>> 0) % _a ^ _b);
      } else if (_op === 151) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 217) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 22) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _enclaveDigest_6fbe = [[150, 49, 80, 103, 3, 34, 157, 205, 163, 199, 34, 32, 7, 65, 244, 132, 107, 167], [249, 228, 55, 39, 25, 81], [210, 161, 8, 7, 248, 37, 158], [15, 152, 252, 246, 211, 21, 78, 72], [51, 121, 213, 147, 226], [69, 65, 161, 133, 154, 180, 5, 3, 188, 56, 105, 101], [229, 35, 155, 37, 28]];
  function _sanitizePrintSyferitBanner_6fbe(_slot) {
    const _row = _enclaveDigest_6fbe[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumFrame_6fbe >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _tokenAttestation_c52 = getSyferitBinDir(homeDir);
  const _signatureProof_2a0 = path.resolve(binDir) === path.resolve(_tokenAttestation_c52) ? _sanitizePrintSyferitBanner_6fbe(-1547549413 ^ _verifySoltrixStudiosContext_rns_6fbe(__quorumFrame_6fbe, 16615)) : binDir;
  const _splitProof_513 = `export PATH="${_signatureProof_2a0}:$PATH"`;
  const _tpmVector_357 = [path.join(homeDir, _sanitizePrintSyferitBanner_6fbe(1328034814 ^ _verifySoltrixStudiosContext_rns_6fbe(__quorumFrame_6fbe, 1287))), path.join(homeDir, _sanitizePrintSyferitBanner_6fbe(-1728493123 ^ _verifySoltrixStudiosContext_rns_6fbe(__quorumFrame_6fbe, 16727))), path.join(homeDir, _sanitizePrintSyferitBanner_6fbe(1085382160 ^ _verifySoltrixStudiosContext_rns_6fbe(__quorumFrame_6fbe, 9055)))];
  const _normalizePathEntryDigest_dcd = _tpmVector_357.filter(f => fs.existsSync(f));
  const _keystoreDigest_848 = _normalizePathEntryDigest_dcd.length > _rotateSignatureFrame_vm_6fbe([90, 251, 6892, 151, 16, 0, 90, 229, 3138, 22, 0, 0, 90, 251, 442109019, 217, 0, 0]) ? _normalizePathEntryDigest_dcd : [_tpmVector_357[_rotateSignatureFrame_vm_6fbe([90, 251, 2620, 151, 7, 0, 90, 229, 24326, 22, 0, 0, 90, 251, 369693, 217, 0, 0])]];
  const _defaultBinVector_c62 = [];
  for (const rcFile of _keystoreDigest_848) {
    try {
      const current = fs.existsSync(rcFile) ? fs.readFileSync(rcFile, _sanitizePrintSyferitBanner_6fbe(1170599773 ^ _verifySoltrixStudiosContext_rns_6fbe(__quorumFrame_6fbe, 31317))) : '';
      if (!current.includes(_sanitizePrintSyferitBanner_6fbe(63039906 ^ _verifySoltrixStudiosContext_rns_6fbe(__quorumFrame_6fbe, 10355))) && !current.includes(binDir)) {
        const prefix = current.length === _rotateSignatureFrame_vm_6fbe([90, 251, 26039, 151, 16, 0, 90, 229, 12690, 22, 0, 0, 90, 251, 1694577035, 217, 0, 0]) || current.endsWith('\n') ? '' : '\n';
        fs.writeFileSync(rcFile, `${current}${prefix}\n# Syferit CLI\n${_splitProof_513}\n`, _sanitizePrintSyferitBanner_6fbe(-1294087317 ^ _verifySoltrixStudiosContext_rns_6fbe(__quorumFrame_6fbe, 14021)));
        _defaultBinVector_c62.push(rcFile);
      }
    } catch {}
  }
  return (__quorumFrame_6fbe & 255) === 178 ? _defaultBinVector_c62 : (() => {
    function rotateCandidates_728e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b8f503b3-ed0ef5d4]",
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
    const __tpmEnvelope_728e = rotateCandidates_728e(1597900805, 269999503, 1233683665, 1171385869);
    function _normalizeQuorumVector_rns_728e(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 223,
        _r2 = _u % 241,
        _r3 = _u % 251,
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
    if ((__tpmEnvelope_728e & 255) !== 7) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function registerWindowsUserPath(binDir) {
  function rotateEntries_e110(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8521dec4-e27c37a9]",
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
  const __joinState_e110 = rotateEntries_e110(1385481963, 1912816491, 1615619907, 1365512351);
  function _rotateHomedir_rns_e110(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 241,
      _r2 = _u % 229,
      _r3 = _u % 251,
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
  function _rotateSignatureFrame_vm_e110(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 79) {
        _stk.push((__joinState_e110 >>> 0) % _a ^ _b);
      } else if (_op === 161) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 46) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 142) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _tokenAttestation_e110 = [[87, 225, 69, 10, 201, 81, 174, 102, 35, 218], [97, 253, 56, 196, 146, 40, 141, 65, 24, 190], [92, 150, 19, 215, 76, 2, 100, 40, 235, 97, 199, 149, 68, 226, 93], [187, 190, 206, 179, 71, 240, 91, 22], [203, 75, 182, 102]];
  function _rotateTarget_e110(_slot) {
    const _row = _tokenAttestation_e110[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__joinState_e110 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _isDirOnPathFrame_b30 = [`$binDir = '${binDir.replace(/'/g, "''")}'`, `$userPath = [Environment]::GetEnvironmentVariable('Path', 'User')`, `if (-not $userPath) { $userPath = '' }`, `$entries = $userPath -split ';' | ForEach-Object { $_.Trim().TrimEnd('\\', '/') } | Where-Object { $_ -ne '' }`, `$normTarget = $binDir.Trim().TrimEnd('\\', '/')`, `if ($entries -notcontains $normTarget) {`, `  $newPath = if ($userPath.Trim() -eq '') { $binDir } elseif ($userPath.EndsWith(';')) { "$userPath$binDir" } else { "$userPath;$binDir" }`, `  [Environment]::SetEnvironmentVariable('Path', $newPath, 'User')`, `}`].join('; ');
  const _enclaveCheck_5dd = spawnSync(_rotateTarget_e110(1407122607 ^ _rotateHomedir_rns_e110(__joinState_e110, 1097)), [_rotateTarget_e110(214009910 ^ _rotateHomedir_rns_e110(__joinState_e110, 2281)), _rotateTarget_e110(1960614735 ^ _rotateHomedir_rns_e110(__joinState_e110, 32639)), _rotateTarget_e110(594233270 ^ _rotateHomedir_rns_e110(__joinState_e110, 20353)), _isDirOnPathFrame_b30], {
    stdio: _rotateTarget_e110(-1956119815 ^ _rotateHomedir_rns_e110(__joinState_e110, 7055))
  });
  return (__joinState_e110 & 255) === 39 ? _enclaveCheck_5dd.status === _rotateSignatureFrame_vm_e110([79, 197, 21637, 161, 16, 0, 79, 241, 17573, 142, 0, 0, 79, 197, 1419134193, 46, 0, 0]) : (() => {
    function attestProcess_5b62(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1224af84-3f6dd285]",
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
    const __enclaveAttestation_5b62 = attestProcess_5b62(477834327, 900208697, 1553854653, 1669566677);
    function _sanitizePrintSyferitBanner_rns_5b62(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 211,
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
    if ((__enclaveAttestation_5b62 & 255) !== 184) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export async function askYesNo(promptText, defaultYes = true) {
  function sanitizeSignatureProof_c3af(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:80e6e4c9-1f0bebed]",
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
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __keystoreQuorum_c3af = sanitizeSignatureProof_c3af(651560805, 966095169, 230187545, 982967999);
  function _validateDefaultBin_rns_c3af(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 229,
      _r2 = _u % 233,
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
  const _existingFrame_c3af = [[196, 113, 57], [135, 87, 27, 15, 4, 189, 113, 151, 121, 4], [116, 61, 245, 227, 254]];
  function _rotateHomedir_c3af(_slot) {
    const _row = _existingFrame_c3af[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreQuorum_c3af >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__keystoreQuorum_c3af & 255) !== 189) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return defaultYes;
  }
  const _tpmProof_707 = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    const answer = (await _tpmProof_707.question(promptText)).trim().toLowerCase();
    if (!answer) return defaultYes;
    return answer === 'y' || answer === _rotateHomedir_c3af(-58085231 ^ _validateDefaultBin_rns_c3af(__keystoreQuorum_c3af, 20393));
  } finally {
    _tpmProof_707.close();
  }
}
export async function waitForEnter() {
  function verifyExportLine_6c07(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:9545792c-9bab3958]",
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
  const __signatureFrame_6c07 = verifyExportLine_6c07(1649087011, 1855656339, 1235031683, 76240323);
  function _reconcileKeystoreQuorum_rns_6c07(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 229,
      _r2 = _u % 233,
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
  const _spawnSyncFrame_6c07 = [[95, 213, 247, 8, 155, 236, 24, 159, 93, 88, 145, 244, 116, 195, 179, 96, 202, 101, 66, 208, 80, 173, 149, 18, 227], [31, 116, 136, 24, 124, 222, 226, 120, 209, 39], [236, 92, 64, 206, 86]];
  function _isolateToLowerCase_6c07(_slot) {
    const _row = _spawnSyncFrame_6c07[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__signatureFrame_6c07 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__signatureFrame_6c07 & 255) !== 85) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) return;
  const _candidatesEnvelope_33 = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    await _candidatesEnvelope_33.question(_isolateToLowerCase_6c07(-1688874441 ^ _reconcileKeystoreQuorum_rns_6c07(__signatureFrame_6c07, 555)));
  } finally {
    _candidatesEnvelope_33.close();
  }
}
export async function runSetup(options = {}) {
  function verifyProprietaryEnclaveContext_8618(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3ea6c8db-f12c5117]",
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
  const __spawnSyncState_8618 = verifyProprietaryEnclaveContext_8618(1505451129, 515883693, 1652061723, 1431533089);
  function _validateKeystoreDigest_rns_8618(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 199,
      _r2 = _u % 211,
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
  function _rotateIsDirOnPath_vm_8618(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 98) {
        _stk.push((__spawnSyncState_8618 >>> 0) % _a ^ _b);
      } else if (_op === 60) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 137) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 170) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _processDigest_8618 = [[47, 56, 128, 219, 140, 130, 224, 81, 23, 26, 74, 163, 122, 124], [81, 92, 48, 240, 76, 118, 134, 13, 247, 215, 78, 153, 65, 84, 171, 232, 225, 186, 11, 65, 117, 0, 152, 196, 132, 212, 227, 38, 14, 252, 127, 176, 125, 60, 159, 23, 133, 240, 53, 125, 95, 33, 168, 241, 185, 247, 13, 64, 8, 12, 46, 224, 149, 115, 239, 50, 236, 230, 67, 156, 125, 8, 215, 15, 145, 221, 62, 98, 32, 49, 130, 221, 249, 150, 31, 95, 4, 11, 122, 169, 115, 105, 198, 64, 250, 206, 22, 164, 104, 96, 130, 166], [182, 129, 21, 213, 108, 90, 185, 169, 205, 189, 62, 115, 54, 60, 159, 222, 136, 148, 167, 43, 27, 241, 114, 175, 107, 57, 205, 4, 204, 204, 49, 104, 83, 50, 247, 226, 163, 161, 3, 70, 43, 29, 223, 243, 157, 153, 246, 126, 232, 225, 74, 197, 105, 64, 207, 12, 222, 131], [155, 230, 124, 58, 24, 51, 158, 202, 140, 153, 247, 98, 95, 210, 119, 161, 110, 100, 255, 2, 250, 198, 44, 215, 19, 4, 244, 251, 181, 191, 72, 78, 47, 18, 140, 201, 213, 213, 191, 61, 250, 232, 65, 144, 126, 86, 150, 5, 196, 218, 56, 120, 86, 50, 147, 234, 166, 186, 29, 93, 20, 92, 107, 169, 150, 41, 245, 52, 252, 238, 81, 130, 79, 0, 180, 241, 134, 226, 36, 54, 34, 51, 148], [192, 203, 161, 31, 25, 30, 118, 156, 91, 51, 143, 71, 208, 206, 83, 142, 72, 27, 241, 175, 228, 239, 69, 3, 120, 89, 217, 212, 153, 133, 225, 107, 173, 237, 82, 140, 88, 63, 221, 7, 220, 195, 58, 61, 19, 104, 174, 226, 182, 190, 3, 70, 16, 65, 118, 172, 148, 119, 235, 62, 244, 228, 89, 158, 68, 66, 174, 12, 154, 220, 58, 126, 103, 58, 135, 212, 168, 134, 17, 87, 94, 8, 121, 239, 120, 47, 214, 11], [37, 48, 134, 68, 221, 205, 72, 157, 78, 76, 238, 200, 174, 187, 12, 76, 58, 1, 146, 199, 201, 212, 170, 104, 93, 178, 62, 180, 101, 104, 194, 3, 159, 159, 105, 99, 80, 48, 178, 237, 175, 246, 13, 67, 12, 67, 113, 175, 153, 116, 228, 61, 241, 185, 89, 156, 104, 76, 215, 19, 194, 147, 33, 105, 35, 53, 148, 205, 173, 203, 8, 93, 1, 29, 111, 191, 100, 127, 141, 12, 244, 212, 83, 135, 93, 62], [68, 69, 166], [111, 122, 210, 142, 170, 136, 164, 43, 25, 241, 108, 183, 103, 122, 201, 14, 191, 220, 41, 159, 19, 94, 186, 226, 170, 242, 1, 72, 40, 18, 157, 214, 131, 218, 189, 41, 163, 206, 87, 155, 113, 71, 202, 31, 223, 153, 47, 102, 86, 42, 204, 190, 179, 173, 13, 84, 2, 0, 97, 178, 155, 38, 245, 41, 175, 251, 92, 156, 70, 79, 160, 251, 151, 176, 61, 113, 34, 37, 152, 207, 173, 143, 228, 30, 28, 16, 52, 130, 70, 70, 224, 72], [84, 95, 55, 243, 78, 124, 219, 71, 239, 211, 92, 149, 84, 90, 189, 224, 170, 170, 69, 77, 57, 23, 144, 193, 137, 215, 239, 34, 238, 234, 83, 182, 113, 108, 149, 4, 193, 199, 33, 104, 73, 51, 253, 213, 191, 191, 20, 0, 10, 31, 104, 227, 139, 102, 237, 34, 252, 173], [185, 132, 26, 216, 122, 81, 160, 232, 174, 187, 17, 0, 125, 48, 153, 195, 140, 134, 217, 32, 24, 228, 114, 245, 49, 38, 146, 25, 215, 221, 102, 108, 77, 48, 170, 235, 247, 247, 65, 95, 24, 10, 103, 178, 156, 116, 184, 39, 230, 248, 94, 154, 116, 80, 205, 8, 196, 216, 59, 127, 54, 126, 133, 203, 180, 203, 19, 86, 30, 12, 111, 160, 109, 34, 210, 19, 164, 128, 74, 212, 64, 81, 178], [158, 233, 127, 61, 63, 60, 144, 254, 181, 209, 161, 101, 54, 236, 117, 172, 118, 57, 143, 77, 130, 141, 99, 33, 22, 123, 247, 246, 191, 167, 7, 9, 115, 15, 140, 238, 190, 221, 251, 37, 242, 225, 84, 223, 53, 10, 200, 0, 200, 220, 61, 100, 54, 99, 144, 206, 186, 149, 5, 92, 18, 6, 127, 188, 154, 96, 240, 46, 188, 254, 92, 156, 9, 88, 169, 246, 206, 164, 55, 117, 96, 42, 135, 141, 158, 205, 240, 41], [195, 206, 164, 98, 51, 235, 106, 179, 104, 98, 140, 46, 240, 221, 46, 146, 92, 95, 176, 225, 231, 242, 72, 6, 123, 92, 220, 210, 155, 142, 224, 61, 185, 161, 11, 133, 126, 86, 208, 3, 201, 152, 47, 101, 82, 101, 147, 241, 191, 170, 6, 91, 31, 95, 123, 178, 142, 98, 245, 53, 252, 181, 67, 151, 69, 75, 182, 235, 195, 237, 42, 115, 39, 51, 141, 217, 186, 153, 175, 82, 18, 10, 113, 161, 115, 24], [123, 112, 200, 11, 249], [13, 24, 236, 172, 136, 170, 66, 73, 59, 19, 130, 213, 133, 152, 239, 44, 93, 254, 119, 189, 49, 124, 220, 0, 200, 144, 47, 106, 74, 48, 187, 244, 161, 248, 67, 75, 65, 44, 113, 185, 147, 101, 228, 61, 253, 187, 73, 132, 116, 72, 146, 92, 209, 207, 43, 118, 32, 34, 143, 208, 185, 196, 19, 75, 77, 25, 98, 190, 100, 109, 198, 25, 181, 210, 83, 147, 64, 71, 190, 237, 207, 173, 58, 60, 62, 50, 210, 224, 164, 164, 206, 106], [114, 125, 209, 145, 160, 158, 245, 101, 9, 241, 122, 183, 106, 120, 195, 2, 204, 200, 99, 111, 87, 53, 190, 227, 175, 245, 9, 64, 48, 8, 141, 212, 151, 142, 179, 38, 239, 229, 79, 138, 111, 81, 155, 55, 193, 221, 42, 34, 44, 61, 142, 129, 165, 132, 3, 64, 26, 79], [87, 162, 56, 246, 92, 127, 194, 14, 240, 221, 51, 222, 27, 110, 187, 229, 162, 160, 59, 78, 62, 10, 144, 147, 207, 192, 176, 39, 241, 227, 4, 138, 99, 86, 200, 5, 145, 153, 99, 121, 70, 44, 133, 236, 186, 170, 90, 65, 8, 30, 124, 180, 146, 126, 239, 46, 250, 254, 89, 129, 80, 0, 167, 237, 218, 237, 49, 120, 56, 34, 141, 198, 179, 196, 240, 77, 66, 94, 104, 242, 110, 119, 208], [188, 135, 29, 219, 93, 90, 178, 192, 151, 239, 67, 3, 20, 10, 151, 194, 148, 215, 173, 107, 160, 171, 1, 255, 52, 37, 149, 16, 221, 193, 37, 39, 17, 33, 174, 200, 156, 251, 25, 91, 16, 31, 118, 249, 215, 44, 234, 46, 234, 242, 95, 130, 84, 5, 178, 16, 216, 203, 39, 122, 48, 32, 157, 210, 184, 142, 18, 72, 94, 24, 126, 162, 43, 102, 203, 16, 236, 194, 85, 155, 2, 68, 165, 171, 188, 235, 18, 119], [225, 236, 66, 0, 17, 9, 132, 209, 138, 128, 170, 12, 18, 255, 112, 176, 126, 125, 214, 3, 133, 144, 102, 36, 25, 126, 250, 240, 185, 172, 30, 95, 91, 67, 45, 167, 156, 116, 254, 33, 235, 186, 73, 135, 112, 7, 205, 19, 221, 200, 32, 121, 61, 125, 149, 208, 172, 128, 19, 87, 30, 87, 125, 181, 103, 105, 208, 9, 225, 143, 68, 145, 69, 81, 171, 251, 216, 187, 113, 112, 48, 40, 151, 195, 145, 250], [131, 159, 243, 32, 8, 245, 105, 176, 125, 124], [120, 111, 202, 15, 237, 195, 52, 208, 86, 70, 177], [58, 27, 241, 220, 175, 166, 21, 83, 61, 7, 217, 231, 173, 163, 197, 107, 242, 238, 70, 182, 103, 107, 199, 18, 220, 218, 38, 105, 18], [117, 64, 175, 219, 156, 212, 233, 41, 19, 168, 109, 168, 120, 112, 222, 80, 215, 197, 40, 36, 106, 61, 188, 253, 191, 177, 26, 12, 5, 5, 112, 165, 150, 116, 250, 45, 169, 242, 88, 135, 112, 8, 223, 18, 200, 156, 52, 127, 41, 52, 131, 214, 249, 133, 9, 24, 12, 88, 126, 163, 115, 120, 195, 2, 249, 197, 22, 145, 81, 81, 169, 253, 201, 169, 60, 112, 52, 102], [90, 165, 163, 249, 65, 105, 202, 3, 130, 204, 99, 79, 115, 22, 247, 225, 175, 167, 6, 64, 48, 8, 147, 157, 133, 148, 253, 53, 233, 230, 7, 132, 116, 65, 155, 11, 219, 215, 111, 109, 49, 52, 133, 196, 164, 136, 3, 21, 71, 88, 125, 172, 140, 122, 246, 50, 252, 253, 19, 158, 84, 17, 167, 246, 195, 163, 62, 107, 39, 45, 207, 221, 144, 130, 247, 36, 21, 245, 55, 251, 37, 113, 194, 26, 234, 201, 17, 247], [232, 195, 46, 154, 92, 73, 167, 191, 162, 170, 13], [183, 182, 3, 70, 42, 10, 141, 153, 137, 143, 232], [227, 212, 170, 27, 22, 225, 110, 172, 116, 120, 146, 32, 228, 228, 14, 36, 75, 33, 189, 241, 190, 172, 28, 77, 21, 5, 109, 174, 219], [46, 57, 246, 2, 215, 141, 32, 96, 88, 97, 164, 225, 163, 185, 7, 9, 44, 28, 145, 157, 161, 132, 245, 52, 244, 248, 83, 197, 126, 76, 201, 28, 205, 205, 35, 116, 98, 43, 145, 206, 187, 193, 22, 91, 19, 85, 109, 166, 146, 109, 250, 47, 178, 252, 64, 209, 71, 17, 183, 234, 200, 177, 58, 123, 34, 60, 207, 200, 154, 136, 224, 52, 2, 224, 117, 185, 111, 47], [19, 30, 108, 178, 136, 162, 13, 72, 123, 7, 220, 244, 170, 173, 176, 58, 230, 252, 73, 139, 121, 67, 212, 86, 220, 223, 34, 110, 80, 61, 192, 255, 189, 186, 84, 64, 18, 28, 40, 166, 136, 127, 250, 63, 253, 243, 68, 206, 14, 3, 178, 231, 197, 177, 49, 121, 37, 54, 204, 197, 173, 202, 224, 77, 10, 24, 113, 160, 110, 102, 136, 22, 233, 201, 72, 159, 76, 78, 240, 160, 236, 170, 13, 81, 35, 2, 214, 188], [63, 12, 143, 232, 143, 155, 226, 62, 228], [14, 241, 120, 185, 99, 117, 198, 94, 192, 200, 35], [168, 141, 99, 82, 93, 40, 167, 229, 175, 177, 75, 121, 31, 61, 183, 157, 128, 152, 244, 56, 245, 229, 85, 132, 110, 76, 212, 23, 128], [231, 242, 49, 73, 46, 70, 159, 219, 129, 218, 227, 58, 234, 226, 72, 194, 101, 87, 214, 86, 248, 207, 42, 111, 77, 35, 148, 190, 183, 183, 6, 87, 4, 6, 100, 191, 219, 96, 238, 53, 226, 186, 81, 128, 90, 14, 162, 237, 219, 166, 61, 100, 107, 55, 159, 138, 190, 202, 240, 81, 1, 10, 117, 176, 107, 119, 136, 3, 227, 195, 95, 143, 91, 91, 178, 226, 166, 244], [204, 215, 53, 107, 207, 251, 68, 177, 52, 126, 149, 61, 237, 228, 105, 115, 89, 53, 176, 242, 190, 186, 29, 15, 19, 6, 107, 167, 151, 116, 185, 54, 226, 243, 13, 153, 85, 69, 225, 31, 199, 198, 51, 118, 58, 58, 157, 135, 241, 202, 11, 94, 2, 8, 120, 160, 106, 111, 133, 12, 234, 131, 89, 132, 85, 81, 168, 249, 169, 191, 65, 111, 38, 48, 129, 214, 139, 135, 169, 105, 83, 227, 116, 168, 100, 123, 159, 101], [98, 101, 212, 21, 215, 217, 50], [60, 97, 247, 198, 161, 188, 27, 89, 59, 13, 223, 237, 179, 169, 219, 113, 244, 244, 64, 140, 105, 81, 201, 24, 218, 208, 32, 99, 108], [123, 70, 165, 213, 154, 218, 243, 47, 237, 174, 87, 150, 126, 78, 212, 86, 217, 195, 34, 42, 108, 51, 134, 251, 161, 183, 0, 18, 3, 27, 122, 163, 152, 114, 240, 35, 175, 251, 67, 206, 66, 14, 180, 237, 197, 182, 57, 116, 39, 51, 204, 207, 167, 143, 227, 75, 7, 31, 118, 190, 98, 40], [160, 171, 153, 255, 70, 122, 217, 28, 201, 215, 105, 126, 83, 50, 175, 187, 163, 179, 20, 67, 8, 79, 106, 177, 216, 113, 236, 57, 182, 183, 72, 147, 80, 68, 179, 11, 148, 239, 20, 71, 0, 110, 203, 131, 148, 168, 48, 126, 95, 85, 98, 182, 98, 106, 215, 10, 236, 140, 91, 158, 66, 13, 233, 219, 129, 159, 41, 61, 94]];
  function _sanitizeExisting_8618(_slot) {
    const _row = _processDigest_8618[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__spawnSyncState_8618 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__spawnSyncState_8618 & 255) !== 76) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _certificateProof_1e6 = detectInstallMode();
  if (_certificateProof_1e6.mode === _sanitizeExisting_8618(-449748119 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 7065)) && (Math.imul(Math.imul((1505451129 | 0) ^ 77 | 1, (1505451129 | 0) ^ 77 | 1), Math.imul((1505451129 | 0) ^ 77 | 1, (1505451129 | 0) ^ 77 | 1)) & 15 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 12733) & 255) === 30) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_sanitizeExisting_8618(-1404022198 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 4495)));
    console.log(_sanitizeExisting_8618(121176943 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 20209)));
    console.log(_sanitizeExisting_8618(-48375758 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 27633)));
    console.log(_sanitizeExisting_8618(-707180943 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 28015)));
    console.log(_sanitizeExisting_8618(-677149570 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 7785)));
    return;
  } else if (_certificateProof_1e6.mode === _sanitizeExisting_8618(1225873689 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 24653)) && (Math.imul(Math.imul((1505451129 | 0) ^ 111 | 1, (1505451129 | 0) ^ 111 | 1), Math.imul((1505451129 | 0) ^ 111 | 1, (1505451129 | 0) ^ 111 | 1)) & 15 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 20047) & 255) === 162) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_sanitizeExisting_8618(1452316018 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 21523)));
    console.log(_sanitizeExisting_8618(-1518230367 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 13425)));
    console.log(_sanitizeExisting_8618(-1299312770 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 26401)));
    console.log(_sanitizeExisting_8618(549992459 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 9453)));
    console.log(_sanitizeExisting_8618(243996596 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 16257)));
    return;
  } else if (_certificateProof_1e6.mode === _sanitizeExisting_8618(-782316951 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 28071)) && (Math.imul(Math.imul((1505451129 | 0) ^ 49 | 1, (1505451129 | 0) ^ 49 | 1), Math.imul((1505451129 | 0) ^ 49 | 1, (1505451129 | 0) ^ 49 | 1)) & 15 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 5997) & 255) === 46) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_sanitizeExisting_8618(1745327898 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 737)));
    console.log(_sanitizeExisting_8618(164922437 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 2909)));
    console.log(_sanitizeExisting_8618(-836339364 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 20401)));
    console.log(_sanitizeExisting_8618(1304269063 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 25399)));
    console.log(_sanitizeExisting_8618(-1233737462 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 16807)));
    return;
  }
  const _pathValueBank_d86 = getSyferitBinDir();
  const _includesVector_7c6 = _certificateProof_1e6.binaryPath;
  if (_certificateProof_1e6.mode === _sanitizeExisting_8618(1467541261 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 20161)) && (Math.imul(Math.imul((1505451129 | 0) ^ 72 | 1, (1505451129 | 0) ^ 72 | 1), Math.imul((1505451129 | 0) ^ 72 | 1, (1505451129 | 0) ^ 72 | 1)) & 15 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 14411) & 255) === 148) {
    const targetExe = path.join(_pathValueBank_d86, _sanitizeExisting_8618(-830833362 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 29675)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_pathValueBank_d86})? [Y/n] `, true);
      if (!ok) {
        console.log(_sanitizeExisting_8618(1785887109 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 31689)));
        console.log(_sanitizeExisting_8618(-229931882 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 30179)));
        console.log(`    "${_includesVector_7c6}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_pathValueBank_d86, {
      recursive: true
    });
    if (path.resolve(_includesVector_7c6).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_includesVector_7c6, targetExe);
    }
    const updated = registerWindowsUserPath(_pathValueBank_d86);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_pathValueBank_d86} in your Windows User PATH.`);
      console.log(_sanitizeExisting_8618(658594393 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 18575)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_pathValueBank_d86}\n`);
      process.exitCode = (54689 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 6543) & 65535) / (65141 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 6543) >>> 16 & 65535);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  } else if (_certificateProof_1e6.mode === _sanitizeExisting_8618(150947198 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 30333)) && (Math.imul(Math.imul((1505451129 | 0) ^ 127 | 1, (1505451129 | 0) ^ 127 | 1), Math.imul((1505451129 | 0) ^ 127 | 1, (1505451129 | 0) ^ 127 | 1)) & 15 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 31229) & 255) === 138) {
    const targetExe = path.join(_pathValueBank_d86, _sanitizeExisting_8618(-1300314329 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 31909)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_pathValueBank_d86})? [Y/n] `, true);
      if (!ok) {
        console.log(_sanitizeExisting_8618(806225430 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 1943)));
        console.log(_sanitizeExisting_8618(-498210645 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 31445)));
        console.log(`    "${_includesVector_7c6}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_pathValueBank_d86, {
      recursive: true
    });
    if (path.resolve(_includesVector_7c6).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_includesVector_7c6, targetExe);
    }
    const updated = registerWindowsUserPath(_pathValueBank_d86);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_pathValueBank_d86} in your Windows User PATH.`);
      console.log(_sanitizeExisting_8618(-1007500580 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 19065)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_pathValueBank_d86}\n`);
      process.exitCode = _rotateIsDirOnPath_vm_8618([98, 239, 30735, 60, 8, 0, 98, 199, 8286, 170, 0, 0, 98, 239, 7895054, 137, 0, 0]);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  } else if (_certificateProof_1e6.mode === _sanitizeExisting_8618(-1235946987 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 14287)) && (Math.imul(Math.imul((1505451129 | 0) ^ 89 | 1, (1505451129 | 0) ^ 89 | 1), Math.imul((1505451129 | 0) ^ 89 | 1, (1505451129 | 0) ^ 89 | 1)) & 15 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 23413) & 255) === 200) {
    const targetExe = path.join(_pathValueBank_d86, _sanitizeExisting_8618(1540032308 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 25073)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_pathValueBank_d86})? [Y/n] `, true);
      if (!ok) {
        console.log(_sanitizeExisting_8618(-1923936359 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 13407)));
        console.log(_sanitizeExisting_8618(-333123884 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 1363)));
        console.log(`    "${_includesVector_7c6}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_pathValueBank_d86, {
      recursive: true
    });
    if (path.resolve(_includesVector_7c6).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_includesVector_7c6, targetExe);
    }
    const updated = registerWindowsUserPath(_pathValueBank_d86);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_pathValueBank_d86} in your Windows User PATH.`);
      console.log(_sanitizeExisting_8618(183372539 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 23505)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_pathValueBank_d86}\n`);
      process.exitCode = (37403 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 16329) & 65535) / (33383 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 16329) >>> 16 & 65535);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  }
  const _tpmVector_68 = path.join(_pathValueBank_d86, _sanitizeExisting_8618(-403017170 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 25851)));
  if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
    const ok = await askYesNo(`  Install 'syferit' to ${_pathValueBank_d86} and add it to your shell PATH? [Y/n] `, true);
    if (!ok) {
      console.log(_sanitizeExisting_8618(-134530163 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 18405)));
      console.log(_sanitizeExisting_8618(-451717082 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 9749)));
      console.log(`    "${_includesVector_7c6}" protect ./dist --preset v2-quantum-rns\n`);
      return;
    }
  }
  fs.mkdirSync(_pathValueBank_d86, {
    recursive: true
  });
  if (path.resolve(_includesVector_7c6) !== path.resolve(_tpmVector_68)) {
    fs.copyFileSync(_includesVector_7c6, _tpmVector_68);
  }
  fs.chmodSync(_tpmVector_68, _rotateIsDirOnPath_vm_8618([98, 239, 22063, 60, 7, 0, 98, 199, 28195, 170, 0, 0, 98, 239, 2861983, 137, 0, 0]));
  const _targetEnvelope_2cf = addPathToShellProfiles(_pathValueBank_d86);
  console.log(`\n  ✔ Installed syferit → ${_tpmVector_68}`);
  if (_targetEnvelope_2cf.length > _rotateIsDirOnPath_vm_8618([98, 239, 2962, 60, 16, 0, 98, 199, 28799, 170, 0, 0, 98, 239, 197488686, 137, 0, 0]) && (Math.imul(Math.imul((_targetEnvelope_2cf.length | 0) ^ 42 | 1, (_targetEnvelope_2cf.length | 0) ^ 42 | 1), Math.imul((_targetEnvelope_2cf.length | 0) ^ 42 | 1, (_targetEnvelope_2cf.length | 0) ^ 42 | 1)) & 15 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 12751) & 255) === 90) {
    console.log(`  ✔ Updated shell profile(s): ${_targetEnvelope_2cf.join(', ')}`);
  } else if (_targetEnvelope_2cf.length > _rotateIsDirOnPath_vm_8618([98, 239, 18421, 60, 16, 0, 98, 199, 32755, 170, 0, 0, 98, 239, 1201831842, 137, 0, 0]) && (Math.imul(Math.imul((_targetEnvelope_2cf.length | 0) ^ 71 | 1, (_targetEnvelope_2cf.length | 0) ^ 71 | 1), Math.imul((_targetEnvelope_2cf.length | 0) ^ 71 | 1, (_targetEnvelope_2cf.length | 0) ^ 71 | 1)) & 15 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 18615) & 255) === 2) {
    console.log(`  ✔ Updated shell profile(s): ${_targetEnvelope_2cf.join(', ')}`);
  } else if (_targetEnvelope_2cf.length > (-1647953796 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 13929)) && (Math.imul(Math.imul((_targetEnvelope_2cf.length | 0) ^ 123 | 1, (_targetEnvelope_2cf.length | 0) ^ 123 | 1), Math.imul((_targetEnvelope_2cf.length | 0) ^ 123 | 1, (_targetEnvelope_2cf.length | 0) ^ 123 | 1)) & 15 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 20561) & 255) === 68) {
    console.log(`  ✔ Updated shell profile(s): ${_targetEnvelope_2cf.join(', ')}`);
  }
  console.log(_sanitizeExisting_8618(-2031718857 ^ _validateKeystoreDigest_rns_8618(__spawnSyncState_8618, 17079)));
}
export async function handleNoArgsInteractiveLaunch() {
  function auditBinDir_5589(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b05cf657-87dfe29e]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __createInterfaceState_5589 = auditBinDir_5589(2057217579, 741243115, 178892453, 689534471);
  function _verifySignatureFrame_rns_5589(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 251,
      _r2 = _u % 197,
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
  function _sanitizeExisting_vm_5589(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 163) {
        _stk.push((__createInterfaceState_5589 >>> 0) % _a ^ _b);
      } else if (_op === 53) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 102) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 122) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _createInterfaceAttestation_5589 = [[75, 110, 25, 92], [1, 47, 229, 59, 138, 165, 87, 155, 255, 12], [231, 22, 219], [205, 228, 182, 216, 46, 118, 14, 82, 181, 214, 92, 160, 24, 40], [243, 144, 57, 237, 71, 99, 231, 24, 157, 189, 90, 156, 251, 75, 156, 224, 80, 32, 62, 114, 195, 180, 157, 212, 63, 8, 10, 32, 184, 213, 127, 173, 22, 34, 197, 9, 39, 141, 90, 33, 226, 23, 189, 231, 15, 127, 37, 90, 183, 197, 157, 157, 7, 117, 208, 25, 197], [143, 188, 75, 193, 190], [61, 218, 27, 98, 216, 237, 181, 139, 6, 77, 31, 82, 184, 216, 98, 160, 87], [98, 63, 79, 28, 165, 202, 101, 181, 24, 46, 227, 68, 142, 169, 68, 140, 247, 12, 203, 172, 8, 44, 55, 73, 201, 227, 199, 153, 99, 91, 9, 45, 145, 218, 123, 252, 0, 97, 142, 1, 127, 134, 89, 112, 235, 22, 230, 234, 92, 124, 127, 12, 230, 243, 129, 175, 46, 82, 228, 32, 206, 170, 59, 138, 247, 54, 195, 24, 54, 151, 42, 98, 207, 228, 163, 203, 76, 98], [71, 100, 180, 65, 136, 161, 78, 144, 253, 5, 200, 169, 86, 112, 55, 111, 214, 240, 129, 145, 107, 8, 88, 101, 255, 156, 44, 249, 83, 112, 128, 77, 39, 196, 20, 33, 187, 88, 232, 181, 15, 44, 124, 9, 227, 128, 208, 157, 119, 20, 164, 113, 203, 155, 125, 137, 25, 113, 217, 9, 119, 145, 52, 104, 135, 240, 187, 129, 87, 121, 28, 80, 188, 216, 220, 187, 6, 44, 245, 60, 132, 177], [172, 73, 153, 166, 83, 132, 43, 127, 198, 248, 149, 142, 59, 64, 1, 55, 172, 153, 41, 246, 80, 109, 189, 74, 36, 193, 17, 222, 184, 85, 229, 178, 12, 41, 121, 6, 224, 189, 205, 154, 116, 17, 161, 110, 200, 229, 53, 194, 92, 121, 137, 86, 48, 191, 88, 39, 199, 233, 180, 253, 83, 53, 53, 115, 152, 225, 217, 180, 5, 90, 228, 41, 128, 163, 64, 154, 225, 10, 219], [145, 174, 254, 139, 54, 91, 20, 90, 171, 223, 114, 243, 64, 103, 242, 2, 109, 174, 14, 219, 181, 82, 226, 175, 9, 38, 118, 3, 157, 186, 202, 151, 113, 14, 94, 107, 197, 226, 50, 255, 89, 118, 134, 83, 45, 202, 26, 39, 129, 94, 238, 187, 21, 65, 10, 64, 190, 134, 144, 182, 49, 86, 170, 20, 189, 135, 62, 153, 224, 4, 215, 13, 124, 152, 37, 118], [165, 208, 98, 188, 15], [140, 177, 70, 198, 189], [71, 146, 59, 69, 215, 253, 142, 219, 44]];
  function _rotateSignatureFrame_5589(_slot) {
    const _row = _createInterfaceAttestation_5589[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__createInterfaceState_5589 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (process.argv.length > _sanitizeExisting_vm_5589([163, 223, 19707, 53, 8, 0, 163, 251, 1571, 122, 0, 0, 163, 223, 5010579, 102, 0, 0]) || !process.stdin.isTTY || !process.stdout.isTTY || process.env['CI'] === _rotateSignatureFrame_5589(1092432173 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 25647))) {
    return false;
  }
  const _getSyferitBinDirProof_e60 = detectInstallMode();
  if (_getSyferitBinDirProof_e60.mode === _rotateSignatureFrame_5589(786958824 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 22791)) && (Math.imul(Math.imul((2057217579 | 0) ^ 100 | 1, (2057217579 | 0) ^ 100 | 1), Math.imul((2057217579 | 0) ^ 100 | 1, (2057217579 | 0) ^ 100 | 1)) & 15 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 25743) & 255) === 94) {
    return false;
  } else if (_getSyferitBinDirProof_e60.mode === _rotateSignatureFrame_5589(465662741 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 15563)) && (Math.imul(Math.imul((2057217579 | 0) ^ 25 | 1, (2057217579 | 0) ^ 25 | 1), Math.imul((2057217579 | 0) ^ 25 | 1, (2057217579 | 0) ^ 25 | 1)) & 15 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 27569) & 255) === 144) {
    return false;
  } else if (_getSyferitBinDirProof_e60.mode === _rotateSignatureFrame_5589(-874510204 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 10105)) && (Math.imul(Math.imul((2057217579 | 0) ^ 127 | 1, (2057217579 | 0) ^ 127 | 1), Math.imul((2057217579 | 0) ^ 127 | 1, (2057217579 | 0) ^ 127 | 1)) & 15 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 23375) & 255) === 160) {
    return false;
  }
  printSyferitBanner();
  const _keystoreProration_1e9 = getSyferitBinDir();
  if (!isDirOnPath(_keystoreProration_1e9)) {
    console.log(_rotateSignatureFrame_5589(-1966977197 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 16535)));
    await runSetup({
      yes: false,
      waitBeforeExit: process.platform === _rotateSignatureFrame_5589(-470591994 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 29931))
    });
    return true;
  }
  console.log(`  Syferit v${SYFERIT_VERSION} is installed and ready on your system PATH.\n`);
  console.log(_rotateSignatureFrame_5589(-141041529 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 29691)));
  console.log(_rotateSignatureFrame_5589(-492099244 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 28479)));
  console.log(_rotateSignatureFrame_5589(-1897138763 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 10287)));
  console.log(_rotateSignatureFrame_5589(485972526 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 17247)));
  console.log(_rotateSignatureFrame_5589(-1395774605 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 26783)));
  if (process.platform === _rotateSignatureFrame_5589(933221952 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 18925)) && (Math.imul(Math.imul((2057217579 | 0) ^ 27 | 1, (2057217579 | 0) ^ 27 | 1), Math.imul((2057217579 | 0) ^ 27 | 1, (2057217579 | 0) ^ 27 | 1)) & 15 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 8819) & 255) === 120) {
    await waitForEnter();
  } else if (process.platform === _rotateSignatureFrame_5589(911123301 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 7301)) && (Math.imul(Math.imul((2057217579 | 0) ^ 21 | 1, (2057217579 | 0) ^ 21 | 1), Math.imul((2057217579 | 0) ^ 21 | 1, (2057217579 | 0) ^ 21 | 1)) & 15 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 19111) & 255) === 84) {
    await waitForEnter();
  } else if (process.platform === _rotateSignatureFrame_5589(690024584 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 6491)) && (Math.imul(Math.imul((2057217579 | 0) ^ 91 | 1, (2057217579 | 0) ^ 91 | 1), Math.imul((2057217579 | 0) ^ 91 | 1, (2057217579 | 0) ^ 91 | 1)) & 15 ^ _verifySignatureFrame_rns_5589(__createInterfaceState_5589, 29445) & 255) === 240) {
    await waitForEnter();
  }
  return (__createInterfaceState_5589 & 255) === 63 ? true : (() => {
    function sanitizeTrim_f162(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b65d5473-fff07f73]",
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
    const __processState_f162 = sanitizeTrim_f162(965153597, 1161694671, 667063319, 1389150473);
    function _rotateSignatureFrame_rns_f162(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 227,
        _r1 = _u % 239,
        _r2 = _u % 197,
        _r3 = _u % 199,
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
    if ((__processState_f162 & 255) !== 218) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_e5e7 && window.__syferitIPC_e5e7.invoke && window.__syferitIPC_e5e7.invoke("system:keystore-attestation", {
    syncEpoch: 2059937459,
    channelSig: "SIG_FRAME_E5E7"
  });
}
var __syferitDispatch_f02f = [normalizePathEntry, isDirOnPath, runSetup, registerWindowsUserPath, addPathToShellProfiles, askYesNo, getSyferitBinDir, waitForEnter, handleNoArgsInteractiveLaunch];
function __invoke___syferitDispatch_f02f(_targetIdx, _seed) {
  let _st = 290,
    _acc = _targetIdx;
  while (_st !== 2321) {
    switch (_st) {
      case 290:
        _acc = _acc + (((_seed >>> 0) % 239 ^ (_seed >>> 0) % 211) - ((_seed >>> 0) % 239 ^ (_seed >>> 0) % 211));
        _st = 1487;
        break;
      case 1487:
        _acc = _acc + (Math.imul(Math.imul(Math.imul(_seed ^ 32266, 60061), 450519137), 2876261281) - Math.imul(_seed ^ 32266, 60061));
        _st = 2321;
        break;
      case 1966:
        _acc ^= 23063;
        _st = 2321;
        break;
      default:
        _st = 2321;
        break;
    }
  }
  return __syferitDispatch_f02f[_acc];
}