define(["./has!dom-addeventlistener?:./aspect","./_base/kernel","./sniff"],function(e,t,n){
"use strict";function r(e,t,r,o,i){var a=t.match(/(.*):(.*)/);if(a)return t=a[2],
a=a[1],u.selector(a,t).call(i,e,r);if(n("touch")&&(c.test(t)&&(r=C(r)),n("event-orientationchange")||"orientationchange"!=t||(t="resize",
e=window,r=C(r))),p&&(r=p(r)),e.addEventListener){var s=t in d,f=s?d[t]:t;return e.addEventListener(f,r,s),
{remove:function(){e.removeEventListener(f,r,s)}}}if(t="on"+t,y&&e.attachEvent)return y(e,t,r);
throw new Error("Target must be an event emitter")}function o(){this.cancelable=!1,
this.defaultPrevented=!0}function i(){this.bubbles=!1}if(n("dom")){var a=window.ScriptEngineMajorVersion;
n.add("jscript",a&&a()+ScriptEngineMinorVersion()/10),n.add("event-orientationchange",n("touch")&&!n("android")),
n.add("event-stopimmediatepropagation",window.Event&&!!window.Event.prototype&&!!window.Event.prototype.stopImmediatePropagation),
n.add("event-focusin",function(e,t,n){return"onfocusin"in n}),n("touch")&&n.add("touch-can-modify-event-delegate",function(){
var e=function(){};e.prototype=document.createEvent("MouseEvents");try{return(new e).target=null,
!0}catch(t){return!1}})}var u=function(e,t,n,o){return"function"!=typeof e.on||"function"==typeof t||e.nodeType?u.parse(e,t,n,r,o,this):e.on(t,n);
};u.pausable=function(e,t,n,r){var o,i=u(e,t,function(){return o?void 0:n.apply(this,arguments);
},r);return i.pause=function(){o=!0},i.resume=function(){o=!1},i},u.once=function(e,t,n,r){
var o=u(e,t,function(){return o.remove(),n.apply(this,arguments)});return o},u.parse=function(e,t,n,r,o,i){
if(t.call)return t.call(i,e,n);if(t instanceof Array)a=t;else if(t.indexOf(",")>-1)var a=t.split(/\s*,\s*/);
if(a){for(var c,s=[],f=0;c=a[f++];)s.push(u.parse(e,c,n,r,o,i));return s.remove=function(){
for(var e=0;e<s.length;e++)s[e].remove()},s}return r(e,t,n,o,i)};var c=/^touch/;u.matches=function(e,n,r,o,i){
for(i=i&&i.matches?i:t.query,o=o!==!1,1!=e.nodeType&&(e=e.parentNode);!i.matches(e,n,r);)if(e==r||o===!1||!(e=e.parentNode)||1!=e.nodeType)return!1;
return e},u.selector=function(e,t,n){return function(r,o){function i(t){return u.matches(t,e,r,n,a);
}var a="function"==typeof e?{matches:e}:this,c=t.bubble;return c?u(r,c(i),o):u(r,t,function(e){
var t=i(e.target);return t&&o.call(t,e)})}};var s=[].slice,f=u.emit=function(e,t,n){
var r=s.call(arguments,2),a="on"+t;if("parentNode"in e){var u=r[0]={};for(var c in n)u[c]=n[c];
u.preventDefault=o,u.stopPropagation=i,u.target=e,u.type=t,n=u}do e[a]&&e[a].apply(e,r);while(n&&n.bubbles&&(e=e.parentNode));
return n&&n.cancelable&&n},d=n("event-focusin")?{}:{focusin:"focus",focusout:"blur"
};if(!n("event-stopimmediatepropagation"))var l=function(){this.immediatelyStopped=!0,
this.modified=!0},p=function(e){return function(t){return t.immediatelyStopped?void 0:(t.stopImmediatePropagation=l,
e.apply(this,arguments))}};if(n("dom-addeventlistener"))u.emit=function(e,t,n){if(e.dispatchEvent&&document.createEvent){
var r=e.ownerDocument||document,o=r.createEvent("HTMLEvents");o.initEvent(t,!!n.bubbles,!!n.cancelable);
for(var i in n)i in o||(o[i]=n[i]);return e.dispatchEvent(o)&&o}return f.apply(u,arguments);
};else{u._fixEvent=function(e,t){if(!e){var n=t&&(t.ownerDocument||t.document||t).parentWindow||window;
e=n.event}if(!e)return e;try{v&&e.type==v.type&&e.srcElement==v.target&&(e=v)}catch(r){}
if(!e.target)switch(e.target=e.srcElement,e.currentTarget=t||e.srcElement,"mouseover"==e.type&&(e.relatedTarget=e.fromElement),
"mouseout"==e.type&&(e.relatedTarget=e.toElement),e.stopPropagation||(e.stopPropagation=w,
e.preventDefault=E),e.type){case"keypress":var o="charCode"in e?e.charCode:e.keyCode;
10==o?(o=0,e.keyCode=13):13==o||27==o?o=0:3==o&&(o=99),e.charCode=o,g(e)}return e;
};var v,h=function(e){this.handle=e};h.prototype.remove=function(){delete _dojoIEListeners_[this.handle];
};var m=function(e){return function(t){t=u._fixEvent(t,this);var n=e.call(this,t);
return t.modified&&(v||setTimeout(function(){v=null}),v=t),n}},y=function(t,r,o){
if(o=m(o),((t.ownerDocument?t.ownerDocument.parentWindow:t.parentWindow||t.window||window)!=top||n("jscript")<5.8)&&!n("config-_allow_leaks")){
"undefined"==typeof _dojoIEListeners_&&(_dojoIEListeners_=[]);var i=t[r];if(!i||!i.listeners){
var a=i;i=Function("event","var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}"),
i.listeners=[],t[r]=i,i.global=this,a&&i.listeners.push(_dojoIEListeners_.push(a)-1);
}var u;return i.listeners.push(u=i.global._dojoIEListeners_.push(o)-1),new h(u)}return e.after(t,r,o,!0);
},g=function(e){e.keyChar=e.charCode?String.fromCharCode(e.charCode):"",e.charOrCode=e.keyChar||e.keyCode;
},w=function(){this.cancelBubble=!0},E=u._preventDefault=function(){if(this.bubbledKeyCode=this.keyCode,
this.ctrlKey)try{this.keyCode=0}catch(e){}this.defaultPrevented=!0,this.returnValue=!1,
this.modified=!0}}if(n("touch"))var b=function(){},_=window.orientation,C=function(e){
return function(t){var r=t.corrected;if(!r){var o=t.type;try{delete t.type}catch(i){}
if(t.type){if(n("touch-can-modify-event-delegate"))b.prototype=t,r=new b;else{r={};
for(var a in t)r[a]=t[a]}r.preventDefault=function(){t.preventDefault()},r.stopPropagation=function(){
t.stopPropagation()}}else r=t,r.type=o;if(t.corrected=r,"resize"==o)return _==window.orientation?null:(_=window.orientation,
r.type="orientationchange",e.call(this,r));"rotation"in r||(r.rotation=0,r.scale=1);
var u=r.changedTouches[0];for(var c in u)delete r[c],r[c]=u[c]}return e.call(this,r);
}};return u});