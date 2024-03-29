define(["../_base/array","../_base/declare","../_base/lang","../sniff","../_base/window","../dom","../dom-geometry","../dom-style","../Evented","../on","../touch","./common","./autoscroll"],function(t,o,e,s,n,i,a,r,h,u,l,v,c){
return o("dojo.dnd.Mover",[h],{constructor:function(t,o,s){function n(t){t.preventDefault(),
t.stopPropagation()}this.node=i.byId(t),this.marginBox={l:o.pageX,t:o.pageY},this.mouseButton=o.button;
var a=this.host=s,r=t.ownerDocument;this.events=[u(r,l.move,e.hitch(this,"onFirstMove")),u(r,l.move,e.hitch(this,"onMouseMove")),u(r,l.release,e.hitch(this,"onMouseUp")),u(r,"dragstart",n),u(r.body,"selectstart",n)],
c.autoScrollStart(r),a&&a.onMoveStart&&a.onMoveStart(this)},onMouseMove:function(t){
c.autoScroll(t);var o=this.marginBox;this.host.onMove(this,{l:o.l+t.pageX,t:o.t+t.pageY
},t),t.preventDefault(),t.stopPropagation()},onMouseUp:function(t){(s("webkit")&&s("mac")&&2==this.mouseButton?0==t.button:this.mouseButton==t.button)&&this.destroy(),
t.preventDefault(),t.stopPropagation()},onFirstMove:function(t){var o,e,s=this.node.style,i=this.host;
switch(s.position){case"relative":case"absolute":o=Math.round(parseFloat(s.left))||0,
e=Math.round(parseFloat(s.top))||0;break;default:s.position="absolute";var h=a.getMarginBox(this.node),u=n.doc.body,l=r.getComputedStyle(u),v=a.getMarginBox(u,l),c=a.getContentBox(u,l);
o=h.l-(c.l-v.l),e=h.t-(c.t-v.t)}this.marginBox.l=o-this.marginBox.l,this.marginBox.t=e-this.marginBox.t,
i&&i.onFirstMove&&i.onFirstMove(this,t),this.events.shift().remove()},destroy:function(){
t.forEach(this.events,function(t){t.remove()});var o=this.host;o&&o.onMoveStop&&o.onMoveStop(this),
this.events=this.node=this.host=null}})});