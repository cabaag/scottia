module.exports = {
   env: {
      browser: true,
      es6: true,
   },
   extends: ['plugin:react/recommended', 'airbnb'],
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
   },
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint'],
   rules: {
      quotes: ['error', 'single'],
      indent: ['error', 3],
      'react/jsx-indent': [2, 3],
      'react/jsx-indent-props': [2, 3],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'import/extensions': [
         'error',
         'ignorePackages',
         {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
         },
      ],
   },
   settings: {
      'import/resolver': {
         node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
         },
      },
   },
};
