// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function authenticateEnclaveFrame_1d6b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:10fae65f-fe4d9769]",
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
  const __isFileState_1d6b = authenticateEnclaveFrame_1d6b(1797374039, 1831725669, 1736758043, 1084834139);
  function _auditTest_rns_1d6b(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 197,
      _r2 = _u % 241,
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
  function _auditTpmState_vm_1d6b(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 179) {
        _stk.push((__isFileState_1d6b >>> 0) % _a ^ _b);
      } else if (_op === 119) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 96) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 39) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _signatureFrame_1d6b = [[25, 64, 76, 173, 84, 174, 211, 56, 234, 59, 53, 131], [178, 51, 36, 153], [180, 13, 20, 63, 109], [150, 236, 248, 83, 15, 81, 95, 162, 97, 168], [126, 183, 218, 113, 167], [69, 156, 135, 172, 252], [32, 121, 96, 139, 209]];
  function _rotateEnclaveCheck_1d6b(_slot) {
    const _row = _signatureFrame_1d6b[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__isFileState_1d6b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _scanEnvelope_5bb = _auditTpmState_vm_1d6b([179, 227, 24059, 119, 16, 0, 179, 197, 13133, 39, 0, 0, 179, 227, 1570059192, 96, 0, 0]);
  const _entryEnvelope_2e3 = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_entryEnvelope_2e3)) {
    throw new Error(`Target app directory does not exist: ${_entryEnvelope_2e3}`);
  }
  function scan(currentDir) {
    function rotateEnclaveCheck_d77c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d8a9f952-574b7c67]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __filesTransformedState_d77c = rotateEnclaveCheck_d77c(1123779313, 564778301, 1286899759, 338398417);
    function _sanitizeName_rns_d77c(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 239,
        _r2 = _u % 197,
        _r3 = _u % 233,
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
    if ((__filesTransformedState_d77c & 255) !== 3) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _isFileVector_910 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _isFileVector_910) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _rotateEnclaveCheck_1d6b(1217180179 ^ _auditTest_rns_1d6b(__isFileState_1d6b, 3417)) && entry.name !== _rotateEnclaveCheck_1d6b(-38157436 ^ _auditTest_rns_1d6b(__isFileState_1d6b, 27273))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _rotateEnclaveCheck_1d6b(933854101 ^ _auditTest_rns_1d6b(__isFileState_1d6b, 7607)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _rotateEnclaveCheck_1d6b(-1572270640 ^ _auditTest_rns_1d6b(__isFileState_1d6b, 10861))
        });
        if (res.transformedCount > _auditTpmState_vm_1d6b([179, 227, 18477, 119, 16, 0, 179, 197, 6478, 39, 0, 0, 179, 227, 1212357051, 96, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 106 | 1, (res.transformedCount | 0) ^ 106 | 1), Math.imul((res.transformedCount | 0) ^ 106 | 1, (res.transformedCount | 0) ^ 106 | 1)) & 15 ^ _auditTest_rns_1d6b(__isFileState_1d6b, 6103) & 255) === 206) {
          fs.writeFileSync(fullPath, res.code, _rotateEnclaveCheck_1d6b(821675903 ^ _auditTest_rns_1d6b(__isFileState_1d6b, 18173)));
          _scanEnvelope_5bb++;
        } else if (res.transformedCount > _auditTpmState_vm_1d6b([179, 227, 31746, 119, 7, 0, 179, 197, 17836, 39, 0, 0, 179, 227, 4094809, 96, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 64 | 1, (res.transformedCount | 0) ^ 64 | 1), Math.imul((res.transformedCount | 0) ^ 64 | 1, (res.transformedCount | 0) ^ 64 | 1)) & 15 ^ _auditTest_rns_1d6b(__isFileState_1d6b, 30561) & 255) === 38) {
          fs.writeFileSync(fullPath, res.code, _rotateEnclaveCheck_1d6b(-1838589866 ^ _auditTest_rns_1d6b(__isFileState_1d6b, 14287)));
          _scanEnvelope_5bb++;
        } else if (res.transformedCount > _auditTpmState_vm_1d6b([179, 227, 24797, 119, 12, 0, 179, 197, 3796, 39, 0, 0, 179, 227, 101400110, 96, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 83 | 1, (res.transformedCount | 0) ^ 83 | 1), Math.imul((res.transformedCount | 0) ^ 83 | 1, (res.transformedCount | 0) ^ 83 | 1)) & 15 ^ _auditTest_rns_1d6b(__isFileState_1d6b, 2467) & 255) === 64) {
          fs.writeFileSync(fullPath, res.code, _rotateEnclaveCheck_1d6b(-58512473 ^ _auditTest_rns_1d6b(__isFileState_1d6b, 20165)));
          _scanEnvelope_5bb++;
        }
      }
    }
  }
  scan(_entryEnvelope_2e3);
  return (__isFileState_1d6b & 255) === 119 ? {
    filesTransformed: _scanEnvelope_5bb
  } : (() => {
    function authenticateIsDirectory_5acb(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:75cf6ba6-bcdc3fc4]",
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
    const __pathState_5acb = authenticateIsDirectory_5acb(483243951, 469830201, 2100554313, 842985617);
    function _verifyResolve_rns_5acb(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 233,
        _r1 = _u % 239,
        _r2 = _u % 211,
        _r3 = _u % 241,
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
    if ((__pathState_5acb & 255) !== 77) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_7fa9 && window.__syferitIPC_7fa9.invoke && window.__syferitIPC_7fa9.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 593238017,
    channelSig: "SIG_FRAME_7FA9"
  });
}