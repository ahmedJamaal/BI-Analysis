define(["./_base/lang","./sniff","./_base/window","./dom","./dom-geometry","./dom-style","./dom-construct"],function(t,e,i,o,n,r,l){
e.add("rtl-adjust-position-for-verticalScrollBar",function(t,e){var o=i.body(e),r=l.create("div",{
style:{overflow:"scroll",overflowX:"visible",direction:"rtl",visibility:"hidden",
position:"absolute",left:"0",top:"0",width:"64px",height:"64px"}},o,"last"),d=l.create("div",{
style:{overflow:"hidden",direction:"ltr"}},r,"last"),c=0!=n.position(d).x;return r.removeChild(d),
o.removeChild(r),c}),e.add("position-fixed-support",function(t,e){var o=i.body(e),r=l.create("span",{
style:{visibility:"hidden",position:"fixed",left:"1px",top:"1px"}},o,"last"),d=l.create("span",{
style:{position:"fixed",left:"0",top:"0"}},r,"last"),c=n.position(d).x!=n.position(r).x;
return r.removeChild(d),o.removeChild(r),c});var d={getBox:function(t){t=t||i.doc;
var o,r,l="BackCompat"==t.compatMode?i.body(t):t.documentElement,c=n.docScroll(t);
if(e("touch")){var a=d.get(t);o=a.innerWidth||l.clientWidth,r=a.innerHeight||l.clientHeight;
}else o=l.clientWidth,r=l.clientHeight;return{l:c.x,t:c.y,w:o,h:r}},get:function(t){
if(e("ie")&&d!==document.parentWindow){t.parentWindow.execScript("document._parentWindow = window;","Javascript");
var i=t._parentWindow;return t._parentWindow=null,i}return t.parentWindow||t.defaultView;
},scrollIntoView:function(t,l){try{t=o.byId(t);var d=t.ownerDocument||i.doc,c=i.body(d),a=d.documentElement||c.parentNode,s=e("ie"),h=e("webkit");
if(t==c||t==a)return;if(!(e("mozilla")||s||h||e("opera")||e("trident"))&&"scrollIntoView"in t)return void t.scrollIntoView(!1);
var p="BackCompat"==d.compatMode,f=Math.min(c.clientWidth||a.clientWidth,a.clientWidth||c.clientWidth),w=Math.min(c.clientHeight||a.clientHeight,a.clientHeight||c.clientHeight),u=h||p?c:a,x=l||n.position(t),m=t.parentNode,v=function(t){
return 6>=s||7==s&&p?!1:e("position-fixed-support")&&"fixed"==r.get(t,"position").toLowerCase();
};if(v(t))return;for(;m;){m==c&&(m=u);var y=n.position(m),g=v(m),W="rtl"==r.getComputedStyle(m).direction.toLowerCase();
if(m==u)y.w=f,y.h=w,u==a&&s&&W&&(y.x+=u.offsetWidth-y.w),(y.x<0||!s||s>=9)&&(y.x=0),
(y.y<0||!s||s>=9)&&(y.y=0);else{var b=n.getPadBorderExtents(m);y.w-=b.w,y.h-=b.h,
y.x+=b.l,y.y+=b.t;var H=m.clientWidth,C=y.w-H;H>0&&C>0&&(W&&e("rtl-adjust-position-for-verticalScrollBar")&&(y.x+=C),
y.w=H),H=m.clientHeight,C=y.h-H,H>0&&C>0&&(y.h=H)}g&&(y.y<0&&(y.h+=y.y,y.y=0),y.x<0&&(y.w+=y.x,
y.x=0),y.y+y.h>w&&(y.h=w-y.y),y.x+y.w>f&&(y.w=f-y.x));var M,B,I=x.x-y.x,L=x.y-y.y,V=I+x.w-y.w,j=L+x.h-y.h;
V*I>0&&(m.scrollLeft||m==u||m.scrollWidth>m.offsetHeight)&&(M=Math[0>I?"max":"min"](I,V),
W&&(8==s&&!p||s>=9)&&(M=-M),B=m.scrollLeft,m.scrollLeft+=M,M=m.scrollLeft-B,x.x-=M),
j*L>0&&(m.scrollTop||m==u||m.scrollHeight>m.offsetHeight)&&(M=Math.ceil(Math[0>L?"max":"min"](L,j)),
B=m.scrollTop,m.scrollTop+=M,M=m.scrollTop-B,x.y-=M),m=m!=u&&!g&&m.parentNode}}catch(S){
console.error("scrollIntoView: "+S),t.scrollIntoView(!1)}}};return e("extend-dojo")&&t.setObject("dojo.window",d),
d});