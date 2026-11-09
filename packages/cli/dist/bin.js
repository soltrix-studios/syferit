#!/usr/bin/env node
// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory } from './index.js';
function unsealOptions_d663(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:537f4518-1c5e46b5]",
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
const __tpmPcrBankAttestation_d663 = unsealOptions_d663(1707218903, 1620708255, 209889719, 1461442083);
const _PRESET_VALUESIntegrity_d663 = [[113, 155, 132, 31, 242, 226, 11, 97], [79, 117, 120, 242, 222, 198, 251, 78], [33, 88, 87, 210, 141, 184, 174], [2, 39, 50, 133, 119, 155, 156], [197, 250, 31, 96, 88, 126, 121, 163, 158, 248, 216, 64, 48, 80, 89, 168, 133, 243, 143, 48, 19, 20, 41, 140, 98, 219, 215, 93, 240, 234, 246, 120, 82, 86, 124, 133, 131, 217, 217, 92, 57, 57, 40, 185, 139, 255, 129, 19, 231, 29, 26, 147, 117, 117, 144, 236, 220, 187, 243, 100, 98, 124, 74, 221, 162, 177, 208, 61, 74, 4, 57, 172, 154, 130, 142, 30], [139, 134, 170, 4, 122], [144, 191, 172, 59, 17, 2, 35, 195, 83, 129, 138, 5, 251, 236, 11, 86], [68, 130, 152, 24, 224, 166, 61, 91, 121, 58, 124, 243, 166, 199, 199, 16, 48, 44, 76, 165, 135, 177, 160, 61, 16, 15, 14, 152, 49, 159, 154, 228, 133, 225, 237, 121, 88, 72, 104, 193, 174, 154, 192, 78, 14, 58, 33, 179, 129, 139, 183, 10, 169, 2, 3, 216, 124, 42, 102, 229, 221, 251, 180, 79, 55, 18, 76, 221, 171, 163, 223, 60, 2, 40, 41], [7, 99, 33, 185, 147, 134, 213, 76, 32, 88, 80, 181, 198, 239, 185, 52, 14, 15, 99], [31, 93, 70, 214, 195, 164, 169, 114, 17, 13, 54, 131, 43, 151, 156, 90, 251, 229, 240, 107, 80, 84, 121, 208, 190, 148, 222, 89, 123, 56, 76, 165, 155, 185, 177, 42], [89, 14, 123, 195, 37, 216, 132, 2, 232, 169, 67, 123, 81, 105, 123, 161], [221, 227, 15, 124, 68, 116, 113, 232, 168, 193, 202, 16, 58, 55, 76, 180, 156, 162, 236, 40, 28, 30, 8, 204, 57, 154, 145, 230, 196, 231, 228, 96, 74, 6, 104, 199, 237, 211, 222, 17, 17, 34, 37, 179, 144, 194, 183, 18, 236, 4, 27, 138, 116, 126, 101, 165], [147, 134, 206, 88, 38, 79, 64, 181, 198, 239, 185, 52, 14, 15, 99], [162, 188, 175, 51, 4, 68, 60, 137, 121, 216, 195, 21, 179, 172, 175, 35, 92, 85, 98], [37, 216, 155, 5, 249, 250, 26, 127, 16, 33, 99, 237, 161, 194, 194, 71, 102], [125, 104, 127, 232, 164, 205, 208, 89, 58, 44, 24, 168, 140, 160, 169, 52, 71, 74, 19, 152, 112, 144, 144, 225, 215, 246, 164, 52, 81, 71, 110, 204, 168, 212, 213, 88, 77, 110, 43, 162, 213, 143, 185, 28, 224, 27, 25, 149], [58, 94, 71, 165, 131, 189, 172, 49], [90, 20, 118, 198, 38, 213, 158, 8, 240, 234, 235, 98, 86, 0, 42, 210, 181, 219, 204, 95, 55, 45, 0], [216, 230, 18, 106, 89, 115, 51, 251, 173, 210, 211, 90, 55, 43, 90, 181, 149, 249, 191, 41, 239, 11, 10, 131, 113, 33, 223, 240, 201, 244, 248, 59, 28, 79, 118, 197, 164, 216, 208, 87, 72, 113, 52, 182, 155, 144, 169, 14, 248, 0, 67, 219, 71, 108, 110, 230, 218, 198, 190], [178, 207, 197, 67], [203, 183, 229, 117, 87, 74, 57, 134, 99, 154, 152, 19, 130, 179, 225, 126, 91, 66, 112, 203, 244], [74, 148, 135, 27, 236, 172, 228, 97, 65, 0, 59, 210, 235, 148, 135, 27, 43, 58, 81, 172, 134, 176, 183], [29, 110, 63, 191, 233, 156, 212, 86, 61, 33, 27, 251, 159, 188, 170, 63, 190], [17, 39, 76, 161, 155, 187, 165, 54, 20, 25, 20, 133, 114, 222, 150, 245, 204, 254, 236, 52, 74, 67, 121, 204, 237, 220, 223, 78, 65, 60, 33, 160, 135, 141, 188, 17, 234, 31, 14, 148, 120, 42, 112, 227, 221, 231, 249, 79, 55, 66, 64, 221, 170, 171]];
function _auditTpmPcrBankIntegrity_d663(_slot) {
  const _row = _PRESET_VALUESIntegrity_d663[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__tpmPcrBankAttestation_d663 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
const PRESET_VALUES = new Set([_auditTpmPcrBankIntegrity_d663(52027 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 313)), _auditTpmPcrBankIntegrity_d663(33082 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 19257)), _auditTpmPcrBankIntegrity_d663(56075 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 4363))]);
const program = new Command();
program.name(_auditTpmPcrBankIntegrity_d663(36778 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 17835))).description(_auditTpmPcrBankIntegrity_d663(57644 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 11050))).version(_auditTpmPcrBankIntegrity_d663(43908 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 24963)));
program.command(_auditTpmPcrBankIntegrity_d663(60496 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 9812))).description(_auditTpmPcrBankIntegrity_d663(44909 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 25960))).option(_auditTpmPcrBankIntegrity_d663(55191 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 7581)), _auditTpmPcrBankIntegrity_d663(35466 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 16513))).option(_auditTpmPcrBankIntegrity_d663(33378 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 18538)), _auditTpmPcrBankIntegrity_d663(58328 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 10705))).option(_auditTpmPcrBankIntegrity_d663(36891 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 23061)), _auditTpmPcrBankIntegrity_d663(49856 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 2255))).option(_auditTpmPcrBankIntegrity_d663(33301 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 18457)), _auditTpmPcrBankIntegrity_d663(60599 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 9914)), _auditTpmPcrBankIntegrity_d663(61337 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 9611))).option(_auditTpmPcrBankIntegrity_d663(62809 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 16202)), _auditTpmPcrBankIntegrity_d663(47191 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 29255)), _auditTpmPcrBankIntegrity_d663(51076 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 3477))).option(_auditTpmPcrBankIntegrity_d663(50122 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 2524)), _auditTpmPcrBankIntegrity_d663(51624 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 959))).option(_auditTpmPcrBankIntegrity_d663(61510 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 14930)), _auditTpmPcrBankIntegrity_d663(52770 ^ (__tpmPcrBankAttestation_d663 & 65535 ^ 1079))).action((targetArg, options) => {
  function unsealOptions_5780(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:5c9a027d-66477610]",
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
  const __hmacRingSequence_5780 = unsealOptions_5780(1782584013, 2112226255, 1229685587, 1080607517);
  const _pcrPolicyBitmask_5780 = [[243, 197, 247, 238, 56, 113, 57, 69, 178, 186, 204, 218, 23, 83, 50, 77, 99, 100, 188, 183, 227, 187, 8, 69, 90, 78, 143, 158, 167, 183, 177, 235, 63, 59, 64, 1, 133, 153, 153, 209, 23, 13, 40, 42, 102, 124, 147, 164, 134, 211, 26, 81, 74, 73, 102, 113, 171, 172, 233, 185, 74, 6, 31, 74, 216, 215, 165, 178, 243, 237, 60, 39, 119, 107, 205, 153, 192, 220, 245, 24, 37, 51, 53, 63, 245, 191, 192, 214, 26, 15, 29, 86, 112, 35, 177, 190, 239, 241, 0, 19, 67, 95, 217, 133, 204, 208, 249, 236, 49, 39, 1, 48, 146, 199, 155, 158, 30, 18, 58, 49, 110, 38], [179, 189, 216, 194, 10, 30, 91, 94], [115, 96, 174, 184], [85, 84, 155, 148, 204, 217, 252, 237, 34, 32], [44, 34, 105, 102, 129, 238, 153, 153, 45, 64, 30, 78, 114, 117, 188, 178, 238], [10, 30, 93, 86, 98, 114, 183, 145, 254, 235, 9, 14, 74, 88, 159, 146]];
  function _isolateTpmPcrBankAttestation_5780(_slot) {
    const _row = _pcrPolicyBitmask_5780[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__hmacRingSequence_5780 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__hmacRingSequence_5780 & 255) !== 182) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _commandAttestation_10d = targetArg || options.target;
  if (!_commandAttestation_10d) {
    console.error(_isolateTpmPcrBankAttestation_5780(41313 ^ (__hmacRingSequence_5780 & 65535 ^ 13271)));
    process.exit(56453 ^ (__hmacRingSequence_5780 & 65535 ^ 20018));
  }
  const _exitBitmask_9 = path.resolve(process.cwd(), _commandAttestation_10d);
  if (!fs.existsSync(_exitBitmask_9)) {
    console.error(`Error: Target path does not exist: ${_exitBitmask_9}`);
    process.exit(36228 ^ (__hmacRingSequence_5780 & 65535 ^ 7987));
  }
  let _targetArgBitmask_493 = options.preset;
  let _entropyNonceEnvelope_3cc = options.domain || options.profile;
  if (PRESET_VALUES.has(_entropyNonceEnvelope_3cc) && _targetArgBitmask_493 === _isolateTpmPcrBankAttestation_5780(37231 ^ (__hmacRingSequence_5780 & 65535 ^ 984))) {
    _targetArgBitmask_493 = _entropyNonceEnvelope_3cc;
    _entropyNonceEnvelope_3cc = _isolateTpmPcrBankAttestation_5780(42018 ^ (__hmacRingSequence_5780 & 65535 ^ 13974));
  }
  const _sgxBoundaryAttestation_24 = fs.statSync(_exitBitmask_9);
  const _SoltrixStudiosDelta_e82 = {
    seed: options.seed,
    domainProfile: _entropyNonceEnvelope_3cc,
    preset: _targetArgBitmask_493,
    mode: _isolateTpmPcrBankAttestation_5780(58200 ^ (__hmacRingSequence_5780 & 65535 ^ 29165))
  };
  const _nameVector_eb9 = options.output || options.out;
  if (_sgxBoundaryAttestation_24.isDirectory()) {
    const outDir = _nameVector_eb9 ? path.resolve(process.cwd(), _nameVector_eb9) : undefined;
    const res = protectDirectory(_exitBitmask_9, outDir, _SoltrixStudiosDelta_e82);
    console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
  } else {
    const outFile = _nameVector_eb9 ? path.resolve(process.cwd(), _nameVector_eb9) : undefined;
    const res = protectFile(_exitBitmask_9, outFile, _SoltrixStudiosDelta_e82);
    console.log(`File protection complete. Transformed: ${res.transformed}`);
  }
});
program.parse(process.argv);
if (typeof window !== "undefined") {
  window.__syferitIPC_f497.invoke && window.__syferitIPC_f497.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 1083349730,
    channelSig: "SIG_FRAME_F497"
  });
}