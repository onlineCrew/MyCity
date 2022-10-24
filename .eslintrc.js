module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'prettier'],
  rules: {
    'no-lone-blocks': 'warn',
    'consistent-return': 'warn',
    'no-unreachable': 'warn',
    'no-shadow': 'warn',
    'spaced-comment': 'warn',
    'import/newline-after-import': 'warn',
    'no-underscore-dangle': 'off',
    'react/self-closing-comp': 'warn',
    'dot-notation': 'warn',
    'react/prop-types': 'warn',
    'arrow-body-style': 'warn',
    'default-param-last': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-shorthand': 'off',
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, {extensions: ['.js']}],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
};
