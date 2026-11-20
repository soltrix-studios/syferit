// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { printSyferitBanner } from './index.js';
import { detectInstallMode, SYFERIT_VERSION } from './updater.js';
export function getSyferitBinDir(homeDir = os.homedir()) {
  function auditPrintSyferitBanner_f03b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7ecbda3a-a59c5854]",
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
  const __platformState_f03b = auditPrintSyferitBanner_f03b(488434595, 557385729, 1490192899, 1217973719);
  function _verifyTpmProof_rns_f03b(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 233,
      _r2 = _u % 223,
      _r3 = _u % 251,
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
  const _spawnSyncFrame_f03b = [[80, 1, 150, 213, 119, 116, 234, 51], [193, 254, 122], [173, 210, 77, 152, 46, 32, 191, 248, 131, 129], [158, 130, 63, 78, 228]];
  function _auditEnvPath_f03b(_slot) {
    const _row = _spawnSyncFrame_f03b[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__platformState_f03b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__platformState_f03b & 255) === 126 ? path.join(homeDir, _auditEnvPath_f03b(1387581019 ^ _verifyTpmProof_rns_f03b(__platformState_f03b, 20703)), _auditEnvPath_f03b(176596818 ^ _verifyTpmProof_rns_f03b(__platformState_f03b, 1759))) : (() => {
    function rotateJoin_ccbc(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a597e32d-a4c0ca73]",
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
    const __replaceState_ccbc = rotateJoin_ccbc(1015911853, 2085924353, 144044667, 464433825);
    function _reconcileKeystoreQuorum_rns_ccbc(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
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
    if ((__replaceState_ccbc & 255) !== 95) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
function normalizePathEntry(p, platform = process.platform) {
  function authenticateTokenDigest_7196(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3069fedd-5e069405]",
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
  const __homeDirState_7196 = authenticateTokenDigest_7196(2007946371, 1399178267, 1369485237, 1160072763);
  function _authenticateTpmAttestation_rns_7196(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 211,
      _r2 = _u % 233,
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
  const _SYFERIT_VERSIONAttestation_7196 = [[137, 205, 151, 229, 160], [70, 167, 106, 158, 197, 45, 192, 230, 56, 148], [59, 141, 34, 76, 185]];
  function _isolateEntries_7196(_slot) {
    const _row = _SYFERIT_VERSIONAttestation_7196[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__homeDirState_7196 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _enclaveDigest_7f3 = p.trim().replace(/^"+|"+$/g, '').replace(/[\\/]+$/, '');
  return (__homeDirState_7196 & 255) === 254 ? platform === _isolateEntries_7196(1277099887 ^ _authenticateTpmAttestation_rns_7196(__homeDirState_7196, 23251)) ? _enclaveDigest_7f3.toLowerCase() : _enclaveDigest_7f3 : (() => {
    function attestTokenCheck_98ee(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:fd8de454-851c0beb]",
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
    const __candidatesState_98ee = attestTokenCheck_98ee(1762240837, 1620978281, 93335573, 920037197);
    function _auditKeystoreAttestation_rns_98ee(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 227,
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
    if ((__candidatesState_98ee & 255) !== 67) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isDirOnPath(dir, envPath = process.env['PATH'] || process.env['Path'] || '', platform = process.platform) {
  function sanitizeResolve_7f9c(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:6edf77de-2b9fa668]",
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
  const __spawnSyncState_7f9c = sanitizeResolve_7f9c(1651267079, 750189241, 126611411, 1011689009);
  function _authenticateTpmAttestation_rns_7f9c(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 197,
      _r2 = _u % 233,
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
  const _existingProof_7f9c = [[167, 168, 35, 71, 86], [144, 136, 6, 252, 251, 10, 116, 68, 110, 107], [105, 104, 246, 210, 203]];
  function _rotateReplace_7f9c(_slot) {
    const _row = _existingProof_7f9c[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__spawnSyncState_7f9c >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _detectInstallModeAttestation_0 = platform === _rotateReplace_7f9c(-912607691 ^ _authenticateTpmAttestation_rns_7f9c(__spawnSyncState_7f9c, 25967)) ? ';' : ':';
  const _homeDirBank_8e = normalizePathEntry(dir, platform);
  if (!_homeDirBank_8e) return false;
  const _nonceScalar_ea8 = envPath.split(_detectInstallModeAttestation_0).map(e => normalizePathEntry(e, platform));
  return (__spawnSyncState_7f9c & 255) === 208 ? _nonceScalar_ea8.includes(_homeDirBank_8e) : (() => {
    function isolateSignatureProof_9c04(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2d56a78d-cc3330d1]",
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
    const __pathValueState_9c04 = isolateSignatureProof_9c04(1168913367, 98961387, 40403393, 637929663);
    function _verifyTrim_rns_9c04(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 241,
        _r2 = _u % 227,
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
    if ((__pathValueState_9c04 & 255) !== 115) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function addPathToShellProfiles(binDir, homeDir = os.homedir()) {
  function rotateDefaultBin_8ded(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5a931509-3c2d20f6]",
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
  const __SyferitEngineQuorum_8ded = rotateDefaultBin_8ded(812102831, 5918601, 774566699, 1393187301);
  function _sanitizeCleaned_rns_8ded(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 229,
      _r2 = _u % 233,
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
  function _authenticateCertificateFrame_vm_8ded(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 209) {
        _stk.push((__SyferitEngineQuorum_8ded >>> 0) % _a ^ _b);
      } else if (_op === 47) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 98) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 148) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _resolveEnvelope_8ded = [[87, 147, 172, 68, 66, 64, 89, 238, 226, 101, 110, 67, 70, 227, 176, 167, 170, 69], [182, 122, 123, 70, 94, 247], [147, 71, 76, 32, 57, 203, 162], [204, 58, 32, 23, 16, 183, 138, 105], [114, 27, 17, 176, 163], [2, 231, 229, 164, 165, 90, 89, 34, 123, 222, 173, 132], [36, 205, 167, 202, 221]];
  function _isolateSignatureProof_8ded(_slot) {
    const _row = _resolveEnvelope_8ded[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SyferitEngineQuorum_8ded >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _defaultBinDigest_238 = getSyferitBinDir(homeDir);
  const _exportLineAttestation_3cb = path.resolve(binDir) === path.resolve(_defaultBinDigest_238) ? _isolateSignatureProof_8ded(-1256595613 ^ _sanitizeCleaned_rns_8ded(__SyferitEngineQuorum_8ded, 22313)) : binDir;
  const _homeDirBank_d8a = `export PATH="${_exportLineAttestation_3cb}:$PATH"`;
  const _nonceProof_bcf = [path.join(homeDir, _isolateSignatureProof_8ded(-2122197840 ^ _sanitizeCleaned_rns_8ded(__SyferitEngineQuorum_8ded, 10827))), path.join(homeDir, _isolateSignatureProof_8ded(1942295143 ^ _sanitizeCleaned_rns_8ded(__SyferitEngineQuorum_8ded, 20619))), path.join(homeDir, _isolateSignatureProof_8ded(1741598644 ^ _sanitizeCleaned_rns_8ded(__SyferitEngineQuorum_8ded, 23471)))];
  const _SyferitEngineDelta_245 = _nonceProof_bcf.filter(f => fs.existsSync(f));
  const _binDirAttestation_967 = _SyferitEngineDelta_245.length > _authenticateCertificateFrame_vm_8ded([209, 227, 5350, 47, 16, 0, 209, 229, 11049, 148, 0, 0, 209, 227, 344075202, 98, 0, 0]) ? _SyferitEngineDelta_245 : [_nonceProof_bcf[_authenticateCertificateFrame_vm_8ded([209, 227, 17952, 47, 7, 0, 209, 229, 25729, 148, 0, 0, 209, 227, 2328168, 98, 0, 0])]];
  const _normalizePathEntryVector_6b1 = [];
  for (const rcFile of _binDirAttestation_967) {
    try {
      const current = fs.existsSync(rcFile) ? fs.readFileSync(rcFile, _isolateSignatureProof_8ded(-900440907 ^ _sanitizeCleaned_rns_8ded(__SyferitEngineQuorum_8ded, 18761))) : '';
      if (!current.includes(_isolateSignatureProof_8ded(-49627340 ^ _sanitizeCleaned_rns_8ded(__SyferitEngineQuorum_8ded, 7381))) && !current.includes(binDir)) {
        const prefix = current.length === _authenticateCertificateFrame_vm_8ded([209, 227, 18034, 47, 16, 0, 209, 229, 4656, 148, 0, 0, 209, 227, 1175851739, 98, 0, 0]) || current.endsWith('\n') ? '' : '\n';
        fs.writeFileSync(rcFile, `${current}${prefix}\n# Syferit CLI\n${_homeDirBank_d8a}\n`, _isolateSignatureProof_8ded(2048121657 ^ _sanitizeCleaned_rns_8ded(__SyferitEngineQuorum_8ded, 24647)));
        _normalizePathEntryVector_6b1.push(rcFile);
      }
    } catch {}
  }
  return (__SyferitEngineQuorum_8ded & 255) === 115 ? _normalizePathEntryVector_6b1 : (() => {
    function validateTpmEnvelope_4490(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a4f7b821-cfeb78c5]",
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
    const __joinState_4490 = validateTpmEnvelope_4490(872712261, 1214907281, 157406377, 632994777);
    function _rotateSYFERIT_VERSION_rns_4490(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 251,
        _r2 = _u % 229,
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
    if ((__joinState_4490 & 255) !== 101) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function registerWindowsUserPath(binDir) {
  function verifyTrim_c544(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c4a4bc65-a5780b74]",
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
  const __defaultBinState_c544 = verifyTrim_c544(1135207363, 762127969, 818565811, 2118471929);
  function _rotateBinDir_rns_c544(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 223,
      _r2 = _u % 239,
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
  function _auditKeystoreAttestation_vm_c544(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 162) {
        _stk.push((__defaultBinState_c544 >>> 0) % _a ^ _b);
      } else if (_op === 155) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 63) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 91) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _pathFrame_c544 = [[152, 68, 6, 85, 14, 204, 109, 161, 124, 63], [32, 30, 249, 5, 211, 139, 76, 128, 89, 29], [31, 59, 212, 20, 143, 103, 59, 107, 40, 252, 128, 214, 135, 71, 18], [122, 217, 143, 242, 134, 79, 26, 87], [12, 214, 117, 161]];
  function _sanitizeCleaned_c544(_slot) {
    const _row = _pathFrame_c544[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__defaultBinState_c544 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _SYFERIT_VERSIONAttestation_dfd = [`$binDir = '${binDir.replace(/'/g, "''")}'`, `$userPath = [Environment]::GetEnvironmentVariable('Path', 'User')`, `if (-not $userPath) { $userPath = '' }`, `$entries = $userPath -split ';' | ForEach-Object { $_.Trim().TrimEnd('\\', '/') } | Where-Object { $_ -ne '' }`, `$normTarget = $binDir.Trim().TrimEnd('\\', '/')`, `if ($entries -notcontains $normTarget) {`, `  $newPath = if ($userPath.Trim() -eq '') { $binDir } elseif ($userPath.EndsWith(';')) { "$userPath$binDir" } else { "$userPath;$binDir" }`, `  [Environment]::SetEnvironmentVariable('Path', $newPath, 'User')`, `}`].join('; ');
  const _pathFrame_d19 = spawnSync(_sanitizeCleaned_c544(-1884518453 ^ _rotateBinDir_rns_c544(__defaultBinState_c544, 24533)), [_sanitizeCleaned_c544(175762902 ^ _rotateBinDir_rns_c544(__defaultBinState_c544, 8635)), _sanitizeCleaned_c544(-1593761283 ^ _rotateBinDir_rns_c544(__defaultBinState_c544, 9623)), _sanitizeCleaned_c544(-313520282 ^ _rotateBinDir_rns_c544(__defaultBinState_c544, 2099)), _SYFERIT_VERSIONAttestation_dfd], {
    stdio: _sanitizeCleaned_c544(1838580547 ^ _rotateBinDir_rns_c544(__defaultBinState_c544, 28381))
  });
  return (__defaultBinState_c544 & 255) === 232 ? _pathFrame_d19.status === _auditKeystoreAttestation_vm_c544([162, 211, 10943, 155, 12, 0, 162, 223, 17732, 91, 0, 0, 162, 211, 44524861, 63, 0, 0]) : (() => {
    function validateQuorumEnvelope_316e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:84743c76-956644df]",
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
    const __tokenCheck_316e = validateQuorumEnvelope_316e(708877075, 414557187, 587122609, 1714636783);
    function _rotateDefaultBin_rns_316e(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 197,
        _r2 = _u % 223,
        _r3 = _u % 251,
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
    if ((__tokenCheck_316e & 255) !== 242) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export async function askYesNo(promptText, defaultYes = true) {
  function sanitizeCandidates_924a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:84ac156d-8abea59a]",
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
  const __getSyferitBinDirState_924a = sanitizeCandidates_924a(1093119779, 527701623, 1762512823, 260708639);
  function _rotateJoin_rns_924a(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 211,
      _r2 = _u % 239,
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
  const _signatureBank_924a = [[132, 237, 96], [71, 195, 76, 209, 196, 49, 190, 33, 57, 176], [52, 177, 60, 181, 190]];
  function _rotateIncludes_924a(_slot) {
    const _row = _signatureBank_924a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__getSyferitBinDirState_924a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__getSyferitBinDirState_924a & 255) !== 253) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return defaultYes;
  }
  const _trimVector_425 = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    const answer = (await _trimVector_425.question(promptText)).trim().toLowerCase();
    if (!answer) return defaultYes;
    return answer === 'y' || answer === _rotateIncludes_924a(-340693833 ^ _rotateJoin_rns_924a(__getSyferitBinDirState_924a, 30383));
  } finally {
    _trimVector_425.close();
  }
}
export async function waitForEnter() {
  function rotateNormalizePathEntry_e96a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:81d88d32-05fcc23c]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __nonceAttestation_e96a = rotateNormalizePathEntry_e96a(1118568027, 1329523481, 576932347, 446650079);
  function _sanitizeCandidates_rns_e96a(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 241,
      _r2 = _u % 223,
      _r3 = _u % 229,
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
  const _processFrame_e96a = [[240, 149, 31, 134, 252, 44, 160, 25, 2, 152, 9, 138, 211, 3, 219, 230, 37, 37, 234, 94, 183, 237, 13, 148, 92], [122, 180, 16, 158, 193, 30, 138, 230, 52, 103], [55, 156, 232, 76, 189]];
  function _attestTokenFrame_e96a(_slot) {
    const _row = _processFrame_e96a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceAttestation_e96a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__nonceAttestation_e96a & 255) !== 250) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) return;
  const _tpmProof_ee9 = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    await _tpmProof_ee9.question(_attestTokenFrame_e96a(904570211 ^ _sanitizeCandidates_rns_e96a(__nonceAttestation_e96a, 17089)));
  } finally {
    _tpmProof_ee9.close();
  }
}
export async function runSetup(options = {}) {
  function synchronizeNonceContext_f058(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:926521a2-b8f80fdb]",
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
  const __entriesState_f058 = synchronizeNonceContext_f058(1617737931, 1888258121, 1290944539, 720724439);
  function _attestTokenCheck_rns_f058(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 199,
      _r2 = _u % 239,
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
  function _isolateTarget_vm_f058(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 153) {
        _stk.push((__entriesState_f058 >>> 0) % _a ^ _b);
      } else if (_op === 43) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 169) {
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
  const _tokenFrame_f058 = [[247, 61, 45, 145, 84, 151, 159, 225, 201, 30], [151, 88, 92, 57, 2, 106, 50, 196, 177, 211, 210, 32, 31, 88, 95, 177, 39, 190, 167, 8, 187, 60, 12, 141, 66, 208, 159, 255, 176, 240, 235, 73, 59, 56, 51, 222, 203, 236, 193, 52, 25, 37, 52, 136, 103, 251, 185, 25, 206, 8, 66, 41, 91, 143, 123, 251, 170, 226, 255, 69, 3, 4, 67, 182, 215, 217, 210, 43, 238, 45, 54, 148, 63, 146, 131, 230, 218, 7, 14, 112, 53, 109, 106, 137, 180, 242, 130, 109, 46, 100, 126, 255], [252, 189, 129, 30, 54, 94, 69, 242, 119, 177, 170, 8, 252, 56, 51, 149, 66, 136, 211, 224, 161, 245, 238, 84, 49, 53, 121, 223, 134, 200, 221, 35, 25, 78, 99, 169, 121, 165, 191, 29, 209, 17, 75, 72, 87, 157, 154, 181, 162, 253, 254, 14, 19, 68, 83, 183, 132, 143], [33, 226, 232, 67, 194, 63, 50, 147, 70, 157, 131, 171, 149, 46, 235, 104, 52, 96, 75, 219, 128, 202, 192, 110, 89, 0, 96, 178, 127, 163, 244, 7, 213, 22, 24, 112, 15, 217, 211, 228, 176, 236, 245, 89, 52, 106, 10, 204, 158, 222, 204, 33, 236, 62, 63, 147, 108, 190, 137, 20, 222, 64, 23, 96, 44, 45, 97, 205, 166, 226, 253, 91, 5, 4, 64, 184, 204, 158, 184, 127, 248, 55, 32], [6, 199, 205, 168, 215, 26, 226, 83, 29, 47, 51, 144, 174, 202, 199, 49, 14, 23, 29, 248, 42, 235, 241, 76, 190, 101, 69, 99, 71, 129, 149, 180, 235, 225, 254, 123, 22, 59, 73, 200, 154, 223, 198, 106, 173, 108, 58, 157, 112, 178, 175, 17, 222, 69, 2, 99, 82, 139, 119, 201, 170, 224, 237, 65, 2, 78, 66, 187, 212, 216, 174, 49, 161, 38, 59, 131, 86, 130, 133, 232, 152, 4, 21, 56, 54, 43, 98, 196], [107, 44, 50, 141, 155, 201, 212, 36, 16, 64, 26, 145, 104, 191, 160, 5, 244, 61, 6, 142, 15, 208, 214, 177, 227, 190, 170, 77, 35, 108, 110, 202, 209, 131, 157, 42, 22, 52, 46, 148, 113, 250, 185, 26, 202, 71, 29, 102, 87, 136, 112, 244, 183, 189, 229, 69, 22, 64, 67, 170, 132, 151, 205, 32, 237, 41, 32, 132, 107, 207, 148, 228, 223, 17, 27, 102, 34, 123, 33, 197, 186, 232, 199, 78, 27, 58], [30, 65, 90], [181, 118, 126, 215, 96, 140, 208, 226, 211, 13, 240, 126, 61, 126, 125, 215, 197, 208, 197, 38, 89, 90, 46, 171, 96, 238, 189, 1, 210, 22, 9, 111, 89, 214, 209, 240, 233, 202, 227, 82, 59, 123, 86, 214, 133, 157, 219, 63, 236, 38, 96, 199, 121, 169, 153, 29, 200, 28, 29, 123, 33, 34, 97, 208, 245, 247, 240, 69, 12, 75, 84, 178, 221, 204, 161, 56, 248, 33, 44, 150, 87, 131, 136, 167, 214, 20, 160, 75, 12, 90, 92, 129], [154, 91, 163, 60, 8, 96, 103, 144, 145, 215, 200, 42, 18, 86, 81, 183, 100, 174, 241, 2, 255, 43, 12, 118, 87, 211, 155, 253, 168, 230, 255, 65, 63, 104, 1, 203, 135, 219, 221, 63, 247, 55, 105, 170, 121, 179, 184, 87, 196, 27, 28, 44, 77, 154, 113, 213, 162, 169], [255, 128, 134, 97, 36, 93, 84, 177, 104, 191, 189, 73, 179, 12, 13, 138, 74, 130, 165, 249, 166, 232, 230, 12, 119, 34, 62, 208, 153, 193, 146, 37, 11, 52, 54, 146, 41, 251, 245, 6, 222, 14, 11, 123, 82, 136, 44, 238, 160, 252, 226, 67, 10, 92, 89, 177, 130, 220, 215, 54, 248, 98, 49, 130, 114, 207, 143, 239, 192, 0, 27, 121, 43, 38, 126, 218, 234, 188, 222, 29, 6, 85, 78], [36, 229, 235, 70, 245, 56, 60, 181, 127, 205, 213, 174, 140, 232, 233, 87, 44, 53, 59, 150, 200, 137, 143, 106, 92, 7, 99, 189, 101, 163, 187, 82, 137, 3, 24, 85, 116, 217, 151, 238, 184, 253, 224, 20, 79, 14, 84, 187, 146, 208, 201, 63, 252, 103, 60, 133, 112, 169, 145, 23, 200, 2, 3, 103, 32, 108, 100, 213, 246, 250, 240, 87, 67, 68, 93, 189, 116, 160, 171, 14, 186, 38, 51, 214, 84, 201, 156, 226], [9, 202, 208, 171, 249, 23, 246, 122, 50, 102, 56, 247, 138, 209, 194, 43, 22, 91, 36, 168, 45, 238, 244, 79, 129, 88, 72, 107, 65, 130, 140, 228, 243, 165, 191, 76, 52, 106, 76, 202, 147, 156, 219, 60, 232, 105, 63, 136, 117, 174, 146, 18, 213, 67, 7, 123, 52, 102, 97, 204, 166, 185, 239, 78, 15, 79, 66, 162, 137, 145, 182, 58, 253, 55, 57, 128, 64, 149, 195, 235, 216, 14, 229, 104, 57, 4], [61, 108, 116, 220, 135], [83, 20, 24, 245, 78, 174, 238, 0, 245, 47, 22, 156, 67, 156, 147, 245, 227, 242, 227, 68, 119, 120, 112, 201, 134, 140, 219, 35, 12, 52, 39, 141, 127, 244, 247, 18, 135, 40, 29, 112, 93, 153, 112, 244, 187, 191, 245, 93, 10, 68, 6, 229, 151, 203, 199, 63, 238, 62, 59, 153, 127, 192, 143, 242, 147, 21, 22, 103, 34, 105, 106, 208, 251, 238, 199, 90, 6, 67, 66, 180, 113, 161, 174, 69, 248, 54, 126, 169, 106, 184, 186, 163], [184, 121, 125, 218, 106, 130, 129, 174, 179, 245, 230, 76, 48, 116, 119, 217, 134, 204, 143, 36, 29, 73, 42, 168, 117, 241, 181, 27, 202, 4, 25, 111, 93, 138, 223, 237, 165, 249, 251, 65, 21, 85, 7, 140, 155, 209, 222, 121, 230, 57, 34, 202, 111, 184, 151, 11, 192, 75], [157, 94, 164, 63, 6, 123, 118, 215, 138, 209, 223, 103, 81, 106, 47, 172, 104, 188, 135, 7, 196, 14, 4, 42, 21, 204, 220, 254, 187, 231, 176, 67, 41, 106, 84, 204, 203, 157, 151, 32, 252, 32, 41, 149, 112, 174, 206, 8, 194, 2, 0, 125, 40, 122, 123, 215, 160, 242, 245, 88, 26, 4, 83, 164, 144, 145, 173, 49, 226, 38, 57, 159, 73, 200, 156, 244, 136, 90, 252, 59, 36, 107, 108], [194, 131, 137, 100, 27, 86, 94, 151, 89, 235, 247, 76, 210, 54, 11, 117, 74, 211, 217, 180, 230, 167, 173, 8, 122, 33, 1, 223, 155, 221, 217, 112, 175, 37, 58, 183, 90, 247, 181, 12, 222, 27, 2, 54, 17, 208, 118, 217, 180, 246, 235, 93, 18, 9, 94, 167, 150, 207, 179, 53, 246, 60, 33, 133, 70, 138, 134, 247, 152, 20, 18, 117, 101, 98, 127, 223, 170, 254, 201, 44, 92, 64, 81, 244, 122, 231, 190, 0], [39, 232, 238, 73, 223, 53, 16, 152, 76, 132, 214, 213, 172, 243, 228, 73, 56, 121, 122, 202, 203, 140, 146, 109, 95, 122, 102, 137, 103, 160, 170, 6, 157, 71, 65, 110, 82, 136, 106, 232, 173, 190, 245, 94, 14, 11, 89, 170, 155, 204, 204, 48, 243, 97, 33, 153, 106, 132, 143, 238, 192, 91, 9, 108, 33, 109, 124, 192, 175, 179, 208, 88, 3, 85, 87, 162, 102, 183, 229, 9, 246, 44, 59, 138, 95, 230], [79, 130, 158, 254, 172, 232, 230, 76, 55, 112, 68, 198, 154, 198], [34, 107, 126, 214, 151, 207, 216, 105, 28, 66, 37], [124, 23, 29, 139, 97, 162, 161, 28, 251, 59, 69, 80, 115, 167, 177, 180, 180, 226, 234, 65, 41, 111, 83, 221, 154, 198, 218, 62, 172], [187, 124, 59, 146, 90, 208, 149, 240, 173, 164, 249, 81, 62, 116, 114, 153, 153, 217, 220, 109, 44, 57, 32, 132, 97, 189, 174, 85, 195, 1, 28, 108, 88, 136, 110, 228, 239, 246, 228, 94, 14, 4, 75, 171, 142, 152, 216, 54, 231, 40, 55, 159, 63, 129, 149, 161, 210, 84, 10, 122, 53, 124, 111, 203, 183, 249, 130, 88, 23, 85, 85, 164, 119, 165, 168, 9, 242, 98], [224, 161, 63, 2, 27, 101, 126, 216, 200, 200, 143, 4, 57, 106, 99, 170, 117, 163, 186, 27, 202, 4, 7, 38, 79, 144, 145, 254, 163, 250, 179, 79, 14, 69, 7, 176, 129, 219, 155, 54, 251, 48, 41, 143, 110, 180, 151, 94, 157, 92, 1, 119, 54, 118, 98, 201, 182, 249, 191, 85, 30, 13, 83, 189, 121, 167, 162, 16, 253, 33, 123, 134, 90, 134, 155, 239, 223, 9, 163, 48, 127, 117, 126, 193, 144, 197, 133, 76], [146, 207, 194, 35, 22, 77, 51, 246, 104, 182, 177], [121, 178, 183, 9, 236, 54, 17, 46, 87, 139, 156], [37, 208, 214, 194, 168, 237, 250, 85, 50, 124, 62, 233, 170, 248, 250, 109, 13, 37, 33, 136, 96, 160, 168, 20, 211, 1, 1, 103, 21], [116, 53, 66, 217, 157, 137, 204, 43, 18, 29, 48, 170, 121, 189, 187, 82, 214, 16, 5, 38, 107, 128, 153, 255, 190, 228, 231, 14, 4, 72, 85, 167, 151, 193, 215, 47, 168, 47, 61, 133, 113, 253, 130, 16, 201, 81, 17, 125, 40, 97, 110, 212, 248, 248, 236, 26, 13, 13, 67, 161, 114, 181, 166, 0, 248, 48, 123, 147, 80, 140, 140, 255, 200, 28, 225, 114, 53, 43], [89, 26, 248, 251, 66, 190, 177, 1, 129, 3, 72, 77, 112, 161, 220, 227, 172, 248, 253, 66, 51, 127, 72, 159, 134, 219, 214, 55, 234, 49, 108, 134, 119, 190, 192, 9, 216, 0, 84, 111, 50, 123, 110, 198, 167, 255, 232, 23, 68, 7, 70, 174, 143, 205, 173, 48, 255, 50, 120, 156, 87, 198, 140, 244, 192, 28, 229, 105, 36, 122, 52, 223, 147, 205, 220, 38, 22, 66, 28, 249, 38, 174, 185, 24, 233, 62, 74, 245], [249, 48, 19, 95, 81, 159, 150, 225, 162], [176, 253, 236, 64, 37, 113, 106, 151, 142, 212, 215], [226, 137, 143, 25, 23, 84, 51, 174, 117, 181, 247, 34, 229, 49, 35, 38, 74, 156, 152, 243, 191, 249, 225, 79, 20, 72, 72, 172, 218], [45, 238, 141, 0, 212, 66, 11, 98, 91, 214, 143, 227, 160, 230, 252, 11, 47, 107, 74, 159, 162, 203, 222, 54, 247, 47, 56, 199, 125, 179, 146, 30, 206, 26, 24, 118, 97, 100, 122, 204, 184, 182, 253, 89, 16, 10, 86, 164, 145, 218, 161, 45, 177, 51, 43, 211, 68, 198, 156, 232, 203, 14, 225, 121, 33, 107, 52, 202, 153, 199, 203, 54, 1, 87, 94, 187, 108, 240], [18, 211, 65, 180, 137, 247, 232, 70, 122, 122, 1, 242, 171, 248, 149, 36, 231, 49, 36, 141, 120, 182, 177, 88, 221, 2, 31, 104, 81, 136, 37, 193, 188, 247, 185, 70, 19, 73, 13, 168, 137, 194, 167, 57, 252, 38, 33, 208, 15, 206, 159, 225, 196, 4, 20, 119, 36, 107, 49, 195, 172, 191, 197, 51, 11, 85, 92, 166, 111, 179, 237, 24, 232, 52, 21, 153, 77, 155, 213, 190, 237, 231, 224, 87, 34, 119, 51, 178], [36, 97, 120, 220, 153, 197, 198], [118, 29, 99, 141, 123, 184, 167, 2, 193, 1, 75, 86, 121, 173, 183, 186, 190, 232, 244, 71, 19, 85, 85, 163, 128, 220, 212, 56, 166], [129, 66, 49, 108, 64, 214, 159, 246, 167, 170, 227, 95, 52, 114, 72, 159, 131, 199, 214, 115, 214, 63, 42, 130, 107, 179, 148, 91, 201, 7, 6, 106, 34, 118, 100, 218, 245, 247, 239, 23, 8, 10, 64, 164, 143, 202, 165, 61, 253, 55, 120, 150, 93, 131, 143, 242, 205, 27, 226, 119, 40, 52], [230, 167, 53, 8, 8, 126, 77, 211, 143, 203, 149, 41, 237, 54, 59, 196, 101, 191, 184, 20, 198, 75, 30, 126, 30, 141, 112, 206, 232, 179, 252, 76, 22, 72, 95, 188, 218, 235, 128, 8, 198, 114, 119, 212, 106, 172, 164, 193, 153, 89, 14, 97, 44, 110, 99, 197, 170, 176, 199, 41, 28, 9, 29, 132, 71, 147, 133, 74, 144]];
  function _sanitizeCleaned_f058(_slot) {
    const _row = _tokenFrame_f058[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entriesState_f058 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__entriesState_f058 & 255) !== 146) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _defaultBinDigest_fc1 = detectInstallMode();
  if (_defaultBinDigest_fc1.mode === _sanitizeCleaned_f058(-2043401535 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 26563)) && (Math.imul(Math.imul((1617737931 | 0) ^ 110 | 1, (1617737931 | 0) ^ 110 | 1), Math.imul((1617737931 | 0) ^ 110 | 1, (1617737931 | 0) ^ 110 | 1)) & 15 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 19741) & 255) === 128) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_sanitizeCleaned_f058(893452956 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 17851)));
    console.log(_sanitizeCleaned_f058(-83579343 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 8663)));
    console.log(_sanitizeCleaned_f058(828772700 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 13763)));
    console.log(_sanitizeCleaned_f058(-950201121 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 7141)));
    console.log(_sanitizeCleaned_f058(-452124862 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 7701)));
    return;
  } else if (_defaultBinDigest_fc1.mode === _sanitizeCleaned_f058(-368218153 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 9763)) && (Math.imul(Math.imul((1617737931 | 0) ^ 61 | 1, (1617737931 | 0) ^ 61 | 1), Math.imul((1617737931 | 0) ^ 61 | 1, (1617737931 | 0) ^ 61 | 1)) & 15 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 6493) & 255) === 148) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_sanitizeCleaned_f058(-1395599842 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 8737)));
    console.log(_sanitizeCleaned_f058(1381855881 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 24805)));
    console.log(_sanitizeCleaned_f058(-1121866468 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 27525)));
    console.log(_sanitizeCleaned_f058(-1647433223 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 3875)));
    console.log(_sanitizeCleaned_f058(482800516 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 29445)));
    return;
  } else if (_defaultBinDigest_fc1.mode === _sanitizeCleaned_f058(1783139271 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 23313)) && (Math.imul(Math.imul((1617737931 | 0) ^ 88 | 1, (1617737931 | 0) ^ 88 | 1), Math.imul((1617737931 | 0) ^ 88 | 1, (1617737931 | 0) ^ 88 | 1)) & 15 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 18315) & 255) === 72) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_sanitizeCleaned_f058(1649378198 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 27183)));
    console.log(_sanitizeCleaned_f058(804733689 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 29739)));
    console.log(_sanitizeCleaned_f058(-1518200846 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 5457)));
    console.log(_sanitizeCleaned_f058(-1668160933 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 4877)));
    console.log(_sanitizeCleaned_f058(-652499160 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 29201)));
    return;
  }
  const _nonceAttestation_ebd = getSyferitBinDir();
  const _ProprietaryEnclaveDelta_836 = _defaultBinDigest_fc1.binaryPath;
  if (_defaultBinDigest_fc1.mode === _sanitizeCleaned_f058(1254851795 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 6873)) && (Math.imul(Math.imul((1617737931 | 0) ^ 49 | 1, (1617737931 | 0) ^ 49 | 1), Math.imul((1617737931 | 0) ^ 49 | 1, (1617737931 | 0) ^ 49 | 1)) & 15 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 15779) & 255) === 126) {
    const targetExe = path.join(_nonceAttestation_ebd, _sanitizeCleaned_f058(-999025078 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 15621)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_nonceAttestation_ebd})? [Y/n] `, true);
      if (!ok) {
        console.log(_sanitizeCleaned_f058(1742764933 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 17857)));
        console.log(_sanitizeCleaned_f058(-339416732 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 19289)));
        console.log(`    "${_ProprietaryEnclaveDelta_836}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_nonceAttestation_ebd, {
      recursive: true
    });
    if (path.resolve(_ProprietaryEnclaveDelta_836).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_ProprietaryEnclaveDelta_836, targetExe);
    }
    const updated = registerWindowsUserPath(_nonceAttestation_ebd);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_nonceAttestation_ebd} in your Windows User PATH.`);
      console.log(_sanitizeCleaned_f058(490975713 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 7303)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_nonceAttestation_ebd}\n`);
      process.exitCode = (1527 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 1043) & 65535) / (36828 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 1043) >>> 16 & 65535);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  } else if (_defaultBinDigest_fc1.mode === _sanitizeCleaned_f058(-1008966216 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 8433)) && (Math.imul(Math.imul((1617737931 | 0) ^ 102 | 1, (1617737931 | 0) ^ 102 | 1), Math.imul((1617737931 | 0) ^ 102 | 1, (1617737931 | 0) ^ 102 | 1)) & 15 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 6295) & 255) === 76) {
    const targetExe = path.join(_nonceAttestation_ebd, _sanitizeCleaned_f058(-464839459 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 7357)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_nonceAttestation_ebd})? [Y/n] `, true);
      if (!ok) {
        console.log(_sanitizeCleaned_f058(1832892858 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 19181)));
        console.log(_sanitizeCleaned_f058(572794751 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 6163)));
        console.log(`    "${_ProprietaryEnclaveDelta_836}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_nonceAttestation_ebd, {
      recursive: true
    });
    if (path.resolve(_ProprietaryEnclaveDelta_836).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_ProprietaryEnclaveDelta_836, targetExe);
    }
    const updated = registerWindowsUserPath(_nonceAttestation_ebd);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_nonceAttestation_ebd} in your Windows User PATH.`);
      console.log(_sanitizeCleaned_f058(-2045927430 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 18525)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_nonceAttestation_ebd}\n`);
      process.exitCode = _isolateTarget_vm_f058([153, 223, 20465, 43, 7, 0, 153, 199, 15463, 70, 0, 0, 153, 223, 2609848, 169, 0, 0]);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  } else if (_defaultBinDigest_fc1.mode === _sanitizeCleaned_f058(1515846671 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 18127)) && (Math.imul(Math.imul((1617737931 | 0) ^ 83 | 1, (1617737931 | 0) ^ 83 | 1), Math.imul((1617737931 | 0) ^ 83 | 1, (1617737931 | 0) ^ 83 | 1)) & 15 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 23141) & 255) === 100) {
    const targetExe = path.join(_nonceAttestation_ebd, _sanitizeCleaned_f058(-1036436176 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 6771)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_nonceAttestation_ebd})? [Y/n] `, true);
      if (!ok) {
        console.log(_sanitizeCleaned_f058(1156216815 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 15919)));
        console.log(_sanitizeCleaned_f058(152537126 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 22801)));
        console.log(`    "${_ProprietaryEnclaveDelta_836}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_nonceAttestation_ebd, {
      recursive: true
    });
    if (path.resolve(_ProprietaryEnclaveDelta_836).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_ProprietaryEnclaveDelta_836, targetExe);
    }
    const updated = registerWindowsUserPath(_nonceAttestation_ebd);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_nonceAttestation_ebd} in your Windows User PATH.`);
      console.log(_sanitizeCleaned_f058(577731429 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 19573)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_nonceAttestation_ebd}\n`);
      process.exitCode = (8991 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 24921) & 65535) / (18678 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 24921) >>> 16 & 65535);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  }
  const _toLowerCaseFrame_656 = path.join(_nonceAttestation_ebd, _sanitizeCleaned_f058(615523758 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 24067)));
  if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
    const ok = await askYesNo(`  Install 'syferit' to ${_nonceAttestation_ebd} and add it to your shell PATH? [Y/n] `, true);
    if (!ok) {
      console.log(_sanitizeCleaned_f058(-1109411833 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 12251)));
      console.log(_sanitizeCleaned_f058(-782555694 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 2373)));
      console.log(`    "${_ProprietaryEnclaveDelta_836}" protect ./dist --preset v2-quantum-rns\n`);
      return;
    }
  }
  fs.mkdirSync(_nonceAttestation_ebd, {
    recursive: true
  });
  if (path.resolve(_ProprietaryEnclaveDelta_836) !== path.resolve(_toLowerCaseFrame_656)) {
    fs.copyFileSync(_ProprietaryEnclaveDelta_836, _toLowerCaseFrame_656);
  }
  fs.chmodSync(_toLowerCaseFrame_656, _isolateTarget_vm_f058([153, 223, 7966, 43, 7, 0, 153, 199, 22236, 70, 0, 0, 153, 223, 1063279, 169, 0, 0]));
  const _quorumProof_6e1 = addPathToShellProfiles(_nonceAttestation_ebd);
  console.log(`\n  ✔ Installed syferit → ${_toLowerCaseFrame_656}`);
  if (_quorumProof_6e1.length > _isolateTarget_vm_f058([153, 223, 11545, 43, 8, 0, 153, 199, 12113, 70, 0, 0, 153, 223, 3011471, 169, 0, 0]) && (Math.imul(Math.imul((_quorumProof_6e1.length | 0) ^ 79 | 1, (_quorumProof_6e1.length | 0) ^ 79 | 1), Math.imul((_quorumProof_6e1.length | 0) ^ 79 | 1, (_quorumProof_6e1.length | 0) ^ 79 | 1)) & 15 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 2151) & 255) === 8) {
    console.log(`  ✔ Updated shell profile(s): ${_quorumProof_6e1.join(', ')}`);
  } else if (_quorumProof_6e1.length > _isolateTarget_vm_f058([153, 223, 13188, 43, 16, 0, 153, 199, 10635, 70, 0, 0, 153, 223, 861481301, 169, 0, 0]) && (Math.imul(Math.imul((_quorumProof_6e1.length | 0) ^ 108 | 1, (_quorumProof_6e1.length | 0) ^ 108 | 1), Math.imul((_quorumProof_6e1.length | 0) ^ 108 | 1, (_quorumProof_6e1.length | 0) ^ 108 | 1)) & 15 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 6019) & 255) === 178) {
    console.log(`  ✔ Updated shell profile(s): ${_quorumProof_6e1.join(', ')}`);
  } else if (_quorumProof_6e1.length > (1092956668 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 1535)) && (Math.imul(Math.imul((_quorumProof_6e1.length | 0) ^ 27 | 1, (_quorumProof_6e1.length | 0) ^ 27 | 1), Math.imul((_quorumProof_6e1.length | 0) ^ 27 | 1, (_quorumProof_6e1.length | 0) ^ 27 | 1)) & 15 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 16529) & 255) === 144) {
    console.log(`  ✔ Updated shell profile(s): ${_quorumProof_6e1.join(', ')}`);
  }
  console.log(_sanitizeCleaned_f058(-705133551 ^ _attestTokenCheck_rns_f058(__entriesState_f058, 21013)));
}
export async function handleNoArgsInteractiveLaunch() {
  function validateHomeDir_3b15(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:96e2fdfb-ace8ab7e]",
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
  const __resolveState_3b15 = validateHomeDir_3b15(1830641603, 1758676809, 1986674877, 1615375973);
  function _verifyTpmProof_rns_3b15(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 227,
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
  function _reconcileKeystoreQuorum_vm_3b15(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 164) {
        _stk.push((__resolveState_3b15 >>> 0) % _a ^ _b);
      } else if (_op === 58) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 82) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 150) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _enclaveDigest_3b15 = [[199, 44, 244, 80], [187, 236, 203, 42, 0, 126, 91, 128, 99, 206, 145, 242, 230, 80], [147, 216, 166], [69, 162, 134, 251, 213, 13, 235, 77, 46], [103, 210, 44, 233, 251, 161, 218, 36, 9, 127, 79, 152, 119, 137, 241, 236, 228, 98, 11, 118, 95, 246, 128, 200, 203, 74, 255, 36, 52, 151, 82, 161, 130, 224, 208, 13, 91, 79, 39, 221, 118, 213, 168, 227, 131, 61, 8, 86, 67, 135, 104, 153, 155, 55, 205, 5, 113], [27, 126, 84, 221, 50], [177, 28, 14, 102, 76, 179, 152, 135, 250, 11, 234, 86, 44, 150, 127, 188, 219], [150, 65, 164, 24, 57, 140, 126, 169, 172, 224, 216, 64, 2, 111, 47, 128, 99, 210, 160, 168, 180, 106, 12, 117, 93, 173, 220, 157, 239, 29, 226, 33, 37, 100, 80, 248, 156, 167, 149, 29, 11, 72, 34, 116, 103, 208, 205, 230, 200, 34, 84, 8, 26, 181, 122, 211, 186, 28, 255, 36, 66, 108, 16, 134, 131, 200, 168, 28, 170, 81, 49, 126, 123, 170, 152, 207, 192, 36], [251, 166, 137, 125, 28, 99, 91, 148, 113, 199, 165, 165, 226, 50, 2, 107, 74, 178, 156, 141, 159, 74, 173, 97, 115, 222, 1, 245, 199, 178, 149, 73, 91, 6, 105, 221, 47, 154, 253, 177, 131, 110, 81, 5, 23, 194, 37, 153, 235, 86, 185, 109, 127, 89, 72, 141, 149, 179, 180, 5, 227, 83, 33, 108, 59, 178, 134, 189, 195, 59, 9, 84, 48, 154, 49, 183, 178, 238, 192, 56, 24, 115], [32, 139, 238, 162, 231, 70, 4, 115, 90, 186, 130, 138, 207, 2, 254, 75, 32, 219, 62, 242, 196, 175, 146, 70, 88, 3, 102, 218, 44, 151, 250, 174, 128, 107, 78, 2, 20, 255, 34, 150, 232, 83, 182, 106, 124, 39, 10, 254, 208, 187, 158, 82, 164, 125, 55, 43, 123, 171, 131, 249, 199, 119, 42, 111, 20, 163, 46, 176, 177, 24, 203, 37, 28, 97, 87, 158, 149, 200, 164], [5, 240, 211, 135, 202, 29, 225, 94, 63, 145, 111, 239, 204, 161, 199, 6, 25, 80, 99, 215, 41, 148, 247, 171, 189, 104, 75, 63, 17, 252, 223, 147, 229, 80, 179, 103, 121, 36, 7, 251, 205, 184, 155, 79, 161, 12, 111, 35, 53, 224, 195, 183, 137, 7, 31, 68, 74, 200, 109, 202, 189, 16, 191, 16, 41, 89, 19, 149, 156, 194, 162, 9, 232, 86, 56, 106], [57, 150, 121, 160, 187], [24, 115, 83, 194, 49], [241, 81, 22, 115, 90, 163, 132, 195, 207, 2]];
  function _attestPlatform_3b15(_slot) {
    const _row = _enclaveDigest_3b15[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__resolveState_3b15 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (process.argv.length > _reconcileKeystoreQuorum_vm_3b15([164, 197, 16874, 58, 16, 0, 164, 227, 26445, 150, 0, 0, 164, 197, 1101162249, 82, 0, 0]) || !process.stdin.isTTY || !process.stdout.isTTY || process.env['CI'] === _attestPlatform_3b15(-355057977 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 19285))) {
    return false;
  }
  const _pathFrame_efd = detectInstallMode();
  if (_pathFrame_efd.mode === _attestPlatform_3b15(489140578 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 12795)) && (Math.imul(Math.imul((1830641603 | 0) ^ 51 | 1, (1830641603 | 0) ^ 51 | 1), Math.imul((1830641603 | 0) ^ 51 | 1, (1830641603 | 0) ^ 51 | 1)) & 15 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 3353) & 255) === 170) {
    return false;
  } else if (_pathFrame_efd.mode === _attestPlatform_3b15(-1164407593 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 10923)) && (Math.imul(Math.imul((1830641603 | 0) ^ 60 | 1, (1830641603 | 0) ^ 60 | 1), Math.imul((1830641603 | 0) ^ 60 | 1, (1830641603 | 0) ^ 60 | 1)) & 15 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 15225) & 255) === 168) {
    return false;
  } else if (_pathFrame_efd.mode === _attestPlatform_3b15(-384322698 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 19757)) && (Math.imul(Math.imul((1830641603 | 0) ^ 62 | 1, (1830641603 | 0) ^ 62 | 1), Math.imul((1830641603 | 0) ^ 62 | 1, (1830641603 | 0) ^ 62 | 1)) & 15 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 13675) & 255) === 118) {
    return false;
  }
  printSyferitBanner();
  const _createInterfaceCheck_6c3 = getSyferitBinDir();
  if (!isDirOnPath(_createInterfaceCheck_6c3)) {
    console.log(_attestPlatform_3b15(2056160845 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 28239)));
    await runSetup({
      yes: false,
      waitBeforeExit: process.platform === _attestPlatform_3b15(1599552524 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 31935))
    });
    return true;
  }
  console.log(`  Syferit v${SYFERIT_VERSION} is installed and ready on your system PATH.\n`);
  console.log(_attestPlatform_3b15(-841703779 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 16007)));
  console.log(_attestPlatform_3b15(-181855200 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 27615)));
  console.log(_attestPlatform_3b15(-1951290605 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 11065)));
  console.log(_attestPlatform_3b15(-2012466164 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 16073)));
  console.log(_attestPlatform_3b15(-1761890673 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 31363)));
  if (process.platform === _attestPlatform_3b15(580963266 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 19183)) && (Math.imul(Math.imul((1830641603 | 0) ^ 46 | 1, (1830641603 | 0) ^ 46 | 1), Math.imul((1830641603 | 0) ^ 46 | 1, (1830641603 | 0) ^ 46 | 1)) & 15 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 26577) & 255) === 180) {
    await waitForEnter();
  } else if (process.platform === _attestPlatform_3b15(331637283 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 28081)) && (Math.imul(Math.imul((1830641603 | 0) ^ 65 | 1, (1830641603 | 0) ^ 65 | 1), Math.imul((1830641603 | 0) ^ 65 | 1, (1830641603 | 0) ^ 65 | 1)) & 15 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 31559) & 255) === 202) {
    await waitForEnter();
  } else if (process.platform === _attestPlatform_3b15(1040574646 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 24633)) && (Math.imul(Math.imul((1830641603 | 0) ^ 104 | 1, (1830641603 | 0) ^ 104 | 1), Math.imul((1830641603 | 0) ^ 104 | 1, (1830641603 | 0) ^ 104 | 1)) & 15 ^ _verifyTpmProof_rns_3b15(__resolveState_3b15, 4575) & 255) === 142) {
    await waitForEnter();
  }
  return (__resolveState_3b15 & 255) === 179 ? true : (() => {
    function verifyTpmProof_52e7(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3d5b157e-044d735e]",
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
    const __processState_52e7 = verifyTpmProof_52e7(1081935327, 432183531, 765023051, 1243866381);
    function _verifyTpmProof_rns_52e7(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 227,
        _r1 = _u % 197,
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
    if ((__processState_52e7 & 255) !== 114) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_7318 && window.__syferitIPC_7318.invoke && window.__syferitIPC_7318.invoke("auth:session-lease-sync", {
    syncEpoch: 281358470,
    channelSig: "SIG_FRAME_7318"
  });
}
var __syferitDispatch_663 = [normalizePathEntry, runSetup, askYesNo, waitForEnter, getSyferitBinDir, isDirOnPath, handleNoArgsInteractiveLaunch, registerWindowsUserPath, addPathToShellProfiles];
function __invoke___syferitDispatch_663(_targetIdx, _seed) {
  let _st = 588,
    _acc = _targetIdx;
  while (_st !== 2517) {
    switch (_st) {
      case 588:
        _acc = _acc + (((_seed >>> 0) % 229 ^ (_seed >>> 0) % 197) - ((_seed >>> 0) % 229 ^ (_seed >>> 0) % 197));
        _st = 1455;
        break;
      case 1455:
        _acc = _acc + (Math.imul(Math.imul(Math.imul(_seed ^ 32243, 55463), Math.imul(_seed ^ 32243, 55463) + 1), 55463) & 1);
        _st = 2517;
        break;
      case 1807:
        _acc ^= 23063;
        _st = 2517;
        break;
      default:
        _st = 2517;
        break;
    }
  }
  return __syferitDispatch_663[_acc];
}