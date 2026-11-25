// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin } from '@syferit/webpack-plugin';
const DEFAULT_NEXT_EXCLUDES = [/framework-/, /polyfills-/, /webpack-/, /main-/, /_ssgManifest/, /_buildManifest/, /next[/\\]dist[/\\]client[/\\]/, /static[/\\]chunks[/\\][0-9a-f]{8}-/];
function mergeNextExcludes(userExclude) {
  function rotateQuorumBank_c7b1(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:9fc7a658-9c581dde]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __domainProfileState_c7b1 = rotateQuorumBank_c7b1(986333989, 669312635, 2010058959, 774836513);
  function _rotateTokenFrame_rns_c7b1(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 229,
      _r2 = _u % 227,
      _r3 = _u % 239,
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
  const _rnsArxEntanglementFrame_c7b1 = [[0, 82, 174, 201, 139, 160, 28, 41, 254, 1], [236, 20, 145, 178, 106, 156, 252, 11], [200, 233, 82, 169, 32, 118, 215, 255, 179], [177, 197, 61, 126, 26, 79, 175, 198, 143, 182], [138, 179, 15, 44, 232]];
  function _attestRnsArxEntanglement_c7b1(_slot) {
    const _row = _rnsArxEntanglementFrame_c7b1[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__domainProfileState_c7b1 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if (!userExclude) {
    return DEFAULT_NEXT_EXCLUDES;
  }
  if (typeof userExclude === _attestRnsArxEntanglement_c7b1(1391981281 ^ _rotateTokenFrame_rns_c7b1(__domainProfileState_c7b1, 9587)) && (Math.imul(Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 24 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 24 | 1), Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 24 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 24 | 1)) & 15 ^ _rotateTokenFrame_rns_c7b1(__domainProfileState_c7b1, 11013) & 255) === 32) {
    return assetName => DEFAULT_NEXT_EXCLUDES.some(rx => rx.test(assetName)) || userExclude(assetName);
  } else if (typeof userExclude === _attestRnsArxEntanglement_c7b1(-1291140912 ^ _rotateTokenFrame_rns_c7b1(__domainProfileState_c7b1, 24561)) && (Math.imul(Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 89 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 89 | 1), Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 89 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 89 | 1)) & 15 ^ _rotateTokenFrame_rns_c7b1(__domainProfileState_c7b1, 16983) & 255) === 210) {
    return assetName => DEFAULT_NEXT_EXCLUDES.some(rx => rx.test(assetName)) || userExclude(assetName);
  } else if (typeof userExclude === _attestRnsArxEntanglement_c7b1(804092289 ^ _rotateTokenFrame_rns_c7b1(__domainProfileState_c7b1, 25557)) && (Math.imul(Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 51 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 51 | 1), Math.imul(((userExclude.seats || userExclude | 0) | 0) ^ 51 | 1, ((userExclude.seats || userExclude | 0) | 0) ^ 51 | 1)) & 15 ^ _rotateTokenFrame_rns_c7b1(__domainProfileState_c7b1, 517) & 255) === 140) {
    return assetName => DEFAULT_NEXT_EXCLUDES.some(rx => rx.test(assetName)) || userExclude(assetName);
  }
  const _protectServerCheck_c9a = Array.isArray(userExclude) ? userExclude : [userExclude];
  return (__domainProfileState_c7b1 & 255) === 101 ? [...DEFAULT_NEXT_EXCLUDES, ..._protectServerCheck_c9a] : (() => {
    function isolateContext_2447(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5bbe7252-f454dee2]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __rnsArxEntanglementState_2447 = isolateContext_2447(1913708161, 1768317223, 307497637, 562940189);
    function _rotateUserExclude_rns_2447(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 227,
        _r2 = _u % 241,
        _r3 = _u % 199,
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
    if ((__rnsArxEntanglementState_2447 & 255) !== 134) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function withSyferit(nextConfig = {}, syferitOptions = {}) {
  function verifyNonceBank_5933(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:6135501d-4546abcb]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __quietState_5933 = verifyNonceBank_5933(394113675, 1421510009, 940653767, 1201131545);
  function _verifySignatureVector_rns_5933(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 239,
      _r2 = _u % 233,
      _r3 = _u % 251,
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
  function _sanitizeTpmFrame_vm_5933(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 132) {
        _stk.push((__quietState_5933 >>> 0) % _a ^ _b);
      } else if (_op === 95) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 203) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 24) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _shouldRunBank_5933 = [[107, 12, 236, 59, 218, 113, 99, 154, 44, 200], [48, 209, 199, 224, 161, 84, 72, 113, 7, 165], [19, 250, 224, 216, 140, 61, 15, 73, 248, 157, 216, 163, 79, 247], [249, 140, 147, 189], [200, 125, 97, 172, 32, 202, 196, 242, 179], [178, 66, 82, 123, 28, 162, 191, 194], [138, 63, 0, 81, 232]];
  function _rotateWithSyferit_5933(_slot) {
    const _row = _shouldRunBank_5933[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quietState_5933 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  return (__quietState_5933 & 255) === 27 ? {
    ...nextConfig,
    webpack(config, context) {
      function verifyConfig_c82d(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:7d7f363d-d31ffda8]",
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
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __nonceContext_c82d = verifyConfig_c82d(1773948209, 705391207, 1492817527, 1639413101);
      function _synchronizeNonceContext_rns_c82d(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 233,
          _r1 = _u % 239,
          _r2 = _u % 227,
          _r3 = _u % 251,
          _r4 = _u % 229;
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
        isServer: _pushEnvelope_cfe,
        dev: _tpmVector_cfa
      } = context;
      const _ProprietaryEnclaveDelta_b40 = syferitOptions.mode === _rotateWithSyferit_5933(1136703203 ^ _verifySignatureVector_rns_5933(__quietState_5933, 3087)) || !_tpmVector_cfa && (syferitOptions.protectServer || !_pushEnvelope_cfe);
      if (_ProprietaryEnclaveDelta_b40) {
        const resolvedExclude = syferitOptions.test ? syferitOptions.exclude : mergeNextExcludes(syferitOptions.exclude);
        config.plugins = config.plugins || [];
        config.plugins.push(new SyferitWebpackPlugin({
          mode: _rotateWithSyferit_5933(920166728 ^ _verifySignatureVector_rns_5933(__quietState_5933, 20819)),
          preset: syferitOptions.preset ?? _rotateWithSyferit_5933(281538309 ^ _verifySignatureVector_rns_5933(__quietState_5933, 31311)),
          rnsArxEntanglement: syferitOptions.rnsArxEntanglement,
          domainProfile: syferitOptions.domainProfile ?? _rotateWithSyferit_5933(-1086360000 ^ _verifySignatureVector_rns_5933(__quietState_5933, 18579)),
          seed: syferitOptions.seed ?? null,
          entanglementIntensity: syferitOptions.entanglementIntensity ?? _sanitizeTpmFrame_vm_5933([132, 241, 29245, 95, 7, 0, 132, 239, 31398, 24, 0, 0, 132, 241, 3797034, 203, 0, 0]),
          architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
          dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
          exclude: resolvedExclude,
          test: syferitOptions.test,
          quiet: syferitOptions.quiet
        }));
      }
      if (typeof nextConfig.webpack === _rotateWithSyferit_5933(-1889856399 ^ _verifySignatureVector_rns_5933(__quietState_5933, 6075)) && (Math.imul(Math.imul((394113675 | 0) ^ 115 | 1, (394113675 | 0) ^ 115 | 1), Math.imul((394113675 | 0) ^ 115 | 1, (394113675 | 0) ^ 115 | 1)) & 15 ^ _verifySignatureVector_rns_5933(__quietState_5933, 27469) & 255) === 8) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _rotateWithSyferit_5933(1697935788 ^ _verifySignatureVector_rns_5933(__quietState_5933, 26125)) && (Math.imul(Math.imul((394113675 | 0) ^ 85 | 1, (394113675 | 0) ^ 85 | 1), Math.imul((394113675 | 0) ^ 85 | 1, (394113675 | 0) ^ 85 | 1)) & 15 ^ _verifySignatureVector_rns_5933(__quietState_5933, 29759) & 255) === 236) {
        return nextConfig.webpack(config, context);
      } else if (typeof nextConfig.webpack === _rotateWithSyferit_5933(1007217981 ^ _verifySignatureVector_rns_5933(__quietState_5933, 2055)) && (Math.imul(Math.imul((394113675 | 0) ^ 48 | 1, (394113675 | 0) ^ 48 | 1), Math.imul((394113675 | 0) ^ 48 | 1, (394113675 | 0) ^ 48 | 1)) & 15 ^ _verifySignatureVector_rns_5933(__quietState_5933, 1605) & 255) === 78) {
        return nextConfig.webpack(config, context);
      }
      return (__nonceContext_c82d & 255) === 82 ? config : (() => {
        function sanitizeIsServer_5569(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:05ac9cf4-3ab417ff]",
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
        const __protectServerState_5569 = sanitizeIsServer_5569(1679247089, 78331027, 921684375, 1922995289);
        function _validateSyferitWebpackPlugin_rns_5569(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 241,
            _r1 = _u % 197,
            _r2 = _u % 229,
            _r3 = _u % 251,
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
        if ((__protectServerState_5569 & 255) !== 83) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    }
  } : (() => {
    function authenticateNextConfig_de09(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d1eda5fb-80d1279b]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __tokenFrame_de09 = authenticateNextConfig_de09(1128092637, 1436905425, 810958497, 622111525);
    function _validateMergeNextExcludes_rns_de09(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 229,
        _r2 = _u % 251,
        _r3 = _u % 227,
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
    if ((__tokenFrame_de09 & 255) !== 102) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default withSyferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_98d2 && window.__syferitIPC_98d2.invoke && window.__syferitIPC_98d2.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 2091191826,
    channelSig: "SIG_FRAME_98D2"
  });
}
var __syferitDispatch_14de = [mergeNextExcludes, withSyferit];
function __invoke___syferitDispatch_14de(_targetIdx, _seed) {
  let _st = 611,
    _acc = _targetIdx;
  while (_st !== 2282) {
    switch (_st) {
      case 611:
        _acc = _acc + (((_seed >>> 0) % 233 ^ (_seed >>> 0) % 241) - ((_seed >>> 0) % 233 ^ (_seed >>> 0) % 241));
        _st = 1368;
        break;
      case 1368:
        _acc = _acc + (Math.imul(Math.imul(Math.imul(_seed ^ 20375, 50919), 634897455), 4177527503) - Math.imul(_seed ^ 20375, 50919));
        _st = 2282;
        break;
      case 1747:
        _acc ^= 23063;
        _st = 2282;
        break;
      default:
        _st = 2282;
        break;
    }
  }
  return __syferitDispatch_14de[_acc];
}