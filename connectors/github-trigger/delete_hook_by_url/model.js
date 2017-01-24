module.exports = function (params) {
  return when.promise(function (resolve, reject) {
    falafel.githubTrigger.listHooks(params)
      .then(function (data) {
        if(data.items && data.items.length) {
          var hook = _.find(data.items || [], function(item) {
            return item.config.url === params.config_url;
          });

          if (hook) {
            params.hook_id = hook.id;
            return falafel.githubTrigger.deleteHook(params);
          }
        }
      })
      .done(resolve, reject);
  });
};
