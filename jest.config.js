export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$':
      '<rootDir>/src/utils/tests/__mocks__/fileMock.js',
    '\\.(css|sass|less|scss)$':
      '<rootDir>/src/utils/tests/__mocks__/fileMock.js',
  },
};
