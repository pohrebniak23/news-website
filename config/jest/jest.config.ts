import path from 'path';

export default {
  globals: {
    IS_DEV: true,
    PROJECT: 'jest',
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>src/'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^axios$': require.resolve('axios'),
  },
};
