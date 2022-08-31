export default {
  moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
      babelConfig: true,
    },
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '\\.(gif|ttf|eot|svg|png)$':
      '<rootDir>/src/utils/tests/__mocks__/fileMock.js',
    '\\.(css|sass|less|scss)$':
      '<rootDir>/src/utils/tests/__mocks__/fileMock.js',
    '@components(.*)': ['<rootDir>/src/components/$1'],
    '@components': ['<rootDir>/src/components'],
    '@hooks(.*)': ['<rootDir>/src/hooks/$1'],
    '@hooks': ['<rootDir>/src/hooks'],
    '@API(.*)': ['<rootDir>/src/API/$1'],
    '@API': ['<rootDir>/src/API'],
    '@assets(.*)': ['<rootDir>/src/assets/$1'],
    '@assets': ['<rootDir>/src/assets'],
    '@utils(.*)': ['<rootDir>/src/utils/$1'],
    '@utils': ['<rootDir>/src/utils'],
  },
};
