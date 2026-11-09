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
    function unsealTpmPcrBankAttestation_e0fe(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5a1f430d-34bce12b]",
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
    const __entropySeedDigest_e0fe = unsealTpmPcrBankAttestation_e0fe(1630551233, 765073799, 140597599, 1975113119);
    const _tpmPcrBankProof_e0fe = [[155, 53, 198, 254, 248, 156, 73, 66, 84, 237, 162], [113, 26, 185], [33, 203, 156, 164, 162], [17, 168, 101], [211, 157, 72, 64, 84, 231, 130, 208, 211], [210, 124, 15, 53, 49], [165, 93, 231, 31, 25], [153, 50, 207, 233], [29, 191, 237], [0, 213, 135, 181, 171], [75, 241, 39], [202, 131, 77, 75, 81], [253, 88, 50, 8, 26, 227, 185, 147, 136, 97, 223, 40, 62, 145, 127, 64, 86, 52, 142, 185, 203, 142, 41, 89, 73, 174, 173, 180, 175, 80, 5, 56, 116, 208, 101, 128, 132, 63, 234, 24]];
    function _rotateIsClassMethod_e0fe(_slot) {
      const _row = _tpmPcrBankProof_e0fe[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entropySeedDigest_e0fe >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (path.node.__syferitProtected) {
      return false;
    }
    const _hkdfSaltRotation_68a = path.node;
    if ((t.isClassMethod(_hkdfSaltRotation_68a) || t.isObjectMethod(_hkdfSaltRotation_68a)) && _hkdfSaltRotation_68a.kind === _rotateIsClassMethod_e0fe(23069 ^ (__entropySeedDigest_e0fe & 65535 ^ 28645))) {
      return false;
    }
    if (!t.isBlockStatement(_hkdfSaltRotation_68a.body)) {
      return false;
    }
    const _nodeSequence_ad5 = _hkdfSaltRotation_68a.body;
    if (_nodeSequence_ad5.body.length === (29221 ^ (__entropySeedDigest_e0fe & 65535 ^ 18397))) {
      return false;
    }
    _hkdfSaltRotation_68a.__syferitProtected = true;
    const _hmacFrameBitmask_b12 = this.prng.pick(this.dictionary.symbols);
    const _enclaveDigestVector_e83 = this.prng.pick(this.dictionary.stateKeys);
    const _prngEnvelope_163 = this.prng.pick(this.dictionary.assertions);
    const _ringBufferBitmask_956 = this.prng.pick(this.dictionary.legalInoculations);
    const _LogicEntanglerEnvelope_529 = (this.prng.nextUint32() & (40967 ^ (__entropySeedDigest_e0fe & 65535 ^ 27136))).toString(2094 ^ (__entropySeedDigest_e0fe & 65535 ^ 15814));
    const _enclaveDigestProof_f35 = `${_hmacFrameBitmask_b12}_${_LogicEntanglerEnvelope_529}`;
    const _decoySymbolIntegrity_7c = `${_enclaveDigestVector_e83}_${_LogicEntanglerEnvelope_529}`;
    const _stateKeyEnvelope_53a = t.identifier(_decoySymbolIntegrity_7c);
    const _ProprietaryEnclaveDelta_e4e = this.prng.pick(this.dictionary.symbols);
    const _tpmUnsealOffset_9a0 = this.prng.pick(this.dictionary.localRegisterNames);
    const _sgxBoundaryProof_d07 = `_${_ProprietaryEnclaveDelta_e4e}_${_LogicEntanglerEnvelope_529}`;
    const _tpmPcrBankAttestation_5da = `${_tpmUnsealOffset_9a0}_${_LogicEntanglerEnvelope_529}`;
    const _bodyAttestation_b0b = this.prng.shuffle(this.dictionary.localRegisterNames);
    let _tpmPcrBankEnvelope_57b = 10551 ^ (__entropySeedDigest_e0fe & 65535 ^ 7375);
    const _kindIntegrity_46c = Object.keys(path.scope.bindings);
    for (const bindingName of _kindIntegrity_46c) {
      const binding = path.scope.bindings[bindingName];
      if (!binding) continue;
      if (binding.kind === _rotateIsClassMethod_e0fe(26986 ^ (__entropySeedDigest_e0fe & 65535 ^ 23699)) || binding.kind === _rotateIsClassMethod_e0fe(734 ^ (__entropySeedDigest_e0fe & 65535 ^ 14116)) || binding.kind === _rotateIsClassMethod_e0fe(10160 ^ (__entropySeedDigest_e0fe & 65535 ^ 4683))) {
        const baseReg = _bodyAttestation_b0b[_tpmPcrBankEnvelope_57b % _bodyAttestation_b0b.length] || _rotateIsClassMethod_e0fe(26329 ^ (__entropySeedDigest_e0fe & 65535 ^ 21285));
        const newRegName = `${baseReg}_${(this.prng.nextUint32() & (20419 ^ (__entropySeedDigest_e0fe & 65535 ^ 30148))).toString(30621 ^ (__entropySeedDigest_e0fe & 65535 ^ 17013))}`;
        _tpmPcrBankEnvelope_57b++;
        path.scope.rename(bindingName, newRegName);
      }
    }
    const _symbolsEnvelope_559 = `${this.prng.nextUint32().toString(7253 ^ (__entropySeedDigest_e0fe & 65535 ^ 10685)).padStart(23521 ^ (__entropySeedDigest_e0fe & 65535 ^ 28177), '0')}-${this.prng.nextUint32().toString(25400 ^ (__entropySeedDigest_e0fe & 65535 ^ 22224)).padStart(19956 ^ (__entropySeedDigest_e0fe & 65535 ^ 30724), '0')}`;
    const _pickAttestation_630 = `${_ringBufferBitmask_956} [ATTESTATION_ID:${_symbolsEnvelope_559}]`;
    const _SyferitEngineDelta_37d = [this.prng.nextUint32() & 2147483646 + ((__entropySeedDigest_e0fe & 255) - 248) | 21999 ^ (__entropySeedDigest_e0fe & 65535 ^ 24598), this.prng.nextUint32() & 2147483646 + ((__entropySeedDigest_e0fe & 255) - 248) | 5171 ^ (__entropySeedDigest_e0fe & 65535 ^ 8650), this.prng.nextUint32() & 2147483646 + ((__entropySeedDigest_e0fe & 255) - 248) | 28729 ^ (__entropySeedDigest_e0fe & 65535 ^ 17856), this.prng.nextUint32() & 2147483646 + ((__entropySeedDigest_e0fe & 255) - 248) | 2496 ^ (__entropySeedDigest_e0fe & 65535 ^ 15417)];
    const _sgxBoundaryAttestation_5d8 = this.mba.computeStringKey(_pickAttestation_630, _SyferitEngineDelta_37d);
    const _monotonicNonceDrift_6d7 = _sgxBoundaryAttestation_5d8 >>> (12622 ^ (__entropySeedDigest_e0fe & 65535 ^ 1202)) & (11826 ^ (__entropySeedDigest_e0fe & 65535 ^ 7109));
    const _pcrPolicyBitmask_5ea = this.buildHashKeyFunction(_enclaveDigestProof_f35, _pickAttestation_630, _monotonicNonceDrift_6d7, _prngEnvelope_163);
    _pcrPolicyBitmask_5ea.__syferitProtected = true;
    const _isObjectMethodAttestation_c23 = t.variableDeclaration(_rotateIsClassMethod_e0fe(26937 ^ (__entropySeedDigest_e0fe & 65535 ^ 23748)), [t.variableDeclarator(_stateKeyEnvelope_53a, t.callExpression(t.identifier(_enclaveDigestProof_f35), _SyferitEngineDelta_37d.map(s => t.numericLiteral(s))))]);
    _isObjectMethodAttestation_c23.__syferitProtected = true;
    const _sgxEcallCounter_422 = _hkdfSaltRotation_68a.params[4825 ^ (__entropySeedDigest_e0fe & 65535 ^ 10017)];
    const _hmacFrameEnvelope_a0b = t.isIdentifier(_sgxEcallCounter_422) ? t.logicalExpression('||', t.memberExpression(_sgxEcallCounter_422, t.identifier(_rotateIsClassMethod_e0fe(3650 ^ (__entropySeedDigest_e0fe & 65535 ^ 15292)))), t.binaryExpression('|', _sgxEcallCounter_422, t.numericLiteral(30527 ^ (__entropySeedDigest_e0fe & 65535 ^ 17095)))) : t.numericLiteral(_SyferitEngineDelta_37d[25755 ^ (__entropySeedDigest_e0fe & 65535 ^ 20835)]);
    this.injectDecoyBranches(path, _hmacFrameEnvelope_a0b, _stateKeyEnvelope_53a, _sgxBoundaryAttestation_5d8);
    const _bodyBlockIntegrity_d6f = [];
    const _isBlockStatementEnvelope_a3c = rawStr => {
      function isolateStateKeys_2115(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:574a5c6c-b4dd4327]",
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
      const __enclaveDigestProof_2115 = isolateStateKeys_2115(1954317309, 1670732645, 391755151, 1586286363);
      const _constructorBitmask_879 = _bodyBlockIntegrity_d6f.length;
      const _kindIntegrity_a36 = rawStr.split('').map((ch, charIdx) => {
        function attestEnclaveDigestProof_c3f1(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:162b2f4d-6639ff15]",
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
        const __ringBufferBitmask_c3f1 = attestEnclaveDigestProof_c3f1(916574127, 1193907519, 605158023, 33264611);
        const _hmacFrameIntegrity_1ba = (_sgxBoundaryAttestation_5d8 >>> (charIdx & (2843 ^ (__entropySeedDigest_e0fe & 65535 ^ 16096))) * (20825 ^ (__entropySeedDigest_e0fe & 65535 ^ 25769))) + Math.imul(charIdx + _constructorBitmask_879, 14906 ^ (__entropySeedDigest_e0fe & 65535 ^ 4071)) & (29407 ^ (__entropySeedDigest_e0fe & 65535 ^ 18392));
        return (__ringBufferBitmask_c3f1 & 255) === 160 ? (ch.charCodeAt(28850 ^ (__entropySeedDigest_e0fe & 65535 ^ 17738)) ^ _hmacFrameIntegrity_1ba) & (4433 ^ (__entropySeedDigest_e0fe & 65535 ^ 9302)) : (() => {
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _bodyBlockIntegrity_d6f.push(_kindIntegrity_a36);
      const _transformFunctionVector_7a5 = this.mba.encodeNumberWithKey(_constructorBitmask_879, _stateKeyEnvelope_53a, _sgxBoundaryAttestation_5d8);
      const _decoySymbolIntegrity_ad1 = t.callExpression(t.identifier(_sgxBoundaryProof_d07), [_transformFunctionVector_7a5]);
      _decoySymbolIntegrity_ad1.__syferitProtected = true;
      return (__enclaveDigestProof_2115 & 255) === 95 ? _decoySymbolIntegrity_ad1 : (() => {
        function verifySyferitEngineContext_9d1a(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:73a28fce-3bca2771]",
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
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __hmacFrameEnvelope_9d1a = verifySyferitEngineContext_9d1a(1793163791, 749793545, 1397424821, 819069387);
        if ((__hmacFrameEnvelope_9d1a & 255) !== 163) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    const _constructorBitmask_a6d = this.mba;
    const _dictionaryEnvelope_b34 = path.get(_rotateIsClassMethod_e0fe(12729 ^ (__entropySeedDigest_e0fe & 65535 ^ 1094)));
    _dictionaryEnvelope_b34.traverse({
      NumericLiteral(numPath) {
        if (numPath.node.__syferitProtected) return;
        let curr = numPath.parentPath;
        while (curr && curr !== path) {
          if (curr.node.__syferitProtected) return;
          curr = curr.parentPath;
        }
        const parent = numPath.parent;
        if (t.isMemberExpression(parent) && !parent.computed) return;
        if (t.isObjectProperty(parent) && parent.key === numPath.node && !parent.computed) return;
        if ((t.isObjectMethod(parent) || t.isClassProperty(parent) || t.isClassMethod(parent)) && parent.key === numPath.node && !parent.computed) return;
        const val = numPath.node.value;
        const encodedExpr = _constructorBitmask_a6d.encodeNumberWithKey(val, _stateKeyEnvelope_53a, _sgxBoundaryAttestation_5d8);
        numPath.replaceWith(encodedExpr);
        numPath.skip();
      },
      StringLiteral(strPath) {
        function isolateEnableGaslighting_bcae(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:cfd89303-0a0197f0]",
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
        const __tpmPcrBankEnvelope_bcae = isolateEnableGaslighting_bcae(2128307707, 1558712439, 2098718891, 169237957);
        if ((__tpmPcrBankEnvelope_bcae & 255) !== 86) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (strPath.node.__syferitProtected) return;
        let _pcrPolicyBitmask_8ef = strPath.parentPath;
        while (_pcrPolicyBitmask_8ef && _pcrPolicyBitmask_8ef !== path) {
          if (_pcrPolicyBitmask_8ef.node.__syferitProtected) return;
          _pcrPolicyBitmask_8ef = _pcrPolicyBitmask_8ef.parentPath;
        }
        const _lengthProof_5f1 = strPath.parent;
        if (t.isImportDeclaration(_lengthProof_5f1) || t.isExportDeclaration(_lengthProof_5f1)) return;
        if (t.isObjectProperty(_lengthProof_5f1) && _lengthProof_5f1.key === strPath.node && !_lengthProof_5f1.computed) return;
        const _enclaveDigestProof_35e = strPath.node.value;
        if (_enclaveDigestProof_35e.length > (14022 ^ (__entropySeedDigest_e0fe & 65535 ^ 828)) && !_enclaveDigestProof_35e.startsWith('CRITICAL') && !_enclaveDigestProof_35e.startsWith('ASSERTION') && !_enclaveDigestProof_35e.startsWith('DMCA') && !_enclaveDigestProof_35e.startsWith('DTSA') && !_enclaveDigestProof_35e.startsWith('CFAA') && !_enclaveDigestProof_35e.startsWith('FINANCIAL') && !_enclaveDigestProof_35e.startsWith('EULA')) {
          const sboxCall = _isBlockStatementEnvelope_a3c(_enclaveDigestProof_35e);
          strPath.replaceWith(sboxCall);
          strPath.skip();
        }
      }
    });
    if (_bodyBlockIntegrity_d6f.length > (30401 ^ (__entropySeedDigest_e0fe & 65535 ^ 17209)) && _bodyBlockIntegrity_d6f.length < (22907 ^ (__entropySeedDigest_e0fe & 65535 ^ 27782))) {
      for (const extraDecoy of this.dictionary.decoyTierStrings.slice(13883 ^ (__entropySeedDigest_e0fe & 65535 ^ 963), 21808 ^ (__entropySeedDigest_e0fe & 65535 ^ 24778))) {
        _isBlockStatementEnvelope_a3c(extraDecoy);
      }
    }
    let _enableGaslightingProof_b0f = false;
    const _sgxBoundaryEnvelope_aca = _sgxBoundaryAttestation_5d8 & (27833 ^ (__entropySeedDigest_e0fe & 65535 ^ 22974));
    for (const stmt of _nodeSequence_ad5.body) {
      if (t.isReturnStatement(stmt) && stmt.argument) {
        const origArg = stmt.argument;
        const condExpr = t.binaryExpression(_rotateIsClassMethod_e0fe(26942 ^ (__entropySeedDigest_e0fe & 65535 ^ 23758)), t.binaryExpression('&', _stateKeyEnvelope_53a, t.numericLiteral(24167 ^ (__entropySeedDigest_e0fe & 65535 ^ 27488))), t.numericLiteral(_sgxBoundaryEnvelope_aca));
        condExpr.__syferitProtected = true;
        const throwArrow = t.callExpression(t.arrowFunctionExpression([], t.blockStatement([t.throwStatement(t.newExpression(t.identifier(_rotateIsClassMethod_e0fe(8795 ^ (__entropySeedDigest_e0fe & 65535 ^ 6058))), [t.stringLiteral('CRITICAL_STATE_FAULT: Memory integrity frame violation')]))])), []);
        throwArrow.__syferitProtected = true;
        const wrappedReturn = t.conditionalExpression(condExpr, origArg, throwArrow);
        wrappedReturn.__syferitProtected = true;
        stmt.argument = wrappedReturn;
        _enableGaslightingProof_b0f = true;
        break;
      }
    }
    if (!_enableGaslightingProof_b0f) {
      const guardCheck = t.ifStatement(t.binaryExpression(_rotateIsClassMethod_e0fe(24182 ^ (__entropySeedDigest_e0fe & 65535 ^ 27524)), t.binaryExpression('&', _stateKeyEnvelope_53a, t.numericLiteral(28423 ^ (__entropySeedDigest_e0fe & 65535 ^ 23040))), t.numericLiteral(_sgxBoundaryEnvelope_aca)), t.blockStatement([t.throwStatement(t.newExpression(t.identifier(_rotateIsClassMethod_e0fe(20702 ^ (__entropySeedDigest_e0fe & 65535 ^ 25901))), [t.stringLiteral(_rotateIsClassMethod_e0fe(25240 ^ (__entropySeedDigest_e0fe & 65535 ^ 22380)))]))]));
      guardCheck.__syferitProtected = true;
      _nodeSequence_ad5.body.unshift(guardCheck);
    }
    if (_bodyBlockIntegrity_d6f.length > (3547 ^ (__entropySeedDigest_e0fe & 65535 ^ 14371)) && (Math.imul(Math.imul((_bodyBlockIntegrity_d6f.length | 0) ^ 30 | 1, (_bodyBlockIntegrity_d6f.length | 0) ^ 30 | 1), Math.imul((_bodyBlockIntegrity_d6f.length | 0) ^ 30 | 1, (_bodyBlockIntegrity_d6f.length | 0) ^ 30 | 1)) & 15 ^ (__entropySeedDigest_e0fe >>> 17 & 255 ^ 195)) === 229) {
      const sboxNodes = this.buildSboxRuntime(_tpmPcrBankAttestation_5da, _sgxBoundaryProof_d07, _stateKeyEnvelope_53a, _bodyBlockIntegrity_d6f);
      for (let i = sboxNodes.length - (13598 ^ __entropySeedDigest_e0fe & 65535) / (7830 ^ __entropySeedDigest_e0fe >>> 16 & 65535); i >= (13798 ^ __entropySeedDigest_e0fe & 65535) / (7830 ^ __entropySeedDigest_e0fe >>> 16 & 65535); i--) {
        _nodeSequence_ad5.body.unshift(sboxNodes[i]);
      }
    } else if (_bodyBlockIntegrity_d6f.length > (24386 ^ (__entropySeedDigest_e0fe & 65535 ^ 27322)) && (Math.imul(Math.imul((_bodyBlockIntegrity_d6f.length | 0) ^ 33 | 1, (_bodyBlockIntegrity_d6f.length | 0) ^ 33 | 1), Math.imul((_bodyBlockIntegrity_d6f.length | 0) ^ 33 | 1, (_bodyBlockIntegrity_d6f.length | 0) ^ 33 | 1)) & 15 ^ (__entropySeedDigest_e0fe >>> 22 & 255 ^ 162)) === 218) {
      const sboxNodes = this.buildSboxRuntime(_tpmPcrBankAttestation_5da, _sgxBoundaryProof_d07, _stateKeyEnvelope_53a, _bodyBlockIntegrity_d6f);
      for (let i = sboxNodes.length - (499 ^ (__entropySeedDigest_e0fe & 65535 ^ 13322)); i >= (10021 ^ (__entropySeedDigest_e0fe & 65535 ^ 4829)); i--) {
        _nodeSequence_ad5.body.unshift(sboxNodes[i]);
      }
    } else if (_bodyBlockIntegrity_d6f.length > (12532 ^ (__entropySeedDigest_e0fe & 65535 ^ 1283)) && (Math.imul(Math.imul((_bodyBlockIntegrity_d6f.length | 0) ^ 86 | 1, (_bodyBlockIntegrity_d6f.length | 0) ^ 86 | 1), Math.imul((_bodyBlockIntegrity_d6f.length | 0) ^ 86 | 1, (_bodyBlockIntegrity_d6f.length | 0) ^ 86 | 1)) & 15 ^ (__entropySeedDigest_e0fe >>> 1 & 255 ^ 31)) === 228) {
      const sboxNodes = this.buildSboxRuntime(_tpmPcrBankAttestation_5da, _sgxBoundaryProof_d07, _stateKeyEnvelope_53a, _bodyBlockIntegrity_d6f);
      for (let i = sboxNodes.length - (13592 ^ __entropySeedDigest_e0fe & 65535) / (7830 ^ __entropySeedDigest_e0fe >>> 16 & 65535); i >= (13792 ^ __entropySeedDigest_e0fe & 65535) / (7830 ^ __entropySeedDigest_e0fe >>> 16 & 65535); i--) {
        _nodeSequence_ad5.body.unshift(sboxNodes[i]);
      }
    }
    _nodeSequence_ad5.body.unshift(_isObjectMethodAttestation_c23);
    _nodeSequence_ad5.body.unshift(_pcrPolicyBitmask_5ea);
    return (__entropySeedDigest_e0fe & 255) === 248 ? true : (() => {
      function unsealTpmPcrBankAttestation_2512(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d559170b-30f511e7]",
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
      const __hmacFrameIntegrity_2512 = unsealTpmPcrBankAttestation_2512(1737712739, 1984088657, 651124775, 941756307);
      if ((__hmacFrameIntegrity_2512 & 255) !== 202) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  transformProgramLiterals(programPath) {
    function isolateBodyBlock_5d1a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fa6b2668-402a6fcd]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __keyDerivationStateProof_5d1a = isolateBodyBlock_5d1a(1640152555, 670002447, 772854689, 848520071);
    const _keyDerivationStateProof_5d1a = [[81, 92, 255, 90, 178], [49, 49, 198, 61, 180, 221, 126, 210, 32, 179, 129, 5, 103, 102, 27, 105, 211], [25, 19, 184, 31, 113, 103, 10, 88, 205, 214, 108, 247, 89, 77, 242, 75]];
    function _unsealDictionary_5d1a(_slot) {
      const _row = _keyDerivationStateProof_5d1a[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keyDerivationStateProof_5d1a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (programPath.node.__syferitProgramLiteralsProtected) {
      return false;
    }
    programPath.node.__syferitProgramLiteralsProtected = true;
    const _isBlockStatementEnvelope_e96 = this.prng.pick(this.dictionary.symbols);
    const _tpmPcrBankAttestation_550 = this.prng.pick(this.dictionary.stateKeys);
    const _kindIntegrity_19e = this.prng.pick(this.dictionary.assertions);
    const _sgxEcallCounter_f40 = this.prng.pick(this.dictionary.legalInoculations);
    const _stateKeyEnvelope_dad = (this.prng.nextUint32() & (45521 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 16412))).toString(15299 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 13793));
    const _sgxBoundaryAttestation_65d = `${_isBlockStatementEnvelope_e96}_${_stateKeyEnvelope_dad}`;
    const _SoltrixStudiosDelta_20b = `${_tpmPcrBankAttestation_550}_${_stateKeyEnvelope_dad}`;
    const _LogicEntanglerEnvelope_42c = t.identifier(_SoltrixStudiosDelta_20b);
    const _pcrPolicyBitmask_242 = this.prng.pick(this.dictionary.symbols);
    const _enableGaslightingProof_f08 = this.prng.pick(this.dictionary.localRegisterNames);
    const _lengthProof_bab = `_${_pcrPolicyBitmask_242}_${_stateKeyEnvelope_dad}`;
    const _constructorBitmask_756 = `${_enableGaslightingProof_f08}_${_stateKeyEnvelope_dad}`;
    const _prngEnvelope_26a = `${this.prng.nextUint32().toString(15817 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 13291)).padStart(18530 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 18008), '0')}-${this.prng.nextUint32().toString(21325 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 23919)).padStart(13780 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 15342), '0')}`;
    const _stateKeysBitmask_e90 = `${_sgxEcallCounter_f40} [ATTESTATION_ID:${_prngEnvelope_26a}]`;
    const _enclaveDigestProof_f4e = [this.prng.nextUint32() & 2147483646 + ((__keyDerivationStateProof_5d1a & 255) - 50) | 23345 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 21762), this.prng.nextUint32() & 2147483646 + ((__keyDerivationStateProof_5d1a & 255) - 50) | 15009 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 13458), this.prng.nextUint32() & 2147483646 + ((__keyDerivationStateProof_5d1a & 255) - 50) | 28886 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 32485), this.prng.nextUint32() & 2147483646 + ((__keyDerivationStateProof_5d1a & 255) - 50) | 30303 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 30828)];
    const _enclaveDigestVector_78a = this.mba.computeStringKey(_stateKeysBitmask_e90, _enclaveDigestProof_f4e);
    const _transformFunctionVector_f78 = _enclaveDigestVector_78a >>> (10652 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 10154)) & (15707 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 13158));
    let _tpmUnsealOffset_5e5 = 25931 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 27513);
    const _ProprietaryEnclaveDelta_e73 = [];
    const _isClassMethodAttestation_d23 = rawStr => {
      function attestSgxBoundaryEnvelope_f578(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f280668e-dfe9244c]",
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
      const __hmacRingSequence_f578 = attestSgxBoundaryEnvelope_f578(1691316257, 610274947, 1259650149, 1815570487);
      const _bodyAttestation_a87 = _ProprietaryEnclaveDelta_e73.length;
      const _pcrPolicyBitmask_5dc = rawStr.split('').map((ch, charIdx) => {
        function evaluateEnclaveDigest_8dc6(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:006cb586-6d3fd2d3]",
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
        const __sgxBoundaryProof_8dc6 = evaluateEnclaveDigest_8dc6(1333659121, 819713403, 266043667, 1304478995);
        const _sgxEcallCounter_43c = (_enclaveDigestVector_78a >>> (charIdx & (23226 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 21643))) * (20125 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 16551))) + Math.imul(charIdx + _bodyAttestation_a87, 27656 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 25119)) & (5307 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 6774));
        return (__sgxBoundaryProof_8dc6 & 255) === 136 ? (ch.charCodeAt(17259 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 19801)) ^ _sgxEcallCounter_43c) & (15961 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 12436)) : (() => {
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      _ProprietaryEnclaveDelta_e73.push(_pcrPolicyBitmask_5dc);
      const _dictionaryEnvelope_8b7 = this.mba.encodeNumberWithKey(_bodyAttestation_a87, _LogicEntanglerEnvelope_42c, _enclaveDigestVector_78a);
      const _enclaveDigestVector_ab2 = t.callExpression(t.identifier(_lengthProof_bab), [_dictionaryEnvelope_8b7]);
      _enclaveDigestVector_ab2.__syferitProtected = true;
      return (__hmacRingSequence_f578 & 255) === 70 ? _enclaveDigestVector_ab2 : (() => {
        function evaluateEnclaveDigestVector_81c(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a3da2aee-df4bba01]",
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
        const __tpmPcrBankEnvelope_81c = evaluateEnclaveDigestVector_81c(1324530203, 1112582907, 1742441623, 1874592605);
        if ((__tpmPcrBankEnvelope_81c & 255) !== 74) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    };
    const _bodyBlockIntegrity_7a7 = this.mba;
    programPath.traverse({
      Function(fnPath) {
        function evaluateDecoySymbol_5a40(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7efde116-9115550a]",
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
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __tpmPcrBankProof_5a40 = evaluateDecoySymbol_5a40(725297537, 1943502165, 1388957089, 897524419);
        if ((__tpmPcrBankProof_5a40 & 255) !== 210) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        fnPath.skip();
      },
      NumericLiteral(numPath) {
        function verifySyferitEngineContext_c9bb(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7cf77931-23d90510]",
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
        const __enclaveBoundaryCheck_c9bb = verifySyferitEngineContext_c9bb(2119707751, 378245431, 1521391727, 1038011823);
        if ((__enclaveBoundaryCheck_c9bb & 255) !== 166) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (numPath.node.__syferitProtected) return;
        let _symbolsEnvelope_861 = numPath.parentPath;
        while (_symbolsEnvelope_861 && _symbolsEnvelope_861 !== programPath) {
          if (_symbolsEnvelope_861.node.__syferitProtected) return;
          _symbolsEnvelope_861 = _symbolsEnvelope_861.parentPath;
        }
        const _decoySymbolIntegrity_703 = numPath.parent;
        if (t.isMemberExpression(_decoySymbolIntegrity_703) && !_decoySymbolIntegrity_703.computed) return;
        if (t.isObjectProperty(_decoySymbolIntegrity_703) && _decoySymbolIntegrity_703.key === numPath.node && !_decoySymbolIntegrity_703.computed) return;
        if ((t.isObjectMethod(_decoySymbolIntegrity_703) || t.isClassProperty(_decoySymbolIntegrity_703) || t.isClassMethod(_decoySymbolIntegrity_703)) && _decoySymbolIntegrity_703.key === numPath.node && !_decoySymbolIntegrity_703.computed) return;
        const _sgxBoundaryProof_6e0 = numPath.node.value;
        const _enclaveDigestVector_d5e = _bodyBlockIntegrity_7a7.encodeNumberWithKey(_sgxBoundaryProof_6e0, _LogicEntanglerEnvelope_42c, _enclaveDigestVector_78a);
        numPath.replaceWith(_enclaveDigestVector_d5e);
        _tpmUnsealOffset_5e5++;
        numPath.skip();
      },
      StringLiteral(strPath) {
        function auditHmacFrameIntegrity_fb0c(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:505489b3-334508a9]",
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
        const __hmacFrameIntegrity_fb0c = auditHmacFrameIntegrity_fb0c(1994283883, 38265555, 1606219105, 310569109);
        if ((__hmacFrameIntegrity_fb0c & 255) !== 144) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (strPath.node.__syferitProtected) return;
        let _bodyAttestation_3d8 = strPath.parentPath;
        while (_bodyAttestation_3d8 && _bodyAttestation_3d8 !== programPath) {
          if (_bodyAttestation_3d8.node.__syferitProtected) return;
          if (t.isImportDeclaration(_bodyAttestation_3d8.node) || t.isExportAllDeclaration(_bodyAttestation_3d8.node) || t.isExportNamedDeclaration(_bodyAttestation_3d8.node) && _bodyAttestation_3d8.node.source === strPath.node) {
            return;
          }
          _bodyAttestation_3d8 = _bodyAttestation_3d8.parentPath;
        }
        const _bodyBlockIntegrity_174 = strPath.parent;
        if (t.isImportDeclaration(_bodyBlockIntegrity_174) || t.isExportDeclaration(_bodyBlockIntegrity_174)) return;
        if (t.isObjectProperty(_bodyBlockIntegrity_174) && _bodyBlockIntegrity_174.key === strPath.node && !_bodyBlockIntegrity_174.computed) return;
        const _enclaveDigestVector_852 = strPath.node.value;
        if (_enclaveDigestVector_852.length >= (3183 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 607)) && !_enclaveDigestVector_852.startsWith('CRITICAL') && !_enclaveDigestVector_852.startsWith('ASSERTION') && !_enclaveDigestVector_852.startsWith('DMCA') && !_enclaveDigestVector_852.startsWith('DTSA') && !_enclaveDigestVector_852.startsWith('CFAA') && !_enclaveDigestVector_852.startsWith('FINANCIAL') && !_enclaveDigestVector_852.startsWith('EULA')) {
          const sboxCall = _isClassMethodAttestation_d23(_enclaveDigestVector_852);
          strPath.replaceWith(sboxCall);
          _tpmUnsealOffset_5e5++;
          strPath.skip();
        }
      }
    });
    if (_tpmUnsealOffset_5e5 === (21882 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 23368))) {
      return false;
    }
    const _keyDerivationStateProof_4db = this.buildHashKeyFunction(_sgxBoundaryAttestation_65d, _stateKeysBitmask_e90, _transformFunctionVector_f78, _kindIntegrity_19e);
    _keyDerivationStateProof_4db.__syferitProtected = true;
    const _sgxBoundaryProof_9b = t.variableDeclaration(_unsealDictionary_5d1a(8894 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 11404)), [t.variableDeclarator(_LogicEntanglerEnvelope_42c, t.callExpression(t.identifier(_sgxBoundaryAttestation_65d), _enclaveDigestProof_f4e.map(s => t.numericLiteral(s))))]);
    _sgxBoundaryProof_9b.__syferitProtected = true;
    const _decoySymbolIntegrity_427 = [_keyDerivationStateProof_4db, _sgxBoundaryProof_9b];
    if (_ProprietaryEnclaveDelta_e73.length > (14584 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 14026)) && (Math.imul(Math.imul((_ProprietaryEnclaveDelta_e73.length | 0) ^ 84 | 1, (_ProprietaryEnclaveDelta_e73.length | 0) ^ 84 | 1), Math.imul((_ProprietaryEnclaveDelta_e73.length | 0) ^ 84 | 1, (_ProprietaryEnclaveDelta_e73.length | 0) ^ 84 | 1)) & 15 ^ (__keyDerivationStateProof_5d1a >>> 6 & 255 ^ 151)) === 162) {
      const sboxNodes = this.buildSboxRuntime(_constructorBitmask_756, _lengthProof_bab, _LogicEntanglerEnvelope_42c, _ProprietaryEnclaveDelta_e73);
      _decoySymbolIntegrity_427.push(...sboxNodes);
    } else if (_ProprietaryEnclaveDelta_e73.length > (27758 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 25180)) && (Math.imul(Math.imul((_ProprietaryEnclaveDelta_e73.length | 0) ^ 105 | 1, (_ProprietaryEnclaveDelta_e73.length | 0) ^ 105 | 1), Math.imul((_ProprietaryEnclaveDelta_e73.length | 0) ^ 105 | 1, (_ProprietaryEnclaveDelta_e73.length | 0) ^ 105 | 1)) & 15 ^ (__keyDerivationStateProof_5d1a >>> 1 & 255 ^ 68)) === 92) {
      const sboxNodes = this.buildSboxRuntime(_constructorBitmask_756, _lengthProof_bab, _LogicEntanglerEnvelope_42c, _ProprietaryEnclaveDelta_e73);
      _decoySymbolIntegrity_427.push(...sboxNodes);
    } else if (_ProprietaryEnclaveDelta_e73.length > (14197 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 14664)) && (Math.imul(Math.imul((_ProprietaryEnclaveDelta_e73.length | 0) ^ 117 | 1, (_ProprietaryEnclaveDelta_e73.length | 0) ^ 117 | 1), Math.imul((_ProprietaryEnclaveDelta_e73.length | 0) ^ 117 | 1, (_ProprietaryEnclaveDelta_e73.length | 0) ^ 117 | 1)) & 15 ^ (__keyDerivationStateProof_5d1a >>> 24 & 255 ^ 71)) === 250) {
      const sboxNodes = this.buildSboxRuntime(_constructorBitmask_756, _lengthProof_bab, _LogicEntanglerEnvelope_42c, _ProprietaryEnclaveDelta_e73);
      _decoySymbolIntegrity_427.push(...sboxNodes);
    }
    let _bodyAttestation_95d = 25569 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 28115);
    for (let i = 18057 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 18619); i < programPath.node.body.length; i++) {
      if (t.isImportDeclaration(programPath.node.body[i])) {
        _bodyAttestation_95d = i + (7931 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 4296));
      }
    }
    programPath.node.body.splice(_bodyAttestation_95d, 19927 ^ (__keyDerivationStateProof_5d1a & 65535 ^ 17381), ..._decoySymbolIntegrity_427);
    return (__keyDerivationStateProof_5d1a & 255) === 50 ? true : (() => {
      function assertSymbols_a90a(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5219ba9e-dba87fd6]",
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
      const __sgxBoundaryProof_a90a = assertSymbols_a90a(872366343, 239020499, 1631441135, 1910317335);
      if ((__sgxBoundaryProof_a90a & 255) !== 98) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  buildHashKeyFunction(fnName, legalNotice, expectedNibble, assertionText) {
    function unsealHmacFrameBitmask_59fc(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:257a33e3-0e49896d]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __sgxBoundaryProof_59fc = unsealHmacFrameBitmask_59fc(30731503, 370082387, 48341543, 843362435);
    const _tpmUnsealOffset_59fc = [[249, 178, 241, 55, 10], [148, 159, 172, 234, 110], [175, 100, 135, 205, 182], [74, 65, 98, 160, 154], [101, 46, 93, 155, 152, 139, 165], [0, 19, 50, 114, 146, 127, 170, 221, 243, 194, 12, 73, 122, 79, 122, 190, 193], [231, 203, 18, 73, 108], [197, 172, 213], [162, 139, 178], [159, 118, 133, 206, 243, 207], [38, 6, 46], [3, 99, 11], [92, 188, 100], [202, 198, 11, 85], [197, 161, 209, 14], [239, 207, 247], [154, 115, 154], [119, 94, 125, 182, 219, 167], [35, 8, 89, 132, 151, 155, 168, 239, 41, 252], [91, 187, 99], [199, 203, 246, 40], [198, 162, 210, 9], [234, 202, 242], [199, 39, 207], [83, 95, 98, 188], [42, 14, 78, 149], [86, 182, 94], [179, 147, 187], [255, 179, 222, 0], [190, 154, 186, 225], [194, 34, 202], [31, 127, 39], [120, 88, 0], [86, 182, 94], [174, 142, 182], [136, 232, 144], [228, 196, 236], [193, 33, 201], [5, 121, 33], [119, 87, 127], [43, 252, 20, 75, 112]];
    function _auditRingBufferBitmask_59fc(_slot) {
      const _row = _tpmUnsealOffset_59fc[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sgxBoundaryProof_59fc >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _pcrPolicyBitmask_f66 = t.identifier(_auditRingBufferBitmask_59fc(46104 ^ (__sgxBoundaryProof_59fc & 65535 ^ 5566)));
    const _sgxEcallCounter_664 = t.identifier(_auditRingBufferBitmask_59fc(40091 ^ (__sgxBoundaryProof_59fc & 65535 ^ 15676)));
    const _ringBufferBitmask_1af = t.identifier(_auditRingBufferBitmask_59fc(55461 ^ (__sgxBoundaryProof_59fc & 65535 ^ 30977)));
    const _tpmPcrBankEnvelope_ad1 = t.identifier(_auditRingBufferBitmask_59fc(61877 ^ (__sgxBoundaryProof_59fc & 65535 ^ 20496)));
    const _enclaveDigestProof_8a0 = t.identifier(_auditRingBufferBitmask_59fc(36493 ^ (__sgxBoundaryProof_59fc & 65535 ^ 12079)));
    const _enableGaslightingProof_798 = t.identifier('_s');
    const _sgxBoundaryAttestation_2d8 = t.identifier(_auditRingBufferBitmask_59fc(61236 ^ (__sgxBoundaryProof_59fc & 65535 ^ 20119)));
    const _SoltrixStudiosDelta_16 = t.identifier('_h');
    const _constructorBitmask_4e4 = t.identifier('_i');
    const _enclaveDigestVector_5f0 = [t.variableDeclaration(_auditRingBufferBitmask_59fc(47433 ^ (__sgxBoundaryProof_59fc & 65535 ^ 6377)), [t.variableDeclarator(_sgxBoundaryAttestation_2d8, t.stringLiteral(legalNotice)), t.variableDeclarator(_enclaveDigestProof_8a0, t.arrayExpression([_pcrPolicyBitmask_f66, _sgxEcallCounter_664, _ringBufferBitmask_1af, _tpmPcrBankEnvelope_ad1]))]), t.variableDeclaration(_auditRingBufferBitmask_59fc(46495 ^ (__sgxBoundaryProof_59fc & 65535 ^ 5182)), [t.variableDeclarator(_SoltrixStudiosDelta_16, t.numericLiteral(2166136261 + ((__sgxBoundaryProof_59fc & 255) - 166)))]), t.forStatement(t.variableDeclaration(_auditRingBufferBitmask_59fc(33737 ^ (__sgxBoundaryProof_59fc & 65535 ^ 8807)), [t.variableDeclarator(_enableGaslightingProof_798, t.numericLiteral(49056 ^ (__sgxBoundaryProof_59fc & 65535 ^ 7686)))]), t.binaryExpression('<', _enableGaslightingProof_798, t.memberExpression(_enclaveDigestProof_8a0, t.identifier(_auditRingBufferBitmask_59fc(64950 ^ (__sgxBoundaryProof_59fc & 65535 ^ 23577))))), t.updateExpression('++', _enableGaslightingProof_798), t.blockStatement([t.expressionStatement(t.assignmentExpression('=', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(55289 ^ (__sgxBoundaryProof_59fc & 65535 ^ 30293)), t.binaryExpression('^', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(40905 ^ (__sgxBoundaryProof_59fc & 65535 ^ 15972)), t.memberExpression(_enclaveDigestProof_8a0, _enableGaslightingProof_798, true), t.numericLiteral(35945 ^ (__sgxBoundaryProof_59fc & 65535 ^ 11727)))), t.numericLiteral(35102 ^ (__sgxBoundaryProof_59fc & 65535 ^ 10424))))), t.expressionStatement(t.assignmentExpression('=', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(38704 ^ (__sgxBoundaryProof_59fc & 65535 ^ 13978)), t.callExpression(t.memberExpression(t.identifier(_auditRingBufferBitmask_59fc(50636 ^ (__sgxBoundaryProof_59fc & 65535 ^ 25703))), t.identifier(_auditRingBufferBitmask_59fc(63755 ^ (__sgxBoundaryProof_59fc & 65535 ^ 22691)))), [_SoltrixStudiosDelta_16, t.numericLiteral(16813092 ^ (__sgxBoundaryProof_59fc & 65535 ^ 11281))]), t.numericLiteral(42475 ^ (__sgxBoundaryProof_59fc & 65535 ^ 1101))))), t.expressionStatement(t.assignmentExpression('^=', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(48976 ^ (__sgxBoundaryProof_59fc & 65535 ^ 7929)), _SoltrixStudiosDelta_16, t.numericLiteral(59830 ^ (__sgxBoundaryProof_59fc & 65535 ^ 18461)))))])), t.forStatement(t.variableDeclaration(_auditRingBufferBitmask_59fc(43432 ^ (__sgxBoundaryProof_59fc & 65535 ^ 2078)), [t.variableDeclarator(_constructorBitmask_4e4, t.numericLiteral(54894 ^ (__sgxBoundaryProof_59fc & 65535 ^ 30664)))]), t.binaryExpression('<', _constructorBitmask_4e4, t.memberExpression(_sgxBoundaryAttestation_2d8, t.identifier(_auditRingBufferBitmask_59fc(52779 ^ (__sgxBoundaryProof_59fc & 65535 ^ 28572))))), t.updateExpression('++', _constructorBitmask_4e4), t.blockStatement([t.expressionStatement(t.assignmentExpression('^=', _SoltrixStudiosDelta_16, t.callExpression(t.memberExpression(_sgxBoundaryAttestation_2d8, t.identifier(_auditRingBufferBitmask_59fc(33467 ^ (__sgxBoundaryProof_59fc & 65535 ^ 8975)))), [_constructorBitmask_4e4]))), t.expressionStatement(t.assignmentExpression('=', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(42235 ^ (__sgxBoundaryProof_59fc & 65535 ^ 1358)), t.callExpression(t.memberExpression(t.identifier(_auditRingBufferBitmask_59fc(44348 ^ (__sgxBoundaryProof_59fc & 65535 ^ 3214))), t.identifier(_auditRingBufferBitmask_59fc(64147 ^ (__sgxBoundaryProof_59fc & 65535 ^ 23328)))), [_SoltrixStudiosDelta_16, t.numericLiteral(16829556 ^ (__sgxBoundaryProof_59fc & 65535 ^ 27713))]), t.numericLiteral(57369 ^ (__sgxBoundaryProof_59fc & 65535 ^ 16831))))), t.expressionStatement(t.assignmentExpression('^=', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(44022 ^ (__sgxBoundaryProof_59fc & 65535 ^ 2630)), _SoltrixStudiosDelta_16, t.numericLiteral(59665 ^ (__sgxBoundaryProof_59fc & 65535 ^ 18618)))))])), t.expressionStatement(t.assignmentExpression('=', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(45509 ^ (__sgxBoundaryProof_59fc & 65535 ^ 4212)), t.callExpression(t.memberExpression(t.identifier(_auditRingBufferBitmask_59fc(36533 ^ (__sgxBoundaryProof_59fc & 65535 ^ 12043))), t.identifier(_auditRingBufferBitmask_59fc(55021 ^ (__sgxBoundaryProof_59fc & 65535 ^ 30546)))), [t.binaryExpression('^', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(35960 ^ (__sgxBoundaryProof_59fc & 65535 ^ 11716)), _SoltrixStudiosDelta_16, t.numericLiteral(54980 ^ (__sgxBoundaryProof_59fc & 65535 ^ 30578)))), t.numericLiteral(2246822507 + ((__sgxBoundaryProof_59fc & 255) - 166))]), t.numericLiteral(56468 ^ (__sgxBoundaryProof_59fc & 65535 ^ 32050))))), t.expressionStatement(t.assignmentExpression('=', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(60055 ^ (__sgxBoundaryProof_59fc & 65535 ^ 19242)), t.callExpression(t.memberExpression(t.identifier(_auditRingBufferBitmask_59fc(53958 ^ (__sgxBoundaryProof_59fc & 65535 ^ 29564))), t.identifier(_auditRingBufferBitmask_59fc(36403 ^ (__sgxBoundaryProof_59fc & 65535 ^ 12168)))), [t.binaryExpression('^', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(56462 ^ (__sgxBoundaryProof_59fc & 65535 ^ 32054)), _SoltrixStudiosDelta_16, t.numericLiteral(52398 ^ (__sgxBoundaryProof_59fc & 65535 ^ 27909)))), t.numericLiteral(3266489909 + ((__sgxBoundaryProof_59fc & 255) - 166))]), t.numericLiteral(48627 ^ (__sgxBoundaryProof_59fc & 65535 ^ 7253))))), t.expressionStatement(t.assignmentExpression('=', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(40217 ^ (__sgxBoundaryProof_59fc & 65535 ^ 15520)), t.binaryExpression('^', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(37201 ^ (__sgxBoundaryProof_59fc & 65535 ^ 12503)), _SoltrixStudiosDelta_16, t.numericLiteral(46384 ^ (__sgxBoundaryProof_59fc & 65535 ^ 5254)))), t.numericLiteral(47056 ^ (__sgxBoundaryProof_59fc & 65535 ^ 5750))))), t.ifStatement(t.binaryExpression(_auditRingBufferBitmask_59fc(57590 ^ (__sgxBoundaryProof_59fc & 65535 ^ 16753)), t.binaryExpression('&', _SoltrixStudiosDelta_16, t.numericLiteral(7014 ^ (__sgxBoundaryProof_59fc & 65535 ^ 17727))), t.numericLiteral(45265 ^ (__sgxBoundaryProof_59fc & 65535 ^ 4471))), t.expressionStatement(t.assignmentExpression('=', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(57381 ^ (__sgxBoundaryProof_59fc & 65535 ^ 16801)), t.binaryExpression('|', _SoltrixStudiosDelta_16, t.numericLiteral(38589 ^ (__sgxBoundaryProof_59fc & 65535 ^ 9260))), t.numericLiteral(62335 ^ (__sgxBoundaryProof_59fc & 65535 ^ 21209)))))), t.ifStatement(t.binaryExpression(_auditRingBufferBitmask_59fc(56904 ^ (__sgxBoundaryProof_59fc & 65535 ^ 32717)), t.binaryExpression('&', t.binaryExpression(_auditRingBufferBitmask_59fc(40175 ^ (__sgxBoundaryProof_59fc & 65535 ^ 15725)), _SoltrixStudiosDelta_16, t.numericLiteral(44045 ^ (__sgxBoundaryProof_59fc & 65535 ^ 3515))), t.numericLiteral(7190 ^ (__sgxBoundaryProof_59fc & 65535 ^ 16975))), t.numericLiteral(54716 ^ (__sgxBoundaryProof_59fc & 65535 ^ 29722))), t.expressionStatement(t.assignmentExpression('=', _SoltrixStudiosDelta_16, t.binaryExpression(_auditRingBufferBitmask_59fc(46927 ^ (__sgxBoundaryProof_59fc & 65535 ^ 5836)), t.binaryExpression('|', _SoltrixStudiosDelta_16, t.numericLiteral(1932591104 + ((__sgxBoundaryProof_59fc & 255) - 166))), t.numericLiteral(38793 ^ (__sgxBoundaryProof_59fc & 65535 ^ 13871))))))];
    if (this.enableGaslighting) {
      _enclaveDigestVector_5f0.push(t.ifStatement(t.binaryExpression(_auditRingBufferBitmask_59fc(54157 ^ (__sgxBoundaryProof_59fc & 65535 ^ 29197)), t.binaryExpression('&', t.binaryExpression(_auditRingBufferBitmask_59fc(57442 ^ (__sgxBoundaryProof_59fc & 65535 ^ 16867)), _SoltrixStudiosDelta_16, t.numericLiteral(52650 ^ (__sgxBoundaryProof_59fc & 65535 ^ 27656))), t.numericLiteral(52671 ^ (__sgxBoundaryProof_59fc & 65535 ^ 27670))), t.numericLiteral(expectedNibble)), t.blockStatement([t.throwStatement(t.newExpression(t.identifier(_auditRingBufferBitmask_59fc(57543 ^ (__sgxBoundaryProof_59fc & 65535 ^ 16713))), [t.stringLiteral(assertionText)]))])));
    }
    _enclaveDigestVector_5f0.push(t.returnStatement(_SoltrixStudiosDelta_16));
    return (__sgxBoundaryProof_59fc & 255) === 166 ? t.functionDeclaration(t.identifier(fnName), [_pcrPolicyBitmask_f66, _sgxEcallCounter_664, _ringBufferBitmask_1af, _tpmPcrBankEnvelope_ad1], t.blockStatement(_enclaveDigestVector_5f0)) : (() => {
      function verifyProprietaryEnclaveContext_7ce7(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8a2e4d24-07fae67e]",
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
      const __tpmPcrBankAttestation_7ce7 = verifyProprietaryEnclaveContext_7ce7(1745956961, 526640997, 1644725461, 172791417);
      if ((__tpmPcrBankAttestation_7ce7 & 255) !== 137) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  buildSboxRuntime(tableName, decoderName, localStateId, entries) {
    function auditRingBufferBitmask_ed7e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fb1b8383-800dfb00]",
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
    const __hmacFrameBitmask_ed7e = auditRingBufferBitmask_ed7e(17984821, 1900013061, 1960313713, 1453976465);
    const _sgxBoundaryAttestation_ed7e = [[21, 242, 238, 162, 126], [196, 177, 201, 153, 91], [159, 149, 165, 108], [186, 101, 139, 56], [52, 15, 42], [98, 55, 77, 226], [61, 22, 43, 195], [26, 207, 237, 167, 121], [205, 177, 218, 144, 92, 62], [165, 152, 162, 115, 20, 22, 0, 192, 168, 125, 145, 35], [133, 110, 130]];
    function _verifySyferitEngineContext_ed7e(_slot) {
      const _row = _sgxBoundaryAttestation_ed7e[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__hmacFrameBitmask_ed7e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _stateKeysBitmask_570 = t.variableDeclaration(_verifySyferitEngineContext_ed7e(27206 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 4656)), [t.variableDeclarator(t.identifier(tableName), t.arrayExpression(entries.map(bytes => t.arrayExpression(bytes.map(b => t.numericLiteral(b))))))]);
    _stateKeysBitmask_570.__syferitProtected = true;
    const _enclaveDigestProof_67c = t.identifier(_verifySyferitEngineContext_ed7e(16569 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 14542)));
    const _enableGaslightingProof_73 = t.identifier(_verifySyferitEngineContext_ed7e(4736 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 27380)));
    const _symbolsEnvelope_bf8 = t.identifier('_b');
    const _monotonicNonceDrift_342 = t.identifier(_verifySyferitEngineContext_ed7e(10671 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 20954)));
    const _bodyAttestation_442 = t.binaryExpression('&', t.binaryExpression('+', t.binaryExpression(_verifySyferitEngineContext_ed7e(18061 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 16127)), localStateId, t.binaryExpression('*', t.binaryExpression('&', _monotonicNonceDrift_342, t.numericLiteral(22956 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 8665))), t.numericLiteral(4167 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 26681)))), t.callExpression(t.memberExpression(t.identifier(_verifySyferitEngineContext_ed7e(11675 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 21992))), t.identifier(_verifySyferitEngineContext_ed7e(13786 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 19882)))), [t.binaryExpression('+', _monotonicNonceDrift_342, _enclaveDigestProof_67c), t.numericLiteral(28588 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 6143))])), t.numericLiteral(29838 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 3079)));
    const _kindIntegrity_2c5 = t.functionDeclaration(t.identifier(decoderName), [_enclaveDigestProof_67c], t.blockStatement([t.variableDeclaration(_verifySyferitEngineContext_ed7e(11477 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 21668)), [t.variableDeclarator(_enableGaslightingProof_73, t.memberExpression(t.identifier(tableName), _enclaveDigestProof_67c, true))]), t.returnStatement(t.callExpression(t.memberExpression(t.identifier(_verifySyferitEngineContext_ed7e(16174 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 18256))), t.identifier(_verifySyferitEngineContext_ed7e(27820 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 5331)))), [t.spreadElement(t.callExpression(t.memberExpression(_enableGaslightingProof_73, t.identifier(_verifySyferitEngineContext_ed7e(6420 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 24936)))), [t.arrowFunctionExpression([_symbolsEnvelope_bf8, _monotonicNonceDrift_342], t.binaryExpression('&', t.binaryExpression('^', _symbolsEnvelope_bf8, _bodyAttestation_442), t.numericLiteral(9835 ^ (__hmacFrameBitmask_ed7e & 65535 ^ 24290))))]))]))]));
    _kindIntegrity_2c5.__syferitProtected = true;
    return (__hmacFrameBitmask_ed7e & 255) === 118 ? [_stateKeysBitmask_570, _kindIntegrity_2c5] : (() => {
      function assertTransformFunction_772b(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c863dd9f-5b8969b2]",
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
      const __entropySeedDigest_772b = assertTransformFunction_772b(347340283, 1571715747, 1206069857, 753982867);
      if ((__entropySeedDigest_772b & 255) !== 82) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  injectDecoyBranches(fnPath, runtimeSeedExpr, keyId, keyVal) {
    function evaluateStateKey_474e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:311c1f38-d3a40e7a]",
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
    const __hmacFrameIntegrity_474e = evaluateStateKey_474e(766076551, 1110914793, 1319315847, 1259764545);
    const _tpmPcrBankEnvelope_474e = [[115, 56, 103], [37, 99, 47, 52, 85, 251, 81, 190, 207, 23, 248, 167, 31], [253, 33, 208, 245, 94, 147, 74, 77, 179, 18, 147, 200, 56, 126, 19], [128, 73, 244], [174, 220, 169, 155, 53, 116, 221, 35, 67, 134, 68, 67, 202, 28, 229, 216, 109, 219, 14], [96, 209, 101, 160, 253, 55, 195, 225, 78, 139, 75], [17, 222, 5]];
    function _verifyProprietaryEnclaveContext_474e(_slot) {
      const _row = _tpmPcrBankEnvelope_474e[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__hmacFrameIntegrity_474e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if ((__hmacFrameIntegrity_474e & 255) !== 78) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _tpmPcrBankAttestation_b4b = this.prng.shuffle(this.dictionary.decoyTierStrings);
    const _pathAttestation_d04 = this.prng.shuffle(this.dictionary.decoyPromoStrings);
    let _stateKeysBitmask_f60 = 56710 ^ (__hmacFrameIntegrity_474e & 65535 ^ 15816);
    let _isObjectMethodAttestation_a41 = 53968 ^ (__hmacFrameIntegrity_474e & 65535 ^ 12958);
    const _prngEnvelope_892 = this.mba;
    const _ProprietaryEnclaveDelta_e1a = this.prng;
    fnPath.traverse({
      IfStatement(ifPath) {
        function rotateKeyDerivationStateProof_cf3d(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:214e3bbc-170dcd3f]",
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
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __tpmPcrBankProof_cf3d = rotateKeyDerivationStateProof_cf3d(2038570711, 1538598875, 1199809529, 2142251759);
        if ((__tpmPcrBankProof_cf3d & 255) !== 104) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (ifPath.node.__syferitDecoyProcessed) return;
        ifPath.node.__syferitDecoyProcessed = true;
        const _pcrPolicyBitmask_261 = ifPath.node.test;
        if (t.isBinaryExpression(_pcrPolicyBitmask_261) && (_pcrPolicyBitmask_261.operator === _verifyProprietaryEnclaveContext_474e(48713 ^ (__hmacFrameIntegrity_474e & 65535 ^ 24071)) || _pcrPolicyBitmask_261.operator === '==') && t.isStringLiteral(_pcrPolicyBitmask_261.right)) {
          const leftExpr = _pcrPolicyBitmask_261.left;
          const isPromoLike = _pcrPolicyBitmask_261.right.value === _pcrPolicyBitmask_261.right.value.toUpperCase();
          const decoyStr = isPromoLike ? _pathAttestation_d04[_isObjectMethodAttestation_a41++ % _pathAttestation_d04.length] || _verifyProprietaryEnclaveContext_474e(36271 ^ (__hmacFrameIntegrity_474e & 65535 ^ 28128)) : _tpmPcrBankAttestation_b4b[_stateKeysBitmask_f60++ % _tpmPcrBankAttestation_b4b.length] || _verifyProprietaryEnclaveContext_474e(53113 ^ (__hmacFrameIntegrity_474e & 65535 ^ 12085));
          const opaqueTrue = _prngEnvelope_892.synthesizeQuorumGate(runtimeSeedExpr, keyId, keyVal, true);
          opaqueTrue.__syferitProtected = true;
          ifPath.node.test = t.logicalExpression('&&', _pcrPolicyBitmask_261, opaqueTrue);
          const opaqueFalse = _prngEnvelope_892.synthesizeQuorumGate(runtimeSeedExpr, keyId, keyVal, false);
          opaqueFalse.__syferitProtected = true;
          const decoyCondition = t.logicalExpression('&&', t.binaryExpression(_verifyProprietaryEnclaveContext_474e(63259 ^ (__hmacFrameIntegrity_474e & 65535 ^ 5974)), t.cloneNode(leftExpr, true), t.stringLiteral(decoyStr)), opaqueFalse);
          const decoyConsequent = t.cloneNode(ifPath.node.consequent, true);
          t.traverseFast(decoyConsequent, subNode => {
            function verifyProprietaryEnclaveContext_d291(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e0b869a6-db214168]",
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
            const __hmacRingSequence_d291 = verifyProprietaryEnclaveContext_d291(1619454613, 958153825, 1905521633, 55357897);
            if ((__hmacRingSequence_d291 & 255) !== 47) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            if (t.isNumericLiteral(subNode)) {
              const decoyMultipliers = [(57548 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535), (57566 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535), (57664 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535), (57660 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535), (57960 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535), (57912 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535)];
              subNode.value = _ProprietaryEnclaveDelta_e1a.pick(decoyMultipliers);
            }
          });
          let tail = ifPath.node;
          while (tail.alternate && t.isIfStatement(tail.alternate)) {
            tail.alternate.__syferitDecoyProcessed = true;
            const altTrue = _prngEnvelope_892.synthesizeQuorumGate(runtimeSeedExpr, keyId, keyVal, true);
            altTrue.__syferitProtected = true;
            tail.alternate.test = t.logicalExpression('&&', tail.alternate.test, altTrue);
            tail = tail.alternate;
          }
          if (!tail.alternate) {
            const decoyIf = t.ifStatement(decoyCondition, decoyConsequent, null);
            decoyIf.__syferitDecoyProcessed = true;
            tail.alternate = decoyIf;
          }
          const headDecoyStr = isPromoLike ? _pathAttestation_d04[_isObjectMethodAttestation_a41++ % _pathAttestation_d04.length] || _verifyProprietaryEnclaveContext_474e(42754 ^ (__hmacFrameIntegrity_474e & 65535 ^ 18248)) : _tpmPcrBankAttestation_b4b[_stateKeysBitmask_f60++ % _tpmPcrBankAttestation_b4b.length] || _verifyProprietaryEnclaveContext_474e(42717 ^ (__hmacFrameIntegrity_474e & 65535 ^ 18070));
          const headOpaqueFalse = _prngEnvelope_892.synthesizeQuorumGate(runtimeSeedExpr, keyId, keyVal, false);
          headOpaqueFalse.__syferitProtected = true;
          const headCondition = t.logicalExpression('&&', t.binaryExpression(_verifyProprietaryEnclaveContext_474e(50320 ^ (__hmacFrameIntegrity_474e & 65535 ^ 9432)), t.cloneNode(leftExpr, true), t.stringLiteral(headDecoyStr)), headOpaqueFalse);
          const headConsequent = t.cloneNode(ifPath.node.consequent, true);
          t.traverseFast(headConsequent, subNode => {
            function verifySoltrixStudiosContext_8b7c(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:88623b79-3ae317d8]",
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
            const __sgxBoundaryProof_8b7c = verifySoltrixStudiosContext_8b7c(825032463, 79870863, 1846580199, 354101029);
            if ((__sgxBoundaryProof_8b7c & 255) !== 23) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            if (t.isNumericLiteral(subNode)) {
              const decoyMultipliers = [(57548 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535), (57566 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535), (57664 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535), (57660 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535), (57960 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535), (57912 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535)];
              subNode.value = _ProprietaryEnclaveDelta_e1a.pick(decoyMultipliers);
            }
          });
          const wrappedIf = t.ifStatement(headCondition, headConsequent, ifPath.node);
          wrappedIf.__syferitDecoyProcessed = true;
          ifPath.replaceWith(wrappedIf);
          ifPath.skip();
        }
        if (t.isBinaryExpression(_pcrPolicyBitmask_261) && (_pcrPolicyBitmask_261.operator === '>' || _pcrPolicyBitmask_261.operator === '>=') && t.isNumericLiteral(_pcrPolicyBitmask_261.right) && t.isExpression(_pcrPolicyBitmask_261.left)) {
          const leftExpr = _pcrPolicyBitmask_261.left;
          const origThreshold = _pcrPolicyBitmask_261.right.value;
          const decoyThreshold = origThreshold + (54068 ^ (__hmacFrameIntegrity_474e & 65535 ^ 13173));
          const opaqueTrue = _prngEnvelope_892.synthesizeQuorumGate(t.cloneNode(leftExpr, true), keyId, keyVal, true);
          opaqueTrue.__syferitProtected = true;
          ifPath.node.test = t.logicalExpression('&&', _pcrPolicyBitmask_261, opaqueTrue);
          const opaqueFalse = _prngEnvelope_892.synthesizeQuorumGate(t.cloneNode(leftExpr, true), keyId, keyVal, false);
          opaqueFalse.__syferitProtected = true;
          const decoyCondition = t.logicalExpression('&&', t.binaryExpression('>', t.cloneNode(leftExpr, true), t.numericLiteral(decoyThreshold)), opaqueFalse);
          const decoyConsequent = t.cloneNode(ifPath.node.consequent, true);
          t.traverseFast(decoyConsequent, subNode => {
            function attestEnclaveDigestProof_1531(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5a916e64-76c65b50]",
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
                throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
              }
              return _h;
            }
            const __tpmPcrBankEnvelope_1531 = attestEnclaveDigestProof_1531(1196323331, 250550091, 1865605099, 1837106701);
            if ((__tpmPcrBankEnvelope_1531 & 255) !== 217) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            if (t.isNumericLiteral(subNode)) {
              subNode.value = Number((subNode.value + (57430 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535)).toFixed(45341 ^ (__hmacFrameIntegrity_474e & 65535 ^ 20817)));
            }
          });
          let tail = ifPath.node;
          while (tail.alternate && t.isIfStatement(tail.alternate)) {
            tail.alternate.__syferitDecoyProcessed = true;
            const altTrue = _prngEnvelope_892.synthesizeQuorumGate(t.cloneNode(leftExpr, true), keyId, keyVal, true);
            altTrue.__syferitProtected = true;
            tail.alternate.test = t.logicalExpression('&&', tail.alternate.test, altTrue);
            tail = tail.alternate;
          }
          if (!tail.alternate) {
            const decoyIf = t.ifStatement(decoyCondition, decoyConsequent, null);
            decoyIf.__syferitDecoyProcessed = true;
            tail.alternate = decoyIf;
          }
          const headOpaqueFalse = _prngEnvelope_892.synthesizeQuorumGate(t.cloneNode(leftExpr, true), keyId, keyVal, false);
          headOpaqueFalse.__syferitProtected = true;
          const headCondition = t.logicalExpression('&&', t.binaryExpression('>', t.cloneNode(leftExpr, true), t.numericLiteral(origThreshold * (37565 ^ (__hmacFrameIntegrity_474e & 65535 ^ 29425)))), headOpaqueFalse);
          const headConsequent = t.cloneNode(ifPath.node.consequent, true);
          t.traverseFast(headConsequent, subNode => {
            function verifyProprietaryEnclaveContext_5d2a(_tok0, _tok1, _tok2, _tok3) {
              const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5439d7e8-d2f10fab]",
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
            const __enclaveBoundaryCheck_5d2a = verifyProprietaryEnclaveContext_5d2a(556507979, 1603882055, 1556589473, 239399075);
            if ((__enclaveBoundaryCheck_5d2a & 255) !== 13) {
              throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
            }
            if (t.isNumericLiteral(subNode)) {
              subNode.value = Number((subNode.value + (57424 ^ __hmacFrameIntegrity_474e & 65535) / (55256 ^ __hmacFrameIntegrity_474e >>> 16 & 65535)).toFixed(37288 ^ (__hmacFrameIntegrity_474e & 65535 ^ 29156)));
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
  window.__syferitIPC_b6ad.invoke && window.__syferitIPC_b6ad.invoke("license:quorum-token-refresh", {
    syncEpoch: 143614909,
    channelSig: "SIG_FRAME_B6AD"
  });
}