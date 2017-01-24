
module.exports = {
  method: 'delete',
  expects: [204],
  url: '/repos/{{username}}/{{repository}}/hooks/{{hook_id}}',

  options: {
    json: true
  }
}
