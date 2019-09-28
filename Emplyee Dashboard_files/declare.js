define(["./kernel","../has","./lang"],function(t,e,n){function r(t,e){throw new Error("declare"+(e?" "+e:"")+": "+t);
}function o(t,e){for(var n,o,i,s,a,c,l,p,u=[],h=[{cls:0,refs:[]}],f={},d=1,m=t.length,y=0;m>y;++y){
for(i=t[y],i?"[object Function]"!=O.call(i)&&r("mixin #"+y+" is not a callable constructor.",e):r("mixin #"+y+" is unknown. Did you use dojo.require to pull it in?",e),
o=i._meta?i._meta.bases:[i],s=0,n=o.length-1;n>=0;--n)a=o[n].prototype,a.hasOwnProperty("declaredClass")||(a.declaredClass="uniqName_"+j++),
l=a.declaredClass,f.hasOwnProperty(l)||(f[l]={count:0,refs:[],cls:o[n]},++d),c=f[l],
s&&s!==c&&(c.refs.push(s),++s.count),s=c;++s.count,h[0].refs.push(s)}for(;h.length;){
for(s=h.pop(),u.push(s.cls),--d;p=s.refs,1==p.length;){if(s=p[0],!s||--s.count){s=0;
break}u.push(s.cls),--d}if(s)for(y=0,m=p.length;m>y;++y)s=p[y],--s.count||h.push(s);
}return d&&r("can't build consistent linearization",e),i=t[0],u[0]=i?i._meta&&i===u[u.length-i._meta.bases.length]?i._meta.bases.length:1:0,
u}function i(t,e,n){var o,i,s,a,c,l,p,u,h,f=this._inherited=this._inherited||{};if("string"==typeof t&&(o=t,
t=e,e=n),n=0,a=t.callee,o=o||a.nom,o||r("can't deduce a name to call inherited()",this.declaredClass),
c=this.constructor._meta,s=c.bases,h=f.p,o!=k){if(f.c!==a&&(h=0,l=s[0],c=l._meta,
c.hidden[o]!==a)){i=c.chains,i&&"string"==typeof i[o]&&r("calling chained method with inherited: "+o,this.declaredClass);
do if(c=l._meta,p=l.prototype,c&&(p[o]===a&&p.hasOwnProperty(o)||c.hidden[o]===a))break;while(l=s[++h]);
h=l?h:-1}if(l=s[++h])if(p=l.prototype,l._meta&&p.hasOwnProperty(o))n=p[o];else{u=v[o];
do if(p=l.prototype,n=p[o],n&&(l._meta?p.hasOwnProperty(o):n!==u))break;while(l=s[++h]);
}n=l&&n||v[o]}else{if(f.c!==a&&(h=0,c=s[0]._meta,c&&c.ctor!==a)){for(i=c.chains,i&&"manual"===i.constructor||r("calling chained constructor with inherited",this.declaredClass);(l=s[++h])&&(c=l._meta,
!c||c.ctor!==a););h=l?h:-1}for(;(l=s[++h])&&(c=l._meta,!(n=c?c.ctor:l)););n=l&&n}
return f.c=n,f.p=h,n?e===!0?n:n.apply(this,e||t):void 0}function s(t,e){return"string"==typeof t?this.__inherited(t,e,!0):this.__inherited(t,!0);
}function a(t,e,n){var r=this.getInherited(t,e);return r?r.apply(this,n||e||t):void 0;
}function c(t){for(var e=this.constructor._meta.bases,n=0,r=e.length;r>n;++n)if(e[n]===t)return!0;
return this instanceof t}function l(t,r){for(var o in r)o!=k&&r.hasOwnProperty(o)&&(t[o]=r[o]);
if(e("bug-for-in-skips-shadowed"))for(var i=n._extraNames,s=i.length;s;)o=i[--s],
o!=k&&r.hasOwnProperty(o)&&(t[o]=r[o])}function p(t,r){var o,i;for(o in r)i=r[o],
i===v[o]&&o in v||o==k||("[object Function]"==O.call(i)&&(i.nom=o),t[o]=i);if(e("bug-for-in-skips-shadowed"))for(var s=n._extraNames,a=s.length;a;)o=s[--a],
i=r[o],i===v[o]&&o in v||o==k||("[object Function]"==O.call(i)&&(i.nom=o),t[o]=i);
return t}function u(t){return _.safeMixin(this.prototype,t),this}function h(t,e){
return _([this].concat(t),e||{})}function f(t,e){return function(){var n,r,o,i,s=arguments,a=s,c=s[0],l=t.length;
if(!(this instanceof s.callee))return b(s);if(e&&(c&&c.preamble||this.preamble))for(i=new Array(t.length),
i[0]=s,r=0;c=s[0],c&&(n=c.preamble,n&&(s=n.apply(this,s)||s)),n=t[r].prototype,n=n.hasOwnProperty("preamble")&&n.preamble,
n&&(s=n.apply(this,s)||s),++r!=l;)i[r]=s;for(r=l-1;r>=0;--r)n=t[r],o=n._meta,n=o?o.ctor:n,
n&&n.apply(this,i?i[r]:s);n=this.postscript,n&&n.apply(this,a)}}function d(t,e){return function(){
var n,r=arguments,o=r,i=r[0];return this instanceof r.callee?(e&&(i&&(n=i.preamble,
n&&(o=n.apply(this,o)||o)),n=this.preamble,n&&n.apply(this,o)),t&&t.apply(this,r),
n=this.postscript,void(n&&n.apply(this,r))):b(r)}}function m(t){return function(){
var e,n,r=arguments,o=0;if(!(this instanceof r.callee))return b(r);for(;e=t[o];++o)if(n=e._meta,
e=n?n.ctor:e){e.apply(this,r);break}e=this.postscript,e&&e.apply(this,r)}}function y(t,e,n){
return function(){var r,o,i,s=0,a=1;for(n&&(s=e.length-1,a=-1);r=e[s];s+=a)o=r._meta,
i=(o?o.hidden:r.prototype)[t],i&&i.apply(this,arguments)}}function g(t){x.prototype=t.prototype;
var e=new x;return x.prototype=null,e}function b(t){var e=t.callee,n=g(e);return e.apply(n,t),
n}function _(t,e,a){"string"!=typeof t&&(a=e,e=t,t=""),a=a||{};var p,b,x,j,C,F,M,q=1,D=e;
if("[object Array]"==O.call(e)?(F=o(e,t),x=F[0],q=F.length-x,e=F[q]):(F=[0],e?"[object Function]"==O.call(e)?(x=e._meta,
F=F.concat(x?x.bases:e)):r("base class is not a callable constructor.",t):null!==e&&r("unknown base class. Did you use dojo.require to pull it in?",t)),
e)for(b=q-1;p=g(e),b;--b)x=F[b],(x._meta?l:w)(p,x.prototype),j=new Function,j.superclass=e,
j.prototype=p,e=p.constructor=j;else p={};for(_.safeMixin(p,a),x=a.constructor,x!==v.constructor&&(x.nom=k,
p.constructor=x),b=q-1;b;--b)x=F[b]._meta,x&&x.chains&&(M=w(M||{},x.chains));if(p["-chains-"]&&(M=w(M||{},p["-chains-"])),
x=!M||!M.hasOwnProperty(k),F[0]=j=M&&"manual"===M.constructor?m(F):1==F.length?d(a.constructor,x):f(F,x),
j._meta={bases:F,hidden:a,chains:M,parents:D,ctor:a.constructor},j.superclass=e&&e.prototype,
j.extend=u,j.createSubclass=h,j.prototype=p,p.constructor=j,p.getInherited=s,p.isInstanceOf=c,
p.inherited=P,p.__inherited=i,t&&(p.declaredClass=t,n.setObject(t,j)),M)for(C in M)p[C]&&"string"==typeof M[C]&&C!=k&&(x=p[C]=y(C,F,"after"===M[C]),
x.nom=C);return j}var w=n.mixin,v=Object.prototype,O=v.toString,x=new Function,j=0,k="constructor",P=t.config.isDebug?a:i;
return t.safeMixin=_.safeMixin=p,t.declare=_,_});