!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.moment=e();
}(this,function(){"use strict";function t(){return $n.apply(null,arguments)}function e(t){
$n=t}function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function i(t){
return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function s(t,e){
var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function r(t,e){return Object.prototype.hasOwnProperty.call(t,e);
}function a(t,e){for(var n in e)r(e,n)&&(t[n]=e[n]);return r(e,"toString")&&(t.toString=e.toString),
r(e,"valueOf")&&(t.valueOf=e.valueOf),t}function o(t,e,n,i){return Wt(t,e,n,i,!0).utc();
}function u(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,
nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function d(t){
return null==t._pf&&(t._pf=u()),t._pf}function h(t){if(null==t._isValid){var e=d(t);
t._isValid=!(isNaN(t._d.getTime())||!(e.overflow<0)||e.empty||e.invalidMonth||e.invalidWeekday||e.nullInput||e.invalidFormat||e.userInvalidated),
t._strict&&(t._isValid=t._isValid&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour);
}return t._isValid}function l(t){var e=o(NaN);return null!=t?a(d(e),t):d(e).userInvalidated=!0,
e}function c(t){return void 0===t}function f(t,e){var n,i,s;if(c(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),
c(e._i)||(t._i=e._i),c(e._f)||(t._f=e._f),c(e._l)||(t._l=e._l),c(e._strict)||(t._strict=e._strict),
c(e._tzm)||(t._tzm=e._tzm),c(e._isUTC)||(t._isUTC=e._isUTC),c(e._offset)||(t._offset=e._offset),
c(e._pf)||(t._pf=d(e)),c(e._locale)||(t._locale=e._locale),Jn.length>0)for(n in Jn)i=Jn[n],
s=e[i],c(s)||(t[i]=s);return t}function m(e){f(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),
Bn===!1&&(Bn=!0,t.updateOffset(this),Bn=!1)}function _(t){return t instanceof m||null!=t&&null!=t._isAMomentObject;
}function y(t){return 0>t?Math.ceil(t):Math.floor(t)}function g(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=y(e)),
n}function p(t,e,n){var i,s=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),a=0;
for(i=0;s>i;i++)(n&&t[i]!==e[i]||!n&&g(t[i])!==g(e[i]))&&a++;return a+r}function v(){}
function D(t){return t?t.toLowerCase().replace("_","-"):t}function M(t){for(var e,n,i,s,r=0;r<t.length;){
for(s=D(t[r]).split("-"),e=s.length,n=D(t[r+1]),n=n?n.split("-"):null;e>0;){if(i=Y(s.slice(0,e).join("-")))return i;
if(n&&n.length>=e&&p(s,n,!0)>=e-1)break;e--}r++}return null}function Y(t){var e=null;
if(!Qn[t]&&"undefined"!=typeof module&&module&&module.exports)try{e=qn._abbr,require("./locale/"+t),
S(e)}catch(n){}return Qn[t]}function S(t,e){var n;return t&&(n=c(e)?k(t):w(t,e),n&&(qn=n)),
qn._abbr}function w(t,e){return null!==e?(e.abbr=t,Qn[t]=Qn[t]||new v,Qn[t].set(e),
S(t),Qn[t]):(delete Qn[t],null)}function k(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),
!t)return qn;if(!n(t)){if(e=Y(t))return e;t=[t]}return M(t)}function T(t,e){var n=t.toLowerCase();
Xn[n]=Xn[n+"s"]=Xn[e]=t}function b(t){return"string"==typeof t?Xn[t]||Xn[t.toLowerCase()]:void 0;
}function O(t){var e,n,i={};for(n in t)r(t,n)&&(e=b(n),e&&(i[e]=t[n]));return i}function W(t){
return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t);
}function x(e,n){return function(i){return null!=i?(G(this,e,i),t.updateOffset(this,n),
this):U(this,e)}}function U(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN;
}function G(t,e,n){t.isValid()&&t._d["set"+(t._isUTC?"UTC":"")+e](n)}function P(t,e){
var n;if("object"==typeof t)for(n in t)this.set(n,t[n]);else if(t=b(t),W(this[t]))return this[t](e);
return this}function C(t,e,n){var i=""+Math.abs(t),s=e-i.length,r=t>=0;return(r?n?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+i;
}function F(t,e,n,i){var s=i;"string"==typeof i&&(s=function(){return this[i]()}),
t&&(ni[t]=s),e&&(ni[e[0]]=function(){return C(s.apply(this,arguments),e[1],e[2])}),
n&&(ni[n]=function(){return this.localeData().ordinal(s.apply(this,arguments),t)});
}function H(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");
}function V(t){var e,n,i=t.match(Kn);for(e=0,n=i.length;n>e;e++)ni[i[e]]?i[e]=ni[i[e]]:i[e]=H(i[e]);
return function(s){var r="";for(e=0;n>e;e++)r+=i[e]instanceof Function?i[e].call(s,t):i[e];
return r}}function L(t,e){return t.isValid()?(e=I(e,t.localeData()),ei[e]=ei[e]||V(e),
ei[e](t)):t.localeData().invalidDate()}function I(t,e){function n(t){return e.longDateFormat(t)||t;
}var i=5;for(ti.lastIndex=0;i>=0&&ti.test(t);)t=t.replace(ti,n),ti.lastIndex=0,i-=1;
return t}function N(t,e,n){Di[t]=W(e)?e:function(t,i){return t&&n?n:e}}function A(t,e){
return r(Di,t)?Di[t](e._strict,e._locale):new RegExp(R(t))}function R(t){return E(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,s){
return e||n||i||s}))}function E(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");
}function z(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),"number"==typeof e&&(i=function(t,n){
n[e]=g(t)}),n=0;n<t.length;n++)Mi[t[n]]=i}function Z(t,e){z(t,function(t,n,i,s){i._w=i._w||{},
e(t,i._w,i,s)})}function j(t,e,n){null!=e&&r(Mi,t)&&Mi[t](e,n._a,n,t)}function $(t,e){
return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function q(t,e){return n(this._months)?this._months[t.month()]:this._months[Ui.test(e)?"format":"standalone"][t.month()];
}function J(t,e){return n(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Ui.test(e)?"format":"standalone"][t.month()];
}function B(t,e,n){var i,s,r;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],
this._shortMonthsParse=[]),i=0;12>i;i++){if(s=o([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),
this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),
n||this._monthsParse[i]||(r="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),
n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;
if(!n&&this._monthsParse[i].test(t))return i}}function Q(t,e){var n;return t.isValid()?"string"==typeof e&&(e=t.localeData().monthsParse(e),
"number"!=typeof e)?t:(n=Math.min(t.date(),$(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),
t):t}function X(e){return null!=e?(Q(this,e),t.updateOffset(this,!0),this):U(this,"Month");
}function K(){return $(this.year(),this.month())}function tt(t){return this._monthsParseExact?(r(this,"_monthsRegex")||nt.call(this),
t?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex;
}function et(t){return this._monthsParseExact?(r(this,"_monthsRegex")||nt.call(this),
t?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex;
}function nt(){function t(t,e){return e.length-t.length}var e,n,i=[],s=[],r=[];for(e=0;12>e;e++)n=o([2e3,e]),
i.push(this.monthsShort(n,"")),s.push(this.months(n,"")),r.push(this.months(n,"")),
r.push(this.monthsShort(n,""));for(i.sort(t),s.sort(t),r.sort(t),e=0;12>e;e++)i[e]=E(i[e]),
s[e]=E(s[e]),r[e]=E(r[e]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),
this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")$","i"),
this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")$","i")}function it(t){
var e,n=t._a;return n&&-2===d(t).overflow&&(e=n[Si]<0||n[Si]>11?Si:n[wi]<1||n[wi]>$(n[Yi],n[Si])?wi:n[ki]<0||n[ki]>24||24===n[ki]&&(0!==n[Ti]||0!==n[bi]||0!==n[Oi])?ki:n[Ti]<0||n[Ti]>59?Ti:n[bi]<0||n[bi]>59?bi:n[Oi]<0||n[Oi]>999?Oi:-1,
d(t)._overflowDayOfYear&&(Yi>e||e>wi)&&(e=wi),d(t)._overflowWeeks&&-1===e&&(e=Wi),
d(t)._overflowWeekday&&-1===e&&(e=xi),d(t).overflow=e),t}function st(e){t.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e);
}function rt(t,e){var n=!0;return a(function(){return n&&(st(t+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),
n=!1),e.apply(this,arguments)},e)}function at(t,e){Hi[t]||(st(e),Hi[t]=!0)}function ot(t){
var e,n,i,s,r,a,o=t._i,u=Vi.exec(o)||Li.exec(o);if(u){for(d(t).iso=!0,e=0,n=Ni.length;n>e;e++)if(Ni[e][1].exec(u[1])){
s=Ni[e][0],i=Ni[e][2]!==!1;break}if(null==s)return void(t._isValid=!1);if(u[3]){for(e=0,
n=Ai.length;n>e;e++)if(Ai[e][1].exec(u[3])){r=(u[2]||" ")+Ai[e][0];break}if(null==r)return void(t._isValid=!1);
}if(!i&&null!=r)return void(t._isValid=!1);if(u[4]){if(!Ii.exec(u[4]))return void(t._isValid=!1);
a="Z"}t._f=s+(r||"")+(a||""),Yt(t)}else t._isValid=!1}function ut(e){var n=Ri.exec(e._i);
return null!==n?void(e._d=new Date(+n[1])):(ot(e),void(e._isValid===!1&&(delete e._isValid,
t.createFromInputFallback(e))))}function dt(t,e,n,i,s,r,a){var o=new Date(t,e,n,i,s,r,a);
return 100>t&&t>=0&&isFinite(o.getFullYear())&&o.setFullYear(t),o}function ht(t){
var e=new Date(Date.UTC.apply(null,arguments));return 100>t&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),
e}function lt(t){return ct(t)?366:365}function ct(t){return t%4===0&&t%100!==0||t%400===0;
}function ft(){return ct(this.year())}function mt(t,e,n){var i=7+e-n,s=(7+ht(t,0,i).getUTCDay()-e)%7;
return-s+i-1}function _t(t,e,n,i,s){var r,a,o=(7+n-i)%7,u=mt(t,i,s),d=1+7*(e-1)+o+u;
return 0>=d?(r=t-1,a=lt(r)+d):d>lt(t)?(r=t+1,a=d-lt(t)):(r=t,a=d),{year:r,dayOfYear:a
}}function yt(t,e,n){var i,s,r=mt(t.year(),e,n),a=Math.floor((t.dayOfYear()-r-1)/7)+1;
return 1>a?(s=t.year()-1,i=a+gt(s,e,n)):a>gt(t.year(),e,n)?(i=a-gt(t.year(),e,n),
s=t.year()+1):(s=t.year(),i=a),{week:i,year:s}}function gt(t,e,n){var i=mt(t,e,n),s=mt(t+1,e,n);
return(lt(t)-i+s)/7}function pt(t,e,n){return null!=t?t:null!=e?e:n}function vt(e){
var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()];
}function Dt(t){var e,n,i,s,r=[];if(!t._d){for(i=vt(t),t._w&&null==t._a[wi]&&null==t._a[Si]&&Mt(t),
t._dayOfYear&&(s=pt(t._a[Yi],i[Yi]),t._dayOfYear>lt(s)&&(d(t)._overflowDayOfYear=!0),
n=ht(s,0,t._dayOfYear),t._a[Si]=n.getUTCMonth(),t._a[wi]=n.getUTCDate()),e=0;3>e&&null==t._a[e];++e)t._a[e]=r[e]=i[e];
for(;7>e;e++)t._a[e]=r[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[ki]&&0===t._a[Ti]&&0===t._a[bi]&&0===t._a[Oi]&&(t._nextDay=!0,
t._a[ki]=0),t._d=(t._useUTC?ht:dt).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),
t._nextDay&&(t._a[ki]=24)}}function Mt(t){var e,n,i,s,r,a,o,u;e=t._w,null!=e.GG||null!=e.W||null!=e.E?(r=1,
a=4,n=pt(e.GG,t._a[Yi],yt(xt(),1,4).year),i=pt(e.W,1),s=pt(e.E,1),(1>s||s>7)&&(u=!0)):(r=t._locale._week.dow,
a=t._locale._week.doy,n=pt(e.gg,t._a[Yi],yt(xt(),r,a).year),i=pt(e.w,1),null!=e.d?(s=e.d,
(0>s||s>6)&&(u=!0)):null!=e.e?(s=e.e+r,(e.e<0||e.e>6)&&(u=!0)):s=r),1>i||i>gt(n,r,a)?d(t)._overflowWeeks=!0:null!=u?d(t)._overflowWeekday=!0:(o=_t(n,i,s,r,a),
t._a[Yi]=o.year,t._dayOfYear=o.dayOfYear)}function Yt(e){if(e._f===t.ISO_8601)return void ot(e);
e._a=[],d(e).empty=!0;var n,i,s,r,a,o=""+e._i,u=o.length,h=0;for(s=I(e._f,e._locale).match(Kn)||[],
n=0;n<s.length;n++)r=s[n],i=(o.match(A(r,e))||[])[0],i&&(a=o.substr(0,o.indexOf(i)),
a.length>0&&d(e).unusedInput.push(a),o=o.slice(o.indexOf(i)+i.length),h+=i.length),
ni[r]?(i?d(e).empty=!1:d(e).unusedTokens.push(r),j(r,i,e)):e._strict&&!i&&d(e).unusedTokens.push(r);
d(e).charsLeftOver=u-h,o.length>0&&d(e).unusedInput.push(o),d(e).bigHour===!0&&e._a[ki]<=12&&e._a[ki]>0&&(d(e).bigHour=void 0),
e._a[ki]=St(e._locale,e._a[ki],e._meridiem),Dt(e),it(e)}function St(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(i=t.isPM(n),
i&&12>e&&(e+=12),i||12!==e||(e=0),e):e}function wt(t){var e,n,i,s,r;if(0===t._f.length)return d(t).invalidFormat=!0,
void(t._d=new Date(NaN));for(s=0;s<t._f.length;s++)r=0,e=f({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),
e._f=t._f[s],Yt(e),h(e)&&(r+=d(e).charsLeftOver,r+=10*d(e).unusedTokens.length,d(e).score=r,
(null==i||i>r)&&(i=r,n=e));a(t,n||e)}function kt(t){if(!t._d){var e=O(t._i);t._a=s([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){
return t&&parseInt(t,10)}),Dt(t)}}function Tt(t){var e=new m(it(bt(t)));return e._nextDay&&(e.add(1,"d"),
e._nextDay=void 0),e}function bt(t){var e=t._i,s=t._f;return t._locale=t._locale||k(t._l),
null===e||void 0===s&&""===e?l({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),
_(e)?new m(it(e)):(n(s)?wt(t):s?Yt(t):i(e)?t._d=e:Ot(t),h(t)||(t._d=null),t))}function Ot(e){
var r=e._i;void 0===r?e._d=new Date(t.now()):i(r)?e._d=new Date(+r):"string"==typeof r?ut(e):n(r)?(e._a=s(r.slice(0),function(t){
return parseInt(t,10)}),Dt(e)):"object"==typeof r?kt(e):"number"==typeof r?e._d=new Date(r):t.createFromInputFallback(e);
}function Wt(t,e,n,i,s){var r={};return"boolean"==typeof n&&(i=n,n=void 0),r._isAMomentObject=!0,
r._useUTC=r._isUTC=s,r._l=n,r._i=t,r._f=e,r._strict=i,Tt(r)}function xt(t,e,n,i){
return Wt(t,e,n,i,!1)}function Ut(t,e){var i,s;if(1===e.length&&n(e[0])&&(e=e[0]),
!e.length)return xt();for(i=e[0],s=1;s<e.length;++s)(!e[s].isValid()||e[s][t](i))&&(i=e[s]);
return i}function Gt(){var t=[].slice.call(arguments,0);return Ut("isBefore",t)}function Pt(){
var t=[].slice.call(arguments,0);return Ut("isAfter",t)}function Ct(t){var e=O(t),n=e.year||0,i=e.quarter||0,s=e.month||0,r=e.week||0,a=e.day||0,o=e.hour||0,u=e.minute||0,d=e.second||0,h=e.millisecond||0;
this._milliseconds=+h+1e3*d+6e4*u+36e5*o,this._days=+a+7*r,this._months=+s+3*i+12*n,
this._data={},this._locale=k(),this._bubble()}function Ft(t){return t instanceof Ct;
}function Ht(t,e){F(t,0,0,function(){var t=this.utcOffset(),n="+";return 0>t&&(t=-t,
n="-"),n+C(~~(t/60),2)+e+C(~~t%60,2)})}function Vt(t,e){var n=(e||"").match(t)||[],i=n[n.length-1]||[],s=(i+"").match($i)||["-",0,0],r=+(60*s[1])+g(s[2]);
return"+"===s[0]?r:-r}function Lt(e,n){var s,r;return n._isUTC?(s=n.clone(),r=(_(e)||i(e)?+e:+xt(e))-+s,
s._d.setTime(+s._d+r),t.updateOffset(s,!1),s):xt(e).local()}function It(t){return 15*-Math.round(t._d.getTimezoneOffset()/15);
}function Nt(e,n){var i,s=this._offset||0;return this.isValid()?null!=e?("string"==typeof e?e=Vt(gi,e):Math.abs(e)<16&&(e=60*e),
!this._isUTC&&n&&(i=It(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),
s!==e&&(!n||this._changeInProgress?ne(this,Qt(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,
t.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?s:It(this):null!=e?this:NaN;
}function At(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),
this):-this.utcOffset()}function Rt(t){return this.utcOffset(0,t)}function Et(t){
return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(It(this),"m")),
this}function zt(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Vt(yi,this._i)),
this}function Zt(t){return this.isValid()?(t=t?xt(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1;
}function jt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset();
}function $t(){if(!c(this._isDSTShifted))return this._isDSTShifted;var t={};if(f(t,this),
t=bt(t),t._a){var e=t._isUTC?o(t._a):xt(t._a);this._isDSTShifted=this.isValid()&&p(t._a,e.toArray())>0;
}else this._isDSTShifted=!1;return this._isDSTShifted}function qt(){return this.isValid()?!this._isUTC:!1;
}function Jt(){return this.isValid()?this._isUTC:!1}function Bt(){return this.isValid()?this._isUTC&&0===this._offset:!1;
}function Qt(t,e){var n,i,s,a=t,o=null;return Ft(t)?a={ms:t._milliseconds,d:t._days,
M:t._months}:"number"==typeof t?(a={},e?a[e]=t:a.milliseconds=t):(o=qi.exec(t))?(n="-"===o[1]?-1:1,
a={y:0,d:g(o[wi])*n,h:g(o[ki])*n,m:g(o[Ti])*n,s:g(o[bi])*n,ms:g(o[Oi])*n}):(o=Ji.exec(t))?(n="-"===o[1]?-1:1,
a={y:Xt(o[2],n),M:Xt(o[3],n),d:Xt(o[4],n),h:Xt(o[5],n),m:Xt(o[6],n),s:Xt(o[7],n),
w:Xt(o[8],n)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(s=te(xt(a.from),xt(a.to)),
a={},a.ms=s.milliseconds,a.M=s.months),i=new Ct(a),Ft(t)&&r(t,"_locale")&&(i._locale=t._locale),
i}function Xt(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e;
}function Kt(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),
t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),
n}function te(t,e){var n;return t.isValid()&&e.isValid()?(e=Lt(e,t),t.isBefore(e)?n=Kt(t,e):(n=Kt(e,t),
n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function ee(t,e){
return function(n,i){var s,r;return null===i||isNaN(+i)||(at(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period)."),
r=n,n=i,i=r),n="string"==typeof n?+n:n,s=Qt(n,i),ne(this,s,t),this}}function ne(e,n,i,s){
var r=n._milliseconds,a=n._days,o=n._months;e.isValid()&&(s=null==s?!0:s,r&&e._d.setTime(+e._d+r*i),
a&&G(e,"Date",U(e,"Date")+a*i),o&&Q(e,U(e,"Month")+o*i),s&&t.updateOffset(e,a||o));
}function ie(t,e){var n=t||xt(),i=Lt(n,this).startOf("day"),s=this.diff(i,"days",!0),r=-6>s?"sameElse":-1>s?"lastWeek":0>s?"lastDay":1>s?"sameDay":2>s?"nextDay":7>s?"nextWeek":"sameElse",a=e&&(W(e[r])?e[r]():e[r]);
return this.format(a||this.localeData().calendar(r,this,xt(n)))}function se(){return new m(this);
}function re(t,e){var n=_(t)?t:xt(t);return this.isValid()&&n.isValid()?(e=b(c(e)?"millisecond":e),
"millisecond"===e?+this>+n:+n<+this.clone().startOf(e)):!1}function ae(t,e){var n=_(t)?t:xt(t);
return this.isValid()&&n.isValid()?(e=b(c(e)?"millisecond":e),"millisecond"===e?+n>+this:+this.clone().endOf(e)<+n):!1;
}function oe(t,e,n){return this.isAfter(t,n)&&this.isBefore(e,n)}function ue(t,e){
var n,i=_(t)?t:xt(t);return this.isValid()&&i.isValid()?(e=b(e||"millisecond"),"millisecond"===e?+this===+i:(n=+i,
+this.clone().startOf(e)<=n&&n<=+this.clone().endOf(e))):!1}function de(t,e){return this.isSame(t,e)||this.isAfter(t,e);
}function he(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function le(t,e,n){
var i,s,r,a;return this.isValid()?(i=Lt(t,this),i.isValid()?(s=6e4*(i.utcOffset()-this.utcOffset()),
e=b(e),"year"===e||"month"===e||"quarter"===e?(a=ce(this,i),"quarter"===e?a/=3:"year"===e&&(a/=12)):(r=this-i,
a="second"===e?r/1e3:"minute"===e?r/6e4:"hour"===e?r/36e5:"day"===e?(r-s)/864e5:"week"===e?(r-s)/6048e5:r),
n?a:y(a)):NaN):NaN}function ce(t,e){var n,i,s=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(s,"months");
return 0>e-r?(n=t.clone().add(s-1,"months"),i=(e-r)/(r-n)):(n=t.clone().add(s+1,"months"),
i=(e-r)/(n-r)),-(s+i)}function fe(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}function me(){var t=this.clone().utc();return 0<t.year()&&t.year()<=9999?W(Date.prototype.toISOString)?this.toDate().toISOString():L(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):L(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
}function _e(e){var n=L(this,e||t.defaultFormat);return this.localeData().postformat(n);
}function ye(t,e){return this.isValid()&&(_(t)&&t.isValid()||xt(t).isValid())?Qt({
to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate();
}function ge(t){return this.from(xt(),t)}function pe(t,e){return this.isValid()&&(_(t)&&t.isValid()||xt(t).isValid())?Qt({
from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate();
}function ve(t){return this.to(xt(),t)}function De(t){var e;return void 0===t?this._locale._abbr:(e=k(t),
null!=e&&(this._locale=e),this)}function Me(){return this._locale}function Ye(t){
switch(t=b(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":
case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);
case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),
"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function Se(t){return t=b(t),
void 0===t||"millisecond"===t?this:this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms");
}function we(){return+this._d-6e4*(this._offset||0)}function ke(){return Math.floor(+this/1e3);
}function Te(){return this._offset?new Date(+this):this._d}function be(){var t=this;
return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()];
}function Oe(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),
minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function We(){
return this.isValid()?this.toISOString():"null"}function xe(){return h(this)}function Ue(){
return a({},d(this))}function Ge(){return d(this).overflow}function Pe(){return{input:this._i,
format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ce(t,e){
F(0,[t,t.length],0,e)}function Fe(t){return Ie.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy);
}function He(t){return Ie.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Ve(){
return gt(this.year(),1,4)}function Le(){var t=this.localeData()._week;return gt(this.year(),t.dow,t.doy);
}function Ie(t,e,n,i,s){var r;return null==t?yt(this,i,s).year:(r=gt(t,i,s),e>r&&(e=r),
Ne.call(this,t,e,n,i,s))}function Ne(t,e,n,i,s){var r=_t(t,e,n,i,s),a=ht(r.year,0,r.dayOfYear);
return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),
this}function Ae(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3);
}function Re(t){return yt(t,this._week.dow,this._week.doy).week}function Ee(){return this._week.dow;
}function ze(){return this._week.doy}function Ze(t){var e=this.localeData().week(this);
return null==t?e:this.add(7*(t-e),"d")}function je(t){var e=yt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d");
}function $e(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10);
}function qe(t,e){return n(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()];
}function Je(t){return this._weekdaysShort[t.day()]}function Be(t){return this._weekdaysMin[t.day()];
}function Qe(t,e,n){var i,s,r;for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],
this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;7>i;i++){if(s=xt([2e3,1]).day(i),
n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(s,"").replace(".",".?")+"$","i"),
this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(s,"").replace(".",".?")+"$","i"),
this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(s,"").replace(".",".?")+"$","i")),
this._weekdaysParse[i]||(r="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),
this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;
if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;
if(!n&&this._weekdaysParse[i].test(t))return i}}function Xe(t){if(!this.isValid())return null!=t?this:NaN;
var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=$e(t,this.localeData()),
this.add(t-e,"d")):e}function Ke(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;
return null==t?e:this.add(t-e,"d")}function tn(t){return this.isValid()?null==t?this.day()||7:this.day(this.day()%7?t:t-7):null!=t?this:NaN;
}function en(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;
return null==t?e:this.add(t-e,"d")}function nn(){return this.hours()%12||12}function sn(t,e){
F(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e);
})}function rn(t,e){return e._meridiemParse}function an(t){return"p"===(t+"").toLowerCase().charAt(0);
}function on(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}function un(t,e){e[Oi]=g(1e3*("0."+t));
}function dn(){return this._isUTC?"UTC":""}function hn(){return this._isUTC?"Coordinated Universal Time":"";
}function ln(t){return xt(1e3*t)}function cn(){return xt.apply(null,arguments).parseZone();
}function fn(t,e,n){var i=this._calendar[t];return W(i)?i.call(e,n):i}function mn(t){
var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){
return t.slice(1)}),this._longDateFormat[t])}function _n(){return this._invalidDate;
}function yn(t){return this._ordinal.replace("%d",t)}function gn(t){return t}function pn(t,e,n,i){
var s=this._relativeTime[n];return W(s)?s(t,e,n,i):s.replace(/%d/i,t)}function vn(t,e){
var n=this._relativeTime[t>0?"future":"past"];return W(n)?n(e):n.replace(/%s/i,e);
}function Dn(t){var e,n;for(n in t)e=t[n],W(e)?this[n]=e:this["_"+n]=e;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source);
}function Mn(t,e,n,i){var s=k(),r=o().set(i,e);return s[n](r,t)}function Yn(t,e,n,i,s){
if("number"==typeof t&&(e=t,t=void 0),t=t||"",null!=e)return Mn(t,e,n,s);var r,a=[];
for(r=0;i>r;r++)a[r]=Mn(t,r,n,s);return a}function Sn(t,e){return Yn(t,e,"months",12,"month");
}function wn(t,e){return Yn(t,e,"monthsShort",12,"month")}function kn(t,e){return Yn(t,e,"weekdays",7,"day");
}function Tn(t,e){return Yn(t,e,"weekdaysShort",7,"day")}function bn(t,e){return Yn(t,e,"weekdaysMin",7,"day");
}function On(){var t=this._data;return this._milliseconds=vs(this._milliseconds),
this._days=vs(this._days),this._months=vs(this._months),t.milliseconds=vs(t.milliseconds),
t.seconds=vs(t.seconds),t.minutes=vs(t.minutes),t.hours=vs(t.hours),t.months=vs(t.months),
t.years=vs(t.years),this}function Wn(t,e,n,i){var s=Qt(e,n);return t._milliseconds+=i*s._milliseconds,
t._days+=i*s._days,t._months+=i*s._months,t._bubble()}function xn(t,e){return Wn(this,t,e,1);
}function Un(t,e){return Wn(this,t,e,-1)}function Gn(t){return 0>t?Math.floor(t):Math.ceil(t);
}function Pn(){var t,e,n,i,s,r=this._milliseconds,a=this._days,o=this._months,u=this._data;
return r>=0&&a>=0&&o>=0||0>=r&&0>=a&&0>=o||(r+=864e5*Gn(Fn(o)+a),a=0,o=0),u.milliseconds=r%1e3,
t=y(r/1e3),u.seconds=t%60,e=y(t/60),u.minutes=e%60,n=y(e/60),u.hours=n%24,a+=y(n/24),
s=y(Cn(a)),o+=s,a-=Gn(Fn(s)),i=y(o/12),o%=12,u.days=a,u.months=o,u.years=i,this}function Cn(t){
return 4800*t/146097}function Fn(t){return 146097*t/4800}function Hn(t){var e,n,i=this._milliseconds;
if(t=b(t),"month"===t||"year"===t)return e=this._days+i/864e5,n=this._months+Cn(e),
"month"===t?n:n/12;switch(e=this._days+Math.round(Fn(this._months)),t){case"week":
return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":
return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;
default:throw new Error("Unknown unit "+t)}}function Vn(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*g(this._months/12);
}function Ln(t){return function(){return this.as(t)}}function In(t){return t=b(t),
this[t+"s"]()}function Nn(t){return function(){return this._data[t]}}function An(){
return y(this.days()/7)}function Rn(t,e,n,i,s){return s.relativeTime(e||1,!!n,t,i);
}function En(t,e,n){var i=Qt(t).abs(),s=Fs(i.as("s")),r=Fs(i.as("m")),a=Fs(i.as("h")),o=Fs(i.as("d")),u=Fs(i.as("M")),d=Fs(i.as("y")),h=s<Hs.s&&["s",s]||1>=r&&["m"]||r<Hs.m&&["mm",r]||1>=a&&["h"]||a<Hs.h&&["hh",a]||1>=o&&["d"]||o<Hs.d&&["dd",o]||1>=u&&["M"]||u<Hs.M&&["MM",u]||1>=d&&["y"]||["yy",d];
return h[2]=e,h[3]=+t>0,h[4]=n,Rn.apply(null,h)}function zn(t,e){return void 0===Hs[t]?!1:void 0===e?Hs[t]:(Hs[t]=e,
!0)}function Zn(t){var e=this.localeData(),n=En(this,!t,e);return t&&(n=e.pastFuture(+this,n)),
e.postformat(n)}function jn(){var t,e,n,i=Vs(this._milliseconds)/1e3,s=Vs(this._days),r=Vs(this._months);
t=y(i/60),e=y(t/60),i%=60,t%=60,n=y(r/12),r%=12;var a=n,o=r,u=s,d=e,h=t,l=i,c=this.asSeconds();
return c?(0>c?"-":"")+"P"+(a?a+"Y":"")+(o?o+"M":"")+(u?u+"D":"")+(d||h||l?"T":"")+(d?d+"H":"")+(h?h+"M":"")+(l?l+"S":""):"P0D";
}var $n,qn,Jn=t.momentProperties=[],Bn=!1,Qn={},Xn={},Kn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ti=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ei={},ni={},ii=/\d/,si=/\d\d/,ri=/\d{3}/,ai=/\d{4}/,oi=/[+-]?\d{6}/,ui=/\d\d?/,di=/\d\d\d\d?/,hi=/\d\d\d\d\d\d?/,li=/\d{1,3}/,ci=/\d{1,4}/,fi=/[+-]?\d{1,6}/,mi=/\d+/,_i=/[+-]?\d+/,yi=/Z|[+-]\d\d:?\d\d/gi,gi=/Z|[+-]\d\d(?::?\d\d)?/gi,pi=/[+-]?\d+(\.\d{1,3})?/,vi=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Di={},Mi={},Yi=0,Si=1,wi=2,ki=3,Ti=4,bi=5,Oi=6,Wi=7,xi=8;
F("M",["MM",2],"Mo",function(){return this.month()+1}),F("MMM",0,0,function(t){return this.localeData().monthsShort(this,t);
}),F("MMMM",0,0,function(t){return this.localeData().months(this,t)}),T("month","M"),
N("M",ui),N("MM",ui,si),N("MMM",function(t,e){return e.monthsShortRegex(t)}),N("MMMM",function(t,e){
return e.monthsRegex(t)}),z(["M","MM"],function(t,e){e[Si]=g(t)-1}),z(["MMM","MMMM"],function(t,e,n,i){
var s=n._locale.monthsParse(t,i,n._strict);null!=s?e[Si]=s:d(n).invalidMonth=t});var Ui=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Gi="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Pi="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ci=vi,Fi=vi,Hi={};
t.suppressDeprecationWarnings=!1;var Vi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Li=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Ii=/Z|[+-]\d\d(?::?\d\d)?/,Ni=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Ai=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ri=/^\/?Date\((\-?\d+)/i;
t.createFromInputFallback=rt("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){
t._d=new Date(t._i+(t._useUTC?" UTC":""))}),F("Y",0,0,function(){var t=this.year();
return 9999>=t?""+t:"+"+t}),F(0,["YY",2],0,function(){return this.year()%100}),F(0,["YYYY",4],0,"year"),
F(0,["YYYYY",5],0,"year"),F(0,["YYYYYY",6,!0],0,"year"),T("year","y"),N("Y",_i),N("YY",ui,si),
N("YYYY",ci,ai),N("YYYYY",fi,oi),N("YYYYYY",fi,oi),z(["YYYYY","YYYYYY"],Yi),z("YYYY",function(e,n){
n[Yi]=2===e.length?t.parseTwoDigitYear(e):g(e)}),z("YY",function(e,n){n[Yi]=t.parseTwoDigitYear(e);
}),z("Y",function(t,e){e[Yi]=parseInt(t,10)}),t.parseTwoDigitYear=function(t){return g(t)+(g(t)>68?1900:2e3);
};var Ei=x("FullYear",!1);t.ISO_8601=function(){};var zi=rt("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){
var t=xt.apply(null,arguments);return this.isValid()&&t.isValid()?this>t?this:t:l();
}),Zi=rt("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){
var t=xt.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:l();
}),ji=function(){return Date.now?Date.now():+new Date};Ht("Z",":"),Ht("ZZ",""),N("Z",gi),
N("ZZ",gi),z(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=Vt(gi,t)});var $i=/([\+\-]|\d\d)/gi;
t.updateOffset=function(){};var qi=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,Ji=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
Qt.fn=Ct.prototype;var Bi=ee(1,"add"),Qi=ee(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";
var Xi=rt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){
return void 0===t?this.localeData():this.locale(t)});F(0,["gg",2],0,function(){return this.weekYear()%100;
}),F(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ce("gggg","weekYear"),
Ce("ggggg","weekYear"),Ce("GGGG","isoWeekYear"),Ce("GGGGG","isoWeekYear"),T("weekYear","gg"),
T("isoWeekYear","GG"),N("G",_i),N("g",_i),N("GG",ui,si),N("gg",ui,si),N("GGGG",ci,ai),
N("gggg",ci,ai),N("GGGGG",fi,oi),N("ggggg",fi,oi),Z(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){
e[i.substr(0,2)]=g(t)}),Z(["gg","GG"],function(e,n,i,s){n[s]=t.parseTwoDigitYear(e);
}),F("Q",0,"Qo","quarter"),T("quarter","Q"),N("Q",ii),z("Q",function(t,e){e[Si]=3*(g(t)-1);
}),F("w",["ww",2],"wo","week"),F("W",["WW",2],"Wo","isoWeek"),T("week","w"),T("isoWeek","W"),
N("w",ui),N("ww",ui,si),N("W",ui),N("WW",ui,si),Z(["w","ww","W","WW"],function(t,e,n,i){
e[i.substr(0,1)]=g(t)});var Ki={dow:0,doy:6};F("D",["DD",2],"Do","date"),T("date","D"),
N("D",ui),N("DD",ui,si),N("Do",function(t,e){return t?e._ordinalParse:e._ordinalParseLenient;
}),z(["D","DD"],wi),z("Do",function(t,e){e[wi]=g(t.match(ui)[0],10)});var ts=x("Date",!0);
F("d",0,"do","day"),F("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t);
}),F("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),F("dddd",0,0,function(t){
return this.localeData().weekdays(this,t)}),F("e",0,0,"weekday"),F("E",0,0,"isoWeekday"),
T("day","d"),T("weekday","e"),T("isoWeekday","E"),N("d",ui),N("e",ui),N("E",ui),N("dd",vi),
N("ddd",vi),N("dddd",vi),Z(["dd","ddd","dddd"],function(t,e,n,i){var s=n._locale.weekdaysParse(t,i,n._strict);
null!=s?e.d=s:d(n).invalidWeekday=t}),Z(["d","e","E"],function(t,e,n,i){e[i]=g(t);
});var es="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ns="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),is="Su_Mo_Tu_We_Th_Fr_Sa".split("_");
F("DDD",["DDDD",3],"DDDo","dayOfYear"),T("dayOfYear","DDD"),N("DDD",li),N("DDDD",ri),
z(["DDD","DDDD"],function(t,e,n){n._dayOfYear=g(t)}),F("H",["HH",2],0,"hour"),F("h",["hh",2],0,nn),
F("hmm",0,0,function(){return""+nn.apply(this)+C(this.minutes(),2)}),F("hmmss",0,0,function(){
return""+nn.apply(this)+C(this.minutes(),2)+C(this.seconds(),2)}),F("Hmm",0,0,function(){
return""+this.hours()+C(this.minutes(),2)}),F("Hmmss",0,0,function(){return""+this.hours()+C(this.minutes(),2)+C(this.seconds(),2);
}),sn("a",!0),sn("A",!1),T("hour","h"),N("a",rn),N("A",rn),N("H",ui),N("h",ui),N("HH",ui,si),
N("hh",ui,si),N("hmm",di),N("hmmss",hi),N("Hmm",di),N("Hmmss",hi),z(["H","HH"],ki),
z(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),z(["h","hh"],function(t,e,n){
e[ki]=g(t),d(n).bigHour=!0}),z("hmm",function(t,e,n){var i=t.length-2;e[ki]=g(t.substr(0,i)),
e[Ti]=g(t.substr(i)),d(n).bigHour=!0}),z("hmmss",function(t,e,n){var i=t.length-4,s=t.length-2;
e[ki]=g(t.substr(0,i)),e[Ti]=g(t.substr(i,2)),e[bi]=g(t.substr(s)),d(n).bigHour=!0;
}),z("Hmm",function(t,e,n){var i=t.length-2;e[ki]=g(t.substr(0,i)),e[Ti]=g(t.substr(i));
}),z("Hmmss",function(t,e,n){var i=t.length-4,s=t.length-2;e[ki]=g(t.substr(0,i)),
e[Ti]=g(t.substr(i,2)),e[bi]=g(t.substr(s))});var ss=/[ap]\.?m?\.?/i,rs=x("Hours",!0);
F("m",["mm",2],0,"minute"),T("minute","m"),N("m",ui),N("mm",ui,si),z(["m","mm"],Ti);
var as=x("Minutes",!1);F("s",["ss",2],0,"second"),T("second","s"),N("s",ui),N("ss",ui,si),
z(["s","ss"],bi);var os=x("Seconds",!1);F("S",0,0,function(){return~~(this.millisecond()/100);
}),F(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),F(0,["SSS",3],0,"millisecond"),
F(0,["SSSS",4],0,function(){return 10*this.millisecond()}),F(0,["SSSSS",5],0,function(){
return 100*this.millisecond()}),F(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond();
}),F(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),F(0,["SSSSSSSS",8],0,function(){
return 1e5*this.millisecond()}),F(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond();
}),T("millisecond","ms"),N("S",li,ii),N("SS",li,si),N("SSS",li,ri);var us;for(us="SSSS";us.length<=9;us+="S")N(us,mi);
for(us="S";us.length<=9;us+="S")z(us,un);var ds=x("Milliseconds",!1);F("z",0,0,"zoneAbbr"),
F("zz",0,0,"zoneName");var hs=m.prototype;hs.add=Bi,hs.calendar=ie,hs.clone=se,hs.diff=le,
hs.endOf=Se,hs.format=_e,hs.from=ye,hs.fromNow=ge,hs.to=pe,hs.toNow=ve,hs.get=P,hs.invalidAt=Ge,
hs.isAfter=re,hs.isBefore=ae,hs.isBetween=oe,hs.isSame=ue,hs.isSameOrAfter=de,hs.isSameOrBefore=he,
hs.isValid=xe,hs.lang=Xi,hs.locale=De,hs.localeData=Me,hs.max=Zi,hs.min=zi,hs.parsingFlags=Ue,
hs.set=P,hs.startOf=Ye,hs.subtract=Qi,hs.toArray=be,hs.toObject=Oe,hs.toDate=Te,hs.toISOString=me,
hs.toJSON=We,hs.toString=fe,hs.unix=ke,hs.valueOf=we,hs.creationData=Pe,hs.year=Ei,
hs.isLeapYear=ft,hs.weekYear=Fe,hs.isoWeekYear=He,hs.quarter=hs.quarters=Ae,hs.month=X,
hs.daysInMonth=K,hs.week=hs.weeks=Ze,hs.isoWeek=hs.isoWeeks=je,hs.weeksInYear=Le,
hs.isoWeeksInYear=Ve,hs.date=ts,hs.day=hs.days=Xe,hs.weekday=Ke,hs.isoWeekday=tn,
hs.dayOfYear=en,hs.hour=hs.hours=rs,hs.minute=hs.minutes=as,hs.second=hs.seconds=os,
hs.millisecond=hs.milliseconds=ds,hs.utcOffset=Nt,hs.utc=Rt,hs.local=Et,hs.parseZone=zt,
hs.hasAlignedHourOffset=Zt,hs.isDST=jt,hs.isDSTShifted=$t,hs.isLocal=qt,hs.isUtcOffset=Jt,
hs.isUtc=Bt,hs.isUTC=Bt,hs.zoneAbbr=dn,hs.zoneName=hn,hs.dates=rt("dates accessor is deprecated. Use date instead.",ts),
hs.months=rt("months accessor is deprecated. Use month instead",X),hs.years=rt("years accessor is deprecated. Use year instead",Ei),
hs.zone=rt("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",At);
var ls=hs,cs={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",
lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},fs={LTS:"h:mm:ss A",
LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"
},ms="Invalid date",_s="%d",ys=/\d{1,2}/,gs={future:"in %s",past:"%s ago",s:"a few seconds",
m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",
MM:"%d months",y:"a year",yy:"%d years"},ps=v.prototype;ps._calendar=cs,ps.calendar=fn,
ps._longDateFormat=fs,ps.longDateFormat=mn,ps._invalidDate=ms,ps.invalidDate=_n,ps._ordinal=_s,
ps.ordinal=yn,ps._ordinalParse=ys,ps.preparse=gn,ps.postformat=gn,ps._relativeTime=gs,
ps.relativeTime=pn,ps.pastFuture=vn,ps.set=Dn,ps.months=q,ps._months=Gi,ps.monthsShort=J,
ps._monthsShort=Pi,ps.monthsParse=B,ps._monthsRegex=Fi,ps.monthsRegex=et,ps._monthsShortRegex=Ci,
ps.monthsShortRegex=tt,ps.week=Re,ps._week=Ki,ps.firstDayOfYear=ze,ps.firstDayOfWeek=Ee,
ps.weekdays=qe,ps._weekdays=es,ps.weekdaysMin=Be,ps._weekdaysMin=is,ps.weekdaysShort=Je,
ps._weekdaysShort=ns,ps.weekdaysParse=Qe,ps.isPM=an,ps._meridiemParse=ss,ps.meridiem=on,
S("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===g(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";
return t+n}}),t.lang=rt("moment.lang is deprecated. Use moment.locale instead.",S),
t.langData=rt("moment.langData is deprecated. Use moment.localeData instead.",k);var vs=Math.abs,Ds=Ln("ms"),Ms=Ln("s"),Ys=Ln("m"),Ss=Ln("h"),ws=Ln("d"),ks=Ln("w"),Ts=Ln("M"),bs=Ln("y"),Os=Nn("milliseconds"),Ws=Nn("seconds"),xs=Nn("minutes"),Us=Nn("hours"),Gs=Nn("days"),Ps=Nn("months"),Cs=Nn("years"),Fs=Math.round,Hs={
s:45,m:45,h:22,d:26,M:11},Vs=Math.abs,Ls=Ct.prototype;Ls.abs=On,Ls.add=xn,Ls.subtract=Un,
Ls.as=Hn,Ls.asMilliseconds=Ds,Ls.asSeconds=Ms,Ls.asMinutes=Ys,Ls.asHours=Ss,Ls.asDays=ws,
Ls.asWeeks=ks,Ls.asMonths=Ts,Ls.asYears=bs,Ls.valueOf=Vn,Ls._bubble=Pn,Ls.get=In,
Ls.milliseconds=Os,Ls.seconds=Ws,Ls.minutes=xs,Ls.hours=Us,Ls.days=Gs,Ls.weeks=An,
Ls.months=Ps,Ls.years=Cs,Ls.humanize=Zn,Ls.toISOString=jn,Ls.toString=jn,Ls.toJSON=jn,
Ls.locale=De,Ls.localeData=Me,Ls.toIsoString=rt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",jn),
Ls.lang=Xi,F("X",0,0,"unix"),F("x",0,0,"valueOf"),N("x",_i),N("X",pi),z("X",function(t,e,n){
n._d=new Date(1e3*parseFloat(t,10))}),z("x",function(t,e,n){n._d=new Date(g(t))}),
t.version="2.11.2",e(xt),t.fn=ls,t.min=Gt,t.max=Pt,t.now=ji,t.utc=o,t.unix=ln,t.months=Sn,
t.isDate=i,t.locale=S,t.invalid=l,t.duration=Qt,t.isMoment=_,t.weekdays=kn,t.parseZone=cn,
t.localeData=k,t.isDuration=Ft,t.monthsShort=wn,t.weekdaysMin=bn,t.defineLocale=w,
t.weekdaysShort=Tn,t.normalizeUnits=b,t.relativeTimeThreshold=zn,t.prototype=ls;var Is=t;
return Is});