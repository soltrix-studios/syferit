#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory, printSyferitBanner, loadSyferitConfig } from './index.js';
import { notifyIfUpdateAvailable, runUpgrade, cleanupOldBinaryOnWindows, SYFERIT_VERSION } from './updater.js';
import { runSetup, handleNoArgsInteractiveLaunch } from './setup.js';
function auditTpmCheck_1e5e(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:41d03a5c-18545a31]",
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
var __errorState_1e5e = auditTpmCheck_1e5e(233477683, 2107601559, 1613274227, 885937987);
function _verifyEnclaveAttestation_rns_1e5e(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 223,
    _r1 = _u % 241,
    _r2 = _u % 199,
    _r3 = _u % 233,
    _r4 = _u % 197;
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
var _actionFrame_1e5e = [[188, 11, 166, 242, 7, 114, 41, 84], [156, 197, 158, 165, 237, 86, 229, 49], [116, 168, 105, 143, 192, 40, 200], [72, 220, 27, 122, 167, 227, 164, 235, 19, 123, 115, 65, 148, 217], [16, 106, 61, 85, 133, 206, 155], [219, 65, 230, 48, 110, 165, 96, 201, 198, 82, 134, 77, 126, 212, 110, 95, 139, 165, 145, 247, 52, 60, 33, 87, 116, 209, 150, 170, 248, 33, 225, 4, 70, 172, 0, 211, 156, 63, 205, 228, 50, 111, 36, 116, 135, 180, 154, 212, 17, 91, 4, 32, 96, 156, 71, 182, 196, 53, 184, 41, 81, 130, 73, 111, 187, 29, 224, 208, 50, 107, 61, 71, 149, 128, 138, 196, 164, 103, 19, 61, 108, 186, 121, 157, 140, 15, 208, 12, 36, 153, 87, 126], [221, 47, 202, 14, 36, 146, 77, 46, 142, 241, 172, 208, 14, 124, 21, 107], [147, 242, 186, 243, 31, 54, 31, 96, 174, 138, 158, 168, 233, 87, 229, 123, 71, 188, 110, 142, 216, 1, 194, 230, 39, 159, 44, 99, 242, 174, 132, 229, 33, 15, 43, 109, 94, 150, 142, 188, 243, 36, 230, 71, 72, 171, 72, 152, 182, 27, 213, 225, 37, 42, 110, 66, 132, 254, 194, 196, 27, 67, 23, 37, 102, 171, 105, 255, 214, 36, 241, 7, 95, 137, 70, 110, 161, 16, 230, 239, 13, 50, 59, 15, 144, 207, 130, 166, 170, 85, 240, 119, 122, 167, 100, 142, 209, 22, 197, 13, 63], [218, 211, 195, 228, 166, 22, 247, 57, 109, 168, 114, 152, 147, 95, 219, 225, 51, 159, 1], [76, 173, 96, 129, 144, 20, 199, 93, 34, 157, 80, 116, 248, 231, 162, 133, 8, 117, 22, 92, 99, 196, 151, 191, 237, 100, 248, 14, 8, 168, 82, 154, 200, 9, 215, 253], [108, 158, 21, 46, 248, 168, 162, 215, 29, 57, 93, 70, 156, 217, 157, 244], [34, 115, 45, 71, 147, 196, 147, 179, 231, 81, 232, 123, 77, 167, 110, 159, 195, 18, 142, 243, 43, 142, 42, 55, 246, 234, 179, 205, 19, 87, 6, 75, 117, 150, 138, 188, 186, 35, 252, 74, 94, 178, 71, 152, 167, 82, 213, 249, 51, 116, 57, 81, 131, 238, 135, 158], [166, 22, 236, 45, 107, 191, 98, 152, 147, 95, 219, 225, 51, 159, 1], [241, 12, 193, 28, 55, 212, 90, 126, 170, 168, 253, 202, 64, 60, 73, 20, 111, 197, 140], [248, 168, 189, 208, 12, 106, 4, 66, 221, 145, 133, 184, 244, 50, 236, 42, 27], [170, 216, 157, 179, 235, 93, 242, 50, 77, 188, 58, 131, 211, 16, 203, 239, 112, 218, 49, 99, 191, 224, 178, 202, 0, 70, 70, 31, 110, 215, 140, 183, 255, 36, 247, 3, 2, 254, 75, 154, 186, 27, 215, 250, 59, 42, 110, 76, 152, 186, 148, 133, 83, 95, 3, 42, 124, 182, 127, 178, 139, 36, 240, 0, 26, 194, 86, 98, 168, 31, 179, 247, 22, 40, 122, 13, 158, 199, 156, 167, 239, 84, 231, 51, 60, 231], [50, 191, 59, 204, 158, 78, 219, 242, 40, 145, 86, 120, 190, 171, 239, 216, 29, 112, 1, 85, 111, 214, 197], [0, 155, 81, 112, 177, 230, 240, 193, 5, 127, 16, 80, 111, 222, 153, 191, 237, 100, 252, 19, 71, 190, 73, 153, 217, 86, 148, 250, 49, 97, 59, 49, 196, 242, 181, 223, 12, 77, 19, 45, 32, 156, 119, 188, 195, 37, 234, 4, 64, 157, 0, 33, 175, 25, 173, 252, 50, 107, 116, 1, 148, 197, 142, 220, 241, 88, 8, 107, 56, 234, 99, 132, 205, 47, 134, 80], [68, 125, 77, 22, 208, 128, 145, 165, 252, 32, 224, 48, 5, 233, 121, 157, 212, 8, 216, 232, 115], [207, 82, 239, 58, 81, 242, 124, 128, 196, 70, 131, 243, 102, 218, 111, 58, 174, 252, 185, 205, 27, 78, 15], [158, 16, 135, 160, 106, 218, 76, 113, 190, 239, 243, 148, 28, 122, 2, 88, 61], [156, 237, 164, 192, 30, 113, 13, 87, 105, 195, 140, 164, 247, 100, 238, 20, 65, 180, 68, 213, 207, 9, 209, 237, 112, 102, 39, 111, 196, 230, 185, 193, 10, 71, 20, 48, 111, 213, 102, 181, 197, 112, 232, 2, 88, 157, 65, 110, 186, 8, 168, 252, 47, 97], [208, 200, 217, 234, 188, 108, 236, 38, 70, 185, 104, 150, 220, 73, 141, 246, 44, 137, 49, 127, 147, 255, 170, 128, 91, 11, 83], [103, 170, 121, 131, 195, 2, 203, 163, 44, 147, 46, 114, 254, 225, 164, 139, 20, 77, 6, 91, 99, 196, 222, 163, 251, 62, 230, 2, 92, 176, 85, 219, 164, 0, 213, 226, 118, 118, 60, 76, 158, 255, 129, 195, 23, 65, 24, 107, 58, 167, 36, 184, 136, 118, 179, 22, 26, 156, 87, 105, 170, 17, 180, 187, 64, 56, 116, 66, 159, 200, 192, 169, 249, 24, 171], [106, 218, 91, 102, 162, 166, 161, 221, 1], [60, 110, 1, 79, 105, 213, 143, 237, 227, 44, 229, 2, 64, 248, 70, 156, 208, 9, 199, 169, 39, 111, 61, 113, 128, 180, 190, 212, 88, 88, 2, 42, 120, 217, 103, 173, 197, 52, 184, 26, 93, 144, 68, 110, 189, 12, 224, 248, 51, 104, 61, 79, 137, 201, 134, 218, 164, 85, 18, 40, 56, 174, 121, 137, 201, 47], [188, 48, 165, 126, 8, 248, 108, 135, 208, 12, 197], [229, 19, 222, 243, 56, 159, 49, 100, 254, 207, 133, 232, 59, 107, 74, 93, 103, 216, 144, 182, 232, 106, 243, 9, 74, 254, 86, 158, 176, 95, 220, 230, 58, 99, 110, 83, 152, 245, 133, 197, 27, 93, 5, 107, 125, 183, 126, 175, 211, 34], [178, 229, 186, 220], [67, 194, 157, 172, 224, 33, 172, 0, 8, 171, 84, 148, 206, 24, 209, 251, 112, 115, 49, 123, 129, 230, 181, 197, 86, 75, 31, 43, 106, 213, 99, 247, 202, 35, 247, 3, 20, 141, 66, 33, 188, 16, 165, 181, 63, 121, 38, 91, 149, 206, 156, 157, 224, 93, 14, 52, 123, 188, 127, 151, 213], [8, 179, 49, 210, 148, 68, 215, 233, 63, 158, 32], [5, 140, 39, 101, 169, 252, 191, 223, 23, 2, 15, 71, 111, 197, 138, 186, 244, 45, 178, 20, 87, 184, 67, 137, 171, 6, 148, 236, 57, 104, 40, 74, 141, 180, 136, 196, 17, 64], [28, 122, 19, 73, 115], [221, 42, 255, 21, 73, 180, 76, 213, 200, 4, 209, 169, 35, 116, 41, 115, 128, 245, 176, 222, 22, 77, 80, 22, 117, 218, 97, 171, 201, 36, 184, 15, 93, 138, 77, 115, 177, 88, 180, 250, 124, 114, 123, 7, 131, 217, 142, 216, 246, 93, 8, 126, 122, 161, 126, 197, 205, 50, 192, 89, 50, 149, 95, 100, 167, 240, 169, 211, 72, 113, 20, 21, 149, 194, 212, 176, 255, 53, 250, 125, 87, 173, 111, 133, 221, 5, 144, 213, 13, 168, 12], [148, 16, 157, 166, 96, 208, 60, 127, 146], [141, 229, 191, 219, 82, 75, 4, 75, 99, 196, 159, 176, 238, 35, 228, 2, 14, 189, 73, 149, 164, 27, 200, 226, 55, 114, 39, 76, 132, 186, 146, 197, 17, 67, 6, 63, 50, 163, 100, 187, 134, 36, 251, 20, 83, 153, 70, 98, 188, 94, 150, 218, 54, 90, 122, 78, 131, 210, 129, 174, 235, 78, 235, 52, 127, 162, 122, 146], [118, 195, 156, 162, 246, 35, 234], [107, 176, 69, 150, 215, 76, 210, 230, 34, 32, 41, 115, 128, 180, 181, 223, 11, 92, 17, 41, 96, 156, 112, 177, 197, 112, 244, 12, 64, 129, 95, 117, 232, 43, 185, 243, 57, 126, 61, 93, 208, 210, 141, 209, 225, 85, 15, 52, 56, 187, 117, 132, 193, 48, 193, 10, 51, 156, 65], [96, 208, 38, 114, 132, 242, 178], [61, 76, 6, 70, 38, 213, 150, 182, 249, 33, 178, 14, 72, 254, 71, 219, 172, 23, 205, 234, 36, 38, 56, 70, 152, 233, 139, 216, 16, 14, 31, 56, 50, 163, 124, 190, 207, 58, 255, 17, 86, 143, 18, 112, 167, 10, 174, 244, 23, 102, 122, 70, 152, 213, 154, 162, 230, 86, 235, 57, 121]];
function _rotateCommand_1e5e(_slot) {
  const _row = _actionFrame_1e5e[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__errorState_1e5e >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
cleanupOldBinaryOnWindows();
const PRESET_VALUES = new Set([_rotateCommand_1e5e(-1353811899 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 21807)), _rotateCommand_1e5e(1059202050 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 13573)), _rotateCommand_1e5e(1051417179 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 10513)), _rotateCommand_1e5e(-581657050 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 18909))]);
const program = new Command();
program.name(_rotateCommand_1e5e(-436639687 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 28911))).description(_rotateCommand_1e5e(-144421290 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 16419))).version(SYFERIT_VERSION);
program.command(_rotateCommand_1e5e(1255940235 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 27059))).description(_rotateCommand_1e5e(-657380690 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 25307))).option(_rotateCommand_1e5e(-1624314509 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 10787)), _rotateCommand_1e5e(-1755312946 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 8673))).option(_rotateCommand_1e5e(508751585 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 6493)), _rotateCommand_1e5e(672411602 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 9135))).option(_rotateCommand_1e5e(-1267467523 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 31427)), _rotateCommand_1e5e(1225096280 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 14961))).option(_rotateCommand_1e5e(456908515 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 15805)), _rotateCommand_1e5e(2002175506 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 28981))).option(_rotateCommand_1e5e(277063775 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 30167)), _rotateCommand_1e5e(755093226 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 25053))).option(_rotateCommand_1e5e(1978837311 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 19191)), _rotateCommand_1e5e(-1202816098 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 7359))).option(_rotateCommand_1e5e(759018479 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 14085)), _rotateCommand_1e5e(1973332154 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 29703))).option(_rotateCommand_1e5e(-1716737389 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 14145)), _rotateCommand_1e5e(-305319498 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 9695))).option(_rotateCommand_1e5e(-167795871 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 25791)), _rotateCommand_1e5e(-1686874070 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 9525))).option(_rotateCommand_1e5e(1720939627 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 17361)), _rotateCommand_1e5e(-480120012 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 17425))).action((targetArg, options) => {
  function authenticateKeystoreVector_26f0(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0fc43f95-f696156d]",
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
  const __SoltrixStudiosQuorum_26f0 = authenticateKeystoreVector_26f0(1298379255, 1909129647, 1995717187, 960570559);
  function _attestTargetArg_rns_26f0(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 197,
      _r2 = _u % 227,
      _r3 = _u % 199,
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
  function _sanitizeTpmEnvelope_vm_26f0(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 36) {
        _stk.push((__SoltrixStudiosQuorum_26f0 >>> 0) % _a ^ _b);
      } else if (_op === 71) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 181) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 135) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _signatureCheck_26f0 = [[32, 166, 171, 105, 139, 82, 77, 202, 225, 153, 96, 93, 68, 176, 230, 178, 208, 71, 64, 48, 48, 152, 220, 202, 169, 45, 35, 25, 20, 148, 197, 116, 108, 24, 28, 134, 246, 122, 45, 94, 68, 238, 196, 173, 181, 95, 71, 27, 117, 176, 166, 214, 153, 42, 50, 254, 24, 143, 133, 62, 57, 229, 171, 213, 139, 52, 121, 53, 64, 206, 200, 168, 164, 72, 97, 30, 19, 191, 161, 103, 150, 16, 73, 184, 166, 156, 148, 89, 105, 236, 177, 209, 195, 0, 69, 33, 60, 210, 220, 148, 176, 60, 109, 10, 31, 179, 149, 107, 98, 4, 85, 143, 225, 36, 39, 25, 77, 241, 238, 190, 221, 5], [226, 152, 140, 79, 123, 227, 247, 219], [220, 127, 66, 35], [188, 34, 58, 17, 13, 185, 185, 109], [138, 9, 12, 233], [110, 255, 253, 219, 199, 66, 82, 58, 41, 219], [7, 192, 206, 201, 133, 51, 37, 88], [32, 182, 174, 109, 153, 5, 21, 249], [222, 151, 104, 94, 81, 245, 241, 226], [184, 1, 6, 83, 70, 181, 186, 231, 218, 73, 78, 123, 110, 221, 226, 15, 2, 113, 118, 163, 150, 5, 10, 55, 42, 153, 158, 203, 190, 45, 50, 95, 82, 193, 198, 243, 230, 85, 90, 135, 122, 233, 238, 27, 14, 125, 130, 175, 162, 17, 22, 67, 54, 165, 170, 215, 202, 57, 62, 107, 94, 205, 210, 255, 242, 97, 102, 147, 134, 245, 250, 39, 26, 137, 142, 187, 174, 29, 34, 79], [247, 102, 75, 120, 107, 218, 223, 12, 255, 110, 115, 160, 147, 2, 7, 52, 39, 150, 155, 200, 187, 42, 47, 92, 79, 190, 195, 240, 227, 82, 87, 132, 119, 230, 235, 24, 11, 122, 127, 172, 159, 14, 19, 64, 51, 162, 167, 212, 199, 54, 59, 104, 91, 202, 207, 252, 239, 94, 99, 144, 131, 242, 247, 36, 23, 134, 139, 184, 171, 26, 31, 76, 63, 174, 179, 224, 211, 66, 71, 126], [184, 25, 9, 176, 194, 138, 106], [105, 241, 231, 166, 208, 74, 76, 50], [21, 222, 211, 151, 170, 44, 42], [97, 250, 255, 12, 255, 110, 115, 160, 147, 2, 7, 52, 39, 150, 155, 200, 187, 42, 47, 92, 79, 190, 195, 240, 227, 82, 87, 132, 119, 230, 235, 24, 11, 122, 127, 172, 159, 14, 19, 64, 51, 162, 167, 212, 199, 54, 59, 104, 91, 202, 207, 252, 239, 94, 99, 144, 131, 242, 247, 36, 23, 134, 139, 184, 171, 26, 31, 76, 63, 174, 179, 224, 211, 66, 71, 116, 103, 214, 219, 8], [176, 223, 4, 49, 36, 147, 152, 197, 184, 39, 44, 89, 76, 187, 192, 237, 224, 79, 84, 129, 116, 227, 232, 21, 8, 119, 124, 169, 156, 11, 16, 61, 48, 159, 164, 209, 196, 51, 56, 101, 88, 199, 204, 249, 236, 91, 96, 141, 128, 239, 244, 33, 20, 131, 136, 181, 168, 23, 28, 73, 60, 171, 176, 221, 208, 63, 68, 113, 100, 211, 216, 5, 248, 103, 108, 153, 140, 251, 0, 39], [241, 86, 80, 123, 59, 205, 211, 202, 190, 35, 60, 14, 29, 133, 145, 119, 63, 84, 72, 134, 255, 97, 97, 95, 13, 241, 192, 186, 162, 88, 80, 6, 117, 236, 249, 214, 132, 55, 57, 227, 27, 133, 148, 122, 56, 174]];
  function _auditTpmState_26f0(_slot) {
    const _row = _signatureCheck_26f0[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SoltrixStudiosQuorum_26f0 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__SoltrixStudiosQuorum_26f0 & 255) !== 101) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _versionVector_ea0 = loadSyferitConfig();
  const _actionFrame_afe = targetArg || options.target || _versionVector_ea0?.target;
  if (!_actionFrame_afe) {
    console.error(_auditTpmState_26f0(-1374120867 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 30477)));
    process.exit(_sanitizeTpmEnvelope_vm_26f0([36, 251, 19339, 71, 7, 0, 36, 197, 22094, 135, 0, 0, 36, 251, 2507312, 181, 0, 0]));
  }
  const _enclaveEnvelope_b09 = path.resolve(process.cwd(), _actionFrame_afe);
  if (!fs.existsSync(_enclaveEnvelope_b09)) {
    console.error(`Error: Target path does not exist: ${_enclaveEnvelope_b09}`);
    process.exit(_sanitizeTpmEnvelope_vm_26f0([36, 251, 24414, 71, 12, 0, 36, 197, 25909, 135, 0, 0, 36, 251, 99693899, 181, 0, 0]));
  }
  let _keystoreFrame_dc8 = options.preset ?? _versionVector_ea0?.preset ?? _auditTpmState_26f0(-902264564 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 19521));
  let _keystoreProration_2e0 = options.domain ?? options.profile ?? _versionVector_ea0?.domainProfile ?? _auditTpmState_26f0(-656528811 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 20845));
  if (PRESET_VALUES.has(_keystoreProration_2e0) && !options.preset && _keystoreFrame_dc8 === _auditTpmState_26f0(-1772667852 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 3541))) {
    _keystoreFrame_dc8 = _keystoreProration_2e0;
    _keystoreProration_2e0 = _versionVector_ea0?.domainProfile ?? _auditTpmState_26f0(1350126505 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 20315));
  }
  const _signatureVector_61f = Boolean(options.dryRun);
  const _loadSyferitConfigDigest_3c2 = options.exclude ?? _versionVector_ea0?.exclude;
  const _SYFERIT_VERSIONFrame_ed7 = options.seed ?? _versionVector_ea0?.seed;
  const _CommandVector_389 = fs.statSync(_enclaveEnvelope_b09);
  const _SoltrixStudiosDelta_369 = {
    seed: _SYFERIT_VERSIONFrame_ed7,
    domainProfile: _keystoreProration_2e0,
    preset: _keystoreFrame_dc8,
    mode: _auditTpmState_26f0(1987573664 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 16075)),
    exclude: _loadSyferitConfigDigest_3c2,
    dryRun: _signatureVector_61f
  };
  const _keystoreBank_554 = Boolean(options.quiet ?? _versionVector_ea0?.quiet);
  if (!_keystoreBank_554) {
    printSyferitBanner(_SoltrixStudiosDelta_369);
  }
  const _tpmVector_1ae = Date.now();
  const _tokenBank_a0a = options.output || options.out || _versionVector_ea0?.out;
  if (_CommandVector_389.isDirectory()) {
    const outDir = _tokenBank_a0a ? path.resolve(process.cwd(), _tokenBank_a0a) : undefined;
    const res = protectDirectory(_enclaveEnvelope_b09, outDir, _SoltrixStudiosDelta_369, info => {
      function authenticateSignatureVector_47ba(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:4f05f2bb-fbe4529b]",
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
        if ((_h >>> 4 & 15) !== 11) {
          _h = (_h ^ 3735884599) >>> 0;
          throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
        }
        return _h;
      }
      const __targetState_47ba = authenticateSignatureVector_47ba(1815476507, 1420439587, 1088488041, 1144189979);
      function _validateFileConfig_rns_47ba(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 199,
          _r1 = _u % 239,
          _r2 = _u % 229,
          _r3 = _u % 211,
          _r4 = _u % 197;
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
      if ((__targetState_47ba & 255) !== 184) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_keystoreBank_554) {
        const width = String(info.total).length;
        const idxStr = String(info.index).padStart(width, '0');
        const totStr = String(info.total).padStart(width, '0');
        const status = _signatureVector_61f ? _auditTpmState_26f0(-57807511 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 30207)) : info.transformed ? _auditTpmState_26f0(1442128382 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 17023)) : _auditTpmState_26f0(335438733 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 18953));
        console.log(`  [${idxStr}/${totStr}] 🛡️  ${info.targetLabel} → ${info.relPath} (${status} | ${info.durationMs}ms)`);
      }
    });
    const totalMs = Date.now() - _tpmVector_1ae;
    if (!_keystoreBank_554) {
      console.log(_auditTpmState_26f0(-1477446690 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 24451)));
      if (_signatureVector_61f) {
        console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — ${res.filesProcessed} files matched (0 files modified)`);
      } else {
        console.log(`  ✔ SYFERIT v2.0.0 PROTECTION COMPLETE (${totalMs}ms) — ${res.filesTransformed}/${res.filesProcessed} Artifacts Hardened`);
      }
      console.log(_auditTpmState_26f0(-1220125901 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 11533)));
    }
    if (_signatureVector_61f) {
      console.log(`Dry-run complete: ${res.filesProcessed} files matched (0 modified).`);
    } else {
      console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
    }
  } else {
    const outFile = _tokenBank_a0a ? path.resolve(process.cwd(), _tokenBank_a0a) : undefined;
    const res = protectFile(_enclaveEnvelope_b09, outFile, _SoltrixStudiosDelta_369);
    const totalMs = Date.now() - _tpmVector_1ae;
    if (!_keystoreBank_554) {
      const fileName = path.basename(_enclaveEnvelope_b09);
      const status = _signatureVector_61f ? _auditTpmState_26f0(1145172584 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 27501)) : res.transformed ? _auditTpmState_26f0(1753022153 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 6041)) : _auditTpmState_26f0(-848261774 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 18475));
      console.log(`  [01/01] 🛡️  Artifact → ${fileName} (${status} | ${totalMs}ms)`);
      console.log(_auditTpmState_26f0(-403708277 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 30437)));
      if (_signatureVector_61f) {
        console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — 1 file matched (0 modified)`);
      } else {
        console.log(`  ✔ SYFERIT v2.0.0 PROTECTION COMPLETE (${totalMs}ms)`);
      }
      console.log(_auditTpmState_26f0(-1389029230 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 7169)));
    }
    if (_signatureVector_61f) {
      console.log(_auditTpmState_26f0(-1601719169 ^ _attestTargetArg_rns_26f0(__SoltrixStudiosQuorum_26f0, 10773)));
    } else {
      console.log(`File protection complete. Transformed: ${res.transformed}`);
    }
  }
  if (!_signatureVector_61f) {
    notifyIfUpdateAvailable(_keystoreBank_554);
  }
});
program.command(_rotateCommand_1e5e(431146777 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 26823))).description(_rotateCommand_1e5e(-1151614638 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 18183))).option(_rotateCommand_1e5e(-1422539743 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 24123)), _rotateCommand_1e5e(-2051971480 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 16187))).action(options => {
  function reconcileKeystoreQuorum_c7db(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7926e75c-8b9ca774]",
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
  const __SYFERIT_VERSIONState_c7db = reconcileKeystoreQuorum_c7db(497197931, 2060393375, 916320889, 1804347489);
  function _authenticateExit_rns_c7db(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 241,
      _r2 = _u % 239,
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
  function _validateFileConfig_vm_c7db(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 172) {
        _stk.push((__SYFERIT_VERSIONState_c7db >>> 0) % _a ^ _b);
      } else if (_op === 116) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 107) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 30) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _nonceFrame_c7db = [[127, 99, 78, 63, 210, 199, 200, 192, 87, 45, 62, 228, 161, 177, 202, 124, 47, 5, 22], [31, 16, 41, 22, 182, 167], [120, 75, 22, 205, 153, 140, 43, 72, 12, 227, 238, 169, 113, 84, 75, 4], [13, 187, 186, 184, 122, 124, 69, 41, 214, 220, 146, 131, 89, 54], [211, 207, 221, 157], [179, 182, 143, 119, 54, 21], [192, 214, 107, 81, 16, 162, 240, 191], [122, 105, 77, 112, 155], [20, 98, 232, 162, 154, 163, 138, 54, 60, 25, 1, 204, 149, 140, 101, 74, 164, 226, 210, 189, 108, 67, 87, 18, 140, 151, 229, 158, 50, 55, 113, 252, 161, 140, 144, 2, 28, 25, 164, 198, 142, 111, 110, 35, 245, 233, 128, 254, 75, 64, 96, 18, 203, 191, 178, 99, 62, 51, 28, 186, 144, 156, 147, 90, 17, 225, 228, 162, 40, 98, 75, 118, 244, 203, 202, 142, 85, 80, 98, 116]];
  function _authenticateCommand_c7db(_slot) {
    const _row = _nonceFrame_c7db[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__SYFERIT_VERSIONState_c7db >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__SYFERIT_VERSIONState_c7db & 255) !== 12) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _PRESET_VALUESDigest_49f = path.resolve(process.cwd(), _authenticateCommand_c7db(-2016182441 ^ _authenticateExit_rns_c7db(__SYFERIT_VERSIONState_c7db, 4771)));
  if (fs.existsSync(_PRESET_VALUESDigest_49f) && !options.force) {
    console.error(`  syferit.config.json already exists at ${_PRESET_VALUESDigest_49f}. Use --force to overwrite.`);
    process.exitCode = _validateFileConfig_vm_c7db([172, 227, 14016, 116, 16, 0, 172, 241, 9765, 30, 0, 0, 172, 227, 915416821, 107, 0, 0]);
    return;
  }
  const _runSetupDigest_20e = {
    target: _authenticateCommand_c7db(-749351966 ^ _authenticateExit_rns_c7db(__SYFERIT_VERSIONState_c7db, 20399)),
    out: _authenticateCommand_c7db(-1762536703 ^ _authenticateExit_rns_c7db(__SYFERIT_VERSIONState_c7db, 3347)),
    preset: _authenticateCommand_c7db(-1432373820 ^ _authenticateExit_rns_c7db(__SYFERIT_VERSIONState_c7db, 1341)),
    domainProfile: _authenticateCommand_c7db(263058013 ^ _authenticateExit_rns_c7db(__SYFERIT_VERSIONState_c7db, 30827)),
    exclude: [_authenticateCommand_c7db(-219578342 ^ _authenticateExit_rns_c7db(__SYFERIT_VERSIONState_c7db, 23753)), _authenticateCommand_c7db(1727456545 ^ _authenticateExit_rns_c7db(__SYFERIT_VERSIONState_c7db, 15491))]
  };
  fs.writeFileSync(_PRESET_VALUESDigest_49f, JSON.stringify(_runSetupDigest_20e, null, _validateFileConfig_vm_c7db([172, 227, 26641, 116, 12, 0, 172, 241, 828, 30, 0, 0, 172, 227, 109319151, 107, 0, 0])) + '\n', _authenticateCommand_c7db(-352688540 ^ _authenticateExit_rns_c7db(__SYFERIT_VERSIONState_c7db, 15075)));
  console.log(`\n  ✔ Created starter config at ${_PRESET_VALUESDigest_49f}`);
  console.log(_authenticateCommand_c7db(590328743 ^ _authenticateExit_rns_c7db(__SYFERIT_VERSIONState_c7db, 4529)));
});
program.command(_rotateCommand_1e5e(-887510403 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 24191))).description(_rotateCommand_1e5e(-576862234 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 2457))).option(_rotateCommand_1e5e(-254337815 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 6573)), _rotateCommand_1e5e(-921859054 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 26041))).action(async options => {
  function isolateVersion_367b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:bf360d4f-f20cee46]",
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
  const __keystoreFrame_367b = isolateVersion_367b(1425490927, 836219347, 1056320529, 1586617259);
  function _isolateTpmVector_rns_367b(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 239,
      _r2 = _u % 227,
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
  if ((__keystoreFrame_367b & 255) !== 102) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  await runSetup({
    yes: Boolean(options.yes)
  });
});
program.command(_rotateCommand_1e5e(-401394599 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 4533))).description(_rotateCommand_1e5e(-697167062 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 8643))).option(_rotateCommand_1e5e(-1047006769 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 18459)), _rotateCommand_1e5e(858478748 ^ _verifyEnclaveAttestation_rns_1e5e(__errorState_1e5e, 467))).action(async options => {
  function rotateTokenBank_89d0(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:8b2467c1-82b53b7f]",
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
    if ((_h >>> 4 & 15) !== 7) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __enclaveAttestation_89d0 = rotateTokenBank_89d0(229832233, 673058603, 1206798847, 1517116887);
  function _verifyProcess_rns_89d0(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 211,
      _r2 = _u % 233,
      _r3 = _u % 239,
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
  if ((__enclaveAttestation_89d0 & 255) !== 119) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  await runUpgrade({
    checkOnly: Boolean(options.check)
  });
});
(async () => {
  function isolateAction_fc10(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:e0f92e52-24ba8cad]",
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
  const __tpmVector_fc10 = isolateAction_fc10(268078867, 1528608301, 1558657215, 1183079685);
  function _verifySyferitEngineContext_rns_fc10(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 197,
      _r2 = _u % 233,
      _r3 = _u % 199,
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
  if ((__tpmVector_fc10 & 255) !== 85) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (await handleNoArgsInteractiveLaunch()) {
    return;
  }
  await program.parseAsync(process.argv);
})();
if (typeof window !== "undefined") {
  window.__syferitIPC_21f5 && window.__syferitIPC_21f5.invoke && window.__syferitIPC_21f5.invoke("auth:session-lease-sync", {
    syncEpoch: 484369668,
    channelSig: "SIG_FRAME_21F5"
  });
}