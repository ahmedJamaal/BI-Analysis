define(["dojo/_base/array","dojo/_base/declare","dojo/_base/fx","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang","dojo/mouse","dojo/on","dojo/sniff","./_base/manager","./place","./_Widget","./_TemplatedMixin","./BackgroundIframe","dojo/text!./templates/Tooltip.html","./main"],function(t,o,e,i,n,s,h,r,d,c,a,l,u,f,m,T,_,p){
var N=o("dijit._MasterTooltip",[f,m],{duration:l.defaultDuration,templateString:_,
postCreate:function(){this.ownerDocumentBody.appendChild(this.domNode),this.bgIframe=new T(this.domNode),
this.fadeIn=e.fadeIn({node:this.domNode,duration:this.duration,onEnd:r.hitch(this,"_onShow")
}),this.fadeOut=e.fadeOut({node:this.domNode,duration:this.duration,onEnd:r.hitch(this,"_onHide")
})},show:function(t,o,e,i,n){if(!this.aroundNode||this.aroundNode!==o||this.containerNode.innerHTML!=t){
if("playing"==this.fadeOut.status())return void(this._onDeck=arguments);this.containerNode.innerHTML=t,
n&&this.set("textDir",n),this.containerNode.align=i?"right":"left";var s=u.around(this.domNode,o,e&&e.length?e:w.defaultPosition,!i,r.hitch(this,"orient")),d=s.aroundNodePos;
"M"==s.corner.charAt(0)&&"M"==s.aroundCorner.charAt(0)?(this.connectorNode.style.top=d.y+(d.h-this.connectorNode.offsetHeight>>1)-s.y+"px",
this.connectorNode.style.left=""):"M"==s.corner.charAt(1)&&"M"==s.aroundCorner.charAt(1)?this.connectorNode.style.left=d.x+(d.w-this.connectorNode.offsetWidth>>1)-s.x+"px":(this.connectorNode.style.left="",
this.connectorNode.style.top=""),h.set(this.domNode,"opacity",0),this.fadeIn.play(),
this.isShowingNow=!0,this.aroundNode=o}},orient:function(t,o,e,i,n){this.connectorNode.style.top="";
var h=i.h,r=i.w;t.className="dijitTooltip "+{"MR-ML":"dijitTooltipRight","ML-MR":"dijitTooltipLeft",
"TM-BM":"dijitTooltipAbove","BM-TM":"dijitTooltipBelow","BL-TL":"dijitTooltipBelow dijitTooltipABLeft",
"TL-BL":"dijitTooltipAbove dijitTooltipABLeft","BR-TR":"dijitTooltipBelow dijitTooltipABRight",
"TR-BR":"dijitTooltipAbove dijitTooltipABRight","BR-BL":"dijitTooltipRight","BL-BR":"dijitTooltipLeft"
}[o+"-"+e],this.domNode.style.width="auto";var d=s.position(this.domNode);9==a("ie")&&(d.w+=2);
var c=Math.min(Math.max(r,1),d.w);if(s.setMarginBox(this.domNode,{w:c}),"B"==e.charAt(0)&&"B"==o.charAt(0)){
var l=s.position(t),u=this.connectorNode.offsetHeight;if(l.h>h){var f=h-(n.h+u>>1);
this.connectorNode.style.top=f+"px",this.connectorNode.style.bottom=""}else this.connectorNode.style.bottom=Math.min(Math.max(n.h/2-u/2,0),l.h-u)+"px",
this.connectorNode.style.top=""}else this.connectorNode.style.top="",this.connectorNode.style.bottom="";
return Math.max(0,d.w-r)},_onShow:function(){a("ie")&&(this.domNode.style.filter="");
},hide:function(t){this._onDeck&&this._onDeck[1]==t?this._onDeck=null:this.aroundNode===t&&(this.fadeIn.stop(),
this.isShowingNow=!1,this.aroundNode=null,this.fadeOut.play())},_onHide:function(){
this.domNode.style.cssText="",this.containerNode.innerHTML="",this._onDeck&&(this.show.apply(this,this._onDeck),
this._onDeck=null)}});a("dojo-bidi")&&N.extend({_setAutoTextDir:function(o){this.applyTextDir(o),
t.forEach(o.children,function(t){this._setAutoTextDir(t)},this)},_setTextDirAttr:function(t){
this._set("textDir",t),"auto"==t?this._setAutoTextDir(this.containerNode):this.containerNode.dir=this.textDir;
}}),p.showTooltip=function(o,e,i,n,s){return i&&(i=t.map(i,function(t){return{after:"after-centered",
before:"before-centered"}[t]||t})),w._masterTT||(p._masterTT=w._masterTT=new N),w._masterTT.show(o,e,i,n,s);
},p.hideTooltip=function(t){return w._masterTT&&w._masterTT.hide(t)};var w=o("dijit.Tooltip",f,{
label:"",showDelay:400,connectId:[],position:[],selector:"",_setConnectIdAttr:function(o){
t.forEach(this._connections||[],function(o){t.forEach(o,function(t){t.remove()})},this),
this._connectIds=t.filter(r.isArrayLike(o)?o:o?[o]:[],function(t){return i.byId(t,this.ownerDocument);
},this),this._connections=t.map(this._connectIds,function(t){var o=i.byId(t,this.ownerDocument),e=this.selector,n=e?function(t){
return c.selector(e,t)}:function(t){return t},s=this;return[c(o,n(d.enter),function(){
s._onHover(this)}),c(o,n("focusin"),function(){s._onHover(this)}),c(o,n(d.leave),r.hitch(s,"_onUnHover")),c(o,n("focusout"),r.hitch(s,"_onUnHover"))];
},this),this._set("connectId",o)},addTarget:function(o){var e=o.id||o;-1==t.indexOf(this._connectIds,e)&&this.set("connectId",this._connectIds.concat(e));
},removeTarget:function(o){var e=o.id||o,i=t.indexOf(this._connectIds,e);i>=0&&(this._connectIds.splice(i,1),
this.set("connectId",this._connectIds))},buildRendering:function(){this.inherited(arguments),
n.add(this.domNode,"dijitTooltipData")},startup:function(){this.inherited(arguments);
var o=this.connectId;t.forEach(r.isArrayLike(o)?o:[o],this.addTarget,this)},getContent:function(t){
return this.label||this.domNode.innerHTML},_onHover:function(t){this._showTimer||(this._showTimer=this.defer(function(){
this.open(t)},this.showDelay))},_onUnHover:function(){this._showTimer&&(this._showTimer.remove(),
delete this._showTimer),this.close()},open:function(t){this._showTimer&&(this._showTimer.remove(),
delete this._showTimer);var o=this.getContent(t);o&&(w.show(o,t,this.position,!this.isLeftToRight(),this.textDir),
this._connectNode=t,this.onShow(t,this.position))},close:function(){this._connectNode&&(w.hide(this._connectNode),
delete this._connectNode,this.onHide()),this._showTimer&&(this._showTimer.remove(),
delete this._showTimer)},onShow:function(){},onHide:function(){},destroy:function(){
this.close(),t.forEach(this._connections||[],function(o){t.forEach(o,function(t){
t.remove()})},this),this.inherited(arguments)}});return w._MasterTooltip=N,w.show=p.showTooltip,
w.hide=p.hideTooltip,w.defaultPosition=["after-centered","before-centered"],w});