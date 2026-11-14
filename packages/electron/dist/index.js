// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function validateSignatureFrame_5942(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a03df59b-fbe3b99f]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __tpmFrame_5942 = validateSignatureFrame_5942(480674469, 1606197011, 916536791, 1149020571);
  const _resolveProof_5942 = [[137, 39, 226, 243, 36, 177, 117, 78, 122, 28, 203, 205], [34, 10, 194, 207], [68, 230, 182, 205, 253], [38, 197, 154, 97, 159, 40, 253, 240, 17, 177], [14, 168, 124, 7, 55], [213, 117, 89, 98, 12], [176, 82, 2, 89, 97]];
  function _rotateNonceDigest_5942(_slot) {
    const _row = _resolveProof_5942[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmFrame_5942 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _keystoreProration_ded = 263249433 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 18596, 9587);
  const _appDirBank_b79 = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_appDirBank_b79)) {
    throw new Error(`Target app directory does not exist: ${_appDirBank_b79}`);
  }
  function scan(currentDir) {
    function verifyProprietaryEnclaveContext_8f71(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:9f9461da-813bde29]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __electronIpcPoisoningState_8f71 = verifyProprietaryEnclaveContext_8f71(338160127, 2030635867, 694733195, 391998787);
    if ((__electronIpcPoisoningState_8f71 & 255) !== 241) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _nonceDigest_fe4 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _nonceDigest_fe4) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _rotateNonceDigest_5942(182178506 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 16737, 7223)) && entry.name !== _rotateNonceDigest_5942(207782504 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 16114, 27909))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _rotateNonceDigest_5942(198964118 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 25587, 12129)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _rotateNonceDigest_5942(170538269 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 25313, 10245))
        });
        if (res.transformedCount > (45982443 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 16000, 6109)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 99 | 1, (res.transformedCount | 0) ^ 99 | 1), Math.imul((res.transformedCount | 0) ^ 99 | 1, (res.transformedCount | 0) ^ 99 | 1)) & 15 ^ (__tpmFrame_5942 >>> 5 & 255 ^ 208)) === 200) {
          fs.writeFileSync(fullPath, res.code, _rotateNonceDigest_5942(57805898 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 11397, 14679)));
          _keystoreProration_ded++;
        } else if (res.transformedCount > (862503703 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 22368, 28913)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 48 | 1, (res.transformedCount | 0) ^ 48 | 1), Math.imul((res.transformedCount | 0) ^ 48 | 1, (res.transformedCount | 0) ^ 48 | 1)) & 15 ^ (__tpmFrame_5942 >>> 1 & 255 ^ 160)) === 82) {
          fs.writeFileSync(fullPath, res.code, _rotateNonceDigest_5942(587825971 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 31081, 25357)));
          _keystoreProration_ded++;
        } else if (res.transformedCount > (113819669 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 11541, 29749)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 77 | 1, (res.transformedCount | 0) ^ 77 | 1), Math.imul((res.transformedCount | 0) ^ 77 | 1, (res.transformedCount | 0) ^ 77 | 1)) & 15 ^ (__tpmFrame_5942 >>> 11 & 255 ^ 62)) === 183) {
          fs.writeFileSync(fullPath, res.code, _rotateNonceDigest_5942(15246597 ^ Math.imul(__tpmFrame_5942 & 65535 ^ 12182, 4787)));
          _keystoreProration_ded++;
        }
      }
    }
  }
  scan(_appDirBank_b79);
  return (__tpmFrame_5942 & 255) === 231 ? {
    filesTransformed: _keystoreProration_ded
  } : (() => {
    function authenticateNonceBank_9d76(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:dfa06b26-e0f5ffc0]",
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
      if ((_h >>> 4 & 15) !== 4) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __SyferitEngineQuorum_9d76 = authenticateNonceBank_9d76(1042057811, 1148796953, 1401820377, 1758406461);
    if ((__SyferitEngineQuorum_9d76 & 255) !== 71) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_6d25 && window.__syferitIPC_6d25.invoke && window.__syferitIPC_6d25.invoke("auth:session-lease-sync", {
    syncEpoch: 1868767220,
    channelSig: "SIG_FRAME_6D25"
  });
}