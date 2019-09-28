
(function(w) {
  if (w.CONTEXT_PATH == null) {
    w.CONTEXT_PATH = "/pentaho/osgi/";
  }

  var legacyConfig = null;
  var legacyWaitSeconds = null;
  if (w.requireCfg != null) {
    if (w.requireCfg.waitSeconds != null) {
      legacyWaitSeconds = w.requireCfg.waitSeconds;
    }
    if (w.requireCfg.config != null) {
      legacyConfig = w.requireCfg.config;
    }
  }
  function getVersionedModuleId(moduleIdsMappings, moduleId) {
    if (moduleId.indexOf("!") != -1) {
      var parts = moduleId.split("!", 2).slice(0);
      return getVersionedModuleId(moduleIdsMappings, parts[0]) + "!" + getVersionedModuleId(moduleIdsMappings, parts[1]);
    }
    
    var baseModuleId = moduleId;

    if (!moduleIdsMappings.hasOwnProperty(moduleId)) {
      var longestBaseModuleId = "";
      for(var candidateBaseModuleId in moduleIdsMappings) {
        if(moduleId.indexOf(candidateBaseModuleId) === 0 && candidateBaseModuleId.length > longestBaseModuleId.length) {
          longestBaseModuleId = candidateBaseModuleId;
        }
      }

      if(longestBaseModuleId.length === 0) {
        return moduleId;
      }

      baseModuleId = longestBaseModuleId;
    }

    var versionedBaseModuleId = moduleIdsMappings[baseModuleId];
    var moduleIdLeaf = moduleId.substring(baseModuleId.length);
    if (moduleIdLeaf.length > 0 && moduleIdLeaf.indexOf("/") !== 0) {
      // false positive, we just caught a substring (probably some old mapping that included an hardcoded version)
      return moduleId;
    }

    return versionedBaseModuleId + moduleIdLeaf;
  }

  var requireCfg = {"paths":{"dojo_1.9.2":"\/pentaho\/osgi\/dojo\/1.9.2","get-fields-core_8.2.0.0-342":"\/pentaho\/osgi\/get-fields-core\/8.2.0.0-342","requirejs-text_2.0.10":"\/pentaho\/osgi\/requirejs-text\/2.0.10","angular-i18n_1.5.6":"\/pentaho\/osgi\/angular-i18n\/1.5.6","angular-ui-router_0.4.2":"\/pentaho\/osgi\/angular-ui-router\/0.4.2","pentaho\/i18n-osgi":"\/pentaho-i18n-webservice-bundle\/8.2.0.0-342\/js\/i18n","angular_1.5.8":"\/pentaho\/osgi\/angular\/1.5.8","require-css_0.1.8":"\/pentaho\/osgi\/require-css\/0.1.8"},"bundles":{},"packages":[{"name":"angular_1.5.8","main":"angular"},{"name":"angular-ui-router_0.4.2","main":"release\/angular-ui-router"},{"name":"require-css_0.1.8","main":"css"},{"name":"get-fields-core_8.2.0.0-342","main":"app.module"}],"shim":{"dojo_1.9.2":{"exports":"config"},"angular_1.5.8\/angular":{"exports":"angular","deps":["jquery"]},"angular-ui-router_0.4.2\/release\/angular-ui-router":{"exports":"angular","deps":["angular_1.5.8"]},"angular_1.5.8":{"exports":"angular","deps":["jquery"]}},"map":{"dojo_1.9.2":{"dojo":"dojo_1.9.2"},"get-fields-core_8.2.0.0-342":{"require-css":"require-css_0.1.8","angular":"angular_1.5.8","requirejs-text":"requirejs-text_2.0.10","angular-ui-router":"angular-ui-router_0.4.2","angular-i18n":"angular-i18n_1.5.6","dojo":"dojo_1.9.2","get-fields-core":"get-fields-core_8.2.0.0-342"},"requirejs-text_2.0.10":{"requirejs-text":"requirejs-text_2.0.10"},"angular-i18n_1.5.6":{"angular-i18n":"angular-i18n_1.5.6"},"angular-ui-router_0.4.2":{"angular":"angular_1.5.8","angular-ui-router":"angular-ui-router_0.4.2"},"*":{},"angular_1.5.8":{"angular":"angular_1.5.8"},"require-css_0.1.8":{"require-css":"require-css_0.1.8"}},"config":{}};


  requireCfg.skipDataMain = true;

  if (legacyWaitSeconds != null) {
    requireCfg.waitSeconds = legacyWaitSeconds;
  }

  if (legacyConfig != null) {
    for (var key in legacyConfig) {
      if (Object.prototype.hasOwnProperty.call(legacyConfig, key)) {
        if (!requireCfg.config[key]) {
          requireCfg.config[key] = {};
        }

        for (var moduleId in legacyConfig[key]) {
          if (Object.prototype.hasOwnProperty.call(legacyConfig[key], moduleId)) {
            requireCfg.config[key][moduleId] = legacyConfig[key][moduleId];
          }
        }
      }
    }
  }

  require.config(requireCfg);
}(window));
