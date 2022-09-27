module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['html'],
  rules: {
    'no-unused-vars': 'warn',
    semi: ['error', 'never'],
  },
}
