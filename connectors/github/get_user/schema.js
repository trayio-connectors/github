/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

  title: 'Get user',

  description: 'Get details about a GitHub user.'

  globals: false,

  // Input schema config
  input: {

    access_token: {
      type: 'string',
      required: true,
      advanced: true,
      defaultJsonPath: '$.auth.access_token'
    },

    username: {
      type: 'string',
      required: true,
      description: 'The GitHub username, e.g. "trayio"'
    }

  }

};
