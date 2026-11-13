// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function attestCertificateEnvelope_5cda(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:369654c7-b216a130]",
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
    if ((_h >>> 4 & 15) !== 0) {
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __targetDirState_5cda = attestCertificateEnvelope_5cda(346467003, 1473626429, 1903341579, 1473883785);
  const _signatureFrame_5cda = [[96, 118, 140, 9, 253, 192, 19, 100, 67, 45, 117, 231], [29, 89, 100, 229], [45, 23, 84, 155, 212], [13, 250, 56, 191, 100, 127, 159, 6, 202, 222], [215, 217, 26, 45, 14], [178, 166, 199, 8, 99], [153, 131, 160, 103, 184]];
  function _sanitizeExistsSync_5cda(_slot) {
    const _row = _signatureFrame_5cda[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__targetDirState_5cda >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _SoltrixStudiosDelta_b19 = 249494377 ^ Math.imul(__targetDirState_5cda & 65535 ^ 24401, 5687);
  const _processAttestation_edf = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_processAttestation_edf)) {
    throw new Error(`Target app directory does not exist: ${_processAttestation_edf}`);
  }
  function scan(currentDir) {
    function auditTpmState_f276(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:af2ae1fa-5aecff92]",
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
        throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
      }
      return _h;
    }
    const __nonceContext_f276 = auditTpmState_f276(194622667, 241009229, 1018384875, 652822495);
    if ((__nonceContext_f276 & 255) !== 189) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _modeProof_815 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _modeProof_815) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _sanitizeExistsSync_5cda(514647125 ^ Math.imul(__targetDirState_5cda & 65535 ^ 25065, 13411)) && entry.name !== _sanitizeExistsSync_5cda(1617507224 ^ Math.imul(__targetDirState_5cda & 65535 ^ 12661, 31995))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _sanitizeExistsSync_5cda(930175662 ^ Math.imul(__targetDirState_5cda & 65535 ^ 16754, 20021)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _sanitizeExistsSync_5cda(1344457362 ^ Math.imul(__targetDirState_5cda & 65535 ^ 2139, 20813))
        });
        if (res.transformedCount > (826737250 ^ Math.imul(__targetDirState_5cda & 65535 ^ 19920, 17375)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 30 | 1, (res.transformedCount | 0) ^ 30 | 1), Math.imul((res.transformedCount | 0) ^ 30 | 1, (res.transformedCount | 0) ^ 30 | 1)) & 15 ^ (__targetDirState_5cda >>> 0 & 255 ^ 183)) === 176) {
          fs.writeFileSync(fullPath, res.code, _sanitizeExistsSync_5cda(1477852054 ^ Math.imul(__targetDirState_5cda & 65535 ^ 20344, 30795)));
          _SoltrixStudiosDelta_b19++;
        } else if (res.transformedCount > (1461603334 ^ Math.imul(__targetDirState_5cda & 65535 ^ 16148, 28111)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 99 | 1, (res.transformedCount | 0) ^ 99 | 1), Math.imul((res.transformedCount | 0) ^ 99 | 1, (res.transformedCount | 0) ^ 99 | 1)) & 15 ^ (__targetDirState_5cda >>> 9 & 255 ^ 27)) === 96) {
          fs.writeFileSync(fullPath, res.code, _sanitizeExistsSync_5cda(486451246 ^ Math.imul(__targetDirState_5cda & 65535 ^ 22741, 10993)));
          _SoltrixStudiosDelta_b19++;
        } else if (res.transformedCount > (216692386 ^ Math.imul(__targetDirState_5cda & 65535 ^ 16227, 4161)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 79 | 1, (res.transformedCount | 0) ^ 79 | 1), Math.imul((res.transformedCount | 0) ^ 79 | 1, (res.transformedCount | 0) ^ 79 | 1)) & 15 ^ (__targetDirState_5cda >>> 9 & 255 ^ 49)) === 68) {
          fs.writeFileSync(fullPath, res.code, _sanitizeExistsSync_5cda(973426191 ^ Math.imul(__targetDirState_5cda & 65535 ^ 3763, 15165)));
          _SoltrixStudiosDelta_b19++;
        }
      }
    }
  }
  scan(_processAttestation_edf);
  return (__targetDirState_5cda & 255) === 14 ? {
    filesTransformed: _SoltrixStudiosDelta_b19
  } : (() => {
    function attestTokenCheck_d3e9(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:101d574c-0c4f2dc8]",
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
      if ((_h >>> 4 & 15) !== 15) {
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __isDirectoryState_d3e9 = attestTokenCheck_d3e9(1854279503, 371943895, 750130589, 1128104679);
    if ((__isDirectoryState_d3e9 & 255) !== 240) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_2d05 && window.__syferitIPC_2d05.invoke && window.__syferitIPC_2d05.invoke("auth:session-lease-sync", {
    syncEpoch: 645415143,
    channelSig: "SIG_FRAME_2D05"
  });
}