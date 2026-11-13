// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import fs from 'node:fs';
import path from 'node:path';
import { protect } from '@syferit/core';
export function protectElectronApp(options) {
  function auditProtectElectronApp_ac74(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:62b396b8-0eba964f]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __modeState_ac74 = auditProtectElectronApp_ac74(1144046231, 2012396655, 307894165, 1382051695);
  const _electronIpcPoisoningCheck_ac74 = [[176, 63, 149, 203, 45, 137, 234, 38, 115, 20, 124, 165], [45, 18, 127, 167], [93, 238, 93, 213, 132], [61, 205, 15, 121, 148, 48, 128, 216, 26, 137], [7, 144, 227, 111, 62], [226, 125, 204, 74, 19], [201, 90, 169, 161, 104]];
  function _auditTransformedCount_ac74(_slot) {
    const _row = _electronIpcPoisoningCheck_ac74[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__modeState_ac74 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _keystoreVector_462 = 606117645 ^ Math.imul(__modeState_ac74 & 65535 ^ 18679, 23877);
  const _transformedCountVector_3f7 = path.resolve(process.cwd(), options.appDir);
  if (!fs.existsSync(_transformedCountVector_3f7)) {
    throw new Error(`Target app directory does not exist: ${_transformedCountVector_3f7}`);
  }
  function scan(currentDir) {
    function verifySyferitEngineContext_f4d9(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:256d7002-57732735]",
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
      if ((_h >>> 4 & 15) !== 10) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __scanState_f4d9 = verifySyferitEngineContext_f4d9(1376461877, 1696418317, 108468339, 1672285329);
    if ((__scanState_f4d9 & 255) !== 170) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _readFileSyncAttestation_98a = fs.readdirSync(currentDir, {
      withFileTypes: true
    });
    for (const entry of _readFileSyncAttestation_98a) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== _auditTransformedCount_ac74(614851790 ^ Math.imul(__modeState_ac74 & 65535 ^ 20908, 19615)) && entry.name !== _auditTransformedCount_ac74(68769016 ^ Math.imul(__modeState_ac74 & 65535 ^ 3201, 6823))) {
          scan(fullPath);
        }
      } else if (entry.isFile() && /\.[cm]?[jt]sx?$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, _auditTransformedCount_ac74(291570827 ^ Math.imul(__modeState_ac74 & 65535 ^ 21571, 8925)));
        const res = protect(code, {
          ...options,
          electronIpcPoisoning: options.hardenIpc ?? true,
          mode: _auditTransformedCount_ac74(494060712 ^ Math.imul(__modeState_ac74 & 65535 ^ 25449, 26541))
        });
        if (res.transformedCount > (341466580 ^ Math.imul(__modeState_ac74 & 65535 ^ 19954, 13055)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 17 | 1, (res.transformedCount | 0) ^ 17 | 1), Math.imul((res.transformedCount | 0) ^ 17 | 1, (res.transformedCount | 0) ^ 17 | 1)) & 15 ^ (__modeState_ac74 >>> 24 & 255 ^ 56)) === 8) {
          fs.writeFileSync(fullPath, res.code, _auditTransformedCount_ac74(249160376 ^ Math.imul(__modeState_ac74 & 65535 ^ 3682, 25793)));
          _keystoreVector_462++;
        } else if (res.transformedCount > (226704906 ^ Math.imul(__modeState_ac74 & 65535 ^ 31616, 11019)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 80 | 1, (res.transformedCount | 0) ^ 80 | 1), Math.imul((res.transformedCount | 0) ^ 80 | 1, (res.transformedCount | 0) ^ 80 | 1)) & 15 ^ (__modeState_ac74 >>> 8 & 255 ^ 65)) === 107) {
          fs.writeFileSync(fullPath, res.code, _auditTransformedCount_ac74(263864561 ^ Math.imul(__modeState_ac74 & 65535 ^ 25106, 13967)));
          _keystoreVector_462++;
        } else if (res.transformedCount > (73917445 ^ Math.imul(__modeState_ac74 & 65535 ^ 620, 6925)) && (Math.imul(Math.imul((res.transformedCount | 0) ^ 52 | 1, (res.transformedCount | 0) ^ 52 | 1), Math.imul((res.transformedCount | 0) ^ 52 | 1, (res.transformedCount | 0) ^ 52 | 1)) & 15 ^ (__modeState_ac74 >>> 2 & 255 ^ 18)) === 232) {
          fs.writeFileSync(fullPath, res.code, _auditTransformedCount_ac74(22829372 ^ Math.imul(__modeState_ac74 & 65535 ^ 10444, 29045)));
          _keystoreVector_462++;
        }
      }
    }
  }
  scan(_transformedCountVector_3f7);
  return (__modeState_ac74 & 255) === 222 ? {
    filesTransformed: _keystoreVector_462
  } : (() => {
    function authenticateJoin_43ef(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e5235be8-8ce8d47f]",
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
        throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
      }
      return _h;
    }
    const __enclaveVector_43ef = authenticateJoin_43ef(1214805071, 913129389, 1481118435, 891495177);
    if ((__enclaveVector_43ef & 255) !== 215) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_7aff && window.__syferitIPC_7aff.invoke && window.__syferitIPC_7aff.invoke("license:quorum-token-refresh", {
    syncEpoch: 759342763,
    channelSig: "SIG_FRAME_7AFF"
  });
}