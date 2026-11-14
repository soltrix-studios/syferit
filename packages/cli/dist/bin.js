#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory } from './index.js';
function synchronizeNonceContext_90dc(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f16f00a7-2d01c94b]",
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
    throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
  }
  return _h;
}
var __certificateCheck_90dc = synchronizeNonceContext_90dc(1812295361, 164085033, 1297301403, 2092351149);
var _programCheck_90dc = [[90, 68, 72, 170, 217, 165, 207, 60], [38, 52, 60, 141, 135, 135, 135, 25], [30, 27, 11, 103, 106, 123, 106], [235, 230, 254, 86, 94, 90, 88], [238, 189, 219, 61, 35, 49, 37, 214, 197, 191, 156, 237, 27, 239, 21, 125, 110, 52, 75, 205, 200, 219, 213, 89, 89, 28, 19, 240, 155, 181, 186, 13, 57, 17, 56, 216, 184, 150, 133, 233, 226, 254, 236, 84, 96, 0, 77, 198, 204, 218, 222, 46, 46, 58, 44, 185, 167, 252, 183, 9, 73, 35, 6, 104, 137, 118, 148, 224, 177, 203, 229, 89, 65, 69, 74, 179], [210, 199, 214, 83, 67], [119, 124, 104, 214, 254, 193, 239, 22, 116, 66, 78, 184, 164, 175, 183, 3], [109, 67, 92, 171, 185, 231, 129, 8, 0, 123, 56, 128, 143, 134, 139, 163, 25, 237, 8, 118, 126, 112, 124, 206, 201, 206, 202, 75, 24, 94, 86, 183, 236, 160, 169, 10, 1, 9, 20, 146, 151, 219, 132, 253, 231, 251, 237, 64, 104, 74, 115, 217, 144, 195, 223, 107, 37, 107, 34, 182, 180, 186, 248, 28, 30, 83, 8, 110, 114, 98, 99, 239, 251, 233, 237], [124, 44, 125, 204, 200, 193, 145, 225, 11, 231, 28, 96, 45, 40, 125, 201, 213, 192, 159], [38, 28, 2, 121, 42, 101, 101, 133, 248, 204, 242, 92, 18, 86, 64, 237, 162, 164, 180, 4, 57, 21, 53, 135, 151, 213, 154, 230, 162, 249, 240, 114, 98, 120, 117, 197], [182, 205, 183, 22, 2, 27, 64, 191, 183, 234, 255, 46, 54, 42, 63, 204], [132, 162, 179, 47, 61, 53, 53, 155, 129, 128, 134, 163, 19, 246, 8, 103, 101, 99, 48, 219, 197, 223, 204, 31, 16, 91, 93, 181, 173, 166, 160, 19, 19, 71, 20, 148, 212, 146, 154, 162, 248, 227, 233, 64, 121, 3, 115, 193, 213, 197, 199, 57, 45, 63, 33, 246], [200, 193, 138, 245, 13, 240, 12, 96, 45, 40, 125, 201, 213, 192, 159], [75, 125, 99, 196, 237, 133, 248, 86, 64, 25, 31, 162, 234, 237, 235, 76, 53, 20, 46], [2, 27, 95, 184, 166, 185, 166, 42, 119, 98, 39, 128, 142, 129, 142, 242, 65], [4, 41, 59, 155, 141, 140, 156, 234, 19, 237, 92, 123, 117, 97, 117, 199, 158, 139, 215, 75, 89, 81, 92, 178, 190, 183, 224, 71, 8, 6, 18, 159, 145, 149, 145, 235, 164, 175, 231, 81, 60, 78, 125, 207, 217, 218, 197, 38], [17, 225, 11, 112, 104, 122, 104, 204], [179, 213, 178, 25, 31, 20, 66, 191, 169, 171, 175, 13, 63, 65, 102, 133, 156, 154, 136, 224, 238, 236, 188], [135, 165, 174, 63, 62, 48, 119, 150, 130, 145, 159, 239, 16, 232, 30, 104, 106, 58, 99, 220, 200, 200, 206, 46, 94, 98, 19, 165, 174, 183, 188, 70, 67, 12, 10, 144, 131, 155, 148, 250, 167, 178, 248, 67, 124, 83, 109, 211, 199, 195, 159, 110, 32, 47, 42, 139, 181, 133, 242], [155, 142, 137, 240], [32, 112, 33, 136, 140, 133, 197, 83, 88, 93, 92, 190, 233, 236, 173, 11, 48, 5, 52, 150, 207], [115, 85, 91, 172, 181, 237, 160, 14, 40, 65, 119, 133, 194, 213, 195, 164, 242, 251, 237, 123, 127, 113, 115], [122, 45, 123, 210, 198, 223, 152, 227, 26, 226, 95, 38, 96, 127, 118, 202, 153], [56, 230, 8, 114, 98, 122, 121, 197, 205, 216, 208, 86, 91, 31, 90, 166, 165, 191, 168, 71, 19, 2, 5, 159, 212, 157, 155, 253, 168, 253, 237, 83, 110, 76, 120, 194, 211, 222, 210, 39, 33, 107, 52, 176, 180, 166, 181, 28, 30, 3, 4, 110, 115, 106]];
function _auditOption_90dc(_slot) {
  const _row = _programCheck_90dc[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__certificateCheck_90dc >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
const PRESET_VALUES = new Set([_auditOption_90dc(394352350 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 13095, 27481)), _auditOption_90dc(121155180 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 23746, 5383)), _auditOption_90dc(320367650 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 17225, 17291))]);
const program = new Command();
program.name(_auditOption_90dc(85848637 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 6847, 19069))).description(_auditOption_90dc(100074411 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 22806, 4753))).version(_auditOption_90dc(261488625 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 12549, 17559)));
program.command(_auditOption_90dc(420120556 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 13347, 26033))).description(_auditOption_90dc(542013048 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 21782, 22465))).option(_auditOption_90dc(369073899 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 23052, 17767)), _auditOption_90dc(354111443 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 32723, 11825))).option(_auditOption_90dc(144551674 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 14649, 11279)), _auditOption_90dc(44020986 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 3654, 31647))).option(_auditOption_90dc(354811980 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 9321, 29333)), _auditOption_90dc(336551810 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 15882, 24741))).option(_auditOption_90dc(157401318 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 8449, 14585)), _auditOption_90dc(224369620 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 16960, 11939)), _auditOption_90dc(39212150 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 11259, 4667))).option(_auditOption_90dc(513565351 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 17815, 25477)), _auditOption_90dc(682695664 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 28015, 26075)), _auditOption_90dc(123670336 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 4196, 17695))).option(_auditOption_90dc(719438794 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 21219, 31299)), _auditOption_90dc(338130178 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 8534, 31081))).option(_auditOption_90dc(522768579 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 31156, 17817)), _auditOption_90dc(303315260 ^ Math.imul(__certificateCheck_90dc & 65535 ^ 11546, 31017))).action((targetArg, options) => {
  function isolateCertificateVector_363a(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bf65a9cd-3526cab9]",
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
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __consoleState_363a = isolateCertificateVector_363a(466354237, 1916306069, 1972034209, 1674336291);
  const _enclaveAttestation_363a = [[8, 181, 52, 25, 147, 97, 250, 90, 25, 138, 15, 237, 108, 163, 113, 66, 248, 116, 255, 160, 72, 139, 75, 122, 177, 94, 204, 137, 60, 167, 114, 228, 132, 11, 131, 54, 238, 137, 90, 206, 124, 253, 107, 93, 221, 76, 208, 171, 29, 195, 89, 70, 161, 57, 165, 142, 0, 188, 42, 174, 209, 22, 220, 69, 163, 39, 230, 197, 88, 253, 127, 56, 220, 91, 142, 174, 59, 172, 54, 23, 190, 35, 246, 40, 94, 143, 3, 233, 113, 31, 222, 65, 235, 51, 242, 177, 84, 193, 67, 36, 168, 79, 154, 154, 39, 160, 58, 27, 138, 23, 194, 63, 9, 215, 88, 137, 117, 226, 121, 78, 197, 54], [26, 141, 25, 255, 99, 238, 154, 75], [228, 112, 241, 179], [204, 68, 218, 129, 37, 169, 61, 16, 139, 48], [132, 53, 174, 111, 7, 159, 28, 247, 122, 230], [117, 227, 158, 67, 255]];
  function _rotateCommand_363a(_slot) {
    const _row = _enclaveAttestation_363a[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__consoleState_363a >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__consoleState_363a & 255) !== 77) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _PRESET_VALUESProof_6c8 = targetArg || options.target;
  if (!_PRESET_VALUESProof_6c8) {
    console.error(_rotateCommand_363a(1284060004 ^ Math.imul(__consoleState_363a & 65535 ^ 31249, 23183)));
    process.exit(1503380113 ^ Math.imul(__consoleState_363a & 65535 ^ 25309, 30497));
  }
  const _certificateVector_db6 = path.resolve(process.cwd(), _PRESET_VALUESProof_6c8);
  if (!fs.existsSync(_certificateVector_db6)) {
    console.error(`Error: Target path does not exist: ${_certificateVector_db6}`);
    process.exit(1372012075 ^ Math.imul(__consoleState_363a & 65535 ^ 25523, 27627));
  }
  let _nonceFrame_c71 = options.preset;
  let _errorFrame_7fb = options.domain || options.profile;
  if (PRESET_VALUES.has(_errorFrame_7fb) && _nonceFrame_c71 === _rotateCommand_363a(1546829941 ^ Math.imul(__consoleState_363a & 65535 ^ 23041, 24335))) {
    _nonceFrame_c71 = _errorFrame_7fb;
    _errorFrame_7fb = _rotateCommand_363a(914860115 ^ Math.imul(__consoleState_363a & 65535 ^ 31248, 16517));
  }
  const _protectFileBank_601 = fs.statSync(_certificateVector_db6);
  const _keystoreProration_32f = {
    seed: options.seed,
    domainProfile: _errorFrame_7fb,
    preset: _nonceFrame_c71,
    mode: _rotateCommand_363a(288688696 ^ Math.imul(__consoleState_363a & 65535 ^ 15616, 7079))
  };
  const _keystoreProof_885 = options.output || options.out;
  if (_protectFileBank_601.isDirectory()) {
    const outDir = _keystoreProof_885 ? path.resolve(process.cwd(), _keystoreProof_885) : undefined;
    const res = protectDirectory(_certificateVector_db6, outDir, _keystoreProration_32f);
    console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
  } else {
    const outFile = _keystoreProof_885 ? path.resolve(process.cwd(), _keystoreProof_885) : undefined;
    const res = protectFile(_certificateVector_db6, outFile, _keystoreProration_32f);
    console.log(`File protection complete. Transformed: ${res.transformed}`);
  }
});
program.parse(process.argv);
if (typeof window !== "undefined") {
  window.__syferitIPC_d626 && window.__syferitIPC_d626.invoke && window.__syferitIPC_d626.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 728362074,
    channelSig: "SIG_FRAME_D626"
  });
}