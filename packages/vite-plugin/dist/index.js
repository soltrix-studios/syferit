// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
export function syferit(options = {}) {
  function authenticateEndsWith_bb51(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ff9fbe5a-08e33ec5]",
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
  const __nonceContext_bb51 = authenticateEndsWith_bb51(1544164915, 896638089, 750486017, 1935495533);
  const _generateBundleEnvelope_bb51 = [[213, 66, 80, 201, 26, 207, 212, 53, 172, 58, 34, 249, 44, 158, 134, 13, 129, 18, 0], [184, 63, 58, 165], [157, 7, 1, 146, 244, 106, 118, 227, 122, 243], [98, 232, 252, 127, 211, 77, 83, 198, 85, 172], [71, 205, 215, 36, 190, 48, 56, 189, 48, 137], [56, 129, 171, 0, 156, 23, 1, 148, 225, 98, 113], [239, 102, 102, 239, 74, 240, 249, 122, 220, 93, 79, 193], [214, 92, 72, 203, 79, 161, 207, 42, 161, 56], [187, 33, 35, 176, 42, 132, 148, 1, 156, 21], [222, 15, 16, 138, 233], [116, 238, 229, 123, 221], [73, 182, 201, 42, 160, 49]];
  function _validateNonceBank_bb51(_slot) {
    const _row = _generateBundleEnvelope_bb51[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceContext_bb51 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _encodeBank_90;
  let _enforceCheck_cf2 = false;
  return (__nonceContext_bb51 & 255) === 163 ? {
    name: _validateNonceBank_bb51(230848056 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 15515, 15489)),
    enforce: _validateNonceBank_bb51(147831874 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 18670, 7375)),
    configResolved(config) {
      function rotateOptions_ac59(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bb0d0466-7b45a64a]",
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
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __bufferState_ac59 = rotateOptions_ac59(1070040777, 956712239, 897860169, 287384203);
      if ((__bufferState_ac59 & 255) !== 230) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _enforceCheck_cf2 = options.mode === _validateNonceBank_bb51(450237280 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 27653, 16491)) || config.mode === _validateNonceBank_bb51(621542355 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 32243, 19689)) || config.isProduction;
      _encodeBank_90 = new SyferitEngine({
        ...options,
        mode: _enforceCheck_cf2 ? _validateNonceBank_bb51(245078680 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 17911, 14219)) : _validateNonceBank_bb51(588082137 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 28263, 21927))
      });
    },
    transform(code, id) {
      function verifyEnclaveAttestation_9918(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f0a7e08b-11fb27da]",
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
      const __transformState_9918 = verifyEnclaveAttestation_9918(1779723043, 71591635, 1711962615, 745973943);
      if (id.includes(_validateNonceBank_bb51(191869507 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 4514, 32581))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_enforceCheck_cf2 && options.mode !== _validateNonceBank_bb51(108235529 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 4461, 17761))) {
        return null;
      }
      const _encodeBank_15c = _encodeBank_90.transform(code, id);
      if (_encodeBank_15c.transformedCount === (536107795 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 18348, 32189))) {
        return null;
      }
      return (__transformState_9918 & 255) === 231 ? {
        code: _encodeBank_15c.code,
        map: null
      } : (() => {
        function validateEntries_1cc7(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b53dac92-20a7d649]",
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
          if ((_h >>> 4 & 15) !== 1) {
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __keystoreFrame_1cc7 = validateEntries_1cc7(902840773, 1881425061, 7420709, 88598695);
        if ((__keystoreFrame_1cc7 & 255) !== 19) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function rotateEngine_67d0(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:76041a6c-00052e5d]",
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
      const __bundleState_67d0 = rotateEngine_67d0(1904677961, 1956251517, 1010884497, 1184421479);
      if ((__bundleState_67d0 & 255) !== 86) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_enforceCheck_cf2 && options.mode !== _validateNonceBank_bb51(126770835 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 19558, 6623))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_validateNonceBank_bb51(81249802 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 4828, 15485)))) {
          if (asset.type === _validateNonceBank_bb51(1889058 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 1771, 26237)) && asset.source) {
            const raw = asset.source;
            const buffer = typeof raw === _validateNonceBank_bb51(390003229 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 13769, 29631)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (382247239 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 31378, 12023)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 90 | 1, (result.sectionsProtected | 0) ^ 90 | 1), Math.imul((result.sectionsProtected | 0) ^ 90 | 1, (result.sectionsProtected | 0) ^ 90 | 1)) & 15 ^ (__nonceContext_bb51 >>> 21 & 255 ^ 173)) === 70) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (805231527 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 24900, 30273)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 46 | 1, (result.sectionsProtected | 0) ^ 46 | 1), Math.imul((result.sectionsProtected | 0) ^ 46 | 1, (result.sectionsProtected | 0) ^ 46 | 1)) & 15 ^ (__nonceContext_bb51 >>> 17 & 255 ^ 221)) === 49) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (327471912 ^ Math.imul(__nonceContext_bb51 & 65535 ^ 15548, 22009)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 18 | 1, (result.sectionsProtected | 0) ^ 18 | 1), Math.imul((result.sectionsProtected | 0) ^ 18 | 1, (result.sectionsProtected | 0) ^ 18 | 1)) & 15 ^ (__nonceContext_bb51 >>> 22 & 255 ^ 149)) === 109) {
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function attestType_c7df(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8d68a15e-b69d2149]",
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
    const __encodeState_c7df = attestType_c7df(1975887205, 1607616523, 576854933, 738939003);
    if ((__encodeState_c7df & 255) !== 93) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_e1a2 && window.__syferitIPC_e1a2.invoke && window.__syferitIPC_e1a2.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 1425017674,
    channelSig: "SIG_FRAME_E1A2"
  });
}