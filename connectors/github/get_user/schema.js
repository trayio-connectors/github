/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Get user',

	description: 'Get details about a GitHub user.',

	// Input schema config
	input: {

		username: {
			type: 'string',
			required: true,
			description: 'The GitHub username, e.g. "trayio"'
		}

	}

};
