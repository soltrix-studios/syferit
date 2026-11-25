// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';
function auditParse_f881(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b06061c1-0fb38151]",
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
var __keystoreFrame_f881 = auditParse_f881(1842208813, 494545471, 205080407, 71720865);
function _validateCertificateDigest_rns_f881(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 223,
    _r1 = _u % 241,
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
var _relPathDigest_f881 = [[75, 230, 191, 68, 230, 112, 0, 209, 56, 221, 102, 58], [100, 201, 105, 50], [65, 189, 64, 19, 119], [186, 150, 63, 232, 92], [151, 110, 25, 208, 33, 197, 102, 100, 138, 44, 227], [188, 43, 250], [108, 5, 211], [92, 237, 172, 67, 217, 84], [99, 214, 113, 40, 133, 41, 242], [92, 178, 73, 28, 114, 53, 200, 109, 245, 146], [200, 164, 61, 234, 72, 238, 130, 79, 218, 124, 42], [146, 86, 23, 214, 38], [151, 32, 249, 171], [40, 3, 216, 103, 251], [5, 249, 146, 68, 208, 71, 16], [51, 219, 112, 41, 150, 41, 253, 133]];
function _attestLoadSyferitConfig_f881(_slot) {
  const _row = _relPathDigest_f881[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreFrame_f881 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const DEFAULT_IGNORED_DIRS = new Set([_attestLoadSyferitConfig_f881(-2117928699 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 22663)), _attestLoadSyferitConfig_f881(1724556278 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 21433)), _attestLoadSyferitConfig_f881(-2098065075 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 25541)), _attestLoadSyferitConfig_f881(76326040 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 24563)), _attestLoadSyferitConfig_f881(740232005 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 15209)), _attestLoadSyferitConfig_f881(1172680186 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 1765)), _attestLoadSyferitConfig_f881(1935470361 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 3487)), _attestLoadSyferitConfig_f881(445168136 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 20039)), _attestLoadSyferitConfig_f881(-1514098417 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 31719)), _attestLoadSyferitConfig_f881(-1401230296 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 30003)), _attestLoadSyferitConfig_f881(398016969 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 9365)), _attestLoadSyferitConfig_f881(1417506492 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 14103)), _attestLoadSyferitConfig_f881(619606031 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 16751)), _attestLoadSyferitConfig_f881(-336875354 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 31763)), _attestLoadSyferitConfig_f881(2096632323 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 30115)), _attestLoadSyferitConfig_f881(-1495418716 ^ _validateCertificateDigest_rns_f881(__keystoreFrame_f881, 7525))]);
