// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitEngine } from '@syferit/core';
import { protectWasm } from '@syferit/wasm';
export function syferit(options = {}) {
  function authenticateSignatureEnvelope_2979(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f78635fc-1f949c7a]",
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
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __sourceState_2979 = authenticateSignatureEnvelope_2979(1543868081, 1809593231, 1205750315, 751526447);
  const _tokenBank_2979 = [[248, 164, 78, 243, 15, 17, 162, 95, 209, 156, 12, 147, 57, 240, 144, 55, 172, 116, 254], [195, 157, 44, 207], [168, 101, 235, 132, 25, 200, 108, 29, 111, 81], [141, 78, 198, 97, 228, 179, 73, 240, 74, 10], [82, 19, 161, 78, 195, 150, 22, 215, 37, 231], [35, 227, 133, 42, 183, 117, 247, 142, 10, 192, 111], [2, 196, 124, 17, 95, 82, 195, 108, 225, 191, 37, 239], [225, 162, 82, 253, 80, 7, 165, 68, 214, 150], [198, 135, 13, 218, 63, 234, 130, 59, 177, 115], [245, 109, 230, 144, 2], [97, 76, 223, 109, 224], [86, 16, 163, 68, 215, 159]];
  function _verifyBuffer_2979(_slot) {
    const _row = _tokenBank_2979[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sourceState_2979 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  let _resultProof_c64;
  let _ProprietaryEnclaveDelta_19a = false;
  return (__sourceState_2979 & 255) === 142 ? {
    name: _verifyBuffer_2979(1689924950 ^ Math.imul(__sourceState_2979 & 65535 ^ 17536, 27965)),
    enforce: _verifyBuffer_2979(1036401493 ^ Math.imul(__sourceState_2979 & 65535 ^ 11378, 30443)),
    configResolved(config) {
      function authenticateSignatureEnvelope_3e28(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:537b268e-20a5ad1a]",
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
        if ((_h >>> 4 & 15) !== 6) {
          throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
        }
        return _h;
      }
      const __nameState_3e28 = authenticateSignatureEnvelope_3e28(380032551, 315764705, 1253117063, 418711537);
      if ((__nameState_3e28 & 255) !== 103) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      _ProprietaryEnclaveDelta_19a = options.mode === _verifyBuffer_2979(280796179 ^ Math.imul(__sourceState_2979 & 65535 ^ 9997, 7643)) || config.mode === _verifyBuffer_2979(1041707490 ^ Math.imul(__sourceState_2979 & 65535 ^ 6797, 22859)) || config.isProduction;
      _resultProof_c64 = new SyferitEngine({
        ...options,
        mode: _ProprietaryEnclaveDelta_19a ? _verifyBuffer_2979(816303469 ^ Math.imul(__sourceState_2979 & 65535 ^ 4729, 17055)) : _verifyBuffer_2979(966964897 ^ Math.imul(__sourceState_2979 & 65535 ^ 9370, 26965))
      });
    },
    transform(code, id) {
      function authenticateNonceDigest_9ffb(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8ecb5309-91554a90]",
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
      const __keystoreQuorum_9ffb = authenticateNonceDigest_9ffb(238170105, 1026677229, 1596681325, 979847549);
      if (id.includes(_verifyBuffer_2979(1416126087 ^ Math.imul(__sourceState_2979 & 65535 ^ 5193, 29303))) || id.startsWith('\0')) {
        return null;
      }
      if (!/\.[cm]?[jt]sx?$/.test(id)) {
        return null;
      }
      if (!_ProprietaryEnclaveDelta_19a && options.mode !== _verifyBuffer_2979(636434188 ^ Math.imul(__sourceState_2979 & 65535 ^ 4003, 14871))) {
        return null;
      }
      const _quorumDigest_3b8 = _resultProof_c64.transform(code, id);
      if (_quorumDigest_3b8.transformedCount === (617687879 ^ Math.imul(__sourceState_2979 & 65535 ^ 25277, 11933))) {
        return null;
      }
      return (__keystoreQuorum_9ffb & 255) === 235 ? {
        code: _quorumDigest_3b8.code,
        map: null
      } : (() => {
        function verifySyferitEngine_2d84(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e3ac614b-bef3e550]",
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
            throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
          }
          return _h;
        }
        const __quorumVector_2d84 = verifySyferitEngine_2d84(1254856817, 1197640001, 467152351, 883915497);
        if ((__quorumVector_2d84 & 255) !== 15) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    },
    generateBundle(_opts, bundle) {
      function sanitizeGenerateBundle_b700(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e0e74055-37565d5f]",
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
      const __startsWithState_b700 = sanitizeGenerateBundle_b700(1444104307, 734896853, 207624671, 391928213);
      if ((__startsWithState_b700 & 255) !== 217) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_ProprietaryEnclaveDelta_19a && options.mode !== _verifyBuffer_2979(875398564 ^ Math.imul(__sourceState_2979 & 65535 ^ 9666, 24201))) {
        return;
      }
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith(_verifyBuffer_2979(1387638241 ^ Math.imul(__sourceState_2979 & 65535 ^ 27862, 27607)))) {
          if (asset.type === _verifyBuffer_2979(882398680 ^ Math.imul(__sourceState_2979 & 65535 ^ 14392, 23819)) && asset.source) {
            const raw = asset.source;
            const buffer = typeof raw === _verifyBuffer_2979(1126003351 ^ Math.imul(__sourceState_2979 & 65535 ^ 12522, 28863)) ? new TextEncoder().encode(raw) : new Uint8Array(raw);
            const result = protectWasm(buffer, {
              seed: options.seed,
              domainProfile: options.domainProfile
            });
            if (result.sectionsProtected > (834225859 ^ Math.imul(__sourceState_2979 & 65535 ^ 3289, 19829)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 40 | 1, (result.sectionsProtected | 0) ^ 40 | 1), Math.imul((result.sectionsProtected | 0) ^ 40 | 1, (result.sectionsProtected | 0) ^ 40 | 1)) & 15 ^ (__sourceState_2979 >>> 6 & 255 ^ 218)) === 119) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (390085510 ^ Math.imul(__sourceState_2979 & 65535 ^ 8504, 11065)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 127 | 1, (result.sectionsProtected | 0) ^ 127 | 1), Math.imul((result.sectionsProtected | 0) ^ 127 | 1, (result.sectionsProtected | 0) ^ 127 | 1)) & 15 ^ (__sourceState_2979 >>> 11 & 255 ^ 187)) === 175) {
              asset.source = result.binary;
            } else if (result.sectionsProtected > (1411343832 ^ Math.imul(__sourceState_2979 & 65535 ^ 19457, 24121)) && (Math.imul(Math.imul((result.sectionsProtected | 0) ^ 76 | 1, (result.sectionsProtected | 0) ^ 76 | 1), Math.imul((result.sectionsProtected | 0) ^ 76 | 1, (result.sectionsProtected | 0) ^ 76 | 1)) & 15 ^ (__sourceState_2979 >>> 19 & 255 ^ 89)) === 164) {
              asset.source = result.binary;
            }
          }
        }
      }
    }
  } : (() => {
    function verifyCode_e7eb(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:6976cd93-ab6d727f]",
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
    const __resultState_e7eb = verifyCode_e7eb(650561963, 1300278623, 1757311989, 1898278877);
    if ((__resultState_e7eb & 255) !== 190) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export default syferit;
if (typeof window !== "undefined") {
  window.__syferitIPC_9493 && window.__syferitIPC_9493.invoke && window.__syferitIPC_9493.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 1321972387,
    channelSig: "SIG_FRAME_9493"
  });
}