define(["../_base/declare","./Moveable"],function(t,e){var o=e.prototype.onMove;return t("dojo.dnd.TimedMoveable",e,{
timeout:40,constructor:function(t,e){e||(e={}),e.timeout&&"number"==typeof e.timeout&&e.timeout>=0&&(this.timeout=e.timeout);
},onMoveStop:function(t){t._timer&&(clearTimeout(t._timer),o.call(this,t,t._leftTop)),
e.prototype.onMoveStop.apply(this,arguments)},onMove:function(t,e){if(t._leftTop=e,
!t._timer){var i=this;t._timer=setTimeout(function(){t._timer=null,o.call(i,t,t._leftTop);
},this.timeout)}}})});