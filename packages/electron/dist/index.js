// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function attestCode_1c87(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:88615e1a-5a35d47b]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __keystoreQuorum_1c87 = attestCode_1c87(736163117, 173097871, 235636549, 869726019);
  function _isolateQuorumEnvelope_rns_1c87(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 199,
      _r2 = _u % 223,
      _r3 = _u % 239,
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
  function _isolateTargetDir_vm_1c87(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 96) {
        _stk.push((__keystoreQuorum_1c87 >>> 0) % _a ^ _b);
      } else if (_op === 122) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 209) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 50) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _keystoreProof_1c87 = [[157, 125, 163, 17, 216, 203, 52, 108, 110, 86, 138, 239], [54, 80, 133, 237], [72, 40, 119, 147, 233], [18, 243, 89, 135, 131, 118, 190, 30, 229, 199], [242, 210, 61, 37, 35], [217, 191, 230, 0, 120], [164, 132, 195, 127, 93]];
  function _attestKeystoreDigest_1c87(_slot) {
    const _row = _keystoreProof_1c87[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreQuorum_1c87 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _electronIpcPoisoningProof_562 = _isolateTargetDir_vm_1c87([96, 233, 19488, 122, 16, 0, 96, 199, 25593, 50, 0, 0, 96, 233, 1282237361, 209, 0, 0]);
  const _signatureCheck_14f = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_signatureCheck_14f)) {
    throw new Error(`Target app directory does not exist: ${_signatureCheck_14f}`);
  }
  function scan(currentDir) {
    function auditProtect_16fa(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bb7afe2f-90cf827e]",
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
    const __keystoreQuorum_16fa = auditProtect_16fa(177788739, 1215605661, 1740321867, 1428308241);
    function _sanitizeReadFileSync_rns_16fa(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 223,
        _r1 = _u % 229,
        _r2 = _u % 251,
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
    if ((__keystoreQuorum_16fa & 255) !== 146) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _targetDirCheck_3d6 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _targetDirCheck_3d6) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _attestKeystoreDigest_1c87(1711254973 ^ _isolateQuorumEnvelope_rns_1c87(__keystoreQuorum_1c87, 23985)) && entry.name !== _attestKeystoreDigest_1c87(1205754488 ^ _isolateQuorumEnvelope_rns_1c87(__keystoreQuorum_1c87, 24615))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _attestKeystoreDigest_1c87(1388005675 ^ _isolateQuorumEnvelope_rns_1c87(__keystoreQuorum_1c87, 22935)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _attestKeystoreDigest_1c87(604599112 ^ _isolateQuorumEnvelope_rns_1c87(__keystoreQuorum_1c87, 23265))
        });
        if (res.transformedCount > _isolateTargetDir_vm_1c87([96, 233, 12234, 122, 16, 0, 96, 199, 20634, 50, 0, 0, 96, 233, 797397202, 209, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 28 | 1, (res.transformedCount | 0) ^ 28 | 1), Math.imul((res.transformedCount | 0) ^ 28 | 1, (res.transformedCount | 0) ^ 28 | 1)) & 15 ^ _isolateQuorumEnvelope_rns_1c87(__keystoreQuorum_1c87, 9781) & 255) === 212) {
          fs.writeFileSync(fullPath, res.code, _attestKeystoreDigest_1c87(-872856921 ^ _isolateQuorumEnvelope_rns_1c87(__keystoreQuorum_1c87, 13339)));
          _electronIpcPoisoningProof_562++;
        } else if (res.transformedCount > _isolateTargetDir_vm_1c87([96, 233, 15396, 122, 16, 0, 96, 199, 4574, 50, 0, 0, 96, 233, 1013518742, 209, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 20 | 1, (res.transformedCount | 0) ^ 20 | 1), Math.imul((res.transformedCount | 0) ^ 20 | 1, (res.transformedCount | 0) ^ 20 | 1)) & 15 ^ _isolateQuorumEnvelope_rns_1c87(__keystoreQuorum_1c87, 24733) & 255) === 160) {
          fs.writeFileSync(fullPath, res.code, _attestKeystoreDigest_1c87(-822973280 ^ _isolateQuorumEnvelope_rns_1c87(__keystoreQuorum_1c87, 22091)));
          _electronIpcPoisoningProof_562++;
        } else if (res.transformedCount > _isolateTargetDir_vm_1c87([96, 233, 2908, 122, 8, 0, 96, 199, 24763, 50, 0, 0, 96, 233, 750076, 209, 0, 0]) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 56 | 1, (res.transformedCount | 0) ^ 56 | 1), Math.imul((res.transformedCount | 0) ^ 56 | 1, (res.transformedCount | 0) ^ 56 | 1)) & 15 ^ _isolateQuorumEnvelope_rns_1c87(__keystoreQuorum_1c87, 8529) & 255) === 84) {
          fs.writeFileSync(fullPath, res.code, _attestKeystoreDigest_1c87(267472563 ^ _isolateQuorumEnvelope_rns_1c87(__keystoreQuorum_1c87, 12253)));
          _electronIpcPoisoningProof_562++;
        }
      }
    }
  }
  scan(_signatureCheck_14f);
  return (__keystoreQuorum_1c87 & 255) === 243 ? {
    filesTransformed: _electronIpcPoisoningProof_562
  } : (() => {
    function validateEntries_cdbd(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:871a684a-58bf0d34]",
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
    const __transformedCountState_cdbd = validateEntries_cdbd(619314793, 1724719415, 2036719317, 1605961803);
    function _verifySyferitEngineContext_rns_cdbd(_x, _s) {
      const _u = _x >>> 0,
        _r0 = _u % 241,
        _r1 = _u % 229,
        _r2 = _u % 199,
        _r3 = _u % 223,
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
    if ((__transformedCountState_cdbd & 255) !== 69) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_2ea && window.__syferitIPC_2ea.invoke && window.__syferitIPC_2ea.invoke("license:quorum-token-refresh", {
    syncEpoch: 1835088431,
    channelSig: "SIG_FRAME_2EA"
  });
}