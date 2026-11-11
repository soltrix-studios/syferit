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
    function normalizeQuorumVector_eee0(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:95097e99-6c986566]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __nonceProof_eee0 = normalizeQuorumVector_eee0(1196172493, 870262143, 104556033, 1428523863);
    const _keystoreProration_eee0 = [[240, 94, 246, 212, 97, 163, 89, 45, 199, 58], [213, 35, 209, 177, 76, 134, 38, 0, 162, 23], [186, 4, 140, 158, 43, 105, 3, 231, 157, 240], [188, 226, 110, 122, 241, 70, 232, 228, 114, 161, 64, 38, 200, 60, 148, 183, 74, 140, 49, 1], [99, 165, 79, 52, 201, 55, 170, 245, 79, 135, 32, 30, 179, 25, 154], [78, 128, 48, 25, 172, 26, 141, 208, 18, 98, 15, 227, 150, 196, 125], [112, 125, 22, 253, 159], [240, 91, 238, 218, 121, 164], [219, 32, 179, 177, 82, 143], [184, 13, 128, 208, 89]];
    function _isolateAssets_eee0(_slot) {
      const _row = _keystoreProration_eee0[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceProof_eee0 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__nonceProof_eee0 & 255) !== 128) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _engineBank_4dd = this.options.mode === _isolateAssets_eee0(239336768 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 18496, 11723)) || compiler.options.mode === _isolateAssets_eee0(207272078 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 25425, 8031));
    if (!_engineBank_4dd && this.options.mode !== _isolateAssets_eee0(389927522 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 23712, 16715))) {
      return;
    }
    const _tokenAttestation_476 = _isolateAssets_eee0(798258845 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 29650, 26807));
    compiler.hooks.compilation.tap(_tokenAttestation_476, compilation => {
      function verifyProprietaryEnclaveContext_b631(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:004faadc-2f11f6f6]",
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
      const __protectWasmState_b631 = verifyProprietaryEnclaveContext_b631(25236761, 401516415, 2119043449, 291630835);
      if ((__protectWasmState_b631 & 255) !== 57) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _sourcesVector_f98 = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? 201307707 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 26581, 8163);
      compilation.hooks.processAssets.tapPromise({
        name: _tokenAttestation_476,
        stage: _sourcesVector_f98
      }, async assets => {
        function auditDefault_3794(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e0151f88-f4b0fc7a]",
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
        const __nonceProof_3794 = auditDefault_3794(319811583, 148961295, 1811800127, 439860629);
        if ((__nonceProof_3794 & 255) !== 250) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        for (const [pathname, asset] of Object.entries(assets)) {
          if (!this.shouldProcessAsset(pathname)) {
            continue;
          }
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_isolateAssets_eee0(182672038 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 20502, 8147)))).default ?? (await import(_isolateAssets_eee0(376347695 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 21554, 17565))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_isolateAssets_eee0(907088959 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 31229, 28013)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _isolateAssets_eee0(743551493 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 25406, 28831)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (140176505 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 25829, 5509)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 108 | 1, (result.sectionsProtected | 0) ^ 108 | 1), Math.imul((result.sectionsProtected | 0) ^ 108 | 1, (result.sectionsProtected | 0) ^ 108 | 1)) & 15 ^ (__nonceProof_eee0 >>> 20 & 255 ^ 161)) === 188) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (122704890 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 25794, 4829)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 38 | 1, (result.sectionsProtected | 0) ^ 38 | 1), Math.imul((result.sectionsProtected | 0) ^ 38 | 1, (result.sectionsProtected | 0) ^ 38 | 1)) & 15 ^ (__nonceProof_eee0 >>> 5 & 255 ^ 225)) === 220) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (103467210 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 16409, 5645)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 127 | 1, (result.sectionsProtected | 0) ^ 127 | 1), Math.imul((result.sectionsProtected | 0) ^ 127 | 1, (result.sectionsProtected | 0) ^ 127 | 1)) & 15 ^ (__nonceProof_eee0 >>> 0 & 255 ^ 219)) === 88) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              }
              continue;
            }
            const sourceCode = typeof rawSource === _isolateAssets_eee0(279020404 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 18332, 17001)) ? rawSource : rawSource.toString(_isolateAssets_eee0(176637082 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 29385, 5883)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (306879883 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 17155, 17497)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 63 | 1, (result.transformedCount | 0) ^ 63 | 1), Math.imul((result.transformedCount | 0) ^ 63 | 1, (result.transformedCount | 0) ^ 63 | 1)) & 15 ^ (__nonceProof_eee0 >>> 3 & 255 ^ 210)) === 39) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (147897981 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 13681, 11341)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 106 | 1, (result.transformedCount | 0) ^ 106 | 1), Math.imul((result.transformedCount | 0) ^ 106 | 1, (result.transformedCount | 0) ^ 106 | 1)) & 15 ^ (__nonceProof_eee0 >>> 5 & 255 ^ 139)) === 182) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (726984822 ^ Math.imul(__nonceProof_eee0 & 65535 ^ 25915, 28763)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 72 | 1, (result.transformedCount | 0) ^ 72 | 1), Math.imul((result.transformedCount | 0) ^ 72 | 1, (result.transformedCount | 0) ^ 72 | 1)) & 15 ^ (__nonceProof_eee0 >>> 7 & 255 ^ 79)) === 75) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            }
          } catch (err) {
            compilation.errors.push(new Error(`[SyferitWebpackPlugin] Failed to protect asset "${pathname}": ${err.message}`));
          }
        }
      });
    });
  }
  shouldProcessAsset(pathname) {
    function authenticateCertificateBank_9fff(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3023d009-86935093]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __nonceProof_9fff = authenticateCertificateBank_9fff(1282133999, 1342525757, 444062387, 972808081);
    const _constructorDigest_9fff = [[50, 199, 186, 183, 153, 77, 16, 15, 12, 180], [26, 187, 157, 148, 100, 11, 232, 229], [210, 144, 121, 112, 80], [161, 119, 75, 30, 57, 192, 190, 160, 138], [141, 72, 12, 5, 11, 184, 153, 148], [115, 13, 234, 251, 200, 159, 122, 113, 91, 239, 240, 195, 190, 113]];
    function _verifySyferitEngineContext_9fff(_slot) {
      const _row = _constructorDigest_9fff[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceProof_9fff >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (!/(\.[cm]?jsx?|\.wasm)($|\?)/.test(pathname)) {
      return false;
    }
    if (this.options.exclude) {
      if (typeof this.options.exclude === _verifySyferitEngineContext_9fff(1551783230 ^ Math.imul(__nonceProof_9fff & 65535 ^ 27553, 25261)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 71 | 1, ((pathname.seats || pathname | 0) | 0) ^ 71 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 71 | 1, ((pathname.seats || pathname | 0) | 0) ^ 71 | 1)) & 15 ^ (__nonceProof_9fff >>> 6 & 255 ^ 100)) === 126) {
        if (this.options.exclude(pathname)) return false;
      } else if (typeof this.options.exclude === _verifySyferitEngineContext_9fff(501276726 ^ Math.imul(__nonceProof_9fff & 65535 ^ 12458, 10819)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 107 | 1, ((pathname.seats || pathname | 0) | 0) ^ 107 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 107 | 1, ((pathname.seats || pathname | 0) | 0) ^ 107 | 1)) & 15 ^ (__nonceProof_9fff >>> 8 & 255 ^ 30)) === 155) {
        if (this.options.exclude(pathname)) return false;
      } else if (this.options.exclude.test(pathname) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 35 | 1, ((pathname.seats || pathname | 0) | 0) ^ 35 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 35 | 1, ((pathname.seats || pathname | 0) | 0) ^ 35 | 1)) & 15 ^ (__nonceProof_9fff >>> 10 & 255 ^ 185)) === 153) {
        return false;
      } else if (typeof this.options.exclude === _verifySyferitEngineContext_9fff(983129420 ^ Math.imul(__nonceProof_9fff & 65535 ^ 29969, 15917)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 51 | 1, ((pathname.seats || pathname | 0) | 0) ^ 51 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 51 | 1, ((pathname.seats || pathname | 0) | 0) ^ 51 | 1)) & 15 ^ (__nonceProof_9fff >>> 4 & 255 ^ 118)) === 58) {
        if (this.options.exclude(pathname)) return false;
      }
    }
    if (this.options.test) {
      if (typeof this.options.test === _verifySyferitEngineContext_9fff(1089841037 ^ Math.imul(__nonceProof_9fff & 65535 ^ 16873, 21529)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 57 | 1, ((pathname.seats || pathname | 0) | 0) ^ 57 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 57 | 1, ((pathname.seats || pathname | 0) | 0) ^ 57 | 1)) & 15 ^ (__nonceProof_9fff >>> 16 & 255 ^ 233)) === 100) {
        return this.options.test(pathname);
      } else if (typeof this.options.test === _verifySyferitEngineContext_9fff(1349933009 ^ Math.imul(__nonceProof_9fff & 65535 ^ 20848, 24739)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 34 | 1, ((pathname.seats || pathname | 0) | 0) ^ 34 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 34 | 1, ((pathname.seats || pathname | 0) | 0) ^ 34 | 1)) & 15 ^ (__nonceProof_9fff >>> 24 & 255 ^ 158)) === 252) {
        return this.options.test(pathname);
      } else if (typeof this.options.test === _verifySyferitEngineContext_9fff(1404877036 ^ Math.imul(__nonceProof_9fff & 65535 ^ 29786, 22861)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 69 | 1, ((pathname.seats || pathname | 0) | 0) ^ 69 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 69 | 1, ((pathname.seats || pathname | 0) | 0) ^ 69 | 1)) & 15 ^ (__nonceProof_9fff >>> 21 & 255 ^ 218)) === 207) {
        return this.options.test(pathname);
      }
      return this.options.test.test(pathname);
    }
    return (__nonceProof_9fff & 255) === 87 ? true : (() => {
      function normalizeQuorumVector_7078(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e10db522-619009c1]",
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
      const __sourceState_7078 = normalizeQuorumVector_7078(636786333, 1036847511, 1292329823, 856490025);
      if ((__sourceState_7078 & 255) !== 47) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_466 && window.__syferitIPC_466.invoke && window.__syferitIPC_466.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 1278088134,
    channelSig: "SIG_FRAME_466"
  });
}