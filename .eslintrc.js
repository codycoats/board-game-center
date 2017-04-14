module.exports = {
  'extends': 'airbnb-base',

  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },

  'rules': {
    'indent': [2],
    'import/no-extraneous-dependencies': 0, // @mikey ? 
    'import/extensions': 0, // @mikey ? 
    'func-names': 0,
    'no-use-before-define': [2, 'nofunc'],
    'prefer-arrow-callback': 0,
    'prefer-rest-params': 0,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'comma-dangle': ['error', 'never']
  }
}