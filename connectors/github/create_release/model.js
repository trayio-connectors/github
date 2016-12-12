/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'post',

	url: '/repos/{{username}}/{{repository}}/releases',

  data: {
    tag_name: '{{tag_name}}',
    target_commitish: '{{target_commitish}}',
    name: '{{name}}',
    body: '{{body}}',
    draft: '{{draft}}',
    prerelease: '{{prerelease}}'
  },

  options: {
    json: true
  }

}
