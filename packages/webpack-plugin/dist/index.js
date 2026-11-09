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
    function rotateConstructor_7073(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:89f05cbb-4c4fa02d]",
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
    const __hmacRingSequence_7073 = rotateConstructor_7073(1398241741, 1914024437, 37165389, 223792841);
    const _ProprietaryEnclaveDelta_7073 = [[77, 246, 19, 74, 164, 123, 100, 171, 10, 194], [18, 219, 206, 55, 131, 94, 65, 142, 229, 191], [247, 188, 169, 28, 110, 1, 46, 101, 192, 152], [255, 138, 141, 248, 50, 238, 11, 102, 177, 121, 99, 164, 11, 196, 247, 53, 137, 36, 82, 131], [166, 125, 114, 178, 4, 207, 207, 123, 138, 47, 77, 152, 238, 177, 191], [129, 88, 87, 151, 235, 178, 162, 86, 109, 10, 40, 125, 209, 156, 130], [53, 21, 59, 127, 194], [51, 243, 13, 88, 186, 124], [22, 216, 214, 63, 151, 39], [255, 165, 175, 86, 38]];
    function _evaluateKeyDerivationStateSequence_7073(_slot) {
      const _row = _ProprietaryEnclaveDelta_7073[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__hmacRingSequence_7073 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__hmacRingSequence_7073 & 255) !== 61) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _protectWasmSequence_de3 = this.options.mode === _evaluateKeyDerivationStateSequence_7073(6576 ^ (__hmacRingSequence_7073 & 65535 ^ 18061)) || compiler.options.mode === _evaluateKeyDerivationStateSequence_7073(20677 ^ (__hmacRingSequence_7073 & 65535 ^ 4089));
    if (!_protectWasmSequence_de3 && this.options.mode !== _evaluateKeyDerivationStateSequence_7073(30984 ^ (__hmacRingSequence_7073 & 65535 ^ 9783))) {
      return;
    }
    const _tapPromiseBitmask_985 = _evaluateKeyDerivationStateSequence_7073(22814 ^ (__hmacRingSequence_7073 & 65535 ^ 1568));
    compiler.hooks.compilation.tap(_tapPromiseBitmask_985, compilation => {
      function verifyHmacSequenceFrame_4edc(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b48be47c-69febda8]",
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
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __sgxBoundarySequence_4edc = verifyHmacSequenceFrame_4edc(984723529, 2004555121, 683369375, 1101552827);
      if ((__sgxBoundarySequence_4edc & 255) !== 191) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _hooksIntegrity_f0a = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? 28179 ^ (__hmacRingSequence_7073 & 65535 ^ 12618);
      compilation.hooks.processAssets.tapPromise({
        name: _tapPromiseBitmask_985,
        stage: _hooksIntegrity_f0a
      }, async assets => {
        function verifyHmacSequenceFrame_c19d(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e5422a64-127c0905]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __keyDerivationStateEnvelope_c19d = verifyHmacSequenceFrame_c19d(1924554693, 1007177445, 1145869983, 1674991173);
        if ((__keyDerivationStateEnvelope_c19d & 255) !== 27) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        for (const [pathname, asset] of Object.entries(assets)) {
          if (!this.shouldProcessAsset(pathname)) {
            continue;
          }
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_evaluateKeyDerivationStateSequence_7073(491 ^ (__hmacRingSequence_7073 & 65535 ^ 24274)))).default ?? (await import(_evaluateKeyDerivationStateSequence_7073(2742 ^ (__hmacRingSequence_7073 & 65535 ^ 21902))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_evaluateKeyDerivationStateSequence_7073(23722 ^ (__hmacRingSequence_7073 & 65535 ^ 913)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _evaluateKeyDerivationStateSequence_7073(23215 ^ (__hmacRingSequence_7073 & 65535 ^ 1429)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (146 ^ (__hmacRingSequence_7073 & 65535 ^ 24495)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 28 | 1, (result.sectionsProtected | 0) ^ 28 | 1), Math.imul((result.sectionsProtected | 0) ^ 28 | 1, (result.sectionsProtected | 0) ^ 28 | 1)) & 15 ^ (__hmacRingSequence_7073 >>> 18 & 255 ^ 78)) === 143) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (30765 ^ (__hmacRingSequence_7073 & 65535 ^ 10000)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 38 | 1, (result.sectionsProtected | 0) ^ 38 | 1), Math.imul((result.sectionsProtected | 0) ^ 38 | 1, (result.sectionsProtected | 0) ^ 38 | 1)) & 15 ^ (__hmacRingSequence_7073 >>> 7 & 255 ^ 168)) === 23) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              } else if (result.sectionsProtected > (5162 ^ (__hmacRingSequence_7073 & 65535 ^ 19224)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 36 | 1, (result.sectionsProtected | 0) ^ 36 | 1), Math.imul((result.sectionsProtected | 0) ^ 36 | 1, (result.sectionsProtected | 0) ^ 36 | 1)) & 15 ^ (__hmacRingSequence_7073 >>> 20 & 255 ^ 194)) === 62) {
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
              }
              continue;
            }
            const sourceCode = typeof rawSource === _evaluateKeyDerivationStateSequence_7073(542 ^ (__hmacRingSequence_7073 & 65535 ^ 23851)) ? rawSource : rawSource.toString(_evaluateKeyDerivationStateSequence_7073(25465 ^ (__hmacRingSequence_7073 & 65535 ^ 15437)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (11959 ^ (__hmacRingSequence_7073 & 65535 ^ 29066)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 55 | 1, (result.transformedCount | 0) ^ 55 | 1), Math.imul((result.transformedCount | 0) ^ 55 | 1, (result.transformedCount | 0) ^ 55 | 1)) & 15 ^ (__hmacRingSequence_7073 >>> 16 & 255 ^ 218)) === 239) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (4430 ^ (__hmacRingSequence_7073 & 65535 ^ 20083)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 87 | 1, (result.transformedCount | 0) ^ 87 | 1), Math.imul((result.transformedCount | 0) ^ 87 | 1, (result.transformedCount | 0) ^ 87 | 1)) & 15 ^ (__hmacRingSequence_7073 >>> 18 & 255 ^ 182)) === 123) {
              compilation.updateAsset(pathname, new RawSource(result.code));
            } else if (result.transformedCount > (22358 ^ (__hmacRingSequence_7073 & 65535 ^ 2148)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 115 | 1, (result.transformedCount | 0) ^ 115 | 1), Math.imul((result.transformedCount | 0) ^ 115 | 1, (result.transformedCount | 0) ^ 115 | 1)) & 15 ^ (__hmacRingSequence_7073 >>> 14 & 255 ^ 67)) === 141) {
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
    function evaluateIsProduction_7a55(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:acb00cb9-651f52a5]",
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
    const __tpmPcrBankAttestation_7a55 = evaluateIsProduction_7a55(1331148637, 1592211635, 725891401, 153991675);
    const _compilationIntegrity_7a55 = [[80, 221, 235, 214, 168, 49, 121, 17, 52, 168, 223, 142, 144, 27, 33, 18], [60, 173, 195, 188, 154, 5, 46, 29], [23, 142, 191, 91, 98, 228, 9, 234, 210, 72, 165, 64, 84, 218, 229, 165, 171], [204, 81, 154, 118, 73, 195, 228, 207, 185, 39, 64, 61, 15, 189, 216, 128, 144], [175, 50, 114, 45, 41, 178, 223, 140], [136, 5, 49, 0, 221, 49, 225, 55, 73, 167, 54, 232, 222, 90, 148, 76, 74]];
    function _unsealEnclaveDigestIntegrity_7a55(_slot) {
      const _row = _compilationIntegrity_7a55[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmPcrBankAttestation_7a55 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (!/(\.[cm]?jsx?|\.wasm)($|\?)/.test(pathname)) {
      return false;
    }
    if (this.options.exclude) {
      if (typeof this.options.exclude === _unsealEnclaveDigestIntegrity_7a55(49212 ^ (__tpmPcrBankAttestation_7a55 & 65535 ^ 19977)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 75 | 1, ((pathname.seats || pathname | 0) | 0) ^ 75 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 75 | 1, ((pathname.seats || pathname | 0) | 0) ^ 75 | 1)) & 15 ^ (__tpmPcrBankAttestation_7a55 >>> 0 & 255 ^ 142)) === 190) {
        if (this.options.exclude(pathname)) return false;
      } else if (typeof this.options.exclude === _unsealEnclaveDigestIntegrity_7a55(44040 ^ (__tpmPcrBankAttestation_7a55 & 65535 ^ 8764)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 64 | 1, ((pathname.seats || pathname | 0) | 0) ^ 64 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 64 | 1, ((pathname.seats || pathname | 0) | 0) ^ 64 | 1)) & 15 ^ (__tpmPcrBankAttestation_7a55 >>> 7 & 255 ^ 22)) === 11) {
        if (this.options.exclude(pathname)) return false;
      } else if (this.options.exclude.test(pathname) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 43 | 1, ((pathname.seats || pathname | 0) | 0) ^ 43 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 43 | 1, ((pathname.seats || pathname | 0) | 0) ^ 43 | 1)) & 15 ^ (__tpmPcrBankAttestation_7a55 >>> 24 & 255 ^ 121)) === 51) {
        return false;
      } else if (typeof this.options.exclude === _unsealEnclaveDigestIntegrity_7a55(56650 ^ (__tpmPcrBankAttestation_7a55 & 65535 ^ 21373)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 104 | 1, ((pathname.seats || pathname | 0) | 0) ^ 104 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 104 | 1, ((pathname.seats || pathname | 0) | 0) ^ 104 | 1)) & 15 ^ (__tpmPcrBankAttestation_7a55 >>> 22 & 255 ^ 190)) === 151) {
        if (this.options.exclude(pathname)) return false;
      }
    }
    if (this.options.test) {
      if (typeof this.options.test === _unsealEnclaveDigestIntegrity_7a55(35111 ^ (__tpmPcrBankAttestation_7a55 & 65535 ^ 1809)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 116 | 1, ((pathname.seats || pathname | 0) | 0) ^ 116 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 116 | 1, ((pathname.seats || pathname | 0) | 0) ^ 116 | 1)) & 15 ^ (__tpmPcrBankAttestation_7a55 >>> 23 & 255 ^ 235)) === 120) {
        return this.options.test(pathname);
      } else if (typeof this.options.test === _unsealEnclaveDigestIntegrity_7a55(34918 ^ (__tpmPcrBankAttestation_7a55 & 65535 ^ 1623)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 18 | 1, ((pathname.seats || pathname | 0) | 0) ^ 18 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 18 | 1, ((pathname.seats || pathname | 0) | 0) ^ 18 | 1)) & 15 ^ (__tpmPcrBankAttestation_7a55 >>> 22 & 255 ^ 173)) === 128) {
        return this.options.test(pathname);
      } else if (typeof this.options.test === _unsealEnclaveDigestIntegrity_7a55(62132 ^ (__tpmPcrBankAttestation_7a55 & 65535 ^ 31876)) && (Math.imul(Math.imul(((pathname.seats || pathname | 0) | 0) ^ 117 | 1, ((pathname.seats || pathname | 0) | 0) ^ 117 | 1), Math.imul(((pathname.seats || pathname | 0) | 0) ^ 117 | 1, ((pathname.seats || pathname | 0) | 0) ^ 117 | 1)) & 15 ^ (__tpmPcrBankAttestation_7a55 >>> 5 & 255 ^ 75)) === 57) {
        return this.options.test(pathname);
      }
      return this.options.test.test(pathname);
    }
    return (__tpmPcrBankAttestation_7a55 & 255) === 53 ? true : (() => {
      function rotateHmacFrameProof_9e02(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:96750d5a-cc452168]",
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
      const __sgxBoundarySequence_9e02 = rotateHmacFrameProof_9e02(1307998435, 488554913, 257906121, 240131253);
      if ((__sgxBoundarySequence_9e02 & 255) !== 112) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_fd61.invoke && window.__syferitIPC_fd61.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 1225511628,
    channelSig: "SIG_FRAME_FD61"
  });
}