define(["./_base/kernel","./has","require","./has!host-browser?./domReady","./_base/lang"],function(o,r,a,n,e){
var i=0,d=[],t=0,s=function(){i=1,o._postLoad=o.config.afterOnLoad=!0,f()},f=function(){
if(!t){for(t=1;i&&(!n||0==n._Q.length)&&(a.idle?a.idle():!0)&&d.length;){var o=d.shift();
try{o()}catch(r){if(r.info=r.message,!a.signal)throw r;a.signal("error",r)}}t=0}};
a.on&&a.on("idle",f),n&&(n._onQEmpty=f);var c=o.ready=o.addOnLoad=function(r,a,n){
var i=e._toArray(arguments);"number"!=typeof r?(n=a,a=r,r=1e3):i.shift(),n=n?e.hitch.apply(o,i):function(){
a()},n.priority=r;for(var t=0;t<d.length&&r>=d[t].priority;t++);d.splice(t,0,n),f();
};if(r.add("dojo-config-addOnLoad",1),r("dojo-config-addOnLoad")){var l=o.config.addOnLoad;
l&&c[e.isArray(l)?"apply":"call"](o,l)}return r("dojo-sync-loader")&&o.config.parseOnLoad&&!o.isAsync&&c(99,function(){
o.parser||(o.deprecated("Add explicit require(['dojo/parser']);","","2.0"),a(["dojo/parser"]));
}),n?n(s):s(),c});