define(["./_base/lang","./i18n","./i18n!./cldr/nls/number","./string","./regexp"],function(e,r,n,a,t){
var i={};if(e.setObject("dojo.number",i),i.format=function(n,a){a=e.mixin({},a||{});
var t=r.normalizeLocale(a.locale),l=r.getLocalization("dojo.cldr","number",t);a.customs=l;
var o=a.pattern||l[(a.type||"decimal")+"Format"];return isNaN(n)||Math.abs(n)==1/0?null:i._applyPattern(n,o,a);
},i._numberPatternRE=/[#0,]*[#0](?:\.0*#*)?/,i._applyPattern=function(e,r,n){n=n||{};
var a=n.customs.group,t=n.customs.decimal,l=r.split(";"),o=l[0];if(r=l[0>e?1:0]||"-"+o,
-1!=r.indexOf("%"))e*=100;else if(-1!=r.indexOf("‰"))e*=1e3;else if(-1!=r.indexOf("¤"))a=n.customs.currencyGroup||a,
t=n.customs.currencyDecimal||t,r=r.replace(/\u00a4{1,3}/,function(e){var r=["symbol","currency","displayName"][e.length-1];
return n[r]||n.currency||""});else if(-1!=r.indexOf("E"))throw new Error("exponential notation not supported");
var c=i._numberPatternRE,p=o.match(c);if(!p)throw new Error("unable to find a number expression in pattern: "+r);
return n.fractional===!1&&(n.places=0),r.replace(c,i._formatAbsolute(e,p[0],{decimal:t,
group:a,places:n.places,round:n.round}))},i.round=function(e,r,n){var a=10/(n||10);
return(a*+e).toFixed(r)/a},0==.9.toFixed()){var l=i.round;i.round=function(e,r,n){
var a=Math.pow(10,-r||0),t=Math.abs(e);return!e||t>=a?a=0:(t/=a,(.5>t||t>=.95)&&(a=0)),
l(e,r,n)+(e>0?a:-a)}}return i._formatAbsolute=function(e,r,n){n=n||{},n.places===!0&&(n.places=0),
n.places===1/0&&(n.places=6);var t=r.split("."),l="string"==typeof n.places&&n.places.indexOf(","),o=n.places;
l?o=n.places.substring(l+1):o>=0||(o=(t[1]||[]).length),n.round<0||(e=i.round(e,o,n.round));
var c=String(Math.abs(e)).split("."),p=c[1]||"";if(t[1]||n.places){l&&(n.places=n.places.substring(0,l));
var s=void 0!==n.places?n.places:t[1]&&t[1].lastIndexOf("0")+1;s>p.length&&(c[1]=a.pad(p,s,"0",!0)),
o<p.length&&(c[1]=p.substr(0,o))}else c[1]&&c.pop();var u=t[0].replace(",","");s=u.indexOf("0"),
-1!=s&&(s=u.length-s,s>c[0].length&&(c[0]=a.pad(c[0],s)),-1==u.indexOf("#")&&(c[0]=c[0].substr(c[0].length-s)));
var d,f,g=t[0].lastIndexOf(",");if(-1!=g){d=t[0].length-g-1;var x=t[0].substr(0,g);
g=x.lastIndexOf(","),-1!=g&&(f=x.length-g-1)}for(var m=[],v=c[0];v;){var b=v.length-d;
m.push(b>0?v.substr(b):v),v=b>0?v.slice(0,b):"",f&&(d=f,delete f)}return c[0]=m.reverse().join(n.group||","),
c.join(n.decimal||".")},i.regexp=function(e){return i._parseInfo(e).regexp},i._parseInfo=function(e){
e=e||{};var n=r.normalizeLocale(e.locale),a=r.getLocalization("dojo.cldr","number",n),l=e.pattern||a[(e.type||"decimal")+"Format"],o=a.group,c=a.decimal,p=1;
if(-1!=l.indexOf("%"))p/=100;else if(-1!=l.indexOf("‰"))p/=1e3;else{var s=-1!=l.indexOf("¤");
s&&(o=a.currencyGroup||o,c=a.currencyDecimal||c)}var u=l.split(";");1==u.length&&u.push("-"+u[0]);
var d=t.buildGroupRE(u,function(r){return r="(?:"+t.escapeString(r,".")+")",r.replace(i._numberPatternRE,function(r){
var n={signed:!1,separator:e.strict?o:[o,""],fractional:e.fractional,decimal:c,exponent:!1
},a=r.split("."),t=e.places;1==a.length&&1!=p&&(a[1]="###"),1==a.length||0===t?n.fractional=!1:(void 0===t&&(t=e.pattern?a[1].lastIndexOf("0")+1:1/0),
t&&void 0==e.fractional&&(n.fractional=!0),!e.places&&t<a[1].length&&(t+=","+a[1].length),
n.places=t);var l=a[0].split(",");return l.length>1&&(n.groupSize=l.pop().length,
l.length>1&&(n.groupSize2=l.pop().length)),"("+i._realNumberRegexp(n)+")"})},!0);return s&&(d=d.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g,function(r,n,a,i){
var l=["symbol","currency","displayName"][a.length-1],o=t.escapeString(e[l]||e.currency||"");
return n=n?"[\\s\\xa0]":"",i=i?"[\\s\\xa0]":"",e.strict?n+o+i:(n&&(n+="*"),i&&(i+="*"),
"(?:"+n+o+i+")?")})),{regexp:d.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:o,decimal:c,
factor:p}},i.parse=function(e,r){var n=i._parseInfo(r),a=new RegExp("^"+n.regexp+"$").exec(e);
if(!a)return NaN;var t=a[1];if(!a[1]){if(!a[2])return NaN;t=a[2],n.factor*=-1}return t=t.replace(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),
t*n.factor},i._realNumberRegexp=function(e){e=e||{},"places"in e||(e.places=1/0),
"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(e.places)||(e.fractional=[!0,!1]),
"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);var r=i._integerRegexp(e),n=t.buildGroupRE(e.fractional,function(r){
var n="";return r&&0!==e.places&&(n="\\"+e.decimal,e.places==1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),
n},!0),a=t.buildGroupRE(e.exponent,function(r){return r?"([eE]"+i._integerRegexp({
signed:e.eSigned})+")":""}),l=r+n;return n&&(l="(?:(?:"+l+")|(?:"+n+"))"),l+a},i._integerRegexp=function(e){
e=e||{},"signed"in e||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="";
var r=t.buildGroupRE(e.signed,function(e){return e?"[-+]":""},!0),n=t.buildGroupRE(e.separator,function(r){
if(!r)return"(?:\\d+)";r=t.escapeString(r)," "==r?r="\\s":" "==r&&(r="\\s\\xa0");var n=e.groupSize,a=e.groupSize2;
if(a){var i="(?:0|[1-9]\\d{0,"+(a-1)+"}(?:["+r+"]\\d{"+a+"})*["+r+"]\\d{"+n+"})";return n-a>0?"(?:"+i+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":i;
}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+r+"]\\d{"+n+"})*)"},!0);return r+n},i});