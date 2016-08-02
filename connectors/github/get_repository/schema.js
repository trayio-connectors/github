/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Get repository',

	description: 'Get details about a GitHub repository.',

	// Input schema config
	input: {

		username: {
			type: 'string',
			required: true,
			description: 'The GitHub username, e.g. "trayio"'
		},

		repository: {
			type: 'string',
			required: true,
			description: 'The GitHub repository, e.g. "falafel"'
		}

	}

};
