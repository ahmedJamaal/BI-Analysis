define(["dojo/_base/declare","dojo/dom","./_WidgetBase","./_TemplatedMixin","./_Contained","dojo/text!./templates/MenuSeparator.html"],function(e,t,n,i,o,d){
return e("dijit.MenuSeparator",[n,i,o],{templateString:d,buildRendering:function(){
this.inherited(arguments),t.setSelectable(this.domNode,!1)},isFocusable:function(){
return!1}})});