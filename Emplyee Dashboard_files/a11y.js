define(["dojo/_base/array","dojo/dom","dojo/dom-attr","dojo/dom-style","dojo/_base/lang","dojo/sniff","./main"],function(e,t,n,a,i,r,o){
var s,d={_isElementShown:function(e){var t=a.get(e);return"hidden"!=t.visibility&&"collapsed"!=t.visibility&&"none"!=t.display&&"hidden"!=n.get(e,"type");
},hasDefaultTabStop:function(e){switch(e.nodeName.toLowerCase()){case"a":return n.has(e,"href");
case"area":case"button":case"input":case"object":case"select":case"textarea":return!0;
case"iframe":var t;try{var a=e.contentDocument;if("designMode"in a&&"on"==a.designMode)return!0;
t=a.body}catch(i){try{t=e.contentWindow.document.body}catch(r){return!1}}return t&&("true"==t.contentEditable||t.firstChild&&"true"==t.firstChild.contentEditable);
default:return"true"==e.contentEditable}},effectiveTabIndex:function(e){return n.get(e,"disabled")?s:n.has(e,"tabIndex")?+n.get(e,"tabIndex"):d.hasDefaultTabStop(e)?0:s;
},isTabNavigable:function(e){return d.effectiveTabIndex(e)>=0},isFocusable:function(e){
return d.effectiveTabIndex(e)>=-1},_getTabNavigable:function(e){function t(e){return e&&"input"==e.tagName.toLowerCase()&&e.type&&"radio"==e.type.toLowerCase()&&e.name&&e.name.toLowerCase();
}function a(e){return b[t(e)]||e}var i,o,s,c,u,f,b={},l=d._isElementShown,g=d.effectiveTabIndex,h=function(e){
for(var a=e.firstChild;a;a=a.nextSibling)if(!(1!=a.nodeType||r("ie")<=9&&"HTML"!==a.scopeName)&&l(a)){
var d=g(a);if(d>=0){0==d?(i||(i=a),o=a):d>0&&((!s||c>d)&&(c=d,s=a),(!u||d>=f)&&(f=d,
u=a));var v=t(a);n.get(a,"checked")&&v&&(b[v]=a)}"SELECT"!=a.nodeName.toUpperCase()&&h(a);
}};return l(e)&&h(e),{first:a(i),last:a(o),lowest:a(s),highest:a(u)}},getFirstInTabbingOrder:function(e,n){
var a=d._getTabNavigable(t.byId(e,n));return a.lowest?a.lowest:a.first},getLastInTabbingOrder:function(e,n){
var a=d._getTabNavigable(t.byId(e,n));return a.last?a.last:a.highest}};return r("extend-dojo")&&i.mixin(o,d),
d});