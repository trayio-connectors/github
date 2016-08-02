/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'List repository contributors',

	description: 'List all of the contributors to a GitHub repository.',

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
		},

		show_anonymous_contributors: {
			type: 'boolean',
			description: 'Show anonymous contributors in results?',
			default: false
		},

		page: {
			type: 'integer',
			default: 1,
			required: true,
			description: 'The page number of items you\'d like to return.',
		},

		per_page: {
			type: 'integer',
			default: 100,
			required: true,
			description: 'How many items would you like to return per page? Max is 100.',
		}

	}

};
