# @syferit/cli

> Command-line tool for protecting JavaScript, TypeScript, WebAssembly, and native binaries with Syferit.

Part of the **[Syferit](https://syferit.soltrixstudios.com)** universal adversarial code defense framework by **[Soltrix Studios](https://soltrixstudios.com)**.

*"Don't just ship it. Syferit."*

---

## Installation

```bash
npm i -g @syferit/cli
```

## Quickstart

```bash
# Protect a directory with hardened defense (default preset)
syferit protect ./dist --out ./dist-protected

# Target flag syntax with maximum defense preset
syferit protect -t ./dist -o ./dist-protected --preset maximum

# Protect with specific domain profile (saas, fintech, security, gaming)
syferit protect ./dist -d fintech --preset hardened

# Protect a single file in-place
syferit protect ./dist/app.js --preset maximum
```

## CLI Reference

### Options & Flags

| Flag | Description | Default |
| :--- | :--- | :--- |
| `[target]` | Positional target path to file or directory to protect | *(Optional if `-t` used)* |
| `-t, --target <path>` | Explicit path to target file or directory | *(Optional if positional used)* |
| `-o, --out <path>` | Destination output path (in-place overwrite if omitted) | *(In-place)* |
| `--output <path>` | Long alias for `-o, --out` | *(In-place)* |
| `--preset <preset>` | Protection level: `standard`, `hardened`, or `maximum` | `'hardened'` |
| `-d, --domain <domain>` | Domain dictionary profile: `saas`, `fintech`, `security`, `gaming` | `'saas'` |
| `-p, --profile <profile>` | Alias for `-d, --domain` (smart auto-routes if preset name given) | `'saas'` |
| `-s, --seed <seed>` | Deterministic seed for reproducible polymorphism | *(Auto-generated UUIDv4)* |
| `-v, --version` | Output the current Syferit version | — |
| `-h, --help` | Display CLI help and flag usage | — |

> [!TIP]
> **Smart Collision Avoidance:** If you pass `-p standard` or `-p maximum` (thinking `-p` was preset), Syferit automatically detects the preset value and routes it to `--preset` without error.

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
