define(["dojo/_base/declare","dojo/_base/lang","dojo/query","../registry","../popup","./Button","../_Container","../_HasDropDown","dojo/text!./templates/DropDownButton.html"],function(o,t,n,e,i,r,s,d,a){
return o("dijit.form.DropDownButton",[r,s,d],{baseClass:"dijitDropDownButton",templateString:a,
_fillContent:function(){if(this.srcNodeRef){var o=n("*",this.srcNodeRef);this.inherited(arguments,[o[0]]),
this.dropDownContainer=this.srcNodeRef}},startup:function(){if(!this._started){if(!this.dropDown&&this.dropDownContainer){
var o=n("[widgetId]",this.dropDownContainer)[0];o&&(this.dropDown=e.byNode(o)),delete this.dropDownContainer;
}this.dropDown&&i.hide(this.dropDown),this.inherited(arguments)}},isLoaded:function(){
var o=this.dropDown;return!!o&&(!o.href||o.isLoaded)},loadDropDown:function(o){var n=this.dropDown,e=n.on("load",t.hitch(this,function(){
e.remove(),o()}));n.refresh()},isFocusable:function(){return this.inherited(arguments)&&!this._mouseDown;
}})});