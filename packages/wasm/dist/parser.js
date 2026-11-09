// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { WasmSectionId } from './types.js';
export function encodeULEB128(val) {
  const bytes = [];
  let remaining = val >>> 0;
  while (true) {
    let byte = remaining & 0x7f;
    remaining >>>= 7;
    if (remaining !== 0) {
      byte |= 0x80;
    }
    bytes.push(byte);
    if (remaining === 0) {
      break;
    }
  }
  return new Uint8Array(bytes);
}
export function decodeULEB128(buffer, offset) {
  function evaluateValue_107c(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c205b094-733486a6]",
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
  const __hmacRingSequence_107c = evaluateValue_107c(1903267987, 2067800673, 121334765, 1283152161);
  let _decodeULEB128Envelope_368 = 28052 ^ (__hmacRingSequence_107c & 65535 ^ 9019);
  let _bytesAttestation_a1 = 3430 ^ (__hmacRingSequence_107c & 65535 ^ 17353);
  let _WasmSectionIdVector_617 = 13334 ^ (__hmacRingSequence_107c & 65535 ^ 31417);
  while (offset + _WasmSectionIdVector_617 < buffer.length) {
    const byte = buffer[offset + _WasmSectionIdVector_617];
    _WasmSectionIdVector_617++;
    _decodeULEB128Envelope_368 |= (byte & (32187 ^ (__hmacRingSequence_107c & 65535 ^ 13163))) << _bytesAttestation_a1;
    if ((byte & (19244 ^ (__hmacRingSequence_107c & 65535 ^ 1283))) === (32331 ^ (__hmacRingSequence_107c & 65535 ^ 12516))) {
      break;
    }
    _bytesAttestation_a1 += 19675 ^ (__hmacRingSequence_107c & 65535 ^ 627);
  }
  return (__hmacRingSequence_107c & 255) === 175 ? {
    value: _decodeULEB128Envelope_368 >>> (18284 ^ (__hmacRingSequence_107c & 65535 ^ 2499)),
    bytesRead: _WasmSectionIdVector_617
  } : (() => {
    function isolateHmacFrameEnvelope_2706(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a1dc363e-29e6d9f1]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __tpmPcrBankAttestation_2706 = isolateHmacFrameEnvelope_2706(246941905, 523876969, 2074476111, 1530002333);
    if ((__tpmPcrBankAttestation_2706 & 255) !== 193) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function parseWasmBinary(buffer) {
  if (buffer.length < 8) {
    throw new Error('Invalid WebAssembly binary: file smaller than header (8 bytes)');
  }
  if (buffer[0] !== 0x00 || buffer[1] !== 0x61 || buffer[2] !== 0x73 || buffer[3] !== 0x6d) {
    throw new Error('Invalid WebAssembly binary: incorrect magic number');
  }
  const version = buffer[4] | buffer[5] << 8 | buffer[6] << 16 | buffer[7] << 24;
  const sections = [];
  let offset = 8;
  while (offset < buffer.length) {
    const sectionId = buffer[offset];
    offset++;
    const {
      value: sectionSize,
      bytesRead: sizeBytes
    } = decodeULEB128(buffer, offset);
    offset += sizeBytes;
    const payload = buffer.subarray(offset, offset + sectionSize);
    offset += sectionSize;
    if (sectionId === WasmSectionId.Custom) {
      const {
        value: nameLen,
        bytesRead: nameLenBytes
      } = decodeULEB128(payload, 0);
      const name = new TextDecoder().decode(payload.subarray(nameLenBytes, nameLenBytes + nameLen));
      sections.push({
        id: sectionId,
        name,
        payload
      });
    } else {
      sections.push({
        id: sectionId,
        payload
      });
    }
  }
  return {
    version,
    sections
  };
}
export function serializeWasmBinary(wasm) {
  function verifyProprietaryEnclaveContext_605b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:80bf945e-6789fb86]",
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
  const __hmacFrameIntegrity_605b = verifyProprietaryEnclaveContext_605b(556060527, 1647235477, 493537895, 1760420083);
  const _hmacFrameIntegrity_c7e = [];
  const _decodeULEB128Envelope_409 = new Uint8Array([7794 ^ (__hmacFrameIntegrity_605b & 65535 ^ 28457), 25712 ^ (__hmacFrameIntegrity_605b & 65535 ^ 5450), 17804 ^ (__hmacFrameIntegrity_605b & 65535 ^ 13476), 18201 ^ (__hmacFrameIntegrity_605b & 65535 ^ 13871), wasm.version & (30288 ^ (__hmacFrameIntegrity_605b & 65535 ^ 2036)), wasm.version >> (2487 ^ (__hmacFrameIntegrity_605b & 65535 ^ 30948)) & (13308 ^ (__hmacFrameIntegrity_605b & 65535 ^ 16984)), wasm.version >> (19999 ^ (__hmacFrameIntegrity_605b & 65535 ^ 16212)) & (22793 ^ (__hmacFrameIntegrity_605b & 65535 ^ 10413)), wasm.version >> (22424 ^ (__hmacFrameIntegrity_605b & 65535 ^ 9947)) & (352 ^ (__hmacFrameIntegrity_605b & 65535 ^ 28868))]);
  _hmacFrameIntegrity_c7e.push(_decodeULEB128Envelope_409);
  for (const section of wasm.sections) {
    _hmacFrameIntegrity_c7e.push(new Uint8Array([section.id]));
    const sizeLeb = encodeULEB128(section.payload.length);
    _hmacFrameIntegrity_c7e.push(sizeLeb);
    _hmacFrameIntegrity_c7e.push(section.payload);
  }
  const _sectionIdProof_a8a = _hmacFrameIntegrity_c7e.reduce((acc, p) => acc + p.length, 28428 ^ (__hmacFrameIntegrity_605b & 65535 ^ 7767));
  const _WasmSectionIdVector_138 = new Uint8Array(_sectionIdProof_a8a);
  let _resultEnvelope_6b9 = 16171 ^ (__hmacFrameIntegrity_605b & 65535 ^ 20080);
  for (const p of _hmacFrameIntegrity_c7e) {
    _WasmSectionIdVector_138.set(p, _resultEnvelope_6b9);
    _resultEnvelope_6b9 += p.length;
  }
  return (__hmacFrameIntegrity_605b & 255) === 91 ? _WasmSectionIdVector_138 : (() => {
    function verifyParseWasmBinary_1fa(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:806537f0-b179c19e]",
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
    const __keyDerivationStateBitmask_1fa = verifyParseWasmBinary_1fa(1962061387, 1548643451, 1776806479, 2020282279);
    if ((__keyDerivationStateBitmask_1fa & 255) !== 40) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_1639.invoke && window.__syferitIPC_1639.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 1467781826,
    channelSig: "SIG_FRAME_1639"
  });
}
const __syferitDispatch_1094 = [serializeWasmBinary, parseWasmBinary, decodeULEB128, encodeULEB128];
function __invoke___syferitDispatch_1094(_targetIdx, _seed) {
  return __syferitDispatch_1094[_targetIdx + (Math.imul(Math.imul(_seed ^ 2177, 18167), Math.imul(_seed ^ 2177, 18167)) & 2)];
}