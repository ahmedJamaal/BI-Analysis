define(["dojo/_base/declare","dojo/i18n","./MappedTextBox"],function(e,i,t){var n=e("dijit.form.RangeBoundTextBox",t,{
rangeMessage:"",rangeCheck:function(e,i){return("min"in i?this.compare(e,i.min)>=0:!0)&&("max"in i?this.compare(e,i.max)<=0:!0);
},isInRange:function(){return this.rangeCheck(this.get("value"),this.constraints);
},_isDefinitelyOutOfRange:function(){var e=this.get("value");if(null==e)return!1;var i=!1;
if("min"in this.constraints){var t=this.constraints.min;i=this.compare(e,"number"==typeof t&&t>=0&&0!=e?0:t)<0;
}if(!i&&"max"in this.constraints){var n=this.constraints.max;i=this.compare(e,"number"!=typeof n||n>0?n:0)>0;
}return i},_isValidSubset:function(){return this.inherited(arguments)&&!this._isDefinitelyOutOfRange();
},isValid:function(e){return this.inherited(arguments)&&(this._isEmpty(this.textbox.value)&&!this.required||this.isInRange(e));
},getErrorMessage:function(e){var i=this.get("value");return null==i||""===i||"number"==typeof i&&isNaN(i)||this.isInRange(e)?this.inherited(arguments):this.rangeMessage;
},postMixInProperties:function(){this.inherited(arguments),this.rangeMessage||(this.messages=i.getLocalization("dijit.form","validate",this.lang),
this.rangeMessage=this.messages.rangeMessage)}});return n});