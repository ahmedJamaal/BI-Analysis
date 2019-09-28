define(["./has","./_base/lang","./errors/CancelError","./promise/Promise","./has!config-deferredInstrumentation?./promise/instrumentation"],function(e,r,n,t,i){
"use strict";var c=0,o=1,u=2,f="This deferred has already been fulfilled.",s=Object.freeze||function(){},a=function(r,n,t,i,c){
e("config-deferredInstrumentation")&&n===u&&p.instrumentRejected&&0===r.length&&p.instrumentRejected(t,!1,i,c);
for(var o=0;o<r.length;o++)d(r[o],n,t,i)},d=function(r,n,t,i){var f=r[n],s=r.deferred;
if(f)try{var a=f(t);if(n===c)"undefined"!=typeof a&&h(s,n,a);else{if(a&&"function"==typeof a.then)return r.cancel=a.cancel,
void a.then(l(s,o),l(s,u),l(s,c));h(s,o,a)}}catch(d){h(s,u,d)}else h(s,n,t);e("config-deferredInstrumentation")&&n===u&&p.instrumentRejected&&p.instrumentRejected(t,!!f,i,s.promise);
},l=function(e,r){return function(n){h(e,r,n)}},h=function(e,r,n){if(!e.isCanceled())switch(r){
case c:e.progress(n);break;case o:e.resolve(n);break;case u:e.reject(n)}},p=function(r){
var i,l,h,m=this.promise=new t,v=this,w=!1,g=[];e("config-deferredInstrumentation")&&Error.captureStackTrace&&(Error.captureStackTrace(v,p),
Error.captureStackTrace(m,p)),this.isResolved=m.isResolved=function(){return i===o;
},this.isRejected=m.isRejected=function(){return i===u},this.isFulfilled=m.isFulfilled=function(){
return!!i},this.isCanceled=m.isCanceled=function(){return w},this.progress=function(e,r){
if(i){if(r===!0)throw new Error(f);return m}return a(g,c,e,null,v),m},this.resolve=function(e,r){
if(i){if(r===!0)throw new Error(f);return m}return a(g,i=o,l=e,null,v),g=null,m};var j=this.reject=function(r,n){
if(i){if(n===!0)throw new Error(f);return m}return e("config-deferredInstrumentation")&&Error.captureStackTrace&&Error.captureStackTrace(h={},j),
a(g,i=u,l=r,h,v),g=null,m};this.then=m.then=function(e,r,n){var t=[n,e,r];return t.cancel=m.cancel,
t.deferred=new p(function(e){return t.cancel&&t.cancel(e)}),i&&!g?d(t,i,l,h):g.push(t),
t.deferred.promise},this.cancel=m.cancel=function(e,t){if(i){if(t===!0)throw new Error(f);
}else{if(r){var c=r(e);e="undefined"==typeof c?e:c}if(w=!0,!i)return"undefined"==typeof e&&(e=new n),
j(e),e;if(i===u&&l===e)return e}},s(m)};return p.prototype.toString=function(){return"[object Deferred]";
},i&&i(p),p});