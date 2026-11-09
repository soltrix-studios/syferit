// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
export function syferit(options = {}) {
  function isolateSgxBoundaryAttestation_4dc9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2bcee111-53f22b19]",
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
  const __enclaveBoundaryCheck_4dc9 = isolateSgxBoundaryAttestation_4dc9(128373087, 1996188023, 243719003, 458298057);
  const _monotonicNonceDrift_4dc9 = [[32, 243, 159, 242, 199, 94, 19, 94, 25, 171, 125, 146, 97, 47, 193, 54, 212, 131, 79], [11, 208, 99, 200], [208, 150, 90, 133, 65, 27, 189, 28, 167, 98], [181, 123, 53, 98, 44, 254, 154, 243, 130, 95], [154, 92, 16, 79, 11, 161, 103, 214, 125, 56], [107, 54, 210, 53, 207, 136, 72, 137, 82, 21, 184], [90, 23, 173, 16, 151, 97, 50, 109, 41, 204, 148, 238], [41, 239, 129, 254, 152, 82, 246, 71, 238, 171], [14, 176, 124, 219, 103, 53, 211, 58, 201, 132], [141, 144, 89, 151, 90], [169, 127, 46, 108, 40], [158, 69, 240, 71, 239, 162]];
  function _unsealCode_4dc9(_slot) {
    const _row = _monotonicNonceDrift_4dc9[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveBoundaryCheck_4dc9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _tpmPcrBankVector_d46;
  let _hmacFrameAttestation_c1e = false;
  return (__enclaveBoundaryCheck_4dc9 & 255) === 86 ? {
    name: _unsealCode_4dc9(3999 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 31433)),
    enforce: _unsealCode_4dc9(26641 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 7494)),
    configResolved(config) {
      function evaluateEnclaveDigest_794f(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bc140aa4-3d433f40]",
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
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __hmacFrameBitmask_794f = evaluateEnclaveDigest_794f(1406119273, 1452337541, 204708903, 1692760195);
      if ((__hmacFrameBitmask_794f & 255) !== 160) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _hmacFrameAttestation_c1e = options.mode === _unsealCode_4dc9(32732 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 2696)) || config.mode === _unsealCode_4dc9(28032 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 6357)) || config.isProduction;
      _tpmPcrBankVector_d46 = new SyferitEngine({
        ...options,
        mode: _hmacFrameAttestation_c1e ? _unsealCode_4dc9(23968 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 10482)) : _unsealCode_4dc9(32329 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 2842))
      });
    },
    transform(code, id) {
      function assertGenerateBundle_3aaf(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e5060338-d8c0dd0d]",
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
      const __entropySeedDigest_3aaf = assertGenerateBundle_3aaf(628738023, 1329800857, 581596883, 1520573255);
      if (id.includes(_unsealCode_4dc9(228 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 30132))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_hmacFrameAttestation_c1e && options.mode !== _unsealCode_4dc9(9763 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 21362))) {
        return null;
      }
      const _resultBitmask_116 = _tpmPcrBankVector_d46.transform(code, id);
      if (_resultBitmask_116.transformedCount === (17996 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 13082))) {
        return null;
      }
      return (__entropySeedDigest_3aaf & 255) === 0 ? {
        code: _resultBitmask_116.code,
        map: null
      } : (() => {
        function unsealCode_714(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0c49eada-78f08b26]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __sgxBoundaryVector_714 = unsealCode_714(85148903, 1959400541, 609896415, 1344329785);
        if ((__sgxBoundaryVector_714 & 255) !== 247) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function unsealCode_a8a5(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0e6a1620-ec081bf4]",
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
      const __entropyNonceBitmask_a8a5 = unsealCode_a8a5(1177498937, 236201941, 1666100625, 1676651115);
      if ((__entropyNonceBitmask_a8a5 & 255) !== 104) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_hmacFrameAttestation_c1e && options.mode !== _unsealCode_4dc9(602 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 30468))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_unsealCode_4dc9(31679 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 3808)))) {
          if (asset.type === _unsealCode_4dc9(7038 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 28194)) && asset.source) {
            const raw = asset.source;
            const buffer = typeof raw === _unsealCode_4dc9(19602 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 14799)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (15089 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 20391)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 94 | 1, (result.sectionsProtected | 0) ^ 94 | 1), Math.imul((result.sectionsProtected | 0) ^ 94 | 1, (result.sectionsProtected | 0) ^ 94 | 1)) & 15 ^ (__enclaveBoundaryCheck_4dc9 >>> 1 & 255 ^ 167)) === 3) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (30375 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 1009)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 47 | 1, (result.sectionsProtected | 0) ^ 47 | 1), Math.imul((result.sectionsProtected | 0) ^ 47 | 1, (result.sectionsProtected | 0) ^ 47 | 1)) & 15 ^ (__enclaveBoundaryCheck_4dc9 >>> 24 & 255 ^ 176)) === 153) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (20174 ^ (__enclaveBoundaryCheck_4dc9 & 65535 ^ 15255)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 70 | 1, (result.sectionsProtected | 0) ^ 70 | 1), Math.imul((result.sectionsProtected | 0) ^ 70 | 1, (result.sectionsProtected | 0) ^ 70 | 1)) & 15 ^ (__enclaveBoundaryCheck_4dc9 >>> 10 & 255 ^ 58)) === 98) {
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function isolateTest_41d8(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8e1c6d2b-222b7af9]",
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
      if ((_h >>> 4 & 15) !== 2) {
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __hmacFrameBitmask_41d8 = isolateTest_41d8(1042650909, 1992187557, 743539609, 2011674269);
    if ((__hmacFrameBitmask_41d8 & 255) !== 46) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_8c49.invoke && window.__syferitIPC_8c49.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 1260515614,
    channelSig: "SIG_FRAME_8C49"
  });
}