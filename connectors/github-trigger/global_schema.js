
module.exports = _.merge({}, {

  input: {
    config_url: {
      type: 'string',
      required: true,
      advanced: true,
      defaultJsonPath: '$.env.public_url'
    }
  }

}, require('../github/global_schema'));
