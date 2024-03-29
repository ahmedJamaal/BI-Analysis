define(["dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/has","dojo/keys","dojo/_base/lang","dojo/on","../main"],function(e,t,i,s,n,a,o,r){
var u=t("dijit.form._TextBoxMixin"+(s("dojo-bidi")?"_NoBidi":""),null,{trim:!1,uppercase:!1,
lowercase:!1,propercase:!1,maxLength:"",selectOnClick:!1,placeHolder:"",_getValueAttr:function(){
return this.parse(this.get("displayedValue"),this.constraints)},_setValueAttr:function(e,t,i){
var s;void 0!==e&&(s=this.filter(e),"string"!=typeof i&&(i=null===s||"number"==typeof s&&isNaN(s)?"":this.filter(this.format(s,this.constraints)))),
null==i||"number"==typeof i&&isNaN(i)||this.textbox.value==i||(this.textbox.value=i,
this._set("displayedValue",this.get("displayedValue"))),this.inherited(arguments,[s,t]);
},displayedValue:"",_getDisplayedValueAttr:function(){return this.filter(this.textbox.value);
},_setDisplayedValueAttr:function(e){null==e?e="":"string"!=typeof e&&(e=String(e)),
this.textbox.value=e,this._setValueAttr(this.get("value"),void 0),this._set("displayedValue",this.get("displayedValue"));
},format:function(e){return null==e?"":e.toString?e.toString():e},parse:function(e){
return e},_refreshState:function(){},onInput:function(){},__skipInputEvent:!1,_onInput:function(e){
this._processInput(e),this.intermediateChanges&&this.defer(function(){this._handleOnChange(this.get("value"),!1);
})},_processInput:function(e){this._refreshState(),this._set("displayedValue",this.get("displayedValue"));
},postCreate:function(){this.textbox.setAttribute("value",this.textbox.value),this.inherited(arguments);
var e=function(e){var t;if("keydown"==e.type){switch(t=e.keyCode){case n.SHIFT:case n.ALT:
case n.CTRL:case n.META:case n.CAPS_LOCK:case n.NUM_LOCK:case n.SCROLL_LOCK:return;
}if(!e.ctrlKey&&!e.metaKey&&!e.altKey){switch(t){case n.NUMPAD_0:case n.NUMPAD_1:
case n.NUMPAD_2:case n.NUMPAD_3:case n.NUMPAD_4:case n.NUMPAD_5:case n.NUMPAD_6:case n.NUMPAD_7:
case n.NUMPAD_8:case n.NUMPAD_9:case n.NUMPAD_MULTIPLY:case n.NUMPAD_PLUS:case n.NUMPAD_ENTER:
case n.NUMPAD_MINUS:case n.NUMPAD_PERIOD:case n.NUMPAD_DIVIDE:return}if(t>=65&&90>=t||t>=48&&57>=t||t==n.SPACE)return;
var i=!1;for(var s in n)if(n[s]===e.keyCode){i=!0;break}if(!i)return}}if(t=e.charCode>=32?String.fromCharCode(e.charCode):e.charCode,
t||(t=e.keyCode>=65&&e.keyCode<=90||e.keyCode>=48&&e.keyCode<=57||e.keyCode==n.SPACE?String.fromCharCode(e.keyCode):e.keyCode),
t||(t=229),"keypress"==e.type){if("string"!=typeof t)return;if((t>="a"&&"z">=t||t>="A"&&"Z">=t||t>="0"&&"9">=t||" "===t)&&(e.ctrlKey||e.metaKey||e.altKey))return;
}if("input"==e.type){if(this.__skipInputEvent)return void(this.__skipInputEvent=!1);
}else this.__skipInputEvent=!0;var o,r={faux:!0};for(o in e)if("layerX"!=o&&"layerY"!=o){
var u=e[o];"function"!=typeof u&&"undefined"!=typeof u&&(r[o]=u)}a.mixin(r,{charOrCode:t,
_wasConsumed:!1,preventDefault:function(){r._wasConsumed=!0,e.preventDefault()},stopPropagation:function(){
e.stopPropagation()}}),this.onInput(r)===!1&&(r.preventDefault(),r.stopPropagation()),
r._wasConsumed||(this.defer(function(){this._onInput(r)}),"keypress"==e.type&&e.stopPropagation());
};this.own(o(this.textbox,"keydown, keypress, paste, cut, input, compositionend",a.hitch(this,e)));
},_blankValue:"",filter:function(e){return null===e?this._blankValue:"string"!=typeof e?e:(this.trim&&(e=a.trim(e)),
this.uppercase&&(e=e.toUpperCase()),this.lowercase&&(e=e.toLowerCase()),this.propercase&&(e=e.replace(/[^\s]+/g,function(e){
return e.substring(0,1).toUpperCase()+e.substring(1)})),e)},_setBlurValue:function(){
this._setValueAttr(this.get("value"),!0)},_onBlur:function(e){this.disabled||(this._setBlurValue(),
this.inherited(arguments))},_isTextSelected:function(){return this.textbox.selectionStart!=this.textbox.selectionEnd;
},_onFocus:function(e){this.disabled||this.readOnly||(this.selectOnClick&&"mouse"==e&&(this._selectOnClickHandle=o.once(this.domNode,"mouseup, touchend",a.hitch(this,function(e){
this._isTextSelected()||u.selectInputText(this.textbox)})),this.own(this._selectOnClickHandle),
this.defer(function(){this._selectOnClickHandle&&(this._selectOnClickHandle.remove(),
this._selectOnClickHandle=null)},500)),this.inherited(arguments),this._refreshState());
},reset:function(){this.textbox.value="",this.inherited(arguments)}});return s("dojo-bidi")&&(u=t("dijit.form._TextBoxMixin",u,{
_setValueAttr:function(){this.inherited(arguments),this.applyTextDir(this.focusNode);
},_setDisplayedValueAttr:function(){this.inherited(arguments),this.applyTextDir(this.focusNode);
},_onInput:function(){this.applyTextDir(this.focusNode),this.inherited(arguments);
}})),u._setSelectionRange=r._setSelectionRange=function(e,t,i){e.setSelectionRange&&e.setSelectionRange(t,i);
},u.selectInputText=r.selectInputText=function(e,t,s){e=i.byId(e),isNaN(t)&&(t=0),
isNaN(s)&&(s=e.value?e.value.length:0);try{e.focus(),u._setSelectionRange(e,t,s)}catch(n){}
},u});