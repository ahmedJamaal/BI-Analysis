define(["exports","require","../has"],function(o,r,e){var n,t=e("config-requestProvider");
e("host-browser")?n="./xhr":e("host-node")&&(n="./node"),t||(t=n),o.getPlatformDefaultId=function(){
return n},o.load=function(o,e,i,u){return u&&u.isBuild?i():void r(["platform"==o?n:t],function(o){
i(o)})}});