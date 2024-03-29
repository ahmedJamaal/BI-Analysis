define(["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/dom-style","dojo/_base/lang","dojo/mouse","dojo/on","dojo/sniff","dojo/window","../a11y"],function(e,t,s,i,n,o,a,h,d,u){
return t("dijit.form._FormWidgetMixin",null,{name:"",alt:"",value:"",type:"text",
"aria-label":"focusNode",tabIndex:"0",_setTabIndexAttr:"focusNode",disabled:!1,intermediateChanges:!1,
scrollOnFocus:!0,_setIdAttr:"focusNode",_setDisabledAttr:function(t){if(this._set("disabled",t),
s.set(this.focusNode,"disabled",t),this.valueNode&&s.set(this.valueNode,"disabled",t),
this.focusNode.setAttribute("aria-disabled",t?"true":"false"),t){this._set("hovering",!1),
this._set("active",!1);var i="tabIndex"in this.attributeMap?this.attributeMap.tabIndex:"_setTabIndexAttr"in this?this._setTabIndexAttr:"focusNode";
e.forEach(n.isArray(i)?i:[i],function(e){var t=this[e];h("webkit")||u.hasDefaultTabStop(t)?t.setAttribute("tabIndex","-1"):t.removeAttribute("tabIndex");
},this)}else""!=this.tabIndex&&this.set("tabIndex",this.tabIndex)},_onFocus:function(e){
if("mouse"==e&&this.isFocusable())var t=this.own(a(this.focusNode,"focus",function(){
s.remove(),t.remove()}))[0],s=this.own(a(this.ownerDocumentBody,"mouseup, touchend",n.hitch(this,function(e){
s.remove(),t.remove(),this.focused&&("touchend"==e.type?this.defer("focus"):this.focus());
})))[0];this.scrollOnFocus&&this.defer(function(){d.scrollIntoView(this.domNode)}),
this.inherited(arguments)},isFocusable:function(){return!this.disabled&&this.focusNode&&"none"!=i.get(this.domNode,"display");
},focus:function(){if(!this.disabled&&this.focusNode.focus)try{this.focusNode.focus();
}catch(e){}},compare:function(e,t){return"number"==typeof e&&"number"==typeof t?isNaN(e)&&isNaN(t)?0:e-t:e>t?1:t>e?-1:0;
},onChange:function(){},_onChangeActive:!1,_handleOnChange:function(e,t){void 0!=this._lastValueReported||null!==t&&this._onChangeActive||(this._resetValue=this._lastValueReported=e),
this._pendingOnChange=this._pendingOnChange||typeof e!=typeof this._lastValueReported||0!=this.compare(e,this._lastValueReported),
(this.intermediateChanges||t||void 0===t)&&this._pendingOnChange&&(this._lastValueReported=e,
this._pendingOnChange=!1,this._onChangeActive&&(this._onChangeHandle&&this._onChangeHandle.remove(),
this._onChangeHandle=this.defer(function(){this._onChangeHandle=null,this.onChange(e);
})))},create:function(){this.inherited(arguments),this._onChangeActive=!0},destroy:function(){
this._onChangeHandle&&(this._onChangeHandle.remove(),this.onChange(this._lastValueReported)),
this.inherited(arguments)}})});