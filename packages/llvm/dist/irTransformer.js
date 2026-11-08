import { SeededPRNG, MBASynthesizer, buildPolymorphicDictionary } from '@syferit/core';
export class LlvmIrTransformer {
  options;
  prng;
  mba;
  seed;
  constructor(options = {}) {
    this.options = options;
    this.seed = typeof options.seed === 'number' ? options.seed : typeof options.seed === 'string' && options.seed.trim() !== '' ? SeededPRNG.hashString(options.seed) : SeededPRNG.generateCryptoSeed();
    this.prng = new SeededPRNG(this.seed);
    this.mba = new MBASynthesizer(this.prng);
  }
  transform(rawIrCode) {
    function unsealMBASynthesizer_aeff(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b83d16ec-63cbf83f]",
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
    const __enclaveDigestSequence_aeff = unsealMBASynthesizer_aeff(1132396427, 1261691285, 89362837, 1064025629);
    const _entropyNonceProof_aeff = [[49, 77, 66, 72, 137, 193, 208, 231, 21, 56, 38, 32, 113, 171, 184, 132], [29, 45, 48, 44, 97, 179, 170, 176, 196, 30, 26], [246, 30, 6, 49, 67, 116, 144, 112, 179, 248, 204, 250, 53, 74, 76, 79, 138], [176, 243, 241, 224], [128, 196, 216, 231, 13, 62, 38, 62, 101, 178, 130, 140, 203, 16, 26, 17, 92], [108, 184, 190], [84, 104, 143, 113, 153, 164, 167, 166, 5, 26, 120, 89, 154, 207, 210, 221, 246], [49, 79, 84, 84, 180, 139, 140, 139, 32, 125, 19, 60, 103, 144, 137, 128, 211], [15, 62, 43], [196, 30, 13, 29, 84, 114, 103, 90, 160, 235, 249, 245, 60, 88, 79, 73], [179, 225, 245, 187, 98], [183, 136, 138]];
    function _auditMode_aeff(_slot) {
      const _row = _entropyNonceProof_aeff[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveDigestSequence_aeff >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _auditMode_aeff(57746 ^ (__enclaveDigestSequence_aeff & 65535 ^ 8134)) && (Math.imul(Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 73 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 73 | 1), Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 73 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 73 | 1)) & 15 ^ (__enclaveDigestSequence_aeff >>> 17 & 255 ^ 190)) === 82) {
      return {
        code: rawIrCode,
        transformedCount: (65238 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (65318 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535)
      };
    } else if (this.options.mode === _auditMode_aeff(33049 ^ (__enclaveDigestSequence_aeff & 65535 ^ 32588)) && (Math.imul(Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 69 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 69 | 1), Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 69 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 69 | 1)) & 15 ^ (__enclaveDigestSequence_aeff >>> 18 & 255 ^ 24)) === 108) {
      return {
        code: rawIrCode,
        transformedCount: 34925 ^ (__enclaveDigestSequence_aeff & 65535 ^ 30265),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 48333 ^ (__enclaveDigestSequence_aeff & 65535 ^ 17049)
      };
    } else if (this.options.mode === _auditMode_aeff(33925 ^ (__enclaveDigestSequence_aeff & 65535 ^ 31443)) && (Math.imul(Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 46 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 46 | 1), Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 46 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 46 | 1)) & 15 ^ (__enclaveDigestSequence_aeff >>> 2 & 255 ^ 54)) === 174) {
      return {
        code: rawIrCode,
        transformedCount: (65318 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: (65318 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535)
      };
    }
    const _seedProof_aab = rawIrCode.replace(/^\s*;.*$/gm, '');
    const _ProprietaryEnclaveDelta_4c5 = [];
    const _hmacFrameBitmask_40f = /define\s+[^@]*@([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    let _tpmUnsealOffset_d47;
    while ((_tpmUnsealOffset_d47 = _hmacFrameBitmask_40f.exec(_seedProof_aab)) !== null) {
      if (_tpmUnsealOffset_d47[38003 ^ (__enclaveDigestSequence_aeff & 65535 ^ 27174)] && _tpmUnsealOffset_d47[43806 ^ (__enclaveDigestSequence_aeff & 65535 ^ 21835)].length >= (40251 ^ (__enclaveDigestSequence_aeff & 65535 ^ 25451))) {
        _ProprietaryEnclaveDelta_4c5.push(_tpmUnsealOffset_d47[54874 ^ (__enclaveDigestSequence_aeff & 65535 ^ 10255)]);
      }
    }
    const _inoculationInjectedProof_227 = buildPolymorphicDictionary(this.options.domainProfile ?? _auditMode_aeff(53373 ^ (__enclaveDigestSequence_aeff & 65535 ^ 11818)), this.prng, _ProprietaryEnclaveDelta_4c5, this.options.customDictionary ?? []);
    const _rawIrCodeVector_9ab = this.prng.pick(_inoculationInjectedProof_227.legalInoculations);
    const _sgxBoundaryAttestation_9a9 = `${this.prng.nextUint32().toString(52142 ^ (__enclaveDigestSequence_aeff & 65535 ^ 13802)).padStart(59844 ^ (__enclaveDigestSequence_aeff & 65535 ^ 6040), '0')}-${this.prng.nextUint32().toString(64081 ^ (__enclaveDigestSequence_aeff & 65535 ^ 1045)).padStart(37489 ^ (__enclaveDigestSequence_aeff & 65535 ^ 27693), '0')}`;
    const _keyDerivationStateProof_606 = `${_rawIrCodeVector_9ab} [ATTESTATION_ID:${_sgxBoundaryAttestation_9a9}]`;
    const _stateKeyDerivedAttestation_687 = (this.prng.nextUint32() & (26558 ^ (__enclaveDigestSequence_aeff & 65535 ^ 26133))).toString(63204 ^ (__enclaveDigestSequence_aeff & 65535 ^ 2208));
    const _SeededPRNGProof_4d3 = `${this.prng.pick(_inoculationInjectedProof_227.symbols)}_${_stateKeyDerivedAttestation_687}`;
    const _enclaveDigestSequence_a7c = `${this.prng.pick(_inoculationInjectedProof_227.stateKeys)}_${_stateKeyDerivedAttestation_687}`;
    const _monotonicNonceDrift_6be = this.prng.nextUint32() & 2147483646 + ((__enclaveDigestSequence_aeff & 255) - 84) | 61473 ^ (__enclaveDigestSequence_aeff & 65535 ^ 3700);
    const _optionsProof_750 = this.mba.computeStringKey(_keyDerivationStateProof_606, _monotonicNonceDrift_6be);
    const _generateCryptoSeedProof_aff = _optionsProof_750 >>> (46700 ^ (__enclaveDigestSequence_aeff & 65535 ^ 18492)) & (33651 ^ (__enclaveDigestSequence_aeff & 65535 ^ 32040));
    let _constructorBitmask_656 = 37513 ^ (__enclaveDigestSequence_aeff & 65535 ^ 27869);
    let _LlvmIrTransformerEnvelope_910 = 37609 ^ (__enclaveDigestSequence_aeff & 65535 ^ 27836);
    const _replaceBitmask_4d8 = _seedProof_aab.replace(/(define\s+[^@{]+@[a-zA-Z0-9_$.]+\s*\([^)]*\)[^{]*\{)([\s\S]*?)(\n\})/g, (_fullMatch, header, body, footer) => {
      function verifyRingBufferEnvelope_e350(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3e23ba7e-e5b9f251]",
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
      const __hmacRingSequence_e350 = verifyRingBufferEnvelope_e350(197491879, 1024501543, 277008559, 154134057);
      _constructorBitmask_656++;
      const _trimVector_274 = `%${_enclaveDigestSequence_a7c}_k${_constructorBitmask_656}`;
      const _entropyNonceVector_54d = body.match(/^(\s*[a-zA-Z0-9_$.]+:\s*\n)/);
      let _replaceBitmask_ade = `\n  ${_trimVector_274} = call i32 @${_SeededPRNGProof_4d3}(i32 ${_monotonicNonceDrift_6be})\n`;
      const _keyDerivationStateAttestation_9dc = body.replace(/^(\s*)(%[a-zA-Z0-9_$.]+)\s*=\s*(add|sub|xor)(?:\s+nsw|\s+nuw)*\s+i32\s+([^,\n]+),\s*([^\n]+)$/gm, (_instMatch, indent, destReg, op, lhsRaw, rhsRaw) => {
        function evaluateTpmPcrBankAttestation_4c80(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:426353a0-15e97de5]",
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
        const __entropyNonceProof_4c80 = evaluateTpmPcrBankAttestation_4c80(945191605, 1525392371, 1139291919, 612333859);
        const _modeProof_527 = lhsRaw.trim();
        let _hashStringProof_f81 = rhsRaw.trim();
        const _codeAttestation_5cc = _LlvmIrTransformerEnvelope_910++;
        const _ringBufferEnvelope_f91 = [];
        if (/^-?\d+$/.test(_hashStringProof_f81)) {
          const literalVal = parseInt(_hashStringProof_f81, 44750 ^ (__enclaveDigestSequence_aeff & 65535 ^ 20624)) | 42133 ^ (__enclaveDigestSequence_aeff & 65535 ^ 23233);
          const mask = this.prng.nextUint32() & 2147483646 + ((__enclaveDigestSequence_aeff & 255) - 84) | 59359 ^ (__enclaveDigestSequence_aeff & 65535 ^ 6538);
          const c1 = literalVal ^ mask | 50527 ^ (__enclaveDigestSequence_aeff & 65535 ^ 15115);
          const c2 = mask ^ _optionsProof_750 | 36688 ^ (__enclaveDigestSequence_aeff & 65535 ^ 28932);
          const tMask1 = `%_m_kxor_${_codeAttestation_5cc}`;
          const tMask2 = `%_m_const_${_codeAttestation_5cc}`;
          _ringBufferEnvelope_f91.push(`${indent}${tMask1} = xor i32 ${_trimVector_274}, ${c2}`);
          _ringBufferEnvelope_f91.push(`${indent}${tMask2} = xor i32 ${c1}, ${tMask1}`);
          _hashStringProof_f81 = tMask2;
        }
        if (op === _auditMode_aeff(43511 ^ (__enclaveDigestSequence_aeff & 65535 ^ 22439)) && (Math.imul(Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 67 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 67 | 1), Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 67 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 67 | 1)) & 15 ^ (__enclaveDigestSequence_aeff >>> 20 & 255 ^ 107)) === 53) {
          const tXor = `%_m_axor_${_codeAttestation_5cc}`;
          const tAnd = `%_m_aand_${_codeAttestation_5cc}`;
          const tShl = `%_m_ashl_${_codeAttestation_5cc}`;
          const tBase = `%_m_abase_${_codeAttestation_5cc}`;
          const tU0 = `%_m_u0_${_codeAttestation_5cc}`;
          const tU1 = `%_m_u1_${_codeAttestation_5cc}`;
          const tU2 = `%_m_u2_${_codeAttestation_5cc}`;
          const tU4 = `%_m_u4_${_codeAttestation_5cc}`;
          const tQ1 = `%_m_q1_${_codeAttestation_5cc}`;
          const tKOne1 = `%_m_ko1_${_codeAttestation_5cc}`;
          const tKOne2 = `%_m_ko2_${_codeAttestation_5cc}`;
          const tZero = `%_m_zinv_${_codeAttestation_5cc}`;
          const oneMask = this.prng.nextUint32() & (65238 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535) | (65370 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535);
          const oneC1 = (65318 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535) ^ oneMask | (65370 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535);
          const oneC2 = oneMask ^ _optionsProof_750 | (65318 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535);
          _ringBufferEnvelope_f91.push(`${indent}${tXor} = xor i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tAnd} = and i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tShl} = shl i32 ${tAnd}, 1`);
          _ringBufferEnvelope_f91.push(`${indent}${tBase} = add i32 ${tXor}, ${tShl}`);
          _ringBufferEnvelope_f91.push(`${indent}${tU0} = xor i32 ${_modeProof_527}, ${_trimVector_274}`);
          _ringBufferEnvelope_f91.push(`${indent}${tU1} = or i32 ${tU0}, 1`);
          _ringBufferEnvelope_f91.push(`${indent}${tU2} = mul i32 ${tU1}, ${tU1}`);
          _ringBufferEnvelope_f91.push(`${indent}${tU4} = mul i32 ${tU2}, ${tU2}`);
          _ringBufferEnvelope_f91.push(`${indent}${tQ1} = and i32 ${tU4}, 15`);
          _ringBufferEnvelope_f91.push(`${indent}${tKOne1} = xor i32 ${_trimVector_274}, ${oneC2}`);
          _ringBufferEnvelope_f91.push(`${indent}${tKOne2} = xor i32 ${oneC1}, ${tKOne1}`);
          _ringBufferEnvelope_f91.push(`${indent}${tZero} = xor i32 ${tQ1}, ${tKOne2}`);
          _ringBufferEnvelope_f91.push(`${indent}${destReg} = add i32 ${tBase}, ${tZero}`);
          return _ringBufferEnvelope_f91.join('\n');
        } else if (op === _auditMode_aeff(56862 ^ (__enclaveDigestSequence_aeff & 65535 ^ 8271)) && (Math.imul(Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 81 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 81 | 1), Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 81 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 81 | 1)) & 15 ^ (__enclaveDigestSequence_aeff >>> 22 & 255 ^ 27)) === 205) {
          const tXor = `%_m_axor_${_codeAttestation_5cc}`;
          const tAnd = `%_m_aand_${_codeAttestation_5cc}`;
          const tShl = `%_m_ashl_${_codeAttestation_5cc}`;
          const tBase = `%_m_abase_${_codeAttestation_5cc}`;
          const tU0 = `%_m_u0_${_codeAttestation_5cc}`;
          const tU1 = `%_m_u1_${_codeAttestation_5cc}`;
          const tU2 = `%_m_u2_${_codeAttestation_5cc}`;
          const tU4 = `%_m_u4_${_codeAttestation_5cc}`;
          const tQ1 = `%_m_q1_${_codeAttestation_5cc}`;
          const tKOne1 = `%_m_ko1_${_codeAttestation_5cc}`;
          const tKOne2 = `%_m_ko2_${_codeAttestation_5cc}`;
          const tZero = `%_m_zinv_${_codeAttestation_5cc}`;
          const oneMask = this.prng.nextUint32() & 2147483646 + ((__enclaveDigestSequence_aeff & 255) - 84) | 64205 ^ (__enclaveDigestSequence_aeff & 65535 ^ 1176);
          const oneC1 = 58098 ^ (__enclaveDigestSequence_aeff & 65535 ^ 7335) ^ oneMask | 53423 ^ (__enclaveDigestSequence_aeff & 65535 ^ 12027);
          const oneC2 = oneMask ^ _optionsProof_750 | 47074 ^ (__enclaveDigestSequence_aeff & 65535 ^ 18870);
          _ringBufferEnvelope_f91.push(`${indent}${tXor} = xor i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tAnd} = and i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tShl} = shl i32 ${tAnd}, 1`);
          _ringBufferEnvelope_f91.push(`${indent}${tBase} = add i32 ${tXor}, ${tShl}`);
          _ringBufferEnvelope_f91.push(`${indent}${tU0} = xor i32 ${_modeProof_527}, ${_trimVector_274}`);
          _ringBufferEnvelope_f91.push(`${indent}${tU1} = or i32 ${tU0}, 1`);
          _ringBufferEnvelope_f91.push(`${indent}${tU2} = mul i32 ${tU1}, ${tU1}`);
          _ringBufferEnvelope_f91.push(`${indent}${tU4} = mul i32 ${tU2}, ${tU2}`);
          _ringBufferEnvelope_f91.push(`${indent}${tQ1} = and i32 ${tU4}, 15`);
          _ringBufferEnvelope_f91.push(`${indent}${tKOne1} = xor i32 ${_trimVector_274}, ${oneC2}`);
          _ringBufferEnvelope_f91.push(`${indent}${tKOne2} = xor i32 ${oneC1}, ${tKOne1}`);
          _ringBufferEnvelope_f91.push(`${indent}${tZero} = xor i32 ${tQ1}, ${tKOne2}`);
          _ringBufferEnvelope_f91.push(`${indent}${destReg} = add i32 ${tBase}, ${tZero}`);
          return _ringBufferEnvelope_f91.join('\n');
        } else if (op === _auditMode_aeff(36928 ^ (__enclaveDigestSequence_aeff & 65535 ^ 28178)) && (Math.imul(Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 69 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 69 | 1), Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 69 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 69 | 1)) & 15 ^ (__enclaveDigestSequence_aeff >>> 2 & 255 ^ 203)) === 93) {
          const tXor = `%_m_axor_${_codeAttestation_5cc}`;
          const tAnd = `%_m_aand_${_codeAttestation_5cc}`;
          const tShl = `%_m_ashl_${_codeAttestation_5cc}`;
          const tBase = `%_m_abase_${_codeAttestation_5cc}`;
          const tU0 = `%_m_u0_${_codeAttestation_5cc}`;
          const tU1 = `%_m_u1_${_codeAttestation_5cc}`;
          const tU2 = `%_m_u2_${_codeAttestation_5cc}`;
          const tU4 = `%_m_u4_${_codeAttestation_5cc}`;
          const tQ1 = `%_m_q1_${_codeAttestation_5cc}`;
          const tKOne1 = `%_m_ko1_${_codeAttestation_5cc}`;
          const tKOne2 = `%_m_ko2_${_codeAttestation_5cc}`;
          const tZero = `%_m_zinv_${_codeAttestation_5cc}`;
          const oneMask = this.prng.nextUint32() & (64546 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535) | (65318 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535);
          const oneC1 = (65318 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535) ^ oneMask | (64546 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535);
          const oneC2 = oneMask ^ _optionsProof_750 | (65370 ^ __enclaveDigestSequence_aeff & 65535) / (46367 ^ __enclaveDigestSequence_aeff >>> 16 & 65535);
          _ringBufferEnvelope_f91.push(`${indent}${tXor} = xor i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tAnd} = and i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tShl} = shl i32 ${tAnd}, 1`);
          _ringBufferEnvelope_f91.push(`${indent}${tBase} = add i32 ${tXor}, ${tShl}`);
          _ringBufferEnvelope_f91.push(`${indent}${tU0} = xor i32 ${_modeProof_527}, ${_trimVector_274}`);
          _ringBufferEnvelope_f91.push(`${indent}${tU1} = or i32 ${tU0}, 1`);
          _ringBufferEnvelope_f91.push(`${indent}${tU2} = mul i32 ${tU1}, ${tU1}`);
          _ringBufferEnvelope_f91.push(`${indent}${tU4} = mul i32 ${tU2}, ${tU2}`);
          _ringBufferEnvelope_f91.push(`${indent}${tQ1} = and i32 ${tU4}, 15`);
          _ringBufferEnvelope_f91.push(`${indent}${tKOne1} = xor i32 ${_trimVector_274}, ${oneC2}`);
          _ringBufferEnvelope_f91.push(`${indent}${tKOne2} = xor i32 ${oneC1}, ${tKOne1}`);
          _ringBufferEnvelope_f91.push(`${indent}${tZero} = xor i32 ${tQ1}, ${tKOne2}`);
          _ringBufferEnvelope_f91.push(`${indent}${destReg} = add i32 ${tBase}, ${tZero}`);
          return _ringBufferEnvelope_f91.join('\n');
        }
        if (op === _auditMode_aeff(35744 ^ (__enclaveDigestSequence_aeff & 65535 ^ 30195)) && (Math.imul(Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 71 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 71 | 1), Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 71 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 71 | 1)) & 15 ^ (__enclaveDigestSequence_aeff >>> 3 & 255 ^ 143)) === 72) {
          const tXor = `%_m_sxor_${_codeAttestation_5cc}`;
          const tNot = `%_m_snot_${_codeAttestation_5cc}`;
          const tAnd = `%_m_sand_${_codeAttestation_5cc}`;
          const tShl = `%_m_sshl_${_codeAttestation_5cc}`;
          _ringBufferEnvelope_f91.push(`${indent}${tXor} = xor i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tNot} = xor i32 ${_modeProof_527}, -1`);
          _ringBufferEnvelope_f91.push(`${indent}${tAnd} = and i32 ${tNot}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tShl} = shl i32 ${tAnd}, 1`);
          _ringBufferEnvelope_f91.push(`${indent}${destReg} = sub i32 ${tXor}, ${tShl}`);
          return _ringBufferEnvelope_f91.join('\n');
        } else if (op === _auditMode_aeff(63407 ^ (__enclaveDigestSequence_aeff & 65535 ^ 2547)) && (Math.imul(Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 121 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 121 | 1), Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 121 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 121 | 1)) & 15 ^ (__enclaveDigestSequence_aeff >>> 9 & 255 ^ 206)) === 48) {
          const tXor = `%_m_sxor_${_codeAttestation_5cc}`;
          const tNot = `%_m_snot_${_codeAttestation_5cc}`;
          const tAnd = `%_m_sand_${_codeAttestation_5cc}`;
          const tShl = `%_m_sshl_${_codeAttestation_5cc}`;
          _ringBufferEnvelope_f91.push(`${indent}${tXor} = xor i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tNot} = xor i32 ${_modeProof_527}, -1`);
          _ringBufferEnvelope_f91.push(`${indent}${tAnd} = and i32 ${tNot}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tShl} = shl i32 ${tAnd}, 1`);
          _ringBufferEnvelope_f91.push(`${indent}${destReg} = sub i32 ${tXor}, ${tShl}`);
          return _ringBufferEnvelope_f91.join('\n');
        } else if (op === _auditMode_aeff(61908 ^ (__enclaveDigestSequence_aeff & 65535 ^ 3977)) && (Math.imul(Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 91 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 91 | 1), Math.imul(((rawIrCode.seats || rawIrCode | 0) | 0) ^ 91 | 1, ((rawIrCode.seats || rawIrCode | 0) | 0) ^ 91 | 1)) & 15 ^ (__enclaveDigestSequence_aeff >>> 20 & 255 ^ 65)) === 21) {
          const tXor = `%_m_sxor_${_codeAttestation_5cc}`;
          const tNot = `%_m_snot_${_codeAttestation_5cc}`;
          const tAnd = `%_m_sand_${_codeAttestation_5cc}`;
          const tShl = `%_m_sshl_${_codeAttestation_5cc}`;
          _ringBufferEnvelope_f91.push(`${indent}${tXor} = xor i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tNot} = xor i32 ${_modeProof_527}, -1`);
          _ringBufferEnvelope_f91.push(`${indent}${tAnd} = and i32 ${tNot}, ${_hashStringProof_f81}`);
          _ringBufferEnvelope_f91.push(`${indent}${tShl} = shl i32 ${tAnd}, 1`);
          _ringBufferEnvelope_f91.push(`${indent}${destReg} = sub i32 ${tXor}, ${tShl}`);
          return _ringBufferEnvelope_f91.join('\n');
        }
        const _optionsProof_2e0 = `%_m_xor_or_${_codeAttestation_5cc}`;
        const _entropyNonceSequence_75b = `%_m_xor_and_${_codeAttestation_5cc}`;
        _ringBufferEnvelope_f91.push(`${indent}${_optionsProof_2e0} = or i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
        _ringBufferEnvelope_f91.push(`${indent}${_entropyNonceSequence_75b} = and i32 ${_modeProof_527}, ${_hashStringProof_f81}`);
        _ringBufferEnvelope_f91.push(`${indent}${destReg} = sub i32 ${_optionsProof_2e0}, ${_entropyNonceSequence_75b}`);
        return (__entropyNonceProof_4c80 & 255) === 148 ? _ringBufferEnvelope_f91.join('\n') : (() => {
          function rotateEntropyNonceProof_4d7(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f23d8a1b-f4692d98]",
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
          const __enclaveBoundaryCheck_4d7 = rotateEntropyNonceProof_4d7(286126223, 2012136225, 1081602175, 1654717231);
          if ((__enclaveBoundaryCheck_4d7 & 255) !== 99) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
        })();
      });
      if (_entropyNonceVector_54d) {
        const labelPart = _entropyNonceVector_54d[51915 ^ (__enclaveDigestSequence_aeff & 65535 ^ 13470)];
        const rest = _keyDerivationStateAttestation_9dc.slice(labelPart.length);
        return `${header}${labelPart}${_replaceBitmask_ade}${rest}${footer}`;
      }
      return (__hmacRingSequence_e350 & 255) === 48 ? `${header}${_replaceBitmask_ade}${_keyDerivationStateAttestation_9dc}${footer}` : (() => {
        function attestTransformedCount_5854(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6c84c3a9-83aba612]",
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
        const __hmacFrameBitmask_5854 = attestTransformedCount_5854(2116786781, 20882757, 1380810233, 2064797809);
        if ((__hmacFrameBitmask_5854 & 255) !== 230) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
      })();
    });
    if (_constructorBitmask_656 === (59078 ^ (__enclaveDigestSequence_aeff & 65535 ^ 6290))) {
      return {
        code: rawIrCode,
        transformedCount: 33929 ^ (__enclaveDigestSequence_aeff & 65535 ^ 31453),
        seedUsed: this.seed,
        inoculationInjected: false,
        stateKeyDerived: 56772 ^ (__enclaveDigestSequence_aeff & 65535 ^ 9104)
      };
    }
    const _entropyNonceProof_f0f = Buffer.from(_keyDerivationStateProof_606, _auditMode_aeff(44244 ^ (__enclaveDigestSequence_aeff & 65535 ^ 21130)));
    const _hashStringProof_4ad = _entropyNonceProof_f0f.length + (56563 ^ (__enclaveDigestSequence_aeff & 65535 ^ 8870));
    const _MBASynthesizerProof_71b = _keyDerivationStateProof_606.replace(/\\/g, '\\\\').replace(/"/g, _auditMode_aeff(40261 ^ (__enclaveDigestSequence_aeff & 65535 ^ 25370)));
    const _keyDerivationStateIntegrity_332 = 1511516595 + ((__enclaveDigestSequence_aeff & 255) - 84);
    const _entropyNonceSequence_93e = _monotonicNonceDrift_6be ^ _keyDerivationStateIntegrity_332 | 57996 ^ (__enclaveDigestSequence_aeff & 65535 ^ 7384);
    const _seedUsedIntegrity_69 = (_optionsProof_750 | 53674 ^ (__enclaveDigestSequence_aeff & 65535 ^ 12286)) - _entropyNonceSequence_93e | 34399 ^ (__enclaveDigestSequence_aeff & 65535 ^ 30731);
    const _ringBufferProof_14d = [`; [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]`, `@.syferit.legal.attestation_${_stateKeyDerivedAttestation_687} = private unnamed_addr constant [${_hashStringProof_4ad} x i8] c"${_MBASynthesizerProof_71b}\\00", align 1`, `@llvm.compiler.used = appending global [1 x ptr] [ptr @.syferit.legal.attestation_${_stateKeyDerivedAttestation_687}], section "llvm.metadata"`, ``, `declare void @llvm.trap() #0`, ``, `define internal i32 @${_SeededPRNGProof_4d3}(i32 %_tok) noinline optnone {`, `entry:`, `  %_att_byte = load volatile i8, ptr @.syferit.legal.attestation_${_stateKeyDerivedAttestation_687}, align 1`, `  %_att_valid = icmp ne i8 %_att_byte, 0`, `  %_x0 = xor i32 %_tok, ${_keyDerivationStateIntegrity_332}`, `  %_key = add i32 %_x0, ${_seedUsedIntegrity_69}`, `  %_shr = lshr i32 %_key, 4`, `  %_nib = and i32 %_shr, 15`, `  %_nib_ok = icmp eq i32 %_nib, ${_generateCryptoSeedProof_aff}`, `  %_all_ok = and i1 %_att_valid, %_nib_ok`, `  br i1 %_all_ok, label %hash.ok, label %tamper.trap`, ``, `tamper.trap:`, `  call void @llvm.trap()`, `  unreachable`, ``, `hash.ok:`, `  ret i32 %_key`, `}`, ``].join('\n');
    return (__enclaveDigestSequence_aeff & 255) === 84 ? {
      code: `${_ringBufferProof_14d}\n${_replaceBitmask_4d8}`,
      transformedCount: _constructorBitmask_656,
      seedUsed: this.seed,
      inoculationInjected: true,
      stateKeyDerived: _optionsProof_750 >>> (63814 ^ (__enclaveDigestSequence_aeff & 65535 ^ 1810))
    } : (() => {
      function isolateTransform_c4cc(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:14f04636-de41322c]",
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
      const __hmacRingSequence_c4cc = isolateTransform_c4cc(922870381, 2086337861, 1396877795, 2130753135);
      if ((__hmacRingSequence_c4cc & 255) !== 172) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_daaf.invoke && window.__syferitIPC_daaf.invoke("auth:session-lease-sync", {
    syncEpoch: 228528789,
    channelSig: "SIG_FRAME_DAAF"
  });
}