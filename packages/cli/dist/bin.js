#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory, printSyferitBanner, loadSyferitConfig } from './index.js';
import { notifyIfUpdateAvailable, runUpgrade, cleanupOldBinaryOnWindows, SYFERIT_VERSION } from './updater.js';
import { runSetup, handleNoArgsInteractiveLaunch } from './setup.js';
function verifySoltrixStudiosContext_602(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:c281c35c-0efb04b6]",
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
    throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
  }
  return _h;
}
var __quorumCheck_602 = verifySoltrixStudiosContext_602(1335994381, 1090087733, 1169353583, 1037879949);
function _rotateCommand_rns_602(_x, _s) {
  const _u = _x >>> 0,
    _r0 = _u % 197,
    _r1 = _u % 239,
    _r2 = _u % 227,
    _r3 = _u % 223,
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
var _SyferitEngineDelta_602 = [[166, 233, 64, 125, 13, 80, 199, 195], [146, 163, 52, 92, 235, 56, 191, 168], [114, 134, 19, 52, 222, 14, 146], [50, 62, 189, 243, 173, 193, 74, 98, 25, 89, 149, 216, 110, 187], [26, 72, 211, 194, 143, 172, 61], [221, 47, 188, 169, 80, 131, 26, 64, 192, 76, 44, 196, 112, 50, 196, 198, 141, 139, 107, 78, 42, 26, 251, 222, 114, 175, 60, 35, 246, 7, 139, 189, 64, 130, 90, 74, 226, 217, 119, 109, 52, 113, 206, 253, 137, 146, 112, 77, 23, 53, 190, 217, 126, 250, 29, 63, 194, 11, 210, 160, 95, 100, 227, 22, 189, 243, 58, 73, 12, 77, 199, 206, 147, 158, 32, 77, 170, 1, 185, 164, 106, 148, 3, 36, 146, 41, 138, 133, 34, 103, 253, 247], [195, 9, 144, 133, 34, 108, 231, 165, 128, 215, 70, 107, 8, 82, 207, 240], [153, 208, 84, 122, 21, 20, 249, 249, 84, 232, 32, 81, 243, 53, 131, 242, 77, 158, 0, 7, 210, 227, 100, 159, 61, 125, 242, 250, 200, 140, 98, 108, 43, 109, 133, 228, 84, 244, 40, 37, 201, 6, 152, 254, 82, 137, 238, 17, 188, 249, 123, 104, 47, 8, 136, 251, 158, 220, 28, 93, 225, 33, 177, 172, 108, 137, 7, 118, 220, 6, 151, 158, 37, 107, 248, 23, 187, 242, 0, 102, 7, 16, 213, 134, 154, 173, 36, 95, 176, 55, 174, 238, 64, 133, 2, 7, 219, 244, 107, 132, 53], [208, 177, 101, 27, 188, 116, 169, 174, 87, 138, 20, 23, 153, 189, 117, 150, 57, 125, 167], [114, 139, 26, 8, 150, 10, 109, 212, 44, 123, 250, 237, 254, 201, 88, 60, 22, 83, 204, 213, 101, 186, 61, 54, 227, 66, 146, 183, 14, 134, 8, 3, 182, 239, 109, 116], [106, 96, 191, 165, 246, 142, 72, 108, 27, 23, 135, 221, 98, 191, 39, 127], [40, 81, 203, 222, 105, 166, 45, 74, 253, 51, 142, 242, 71, 133, 0, 22, 201, 240, 40, 138, 49, 108, 244, 174, 204, 200, 85, 68, 25, 53, 168, 194, 127, 244, 44, 37, 128, 1, 130, 243, 68, 144, 225, 17, 173, 176, 123, 112, 57, 86, 223, 232, 153, 204, 89, 7], [188, 116, 178, 186, 81, 157, 4, 23, 153, 189, 117, 150, 57, 125, 167], [247, 18, 107, 149, 57, 50, 240, 231, 172, 134, 7, 115, 94, 26, 147, 157, 105, 187, 38], [246, 142, 87, 107, 10, 68, 222, 217, 35, 247, 63, 51, 242, 44, 134, 161, 21], [80, 186, 35, 74, 241, 63, 148, 187, 71, 158, 84, 10, 217, 242, 109, 150, 106, 56, 239, 250, 133, 194, 84, 67, 10, 36, 232, 150, 100, 181, 42, 46, 197, 6, 137, 186, 24, 220, 237, 19, 176, 249, 121, 115, 49, 8, 136, 245, 130, 152, 74, 28, 169, 61, 165, 163, 118, 148, 17, 59, 129, 6, 150, 153, 96, 32, 232, 27, 178, 253, 85, 126, 28, 10, 148, 132, 138, 246, 101, 75, 229, 57, 178, 186, 81, 129, 93, 16, 214, 243, 38, 223], [8, 157, 93, 67, 148, 172, 117, 133, 34, 115, 240, 231, 132, 137, 17, 111, 7, 82, 167, 218, 101, 180, 107], [14, 125, 251, 233, 183, 200, 10, 120, 27, 89, 202, 217, 105, 160, 51, 54, 227, 66, 150, 170, 65, 144, 19, 0, 167, 176, 46, 115, 55, 127, 209, 184, 202, 212, 95, 70, 10, 35, 169, 212, 62, 250, 45, 53, 197, 27, 128, 141, 78, 123, 170, 88, 169, 247, 119, 101, 12, 77, 142, 136, 146, 219, 36, 85, 255, 62, 162, 242, 62, 196, 25, 61, 211, 9, 220, 217], [66, 83, 151, 141, 46, 230, 43, 46, 250, 62, 138, 187, 11, 207, 19, 6, 210, 230, 98, 147, 109], [213, 48, 137, 179, 91, 208, 18, 9, 206, 164, 37, 138, 124, 56, 177, 163, 148, 222, 95, 68, 17, 44, 161], [148, 242, 41, 215, 96, 56, 234, 238, 132, 205, 13, 35, 6, 88, 164, 215, 55], [154, 195, 94, 121, 0, 87, 215, 222, 111, 189, 38, 45, 249, 66, 132, 173, 71, 154, 30, 76, 177, 239, 107, 100, 118, 120, 205, 230, 202, 192, 83, 88, 12, 41, 174, 201, 113, 179, 60, 60, 195, 78, 130, 139, 86, 123, 235, 23, 188, 230, 114, 101, 17, 71], [46, 174, 99, 97, 186, 114, 134, 173, 72, 159, 2, 13, 218, 167, 55, 141, 50, 111, 235, 244, 149, 193, 64, 11, 85, 109, 249], [109, 136, 23, 10, 201, 224, 109, 218, 54, 113, 240, 235, 196, 195, 66, 2, 30, 47, 168, 210, 105, 166, 120, 58, 193, 28, 152, 187, 70, 146, 243, 82, 174, 226, 123, 107, 124, 84, 218, 245, 132, 221, 95, 90, 237, 35, 190, 226, 48, 133, 74, 49, 130, 84, 213, 143, 96, 126, 233, 16, 176, 243, 82, 50, 74, 26, 154, 203, 149, 170, 102, 80, 227, 122, 245], [96, 56, 253, 249, 152, 132, 95, 106, 27], [34, 72, 219, 198, 111, 171, 37, 100, 237, 10, 143, 187, 70, 214, 28, 5, 174, 239, 125, 32, 33, 113, 215, 248, 142, 146, 84, 77, 94, 54, 184, 211, 102, 191, 61, 36, 195, 10, 210, 147, 83, 118, 238, 23, 187, 226, 58, 97, 13, 78, 199, 198, 143, 215, 44, 83, 170, 51, 184, 177, 62, 128, 3, 48, 215, 9], [186, 46, 207, 245, 6, 222, 6, 28, 214, 226, 127], [239, 241, 120, 138, 34, 125, 239, 253, 196, 237, 99, 97, 49, 9, 228, 212, 109, 186, 54, 47, 210, 72, 141, 176, 80, 220, 240, 23, 186, 189, 114, 111, 48, 65, 136, 234, 130, 215, 91, 92, 225, 63, 163, 226, 119, 149, 16, 38, 217, 0], [136, 199, 68, 107], [69, 188, 55, 37, 238, 7, 198, 185, 14, 133, 14, 13, 176, 254, 107, 114, 118, 109, 219, 242, 143, 192, 95, 92, 80, 37, 165, 210, 116, 179, 57, 126, 204, 29, 157, 138, 26, 107, 232, 88, 186, 254, 127, 44, 1, 95, 220, 210, 147, 208, 54, 20, 238, 59, 164, 173, 125, 146, 5, 46, 203], [6, 149, 91, 73, 146, 170, 109, 146, 33, 120, 250], [31, 110, 249, 252, 147, 222, 89, 86, 29, 96, 161, 206, 101, 167, 44, 35, 206, 15, 204, 173, 77, 154, 229, 0, 161, 228, 58, 101, 51, 74, 206, 243, 151, 150, 86, 93, 235, 34], [6, 88, 181, 198, 121], [211, 12, 149, 172, 79, 154, 22, 76, 182, 226, 107, 32, 37, 106, 195, 250, 142, 211, 90, 71, 16, 35, 234, 239, 107, 188, 59, 34, 207, 26, 210, 134, 83, 108, 231, 10, 183, 182, 110, 99, 66, 84, 129, 142, 133, 199, 36, 81, 248, 59, 162, 231, 124, 143, 4, 124, 211, 20, 154, 208, 52, 107, 245, 237, 169, 214, 67, 106, 78, 95, 206, 140, 107, 164, 110, 57, 249, 43, 144, 244, 89, 139, 5, 28, 219, 235, 42, 172, 19, 78, 214], [146, 254, 39, 221, 126, 54, 230, 244, 148], [183, 199, 89, 82, 88, 41, 170, 194, 105, 166, 57, 41, 212, 1, 154, 187, 20, 159, 239, 28, 174, 249, 102, 107, 61, 80, 193, 245, 158, 152, 76, 92, 235, 33, 160, 182, 56, 129, 10, 50, 140, 6, 157, 141, 41, 123, 248, 27, 166, 188, 112, 83, 60, 120, 148, 199, 137, 176, 39, 87, 241, 44, 181, 173, 69, 128, 28, 27], [124, 161, 50, 53, 252, 1, 140], [109, 158, 31, 15, 169, 170, 104, 111, 36, 62, 195, 250, 142, 146, 95, 70, 13, 50, 171, 208, 126, 250, 42, 56, 195, 78, 158, 133, 78, 103, 245, 12, 238, 197, 99, 106, 7, 88, 199, 212, 214, 204, 39, 88, 239, 51, 165, 173, 62, 149, 15, 61, 223, 22, 155, 131, 53, 98, 235], [126, 54, 252, 249, 130, 204, 88], [55, 46, 168, 207, 44, 183, 48, 47, 195, 3, 204, 183, 82, 220, 225, 82, 166, 245, 99, 99, 46, 4, 222, 255, 130, 203, 85, 65, 234, 108, 185, 177, 56, 129, 18, 55, 197, 24, 153, 136, 44, 109, 172, 9, 189, 232, 72, 125, 29, 68, 148, 207, 146, 183, 60, 91, 252, 52, 181, 160, 67]];
function _verifySyferitEngineContext_602(_slot) {
  const _row = _SyferitEngineDelta_602[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__quorumCheck_602 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
cleanupOldBinaryOnWindows();
const PRESET_VALUES = new Set([_verifySyferitEngineContext_602(-1020658143 ^ _rotateCommand_rns_602(__quorumCheck_602, 9525)), _verifySyferitEngineContext_602(-1217626240 ^ _rotateCommand_rns_602(__quorumCheck_602, 14909)), _verifySyferitEngineContext_602(-1091946445 ^ _rotateCommand_rns_602(__quorumCheck_602, 19351)), _verifySyferitEngineContext_602(663628704 ^ _rotateCommand_rns_602(__quorumCheck_602, 26075))]);
const program = new Command();
program.name(_verifySyferitEngineContext_602(1570320625 ^ _rotateCommand_rns_602(__quorumCheck_602, 15479))).description(_verifySyferitEngineContext_602(-440232578 ^ _rotateCommand_rns_602(__quorumCheck_602, 26827))).version(SYFERIT_VERSION);
program.command(_verifySyferitEngineContext_602(-6275535 ^ _rotateCommand_rns_602(__quorumCheck_602, 28381))).description(_verifySyferitEngineContext_602(-2095619258 ^ _rotateCommand_rns_602(__quorumCheck_602, 28191))).option(_verifySyferitEngineContext_602(-62778937 ^ _rotateCommand_rns_602(__quorumCheck_602, 18167)), _verifySyferitEngineContext_602(-1678871496 ^ _rotateCommand_rns_602(__quorumCheck_602, 6547))).option(_verifySyferitEngineContext_602(-1320504941 ^ _rotateCommand_rns_602(__quorumCheck_602, 28497)), _verifySyferitEngineContext_602(-600336030 ^ _rotateCommand_rns_602(__quorumCheck_602, 11175))).option(_verifySyferitEngineContext_602(550739231 ^ _rotateCommand_rns_602(__quorumCheck_602, 7261)), _verifySyferitEngineContext_602(-176587108 ^ _rotateCommand_rns_602(__quorumCheck_602, 4565))).option(_verifySyferitEngineContext_602(976342437 ^ _rotateCommand_rns_602(__quorumCheck_602, 27719)), _verifySyferitEngineContext_602(736722436 ^ _rotateCommand_rns_602(__quorumCheck_602, 21005))).option(_verifySyferitEngineContext_602(-1645220037 ^ _rotateCommand_rns_602(__quorumCheck_602, 27701)), _verifySyferitEngineContext_602(-327689420 ^ _rotateCommand_rns_602(__quorumCheck_602, 10367))).option(_verifySyferitEngineContext_602(-402812069 ^ _rotateCommand_rns_602(__quorumCheck_602, 6579)), _verifySyferitEngineContext_602(-2021183452 ^ _rotateCommand_rns_602(__quorumCheck_602, 12877))).option(_verifySyferitEngineContext_602(735377221 ^ _rotateCommand_rns_602(__quorumCheck_602, 16087)), _verifySyferitEngineContext_602(2050053854 ^ _rotateCommand_rns_602(__quorumCheck_602, 27955))).option(_verifySyferitEngineContext_602(2009767579 ^ _rotateCommand_rns_602(__quorumCheck_602, 13851)), _verifySyferitEngineContext_602(-1359587176 ^ _rotateCommand_rns_602(__quorumCheck_602, 31353))).option(_verifySyferitEngineContext_602(397671369 ^ _rotateCommand_rns_602(__quorumCheck_602, 17281)), _verifySyferitEngineContext_602(1676175330 ^ _rotateCommand_rns_602(__quorumCheck_602, 19965))).option(_verifySyferitEngineContext_602(-408957041 ^ _rotateCommand_rns_602(__quorumCheck_602, 22925)), _verifySyferitEngineContext_602(115078122 ^ _rotateCommand_rns_602(__quorumCheck_602, 2347))).action((targetArg, options) => {
  function auditPresetVal_3297(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:fcb75d36-c2dd657b]",
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
    if ((_h >>> 4 & 15) !== 14) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
    }
    return _h;
  }
  const __nonceContext_3297 = auditPresetVal_3297(1661961857, 1417407709, 111490921, 309532059);
  function _validateConsole_rns_3297(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 229,
      _r1 = _u % 227,
      _r2 = _u % 197,
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
  function _authenticateVersion_vm_3297(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 17) {
        _stk.push((__nonceContext_3297 >>> 0) % _a ^ _b);
      } else if (_op === 138) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 188) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 92) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _programFrame_3297 = [[164, 14, 4, 178, 7, 42, 42, 33, 101, 193, 255, 118, 248, 24, 65, 233, 84, 175, 175, 75, 188, 64, 59, 225, 45, 149, 156, 50, 136, 252, 162, 143, 232, 112, 115, 93, 122, 194, 138, 117, 192, 54, 91, 198, 73, 183, 160, 64, 241, 24, 9, 237, 21, 114, 149, 21, 156, 247, 250, 213, 165, 77, 12, 238, 15, 156, 214, 110, 204, 54, 47, 195, 32, 144, 254, 53, 175, 23, 6, 188, 18, 120, 38, 67, 42, 196, 243, 114, 237, 84, 14, 250, 95, 232, 162, 90, 184, 58, 51, 207, 60, 132, 202, 33, 155, 235, 10, 128, 30, 108, 50, 84, 101, 140, 136, 34, 193, 41, 73, 213, 89, 253], [112, 147, 182, 115, 239, 84, 65, 226, 91, 164, 238, 88, 172, 46], [88, 167, 161, 84], [38, 217, 200, 61, 145, 30, 23, 148, 13, 126, 32, 6, 98, 212], [6, 113, 107, 2], [234, 71, 64, 242, 91, 170, 183, 67, 173, 51], [251, 40, 45, 150, 1, 155, 134, 111], [172, 30, 11, 132, 29, 125, 104, 16], [90, 207, 247, 117, 237, 93, 86, 185], [36, 233, 227, 42, 194, 93, 87, 190, 86, 241, 235, 82, 234, 133, 127, 230, 126, 25, 19, 122, 18, 173, 167, 14, 166, 65, 59, 162, 58, 213, 207, 54, 206, 105, 99, 202, 98, 253, 247, 94, 246, 145, 139, 242, 138, 37, 31, 134, 30, 185, 179, 26, 178, 77, 71, 174, 70, 225, 219, 66, 218, 117, 111, 214, 110, 9, 3, 106, 2, 157, 151, 254, 150, 49, 43, 146, 42, 197, 191, 38], [115, 206, 232, 79, 231, 130, 124, 227, 123, 22, 16, 119, 15, 170, 164, 11, 163, 62, 56, 159, 55, 210, 204, 51, 203, 102, 96, 199, 95, 250, 244, 91, 243, 142, 136, 239, 135, 34, 28, 131, 27, 182, 176, 23, 175, 74, 68, 171, 67, 222, 216, 63, 215, 114, 108, 211, 107, 6, 0, 103, 255, 154, 148, 251, 147, 46, 40, 143, 39, 194, 188, 35, 187, 86, 80, 183, 79, 234, 228, 65], [60, 97, 116, 89, 94, 210, 207], [213, 89, 64, 253, 84, 162, 163, 73], [145, 54, 62, 206, 38, 148, 143], [237, 162, 92, 227, 123, 22, 16, 119, 15, 170, 164, 11, 163, 62, 56, 159, 55, 210, 204, 51, 203, 102, 96, 199, 95, 250, 244, 91, 243, 142, 136, 239, 135, 34, 28, 131, 27, 182, 176, 23, 175, 74, 68, 171, 67, 222, 216, 63, 215, 114, 108, 211, 107, 6, 0, 103, 255, 154, 148, 251, 147, 46, 40, 143, 39, 194, 188, 35, 187, 86, 80, 183, 79, 234, 228, 75, 227, 126, 120, 223], [44, 135, 161, 8, 160, 59, 53, 156, 52, 207, 201, 48, 200, 99, 93, 196, 92, 247, 241, 88, 240, 139, 133, 236, 132, 31, 25, 128, 24, 179, 173, 20, 172, 71, 65, 168, 64, 219, 213, 60, 212, 111, 105, 208, 104, 3, 253, 100, 252, 151, 145, 248, 144, 43, 37, 140, 36, 191, 185, 32, 184, 83, 77, 180, 76, 231, 225, 72, 224, 123, 117, 220, 116, 15, 9, 112, 8, 163, 157, 14], [117, 190, 191, 0, 183, 21, 52, 225, 58, 155, 131, 37, 129, 237, 246, 140, 187, 60, 39, 93, 115, 217, 198, 116, 137, 41, 95, 209, 94, 176, 183, 93, 241, 68, 86, 237, 8, 111, 158, 8, 159, 253, 235, 145, 164, 6]];
  function _rotateProtectFile_3297(_slot) {
    const _row = _programFrame_3297[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__nonceContext_3297 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__nonceContext_3297 & 255) !== 225) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _tpmVector_cbe = loadSyferitConfig();
  const _fileConfigProof_3ad = targetArg || options.target || _tpmVector_cbe?.target;
  if (!_fileConfigProof_3ad) {
    console.error(_rotateProtectFile_3297(1027316985 ^ _validateConsole_rns_3297(__nonceContext_3297, 5515)));
    process.exit(_authenticateVersion_vm_3297([17, 229, 16122, 138, 12, 0, 17, 227, 6604, 92, 0, 0, 17, 229, 66050376, 188, 0, 0]));
  }
  const _optionsAttestation_11d = path.resolve(process.cwd(), _fileConfigProof_3ad);
  if (!fs.existsSync(_optionsAttestation_11d)) {
    console.error(`Error: Target path does not exist: ${_optionsAttestation_11d}`);
    process.exit(_authenticateVersion_vm_3297([17, 229, 9146, 138, 8, 0, 17, 227, 14194, 92, 0, 0, 17, 229, 2356214, 188, 0, 0]));
  }
  let _PRESET_VALUESAttestation_5a7 = options.preset ?? _tpmVector_cbe?.preset ?? _rotateProtectFile_3297(764856352 ^ _validateConsole_rns_3297(__nonceContext_3297, 19525));
  let _consoleFrame_128 = options.domain ?? options.profile ?? _tpmVector_cbe?.domainProfile ?? _rotateProtectFile_3297(2122179647 ^ _validateConsole_rns_3297(__nonceContext_3297, 409));
  if (PRESET_VALUES.has(_consoleFrame_128) && !options.preset && _PRESET_VALUESAttestation_5a7 === _rotateProtectFile_3297(898699118 ^ _validateConsole_rns_3297(__nonceContext_3297, 30183))) {
    _PRESET_VALUESAttestation_5a7 = _consoleFrame_128;
    _consoleFrame_128 = _tpmVector_cbe?.domainProfile ?? _rotateProtectFile_3297(1662759165 ^ _validateConsole_rns_3297(__nonceContext_3297, 26629));
  }
  const _runSetupCheck_4 = Boolean(options.dryRun);
  const _commandEnvelope_feb = options.exclude ?? _tpmVector_cbe?.exclude;
  const _enclaveReg_52f = options.seed ?? _tpmVector_cbe?.seed;
  const _exitProof_b97 = fs.statSync(_optionsAttestation_11d);
  const _nameEnvelope_997 = {
    seed: _enclaveReg_52f,
    domainProfile: _consoleFrame_128,
    preset: _PRESET_VALUESAttestation_5a7,
    mode: _rotateProtectFile_3297(140914726 ^ _validateConsole_rns_3297(__nonceContext_3297, 23587)),
    exclude: _commandEnvelope_feb,
    dryRun: _runSetupCheck_4
  };
  const _descriptionDigest_46d = Boolean(options.quiet ?? _tpmVector_cbe?.quiet);
  if (!_descriptionDigest_46d) {
    printSyferitBanner(_nameEnvelope_997);
  }
  const _programFrame_3c3 = Date.now();
  const _errorBank_a34 = options.output || options.out || _tpmVector_cbe?.out;
  if (_exitProof_b97.isDirectory()) {
    const outDir = _errorBank_a34 ? path.resolve(process.cwd(), _errorBank_a34) : undefined;
    const res = protectDirectory(_optionsAttestation_11d, outDir, _nameEnvelope_997, info => {
      function reconcileKeystoreQuorum_d55c(_tok0, _tok1, _tok2, _tok3) {
        const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:e6b8ebc4-25e05da2]",
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
      const __errorState_d55c = reconcileKeystoreQuorum_d55c(1406565313, 1358041029, 1390024303, 276544551);
      function _rotateResolve_rns_d55c(_x, _s) {
        const _u = _x >>> 0,
          _r0 = _u % 251,
          _r1 = _u % 239,
          _r2 = _u % 233,
          _r3 = _u % 223,
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
      if ((__errorState_d55c & 255) !== 45) {
        throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
      }
      if (!_descriptionDigest_46d) {
        const width = String(info.total).length;
        const idxStr = String(info.index).padStart(width, '0');
        const totStr = String(info.total).padStart(width, '0');
        const status = _runSetupCheck_4 ? _rotateProtectFile_3297(-491295193 ^ _validateConsole_rns_3297(__nonceContext_3297, 27173)) : info.transformed ? _rotateProtectFile_3297(-1392032710 ^ _validateConsole_rns_3297(__nonceContext_3297, 13779)) : _rotateProtectFile_3297(-1090759613 ^ _validateConsole_rns_3297(__nonceContext_3297, 24167));
        console.log(`  [${idxStr}/${totStr}] 🛡️  ${info.targetLabel} → ${info.relPath} (${status} | ${info.durationMs}ms)`);
      }
    });
    const totalMs = Date.now() - _programFrame_3c3;
    if (!_descriptionDigest_46d) {
      console.log(_rotateProtectFile_3297(-1487740016 ^ _validateConsole_rns_3297(__nonceContext_3297, 9693)));
      if (_runSetupCheck_4) {
        console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — ${res.filesProcessed} files matched (0 files modified)`);
      } else {
        console.log(`  ✔ SYFERIT v${SYFERIT_VERSION} PROTECTION COMPLETE (${totalMs}ms) — ${res.filesTransformed}/${res.filesProcessed} Artifacts Hardened`);
      }
      console.log(_rotateProtectFile_3297(1726308635 ^ _validateConsole_rns_3297(__nonceContext_3297, 4375)));
    }
    if (_runSetupCheck_4) {
      console.log(`Dry-run complete: ${res.filesProcessed} files matched (0 modified).`);
    } else {
      console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
    }
  } else {
    const outFile = _errorBank_a34 ? path.resolve(process.cwd(), _errorBank_a34) : undefined;
    const res = protectFile(_optionsAttestation_11d, outFile, _nameEnvelope_997);
    const totalMs = Date.now() - _programFrame_3c3;
    if (!_descriptionDigest_46d) {
      const fileName = path.basename(_optionsAttestation_11d);
      const status = _runSetupCheck_4 ? _rotateProtectFile_3297(235801232 ^ _validateConsole_rns_3297(__nonceContext_3297, 31709)) : res.transformed ? _rotateProtectFile_3297(-35341133 ^ _validateConsole_rns_3297(__nonceContext_3297, 3069)) : _rotateProtectFile_3297(1793493316 ^ _validateConsole_rns_3297(__nonceContext_3297, 20937));
      console.log(`  [01/01] 🛡️  Artifact → ${fileName} (${status} | ${totalMs}ms)`);
      console.log(_rotateProtectFile_3297(-1630689537 ^ _validateConsole_rns_3297(__nonceContext_3297, 25335)));
      if (_runSetupCheck_4) {
        console.log(`  ✔ SYFERIT DRY-RUN COMPLETE (${totalMs}ms) — 1 file matched (0 modified)`);
      } else {
        console.log(`  ✔ SYFERIT v${SYFERIT_VERSION} PROTECTION COMPLETE (${totalMs}ms)`);
      }
      console.log(_rotateProtectFile_3297(-1184543912 ^ _validateConsole_rns_3297(__nonceContext_3297, 27099)));
    }
    if (_runSetupCheck_4) {
      console.log(_rotateProtectFile_3297(1981685571 ^ _validateConsole_rns_3297(__nonceContext_3297, 21807)));
    } else {
      console.log(`File protection complete. Transformed: ${res.transformed}`);
    }
  }
  if (!_runSetupCheck_4) {
    notifyIfUpdateAvailable(_descriptionDigest_46d);
  }
});
program.command(_verifySyferitEngineContext_602(-1179489133 ^ _rotateCommand_rns_602(__quorumCheck_602, 26957))).description(_verifySyferitEngineContext_602(-1086797396 ^ _rotateCommand_rns_602(__quorumCheck_602, 19393))).option(_verifySyferitEngineContext_602(-1672036635 ^ _rotateCommand_rns_602(__quorumCheck_602, 21879)), _verifySyferitEngineContext_602(-517846372 ^ _rotateCommand_rns_602(__quorumCheck_602, 7111))).action(options => {
  function verifySyferitEngineContext_f596(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:b5ebcdf0-6e0021d9]",
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
    if ((_h >>> 4 & 15) !== 4) {
      _h = (_h ^ 3735884599) >>> 0;
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __commandState_f596 = verifySyferitEngineContext_f596(2102106743, 1855958309, 573706211, 1571905875);
  function _normalizeQuorumVector_rns_f596(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 211,
      _r1 = _u % 197,
      _r2 = _u % 223,
      _r3 = _u % 241,
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
  function _authenticateOptions_vm_f596(_bc) {
    const _stk = [];
    for (let _pc = 0; _pc < _bc.length; _pc += 3) {
      const _op = _bc[_pc],
        _a = _bc[_pc + 1],
        _b = _bc[_pc + 2];
      if (_op === 210) {
        _stk.push((__commandState_f596 >>> 0) % _a ^ _b);
      } else if (_op === 151) {
        const _v = _stk.pop() >>> 0;
        _stk.push(_v << _a | _v >>> 32 - _a);
      } else if (_op === 47) {
        const _r = _stk.pop(),
          _l = _stk.pop();
        _stk.push(_l ^ _r);
      } else if (_op === 84) {
        const _r2 = _stk.pop(),
          _l2 = _stk.pop();
        _stk.push(_l2 + _r2 | 0);
      }
    }
    return _stk[0];
  }
  const _programFrame_f596 = [[58, 197, 73, 22, 175, 57, 183, 41, 18, 139, 57, 253, 108, 31, 197, 69, 234, 99, 17], [64, 206, 48, 241, 113, 1], [189, 41, 29, 212, 84, 238, 32, 33, 201, 65, 213, 128, 44, 182, 80, 29], [206, 25, 179, 147, 57, 222, 92, 2, 149, 62, 235, 120, 26, 148], [174, 49, 162, 116], [116, 16, 134, 72, 249, 123], [13, 180, 96, 56, 213, 0, 203, 150], [57, 203, 84, 91, 216], [81, 196, 239, 187, 87, 13, 133, 15, 249, 127, 6, 165, 72, 210, 122, 35, 225, 68, 213, 132, 33, 173, 88, 11, 201, 113, 226, 119, 15, 137, 78, 213, 100, 234, 151, 27, 209, 119, 171, 191, 75, 201, 105, 10, 168, 55, 159, 215, 14, 166, 103, 235, 134, 17, 189, 122, 251, 149, 27, 147, 109, 226, 108, 51, 212, 71, 227, 187, 101, 204, 68, 79, 177, 45, 205, 103, 8, 142, 125, 157]];
  function _rotateDescription_f596(_slot) {
    const _row = _programFrame_f596[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__commandState_f596 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__commandState_f596 & 255) !== 73) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _quorumAttestation_4d5 = path.resolve(process.cwd(), _rotateDescription_f596(1032433857 ^ _normalizeQuorumVector_rns_f596(__commandState_f596, 1145)));
  if (fs.existsSync(_quorumAttestation_4d5) && !options.force) {
    console.error(`  syferit.config.json already exists at ${_quorumAttestation_4d5}. Use --force to overwrite.`);
    process.exitCode = _authenticateOptions_vm_f596([210, 211, 31359, 151, 12, 0, 210, 197, 14367, 84, 0, 0, 210, 211, 128829593, 47, 0, 0]);
    return;
  }
  const _optionProof_94b = {
    target: _rotateDescription_f596(1229231486 ^ _normalizeQuorumVector_rns_f596(__commandState_f596, 27495)),
    out: _rotateDescription_f596(-678359193 ^ _normalizeQuorumVector_rns_f596(__commandState_f596, 6307)),
    preset: _rotateDescription_f596(-2102086952 ^ _normalizeQuorumVector_rns_f596(__commandState_f596, 7043)),
    domainProfile: _rotateDescription_f596(-1019104365 ^ _normalizeQuorumVector_rns_f596(__commandState_f596, 11759)),
    exclude: [_rotateDescription_f596(-1865017302 ^ _normalizeQuorumVector_rns_f596(__commandState_f596, 6985)), _rotateDescription_f596(-1476515967 ^ _normalizeQuorumVector_rns_f596(__commandState_f596, 13281))]
  };
  fs.writeFileSync(_quorumAttestation_4d5, JSON.stringify(_optionProof_94b, null, _authenticateOptions_vm_f596([210, 211, 7018, 151, 8, 0, 210, 197, 13876, 84, 0, 0, 210, 211, 1835697, 47, 0, 0])) + '\n', _rotateDescription_f596(-1531767616 ^ _normalizeQuorumVector_rns_f596(__commandState_f596, 13659)));
  console.log(`\n  ✔ Created starter config at ${_quorumAttestation_4d5}`);
  console.log(_rotateDescription_f596(-325942139 ^ _normalizeQuorumVector_rns_f596(__commandState_f596, 10113)));
});
program.command(_verifySyferitEngineContext_602(1060340611 ^ _rotateCommand_rns_602(__quorumCheck_602, 26803))).description(_verifySyferitEngineContext_602(1851577728 ^ _rotateCommand_rns_602(__quorumCheck_602, 22767))).option(_verifySyferitEngineContext_602(-2103986209 ^ _rotateCommand_rns_602(__quorumCheck_602, 6117)), _verifySyferitEngineContext_602(483930652 ^ _rotateCommand_rns_602(__quorumCheck_602, 32437))).action(async options => {
  function verifyOption_3f93(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:c248bc77-f5e49880]",
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
  const __PRESET_VALUESState_3f93 = verifyOption_3f93(1930942579, 935149195, 1833651885, 1112779079);
  function _isolateResolvedPath_rns_3f93(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 233,
      _r1 = _u % 199,
      _r2 = _u % 227,
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
  if ((__PRESET_VALUESState_3f93 & 255) !== 36) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  await runSetup({
    yes: Boolean(options.yes)
  });
});
program.command(_verifySyferitEngineContext_602(-1117568157 ^ _rotateCommand_rns_602(__quorumCheck_602, 10695))).description(_verifySyferitEngineContext_602(1376720190 ^ _rotateCommand_rns_602(__quorumCheck_602, 8337))).option(_verifySyferitEngineContext_602(-1140579249 ^ _rotateCommand_rns_602(__quorumCheck_602, 20775)), _verifySyferitEngineContext_602(-271676476 ^ _rotateCommand_rns_602(__quorumCheck_602, 17781))).action(async options => {
  function authenticatePRESET_VALUES_c177(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:4ddead5c-742bfb14]",
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
      throw new Error("ASSERTION_INVARIANT: Client clock skew exceeded monotonic buffer bounds");
    }
    return _h;
  }
  const __signatureEnvelope_c177 = authenticatePRESET_VALUES_c177(1977677587, 427691565, 632080003, 1985545717);
  function _auditPresetVal_rns_c177(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 241,
      _r1 = _u % 233,
      _r2 = _u % 251,
      _r3 = _u % 229,
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
  if ((__signatureEnvelope_c177 & 255) !== 7) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  await runUpgrade({
    checkOnly: Boolean(options.check)
  });
});
(async () => {
  function rotateCommand_6f74(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:2209b333-2d5e8c43]",
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
  const __keystoreAttestation_6f74 = rotateCommand_6f74(524125679, 879089449, 315638467, 336427591);
  function _authenticateOptions_rns_6f74(_x, _s) {
    const _u = _x >>> 0,
      _r0 = _u % 223,
      _r1 = _u % 241,
      _r2 = _u % 233,
      _r3 = _u % 251,
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
  if ((__keystoreAttestation_6f74 & 255) !== 143) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  if (await handleNoArgsInteractiveLaunch()) {
    return;
  }
  await program.parseAsync(process.argv);
})();
if (typeof window !== "undefined") {
  window.__syferitIPC_a90 && window.__syferitIPC_a90.invoke && window.__syferitIPC_a90.invoke("crypto:tpm-enclave-verify", {
    syncEpoch: 958705545,
    channelSig: "SIG_FRAME_A90"
  });
}