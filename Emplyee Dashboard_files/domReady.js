define(["./has"],function(t){function e(t){f.push(t),d&&n()}function n(){if(!a){for(a=!0;f.length;)try{
f.shift()(r)}catch(t){console.log("Error on domReady callback: "+t)}a=!1,e._onQEmpty();
}}var a,o=this,r=document,c={loaded:1,complete:1},i="string"!=typeof r.readyState,d=!!c[r.readyState],f=[];
if(e.load=function(t,n,a){e(a)},e._Q=f,e._onQEmpty=function(){},i&&(r.readyState="loading"),
!d){var l=[],u=function(t){t=t||o.event,d||"readystatechange"==t.type&&!c[r.readyState]||(i&&(r.readyState="complete"),
d=1,n())},h=function(t,e){t.addEventListener(e,u,!1),f.push(function(){t.removeEventListener(e,u,!1);
})};if(!t("dom-addeventlistener")){h=function(t,e){e="on"+e,t.attachEvent(e,u),f.push(function(){
t.detachEvent(e,u)})};var s=r.createElement("div");try{s.doScroll&&null===o.frameElement&&l.push(function(){
try{return s.doScroll("left"),1}catch(t){}})}catch(y){}}if(h(r,"DOMContentLoaded"),
h(o,"load"),"onreadystatechange"in r?h(r,"readystatechange"):i||l.push(function(){
return c[r.readyState]}),l.length){var v=function(){if(!d){for(var t=l.length;t--;)if(l[t]())return void u("poller");
setTimeout(v,30)}};v()}}return e});