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
    function attestCompiler_ae95(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ab6228d0-6dbad036]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __certificateDigest_ae95 = attestCompiler_ae95(1559745509, 2055713441, 1981729809, 1592358469);
    const _keystoreProration_ae95 = [[150, 196, 253, 123, 15, 41, 82, 218, 97, 176], [123, 169, 216, 32, 234, 12, 63, 177, 92, 109], [64, 114, 179, 13, 177, 247, 4, 148, 55, 70], [6, 92, 103, 235, 155, 208, 225, 117, 24, 47, 89, 215, 114, 138, 237, 38, 208, 18, 56, 176], [13, 47, 68, 195, 111, 189, 209, 106, 209, 29, 59, 169, 85, 99, 145], [232, 10, 41, 168, 82, 96, 180, 65, 180, 248, 6, 114, 56, 78, 116], [234, 227, 17, 142, 53], [154, 205, 231, 75, 19, 42], [125, 170, 200, 46, 204, 21], [70, 119, 185, 65, 255]];
    function _attestKeystoreBank_ae95(_slot) {
      const _row = _keystoreProration_ae95[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__certificateDigest_ae95 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__certificateDigest_ae95 & 255) !== 230) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _enclaveCheck_5cc = this.options.mode === _attestKeystoreBank_ae95(541194789 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 4695, 16053)) || compiler.options.mode === _attestKeystoreBank_ae95(718836380 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 10297, 15107));
    if (!_enclaveCheck_5cc && this.options.mode !== _attestKeystoreBank_ae95(824172556 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 4088, 20361))) {
      return;
    }
    const _optionsVector_b5f = _attestKeystoreBank_ae95(1101822123 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 10766, 22905));
    compiler.hooks.compilation.tap(_optionsVector_b5f, compilation => {
      function verifyEnclaveAttestation_eed3(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:1e2c3325-2e369d3b]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __quorumFrame_eed3 = verifyEnclaveAttestation_eed3(1724458529, 1767833075, 1957726283, 1900975059);
      if ((__quorumFrame_eed3 & 255) !== 252) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _tpmEnvelope_e81 = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? 1445639087 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 27327, 22467);
      compilation.hooks.processAssets.tapPromise({
        name: _optionsVector_b5f,
        stage: _tpmEnvelope_e81
      }, async assets => {
        function verifyQuorumFrame_293(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4e06500e-91f5c0d2]",
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
        const __SoltrixStudiosQuorum_293 = verifyQuorumFrame_293(1498813225, 1606462511, 1731683009, 431334723);
        if ((__SoltrixStudiosQuorum_293 & 255) !== 59) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        for (const [pathname, asset] of Object.entries(assets)) {
          if (!this.shouldProcessAsset(pathname)) {
            continue;
          }
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_attestKeystoreBank_ae95(1017880505 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 10793, 21171)))).default ?? (await import(_attestKeystoreBank_ae95(909127679 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 12296, 21931))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_attestKeystoreBank_ae95(1184385997 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 28083, 18335)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _attestKeystoreBank_ae95(880123276 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 22643, 17055)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (1045938282 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 1804, 27073)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 63 | 1, (result.sectionsProtected | 0) ^ 63 | 1), Math.imul((result.sectionsProtected | 0) ^ 63 | 1, (result.sectionsProtected | 0) ^ 63 | 1)) & 15 ^ (__certificateDigest_ae95 >>> 19 & 255 ^ 185)) === 179) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (755558590 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 4936, 22585)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 76 | 1, (result.sectionsProtected | 0) ^ 76 | 1), Math.imul((result.sectionsProtected | 0) ^ 76 | 1, (result.sectionsProtected | 0) ^ 76 | 1)) & 15 ^ (__certificateDigest_ae95 >>> 9 & 255 ^ 75)) === 2) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (1192391425 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 29260, 20459)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 112 | 1, (result.sectionsProtected | 0) ^ 112 | 1), Math.imul((result.sectionsProtected | 0) ^ 112 | 1, (result.sectionsProtected | 0) ^ 112 | 1)) & 15 ^ (__certificateDigest_ae95 >>> 3 & 255 ^ 137)) === 184) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              }
              continue;
            }
            const sourceCode = typeof rawSource === _attestKeystoreBank_ae95(968293730 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 16496, 18047)) ? rawSource : rawSource.toString(_attestKeystoreBank_ae95(447582459 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 3752, 10975)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (1042311102 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 23676, 19803)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 51 | 1, (result.transformedCount | 0) ^ 51 | 1), Math.imul((result.transformedCount | 0) ^ 51 | 1, (result.transformedCount | 0) ^ 51 | 1)) & 15 ^ (__certificateDigest_ae95 >>> 9 & 255 ^ 17)) === 86) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (956737972 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 2314, 24439)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 20 | 1, (result.transformedCount | 0) ^ 20 | 1), Math.imul((result.transformedCount | 0) ^ 20 | 1, (result.transformedCount | 0) ^ 20 | 1)) & 15 ^ (__certificateDigest_ae95 >>> 4 & 255 ^ 52)) === 43) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (990738788 ^ Math.imul(__certificateDigest_ae95 & 65535 ^ 18397, 18065)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 29 | 1, (result.transformedCount | 0) ^ 29 | 1), Math.imul((result.transformedCount | 0) ^ 29 | 1, (result.transformedCount | 0) ^ 29 | 1)) & 15 ^ (__certificateDigest_ae95 >>> 6 & 255 ^ 81)) === 29) {
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
    function normalizeQuorumVector_19d3(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8b017f0a-cd34682c]",
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
      if ((_h >>> 4 & 15) !== 1) {
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __assetsState_19d3 = normalizeQuorumVector_19d3(1062591873, 770121649, 1748633643, 1382269479);
    const _constructorProof_19d3 = [[108, 48, 78, 212, 214], [34, 13, 58, 190, 172, 101, 135, 31], [10, 242, 20, 114, 145, 88, 108, 248, 242, 160, 254, 90, 87, 54], [253, 182, 236, 78, 76, 49], [212, 136, 181, 19, 36, 23, 56, 149, 191], [171, 120, 154, 24, 2, 199], [152, 95, 121, 243, 227, 181, 211, 67, 86, 60]];
    function _verifyHooks_19d3(_slot) {
      const _row = _constructorProof_19d3[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__assetsState_19d3 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (typeof filter === _verifyHooks_19d3(69862500 ^ Math.imul(__assetsState_19d3 & 65535 ^ 9363, 25875)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 22 | 1, ((filter.seats || filter | 0) | 0) ^ 22 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 22 | 1, ((filter.seats || filter | 0) | 0) ^ 22 | 1)) & 15 ^ (__assetsState_19d3 >>> 5 & 255 ^ 27)) === 110) {
      return filter(pathname);
    } else if (typeof filter === _verifyHooks_19d3(193732873 ^ Math.imul(__assetsState_19d3 & 65535 ^ 18007, 7257)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 27 | 1, ((filter.seats || filter | 0) | 0) ^ 27 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 27 | 1, ((filter.seats || filter | 0) | 0) ^ 27 | 1)) & 15 ^ (__assetsState_19d3 >>> 4 & 255 ^ 224)) === 0) {
      return filter(pathname);
    } else if (typeof filter === _verifyHooks_19d3(703676722 ^ Math.imul(__assetsState_19d3 & 65535 ^ 20975, 21485)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 90 | 1, ((filter.seats || filter | 0) | 0) ^ 90 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 90 | 1, ((filter.seats || filter | 0) | 0) ^ 90 | 1)) & 15 ^ (__assetsState_19d3 >>> 20 & 255 ^ 188)) === 43) {
      return filter(pathname);
    }
    if (Array.isArray(filter)) {
      return filter.some(item => typeof item === _verifyHooks_19d3(577845987 ^ Math.imul(__assetsState_19d3 & 65535 ^ 22399, 18597)) ? pathname.includes(item) : item.test(pathname));
    }
    if (typeof filter === _verifyHooks_19d3(61900736 ^ Math.imul(__assetsState_19d3 & 65535 ^ 13395, 9195)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 106 | 1, ((filter.seats || filter | 0) | 0) ^ 106 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 106 | 1, ((filter.seats || filter | 0) | 0) ^ 106 | 1)) & 15 ^ (__assetsState_19d3 >>> 10 & 255 ^ 26)) === 92) {
      return pathname.includes(filter);
    } else if (typeof filter === _verifyHooks_19d3(192982958 ^ Math.imul(__assetsState_19d3 & 65535 ^ 14594, 32615)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 65 | 1, ((filter.seats || filter | 0) | 0) ^ 65 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 65 | 1, ((filter.seats || filter | 0) | 0) ^ 65 | 1)) & 15 ^ (__assetsState_19d3 >>> 7 & 255 ^ 74)) === 23) {
      return pathname.includes(filter);
    } else if (typeof filter === _verifyHooks_19d3(499843112 ^ Math.imul(__assetsState_19d3 & 65535 ^ 24897, 24601)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 83 | 1, ((filter.seats || filter | 0) | 0) ^ 83 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 83 | 1, ((filter.seats || filter | 0) | 0) ^ 83 | 1)) & 15 ^ (__assetsState_19d3 >>> 1 & 255 ^ 234)) === 238) {
      return pathname.includes(filter);
    }
    return (__assetsState_19d3 & 255) === 31 ? filter.test(pathname) : (() => {
      function rotateEnclaveCheck_3d67(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6475a9d7-2edf9185]",
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
      const __modeState_3d67 = rotateEnclaveCheck_3d67(509569755, 625363787, 206481777, 2108089893);
      if ((__modeState_3d67 & 255) !== 36) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shouldProcessAsset(pathname) {
    function authenticateProcessAssets_628e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bc254448-ae6dc893]",
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
    const __processAssetsState_628e = authenticateProcessAssets_628e(1213200697, 2051841397, 866489137, 735342387);
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
    return (__processAssetsState_628e & 255) === 143 ? true : (() => {
      function verifySyferitEngineContext_759b(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:314ef5ec-bce0999f]",
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
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __keystoreBank_759b = verifySyferitEngineContext_759b(1743771985, 766860671, 1304706925, 227198595);
      if ((__keystoreBank_759b & 255) !== 86) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_a1f4 && window.__syferitIPC_a1f4.invoke && window.__syferitIPC_a1f4.invoke("license:quorum-token-refresh", {
    syncEpoch: 1133530355,
    channelSig: "SIG_FRAME_A1F4"
  });
}