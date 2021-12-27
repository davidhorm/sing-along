module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    /**
     * Ignore some unused `import` eslint rules:
     * - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
     * - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
     *   - prob should look at https://github.com/import-js/eslint-plugin-import/blob/main/README.md#resolvers
     * - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
     */
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
  },
};
