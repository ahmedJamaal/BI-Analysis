define(["dojo/_base/array","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang"],function(t,o,e,i,n){
function r(t){return t.substring(0,1).toUpperCase()+t.substring(1)}function l(t,o){
var i=t.resize?t.resize(o):e.setMarginBox(t.domNode,o);i?n.mixin(t,i):(n.mixin(t,e.getMarginBox(t.domNode)),
n.mixin(t,o))}var a={marginBox2contentBox:function(t,o){var n=i.getComputedStyle(t),r=e.getMarginExtents(t,n),l=e.getPadBorderExtents(t,n);
return{l:i.toPixelValue(t,n.paddingLeft),t:i.toPixelValue(t,n.paddingTop),w:o.w-(r.w+l.w),
h:o.h-(r.h+l.h)}},layoutChildren:function(e,i,a,d,g){i=n.mixin({},i),o.add(e,"dijitLayoutContainer"),
a=t.filter(a,function(t){return"center"!=t.region&&"client"!=t.layoutAlign}).concat(t.filter(a,function(t){
return"center"==t.region||"client"==t.layoutAlign})),t.forEach(a,function(t){var e=t.domNode,n=t.region||t.layoutAlign;
if(!n)throw new Error("No region setting for "+t.id);var a=e.style;a.left=i.l+"px",
a.top=i.t+"px",a.position="absolute",o.add(e,"dijitAlign"+r(n));var u={};d&&d==t.id&&(u["top"==t.region||"bottom"==t.region?"h":"w"]=g),
"leading"==n&&(n=t.isLeftToRight()?"left":"right"),"trailing"==n&&(n=t.isLeftToRight()?"right":"left"),
"top"==n||"bottom"==n?(u.w=i.w,l(t,u),i.h-=t.h,"top"==n?i.t+=t.h:a.top=i.t+i.h+"px"):"left"==n||"right"==n?(u.h=i.h,
l(t,u),i.w-=t.w,"left"==n?i.l+=t.w:a.left=i.l+i.w+"px"):("client"==n||"center"==n)&&l(t,i);
})}};return n.setObject("dijit.layout.utils",a),a});