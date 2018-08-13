module.exports = {
  rootDir: '..',
  transform: {
    '\\.ts$': '<rootDir>/dist/index.js',
  },
  testMatch: ['<rootDir>/e2e/__tests__/**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testEnvironment: 'node',
  snapshotSerializers: ['<rootDir>/e2e/__serializers__/test-run-result.ts'],
};
