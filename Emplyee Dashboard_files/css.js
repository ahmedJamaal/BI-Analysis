define([],function(){if("undefined"==typeof window)return{load:function(e,t,n){n();
}};var e=document.getElementsByTagName("head")[0],t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/)||0,n=!1,r=!0;
t[1]||t[7]?n=parseInt(t[1])<6||parseInt(t[7])<=9:t[2]?r=!1:t[4]&&(n=parseInt(t[4])<18);
var o={};o.pluginBuilder="./css-builder";var a,s,i,l=function(){a=document.createElement("style"),
e.appendChild(a),s=a.styleSheet||a.sheet},u=0,c=[],d=function(e){u++,32==u&&(l(),
u=0),s.addImport(e),a.onload=function(){f()}},f=function(){i();var e=c.shift();return e?(i=e[1],
void d(e[0])):void(i=null)},h=function(e,t){if(s&&s.addImport||l(),s&&s.addImport)i?c.push([e,t]):(d(e),
i=t);else{a.textContent='@import "'+e+'";';var n=setInterval(function(){try{a.sheet.cssRules,
clearInterval(n),t()}catch(e){}},10)}},p=function(t,n){var o=document.createElement("link");
if(o.type="text/css",o.rel="stylesheet",r)o.onload=function(){o.onload=function(){},
setTimeout(n,7)};else var a=setInterval(function(){for(var e=0;e<document.styleSheets.length;e++){
var t=document.styleSheets[e];if(t.href==o.href)return clearInterval(a),n()}},10);
o.href=t,e.appendChild(o)};return o.normalize=function(e,t){return".css"==e.substr(e.length-4,4)&&(e=e.substr(0,e.length-4)),
t(e)},o.load=function(e,t,r,o){(n?h:p)(t.toUrl(e+".css"),r)},o});