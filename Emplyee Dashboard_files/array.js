define(["./kernel","../has","./lang"],function(n,r,t){function e(n){return l[n]=new Function("item","index","array",n);
}function f(n){var r=!n;return function(t,f,i){var o,u=0,s=t&&t.length||0;if(s&&"string"==typeof t&&(t=t.split("")),
"string"==typeof f&&(f=l[f]||e(f)),i){for(;s>u;++u)if(o=!f.call(i,t[u],u,t),n^o)return!o;
}else for(;s>u;++u)if(o=!f(t[u],u,t),n^o)return!o;return r}}function i(n){var r=1,t=0,e=0;
return n||(r=t=e=-1),function(f,i,l,s){if(s&&r>0)return u.lastIndexOf(f,i,l);var a,c=f&&f.length||0,p=n?c+e:t;
for(l===o?a=n?t:c+e:0>l?(a=c+l,0>a&&(a=t)):a=l>=c?c+e:l,c&&"string"==typeof f&&(f=f.split(""));a!=p;a+=r)if(f[a]==i)return a;
return-1}}var o,l={},u={every:f(!1),some:f(!0),indexOf:i(!0),lastIndexOf:i(!1),forEach:function(n,r,t){
var f=0,i=n&&n.length||0;if(i&&"string"==typeof n&&(n=n.split("")),"string"==typeof r&&(r=l[r]||e(r)),
t)for(;i>f;++f)r.call(t,n[f],f,n);else for(;i>f;++f)r(n[f],f,n)},map:function(n,r,t,f){
var i=0,o=n&&n.length||0,u=new(f||Array)(o);if(o&&"string"==typeof n&&(n=n.split("")),
"string"==typeof r&&(r=l[r]||e(r)),t)for(;o>i;++i)u[i]=r.call(t,n[i],i,n);else for(;o>i;++i)u[i]=r(n[i],i,n);
return u},filter:function(n,r,t){var f,i=0,o=n&&n.length||0,u=[];if(o&&"string"==typeof n&&(n=n.split("")),
"string"==typeof r&&(r=l[r]||e(r)),t)for(;o>i;++i)f=n[i],r.call(t,f,i,n)&&u.push(f);else for(;o>i;++i)f=n[i],
r(f,i,n)&&u.push(f);return u},clearCache:function(){l={}}};return r("extend-dojo")&&t.mixin(n,u),
u});