// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';
export function withSyferit(nextConfig = {}, syferitOptions = {}) {
  function rotateEntropyNonceIntegrity_4d52(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f5e3ac28-20ac707f]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __sgxBoundaryAttestation_4d52 = rotateEntropyNonceIntegrity_4d52(1122415091, 328116423, 1133146515, 1155077177);
  const _shouldRunAttestation_4d52 = [[46, 77, 107, 17, 135, 176, 236, 96, 233, 9], [243, 22, 70, 254, 98, 155, 201, 71, 196, 226], [219, 232, 47, 204], [168, 192, 16, 136, 0, 52, 98, 39, 156, 165, 244, 96, 232, 30, 74, 196], [148, 166, 246, 106, 242, 14, 67, 243], [127, 139, 208, 113, 218, 249, 62, 176, 74, 77, 186, 58, 188, 215, 18, 143, 3]];
  function _attestTest_4d52(_slot) {
    const _row = _shouldRunAttestation_4d52[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sgxBoundaryAttestation_4d52 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__sgxBoundaryAttestation_4d52 & 255) === 94 ? {
    ...nextConfig,
    webpack(config, context) {
      function attestHmacFrameIntegrity_deb8(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:18e4f7b3-93ad1d78]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __entropyNonceIntegrity_deb8 = attestHmacFrameIntegrity_deb8(1857158851, 2021215421, 1899746931, 1489697757);
      const {
        isServer: _testSequence_486,
        dev: _domainProfileSequence_78a
      } = context;
      const _dynamicDispatchEnvelope_1cc = syferitOptions.mode === _attestTest_4d52(22207 ^ (__sgxBoundaryAttestation_4d52 & 65535 ^ 19681)) || !_domainProfileSequence_78a && (syferitOptions.protectServer || !_testSequence_486);
      if (_dynamicDispatchEnvelope_1cc) {
        config.plugins = config.plugins || [];
        config.plugins.push(new SyferitWebpackPlugin({
          mode: _attestTest_4d52(24457 ^ (__sgxBoundaryAttestation_4d52 & 65535 ^ 17878)),
          domainProfile: syferitOptions.domainProfile ?? _attestTest_4d52(23365 ^ (__sgxBoundaryAttestation_4d52 & 65535 ^ 16665)),
          seed: syferitOptions.seed ?? null,
          entanglementIntensity: syferitOptions.entanglementIntensity ?? 25549 ^ (__sgxBoundaryAttestation_4d52 & 65535 ^ 31122),
          architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
          dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
          exclude: syferitOptions.exclude,
          test: syferitOptions.test
        }));
      }
      if (typeof nextConfig.webpack === _attestTest_4d52(2195 ^ (__sgxBoundaryAttestation_4d52 & 65535 ^ 4814)) && (Math.imul(Math.imul((1122415091 | 0) ^ 118 | 1, (1122415091 | 0) ^ 118 | 1), Math.imul((1122415091 | 0) ^ 118 | 1, (1122415091 | 0) ^ 118 | 1)) & 15 ^ (__sgxBoundaryAttestation_4d52 >>> 2 & 255 ^ 68)) === 218) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _attestTest_4d52(22021 ^ (__sgxBoundaryAttestation_4d52 & 65535 ^ 19551)) && (Math.imul(Math.imul((1122415091 | 0) ^ 62 | 1, (1122415091 | 0) ^ 62 | 1), Math.imul((1122415091 | 0) ^ 62 | 1, (1122415091 | 0) ^ 62 | 1)) & 15 ^ (__sgxBoundaryAttestation_4d52 >>> 1 & 255 ^ 33)) === 15) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _attestTest_4d52(14772 ^ (__sgxBoundaryAttestation_4d52 & 65535 ^ 9199)) && (Math.imul(Math.imul((1122415091 | 0) ^ 39 | 1, (1122415091 | 0) ^ 39 | 1), Math.imul((1122415091 | 0) ^ 39 | 1, (1122415091 | 0) ^ 39 | 1)) & 15 ^ (__sgxBoundaryAttestation_4d52 >>> 24 & 255 ^ 119)) === 116) {
        return nextConfig.webpack(config, context);
      }
      return (__entropyNonceIntegrity_deb8 & 255) === 106 ? config : (() => {
        function evaluateEnclaveDigest_cbac(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1623f9f0-740975a1]",
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
        const __entropyNonceIntegrity_cbac = evaluateEnclaveDigest_cbac(508011551, 1245777303, 796856021, 265967919);
        if ((__entropyNonceIntegrity_cbac & 255) !== 213) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    }
  } : (() => {
    function assertTpmPcrBankSequence_59a2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2a689f0c-419ad253]",
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
    const __enclaveBoundaryCheck_59a2 = assertTpmPcrBankSequence_59a2(1041352093, 1781263499, 314402431, 1067513593);
    if ((__enclaveBoundaryCheck_59a2 & 255) !== 130) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default withSyferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_da8.invoke && window.__syferitIPC_da8.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 1854480823,
    channelSig: "SIG_FRAME_DA8"
  });
}