/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Create a release',

	description: 'Create a release on a GitHub repository.',

	// Input schema config
	input: {

    repository: {
      type: 'string',
      required: true,
      description: 'The GitHub repository, e.g. "falafel"'
    },

    tag_name: {
      type: 'string',
      required: true,
      description: 'The name of the tag'
    },

    target_commitish: {
      type: 'string',
      description: 'Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository\'s default branch (usually master).'
    },

    name: {
      type: 'string',
      description: 'The name of the release'
    },

    body: {
      type: 'string',
      description: 'Text describing the contents of the tag'
    },

    draft: {
      type: 'boolean',
      description: 'true to create a draft (unpublished) release, false to create a published one. Default: false'
    },

		prerelease: {
			type: 'boolean',
			description: 'true to identify the release as a prerelease. false to identify the release as a full release. Default: false'
		}
	}

};
