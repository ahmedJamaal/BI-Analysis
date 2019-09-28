define(["../_base/array","../_base/declare","../_base/lang","../dom","../dom-class","../Evented","../on","../topic","../touch","./common","./Mover","../_base/window"],function(t,e,o,n,s,i,a,h,d,r,l,v){
var c=e("dojo.dnd.Moveable",[i],{handle:"",delay:0,skip:!1,constructor:function(t,e){
this.node=n.byId(t),e||(e={}),this.handle=e.handle?n.byId(e.handle):null,this.handle||(this.handle=this.node),
this.delay=e.delay>0?e.delay:0,this.skip=e.skip,this.mover=e.mover?e.mover:l,this.events=[a(this.handle,d.press,o.hitch(this,"onMouseDown")),a(this.handle,"dragstart",o.hitch(this,"onSelectStart")),a(this.handle,"selectstart",o.hitch(this,"onSelectStart"))];
},markupFactory:function(t,e,o){return new o(e,t)},destroy:function(){t.forEach(this.events,function(t){
t.remove()}),this.events=this.node=this.handle=null},onMouseDown:function(t){this.skip&&r.isFormElement(t)||(this.delay?(this.events.push(a(this.handle,d.move,o.hitch(this,"onMouseMove")),a(this.handle,d.release,o.hitch(this,"onMouseUp"))),
this._lastX=t.pageX,this._lastY=t.pageY):this.onDragDetected(t),t.stopPropagation(),
t.preventDefault())},onMouseMove:function(t){(Math.abs(t.pageX-this._lastX)>this.delay||Math.abs(t.pageY-this._lastY)>this.delay)&&(this.onMouseUp(t),
this.onDragDetected(t)),t.stopPropagation(),t.preventDefault()},onMouseUp:function(t){
for(var e=0;2>e;++e)this.events.pop().remove();t.stopPropagation(),t.preventDefault();
},onSelectStart:function(t){this.skip&&r.isFormElement(t)||(t.stopPropagation(),t.preventDefault());
},onDragDetected:function(t){new this.mover(this.node,t,this)},onMoveStart:function(t){
h.publish("/dnd/move/start",t),s.add(v.body(),"dojoMove"),s.add(this.node,"dojoMoveItem");
},onMoveStop:function(t){h.publish("/dnd/move/stop",t),s.remove(v.body(),"dojoMove"),
s.remove(this.node,"dojoMoveItem")},onFirstMove:function(){},onMove:function(t,e){
this.onMoving(t,e);var o=t.node.style;o.left=e.l+"px",o.top=e.t+"px",this.onMoved(t,e);
},onMoving:function(){},onMoved:function(){}});return c});