define(["../_base/lang","../sniff","../_base/window","../dom-geometry","../dom-style","../window"],function(o,e,t,l,r,a){
var L={};o.setObject("dojo.dnd.autoscroll",L),L.getViewport=a.getBox,L.V_TRIGGER_AUTOSCROLL=32,
L.H_TRIGGER_AUTOSCROLL=32,L.V_AUTOSCROLL_VALUE=16,L.H_AUTOSCROLL_VALUE=16;var i,n=t.doc,_=1/0,O=1/0;
return L.autoScrollStart=function(o){n=o,i=a.getBox(n);var e=t.body(n).parentNode;
_=Math.max(e.scrollHeight-i.h,0),O=Math.max(e.scrollWidth-i.w,0)},L.autoScroll=function(o){
var e=i||a.getBox(n),l=t.body(n).parentNode,r=0,c=0;o.clientX<L.H_TRIGGER_AUTOSCROLL?r=-L.H_AUTOSCROLL_VALUE:o.clientX>e.w-L.H_TRIGGER_AUTOSCROLL&&(r=Math.min(L.H_AUTOSCROLL_VALUE,O-l.scrollLeft)),
o.clientY<L.V_TRIGGER_AUTOSCROLL?c=-L.V_AUTOSCROLL_VALUE:o.clientY>e.h-L.V_TRIGGER_AUTOSCROLL&&(c=Math.min(L.V_AUTOSCROLL_VALUE,_-l.scrollTop)),
window.scrollBy(r,c)},L._validNodes={div:1,p:1,td:1},L._validOverflow={auto:1,scroll:1
},L.autoScrollNodes=function(o){for(var a,i,n,_,O,c,d,R,s=0,T=0,w=o.target;w;){if(1==w.nodeType&&w.tagName.toLowerCase()in L._validNodes){
var f=r.getComputedStyle(w),v=f.overflow.toLowerCase()in L._validOverflow,A=f.overflowX.toLowerCase()in L._validOverflow,C=f.overflowY.toLowerCase()in L._validOverflow;
if((v||A||C)&&(a=l.getContentBox(w,f),i=l.position(w,!0)),(v||A)&&(n=Math.min(L.H_TRIGGER_AUTOSCROLL,a.w/2),
O=o.pageX-i.x,(e("webkit")||e("opera"))&&(O+=t.body().scrollLeft),s=0,O>0&&O<a.w&&(n>O?s=-n:O>a.w-n&&(s=n),
d=w.scrollLeft,w.scrollLeft=w.scrollLeft+s)),(v||C)&&(_=Math.min(L.V_TRIGGER_AUTOSCROLL,a.h/2),
c=o.pageY-i.y,(e("webkit")||e("opera"))&&(c+=t.body().scrollTop),T=0,c>0&&c<a.h&&(_>c?T=-_:c>a.h-_&&(T=_),
R=w.scrollTop,w.scrollTop=w.scrollTop+T)),s||T)return}try{w=w.parentNode}catch(S){
w=null}}L.autoScroll(o)},L});