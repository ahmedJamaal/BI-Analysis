!function(e,t){"object"==typeof exports&&exports&&"string"!=typeof exports.nodeName?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e.Mustache={},
t(e.Mustache))}(this,function(e){function t(e){return"function"==typeof e}function n(e){
return g(e)?"array":typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");
}function i(e,t){return null!=e&&"object"==typeof e&&t in e}function o(e,t){return v.call(e,t);
}function s(e){return!o(w,e)}function a(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){
return y[e]})}function u(t,n){function i(){if(w&&!y)for(;v.length;)delete d[v.pop()];else v=[];
w=!1,y=!1}function o(e){if("string"==typeof e&&(e=e.split(k,2)),!g(e)||2!==e.length)throw new Error("Invalid tags: "+e);
a=new RegExp(r(e[0])+"\\s*"),u=new RegExp("\\s*"+r(e[1])),h=new RegExp("\\s*"+r("}"+e[1]));
}if(!t)return[];var a,u,h,f=[],d=[],v=[],w=!1,y=!1;o(n||e.tags);for(var U,T,j,S,V,C,A=new l(t);!A.eos();){
if(U=A.pos,j=A.scanUntil(a))for(var I=0,R=j.length;R>I;++I)S=j.charAt(I),s(S)?v.push(d.length):y=!0,
d.push(["text",S,U,U+1]),U+=1,"\n"===S&&i();if(!A.scan(a))break;if(w=!0,T=A.scan(E)||"name",
A.scan(x),"="===T?(j=A.scanUntil(b),A.scan(b),A.scanUntil(u)):"{"===T?(j=A.scanUntil(h),
A.scan(m),A.scanUntil(u),T="&"):j=A.scanUntil(u),!A.scan(u))throw new Error("Unclosed tag at "+A.pos);
if(V=[T,j,U,A.pos],d.push(V),"#"===T||"^"===T)f.push(V);else if("/"===T){if(C=f.pop(),
!C)throw new Error('Unopened section "'+j+'" at '+U);if(C[1]!==j)throw new Error('Unclosed section "'+C[1]+'" at '+U);
}else"name"===T||"{"===T||"&"===T?y=!0:"="===T&&o(j)}if(C=f.pop())throw new Error('Unclosed section "'+C[1]+'" at '+A.pos);
return p(c(d))}function c(e){for(var t,n,r=[],i=0,o=e.length;o>i;++i)t=e[i],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],
n[3]=t[3]):(r.push(t),n=t));return r}function p(e){for(var t,n,r=[],i=r,o=[],s=0,a=e.length;a>s;++s)switch(t=e[s],
t[0]){case"#":case"^":i.push(t),o.push(t),i=t[4]=[];break;case"/":n=o.pop(),n[5]=t[2],
i=o.length>0?o[o.length-1][4]:r;break;default:i.push(t)}return r}function l(e){this.string=e,
this.tail=e,this.pos=0}function h(e,t){this.view=e,this.cache={".":this.view},this.parent=t;
}function f(){this.cache={}}var d=Object.prototype.toString,g=Array.isArray||function(e){
return"[object Array]"===d.call(e)},v=RegExp.prototype.test,w=/\S/,y={"&":"&amp;",
"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"
},x=/\s*/,k=/\s+/,b=/\s*=/,m=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;l.prototype.eos=function(){
return""===this.tail},l.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";
var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},l.prototype.scanUntil=function(e){
var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:
t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,
t},h.prototype.push=function(e){return new h(e,this)},h.prototype.lookup=function(e){
var n,r=this.cache;if(r.hasOwnProperty(e))n=r[e];else{for(var o,s,a=this,u=!1;a;){
if(e.indexOf(".")>0)for(n=a.view,o=e.split("."),s=0;null!=n&&s<o.length;)s===o.length-1&&(u=i(n,o[s])),
n=n[o[s++]];else n=a.view[e],u=i(a.view,e);if(u)break;a=a.parent}r[e]=n}return t(n)&&(n=n.call(this.view)),
n},f.prototype.clearCache=function(){this.cache={}},f.prototype.parse=function(e,t){
var n=this.cache,r=n[e];return null==r&&(r=n[e]=u(e,t)),r},f.prototype.render=function(e,t,n){
var r=this.parse(e),i=t instanceof h?t:new h(t);return this.renderTokens(r,i,n,e);
},f.prototype.renderTokens=function(e,t,n,r){for(var i,o,s,a="",u=0,c=e.length;c>u;++u)s=void 0,
i=e[u],o=i[0],"#"===o?s=this.renderSection(i,t,n,r):"^"===o?s=this.renderInverted(i,t,n,r):">"===o?s=this.renderPartial(i,t,n,r):"&"===o?s=this.unescapedValue(i,t):"name"===o?s=this.escapedValue(i,t):"text"===o&&(s=this.rawValue(i)),
void 0!==s&&(a+=s);return a},f.prototype.renderSection=function(e,n,r,i){function o(e){
return s.render(e,n,r)}var s=this,a="",u=n.lookup(e[1]);if(u){if(g(u))for(var c=0,p=u.length;p>c;++c)a+=this.renderTokens(e[4],n.push(u[c]),r,i);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)a+=this.renderTokens(e[4],n.push(u),r,i);else if(t(u)){
if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");
u=u.call(n.view,i.slice(e[3],e[5]),o),null!=u&&(a+=u)}else a+=this.renderTokens(e[4],n,r,i);
return a}},f.prototype.renderInverted=function(e,t,n,r){var i=t.lookup(e[1]);return!i||g(i)&&0===i.length?this.renderTokens(e[4],t,n,r):void 0;
},f.prototype.renderPartial=function(e,n,r){if(r){var i=t(r)?r(e[1]):r[e[1]];return null!=i?this.renderTokens(this.parse(i),n,r,i):void 0;
}},f.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);return null!=n?n:void 0;
},f.prototype.escapedValue=function(t,n){var r=n.lookup(t[1]);return null!=r?e.escape(r):void 0;
},f.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="2.2.1",
e.tags=["{{","}}"];var U=new f;e.clearCache=function(){return U.clearCache()},e.parse=function(e,t){
return U.parse(e,t)},e.render=function(e,t,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+n(e)+'" was given as the first argument for mustache#render(template, view, partials)');
return U.render(e,t,r)},e.to_html=function(n,r,i,o){var s=e.render(n,r,i);return t(o)?void o(s):s;
},e.escape=a,e.Scanner=l,e.Context=h,e.Writer=f});