define(["./sniff","./dom"],function(t,e){function r(e,r,n){if(r=r.toLowerCase(),t("ie")){
if("auto"==n){if("height"==r)return e.offsetHeight;if("width"==r)return e.offsetWidth;
}if("fontweight"==r)switch(n){case 700:return"bold";case 400:default:return"normal";
}}return r in s||(s[r]=c.test(r)),s[r]?l(e,n):n}var n,i={};n=t("webkit")?function(t){
var e;if(1==t.nodeType){var r=t.ownerDocument.defaultView;e=r.getComputedStyle(t,null),
!e&&t.style&&(t.style.display="",e=r.getComputedStyle(t,null))}return e||{}}:t("ie")&&(t("ie")<9||t("quirks"))?function(t){
return 1==t.nodeType&&t.currentStyle?t.currentStyle:{}}:function(t){return 1==t.nodeType?t.ownerDocument.defaultView.getComputedStyle(t,null):{};
},i.getComputedStyle=n;var l;l=t("ie")?function(t,e){if(!e)return 0;if("medium"==e)return 4;
if(e.slice&&"px"==e.slice(-2))return parseFloat(e);var r=t.style,n=t.runtimeStyle,i=t.currentStyle,l=r.left,o=n.left;
n.left=i.left;try{r.left=e,e=r.pixelLeft}catch(u){e=0}return r.left=l,n.left=o,e}:function(t,e){
return parseFloat(e)||0},i.toPixelValue=l;var o="DXImageTransform.Microsoft.Alpha",u=function(t,e){
try{return t.filters.item(o)}catch(r){return e?{}:null}},a=t("ie")<9||t("ie")<10&&t("quirks")?function(t){
try{return u(t).Opacity/100}catch(e){return 1}}:function(t){return n(t).opacity},f=t("ie")<9||t("ie")<10&&t("quirks")?function(t,e){
""===e&&(e=1);var r=100*e,n=1===e;if(n?(t.style.zoom="",u(t)&&(t.style.filter=t.style.filter.replace(new RegExp("\\s*progid:"+o+"\\([^\\)]+?\\)","i"),""))):(t.style.zoom=1,
u(t)?u(t,1).Opacity=r:t.style.filter+=" progid:"+o+"(Opacity="+r+")",u(t,1).Enabled=!0),
"tr"==t.tagName.toLowerCase())for(var i=t.firstChild;i;i=i.nextSibling)"td"==i.tagName.toLowerCase()&&f(i,e);
return e}:function(t,e){return t.style.opacity=e},s={left:!0,top:!0},c=/margin|padding|width|height|max|min|offset/,y={
cssFloat:1,styleFloat:1,"float":1};return i.get=function(t,n){var l=e.byId(t),o=arguments.length,u="opacity"==n;
if(2==o&&u)return a(l);n=y[n]?"cssFloat"in l.style?"cssFloat":"styleFloat":n;var f=i.getComputedStyle(l);
return 1==o?f:r(l,n,f[n]||l.style[n])},i.set=function(t,r,n){var l=e.byId(t),o=arguments.length,u="opacity"==r;
if(r=y[r]?"cssFloat"in l.style?"cssFloat":"styleFloat":r,3==o)return u?f(l,n):l.style[r]=n;
for(var a in r)i.set(t,a,r[a]);return i.getComputedStyle(l)},i});