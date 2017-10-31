/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'List Git refs',

	description: 'Get Git ref objects',

  input: {
		type: {
			type: 'string',
			required: false,
			description: 'Type of refs to get (e.g. tags, heads, heads/prefix). If empty, will return default list of refs',
		},
		prefix: {
      type: 'string',
      required: false,
      description: 'Prefix of the name of refs to get',
    }
	}
};
