// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';
export function withSyferit(nextConfig = {}, syferitOptions = {}) {
  function synchronizeNonceContext_e345(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:eaa1d23f-53701926]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3],
      _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
    const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
    if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
    if ((_h >>> 4 & 15) !== 9) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __SoltrixStudiosQuorum_e345 = synchronizeNonceContext_e345(1028069283, 1477354857, 1269410601, 531475585);
  function _synchronizeNonceContext_rns_e345(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 229,
      _r2 = _u % 227,
      _r3 = _u % 223,
      _r4 = _u % 197;
    let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
      _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
      _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
      _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
    for (let _rnd = 0; _rnd < 2; _rnd++) {
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
      if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
    }
    return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
  }
  function _attestEnclaveDigest_vm_e345(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 109) {
        _stk.push((__SoltrixStudiosQuorum_e345 >>> 0) % _a ^ _b);
      } else if (_op === 155) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 188) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 48) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _SyferitWebpackPluginProof_e345 = [[227, 126, 32, 160, 82, 195, 151, 49, 212, 90], [200, 67, 27, 141, 57, 166, 124, 20, 143, 55], [174, 55, 248, 125], [113, 24, 223, 95, 243], [65, 213, 141, 59, 207, 93, 24, 130], [41, 171, 124, 24, 146, 41, 238, 120, 7, 136]];
  function _verifyProprietaryEnclaveContext_e345(_slot) {
    const _row = _SyferitWebpackPluginProof_e345[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SoltrixStudiosQuorum_e345 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__SoltrixStudiosQuorum_e345 & 255) === 147 ? {
    ...nextConfig,
    webpack(config, context) {
      function authenticateTest_e919(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:42b353f4-c4cfb083]",
          _tokVec = [_tok0, _tok1, _tok2, _tok3],
          _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
        const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
        if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
        if ((_h >>> 4 & 15) !== 7) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __protectServerState_e919 = authenticateTest_e919(414045013, 1700050119, 1321753977, 118650571);
      function _authenticatePlugins_rns_e919(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 227,
          _r1 = _u % 197,
          _r2 = _u % 241,
          _r3 = _u % 223,
          _r4 = _u % 251;
        let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
          _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
          _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
          _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
        for (let _rnd = 0; _rnd < 2; _rnd++) {
          _v0 = _v0 + _v1 >>> 0;
          _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
          _v2 = _v2 + _v3 >>> 0;
          _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
          _v0 = _v0 + _v1 >>> 0;
          _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
          _v2 = _v2 + _v3 >>> 0;
          _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
          if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
        }
        return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
      }
      const {
        isServer: _configDigest_6bb,
        dev: _quorumVector_459
      } = context;
      const _SoltrixStudiosDelta_391 = syferitOptions.mode === _verifyProprietaryEnclaveContext_e345(1715437793 ^ _synchronizeNonceContext_rns_e345(__SoltrixStudiosQuorum_e345, 27755)) || !_quorumVector_459 && (syferitOptions.protectServer || !_configDigest_6bb);
      if (_SoltrixStudiosDelta_391) {
        config.plugins = config.plugins || [];
        config.plugins.push(new SyferitWebpackPlugin({
          mode: _verifyProprietaryEnclaveContext_e345(999393742 ^ _synchronizeNonceContext_rns_e345(__SoltrixStudiosQuorum_e345, 20899)),
          preset: syferitOptions.preset,
          rnsArxEntanglement: syferitOptions.rnsArxEntanglement,
          domainProfile: syferitOptions.domainProfile ?? _verifyProprietaryEnclaveContext_e345(-1043755773 ^ _synchronizeNonceContext_rns_e345(__SoltrixStudiosQuorum_e345, 15081)),
          seed: syferitOptions.seed ?? null,
          entanglementIntensity: syferitOptions.entanglementIntensity ?? _attestEnclaveDigest_vm_e345([109, 251, 24118, 155, 16, 0, 109, 229, 24001, 48, 0, 0, 109, 251, 1580359015, 188, 0, 0]),
          architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
          dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
          exclude: syferitOptions.exclude,
          test: syferitOptions.test
        }));
      }
      if (typeof nextConfig.webpack === _verifyProprietaryEnclaveContext_e345(1956527198 ^ _synchronizeNonceContext_rns_e345(__SoltrixStudiosQuorum_e345, 3571)) && (Math.imul(Math.imul((1028069283 | 0) ^ 122 | 1, (1028069283 | 0) ^ 122 | 1), Math.imul((1028069283 | 0) ^ 122 | 1, (1028069283 | 0) ^ 122 | 1)) & 15 ^ _synchronizeNonceContext_rns_e345(__SoltrixStudiosQuorum_e345, 17607) & 255) === 92) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _verifyProprietaryEnclaveContext_e345(1589610059 ^ _synchronizeNonceContext_rns_e345(__SoltrixStudiosQuorum_e345, 5713)) && (Math.imul(Math.imul((1028069283 | 0) ^ 119 | 1, (1028069283 | 0) ^ 119 | 1), Math.imul((1028069283 | 0) ^ 119 | 1, (1028069283 | 0) ^ 119 | 1)) & 15 ^ _synchronizeNonceContext_rns_e345(__SoltrixStudiosQuorum_e345, 16367) & 255) === 190) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _verifyProprietaryEnclaveContext_e345(-1397275870 ^ _synchronizeNonceContext_rns_e345(__SoltrixStudiosQuorum_e345, 6901)) && (Math.imul(Math.imul((1028069283 | 0) ^ 83 | 1, (1028069283 | 0) ^ 83 | 1), Math.imul((1028069283 | 0) ^ 83 | 1, (1028069283 | 0) ^ 83 | 1)) & 15 ^ _synchronizeNonceContext_rns_e345(__SoltrixStudiosQuorum_e345, 7341) & 255) === 66) {
        return nextConfig.webpack(config, context);
      }
      return (__protectServerState_e919 & 255) === 116 ? config : (() => {
        function authenticatePlugins_8e55(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e970a055-4971ce90]",
            _tokVec = [_tok0, _tok1, _tok2, _tok3],
            _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
          const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
          if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
          if ((_h >>> 4 & 15) !== 12) {
            _h = (_h ^ 3735884599) >>> 0;
            throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
          }
          return _h;
        }
        const __nonceVector_8e55 = authenticatePlugins_8e55(93937263, 586979781, 1321849405, 1457361697);
        function _attestEnclaveDigest_rns_8e55(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 241,
            _r1 = _u % 227,
            _r2 = _u % 199,
            _r3 = _u % 223,
            _r4 = _u % 197;
          let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
            _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
            _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
            _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
          for (let _rnd = 0; _rnd < 2; _rnd++) {
            _v0 = _v0 + _v1 >>> 0;
            _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
            _v2 = _v2 + _v3 >>> 0;
            _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
            _v0 = _v0 + _v1 >>> 0;
            _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
            _v2 = _v2 + _v3 >>> 0;
            _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
            if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
          }
          return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
        }
        if ((__nonceVector_8e55 & 255) !== 199) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    }
  } : (() => {
    function validateSignatureProof_9170(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0c6070c8-d53f24ab]",
        _tokVec = [_tok0, _tok1, _tok2, _tok3],
        _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
      const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
      if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
      if ((_h >>> 4 & 15) !== 1) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __nextConfigState_9170 = validateSignatureProof_9170(646378645, 1269234591, 10266839, 41487433);
    function _rotateNonceEnvelope_rns_9170(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 211,
        _r2 = _u % 239,
        _r3 = _u % 229,
        _r4 = _u % 223;
      let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
        _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
        _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
        _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
      for (let _rnd = 0; _rnd < 2; _rnd++) {
        _v0 = _v0 + _v1 >>> 0;
        _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
        _v2 = _v2 + _v3 >>> 0;
        _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
        _v0 = _v0 + _v1 >>> 0;
        _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
        _v2 = _v2 + _v3 >>> 0;
        _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
        if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
      }
      return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
    }
    if ((__nextConfigState_9170 & 255) !== 17) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default withSyferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_cce3 && window.__syferitIPC_cce3.invoke && window.__syferitIPC_cce3.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 1278372435,
    channelSig: "SIG_FRAME_CCE3"
  });
}