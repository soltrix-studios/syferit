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
    function authenticateAssets_46ae(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:4adf08be-a12973ed]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __assetEntriesState_46ae = authenticateAssets_46ae(1238558767, 1376817069, 1750145293, 465103253);
    function _authenticateAssets_rns_46ae(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 197,
        _r1 = _u % 229,
        _r2 = _u % 251,
        _r3 = _u % 211,
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
    function _authenticatePadEnd_vm_46ae(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 95) {
          _stk.push((__assetEntriesState_46ae >>> 0) % _a ^ _b);
        } else if (_op === 172) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 115) {
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
    const _signatureEnvelope_46ae = [[9, 140, 227, 82, 120, 241, 84, 163, 206, 72], [238, 81, 222, 63, 71, 212, 49, 134, 169, 37], [179, 58, 185, 228, 34, 191, 30, 125, 132, 30], [187, 20, 157, 192, 14, 104, 251, 110, 117, 247, 83, 172, 199, 66, 231, 13, 77, 218, 34, 155], [101, 243, 82, 174, 196, 72, 209, 58], [65, 214, 36, 156], [119, 252, 62, 68, 187, 32, 174, 248, 47, 84, 194, 108, 67, 200, 118, 128, 247, 124, 234, 52, 107, 144, 30, 168, 159, 4, 178, 220, 51, 184, 38, 112, 167, 44, 90, 228, 219, 64, 206, 24, 79, 244, 98, 140, 227, 104, 150, 32, 23, 156, 10, 84, 139, 48, 190, 200, 63, 164, 210, 124, 83, 216, 70, 144, 199, 76, 250, 4, 123, 224, 110, 184, 239, 20, 130, 44, 3, 136, 49], [92, 33, 222, 25, 48, 198, 122, 139, 225, 123, 254, 53, 24, 203, 121, 219, 252, 127, 239, 169, 116, 197, 32, 100, 153, 27, 104, 221, 225, 110, 187, 3, 121, 200, 92, 173, 213, 89, 227, 75, 100, 155, 50, 114, 177, 57, 158, 240, 76, 184, 17, 93, 101, 226, 97, 212, 224, 96, 135, 5, 90, 204, 85, 150, 218, 46, 189, 20, 53, 167, 67, 45, 196, 73, 215, 129, 88, 221, 218], [129, 6, 229, 126, 21, 152, 12, 157, 167, 105, 168, 166, 23, 151, 3, 110, 209, 37, 108, 199, 245, 42, 241, 54, 55, 190, 127, 175, 203, 87, 178, 3, 53, 232, 118, 222, 245, 88, 200, 178, 58, 129, 16, 82, 143, 235, 104, 154, 194, 98, 209, 42, 76, 197, 75, 194, 250, 81, 168, 19, 109, 150, 5, 108, 132, 8, 135, 251, 85, 191, 230, 85, 96, 224, 121, 230, 189, 2, 225], [230, 107, 185, 211, 10, 143, 61, 71, 190, 35, 81, 251, 210, 87, 197, 111, 70, 203, 121, 131, 250, 127, 237, 55, 110, 147, 1, 171, 130, 7, 181, 223, 54, 187, 41, 115, 170, 47, 93, 231, 222, 67, 241, 27, 114, 247, 101, 143, 230, 107, 153, 35, 26, 159, 13, 87, 142, 51, 161, 203, 34, 167, 213, 127, 86, 219, 73, 147, 202, 79, 253, 7, 126, 227, 17, 187, 146, 23, 182], [203, 80, 175, 136, 95, 188, 178, 126, 102, 246, 66, 188, 194, 94, 154, 94, 27, 151, 43, 154, 191, 53, 129, 231, 67, 221, 86, 15, 215, 50, 111, 204, 255, 62, 244, 59, 63, 166, 18, 252, 11, 24, 139, 31, 35, 169, 122, 36, 251, 64, 212, 184, 63, 134, 237, 72, 118, 235, 98, 169, 248, 114, 138, 28, 74, 194, 90, 141, 209, 45, 188, 27, 115, 248, 70, 48, 199, 76, 171], [48, 181, 121, 157, 244, 121, 231, 49, 104, 237, 27, 165, 156, 1, 143, 217, 48, 181, 35, 77, 164, 41, 87, 225, 216, 93, 203, 21, 76, 241, 127, 137, 224, 101, 147, 61, 20, 153, 7, 81, 136, 13, 187, 197, 60, 161, 47, 121, 80, 213, 67, 237, 196, 73, 247, 1, 120, 253, 107, 181, 236, 17, 159, 41, 0, 133, 51, 93, 180, 57, 167, 241, 40, 173, 219, 101, 92, 193, 66], [66, 223, 42, 130, 168, 45, 183, 171, 46, 141, 5, 104, 146, 19, 119], [45, 186, 15, 103, 143, 16, 106, 134, 241, 104, 224, 77, 117, 254, 90], [81, 115, 243, 79, 126], [215, 93, 197, 8, 86, 218], [186, 58, 174, 239, 51, 133], [155, 7, 103, 134, 186]];
    function _validateSignatureCheck_46ae(_slot) {
      const _row = _signatureEnvelope_46ae[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__assetEntriesState_46ae >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__assetEntriesState_46ae & 255) !== 121) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _quorumAttestation_f10 = this.options.mode === _validateSignatureCheck_46ae(564384963 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 3191)) || compiler.options.mode === _validateSignatureCheck_46ae(965402656 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 29219));
    if (!_quorumAttestation_f10 && this.options.mode !== _validateSignatureCheck_46ae(1917084463 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 3755))) {
      return;
    }
    const _pathnameVector_91 = _validateSignatureCheck_46ae(-1898434506 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 22761));
    compiler.hooks.compilation.tap(_pathnameVector_91, compilation => {
      function normalizeQuorumVector_cf0b(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7215b5e8-e978f4e9]",
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
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __engineState_cf0b = normalizeQuorumVector_cf0b(2071378719, 1966730343, 356526551, 567172719);
      function _verifyEnclaveAttestation_rns_cf0b(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 223,
          _r1 = _u % 199,
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
      if ((__engineState_cf0b & 255) !== 151) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _signatureFrame_da1 = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? _authenticatePadEnd_vm_46ae([95, 197, 27396, 172, 7, 0, 95, 229, 15125, 58, 0, 0, 95, 197, 3544406, 115, 0, 0]);
      compilation.hooks.processAssets.tapPromise({
        name: _pathnameVector_91,
        stage: _signatureFrame_da1
      }, async assets => {
        function verifyProprietaryEnclaveContext_ba4f(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:80643017-d801d63e]",
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
            throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
          }
          return _h;
        }
        const __keystoreQuorum_ba4f = verifyProprietaryEnclaveContext_ba4f(1543800827, 1793568027, 1421704621, 1768031101);
        function _attestName_rns_ba4f(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 199,
            _r1 = _u % 233,
            _r2 = _u % 229,
            _r3 = _u % 241,
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
        if ((__keystoreQuorum_ba4f & 255) !== 76) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        const _lengthAttestation_127 = Object.entries(assets).filter(([pathname]) => this.shouldProcessAsset(pathname));
        if (_lengthAttestation_127.length === _authenticatePadEnd_vm_46ae([95, 197, 13021, 172, 7, 0, 95, 229, 15249, 58, 0, 0, 95, 197, 1667382, 115, 0, 0])) {
          return;
        }
        if (!this.options.quiet && !SyferitWebpackPlugin.bannerPrinted) {
          SyferitWebpackPlugin.bannerPrinted = true;
          const preset = (this.options.preset ?? _validateSignatureCheck_46ae(383039075 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 447))).padEnd(_authenticatePadEnd_vm_46ae([95, 197, 12015, 172, 12, 0, 95, 229, 12857, 58, 0, 0, 95, 197, 48636430, 115, 0, 0]), ' ');
          const profile = (this.options.domainProfile ?? _validateSignatureCheck_46ae(-306113832 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 16721))).padEnd(_authenticatePadEnd_vm_46ae([95, 197, 13773, 172, 7, 0, 95, 229, 24855, 58, 0, 0, 95, 197, 1777850, 115, 0, 0]), ' ');
          console.log(SYFERIT_BANNER);
          console.log(_validateSignatureCheck_46ae(-1799603185 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 16085)));
          console.log(_validateSignatureCheck_46ae(1165494016 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 20555)));
          console.log(_validateSignatureCheck_46ae(-232687447 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 6913)));
          console.log(_validateSignatureCheck_46ae(-178878288 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 4063)));
          console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
          console.log(_validateSignatureCheck_46ae(-1364468585 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 30423)));
          console.log(_validateSignatureCheck_46ae(-1124097162 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 19129)));
        }
        let _constructorProof_72a = -953190787 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 20249);
        const _pathnameVector_244 = _lengthAttestation_127.length;
        const _SyferitEngineDelta_927 = Date.now();
        let _hooksAttestation_9a = -934367387 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 11577);
        for (const [pathname, asset] of _lengthAttestation_127) {
          _constructorProof_72a++;
          const t0 = Date.now();
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_validateSignatureCheck_46ae(-1846560333 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 17289)))).default ?? (await import(_validateSignatureCheck_46ae(1748184956 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 4337))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_validateSignatureCheck_46ae(-751539581 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 22561)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _validateSignatureCheck_46ae(2030040210 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 16151)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (902205109 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 20861)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 54 | 1, (result.sectionsProtected | 0) ^ 54 | 1), Math.imul((result.sectionsProtected | 0) ^ 54 | 1, (result.sectionsProtected | 0) ^ 54 | 1)) & 15 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 23859) & 255) === 112) {
                _hooksAttestation_9a++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_constructorProof_72a).padStart((10471 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 11729) & 65535) / (17892 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 11729) >>> 16 & 65535), '0')}/${String(_pathnameVector_244).padStart((52039 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 26683) & 65535) / (27751 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 26683) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              } else if (result.sectionsProtected > (875886011 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 17867)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 23 | 1, (result.sectionsProtected | 0) ^ 23 | 1), Math.imul((result.sectionsProtected | 0) ^ 23 | 1, (result.sectionsProtected | 0) ^ 23 | 1)) & 15 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 20699) & 255) === 184) {
                _hooksAttestation_9a++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_constructorProof_72a).padStart(-829844799 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 11933), '0')}/${String(_pathnameVector_244).padStart(472874951 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 7703), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              } else if (result.sectionsProtected > (-425678854 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 20897)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 92 | 1, (result.sectionsProtected | 0) ^ 92 | 1), Math.imul((result.sectionsProtected | 0) ^ 92 | 1, (result.sectionsProtected | 0) ^ 92 | 1)) & 15 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 30011) & 255) === 170) {
                _hooksAttestation_9a++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_constructorProof_72a).padStart((7985 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 17273) & 65535) / (62899 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 17273) >>> 16 & 65535), '0')}/${String(_pathnameVector_244).padStart((14127 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 20039) & 65535) / (57450 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 20039) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              }
              continue;
            }
            const sourceCode = typeof rawSource === _validateSignatureCheck_46ae(564775935 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 12855)) ? rawSource : rawSource.toString(_validateSignatureCheck_46ae(-1977308694 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 30253)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (1022539893 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 25603)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 103 | 1, (result.transformedCount | 0) ^ 103 | 1), Math.imul((result.transformedCount | 0) ^ 103 | 1, (result.transformedCount | 0) ^ 103 | 1)) & 15 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 3569) & 255) === 254) {
              _hooksAttestation_9a++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_constructorProof_72a).padStart((47277 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 9933) & 65535) / (22807 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 9933) >>> 16 & 65535), '0')}/${String(_pathnameVector_244).padStart((22027 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 1247) & 65535) / (13723 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 1247) >>> 16 & 65535), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            } else if (result.transformedCount > (-886574693 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 30913)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 19 | 1, (result.transformedCount | 0) ^ 19 | 1), Math.imul((result.transformedCount | 0) ^ 19 | 1, (result.transformedCount | 0) ^ 19 | 1)) & 15 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 2919) & 255) === 218) {
              _hooksAttestation_9a++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_constructorProof_72a).padStart(-551619149 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 18565), '0')}/${String(_pathnameVector_244).padStart(1400499835 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 25605), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            } else if (result.transformedCount > (828710472 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 7341)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 30 | 1, (result.transformedCount | 0) ^ 30 | 1), Math.imul((result.transformedCount | 0) ^ 30 | 1, (result.transformedCount | 0) ^ 30 | 1)) & 15 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 8957) & 255) === 46) {
              _hooksAttestation_9a++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_constructorProof_72a).padStart((65217 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 12793) & 65535) / (27580 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 12793) >>> 16 & 65535), '0')}/${String(_pathnameVector_244).padStart((17915 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 2975) & 65535) / (20138 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 2975) >>> 16 & 65535), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            }
          } catch (err) {
            compilation.errors.push(new Error(`[SyferitWebpackPlugin] Failed to protect asset "${pathname}": ${err.message}`));
          }
        }
        if (!this.options.quiet && _hooksAttestation_9a > (-1317082709 ^ _authenticateAssets_rns_46ae(__assetEntriesState_46ae, 32081))) {
          console.log(`  ✔ Syferit hardened ${_hooksAttestation_9a}/${_pathnameVector_244} bundler chunks in ${Date.now() - _SyferitEngineDelta_927}ms\n`);
        }
      });
    });
  }
  matchesAssetFilter(filter, pathname) {
    function verifyProprietaryEnclaveContext_9fef(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:049a4e5e-a6edbbee]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __isProductionState_9fef = verifyProprietaryEnclaveContext_9fef(1263695745, 2096578721, 417087719, 1005297367);
    function _isolateObject_rns_9fef(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 227,
        _r1 = _u % 239,
        _r2 = _u % 233,
        _r3 = _u % 199,
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
    const _isProductionVector_9fef = [[66, 231, 235, 1, 218, 112, 94, 135, 41], [44, 216, 172, 224, 170, 40, 57, 121], [28, 177, 134, 196, 102], [231, 131, 126, 164, 70, 236], [220, 114, 69, 151, 63, 192, 183, 239, 146, 33], [173, 53, 36, 126, 28, 178], [96, 9, 22, 76, 251, 147, 110, 190, 72, 235, 252, 20, 205, 77]];
    function _auditKeystoreDigest_9fef(_slot) {
      const _row = _isProductionVector_9fef[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__isProductionState_9fef >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (typeof filter === _auditKeystoreDigest_9fef(-657484019 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 15185)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 26 | 1, ((filter.seats || filter | 0) | 0) ^ 26 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 26 | 1, ((filter.seats || filter | 0) | 0) ^ 26 | 1)) & 15 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 19715) & 255) === 218) {
      return filter(pathname);
    } else if (typeof filter === _auditKeystoreDigest_9fef(2107829192 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 10291)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 23 | 1, ((filter.seats || filter | 0) | 0) ^ 23 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 23 | 1, ((filter.seats || filter | 0) | 0) ^ 23 | 1)) & 15 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 24847) & 255) === 172) {
      return filter(pathname);
    } else if (typeof filter === _auditKeystoreDigest_9fef(148978417 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 23247)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 62 | 1, ((filter.seats || filter | 0) | 0) ^ 62 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 62 | 1, ((filter.seats || filter | 0) | 0) ^ 62 | 1)) & 15 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 31697) & 255) === 150) {
      return filter(pathname);
    }
    if (Array.isArray(filter)) {
      return filter.some(item => typeof item === _auditKeystoreDigest_9fef(-632235696 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 16001)) ? pathname.includes(item) : item.test(pathname));
    }
    if (typeof filter === _auditKeystoreDigest_9fef(-1327171667 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 4197)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 103 | 1, ((filter.seats || filter | 0) | 0) ^ 103 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 103 | 1, ((filter.seats || filter | 0) | 0) ^ 103 | 1)) & 15 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 28761) & 255) === 70) {
      return pathname.includes(filter);
    } else if (typeof filter === _auditKeystoreDigest_9fef(1024256970 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 7623)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 127 | 1, ((filter.seats || filter | 0) | 0) ^ 127 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 127 | 1, ((filter.seats || filter | 0) | 0) ^ 127 | 1)) & 15 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 26071) & 255) === 120) {
      return pathname.includes(filter);
    } else if (typeof filter === _auditKeystoreDigest_9fef(1779570577 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 20689)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 76 | 1, ((filter.seats || filter | 0) | 0) ^ 76 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 76 | 1, ((filter.seats || filter | 0) | 0) ^ 76 | 1)) & 15 ^ _isolateObject_rns_9fef(__isProductionState_9fef, 22313) & 255) === 212) {
      return pathname.includes(filter);
    }
    return (__isProductionState_9fef & 255) === 37 ? filter.test(pathname) : (() => {
      function isolateQuorumAttestation_8a96(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:572558f2-a1fc982e]",
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
        if ((_h >>> 4 & 15) !== 1) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __keystoreVector_8a96 = isolateQuorumAttestation_8a96(964158925, 1383108433, 1024529123, 465562217);
      function _authenticatePathname_rns_8a96(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 251,
          _r1 = _u % 197,
          _r2 = _u % 211,
          _r3 = _u % 199,
          _r4 = _u % 241;
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
      if ((__keystoreVector_8a96 & 255) !== 16) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shouldProcessAsset(pathname) {
    function auditMode_b1b8(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:95b5d7eb-031666c7]",
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
      if ((_h >>> 4 & 15) !== 1) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __SyferitEngineQuorum_b1b8 = auditMode_b1b8(961867689, 1064510973, 1961661069, 375680073);
    function _isolateCompiler_rns_b1b8(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 229,
        _r2 = _u % 223,
        _r3 = _u % 251,
        _r4 = _u % 211;
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
    return (__SyferitEngineQuorum_b1b8 & 255) === 19 ? true : (() => {
      function reconcileKeystoreQuorum_961c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ea063f4a-d128f344]",
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
      const __enclaveProof_961c = reconcileKeystoreQuorum_961c(1161161721, 639718425, 1971679347, 1793501915);
      function _authenticatePathname_rns_961c(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 229,
          _r1 = _u % 223,
          _r2 = _u % 233,
          _r3 = _u % 197,
          _r4 = _u % 211;
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
      if ((__enclaveProof_961c & 255) !== 40) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_4817 && window.__syferitIPC_4817.invoke && window.__syferitIPC_4817.invoke("license:quorum-token-refresh", {
    syncEpoch: 251819757,
    channelSig: "SIG_FRAME_4817"
  });
}