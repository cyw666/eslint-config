module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@babel/eslint-parser',
      },
      rules: {
        'no-unused-vars': 'warn',
        'no-undef': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: ['plugin:vue/vue3-recommended', '@cyw666/eslint-config-basic'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
  },
}
