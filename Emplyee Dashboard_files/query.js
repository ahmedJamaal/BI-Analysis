define(["./_base/kernel","./has","./dom","./on","./_base/array","./_base/lang","./selector/_loader","./selector/_loader!default"],function(t,n,r,e,i,u,a,o){
"use strict";function s(t,n){var e=function(e,i){if("string"==typeof i&&(i=r.byId(i),
!i))return new n([]);var u="string"==typeof e?t(e,i):e?e.end&&e.on?e:[e]:[];return u.end&&u.on?u:new n(u);
};if(e.matches=t.match||function(t,n,r){return e.filter([t],n,r).length>0},e.filter=t.filter||function(t,n,r){
return e(n,r).filter(function(n){return i.indexOf(t,n)>-1})},"function"!=typeof t){
var u=t.search;t=function(t,n){return u(n||document,t)}}return e}n.add("array-extensible",function(){
return 1==u.delegate([],{length:1}).length&&!n("bug-for-in-skips-shadowed")});var f=Array.prototype,c=f.slice,h=f.concat,l=i.forEach,p=function(t,n,r){
var e=new(r||this._NodeListCtor||w)(t);return n?e._stash(n):e},d=function(n,r,e){
return r=[0].concat(c.call(r,0)),e=e||t.global,function(t){return r[0]=t,n.apply(e,r);
}},_=function(t,n){return function(){return this.forEach(d(t,arguments,n)),this}},g=function(t,n){
return function(){return this.map(d(t,arguments,n))}},m=function(t,n){return function(){
return this.filter(d(t,arguments,n))}},v=function(n,r,e){return function(){var i=arguments,u=d(n,i,e);
return r.call(e||t.global,i)?this.map(u):(this.forEach(u),this)}},y=function(t){var r=this instanceof w&&n("array-extensible");
"number"==typeof t&&(t=Array(t));var e=t&&"length"in t?t:arguments;if(r||!e.sort){
for(var i=r?this:[],a=i.length=e.length,o=0;a>o;o++)i[o]=e[o];if(r)return i;e=i}return u._mixin(e,b),
e._NodeListCtor=function(t){return w(t)},e},w=y,b=w.prototype=n("array-extensible")?[]:{};
w._wrap=b._wrap=p,w._adaptAsMap=g,w._adaptAsForEach=_,w._adaptAsFilter=m,w._adaptWithCondition=v,
l(["slice","splice"],function(t){var n=f[t];b[t]=function(){return this._wrap(n.apply(this,arguments),"slice"==t?this:null);
}}),l(["indexOf","lastIndexOf","every","some"],function(n){var r=i[n];b[n]=function(){
return r.apply(t,[this].concat(c.call(arguments,0)))}}),u.extend(y,{constructor:w,
_NodeListCtor:w,toString:function(){return this.join(",")},_stash:function(t){return this._parent=t,
this},on:function(t,n){var r=this.map(function(r){return e(r,t,n)});return r.remove=function(){
for(var t=0;t<r.length;t++)r[t].remove()},r},end:function(){return this._parent?this._parent:new this._NodeListCtor(0);
},concat:function(t){var n=c.call(this,0),r=i.map(arguments,function(t){return c.call(t,0);
});return this._wrap(h.apply(n,r),this)},map:function(t,n){return this._wrap(i.map(this,t,n),this);
},forEach:function(t,n){return l(this,t,n),this},filter:function(t){var n=arguments,r=this,e=0;
if("string"==typeof t){if(r=x._filterResult(this,n[0]),1==n.length)return r._stash(this);
e=1}return this._wrap(i.filter(r,n[e],n[e+1]),this)},instantiate:function(t,n){var r=u.isFunction(t)?t:u.getObject(t);
return n=n||{},this.forEach(function(t){new r(n,t)})},at:function(){var t=new this._NodeListCtor(0);
return l(arguments,function(n){0>n&&(n=this.length+n),this[n]&&t.push(this[n])},this),
t._stash(this)}});var x=s(o,y);return t.query=s(o,function(t){return y(t)}),x.load=function(t,n,r){
a.load(t,n,function(t){r(s(t,y))})},t._filterQueryResult=x._filterResult=function(t,n,r){
return new y(x.filter(t,n,r))},t.NodeList=x.NodeList=y,x});