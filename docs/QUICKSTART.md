# Quickstart Guide

Get up and running with Syferit in under 60 seconds.

---

## 1. Vite & Modern Frontends (React, Vue, Svelte, Astro)

### Step 1: Install Plugin

```bash
npm install -D @syferit/vite-plugin
# or
pnpm add -D @syferit/vite-plugin
```

### Step 2: Configure `vite.config.ts`

Add Syferit to your Vite configuration plugins array:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { syferit } from '@syferit/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    syferit({
      mode: 'production' // Automatically activates during production builds
    })
  ]
});
```

### Step 3: Build Your Project

```bash
npm run build
```

Your production bundles in `dist/` are automatically protected against automated reverse engineering and cloning tools.

---

## 2. Next.js (App Router & Pages Router)

### Step 1: Install Adapter
```bash
npm install -D @syferit/next @syferit/webpack-plugin
```

### Step 2: Wrap `next.config.mjs`
```js
import { withSyferit } from '@syferit/next';

export default withSyferit({
  reactStrictMode: true
});
```

---

## 3. Universal CLI & Standalone Native Binaries (Web, Mobile, C#, Native C/C++/Rust, Python & Wasm)

The standalone CLI allows you to protect any build directory or multi-language codebase with a single command. It automatically detects and hardens:
* **JavaScript & TypeScript** (`.js`, `.ts`, `.jsx`, `.tsx`, `.mjs`, `.cjs`)
* **WebAssembly Binaries** (`.wasm`)
* **Native C, C++, Rust, C# (.NET / Unity) & LLVM IR** (`.c`, `.cpp`, `.cc`, `.cxx`, `.rs`, `.cs`, `.ll`)
* **Mobile Applications (Android, iOS & Flutter)** (`.kt`, `.java`, `.swift`, `.m`, `.mm`, `.dart`)
* **Python 3 Source Modules** (`.py`)

### Binary Installation & Manual Download Workflows

Whether you prefer terminal automation, click-to-download executables, or portable air-gapped usage, Syferit supports all four workflows:

#### Option A: Automated 1-Line Terminal Installer (Recommended)
Downloads the latest binary from GitHub Releases into `~/.syferit/bin` and registers `syferit` in your system `PATH` automatically:
```bash
# Windows (PowerShell)
irm https://syferit.soltrixstudios.com/install.ps1 | iex

# macOS & Linux
curl -fsSL https://syferit.soltrixstudios.com/install.sh | sh

# Or install globally via npm
npm install -g @syferit/cli
```

#### Option B: Manual Binary Download + Guided Auto-PATH Setup
Download `syferit.exe` (Windows) or `syferit` (macOS / Linux) directly from [GitHub Releases](https://github.com/soltrix-studios/syferit/releases/latest):
* **Windows:** Double-click `syferit.exe` (or run `.\syferit.exe setup` in PowerShell / CMD). It displays the Syferit banner and asks if you want to install to `%USERPROFILE%\.syferit\bin` and register your User `PATH` automatically. Press `Y` and open a new terminal. *(Pass `.\syferit.exe setup --yes` for unattended scripts.)*
* **macOS & Linux:**
  ```bash
  chmod +x ./syferit
  ./syferit setup        # Interactive prompt (or pass --yes to auto-configure ~/.zshrc / ~/.bashrc)
  ```

#### Option C: Portable / Zero-PATH Execution (Run As-Is)
Prefer not to touch your system `PATH` (e.g., portable USB drive or restricted CI runner)? Run the downloaded binary directly from its folder:
```bash
# Windows (from your Downloads or tools folder)
.\syferit.exe protect ./dist --out ./dist-protected --preset v2-quantum-rns

