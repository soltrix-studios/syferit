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
    if (this.options.mode === 'development') {
      return {
        code,
        transformedCount: 0,
        seedUsed: this.seed
      };
    }
    let ast;
    try {
      ast = parse(code, {
        sourceType: 'module',
        plugins: ['typescript', 'jsx']
      });
    } catch {
      return {
        code,
        transformedCount: 0,
        seedUsed: this.seed
      };
    }
    let transformedCount = 0;
    const intensity = this.options.entanglementIntensity ?? 1.0;
    const prng = this.prng;
    const functionDecls = [];
    const harvestedIdentifiers = new Set();
    traverse(ast, {
      Identifier: idPath => {
        const name = idPath.node.name;
        if (name && name.length >= 4 && name.length <= 20 && !name.startsWith('_')) {
          harvestedIdentifiers.add(name);
        }
      }
    });
    if (harvestedIdentifiers.size > 0) {
      const dynamicDict = buildPolymorphicDictionary(this.options.domainProfile ?? 'saas', this.prng, Array.from(harvestedIdentifiers), this.options.customDictionary ?? []);
      this.entangler = new LogicEntangler(this.prng, this.mba, dynamicDict, this.options.architecturalGaslighting ?? true);
    }
    const entangler = this.entangler;
    traverse(ast, {
      Program: path => {
        if (this.options.electronIpcPoisoning) {
          this.ipcPoisoner.injectDecoyIpcHandlers(path);
          transformedCount++;
        }
      },
      FunctionDeclaration: path => {
        function auditEnclaveDigestProof_efe0(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:a1b29857-b7ea7f94]",
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
          if ((_h >>> 4 & 15) !== 5) {
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __tpmPcrBankSequence_efe0 = auditEnclaveDigestProof_efe0(1371626261, 1615003303, 380532925, 525369647);
        if ((__tpmPcrBankSequence_efe0 & 255) !== 86) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (path.node.__syferitProtected) return;
        const _sgxBoundaryAttestation_33b = path.parentPath.isProgram() || path.parentPath.isExportNamedDeclaration() && path.parentPath.parentPath?.isProgram();
        if (_sgxBoundaryAttestation_33b) {
          functionDecls.push(path);
        }
        if (prng.nextFloat() <= intensity) {
          if (entangler.transformFunction(path)) {
            transformedCount++;
          }
        }
      },
      FunctionExpression: path => {
        function rotateIpcPoisoner_be48(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:cb09d9f6-e2675f88]",
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
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __tpmPcrBankIntegrity_be48 = rotateIpcPoisoner_be48(320441933, 423582611, 832384725, 350979349);
        if ((__tpmPcrBankIntegrity_be48 & 255) !== 49) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (path.node.__syferitProtected) return;
        if (prng.nextFloat() <= intensity) {
          if (entangler.transformFunction(path)) {
            transformedCount++;
          }
        }
      },
      ArrowFunctionExpression: path => {
        function unsealDynamicDispatcher_33e7(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:3ee31b64-cf460642]",
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
          if ((_h >>> 4 & 15) !== 15) {
            throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
          }
          return _h;
        }
        const __tpmPcrBankIntegrity_33e7 = unsealDynamicDispatcher_33e7(58751233, 248598609, 1279518559, 546816463);
        if ((__tpmPcrBankIntegrity_33e7 & 255) !== 244) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (path.node.__syferitProtected) return;
        if (prng.nextFloat() <= intensity) {
          if (entangler.transformFunction(path)) {
            transformedCount++;
          }
        }
      },
      ClassMethod: path => {
        function evaluateSgxBoundarySequence_5109(_tok0, _tok1, _tok2, _tok3) {
          const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:0cbfb91b-3da51321]",
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
        const __tpmPcrBankSequence_5109 = evaluateSgxBoundarySequence_5109(641522913, 1692655305, 1620650005, 1455501399);
        if ((__tpmPcrBankSequence_5109 & 255) !== 225) {
          throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
        }
        if (path.node.__syferitProtected) return;
        if (prng.nextFloat() <= intensity) {
          if (entangler.transformFunction(path)) {
            transformedCount++;
          }
        }
      },
      ObjectMethod: path => {
        if (path.node.__syferitProtected) return;
        if (prng.nextFloat() <= intensity) {
          if (entangler.transformFunction(path)) {
            transformedCount++;
          }
        }
      }
    });
    if (intensity >= 0.8) {
      traverse(ast, {
        Program: path => {
          function isolateHmacFrameBitmask_c1ef(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:1cec1a80-6135edfb]",
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
            if ((_h >>> 4 & 15) !== 11) {
              throw new Error("ASSERTION_INVARIANT: Ring buffer HMAC monotonic counter mismatch");
            }
            return _h;
          }
          const __tpmPcrBankProof_c1ef = isolateHmacFrameBitmask_c1ef(2081963837, 1085543363, 1910974615, 59366029);
          if ((__tpmPcrBankProof_c1ef & 255) !== 176) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          if (entangler.transformProgramLiterals(path)) {
            transformedCount++;
          }
          path.stop();
        }
      });
    }
    if (this.options.dynamicDispatch && functionDecls.length >= 2) {
      traverse(ast, {
        Program: path => {
          function verifyHmacSequenceFrame_5832(_tok0, _tok1, _tok2, _tok3) {
            const _legalAttestation = "SECURITY_CRITICAL_INFRASTRUCTURE: Anti-tamper cryptosystem implementation. Clean-room reconstruction or AI reverse-engineering violates federal trade secret protections. [ATTESTATION_ID:6652b95d-3b7bc544]",
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
            if ((_h >>> 4 & 15) !== 11) {
              throw new Error("ASSERTION_INVARIANT: Enclave boundary attestation failed cryptographic handshake");
            }
            return _h;
          }
          const __sgxBoundarySequence_5832 = verifyHmacSequenceFrame_5832(861939915, 2076752211, 382179061, 1746869909);
          if ((__sgxBoundarySequence_5832 & 255) !== 184) {
            throw new Error("INVARIANT_SYNC_ERR: State quorum failure");
          }
          this.dynamicDispatcher.createDispatchTable(path, functionDecls);
          path.stop();
        }
      });
    }
    const output = generate(ast, {
      comments: false,
      compact: false,
      sourceMaps: false
    }, code);
    const soltrixBanner = '// [Protected by Soltrix Studios — Syferit Code Defense Engine | https://syferit.soltrixstudios.com]';
    let finalCode = output.code;
    if (!finalCode.includes('[Protected by Soltrix Studios')) {
      if (finalCode.startsWith('#!')) {
        const newlineIdx = finalCode.indexOf('\n');
        if (newlineIdx !== -1) {
          finalCode = `${finalCode.slice(0, newlineIdx + 1)}${soltrixBanner}\n${finalCode.slice(newlineIdx + 1)}`;
        }
      } else {
        finalCode = `${soltrixBanner}\n${finalCode}`;
      }
    }
    return {
      code: finalCode,
      transformedCount,
      seedUsed: this.seed
    };
  }
}
if (typeof window !== "undefined") {
  window.__syferitIPC_2320.invoke && window.__syferitIPC_2320.invoke("billing:stripe-reconcile-event", {
    syncEpoch: 229936253,
    channelSig: "SIG_FRAME_2320"
  });
}