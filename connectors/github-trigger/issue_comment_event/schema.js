
module.exports = {

  title: 'Issue Comment',

  description: 'Subscribes to GitHub issue_comment event.',

  input: {
    action: {
      type: 'array',
      title: 'Actions to filter',
      description: 'Pull request actions you want to filter (leave empty to get all actions)',
      items: {
        type: 'string',
        title: 'Action',
        enum: [
          'created',
          'edited',
          'deleted'
        ]
      }
    }
  }

}
