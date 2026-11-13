// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
export function syferit(options = {}) {
  function authenticateCode_80cf(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:d2e115df-564b08eb]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __syferitState_80cf = authenticateCode_80cf(856399357, 1569817427, 523214927, 880495715);
  const _enclaveEnvelope_80cf = [[148, 149, 57, 192, 91, 224, 141, 76, 109, 77, 27, 224, 237, 193, 111, 4, 64, 37, 233], [119, 78, 1, 190], [92, 52, 248, 139, 181, 185, 95, 234, 59, 0], [33, 25, 211, 112, 144, 156, 36, 193, 22, 253], [6, 226, 142, 93, 127, 71, 1, 164, 241, 214], [255, 208, 112, 59, 67, 38, 234, 159, 166, 179, 90], [174, 181, 79, 230, 11, 3, 208, 115, 157, 110, 54, 216], [149, 141, 63, 204, 12, 240, 144, 85, 98, 73], [122, 86, 26, 169, 235, 219, 125, 8, 93, 34], [1, 62, 251, 129, 174], [53, 29, 204, 114, 156], [10, 231, 150, 85, 99, 64]];
  function _verifyGenerateBundle_80cf(_slot) {
    const _row = _enclaveEnvelope_80cf[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__syferitState_80cf >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _enclaveReg_1f1;
  let _nonceBank_c73 = false;
  return (__syferitState_80cf & 255) === 226 ? {
    name: _verifyGenerateBundle_80cf(330659052 ^ Math.imul(__syferitState_80cf & 65535 ^ 21790, 9861)),
    enforce: _verifyGenerateBundle_80cf(836966496 ^ Math.imul(__syferitState_80cf & 65535 ^ 23105, 23083)),
    configResolved(config) {
      function rotateTextEncoder_f981(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ab3f680b-34c67ced]",
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
      const __nonceCheck_f981 = rotateTextEncoder_f981(1485082225, 914989107, 1620820969, 380452093);
      if ((__nonceCheck_f981 & 255) !== 192) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _nonceBank_c73 = options.mode === _verifyGenerateBundle_80cf(313040748 ^ Math.imul(__syferitState_80cf & 65535 ^ 17888, 8375)) || config.mode === _verifyGenerateBundle_80cf(442797274 ^ Math.imul(__syferitState_80cf & 65535 ^ 12927, 7533)) || config.isProduction;
      _enclaveReg_1f1 = new SyferitEngine({
        ...options,
        mode: _nonceBank_c73 ? _verifyGenerateBundle_80cf(1034107078 ^ Math.imul(__syferitState_80cf & 65535 ^ 20924, 30063)) : _verifyGenerateBundle_80cf(1068085686 ^ Math.imul(__syferitState_80cf & 65535 ^ 16697, 27657))
      });
    },
    transform(code, id) {
      function isolateConfigResolved_91f(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7bffffbe-c60a5484]",
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
      const __enclaveAttestation_91f = isolateConfigResolved_91f(2107702605, 490133385, 2136902613, 928132589);
      if (id.includes(_verifyGenerateBundle_80cf(1143025565 ^ Math.imul(__syferitState_80cf & 65535 ^ 20215, 29167))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_nonceBank_c73 && options.mode !== _verifyGenerateBundle_80cf(894145368 ^ Math.imul(__syferitState_80cf & 65535 ^ 8825, 14221))) {
        return null;
      }
      const _testDigest_540 = _enclaveReg_1f1.transform(code, id);
      if (_testDigest_540.transformedCount === (509169351 ^ Math.imul(__syferitState_80cf & 65535 ^ 27031, 10443))) {
        return null;
      }
      return (__enclaveAttestation_91f & 255) === 102 ? {
        code: _testDigest_540.code,
        map: null
      } : (() => {
        function sanitizeIsProduction_17d1(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:7b0adb59-fdf0cb7b]",
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
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __enclaveEnvelope_17d1 = sanitizeIsProduction_17d1(121604181, 2114969161, 1145820079, 1572642857);
        if ((__enclaveEnvelope_17d1 & 255) !== 157) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function attestTpmBank_f069(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3a36a507-27be9c1d]",
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
        if ((_h >>> 4 & 15) !== 8) {
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __testState_f069 = attestTpmBank_f069(569055761, 2136852191, 372198393, 505561015);
      if ((__testState_f069 & 255) !== 130) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_nonceBank_c73 && options.mode !== _verifyGenerateBundle_80cf(466891163 ^ Math.imul(__syferitState_80cf & 65535 ^ 13963, 8091))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_verifyGenerateBundle_80cf(1417603918 ^ Math.imul(__syferitState_80cf & 65535 ^ 15343, 23459)))) {
          if (asset.type === _verifyGenerateBundle_80cf(1160700086 ^ Math.imul(__syferitState_80cf & 65535 ^ 31190, 26027)) && asset.source) {
            const raw = asset.source;
            const buffer = typeof raw === _verifyGenerateBundle_80cf(1347477919 ^ Math.imul(__syferitState_80cf & 65535 ^ 9790, 21763)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (1945460189 ^ Math.imul(__syferitState_80cf & 65535 ^ 15071, 32033)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 35 | 1, (result.sectionsProtected | 0) ^ 35 | 1), Math.imul((result.sectionsProtected | 0) ^ 35 | 1, (result.sectionsProtected | 0) ^ 35 | 1)) & 15 ^ (__syferitState_80cf >>> 18 & 255 ^ 78)) === 201) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (1739821314 ^ Math.imul(__syferitState_80cf & 65535 ^ 11596, 27111)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 62 | 1, (result.sectionsProtected | 0) ^ 62 | 1), Math.imul((result.sectionsProtected | 0) ^ 62 | 1, (result.sectionsProtected | 0) ^ 62 | 1)) & 15 ^ (__syferitState_80cf >>> 23 & 255 ^ 161)) === 204) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (315897404 ^ Math.imul(__syferitState_80cf & 65535 ^ 3633, 5665)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 111 | 1, (result.sectionsProtected | 0) ^ 111 | 1), Math.imul((result.sectionsProtected | 0) ^ 111 | 1, (result.sectionsProtected | 0) ^ 111 | 1)) & 15 ^ (__syferitState_80cf >>> 7 & 255 ^ 33)) === 137) {
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function attestName_4832(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:835fa9c5-5c701f23]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __fileNameState_4832 = attestName_4832(1196830545, 638526753, 1863127421, 233337167);
    if ((__fileNameState_4832 & 255) !== 176) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_7c73 && window.__syferitIPC_7c73.invoke && window.__syferitIPC_7c73.invoke("system:keystore-attestation", {
    syncEpoch: 2140107655,
    channelSig: "SIG_FRAME_7C73"
  });
}