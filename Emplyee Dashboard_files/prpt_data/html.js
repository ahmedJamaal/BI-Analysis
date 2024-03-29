define(["./_base/kernel","./_base/lang","./_base/array","./_base/declare","./dom","./dom-construct","./parser"],function(t,e,n,r,o,s,i){
var a=0,c={_secureForInnerHtml:function(t){return t.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/gi,"");
},_emptyNode:s.empty,_setNodeContent:function(t,n){if(s.empty(t),n)if("string"==typeof n&&(n=s.toDom(n,t.ownerDocument)),
!n.nodeType&&e.isArrayLike(n))for(var r=n.length,o=0;o<n.length;o=r==n.length?o+1:0)s.place(n[o],t,"last");else s.place(n,t,"last");
return t},_ContentSetter:r("dojo.html._ContentSetter",null,{node:"",content:"",id:"",
cleanContent:!1,extractContent:!1,parseContent:!1,parserScope:t._scopeName,startup:!0,
constructor:function(t,n){e.mixin(this,t||{}),n=this.node=o.byId(this.node||n),this.id||(this.id=["Setter",n?n.id||n.tagName:"",a++].join("_"));
},set:function(t,e){void 0!==t&&(this.content=t),e&&this._mixin(e),this.onBegin(),
this.setContent();var n=this.onEnd();return n&&n.then?n:this.node},setContent:function(){
var t=this.node;if(!t)throw new Error(this.declaredClass+": setContent given no node");
try{t=c._setNodeContent(t,this.content)}catch(e){var n=this.onContentError(e);try{
t.innerHTML=n}catch(e){console.error("Fatal "+this.declaredClass+".setContent could not change content due to "+e.message,e);
}}this.node=t},empty:function(){this.parseDeferred&&(this.parseDeferred.isResolved()||this.parseDeferred.cancel(),
delete this.parseDeferred),this.parseResults&&this.parseResults.length&&(n.forEach(this.parseResults,function(t){
t.destroy&&t.destroy()}),delete this.parseResults),s.empty(this.node)},onBegin:function(){
var t=this.content;if(e.isString(t)&&(this.cleanContent&&(t=c._secureForInnerHtml(t)),
this.extractContent)){var n=t.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);n&&(t=n[1]);
}return this.empty(),this.content=t,this.node},onEnd:function(){return this.parseContent&&this._parse(),
this.node},tearDown:function(){delete this.parseResults,delete this.parseDeferred,
delete this.node,delete this.content},onContentError:function(t){return"Error occurred setting content: "+t;
},onExecError:function(t){return"Error occurred executing scripts: "+t},_mixin:function(t){
var e,n={};for(e in t)e in n||(this[e]=t[e])},_parse:function(){var t=this.node;try{
var e={};n.forEach(["dir","lang","textDir"],function(t){this[t]&&(e[t]=this[t])},this);
var r=this;this.parseDeferred=i.parse({rootNode:t,noStart:!this.startup,inherited:e,
scope:this.parserScope}).then(function(t){return r.parseResults=t},function(t){r._onError("Content",t,"Error parsing in _ContentSetter#"+this.id);
})}catch(o){this._onError("Content",o,"Error parsing in _ContentSetter#"+this.id);
}},_onError:function(t,e,n){var r=this["on"+t+"Error"].call(this,e);n?console.error(n,e):r&&c._setNodeContent(this.node,r,!0);
}}),set:function(t,n,r){if(void 0==n&&(console.warn("dojo.html.set: no cont argument provided, using empty string"),
n=""),r){var o=new c._ContentSetter(e.mixin(r,{content:n,node:t}));return o.set();
}return c._setNodeContent(t,n,!0)}};return e.setObject("dojo.html",c),c});