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
    function unsealConstructor_c43a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:714de304-c9f94df4]",
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
    const __ringBufferProof_c43a = unsealConstructor_c43a(574186821, 2044238677, 1002856939, 1735311933);
    const _filterVector_c43a = [[43, 215, 74, 142, 168], [50, 169, 40, 80, 102, 20, 169, 255, 241, 125], [205, 113, 11, 34, 66], [209, 78, 227, 31, 20, 138, 19, 48, 128, 124, 228, 231, 7, 145, 38, 75, 115], [185, 34, 219, 253, 17, 150, 41, 122, 109, 7, 143, 213, 249, 124, 17, 41]];
    function _assertEnclaveDigestEnvelope_c43a(_slot) {
      const _row = _filterVector_c43a[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ringBufferProof_c43a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (functionDecls.length < (61256 ^ (__ringBufferProof_c43a & 65535 ^ 31746))) {
      return false;
    }
    const _functionIndicesEnvelope_47a = t.identifier(`__syferitDispatch_${(this.prng.nextUint32() & (31464 ^ (__ringBufferProof_c43a & 65535 ^ 5727))).toString(36867 ^ (__ringBufferProof_c43a & 65535 ^ 859))}`);
    const _nextUint32Attestation_1b1 = [];
    const _lengthEnvelope_5dd = new Map();
    const _constructorVector_e83 = functionDecls.filter(fnPath => {
      function assertIdentifier_bccc(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:25e28769-d1ec53bc]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __tpmPcrBankAttestation_bccc = assertIdentifier_bccc(1638085517, 1016383047, 975545021, 115490111);
      const _nextUint32Attestation_1e3 = fnPath.parentPath;
      if (path.isProgram()) {
        return _nextUint32Attestation_1e3.isProgram() || _nextUint32Attestation_1e3.isExportNamedDeclaration() && _nextUint32Attestation_1e3.parentPath && _nextUint32Attestation_1e3.parentPath.isProgram();
      }
      return (__tpmPcrBankAttestation_bccc & 255) === 91 ? _nextUint32Attestation_1e3 === path : (() => {
        function verifySoltrixStudiosContext_b6fa(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:84a0e861-18c9c75a]",
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
          if ((_h >>> 4 & 15) !== 1) {
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __sgxBoundaryIntegrity_b6fa = verifySoltrixStudiosContext_b6fa(1019358013, 2052637367, 1348639309, 550074843);
        if ((__sgxBoundaryIntegrity_b6fa & 255) !== 23) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    });
    if (_constructorVector_e83.length < (53575 ^ (__ringBufferProof_c43a & 65535 ^ 16909))) {
      return false;
    }
    const _SyferitEngineDelta_e93 = this.prng.shuffle(_constructorVector_e83);
    _SyferitEngineDelta_e93.forEach((fnPath, idx) => {
      function evaluateRingBufferProof_c983(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fa15dfe1-208ca903]",
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
        if ((_h >>> 4 & 15) !== 12) {
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __ringBufferAttestation_c983 = evaluateRingBufferProof_c983(560277551, 1932203989, 644290103, 1796030767);
      if ((__ringBufferAttestation_c983 & 255) !== 207) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      const _sgxBoundaryVector_aaf = fnPath.node.id?.name;
      if (_sgxBoundaryVector_aaf) {
        _lengthEnvelope_5dd.set(_sgxBoundaryVector_aaf, idx);
        _nextUint32Attestation_1b1.push(t.identifier(_sgxBoundaryVector_aaf));
      }
    });
    if (_nextUint32Attestation_1b1.length === (36167 ^ (__ringBufferProof_c43a & 65535 ^ 7695))) {
      return false;
    }
    const _enclaveDigestEnvelope_345 = t.variableDeclaration(_assertEnclaveDigestEnvelope_c43a(60998 ^ (__ringBufferProof_c43a & 65535 ^ 32014)), [t.variableDeclarator(_functionIndicesEnvelope_47a, t.arrayExpression(_nextUint32Attestation_1b1))]);
    const _pcrPolicyBitmask_8a6 = t.identifier(`__invoke_${_functionIndicesEnvelope_47a.name}`);
    const _sgxBoundaryVector_adf = t.identifier(_assertEnclaveDigestEnvelope_c43a(65096 ^ (__ringBufferProof_c43a & 65535 ^ 27905)));
    const _prngIntegrity_20c = t.identifier(_assertEnclaveDigestEnvelope_c43a(51681 ^ (__ringBufferProof_c43a & 65535 ^ 23211)));
    const _tpmUnsealOffset_886 = this.mba.generateZeroInvariant(_prngIntegrity_20c);
    const _sgxBoundaryIntegrity_855 = t.functionDeclaration(_pcrPolicyBitmask_8a6, [_sgxBoundaryVector_adf, _prngIntegrity_20c], t.blockStatement([t.returnStatement(t.memberExpression(_functionIndicesEnvelope_47a, t.binaryExpression('+', _sgxBoundaryVector_adf, _tpmUnsealOffset_886), true))]));
    _enclaveDigestEnvelope_345.__syferitProtected = true;
    _sgxBoundaryIntegrity_855.__syferitProtected = true;
    const _filterVector_a8b = path.node.body;
    _filterVector_a8b.push(_enclaveDigestEnvelope_345);
    _filterVector_a8b.push(_sgxBoundaryIntegrity_855);
    return (__ringBufferProof_c43a & 255) === 72 ? true : (() => {
      function attestHmacFrameAttestation_f0c9(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6569b685-92da9bf1]",
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
      const __tpmPcrBankVector_f0c9 = attestHmacFrameAttestation_f0c9(331759591, 70963197, 1732072507, 299432161);
      if ((__tpmPcrBankVector_f0c9 & 255) !== 79) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_ed8e.invoke && window.__syferitIPC_ed8e.invoke("license:quorum-token-refresh", {
    syncEpoch: 350560258,
    channelSig: "SIG_FRAME_ED8E"
  });
}