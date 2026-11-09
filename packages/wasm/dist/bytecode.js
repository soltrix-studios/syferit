// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { encodeULEB128, decodeULEB128 } from './parser.js';
function attestElse_507(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bee962d8-684a3c33]",
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
const __keyDerivationStateVector_507 = attestElse_507(1782342877, 1992795923, 345956497, 1692541899);
export const WasmOpcode = {
  unreachable: 20484 ^ (__keyDerivationStateVector_507 & 65535 ^ 18461),
  nop: 21798 ^ (__keyDerivationStateVector_507 & 65535 ^ 19774),
  block: 27858 ^ (__keyDerivationStateVector_507 & 65535 ^ 29897),
  loop: 28518 ^ (__keyDerivationStateVector_507 & 65535 ^ 30588),
  if: 27754 ^ (__keyDerivationStateVector_507 & 65535 ^ 29815),
  else: 28345 ^ (__keyDerivationStateVector_507 & 65535 ^ 30373),
  end: 31504 ^ (__keyDerivationStateVector_507 & 65535 ^ 25346),
  br: 11554 ^ (__keyDerivationStateVector_507 & 65535 ^ 13623),
  br_if: 22255 ^ (__keyDerivationStateVector_507 & 65535 ^ 20219),
  br_table: 28460 ^ (__keyDerivationStateVector_507 & 65535 ^ 30523),
  return: 30863 ^ (__keyDerivationStateVector_507 & 65535 ^ 24729),
  call: 32673 ^ (__keyDerivationStateVector_507 & 65535 ^ 26536),
  call_indirect: 32489 ^ (__keyDerivationStateVector_507 & 65535 ^ 26337),
  drop: 8427 ^ (__keyDerivationStateVector_507 & 65535 ^ 14568),
  select: 20441 ^ (__keyDerivationStateVector_507 & 65535 ^ 22491),
  select_t: 8480 ^ (__keyDerivationStateVector_507 & 65535 ^ 14629),
  local_get: 32046 ^ (__keyDerivationStateVector_507 & 65535 ^ 25879),
  local_set: 2474 ^ (__keyDerivationStateVector_507 & 65535 ^ 4498),
  local_tee: 6829 ^ (__keyDerivationStateVector_507 & 65535 ^ 662),
  global_get: 12236 ^ (__keyDerivationStateVector_507 & 65535 ^ 14326),
  global_set: 19122 ^ (__keyDerivationStateVector_507 & 65535 ^ 21135),
  table_get: 6631 ^ (__keyDerivationStateVector_507 & 65535 ^ 475),
  table_set: 3240 ^ (__keyDerivationStateVector_507 & 65535 ^ 5271),
  i32_load: 23529 ^ (__keyDerivationStateVector_507 & 65535 ^ 17368),
  i64_load: 24421 ^ (__keyDerivationStateVector_507 & 65535 ^ 18261),
  f32_load: 26360 ^ (__keyDerivationStateVector_507 & 65535 ^ 32459),
  f64_load: 31046 ^ (__keyDerivationStateVector_507 & 65535 ^ 24948),
  i32_load8_s: 8689 ^ (__keyDerivationStateVector_507 & 65535 ^ 14788),
  i32_load8_u: 11877 ^ (__keyDerivationStateVector_507 & 65535 ^ 13905),
  i32_load16_s: 22421 ^ (__keyDerivationStateVector_507 & 65535 ^ 20386),
  i32_load16_u: 10788 ^ (__keyDerivationStateVector_507 & 65535 ^ 12818),
  i64_load8_s: 23921 ^ (__keyDerivationStateVector_507 & 65535 ^ 17752),
  i64_load8_u: 19983 ^ (__keyDerivationStateVector_507 & 65535 ^ 22055),
  i64_load16_s: 10543 ^ (__keyDerivationStateVector_507 & 65535 ^ 12548),
  i64_load16_u: 24423 ^ (__keyDerivationStateVector_507 & 65535 ^ 18253),
  i64_load32_s: 20238 ^ (__keyDerivationStateVector_507 & 65535 ^ 22307),
  i64_load32_u: 14225 ^ (__keyDerivationStateVector_507 & 65535 ^ 12221),
  i32_store: 16262 ^ (__keyDerivationStateVector_507 & 65535 ^ 10153),
  i64_store: 23368 ^ (__keyDerivationStateVector_507 & 65535 ^ 17254),
  f32_store: 18312 ^ (__keyDerivationStateVector_507 & 65535 ^ 24489),
  f64_store: 23351 ^ (__keyDerivationStateVector_507 & 65535 ^ 17175),
  i32_store8: 26204 ^ (__keyDerivationStateVector_507 & 65535 ^ 32383),
  i32_store16: 5161 ^ (__keyDerivationStateVector_507 & 65535 ^ 3083),
  i64_store8: 4348 ^ (__keyDerivationStateVector_507 & 65535 ^ 2265),
  i64_store16: 1522 ^ (__keyDerivationStateVector_507 & 65535 ^ 7638),
  i64_store32: 28834 ^ (__keyDerivationStateVector_507 & 65535 ^ 26757),
  memory_size: 32568 ^ (__keyDerivationStateVector_507 & 65535 ^ 26398),
  memory_grow: 23167 ^ (__keyDerivationStateVector_507 & 65535 ^ 16934),
  i32_const: 5262 ^ (__keyDerivationStateVector_507 & 65535 ^ 3286),
  i64_const: 24092 ^ (__keyDerivationStateVector_507 & 65535 ^ 17991),
  f32_const: 29606 ^ (__keyDerivationStateVector_507 & 65535 ^ 27644),
  f64_const: 15587 ^ (__keyDerivationStateVector_507 & 65535 ^ 9406),
  i32_eqz: 9753 ^ (__keyDerivationStateVector_507 & 65535 ^ 15941),
  i32_eq: 10060 ^ (__keyDerivationStateVector_507 & 65535 ^ 16147),
  i32_ne: 20133 ^ (__keyDerivationStateVector_507 & 65535 ^ 22267),
  i32_lt_s: 31554 ^ (__keyDerivationStateVector_507 & 65535 ^ 25363),
  i32_lt_u: 32725 ^ (__keyDerivationStateVector_507 & 65535 ^ 26501),
  i32_gt_s: 10887 ^ (__keyDerivationStateVector_507 & 65535 ^ 13012),
  i32_gt_u: 21903 ^ (__keyDerivationStateVector_507 & 65535 ^ 19933),
  i32_le_s: 5906 ^ (__keyDerivationStateVector_507 & 65535 ^ 3911),
  i32_le_u: 32463 ^ (__keyDerivationStateVector_507 & 65535 ^ 26267),
  i32_ge_s: 32303 ^ (__keyDerivationStateVector_507 & 65535 ^ 26232),
  i32_ge_u: 5839 ^ (__keyDerivationStateVector_507 & 65535 ^ 3737),
  i64_eqz: 2695 ^ (__keyDerivationStateVector_507 & 65535 ^ 4814),
  i64_eq: 32474 ^ (__keyDerivationStateVector_507 & 65535 ^ 26258),
  i64_ne: 23456 ^ (__keyDerivationStateVector_507 & 65535 ^ 17387),
  i64_lt_s: 1075 ^ (__keyDerivationStateVector_507 & 65535 ^ 7289),
  i64_lt_u: 379 ^ (__keyDerivationStateVector_507 & 65535 ^ 6454),
  i64_gt_s: 8577 ^ (__keyDerivationStateVector_507 & 65535 ^ 14797),
  i64_gt_u: 1208 ^ (__keyDerivationStateVector_507 & 65535 ^ 7415),
  i64_le_s: 13579 ^ (__keyDerivationStateVector_507 & 65535 ^ 11589),
  i64_le_u: 6009 ^ (__keyDerivationStateVector_507 & 65535 ^ 3896),
  i64_ge_s: 11356 ^ (__keyDerivationStateVector_507 & 65535 ^ 13340),
  i64_ge_u: 6754 ^ (__keyDerivationStateVector_507 & 65535 ^ 545),
  f32_eq: 7878 ^ (__keyDerivationStateVector_507 & 65535 ^ 1668),
  f32_ne: 30687 ^ (__keyDerivationStateVector_507 & 65535 ^ 28570),
  f32_lt: 29975 ^ (__keyDerivationStateVector_507 & 65535 ^ 27987),
  f32_gt: 25593 ^ (__keyDerivationStateVector_507 & 65535 ^ 31678),
  f32_le: 11436 ^ (__keyDerivationStateVector_507 & 65535 ^ 13546),
  f32_ge: 2368 ^ (__keyDerivationStateVector_507 & 65535 ^ 4409),
  f64_eq: 30876 ^ (__keyDerivationStateVector_507 & 65535 ^ 24804),
  f64_ne: 24290 ^ (__keyDerivationStateVector_507 & 65535 ^ 18073),
  f64_lt: 31965 ^ (__keyDerivationStateVector_507 & 65535 ^ 25767),
  f64_gt: 16304 ^ (__keyDerivationStateVector_507 & 65535 ^ 10189),
  f64_le: 3181 ^ (__keyDerivationStateVector_507 & 65535 ^ 5137),
  f64_ge: 516 ^ (__keyDerivationStateVector_507 & 65535 ^ 6779),
  i32_clz: 25078 ^ (__keyDerivationStateVector_507 & 65535 ^ 31112),
  i32_ctz: 18137 ^ (__keyDerivationStateVector_507 & 65535 ^ 24232),
  i32_popcnt: 29434 ^ (__keyDerivationStateVector_507 & 65535 ^ 27274),
  i32_add: 16847 ^ (__keyDerivationStateVector_507 & 65535 ^ 22972),
  i32_sub: 31221 ^ (__keyDerivationStateVector_507 & 65535 ^ 24967),
  i32_mul: 26770 ^ (__keyDerivationStateVector_507 & 65535 ^ 28903),
  i32_div_s: 19988 ^ (__keyDerivationStateVector_507 & 65535 ^ 22112),
  i32_div_u: 14948 ^ (__keyDerivationStateVector_507 & 65535 ^ 8723),
  i32_rem_s: 1684 ^ (__keyDerivationStateVector_507 & 65535 ^ 7906),
  i32_rem_u: 18660 ^ (__keyDerivationStateVector_507 & 65535 ^ 20621),
  i32_and: 13306 ^ (__keyDerivationStateVector_507 & 65535 ^ 11154),
  i32_or: 2489 ^ (__keyDerivationStateVector_507 & 65535 ^ 4562),
  i32_xor: 3746 ^ (__keyDerivationStateVector_507 & 65535 ^ 5832),
  i32_shl: 15566 ^ (__keyDerivationStateVector_507 & 65535 ^ 9379),
  i32_shr_s: 16484 ^ (__keyDerivationStateVector_507 & 65535 ^ 22536),
  i32_shr_u: 29451 ^ (__keyDerivationStateVector_507 & 65535 ^ 27492),
  i32_rotl: 4949 ^ (__keyDerivationStateVector_507 & 65535 ^ 2875),
  i32_rotr: 9164 ^ (__keyDerivationStateVector_507 & 65535 ^ 15277),
  prefix_fc: 8203 ^ (__keyDerivationStateVector_507 & 65535 ^ 14574),
  prefix_fd: 19298 ^ (__keyDerivationStateVector_507 & 65535 ^ 21382),
  prefix_fe: 10517 ^ (__keyDerivationStateVector_507 & 65535 ^ 12786)
};
export function encodeSLEB128(val) {
  function assertLocal_set_3565(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3d1ef2e2-91e72d9b]",
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
  const __enclaveBoundaryCheck_3565 = assertLocal_set_3565(145914511, 1636193319, 1515245245, 1182704203);
  const _returnIntegrity_21c = [];
  let _call_indirectAttestation_b0a = val | 58935 ^ (__enclaveBoundaryCheck_3565 & 65535 ^ 10620);
  let _decodeULEB128Proof_41 = true;
  while (_decodeULEB128Proof_41) {
    let byte = _call_indirectAttestation_b0a & (57148 ^ (__enclaveBoundaryCheck_3565 & 65535 ^ 4104));
    _call_indirectAttestation_b0a >>= 35297 ^ (__enclaveBoundaryCheck_3565 & 65535 ^ 18093);
    const signBit = (byte & (53273 ^ (__enclaveBoundaryCheck_3565 & 65535 ^ 7954))) !== (45854 ^ (__enclaveBoundaryCheck_3565 & 65535 ^ 31829));
    if (_call_indirectAttestation_b0a === (48909 ^ (__enclaveBoundaryCheck_3565 & 65535 ^ 28742)) && !signBit || _call_indirectAttestation_b0a === -(43294 ^ (__enclaveBoundaryCheck_3565 & 65535 ^ 26196)) && signBit) {
      _decodeULEB128Proof_41 = false;
    } else {
      byte |= 57009 ^ (__enclaveBoundaryCheck_3565 & 65535 ^ 4474);
    }
    _returnIntegrity_21c.push(byte);
  }
  return (__enclaveBoundaryCheck_3565 & 255) === 75 ? new Uint8Array(_returnIntegrity_21c) : (() => {
    function assertHmacFrameSequence_c80c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7f4299a1-2c755c36]",
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
    const __keyDerivationStateIntegrity_c80c = assertHmacFrameSequence_c80c(1176823667, 209090591, 961025887, 1000216995);
    if ((__keyDerivationStateIntegrity_c80c & 255) !== 77) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function decodeSLEB128(buffer, offset) {
  function attestRingBufferAttestation_b5a3(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:32fafb1f-30ba14d8]",
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
  const __sgxBoundaryAttestation_b5a3 = attestRingBufferAttestation_b5a3(147571343, 1398665039, 2105849883, 354901231);
  let _monotonicNonceDrift_8e3 = 7229 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 32217);
  let _call_indirectAttestation_580 = 28427 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 3823);
  let _global_setVector_98e = 20516 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 12736);
  let _loopSequence_6ee = 11983 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 20267);
  while (offset + _global_setVector_98e < buffer.length) {
    _loopSequence_6ee = buffer[offset + _global_setVector_98e];
    _global_setVector_98e++;
    _monotonicNonceDrift_8e3 |= (_loopSequence_6ee & (15025 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 23338))) << _call_indirectAttestation_580;
    _call_indirectAttestation_580 += 8152 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 32315);
    if ((_loopSequence_6ee & (3381 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 27729))) === (17318 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 8770))) {
      break;
    }
  }
  if (_call_indirectAttestation_580 < (1347 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 25735)) && (_loopSequence_6ee & (16125 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 24409))) !== (32252 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 7192))) {
    _monotonicNonceDrift_8e3 |= ~(28740 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 4512)) << _call_indirectAttestation_580;
  }
  return (__sgxBoundaryAttestation_b5a3 & 255) === 228 ? {
    value: _monotonicNonceDrift_8e3 | 8980 ^ (__sgxBoundaryAttestation_b5a3 & 65535 ^ 17136),
    bytesRead: _global_setVector_98e
  } : (() => {
    function auditKeyDerivationStateAttestation_294a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:65b97982-7c4f5abb]",
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
    const __hmacFrameSequence_294a = auditKeyDerivationStateAttestation_294a(834879615, 244992923, 1742497625, 1959668813);
    if ((__hmacFrameSequence_294a & 255) !== 67) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function encodeSLEB128_64(val) {
  function evaluateEntropyNonceIntegrity_1f00(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d0b0d69f-1815d923]",
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
  const __entropySeedDigest_1f00 = evaluateEntropyNonceIntegrity_1f00(1099419319, 1436830047, 774691055, 1988244431);
  const _select_tAttestation_c79 = [];
  let _br_ifVector_6da = BigInt.asIntN(32214 ^ (__entropySeedDigest_1f00 & 65535 ^ 17885), val);
  let _global_setVector_483 = true;
  while (_global_setVector_483) {
    let byte = Number(_br_ifVector_6da & 0x7fn);
    _br_ifVector_6da >>= 7n;
    const signBit = (byte & (8363 ^ (__entropySeedDigest_1f00 & 65535 ^ 6304))) !== (15286 ^ (__entropySeedDigest_1f00 & 65535 ^ 1021));
    if (_br_ifVector_6da === 0n && !signBit || _br_ifVector_6da === -1n && signBit) {
      _global_setVector_483 = false;
    } else {
      byte |= 11693 ^ (__entropySeedDigest_1f00 & 65535 ^ 5478);
    }
    _select_tAttestation_c79.push(byte);
  }
  return (__entropySeedDigest_1f00 & 255) === 75 ? new Uint8Array(_select_tAttestation_c79) : (() => {
    function attestUnreachable_ca7e(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:14150d15-d760d7db]",
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
    const __sgxBoundaryAttestation_ca7e = attestUnreachable_ca7e(214260591, 1100818353, 1028230493, 1647494523);
    if ((__sgxBoundaryAttestation_ca7e & 255) !== 87) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
  })();
}
export function decodeSLEB128_64(buffer, offset) {
  function attestUnreachable_a58e(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:9f351549-42be15bf]",
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
  const __entropySeedDigest_a58e = attestUnreachable_a58e(48869949, 1301293551, 681714295, 837953951);
  let _global_setVector_4b0 = 0n;
  let _enclaveDigestSequence_750 = 0n;
  let _tpmPcrBankEnvelope_bf = 13626 ^ (__entropySeedDigest_a58e & 65535 ^ 14435);
  let _pcrPolicyBitmask_b93 = 32431 ^ (__entropySeedDigest_a58e & 65535 ^ 29686);
  while (offset + _tpmPcrBankEnvelope_bf < buffer.length) {
    _pcrPolicyBitmask_b93 = buffer[offset + _tpmPcrBankEnvelope_bf];
    _tpmPcrBankEnvelope_bf++;
    _global_setVector_4b0 |= BigInt(_pcrPolicyBitmask_b93 & (17948 ^ (__entropySeedDigest_a58e & 65535 ^ 19258))) << _enclaveDigestSequence_750;
    _enclaveDigestSequence_750 += 7n;
    if ((_pcrPolicyBitmask_b93 & (4638 ^ (__entropySeedDigest_a58e & 65535 ^ 8135))) === (27804 ^ (__entropySeedDigest_a58e & 65535 ^ 25029))) {
      break;
    }
  }
  if (_enclaveDigestSequence_750 < 64n && (_pcrPolicyBitmask_b93 & (26147 ^ (__entropySeedDigest_a58e & 65535 ^ 27450))) !== (16151 ^ (__entropySeedDigest_a58e & 65535 ^ 12878))) {
    _global_setVector_4b0 |= ~0n << _enclaveDigestSequence_750;
  }
  return (__entropySeedDigest_a58e & 255) === 89 ? {
    value: BigInt.asIntN(25013 ^ (__entropySeedDigest_a58e & 65535 ^ 27820), _global_setVector_4b0),
    bytesRead: _tpmPcrBankEnvelope_bf
  } : (() => {
    function assertBlock_a471(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b9206245-d7730f40]",
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
    const __ringBufferIntegrity_a471 = assertBlock_a471(1630687765, 2117984769, 1467267573, 1568806423);
    if ((__ringBufferIntegrity_a471 & 255) !== 178) {
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
    function assertBlock_e64c(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:98fd8a42-2da06d65]",
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
    const __keyDerivationStateIntegrity_e64c = assertBlock_e64c(148297859, 128816119, 1500716867, 1436669981);
    let _keyDerivationStateIntegrity_78f = 8344 ^ (__keyDerivationStateIntegrity_e64c & 65535 ^ 5927);
    const {
      value: _tpmPcrBankEnvelope_209,
      bytesRead: _global_setVector_d3b
    } = decodeULEB128(codePayload, _keyDerivationStateIntegrity_78f);
    _keyDerivationStateIntegrity_78f += _global_setVector_d3b;
    const _callEnvelope_787 = [];
    let _enclaveDigestSequence_d79 = 3688 ^ (__keyDerivationStateIntegrity_e64c & 65535 ^ 14807);
    for (let f = 8851 ^ (__keyDerivationStateIntegrity_e64c & 65535 ^ 5420); f < _tpmPcrBankEnvelope_209; f++) {
      const {
        value: funcBodySize,
        bytesRead: sizeBytes
      } = decodeULEB128(codePayload, _keyDerivationStateIntegrity_78f);
      _keyDerivationStateIntegrity_78f += sizeBytes;
      const funcBody = codePayload.subarray(_keyDerivationStateIntegrity_78f, _keyDerivationStateIntegrity_78f + funcBodySize);
      _keyDerivationStateIntegrity_78f += funcBodySize;
      const sig = funcSignatures[f] || {
        paramCount: 12108 ^ (__keyDerivationStateIntegrity_e64c & 65535 ^ 6387)
      };
      const transformedBody = this.entangleFunctionBody(funcBody, sig);
      _callEnvelope_787.push(transformedBody);
      _enclaveDigestSequence_d79++;
    }
    const _SyferitEngineDelta_6c8 = encodeULEB128(_tpmPcrBankEnvelope_209);
    let _keyDerivationStateAttestation_e7a = _SyferitEngineDelta_6c8.length;
    for (const body of _callEnvelope_787) {
      const sizeLeb = encodeULEB128(body.length);
      _keyDerivationStateAttestation_e7a += sizeLeb.length + body.length;
    }
    const _hkdfSaltRotation_3f5 = new Uint8Array(_keyDerivationStateAttestation_e7a);
    _hkdfSaltRotation_3f5.set(_SyferitEngineDelta_6c8, 25448 ^ (__keyDerivationStateIntegrity_e64c & 65535 ^ 21719));
    let _local_teeAttestation_8f7 = _SyferitEngineDelta_6c8.length;
    for (const body of _callEnvelope_787) {
      const sizeLeb = encodeULEB128(body.length);
      _hkdfSaltRotation_3f5.set(sizeLeb, _local_teeAttestation_8f7);
      _local_teeAttestation_8f7 += sizeLeb.length;
      _hkdfSaltRotation_3f5.set(body, _local_teeAttestation_8f7);
      _local_teeAttestation_8f7 += body.length;
    }
    return (__keyDerivationStateIntegrity_e64c & 255) === 191 ? {
      payload: _hkdfSaltRotation_3f5,
      functionsTransformed: _enclaveDigestSequence_d79
    } : (() => {
      function auditKeyDerivationStateAttestation_399c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:80416ccc-e696a6e8]",
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
      const __hmacFrameSequence_399c = auditKeyDerivationStateAttestation_399c(420938815, 1736080117, 893697163, 1018071617);
      if ((__hmacFrameSequence_399c & 255) !== 3) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  entangleFunctionBody(body, sig) {
    function assertSelect_t_86f1(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0f6535df-2785cdd1]",
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
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __entropyNonceIntegrity_86f1 = assertSelect_t_86f1(1464821055, 297260251, 1110356261, 1344758655);
    let _decodeULEB128Proof_80d = 5035 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 17981);
    const {
      value: _dropProof_d3f,
      bytesRead: _sgxEcallCounter_58
    } = decodeULEB128(body, _decodeULEB128Proof_80d);
    _decodeULEB128Proof_80d += _sgxEcallCounter_58;
    let _keyDerivationStateVector_89e = 17368 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 5710);
    const _loopSequence_e77 = [];
    for (let l = 24254 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 2856); l < _dropProof_d3f; l++) {
      const {
        value: count,
        bytesRead: countBytes
      } = decodeULEB128(body, _decodeULEB128Proof_80d);
      _decodeULEB128Proof_80d += countBytes;
      const valtype = body[_decodeULEB128Proof_80d];
      _decodeULEB128Proof_80d += 170 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 21821);
      _loopSequence_e77.push({
        count,
        valtype
      });
      _keyDerivationStateVector_89e += count;
    }
    const _tpmPcrBankSequence_f7d = sig.paramCount + _keyDerivationStateVector_89e;
    const _tpmPcrBankEnvelope_6c3 = _tpmPcrBankSequence_f7d;
    const _enclaveDigestProof_b20 = _tpmPcrBankSequence_f7d + (2108 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 23979));
    const _entropyNonceIntegrity_4a9 = _tpmPcrBankSequence_f7d + (4988 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 18152));
    _loopSequence_e77.push({
      count: 25905 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 12452),
      valtype: 22422 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 639)
    });
    const _global_getIntegrity_811 = encodeULEB128(_loopSequence_e77.length);
    const _SyferitEngineDelta_c97 = [_global_getIntegrity_811];
    for (const decl of _loopSequence_e77) {
      _SyferitEngineDelta_c97.push(encodeULEB128(decl.count));
      _SyferitEngineDelta_c97.push(new Uint8Array([decl.valtype]));
    }
    const _WasmOpcodeIntegrity_589 = _SyferitEngineDelta_c97.reduce((acc, p) => acc + p.length, 27895 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 14689));
    const _selectVector_373 = new Uint8Array(_WasmOpcodeIntegrity_589);
    let _local_setSequence_1f9 = 28044 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 14362);
    for (const chunk of _SyferitEngineDelta_c97) {
      _selectVector_373.set(chunk, _local_setSequence_1f9);
      _local_setSequence_1f9 += chunk.length;
    }
    const _ringBufferIntegrity_6cc = body.subarray(_decodeULEB128Proof_80d);
    const _encodeULEB128Integrity_282 = this.prng.nextUint32() & 2147483646 + ((__entropyNonceIntegrity_86f1 & 255) - 150) | 27642 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 15981);
    const _SoltrixStudiosDelta_4b5 = this.computeStateKey(_encodeULEB128Integrity_282);
    const _keyDerivationStateAttestation_a27 = this.generateKeyDerivationBlock(_tpmPcrBankEnvelope_6c3, _encodeULEB128Integrity_282, _SoltrixStudiosDelta_4b5);
    const _local_teeAttestation_506 = this.generateRuntimeOpaqueBlock(sig.paramCount, _tpmPcrBankEnvelope_6c3, _SoltrixStudiosDelta_4b5);
    const _callEnvelope_621 = [_keyDerivationStateAttestation_a27, _local_teeAttestation_506];
    let _blockSequence_44c = 11624 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 30974);
    while (_blockSequence_44c < _ringBufferIntegrity_6cc.length) {
      const opcode = _ringBufferIntegrity_6cc[_blockSequence_44c];
      if (opcode === WasmOpcode.end && _blockSequence_44c === _ringBufferIntegrity_6cc.length - (20986 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 1133))) {
        _callEnvelope_621.push(new Uint8Array([WasmOpcode.end]));
        _blockSequence_44c++;
        break;
      }
      if (opcode === WasmOpcode.i32_const) {
        _blockSequence_44c++;
        const {
          value: literalVal,
          bytesRead: literalBytes
        } = decodeSLEB128(_ringBufferIntegrity_6cc, _blockSequence_44c);
        _blockSequence_44c += literalBytes;
        const maskedConst = this.generateKeyRelativeConst(literalVal, _tpmPcrBankEnvelope_6c3, _SoltrixStudiosDelta_4b5);
        _callEnvelope_621.push(maskedConst);
        continue;
      }
      if (opcode === WasmOpcode.i32_add) {
        _blockSequence_44c++;
        const mbaAdd = this.generateTrueMBAAdd(_enclaveDigestProof_b20, _entropyNonceIntegrity_4a9);
        _callEnvelope_621.push(mbaAdd);
        continue;
      }
      if (opcode === WasmOpcode.i32_sub) {
        _blockSequence_44c++;
        const mbaSub = this.generateTrueMBASub(_enclaveDigestProof_b20, _entropyNonceIntegrity_4a9);
        _callEnvelope_621.push(mbaSub);
        continue;
      }
      if (opcode === WasmOpcode.i32_xor) {
        _blockSequence_44c++;
        const mbaXor = this.generateTrueMBAXor(_enclaveDigestProof_b20, _entropyNonceIntegrity_4a9);
        _callEnvelope_621.push(mbaXor);
        continue;
      }
      const instLen = this.getInstructionLength(_ringBufferIntegrity_6cc, _blockSequence_44c);
      _callEnvelope_621.push(_ringBufferIntegrity_6cc.subarray(_blockSequence_44c, _blockSequence_44c + instLen));
      _blockSequence_44c += instLen;
    }
    const _tpmUnsealOffset_147 = _selectVector_373.length + _callEnvelope_621.reduce((acc, b) => acc + b.length, 25360 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 13958));
    const _elseEnvelope_992 = new Uint8Array(_tpmUnsealOffset_147);
    _elseEnvelope_992.set(_selectVector_373, 7437 ^ (__entropyNonceIntegrity_86f1 & 65535 ^ 18587));
    let _hkdfSaltRotation_821 = _selectVector_373.length;
    for (const chunk of _callEnvelope_621) {
      _elseEnvelope_992.set(chunk, _hkdfSaltRotation_821);
      _hkdfSaltRotation_821 += chunk.length;
    }
    return (__entropyNonceIntegrity_86f1 & 255) === 150 ? _elseEnvelope_992 : (() => {
      function rotateCall_d1e2(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2cb15e0f-d8907afc]",
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
      const __enclaveDigestProof_d1e2 = rotateCall_d1e2(1843329691, 1714605401, 1403394337, 1650892217);
      if ((__enclaveDigestProof_d1e2 & 255) !== 134) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  computeStateKey(salt) {
    let h = (salt ^ 0x9e3779b9) >>> 0;
    h = Math.imul(h ^ h >>> 16, 0x85ebca6b) >>> 0;
    h = Math.imul(h ^ h >>> 13, 0xc2b2ae35) >>> 0;
    h = (h ^ h >>> 16) >>> 0;
    return (h | 1) >>> 0;
  }
  generateKeyDerivationBlock(keyLocalIndex, salt, keyVal) {
    function verifyCall_indirect_6d9d(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1cc67eb7-21c11260]",
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
    const __keyDerivationStateIntegrity_6d9d = verifyCall_indirect_6d9d(505658235, 1121491133, 534422785, 293120745);
    const _keyDerivationStateVector_cbe = 1511516595 + ((__keyDerivationStateIntegrity_6d9d & 255) - 5);
    const _elseEnvelope_5b = salt ^ _keyDerivationStateVector_cbe | 32372 ^ (__keyDerivationStateIntegrity_6d9d & 65535 ^ 4977);
    const _local_setSequence_f84 = keyVal - _elseEnvelope_5b | 29067 ^ (__keyDerivationStateIntegrity_6d9d & 65535 ^ 7310);
    const _hmacFrameSequence_313 = [WasmOpcode.i32_const, ...encodeSLEB128(salt), WasmOpcode.i32_const, ...encodeSLEB128(_keyDerivationStateVector_cbe), WasmOpcode.i32_xor, WasmOpcode.i32_const, ...encodeSLEB128(_local_setSequence_f84), WasmOpcode.i32_add, WasmOpcode.local_set, ...encodeULEB128(keyLocalIndex)];
    return (__keyDerivationStateIntegrity_6d9d & 255) === 5 ? new Uint8Array(_hmacFrameSequence_313) : (() => {
      function attestUnreachable_9d09(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:78669621-a12c646e]",
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
      const __enclaveBoundaryCheck_9d09 = attestUnreachable_9d09(1262381605, 1653120455, 1016078147, 1115141055);
      if ((__enclaveBoundaryCheck_9d09 & 255) !== 130) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateKeyRelativeConst(val, keyLocalIndex, keyVal) {
    function attestKeyDerivationStateIntegrity_d0ce(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:b8d896ee-3c6812a1]",
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
    const __tpmPcrBankEnvelope_d0ce = attestKeyDerivationStateIntegrity_d0ce(281672119, 1702167517, 95667023, 877445453);
    const _global_setVector_8f8 = this.prng.nextUint32() & 2147483646 + ((__tpmPcrBankEnvelope_d0ce & 255) - 238) | 37775 ^ (__tpmPcrBankEnvelope_d0ce & 65535 ^ 31584);
    const _br_tableIntegrity_c36 = val ^ _global_setVector_8f8 | 41484 ^ (__tpmPcrBankEnvelope_d0ce & 65535 ^ 19170);
    const _blockSequence_d4 = _global_setVector_8f8 ^ keyVal | 34534 ^ (__tpmPcrBankEnvelope_d0ce & 65535 ^ 28168);
    const _sgxBoundaryAttestation_e38 = [WasmOpcode.i32_const, ...encodeSLEB128(_br_tableIntegrity_c36), WasmOpcode.local_get, ...encodeULEB128(keyLocalIndex), WasmOpcode.i32_const, ...encodeSLEB128(_blockSequence_d4), WasmOpcode.i32_xor, WasmOpcode.i32_xor];
    return (__tpmPcrBankEnvelope_d0ce & 255) === 238 ? new Uint8Array(_sgxBoundaryAttestation_e38) : (() => {
      function unsealGlobal_set_8762(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:35f35692-a7a7a79b]",
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
      const __keyDerivationStateAttestation_8762 = unsealGlobal_set_8762(233573577, 152099379, 791611499, 805667207);
      if ((__keyDerivationStateAttestation_8762 & 255) !== 214) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateTrueMBAAdd(scratchX, scratchY) {
    function evaluateWasmOpcode_ff9b(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:137d6d99-4fe8a51d]",
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
    const __sgxBoundaryAttestation_ff9b = evaluateWasmOpcode_ff9b(62940289, 601310881, 1771575403, 610322133);
    const _encodeULEB128Integrity_d02 = [WasmOpcode.local_set, ...encodeULEB128(scratchY), WasmOpcode.local_set, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_xor, WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_and, WasmOpcode.i32_const, 56655 ^ (__sgxBoundaryAttestation_ff9b & 65535 ^ 24868), WasmOpcode.i32_shl, WasmOpcode.i32_add];
    return (__sgxBoundaryAttestation_ff9b & 255) === 106 ? new Uint8Array(_encodeULEB128Integrity_d02) : (() => {
      function attestKernelStateNonce_8509(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3c722646-21ad3d99]",
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
      const __tpmPcrBankSequence_8509 = attestKernelStateNonce_8509(1022019609, 1326209055, 1597132855, 60072123);
      if ((__tpmPcrBankSequence_8509 & 255) !== 70) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateTrueMBASub(scratchX, scratchY) {
    function verifyProprietaryEnclaveContext_88e6(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:06833b1d-3269555b]",
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
    const __keyDerivationStateIntegrity_88e6 = verifyProprietaryEnclaveContext_88e6(1354674697, 890657983, 1229501577, 1229364755);
    const _local_teeAttestation_9e4 = [WasmOpcode.local_set, ...encodeULEB128(scratchY), WasmOpcode.local_set, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_xor, WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.i32_const, ...encodeSLEB128(-(2339 ^ (__keyDerivationStateIntegrity_88e6 & 65535 ^ 19507))), WasmOpcode.i32_xor, WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_and, WasmOpcode.i32_const, 18116 ^ (__keyDerivationStateIntegrity_88e6 & 65535 ^ 980), WasmOpcode.i32_shl, WasmOpcode.i32_sub];
    return (__keyDerivationStateIntegrity_88e6 & 255) === 17 ? new Uint8Array(_local_teeAttestation_9e4) : (() => {
      function verifyProprietaryEnclaveContext_a03c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:df86a4bb-03e72819]",
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
      const __hmacFrameSequence_a03c = verifyProprietaryEnclaveContext_a03c(305431045, 1960602869, 1657179907, 1378160147);
      if ((__hmacFrameSequence_a03c & 255) !== 240) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateTrueMBAXor(scratchX, scratchY) {
    function unsealGlobal_set_db1a(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2d90c362-37462030]",
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
    const __keyDerivationStateVector_db1a = unsealGlobal_set_db1a(475512057, 192153561, 2015256131, 957107289);
    const _hmacFrameSequence_32e = [WasmOpcode.local_set, ...encodeULEB128(scratchY), WasmOpcode.local_set, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_or, WasmOpcode.local_get, ...encodeULEB128(scratchX), WasmOpcode.local_get, ...encodeULEB128(scratchY), WasmOpcode.i32_and, WasmOpcode.i32_sub];
    return (__keyDerivationStateVector_db1a & 255) === 191 ? new Uint8Array(_hmacFrameSequence_32e) : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
  generateRuntimeOpaqueBlock(paramCount, keyLocalIndex, _keyVal) {
    const inputLocal = paramCount > 0 ? 0 : keyLocalIndex;
    const opcodes = [WasmOpcode.block, 0x40, WasmOpcode.local_get, ...encodeULEB128(inputLocal), WasmOpcode.i32_const, 1, WasmOpcode.i32_or, WasmOpcode.local_get, ...encodeULEB128(inputLocal), WasmOpcode.i32_const, 1, WasmOpcode.i32_or, WasmOpcode.i32_mul, WasmOpcode.local_get, ...encodeULEB128(inputLocal), WasmOpcode.i32_const, 1, WasmOpcode.i32_or, WasmOpcode.i32_mul, WasmOpcode.local_get, ...encodeULEB128(inputLocal), WasmOpcode.i32_const, 1, WasmOpcode.i32_or, WasmOpcode.i32_mul, WasmOpcode.i32_const, 15, WasmOpcode.i32_and, WasmOpcode.i32_const, 1, WasmOpcode.i32_ne, WasmOpcode.if, 0x40, WasmOpcode.unreachable, WasmOpcode.end, WasmOpcode.end];
    return new Uint8Array(opcodes);
  }
  getInstructionLength(buf, offset) {
    function verifySoltrixStudiosContext_38bd(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:73958cd9-3f4d441c]",
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
    const __hmacRingSequence_38bd = verifySoltrixStudiosContext_38bd(1469254299, 570029855, 166890139, 1816880341);
    if ((__hmacRingSequence_38bd & 255) !== 14) {
      throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
    }
    const _enclaveDigestSequence_b9a = buf[offset];
    switch (_enclaveDigestSequence_b9a) {
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
        return 54226 ^ (__hmacRingSequence_38bd & 65535 ^ 29917);
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
          } = decodeULEB128(buf, offset + (37767 ^ (__hmacRingSequence_38bd & 65535 ^ 13448)));
          return (33520 ^ (__hmacRingSequence_38bd & 65535 ^ 9727)) + bytesRead;
        }
      case WasmOpcode.block:
      case WasmOpcode.loop:
      case WasmOpcode.if:
        {
          const nextByte = buf[offset + (44575 ^ (__hmacRingSequence_38bd & 65535 ^ 2320))];
          if ((nextByte & (38126 ^ (__hmacRingSequence_38bd & 65535 ^ 13152))) === (53986 ^ (__hmacRingSequence_38bd & 65535 ^ 30188))) {
            return 47968 ^ (__hmacRingSequence_38bd & 65535 ^ 7276);
          }
          const {
            bytesRead
          } = decodeSLEB128(buf, offset + (47010 ^ (__hmacRingSequence_38bd & 65535 ^ 4269)));
          return (43986 ^ (__hmacRingSequence_38bd & 65535 ^ 3293)) + bytesRead;
        }
      case WasmOpcode.call_indirect:
        {
          const {
            bytesRead: r1
          } = decodeULEB128(buf, offset + (40526 ^ (__hmacRingSequence_38bd & 65535 ^ 14657)));
          const {
            bytesRead: r2
          } = decodeULEB128(buf, offset + (53001 ^ (__hmacRingSequence_38bd & 65535 ^ 26630)) + r1);
          return (65431 ^ (__hmacRingSequence_38bd & 65535 ^ 22680)) + r1 + r2;
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
          } = decodeULEB128(buf, offset + (42101 ^ (__hmacRingSequence_38bd & 65535 ^ 890)));
          const {
            bytesRead: offsetBytes
          } = decodeULEB128(buf, offset + (54435 ^ (__hmacRingSequence_38bd & 65535 ^ 29612)) + alignBytes);
          return (63251 ^ (__hmacRingSequence_38bd & 65535 ^ 20508)) + alignBytes + offsetBytes;
        }
      case WasmOpcode.memory_size:
      case WasmOpcode.memory_grow:
        return 60211 ^ (__hmacRingSequence_38bd & 65535 ^ 19519);
      case WasmOpcode.i32_const:
        {
          const {
            bytesRead
          } = decodeSLEB128(buf, offset + (46811 ^ (__hmacRingSequence_38bd & 65535 ^ 4564)));
          return (56419 ^ (__hmacRingSequence_38bd & 65535 ^ 31596)) + bytesRead;
        }
      case WasmOpcode.i64_const:
        {
          const {
            bytesRead
          } = decodeSLEB128_64(buf, offset + (35018 ^ (__hmacRingSequence_38bd & 65535 ^ 12229)));
          return (52149 ^ (__hmacRingSequence_38bd & 65535 ^ 27834)) + bytesRead;
        }
      case WasmOpcode.f32_const:
        return 62982 ^ (__hmacRingSequence_38bd & 65535 ^ 20749);
      case WasmOpcode.f64_const:
        return 44247 ^ (__hmacRingSequence_38bd & 65535 ^ 3024);
      case WasmOpcode.br_table:
        {
          let p = offset + (48477 ^ (__hmacRingSequence_38bd & 65535 ^ 6738));
          const {
            value: labelCount,
            bytesRead: countBytes
          } = decodeULEB128(buf, p);
          p += countBytes;
          for (let i = 39431 ^ (__hmacRingSequence_38bd & 65535 ^ 15625); i < labelCount; i++) {
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
          } = decodeULEB128(buf, offset + (33967 ^ (__hmacRingSequence_38bd & 65535 ^ 9120)));
          return (48280 ^ (__hmacRingSequence_38bd & 65535 ^ 7063)) + bytesRead;
        }
      default:
        return 61309 ^ (__hmacRingSequence_38bd & 65535 ^ 18546);
    }
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_f737.invoke && window.__syferitIPC_f737.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 1753601787,
    channelSig: "SIG_FRAME_F737"
  });
}
const __syferitDispatch_d92a = [encodeSLEB128, decodeSLEB128, encodeSLEB128_64, decodeSLEB128_64];
function __invoke___syferitDispatch_d92a(_targetIdx, _seed) {
  return __syferitDispatch_d92a[_targetIdx + (Math.imul(Math.imul(_seed ^ 20607, 44307), Math.imul(_seed ^ 20607, 44307) + 1) & 1)];
}