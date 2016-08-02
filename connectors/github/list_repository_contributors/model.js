/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'get',

	url: '/repos/{{username}}/{{repository}}/contributors',

	query: {
		anon: function (input) {
			return input.show_anonymous_contributors ? 1 : 0;
		},
		page: '{{page}}',
		per_page: '{{per_page}}'
	},

	afterSuccess: function (output) {
		return {
			items: output // connectors can't respond with arrays
		}
	}

}
