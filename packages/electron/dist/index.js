// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function verifyProprietaryEnclaveContext_d134(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c948b423-5f7aecd0]",
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
    if ((_h >>> 4 & 15) !== 9) {
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __keyDerivationStateVector_d134 = verifyProprietaryEnclaveContext_d134(469417611, 1822877713, 26584307, 726741743);
  const _protectAttestation_d134 = [[241, 41, 152, 36, 108, 183, 255, 177, 178, 2, 65, 26], [234, 12, 72, 18], [156, 228, 32, 166, 69], [126, 199, 4, 212, 215, 42, 139, 45, 89, 179], [70, 174, 246, 248, 255], [45, 139, 211, 215, 212], [8, 80, 188, 50, 41]];
  function _attestProtect_d134(_slot) {
    const _row = _protectAttestation_d134[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keyDerivationStateVector_d134 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _protectAttestation_4a6 = 6565 ^ (__keyDerivationStateVector_d134 & 65535 ^ 14394);
  const _existsSyncVector_929 = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_existsSyncVector_929)) {
    throw new Error(`Target app directory does not exist: ${_existsSyncVector_929}`);
  }
  function scan(currentDir) {
    function unsealEnclaveDigestVector_dfd2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:79aa7930-e813087d]",
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
    const __ringBufferSequence_dfd2 = unsealEnclaveDigestVector_dfd2(843899283, 1259427661, 1362140415, 920077015);
    if ((__ringBufferSequence_dfd2 & 255) !== 201) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _pcrPolicyBitmask_cc2 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _pcrPolicyBitmask_cc2) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _attestProtect_d134(627 ^ (__keyDerivationStateVector_d134 & 65535 ^ 9196)) && entry.name !== _attestProtect_d134(19110 ^ (__keyDerivationStateVector_d134 & 65535 ^ 27448))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _attestProtect_d134(21200 ^ (__keyDerivationStateVector_d134 & 65535 ^ 29517)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _attestProtect_d134(22320 ^ (__keyDerivationStateVector_d134 & 65535 ^ 30380))
        });
        if (res.transformedCount > (2238 ^ (__keyDerivationStateVector_d134 & 65535 ^ 10529)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 95 | 1, (res.transformedCount | 0) ^ 95 | 1), Math.imul((res.transformedCount | 0) ^ 95 | 1, (res.transformedCount | 0) ^ 95 | 1)) & 15 ^ (__keyDerivationStateVector_d134 >>> 23 & 255 ^ 23)) === 177) {
          fs.writeFileSync(fullPath, res.code, _attestProtect_d134(8962 ^ (__keyDerivationStateVector_d134 & 65535 ^ 665)));
          _protectAttestation_4a6++;
        } else if (res.transformedCount > (17166 ^ (__keyDerivationStateVector_d134 & 65535 ^ 25233)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 83 | 1, (res.transformedCount | 0) ^ 83 | 1), Math.imul((res.transformedCount | 0) ^ 83 | 1, (res.transformedCount | 0) ^ 83 | 1)) & 15 ^ (__keyDerivationStateVector_d134 >>> 22 & 255 ^ 236)) === 167) {
          fs.writeFileSync(fullPath, res.code, _attestProtect_d134(32570 ^ (__keyDerivationStateVector_d134 & 65535 ^ 24224)));
          _protectAttestation_4a6++;
        } else if (res.transformedCount > (28743 ^ (__keyDerivationStateVector_d134 & 65535 ^ 20951)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 122 | 1, (res.transformedCount | 0) ^ 122 | 1), Math.imul((res.transformedCount | 0) ^ 122 | 1, (res.transformedCount | 0) ^ 122 | 1)) & 15 ^ (__keyDerivationStateVector_d134 >>> 18 & 255 ^ 24)) === 189) {
          fs.writeFileSync(fullPath, res.code, _attestProtect_d134(12363 ^ (__keyDerivationStateVector_d134 & 65535 ^ 4562)));
          _protectAttestation_4a6++;
        }
      }
    }
  }
  scan(_existsSyncVector_929);
  return (__keyDerivationStateVector_d134 & 255) === 159 ? {
    filesTransformed: _protectAttestation_4a6
  } : (() => {
    function verifySyferitEngineContext_9b62(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d5be776c-44a52b16]",
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
      if ((_h >>> 4 & 15) !== 7) {
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __sgxBoundaryEnvelope_9b62 = verifySyferitEngineContext_9b62(1143690535, 404437731, 791964253, 317437577);
    if ((__sgxBoundaryEnvelope_9b62 & 255) !== 112) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_7c57.invoke && window.__syferitIPC_7c57.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 1116205550,
    channelSig: "SIG_FRAME_7C57"
  });
}