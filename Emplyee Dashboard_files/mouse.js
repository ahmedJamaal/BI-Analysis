define(["./_base/kernel","./on","./has","./dom","./_base/window"],function(e,t,n,o,u){
function i(e,n){var u=function(u,i){return t(u,e,function(e){return n?n(e,i):o.isDescendant(e.relatedTarget,u)?void 0:i.call(this,e);
})};return u.bubble=function(t){return i(e,function(e,n){var o=t(e.target),u=e.relatedTarget;
return o&&o!=(u&&1==u.nodeType&&t(u))?n.call(o,e):void 0})},u}n.add("dom-quirks",u.doc&&"BackCompat"==u.doc.compatMode),
n.add("events-mouseenter",u.doc&&"onmouseenter"in u.doc.createElement("div")),n.add("events-mousewheel",u.doc&&"onmousewheel"in u.doc);
var r;r=n("dom-quirks")&&n("ie")||!n("dom-addeventlistener")?{LEFT:1,MIDDLE:4,RIGHT:2,
isButton:function(e,t){return e.button&t},isLeft:function(e){return 1&e.button},isMiddle:function(e){
return 4&e.button},isRight:function(e){return 2&e.button}}:{LEFT:0,MIDDLE:1,RIGHT:2,
isButton:function(e,t){return e.button==t},isLeft:function(e){return 0==e.button},
isMiddle:function(e){return 1==e.button},isRight:function(e){return 2==e.button}},
e.mouseButtons=r;var d;return d=n("events-mousewheel")?"mousewheel":function(e,n){
return t(e,"DOMMouseScroll",function(e){e.wheelDelta=-e.detail,n.call(this,e)})},
{_eventHandler:i,enter:i("mouseover"),leave:i("mouseout"),wheel:d,isLeft:r.isLeft,
isMiddle:r.isMiddle,isRight:r.isRight}});