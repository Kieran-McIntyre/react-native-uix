module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  modulePaths: [
    "<rootDir>"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/setup-test.js",
    "@testing-library/jest-native/extend-expect"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  modulePathIgnorePatterns: ["<rootDir>/example/", "<rootDir>/dist/"],
}
