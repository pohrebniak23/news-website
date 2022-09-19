import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfigureation } from "webpack-dev-server";

export function buildDevServer(otpions: BuildOptions): DevServerConfigureation {
  return {
    port: otpions.port,
    open: true,
    historyApiFallback: true,
  };
}
