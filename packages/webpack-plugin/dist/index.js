// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
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
    function sanitizeQuorumBank_876b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8159c11c-c322f049]",
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
      if ((_h >>> 4 & 15) !== 9) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __engineState_876b = sanitizeQuorumBank_876b(1196597693, 300565769, 689694549, 537379179);
    function _sanitizeCompilation_rns_876b(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 239,
        _r2 = _u % 211,
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
    function _auditShouldProcessAsset_vm_876b(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 107) {
          _stk.push((__engineState_876b >>> 0) % _a ^ _b);
        } else if (_op === 116) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 173) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 58) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _protectWasmFrame_876b = [[234, 82, 70, 130, 91, 215, 201, 19, 173, 38], [207, 55, 33, 111, 38, 186, 150, 246, 136, 3], [148, 24, 28, 84, 13, 157, 115, 173, 99, 252], [90, 246, 254, 48, 239, 74, 88, 190, 84, 213, 176, 28, 166, 32, 4, 125, 44, 184, 129, 203], [70, 213, 207, 30, 167, 38, 52, 106], [32, 184, 131, 236], [88, 222, 83, 148, 92, 194, 203, 8, 240, 118, 127, 188, 100, 234, 147, 208, 152, 30, 7, 68, 12, 178, 187, 248, 160, 38, 47, 108, 212, 90, 67, 128, 72, 206, 247, 52, 252, 98, 107, 168, 16, 150, 159, 220, 132, 10, 51, 112, 56, 190, 167, 228, 172, 210, 219, 24, 192, 70, 79, 140, 116, 250, 227, 32, 232, 110, 23, 84, 28, 130, 139, 200, 176, 54, 63, 124, 36, 170, 84], [189, 3, 125, 201, 17, 228, 153, 59, 128, 25, 29, 69, 121, 169, 218, 139, 221, 93, 77, 25, 149, 39, 67, 180, 120, 249, 203, 13, 192, 76, 24, 179, 88, 170, 191, 253, 180, 59, 64, 59, 69, 185, 145, 194, 144, 27, 253, 32, 173, 90, 114, 173, 68, 192, 194, 4, 193, 66, 100, 85, 59, 174, 182, 230, 187, 12, 30, 68, 20, 133, 32, 157, 37, 171, 180, 113, 185, 63, 121], [226, 104, 0, 46, 118, 254, 161, 205, 132, 87, 13, 22, 52, 113, 126, 190, 50, 203, 201, 55, 214, 12, 92, 134, 20, 224, 154, 255, 168, 49, 47, 115, 22, 198, 211, 142, 214, 126, 165, 98, 217, 127, 117, 162, 108, 205, 213, 74, 225, 76, 52, 154, 47, 163, 166, 178, 153, 15, 13, 67, 78, 176, 152, 220, 103, 230, 226, 43, 182, 89, 75, 133, 67, 222, 220, 86, 158, 100, 28], [199, 77, 22, 99, 43, 81, 90, 151, 95, 197, 206, 11, 243, 121, 98, 191, 103, 237, 150, 211, 155, 1, 10, 71, 15, 181, 190, 251, 163, 41, 210, 111, 215, 93, 70, 131, 75, 241, 250, 55, 255, 101, 110, 171, 19, 153, 130, 223, 135, 13, 54, 115, 59, 161, 170, 231, 175, 213, 222, 27, 195, 73, 114, 143, 119, 253, 230, 35, 235, 17, 26, 87, 31, 133, 142, 203, 179, 57, 17], [44, 178, 202, 120, 128, 158, 15, 174, 65, 212, 167, 236, 173, 60, 119, 46, 124, 181, 142, 202, 128, 23, 28, 87, 164, 63, 51, 255, 56, 208, 194, 28, 216, 28, 81, 139, 96, 196, 239, 172, 108, 122, 46, 79, 12, 139, 215, 148, 220, 162, 177, 104, 192, 100, 112, 184, 81, 201, 199, 25, 215, 80, 103, 76, 45, 160, 191, 253, 142, 15, 1, 75, 84, 218, 35, 224, 40, 174, 198], [17, 151, 154, 45, 149, 27, 4, 65, 9, 143, 184, 245, 189, 35, 44, 105, 209, 87, 64, 157, 69, 203, 244, 49, 249, 127, 104, 165, 109, 147, 156, 217, 129, 7, 48, 77, 53, 187, 164, 225, 169, 47, 216, 21, 221, 67, 76, 137, 113, 247, 224, 61, 229, 107, 20, 81, 25, 159, 136, 197, 141, 51, 60, 121, 33, 167, 80, 237, 85, 219, 196, 1, 201, 79, 120, 181, 125, 227, 225], [33, 185, 135, 210, 139, 19, 18, 27, 13, 107, 120, 184, 113, 253, 210], [12, 100, 104, 183, 110, 246, 245, 118, 208, 70, 71, 157, 84, 216, 181], [142, 81, 78, 159, 89], [182, 63, 38, 120, 55, 184], [153, 4, 11, 95, 16, 99], [122, 225, 248, 118, 155]];
    function _attestTokenProof_876b(_slot) {
      const _row = _protectWasmFrame_876b[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__engineState_876b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__engineState_876b & 255) !== 154) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _padEndFrame_7d5 = this.options.mode === _attestTokenProof_876b(-621356635 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 14741)) || compiler.options.mode === _attestTokenProof_876b(-149628100 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 17273));
    if (!_padEndFrame_7d5 && this.options.mode !== _attestTokenProof_876b(-1409775003 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 15751))) {
      return;
    }
    const _enclaveReg_197 = _attestTokenProof_876b(-378918164 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 5335));
    compiler.hooks.compilation.tap(_enclaveReg_197, compilation => {
      function auditName_e1d5(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:df7438d3-9771d404]",
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
        if ((_h >>> 4 & 15) !== 9) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __quorumVector_e1d5 = auditName_e1d5(655521085, 1258181899, 1423339197, 408518139);
      function _authenticateProcessAssets_rns_e1d5(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 241,
          _r1 = _u % 239,
          _r2 = _u % 251,
          _r3 = _u % 233,
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
      if ((__quorumVector_e1d5 & 255) !== 159) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _SyferitEngineDelta_841 = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE ?? _auditShouldProcessAsset_vm_876b([107, 223, 8980, 116, 8, 0, 107, 239, 18123, 58, 0, 0, 107, 223, 2365172, 173, 0, 0]);
      compilation.hooks.processAssets.tapPromise({
        name: _enclaveReg_197,
        stage: _SyferitEngineDelta_841
      }, async assets => {
        function verifyStage_50f1(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0d7e450a-8a95d641]",
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
        const __signatureEnvelope_50f1 = verifyStage_50f1(1049639841, 1649672187, 1387409147, 1587331805);
        function _verifySyferitEngineContext_rns_50f1(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 227,
            _r1 = _u % 229,
            _r2 = _u % 223,
            _r3 = _u % 197,
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
        if ((__signatureEnvelope_50f1 & 255) !== 187) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        const _processAssetsCheck_5ee = Object.entries(assets).filter(([pathname]) => this.shouldProcessAsset(pathname));
        if (_processAssetsCheck_5ee.length === _auditShouldProcessAsset_vm_876b([107, 223, 17814, 116, 8, 0, 107, 239, 8191, 58, 0, 0, 107, 223, 4549500, 173, 0, 0])) {
          return;
        }
        if (!this.options.quiet && !SyferitWebpackPlugin.bannerPrinted) {
          SyferitWebpackPlugin.bannerPrinted = true;
          const preset = (this.options.preset ?? _attestTokenProof_876b(820606539 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 6159))).padEnd(_auditShouldProcessAsset_vm_876b([107, 223, 4736, 116, 8, 0, 107, 239, 11128, 58, 0, 0, 107, 223, 1213931, 173, 0, 0]), ' ');
          const profile = (this.options.domainProfile ?? _attestTokenProof_876b(1326612700 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 6771))).padEnd(_auditShouldProcessAsset_vm_876b([107, 223, 25872, 116, 16, 0, 107, 239, 28949, 58, 0, 0, 107, 223, 1707766172, 173, 0, 0]), ' ');
          console.log(SYFERIT_BANNER);
          console.log(_attestTokenProof_876b(2044837753 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 5181)));
          console.log(_attestTokenProof_876b(989211768 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 19853)));
          console.log(_attestTokenProof_876b(-1601429327 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 11745)));
          console.log(_attestTokenProof_876b(-427064422 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 17745)));
          console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
          console.log(_attestTokenProof_876b(937176817 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 18985)));
          console.log(_attestTokenProof_876b(415322300 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 1595)));
        }
        let _assetsDigest_5f7 = -1557750377 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 12887);
        const _ObjectVector_240 = _processAssetsCheck_5ee.length;
        const _nonceProof_d31 = Date.now();
        let _compilerEnvelope_c7a = -238850557 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 8847);
        for (const [pathname, asset] of _processAssetsCheck_5ee) {
          _assetsDigest_5f7++;
          const t0 = Date.now();
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_attestTokenProof_876b(-1962462547 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 7073)))).default ?? (await import(_attestTokenProof_876b(1870254532 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 23539))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_attestTokenProof_876b(1808294525 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 30283)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _attestTokenProof_876b(-1071405334 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 10313)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (1317376083 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 7915)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 98 | 1, (result.sectionsProtected | 0) ^ 98 | 1), Math.imul((result.sectionsProtected | 0) ^ 98 | 1, (result.sectionsProtected | 0) ^ 98 | 1)) & 15 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 24481) & 255) === 226) {
                _compilerEnvelope_c7a++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_assetsDigest_5f7).padStart((40993 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 20479) & 65535) / (37548 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 20479) >>> 16 & 65535), '0')}/${String(_ObjectVector_240).padStart((10673 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 10891) & 65535) / (16926 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 10891) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              } else if (result.sectionsProtected > (2034257561 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 14313)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 118 | 1, (result.sectionsProtected | 0) ^ 118 | 1), Math.imul((result.sectionsProtected | 0) ^ 118 | 1, (result.sectionsProtected | 0) ^ 118 | 1)) & 15 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 6979) & 255) === 172) {
                _compilerEnvelope_c7a++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_assetsDigest_5f7).padStart(-1178445093 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 2253), '0')}/${String(_ObjectVector_240).padStart(-1931012979 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 24059), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              } else if (result.sectionsProtected > (1102586510 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 15053)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 124 | 1, (result.sectionsProtected | 0) ^ 124 | 1), Math.imul((result.sectionsProtected | 0) ^ 124 | 1, (result.sectionsProtected | 0) ^ 124 | 1)) & 15 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 303) & 255) === 52) {
                _compilerEnvelope_c7a++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_assetsDigest_5f7).padStart((7415 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 2653) & 65535) / (9808 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 2653) >>> 16 & 65535), '0')}/${String(_ObjectVector_240).padStart((30521 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 8687) & 65535) / (19879 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 8687) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              }
              continue;
            }
            const sourceCode = typeof rawSource === _attestTokenProof_876b(508126451 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 19445)) ? rawSource : rawSource.toString(_attestTokenProof_876b(-1744498142 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 20575)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (809729043 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 32141)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 124 | 1, (result.transformedCount | 0) ^ 124 | 1), Math.imul((result.transformedCount | 0) ^ 124 | 1, (result.transformedCount | 0) ^ 124 | 1)) & 15 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 25129) & 255) === 148) {
              _compilerEnvelope_c7a++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_assetsDigest_5f7).padStart((28889 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 337) & 65535) / (33268 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 337) >>> 16 & 65535), '0')}/${String(_ObjectVector_240).padStart((29363 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 7873) & 65535) / (57329 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 7873) >>> 16 & 65535), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            } else if (result.transformedCount > (-1881783085 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 9689)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 67 | 1, (result.transformedCount | 0) ^ 67 | 1), Math.imul((result.transformedCount | 0) ^ 67 | 1, (result.transformedCount | 0) ^ 67 | 1)) & 15 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 26533) & 255) === 80) {
              _compilerEnvelope_c7a++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_assetsDigest_5f7).padStart(-1288033861 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 16441), '0')}/${String(_ObjectVector_240).padStart(-1177616531 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 30245), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            } else if (result.transformedCount > (1822080000 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 30837)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 91 | 1, (result.transformedCount | 0) ^ 91 | 1), Math.imul((result.transformedCount | 0) ^ 91 | 1, (result.transformedCount | 0) ^ 91 | 1)) & 15 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 1957) & 255) === 224) {
              _compilerEnvelope_c7a++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_assetsDigest_5f7).padStart((51937 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 27111) & 65535) / (61123 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 27111) >>> 16 & 65535), '0')}/${String(_ObjectVector_240).padStart((25355 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 31957) & 65535) / (49757 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 31957) >>> 16 & 65535), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            }
          } catch (err) {
            compilation.errors.push(new Error(`[SyferitWebpackPlugin] Failed to protect asset "${pathname}": ${err.message}`));
          }
        }
        if (!this.options.quiet && _compilerEnvelope_c7a > (1104317825 ^ _sanitizeCompilation_rns_876b(__engineState_876b, 30939))) {
          console.log(`  ✔ Syferit hardened ${_compilerEnvelope_c7a}/${_ObjectVector_240} bundler chunks in ${Date.now() - _nonceProof_d31}ms\n`);
        }
      });
    });
  }
  matchesAssetFilter(filter, pathname) {
    function verifyNonceProof_b0a7(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:78c78113-8e0bdc3d]",
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
    const __pluginNameState_b0a7 = verifyNonceProof_b0a7(1867189251, 993974325, 944153357, 1806534079);
    function _auditLength_rns_b0a7(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 229,
        _r1 = _u % 227,
        _r2 = _u % 233,
        _r3 = _u % 241,
        _r4 = _u % 199;
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
    const _optionsFrame_b0a7 = [[140, 82, 51, 202, 28, 189, 182, 92, 119], [118, 23, 4, 217, 208, 159, 145, 32], [80, 233, 251, 186, 187, 107, 81, 26, 46, 202], [41, 216, 198, 109, 128, 39], [12, 178, 184, 69, 118], [215, 130, 140, 39, 86, 237], [170, 116, 78, 3, 49, 198, 214, 105, 146, 38, 20, 235, 247, 184]];
    function _validateMode_b0a7(_slot) {
      const _row = _optionsFrame_b0a7[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__pluginNameState_b0a7 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (typeof filter === _validateMode_b0a7(-1867487997 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 2279)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 40 | 1, ((filter.seats || filter | 0) | 0) ^ 40 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 40 | 1, ((filter.seats || filter | 0) | 0) ^ 40 | 1)) & 15 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 431) & 255) === 142) {
      return filter(pathname);
    } else if (typeof filter === _validateMode_b0a7(189579076 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 10279)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 26 | 1, ((filter.seats || filter | 0) | 0) ^ 26 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 26 | 1, ((filter.seats || filter | 0) | 0) ^ 26 | 1)) & 15 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 31331) & 255) === 40) {
      return filter(pathname);
    } else if (typeof filter === _validateMode_b0a7(-927428827 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 15415)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 22 | 1, ((filter.seats || filter | 0) | 0) ^ 22 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 22 | 1, ((filter.seats || filter | 0) | 0) ^ 22 | 1)) & 15 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 5935) & 255) === 220) {
      return filter(pathname);
    }
    if (Array.isArray(filter)) {
      return filter.some(item => typeof item === _validateMode_b0a7(1711013474 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 6685)) ? pathname.includes(item) : item.test(pathname));
    }
    if (typeof filter === _validateMode_b0a7(158584067 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 10819)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 64 | 1, ((filter.seats || filter | 0) | 0) ^ 64 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 64 | 1, ((filter.seats || filter | 0) | 0) ^ 64 | 1)) & 15 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 30845) & 255) === 160) {
      return pathname.includes(filter);
    } else if (typeof filter === _validateMode_b0a7(-2127241920 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 23027)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 109 | 1, ((filter.seats || filter | 0) | 0) ^ 109 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 109 | 1, ((filter.seats || filter | 0) | 0) ^ 109 | 1)) & 15 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 28315) & 255) === 70) {
      return pathname.includes(filter);
    } else if (typeof filter === _validateMode_b0a7(1807541075 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 3051)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 26 | 1, ((filter.seats || filter | 0) | 0) ^ 26 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 26 | 1, ((filter.seats || filter | 0) | 0) ^ 26 | 1)) & 15 ^ _auditLength_rns_b0a7(__pluginNameState_b0a7, 31813) & 255) === 60) {
      return pathname.includes(filter);
    }
    return (__pluginNameState_b0a7 & 255) === 235 ? filter.test(pathname) : (() => {
      function verifyStage_ebc9(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:45300e93-27633f42]",
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
        if ((_h >>> 4 & 15) !== 9) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __processAssetsState_ebc9 = verifyStage_ebc9(906027005, 1338742531, 214413047, 1908437133);
      function _verifySYFERIT_BANNER_rns_ebc9(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 229,
          _r1 = _u % 197,
          _r2 = _u % 239,
          _r3 = _u % 227,
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
      if ((__processAssetsState_ebc9 & 255) !== 156) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shouldProcessAsset(pathname) {
    function rotateOptions_e19a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e621407c-3e27b1aa]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __tpmAttestation_e19a = rotateOptions_e19a(545938543, 1930538513, 1262702481, 807837465);
    function _rotateSignatureEnvelope_rns_e19a(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 199,
        _r2 = _u % 233,
        _r3 = _u % 227,
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
    return (__tpmAttestation_e19a & 255) === 12 ? true : (() => {
      function auditName_44fc(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:9539575d-227664c6]",
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
        if ((_h >>> 4 & 15) !== 7) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __keystoreQuorum_44fc = auditName_44fc(1465905469, 979406741, 1891440979, 1965640765);
      function _auditIsProduction_rns_44fc(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 199,
          _r1 = _u % 239,
          _r2 = _u % 233,
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
      if ((__keystoreQuorum_44fc & 255) !== 115) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_242c && window.__syferitIPC_242c.invoke && window.__syferitIPC_242c.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 450170267,
    channelSig: "SIG_FRAME_242C"
  });
}