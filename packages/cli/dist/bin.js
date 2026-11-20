#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory, printSyferitBanner, loadSyferitConfig } from './index.js';
import { notifyIfUpdateAvailable, runUpgrade, cleanupOldBinaryOnWindows, SYFERIT_VERSION } from './updater.js';
import { runSetup, handleNoArgsInteractiveLaunch } from './setup.js';
function rotateCertificateProof_632b(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:66b66c61-a9f77b93]",
    _tokVec = [_tok0, _tok1, _tok2, _tok3],
    _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
  const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
  if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
  if ((_h >>> 4 & 15) !== 8) {
    _h = (_h ^ 3735884599) >>> 0;
    throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
  }
  return _h;
}
var __CommandState_632b = rotateCertificateProof_632b(1958417011, 363474021, 1241570123, 1956214783);
function _auditFileConfig_rns_632b(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 233,
    _r1 = _u % 227,
    _r2 = _u % 229,
    _r3 = _u % 199,
    _r4 = _u % 239;
  let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
    _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
    _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
    _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
  for (let _rnd = 0; _rnd < 2; _rnd++) {
    _v0 = _v0 + _v1 >>> 0;
    _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
    _v2 = _v2 + _v3 >>> 0;
    _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
    _v0 = _v0 + _v1 >>> 0;
    _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
    _v2 = _v2 + _v3 >>> 0;
    _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
    if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
  }
  return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
}
var _tpmCheck_632b = [[240, 246, 253, 112, 115, 119, 66, 214], [192, 198, 179, 39, 89, 85, 48, 179], [160, 173, 158, 1, 12, 21, 23], [132, 195, 38, 252, 243, 228, 241, 85, 111, 116, 30, 199, 192, 222], [100, 111, 86, 215, 217, 195, 176], [111, 66, 51, 178, 162, 166, 157, 75, 18, 81, 83, 207, 194, 215, 67, 221, 223, 166, 228, 117, 120, 63, 124, 213, 192, 210, 163, 40, 36, 34, 12, 134, 178, 175, 213, 81, 80, 60, 240, 102, 102, 108, 113, 246, 251, 183, 247, 86, 69, 88, 49, 162, 172, 159, 154, 52, 48, 54, 77, 171, 141, 129, 100, 237, 15, 30, 181, 82, 126, 104, 64, 197, 193, 131, 223, 70, 24, 100, 62, 191, 184, 185, 140, 31, 64, 12, 13, 142, 144, 154, 98, 252], [17, 18, 21, 136, 144, 151, 122, 176, 210, 252, 195, 86, 122, 121, 66, 229], [199, 245, 239, 77, 99, 57, 114, 230, 250, 141, 171, 38, 37, 40, 56, 253, 179, 187, 155, 16, 4, 14, 239, 96, 147, 152, 121, 237, 190, 177, 249, 99, 117, 8, 126, 147, 226, 153, 163, 58, 39, 35, 19, 201, 132, 148, 149, 30, 2, 28, 224, 127, 121, 37, 3, 196, 240, 249, 151, 74, 87, 92, 42, 163, 178, 172, 188, 65, 42, 43, 28, 129, 139, 142, 115, 224, 237, 239, 187, 105, 121, 53, 78, 145, 204, 192, 175, 32, 30, 82, 37, 249, 182, 184, 153, 8, 5, 17, 16, 115, 131], [134, 222, 232, 102, 18, 19, 44, 187, 161, 181, 137, 26, 71, 90, 240, 99, 143, 146, 42], [128, 174, 157, 3, 68, 23, 18, 223, 158, 158, 125, 246, 172, 228, 215, 7, 68, 118, 75, 222, 215, 199, 162, 61, 49, 103, 21, 140, 252, 171, 135, 24, 4, 10, 234, 127], [216, 155, 34, 176, 164, 165, 205, 81, 105, 60, 10, 200, 208, 196, 162, 114], [94, 124, 64, 193, 199, 195, 166, 61, 43, 46, 53, 253, 185, 160, 155, 1, 31, 29, 163, 117, 159, 137, 127, 185, 186, 245, 206, 75, 71, 80, 83, 181, 201, 153, 167, 58, 110, 36, 9, 196, 146, 141, 154, 30, 19, 85, 224, 103, 111, 123, 84, 215, 247, 233, 210, 16], [18, 19, 55, 175, 167, 162, 153, 26, 71, 90, 240, 99, 143, 146, 42], [37, 15, 20, 158, 139, 215, 119, 252, 254, 171, 136, 72, 12, 63, 20, 150, 219, 198, 185], [164, 165, 210, 86, 120, 111, 83, 204, 145, 140, 186, 62, 32, 55, 59, 148, 231], [254, 223, 168, 61, 39, 34, 47, 180, 185, 187, 207, 29, 15, 31, 230, 105, 196, 221, 100, 237, 243, 255, 207, 76, 84, 65, 19, 225, 210, 216, 161, 49, 43, 35, 2, 141, 206, 193, 150, 28, 14, 28, 226, 100, 103, 37, 3, 202, 236, 189, 193, 11, 31, 64, 62, 172, 168, 177, 170, 12, 119, 43, 29, 134, 206, 197, 99, 236, 228, 224, 238, 113, 98, 47, 15, 147, 194, 200, 177, 33, 91, 83, 50, 189, 240, 248], [254, 162, 192, 78, 74, 75, 240, 112, 148, 156, 125, 250, 234, 174, 148, 90, 81, 77, 90, 215, 219, 211, 238], [188, 152, 124, 242, 229, 229, 133, 67, 73, 124, 77, 210, 219, 221, 172, 61, 49, 103, 17, 145, 179, 189, 156, 27, 21, 85, 169, 120, 101, 98, 110, 179, 184, 241, 216, 93, 88, 78, 38, 175, 236, 159, 170, 62, 55, 38, 31, 134, 156, 158, 45, 163, 27, 26, 248, 126, 126, 104, 9, 131, 192, 198, 219, 94, 77, 91, 37, 233, 236, 233, 150, 6, 1, 44, 91, 210], [48, 120, 26, 152, 156, 157, 174, 35, 40, 37, 55, 142, 249, 228, 150, 27, 0, 13, 239, 102, 63], [3, 45, 50, 188, 165, 245, 137, 30, 24, 73, 174, 117, 210, 221, 58, 180, 226, 227, 196, 75, 79, 73, 90], [74, 21, 172, 34, 214, 215, 103, 243, 234, 234, 136, 22, 80, 71, 89, 218, 137], [200, 238, 209, 66, 82, 114, 80, 213, 221, 192, 185, 38, 43, 103, 3, 150, 181, 183, 145, 87, 3, 10, 236, 111, 36, 101, 114, 237, 184, 229, 212, 67, 94, 68, 33, 178, 163, 214, 187, 55, 49, 115, 29, 128, 132, 158, 108, 236, 14, 11, 253, 126, 99, 98], [156, 213, 230, 108, 104, 105, 59, 152, 186, 180, 135, 16, 8, 76, 186, 120, 96, 116, 110, 249, 231, 250, 221, 30, 7, 6, 124], [147, 173, 140, 29, 31, 13, 230, 37, 152, 148, 123, 252, 178, 254, 217, 13, 64, 74, 83, 165, 223, 203, 243, 37, 47, 57, 19, 140, 144, 143, 136, 93, 16, 7, 224, 124, 42, 121, 81, 202, 234, 248, 212, 77, 91, 94, 37, 237, 238, 160, 241, 6, 116, 121, 94, 144, 206, 155, 98, 231, 230, 238, 233, 61, 52, 63, 1, 220, 195, 199, 237, 47, 77, 31, 126], [214, 215, 112, 228, 246, 163, 218, 95, 77], [112, 109, 92, 205, 221, 214, 186, 111, 63, 47, 8, 128, 180, 251, 147, 30, 28, 10, 250, 43, 115, 108, 104, 243, 252, 183, 211, 86, 12, 91, 55, 168, 180, 218, 186, 47, 49, 55, 77, 152, 129, 147, 105, 236, 9, 15, 181, 122, 127, 107, 64, 205, 221, 202, 211, 88, 24, 86, 63, 170, 236, 173, 140, 11, 5, 44], [104, 53, 114, 192, 244, 245, 131, 1, 4, 9, 242], [57, 28, 243, 117, 140, 152, 100, 234, 178, 208, 248, 110, 111, 108, 31, 163, 219, 215, 189, 48, 60, 109, 6, 135, 134, 193, 139, 24, 4, 88, 233, 120, 102, 108, 3, 213, 236, 242, 208, 75, 87, 66, 56, 237, 169, 176, 171, 17, 47, 45], [230, 224, 193, 94], [247, 193, 168, 46, 60, 34, 65, 130, 252, 168, 129, 22, 2, 27, 236, 121, 36, 112, 100, 249, 253, 229, 216, 71, 2, 72, 42, 169, 166, 214, 190, 117, 62, 32, 2, 129, 200, 142, 111, 163, 8, 19, 240, 55, 115, 122, 91, 217, 193, 205, 201, 31, 92, 94, 35, 182, 175, 191, 138, 21, 25], [244, 190, 222, 84, 64, 65, 224, 103, 115, 99, 127], [177, 139, 114, 235, 229, 227, 194, 89, 67, 5, 90, 185, 211, 202, 167, 60, 32, 42, 71, 154, 155, 135, 158, 15, 31, 1, 161, 114, 101, 103, 69, 204, 249, 179, 221, 74, 93, 95], [80, 71, 72, 203, 199], [1, 41, 18, 151, 189, 183, 153, 87, 4, 7, 236, 43, 119, 119, 124, 241, 252, 246, 221, 92, 66, 78, 101, 148, 185, 217, 188, 41, 61, 39, 77, 141, 129, 137, 96, 241, 5, 91, 225, 120, 48, 113, 6, 133, 215, 218, 219, 90, 74, 94, 37, 252, 174, 162, 139, 71, 1, 49, 29, 219, 134, 150, 106, 230, 251, 243, 196, 81, 60, 114, 65, 151, 217, 193, 233, 50, 43, 54, 47, 255, 171, 174, 130, 7, 9, 6, 165, 87, 65, 171, 81], [64, 21, 170, 40, 44, 45, 99, 249, 230], [193, 250, 194, 93, 6, 76, 81, 181, 223, 203, 178, 54, 58, 36, 17, 140, 194, 130, 148, 19, 16, 28, 253, 124, 107, 125, 74, 202, 240, 189, 199, 75, 93, 92, 59, 185, 230, 164, 177, 5, 122, 43, 22, 146, 135, 158, 115, 236, 240, 161, 203, 92, 66, 93, 15, 208, 223, 221, 172, 40, 95, 73, 62, 186, 179, 189, 135, 20], [194, 198, 183, 32, 42, 46, 1], [159, 179, 144, 20, 27, 79, 239, 100, 118, 35, 124, 241, 252, 183, 216, 93, 95, 95, 36, 171, 172, 159, 173, 51, 49, 115, 1, 142, 156, 130, 114, 247, 92, 40, 236, 113, 117, 125, 64, 223, 132, 209, 216, 83, 93, 86, 34, 182, 236, 184, 128, 6, 13, 51, 28, 136, 135, 159, 116], [44, 45, 121, 244, 240, 247, 197], [105, 75, 83, 184, 154, 218, 187, 48, 45, 38, 71, 128, 132, 193, 154, 93, 24, 16, 248, 116, 120, 41, 85, 192, 236, 238, 222, 86, 92, 17, 34, 190, 230, 164, 169, 0, 51, 53, 18, 151, 130, 136, 39, 254, 235, 245, 243, 114, 99, 97, 15, 216, 196, 218, 183, 36, 82, 81, 62, 183, 181]];
function _sanitizeRawTarget_632b(_slot) {
  const _row = _tpmCheck_632b[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__CommandState_632b >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
cleanupOldBinaryOnWindows();
const PRESET_VALUES = new Set([_sanitizeRawTarget_632b(-1646237589 ^ _auditFileConfig_rns_632b(__CommandState_632b, 19415)), _sanitizeRawTarget_632b(664152282 ^ _auditFileConfig_rns_632b(__CommandState_632b, 17641)), _sanitizeRawTarget_632b(-1676645151 ^ _auditFileConfig_rns_632b(__CommandState_632b, 14193)), _sanitizeRawTarget_632b(-1296633160 ^ _auditFileConfig_rns_632b(__CommandState_632b, 26829))]);
const program = new Command();
program.name(_sanitizeRawTarget_632b(186556037 ^ _auditFileConfig_rns_632b(__CommandState_632b, 765))).description(_sanitizeRawTarget_632b(-232461560 ^ _auditFileConfig_rns_632b(__CommandState_632b, 19507))).version(SYFERIT_VERSION);
program.command(_sanitizeRawTarget_632b(-1073602921 ^ _auditFileConfig_rns_632b(__CommandState_632b, 26195))).description(_sanitizeRawTarget_632b(-1209073054 ^ _auditFileConfig_rns_632b(__CommandState_632b, 10369))).option(_sanitizeRawTarget_632b(-378809567 ^ _auditFileConfig_rns_632b(__CommandState_632b, 12337)), _sanitizeRawTarget_632b(914944934 ^ _auditFileConfig_rns_632b(__CommandState_632b, 16605))).option(_sanitizeRawTarget_632b(-446999969 ^ _auditFileConfig_rns_632b(__CommandState_632b, 2997)), _sanitizeRawTarget_632b(455701304 ^ _auditFileConfig_rns_632b(__CommandState_632b, 3045))).option(_sanitizeRawTarget_632b(-526285397 ^ _auditFileConfig_rns_632b(__CommandState_632b, 16565)), _sanitizeRawTarget_632b(-619064438 ^ _auditFileConfig_rns_632b(__CommandState_632b, 23477))).option(_sanitizeRawTarget_632b(1549317363 ^ _auditFileConfig_rns_632b(__CommandState_632b, 28883)), _sanitizeRawTarget_632b(-1039038284 ^ _auditFileConfig_rns_632b(__CommandState_632b, 19517))).option(_sanitizeRawTarget_632b(-1185010415 ^ _auditFileConfig_rns_632b(__CommandState_632b, 29929)), _sanitizeRawTarget_632b(491686064 ^ _auditFileConfig_rns_632b(__CommandState_632b, 13667))).option(_sanitizeRawTarget_632b(648628571 ^ _auditFileConfig_rns_632b(__CommandState_632b, 12767)), _sanitizeRawTarget_632b(-1210608804 ^ _auditFileConfig_rns_632b(__CommandState_632b, 31567))).option(_sanitizeRawTarget_632b(-1327438139 ^ _auditFileConfig_rns_632b(__CommandState_632b, 7623)), _sanitizeRawTarget_632b(-2139294046 ^ _auditFileConfig_rns_632b(__CommandState_632b, 21881))).option(_sanitizeRawTarget_632b(1763648177 ^ _auditFileConfig_rns_632b(__CommandState_632b, 16755)), _sanitizeRawTarget_632b(465752498 ^ _auditFileConfig_rns_632b(__CommandState_632b, 8039))).option(_sanitizeRawTarget_632b(-733208027 ^ _auditFileConfig_rns_632b(__CommandState_632b, 13189)), _sanitizeRawTarget_632b(532882090 ^ _auditFileConfig_rns_632b(__CommandState_632b, 4109))).option(_sanitizeRawTarget_632b(-2069351919 ^ _auditFileConfig_rns_632b(__CommandState_632b, 28083)), _sanitizeRawTarget_632b(-1971172050 ^ _auditFileConfig_rns_632b(__CommandState_632b, 9095))).action((targetArg, options) => {
  function attestSYFERIT_VERSION_81fe(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:a60cd9b4-a39860d3]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3],
      _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
    const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
    if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
    if ((_h >>> 4 & 15) !== 2) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __quorumDigest_81fe = attestSYFERIT_VERSION_81fe(162732955, 769985971, 1526713669, 647493887);
  function _attestProtectFile_rns_81fe(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 211,
      _r2 = _u % 241,
      _r3 = _u % 197,
      _r4 = _u % 199;
    let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
      _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
      _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
      _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
    for (let _rnd = 0; _rnd < 2; _rnd++) {
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
      if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
    }
    return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
  }
  function _rotateAction_vm_81fe(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 142) {
        _stk.push((__quorumDigest_81fe >>> 0) % _a ^ _b);
      } else if (_op === 211) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 50) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 96) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _nonceBank_81fe = [[103, 227, 4, 130, 196, 31, 42, 209, 38, 220, 255, 102, 187, 109, 65, 217, 23, 130, 175, 91, 127, 85, 59, 241, 238, 104, 156, 2, 75, 233, 162, 159, 171, 93, 115, 173, 57, 183, 138, 69, 131, 43, 91, 214, 10, 130, 160, 48, 50, 245, 9, 253, 214, 103, 149, 5, 95, 202, 250, 37, 230, 88, 12, 254, 76, 241, 214, 94, 143, 3, 47, 179, 227, 141, 254, 37, 108, 226, 6, 140, 209, 85, 38, 83, 105, 209, 243, 98, 174, 41, 14, 202, 28, 253, 162, 74, 123, 23, 51, 191, 255, 113, 202, 17, 88, 246, 10, 144, 221, 89, 50, 164, 38, 225, 136, 50, 130, 60, 73, 197, 26, 192], [47, 215, 233, 118, 190, 36, 74, 194], [31, 186, 161, 68], [249, 97, 151, 56, 64, 250, 28, 148], [197, 68, 107, 242], [171, 56, 64, 194, 26, 189, 183, 83, 108, 28], [68, 29, 45, 230, 198, 118, 134, 127], [109, 245, 11, 148, 220, 70, 104, 224], [25, 210, 247, 101, 174, 40, 86, 137], [101, 254, 227, 58, 3, 114, 87, 206, 151, 6, 235, 98, 43, 154, 127, 246, 191, 46, 19, 138, 83, 194, 167, 30, 231, 86, 59, 178, 123, 234, 207, 70, 15, 126, 99, 218, 163, 18, 247, 110, 55, 166, 139, 2, 203, 58, 31, 150, 95, 206, 179, 42, 243, 98, 71, 190, 135, 246, 219, 82, 27, 138, 111, 230, 175, 30, 3, 122, 67, 178, 151, 14, 215, 70, 43, 162, 107, 218, 191, 54], [180, 35, 232, 95, 40, 151, 124, 243, 188, 43, 16, 135, 80, 191, 164, 27, 228, 83, 56, 175, 120, 231, 204, 67, 12, 123, 96, 215, 160, 15, 244, 107, 52, 163, 136, 255, 200, 55, 28, 147, 92, 203, 176, 39, 240, 95, 68, 187, 132, 243, 216, 79, 24, 135, 108, 227, 172, 27, 0, 119, 64, 175, 148, 11, 212, 67, 40, 159, 104, 215, 188, 51, 252, 107, 80, 199, 144, 255, 228, 81], [253, 90, 116, 169, 31, 201, 207], [150, 44, 64, 205, 23, 143, 163, 89], [80, 25, 62, 190, 231, 99, 143], [34, 183, 92, 243, 188, 43, 16, 135, 80, 191, 164, 27, 228, 83, 56, 175, 120, 231, 204, 67, 12, 123, 96, 215, 160, 15, 244, 107, 52, 163, 136, 255, 200, 55, 28, 147, 92, 203, 176, 39, 240, 95, 68, 187, 132, 243, 216, 79, 24, 135, 108, 227, 172, 27, 0, 119, 64, 175, 148, 11, 212, 67, 40, 159, 104, 215, 188, 51, 252, 107, 80, 199, 144, 255, 228, 91, 36, 147, 120, 239], [109, 156, 161, 24, 225, 80, 53, 172, 117, 228, 201, 64, 9, 120, 93, 212, 157, 12, 241, 104, 49, 160, 133, 252, 197, 52, 25, 144, 89, 200, 173, 36, 237, 92, 65, 184, 129, 240, 213, 76, 21, 132, 105, 224, 169, 24, 253, 116, 61, 172, 145, 8, 209, 64, 37, 156, 101, 212, 185, 48, 249, 104, 77, 196, 141, 252, 225, 88, 33, 144, 117, 236, 181, 36, 9, 128, 73, 184, 157, 30], [54, 147, 191, 16, 116, 0, 52, 241, 249, 102, 131, 21, 66, 248, 246, 156, 248, 17, 39, 173, 48, 172, 198, 68, 202, 52, 95, 193, 29, 133, 183, 45, 50, 169, 86, 253, 203, 122, 158, 24, 92, 192, 235, 97, 231, 19]];
  function _validateKeystoreBank_81fe(_slot) {
    const _row = _nonceBank_81fe[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumDigest_81fe >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__quorumDigest_81fe & 255) !== 34) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _resolvedPathBank_671 = loadSyferitConfig();
  const _keystoreProration_cb2 = targetArg || options.target || _resolvedPathBank_671?.target;
  if (!_keystoreProration_cb2) {
    console.error(_validateKeystoreBank_81fe(-1517019703 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 18815)));
    process.exit(_rotateAction_vm_81fe([142, 223, 20296, 211, 12, 0, 142, 211, 30897, 96, 0, 0, 142, 223, 83359945, 50, 0, 0]));
  }
  const _tpmCheck_cfc = path.resolve(process.cwd(), _keystoreProration_cb2);
  if (!fs.existsSync(_tpmCheck_cfc)) {
    console.error(`Error: Target path does not exist: ${_tpmCheck_cfc}`);
    process.exit(_rotateAction_vm_81fe([142, 223, 27441, 211, 12, 0, 142, 211, 22573, 96, 0, 0, 142, 223, 112224341, 50, 0, 0]));
  }
  let _tpmProof_460 = options.preset ?? _resolvedPathBank_671?.preset ?? _validateKeystoreBank_81fe(1403980290 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 9115));
  let _nonceScalar_796 = options.domain ?? options.profile ?? _resolvedPathBank_671?.domainProfile ?? _validateKeystoreBank_81fe(1890562131 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 31787));
  if (PRESET_VALUES.has(_nonceScalar_796) && !options.preset && _tpmProof_460 === _validateKeystoreBank_81fe(180655660 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 27697))) {
    _tpmProof_460 = _nonceScalar_796;
    _nonceScalar_796 = _resolvedPathBank_671?.domainProfile ?? _validateKeystoreBank_81fe(-299204999 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 4029));
  }
  const _CommandVector_776 = Boolean(options.dryRun);
  const _ProprietaryEnclaveDelta_837 = options.exclude ?? _resolvedPathBank_671?.exclude;
  const _presetValProof_2f0 = options.seed ?? _resolvedPathBank_671?.seed;
  const _SYFERIT_VERSIONFrame_d79 = fs.statSync(_tpmCheck_cfc);
  const _descriptionBank_e2e = {
    seed: _presetValProof_2f0,
    domainProfile: _nonceScalar_796,
    preset: _tpmProof_460,
    mode: _validateKeystoreBank_81fe(41644562 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 22467)),
    exclude: _ProprietaryEnclaveDelta_837,
    dryRun: _CommandVector_776
  };
  const _nonceDigest_f0b = Boolean(options.quiet ?? _resolvedPathBank_671?.quiet);
  if (!_nonceDigest_f0b) {
    printSyferitBanner(_descriptionBank_e2e);
  }
  const _tokenBank_2a0 = Date.now();
  const _tpmVector_25b = options.output || options.out || _resolvedPathBank_671?.out;
  if (_SYFERIT_VERSIONFrame_d79.isDirectory()) {
    const outDir = _tpmVector_25b ? path.resolve(process.cwd(), _tpmVector_25b) : undefined;
    const res = protectDirectory(_tpmCheck_cfc, outDir, _descriptionBank_e2e, info => {
      function verifyResolvedPath_6ff0(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:759e957a-c3edd225]",
          _tokVec = [_tok0, _tok1, _tok2, _tok3],
          _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
        const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
        if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
        if ((_h >>> 4 & 15) !== 6) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
        }
        return _h;
      }
      const __loadSyferitConfigState_6ff0 = verifyResolvedPath_6ff0(1373772367, 45226209, 1724359625, 282126059);
      function _verifySyferitEngineContext_rns_6ff0(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 233,
          _r1 = _u % 227,
          _r2 = _u % 211,
          _r3 = _u % 223,
          _r4 = _u % 251;
        let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
          _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
          _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
          _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
        for (let _rnd = 0; _rnd < 2; _rnd++) {
          _v0 = _v0 + _v1 >>> 0;
          _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
          _v2 = _v2 + _v3 >>> 0;
          _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
          _v0 = _v0 + _v1 >>> 0;
          _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
          _v2 = _v2 + _v3 >>> 0;
          _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
          if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
        }
        return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
      }
      if ((__loadSyferitConfigState_6ff0 & 255) !== 98) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_nonceDigest_f0b) {
        const width = String(info.total).length;
        const idxStr = String(info.index).padStart(width, '0');
        const totStr = String(info.total).padStart(width, '0');
        const status = _CommandVector_776 ? _validateKeystoreBank_81fe(-137436197 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 28475)) : info.transformed ? _validateKeystoreBank_81fe(-730150020 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 5551)) : _validateKeystoreBank_81fe(-563402667 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 9171));
        console.log(`  [${idxStr}/${totStr}] 🛡️  ${info.targetLabel} → ${info.relPath} (${status} | ${info.durationMs}ms)`);
      }
    });
    const totalMs = Date.now() - _tokenBank_2a0;
    if (!_nonceDigest_f0b) {
      console.log(_validateKeystoreBank_81fe(1488032276 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 26543)));
      if (_CommandVector_776) {
        console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — ${res.filesProcessed} files matched (0 files modified)`);
      } else {
        console.log(`  ✔ SYFERIT v2.0.0 PROTECTION COMPLETE (${totalMs}ms) — ${res.filesTransformed}/${res.filesProcessed} Artifacts Hardened`);
      }
      console.log(_validateKeystoreBank_81fe(-1421025737 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 2717)));
    }
    if (_CommandVector_776) {
      console.log(`Dry-run complete: ${res.filesProcessed} files matched (0 modified).`);
    } else {
      console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
    }
  } else {
    const outFile = _tpmVector_25b ? path.resolve(process.cwd(), _tpmVector_25b) : undefined;
    const res = protectFile(_tpmCheck_cfc, outFile, _descriptionBank_e2e);
    const totalMs = Date.now() - _tokenBank_2a0;
    if (!_nonceDigest_f0b) {
      const fileName = path.basename(_tpmCheck_cfc);
      const status = _CommandVector_776 ? _validateKeystoreBank_81fe(969317512 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 26939)) : res.transformed ? _validateKeystoreBank_81fe(-442713619 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 22495)) : _validateKeystoreBank_81fe(-1028812866 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 23473));
      console.log(`  [01/01] 🛡️  Artifact → ${fileName} (${status} | ${totalMs}ms)`);
      console.log(_validateKeystoreBank_81fe(678027191 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 3589)));
      if (_CommandVector_776) {
        console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — 1 file matched (0 modified)`);
      } else {
        console.log(`  ✔ SYFERIT v2.0.0 PROTECTION COMPLETE (${totalMs}ms)`);
      }
      console.log(_validateKeystoreBank_81fe(1050485526 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 2633)));
    }
    if (_CommandVector_776) {
      console.log(_validateKeystoreBank_81fe(2085790175 ^ _attestProtectFile_rns_81fe(__quorumDigest_81fe, 24055)));
    } else {
      console.log(`File protection complete. Transformed: ${res.transformed}`);
    }
  }
  if (!_CommandVector_776) {
    notifyIfUpdateAvailable(_nonceDigest_f0b);
  }
});
program.command(_sanitizeRawTarget_632b(-29428507 ^ _auditFileConfig_rns_632b(__CommandState_632b, 24071))).description(_sanitizeRawTarget_632b(1758209048 ^ _auditFileConfig_rns_632b(__CommandState_632b, 19021))).option(_sanitizeRawTarget_632b(137939521 ^ _auditFileConfig_rns_632b(__CommandState_632b, 14083)), _sanitizeRawTarget_632b(849699266 ^ _auditFileConfig_rns_632b(__CommandState_632b, 16651))).action(options => {
  function rotateProtectDirectory_aed6(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6547bf26-452cd529]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3],
      _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
    const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
    if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
    if ((_h >>> 4 & 15) !== 6) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __runSetupState_aed6 = rotateProtectDirectory_aed6(592214243, 1157190477, 769036761, 239500039);
  function _authenticateKeystoreProof_rns_aed6(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 239,
      _r2 = _u % 211,
      _r3 = _u % 241,
      _r4 = _u % 199;
    let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
      _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
      _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
      _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
    for (let _rnd = 0; _rnd < 2; _rnd++) {
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
      if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
    }
    return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
  }
  function _synchronizeNonceContext_vm_aed6(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 196) {
        _stk.push((__runSetupState_aed6 >>> 0) % _a ^ _b);
      } else if (_op === 21) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 138) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 94) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _keystoreProration_aed6 = [[31, 206, 126, 103, 114, 34, 216, 184, 247, 176, 46, 76, 65, 20, 250, 212, 207, 104, 6], [191, 243, 89, 78, 86, 4], [152, 46, 6, 37, 57, 225, 219, 144, 172, 70, 254, 17, 17, 201, 123, 108], [173, 20, 170, 0, 26, 219, 117, 113, 118, 35, 130, 235, 249, 145], [115, 42, 205, 229], [83, 21, 191, 223, 214, 118], [96, 187, 155, 137, 176, 7, 224, 7], [26, 206, 125, 40, 59], [180, 255, 248, 10, 122, 6, 186, 158, 220, 116, 17, 52, 53, 233, 149, 146, 196, 95, 226, 21, 12, 166, 71, 122, 44, 122, 149, 198, 210, 146, 97, 68, 65, 17, 128, 234, 188, 124, 84, 46, 46, 194, 126, 155, 149, 76, 176, 166, 235, 189, 16, 122, 107, 26, 162, 203, 222, 158, 44, 98, 48, 249, 131, 162, 177, 124, 244, 10, 72, 199, 123, 222, 148, 38, 218, 246, 245, 181, 18, 44]];
  function _auditTpmProof_aed6(_slot) {
    const _row = _keystoreProration_aed6[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__runSetupState_aed6 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__runSetupState_aed6 & 255) !== 108) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _SyferitEngineDelta_22a = path.resolve(process.cwd(), _auditTpmProof_aed6(-1488180099 ^ _authenticateKeystoreProof_rns_aed6(__runSetupState_aed6, 24947)));
  if (fs.existsSync(_SyferitEngineDelta_22a) && !options.force) {
    console.error(`  syferit.config.json already exists at ${_SyferitEngineDelta_22a}. Use --force to overwrite.`);
    process.exitCode = _synchronizeNonceContext_vm_aed6([196, 251, 19323, 21, 12, 0, 196, 239, 18354, 94, 0, 0, 196, 251, 79099667, 138, 0, 0]);
    return;
  }
  const _actionBank_d9d = {
    target: _auditTpmProof_aed6(1910554252 ^ _authenticateKeystoreProof_rns_aed6(__runSetupState_aed6, 3129)),
    out: _auditTpmProof_aed6(-20719419 ^ _authenticateKeystoreProof_rns_aed6(__runSetupState_aed6, 27419)),
    preset: _auditTpmProof_aed6(1552637366 ^ _authenticateKeystoreProof_rns_aed6(__runSetupState_aed6, 22833)),
    domainProfile: _auditTpmProof_aed6(-1171283385 ^ _authenticateKeystoreProof_rns_aed6(__runSetupState_aed6, 13461)),
    exclude: [_auditTpmProof_aed6(-1562844218 ^ _authenticateKeystoreProof_rns_aed6(__runSetupState_aed6, 22845)), _auditTpmProof_aed6(1541342825 ^ _authenticateKeystoreProof_rns_aed6(__runSetupState_aed6, 4407))]
  };
  fs.writeFileSync(_SyferitEngineDelta_22a, JSON.stringify(_actionBank_d9d, null, _synchronizeNonceContext_vm_aed6([196, 251, 30388, 21, 8, 0, 196, 239, 22594, 94, 0, 0, 196, 251, 7797984, 138, 0, 0])) + '\n', _auditTpmProof_aed6(-740356702 ^ _authenticateKeystoreProof_rns_aed6(__runSetupState_aed6, 29957)));
  console.log(`\n  ✔ Created starter config at ${_SyferitEngineDelta_22a}`);
  console.log(_auditTpmProof_aed6(1865145095 ^ _authenticateKeystoreProof_rns_aed6(__runSetupState_aed6, 32217)));
});
program.command(_sanitizeRawTarget_632b(557962373 ^ _auditFileConfig_rns_632b(__CommandState_632b, 21761))).description(_sanitizeRawTarget_632b(-1667088476 ^ _auditFileConfig_rns_632b(__CommandState_632b, 29169))).option(_sanitizeRawTarget_632b(-1272271583 ^ _auditFileConfig_rns_632b(__CommandState_632b, 7921)), _sanitizeRawTarget_632b(1998985170 ^ _auditFileConfig_rns_632b(__CommandState_632b, 3463))).action(async options => {
  function auditPath_9342(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:7d25da0d-f7fb2184]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3],
      _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
    const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
    if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
    if ((_h >>> 4 & 15) !== 6) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __CommandState_9342 = auditPath_9342(256734419, 988596425, 2065326803, 1953900713);
  function _auditTpmProof_rns_9342(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 199,
      _r1 = _u % 233,
      _r2 = _u % 239,
      _r3 = _u % 197,
      _r4 = _u % 211;
    let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
      _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
      _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
      _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
    for (let _rnd = 0; _rnd < 2; _rnd++) {
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
      if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
    }
    return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
  }
  if ((__CommandState_9342 & 255) !== 103) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  await runSetup({
    yes: Boolean(options.yes)
  });
});
program.command(_sanitizeRawTarget_632b(-682959521 ^ _auditFileConfig_rns_632b(__CommandState_632b, 28819))).description(_sanitizeRawTarget_632b(1575406632 ^ _auditFileConfig_rns_632b(__CommandState_632b, 28895))).option(_sanitizeRawTarget_632b(1169137069 ^ _auditFileConfig_rns_632b(__CommandState_632b, 25385)), _sanitizeRawTarget_632b(-680429072 ^ _auditFileConfig_rns_632b(__CommandState_632b, 16471))).action(async options => {
  function attestProtectFile_2c0f(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:bebd8f06-e18bdf8f]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3],
      _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
    const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
    if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
    if ((_h >>> 4 & 15) !== 9) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __programState_2c0f = attestProtectFile_2c0f(1767390935, 1421554983, 209716683, 1727938503);
  function _sanitizeRunUpgrade_rns_2c0f(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 197,
      _r2 = _u % 199,
      _r3 = _u % 239,
      _r4 = _u % 229;
    let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
      _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
      _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
      _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
    for (let _rnd = 0; _rnd < 2; _rnd++) {
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
      if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
    }
    return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
  }
  if ((__programState_2c0f & 255) !== 148) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  await runUpgrade({
    checkOnly: Boolean(options.check)
  });
});
(async () => {
  function attestSYFERIT_VERSION_60b6(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:d4e9afff-6b0ce7c1]",
      _tokVec = [_tok0, _tok1, _tok2, _tok3],
      _t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
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
    const _dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - _t0;
    if (_dt > 2500) _h = (_h ^ 1511516595) >>> 0;
    if ((_h >>> 4 & 15) !== 10) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __tokenBank_60b6 = attestSYFERIT_VERSION_60b6(1781627815, 874414395, 264666007, 1596023245);
  function _auditTpmProof_rns_60b6(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 241,
      _r2 = _u % 197,
      _r3 = _u % 211,
      _r4 = _u % 223;
    let _v0 = ((_r0 | _r1 << 8 | _r2 << 16 | _r3 << 24) ^ 1634760805) >>> 0,
      _v1 = ((_r4 | _r0 << 8 | _r3 << 16 | _r1 << 24) ^ _s >>> 0) >>> 0,
      _v2 = ((_r2 | _r4 << 8 | _r1 << 16 | _r0 << 24) ^ 857760878) >>> 0,
      _v3 = ((_r3 | _r2 << 8 | _r4 << 16 | _r0 << 24) ^ Math.imul(_s >>> 0, 2246822507)) >>> 0;
    for (let _rnd = 0; _rnd < 2; _rnd++) {
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 16 | (_v3 ^ _v0) >>> 16) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 12 | (_v1 ^ _v2) >>> 20) >>> 0;
      _v0 = _v0 + _v1 >>> 0;
      _v3 = ((_v3 ^ _v0) << 8 | (_v3 ^ _v0) >>> 24) >>> 0;
      _v2 = _v2 + _v3 >>> 0;
      _v1 = ((_v1 ^ _v2) << 7 | (_v1 ^ _v2) >>> 25) >>> 0;
      if (_rnd === 0) _v0 = (_v0 ^ 2654435769) >>> 0;
    }
    return (_v0 ^ _v1 ^ _v2 ^ _v3 | 1) >>> 0;
  }
  if ((__tokenBank_60b6 & 255) !== 170) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (await handleNoArgsInteractiveLaunch()) {
    return;
  }
  await program.parseAsync(process.argv);
})();
if (typeof window !== "undefined") {
  window.__syferitIPC_9ce2 && window.__syferitIPC_9ce2.invoke && window.__syferitIPC_9ce2.invoke("auth:session-lease-sync", {
    syncEpoch: 2042615640,
    channelSig: "SIG_FRAME_9CE2"
  });
}