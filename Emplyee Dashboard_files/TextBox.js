define(["dojo/_base/declare","dojo/dom-construct","dojo/dom-style","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/sniff","./_FormValueWidget","./_TextBoxMixin","dojo/text!./templates/TextBox.html","../main"],function(e,t,i,s,a,n,o,d,l,r,h){
var p=e("dijit.form.TextBox"+(o("dojo-bidi")?"_NoBidi":""),[d,l],{templateString:r,
_singleNodeTemplate:'<input class="dijit dijitReset dijitLeft dijitInputField" data-dojo-attach-point="textbox,focusNode" autocomplete="off" type="${type}" ${!nameAttrSetting} />',
_buttonInputDisabled:o("ie")?"disabled":"",baseClass:"dijitTextBox",postMixInProperties:function(){
var e=this.type.toLowerCase();(this.templateString&&"input"==this.templateString.toLowerCase()||("hidden"==e||"file"==e)&&this.templateString==this.constructor.prototype.templateString)&&(this.templateString=this._singleNodeTemplate),
this.inherited(arguments)},postCreate:function(){this.inherited(arguments),o("ie")<9&&this.defer(function(){
try{var e=i.getComputedStyle(this.domNode);if(e){var t=e.fontFamily;if(t){var s=this.domNode.getElementsByTagName("INPUT");
if(s)for(var a=0;a<s.length;a++)s[a].style.fontFamily=t}}}catch(n){}})},_setPlaceHolderAttr:function(e){
this._set("placeHolder",e),this._phspan||(this._attachPoints.push("_phspan"),this._phspan=t.create("span",{
onmousedown:function(e){e.preventDefault()},className:"dijitPlaceHolder dijitInputField"
},this.textbox,"after"),this.own(n(this._phspan,"touchend, pointerup, MSPointerUp",a.hitch(this,function(){
this.focus()})))),this._phspan.innerHTML="",this._phspan.appendChild(this._phspan.ownerDocument.createTextNode(e)),
this._updatePlaceHolder()},_onInput:function(e){this.inherited(arguments),this._updatePlaceHolder();
},_updatePlaceHolder:function(){this._phspan&&(this._phspan.style.display=this.placeHolder&&!this.textbox.value?"":"none");
},_setValueAttr:function(e,t,i){this.inherited(arguments),this._updatePlaceHolder();
},getDisplayedValue:function(){return s.deprecated(this.declaredClass+"::getDisplayedValue() is deprecated. Use get('displayedValue') instead.","","2.0"),
this.get("displayedValue")},setDisplayedValue:function(e){s.deprecated(this.declaredClass+"::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.","","2.0"),
this.set("displayedValue",e)},_onBlur:function(e){this.disabled||(this.inherited(arguments),
this._updatePlaceHolder(),o("mozilla")&&this.selectOnClick&&(this.textbox.selectionStart=this.textbox.selectionEnd=void 0));
},_onFocus:function(e){this.disabled||this.readOnly||(this.inherited(arguments),this._updatePlaceHolder());
}});return o("ie")<9&&(p.prototype._isTextSelected=function(){var e=this.ownerDocument.selection.createRange(),t=e.parentElement();
return t==this.textbox&&e.text.length>0},h._setSelectionRange=l._setSelectionRange=function(e,t,i){
if(e.createTextRange){var s=e.createTextRange();s.collapse(!0),s.moveStart("character",-99999),
s.moveStart("character",t),s.moveEnd("character",i-t),s.select()}}),o("dojo-bidi")&&(p=e("dijit.form.TextBox",p,{
_setPlaceHolderAttr:function(e){this.inherited(arguments),this.applyTextDir(this._phspan);
}})),p});