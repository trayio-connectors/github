module.exports = {
  filter: function (params, http) {
    if(params.action && _.isArray(params.action)) {
      return params.action.indexOf(http.body.action) !== -1;
    }

    return true;
  }
};
