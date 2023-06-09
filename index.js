/**
 * Module exports.
 */

module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      project: ['./tsconfig.json'],
      sourceType: 'module'
    },
    plugins: [
      '@typescript-eslint',
      'import'
    ],
    rules: {
      '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@typescript-eslint/comma-dangle': 'error',
      '@typescript-eslint/comma-spacing': ['error', { after: true, before: false }],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/keyword-spacing': ['error', { before: true }],
      '@typescript-eslint/naming-convention': ['error',
        {
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          selector: 'variableLike'
        }
      ],
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-extra-parens': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-restricted-imports': ['error', { patterns: ['../'] }],
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/quotes': ['error', 'single'],
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/semi': ['error', 'always'],
      '@typescript-eslint/space-before-blocks': ['error', 'always'],
      '@typescript-eslint/space-before-function-paren': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'eol-last': ['error', 'always'],
      'import/no-unresolved': 'error',
      'import/order': ['error', { alphabetize: { caseInsensitive: false, order: 'asc' } }],
      'indent': ['error', 2],
      'no-extra-parens': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
      'no-restricted-imports': 'off',
      'no-trailing-spaces': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': 'error',
      'sort-keys': ['error', 'asc', { natural: true }]
    },
    settings: {
      'import/ignore': [
        '.css$',
        'node_modules/*'
      ],
      'import/resolver': {
        node: true,
        typescript: {
          project: './tsconfig.json'
        }
      }
    }
};
  