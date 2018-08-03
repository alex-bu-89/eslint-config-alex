module.exports = {
  parser: 'babel-eslint',
  plugins: ['mocha'],
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  rules: {
    // off
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    'class-methods-use-this': 'off',

    // errors
    'no-alert': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true, allowUnboundThis: false },
    ],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { object: false, array: false },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'func-style': ['error', 'expression'],
    curly: ['error', 'all'],
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/named': 'error',
    'mocha/no-exclusive-tests': 'error',
  },
};
