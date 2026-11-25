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
    function auditFilter_7c42(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fbddd539-3924d29f]",
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
    const __entriesState_7c42 = auditFilter_7c42(1935935421, 454973713, 2127572109, 564785751);
    function _isolateCertificateCheck_rns_7c42(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 227,
        _r2 = _u % 223,
        _r3 = _u % 229,
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
    function _verifySoltrixStudiosContext_vm_7c42(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 223) {
          _stk.push((__entriesState_7c42 >>> 0) % _a ^ _b);
        } else if (_op === 49) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 77) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 138) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _lengthFrame_7c42 = [[10, 55, 196, 129, 123, 186, 75, 16, 205, 3], [239, 24, 191, 110, 70, 157, 16, 247, 168, 252], [180, 253, 154, 75, 45, 64, 253, 170, 131, 217], [186, 205, 124, 49, 15, 33, 218, 191, 116, 190, 50, 29, 198, 27, 134, 124, 76, 99, 3, 202], [120, 235, 18, 8, 215, 12, 189, 121, 67, 108, 74, 211, 164, 230], [64, 159, 5, 237], [120, 3, 221, 147, 188, 231, 77, 7, 208, 27, 225, 187, 68, 143, 21, 47, 248, 35, 137, 67, 108, 87, 61, 247, 128, 203, 81, 107, 52, 127, 197, 159, 168, 147, 121, 51, 220, 7, 237, 167, 112, 187, 1, 219, 228, 47, 181, 79, 24, 67, 41, 227, 140, 247, 93, 23, 32, 107, 241, 139, 84, 159, 101, 63, 200, 51, 153, 83, 124, 167, 13, 199, 144, 219, 161, 123, 4, 79, 210], [93, 104, 255, 200, 49, 143, 27, 58, 224, 34, 159, 68, 25, 114, 88, 138, 252, 182, 206, 24, 117, 12, 193, 181, 152, 162, 73, 12, 224, 55, 154, 178, 120, 129, 61, 252, 212, 16, 194, 58, 101, 66, 19, 195, 176, 192, 127, 33, 77, 113, 240, 172, 100, 171, 64, 5, 225, 25, 230, 84, 91, 149, 52, 231, 219, 231, 156, 69, 52, 110, 162, 156, 197, 144, 54, 112, 89, 100, 251], [130, 77, 130, 45, 22, 35, 35, 206, 164, 178, 143, 21, 20, 92, 252, 189, 210, 238, 75, 52, 246, 113, 222, 133, 52, 197, 24, 252, 200, 28, 173, 112, 54, 35, 81, 141, 246, 163, 39, 97, 57, 90, 247, 161, 140, 160, 87, 73, 193, 41, 182, 153, 79, 158, 36, 177, 249, 234, 143, 64, 110, 93, 26, 223, 135, 195, 96, 40, 86, 4, 201, 134, 99, 187, 94, 85, 190, 73, 158], [231, 178, 152, 98, 11, 118, 220, 150, 191, 234, 112, 10, 211, 30, 228, 190, 71, 178, 24, 210, 251, 38, 140, 70, 111, 90, 32, 250, 131, 206, 84, 110, 55, 98, 200, 130, 171, 150, 124, 54, 223, 10, 144, 170, 115, 190, 4, 222, 231, 210, 184, 114, 27, 70, 44, 230, 143, 250, 64, 26, 35, 110, 244, 142, 87, 130, 104, 34, 203, 54, 156, 86, 127, 170, 48, 202, 147, 222, 151], [204, 151, 76, 119, 160, 243, 145, 169, 97, 177, 33, 19, 205, 1, 249, 41, 28, 80, 8, 197, 160, 250, 98, 80, 68, 26, 181, 224, 216, 141, 76, 27, 248, 121, 215, 132, 0, 233, 113, 171, 12, 95, 168, 112, 44, 118, 89, 147, 252, 135, 55, 103, 32, 73, 206, 191, 113, 172, 65, 6, 247, 13, 233, 75, 77, 133, 57, 242, 174, 226, 159, 76, 116, 63, 165, 159, 200, 147, 72], [49, 252, 24, 44, 245, 32, 134, 64, 105, 84, 58, 244, 157, 200, 174, 104, 49, 124, 194, 156, 165, 144, 118, 48, 217, 4, 234, 164, 77, 184, 30, 216, 225, 44, 178, 76, 21, 64, 38, 224, 137, 244, 90, 20, 61, 104, 206, 136, 81, 156, 98, 60, 197, 48, 150, 80, 121, 164, 10, 196, 237, 216, 190, 120, 1, 76, 210, 236, 181, 224, 70, 0, 41, 20, 250, 180, 93, 136, 99], [65, 100, 5, 209, 171, 246, 144, 24, 45, 70, 250, 187, 145, 216, 80], [44, 67, 238, 182, 142, 217, 75, 119, 240, 33, 193, 156, 116, 135, 59], [174, 60, 208, 152, 121], [214, 4, 164, 121, 87, 99], [185, 225, 137, 92, 48, 78], [154, 206, 70, 119, 187]];
    function _verifyTapPromise_7c42(_slot) {
      const _row = _lengthFrame_7c42[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entriesState_7c42 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__entriesState_7c42 & 255) !== 122) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _entriesCheck_1fe = this.options.mode === _verifyTapPromise_7c42(-1582896615 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 1087)) || compiler.options.mode === _verifyTapPromise_7c42(476892288 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 11415));
    if (!_entriesCheck_1fe && this.options.mode !== _verifyTapPromise_7c42(-1062298189 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 28193))) {
      return;
    }
    const _shouldProcessAssetBank_1ed = _verifyTapPromise_7c42(944668464 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 29807));
    compiler.hooks.compilation.tap(_shouldProcessAssetBank_1ed, compilation => {
      function verifyProprietaryEnclaveContext_31fd(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:6b4e51d2-236c4353]",
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
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __nameState_31fd = verifyProprietaryEnclaveContext_31fd(1580090923, 98355071, 430817627, 377735293);
      function _reconcileKeystoreQuorum_rns_31fd(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 229,
          _r1 = _u % 227,
          _r2 = _u % 239,
          _r3 = _u % 197,
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
      if ((__nameState_31fd & 255) !== 212) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _certificateProof_482 = compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE ?? _verifySoltrixStudiosContext_vm_7c42([223, 211, 17582, 49, 16, 0, 223, 227, 23288, 138, 0, 0, 223, 211, 1151228074, 77, 0, 0]);
      compilation.hooks.processAssets.tapPromise({
        name: _shouldProcessAssetBank_1ed,
        stage: _certificateProof_482
      }, async assets => {
        function isolateTokenVector_7d22(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f7d150ed-62096b71]",
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
            throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
          }
          return _h;
        }
        const __tokenVector_7d22 = isolateTokenVector_7d22(1692446771, 1081194285, 125696493, 1924273337);
        function _auditTpmState_rns_7d22(_x, _s) {
          const _u = _x >>> 0,
            _r0 = _u % 251,
            _r1 = _u % 233,
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
        if ((__tokenVector_7d22 & 255) !== 32) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        const _tpmDigest_4ea = Object.entries(assets).filter(([pathname]) => this.shouldProcessAsset(pathname));
        if (_tpmDigest_4ea.length === _verifySoltrixStudiosContext_vm_7c42([223, 211, 24871, 49, 12, 0, 223, 227, 26346, 138, 0, 0, 223, 211, 101832196, 77, 0, 0])) {
          return;
        }
        if (!this.options.quiet && !SyferitWebpackPlugin.bannerPrinted) {
          SyferitWebpackPlugin.bannerPrinted = true;
          const preset = (this.options.preset ?? _verifyTapPromise_7c42(955251401 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 26327))).padEnd(_verifySoltrixStudiosContext_vm_7c42([223, 211, 27231, 49, 8, 0, 223, 227, 9382, 138, 0, 0, 223, 211, 6984536, 77, 0, 0]), ' ');
          const profile = (this.options.domainProfile ?? _verifyTapPromise_7c42(-504137990 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 24677))).padEnd(_verifySoltrixStudiosContext_vm_7c42([223, 211, 5372, 49, 12, 0, 223, 227, 8285, 138, 0, 0, 223, 211, 21815481, 77, 0, 0]), ' ');
          console.log(SYFERIT_BANNER);
          console.log(_verifyTapPromise_7c42(490190425 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 4617)));
          console.log(_verifyTapPromise_7c42(765859890 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 30697)));
          console.log(_verifyTapPromise_7c42(1220260969 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 32129)));
          console.log(_verifyTapPromise_7c42(1897297594 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 331)));
          console.log(`  ║  ▸ Preset  : ${preset}    │  ▸ Profile : ${profile}                ║`);
          console.log(_verifyTapPromise_7c42(1921403619 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 30191)));
          console.log(_verifyTapPromise_7c42(-559344986 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 26587)));
        }
        let _quietEnvelope_78e = -1250366091 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 2393);
        const _compilationProof_d0e = _tpmDigest_4ea.length;
        const _applyEnvelope_195 = Date.now();
        let _shouldProcessAssetBank_890 = -875308701 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 7367);
        for (const [pathname, asset] of _tpmDigest_4ea) {
          _quietEnvelope_78e++;
          const t0 = Date.now();
          try {
            const rawSource = asset.source();
            const sources = compiler.webpack?.sources ?? (await import(_verifyTapPromise_7c42(-452823343 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 7417)))).default ?? (await import(_verifyTapPromise_7c42(-439743812 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 14773))));
            const RawSource = sources.RawSource;
            if (pathname.endsWith(_verifyTapPromise_7c42(366532311 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 18025)))) {
              const buffer = Buffer.isBuffer(rawSource) ? new Uint8Array(rawSource) : typeof rawSource === _verifyTapPromise_7c42(-363921620 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 1787)) ? new TextEncoder().encode(rawSource) : new Uint8Array(rawSource.buffer || rawSource);
              const result = protectWasm(buffer, {
                seed: this.options.seed,
                domainProfile: this.options.domainProfile
              });
              if (result.sectionsProtected > (624572817 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 14763)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 99 | 1, (result.sectionsProtected | 0) ^ 99 | 1), Math.imul((result.sectionsProtected | 0) ^ 99 | 1, (result.sectionsProtected | 0) ^ 99 | 1)) & 15 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 31609) & 255) === 60) {
                _shouldProcessAssetBank_890++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_quietEnvelope_78e).padStart((18305 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 7439) & 65535) / (37158 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 7439) >>> 16 & 65535), '0')}/${String(_compilationProof_d0e).padStart((32453 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 11401) & 65535) / (796 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 11401) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              } else if (result.sectionsProtected > (-234959575 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 22309)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 126 | 1, (result.sectionsProtected | 0) ^ 126 | 1), Math.imul((result.sectionsProtected | 0) ^ 126 | 1, (result.sectionsProtected | 0) ^ 126 | 1)) & 15 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 6451) & 255) === 8) {
                _shouldProcessAssetBank_890++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_quietEnvelope_78e).padStart(-1490039225 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 26069), '0')}/${String(_compilationProof_d0e).padStart(626958571 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 6501), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              } else if (result.sectionsProtected > (-275350468 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 9531)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 50 | 1, (result.sectionsProtected | 0) ^ 50 | 1), Math.imul((result.sectionsProtected | 0) ^ 50 | 1, (result.sectionsProtected | 0) ^ 50 | 1)) & 15 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 31911) & 255) === 176) {
                _shouldProcessAssetBank_890++;
                compilation.updateAsset(pathname, new RawSource(Buffer.from(result.binary)));
                if (!this.options.quiet) {
                  console.log(`  [${String(_quietEnvelope_78e).padStart((27781 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 23955) & 65535) / (26138 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 23955) >>> 16 & 65535), '0')}/${String(_compilationProof_d0e).padStart((47667 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 7269) & 65535) / (55562 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 7269) >>> 16 & 65535), '0')}] 🛡️  WASM   → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
                }
              }
              continue;
            }
            const sourceCode = typeof rawSource === _verifyTapPromise_7c42(-1089544017 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 1539)) ? rawSource : rawSource.toString(_verifyTapPromise_7c42(-781825926 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 32171)));
            const result = this.engine.transform(sourceCode, pathname);
            if (result.transformedCount > (-275350477 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 9531)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 106 | 1, (result.transformedCount | 0) ^ 106 | 1), Math.imul((result.transformedCount | 0) ^ 106 | 1, (result.transformedCount | 0) ^ 106 | 1)) & 15 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 10025) & 255) === 128) {
              _shouldProcessAssetBank_890++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_quietEnvelope_78e).padStart((47029 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 25131) & 65535) / (11725 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 25131) >>> 16 & 65535), '0')}/${String(_compilationProof_d0e).padStart((44413 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 8919) & 65535) / (7389 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 8919) >>> 16 & 65535), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            } else if (result.transformedCount > (-931036251 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 1665)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 39 | 1, (result.transformedCount | 0) ^ 39 | 1), Math.imul((result.transformedCount | 0) ^ 39 | 1, (result.transformedCount | 0) ^ 39 | 1)) & 15 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 23623) & 255) === 148) {
              _shouldProcessAssetBank_890++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_quietEnvelope_78e).padStart(786655567 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 31467), '0')}/${String(_compilationProof_d0e).padStart(1451579643 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 347), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            } else if (result.transformedCount > (-389995392 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 12569)) && (Math.imul(Math.imul((result.transformedCount | 0) ^ 73 | 1, (result.transformedCount | 0) ^ 73 | 1), Math.imul((result.transformedCount | 0) ^ 73 | 1, (result.transformedCount | 0) ^ 73 | 1)) & 15 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 29405) & 255) === 68) {
              _shouldProcessAssetBank_890++;
              compilation.updateAsset(pathname, new RawSource(result.code));
              if (!this.options.quiet) {
                console.log(`  [${String(_quietEnvelope_78e).padStart((32179 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 24641) & 65535) / (19952 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 24641) >>> 16 & 65535), '0')}/${String(_compilationProof_d0e).padStart((46045 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 9437) & 65535) / (37963 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 9437) >>> 16 & 65535), '0')}] 🛡️  Chunk  → ${pathname} (Hardened | ${Date.now() - t0}ms)`);
              }
            }
          } catch (err) {
            compilation.errors.push(new Error(`[SyferitWebpackPlugin] Failed to protect asset "${pathname}": ${err.message}`));
          }
        }
        if (!this.options.quiet && _shouldProcessAssetBank_890 > (126201575 ^ _isolateCertificateCheck_rns_7c42(__entriesState_7c42, 23227))) {
          console.log(`  ✔ Syferit hardened ${_shouldProcessAssetBank_890}/${_compilationProof_d0e} bundler chunks in ${Date.now() - _applyEnvelope_195}ms\n`);
        }
      });
    });
  }
  matchesAssetFilter(filter, pathname) {
    function isolateBannerPrinted_a40c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a5c4a784-c3f97e0f]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __SyferitEngineState_a40c = isolateBannerPrinted_a40c(823316449, 393332677, 334236877, 1428767515);
    function _verifyProprietaryEnclaveContext_rns_a40c(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 199,
        _r1 = _u % 241,
        _r2 = _u % 229,
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
    const _presetEnvelope_a40c = [[113, 21, 107, 40, 243], [65, 238, 65, 10, 207, 70, 172, 147], [41, 174, 32, 235, 146, 36, 154, 75, 7, 141], [2, 145, 11, 218, 107, 30], [241, 101, 232, 135, 73, 242, 93, 25, 218], [200, 91, 177, 148, 33, 164], [131, 59, 133, 82, 24, 129, 29, 216, 107, 25, 79, 58, 238, 127]];
    function _isolateSyferitWebpackPlugin_a40c(_slot) {
      const _row = _presetEnvelope_a40c[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SyferitEngineState_a40c >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (typeof filter === _isolateSyferitWebpackPlugin_a40c(-1536318575 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 20397)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 102 | 1, ((filter.seats || filter | 0) | 0) ^ 102 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 102 | 1, ((filter.seats || filter | 0) | 0) ^ 102 | 1)) & 15 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 24073) & 255) === 140) {
      return filter(pathname);
    } else if (typeof filter === _isolateSyferitWebpackPlugin_a40c(817652270 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 2819)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 84 | 1, ((filter.seats || filter | 0) | 0) ^ 84 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 84 | 1, ((filter.seats || filter | 0) | 0) ^ 84 | 1)) & 15 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 30853) & 255) === 212) {
      return filter(pathname);
    } else if (typeof filter === _isolateSyferitWebpackPlugin_a40c(-1998720701 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 26399)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 72 | 1, ((filter.seats || filter | 0) | 0) ^ 72 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 72 | 1, ((filter.seats || filter | 0) | 0) ^ 72 | 1)) & 15 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 17759) & 255) === 152) {
      return filter(pathname);
    }
    if (Array.isArray(filter)) {
      return filter.some(item => typeof item === _isolateSyferitWebpackPlugin_a40c(-1033586910 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 29561)) ? pathname.includes(item) : item.test(pathname));
    }
    if (typeof filter === _isolateSyferitWebpackPlugin_a40c(-656940233 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 30135)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 102 | 1, ((filter.seats || filter | 0) | 0) ^ 102 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 102 | 1, ((filter.seats || filter | 0) | 0) ^ 102 | 1)) & 15 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 32199) & 255) === 88) {
      return pathname.includes(filter);
    } else if (typeof filter === _isolateSyferitWebpackPlugin_a40c(1105904456 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 31765)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 49 | 1, ((filter.seats || filter | 0) | 0) ^ 49 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 49 | 1, ((filter.seats || filter | 0) | 0) ^ 49 | 1)) & 15 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 547) & 255) === 120) {
      return pathname.includes(filter);
    } else if (typeof filter === _isolateSyferitWebpackPlugin_a40c(1955797013 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 961)) && (Math.imul(Math.imul(((filter.seats || filter | 0) | 0) ^ 23 | 1, ((filter.seats || filter | 0) | 0) ^ 23 | 1), Math.imul(((filter.seats || filter | 0) | 0) ^ 23 | 1, ((filter.seats || filter | 0) | 0) ^ 23 | 1)) & 15 ^ _verifyProprietaryEnclaveContext_rns_a40c(__SyferitEngineState_a40c, 12503) & 255) === 76) {
      return pathname.includes(filter);
    }
    return (__SyferitEngineState_a40c & 255) === 2 ? filter.test(pathname) : (() => {
      function auditFilter_ea7e(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:ab3f94b0-30201378]",
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
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __ProprietaryEnclaveQuorum_ea7e = auditFilter_ea7e(244931007, 739467049, 293831859, 959942299);
      function _sanitizeSignatureAttestation_rns_ea7e(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 199,
          _r1 = _u % 223,
          _r2 = _u % 233,
          _r3 = _u % 211,
          _r4 = _u % 227;
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
      if ((__ProprietaryEnclaveQuorum_ea7e & 255) !== 118) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  shouldProcessAsset(pathname) {
    function verifyTapPromise_ef46(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bc7cd818-88db6b4f]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __modeState_ef46 = verifyTapPromise_ef46(868555801, 566985777, 1826261437, 2067008017);
    function _auditShouldProcessAsset_rns_ef46(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 241,
        _r2 = _u % 251,
        _r3 = _u % 211,
        _r4 = _u % 227;
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
    return (__modeState_ef46 & 255) === 168 ? true : (() => {
      function sanitizeLength_ec1c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:66d55bae-29cd2a1d]",
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
      const __signatureAttestation_ec1c = sanitizeLength_ec1c(501081589, 282849175, 197236925, 2123288717);
      function _authenticateNonceDigest_rns_ec1c(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 223,
          _r1 = _u % 227,
          _r2 = _u % 233,
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
      if ((__signatureAttestation_ec1c & 255) !== 144) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
export default SyferitWebpackPlugin;
if (typeof window !== "undefined") {
  window.__syferitIPC_dcba && window.__syferitIPC_dcba.invoke && window.__syferitIPC_dcba.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 2112298928,
    channelSig: "SIG_FRAME_DCBA"
  });
}