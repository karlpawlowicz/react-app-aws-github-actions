module.exports = {
  moduleNameMapper: {
    '\\.(aac|eot|gif|jpeg|jpg|m4a|mp3|mp4|oga|otf|png|svg|ttf|wav|webm|webp|woff|woff2)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
};
