define(["dojo/_base/array","dojo/dom-geometry","dojo/dom-style","dojo/_base/kernel","dojo/_base/window","./Viewport","./main"],function(e,t,r,o,a,n,i){
function h(o,i,h,d){var s=n.getEffectiveBox(o.ownerDocument);o.parentNode&&"body"==String(o.parentNode.tagName).toLowerCase()||a.body(o.ownerDocument).appendChild(o);
var l=null;e.some(i,function(e){var r=e.corner,a=e.pos,n=0,i={w:{L:s.l+s.w-a.x,R:a.x-s.l,
M:s.w}[r.charAt(1)],h:{T:s.t+s.h-a.y,B:a.y-s.t,M:s.h}[r.charAt(0)]},c=o.style;if(c.left=c.right="auto",
h){var y=h(o,e.aroundCorner,r,i,d);n="undefined"==typeof y?0:y}var u=o.style,p=u.display,w=u.visibility;
"none"==u.display&&(u.visibility="hidden",u.display="");var b=t.position(o);u.display=p,
u.visibility=w;var f={L:a.x,R:a.x-b.w,M:Math.max(s.l,Math.min(s.l+s.w,a.x+(b.w>>1))-b.w)
}[r.charAt(1)],v={T:a.y,B:a.y-b.h,M:Math.max(s.t,Math.min(s.t+s.h,a.y+(b.h>>1))-b.h)
}[r.charAt(0)],x=Math.max(s.l,f),m=Math.max(s.t,v),M=Math.min(s.l+s.w,f+b.w),B=Math.min(s.t+s.h,v+b.h),g=M-x,L=B-m;
return n+=b.w-g+(b.h-L),(null==l||n<l.overflow)&&(l={corner:r,aroundCorner:e.aroundCorner,
x:x,y:m,w:g,h:L,overflow:n,spaceAvailable:i}),!n}),l.overflow&&h&&h(o,l.aroundCorner,l.corner,l.spaceAvailable,d);
var c=t.isBodyLtr(o.ownerDocument),y=l.y,u=c?l.x:s.w-l.x-l.w;/relative|absolute/.test(r.get(a.body(o.ownerDocument),"position"))&&(y-=r.get(a.body(o.ownerDocument),"marginTop"),
u-=(c?1:-1)*r.get(a.body(o.ownerDocument),c?"marginLeft":"marginRight"));var p=o.style;
return p.top=y+"px",p[c?"left":"right"]=u+"px",p[c?"right":"left"]="auto",l}var d={
TL:"BR",TR:"BL",BL:"TR",BR:"TL"},s={at:function(t,r,o,a,n){var i=e.map(o,function(e){
var t={corner:e,aroundCorner:d[e],pos:{x:r.x,y:r.y}};return a&&(t.pos.x+="L"==e.charAt(1)?a.x:-a.x,
t.pos.y+="T"==e.charAt(0)?a.y:-a.y),t});return h(t,i,n)},around:function(a,n,i,d,s){
function l(e,t){R.push({aroundCorner:e,corner:t,pos:{x:{L:B,R:B+L,M:B+(L>>1)}[e.charAt(1)],
y:{T:g,B:g+T,M:g+(T>>1)}[e.charAt(0)]}})}var c;if("string"==typeof n||"offsetWidth"in n){
if(c=t.position(n,!0),/^(above|below)/.test(i[0])){var y=t.getBorderExtents(n),u=n.firstChild?t.getBorderExtents(n.firstChild):{
t:0,l:0,b:0,r:0},p=t.getBorderExtents(a),w=a.firstChild?t.getBorderExtents(a.firstChild):{
t:0,l:0,b:0,r:0};c.y+=Math.min(y.t+u.t,p.t+w.t),c.h-=Math.min(y.t+u.t,p.t+w.t)+Math.min(y.b+u.b,p.b+w.b);
}}else c=n;if(n.parentNode)for(var b="absolute"==r.getComputedStyle(n).position,f=n.parentNode;f&&1==f.nodeType&&"BODY"!=f.nodeName;){
var v=t.position(f,!0),x=r.getComputedStyle(f);if(/relative|absolute/.test(x.position)&&(b=!1),
!b&&/hidden|auto|scroll/.test(x.overflow)){var m=Math.min(c.y+c.h,v.y+v.h),M=Math.min(c.x+c.w,v.x+v.w);
c.x=Math.max(c.x,v.x),c.y=Math.max(c.y,v.y),c.h=m-c.y,c.w=M-c.x}"absolute"==x.position&&(b=!0),
f=f.parentNode}var B=c.x,g=c.y,L="w"in c?c.w:c.w=c.width,T="h"in c?c.h:(o.deprecated("place.around: dijit/place.__Rectangle: { x:"+B+", y:"+g+", height:"+c.height+", width:"+L+" } has been deprecated.  Please use { x:"+B+", y:"+g+", h:"+c.height+", w:"+L+" }","","2.0"),
c.h=c.height),R=[];e.forEach(i,function(e){var t=d;switch(e){case"above-centered":
l("TM","BM");break;case"below-centered":l("BM","TM");break;case"after-centered":t=!t;
case"before-centered":l(t?"ML":"MR",t?"MR":"ML");break;case"after":t=!t;case"before":
l(t?"TL":"TR",t?"TR":"TL"),l(t?"BL":"BR",t?"BR":"BL");break;case"below-alt":t=!t;case"below":
l(t?"BL":"BR",t?"TL":"TR"),l(t?"BR":"BL",t?"TR":"TL");break;case"above-alt":t=!t;case"above":
l(t?"TL":"TR",t?"BL":"BR"),l(t?"TR":"TL",t?"BR":"BL");break;default:l(e.aroundCorner,e.corner);
}});var C=h(a,R,s,{w:L,h:T});return C.aroundNodePos=c,C}};return i.place=s});