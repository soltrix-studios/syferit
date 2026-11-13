// [Protected by Soltrix Studios | Syferit Code Defense Engine | https://syferit.soltrixstudios.com]
import { SyferitWebpackPlugin, type SyferitWebpackPluginOptions } from '@syferit/webpack-plugin';

export interface SyferitNextOptions extends SyferitWebpackPluginOptions {
  protectServer?: boolean;
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
        config.plugins = config.plugins || [];
        config.plugins.push(
          new SyferitWebpackPlugin({
            mode: 'production',
            domainProfile: syferitOptions.domainProfile ?? 'saas',
            seed: syferitOptions.seed ?? null,
            entanglementIntensity: syferitOptions.entanglementIntensity ?? 1.0,
            architecturalGaslighting: syferitOptions.architecturalGaslighting ?? true,
            dynamicDispatch: syferitOptions.dynamicDispatch ?? true,
            exclude: syferitOptions.exclude,
            test: syferitOptions.test
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
