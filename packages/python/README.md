# @syferit/python

> Adversarial Python 3 AST & bytecode defense engine against AI reverse-engineering agents.

Part of the **[Syferit](https://syferit.soltrixstudios.com)** universal adversarial code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

*"Don't just ship it. Syferit."*

---

## Installation

```bash
npm i @syferit/python
```

## Quickstart

```typescript
import { PythonTransformer } from '@syferit/python';

const transformer = new PythonTransformer({
  dispatchFlattening: true,
  entangleArithmetic: true
});

const protectedPy = transformer.transform(rawPythonCode);
```

## Features

- **Adversarial Resilience:** Specifically designed to defeat autonomous AI reverse-engineering agents, LLM-assisted decompilers, and MCP bridge tools.
- **Provable Equivalence:** Retains 100% deterministic execution behavior while maximizing structural and algorithmic entropy.
- **Zero Runtime Dependencies:** Lean and production-ready for mission-critical deployments.

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
