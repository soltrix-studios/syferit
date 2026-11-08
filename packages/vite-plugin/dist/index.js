// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
export function syferit(options = {}) {
  function rotateResult_25bb(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:112e441d-f5e2f142]",
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
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __entropyNonceProof_25bb = rotateResult_25bb(663728243, 33347427, 94736919, 811917907);
  const _transformedCountIntegrity_25bb = [[72, 9, 245, 57, 255, 132, 121, 133, 1, 225, 199, 169, 137, 101, 91, 125, 252, 217, 165], [19, 234, 213, 245], [248, 216, 164, 194, 105, 93, 43, 83, 223, 188], [221, 189, 159, 175, 52, 0, 240, 54, 186, 153], [162, 134, 122, 148, 19, 235, 221, 237, 149, 114], [147, 124, 76, 112, 231, 194, 190, 196, 122, 47, 22], [114, 81, 59, 95, 239, 191, 156, 170, 49, 10, 226, 17], [49, 17, 235, 59, 160, 148, 108, 154, 6, 229], [22, 250, 198, 224, 143, 127, 73, 113, 225, 222], [165, 218, 175, 218, 114], [209, 161, 128, 171, 48], [166, 131, 106, 154, 7, 236]];
  function _assertEnclaveDigestEnvelope_25bb(_slot) {
    const _row = _transformedCountIntegrity_25bb[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entropyNonceProof_25bb >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _sgxBoundaryEnvelope_aca;
  let _hmacFrameBitmask_30d = false;
  return (__entropyNonceProof_25bb & 255) === 62 ? {
    name: _assertEnclaveDigestEnvelope_25bb(11485 ^ (__entropyNonceProof_25bb & 65535 ^ 6115)),
    enforce: _assertEnclaveDigestEnvelope_25bb(17682 ^ (__entropyNonceProof_25bb & 65535 ^ 32301)),
    configResolved(config) {
      function unsealEntropyNonceProof_f139(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f35fe1aa-5cb1d17c]",
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
        if ((_h >>> 4 & 15) !== 14) {
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __keyDerivationStateBitmask_f139 = unsealEntropyNonceProof_f139(651657075, 1337974551, 1706430051, 1131164193);
      if ((__keyDerivationStateBitmask_f139 & 255) !== 230) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _hmacFrameBitmask_30d = options.mode === _assertEnclaveDigestEnvelope_25bb(27286 ^ (__entropyNonceProof_25bb & 65535 ^ 20906)) || config.mode === _assertEnclaveDigestEnvelope_25bb(27147 ^ (__entropyNonceProof_25bb & 65535 ^ 20790)) || config.isProduction;
      _sgxBoundaryEnvelope_aca = new SyferitEngine({
        ...options,
        mode: _hmacFrameBitmask_30d ? _assertEnclaveDigestEnvelope_25bb(26253 ^ (__entropyNonceProof_25bb & 65535 ^ 23991)) : _assertEnclaveDigestEnvelope_25bb(21397 ^ (__entropyNonceProof_25bb & 65535 ^ 26798))
      });
    },
    transform(code, id) {
      function assertIsProduction_2050(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fa7f0b9d-8ea2978f]",
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
        if ((_h >>> 4 & 15) !== 11) {
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __entropyNonceProof_2050 = assertIsProduction_2050(323412393, 478922081, 534359017, 1319550151);
      if (id.includes(_assertEnclaveDigestEnvelope_25bb(29535 ^ (__entropyNonceProof_25bb & 65535 ^ 18535))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_hmacFrameBitmask_30d && options.mode !== _assertEnclaveDigestEnvelope_25bb(5815 ^ (__entropyNonceProof_25bb & 65535 ^ 11662))) {
        return null;
      }
      const _resultBitmask_6d1 = _sgxBoundaryEnvelope_aca.transform(code, id);
      if (_resultBitmask_6d1.transformedCount === (1614 ^ (__entropyNonceProof_25bb & 65535 ^ 15728))) {
        return null;
      }
      return (__entropyNonceProof_2050 & 255) === 185 ? {
        code: _resultBitmask_6d1.code,
        map: null
      } : (() => {
        function attestTransform_4a70(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:73e1e5ee-6eb5b854]",
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
        const __keyDerivationStateBitmask_4a70 = attestTransform_4a70(399277729, 438631643, 1713644647, 1661675403);
        if ((__keyDerivationStateBitmask_4a70 & 255) !== 84) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function verifyCode_d331(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:aa13e073-f53ba4b0]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __tpmPcrBankEnvelope_d331 = verifyCode_d331(1472022137, 1359733887, 881130479, 98027543);
      if ((__tpmPcrBankEnvelope_d331 & 255) !== 59) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_hmacFrameBitmask_30d && options.mode !== _assertEnclaveDigestEnvelope_25bb(16637 ^ (__entropyNonceProof_25bb & 65535 ^ 31691))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_assertEnclaveDigestEnvelope_25bb(21315 ^ (__entropyNonceProof_25bb & 65535 ^ 26740)))) {
          if (asset.type === _assertEnclaveDigestEnvelope_25bb(20765 ^ (__entropyNonceProof_25bb & 65535 ^ 27177)) && asset.source) {
            const raw = asset.source;
            const buffer = typeof raw === _assertEnclaveDigestEnvelope_25bb(270 ^ (__entropyNonceProof_25bb & 65535 ^ 14907)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (15912 ^ (__entropyNonceProof_25bb & 65535 ^ 1302)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 79 | 1, (result.sectionsProtected | 0) ^ 79 | 1), Math.imul((result.sectionsProtected | 0) ^ 79 | 1, (result.sectionsProtected | 0) ^ 79 | 1)) & 15 ^ (__entropyNonceProof_25bb >>> 13 & 255 ^ 147)) === 47) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (28685 ^ (__entropyNonceProof_25bb & 65535 ^ 19251)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 67 | 1, (result.sectionsProtected | 0) ^ 67 | 1), Math.imul((result.sectionsProtected | 0) ^ 67 | 1, (result.sectionsProtected | 0) ^ 67 | 1)) & 15 ^ (__entropyNonceProof_25bb >>> 22 & 255 ^ 69)) === 240) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (15807 ^ (__entropyNonceProof_25bb & 65535 ^ 1678)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 43 | 1, (result.sectionsProtected | 0) ^ 43 | 1), Math.imul((result.sectionsProtected | 0) ^ 43 | 1, (result.sectionsProtected | 0) ^ 43 | 1)) & 15 ^ (__entropyNonceProof_25bb >>> 5 & 255 ^ 125)) === 161) {
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function isolateTransformedCount_eb3d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9c349440-415f7bf1]",
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
      if ((_h >>> 4 & 15) !== 11) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __keyDerivationStateAttestation_eb3d = isolateTransformedCount_eb3d(418141911, 358169595, 2051669939, 1091938881);
    if ((__keyDerivationStateAttestation_eb3d & 255) !== 180) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_86c7.invoke && window.__syferitIPC_86c7.invoke("license:quorum-token-refresh", {
    syncEpoch: 1341730899,
    channelSig: "SIG_FRAME_86C7"
  });
}