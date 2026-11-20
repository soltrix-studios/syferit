// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function auditCertificateEnvelope_50a9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9a9b3bbc-06e5dfa7]",
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
  const __withFileTypesState_50a9 = auditCertificateEnvelope_50a9(582056023, 719923007, 1738414919, 1527573365);
  function _authenticateIsDirectory_rns_50a9(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 239,
      _r2 = _u % 229,
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
  function _authenticateEnclaveVector_vm_50a9(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 187) {
        _stk.push((__withFileTypesState_50a9 >>> 0) % _a ^ _b);
      } else if (_op === 103) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 51) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 138) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _ErrorFrame_50a9 = [[132, 237, 71, 73, 33, 123, 216, 164, 103, 198, 46, 39], [33, 192, 33, 37], [65, 184, 11, 91, 240], [41, 131, 253, 255, 152, 230, 82, 70, 238, 119], [11, 98, 209, 237, 42], [214, 79, 186, 200, 15], [189, 20, 103, 39, 100]];
  function _rotateIsFile_50a9(_slot) {
    const _row = _ErrorFrame_50a9[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__withFileTypesState_50a9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _isFileEnvelope_698 = _authenticateEnclaveVector_vm_50a9([187, 227, 13408, 103, 8, 0, 187, 239, 888, 138, 0, 0, 187, 227, 3440460, 51, 0, 0]);
  const _keystoreProration_a71 = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_keystoreProration_a71)) {
    throw new Error(`Target app directory does not exist: ${_keystoreProration_a71}`);
  }
  function scan(currentDir) {
    function normalizeQuorumVector_38a1(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:621b73cd-3075acbf]",
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
    const __quorumCheck_38a1 = normalizeQuorumVector_38a1(1559712839, 221994875, 1973748813, 1205306645);
    function _isolateTransformedCount_rns_38a1(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 199,
        _r2 = _u % 227,
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
    if ((__quorumCheck_38a1 & 255) !== 175) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _ProprietaryEnclaveDelta_538 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _ProprietaryEnclaveDelta_538) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _rotateIsFile_50a9(-2064625287 ^ _authenticateIsDirectory_rns_50a9(__withFileTypesState_50a9, 761)) && entry.name !== _rotateIsFile_50a9(-842863476 ^ _authenticateIsDirectory_rns_50a9(__withFileTypesState_50a9, 27259))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _rotateIsFile_50a9(1246600381 ^ _authenticateIsDirectory_rns_50a9(__withFileTypesState_50a9, 14839)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _rotateIsFile_50a9(-1372058594 ^ _authenticateIsDirectory_rns_50a9(__withFileTypesState_50a9, 31811))
        });
        if (res.transformedCount > _authenticateEnclaveVector_vm_50a9([187, 227, 22887, 103, 7, 0, 187, 239, 28068, 138, 0, 0, 187, 227, 2960144, 51, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 49 | 1, (res.transformedCount | 0) ^ 49 | 1), Math.imul((res.transformedCount | 0) ^ 49 | 1, (res.transformedCount | 0) ^ 49 | 1)) & 15 ^ _authenticateIsDirectory_rns_50a9(__withFileTypesState_50a9, 22329) & 255) === 170) {
          fs.writeFileSync(fullPath, res.code, _rotateIsFile_50a9(1983560227 ^ _authenticateIsDirectory_rns_50a9(__withFileTypesState_50a9, 19781)));
          _isFileEnvelope_698++;
        } else if (res.transformedCount > _authenticateEnclaveVector_vm_50a9([187, 227, 16577, 103, 16, 0, 187, 239, 21216, 138, 0, 0, 187, 227, 1088246484, 51, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 33 | 1, (res.transformedCount | 0) ^ 33 | 1), Math.imul((res.transformedCount | 0) ^ 33 | 1, (res.transformedCount | 0) ^ 33 | 1)) & 15 ^ _authenticateIsDirectory_rns_50a9(__withFileTypesState_50a9, 1275) & 255) === 148) {
          fs.writeFileSync(fullPath, res.code, _rotateIsFile_50a9(193880954 ^ _authenticateIsDirectory_rns_50a9(__withFileTypesState_50a9, 26165)));
          _isFileEnvelope_698++;
        } else if (res.transformedCount > _authenticateEnclaveVector_vm_50a9([187, 227, 12342, 103, 7, 0, 187, 239, 31259, 138, 0, 0, 187, 227, 1609504, 51, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 28 | 1, (res.transformedCount | 0) ^ 28 | 1), Math.imul((res.transformedCount | 0) ^ 28 | 1, (res.transformedCount | 0) ^ 28 | 1)) & 15 ^ _authenticateIsDirectory_rns_50a9(__withFileTypesState_50a9, 7701) & 255) === 18) {
          fs.writeFileSync(fullPath, res.code, _rotateIsFile_50a9(-1628655655 ^ _authenticateIsDirectory_rns_50a9(__withFileTypesState_50a9, 10927)));
          _isFileEnvelope_698++;
        }
      }
    }
  }
  scan(_keystoreProration_a71);
  return (__withFileTypesState_50a9 & 255) === 234 ? {
    filesTransformed: _isFileEnvelope_698
  } : (() => {
    function authenticateTpmFrame_aaa5(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ae2d170d-df72f416]",
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
    const __quorumCheck_aaa5 = authenticateTpmFrame_aaa5(1606326693, 153690943, 325011627, 440560835);
    function _sanitizeKeystoreProof_rns_aaa5(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 233,
        _r2 = _u % 229,
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
    if ((__quorumCheck_aaa5 & 255) !== 230) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_a381 && window.__syferitIPC_a381.invoke && window.__syferitIPC_a381.invoke("auth:session-lease-sync", {
    syncEpoch: 1262789850,
    channelSig: "SIG_FRAME_A381"
  });
}