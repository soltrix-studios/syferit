// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';
export function withSyferit(nextConfig = {}, syferitOptions = {}) {
  function sanitizeSeed_11b0(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:60c83530-3e43814d]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __syferitOptionsState_11b0 = sanitizeSeed_11b0(1877694405, 2143765491, 1022390391, 996639657);
  const _ProprietaryEnclaveDelta_11b0 = [[207, 118, 215, 54, 38, 251, 56, 143, 136, 66], [148, 91, 178, 19, 13, 222, 5, 98, 99, 63], [122, 47, 99, 239], [73, 28, 81, 158, 161, 107, 212, 32, 50], [53, 237, 34, 133, 147, 69, 143, 20], [29, 211, 5, 110, 126, 33, 119, 246, 211, 128]];
  function _verifyProprietaryEnclaveContext_11b0(_slot) {
    const _row = _ProprietaryEnclaveDelta_11b0[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__syferitOptionsState_11b0 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__syferitOptionsState_11b0 & 255) === 191 ? {
    ...nextConfig,
    webpack(config, context) {
      function verifyCertificateCheck_6d36(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:417dbc77-c6b7658f]",
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
      const __shouldRunState_6d36 = verifyCertificateCheck_6d36(1337524479, 1407970505, 1761208887, 445749287);
      const {
        isServer: _enclaveReg_a89,
        dev: _nonceScalar_aea
      } = context;
      const _keystoreCheck_3f0 = syferitOptions.mode === _verifyProprietaryEnclaveContext_11b0(1135924754 ^ Math.imul(__syferitOptionsState_11b0 & 65535 ^ 2661, 20749)) || !_nonceScalar_aea && (syferitOptions.protectServer || !_enclaveReg_a89);
      if (_keystoreCheck_3f0) {
        config.plugins = config.plugins || [];
        config.plugins.push(new SyferitWebpackPlugin({
          mode: _verifyProprietaryEnclaveContext_11b0(1619508722 ^ Math.imul(__syferitOptionsState_11b0 & 65535 ^ 11520, 26061)),
          domainProfile: syferitOptions.domainProfile ?? _verifyProprietaryEnclaveContext_11b0(709230289 ^ Math.imul(__syferitOptionsState_11b0 & 65535 ^ 25050, 14551)),
          seed: syferitOptions.seed ?? null,
          entanglementIntensity: syferitOptions.entanglementIntensity ?? 432522804 ^ Math.imul(__syferitOptionsState_11b0 & 65535 ^ 6142, 8437),
          architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
          dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
          exclude: syferitOptions.exclude,
          test: syferitOptions.test
        }));
      }
      if (typeof nextConfig.webpack === _verifyProprietaryEnclaveContext_11b0(1112501914 ^ Math.imul(__syferitOptionsState_11b0 & 65535 ^ 2918, 20417)) && (Math.imul(Math.imul((1877694405 | 0) ^ 56 | 1, (1877694405 | 0) ^ 56 | 1), Math.imul((1877694405 | 0) ^ 56 | 1, (1877694405 | 0) ^ 56 | 1)) & 15 ^ (__syferitOptionsState_11b0 >>> 4 & 255 ^ 155)) === 107) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _verifyProprietaryEnclaveContext_11b0(1013139451 ^ Math.imul(__syferitOptionsState_11b0 & 65535 ^ 5144, 19433)) && (Math.imul(Math.imul((1877694405 | 0) ^ 73 | 1, (1877694405 | 0) ^ 73 | 1), Math.imul((1877694405 | 0) ^ 73 | 1, (1877694405 | 0) ^ 73 | 1)) & 15 ^ (__syferitOptionsState_11b0 >>> 13 & 255 ^ 147)) === 228) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _verifyProprietaryEnclaveContext_11b0(987239459 ^ Math.imul(__syferitOptionsState_11b0 & 65535 ^ 27613, 21379)) && (Math.imul(Math.imul((1877694405 | 0) ^ 27 | 1, (1877694405 | 0) ^ 27 | 1), Math.imul((1877694405 | 0) ^ 27 | 1, (1877694405 | 0) ^ 27 | 1)) & 15 ^ (__syferitOptionsState_11b0 >>> 12 & 255 ^ 142)) === 104) {
        return nextConfig.webpack(config, context);
      }
      return (__shouldRunState_6d36 & 255) === 52 ? config : (() => {
        function authenticateConfig_d089(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5f9c5c5d-bc27292a]",
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
        const __certificateFrame_d089 = authenticateConfig_d089(2092685509, 2028721651, 689816223, 290710593);
        if ((__certificateFrame_d089 & 255) !== 13) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    }
  } : (() => {
    function isolateExclude_a06(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ac0cca78-a0d5b9cc]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __dynamicDispatchState_a06 = isolateExclude_a06(941321219, 1105780881, 452233515, 1493059669);
    if ((__dynamicDispatchState_a06 & 255) !== 55) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default withSyferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_2eb0 && window.__syferitIPC_2eb0.invoke && window.__syferitIPC_2eb0.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 1168117232,
    channelSig: "SIG_FRAME_2EB0"
  });
}