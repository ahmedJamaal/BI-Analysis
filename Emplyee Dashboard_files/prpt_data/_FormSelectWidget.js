define(["dojo/_base/array","dojo/_base/Deferred","dojo/aspect","dojo/data/util/sorter","dojo/_base/declare","dojo/dom","dojo/dom-class","dojo/_base/kernel","dojo/_base/lang","dojo/query","dojo/when","dojo/store/util/QueryResults","./_FormValueWidget"],function(t,e,i,n,o,s,r,l,u,a,h,d,c){
var f=o("dijit.form._FormSelectWidget",c,{multiple:!1,options:null,store:null,query:null,
queryOptions:null,labelAttr:"",onFetch:null,sortByLabel:!0,loadChildrenOnOpen:!1,
onLoadDeferred:null,getOptions:function(e){var i=this.options||[];return null==e?i:u.isArray(e)?t.map(e,"return this.getOptions(item);",this):(u.isString(e)&&(e={
value:e}),u.isObject(e)&&(t.some(i,function(t,i){for(var n in e)if(!(n in t)||t[n]!=e[n])return!1;
return e=i,!0})||(e=-1)),e>=0&&e<i.length?i[e]:null)},addOption:function(e){t.forEach(u.isArray(e)?e:[e],function(t){
t&&u.isObject(t)&&this.options.push(t)},this),this._loadChildren()},removeOption:function(e){
var i=this.getOptions(u.isArray(e)?e:[e]);t.forEach(i,function(e){e&&(this.options=t.filter(this.options,function(t){
return t.value!==e.value||t.label!==e.label}),this._removeOptionItem(e))},this),this._loadChildren();
},updateOption:function(e){t.forEach(u.isArray(e)?e:[e],function(t){var e,i=this.getOptions({
value:t.value});if(i)for(e in t)i[e]=t[e]},this),this._loadChildren()},setStore:function(o,s,r){
var l=this.store;if(r=r||{},l!==o){for(var a;a=this._notifyConnections.pop();)a.remove();
o.get||(u.mixin(o,{_oldAPI:!0,get:function(t){var i=new e;return this.fetchItemByIdentity({
identity:t,onItem:function(t){i.resolve(t)},onError:function(t){i.reject(t)}}),i.promise;
},query:function(t,i){var n=new e(function(){o.abort&&o.abort()});n.total=new e;var o=this.fetch(u.mixin({
query:t,onBegin:function(t){n.total.resolve(t)},onComplete:function(t){n.resolve(t);
},onError:function(t){n.reject(t)}},i));return new d(n)}}),o.getFeatures()["dojo.data.api.Notification"]&&(this._notifyConnections=[i.after(o,"onNew",u.hitch(this,"_onNewItem"),!0),i.after(o,"onDelete",u.hitch(this,"_onDeleteItem"),!0),i.after(o,"onSet",u.hitch(this,"_onSetItem"),!0)])),
this._set("store",o)}return this.options&&this.options.length&&this.removeOption(this.options),
this._queryRes&&this._queryRes.close&&this._queryRes.close(),this._observeHandle&&this._observeHandle.remove&&(this._observeHandle.remove(),
this._observeHandle=null),r.query&&(this._set("query",r.query),this._set("queryOptions",r.queryOptions)),
o&&(this._loadingStore=!0,this.onLoadDeferred=new e,this._queryRes=o.query(this.query,this.queryOptions),
h(this._queryRes,u.hitch(this,function(e){if(this.sortByLabel&&!r.sort&&e.length)if(o.getValue)e.sort(n.createSortFunction([{
attribute:o.getLabelAttributes(e[0])[0]}],o));else{var i=this.labelAttr;e.sort(function(t,e){
return t[i]>e[i]?1:e[i]>t[i]?-1:0})}r.onFetch&&(e=r.onFetch.call(this,e,r)),t.forEach(e,function(t){
this._addOptionForItem(t)},this),this._queryRes.observe&&(this._observeHandle=this._queryRes.observe(u.hitch(this,function(t,e,i){
e==i?this._onSetItem(t):(-1!=e&&this._onDeleteItem(t),-1!=i&&this._onNewItem(t))}),!0)),
this._loadingStore=!1,this.set("value","_pendingValue"in this?this._pendingValue:s),
delete this._pendingValue,this.loadChildrenOnOpen?this._pseudoLoadChildren(e):this._loadChildren(),
this.onLoadDeferred.resolve(!0),this.onSetStore()}),function(t){console.error("dijit.form.Select: "+t.toString()),
this.onLoadDeferred.reject(t)})),l},_setValueAttr:function(e,i){if(this._onChangeActive||(i=null),
this._loadingStore)return void(this._pendingValue=e);if(null!=e){e=u.isArray(e)?t.map(e,function(t){
return u.isObject(t)?t:{value:t}}):u.isObject(e)?[e]:[{value:e}],e=t.filter(this.getOptions(e),function(t){
return t&&t.value});var n=this.getOptions()||[];this.multiple||e[0]&&e[0].value||!n.length||(e[0]=n[0]),
t.forEach(n,function(i){i.selected=t.some(e,function(t){return t.value===i.value});
});var o=t.map(e,function(t){return t.value});if("undefined"!=typeof o&&"undefined"!=typeof o[0]){
var s=t.map(e,function(t){return t.label});this._setDisplay(this.multiple?s:s[0]),
this.inherited(arguments,[this.multiple?o:o[0],i]),this._updateSelection()}}},_getDisplayedValueAttr:function(){
var e=t.map([].concat(this.get("selectedOptions")),function(t){return t&&"label"in t?t.label:t?t.value:null;
},this);return this.multiple?e:e[0]},_setDisplayedValueAttr:function(t){this.set("value",this.getOptions("string"==typeof t?{
label:t}:t))},_loadChildren:function(){this._loadingStore||(t.forEach(this._getChildren(),function(t){
t.destroyRecursive()}),t.forEach(this.options,this._addOptionItem,this),this._updateSelection());
},_updateSelection:function(){this.focusedChild=null,this._set("value",this._getValueFromOpts());
var e=[].concat(this.value);if(e&&e[0]){var i=this;t.forEach(this._getChildren(),function(n){
var o=t.some(e,function(t){return n.option&&t===n.option.value});o&&!i.multiple&&(i.focusedChild=n),
r.toggle(n.domNode,this.baseClass.replace(/\s+|$/g,"SelectedOption "),o),n.domNode.setAttribute("aria-selected",o?"true":"false");
},this)}},_getValueFromOpts:function(){var e=this.getOptions()||[];if(!this.multiple&&e.length){
var i=t.filter(e,function(t){return t.selected})[0];return i&&i.value?i.value:(e[0].selected=!0,
e[0].value)}return this.multiple?t.map(t.filter(e,function(t){return t.selected}),function(t){
return t.value})||[]:""},_onNewItem:function(t,e){e&&e.parent||this._addOptionForItem(t);
},_onDeleteItem:function(t){var e=this.store;this.removeOption({value:e.getIdentity(t)
})},_onSetItem:function(t){this.updateOption(this._getOptionObjForItem(t))},_getOptionObjForItem:function(t){
var e=this.store,i=this.labelAttr&&this.labelAttr in t?t[this.labelAttr]:e.getLabel(t),n=i?e.getIdentity(t):null;
return{value:n,label:i,item:t}},_addOptionForItem:function(t){var e=this.store;if(e.isItemLoaded&&!e.isItemLoaded(t))return void e.loadItem({
item:t,onItem:function(t){this._addOptionForItem(t)},scope:this});var i=this._getOptionObjForItem(t);
this.addOption(i)},constructor:function(t){this._oValue=(t||{}).value||null,this._notifyConnections=[];
},buildRendering:function(){this.inherited(arguments),s.setSelectable(this.focusNode,!1);
},_fillContent:function(){this.options||(this.options=this.srcNodeRef?a("> *",this.srcNodeRef).map(function(t){
return"separator"===t.getAttribute("type")?{value:"",label:"",selected:!1,disabled:!1
}:{value:t.getAttribute("data-"+l._scopeName+"-value")||t.getAttribute("value"),label:String(t.innerHTML),
selected:t.getAttribute("selected")||!1,disabled:t.getAttribute("disabled")||!1}},this):[]),
this.value?this.multiple&&"string"==typeof this.value&&this._set("value",this.value.split(",")):this._set("value",this._getValueFromOpts());
},postCreate:function(){this.inherited(arguments),i.after(this,"onChange",u.hitch(this,"_updateSelection"));
var t=this.store;t&&(t.getIdentity||t.getFeatures()["dojo.data.api.Identity"])&&(this.store=null,
this.setStore(t,this._oValue))},startup:function(){this._loadChildren(),this.inherited(arguments);
},destroy:function(){for(var t;t=this._notifyConnections.pop();)t.remove();this._queryRes&&this._queryRes.close&&this._queryRes.close(),
this._observeHandle&&this._observeHandle.remove&&(this._observeHandle.remove(),this._observeHandle=null),
this.inherited(arguments)},_addOptionItem:function(){},_removeOptionItem:function(){},
_setDisplay:function(){},_getChildren:function(){return[]},_getSelectedOptionsAttr:function(){
return this.getOptions({selected:!0})},_pseudoLoadChildren:function(){},onSetStore:function(){}
});return f});