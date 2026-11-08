// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
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
    function assertEnclaveDigestSequence_6a82(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e259e78c-a8765a9f]",
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
    const __enclaveDigestSequence_6a82 = assertEnclaveDigestSequence_6a82(904053497, 2080712423, 305000921, 2122061277);
    const _ringBufferSequence_6a82 = [[159, 151, 115, 40, 246, 26, 196, 137, 120, 99], [100, 120, 46, 21, 221, 253, 161, 108, 83, 92], [73, 93, 9, 242, 184, 160, 142, 67, 14, 57], [13, 45, 237, 222, 128, 129, 107, 24, 227, 30, 195, 130, 121, 123, 23, 27, 219, 195, 178, 101], [244, 28, 210, 144, 118, 110, 47, 89, 216, 206, 173, 122, 92, 80, 31], [223, 251, 183, 117, 93, 81, 2, 180, 163, 169, 136, 95, 7, 63, 226], [227, 180, 155, 89, 12], [129, 156, 109, 38, 232, 27], [100, 121, 54, 29, 197, 198], [73, 70, 15, 180, 232]];
    function _isolateEnclaveDigestEnvelope_6a82(_slot) {
      const _row = _ringBufferSequence_6a82[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveDigestSequence_6a82 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__enclaveDigestSequence_6a82 & 255) !== 239) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _sgxEcallCounter_d7b = this.options.mode === _isolateEnclaveDigestEnvelope_6a82(44628 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 28347)) || compiler.options.mode === _isolateEnclaveDigestEnvelope_6a82(35261 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 18771));
    if (!_sgxEcallCounter_d7b && this.options.mode !== _isolateEnclaveDigestEnvelope_6a82(56370 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 7391))) {
      return;
    }
    const _keyDerivationStateSequence_5e1 = _isolateEnclaveDigestEnvelope_6a82(59822 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 10562));
    compiler.hooks.compilation.tap(_keyDerivationStateSequence_5e1, compilation => {
      function verifySyferitEngineContext_4fb3(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e40b840b-3b8e4c77]",
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
        if ((_h >>> 4 & 15) !== 4) {
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __keyDerivationStateProof_4fb3 = verifySyferitEngineContext_4fb3(483006311, 1895117461, 119694293, 2105017533);
      if ((__keyDerivationStateProof_4fb3 & 255) !== 66) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _keyDerivationStateProof_69a = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? 53506 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 4489);
      compilation.hooks.processAssets.tapPromise({
        name: _keyDerivationStateSequence_5e1,
        stage: _keyDerivationStateProof_69a
      }, async assets => {
        function evaluateKeyDerivationStateProof_e08a(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7ba3457a-f0f8f869]",
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
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __sgxBoundaryProof_e08a = evaluateKeyDerivationStateProof_e08a(116281431, 1779940895, 1992461245, 1760458835);
        if ((__sgxBoundaryProof_e08a & 255) !== 24) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        for (const [pathname, asset] of Object.entries(assets)) {
          if (!this.shouldProcessAsset(pathname)) {
            continue;
          }
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_isolateEnclaveDigestEnvelope_6a82(64436 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 15199)))).default ?? (await import(_isolateEnclaveDigestEnvelope_6a82(60770 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 11656))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_isolateEnclaveDigestEnvelope_6a82(53978 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 4659)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _isolateEnclaveDigestEnvelope_6a82(59851 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 10531)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (35214 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 18785)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 26 | 1, (result.sectionsProtected | 0) ^ 26 | 1), Math.imul((result.sectionsProtected | 0) ^ 26 | 1, (result.sectionsProtected | 0) ^ 26 | 1)) & 15 ^ (__enclaveDigestSequence_6a82 >>> 3 & 255 ^ 224)) === 242) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (43661 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 27234)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 90 | 1, (result.sectionsProtected | 0) ^ 90 | 1), Math.imul((result.sectionsProtected | 0) ^ 90 | 1, (result.sectionsProtected | 0) ^ 90 | 1)) & 15 ^ (__enclaveDigestSequence_6a82 >>> 6 & 255 ^ 232)) === 234) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (49509 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 389)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 89 | 1, (result.sectionsProtected | 0) ^ 89 | 1), Math.imul((result.sectionsProtected | 0) ^ 89 | 1, (result.sectionsProtected | 0) ^ 89 | 1)) & 15 ^ (__enclaveDigestSequence_6a82 >>> 23 & 255 ^ 235)) === 93) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              }
              continue;
            }
            const sourceCode = typeof rawSource === _isolateEnclaveDigestEnvelope_6a82(43713 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 27174)) ? rawSource : rawSource.toString(_isolateEnclaveDigestEnvelope_6a82(56692 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 7570)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (54081 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 5038)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 63 | 1, (result.transformedCount | 0) ^ 63 | 1), Math.imul((result.transformedCount | 0) ^ 63 | 1, (result.transformedCount | 0) ^ 63 | 1)) & 15 ^ (__enclaveDigestSequence_6a82 >>> 4 & 255 ^ 158)) === 155) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (52218 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 2837)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 86 | 1, (result.transformedCount | 0) ^ 86 | 1), Math.imul((result.transformedCount | 0) ^ 86 | 1, (result.transformedCount | 0) ^ 86 | 1)) & 15 ^ (__enclaveDigestSequence_6a82 >>> 6 & 255 ^ 202)) === 200) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (33698 ^ (__enclaveDigestSequence_6a82 & 65535 ^ 17218)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 19 | 1, (result.transformedCount | 0) ^ 19 | 1), Math.imul((result.transformedCount | 0) ^ 19 | 1, (result.transformedCount | 0) ^ 19 | 1)) & 15 ^ (__enclaveDigestSequence_6a82 >>> 11 & 255 ^ 112)) === 45) {
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
    function assertEnclaveDigestVector_31bc(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c122031c-3e768418]",
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
    const __ringBufferSequence_31bc = assertEnclaveDigestVector_31bc(1261877055, 202814645, 340322437, 379451005);
    const _sgxBoundaryEnvelope_31bc = [[229, 211, 65, 202, 72, 127, 241, 125, 244, 209, 6, 146, 75, 4, 132, 22, 167], [206, 170, 56, 189, 72, 26, 133, 28], [165, 119, 22, 92, 16, 237, 96, 229, 128, 65, 252, 71, 230, 163, 92, 218, 121], [154, 90, 205, 119, 247, 200, 91, 206, 111, 60, 151, 60, 193, 134, 55, 129, 38], [113, 59, 171, 46, 223, 139, 54, 143], [89, 29, 137, 30, 177, 113, 27, 89, 13, 232, 125, 246, 153, 91, 195, 74]];
    function _assertMode_31bc(_slot) {
      const _row = _sgxBoundaryEnvelope_31bc[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ringBufferSequence_31bc >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (!/(\.[cm]?jsx?|\.wasm)($|\?)/.test(pathname)) {
      return false;
    }
    if (this.options.exclude) {
      if (typeof this.options.exclude === _assertMode_31bc(55373 ^ (__ringBufferSequence_31bc & 65535 ^ 19918)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 64 | 1, ((pathname.seats || pathname | 0) | 0) ^ 64 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 64 | 1, ((pathname.seats || pathname | 0) | 0) ^ 64 | 1)) & 15 ^ (__ringBufferSequence_31bc >>> 19 & 255 ^ 163)) === 244) {
        if (this.options.exclude(pathname)) return false;
      } else if (typeof this.options.exclude === _assertMode_31bc(40607 ^ (__ringBufferSequence_31bc & 65535 ^ 2845)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 47 | 1, ((pathname.seats || pathname | 0) | 0) ^ 47 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 47 | 1, ((pathname.seats || pathname | 0) | 0) ^ 47 | 1)) & 15 ^ (__ringBufferSequence_31bc >>> 1 & 255 ^ 49)) === 241) {
        if (this.options.exclude(pathname)) return false;
      } else if (this.options.exclude.test(pathname) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 91 | 1, ((pathname.seats || pathname | 0) | 0) ^ 91 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 91 | 1, ((pathname.seats || pathname | 0) | 0) ^ 91 | 1)) & 15 ^ (__ringBufferSequence_31bc >>> 10 & 255 ^ 158)) === 122) {
        return false;
      } else if (typeof this.options.exclude === _assertMode_31bc(61355 ^ (__ringBufferSequence_31bc & 65535 ^ 31274)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 55 | 1, ((pathname.seats || pathname | 0) | 0) ^ 55 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 55 | 1, ((pathname.seats || pathname | 0) | 0) ^ 55 | 1)) & 15 ^ (__ringBufferSequence_31bc >>> 15 & 255 ^ 206)) === 2) {
        if (this.options.exclude(pathname)) return false;
      }
    }
    if (this.options.test) {
      if (typeof this.options.test === _assertMode_31bc(49430 ^ (__ringBufferSequence_31bc & 65535 ^ 21654)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 17 | 1, ((pathname.seats || pathname | 0) | 0) ^ 17 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 17 | 1, ((pathname.seats || pathname | 0) | 0) ^ 17 | 1)) & 15 ^ (__ringBufferSequence_31bc >>> 15 & 255 ^ 69)) === 137) {
        return this.options.test(pathname);
      } else if (typeof this.options.test === _assertMode_31bc(46577 ^ (__ringBufferSequence_31bc & 65535 ^ 8310)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 95 | 1, ((pathname.seats || pathname | 0) | 0) ^ 95 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 95 | 1, ((pathname.seats || pathname | 0) | 0) ^ 95 | 1)) & 15 ^ (__ringBufferSequence_31bc >>> 12 & 255 ^ 189)) === 197) {
        return this.options.test(pathname);
      } else if (typeof this.options.test === _assertMode_31bc(41641 ^ (__ringBufferSequence_31bc & 65535 ^ 14127)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 63 | 1, ((pathname.seats || pathname | 0) | 0) ^ 63 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 63 | 1, ((pathname.seats || pathname | 0) | 0) ^ 63 | 1)) & 15 ^ (__ringBufferSequence_31bc >>> 7 & 255 ^ 33)) === 5) {
        return this.options.test(pathname);
      }
      return this.options.test.test(pathname);
    }
    return (__ringBufferSequence_31bc & 255) === 131 ? true : (() => {
      function verifyOptions_726a(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:cad0a514-7085c5be]",
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
        if ((_h >>> 4 & 15) !== 13) {
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __enclaveDigestEnvelope_726a = verifyOptions_726a(1005311751, 1825465481, 975272443, 1074398231);
      if ((__enclaveDigestEnvelope_726a & 255) !== 216) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_3559.invoke && window.__syferitIPC_3559.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 2089855488,
    channelSig: "SIG_FRAME_3559"
  });
}