module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: [
    '**/tests/**/*.test.js',
    '**/__tests__/**/*.test.js'
  ],
  collectCoverageFrom: [
    'controllers/**/*.js',
    'models/**/*.js',
    'services/**/*.js',
    'utils/**/*.js',
    'middleware/**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  verbose: true,
  testTimeout: 10000,
  clearMocks: true,
  restoreMocks: true
};
