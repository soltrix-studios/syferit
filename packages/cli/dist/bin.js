#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory } from './index.js';
function isolateKeystoreBank_8803(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:36e64131-27c40c3f]",
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
var __keystoreBank_8803 = isolateKeystoreBank_8803(196151977, 534209685, 1188274427, 301191323);
var _signatureAttestation_8803 = [[79, 85, 155, 102, 180, 212, 252, 248], [9, 39, 109, 73, 144, 180, 214, 165], [235, 10, 60, 59, 119, 138, 181], [216, 233, 15, 18, 77, 77, 137], [131, 204, 232, 249, 22, 32, 86, 10, 216, 142, 207, 169, 238, 30, 38, 49, 67, 37, 152, 137, 221, 234, 6, 229, 36, 13, 32, 52, 142, 164, 233, 193, 20, 32, 75, 28, 77, 135, 182, 181, 255, 15, 63, 16, 85, 49, 190, 138, 161, 203, 13, 234, 59, 75, 127, 69, 154, 237, 196, 205, 92, 50, 85, 36, 100, 135, 167, 164, 132, 218, 22, 5, 92, 116, 153, 119], [197, 244, 135, 239, 188], [106, 141, 183, 146, 203, 240, 24, 90, 25, 83, 97, 124, 177, 222, 224, 255], [126, 84, 141, 103, 170, 152, 208, 204, 51, 108, 73, 92, 156, 137, 218, 231, 234, 26, 57, 58, 77, 111, 141, 138, 218, 249, 27, 247, 107, 81, 103, 115, 255, 183, 248, 198, 18, 54, 69, 86, 100, 204, 181, 161, 244, 244, 60, 4, 91, 125, 130, 149, 227, 220, 238, 175, 54, 28, 115, 74, 135, 181, 137, 216, 13, 68, 89, 34, 97, 157, 178, 171, 200, 254, 28], [73, 61, 14, 16, 213, 240, 194, 165, 254, 22, 47, 44, 0, 57, 174, 141, 192, 241, 76], [217, 15, 51, 61, 61, 118, 180, 201, 215, 255, 3, 24, 101, 69, 113, 49, 189, 215, 229, 192, 14, 38, 68, 75, 120, 198, 203, 162, 181, 10, 33, 14, 93, 107, 132, 129], [131, 252, 64, 90, 111, 10, 111, 123, 162, 155, 168, 210, 11, 59, 64, 8], [151, 221, 226, 235, 14, 34, 68, 71, 146, 143, 215, 231, 224, 1, 57, 43, 86, 124, 193, 159, 214, 232, 29, 163, 99, 84, 108, 113, 190, 177, 241, 223, 0, 120, 69, 80, 39, 133, 171, 254, 235, 236, 56, 4, 74, 52, 130, 141, 166, 218, 246, 253, 62, 72, 112, 10], [213, 240, 217, 177, 248, 1, 63, 44, 0, 57, 174, 141, 192, 241, 76], [92, 110, 178, 136, 194, 182, 9, 18, 55, 10, 46, 126, 245, 158, 186, 136, 2, 39, 95], [111, 10, 112, 124, 179, 200, 241, 214, 74, 115, 88, 68, 155, 144, 217, 190, 172], [55, 62, 74, 71, 158, 131, 205, 174, 224, 26, 109, 55, 70, 126, 132, 131, 141, 188, 6, 247, 42, 94, 109, 118, 173, 160, 177, 139, 27, 57, 67, 91, 98, 130, 160, 183, 183, 160, 54, 21, 15, 121, 140, 131, 170, 197, 244, 226], [228, 16, 56, 60, 69, 107, 187, 136], [156, 230, 67, 93, 104, 7, 115, 99, 182, 216, 254, 201, 8, 114, 23, 73, 115, 137, 217, 164, 249, 31, 109], [146, 212, 249, 195, 3, 33, 8, 82, 151, 128, 200, 163, 253, 25, 49, 44, 95, 43, 148, 128, 213, 249, 17, 234, 43, 19, 36, 105, 131, 166, 211, 130, 86, 61, 93, 44, 126, 138, 171, 190, 178, 163, 47, 15, 81, 98, 130, 151, 178, 210, 168, 178, 61, 94, 117, 79, 128, 180, 133], [136, 129, 216, 180], [13, 97, 242, 204, 153, 180, 22, 239, 37, 76, 111, 122, 252, 253, 254, 199, 29, 52, 71, 82, 58], [4, 70, 106, 112, 170, 158, 241, 202, 31, 114, 6, 73, 45, 198, 146, 224, 229, 8, 60, 7, 64, 98, 130], [71, 60, 4, 22, 211, 206, 207, 175, 247, 19, 112, 98, 85, 110, 129, 150, 132], [203, 17, 57, 62, 81, 101, 136, 129, 222, 239, 1, 234, 40, 16, 107, 98, 182, 168, 249, 139, 0, 61, 84, 91, 39, 138, 170, 161, 187, 242, 60, 23, 93, 123, 137, 142, 160, 193, 227, 227, 50, 28, 101, 76, 135, 169, 196, 216, 13, 20, 85, 34, 96, 149]];
function _authenticateRawTarget_8803(_slot) {
  const _row = _signatureAttestation_8803[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__keystoreBank_8803 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
const PRESET_VALUES = new Set([_authenticateRawTarget_8803(1145909166 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 14566, 22739)), _authenticateRawTarget_8803(501524271 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 4462, 8255)), _authenticateRawTarget_8803(413058732 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 16894, 8503))]);
const program = new Command();
program.name(_authenticateRawTarget_8803(1203352378 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 24411, 28767))).description(_authenticateRawTarget_8803(705524234 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 32530, 21009))).version(_authenticateRawTarget_8803(411006606 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 22181, 9411)));
program.command(_authenticateRawTarget_8803(1221744927 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 18833, 26269))).description(_authenticateRawTarget_8803(748151088 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 31069, 21911))).option(_authenticateRawTarget_8803(658369462 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 5278, 11055)), _authenticateRawTarget_8803(744719778 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 30009, 21231))).option(_authenticateRawTarget_8803(562180292 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 20154, 12301)), _authenticateRawTarget_8803(379711018 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 5611, 6343))).option(_authenticateRawTarget_8803(1288625147 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 12911, 24397)), _authenticateRawTarget_8803(1921457218 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 5595, 32089))).option(_authenticateRawTarget_8803(234168002 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 26968, 6123)), _authenticateRawTarget_8803(1327094492 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 1779, 20669)), _authenticateRawTarget_8803(288337358 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 30082, 8177))).option(_authenticateRawTarget_8803(889925578 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 10807, 16241)), _authenticateRawTarget_8803(1761233486 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 1760, 27425)), _authenticateRawTarget_8803(523310870 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 14287, 10023))).option(_authenticateRawTarget_8803(998510427 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 17745, 21035)), _authenticateRawTarget_8803(439994776 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 31625, 12665))).option(_authenticateRawTarget_8803(700067925 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 10781, 12771)), _authenticateRawTarget_8803(926539010 ^ Math.imul(__keystoreBank_8803 & 65535 ^ 14809, 18289))).action((targetArg, options) => {
  function sanitizeVersion_f8dd(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1ffc5fb3-7aae55e6]",
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
  const __commandState_f8dd = sanitizeVersion_f8dd(2047367421, 341154231, 1951853103, 362426689);
  const _pathDigest_f8dd = [[216, 44, 92, 157, 67, 200, 226, 214, 169, 227, 55, 105, 60, 58, 153, 222, 136, 205, 23, 36, 248, 98, 115, 246, 97, 183, 212, 13, 204, 30, 26, 152, 84, 146, 171, 178, 190, 224, 66, 66, 12, 84, 147, 217, 141, 213, 248, 55, 173, 58, 113, 194, 81, 144, 221, 2, 208, 21, 50, 42, 97, 111, 244, 249, 243, 190, 14, 65, 8, 84, 103, 180, 108, 178, 182, 42, 235, 53, 94, 139, 78, 154, 158, 172, 238, 230, 59, 101, 33, 118, 198, 197, 155, 138, 26, 77, 4, 88, 107, 160, 120, 166, 130, 22, 215, 9, 66, 159, 90, 142, 234, 163, 185, 174, 112, 13, 5, 75, 129, 194, 149, 159], [170, 226, 33, 115, 51, 121, 130, 207], [148, 201, 25, 79], [124, 191, 242, 5, 213, 2, 69, 156, 91, 155], [84, 156, 182, 227, 183, 246, 36, 115, 42, 127], [37, 116, 134, 199, 143]];
  function _attestSignatureCheck_f8dd(_slot) {
    const _row = _pathDigest_f8dd[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__commandState_f8dd >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__commandState_f8dd & 255) !== 157) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _tpmCheck_241 = targetArg || options.target;
  if (!_tpmCheck_241) {
    console.error(_attestSignatureCheck_f8dd(27708990 ^ Math.imul(__commandState_f8dd & 65535 ^ 10531, 6465)));
    process.exit(248348377 ^ Math.imul(__commandState_f8dd & 65535 ^ 29557, 12951));
  }
  const _profileBank_542 = path.resolve(process.cwd(), _tpmCheck_241);
  if (!fs.existsSync(_profileBank_542)) {
    console.error(`Error: Target path does not exist: ${_profileBank_542}`);
    process.exit(128854274 ^ Math.imul(__commandState_f8dd & 65535 ^ 9376, 17215));
  }
  let _actionEnvelope_fa9 = options.preset;
  let _processCheck_aa8 = options.domain || options.profile;
  if (PRESET_VALUES.has(_processCheck_aa8) && _actionEnvelope_fa9 === _attestSignatureCheck_f8dd(835969777 ^ Math.imul(__commandState_f8dd & 65535 ^ 17549, 26111))) {
    _actionEnvelope_fa9 = _processCheck_aa8;
    _processCheck_aa8 = _attestSignatureCheck_f8dd(155728208 ^ Math.imul(__commandState_f8dd & 65535 ^ 30071, 7909));
  }
  const _exitProof_481 = fs.statSync(_profileBank_542);
  const _commandBank_205 = {
    seed: options.seed,
    domainProfile: _processCheck_aa8,
    preset: _actionEnvelope_fa9,
    mode: _attestSignatureCheck_f8dd(567367709 ^ Math.imul(__commandState_f8dd & 65535 ^ 25971, 23849))
  };
  const _tokenCheck_9e8 = options.output || options.out;
  if (_exitProof_481.isDirectory()) {
    const outDir = _tokenCheck_9e8 ? path.resolve(process.cwd(), _tokenCheck_9e8) : undefined;
    const res = protectDirectory(_profileBank_542, outDir, _commandBank_205);
    console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
  } else {
    const outFile = _tokenCheck_9e8 ? path.resolve(process.cwd(), _tokenCheck_9e8) : undefined;
    const res = protectFile(_profileBank_542, outFile, _commandBank_205);
    console.log(`File protection complete. Transformed: ${res.transformed}`);
  }
});
program.parse(process.argv);
if (typeof window !== "undefined") {
  window.__syferitIPC_7ae1 && window.__syferitIPC_7ae1.invoke && window.__syferitIPC_7ae1.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 1670195704,
    channelSig: "SIG_FRAME_7AE1"
  });
}