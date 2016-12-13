/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Get a single pull request',

	description: 'Get a pull request from a GitHub repository.',

	// Input schema config
	input: {

    repository: {
      type: 'string',
      required: true,
      description: 'The GitHub repository, e.g. "falafel"'
    },

		number: {
			type: ['string', 'number'],
			required: true,
			description: 'The pull request number'
		}
	}

};
