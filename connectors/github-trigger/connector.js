/*
* High level basic configuration for the connector.
*
* Documentation: https://github.com/trayio/falafel#connector-file
*/

module.exports = {

	// The name of the connector is the folder name

	// The title
  title: 'GitHub',

 	// The connector description
  description: 'Receive events from a GitHub repository.',

  // Version of the connector. Updating this will allow users to choose
  // which connector version they use in advanced settings of the tray UI.
  version: '1.0',

  // Tags attached to the connector
  tags: ['trigger'],

  // Icon of the connector.
  icon: {
  	type: 'url',
  	value: '//s3.amazonaws.com/images.tray.io/static/icons/github.png'
  }

};
