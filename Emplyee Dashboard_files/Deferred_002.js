define(["./kernel","../Deferred","../promise/Promise","../errors/CancelError","../has","./lang","../when"],function(e,r,t,n,i,s,c){
var o=function(){},d=Object.freeze||function(){},a=e.Deferred=function(e){function c(e){
if(l)throw new Error("This deferred has already been resolved");h=e,l=!0,f()}function f(){
for(var e;!e&&m;){var t=m;m=m.next,(e=t.progress==o)&&(l=!1);var n=p?t.error:t.resolved;
if(i("config-useDeferredInstrumentation")&&p&&r.instrumentRejected&&r.instrumentRejected(h,!!n),
n)try{var c=n(h);if(c&&"function"==typeof c.then){c.then(s.hitch(t.deferred,"resolve"),s.hitch(t.deferred,"reject"),s.hitch(t.deferred,"progress"));
continue}var d=e&&void 0===c;e&&!d&&(p=c instanceof Error),t.deferred[d&&p?"reject":"resolve"](d?h:c);
}catch(a){t.deferred.reject(a)}else p?t.deferred.reject(h):t.deferred.resolve(h)}
}var h,l,u,v,p,j,m,g=this.promise=new t;this.isResolved=g.isResolved=function(){return 0==v;
},this.isRejected=g.isRejected=function(){return 1==v},this.isFulfilled=g.isFulfilled=function(){
return v>=0},this.isCanceled=g.isCanceled=function(){return u},this.resolve=this.callback=function(e){
this.fired=v=0,this.results=[e,null],c(e)},this.reject=this.errback=function(e){p=!0,
this.fired=v=1,i("config-useDeferredInstrumentation")&&r.instrumentRejected&&r.instrumentRejected(e,!!m),
c(e),this.results=[null,e]},this.progress=function(e){for(var r=m;r;){var t=r.progress;
t&&t(e),r=r.next}},this.addCallbacks=function(e,r){return this.then(e,r,o),this},
g.then=this.then=function(e,r,t){var n=t==o?this:new a(g.cancel),i={resolved:e,error:r,
progress:t,deferred:n};return m?j=j.next=i:m=j=i,l&&f(),n.promise};var b=this;g.cancel=this.cancel=function(){
if(!l){var r=e&&e(b);l||(r instanceof Error||(r=new n(r)),r.log=!1,b.reject(r))}u=!0;
},d(g)};return s.extend(a,{addCallback:function(r){return this.addCallbacks(s.hitch.apply(e,arguments));
},addErrback:function(r){return this.addCallbacks(null,s.hitch.apply(e,arguments));
},addBoth:function(r){var t=s.hitch.apply(e,arguments);return this.addCallbacks(t,t);
},fired:-1}),a.when=e.when=c,a});