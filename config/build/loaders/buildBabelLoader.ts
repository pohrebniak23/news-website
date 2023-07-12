import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTSX: boolean;
}

export const buildBabelLoader = ({ isDev, isTSX }: BuildBabelLoaderProps) => {
  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(ts|js)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTSX,
            },
          ],
          '@babel/plugin-transform-runtime',
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
};
