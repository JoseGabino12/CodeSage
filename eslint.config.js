import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginTypeScript from '@typescript-eslint/parser'

export default [
  ...eslintPluginAstro.configs.recommended,
  eslintPluginTypeScript.configs,
  {
    plugin: ['tailwindcss'],
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.astro'],
    rules: {
      'indent': ['error', 2],
      'no-tabs': ['error', { allowIndentationTabs: true }],
      semi: ['error', 'never'],
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'space-before-function-paren': ['error', 'always'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always'],
      'no-unused-vars': ['error', { 'args': 'none' }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
    },
  },
]
