define(["dojo/cache","dojo/_base/declare","dojo/dom-construct","dojo/_base/lang","dojo/on","dojo/sniff","dojo/string","./_AttachMixin"],function(e,t,i,n,r,o,a,d){
var s=t("dijit._TemplatedMixin",d,{templateString:null,templatePath:null,_skipNodeCache:!1,
searchContainerNode:!0,_stringRepl:function(e){var t=this.declaredClass,i=this;return a.substitute(e,this,function(e,r){
if("!"==r.charAt(0)&&(e=n.getObject(r.substr(1),!1,i)),"undefined"==typeof e)throw new Error(t+" template:"+r);
return null==e?"":"!"==r.charAt(0)?e:e.toString().replace(/"/g,"&quot;")},this)},
buildRendering:function(){if(!this._rendered){this.templateString||(this.templateString=e(this.templatePath,{
sanitize:!0}));var t,r=s.getCachedTemplate(this.templateString,this._skipNodeCache,this.ownerDocument);
if(n.isString(r)){if(t=i.toDom(this._stringRepl(r),this.ownerDocument),1!=t.nodeType)throw new Error("Invalid template: "+r);
}else t=r.cloneNode(!0);this.domNode=t}this.inherited(arguments),this._rendered||this._fillContent(this.srcNodeRef),
this._rendered=!0},_fillContent:function(e){var t=this.containerNode;if(e&&t)for(;e.hasChildNodes();)t.appendChild(e.firstChild);
}});return s._templateCache={},s.getCachedTemplate=function(e,t,n){var r=s._templateCache,o=e,d=r[o];
if(d){try{if(!d.ownerDocument||d.ownerDocument==(n||document))return d}catch(h){}
i.destroy(d)}if(e=a.trim(e),t||e.match(/\$\{([^\}]+)\}/g))return r[o]=e;var l=i.toDom(e,n);
if(1!=l.nodeType)throw new Error("Invalid template: "+e);return r[o]=l},o("ie")&&r(window,"unload",function(){
var e=s._templateCache;for(var t in e){var n=e[t];"object"==typeof n&&i.destroy(n),
delete e[t]}}),s});