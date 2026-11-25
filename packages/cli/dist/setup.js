// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { printSyferitBanner } from './index.js';
import { detectInstallMode, SYFERIT_VERSION } from './updater.js';
export function getSyferitBinDir(homeDir = os.homedir()) {
  function isolateCertificateVector_656d(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e85ec02d-10678d1a]",
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
  const __ProprietaryEnclaveQuorum_656d = isolateCertificateVector_656d(805907917, 1343508471, 1328746893, 2098650331);
  function _rotateExportLine_rns_656d(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
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
  const _SyferitEngineDelta_656d = [[55, 70, 212, 152, 200, 187, 40, 230], [92, 51, 188], [6, 17, 131, 45, 133, 99, 249, 181, 248, 194], [251, 199, 125, 1, 121]];
  function _sanitizeCleaned_656d(_slot) {
    const _row = _SyferitEngineDelta_656d[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ProprietaryEnclaveQuorum_656d >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__ProprietaryEnclaveQuorum_656d & 255) === 25 ? path.join(homeDir, _sanitizeCleaned_656d(-351662043 ^ _rotateExportLine_rns_656d(__ProprietaryEnclaveQuorum_656d, 31949)), _sanitizeCleaned_656d(-1699433712 ^ _rotateExportLine_rns_656d(__ProprietaryEnclaveQuorum_656d, 15893))) : (() => {
    function validateProcess_d49c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0d1f4e8b-0569ef37]",
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
    const __nonceProof_d49c = validateProcess_d49c(634248179, 1159691165, 1024736847, 2099888291);
    function _authenticateNonceProof_rns_d49c(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 239,
        _r2 = _u % 211,
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
    if ((__nonceProof_d49c & 255) !== 131) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
function normalizePathEntry(p, platform = process.platform) {
  function rotateTrim_88fd(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:68a9e849-ef50f210]",
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
  const __existingState_88fd = rotateTrim_88fd(1382223175, 1763283343, 242687145, 1800366793);
  function _sanitizeCleaned_rns_88fd(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 223,
      _r2 = _u % 251,
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
  const _tokenProof_88fd = [[160, 40, 180, 235, 89], [153, 8, 139, 152, 226, 138, 225, 248, 87, 235], [82, 232, 69, 78, 208]];
  function _isolateToLowerCase_88fd(_slot) {
    const _row = _tokenProof_88fd[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__existingState_88fd >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _keystoreProration_403 = p.trim().replace(/^"+|"+$/g, '').replace(/[\\/]+$/, '');
  return (__existingState_88fd & 255) === 215 ? platform === _isolateToLowerCase_88fd(-1452145627 ^ _sanitizeCleaned_rns_88fd(__existingState_88fd, 19583)) ? _keystoreProration_403.toLowerCase() : _keystoreProration_403 : (() => {
    function authenticatePrintSyferitBanner_48f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f79940a7-e27e7ef7]",
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
    const __entriesState_48f = authenticatePrintSyferitBanner_48f(591146417, 1550486785, 465407391, 1495535111);
    function _rotateTrim_rns_48f(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 229,
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
    if ((__entriesState_48f & 255) !== 54) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isDirOnPath(dir, envPath = process.env['PATH'] || process.env['Path'] || '', platform = process.platform) {
  function normalizeQuorumVector_69ab(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:2b0f5f78-13f9c034]",
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
  const __envPathState_69ab = normalizeQuorumVector_69ab(446229741, 1836511563, 1154630681, 2037393527);
  function _verifyIncludes_rns_69ab(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 197,
      _r2 = _u % 223,
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
  const _signatureFrame_69ab = [[2, 24, 213, 199, 59], [255, 248, 148, 124, 92, 90, 6, 196, 177, 219], [204, 216, 100, 82, 54]];
  function _verifyGetSyferitBinDir_69ab(_slot) {
    const _row = _signatureFrame_69ab[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__envPathState_69ab >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _enclaveProof_e09 = platform === _verifyGetSyferitBinDir_69ab(1713583145 ^ _verifyIncludes_rns_69ab(__envPathState_69ab, 24759)) ? ';' : ':';
  const _exportLineBank_faf = normalizePathEntry(dir, platform);
  if (!_exportLineBank_faf) return false;
  const _SyferitEngineDelta_2b6 = envPath.split(_enclaveProof_e09).map(e => normalizePathEntry(e, platform));
  return (__envPathState_69ab & 255) === 117 ? _SyferitEngineDelta_2b6.includes(_exportLineBank_faf) : (() => {
    function isolatePath_72ba(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:779d4bb2-b5885a6d]",
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
    const __existingState_72ba = isolatePath_72ba(653253945, 1006135153, 1681412087, 552515481);
    function _verifyProprietaryEnclaveContext_rns_72ba(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 251,
        _r2 = _u % 197,
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
    if ((__existingState_72ba & 255) !== 110) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function addPathToShellProfiles(binDir, homeDir = os.homedir()) {
  function sanitizeEnclaveProof_1250(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:82754b50-5fd45cb4]",
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
  const __targetState_1250 = sanitizeEnclaveProof_1250(1913618317, 857340983, 2075932487, 257776077);
  function _verifyNormalizePathEntry_rns_1250(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 233,
      _r2 = _u % 227,
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
  function _sanitizeHomedir_vm_1250(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 81) {
        _stk.push((__targetState_1250 >>> 0) % _a ^ _b);
      } else if (_op === 23) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 117) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 219) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _joinVector_1250 = [[93, 68, 12, 11, 72, 143, 249, 169, 216, 82, 14, 28, 92, 188, 208, 96, 160, 50], [176, 75, 27, 3, 64, 166], [237, 52, 236, 227, 63, 152, 66], [198, 11, 192, 218, 26, 102, 42, 44], [120, 212, 177, 247, 153], [28, 182, 133, 153, 163, 43, 249, 231, 117, 143, 77, 73], [34, 158, 71, 9, 211]];
  function _isolateTokenDigest_1250(_slot) {
    const _row = _joinVector_1250[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__targetState_1250 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _getSyferitBinDirDigest_82f = getSyferitBinDir(homeDir);
  const _defaultBinAttestation_321 = path.resolve(binDir) === path.resolve(_getSyferitBinDirDigest_82f) ? _isolateTokenDigest_1250(-777895759 ^ _verifyNormalizePathEntry_rns_1250(__targetState_1250, 3115)) : binDir;
  const _enclaveProof_438 = `export PATH="${_defaultBinAttestation_321}:$PATH"`;
  const _tokenProof_2b8 = [path.join(homeDir, _isolateTokenDigest_1250(1299021422 ^ _verifyNormalizePathEntry_rns_1250(__targetState_1250, 27441))), path.join(homeDir, _isolateTokenDigest_1250(-1753307815 ^ _verifyNormalizePathEntry_rns_1250(__targetState_1250, 7609))), path.join(homeDir, _isolateTokenDigest_1250(1260417694 ^ _verifyNormalizePathEntry_rns_1250(__targetState_1250, 27147)))];
  const _enclaveAttestation_4f6 = _tokenProof_2b8.filter(f => fs.existsSync(f));
  const _certificateVector_421 = _enclaveAttestation_4f6.length > _sanitizeHomedir_vm_1250([81, 251, 17180, 23, 7, 0, 81, 233, 12356, 219, 0, 0, 81, 251, 2237969, 117, 0, 0]) ? _enclaveAttestation_4f6 : [_tokenProof_2b8[_sanitizeHomedir_vm_1250([81, 251, 22019, 23, 16, 0, 81, 233, 10262, 219, 0, 0, 81, 251, 1458776129, 117, 0, 0])]];
  const _cleanedAttestation_d71 = [];
  for (const rcFile of _certificateVector_421) {
    try {
      const current = fs.existsSync(rcFile) ? fs.readFileSync(rcFile, _isolateTokenDigest_1250(-652381253 ^ _verifyNormalizePathEntry_rns_1250(__targetState_1250, 26581))) : '';
      if (!current.includes(_isolateTokenDigest_1250(-1807661354 ^ _verifyNormalizePathEntry_rns_1250(__targetState_1250, 11243))) && !current.includes(binDir)) {
        const prefix = current.length === _sanitizeHomedir_vm_1250([81, 251, 29423, 23, 12, 0, 81, 233, 16759, 219, 0, 0, 81, 251, 119681314, 117, 0, 0]) || current.endsWith('\n') ? '' : '\n';
        fs.writeFileSync(rcFile, `${current}${prefix}\n# Syferit CLI\n${_enclaveProof_438}\n`, _isolateTokenDigest_1250(-1527067943 ^ _verifyNormalizePathEntry_rns_1250(__targetState_1250, 3241)));
        _cleanedAttestation_d71.push(rcFile);
      }
    } catch {}
  }
  return (__targetState_1250 & 255) === 121 ? _cleanedAttestation_d71 : (() => {
    function isolateTokenDigest_cc33(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2f2afb09-a42ea07a]",
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
    const __toLowerCaseState_cc33 = isolateTokenDigest_cc33(576032209, 1136113817, 2143894169, 409898033);
    function _auditKeystoreProof_rns_cc33(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 197,
        _r2 = _u % 223,
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
    if ((__toLowerCaseState_cc33 & 255) !== 197) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function registerWindowsUserPath(binDir) {
  function isolatePath_3dff(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:76ac9fff-011ce18b]",
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
  const __isDirOnPathState_3dff = isolatePath_3dff(1168323495, 374097501, 167888389, 388856069);
  function _verifyIncludes_rns_3dff(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 199,
      _r2 = _u % 229,
      _r3 = _u % 223,
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
  function _auditTpmState_vm_3dff(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 133) {
        _stk.push((__isDirOnPathState_3dff >>> 0) % _a ^ _b);
      } else if (_op === 175) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 69) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 33) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _defaultBinAttestation_3dff = [[139, 173, 65, 199, 253, 37, 162, 83, 79, 134], [13, 169, 52, 151, 198, 20, 137, 50, 36, 106], [104, 66, 239, 130, 144, 206, 96, 229, 31, 85, 203, 96, 104, 190, 89], [71, 114, 202, 124, 147, 164, 87, 193], [255, 63, 186, 83]];
  function _authenticateIsDirOnPath_3dff(_slot) {
    const _row = _defaultBinAttestation_3dff[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__isDirOnPathState_3dff >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _platformFrame_c80 = [`$binDir = '${binDir.replace(/'/g, "''")}'`, `$userPath = [Environment]::GetEnvironmentVariable('Path', 'User')`, `if (-not $userPath) { $userPath = '' }`, `$entries = $userPath -split ';' | ForEach-Object { $_.Trim().TrimEnd('\\', '/') } | Where-Object { $_ -ne '' }`, `$normTarget = $binDir.Trim().TrimEnd('\\', '/')`, `if ($entries -notcontains $normTarget) {`, `  $newPath = if ($userPath.Trim() -eq '') { $binDir } elseif ($userPath.EndsWith(';')) { "$userPath$binDir" } else { "$userPath;$binDir" }`, `  [Environment]::SetEnvironmentVariable('Path', $newPath, 'User')`, `}`].join('; ');
  const _SoltrixStudiosDelta_cb7 = spawnSync(_authenticateIsDirOnPath_3dff(-875838045 ^ _verifyIncludes_rns_3dff(__isDirOnPathState_3dff, 5423)), [_authenticateIsDirOnPath_3dff(-95795478 ^ _verifyIncludes_rns_3dff(__isDirOnPathState_3dff, 12443)), _authenticateIsDirOnPath_3dff(-573825117 ^ _verifyIncludes_rns_3dff(__isDirOnPathState_3dff, 23955)), _authenticateIsDirOnPath_3dff(-1529245928 ^ _verifyIncludes_rns_3dff(__isDirOnPathState_3dff, 28431)), _platformFrame_c80], {
    stdio: _authenticateIsDirOnPath_3dff(-752173973 ^ _verifyIncludes_rns_3dff(__isDirOnPathState_3dff, 3457))
  });
  return (__isDirOnPathState_3dff & 255) === 251 ? _SoltrixStudiosDelta_cb7.status === _auditTpmState_vm_3dff([133, 233, 7953, 175, 8, 0, 133, 199, 6153, 33, 0, 0, 133, 233, 2074926, 69, 0, 0]) : (() => {
    function validateKeystoreFrame_dea7(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3f43b9e5-6f01f362]",
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
    const __nonceContext_dea7 = validateKeystoreFrame_dea7(562118011, 2112282541, 1554373771, 297853711);
    function _isolateTokenDigest_rns_dea7(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 199,
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
    if ((__nonceContext_dea7 & 255) !== 37) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export async function askYesNo(promptText, defaultYes = true) {
  function auditEnclaveAttestation_9ed2(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b259aab1-307eb8b0]",
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
  const __signatureFrame_9ed2 = auditEnclaveAttestation_9ed2(1028233215, 740594095, 1633789435, 1820524509);
  function _verifyEnclaveAttestation_rns_9ed2(_x, _s) {
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
  const _candidatesAttestation_9ed2 = [[72, 37, 67], [51, 11, 33, 218, 152, 137, 155, 58, 13, 232], [8, 233, 27, 136, 106]];
  function _sanitizeKeystoreDigest_9ed2(_slot) {
    const _row = _candidatesAttestation_9ed2[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__signatureFrame_9ed2 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__signatureFrame_9ed2 & 255) !== 49) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return defaultYes;
  }
  const _printSyferitBannerCheck_3fe = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    const answer = (await _printSyferitBannerCheck_3fe.question(promptText)).trim().toLowerCase();
    if (!answer) return defaultYes;
    return answer === 'y' || answer === _sanitizeKeystoreDigest_9ed2(556168191 ^ _verifyEnclaveAttestation_rns_9ed2(__signatureFrame_9ed2, 12845));
  } finally {
    _printSyferitBannerCheck_3fe.close();
  }
}
export async function waitForEnter() {
  function isolateSYFERIT_VERSION_aa76(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:60dfd335-6107134d]",
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
  const __existingState_aa76 = isolateSYFERIT_VERSION_aa76(669801405, 1812382227, 235352615, 1971581233);
  function _normalizeQuorumVector_rns_aa76(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 241,
      _r2 = _u % 199,
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
  const _enclaveProof_aa76 = [[4, 41, 1, 40, 208, 248, 198, 127, 22, 116, 39, 212, 175, 183, 253, 64, 49, 121, 20, 176, 155, 153, 43, 114, 168], [86, 64, 50, 248, 181, 178, 168, 88, 40, 51], [43, 48, 10, 174, 137]];
  function _auditKeystoreFrame_aa76(_slot) {
    const _row = _enclaveProof_aa76[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__existingState_aa76 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__existingState_aa76 & 255) !== 14) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) return;
  const _homedirAttestation_184 = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    await _homedirAttestation_184.question(_auditKeystoreFrame_aa76(-462669877 ^ _normalizeQuorumVector_rns_aa76(__existingState_aa76, 12091)));
  } finally {
    _homedirAttestation_184.close();
  }
}
export async function runSetup(options = {}) {
  function verifySoltrixStudiosContext_1575(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:949ea926-1edaa788]",
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
  const __pathState_1575 = verifySoltrixStudiosContext_1575(394862991, 188570325, 1586039723, 137856129);
  function _isolatePlatform_rns_1575(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 199,
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
  function _verifyTokenFrame_vm_1575(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 205) {
        _stk.push((__pathState_1575 >>> 0) % _a ^ _b);
      } else if (_op === 36) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 139) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 65) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _homeDirAttestation_1575 = [[137, 72, 5, 167, 235], [63, 112, 171, 208, 250, 130, 61, 237, 41, 11, 197, 121, 183, 96, 32, 200, 79, 214, 176, 33, 35, 84, 3, 164, 250, 232, 104, 6, 88, 40, 244, 144, 211, 208, 4, 247, 115, 196, 206, 93, 129, 125, 35, 209, 15, 131, 134, 32, 102, 32, 85, 192, 195, 167, 116, 18, 82, 26, 200, 124, 171, 220, 92, 239, 127, 241, 165, 66, 150, 69, 57, 189, 167, 202, 148, 63, 114, 63, 241, 137, 221, 133, 125, 160, 44, 26, 141, 68, 150, 92, 9, 134], [100, 85, 140, 53, 158, 102, 48, 137, 31, 233, 183, 83, 100, 80, 6, 190, 250, 160, 222, 11, 73, 45, 251, 143, 217, 205, 68, 228, 62, 224, 200, 72, 129, 102, 110, 194, 17, 221, 138, 38, 121, 73, 86, 147, 207, 181, 111, 94, 90, 21, 243, 37, 187, 156, 70, 236, 44, 183], [73, 186, 243, 26, 170, 71, 9, 170, 254, 181, 136, 66, 13, 6, 224, 129, 220, 152, 112, 226, 40, 18, 219, 55, 193, 40, 107, 219, 7, 203, 255, 46, 125, 78, 3, 169, 167, 225, 40, 29, 72, 4, 254, 112, 172, 130, 1, 229, 54, 230, 183, 88, 132, 102, 36, 202, 244, 214, 130, 61, 102, 104, 28, 137, 196, 245, 122, 20, 78, 26, 198, 98, 189, 44, 75, 209, 84, 182, 179, 22, 144, 79, 27], [174, 159, 216, 127, 79, 50, 239, 188, 229, 199, 6, 167, 6, 18, 218, 110, 166, 47, 104, 143, 82, 131, 252, 99, 38, 13, 80, 180, 239, 185, 104, 75, 3, 57, 235, 172, 142, 211, 68, 231, 34, 247, 179, 29, 197, 52, 39, 194, 24, 202, 154, 38, 102, 109, 15, 140, 202, 163, 98, 30, 66, 24, 208, 126, 170, 150, 87, 236, 76, 240, 163, 94, 217, 78, 14, 180, 254, 218, 152, 55, 48, 60, 224, 207, 206, 195, 111, 235], [147, 196, 61, 164, 3, 17, 195, 125, 184, 120, 101, 232, 0, 215, 183, 44, 108, 85, 9, 167, 183, 232, 33, 72, 11, 102, 181, 148, 203, 132, 89, 227, 105, 171, 146, 67, 142, 108, 57, 205, 25, 130, 134, 35, 98, 111, 10, 143, 207, 160, 127, 29, 79, 69, 210, 124, 190, 152, 92, 243, 44, 191, 186, 73, 149, 65, 47, 173, 243, 151, 131, 61, 119, 41, 228, 159, 202, 147, 54, 236, 34, 0, 200, 103, 163, 2], [182, 121, 47], [221, 14, 69, 238, 216, 164, 219, 11, 75, 37, 251, 151, 213, 134, 70, 238, 109, 8, 222, 127, 193, 114, 37, 194, 24, 134, 182, 40, 122, 78, 18, 182, 241, 238, 42, 9, 17, 34, 232, 123, 163, 147, 93, 255, 45, 165, 160, 70, 132, 126, 123, 158, 225, 193, 146, 52, 112, 52, 22, 146, 201, 250, 122, 9, 29, 15, 203, 124, 180, 99, 95, 219, 69, 228, 170, 81, 144, 89, 23, 175, 255, 219, 147, 126, 78, 60, 171, 162, 244, 178, 87, 168], [2, 115, 174, 211, 240, 136, 82, 167, 57, 15, 213, 117, 186, 110, 36, 192, 28, 198, 252, 45, 103, 67, 25, 161, 255, 235, 102, 2, 64, 62, 234, 150, 167, 128, 12, 228, 63, 243, 168, 72, 159, 111, 116, 245, 17, 203, 141, 96, 124, 51, 17, 195, 213, 178, 100, 2, 74, 81], [103, 88, 145, 56, 140, 101, 43, 200, 0, 215, 170, 96, 43, 100, 2, 163, 242, 186, 82, 0, 78, 48, 249, 213, 159, 202, 9, 249, 33, 233, 157, 76, 147, 108, 33, 203, 65, 131, 202, 63, 118, 38, 28, 146, 202, 160, 35, 7, 88, 4, 213, 122, 162, 132, 70, 232, 42, 244, 160, 95, 128, 10, 62, 171, 234, 151, 152, 54, 104, 56, 228, 128, 195, 206, 105, 243, 114, 84, 209, 52, 190, 109, 57], [76, 189, 246, 29, 109, 80, 9, 158, 199, 229, 216, 69, 100, 48, 252, 140, 196, 205, 6, 173, 112, 161, 154, 1, 196, 47, 110, 214, 13, 219, 142, 105, 33, 91, 5, 142, 236, 241, 98, 5, 64, 21, 237, 63, 231, 214, 65, 224, 58, 232, 180, 68, 132, 15, 41, 174, 232, 193, 156, 60, 96, 58, 246, 156, 200, 180, 121, 14, 110, 18, 197, 124, 251, 108, 80, 214, 28, 248, 190, 85, 210, 94, 14, 237, 236, 225, 137, 9], [177, 226, 219, 66, 97, 63, 253, 147, 218, 158, 3, 206, 34, 9, 217, 114, 142, 115, 47, 193, 85, 134, 255, 102, 41, 0, 83, 178, 233, 186, 119, 29, 11, 77, 180, 101, 172, 130, 71, 227, 59, 164, 160, 69, 128, 49, 36, 209, 237, 198, 153, 59, 109, 107, 12, 146, 220, 190, 122, 21, 78, 65, 212, 119, 183, 103, 73, 203, 17, 185, 189, 83, 149, 79, 2, 185, 232, 205, 216, 50, 64, 38, 238, 129, 193, 236], [209, 136, 86, 216, 41, 23, 219, 110, 186], [251, 44, 103, 140, 38, 198, 249, 41, 109, 71, 25, 181, 251, 164, 100, 12, 11, 42, 252, 157, 159, 144, 71, 224, 62, 164, 212, 74, 148, 108, 48, 212, 23, 140, 200, 43, 47, 0, 10, 153, 197, 177, 127, 29, 67, 71, 194, 100, 162, 156, 25, 188, 63, 227, 176, 86, 150, 86, 52, 176, 231, 152, 152, 43, 59, 45, 233, 158, 202, 129, 125, 249, 99, 6, 200, 115, 190, 123, 53, 205, 25, 249, 177, 28, 144, 94, 73, 128, 210, 144, 181, 74], [32, 17, 72, 241, 210, 170, 140, 69, 91, 45, 243, 151, 216, 140, 74, 226, 62, 228, 154, 79, 133, 97, 39, 195, 29, 137, 128, 32, 98, 92, 4, 180, 197, 162, 42, 6, 93, 17, 246, 106, 189, 141, 18, 215, 51, 233, 163, 2, 158, 81, 55, 225, 247, 208, 154, 32, 104, 115], [5, 118, 175, 214, 238, 131, 77, 238, 34, 9, 196, 62, 201, 66, 36, 197, 16, 212, 140, 46, 108, 86, 31, 243, 189, 244, 39, 7, 67, 15, 187, 106, 177, 130, 95, 229, 99, 165, 236, 89, 148, 120, 50, 204, 232, 198, 197, 33, 122, 42, 11, 148, 192, 162, 96, 14, 72, 10, 206, 97, 162, 44, 88, 205, 8, 185, 166, 88, 138, 94, 2, 166, 225, 144, 135, 45, 16, 114, 247, 210, 220, 131, 103], [106, 91, 148, 59, 179, 110, 43, 224, 33, 131, 250, 99, 74, 94, 30, 162, 226, 235, 36, 75, 14, 127, 184, 223, 226, 201, 12, 240, 35, 245, 172, 7, 199, 125, 39, 232, 50, 143, 128, 59, 102, 51, 15, 217, 137, 248, 99, 14, 92, 14, 214, 98, 186, 209, 75, 240, 14, 231, 190, 90, 142, 84, 20, 178, 238, 210, 155, 40, 48, 44, 231, 130, 157, 138, 114, 240, 50, 22, 220, 123, 244, 120, 44, 139, 18, 191, 171, 87], [79, 128, 249, 96, 71, 93, 31, 177, 244, 188, 33, 44, 68, 43, 251, 144, 208, 145, 77, 227, 115, 164, 157, 4, 199, 34, 113, 208, 15, 216, 149, 63, 53, 111, 86, 135, 202, 160, 101, 1, 85, 70, 194, 103, 166, 211, 70, 243, 51, 228, 187, 89, 139, 9, 46, 176, 242, 220, 152, 55, 104, 99, 246, 149, 201, 133, 107, 233, 55, 91, 223, 113, 187, 109, 32, 219, 14, 239, 250, 80, 158, 68, 12, 163, 231, 206], [247, 170, 147, 21, 68, 48, 243, 151, 223, 136, 121, 253, 34, 238], [202, 147, 69, 239, 63, 23, 195, 48, 132, 106, 46], [212, 47, 104, 252, 25, 202, 172, 51, 99, 83, 80, 135, 219, 159, 76, 75, 92, 58, 255, 150, 177, 135, 94, 242, 34, 238, 175, 73, 196], [35, 20, 52, 187, 226, 232, 98, 9, 69, 124, 230, 136, 214, 156, 69, 176, 33, 241, 211, 4, 180, 97, 55, 221, 9, 197, 145, 108, 107, 41, 11, 133, 192, 160, 97, 13, 23, 14, 211, 103, 166, 220, 84, 242, 38, 176, 175, 95, 159, 64, 56, 182, 167, 217, 130, 120, 122, 108, 245, 131, 221, 148, 120, 226, 47, 17, 141, 113, 175, 109, 34, 221, 31, 253, 183, 80, 154, 10], [8, 121, 42, 217, 243, 157, 67, 227, 112, 224, 154, 111, 161, 66, 110, 193, 29, 219, 143, 32, 98, 92, 26, 253, 215, 184, 100, 21, 91, 18, 190, 100, 166, 157, 18, 235, 41, 227, 230, 77, 131, 88, 60, 164, 246, 220, 154, 117, 53, 100, 244, 140, 222, 174, 127, 18, 46, 17, 138, 126, 166, 37, 94, 214, 17, 255, 183, 75, 149, 89, 70, 189, 226, 174, 142, 4, 71, 33, 174, 219, 151, 141, 75, 250, 56, 29, 152, 23], [58, 23, 217, 122, 142, 101, 56, 159, 16, 222, 186], [1, 218, 186, 38, 116, 94, 4, 249, 255, 179, 97], [157, 232, 33, 59, 64, 53, 229, 140, 218, 148, 9, 192, 18, 208, 245, 4, 149, 125, 54, 209, 8, 216, 151, 45, 123, 41, 22, 142, 141], [156, 205, 127, 226, 37, 161, 217, 64, 138, 53, 61, 193, 17, 197, 142, 105, 126, 72, 24, 253, 243, 168, 108, 20, 70, 12, 234, 37, 172, 144, 64, 252, 63, 249, 170, 84, 208, 71, 40, 174, 233, 149, 143, 59, 97, 105, 228, 134, 192, 185, 115, 15, 96, 16, 217, 49, 181, 37, 78, 202, 26, 237, 179, 91, 144, 72, 70, 168, 232, 164, 153, 20, 80, 52, 236, 153, 221, 211], [193, 50, 243, 146, 58, 214, 186, 40, 41, 91, 83, 148, 216, 153, 39, 26, 84, 16, 246, 107, 171, 151, 67, 182, 46, 227, 173, 78, 130, 105, 119, 223, 239, 214, 203, 32, 96, 40, 95, 134, 218, 163, 117, 31, 79, 7, 211, 46, 252, 47, 77, 199, 23, 229, 166, 89, 151, 74, 67, 165, 255, 158, 151, 45, 88, 52, 238, 128, 220, 146, 63, 246, 59, 21, 199, 127, 190, 122, 103, 128, 94, 198, 178, 49, 113, 86, 65, 220], [99, 89, 4, 178, 232, 187, 118, 2, 93, 58], [88, 37, 243, 153, 205, 153, 93, 190, 54, 252, 216], [90, 161, 154, 114, 143, 124, 62, 197, 29, 205, 194, 25, 77, 105, 62, 253, 210, 180, 109, 24, 71, 17, 236, 100, 188, 144, 93, 247, 114], [85, 134, 134, 41, 124, 26, 16, 187, 243, 238, 116, 26, 88, 14, 247, 34, 183, 131, 65, 182, 10, 243, 165, 79, 159, 119, 35, 158, 229, 219, 153, 55, 118, 50, 19, 159, 137, 188, 97, 21, 80, 78, 198, 96, 168, 34, 93, 205, 9, 242, 170, 68, 217, 75, 16, 234, 236, 158, 135, 49, 83, 38, 234, 144, 217, 131, 63, 227, 49, 31, 208, 111, 169, 111, 37, 194, 20, 152], [186, 235, 188, 75, 97, 47, 253, 145, 226, 146, 12, 221, 19, 208, 224, 83, 143, 105, 57, 210, 16, 206, 132, 111, 101, 42, 18, 135, 201, 160, 48, 22, 84, 15, 132, 121, 187, 145, 24, 255, 17, 234, 170, 86, 132, 78, 20, 231, 167, 150, 130, 62, 108, 60, 225, 128, 220, 131, 60, 236, 52, 87, 208, 100, 163, 109, 33, 217, 7, 235, 248, 79, 112, 92, 24, 182, 245, 179, 32, 73, 5, 63, 253, 136, 202, 143, 6, 133], [204, 137, 79, 245, 33, 237, 201], [238, 53, 110, 230, 19, 192, 146, 57, 105, 89, 86, 141, 225, 133, 66, 81, 70, 0, 249, 108, 187, 141, 64, 248, 40, 228, 169, 67, 222], [41, 26, 42, 181, 232, 238, 100, 15, 95, 66, 232, 118, 172, 154, 67, 182, 43, 255, 173, 10, 190, 103, 49, 219, 243, 219, 159, 114, 113, 47, 13, 131, 202, 174, 127, 3, 29, 15, 212, 46, 176, 34, 75, 205, 23, 226, 174, 84, 149, 79, 67, 175, 245, 219, 148, 43, 85, 51, 233, 158, 208, 220], [14, 127, 32, 223, 144, 150, 64, 252, 55, 227, 224, 94, 133, 110, 38, 155, 13, 199, 141, 35, 126, 99, 19, 145, 134, 165, 101, 25, 0, 75, 193, 115, 190, 144, 74, 235, 66, 195, 141, 103, 190, 26, 66, 227, 194, 244, 185, 30, 49, 97, 251, 150, 212, 134, 110, 234, 50, 88, 210, 126, 180, 49, 96, 251, 47, 203, 144, 29, 8]];
  function _authenticateIsDirOnPath_1575(_slot) {
    const _row = _homeDirAttestation_1575[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__pathState_1575 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__pathState_1575 & 255) !== 250) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _tpmCheck_579 = detectInstallMode();
  if (_tpmCheck_579.mode === _authenticateIsDirOnPath_1575(1456321775 ^ _isolatePlatform_rns_1575(__pathState_1575, 25739)) && (Math.imul(Math.imul((394862991 | 0) ^ 91 | 1, (394862991 | 0) ^ 91 | 1), Math.imul((394862991 | 0) ^ 91 | 1, (394862991 | 0) ^ 91 | 1)) & 15 ^ _isolatePlatform_rns_1575(__pathState_1575, 17001) & 255) === 142) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_authenticateIsDirOnPath_1575(14589120 ^ _isolatePlatform_rns_1575(__pathState_1575, 15761)));
    console.log(_authenticateIsDirOnPath_1575(1628578349 ^ _isolatePlatform_rns_1575(__pathState_1575, 19047)));
    console.log(_authenticateIsDirOnPath_1575(710640732 ^ _isolatePlatform_rns_1575(__pathState_1575, 7281)));
    console.log(_authenticateIsDirOnPath_1575(679870917 ^ _isolatePlatform_rns_1575(__pathState_1575, 20793)));
    console.log(_authenticateIsDirOnPath_1575(1147790530 ^ _isolatePlatform_rns_1575(__pathState_1575, 21781)));
    return;
  } else if (_tpmCheck_579.mode === _authenticateIsDirOnPath_1575(-1475056313 ^ _isolatePlatform_rns_1575(__pathState_1575, 13085)) && (Math.imul(Math.imul((394862991 | 0) ^ 63 | 1, (394862991 | 0) ^ 63 | 1), Math.imul((394862991 | 0) ^ 63 | 1, (394862991 | 0) ^ 63 | 1)) & 15 ^ _isolatePlatform_rns_1575(__pathState_1575, 29473) & 255) === 226) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_authenticateIsDirOnPath_1575(2061830116 ^ _isolatePlatform_rns_1575(__pathState_1575, 12471)));
    console.log(_authenticateIsDirOnPath_1575(1998140787 ^ _isolatePlatform_rns_1575(__pathState_1575, 7811)));
    console.log(_authenticateIsDirOnPath_1575(-57336202 ^ _isolatePlatform_rns_1575(__pathState_1575, 4071)));
    console.log(_authenticateIsDirOnPath_1575(752365781 ^ _isolatePlatform_rns_1575(__pathState_1575, 19119)));
    console.log(_authenticateIsDirOnPath_1575(1161415938 ^ _isolatePlatform_rns_1575(__pathState_1575, 635)));
    return;
  } else if (_tpmCheck_579.mode === _authenticateIsDirOnPath_1575(1225937503 ^ _isolatePlatform_rns_1575(__pathState_1575, 20605)) && (Math.imul(Math.imul((394862991 | 0) ^ 119 | 1, (394862991 | 0) ^ 119 | 1), Math.imul((394862991 | 0) ^ 119 | 1, (394862991 | 0) ^ 119 | 1)) & 15 ^ _isolatePlatform_rns_1575(__pathState_1575, 23043) & 255) === 98) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_authenticateIsDirOnPath_1575(745325684 ^ _isolatePlatform_rns_1575(__pathState_1575, 24161)));
    console.log(_authenticateIsDirOnPath_1575(-1598703403 ^ _isolatePlatform_rns_1575(__pathState_1575, 7059)));
    console.log(_authenticateIsDirOnPath_1575(-1301406676 ^ _isolatePlatform_rns_1575(__pathState_1575, 5563)));
    console.log(_authenticateIsDirOnPath_1575(453752227 ^ _isolatePlatform_rns_1575(__pathState_1575, 19827)));
    console.log(_authenticateIsDirOnPath_1575(-938442904 ^ _isolatePlatform_rns_1575(__pathState_1575, 32237)));
    return;
  }
  const _homeDirAttestation_1e8 = getSyferitBinDir();
  const _resolveCheck_169 = _tpmCheck_579.binaryPath;
  if (_tpmCheck_579.mode === _authenticateIsDirOnPath_1575(1719727567 ^ _isolatePlatform_rns_1575(__pathState_1575, 26369)) && (Math.imul(Math.imul((394862991 | 0) ^ 73 | 1, (394862991 | 0) ^ 73 | 1), Math.imul((394862991 | 0) ^ 73 | 1, (394862991 | 0) ^ 73 | 1)) & 15 ^ _isolatePlatform_rns_1575(__pathState_1575, 2839) & 255) === 208) {
    const targetExe = path.join(_homeDirAttestation_1e8, _authenticateIsDirOnPath_1575(-716567664 ^ _isolatePlatform_rns_1575(__pathState_1575, 4711)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_homeDirAttestation_1e8})? [Y/n] `, true);
      if (!ok) {
        console.log(_authenticateIsDirOnPath_1575(185330023 ^ _isolatePlatform_rns_1575(__pathState_1575, 20647)));
        console.log(_authenticateIsDirOnPath_1575(-1969873978 ^ _isolatePlatform_rns_1575(__pathState_1575, 11081)));
        console.log(`    "${_resolveCheck_169}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_homeDirAttestation_1e8, {
      recursive: true
    });
    if (path.resolve(_resolveCheck_169).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_resolveCheck_169, targetExe);
    }
    const updated = registerWindowsUserPath(_homeDirAttestation_1e8);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_homeDirAttestation_1e8} in your Windows User PATH.`);
      console.log(_authenticateIsDirOnPath_1575(-589655947 ^ _isolatePlatform_rns_1575(__pathState_1575, 18275)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_homeDirAttestation_1e8}\n`);
      process.exitCode = (50489 ^ _isolatePlatform_rns_1575(__pathState_1575, 17959) & 65535) / (50 ^ _isolatePlatform_rns_1575(__pathState_1575, 17959) >>> 16 & 65535);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  } else if (_tpmCheck_579.mode === _authenticateIsDirOnPath_1575(535712544 ^ _isolatePlatform_rns_1575(__pathState_1575, 29043)) && (Math.imul(Math.imul((394862991 | 0) ^ 90 | 1, (394862991 | 0) ^ 90 | 1), Math.imul((394862991 | 0) ^ 90 | 1, (394862991 | 0) ^ 90 | 1)) & 15 ^ _isolatePlatform_rns_1575(__pathState_1575, 14751) & 255) === 176) {
    const targetExe = path.join(_homeDirAttestation_1e8, _authenticateIsDirOnPath_1575(492388057 ^ _isolatePlatform_rns_1575(__pathState_1575, 29587)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_homeDirAttestation_1e8})? [Y/n] `, true);
      if (!ok) {
        console.log(_authenticateIsDirOnPath_1575(1420337618 ^ _isolatePlatform_rns_1575(__pathState_1575, 17923)));
        console.log(_authenticateIsDirOnPath_1575(-1010446755 ^ _isolatePlatform_rns_1575(__pathState_1575, 2969)));
        console.log(`    "${_resolveCheck_169}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_homeDirAttestation_1e8, {
      recursive: true
    });
    if (path.resolve(_resolveCheck_169).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_resolveCheck_169, targetExe);
    }
    const updated = registerWindowsUserPath(_homeDirAttestation_1e8);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_homeDirAttestation_1e8} in your Windows User PATH.`);
      console.log(_authenticateIsDirOnPath_1575(1022641800 ^ _isolatePlatform_rns_1575(__pathState_1575, 1175)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_homeDirAttestation_1e8}\n`);
      process.exitCode = _verifyTokenFrame_vm_1575([205, 229, 19252, 36, 7, 0, 205, 199, 23052, 65, 0, 0, 205, 229, 2483565, 139, 0, 0]);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  } else if (_tpmCheck_579.mode === _authenticateIsDirOnPath_1575(-1458083177 ^ _isolatePlatform_rns_1575(__pathState_1575, 22057)) && (Math.imul(Math.imul((394862991 | 0) ^ 88 | 1, (394862991 | 0) ^ 88 | 1), Math.imul((394862991 | 0) ^ 88 | 1, (394862991 | 0) ^ 88 | 1)) & 15 ^ _isolatePlatform_rns_1575(__pathState_1575, 4145) & 255) === 40) {
    const targetExe = path.join(_homeDirAttestation_1e8, _authenticateIsDirOnPath_1575(1460378638 ^ _isolatePlatform_rns_1575(__pathState_1575, 31873)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_homeDirAttestation_1e8})? [Y/n] `, true);
      if (!ok) {
        console.log(_authenticateIsDirOnPath_1575(638426089 ^ _isolatePlatform_rns_1575(__pathState_1575, 9557)));
        console.log(_authenticateIsDirOnPath_1575(-141281300 ^ _isolatePlatform_rns_1575(__pathState_1575, 14705)));
        console.log(`    "${_resolveCheck_169}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_homeDirAttestation_1e8, {
      recursive: true
    });
    if (path.resolve(_resolveCheck_169).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_resolveCheck_169, targetExe);
    }
    const updated = registerWindowsUserPath(_homeDirAttestation_1e8);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_homeDirAttestation_1e8} in your Windows User PATH.`);
      console.log(_authenticateIsDirOnPath_1575(1354515579 ^ _isolatePlatform_rns_1575(__pathState_1575, 28383)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_homeDirAttestation_1e8}\n`);
      process.exitCode = (56377 ^ _isolatePlatform_rns_1575(__pathState_1575, 10971) & 65535) / (33234 ^ _isolatePlatform_rns_1575(__pathState_1575, 10971) >>> 16 & 65535);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  }
  const _pathDigest_74 = path.join(_homeDirAttestation_1e8, _authenticateIsDirOnPath_1575(715238934 ^ _isolatePlatform_rns_1575(__pathState_1575, 9595)));
  if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
    const ok = await askYesNo(`  Install 'syferit' to ${_homeDirAttestation_1e8} and add it to your shell PATH? [Y/n] `, true);
    if (!ok) {
      console.log(_authenticateIsDirOnPath_1575(-297046275 ^ _isolatePlatform_rns_1575(__pathState_1575, 24871)));
      console.log(_authenticateIsDirOnPath_1575(-563669516 ^ _isolatePlatform_rns_1575(__pathState_1575, 11471)));
      console.log(`    "${_resolveCheck_169}" protect ./dist --preset v2-quantum-rns\n`);
      return;
    }
  }
  fs.mkdirSync(_homeDirAttestation_1e8, {
    recursive: true
  });
  if (path.resolve(_resolveCheck_169) !== path.resolve(_pathDigest_74)) {
    fs.copyFileSync(_resolveCheck_169, _pathDigest_74);
  }
  fs.chmodSync(_pathDigest_74, _verifyTokenFrame_vm_1575([205, 229, 22366, 36, 8, 0, 205, 199, 2505, 65, 0, 0, 205, 229, 5735492, 139, 0, 0]));
  const _certificateVector_419 = addPathToShellProfiles(_homeDirAttestation_1e8);
  console.log(`\n  ✔ Installed syferit → ${_pathDigest_74}`);
  if (_certificateVector_419.length > _verifyTokenFrame_vm_1575([205, 229, 30295, 36, 16, 0, 205, 199, 7179, 65, 0, 0, 205, 229, 1987386475, 139, 0, 0]) && (Math.imul(Math.imul((_certificateVector_419.length | 0) ^ 123 | 1, (_certificateVector_419.length | 0) ^ 123 | 1), Math.imul((_certificateVector_419.length | 0) ^ 123 | 1, (_certificateVector_419.length | 0) ^ 123 | 1)) & 15 ^ _isolatePlatform_rns_1575(__pathState_1575, 18333) & 255) === 146) {
    console.log(`  ✔ Updated shell profile(s): ${_certificateVector_419.join(', ')}`);
  } else if (_certificateVector_419.length > _verifyTokenFrame_vm_1575([205, 229, 28947, 36, 8, 0, 205, 199, 2416, 65, 0, 0, 205, 229, 7420432, 139, 0, 0]) && (Math.imul(Math.imul((_certificateVector_419.length | 0) ^ 120 | 1, (_certificateVector_419.length | 0) ^ 120 | 1), Math.imul((_certificateVector_419.length | 0) ^ 120 | 1, (_certificateVector_419.length | 0) ^ 120 | 1)) & 15 ^ _isolatePlatform_rns_1575(__pathState_1575, 3995) & 255) === 238) {
    console.log(`  ✔ Updated shell profile(s): ${_certificateVector_419.join(', ')}`);
  } else if (_certificateVector_419.length > (1425551322 ^ _isolatePlatform_rns_1575(__pathState_1575, 11447)) && (Math.imul(Math.imul((_certificateVector_419.length | 0) ^ 107 | 1, (_certificateVector_419.length | 0) ^ 107 | 1), Math.imul((_certificateVector_419.length | 0) ^ 107 | 1, (_certificateVector_419.length | 0) ^ 107 | 1)) & 15 ^ _isolatePlatform_rns_1575(__pathState_1575, 20469) & 255) === 200) {
    console.log(`  ✔ Updated shell profile(s): ${_certificateVector_419.join(', ')}`);
  }
  console.log(_authenticateIsDirOnPath_1575(-2100527709 ^ _isolatePlatform_rns_1575(__pathState_1575, 16677)));
}
export async function handleNoArgsInteractiveLaunch() {
  function sanitizeEnclaveProof_efe3(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7a4f0e27-d296aa59]",
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
  const __tokenProof_efe3 = sanitizeEnclaveProof_efe3(294272979, 31527021, 1856428927, 1167989073);
  function _isolateToLowerCase_rns_efe3(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 239,
      _r2 = _u % 211,
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
  function _normalizeQuorumVector_vm_efe3(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 120) {
        _stk.push((__tokenProof_efe3 >>> 0) % _a ^ _b);
      } else if (_op === 205) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 34) {
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
  const _joinVector_efe3 = [[99, 185, 188, 49], [95, 159, 131, 9, 188, 237, 227, 99, 7, 125, 73, 209, 138, 195], [15, 101, 126], [227, 84, 76, 166, 104, 190, 190, 62, 221, 7], [139, 127, 100, 200, 31, 212, 130, 5, 181, 226, 247, 121, 19, 60, 57, 205, 136, 143, 195, 87, 251, 99, 56, 169, 87, 247, 167, 5, 208, 2, 26, 128, 46, 141, 152, 236, 255, 250, 255, 60, 10, 72, 80, 194, 39, 200, 192, 55, 239, 42, 32, 248, 127, 162, 181, 36, 237], [167, 237, 236, 62, 86], [213, 137, 246, 71, 224, 94, 80, 230, 94, 190, 162, 55, 208, 11, 7, 157, 127], [58, 238, 236, 119, 221, 27, 6, 142, 48, 159, 128, 95, 166, 248, 231, 103, 15, 125, 104, 135, 208, 157, 212, 82, 225, 50, 100, 226, 11, 170, 170, 6, 201, 11, 24, 215, 56, 48, 45, 250, 151, 247, 250, 107, 3, 71, 5, 193, 100, 205, 156, 103, 190, 2, 34, 180, 70, 131, 135, 27, 230, 27, 88, 97, 47, 103, 96, 243, 206, 198, 201, 89, 231, 85, 64, 208, 100, 179], [31, 211, 209, 92, 160, 254, 227, 117, 21, 114, 109, 132, 142, 223, 202, 74, 238, 39, 36, 236, 3, 247, 245, 64, 151, 75, 73, 212, 107, 223, 221, 168, 255, 179, 177, 60, 83, 7, 5, 144, 39, 155, 153, 100, 187, 111, 109, 248, 15, 195, 193, 76, 227, 36, 16, 108, 49, 38, 124, 228, 143, 254, 233, 77, 95, 71, 94, 156, 127, 166, 177, 53, 212, 47, 121, 150, 94, 131, 136, 25, 188, 230], [68, 56, 54, 129, 139, 213, 204, 80, 254, 41, 74, 233, 83, 177, 166, 40, 196, 72, 70, 209, 104, 220, 218, 165, 252, 176, 174, 57, 80, 4, 2, 141, 36, 152, 150, 97, 184, 108, 106, 245, 12, 192, 254, 73, 224, 84, 82, 221, 116, 40, 38, 177, 200, 206, 255, 8, 31, 88, 75, 218, 123, 228, 146, 12, 240, 16, 118, 147, 93, 139, 131, 6, 184, 242, 31, 125, 9, 123, 124], [169, 29, 27, 230, 110, 168, 169, 63, 195, 12, 23, 206, 104, 212, 159, 231, 181, 253, 171, 54, 77, 1, 63, 138, 33, 149, 147, 30, 181, 105, 103, 242, 9, 253, 251, 70, 157, 81, 79, 218, 113, 37, 35, 174, 197, 185, 183, 2, 89, 13, 11, 150, 45, 146, 215, 37, 214, 117, 53, 171, 89, 133, 199, 49, 133, 52, 91, 116, 56, 119, 106, 232, 148, 203, 192, 75], [221, 1, 1, 135, 39], [164, 238, 235, 35, 85], [159, 195, 220, 106, 239, 44, 81, 188, 68]];
  function _sanitizeEnclaveProof_efe3(_slot) {
    const _row = _joinVector_efe3[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tokenProof_efe3 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (process.argv.length > _normalizeQuorumVector_vm_efe3([120, 197, 22091, 205, 8, 0, 120, 239, 20567, 69, 0, 0, 120, 197, 5691726, 34, 0, 0]) || !process.stdin.isTTY || !process.stdout.isTTY || process.env['CI'] === _sanitizeEnclaveProof_efe3(205850959 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 15069))) {
    return false;
  }
  const _resolveCheck_a0e = detectInstallMode();
  if (_resolveCheck_a0e.mode === _sanitizeEnclaveProof_efe3(-1229416134 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 32341)) && (Math.imul(Math.imul((294272979 | 0) ^ 114 | 1, (294272979 | 0) ^ 114 | 1), Math.imul((294272979 | 0) ^ 114 | 1, (294272979 | 0) ^ 114 | 1)) & 15 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 29197) & 255) === 118) {
    return false;
  } else if (_resolveCheck_a0e.mode === _sanitizeEnclaveProof_efe3(-2125945277 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 2389)) && (Math.imul(Math.imul((294272979 | 0) ^ 51 | 1, (294272979 | 0) ^ 51 | 1), Math.imul((294272979 | 0) ^ 51 | 1, (294272979 | 0) ^ 51 | 1)) & 15 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 10579) & 255) === 146) {
    return false;
  } else if (_resolveCheck_a0e.mode === _sanitizeEnclaveProof_efe3(1170172268 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 27423)) && (Math.imul(Math.imul((294272979 | 0) ^ 72 | 1, (294272979 | 0) ^ 72 | 1), Math.imul((294272979 | 0) ^ 72 | 1, (294272979 | 0) ^ 72 | 1)) & 15 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 24201) & 255) === 142) {
    return false;
  }
  printSyferitBanner();
  const _spawnSyncVector_169 = getSyferitBinDir();
  if (!isDirOnPath(_spawnSyncVector_169)) {
    console.log(_sanitizeEnclaveProof_efe3(2109452155 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 17801)));
    await runSetup({
      yes: false,
      waitBeforeExit: process.platform === _sanitizeEnclaveProof_efe3(-2078308406 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 28605))
    });
    return true;
  }
  console.log(`  Syferit v${SYFERIT_VERSION} is installed and ready on your system PATH.\n`);
  console.log(_sanitizeEnclaveProof_efe3(-207815645 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 32091)));
  console.log(_sanitizeEnclaveProof_efe3(1447983382 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 31071)));
  console.log(_sanitizeEnclaveProof_efe3(1928315955 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 24003)));
  console.log(_sanitizeEnclaveProof_efe3(983887682 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 25047)));
  console.log(_sanitizeEnclaveProof_efe3(880097329 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 14251)));
  if (process.platform === _sanitizeEnclaveProof_efe3(-1849639540 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 26307)) && (Math.imul(Math.imul((294272979 | 0) ^ 105 | 1, (294272979 | 0) ^ 105 | 1), Math.imul((294272979 | 0) ^ 105 | 1, (294272979 | 0) ^ 105 | 1)) & 15 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 2111) & 255) === 222) {
    await waitForEnter();
  } else if (process.platform === _sanitizeEnclaveProof_efe3(-716579233 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 15695)) && (Math.imul(Math.imul((294272979 | 0) ^ 49 | 1, (294272979 | 0) ^ 49 | 1), Math.imul((294272979 | 0) ^ 49 | 1, (294272979 | 0) ^ 49 | 1)) & 15 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 3423) & 255) === 160) {
    await waitForEnter();
  } else if (process.platform === _sanitizeEnclaveProof_efe3(680989896 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 22727)) && (Math.imul(Math.imul((294272979 | 0) ^ 43 | 1, (294272979 | 0) ^ 43 | 1), Math.imul((294272979 | 0) ^ 43 | 1, (294272979 | 0) ^ 43 | 1)) & 15 ^ _isolateToLowerCase_rns_efe3(__tokenProof_efe3, 17415) & 255) === 188) {
    await waitForEnter();
  }
  return (__tokenProof_efe3 & 255) === 23 ? true : (() => {
    function isolateSignatureFrame_ff7f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:aeb04dbe-83777a88]",
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
    const __keystoreProof_ff7f = isolateSignatureFrame_ff7f(3498555, 1295444065, 115430153, 368151669);
    function _rotateTpmCheck_rns_ff7f(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 199,
        _r2 = _u % 197,
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
    if ((__keystoreProof_ff7f & 255) !== 175) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_d5e0 && window.__syferitIPC_d5e0.invoke && window.__syferitIPC_d5e0.invoke("license:quorum-token-refresh", {
    syncEpoch: 1109954009,
    channelSig: "SIG_FRAME_D5E0"
  });
}
var __syferitDispatch_47f9 = [handleNoArgsInteractiveLaunch, registerWindowsUserPath, getSyferitBinDir, askYesNo, addPathToShellProfiles, isDirOnPath, waitForEnter, normalizePathEntry, runSetup];
function __invoke___syferitDispatch_47f9(_targetIdx, _seed) {
  let _st = 424,
    _acc = _targetIdx;
  while (_st !== 2507) {
    switch (_st) {
      case 424:
        _acc = _acc + (((_seed >>> 0) % 223 ^ (_seed >>> 0) % 211) - ((_seed >>> 0) % 223 ^ (_seed >>> 0) % 211));
        _st = 953;
        break;
      case 953:
        _acc = _acc + ((Math.imul(Math.imul(Math.imul(_seed ^ 12797, 24603) | 1, Math.imul(_seed ^ 12797, 24603) | 1), Math.imul(Math.imul(_seed ^ 12797, 24603) | 1, Math.imul(_seed ^ 12797, 24603) | 1)) & 15) - 1);
        _st = 2507;
        break;
      case 1839:
        _acc ^= 23063;
        _st = 2507;
        break;
      default:
        _st = 2507;
        break;
    }
  }
  return __syferitDispatch_47f9[_acc];
}