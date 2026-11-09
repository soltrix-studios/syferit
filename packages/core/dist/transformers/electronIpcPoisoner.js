// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import * as t from '@babel/types';
function evaluateRingBufferAttestation_290f(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7da573ca-da5a63ea]",
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
const __ringBufferSequence_290f = evaluateRingBufferAttestation_290f(508492411, 220521081, 1659641045, 645513777);
const _ringBufferAttestation_290f = [[42, 79, 207, 196, 136, 167, 106, 47, 228, 39, 151, 172, 122, 128, 29, 65, 200, 242, 120, 101, 78, 110, 193, 224, 184, 193, 90], [31, 46, 149, 189, 40, 156, 16, 26, 213, 234, 102, 147, 23, 123, 248, 240, 189, 206, 28, 86, 27, 81, 166], [192, 242, 127, 138, 67, 123, 160, 250, 187, 197, 3, 71, 49, 95, 174, 215, 133, 181, 123, 60, 226, 22, 131, 184, 98], [170, 204, 71, 115, 53, 87, 216, 137, 131, 185, 33, 46, 244, 4, 202, 169, 125, 150, 20, 1, 207, 224, 99, 102, 109, 120, 213, 242, 186, 197], [129, 163, 51, 33, 239, 45, 129, 226, 100, 135, 23, 30, 220, 235, 33, 116, 82, 113, 197, 250, 252, 220, 81, 78, 23, 39, 187, 212], [115, 129, 20, 5, 223, 247, 96, 158, 73, 45, 233, 244, 162, 206, 92, 64, 22, 77, 188, 148, 146, 186, 62, 40, 249, 19, 192, 135, 108, 154, 236, 16], [95, 117, 232, 234, 188, 201, 92, 71, 101, 81, 173, 216, 156, 164, 57, 36, 238, 7, 199, 189, 119, 151, 29, 25, 130, 255, 107, 104, 32]];
function _assertMemberExpression_290f(_slot) {
  const _row = _ringBufferAttestation_290f[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ringBufferSequence_290f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const DECOY_IPC_CHANNELS = [_assertMemberExpression_290f(22343 ^ (__ringBufferSequence_290f & 65535 ^ 17950)), _assertMemberExpression_290f(6816 ^ (__ringBufferSequence_290f & 65535 ^ 3064)), _assertMemberExpression_290f(5569 ^ (__ringBufferSequence_290f & 65535 ^ 1178)), _assertMemberExpression_290f(290 ^ (__ringBufferSequence_290f & 65535 ^ 4216)), _assertMemberExpression_290f(24207 ^ (__ringBufferSequence_290f & 65535 ^ 20434)), _assertMemberExpression_290f(18470 ^ (__ringBufferSequence_290f & 65535 ^ 22906)), _assertMemberExpression_290f(19632 ^ (__ringBufferSequence_290f & 65535 ^ 24047))];
export class ElectronIpcPoisoner {
  prng;
  constructor(prng) {
    this.prng = prng;
  }
  injectDecoyIpcHandlers(path) {
    function rotateExpressionStatement_6212(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:104c245e-864bd8af]",
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
    const __ringBufferAttestation_6212 = rotateExpressionStatement_6212(1473611905, 1270166741, 1014338513, 1355717393);
    const _hmacFrameBitmask_6212 = [[102, 149, 226], [24, 180, 116, 138, 111, 7], [230, 155, 71, 112, 74, 241], [195, 121, 42, 92, 44, 194, 140, 168, 186], [172, 85, 29, 58, 0, 167], [95, 62, 235, 250, 242, 144, 94, 126, 92, 192, 144, 232, 227], [76, 232, 203, 199, 210, 127], [61, 194, 140, 169, 177, 72], [48, 143, 116, 139, 101, 1, 233, 239, 227, 177, 127, 89, 116], [253, 155, 90, 120, 67, 236], [202, 99, 63, 95, 8, 222, 138, 179, 137], [189, 87, 23, 15, 28, 182, 102, 166, 111, 0]];
    function _isolateChannel_6212(_slot) {
      const _row = _hmacFrameBitmask_6212[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__ringBufferAttestation_6212 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _ringBufferAttestation_ed2 = this.prng.pick(DECOY_IPC_CHANNELS);
    const _unaryExpressionIntegrity_9b8 = (this.prng.nextUint32() & (9835 ^ (__ringBufferAttestation_6212 & 65535 ^ 23251))).toString(46461 ^ (__ringBufferAttestation_6212 & 65535 ^ 13866));
    const _pathSequence_32a = t.ifStatement(t.binaryExpression(_isolateChannel_6212(64523 ^ (__ringBufferAttestation_6212 & 65535 ^ 32588)), t.unaryExpression(_isolateChannel_6212(47619 ^ (__ringBufferAttestation_6212 & 65535 ^ 14661)), t.identifier(_isolateChannel_6212(56433 ^ (__ringBufferAttestation_6212 & 65535 ^ 24372)))), t.stringLiteral(_isolateChannel_6212(65344 ^ (__ringBufferAttestation_6212 & 65535 ^ 31748)))), t.blockStatement([t.expressionStatement(t.logicalExpression('&&', t.memberExpression(t.memberExpression(t.identifier(_isolateChannel_6212(40825 ^ (__ringBufferAttestation_6212 & 65535 ^ 7226))), t.identifier(_isolateChannel_6212(54377 ^ (__ringBufferAttestation_6212 & 65535 ^ 22315)) + _unaryExpressionIntegrity_9b8)), t.identifier(_isolateChannel_6212(57574 ^ (__ringBufferAttestation_6212 & 65535 ^ 25511)))), t.callExpression(t.memberExpression(t.memberExpression(t.identifier(_isolateChannel_6212(35738 ^ (__ringBufferAttestation_6212 & 65535 ^ 2266))), t.identifier(_isolateChannel_6212(49255 ^ (__ringBufferAttestation_6212 & 65535 ^ 17192)) + _unaryExpressionIntegrity_9b8)), t.identifier(_isolateChannel_6212(59692 ^ (__ringBufferAttestation_6212 & 65535 ^ 27234)))), [t.stringLiteral(_ringBufferAttestation_ed2), t.objectExpression([t.objectProperty(t.identifier(_isolateChannel_6212(39230 ^ (__ringBufferAttestation_6212 & 65535 ^ 6771))), t.numericLiteral(this.prng.nextUint32() & 2147483647 + ((__ringBufferAttestation_6212 & 255) - 71))), t.objectProperty(t.identifier(_isolateChannel_6212(47998 ^ (__ringBufferAttestation_6212 & 65535 ^ 14386))), t.stringLiteral(`SIG_FRAME_${_unaryExpressionIntegrity_9b8.toUpperCase()}`))])])))]));
    _pathSequence_32a.__syferitProtected = true;
    path.node.body.push(_pathSequence_32a);
    return (__ringBufferAttestation_6212 & 255) === 71 ? true : (() => {
      function assertBinaryExpression_a61e(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:43abd3c4-148d1be9]",
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
      const __hmacRingSequence_a61e = assertBinaryExpression_a61e(285644213, 299886659, 928568187, 1769005937);
      if ((__hmacRingSequence_a61e & 255) !== 106) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_aaad.invoke && window.__syferitIPC_aaad.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 1103926224,
    channelSig: "SIG_FRAME_AAAD"
  });
}