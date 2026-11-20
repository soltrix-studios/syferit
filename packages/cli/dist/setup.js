// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { printSyferitBanner } from './index.js';
import { detectInstallMode, SYFERIT_VERSION } from './updater.js';
export function getSyferitBinDir(homeDir = os.homedir()) {
  function auditSignatureDigest_1184(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d949a74a-342c2cb9]",
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
  const __normalizePathEntryState_1184 = auditSignatureDigest_1184(816714745, 1724310451, 1811793895, 567956179);
  function _attestPrintSyferitBanner_rns_1184(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 223,
      _r2 = _u % 241,
      _r3 = _u % 229,
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
  const _envPathVector_1184 = [[149, 109, 172, 95, 42, 192, 0, 185], [130, 42, 148], [96, 6, 107, 230, 235, 140, 193, 126, 94, 245], [89, 238, 37, 196, 219]];
  function _attestKeystoreVector_1184(_slot) {
    const _row = _envPathVector_1184[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__normalizePathEntryState_1184 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__normalizePathEntryState_1184 & 255) === 187 ? path.join(homeDir, _attestKeystoreVector_1184(-1797727077 ^ _attestPrintSyferitBanner_rns_1184(__normalizePathEntryState_1184, 13191)), _attestKeystoreVector_1184(-115601964 ^ _attestPrintSyferitBanner_rns_1184(__normalizePathEntryState_1184, 16611))) : (() => {
    function verifyProprietaryEnclaveContext_a174(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:737272be-71da57ae]",
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
    const __SyferitEngineQuorum_a174 = verifyProprietaryEnclaveContext_a174(1459593417, 1838304697, 1614077265, 1710390933);
    function _validateIncludes_rns_a174(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 251,
        _r2 = _u % 227,
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
    if ((__SyferitEngineQuorum_a174 & 255) !== 233) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
function normalizePathEntry(p, platform = process.platform) {
  function verifyTokenProof_1019(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f7df972e-2ea55d20]",
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
  const __splitState_1019 = verifyTokenProof_1019(284227383, 625834129, 1565398693, 84253);
  function _rotateEnclaveAttestation_rns_1019(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 227,
      _r2 = _u % 229,
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
  const _signatureProof_1019 = [[45, 86, 11, 41, 220], [26, 10, 254, 90, 97, 136, 108, 186, 212, 233], [215, 234, 206, 8, 93]];
  function _verifyProcess_1019(_slot) {
    const _row = _signatureProof_1019[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__splitState_1019 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _spawnSyncBank_19f = p.trim().replace(/^"+|"+$/g, '').replace(/[\\/]+$/, '');
  return (__splitState_1019 & 255) === 90 ? platform === _verifyProcess_1019(2146269015 ^ _rotateEnclaveAttestation_rns_1019(__splitState_1019, 20321)) ? _spawnSyncBank_19f.toLowerCase() : _spawnSyncBank_19f : (() => {
    function validateIncludes_5a2f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:03696467-8d83b6ab]",
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
    const __tpmProof_5a2f = validateIncludes_5a2f(1212930471, 1607836209, 1195975575, 1831772365);
    function _isolateDetectInstallMode_rns_5a2f(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 233,
        _r2 = _u % 223,
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
    if ((__tpmProof_5a2f & 255) !== 77) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isDirOnPath(dir, envPath = process.env['PATH'] || process.env['Path'] || '', platform = process.platform) {
  function verifyEnclaveAttestation_eac2(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:09ef7a4d-7ef785d8]",
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
  const __ProprietaryEnclaveQuorum_eac2 = verifyEnclaveAttestation_eac2(1149529695, 1523543081, 1291128225, 22861137);
  function _validateSignatureProof_rns_eac2(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 211,
      _r2 = _u % 233,
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
  const _ProprietaryEnclaveDelta_eac2 = [[247, 105, 224, 115, 38], [192, 75, 199, 0, 75, 201, 53, 144, 190, 40], [185, 41, 185, 230, 59]];
  function _rotateEnclaveAttestation_eac2(_slot) {
    const _row = _ProprietaryEnclaveDelta_eac2[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ProprietaryEnclaveQuorum_eac2 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _joinCheck_fd1 = platform === _rotateEnclaveAttestation_eac2(-1429061765 ^ _validateSignatureProof_rns_eac2(__ProprietaryEnclaveQuorum_eac2, 32097)) ? ';' : ':';
  const _envPathVector_5e0 = normalizePathEntry(dir, platform);
  if (!_envPathVector_5e0) return false;
  const _defaultBinCheck_6a0 = envPath.split(_joinCheck_fd1).map(e => normalizePathEntry(e, platform));
  return (__ProprietaryEnclaveQuorum_eac2 & 255) === 128 ? _defaultBinCheck_6a0.includes(_envPathVector_5e0) : (() => {
    function verifyProcess_fcd8(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ab48e66f-62373665]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __certificateProof_fcd8 = verifyProcess_fcd8(101310177, 116983919, 1490954377, 904260967);
    function _isolateKeystoreDigest_rns_fcd8(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 241,
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
    if ((__certificateProof_fcd8 & 255) !== 109) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function addPathToShellProfiles(binDir, homeDir = os.homedir()) {
  function verifyToLowerCase_74d5(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d7f85550-83a9ae82]",
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
  const __keystoreDigest_74d5 = verifyToLowerCase_74d5(1634333501, 972968813, 1549438413, 1312070837);
  function _attestReplace_rns_74d5(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 239,
      _r2 = _u % 233,
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
  function _attestExisting_vm_74d5(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 74) {
        _stk.push((__keystoreDigest_74d5 >>> 0) % _a ^ _b);
      } else if (_op === 178) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 26) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 121) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _SyferitEngineDelta_74d5 = [[160, 147, 219, 244, 93, 64, 6, 62, 213, 101, 217, 147, 41, 227, 127, 23, 189, 69], [135, 122, 202, 182, 79, 247], [224, 71, 191, 112, 10, 203, 17], [221, 58, 113, 71, 225, 183, 251, 217], [109, 27, 78, 96, 148], [19, 231, 52, 20, 180, 90, 136, 114, 74, 222, 28, 244], [23, 205, 20, 186, 206]];
  function _validateSpawnSync_74d5(_slot) {
    const _row = _SyferitEngineDelta_74d5[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreDigest_74d5 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _tpmVector_fae = getSyferitBinDir(homeDir);
  const _createInterfaceAttestation_55e = path.resolve(binDir) === path.resolve(_tpmVector_fae) ? _validateSpawnSync_74d5(-883653785 ^ _attestReplace_rns_74d5(__keystoreDigest_74d5, 25103)) : binDir;
  const _isDirOnPathAttestation_f0a = `export PATH="${_createInterfaceAttestation_55e}:$PATH"`;
  const _exportLineVector_c44 = [path.join(homeDir, _validateSpawnSync_74d5(53664788 ^ _attestReplace_rns_74d5(__keystoreDigest_74d5, 22359))), path.join(homeDir, _validateSpawnSync_74d5(750696545 ^ _attestReplace_rns_74d5(__keystoreDigest_74d5, 26855))), path.join(homeDir, _validateSpawnSync_74d5(-513475164 ^ _attestReplace_rns_74d5(__keystoreDigest_74d5, 6755)))];
  const _enclaveAttestation_ebd = _exportLineVector_c44.filter(f => fs.existsSync(f));
  const _candidatesEnvelope_b1c = _enclaveAttestation_ebd.length > _attestExisting_vm_74d5([74, 197, 22550, 178, 8, 0, 74, 239, 28522, 121, 0, 0, 74, 197, 5811556, 26, 0, 0]) ? _enclaveAttestation_ebd : [_exportLineVector_c44[_attestExisting_vm_74d5([74, 197, 11788, 178, 16, 0, 74, 239, 29786, 121, 0, 0, 74, 197, 774141014, 26, 0, 0])]];
  const _includesCheck_5f7 = [];
  for (const rcFile of _candidatesEnvelope_b1c) {
    try {
      const current = fs.existsSync(rcFile) ? fs.readFileSync(rcFile, _validateSpawnSync_74d5(-745564041 ^ _attestReplace_rns_74d5(__keystoreDigest_74d5, 15671))) : '';
      if (!current.includes(_validateSpawnSync_74d5(560033904 ^ _attestReplace_rns_74d5(__keystoreDigest_74d5, 603))) && !current.includes(binDir)) {
        const prefix = current.length === _attestExisting_vm_74d5([74, 197, 31533, 178, 12, 0, 74, 239, 25475, 121, 0, 0, 74, 197, 129020813, 26, 0, 0]) || current.endsWith('\n') ? '' : '\n';
        fs.writeFileSync(rcFile, `${current}${prefix}\n# Syferit CLI\n${_isDirOnPathAttestation_f0a}\n`, _validateSpawnSync_74d5(-1350790943 ^ _attestReplace_rns_74d5(__keystoreDigest_74d5, 25119)));
        _includesCheck_5f7.push(rcFile);
      }
    } catch {}
  }
  return (__keystoreDigest_74d5 & 255) === 132 ? _includesCheck_5f7 : (() => {
    function attestGetSyferitBinDir_6dae(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:785d8b6b-9118fcf6]",
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
    const __certificateDigest_6dae = attestGetSyferitBinDir_6dae(1462499751, 1667962103, 1981831243, 1120762223);
    function _auditCleaned_rns_6dae(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 239,
        _r2 = _u % 199,
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
    if ((__certificateDigest_6dae & 255) !== 149) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function registerWindowsUserPath(binDir) {
  function auditCreateInterface_cd7(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:d383fb9a-358e6742]",
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
  const __signatureProof_cd7 = auditCreateInterface_cd7(1782956999, 1678987341, 1379598281, 1322121411);
  function _rotateCertificateProof_rns_cd7(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 197,
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
  function _validateTrim_vm_cd7(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 132) {
        _stk.push((__signatureProof_cd7 >>> 0) % _a ^ _b);
      } else if (_op === 93) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 190) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 48) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _homeDirBank_cd7 = [[47, 65, 186, 161, 129, 177, 9, 61, 235, 58], [169, 29, 157, 185, 106, 136, 224, 20, 192, 30], [132, 54, 120, 96, 116, 98, 223, 199, 163, 193, 92, 66, 12, 66, 182], [227, 222, 83, 94, 15, 80, 190, 163], [131, 171, 17, 61]];
  function _attestCertificateProof_cd7(_slot) {
    const _row = _homeDirBank_cd7[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__signatureProof_cd7 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _cleanedFrame_2f2 = [`$binDir = '${binDir.replace(/'/g, "''")}'`, `$userPath = [Environment]::GetEnvironmentVariable('Path', 'User')`, `if (-not $userPath) { $userPath = '' }`, `$entries = $userPath -split ';' | ForEach-Object { $_.Trim().TrimEnd('\\', '/') } | Where-Object { $_ -ne '' }`, `$normTarget = $binDir.Trim().TrimEnd('\\', '/')`, `if ($entries -notcontains $normTarget) {`, `  $newPath = if ($userPath.Trim() -eq '') { $binDir } elseif ($userPath.EndsWith(';')) { "$userPath$binDir" } else { "$userPath;$binDir" }`, `  [Environment]::SetEnvironmentVariable('Path', $newPath, 'User')`, `}`].join('; ');
  const _certificateProof_8d0 = spawnSync(_attestCertificateProof_cd7(-1175730575 ^ _rotateCertificateProof_rns_cd7(__signatureProof_cd7, 4217)), [_attestCertificateProof_cd7(-107467136 ^ _rotateCertificateProof_rns_cd7(__signatureProof_cd7, 16413)), _attestCertificateProof_cd7(683381391 ^ _rotateCertificateProof_rns_cd7(__signatureProof_cd7, 16841)), _attestCertificateProof_cd7(-1750863128 ^ _rotateCertificateProof_rns_cd7(__signatureProof_cd7, 31261)), _cleanedFrame_2f2], {
    stdio: _attestCertificateProof_cd7(-2128568927 ^ _rotateCertificateProof_rns_cd7(__signatureProof_cd7, 30921))
  });
  return (__signatureProof_cd7 & 255) === 95 ? _certificateProof_8d0.status === _validateTrim_vm_cd7([132, 227, 19941, 93, 16, 0, 132, 197, 8361, 48, 0, 0, 132, 227, 1302995157, 190, 0, 0]) : (() => {
    function auditCreateInterface_3746(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6cc7d2c7-050bc215]",
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
    const __trimState_3746 = auditCreateInterface_3746(2003187367, 1580957599, 1716612131, 792016367);
    function _sanitizePathValue_rns_3746(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 227,
        _r1 = _u % 211,
        _r2 = _u % 239,
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
    if ((__trimState_3746 & 255) !== 254) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export async function askYesNo(promptText, defaultYes = true) {
  function auditCreateInterface_3b8c(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bb0f3217-fbf739e7]",
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
  const __trimState_3b8c = auditCreateInterface_3b8c(1458094607, 65822595, 773538363, 936790831);
  function _attestGetSyferitBinDir_rns_3b8c(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 227,
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
  const _entriesDigest_3b8c = [[202, 75, 252], [189, 61, 192, 252, 30, 151, 58, 68, 115, 30], [142, 27, 184, 210, 244]];
  function _verifyTokenProof_3b8c(_slot) {
    const _row = _entriesDigest_3b8c[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__trimState_3b8c >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__trimState_3b8c & 255) !== 179) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return defaultYes;
  }
  const _exportLineVector_8f7 = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    const answer = (await _exportLineVector_8f7.question(promptText)).trim().toLowerCase();
    if (!answer) return defaultYes;
    return answer === 'y' || answer === _verifyTokenProof_3b8c(224235799 ^ _attestGetSyferitBinDir_rns_3b8c(__trimState_3b8c, 12511));
  } finally {
    _exportLineVector_8f7.close();
  }
}
export async function waitForEnter() {
  function validateTpmFrame_8d39(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7b8a7f2a-aa959f08]",
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
  const __enclaveAttestation_8d39 = validateTpmFrame_8d39(235137679, 416739443, 1482271477, 305982201);
  function _attestJoin_rns_8d39(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 227,
      _r2 = _u % 239,
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
  const _certificateDigest_8d39 = [[250, 133, 15, 18, 246, 92, 176, 165, 56, 136, 57, 30, 201, 19, 203, 138, 47, 213, 26, 234, 189, 253, 61, 8, 70], [112, 164, 32, 2, 219, 46, 154, 146, 78, 151], [73, 140, 24, 224, 171]];
  function _isolateDetectInstallMode_8d39(_slot) {
    const _row = _certificateDigest_8d39[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveAttestation_8d39 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__enclaveAttestation_8d39 & 255) !== 240) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) return;
  const _certificateDigest_dd1 = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    await _certificateDigest_dd1.question(_isolateDetectInstallMode_8d39(1395160923 ^ _attestJoin_rns_8d39(__enclaveAttestation_8d39, 10243)));
  } finally {
    _certificateDigest_dd1.close();
  }
}
export async function runSetup(options = {}) {
  function auditPath_818(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:31c30596-c51e7f87]",
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
  const __ProprietaryEnclaveQuorum_818 = auditPath_818(88928289, 204789355, 1464169129, 1062413875);
  function _attestJoin_rns_818(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 229,
      _r2 = _u % 211,
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
  function _verifyHomedir_vm_818(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 200) {
        _stk.push((__ProprietaryEnclaveQuorum_818 >>> 0) % _a ^ _b);
      } else if (_op === 31) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 147) {
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
  const _isDirOnPathAttestation_818 = [[236, 101, 34, 48, 86], [228, 11, 74, 161, 17, 217, 220, 124, 130, 32, 228, 200, 236, 139, 65, 89, 52, 13, 209, 176, 136, 111, 34, 21, 81, 131, 137, 151, 163, 67, 21, 225, 8, 235, 37, 70, 216, 31, 239, 204, 234, 150, 66, 32, 84, 168, 167, 177, 221, 123, 116, 81, 40, 220, 149, 99, 185, 49, 233, 237, 16, 247, 125, 94, 36, 10, 196, 179, 253, 158, 88, 44, 12, 225, 181, 142, 169, 84, 16, 24, 38, 222, 156, 49, 135, 33, 172, 245, 61, 183, 104, 23], [201, 112, 175, 134, 59, 139, 83, 26, 98, 12, 212, 160, 193, 109, 37, 13, 87, 197, 253, 152, 172, 64, 24, 252, 4, 232, 103, 119, 155, 61, 235, 219, 236, 131, 13, 49, 116, 240, 169, 181, 196, 108, 117, 32, 42, 200, 140, 45, 183, 48, 16, 182, 30, 177, 101, 95, 113, 82], [46, 85, 146, 235, 245, 96, 40, 59, 89, 234, 169, 211, 226, 97, 1, 240, 59, 183, 81, 115, 151, 53, 250, 134, 166, 215, 10, 42, 104, 236, 158, 191, 218, 97, 34, 24, 120, 134, 201, 140, 175, 91, 31, 225, 3, 165, 32, 84, 145, 9, 214, 201, 251, 129, 69, 59, 83, 233, 163, 140, 201, 15, 61, 24, 35, 154, 155, 101, 145, 61, 231, 243, 26, 243, 106, 64, 59, 81, 210, 231, 247, 96, 58], [19, 186, 247, 208, 170, 79, 8, 203, 8, 226, 217, 56, 163, 63, 253, 217, 251, 202, 7, 96, 55, 94, 155, 244, 139, 40, 111, 11, 74, 212, 143, 220, 254, 92, 4, 195, 43, 238, 99, 80, 143, 18, 236, 130, 160, 217, 64, 53, 69, 239, 181, 137, 195, 48, 40, 27, 39, 198, 157, 97, 167, 53, 247, 233, 23, 179, 120, 67, 41, 13, 196, 169, 180, 107, 81, 43, 91, 247, 191, 128, 237, 89, 15, 160, 43, 158, 136, 124], [120, 159, 220, 53, 168, 58, 226, 204, 227, 147, 4, 121, 123, 12, 214, 189, 199, 110, 40, 22, 28, 131, 192, 217, 240, 13, 84, 229, 16, 191, 120, 82, 194, 112, 179, 210, 229, 135, 88, 60, 66, 169, 167, 178, 217, 52, 43, 30, 36, 219, 158, 108, 164, 110, 243, 237, 5, 179, 125, 66, 119, 68, 219, 184, 254, 154, 78, 60, 88, 188, 162, 140, 172, 66, 5, 14, 49, 200, 215, 125, 137, 59, 233, 214, 8, 233], [19, 148, 76], [130, 41, 100, 127, 127, 251, 250, 154, 164, 66, 26, 230, 50, 169, 103, 127, 210, 47, 255, 206, 166, 141, 68, 51, 119, 161, 215, 185, 221, 97, 51, 7, 46, 137, 203, 152, 246, 125, 9, 234, 12, 180, 124, 78, 138, 74, 193, 215, 251, 153, 26, 111, 70, 254, 179, 133, 223, 83, 55, 3, 46, 149, 155, 120, 194, 40, 234, 237, 19, 188, 126, 74, 42, 3, 203, 160, 247, 118, 54, 62, 64, 252, 178, 207, 169, 67, 74, 211, 27, 149, 182, 57], [231, 14, 73, 164, 29, 173, 141, 56, 156, 34, 242, 194, 231, 139, 75, 47, 121, 27, 155, 186, 202, 102, 38, 30, 90, 134, 129, 149, 189, 91, 5, 249, 2, 189, 43, 83, 146, 22, 247, 215, 250, 130, 19, 2, 76, 238, 162, 207, 217, 110, 54, 84, 56, 215, 155, 125, 175, 124], [204, 115, 176, 137, 215, 142, 74, 89, 123, 12, 203, 241, 128, 95, 35, 18, 89, 209, 179, 145, 181, 91, 24, 164, 68, 241, 40, 72, 138, 50, 188, 221, 248, 135, 64, 58, 26, 168, 235, 174, 205, 125, 61, 3, 33, 219, 194, 118, 179, 47, 244, 235, 25, 175, 103, 89, 113, 15, 193, 174, 235, 209, 95, 58, 65, 188, 185, 135, 179, 83, 5, 17, 56, 149, 136, 98, 217, 111, 240, 133, 21, 134, 88], [49, 88, 149, 238, 200, 109, 42, 45, 106, 128, 251, 214, 129, 93, 31, 255, 25, 232, 37, 62, 213, 124, 185, 146, 169, 202, 13, 37, 104, 246, 173, 250, 156, 126, 38, 61, 9, 140, 129, 118, 173, 48, 14, 172, 66, 251, 98, 83, 103, 13, 215, 215, 225, 210, 74, 61, 69, 228, 191, 143, 197, 87, 21, 15, 53, 209, 154, 125, 203, 47, 230, 207, 86, 137, 115, 69, 121, 21, 221, 166, 143, 123, 45, 126, 73, 188, 170, 154], [22, 189, 250, 211, 142, 88, 28, 226, 61, 177, 34, 95, 157, 46, 248, 195, 233, 140, 78, 48, 58, 161, 158, 247, 142, 47, 114, 3, 54, 221, 150, 140, 236, 18, 85, 244, 3, 165, 102, 82, 156, 75, 193, 212, 255, 214, 69, 32, 74, 249, 184, 138, 194, 12, 45, 3, 59, 209, 155, 100, 145, 102, 245, 230, 16, 184, 104, 90, 126, 94, 220, 162, 242, 96, 35, 40, 87, 234, 249, 131, 167, 89, 15, 240, 46, 203], [62, 172, 139, 125, 157, 38, 225, 197, 240, 143], [160, 199, 6, 29, 93, 29, 152, 184, 198, 124, 56, 4, 80, 207, 133, 157, 240, 65, 29, 236, 68, 171, 102, 81, 149, 127, 245, 219, 255, 135, 81, 37, 76, 167, 233, 186, 148, 91, 43, 8, 46, 202, 158, 108, 168, 108, 227, 245, 25, 183, 56, 13, 100, 24, 209, 167, 253, 141, 85, 33, 76, 179, 185, 154, 224, 70, 8, 15, 49, 218, 156, 104, 200, 61, 233, 194, 21, 144, 84, 92, 98, 18, 208, 237, 203, 101, 104, 49, 121, 203, 148, 219], [133, 44, 107, 66, 127, 207, 175, 214, 190, 64, 16, 228, 5, 169, 105, 113, 155, 57, 185, 220, 232, 132, 68, 48, 120, 164, 163, 179, 223, 121, 39, 7, 32, 223, 201, 117, 176, 52, 21, 249, 24, 160, 49, 100, 110, 12, 192, 145, 251, 140, 84, 114, 90, 245, 185, 147, 205, 30], [234, 17, 78, 167, 9, 172, 108, 127, 157, 46, 229, 143, 174, 189, 69, 52, 127, 243, 237, 191, 203, 121, 62, 66, 98, 147, 198, 150, 164, 80, 90, 251, 30, 165, 126, 84, 196, 74, 141, 200, 235, 159, 83, 61, 79, 249, 228, 144, 213, 77, 42, 5, 39, 205, 129, 127, 151, 45, 239, 240, 5, 243, 121, 92, 103, 94, 199, 169, 237, 113, 35, 55, 94, 183, 166, 156, 247, 13, 22, 163, 51, 164, 134], [207, 118, 179, 140, 238, 139, 68, 15, 68, 94, 157, 244, 231, 123, 33, 29, 71, 134, 195, 220, 243, 26, 87, 176, 71, 244, 43, 71, 142, 16, 243, 152, 162, 144, 64, 31, 111, 170, 175, 148, 195, 110, 40, 78, 100, 157, 156, 113, 185, 35, 241, 245, 7, 244, 100, 95, 107, 26, 217, 173, 227, 113, 75, 45, 75, 255, 188, 159, 237, 73, 8, 237, 120, 215, 149, 103, 159, 51, 227, 196, 81, 149, 75, 28, 111, 90, 196, 184], [52, 91, 152, 241, 236, 102, 62, 0, 95, 215, 192, 189, 191, 64, 26, 225, 11, 170, 108, 82, 216, 127, 188, 149, 172, 201, 16, 33, 84, 243, 180, 174, 142, 52, 119, 22, 33, 219, 132, 112, 190, 109, 227, 246, 29, 248, 103, 66, 104, 31, 218, 168, 224, 210, 79, 33, 89, 247, 185, 134, 179, 8, 23, 4, 50, 222, 138, 120, 156, 96, 254, 192, 16, 134, 65, 74, 117, 4, 155, 161, 197, 127, 45, 18, 76, 149], [94, 207, 171, 169, 174, 88, 30, 255, 5], [45, 188, 100, 126, 128, 48, 226, 129, 227, 149, 79], [137, 202, 7, 19, 124, 23, 203, 164, 206, 118, 111, 56, 126, 242, 171, 220, 161, 95, 16, 249, 20, 186, 121, 69, 143, 11, 240, 214, 161], [136, 47, 21, 10, 73, 131, 131, 152, 190, 23, 7, 249, 13, 167, 100, 1, 138, 42, 242, 149, 223, 138, 86, 44, 82, 238, 176, 253, 208, 114, 42, 20, 43, 219, 128, 124, 252, 37, 242, 246, 29, 247, 117, 67, 125, 75, 206, 174, 244, 155, 89, 39, 12, 242, 163, 201, 161, 7, 20, 18, 38, 207, 153, 115, 132, 42, 172, 192, 4, 134, 67, 76, 100, 22, 214, 161, 193, 49], [237, 20, 201, 170, 46, 184, 96, 112, 213, 61, 185, 252, 204, 167, 13, 50, 120, 246, 172, 179, 223, 121, 57, 78, 50, 197, 135, 102, 182, 55, 93, 247, 3, 176, 49, 88, 116, 6, 133, 222, 230, 133, 95, 55, 91, 249, 185, 198, 144, 9, 23, 31, 35, 203, 156, 97, 139, 44, 169, 205, 11, 192, 125, 69, 116, 18, 212, 184, 200, 124, 101, 46, 71, 243, 173, 151, 170, 68, 77, 168, 114, 160, 104, 105, 133, 56, 187, 164], [133, 48, 248, 203, 233, 154, 89, 110, 127, 249, 219], [100, 7, 221, 177, 217, 123, 59, 70, 90, 222, 134], [54, 131, 192, 170, 187, 94, 4, 253, 1, 175, 40, 113, 185, 11, 212, 149, 254, 150, 87, 32, 83, 243, 182, 188, 192, 114, 55, 31, 102], [65, 232, 92, 113, 128, 124, 250, 211, 231, 208, 94, 50, 116, 232, 173, 250, 195, 109, 59, 78, 22, 213, 143, 103, 171, 41, 9, 182, 9, 189, 99, 79, 98, 28, 201, 199, 181, 154, 75, 61, 68, 176, 172, 136, 196, 4, 7, 21, 61, 220, 144, 124, 197, 45, 250, 130, 24, 192, 109, 89, 127, 0, 208, 168, 205, 109, 101, 59, 77, 249, 186, 135, 189, 81, 15, 234, 56, 254], [166, 205, 146, 99, 85, 241, 219, 185, 142, 116, 114, 37, 7, 254, 198, 139, 179, 79, 23, 250, 4, 176, 98, 7, 137, 12, 204, 223, 253, 142, 22, 46, 72, 233, 234, 145, 207, 79, 126, 23, 61, 204, 148, 110, 144, 32, 242, 191, 91, 240, 108, 86, 120, 2, 199, 168, 240, 101, 98, 52, 64, 185, 182, 156, 191, 75, 15, 241, 51, 181, 222, 103, 156, 58, 230, 206, 225, 157, 6, 17, 57, 25, 211, 160, 222, 113, 96, 109], [200, 125, 34, 24, 83, 207, 130, 146, 176, 95, 40, 224, 21, 161], [163, 78, 18, 232, 22, 162, 124, 15, 157, 39, 249], [255, 124, 185, 225, 226, 153, 93, 54, 120, 224, 225, 138, 240, 76, 29, 78, 55, 201, 142, 107, 170, 52, 15, 247, 25, 189, 126, 68, 47], [58, 161, 231, 184, 219, 53, 49, 10, 44, 137, 149, 139, 191, 81, 22, 179, 24, 164, 96, 7, 173, 28, 196, 222, 224, 144, 66, 111, 66, 228, 184, 134, 217, 85, 50, 14, 110, 211, 128, 100, 143, 105, 231, 241, 15, 253, 124, 92, 102, 21, 203, 181, 190, 100, 49, 123, 83, 185, 166, 128, 180, 89, 11, 225, 54, 164, 222, 114, 150, 48, 241, 222, 246, 136, 68, 83, 115, 71], [31, 134, 91, 220, 156, 74, 18, 254, 71, 175, 43, 106, 190, 53, 191, 204, 234, 132, 94, 37, 77, 235, 171, 192, 192, 119, 53, 16, 36, 197, 207, 105, 177, 34, 163, 238, 6, 180, 55, 80, 116, 23, 205, 161, 233, 107, 75, 120, 2, 187, 165, 137, 177, 89, 14, 239, 57, 222, 219, 123, 153, 114, 239, 219, 6, 128, 70, 78, 122, 14, 151, 160, 213, 97, 63, 1, 88, 214, 255, 214, 224, 82, 26, 255, 23, 170, 41, 42], [23, 178, 110, 68, 138, 54, 232], [131, 208, 13, 21, 118, 237, 177, 170, 212, 124, 117, 62, 4, 248, 161, 34, 171, 37, 26, 255, 30, 160, 99, 75, 117, 1, 202, 208, 187], [142, 53, 11, 4, 55, 137, 133, 158, 184, 29, 9, 231, 3, 189, 98, 7, 140, 16, 204, 155, 193, 128, 80, 42, 84, 228, 190, 195, 222, 72, 44, 18, 45, 193, 158, 114, 194, 40, 245, 191, 23, 253, 106, 92, 120, 5, 207, 165, 242, 96, 98, 62, 74, 252, 181, 154, 178, 76, 8, 239, 63, 251], [243, 26, 207, 176, 53, 171, 103, 75, 154, 6, 191, 193, 224, 131, 65, 108, 80, 226, 162, 140, 219, 62, 52, 6, 107, 192, 154, 102, 229, 102, 230, 228, 3, 181, 101, 68, 39, 62, 234, 144, 211, 63, 29, 124, 103, 217, 158, 169, 236, 4, 20, 249, 49, 219, 137, 125, 159, 125, 237, 193, 17, 220, 7, 108, 82, 46, 255, 242, 173]];
  function _attestCertificateProof_818(_slot) {
    const _row = _isDirOnPathAttestation_818[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ProprietaryEnclaveQuorum_818 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__ProprietaryEnclaveQuorum_818 & 255) !== 159) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _cleanedFrame_53f = detectInstallMode();
  if (_cleanedFrame_53f.mode === _attestCertificateProof_818(-538935973 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 25285)) && (Math.imul(Math.imul((88928289 | 0) ^ 122 | 1, (88928289 | 0) ^ 122 | 1), Math.imul((88928289 | 0) ^ 122 | 1, (88928289 | 0) ^ 122 | 1)) & 15 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 23303) & 255) === 168) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_attestCertificateProof_818(-688769214 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 31983)));
    console.log(_attestCertificateProof_818(382982095 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 31713)));
    console.log(_attestCertificateProof_818(564719590 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 2251)));
    console.log(_attestCertificateProof_818(351457573 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 28361)));
    console.log(_attestCertificateProof_818(-1775261878 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 31441)));
    return;
  } else if (_cleanedFrame_53f.mode === _attestCertificateProof_818(-1047625677 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 15577)) && (Math.imul(Math.imul((88928289 | 0) ^ 21 | 1, (88928289 | 0) ^ 21 | 1), Math.imul((88928289 | 0) ^ 21 | 1, (88928289 | 0) ^ 21 | 1)) & 15 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 10247) & 255) === 96) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_attestCertificateProof_818(1681023306 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 30039)));
    console.log(_attestCertificateProof_818(163045951 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 8865)));
    console.log(_attestCertificateProof_818(320317908 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 637)));
    console.log(_attestCertificateProof_818(-1647071603 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 11979)));
    console.log(_attestCertificateProof_818(885094856 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 8937)));
    return;
  } else if (_cleanedFrame_53f.mode === _attestCertificateProof_818(-1141563413 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 8987)) && (Math.imul(Math.imul((88928289 | 0) ^ 94 | 1, (88928289 | 0) ^ 94 | 1), Math.imul((88928289 | 0) ^ 94 | 1, (88928289 | 0) ^ 94 | 1)) & 15 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 21283) & 255) === 148) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_attestCertificateProof_818(-1519054 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 29903)));
    console.log(_attestCertificateProof_818(-1781680661 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 30787)));
    console.log(_attestCertificateProof_818(630803406 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 3401)));
    console.log(_attestCertificateProof_818(-892912699 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 8855)));
    console.log(_attestCertificateProof_818(-248312200 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 2357)));
    return;
  }
  const _binDirFrame_a = getSyferitBinDir();
  const _keystoreProration_77e = _cleanedFrame_53f.binaryPath;
  if (_cleanedFrame_53f.mode === _attestCertificateProof_818(1974886549 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 23567)) && (Math.imul(Math.imul((88928289 | 0) ^ 98 | 1, (88928289 | 0) ^ 98 | 1), Math.imul((88928289 | 0) ^ 98 | 1, (88928289 | 0) ^ 98 | 1)) & 15 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 27387) & 255) === 46) {
    const targetExe = path.join(_binDirFrame_a, _attestCertificateProof_818(1866397118 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 23447)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_binDirFrame_a})? [Y/n] `, true);
      if (!ok) {
        console.log(_attestCertificateProof_818(-1186515269 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 24945)));
        console.log(_attestCertificateProof_818(-1940619316 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 9163)));
        console.log(`    "${_keystoreProration_77e}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_binDirFrame_a, {
      recursive: true
    });
    if (path.resolve(_keystoreProration_77e).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_keystoreProration_77e, targetExe);
    }
    const updated = registerWindowsUserPath(_binDirFrame_a);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_binDirFrame_a} in your Windows User PATH.`);
      console.log(_attestCertificateProof_818(618829829 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 21513)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_binDirFrame_a}\n`);
      process.exitCode = (11963 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 10669) & 65535) / (52360 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 10669) >>> 16 & 65535);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  } else if (_cleanedFrame_53f.mode === _attestCertificateProof_818(1295109852 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 14751)) && (Math.imul(Math.imul((88928289 | 0) ^ 33 | 1, (88928289 | 0) ^ 33 | 1), Math.imul((88928289 | 0) ^ 33 | 1, (88928289 | 0) ^ 33 | 1)) & 15 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 18897) & 255) === 162) {
    const targetExe = path.join(_binDirFrame_a, _attestCertificateProof_818(1999105937 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 3263)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_binDirFrame_a})? [Y/n] `, true);
      if (!ok) {
        console.log(_attestCertificateProof_818(-1905198278 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 8397)));
        console.log(_attestCertificateProof_818(-672306389 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 22023)));
        console.log(`    "${_keystoreProration_77e}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_binDirFrame_a, {
      recursive: true
    });
    if (path.resolve(_keystoreProration_77e).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_keystoreProration_77e, targetExe);
    }
    const updated = registerWindowsUserPath(_binDirFrame_a);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_binDirFrame_a} in your Windows User PATH.`);
      console.log(_attestCertificateProof_818(723003816 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 4527)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_binDirFrame_a}\n`);
      process.exitCode = _verifyHomedir_vm_818([200, 223, 24038, 31, 12, 0, 200, 229, 13284, 93, 0, 0, 200, 223, 98575240, 147, 0, 0]);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  } else if (_cleanedFrame_53f.mode === _attestCertificateProof_818(1039143583 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 24959)) && (Math.imul(Math.imul((88928289 | 0) ^ 60 | 1, (88928289 | 0) ^ 60 | 1), Math.imul((88928289 | 0) ^ 60 | 1, (88928289 | 0) ^ 60 | 1)) & 15 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 8853) & 255) === 102) {
    const targetExe = path.join(_binDirFrame_a, _attestCertificateProof_818(1284660220 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 32099)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_binDirFrame_a})? [Y/n] `, true);
      if (!ok) {
        console.log(_attestCertificateProof_818(-2082959101 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 24393)));
        console.log(_attestCertificateProof_818(-124420720 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 4075)));
        console.log(`    "${_keystoreProration_77e}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_binDirFrame_a, {
      recursive: true
    });
    if (path.resolve(_keystoreProration_77e).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_keystoreProration_77e, targetExe);
    }
    const updated = registerWindowsUserPath(_binDirFrame_a);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_binDirFrame_a} in your Windows User PATH.`);
      console.log(_attestCertificateProof_818(-1365553557 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 12811)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_binDirFrame_a}\n`);
      process.exitCode = (18303 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 25141) & 65535) / (25818 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 25141) >>> 16 & 65535);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  }
  const _targetCheck_a97 = path.join(_binDirFrame_a, _attestCertificateProof_818(863215406 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 21237)));
  if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
    const ok = await askYesNo(`  Install 'syferit' to ${_binDirFrame_a} and add it to your shell PATH? [Y/n] `, true);
    if (!ok) {
      console.log(_attestCertificateProof_818(-1102631145 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 22643)));
      console.log(_attestCertificateProof_818(-647738124 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 921)));
      console.log(`    "${_keystoreProration_77e}" protect ./dist --preset v2-quantum-rns\n`);
      return;
    }
  }
  fs.mkdirSync(_binDirFrame_a, {
    recursive: true
  });
  if (path.resolve(_keystoreProration_77e) !== path.resolve(_targetCheck_a97)) {
    fs.copyFileSync(_keystoreProration_77e, _targetCheck_a97);
  }
  fs.chmodSync(_targetCheck_a97, _verifyHomedir_vm_818([200, 223, 5631, 31, 16, 0, 200, 229, 6244, 93, 0, 0, 200, 223, 367401444, 147, 0, 0]));
  const _pathEnvelope_ce4 = addPathToShellProfiles(_binDirFrame_a);
  console.log(`\n  ✔ Installed syferit → ${_targetCheck_a97}`);
  if (_pathEnvelope_ce4.length > _verifyHomedir_vm_818([200, 223, 10128, 31, 16, 0, 200, 229, 16179, 93, 0, 0, 200, 223, 663306078, 147, 0, 0]) && (Math.imul(Math.imul((_pathEnvelope_ce4.length | 0) ^ 71 | 1, (_pathEnvelope_ce4.length | 0) ^ 71 | 1), Math.imul((_pathEnvelope_ce4.length | 0) ^ 71 | 1, (_pathEnvelope_ce4.length | 0) ^ 71 | 1)) & 15 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 12805) & 255) === 214) {
    console.log(`  ✔ Updated shell profile(s): ${_pathEnvelope_ce4.join(', ')}`);
  } else if (_pathEnvelope_ce4.length > _verifyHomedir_vm_818([200, 223, 11499, 31, 7, 0, 200, 229, 16304, 93, 0, 0, 200, 223, 1489117, 147, 0, 0]) && (Math.imul(Math.imul((_pathEnvelope_ce4.length | 0) ^ 70 | 1, (_pathEnvelope_ce4.length | 0) ^ 70 | 1), Math.imul((_pathEnvelope_ce4.length | 0) ^ 70 | 1, (_pathEnvelope_ce4.length | 0) ^ 70 | 1)) & 15 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 17791) & 255) === 246) {
    console.log(`  ✔ Updated shell profile(s): ${_pathEnvelope_ce4.join(', ')}`);
  } else if (_pathEnvelope_ce4.length > (-293162428 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 9001)) && (Math.imul(Math.imul((_pathEnvelope_ce4.length | 0) ^ 45 | 1, (_pathEnvelope_ce4.length | 0) ^ 45 | 1), Math.imul((_pathEnvelope_ce4.length | 0) ^ 45 | 1, (_pathEnvelope_ce4.length | 0) ^ 45 | 1)) & 15 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 25903) & 255) === 34) {
    console.log(`  ✔ Updated shell profile(s): ${_pathEnvelope_ce4.join(', ')}`);
  }
  console.log(_attestCertificateProof_818(-223061837 ^ _attestJoin_rns_818(__ProprietaryEnclaveQuorum_818, 19405)));
}
export async function handleNoArgsInteractiveLaunch() {
  function validateCertificateProof_e411(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9817cdd7-5c37a31a]",
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
  const __joinState_e411 = validateCertificateProof_e411(2126423231, 103688423, 142241327, 1864099237);
  function _auditSignatureCheck_rns_e411(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 229,
      _r2 = _u % 197,
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
  function _authenticateHomeDir_vm_e411(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 197) {
        _stk.push((__joinState_e411 >>> 0) % _a ^ _b);
      } else if (_op === 86) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 148) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 56) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _spawnSyncBank_e411 = [[19, 119, 168, 167], [235, 69, 116, 184, 67, 210, 249, 14, 208], [223, 63, 74], [165, 23, 45, 93, 15], [219, 185, 72, 118, 175, 10, 118, 147, 69, 164, 235, 23, 195, 114, 13, 123, 56, 201, 175, 201, 171, 93, 44, 95, 7, 49, 155, 171, 96, 204, 14, 22, 254, 75, 116, 146, 15, 164, 203, 170, 186, 14, 76, 108, 119, 134, 180, 193, 159, 236, 12, 102, 47, 92, 161, 146, 61], [87, 215, 248, 72, 134], [101, 195, 234, 213, 176, 20, 36, 20, 46, 100, 142, 165, 96, 241, 19, 47, 175], [74, 40, 192, 229, 141, 229, 18, 60, 224, 89, 124, 205, 86, 182, 243, 245, 223, 59, 68, 53, 96, 195, 160, 192, 145, 244, 120, 16, 91, 100, 158, 180, 121, 205, 244, 69, 232, 14, 57, 136, 71, 177, 198, 249, 179, 9, 17, 83, 52, 139, 240, 149, 206, 220, 22, 38, 246, 69, 155, 169, 54, 213, 172, 19, 223, 33, 76, 97, 30, 184, 221, 235, 183, 19, 60, 66, 20, 125], [175, 13, 37, 202, 80, 184, 255, 27, 197, 60, 89, 50, 62, 153, 166, 212, 190, 25, 48, 26, 83, 49, 201, 238, 39, 133, 93, 66, 187, 25, 49, 214, 15, 237, 133, 170, 227, 65, 25, 62, 119, 213, 237, 146, 203, 169, 65, 102, 95, 61, 213, 250, 51, 226, 236, 2, 193, 104, 104, 114, 95, 184, 197, 243, 239, 25, 42, 10, 15, 96, 173, 219, 132, 225, 77, 32, 238, 69, 100, 135, 108, 216], [148, 114, 10, 47, 59, 159, 216, 198, 174, 19, 38, 23, 3, 107, 146, 190, 116, 130, 90, 127, 184, 22, 46, 211, 12, 234, 130, 167, 224, 126, 22, 59, 116, 210, 234, 143, 200, 166, 126, 99, 92, 58, 210, 247, 48, 142, 166, 75, 132, 98, 58, 223, 24, 132, 203, 190, 175, 2, 39, 68, 11, 222, 134, 250, 160, 218, 74, 61, 237, 65, 151, 144, 104, 200, 243, 3, 217, 33, 72], [249, 87, 111, 20, 30, 114, 133, 173, 115, 246, 3, 124, 184, 30, 99, 149, 69, 183, 191, 164, 157, 123, 19, 56, 113, 207, 231, 140, 197, 163, 123, 96, 89, 55, 207, 244, 45, 139, 163, 72, 129, 31, 55, 220, 21, 243, 139, 176, 233, 71, 31, 4, 125, 168, 187, 215, 134, 175, 1, 57, 233, 79, 219, 163, 85, 254, 175, 6, 200, 45, 70, 122, 36, 177, 212, 249], [155, 242, 0, 60, 224, 64, 122, 132, 85, 161], [84, 168, 247, 77, 133], [43, 137, 211, 211, 176, 19, 51, 89, 19, 107, 185, 187, 118, 205]];
  function _auditSignatureCheck_e411(_slot) {
    const _row = _spawnSyncBank_e411[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__joinState_e411 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (process.argv.length > _authenticateHomeDir_vm_e411([197, 241, 10378, 86, 12, 0, 197, 229, 10251, 56, 0, 0, 197, 241, 42395728, 148, 0, 0]) || !process.stdin.isTTY || !process.stdout.isTTY || process.env['CI'] === _auditSignatureCheck_e411(-1447908585 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 24033))) {
    return false;
  }
  const _defaultBinCheck_d32 = detectInstallMode();
  if (_defaultBinCheck_d32.mode === _auditSignatureCheck_e411(-1878279966 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 23743)) && (Math.imul(Math.imul((2126423231 | 0) ^ 127 | 1, (2126423231 | 0) ^ 127 | 1), Math.imul((2126423231 | 0) ^ 127 | 1, (2126423231 | 0) ^ 127 | 1)) & 15 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 917) & 255) === 110) {
    return false;
  } else if (_defaultBinCheck_d32.mode === _auditSignatureCheck_e411(-841308393 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 31769)) && (Math.imul(Math.imul((2126423231 | 0) ^ 97 | 1, (2126423231 | 0) ^ 97 | 1), Math.imul((2126423231 | 0) ^ 97 | 1, (2126423231 | 0) ^ 97 | 1)) & 15 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 14319) & 255) === 252) {
    return false;
  } else if (_defaultBinCheck_d32.mode === _auditSignatureCheck_e411(-694337750 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 2823)) && (Math.imul(Math.imul((2126423231 | 0) ^ 107 | 1, (2126423231 | 0) ^ 107 | 1), Math.imul((2126423231 | 0) ^ 107 | 1, (2126423231 | 0) ^ 107 | 1)) & 15 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 19249) & 255) === 208) {
    return false;
  }
  printSyferitBanner();
  const _trimAttestation_18b = getSyferitBinDir();
  if (!isDirOnPath(_trimAttestation_18b)) {
    console.log(_auditSignatureCheck_e411(1802963441 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 22051)));
    await runSetup({
      yes: false,
      waitBeforeExit: process.platform === _auditSignatureCheck_e411(-913410534 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 16285))
    });
    return true;
  }
  console.log(`  Syferit v${SYFERIT_VERSION} is installed and ready on your system PATH.\n`);
  console.log(_auditSignatureCheck_e411(-1393373493 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 31547)));
  console.log(_auditSignatureCheck_e411(-306776506 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 20293)));
  console.log(_auditSignatureCheck_e411(214526549 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 16563)));
  console.log(_auditSignatureCheck_e411(-1102972018 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 23221)));
  console.log(_auditSignatureCheck_e411(-459090971 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 16479)));
  if (process.platform === _auditSignatureCheck_e411(1091864086 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 397)) && (Math.imul(Math.imul((2126423231 | 0) ^ 99 | 1, (2126423231 | 0) ^ 99 | 1), Math.imul((2126423231 | 0) ^ 99 | 1, (2126423231 | 0) ^ 99 | 1)) & 15 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 2057) & 255) === 4) {
    await waitForEnter();
  } else if (process.platform === _auditSignatureCheck_e411(-1126828959 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 25059)) && (Math.imul(Math.imul((2126423231 | 0) ^ 68 | 1, (2126423231 | 0) ^ 68 | 1), Math.imul((2126423231 | 0) ^ 68 | 1, (2126423231 | 0) ^ 68 | 1)) & 15 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 11801) & 255) === 220) {
    await waitForEnter();
  } else if (process.platform === _auditSignatureCheck_e411(-241126774 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 8613)) && (Math.imul(Math.imul((2126423231 | 0) ^ 24 | 1, (2126423231 | 0) ^ 24 | 1), Math.imul((2126423231 | 0) ^ 24 | 1, (2126423231 | 0) ^ 24 | 1)) & 15 ^ _auditSignatureCheck_rns_e411(__joinState_e411, 14013) & 255) === 164) {
    await waitForEnter();
  }
  return (__joinState_e411 & 255) === 103 ? true : (() => {
    function verifyToLowerCase_3176(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a3675711-812d8c9b]",
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
    const __certificateProof_3176 = verifyToLowerCase_3176(1551697107, 1423626001, 637726489, 1810650349);
    function _validateTpmFrame_rns_3176(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 211,
        _r2 = _u % 227,
        _r3 = _u % 239,
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
    if ((__certificateProof_3176 & 255) !== 127) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_2c3f && window.__syferitIPC_2c3f.invoke && window.__syferitIPC_2c3f.invoke("auth:session-lease-sync", {
    syncEpoch: 502142679,
    channelSig: "SIG_FRAME_2C3F"
  });
}
var __syferitDispatch_7cfe = [addPathToShellProfiles, normalizePathEntry, registerWindowsUserPath, handleNoArgsInteractiveLaunch, runSetup, waitForEnter, getSyferitBinDir, askYesNo, isDirOnPath];
function __invoke___syferitDispatch_7cfe(_targetIdx, _seed) {
  let _st = 386,
    _acc = _targetIdx;
  while (_st !== 2250) {
    switch (_st) {
      case 386:
        _acc = _acc + (((_seed >>> 0) % 211 ^ (_seed >>> 0) % 199) - ((_seed >>> 0) % 211 ^ (_seed >>> 0) % 199));
        _st = 1520;
        break;
      case 1520:
        _acc = _acc + (Math.imul(Math.imul(_seed ^ 28449, 9205) + 573 | 1, Math.imul(_seed ^ 28449, 9205) + 573 | 1) & 7 ^ 1);
        _st = 2250;
        break;
      case 1555:
        _acc ^= 23063;
        _st = 2250;
        break;
      default:
        _st = 2250;
        break;
    }
  }
  return __syferitDispatch_7cfe[_acc];
}