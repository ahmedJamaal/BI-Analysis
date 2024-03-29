define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang","dojo/query","dojo/sniff","../registry","../Viewport","./utils"],function(i,t,e,s,n,o,h,d,a,l,r){
return t("dijit.layout._ContentPaneResizeMixin",null,{doLayout:!0,isLayoutContainer:!0,
startup:function(){if(!this._started){var i=this.getParent();this._childOfLayoutWidget=i&&i.isLayoutContainer,
this._needLayout=!this._childOfLayoutWidget,this.inherited(arguments),this._isShown()&&this._onShow(),
this._childOfLayoutWidget||this.own(l.on("resize",o.hitch(this,"resize")))}},_checkIfSingleChild:function(){
var i=[],t=!1;h("> *",this.containerNode).some(function(e){var s=a.byNode(e);s&&s.resize?i.push(s):!/script|link|style/i.test(e.nodeName)&&e.offsetHeight&&(t=!0);
}),this._singleChild=1!=i.length||t?null:i[0],e.toggle(this.containerNode,this.baseClass+"SingleChild",!!this._singleChild);
},resize:function(i,t){this._resizeCalled=!0,this._scheduleLayout(i,t)},_scheduleLayout:function(i,t){
this._isShown()?this._layout(i,t):(this._needLayout=!0,this._changeSize=i,this._resultSize=t);
},_layout:function(i,t){delete this._needLayout,this._wasShown||this.open===!1||this._onShow(),
i&&s.setMarginBox(this.domNode,i);var e=this.containerNode;if(e===this.domNode){var n=t||{};
o.mixin(n,i||{}),"h"in n&&"w"in n||(n=o.mixin(s.getMarginBox(e),n)),this._contentBox=r.marginBox2contentBox(e,n);
}else this._contentBox=s.getContentBox(e);this._layoutChildren()},_layoutChildren:function(){
if(this.doLayout&&this._checkIfSingleChild(),this._singleChild&&this._singleChild.resize){
var i=this._contentBox||s.getContentBox(this.containerNode);this._singleChild.resize({
w:i.w,h:i.h})}else for(var t,e=this.getChildren(),n=0;t=e[n++];)t.resize&&t.resize();
},_isShown:function(){if(this._childOfLayoutWidget)return this._resizeCalled&&"open"in this?this.open:this._resizeCalled;
if("open"in this)return this.open;var i=this.domNode,t=this.domNode.parentNode;return"none"!=i.style.display&&"hidden"!=i.style.visibility&&!e.contains(i,"dijitHidden")&&t&&t.style&&"none"!=t.style.display;
},_onShow:function(){this._wasShown=!0,this._needLayout&&this._layout(this._changeSize,this._resultSize),
this.inherited(arguments)}})});