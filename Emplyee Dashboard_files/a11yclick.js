define(["dojo/keys","dojo/mouse","dojo/on","dojo/touch"],function(e,t,o,n){function r(t){
if((t.keyCode===e.ENTER||t.keyCode===e.SPACE)&&!/input|button|textarea/i.test(t.target.nodeName))for(var o=t.target;o;o=o.parentNode)if(o.dojoClick)return!0;
}var u;o(document,"keydown",function(e){r(e)?(u=e.target,e.preventDefault()):u=null;
}),o(document,"keyup",function(e){r(e)&&e.target==u&&(u=null,o.emit(e.target,"click",{
cancelable:!0,bubbles:!0,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,
altKey:e.altKey,_origType:e.type}))});var i=function(e,t){return e.dojoClick=!0,o(e,"click",t);
};return i.click=i,i.press=function(r,u){var i=o(r,n.press,function(e){("mousedown"!=e.type||t.isLeft(e))&&u(e);
}),c=o(r,"keydown",function(t){(t.keyCode===e.ENTER||t.keyCode===e.SPACE)&&u(t)});
return{remove:function(){i.remove(),c.remove()}}},i.release=function(r,u){var i=o(r,n.release,function(e){
("mouseup"!=e.type||t.isLeft(e))&&u(e)}),c=o(r,"keyup",function(t){(t.keyCode===e.ENTER||t.keyCode===e.SPACE)&&u(t);
});return{remove:function(){i.remove(),c.remove()}}},i.move=n.move,i});