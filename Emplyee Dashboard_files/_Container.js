define(["dojo/_base/array","dojo/_base/declare","dojo/dom-construct","dojo/_base/kernel"],function(e,i,t,n){
return i("dijit._Container",null,{buildRendering:function(){this.inherited(arguments),
this.containerNode||(this.containerNode=this.domNode)},addChild:function(e,i){var n=this.containerNode;
if(i>0){for(n=n.firstChild;i>0;)1==n.nodeType&&i--,n=n.nextSibling;n?i="before":(n=this.containerNode,
i="last")}t.place(e.domNode,n,i),this._started&&!e._started&&e.startup()},removeChild:function(e){
if("number"==typeof e&&(e=this.getChildren()[e]),e){var i=e.domNode;i&&i.parentNode&&i.parentNode.removeChild(i);
}},hasChildren:function(){return this.getChildren().length>0},_getSiblingOfChild:function(i,t){
n.deprecated(this.declaredClass+"::_getSiblingOfChild() is deprecated. Use _KeyNavMixin::_getNext() instead.","","2.0");
var d=this.getChildren(),r=e.indexOf(d,i);return d[r+t]},getIndexOfChild:function(i){
return e.indexOf(this.getChildren(),i)}})});