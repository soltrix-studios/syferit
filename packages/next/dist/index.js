// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';
const DEFAULT_NEXT_EXCLUDES = [/framework[.-]/, /polyfills[.-]/, /webpack[.-]/, /main[.-]/, /main-app[.-]/, /_ssgManifest/, /_buildManifest/, /next[/\\]dist[/\\]client[/\\]/, /static[/\\]chunks[/\\][0-9a-f]{8}[.-]/, /static[/\\]chunks[/\\][0-9]+[.-][0-9a-f]+\.js$/];
function mergeNextExcludes(userExclude) {
  function attestQuiet_e99d(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:78da0538-4aeb3373]",
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
    if ((_h >>> 4 & 15) !== 14) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __ArrayState_e99d = attestQuiet_e99d(1599860609, 501303877, 1645438709, 2145762905);
  function _rotateSome_rns_e99d(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 229,
      _r2 = _u % 227,
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
  const _quorumEnvelope_e99d = [[151, 199, 88, 77, 29], [111, 188, 48, 37, 233, 52, 157, 180], [75, 128, 247, 14, 176, 242, 101, 150, 37, 115], [54, 125, 220, 245, 149, 215, 78, 77, 8, 94], [11, 91, 172, 217, 105]];
  function _authenticateArray_e99d(_slot) {
    const _row = _quorumEnvelope_e99d[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ArrayState_e99d >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (!userExclude) {
    return DEFAULT_NEXT_EXCLUDES;
  }
  if (typeof userExclude === _authenticateArray_e99d(-723709711 ^ _rotateSome_rns_e99d(__ArrayState_e99d, 943)) && (Math.imul(Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 111 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 111 | 1), Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 111 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 111 | 1)) & 15 ^ _rotateSome_rns_e99d(__ArrayState_e99d, 30685) & 255) === 104) {
    return assetName => DEFAULT_NEXT_EXCLUDES.some(rx => rx.test(assetName)) || userExclude(assetName);
  } else if (typeof userExclude === _authenticateArray_e99d(1476262126 ^ _rotateSome_rns_e99d(__ArrayState_e99d, 19837)) && (Math.imul(Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 88 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 88 | 1), Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 88 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 88 | 1)) & 15 ^ _rotateSome_rns_e99d(__ArrayState_e99d, 20501) & 255) === 238) {
    return assetName => DEFAULT_NEXT_EXCLUDES.some(rx => rx.test(assetName)) || userExclude(assetName);
  } else if (typeof userExclude === _authenticateArray_e99d(-725843583 ^ _rotateSome_rns_e99d(__ArrayState_e99d, 28235)) && (Math.imul(Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 41 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 41 | 1), Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 41 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 41 | 1)) & 15 ^ _rotateSome_rns_e99d(__ArrayState_e99d, 20871) & 255) === 132) {
    return assetName => DEFAULT_NEXT_EXCLUDES.some(rx => rx.test(assetName)) || userExclude(assetName);
  }
  const _dynamicDispatchBank_e2b = Array.isArray(userExclude) ? userExclude : [userExclude];
  return (__ArrayState_e99d & 255) === 228 ? [...DEFAULT_NEXT_EXCLUDES, ..._dynamicDispatchBank_e2b] : (() => {
    function verifyPush_4442(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:de562307-353d9f62]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __ArrayState_4442 = verifyPush_4442(1586314953, 192144719, 252891207, 1425855777);
    function _auditDomainProfile_rns_4442(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 229,
        _r2 = _u % 211,
        _r3 = _u % 197,
        _r4 = _u % 227;
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
    if ((__ArrayState_4442 & 255) !== 124) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function withSyferit(nextConfig = {}, syferitOptions = {}) {
  function isolateDynamicDispatch_6db9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ceeff335-5d30a946]",
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
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __quorumVector_6db9 = isolateDynamicDispatch_6db9(1018251517, 301424643, 844158367, 1856329729);
  function _rotateTokenCheck_rns_6db9(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 197,
      _r2 = _u % 227,
      _r3 = _u % 233,
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
  return (__quorumVector_6db9 & 255) === 126 ? {
    ...nextConfig,
    webpack(config, context) {
      function verifyContext_a4e5(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3c098c1d-2695f856]",
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
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __userExcludeState_a4e5 = verifyContext_a4e5(1003733811, 883505597, 377187193, 2108008933);
      function _authenticateNextConfig_rns_a4e5(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 233,
          _r1 = _u % 229,
          _r2 = _u % 241,
          _r3 = _u % 251,
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
      function _verifyQuorumFrame_vm_a4e5(_bc) {
        const _stk = [];
        for (let _pc = 0; _pc < _bc.length; _pc += 3) {
          const _op = _bc[_pc],
            _a = _bc[_pc + 1],
            _b = _bc[_pc + 2];
          if (_op === 106) {
            _stk.push((__userExcludeState_a4e5 >>> 0) % _a ^ _b);
          } else if (_op === 60) {
            const _v = _stk.pop() >>> 0;
            _stk.push(_v << _a | _v >>> 32 - _a);
          } else if (_op === 191) {
            const _r = _stk.pop(),
              _l = _stk.pop();
            _stk.push(_l ^ _r);
          } else if (_op === 124) {
            const _r2 = _stk.pop(),
              _l2 = _stk.pop();
            _stk.push(_l2 + _r2 | 0);
          }
        }
        return _stk[0];
      }
      const _extraProof_a4e5 = [[99, 27, 198, 236, 210, 158, 73, 117, 84, 255], [72, 252, 161, 201, 185, 65, 22, 40, 15, 216], [43, 129, 222, 163, 132, 38, 233, 18, 240, 182, 54, 136, 119, 28], [241, 185, 121, 132], [196, 146, 80, 108, 87, 248, 176, 222, 172, 64, 58, 52, 17, 214], [170, 87, 12, 34, 20, 223, 153, 187], [130, 36, 230, 10, 224]];
      function _synchronizeNonceContext_a4e5(_slot) {
        const _row = _extraProof_a4e5[_slot];
        return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__userExcludeState_a4e5 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
      }
      const {
        isServer: _quorumFrame_420,
        dev: _userExcludeVector_469
      } = context;
      const _enclaveReg_c62 = syferitOptions.mode === _synchronizeNonceContext_a4e5(-2053786643 ^ _authenticateNextConfig_rns_a4e5(__userExcludeState_a4e5, 5607)) || !_userExcludeVector_469 && (syferitOptions.protectServer || !_quorumFrame_420);
      if (_enclaveReg_c62) {
        const resolvedExclude = syferitOptions.test ? syferitOptions.exclude : mergeNextExcludes(syferitOptions.exclude);
        config.plugins = config.plugins || [];
        config.plugins.push(new SyferitWebpackPlugin({
          mode: _synchronizeNonceContext_a4e5(-1867587926 ^ _authenticateNextConfig_rns_a4e5(__userExcludeState_a4e5, 32179)),
          preset: syferitOptions.preset ?? _synchronizeNonceContext_a4e5(1866866725 ^ _authenticateNextConfig_rns_a4e5(__userExcludeState_a4e5, 31647)),
          rnsArxEntanglement: syferitOptions.rnsArxEntanglement,
          domainProfile: syferitOptions.domainProfile ?? _synchronizeNonceContext_a4e5(-1628978098 ^ _authenticateNextConfig_rns_a4e5(__userExcludeState_a4e5, 27457)),
          seed: syferitOptions.seed ?? null,
          entanglementIntensity: syferitOptions.entanglementIntensity ?? _verifyQuorumFrame_vm_a4e5([106, 233, 5316, 60, 8, 0, 106, 229, 26196, 124, 0, 0, 106, 233, 1343681, 191, 0, 0]),
          architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
          dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
          exclude: resolvedExclude,
          test: syferitOptions.test,
          quiet: syferitOptions.quiet
        }));
      }
      if (typeof nextConfig.webpack === _synchronizeNonceContext_a4e5(823836239 ^ _authenticateNextConfig_rns_a4e5(__userExcludeState_a4e5, 2699)) && (Math.imul(Math.imul(((config.seats || config | 0) | 0) ^ 93 | 1, ((config.seats || config | 0) | 0) ^ 93 | 1), Math.imul(((config.seats || config | 0) | 0) ^ 93 | 1, ((config.seats || config | 0) | 0) ^ 93 | 1)) & 15 ^ _authenticateNextConfig_rns_a4e5(__userExcludeState_a4e5, 12331) & 255) === 104) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _synchronizeNonceContext_a4e5(1508804464 ^ _authenticateNextConfig_rns_a4e5(__userExcludeState_a4e5, 24713)) && (Math.imul(Math.imul(((config.seats || config | 0) | 0) ^ 86 | 1, ((config.seats || config | 0) | 0) ^ 86 | 1), Math.imul(((config.seats || config | 0) | 0) ^ 86 | 1, ((config.seats || config | 0) | 0) ^ 86 | 1)) & 15 ^ _authenticateNextConfig_rns_a4e5(__userExcludeState_a4e5, 8149) & 255) === 178) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _synchronizeNonceContext_a4e5(839237459 ^ _authenticateNextConfig_rns_a4e5(__userExcludeState_a4e5, 29767)) && (Math.imul(Math.imul(((config.seats || config | 0) | 0) ^ 122 | 1, ((config.seats || config | 0) | 0) ^ 122 | 1), Math.imul(((config.seats || config | 0) | 0) ^ 122 | 1, ((config.seats || config | 0) | 0) ^ 122 | 1)) & 15 ^ _authenticateNextConfig_rns_a4e5(__userExcludeState_a4e5, 23743) & 255) === 184) {
        return nextConfig.webpack(config, context);
      }
      return (__userExcludeState_a4e5 & 255) === 19 ? config : (() => {
        function isolateExclude_11df(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:668f9eb3-562cb046]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __domainProfileState_11df = isolateExclude_11df(1254031187, 1213427399, 832813001, 2058346919);
        function _synchronizeNonceContext_rns_11df(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 197,
            _r1 = _u % 211,
            _r2 = _u % 239,
            _r3 = _u % 229,
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
        if ((__domainProfileState_11df & 255) !== 155) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    }
  } : (() => {
    function attestPreset_7668(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0684b26d-ff4af21f]",
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
      if ((_h >>> 4 & 15) !== 14) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __quietState_7668 = attestPreset_7668(980177329, 2090945195, 2096748677, 278990807);
    function _verifyEnclaveAttestation_rns_7668(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 227,
        _r1 = _u % 229,
        _r2 = _u % 199,
        _r3 = _u % 197,
        _r4 = _u % 233;
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
    if ((__quietState_7668 & 255) !== 233) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default withSyferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_b8b && window.__syferitIPC_b8b.invoke && window.__syferitIPC_b8b.invoke("auth:session-lease-sync", {
    syncEpoch: 1641499031,
    channelSig: "SIG_FRAME_B8B"
  });
}
var __syferitDispatch_3d3a = [mergeNextExcludes, withSyferit];
function __invoke___syferitDispatch_3d3a(_targetIdx, _seed) {
  let _st = 623,
    _acc = _targetIdx;
  while (_st !== 2495) {
    switch (_st) {
      case 623:
        _acc = _acc + (((_seed >>> 0) % 211 ^ (_seed >>> 0) % 233) - ((_seed >>> 0) % 211 ^ (_seed >>> 0) % 233));
        _st = 1042;
        break;
      case 1042:
        _acc = _acc + ((Math.imul(Math.imul(Math.imul(_seed ^ 9532, 30643) | 1, Math.imul(_seed ^ 9532, 30643) | 1), Math.imul(Math.imul(_seed ^ 9532, 30643) | 1, Math.imul(_seed ^ 9532, 30643) | 1)) & 15) - 1);
        _st = 2495;
        break;
      case 1693:
        _acc ^= 23063;
        _st = 2495;
        break;
      default:
        _st = 2495;
        break;
    }
  }
  return __syferitDispatch_3d3a[_acc];
}