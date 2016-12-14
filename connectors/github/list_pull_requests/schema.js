/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'List pull requests',

	description: 'List pull requests from a GitHub repository.',

	// Input schema config
	input: {

    state: {
      description: 'Indicates the state of the issues to return',
      type: 'string',
      enum: ['', 'open', 'closed', 'all']
    },

    head: {
      description: 'Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format.',
      type: 'string'
    },

    base: {
      description: 'Filter pulls by base branch name. Example: gh-pages.',
      type: 'string'
    },

    sort: {
      description: 'What to sort results by',
      type: 'string',
      enum: ['', 'created', 'updated', 'popularity', 'long-running']
    },

    direction: {
      description: 'The direction of the sort',
      type: 'string',
      enum: ['', 'asc', 'desc']
    }

	}

};
