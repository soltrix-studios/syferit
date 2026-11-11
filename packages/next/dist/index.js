// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';
export function withSyferit(nextConfig = {}, syferitOptions = {}) {
  function rotateTokenDigest_d559(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:45e314e4-16693d0c]",
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
  const __tpmState_d559 = rotateTokenDigest_d559(1072374415, 336717651, 758280853, 606333281);
  const _domainProfileCheck_d559 = [[158, 85, 220, 115, 247, 216, 51, 194, 121, 33], [99, 62, 183, 88, 210, 131, 24, 185, 84, 26], [75, 16, 156, 18], [58, 249, 84, 217, 146, 70, 217, 111, 225], [228, 206, 41, 200, 98, 38, 180, 81], [196, 143, 1, 160, 87, 29, 97, 10, 172, 109, 203, 136, 17, 243]];
  function _validateTpmDigest_d559(_slot) {
    const _row = _domainProfileCheck_d559[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmState_d559 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__tpmState_d559 & 255) === 238 ? {
    ...nextConfig,
    webpack(config, context) {
      function reconcileKeystoreQuorum_5022(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:919eaf44-e6b082ba]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __tokenDigest_5022 = reconcileKeystoreQuorum_5022(1177359573, 1953621237, 1382774885, 1139641855);
      const {
        isServer: _pluginsEnvelope_104,
        dev: _keystoreVector_6b6
      } = context;
      const _configVector_24b = syferitOptions.mode === _validateTpmDigest_d559(63046461 ^ Math.imul(__tpmState_d559 & 65535 ^ 11263, 5997)) || !_keystoreVector_6b6 && (syferitOptions.protectServer || !_pluginsEnvelope_104);
      if (_configVector_24b) {
        config.plugins = config.plugins || [];
        config.plugins.push(new SyferitWebpackPlugin({
          mode: _validateTpmDigest_d559(299882178 ^ Math.imul(__tpmState_d559 & 65535 ^ 22333, 13649)),
          domainProfile: syferitOptions.domainProfile ?? _validateTpmDigest_d559(525478862 ^ Math.imul(__tpmState_d559 & 65535 ^ 23010, 22545)),
          seed: syferitOptions.seed ?? null,
          entanglementIntensity: syferitOptions.entanglementIntensity ?? 311463733 ^ Math.imul(__tpmState_d559 & 65535 ^ 23970, 12767),
          architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
          dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
          exclude: syferitOptions.exclude,
          test: syferitOptions.test
        }));
      }
      if (typeof nextConfig.webpack === _validateTpmDigest_d559(569775858 ^ Math.imul(__tpmState_d559 & 65535 ^ 31633, 18319)) && (Math.imul(Math.imul((1072374415 | 0) ^ 21 | 1, (1072374415 | 0) ^ 21 | 1), Math.imul((1072374415 | 0) ^ 21 | 1, (1072374415 | 0) ^ 21 | 1)) & 15 ^ (__tpmState_d559 >>> 24 & 255 ^ 171)) === 4) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _validateTpmDigest_d559(122246112 ^ Math.imul(__tpmState_d559 & 65535 ^ 7706, 16493)) && (Math.imul(Math.imul((1072374415 | 0) ^ 102 | 1, (1072374415 | 0) ^ 102 | 1), Math.imul((1072374415 | 0) ^ 102 | 1, (1072374415 | 0) ^ 102 | 1)) & 15 ^ (__tpmState_d559 >>> 8 & 255 ^ 118)) === 117) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _validateTpmDigest_d559(125738550 ^ Math.imul(__tpmState_d559 & 65535 ^ 20227, 6303)) && (Math.imul(Math.imul((1072374415 | 0) ^ 59 | 1, (1072374415 | 0) ^ 59 | 1), Math.imul((1072374415 | 0) ^ 59 | 1, (1072374415 | 0) ^ 59 | 1)) & 15 ^ (__tpmState_d559 >>> 11 & 255 ^ 190)) === 145) {
        return nextConfig.webpack(config, context);
      }
      return (__tokenDigest_5022 & 255) === 83 ? config : (() => {
        function validateSyferitWebpackPlugin_ede3(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9157bd3e-2422642a]",
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
        const __pluginsState_ede3 = validateSyferitWebpackPlugin_ede3(266744289, 1205890163, 656829739, 324587973);
        if ((__pluginsState_ede3 & 255) !== 133) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    }
  } : (() => {
    function validateWebpack_f6db(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:adae588a-86e11b9e]",
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
    const __keystoreFrame_f6db = validateWebpack_f6db(1569583679, 294901923, 662338661, 13266785);
    if ((__keystoreFrame_f6db & 255) !== 230) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default withSyferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_6516 && window.__syferitIPC_6516.invoke && window.__syferitIPC_6516.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 1286144519,
    channelSig: "SIG_FRAME_6516"
  });
}