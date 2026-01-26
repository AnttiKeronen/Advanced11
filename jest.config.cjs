module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/__test__/**/*.test.tsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
  "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }]
}

};
