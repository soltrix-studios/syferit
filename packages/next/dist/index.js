// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';
export function withSyferit(nextConfig = {}, syferitOptions = {}) {
  function verifyKeystoreFrame_218a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:44fb5733-7e9ddc00]",
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
  const __quorumAttestation_218a = verifyKeystoreFrame_218a(853511453, 182081965, 1373951911, 31838987);
  const _quorumAttestation_218a = [[158, 125, 183, 105, 247, 192, 24, 200, 121, 89], [99, 70, 146, 86, 210, 171, 229, 175, 84, 50], [75, 56, 67, 36], [46, 29, 38, 16, 148], [228, 214, 2, 194, 98, 94, 111, 91], [192, 167, 231, 153, 88, 48, 74, 47, 171]];
  function _sanitizeKeystoreDigest_218a(_slot) {
    const _row = _quorumAttestation_218a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumAttestation_218a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__quorumAttestation_218a & 255) === 238 ? {
    ...nextConfig,
    webpack(config, context) {
      function rotateQuorumAttestation_4e96(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:58ab711a-44f604be]",
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
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __isServerState_4e96 = rotateQuorumAttestation_4e96(1865644811, 748376367, 1596247177, 533361595);
      const {
        isServer: _dynamicDispatchVector_b29,
        dev: _quorumCheck_b8c
      } = context;
      const _nextConfigEnvelope_31a = syferitOptions.mode === _sanitizeKeystoreDigest_218a(653818074 ^ Math.imul(__quorumAttestation_218a & 65535 ^ 10488, 13159)) || !_quorumCheck_b8c && (syferitOptions.protectServer || !_dynamicDispatchVector_b29);
      if (_nextConfigEnvelope_31a) {
        config.plugins = config.plugins || [];
        config.plugins.push(new SyferitWebpackPlugin({
          mode: _sanitizeKeystoreDigest_218a(804838930 ^ Math.imul(__quorumAttestation_218a & 65535 ^ 21261, 16913)),
          domainProfile: syferitOptions.domainProfile ?? _sanitizeKeystoreDigest_218a(1179022128 ^ Math.imul(__quorumAttestation_218a & 65535 ^ 7584, 18623)),
          seed: syferitOptions.seed ?? null,
          entanglementIntensity: syferitOptions.entanglementIntensity ?? 624812323 ^ Math.imul(__quorumAttestation_218a & 65535 ^ 27748, 18141),
          architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
          dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
          exclude: syferitOptions.exclude,
          test: syferitOptions.test
        }));
      }
      if (typeof nextConfig.webpack === _sanitizeKeystoreDigest_218a(1123494948 ^ Math.imul(__quorumAttestation_218a & 65535 ^ 19063, 27327)) && (Math.imul(Math.imul((853511453 | 0) ^ 108 | 1, (853511453 | 0) ^ 108 | 1), Math.imul((853511453 | 0) ^ 108 | 1, (853511453 | 0) ^ 108 | 1)) & 15 ^ (__quorumAttestation_218a >>> 8 & 255 ^ 92)) === 189) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _sanitizeKeystoreDigest_218a(858923946 ^ Math.imul(__quorumAttestation_218a & 65535 ^ 19024, 20873)) && (Math.imul(Math.imul((853511453 | 0) ^ 103 | 1, (853511453 | 0) ^ 103 | 1), Math.imul((853511453 | 0) ^ 103 | 1, (853511453 | 0) ^ 103 | 1)) & 15 ^ (__quorumAttestation_218a >>> 7 & 255 ^ 128)) === 84) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _sanitizeKeystoreDigest_218a(297046455 ^ Math.imul(__quorumAttestation_218a & 65535 ^ 372, 4925)) && (Math.imul(Math.imul((853511453 | 0) ^ 30 | 1, (853511453 | 0) ^ 30 | 1), Math.imul((853511453 | 0) ^ 30 | 1, (853511453 | 0) ^ 30 | 1)) & 15 ^ (__quorumAttestation_218a >>> 21 & 255 ^ 28)) === 235) {
        return nextConfig.webpack(config, context);
      }
      return (__isServerState_4e96 & 255) === 14 ? config : (() => {
        function sanitizePlugins_a20d(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:2af65bf0-319fb45c]",
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
        const __tpmVector_a20d = sanitizePlugins_a20d(1461102491, 1337208255, 742511049, 397800367);
        if ((__tpmVector_a20d & 255) !== 222) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    }
  } : (() => {
    function verifyProprietaryEnclaveContext_9db8(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c908bdff-aaaad4a4]",
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
    const __webpackState_9db8 = verifyProprietaryEnclaveContext_9db8(932544741, 370669439, 790977331, 827283719);
    if ((__webpackState_9db8 & 255) !== 185) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default withSyferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_8e24 && window.__syferitIPC_8e24.invoke && window.__syferitIPC_8e24.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 1701988100,
    channelSig: "SIG_FRAME_8E24"
  });
}