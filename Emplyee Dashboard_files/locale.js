define(["../_base/lang","../_base/array","../date","../cldr/supplemental","../i18n","../regexp","../string","../i18n!../cldr/nls/gregorian","module"],function(e,a,r,t,n,s,c,o,i){
function l(e,a,r,n){return n.replace(/([a-z])\1*/gi,function(s){var o,i,l=s.charAt(0),u=s.length,d=["abbr","wide","narrow"];
switch(l){case"G":o=a[4>u?"eraAbbr":"eraNames"][e.getFullYear()<0?0:1];break;case"y":
switch(o=e.getFullYear(),u){case 1:break;case 2:if(!r.fullYear){o=String(o),o=o.substr(o.length-2);
break}default:i=!0}break;case"Q":case"q":o=Math.ceil((e.getMonth()+1)/3),i=!0;break;
case"M":case"L":var g=e.getMonth();if(3>u)o=g+1,i=!0;else{var m=["months","L"==l?"standAlone":"format",d[u-3]].join("-");
o=a[m][g]}break;case"w":var b=0;o=f._getWeekOfYear(e,b),i=!0;break;case"d":o=e.getDate(),
i=!0;break;case"D":o=f._getDayOfYear(e),i=!0;break;case"e":case"c":var k=e.getDay();
if(2>u){o=(k-t.getFirstDayOfWeek(r.locale)+8)%7;break}case"E":if(k=e.getDay(),3>u)o=k+1,
i=!0;else{var h=["days","c"==l?"standAlone":"format",d[u-3]].join("-");o=a[h][k]}
break;case"a":var p=e.getHours()<12?"am":"pm";o=r[p]||a["dayPeriods-format-wide-"+p];
break;case"h":case"H":case"K":case"k":var v=e.getHours();switch(l){case"h":o=v%12||12;
break;case"H":o=v;break;case"K":o=v%12;break;case"k":o=v||24}i=!0;break;case"m":o=e.getMinutes(),
i=!0;break;case"s":o=e.getSeconds(),i=!0;break;case"S":o=Math.round(e.getMilliseconds()*Math.pow(10,u-3)),
i=!0;break;case"v":case"z":if(o=f._getZone(e,!0,r))break;u=4;case"Z":var w=f._getZone(e,!1,r),y=[0>=w?"+":"-",c.pad(Math.floor(Math.abs(w)/60),2),c.pad(Math.abs(w)%60,2)];
4==u&&(y.splice(0,0,"GMT"),y.splice(3,0,":")),o=y.join("");break;default:throw new Error("dojo.date.locale.format: invalid pattern char: "+n);
}return i&&(o=c.pad(o,u)),o})}function u(e,r,t,n){var s=function(e){return e};r=r||s,
t=t||s,n=n||s;var c=e.match(/(''|[^'])+/g),o="'"==e.charAt(0);return a.forEach(c,function(e,a){
e?(c[a]=(o?t:r)(e.replace(/''/g,"'")),o=!o):c[a]=""}),n(c.join(""))}function d(e,a,r,t){
return t=s.escapeString(t),r.strict||(t=t.replace(" a"," ?a")),t.replace(/([a-z])\1*/gi,function(t){
var n,s=t.charAt(0),c=t.length,o="",i="";switch(r.strict?(c>1&&(o="0{"+(c-1)+"}"),
c>2&&(i="0{"+(c-2)+"}")):(o="0?",i="0{0,2}"),s){case"y":n="\\d{2,4}";break;case"M":
case"L":n=c>2?"\\S+?":"1[0-2]|"+o+"[1-9]";break;case"D":n="[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|"+o+"[1-9][0-9]|"+i+"[1-9]";
break;case"d":n="3[01]|[12]\\d|"+o+"[1-9]";break;case"w":n="[1-4][0-9]|5[0-3]|"+o+"[1-9]";
break;case"E":case"e":case"c":n=".+?";break;case"h":n="1[0-2]|"+o+"[1-9]";break;case"k":
n="1[01]|"+o+"\\d";break;case"H":n="1\\d|2[0-3]|"+o+"\\d";break;case"K":n="1\\d|2[0-4]|"+o+"[1-9]";
break;case"m":case"s":n="[0-5]\\d";break;case"S":n="\\d{"+c+"}";break;case"a":var l=r.am||a["dayPeriods-format-wide-am"],u=r.pm||a["dayPeriods-format-wide-pm"];
n=l+"|"+u,r.strict||(l!=l.toLowerCase()&&(n+="|"+l.toLowerCase()),u!=u.toLowerCase()&&(n+="|"+u.toLowerCase()),
-1!=n.indexOf(".")&&(n+="|"+n.replace(/\./g,""))),n=n.replace(/\./g,"\\.");break;default:
n=".*"}return e&&e.push(t),"("+n+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}var f={};e.setObject(i.id.replace(/\//g,"."),f),
f._getZone=function(e,a,t){return a?r.getTimezoneName(e):e.getTimezoneOffset()},f.format=function(a,r){
r=r||{};var t=n.normalizeLocale(r.locale),s=r.formatLength||"short",c=f._getGregorianBundle(t),o=[],i=e.hitch(this,l,a,c,r);
if("year"==r.selector)return u(c["dateFormatItem-yyyy"]||"yyyy",i);var d;return"date"!=r.selector&&(d=r.timePattern||c["timeFormat-"+s],
d&&o.push(u(d,i))),"time"!=r.selector&&(d=r.datePattern||c["dateFormat-"+s],d&&o.push(u(d,i))),
1==o.length?o[0]:c["dateTimeFormat-"+s].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(e,a){
return o[a]})},f.regexp=function(e){return f._parseInfo(e).regexp},f._parseInfo=function(a){
a=a||{};var r,t=n.normalizeLocale(a.locale),s=f._getGregorianBundle(t),c=a.formatLength||"short",o=a.datePattern||s["dateFormat-"+c],i=a.timePattern||s["timeFormat-"+c];
r="date"==a.selector?o:"time"==a.selector?i:s["dateTimeFormat-"+c].replace(/\{(\d+)\}/g,function(e,a){
return[i,o][a]});var l=[],g=u(r,e.hitch(this,d,l,s,a));return{regexp:g,tokens:l,bundle:s
}},f.parse=function(e,t){var n=/[\u200E\u200F\u202A\u202E]/g,s=f._parseInfo(t),c=s.tokens,o=s.bundle,i=new RegExp("^"+s.regexp.replace(n,"")+"$",s.strict?"":"i"),l=i.exec(e&&e.replace(n,""));
if(!l)return null;var u=["abbr","wide","narrow"],d=[1970,0,1,0,0,0,0],g="",m=a.every(l,function(e,r){
if(!r)return!0;var n=c[r-1],s=n.length,i=n.charAt(0);switch(i){case"y":if(2!=s&&t.strict)d[0]=e;else if(100>e){
e=Number(e);var l=""+(new Date).getFullYear(),f=100*l.substring(0,2),m=Math.min(Number(l.substring(2,4))+20,99);
d[0]=m>e?f+e:f-100+e}else{if(t.strict)return!1;d[0]=e}break;case"M":case"L":if(s>2){
var b=o["months-"+("L"==i?"standAlone":"format")+"-"+u[s-3]].concat();if(t.strict||(e=e.replace(".","").toLowerCase(),
b=a.map(b,function(e){return e.replace(".","").toLowerCase()})),e=a.indexOf(b,e),
-1==e)return!1}else e--;d[1]=e;break;case"E":case"e":case"c":var k=o["days-"+("c"==i?"standAlone":"format")+"-"+u[s-3]].concat();
if(t.strict||(e=e.toLowerCase(),k=a.map(k,function(e){return e.toLowerCase()})),e=a.indexOf(k,e),
-1==e)return!1;break;case"D":d[1]=0;case"d":d[2]=e;break;case"a":var h=t.am||o["dayPeriods-format-wide-am"],p=t.pm||o["dayPeriods-format-wide-pm"];
if(!t.strict){var v=/\./g;e=e.replace(v,"").toLowerCase(),h=h.replace(v,"").toLowerCase(),
p=p.replace(v,"").toLowerCase()}if(t.strict&&e!=h&&e!=p)return!1;g=e==p?"p":e==h?"a":"";
break;case"K":24==e&&(e=0);case"h":case"H":case"k":if(e>23)return!1;d[3]=e;break;case"m":
d[4]=e;break;case"s":d[5]=e;break;case"S":d[6]=e}return!0}),b=+d[3];"p"===g&&12>b?d[3]=b+12:"a"===g&&12==b&&(d[3]=0);
var k=new Date(d[0],d[1],d[2],d[3],d[4],d[5],d[6]);t.strict&&k.setFullYear(d[0]);var h=c.join(""),p=-1!=h.indexOf("d"),v=-1!=h.indexOf("M");
return!m||v&&k.getMonth()>d[1]||p&&k.getDate()>d[2]?null:((v&&k.getMonth()<d[1]||p&&k.getDate()<d[2])&&(k=r.add(k,"hour",1)),
k)};var g=[];return f.addCustomFormats=function(e,a){g.push({pkg:e,name:a})},f._getGregorianBundle=function(r){
var t={};return a.forEach(g,function(a){var s=n.getLocalization(a.pkg,a.name,r);t=e.mixin(t,s);
},this),t},f.addCustomFormats(i.id.replace(/\/date\/locale$/,".cldr"),"gregorian"),
f.getNames=function(e,a,r,t){var n,s=f._getGregorianBundle(t),c=[e,r,a];if("standAlone"==r){
var o=c.join("-");n=s[o],1==n[0]&&(n=void 0)}return c[1]="format",(n||s[c.join("-")]).concat();
},f.isWeekend=function(e,a){var r=t.getWeekend(a),n=(e||new Date).getDay();return r.end<r.start&&(r.end+=7,
n<r.start&&(n+=7)),n>=r.start&&n<=r.end},f._getDayOfYear=function(e){return r.difference(new Date(e.getFullYear(),0,1,e.getHours()),e)+1;
},f._getWeekOfYear=function(e,a){1==arguments.length&&(a=0);var r=new Date(e.getFullYear(),0,1).getDay(),t=(r-a+7)%7,n=Math.floor((f._getDayOfYear(e)+t-1)/7);
return r==a&&n++,n},f});