/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'List issues',

	description: 'List issues from a GitHub repository.',

	// Input schema config
	input: {

		repository: {
			type: 'string',
			required: true,
			description: 'The GitHub repository, e.g. "falafel"'
		},

    state: {
      description: 'Indicates the state of the issues to return',
      type: 'string',
      enum: ['', 'open', 'closed', 'all']
    },

    milestone: {
      description: 'The milestone set to the issue to return',
      type: ['', 'integer', 'string']
    },

    assignee: {
      description: 'The user having the issue assigned to',
      type: 'string'
    },

    creator: {
      description: 'The user that created the issue',
      type: 'string'
    },

    mentioned: {
      description: 'A user that\'s mentioned in the issue',
      type: 'string'
    },

    labels: {
      description: 'A list of comma separated label names. Example: bug,ui,@high',
      type: 'string'
    },

    sort: {
      description: 'What to sort results by',
      type: 'string',
      enum: ['', 'created', 'updated', 'comments']
    },

    direction: {
      description: 'The direction of the sort',
      type: 'string',
      enum: ['', 'asc', 'desc']
    },

    since: {
      description: 'Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.',
      type: 'string'
    }

	}

};
