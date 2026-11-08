// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import * as t from '@babel/types';
export class LogicEntangler {
  prng;
  mba;
  dictionary;
  enableGaslighting;
  constructor(prng, mba, dictionary, enableGaslighting = true) {
    this.prng = prng;
    this.mba = mba;
    this.dictionary = dictionary;
    this.enableGaslighting = enableGaslighting;
  }
  transformFunction(path) {
    function verifyTpmPcrBankEnvelope_3050(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bee3dc2c-e06f13ff]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __hmacFrameVector_3050 = verifyTpmPcrBankEnvelope_3050(380138419, 1225855971, 226505783, 356192133);
    const _isBlockStatementBitmask_3050 = [[188, 33, 156, 21, 7, 144, 243, 153, 115, 25, 104], [104, 22, 99], [74, 247, 82, 195, 201], [56, 220, 19], [44, 145, 242, 155, 115, 19, 72, 235, 252], [251, 104, 197, 108, 88], [206, 73, 177, 48, 34], [128, 62, 145, 16], [58, 75, 39], [105, 233, 77, 220, 178], [112, 253, 89], [51, 151, 251, 146, 120], [210, 68, 248, 99, 125, 215, 3, 248, 151, 109, 133, 19, 25, 133, 53, 155, 185, 8, 196, 82, 44, 154, 243, 114, 118, 162, 87, 239, 200, 100, 207, 67, 27, 204, 47, 171, 163, 75, 144, 51]];
    function _unsealSymbols_3050(_slot) {
      const _row = _isBlockStatementBitmask_3050[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__hmacFrameVector_3050 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (path.node.__syferitProtected) {
      return false;
    }
    const _bodyBlockEnvelope_240 = path.node;
    if ((t.isClassMethod(_bodyBlockEnvelope_240) || t.isObjectMethod(_bodyBlockEnvelope_240)) && _bodyBlockEnvelope_240.kind === _unsealSymbols_3050(27746 ^ (__hmacFrameVector_3050 & 65535 ^ 17853))) {
      return false;
    }
    if (!t.isBlockStatement(_bodyBlockEnvelope_240.body)) {
      return false;
    }
    const _entropyNonceVector_d14 = _bodyBlockEnvelope_240.body;
    if (_entropyNonceVector_d14.body.length === (4665 ^ (__hmacFrameVector_3050 & 65535 ^ 15334))) {
      return false;
    }
    _bodyBlockEnvelope_240.__syferitProtected = true;
    const _symbolsProof_4a6 = this.prng.pick(this.dictionary.symbols);
    const _constructorProof_867 = this.prng.pick(this.dictionary.stateKeys);
    const _isBlockStatementBitmask_29c = this.prng.pick(this.dictionary.assertions);
    const _sgxBoundarySequence_69 = this.prng.pick(this.dictionary.legalInoculations);
    const _ringBufferIntegrity_54c = (this.prng.nextUint32() & (58092 ^ (__hmacFrameVector_3050 & 65535 ^ 13516))).toString(9223 ^ (__hmacFrameVector_3050 & 65535 ^ 3528));
    const _SoltrixStudiosDelta_6f = `${_symbolsProof_4a6}_${_ringBufferIntegrity_54c}`;
    const _keyDerivationStateIntegrity_ee3 = `${_constructorProof_867}_${_ringBufferIntegrity_54c}`;
    const _pickIntegrity_a59 = t.identifier(_keyDerivationStateIntegrity_ee3);
    const _dictionaryIntegrity_447 = this.prng.pick(this.dictionary.symbols);
    const _isObjectMethodBitmask_b0b = this.prng.pick(this.dictionary.localRegisterNames);
    const _isClassMethodIntegrity_99 = `_${_dictionaryIntegrity_447}_${_ringBufferIntegrity_54c}`;
    const _hmacFrameVector_e99 = `${_isObjectMethodBitmask_b0b}_${_ringBufferIntegrity_54c}`;
    const _decoySymbolBitmask_7da = this.prng.shuffle(this.dictionary.localRegisterNames);
    let _prngSequence_9ba = 30308 ^ (__hmacFrameVector_3050 & 65535 ^ 24507);
    const _tpmPcrBankEnvelope_575 = Object.keys(path.scope.bindings);
    for (const bindingName of _tpmPcrBankEnvelope_575) {
      const binding = path.scope.bindings[bindingName];
      if (!binding) continue;
      if (binding.kind === _unsealSymbols_3050(15098 ^ (__hmacFrameVector_3050 & 65535 ^ 4900)) || binding.kind === _unsealSymbols_3050(25564 ^ (__hmacFrameVector_3050 & 65535 ^ 18945)) || binding.kind === _unsealSymbols_3050(8919 ^ (__hmacFrameVector_3050 & 65535 ^ 2827))) {
        const baseReg = _decoySymbolBitmask_7da[_prngSequence_9ba % _decoySymbolBitmask_7da.length] || _unsealSymbols_3050(26358 ^ (__hmacFrameVector_3050 & 65535 ^ 20269));
        const newRegName = `${baseReg}_${(this.prng.nextUint32() & (5673 ^ (__hmacFrameVector_3050 & 65535 ^ 12297))).toString(21706 ^ (__hmacFrameVector_3050 & 65535 ^ 32005))}`;
        _prngSequence_9ba++;
        path.scope.rename(bindingName, newRegName);
      }
    }
    const _tpmUnsealOffset_243 = `${this.prng.nextUint32().toString(10837 ^ (__hmacFrameVector_3050 & 65535 ^ 922)).padStart(10075 ^ (__hmacFrameVector_3050 & 65535 ^ 3724), '0')}-${this.prng.nextUint32().toString(1298 ^ (__hmacFrameVector_3050 & 65535 ^ 11485)).padStart(3767 ^ (__hmacFrameVector_3050 & 65535 ^ 10080), '0')}`;
    const _stateKeyVector_ac5 = `${_sgxBoundarySequence_69} [ATTESTATION_ID:${_tpmUnsealOffset_243}]`;
    const _stateKeysVector_418 = [this.prng.nextUint32() & 2147483646 + ((__hmacFrameVector_3050 & 255) - 223) | 8948 ^ (__hmacFrameVector_3050 & 65535 ^ 2858), this.prng.nextUint32() & 2147483646 + ((__hmacFrameVector_3050 & 255) - 223) | 17597 ^ (__hmacFrameVector_3050 & 65535 ^ 28003), this.prng.nextUint32() & 2147483646 + ((__hmacFrameVector_3050 & 255) - 223) | 6951 ^ (__hmacFrameVector_3050 & 65535 ^ 13049), this.prng.nextUint32() & 2147483646 + ((__hmacFrameVector_3050 & 255) - 223) | 24619 ^ (__hmacFrameVector_3050 & 65535 ^ 18933)];
    const _kindAttestation_97 = this.mba.computeStringKey(_stateKeyVector_ac5, _stateKeysVector_418);
    const _tpmPcrBankSequence_4a2 = _kindAttestation_97 >>> (11855 ^ (__hmacFrameVector_3050 & 65535 ^ 1940)) & (24258 ^ (__hmacFrameVector_3050 & 65535 ^ 30482));
    const _sgxEcallCounter_cc2 = this.buildHashKeyFunction(_SoltrixStudiosDelta_6f, _stateKeyVector_ac5, _tpmPcrBankSequence_4a2, _isBlockStatementBitmask_29c);
    _sgxEcallCounter_cc2.__syferitProtected = true;
    const _hmacFrameAttestation_ecf = t.variableDeclaration(_unsealSymbols_3050(26728 ^ (__hmacFrameVector_3050 & 65535 ^ 16818)), [t.variableDeclarator(_pickIntegrity_a59, t.callExpression(t.identifier(_SoltrixStudiosDelta_6f), _stateKeysVector_418.map(s => t.numericLiteral(s))))]);
    _hmacFrameAttestation_ecf.__syferitProtected = true;
    const _pcrPolicyBitmask_318 = _bodyBlockEnvelope_240.params[26613 ^ (__hmacFrameVector_3050 & 65535 ^ 20010)];
    const _ringBufferProof_516 = t.isIdentifier(_pcrPolicyBitmask_318) ? t.logicalExpression('||', t.memberExpression(_pcrPolicyBitmask_318, t.identifier(_unsealSymbols_3050(15188 ^ (__hmacFrameVector_3050 & 65535 ^ 4749)))), t.binaryExpression('|', _pcrPolicyBitmask_318, t.numericLiteral(16859 ^ (__hmacFrameVector_3050 & 65535 ^ 26628)))) : t.numericLiteral(_stateKeysVector_418[3579 ^ (__hmacFrameVector_3050 & 65535 ^ 9252)]);
    this.injectDecoyBranches(path, _ringBufferProof_516, _pickIntegrity_a59, _kindAttestation_97);
    const _ringBufferBitmask_3bb = [];
    const _sgxBoundaryProof_c0d = rawStr => {
      function assertRingBufferIntegrity_1a3b(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b07b3109-0525649c]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __entropyNonceVector_1a3b = assertRingBufferIntegrity_1a3b(1022427443, 313231017, 803986351, 808314765);
      const _decoySymbolBitmask_bda = _ringBufferBitmask_3bb.length;
      const _tpmPcrBankSequence_23a = rawStr.split('').map((ch, charIdx) => {
        function unsealRingBufferProof_1ff7(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6ddf94a6-9f36c286]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __enclaveDigestIntegrity_1ff7 = unsealRingBufferProof_1ff7(558543219, 1051400237, 2033690563, 1797459689);
        const _enclaveDigestIntegrity_c87 = (_kindAttestation_97 >>> (charIdx & (13233 ^ (__hmacFrameVector_3050 & 65535 ^ 6765))) * (3967 ^ (__hmacFrameVector_3050 & 65535 ^ 9896))) + Math.imul(charIdx + _decoySymbolBitmask_bda, 2427 ^ (__hmacFrameVector_3050 & 65535 ^ 8321)) & (9306 ^ (__hmacFrameVector_3050 & 65535 ^ 3450));
        return (__enclaveDigestIntegrity_1ff7 & 255) === 71 ? (ch.charCodeAt(10007 ^ (__hmacFrameVector_3050 & 65535 ^ 3784)) ^ _enclaveDigestIntegrity_c87) & (12360 ^ (__hmacFrameVector_3050 & 65535 ^ 6504)) : (() => {
          function unsealRingBufferProof_3b5b(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4eb831b3-323f51a3]",
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
              throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
            }
            return _h;
          }
          const __ringBufferProof_3b5b = unsealRingBufferProof_3b5b(866383147, 1615351351, 1191689233, 1190561057);
          if ((__ringBufferProof_3b5b & 255) !== 51) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _ringBufferBitmask_3bb.push(_tpmPcrBankSequence_23a);
      const _tpmPcrBankIntegrity_415 = this.mba.encodeNumberWithKey(_decoySymbolBitmask_bda, _pickIntegrity_a59, _kindAttestation_97);
      const _isObjectMethodBitmask_a66 = t.callExpression(t.identifier(_isClassMethodIntegrity_99), [_tpmPcrBankIntegrity_415]);
      _isObjectMethodBitmask_a66.__syferitProtected = true;
      return (__entropyNonceVector_1a3b & 255) === 97 ? _isObjectMethodBitmask_a66 : (() => {
        function evaluateKind_e7a9(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:cfd2981f-d2d44a62]",
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
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __keyDerivationStateIntegrity_e7a9 = evaluateKind_e7a9(637267155, 877205901, 25538169, 1661266623);
        if ((__keyDerivationStateIntegrity_e7a9 & 255) !== 94) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    const _ringBufferAttestation_b8c = this.mba;
    const _lengthIntegrity_b38 = path.get(_unsealSymbols_3050(22073 ^ (__hmacFrameVector_3050 & 65535 ^ 32737)));
    _lengthIntegrity_b38.traverse({
      NumericLiteral(numPath) {
        function evaluateIsObjectMethod_a31b(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3806ff15-72844cb1]",
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
          if ((_h >>> 4 & 15) !== 9) {
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __ringBufferAttestation_a31b = evaluateIsObjectMethod_a31b(1349477845, 1205105449, 773733409, 693942261);
        if ((__ringBufferAttestation_a31b & 255) !== 155) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (numPath.node.__syferitProtected) return;
        let _sgxEcallCounter_5f3 = numPath.parentPath;
        while (_sgxEcallCounter_5f3 && _sgxEcallCounter_5f3 !== path) {
          if (_sgxEcallCounter_5f3.node.__syferitProtected) return;
          _sgxEcallCounter_5f3 = _sgxEcallCounter_5f3.parentPath;
        }
        const _pickIntegrity_cae = numPath.parent;
        if (t.isMemberExpression(_pickIntegrity_cae) && !_pickIntegrity_cae.computed) return;
        const _keyDerivationStateIntegrity_32b = numPath.node.value;
        const _tpmUnsealOffset_8c9 = _ringBufferAttestation_b8c.encodeNumberWithKey(_keyDerivationStateIntegrity_32b, _pickIntegrity_a59, _kindAttestation_97);
        numPath.replaceWith(_tpmUnsealOffset_8c9);
        numPath.skip();
      },
      StringLiteral(strPath) {
        function isolateEnclaveDigestIntegrity_d03a(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1ee80aac-43d7d4a1]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __tpmPcrBankEnvelope_d03a = isolateEnclaveDigestIntegrity_d03a(1849398063, 999889887, 1792004515, 1408956369);
        if ((__tpmPcrBankEnvelope_d03a & 255) !== 183) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (strPath.node.__syferitProtected) return;
        let _enclaveDigestProof_d50 = strPath.parentPath;
        while (_enclaveDigestProof_d50 && _enclaveDigestProof_d50 !== path) {
          if (_enclaveDigestProof_d50.node.__syferitProtected) return;
          _enclaveDigestProof_d50 = _enclaveDigestProof_d50.parentPath;
        }
        const _symbolsProof_aa8 = strPath.parent;
        if (t.isImportDeclaration(_symbolsProof_aa8) || t.isExportDeclaration(_symbolsProof_aa8)) return;
        if (t.isObjectProperty(_symbolsProof_aa8) && _symbolsProof_aa8.key === strPath.node && !_symbolsProof_aa8.computed) return;
        const _transformFunctionSequence_39a = strPath.node.value;
        if (_transformFunctionSequence_39a.length > (7847 ^ (__hmacFrameVector_3050 & 65535 ^ 14202)) && !_transformFunctionSequence_39a.startsWith('CRITICAL') && !_transformFunctionSequence_39a.startsWith('ASSERTION') && !_transformFunctionSequence_39a.startsWith('DMCA') && !_transformFunctionSequence_39a.startsWith('DTSA') && !_transformFunctionSequence_39a.startsWith('CFAA') && !_transformFunctionSequence_39a.startsWith('FINANCIAL') && !_transformFunctionSequence_39a.startsWith('EULA')) {
          const sboxCall = _sgxBoundaryProof_c0d(_transformFunctionSequence_39a);
          strPath.replaceWith(sboxCall);
          strPath.skip();
        }
      }
    });
    if (_ringBufferBitmask_3bb.length > (2179 ^ (__hmacFrameVector_3050 & 65535 ^ 8540)) && _ringBufferBitmask_3bb.length < (1655 ^ (__hmacFrameVector_3050 & 65535 ^ 12205))) {
      for (const extraDecoy of this.dictionary.decoyTierStrings.slice(1659 ^ (__hmacFrameVector_3050 & 65535 ^ 12196), 17584 ^ (__hmacFrameVector_3050 & 65535 ^ 28013))) {
        _sgxBoundaryProof_c0d(extraDecoy);
      }
    }
    let _enclaveDigestIntegrity_bec = false;
    const _enableGaslightingProof_951 = _kindAttestation_97 & (6013 ^ (__hmacFrameVector_3050 & 65535 ^ 15965));
    for (const stmt of _entropyNonceVector_d14.body) {
      if (t.isReturnStatement(stmt) && stmt.argument) {
        const origArg = stmt.argument;
        const condExpr = t.binaryExpression(_unsealSymbols_3050(18764 ^ (__hmacFrameVector_3050 & 65535 ^ 24731)), t.binaryExpression('&', _pickIntegrity_a59, t.numericLiteral(22128 ^ (__hmacFrameVector_3050 & 65535 ^ 32592))), t.numericLiteral(_enableGaslightingProof_951));
        condExpr.__syferitProtected = true;
        const throwArrow = t.callExpression(t.arrowFunctionExpression([], t.blockStatement([t.throwStatement(t.newExpression(t.identifier(_unsealSymbols_3050(11674 ^ (__hmacFrameVector_3050 & 65535 ^ 1100))), [t.stringLiteral('CRITICAL_STATE_FAULT: Memory integrity frame violation')]))])), []);
        throwArrow.__syferitProtected = true;
        const wrappedReturn = t.conditionalExpression(condExpr, origArg, throwArrow);
        wrappedReturn.__syferitProtected = true;
        stmt.argument = wrappedReturn;
        _enclaveDigestIntegrity_bec = true;
        break;
      }
    }
    if (!_enclaveDigestIntegrity_bec) {
      const guardCheck = t.ifStatement(t.binaryExpression(_unsealSymbols_3050(8733 ^ (__hmacFrameVector_3050 & 65535 ^ 3016)), t.binaryExpression('&', _pickIntegrity_a59, t.numericLiteral(31188 ^ (__hmacFrameVector_3050 & 65535 ^ 20724))), t.numericLiteral(_enableGaslightingProof_951)), t.blockStatement([t.throwStatement(t.newExpression(t.identifier(_unsealSymbols_3050(27552 ^ (__hmacFrameVector_3050 & 65535 ^ 17012))), [t.stringLiteral(_unsealSymbols_3050(381 ^ (__hmacFrameVector_3050 & 65535 ^ 10414)))]))]));
      guardCheck.__syferitProtected = true;
      _entropyNonceVector_d14.body.unshift(guardCheck);
    }
    if (_ringBufferBitmask_3bb.length > (19100 ^ (__hmacFrameVector_3050 & 65535 ^ 25411)) && (Math.imul(Math.imul((_ringBufferBitmask_3bb.length | 0) ^ 109 | 1, (_ringBufferBitmask_3bb.length | 0) ^ 109 | 1), Math.imul((_ringBufferBitmask_3bb.length | 0) ^ 109 | 1, (_ringBufferBitmask_3bb.length | 0) ^ 109 | 1)) & 15 ^ (__hmacFrameVector_3050 >>> 22 & 255 ^ 120)) === 173) {
      const sboxNodes = this.buildSboxRuntime(_hmacFrameVector_e99, _isClassMethodIntegrity_99, _pickIntegrity_a59, _ringBufferBitmask_3bb);
      for (let i = sboxNodes.length - (10553 ^ __hmacFrameVector_3050 & 65535) / (63328 ^ __hmacFrameVector_3050 >>> 16 & 65535); i >= (10689 ^ __hmacFrameVector_3050 & 65535) / (63328 ^ __hmacFrameVector_3050 >>> 16 & 65535); i--) {
        _entropyNonceVector_d14.body.unshift(sboxNodes[i]);
      }
    } else if (_ringBufferBitmask_3bb.length > (24087 ^ (__hmacFrameVector_3050 & 65535 ^ 30664)) && (Math.imul(Math.imul((_ringBufferBitmask_3bb.length | 0) ^ 122 | 1, (_ringBufferBitmask_3bb.length | 0) ^ 122 | 1), Math.imul((_ringBufferBitmask_3bb.length | 0) ^ 122 | 1, (_ringBufferBitmask_3bb.length | 0) ^ 122 | 1)) & 15 ^ (__hmacFrameVector_3050 >>> 16 & 255 ^ 210)) === 123) {
      const sboxNodes = this.buildSboxRuntime(_hmacFrameVector_e99, _isClassMethodIntegrity_99, _pickIntegrity_a59, _ringBufferBitmask_3bb);
      for (let i = sboxNodes.length - (19279 ^ (__hmacFrameVector_3050 & 65535 ^ 25233)); i >= (15484 ^ (__hmacFrameVector_3050 & 65535 ^ 5539)); i--) {
        _entropyNonceVector_d14.body.unshift(sboxNodes[i]);
      }
    } else if (_ringBufferBitmask_3bb.length > (23057 ^ (__hmacFrameVector_3050 & 65535 ^ 29633)) && (Math.imul(Math.imul((_ringBufferBitmask_3bb.length | 0) ^ 56 | 1, (_ringBufferBitmask_3bb.length | 0) ^ 56 | 1), Math.imul((_ringBufferBitmask_3bb.length | 0) ^ 56 | 1, (_ringBufferBitmask_3bb.length | 0) ^ 56 | 1)) & 15 ^ (__hmacFrameVector_3050 >>> 10 & 255 ^ 31)) === 24) {
      const sboxNodes = this.buildSboxRuntime(_hmacFrameVector_e99, _isClassMethodIntegrity_99, _pickIntegrity_a59, _ringBufferBitmask_3bb);
      for (let i = sboxNodes.length - (10559 ^ __hmacFrameVector_3050 & 65535) / (63328 ^ __hmacFrameVector_3050 >>> 16 & 65535); i >= (10695 ^ __hmacFrameVector_3050 & 65535) / (63328 ^ __hmacFrameVector_3050 >>> 16 & 65535); i--) {
        _entropyNonceVector_d14.body.unshift(sboxNodes[i]);
      }
    }
    _entropyNonceVector_d14.body.unshift(_hmacFrameAttestation_ecf);
    _entropyNonceVector_d14.body.unshift(_sgxEcallCounter_cc2);
    return (__hmacFrameVector_3050 & 255) === 223 ? true : (() => {
      function verifyIsBlockStatement_a9f9(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8df8fc49-06ddaebb]",
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
      const __tpmPcrBankIntegrity_a9f9 = verifyIsBlockStatement_a9f9(413734067, 1018139351, 2100627031, 1434540433);
      if ((__tpmPcrBankIntegrity_a9f9 & 255) !== 17) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  transformProgramLiterals(programPath) {
    function attestSgxBoundarySequence_5a07(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3ffeefe0-4f791b91]",
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
      if ((_h >>> 4 & 15) !== 7) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __sgxBoundarySequence_5a07 = attestSgxBoundarySequence_5a07(1903725421, 3749703, 1739577387, 1922412181);
    const _monotonicNonceDrift_5a07 = [[28, 114, 227, 128, 103], [194, 43, 194, 107, 103, 231, 114, 156, 147, 89, 133, 51, 20, 140, 7, 183, 128], [172, 9, 180, 81, 60, 141, 14, 142, 152, 252, 144, 9, 228, 87, 246, 157]];
    function _verifyTpmPcrBankEnvelope_5a07(_slot) {
      const _row = _monotonicNonceDrift_5a07[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sgxBoundarySequence_5a07 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (programPath.node.__syferitProgramLiteralsProtected) {
      return false;
    }
    programPath.node.__syferitProgramLiteralsProtected = true;
    const _bodyBlockEnvelope_2d1 = this.prng.pick(this.dictionary.symbols);
    const _symbolsProof_1a9 = this.prng.pick(this.dictionary.stateKeys);
    const _isClassMethodIntegrity_1ed = this.prng.pick(this.dictionary.assertions);
    const _kindAttestation_f90 = this.prng.pick(this.dictionary.legalInoculations);
    const _LogicEntanglerEnvelope_a2e = (this.prng.nextUint32() & (24490 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 22570))).toString(54409 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 11494));
    const _tpmPcrBankSequence_c83 = `${_bodyBlockEnvelope_2d1}_${_LogicEntanglerEnvelope_a2e}`;
    const _transformFunctionSequence_d9f = `${_symbolsProof_1a9}_${_LogicEntanglerEnvelope_a2e}`;
    const _enableGaslightingProof_29 = t.identifier(_transformFunctionSequence_d9f);
    const _sgxBoundaryProof_b8b = this.prng.pick(this.dictionary.symbols);
    const _sgxBoundarySequence_405 = this.prng.pick(this.dictionary.localRegisterNames);
    const _pcrPolicyBitmask_13d = `_${_sgxBoundaryProof_b8b}_${_LogicEntanglerEnvelope_a2e}`;
    const _ringBufferIntegrity_d53 = `${_sgxBoundarySequence_405}_${_LogicEntanglerEnvelope_a2e}`;
    const _SyferitEngineDelta_3aa = `${this.prng.nextUint32().toString(44788 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 22171)).padStart(64428 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 987), '0')}-${this.prng.nextUint32().toString(62446 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 2945)).padStart(45412 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 18707), '0')}`;
    const _nodeSequence_94f = `${_kindAttestation_f90} [ATTESTATION_ID:${_SyferitEngineDelta_3aa}]`;
    const _constructorProof_e78 = [this.prng.nextUint32() & 2147483646 + ((__sgxBoundarySequence_5a07 & 255) - 127) | 33339 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 31301), this.prng.nextUint32() & 2147483646 + ((__sgxBoundarySequence_5a07 & 255) - 127) | 55938 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 8956), this.prng.nextUint32() & 2147483646 + ((__sgxBoundarySequence_5a07 & 255) - 127) | 55643 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 8485), this.prng.nextUint32() & 2147483646 + ((__sgxBoundarySequence_5a07 & 255) - 127) | 34444 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 32498)];
    const _ringBufferBitmask_bc1 = this.mba.computeStringKey(_nodeSequence_94f, _constructorProof_e78);
    const _decoySymbolBitmask_700 = _ringBufferBitmask_bc1 >>> (39813 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 25598)) & (49185 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 14417));
    let _isBlockStatementBitmask_1b2 = 45712 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 19183);
    const _monotonicNonceDrift_d45 = [];
    const _enclaveDigestProof_4ff = rawStr => {
      function evaluateKind_b119(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a3112b5c-22c93823]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __hmacFrameVector_b119 = evaluateKind_b119(1450414003, 179592021, 762239577, 170726039);
      const _symbolsProof_a9d = _monotonicNonceDrift_d45.length;
      const _decoySymbolBitmask_acd = rawStr.split('').map((ch, charIdx) => {
        const byteKey = (_ringBufferBitmask_bc1 >>> (charIdx & (35108 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 29016))) * (37658 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 27501))) + Math.imul(charIdx + _symbolsProof_a9d, 53847 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 10765)) & (51200 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 12416));
        return (ch.charCodeAt(35389 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 29250)) ^ byteKey) & (43315 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 20915));
      });
      _monotonicNonceDrift_d45.push(_decoySymbolBitmask_acd);
      const _keyDerivationStateIntegrity_64 = this.mba.encodeNumberWithKey(_symbolsProof_a9d, _enableGaslightingProof_29, _ringBufferBitmask_bc1);
      const _hmacFrameVector_190 = t.callExpression(t.identifier(_pcrPolicyBitmask_13d), [_keyDerivationStateIntegrity_64]);
      _hmacFrameVector_190.__syferitProtected = true;
      return (__hmacFrameVector_b119 & 255) === 110 ? _hmacFrameVector_190 : (() => {
        function rotateBodyBlock_75ac(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:eb423be0-48672f6d]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __entropyNonceVector_75ac = rotateBodyBlock_75ac(1144535899, 1700609551, 1295804277, 1323187631);
        if ((__entropyNonceVector_75ac & 255) !== 208) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    const _hmacFrameAttestation_dce = this.mba;
    programPath.traverse({
      Function(fnPath) {
        function verifyPath_5385(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7def689c-37c3afc0]",
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
        const __entropySeedDigest_5385 = verifyPath_5385(1771299707, 1736626567, 299792533, 2038521115);
        if ((__entropySeedDigest_5385 & 255) !== 131) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        fnPath.skip();
      },
      NumericLiteral(numPath) {
        function assertNode_32fc(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7b6cf101-30e8a61f]",
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
        const __enclaveBoundaryCheck_32fc = assertNode_32fc(1780026043, 2121556793, 1394464421, 896992173);
        if ((__enclaveBoundaryCheck_32fc & 255) !== 194) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (numPath.node.__syferitProtected) return;
        let _dictionaryIntegrity_a58 = numPath.parentPath;
        while (_dictionaryIntegrity_a58 && _dictionaryIntegrity_a58 !== programPath) {
          if (_dictionaryIntegrity_a58.node.__syferitProtected) return;
          _dictionaryIntegrity_a58 = _dictionaryIntegrity_a58.parentPath;
        }
        const _stateKeysVector_3e3 = numPath.parent;
        if (t.isMemberExpression(_stateKeysVector_3e3) && !_stateKeysVector_3e3.computed) return;
        if (t.isObjectProperty(_stateKeysVector_3e3) && _stateKeysVector_3e3.key === numPath.node && !_stateKeysVector_3e3.computed) return;
        const _tpmPcrBankEnvelope_255 = numPath.node.value;
        const _enclaveDigestIntegrity_e7a = _hmacFrameAttestation_dce.encodeNumberWithKey(_tpmPcrBankEnvelope_255, _enableGaslightingProof_29, _ringBufferBitmask_bc1);
        numPath.replaceWith(_enclaveDigestIntegrity_e7a);
        _isBlockStatementBitmask_1b2++;
        numPath.skip();
      },
      StringLiteral(strPath) {
        if (strPath.node.__syferitProtected) return;
        let curr = strPath.parentPath;
        while (curr && curr !== programPath) {
          if (curr.node.__syferitProtected) return;
          if (t.isImportDeclaration(curr.node) || t.isExportAllDeclaration(curr.node) || t.isExportNamedDeclaration(curr.node) && curr.node.source === strPath.node) {
            return;
          }
          curr = curr.parentPath;
        }
        const parent = strPath.parent;
        if (t.isImportDeclaration(parent) || t.isExportDeclaration(parent)) return;
        if (t.isObjectProperty(parent) && parent.key === strPath.node && !parent.computed) return;
        const strVal = strPath.node.value;
        if (strVal.length >= (59702 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 4427)) && !strVal.startsWith('CRITICAL') && !strVal.startsWith('ASSERTION') && !strVal.startsWith('DMCA') && !strVal.startsWith('DTSA') && !strVal.startsWith('CFAA') && !strVal.startsWith('FINANCIAL') && !strVal.startsWith('EULA')) {
          const sboxCall = _enclaveDigestProof_4ff(strVal);
          strPath.replaceWith(sboxCall);
          _isBlockStatementBitmask_1b2++;
          strPath.skip();
        }
      }
    });
    if (_isBlockStatementBitmask_1b2 === (51140 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 16315))) {
      return false;
    }
    const _pathEnvelope_dfd = this.buildHashKeyFunction(_tpmPcrBankSequence_c83, _nodeSequence_94f, _decoySymbolBitmask_700, _isClassMethodIntegrity_1ed);
    _pathEnvelope_dfd.__syferitProtected = true;
    const _hmacFrameVector_45d = t.variableDeclaration(_verifyTpmPcrBankEnvelope_5a07(59537 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 4334)), [t.variableDeclarator(_enableGaslightingProof_29, t.callExpression(t.identifier(_tpmPcrBankSequence_c83), _constructorProof_e78.map(s => t.numericLiteral(s))))]);
    _hmacFrameVector_45d.__syferitProtected = true;
    const _tpmPcrBankEnvelope_9ae = [_pathEnvelope_dfd, _hmacFrameVector_45d];
    if (_monotonicNonceDrift_d45.length > (49484 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 14643)) && (Math.imul(Math.imul((_monotonicNonceDrift_d45.length | 0) ^ 95 | 1, (_monotonicNonceDrift_d45.length | 0) ^ 95 | 1), Math.imul((_monotonicNonceDrift_d45.length | 0) ^ 95 | 1, (_monotonicNonceDrift_d45.length | 0) ^ 95 | 1)) & 15 ^ (__sgxBoundarySequence_5a07 >>> 8 & 255 ^ 90)) === 165) {
      const sboxNodes = this.buildSboxRuntime(_ringBufferIntegrity_d53, _pcrPolicyBitmask_13d, _enableGaslightingProof_29, _monotonicNonceDrift_d45);
      _tpmPcrBankEnvelope_9ae.push(...sboxNodes);
    } else if (_monotonicNonceDrift_d45.length > (44441 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 21990)) && (Math.imul(Math.imul((_monotonicNonceDrift_d45.length | 0) ^ 114 | 1, (_monotonicNonceDrift_d45.length | 0) ^ 114 | 1), Math.imul((_monotonicNonceDrift_d45.length | 0) ^ 114 | 1, (_monotonicNonceDrift_d45.length | 0) ^ 114 | 1)) & 15 ^ (__sgxBoundarySequence_5a07 >>> 9 & 255 ^ 194)) === 63) {
      const sboxNodes = this.buildSboxRuntime(_ringBufferIntegrity_d53, _pcrPolicyBitmask_13d, _enableGaslightingProof_29, _monotonicNonceDrift_d45);
      _tpmPcrBankEnvelope_9ae.push(...sboxNodes);
    } else if (_monotonicNonceDrift_d45.length > (56202 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 9210)) && (Math.imul(Math.imul((_monotonicNonceDrift_d45.length | 0) ^ 92 | 1, (_monotonicNonceDrift_d45.length | 0) ^ 92 | 1), Math.imul((_monotonicNonceDrift_d45.length | 0) ^ 92 | 1, (_monotonicNonceDrift_d45.length | 0) ^ 92 | 1)) & 15 ^ (__sgxBoundarySequence_5a07 >>> 0 & 255 ^ 28)) === 108) {
      const sboxNodes = this.buildSboxRuntime(_ringBufferIntegrity_d53, _pcrPolicyBitmask_13d, _enableGaslightingProof_29, _monotonicNonceDrift_d45);
      _tpmPcrBankEnvelope_9ae.push(...sboxNodes);
    }
    let _ProprietaryEnclaveDelta_fd1 = 41524 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 23115);
    for (let i = 56441 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 9222); i < programPath.node.body.length; i++) {
      if (t.isImportDeclaration(programPath.node.body[i])) {
        _ProprietaryEnclaveDelta_fd1 = i + (61497 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 2119));
      }
    }
    programPath.node.body.splice(_ProprietaryEnclaveDelta_fd1, 50047 ^ (__sgxBoundarySequence_5a07 & 65535 ^ 15104), ..._tpmPcrBankEnvelope_9ae);
    return (__sgxBoundarySequence_5a07 & 255) === 127 ? true : (() => {
      function attestTpmPcrBankIntegrity_703e(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:375deeef-1b9c5ea8]",
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
      const __tpmPcrBankIntegrity_703e = attestTpmPcrBankIntegrity_703e(474219573, 237785311, 302844571, 1866989841);
      if ((__tpmPcrBankIntegrity_703e & 255) !== 204) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  buildHashKeyFunction(fnName, legalNotice, expectedNibble, assertionText) {
    function auditEnclaveDigestProof_7b59(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d79dbe66-b9f58380]",
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
    const __enclaveDigestProof_7b59 = auditEnclaveDigestProof_7b59(2070006433, 1615585891, 621752919, 684605931);
    const _enableGaslightingProof_7b59 = [[177, 251, 170, 42, 178], [76, 192, 133, 13, 150], [103, 173, 96, 224, 254], [2, 138, 91, 219, 194], [221, 87, 54, 190, 64, 210, 142], [248, 36, 27, 157, 90, 176, 83, 250, 187, 21, 213, 86, 2, 112, 83, 217, 153], [175, 2, 205, 108, 20], [157, 247, 188], [122, 210, 153], [87, 185, 124, 233, 187, 24], [94, 63, 9], [187, 24, 98], [148, 117, 191], [130, 17, 210, 74], [157, 248, 190, 43], [39, 132, 206], [82, 186, 97], [15, 97, 84, 209, 131, 240], [235, 65, 62, 169, 95, 210, 151, 10, 241, 37], [147, 112, 186], [159, 18, 221, 77], [158, 245, 187, 38], [34, 131, 205], [127, 220, 38], [43, 102, 73, 209], [226, 65, 23, 178], [142, 111, 185], [235, 72, 146], [183, 250, 165, 37], [118, 173, 131, 30], [122, 219, 37], [87, 52, 126], [176, 17, 91], [142, 105, 183], [230, 71, 145], [192, 163, 233], [28, 253, 199], [121, 214, 32], [77, 48, 126], [175, 12, 86], [243, 37, 255, 102, 56]];
    function _attestSgxBoundarySequence_7b59(_slot) {
      const _row = _enableGaslightingProof_7b59[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveDigestProof_7b59 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _stateKeysVector_c68 = t.identifier(_attestSgxBoundarySequence_7b59(5140 ^ (__enclaveDigestProof_7b59 & 65535 ^ 32506)));
    const _sgxBoundarySequence_1ba = t.identifier(_attestSgxBoundarySequence_7b59(13450 ^ (__enclaveDigestProof_7b59 & 65535 ^ 24165)));
    const _tpmPcrBankIntegrity_b64 = t.identifier(_attestSgxBoundarySequence_7b59(15246 ^ (__enclaveDigestProof_7b59 & 65535 ^ 20834)));
    const _bodyAttestation_5a3 = t.identifier(_attestSgxBoundarySequence_7b59(20190 ^ (__enclaveDigestProof_7b59 & 65535 ^ 9267)));
    const _kindAttestation_969 = t.identifier(_attestSgxBoundarySequence_7b59(26864 ^ (__enclaveDigestProof_7b59 & 65535 ^ 538)));
    const _nodeSequence_2d3 = t.identifier('_s');
    const _pcrPolicyBitmask_efb = t.identifier(_attestSgxBoundarySequence_7b59(4463 ^ (__enclaveDigestProof_7b59 & 65535 ^ 31620)));
    const _symbolsProof_35e = t.identifier('_h');
    const _SyferitEngineDelta_a51 = t.identifier('_i');
    const _hmacFrameAttestation_f37 = [t.variableDeclaration(_attestSgxBoundarySequence_7b59(7608 ^ (__enclaveDigestProof_7b59 & 65535 ^ 30544)), [t.variableDeclarator(_pcrPolicyBitmask_efb, t.stringLiteral(legalNotice)), t.variableDeclarator(_kindAttestation_969, t.arrayExpression([_stateKeysVector_c68, _sgxBoundarySequence_1ba, _tpmPcrBankIntegrity_b64, _bodyAttestation_5a3]))]), t.variableDeclaration(_attestSgxBoundarySequence_7b59(9348 ^ (__enclaveDigestProof_7b59 & 65535 ^ 20077)), [t.variableDeclarator(_symbolsProof_35e, t.numericLiteral(2166136261 + ((__enclaveDigestProof_7b59 & 255) - 238)))]), t.forStatement(t.variableDeclaration(_attestSgxBoundarySequence_7b59(9127 ^ (__enclaveDigestProof_7b59 & 65535 ^ 18753)), [t.variableDeclarator(_nodeSequence_2d3, t.numericLiteral(5192 ^ (__enclaveDigestProof_7b59 & 65535 ^ 32422)))]), t.binaryExpression('<', _nodeSequence_2d3, t.memberExpression(_kindAttestation_969, t.identifier(_attestSgxBoundarySequence_7b59(31411 ^ (__enclaveDigestProof_7b59 & 65535 ^ 4180))))), t.updateExpression('++', _nodeSequence_2d3), t.blockStatement([t.expressionStatement(t.assignmentExpression('=', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(10419 ^ (__enclaveDigestProof_7b59 & 65535 ^ 16983)), t.binaryExpression('^', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(22206 ^ (__enclaveDigestProof_7b59 & 65535 ^ 15451)), t.memberExpression(_kindAttestation_969, _nodeSequence_2d3, true), t.numericLiteral(15846 ^ (__enclaveDigestProof_7b59 & 65535 ^ 22280)))), t.numericLiteral(26879 ^ (__enclaveDigestProof_7b59 & 65535 ^ 529))))), t.expressionStatement(t.assignmentExpression('=', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(4230 ^ (__enclaveDigestProof_7b59 & 65535 ^ 31332)), t.callExpression(t.memberExpression(t.identifier(_attestSgxBoundarySequence_7b59(8918 ^ (__enclaveDigestProof_7b59 & 65535 ^ 18485))), t.identifier(_attestSgxBoundarySequence_7b59(29959 ^ (__enclaveDigestProof_7b59 & 65535 ^ 8167)))), [_symbolsProof_35e, t.numericLiteral(16794230 ^ (__enclaveDigestProof_7b59 & 65535 ^ 10507))]), t.numericLiteral(26039 ^ (__enclaveDigestProof_7b59 & 65535 ^ 3929))))), t.expressionStatement(t.assignmentExpression('^=', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(10655 ^ (__enclaveDigestProof_7b59 & 65535 ^ 17278)), _symbolsProof_35e, t.numericLiteral(9216 ^ (__enclaveDigestProof_7b59 & 65535 ^ 20195)))))])), t.forStatement(t.variableDeclaration(_attestSgxBoundarySequence_7b59(1243 ^ (__enclaveDigestProof_7b59 & 65535 ^ 28197)), [t.variableDeclarator(_SyferitEngineDelta_a51, t.numericLiteral(25454 ^ (__enclaveDigestProof_7b59 & 65535 ^ 2432)))]), t.binaryExpression('<', _SyferitEngineDelta_a51, t.memberExpression(_pcrPolicyBitmask_efb, t.identifier(_attestSgxBoundarySequence_7b59(7351 ^ (__enclaveDigestProof_7b59 & 65535 ^ 30280))))), t.updateExpression('++', _SyferitEngineDelta_a51), t.blockStatement([t.expressionStatement(t.assignmentExpression('^=', _symbolsProof_35e, t.callExpression(t.memberExpression(_pcrPolicyBitmask_efb, t.identifier(_attestSgxBoundarySequence_7b59(22186 ^ (__enclaveDigestProof_7b59 & 65535 ^ 15446)))), [_SyferitEngineDelta_a51]))), t.expressionStatement(t.assignmentExpression('=', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(4467 ^ (__enclaveDigestProof_7b59 & 65535 ^ 31630)), t.callExpression(t.memberExpression(t.identifier(_attestSgxBoundarySequence_7b59(807 ^ (__enclaveDigestProof_7b59 & 65535 ^ 27101))), t.identifier(_attestSgxBoundarySequence_7b59(15799 ^ (__enclaveDigestProof_7b59 & 65535 ^ 22348)))), [_symbolsProof_35e, t.numericLiteral(16801394 ^ (__enclaveDigestProof_7b59 & 65535 ^ 13583))]), t.numericLiteral(15634 ^ (__enclaveDigestProof_7b59 & 65535 ^ 22524))))), t.expressionStatement(t.assignmentExpression('^=', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(17168 ^ (__enclaveDigestProof_7b59 & 65535 ^ 10728)), _symbolsProof_35e, t.numericLiteral(29484 ^ (__enclaveDigestProof_7b59 & 65535 ^ 6607)))))])), t.expressionStatement(t.assignmentExpression('=', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(22879 ^ (__enclaveDigestProof_7b59 & 65535 ^ 13222)), t.callExpression(t.memberExpression(t.identifier(_attestSgxBoundarySequence_7b59(8360 ^ (__enclaveDigestProof_7b59 & 65535 ^ 19038))), t.identifier(_attestSgxBoundarySequence_7b59(11728 ^ (__enclaveDigestProof_7b59 & 65535 ^ 18215)))), [t.binaryExpression('^', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(29839 ^ (__enclaveDigestProof_7b59 & 65535 ^ 7803)), _symbolsProof_35e, t.numericLiteral(17767 ^ (__enclaveDigestProof_7b59 & 65535 ^ 12185)))), t.numericLiteral(2246822507 + ((__enclaveDigestProof_7b59 & 255) - 238))]), t.numericLiteral(9699 ^ (__enclaveDigestProof_7b59 & 65535 ^ 20237))))), t.expressionStatement(t.assignmentExpression('=', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(7801 ^ (__enclaveDigestProof_7b59 & 65535 ^ 29836)), t.callExpression(t.memberExpression(t.identifier(_attestSgxBoundarySequence_7b59(6548 ^ (__enclaveDigestProof_7b59 & 65535 ^ 29542))), t.identifier(_attestSgxBoundarySequence_7b59(27785 ^ (__enclaveDigestProof_7b59 & 65535 ^ 1658)))), [t.binaryExpression('^', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(18233 ^ (__enclaveDigestProof_7b59 & 65535 ^ 11721)), _symbolsProof_35e, t.numericLiteral(10268 ^ (__enclaveDigestProof_7b59 & 65535 ^ 17151)))), t.numericLiteral(3266489909 + ((__enclaveDigestProof_7b59 & 255) - 238))]), t.numericLiteral(10737 ^ (__enclaveDigestProof_7b59 & 65535 ^ 17183))))), t.expressionStatement(t.assignmentExpression('=', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(5681 ^ (__enclaveDigestProof_7b59 & 65535 ^ 31936)), t.binaryExpression('^', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(29908 ^ (__enclaveDigestProof_7b59 & 65535 ^ 7706)), _symbolsProof_35e, t.numericLiteral(26423 ^ (__enclaveDigestProof_7b59 & 65535 ^ 3529)))), t.numericLiteral(12721 ^ (__enclaveDigestProof_7b59 & 65535 ^ 23391))))), t.ifStatement(t.binaryExpression(_attestSgxBoundarySequence_7b59(20995 ^ (__enclaveDigestProof_7b59 & 65535 ^ 14540)), t.binaryExpression('&', _symbolsProof_35e, t.numericLiteral(44592 ^ (__enclaveDigestProof_7b59 & 65535 ^ 15137))), t.numericLiteral(27995 ^ (__enclaveDigestProof_7b59 & 65535 ^ 1973))), t.expressionStatement(t.assignmentExpression('=', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(10274 ^ (__enclaveDigestProof_7b59 & 65535 ^ 17134)), t.binaryExpression('|', _symbolsProof_35e, t.numericLiteral(28774 ^ (__enclaveDigestProof_7b59 & 65535 ^ 2495))), t.numericLiteral(9360 ^ (__enclaveDigestProof_7b59 & 65535 ^ 20094)))))), t.ifStatement(t.binaryExpression(_attestSgxBoundarySequence_7b59(31300 ^ (__enclaveDigestProof_7b59 & 65535 ^ 4233)), t.binaryExpression('&', t.binaryExpression(_attestSgxBoundarySequence_7b59(10733 ^ (__enclaveDigestProof_7b59 & 65535 ^ 17191)), _symbolsProof_35e, t.numericLiteral(20800 ^ (__enclaveDigestProof_7b59 & 65535 ^ 15294))), t.numericLiteral(45442 ^ (__enclaveDigestProof_7b59 & 65535 ^ 9363))), t.numericLiteral(243 ^ (__enclaveDigestProof_7b59 & 65535 ^ 27165))), t.expressionStatement(t.assignmentExpression('=', _symbolsProof_35e, t.binaryExpression(_attestSgxBoundarySequence_7b59(16903 ^ (__enclaveDigestProof_7b59 & 65535 ^ 10444)), t.binaryExpression('|', _symbolsProof_35e, t.numericLiteral(1932591104 + ((__enclaveDigestProof_7b59 & 255) - 238))), t.numericLiteral(11866 ^ (__enclaveDigestProof_7b59 & 65535 ^ 17588))))))];
    if (this.enableGaslighting) {
      _hmacFrameAttestation_f37.push(t.ifStatement(t.binaryExpression(_attestSgxBoundarySequence_7b59(26813 ^ (__enclaveDigestProof_7b59 & 65535 ^ 629)), t.binaryExpression('&', t.binaryExpression(_attestSgxBoundarySequence_7b59(30162 ^ (__enclaveDigestProof_7b59 & 65535 ^ 7963)), _symbolsProof_35e, t.numericLiteral(14656 ^ (__enclaveDigestProof_7b59 & 65535 ^ 21418))), t.numericLiteral(24332 ^ (__enclaveDigestProof_7b59 & 65535 ^ 13805))), t.numericLiteral(expectedNibble)), t.blockStatement([t.throwStatement(t.newExpression(t.identifier(_attestSgxBoundarySequence_7b59(916 ^ (__enclaveDigestProof_7b59 & 65535 ^ 26962))), [t.stringLiteral(assertionText)]))])));
    }
    _hmacFrameAttestation_f37.push(t.returnStatement(_symbolsProof_35e));
    return (__enclaveDigestProof_7b59 & 255) === 238 ? t.functionDeclaration(t.identifier(fnName), [_stateKeysVector_c68, _sgxBoundarySequence_1ba, _tpmPcrBankIntegrity_b64, _bodyAttestation_5a3], t.blockStatement(_hmacFrameAttestation_f37)) : (() => {
      function attestDictionary_f9bc(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d2d5ab6a-95f7f1e7]",
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
        if ((_h >>> 4 & 15) !== 7) {
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __enclaveBoundaryCheck_f9bc = attestDictionary_f9bc(1859358117, 1076558993, 514504829, 78662531);
      if ((__enclaveBoundaryCheck_f9bc & 255) !== 115) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  buildSboxRuntime(tableName, decoderName, localStateId, entries) {
    function assertPrng_f79d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2b3afda9-56b7d891]",
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
      if ((_h >>> 4 & 15) !== 9) {
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __enclaveDigestProof_f79d = assertPrng_f79d(1407958917, 1372675225, 707182557, 1473372107);
    const _keyDerivationStateIntegrity_f79d = [[245, 85, 222, 11, 94], [228, 44, 185, 242, 59], [191, 246, 149, 181], [90, 192, 123, 159], [20, 240, 122], [2, 146, 29, 89], [29, 117, 251, 58], [250, 82, 221, 8, 89], [237, 22, 170, 201, 60, 145], [133, 245, 146, 168, 52, 115, 240, 43, 72, 192, 65, 136], [101, 205, 82]];
    function _auditTransformFunction_f79d(_slot) {
      const _row = _keyDerivationStateIntegrity_f79d[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveDigestProof_f79d >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _isBlockStatementBitmask_f16 = t.variableDeclaration(_auditTransformFunction_f79d(8041 ^ (__enclaveDigestProof_f79d & 65535 ^ 2815)), [t.variableDeclarator(t.identifier(tableName), t.arrayExpression(entries.map(bytes => t.arrayExpression(bytes.map(b => t.numericLiteral(b))))))]);
    _isBlockStatementBitmask_f16.__syferitProtected = true;
    const _tpmPcrBankEnvelope_519 = t.identifier(_auditTransformFunction_f79d(3351 ^ (__enclaveDigestProof_f79d & 65535 ^ 6272)));
    const _ringBufferAttestation_5ef = t.identifier(_auditTransformFunction_f79d(25447 ^ (__enclaveDigestProof_f79d & 65535 ^ 30451)));
    const _SyferitEngineDelta_9eb = t.identifier('_b');
    const _isObjectMethodBitmask_f69 = t.identifier(_auditTransformFunction_f79d(8268 ^ (__enclaveDigestProof_f79d & 65535 ^ 13785)));
    const _prngSequence_74b = t.binaryExpression('&', t.binaryExpression('+', t.binaryExpression(_auditTransformFunction_f79d(26355 ^ (__enclaveDigestProof_f79d & 65535 ^ 29537)), localStateId, t.binaryExpression('*', t.binaryExpression('&', _isObjectMethodBitmask_f69, t.numericLiteral(15528 ^ (__enclaveDigestProof_f79d & 65535 ^ 10557))), t.numericLiteral(10860 ^ (__enclaveDigestProof_f79d & 65535 ^ 16370)))), t.callExpression(t.memberExpression(t.identifier(_auditTransformFunction_f79d(8052 ^ (__enclaveDigestProof_f79d & 65535 ^ 2791))), t.identifier(_auditTransformFunction_f79d(1758 ^ (__enclaveDigestProof_f79d & 65535 ^ 4942)))), [t.binaryExpression('+', _isObjectMethodBitmask_f69, _tpmPcrBankEnvelope_519), t.numericLiteral(32465 ^ (__enclaveDigestProof_f79d & 65535 ^ 27490))])), t.numericLiteral(29047 ^ (__enclaveDigestProof_f79d & 65535 ^ 25630)));
    const _tpmUnsealOffset_bff = t.functionDeclaration(t.identifier(decoderName), [_tpmPcrBankEnvelope_519], t.blockStatement([t.variableDeclaration(_auditTransformFunction_f79d(10030 ^ (__enclaveDigestProof_f79d & 65535 ^ 12991)), [t.variableDeclarator(_ringBufferAttestation_5ef, t.memberExpression(t.identifier(tableName), _tpmPcrBankEnvelope_519, true))]), t.returnStatement(t.callExpression(t.memberExpression(t.identifier(_auditTransformFunction_f79d(13546 ^ (__enclaveDigestProof_f79d & 65535 ^ 8564))), t.identifier(_auditTransformFunction_f79d(152 ^ (__enclaveDigestProof_f79d & 65535 ^ 5383)))), [t.spreadElement(t.callExpression(t.memberExpression(_ringBufferAttestation_5ef, t.identifier(_auditTransformFunction_f79d(3917 ^ (__enclaveDigestProof_f79d & 65535 ^ 6865)))), [t.arrowFunctionExpression([_SyferitEngineDelta_9eb, _isObjectMethodBitmask_f69], t.binaryExpression('&', t.binaryExpression('^', _SyferitEngineDelta_9eb, _prngSequence_74b), t.numericLiteral(18713 ^ (__enclaveDigestProof_f79d & 65535 ^ 23664))))]))]))]));
    _tpmUnsealOffset_bff.__syferitProtected = true;
    return (__enclaveDigestProof_f79d & 255) === 150 ? [_isBlockStatementBitmask_f16, _tpmUnsealOffset_bff] : (() => {
      function isolateKeyDerivationStateIntegrity_b894(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:503c1a60-d6c44caf]",
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
        if ((_h >>> 4 & 15) !== 7) {
          throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
        }
        return _h;
      }
      const __enclaveDigestIntegrity_b894 = isolateKeyDerivationStateIntegrity_b894(1437640293, 876519627, 1279737025, 1829828913);
      if ((__enclaveDigestIntegrity_b894 & 255) !== 120) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  injectDecoyBranches(fnPath, runtimeSeedExpr, keyId, keyVal) {
    function verifySoltrixStudiosContext_7a47(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bfa6cb06-f520651d]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __sgxBoundaryProof_7a47 = verifySoltrixStudiosContext_7a47(2080192757, 824811133, 1177988845, 266692625);
    const _pickIntegrity_7a47 = [[213, 247, 194], [91, 166, 116, 234, 243, 198, 250, 8, 97, 82, 19, 233, 249], [87, 122, 61, 191, 180, 216, 175, 7, 41, 89, 46, 114, 130, 165, 118], [106, 4, 83], [48, 27, 212, 101, 83, 171, 120, 245, 237, 193, 233, 13, 108, 83, 0, 174, 147, 156, 211], [198, 236, 206, 22, 83, 114, 40, 175, 168, 198, 144], [251, 149, 224]];
    function _auditEnclaveDigestProof_7a47(_slot) {
      const _row = _pickIntegrity_7a47[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sgxBoundaryProof_7a47 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__sgxBoundaryProof_7a47 & 255) !== 232) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _sgxBoundaryProof_eeb = this.prng.shuffle(this.dictionary.decoyTierStrings);
    const _nodeSequence_290 = this.prng.shuffle(this.dictionary.decoyPromoStrings);
    let _tpmUnsealOffset_e37 = 45589 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 6141);
    let _SyferitEngineDelta_372 = 63390 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 21110);
    const _ringBufferBitmask_f78 = this.mba;
    const _prngSequence_a05 = this.prng;
    fnPath.traverse({
      IfStatement(ifPath) {
        function verifySoltrixStudiosContext_675(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f6d98213-4b612127]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __keyDerivationStateIntegrity_675 = verifySoltrixStudiosContext_675(736380931, 609049157, 1425972939, 197737927);
        if ((__keyDerivationStateIntegrity_675 & 255) !== 32) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (ifPath.node.__syferitDecoyProcessed) return;
        ifPath.node.__syferitDecoyProcessed = true;
        const _dictionaryIntegrity_446 = ifPath.node.test;
        if (t.isBinaryExpression(_dictionaryIntegrity_446) && (_dictionaryIntegrity_446.operator === _auditEnclaveDigestProof_7a47(64432 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 24152)) || _dictionaryIntegrity_446.operator === '==') && t.isStringLiteral(_dictionaryIntegrity_446.right)) {
          const leftExpr = _dictionaryIntegrity_446.left;
          const isPromoLike = _dictionaryIntegrity_446.right.value === _dictionaryIntegrity_446.right.value.toUpperCase();
          const decoyStr = isPromoLike ? _nodeSequence_290[_SyferitEngineDelta_372++ % _nodeSequence_290.length] || _auditEnclaveDigestProof_7a47(62744 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 20721)) : _sgxBoundaryProof_eeb[_tpmUnsealOffset_e37++ % _sgxBoundaryProof_eeb.length] || _auditEnclaveDigestProof_7a47(64327 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 24237));
          const opaqueTrue = _ringBufferBitmask_f78.synthesizeQuorumGate(runtimeSeedExpr, keyId, keyVal, true);
          opaqueTrue.__syferitProtected = true;
          ifPath.node.test = t.logicalExpression('&&', _dictionaryIntegrity_446, opaqueTrue);
          const opaqueFalse = _ringBufferBitmask_f78.synthesizeQuorumGate(runtimeSeedExpr, keyId, keyVal, false);
          opaqueFalse.__syferitProtected = true;
          const decoyCondition = t.logicalExpression('&&', t.binaryExpression(_auditEnclaveDigestProof_7a47(48931 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 6856)), t.cloneNode(leftExpr, true), t.stringLiteral(decoyStr)), opaqueFalse);
          const decoyConsequent = t.cloneNode(ifPath.node.consequent, true);
          t.traverseFast(decoyConsequent, subNode => {
            function attestTpmPcrBankIntegrity_cce2(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7ad5f24d-cd2ca10e]",
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
              if ((_h >>> 4 & 15) !== 9) {
                throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
              }
              return _h;
            }
            const __enclaveDigestProof_cce2 = attestTpmPcrBankIntegrity_cce2(1405481995, 712761723, 1076780451, 405200459);
            if ((__enclaveDigestProof_cce2 & 255) !== 151) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            if (t.isNumericLiteral(subNode)) {
              const decoyMultipliers = [(42346 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535), (42360 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535), (42214 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535), (42138 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535), (42958 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535), (42910 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535)];
              subNode.value = _prngSequence_a05.pick(decoyMultipliers);
            }
          });
          let tail = ifPath.node;
          while (tail.alternate && t.isIfStatement(tail.alternate)) {
            tail.alternate.__syferitDecoyProcessed = true;
            const altTrue = _ringBufferBitmask_f78.synthesizeQuorumGate(runtimeSeedExpr, keyId, keyVal, true);
            altTrue.__syferitProtected = true;
            tail.alternate.test = t.logicalExpression('&&', tail.alternate.test, altTrue);
            tail = tail.alternate;
          }
          if (!tail.alternate) {
            const decoyIf = t.ifStatement(decoyCondition, decoyConsequent, null);
            decoyIf.__syferitDecoyProcessed = true;
            tail.alternate = decoyIf;
          }
          const headDecoyStr = isPromoLike ? _nodeSequence_290[_SyferitEngineDelta_372++ % _nodeSequence_290.length] || _auditEnclaveDigestProof_7a47(42070 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 442)) : _sgxBoundaryProof_eeb[_tpmUnsealOffset_e37++ % _sgxBoundaryProof_eeb.length] || _auditEnclaveDigestProof_7a47(62927 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 20514));
          const headOpaqueFalse = _ringBufferBitmask_f78.synthesizeQuorumGate(runtimeSeedExpr, keyId, keyVal, false);
          headOpaqueFalse.__syferitProtected = true;
          const headCondition = t.logicalExpression('&&', t.binaryExpression(_auditEnclaveDigestProof_7a47(48441 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 6359)), t.cloneNode(leftExpr, true), t.stringLiteral(headDecoyStr)), headOpaqueFalse);
          const headConsequent = t.cloneNode(ifPath.node.consequent, true);
          t.traverseFast(headConsequent, subNode => {
            function unsealHmacFrameVector_9161(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:082ce505-e1e11289]",
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
                throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
              }
              return _h;
            }
            const __enclaveBoundaryCheck_9161 = unsealHmacFrameVector_9161(724548043, 606560089, 1343767737, 226681181);
            if ((__enclaveBoundaryCheck_9161 & 255) !== 5) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            if (t.isNumericLiteral(subNode)) {
              const decoyMultipliers = [(42346 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535), (42360 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535), (42214 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535), (42138 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535), (42958 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535), (42910 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535)];
              subNode.value = _prngSequence_a05.pick(decoyMultipliers);
            }
          });
          const wrappedIf = t.ifStatement(headCondition, headConsequent, ifPath.node);
          wrappedIf.__syferitDecoyProcessed = true;
          ifPath.replaceWith(wrappedIf);
          ifPath.skip();
        }
        if (t.isBinaryExpression(_dictionaryIntegrity_446) && (_dictionaryIntegrity_446.operator === '>' || _dictionaryIntegrity_446.operator === '>=') && t.isNumericLiteral(_dictionaryIntegrity_446.right) && t.isExpression(_dictionaryIntegrity_446.left)) {
          const leftExpr = _dictionaryIntegrity_446.left;
          const origThreshold = _dictionaryIntegrity_446.right.value;
          const decoyThreshold = origThreshold + (57716 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 17555));
          const opaqueTrue = _ringBufferBitmask_f78.synthesizeQuorumGate(t.cloneNode(leftExpr, true), keyId, keyVal, true);
          opaqueTrue.__syferitProtected = true;
          ifPath.node.test = t.logicalExpression('&&', _dictionaryIntegrity_446, opaqueTrue);
          const opaqueFalse = _ringBufferBitmask_f78.synthesizeQuorumGate(t.cloneNode(leftExpr, true), keyId, keyVal, false);
          opaqueFalse.__syferitProtected = true;
          const decoyCondition = t.logicalExpression('&&', t.binaryExpression('>', t.cloneNode(leftExpr, true), t.numericLiteral(decoyThreshold)), opaqueFalse);
          const decoyConsequent = t.cloneNode(ifPath.node.consequent, true);
          t.traverseFast(decoyConsequent, subNode => {
            function attestTpmPcrBankIntegrity_6d73(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0acfa20e-2074156c]",
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
                throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
              }
              return _h;
            }
            const __enclaveBoundaryCheck_6d73 = attestTpmPcrBankIntegrity_6d73(315034571, 1445291365, 416005817, 2013056227);
            if ((__enclaveBoundaryCheck_6d73 & 255) !== 6) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            if (t.isNumericLiteral(subNode)) {
              subNode.value = Number((subNode.value + (42480 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535)).toFixed(41663 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 1877)));
            }
          });
          let tail = ifPath.node;
          while (tail.alternate && t.isIfStatement(tail.alternate)) {
            tail.alternate.__syferitDecoyProcessed = true;
            const altTrue = _ringBufferBitmask_f78.synthesizeQuorumGate(t.cloneNode(leftExpr, true), keyId, keyVal, true);
            altTrue.__syferitProtected = true;
            tail.alternate.test = t.logicalExpression('&&', tail.alternate.test, altTrue);
            tail = tail.alternate;
          }
          if (!tail.alternate) {
            const decoyIf = t.ifStatement(decoyCondition, decoyConsequent, null);
            decoyIf.__syferitDecoyProcessed = true;
            tail.alternate = decoyIf;
          }
          const headOpaqueFalse = _ringBufferBitmask_f78.synthesizeQuorumGate(t.cloneNode(leftExpr, true), keyId, keyVal, false);
          headOpaqueFalse.__syferitProtected = true;
          const headCondition = t.logicalExpression('&&', t.binaryExpression('>', t.cloneNode(leftExpr, true), t.numericLiteral(origThreshold * (51240 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 28098)))), headOpaqueFalse);
          const headConsequent = t.cloneNode(ifPath.node.consequent, true);
          t.traverseFast(headConsequent, subNode => {
            function unsealRingBufferProof_592c(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:dc500706-cce74590]",
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
                throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
              }
              return _h;
            }
            const __sgxBoundarySequence_592c = unsealRingBufferProof_592c(1572079181, 1752610627, 459328109, 640335967);
            if ((__sgxBoundarySequence_592c & 255) !== 30) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            if (t.isNumericLiteral(subNode)) {
              subNode.value = Number((subNode.value + (42486 ^ __sgxBoundaryProof_7a47 & 65535) / (8573 ^ __sgxBoundaryProof_7a47 >>> 16 & 65535)).toFixed(45105 ^ (__sgxBoundaryProof_7a47 & 65535 ^ 5595)));
            }
          });
          const wrappedIf = t.ifStatement(headCondition, headConsequent, ifPath.node);
          wrappedIf.__syferitDecoyProcessed = true;
          ifPath.replaceWith(wrappedIf);
          ifPath.skip();
        }
      }
    });
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_6edb.invoke && window.__syferitIPC_6edb.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 1204053468,
    channelSig: "SIG_FRAME_6EDB"
  });
}