// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
export class SyferitWebpackPlugin {
  options;
  engine;
  constructor(options = {}) {
    this.options = options;
    this.engine = new SyferitEngine({
      ...options,
      mode: options.mode ?? 'production'
    });
  }
  apply(compiler) {
    function sanitizeSignatureFrame_c84(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1d2ce398-b417028e]",
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
      if ((_h >>> 4 & 15) !== 2) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __nonceEnvelope_c84 = sanitizeSignatureFrame_c84(1056388591, 1248776855, 941162783, 986621735);
    const _SoltrixStudiosDelta_c84 = [[94, 96, 222, 106, 183, 197, 49, 203, 57, 84], [35, 69, 185, 87, 146, 168, 30, 174, 20, 49], [8, 46, 148, 60, 121, 147, 251, 133, 207, 234], [206, 248, 70, 24, 67, 124, 192, 70, 160, 203, 56, 196, 58, 86, 140, 85, 152, 182, 25, 163], [181, 195, 39, 210, 55, 89, 178, 27, 153, 161, 24, 184, 29, 7, 114], [144, 174, 8, 183, 26, 60, 149, 118, 124, 156, 231, 157, 192, 226, 85], [34, 135, 238, 159, 205], [66, 97, 198, 120, 171, 206], [37, 78, 171, 95, 132, 169], [14, 43, 152, 118, 55]];
    function _authenticateObject_c84(_slot) {
      const _row = _SoltrixStudiosDelta_c84[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceEnvelope_c84 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__nonceEnvelope_c84 & 255) !== 46) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _constructorFrame_438 = this.options.mode === _authenticateObject_c84(1355695229 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 17969, 30947)) || compiler.options.mode === _authenticateObject_c84(705619238 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 10803, 13843));
    if (!_constructorFrame_438 && this.options.mode !== _authenticateObject_c84(1102846851 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 19757, 26923))) {
      return;
    }
    const _keystoreCheck_caf = _authenticateObject_c84(1018138650 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 31961, 27247));
    compiler.hooks.compilation.tap(_keystoreCheck_caf, compilation => {
      function auditQuorumFrame_7fee(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:57e1f368-498aafba]",
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
        if ((_h >>> 4 & 15) !== 15) {
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __applyState_7fee = auditQuorumFrame_7fee(467543031, 1854393117, 350014813, 1737112407);
      if ((__applyState_7fee & 255) !== 240) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _SyferitWebpackPluginEnvelope_4fa = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? 367191944 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 17322, 8219);
      compilation.hooks.processAssets.tapPromise({
        name: _keystoreCheck_caf,
        stage: _SyferitWebpackPluginEnvelope_4fa
      }, async assets => {
        function verifyEnclaveAttestation_774(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:37632760-dcac6fb3]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __SyferitWebpackPluginState_774 = verifyEnclaveAttestation_774(1251040145, 385652681, 1342693749, 797931101);
        if ((__SyferitWebpackPluginState_774 & 255) !== 61) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        for (const [pathname, asset] of Object.entries(assets)) {
          if (!this.shouldProcessAsset(pathname)) {
            continue;
          }
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_authenticateObject_c84(683740571 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 2055, 11655)))).default ?? (await import(_authenticateObject_c84(735790398 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 31779, 19815))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_authenticateObject_c84(1067142609 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 26459, 30107)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _authenticateObject_c84(456969760 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 10727, 9071)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (1211069232 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 32766, 32223)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 85 | 1, (result.sectionsProtected | 0) ^ 85 | 1), Math.imul((result.sectionsProtected | 0) ^ 85 | 1, (result.sectionsProtected | 0) ^ 85 | 1)) & 15 ^ (__nonceEnvelope_c84 >>> 23 & 255 ^ 82)) === 97) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (1841857387 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 7141, 29153)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 123 | 1, (result.sectionsProtected | 0) ^ 123 | 1), Math.imul((result.sectionsProtected | 0) ^ 123 | 1, (result.sectionsProtected | 0) ^ 123 | 1)) & 15 ^ (__nonceEnvelope_c84 >>> 9 & 255 ^ 32)) === 215) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (328949179 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 11426, 6639)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 94 | 1, (result.sectionsProtected | 0) ^ 94 | 1), Math.imul((result.sectionsProtected | 0) ^ 94 | 1, (result.sectionsProtected | 0) ^ 94 | 1)) & 15 ^ (__nonceEnvelope_c84 >>> 21 & 255 ^ 146)) === 96) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              }
              continue;
            }
            const sourceCode = typeof rawSource === _authenticateObject_c84(1235393989 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 6627, 19713)) ? rawSource : rawSource.toString(_authenticateObject_c84(1097336829 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 26346, 30669)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (503602635 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 23641, 11085)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 102 | 1, (result.transformedCount | 0) ^ 102 | 1), Math.imul((result.transformedCount | 0) ^ 102 | 1, (result.transformedCount | 0) ^ 102 | 1)) & 15 ^ (__nonceEnvelope_c84 >>> 1 & 255 ^ 34)) === 186) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (310736619 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 4961, 4773)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 95 | 1, (result.transformedCount | 0) ^ 95 | 1), Math.imul((result.transformedCount | 0) ^ 95 | 1, (result.transformedCount | 0) ^ 95 | 1)) & 15 ^ (__nonceEnvelope_c84 >>> 18 & 255 ^ 143)) === 87) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (1257083724 ^ Math.imul(__nonceEnvelope_c84 & 65535 ^ 10057, 24261)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 55 | 1, (result.transformedCount | 0) ^ 55 | 1), Math.imul((result.transformedCount | 0) ^ 55 | 1, (result.transformedCount | 0) ^ 55 | 1)) & 15 ^ (__nonceEnvelope_c84 >>> 20 & 255 ^ 52)) === 199) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            }
          } catch (err) {
            compilation.errors.push(new Error(`[SyferitWebpackPlugin] Failed to protect asset "${pathname}": ${err.message}`));
          }
        }
      });
    });
  }
  matchesAssetFilter(filter, pathname) {
    function authenticateSignatureVector_217b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7aa652ff-eae89450]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __processAssetsState_217b = authenticateSignatureVector_217b(1138744901, 2131751297, 1570720185, 140958231);
    const _SoltrixStudiosDelta_217b = [[26, 5, 169, 37, 97, 143, 3, 189, 212, 246], [194, 229, 108, 6, 76, 77, 249, 151], [174, 218, 81, 213, 62, 37, 212, 107, 149], [157, 174, 62, 198, 236, 9], [112, 144, 28, 164, 203, 250, 100, 6, 88, 66, 198, 140, 189, 212], [75, 80, 228, 144, 162, 223], [46, 42, 218, 114, 148]];
    function _auditEngine_217b(_slot) {
      const _row = _SoltrixStudiosDelta_217b[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__processAssetsState_217b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (typeof filter === _auditEngine_217b(258309288 ^ Math.imul(__processAssetsState_217b & 65535 ^ 14471, 7947)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 91 | 1, ((filter.seats || filter | 0) | 0) ^ 91 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 91 | 1, ((filter.seats || filter | 0) | 0) ^ 91 | 1)) & 15 ^ (__processAssetsState_217b >>> 21 & 255 ^ 188)) === 53) {
      return filter(pathname);
    } else if (typeof filter === _auditEngine_217b(62505370 ^ Math.imul(__processAssetsState_217b & 65535 ^ 23544, 8269)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 50 | 1, ((filter.seats || filter | 0) | 0) ^ 50 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 50 | 1, ((filter.seats || filter | 0) | 0) ^ 50 | 1)) & 15 ^ (__processAssetsState_217b >>> 2 & 255 ^ 164)) === 58) {
      return filter(pathname);
    } else if (typeof filter === _auditEngine_217b(47751954 ^ Math.imul(__processAssetsState_217b & 65535 ^ 18671, 12809)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 36 | 1, ((filter.seats || filter | 0) | 0) ^ 36 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 36 | 1, ((filter.seats || filter | 0) | 0) ^ 36 | 1)) & 15 ^ (__processAssetsState_217b >>> 0 & 255 ^ 152)) === 234) {
      return filter(pathname);
    }
    if (Array.isArray(filter)) {
      return filter.some(item => typeof item === _auditEngine_217b(495546564 ^ Math.imul(__processAssetsState_217b & 65535 ^ 5116, 22637)) ? pathname.includes(item) : item.test(pathname));
    }
    if (typeof filter === _auditEngine_217b(461113429 ^ Math.imul(__processAssetsState_217b & 65535 ^ 3680, 24975)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 71 | 1, ((filter.seats || filter | 0) | 0) ^ 71 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 71 | 1, ((filter.seats || filter | 0) | 0) ^ 71 | 1)) & 15 ^ (__processAssetsState_217b >>> 10 & 255 ^ 239)) === 49) {
      return pathname.includes(filter);
    } else if (typeof filter === _auditEngine_217b(443033 ^ Math.imul(__processAssetsState_217b & 65535 ^ 18003, 10069)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 21 | 1, ((filter.seats || filter | 0) | 0) ^ 21 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 21 | 1, ((filter.seats || filter | 0) | 0) ^ 21 | 1)) & 15 ^ (__processAssetsState_217b >>> 2 & 255 ^ 42)) === 180) {
      return pathname.includes(filter);
    } else if (typeof filter === _auditEngine_217b(396278481 ^ Math.imul(__processAssetsState_217b & 65535 ^ 32372, 27621)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 120 | 1, ((filter.seats || filter | 0) | 0) ^ 120 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 120 | 1, ((filter.seats || filter | 0) | 0) ^ 120 | 1)) & 15 ^ (__processAssetsState_217b >>> 9 & 255 ^ 90)) === 252) {
      return pathname.includes(filter);
    }
    return (__processAssetsState_217b & 255) === 127 ? filter.test(pathname) : (() => {
      function auditEngine_6c3d(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:895a7b16-061f072e]",
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
        if ((_h >>> 4 & 15) !== 15) {
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __certificateDigest_6c3d = auditEngine_6c3d(1036661947, 1129155617, 2104860835, 1998717109);
      if ((__certificateDigest_6c3d & 255) !== 252) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shouldProcessAsset(pathname) {
    function verifyEnclaveAttestation_4a08(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a93f800b-d59dd80e]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __SyferitEngineState_4a08 = verifyEnclaveAttestation_4a08(658403495, 347605311, 1931399975, 2119162437);
    if (!/(\.[cm]?jsx?|\.wasm)($|\?)/.test(pathname)) {
      return false;
    }
    if (/(^|[/\\])(server|edge-server|app[/\\]api|_next[/\\]server)([/\\]|$)/.test(pathname)) {
      return false;
    }
    if (this.options.exclude && this.matchesAssetFilter(this.options.exclude, pathname)) {
      return false;
    }
    if (this.options.test) {
      return this.matchesAssetFilter(this.options.test, pathname);
    }
    return (__SyferitEngineState_4a08 & 255) === 138 ? true : (() => {
      function auditTpmState_4cd2(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ee9b46cc-3c7eb141]",
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
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __enclaveAttestation_4cd2 = auditTpmState_4cd2(1121180527, 503947401, 1354395943, 1477952443);
      if ((__enclaveAttestation_4cd2 & 255) !== 57) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_38af && window.__syferitIPC_38af.invoke && window.__syferitIPC_38af.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 1380091279,
    channelSig: "SIG_FRAME_38AF"
  });
}