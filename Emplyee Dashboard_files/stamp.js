define(["../_base/lang","../_base/array"],function(e,t){var n={};return e.setObject("dojo.date.stamp",n),
n.fromISOString=function(e,r){n._isoRegExp||(n._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);
var i=n._isoRegExp.exec(e),o=null;if(i){i.shift(),i[1]&&i[1]--,i[6]&&(i[6]*=1e3),
r&&(r=new Date(r),t.forEach(t.map(["FullYear","Month","Date","Hours","Minutes","Seconds","Milliseconds"],function(e){
return r["get"+e]()}),function(e,t){i[t]=i[t]||e})),o=new Date(i[0]||1970,i[1]||0,i[2]||1,i[3]||0,i[4]||0,i[5]||0,i[6]||0),
i[0]<100&&o.setFullYear(i[0]||1970);var s=0,a=i[7]&&i[7].charAt(0);"Z"!=a&&(s=60*(i[8]||0)+(Number(i[9])||0),
"-"!=a&&(s*=-1)),a&&(s-=o.getTimezoneOffset()),s&&o.setTime(o.getTime()+6e4*s)}return o;
},n.toISOString=function(e,t){var n=function(e){return 10>e?"0"+e:e};t=t||{};var r=[],i=t.zulu?"getUTC":"get",o="";
if("time"!=t.selector){var s=e[i+"FullYear"]();o=["0000".substr((s+"").length)+s,n(e[i+"Month"]()+1),n(e[i+"Date"]())].join("-");
}if(r.push(o),"date"!=t.selector){var a=[n(e[i+"Hours"]()),n(e[i+"Minutes"]()),n(e[i+"Seconds"]())].join(":"),u=e[i+"Milliseconds"]();
if(t.milliseconds&&(a+="."+(100>u?"0":"")+n(u)),t.zulu)a+="Z";else if("time"!=t.selector){
var l=e.getTimezoneOffset(),f=Math.abs(l);a+=(l>0?"-":"+")+n(Math.floor(f/60))+":"+n(f%60);
}r.push(a)}return r.join("T")},n});