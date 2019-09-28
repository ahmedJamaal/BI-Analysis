define(["dojo/aspect","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/has","dojo/_base/kernel","dojo/_base/lang","dojo/query","dojo/ready","./registry","./_WidgetBase","./_OnDijitClickMixin","./_FocusMixin","dojo/uacss","./hccss"],function(e,t,n,o,s,i,r,c,a,d,u,h,f){
function l(){}function _(e){return function(t,o,s,i){return t&&"string"==typeof o&&t[o]==l?t.on(o.substring(2).toLowerCase(),r.hitch(s,i)):e.apply(n,arguments);
}}e.around(n,"connect",_),i.connect&&e.around(i,"connect",_);var g=o("dijit._Widget",[u,h,f],{
onClick:l,onDblClick:l,onKeyDown:l,onKeyPress:l,onKeyUp:l,onMouseDown:l,onMouseMove:l,
onMouseOut:l,onMouseOver:l,onMouseLeave:l,onMouseEnter:l,onMouseUp:l,constructor:function(e){
this._toConnect={};for(var t in e)this[t]===l&&(this._toConnect[t.replace(/^on/,"").toLowerCase()]=e[t],
delete e[t])},postCreate:function(){this.inherited(arguments);for(var e in this._toConnect)this.on(e,this._toConnect[e]);
delete this._toConnect},on:function(e,t){return this[this._onMap(e)]===l?n.connect(this.domNode,e.toLowerCase(),this,t):this.inherited(arguments);
},_setFocusedAttr:function(e){this._focused=e,this._set("focused",e)},setAttribute:function(e,t){
i.deprecated(this.declaredClass+"::setAttribute(attr, value) is deprecated. Use set() instead.","","2.0"),
this.set(e,t)},attr:function(e,t){var n=arguments.length;return n>=2||"object"==typeof e?this.set.apply(this,arguments):this.get(e);
},getDescendants:function(){return i.deprecated(this.declaredClass+"::getDescendants() is deprecated. Use getChildren() instead.","","2.0"),
this.containerNode?c("[widgetId]",this.containerNode).map(d.byNode):[]},_onShow:function(){
this.onShow()},onShow:function(){},onHide:function(){},onClose:function(){return!0;
}});return s("dijit-legacy-requires")&&a(0,function(){var e=["dijit/_base"];require(e);
}),g});