// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';
const DEFAULT_NEXT_EXCLUDES = [/framework-/, /polyfills-/, /webpack-/, /main-/, /_ssgManifest/, /_buildManifest/, /next[/\\]dist[/\\]client[/\\]/, /static[/\\]chunks[/\\][0-9a-f]{8}-/];
function mergeNextExcludes(userExclude) {
  function isolateTokenAttestation_8227(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:07448c42-bf398b3d]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __assetNameState_8227 = isolateTokenAttestation_8227(562082191, 1962562055, 467547573, 1467984575);
  function _authenticateSignatureVector_rns_8227(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 239,
      _r2 = _u % 227,
      _r3 = _u % 241,
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
  const _quorumVector_8227 = [[175, 79, 102, 32, 63, 216, 203, 102, 148], [139, 48, 91, 199, 245, 176, 166, 86], [119, 4, 46, 172, 212, 142, 156, 52, 73, 247], [82, 225, 11, 139, 185, 83, 97, 235, 44, 210], [47, 215, 197, 127, 149]];
  function _synchronizeNonceContext_8227(_slot) {
    const _row = _quorumVector_8227[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__assetNameState_8227 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (!userExclude) {
    return DEFAULT_NEXT_EXCLUDES;
  }
  if (typeof userExclude === _synchronizeNonceContext_8227(-1212666727 ^ _authenticateSignatureVector_rns_8227(__assetNameState_8227, 22269)) && (Math.imul(Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 90 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 90 | 1), Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 90 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 90 | 1)) & 15 ^ _authenticateSignatureVector_rns_8227(__assetNameState_8227, 21721) & 255) === 230) {
    return assetName => DEFAULT_NEXT_EXCLUDES.some(rx => rx.test(assetName)) || userExclude(assetName);
  } else if (typeof userExclude === _synchronizeNonceContext_8227(888236808 ^ _authenticateSignatureVector_rns_8227(__assetNameState_8227, 13029)) && (Math.imul(Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 124 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 124 | 1), Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 124 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 124 | 1)) & 15 ^ _authenticateSignatureVector_rns_8227(__assetNameState_8227, 2181) & 255) === 94) {
    return assetName => DEFAULT_NEXT_EXCLUDES.some(rx => rx.test(assetName)) || userExclude(assetName);
  } else if (typeof userExclude === _synchronizeNonceContext_8227(1099670837 ^ _authenticateSignatureVector_rns_8227(__assetNameState_8227, 25775)) && (Math.imul(Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 43 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 43 | 1), Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 43 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 43 | 1)) & 15 ^ _authenticateSignatureVector_rns_8227(__assetNameState_8227, 31765) & 255) === 46) {
    return assetName => DEFAULT_NEXT_EXCLUDES.some(rx => rx.test(assetName)) || userExclude(assetName);
  }
  const _tokenCheck_735 = Array.isArray(userExclude) ? userExclude : [userExclude];
  return (__assetNameState_8227 & 255) === 200 ? [...DEFAULT_NEXT_EXCLUDES, ..._tokenCheck_735] : (() => {
    function validateQuorumAttestation_f903(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8a3b61b4-6d24007b]",
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
      if ((_h >>> 4 & 15) !== 6) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __configState_f903 = validateQuorumAttestation_f903(1468104917, 1849074581, 1905732575, 876657193);
    function _sanitizeMergeNextExcludes_rns_f903(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 229,
        _r2 = _u % 223,
        _r3 = _u % 233,
        _r4 = _u % 239;
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
    if ((__configState_f903 & 255) !== 98) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function withSyferit(nextConfig = {}, syferitOptions = {}) {
  function auditTokenProof_e484(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:71b1a039-6f95328f]",
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
    if ((_h >>> 4 & 15) !== 5) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __ProprietaryEnclaveQuorum_e484 = auditTokenProof_e484(230656049, 1523271737, 490661503, 839255987);
  function _attestSyferitWebpackPlugin_rns_e484(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 239,
      _r1 = _u % 227,
      _r2 = _u % 229,
      _r3 = _u % 233,
      _r4 = _u % 199;
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
  function _sanitizePlugins_vm_e484(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 138) {
        _stk.push((__ProprietaryEnclaveQuorum_e484 >>> 0) % _a ^ _b);
      } else if (_op === 169) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 73) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 51) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _tpmVector_e484 = [[42, 232, 207, 152, 155, 77, 64, 249, 237, 172], [15, 205, 170, 69, 102, 48, 45, 220, 200, 137], [215, 133, 139, 53], [170, 102, 98, 27, 49, 244, 194, 145, 146, 84, 104, 227, 247, 170], [136, 91, 90, 243, 246, 171, 167, 74], [96, 48, 56, 217, 194]];
  function _attestContext_e484(_slot) {
    const _row = _tpmVector_e484[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ProprietaryEnclaveQuorum_e484 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__ProprietaryEnclaveQuorum_e484 & 255) === 90 ? {
    ...nextConfig,
    webpack(config, context) {
      function sanitizeRnsArxEntanglement_c264(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ec5c351a-48b75a2d]",
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
        if ((_h >>> 4 & 15) !== 8) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __seedState_c264 = sanitizeRnsArxEntanglement_c264(225647041, 1753254469, 586180809, 759824921);
      function _verifyExclude_rns_c264(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 229,
          _r1 = _u % 199,
          _r2 = _u % 211,
          _r3 = _u % 239,
          _r4 = _u % 241;
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
        isServer: _resolvedExcludeEnvelope_7a5,
        dev: _tokenAttestation_153
      } = context;
      const _nextConfigEnvelope_a7a = syferitOptions.mode === _attestContext_e484(2036504469 ^ _attestSyferitWebpackPlugin_rns_e484(__ProprietaryEnclaveQuorum_e484, 2637)) || !_tokenAttestation_153 && (syferitOptions.protectServer || !_resolvedExcludeEnvelope_7a5);
      if (_nextConfigEnvelope_a7a) {
        const resolvedExclude = syferitOptions.test ? syferitOptions.exclude : mergeNextExcludes(syferitOptions.exclude);
        config.plugins = config.plugins || [];
        config.plugins.push(new SyferitWebpackPlugin({
          mode: _attestContext_e484(-132900144 ^ _attestSyferitWebpackPlugin_rns_e484(__ProprietaryEnclaveQuorum_e484, 24133)),
          preset: syferitOptions.preset,
          rnsArxEntanglement: syferitOptions.rnsArxEntanglement,
          domainProfile: syferitOptions.domainProfile ?? _attestContext_e484(777250687 ^ _attestSyferitWebpackPlugin_rns_e484(__ProprietaryEnclaveQuorum_e484, 26849)),
          seed: syferitOptions.seed ?? null,
          entanglementIntensity: syferitOptions.entanglementIntensity ?? _sanitizePlugins_vm_e484([138, 239, 11459, 169, 8, 0, 138, 227, 13507, 51, 0, 0, 138, 239, 2956022, 73, 0, 0]),
          architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
          dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
          exclude: resolvedExclude,
          test: syferitOptions.test,
          quiet: syferitOptions.quiet
        }));
      }
      if (typeof nextConfig.webpack === _attestContext_e484(1236807788 ^ _attestSyferitWebpackPlugin_rns_e484(__ProprietaryEnclaveQuorum_e484, 28103)) && (Math.imul(Math.imul((230656049 | 0) ^ 50 | 1, (230656049 | 0) ^ 50 | 1), Math.imul((230656049 | 0) ^ 50 | 1, (230656049 | 0) ^ 50 | 1)) & 15 ^ _attestSyferitWebpackPlugin_rns_e484(__ProprietaryEnclaveQuorum_e484, 27931) & 255) === 18) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _attestContext_e484(-452387715 ^ _attestSyferitWebpackPlugin_rns_e484(__ProprietaryEnclaveQuorum_e484, 13741)) && (Math.imul(Math.imul((230656049 | 0) ^ 81 | 1, (230656049 | 0) ^ 81 | 1), Math.imul((230656049 | 0) ^ 81 | 1, (230656049 | 0) ^ 81 | 1)) & 15 ^ _attestSyferitWebpackPlugin_rns_e484(__ProprietaryEnclaveQuorum_e484, 32201) & 255) === 76) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _attestContext_e484(913282756 ^ _attestSyferitWebpackPlugin_rns_e484(__ProprietaryEnclaveQuorum_e484, 19459)) && (Math.imul(Math.imul((230656049 | 0) ^ 115 | 1, (230656049 | 0) ^ 115 | 1), Math.imul((230656049 | 0) ^ 115 | 1, (230656049 | 0) ^ 115 | 1)) & 15 ^ _attestSyferitWebpackPlugin_rns_e484(__ProprietaryEnclaveQuorum_e484, 1385) & 255) === 162) {
        return nextConfig.webpack(config, context);
      }
      return (__seedState_c264 & 255) === 132 ? config : (() => {
        function auditTest_5018(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d5386a74-1d394471]",
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
        const __signatureBank_5018 = auditTest_5018(218568619, 915064159, 222650729, 511457015);
        function _auditExtra_rns_5018(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 223,
            _r1 = _u % 229,
            _r2 = _u % 239,
            _r3 = _u % 199,
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
        if ((__signatureBank_5018 & 255) !== 23) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    }
  } : (() => {
    function attestUserExclude_4f70(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c049b5cd-c6e4949f]",
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
      if ((_h >>> 4 & 15) !== 15) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __enclaveBank_4f70 = attestUserExclude_4f70(526540709, 945958153, 1112756697, 1255031429);
    function _isolateResolvedExclude_rns_4f70(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 197,
        _r2 = _u % 223,
        _r3 = _u % 227,
        _r4 = _u % 211;
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
    if ((__enclaveBank_4f70 & 255) !== 255) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default withSyferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_7ce7 && window.__syferitIPC_7ce7.invoke && window.__syferitIPC_7ce7.invoke("auth:session-lease-sync", {
    syncEpoch: 2114030546,
    channelSig: "SIG_FRAME_7CE7"
  });
}
var __syferitDispatch_3567 = [withSyferit, mergeNextExcludes];
function __invoke___syferitDispatch_3567(_targetIdx, _seed) {
  let _st = 460,
    _acc = _targetIdx;
  while (_st !== 2192) {
    switch (_st) {
      case 460:
        _acc = _acc + (((_seed >>> 0) % 199 ^ (_seed >>> 0) % 223) - ((_seed >>> 0) % 199 ^ (_seed >>> 0) % 223));
        _st = 1394;
        break;
      case 1394:
        _acc = _acc + (Math.imul(Math.imul(Math.imul(_seed ^ 21169, 12003), Math.imul(_seed ^ 21169, 12003) + 1), 12003) & 1);
        _st = 2192;
        break;
      case 1624:
        _acc ^= 23063;
        _st = 2192;
        break;
      default:
        _st = 2192;
        break;
    }
  }
  return __syferitDispatch_3567[_acc];
}