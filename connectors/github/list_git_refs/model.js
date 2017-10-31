/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'get',

	url: function(params) {
	  return '/repos/' + params.username + '/' + params.repository + '/git/refs/' + params.type
	}

}
