export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$':
      '<rootDir>/src/utils/tests/__mocks__/fileMock.js',
  },
};
