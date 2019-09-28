define(["./kernel","./sniff","require","../io-query","../dom","../dom-form","./Deferred","./config","./json","./lang","./array","../on","../aspect","../request/watch","../request/xhr","../request/util"],function(e,r,t,o,n,i,s,u,a,c,l,d,f,h,p,y){
e._xhrObj=p._create;var x=e.config;e.objectToQuery=o.objectToQuery,e.queryToObject=o.queryToObject,
e.fieldToObject=i.fieldToObject,e.formToObject=i.toObject,e.formToQuery=i.toQuery,
e.formToJson=i.toJson,e._blockAsync=!1;var m=e._contentHandlers=e.contentHandlers={
text:function(e){return e.responseText},json:function(e){return a.fromJson(e.responseText||null);
},"json-comment-filtered":function(e){u.useCommentedJson||console.warn("Consider using the standard mimetype:application/json. json-commenting can introduce security issues. To decrease the chances of hijacking, use the standard the 'json' handler and prefix your json with: {}&&\nUse djConfig.useCommentedJson=true to turn off this message.");
var r=e.responseText,t=r.indexOf("/*"),o=r.lastIndexOf("*/");if(-1==t||-1==o)throw new Error("JSON was not comment filtered");
return a.fromJson(r.substring(t+2,o))},javascript:function(r){return e.eval(r.responseText);
},xml:function(e){var t=e.responseXML;if(t&&r("dom-qsa2.1")&&!t.querySelectorAll&&r("dom-parser")&&(t=(new DOMParser).parseFromString(e.responseText,"application/xml")),
r("ie")&&(!t||!t.documentElement)){var o=function(e){return"MSXML"+e+".DOMDocument";
},n=["Microsoft.XMLDOM",o(6),o(4),o(3),o(2)];l.some(n,function(r){try{var o=new ActiveXObject(r);
o.async=!1,o.loadXML(e.responseText),t=o}catch(n){return!1}return!0})}return t},"json-comment-optional":function(e){
return e.responseText&&/^[^{\[]*\/\*/.test(e.responseText)?m["json-comment-filtered"](e):m.json(e);
}};e._ioSetArgs=function(r,t,u,a){var l={args:r,url:r.url},d=null;if(r.form){var f=n.byId(r.form),h=f.getAttributeNode("action");
l.url=l.url||(h?h.value:null),d=i.toObject(f)}var p=[{}];d&&p.push(d),r.content&&p.push(r.content),
r.preventCache&&p.push({"dojo.preventCache":(new Date).valueOf()}),l.query=o.objectToQuery(c.mixin.apply(null,p)),
l.handleAs=r.handleAs||"text";var y=new s(function(e){e.canceled=!0,t&&t(e);var r=e.ioArgs.error;
return r||(r=new Error("request cancelled"),r.dojoType="cancel",e.ioArgs.error=r),
r});y.addCallback(u);var m=r.load;m&&c.isFunction(m)&&y.addCallback(function(e){return m.call(r,e,l);
});var b=r.error;b&&c.isFunction(b)&&y.addErrback(function(e){return b.call(r,e,l);
});var T=r.handle;return T&&c.isFunction(T)&&y.addBoth(function(e){return T.call(r,e,l);
}),y.addErrback(function(e){return a(e,y)}),x.ioPublish&&e.publish&&l.args.ioPublish!==!1&&(y.addCallbacks(function(r){
return e.publish("/dojo/io/load",[y,r]),r},function(r){return e.publish("/dojo/io/error",[y,r]),
r}),y.addBoth(function(r){return e.publish("/dojo/io/done",[y,r]),r})),y.ioArgs=l,
y};var b=function(e){var r=m[e.ioArgs.handleAs](e.ioArgs.xhr);return void 0===r?null:r;
},T=function(e,r){return r.ioArgs.args.failOk||console.error(e),e},j=function(r){
0>=g&&(g=0,x.ioPublish&&e.publish&&(!r||r&&r.ioArgs.args.ioPublish!==!1)&&e.publish("/dojo/io/stop"));
},g=0;f.after(h,"_onAction",function(){g-=1}),f.after(h,"_onInFlight",j),e._ioCancelAll=h.cancelAll,
e._ioNotifyStart=function(r){x.ioPublish&&e.publish&&r.ioArgs.args.ioPublish!==!1&&(g||e.publish("/dojo/io/start"),
g+=1,e.publish("/dojo/io/send",[r]))},e._ioWatch=function(e,r,t,o){e.ioArgs.options=e.ioArgs.args;
c.mixin(e,{response:e.ioArgs,isValid:function(t){return r(e)},isReady:function(r){
return t(e)},handleResponse:function(r){return o(e)}}),h(e),j(e)};return e._ioAddQueryToUrl=function(e){
e.query.length&&(e.url+=(-1==e.url.indexOf("?")?"?":"&")+e.query,e.query=null)},e.xhr=function(r,t,o){
var n,i=e._ioSetArgs(t,function(e){n&&n.cancel()},b,T),s=i.ioArgs;"postData"in t?s.query=t.postData:"putData"in t?s.query=t.putData:"rawBody"in t?s.query=t.rawBody:(arguments.length>2&&!o||-1==="POST|PUT".indexOf(r.toUpperCase()))&&e._ioAddQueryToUrl(s);
var u={method:r,handleAs:"text",timeout:t.timeout,withCredentials:t.withCredentials,
ioArgs:s};"undefined"!=typeof t.headers&&(u.headers=t.headers),"undefined"!=typeof t.contentType&&(u.headers||(u.headers={}),
u.headers["Content-Type"]=t.contentType),"undefined"!=typeof s.query&&(u.data=s.query),
"undefined"!=typeof t.sync&&(u.sync=t.sync),e._ioNotifyStart(i);try{n=p(s.url,u,!0);
}catch(a){return i.cancel(),i}return i.ioArgs.xhr=n.response.xhr,n.then(function(){
i.resolve(i)}).otherwise(function(e){s.error=e,e.response&&(e.status=e.response.status,
e.responseText=e.response.text,e.xhr=e.response.xhr),i.reject(e)}),i},e.xhrGet=function(r){
return e.xhr("GET",r)},e.rawXhrPost=e.xhrPost=function(r){return e.xhr("POST",r,!0);
},e.rawXhrPut=e.xhrPut=function(r){return e.xhr("PUT",r,!0)},e.xhrDelete=function(r){
return e.xhr("DELETE",r)},e._isDocumentOk=function(e){return y.checkStatus(e.status);
},e._getText=function(r){var t;return e.xhrGet({url:r,sync:!0,load:function(e){t=e;
}}),t},c.mixin(e.xhr,{_xhrObj:e._xhrObj,fieldToObject:i.fieldToObject,formToObject:i.toObject,
objectToQuery:o.objectToQuery,formToQuery:i.toQuery,formToJson:i.toJson,queryToObject:o.queryToObject,
contentHandlers:m,_ioSetArgs:e._ioSetArgs,_ioCancelAll:e._ioCancelAll,_ioNotifyStart:e._ioNotifyStart,
_ioWatch:e._ioWatch,_ioAddQueryToUrl:e._ioAddQueryToUrl,_isDocumentOk:e._isDocumentOk,
_getText:e._getText,get:e.xhrGet,post:e.xhrPost,put:e.xhrPut,del:e.xhrDelete}),e.xhr;
});