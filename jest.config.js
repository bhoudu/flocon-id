module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  testRegex: '(//.*|(\\.|/)(test|spec|steps))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>/lib'],
  collectCoverage: true,
  coverageDirectory: 'reports',
  coverageReporters: ['lcov'],
  reporters: [
    'default',
    './node_modules/jest-sonarcloud-reporter',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  ],
};
