define(["./focus","./_WidgetBase","dojo/_base/declare","dojo/_base/lang"],function(n,o,u,c){
return c.extend(o,{focused:!1,onFocus:function(){},onBlur:function(){},_onFocus:function(){
this.onFocus()},_onBlur:function(){this.onBlur()}}),u("dijit._FocusMixin",null,{_focusManager:n
})});