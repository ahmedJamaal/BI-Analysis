define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/keys","dojo/_base/lang","dojo/on","./place","./BackgroundIframe","./Viewport","./main"],function(e,o,t,i,n,r,s,a,p,d,l,h,u,c,f,g){
function v(){this._popupWrapper&&(r.destroy(this._popupWrapper),delete this._popupWrapper);
}var _=t(null,{_stack:[],_beginZIndex:1e3,_idGen:1,_repositionAll:function(){if(this._firstAroundNode){
var e=this._firstAroundPosition,o=s.position(this._firstAroundNode,!0),t=o.x-e.x,i=o.y-e.y;
if(t||i){this._firstAroundPosition=o;for(var n=0;n<this._stack.length;n++){var r=this._stack[n].wrapper.style;
r.top=parseInt(r.top,10)+i+"px","auto"==r.right?r.left=parseInt(r.left,10)+t+"px":r.right=parseInt(r.right,10)-t+"px";
}}this._aroundMoveListener=setTimeout(l.hitch(this,"_repositionAll"),t||i?10:50)}
},_createWrapper:function(e){var t=e._popupWrapper,i=e.domNode;if(!t){t=r.create("div",{
"class":"dijitPopup",style:{display:"none"},role:"region","aria-label":e["aria-label"]||e.label||e.name||e.id
},e.ownerDocumentBody),t.appendChild(i);var n=i.style;n.display="",n.visibility="",
n.position="",n.top="0px",e._popupWrapper=t,o.after(e,"destroy",v,!0)}return t},moveOffScreen:function(e){
var o=this._createWrapper(e),t=s.isBodyLtr(e.ownerDocument),i={visibility:"hidden",
top:"-9999px",display:""};return i[t?"left":"right"]="-9999px",i[t?"right":"left"]="auto",
a.set(o,i),o},hide:function(e){var o=this._createWrapper(e);a.set(o,{display:"none",
height:"auto",overflow:"visible",border:""});var t=e.domNode;"_originalStyle"in t&&(t.style.cssText=t._originalStyle);
},getTopPopup:function(){for(var e=this._stack,o=e.length-1;o>0&&e[o].parent===e[o-1].widget;o--);
return e[o]},open:function(e){for(var o=this._stack,t=e.popup,r=t.domNode,g=e.orient||["below","below-alt","above","above-alt"],v=e.parent?e.parent.isLeftToRight():s.isBodyLtr(t.ownerDocument),_=e.around,y=e.around&&e.around.id?e.around.id+"_dropdown":"popup_"+this._idGen++;o.length&&(!e.parent||!i.isDescendant(e.parent.domNode,o[o.length-1].widget.domNode));)this.close(o[o.length-1].widget);
var m=this.moveOffScreen(t);t.startup&&!t._started&&t.startup();var b,x=s.position(r);
if("maxHeight"in e&&-1!=e.maxHeight)b=e.maxHeight||1/0;else{var w=f.getEffectiveBox(this.ownerDocument),C=_?s.position(_,!1):{
y:e.y-(e.padding||0),h:2*(e.padding||0)};b=Math.floor(Math.max(C.y,w.h-(C.y+C.h)));
}if(x.h>b){var j=a.getComputedStyle(r),L=j.borderLeftWidth+" "+j.borderLeftStyle+" "+j.borderLeftColor;
a.set(m,{overflowY:"scroll",height:b+"px",border:L}),r._originalStyle=r.style.cssText,
r.style.border="none"}n.set(m,{id:y,style:{zIndex:this._beginZIndex+o.length},"class":"dijitPopup "+(t.baseClass||t["class"]||"").split(" ")[0]+"Popup",
dijitPopupParent:e.parent?e.parent.id:""}),0==o.length&&_&&(this._firstAroundNode=_,
this._firstAroundPosition=s.position(_,!0),this._aroundMoveListener=setTimeout(l.hitch(this,"_repositionAll"),50)),
p("config-bgIframe")&&!t.bgIframe&&(t.bgIframe=new c(m));var P=t.orient?l.hitch(t,"orient"):null,T=_?u.around(m,_,g,v,P):u.at(m,e,"R"==g?["TR","BR","TL","BL"]:["TL","BL","TR","BR"],e.padding,P);
m.style.visibility="visible",r.style.visibility="visible";var A=[];return A.push(h(m,"keydown",l.hitch(this,function(o){
if(o.keyCode==d.ESCAPE&&e.onCancel)o.stopPropagation(),o.preventDefault(),e.onCancel();else if(o.keyCode==d.TAB){
o.stopPropagation(),o.preventDefault();var t=this.getTopPopup();t&&t.onCancel&&t.onCancel();
}}))),t.onCancel&&e.onCancel&&A.push(t.on("cancel",e.onCancel)),A.push(t.on(t.onExecute?"execute":"change",l.hitch(this,function(){
var e=this.getTopPopup();e&&e.onExecute&&e.onExecute()}))),o.push({widget:t,wrapper:m,
parent:e.parent,onExecute:e.onExecute,onCancel:e.onCancel,onClose:e.onClose,handlers:A
}),t.onOpen&&t.onOpen(T),T},close:function(o){for(var t=this._stack;o&&e.some(t,function(e){
return e.widget==o})||!o&&t.length;){var i=t.pop(),n=i.widget,r=i.onClose;n.onClose&&n.onClose();
for(var s;s=i.handlers.pop();)s.remove();n&&n.domNode&&this.hide(n),r&&r()}0==t.length&&this._aroundMoveListener&&(clearTimeout(this._aroundMoveListener),
this._firstAroundNode=this._firstAroundPosition=this._aroundMoveListener=null)}});
return g.popup=new _});