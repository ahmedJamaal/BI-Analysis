define(["require","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/mouse","dojo/on","dojo/touch","./_WidgetBase"],function(t,e,i,o,a,n,s,r,h){
var c,d=a.delegate(r,{mouseenter:n.enter,mouseleave:n.leave,keypress:i._keypress}),f=o("dijit._AttachMixin",null,{
constructor:function(){this._attachPoints=[],this._attachEvents=[]},buildRendering:function(){
this.inherited(arguments),this._attachTemplateNodes(this.domNode),this._beforeFillContent();
},_beforeFillContent:function(){},_attachTemplateNodes:function(t){for(var e=t;;)if(1==e.nodeType&&(this._processTemplateNode(e,function(t,e){
return t.getAttribute(e)},this._attach)||this.searchContainerNode)&&e.firstChild)e=e.firstChild;else{
if(e==t)return;for(;!e.nextSibling;)if(e=e.parentNode,e==t)return;e=e.nextSibling;
}},_processTemplateNode:function(t,e,i){var o=!0,n=this.attachScope||this,s=e(t,"dojoAttachPoint")||e(t,"data-dojo-attach-point");
if(s)for(var r,h=s.split(/\s*,\s*/);r=h.shift();)a.isArray(n[r])?n[r].push(t):n[r]=t,
o="containerNode"!=r,this._attachPoints.push(r);var c=e(t,"dojoAttachEvent")||e(t,"data-dojo-attach-event");
if(c)for(var d,f=c.split(/\s*,\s*/),l=a.trim;d=f.shift();)if(d){var u=null;if(-1!=d.indexOf(":")){
var _=d.split(":");d=l(_[0]),u=l(_[1])}else d=l(d);u||(u=d),this._attachEvents.push(i(t,d,a.hitch(n,u)));
}return o},_attach:function(e,i,o){return i=i.replace(/^on/,"").toLowerCase(),i="dijitclick"==i?c||(c=t("./a11yclick")):d[i]||i,
s(e,i,o)},_detachTemplateNodes:function(){var t=this.attachScope||this;e.forEach(this._attachPoints,function(e){
delete t[e]}),this._attachPoints=[],e.forEach(this._attachEvents,function(t){t.remove();
}),this._attachEvents=[]},destroyRendering:function(){this._detachTemplateNodes(),
this.inherited(arguments)}});return a.extend(h,{dojoAttachEvent:"",dojoAttachPoint:""
}),f});