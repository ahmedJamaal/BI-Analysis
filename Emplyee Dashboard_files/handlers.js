define(["../json","../_base/kernel","../_base/array","../has","../has!dom?../selector/_loader"],function(e,t,r,n){
function a(e){var t=u[e.options.handleAs];return e.data=t?t(e):e.data||e.text,e}n.add("activex","undefined"!=typeof ActiveXObject),
n.add("dom-parser",function(e){return"DOMParser"in e});var o;if(n("activex")){var c=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML.DOMDocument"];
o=function(e){var t=e.data;if(t&&n("dom-qsa2.1")&&!t.querySelectorAll&&n("dom-parser")&&(t=(new DOMParser).parseFromString(e.text,"application/xml")),
!t||!t.documentElement){var a=e.text;r.some(c,function(e){try{var r=new ActiveXObject(e);
r.async=!1,r.loadXML(a),t=r}catch(n){return!1}return!0})}return t}}var u={javascript:function(e){
return t.eval(e.text||"")},json:function(t){return e.parse(t.text||null)},xml:o};return a.register=function(e,t){
u[e]=t},a});