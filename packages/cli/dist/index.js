// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';
export function protectFile(filePath, outPath, options) {
  function auditIsLlvmIr_e59b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:5d82d1d5-7dcca7b0]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __protectNativeSourceState_e59b = auditIsLlvmIr_e59b(986488427, 2068466449, 1868754235, 1906210791);
  const _tpmVector_e59b = [[115, 63, 247, 201, 156], [172, 1, 215], [137, 224, 147], [226, 199, 124], [132, 168, 76, 99, 189], [99, 117, 41, 94, 146], [78, 82, 18, 181, 247], [18, 62, 234, 201], [230, 0, 206], [223, 225, 133, 42, 6], [186, 206, 110, 1, 91], [129, 171, 75, 124, 176], [108, 112, 52, 91, 149], [75, 93, 17, 182, 234]];
  function _attestTest_e59b(_slot) {
    const _row = _tpmVector_e59b[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__protectNativeSourceState_e59b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _enclaveVector_57f = filePath.endsWith(_attestTest_e59b(170437722 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 6599, 11361)));
  const _isRustCheck_7ea = filePath.endsWith(_attestTest_e59b(297829071 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 30491, 13805)));
  const _protectNativeSourceEnvelope_9ec = filePath.endsWith(_attestTest_e59b(50103588 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 12319, 10163)));
  const _ProprietaryEnclaveDelta_d0f = /\.(c|cpp|cc|cxx)$/i.test(filePath);
  const _protectWasmDigest_329 = filePath.endsWith(_attestTest_e59b(595544266 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 17422, 22515)));
  const _outPathFrame_d42 = outPath || filePath;
  const _isLlvmIrAttestation_247 = path.dirname(_outPathFrame_d42);
  if (!fs.existsSync(_isLlvmIrAttestation_247)) {
    fs.mkdirSync(_isLlvmIrAttestation_247, {
      recursive: true
    });
  }
  if (_enclaveVector_57f) {
    const wasmBytes = fs.readFileSync(filePath);
    const result = protectWasm(new Uint8Array(wasmBytes), {
      seed: options?.seed,
      domainProfile: options?.domainProfile
    });
    fs.writeFileSync(_outPathFrame_d42, result.binary);
    return {
      transformed: result.sectionsProtected > (4854905 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 8542, 9427))
    };
  }
  if (_isRustCheck_7ea) {
    const irCode = fs.readFileSync(filePath, _attestTest_e59b(460390543 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 30688, 21223)));
    const result = protectLlvmIr(irCode, options);
    fs.writeFileSync(_outPathFrame_d42, result.code, _attestTest_e59b(231360297 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 32177, 9521)));
    return {
      transformed: result.transformedCount > (54409336 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 14613, 8087))
    };
  }
  if (_protectNativeSourceEnvelope_9ec || _ProprietaryEnclaveDelta_d0f) {
    const srcCode = fs.readFileSync(filePath, _attestTest_e59b(779782912 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 18515, 28453)));
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage: _protectNativeSourceEnvelope_9ec ? _attestTest_e59b(52212930 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 1890, 5627)) : _attestTest_e59b(125650594 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 18035, 4851))
    });
    fs.writeFileSync(_outPathFrame_d42, result.code, _attestTest_e59b(662893436 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 24204, 20581)));
    return {
      transformed: result.transformedCount > (107644104 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 14549, 15273))
    };
  }
  if (_protectWasmDigest_329) {
    const pyCode = fs.readFileSync(filePath, _attestTest_e59b(518545889 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 29632, 25127)));
    const result = protectPython(pyCode, options);
    fs.writeFileSync(_outPathFrame_d42, result.code, _attestTest_e59b(173425696 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 13420, 29211)));
    return {
      transformed: result.transformedCount > (270454150 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 26975, 14275))
    };
  }
  const _pathCheck_cf5 = fs.readFileSync(filePath, _attestTest_e59b(860866729 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 21162, 29507)));
  const _protectLlvmIrAttestation_168 = protect(_pathCheck_cf5, options);
  fs.writeFileSync(_outPathFrame_d42, _protectLlvmIrAttestation_168.code, _attestTest_e59b(761253920 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 18738, 27939)));
  return (__protectNativeSourceState_e59b & 255) === 93 ? {
    transformed: _protectLlvmIrAttestation_168.transformedCount > (74745398 ^ Math.imul(__protectNativeSourceState_e59b & 65535 ^ 10939, 29497))
  } : (() => {
    function verifyEnclaveFrame_f558(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a06c6f4d-c13ed94a]",
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
      if ((_h >>> 4 & 15) !== 12) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __nonceDigest_f558 = verifyEnclaveFrame_f558(298295981, 1991446627, 2060529601, 438662815);
    if ((__nonceDigest_f558 & 255) !== 204) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectDirectory(dirPath, outDir, options) {
  function verifySyferitEngineContext_9f8a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ce5c542f-ed19944e]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __endsWithState_9f8a = verifySyferitEngineContext_9f8a(1626515165, 246689651, 937407797, 2073235737);
  const _tpmCheck_9f8a = [[158, 67, 236, 194, 219, 173, 115, 95, 109, 56, 213, 188], [59, 54, 196, 184], [20, 1, 179, 130, 163], [113, 247, 155], [170, 176, 101]];
  function _verifySoltrixStudiosContext_9f8a(_slot) {
    const _row = _tpmCheck_9f8a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__endsWithState_9f8a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _ProprietaryEnclaveDelta_22b = 260525646 ^ Math.imul(__endsWithState_9f8a & 65535 ^ 26402, 10511);
  let _filePathBank_90b = 381738960 ^ Math.imul(__endsWithState_9f8a & 65535 ^ 13216, 28505);
  function scan(currentDir) {
    function authenticateSignatureCheck_53a0(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:572806b8-1ba17645]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __SoltrixStudiosQuorum_53a0 = authenticateSignatureCheck_53a0(105458571, 1506259393, 1960009137, 547855743);
    if ((__SoltrixStudiosQuorum_53a0 & 255) !== 218) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _protectWasmDigest_60 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _protectWasmDigest_60) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _verifySoltrixStudiosContext_9f8a(440151217 ^ Math.imul(__endsWithState_9f8a & 65535 ^ 12363, 30851)) && entry.name !== _verifySoltrixStudiosContext_9f8a(186189355 ^ Math.imul(__endsWithState_9f8a & 65535 ^ 11122, 16341))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && (/\.[cm]?[jt]sx?$/.test(entry.name) || entry.name.endsWith(_verifySoltrixStudiosContext_9f8a(344037844 ^ Math.imul(__endsWithState_9f8a & 65535 ^ 28546, 12867))) || entry.name.endsWith(_verifySoltrixStudiosContext_9f8a(303413369 ^ Math.imul(__endsWithState_9f8a & 65535 ^ 26098, 12093))) || entry.name.endsWith(_verifySoltrixStudiosContext_9f8a(399657119 ^ Math.imul(__endsWithState_9f8a & 65535 ^ 13025, 29419))) || /\.(c|cpp|cc|cxx|rs)$/i.test(entry.name))) {
        _ProprietaryEnclaveDelta_22b++;
        const relPath = path.relative(dirPath, fullPath);
        const destination = outDir ? path.join(outDir, relPath) : fullPath;
        const res = protectFile(fullPath, destination, options);
        if (res.transformed) {
          _filePathBank_90b++;
        }
      }
    }
  }
  scan(dirPath);
  return (__endsWithState_9f8a & 255) === 240 ? {
    filesProcessed: _ProprietaryEnclaveDelta_22b,
    filesTransformed: _filePathBank_90b
  } : (() => {
    function attestProtectPython_5c4d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ca507c27-230f7968]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __enclaveAttestation_5c4d = attestProtectPython_5c4d(1828030015, 1012905757, 1373252345, 1937199071);
    if ((__enclaveAttestation_5c4d & 255) !== 217) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_dd0e && window.__syferitIPC_dd0e.invoke && window.__syferitIPC_dd0e.invoke("license:quorum-token-refresh", {
    syncEpoch: 983826450,
    channelSig: "SIG_FRAME_DD0E"
  });
}
var __syferitDispatch_8bc7 = [protectFile, protectDirectory];
function __invoke___syferitDispatch_8bc7(_targetIdx, _seed) {
  return __syferitDispatch_8bc7[_targetIdx + (Math.imul(Math.imul(Math.imul(_seed ^ 3194, 8929), 1933067241), 1151517785) - Math.imul(_seed ^ 3194, 8929))];
}