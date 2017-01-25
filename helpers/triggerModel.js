module.exports = function(events) {
  return {
    method: 'post',
    expects: [201],

    url: '/repos/{{username}}/{{repository}}/hooks',

    data: {
      name: 'web',
      config: {
        url: '{{config_url}}',
        content_type: 'json'
      },
      events: events,
      active: true
    },

    options: {
      json: true
    }
  };
}
