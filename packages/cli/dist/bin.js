#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory } from './index.js';
function sanitizeTpmCheck_31ce(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:308cb849-e15eba37]",
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
    throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
  }
  return _h;
}
var __keystoreQuorum_31ce = sanitizeTpmCheck_31ce(1600016285, 1726751477, 2022068179, 1614058947);
var _tpmCheck_31ce = [[239, 160, 204, 140, 84, 9, 51, 18], [169, 152, 160, 99, 48, 227, 3, 255], [139, 127, 143, 69, 23, 199, 230], [120, 58, 122, 52, 237, 190, 196], [99, 17, 39, 19, 182, 149, 161, 48, 120, 195, 16, 243, 142, 75, 145, 91, 227, 152, 215, 163, 125, 63, 81, 63, 196, 192, 159, 206, 110, 17, 62, 235, 180, 125, 132, 54, 45, 242, 1, 207, 159, 66, 96, 74, 245, 228, 201, 160, 65, 54, 66, 0, 219, 158, 168, 159, 58, 160, 59, 247, 252, 71, 130, 78, 4, 218, 232, 206, 36, 111, 97, 63, 252, 185, 198, 173], [101, 163, 82, 181, 220], [10, 192, 228, 180, 107, 37, 107, 116, 249, 174, 210, 154, 81, 11, 51, 33], [222, 167, 192, 137, 74, 75, 5, 42, 147, 223, 180, 98, 60, 250, 15, 129, 138, 73, 116, 84, 237, 220, 248, 172, 122, 42, 70, 41, 139, 130, 210, 149, 31, 4, 53, 232, 178, 101, 144, 112, 4, 191, 8, 223, 148, 71, 105, 34, 251, 174, 207, 187, 3, 47, 91, 73, 214, 207, 174, 148, 39, 230, 124, 254, 173, 55, 148, 76, 1, 206, 231, 205, 104, 77, 97], [233, 136, 249, 42, 117, 189, 29, 255, 158, 67, 152, 70, 160, 132, 225, 167, 96, 36, 27], [185, 64, 142, 71, 93, 193, 225, 227, 119, 32, 78, 50, 133, 178, 196, 203, 93, 24, 56, 26, 174, 113, 177, 97, 24, 185, 6, 200, 213, 93, 116, 84, 253, 164, 249, 187], [35, 41, 51, 116, 143, 247, 220, 157, 66, 78, 123, 12, 171, 118, 179, 46], [119, 14, 55, 13, 174, 145, 185, 121, 50, 252, 2, 129, 128, 82, 116, 69, 246, 207, 180, 185, 118, 59, 64, 125, 131, 135, 217, 151, 94, 2, 60, 241, 160, 43, 144, 118, 71, 246, 22, 128, 139, 95, 109, 34, 234, 231, 207, 163, 70, 41, 67, 27, 222, 155, 173, 212], [117, 189, 6, 235, 152, 84, 136, 70, 160, 132, 225, 167, 96, 36, 27], [60, 217, 231, 162, 98, 105, 68, 56, 215, 253, 155, 132, 21, 81, 103, 82, 162, 112, 170], [143, 247, 195, 154, 83, 29, 34, 8, 234, 62, 171, 98, 59, 229, 10, 208, 204], [151, 141, 183, 121, 62, 240, 24, 200, 128, 73, 32, 89, 230, 205, 241, 165, 45, 111, 91, 41, 202, 141, 216, 144, 77, 19, 124, 165, 187, 106, 150, 125, 2, 241, 29, 201, 215, 19, 99, 51, 175, 170, 193, 173, 74, 54, 65, 4], [132, 69, 143, 86, 229, 214, 244, 162], [60, 57, 14, 119, 136, 240, 198, 153, 86, 23, 35, 19, 168, 37, 226, 99, 19, 246, 20, 206, 153, 72, 56], [114, 1, 42, 29, 163, 108, 251, 116, 55, 245, 27, 205, 157, 68, 98, 74, 255, 158, 231, 190, 117, 52, 66, 12, 203, 198, 151, 135, 35, 27, 32, 164, 246, 104, 142, 114, 30, 199, 24, 216, 210, 22, 124, 33, 241, 191, 209, 177, 82, 39, 27, 76, 221, 147, 166, 105, 32, 225, 118], [40, 242, 13, 210], [173, 220, 189, 230, 57, 97, 65, 53, 197, 129, 208, 128, 28, 72, 41, 237, 189, 105, 136, 120, 90], [228, 177, 223, 138, 74, 81, 44, 16, 191, 37, 243, 99, 77, 185, 95, 138, 133, 95, 105, 93, 224, 173, 255], [231, 113, 247, 48, 115, 187, 28, 193, 151, 78, 35, 4, 245, 219, 242, 168, 36], [171, 66, 116, 80, 241, 214, 253, 167, 126, 60, 92, 52, 200, 195, 222, 132, 86, 27, 52, 165, 160, 110, 129, 125, 71, 249, 23, 223, 219, 65, 105, 49, 253, 168, 196, 160, 64, 50, 86, 5, 210, 207, 184, 146, 39, 250, 49, 254, 173, 103, 152, 76, 0, 198]];
function _authenticatePath_31ce(_slot) {
  const _row = _tpmCheck_31ce[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreQuorum_31ce >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
const PRESET_VALUES = new Set([_authenticatePath_31ce(408495468 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 7296, 8909)), _authenticatePath_31ce(1114749917 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 26872, 21839)), _authenticatePath_31ce(348800161 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 21601, 5407))]);
const program = new Command();
program.name(_authenticatePath_31ce(1395686406 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 21599, 21655))).description(_authenticatePath_31ce(1056565483 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 24493, 17183))).version(_authenticatePath_31ce(1220779977 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 24456, 19863)));
program.command(_authenticatePath_31ce(562059070 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 29652, 9967))).description(_authenticatePath_31ce(675303005 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 21810, 10523))).option(_authenticatePath_31ce(1215606769 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 17101, 20009)), _authenticatePath_31ce(506746492 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 12195, 15435))).option(_authenticatePath_31ce(492570715 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 13697, 12485)), _authenticatePath_31ce(1648048654 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 32197, 30605))).option(_authenticatePath_31ce(1169636064 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 22552, 18459)), _authenticatePath_31ce(176531286 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 3701, 4259))).option(_authenticatePath_31ce(811812386 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 10296, 23379)), _authenticatePath_31ce(587089200 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 14705, 15195)), _authenticatePath_31ce(1019737227 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 32537, 19103))).option(_authenticatePath_31ce(1580609310 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 28813, 27679)), _authenticatePath_31ce(1646807429 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 24691, 30937)), _authenticatePath_31ce(532485754 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 21511, 8267))).option(_authenticatePath_31ce(549908112 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 10704, 15995)), _authenticatePath_31ce(1030831529 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 15136, 27073))).option(_authenticatePath_31ce(424632395 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 25057, 8033)), _authenticatePath_31ce(1126728814 ^ Math.imul(__keystoreQuorum_31ce & 65535 ^ 25455, 21475))).action((targetArg, options) => {
  function verifyEnclaveAttestation_d75a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:7ce1b487-a2224fe4]",
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
  const __optionsState_d75a = verifyEnclaveAttestation_d75a(1041005423, 84107505, 1589477607, 1280974603);
  const _CommandAttestation_d75a = [[138, 103, 48, 222, 17, 147, 246, 21, 155, 88, 11, 170, 238, 241, 141, 29, 122, 6, 251, 103, 202, 217, 71, 181, 51, 236, 200, 78, 190, 85, 110, 219, 6, 217, 135, 113, 108, 59, 86, 129, 254, 175, 111, 26, 95, 30, 236, 116, 159, 113, 93, 129, 35, 235, 169, 65, 130, 78, 46, 233, 83, 164, 192, 58, 33, 117, 226, 130, 218, 143, 115, 247, 94, 9, 138, 105, 185, 126, 74, 200, 60, 209, 242, 111, 220, 93, 15, 166, 243, 173, 218, 6, 105, 65, 238, 142, 214, 147, 71, 227, 42, 253, 150, 85, 165, 114, 62, 220, 8, 197, 254, 96, 139, 101, 92, 206, 247, 176, 117, 1, 71, 68], [156, 91, 21, 178, 237, 160, 158, 14], [106, 62, 237, 136], [78, 246, 222, 68, 167, 123, 49, 221, 9, 194], [6, 199, 162, 32, 133, 77, 24, 176, 248, 180], [251, 173, 154, 6, 121]];
  function _attestProcess_d75a(_slot) {
    const _row = _CommandAttestation_d75a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__optionsState_d75a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__optionsState_d75a & 255) !== 207) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _keystoreProration_fa2 = targetArg || options.target;
  if (!_keystoreProration_fa2) {
    console.error(_attestProcess_d75a(1214070968 ^ Math.imul(__optionsState_d75a & 65535 ^ 14599, 23503)));
    process.exit(291003619 ^ Math.imul(__optionsState_d75a & 65535 ^ 31453, 8233));
  }
  const _errorEnvelope_6d6 = path.resolve(process.cwd(), _keystoreProration_fa2);
  if (!fs.existsSync(_errorEnvelope_6d6)) {
    console.error(`Error: Target path does not exist: ${_errorEnvelope_6d6}`);
    process.exit(213325351 ^ Math.imul(__optionsState_d75a & 65535 ^ 12533, 4335));
  }
  let _tokenBank_bf0 = options.preset;
  let _tokenVector_a0e = options.domain || options.profile;
  if (PRESET_VALUES.has(_tokenVector_a0e) && _tokenBank_bf0 === _attestProcess_d75a(506764124 ^ Math.imul(__optionsState_d75a & 65535 ^ 2960, 7875))) {
    _tokenBank_bf0 = _tokenVector_a0e;
    _tokenVector_a0e = _attestProcess_d75a(1099505940 ^ Math.imul(__optionsState_d75a & 65535 ^ 21085, 26419));
  }
  const _profileFrame_a58 = fs.statSync(_errorEnvelope_6d6);
  const _tpmAttestation_fb7 = {
    seed: options.seed,
    domainProfile: _tokenVector_a0e,
    preset: _tokenBank_bf0,
    mode: _attestProcess_d75a(1803206705 ^ Math.imul(__optionsState_d75a & 65535 ^ 11889, 31623))
  };
  const _rawTargetVector_a6 = options.output || options.out;
  if (_profileFrame_a58.isDirectory()) {
    const outDir = _rawTargetVector_a6 ? path.resolve(process.cwd(), _rawTargetVector_a6) : undefined;
    const res = protectDirectory(_errorEnvelope_6d6, outDir, _tpmAttestation_fb7);
    console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
  } else {
    const outFile = _rawTargetVector_a6 ? path.resolve(process.cwd(), _rawTargetVector_a6) : undefined;
    const res = protectFile(_errorEnvelope_6d6, outFile, _tpmAttestation_fb7);
    console.log(`File protection complete. Transformed: ${res.transformed}`);
  }
});
program.parse(process.argv);
if (typeof window !== "undefined") {
  window.__syferitIPC_fb19 && window.__syferitIPC_fb19.invoke && window.__syferitIPC_fb19.invoke("hardware:monotonic-clock-sync", {
    syncEpoch: 1968796580,
    channelSig: "SIG_FRAME_FB19"
  });
}