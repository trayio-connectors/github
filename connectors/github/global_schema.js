/*
* Global connector schema config.
*
* Documentation: https://github.com/trayio/falafel#global-message-schemas
*/


module.exports = {

  username: {
    type: 'string',
    required: true,
    description: 'The GitHub username, e.g. "trayio"'
  },

  input: {
    access_token: {
      type: 'string',
      required: true,
      advanced: true,
      defaultJsonPath: '$.auth.access_token'
    }
  }

};
