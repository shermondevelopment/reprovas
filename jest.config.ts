export default {
  clearMocks: true,
  collectCoverage: false,
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>./tests/**/*.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageDirectory: 'coverage',
  testMatch: ['**/*.spec.ts'],
  coverageProvider: 'v8'
}
