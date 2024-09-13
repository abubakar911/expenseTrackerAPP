const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  // Ensure jest.setup.ts exists in the root directory
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  
  // Use the jsdom environment for testing React components
  testEnvironment: "jest-environment-jsdom",

  // Use ts-jest to handle TypeScript files in tests
  preset: "ts-jest",
};

// Export the Jest config, ensuring Next.js config is loaded
module.exports = createJestConfig(config);
