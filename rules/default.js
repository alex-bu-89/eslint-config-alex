module.exports = {
  parser: 'babel-eslint',
  plugins: ['mocha'],
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  rules: {
    // --------------------
    // overwrite rules here
    // --------------------

    // turned off rules
    'class-methods-use-this': 'off',

    // warnings
    // ...

    // error
    // ..
  },
};
