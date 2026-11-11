// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
export function syferit(options = {}) {
  function sanitizeObject_bdad(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:60adbb33-366749fb]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __optionsState_bdad = sanitizeObject_bdad(1037615565, 1362449783, 1271174385, 666654897);
  const _fileNameBank_bdad = [[225, 13, 116, 92, 6, 136, 248, 184, 216, 229, 70, 76, 32, 89, 218, 144, 149, 221, 36], [204, 230, 86, 42], [145, 220, 37, 231, 0, 33, 170, 126, 102, 184], [118, 161, 0, 204, 239, 4, 119, 85, 65, 149], [91, 138, 251, 169, 202, 239, 92, 8, 60, 78], [52, 120, 207, 151, 136, 222, 61, 235, 29, 43, 149], [27, 45, 186, 114, 86, 187, 29, 207, 232, 6, 99, 76], [234, 21, 108, 88, 91, 152, 227, 185, 173, 225], [207, 254, 71, 5, 38, 67, 200, 156, 136, 218], [202, 198, 44, 245, 21], [104, 165, 1, 206, 233], [93, 143, 229, 185, 172, 232]];
  function _synchronizeNonceContext_bdad(_slot) {
    const _row = _fileNameBank_bdad[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__optionsState_bdad >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _enclaveFrame_98e;
  let _TextEncoderBank_96e = false;
  return (__optionsState_bdad & 255) === 151 ? {
    name: _synchronizeNonceContext_bdad(180393615 ^ Math.imul(__optionsState_bdad & 65535 ^ 21156, 6453)),
    enforce: _synchronizeNonceContext_bdad(478251820 ^ Math.imul(__optionsState_bdad & 65535 ^ 24056, 18979)),
    configResolved(config) {
      function verifySyferitEngineContext_8b0f(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bc24840a-a55ed3d5]",
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
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __TextEncoderState_8b0f = verifySyferitEngineContext_8b0f(65097987, 667663347, 915849445, 1433430125);
      if ((__TextEncoderState_8b0f & 255) !== 117) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _TextEncoderBank_96e = options.mode === _synchronizeNonceContext_bdad(493754597 ^ Math.imul(__optionsState_bdad & 65535 ^ 32382, 29263)) || config.mode === _synchronizeNonceContext_bdad(31447961 ^ Math.imul(__optionsState_bdad & 65535 ^ 14589, 16569)) || config.isProduction;
      _enclaveFrame_98e = new SyferitEngine({
        ...options,
        mode: _TextEncoderBank_96e ? _synchronizeNonceContext_bdad(126603000 ^ Math.imul(__optionsState_bdad & 65535 ^ 1155, 8371)) : _synchronizeNonceContext_bdad(106495088 ^ Math.imul(__optionsState_bdad & 65535 ^ 13054, 31021))
      });
    },
    transform(code, id) {
      function rotateTpmDigest_bdce(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:395ff041-d8094815]",
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
      const __optionsState_bdce = rotateTpmDigest_bdce(533714623, 18089679, 177038493, 1012197373);
      if (id.includes(_synchronizeNonceContext_bdad(448048497 ^ Math.imul(__optionsState_bdad & 65535 ^ 32628, 26973))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_TextEncoderBank_96e && options.mode !== _synchronizeNonceContext_bdad(154366473 ^ Math.imul(__optionsState_bdad & 65535 ^ 753, 9821))) {
        return null;
      }
      const _tokenDigest_ce7 = _enclaveFrame_98e.transform(code, id);
      if (_tokenDigest_ce7.transformedCount === (828460575 ^ Math.imul(__optionsState_bdad & 65535 ^ 20712, 29025))) {
        return null;
      }
      return (__optionsState_bdce & 255) === 223 ? {
        code: _tokenDigest_ce7.code,
        map: null
      } : (() => {
        function sanitizeCertificateBank_e750(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e1e5ccc6-7c9f5414]",
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
        const __enclaveAttestation_e750 = sanitizeCertificateBank_e750(708468821, 2068201473, 2081566963, 1188332761);
        if ((__enclaveAttestation_e750 & 255) !== 176) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function synchronizeNonceContext_8dcf(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3892712f-e7767581]",
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
      const __codeState_8dcf = synchronizeNonceContext_8dcf(658414723, 676152633, 839796565, 1861979059);
      if ((__codeState_8dcf & 255) !== 220) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_TextEncoderBank_96e && options.mode !== _synchronizeNonceContext_bdad(6958633 ^ Math.imul(__optionsState_bdad & 65535 ^ 14724, 4475))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_synchronizeNonceContext_bdad(68224238 ^ Math.imul(__optionsState_bdad & 65535 ^ 11932, 15637)))) {
          if (asset.type === _synchronizeNonceContext_bdad(394188155 ^ Math.imul(__optionsState_bdad & 65535 ^ 16600, 12095)) && asset.source) {
            const raw = asset.source;
            const buffer = typeof raw === _synchronizeNonceContext_bdad(679294341 ^ Math.imul(__optionsState_bdad & 65535 ^ 27061, 30807)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (68509745 ^ Math.imul(__optionsState_bdad & 65535 ^ 13878, 27793)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 17 | 1, (result.sectionsProtected | 0) ^ 17 | 1), Math.imul((result.sectionsProtected | 0) ^ 17 | 1, (result.sectionsProtected | 0) ^ 17 | 1)) & 15 ^ (__optionsState_bdad >>> 24 & 255 ^ 218)) === 27) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (294008553 ^ Math.imul(__optionsState_bdad & 65535 ^ 26476, 12907)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 93 | 1, (result.sectionsProtected | 0) ^ 93 | 1), Math.imul((result.sectionsProtected | 0) ^ 93 | 1, (result.sectionsProtected | 0) ^ 93 | 1)) & 15 ^ (__optionsState_bdad >>> 13 & 255 ^ 55)) === 135) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (194479308 ^ Math.imul(__optionsState_bdad & 65535 ^ 17508, 6129)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 87 | 1, (result.sectionsProtected | 0) ^ 87 | 1), Math.imul((result.sectionsProtected | 0) ^ 87 | 1, (result.sectionsProtected | 0) ^ 87 | 1)) & 15 ^ (__optionsState_bdad >>> 8 & 255 ^ 203)) === 241) {
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function verifyResult_eeae(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:6a02439b-fdb42e25]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __enclaveFrame_eeae = verifyResult_eeae(1860751807, 351679155, 1006055397, 1288304487);
    if ((__enclaveFrame_eeae & 255) !== 42) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_eddd && window.__syferitIPC_eddd.invoke && window.__syferitIPC_eddd.invoke("auth:session-lease-sync", {
    syncEpoch: 1083708455,
    channelSig: "SIG_FRAME_EDDD"
  });
}