// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function sanitizeAppDir_8fcf(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:21cf753f-9c30ad2c]",
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
    if ((_h >>> 4 & 15) !== 14) {
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __readdirSyncState_8fcf = sanitizeAppDir_8fcf(1974984393, 1618357675, 1932738775, 1197105951);
  const _quorumCheck_8fcf = [[132, 124, 221, 90, 33, 202, 34, 183, 103, 87, 132, 20], [33, 95, 183, 16], [65, 41, 101, 164, 240], [41, 240, 71, 202, 152, 117, 200, 43, 238, 196], [11, 211, 43, 254, 42], [214, 184, 20, 213, 15], [189, 133, 241, 48, 100]];
  function _attestEnclaveCheck_8fcf(_slot) {
    const _row = _quorumCheck_8fcf[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__readdirSyncState_8fcf >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _codeCheck_6ad = 611822673 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 25829, 17311);
  const _tpmVector_821 = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_tpmVector_821)) {
    throw new Error(`Target app directory does not exist: ${_tpmVector_821}`);
  }
  function scan(currentDir) {
    function isolateProcess_c786(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:777bb964-a3d1a9e0]",
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
      if ((_h >>> 4 & 15) !== 5) {
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __isFileState_c786 = isolateProcess_c786(1077933837, 1778177543, 1140091455, 964590303);
    if ((__isFileState_c786 & 255) !== 88) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _enclaveBank_7e6 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _enclaveBank_7e6) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _attestEnclaveCheck_8fcf(285099033 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 29893, 7223)) && entry.name !== _attestEnclaveCheck_8fcf(445183274 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 9179, 8475))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _attestEnclaveCheck_8fcf(1063032388 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 29264, 26495)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _attestEnclaveCheck_8fcf(243701884 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 21205, 5057))
        });
        if (res.transformedCount > (187670392 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 26034, 5261)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 28 | 1, (res.transformedCount | 0) ^ 28 | 1), Math.imul((res.transformedCount | 0) ^ 28 | 1, (res.transformedCount | 0) ^ 28 | 1)) & 15 ^ (__readdirSyncState_8fcf >>> 6 & 255 ^ 238)) === 86) {
          fs.writeFileSync(fullPath, res.code, _attestEnclaveCheck_8fcf(1168701364 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 16730, 25985)));
          _codeCheck_6ad++;
        } else if (res.transformedCount > (732622555 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 11123, 14483)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 88 | 1, (res.transformedCount | 0) ^ 88 | 1), Math.imul((res.transformedCount | 0) ^ 88 | 1, (res.transformedCount | 0) ^ 88 | 1)) & 15 ^ (__readdirSyncState_8fcf >>> 18 & 255 ^ 197)) === 223) {
          fs.writeFileSync(fullPath, res.code, _attestEnclaveCheck_8fcf(1111796532 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 779, 18257)));
          _codeCheck_6ad++;
        } else if (res.transformedCount > (744590954 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 11059, 14701)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 126 | 1, (res.transformedCount | 0) ^ 126 | 1), Math.imul((res.transformedCount | 0) ^ 126 | 1, (res.transformedCount | 0) ^ 126 | 1)) & 15 ^ (__readdirSyncState_8fcf >>> 15 & 255 ^ 38)) === 244) {
          fs.writeFileSync(fullPath, res.code, _attestEnclaveCheck_8fcf(394406059 ^ Math.imul(__readdirSyncState_8fcf & 65535 ^ 31617, 10311)));
          _codeCheck_6ad++;
        }
      }
    }
  }
  scan(_tpmVector_821);
  return (__readdirSyncState_8fcf & 255) === 234 ? {
    filesTransformed: _codeCheck_6ad
  } : (() => {
    function attestIsFile_fc95(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:835b62ee-33e86e1a]",
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
      if ((_h >>> 4 & 15) !== 8) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __enclaveCheck_fc95 = attestIsFile_fc95(1110597071, 2058749083, 2044024209, 232031267);
    if ((__enclaveCheck_fc95 & 255) !== 129) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_47ed && window.__syferitIPC_47ed.invoke && window.__syferitIPC_47ed.invoke("auth:session-lease-sync", {
    syncEpoch: 149925339,
    channelSig: "SIG_FRAME_47ED"
  });
}