export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
    // process `*.tsx` files with `ts-jest`
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/test/__ mocks __/styleMock.js",
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    'src/(.*)': '<rootDir>/src/$1'
  },
}
