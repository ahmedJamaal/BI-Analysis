define(["../lib/Base","../lib/jquery","amd!../lib/underscore","amd!../lib/backbone","../Logger","../dashboard/Utils"],function(t,e,i,s,r,n){
return t.extend(s.Events).extend({name:void 0,type:void 0,htmlObject:void 0,visible:!0,
isManaged:!0,timerStart:0,timerSplit:0,elapsedSinceSplit:-1,elapsedSinceStart:-1,
logColor:void 0,isDisposed:!1,constructor:function(t){this.extend(t)},placeholder:function(t){
var i=this.htmlObject;return i?e("#"+i+(t?" "+t:"")):e()},focus:function(){try{this.placeholder("*:first").focus();
}catch(t){}},_doAutoFocus:function(){this.autoFocus&&(delete this.autoFocus,this.focus());
},clear:function(){this.placeholder().empty()},copyEvents:function(t,e){i.each(e,function(e,i){
for(var s=e,r=e.tail;(s=s.next)!==r;)t.on(i,s.callback,s.context)})},clone:function(t,i,s){
this._throwIfDisposed();var r,n,a;return n=this.dashboard,a=this._events,delete this.dashboard,
delete this._events,r=e.extend(!0,{},this),r.dashboard=this.dashboard=n,this._events=a,
this.copyEvents(r,a),r.parameters&&(r.parameters=r.parameters.map(function(e){return e[1]in t?[e[0],t[e[1]]]:e;
})),r.components&&(r.components=r.components.map(function(t){return t in i?i[t]:t;
})),r.htmlObject=r.htmlObject?s[r.htmlObject]:void 0,r.listeners&&(r.listeners=r.listeners.map(function(e){
return e in t?t[e]:e})),r.parameter&&r.parameter in t&&(r.parameter=t[r.parameter]),
r},getAddIn:function(t,e){if(!this.dashboard)return r.warn("dashboard not yet defined, can't call getAddIn"),
!1;var i="function"==typeof this.type?this.type():this.type;return this.dashboard.getAddIn(i,t,e);
},hasAddIn:function(t,e){if(!this.dashboard)return r.warn("dashboard not yet defined, can't call hasAddIn"),
!1;var i="function"==typeof this.type?this.type():this.type;return this.dashboard.hasAddIn(i,t,e);
},getValuesArray:function(){var t;if("undefined"==typeof this.valuesArray||0==this.valuesArray.length){
if("undefined"!=typeof this.queryDefinition){var i="sql"==this.queryDefinition.queryType?"sql":"none";
"mdx"!=this.queryDefinition.queryType||this.valueAsId?void 0===this.queryDefinition.dataAccessId||this.valueAsId||(i="cda"):i="mdx",
QueryComponent.makeQuery(this);var s=new Array;for(n in this.result)if(this.result.hasOwnProperty(n))switch(i){
case"sql":s.push([this.result[n][0],this.result[n][1]]);break;case"mdx":s.push([this.result[n][1],this.result[n][0]]);
break;case"cda":s.push([this.result[n][0],this.result[n][1]]);break;default:s.push([this.result[n][0],this.result[n][0]]);
}return s}if(!this.dashboard)return r.warn("dashboard not yet defined, returning an empty array"),
[];for(var n=new Array(this.parameters?this.parameters.length:0),a=0,o=n.length;o>a;a++){
var h=this.parameters[a][0],d=""==this.parameters[a][1]||"NIL"==this.parameters[a][1]?this.parameters[a][2]:this.dashboard.getParameterValue(this.parameters[a][1]);
n[a]=[h,d]}var u=this;if(this.url){var l={};e.each(n,function(t,e){l[e[0]]=e[1]}),
t=this.dashboard.parseXActionResult(u,this.dashboard.urlAction(this.url,l))}else t=this.dashboard.callPentahoAction(u,this.solution,this.path,this.action,n,null);
return this.parseArray(t,!1)}return this.valuesArray},parseArray:function(t,i){if(null===t)return[];
if(e(t).find("CdaExport").size()>0)return this.parseArrayCda(t,i);var s=new Array,r=e(t).find("COLUMN-HDR-ITEM");
if(i&&r.size()>0){var n=new Array;r.each(function(){n.push(e(this).text())}),s.push(n);
}var a=e(t).find("DATA-ROW");return a.each(function(){var t=new Array;e(this).children("DATA-ITEM").each(function(){
t.push(e(this).text())}),s.push(t)}),s},parseArrayCda:function(t,i){var s=new Array,r=e(t).find("ColumnMetaData");
if(r.size()>0&&i){var n=new Array;r.each(function(){n.push(e(this).attr("name"))}),
s.push(n)}var a=e(t).find("Row");return a.each(function(){var t=new Array;e(this).children("Col").each(function(){
t.push(e(this).text())}),s.push(t)}),s},setAddInDefaults:function(t,e,i){r.log("BaseComponent.setAddInDefaults was removed. You should call setAddInOptions or dashboard.setAddInDefaults");
},setAddInOptions:function(t,e,i){this.addInOptions||(this.addInOptions={}),this.addInOptions[t]||(this.addInOptions[t]={}),
this.addInOptions[t][e]=i},getAddInOptions:function(t,e){var i=null;try{i=this.addInOptions[t][e];
}catch(s){}return i||{}},dispose:function(){this.isDisposed||(this.isDisposed=!0,
null!=this.dashboard?this.dashboard.removeComponent(this):this._unlink(),this._disposeCore());
},onWillRemove:function(){this._unlink()},_unlink:function(){null!=this.query&&(this.query.dispose(),
this.query=null),this.placeholder().off()},_disposeCore:function(){},_throwIfDisposed:function(){
if(this.isDisposed)throw new Error("Invalid operation. The component has been disposed.");
},startTimer:function(){this.timerStart=new Date,this.timerSplit=new Date},splitTimer:function(){
(-1===this.elapsedSinceStart||-1===this.elapsedSinceSplit)&&this.startTimer();var t=new Date;
return this.elapsedSinceStart=t.getTime()-this.timerStart.getTime(),this.elapsedSinceSplit=t.getTime()-this.timerSplit.getTime(),
this.timerSplit=t,this.getTimerInfo()},formatTimeDisplay:function(t){return Math.log(t)/Math.log(10)>=3?Math.round(t/100)/10+"s":t+"ms";
},getTimerInfo:function(){return{timerStart:this.timerStart,timerSplit:this.timerSplit,
elapsedSinceStart:this.elapsedSinceStart,elapsedSinceStartDesc:this.formatTimeDisplay(this.elapsedSinceStart),
elapsedSinceSplit:this.elapsedSinceSplit,elapsedSinceSplitDesc:this.formatTimeDisplay(this.elapsedSinceSplit)
}},getLogColor:function(){if(this.logColor)return this.logColor;var t=function(t){
var e=0;if(0==t.length)return e;for(var i=0;i<t.length;i++){var s=t.charCodeAt(i);
e=(e<<5)-e+s,e&=e}return e},e=t(this.name).toString(),i=e.substr(e.length-6,2)||0,s=e.substr(e.length-2,2)||0,r=e.substr(e.length-4,2)||0;
return this.logColor=n.hsvToRgb(3.6*i,.75*s,45+.35*r),this.logColor}})});