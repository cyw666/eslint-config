module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'warn',
        'no-undef': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ],
  extends: ['plugin:vue/vue3-recommended', '@cyw666/eslint-config-typescript'],
  rules: './rules',
}
