// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function auditWriteFileSync_3de4(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:2e27a2cd-1ee4c317]",
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
  const __hardenIpcState_3de4 = auditWriteFileSync_3de4(1310206867, 126188629, 1332504423, 1415138293);
  function _authenticateEnclaveEnvelope_rns_3de4(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 211,
      _r2 = _u % 241,
      _r3 = _u % 199,
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
  function _attestTargetDir_vm_3de4(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 116) {
        _stk.push((__hardenIpcState_3de4 >>> 0) % _a ^ _b);
      } else if (_op === 190) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 63) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 85) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _electronIpcPoisoningBank_3de4 = [[9, 21, 143, 229, 164, 99, 16, 112, 250, 206, 118, 219], [162, 248, 121, 209], [196, 176, 83, 231, 125], [166, 155, 53, 139, 31, 30, 154, 234, 145, 127], [142, 122, 25, 57, 183], [85, 71, 194, 20, 140], [48, 44, 175, 115, 225]];
  function _verifySoltrixStudiosContext_3de4(_slot) {
    const _row = _electronIpcPoisoningBank_3de4[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__hardenIpcState_3de4 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _writeFileSyncDigest_9f7 = _attestTargetDir_vm_3de4([116, 223, 17560, 190, 8, 0, 116, 211, 15357, 85, 0, 0, 116, 223, 4494150, 63, 0, 0]);
  const _nonceScalar_423 = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_nonceScalar_423)) {
    throw new Error(`Target app directory does not exist: ${_nonceScalar_423}`);
  }
  function scan(currentDir) {
    function isolateWithFileTypes_931a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:121d8afb-f12468fb]",
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
    const __nameState_931a = isolateWithFileTypes_931a(871786603, 1976946185, 214200835, 862316199);
    function _verifyResolve_rns_931a(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 211,
        _r1 = _u % 223,
        _r2 = _u % 199,
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
    if ((__nameState_931a & 255) !== 4) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _entryEnvelope_104 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _entryEnvelope_104) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _verifySoltrixStudiosContext_3de4(832458591 ^ _authenticateEnclaveEnvelope_rns_3de4(__hardenIpcState_3de4, 12453)) && entry.name !== _verifySoltrixStudiosContext_3de4(-770096068 ^ _authenticateEnclaveEnvelope_rns_3de4(__hardenIpcState_3de4, 13555))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _verifySoltrixStudiosContext_3de4(-1254699087 ^ _authenticateEnclaveEnvelope_rns_3de4(__hardenIpcState_3de4, 9257)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _verifySoltrixStudiosContext_3de4(-1330024196 ^ _authenticateEnclaveEnvelope_rns_3de4(__hardenIpcState_3de4, 6449))
        });
        if (res.transformedCount > _attestTargetDir_vm_3de4([116, 223, 1356, 190, 16, 0, 116, 211, 3812, 85, 0, 0, 116, 223, 93064799, 63, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 64 | 1, (res.transformedCount | 0) ^ 64 | 1), Math.imul((res.transformedCount | 0) ^ 64 | 1, (res.transformedCount | 0) ^ 64 | 1)) & 15 ^ _authenticateEnclaveEnvelope_rns_3de4(__hardenIpcState_3de4, 6655) & 255) === 142) {
          fs.writeFileSync(fullPath, res.code, _verifySoltrixStudiosContext_3de4(-821916455 ^ _authenticateEnclaveEnvelope_rns_3de4(__hardenIpcState_3de4, 2695)));
          _writeFileSyncDigest_9f7++;
        } else if (res.transformedCount > _attestTargetDir_vm_3de4([116, 223, 5020, 190, 7, 0, 116, 211, 6755, 85, 0, 0, 116, 223, 641240, 63, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 112 | 1, (res.transformedCount | 0) ^ 112 | 1), Math.imul((res.transformedCount | 0) ^ 112 | 1, (res.transformedCount | 0) ^ 112 | 1)) & 15 ^ _authenticateEnclaveEnvelope_rns_3de4(__hardenIpcState_3de4, 1005) & 255) === 24) {
          fs.writeFileSync(fullPath, res.code, _verifySoltrixStudiosContext_3de4(-1532601056 ^ _authenticateEnclaveEnvelope_rns_3de4(__hardenIpcState_3de4, 18553)));
          _writeFileSyncDigest_9f7++;
        } else if (res.transformedCount > _attestTargetDir_vm_3de4([116, 223, 17274, 190, 16, 0, 116, 211, 16741, 85, 0, 0, 116, 223, 1136280017, 63, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 66 | 1, (res.transformedCount | 0) ^ 66 | 1), Math.imul((res.transformedCount | 0) ^ 66 | 1, (res.transformedCount | 0) ^ 66 | 1)) & 15 ^ _authenticateEnclaveEnvelope_rns_3de4(__hardenIpcState_3de4, 13583) & 255) === 202) {
          fs.writeFileSync(fullPath, res.code, _verifySoltrixStudiosContext_3de4(155234801 ^ _authenticateEnclaveEnvelope_rns_3de4(__hardenIpcState_3de4, 10271)));
          _writeFileSyncDigest_9f7++;
        }
      }
    }
  }
  scan(_nonceScalar_423);
  return (__hardenIpcState_3de4 & 255) === 103 ? {
    filesTransformed: _writeFileSyncDigest_9f7
  } : (() => {
    function sanitizePath_ae63(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:38bad3aa-05b5a5b5]",
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
    const __testState_ae63 = sanitizePath_ae63(1425054029, 2138018573, 937748091, 1768944633);
    function _isolateName_rns_ae63(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 233,
        _r2 = _u % 239,
        _r3 = _u % 229,
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
    if ((__testState_ae63 & 255) !== 116) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_f888 && window.__syferitIPC_f888.invoke && window.__syferitIPC_f888.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 581966193,
    channelSig: "SIG_FRAME_F888"
  });
}