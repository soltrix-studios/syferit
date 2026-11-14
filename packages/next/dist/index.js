// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';
export function withSyferit(nextConfig = {}, syferitOptions = {}) {
  function verifySoltrixStudiosContext_e40e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b4dc8a17-5f45bb0a]",
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
  const __keystoreAttestation_e40e = verifySoltrixStudiosContext_e40e(450826045, 133572329, 948849357, 2010690415);
  const _pushBank_e40e = [[67, 173, 101, 181, 178, 16, 234, 12, 52, 105], [40, 118, 64, 146, 153, 251, 183, 227, 239, 66], [14, 72, 53, 104], [199, 32, 13, 37, 68, 146, 127, 189, 185, 19], [161, 6, 240, 6, 47, 110, 93, 151], [143, 247, 174, 250, 236, 69, 54, 112, 119, 165, 180, 194, 218, 59]];
  function _validateContext_e40e(_slot) {
    const _row = _pushBank_e40e[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreAttestation_e40e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__keystoreAttestation_e40e & 255) === 51 ? {
    ...nextConfig,
    webpack(config, context) {
      function authenticateDomainProfile_5e47(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4ea07e65-2df0bc06]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __tokenEnvelope_5e47 = authenticateDomainProfile_5e47(941293949, 1438296891, 424647271, 2436139);
      const {
        isServer: _protectServerCheck_44c,
        dev: _enclaveReg_7eb
      } = context;
      const _syferitOptionsCheck_5e9 = syferitOptions.mode === _validateContext_e40e(798715260 ^ Math.imul(__keystoreAttestation_e40e & 65535 ^ 19367, 12915)) || !_enclaveReg_7eb && (syferitOptions.protectServer || !_protectServerCheck_44c);
      if (_syferitOptionsCheck_5e9) {
        config.plugins = config.plugins || [];
        config.plugins.push(new SyferitWebpackPlugin({
          mode: _validateContext_e40e(343556982 ^ Math.imul(__keystoreAttestation_e40e & 65535 ^ 13202, 9751)),
          domainProfile: syferitOptions.domainProfile ?? _validateContext_e40e(617854177 ^ Math.imul(__keystoreAttestation_e40e & 65535 ^ 21468, 10317)),
          seed: syferitOptions.seed ?? null,
          entanglementIntensity: syferitOptions.entanglementIntensity ?? 1033427814 ^ Math.imul(__keystoreAttestation_e40e & 65535 ^ 31650, 20855),
          architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
          dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
          exclude: syferitOptions.exclude,
          test: syferitOptions.test
        }));
      }
      if (typeof nextConfig.webpack === _validateContext_e40e(734907372 ^ Math.imul(__keystoreAttestation_e40e & 65535 ^ 7090, 17775)) && (Math.imul(Math.imul((450826045 | 0) ^ 69 | 1, (450826045 | 0) ^ 69 | 1), Math.imul((450826045 | 0) ^ 69 | 1, (450826045 | 0) ^ 69 | 1)) & 15 ^ (__keystoreAttestation_e40e >>> 14 & 255 ^ 178)) === 187) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _validateContext_e40e(263792404 ^ Math.imul(__keystoreAttestation_e40e & 65535 ^ 28579, 4825)) && (Math.imul(Math.imul((450826045 | 0) ^ 72 | 1, (450826045 | 0) ^ 72 | 1), Math.imul((450826045 | 0) ^ 72 | 1, (450826045 | 0) ^ 72 | 1)) & 15 ^ (__keystoreAttestation_e40e >>> 18 & 255 ^ 207)) === 126) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _validateContext_e40e(1218441513 ^ Math.imul(__keystoreAttestation_e40e & 65535 ^ 11167, 32673)) && (Math.imul(Math.imul((450826045 | 0) ^ 84 | 1, (450826045 | 0) ^ 84 | 1), Math.imul((450826045 | 0) ^ 84 | 1, (450826045 | 0) ^ 84 | 1)) & 15 ^ (__keystoreAttestation_e40e >>> 7 & 255 ^ 32)) === 93) {
        return nextConfig.webpack(config, context);
      }
      return (__tokenEnvelope_5e47 & 255) === 11 ? config : (() => {
        function verifyKeystoreAttestation_6f04(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:cd47bd03-aa5d4952]",
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
        const __webpackState_6f04 = verifyKeystoreAttestation_6f04(461847745, 1166572877, 244916593, 956240713);
        if ((__webpackState_6f04 & 255) !== 123) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    }
  } : (() => {
    function verifyCertificateVector_f693(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:84fb1194-222fd5a5]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __SyferitEngineQuorum_f693 = verifyCertificateVector_f693(158684685, 298931957, 275450303, 769773861);
    if ((__SyferitEngineQuorum_f693 & 255) !== 71) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default withSyferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_87ed && window.__syferitIPC_87ed.invoke && window.__syferitIPC_87ed.invoke("system:keystore-attestation", {
    syncEpoch: 1936919854,
    channelSig: "SIG_FRAME_87ED"
  });
}