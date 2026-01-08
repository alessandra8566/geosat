import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier'

const eslintConfig = defineConfig([
    globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '**/public/**',
    '**/static/**',
    '**/coverage/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/__mocks__/**',
  ]),
  ...nextVitals,
  ...nextTs,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
  prettierConfig,
])

export default eslintConfig
