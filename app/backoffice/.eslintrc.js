module.exports = {
  plugins: ['react', 'import', 'prettier', 'boundaries'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:boundaries/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': ['error'],
    'boundaries/element-types': [
      2,
      {
        default: 'disallow',
        rules: [
          {
            from: 'shared',
            allow: ['shared'],
          },
          {
            from: 'entities',
            allow: ['shared'],
          },
          {
            from: 'features',
            allow: ['shared', 'entities'],
          },
          {
            from: 'widgets',
            allow: ['shared', 'entities', 'features'],
          },
          {
            from: 'pages',
            allow: ['shared', 'entities', 'features', 'widgets'],
          },
          {
            from: 'app',
            allow: ['shared', 'entities', 'features', 'widgets', 'pages'],
          },
        ],
      },
    ],
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/core-modules': ['react'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
    'boundaries/elements': [
      {
        type: 'shared',
        pattern: 'shared/*',
      },
      {
        type: 'entities',
        pattern: 'entities/*',
      },
      {
        type: 'features',
        pattern: 'features/*',
      },
      {
        type: 'widgets',
        pattern: 'widgets/*',
      },
      {
        type: 'pages',
        pattern: 'pages/*',
      },
      {
        type: 'app',
        pattern: 'app/*',
      },
    ],
  },
  env: {
    node: true,
    browser: true,
  },
};
