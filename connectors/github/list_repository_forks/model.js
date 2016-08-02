/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'get',

	url: '/repos/{{username}}/{{repository}}/forks',

	query: {
		sort: '{{sort}}',
		page: '{{page}}',
		per_page: '{{per_page}}'
	}

}
