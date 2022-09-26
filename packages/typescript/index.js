module.exports = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    '@cyw666/eslint-config-basic',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // This allows us to use async function on addEventListener(). Discussion: https://twitter.com/wesbos/status/1337074242161172486
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, { ignoreRestSiblings: true }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
  },
}
