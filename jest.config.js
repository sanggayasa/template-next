const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',  
})

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv:['<rootDir>/jest.setup.js'],
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  preset: 'ts-jest',
};

module.exports = createJestConfig(config);
