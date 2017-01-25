module.exports = function (params, http) {
  if(params.action && _.isArray(params.action) && params.action.length > 0) {
    return params.action.indexOf(http.body.action) !== -1;
  }

  return true;
}
