define(["../has","require"],function(o,n){var a={};if(o("dojo-config-api")){var e,i=n.rawConfig;
for(e in i)a[e]=i[e]}else{var r=function(n,a,i){for(e in n)"has"!=e&&o.add(a+e,n[e],0,i);
},f=function(){return this}();a=o("dojo-loader")?n.rawConfig:f.dojoConfig||f.djConfig||{},
r(a,"config",1),r(a.has,"",1)}return!a.locale&&"undefined"!=typeof window&&window.SESSION_LOCALE&&(a.locale=window.SESSION_LOCALE.toLowerCase().replace("_","-")),
a.locale||"undefined"==typeof navigator||(a.locale=(navigator.language||navigator.userLanguage).toLowerCase()),
a});