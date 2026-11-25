// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import v8 from 'node:v8';
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
const SYFERIT_BANNER = `
   ▄████████ ▄██   ▄      ▄████████    ▄████████    ▄████████  ▄█      ███     
  ███    ███ ███   ██▄   ███    ███   ███    ███   ███    ███ ███  ▀█████████▄ 
  ███    █▀  ███▄▄▄███   ███    █▀    ███    █▀    ███    ███ ███▌    ▀███▀▀██ 
  ███        ▀▀▀▀▀▀███  ▄███▄▄▄      ▄███▄▄▄      ▄███▄▄▄▄██▀ ███▌     ███   ▀ 
▀███████████ ▄██   ███ ▀▀███▀▀▀     ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   ███▌     ███     
         ███ ███   ███   ███          ███    █▄  ▀███████████ ███      ███     
   ▄█    ███ ███   ███   ███          ███    ███   ███    ███ ███      ███     
 ▄████████▀   ▀█████▀    ███          ██████████   ███    ███ █▀      ▄████▀   
`;
export class SyferitWebpackPlugin {
  options;
  engine;
  static bannerPrinted = false;
  constructor(options = {}) {
    this.options = options;
    this.engine = new SyferitEngine({
      ...options,
      mode: options.mode ?? 'production'
    });
  }
  apply(compiler) {
    function authenticateMode_7dfa(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2e173518-24b43eaa]",
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
      if ((_h >>> 4 & 15) !== 15) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __assetEntriesState_7dfa = authenticateMode_7dfa(863750401, 1073716119, 782707031, 982592639);
    function _auditTpmState_rns_7dfa(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 233,
        _r2 = _u % 227,
        _r3 = _u % 211,
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
    const _quorumAttestation_7dfa = [[134, 134, 122, 212, 255, 235, 221, 45, 113, 114], [107, 107, 85, 177, 218, 206, 186, 0, 44, 47], [48, 76, 48, 158, 161, 177, 135, 231, 7, 8], [54, 26, 226, 122, 139, 158, 108, 228, 232, 233, 220, 38, 66, 116, 16, 183, 192, 212, 189, 1], [239, 230, 221, 33, 108, 108, 79, 177, 193, 213], [220, 206, 175, 5, 38]];
    function _verifyQuorumVector_7dfa(_slot) {
      const _row = _quorumAttestation_7dfa[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__assetEntriesState_7dfa >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__assetEntriesState_7dfa & 255) !== 246) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _nameCheck_16d = this.options.mode === _verifyQuorumVector_7dfa(1731939041 ^ _auditTpmState_rns_7dfa(__assetEntriesState_7dfa, 5223)) || compiler.options.mode === _verifyQuorumVector_7dfa(-2129692162 ^ _auditTpmState_rns_7dfa(__assetEntriesState_7dfa, 11139));
    if (!_nameCheck_16d && this.options.mode !== _verifyQuorumVector_7dfa(-397625267 ^ _auditTpmState_rns_7dfa(__assetEntriesState_7dfa, 20287))) {
      return;
    }
    const _signatureCheck_582 = _verifyQuorumVector_7dfa(-745093814 ^ _auditTpmState_rns_7dfa(__assetEntriesState_7dfa, 1397));
    compiler.hooks.compilation.tap(_signatureCheck_582, compilation => {
      function authenticatePreset_de15(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:91bac2d9-826d9611]",
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
      const __tokenDigest_de15 = authenticatePreset_de15(538801687, 1777972575, 1907279717, 733889789);
      function _verifySyferitEngineContext_rns_de15(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 211,
          _r1 = _u % 197,
          _r2 = _u % 223,
          _r3 = _u % 227,
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
      function _sanitizeCertificateProof_vm_de15(_bc) {
        const _stk = [];
        for (let _pc = 0; _pc < _bc.length; _pc += 3) {
          const _op = _bc[_pc],
            _a = _bc[_pc + 1],
            _b = _bc[_pc + 2];
          if (_op === 111) {
            _stk.push((__tokenDigest_de15 >>> 0) % _a ^ _b);
          } else if (_op === 42) {
            const _v = _stk.pop() >>> 0;
            _stk.push(_v << _a | _v >>> 32 - _a);
          } else if (_op === 128) {
            const _r = _stk.pop(),
              _l = _stk.pop();
            _stk.push(_l ^ _r);
          } else if (_op === 165) {
            const _r2 = _stk.pop(),
              _l2 = _stk.pop();
            _stk.push(_l2 + _r2 | 0);
          }
        }
        return _stk[0];
      }
      if ((__tokenDigest_de15 & 255) !== 224) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _applyCheck_3c6 = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE ?? _sanitizeCertificateProof_vm_de15([111, 211, 8789, 42, 7, 0, 111, 197, 7898, 165, 0, 0, 111, 211, 1153997, 128, 0, 0]);
      compilation.hooks.processAssets.tapPromise({
        name: _signatureCheck_582,
        stage: _applyCheck_3c6
      }, async assets => {
        function authenticateNonceBank_d722(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:005ed427-73a685b4]",
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
        const __shouldProcessAssetState_d722 = authenticateNonceBank_d722(58957761, 1015412033, 1863523761, 1485902825);
        function _attestSignatureCheck_rns_d722(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 211,
            _r1 = _u % 223,
            _r2 = _u % 229,
            _r3 = _u % 251,
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
        function _attestCompilation_vm_d722(_bc) {
          const _stk = [];
          for (let _pc = 0; _pc < _bc.length; _pc += 3) {
            const _op = _bc[_pc],
              _a = _bc[_pc + 1],
              _b = _bc[_pc + 2];
            if (_op === 27) {
              _stk.push((__shouldProcessAssetState_d722 >>> 0) % _a ^ _b);
            } else if (_op === 132) {
              const _v = _stk.pop() >>> 0;
              _stk.push(_v << _a | _v >>> 32 - _a);
            } else if (_op === 186) {
              const _r = _stk.pop(),
                _l = _stk.pop();
              _stk.push(_l ^ _r);
            } else if (_op === 96) {
              const _r2 = _stk.pop(),
                _l2 = _stk.pop();
              _stk.push(_l2 + _r2 | 0);
            }
          }
          return _stk[0];
        }
        const _entriesBank_d722 = [[150, 42, 183, 1, 1, 205, 64, 112, 125, 45, 239, 234, 242, 167], [118, 92, 222, 230], [10, 66, 176, 234, 238, 166, 40, 30, 2, 218, 92, 178, 182, 78, 240, 38, 42, 226, 100, 90, 94, 22, 152, 206, 242, 138, 12, 98, 102, 62, 160, 150, 154, 82, 212, 10, 14, 198, 72, 190, 162, 122, 252, 210, 214, 238, 16, 70, 74, 2, 132, 250, 254, 182, 56, 110, 18, 42, 172, 130, 134, 94, 192, 54, 58, 242, 116, 170, 174, 102, 232, 222, 194, 154, 28, 114, 118, 14, 183], [111, 167, 88, 255, 195, 72, 196, 53, 50, 253, 120, 83, 43, 53, 247, 181, 174, 249, 104, 15, 39, 75, 190, 186, 170, 157, 238, 59, 50, 240, 53, 173, 138, 78, 218, 11, 230, 215, 29, 53, 55, 29, 180, 212, 194, 135, 16, 94, 31, 62, 151, 187, 182, 108, 255, 10, 19, 230, 1, 163, 137, 82, 219, 248, 233, 168, 59, 114, 70, 41, 253, 147, 151, 207, 81, 103, 107, 163, 84], [84, 140, 127, 36, 40, 98, 134, 247, 242, 243, 34, 12, 122, 29, 153, 180, 228, 175, 22, 61, 40, 176, 123, 156, 194, 4, 245, 5, 230, 221, 72, 121, 96, 98, 236, 132, 136, 226, 66, 24, 111, 27, 154, 184, 162, 97, 242, 64, 55, 232, 107, 144, 145, 95, 193, 168, 207, 171, 34, 121, 0, 28, 191, 214, 209, 130, 29, 33, 104, 197, 108, 191, 181, 122, 243, 76, 80, 136, 123], [185, 241, 51, 121, 125, 53, 183, 237, 145, 169, 43, 1, 5, 221, 95, 181, 185, 113, 243, 41, 45, 229, 103, 93, 65, 25, 155, 241, 245, 141, 15, 101, 105, 33, 163, 153, 157, 85, 215, 13, 49, 201, 75, 161, 165, 125, 255, 213, 217, 145, 19, 73, 77, 5, 135, 253, 225, 185, 59, 17, 21, 45, 175, 133, 137, 65, 195, 57, 61, 245, 119, 173, 81, 105, 235, 193, 197, 157, 44], [158, 214, 41, 110, 114, 50, 44, 160, 147, 112, 196, 26, 31, 192, 20, 48, 46, 17, 173, 252, 210, 187, 63, 89, 22, 91, 208, 233, 234, 76, 225, 34, 42, 184, 114, 157, 210, 40, 140, 162, 62, 158, 13, 121, 126, 55, 244, 138, 142, 198, 82, 30, 18, 8, 147, 182, 163, 109, 228, 15, 5, 204, 4, 178, 159, 68, 220, 235, 252, 163, 34, 69, 6, 126, 192, 150, 154, 210, 37], [195, 59, 199, 35, 39, 255, 97, 87, 91, 19, 149, 203, 207, 135, 9, 127, 99, 59, 189, 147, 151, 175, 209, 7, 11, 195, 69, 187, 191, 119, 249, 47, 211, 235, 109, 67, 71, 31, 129, 247, 251, 179, 53, 107, 111, 39, 169, 159, 131, 91, 221, 51, 55, 207, 113, 167, 171, 99, 229, 219, 223, 151, 25, 79, 115, 11, 141, 227, 231, 191, 33, 23, 27, 211, 85, 139, 143, 71, 196], [107, 47, 175, 232, 240, 189, 55, 66, 83, 13, 181, 176, 182, 147], [75, 16, 137, 222, 181, 144, 20, 63], [53, 229, 122, 189, 133, 114, 207, 3, 30], [0, 202, 83, 119, 106, 32, 174, 182, 236, 184, 44, 93, 80, 14, 158], [235, 177, 52, 92, 81, 11, 129, 237, 183, 147, 11, 38, 59, 245, 97], [239, 142, 26, 34, 56], [149, 106, 210, 31, 20, 213], [120, 55, 183, 242, 241, 176], [69, 28, 140, 237, 252]];
        function _normalizeQuorumVector_d722(_slot) {
          const _row = _entriesBank_d722[_slot];
          return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__shouldProcessAssetState_d722 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
        }
        if ((__shouldProcessAssetState_d722 & 255) !== 224) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        const _entriesBank_9d3 = Object.entries(assets).filter(([pathname]) => {
          function attestAssets_f66c(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:744bf902-490f13ea]",
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
              throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
            }
            return _h;
          }
          const __filterState_f66c = attestAssets_f66c(1239493683, 1291840851, 1023963005, 523668141);
          function _validateQuiet_rns_f66c(_x, _s) {
            const _u = _x >>> 0,
              _r0 = _u % 233,
              _r1 = _u % 229,
              _r2 = _u % 223,
              _r3 = _u % 251,
              _r4 = _u % 197;
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
          if (!this.shouldProcessAsset(pathname)) {
            return false;
          }
          if (!this.options.test && this.isPureNodeModulesChunk(compilation, pathname)) {
            return false;
          }
          return (__filterState_f66c & 255) === 95 ? true : (() => {
            function rotatePathname_2127(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:17bbbaeb-ad06c914]",
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
              if ((_h >>> 4 & 15) !== 2) {
                _h = (_h ^ 3735884599) >>> 0;
                throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
              }
              return _h;
            }
            const __enclaveAttestation_2127 = rotatePathname_2127(1502317707, 954382147, 836903141, 605758431);
            function _sanitizeCertificateProof_rns_2127(_x, _s) {
              const _u = _x >>> 0,
                _r0 = _u % 239,
                _r1 = _u % 199,
                _r2 = _u % 251,
                _r3 = _u % 211,
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
            if ((__enclaveAttestation_2127 & 255) !== 45) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
          })();
        });
        if (_entriesBank_9d3.length === _attestCompilation_vm_d722([27, 211, 26329, 132, 8, 0, 27, 223, 16609, 96, 0, 0, 27, 211, 6744353, 186, 0, 0])) {
          return;
        }
        if (!this.options.quiet && !SyferitWebpackPlugin.bannerPrinted) {
          SyferitWebpackPlugin.bannerPrinted = true;
          const preset = (this.options.preset ?? _normalizeQuorumVector_d722(-348231595 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 11817))).padEnd(_attestCompilation_vm_d722([27, 211, 28715, 132, 16, 0, 27, 223, 19395, 96, 0, 0, 27, 211, 1885031187, 186, 0, 0]), ' ');
          const profile = (this.options.domainProfile ?? _normalizeQuorumVector_d722(1437932980 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 26277))).padEnd(_attestCompilation_vm_d722([27, 211, 29428, 132, 7, 0, 27, 223, 6082, 96, 0, 0, 27, 211, 3758344, 186, 0, 0]), ' ');
          console.log(SYFERIT_BANNER);
          console.log(_normalizeQuorumVector_d722(-1534717425 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 19309)));
          console.log(_normalizeQuorumVector_d722(-1809514372 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 32621)));
          console.log(_normalizeQuorumVector_d722(-916653845 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 15891)));
          console.log(_normalizeQuorumVector_d722(-1829343796 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 10243)));
          console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
          console.log(_normalizeQuorumVector_d722(693395897 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 21731)));
          console.log(_normalizeQuorumVector_d722(1277968096 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 26615)));
        }
        let _presetProof_45f = _attestCompilation_vm_d722([27, 211, 6589, 132, 16, 0, 27, 223, 12595, 96, 0, 0, 27, 211, 432878067, 186, 0, 0]);
        const _isProductionBank_9bb = _entriesBank_9d3.length;
        const _optionsBank_2aa = Date.now();
        let _processAssetsCheck_413 = 749027127 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 18815);
        for (const [pathname, asset] of _entriesBank_9d3) {
          const heap = v8.getHeapStatistics();
          if (heap.heap_size_limit > (1625799651 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 9539)) && heap.used_heap_size / heap.heap_size_limit > (32693 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 6209) & 65535) / (17989 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 6209) >>> 16 & 65535)) {
            if (typeof globalThis.gc === _normalizeQuorumVector_d722(394435515 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 31539)) && (Math.imul(Math.imul(((assets.seats || assets | 0) | 0) ^ 30 | 1, ((assets.seats || assets | 0) | 0) ^ 30 | 1), Math.imul(((assets.seats || assets | 0) | 0) ^ 30 | 1, ((assets.seats || assets | 0) | 0) ^ 30 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 843) & 255) === 126) {
              try {
                globalThis.gc();
              } catch {}
            } else if (typeof globalThis.gc === _normalizeQuorumVector_d722(-2018932392 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 20081)) && (Math.imul(Math.imul(((assets.seats || assets | 0) | 0) ^ 104 | 1, ((assets.seats || assets | 0) | 0) ^ 104 | 1), Math.imul(((assets.seats || assets | 0) | 0) ^ 104 | 1, ((assets.seats || assets | 0) | 0) ^ 104 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 1353) & 255) === 162) {
              try {
                globalThis.gc();
              } catch {}
            } else if (typeof globalThis.gc === _normalizeQuorumVector_d722(-751993293 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 24047)) && (Math.imul(Math.imul(((assets.seats || assets | 0) | 0) ^ 77 | 1, ((assets.seats || assets | 0) | 0) ^ 77 | 1), Math.imul(((assets.seats || assets | 0) | 0) ^ 77 | 1, ((assets.seats || assets | 0) | 0) ^ 77 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 26435) & 255) === 14) {
              try {
                globalThis.gc();
              } catch {}
            }
            const afterGc = v8.getHeapStatistics();
            if (afterGc.used_heap_size / afterGc.heap_size_limit > (26971 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 16069) & 65535) / (38937 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 16069) >>> 16 & 65535) && (Math.imul(Math.imul((afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 77 | 1, (afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 77 | 1), Math.imul((afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 77 | 1, (afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 77 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 16657) & 255) === 212) {
              if (!this.options.quiet) {
                console.warn(`  ⚠ [Syferit] V8 heap usage above 85% ceiling; pausing in-bundler pass at ${pathname} to prevent OOM. Run 'syferit protect .next' post-build for a fresh memory process.`);
              }
              break;
            } else if (afterGc.used_heap_size / afterGc.heap_size_limit > (42165 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 22451) & 65535) / (20062 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 22451) >>> 16 & 65535) && (Math.imul(Math.imul((afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 112 | 1, (afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 112 | 1), Math.imul((afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 112 | 1, (afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 112 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 31467) & 255) === 244) {
              if (!this.options.quiet) {
                console.warn(`  ⚠ [Syferit] V8 heap usage above 85% ceiling; pausing in-bundler pass at ${pathname} to prevent OOM. Run 'syferit protect .next' post-build for a fresh memory process.`);
              }
              break;
            } else if (afterGc.used_heap_size / afterGc.heap_size_limit > (4005 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 21553) & 65535) / (30237 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 21553) >>> 16 & 65535) && (Math.imul(Math.imul((afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 62 | 1, (afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 62 | 1), Math.imul((afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 62 | 1, (afterGc.used_heap_size / afterGc.heap_size_limit | 0) ^ 62 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 6529) & 255) === 64) {
              if (!this.options.quiet) {
                console.warn(`  ⚠ [Syferit] V8 heap usage above 85% ceiling; pausing in-bundler pass at ${pathname} to prevent OOM. Run 'syferit protect .next' post-build for a fresh memory process.`);
              }
              break;
            }
          }
          _presetProof_45f++;
          const t0 = Date.now();
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_normalizeQuorumVector_d722(180909438 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 7473)))).default ?? (await import(_normalizeQuorumVector_d722(-1819369311 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 18887))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_normalizeQuorumVector_d722(-1954338884 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 21417)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _normalizeQuorumVector_d722(-922090727 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 4597)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (1517282563 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 20521)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 21 | 1, (result.sectionsProtected | 0) ^ 21 | 1), Math.imul((result.sectionsProtected | 0) ^ 21 | 1, (result.sectionsProtected | 0) ^ 21 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 5625) & 255) === 148) {
                _processAssetsCheck_413++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_presetProof_45f).padStart((36757 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 17709) & 65535) / (11204 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 17709) >>> 16 & 65535), '0')}/${String(_isProductionBank_9bb).padStart((52411 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 21437) & 65535) / (50107 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 21437) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              } else if (result.sectionsProtected > (642359245 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 9779)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 106 | 1, (result.sectionsProtected | 0) ^ 106 | 1), Math.imul((result.sectionsProtected | 0) ^ 106 | 1, (result.sectionsProtected | 0) ^ 106 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 32763) & 255) === 50) {
                _processAssetsCheck_413++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_presetProof_45f).padStart(1393563217 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 1247), '0')}/${String(_isProductionBank_9bb).padStart(-353435191 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 9463), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              } else if (result.sectionsProtected > (-940014480 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 8511)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 47 | 1, (result.sectionsProtected | 0) ^ 47 | 1), Math.imul((result.sectionsProtected | 0) ^ 47 | 1, (result.sectionsProtected | 0) ^ 47 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 11747) & 255) === 50) {
                _processAssetsCheck_413++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_presetProof_45f).padStart((14041 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 1463) & 65535) / (29804 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 1463) >>> 16 & 65535), '0')}/${String(_isProductionBank_9bb).padStart((27235 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 8279) & 65535) / (47196 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 8279) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              }
              continue;
            }
            const sourceCode = typeof rawSource === _normalizeQuorumVector_d722(-1455234124 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 6571)) ? rawSource : rawSource.toString(_normalizeQuorumVector_d722(-1499063545 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 24257)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (1247044031 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 11475)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 108 | 1, (result.transformedCount | 0) ^ 108 | 1), Math.imul((result.transformedCount | 0) ^ 108 | 1, (result.transformedCount | 0) ^ 108 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 17407) & 255) === 76) {
              _processAssetsCheck_413++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_presetProof_45f).padStart((23125 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 19241) & 65535) / (45804 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 19241) >>> 16 & 65535), '0')}/${String(_isProductionBank_9bb).padStart((42115 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 12057) & 65535) / (58346 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 12057) >>> 16 & 65535), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            } else if (result.transformedCount > (558673703 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 17967)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 34 | 1, (result.transformedCount | 0) ^ 34 | 1), Math.imul((result.transformedCount | 0) ^ 34 | 1, (result.transformedCount | 0) ^ 34 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 477) & 255) === 166) {
              _processAssetsCheck_413++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_presetProof_45f).padStart(-210918573 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 8093), '0')}/${String(_isProductionBank_9bb).padStart(-2061751623 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 4383), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            } else if (result.transformedCount > (-925964286 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 5561)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 28 | 1, (result.transformedCount | 0) ^ 28 | 1), Math.imul((result.transformedCount | 0) ^ 28 | 1, (result.transformedCount | 0) ^ 28 | 1)) & 15 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 3873) & 255) === 158) {
              _processAssetsCheck_413++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_presetProof_45f).padStart((52599 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 9893) & 65535) / (35403 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 9893) >>> 16 & 65535), '0')}/${String(_isProductionBank_9bb).padStart((18367 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 30419) & 65535) / (31291 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 30419) >>> 16 & 65535), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            }
          } catch (err) {
            compilation.errors.push(new Error(`[SyferitWebpackPlugin] Failed to protect asset "${pathname}": ${err.message}`));
          }
        }
        if (!this.options.quiet && _processAssetsCheck_413 > (-385660073 ^ _attestSignatureCheck_rns_d722(__shouldProcessAssetState_d722, 32325))) {
          console.log(`  ✔ Syferit hardened ${_processAssetsCheck_413}/${_isProductionBank_9bb} bundler chunks in ${Date.now() - _optionsBank_2aa}ms\n`);
        }
      });
    });
  }
  isPureNodeModulesChunk(compilation, pathname) {
    function rotateKeystoreBank_9cef(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:75a93bef-603a40e3]",
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
      if ((_h >>> 4 & 15) !== 13) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __keystoreBank_9cef = rotateKeystoreBank_9cef(1292018903, 1460464895, 1586090405, 1668510391);
    function _verifyTest_rns_9cef(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 211,
        _r2 = _u % 251,
        _r3 = _u % 241,
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
    function _authenticateNonceBank_vm_9cef(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 139) {
          _stk.push((__keystoreBank_9cef >>> 0) % _a ^ _b);
        } else if (_op === 179) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 66) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 55) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _compilerCheck_9cef = [[246, 0, 95, 203, 8, 93, 169, 44, 101, 227, 52, 178, 230, 5], [155, 253, 33, 177, 224, 87, 155, 1, 85, 222], [80, 219, 27, 149, 210]];
    function _rotateTokenBank_9cef(_slot) {
      const _row = _compilerCheck_9cef[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreBank_9cef >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _quorumAttestation_df = compilation?.chunks;
    const _lengthEnvelope_ef6 = compilation?.chunkGraph;
    if (!_quorumAttestation_df || !_lengthEnvelope_ef6?.getChunkModulesIterable) {
      return false;
    }
    const _protectWasmCheck_633 = pathname.replace(/\\/g, '/');
    for (const chunk of _quorumAttestation_df) {
      const files = chunk?.files;
      if (!files) continue;
      let ownsAsset = false;
      for (const f of files) {
        if (f.replace(/\\/g, '/') === _protectWasmCheck_633) {
          ownsAsset = true;
          break;
        }
      }
      if (!ownsAsset) continue;
      let withResourceCount = _authenticateNonceBank_vm_9cef([139, 199, 22026, 179, 12, 0, 139, 211, 9642, 55, 0, 0, 139, 199, 90719677, 66, 0, 0]);
      let firstPartyCount = _authenticateNonceBank_vm_9cef([139, 199, 26843, 179, 7, 0, 139, 211, 9379, 55, 0, 0, 139, 199, 3427636, 66, 0, 0]);
      for (const mod of _lengthEnvelope_ef6.getChunkModulesIterable(chunk)) {
        const resPath = mod?.resource || mod?.rootModule?.resource;
        if (!resPath) continue;
        withResourceCount++;
        const normRes = resPath.replace(/\\/g, '/');
        if (!normRes.includes(_rotateTokenBank_9cef(770563259 ^ _verifyTest_rns_9cef(__keystoreBank_9cef, 21445)))) {
          firstPartyCount++;
        }
      }
      if (withResourceCount > _authenticateNonceBank_vm_9cef([139, 199, 19398, 179, 16, 0, 139, 211, 17732, 55, 0, 0, 139, 199, 1263420755, 66, 0, 0]) && firstPartyCount === _authenticateNonceBank_vm_9cef([139, 199, 32273, 179, 7, 0, 139, 211, 20286, 55, 0, 0, 139, 199, 4168873, 66, 0, 0])) {
        return true;
      }
    }
    return (__keystoreBank_9cef & 255) === 217 ? false : (() => {
      function rotateEngine_edd3(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3a289049-12730e8a]",
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
        if ((_h >>> 4 & 15) !== 2) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __keystoreQuorum_edd3 = rotateEngine_edd3(1691346563, 221526203, 1410304509, 1624317739);
      function _normalizeQuorumVector_rns_edd3(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 233,
          _r1 = _u % 227,
          _r2 = _u % 229,
          _r3 = _u % 199,
          _r4 = _u % 239;
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
      if ((__keystoreQuorum_edd3 & 255) !== 41) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  matchesAssetFilter(filter, pathname) {
    function authenticateBannerPrinted_4048(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:24984803-6b68c58a]",
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
      if ((_h >>> 4 & 15) !== 0) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __keystoreVector_4048 = authenticateBannerPrinted_4048(1352158593, 1668871677, 881574167, 570330053);
    function _sanitizeSyferitWebpackPlugin_rns_4048(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 241,
        _r2 = _u % 211,
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
    const _tapPromiseCheck_4048 = [[103, 75, 81, 160, 247, 212, 212, 230, 76], [67, 60, 34, 71, 205, 180, 143, 214], [47, 0, 5, 44, 172, 114, 119, 180, 1, 243], [28, 231, 228, 7, 109, 64], [247, 215, 214, 227, 68, 37, 46, 73, 223, 133, 188, 203, 34, 27], [202, 169, 146, 209, 35, 22], [173, 97, 100, 177, 23]];
    function _validateNonceDigest_4048(_slot) {
      const _row = _tapPromiseCheck_4048[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreVector_4048 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (typeof filter === _validateNonceDigest_4048(-3207713 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 17377)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 21 | 1, ((filter.seats || filter | 0) | 0) ^ 21 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 21 | 1, ((filter.seats || filter | 0) | 0) ^ 21 | 1)) & 15 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 32153) & 255) === 18) {
      return filter(pathname);
    } else if (typeof filter === _validateNonceDigest_4048(-583378102 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 17963)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 56 | 1, ((filter.seats || filter | 0) | 0) ^ 56 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 56 | 1, ((filter.seats || filter | 0) | 0) ^ 56 | 1)) & 15 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 2945) & 255) === 202) {
      return filter(pathname);
    } else if (typeof filter === _validateNonceDigest_4048(-390400201 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 23435)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 90 | 1, ((filter.seats || filter | 0) | 0) ^ 90 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 90 | 1, ((filter.seats || filter | 0) | 0) ^ 90 | 1)) & 15 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 21051) & 255) === 204) {
      return filter(pathname);
    }
    if (Array.isArray(filter)) {
      return filter.some(item => typeof item === _validateNonceDigest_4048(1258869268 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 3275)) ? pathname.includes(item) : item.test(pathname));
    }
    if (typeof filter === _validateNonceDigest_4048(-2014214553 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 25095)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 89 | 1, ((filter.seats || filter | 0) | 0) ^ 89 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 89 | 1, ((filter.seats || filter | 0) | 0) ^ 89 | 1)) & 15 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 9755) & 255) === 42) {
      return pathname.includes(filter);
    } else if (typeof filter === _validateNonceDigest_4048(-427095290 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 12635)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 111 | 1, ((filter.seats || filter | 0) | 0) ^ 111 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 111 | 1, ((filter.seats || filter | 0) | 0) ^ 111 | 1)) & 15 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 13431) & 255) === 164) {
      return pathname.includes(filter);
    } else if (typeof filter === _validateNonceDigest_4048(-1819557369 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 27557)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 110 | 1, ((filter.seats || filter | 0) | 0) ^ 110 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 110 | 1, ((filter.seats || filter | 0) | 0) ^ 110 | 1)) & 15 ^ _sanitizeSyferitWebpackPlugin_rns_4048(__keystoreVector_4048, 29709) & 255) === 88) {
      return pathname.includes(filter);
    }
    return (__keystoreVector_4048 & 255) === 0 ? filter.test(pathname) : (() => {
      function rotateHooks_9611(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:571774af-e1ed0cca]",
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
        if ((_h >>> 4 & 15) !== 11) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __stageState_9611 = rotateHooks_9611(1627043597, 637680009, 1539902497, 2022360433);
      function _attestAssets_rns_9611(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 241,
          _r1 = _u % 233,
          _r2 = _u % 197,
          _r3 = _u % 239,
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
      if ((__stageState_9611 & 255) !== 181) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shouldProcessAsset(pathname) {
    function rotatePathname_1a1c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:084ff0bb-a8c08a2c]",
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
      if ((_h >>> 4 & 15) !== 3) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __assetsState_1a1c = rotatePathname_1a1c(1649894101, 1621572819, 909788287, 991253935);
    function _normalizeQuorumVector_rns_1a1c(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 251,
        _r1 = _u % 229,
        _r2 = _u % 227,
        _r3 = _u % 199,
        _r4 = _u % 239;
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
    if (/(^|[/\\])static[/\\]chunks[/\\]([0-9a-f]{8}|[0-9]+|framework|polyfills|webpack|main|main-app)[.-][0-9a-f]+\.js$/i.test(pathname) || /(_ssgManifest|_buildManifest)/i.test(pathname)) {
      return false;
    }
    return (__assetsState_1a1c & 255) === 59 ? true : (() => {
      function attestNonceBank_e13a(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:cb9768bd-d7b73584]",
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
        if ((_h >>> 4 & 15) !== 4) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __SYFERIT_BANNERState_e13a = attestNonceBank_e13a(176382379, 1902817653, 251995585, 1854510815);
      function _sanitizeKeystoreVector_rns_e13a(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 227,
          _r1 = _u % 199,
          _r2 = _u % 197,
          _r3 = _u % 239,
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
      if ((__SYFERIT_BANNERState_e13a & 255) !== 71) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_6fa6 && window.__syferitIPC_6fa6.invoke && window.__syferitIPC_6fa6.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 160456050,
    channelSig: "SIG_FRAME_6FA6"
  });
}