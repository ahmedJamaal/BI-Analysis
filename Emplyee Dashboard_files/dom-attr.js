define(["exports","./sniff","./_base/lang","./dom","./dom-style","./dom-prop"],function(e,t,r,n,o,a){
function i(e,t){var r=e.getAttributeNode&&e.getAttributeNode(t);return r&&r.specified;
}var s={innerHTML:1,className:1,htmlFor:t("ie"),value:1},u={classname:"class",htmlfor:"for",
tabindex:"tabIndex",readonly:"readOnly"};e.has=function(e,t){var r=t.toLowerCase();
return s[a.names[r]||t]||i(n.byId(e),u[r]||t)},e.get=function(e,t){e=n.byId(e);var o=t.toLowerCase(),f=a.names[o]||t,d=s[f],l=e[f];
if(d&&"undefined"!=typeof l)return l;if("href"!=f&&("boolean"==typeof l||r.isFunction(l)))return l;
var b=u[o]||t;return i(e,b)?e.getAttribute(b):null},e.set=function(t,i,f){if(t=n.byId(t),
2==arguments.length){for(var d in i)e.set(t,d,i[d]);return t}var l=i.toLowerCase(),b=a.names[l]||i,m=s[b];
return"style"==b&&"string"!=typeof f?(o.set(t,f),t):m||"boolean"==typeof f||r.isFunction(f)?a.set(t,i,f):(t.setAttribute(u[l]||i,f),
t)},e.remove=function(e,t){n.byId(e).removeAttribute(u[t.toLowerCase()]||t)},e.getNodeProp=function(e,t){
e=n.byId(e);var r=t.toLowerCase(),o=a.names[r]||t;if(o in e&&"href"!=o)return e[o];
var s=u[r]||t;return i(e,s)?e.getAttribute(s):null}});