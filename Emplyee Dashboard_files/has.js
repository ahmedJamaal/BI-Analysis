define(["require","module"],function(e,t){var n=e.has||function(){};if(!n("dojo-has-api")){
var d="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location==location&&window.document==document,o=this,i=d&&document,a=i&&i.createElement("DiV"),r=t.config&&t.config()||{};
n=function(e){return"function"==typeof r[e]?r[e]=r[e](o,i,a):r[e]},n.cache=r,n.add=function(e,t,d,o){
return("undefined"==typeof r[e]||o)&&(r[e]=t),d&&n(e)},n.add("host-browser",d),n.add("dom",d),
n.add("dojo-dom-ready-api",1),n.add("dojo-sniff",1)}if(n("host-browser")){n.add("dom-addeventlistener",!!document.addEventListener),
n.add("touch","ontouchstart"in document||window.navigator.msMaxTouchPoints>0),n.add("device-width",screen.availWidth||innerWidth);
var u=document.createElement("form");n.add("dom-attributes-explicit",0==u.attributes.length),
n.add("dom-attributes-specified-flag",u.attributes.length>0&&u.attributes.length<40);
}return n.clearElement=function(e){return e.innerHTML="",e},n.normalize=function(e,t){
var d=e.match(/[\?:]|[^:\?]*/g),o=0,i=function(e){var t=d[o++];return":"==t?0:"?"==d[o++]?!e&&n(t)?i():(i(!0),
i(e)):t||0};return e=i(),e&&t(e)},n.load=function(e,t,n){e?t([e],n):n()},n});