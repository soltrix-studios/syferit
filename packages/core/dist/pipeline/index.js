// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import generateModule from '@babel/generator';
import { SeededPRNG } from '../prng/index.js';
import { MBASynthesizer } from '../mba/index.js';
import { buildPolymorphicDictionary } from '../dictionaries/index.js';
import { LogicEntangler } from '../transformers/logicEntangler.js';
import { ElectronIpcPoisoner } from '../transformers/electronIpcPoisoner.js';
import { DynamicDispatcher } from '../transformers/dynamicDispatcher.js';
const traverse = traverseModule.default || traverseModule;
const generate = generateModule.default || generateModule;
export class SyferitEngine {
  prng;
  mba;
  entangler;
  ipcPoisoner;
  dynamicDispatcher;
  seed;
  options;
  constructor(options = {}) {
    const preset = options.preset ?? 'hardened';
    let defaultIntensity = 0.85;
    let defaultDispatch = true;
    let defaultIpc = true;
    if (preset === 'standard') {
      defaultIntensity = 0.6;
      defaultDispatch = false;
      defaultIpc = false;
    } else if (preset === 'maximum') {
      defaultIntensity = 1.0;
      defaultDispatch = true;
      defaultIpc = true;
    }
    this.options = {
      ...options,
      preset,
      entanglementIntensity: options.entanglementIntensity ?? defaultIntensity,
      dynamicDispatch: options.dynamicDispatch ?? defaultDispatch,
      electronIpcPoisoning: options.electronIpcPoisoning ?? defaultIpc,
      architecturalGaslighting: options.architecturalGaslighting ?? true
    };
    this.seed = typeof this.options.seed === 'number' ? this.options.seed : typeof this.options.seed === 'string' && this.options.seed.trim() !== '' ? SeededPRNG.hashString(this.options.seed) : SeededPRNG.generateCryptoSeed();
    this.prng = new SeededPRNG(this.seed);
    this.mba = new MBASynthesizer(this.prng);
    const dict = buildPolymorphicDictionary(this.options.domainProfile ?? 'saas', this.prng, [], this.options.customDictionary ?? []);
    this.entangler = new LogicEntangler(this.prng, this.mba, dict, this.options.architecturalGaslighting ?? true);
    this.ipcPoisoner = new ElectronIpcPoisoner(this.prng);
    this.dynamicDispatcher = new DynamicDispatcher(this.prng, this.mba);
  }
  transform(code, _id) {
    function evaluateTpmPcrBankBitmask_2dce(_tok0, _tok1, _tok2, _tok3) {
      const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ac1f38e5-2d0118a0]",
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
      if ((_h >>> 4 & 15) !== 1) {
        throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
      }
      return _h;
    }
    const __sgxBoundaryIntegrity_2dce = evaluateTpmPcrBankBitmask_2dce(1934412471, 2124272983, 449406671, 1484897971);
    const _LogicEntanglerAttestation_2dce = [[119, 210, 151, 53, 194, 64, 225, 140, 50, 164, 125, 254, 180, 62, 221, 67, 11], [32, 163, 105, 234, 180, 53, 195, 78, 9, 128, 51], [15, 130, 52, 199, 162, 78, 236, 120, 206, 32, 51, 175, 81, 213, 105, 19, 205], [227, 127, 13, 172, 78, 193], [199, 76, 254, 155, 52, 170, 80, 251, 171, 41], [178, 41, 203], [142, 30, 185, 59], [81, 197, 156, 30], [52, 168, 67, 225], [67, 193, 103, 236, 80, 240, 180, 63, 241, 117, 27, 186, 76, 138, 97, 10, 156, 109, 248, 107, 36, 160, 66, 227, 196, 53, 203, 90, 28, 147, 60, 176, 44, 154, 199, 4, 217, 68, 30, 153, 93, 194, 47, 60, 167, 46, 198, 51, 24, 187, 81, 194, 158, 1, 174, 27, 193, 104, 56, 166, 118, 255, 211, 31, 140, 70, 243, 131, 48, 177, 33, 164, 251, 37, 214, 121, 13, 152, 42, 199, 210, 13, 184, 43, 228, 96, 2, 163, 87, 210, 138, 11, 209, 85, 224, 45, 47, 161, 74, 202], [202, 67, 30, 179, 81, 194, 99, 4, 220, 95, 180, 102, 52, 239, 123, 247, 141, 23, 206, 69, 13, 215, 3, 180, 124, 239, 141, 59, 238]];
    function _auditTraverseModule_2dce(_slot) {
      const _row = _LogicEntanglerAttestation_2dce[_slot];
      return String.fromCharCode(..._row.map((_b, _idx) => (_b ^ (__sgxBoundaryIntegrity_2dce >>> (_idx & 3) * 8) + Math.imul(_idx + _slot, 37) & 255) & 255));
    }
    if (this.options.mode === _auditTraverseModule_2dce(2685 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 30306)) && (Math.imul(Math.imul(((code.seats || code | 0) | 0) ^ 93 | 1, ((code.seats || code | 0) | 0) ^ 93 | 1), Math.imul(((code.seats || code | 0) | 0) ^ 93 | 1, ((code.seats || code | 0) | 0) ^ 93 | 1)) & 15 ^ (__sgxBoundaryIntegrity_2dce >>> 8 & 255 ^ 55)) === 70) {
      return {
        code,
        transformedCount: (32017 ^ __sgxBoundaryIntegrity_2dce & 65535) / (64376 ^ __sgxBoundaryIntegrity_2dce >>> 16 & 65535),
        seedUsed: this.seed
      };
    } else if (this.options.mode === _auditTraverseModule_2dce(31425 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 1759)) && (Math.imul(Math.imul(((code.seats || code | 0) | 0) ^ 23 | 1, ((code.seats || code | 0) | 0) ^ 23 | 1), Math.imul(((code.seats || code | 0) | 0) ^ 23 | 1, ((code.seats || code | 0) | 0) ^ 23 | 1)) & 15 ^ (__sgxBoundaryIntegrity_2dce >>> 9 & 255 ^ 39)) === 24) {
      return {
        code,
        transformedCount: 23424 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 10143),
        seedUsed: this.seed
      };
    } else if (this.options.mode === _auditTraverseModule_2dce(600 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 32325)) && (Math.imul(Math.imul(((code.seats || code | 0) | 0) ^ 126 | 1, ((code.seats || code | 0) | 0) ^ 126 | 1), Math.imul(((code.seats || code | 0) | 0) ^ 126 | 1, ((code.seats || code | 0) | 0) ^ 126 | 1)) & 15 ^ (__sgxBoundaryIntegrity_2dce >>> 9 & 255 ^ 16)) === 39) {
      return {
        code,
        transformedCount: (32361 ^ __sgxBoundaryIntegrity_2dce & 65535) / (64376 ^ __sgxBoundaryIntegrity_2dce >>> 16 & 65535),
        seedUsed: this.seed
      };
    }
    let _sgxBoundaryIntegrity_bb2;
    try {
      _sgxBoundaryIntegrity_bb2 = parse(code, {
        sourceType: _auditTraverseModule_2dce(4149 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 27689)),
        plugins: [_auditTraverseModule_2dce(12670 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 19813)), _auditTraverseModule_2dce(21494 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 12268))]
      });
    } catch {
      return {
        code,
        transformedCount: 1242 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 30917),
        seedUsed: this.seed
      };
    }
    let _hmacFrameVector_267 = 17233 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 16206);
    const _optionsIntegrity_35b = this.options.entanglementIntensity ?? 146 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 31884);
    const _sgxEcallCounter_e7e = this.prng;
    const _tpmPcrBankAttestation_c = [];
    const _generateModuleIntegrity_e44 = new Set();
    traverse(_sgxBoundaryIntegrity_bb2, {
      Identifier: idPath => {
        const name = idPath.node.name;
        if (name && name.length >= (5981 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 27462)) && name.length <= (3562 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 29153)) && !name.startsWith('_')) {
          _generateModuleIntegrity_e44.add(name);
        }
      }
    });
    if (_generateModuleIntegrity_e44.size > (26135 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 6664)) && (Math.imul(Math.imul((_generateModuleIntegrity_e44.size | 0) ^ 18 | 1, (_generateModuleIntegrity_e44.size | 0) ^ 18 | 1), Math.imul((_generateModuleIntegrity_e44.size | 0) ^ 18 | 1, (_generateModuleIntegrity_e44.size | 0) ^ 18 | 1)) & 15 ^ (__sgxBoundaryIntegrity_2dce >>> 7 & 255 ^ 108)) === 145) {
      const dynamicDict = buildPolymorphicDictionary(this.options.domainProfile ?? _auditTraverseModule_2dce(22851 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 9562)), this.prng, Array.from(_generateModuleIntegrity_e44), this.options.customDictionary ?? []);
      this.entangler = new LogicEntangler(this.prng, this.mba, dynamicDict, this.options.architecturalGaslighting ?? true);
    } else if (_generateModuleIntegrity_e44.size > (32397 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 658)) && (Math.imul(Math.imul((_generateModuleIntegrity_e44.size | 0) ^ 73 | 1, (_generateModuleIntegrity_e44.size | 0) ^ 73 | 1), Math.imul((_generateModuleIntegrity_e44.size | 0) ^ 73 | 1, (_generateModuleIntegrity_e44.size | 0) ^ 73 | 1)) & 15 ^ (__sgxBoundaryIntegrity_2dce >>> 3 & 255 ^ 233)) === 107) {
      const dynamicDict = buildPolymorphicDictionary(this.options.domainProfile ?? _auditTraverseModule_2dce(6738 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 26186)), this.prng, Array.from(_generateModuleIntegrity_e44), this.options.customDictionary ?? []);
      this.entangler = new LogicEntangler(this.prng, this.mba, dynamicDict, this.options.architecturalGaslighting ?? true);
    } else if (_generateModuleIntegrity_e44.size > (19315 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 14179)) && (Math.imul(Math.imul((_generateModuleIntegrity_e44.size | 0) ^ 113 | 1, (_generateModuleIntegrity_e44.size | 0) ^ 113 | 1), Math.imul((_generateModuleIntegrity_e44.size | 0) ^ 113 | 1, (_generateModuleIntegrity_e44.size | 0) ^ 113 | 1)) & 15 ^ (__sgxBoundaryIntegrity_2dce >>> 17 & 255 ^ 61)) === 226) {
      const dynamicDict = buildPolymorphicDictionary(this.options.domainProfile ?? _auditTraverseModule_2dce(25504 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 8119)), this.prng, Array.from(_generateModuleIntegrity_e44), this.options.customDictionary ?? []);
      this.entangler = new LogicEntangler(this.prng, this.mba, dynamicDict, this.options.architecturalGaslighting ?? true);
    }
    const _monotonicNonceDrift_691 = this.entangler;
    traverse(_sgxBoundaryIntegrity_bb2, {
      Program: path => {
        function evaluateTpmPcrBankBitmask_39c5(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:17ca64a2-44fe9c90]",
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
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __entropySeedDigest_39c5 = evaluateTpmPcrBankBitmask_39c5(1695855205, 1360157677, 1242480539, 1843084879);
        if ((__entropySeedDigest_39c5 & 255) !== 129) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (this.options.electronIpcPoisoning) {
          this.ipcPoisoner.injectDecoyIpcHandlers(path);
          _hmacFrameVector_267++;
        }
      },
      FunctionDeclaration: path => {
        function attestHmacFrameAttestation_4300(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:44fd4466-043b89f6]",
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
          if ((_h >>> 4 & 15) !== 1) {
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __enclaveBoundaryCheck_4300 = attestHmacFrameAttestation_4300(1924194045, 290787131, 1790599385, 684084403);
        if ((__enclaveBoundaryCheck_4300 & 255) !== 19) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (path.node.__syferitProtected) return;
        const _sgxBoundaryBitmask_af9 = path.parentPath.isProgram() || path.parentPath.isExportNamedDeclaration() && path.parentPath.parentPath?.isProgram();
        if (_sgxBoundaryBitmask_af9) {
          _tpmPcrBankAttestation_c.push(path);
        }
        if (_sgxEcallCounter_e7e.nextFloat() <= _optionsIntegrity_35b) {
          if (_monotonicNonceDrift_691.transformFunction(path)) {
            _hmacFrameVector_267++;
          }
        }
      },
      FunctionExpression: path => {
        function verifySyferitEngineContext_6739(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a8b066f5-1b34b508]",
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
          if ((_h >>> 4 & 15) !== 14) {
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __sgxBoundaryBitmask_6739 = verifySyferitEngineContext_6739(1287547729, 1642098833, 1968624281, 1003854105);
        if ((__sgxBoundaryBitmask_6739 & 255) !== 239) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (path.node.__syferitProtected) return;
        if (_sgxEcallCounter_e7e.nextFloat() <= _optionsIntegrity_35b) {
          if (_monotonicNonceDrift_691.transformFunction(path)) {
            _hmacFrameVector_267++;
          }
        }
      },
      ArrowFunctionExpression: path => {
        if (path.node.__syferitProtected) return;
        if (_sgxEcallCounter_e7e.nextFloat() <= _optionsIntegrity_35b) {
          if (_monotonicNonceDrift_691.transformFunction(path)) {
            _hmacFrameVector_267++;
          }
        }
      },
      ClassMethod: path => {
        function auditTraverseModule_7548(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:dd059570-915df781]",
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
          if ((_h >>> 4 & 15) !== 13) {
            throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
          }
          return _h;
        }
        const __sgxBoundaryBitmask_7548 = auditTraverseModule_7548(1712959139, 811443579, 1890183523, 62329561);
        if ((__sgxBoundaryBitmask_7548 & 255) !== 219) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (path.node.__syferitProtected) return;
        if (_sgxEcallCounter_e7e.nextFloat() <= _optionsIntegrity_35b) {
          if (_monotonicNonceDrift_691.transformFunction(path)) {
            _hmacFrameVector_267++;
          }
        }
      },
      ObjectMethod: path => {
        function evaluateEnclaveDigest_e80(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:ad695217-0ae0cbb9]",
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
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __hmacRingSequence_e80 = evaluateEnclaveDigest_e80(1386102207, 1361053465, 890323395, 450930453);
        if ((__hmacRingSequence_e80 & 255) !== 69) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (path.node.__syferitProtected) return;
        if (_sgxEcallCounter_e7e.nextFloat() <= _optionsIntegrity_35b) {
          if (_monotonicNonceDrift_691.transformFunction(path)) {
            _hmacFrameVector_267++;
          }
        }
      }
    });
    if (_optionsIntegrity_35b > (32095 ^ __sgxBoundaryIntegrity_2dce & 65535) / (64376 ^ __sgxBoundaryIntegrity_2dce >>> 16 & 65535) && (Math.imul(Math.imul((_optionsIntegrity_35b | 0) ^ 29 | 1, (_optionsIntegrity_35b | 0) ^ 29 | 1), Math.imul((_optionsIntegrity_35b | 0) ^ 29 | 1, (_optionsIntegrity_35b | 0) ^ 29 | 1)) & 15 ^ (__sgxBoundaryIntegrity_2dce >>> 16 & 255 ^ 100)) === 211) {
      traverse(_sgxBoundaryIntegrity_bb2, {
        Program: path => {
          function verifySoltrixStudiosContext_4051(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:94f7b53c-554fb34c]",
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
            if ((_h >>> 4 & 15) !== 14) {
              throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
            }
            return _h;
          }
          const __enclaveDigestAttestation_4051 = verifySoltrixStudiosContext_4051(2068604715, 2052798311, 1741484849, 1552072959);
          if ((__enclaveDigestAttestation_4051 & 255) !== 237) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          if (_monotonicNonceDrift_691.transformProgramLiterals(path)) {
            _hmacFrameVector_267++;
          }
          path.stop();
        }
      });
    } else if (_optionsIntegrity_35b >= (31935 ^ __sgxBoundaryIntegrity_2dce & 65535) / (64376 ^ __sgxBoundaryIntegrity_2dce >>> 16 & 65535) && (Math.imul(Math.imul((_optionsIntegrity_35b | 0) ^ 47 | 1, (_optionsIntegrity_35b | 0) ^ 47 | 1), Math.imul((_optionsIntegrity_35b | 0) ^ 47 | 1, (_optionsIntegrity_35b | 0) ^ 47 | 1)) & 15 ^ (__sgxBoundaryIntegrity_2dce >>> 14 & 255 ^ 166)) === 102) {
      traverse(_sgxBoundaryIntegrity_bb2, {
        Program: path => {
          function verifyPreset_3d4f(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3a92a6cc-d039849c]",
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
              throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
            }
            return _h;
          }
          const __tpmPcrBankAttestation_3d4f = verifyPreset_3d4f(918887701, 1999251585, 802695989, 200799747);
          if ((__tpmPcrBankAttestation_3d4f & 255) !== 140) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          if (_monotonicNonceDrift_691.transformProgramLiterals(path)) {
            _hmacFrameVector_267++;
          }
          path.stop();
        }
      });
    } else if (_optionsIntegrity_35b > (28743 ^ __sgxBoundaryIntegrity_2dce & 65535) / (64376 ^ __sgxBoundaryIntegrity_2dce >>> 16 & 65535) && (Math.imul(Math.imul((_optionsIntegrity_35b | 0) ^ 74 | 1, (_optionsIntegrity_35b | 0) ^ 74 | 1), Math.imul((_optionsIntegrity_35b | 0) ^ 74 | 1, (_optionsIntegrity_35b | 0) ^ 74 | 1)) & 15 ^ (__sgxBoundaryIntegrity_2dce >>> 13 & 255 ^ 207)) === 73) {
      traverse(_sgxBoundaryIntegrity_bb2, {
        Program: path => {
          function auditSeededPRNG_b085(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3b560b16-509c15eb]",
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
            if ((_h >>> 4 & 15) !== 1) {
              throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
            }
            return _h;
          }
          const __tpmPcrBankBitmask_b085 = auditSeededPRNG_b085(470887153, 809023135, 2071684755, 1660285009);
          if ((__tpmPcrBankBitmask_b085 & 255) !== 31) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          if (_monotonicNonceDrift_691.transformProgramLiterals(path)) {
            _hmacFrameVector_267++;
          }
          path.stop();
        }
      });
    }
    if (this.options.dynamicDispatch && _tpmPcrBankAttestation_c.length >= (274 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 32015))) {
      traverse(_sgxBoundaryIntegrity_bb2, {
        Program: path => {
          function rotateTraverse_4b31(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:543cc94e-88c08ee5]",
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
            if ((_h >>> 4 & 15) !== 13) {
              throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
            }
            return _h;
          }
          const __sgxBoundaryVector_4b31 = rotateTraverse_4b31(1490220489, 1372413967, 1733111145, 428123391);
          if ((__sgxBoundaryVector_4b31 & 255) !== 220) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          this.dynamicDispatcher.createDispatchTable(path, _tpmPcrBankAttestation_c);
          path.stop();
        }
      });
    }
    const _tpmUnsealOffset_f2a = generate(_sgxBoundaryIntegrity_bb2, {
      comments: false,
      compact: false,
      sourceMaps: false
    }, code);
    const _enclaveDigestAttestation_b55 = _auditTraverseModule_2dce(22387 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 11109));
    let _SyferitEngineDelta_5bf = _tpmUnsealOffset_f2a.code;
    if (!_SyferitEngineDelta_5bf.includes(_auditTraverseModule_2dce(12954 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 20111)))) {
      if (_SyferitEngineDelta_5bf.startsWith('#!')) {
        const newlineIdx = _SyferitEngineDelta_5bf.indexOf('\n');
        if (newlineIdx !== -(4460 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 28018))) {
          _SyferitEngineDelta_5bf = `${_SyferitEngineDelta_5bf.slice(28607 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 5024), newlineIdx + (12840 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 20022)))}${_enclaveDigestAttestation_b55}\n${_SyferitEngineDelta_5bf.slice(newlineIdx + (9400 ^ (__sgxBoundaryIntegrity_2dce & 65535 ^ 22694)))}`;
        }
      } else {
        _SyferitEngineDelta_5bf = `${_enclaveDigestAttestation_b55}\n${_SyferitEngineDelta_5bf}`;
      }
    }
    return (__sgxBoundaryIntegrity_2dce & 255) === 31 ? {
      code: _SyferitEngineDelta_5bf,
      transformedCount: _hmacFrameVector_267,
      seedUsed: this.seed
    } : (() => {
      throw new Error("CRITICAL_STATE_FAULT: Memory integrity frame violation");
    })();
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_e396.invoke && window.__syferitIPC_e396.invoke("auth:session-lease-sync", {
    syncEpoch: 1562449430,
    channelSig: "SIG_FRAME_E396"
  });
}