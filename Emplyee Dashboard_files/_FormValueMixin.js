define(["dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","./_FormWidgetMixin"],function(e,t,n,s,i,o,a){
return e("dijit.form._FormValueMixin",a,{readOnly:!1,_setReadOnlyAttr:function(e){
t.set(this.focusNode,"readOnly",e),this._set("readOnly",e)},postCreate:function(){
this.inherited(arguments),void 0===this._resetValue&&(this._lastValueReported=this._resetValue=this.value);
},_setValueAttr:function(e,t){this._handleOnChange(e,t)},_handleOnChange:function(e,t){
this._set("value",e),this.inherited(arguments)},undo:function(){this._setValueAttr(this._lastValueReported,!1);
},reset:function(){this._hasBeenBlurred=!1,this._setValueAttr(this._resetValue,!0);
}})});