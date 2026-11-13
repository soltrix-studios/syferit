#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory } from './index.js';
function isolateOptions_8b71(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:921ef83b-bdd6efc4]",
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
var __CommandState_8b71 = isolateOptions_8b71(1876872767, 1332773491, 1573179335, 654936705);
var _tpmEnvelope_8b71 = [[242, 52, 179, 164, 113, 181, 20, 58], [206, 4, 133, 139, 95, 151, 238, 231], [166, 235, 100, 125, 50, 107, 221], [131, 214, 39, 92, 246, 42, 161], [70, 173, 0, 59, 219, 1, 142, 200, 29, 175, 247, 235, 179, 255, 78, 115, 6, 4, 240, 203, 144, 203, 62, 39, 225, 108, 248, 246, 115, 133, 1, 3, 209, 1, 99, 222, 0, 102, 238, 247, 186, 238, 71, 82, 8, 16, 150, 200, 100, 170, 37, 40, 246, 42, 135, 135, 95, 204, 28, 15, 225, 211, 125, 102, 33, 102, 207, 230, 201, 251, 78, 71, 25, 85, 161, 181], [10, 215, 191, 173, 251], [47, 108, 223, 220, 150, 209, 48, 28, 220, 50, 185, 162, 124, 191, 24, 57], [197, 51, 165, 161, 97, 247, 40, 50, 248, 75, 145, 154, 39, 150, 242, 169, 177, 253, 81, 124, 6, 64, 213, 212, 145, 222, 35, 49, 176, 46, 143, 189, 4, 144, 16, 0, 217, 25, 125, 104, 47, 43, 237, 231, 143, 235, 84, 74, 0, 90, 170, 211, 40, 179, 54, 113, 253, 123, 139, 140, 92, 138, 161, 22, 182, 163, 113, 100, 42, 114, 202, 213, 131, 217, 68], [132, 28, 214, 210, 16, 209, 250, 231, 163, 247, 71, 110, 69, 24, 198, 207, 141, 208, 116], [158, 236, 107, 127, 66, 85, 220, 139, 144, 220, 43, 90, 170, 38, 169, 243, 122, 180, 29, 2, 209, 5, 108, 137, 63, 37, 227, 224, 250, 233, 89, 76, 26, 72, 220, 195], [222, 221, 104, 28, 170, 107, 183, 165, 111, 250, 80, 20, 206, 26, 104, 198], [92, 178, 26, 21, 197, 5, 156, 129, 41, 144, 255, 169, 187, 230, 81, 109, 29, 83, 153, 193, 157, 207, 37, 101, 184, 43, 132, 191, 69, 150, 25, 25, 203, 87, 125, 110, 108, 98, 243, 184, 144, 243, 80, 74, 17, 19, 170, 203, 109, 181, 46, 35, 245, 47, 136, 204], [16, 209, 225, 243, 165, 224, 87, 110, 69, 24, 198, 207, 141, 208, 116], [35, 77, 218, 202, 133, 149, 33, 80, 248, 105, 246, 188, 50, 253, 66, 74, 221, 4, 119], [170, 107, 168, 162, 126, 169, 9, 16, 143, 82, 112, 138, 38, 113, 241, 248, 233], [252, 25, 146, 129, 37, 156, 229, 224, 187, 253, 5, 113, 13, 81, 220, 221, 198, 155, 62, 49, 241, 33, 133, 184, 86, 135, 89, 77, 208, 22, 123, 101, 41, 101, 248, 241, 204, 191, 94, 91, 84, 94, 164, 197, 97, 170, 44, 60], [185, 241, 80, 126, 0, 74, 211, 202], [219, 197, 107, 31, 167, 100, 171, 161, 113, 187, 6, 11, 215, 81, 63, 139, 52, 106, 241, 230, 182, 252, 21], [95, 181, 1, 5, 198, 0, 32, 156, 42, 97, 224, 229, 184, 248, 73, 82, 18, 10, 204, 198, 144, 216, 57, 36, 246, 114, 204, 175, 70, 135, 11, 92, 155, 28, 101, 106, 59, 107, 195, 240, 207, 130, 71, 73, 20, 67, 186, 169, 127, 179, 112, 116, 248, 63, 157, 129, 93, 149, 173], [51, 158, 240, 250], [72, 64, 154, 142, 212, 149, 46, 45, 224, 45, 183, 184, 1, 220, 22, 5, 216, 21, 111, 144, 119], [203, 37, 178, 178, 109, 253, 9, 8, 192, 81, 46, 139, 106, 37, 186, 162, 170, 235, 68, 69, 7, 65, 218], [130, 29, 44, 216, 110, 47, 231, 233, 178, 242, 8, 28, 24, 79, 217, 208, 193], [144, 246, 81, 120, 26, 74, 208, 223, 149, 200, 57, 44, 243, 111, 131, 172, 77, 143, 17, 77, 203, 18, 108, 101, 108, 109, 242, 231, 192, 237, 84, 89, 6, 92, 161, 200, 107, 174, 59, 61, 249, 123, 157, 138, 92, 150, 236, 22, 182, 243, 125, 100, 43, 122]];
function _rotateCommand_8b71(_slot) {
  const _row = _tpmEnvelope_8b71[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__CommandState_8b71 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
const PRESET_VALUES = new Set([_rotateCommand_8b71(978703268 ^ Math.imul(__CommandState_8b71 & 65535 ^ 25245, 31567)), _rotateCommand_8b71(145347110 ^ Math.imul(__CommandState_8b71 & 65535 ^ 19710, 6489)), _rotateCommand_8b71(117298928 ^ Math.imul(__CommandState_8b71 & 65535 ^ 10023, 7555))]);
const program = new Command();
program.name(_rotateCommand_8b71(204667512 ^ Math.imul(__CommandState_8b71 & 65535 ^ 13100, 19655))).description(_rotateCommand_8b71(206155544 ^ Math.imul(__CommandState_8b71 & 65535 ^ 10565, 15863))).version(_rotateCommand_8b71(470807904 ^ Math.imul(__CommandState_8b71 & 65535 ^ 31522, 19031)));
program.command(_rotateCommand_8b71(139794379 ^ Math.imul(__CommandState_8b71 & 65535 ^ 24396, 7937))).description(_rotateCommand_8b71(220541442 ^ Math.imul(__CommandState_8b71 & 65535 ^ 1830, 30067))).option(_rotateCommand_8b71(338319793 ^ Math.imul(__CommandState_8b71 & 65535 ^ 26958, 11511)), _rotateCommand_8b71(740016 ^ Math.imul(__CommandState_8b71 & 65535 ^ 7072, 22425))).option(_rotateCommand_8b71(320528276 ^ Math.imul(__CommandState_8b71 & 65535 ^ 15383, 31629)), _rotateCommand_8b71(501320774 ^ Math.imul(__CommandState_8b71 & 65535 ^ 24472, 28757))).option(_rotateCommand_8b71(372251553 ^ Math.imul(__CommandState_8b71 & 65535 ^ 18872, 17685)), _rotateCommand_8b71(48063285 ^ Math.imul(__CommandState_8b71 & 65535 ^ 15673, 4849))).option(_rotateCommand_8b71(128709568 ^ Math.imul(__CommandState_8b71 & 65535 ^ 30731, 5051)), _rotateCommand_8b71(380473192 ^ Math.imul(__CommandState_8b71 & 65535 ^ 30934, 14961)), _rotateCommand_8b71(143748906 ^ Math.imul(__CommandState_8b71 & 65535 ^ 19131, 6913))).option(_rotateCommand_8b71(173902482 ^ Math.imul(__CommandState_8b71 & 65535 ^ 19468, 7759)), _rotateCommand_8b71(377798514 ^ Math.imul(__CommandState_8b71 & 65535 ^ 20257, 17439)), _rotateCommand_8b71(713857056 ^ Math.imul(__CommandState_8b71 & 65535 ^ 31676, 28975))).option(_rotateCommand_8b71(505083263 ^ Math.imul(__CommandState_8b71 & 65535 ^ 9262, 30981)), _rotateCommand_8b71(561988968 ^ Math.imul(__CommandState_8b71 & 65535 ^ 30828, 21969))).option(_rotateCommand_8b71(431152054 ^ Math.imul(__CommandState_8b71 & 65535 ^ 29537, 16059)), _rotateCommand_8b71(185785795 ^ Math.imul(__CommandState_8b71 & 65535 ^ 26845, 6291))).action((targetArg, options) => {
  function sanitizeError_25eb(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6dbe22e0-faba6208]",
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
      throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
    }
    return _h;
  }
  const __statSyncState_25eb = sanitizeError_25eb(1804053313, 2014264955, 685083797, 1379354097);
  const _resolvedPathFrame_25eb = [[182, 64, 34, 53, 245, 252, 196, 190, 119, 63, 25, 241, 202, 206, 127, 102, 38, 225, 201, 204, 174, 54, 85, 30, 31, 203, 186, 181, 154, 74, 124, 0, 250, 190, 149, 218, 72, 20, 164, 234, 210, 136, 125, 65, 59, 225, 222, 207, 195, 86, 47, 106, 7, 196, 187, 170, 110, 41, 28, 82, 183, 187, 210, 97, 29, 82, 240, 233, 190, 96, 65, 92, 50, 238, 152, 178, 157, 65, 56, 51, 224, 182, 192, 196, 56, 50, 29, 13, 223, 138, 40, 125, 77, 94, 252, 213, 170, 116, 85, 72, 14, 210, 228, 190, 137, 85, 44, 7, 236, 186, 204, 219, 87, 66, 174, 165, 211, 159, 103, 106, 43, 163], [112, 54, 7, 27, 201, 133, 108, 119], [78, 29, 251, 215], [18, 211, 208, 173, 131, 86, 39, 52, 229, 167], [226, 168, 144, 139, 105, 42, 10, 235, 220, 139], [223, 136, 104, 127, 37]];
  function _attestProfile_25eb(_slot) {
    const _row = _resolvedPathFrame_25eb[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__statSyncState_25eb >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__statSyncState_25eb & 255) !== 243) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _quorumDigest_69e = targetArg || options.target;
  if (!_quorumDigest_69e) {
    console.error(_attestProfile_25eb(127911363 ^ Math.imul(__statSyncState_25eb & 65535 ^ 10100, 11749)));
    process.exit(709702441 ^ Math.imul(__statSyncState_25eb & 65535 ^ 27067, 27645));
  }
  const _presetDigest_7a8 = path.resolve(process.cwd(), _quorumDigest_69e);
  if (!fs.existsSync(_presetDigest_7a8)) {
    console.error(`Error: Target path does not exist: ${_presetDigest_7a8}`);
    process.exit(229184583 ^ Math.imul(__statSyncState_25eb & 65535 ^ 25253, 8041));
  }
  let _existsSyncProof_f12 = options.preset;
  let _optionsFrame_bea = options.domain || options.profile;
  if (PRESET_VALUES.has(_optionsFrame_bea) && _existsSyncProof_f12 === _attestProfile_25eb(796119011 ^ Math.imul(__statSyncState_25eb & 65535 ^ 31989, 27515))) {
    _existsSyncProof_f12 = _optionsFrame_bea;
    _optionsFrame_bea = _attestProfile_25eb(823592382 ^ Math.imul(__statSyncState_25eb & 65535 ^ 27495, 31363));
  }
  const _ProprietaryEnclaveDelta_a3f = fs.statSync(_presetDigest_7a8);
  const _consoleEnvelope_436 = {
    seed: options.seed,
    domainProfile: _optionsFrame_bea,
    preset: _existsSyncProof_f12,
    mode: _attestProfile_25eb(177570619 ^ Math.imul(__statSyncState_25eb & 65535 ^ 14891, 12421))
  };
  const _nonceCheck_b64 = options.output || options.out;
  if (_ProprietaryEnclaveDelta_a3f.isDirectory()) {
    const outDir = _nonceCheck_b64 ? path.resolve(process.cwd(), _nonceCheck_b64) : undefined;
    const res = protectDirectory(_presetDigest_7a8, outDir, _consoleEnvelope_436);
    console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
  } else {
    const outFile = _nonceCheck_b64 ? path.resolve(process.cwd(), _nonceCheck_b64) : undefined;
    const res = protectFile(_presetDigest_7a8, outFile, _consoleEnvelope_436);
    console.log(`File protection complete. Transformed: ${res.transformed}`);
  }
});
program.parse(process.argv);
if (typeof window !== "undefined") {
  window.__syferitIPC_efba && window.__syferitIPC_efba.invoke && window.__syferitIPC_efba.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 1143582055,
    channelSig: "SIG_FRAME_EFBA"
  });
}