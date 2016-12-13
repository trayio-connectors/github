/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Get the latest release',

	description: 'Get the latest release of a GitHub repository.',

	// Input schema config
	input: {

		repository: {
			type: 'string',
			required: true,
			description: 'The GitHub repository, e.g. "falafel"'
		}

	}

};
