define(["dojo/_base/kernel","dojo/_base/lang","../_Widget","../_Container","./_ContentPaneResizeMixin","dojo/string","dojo/html","dojo/i18n!../nls/loading","dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/_base/xhr","dojo/i18n","dojo/when"],function(t,e,n,r,o,s,i,d,a,h,c,u,l,f,_,g,p){
return h("dijit.layout.ContentPane",[n,r,o],{href:"",content:"",extractContent:!1,
parseOnLoad:!0,parserScope:t._scopeName,preventCache:!1,preload:!1,refreshOnShow:!1,
loadingMessage:"<span class='dijitContentPaneLoading'><span class='dijitInline dijitIconLoading'></span>${loadingState}</span>",
errorMessage:"<span class='dijitContentPaneError'><span class='dijitInline dijitIconError'></span>${errorState}</span>",
isLoaded:!1,baseClass:"dijitContentPane",ioArgs:{},onLoadDeferred:null,_setTitleAttr:null,
stopParser:!0,template:!1,markupFactory:function(t,e,n){var r=new n(t,e);return!r.href&&r._contentSetter&&r._contentSetter.parseDeferred&&!r._contentSetter.parseDeferred.isFulfilled()?r._contentSetter.parseDeferred.then(function(){
return r}):r},create:function(t,n){if(!(t&&t.template||!n||"href"in t||"content"in t)){
n=u.byId(n);for(var r=n.ownerDocument.createDocumentFragment();n.firstChild;)r.appendChild(n.firstChild);
t=e.delegate(t,{content:r})}this.inherited(arguments,[t,n])},postMixInProperties:function(){
this.inherited(arguments);var t=g.getLocalization("dijit","loading",this.lang);this.loadingMessage=s.substitute(this.loadingMessage,t),
this.errorMessage=s.substitute(this.errorMessage,t)},buildRendering:function(){this.inherited(arguments),
this.containerNode||(this.containerNode=this.domNode),this.domNode.removeAttribute("title");
},startup:function(){this.inherited(arguments),this._contentSetter&&a.forEach(this._contentSetter.parseResults,function(t){
t._started||t._destroyed||!e.isFunction(t.startup)||(t.startup(),t._started=!0)},this);
},_startChildren:function(){a.forEach(this.getChildren(),function(t){t._started||t._destroyed||!e.isFunction(t.startup)||(t.startup(),
t._started=!0)}),this._contentSetter&&a.forEach(this._contentSetter.parseResults,function(t){
t._started||t._destroyed||!e.isFunction(t.startup)||(t.startup(),t._started=!0)},this);
},setHref:function(e){return t.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.","","2.0"),
this.set("href",e)},_setHrefAttr:function(t){return this.cancel(),this.onLoadDeferred=new c(e.hitch(this,"cancel")),
this.onLoadDeferred.then(e.hitch(this,"onLoad")),this._set("href",t),this.preload||this._created&&this._isShown()?this._load():this._hrefChanged=!0,
this.onLoadDeferred},setContent:function(e){t.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.","","2.0"),
this.set("content",e)},_setContentAttr:function(t){return this._set("href",""),this.cancel(),
this.onLoadDeferred=new c(e.hitch(this,"cancel")),this._created&&this.onLoadDeferred.then(e.hitch(this,"onLoad")),
this._setContent(t||""),this._isDownloaded=!1,this.onLoadDeferred},_getContentAttr:function(){
return this.containerNode.innerHTML},cancel:function(){this._xhrDfd&&-1==this._xhrDfd.fired&&this._xhrDfd.cancel(),
delete this._xhrDfd,this.onLoadDeferred=null},destroy:function(){this.cancel(),this.inherited(arguments);
},destroyRecursive:function(t){this._beingDestroyed||this.inherited(arguments)},_onShow:function(){
return this.inherited(arguments),!this.href||this._xhrDfd||this.isLoaded&&!this._hrefChanged&&!this.refreshOnShow?void 0:this.refresh();
},refresh:function(){return this.cancel(),this.onLoadDeferred=new c(e.hitch(this,"cancel")),
this.onLoadDeferred.then(e.hitch(this,"onLoad")),this._load(),this.onLoadDeferred;
},_load:function(){this._setContent(this.onDownloadStart(),!0);var t=this,n={preventCache:this.preventCache||this.refreshOnShow,
url:this.href,handleAs:"text"};e.isObject(this.ioArgs)&&e.mixin(n,this.ioArgs);var r,o=this._xhrDfd=(this.ioMethod||_.get)(n);
o.then(function(e){r=e;try{return t._isDownloaded=!0,t._setContent(e,!1)}catch(n){
t._onError("Content",n)}},function(e){return o.canceled||t._onError("Download",e),
delete t._xhrDfd,e}).then(function(){return t.onDownloadEnd(),delete t._xhrDfd,r}),
delete this._hrefChanged},_onLoadHandler:function(t){this._set("isLoaded",!0);try{
this.onLoadDeferred.resolve(t)}catch(e){console.error("Error "+this.widgetId+" running custom onLoad code: "+e.message);
}},_onUnloadHandler:function(){this._set("isLoaded",!1);try{this.onUnload()}catch(t){
console.error("Error "+this.widgetId+" running custom onUnload code: "+t.message);
}},destroyDescendants:function(t){this.isLoaded&&this._onUnloadHandler();var e=this._contentSetter;
a.forEach(this.getChildren(),function(e){e.destroyRecursive?e.destroyRecursive(t):e.destroy&&e.destroy(t),
e._destroyed=!0}),e&&(a.forEach(e.parseResults,function(e){e._destroyed||(e.destroyRecursive?e.destroyRecursive(t):e.destroy&&e.destroy(t),
e._destroyed=!0)}),delete e.parseResults),t||f.empty(this.containerNode),delete this._singleChild;
},_setContent:function(t,n){this.destroyDescendants();var r=this._contentSetter;r&&r instanceof i._ContentSetter||(r=this._contentSetter=new i._ContentSetter({
node:this.containerNode,_onError:e.hitch(this,this._onError),onContentError:e.hitch(this,function(t){
var e=this.onContentError(t);try{this.containerNode.innerHTML=e}catch(t){console.error("Fatal "+this.id+" could not change content due to "+t.message,t);
}})}));var o=e.mixin({cleanContent:this.cleanContent,extractContent:this.extractContent,
parseContent:!t.domNode&&this.parseOnLoad,parserScope:this.parserScope,startup:!1,
dir:this.dir,lang:this.lang,textDir:this.textDir},this._contentSetterParams||{}),s=r.set(e.isObject(t)&&t.domNode?t.domNode:t,o),d=this;
return p(s&&s.then?s:r.parseDeferred,function(){delete d._contentSetterParams,n||(d._started&&(d._startChildren(),
d._scheduleLayout()),d._onLoadHandler(t))})},_onError:function(t,e,n){this.onLoadDeferred.reject(e);
var r=this["on"+t+"Error"].call(this,e);n?console.error(n,e):r&&this._setContent(r,!0);
},onLoad:function(){},onUnload:function(){},onDownloadStart:function(){return this.loadingMessage;
},onContentError:function(){},onDownloadError:function(){return this.errorMessage;
},onDownloadEnd:function(){}})});