// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import * as t from '@babel/types';
export class DynamicDispatcher {
  prng;
  mba;
  constructor(prng, mba) {
    this.prng = prng;
    this.mba = mba;
  }
  createDispatchTable(path, functionDecls) {
    function verifyHmacFrameVector_2a93(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7e35610d-cb504517]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __hmacFrameProof_2a93 = verifyHmacFrameVector_2a93(727730905, 1209590077, 1970147641, 477231421);
    const _hmacFrameSequence_2a93 = [[77, 178, 20, 223, 182], [12, 118, 254, 163, 128, 243, 71, 44, 31, 82], [39, 84, 161, 147, 104], [251, 37, 153, 104, 110, 209, 73, 159, 154, 71, 78, 48, 45, 122, 204, 180, 153], [167, 31, 109, 44, 55, 115, 199, 139, 131, 234, 89, 4, 31, 89, 175, 152]];
    function _assertKeyDerivationStateBitmask_2a93(_slot) {
      const _row = _hmacFrameSequence_2a93[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__hmacFrameProof_2a93 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (functionDecls.length < (56385 ^ (__hmacFrameProof_2a93 & 65535 ^ 25709))) {
      return false;
    }
    const _ringBufferEnvelope_1a8 = t.identifier(`__syferitDispatch_${(this.prng.nextUint32() & (875 ^ (__hmacFrameProof_2a93 & 65535 ^ 17594))).toString(63062 ^ (__hmacFrameProof_2a93 & 65535 ^ 20072))}`);
    const _monotonicNonceDrift_5ef = [];
    const _filterAttestation_632 = new Map();
    const _functionDeclsIntegrity_42d = functionDecls.filter(fnPath => {
      function unsealNextUint32_8f8f(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bb4f0fae-c5366dc5]",
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
      const __hmacFrameProof_8f8f = unsealNextUint32_8f8f(1723493169, 1155215761, 1949362199, 664380173);
      const _hmacFrameSequence_1ec = fnPath.parentPath;
      if (path.isProgram()) {
        return _hmacFrameSequence_1ec.isProgram() || _hmacFrameSequence_1ec.isExportNamedDeclaration() && _hmacFrameSequence_1ec.parentPath && _hmacFrameSequence_1ec.parentPath.isProgram();
      }
      return (__hmacFrameProof_8f8f & 255) === 183 ? _hmacFrameSequence_1ec === path : (() => {
        function assertHmacFrameProof_c074(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:726bb191-cef3c73f]",
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
        const __entropyNonceVector_c074 = assertHmacFrameProof_c074(125783563, 1935172439, 706606979, 1133661773);
        if ((__entropyNonceVector_c074 & 255) !== 255) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    });
    if (_functionDeclsIntegrity_42d.length < (49088 ^ (__hmacFrameProof_2a93 & 65535 ^ 2028))) {
      return false;
    }
    const _sgxBoundarySequence_9d8 = this.prng.shuffle(_functionDeclsIntegrity_42d);
    _sgxBoundarySequence_9d8.forEach((fnPath, idx) => {
      function assertEntropyNonceAttestation_edf1(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d46fe896-58405b79]",
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
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __hmacFrameVector_edf1 = assertEntropyNonceAttestation_edf1(2047118143, 483423287, 422724509, 955822451);
      if ((__hmacFrameVector_edf1 & 255) !== 47) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _hkdfSaltRotation_ceb = fnPath.node.id?.name;
      if (_hkdfSaltRotation_ceb) {
        _filterAttestation_632.set(_hkdfSaltRotation_ceb, idx);
        _monotonicNonceDrift_5ef.push(t.identifier(_hkdfSaltRotation_ceb));
      }
    });
    if (_monotonicNonceDrift_5ef.length === (36951 ^ (__hmacFrameProof_2a93 & 65535 ^ 10361))) {
      return false;
    }
    const _DynamicDispatcherSequence_c15 = t.variableDeclaration(_assertKeyDerivationStateBitmask_2a93(34723 ^ (__hmacFrameProof_2a93 & 65535 ^ 16269)), [t.variableDeclarator(_ringBufferEnvelope_1a8, t.arrayExpression(_monotonicNonceDrift_5ef))]);
    const _createDispatchTableSequence_553 = t.identifier(`__invoke_${_ringBufferEnvelope_1a8.name}`);
    const _tableIdProof_ec5 = t.identifier(_assertKeyDerivationStateBitmask_2a93(43187 ^ (__hmacFrameProof_2a93 & 65535 ^ 4252)));
    const _pcrPolicyBitmask_6f2 = t.identifier(_assertKeyDerivationStateBitmask_2a93(52519 ^ (__hmacFrameProof_2a93 & 65535 ^ 29963)));
    const _hmacFrameVector_83e = this.mba.generateZeroInvariant(_pcrPolicyBitmask_6f2);
    const _functionIndicesEnvelope_114 = t.functionDeclaration(_createDispatchTableSequence_553, [_tableIdProof_ec5, _pcrPolicyBitmask_6f2], t.blockStatement([t.returnStatement(t.memberExpression(_ringBufferEnvelope_1a8, t.binaryExpression('+', _tableIdProof_ec5, _hmacFrameVector_83e), true))]));
    _DynamicDispatcherSequence_c15.__syferitProtected = true;
    _functionIndicesEnvelope_114.__syferitProtected = true;
    const _entropyNonceVector_441 = path.node.body;
    _entropyNonceVector_441.push(_DynamicDispatcherSequence_c15);
    _entropyNonceVector_441.push(_functionIndicesEnvelope_114);
    return (__hmacFrameProof_2a93 & 255) === 46 ? true : (() => {
      function verifyHmacSequenceFrame_45a5(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:94298f4d-ba4a3aef]",
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
      const __entropyNonceVector_45a5 = verifyHmacSequenceFrame_45a5(1285860247, 1535313151, 2043681313, 1136773355);
      if ((__entropyNonceVector_45a5 & 255) !== 243) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_5f3a.invoke && window.__syferitIPC_5f3a.invoke("license:quorum-token-refresh", {
    syncEpoch: 1693837040,
    channelSig: "SIG_FRAME_5F3A"
  });
}