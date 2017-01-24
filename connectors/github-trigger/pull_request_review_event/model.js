
module.exports = {
  method: 'post',
  expects: [201],

  url: '/repos/{{username}}/{{repository}}/hooks',

  data: {
    name: 'web',
    config: {
      url: '{{config_url}}',
      content_type: 'json'
    },
    events: ['pull_request_review'],
    active: true
  },

  options: {
    json: true
  }
}
