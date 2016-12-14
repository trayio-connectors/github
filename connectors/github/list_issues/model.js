/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'get',

	url: '/repos/{{username}}/{{repository}}/issues',

  query: {
    state: '{{state}}',
    milestone: '{{milestone}}',
    assignee: '{{assignee}}',
    creator: '{{creator}}',
    mentioned: '{{mentioned}}',
    labels: '{{labels}}',
    sort: '{{sort}}',
    direction: '{{direction}}',
    since: '{{since}}'
  }
}
