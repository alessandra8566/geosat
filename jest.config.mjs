import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/public/'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/*.test.{js,jsx,ts,tsx}',
    '!**/*.spec.{js,jsx,ts,tsx}',
    '!**/coverage/**',
    '!**/.next/**',
    '!**/components/__mocks__/**',
    '!**/components/ui/**',
    '!**/middleware.ts',
    '!**/next.config.ts',
    '!**/next-env.d.ts',
    '!**/utils/type.ts',
    '!**/utils/shadcn.ts',
  ],
}

export default createJestConfig(customJestConfig)
