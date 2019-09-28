define(["dojo/on","dojo/_base/array","dojo/keys","dojo/_base/declare","dojo/has","./a11yclick"],function(i,n,o,e,c,t){
var a=e("dijit._OnDijitClickMixin",null,{connect:function(i,n,o){return this.inherited(arguments,[i,"ondijitclick"==n?t:n,o]);
}});return a.a11yclick=t,a});