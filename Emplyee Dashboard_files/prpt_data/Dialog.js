define(["require","dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/Deferred","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/fx","dojo/i18n","dojo/keys","dojo/_base/lang","dojo/on","dojo/ready","dojo/sniff","dojo/window","dojo/dnd/Moveable","dojo/dnd/TimedMoveable","./focus","./_base/manager","./_Widget","./_TemplatedMixin","./_CssStateMixin","./form/_FormMixin","./_DialogMixin","./DialogUnderlay","./layout/ContentPane","dojo/text!./templates/Dialog.html","dojo/i18n!./nls/common"],function(t,e,i,o,s,n,d,h,a,r,l,c,u,f,_,g,m,p,D,y,v,w,I,x,N,j,C,b,M){
var F=o("dijit._DialogBase"+(g("dojo-bidi")?"_NoBidi":""),[I,N,j,x],{templateString:M,
baseClass:"dijitDialog",cssStateNodes:{closeButtonNode:"dijitDialogCloseIcon"},_setTitleAttr:{
node:"titleNode",type:"innerHTML"},open:!1,duration:v.defaultDuration,refocus:!0,
autofocus:!0,_firstFocusItem:null,_lastFocusItem:null,doLayout:!1,draggable:!0,_setDraggableAttr:function(t){
this._set("draggable",t)},maxRatio:.9,closable:!0,_setClosableAttr:function(t){this.closeButtonNode.style.display=t?"":"none",
this._set("closable",t)},postMixInProperties:function(){var t=l.getLocalization("dijit","common");
u.mixin(this,t),this.inherited(arguments)},postCreate:function(){a.set(this.domNode,{
display:"none",position:"absolute"}),this.ownerDocumentBody.appendChild(this.domNode),
this.inherited(arguments),i.after(this,"onExecute",u.hitch(this,"hide"),!0),i.after(this,"onCancel",u.hitch(this,"hide"),!0),
this._modalconnects=[]},onLoad:function(){this._size(),this._position(),this.autofocus&&O.isTop(this)&&(this._getFocusItems(this.domNode),
y.focus(this._firstFocusItem)),this.inherited(arguments)},focus:function(){this._getFocusItems(this.domNode),
y.focus(this._firstFocusItem)},_endDrag:function(){var t=h.position(this.domNode),e=m.getBox(this.ownerDocument);
t.y=Math.min(Math.max(t.y,0),e.h-t.h),t.x=Math.min(Math.max(t.x,0),e.w-t.w),this._relativePosition=t,
this._position()},_setup:function(){var t=this.domNode;this.titleBar&&this.draggable?(this._moveable=new(6==g("ie")?D:p)(t,{
handle:this.titleBar}),i.after(this._moveable,"onMoveStop",u.hitch(this,"_endDrag"),!0)):d.add(t,"dijitDialogFixed"),
this.underlayAttrs={dialogId:this.id,"class":e.map(this["class"].split(/\s/),function(t){
return t+"_underlay"}).join(" "),_onKeyDown:u.hitch(this,"_onKey"),ownerDocument:this.ownerDocument
}},_size:function(){this._checkIfSingleChild(),this._singleChild?"undefined"!=typeof this._singleChildOriginalStyle&&(this._singleChild.domNode.style.cssText=this._singleChildOriginalStyle,
delete this._singleChildOriginalStyle):a.set(this.containerNode,{width:"auto",height:"auto"
});var t=h.position(this.domNode),e=m.getBox(this.ownerDocument);if(e.w*=this.maxRatio,
e.h*=this.maxRatio,t.w>=e.w||t.h>=e.h){var i=h.position(this.containerNode),o=Math.min(t.w,e.w)-(t.w-i.w),s=Math.min(t.h,e.h)-(t.h-i.h);
this._singleChild&&this._singleChild.resize?("undefined"==typeof this._singleChildOriginalStyle&&(this._singleChildOriginalStyle=this._singleChild.domNode.style.cssText),
this._singleChild.resize({w:o,h:s})):a.set(this.containerNode,{width:o+"px",height:s+"px",
overflow:"auto",position:"relative"})}else this._singleChild&&this._singleChild.resize&&this._singleChild.resize();
},_position:function(){if(!d.contains(this.ownerDocumentBody,"dojoMove")){var t=this.domNode,e=m.getBox(this.ownerDocument),i=this._relativePosition,o=i?null:h.position(t),s=Math.floor(e.l+(i?i.x:(e.w-o.w)/2)),n=Math.floor(e.t+(i?i.y:(e.h-o.h)/2));
a.set(t,{left:s+"px",top:n+"px"})}},_onKey:function(t){if(t.keyCode==c.TAB){this._getFocusItems(this.domNode);
var e=t.target;this._firstFocusItem==this._lastFocusItem?(t.stopPropagation(),t.preventDefault()):e==this._firstFocusItem&&t.shiftKey?(y.focus(this._lastFocusItem),
t.stopPropagation(),t.preventDefault()):e!=this._lastFocusItem||t.shiftKey||(y.focus(this._firstFocusItem),
t.stopPropagation(),t.preventDefault())}else this.closable&&t.keyCode==c.ESCAPE&&(this.onCancel(),
t.stopPropagation(),t.preventDefault())},show:function(){if(!this.open){this._started||this.startup(),
this._alreadyInitialized||(this._setup(),this._alreadyInitialized=!0),this._fadeOutDeferred&&(this._fadeOutDeferred.cancel(),
O.hide(this));var t=m.get(this.ownerDocument);this._modalconnects.push(f(t,"scroll",u.hitch(this,"resize"))),
this._modalconnects.push(f(this.domNode,"keydown",u.hitch(this,"_onKey"))),a.set(this.domNode,{
opacity:0,display:""}),this._set("open",!0),this._onShow(),this._size(),this._position();
var e;this._fadeInDeferred=new s(u.hitch(this,function(){e.stop(),delete this._fadeInDeferred;
}));var i=this._fadeInDeferred.promise;return e=r.fadeIn({node:this.domNode,duration:this.duration,
beforeBegin:u.hitch(this,function(){O.show(this,this.underlayAttrs)}),onEnd:u.hitch(this,function(){
this.autofocus&&O.isTop(this)&&(this._getFocusItems(this.domNode),y.focus(this._firstFocusItem)),
this._fadeInDeferred.resolve(!0),delete this._fadeInDeferred})}).play(),i}},hide:function(){
if(this._alreadyInitialized&&this.open){this._fadeInDeferred&&this._fadeInDeferred.cancel();
var t;this._fadeOutDeferred=new s(u.hitch(this,function(){t.stop(),delete this._fadeOutDeferred;
})),this._fadeOutDeferred.then(u.hitch(this,"onHide"));var e=this._fadeOutDeferred.promise;
t=r.fadeOut({node:this.domNode,duration:this.duration,onEnd:u.hitch(this,function(){
this.domNode.style.display="none",O.hide(this),this._fadeOutDeferred.resolve(!0),
delete this._fadeOutDeferred})}).play(),this._scrollConnected&&(this._scrollConnected=!1);
for(var i;i=this._modalconnects.pop();)i.remove();return this._relativePosition&&delete this._relativePosition,
this._set("open",!1),e}},resize:function(){"none"!=this.domNode.style.display&&(this._size(),
g("touch")||this._position())},destroy:function(){this._fadeInDeferred&&this._fadeInDeferred.cancel(),
this._fadeOutDeferred&&this._fadeOutDeferred.cancel(),this._moveable&&this._moveable.destroy();
for(var t;t=this._modalconnects.pop();)t.remove();O.hide(this),this.inherited(arguments);
}});g("dojo-bidi")&&(F=o("dijit._DialogBase",F,{_setTitleAttr:function(t){this._set("title",t),
this.titleNode.innerHTML=t,this.applyTextDir(this.titleNode)},_setTextDirAttr:function(t){
this._created&&this.textDir!=t&&(this._set("textDir",t),this.set("title",this.title));
}}));var z=o("dijit.Dialog",[b,F],{});z._DialogBase=F;var O=z._DialogLevelManager={
_beginZIndex:950,show:function(t,e){B[B.length-1].focus=y.curNode;var i=B[B.length-1].dialog?B[B.length-1].zIndex+2:z._DialogLevelManager._beginZIndex;
a.set(t.domNode,"zIndex",i),C.show(e,i-1),B.push({dialog:t,underlayAttrs:e,zIndex:i
})},hide:function(t){if(B[B.length-1].dialog==t){B.pop();var i=B[B.length-1];if(1==B.length?C.hide():C.show(i.underlayAttrs,i.zIndex-1),
t.refocus){var o=i.focus;if(!i.dialog||o&&n.isDescendant(o,i.dialog.domNode)||(i.dialog._getFocusItems(i.dialog.domNode),
o=i.dialog._firstFocusItem),o)try{o.focus()}catch(s){}}}else{var d=e.indexOf(e.map(B,function(t){
return t.dialog}),t);-1!=d&&B.splice(d,1)}},isTop:function(t){return B[B.length-1].dialog==t;
}},B=z._dialogStack=[{dialog:null,focus:null,underlayAttrs:null}];return y.watch("curNode",function(t,e,i){
var o=B[B.length-1].dialog;if(i&&o&&!o._fadeOutDeferred&&i.ownerDocument==o.ownerDocument){
do if(i==o.domNode||d.contains(i,"dijitPopup"))return;while(i=i.parentNode);o.focus();
}}),g("dijit-legacy-requires")&&_(0,function(){var e=["dijit/TooltipDialog"];t(e);
}),z});