//	|		console.log(c); // rgb('255','255','255')

define(["./kernel","./lang","./array","./config"],function(r,n,t,o){var e=r.Color=function(r){
r&&this.setColor(r)};return e.named={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],
white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],
green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],
blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:o.transparentColor||[0,0,0,0]
},n.extend(e,{r:255,g:255,b:255,a:1,_set:function(r,n,t,o){var e=this;e.r=r,e.g=n,
e.b=t,e.a=o},setColor:function(r){return n.isString(r)?e.fromString(r,this):n.isArray(r)?e.fromArray(r,this):(this._set(r.r,r.g,r.b,r.a),
r instanceof e||this.sanitize()),this},sanitize:function(){return this},toRgb:function(){
var r=this;return[r.r,r.g,r.b]},toRgba:function(){var r=this;return[r.r,r.g,r.b,r.a];
},toHex:function(){var r=t.map(["r","g","b"],function(r){var n=this[r].toString(16);
return n.length<2?"0"+n:n},this);return"#"+r.join("")},toCss:function(r){var n=this,t=n.r+", "+n.g+", "+n.b;
return(r?"rgba("+t+", "+n.a:"rgb("+t)+")"},toString:function(){return this.toCss(!0);
}}),e.blendColors=r.blendColors=function(r,n,o,a){var i=a||new e;return t.forEach(["r","g","b","a"],function(t){
i[t]=r[t]+(n[t]-r[t])*o,"a"!=t&&(i[t]=Math.round(i[t]))}),i.sanitize()},e.fromRgb=r.colorFromRgb=function(r,n){
var t=r.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);return t&&e.fromArray(t[1].split(/\s*,\s*/),n);
},e.fromHex=r.colorFromHex=function(r,n){var o=n||new e,a=4==r.length?4:8,i=(1<<a)-1;
return r=Number("0x"+r.substr(1)),isNaN(r)?null:(t.forEach(["b","g","r"],function(n){
var t=r&i;r>>=a,o[n]=4==a?17*t:t}),o.a=1,o)},e.fromArray=r.colorFromArray=function(r,n){
var t=n||new e;return t._set(Number(r[0]),Number(r[1]),Number(r[2]),Number(r[3])),
isNaN(t.a)&&(t.a=1),t.sanitize()},e.fromString=r.colorFromString=function(r,n){var t=e.named[r];
return t&&e.fromArray(t,n)||e.fromRgb(r,n)||e.fromHex(r,n)},e});