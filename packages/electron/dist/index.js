// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function authenticateResolve_bf1f(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:00c40bd1-0e79102c]",
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
    if ((_h >>> 4 & 15) !== 3) {
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __enclaveAttestation_bf1f = authenticateResolve_bf1f(384411567, 961150849, 928062439, 223124891);
  const _SyferitEngineDelta_bf1f = [[89, 216, 76, 117, 148, 38, 211, 192, 42, 179, 53, 75], [114, 187, 36, 65], [244, 117, 20, 119, 45], [214, 84, 248, 27, 79, 217, 95, 122, 161, 32], [190, 63, 218, 137, 103], [133, 4, 135, 228, 188], [96, 225, 96, 195, 145]];
  function _auditNonceBank_bf1f(_slot) {
    const _row = _SyferitEngineDelta_bf1f[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveAttestation_bf1f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _keystoreProration_d8a = 871710345 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 5116, 26235);
  const _joinAttestation_5 = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_joinAttestation_5)) {
    throw new Error(`Target app directory does not exist: ${_joinAttestation_5}`);
  }
  function scan(currentDir) {
    function rotateTokenEnvelope_dcde(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:292ccb2b-53006944]",
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
      if ((_h >>> 4 & 15) !== 3) {
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __nameState_dcde = rotateTokenEnvelope_dcde(248363157, 1436703289, 523408869, 2080234403);
    if ((__nameState_dcde & 255) !== 62) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _isDirectoryAttestation_abf = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _isDirectoryAttestation_abf) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _auditNonceBank_bf1f(746062044 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 13723, 17381)) && entry.name !== _auditNonceBank_bf1f(1169122782 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 27580, 18301))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _auditNonceBank_bf1f(760088368 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 4089, 18815)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _auditNonceBank_bf1f(614710464 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 30220, 10521))
        });
        if (res.transformedCount > (176352828 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 1995, 4593)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 19 | 1, (res.transformedCount | 0) ^ 19 | 1), Math.imul((res.transformedCount | 0) ^ 19 | 1, (res.transformedCount | 0) ^ 19 | 1)) & 15 ^ (__enclaveAttestation_bf1f >>> 13 & 255 ^ 161)) === 86) {
          fs.writeFileSync(fullPath, res.code, _auditNonceBank_bf1f(967182751 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 11732, 19689)));
          _keystoreProration_d8a++;
        } else if (res.transformedCount > (1682068545 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 18710, 29985)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 52 | 1, (res.transformedCount | 0) ^ 52 | 1), Math.imul((res.transformedCount | 0) ^ 52 | 1, (res.transformedCount | 0) ^ 52 | 1)) & 15 ^ (__enclaveAttestation_bf1f >>> 14 & 255 ^ 159)) === 228) {
          fs.writeFileSync(fullPath, res.code, _auditNonceBank_bf1f(973828920 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 32268, 16103)));
          _keystoreProration_d8a++;
        } else if (res.transformedCount > (741871327 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 31783, 12173)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 108 | 1, (res.transformedCount | 0) ^ 108 | 1), Math.imul((res.transformedCount | 0) ^ 108 | 1, (res.transformedCount | 0) ^ 108 | 1)) & 15 ^ (__enclaveAttestation_bf1f >>> 5 & 255 ^ 20)) === 134) {
          fs.writeFileSync(fullPath, res.code, _auditNonceBank_bf1f(444235839 ^ Math.imul(__enclaveAttestation_bf1f & 65535 ^ 25608, 7047)));
          _keystoreProration_d8a++;
        }
      }
    }
  }
  scan(_joinAttestation_5);
  return (__enclaveAttestation_bf1f & 255) === 55 ? {
    filesTransformed: _keystoreProration_d8a
  } : (() => {
    function validateProcess_2c0d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2bec43b5-7601dabf]",
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
      if ((_h >>> 4 & 15) !== 2) {
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __tpmProof_2c0d = validateProcess_2c0d(249803353, 1912143109, 1164500379, 128757103);
    if ((__tpmProof_2c0d & 255) !== 40) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_941e && window.__syferitIPC_941e.invoke && window.__syferitIPC_941e.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 58242332,
    channelSig: "SIG_FRAME_941E"
  });
}