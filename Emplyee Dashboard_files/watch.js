define(["./util","../errors/RequestTimeoutError","../errors/CancelError","../_base/array","../has!host-browser?../_base/window:","../has!host-browser?dom-addeventlistener?:../on:"],function(e,n,t,o,i,s){
function l(){for(var e,t=+new Date,o=0;o<r.length&&(e=r[o]);o++){var i=e.response,s=i.options;
e.isCanceled&&e.isCanceled()||e.isValid&&!e.isValid(i)?(r.splice(o--,1),a._onAction&&a._onAction()):e.isReady&&e.isReady(i)?(r.splice(o--,1),
e.handleResponse(i),a._onAction&&a._onAction()):e.startTime&&e.startTime+(s.timeout||0)<t&&(r.splice(o--,1),
e.cancel(new n("Timeout exceeded",i)),a._onAction&&a._onAction())}a._onInFlight&&a._onInFlight(e),
r.length||(clearInterval(c),c=null)}function a(e){e.response.options.timeout&&(e.startTime=+new Date),
e.isFulfilled()||(r.push(e),c||(c=setInterval(l,50)),e.response.options.sync&&l());
}var c=null,r=[];return a.cancelAll=function(){try{o.forEach(r,function(e){try{e.cancel(new t("All requests canceled."));
}catch(n){}})}catch(e){}},i&&s&&i.doc.attachEvent&&s(i.global,"unload",function(){
a.cancelAll()}),a});