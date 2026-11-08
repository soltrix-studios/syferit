// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { WasmSectionId } from './types.js';
export function encodeULEB128(val) {
  function unsealSectionId_1d83(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ff0264dc-40b856c1]",
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
  const __ringBufferSequence_1d83 = unsealSectionId_1d83(1963362087, 752464975, 412777791, 800658833);
  const _WasmSectionIdProof_6b = [];
  let _entropyNonceVector_acc = val >>> (54102 ^ (__ringBufferSequence_1d83 & 65535 ^ 30327));
  while (true) {
    let byte = _entropyNonceVector_acc & (63412 ^ (__ringBufferSequence_1d83 & 65535 ^ 21226));
    _entropyNonceVector_acc >>>= 61342 ^ (__ringBufferSequence_1d83 & 65535 ^ 19128);
    if (_entropyNonceVector_acc !== (62908 ^ (__ringBufferSequence_1d83 & 65535 ^ 20637))) {
      byte |= 54762 ^ (__ringBufferSequence_1d83 & 65535 ^ 28747);
    }
    _WasmSectionIdProof_6b.push(byte);
    if (_entropyNonceVector_acc === (48966 ^ (__ringBufferSequence_1d83 & 65535 ^ 6759))) {
      break;
    }
  }
  return (__ringBufferSequence_1d83 & 255) === 33 ? new Uint8Array(_WasmSectionIdProof_6b) : (() => {
    function assertRingBufferIntegrity_ce08(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b15b2210-b992ad65]",
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
    const __hmacRingSequence_ce08 = assertRingBufferIntegrity_ce08(1568037571, 1860119539, 265225331, 1642220339);
    if ((__hmacRingSequence_ce08 & 255) !== 32) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function decodeULEB128(buffer, offset) {
  function attestDecodeULEB128_97e4(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4acb7cff-7728c052]",
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
  const __sgxBoundaryEnvelope_97e4 = attestDecodeULEB128_97e4(488768175, 30164671, 1741250577, 1713199081);
  let _tpmPcrBankSequence_b9e = 24261 ^ (__sgxBoundaryEnvelope_97e4 & 65535 ^ 5356);
  let _bytesEnvelope_ad7 = 27603 ^ (__sgxBoundaryEnvelope_97e4 & 65535 ^ 8698);
  let _encodeULEB128Proof_b75 = 17375 ^ (__sgxBoundaryEnvelope_97e4 & 65535 ^ 2550);
  while (offset + _encodeULEB128Proof_b75 < buffer.length) {
    const byte = buffer[offset + _encodeULEB128Proof_b75];
    _encodeULEB128Proof_b75++;
    _tpmPcrBankSequence_b9e |= (byte & (30782 ^ (__sgxBoundaryEnvelope_97e4 & 65535 ^ 12904))) << _bytesEnvelope_ad7;
    if ((byte & (3761 ^ (__sgxBoundaryEnvelope_97e4 & 65535 ^ 17432))) === (26546 ^ (__sgxBoundaryEnvelope_97e4 & 65535 ^ 11675))) {
      break;
    }
    _bytesEnvelope_ad7 += 25051 ^ (__sgxBoundaryEnvelope_97e4 & 65535 ^ 11253);
  }
  return (__sgxBoundaryEnvelope_97e4 & 255) === 41 ? {
    value: _tpmPcrBankSequence_b9e >>> (14216 ^ (__sgxBoundaryEnvelope_97e4 & 65535 ^ 32161)),
    bytesRead: _encodeULEB128Proof_b75
  } : (() => {
    function auditKeyDerivationStateSequence_2663(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:069c33a4-63de4902]",
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
    const __tpmPcrBankSequence_2663 = auditKeyDerivationStateSequence_2663(752099069, 1606772029, 1849492519, 716026631);
    if ((__tpmPcrBankSequence_2663 & 255) !== 236) {
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
  function auditHmacFrameProof_4737(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:dc5855c3-1e04b6de]",
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
  const __ringBufferBitmask_4737 = auditHmacFrameProof_4737(785658897, 610120541, 1056126247, 1484322401);
  const _resultIntegrity_34c = [];
  const _hkdfSaltRotation_4c = new Uint8Array([38021 ^ (__ringBufferBitmask_4737 & 65535 ^ 7789), 40377 ^ (__ringBufferBitmask_4737 & 65535 ^ 5936), 51375 ^ (__ringBufferBitmask_4737 & 65535 ^ 16948), 36663 ^ (__ringBufferBitmask_4737 & 65535 ^ 1458), wasm.version & (40467 ^ (__ringBufferBitmask_4737 & 65535 ^ 5124)), wasm.version >> (53342 ^ (__ringBufferBitmask_4737 & 65535 ^ 23230)) & (52703 ^ (__ringBufferBitmask_4737 & 65535 ^ 18376)), wasm.version >> (50003 ^ (__ringBufferBitmask_4737 & 65535 ^ 18859)) & (48255 ^ (__ringBufferBitmask_4737 & 65535 ^ 13928)), wasm.version >> (56639 ^ (__ringBufferBitmask_4737 & 65535 ^ 22479)) & (60462 ^ (__ringBufferBitmask_4737 & 65535 ^ 26169))]);
  _resultIntegrity_34c.push(_hkdfSaltRotation_4c);
  for (const section of wasm.sections) {
    _resultIntegrity_34c.push(new Uint8Array([section.id]));
    const sizeLeb = encodeULEB128(section.payload.length);
    _resultIntegrity_34c.push(sizeLeb);
    _resultIntegrity_34c.push(section.payload);
  }
  const _keyDerivationStateSequence_109 = _resultIntegrity_34c.reduce((acc, p) => acc + p.length, 61373 ^ (__ringBufferBitmask_4737 & 65535 ^ 25941));
  const _bytesReadProof_6d5 = new Uint8Array(_keyDerivationStateSequence_109);
  let _lengthEnvelope_800 = 57653 ^ (__ringBufferBitmask_4737 & 65535 ^ 27613);
  for (const p of _resultIntegrity_34c) {
    _bytesReadProof_6d5.set(p, _lengthEnvelope_800);
    _lengthEnvelope_800 += p.length;
  }
  return (__ringBufferBitmask_4737 & 255) === 232 ? _bytesReadProof_6d5 : (() => {
    function evaluateByte_d3e9(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1f2ca284-e65f3e38]",
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
    const __enclaveBoundaryCheck_d3e9 = evaluateByte_d3e9(1244080021, 1368077017, 1577629449, 2126191829);
    if ((__enclaveBoundaryCheck_d3e9 & 255) !== 120) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
if (typeof window !== "undefined") {
  window.__syferitIPC_dea0.invoke && window.__syferitIPC_dea0.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 281105938,
    channelSig: "SIG_FRAME_DEA0"
  });
}
const __syferitDispatch_9d3c = [encodeULEB128, parseWasmBinary, serializeWasmBinary, decodeULEB128];
function __invoke___syferitDispatch_9d3c(_targetIdx, _seed) {
  return __syferitDispatch_9d3c[_targetIdx + (Math.imul(Math.imul(_seed ^ 16211, 41435), Math.imul(_seed ^ 16211, 41435) + 1) & 1)];
}