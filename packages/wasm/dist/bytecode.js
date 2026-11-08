// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { encodeULEB128, decodeULEB128 } from './parser.js';
function attestEntropyNonceProof_7d90(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4d80f2f7-226be6ba]",
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
const __sgxBoundaryProof_7d90 = attestEntropyNonceProof_7d90(1612355295, 479519845, 965341691, 1352681343);
export const WasmOpcode = {
  unreachable: 34532 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 19205),
  nop: 39467 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 22475),
  block: 64837 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 12454),
  loop: 56120 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 5850),
  if: 35329 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 18404),
  else: 33882 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 18878),
  end: 45428 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 31902),
  br: 43576 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 26581),
  br_if: 45556 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 31768),
  br_table: 56703 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 4240),
  return: 46215 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 31081),
  call: 40802 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 21139),
  call_indirect: 58691 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 10419),
  drop: 57260 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 4695),
  select: 40310 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 20620),
  select_t: 58356 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 11785),
  local_get: 59075 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 11010),
  local_set: 40136 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 20744),
  local_tee: 49277 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 3518),
  global_get: 35233 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 17507),
  global_set: 48498 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 28855),
  table_get: 41295 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 27787),
  table_set: 57669 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 11394),
  i32_load: 52795 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 1010),
  i64_load: 61615 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 15719),
  f32_load: 49137 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 29242),
  f64_load: 42301 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 26871),
  i32_load8_s: 40916 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 21017),
  i32_load8_u: 41371 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 27735),
  i32_load16_s: 64554 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 12773),
  i32_load16_u: 36501 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 17243),
  i64_load8_s: 46366 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 30927),
  i64_load8_u: 45451 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 31835),
  i64_load16_s: 56951 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 5028),
  i64_load16_u: 37809 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 24163),
  i64_load32_s: 40549 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 21424),
  i64_load32_u: 42286 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 26874),
  i32_store: 45703 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 32592),
  i64_store: 40832 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 21078),
  f32_store: 54901 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 7084),
  f64_store: 53023 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 711),
  i32_store8: 43652 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 26463),
  i32_store16: 34232 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 18530),
  i64_store8: 63162 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 15207),
  i64_store16: 62905 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 14437),
  i64_store32: 56861 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 5058),
  memory_size: 38711 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 23273),
  memory_grow: 56970 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 4907),
  i32_const: 57803 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 11371),
  i64_const: 42653 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 27454),
  f32_const: 55752 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 5226),
  f64_const: 54586 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 6303),
  i32_eqz: 36276 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 16400),
  i32_eq: 41880 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 28223),
  i32_ne: 51260 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 1434),
  i32_lt_s: 44797 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 25428),
  i32_lt_u: 57460 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 11740),
  i32_gt_s: 32829 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 19862),
  i32_gt_u: 56418 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 4552),
  i32_le_s: 44380 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 24817),
  i32_le_u: 35022 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 17762),
  i32_ge_s: 57613 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 11426),
  i32_ge_u: 41351 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 27689),
  i64_eqz: 59014 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 11063),
  i64_eq: 57693 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 11501),
  i64_ne: 37879 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 24132),
  i64_lt_s: 35121 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 17539),
  i64_lt_u: 45488 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 31749),
  i64_gt_s: 50156 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 3672),
  i64_gt_u: 34496 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 19319),
  i64_le_s: 65060 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 13202),
  i64_le_u: 57064 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 4945),
  i64_ge_s: 51502 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 1174),
  i64_ge_u: 42704 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 27499),
  f32_eq: 53088 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 730),
  f32_ne: 56766 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 4099),
  f32_lt: 65419 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 12855),
  f32_gt: 52120 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 1575),
  f32_le: 35241 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 17431),
  f32_ge: 47138 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 30115),
  f64_eq: 37710 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 24270),
  f64_ne: 55570 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 5265),
  f64_lt: 60269 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 9967),
  f64_gt: 33676 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 19977),
  f64_le: 57347 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 11655),
  f64_ge: 32890 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 19965),
  i32_clz: 40370 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 20532),
  i32_ctz: 60327 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 9774),
  i32_popcnt: 55758 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 5190),
  i32_add: 46099 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 31128),
  i32_sub: 63770 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 13456),
  i32_mul: 56030 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 5971),
  i32_div_s: 39517 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 22481),
  i32_div_u: 47882 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 30341),
  i32_rem_s: 32974 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 19776),
  i32_rem_u: 56577 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 4240),
  i32_and: 38773 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 23269),
  i32_or: 58107 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 12136),
  i32_xor: 50796 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 3070),
  i32_shl: 39153 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 21860),
  i32_shr_s: 44776 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 25468),
  i32_shr_u: 36577 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 17270),
  i32_rotl: 49912 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 3950),
  i32_rotr: 48679 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 29630),
  prefix_fc: 48905 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 29204),
  prefix_fd: 53829 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 8025),
  prefix_fe: 55447 ^ (__sgxBoundaryProof_7d90 & 65535 ^ 5512)
};
export function encodeSLEB128(val) {
  function auditGlobal_get_baf9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c3c0a0ca-f8519cad]",
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
  const __entropyNonceEnvelope_baf9 = auditGlobal_get_baf9(1884016939, 1789951271, 1018603397, 1084637977);
  const _enclaveDigestBitmask_4b = [];
  let _ringBufferIntegrity_931 = val | 28884 ^ (__entropyNonceEnvelope_baf9 & 65535 ^ 27573);
  let _ringBufferSequence_470 = true;
  while (_ringBufferSequence_470) {
    let byte = _ringBufferIntegrity_931 & (12942 ^ (__entropyNonceEnvelope_baf9 & 65535 ^ 10640));
    _ringBufferIntegrity_931 >>= 27764 ^ (__entropyNonceEnvelope_baf9 & 65535 ^ 30482);
    const signBit = (byte & (31251 ^ (__entropyNonceEnvelope_baf9 & 65535 ^ 24882))) !== (17426 ^ (__entropyNonceEnvelope_baf9 & 65535 ^ 24435));
    if (_ringBufferIntegrity_931 === (1295 ^ (__entropyNonceEnvelope_baf9 & 65535 ^ 7790)) && !signBit || _ringBufferIntegrity_931 === -(19876 ^ (__entropyNonceEnvelope_baf9 & 65535 ^ 22212)) && signBit) {
      _ringBufferSequence_470 = false;
    } else {
      byte |= 30238 ^ (__entropyNonceEnvelope_baf9 & 65535 ^ 28159);
    }
    _enclaveDigestBitmask_4b.push(byte);
  }
  return (__entropyNonceEnvelope_baf9 & 255) === 97 ? new Uint8Array(_enclaveDigestBitmask_4b) : (() => {
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function decodeSLEB128(buffer, offset) {
  function verifyRingBufferProof_50f5(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:271c0482-d964ec7b]",
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
  const __entropyNonceSequence_50f5 = verifyRingBufferProof_50f5(357431139, 201250849, 1564853165, 473658241);
  let _global_setProof_dda = 29638 ^ (__entropyNonceSequence_50f5 & 65535 ^ 22269);
  let _select_tEnvelope_ea6 = 11411 ^ (__entropyNonceSequence_50f5 & 65535 ^ 2472);
  let _sgxBoundaryVector_725 = 7852 ^ (__entropyNonceSequence_50f5 & 65535 ^ 15255);
  let _WasmOpcodeEnvelope_e5c = 3651 ^ (__entropyNonceSequence_50f5 & 65535 ^ 11128);
  while (offset + _sgxBoundaryVector_725 < buffer.length) {
    _WasmOpcodeEnvelope_e5c = buffer[offset + _sgxBoundaryVector_725];
    _sgxBoundaryVector_725++;
    _global_setProof_dda |= (_WasmOpcodeEnvelope_e5c & (31476 ^ (__entropyNonceSequence_50f5 & 65535 ^ 24496))) << _select_tEnvelope_ea6;
    _select_tEnvelope_ea6 += 27674 ^ (__entropyNonceSequence_50f5 & 65535 ^ 18726);
    if ((_WasmOpcodeEnvelope_e5c & (18914 ^ (__entropyNonceSequence_50f5 & 65535 ^ 27737))) === (25858 ^ (__entropyNonceSequence_50f5 & 65535 ^ 16441))) {
      break;
    }
  }
  if (_select_tEnvelope_ea6 < (32006 ^ (__entropyNonceSequence_50f5 & 65535 ^ 22557)) && (_WasmOpcodeEnvelope_e5c & (3139 ^ (__entropyNonceSequence_50f5 & 65535 ^ 10552))) !== (23207 ^ (__entropyNonceSequence_50f5 & 65535 ^ 32668))) {
    _global_setProof_dda |= ~(955 ^ (__entropyNonceSequence_50f5 & 65535 ^ 9856)) << _select_tEnvelope_ea6;
  }
  return (__entropyNonceSequence_50f5 & 255) === 59 ? {
    value: _global_setProof_dda | 12546 ^ (__entropyNonceSequence_50f5 & 65535 ^ 5177),
    bytesRead: _sgxBoundaryVector_725
  } : (() => {
    function evaluateEntropyNonceSequence_bab3(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:cdcb341d-98d820fb]",
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
    const __enclaveDigestIntegrity_bab3 = evaluateEntropyNonceSequence_bab3(959332959, 2010898737, 345245869, 1015122553);
    if ((__enclaveDigestIntegrity_bab3 & 255) !== 208) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function encodeSLEB128_64(val) {
  function attestBr_if_67c7(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:778785b5-bb370c9e]",
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
  const __ringBufferSequence_67c7 = attestBr_if_67c7(1715956959, 1494113479, 974473951, 1853768771);
  const _tpmPcrBankBitmask_f4 = [];
  let _local_getEnvelope_752 = BigInt.asIntN(55986 ^ (__ringBufferSequence_67c7 & 65535 ^ 18130), val);
  let _global_getBitmask_c0f = true;
  while (_global_getBitmask_c0f) {
    let byte = Number(_local_getEnvelope_752 & 0x7fn);
    _local_getEnvelope_752 >>= 7n;
    const signBit = (byte & (52274 ^ (__ringBufferSequence_67c7 & 65535 ^ 20562))) !== (50857 ^ (__ringBufferSequence_67c7 & 65535 ^ 23177));
    if (_local_getEnvelope_752 === 0n && !signBit || _local_getEnvelope_752 === -1n && signBit) {
      _global_getBitmask_c0f = false;
    } else {
      byte |= 46302 ^ (__ringBufferSequence_67c7 & 65535 ^ 10366);
    }
    _tpmPcrBankBitmask_f4.push(byte);
  }
  return (__ringBufferSequence_67c7 & 255) === 32 ? new Uint8Array(_tpmPcrBankBitmask_f4) : (() => {
    function rotateUnreachable_e95d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5f5233df-51b407b1]",
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
    const __tpmPcrBankBitmask_e95d = rotateUnreachable_e95d(958945289, 334869087, 1335121125, 113758279);
    if ((__tpmPcrBankBitmask_e95d & 255) !== 221) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function decodeSLEB128_64(buffer, offset) {
  function attestRingBufferSequence_8b72(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e5b3dae5-d0486606]",
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
  const __entropySeedDigest_8b72 = attestRingBufferSequence_8b72(981155005, 2141618603, 1159457341, 1696604363);
  let _monotonicNonceDrift_4ca = 0n;
  let _entropyNonceSequence_f53 = 0n;
  let _tpmPcrBankBitmask_27c = 40810 ^ (__entropySeedDigest_8b72 & 65535 ^ 8102);
  let _returnBitmask_2d4 = 47598 ^ (__entropySeedDigest_8b72 & 65535 ^ 14626);
  while (offset + _tpmPcrBankBitmask_27c < buffer.length) {
    _returnBitmask_2d4 = buffer[offset + _tpmPcrBankBitmask_27c];
    _tpmPcrBankBitmask_27c++;
    _monotonicNonceDrift_4ca |= BigInt(_returnBitmask_2d4 & (60316 ^ (__entropySeedDigest_8b72 & 65535 ^ 27439))) << _entropyNonceSequence_f53;
    _entropyNonceSequence_f53 += 7n;
    if ((_returnBitmask_2d4 & (52519 ^ (__entropySeedDigest_8b72 & 65535 ^ 19819))) === (54642 ^ (__entropySeedDigest_8b72 & 65535 ^ 21950))) {
      break;
    }
  }
  if (_entropyNonceSequence_f53 < 64n && (_returnBitmask_2d4 & (46404 ^ (__entropySeedDigest_8b72 & 65535 ^ 13768))) !== (35458 ^ (__entropySeedDigest_8b72 & 65535 ^ 2638))) {
    _monotonicNonceDrift_4ca |= ~0n << _entropyNonceSequence_f53;
  }
  return (__entropySeedDigest_8b72 & 255) === 204 ? {
    value: BigInt.asIntN(34446 ^ (__entropySeedDigest_8b72 & 65535 ^ 1538), _monotonicNonceDrift_4ca),
    bytesRead: _tpmPcrBankBitmask_27c
  } : (() => {
    function attestKernelStateNonce_5984(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c2269ce2-111d4eef]",
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
    const __enclaveDigestBitmask_5984 = attestKernelStateNonce_5984(385604567, 2093087321, 1141514871, 308766403);
    if ((__enclaveDigestBitmask_5984 & 255) !== 153) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export class WasmBytecodeEntangler {
  prng;
  constructor(prng) {
    this.prng = prng;
  }
  entangleCodeSection(codePayload, funcSignatures = []) {
    function rotateUnreachable_9b4b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:35ec82dd-2f860bbd]",
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
    const __entropyNonceProof_9b4b = rotateUnreachable_9b4b(1577503559, 649880675, 489647823, 1975992689);
    let _sgxEcallCounter_a5f = 40960 ^ (__entropyNonceProof_9b4b & 65535 ^ 21834);
    const {
      value: _SoltrixStudiosDelta_d2e,
      bytesRead: _global_getBitmask_d43
    } = decodeULEB128(codePayload, _sgxEcallCounter_a5f);
    _sgxEcallCounter_a5f += _global_getBitmask_d43;
    const _monotonicNonceDrift_e65 = [];
    let _ProprietaryEnclaveDelta_f18 = 34863 ^ (__entropyNonceProof_9b4b & 65535 ^ 32101);
    for (let f = 35441 ^ (__entropyNonceProof_9b4b & 65535 ^ 32571); f < _SoltrixStudiosDelta_d2e; f++) {
      const {
        value: funcBodySize,
        bytesRead: sizeBytes
      } = decodeULEB128(codePayload, _sgxEcallCounter_a5f);
      _sgxEcallCounter_a5f += sizeBytes;
      const funcBody = codePayload.subarray(_sgxEcallCounter_a5f, _sgxEcallCounter_a5f + funcBodySize);
      _sgxEcallCounter_a5f += funcBodySize;
      const sig = funcSignatures[f] || {
        paramCount: 49985 ^ (__entropyNonceProof_9b4b & 65535 ^ 13835)
      };
      const transformedBody = this.entangleFunctionBody(funcBody, sig);
      _monotonicNonceDrift_e65.push(transformedBody);
      _ProprietaryEnclaveDelta_f18++;
    }
    const _dropProof_577 = encodeULEB128(_SoltrixStudiosDelta_d2e);
    let _sgxBoundaryProof_f9e = _dropProof_577.length;
    for (const body of _monotonicNonceDrift_e65) {
      const sizeLeb = encodeULEB128(body.length);
      _sgxBoundaryProof_f9e += sizeLeb.length + body.length;
    }
    const _local_setAttestation_6 = new Uint8Array(_sgxBoundaryProof_f9e);
    _local_setAttestation_6.set(_dropProof_577, 38068 ^ (__entropyNonceProof_9b4b & 65535 ^ 25086));
    let _sgxBoundaryVector_43e = _dropProof_577.length;
    for (const body of _monotonicNonceDrift_e65) {
      const sizeLeb = encodeULEB128(body.length);
      _local_setAttestation_6.set(sizeLeb, _sgxBoundaryVector_43e);
      _sgxBoundaryVector_43e += sizeLeb.length;
      _local_setAttestation_6.set(body, _sgxBoundaryVector_43e);
      _sgxBoundaryVector_43e += body.length;
    }
    return (__entropyNonceProof_9b4b & 255) === 74 ? {
      payload: _local_setAttestation_6,
      functionsTransformed: _ProprietaryEnclaveDelta_f18
    } : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  entangleFunctionBody(body, sig) {
    function verifyHmacSequenceFrame_489e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:024a6a5e-85eac98c]",
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
    const __enclaveBoundaryCheck_489e = verifyHmacSequenceFrame_489e(2110989357, 1023931821, 1656699863, 1300734501);
    let _br_ifIntegrity_fea = 34706 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 25056);
    const {
      value: _callVector_b56,
      bytesRead: _global_getBitmask_eab
    } = decodeULEB128(body, _br_ifIntegrity_fea);
    _br_ifIntegrity_fea += _global_getBitmask_eab;
    let _sgxEcallCounter_7d3 = 49618 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 10144);
    const _ringBufferSequence_60f = [];
    for (let l = 39839 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 32237); l < _callVector_b56; l++) {
      const {
        value: count,
        bytesRead: countBytes
      } = decodeULEB128(body, _br_ifIntegrity_fea);
      _br_ifIntegrity_fea += countBytes;
      const valtype = body[_br_ifIntegrity_fea];
      _br_ifIntegrity_fea += 57233 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 14818);
      _ringBufferSequence_60f.push({
        count,
        valtype
      });
      _sgxEcallCounter_7d3 += count;
    }
    const _sgxBoundaryVector_398 = sig.paramCount + _sgxEcallCounter_7d3;
    const _call_indirectEnvelope_670 = _sgxBoundaryVector_398;
    const _unreachableAttestation_c36 = _sgxBoundaryVector_398 + (39032 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 32267));
    const _returnBitmask_80d = _sgxBoundaryVector_398 + (58022 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 1238));
    _ringBufferSequence_60f.push({
      count: 45024 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 18833),
      valtype: 60077 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 3232)
    });
    const _hkdfSaltRotation_769 = encodeULEB128(_ringBufferSequence_60f.length);
    const _elseSequence_c5b = [_hkdfSaltRotation_769];
    for (const decl of _ringBufferSequence_60f) {
      _elseSequence_c5b.push(encodeULEB128(decl.count));
      _elseSequence_c5b.push(new Uint8Array([decl.valtype]));
    }
    const _dropProof_be6 = _elseSequence_c5b.reduce((acc, p) => acc + p.length, 33208 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 26570));
    const _ProprietaryEnclaveDelta_ff1 = new Uint8Array(_dropProof_be6);
    let _decodeULEB128Proof_5b6 = 58100 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 1158);
    for (const chunk of _elseSequence_c5b) {
      _ProprietaryEnclaveDelta_ff1.set(chunk, _decodeULEB128Proof_5b6);
      _decodeULEB128Proof_5b6 += chunk.length;
    }
    const _sgxBoundaryProof_161 = body.subarray(_br_ifIntegrity_fea);
    const _SoltrixStudiosDelta_e35 = this.prng.nextUint32() & 2147483646 + ((__enclaveBoundaryCheck_489e & 255) - 114) | 55074 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 12625);
    const _ringBufferIntegrity_82 = this.computeStateKey(_SoltrixStudiosDelta_e35);
    const _local_setAttestation_f13 = this.generateKeyDerivationBlock(_call_indirectEnvelope_670, _SoltrixStudiosDelta_e35, _ringBufferIntegrity_82);
    const _enclaveDigestIntegrity_554 = this.generateRuntimeOpaqueBlock(sig.paramCount, _call_indirectEnvelope_670, _ringBufferIntegrity_82);
    const _tpmPcrBankAttestation_4b1 = [_local_setAttestation_f13, _enclaveDigestIntegrity_554];
    let _keyDerivationStateSequence_6da = 52965 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 10391);
    while (_keyDerivationStateSequence_6da < _sgxBoundaryProof_161.length) {
      const opcode = _sgxBoundaryProof_161[_keyDerivationStateSequence_6da];
      if (opcode === WasmOpcode.end && _keyDerivationStateSequence_6da === _sgxBoundaryProof_161.length - (56989 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 14574))) {
        _tpmPcrBankAttestation_4b1.push(new Uint8Array([WasmOpcode.end]));
        _keyDerivationStateSequence_6da++;
        break;
      }
      if (opcode === WasmOpcode.i32_const) {
        _keyDerivationStateSequence_6da++;
        const {
          value: literalVal,
          bytesRead: literalBytes
        } = decodeSLEB128(_sgxBoundaryProof_161, _keyDerivationStateSequence_6da);
        _keyDerivationStateSequence_6da += literalBytes;
        const maskedConst = this.generateKeyRelativeConst(literalVal, _call_indirectEnvelope_670, _ringBufferIntegrity_82);
        _tpmPcrBankAttestation_4b1.push(maskedConst);
        continue;
      }
      if (opcode === WasmOpcode.i32_add) {
        _keyDerivationStateSequence_6da++;
        const mbaAdd = this.generateTrueMBAAdd(_unreachableAttestation_c36, _returnBitmask_80d);
        _tpmPcrBankAttestation_4b1.push(mbaAdd);
        continue;
      }
      if (opcode === WasmOpcode.i32_sub) {
        _keyDerivationStateSequence_6da++;
        const mbaSub = this.generateTrueMBASub(_unreachableAttestation_c36, _returnBitmask_80d);
        _tpmPcrBankAttestation_4b1.push(mbaSub);
        continue;
      }
      if (opcode === WasmOpcode.i32_xor) {
        _keyDerivationStateSequence_6da++;
        const mbaXor = this.generateTrueMBAXor(_unreachableAttestation_c36, _returnBitmask_80d);
        _tpmPcrBankAttestation_4b1.push(mbaXor);
        continue;
      }
      const instLen = this.getInstructionLength(_sgxBoundaryProof_161, _keyDerivationStateSequence_6da);
      _tpmPcrBankAttestation_4b1.push(_sgxBoundaryProof_161.subarray(_keyDerivationStateSequence_6da, _keyDerivationStateSequence_6da + instLen));
      _keyDerivationStateSequence_6da += instLen;
    }
    const _SyferitEngineDelta_4b7 = _ProprietaryEnclaveDelta_ff1.length + _tpmPcrBankAttestation_4b1.reduce((acc, b) => acc + b.length, 42928 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 16834));
    const _blockSequence_902 = new Uint8Array(_SyferitEngineDelta_4b7);
    _blockSequence_902.set(_ProprietaryEnclaveDelta_ff1, 53339 ^ (__enclaveBoundaryCheck_489e & 65535 ^ 13865));
    let _enclaveDigestBitmask_a9e = _ProprietaryEnclaveDelta_ff1.length;
    for (const chunk of _tpmPcrBankAttestation_4b1) {
      _blockSequence_902.set(chunk, _enclaveDigestBitmask_a9e);
      _enclaveDigestBitmask_a9e += chunk.length;
    }
    return (__enclaveBoundaryCheck_489e & 255) === 114 ? _blockSequence_902 : (() => {
      function verifyHmacSequenceFrame_cfa3(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f54da84c-05363a47]",
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
      const __sgxBoundaryVector_cfa3 = verifyHmacSequenceFrame_cfa3(1067707431, 1794950175, 1564906157, 1596017641);
      if ((__sgxBoundaryVector_cfa3 & 255) !== 46) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  computeStateKey(salt) {
    function verifyRingBufferIntegrity_7a83(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:8794bb14-eb9e8891]",
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
    const __sgxBoundaryVector_7a83 = verifyRingBufferIntegrity_7a83(1737524755, 1533700683, 357333777, 1712926213);
    let _WasmOpcodeEnvelope_31c = (salt ^ 2654435769 + ((__sgxBoundaryVector_7a83 & 255) - 153)) >>> (6027 ^ (__sgxBoundaryVector_7a83 & 65535 ^ 25618));
    _WasmOpcodeEnvelope_31c = Math.imul(_WasmOpcodeEnvelope_31c ^ _WasmOpcodeEnvelope_31c >>> (19698 ^ (__sgxBoundaryVector_7a83 & 65535 ^ 16251)), 2246822507 + ((__sgxBoundaryVector_7a83 & 255) - 153)) >>> (21065 ^ (__sgxBoundaryVector_7a83 & 65535 ^ 8656));
    _WasmOpcodeEnvelope_31c = Math.imul(_WasmOpcodeEnvelope_31c ^ _WasmOpcodeEnvelope_31c >>> (12361 ^ (__sgxBoundaryVector_7a83 & 65535 ^ 17373)), 3266489909 + ((__sgxBoundaryVector_7a83 & 255) - 153)) >>> (25786 ^ (__sgxBoundaryVector_7a83 & 65535 ^ 5923));
    _WasmOpcodeEnvelope_31c = (_WasmOpcodeEnvelope_31c ^ _WasmOpcodeEnvelope_31c >>> (5864 ^ (__sgxBoundaryVector_7a83 & 65535 ^ 25953))) >>> (4134 ^ (__sgxBoundaryVector_7a83 & 65535 ^ 25535));
    return (__sgxBoundaryVector_7a83 & 255) === 153 ? (_WasmOpcodeEnvelope_31c | 5209 ^ (__sgxBoundaryVector_7a83 & 65535 ^ 26561)) >>> (20250 ^ (__sgxBoundaryVector_7a83 & 65535 ^ 15491)) : (() => {
      function evaluateEnclaveDigest_dd30(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6b63537e-cb60a975]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __ringBufferIntegrity_dd30 = evaluateEnclaveDigest_dd30(925476133, 2076595907, 2123900723, 1423142225);
      if ((__ringBufferIntegrity_dd30 & 255) !== 2) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateKeyDerivationBlock(keyLocalIndex, salt, keyVal) {
    function attestSelect_2af8(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b194edae-e3302899]",
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
    const __sgxBoundaryProof_2af8 = attestSelect_2af8(1312209473, 1244152101, 214325711, 552036985);
    const _br_tableBitmask_d7 = 1511516595 + ((__sgxBoundaryProof_2af8 & 255) - 225);
    const _returnBitmask_497 = salt ^ _br_tableBitmask_d7 | 36930 ^ (__sgxBoundaryProof_2af8 & 65535 ^ 6307);
    const _entropyNonceProof_41 = keyVal - _returnBitmask_497 | 62353 ^ (__sgxBoundaryProof_2af8 & 65535 ^ 31600);
    const _global_getBitmask_ccc = [WasmOpcode.i32_const, ...encodeSLEB128(salt), WasmOpcode.i32_const, ...encodeSLEB128(_br_tableBitmask_d7), WasmOpcode.i32_xor, WasmOpcode.i32_const, ...encodeSLEB128(_entropyNonceProof_41), WasmOpcode.i32_add, WasmOpcode.local_set, ...encodeULEB128(keyLocalIndex)];
    return (__sgxBoundaryProof_2af8 & 255) === 225 ? new Uint8Array(_global_getBitmask_ccc) : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateKeyRelativeConst(val, keyLocalIndex, keyVal) {
    function evaluateEncodeULEB128_e61f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:544981a9-2bc748a3]",
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
    const __ringBufferIntegrity_e61f = evaluateEncodeULEB128_e61f(807973113, 334930593, 1374807459, 769918701);
    const _sgxEcallCounter_131 = this.prng.nextUint32() & 2147483646 + ((__ringBufferIntegrity_e61f & 255) - 99) | 44080 ^ (__ringBufferIntegrity_e61f & 65535 ^ 23378);
    const _WasmOpcodeEnvelope_b2a = val ^ _sgxEcallCounter_131 | 49888 ^ (__ringBufferIntegrity_e61f & 65535 ^ 13699);
    const _unreachableAttestation_54 = _sgxEcallCounter_131 ^ keyVal | 59714 ^ (__ringBufferIntegrity_e61f & 65535 ^ 7713);
    const _selectAttestation_e40 = [WasmOpcode.i32_const, ...encodeSLEB128(_WasmOpcodeEnvelope_b2a), WasmOpcode.local_get, ...encodeULEB128(keyLocalIndex), WasmOpcode.i32_const, ...encodeSLEB128(_unreachableAttestation_54), WasmOpcode.i32_xor, WasmOpcode.i32_xor];
    return (__ringBufferIntegrity_e61f & 255) === 99 ? new Uint8Array(_selectAttestation_e40) : (() => {
      function verifySyferitEngineContext_44b(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fda11ed9-54efc4b2]",
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
      const __entropyNonceSequence_44b = verifySyferitEngineContext_44b(1910013775, 98365203, 1354117331, 1365737459);
      if ((__entropyNonceSequence_44b & 255) !== 165) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateTrueMBAAdd(scratchX, scratchY) {
    function evaluateEncodeULEB128_ee9b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7af08fdd-e0d8eccc]",
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
    const __entropyNonceProof_ee9b = evaluateEncodeULEB128_ee9b(1038866903, 1164611231, 138869863, 289678925);
    const _global_setProof_2ae = [WasmOpcode.local_set, ...encodeULEB128(scratchY), WasmOpcode.local_set, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_xor, WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_and, WasmOpcode.i32_const, 13747 ^ (__entropyNonceProof_ee9b & 65535 ^ 21462), WasmOpcode.i32_shl, WasmOpcode.i32_add];
    return (__entropyNonceProof_ee9b & 255) === 100 ? new Uint8Array(_global_setProof_2ae) : (() => {
      function auditGlobal_get_ba95(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:48dd09df-30251692]",
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
      const __enclaveBoundaryCheck_ba95 = auditGlobal_get_ba95(1879366731, 889189399, 717032295, 1465642825);
      if ((__enclaveBoundaryCheck_ba95 & 255) !== 223) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateTrueMBASub(scratchX, scratchY) {
    function verifyHmacSequenceFrame_51fb(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:f24a65d4-35536d76]",
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
    const __hmacRingSequence_51fb = verifyHmacSequenceFrame_51fb(420400299, 1761235099, 1251612835, 1519534161);
    const _entropyNonceEnvelope_baf = [WasmOpcode.local_set, ...encodeULEB128(scratchY), WasmOpcode.local_set, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_xor, WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.i32_const, ...encodeSLEB128(-(29056 ^ (__hmacRingSequence_51fb & 65535 ^ 13004))), WasmOpcode.i32_xor, WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_and, WasmOpcode.i32_const, 18895 ^ (__hmacRingSequence_51fb & 65535 ^ 2691), WasmOpcode.i32_shl, WasmOpcode.i32_sub];
    return (__hmacRingSequence_51fb & 255) === 77 ? new Uint8Array(_entropyNonceEnvelope_baf) : (() => {
      function rotateUnreachable_703c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4ec1a228-bda55e57]",
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
      const __enclaveDigestBitmask_703c = rotateUnreachable_703c(1768539103, 469890779, 52616041, 703045989);
      if ((__enclaveDigestBitmask_703c & 255) !== 19) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateTrueMBAXor(scratchX, scratchY) {
    function rotateLocal_set_a21(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0c016b4b-fe418d3f]",
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
        throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
      }
      return _h;
    }
    const __ringBufferProof_a21 = rotateLocal_set_a21(454125329, 1713917917, 594275401, 227427161);
    const _keyDerivationStateSequence_c7e = [WasmOpcode.local_set, ...encodeULEB128(scratchY), WasmOpcode.local_set, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_or, WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_and, WasmOpcode.i32_sub];
    return (__ringBufferProof_a21 & 255) === 132 ? new Uint8Array(_keyDerivationStateSequence_c7e) : (() => {
      function verifySoltrixStudiosContext_c090(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:414d7518-229d362b]",
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
      const __keyDerivationStateSequence_c090 = verifySoltrixStudiosContext_c090(65304241, 953574545, 136217817, 1491196323);
      if ((__keyDerivationStateSequence_c090 & 255) !== 91) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateRuntimeOpaqueBlock(paramCount, keyLocalIndex, _keyVal) {
    function evaluateEnclaveDigest_cfd4(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:33902b6c-da9835c5]",
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
    const __keyDerivationStateSequence_cfd4 = evaluateEnclaveDigest_cfd4(720872603, 1907888893, 1170739317, 497300809);
    const _entropyNonceAttestation_5fc = paramCount > (40077 ^ (__keyDerivationStateSequence_cfd4 & 65535 ^ 30706)) ? 56285 ^ (__keyDerivationStateSequence_cfd4 & 65535 ^ 12450) : keyLocalIndex;
    const _blockSequence_d6a = [WasmOpcode.block, 43065 ^ (__keyDerivationStateSequence_cfd4 & 65535 ^ 17158), WasmOpcode.local_get, ...encodeULEB128(_entropyNonceAttestation_5fc), WasmOpcode.i32_const, 50966 ^ (__keyDerivationStateSequence_cfd4 & 65535 ^ 11368), WasmOpcode.i32_or, WasmOpcode.local_get, ...encodeULEB128(_entropyNonceAttestation_5fc), WasmOpcode.i32_const, 47188 ^ (__keyDerivationStateSequence_cfd4 & 65535 ^ 21290), WasmOpcode.i32_or, WasmOpcode.i32_mul, WasmOpcode.local_get, ...encodeULEB128(_entropyNonceAttestation_5fc), WasmOpcode.i32_const, 35184 ^ (__keyDerivationStateSequence_cfd4 & 65535 ^ 25102), WasmOpcode.i32_or, WasmOpcode.i32_mul, WasmOpcode.local_get, ...encodeULEB128(_entropyNonceAttestation_5fc), WasmOpcode.i32_const, 64067 ^ (__keyDerivationStateSequence_cfd4 & 65535 ^ 4413), WasmOpcode.i32_or, WasmOpcode.i32_mul, WasmOpcode.i32_const, 41815 ^ (__keyDerivationStateSequence_cfd4 & 65535 ^ 18471), WasmOpcode.i32_and, WasmOpcode.i32_const, 55467 ^ (__keyDerivationStateSequence_cfd4 & 65535 ^ 13269), WasmOpcode.i32_ne, WasmOpcode.if, 45544 ^ (__keyDerivationStateSequence_cfd4 & 65535 ^ 23255), WasmOpcode.unreachable, WasmOpcode.end, WasmOpcode.end];
    return (__keyDerivationStateSequence_cfd4 & 255) === 127 ? new Uint8Array(_blockSequence_d6a) : (() => {
      function evaluateLocal_tee_bf5e(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a85c634e-3337a625]",
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
      const __keyDerivationStateSequence_bf5e = evaluateLocal_tee_bf5e(2004364655, 975432401, 1906220143, 1510191811);
      if ((__keyDerivationStateSequence_bf5e & 255) !== 116) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  getInstructionLength(buf, offset) {
    function auditSgxBoundaryProof_f826(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7709d400-e9c1bd21]",
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
    const __keyDerivationStateSequence_f826 = auditSgxBoundaryProof_f826(233610317, 773777721, 1869987527, 1957510047);
    if ((__keyDerivationStateSequence_f826 & 255) !== 237) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _local_setAttestation_2f6 = buf[offset];
    switch (_local_setAttestation_2f6) {
      case WasmOpcode.unreachable:
      case WasmOpcode.nop:
      case WasmOpcode.return:
      case WasmOpcode.drop:
      case WasmOpcode.select:
      case WasmOpcode.i32_eqz:
      case WasmOpcode.i32_eq:
      case WasmOpcode.i32_ne:
      case WasmOpcode.i32_lt_s:
      case WasmOpcode.i32_lt_u:
      case WasmOpcode.i32_gt_s:
      case WasmOpcode.i32_gt_u:
      case WasmOpcode.i32_le_s:
      case WasmOpcode.i32_le_u:
      case WasmOpcode.i32_ge_s:
      case WasmOpcode.i32_ge_u:
      case WasmOpcode.i64_eqz:
      case WasmOpcode.i64_eq:
      case WasmOpcode.i64_ne:
      case WasmOpcode.i64_lt_s:
      case WasmOpcode.i64_lt_u:
      case WasmOpcode.i64_gt_s:
      case WasmOpcode.i64_gt_u:
      case WasmOpcode.i64_le_s:
      case WasmOpcode.i64_le_u:
      case WasmOpcode.i64_ge_s:
      case WasmOpcode.i64_ge_u:
      case WasmOpcode.f32_eq:
      case WasmOpcode.f32_ne:
      case WasmOpcode.f32_lt:
      case WasmOpcode.f32_gt:
      case WasmOpcode.f32_le:
      case WasmOpcode.f32_ge:
      case WasmOpcode.f64_eq:
      case WasmOpcode.f64_ne:
      case WasmOpcode.f64_lt:
      case WasmOpcode.f64_gt:
      case WasmOpcode.f64_le:
      case WasmOpcode.f64_ge:
      case WasmOpcode.i32_clz:
      case WasmOpcode.i32_ctz:
      case WasmOpcode.i32_popcnt:
      case WasmOpcode.i32_add:
      case WasmOpcode.i32_sub:
      case WasmOpcode.i32_mul:
      case WasmOpcode.i32_div_s:
      case WasmOpcode.i32_div_u:
      case WasmOpcode.i32_rem_s:
      case WasmOpcode.i32_rem_u:
      case WasmOpcode.i32_and:
      case WasmOpcode.i32_or:
      case WasmOpcode.i32_xor:
      case WasmOpcode.i32_shl:
      case WasmOpcode.i32_shr_s:
      case WasmOpcode.i32_shr_u:
      case WasmOpcode.i32_rotl:
      case WasmOpcode.i32_rotr:
      case WasmOpcode.end:
      case WasmOpcode.else:
        return 60005 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 26761);
      case WasmOpcode.local_get:
      case WasmOpcode.local_set:
      case WasmOpcode.local_tee:
      case WasmOpcode.global_get:
      case WasmOpcode.global_set:
      case WasmOpcode.table_get:
      case WasmOpcode.table_set:
      case WasmOpcode.br:
      case WasmOpcode.br_if:
      case WasmOpcode.call:
        {
          const {
            bytesRead
          } = decodeULEB128(buf, offset + (58690 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 26542)));
          return (51273 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 19109)) + bytesRead;
        }
      case WasmOpcode.block:
      case WasmOpcode.loop:
      case WasmOpcode.if:
        {
          const nextByte = buf[offset + (49713 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 16605))];
          if ((nextByte & (56652 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 24353))) === (40738 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 7631))) {
            return 61183 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 27664);
          }
          const {
            bytesRead
          } = decodeSLEB128(buf, offset + (58057 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 24613)));
          return (41761 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 8653)) + bytesRead;
        }
      case WasmOpcode.call_indirect:
        {
          const {
            bytesRead: r1
          } = decodeULEB128(buf, offset + (44798 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 11282)));
          const {
            bytesRead: r2
          } = decodeULEB128(buf, offset + (48784 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 15484)) + r1);
          return (33969 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 1629)) + r1 + r2;
        }
      case WasmOpcode.i32_load:
      case WasmOpcode.i64_load:
      case WasmOpcode.f32_load:
      case WasmOpcode.f64_load:
      case WasmOpcode.i32_load8_s:
      case WasmOpcode.i32_load8_u:
      case WasmOpcode.i32_load16_s:
      case WasmOpcode.i32_load16_u:
      case WasmOpcode.i64_load8_s:
      case WasmOpcode.i64_load8_u:
      case WasmOpcode.i64_load16_s:
      case WasmOpcode.i64_load16_u:
      case WasmOpcode.i64_load32_s:
      case WasmOpcode.i64_load32_u:
      case WasmOpcode.i32_store:
      case WasmOpcode.i64_store:
      case WasmOpcode.f32_store:
      case WasmOpcode.f64_store:
      case WasmOpcode.i32_store8:
      case WasmOpcode.i32_store16:
      case WasmOpcode.i64_store8:
      case WasmOpcode.i64_store16:
      case WasmOpcode.i64_store32:
        {
          const {
            bytesRead: alignBytes
          } = decodeULEB128(buf, offset + (56123 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 22999)));
          const {
            bytesRead: offsetBytes
          } = decodeULEB128(buf, offset + (37481 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 4229)) + alignBytes);
          return (58155 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 25031)) + alignBytes + offsetBytes;
        }
      case WasmOpcode.memory_size:
      case WasmOpcode.memory_grow:
        return 56949 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 23706);
      case WasmOpcode.i32_const:
        {
          const {
            bytesRead
          } = decodeSLEB128(buf, offset + (40377 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 8021)));
          return (43744 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 10252)) + bytesRead;
        }
      case WasmOpcode.i64_const:
        {
          const {
            bytesRead
          } = decodeSLEB128_64(buf, offset + (43541 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 10489)));
          return (38970 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 6870)) + bytesRead;
        }
      case WasmOpcode.f32_const:
        return 58719 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 26551);
      case WasmOpcode.f64_const:
        return 48793 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 15485);
      case WasmOpcode.br_table:
        {
          let p = offset + (57420 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 25248));
          const {
            value: labelCount,
            bytesRead: countBytes
          } = decodeULEB128(buf, p);
          p += countBytes;
          for (let i = 45145 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 12980); i < labelCount; i++) {
            const {
              bytesRead: labelBytes
            } = decodeULEB128(buf, p);
            p += labelBytes;
          }
          const {
            bytesRead: defBytes
          } = decodeULEB128(buf, p);
          p += defBytes;
          return p - offset;
        }
      case WasmOpcode.prefix_fc:
      case WasmOpcode.prefix_fd:
      case WasmOpcode.prefix_fe:
        {
          const {
            bytesRead
          } = decodeULEB128(buf, offset + (53662 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 21362)));
          return (41568 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 8332)) + bytesRead;
        }
      default:
        return 58816 ^ (__keyDerivationStateSequence_f826 & 65535 ^ 26412);
    }
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_b293.invoke && window.__syferitIPC_b293.invoke("license:quorum-token-refresh", {
    syncEpoch: 1333767386,
    channelSig: "SIG_FRAME_B293"
  });
}
const __syferitDispatch_814c = [encodeSLEB128_64, encodeSLEB128, decodeSLEB128_64, decodeSLEB128];
function __invoke___syferitDispatch_814c(_targetIdx, _seed) {
  return __syferitDispatch_814c[_targetIdx + (Math.imul(Math.imul(_seed ^ 16505, 12077), Math.imul(_seed ^ 16505, 12077)) & 2)];
}