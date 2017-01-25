/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'post',
  expects: [201],

	url: '/repos/{{username}}/{{repository}}/statuses/{{sha}}',

  data: {
    state: '{{state}}',
    target_url: '{{target_url}}',
    description: '{{description}}',
    context: '{{context}}'
  },

  options: {
    json: true
  }

}
