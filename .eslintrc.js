module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    'arrow-parens': 'as-needed'
  },
  extends: [
    'eslint:recommended',
  ],
  env: {
    'browser': true
  },
  globals: {
    server: true,
    swal: true,
    zE: true,
    EmberENV: true,
    moment: true,
    autosize: true,
    introJs: true
  },

  overrides: [
    // node files
    {
      files: [
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
