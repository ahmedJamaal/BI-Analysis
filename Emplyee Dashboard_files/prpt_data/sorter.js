define(["../../_base/lang"],function(r){var t={};return r.setObject("dojo.data.util.sorter",t),
t.basicComparator=function(r,t){var n=-1;return null===r&&(r=void 0),null===t&&(t=void 0),
r==t?n=0:(r>t||null==r)&&(n=1),n},t.createSortFunction=function(r,n){function a(r,t,n,a){
return function(e,o){var u=a.getValue(e,r),i=a.getValue(o,r);return t*n(u,i)}}for(var e,o=[],u=n.comparatorMap,i=t.basicComparator,c=0;c<r.length;c++){
e=r[c];var f=e.attribute;if(f){var l=e.descending?-1:1,v=i;u&&("string"!=typeof f&&"toString"in f&&(f=f.toString()),
v=u[f]||i),o.push(a(f,l,v,n))}}return function(r,t){for(var n=0;n<o.length;){var a=o[n++](r,t);
if(0!==a)return a}return 0}},t});