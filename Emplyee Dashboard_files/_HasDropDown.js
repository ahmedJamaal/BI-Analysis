define(["dojo/_base/declare","dojo/_base/Deferred","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/keys","dojo/_base/lang","dojo/on","dojo/touch","./registry","./focus","./popup","./_FocusMixin"],function(o,t,e,i,n,s,p,r,d,h,a,u,l,D,c,f){
return o("dijit._HasDropDown",f,{_buttonNode:null,_arrowWrapperNode:null,_popupStateNode:null,
_aroundNode:null,dropDown:null,autoWidth:!0,forceWidth:!1,maxHeight:-1,dropDownPosition:["below","above"],
_stopClickEvents:!0,_onDropDownMouseDown:function(o){this.disabled||this.readOnly||("MSPointerDown"!=o.type&&"pointerdown"!=o.type&&o.preventDefault(),
this._docHandler=this.own(a(this.ownerDocument,u.release,h.hitch(this,"_onDropDownMouseUp")))[0],
this.toggleDropDown())},_onDropDownMouseUp:function(o){o&&this._docHandler&&(this._docHandler.remove(),
this._docHandler=null);var t=this.dropDown,e=!1;if(o&&this._opened){var i=s.position(this._buttonNode,!0);
if(!(o.pageX>=i.x&&o.pageX<=i.x+i.w&&o.pageY>=i.y&&o.pageY<=i.y+i.h)){for(var p=o.target;p&&!e;)n.contains(p,"dijitPopup")?e=!0:p=p.parentNode;
if(e){if(p=o.target,t.onItemClick){for(var r;p&&!(r=l.byNode(p));)p=p.parentNode;r&&r.onClick&&r.getParent&&r.getParent().onItemClick(r,o);
}return}}}this._opened?t.focus&&(t.autoFocus!==!1||"mouseup"==o.type&&!this.hovering)&&(this._focusDropDownTimer=this.defer(function(){
t.focus(),delete this._focusDropDownTimer})):this.focus&&this.defer("focus")},_onDropDownClick:function(o){
this._stopClickEvents&&(o.stopPropagation(),o.preventDefault())},buildRendering:function(){
this.inherited(arguments),this._buttonNode=this._buttonNode||this.focusNode||this.domNode,
this._popupStateNode=this._popupStateNode||this.focusNode||this._buttonNode;var o={
after:this.isLeftToRight()?"Right":"Left",before:this.isLeftToRight()?"Left":"Right",
above:"Up",below:"Down",left:"Left",right:"Right"}[this.dropDownPosition[0]]||this.dropDownPosition[0]||"Down";
n.add(this._arrowWrapperNode||this._buttonNode,"dijit"+o+"ArrowButton")},postCreate:function(){
this.inherited(arguments);var o=this.focusNode||this.domNode;this.own(a(this._buttonNode,u.press,h.hitch(this,"_onDropDownMouseDown")),a(this._buttonNode,"click",h.hitch(this,"_onDropDownClick")),a(o,"keydown",h.hitch(this,"_onKey")),a(o,"keyup",h.hitch(this,"_onKeyUp")));
},destroy:function(){this.dropDown&&(this.dropDown._destroyed||this.dropDown.destroyRecursive(),
delete this.dropDown),this.inherited(arguments)},_onKey:function(o){if(!this.disabled&&!this.readOnly){
var t=this.dropDown,e=o.target;return t&&this._opened&&t.handleKey&&t.handleKey(o)===!1?(o.stopPropagation(),
void o.preventDefault()):void(t&&this._opened&&o.keyCode==d.ESCAPE?(this.closeDropDown(),
o.stopPropagation(),o.preventDefault()):!this._opened&&(o.keyCode==d.DOWN_ARROW||(o.keyCode==d.ENTER||o.keyCode==d.SPACE&&(!this._searchTimer||o.ctrlKey||o.altKey||o.metaKey))&&("input"!==(e.tagName||"").toLowerCase()||e.type&&"text"!==e.type.toLowerCase()))&&(this._toggleOnKeyUp=!0,
o.stopPropagation(),o.preventDefault()))}},_onKeyUp:function(){if(this._toggleOnKeyUp){
delete this._toggleOnKeyUp,this.toggleDropDown();var o=this.dropDown;o&&o.focus&&this.defer(h.hitch(o,"focus"),1);
}},_onBlur:function(){this.closeDropDown(!1),this.inherited(arguments)},isLoaded:function(){
return!0},loadDropDown:function(o){o()},loadAndOpenDropDown:function(){var o=new t,e=h.hitch(this,function(){
this.openDropDown(),o.resolve(this.dropDown)});return this.isLoaded()?e():this.loadDropDown(e),
o},toggleDropDown:function(){this.disabled||this.readOnly||(this._opened?this.closeDropDown(!0):this.loadAndOpenDropDown());
},openDropDown:function(){var o=this.dropDown,t=o.domNode,e=this._aroundNode||this.domNode,p=this,r=c.open({
parent:this,popup:o,around:e,orient:this.dropDownPosition,maxHeight:this.maxHeight,
onExecute:function(){p.closeDropDown(!0)},onCancel:function(){p.closeDropDown(!0);
},onClose:function(){"undefined"!=typeof p._popupStateNode&&null!=p._popupStateNode&&(i.set(p._popupStateNode,"popupActive",!1),
n.remove(p._popupStateNode,"dijitHasDropDownOpen")),p._set("_opened",!1)}});if(this.forceWidth||this.autoWidth&&e.offsetWidth>o._popupWrapper.offsetWidth){
var d={w:e.offsetWidth-(o._popupWrapper.offsetWidth-o.domNode.offsetWidth)};h.isFunction(o.resize)?o.resize(d):s.setMarginBox(t,d);
}return"undefined"!=typeof p._popupStateNode&&null!=p._popupStateNode&&(i.set(this._popupStateNode,"popupActive","true"),
n.add(this._popupStateNode,"dijitHasDropDownOpen")),this._set("_opened",!0),"undefined"!=typeof p._popupStateNode&&null!=p._popupStateNode&&(this._popupStateNode.setAttribute("aria-expanded","true"),
this._popupStateNode.setAttribute("aria-owns",o.id)),"presentation"===t.getAttribute("role")||t.getAttribute("aria-labelledby")||t.setAttribute("aria-labelledby",this.id),
r},closeDropDown:function(o){this._focusDropDownTimer&&(this._focusDropDownTimer.remove(),
delete this._focusDropDownTimer),this._opened&&(this._popupStateNode.setAttribute("aria-expanded","false"),
o&&this.focus(),c.close(this.dropDown),this._opened=!1,$("#queryOptions").removeClass("checked"));
}})});