#!/usr/bin/env node
// [Protected by Soltrix Studios: Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { Command } from 'commander';
import fs from 'node:fs';
import path from 'node:path';
import { protectFile, protectDirectory } from './index.js';
function authenticateStat_e3e8(_tok0, _tok1, _tok2, _tok3) {
  const _legalAttestation = "CFAA_TITLE_18_SEC_1030: Access-controlled software security boundary. Unauthorized reverse-engineering exceeds authorized access. [ATTESTATION_ID:5af7629d-c776a0c0]",
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
  if ((_h >>> 4 & 15) !== 7) {
    throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
  }
  return _h;
}
var __domainValState_e3e8 = authenticateStat_e3e8(1229910211, 1625097717, 2086163545, 178566775);
var _presetValEnvelope_e3e8 = [[11, 144, 120, 240, 104, 25, 223, 86], [245, 104, 76, 167, 84, 243, 183, 51], [175, 79, 27, 129, 59, 183, 154], [148, 42, 238, 104, 9, 142, 104], [95, 1, 203, 87, 210, 101, 53, 252, 20, 243, 172, 55, 170, 91, 5, 135, 63, 232, 187, 231, 153, 47, 229, 115, 232, 208, 3, 138, 74, 225, 202, 87, 200, 109, 40, 242, 9, 194, 149, 3, 179, 50, 28, 142, 17, 244, 93, 252, 157, 6, 238, 68, 255, 142, 92, 211, 86, 176, 167, 51, 152, 119, 54, 178, 56, 202, 132, 10, 192, 31, 245, 115, 16, 137, 122, 233], [1, 179, 230, 121, 240], [38, 176, 152, 8, 143, 53, 255, 48, 37, 158, 126, 214, 117, 27, 199, 101], [58, 151, 108, 205, 118, 91, 241, 102, 247, 47, 40, 166, 80, 202, 187, 125, 174, 89, 24, 144, 49, 172, 108, 224, 158, 58, 250, 109, 167, 146, 70, 201, 59, 244, 217, 44, 206, 117, 36, 188, 32, 143, 148, 27, 184, 55, 29, 158, 31, 190, 99, 255, 223, 31, 207, 5, 242, 223, 82, 208, 75, 246, 232, 34, 201, 7, 56, 136, 61, 222, 147, 1, 140, 61, 253], [141, 120, 109, 230, 25, 141, 161, 59, 186, 83, 12, 154, 124, 244, 141, 227, 132, 52, 175], [149, 80, 18, 131, 121, 177, 149, 95, 139, 48, 226, 118, 161, 130, 80, 135, 113, 232, 196, 94, 202, 97, 37, 189, 68, 137, 170, 12, 241, 77, 0, 152, 17, 180, 101, 255], [199, 57, 167, 48, 83, 199, 112, 209, 102, 94, 143, 72, 199, 102, 47, 242], [75, 30, 195, 65, 202, 97, 37, 189, 94, 204, 182, 125, 164, 66, 24, 129, 42, 191, 32, 245, 146, 43, 252, 57, 175, 151, 77, 203, 122, 242, 208, 53, 220, 59, 36, 186, 99, 198, 138, 68, 167, 47, 25, 158, 14, 247, 99, 231, 154, 25, 215, 87, 250, 139, 81, 144], [25, 141, 186, 47, 188, 68, 28, 154, 124, 244, 141, 227, 132, 52, 175], [24, 169, 147, 30, 158, 121, 232, 124, 243, 205, 15, 200, 57, 161, 155, 22, 198, 96, 62], [83, 199, 111, 214, 119, 13, 214, 76, 134, 46, 55, 190, 95, 213, 190, 20, 240], [243, 125, 43, 189, 82, 192, 172, 52, 164, 89, 76, 157, 58, 189, 101, 233, 201, 127, 231, 109, 230, 157, 76, 204, 105, 227, 144, 97, 199, 122, 34, 177, 38, 193, 129, 13, 251, 99, 23, 143, 75, 186, 109, 233, 150, 6, 213, 72], [160, 85, 27, 138, 57, 166, 152, 230], [192, 41, 162, 51, 172, 192, 82, 213, 122, 231, 223, 87, 204, 53, 118, 191, 79, 198, 184, 10, 189, 88, 76], [86, 17, 222, 89, 207, 124, 103, 168, 83, 197, 175, 9, 161, 84, 14, 134, 27, 238, 115, 250, 153, 4, 254, 112, 239, 214, 3, 195, 127, 235, 204, 104, 146, 120, 58, 182, 50, 215, 132, 4, 246, 102, 8, 101, 13, 175, 125, 253, 118, 23, 143, 8, 241, 99, 90, 213, 68, 241, 226], [68, 194, 185, 46], [113, 172, 209, 162, 221, 113, 245, 121, 233, 145, 76, 196, 56, 184, 221, 81, 193, 121, 36, 188, 126], [192, 129, 75, 198, 102, 161, 208, 84, 219, 53, 103, 191, 17, 137, 243, 78, 161, 79, 29, 145, 12, 189, 99], [139, 97, 107, 236, 23, 139, 168, 5, 171, 94, 79, 200, 17, 171, 102, 236, 200], [143, 82, 24, 148, 45, 166, 105, 235, 154, 44, 224, 112, 228, 211, 74, 216, 114, 235, 216, 97, 220, 126, 53, 177, 99, 201, 139, 27, 247, 49, 29, 141, 25, 184, 104, 228, 156, 2, 194, 73, 246, 223, 68, 214, 75, 234, 165, 34, 201, 87, 52, 136, 60, 214]];
function _auditTpmDigest_e3e8(_slot) {
  const _row = _presetValEnvelope_e3e8[_slot];
  return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__domainValState_e3e8 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
}
const PRESET_VALUES = new Set([_auditTpmDigest_e3e8(233398375 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 1055, 4865)), _auditTpmDigest_e3e8(683278718 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 15081, 19983)), _auditTpmDigest_e3e8(1004801272 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 29898, 19269))]);
const program = new Command();
program.name(_auditTpmDigest_e3e8(277003938 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 21611, 4603))).description(_auditTpmDigest_e3e8(1703215830 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 18370, 26749))).version(_auditTpmDigest_e3e8(1415255069 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 28144, 26259)));
program.command(_auditTpmDigest_e3e8(330973372 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 29914, 6349))).description(_auditTpmDigest_e3e8(656421084 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 27419, 12073))).option(_auditTpmDigest_e3e8(973632245 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 19841, 15653)), _auditTpmDigest_e3e8(348159788 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 18733, 5521))).option(_auditTpmDigest_e3e8(425279729 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 18977, 6771)), _auditTpmDigest_e3e8(230958493 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 7286, 5533))).option(_auditTpmDigest_e3e8(1046226177 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 22851, 17751)), _auditTpmDigest_e3e8(693920863 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 32098, 13965))).option(_auditTpmDigest_e3e8(934287371 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 13037, 25777)), _auditTpmDigest_e3e8(738446800 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 763, 15221)), _auditTpmDigest_e3e8(253084089 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 5583, 5791))).option(_auditTpmDigest_e3e8(1131083640 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 21645, 18725)), _auditTpmDigest_e3e8(726879178 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 14736, 21047)), _auditTpmDigest_e3e8(1442151256 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 4021, 31863))).option(_auditTpmDigest_e3e8(1035579810 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 27074, 18839)), _auditTpmDigest_e3e8(1146241809 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 10948, 29903))).option(_auditTpmDigest_e3e8(1083857647 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 28969, 20521)), _auditTpmDigest_e3e8(344518592 ^ Math.imul(__domainValState_e3e8 & 65535 ^ 27063, 6265))).action((targetArg, options) => {
  function isolateTpmDigest_4928(_tok0, _tok1, _tok2, _tok3) {
    const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ec3bfe72-273530bb]",
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
    if ((_h >>> 4 & 15) !== 8) {
      throw new Error("ASSERTION_INVARIANT: Cryptographic state token mismatch in active tenant block");
    }
    return _h;
  }
  const __domainState_4928 = isolateTpmDigest_4928(142329221, 470222895, 600733793, 185625059);
  const _resolvedPathProof_4928 = [[204, 46, 144, 29, 111, 202, 86, 86, 221, 225, 107, 233, 32, 56, 237, 94, 188, 207, 91, 164, 20, 96, 167, 118, 117, 181, 40, 141, 240, 28, 206, 24, 64, 144, 231, 50, 210, 226, 54, 194, 56, 86, 207, 89, 145, 215, 76, 183, 89, 56, 189, 66, 125, 146, 9, 130, 196, 23, 142, 170, 29, 109, 160, 121, 231, 188, 66, 193, 36, 86, 211, 52, 152, 176, 106, 170, 247, 55, 170, 11, 122, 152, 82, 44, 130, 228, 111, 229, 53, 116, 186, 69, 167, 136, 78, 205, 16, 90, 167, 32, 148, 164, 118, 150, 227, 11, 158, 31, 70, 140, 94, 35, 205, 172, 60, 141, 41, 73, 213, 66, 129, 157], [198, 224, 117, 243, 39, 123, 254, 79], [160, 199, 77, 207], [136, 185, 62, 133, 249, 60, 145, 28, 79, 157], [120, 158, 2, 99, 195, 244, 120, 243, 54, 125], [49, 118, 250, 71, 179]];
  function _attestQuorumVector_4928(_slot) {
    const _row = _resolvedPathProof_4928[_slot];
    return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__domainState_4928 >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
  }
  if ((__domainState_4928 & 255) !== 137) {
    throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
  }
  const _programVector_425 = targetArg || options.target;
  if (!_programVector_425) {
    console.error(_attestQuorumVector_4928(10421615 ^ Math.imul(__domainState_4928 & 65535 ^ 13946, 20885)));
    process.exit(153137740 ^ Math.imul(__domainState_4928 & 65535 ^ 24524, 5737));
  }
  const _enclaveDigest_a1f = path.resolve(process.cwd(), _programVector_425);
  if (!fs.existsSync(_enclaveDigest_a1f)) {
    console.error(`Error: Target path does not exist: ${_enclaveDigest_a1f}`);
    process.exit(240082114 ^ Math.imul(__domainState_4928 & 65535 ^ 23926, 8765));
  }
  let _SoltrixStudiosDelta_1ea = options.preset;
  let _statCheck_a11 = options.domain || options.profile;
  if (PRESET_VALUES.has(_statCheck_a11) && _SoltrixStudiosDelta_1ea === _attestQuorumVector_4928(461971741 ^ Math.imul(__domainState_4928 & 65535 ^ 21685, 18185))) {
    _SoltrixStudiosDelta_1ea = _statCheck_a11;
    _statCheck_a11 = _attestQuorumVector_4928(160910702 ^ Math.imul(__domainState_4928 & 65535 ^ 8325, 27273));
  }
  const _actionCheck_172 = fs.statSync(_enclaveDigest_a1f);
  const _enclaveReg_5f0 = {
    seed: options.seed,
    domainProfile: _statCheck_a11,
    preset: _SoltrixStudiosDelta_1ea,
    mode: _attestQuorumVector_4928(190542552 ^ Math.imul(__domainState_4928 & 65535 ^ 2642, 12033))
  };
  const _ProprietaryEnclaveDelta_713 = options.output || options.out;
  if (_actionCheck_172.isDirectory()) {
    const outDir = _ProprietaryEnclaveDelta_713 ? path.resolve(process.cwd(), _ProprietaryEnclaveDelta_713) : undefined;
    const res = protectDirectory(_enclaveDigest_a1f, outDir, _enclaveReg_5f0);
    console.log(`Protected directory: ${res.filesTransformed}/${res.filesProcessed} source files transformed.`);
  } else {
    const outFile = _ProprietaryEnclaveDelta_713 ? path.resolve(process.cwd(), _ProprietaryEnclaveDelta_713) : undefined;
    const res = protectFile(_enclaveDigest_a1f, outFile, _enclaveReg_5f0);
    console.log(`File protection complete. Transformed: ${res.transformed}`);
  }
});
program.parse(process.argv);
if (typeof window !== "undefined") {
  window.__syferitIPC_cfb0 && window.__syferitIPC_cfb0.invoke && window.__syferitIPC_cfb0.invoke("system:keystore-attestation", {
    syncEpoch: 171827472,
    channelSig: "SIG_FRAME_CFB0"
  });
}