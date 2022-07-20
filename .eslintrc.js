module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "indent": [2, "tab"],
    "no-tabs": 0,
    "eol-last": ["error", "never"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  }
}
