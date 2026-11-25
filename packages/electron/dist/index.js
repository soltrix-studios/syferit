// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function sanitizeSignatureAttestation_ad95(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3faad63b-eb1bd251]",
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
  const __protectElectronAppState_ad95 = sanitizeSignatureAttestation_ad95(1339424747, 1612214851, 287324641, 108647557);
  function _rotateTokenAttestation_rns_ad95(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 227,
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
  function _validateQuorumDigest_vm_ad95(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 30) {
        _stk.push((__protectElectronAppState_ad95 >>> 0) % _a ^ _b);
      } else if (_op === 94) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 209) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 121) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  let _filesTransformedFrame_46b = _validateQuorumDigest_vm_ad95([30, 241, 31915, 94, 12, 0, 30, 227, 19337, 121, 0, 0, 30, 241, 131017479, 209, 0, 0]);
  const _SyferitEngineDelta_927 = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_SyferitEngineDelta_927)) {
    throw new Error(`Target app directory does not exist: ${_SyferitEngineDelta_927}`);
  }
  function scan(currentDir) {
    function auditTest_d9ce(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c9eccdbc-0d5d0d0d]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __tpmVector_d9ce = auditTest_d9ce(1138891761, 1423537687, 15804365, 51427649);
    function _authenticateSignatureBank_rns_d9ce(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 251,
        _r1 = _u % 223,
        _r2 = _u % 199,
        _r3 = _u % 233,
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
    function _rotateCertificateProof_vm_d9ce(_bc) {
      const _stk = [];
      for (let _pc = 0; _pc < _bc.length; _pc += 3) {
        const _op = _bc[_pc],
          _a = _bc[_pc + 1],
          _b = _bc[_pc + 2];
        if (_op === 157) {
          _stk.push((__tpmVector_d9ce >>> 0) % _a ^ _b);
        } else if (_op === 27) {
          const _v = _stk.pop() >>> 0;
          _stk.push(_v << _a | _v >>> 32 - _a);
        } else if (_op === 72) {
          const _r = _stk.pop(),
            _l = _stk.pop();
          _stk.push(_l ^ _r);
        } else if (_op === 191) {
          const _r2 = _stk.pop(),
            _l2 = _stk.pop();
          _stk.push(_l2 + _r2 | 0);
        }
      }
      return _stk[0];
    }
    const _entryBank_d9ce = [[104, 57, 94, 10, 197, 135, 161, 103, 91, 18, 7, 228], [5, 28, 54, 224], [37, 212, 226, 148, 220], [5, 183, 198, 186, 124, 58, 73, 27, 242, 131], [239, 158, 168, 46, 22], [202, 123, 149, 5, 107], [145, 64, 126, 96, 64]];
    function _authenticateSignatureBank_d9ce(_slot) {
      const _row = _entryBank_d9ce[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmVector_d9ce >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__tpmVector_d9ce & 255) !== 6) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _entriesCheck_cfd = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _entriesCheck_cfd) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _authenticateSignatureBank_d9ce(535910301 ^ _authenticateSignatureBank_rns_d9ce(__tpmVector_d9ce, 10389)) && entry.name !== _authenticateSignatureBank_d9ce(-1809155384 ^ _authenticateSignatureBank_rns_d9ce(__tpmVector_d9ce, 1041))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _authenticateSignatureBank_d9ce(803258547 ^ _authenticateSignatureBank_rns_d9ce(__tpmVector_d9ce, 27739)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _authenticateSignatureBank_d9ce(1183844170 ^ _authenticateSignatureBank_rns_d9ce(__tpmVector_d9ce, 10779))
        });
        if (res.transformedCount > _rotateCertificateProof_vm_d9ce([157, 251, 9201, 27, 12, 0, 157, 223, 31108, 191, 0, 0, 157, 251, 36804901, 72, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 124 | 1, (res.transformedCount | 0) ^ 124 | 1), Math.imul((res.transformedCount | 0) ^ 124 | 1, (res.transformedCount | 0) ^ 124 | 1)) & 15 ^ _authenticateSignatureBank_rns_d9ce(__tpmVector_d9ce, 20703) & 255) === 218) {
          fs.writeFileSync(fullPath, res.code, _authenticateSignatureBank_d9ce(-1888442511 ^ _authenticateSignatureBank_rns_d9ce(__tpmVector_d9ce, 19027)));
          _filesTransformedFrame_46b++;
        } else if (res.transformedCount > _rotateCertificateProof_vm_d9ce([157, 251, 1141, 27, 16, 0, 157, 223, 9810, 191, 0, 0, 157, 251, 76949235, 72, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 31 | 1, (res.transformedCount | 0) ^ 31 | 1), Math.imul((res.transformedCount | 0) ^ 31 | 1, (res.transformedCount | 0) ^ 31 | 1)) & 15 ^ _authenticateSignatureBank_rns_d9ce(__tpmVector_d9ce, 20413) & 255) === 90) {
          fs.writeFileSync(fullPath, res.code, _authenticateSignatureBank_d9ce(-211279828 ^ _authenticateSignatureBank_rns_d9ce(__tpmVector_d9ce, 24151)));
          _filesTransformedFrame_46b++;
        } else if (res.transformedCount > _rotateCertificateProof_vm_d9ce([157, 251, 10716, 27, 7, 0, 157, 223, 14558, 191, 0, 0, 157, 251, 1366256, 72, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 93 | 1, (res.transformedCount | 0) ^ 93 | 1), Math.imul((res.transformedCount | 0) ^ 93 | 1, (res.transformedCount | 0) ^ 93 | 1)) & 15 ^ _authenticateSignatureBank_rns_d9ce(__tpmVector_d9ce, 7123) & 255) === 82) {
          fs.writeFileSync(fullPath, res.code, _authenticateSignatureBank_d9ce(881499895 ^ _authenticateSignatureBank_rns_d9ce(__tpmVector_d9ce, 11825)));
          _filesTransformedFrame_46b++;
        }
      }
    }
  }
  scan(_SyferitEngineDelta_927);
  return (__protectElectronAppState_ad95 & 255) === 147 ? {
    filesTransformed: _filesTransformedFrame_46b
  } : (() => {
    function verifyEnclaveAttestation_b30a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:526bece2-042757ac]",
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
      if ((_h >>> 4 & 15) !== 6) {
        _h = (_h ^ 3735884599) >>> 0;
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __optionsState_b30a = verifyEnclaveAttestation_b30a(1660832037, 1577465165, 904797621, 821436227);
    function _isolateIsFile_rns_b30a(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 227,
        _r2 = _u % 223,
        _r3 = _u % 199,
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
    if ((__optionsState_b30a & 255) !== 100) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_8af7 && window.__syferitIPC_8af7.invoke && window.__syferitIPC_8af7.invoke("system:keystore-attestation", {
    syncEpoch: 1355580558,
    channelSig: "SIG_FRAME_8AF7"
  });
}