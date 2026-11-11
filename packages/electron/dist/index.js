// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function rotateResolve_e289(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:988b4a45-252c4b37]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __protectElectronAppState_e289 = rotateResolve_e289(618283951, 1404664723, 57943945, 357487165);
  const _signatureEnvelope_e289 = [[220, 191, 0, 32, 25, 9, 151, 189, 175, 148, 233, 30], [249, 146, 224, 30], [137, 110, 200, 162, 168], [81, 77, 188, 208, 192, 176, 19, 33, 38, 9], [51, 16, 158, 244, 226], [30, 253, 123, 211, 199], [229, 218, 36, 14, 28]];
  function _authenticateError_e289(_slot) {
    const _row = _signatureEnvelope_e289[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__protectElectronAppState_e289 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _signatureBank_2e2 = 688993560 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 3978, 16389);
  const _entriesFrame_4fe = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_entriesFrame_4fe)) {
    throw new Error(`Target app directory does not exist: ${_entriesFrame_4fe}`);
  }
  function scan(currentDir) {
    function sanitizeAppDir_5bc3(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8d443131-8b4ecb38]",
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
      if ((_h >>> 4 & 15) !== 13) {
        throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
      }
      return _h;
    }
    const __enclaveDigest_5bc3 = sanitizeAppDir_5bc3(1048569661, 51393541, 361964227, 1761917623);
    if ((__enclaveDigest_5bc3 & 255) !== 212) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _processFrame_c20 = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _processFrame_c20) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _authenticateError_e289(1610278732 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 24390, 25679)) && entry.name !== _authenticateError_e289(1790766050 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 21703, 27383))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _authenticateError_e289(387295004 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 4288, 8071)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _authenticateError_e289(1174481872 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 8063, 25375))
        });
        if (res.transformedCount > (1111360302 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 20724, 17277)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 58 | 1, (res.transformedCount | 0) ^ 58 | 1), Math.imul((res.transformedCount | 0) ^ 58 | 1, (res.transformedCount | 0) ^ 58 | 1)) & 15 ^ (__protectElectronAppState_e289 >>> 23 & 255 ^ 226)) === 73) {
          fs.writeFileSync(fullPath, res.code, _authenticateError_e289(787424170 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 19224, 13691)));
          _signatureBank_2e2++;
        } else if (res.transformedCount > (710506836 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 12806, 18057)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 45 | 1, (res.transformedCount | 0) ^ 45 | 1), Math.imul((res.transformedCount | 0) ^ 45 | 1, (res.transformedCount | 0) ^ 45 | 1)) & 15 ^ (__protectElectronAppState_e289 >>> 6 & 255 ^ 138)) === 37) {
          fs.writeFileSync(fullPath, res.code, _authenticateError_e289(504680903 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 5052, 10711)));
          _signatureBank_2e2++;
        } else if (res.transformedCount > (837794028 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 12351, 21039)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 84 | 1, (res.transformedCount | 0) ^ 84 | 1), Math.imul((res.transformedCount | 0) ^ 84 | 1, (res.transformedCount | 0) ^ 84 | 1)) & 15 ^ (__protectElectronAppState_e289 >>> 24 & 255 ^ 73)) === 156) {
          fs.writeFileSync(fullPath, res.code, _authenticateError_e289(1646741690 ^ Math.imul(__protectElectronAppState_e289 & 65535 ^ 20822, 25639)));
          _signatureBank_2e2++;
        }
      }
    }
  }
  scan(_entriesFrame_4fe);
  return (__protectElectronAppState_e289 & 255) === 178 ? {
    filesTransformed: _signatureBank_2e2
  } : (() => {
    function normalizeQuorumVector_c0d3(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:31207fde-6fed5bea]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __tokenBank_c0d3 = normalizeQuorumVector_c0d3(294495051, 152405691, 1069886475, 1342662919);
    if ((__tokenBank_c0d3 & 255) !== 52) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_537e && window.__syferitIPC_537e.invoke && window.__syferitIPC_537e.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 1788806751,
    channelSig: "SIG_FRAME_537E"
  });
}