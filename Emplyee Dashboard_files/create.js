define(["../_base/lang"],function(r){return function(t,e,a,o){a=a||Error;var s=function(r){
if(a===Error){Error.captureStackTrace&&Error.captureStackTrace(this,s);var t,o=Error.call(this,r);
for(t in o)o.hasOwnProperty(t)&&(this[t]=o[t]);this.message=r,this.stack=o.stack}else a.apply(this,arguments);
e&&e.apply(this,arguments)};return s.prototype=r.delegate(a.prototype,o),s.prototype.name=t,
s.prototype.constructor=s,s}});