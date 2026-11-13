// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
export function syferit(options = {}) {
  function rotateName_662b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:fbd19ecf-7f822329]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __codeState_662b = rotateName_662b(2358249, 519776305, 1821428075, 664499729);
  const _enclaveDigest_662b = [[70, 24, 237, 94, 233, 117, 65, 186, 63, 240, 175, 78, 159, 84, 51, 146, 242, 168, 157], [37, 249, 205, 20], [10, 201, 140, 225, 123, 44, 3, 112, 205, 141], [239, 146, 103, 206, 70, 23, 232, 87, 168, 102], [180, 119, 66, 171, 45, 250, 181, 10, 131, 67], [141, 79, 36, 145, 17, 209, 150, 229, 116, 60, 14], [96, 32, 19, 124, 253, 142, 100, 201, 67, 27, 250, 50], [67, 6, 243, 90, 178, 107, 68, 187, 52, 242], [40, 235, 174, 7, 153, 78, 33, 158, 239, 175], [83, 201, 135, 251, 124], [195, 144, 120, 200, 66], [180, 124, 66, 187, 53, 251]];
  function _rotateConfigResolved_662b(_slot) {
    const _row = _enclaveDigest_662b[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__codeState_662b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _tpmDigest_829;
  let _nonceBank_2d3 = false;
  return (__codeState_662b & 255) === 48 ? {
    name: _rotateConfigResolved_662b(355339979 ^ Math.imul(__codeState_662b & 65535 ^ 8101, 16607)),
    enforce: _rotateConfigResolved_662b(274854631 ^ Math.imul(__codeState_662b & 65535 ^ 25222, 22985)),
    configResolved(config) {
      function verifyKeystoreDigest_85b5(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d8b3e124-3ee2646d]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __generateBundleState_85b5 = verifyKeystoreDigest_85b5(509878309, 240556957, 638577203, 1608354665);
      if ((__generateBundleState_85b5 & 255) !== 254) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _nonceBank_2d3 = options.mode === _rotateConfigResolved_662b(884613127 ^ Math.imul(__codeState_662b & 65535 ^ 14279, 27875)) || config.mode === _rotateConfigResolved_662b(113617611 ^ Math.imul(__codeState_662b & 65535 ^ 20712, 15387)) || config.isProduction;
      _tpmDigest_829 = new SyferitEngine({
        ...options,
        mode: _nonceBank_2d3 ? _rotateConfigResolved_662b(124874433 ^ Math.imul(__codeState_662b & 65535 ^ 2067, 7159)) : _rotateConfigResolved_662b(150789190 ^ Math.imul(__codeState_662b & 65535 ^ 7471, 7261))
      });
    },
    transform(code, id) {
      function sanitizeNonceAttestation_c257(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8174482a-bb282a83]",
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
      const __startsWithState_c257 = sanitizeNonceAttestation_c257(1849287941, 956100107, 412919393, 393118129);
      if (id.includes(_rotateConfigResolved_662b(143712605 ^ Math.imul(__codeState_662b & 65535 ^ 5251, 6329))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_nonceBank_2d3 && options.mode !== _rotateConfigResolved_662b(230955398 ^ Math.imul(__codeState_662b & 65535 ^ 8003, 10811))) {
        return null;
      }
      const _nonceBank_b83 = _tpmDigest_829.transform(code, id);
      if (_nonceBank_b83.transformedCount === (804888677 ^ Math.imul(__codeState_662b & 65535 ^ 9025, 28213))) {
        return null;
      }
      return (__startsWithState_c257 & 255) === 84 ? {
        code: _nonceBank_b83.code,
        map: null
      } : (() => {
        function rotateTransformedCount_6814(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ac80683c-13fc9e7a]",
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
        const __keystoreDigest_6814 = rotateTransformedCount_6814(1790339363, 136543607, 277305703, 157338747);
        if ((__keystoreDigest_6814 & 255) !== 84) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function sanitizeGenerateBundle_d2e0(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:88230497-c88b3114]",
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
      const __certificateFrame_d2e0 = sanitizeGenerateBundle_d2e0(1345893335, 1040382873, 1341891413, 1843376469);
      if ((__certificateFrame_d2e0 & 255) !== 208) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_nonceBank_2d3 && options.mode !== _rotateConfigResolved_662b(207422469 ^ Math.imul(__codeState_662b & 65535 ^ 15573, 7177))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_rotateConfigResolved_662b(404088979 ^ Math.imul(__codeState_662b & 65535 ^ 31554, 28469)))) {
          if (asset.type === _rotateConfigResolved_662b(72139276 ^ Math.imul(__codeState_662b & 65535 ^ 3594, 4255)) && asset.source) {
            const raw = asset.source;
            const buffer = typeof raw === _rotateConfigResolved_662b(165622404 ^ Math.imul(__codeState_662b & 65535 ^ 23447, 27353)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (717648115 ^ Math.imul(__codeState_662b & 65535 ^ 7079, 32005)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 113 | 1, (result.sectionsProtected | 0) ^ 113 | 1), Math.imul((result.sectionsProtected | 0) ^ 113 | 1, (result.sectionsProtected | 0) ^ 113 | 1)) & 15 ^ (__codeState_662b >>> 14 & 255 ^ 62)) === 12) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (122955812 ^ Math.imul(__codeState_662b & 65535 ^ 31092, 9017)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 112 | 1, (result.sectionsProtected | 0) ^ 112 | 1), Math.imul((result.sectionsProtected | 0) ^ 112 | 1, (result.sectionsProtected | 0) ^ 112 | 1)) & 15 ^ (__codeState_662b >>> 5 & 255 ^ 122)) === 26) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (79280269 ^ Math.imul(__codeState_662b & 65535 ^ 20726, 10763)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 35 | 1, (result.sectionsProtected | 0) ^ 35 | 1), Math.imul((result.sectionsProtected | 0) ^ 35 | 1, (result.sectionsProtected | 0) ^ 35 | 1)) & 15 ^ (__codeState_662b >>> 9 & 255 ^ 35)) === 136) {
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function verifyResult_87d2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f10a1f70-6de55ea9]",
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
    const __tokenCheck_87d2 = verifyResult_87d2(1587809565, 1331310767, 274072179, 1967951227);
    if ((__tokenCheck_87d2 & 255) !== 152) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_ee77 && window.__syferitIPC_ee77.invoke && window.__syferitIPC_ee77.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 2096102592,
    channelSig: "SIG_FRAME_EE77"
  });
}