export function loadSyferitConfig(cwd = process.cwd()) {
  function verifyPath_c07b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6f79da73-7eef09f6]",
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
  const __RegExpState_c07b = verifyPath_c07b(1362662705, 1673735071, 467663767, 671210367);
  function _verifyPath_rns_c07b(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 251,
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
  const _readFileSyncBank_c07b = [[28, 117, 1, 126, 113, 201, 143, 129, 244, 91, 225, 37, 66, 175, 13, 189, 204, 51, 217], [225, 69, 234, 109, 16], [214, 52, 219, 0, 46, 158], [187, 21, 162, 239, 0, 127, 24, 119, 117, 198], [112, 195, 154, 195, 242]];
  function _authenticatePosix_c07b(_slot) {
    const _row = _readFileSyncBank_c07b[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__RegExpState_c07b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__RegExpState_c07b & 255) !== 111) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _protectEnvelope_87c = path.join(cwd, _authenticatePosix_c07b(1842081779 ^ _verifyPath_rns_c07b(__RegExpState_c07b, 1337)));
  if (!fs.existsSync(_protectEnvelope_87c)) return null;
  try {
    const raw = JSON.parse(fs.readFileSync(_protectEnvelope_87c, _authenticatePosix_c07b(1708745086 ^ _verifyPath_rns_c07b(__RegExpState_c07b, 24431))));
    if (raw && typeof raw === _authenticatePosix_c07b(-710960231 ^ _verifyPath_rns_c07b(__RegExpState_c07b, 9621))) {
      return raw;
    }
    return null;
  } catch {
    return null;
  }
}
function matchesExcludePattern(relPath, patterns) {
  function reconcileKeystoreQuorum_90a0(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:12f5169c-05b407e3]",
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
  const __enclaveAttestation_90a0 = reconcileKeystoreQuorum_90a0(1774148471, 1110124363, 1428077925, 841010681);
  function _verifyCertificateDigest_rns_90a0(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 197,
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
  function _isolateProtect_vm_90a0(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 93) {
        _stk.push((__enclaveAttestation_90a0 >>> 0) % _a ^ _b);
      } else if (_op === 194) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 144) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 36) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _processVector_90a0 = [[137, 144, 113], [159, 183, 8, 167, 252, 29, 98, 63, 81, 100], [108, 157, 192, 139, 214]];
  function _authenticateProtectLlvmIr_90a0(_slot) {
    const _row = _processVector_90a0[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveAttestation_90a0 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (!patterns || patterns.length === _isolateProtect_vm_90a0([93, 251, 23900, 194, 16, 0, 93, 197, 16291, 36, 0, 0, 93, 251, 1572749146, 144, 0, 0])) return false;
  const _includesBank_e5 = relPath.replace(/\\/g, '/');
  const _enclaveBank_710 = path.posix.basename(_includesBank_e5);
  for (const rawPattern of patterns) {
    const pattern = rawPattern.trim().replace(/\\/g, '/');
    if (!pattern) continue;
    if (pattern.includes('*') || pattern.includes('?')) {
      const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, _authenticateProtectLlvmIr_90a0(1641171103 ^ _verifyCertificateDigest_rns_90a0(__enclaveAttestation_90a0, 25313))).replace(/\*/g, '.*').replace(/\?/g, '.');
      const regex = new RegExp(`^${escaped}$`, 'i');
      if (regex.test(_includesBank_e5) || regex.test(_enclaveBank_710)) return true;
    } else if (_includesBank_e5 === pattern || _includesBank_e5.startsWith(`${pattern.replace(/\/+$/, '')}/`) || _includesBank_e5.includes(`/${pattern.replace(/^\/+|\/+$/g, '')}/`) || _includesBank_e5.includes(pattern) || _enclaveBank_710 === pattern) {
      return true;
    }
  }
  return (__enclaveAttestation_90a0 & 255) === 213 ? false : (() => {
    function auditParse_63d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5f6e6faa-eb31ea4b]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __protectPythonState_63d = auditParse_63d(605338593, 1192267259, 579017415, 409979077);
    function _auditEnclaveFrame_rns_63d(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 251,
        _r2 = _u % 223,
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
    if ((__protectPythonState_63d & 255) !== 160) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function isSkippedNextBuildPath(candidatePath, isDirectory) {
  function rotateKeystoreFrame_afd3(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c1133d14-30a63ca8]",
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
  const __nonceEnvelope_afd3 = rotateKeystoreFrame_afd3(1603886383, 213742445, 370534859, 350593719);
  function _authenticatePosix_rns_afd3(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 197,
      _r2 = _u % 251,
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
  function _isolateReadFileSync_vm_afd3(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 62) {
        _stk.push((__nonceEnvelope_afd3 >>> 0) % _a ^ _b);
      } else if (_op === 139) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 68) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 188) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _existsSyncDigest_afd3 = [[56, 248, 203, 202, 199], [94, 218, 187, 187, 189, 56, 17, 27, 16, 185], [19, 186, 149, 111, 145]];
  function _rotateNonceEnvelope_afd3(_slot) {
    const _row = _existsSyncDigest_afd3[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceEnvelope_afd3 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _keystoreProration_997 = candidatePath.replace(/\\/g, '/');
  const _SoltrixStudiosDelta_a90 = _keystoreProration_997.match(/(?:^|\/)\.next\/(.+)$/);
  if (!_SoltrixStudiosDelta_a90) {
    return false;
  }
  const _pathVector_d31 = _SoltrixStudiosDelta_a90[_isolateReadFileSync_vm_afd3([62, 223, 3667, 139, 12, 0, 62, 197, 4545, 188, 0, 0, 62, 223, 15274360, 68, 0, 0])];
  if (isDirectory) {
    return /^(cache|server|types|diagnostics|trace|static\/development)(\/|$)/i.test(_pathVector_d31);
  }
  if (_pathVector_d31.endsWith(_rotateNonceEnvelope_afd3(-1351199919 ^ _authenticatePosix_rns_afd3(__nonceEnvelope_afd3, 291)))) {
    return false;
  }
  const _protectLlvmIrVector_ef1 = /^static\/chunks\/app\//i.test(_pathVector_d31) || /^static\/chunks\/pages\//i.test(_pathVector_d31) && !/^static\/chunks\/pages\/(_app|_document|_error)[.-]/i.test(_pathVector_d31);
  return (__nonceEnvelope_afd3 & 255) === 22 ? !_protectLlvmIrVector_ef1 : (() => {
    function isolateReadFileSync_2119(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:079a423a-67850d46]",
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
    const __tokenCheck_2119 = isolateReadFileSync_2119(1542880377, 1523050759, 460715547, 1505487531);
    function _reconcileKeystoreQuorum_rns_2119(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 239,
        _r2 = _u % 223,
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
    if ((__tokenCheck_2119 & 255) !== 206) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export const SYFERIT_TERMINAL_ARTWORK = `
   ▄████████ ▄██   ▄      ▄████████    ▄████████    ▄████████  ▄█      ███     
  ███    ███ ███   ██▄   ███    ███   ███    ███   ███    ███ ███  ▀█████████▄ 
  ███    █▀  ███▄▄▄███   ███    █▀    ███    █▀    ███    ███ ███▌    ▀███▀▀██ 
  ███        ▀▀▀▀▀▀███  ▄███▄▄▄      ▄███▄▄▄      ▄███▄▄▄▄██▀ ███▌     ███   ▀ 
▀███████████ ▄██   ███ ▀▀███▀▀▀     ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   ███▌     ███     
         ███ ███   ███   ███          ███    █▄  ▀███████████ ███      ███     
   ▄█    ███ ███   ███   ███          ███    ███   ███    ███ ███      ███     
 ▄████████▀   ▀█████▀    ███          ██████████   ███    ███ █▀      ▄████▀   
`;
export function printSyferitBanner(options) {
  function authenticateJoin_9f0e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ae7631fe-7e2dc00e]",
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
  const __patternState_9f0e = authenticateJoin_9f0e(109907371, 243478481, 202858689, 1458163293);
  function _authenticateNonceVector_rns_9f0e(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 197,
      _r2 = _u % 199,
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
  function _isolateNormalized_vm_9f0e(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 31) {
        _stk.push((__patternState_9f0e >>> 0) % _a ^ _b);
      } else if (_op === 74) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 203) {
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
  const _protectPythonFrame_9f0e = [[136, 43, 237, 199, 231, 204, 58, 62, 83, 44, 197, 172, 212, 166], [80, 95, 132, 168], [104, 67, 94, 80, 140, 167, 206, 196, 32, 219, 98, 120, 84, 79, 150, 236, 200, 227, 10, 0, 124, 23, 190, 180, 144, 139, 210, 40, 4, 63, 70, 92, 184, 83, 250, 240, 44, 199, 110, 100, 64, 123, 130, 152, 244, 239, 54, 12, 104, 3, 170, 160, 156, 183, 222, 212, 48, 43, 114, 72, 164, 95, 230, 252, 216, 243, 26, 16, 76, 103, 142, 132, 224, 155, 34, 56, 20, 15, 81], [77, 168, 126, 5, 33, 79, 154, 255, 208, 226, 30, 25, 9, 50, 217, 207, 140, 246, 78, 85, 69, 76, 64, 112, 136, 98, 200, 241, 16, 247, 27, 119, 104, 65, 188, 177, 196, 208, 67, 127, 21, 2, 146, 158, 160, 128, 254, 228, 125, 49, 113, 97, 148, 107, 193, 192, 241, 217, 103, 105, 107, 85, 181, 162, 203, 167, 29, 8, 36, 46, 35, 217, 245, 208, 183, 173, 73, 164, 122], [178, 141, 5, 106, 6, 99, 172, 177, 212, 242, 8, 82, 4, 28, 99, 114, 194, 174, 204, 243, 6, 177, 81, 90, 36, 5, 159, 187, 248, 220, 18, 63, 70, 99, 214, 202, 230, 227, 168, 94, 9, 26, 112, 102, 156, 96, 200, 134, 209, 233, 49, 94, 127, 94, 171, 238, 233, 170, 8, 7, 30, 29, 101, 144, 183, 131, 231, 239, 70, 196, 70, 121, 147, 123, 217, 146, 174, 137, 1], [151, 242, 25, 63, 27, 54, 93, 83, 143, 170, 241, 199, 35, 222, 101, 123, 87, 114, 153, 239, 203, 230, 13, 3, 127, 26, 161, 183, 147, 142, 213, 43, 7, 34, 73, 95, 187, 86, 253, 243, 47, 202, 17, 103, 67, 126, 133, 155, 247, 146, 57, 15, 107, 6, 173, 163, 159, 186, 193, 215, 51, 46, 117, 75, 167, 66, 233, 255, 219, 246, 29, 19, 79, 106, 177, 135, 227, 158, 22], [252, 215, 207, 180, 80, 51, 18, 109, 106, 120, 175, 210, 253, 147, 122, 106, 12, 16, 175, 183, 141, 251, 198, 23, 33, 13, 122, 105, 197, 85, 203, 213, 16, 227, 30, 20, 48, 41, 242, 232, 28, 159, 43, 51, 92, 54, 218, 208, 236, 199, 180, 164, 48, 9, 77, 124, 129, 108, 194, 197, 231, 205, 106, 8, 125, 69, 186, 177, 222, 162, 28, 15, 100, 127, 38, 220, 248, 211, 203], [33, 60, 153, 233, 197, 224, 7, 29, 121, 20, 187, 177, 237, 136, 47, 37, 1, 60, 67, 89, 181, 80, 247, 205, 41, 196, 107, 97, 93, 120, 159, 149, 241, 236, 51, 9, 101, 0, 167, 189, 153, 180, 219, 209, 13, 40, 79, 69, 161, 92, 227, 249, 213, 240, 23, 109, 73, 100, 139, 129, 253, 152, 63, 53, 17, 12, 83, 169, 133, 160, 199, 221, 57, 212, 123, 113, 173, 72, 226, 191]];
  function _isolateIncludes_9f0e(_slot) {
    const _row = _protectPythonFrame_9f0e[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__patternState_9f0e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__patternState_9f0e & 255) !== 254) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _enclaveVector_20d = (options?.preset ?? _isolateIncludes_9f0e(523914041 ^ _authenticateNonceVector_rns_9f0e(__patternState_9f0e, 32183))).padEnd(_isolateNormalized_vm_9f0e([31, 233, 26947, 74, 8, 0, 31, 197, 20442, 150, 0, 0, 31, 233, 6955373, 203, 0, 0]), ' ');
  const _ProprietaryEnclaveDelta_67d = (options?.domainProfile ?? _isolateIncludes_9f0e(-1398630116 ^ _authenticateNonceVector_rns_9f0e(__patternState_9f0e, 10357))).padEnd(_isolateNormalized_vm_9f0e([31, 233, 4297, 74, 12, 0, 31, 197, 20530, 150, 0, 0, 31, 233, 17158303, 203, 0, 0]), ' ');
  console.log(SYFERIT_TERMINAL_ARTWORK);
  console.log(_isolateIncludes_9f0e(1163218811 ^ _authenticateNonceVector_rns_9f0e(__patternState_9f0e, 7199)));
  console.log(_isolateIncludes_9f0e(-1062335642 ^ _authenticateNonceVector_rns_9f0e(__patternState_9f0e, 2341)));
  console.log(_isolateIncludes_9f0e(323009473 ^ _authenticateNonceVector_rns_9f0e(__patternState_9f0e, 7657)));
  console.log(_isolateIncludes_9f0e(2023491490 ^ _authenticateNonceVector_rns_9f0e(__patternState_9f0e, 15953)));
  console.log(`  ║  ▸ Preset  : ${_enclaveVector_20d}    │  ▸ Profile : ${_ProprietaryEnclaveDelta_67d}                ║`);
  console.log(_isolateIncludes_9f0e(-1143227237 ^ _authenticateNonceVector_rns_9f0e(__patternState_9f0e, 15141)));
  console.log(_isolateIncludes_9f0e(-909618206 ^ _authenticateNonceVector_rns_9f0e(__patternState_9f0e, 17151)));
}
function getTargetLabel(filePath) {
  function sanitizeJSON_482a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:955e2433-0e7da8f6]",
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
  const __regexState_482a = sanitizeJSON_482a(1176635377, 1160126429, 1922583479, 1801645343);
  function _isolateBasename_rns_482a(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 241,
      _r2 = _u % 227,
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
  const _DEFAULT_IGNORED_DIRSFrame_482a = [[66, 110, 245, 254, 109], [198, 127, 234, 255, 5, 242], [152, 15, 178], [151, 196, 85, 177, 79, 60], [46, 223, 91], [119, 167, 62, 50, 153, 70], [100, 148, 1], [44, 63, 183, 176, 35, 144], [186, 42, 200], [242, 9, 149, 182, 36, 148], [240, 225, 103, 137, 19], [73, 209, 93, 69, 183, 100], [6, 166, 39, 32, 218, 29], [30, 141, 28, 8, 149, 174], [92, 123, 251, 225, 114], [211, 37, 205, 204, 11, 248], [255, 70, 167, 246, 123, 221], [207, 254, 112], [86, 202, 90, 79, 245, 41], [97, 139, 124, 24, 236, 76]];
  function _verifyRegExp_482a(_slot) {
    const _row = _DEFAULT_IGNORED_DIRSFrame_482a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__regexState_482a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (filePath.endsWith(_verifyRegExp_482a(430730413 ^ _isolateBasename_rns_482a(__regexState_482a, 14839)))) return _verifyRegExp_482a(1154371112 ^ _isolateBasename_rns_482a(__regexState_482a, 26471));
  if (filePath.endsWith(_verifyRegExp_482a(832036763 ^ _isolateBasename_rns_482a(__regexState_482a, 14729)))) return _verifyRegExp_482a(-1192670126 ^ _isolateBasename_rns_482a(__regexState_482a, 14385));
  if (filePath.endsWith(_verifyRegExp_482a(1011625661 ^ _isolateBasename_rns_482a(__regexState_482a, 1141)))) return _verifyRegExp_482a(1440039026 ^ _isolateBasename_rns_482a(__regexState_482a, 8031));
  if (filePath.endsWith(_verifyRegExp_482a(960447265 ^ _isolateBasename_rns_482a(__regexState_482a, 29109)))) return _verifyRegExp_482a(-1675375040 ^ _isolateBasename_rns_482a(__regexState_482a, 29299));
  if (filePath.endsWith(_verifyRegExp_482a(1821388367 ^ _isolateBasename_rns_482a(__regexState_482a, 20895)))) return _verifyRegExp_482a(-1039248158 ^ _isolateBasename_rns_482a(__regexState_482a, 2061));
  if (filePath.endsWith(_verifyRegExp_482a(-1249381417 ^ _isolateBasename_rns_482a(__regexState_482a, 17067)))) return _verifyRegExp_482a(1996561624 ^ _isolateBasename_rns_482a(__regexState_482a, 11257));
  if (filePath.endsWith(_verifyRegExp_482a(1783957507 ^ _isolateBasename_rns_482a(__regexState_482a, 293)))) return _verifyRegExp_482a(-946601002 ^ _isolateBasename_rns_482a(__regexState_482a, 13541));
  if (filePath.endsWith(_verifyRegExp_482a(-183756603 ^ _isolateBasename_rns_482a(__regexState_482a, 18843)))) return _verifyRegExp_482a(-1051492010 ^ _isolateBasename_rns_482a(__regexState_482a, 31971));
  if (/\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath)) return _verifyRegExp_482a(-1037948021 ^ _isolateBasename_rns_482a(__regexState_482a, 601));
  if (filePath.endsWith(_verifyRegExp_482a(-1280394480 ^ _isolateBasename_rns_482a(__regexState_482a, 32643)))) return _verifyRegExp_482a(-147966077 ^ _isolateBasename_rns_482a(__regexState_482a, 30829));
  return (__regexState_482a & 255) === 108 ? _verifyRegExp_482a(448943068 ^ _isolateBasename_rns_482a(__regexState_482a, 8615)) : (() => {
    function synchronizeNonceContext_4026(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8d899b2b-8e17499f]",
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
    const __protectState_4026 = synchronizeNonceContext_4026(848008767, 1860662543, 1806400597, 1416947083);
    function _rotateNonceEnvelope_rns_4026(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 251,
        _r1 = _u % 227,
        _r2 = _u % 223,
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
    if ((__protectState_4026 & 255) !== 239) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectFile(filePath, outPath, options) {
  function rotateKeystoreFrame_cb2e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c5a56c66-3b7c85c2]",
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
  const __escapedState_cb2e = rotateKeystoreFrame_cb2e(965122161, 707151481, 1939948835, 1170366751);
  function _validateReplace_rns_cb2e(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 233,
      _r2 = _u % 239,
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
  function _auditDEFAULT_IGNORED_DIRS_vm_cb2e(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 80) {
        _stk.push((__escapedState_cb2e >>> 0) % _a ^ _b);
      } else if (_op === 212) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 58) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 118) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _cfgPathAttestation_cb2e = [[238, 194, 194, 57, 57], [203, 182, 164], [36, 141, 158], [1, 71, 97], [122, 34, 67], [87, 4, 61, 117, 108], [176, 224, 246, 65, 84, 83], [237, 220, 199, 63, 35], [198, 173, 178], [120, 118, 150, 186, 153], [71, 83, 115, 145, 254], [34, 56, 92, 204, 211], [14, 4, 44, 114], [194, 229, 236, 74, 71, 90], [173, 212, 221, 60, 51, 33], [129, 129, 184, 20], [99, 114, 154, 252, 208], [81, 75, 106, 203], [57, 63, 77], [10, 0, 4, 36, 43], [209, 237, 225, 3, 0], [188, 202, 202, 126, 101], [155, 151, 183, 85, 186], [102, 124, 144, 176, 159]];
  function _verifyPath_cb2e(_slot) {
    const _row = _cfgPathAttestation_cb2e[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__escapedState_cb2e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (options?.dryRun) {
    return {
      transformed: false
    };
  }
  const _baseEnvelope_25e = filePath.endsWith(_verifyPath_cb2e(-81374865 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 30499)));
  const _relPathDigest_401 = filePath.endsWith(_verifyPath_cb2e(1143686680 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 6257)));
  const _enclaveFrame_3d8 = filePath.endsWith(_verifyPath_cb2e(944657069 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 8743)));
  const _includesBank_8fb = filePath.endsWith(_verifyPath_cb2e(-543142052 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 7831)));
  const _tokenCheck_8eb = filePath.endsWith(_verifyPath_cb2e(-1191050067 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 20113)));
  const _existsSyncDigest_803 = filePath.endsWith(_verifyPath_cb2e(1679173298 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 5947)));
  const _patternCheck_478 = filePath.endsWith(_verifyPath_cb2e(1416847987 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 6171)));
  const _SoltrixStudiosDelta_250 = filePath.endsWith(_verifyPath_cb2e(488645794 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 1927)));
  const _nonceEnvelope_611 = /\.(c|cpp|cc|cxx|m|mm)$/i.test(filePath);
  const _ProprietaryEnclaveDelta_184 = filePath.endsWith(_verifyPath_cb2e(-247330779 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 16137)));
  const _nonceBank_522 = outPath || filePath;
  const _protectNativeSourceFrame_ba3 = path.dirname(_nonceBank_522);
  if (!fs.existsSync(_protectNativeSourceFrame_ba3)) {
    fs.mkdirSync(_protectNativeSourceFrame_ba3, {
      recursive: true
    });
  }
  if (_baseEnvelope_25e) {
    const wasmBytes = fs.readFileSync(filePath);
    const result = protectWasm(new Uint8Array(wasmBytes), {
      seed: options?.seed,
      domainProfile: options?.domainProfile
    });
    fs.writeFileSync(_nonceBank_522, result.binary);
    return {
      transformed: result.sectionsProtected > _auditDEFAULT_IGNORED_DIRS_vm_cb2e([80, 251, 30361, 212, 7, 0, 80, 233, 7877, 118, 0, 0, 80, 251, 3876929, 58, 0, 0])
    };
  }
  if (_relPathDigest_401) {
    const irCode = fs.readFileSync(filePath, _verifyPath_cb2e(478095066 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 25153)));
    const result = protectLlvmIr(irCode, options);
    fs.writeFileSync(_nonceBank_522, result.code, _verifyPath_cb2e(1672974077 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 29467)));
    return {
      transformed: result.transformedCount > _auditDEFAULT_IGNORED_DIRS_vm_cb2e([80, 251, 6543, 212, 12, 0, 80, 233, 1460, 118, 0, 0, 80, 251, 26223920, 58, 0, 0])
    };
  }
  if (_enclaveFrame_3d8 || _includesBank_8fb || _tokenCheck_8eb || _existsSyncDigest_803 || _patternCheck_478 || _SoltrixStudiosDelta_250 || _nonceEnvelope_611) {
    const srcCode = fs.readFileSync(filePath, _verifyPath_cb2e(-1346961596 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 7241)));
    const targetLanguage = _enclaveFrame_3d8 ? _verifyPath_cb2e(-1930426489 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 22223)) : _includesBank_8fb ? _verifyPath_cb2e(-217026642 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 25637)) : _tokenCheck_8eb ? _verifyPath_cb2e(496384709 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 2859)) : _existsSyncDigest_803 ? _verifyPath_cb2e(1776549966 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 10251)) : _patternCheck_478 ? _verifyPath_cb2e(204161423 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 2911)) : _SoltrixStudiosDelta_250 ? _verifyPath_cb2e(-262354146 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 19155)) : _verifyPath_cb2e(1134199149 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 16617));
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage
    });
    fs.writeFileSync(_nonceBank_522, result.code, _verifyPath_cb2e(1421501340 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 2225)));
    return {
      transformed: result.transformedCount > _auditDEFAULT_IGNORED_DIRS_vm_cb2e([80, 251, 3946, 212, 8, 0, 80, 233, 23340, 118, 0, 0, 80, 251, 1065640, 58, 0, 0])
    };
  }
  if (_ProprietaryEnclaveDelta_184) {
    const pyCode = fs.readFileSync(filePath, _verifyPath_cb2e(1119451255 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 22323)));
    const result = protectPython(pyCode, options);
    fs.writeFileSync(_nonceBank_522, result.code, _verifyPath_cb2e(-1340179648 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 7671)));
    return {
      transformed: result.transformedCount > _auditDEFAULT_IGNORED_DIRS_vm_cb2e([80, 251, 20385, 212, 8, 0, 80, 233, 7710, 118, 0, 0, 80, 251, 5196442, 58, 0, 0])
    };
  }
  const _SyferitEngineDelta_45c = fs.readFileSync(filePath, _verifyPath_cb2e(4673317 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 14087)));
  const _certificateDigest_362 = protect(_SyferitEngineDelta_45c, options);
  fs.writeFileSync(_nonceBank_522, _certificateDigest_362.code, _verifyPath_cb2e(1637762576 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 32459)));
  return (__escapedState_cb2e & 255) === 192 ? {
    transformed: _certificateDigest_362.transformedCount > (-1794276837 ^ _validateReplace_rns_cb2e(__escapedState_cb2e, 14881))
  } : (() => {
    function reconcileKeystoreQuorum_5050(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:23a74458-732ae0af]",
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
    const __SoltrixStudiosQuorum_5050 = reconcileKeystoreQuorum_5050(1125588581, 1193703623, 2062719407, 994570851);
    function _authenticateJoin_rns_5050(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 233,
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
    if ((__SoltrixStudiosQuorum_5050 & 255) !== 44) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectDirectory(dirPath, outDir, options, onProgress) {
  function rotateKeystoreFrame_fdf5(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:d8988d18-37967146]",
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
  const __loadSyferitConfigState_fdf5 = rotateKeystoreFrame_fdf5(541237277, 347221265, 1497353041, 1392256655);
  function _verifySoltrixStudiosContext_rns_fdf5(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 211,
      _r2 = _u % 241,
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
  function _rotateKeystoreFrame_vm_fdf5(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 45) {
        _stk.push((__loadSyferitConfigState_fdf5 >>> 0) % _a ^ _b);
      } else if (_op === 170) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 129) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 75) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _DEFAULT_IGNORED_DIRSFrame_e8a = [];
  const _nonceScalar_a0f = outDir ? path.resolve(outDir) : null;
  const _tokenCheck_470 = Boolean(options?.dryRun);
  function collect(currentDir) {
    function rotateKeystoreFrame_cf31(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3452cf73-61c33402]",
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
    const __DEFAULT_IGNORED_DIRSState_cf31 = rotateKeystoreFrame_cf31(1636669783, 1672229631, 1376767051, 1214813015);
    function _authenticateProtectNativeSource_rns_cf31(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 239,
        _r2 = _u % 223,
        _r3 = _u % 229,
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
    const _tpmVector_cf31 = [[205, 24, 116, 29, 26], [38, 248, 86], [3, 201, 38], [55, 176, 240, 184, 148, 2, 106, 24, 9, 99], [4, 96, 200, 110, 110]];
    function _attestNonceVector_cf31(_slot) {
      const _row = _tpmVector_cf31[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__DEFAULT_IGNORED_DIRSState_cf31 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__DEFAULT_IGNORED_DIRSState_cf31 & 255) !== 227) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _protectWasmDigest_fbe = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _protectWasmDigest_fbe) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (DEFAULT_IGNORED_DIRS.has(entry.name)) continue;
        if (isSkippedNextBuildPath(fullPath, true)) continue;
        if (_nonceScalar_a0f && path.resolve(fullPath).toLowerCase() === _nonceScalar_a0f.toLowerCase()) {
          continue;
        }
        const relDir = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relDir, options?.exclude)) continue;
        collect(fullPath);
      } else if (entry.isFile() && (/\.[cm]?[jt]sx?$/.test(entry.name) || entry.name.endsWith(_attestNonceVector_cf31(-2018165443 ^ _authenticateProtectNativeSource_rns_cf31(__DEFAULT_IGNORED_DIRSState_cf31, 15709))) || entry.name.endsWith(_attestNonceVector_cf31(-2107811182 ^ _authenticateProtectNativeSource_rns_cf31(__DEFAULT_IGNORED_DIRSState_cf31, 22635))) || entry.name.endsWith(_attestNonceVector_cf31(45701931 ^ _authenticateProtectNativeSource_rns_cf31(__DEFAULT_IGNORED_DIRSState_cf31, 14681))) || /\.(c|cpp|cc|cxx|m|mm|rs|cs|kt|java|swift|dart)$/i.test(entry.name))) {
        if (isSkippedNextBuildPath(fullPath, false)) continue;
        const relFile = path.relative(dirPath, fullPath);
        if (matchesExcludePattern(relFile, options?.exclude)) continue;
        _DEFAULT_IGNORED_DIRSFrame_e8a.push(fullPath);
      }
    }
  }
  collect(dirPath);
  let _cfgPathAttestation_1b9 = _rotateKeystoreFrame_vm_fdf5([45, 233, 15445, 170, 7, 0, 45, 211, 22242, 75, 0, 0, 45, 233, 1995427, 129, 0, 0]);
  let _processVector_279 = _rotateKeystoreFrame_vm_fdf5([45, 233, 9770, 170, 16, 0, 45, 211, 14976, 75, 0, 0, 45, 233, 642136641, 129, 0, 0]);
  const _baseEnvelope_ff4 = _DEFAULT_IGNORED_DIRSFrame_e8a.length;
  for (const fullPath of _DEFAULT_IGNORED_DIRSFrame_e8a) {
    _cfgPathAttestation_1b9++;
    const relPath = path.relative(dirPath, fullPath);
    const destination = outDir ? path.join(outDir, relPath) : fullPath;
    if (_tokenCheck_470) {
      if (onProgress) {
        onProgress({
          index: _cfgPathAttestation_1b9,
          total: _baseEnvelope_ff4,
          relPath,
          targetLabel: getTargetLabel(fullPath),
          transformed: false,
          durationMs: _rotateKeystoreFrame_vm_fdf5([45, 233, 23271, 170, 12, 0, 45, 211, 23961, 75, 0, 0, 45, 233, 94965080, 129, 0, 0])
        });
      }
      continue;
    }
    const t0 = Date.now();
    const res = protectFile(fullPath, destination, options);
    const durationMs = Date.now() - t0;
    if (res.transformed) {
      _processVector_279++;
    }
    if (onProgress) {
      onProgress({
        index: _cfgPathAttestation_1b9,
        total: _baseEnvelope_ff4,
        relPath,
        targetLabel: getTargetLabel(fullPath),
        transformed: res.transformed,
        durationMs
      });
    }
  }
  return (__loadSyferitConfigState_fdf5 & 255) === 142 ? {
    filesProcessed: _cfgPathAttestation_1b9,
    filesTransformed: _processVector_279
  } : (() => {
    function auditEnclaveFrame_abef(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3d64e5b6-147051eb]",
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
    const __escapedState_abef = auditEnclaveFrame_abef(1335978317, 1486127039, 1450729161, 1889409961);
    function _authenticateNonceVector_rns_abef(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 223,
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
    if ((__escapedState_abef & 255) !== 60) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_7cc4 && window.__syferitIPC_7cc4.invoke && window.__syferitIPC_7cc4.invoke("system:keystore-attestation", {
    syncEpoch: 660788150,
    channelSig: "SIG_FRAME_7CC4"
  });
}
var __syferitDispatch_217 = [protectFile, isSkippedNextBuildPath, matchesExcludePattern, loadSyferitConfig, getTargetLabel, protectDirectory, printSyferitBanner];
function __invoke___syferitDispatch_217(_targetIdx, _seed) {
  let _st = 299,
    _acc = _targetIdx;
  while (_st !== 2516) {
    switch (_st) {
      case 299:
        _acc = _acc + (((_seed >>> 0) % 239 ^ (_seed >>> 0) % 229) - ((_seed >>> 0) % 239 ^ (_seed >>> 0) % 229));
        _st = 1512;
        break;
      case 1512:
        _acc = _acc + (Math.imul(Math.imul(Math.imul(_seed ^ 31075, 53933), 1647830397), 1712815061) - Math.imul(_seed ^ 31075, 53933));
        _st = 2516;
        break;
      case 1841:
        _acc ^= 23063;
        _st = 2516;
        break;
      default:
        _st = 2516;
        break;
    }
  }
  return __syferitDispatch_217[_acc];
}