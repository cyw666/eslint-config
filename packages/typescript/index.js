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
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [1, { ignoreRestSiblings: true }],
    'no-redeclare': 'off',
  },
}
