// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin, type SyferitWebpackPluginOptions } from '@syferit/webpack-plugin';

export interface SyferitNextOptions extends SyferitWebpackPluginOptions {
  protectServer?: boolean;
}

const DEFAULT_NEXT_EXCLUDES: RegExp[] = [
  /framework[.-]/,
  /polyfills[.-]/,
  /webpack[.-]/,
  /main[.-]/,
  /main-app[.-]/,
  /_ssgManifest/,
  /_buildManifest/,
  /next[/\\]dist[/\\]client[/\\]/,
  /static[/\\]chunks[/\\][0-9a-f]{8}[.-]/,
  /static[/\\]chunks[/\\][0-9]+[.-][0-9a-f]+\.js$/
];

function mergeNextExcludes(userExclude?: SyferitWebpackPluginOptions['exclude']): SyferitWebpackPluginOptions['exclude'] {
  if (!userExclude) {
    return DEFAULT_NEXT_EXCLUDES;
  }
  if (typeof userExclude === 'function') {
    return (assetName: string) =>
      DEFAULT_NEXT_EXCLUDES.some((rx) => rx.test(assetName)) || userExclude(assetName);
  }
  const extra = Array.isArray(userExclude) ? userExclude : [userExclude];
  return [...DEFAULT_NEXT_EXCLUDES, ...extra];
}


export function withSyferit(
  nextConfig: any = {},
  syferitOptions: SyferitNextOptions = {}
): any {
  return {
    ...nextConfig,
    webpack(config: any, context: any) {
      const { isServer, dev } = context;

      const shouldRun =
        syferitOptions.mode === 'production' || (!dev && (syferitOptions.protectServer || !isServer));

      if (shouldRun) {
        const resolvedExclude = syferitOptions.test
          ? syferitOptions.exclude
          : mergeNextExcludes(syferitOptions.exclude);

        config.plugins = config.plugins || [];
        config.plugins.push(
          new SyferitWebpackPlugin({
            mode: 'production',
            preset: syferitOptions.preset ?? 'v2-quantum-rns',
            rnsArxEntanglement: syferitOptions.rnsArxEntanglement,
            domainProfile: syferitOptions.domainProfile ?? 'saas',
            seed: syferitOptions.seed ?? null,
            entanglementIntensity: syferitOptions.entanglementIntensity ?? 1.0,
            architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
            dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
            exclude: resolvedExclude,
            test: syferitOptions.test,
            quiet: syferitOptions.quiet
          })
        );
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, context);
      }

      return config;
    }
  };
}

export default withSyferit;
