define(["../errors/RequestError","./watch","./handlers","./util","../has"],function(e,t,n,r,a){
function o(t,a){var o=t.xhr;if(t.status=t.xhr.status,t.text=o.responseText,"xml"===t.options.handleAs&&(t.data=o.responseXML),
!a)try{n(t)}catch(i){a=i}a?this.reject(a):r.checkStatus(o.status)?this.resolve(t):(a=new e("Unable to load "+t.url+" status: "+o.status,t),
this.reject(a))}function i(e){return this.xhr.getResponseHeader(e)}function s(n,v,p){
var x=r.parseArgs(n,r.deepCreate(h,v),a("native-formdata")&&v&&v.data&&v.data instanceof FormData);
n=x.url,v=x.options;var w,m=function(){w&&w()},y=r.deferred(x,f,d,u,o,m),L=x.xhr=s._create();
if(!L)return y.cancel(new e("XHR was not created")),p?y:y.promise;x.getHeader=i,c&&(w=c(L,y,x));
var X=v.data,H=!v.sync,M=v.method;try{L.open(M,n,H,v.user||l,v.password||l),v.withCredentials&&(L.withCredentials=v.withCredentials);
var R=v.headers,T="application/x-www-form-urlencoded";if(R)for(var b in R)"content-type"===b.toLowerCase()?T=R[b]:R[b]&&L.setRequestHeader(b,R[b]);
T&&T!==!1&&L.setRequestHeader("Content-Type",T),R&&"X-Requested-With"in R||L.setRequestHeader("X-Requested-With","XMLHttpRequest"),
r.notify&&r.notify.emit("send",x,y.promise.cancel),L.send(X)}catch(q){y.reject(q);
}return t(y),L=null,p?y:y.promise}a.add("native-xhr",function(){return"undefined"!=typeof XMLHttpRequest;
}),a.add("dojo-force-activex-xhr",function(){return a("activex")&&!document.addEventListener&&"file:"===window.location.protocol;
}),a.add("native-xhr2",function(){if(a("native-xhr")){var e=new XMLHttpRequest;return"undefined"!=typeof e.addEventListener&&("undefined"==typeof opera||"undefined"!=typeof e.upload);
}}),a.add("native-formdata",function(){return"function"==typeof FormData});var d,u,c,f;
a("native-xhr2")?(d=function(e){return!this.isFulfilled()},f=function(e,t){t.xhr.abort();
},c=function(t,n,r){function a(e){n.handleResponse(r)}function o(t){var a=t.target,o=new e("Unable to load "+r.url+" status: "+a.status,r);
n.handleResponse(r,o)}function i(e){e.lengthComputable&&(r.loaded=e.loaded,r.total=e.total,
n.progress(r))}return t.addEventListener("load",a,!1),t.addEventListener("error",o,!1),
t.addEventListener("progress",i,!1),function(){t.removeEventListener("load",a,!1),
t.removeEventListener("error",o,!1),t.removeEventListener("progress",i,!1),t=null;
}}):(d=function(e){return e.xhr.readyState},u=function(e){return 4===e.xhr.readyState;
},f=function(e,t){var n=t.xhr,r=typeof n.abort;("function"===r||"object"===r||"unknown"===r)&&n.abort();
});var l,h={data:null,query:null,sync:!1,method:"GET"};if(s._create=function(){throw new Error("XMLHTTP not available");
},a("native-xhr")&&!a("dojo-force-activex-xhr"))s._create=function(){return new XMLHttpRequest;
};else if(a("activex"))try{new ActiveXObject("Msxml2.XMLHTTP"),s._create=function(){
return new ActiveXObject("Msxml2.XMLHTTP")}}catch(v){try{new ActiveXObject("Microsoft.XMLHTTP"),
s._create=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}catch(v){}}return r.addCommonMethods(s),
s});