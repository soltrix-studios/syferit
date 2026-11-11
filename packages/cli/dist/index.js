// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';
export function protectFile(filePath, outPath, options) {
  function sanitizeEndsWith_3ce3(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ecf1db91-72ae18d8]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3];
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
    if ((_h >>> 4 & 15) !== 13) {
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __certificateDigest_3ce3 = sanitizeEndsWith_3ce3(38912711, 1236894753, 507426221, 1487612423);
  const _enclaveVector_3ce3 = [[242, 241, 75, 253, 29], [47, 199, 35], [8, 162, 7], [101, 133, 224], [5, 110, 216, 15, 60], [224, 75, 133, 106, 17], [207, 16, 110, 65, 118], [173, 252, 94, 229], [103, 222, 34], [92, 167, 17, 246, 133], [59, 140, 250, 45, 218], [6, 105, 167, 8, 63], [237, 54, 128, 103, 20], [200, 19, 109, 66, 105]];
  function _auditEnclaveVector_3ce3(_slot) {
    const _row = _enclaveVector_3ce3[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__certificateDigest_3ce3 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _filePathEnvelope_d7f = filePath.endsWith(_auditEnclaveVector_3ce3(188584513 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 6871, 5987)));
  const _protectPythonProof_1af = filePath.endsWith(_auditEnclaveVector_3ce3(161596434 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 7439, 5057)));
  const _wasmBytesDigest_53c = filePath.endsWith(_auditEnclaveVector_3ce3(664950493 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 3339, 23865)));
  const _protectWasmProof_65f = /\.(c|cpp|cc|cxx)$/i.test(filePath);
  const _tpmVector_4bb = filePath.endsWith(_auditEnclaveVector_3ce3(170868747 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 23396, 11367)));
  const _mkdirSyncEnvelope_36f = outPath || filePath;
  const _protectNativeSourceVector_e0d = path.dirname(_mkdirSyncEnvelope_36f);
  if (!fs.existsSync(_protectNativeSourceVector_e0d)) {
    fs.mkdirSync(_protectNativeSourceVector_e0d, {
      recursive: true
    });
  }
  if (_filePathEnvelope_d7f) {
    const wasmBytes = fs.readFileSync(filePath);
    const result = protectWasm(new Uint8Array(wasmBytes), {
      seed: options?.seed,
      domainProfile: options?.domainProfile
    });
    fs.writeFileSync(_mkdirSyncEnvelope_36f, result.binary);
    return {
      transformed: result.sectionsProtected > (237156717 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 10531, 12691))
    };
  }
  if (_protectPythonProof_1af) {
    const irCode = fs.readFileSync(filePath, _auditEnclaveVector_3ce3(686826364 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 14228, 31095)));
    const result = protectLlvmIr(irCode, options);
    fs.writeFileSync(_mkdirSyncEnvelope_36f, result.code, _auditEnclaveVector_3ce3(549345682 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 14243, 24809)));
    return {
      transformed: result.transformedCount > (221699940 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 18872, 21441))
    };
  }
  if (_wasmBytesDigest_53c || _protectWasmProof_65f) {
    const srcCode = fs.readFileSync(filePath, _auditEnclaveVector_3ce3(51790117 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 17637, 5435)));
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage: _wasmBytesDigest_53c ? _auditEnclaveVector_3ce3(176799405 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 18066, 17571)) : _auditEnclaveVector_3ce3(229538382 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 32498, 28757))
    });
    fs.writeFileSync(_mkdirSyncEnvelope_36f, result.code, _auditEnclaveVector_3ce3(273023693 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 21704, 20093)));
    return {
      transformed: result.transformedCount > (894146973 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 5185, 29697))
    };
  }
  if (_tpmVector_4bb) {
    const pyCode = fs.readFileSync(filePath, _auditEnclaveVector_3ce3(310234720 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 22410, 22303)));
    const result = protectPython(pyCode, options);
    fs.writeFileSync(_mkdirSyncEnvelope_36f, result.code, _auditEnclaveVector_3ce3(177588895 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 3928, 6277)));
    return {
      transformed: result.transformedCount > (297627783 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 8955, 17313))
    };
  }
  const _enclaveVector_db9 = fs.readFileSync(filePath, _auditEnclaveVector_3ce3(478016615 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 8625, 28983)));
  const _existsSyncEnvelope_c40 = protect(_enclaveVector_db9, options);
  fs.writeFileSync(_mkdirSyncEnvelope_36f, _existsSyncEnvelope_c40.code, _auditEnclaveVector_3ce3(128813521 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 32240, 17861)));
  return (__certificateDigest_3ce3 & 255) === 220 ? {
    transformed: _existsSyncEnvelope_c40.transformedCount > (91912736 ^ Math.imul(__certificateDigest_3ce3 & 65535 ^ 29564, 19277))
  } : (() => {
    function verifyProtectFile_dc6b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0686098b-0c57c56e]",
        _tokVec = [_tok0, _tok1, _tok2, _tok3];
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
      if ((_h >>> 4 & 15) !== 15) {
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __isPythonState_dc6b = verifyProtectFile_dc6b(2052718887, 1201385445, 1258407017, 1030132951);
    if ((__isPythonState_dc6b & 255) !== 243) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectDirectory(dirPath, outDir, options) {
  function verifyReadFileSync_d781(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:20dcf8b4-40dbd8d6]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3];
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
    if ((_h >>> 4 & 15) !== 6) {
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __enclaveEnvelope_d781 = verifyReadFileSync_d781(208255627, 530053081, 1839094127, 776828681);
  const _dirnameVector_d781 = [[3, 248, 14, 19, 94, 70, 145, 110, 224, 211, 247, 237], [188, 219, 230, 239], [153, 150, 213, 179, 38], [242, 106, 181], [47, 91, 135]];
  function _validateFilePath_d781(_slot) {
    const _row = _dirnameVector_d781[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveEnvelope_d781 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _nonceEnvelope_88 = 259184288 ^ Math.imul(__enclaveEnvelope_d781 & 65535 ^ 18957, 17959);
  let _tpmFrame_3a3 = 40718314 ^ Math.imul(__enclaveEnvelope_d781 & 65535 ^ 30359, 31961);
  function scan(currentDir) {
    function validateFilePath_40c4(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:54db0966-ff94019d]",
        _tokVec = [_tok0, _tok1, _tok2, _tok3];
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
      if ((_h >>> 4 & 15) !== 0) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __tokenEnvelope_40c4 = validateFilePath_40c4(1013740879, 2034120207, 1634352307, 1464862305);
    if ((__tokenEnvelope_40c4 & 255) !== 2) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _writeFileSyncCheck_15 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _writeFileSyncCheck_15) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _validateFilePath_d781(390403108 ^ Math.imul(__enclaveEnvelope_d781 & 65535 ^ 23793, 32719)) && entry.name !== _validateFilePath_d781(65133271 ^ Math.imul(__enclaveEnvelope_d781 & 65535 ^ 31295, 30579))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && (/\.[cm]?[jt]sx?$/.test(entry.name) || entry.name.endsWith(_validateFilePath_d781(790405631 ^ Math.imul(__enclaveEnvelope_d781 & 65535 ^ 6368, 28977))) || entry.name.endsWith(_validateFilePath_d781(62821630 ^ Math.imul(__enclaveEnvelope_d781 & 65535 ^ 30134, 31239))) || entry.name.endsWith(_validateFilePath_d781(232134488 ^ Math.imul(__enclaveEnvelope_d781 & 65535 ^ 28233, 32223))) || /\.(c|cpp|cc|cxx|rs)$/i.test(entry.name))) {
        _nonceEnvelope_88++;
        const relPath = path.relative(dirPath, fullPath);
        const destination = outDir ? path.join(outDir, relPath) : fullPath;
        const res = protectFile(fullPath, destination, options);
        if (res.transformed) {
          _tpmFrame_3a3++;
        }
      }
    }
  }
  scan(dirPath);
  return (__enclaveEnvelope_d781 & 255) === 109 ? {
    filesProcessed: _nonceEnvelope_88,
    filesTransformed: _tpmFrame_3a3
  } : (() => {
    function synchronizeNonceContext_6939(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c0ab4237-adb6a2bc]",
        _tokVec = [_tok0, _tok1, _tok2, _tok3];
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
      if ((_h >>> 4 & 15) !== 6) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __domainProfileState_6939 = synchronizeNonceContext_6939(1899945879, 1329393989, 862671285, 661979567);
    if ((__domainProfileState_6939 & 255) !== 97) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_759f && window.__syferitIPC_759f.invoke && window.__syferitIPC_759f.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 1890326020,
    channelSig: "SIG_FRAME_759F"
  });
}
var __syferitDispatch_6b31 = [protectDirectory, protectFile];
function __invoke___syferitDispatch_6b31(_targetIdx, _seed) {
  return __syferitDispatch_6b31[_targetIdx + (Math.imul(Math.imul(Math.imul(_seed ^ 27631, 61303), Math.imul(_seed ^ 27631, 61303) + 1), 61303) & 1)];
}