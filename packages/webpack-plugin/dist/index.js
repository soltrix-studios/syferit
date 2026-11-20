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
    function attestOptions_3fd9(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f373e888-c304f921]",
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
      if ((_h >>> 4 & 15) !== 10) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __stageState_3fd9 = attestOptions_3fd9(1045902549, 351935139, 905546107, 1653953343);
    function _auditPathname_rns_3fd9(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 239,
        _r2 = _u % 251,
        _r3 = _u % 241,
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
    function _authenticateCompilation_vm_3fd9(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 123) {
          _stk.push((__stageState_3fd9 >>> 0) % _a ^ _b);
        } else if (_op === 163) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 108) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 28) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _keystoreProration_3fd9 = [[216, 241, 92, 192, 73, 116, 179, 81, 191, 197], [189, 218, 55, 173, 20, 95, 152, 52, 154, 190], [130, 191, 18, 138, 243, 2, 101, 235, 117, 155], [68, 139, 196, 118, 217, 239, 66, 240, 90, 120, 186, 90, 176, 197, 14, 163, 18, 37, 155, 13], [84, 118, 181, 92, 181, 197, 62, 168], [18, 93, 141, 46], [166, 65, 69, 210, 74, 165, 245, 70, 254, 217, 105, 250, 18, 77, 157, 110, 134, 225, 49, 130, 58, 21, 165, 54, 174, 137, 217, 170, 194, 61, 77, 222, 118, 81, 225, 114, 234, 197, 21, 230, 30, 121, 137, 26, 178, 237, 61, 142, 38, 1, 81, 34, 90, 181, 197, 86, 206, 41, 121, 202, 98, 93, 237, 126, 150, 241, 1, 146, 10, 101, 181, 6, 190, 153, 41, 186, 210, 13, 90], [139, 166, 103, 135, 31, 73, 147, 125, 150, 252, 23, 155, 71, 52, 192, 77, 203, 248, 182, 215, 155, 74, 73, 242, 78, 156, 193, 115, 222, 241, 98, 245, 46, 79, 165, 51, 186, 214, 74, 253, 83, 28, 155, 28, 110, 134, 231, 102, 187, 63, 72, 227, 74, 109, 200, 66, 183, 231, 110, 235, 37, 83, 140, 32, 141, 169, 4, 138, 26, 40, 42, 91, 51, 206, 190, 47, 135, 162, 99], [240, 139, 10, 236, 68, 29, 171, 15, 150, 244, 247, 212, 198, 18, 100, 252, 0, 168, 195, 117, 196, 175, 86, 196, 102, 3, 128, 61, 186, 210, 21, 177, 4, 101, 217, 76, 36, 221, 175, 32, 203, 28, 79, 224, 94, 110, 207, 8, 147, 239, 62, 216, 61, 64, 172, 112, 171, 172, 23, 129, 92, 19, 98, 30, 117, 133, 232, 105, 132, 58, 65, 199, 81, 125, 166, 20, 236, 135, 6], [213, 240, 224, 161, 217, 52, 68, 213, 77, 168, 248, 73, 225, 220, 108, 253, 21, 112, 128, 17, 137, 228, 52, 133, 61, 24, 168, 57, 81, 140, 220, 173, 197, 32, 112, 193, 121, 84, 228, 117, 237, 200, 24, 233, 1, 124, 140, 29, 181, 144, 32, 177, 41, 4, 84, 37, 93, 184, 200, 89, 241, 44, 124, 205, 101, 64, 144, 97, 153, 244, 4, 149, 13, 104, 184, 9, 161, 156, 31], [58, 213, 244, 54, 142, 49, 25, 232, 55, 115, 169, 82, 179, 195, 65, 232, 74, 18, 144, 4, 142, 184, 234, 145, 178, 88, 61, 161, 6, 79, 212, 90, 206, 187, 47, 197, 110, 43, 249, 106, 90, 157, 32, 177, 18, 52, 33, 82, 42, 197, 175, 38, 206, 11, 70, 254, 71, 110, 201, 71, 169, 207, 113, 138, 59, 71, 129, 51, 128, 160, 23, 141, 162, 125, 45, 94, 54, 209, 240], [31, 58, 144, 107, 131, 254, 14, 159, 55, 18, 162, 51, 171, 134, 214, 167, 223, 58, 74, 219, 115, 174, 254, 79, 231, 194, 18, 227, 27, 118, 134, 23, 143, 234, 58, 139, 35, 30, 174, 63, 87, 178, 194, 83, 203, 38, 118, 199, 127, 90, 234, 123, 147, 206, 30, 239, 7, 98, 178, 3, 187, 150, 38, 183, 47, 10, 90, 43, 67, 190, 206, 95, 247, 210, 98, 243, 107, 70, 155], [19, 90, 141, 16, 153, 176, 232, 217, 255, 8, 98, 250, 67, 158, 216], [254, 1, 118, 245, 124, 155, 195, 52, 194, 227, 73, 223, 38, 69, 163], [128, 254, 88, 217, 47], [160, 218, 44, 166, 9, 37], [139, 167, 241, 157, 226, 0], [104, 140, 206, 52, 137]];
    function _verifyBannerPrinted_3fd9(_slot) {
      const _row = _keystoreProration_3fd9[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__stageState_3fd9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__stageState_3fd9 & 255) !== 168) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _modeVector_c96 = this.options.mode === _verifyBannerPrinted_3fd9(586602997 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 17953)) || compiler.options.mode === _verifyBannerPrinted_3fd9(1495015606 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 23193));
    if (!_modeVector_c96 && this.options.mode !== _verifyBannerPrinted_3fd9(-239852313 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 22167))) {
      return;
    }
    const _tapPromiseBank_b62 = _verifyBannerPrinted_3fd9(-1181971898 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 15457));
    compiler.hooks.compilation.tap(_tapPromiseBank_b62, compilation => {
      function authenticateFilter_bdaa(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8c583a59-f04feb0e]",
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
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __lengthState_bdaa = authenticateFilter_bdaa(1059853973, 1878047509, 674382427, 1297526615);
      function _authenticateSignatureFrame_rns_bdaa(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 233,
          _r1 = _u % 239,
          _r2 = _u % 211,
          _r3 = _u % 241,
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
      if ((__lengthState_bdaa & 255) !== 60) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _pluginNameFrame_c82 = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE ?? _authenticateCompilation_vm_3fd9([123, 199, 31512, 163, 16, 0, 123, 239, 4008, 28, 0, 0, 123, 199, 2070286116, 108, 0, 0]);
      compilation.hooks.processAssets.tapPromise({
        name: _tapPromiseBank_b62,
        stage: _pluginNameFrame_c82
      }, async assets => {
        function synchronizeNonceContext_a81f(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0a38c22b-414b6404]",
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
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __nonceAttestation_a81f = synchronizeNonceContext_a81f(952852113, 1975709007, 197882607, 364258805);
        function _auditTpmState_rns_a81f(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 241,
            _r1 = _u % 199,
            _r2 = _u % 233,
            _r3 = _u % 251,
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
        if ((__nonceAttestation_a81f & 255) !== 62) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        const _enclaveCheck_9e = Object.entries(assets).filter(([pathname]) => this.shouldProcessAsset(pathname));
        if (_enclaveCheck_9e.length === _authenticateCompilation_vm_3fd9([123, 199, 4129, 163, 8, 0, 123, 239, 22124, 28, 0, 0, 123, 199, 1095044, 108, 0, 0])) {
          return;
        }
        if (!this.options.quiet && !SyferitWebpackPlugin.bannerPrinted) {
          SyferitWebpackPlugin.bannerPrinted = true;
          const preset = (this.options.preset ?? _verifyBannerPrinted_3fd9(-488933683 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 29841))).padEnd(_authenticateCompilation_vm_3fd9([123, 199, 26413, 163, 7, 0, 123, 239, 14505, 28, 0, 0, 123, 199, 3400145, 108, 0, 0]), ' ');
          const profile = (this.options.domainProfile ?? _verifyBannerPrinted_3fd9(-1014137348 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 32729))).padEnd(_authenticateCompilation_vm_3fd9([123, 199, 23582, 163, 7, 0, 123, 239, 31500, 28, 0, 0, 123, 199, 3058670, 108, 0, 0]), ' ');
          console.log(SYFERIT_BANNER);
          console.log(_verifyBannerPrinted_3fd9(-36052893 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 11381)));
          console.log(_verifyBannerPrinted_3fd9(1710100524 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 23677)));
          console.log(_verifyBannerPrinted_3fd9(-188893029 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 20615)));
          console.log(_verifyBannerPrinted_3fd9(-688705002 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 7369)));
          console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
          console.log(_verifyBannerPrinted_3fd9(-1637265241 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 10467)));
          console.log(_verifyBannerPrinted_3fd9(-8853010 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 30093)));
        }
        let _padEndAttestation_f75 = 1351690147 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 30265);
        const _keystoreFrame_708 = _enclaveCheck_9e.length;
        const _assetEntriesVector_7f8 = Date.now();
        let _filterAttestation_5de = -2015158983 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 20411);
        for (const [pathname, asset] of _enclaveCheck_9e) {
          _padEndAttestation_f75++;
          const t0 = Date.now();
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_verifyBannerPrinted_3fd9(-1230824851 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 16295)))).default ?? (await import(_verifyBannerPrinted_3fd9(-281952738 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 1121))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_verifyBannerPrinted_3fd9(253465899 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 32431)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _verifyBannerPrinted_3fd9(1601541686 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 12143)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (-737583241 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 31709)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 112 | 1, (result.sectionsProtected | 0) ^ 112 | 1), Math.imul((result.sectionsProtected | 0) ^ 112 | 1, (result.sectionsProtected | 0) ^ 112 | 1)) & 15 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 3135) & 255) === 62) {
                _filterAttestation_5de++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_padEndAttestation_f75).padStart((26599 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 21141) & 65535) / (41338 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 21141) >>> 16 & 65535), '0')}/${String(_keystoreFrame_708).padStart((39297 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 19485) & 65535) / (59096 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 19485) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              } else if (result.sectionsProtected > (2022834695 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 14653)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 24 | 1, (result.sectionsProtected | 0) ^ 24 | 1), Math.imul((result.sectionsProtected | 0) ^ 24 | 1, (result.sectionsProtected | 0) ^ 24 | 1)) & 15 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 28187) & 255) === 62) {
                _filterAttestation_5de++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_padEndAttestation_f75).padStart(-429763885 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 5261), '0')}/${String(_keystoreFrame_708).padStart(-825259225 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 5491), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              } else if (result.sectionsProtected > (-49216564 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 691)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 37 | 1, (result.sectionsProtected | 0) ^ 37 | 1), Math.imul((result.sectionsProtected | 0) ^ 37 | 1, (result.sectionsProtected | 0) ^ 37 | 1)) & 15 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 8385) & 255) === 180) {
                _filterAttestation_5de++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_padEndAttestation_f75).padStart((44661 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 30233) & 65535) / (3651 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 30233) >>> 16 & 65535), '0')}/${String(_keystoreFrame_708).padStart((26117 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 22209) & 65535) / (29974 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 22209) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              }
              continue;
            }
            const sourceCode = typeof rawSource === _verifyBannerPrinted_3fd9(-1744109951 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 24255)) ? rawSource : rawSource.toString(_verifyBannerPrinted_3fd9(-1716227776 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 24191)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (-395556391 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 11085)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 90 | 1, (result.transformedCount | 0) ^ 90 | 1), Math.imul((result.transformedCount | 0) ^ 90 | 1, (result.transformedCount | 0) ^ 90 | 1)) & 15 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 4921) & 255) === 58) {
              _filterAttestation_5de++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_padEndAttestation_f75).padStart((50605 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 15935) & 65535) / (32653 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 15935) >>> 16 & 65535), '0')}/${String(_keystoreFrame_708).padStart((19753 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 13833) & 65535) / (43853 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 13833) >>> 16 & 65535), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            } else if (result.transformedCount > (-113607973 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 6467)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 24 | 1, (result.transformedCount | 0) ^ 24 | 1), Math.imul((result.transformedCount | 0) ^ 24 | 1, (result.transformedCount | 0) ^ 24 | 1)) & 15 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 26639) & 255) === 70) {
              _filterAttestation_5de++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_padEndAttestation_f75).padStart(1377856783 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 14649), '0')}/${String(_keystoreFrame_708).padStart(2033479575 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 3209), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            } else if (result.transformedCount > (-195928484 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 18565)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 64 | 1, (result.transformedCount | 0) ^ 64 | 1), Math.imul((result.transformedCount | 0) ^ 64 | 1, (result.transformedCount | 0) ^ 64 | 1)) & 15 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 22253) & 255) === 236) {
              _filterAttestation_5de++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_padEndAttestation_f75).padStart((62879 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 14099) & 65535) / (34658 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 14099) >>> 16 & 65535), '0')}/${String(_keystoreFrame_708).padStart((33887 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 13543) & 65535) / (45974 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 13543) >>> 16 & 65535), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            }
          } catch (err) {
            compilation.errors.push(new Error(`[SyferitWebpackPlugin] Failed to protect asset "${pathname}": ${err.message}`));
          }
        }
        if (!this.options.quiet && _filterAttestation_5de > (-340338145 ^ _auditPathname_rns_3fd9(__stageState_3fd9, 10001))) {
          console.log(`  ✔ Syferit hardened ${_filterAttestation_5de}/${_keystoreFrame_708} bundler chunks in ${Date.now() - _assetEntriesVector_7f8}ms\n`);
        }
      });
    });
  }
  matchesAssetFilter(filter, pathname) {
    function verifyProtectWasm_6ec8(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b73a18d6-2fe4ca19]",
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
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __enclaveFrame_6ec8 = verifyProtectWasm_6ec8(3503739, 608357919, 13670111, 370893627);
    function _verifyKeystoreVector_rns_6ec8(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 239,
        _r1 = _u % 199,
        _r2 = _u % 227,
        _r3 = _u % 233,
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
    const _presetAttestation_6ec8 = [[136, 59, 78, 250, 19, 129, 214, 112, 112, 25, 20, 194, 213, 127], [118, 12, 38, 204, 208, 100, 179, 45], [82, 241, 27, 139, 170, 94, 110, 29, 57], [41, 183, 224, 144, 128, 48], [26, 134, 195, 123, 97, 12, 57, 219, 212, 117], [215, 121, 174, 42, 86, 198], [186, 81, 96, 4, 56]];
    function _verifyProtectWasm_6ec8(_slot) {
      const _row = _presetAttestation_6ec8[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveFrame_6ec8 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (typeof filter === _verifyProtectWasm_6ec8(756470101 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 5241)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 101 | 1, ((filter.seats || filter | 0) | 0) ^ 101 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 101 | 1, ((filter.seats || filter | 0) | 0) ^ 101 | 1)) & 15 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 12885) & 255) === 48) {
      return filter(pathname);
    } else if (typeof filter === _verifyProtectWasm_6ec8(150553856 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 18495)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 59 | 1, ((filter.seats || filter | 0) | 0) ^ 59 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 59 | 1, ((filter.seats || filter | 0) | 0) ^ 59 | 1)) & 15 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 7105) & 255) === 160) {
      return filter(pathname);
    } else if (typeof filter === _verifyProtectWasm_6ec8(-1313693623 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 13643)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 93 | 1, ((filter.seats || filter | 0) | 0) ^ 93 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 93 | 1, ((filter.seats || filter | 0) | 0) ^ 93 | 1)) & 15 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 1407) & 255) === 34) {
      return filter(pathname);
    }
    if (Array.isArray(filter)) {
      return filter.some(item => typeof item === _verifyProtectWasm_6ec8(563067806 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 3623)) ? pathname.includes(item) : item.test(pathname));
    }
    if (typeof filter === _verifyProtectWasm_6ec8(695562535 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 18851)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 68 | 1, ((filter.seats || filter | 0) | 0) ^ 68 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 68 | 1, ((filter.seats || filter | 0) | 0) ^ 68 | 1)) & 15 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 7567) & 255) === 56) {
      return pathname.includes(filter);
    } else if (typeof filter === _verifyProtectWasm_6ec8(-1994933816 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 29991)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 19 | 1, ((filter.seats || filter | 0) | 0) ^ 19 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 19 | 1, ((filter.seats || filter | 0) | 0) ^ 19 | 1)) & 15 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 29103) & 255) === 102) {
      return pathname.includes(filter);
    } else if (typeof filter === _verifyProtectWasm_6ec8(36174625 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 28785)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 72 | 1, ((filter.seats || filter | 0) | 0) ^ 72 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 72 | 1, ((filter.seats || filter | 0) | 0) ^ 72 | 1)) & 15 ^ _verifyKeystoreVector_rns_6ec8(__enclaveFrame_6ec8, 2749) & 255) === 166) {
      return pathname.includes(filter);
    }
    return (__enclaveFrame_6ec8 & 255) === 235 ? filter.test(pathname) : (() => {
      function verifyKeystoreVector_a66(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:4409a101-2f7c7d8c]",
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
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __tokenBank_a66 = verifyKeystoreVector_a66(1501219695, 810634491, 838277475, 608958983);
      function _validateEnclaveCheck_rns_a66(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 251,
          _r1 = _u % 223,
          _r2 = _u % 199,
          _r3 = _u % 227,
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
      if ((__tokenBank_a66 & 255) !== 87) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shouldProcessAsset(pathname) {
    function attestMode_d298(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0768cf58-26863ede]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __SyferitWebpackPluginState_d298 = attestMode_d298(366387457, 1340163951, 273021263, 679718211);
    function _validateShouldProcessAsset_rns_d298(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 227,
        _r1 = _u % 239,
        _r2 = _u % 211,
        _r3 = _u % 251,
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
    return (__SyferitWebpackPluginState_d298 & 255) === 216 ? true : (() => {
      function validateEntries_2c27(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:32e7212d-a77ff98b]",
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
        if ((_h >>> 4 & 15) !== 12) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __padEndState_2c27 = validateEntries_2c27(2072055947, 238893369, 783238847, 1486215171);
      function _validateLength_rns_2c27(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 197,
          _r1 = _u % 229,
          _r2 = _u % 233,
          _r3 = _u % 227,
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
      if ((__padEndState_2c27 & 255) !== 194) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_3613 && window.__syferitIPC_3613.invoke && window.__syferitIPC_3613.invoke("system:keystore-attestation", {
    syncEpoch: 1013238113,
    channelSig: "SIG_FRAME_3613"
  });
}