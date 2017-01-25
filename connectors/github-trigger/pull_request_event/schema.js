
module.exports = {

  title: 'Pull Request',

  description: 'Subscribes to GitHub pull_request event.',

  input: {
    action: {
      type: 'array',
      title: 'Actions to filter',
      description: 'Pull request actions you want to filter (leave empty to get all actions)',
      items: {
        type: 'string',
        title: 'Action',
        enum: [
          'assigned',
          'unassigned',
          'labeled',
          'unlabeled',
          'opened',
          'edited',
          'closed',
          'reopened',
          'synchronize'
        ]
      }
    }
  }

}
