define(["../../_base/array","../../_base/lang","../../when"],function(t,n,e){var r=function(a){
function u(n){a[n]||(a[n]=function(){var u=arguments;return e(a,function(e){return Array.prototype.unshift.call(u,e),
r(t[n].apply(t,u))})})}return a?(a.then&&(a=n.delegate(a)),u("forEach"),u("filter"),
u("map"),a.total||(a.total=e(a,function(t){return t.length})),a):a};return n.setObject("dojo.store.util.QueryResults",r),
r});