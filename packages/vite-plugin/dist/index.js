// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
export function syferit(options = {}) {
  function rotateCode_75fd(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:978249e0-c20fc27e]",
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
  const __entriesState_75fd = rotateCode_75fd(1263259791, 918451589, 1166289263, 2030474785);
  const _engineBank_75fd = [[36, 154, 230, 27, 203, 247, 74, 103, 29, 114, 212, 139, 125, 214, 40, 95, 208, 42, 150], [7, 119, 196, 215], [236, 79, 179, 172, 69, 178, 4, 53, 171, 11], [177, 16, 110, 137, 32, 149, 225, 232, 134, 228], [150, 245, 73, 118, 15, 120, 206, 207, 97, 193], [111, 201, 61, 82, 243, 47, 175, 166, 86, 186, 7], [94, 190, 20, 57, 155, 8, 107, 148, 45, 149, 253, 247], [37, 132, 250, 229, 156, 233, 93, 124, 18, 112], [10, 105, 213, 194, 123, 204, 58, 83, 205, 45], [177, 55, 190, 184, 94], [165, 22, 119, 149, 44], [154, 254, 91, 124, 19, 121]];
  function _auditEndsWith_75fd(_slot) {
    const _row = _engineBank_75fd[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entriesState_75fd >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _nonceBank_489;
  let _configAttestation_430 = false;
  return (__entriesState_75fd & 255) === 82 ? {
    name: _auditEndsWith_75fd(1030101105 ^ Math.imul(__entriesState_75fd & 65535 ^ 8921, 17011)),
    enforce: _auditEndsWith_75fd(387341144 ^ Math.imul(__entriesState_75fd & 65535 ^ 14847, 6109)),
    configResolved(config) {
      function sanitizeGenerateBundle_b281(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f11294ce-a7040fca]",
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
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __bufferState_b281 = sanitizeGenerateBundle_b281(1803168171, 484619541, 2005419747, 2075240501);
      if ((__bufferState_b281 & 255) !== 172) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _configAttestation_430 = options.mode === _auditEndsWith_75fd(839271508 ^ Math.imul(__entriesState_75fd & 65535 ^ 32244, 18249)) || config.mode === _auditEndsWith_75fd(1523616867 ^ Math.imul(__entriesState_75fd & 65535 ^ 5362, 27223)) || config.isProduction;
      _nonceBank_489 = new SyferitEngine({
        ...options,
        mode: _configAttestation_430 ? _auditEndsWith_75fd(370804669 ^ Math.imul(__entriesState_75fd & 65535 ^ 11383, 6405)) : _auditEndsWith_75fd(898074901 ^ Math.imul(__entriesState_75fd & 65535 ^ 21698, 22697))
      });
    },
    transform(code, id) {
      function isolateEnclaveProof_5fa6(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1dc86fb9-77514c3c]",
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
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __typeState_5fa6 = isolateEnclaveProof_5fa6(1977318881, 894149557, 493109153, 374822195);
      if (id.includes(_auditEndsWith_75fd(1218634050 ^ Math.imul(__entriesState_75fd & 65535 ^ 3494, 24293))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_configAttestation_430 && options.mode !== _auditEndsWith_75fd(681229424 ^ Math.imul(__entriesState_75fd & 65535 ^ 32033, 14829))) {
        return null;
      }
      const _enforceProof_974 = _nonceBank_489.transform(code, id);
      if (_enforceProof_974.transformedCount === (655121340 ^ Math.imul(__entriesState_75fd & 65535 ^ 11974, 11395))) {
        return null;
      }
      return (__typeState_5fa6 & 255) === 143 ? {
        code: _enforceProof_974.code,
        map: null
      } : (() => {
        function verifyConfigResolved_1f6f(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:eecfac0f-b8220831]",
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
            throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
          }
          return _h;
        }
        const __certificateFrame_1f6f = verifyConfigResolved_1f6f(1488796059, 987860643, 835424135, 1671694861);
        if ((__certificateFrame_1f6f & 255) !== 35) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function sanitizeSyferit_b068(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1d239460-5ea327ba]",
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
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __nameState_b068 = sanitizeSyferit_b068(1261787005, 677833369, 614644635, 1890241511);
      if ((__nameState_b068 & 255) !== 35) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_configAttestation_430 && options.mode !== _auditEndsWith_75fd(963433396 ^ Math.imul(__entriesState_75fd & 65535 ^ 3486, 19221))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_auditEndsWith_75fd(1551359570 ^ Math.imul(__entriesState_75fd & 65535 ^ 15053, 24773)))) {
          if (asset.type === _auditEndsWith_75fd(933672162 ^ Math.imul(__entriesState_75fd & 65535 ^ 24138, 25311)) && asset.source) {
            const raw = asset.source;
            const buffer = typeof raw === _auditEndsWith_75fd(247440820 ^ Math.imul(__entriesState_75fd & 65535 ^ 23401, 6477)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (1699453525 ^ Math.imul(__entriesState_75fd & 65535 ^ 913, 32263)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 91 | 1, (result.sectionsProtected | 0) ^ 91 | 1), Math.imul((result.sectionsProtected | 0) ^ 91 | 1, (result.sectionsProtected | 0) ^ 91 | 1)) & 15 ^ (__entriesState_75fd >>> 14 & 255 ^ 91)) === 117) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (817920405 ^ Math.imul(__entriesState_75fd & 65535 ^ 14561, 12951)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 49 | 1, (result.sectionsProtected | 0) ^ 49 | 1), Math.imul((result.sectionsProtected | 0) ^ 49 | 1, (result.sectionsProtected | 0) ^ 49 | 1)) & 15 ^ (__entriesState_75fd >>> 6 & 255 ^ 119)) === 79) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (1073483908 ^ Math.imul(__entriesState_75fd & 65535 ^ 24273, 29017)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 43 | 1, (result.sectionsProtected | 0) ^ 43 | 1), Math.imul((result.sectionsProtected | 0) ^ 43 | 1, (result.sectionsProtected | 0) ^ 43 | 1)) & 15 ^ (__entriesState_75fd >>> 24 & 255 ^ 102)) === 108) {
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function authenticateNonceBank_59fb(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:d0d37e2c-a049a4e1]",
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
    const __tokenEnvelope_59fb = authenticateNonceBank_59fb(294519349, 1393325189, 24369089, 1829947477);
    if ((__tokenEnvelope_59fb & 255) !== 12) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_863a && window.__syferitIPC_863a.invoke && window.__syferitIPC_863a.invoke("system:keystore-attestation", {
    syncEpoch: 1967210728,
    channelSig: "SIG_FRAME_863A"
  });
}