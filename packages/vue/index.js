const rules = require('./rules')

module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended', '@cyw666/eslint-config-basic'],
  rules,
}
