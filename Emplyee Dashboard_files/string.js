define(["./_base/kernel","./_base/lang"],function(t,r){var e={};return r.setObject("dojo.string",e),
e.rep=function(t,r){if(0>=r||!t)return"";for(var e=[];1&r&&e.push(t),r>>=1;)t+=t;return e.join("");
},e.pad=function(t,r,n,i){n||(n="0");var u=String(t),a=e.rep(n,Math.ceil((r-u.length)/n.length));
return i?u+a:a+u},e.substitute=function(e,n,i,u){return u=u||t.global,i=i?r.hitch(u,i):function(t){
return t},e.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(t,e,a){var c=r.getObject(e,!1,n);
return a&&(c=r.getObject(a,!1,u).call(u,c,e)),i(c,e).toString()})},e.trim=String.prototype.trim?r.trim:function(t){
t=t.replace(/^\s+/,"");for(var r=t.length-1;r>=0;r--)if(/\S/.test(t.charAt(r))){t=t.substring(0,r+1);
break}return t},e});