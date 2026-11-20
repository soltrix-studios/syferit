<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="https://syferit.soltrixstudios.com/icon.png" alt="Syferit Logo" width="80" height="80" />
  </a>
</p>

<h1 align="center">@syferit/benchmarks</h1>

<p align="center">
  <strong>Token Burn Multiplier (TBM) &amp; SMT Solver Hardness Evaluation Suite (v2.0.0)</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em>
</p>

> Part of the **[Syferit](https://syferit.soltrixstudios.com)** code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

---

## Installation

```bash
npm i -D @syferit/benchmarks
```

## Quickstart

```typescript
import { evaluateCodeResilience } from '@syferit/benchmarks';

const metrics = evaluateCodeResilience(sourceCode, 2026);
console.log({
  tokenBurnMultiplier: metrics.tokenBurnMultiplier,
  rnsArxEntangled: metrics.rnsArxEntangled,
  estimatedSmtCnfClauses: metrics.estimatedSmtCnfClauses,
  tamperResistanceScore: metrics.tamperResistanceScore
});
```

## Features

- **Empirical SMT & Token Burn Metrics:** Quantifies context-window saturation (`tokenBurnMultiplier`), RNS-ARX entanglement, CNF clause explosion estimates, and tamper resilience scores.
- **Zero Runtime Overhead:** Runs deterministically offline on any target JavaScript or TypeScript module.

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
