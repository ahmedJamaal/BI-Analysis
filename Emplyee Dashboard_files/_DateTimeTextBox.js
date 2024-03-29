define(["dojo/date","dojo/date/locale","dojo/date/stamp","dojo/_base/declare","dojo/_base/lang","./RangeBoundTextBox","../_HasDropDown","dojo/text!./templates/DropDownBox.html"],function(t,e,i,a,n,s,o,r){
new Date("X");var l=a("dijit.form._DateTimeTextBox",[s,o],{templateString:r,hasDownArrow:!0,
cssStateNodes:{_buttonNode:"dijitDownArrowButton"},pattern:e.regexp,datePackage:"",
postMixInProperties:function(){this.inherited(arguments),this._set("type","text");
},compare:function(e,i){var a=this._isInvalidDate(e),n=this._isInvalidDate(i);return a?n?0:-1:n?1:t.compare(e,i,this._selector);
},autoWidth:!0,format:function(t,e){return t?this.dateLocaleModule.format(t,e):"";
},parse:function(t,e){return this.dateLocaleModule.parse(t,e)||(this._isEmpty(t)?null:void 0);
},serialize:function(t,e){return t.toGregorian&&(t=t.toGregorian()),i.toISOString(t,e);
},dropDownDefaultValue:new Date,value:new Date(""),_blankValue:null,popupClass:"",
_selector:"",constructor:function(i){this.dateModule=i.datePackage?n.getObject(i.datePackage,!1):t,
this.dateClassObj=this.dateModule.Date||Date,this.dateLocaleModule=i.datePackage?n.getObject(i.datePackage+".locale",!1):e,
this._set("pattern",this.dateLocaleModule.regexp),this._invalidDate=this.constructor.prototype.value.toString();
},buildRendering:function(){this.inherited(arguments),this.hasDownArrow||(this._buttonNode.style.display="none"),
this.hasDownArrow||(this._buttonNode=this.domNode,this.baseClass+=" dijitComboBoxOpenOnClick");
},_setConstraintsAttr:function(t){t.selector=this._selector,t.fullYear=!0;var e=i.fromISOString;
"string"==typeof t.min&&(t.min=e(t.min)),"string"==typeof t.max&&(t.max=e(t.max)),
this.inherited(arguments)},_isInvalidDate:function(t){return!t||isNaN(t)||"object"!=typeof t||t.toString()==this._invalidDate;
},_setValueAttr:function(t,e,a){void 0!==t&&("string"==typeof t&&(t=i.fromISOString(t)),
this._isInvalidDate(t)&&(t=null),t instanceof Date&&!(this.dateClassObj instanceof Date)&&(t=new this.dateClassObj(t))),
this.inherited(arguments),this.value instanceof Date&&(this.filterString=""),this.dropDown&&this.dropDown.set("value",t,!1);
},_set:function(t,e){var i=this._get("value");"value"==t&&i instanceof Date&&0==this.compare(e,i)||this.inherited(arguments);
},_setDropDownDefaultValueAttr:function(t){this._isInvalidDate(t)&&(t=new this.dateClassObj),
this._set("dropDownDefaultValue",t)},openDropDown:function(t){this.dropDown&&this.dropDown.destroy();
var e=n.isString(this.popupClass)?n.getObject(this.popupClass,!1):this.popupClass,i=this,a=this.get("value");
this.dropDown=new e({onChange:function(t){i.set("value",t,!0)},id:this.id+"_popup",
dir:i.dir,lang:i.lang,value:a,textDir:i.textDir,currentFocus:this._isInvalidDate(a)?this.dropDownDefaultValue:a,
constraints:i.constraints,filterString:i.filterString,datePackage:i.params.datePackage,
isDisabledDate:function(t){return!i.rangeCheck(t,i.constraints)}}),this.inherited(arguments);
},_getDisplayedValueAttr:function(){return this.textbox.value},_setDisplayedValueAttr:function(t,e){
this._setValueAttr(this.parse(t,this.constraints),e,t)}});return l});