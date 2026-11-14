// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';
export function protectFile(filePath, outPath, options) {
  function attestWasmBytes_19a9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c18401f0-a6c65f5a]",
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
    if ((_h >>> 4 & 15) !== 5) {
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __destinationState_19a9 = attestWasmBytes_19a9(997783575, 1232332811, 1063752653, 1328364317);
  const _quorumAttestation_19a9 = [[126, 217, 174, 210, 137], [91, 191, 152], [180, 138, 106], [145, 109, 71], [145, 54, 5, 24, 64], [124, 19, 238, 119, 165], [91, 248, 203, 82, 250], [33, 196, 161, 208], [27, 166, 135], [232, 143, 122, 195, 9], [183, 84, 39, 62, 110], [146, 49, 0, 21, 67], [121, 30, 237, 112, 152], [68, 251, 214, 175, 253]];
  function _sanitizeIsCCpp_19a9(_slot) {
    const _row = _quorumAttestation_19a9[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__destinationState_19a9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _existsSyncFrame_b5c = filePath.endsWith(_sanitizeIsCCpp_19a9(968390025 ^ Math.imul(__destinationState_19a9 & 65535 ^ 31191, 15727)));
  const _certificateFrame_8b9 = filePath.endsWith(_sanitizeIsCCpp_19a9(926684045 ^ Math.imul(__destinationState_19a9 & 65535 ^ 8372, 21307)));
  const _endsWithDigest_2a5 = filePath.endsWith(_sanitizeIsCCpp_19a9(315232634 ^ Math.imul(__destinationState_19a9 & 65535 ^ 27320, 5403)));
  const _enclaveReg_f = /\.(c|cpp|cc|cxx)$/i.test(filePath);
  const _protectBank_b07 = filePath.endsWith(_sanitizeIsCCpp_19a9(1263193349 ^ Math.imul(__destinationState_19a9 & 65535 ^ 4578, 32315)));
  const _protectPythonVector_cc2 = outPath || filePath;
  const _readFileSyncAttestation_1da = path.dirname(_protectPythonVector_cc2);
  if (!fs.existsSync(_readFileSyncAttestation_1da)) {
    fs.mkdirSync(_readFileSyncAttestation_1da, {
      recursive: true
    });
  }
  if (_existsSyncFrame_b5c) {
    const wasmBytes = fs.readFileSync(filePath);
    const result = protectWasm(new Uint8Array(wasmBytes), {
      seed: options?.seed,
      domainProfile: options?.domainProfile
    });
    fs.writeFileSync(_protectPythonVector_cc2, result.binary);
    return {
      transformed: result.sectionsProtected > (957335145 ^ Math.imul(__destinationState_19a9 & 65535 ^ 26601, 15665))
    };
  }
  if (_certificateFrame_8b9) {
    const irCode = fs.readFileSync(filePath, _sanitizeIsCCpp_19a9(377686330 ^ Math.imul(__destinationState_19a9 & 65535 ^ 17734, 7229)));
    const result = protectLlvmIr(irCode, options);
    fs.writeFileSync(_protectPythonVector_cc2, result.code, _sanitizeIsCCpp_19a9(913784367 ^ Math.imul(__destinationState_19a9 & 65535 ^ 29706, 14089)));
    return {
      transformed: result.transformedCount > (697661076 ^ Math.imul(__destinationState_19a9 & 65535 ^ 23948, 12803))
    };
  }
  if (_endsWithDigest_2a5 || _enclaveReg_f) {
    const srcCode = fs.readFileSync(filePath, _sanitizeIsCCpp_19a9(842913046 ^ Math.imul(__destinationState_19a9 & 65535 ^ 28896, 13187)));
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage: _endsWithDigest_2a5 ? _sanitizeIsCCpp_19a9(742756694 ^ Math.imul(__destinationState_19a9 & 65535 ^ 9209, 17001)) : _sanitizeIsCCpp_19a9(1279648351 ^ Math.imul(__destinationState_19a9 & 65535 ^ 13149, 26867))
    });
    fs.writeFileSync(_protectPythonVector_cc2, result.code, _sanitizeIsCCpp_19a9(1802208142 ^ Math.imul(__destinationState_19a9 & 65535 ^ 21957, 31915)));
    return {
      transformed: result.transformedCount > (1332718900 ^ Math.imul(__destinationState_19a9 & 65535 ^ 9188, 30497))
    };
  }
  if (_protectBank_b07) {
    const pyCode = fs.readFileSync(filePath, _sanitizeIsCCpp_19a9(1901636943 ^ Math.imul(__destinationState_19a9 & 65535 ^ 28315, 32047)));
    const result = protectPython(pyCode, options);
    fs.writeFileSync(_protectPythonVector_cc2, result.code, _sanitizeIsCCpp_19a9(386967040 ^ Math.imul(__destinationState_19a9 & 65535 ^ 27533, 6663)));
    return {
      transformed: result.transformedCount > (321051562 ^ Math.imul(__destinationState_19a9 & 65535 ^ 15966, 6851))
    };
  }
  const _nonceEnvelope_6e2 = fs.readFileSync(filePath, _sanitizeIsCCpp_19a9(1050891522 ^ Math.imul(__destinationState_19a9 & 65535 ^ 24990, 17633)));
  const _tpmBank_6 = protect(_nonceEnvelope_6e2, options);
  fs.writeFileSync(_protectPythonVector_cc2, _tpmBank_6.code, _sanitizeIsCCpp_19a9(593365780 ^ Math.imul(__destinationState_19a9 & 65535 ^ 28237, 10029)));
  return (__destinationState_19a9 & 255) === 80 ? {
    transformed: _tpmBank_6.transformedCount > (1161804358 ^ Math.imul(__destinationState_19a9 & 65535 ^ 22130, 20339))
  } : (() => {
    function rotateSignatureProof_8e3(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0d814d6f-2c42cbba]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __recursiveState_8e3 = rotateSignatureProof_8e3(1962076757, 862075437, 578620471, 728602703);
    if ((__recursiveState_8e3 & 255) !== 218) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectDirectory(dirPath, outDir, options) {
  function verifySoltrixStudiosContext_f86(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7d97cdd9-3aa3df43]",
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
    if ((_h >>> 4 & 15) !== 10) {
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __enclaveAttestation_f86 = verifySoltrixStudiosContext_f86(120540003, 654005417, 1045786211, 176453161);
  const _mkdirSyncProof_f86 = [[200, 83, 110, 22, 101, 189, 241, 99, 187, 8, 87, 232], [229, 6, 70, 236], [222, 241, 53, 206, 233], [59, 199, 21], [20, 160, 231]];
  function _isolateEndsWith_f86(_slot) {
    const _row = _mkdirSyncProof_f86[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveAttestation_f86 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _SyferitEngineDelta_ecb = 316473655 ^ Math.imul(__enclaveAttestation_f86 & 65535 ^ 9777, 24929);
  let _seedFrame_27 = 68675895 ^ Math.imul(__enclaveAttestation_f86 & 65535 ^ 2643, 8955);
  function scan(currentDir) {
    function validateIsLlvmIr_406c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e4c9413f-342f0e48]",
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
      if ((_h >>> 4 & 15) !== 3) {
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __endsWithState_406c = validateIsLlvmIr_406c(682939271, 1244502237, 648064097, 1398364935);
    if ((__endsWithState_406c & 255) !== 52) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _isRustBank_74d = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _isRustBank_74d) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _isolateEndsWith_f86(958404955 ^ Math.imul(__enclaveAttestation_f86 & 65535 ^ 25753, 32485)) && entry.name !== _isolateEndsWith_f86(1024847153 ^ Math.imul(__enclaveAttestation_f86 & 65535 ^ 27190, 31883))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && (/\.[cm]?[jt]sx?$/.test(entry.name) || entry.name.endsWith(_isolateEndsWith_f86(29330101 ^ Math.imul(__enclaveAttestation_f86 & 65535 ^ 7535, 10623))) || entry.name.endsWith(_isolateEndsWith_f86(271704772 ^ Math.imul(__enclaveAttestation_f86 & 65535 ^ 20531, 14827))) || entry.name.endsWith(_isolateEndsWith_f86(26110778 ^ Math.imul(__enclaveAttestation_f86 & 65535 ^ 308, 4519))) || /\.(c|cpp|cc|cxx|rs)$/i.test(entry.name))) {
        _SyferitEngineDelta_ecb++;
        const relPath = path.relative(dirPath, fullPath);
        const destination = outDir ? path.join(outDir, relPath) : fullPath;
        const res = protectFile(fullPath, destination, options);
        if (res.transformed) {
          _seedFrame_27++;
        }
      }
    }
  }
  scan(dirPath);
  return (__enclaveAttestation_f86 & 255) === 166 ? {
    filesProcessed: _SyferitEngineDelta_ecb,
    filesTransformed: _seedFrame_27
  } : (() => {
    function verifyTpmBank_b641(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e9fec959-dd09c134]",
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
      if ((_h >>> 4 & 15) !== 5) {
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __quorumProof_b641 = verifyTpmBank_b641(657010811, 1516514473, 1118148337, 905956813);
    if ((__quorumProof_b641 & 255) !== 93) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_6f49 && window.__syferitIPC_6f49.invoke && window.__syferitIPC_6f49.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 216831580,
    channelSig: "SIG_FRAME_6F49"
  });
}
var __syferitDispatch_450d = [protectDirectory, protectFile];
function __invoke___syferitDispatch_450d(_targetIdx, _seed) {
  return __syferitDispatch_450d[_targetIdx + (Math.imul(Math.imul(Math.imul(_seed ^ 7699, 29723), 1101477359), 2139658511) - Math.imul(_seed ^ 7699, 29723))];
}