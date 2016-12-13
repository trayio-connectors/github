/*
* Global connector model config.
*
* Documentation: https://github.com/trayio/falafel#global-models
*/
var getParam = require('mout/queryString/getParam');


module.exports = {

  baseUrl: 'https://api.github.com',

  options: {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token {{access_token}}'
    }
  },

  expects: [200],

  afterSuccess: function (body, input, response) {
    // For lists, automatically convert to objects (because tray doesn't like arrays
    // sent back from connectors) and also add pagination info.
    if (_.isArray(body)) {
    	return {
    		items: body, // connectors can't respond with arrays
        metadata: getMetaData(response.headers.link)
    	}
    }
  }

};



/*
* Given Github's slightly odd link parameter response for pagination,
* extract the data into a usable "metadata" format.
*/
function getMetaData(linkHeader) {

  if(!linkHeader) return null;

  var metadata = {
    first_page: 1,
    last_page: null,
    next_page: null,
    prev_page: null
  };

  var linkArr = linkHeader.split(',');

  _.each(linkArr, function (link) {
    var start_pos = link.indexOf('<') + 1;
    var end_pos = link.indexOf('>',start_pos);
    var url = link.substring(start_pos,end_pos)
    var page = Number(getParam(url, 'page'));

    if (link.indexOf('rel="last"') !== -1) {
      metadata.last_page = page;
    } else if (link.indexOf('rel="first"') !== -1) {
      metadata.first_page = page;
    } else if (link.indexOf('rel="next"') !== -1) {
      metadata.next_page = page;
    } else if (link.indexOf('rel="prev"') !== -1) {
      metadata.prev_page = page;
    }
  });

  return metadata;

}
