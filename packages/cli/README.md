<p align="center">
  <a href="https://syferit.soltrixstudios.com">
    <img src="https://syferit.soltrixstudios.com/icon.png" alt="Syferit Logo" width="80" height="80" />
  </a>
</p>

<h1 align="center">@syferit/cli</h1>

<p align="center">
  <strong>Universal Binary &amp; 15+ Language Code Defense Hardener (v2.0.0)</strong><br>
  <em>&ldquo;Don&apos;t Just Ship it. Syferit.&rdquo;</em>
</p>

> Command-line tool for protecting Web (JS/TS), Mobile (Kotlin, Java, Swift, Dart), C# (.NET/Unity), WebAssembly, Python 3, C/C++, Rust, and LLVM IR. Part of the **[Syferit](https://syferit.soltrixstudios.com)** framework by **[Soltrix Studios](https://soltrixstudios.com)**.

---

## Installation

### Option 1: Standalone Zero-Node Native Binaries (No Node.js Required)
```powershell
# Windows (PowerShell — downloads syferit.exe & registers PATH automatically)
irm https://syferit.soltrixstudios.com/install.ps1 | iex
```
```bash
# macOS & Linux (downloads syferit binary & registers PATH automatically)
curl -fsSL https://syferit.soltrixstudios.com/install.sh | sh
```
Or download `syferit.exe`, `syferit-linux-x64`, or `syferit-macos-arm64` directly from [GitHub Releases](https://github.com/soltrix-studios/syferit/releases/latest) (verified via `SHA256SUMS.txt`).

### Option 2: npm / npx
```bash
npm i -g @syferit/cli
```

## Quickstart

```bash
# Create starter syferit.config.json
syferit init

# Preview matched files safely without writing changes
syferit protect ./dist --dry-run

# Protect a directory with v2.0 Quantum RNS-ARX preset
syferit protect ./dist --out ./dist-protected --preset v2-quantum-rns

# Protect C# (.NET/Unity), Android (Kotlin/Java), iOS (Swift), or Flutter (Dart)
syferit protect ./Assets/Scripts -o ./Assets/Scripts-Protected --preset v2-quantum-rns

# Exclude third-party vendor libraries or minified bundles
syferit protect ./src -o ./build -e vendor "*.min.js" --preset v2-quantum-rns

# Guided PATH registration (for manually downloaded binaries) & seamless upgrade
syferit setup
syferit upgrade
```

## CLI Reference

| Command / Flag | Description | Default |
| :--- | :--- | :--- |
| `protect [target]`, `-t, --target <path>` | File or directory to protect (defaults to `syferit.config.json` target) | *(Required)* |
| `-o, --out, --output <path>` | Destination output path (in-place overwrite if omitted) | *(In-place)* |
| `--preset <preset>` | Defense preset: `standard`, `hardened`, `maximum`, or `v2-quantum-rns` | `'hardened'` |
| `-d, --domain, -p, --profile <profile>` | Domain profile: `saas`, `fintech`, `security`, `gaming` | `'saas'` |
| `-s, --seed <seed>` | Deterministic seed for reproducible builds | *(CSPRNG UUIDv4)* |
| `-e, --exclude <patterns...>` | Exclude folder/glob patterns (skips `node_modules`, `obj`, `target`, `.venv` automatically) | `[]` |
| `--dry-run` | Preview matched files without modifying any files | `false` |
| `-q, --quiet` | Suppress terminal banner and progress stream | `false` |
| `init [-f, --force]` | Generate a starter `syferit.config.json` configuration file | `false` |
| `setup [-y, --yes]` | Install standalone binary to `~/.syferit/bin` and register system `PATH` | Interactive |
| `upgrade [--check]` | Seamlessly self-update to the latest release | In-place |

## Documentation & Support

- **Official Website:** [https://syferit.soltrixstudios.com](https://syferit.soltrixstudios.com)
- **Source Repository:** [https://github.com/soltrix-studios/syferit](https://github.com/soltrix-studios/syferit)
- **Issues & Discussions:** [https://github.com/soltrix-studios/syferit/issues](https://github.com/soltrix-studios/syferit/issues)

## License

[Apache-2.0](https://github.com/soltrix-studios/syferit/blob/main/LICENSE) © 2026 Soltrix Studios
