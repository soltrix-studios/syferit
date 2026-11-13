#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory } from './index.js';
function validateDomainVal_836(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:0512c36c-051748d6]",
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
    throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
  }
  return _h;
}
var __keystoreDigest_836 = validateDomainVal_836(405385023, 617070005, 1617177419, 1709348741);
var _quorumCheck_836 = [[75, 155, 83, 142, 168, 226, 180, 16], [53, 117, 37, 97, 148, 198, 142, 253], [239, 88, 4, 67, 123, 184, 125], [212, 39, 199, 42, 73, 155, 65], [159, 250, 160, 17, 18, 126, 46, 50, 212, 248, 151, 241, 234, 80, 238, 89, 127, 243, 80, 161, 217, 20, 222, 61, 40, 219, 24, 204, 138, 234, 161, 233, 8, 86, 3, 52, 73, 217, 142, 205, 243, 57, 231, 72, 81, 255, 118, 162, 221, 29, 197, 2, 63, 117, 39, 157, 150, 187, 188, 245, 88, 124, 29, 76, 120, 177, 111, 204, 128, 4, 238, 61, 80, 130, 65, 175], [193, 134, 223, 183, 176], [102, 191, 127, 202, 207, 2, 208, 114, 101, 129, 89, 148, 181, 236, 184, 39], [122, 130, 69, 143, 182, 166, 136, 36, 55, 58, 49, 100, 144, 199, 146, 191, 238, 44, 241, 82, 113, 177, 117, 162, 222, 15, 195, 47, 103, 159, 47, 139, 251, 225, 176, 238, 14, 72, 29, 126, 96, 154, 141, 217, 248, 58, 244, 92, 95, 139, 74, 189, 159, 2, 214, 71, 50, 42, 43, 146, 139, 251, 193, 224, 9, 18, 17, 74, 125, 163, 106, 195, 204, 40, 228], [77, 99, 118, 40, 217, 134, 154, 253, 250, 88, 231, 68, 60, 239, 102, 165, 196, 15, 148], [213, 93, 11, 69, 57, 164, 124, 225, 203, 13, 203, 48, 97, 151, 73, 201, 177, 229, 189, 24, 10, 84, 12, 99, 132, 148, 131, 202, 177, 56, 249, 86, 81, 185, 124, 185], [135, 14, 136, 114, 19, 216, 87, 147, 166, 169, 240, 10, 7, 105, 8, 48], [139, 227, 186, 3, 10, 116, 60, 127, 158, 193, 159, 191, 228, 55, 241, 67, 106, 162, 57, 183, 210, 30, 197, 123, 111, 154, 36, 137, 186, 231, 185, 247, 28, 6, 29, 120, 35, 211, 147, 134, 231, 34, 240, 92, 78, 194, 74, 165, 218, 4, 206, 21, 58, 126, 40, 210], [217, 134, 129, 233, 252, 79, 247, 68, 60, 239, 102, 165, 196, 15, 148], [88, 188, 122, 160, 222, 68, 193, 58, 51, 216, 22, 134, 249, 172, 226, 80, 6, 85, 23], [19, 216, 72, 148, 183, 250, 169, 14, 70, 33, 16, 124, 159, 194, 145, 214, 176], [51, 104, 50, 127, 146, 205, 133, 246, 228, 44, 165, 95, 122, 160, 124, 171, 137, 74, 222, 47, 38, 144, 37, 142, 169, 246, 249, 163, 7, 71, 27, 115, 102, 212, 152, 207, 187, 110, 254, 77, 11, 143, 68, 171, 214, 27, 204, 10], [224, 94, 240, 84, 121, 189, 115, 160], [128, 20, 139, 117, 108, 213, 75, 155, 186, 234, 166, 17, 12, 0, 95, 97, 143, 219, 145, 204, 253, 45, 181], [150, 230, 161, 27, 15, 115, 64, 106, 147, 210, 128, 203, 225, 43, 233, 68, 91, 249, 108, 184, 217, 11, 217, 50, 47, 33, 108, 129, 191, 244, 171, 170, 82, 79, 5, 116, 114, 216, 99, 198, 182, 113, 231, 39, 77, 144, 90, 191, 182, 0, 144, 74, 49, 108, 61, 151, 132, 198, 205], [132, 207, 144, 236], [49, 183, 58, 228, 157, 74, 206, 55, 41, 154, 87, 130, 248, 179, 182, 239, 1, 66, 15, 122, 62], [0, 148, 82, 136, 166, 172, 169, 18, 27, 0, 78, 97, 209, 148, 218, 136, 225, 58, 228, 95, 76, 176, 122], [75, 110, 76, 46, 215, 156, 135, 199, 235, 33, 168, 10, 81, 188, 121, 174, 136], [207, 39, 241, 86, 109, 187, 112, 169, 218, 25, 217, 50, 36, 222, 35, 154, 178, 254, 177, 163, 28, 67, 12, 115, 35, 220, 146, 217, 183, 60, 244, 79, 89, 141, 65, 166, 220, 31, 219, 11, 54, 42, 61, 148, 139, 231, 140, 224, 9, 66, 29, 74, 124, 171]];
function _validateProcess_836(_slot) {
  const _row = _quorumCheck_836[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreDigest_836 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
const PRESET_VALUES = new Set([_validateProcess_836(1347697630 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 31402, 29815)), _validateProcess_836(871925173 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 20484, 22083)), _validateProcess_836(1174719616 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 14830, 18819))]);
const program = new Command();
program.name(_validateProcess_836(1325110138 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 11053, 22997))).description(_validateProcess_836(1484727674 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 29726, 30501))).version(_validateProcess_836(1461253205 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 5384, 25575)));
program.command(_validateProcess_836(143251020 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 20478, 4183))).description(_validateProcess_836(789105058 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 24221, 20737))).option(_validateProcess_836(1235797389 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 26495, 27859)), _validateProcess_836(371523390 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 2265, 7447))).option(_validateProcess_836(1133113054 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 27572, 27399)), _validateProcess_836(1566268139 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 9752, 25911))).option(_validateProcess_836(1174052884 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 21952, 28669)), _validateProcess_836(616551660 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 15081, 10001))).option(_validateProcess_836(903533081 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 27931, 21117)), _validateProcess_836(1934127993 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 15350, 31245)), _validateProcess_836(1877715878 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 11846, 32101))).option(_validateProcess_836(1907384264 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 10053, 31373)), _validateProcess_836(1106734623 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 26813, 26601)), _validateProcess_836(691751594 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 20113, 20369))).option(_validateProcess_836(751572754 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 23598, 19561)), _validateProcess_836(1027599919 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 22814, 27279))).option(_validateProcess_836(1003527497 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 30613, 20667)), _validateProcess_836(470548746 ^ Math.imul(__keystoreDigest_836 & 65535 ^ 20057, 13885))).action((targetArg, options) => {
  function verifyKeystoreDigest_5833(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:98047dd4-5e0fd7a9]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __keystoreBank_5833 = verifyKeystoreDigest_5833(1441481345, 1184914085, 1412921399, 967729975);
  const _enclaveReg_5833 = [[161, 249, 11, 111, 10, 37, 45, 196, 96, 214, 192, 91, 197, 103, 70, 204, 81, 184, 160, 54, 177, 79, 60, 196, 40, 98, 131, 31, 149, 227, 165, 106, 237, 71, 124, 128, 119, 205, 141, 80, 197, 33, 36, 171, 52, 136, 167, 37, 244, 15, 6, 208, 24, 125, 146, 240, 153, 192, 229, 56, 184, 82, 11, 203, 10, 235, 217, 51, 193, 57, 40, 166, 37, 135, 193, 24, 146, 232, 1, 153, 23, 111, 41, 190, 39, 203, 244, 87, 232, 35, 17, 215, 66, 247, 165, 63, 189, 13, 60, 146, 49, 139, 205, 4, 158, 252, 245, 109, 227, 83, 53, 177, 96, 155, 135, 31, 204, 38, 78, 176, 92, 202], [97, 209, 236, 65, 248, 42, 87, 221], [93, 180, 162, 57], [35, 136, 135, 11, 146, 237, 8, 106, 20, 76], [29, 113, 121, 241, 126, 195, 211, 65, 211, 34], [238, 39, 83, 213, 84]];
  function _isolateName_5833(_slot) {
    const _row = _enclaveReg_5833[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreBank_5833 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__keystoreBank_5833 & 255) !== 228) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _signatureDigest_daf = targetArg || options.target;
  if (!_signatureDigest_daf) {
    console.error(_isolateName_5833(540324375 ^ Math.imul(__keystoreBank_5833 & 65535 ^ 4759, 18125)));
    process.exit(344306301 ^ Math.imul(__keystoreBank_5833 & 65535 ^ 23816, 22445));
  }
  const _consoleEnvelope_289 = path.resolve(process.cwd(), _signatureDigest_daf);
  if (!fs.existsSync(_consoleEnvelope_289)) {
    console.error(`Error: Target path does not exist: ${_consoleEnvelope_289}`);
    process.exit(232222897 ^ Math.imul(__keystoreBank_5833 & 65535 ^ 21076, 17217));
  }
  let _keystoreDigest_9d1 = options.preset;
  let _commandCheck_94e = options.domain || options.profile;
  if (PRESET_VALUES.has(_commandCheck_94e) && _keystoreDigest_9d1 === _isolateName_5833(687974497 ^ Math.imul(__keystoreBank_5833 & 65535 ^ 8132, 22187))) {
    _keystoreDigest_9d1 = _commandCheck_94e;
    _commandCheck_94e = _isolateName_5833(426185212 ^ Math.imul(__keystoreBank_5833 & 65535 ^ 22586, 26481));
  }
  const _presetVector_a5d = fs.statSync(_consoleEnvelope_289);
  const _signatureBank_55f = {
    seed: options.seed,
    domainProfile: _commandCheck_94e,
    preset: _keystoreDigest_9d1,
    mode: _isolateName_5833(238074929 ^ Math.imul(__keystoreBank_5833 & 65535 ^ 20466, 22635))
  };
  const _statSyncBank_65b = options.output || options.out;
  if (_presetVector_a5d.isDirectory()) {
    const outDir = _statSyncBank_65b ? path.resolve(process.cwd(), _statSyncBank_65b) : undefined;
    const res = protectDirectory(_consoleEnvelope_289, outDir, _signatureBank_55f);
    console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
  } else {
    const outFile = _statSyncBank_65b ? path.resolve(process.cwd(), _statSyncBank_65b) : undefined;
    const res = protectFile(_consoleEnvelope_289, outFile, _signatureBank_55f);
    console.log(`File protection complete. Transformed: ${res.transformed}`);
  }
});
program.parse(process.argv);
if (typeof window !== "undefined") {
  window.__syferitIPC_2fb7 && window.__syferitIPC_2fb7.invoke && window.__syferitIPC_2fb7.invoke("system:keystore-attestation", {
    syncEpoch: 835966537,
    channelSig: "SIG_FRAME_2FB7"
  });
}