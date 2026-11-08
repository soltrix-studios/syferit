#!/usr/bin/env node
// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory } from './index.js';
function auditTpmPcrBankAttestation_c709(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:7a188a29-20ccfffe]",
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
  if ((_h >>> 4 & 15) !== 0) {
    throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
  }
  return _h;
}
const __entropyNonceVector_c709 = auditTpmPcrBankAttestation_c709(824668177, 965563853, 1410792803, 983484889);
const _protectFileBitmask_c709 = [[117, 9, 153, 105, 254, 112, 254, 255], [67, 195, 111, 72, 218, 88, 212, 164], [61, 166, 58, 56, 137, 46, 187], [6, 149, 1, 19, 123, 233, 143], [201, 104, 234, 254, 92, 204, 84, 21, 226, 106, 205, 174, 52, 162, 36, 62, 137, 65, 154, 142, 23, 134, 4, 26, 126, 169, 34, 51, 244, 120, 235, 206, 94, 196, 73, 27, 135, 43, 180, 170, 5, 171, 61, 23, 143, 77, 188, 133, 235, 111, 15, 237, 113, 231, 125, 122, 192, 9, 198, 202, 102, 238, 87, 43, 174, 35, 165, 163, 78, 182, 20, 26, 102, 16, 155, 112], [143, 24, 133, 238, 103], [148, 41, 185, 145, 29, 140, 30, 89, 87, 247, 159, 127, 199, 114, 230, 252], [72, 240, 139, 102, 228, 52, 206, 205, 101, 136, 79, 93, 162, 85, 212, 230, 60, 190, 63, 59, 131, 3, 179, 139, 236, 157, 29, 246, 53, 237, 105, 114, 137, 83, 254, 199, 92, 218, 91, 87, 178, 104, 179, 160, 10, 168, 50, 5, 141, 25, 132, 148, 173, 112, 16, 174, 64, 184, 117, 75, 217, 73, 135, 217, 59, 224, 95, 35, 175, 49, 172, 170, 30, 154, 26], [3, 209, 12, 15, 239, 20, 192, 162, 36, 170, 45, 35, 202, 93, 172, 138, 10, 157, 78], [3, 171, 49, 60, 199, 42, 182, 200, 29, 155, 1, 25, 47, 233, 115, 48, 199, 115, 231, 193, 84, 218, 70, 74, 178, 98, 201, 163, 127, 166, 35, 15, 135, 15, 134, 128], [85, 128, 70, 89, 33, 174, 145, 120, 212, 55, 174, 209, 85, 223, 78, 11], [217, 113, 252, 234, 88, 198, 66, 70, 172, 83, 217, 230, 54, 165, 63, 42, 152, 16, 255, 158, 224, 140, 27, 162, 61, 232, 98, 112, 200, 85, 247, 222, 78, 148, 91, 81, 241, 33, 173, 255, 21, 176, 54, 5, 156, 80, 132, 140, 232, 118, 8, 252, 72, 236, 118, 11], [239, 20, 219, 182, 34, 189, 61, 35, 202, 93, 172, 138, 10, 157, 78], [166, 50, 176, 137, 8, 210, 11, 19, 125, 166, 44, 127, 143, 58, 184, 137, 88, 219, 93], [33, 174, 142, 127, 197, 100, 247, 213, 20, 151, 86, 71, 173, 76, 223, 189, 98], [97, 218, 76, 70, 160, 95, 195, 175, 54, 190, 107, 54, 136, 18, 186, 130, 187, 216, 0, 246, 116, 226, 99, 119, 219, 68, 183, 138, 85, 213, 93, 90, 180, 38, 166, 182, 73, 252, 56, 20, 217, 29, 138, 130, 228, 105, 10, 227], [62, 172, 58, 51, 143, 15, 185, 143], [86, 130, 65, 92, 34, 171, 113, 98, 204, 124, 252, 200, 82, 142, 21, 72, 185, 45, 219, 165, 51, 179, 111], [228, 120, 255, 192, 93, 197, 6, 81, 161, 92, 206, 160, 51, 189, 47, 47, 137, 71, 146, 131, 235, 157, 31, 233, 125, 175, 34, 106, 205, 66, 237, 129, 96, 209, 91, 47, 160, 46, 165, 189, 68, 255, 41, 12, 159, 6, 156, 148, 228, 126, 174, 177, 67, 250, 123, 76, 214, 72, 131], [182, 93, 214, 181], [199, 5, 240, 203, 83, 216, 20, 16, 127, 232, 109, 125, 134, 33, 252, 200, 87, 208, 69, 85, 240], [78, 234, 104, 113, 208, 58, 243, 203, 69, 142, 4, 72, 231, 98, 144, 225, 47, 164, 62, 6, 154, 6, 128], [25, 216, 10, 21, 229, 18, 201, 172, 57, 183, 110, 97, 131, 2, 135, 149, 186], [29, 181, 63, 63, 159, 9, 182, 128, 232, 139, 7, 235, 118, 172, 101, 99, 192, 76, 255, 138, 78, 209, 74, 90, 241, 46, 172, 160, 69, 174, 50, 22, 139, 31, 143, 143, 238, 109, 29, 226, 68, 184, 99, 77, 217, 85, 202, 217, 59, 176, 83, 35, 174, 57]];
function _assertProtectFile_c709(_slot) {
  const _row = _protectFileBitmask_c709[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__entropyNonceVector_c709 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
const PRESET_VALUES = new Set([_assertProtectFile_c709(20519 ^ (__entropyNonceVector_c709 & 65535 ^ 2081)), _assertProtectFile_c709(30951 ^ (__entropyNonceVector_c709 & 65535 ^ 8416)), _assertProtectFile_c709(20775 ^ (__entropyNonceVector_c709 & 65535 ^ 2339))]);
const program = new Command();
program.name(_assertProtectFile_c709(3176 ^ (__entropyNonceVector_c709 & 65535 ^ 21613))).description(_assertProtectFile_c709(27433 ^ (__entropyNonceVector_c709 & 65535 ^ 13099))).version(_assertProtectFile_c709(23274 ^ (__entropyNonceVector_c709 & 65535 ^ 745)));
program.command(_assertProtectFile_c709(17772 ^ (__entropyNonceVector_c709 & 65535 ^ 7532))).description(_assertProtectFile_c709(9041 ^ (__entropyNonceVector_c709 & 65535 ^ 31568))).option(_assertProtectFile_c709(12822 ^ (__entropyNonceVector_c709 & 65535 ^ 27160)), _assertProtectFile_c709(14954 ^ (__entropyNonceVector_c709 & 65535 ^ 25189))).option(_assertProtectFile_c709(6265 ^ (__entropyNonceVector_c709 & 65535 ^ 16501)), _assertProtectFile_c709(20353 ^ (__entropyNonceVector_c709 & 65535 ^ 6028))).option(_assertProtectFile_c709(26939 ^ (__entropyNonceVector_c709 & 65535 ^ 12593)), _assertProtectFile_c709(16527 ^ (__entropyNonceVector_c709 & 65535 ^ 6276))).option(_assertProtectFile_c709(1120 ^ (__entropyNonceVector_c709 & 65535 ^ 23656)), _assertProtectFile_c709(11274 ^ (__entropyNonceVector_c709 & 65535 ^ 29699)), _assertProtectFile_c709(17117 ^ (__entropyNonceVector_c709 & 65535 ^ 6859))).option(_assertProtectFile_c709(5139 ^ (__entropyNonceVector_c709 & 65535 ^ 19460)), _assertProtectFile_c709(4487 ^ (__entropyNonceVector_c709 & 65535 ^ 18835)), _assertProtectFile_c709(28271 ^ (__entropyNonceVector_c709 & 65535 ^ 13946))).option(_assertProtectFile_c709(11573 ^ (__entropyNonceVector_c709 & 65535 ^ 29991)), _assertProtectFile_c709(19537 ^ (__entropyNonceVector_c709 & 65535 ^ 5186))).option(_assertProtectFile_c709(2999 ^ (__entropyNonceVector_c709 & 65535 ^ 21415)), _assertProtectFile_c709(2060 ^ (__entropyNonceVector_c709 & 65535 ^ 20509))).action((targetArg, options) => {
  const rawTarget = targetArg || options.target;
  if (!rawTarget) {
    console.error('Error: Please specify a target file or directory to protect (e.g. `syferit protect ./dist` or `syferit protect -t ./dist`)');
    process.exit(1);
  }
  const resolvedPath = path.resolve(process.cwd(), rawTarget);
  if (!fs.existsSync(resolvedPath)) {
    console.error(`Error: Target path does not exist: ${resolvedPath}`);
    process.exit(1);
  }
  let presetVal = options.preset;
  let domainVal = options.domain || options.profile;
  if (PRESET_VALUES.has(domainVal) && presetVal === 'hardened') {
    presetVal = domainVal;
    domainVal = 'saas';
  }
  const stat = fs.statSync(resolvedPath);
  const syferitOpts = {
    seed: options.seed,
    domainProfile: domainVal,
    preset: presetVal,
    mode: 'production'
  };
  const outPath = options.output || options.out;
  if (stat.isDirectory()) {
    const outDir = outPath ? path.resolve(process.cwd(), outPath) : undefined;
    const res = protectDirectory(resolvedPath, outDir, syferitOpts);
    console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
  } else {
    const outFile = outPath ? path.resolve(process.cwd(), outPath) : undefined;
    const res = protectFile(resolvedPath, outFile, syferitOpts);
    console.log(`File protection complete. Transformed: ${res.transformed}`);
  }
});
program.parse(process.argv);
if (typeof window !== "undefined") {
  window.__syferitIPC_a68e.invoke && window.__syferitIPC_a68e.invoke("system:keystore-attestation", {
    syncEpoch: 1501721091,
    channelSig: "SIG_FRAME_A68E"
  });
}