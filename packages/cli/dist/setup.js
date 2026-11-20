// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { printSyferitBanner } from './index.js';
import { detectInstallMode, SYFERIT_VERSION } from './updater.js';
export function getSyferitBinDir(homeDir = os.homedir()) {
  function auditTpmState_9360(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ca2bd2c6-3d5901b7]",
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
  const __joinState_9360 = auditTpmState_9360(534309813, 2017952899, 1270692171, 1771439319);
  function _sanitizeResolve_rns_9360(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 211,
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
  const _enclaveReg_9360 = [[244, 150, 22, 152, 11, 11, 106, 230], [157, 99, 250], [65, 65, 205, 45, 202, 179, 63, 181, 63, 50], [58, 55, 191, 1, 184]];
  function _verifySoltrixStudiosContext_9360(_slot) {
    const _row = _enclaveReg_9360[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__joinState_9360 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__joinState_9360 & 255) === 218 ? path.join(homeDir, _verifySoltrixStudiosContext_9360(-383994495 ^ _sanitizeResolve_rns_9360(__joinState_9360, 16177)), _verifySoltrixStudiosContext_9360(-115297270 ^ _sanitizeResolve_rns_9360(__joinState_9360, 12073))) : (() => {
    function attestEnclaveDigest_1c23(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b47a44ac-ef97911f]",
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
    const __resolveState_1c23 = attestEnclaveDigest_1c23(420707887, 484970633, 1753669787, 625116131);
    function _rotateKeystoreBank_rns_1c23(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 197,
        _r2 = _u % 227,
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
    if ((__resolveState_1c23 & 255) !== 108) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
function normalizePathEntry(p, platform = process.platform) {
  function auditNormalizePathEntry_491a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8ff91f5a-90487569]",
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
  const __keystoreEnvelope_491a = auditNormalizePathEntry_491a(886730905, 1893540561, 957210131, 1083128711);
  function _authenticateCleaned_rns_491a(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 233,
      _r2 = _u % 199,
      _r3 = _u % 239,
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
  const _SyferitEngineDelta_491a = [[4, 156, 106, 61, 53], [253, 116, 93, 86, 94, 222, 207, 174, 179, 39], [206, 92, 47, 52, 52]];
  function _authenticateCleaned_491a(_slot) {
    const _row = _SyferitEngineDelta_491a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreEnvelope_491a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _tpmAttestation_46a = p.trim().replace(/^"+|"+$/g, '').replace(/[\\/]+$/, '');
  return (__keystoreEnvelope_491a & 255) === 115 ? platform === _authenticateCleaned_491a(1615496559 ^ _authenticateCleaned_rns_491a(__keystoreEnvelope_491a, 21949)) ? _tpmAttestation_46a.toLowerCase() : _tpmAttestation_46a : (() => {
    function authenticateExportLine_702e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0575520b-e06ec232]",
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
    const __enclaveDigest_702e = authenticateExportLine_702e(256569815, 1299496651, 1125645485, 1637261707);
    function _verifySoltrixStudiosContext_rns_702e(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
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
    if ((__enclaveDigest_702e & 255) !== 126) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isDirOnPath(dir, envPath = process.env['PATH'] || process.env['Path'] || '', platform = process.platform) {
  function isolateToLowerCase_4a04(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:53f2877d-5a4375ca]",
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
  const __signatureBank_4a04 = isolateToLowerCase_4a04(382891901, 3964961, 1199241201, 1597201173);
  function _synchronizeNonceContext_rns_4a04(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 229,
      _r2 = _u % 197,
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
  const _tpmFrame_4a04 = [[85, 198, 80, 189, 132], [34, 186, 23, 214, 169, 24, 133, 46, 28, 153], [31, 154, 233, 180, 101]];
  function _attestTarget_4a04(_slot) {
    const _row = _tpmFrame_4a04[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__signatureBank_4a04 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _SYFERIT_VERSIONEnvelope_1be = platform === _attestTarget_4a04(-1248309701 ^ _synchronizeNonceContext_rns_4a04(__signatureBank_4a04, 29745)) ? ';' : ':';
  const _splitBank_a36 = normalizePathEntry(dir, platform);
  if (!_splitBank_a36) return false;
  const _tpmVector_f4d = envPath.split(_SYFERIT_VERSIONEnvelope_1be).map(e => normalizePathEntry(e, platform));
  return (__signatureBank_4a04 & 255) === 34 ? _tpmVector_f4d.includes(_splitBank_a36) : (() => {
    function authenticateExisting_e4e2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:65c955d7-a800b9a5]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __enclaveDigest_e4e2 = authenticateExisting_e4e2(924393323, 1301716675, 1763026901, 2041693751);
    function _verifyEnclaveAttestation_rns_e4e2(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 239,
        _r2 = _u % 233,
        _r3 = _u % 251,
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
    if ((__enclaveDigest_e4e2 & 255) !== 221) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function addPathToShellProfiles(binDir, homeDir = os.homedir()) {
  function sanitizeSignatureAttestation_2200(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:dff67c18-d53151cc]",
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
  const __toLowerCaseState_2200 = sanitizeSignatureAttestation_2200(1272518405, 1709454197, 508221525, 1579973393);
  function _rotateCreateInterface_rns_2200(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 251,
      _r2 = _u % 241,
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
  function _verifySoltrixStudiosContext_vm_2200(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 69) {
        _stk.push((__toLowerCaseState_2200 >>> 0) % _a ^ _b);
      } else if (_op === 53) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 141) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 205) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _exportLineProof_2200 = [[77, 228, 0, 214, 184, 111, 205, 92, 232, 178, 18, 177, 76, 28, 36, 53, 208, 146], [160, 171, 7, 168, 80, 6], [157, 148, 248, 150, 47, 248, 78], [246, 107, 204, 101, 10, 198, 62, 251], [136, 52, 133, 2, 169], [12, 22, 113, 50, 211, 139, 245, 156, 101, 239, 89, 18], [50, 254, 75, 84, 227]];
  function _verifySignatureBank_2200(_slot) {
    const _row = _exportLineProof_2200[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__toLowerCaseState_2200 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _isDirOnPathEnvelope_dbb = getSyferitBinDir(homeDir);
  const _keystoreProration_f24 = path.resolve(binDir) === path.resolve(_isDirOnPathEnvelope_dbb) ? _verifySignatureBank_2200(876975151 ^ _rotateCreateInterface_rns_2200(__toLowerCaseState_2200, 17547)) : binDir;
  const _exportLineProof_559 = `export PATH="${_keystoreProration_f24}:$PATH"`;
  const _createInterfaceFrame_6c2 = [path.join(homeDir, _verifySignatureBank_2200(706474086 ^ _rotateCreateInterface_rns_2200(__toLowerCaseState_2200, 29667))), path.join(homeDir, _verifySignatureBank_2200(-434221527 ^ _rotateCreateInterface_rns_2200(__toLowerCaseState_2200, 7057))), path.join(homeDir, _verifySignatureBank_2200(1974700444 ^ _rotateCreateInterface_rns_2200(__toLowerCaseState_2200, 10025)))];
  const _keystoreCheck_b01 = _createInterfaceFrame_6c2.filter(f => fs.existsSync(f));
  const _splitBank_4bd = _keystoreCheck_b01.length > _verifySoltrixStudiosContext_vm_2200([69, 199, 12148, 53, 12, 0, 69, 251, 26791, 205, 0, 0, 69, 199, 49772576, 141, 0, 0]) ? _keystoreCheck_b01 : [_createInterfaceFrame_6c2[_verifySoltrixStudiosContext_vm_2200([69, 199, 31839, 53, 16, 0, 69, 251, 24110, 205, 0, 0, 69, 199, 2086297259, 141, 0, 0])]];
  const _tokenVector_a6c = [];
  for (const rcFile of _splitBank_4bd) {
    try {
      const current = fs.existsSync(rcFile) ? fs.readFileSync(rcFile, _verifySignatureBank_2200(-811664309 ^ _rotateCreateInterface_rns_2200(__toLowerCaseState_2200, 25823))) : '';
      if (!current.includes(_verifySignatureBank_2200(1106145212 ^ _rotateCreateInterface_rns_2200(__toLowerCaseState_2200, 10751))) && !current.includes(binDir)) {
        const prefix = current.length === _verifySoltrixStudiosContext_vm_2200([69, 199, 22025, 53, 12, 0, 69, 251, 3746, 205, 0, 0, 69, 199, 90230309, 141, 0, 0]) || current.endsWith('\n') ? '' : '\n';
        fs.writeFileSync(rcFile, `${current}${prefix}\n# Syferit CLI\n${_exportLineProof_559}\n`, _verifySignatureBank_2200(-721132189 ^ _rotateCreateInterface_rns_2200(__toLowerCaseState_2200, 27205)));
        _tokenVector_a6c.push(rcFile);
      }
    } catch {}
  }
  return (__toLowerCaseState_2200 & 255) === 105 ? _tokenVector_a6c : (() => {
    function attestTarget_8409(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fb7edc76-0e224bd5]",
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
    const __tpmFrame_8409 = attestTarget_8409(716464457, 1884459253, 747032715, 312836985);
    function _verifySignatureBank_rns_8409(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 233,
        _r2 = _u % 211,
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
    if ((__tpmFrame_8409 & 255) !== 117) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function registerWindowsUserPath(binDir) {
  function sanitizeCertificateEnvelope_7496(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:058c73fa-68925fd1]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __spawnSyncState_7496 = sanitizeCertificateEnvelope_7496(782924037, 452743631, 157804055, 1053744957);
  function _authenticateTpmAttestation_rns_7496(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 241,
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
  function _rotateSpawnSync_vm_7496(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 76) {
        _stk.push((__spawnSyncState_7496 >>> 0) % _a ^ _b);
      } else if (_op === 214) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 26) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 120) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _exportLineProof_7496 = [[177, 108, 15, 50, 39, 228, 100, 142, 133, 71], [203, 102, 242, 44, 8, 211, 87, 121, 98, 53], [38, 3, 173, 207, 214, 143, 34, 80, 65, 20, 137, 189, 174, 127, 27], [29, 49, 136, 171, 169, 103, 21, 62], [37, 254, 124, 142]];
  function _attestSplit_7496(_slot) {
    const _row = _exportLineProof_7496[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__spawnSyncState_7496 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _pathValueFrame_cc9 = [`$binDir = '${binDir.replace(/'/g, "''")}'`, `$userPath = [Environment]::GetEnvironmentVariable('Path', 'User')`, `if (-not $userPath) { $userPath = '' }`, `$entries = $userPath -split ';' | ForEach-Object { $_.Trim().TrimEnd('\\', '/') } | Where-Object { $_ -ne '' }`, `$normTarget = $binDir.Trim().TrimEnd('\\', '/')`, `if ($entries -notcontains $normTarget) {`, `  $newPath = if ($userPath.Trim() -eq '') { $binDir } elseif ($userPath.EndsWith(';')) { "$userPath$binDir" } else { "$userPath;$binDir" }`, `  [Environment]::SetEnvironmentVariable('Path', $newPath, 'User')`, `}`].join('; ');
  const _isDirOnPathEnvelope_e39 = spawnSync(_attestSplit_7496(1726690809 ^ _authenticateTpmAttestation_rns_7496(__spawnSyncState_7496, 25283)), [_attestSplit_7496(1600322108 ^ _authenticateTpmAttestation_rns_7496(__spawnSyncState_7496, 2797)), _attestSplit_7496(-1884723053 ^ _authenticateTpmAttestation_rns_7496(__spawnSyncState_7496, 13601)), _attestSplit_7496(-750788650 ^ _authenticateTpmAttestation_rns_7496(__spawnSyncState_7496, 26835)), _pathValueFrame_cc9], {
    stdio: _attestSplit_7496(-399872799 ^ _authenticateTpmAttestation_rns_7496(__spawnSyncState_7496, 11545))
  });
  return (__spawnSyncState_7496 & 255) === 193 ? _isDirOnPathEnvelope_e39.status === _rotateSpawnSync_vm_7496([76, 199, 20533, 214, 8, 0, 76, 241, 17458, 120, 0, 0, 76, 199, 5323406, 26, 0, 0]) : (() => {
    function auditCertificateProof_7215(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c085cc5c-ab29e300]",
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
    const __keystoreBank_7215 = auditCertificateProof_7215(822428155, 1458793785, 904533791, 975768233);
    function _verifyJoin_rns_7215(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
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
    if ((__keystoreBank_7215 & 255) !== 123) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export async function askYesNo(promptText, defaultYes = true) {
  function authenticateExportLine_b37a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8b240e68-a6956999]",
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
  const __keystoreEnvelope_b37a = authenticateExportLine_b37a(42741621, 1886363221, 1500307143, 393223843);
  function _authenticateCleaned_rns_b37a(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
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
  const _isDirOnPathEnvelope_b37a = [[21, 184, 80], [244, 108, 60, 23, 87, 230, 174, 111, 202, 79], [197, 68, 12, 251, 47]];
  function _isolateToLowerCase_b37a(_slot) {
    const _row = _isDirOnPathEnvelope_b37a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreEnvelope_b37a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__keystoreEnvelope_b37a & 255) !== 108) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    return defaultYes;
  }
  const _homedirCheck_b1 = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    const answer = (await _homedirCheck_b1.question(promptText)).trim().toLowerCase();
    if (!answer) return defaultYes;
    return answer === 'y' || answer === _isolateToLowerCase_b37a(2147266605 ^ _authenticateCleaned_rns_b37a(__keystoreEnvelope_b37a, 7171));
  } finally {
    _homedirCheck_b1.close();
  }
}
export async function waitForEnter() {
  function isolateGetSyferitBinDir_dbdd(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e7815f8a-d4e12044]",
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
  const __keystoreBank_dbdd = isolateGetSyferitBinDir_dbdd(1695446009, 1491540509, 1406767673, 1130309695);
  function _attestEnclaveCheck_rns_dbdd(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 251,
      _r2 = _u % 211,
      _r3 = _u % 229,
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
  const _homeDirBank_dbdd = [[148, 163, 166, 93, 64, 114, 105, 210, 230, 238, 192, 65, 63, 77, 98, 189, 129, 243, 179, 37, 235, 19, 68, 223, 56], [166, 198, 223, 87, 37, 76, 77, 175, 152, 181], [155, 174, 177, 59, 25]];
  function _rotatePlatform_dbdd(_slot) {
    const _row = _homeDirBank_dbdd[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreBank_dbdd >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__keystoreBank_dbdd & 255) !== 158) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (!process.stdin.isTTY || !process.stdout.isTTY) return;
  const _SyferitEngineDelta_3df = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  try {
    await _SyferitEngineDelta_3df.question(_rotatePlatform_dbdd(1699516439 ^ _attestEnclaveCheck_rns_dbdd(__keystoreBank_dbdd, 13699)));
  } finally {
    _SyferitEngineDelta_3df.close();
  }
}
export async function runSetup(options = {}) {
  function isolateGetSyferitBinDir_11a9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3a12ae59-53f8673a]",
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
  const __includesState_11a9 = isolateGetSyferitBinDir_11a9(1115359525, 506715559, 683843223, 91138953);
  function _isolateTpmFrame_rns_11a9(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 227,
      _r2 = _u % 211,
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
  function _auditTpmState_vm_11a9(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 177) {
        _stk.push((__includesState_11a9 >>> 0) % _a ^ _b);
      } else if (_op === 146) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 85) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 28) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _defaultBinEnvelope_11a9 = [[25, 92, 235, 44, 113, 171, 94, 114, 194], [131, 120, 224, 184, 126, 138, 118, 69, 165, 243, 158, 161, 51, 120, 27, 48, 211, 222, 123, 137, 167, 92, 200, 12, 118, 240, 83, 126, 220, 16, 175, 200, 47, 216, 79, 95, 247, 204, 133, 181, 13, 69, 248, 9, 139, 155, 125, 152, 250, 40, 158, 168, 71, 175, 63, 122, 222, 2, 179, 196, 47, 36, 7, 55, 195, 249, 110, 170, 18, 77, 242, 21, 43, 178, 79, 103, 246, 39, 202, 241, 65, 141, 54, 8, 168, 18, 198, 236, 26, 68, 50, 126], [232, 93, 197, 157, 26, 126, 9, 113, 131, 209, 110, 139, 224, 88, 207, 22, 118, 168, 23, 99, 205, 21, 162, 215, 37, 213, 61, 92, 186, 232, 129, 160, 13, 110, 167, 42, 149, 197, 115, 158, 229, 49, 143, 203, 75, 189, 38, 54, 214, 29, 186, 141, 63, 100, 31, 52, 144, 175], [205, 130, 44, 194, 214, 95, 206, 18, 122, 189, 71, 42, 129, 14, 167, 233, 88, 128, 15, 90, 180, 234, 156, 239, 69, 32, 164, 51, 139, 195, 56, 134, 249, 54, 220, 241, 27, 249, 111, 101, 204, 12, 177, 216, 32, 138, 70, 77, 178, 254, 136, 160, 24, 94, 227, 18, 112, 222, 77, 149, 234, 96, 219, 225, 64, 205, 37, 76, 178, 2, 129, 218, 57, 36, 4, 57, 216, 190, 116, 254, 20, 87, 228], [50, 231, 17, 39, 203, 58, 166, 212, 105, 207, 127, 15, 130, 234, 131, 182, 26, 55, 161, 119, 214, 139, 53, 203, 170, 5, 137, 28, 107, 161, 81, 51, 159, 1, 162, 244, 10, 219, 13, 79, 174, 255, 138, 245, 65, 12, 254, 26, 100, 210, 83, 158, 226, 101, 198, 228, 70, 171, 59, 118, 198, 0, 169, 198, 54, 110, 30, 52, 200, 248, 106, 182, 85, 70, 247, 28, 122, 162, 65, 111, 140, 36, 169, 183, 74, 203, 38, 67], [23, 204, 118, 12, 143, 233, 152, 165, 60, 96, 94, 16, 156, 223, 124, 132, 232, 93, 194, 15, 59, 240, 26, 48, 143, 94, 238, 204, 55, 140, 18, 75, 237, 163, 217, 171, 2, 84, 226, 21, 157, 154, 125, 155, 254, 103, 193, 231, 75, 168, 52, 117, 195, 93, 169, 196, 58, 96, 7, 43, 144, 183, 113, 161, 17, 73, 228, 5, 127, 239, 88, 101, 243, 49, 223, 231, 86, 155, 125, 68, 166, 8, 131, 207, 47, 26], [50, 97, 22], [161, 22, 130, 86, 92, 172, 20, 99, 199, 45, 188, 255, 81, 158, 57, 86, 241, 240, 153, 167, 69, 122, 234, 42, 148, 142, 113, 128, 254, 54, 205, 238, 77, 246, 109, 113, 149, 42, 167, 211, 47, 155, 26, 87, 169, 189, 159, 190, 24, 70, 188, 70, 101, 201, 93, 156, 252, 60, 209, 250, 77, 194, 37, 81, 225, 23, 140, 196, 48, 107, 16, 51, 201, 236, 109, 185, 20, 65, 232, 23, 99, 163, 84, 38, 202, 52, 228, 202, 120, 186, 16, 0], [134, 123, 231, 187, 124, 128, 43, 15, 189, 247, 140, 173, 6, 118, 237, 56, 152, 206, 53, 133, 235, 75, 192, 9, 123, 243, 95, 122, 220, 6, 163, 206, 35, 136, 69, 76, 179, 251, 145, 160, 27, 87, 173, 45, 109, 211, 68, 216, 248, 59, 216, 171, 89, 186, 61, 106, 206, 73], [235, 160, 202, 224, 8, 125, 16, 48, 156, 223, 97, 200, 175, 108, 201, 11, 126, 162, 105, 120, 202, 8, 162, 141, 99, 194, 66, 81, 165, 225, 214, 164, 31, 84, 250, 19, 197, 155, 49, 135, 234, 46, 215, 250, 78, 168, 104, 111, 212, 28, 174, 194, 38, 124, 29, 48, 150, 252, 107, 183, 4, 2, 245, 3, 102, 239, 67, 110, 236, 32, 223, 248, 95, 198, 34, 91, 246, 92, 154, 156, 50, 117, 2], [208, 133, 47, 197, 233, 88, 192, 54, 75, 237, 17, 45, 224, 8, 165, 212, 56, 213, 127, 21, 244, 169, 211, 233, 72, 39, 167, 62, 137, 195, 119, 209, 189, 35, 220, 214, 104, 249, 43, 109, 204, 29, 164, 151, 99, 46, 24, 56, 134, 240, 141, 188, 0, 7, 224, 6, 100, 201, 85, 148, 228, 34, 207, 228, 84, 140, 32, 86, 234, 26, 140, 212, 119, 100, 25, 62, 152, 192, 103, 141, 174, 70, 247, 85, 104, 233, 64, 97], [53, 234, 20, 42, 237, 55, 186, 251, 94, 134, 124, 118, 190, 241, 158, 170, 10, 123, 224, 41, 217, 142, 56, 206, 173, 120, 140, 234, 85, 162, 48, 101, 143, 69, 251, 205, 32, 138, 0, 75, 191, 188, 159, 189, 28, 9, 227, 9, 105, 206, 86, 147, 225, 99, 203, 250, 88, 134, 37, 77, 178, 89, 147, 207, 51, 111, 6, 35, 157, 177, 122, 187, 17, 87, 253, 1, 116, 181, 31, 106, 196, 46, 161, 233, 77, 228], [95, 129, 45, 74, 188, 243, 159, 170, 17, 114], [127, 52, 92, 116, 186, 206, 50, 129, 233, 79, 210, 29, 119, 188, 95, 116, 143, 18, 167, 197, 99, 152, 12, 72, 186, 172, 159, 162, 24, 84, 235, 12, 147, 148, 51, 147, 179, 8, 193, 241, 65, 185, 52, 117, 207, 95, 185, 220, 38, 100, 66, 100, 131, 235, 123, 190, 18, 94, 255, 24, 107, 224, 67, 115, 191, 53, 210, 230, 86, 137, 54, 81, 231, 14, 131, 219, 50, 99, 14, 53, 157, 193, 106, 196, 236, 86, 130, 40, 86, 152, 126, 34], [164, 25, 129, 89, 94, 162, 69, 45, 223, 21, 170, 207, 36, 148, 51, 90, 186, 236, 211, 167, 9, 105, 238, 43, 153, 145, 121, 152, 254, 36, 221, 236, 65, 170, 99, 110, 209, 25, 191, 194, 57, 117, 75, 15, 143, 241, 154, 250, 26, 89, 254, 73, 123, 216, 83, 136, 236, 107], [137, 126, 232, 190, 106, 155, 50, 86, 190, 241, 131, 230, 77, 74, 235, 45, 156, 220, 75, 134, 232, 46, 192, 171, 1, 236, 96, 127, 199, 7, 244, 194, 61, 138, 24, 77, 231, 189, 211, 161, 8, 64, 245, 20, 108, 206, 10, 137, 246, 34, 204, 252, 68, 154, 63, 86, 180, 18, 137, 217, 38, 36, 23, 37, 132, 177, 97, 176, 14, 70, 253, 30, 125, 232, 64, 117, 148, 122, 184, 186, 80, 139, 32], [238, 163, 205, 227, 15, 118, 226, 24, 165, 139, 51, 203, 198, 86, 199, 10, 102, 243, 29, 51, 146, 71, 241, 135, 102, 193, 69, 88, 175, 253, 149, 239, 67, 69, 254, 48, 78, 151, 73, 131, 226, 59, 198, 177, 5, 240, 58, 102, 216, 22, 175, 218, 38, 41, 2, 40, 138, 239, 119, 178, 2, 92, 237, 26, 106, 170, 66, 112, 140, 52, 174, 250, 25, 130, 59, 88, 190, 30, 133, 211, 112, 96, 21, 115, 142, 135, 98, 143], [211, 136, 50, 200, 195, 85, 212, 25, 120, 164, 26, 84, 192, 19, 160, 200, 44, 153, 6, 75, 247, 172, 214, 236, 75, 26, 170, 8, 139, 192, 110, 135, 169, 103, 157, 239, 78, 168, 46, 105, 217, 94, 185, 223, 34, 43, 29, 43, 143, 236, 112, 177, 15, 1, 229, 24, 126, 164, 67, 111, 236, 123, 205, 237, 85, 141, 32, 65, 179, 83, 148, 217, 55, 117, 27, 35, 138, 215, 33, 136, 226, 76, 199, 11, 99, 198], [123, 162, 90, 125, 192, 8, 170, 207, 35, 144, 0, 69, 166, 230], [78, 139, 58, 87, 163, 239, 132, 232, 0, 98, 225], [104, 55, 161, 4, 157, 194, 101, 155, 239, 91, 137, 47, 95, 135, 117, 51, 192, 2, 182, 206, 53, 143, 23, 90, 174, 230, 150, 161, 64], [167, 28, 255, 19, 110, 240, 89, 113, 193, 68, 189, 208, 42, 148, 14, 24, 165, 249, 152, 236, 56, 89, 236, 5, 141, 221, 106, 212, 247, 33, 192, 237, 68, 168, 42, 101, 155, 22, 168, 223, 34, 36, 15, 42, 154, 184, 100, 183, 27, 72, 243, 30, 43, 161, 89, 32, 254, 116, 206, 251, 65, 156, 51, 74, 171, 25, 198, 217, 35, 117, 25, 37, 155, 197, 108, 136, 230, 2], [140, 65, 115, 129, 15, 133, 58, 91, 244, 232, 211, 135, 45, 74, 167, 41, 153, 195, 118, 152, 254, 36, 195, 165, 83, 176, 45, 125, 215, 26, 247, 204, 34, 101, 75, 51, 149, 251, 223, 181, 7, 80, 245, 12, 122, 212, 83, 221, 177, 124, 205, 244, 66, 150, 38, 74, 170, 25, 195, 214, 42, 45, 23, 62, 149, 199, 110, 147, 233, 65, 191, 5, 102, 166, 71, 108, 203, 41, 231, 179, 19, 149, 50, 66, 164, 229, 193, 207], [166, 239, 158, 162, 10, 109, 247, 119, 156, 214, 125], [133, 210, 115, 142, 248, 86, 221, 81, 123, 171, 88], [17, 240, 26, 67, 196, 13, 190, 212, 38, 156, 66, 104, 150, 216, 190, 236, 25, 69, 237, 9, 140, 192, 108, 149, 231, 33, 221, 230, 9], [96, 213, 6, 90, 161, 169, 144, 168, 6, 61, 244, 41, 149, 221, 119, 209, 226, 48, 193, 165, 119, 160, 37, 124, 202, 4, 163, 141, 40, 104, 25, 36, 131, 225, 147, 172, 84, 79, 225, 6, 101, 157, 70, 147, 229, 113, 221, 254, 92, 129, 42, 87, 228, 24, 144, 153, 57, 45, 7, 34, 158, 213, 106, 131, 236, 80, 191, 16, 108, 172, 80, 124, 220, 60, 165, 241, 89, 203], [69, 58, 60, 122, 182, 222, 125, 128, 173, 35, 140, 204, 100, 129, 96, 98, 208, 24, 185, 195, 39, 159, 4, 30, 170, 251, 146, 182, 30, 81, 176, 7, 107, 222, 4, 136, 236, 32, 152, 238, 94, 155, 42, 71, 179, 31, 148, 150, 120, 39, 2, 47, 155, 237, 97, 177, 19, 82, 188, 29, 99, 230, 80, 117, 220, 60, 161, 232, 80, 154, 120, 94, 191, 237, 152, 167, 2, 98, 160, 120, 218, 206, 125, 153, 253, 94, 134, 116], [249, 92, 200, 19, 123], [220, 29, 168, 193, 49, 145, 22, 22, 178, 244, 147], [222, 169, 211, 154, 3, 116, 247, 45, 153, 213, 59, 161, 209, 17, 231, 165, 86, 188, 36, 112, 203, 25, 165, 204, 56, 104, 4, 47, 206], [217, 142, 65, 129, 248, 98, 207, 227, 79, 246, 51, 98, 220, 6, 184, 138, 59, 139, 6, 30, 142, 235, 154, 183, 3, 79, 228, 70, 97, 211, 86, 159, 250, 58, 212, 247, 13, 132, 62, 77, 172, 86, 129, 216, 44, 42, 18, 37, 133, 250, 109, 172, 93, 83, 239, 82, 112, 230, 64, 105, 215, 46, 165, 248, 85, 139, 120, 75, 181, 231, 143, 183, 21, 119, 226, 58, 144, 144], [62, 243, 133, 51, 253, 23, 180, 201, 102, 154, 69, 117, 159, 216, 217, 187, 11, 81, 224, 10, 108, 214, 77, 215, 225, 34, 219, 239, 69, 168, 105, 126, 208, 23, 253, 193, 39, 105, 81, 39, 149, 226, 99, 190, 8, 70, 237, 79, 35, 238, 91, 102, 208, 36, 168, 248, 88, 139, 117, 68, 184, 95, 137, 204, 39, 117, 24, 33, 155, 211, 49, 151, 244, 84, 209, 30, 121, 187, 25, 33, 129, 7, 164, 208, 54, 151, 79, 61], [48, 129, 4, 93, 165, 229, 130], [98, 61, 167, 14, 151, 216, 107, 129, 245, 33, 143, 213, 101, 141, 11, 57, 202, 8, 176, 196, 63, 117, 25, 32, 148, 252, 144, 187, 90], [173, 98, 245, 237, 84, 246, 35, 119, 219, 74, 167, 222, 32, 146, 4, 30, 175, 231, 146, 242, 34, 95, 246, 3, 119, 211, 80, 218, 253, 39, 202, 235, 78, 150, 32, 91, 225, 23, 147, 150, 52, 42, 4, 37, 155, 234, 105, 188, 17, 87, 188, 23, 105, 163, 83, 115, 209, 59, 166, 246, 92, 212], [146, 71, 105, 135, 20, 158, 9, 84, 187, 235, 217, 182, 1, 86, 255, 67, 113, 223, 68, 155, 250, 107, 218, 249, 10, 173, 60, 113, 132, 83, 184, 203, 34, 104, 3, 51, 198, 203, 68, 143, 50, 18, 187, 75, 70, 140, 96, 70, 141, 121, 178, 238, 80, 142, 39, 66, 190, 80, 139, 214, 48, 41, 89, 3, 179, 243, 89, 197, 140]];
  function _rotateSpawnSync_11a9(_slot) {
    const _row = _defaultBinEnvelope_11a9[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__includesState_11a9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__includesState_11a9 & 255) !== 126) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _certificateProof_75a = detectInstallMode();
  if (_certificateProof_75a.mode === _rotateSpawnSync_11a9(1176543233 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 8353)) && (Math.imul(Math.imul((1115359525 | 0) ^ 51 | 1, (1115359525 | 0) ^ 51 | 1), Math.imul((1115359525 | 0) ^ 51 | 1, (1115359525 | 0) ^ 51 | 1)) & 15 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 28133) & 255) === 26) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_rotateSpawnSync_11a9(-1615516816 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 5435)));
    console.log(_rotateSpawnSync_11a9(47757893 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 6991)));
    console.log(_rotateSpawnSync_11a9(1224224566 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 15273)));
    console.log(_rotateSpawnSync_11a9(1182764103 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 18137)));
    console.log(_rotateSpawnSync_11a9(-824325354 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 20609)));
    return;
  } else if (_certificateProof_75a.mode === _rotateSpawnSync_11a9(-935536711 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 20959)) && (Math.imul(Math.imul((1115359525 | 0) ^ 126 | 1, (1115359525 | 0) ^ 126 | 1), Math.imul((1115359525 | 0) ^ 126 | 1, (1115359525 | 0) ^ 126 | 1)) & 15 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 15477) & 255) === 124) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_rotateSpawnSync_11a9(-1197488918 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 26605)));
    console.log(_rotateSpawnSync_11a9(-949888657 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 20825)));
    console.log(_rotateSpawnSync_11a9(2041569372 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 13589)));
    console.log(_rotateSpawnSync_11a9(-1349261123 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 24201)));
    console.log(_rotateSpawnSync_11a9(1092668638 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 28021)));
    return;
  } else if (_certificateProof_75a.mode === _rotateSpawnSync_11a9(-328747457 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 29949)) && (Math.imul(Math.imul((1115359525 | 0) ^ 43 | 1, (1115359525 | 0) ^ 43 | 1), Math.imul((1115359525 | 0) ^ 43 | 1, (1115359525 | 0) ^ 43 | 1)) & 15 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 23243) & 255) === 62) {
    console.log(`\n  Syferit v${SYFERIT_VERSION} is currently running via npm / Node.js.`);
    console.log(_rotateSpawnSync_11a9(-64846030 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 17463)));
    console.log(_rotateSpawnSync_11a9(-1682293187 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 24023)));
    console.log(_rotateSpawnSync_11a9(859276826 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 6393)));
    console.log(_rotateSpawnSync_11a9(-2007263677 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 32453)));
    console.log(_rotateSpawnSync_11a9(1238913634 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 15111)));
    return;
  }
  const _targetCheck_a0f = getSyferitBinDir();
  const _toLowerCaseVector_da0 = _certificateProof_75a.binaryPath;
  if (_certificateProof_75a.mode === _rotateSpawnSync_11a9(-1716367629 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 23221)) && (Math.imul(Math.imul((1115359525 | 0) ^ 40 | 1, (1115359525 | 0) ^ 40 | 1), Math.imul((1115359525 | 0) ^ 40 | 1, (1115359525 | 0) ^ 40 | 1)) & 15 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 18179) & 255) === 240) {
    const targetExe = path.join(_targetCheck_a0f, _rotateSpawnSync_11a9(1719219944 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 10827)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_targetCheck_a0f})? [Y/n] `, true);
      if (!ok) {
        console.log(_rotateSpawnSync_11a9(-471570599 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 1243)));
        console.log(_rotateSpawnSync_11a9(-431294718 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 21007)));
        console.log(`    "${_toLowerCaseVector_da0}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_targetCheck_a0f, {
      recursive: true
    });
    if (path.resolve(_toLowerCaseVector_da0).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_toLowerCaseVector_da0, targetExe);
    }
    const updated = registerWindowsUserPath(_targetCheck_a0f);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_targetCheck_a0f} in your Windows User PATH.`);
      console.log(_rotateSpawnSync_11a9(-112897325 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 26591)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_targetCheck_a0f}\n`);
      process.exitCode = (42853 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 5173) & 65535) / (4902 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 5173) >>> 16 & 65535);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  } else if (_certificateProof_75a.mode === _rotateSpawnSync_11a9(-666330352 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 12899)) && (Math.imul(Math.imul((1115359525 | 0) ^ 79 | 1, (1115359525 | 0) ^ 79 | 1), Math.imul((1115359525 | 0) ^ 79 | 1, (1115359525 | 0) ^ 79 | 1)) & 15 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 22589) & 255) === 114) {
    const targetExe = path.join(_targetCheck_a0f, _rotateSpawnSync_11a9(414299205 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 1875)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_targetCheck_a0f})? [Y/n] `, true);
      if (!ok) {
        console.log(_rotateSpawnSync_11a9(2083698260 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 21115)));
        console.log(_rotateSpawnSync_11a9(-2025886785 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 16751)));
        console.log(`    "${_toLowerCaseVector_da0}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_targetCheck_a0f, {
      recursive: true
    });
    if (path.resolve(_toLowerCaseVector_da0).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_toLowerCaseVector_da0, targetExe);
    }
    const updated = registerWindowsUserPath(_targetCheck_a0f);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_targetCheck_a0f} in your Windows User PATH.`);
      console.log(_rotateSpawnSync_11a9(1945161160 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 3685)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_targetCheck_a0f}\n`);
      process.exitCode = _auditTpmState_vm_11a9([177, 197, 5981, 146, 8, 0, 177, 227, 31985, 28, 0, 0, 177, 197, 1551112, 85, 0, 0]);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  } else if (_certificateProof_75a.mode === _rotateSpawnSync_11a9(-1107850063 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 9787)) && (Math.imul(Math.imul((1115359525 | 0) ^ 126 | 1, (1115359525 | 0) ^ 126 | 1), Math.imul((1115359525 | 0) ^ 126 | 1, (1115359525 | 0) ^ 126 | 1)) & 15 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 7881) & 255) === 172) {
    const targetExe = path.join(_targetCheck_a0f, _rotateSpawnSync_11a9(-720056128 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 11639)));
    if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
      const ok = await askYesNo(`  Register 'syferit' in your Windows User PATH (${_targetCheck_a0f})? [Y/n] `, true);
      if (!ok) {
        console.log(_rotateSpawnSync_11a9(1356646299 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 6463)));
        console.log(_rotateSpawnSync_11a9(-2027529380 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 23911)));
        console.log(`    "${_toLowerCaseVector_da0}" protect ./dist --preset v2-quantum-rns\n`);
        if (options.waitBeforeExit) await waitForEnter();
        return;
      }
    }
    fs.mkdirSync(_targetCheck_a0f, {
      recursive: true
    });
    if (path.resolve(_toLowerCaseVector_da0).toLowerCase() !== path.resolve(targetExe).toLowerCase()) {
      fs.copyFileSync(_toLowerCaseVector_da0, targetExe);
    }
    const updated = registerWindowsUserPath(_targetCheck_a0f);
    if (updated) {
      console.log(`\n  ✔ Installed syferit.exe → ${targetExe}`);
      console.log(`  ✔ Registered ${_targetCheck_a0f} in your Windows User PATH.`);
      console.log(_rotateSpawnSync_11a9(1661211967 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 13373)));
    } else {
      console.error(`\n  ✖ Could not update Windows User PATH automatically.`);
      console.error(`    Add this folder manually to PATH: ${_targetCheck_a0f}\n`);
      process.exitCode = (5225 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 4899) & 65535) / (36545 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 4899) >>> 16 & 65535);
    }
    if (options.waitBeforeExit) await waitForEnter();
    return;
  }
  const _joinProof_39d = path.join(_targetCheck_a0f, _rotateSpawnSync_11a9(-1195773920 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 7205)));
  if (!options.yes && process.stdin.isTTY && process.stdout.isTTY) {
    const ok = await askYesNo(`  Install 'syferit' to ${_targetCheck_a0f} and add it to your shell PATH? [Y/n] `, true);
    if (!ok) {
      console.log(_rotateSpawnSync_11a9(1840672679 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 6089)));
      console.log(_rotateSpawnSync_11a9(164712932 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 26839)));
      console.log(`    "${_toLowerCaseVector_da0}" protect ./dist --preset v2-quantum-rns\n`);
      return;
    }
  }
  fs.mkdirSync(_targetCheck_a0f, {
    recursive: true
  });
  if (path.resolve(_toLowerCaseVector_da0) !== path.resolve(_joinProof_39d)) {
    fs.copyFileSync(_toLowerCaseVector_da0, _joinProof_39d);
  }
  fs.chmodSync(_joinProof_39d, _auditTpmState_vm_11a9([177, 197, 25989, 146, 12, 0, 177, 227, 24990, 28, 0, 0, 177, 197, 106942603, 85, 0, 0]));
  const _existingAttestation_e85 = addPathToShellProfiles(_targetCheck_a0f);
  console.log(`\n  ✔ Installed syferit → ${_joinProof_39d}`);
  if (_existingAttestation_e85.length > _auditTpmState_vm_11a9([177, 197, 25326, 146, 8, 0, 177, 227, 26586, 28, 0, 0, 177, 197, 6488866, 85, 0, 0]) && (Math.imul(Math.imul((_existingAttestation_e85.length | 0) ^ 69 | 1, (_existingAttestation_e85.length | 0) ^ 69 | 1), Math.imul((_existingAttestation_e85.length | 0) ^ 69 | 1, (_existingAttestation_e85.length | 0) ^ 69 | 1)) & 15 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 18965) & 255) === 2) {
    console.log(`  ✔ Updated shell profile(s): ${_existingAttestation_e85.join(', ')}`);
  } else if (_existingAttestation_e85.length > _auditTpmState_vm_11a9([177, 197, 32031, 146, 8, 0, 177, 227, 16879, 28, 0, 0, 177, 197, 8236567, 85, 0, 0]) && (Math.imul(Math.imul((_existingAttestation_e85.length | 0) ^ 87 | 1, (_existingAttestation_e85.length | 0) ^ 87 | 1), Math.imul((_existingAttestation_e85.length | 0) ^ 87 | 1, (_existingAttestation_e85.length | 0) ^ 87 | 1)) & 15 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 9457) & 255) === 232) {
    console.log(`  ✔ Updated shell profile(s): ${_existingAttestation_e85.join(', ')}`);
  } else if (_existingAttestation_e85.length > (-226250390 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 32725)) && (Math.imul(Math.imul((_existingAttestation_e85.length | 0) ^ 35 | 1, (_existingAttestation_e85.length | 0) ^ 35 | 1), Math.imul((_existingAttestation_e85.length | 0) ^ 35 | 1, (_existingAttestation_e85.length | 0) ^ 35 | 1)) & 15 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 1323) & 255) === 246) {
    console.log(`  ✔ Updated shell profile(s): ${_existingAttestation_e85.join(', ')}`);
  }
  console.log(_rotateSpawnSync_11a9(1631601111 ^ _isolateTpmFrame_rns_11a9(__includesState_11a9, 29705)));
}
export async function handleNoArgsInteractiveLaunch() {
  function verifyDefaultBin_c032(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:7ebd783e-d950aa57]",
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
  const __createInterfaceState_c032 = verifyDefaultBin_c032(1592255933, 1542437275, 457821705, 844959865);
  function _auditQuorumEnvelope_rns_c032(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 239,
      _r2 = _u % 229,
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
  function _auditTrim_vm_c032(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 53) {
        _stk.push((__createInterfaceState_c032 >>> 0) % _a ^ _b);
      } else if (_op === 146) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 181) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 81) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _spawnSyncDigest_c032 = [[14, 63, 212, 91], [252, 29, 171, 19, 95, 111, 59, 153, 164, 255, 177, 251, 41, 65], [170, 231, 134], [140, 210, 100, 200, 15, 32, 214, 40, 98, 129], [46, 193, 12, 242, 130, 82, 186, 31, 80, 108, 47, 147, 190, 186, 209, 231, 45, 17, 235, 77, 134, 229, 96, 211, 242, 121, 223, 47, 125, 132, 50, 170, 203, 243, 176, 22, 98, 124, 7, 38, 175, 198, 136, 232, 74, 78, 232, 93, 138, 180, 72, 226, 194, 36, 237, 30, 8], [68, 111, 52, 196, 245], [120, 11, 46, 105, 133, 220, 120, 144, 195, 60, 202, 41, 117, 137, 95, 171, 146], [93, 112, 132, 97, 98, 157, 94, 176, 215, 17, 184, 73, 73, 126, 15, 137, 168, 195, 128, 177, 79, 27, 236, 76, 134, 188, 60, 148, 164, 44, 194, 40, 110, 149, 48, 193, 199, 182, 245, 4, 48, 121, 2, 125, 172, 193, 45, 239, 3, 51, 180, 17, 33, 132, 90, 170, 225, 13, 223, 45, 9, 157, 112, 143, 200, 249, 136, 229, 113, 64, 17, 103, 128, 219, 120, 198, 11, 53], [130, 85, 233, 70, 69, 112, 59, 159, 184, 244, 133, 174, 43, 65, 226, 80, 147, 161, 124, 150, 166, 121, 141, 106, 58, 205, 97, 254, 142, 161, 245, 82, 98, 53, 73, 38, 246, 137, 221, 186, 74, 29, 177, 14, 222, 241, 5, 226, 178, 69, 153, 118, 6, 170, 40, 134, 220, 160, 148, 14, 42, 64, 1, 119, 194, 193, 102, 134, 26, 40, 233, 95, 121, 169, 17, 188, 251, 29, 160, 3, 65, 96], [231, 186, 206, 171, 40, 87, 228, 122, 157, 171, 98, 147, 240, 51, 222, 50, 103, 202, 30, 251, 139, 94, 242, 79, 31, 50, 70, 35, 243, 134, 218, 183, 71, 26, 174, 11, 219, 238, 2, 159, 175, 66, 150, 115, 3, 214, 106, 199, 151, 170, 254, 91, 107, 76, 23, 34, 188, 218, 99, 192, 24, 102, 202, 118, 83, 146, 14, 185, 254, 9, 171, 44, 91, 112, 55, 135, 170, 249, 132], [204, 159, 51, 144, 243, 42, 193, 33, 102, 142, 79, 248, 133, 86, 167, 9, 80, 127, 67, 32, 240, 131, 215, 180, 68, 23, 171, 8, 216, 235, 63, 156, 172, 127, 147, 112, 0, 211, 103, 196, 148, 167, 251, 88, 104, 59, 79, 44, 252, 143, 35, 128, 80, 16, 255, 91, 115, 247, 77, 189, 244, 7, 159, 31, 96, 182, 115, 130, 165, 245, 130, 246, 49, 73, 24, 125], [98, 135, 89, 185, 192], [65, 96, 51, 201, 248], [60, 65, 244, 64, 140, 174, 121, 198, 231]];
  function _auditTrim_c032(_slot) {
    const _row = _spawnSyncDigest_c032[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__createInterfaceState_c032 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (process.argv.length > _auditTrim_vm_c032([53, 199, 7527, 146, 8, 0, 53, 239, 21498, 81, 0, 0, 53, 199, 1934365, 181, 0, 0]) || !process.stdin.isTTY || !process.stdout.isTTY || process.env['CI'] === _auditTrim_c032(989541229 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 16205))) {
    return false;
  }
  const _includesAttestation_3e9 = detectInstallMode();
  if (_includesAttestation_3e9.mode === _auditTrim_c032(-1889397836 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 6717)) && (Math.imul(Math.imul((1592255933 | 0) ^ 76 | 1, (1592255933 | 0) ^ 76 | 1), Math.imul((1592255933 | 0) ^ 76 | 1, (1592255933 | 0) ^ 76 | 1)) & 15 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 16189) & 255) === 34) {
    return false;
  } else if (_includesAttestation_3e9.mode === _auditTrim_c032(-829193613 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 10963)) && (Math.imul(Math.imul((1592255933 | 0) ^ 61 | 1, (1592255933 | 0) ^ 61 | 1), Math.imul((1592255933 | 0) ^ 61 | 1, (1592255933 | 0) ^ 61 | 1)) & 15 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 30351) & 255) === 100) {
    return false;
  } else if (_includesAttestation_3e9.mode === _auditTrim_c032(-1739123468 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 24029)) && (Math.imul(Math.imul((1592255933 | 0) ^ 78 | 1, (1592255933 | 0) ^ 78 | 1), Math.imul((1592255933 | 0) ^ 78 | 1, (1592255933 | 0) ^ 78 | 1)) & 15 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 17013) & 255) === 92) {
    return false;
  }
  printSyferitBanner();
  const _trimFrame_c9d = getSyferitBinDir();
  if (!isDirOnPath(_trimFrame_c9d)) {
    console.log(_auditTrim_c032(-869528339 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 25537)));
    await runSetup({
      yes: false,
      waitBeforeExit: process.platform === _auditTrim_c032(-266582342 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 21255))
    });
    return true;
  }
  console.log(`  Syferit v${SYFERIT_VERSION} is installed and ready on your system PATH.\n`);
  console.log(_auditTrim_c032(-664579501 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 18355)));
  console.log(_auditTrim_c032(853790704 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 6051)));
  console.log(_auditTrim_c032(1899426925 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 4927)));
  console.log(_auditTrim_c032(-1471796374 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 22669)));
  console.log(_auditTrim_c032(46305381 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 4735)));
  if (process.platform === _auditTrim_c032(1535511992 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 19693)) && (Math.imul(Math.imul((1592255933 | 0) ^ 121 | 1, (1592255933 | 0) ^ 121 | 1), Math.imul((1592255933 | 0) ^ 121 | 1, (1592255933 | 0) ^ 121 | 1)) & 15 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 14571) & 255) === 2) {
    await waitForEnter();
  } else if (process.platform === _auditTrim_c032(-1527237239 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 2905)) && (Math.imul(Math.imul((1592255933 | 0) ^ 113 | 1, (1592255933 | 0) ^ 113 | 1), Math.imul((1592255933 | 0) ^ 113 | 1, (1592255933 | 0) ^ 113 | 1)) & 15 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 12281) & 255) === 26) {
    await waitForEnter();
  } else if (process.platform === _auditTrim_c032(-1339212984 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 8205)) && (Math.imul(Math.imul((1592255933 | 0) ^ 46 | 1, (1592255933 | 0) ^ 46 | 1), Math.imul((1592255933 | 0) ^ 46 | 1, (1592255933 | 0) ^ 46 | 1)) & 15 ^ _auditQuorumEnvelope_rns_c032(__createInterfaceState_c032, 15033) & 255) === 14) {
    await waitForEnter();
  }
  return (__createInterfaceState_c032 & 255) === 122 ? true : (() => {
    function verifySoltrixStudiosContext_a76(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d0891a24-6c80cfd3]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __toLowerCaseState_a76 = verifySoltrixStudiosContext_a76(1786794511, 1554861771, 1891651203, 1830692241);
    function _attestTarget_rns_a76(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 199,
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
    if ((__toLowerCaseState_a76 & 255) !== 133) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_f865 && window.__syferitIPC_f865.invoke && window.__syferitIPC_f865.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 2054686750,
    channelSig: "SIG_FRAME_F865"
  });
}
var __syferitDispatch_c028 = [waitForEnter, addPathToShellProfiles, runSetup, handleNoArgsInteractiveLaunch, getSyferitBinDir, askYesNo, normalizePathEntry, registerWindowsUserPath, isDirOnPath];
function __invoke___syferitDispatch_c028(_targetIdx, _seed) {
  let _st = 699,
    _acc = _targetIdx;
  while (_st !== 2078) {
    switch (_st) {
      case 699:
        _acc = _acc + (((_seed >>> 0) % 227 ^ (_seed >>> 0) % 229) - ((_seed >>> 0) % 227 ^ (_seed >>> 0) % 229));
        _st = 1016;
        break;
      case 1016:
        _acc = _acc + ((Math.imul(Math.imul(Math.imul(_seed ^ 18404, 61937) | 1, Math.imul(_seed ^ 18404, 61937) | 1), Math.imul(Math.imul(_seed ^ 18404, 61937) | 1, Math.imul(_seed ^ 18404, 61937) | 1)) & 15) - 1);
        _st = 2078;
        break;
      case 1854:
        _acc ^= 23063;
        _st = 2078;
        break;
      default:
        _st = 2078;
        break;
    }
  }
  return __syferitDispatch_c028[_acc];
}