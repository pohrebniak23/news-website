import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const tsBabelLoader = buildBabelLoader({ ...options, isTSX: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTSX: true });

  const cssLoader = buildCssLoader(isDev);

  return [svgLoader, fileLoader, tsBabelLoader, tsxBabelLoader, cssLoader];
}
