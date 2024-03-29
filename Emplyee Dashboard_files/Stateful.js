define(["./_base/declare","./_base/lang","./_base/array","./when"],function(t,a,e,i){
return t("dojo.Stateful",null,{_attrPairNames:{},_getAttrNames:function(t){var a=this._attrPairNames;
return a[t]?a[t]:a[t]={s:"_"+t+"Setter",g:"_"+t+"Getter"}},postscript:function(t){
t&&this.set(t)},_get:function(t,a){return"function"==typeof this[a.g]?this[a.g]():this[t];
},get:function(t){return this._get(t,this._getAttrNames(t))},set:function(t,a){if("object"==typeof t){
for(var e in t)t.hasOwnProperty(e)&&"_watchCallbacks"!=e&&this.set(e,t[e]);return this;
}var s,r=this._getAttrNames(t),n=this._get(t,r),c=this[r.s];if("function"==typeof c?s=c.apply(this,Array.prototype.slice.call(arguments,1)):this[t]=a,
this._watchCallbacks){var h=this;i(s,function(){h._watchCallbacks(t,n,a)})}return this;
},_changeAttrValue:function(t,a){var e=this.get(t);return this[t]=a,this._watchCallbacks&&this._watchCallbacks(t,e,a),
this},watch:function(t,a){var i=this._watchCallbacks;if(!i){var s=this;i=this._watchCallbacks=function(t,a,e,r){
var n=function(i){if(i){i=i.slice();for(var r=0,n=i.length;n>r;r++)i[r].call(s,t,a,e);
}};n(i["_"+t]),r||n(i["*"])}}a||"function"!=typeof t?t="_"+t:(a=t,t="*");var r=i[t];
"object"!=typeof r&&(r=i[t]=[]),r.push(a);var n={};return n.unwatch=n.remove=function(){
var t=e.indexOf(r,a);t>-1&&r.splice(t,1)},n}})});