define(["dojo/_base/declare","dojo/sniff","dojo/dom-construct","./ValidationTextBox"],function(t,e,i,n){
return t("dijit.form.MappedTextBox",n,{postMixInProperties:function(){this.inherited(arguments),
this.nameAttrSetting=""},_setNameAttr:"valueNode",serialize:function(t){return t.toString?t.toString():"";
},toString:function(){var t=this.filter(this.get("value"));return null!=t?"string"==typeof t?t:this.serialize(t,this.constraints):"";
},validate:function(){return this.valueNode.value=this.toString(),this.inherited(arguments);
},buildRendering:function(){this.inherited(arguments),this.valueNode=i.place("<input type='hidden'"+(this.name&&!e("msapp")?' name="'+this.name.replace(/"/g,"&quot;")+'"':"")+"/>",this.textbox,"after");
},reset:function(){this.valueNode.value="",this.inherited(arguments)}})});