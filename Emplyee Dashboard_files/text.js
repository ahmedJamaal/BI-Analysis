define(["./_base/kernel","require","./has","./has!host-browser?./request"],function(e,t,n,r){
var o;n("host-browser")?o=function(e,t,n){r(e,{sync:!!t}).then(n)}:t.getText?o=t.getText:console.error("dojo/text plugin failed to load because loader does not support getText");
var i={},s=function(e){if(e){e=e.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"");
var t=e.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);t&&(e=t[1])}else e="";return e;
},a={},l={};return e.cache=function(e,n,r){var a;"string"==typeof e?/\//.test(e)?(a=e,
r=n):a=t.toUrl(e.replace(/\./g,"/")+(n?"/"+n:"")):(a=e+"",r=n);var l=void 0!=r&&"string"!=typeof r?r.value:r,c=r&&r.sanitize;
return"string"==typeof l?(i[a]=l,c?s(l):l):null===l?(delete i[a],null):(a in i||o(a,!0,function(e){
i[a]=e}),c?s(i[a]):i[a])},{dynamic:!0,normalize:function(e,t){var n=e.split("!"),r=n[0];
return(/^\./.test(r)?t(r):r)+(n[1]?"!"+n[1]:"")},load:function(e,t,n){var r=e.split("!"),c=r.length>1,u=r[0],f=t.toUrl(r[0]),d="url:"+f,h=a,v=function(e){
n(c?s(e):e)};if(u in i?h=i[u]:t.cache&&d in t.cache?h=t.cache[d]:f in i&&(h=i[f]),
h===a)if(l[f])l[f].push(v);else{var p=l[f]=[v];o(f,!t.async,function(e){i[u]=i[f]=e;
for(var t=0;t<p.length;)p[t++](e);delete l[f]})}else v(h)}}});