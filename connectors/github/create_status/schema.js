/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Create a status',

	description: 'Create a status on a GitHub ref.',

	// Input schema config
	input: {

    sha: {
      type: 'string',
      required: true,
      description: 'The ref SHA code on which you want to set the status. It\'s usually a commit id.'
    },

    state: {
      type: 'string',
      required: true,
      enum: [
        'pending',
        'success',
        'error',
        'failure'
      ],
      description: "The state of the status",
      title: 'State'
    },
    target_url: {
      type: 'string',
      description: 'The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the \'source\' of the Status.'
    },

    description: {
      type: 'string',
      description: 'A short description of the status'
    },

    context: {
      type: 'string',
      description: 'A string label to differentiate this status from the status of other systems.'
    }

	}

};
