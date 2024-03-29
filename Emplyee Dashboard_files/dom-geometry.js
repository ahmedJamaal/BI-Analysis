define(["./sniff","./_base/window","./dom","./dom-style"],function(t,e,o,r){function n(t,e,o,r,n,i){
i=i||"px";var l=t.style;isNaN(e)||(l.left=e+i),isNaN(o)||(l.top=o+i),r>=0&&(l.width=r+i),
n>=0&&(l.height=n+i)}function i(t){return"button"==t.tagName.toLowerCase()||"input"==t.tagName.toLowerCase()&&"button"==(t.getAttribute("type")||"").toLowerCase();
}function l(t){return"border-box"==d.boxModel||"table"==t.tagName.toLowerCase()||i(t);
}var d={};d.boxModel="content-box",t("ie")&&(d.boxModel="BackCompat"==document.compatMode?"border-box":"content-box"),
d.getPadExtents=function(t,e){t=o.byId(t);var n=e||r.getComputedStyle(t),i=r.toPixelValue,l=i(t,n.paddingLeft),d=i(t,n.paddingTop),a=i(t,n.paddingRight),f=i(t,n.paddingBottom);
return{l:l,t:d,r:a,b:f,w:l+a,h:d+f}};var a="none";d.getBorderExtents=function(t,e){
t=o.byId(t);var n=r.toPixelValue,i=e||r.getComputedStyle(t),l=i.borderLeftStyle!=a?n(t,i.borderLeftWidth):0,d=i.borderTopStyle!=a?n(t,i.borderTopWidth):0,f=i.borderRightStyle!=a?n(t,i.borderRightWidth):0,u=i.borderBottomStyle!=a?n(t,i.borderBottomWidth):0;
return{l:l,t:d,r:f,b:u,w:l+f,h:d+u}},d.getPadBorderExtents=function(t,e){t=o.byId(t);
var n=e||r.getComputedStyle(t),i=d.getPadExtents(t,n),l=d.getBorderExtents(t,n);return{
l:i.l+l.l,t:i.t+l.t,r:i.r+l.r,b:i.b+l.b,w:i.w+l.w,h:i.h+l.h}},d.getMarginExtents=function(t,e){
t=o.byId(t);var n=e||r.getComputedStyle(t),i=r.toPixelValue,l=i(t,n.marginLeft),d=i(t,n.marginTop),a=i(t,n.marginRight),f=i(t,n.marginBottom);
return{l:l,t:d,r:a,b:f,w:l+a,h:d+f}},d.getMarginBox=function(e,n){e=o.byId(e);var i,l=n||r.getComputedStyle(e),f=d.getMarginExtents(e,l),u=e.offsetLeft-f.l,g=e.offsetTop-f.t,c=e.parentNode,s=r.toPixelValue;
if(t("mozilla")){var h=parseFloat(l.left),b=parseFloat(l.top);isNaN(h)||isNaN(b)?c&&c.style&&(i=r.getComputedStyle(c),
"visible"!=i.overflow&&(u+=i.borderLeftStyle!=a?s(e,i.borderLeftWidth):0,g+=i.borderTopStyle!=a?s(e,i.borderTopWidth):0)):(u=h,
g=b)}else(t("opera")||8==t("ie")&&!t("quirks"))&&c&&(i=r.getComputedStyle(c),u-=i.borderLeftStyle!=a?s(e,i.borderLeftWidth):0,
g-=i.borderTopStyle!=a?s(e,i.borderTopWidth):0);return{l:u,t:g,w:e.offsetWidth+f.w,
h:e.offsetHeight+f.h}},d.getContentBox=function(e,n){e=o.byId(e);var i,l=n||r.getComputedStyle(e),a=e.clientWidth,f=d.getPadExtents(e,l),u=d.getBorderExtents(e,l);
return a?(i=e.clientHeight,u.w=u.h=0):(a=e.offsetWidth,i=e.offsetHeight),t("opera")&&(f.l+=u.l,
f.t+=u.t),{l:f.l,t:f.t,w:a-f.w-u.w,h:i-f.h-u.h}},d.setContentSize=function(t,e,r){
t=o.byId(t);var i=e.w,a=e.h;if(l(t)){var f=d.getPadBorderExtents(t,r);i>=0&&(i+=f.w),
a>=0&&(a+=f.h)}n(t,NaN,NaN,i,a)};var f={l:0,t:0,w:0,h:0};return d.setMarginBox=function(e,a,u){
e=o.byId(e);var g=u||r.getComputedStyle(e),c=a.w,s=a.h,h=l(e)?f:d.getPadBorderExtents(e,g),b=d.getMarginExtents(e,g);
if(t("webkit")&&i(e)){var m=e.style;c>=0&&!m.width&&(m.width="4px"),s>=0&&!m.height&&(m.height="4px");
}c>=0&&(c=Math.max(c-h.w-b.w,0)),s>=0&&(s=Math.max(s-h.h-b.h,0)),n(e,a.l,a.t,c,s);
},d.isBodyLtr=function(t){return t=t||e.doc,"ltr"==(e.body(t).dir||t.documentElement.dir||"ltr").toLowerCase();
},d.docScroll=function(o){o=o||e.doc;var r=e.doc.parentWindow||e.doc.defaultView;return"pageXOffset"in r?{
x:r.pageXOffset,y:r.pageYOffset}:(r=t("quirks")?e.body(o):o.documentElement)&&{x:d.fixIeBiDiScrollLeft(r.scrollLeft||0,o),
y:r.scrollTop||0}},t("ie")&&(d.getIeDocumentElementOffset=function(o){o=o||e.doc;var r=o.documentElement;
if(t("ie")<8){var n=r.getBoundingClientRect(),i=n.left,l=n.top;return t("ie")<7&&(i+=r.clientLeft,
l+=r.clientTop),{x:0>i?0:i,y:0>l?0:l}}return{x:0,y:0}}),d.fixIeBiDiScrollLeft=function(o,r){
r=r||e.doc;var n=t("ie");if(n&&!d.isBodyLtr(r)){var i=t("quirks"),l=i?e.body(r):r.documentElement,a=e.global;
return 6==n&&!i&&a.frameElement&&l.scrollHeight>l.clientHeight&&(o+=l.clientLeft),
8>n||i?o+l.clientWidth-l.scrollWidth:-o}return o},d.position=function(r,n){r=o.byId(r);
var i,l=e.body(r.ownerDocument);try{i=r.getBoundingClientRect()}catch(a){return{x:0,
y:0,w:0,h:0}}if(i={x:i.left,y:i.top,w:i.right-i.left,h:i.bottom-i.top},t("ie")<9){
var f=d.getIeDocumentElementOffset(r.ownerDocument);i.x-=f.x+(t("quirks")?l.clientLeft+l.offsetLeft:0),
i.y-=f.y+(t("quirks")?l.clientTop+l.offsetTop:0)}if(n){var u=d.docScroll(r.ownerDocument);
i.x+=u.x,i.y+=u.y}return i},d.getMarginSize=function(t,e){t=o.byId(t);var n=d.getMarginExtents(t,e||r.getComputedStyle(t)),i=t.getBoundingClientRect();
return{w:i.right-i.left+n.w,h:i.bottom-i.top+n.h}},d.normalizeEvent=function(e){if("layerX"in e||(e.layerX=e.offsetX,
e.layerY=e.offsetY),!t("dom-addeventlistener")){var o=e.target,r=o&&o.ownerDocument||document,n=t("quirks")?r.body:r.documentElement,i=d.getIeDocumentElementOffset(r);
e.pageX=e.clientX+d.fixIeBiDiScrollLeft(n.scrollLeft||0,r)-i.x,e.pageY=e.clientY+(n.scrollTop||0)-i.y;
}},d});