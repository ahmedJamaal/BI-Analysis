define(["dojo/_base/declare","dojo/_base/kernel","dojo/i18n","./TextBox","../Tooltip","dojo/text!./templates/ValidationTextBox.html","dojo/i18n!./nls/validate"],function(t,e,s,i,r,a){
var n;return n=t("dijit.form.ValidationTextBox",i,{templateString:a,required:!1,promptMessage:"",
invalidMessage:"$_unset_$",missingMessage:"$_unset_$",message:"",constraints:{},pattern:".*",
regExp:"",regExpGen:function(){},state:"",tooltipPosition:[],_deprecateRegExp:function(t,s){
s!=n.prototype[t]&&(e.deprecated("ValidationTextBox id="+this.id+", set('"+t+"', ...) is deprecated.  Use set('pattern', ...) instead.","","2.0"),
this.set("pattern",s))},_setRegExpGenAttr:function(t){this._deprecateRegExp("regExpGen",t),
this._set("regExpGen",this._computeRegexp)},_setRegExpAttr:function(t){this._deprecateRegExp("regExp",t);
},_setValueAttr:function(){this.inherited(arguments),this._refreshState()},validator:function(t,e){
return!(!new RegExp("^(?:"+this._computeRegexp(e)+")"+(this.required?"":"?")+"$").test(t)||this.required&&this._isEmpty(t)||!this._isEmpty(t)&&void 0===this.parse(t,e));
},_isValidSubset:function(){return 0==this.textbox.value.search(this._partialre)},
isValid:function(){return this.validator(this.textbox.value,this.get("constraints"));
},_isEmpty:function(t){return(this.trim?/^\s*$/:/^$/).test(t)},getErrorMessage:function(){
var t="$_unset_$"==this.invalidMessage?this.messages.invalidMessage:this.invalidMessage?this.invalidMessage:this.promptMessage,e="$_unset_$"==this.missingMessage?this.messages.missingMessage:this.missingMessage?this.missingMessage:t;
return this.required&&this._isEmpty(this.textbox.value)?e:t},getPromptMessage:function(){
return this.promptMessage},_maskValidSubsetError:!0,validate:function(t){var e="",s=this.disabled||this.isValid(t);
s&&(this._maskValidSubsetError=!0);var i=this._isEmpty(this.textbox.value),r=!s&&t&&this._isValidSubset();
return this._set("state",s?"":((!this._hasBeenBlurred||t)&&i||r)&&(this._maskValidSubsetError||r&&!this._hasBeenBlurred&&t)?"Incomplete":"Error"),
this.focusNode.setAttribute("aria-invalid",s?"false":"true"),"Error"==this.state?(this._maskValidSubsetError=t&&r,
e=this.getErrorMessage(t)):"Incomplete"==this.state?(e=this.getPromptMessage(t),this._maskValidSubsetError=!this._hasBeenBlurred||t):i&&(e=this.getPromptMessage(t)),
this.set("message",e),s},displayMessage:function(t){t&&this.focused?r.show(t,this.domNode,this.tooltipPosition,!this.isLeftToRight()):r.hide(this.domNode);
},_refreshState:function(){this._created&&this.validate(this.focused),this.inherited(arguments);
},constructor:function(t){this.constraints={},this.baseClass+=" dijitValidationTextBox";
},startup:function(){this.inherited(arguments),this._refreshState()},_setConstraintsAttr:function(t){
!t.locale&&this.lang&&(t.locale=this.lang),this._set("constraints",t),this._refreshState();
},_setPatternAttr:function(t){this._set("pattern",t),this._refreshState()},_computeRegexp:function(t){
var e=this.pattern;if("function"==typeof e&&(e=e.call(this,t)),e!=this._lastRegExp){
var s="";this._lastRegExp=e,".*"!=e&&e.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g,function(t){
switch(t.charAt(0)){case"{":case"+":case"?":case"*":case"^":case"$":case"|":case"(":
s+=t;break;case")":s+="|$)";break;default:s+="(?:"+t+"|$)"}});try{"".search(s)}catch(i){
s=this.pattern,console.warn("RegExp error in "+this.declaredClass+": "+this.pattern);
}this._partialre="^(?:"+s+")$"}return e},postMixInProperties:function(){this.inherited(arguments),
this.messages=s.getLocalization("dijit.form","validate",this.lang),this._setConstraintsAttr(this.constraints);
},_setDisabledAttr:function(t){this.inherited(arguments),this._refreshState()},_setRequiredAttr:function(t){
this._set("required",t),this.focusNode.setAttribute("aria-required",t),this._refreshState();
},_setMessageAttr:function(t){this._set("message",t),this.displayMessage(t)},reset:function(){
this._maskValidSubsetError=!0,this.inherited(arguments)},_onBlur:function(){this.displayMessage(""),
this.inherited(arguments)}})});