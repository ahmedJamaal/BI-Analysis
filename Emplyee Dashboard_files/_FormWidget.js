define(["dojo/_base/declare","dojo/sniff","dojo/_base/kernel","dojo/ready","../_Widget","../_CssStateMixin","../_TemplatedMixin","./_FormWidgetMixin"],function(e,t,i,s,d,a,r,n){
return t("dijit-legacy-requires")&&s(0,function(){var e=["dijit/form/_FormValueWidget"];
require(e)}),e("dijit.form._FormWidget",[d,r,a,n],{setDisabled:function(e){i.deprecated("setDisabled("+e+") is deprecated. Use set('disabled',"+e+") instead.","","2.0"),
this.set("disabled",e)},setValue:function(e){i.deprecated("dijit.form._FormWidget:setValue("+e+") is deprecated.  Use set('value',"+e+") instead.","","2.0"),
this.set("value",e)},getValue:function(){return i.deprecated(this.declaredClass+"::getValue() is deprecated. Use get('value') instead.","","2.0"),
this.get("value")},postMixInProperties:function(){this.nameAttrSetting=this.name&&!t("msapp")?'name="'+this.name.replace(/"/g,"&quot;")+'"':"",
this.inherited(arguments)},_setTypeAttr:null})});