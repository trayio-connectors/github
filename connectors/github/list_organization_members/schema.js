/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Get organization members',

	description: 'Lists members of a GitHub organization.',

	// Input schema config
	input: {

		organization: {
			type: 'string',
			required: true,
			description: 'The GitHub organization, e.g. "trayio"'
		}
	}
};
