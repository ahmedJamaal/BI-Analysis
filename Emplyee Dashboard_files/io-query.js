define(["./_base/lang"],function(e){var r={};return{objectToQuery:function(n){var o=encodeURIComponent,i=[];
for(var t in n){var a=n[t];if(a!=r[t]){var f=o(t)+"=";if(e.isArray(a))for(var s=0,u=a.length;u>s;++s)i.push(f+o(a[s]));else i.push(f+o(a));
}}return i.join("&")},queryToObject:function(r){for(var n,o,i,t=decodeURIComponent,a=r.split("&"),f={},s=0,u=a.length;u>s;++s)if(i=a[s],
i.length){var c=i.indexOf("=");0>c?(n=t(i),o=""):(n=t(i.slice(0,c)),o=t(i.slice(c+1))),
"string"==typeof f[n]&&(f[n]=[f[n]]),e.isArray(f[n])?f[n].push(o):f[n]=o}return f;
}}});