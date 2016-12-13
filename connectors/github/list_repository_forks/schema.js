/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'List repository forks',

	description: 'List all of the forks of a GitHub repository.',

	// Input schema config
	input: {

		sort: {
			type: 'string',
			title: 'Sort order',
			description: 'The sort order of forks.',
			enum: ['newest', 'oldest', 'stargazers'],
			default: 'newest'
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
