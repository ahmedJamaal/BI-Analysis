define(["../has","./config","require","module"],function(o,e,n,a){var r,d,i,t=function(){
return this}(),l={},s={},u={config:e,global:t,dijit:l,dojox:s},c={dojo:["dojo",u],
dijit:["dijit",l],dojox:["dojox",s]},f=n.map&&n.map[a.id.match(/[^\/]+/)[0]];for(d in f)c[d]?c[d][0]=f[d]:c[d]=[f[d],{}];
for(d in c)i=c[d],i[1]._scopeName=i[0],e.noGlobals||(t[i[0]]=i[1]);u.scopeMap=c,u.baseUrl=u.config.baseUrl=n.baseUrl,
u.isAsync=!o("dojo-loader")||n.async,u.locale=e.locale;var m="$Rev: f774568 $".match(/[0-9a-f]{7,}/);
if(u.version={major:1,minor:9,patch:2,flag:"",revision:m?m[0]:NaN,toString:function(){
var o=u.version;return o.major+"."+o.minor+"."+o.patch+o.flag+" ("+o.revision+")";
}},o.add("extend-dojo",1),Function("d","d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(u),
o("host-rhino")?u.exit=function(o){quit(o)}:u.exit=function(){},o.add("dojo-guarantee-console",1),
o("dojo-guarantee-console")){"undefined"!=typeof console||(console={});var g,p=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];
for(r=0;g=p[r++];)console[g]||!function(){var o=g+"";console[o]="log"in console?function(){
var e=Array.apply({},arguments);e.unshift(o+":"),console.log(e.join(" "))}:function(){},
console[o]._fake=!0}()}if(o.add("dojo-debug-messages",!!e.isDebug),u.deprecated=u.experimental=function(){},
o("dojo-debug-messages")&&(u.deprecated=function(o,e,n){var a="DEPRECATED: "+o;e&&(a+=" "+e),
n&&(a+=" -- will be removed in version: "+n),console.warn(a)},u.experimental=function(o,e){
var n="EXPERIMENTAL: "+o+" -- APIs subject to change without notice.";e&&(n+=" "+e),
console.warn(n)}),o.add("dojo-modulePaths",1),o("dojo-modulePaths")&&e.modulePaths){
u.deprecated("dojo.modulePaths","use paths configuration");var j={};for(d in e.modulePaths)j[d.replace(/\./g,"/")]=e.modulePaths[d];
n({paths:j})}return o.add("dojo-moduleUrl",1),o("dojo-moduleUrl")&&(u.moduleUrl=function(o,e){
u.deprecated("dojo.moduleUrl()","use require.toUrl","2.0");var a=null;return o&&(a=n.toUrl(o.replace(/\./g,"/")+(e?"/"+e:"")+"/*.*").replace(/\/\*\.\*/,"")+(e?"":"/")),
a}),u._hasResource={},u});