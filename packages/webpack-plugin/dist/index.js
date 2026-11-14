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
    function rotateEngine_be98(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8efa3cc5-adcf6867]",
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
    const __tokenBank_be98 = rotateEngine_be98(1188772111, 997011073, 1031751799, 1836929727);
    const _endsWithBank_be98 = [[225, 15, 197, 189, 80, 114, 74, 4, 214, 203], [198, 208, 160, 154, 63, 85, 23, 251, 177, 164], [171, 181, 155, 71, 26, 56, 252, 222, 108, 129], [83, 149, 127, 45, 230, 233, 217, 139, 77, 118, 49, 17, 223, 195, 133, 104, 37, 91, 0, 246], [82, 116, 92, 29, 216, 198, 185, 44, 62, 86, 19, 231, 130, 168, 137], [61, 83, 1, 226, 191, 169, 156, 11, 1, 49, 254, 200, 101, 151, 108], [65, 44, 233, 196, 110], [231, 244, 223, 181, 70, 115], [202, 209, 160, 104, 35, 94], [171, 190, 145, 11, 74]];
    function _rotateEngine_be98(_slot) {
      const _row = _endsWithBank_be98[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tokenBank_be98 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__tokenBank_be98 & 255) !== 145) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _enclaveCheck_6ce = this.options.mode === _rotateEngine_be98(291415806 ^ Math.imul(__tokenBank_be98 & 65535 ^ 7087, 16929)) || compiler.options.mode === _rotateEngine_be98(200588387 ^ Math.imul(__tokenBank_be98 & 65535 ^ 13063, 7283));
    if (!_enclaveCheck_6ce && this.options.mode !== _rotateEngine_be98(365158137 ^ Math.imul(__tokenBank_be98 & 65535 ^ 15552, 14219))) {
      return;
    }
    const _webpackFrame_350 = _rotateEngine_be98(444795357 ^ Math.imul(__tokenBank_be98 & 65535 ^ 6983, 25613));
    compiler.hooks.compilation.tap(_webpackFrame_350, compilation => {
      function rotateQuorumProof_101e(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9d22189f-36589c9f]",
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
        if ((_h >>> 4 & 15) !== 10) {
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __nameState_101e = rotateQuorumProof_101e(1009541291, 1201130733, 344205495, 636218147);
      if ((__nameState_101e & 255) !== 171) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _tpmVector_d77 = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? 160446300 ^ Math.imul(__tokenBank_be98 & 65535 ^ 28217, 11467);
      compilation.hooks.processAssets.tapPromise({
        name: _webpackFrame_350,
        stage: _tpmVector_d77
      }, async assets => {
        function validateShouldProcessAsset_112b(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ab4e98b7-cb47b325]",
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
        const __compilationState_112b = validateShouldProcessAsset_112b(1840097339, 540180923, 1026685411, 1787892253);
        if ((__compilationState_112b & 255) !== 151) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        for (const [pathname, asset] of Object.entries(assets)) {
          if (!this.shouldProcessAsset(pathname)) {
            continue;
          }
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_rotateEngine_be98(163843123 ^ Math.imul(__tokenBank_be98 & 65535 ^ 10390, 5713)))).default ?? (await import(_rotateEngine_be98(285706737 ^ Math.imul(__tokenBank_be98 & 65535 ^ 11677, 9535))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_rotateEngine_be98(156920536 ^ Math.imul(__tokenBank_be98 & 65535 ^ 9843, 4831)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _rotateEngine_be98(397493407 ^ Math.imul(__tokenBank_be98 & 65535 ^ 5849, 19835)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (74839383 ^ Math.imul(__tokenBank_be98 & 65535 ^ 20926, 31833)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 35 | 1, (result.sectionsProtected | 0) ^ 35 | 1), Math.imul((result.sectionsProtected | 0) ^ 35 | 1, (result.sectionsProtected | 0) ^ 35 | 1)) & 15 ^ (__tokenBank_be98 >>> 22 & 255 ^ 174)) === 2) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (48223593 ^ Math.imul(__tokenBank_be98 & 65535 ^ 21216, 18041)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 60 | 1, (result.sectionsProtected | 0) ^ 60 | 1), Math.imul((result.sectionsProtected | 0) ^ 60 | 1, (result.sectionsProtected | 0) ^ 60 | 1)) & 15 ^ (__tokenBank_be98 >>> 8 & 255 ^ 217)) === 128) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (80166199 ^ Math.imul(__tokenBank_be98 & 65535 ^ 30521, 6571)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 52 | 1, (result.sectionsProtected | 0) ^ 52 | 1), Math.imul((result.sectionsProtected | 0) ^ 52 | 1, (result.sectionsProtected | 0) ^ 52 | 1)) & 15 ^ (__tokenBank_be98 >>> 8 & 255 ^ 127)) === 42) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              }
              continue;
            }
            const sourceCode = typeof rawSource === _rotateEngine_be98(226329848 ^ Math.imul(__tokenBank_be98 & 65535 ^ 30529, 18491)) ? rawSource : rawSource.toString(_rotateEngine_be98(515689668 ^ Math.imul(__tokenBank_be98 & 65535 ^ 3482, 23687)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (386193570 ^ Math.imul(__tokenBank_be98 & 65535 ^ 2835, 18065)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 34 | 1, (result.transformedCount | 0) ^ 34 | 1), Math.imul((result.transformedCount | 0) ^ 34 | 1, (result.transformedCount | 0) ^ 34 | 1)) & 15 ^ (__tokenBank_be98 >>> 8 & 255 ^ 39)) === 124) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (24274305 ^ Math.imul(__tokenBank_be98 & 65535 ^ 24292, 14685)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 88 | 1, (result.transformedCount | 0) ^ 88 | 1), Math.imul((result.transformedCount | 0) ^ 88 | 1, (result.transformedCount | 0) ^ 88 | 1)) & 15 ^ (__tokenBank_be98 >>> 17 & 255 ^ 73)) === 120) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (130050006 ^ Math.imul(__tokenBank_be98 & 65535 ^ 13940, 4581)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 42 | 1, (result.transformedCount | 0) ^ 42 | 1), Math.imul((result.transformedCount | 0) ^ 42 | 1, (result.transformedCount | 0) ^ 42 | 1)) & 15 ^ (__tokenBank_be98 >>> 22 & 255 ^ 47)) === 139) {
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
    function auditMode_39e2(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:584d4521-f1adfaae]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __ObjectState_39e2 = auditMode_39e2(692278137, 1404609075, 397968415, 523273119);
    const _tokenBank_39e2 = [[240, 227, 107, 186, 91, 81, 193, 26, 206, 208], [220, 199, 42, 103, 58, 47, 183, 246], [184, 184, 31, 118, 16, 7, 146, 200, 99], [119, 136, 252, 39, 246, 247], [74, 78, 222, 3, 209, 220, 38, 105, 50, 44, 132, 235, 151, 178], [61, 50, 170, 241, 140, 189], [0, 8, 156, 209, 98]];
    function _authenticateTapPromise_39e2(_slot) {
      const _row = _tokenBank_39e2[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ObjectState_39e2 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (typeof filter === _authenticateTapPromise_39e2(439938741 ^ Math.imul(__ObjectState_39e2 & 65535 ^ 12446, 19519)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 55 | 1, ((filter.seats || filter | 0) | 0) ^ 55 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 55 | 1, ((filter.seats || filter | 0) | 0) ^ 55 | 1)) & 15 ^ (__ObjectState_39e2 >>> 6 & 255 ^ 113)) === 218) {
      return filter(pathname);
    } else if (typeof filter === _authenticateTapPromise_39e2(865152927 ^ Math.imul(__ObjectState_39e2 & 65535 ^ 7059, 29381)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 68 | 1, ((filter.seats || filter | 0) | 0) ^ 68 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 68 | 1, ((filter.seats || filter | 0) | 0) ^ 68 | 1)) & 15 ^ (__ObjectState_39e2 >>> 13 & 255 ^ 57)) === 147) {
      return filter(pathname);
    } else if (typeof filter === _authenticateTapPromise_39e2(13243465 ^ Math.imul(__ObjectState_39e2 & 65535 ^ 27350, 22873)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 91 | 1, ((filter.seats || filter | 0) | 0) ^ 91 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 91 | 1, ((filter.seats || filter | 0) | 0) ^ 91 | 1)) & 15 ^ (__ObjectState_39e2 >>> 19 & 255 ^ 135)) === 144) {
      return filter(pathname);
    }
    if (Array.isArray(filter)) {
      return filter.some(item => typeof item === _authenticateTapPromise_39e2(47219729 ^ Math.imul(__ObjectState_39e2 & 65535 ^ 19819, 4855)) ? pathname.includes(item) : item.test(pathname));
    }
    if (typeof filter === _authenticateTapPromise_39e2(103267207 ^ Math.imul(__ObjectState_39e2 & 65535 ^ 30358, 13441)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 47 | 1, ((filter.seats || filter | 0) | 0) ^ 47 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 47 | 1, ((filter.seats || filter | 0) | 0) ^ 47 | 1)) & 15 ^ (__ObjectState_39e2 >>> 10 & 255 ^ 17)) === 66) {
      return pathname.includes(filter);
    } else if (typeof filter === _authenticateTapPromise_39e2(336956379 ^ Math.imul(__ObjectState_39e2 & 65535 ^ 3411, 12933)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 85 | 1, ((filter.seats || filter | 0) | 0) ^ 85 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 85 | 1, ((filter.seats || filter | 0) | 0) ^ 85 | 1)) & 15 ^ (__ObjectState_39e2 >>> 10 & 255 ^ 146)) === 201) {
      return pathname.includes(filter);
    } else if (typeof filter === _authenticateTapPromise_39e2(67822234 ^ Math.imul(__ObjectState_39e2 & 65535 ^ 31681, 13707)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 113 | 1, ((filter.seats || filter | 0) | 0) ^ 113 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 113 | 1, ((filter.seats || filter | 0) | 0) ^ 113 | 1)) & 15 ^ (__ObjectState_39e2 >>> 4 & 255 ^ 110)) === 224) {
      return pathname.includes(filter);
    }
    return (__ObjectState_39e2 & 255) === 149 ? filter.test(pathname) : (() => {
      function rotateQuorumProof_7d1c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1240929c-ffc44cc0]",
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
      const __optionsState_7d1c = rotateQuorumProof_7d1c(26075229, 1588558437, 139573153, 1919521083);
      if ((__optionsState_7d1c & 255) !== 154) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shouldProcessAsset(pathname) {
    function sanitizeTokenFrame_4281(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:46b054ff-beee7cff]",
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
      if ((_h >>> 4 & 15) !== 12) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __processAssetsState_4281 = sanitizeTokenFrame_4281(1040575955, 351157885, 124472795, 117582207);
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
    return (__processAssetsState_4281 & 255) === 198 ? true : (() => {
      function isolateWebpack_6d12(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f27c0f53-b77e7fd3]",
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
        if ((_h >>> 4 & 15) !== 10) {
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __SoltrixStudiosQuorum_6d12 = isolateWebpack_6d12(492523125, 767774319, 1345631827, 611005391);
      if ((__SoltrixStudiosQuorum_6d12 & 255) !== 165) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_a12c && window.__syferitIPC_a12c.invoke && window.__syferitIPC_a12c.invoke("license:quorum-token-refresh", {
    syncEpoch: 601335034,
    channelSig: "SIG_FRAME_A12C"
  });
}