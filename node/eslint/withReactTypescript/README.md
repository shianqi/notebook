## npm:

```bash
npm install --save-dev \
    eslint \
    eslint-config-prettier \
    eslint-config-standard \
    eslint-plugin-import \
    eslint-plugin-node \
    eslint-plugin-prettier \
    eslint-plugin-promise \
    eslint-plugin-react \
    eslint-plugin-standard \
    prettier \
    prettier-eslint \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser
```

## .eslintrc.js

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['standard', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': 2,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
```
