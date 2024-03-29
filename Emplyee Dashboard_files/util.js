define(["exports","../errors/RequestError","../errors/CancelError","../Deferred","../io-query","../_base/array","../_base/lang","../promise/Promise"],function(e,t,r,n,o,a,c,i){
function u(e){return s(e)}function f(e){return e.data||e.text}e.deepCopy=function(t,r){
for(var n in r){var o=t[n],a=r[n];o!==a&&(o&&"object"==typeof o&&a&&"object"==typeof a?e.deepCopy(o,a):t[n]=a);
}return t},e.deepCreate=function(t,r){r=r||{};var n,o,a=c.delegate(t);for(n in t)o=t[n],
o&&"object"==typeof o&&(a[n]=e.deepCreate(o,r[n]));return e.deepCopy(a,r)};var s=Object.freeze||function(e){
return e};e.deferred=function(o,a,p,d,h,y){function l(e){throw e.response=o,e}var v=new n(function(e){
return a&&a(v,o),e&&(e instanceof t||e instanceof r)?e:new r("Request canceled",o);
});v.response=o,v.isValid=p,v.isReady=d,v.handleResponse=h;var C=v.then(u).otherwise(l);
e.notify&&C.then(c.hitch(e.notify,"emit","load"),c.hitch(e.notify,"emit","error"));
var E=C.then(f),b=new i;for(var w in E)E.hasOwnProperty(w)&&(b[w]=E[w]);return b.response=C,
s(b),y&&v.then(function(e){y.call(v,e)},function(e){y.call(v,o,e)}),v.promise=b,v.then=b.then,
v},e.addCommonMethods=function(e,t){a.forEach(t||["GET","POST","PUT","DELETE"],function(t){
e[("DELETE"===t?"DEL":t).toLowerCase()]=function(r,n){return n=c.delegate(n||{}),
n.method=t,e(r,n)}})},e.parseArgs=function(e,t,r){var n=t.data,a=t.query;return n&&!r&&"object"==typeof n&&(t.data=o.objectToQuery(n)),
a?("object"==typeof a&&(a=o.objectToQuery(a)),t.preventCache&&(a+=(a?"&":"")+"request.preventCache="+ +new Date)):t.preventCache&&(a="request.preventCache="+ +new Date),
e&&a&&(e+=(~e.indexOf("?")?"&":"?")+a),{url:e,options:t,getHeader:function(e){return null;
}}},e.checkStatus=function(e){return e=e||0,e>=200&&300>e||304===e||1223===e||!e};
});