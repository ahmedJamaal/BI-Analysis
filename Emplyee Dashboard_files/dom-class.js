define(["./_base/lang","./_base/array","./dom"],function(e,n,t){function r(e){if("string"==typeof e||e instanceof String){
if(e&&!a.test(e))return f[0]=e,f;var t=e.split(a);return t.length&&!t[0]&&t.shift(),
t.length&&!t[t.length-1]&&t.pop(),t}return e?n.filter(e,function(e){return e}):[];
}var i,o="className",a=/\s+/,f=[""],d={};return i={contains:function(e,n){return(" "+t.byId(e)[o]+" ").indexOf(" "+n+" ")>=0;
},add:function(e,n){e=t.byId(e),n=r(n);var i,a=e[o];a=a?" "+a+" ":" ",i=a.length;for(var f,d=0,l=n.length;l>d;++d)f=n[d],
f&&a.indexOf(" "+f+" ")<0&&(a+=f+" ");i<a.length&&(e[o]=a.substr(1,a.length-2))},
remove:function(n,i){n=t.byId(n);var a;if(void 0!==i){i=r(i),a=" "+n[o]+" ";for(var f=0,d=i.length;d>f;++f)a=a.replace(" "+i[f]+" "," ");
a=e.trim(a)}else a="";n[o]!=a&&(n[o]=a)},replace:function(e,n,r){e=t.byId(e),d[o]=e[o],
i.remove(d,r),i.add(d,n),e[o]!==d[o]&&(e[o]=d[o])},toggle:function(e,n,o){if(e=t.byId(e),
void 0===o){n=r(n);for(var a,f=0,d=n.length;d>f;++f)a=n[f],i[i.contains(e,a)?"remove":"add"](e,a);
}else i[o?"add":"remove"](e,n);return o}}});