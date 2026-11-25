#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory, printSyferitBanner, loadSyferitConfig } from './index.js';
import { notifyIfUpdateAvailable, runUpgrade, cleanupOldBinaryOnWindows, SYFERIT_VERSION } from './updater.js';
import { runSetup, handleNoArgsInteractiveLaunch } from './setup.js';
function auditTpmState_e91(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:efab99ac-ea123968]",
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
  if ((_h >>> 4 & 15) !== 13) {
    _h = (_h ^ 3735884599) >>> 0;
    throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
  }
  return _h;
}
var __signatureFrame_e91 = auditTpmState_e91(1918929187, 1258958075, 1721487683, 1186226969);
function _rotatePrintSyferitBanner_rns_e91(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 229,
    _r1 = _u % 241,
    _r2 = _u % 223,
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
var _targetCheck_e91 = [[160, 166, 113, 181, 3, 7, 214, 11], [144, 150, 71, 100, 233, 229, 172, 240], [112, 125, 34, 76, 220, 197, 131], [52, 115, 82, 59, 163, 180, 125, 170, 31, 4, 138, 0, 144, 142], [20, 31, 194, 10, 137, 147, 76], [223, 242, 175, 241, 82, 118, 41, 8, 194, 129, 223, 140, 114, 103, 215, 30, 143, 246, 88, 182, 40, 79, 232, 22, 112, 98, 47, 107, 244, 242, 184, 197, 66, 95, 73, 18, 224, 236, 132, 165, 54, 60, 253, 53, 139, 199, 99, 149, 21, 8, 205, 225, 124, 47, 14, 119, 192, 198, 193, 232, 93, 81, 16, 46, 191, 174, 41, 145, 14, 56, 244, 6, 145, 211, 83, 133, 168, 212, 170, 252, 104, 105, 48, 92, 144, 252, 153, 205, 32, 42, 238, 63], [193, 194, 129, 205, 32, 39, 246, 109, 130, 172, 119, 147, 10, 9, 222, 40], [151, 165, 99, 178, 19, 73, 230, 33, 170, 221, 87, 105, 245, 248, 172, 186, 67, 75, 23, 79, 212, 222, 155, 167, 35, 40, 229, 34, 206, 193, 77, 164, 37, 88, 242, 44, 82, 41, 55, 125, 247, 243, 175, 134, 84, 68, 1, 89, 178, 172, 108, 160, 41, 117, 183, 3, 128, 137, 11, 133, 231, 236, 222, 228, 98, 124, 48, 62, 218, 219, 136, 198, 91, 94, 15, 47, 189, 191, 47, 174, 9, 69, 194, 78, 156, 144, 91, 103, 174, 226, 185, 182, 70, 72, 45, 79, 213, 193, 156, 204, 51], [214, 142, 20, 35, 162, 163, 184, 246, 81, 69, 5, 95, 151, 138, 132, 222, 63, 34, 182], [112, 126, 41, 64, 148, 199, 158, 156, 46, 46, 233, 53, 252, 180, 107, 196, 20, 6, 223, 29, 103, 119, 46, 126, 225, 183, 161, 207, 12, 91, 27, 91, 180, 218, 158, 188], [104, 43, 174, 109, 244, 245, 121, 148, 25, 76, 150, 5, 96, 116, 86, 55], [46, 12, 212, 6, 151, 147, 90, 114, 251, 254, 161, 186, 73, 80, 23, 94, 207, 205, 215, 178, 47, 57, 227, 118, 202, 133, 122, 140, 23, 0, 223, 10, 121, 41, 51, 125, 190, 244, 181, 139, 66, 93, 14, 89, 163, 229, 108, 184, 63, 43, 224, 16, 135, 153, 78, 223], [162, 163, 163, 226, 87, 82, 21, 95, 151, 138, 132, 222, 63, 34, 182], [245, 223, 152, 221, 59, 103, 227, 63, 174, 251, 52, 139, 92, 79, 128, 85, 107, 118, 53], [244, 245, 102, 147, 8, 31, 207, 1, 33, 60, 78, 123, 240, 231, 183, 233, 23], [174, 143, 84, 114, 247, 242, 187, 243, 73, 75, 67, 66, 223, 207, 146, 174, 116, 109, 248, 34, 131, 143, 123, 139, 4, 17, 159, 94, 98, 104, 53, 118, 251, 243, 190, 194, 30, 17, 2, 91, 190, 172, 110, 187, 55, 117, 183, 13, 156, 205, 93, 196, 175, 240, 202, 235, 120, 97, 38, 115, 135, 219, 137, 193, 30, 21, 31, 35, 180, 176, 122, 182, 18, 95, 131, 76, 140, 203, 26, 115, 251, 236, 165, 226, 87, 76, 114, 88, 216, 198, 209, 151], [14, 82, 76, 11, 154, 155, 132, 205, 36, 44, 225, 63, 186, 254, 32, 151, 1, 29, 214, 18, 107, 99, 122], [12, 40, 232, 49, 181, 181, 57, 128, 25, 12, 217, 17, 107, 109, 32, 126, 225, 183, 165, 210, 67, 77, 0, 88, 165, 133, 221, 187, 53, 50, 226, 112, 200, 129, 76, 158, 8, 30, 218, 236, 60, 47, 62, 125, 199, 214, 147, 197, 76, 78, 89, 96, 171, 170, 100, 189, 14, 56, 189, 64, 144, 150, 87, 157, 253, 235, 177, 170, 60, 57, 42, 69, 209, 220, 207, 145], [64, 8, 134, 85, 44, 45, 90, 102, 248, 245, 187, 243, 9, 20, 2, 94, 208, 221, 147, 171, 111], [211, 253, 166, 251, 85, 5, 5, 65, 200, 153, 218, 178, 98, 109, 166, 123, 146, 147, 112, 140, 31, 25, 214], [154, 197, 216, 159, 102, 103, 251, 54, 186, 186, 60, 219, 0, 23, 213, 31, 57], [152, 190, 109, 129, 2, 2, 196, 22, 109, 112, 53, 101, 251, 183, 183, 213, 69, 71, 13, 20, 179, 218, 152, 172, 116, 53, 254, 46, 200, 149, 64, 128, 14, 20, 221, 241, 115, 102, 47, 116, 193, 131, 145, 195, 84, 78, 24, 47, 190, 187, 97, 189, 19, 50], [44, 101, 18, 41, 184, 185, 183, 229, 74, 68, 19, 85, 216, 156, 198, 181, 48, 36, 250, 60, 151, 138, 81, 195, 87, 86, 136], [99, 93, 0, 66, 207, 221, 146, 226, 40, 36, 231, 51, 194, 142, 109, 202, 16, 26, 223, 26, 111, 123, 103, 98, 255, 233, 175, 195, 64, 95, 28, 26, 160, 183, 108, 163, 122, 41, 229, 13, 154, 136, 72, 130, 235, 238, 209, 170, 62, 112, 125, 121, 132, 137, 202, 215, 30, 75, 30, 40, 182, 190, 125, 250, 68, 79, 141, 3, 147, 151, 25, 104, 253, 175, 226], [102, 103, 236, 33, 166, 243, 110, 146, 29], [32, 29, 200, 14, 109, 102, 54, 44, 239, 255, 188, 195, 68, 11, 15, 93, 172, 218, 142, 232, 35, 60, 228, 48, 140, 199, 71, 149, 92, 11, 203, 235, 100, 106, 46, 108, 193, 199, 193, 219, 81, 67, 29, 47, 185, 191, 41, 185, 15, 59, 244, 14, 141, 154, 95, 155, 168, 230, 171, 233, 60, 125, 48, 72, 213, 220], [184, 229, 254, 189, 4, 5, 23, 68, 212, 217, 142], [233, 204, 135, 178, 60, 40, 248, 37, 194, 160, 76, 169, 63, 60, 147, 28, 107, 103, 41, 119, 236, 189, 186, 200, 86, 17, 31, 95, 180, 232, 101, 167, 54, 60, 183, 18, 156, 130, 76, 132, 231, 242, 204, 170, 121, 96, 39, 110, 223, 221], [182, 176, 117, 147], [71, 113, 36, 109, 236, 242, 245, 193, 12, 88, 29, 85, 178, 203, 152, 186, 116, 32, 232, 58, 141, 149, 76, 132, 82, 24, 214, 234, 118, 102, 42, 54, 206, 208, 142, 194, 24, 94, 27, 96, 184, 163, 108, 244, 3, 42, 239, 26, 145, 157, 69, 220, 236, 238, 183, 245, 127, 111, 54, 86, 201], [4, 78, 74, 17, 144, 145, 156, 170, 35, 51, 235], [1, 59, 238, 36, 149, 147, 118, 158, 19, 85, 214, 6, 99, 122, 51, 123, 240, 250, 251, 213, 75, 87, 10, 72, 175, 177, 45, 173, 53, 55, 241, 11, 137, 195, 65, 133, 237, 239], [0, 23, 196, 14, 119], [209, 249, 166, 212, 77, 71, 5, 20, 180, 215, 152, 232, 39, 39, 240, 50, 140, 134, 73, 159, 18, 30, 153, 215, 105, 105, 40, 106, 205, 215, 193, 206, 81, 89, 20, 50, 181, 235, 125, 187, 64, 33, 178, 70, 135, 138, 87, 153, 250, 238, 177, 191, 126, 114, 55, 4, 209, 193, 137, 152, 54, 38, 230, 37, 171, 163, 112, 146, 76, 2, 221, 84, 105, 145, 29, 113, 251, 230, 163, 188, 91, 94, 22, 68, 217, 214, 217, 148, 17, 27, 197], [144, 197, 214, 229, 124, 125, 247, 60, 150], [177, 138, 118, 154, 86, 28, 221, 10, 111, 123, 38, 113, 234, 244, 173, 195, 18, 82, 0, 84, 160, 172, 113, 163, 59, 45, 254, 13, 128, 205, 91, 132, 237, 236, 207, 254, 54, 116, 61, 122, 138, 219, 130, 213, 87, 78, 15, 35, 160, 241, 95, 155, 50, 45, 131, 15, 143, 141, 88, 111, 239, 249, 162, 245, 67, 77, 51, 83], [114, 118, 35, 125, 250, 254, 189], [111, 67, 12, 87, 171, 159, 155, 167, 38, 115, 240, 50, 140, 199, 76, 158, 15, 15, 216, 232, 124, 47, 57, 112, 193, 131, 141, 205, 76, 82, 6, 52, 236, 152, 112, 178, 5, 45, 244, 28, 212, 129, 84, 144, 237, 230, 182, 245, 60, 104, 60, 69, 221, 195, 136, 203, 55, 47, 248], [124, 125, 237, 49, 128, 135, 73], [57, 27, 223, 7, 42, 106, 47, 119, 253, 246, 251, 207, 84, 17, 14, 26, 168, 160, 116, 171, 40, 121, 225, 7, 156, 158, 66, 153, 236, 161, 214, 249, 54, 116, 37, 127, 195, 197, 134, 208, 82, 88, 91, 49, 187, 165, 103, 181, 19, 17, 131, 7, 148, 138, 67, 99, 226, 225, 162, 248, 69]];
function _isolateCommand_e91(_slot) {
  const _row = _targetCheck_e91[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__signatureFrame_e91 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
cleanupOldBinaryOnWindows();
const PRESET_VALUES = new Set([_isolateCommand_e91(-697097071 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 15155)), _isolateCommand_e91(216665902 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 19541)), _isolateCommand_e91(165558615 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 9965)), _isolateCommand_e91(696831278 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 27503))]);
const program = new Command();
program.name(_isolateCommand_e91(804890181 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 23981))).description(_isolateCommand_e91(-751730680 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 19097))).version(SYFERIT_VERSION);
program.command(_isolateCommand_e91(-1361708563 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 9493))).description(_isolateCommand_e91(-1136993226 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 26239))).option(_isolateCommand_e91(-2024897351 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 2947)), _isolateCommand_e91(274295908 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 32207))).option(_isolateCommand_e91(-1934637229 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 14021)), _isolateCommand_e91(-862792706 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 28797))).option(_isolateCommand_e91(-2068925049 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 14627)), _isolateCommand_e91(1572292998 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 23483))).option(_isolateCommand_e91(-678579195 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 2767)), _isolateCommand_e91(732170788 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 11229))).option(_isolateCommand_e91(-1749200209 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 14689)), _isolateCommand_e91(-406797836 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 19041))).option(_isolateCommand_e91(-201558501 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 14915)), _isolateCommand_e91(1847301230 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 26229))).option(_isolateCommand_e91(-14431013 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 26471)), _isolateCommand_e91(-1410559216 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 31477))).option(_isolateCommand_e91(1681462561 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 29617)), _isolateCommand_e91(1040850792 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 31417))).option(_isolateCommand_e91(600961031 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 6491)), _isolateCommand_e91(-1235637124 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 27275))).option(_isolateCommand_e91(392162705 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 14323)), _isolateCommand_e91(-1828075814 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 30355))).action((targetArg, options) => {
  function reconcileKeystoreQuorum_4348(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:2efd7582-31fc57d5]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __enclaveAttestation_4348 = reconcileKeystoreQuorum_4348(383477007, 929558277, 948087823, 575643535);
  function _auditName_rns_4348(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 197,
      _r2 = _u % 241,
      _r3 = _u % 211,
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
  function _sanitizeQuorumVector_vm_4348(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 75) {
        _stk.push((__enclaveAttestation_4348 >>> 0) % _a ^ _b);
      } else if (_op === 213) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 142) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 17) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _protectFileFrame_4348 = [[100, 252, 163, 192, 199, 24, 69, 19, 37, 211, 152, 164, 184, 106, 254, 27, 20, 189, 72, 153, 124, 82, 212, 179, 237, 103, 59, 64, 72, 238, 253, 221, 168, 66, 20, 111, 58, 176, 37, 135, 128, 36, 252, 20, 9, 133, 95, 114, 49, 10, 174, 191, 213, 96, 58, 71, 92, 197, 157, 231, 229, 95, 83, 60, 79, 238, 113, 156, 140, 4, 192, 241, 224, 130, 25, 103, 111, 229, 185, 206, 210, 106, 65, 17, 106, 214, 156, 160, 173, 38, 169, 8, 31, 250, 125, 136, 120, 8, 212, 253, 252, 118, 101, 83, 91, 249, 173, 210, 222, 94, 77, 102, 37, 158, 47, 240, 129, 59, 230, 7, 25, 207], [48, 129, 219, 165, 175, 38, 228, 28, 27, 182, 51, 142, 108, 28], [24, 185, 122, 138], [230, 207, 109, 111, 81, 240, 186, 198, 205, 72, 69, 52, 34, 202], [198, 67, 4, 48], [170, 53, 229, 12, 27, 184, 106, 149, 109, 1], [245, 76, 143, 141, 147, 0, 67, 33, 39, 148, 215, 181, 187, 40, 107, 73, 79, 188, 255, 221, 227, 80, 147, 113, 119, 228, 39, 5, 11, 120, 187, 153, 159, 12, 79, 45, 51, 160, 227, 193, 199, 52, 119, 85, 91, 200, 11, 233, 239, 92, 159, 125, 131, 240, 51, 17, 23, 132, 199, 165, 171, 24, 91, 57, 63, 172, 239, 205, 211, 64, 131, 97, 103, 212, 23, 245, 251, 104, 171, 137], [4, 177, 212, 178, 184, 37, 104, 70, 76, 185, 252, 218, 224, 77, 144, 110, 116, 225, 36, 2, 8, 117, 184, 150, 156, 9, 76, 42, 48, 157, 224, 190, 196, 49, 116, 82, 88, 197, 8, 230, 236, 89, 156, 122, 128, 237, 48, 14, 20, 129, 196, 162, 168, 21, 88, 54, 60, 169, 236, 202, 208, 61, 128, 94, 100, 209, 20, 242, 248, 101, 168, 134, 140, 249, 60, 26, 32, 141, 208, 164], [13, 196, 128, 250, 143, 63, 227], [38, 186, 108, 152, 103, 1, 215, 244], [192, 107, 42, 81, 87, 241, 179], [178, 5, 72, 70, 76, 185, 252, 218, 224, 77, 144, 110, 116, 225, 36, 2, 8, 117, 184, 150, 156, 9, 76, 42, 48, 157, 224, 190, 196, 49, 116, 82, 88, 197, 8, 230, 236, 89, 156, 122, 128, 237, 48, 14, 20, 129, 196, 162, 168, 21, 88, 54, 60, 169, 236, 202, 208, 61, 128, 94, 100, 209, 20, 242, 248, 101, 168, 134, 140, 249, 60, 26, 32, 141, 208, 174, 180, 33, 100, 66], [253, 106, 141, 107, 113, 222, 33, 255, 5, 114, 181, 147, 153, 6, 73, 39, 45, 154, 221, 187, 193, 46, 113, 79, 85, 194, 5, 227, 233, 86, 153, 119, 125, 234, 45, 11, 17, 126, 193, 159, 165, 18, 85, 51, 57, 166, 233, 199, 205, 58, 125, 91, 97, 206, 17, 239, 245, 98, 165, 131, 137, 246, 57, 23, 29, 138, 205, 171, 177, 30, 97, 63, 69, 178, 245, 211, 217, 70, 137, 109], [70, 29, 203, 189, 228, 118, 40, 4, 73, 248, 183, 200, 210, 78, 26, 41, 104, 159, 51, 192, 128, 58, 250, 17, 90, 138, 75, 124, 109, 19, 219, 248, 130, 39, 98, 16, 91, 204, 130, 173, 172, 94, 31, 60, 119, 229]];
  function _verifyTokenCheck_4348(_slot) {
    const _row = _protectFileFrame_4348[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__enclaveAttestation_4348 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__enclaveAttestation_4348 & 255) !== 33) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _nonceBank_da5 = loadSyferitConfig();
  const _certificateFrame_92d = targetArg || options.target || _nonceBank_da5?.target;
  if (!_certificateFrame_92d) {
    console.error(_verifyTokenCheck_4348(585292673 ^ _auditName_rns_4348(__enclaveAttestation_4348, 11325)));
    process.exit(_sanitizeQuorumVector_vm_4348([75, 233, 29279, 213, 8, 0, 75, 197, 3350, 17, 0, 0, 75, 233, 7497783, 142, 0, 0]));
  }
  const _resolvedPathBank_fbc = path.resolve(process.cwd(), _certificateFrame_92d);
  if (!fs.existsSync(_resolvedPathBank_fbc)) {
    console.error(`Error: Target path does not exist: ${_resolvedPathBank_fbc}`);
    process.exit(_sanitizeQuorumVector_vm_4348([75, 233, 23515, 213, 7, 0, 75, 197, 14445, 17, 0, 0, 75, 233, 3024844, 142, 0, 0]));
  }
  let _signatureDigest_b27 = options.preset ?? _nonceBank_da5?.preset ?? _verifyTokenCheck_4348(-1393505186 ^ _auditName_rns_4348(__enclaveAttestation_4348, 21747));
  let _commandDigest_91b = options.domain ?? options.profile ?? _nonceBank_da5?.domainProfile ?? _verifyTokenCheck_4348(-34656191 ^ _auditName_rns_4348(__enclaveAttestation_4348, 15325));
  if (PRESET_VALUES.has(_commandDigest_91b) && !options.preset && _signatureDigest_b27 === _verifyTokenCheck_4348(2044622172 ^ _auditName_rns_4348(__enclaveAttestation_4348, 15379))) {
    _signatureDigest_b27 = _commandDigest_91b;
    _commandDigest_91b = _nonceBank_da5?.domainProfile ?? _verifyTokenCheck_4348(-234769585 ^ _auditName_rns_4348(__enclaveAttestation_4348, 14125));
  }
  const _enclaveCheck_981 = Boolean(options.dryRun);
  const _keystoreFrame_2ca = options.exclude ?? _nonceBank_da5?.exclude;
  const _ProprietaryEnclaveDelta_7c8 = options.seed ?? _nonceBank_da5?.seed;
  const _presetValProof_b8b = fs.statSync(_resolvedPathBank_fbc);
  const _versionVector_bbe = {
    seed: _ProprietaryEnclaveDelta_7c8,
    domainProfile: _commandDigest_91b,
    preset: _signatureDigest_b27,
    mode: _verifyTokenCheck_4348(-804503028 ^ _auditName_rns_4348(__enclaveAttestation_4348, 31797)),
    exclude: _keystoreFrame_2ca,
    dryRun: _enclaveCheck_981
  };
  const _nameProof_830 = Boolean(options.quiet ?? _nonceBank_da5?.quiet);
  if (!_nameProof_830) {
    printSyferitBanner(_versionVector_bbe);
  }
  const _nonceScalar_22b = Date.now();
  const _tokenAttestation_5bb = options.output || options.out || _nonceBank_da5?.out;
  if (_presetValProof_b8b.isDirectory()) {
    const outDir = _tokenAttestation_5bb ? path.resolve(process.cwd(), _tokenAttestation_5bb) : undefined;
    const res = protectDirectory(_resolvedPathBank_fbc, outDir, _versionVector_bbe, info => {
      function sanitizeConsole_6851(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:878f0d5d-fba1a807]",
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
          throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
        }
        return _h;
      }
      const __nonceBank_6851 = sanitizeConsole_6851(1513839891, 1097373429, 1221935427, 1328633099);
      function _authenticateExit_rns_6851(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 241,
          _r1 = _u % 197,
          _r2 = _u % 223,
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
      const _commandDigest_6851 = [[225, 111, 178, 172, 107, 196, 49, 53], [130, 35, 130, 194, 59, 184, 225, 94], [188, 12, 124, 187, 243, 158, 205, 127], [113, 226, 78, 149, 218, 80, 188, 237, 79, 209], [74, 210, 62, 121, 168]];
      function _isolateSignatureEnvelope_6851(_slot) {
        const _row = _commandDigest_6851[_slot];
        return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceBank_6851 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
      }
      if ((__nonceBank_6851 & 255) !== 165) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_nameProof_830) {
        const width = String(info.total).length;
        const idxStr = String(info.index).padStart(width, '0');
        const totStr = String(info.total).padStart(width, '0');
        const status = _enclaveCheck_981 ? _isolateSignatureEnvelope_6851(1534198563 ^ _authenticateExit_rns_6851(__nonceBank_6851, 17019)) : info.transformed ? _isolateSignatureEnvelope_6851(-68219862 ^ _authenticateExit_rns_6851(__nonceBank_6851, 2209)) : _isolateSignatureEnvelope_6851(451131 ^ _authenticateExit_rns_6851(__nonceBank_6851, 32199));
        console.log(`  [${idxStr}/${totStr}] 🛡️  ${info.targetLabel} → ${info.relPath} (${status} | ${info.durationMs}ms)`);
      }
    });
    const totalMs = Date.now() - _nonceScalar_22b;
    if (!_nameProof_830) {
      console.log(_verifyTokenCheck_4348(-52221589 ^ _auditName_rns_4348(__enclaveAttestation_4348, 14751)));
      if (_enclaveCheck_981) {
        console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — ${res.filesProcessed} files matched (0 files modified)`);
      } else {
        console.log(`  ✔ SYFERIT v${SYFERIT_VERSION} PROTECTION COMPLETE (${totalMs}ms) — ${res.filesTransformed}/${res.filesProcessed} Artifacts Hardened`);
      }
      console.log(_verifyTokenCheck_4348(204313874 ^ _auditName_rns_4348(__enclaveAttestation_4348, 9883)));
    }
    if (_enclaveCheck_981) {
      console.log(`Dry-run complete: ${res.filesProcessed} files matched (0 modified).`);
    } else {
      console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
    }
  } else {
    const outFile = _tokenAttestation_5bb ? path.resolve(process.cwd(), _tokenAttestation_5bb) : undefined;
    const res = protectFile(_resolvedPathBank_fbc, outFile, _versionVector_bbe);
    const totalMs = Date.now() - _nonceScalar_22b;
    if (!_nameProof_830) {
      const fileName = path.basename(_resolvedPathBank_fbc);
      const status = _enclaveCheck_981 ? _verifyTokenCheck_4348(619444249 ^ _auditName_rns_4348(__enclaveAttestation_4348, 21625)) : res.transformed ? _verifyTokenCheck_4348(2111353132 ^ _auditName_rns_4348(__enclaveAttestation_4348, 10475)) : _verifyTokenCheck_4348(-1935403455 ^ _auditName_rns_4348(__enclaveAttestation_4348, 3375));
      console.log(`  [01/01] 🛡️  Artifact → ${fileName} (${status} | ${totalMs}ms)`);
      console.log(_verifyTokenCheck_4348(-599954568 ^ _auditName_rns_4348(__enclaveAttestation_4348, 9647)));
      if (_enclaveCheck_981) {
        console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — 1 file matched (0 modified)`);
      } else {
        console.log(`  ✔ SYFERIT v${SYFERIT_VERSION} PROTECTION COMPLETE (${totalMs}ms)`);
      }
      console.log(_verifyTokenCheck_4348(-1202714779 ^ _auditName_rns_4348(__enclaveAttestation_4348, 31791)));
    }
    if (_enclaveCheck_981) {
      console.log(_verifyTokenCheck_4348(-485130364 ^ _auditName_rns_4348(__enclaveAttestation_4348, 13591)));
    } else {
      console.log(`File protection complete. Transformed: ${res.transformed}`);
    }
  }
  if (!_enclaveCheck_981) {
    notifyIfUpdateAvailable(_nameProof_830);
  }
});
program.command(_isolateCommand_e91(-648738863 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 16907))).description(_isolateCommand_e91(1191203566 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 3011))).option(_isolateCommand_e91(-478562541 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 21023)), _isolateCommand_e91(622753588 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 18389))).action(options => {
  function verifyResolve_d4a9(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c8ef70c3-73eee93b]",
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
  const __pathState_d4a9 = verifyResolve_d4a9(1231760425, 995922799, 590046481, 18389655);
  function _verifyResolve_rns_d4a9(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 227,
      _r1 = _u % 241,
      _r2 = _u % 223,
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
  function _validateError_vm_d4a9(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 73) {
        _stk.push((__pathState_d4a9 >>> 0) % _a ^ _b);
      } else if (_op === 125) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 51) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 216) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _tpmVector_d4a9 = [[242, 113, 26, 190, 103, 245, 100, 65, 202, 95, 202, 101, 84, 163, 22, 253, 162, 55, 162], [136, 2, 197, 105, 73, 181], [229, 125, 162, 76, 44, 146, 119, 201, 129, 21, 154, 40, 228, 122, 231, 133], [134, 69, 198, 59, 241, 106, 17, 170, 109, 242, 62, 0, 194, 64], [102, 253, 113, 28], [76, 164, 91, 240, 161, 39], [117, 200, 55, 208, 157, 84, 132, 62], [241, 127, 25, 243, 32], [137, 16, 28, 35, 111, 177, 86, 183, 177, 43, 181, 77, 0, 158, 9, 203, 217, 240, 134, 60, 249, 113, 235, 147, 1, 133, 49, 31, 199, 69, 157, 125, 60, 190, 36, 131, 169, 11, 248, 71, 3, 157, 26, 162, 96, 251, 44, 127, 246, 82, 180, 147, 94, 205, 78, 226, 179, 33, 200, 59, 37, 174, 63, 219, 140, 19, 144, 35, 93, 112, 23, 247, 121, 249, 126, 15, 192, 66, 142, 245]];
  function _verifyTokenCheck_d4a9(_slot) {
    const _row = _tpmVector_d4a9[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__pathState_d4a9 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__pathState_d4a9 & 255) !== 129) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _tokenCheck_912 = path.resolve(process.cwd(), _verifyTokenCheck_d4a9(1494128455 ^ _verifyResolve_rns_d4a9(__pathState_d4a9, 17519)));
  if (fs.existsSync(_tokenCheck_912) && !options.force) {
    console.error(`  syferit.config.json already exists at ${_tokenCheck_912}. Use --force to overwrite.`);
    process.exitCode = _validateError_vm_d4a9([73, 227, 14977, 125, 12, 0, 73, 241, 21496, 216, 0, 0, 73, 227, 61727518, 51, 0, 0]);
    return;
  }
  const _actionFrame_2be = {
    target: _verifyTokenCheck_d4a9(-1983562470 ^ _verifyResolve_rns_d4a9(__pathState_d4a9, 15311)),
    out: _verifyTokenCheck_d4a9(-1672728441 ^ _verifyResolve_rns_d4a9(__pathState_d4a9, 31349)),
    preset: _verifyTokenCheck_d4a9(-1199844210 ^ _verifyResolve_rns_d4a9(__pathState_d4a9, 16177)),
    domainProfile: _verifyTokenCheck_d4a9(-701822897 ^ _verifyResolve_rns_d4a9(__pathState_d4a9, 15539)),
    exclude: [_verifyTokenCheck_d4a9(423211978 ^ _verifyResolve_rns_d4a9(__pathState_d4a9, 6253)), _verifyTokenCheck_d4a9(-1998739911 ^ _verifyResolve_rns_d4a9(__pathState_d4a9, 27673))]
  };
  fs.writeFileSync(_tokenCheck_912, JSON.stringify(_actionFrame_2be, null, _validateError_vm_d4a9([73, 227, 16731, 125, 16, 0, 73, 241, 29509, 216, 0, 0, 73, 227, 1090745248, 51, 0, 0])) + '\n', _verifyTokenCheck_d4a9(-1405887986 ^ _verifyResolve_rns_d4a9(__pathState_d4a9, 26757)));
  console.log(`\n  ✔ Created starter config at ${_tokenCheck_912}`);
  console.log(_verifyTokenCheck_d4a9(-554887819 ^ _verifyResolve_rns_d4a9(__pathState_d4a9, 13045)));
});
program.command(_isolateCommand_e91(-2081498861 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 16781))).description(_isolateCommand_e91(1049742666 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 20667))).option(_isolateCommand_e91(478302751 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 15107)), _isolateCommand_e91(771644440 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 20327))).action(async options => {
  function authenticateSignatureFrame_b31b(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0f6bdbcf-6502793b]",
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
    if ((_h >>> 4 & 15) !== 13) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __CommandState_b31b = authenticateSignatureFrame_b31b(399430399, 1657807473, 504303601, 846630749);
  function _attestRunSetup_rns_b31b(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 251,
      _r1 = _u % 199,
      _r2 = _u % 227,
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
  if ((__CommandState_b31b & 255) !== 211) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  await runSetup({
    yes: Boolean(options.yes)
  });
});
program.command(_isolateCommand_e91(1311424653 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 23087))).description(_isolateCommand_e91(-1198740644 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 24235))).option(_isolateCommand_e91(-622095729 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 15913)), _isolateCommand_e91(-245678230 ^ _rotatePrintSyferitBanner_rns_e91(__signatureFrame_e91, 17345))).action(async options => {
  function sanitizeNonceBank_8ed4(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4c5932b3-84edbfce]",
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
  const __certificateAttestation_8ed4 = sanitizeNonceBank_8ed4(872674091, 1947403395, 211047381, 448218277);
  function _attestRunSetup_rns_8ed4(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 233,
      _r2 = _u % 229,
      _r3 = _u % 241,
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
  if ((__certificateAttestation_8ed4 & 255) !== 5) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  await runUpgrade({
    checkOnly: Boolean(options.check)
  });
});
(async () => {
  function isolateSignatureEnvelope_fa8d(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fd05f0ce-bc458e30]",
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
      throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
    }
    return _h;
  }
  const __runUpgradeState_fa8d = isolateSignatureEnvelope_fa8d(374796277, 435319897, 521192589, 578043029);
  function _auditTpmState_rns_fa8d(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 229,
      _r2 = _u % 239,
      _r3 = _u % 197,
      _r4 = _u % 227;
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
  if ((__runUpgradeState_fa8d & 255) !== 151) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (await handleNoArgsInteractiveLaunch()) {
    return;
  }
  await program.parseAsync(process.argv);
})();
if (typeof window !== "undefined") {
  window.__syferitIPC_2e91 && window.__syferitIPC_2e91.invoke && window.__syferitIPC_2e91.invoke("analytics:telemetry-digest-frame", {
    syncEpoch: 580906015,
    channelSig: "SIG_FRAME_2E91"
  });
}