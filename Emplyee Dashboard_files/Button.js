define(["require","dojo/_base/declare","dojo/dom-class","dojo/has","dojo/_base/kernel","dojo/_base/lang","dojo/ready","./_FormWidget","./_ButtonMixin","dojo/text!./templates/Button.html"],function(t,e,i,o,s,n,a,r,l,d){
o("dijit-legacy-requires")&&a(0,function(){var e=["dijit/form/DropDownButton","dijit/form/ComboButton","dijit/form/ToggleButton"];
t(e)});var h=e("dijit.form.Button"+(o("dojo-bidi")?"_NoBidi":""),[r,l],{showLabel:!0,
iconClass:"dijitNoIcon",_setIconClassAttr:{node:"iconNode",type:"class"},baseClass:"dijitButton",
templateString:d,_setValueAttr:"valueNode",_setNameAttr:function(t){this.valueNode&&this.valueNode.setAttribute("name",t);
},_fillContent:function(t){if(!(!t||this.params&&"label"in this.params)){var e=n.trim(t.innerHTML);
e&&(this.label=e)}},_setShowLabelAttr:function(t){this.containerNode&&i.toggle(this.containerNode,"dijitDisplayNone",!t),
this._set("showLabel",t)},setLabel:function(t){s.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.","","2.0"),
this.set("label",t)},_setLabelAttr:function(t){this.inherited(arguments),this.showLabel||"title"in this.params||(this.titleNode.title=n.trim(this.containerNode.innerText||this.containerNode.textContent||""));
}});return o("dojo-bidi")&&(h=e("dijit.form.Button",h,{_setLabelAttr:function(t){
this.inherited(arguments),this.titleNode.title&&this.applyTextDir(this.titleNode,this.titleNode.title);
},_setTextDirAttr:function(t){this._created&&this.textDir!=t&&(this._set("textDir",t),
this._setLabelAttr(this.label))}})),h});