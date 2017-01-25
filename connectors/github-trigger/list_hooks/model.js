
module.exports = {
  method: 'get',
  expects: [200],
  url: '/repos/{{username}}/{{repository}}/hooks',

  options: {
    json: true
  }
}
