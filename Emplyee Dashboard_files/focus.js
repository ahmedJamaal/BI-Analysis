define(["dojo/aspect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/Evented","dojo/_base/lang","dojo/on","dojo/domReady","dojo/sniff","dojo/Stateful","dojo/_base/window","dojo/window","./a11y","./registry","./main"],function(e,t,o,i,s,r,c,n,u,d,a,h,f,l,m,g,_){
var v,N=t([h,c],{curNode:null,activeStack:[],constructor:function(){var t=n.hitch(this,function(e){
o.isDescendant(this.curNode,e)&&this.set("curNode",null),o.isDescendant(this.prevNode,e)&&this.set("prevNode",null);
});e.before(r,"empty",t),e.before(r,"destroy",t)},registerIframe:function(e){return this.registerWin(e.contentWindow,e);
},registerWin:function(e,t){var o=this,i=e.document&&e.document.body;if(i){var s=u(e.document,"mousedown, touchstart",function(e){
o._justMouseDowned=!0,setTimeout(function(){o._justMouseDowned=!1},0),e&&e.target&&null==e.target.parentNode||o._onTouchNode(t||e.target,"mouse");
}),r=u(i,"focusin",function(e){if(v=(new Date).getTime(),e.target.tagName){var i=e.target.tagName.toLowerCase();
"#document"!=i&&"body"!=i&&(m.isFocusable(e.target)?o._onFocusNode(t||e.target):o._onTouchNode(t||e.target));
}}),c=u(i,"focusout",function(e){(new Date).getTime()<v+100||o._onBlurNode(t||e.target);
});return{remove:function(){s.remove(),r.remove(),c.remove(),s=r=c=null,i=null}}}
},_onBlurNode:function(e){this._clearFocusTimer&&clearTimeout(this._clearFocusTimer),
this._clearFocusTimer=setTimeout(n.hitch(this,function(){this.set("prevNode",this.curNode),
this.set("curNode",null)}),0),this._justMouseDowned||(this._clearActiveWidgetsTimer&&clearTimeout(this._clearActiveWidgetsTimer),
this._clearActiveWidgetsTimer=setTimeout(n.hitch(this,function(){delete this._clearActiveWidgetsTimer,
this._setStack([])}),0))},_onTouchNode:function(e,t){this._clearActiveWidgetsTimer&&(clearTimeout(this._clearActiveWidgetsTimer),
delete this._clearActiveWidgetsTimer),s.contains(e,"dijitPopup")&&(e=e.firstChild);
var o=[];try{for(;e;){var r=i.get(e,"dijitPopupParent");if(r)e=g.byId(r).domNode;else if(e.tagName&&"body"==e.tagName.toLowerCase()){
if(e===f.body())break;e=l.get(e.ownerDocument).frameElement}else{var c=e.getAttribute&&e.getAttribute("widgetId"),n=c&&g.byId(c);
!n||"mouse"==t&&n.get("disabled")||o.unshift(c),e=e.parentNode}}}catch(u){}this._setStack(o,t);
},_onFocusNode:function(e){e&&9!=e.nodeType&&(this._clearFocusTimer&&(clearTimeout(this._clearFocusTimer),
delete this._clearFocusTimer),this._onTouchNode(e),e!=this.curNode&&(this.set("prevNode",this.curNode),
this.set("curNode",e)))},_setStack:function(e,t){var o=this.activeStack,i=o.length-1,s=e.length-1;
if(e[s]!=o[i]){this.set("activeStack",e);var r,c;for(c=i;c>=0&&o[c]!=e[c];c--)r=g.byId(o[c]),
r&&(r._hasBeenBlurred=!0,r.set("focused",!1),r._focusManager==this&&r._onBlur(t),
this.emit("widget-blur",r,t));for(c++;s>=c;c++)r=g.byId(e[c]),r&&(r.set("focused",!0),
r._focusManager==this&&r._onFocus(t),this.emit("widget-focus",r,t))}},focus:function(e){
if(e)try{e.focus()}catch(t){}}}),T=new N;d(function(){var e=T.registerWin(l.get(document));
a("ie")&&u(window,"unload",function(){e&&(e.remove(),e=null)})}),_.focus=function(e){
T.focus(e)};for(var w in T)/^_/.test(w)||(_.focus[w]="function"==typeof T[w]?n.hitch(T,w):T[w]);
return T.watch(function(e,t,o){_.focus[e]=o}),T});