import type { Configuration as DevServerConfigureation } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(otpions: BuildOptions): DevServerConfigureation {
  return {
    port: otpions.port,
    open: true,
    historyApiFallback: true,
  };
}
