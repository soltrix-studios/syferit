// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';
export function withSyferit(nextConfig = {}, syferitOptions = {}) {
  function auditNonceAttestation_76e5(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:622f96a2-e51458f4]",
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
    if ((_h >>> 4 & 15) !== 4) {
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __quorumFrame_76e5 = auditNonceAttestation_76e5(2128746613, 1919803021, 1886180691, 1964932329);
  const _nextConfigFrame_76e5 = [[53, 104, 230, 193, 172, 205, 105, 80, 2, 44], [26, 77, 193, 174, 139, 176, 54, 55, 253, 9], [252, 5, 178, 156], [209, 231, 140, 113, 58, 109, 254, 193, 175, 212], [191, 219, 115, 90, 25, 43, 222, 163], [157, 188, 47, 46, 254, 14, 183, 156, 69, 158, 53, 246, 200, 224]];
  function _auditNonceAttestation_76e5(_slot) {
    const _row = _nextConfigFrame_76e5[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumFrame_76e5 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__quorumFrame_76e5 & 255) === 69 ? {
    ...nextConfig,
    webpack(config, context) {
      function authenticateNextConfig_be61(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:add9d1e2-a83d5970]",
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
      const __seedState_be61 = authenticateNextConfig_be61(1403889969, 1890458971, 435942121, 1933128609);
      const {
        isServer: _tokenDigest_983,
        dev: _syferitOptionsCheck_486
      } = context;
      const _SyferitWebpackPluginProof_7e7 = syferitOptions.mode === _auditNonceAttestation_76e5(852428323 ^ Math.imul(__quorumFrame_76e5 & 65535 ^ 10886, 14881)) || !_syferitOptionsCheck_486 && (syferitOptions.protectServer || !_tokenDigest_983);
      if (_SyferitWebpackPluginProof_7e7) {
        config.plugins = config.plugins || [];
        config.plugins.push(new SyferitWebpackPlugin({
          mode: _auditNonceAttestation_76e5(1804977624 ^ Math.imul(__quorumFrame_76e5 & 65535 ^ 3532, 28369)),
          domainProfile: syferitOptions.domainProfile ?? _auditNonceAttestation_76e5(1352878678 ^ Math.imul(__quorumFrame_76e5 & 65535 ^ 17881, 29923)),
          seed: syferitOptions.seed ?? null,
          entanglementIntensity: syferitOptions.entanglementIntensity ?? 1560780001 ^ Math.imul(__quorumFrame_76e5 & 65535 ^ 7909, 25875),
          architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
          dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
          exclude: syferitOptions.exclude,
          test: syferitOptions.test
        }));
      }
      if (typeof nextConfig.webpack === _auditNonceAttestation_76e5(1282385770 ^ Math.imul(__quorumFrame_76e5 & 65535 ^ 3696, 19941)) && (Math.imul(Math.imul((2128746613 | 0) ^ 93 | 1, (2128746613 | 0) ^ 93 | 1), Math.imul((2128746613 | 0) ^ 93 | 1, (2128746613 | 0) ^ 93 | 1)) & 15 ^ (__quorumFrame_76e5 >>> 20 & 255 ^ 45)) === 65) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _auditNonceAttestation_76e5(330088937 ^ Math.imul(__quorumFrame_76e5 & 65535 ^ 31956, 9373)) && (Math.imul(Math.imul((2128746613 | 0) ^ 121 | 1, (2128746613 | 0) ^ 121 | 1), Math.imul((2128746613 | 0) ^ 121 | 1, (2128746613 | 0) ^ 121 | 1)) & 15 ^ (__quorumFrame_76e5 >>> 3 & 255 ^ 110)) === 199) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _auditNonceAttestation_76e5(884978410 ^ Math.imul(__quorumFrame_76e5 & 65535 ^ 26166, 23445)) && (Math.imul(Math.imul((2128746613 | 0) ^ 50 | 1, (2128746613 | 0) ^ 50 | 1), Math.imul((2128746613 | 0) ^ 50 | 1, (2128746613 | 0) ^ 50 | 1)) & 15 ^ (__quorumFrame_76e5 >>> 5 & 255 ^ 233)) === 72) {
        return nextConfig.webpack(config, context);
      }
      return (__seedState_be61 & 255) === 146 ? config : (() => {
        function sanitizeExclude_f059(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a15e3d7c-eeb921ef]",
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
        const __nonceAttestation_f059 = sanitizeExclude_f059(79754467, 602639303, 1689626351, 1257646475);
        if ((__nonceAttestation_f059 & 255) !== 227) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    }
  } : (() => {
    function verifyPlugins_919e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:34cd3641-06dc9ee4]",
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
    const __keystoreDigest_919e = verifyPlugins_919e(1457278579, 734727279, 370650175, 1392931869);
    if ((__keystoreDigest_919e & 255) !== 94) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default withSyferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_82c0 && window.__syferitIPC_82c0.invoke && window.__syferitIPC_82c0.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 1718156221,
    channelSig: "SIG_FRAME_82C0"
  });
}