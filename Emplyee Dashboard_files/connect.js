define(["./kernel","../on","../topic","../aspect","./event","../mouse","./sniff","./lang","../keys"],function(e,n,r,t,c,o,a,i){
function u(r,c,a,u,s){if(u=i.hitch(a,u),!r||!r.addEventListener&&!r.attachEvent)return t.after(r||e.global,c,u,!0);
if("string"==typeof c&&"on"==c.substring(0,2)&&(c=c.substring(2)),r||(r=e.global),
!s)switch(c){case"keypress":c=f;break;case"mouseenter":c=o.enter;break;case"mouseleave":
c=o.leave}return n(r,c,u,s)}function s(e){e.keyChar=e.charCode?String.fromCharCode(e.charCode):"",
e.charOrCode=e.keyChar||e.keyCode}a.add("events-keypress-typed",function(){var e={
charCode:0};try{e=document.createEvent("KeyboardEvent"),(e.initKeyboardEvent||e.initKeyEvent).call(e,"keypress",!0,!0,null,!1,!1,!1,!1,9,3);
}catch(n){}return 0==e.charCode&&!a("opera")});var f,y={106:42,111:47,186:59,187:43,
188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39,229:113},l=a("mac")?"metaKey":"ctrlKey",h=function(e,n){
var r=i.mixin({},e,n);return s(r),r.preventDefault=function(){e.preventDefault()},
r.stopPropagation=function(){e.stopPropagation()},r};if(a("events-keypress-typed")){
var p=function(e,n){try{return e.keyCode=n}catch(e){return 0}};f=function(e,r){var t=n(e,"keydown",function(e){
var n=e.keyCode,t=13!=n&&32!=n&&(27!=n||!a("ie"))&&(48>n||n>90)&&(96>n||n>111)&&(186>n||n>192)&&(219>n||n>222)&&229!=n;
if(t||e.ctrlKey){var c=t?0:n;if(e.ctrlKey){if(3==n||13==n)return r.call(e.currentTarget,e);
c>95&&106>c?c-=48:!e.shiftKey&&c>=65&&90>=c?c+=32:c=y[c]||c}var o=h(e,{type:"keypress",
faux:!0,charCode:c});r.call(e.currentTarget,o),a("ie")&&p(e,o.keyCode)}}),c=n(e,"keypress",function(e){
var n=e.charCode;return n=n>=32?n:0,e=h(e,{charCode:n,faux:!0}),r.call(this,e)});return{
remove:function(){t.remove(),c.remove()}}}}else f=a("opera")?function(e,r){return n(e,"keypress",function(e){
var n=e.which;return 3==n&&(n=99),n=32>n&&!e.shiftKey?0:n,e.ctrlKey&&!e.shiftKey&&n>=65&&90>=n&&(n+=32),
r.call(this,h(e,{charCode:n}))})}:function(e,r){return n(e,"keypress",function(e){
return s(e),r.call(this,e)})};var v={_keypress:f,connect:function(e,n,r,t,c){var o=arguments,a=[],i=0;
a.push("string"==typeof o[0]?null:o[i++],o[i++]);var s=o[i+1];a.push("string"==typeof s||"function"==typeof s?o[i++]:null,o[i++]);
for(var f=o.length;f>i;i++)a.push(o[i]);return u.apply(this,a)},disconnect:function(e){
e&&e.remove()},subscribe:function(e,n,t){return r.subscribe(e,i.hitch(n,t))},publish:function(e,n){
return r.publish.apply(r,[e].concat(n))},connectPublisher:function(e,n,r){var t=function(){
v.publish(e,arguments)};return r?v.connect(n,r,t):v.connect(n,t)},isCopyKey:function(e){
return e[l]}};return v.unsubscribe=v.disconnect,a("extend-dojo")&&i.mixin(e,v),v});