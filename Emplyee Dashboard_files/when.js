define(["./Deferred","./promise/Promise"],function(e,n){"use strict";return function(r,t,i,o){
var s=r&&"function"==typeof r.then,f=s&&r instanceof n;if(!s)return arguments.length>1?t?t(r):r:(new e).resolve(r);
if(!f){var c=new e(r.cancel);r.then(c.resolve,c.reject,c.progress),r=c.promise}return t||i||o?r.then(t,i,o):r;
}});