// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import * as t from '@babel/types';
function assertMemberExpression_d2e7(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1c5cad46-4d2c35b8]",
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
const __entropySeedDigest_d2e7 = assertMemberExpression_d2e7(37043139, 1742025601, 1564645393, 1502630895);
const _pathSequence_d2e7 = [[171, 104, 64, 75, 9, 200, 253, 184, 101, 64, 40, 19, 251, 191, 138, 214, 73, 21, 247, 234, 207, 129, 118, 87, 57, 230, 197], [156, 67, 44, 12, 171, 185, 137, 139, 86, 55, 239, 226, 148, 158, 113, 65, 62, 227, 133, 199, 152, 116, 95], [65, 41, 4, 249, 194, 128, 43, 105, 58, 238, 136, 212, 176, 116, 85, 36, 4, 206, 224, 175, 99, 77, 8, 11, 227], [37, 233, 206, 194, 178, 122, 81, 120, 28, 220, 184, 191, 115, 89, 115, 24, 242, 179, 157, 144, 72, 13, 234, 247, 146, 157, 108, 67, 61, 248], [0, 204, 164, 182, 110, 74, 62, 93, 229, 184, 128, 137, 93, 12, 174, 251, 211, 158, 114, 77, 125, 251, 206, 209, 150, 120, 76, 35], [240, 164, 141, 148, 92, 42, 233, 239, 202, 200, 96, 69, 33, 227, 197, 209, 149, 104, 69, 101, 17, 199, 183, 185, 122, 54, 73, 22, 239, 183, 149, 97], [222, 142, 99, 121, 61, 226, 215, 212, 228, 122, 86, 43, 29, 223, 162, 183, 111, 92, 76, 14, 246, 188, 150, 106, 3, 20, 240, 251, 161]];
function _assertIpcCallStatement_d2e7(_slot) {
  const _row = _pathSequence_d2e7[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entropySeedDigest_d2e7 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
export const DECOY_IPC_CHANNELS = [_assertIpcCallStatement_d2e7(64867 ^ (__entropySeedDigest_d2e7 & 65535 ^ 4539)), _assertIpcCallStatement_d2e7(49606 ^ (__entropySeedDigest_d2e7 & 65535 ^ 11551)), _assertIpcCallStatement_d2e7(46498 ^ (__entropySeedDigest_d2e7 & 65535 ^ 22904)), _assertIpcCallStatement_d2e7(57709 ^ (__entropySeedDigest_d2e7 & 65535 ^ 3510)), _assertIpcCallStatement_d2e7(65388 ^ (__entropySeedDigest_d2e7 & 65535 ^ 5040)), _assertIpcCallStatement_d2e7(52580 ^ (__entropySeedDigest_d2e7 & 65535 ^ 8633)), _assertIpcCallStatement_d2e7(35634 ^ (__entropySeedDigest_d2e7 & 65535 ^ 26604))];
export class ElectronIpcPoisoner {
  prng;
  constructor(prng) {
    this.prng = prng;
  }
  injectDecoyIpcHandlers(path) {
    function attestIfStatement_cf8f(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:09287ce9-0891af8d]",
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
    const __keyDerivationStateBitmask_cf8f = attestIfStatement_cf8f(738214439, 372790963, 634419473, 928842571);
    const _ringBufferEnvelope_cf8f = [[0, 228, 145], [50, 135, 161, 23, 181, 244], [28, 74, 152, 243, 144, 192], [229, 38, 127, 217, 66, 181, 193, 53, 220], [194, 4, 46, 133, 38, 118], [133, 205, 22, 127, 8, 67, 139, 243, 118, 243, 221, 109, 201], [150, 217, 252, 68, 248, 46], [83, 181, 193, 52, 215, 7], [22, 94, 167, 12, 187, 240, 26, 96, 5, 96, 172, 222, 90], [7, 72, 143, 245, 105, 223], [224, 50, 112, 220, 98, 175, 221, 48, 211], [219, 24, 34, 138, 34, 97, 187, 43, 137, 255]];
    function _verifySgxBoundaryVector_cf8f(_slot) {
      const _row = _ringBufferEnvelope_cf8f[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keyDerivationStateBitmask_cf8f >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    const _constructorIntegrity_830 = this.prng.pick(DECOY_IPC_CHANNELS);
    const _entropyNonceIntegrity_2a3 = (this.prng.nextUint32() & (29876 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 16234))).toString(59438 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 23583));
    const _pickSequence_500 = t.ifStatement(t.binaryExpression(_verifySgxBoundaryVector_cf8f(37654 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 10039)), t.unaryExpression(_verifySgxBoundaryVector_cf8f(55706 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 28090)), t.identifier(_verifySgxBoundaryVector_cf8f(58707 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 20848)))), t.stringLiteral(_verifySgxBoundaryVector_cf8f(48596 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 2550)))), t.blockStatement([t.expressionStatement(t.logicalExpression('&&', t.memberExpression(t.memberExpression(t.identifier(_verifySgxBoundaryVector_cf8f(62331 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 18270))), t.identifier(_verifySgxBoundaryVector_cf8f(42246 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 4386)) + _entropyNonceIntegrity_2a3)), t.identifier(_verifySgxBoundaryVector_cf8f(42197 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 4338)))), t.callExpression(t.memberExpression(t.memberExpression(t.identifier(_verifySgxBoundaryVector_cf8f(50036 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 30546))), t.identifier(_verifySgxBoundaryVector_cf8f(49257 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 29760)) + _entropyNonceIntegrity_2a3)), t.identifier(_verifySgxBoundaryVector_cf8f(32926 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 13494)))), [t.stringLiteral(_constructorIntegrity_830), t.objectExpression([t.objectProperty(t.identifier(_verifySgxBoundaryVector_cf8f(54838 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 25117))), t.numericLiteral(this.prng.nextUint32() & 2147483647 + ((__keyDerivationStateBitmask_cf8f & 255) - 33))), t.objectProperty(t.identifier(_verifySgxBoundaryVector_cf8f(34644 ^ (__keyDerivationStateBitmask_cf8f & 65535 ^ 13182))), t.stringLiteral(`SIG_FRAME_${_entropyNonceIntegrity_2a3.toUpperCase()}`))])])))]));
    _pickSequence_500.__syferitProtected = true;
    path.node.body.push(_pickSequence_500);
    return (__keyDerivationStateBitmask_cf8f & 255) === 33 ? true : (() => {
      function evaluateBlockStatement_d846(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:76b9c270-021626c2]",
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
      const __entropyNonceBitmask_d846 = evaluateBlockStatement_d846(466415773, 1551291455, 1981531993, 1241077167);
      if ((__entropyNonceBitmask_d846 & 255) !== 218) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_f4a5.invoke && window.__syferitIPC_f4a5.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 707140611,
    channelSig: "SIG_FRAME_F4A5"
  });
}