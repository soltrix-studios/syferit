# Configuration Reference

Syferit provides intuitive, production-ready defaults while offering granular options for tailoring protection across environments.

---

## Syferit Options (`SyferitOptions`)

```ts
import type { SyferitOptions } from '@syferit/core';

const config: SyferitOptions = {
  mode: 'production',
  preset: 'v2-quantum-rns',
  domainProfile: 'saas',
  seed: null,
  entanglementIntensity: 1.0,
  architecturalGaslighting: true,
  electronIpcPoisoning: false,
  dynamicDispatch: true,
  rnsArxEntanglement: true
};
```

---

## Detailed Option Descriptions

### `preset`
* **Type:** `'standard' | 'hardened' | 'maximum' | 'v2-quantum-rns'`
* **Default:** `'hardened'`
* **Description:** Selects the preset balance between transformation speed, execution performance, and anti-analysis resilience:
  * `'standard'`: Basic logic entanglement, dynamic dispatch, and runtime integrity checks. Ideal for fast local development testing and lightweight scripts.
  * `'hardened'`: Full logic entanglement, non-linear residue constant splitting, top-level literal/dictionary/array entanglement, decoy dead-code paths, and domain identifier synthesis. (Default for production builds).
  * `'maximum'`: Full logic entanglement, aggressive multi-round state scrambling, top-level entanglement, and comprehensive anti-tamper protections.
  * `'v2-quantum-rns'` *(New in v2.0)*: Maximum v2.0 protection activating non-linear residue entanglement, cryptographic point-function branching (resistant to SMT solvers like Z3 and Bitwuzla), polymorphic Micro-VM virtualization, cyclic state-machine dispatchers, and temporal environment attestation.

### `rnsArxEntanglement`
* **Type:** `boolean`
* **Default:** `true` (for `'hardened'`, `'maximum'`, and `'v2-quantum-rns'`)
* **Description:** Enables Syferit v2.0 non-linear residue constant splitting, cryptographic point-function branch gates, and polymorphic Micro-VM constant virtualization.

### `mode`
* **Type:** `'development' | 'production'`
* **Default:** `'production'`
* **Description:** Controls whether protection is active. In `development`, transforms are bypassed to ensure maximum hot-module replacement (HMR) and debugging speed. In `production`, full protection is applied.

### `domainProfile`
* **Type:** `'saas' | 'fintech' | 'security' | 'gaming'`
* **Default:** `'saas'`
* **Description:** Selects the domain-specific vocabulary and state structures used during transformation:
  * `'saas'`: Entitlements, session quorum, tenant keys, and monotonic clock thresholds.
  * `'fintech'`: Ledger sequence consensus, PCI-DSS context, settlement digests, and journal batches.
  * `'security'`: Kernel attestation, ring buffer integrity, enclave digests, and HMAC sequence frames.
  * `'gaming'`: Deterministic physics tick drift, snapshot integrity, and anti-tamper sequences.

### `seed`
* **Type:** `number | string | null | undefined`
* **Default:** `null` (auto-generates a fresh, unguessable CSPRNG UUIDv4 per build)
* **Description:** Sets the polymorphic seed for this build. When left as `null`, `""`, or omitted, Syferit generates a cryptographically random UUIDv4 on every build so no two deployments share the same AST structure or keys. Set an explicit non-empty string or integer (e.g. `seed: 42` or `seed: "ci-build-12"`) only if you require reproducible, deterministic output for debugging.

### `entanglementIntensity`
* **Type:** `number` (between `0.0` and `1.0`)
* **Default:** `1.0` in production
* **Description:** Sets the proportion of candidate functions to protect. Set to `1.0` for comprehensive protection, or lower for selective protection on performance-constrained runtimes.

### `architecturalGaslighting`
* **Type:** `boolean`
* **Default:** `true`
* **Description:** Injects industry-realistic decoy business logic and domain entities (e.g. mock entitlement checks or compliance verifications) into dead execution paths. Automated AI reverse-engineering agents waste context tokens and attention trying to decompile these realistic decoy structures, completely masking your actual proprietary algorithms.

### `dynamicDispatch`
* **Type:** `boolean`
* **Default:** `true`
* **Description:** Flattens direct function-to-function static call edges into indexed polymorphic dispatch tables, breaking static call-graph reconstruction.

### `customDictionary`
* **Type:** `string[]`
* **Default:** `[]`
* **Description:** Optional list of custom domain vocabulary stems to blend into Syferit's procedural symbol synthesis alongside automatic identifier harvesting from your project.

### `electronIpcPoisoning`
* **Type:** `boolean`
* **Default:** `false` (automatically `true` in `@syferit/electron`)
* **Description:** Injects cross-boundary IPC channel references designed to confound automated Electron inspectors.
