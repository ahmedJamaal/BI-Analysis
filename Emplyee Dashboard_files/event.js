define(["./kernel","../on","../has","../dom-geometry"],function(e,n,t,i){if(n._fixEvent){
var o=n._fixEvent;n._fixEvent=function(e,n){return e=o(e,n),e&&i.normalizeEvent(e),
e}}var f={fix:function(e,t){return n._fixEvent?n._fixEvent(e,t):e},stop:function(e){
t("dom-addeventlistener")||e&&e.preventDefault?(e.preventDefault(),e.stopPropagation()):(e=e||window.event,
e.cancelBubble=!0,n._preventDefault.call(e))}};return t("extend-dojo")&&(e.fixEvent=f.fix,
e.stopEvent=f.stop),f});