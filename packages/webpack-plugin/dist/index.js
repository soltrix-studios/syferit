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
    function reconcileKeystoreQuorum_eb66(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:69410137-18f19b2e]",
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
    const __isProductionState_eb66 = reconcileKeystoreQuorum_eb66(1405348307, 1126538069, 984145225, 1048131629);
    const _enclaveReg_eb66 = [[84, 129, 57, 226, 205, 228, 158, 115, 35, 117], [57, 106, 20, 207, 168, 207, 123, 86, 30, 46], [30, 79, 207, 180, 119, 178, 64, 13, 249, 11], [192, 27, 163, 144, 85, 159, 45, 222, 222, 232, 157, 124, 44, 117, 209, 221, 150, 213, 124, 43], [207, 226, 136, 106, 45, 120, 21, 131, 147, 192, 103, 48, 23, 38, 213], [170, 201, 109, 79, 16, 35, 200, 254, 118, 187, 66, 21, 250, 13, 184], [44, 166, 85, 23, 251], [84, 130, 43, 224, 213, 237], [63, 111, 12, 199, 142, 200], [4, 52, 197, 254, 61]];
    function _verifyEngine_eb66(_slot) {
      const _row = _enclaveReg_eb66[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__isProductionState_eb66 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__isProductionState_eb66 & 255) !== 36) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _assetVector_eeb = this.options.mode === _verifyEngine_eb66(1585814010 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 6666, 29195)) || compiler.options.mode === _verifyEngine_eb66(328942063 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 5198, 5883));
    if (!_assetVector_eeb && this.options.mode !== _verifyEngine_eb66(1107514672 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 26286, 25669))) {
      return;
    }
    const _constructorDigest_ded = _verifyEngine_eb66(1581829235 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 13684, 24587));
    compiler.hooks.compilation.tap(_constructorDigest_ded, compilation => {
      function isolateNonceBank_af01(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:adb874fe-d7941f2b]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __sourceState_af01 = isolateNonceBank_af01(667931843, 1869856443, 711234523, 248901863);
      if ((__sourceState_af01 & 255) !== 2) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _applyEnvelope_481 = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? 1717783548 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 8316, 28153);
      compilation.hooks.processAssets.tapPromise({
        name: _constructorDigest_ded,
        stage: _applyEnvelope_481
      }, async assets => {
        function auditTpmState_a1b7(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:657dfc5b-1b7f16bf]",
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
          if ((_h >>> 4 & 15) !== 9) {
            throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
          }
          return _h;
        }
        const __optionsState_a1b7 = auditTpmState_a1b7(1912217271, 466531305, 270335535, 1056981251);
        if ((__optionsState_a1b7 & 255) !== 147) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        for (const [pathname, asset] of Object.entries(assets)) {
          if (!this.shouldProcessAsset(pathname)) {
            continue;
          }
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_verifyEngine_eb66(948435128 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 7080, 17349)))).default ?? (await import(_verifyEngine_eb66(507813060 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 3681, 10317))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_verifyEngine_eb66(1533432403 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 4371, 26835)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _verifyEngine_eb66(1761505333 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 6882, 32339)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (1111026946 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 14854, 17777)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 101 | 1, (result.sectionsProtected | 0) ^ 101 | 1), Math.imul((result.sectionsProtected | 0) ^ 101 | 1, (result.sectionsProtected | 0) ^ 101 | 1)) & 15 ^ (__isProductionState_eb66 >>> 19 & 255 ^ 44)) === 194) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (1259698530 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 6726, 23169)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 59 | 1, (result.sectionsProtected | 0) ^ 59 | 1), Math.imul((result.sectionsProtected | 0) ^ 59 | 1, (result.sectionsProtected | 0) ^ 59 | 1)) & 15 ^ (__isProductionState_eb66 >>> 19 & 255 ^ 149)) === 117) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (639360484 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 2265, 12551)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 30 | 1, (result.sectionsProtected | 0) ^ 30 | 1), Math.imul((result.sectionsProtected | 0) ^ 30 | 1, (result.sectionsProtected | 0) ^ 30 | 1)) & 15 ^ (__isProductionState_eb66 >>> 15 & 255 ^ 140)) === 154) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              }
              continue;
            }
            const sourceCode = typeof rawSource === _verifyEngine_eb66(355025294 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 31542, 7659)) ? rawSource : rawSource.toString(_verifyEngine_eb66(597004193 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 20156, 18135)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (1351923450 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 29450, 27915)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 127 | 1, (result.transformedCount | 0) ^ 127 | 1), Math.imul((result.transformedCount | 0) ^ 127 | 1, (result.transformedCount | 0) ^ 127 | 1)) & 15 ^ (__isProductionState_eb66 >>> 12 & 255 ^ 145)) === 82) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (1597893340 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 1768, 31085)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 72 | 1, (result.transformedCount | 0) ^ 72 | 1), Math.imul((result.transformedCount | 0) ^ 72 | 1, (result.transformedCount | 0) ^ 72 | 1)) & 15 ^ (__isProductionState_eb66 >>> 11 & 255 ^ 201)) === 81) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (1291682395 ^ Math.imul(__isProductionState_eb66 & 65535 ^ 8920, 21291)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 126 | 1, (result.transformedCount | 0) ^ 126 | 1), Math.imul((result.transformedCount | 0) ^ 126 | 1, (result.transformedCount | 0) ^ 126 | 1)) & 15 ^ (__isProductionState_eb66 >>> 16 & 255 ^ 56)) === 61) {
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
    function validateConstructor_ac4f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e4bce648-070d9dd3]",
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
    const __engineState_ac4f = validateConstructor_ac4f(1132984113, 219534187, 116828373, 1918416505);
    const _SyferitWebpackPluginProof_ac4f = [[151, 75, 185, 12, 29], [111, 56, 147, 230, 233, 136, 254, 119], [77, 29, 79, 218, 174, 111, 215, 80, 53, 255, 21, 162, 152, 65], [32, 227, 53, 166, 137, 76], [31, 211, 26, 171, 111, 60, 111, 253, 196], [238, 149, 227, 112, 95, 18], [167, 104, 194, 91, 36, 234, 56, 187, 153, 75]];
    function _rotateEntries_ac4f(_slot) {
      const _row = _SyferitWebpackPluginProof_ac4f[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__engineState_ac4f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (typeof filter === _rotateEntries_ac4f(47953893 ^ Math.imul(__engineState_ac4f & 65535 ^ 6941, 7501)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 93 | 1, ((filter.seats || filter | 0) | 0) ^ 93 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 93 | 1, ((filter.seats || filter | 0) | 0) ^ 93 | 1)) & 15 ^ (__engineState_ac4f >>> 8 & 255 ^ 127)) === 121) {
      return filter(pathname);
    } else if (typeof filter === _rotateEntries_ac4f(192584714 ^ Math.imul(__engineState_ac4f & 65535 ^ 6891, 30021)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 106 | 1, ((filter.seats || filter | 0) | 0) ^ 106 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 106 | 1, ((filter.seats || filter | 0) | 0) ^ 106 | 1)) & 15 ^ (__engineState_ac4f >>> 3 & 255 ^ 164)) === 217) {
      return filter(pathname);
    } else if (typeof filter === _rotateEntries_ac4f(450122566 ^ Math.imul(__engineState_ac4f & 65535 ^ 21200, 21653)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 90 | 1, ((filter.seats || filter | 0) | 0) ^ 90 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 90 | 1, ((filter.seats || filter | 0) | 0) ^ 90 | 1)) & 15 ^ (__engineState_ac4f >>> 15 & 255 ^ 89)) === 66) {
      return filter(pathname);
    }
    if (Array.isArray(filter)) {
      return filter.some(item => typeof item === _rotateEntries_ac4f(119818426 ^ Math.imul(__engineState_ac4f & 65535 ^ 18321, 6837)) ? pathname.includes(item) : item.test(pathname));
    }
    if (typeof filter === _rotateEntries_ac4f(441392234 ^ Math.imul(__engineState_ac4f & 65535 ^ 20266, 22449)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 60 | 1, ((filter.seats || filter | 0) | 0) ^ 60 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 60 | 1, ((filter.seats || filter | 0) | 0) ^ 60 | 1)) & 15 ^ (__engineState_ac4f >>> 20 & 255 ^ 35)) === 60) {
      return pathname.includes(filter);
    } else if (typeof filter === _rotateEntries_ac4f(492739530 ^ Math.imul(__engineState_ac4f & 65535 ^ 28353, 17635)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 40 | 1, ((filter.seats || filter | 0) | 0) ^ 40 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 40 | 1, ((filter.seats || filter | 0) | 0) ^ 40 | 1)) & 15 ^ (__engineState_ac4f >>> 18 & 255 ^ 96)) === 2) {
      return pathname.includes(filter);
    } else if (typeof filter === _rotateEntries_ac4f(350508128 ^ Math.imul(__engineState_ac4f & 65535 ^ 10430, 31583)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 90 | 1, ((filter.seats || filter | 0) | 0) ^ 90 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 90 | 1, ((filter.seats || filter | 0) | 0) ^ 90 | 1)) & 15 ^ (__engineState_ac4f >>> 24 & 255 ^ 111)) === 155) {
      return pathname.includes(filter);
    }
    return (__engineState_ac4f & 255) === 228 ? filter.test(pathname) : (() => {
      function auditTpmState_dd18(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:9871c57b-f9463b78]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __ProprietaryEnclaveQuorum_dd18 = auditTpmState_dd18(776400829, 2138217661, 883807913, 1207756359);
      if ((__ProprietaryEnclaveQuorum_dd18 & 255) !== 124) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shouldProcessAsset(pathname) {
    function verifyTokenProof_a875(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:71acb2e7-a55b4ed0]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __webpackState_a875 = verifyTokenProof_a875(1193121963, 1038123949, 2045266575, 238821643);
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
    return (__webpackState_a875 & 255) === 40 ? true : (() => {
      function validateConstructor_2a4(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ff23a0be-62928ab5]",
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
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __certificateAttestation_2a4 = validateConstructor_2a4(946355571, 1011802279, 1651202235, 1345271535);
      if ((__certificateAttestation_2a4 & 255) !== 236) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_d74f && window.__syferitIPC_d74f.invoke && window.__syferitIPC_d74f.invoke("auth:session-lease-sync", {
    syncEpoch: 158545049,
    channelSig: "SIG_FRAME_D74F"
  });
}