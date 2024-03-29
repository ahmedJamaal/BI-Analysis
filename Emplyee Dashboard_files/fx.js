define(["./kernel","./config","./lang","../Evented","./Color","../aspect","../sniff","../dom","../dom-style"],function(e,t,r,n,i,a,o,s,u){
var p=r.mixin,c={},_=c._Line=function(e,t){this.start=e,this.end=t};_.prototype.getValue=function(e){
return(this.end-this.start)*e+this.start};var d=c.Animation=function(e){p(this,e),
r.isArray(this.curve)&&(this.curve=new _(this.curve[0],this.curve[1]))};d.prototype=new n,
r.extend(d,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){
var e=this._percent,t=this.easing;return t?t(e):e},_fire:function(e,r){var n=r||[];
if(this[e])if(t.debugAtAllCosts)this[e].apply(this,n);else try{this[e].apply(this,n);
}catch(i){console.error("exception in animation handler for:",e),console.error(i);
}return this},play:function(e,t){var n=this;if(n._delayTimer&&n._clearTimer(),t)n._stopTimer(),
n._active=n._paused=!1,n._percent=0;else if(n._active&&!n._paused)return n;n._fire("beforeBegin",[n.node]);
var i=e||n.delay,a=r.hitch(n,"_play",t);return i>0?(n._delayTimer=setTimeout(a,i),
n):(a(),n)},_play:function(e){var t=this;t._delayTimer&&t._clearTimer(),t._startTime=(new Date).valueOf(),
t._paused&&(t._startTime-=t.duration*t._percent),t._active=!0,t._paused=!1;var r=t.curve.getValue(t._getStep());
return t._percent||(t._startRepeatCount||(t._startRepeatCount=t.repeat),t._fire("onBegin",[r])),
t._fire("onPlay",[r]),t._cycle(),t},pause:function(){var e=this;return e._delayTimer&&e._clearTimer(),
e._stopTimer(),e._active?(e._paused=!0,e._fire("onPause",[e.curve.getValue(e._getStep())]),
e):e},gotoPercent:function(e,t){var r=this;return r._stopTimer(),r._active=r._paused=!0,
r._percent=e,t&&r.play(),r},stop:function(e){var t=this;return t._delayTimer&&t._clearTimer(),
t._timer?(t._stopTimer(),e&&(t._percent=1),t._fire("onStop",[t.curve.getValue(t._getStep())]),
t._active=t._paused=!1,t):t},status:function(){return this._active?this._paused?"paused":"playing":"stopped";
},_cycle:function(){var e=this;if(e._active){var t=(new Date).valueOf(),r=0===e.duration?1:(t-e._startTime)/e.duration;
r>=1&&(r=1),e._percent=r,e.easing&&(r=e.easing(r)),e._fire("onAnimate",[e.curve.getValue(r)]),
e._percent<1?e._startTimer():(e._active=!1,e.repeat>0?(e.repeat--,e.play(null,!0)):-1==e.repeat?e.play(null,!0):e._startRepeatCount&&(e.repeat=e._startRepeatCount,
e._startRepeatCount=0),e._percent=0,e._fire("onEnd",[e.node]),!e.repeat&&e._stopTimer());
}return e},_clearTimer:function(){clearTimeout(this._delayTimer),delete this._delayTimer;
}});var l=0,f=null,h={run:function(){}};r.extend(d,{_startTimer:function(){this._timer||(this._timer=a.after(h,"run",r.hitch(this,"_cycle"),!0),
l++),f||(f=setInterval(r.hitch(h,"run"),this.rate))},_stopTimer:function(){this._timer&&(this._timer.remove(),
this._timer=null,l--),0>=l&&(clearInterval(f),f=null,l=0)}});var v=o("ie")?function(e){
var t=e.style;t.width.length||"auto"!=u.get(e,"width")||(t.width="auto")}:function(){};
c._fade=function(e){e.node=s.byId(e.node);var t=p({properties:{}},e),n=t.properties.opacity={};
n.start="start"in t?t.start:function(){return+u.get(t.node,"opacity")||0},n.end=t.end;
var i=c.animateProperty(t);return a.after(i,"beforeBegin",r.partial(v,t.node),!0),
i},c.fadeIn=function(e){return c._fade(p({end:1},e))},c.fadeOut=function(e){return c._fade(p({
end:0},e))},c._defaultEasing=function(e){return.5+Math.sin((e+1.5)*Math.PI)/2};var m=function(e){
this._properties=e;for(var t in e){var r=e[t];r.start instanceof i&&(r.tempColor=new i);
}};return m.prototype.getValue=function(e){var t={};for(var n in this._properties){
var a=this._properties[n],o=a.start;o instanceof i?t[n]=i.blendColors(o,a.end,e,a.tempColor).toCss():r.isArray(o)||(t[n]=(a.end-o)*e+o+("opacity"!=n?a.units||"px":0));
}return t},c.animateProperty=function(t){var n=t.node=s.byId(t.node);t.easing||(t.easing=e._defaultEasing);
var o=new d(t);return a.after(o,"beforeBegin",r.hitch(o,function(){function e(e,t){
var r={height:e.offsetHeight,width:e.offsetWidth}[t];return void 0!==r?r:(r=u.get(e,t),
"opacity"==t?+r:s?r:parseFloat(r))}var t={};for(var a in this.properties){("width"==a||"height"==a)&&(this.node.display="block");
var o=this.properties[a];r.isFunction(o)&&(o=o(n)),o=t[a]=p({},r.isObject(o)?o:{end:o
}),r.isFunction(o.start)&&(o.start=o.start(n)),r.isFunction(o.end)&&(o.end=o.end(n));
var s=a.toLowerCase().indexOf("color")>=0;"end"in o?"start"in o||(o.start=e(n,a)):o.end=e(n,a),
s?(o.start=new i(o.start),o.end=new i(o.end)):o.start="opacity"==a?+o.start:parseFloat(o.start);
}this.curve=new m(t)}),!0),a.after(o,"onAnimate",r.hitch(u,"set",o.node),!0),o},c.anim=function(e,t,r,n,i,a){
return c.animateProperty({node:e,duration:r||d.prototype.duration,properties:t,easing:n,
onEnd:i}).play(a||0)},o("extend-dojo")&&(p(e,c),e._Animation=d),c});