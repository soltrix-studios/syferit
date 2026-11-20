#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory, printSyferitBanner, loadSyferitConfig } from './index.js';
import { notifyIfUpdateAvailable, runUpgrade, cleanupOldBinaryOnWindows, SYFERIT_VERSION } from './updater.js';
import { runSetup, handleNoArgsInteractiveLaunch } from './setup.js';
function rotatePrintSyferitBanner_1ebd(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f00e82da-183b603f]",
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
  if ((_h >>> 4 & 15) !== 0) {
    _h = (_h ^ 3735884599) >>> 0;
    throw new Error("ASSERTION_INVARIANT: Session epoch out of sequence with local lease holder");
  }
  return _h;
}
var __enclaveDigest_1ebd = rotatePrintSyferitBanner_1ebd(331684695, 718516525, 435946337, 1504472077);
function _rotateVersion_rns_1ebd(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 229,
    _r1 = _u % 251,
    _r2 = _u % 211,
    _r3 = _u % 223,
    _r4 = _u % 233;
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
var _SyferitEngineDelta_1ebd = [[115, 91, 54, 116, 240, 162, 153, 202], [77, 53, 14, 91, 220, 134, 117, 183], [39, 24, 217, 13, 179, 120, 88], [25, 172, 235, 248, 118, 83, 52, 105, 226, 171, 195, 195, 69, 41], [231, 186, 141, 203, 90, 62, 11], [234, 145, 118, 182, 63, 21, 208, 71, 151, 34, 22, 203, 79, 132, 158, 193, 90, 21, 33, 113, 197, 236, 177, 217, 69, 1, 230, 44, 169, 145, 113, 186, 55, 252, 144, 85, 205, 79, 61, 106, 227, 223, 180, 242, 118, 100, 42, 74, 192, 171, 116, 166, 81, 76, 215, 56, 181, 101, 8, 175, 0, 242, 217, 17, 138, 77, 112, 86, 227, 219, 141, 201, 68, 112, 26, 66, 149, 183, 99, 163, 61, 10, 201, 27, 253, 95, 64, 130, 21, 201, 167, 248], [174, 127, 90, 140, 23, 194, 189, 172, 93, 65, 60, 82, 253, 172, 133, 233], [66, 66, 42, 113, 238, 230, 175, 226, 127, 122, 238, 42, 216, 135, 117, 249, 54, 236, 222, 12, 137, 113, 82, 100, 22, 207, 188, 225, 35, 30, 52, 103, 240, 255, 187, 239, 111, 70, 254, 62, 162, 148, 86, 197, 57, 251, 216, 26, 135, 75, 37, 99, 244, 154, 254, 192, 117, 46, 82, 70, 202, 179, 103, 167, 55, 27, 249, 125, 167, 116, 65, 133, 14, 249, 182, 236, 144, 64, 118, 109, 252, 226, 139, 141, 65, 63, 18, 36, 155, 133, 96, 245, 43, 23, 212, 12, 128, 102, 85, 143, 14], [5, 35, 83, 98, 145, 198, 103, 183, 34, 24, 194, 30, 196, 47, 75, 159, 12, 207, 241], [29, 29, 208, 15, 193, 100, 87, 219, 19, 205, 160, 234, 41, 87, 18, 3, 249, 165, 134, 210, 82, 20, 231, 57, 188, 212, 104, 176, 121, 248, 194, 28, 153, 121, 39, 115], [95, 206, 229, 172, 43, 24, 50, 85, 238, 233, 205, 196, 79, 41, 237, 118], [211, 163, 157, 197, 66, 52, 227, 49, 214, 129, 120, 249, 60, 247, 222, 29, 146, 98, 30, 113, 26, 222, 186, 181, 39, 90, 3, 79, 194, 167, 150, 201, 68, 70, 250, 62, 235, 147, 76, 200, 47, 226, 215, 26, 150, 2, 37, 123, 226, 196, 169, 211, 114, 62, 23, 28], [145, 198, 124, 163, 36, 15, 210, 30, 196, 47, 75, 159, 12, 207, 241], [160, 124, 81, 154, 6, 132, 170, 224, 123, 24, 77, 76, 177, 236, 217, 154, 94, 21, 252], [43, 24, 45, 82, 255, 186, 148, 192, 14, 97, 245, 58, 167, 130, 124, 168, 104], [123, 40, 237, 49, 218, 141, 98, 176, 60, 236, 138, 1, 130, 96, 91, 109, 65, 138, 161, 225, 110, 80, 2, 72, 209, 182, 214, 157, 95, 7, 252, 53, 174, 148, 71, 129, 115, 174, 219, 24, 139, 75, 39, 120, 234, 154, 254, 206, 105, 106, 4, 7, 130, 175, 115, 168, 45, 6, 239, 48, 250, 116, 64, 130, 75, 178, 166, 224, 153, 79, 35, 117, 231, 248, 202, 143, 79, 55, 12, 37, 222, 132, 119, 177, 109, 87], [125, 15, 139, 74, 201, 62, 75, 140, 23, 193, 166, 254, 105, 27, 95, 86, 210, 160, 145, 211, 88, 6, 181], [49, 203, 161, 238, 96, 86, 64, 71, 244, 175, 128, 222, 94, 14, 233, 57, 188, 212, 108, 173, 54, 238, 217, 31, 136, 38, 100, 116, 224, 209, 171, 183, 53, 34, 5, 65, 221, 189, 99, 171, 17, 76, 231, 50, 178, 117, 90, 130, 17, 237, 144, 95, 158, 73, 61, 122, 227, 219, 196, 143, 69, 53, 30, 90, 192, 136, 120, 245, 105, 90, 211, 2, 188, 127, 22, 222], [183, 173, 221, 148, 3, 112, 225, 39, 175, 144, 112, 178, 118, 185, 201, 31, 135, 120, 40, 106, 64], [254, 130, 127, 184, 32, 162, 204, 2, 149, 54, 19, 113, 87, 138, 255, 184, 127, 76, 9, 79, 202, 190, 159], [201, 96, 23, 222, 85, 138, 188, 247, 105, 95, 67, 26, 211, 170, 146, 222, 10], [77, 93, 20, 70, 239, 161, 157, 217, 88, 19, 252, 34, 166, 212, 126, 170, 48, 228, 212, 83, 158, 121, 33, 99, 161, 214, 183, 233, 53, 54, 9, 95, 219, 183, 100, 182, 94, 5, 246, 59, 180, 32, 88, 132, 9, 237, 209, 16, 139, 88, 56, 122, 254, 209], [3, 56, 169, 104, 239, 220, 124, 164, 53, 233, 216, 20, 143, 57, 125, 116, 31, 217, 161, 253, 96, 47, 26, 2, 136, 251, 195], [22, 250, 201, 1, 146, 114, 91, 33, 29, 195, 190, 240, 47, 81, 20, 9, 197, 189, 150, 217, 82, 20, 174, 33, 170, 142, 86, 128, 45, 224, 197, 89, 149, 80, 37, 96, 167, 198, 172, 206, 111, 47, 17, 65, 198, 177, 104, 233, 107, 23, 180, 58, 249, 38, 3, 148, 75, 236, 167, 235, 155, 65, 36, 57, 177, 232, 196, 192, 78, 56, 80, 43, 200, 200, 59], [85, 138, 171, 224, 117, 22, 17, 83, 206], [205, 190, 145, 193, 88, 5, 255, 107, 178, 156, 117, 188, 49, 168, 214, 26, 129, 121, 55, 39, 246, 223, 173, 247, 113, 100, 14, 74, 137, 168, 114, 172, 73, 9, 247, 35, 180, 100, 8, 156, 12, 224, 212, 16, 140, 92, 112, 126, 226, 216, 141, 193, 88, 57, 22, 92, 149, 133, 98, 182, 105, 30, 201, 15, 184, 127], [239, 128, 53, 252, 123, 168, 220, 5, 131, 124, 53], [180, 99, 78, 113, 9, 207, 161, 230, 47, 127, 53, 106, 234, 155, 218, 223, 86, 8, 224, 52, 185, 218, 67, 139, 59, 174, 198, 28, 129, 15, 44, 100, 235, 211, 254, 209, 105, 37, 21, 71, 202, 173, 117, 233, 44, 7, 238, 45, 162, 114], [101, 85, 10, 82], [114, 18, 237, 42, 177, 145, 60, 190, 121, 251, 196, 18, 159, 104, 33, 117, 161, 195, 161, 253, 112, 54, 5, 91, 135, 187, 111, 173, 91, 5, 243, 121, 187, 115, 71, 133, 69, 253, 210, 95, 141, 64, 53, 51, 238, 201, 150, 213, 68, 62, 12, 27, 209, 141, 126, 170, 42, 12, 207, 17, 164], [123, 227, 129, 80, 199, 52, 39, 107, 12, 206, 176], [52, 220, 183, 231, 120, 76, 15, 93, 198, 242, 159, 197, 94, 21, 250, 56, 165, 157, 2, 150, 38, 232, 211, 11, 154, 86, 100, 110, 232, 216, 184, 200, 124, 100, 24, 70, 192, 176], [211, 170, 131, 207, 68], [140, 154, 111, 171, 56, 228, 220, 83, 153, 116, 33, 39, 242, 196, 185, 245, 113, 37, 0, 64, 199, 189, 32, 144, 68, 10, 241, 37, 184, 116, 8, 137, 12, 250, 221, 13, 128, 8, 36, 124, 173, 194, 203, 137, 82, 41, 30, 94, 199, 141, 120, 224, 43, 17, 206, 67, 188, 98, 80, 215, 3, 197, 175, 226, 118, 64, 57, 109, 185, 161, 132, 147, 68, 50, 164, 62, 174, 133, 106, 251, 38, 253, 223, 27, 140, 117, 96, 83, 60, 248, 156], [199, 96, 109, 36, 83, 128, 172, 253, 97], [92, 85, 15, 89, 131, 187, 148, 201, 82, 20, 239, 50, 191, 147, 84, 128, 127, 237, 217, 23, 149, 75, 56, 96, 230, 194, 183, 206, 117, 106, 2, 71, 192, 179, 118, 189, 99, 19, 244, 57, 247, 116, 75, 150, 2, 233, 182, 224, 141, 14, 6, 88, 199, 138, 202, 204, 82, 34, 17, 44, 218, 158, 123, 182, 46, 18, 202, 16], [65, 19, 236, 60, 169, 147, 122], [26, 224, 213, 16, 134, 60, 34, 104, 243, 144, 185, 245, 113, 100, 5, 65, 218, 172, 97, 175, 81, 76, 224, 63, 180, 32, 68, 138, 17, 241, 207, 11, 217, 123, 41, 117, 232, 206, 141, 211, 1, 34, 29, 87, 208, 133, 127, 170, 105, 11, 197, 2, 176, 96, 81, 132, 2, 204, 177], [83, 128, 182, 240, 119, 34, 2], [236, 188, 150, 196, 23, 5, 230, 52, 168, 145, 2, 140, 57, 174, 215, 89, 157, 71, 61, 104, 245, 150, 168, 196, 105, 57, 27, 90, 193, 254, 111, 186, 99, 19, 236, 60, 190, 106, 79, 147, 7, 255, 226, 242, 150, 90, 62, 118, 230, 182, 202, 196, 73, 37, 10, 32, 215, 134, 123, 187, 40]];
function _attestProtectDirectory_1ebd(_slot) {
  const _row = _SyferitEngineDelta_1ebd[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveDigest_1ebd >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
cleanupOldBinaryOnWindows();
const PRESET_VALUES = new Set([_attestProtectDirectory_1ebd(1389197429 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 19591)), _attestProtectDirectory_1ebd(911970624 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 23809)), _attestProtectDirectory_1ebd(-856993765 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 7085)), _attestProtectDirectory_1ebd(138562146 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 21373))]);
const program = new Command();
program.name(_attestProtectDirectory_1ebd(92901285 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 30103))).description(_attestProtectDirectory_1ebd(-1809560028 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 2629))).version(SYFERIT_VERSION);
program.command(_attestProtectDirectory_1ebd(1169984541 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 26783))).description(_attestProtectDirectory_1ebd(1600850676 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 17189))).option(_attestProtectDirectory_1ebd(-2002516293 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 29225)), _attestProtectDirectory_1ebd(-1718183780 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 677))).option(_attestProtectDirectory_1ebd(1161541429 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 18781)), _attestProtectDirectory_1ebd(-620928550 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 19019))).option(_attestProtectDirectory_1ebd(292052729 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 3487)), _attestProtectDirectory_1ebd(1677282070 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 23489))).option(_attestProtectDirectory_1ebd(-690076557 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 16337)), _attestProtectDirectory_1ebd(-111749844 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 20749))).option(_attestProtectDirectory_1ebd(-890789649 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 28419)), _attestProtectDirectory_1ebd(837023668 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 6637))).option(_attestProtectDirectory_1ebd(-625743055 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 22869)), _attestProtectDirectory_1ebd(1520451720 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 15409))).option(_attestProtectDirectory_1ebd(-1841371937 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 29759)), _attestProtectDirectory_1ebd(1309236460 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 11823))).option(_attestProtectDirectory_1ebd(-1740185129 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 15739)), _attestProtectDirectory_1ebd(1609908454 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 26513))).option(_attestProtectDirectory_1ebd(-666394955 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 2907)), _attestProtectDirectory_1ebd(1440154578 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 23059))).option(_attestProtectDirectory_1ebd(-1480806953 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 26087)), _attestProtectDirectory_1ebd(-159394216 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 27947))).action((targetArg, options) => {
  function validateTpmVector_9f26(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:03399575-a64ee962]",
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
    if ((_h >>> 4 & 15) !== 12) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __consoleState_9f26 = validateTpmVector_9f26(809234999, 251767727, 1301845891, 1848024771);
  function _rotatePrintSyferitBanner_rns_9f26(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 211,
      _r2 = _u % 251,
      _r3 = _u % 227,
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
  function _validateRunSetup_vm_9f26(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 213) {
        _stk.push((__consoleState_9f26 >>> 0) % _a ^ _b);
      } else if (_op === 25) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 75) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 122) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _enclaveReg_9f26 = [[130, 14, 242, 89, 41, 42, 52, 154, 131, 193, 201, 45, 230, 24, 79, 130, 114, 175, 185, 224, 210, 64, 5, 58, 75, 149, 138, 201, 182, 252, 172, 36, 14, 112, 69, 246, 148, 194, 148, 14, 230, 54, 45, 157, 87, 183, 174, 235, 151, 24, 31, 6, 59, 114, 107, 206, 186, 247, 236, 110, 91, 77, 2, 133, 41, 156, 160, 5, 226, 54, 49, 120, 70, 144, 200, 238, 177, 23, 8, 87, 52, 120, 48, 232, 196, 196, 205, 41, 11, 84, 24, 129, 97, 232, 172, 241, 222, 58, 5, 100, 82, 132, 212, 218, 189, 235, 252, 91, 0, 108, 60, 255, 131, 140, 158, 73, 239, 41, 55, 142, 127, 253], [132, 192, 215, 63, 229, 91, 92, 139], [98, 167, 171, 243], [94, 138, 157, 193, 175, 17, 230, 93], [40, 113, 117, 185], [240, 71, 86, 139, 97, 170, 185, 234, 199, 51], [225, 40, 39, 57, 107, 155, 156, 136], [130, 30, 241, 93, 59, 125, 114, 169], [188, 207, 193, 46, 243, 93, 88, 210], [30, 233, 237, 131, 168, 93, 97, 23, 60, 241, 245, 171, 208, 133, 137, 63, 100, 25, 29, 211, 248, 173, 177, 103, 140, 65, 69, 251, 32, 213, 217, 143, 180, 105, 109, 35, 72, 253, 1, 183, 220, 145, 149, 75, 112, 37, 41, 223, 4, 185, 189, 115, 152, 77, 81, 7, 44, 225, 229, 155, 192, 117, 121, 47, 84, 9, 13, 195, 232, 157, 161, 87, 124, 49, 53, 235, 16, 197, 201, 127], [25, 206, 242, 168, 205, 130, 134, 60, 97, 22, 26, 208, 245, 170, 174, 100, 137, 62, 66, 248, 29, 210, 214, 140, 177, 102, 106, 32, 69, 250, 254, 180, 217, 142, 146, 72, 109, 34, 38, 220, 1, 182, 186, 112, 149, 74, 78, 4, 41, 222, 226, 152, 189, 114, 118, 44, 81, 6, 10, 192, 229, 154, 158, 84, 121, 46, 50, 232, 13, 194, 198, 124, 161, 86, 90, 16, 53, 234, 238, 174], [26, 97, 110, 224, 160, 210, 197], [203, 89, 78, 150, 114, 162, 181, 226], [251, 54, 8, 103, 76, 148, 145], [199, 162, 166, 60, 97, 22, 26, 208, 245, 170, 174, 100, 137, 62, 66, 248, 29, 210, 214, 140, 177, 102, 106, 32, 69, 250, 254, 180, 217, 142, 146, 72, 109, 34, 38, 220, 1, 182, 186, 112, 149, 74, 78, 4, 41, 222, 226, 152, 189, 114, 118, 44, 81, 6, 10, 192, 229, 154, 158, 84, 121, 46, 50, 232, 13, 194, 198, 124, 161, 86, 90, 16, 53, 234, 238, 164, 201, 126, 130, 56], [210, 135, 171, 97, 134, 59, 63, 245, 26, 207, 211, 137, 174, 99, 103, 29, 66, 247, 251, 177, 214, 139, 143, 69, 106, 31, 35, 217, 254, 179, 183, 109, 146, 71, 75, 1, 38, 219, 223, 149, 186, 111, 115, 41, 78, 3, 7, 189, 226, 151, 155, 81, 118, 43, 47, 229, 10, 191, 195, 121, 158, 83, 87, 13, 50, 231, 235, 161, 198, 123, 127, 53, 90, 15, 19, 201, 238, 163, 167, 87], [83, 190, 169, 171, 217, 21, 10, 58, 92, 155, 149, 222, 191, 237, 248, 39, 93, 60, 17, 246, 157, 217, 216, 15, 175, 41, 41, 138, 64, 176, 185, 246, 151, 68, 64, 6, 38, 111, 96, 211, 185, 253, 253, 42, 90, 6]];
  function _validateEnclaveCheck_9f26(_slot) {
    const _row = _enclaveReg_9f26[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__consoleState_9f26 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__consoleState_9f26 & 255) !== 199) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _enclaveReg_664 = loadSyferitConfig();
  const _SyferitEngineDelta_348 = targetArg || options.target || _enclaveReg_664?.target;
  if (!_SyferitEngineDelta_348) {
    console.error(_validateEnclaveCheck_9f26(-370654743 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 1425)));
    process.exit(_validateRunSetup_vm_9f26([213, 229, 9409, 25, 7, 0, 213, 211, 14852, 122, 0, 0, 213, 229, 1216722, 75, 0, 0]));
  }
  const _consoleProof_b76 = path.resolve(process.cwd(), _SyferitEngineDelta_348);
  if (!fs.existsSync(_consoleProof_b76)) {
    console.error(`Error: Target path does not exist: ${_consoleProof_b76}`);
    process.exit(_validateRunSetup_vm_9f26([213, 229, 5990, 25, 8, 0, 213, 211, 19080, 122, 0, 0, 213, 229, 1529054, 75, 0, 0]));
  }
  let _loadSyferitConfigVector_c8d = options.preset ?? _enclaveReg_664?.preset ?? _validateEnclaveCheck_9f26(259240640 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 8217));
  let _exitEnvelope_960 = options.domain ?? options.profile ?? _enclaveReg_664?.domainProfile ?? _validateEnclaveCheck_9f26(-1184126389 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 31133));
  if (PRESET_VALUES.has(_exitEnvelope_960) && !options.preset && _loadSyferitConfigVector_c8d === _validateEnclaveCheck_9f26(1382902944 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 4337))) {
    _loadSyferitConfigVector_c8d = _exitEnvelope_960;
    _exitEnvelope_960 = _enclaveReg_664?.domainProfile ?? _validateEnclaveCheck_9f26(-94655935 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 4203));
  }
  const _SoltrixStudiosDelta_b8e = Boolean(options.dryRun);
  const _PRESET_VALUESAttestation_438 = options.exclude ?? _enclaveReg_664?.exclude;
  const _nonceScalar_c35 = options.seed ?? _enclaveReg_664?.seed;
  const _processVector_b82 = fs.statSync(_consoleProof_b76);
  const _enclaveDigest_c4d = {
    seed: _nonceScalar_c35,
    domainProfile: _exitEnvelope_960,
    preset: _loadSyferitConfigVector_c8d,
    mode: _validateEnclaveCheck_9f26(-1801158338 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 7731)),
    exclude: _PRESET_VALUESAttestation_438,
    dryRun: _SoltrixStudiosDelta_b8e
  };
  const _optionsFrame_e6c = Boolean(options.quiet ?? _enclaveReg_664?.quiet);
  if (!_optionsFrame_e6c) {
    printSyferitBanner(_enclaveDigest_c4d);
  }
  const _SYFERIT_VERSIONCheck_bb8 = Date.now();
  const _targetArgProof_11e = options.output || options.out || _enclaveReg_664?.out;
  if (_processVector_b82.isDirectory()) {
    const outDir = _targetArgProof_11e ? path.resolve(process.cwd(), _targetArgProof_11e) : undefined;
    const res = protectDirectory(_consoleProof_b76, outDir, _enclaveDigest_c4d, info => {
      function authenticateAction_6af6(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:f13b9eb1-335c357b]",
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
        if ((_h >>> 4 & 15) !== 0) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __tpmVector_6af6 = authenticateAction_6af6(375773513, 1102062749, 615277511, 292467263);
      function _verifySoltrixStudiosContext_rns_6af6(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 233,
          _r1 = _u % 251,
          _r2 = _u % 239,
          _r3 = _u % 223,
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
      if ((__tpmVector_6af6 & 255) !== 0) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_optionsFrame_e6c) {
        const width = String(info.total).length;
        const idxStr = String(info.index).padStart(width, '0');
        const totStr = String(info.total).padStart(width, '0');
        const status = _SoltrixStudiosDelta_b8e ? _validateEnclaveCheck_9f26(32271595 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 7393)) : info.transformed ? _validateEnclaveCheck_9f26(-454711182 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 24441)) : _validateEnclaveCheck_9f26(-519235493 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 14205));
        console.log(`  [${idxStr}/${totStr}] 🛡️  ${info.targetLabel} → ${info.relPath} (${status} | ${info.durationMs}ms)`);
      }
    });
    const totalMs = Date.now() - _SYFERIT_VERSIONCheck_bb8;
    if (!_optionsFrame_e6c) {
      console.log(_validateEnclaveCheck_9f26(-1801261628 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 4083)));
      if (_SoltrixStudiosDelta_b8e) {
        console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — ${res.filesProcessed} files matched (0 files modified)`);
      } else {
        console.log(`  ✔ SYFERIT v${SYFERIT_VERSION} PROTECTION COMPLETE (${totalMs}ms) — ${res.filesTransformed}/${res.filesProcessed} Artifacts Hardened`);
      }
      console.log(_validateEnclaveCheck_9f26(704550275 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 26499)));
    }
    if (_SoltrixStudiosDelta_b8e) {
      console.log(`Dry-run complete: ${res.filesProcessed} files matched (0 modified).`);
    } else {
      console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
    }
  } else {
    const outFile = _targetArgProof_11e ? path.resolve(process.cwd(), _targetArgProof_11e) : undefined;
    const res = protectFile(_consoleProof_b76, outFile, _enclaveDigest_c4d);
    const totalMs = Date.now() - _SYFERIT_VERSIONCheck_bb8;
    if (!_optionsFrame_e6c) {
      const fileName = path.basename(_consoleProof_b76);
      const status = _SoltrixStudiosDelta_b8e ? _validateEnclaveCheck_9f26(348692646 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 30717)) : res.transformed ? _validateEnclaveCheck_9f26(2053605535 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 13287)) : _validateEnclaveCheck_9f26(1523095392 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 8111));
      console.log(`  [01/01] 🛡️  Artifact → ${fileName} (${status} | ${totalMs}ms)`);
      console.log(_validateEnclaveCheck_9f26(-1153255721 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 3253)));
      if (_SoltrixStudiosDelta_b8e) {
        console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — 1 file matched (0 modified)`);
      } else {
        console.log(`  ✔ SYFERIT v${SYFERIT_VERSION} PROTECTION COMPLETE (${totalMs}ms)`);
      }
      console.log(_validateEnclaveCheck_9f26(1753859790 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 16511)));
    }
    if (_SoltrixStudiosDelta_b8e) {
      console.log(_validateEnclaveCheck_9f26(-1183743061 ^ _rotatePrintSyferitBanner_rns_9f26(__consoleState_9f26, 9111)));
    } else {
      console.log(`File protection complete. Transformed: ${res.transformed}`);
    }
  }
  if (!_SoltrixStudiosDelta_b8e) {
    notifyIfUpdateAvailable(_optionsFrame_e6c);
  }
});
program.command(_attestProtectDirectory_1ebd(36533975 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 23481))).description(_attestProtectDirectory_1ebd(1483017040 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 9813))).option(_attestProtectDirectory_1ebd(-1009542003 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 22453)), _attestProtectDirectory_1ebd(-640200770 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 9677))).action(options => {
  function validateExit_abfb(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:94d50a1c-f5d72e26]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __SoltrixStudiosQuorum_abfb = validateExit_abfb(1239317813, 1699257621, 987688155, 459755971);
  function _validateProcess_rns_abfb(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 197,
      _r1 = _u % 223,
      _r2 = _u % 239,
      _r3 = _u % 211,
      _r4 = _u % 241;
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
  function _isolateConsole_vm_abfb(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 107) {
        _stk.push((__SoltrixStudiosQuorum_abfb >>> 0) % _a ^ _b);
      } else if (_op === 185) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 149) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 38) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _keystoreProration_abfb = [[17, 59, 111, 30, 132, 191, 233, 33, 233, 5, 95, 197, 119, 153, 235, 93, 193, 253, 55], [169, 72, 74, 201, 104, 143], [130, 163, 55, 172, 51, 84, 202, 41, 166, 219, 15, 136, 11, 60, 106, 229], [167, 131, 85, 155, 16, 36, 98, 10, 140, 180, 141, 96, 227, 30], [133, 183, 252, 124], [109, 158, 172, 80, 192, 253], [106, 14, 138, 48, 186, 154, 17, 158], [16, 49, 106, 83, 193], [170, 74, 137, 131, 76, 139, 171, 23, 210, 225, 32, 173, 35, 84, 132, 43, 250, 202, 243, 156, 26, 43, 118, 243, 34, 207, 132, 127, 228, 15, 16, 221, 95, 100, 177, 99, 202, 241, 69, 167, 32, 87, 143, 2, 131, 177, 161, 223, 21, 40, 1, 243, 125, 151, 211, 66, 208, 235, 61, 155, 70, 100, 178, 59, 175, 201, 5, 131, 126, 74, 106, 87, 154, 179, 235, 111, 227, 8, 3, 149]];
  function _isolateTokenEnvelope_abfb(_slot) {
    const _row = _keystoreProration_abfb[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SoltrixStudiosQuorum_abfb >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__SoltrixStudiosQuorum_abfb & 255) !== 98) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _nameDigest_a53 = path.resolve(process.cwd(), _isolateTokenEnvelope_abfb(567146411 ^ _validateProcess_rns_abfb(__SoltrixStudiosQuorum_abfb, 18219)));
  if (fs.existsSync(_nameDigest_a53) && !options.force) {
    console.error(`  syferit.config.json already exists at ${_nameDigest_a53}. Use --force to overwrite.`);
    process.exitCode = _isolateConsole_vm_abfb([107, 197, 9568, 185, 7, 0, 107, 223, 23242, 38, 0, 0, 107, 197, 1237476, 149, 0, 0]);
    return;
  }
  const _resolveProof_8f6 = {
    target: _isolateTokenEnvelope_abfb(-1823243844 ^ _validateProcess_rns_abfb(__SoltrixStudiosQuorum_abfb, 11897)),
    out: _isolateTokenEnvelope_abfb(1596367559 ^ _validateProcess_rns_abfb(__SoltrixStudiosQuorum_abfb, 17883)),
    preset: _isolateTokenEnvelope_abfb(179601388 ^ _validateProcess_rns_abfb(__SoltrixStudiosQuorum_abfb, 24485)),
    domainProfile: _isolateTokenEnvelope_abfb(1653754785 ^ _validateProcess_rns_abfb(__SoltrixStudiosQuorum_abfb, 22357)),
    exclude: [_isolateTokenEnvelope_abfb(-2070368182 ^ _validateProcess_rns_abfb(__SoltrixStudiosQuorum_abfb, 2965)), _isolateTokenEnvelope_abfb(-1560765695 ^ _validateProcess_rns_abfb(__SoltrixStudiosQuorum_abfb, 18631))]
  };
  fs.writeFileSync(_nameDigest_a53, JSON.stringify(_resolveProof_8f6, null, _isolateConsole_vm_abfb([107, 197, 23652, 185, 8, 0, 107, 223, 27413, 38, 0, 0, 107, 197, 6059320, 149, 0, 0])) + '\n', _isolateTokenEnvelope_abfb(291712500 ^ _validateProcess_rns_abfb(__SoltrixStudiosQuorum_abfb, 1055)));
  console.log(`\n  ✔ Created starter config at ${_nameDigest_a53}`);
  console.log(_isolateTokenEnvelope_abfb(1400487167 ^ _validateProcess_rns_abfb(__SoltrixStudiosQuorum_abfb, 20851)));
});
program.command(_attestProtectDirectory_1ebd(432266353 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 32211))).description(_attestProtectDirectory_1ebd(1380059642 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 18327))).option(_attestProtectDirectory_1ebd(-798034617 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 3029)), _attestProtectDirectory_1ebd(-1848975904 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 23649))).action(async options => {
  function verifyEnclaveAttestation_73ec(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:3dc58319-b77e1fa0]",
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
    if ((_h >>> 4 & 15) !== 0) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __tokenCheck_73ec = verifyEnclaveAttestation_73ec(1100054269, 900304133, 1691578375, 1155831979);
  function _validateRawTarget_rns_73ec(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 229,
      _r2 = _u % 251,
      _r3 = _u % 227,
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
  if ((__tokenCheck_73ec & 255) !== 0) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  await runSetup({
    yes: Boolean(options.yes)
  });
});
program.command(_attestProtectDirectory_1ebd(447474175 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 1669))).description(_attestProtectDirectory_1ebd(590484696 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 11539))).option(_attestProtectDirectory_1ebd(-2024341059 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 22311)), _attestProtectDirectory_1ebd(-1525400198 ^ _rotateVersion_rns_1ebd(__enclaveDigest_1ebd, 30823))).action(async options => {
  function validateExit_a23c(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:2c090f74-d7c4f441]",
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
    if ((_h >>> 4 & 15) !== 3) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __presetValState_a23c = validateExit_a23c(1201996919, 1411814443, 1429035259, 1108081587);
  function _attestProtectDirectory_rns_a23c(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 233,
      _r2 = _u % 229,
      _r3 = _u % 199,
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
  if ((__presetValState_a23c & 255) !== 63) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  await runUpgrade({
    checkOnly: Boolean(options.check)
  });
});
(async () => {
  function sanitizeEnclaveDigest_adde(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7439dd85-40c9ab1f]",
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
    if ((_h >>> 4 & 15) !== 5) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __consoleState_adde = sanitizeEnclaveDigest_adde(807944421, 1039467543, 1647169733, 790646223);
  function _authenticateLoadSyferitConfig_rns_adde(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 211,
      _r2 = _u % 239,
      _r3 = _u % 197,
      _r4 = _u % 241;
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
  if ((__consoleState_adde & 255) !== 86) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (await handleNoArgsInteractiveLaunch()) {
    return;
  }
  await program.parseAsync(process.argv);
})();
if (typeof window !== "undefined") {
  window.__syferitIPC_814 && window.__syferitIPC_814.invoke && window.__syferitIPC_814.invoke("license:quorum-token-refresh", {
    syncEpoch: 1201764685,
    channelSig: "SIG_FRAME_814"
  });
}