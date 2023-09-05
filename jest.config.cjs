/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    '^.+\\.ts*?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ["<rootDir>/src/share/config/tests/setupTests.ts"],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  }
};
