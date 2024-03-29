define(["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/i18n","dojo/_base/lang","dojo/on","dojo/sniff","./_FormSelectWidget","../_HasDropDown","../DropDownMenu","../MenuItem","../MenuSeparator","../Tooltip","../_KeyNavMixin","../registry","dojo/text!./templates/Select.html","dojo/i18n!./nls/validate"],function(t,e,i,s,o,n,r,d,a,h,l,u,c,f,p,m,_,g){
function v(t){return function(e){this._isLoaded?this.inherited(t,arguments):this.loadDropDown(r.hitch(this,t,e));
}}var D=e("dijit.form._SelectMenu",u,{autoFocus:!0,buildRendering:function(){this.inherited(arguments),
this.domNode.setAttribute("role","listbox")},postCreate:function(){this.inherited(arguments),
this.own(d(this.domNode,"selectstart",function(t){t.preventDefault(),t.stopPropagation();
}))},focus:function(){var e=!1,i=this.parentWidget.value;r.isArray(i)&&(i=i[i.length-1]),
i&&t.forEach(this.parentWidget._getChildren(),function(t){t.option&&i===t.option.value&&(e=!0,
this.focusChild(t,!1))},this),e||this.inherited(arguments)}}),b=e("dijit.form.Select"+(a("dojo-bidi")?"_NoBidi":""),[h,l,m],{
baseClass:"dijitSelect dijitValidationTextBox",templateString:g,_buttonInputDisabled:a("ie")?"disabled":"",
required:!1,state:"",message:"",tooltipPosition:[],emptyLabel:"&#160;",_isLoaded:!1,
_childrenLoaded:!1,_fillContent:function(){if(this.inherited(arguments),this.options.length&&!this.value&&this.srcNodeRef){
var t=this.srcNodeRef.selectedIndex||0;this._set("value",this.options[t>=0?t:0].value);
}this.dropDown=new D({id:this.id+"_menu",parentWidget:this}),s.add(this.dropDown.domNode,this.baseClass.replace(/\s+|$/g,"Menu "));
},_getMenuItemForOption:function(t){if(t.value||t.label){var e=r.hitch(this,"_setValueAttr",t),i=new c({
option:t,label:t.label||this.emptyLabel,onClick:e,ownerDocument:this.ownerDocument,
dir:this.dir,textDir:this.textDir,disabled:t.disabled||!1});return i.focusNode.setAttribute("role","option"),
i}return new f({ownerDocument:this.ownerDocument})},_addOptionItem:function(t){this.dropDown&&this.dropDown.addChild(this._getMenuItemForOption(t));
},_getChildren:function(){return this.dropDown?this.dropDown.getChildren():[]},focus:function(){
if(!this.disabled&&this.focusNode.focus)try{this.focusNode.focus()}catch(t){}},focusChild:function(t){
t&&this.set("value",t.option)},_getFirst:function(){var t=this._getChildren();return t.length?t[0]:null;
},_getLast:function(){var t=this._getChildren();return t.length?t[t.length-1]:null;
},childSelector:function(t){var t=_.byNode(t);return t&&t.getParent()==this.dropDown;
},onKeyboardSearch:function(t,e,i,s){t&&this.focusChild(t)},_loadChildren:function(e){
if(e===!0)if(this.dropDown&&(delete this.dropDown.focusedChild,this.focusedChild=null),
this.options.length)this.inherited(arguments);else{t.forEach(this._getChildren(),function(t){
t.destroyRecursive()});var i=new c({ownerDocument:this.ownerDocument,label:this.emptyLabel
});this.dropDown.addChild(i)}else this._updateSelection();this._isLoaded=!1,this._childrenLoaded=!0,
this._loadingStore||this._setValueAttr(this.value,!1)},_refreshState:function(){this._started&&this.validate(this.focused);
},startup:function(){this.inherited(arguments),this._refreshState()},_setValueAttr:function(t){
this.inherited(arguments),i.set(this.valueNode,"value",this.get("value")),this._refreshState();
},_setNameAttr:"valueNode",_setDisabledAttr:function(t){this.inherited(arguments),
this._refreshState()},_setRequiredAttr:function(t){this._set("required",t),this.focusNode.setAttribute("aria-required",t),
this._refreshState()},_setOptionsAttr:function(t){this._isLoaded=!1,this._set("options",t);
},_setDisplay:function(t){var e=t||this.emptyLabel;this.containerNode.innerHTML='<span role="option" class="dijitReset dijitInline '+this.baseClass.replace(/\s+|$/g,"Label ")+'">'+e+"</span>";
},validate:function(t){var e=this.disabled||this.isValid(t);this._set("state",e?"":this._hasBeenBlurred?"Error":"Incomplete"),
this.focusNode.setAttribute("aria-invalid",e?"false":"true");var i=e?"":this._missingMsg;
return i&&this.focused&&this._hasBeenBlurred?p.show(i,this.domNode,this.tooltipPosition,!this.isLeftToRight()):p.hide(this.domNode),
this._set("message",i),e},isValid:function(){return!this.required||0===this.value||!/^\s*$/.test(this.value||"");
},reset:function(){this.inherited(arguments),p.hide(this.domNode),this._refreshState();
},postMixInProperties:function(){this.inherited(arguments),this._missingMsg=n.getLocalization("dijit.form","validate",this.lang).missingMessage;
},postCreate:function(){this.inherited(arguments),this.own(d(this.domNode,"selectstart",function(t){
t.preventDefault(),t.stopPropagation()})),this.domNode.setAttribute("aria-expanded","false"),
a("ie")<9&&this.defer(function(){try{var t=domStyle.getComputedStyle(this.domNode);
if(t){var e=t.fontFamily;if(e){var i=this.domNode.getElementsByTagName("INPUT");if(i)for(var s=0;s<i.length;s++)i[s].style.fontFamily=e;
}}}catch(o){}})},_setStyleAttr:function(t){this.inherited(arguments),s.toggle(this.domNode,this.baseClass.replace(/\s+|$/g,"FixedWidth "),!!this.domNode.style.width);
},isLoaded:function(){return this._isLoaded},loadDropDown:function(t){this._loadChildren(!0),
this._isLoaded=!0,t()},destroy:function(t){this.dropDown&&!this.dropDown._destroyed&&(this.dropDown.destroyRecursive(t),
delete this.dropDown),this.inherited(arguments)},_onFocus:function(){this.validate(!0);
},_onBlur:function(){p.hide(this.domNode),this.inherited(arguments),this.validate(!1);
}});return a("dojo-bidi")&&(b=e("dijit.form.Select",b,{_setDisplay:function(t){this.inherited(arguments),
this.applyTextDir(this.containerNode)}})),b._Menu=D,b.prototype._onContainerKeydown=v("_onContainerKeydown"),
b.prototype._onContainerKeypress=v("_onContainerKeypress"),b});