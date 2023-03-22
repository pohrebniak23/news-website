const {
  default: TsconfigPathsPlugin,
} = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
};
