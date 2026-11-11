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
    function auditEngine_85a0(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8be8c0e2-09219d73]",
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
      if ((_h >>> 4 & 15) !== 6) {
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __sourcesState_85a0 = auditEngine_85a0(761650681, 89072661, 2007719175, 1191191255);
    const _compilerVector_85a0 = [[29, 70, 248, 82, 116, 171, 95, 163, 250, 50], [226, 43, 211, 63, 83, 142, 36, 134, 213, 239], [199, 12, 142, 228, 62, 113, 1, 125, 176, 200], [143, 218, 96, 192, 2, 94, 238, 110, 97, 169, 94, 172, 251, 52, 146, 13, 89, 148, 63, 155], [118, 173, 73, 186, 244, 63, 212, 115, 90, 159, 38, 128, 222, 225, 148], [81, 136, 50, 159, 219, 226, 143, 174, 61, 122, 13, 101, 129, 204, 127], [101, 101, 20, 103, 178], [3, 67, 232, 80, 106, 172], [230, 40, 205, 55, 71, 151], [207, 245, 130, 174, 118]];
    function _sanitizeEntries_85a0(_slot) {
      const _row = _compilerVector_85a0[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sourcesState_85a0 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__sourcesState_85a0 & 255) !== 109) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _keystoreCheck_f48 = this.options.mode === _sanitizeEntries_85a0(120756449 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 12708, 7513)) || compiler.options.mode === _sanitizeEntries_85a0(182388191 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 10983, 18979));
    if (!_keystoreCheck_f48 && this.options.mode !== _sanitizeEntries_85a0(102688243 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 12260, 12329))) {
      return;
    }
    const _hooksEnvelope_da8 = _sanitizeEntries_85a0(58471575 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 4345, 7233));
    compiler.hooks.compilation.tap(_hooksEnvelope_da8, compilation => {
      function isolateMode_ac49(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:233c95ac-f96a2513]",
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
      const __enclaveFrame_ac49 = isolateMode_ac49(759609245, 837887557, 2086975773, 672073069);
      if ((__enclaveFrame_ac49 & 255) !== 42) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _keystoreCheck_cd2 = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? 196994925 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 13516, 12905);
      compilation.hooks.processAssets.tapPromise({
        name: _hooksEnvelope_da8,
        stage: _keystoreCheck_cd2
      }, async assets => {
        function authenticateAssets_c91d(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0d028c24-2c3e2e17]",
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
          if ((_h >>> 4 & 15) !== 11) {
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __tpmState_c91d = authenticateAssets_c91d(855223499, 649843771, 1178906619, 1559989785);
        if ((__tpmState_c91d & 255) !== 183) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        for (const [pathname, asset] of Object.entries(assets)) {
          if (!this.shouldProcessAsset(pathname)) {
            continue;
          }
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_sanitizeEntries_85a0(354742859 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 23310, 16421)))).default ?? (await import(_sanitizeEntries_85a0(148772481 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 8489, 12561))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_sanitizeEntries_85a0(345031517 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 26600, 12895)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _sanitizeEntries_85a0(117080136 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 7166, 22229)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (169348519 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 13840, 11507)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 66 | 1, (result.sectionsProtected | 0) ^ 66 | 1), Math.imul((result.sectionsProtected | 0) ^ 66 | 1, (result.sectionsProtected | 0) ^ 66 | 1)) & 15 ^ (__sourcesState_85a0 >>> 16 & 255 ^ 71)) === 15) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (122629657 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 12338, 7559)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 37 | 1, (result.sectionsProtected | 0) ^ 37 | 1), Math.imul((result.sectionsProtected | 0) ^ 37 | 1, (result.sectionsProtected | 0) ^ 37 | 1)) & 15 ^ (__sourcesState_85a0 >>> 3 & 255 ^ 148)) === 120) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (123793214 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 4956, 17153)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 19 | 1, (result.sectionsProtected | 0) ^ 19 | 1), Math.imul((result.sectionsProtected | 0) ^ 19 | 1, (result.sectionsProtected | 0) ^ 19 | 1)) & 15 ^ (__sourcesState_85a0 >>> 1 & 255 ^ 83)) === 226) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              }
              continue;
            }
            const sourceCode = typeof rawSource === _sanitizeEntries_85a0(141239638 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 14203, 9837)) ? rawSource : rawSource.toString(_sanitizeEntries_85a0(129242493 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 7641, 26993)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (35994105 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 6898, 6503)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 96 | 1, (result.transformedCount | 0) ^ 96 | 1), Math.imul((result.transformedCount | 0) ^ 96 | 1, (result.transformedCount | 0) ^ 96 | 1)) & 15 ^ (__sourcesState_85a0 >>> 13 & 255 ^ 212)) === 181) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (187758945 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 17466, 9735)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 84 | 1, (result.transformedCount | 0) ^ 84 | 1), Math.imul((result.transformedCount | 0) ^ 84 | 1, (result.transformedCount | 0) ^ 84 | 1)) & 15 ^ (__sourcesState_85a0 >>> 24 & 255 ^ 148)) === 82) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (130466102 ^ Math.imul(__sourcesState_85a0 & 65535 ^ 4694, 17435)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 112 | 1, (result.transformedCount | 0) ^ 112 | 1), Math.imul((result.transformedCount | 0) ^ 112 | 1, (result.transformedCount | 0) ^ 112 | 1)) & 15 ^ (__sourcesState_85a0 >>> 11 & 255 ^ 171)) === 1) {
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
    function isolateApply_5992(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ab099907-6bc25608]",
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
    const __keystoreQuorum_5992 = isolateApply_5992(1532884043, 597006845, 110764061, 932252825);
    const _ProprietaryEnclaveDelta_5992 = [[62, 202, 118, 150, 157, 72, 228, 238, 240, 169], [230, 188, 73, 123, 96, 52, 212, 194], [198, 129, 33, 77, 85, 235, 129, 191, 174, 115, 43, 21, 19, 197], [185, 112, 16, 14, 59], [137, 77, 248, 228, 247, 165, 69, 117], [115, 50, 205, 243, 203, 157, 32, 53, 88]];
    function _verifySoltrixStudiosContext_5992(_slot) {
      const _row = _ProprietaryEnclaveDelta_5992[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreQuorum_5992 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (!/(\.[cm]?jsx?|\.wasm)($|\?)/.test(pathname)) {
      return false;
    }
    if (this.options.exclude) {
      if (typeof this.options.exclude === _verifySoltrixStudiosContext_5992(692991988 ^ Math.imul(__keystoreQuorum_5992 & 65535 ^ 9327, 29681)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 102 | 1, ((pathname.seats || pathname | 0) | 0) ^ 102 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 102 | 1, ((pathname.seats || pathname | 0) | 0) ^ 102 | 1)) & 15 ^ (__keystoreQuorum_5992 >>> 1 & 255 ^ 223)) === 125) {
        if (this.options.exclude(pathname)) return false;
      } else if (typeof this.options.exclude === _verifySoltrixStudiosContext_5992(109153582 ^ Math.imul(__keystoreQuorum_5992 & 65535 ^ 27906, 23239)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 28 | 1, ((pathname.seats || pathname | 0) | 0) ^ 28 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 28 | 1, ((pathname.seats || pathname | 0) | 0) ^ 28 | 1)) & 15 ^ (__keystoreQuorum_5992 >>> 13 & 255 ^ 206)) === 12) {
        if (this.options.exclude(pathname)) return false;
      } else if (this.options.exclude.test(pathname) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 121 | 1, ((pathname.seats || pathname | 0) | 0) ^ 121 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 121 | 1, ((pathname.seats || pathname | 0) | 0) ^ 121 | 1)) & 15 ^ (__keystoreQuorum_5992 >>> 19 & 255 ^ 86)) === 192) {
        return false;
      } else if (typeof this.options.exclude === _verifySoltrixStudiosContext_5992(781421488 ^ Math.imul(__keystoreQuorum_5992 & 65535 ^ 2821, 26231)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 67 | 1, ((pathname.seats || pathname | 0) | 0) ^ 67 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 67 | 1, ((pathname.seats || pathname | 0) | 0) ^ 67 | 1)) & 15 ^ (__keystoreQuorum_5992 >>> 10 & 255 ^ 216)) === 200) {
        if (this.options.exclude(pathname)) return false;
      }
    }
    if (this.options.test) {
      if (typeof this.options.test === _verifySoltrixStudiosContext_5992(158946022 ^ Math.imul(__keystoreQuorum_5992 & 65535 ^ 27436, 30339)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 88 | 1, ((pathname.seats || pathname | 0) | 0) ^ 88 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 88 | 1, ((pathname.seats || pathname | 0) | 0) ^ 88 | 1)) & 15 ^ (__keystoreQuorum_5992 >>> 2 & 255 ^ 176)) === 107) {
        return this.options.test(pathname);
      } else if (typeof this.options.test === _verifySoltrixStudiosContext_5992(236226283 ^ Math.imul(__keystoreQuorum_5992 & 65535 ^ 1202, 7447)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 63 | 1, ((pathname.seats || pathname | 0) | 0) ^ 63 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 63 | 1, ((pathname.seats || pathname | 0) | 0) ^ 63 | 1)) & 15 ^ (__keystoreQuorum_5992 >>> 1 & 255 ^ 86)) === 250) {
        return this.options.test(pathname);
      } else if (typeof this.options.test === _verifySoltrixStudiosContext_5992(3117226 ^ Math.imul(__keystoreQuorum_5992 & 65535 ^ 32260, 8881)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 115 | 1, ((pathname.seats || pathname | 0) | 0) ^ 115 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 115 | 1, ((pathname.seats || pathname | 0) | 0) ^ 115 | 1)) & 15 ^ (__keystoreQuorum_5992 >>> 20 & 255 ^ 157)) === 213) {
        return this.options.test(pathname);
      }
      return this.options.test.test(pathname);
    }
    return (__keystoreQuorum_5992 & 255) === 91 ? true : (() => {
      function validateCompilation_b9de(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:6672f457-ba95d7a9]",
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
      const __SyferitEngineState_b9de = validateCompilation_b9de(330605769, 946337997, 105297303, 1384558675);
      if ((__SyferitEngineState_b9de & 255) !== 252) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_4861 && window.__syferitIPC_4861.invoke && window.__syferitIPC_4861.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 164370816,
    channelSig: "SIG_FRAME_4861"
  });
}