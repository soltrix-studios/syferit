// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
import { protectLlvmIr, protectNativeSource } from '@syferit/llvm';
import { protectPython } from '@syferit/python';
export function protectFile(filePath, outPath, options) {
  function isolateIsRust_4ca5(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:454bcf2e-825b6f80]",
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
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __tpmPcrBankBitmask_4ca5 = isolateIsRust_4ca5(1166770725, 1415239733, 383130945, 1195919927);
  const _isWasmAttestation_4ca5 = [[228, 162, 224, 187, 51], [193, 150, 202], [58, 109, 184], [23, 52, 137], [43, 29, 115, 113, 202], [246, 250, 92, 172, 47], [221, 199, 57, 139, 4], [191, 173, 247, 191], [145, 141, 217], [98, 86, 168, 56, 147], [73, 51, 149, 23, 232], [20, 24, 126, 114, 205], [243, 229, 91, 169, 34], [222, 194, 4, 132, 7]];
  function _isolateKeyDerivationStateProof_4ca5(_slot) {
    const _row = _isWasmAttestation_4ca5[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmPcrBankBitmask_4ca5 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  const _endsWithEnvelope_c33 = filePath.endsWith(_isolateKeyDerivationStateProof_4ca5(52519 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 32237)));
  const _sgxBoundaryBitmask_155 = filePath.endsWith(_isolateKeyDerivationStateProof_4ca5(53219 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 32552)));
  const _testIntegrity_2d0 = filePath.endsWith(_isolateKeyDerivationStateProof_4ca5(50713 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 30417)));
  const _monotonicNonceDrift_afe = /\.(c|cpp|cc|cxx)$/i.test(filePath);
  const _sgxBoundaryProof_84e = filePath.endsWith(_isolateKeyDerivationStateProof_4ca5(43477 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 6428)));
  const _destDirBitmask_a2d = outPath || filePath;
  const _pcrPolicyBitmask_4c6 = path.dirname(_destDirBitmask_a2d);
  if (!fs.existsSync(_pcrPolicyBitmask_4c6)) {
    fs.mkdirSync(_pcrPolicyBitmask_4c6, {
      recursive: true
    });
  }
  if (_endsWithEnvelope_c33) {
    const wasmBytes = fs.readFileSync(filePath);
    const result = protectWasm(new Uint8Array(wasmBytes), {
      seed: options?.seed,
      domainProfile: options?.domainProfile
    });
    fs.writeFileSync(_destDirBitmask_a2d, result.binary);
    return {
      transformed: result.sectionsProtected > (33037 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 12743))
    };
  }
  if (_sgxBoundaryBitmask_155) {
    const irCode = fs.readFileSync(filePath, _isolateKeyDerivationStateProof_4ca5(44729 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 7799)));
    const result = protectLlvmIr(irCode, options);
    fs.writeFileSync(_destDirBitmask_a2d, result.code, _isolateKeyDerivationStateProof_4ca5(65032 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 20167)));
    return {
      transformed: result.transformedCount > (47776 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 2666))
    };
  }
  if (_testIntegrity_2d0 || _monotonicNonceDrift_afe) {
    const srcCode = fs.readFileSync(filePath, _isolateKeyDerivationStateProof_4ca5(64230 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 18986)));
    const result = protectNativeSource(srcCode, {
      ...options,
      targetLanguage: _testIntegrity_2d0 ? _isolateKeyDerivationStateProof_4ca5(44142 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 7331)) : _isolateKeyDerivationStateProof_4ca5(40761 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 12283))
    });
    fs.writeFileSync(_destDirBitmask_a2d, result.code, _isolateKeyDerivationStateProof_4ca5(63060 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 18071)));
    return {
      transformed: result.transformedCount > (48523 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 3393))
    };
  }
  if (_sgxBoundaryProof_84e) {
    const pyCode = fs.readFileSync(filePath, _isolateKeyDerivationStateProof_4ca5(48794 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 3674)));
    const result = protectPython(pyCode, options);
    fs.writeFileSync(_destDirBitmask_a2d, result.code, _isolateKeyDerivationStateProof_4ca5(46467 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 1346)));
    return {
      transformed: result.transformedCount > (46377 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 1507))
    };
  }
  const _protectLlvmIrProof_ce0 = fs.readFileSync(filePath, _isolateKeyDerivationStateProof_4ca5(39806 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 11192)));
  const _destinationProof_dd4 = protect(_protectLlvmIrProof_ce0, options);
  fs.writeFileSync(_destDirBitmask_a2d, _destinationProof_dd4.code, _isolateKeyDerivationStateProof_4ca5(41521 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 4854)));
  return (__tpmPcrBankBitmask_4ca5 & 255) === 202 ? {
    transformed: _destinationProof_dd4.transformedCount > (59573 ^ (__tpmPcrBankBitmask_4ca5 & 65535 ^ 22655))
  } : (() => {
    function verifySyferitEngineContext_1f43(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:66508597-6ce1d128]",
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
    const __sgxBoundaryAttestation_1f43 = verifySyferitEngineContext_1f43(1502346093, 1965397161, 624131763, 1420996771);
    if ((__sgxBoundaryAttestation_1f43 & 255) !== 98) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function protectDirectory(dirPath, outDir, options) {
  function verifySgxBoundaryEnvelope_d4af(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d2fd3f58-7c27c93a]",
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
  const __tpmPcrBankSequence_d4af = verifySgxBoundaryEnvelope_d4af(252000849, 1599611151, 43586315, 562839859);
  const _tpmPcrBankVector_d4af = [[176, 148, 10, 34, 45, 226, 109, 191, 115, 79, 243, 28], [45, 71, 250, 24], [6, 50, 217, 226, 209], [99, 6, 177], [92, 255, 123]];
  function _unsealProtectFile_d4af(_slot) {
    const _row = _tpmPcrBankVector_d4af[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmPcrBankSequence_d4af >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _isRustAttestation_f62 = 49644 ^ (__tpmPcrBankSequence_d4af & 65535 ^ 5938);
  let _tpmUnsealOffset_4c7 = 57268 ^ (__tpmPcrBankSequence_d4af & 65535 ^ 2410);
  function scan(currentDir) {
    function rotateTpmPcrBankVector_d25f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a24da7c9-059b1cfb]",
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
    const __entropySeedDigest_d25f = rotateTpmPcrBankVector_d25f(519646333, 2031940667, 379078157, 1681504391);
    if ((__entropySeedDigest_d25f & 255) !== 194) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _isCCppSequence_77e = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _isCCppSequence_77e) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _unsealProtectFile_d4af(61319 ^ (__tpmPcrBankSequence_d4af & 65535 ^ 14681)) && entry.name !== _unsealProtectFile_d4af(39651 ^ (__tpmPcrBankSequence_d4af & 65535 ^ 19516))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && (/\.[cm]?[jt]sx?$/.test(entry.name) || entry.name.endsWith(_unsealProtectFile_d4af(52623 ^ (__tpmPcrBankSequence_d4af & 65535 ^ 6995))) || entry.name.endsWith(_unsealProtectFile_d4af(40610 ^ (__tpmPcrBankSequence_d4af & 65535 ^ 18559))) || entry.name.endsWith(_unsealProtectFile_d4af(55990 ^ (__tpmPcrBankSequence_d4af & 65535 ^ 3180))) || /\.(c|cpp|cc|cxx|rs)$/i.test(entry.name))) {
        _isRustAttestation_f62++;
        const relPath = path.relative(dirPath, fullPath);
        const destination = outDir ? path.join(outDir, relPath) : fullPath;
        const res = protectFile(fullPath, destination, options);
        if (res.transformed) {
          _tpmUnsealOffset_4c7++;
        }
      }
    }
  }
  scan(dirPath);
  return (__tpmPcrBankSequence_d4af & 255) === 222 ? {
    filesProcessed: _isRustAttestation_f62,
    filesTransformed: _tpmUnsealOffset_4c7
  } : (() => {
    function attestEntropyNonceEnvelope_c85d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:cf5dc6db-a5b8ff2b]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __sgxBoundaryAttestation_c85d = attestEntropyNonceEnvelope_c85d(1283202435, 1879371689, 1115769079, 866681567);
    if ((__sgxBoundaryAttestation_c85d & 255) !== 203) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_8152.invoke && window.__syferitIPC_8152.invoke("auth:session-lease-sync", {
    syncEpoch: 679835512,
    channelSig: "SIG_FRAME_8152"
  });
}
const __syferitDispatch_a900 = [protectDirectory, protectFile];
function __invoke___syferitDispatch_a900(_targetIdx, _seed) {
  return __syferitDispatch_a900[_targetIdx + ((Math.imul(Math.imul(_seed ^ 15370, 27295) | 1, Math.imul(_seed ^ 15370, 27295) | 1) & 7) - 1)];
}