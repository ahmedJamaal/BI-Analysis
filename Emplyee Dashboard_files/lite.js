define(["../has","../_base/kernel"],function(e,r){"use strict";var t=document.createElement("div"),n=t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector,u=t.querySelectorAll,o=/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g;
e.add("dom-matches-selector",!!n),e.add("dom-qsa",!!u);var a=function(e,t){if(f&&e.indexOf(",")>-1)return f(e,t);
var n=t?t.ownerDocument||t:r.doc||document,o=(u?/^([\w]*)#([\w\-]+$)|^(\.)([\w\-\*]+$)|^(\w+$)/:/^([\w]*)#([\w\-]+)(?:\s+(.*))?$|(?:^|(>|.+\s+))([\w\-\*]+)(\S*$)/).exec(e);
if(t=t||n,o){if(o[2]){var s=r.byId?r.byId(o[2],n):n.getElementById(o[2]);if(!s||o[1]&&o[1]!=s.tagName.toLowerCase())return[];
if(t!=n)for(var l=s;l!=t;)if(l=l.parentNode,!l)return[];return o[3]?a(o[3],s):[s];
}if(o[3]&&t.getElementsByClassName)return t.getElementsByClassName(o[4]);var s;if(o[5]){
if(s=t.getElementsByTagName(o[5]),!o[4]&&!o[6])return s;e=(o[4]||"")+o[6]}}if(u)return 1===t.nodeType&&"object"!==t.nodeName.toLowerCase()?i(t,e,t.querySelectorAll):t.querySelectorAll(e);
s||(s=t.getElementsByTagName("*"));for(var d=[],m=0,g=s.length;g>m;m++){var v=s[m];
1==v.nodeType&&c(v,e,t)&&d.push(v)}return d},i=function(e,r,t){var n=e,u=e.getAttribute("id"),a=u||"__dojo__",i=e.parentNode,c=/^\s*[+~]/.test(r);
if(c&&!i)return[];u?a=a.replace(/'/g,"\\$&"):e.setAttribute("id",a),c&&i&&(e=e.parentNode);
for(var f=r.match(o),s=0;s<f.length;s++)f[s]="[id='"+a+"'] "+f[s];r=f.join(",");try{
return t.call(e,r)}finally{u||n.removeAttribute("id")}};if(!e("dom-matches-selector"))var c=function(){
function e(e,r,t){var n=r.charAt(0);('"'==n||"'"==n)&&(r=r.slice(1,-1)),r=r.replace(/\\/g,"");
var u=i[t||""];return function(t){var n=t.getAttribute(e);return n&&u(n,r)}}function r(e){
return function(r,t){for(;(r=r.parentNode)!=t;)if(e(r,t))return!0}}function n(e){
return function(r,t){return r=r.parentNode,e?r!=t&&e(r,t):r==t}}function u(e,r){return e?function(t,n){
return r(t)&&e(t,n)}:r}var o="div"==t.tagName?"toLowerCase":"toUpperCase",a={"":function(e){
return e=e[o](),function(r){return r.tagName==e}},".":function(e){var r=" "+e+" ";
return function(t){return t.className.indexOf(e)>-1&&(" "+t.className+" ").indexOf(r)>-1;
}},"#":function(e){return function(r){return r.id==e}}},i={"^=":function(e,r){return 0==e.indexOf(r);
},"*=":function(e,r){return e.indexOf(r)>-1},"$=":function(e,r){return e.substring(e.length-r.length,e.length)==r;
},"~=":function(e,r){return(" "+e+" ").indexOf(" "+r+" ")>-1},"|=":function(e,r){
return 0==(e+"-").indexOf(r+"-")},"=":function(e,r){return e==r},"":function(e,r){
return!0}},c={};return function(t,o,i){var f=c[o];if(!f){if(o.replace(/(?:\s*([> ])\s*)|(#|\.)?((?:\\.|[\w-])+)|\[\s*([\w-]+)\s*(.?=)?\s*("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|(?:\\.|[^\]])*)\s*\]/g,function(t,o,i,c,s,l,d){
return c?f=u(f,a[i||""](c.replace(/\\/g,""))):o?f=(" "==o?r:n)(f):s&&(f=u(f,e(s,d,l))),
""}))throw new Error("Syntax error in query");if(!f)return!0;c[o]=f}return f(t,i);
}}();if(!e("dom-qsa"))var f=function(e,r){for(var t=e.match(o),n=[],u=0;u<t.length;u++){
e=new String(t[u].replace(/\s*$/,"")),e.indexOf=escape;for(var i=a(e,r),c=0,f=i.length;f>c;c++){
var s=i[c];n[s.sourceIndex]=s}}var l=[];for(u in n)l.push(n[u]);return l};return a.match=n?function(e,r,t){
return t&&9!=t.nodeType?i(t,r,function(r){return n.call(e,r)}):n.call(e,r)}:c,a});