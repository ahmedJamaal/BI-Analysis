define(["./_base/kernel","./aspect","./dom","./dom-class","./_base/lang","./on","./has","./mouse","./domReady","./_base/window"],function(e,t,o,a,n,c,r,u,i,d){
function s(e,t,o){return k&&o?function(e,t){return c(e,o,t)}:E?function(o,a){var n=c(o,t,a),r=c(o,e,function(e){
(!T||(new Date).getTime()>T+1e3)&&a.call(this,e)});return{remove:function(){n.remove(),
r.remove()}}}:function(t,o){return c(t,e,o)}}function l(e){do if(void 0!==e.dojoClick)return e.dojoClick;while(e=e.parentNode);
}function g(e,t,n){function r(e){d.doc.addEventListener(e,function(t){t._dojo_click||!((new Date).getTime()<=y+1e3)||"INPUT"==t.target.tagName&&a.contains(t.target,"dijitOffScreen")||(t.stopPropagation(),
t.stopImmediatePropagation&&t.stopImmediatePropagation(),"click"!=e||"INPUT"==t.target.tagName&&"radio"!=t.target.type&&"checkbox"!=t.target.type||"TEXTAREA"==t.target.tagName||"AUDIO"==t.target.tagName||"VIDEO"==t.target.tagName||t.preventDefault());
},!0)}v=!e.target.disabled&&l(e.target),v&&(h=e.target,f=e.touches?e.touches[0].pageX:e.clientX,
b=e.touches?e.touches[0].pageY:e.clientY,p=("object"==typeof v?v.x:"number"==typeof v?v:0)||4,
j=("object"==typeof v?v.y:"number"==typeof v?v:0)||4,m||(m=!0,d.doc.addEventListener(t,function(e){
v=v&&e.target==h&&Math.abs((e.touches?e.touches[0].pageX:e.clientX)-f)<=p&&Math.abs((e.touches?e.touches[0].pageY:e.clientY)-b)<=j;
},!0),d.doc.addEventListener(n,function(e){if(v){y=(new Date).getTime();var t=e.target;
"LABEL"===t.tagName&&(t=o.byId(t.getAttribute("for"))||t),setTimeout(function(){c.emit(t,"click",{
bubbles:!0,cancelable:!0,_dojo_click:!0})})}},!0),r("click"),r("mousedown"),r("mouseup")));
}var m,v,h,f,b,p,j,y,T,w,E=r("touch"),D=r("ios")<5,k=navigator.pointerEnabled||navigator.msPointerEnabled,N=function(){
var e={};for(var t in{down:1,move:1,up:1,cancel:1,over:1,out:1})e[t]=navigator.pointerEnabled?"pointer"+t:"MSPointer"+t.charAt(0).toUpperCase()+t.slice(1);
return e}();E&&i(k?function(){d.doc.addEventListener(N.down,function(e){g(e,N.move,N.up);
},!0)}:function(){function e(e){var t=n.delegate(e,{bubbles:!0});return r("ios")>=6&&(t.touches=e.touches,
t.altKey=e.altKey,t.changedTouches=e.changedTouches,t.ctrlKey=e.ctrlKey,t.metaKey=e.metaKey,
t.shiftKey=e.shiftKey,t.targetTouches=e.targetTouches),t}w=d.body(),d.doc.addEventListener("touchstart",function(e){
T=(new Date).getTime();var t=w;w=e.target,c.emit(t,"dojotouchout",{relatedTarget:w,
bubbles:!0}),c.emit(w,"dojotouchover",{relatedTarget:t,bubbles:!0}),g(e,"touchmove","touchend");
},!0),c(d.doc,"touchmove",function(t){T=(new Date).getTime();var o=d.doc.elementFromPoint(t.pageX-(D?0:d.global.pageXOffset),t.pageY-(D?0:d.global.pageYOffset));
o&&(w!==o&&(c.emit(w,"dojotouchout",{relatedTarget:o,bubbles:!0}),c.emit(o,"dojotouchover",{
relatedTarget:w,bubbles:!0}),w=o),c.emit(o,"dojotouchmove",e(t))||t.preventDefault());
}),c(d.doc,"touchend",function(t){T=(new Date).getTime();var o=d.doc.elementFromPoint(t.pageX-(D?0:d.global.pageXOffset),t.pageY-(D?0:d.global.pageYOffset))||d.body();
c.emit(o,"dojotouchend",e(t))})});var P={press:s("mousedown","touchstart",N.down),
move:s("mousemove","dojotouchmove",N.move),release:s("mouseup","dojotouchend",N.up),
cancel:s(u.leave,"touchcancel",E?N.cancel:null),over:s("mouseover","dojotouchover",N.over),
out:s("mouseout","dojotouchout",N.out),enter:u._eventHandler(s("mouseover","dojotouchover",N.over)),
leave:u._eventHandler(s("mouseout","dojotouchout",N.out))};return r("extend-dojo")&&(e.touch=P),
P});