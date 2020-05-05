module.exports = {
  // https://github.com/eslint/eslint/blob/45aa6a3ba3486f1b116c5daab6432d144e5ea574/docs/user-guide/configuring.md#extending-configuration-files
  extends: [
    'airbnb',
    // https://github.com/typescript-eslint/typescript-eslint/tree/c5835f332c4c63af778b4064a6c524840deb690b/packages/eslint-plugin#usage
    // @typescript-eslint/eslint-plugin を有効にし、@typescript-eslint/parser も設定してくれる。
    'plugin:@typescript-eslint/recommended',
    // https://github.com/prettier/prettier/blob/1a419c0ddff61a70321c168f47e91ce0ca582340/docs/integrating-with-linters.md#recommended-configuration
    // eslint-plugin-prettier を有効にし、eslint-config-prettier を extends してくれる。
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  // https://github.com/eslint/eslint/blob/45aa6a3ba3486f1b116c5daab6432d144e5ea574/docs/user-guide/configuring.md#specifying-environments
  env: {
    browser: true,
    es6: true,
  },

  globals: {
    ENV_TYPE: 'readonly',
    ENV_VARIANT: 'readonly',
    test: 'readonly',
    fixture: 'readonly',
  },

  // https://github.com/eslint/eslint/blob/45aa6a3ba3486f1b116c5daab6432d144e5ea574/docs/user-guide/configuring.md#configuring-plugins
  plugins: ['sort-imports-es6-autofix'],

  rules: {
    // Enable
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    '@typescript-eslint/no-useless-constructor': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'func-names': ['error'],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-case-declarations': ['error'],
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      }
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['draft'],
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: 'Do not declare enums',
      },
    ],
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    // Disable
    '@typescript-eslint/camelcase': ['off'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    '@typescript-eslint/explicit-function-return-type': ['off'], // 関数の戻り値は明記すべき
    '@typescript-eslint/no-explicit-any': ['off'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-use-before-define': ['off'],
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-unresolved': ['off'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/order': ['off'],
    'import/prefer-default-export': ['off'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'default-case': ['off'], // https://eslint.org/docs/rules/default-case
    'max-classes-per-file': ['off'], // https://eslint.org/docs/rules/max-classes-per-file
    'no-bitwise': ['off'], // https://eslint.org/docs/rules/no-bitwise
    'no-undef': ['off'], // https://eslint.org/docs/rules/no-undef
    'no-useless-constructor': ['off'], // @typescript-eslint/no-useless-constructor で担保
    'no-nested-ternary': ['off'], // https://eslint.org/docs/rules/no-nested-ternary
    'no-plusplus': ['off'], // https://eslint.org/docs/rules/no-plusplus
    'no-return-assign': ['off'], // https://eslint.org/docs/rules/no-return-assign
    'no-shadow': ['off'], // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-throw-literal': ['off'], // https://eslint.org/docs/rules/no-throw-literal
    'no-unused-expressions': ['off'], // https://eslint.org/docs/rules/no-unused-expressions#top
    'sort-imports': ['off'],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
};