# macOS & Linux
chmod +x ./syferit && ./syferit protect ./dist --out ./dist-protected --preset v2-quantum-rns
```

#### Option D: Manual System `PATH` Registration
If you want to place `syferit.exe` or `syferit` in your own custom directory (e.g., `C:\Tools\syferit` or `/usr/local/bin`):
* **Windows (GUI):** Open *Start → Edit environment variables for your account → User variables → Path → Edit → New* and add the folder containing `syferit.exe`.
* **Windows (PowerShell):**
  ```powershell
  $dir = "C:\Path\To\Syferit"
  [Environment]::SetEnvironmentVariable("Path", "$([Environment]::GetEnvironmentVariable('Path', 'User'));$dir", "User")
  ```
* **macOS / Linux:**
  ```bash
  mkdir -p ~/.syferit/bin && mv ./syferit ~/.syferit/bin/syferit && chmod +x ~/.syferit/bin/syferit
  echo 'export PATH="$HOME/.syferit/bin:$PATH"' >> ~/.zshrc   # or ~/.bashrc
  ```

### Seamless Self-Update (`syferit upgrade`)

Syferit checks for updates silently in the background at most once every 24 hours (cached locally, non-blocking, and automatically disabled in CI environments). When a newer release is available, upgrade in-place with one command:

```bash
# Automatically downloads and swaps the latest binary or updates via npm
syferit upgrade

# Check for updates without installing
syferit upgrade --check
```

### Safe Preview (`--dry-run`), Config File (`syferit init`) & Exclusions (`--exclude`)

Syferit automatically skips noisy build/cache directories (`node_modules`, `.git`, `.next`, `bin`, `obj`, `target`, `.gradle`, `.dart_tool`, `__pycache__`, `.venv`) as well as your `--out` directory. For even safer rollouts:

```bash
# 1. Create a starter syferit.config.json in your project root
syferit init

# 2. Preview every matched file without touching disk (--dry-run)
syferit protect ./src --dry-run

# 3. Exclude vendor scripts or minified third-party libraries explicitly
syferit protect ./src --out ./dist-protected -e vendor "*.min.js" --preset v2-quantum-rns
```

### Cryptographic Binary Verification (`SHA256SUMS.txt`) & Offline Privacy

* **100% Local Offline Execution & Zero Telemetry:** Your proprietary source code never leaves your machine or CI runner. Syferit makes zero telemetry calls; the only optional network check is the 24h update check, which can be disabled with `SYFERIT_NO_UPDATE_CHECK=1` (automatically disabled in `CI=true`).
* **Verify Downloaded Binaries:** Check any manually downloaded `syferit.exe`, `syferit-linux-x64`, or `syferit-macos-arm64` against the release `SHA256SUMS.txt`:
  ```powershell
  # Windows (PowerShell)
  Get-FileHash .\syferit.exe -Algorithm SHA256
  ```
  ```bash
  # macOS & Linux
  sha256sum -c SHA256SUMS.txt --ignore-missing   # or: shasum -a 256 syferit
  ```

### Output to a New Directory (Recommended)

```bash
# Run via standalone native binary (Windows syferit.exe / Linux & macOS syferit)
syferit protect ./dist --out ./dist-protected --preset v2-quantum-rns

# Or run via npx
npx @syferit/cli protect ./dist --out ./dist-protected --preset v2-quantum-rns

# Target flag syntax
npx @syferit/cli protect -t ./dist -o ./dist-protected --preset maximum
```

### In-Place Protection

```bash
# Overwrite in-place with maximum defense preset
npx @syferit/cli protect ./dist --preset maximum
```

### Using with Specific Domain Profiles

Tailor the protection vocabulary to match your industry vertical:

```bash
# Available profiles: saas, fintech, security, gaming (-d or --domain / -p or --profile)
npx @syferit/cli protect ./dist -d fintech --preset hardened
```

---

## 4. Electron Desktop Applications

To protect Electron desktop applications before packaging:

```bash
npm install -D @syferit/electron
```

In your build script:

```ts
import { protectElectronApp } from '@syferit/electron';

protectElectronApp({
  appDir: './build/unpacked-app',
  hardenIpc: true
});
```

---

## 5. Python 3 & Native C/C++/Rust Applications

Protect Python backend/AI services or native C++/Rust modules directly from the CLI or programmatically:

```bash
# Protect a Python 3 project before packaging or containerization
npx @syferit/cli protect ./app --out ./dist-app --profile saas

# Protect native C/C++ or Rust source files prior to compilation
npx @syferit/cli protect ./src-native --out ./build/src-protected --profile security
```

For full details, see the [Python 3 Protection Guide](./PYTHON.md) and [Native C, C++, Rust & LLVM Guide](./NATIVE_AND_LLVM.md).
