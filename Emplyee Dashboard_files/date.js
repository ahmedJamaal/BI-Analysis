define(["./has","./_base/lang"],function(e,a){var t={};return t.getDaysInMonth=function(e){
var a=e.getMonth(),r=[31,28,31,30,31,30,31,31,30,31,30,31];return 1==a&&t.isLeapYear(e)?29:r[a];
},t.isLeapYear=function(e){var a=e.getFullYear();return!(a%400&&(a%4||!(a%100)))},
t.getTimezoneName=function(e){var a,t=e.toString(),r="",n=t.indexOf("(");if(n>-1)r=t.substring(++n,t.indexOf(")"));else{
var s=/([A-Z\/]+) \d{4}$/;(a=t.match(s))?r=a[1]:(t=e.toLocaleString(),s=/ ([A-Z\/]+)$/,
(a=t.match(s))&&(r=a[1]))}return"AM"==r||"PM"==r?"":r},t.compare=function(e,a,t){
return e=new Date(+e),a=new Date(+(a||new Date)),"date"==t?(e.setHours(0,0,0,0),a.setHours(0,0,0,0)):"time"==t&&(e.setFullYear(0,0,0),
a.setFullYear(0,0,0)),e>a?1:a>e?-1:0},t.add=function(e,a,t){var r=new Date(+e),n=!1,s="Date";
switch(a){case"day":break;case"weekday":var c,i,o=t%5;o?(c=o,i=parseInt(t/5)):(c=t>0?5:-5,
i=t>0?(t-5)/5:(t+5)/5);var u=e.getDay(),d=0;6==u&&t>0?d=1:0==u&&0>t&&(d=-1);var g=u+c;
(0==g||6==g)&&(d=t>0?2:-2),t=7*i+c+d;break;case"year":s="FullYear",n=!0;break;case"week":
t*=7;break;case"quarter":t*=3;case"month":n=!0,s="Month";break;default:s="UTC"+a.charAt(0).toUpperCase()+a.substring(1)+"s";
}return s&&r["set"+s](r["get"+s]()+t),n&&r.getDate()<e.getDate()&&r.setDate(0),r},
t.difference=function(e,a,r){a=a||new Date,r=r||"day";var n=a.getFullYear()-e.getFullYear(),s=1;
switch(r){case"quarter":var c=e.getMonth(),i=a.getMonth(),o=Math.floor(c/3)+1,u=Math.floor(i/3)+1;
u+=4*n,s=u-o;break;case"weekday":var d=Math.round(t.difference(e,a,"day")),g=parseInt(t.difference(e,a,"week")),f=d%7;
if(0==f)d=5*g;else{var k=0,b=e.getDay(),h=a.getDay();g=parseInt(d/7),f=d%7;var l=new Date(e);
l.setDate(l.getDate()+7*g);var D=l.getDay();if(d>0)switch(!0){case 6==b:k=-1;break;
case 0==b:k=0;break;case 6==h:k=-1;break;case 0==h:k=-2;break;case D+f>5:k=-2}else if(0>d)switch(!0){
case 6==b:k=0;break;case 0==b:k=1;break;case 6==h:k=2;break;case 0==h:k=1;break;case 0>D+f:
k=2}d+=k,d-=2*g}s=d;break;case"year":s=n;break;case"month":s=a.getMonth()-e.getMonth()+12*n;
break;case"week":s=parseInt(t.difference(e,a,"day")/7);break;case"day":s/=24;case"hour":
s/=60;case"minute":s/=60;case"second":s/=1e3;case"millisecond":s*=a.getTime()-e.getTime();
}return Math.round(s)},e("extend-dojo")&&a.mixin(a.getObject("dojo.date",!0),t),t;
});