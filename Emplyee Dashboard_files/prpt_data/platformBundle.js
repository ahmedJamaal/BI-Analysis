/*!
 * Copyright 2010 - 2017 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*!
 * Copyright 2018 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*!
 * Copyright 2016 - 2017 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*!
 * Copyright 2010 - 2018 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*!
 * Based on Base.js 1.1a (c) 2006-2010, Dean Edwards
 * Updated to pass JSHint and converted into a module by Kenneth Powers
 * License: http://www.opensource.org/licenses/mit-license.php
 */

/*!
 * Based on Base.js by Dean Edwards, and later edited by Kenneth Powers.
 *
 * Changes:
 * 1. Added support for the `instanceof` operator.
 * 2. Added support for ES5 get/set properties.
 * 3. Added support for "Array classes", through `Base.Array`.
 * 4. Improved support for mixins.
 *
 *    Namely, it is now possible to call the mixed-in class constructor
 *    to initialize an instance of another class.
 *
 * 5. `Class.init` was removed.
 * 6. Added the `Class.to` method.
 *
 *    Converts its arguments to an instance of `Class`, or throws if that is impossible.
 *
 *    The default implementation tests if the first argument is an instance of that type and returns it, if it is.
 *    Otherwise, it calls `Class` with the `new` operator and all of the given arguments and returns the result.
 *
 * 7. To support 4., the previous constructor behavior, for when invoked
 *    on a non-instance of it (possibly without using the `new` operator) was dropped.
 *    It would extend the first argument with the class' prototype.
 *    Now, it ends up initializing the global object...
 * 8. Removed `Class#forEach`.
 * 9. Instances no longer have an own "base" property,
 *    it is inherited from, and set on, the corresponding "Base" root prototype object.
 * 10. `Base._prototyping` and `Base#_constructing` are no longer needed to
 *     control Class constructor and inst_extend flow.
 * 11. Class.valueOf removed. No longer needed... ?
 * 12. `Base#__base_root_proto__` is a new constant, non-enumerable property, set at each "Base" root prototype.
 * 13. `Base#__base_init__` is a new constant, non-enumerable, property, set at the prototype of "Base" classes
 *     that have an own initialization method (specified with the `constructor` property).
 * 14. Added new Class.implementStatic method to allow to specify the class interface after extend.
 *     Is parallel to Class.implement.
 * 15. Any existing static methods are inherited (not only standard Base ones).
 * 16. Dropped support for the overload Base#extend(name, value).
 *     The same method now supports only the signature Base#extend(instSpec[, keyArgs]).
 * 17. Added support to augment the set of per-class, inherited property names that are excluded from
 *     instance-extension operations.
 *     Specify `extend_exclude` when sub-classing, e.g. `Base.extend({extend_exclude: {a: true, b: true}});`.
 * 18. Added support to control, per-class, the properties extension order in instance-extension operations.
 *     Specify `extend_order` when sub-classing, e.g. `Base.extend({extend_order: ["b", "a"]});`.
 */

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.1.1
 */

/*!
 * Copyright 2017-2018 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*!
 * Copyright 2017 - 2018 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*!
* Copyright 2010 - 2018 Hitachi Vantara. All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/*!
* Copyright 2010 - 2017 Hitachi Vantara. All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

/*!
* Copyright 2010 - 2017 Hitachi Vantara. All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

define("pentaho/util/has",[],function(){"use strict";function e(e){return t.call(o,e)&&!!o[e];
}var t=Object.prototype.hasOwnProperty,n=!1;if("undefined"!=typeof URL)try{var i=new URL("b","http://a");
i.pathname="c%20d",n="http://a/c%20d"===i.href}catch(r){}var o={"Object.setPrototypeOf":null!=Object.setPrototypeOf,
"Object.prototype.__proto__":null!={}.__proto__,URL:n};return e}),define("pentaho/util/object",["./has"],function(e){
"use strict";function t(e,t){var n=e[y];return null==n&&(t?(n="i"+v++,i(e,y,n)):n=null),
n}function n(e,t){var n;for(var i in t)d.call(t,i)&&void 0!==(n=t[i])&&(e[i]=n);return e;
}function i(e,t,n){_.value=n,Object.defineProperty(e,t,_),_.value=void 0}function r(e,t,n){
var i=o(t,n);return(i&&i.get||i.set||void 0!==i.value)&&Object.defineProperty(e,n,i),
e}function o(e,t,n){for(var i;!(i=Object.getOwnPropertyDescriptor(e,t))&&(e=Object.getPrototypeOf(e))&&(!n||e!==n););
return i||null}function a(e,t){return e.__proto__=t,e}function s(e,t){for(var n in t)r(e,t,n);
return e}function u(e){return null==e?"":e}function l(e){return null==e?"":e.toString();
}function c(e){return null==e?"":e.toISOString()}function h(e){if(null==e)return"";
switch(typeof e){case"string":return e;case"number":case"boolean":return e.toString();
}return e instanceof Date?e.toISOString():t(e,!0)}var d=Object.prototype.hasOwnProperty,p=[],f=e("Object.setPrototypeOf")?Object.setPrototypeOf:e("Object.prototype.__proto__")?a:s,_={
value:void 0,writable:!1,configurable:!1,enumerable:!1},g=Object.prototype,m=Object.prototype.isPrototypeOf,y="___OBJUID___",v=1;
return{"delete":function(e,t,n){var i=n;return e&&t in e&&(i=e[t],delete e[t]),i},
using:function(e,t,n){try{return t.call(n,e)}finally{e.dispose()}},hasOwn:function(e,t){
return!!e&&d.call(e,t)},getOwn:function(e,t,n){return e&&d.call(e,t)?e[t]:n},setConst:i,
eachOwn:function(e,t,n){for(var i in e)if(d.call(e,i)&&t.call(n||e,e[i],i)===!1)return!1;
return!0},assignOwn:function(e,t){for(var n in t)d.call(t,n)&&(e[n]=t[n]);return e;
},assignOwnDefined:n,cloneShallow:function(e){return e&&"object"==typeof e&&(e instanceof Array?e=e.slice():e.constructor===Object&&(e=n({},e))),
e},getPropertyDescriptor:o,lca:function(e,t){if(!e||!t)return null;for(var n=t;e!==n&&n!==g&&!m.call(n,e)&&(n=Object.getPrototypeOf(n)););
return n!==g||m.call(n,e)||(n=null),n},make:function(e,t){switch(t?t.length:0){case 0:
return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);
}var n=Object.create(e.prototype);return e.apply(n,t)||n},setPrototypeOf:f,applyClass:function(e,t,n){
var i=t.prototype;return i===e||i.isPrototypeOf(e)?e:(f(e,i),e.constructor!==t&&Object.defineProperty(e,"constructor",{
configurable:!0,writable:!0,value:t}),t.apply(e,n||p)||e)},getUniqueId:t,getSameTypeKey:h,
getSameTypeKeyFun:function(e){switch(e){case"string":return u;case"number":case"boolean":
return l;case"date":return c;default:return h}}}}),define("pentaho/util/fun",[],function(){
function buildPredicate(e){"use strict";return function(t){if(!t)return!1;for(var n,i=e.length;i--;)if(n=e[i],
t[n[0]]!==n[1])return!1;return!0}}function asFun(f){return f&&("string"==typeof f&&(f=eval("("+f+")")),
"function"==typeof f)?f:null}return function(){"use strict";return{is:function(e){
return"function"==typeof e},as:asFun,constant:function(e){return function(){return e;
}},compare:function(e,t){return e===t?0:e>t?1:-1},predicate:function(e){var t=[];return e&&Object.keys(e).forEach(function(n){
var i=e[n];void 0!==i&&t.push([n,i])}),t.length?buildPredicate(t):null}}}()}),define("pentaho/util/text",[],function(){
"use strict";var e={nonEmptyString:function(e){return null==e?null:String(e)||null;
},firstUpperCase:function(e){if(e){var t=e.charAt(0),n=t.toUpperCase();t!==n&&(e=n+e.substr(1));
}return e},titleFromName:function(t){return t?e.firstUpperCase(t).replace(/([a-z\d])([A-Z])/g,"$1 $2"):t;
},toSnakeCase:function(e){return e?e.replace(/([a-z\d])([A-Z])/g,"$1-$2").replace(/[\/\\_\s\.]+/g,"-").replace(/-+/g,"-").toLowerCase():e;
},andSentence:function(e,t){return e+(t?" "+this.withPeriod(t):"")},withPeriod:function(e){
return e&&!/[.;!?]/.test(e[e.length-1])?e+".":e}};return e}),define("pentaho/util/requireJSConfig",[],function(){
return{load:function(e,t,n,i){n(i)}}}),define("pentaho/debug/Levels",["../util/object"],function(e){
"use strict";var t={parse:function(t,i){if(null!=t&&""!==t){var r=Math.floor(+t);if(!isNaN(r))return Math.max(n.none,r);
if(null!=(r=e.getOwn(n,String(t).toLowerCase())))return r}return null!=i?i:n.debug;
}},n={none:0,error:1,exception:1,warn:2,info:3,debug:4,log:4,trace:5,all:1/0};return n=Object.freeze(e.assignOwn(Object.create(t),n));
}),define("pentaho/debug/impl/Manager",["../Levels","../../util/object"],function(e,t){
"use strict";function n(){this.__level=e.error,this.__modules={}}function i(e){return"string"==typeof e?e:e.id;
}return n.prototype={configure:function(e){null!=e.level&&this.setLevel(e.level),
t.eachOwn(e.modules,function(e,t){this.setLevel(e,t)},this)},getLevel:function(e){
if(null==e)return this.__level;var n=t.getOwn(this.__modules,i(e));return null==n?this.__level:n;
},setLevel:function(t,n){var r=e.parse(t);null==n?this.__level=r:this.__modules[i(n)]=r;
},testLevel:function(t,n){return this.getLevel(n)>=e.parse(t)}},n}),define("pentaho/util/domWindow",[],function(){
"use strict";return"undefined"!=typeof window?window:null}),define("pentaho/debug/manager",["pentaho/util/requireJSConfig!","./impl/Manager","./Levels","../util/domWindow"],function(e,t,n,i){
"use strict";function r(){if(i){var e=function(e){var t;return/\bdebug=true\b/.test(t=e.location.href)?t:null;
};try{var t=e(i)||(i!==i.top?e(i.top):null);if(t){var r=/\bdebugLevel=(\w+)\b/.exec(t);
return n.parse(r&&r[1])}}catch(o){}}}var o=e.config["pentaho/debug"]||{},a=r();null!=a&&(o.level=a);
var s=new t;return s.configure(o),s}),define("pentaho/debug",["pentaho/debug/manager"],function(e){
return e}),define("pentaho/lang/Base",["module","../util/object","../util/fun","../util/text","../debug","../debug/Levels"],function(e,t,n,i,r,o){
"use strict";function a(){function e(e){this.extend(e)}function t(e){this.extend(e);
}function n(e){this.message=e,this.stack=(new Error).stack}var i=u(Object,{},"Base.Object",e);
return i.version="2.0",i.Object=i,i.Array=u(Array,[],"Base.Array",t),i.Array.to=v,
i.Error=u(Error,Object.create(Error.prototype),"Base.Error",n),i}function s(e,t){
return k.call(e,"__base_class_id__")?e.__base_class_id__:t?e.__base_class_id__=L++:null;
}function u(e,n,i,r){var o=function(){};o.prototype=n,n.extend=I,s(n,!0),t.setConst(n,"__base_bases__",Object.freeze({})),
t.setConst(n,"__base_extend_exclude__",q),t.setConst(n,"__base_extend_order__",Object.freeze([])),
t.setConst(n,"__base_ops__",Object.freeze([])),o.extend=l,o._extend=c,o._subclassed=p,
o.mix=b,o.implement=w,o.implementStatic=j,o.to=y,o.toString=B;var a=o.extend({constructor:r
},{ancestor:e}),u=a.prototype;return Object.defineProperty(u,"base",{configurable:!0,
writable:!0,enumerable:!1,value:S}),t.setConst(u,"__base_root_proto__",u),V(a,i),
a}function l(e,t,n,i){return arguments.length<4&&"string"!=typeof e&&(i=n,n=t,t=e,
e=null),this._extend(e,t,n,i)}function c(e,t,n,i){var r=d.call(this,e,t,n,i);return this._subclassed(r,t,n,i),
r}function h(e){if(e.indexOf("/")>0){var t=e.split("/"),n=t.length-1;t[n]=i.firstUpperCase(t[n]),
e=t.join(".")}return e}function d(e,n,i,r){e?e=h(e):(e=this.name||this.displayName||null,
e&&(e+="$"));var o=Object.create(this.prototype),a=f(o,n,e);t.setConst(o,"constructor",a),
a.prototype=o,a.ancestor=this;var u=Object.create(o.__base_bases__);u[o.__base_class_id__]=1,
s(o,!0),t.setConst(o,"__base_bases__",u),t.setConst(o,"__base_ops__",[{name:"mix",
args:[n,i,r]}]);var l=n&&n.extend_exclude;l&&(l=t.assignOwn(t.assignOwn({},o.__base_extend_exclude__),l),
t.setConst(o,"__base_extend_exclude__",Object.freeze(l)));var c=n&&n.extend_order;
return c&&(c=(o.__base_extend_order__||[]).concat(c),t.setConst(o,"__base_extend_order__",Object.freeze(c))),
A.call(a,this),a}function p(e,t,n,i){C.call(e,t,n,i)}function f(e,n,i){var r=e.__base_init__,o=_(n);
return o?(o=F(o,r,e.__base_root_proto__,i,!0),t.setConst(e,"__base_init__",o)):o=g(r,i),
i&&V(o,i),o}function _(e){var t=e&&e.constructor;return t&&t!==Object&&n.is(t)?t:null;
}function g(e,t){if(!t||!K)return function(){return e.apply(this,arguments)};var n=new Function("init","return function "+m(t)+"() {\n  return init.apply(this, arguments);\n};");
return n(e)}function m(e){return e.replace(/[^\w0-9$_]/gi,"_")}function y(e){return e instanceof this?e:t.make(this,arguments);
}function v(e){if(null==e)e=[];else{if(e instanceof this)return e;if(!(e instanceof Array))throw new Error("Cannot convert value to Base.Array.");
}return t.applyClass(e,this,N.call(arguments,1))}function b(e,t,n){return this.prototype.__base_ops__.push({
name:"mix",args:[e,t,n]}),C.call(this,e,t,n),this}function C(e,t,i){var r=this.prototype,o=n.is(e);
if(o&&(i=t,t=e,e=t.prototype),e){if(e===r)return this;var a=s(e,!0);if(r.__base_bases__[a])return this;
}return o&&((this.mixins||(this.mixins=[])).push(t),e&&e.__base_ops__)?(O.call(this,t),
this):(e&&r.extend(e,i),t&&T.call(this,t,i),this)}function O(e){for(var n=t.lca(this.prototype,e.prototype),i=[],r=e.prototype;r!==n;)i.push(r),
r=Object.getPrototypeOf(r);for(var o=this.prototype,a=i.length;a--;){r=i[a];var u=s(r);
o.__base_bases__[u]||(o.__base_bases__[u]=1,x.call(this,i[a].__base_ops__))}}function x(e){
for(var t=-1,n=e.length;++t<n;)this[e[t].name].apply(this,e[t].args)}function w(){
var e=this.prototype;e.__base_ops__.push({name:"implement",args:N.call(arguments)
});for(var t=-1,i=arguments.length;++t<i;){var r=arguments[t];e.extend(n.is(r)?r.prototype:r);
}return this}function A(e){for(var t in e)t in Object||k.call(z,t)||R.call(this,t,e,void 0,!0);
}function j(){this.prototype.__base_ops__.push({name:"implementStatic",args:N.call(arguments)
});for(var e=-1,t=arguments.length;++e<t;){var n=arguments[e];n&&T.call(this,n)}return this;
}function T(e,i){var r,o=i&&i.exclude;if(n.is(e)){var a=t.lca(this.prototype,e.prototype),s=a&&a.constructor;
for(r in e)r in Object||k.call(z,r)||o&&k.call(o,r)||s&&E(Object.getOwnPropertyDescriptor(e,r),Object.getOwnPropertyDescriptor(s,r))||R.call(this,r,e);
}else for(r in e)r in Object||k.call(q,r)||k.call(z,r)||o&&k.call(o,r)||R.call(this,r,e);
}function S(){}function I(e,n){if(e){var i=this,r=this.__base_root_proto__,o=this.__base_extend_exclude__,a=r&&t.lca(e,this);
if(a)for(var u=e;u&&u!==a&&u!==r;){var l=s(u,!1);l&&(i.__base_bases__[l]=1),u=Object.getPrototypeOf(u);
}var c,h=n&&n.exclude,d=Object.create(null),p=function(t){k.call(d,t)||k.call(o,t)||h&&k.call(h,t)||(d[t]=1,
R.call(i,t,e,r,null,a))},f=this.__base_extend_order__;if(f)for(var _=-1,g=f.length;++_<g;)(c=f[_])in e&&p(c);
for(c in e)p(c)}return this}function R(e,i,r,o,a){var s,u=t.getPropertyDescriptor(i,e,a);
if(u)if(s=t.getPropertyDescriptor(this,e),u.get||u.set){if(s&&((u.get||s.get)&&(u.get=F(u.get,s.get,r)),
(u.set||s.set)&&(u.set=F(u.set,s.set,r)),u.get===s.get&&u.set===s.set))return;Object.defineProperty(this,e,u);
}else{if(s&&s.get&&!s.set)return;var l=u.value;n.is(l)?s&&(s.get||s.set)?this[e]=l:this[e]=F(l,s&&s.value,r,e):o||(this[e]=l);
}}function E(e,t){return null==e&&null==t?!0:e&&t?e.get===t.get&&e.set===t.set&&e.value===t.value:!1;
}function F(e,t,n,i,r){if(!e)return t;var o=e.valueOf();if(!t){if(o!==e)return e;t=S;
}return!o||t.valueOf&&t.valueOf()===o||!(r&&K||M(o))?e:(e=P(o,t,n,i),e.valueOf=function(t){
return"object"===t?e:o},e.toString=B,e)}function M(e){return/\bthis(\s*)\.(\s*)base\b/.test(e);
}function $(e,t,n){return n?function(){var i=n.base;n.base=t;try{return e.apply(this,arguments);
}finally{n.base=i}}:function(){var n=this.base;this.base=t;try{return e.apply(this,arguments);
}finally{this.base=n}}}function P(e,t,n,i){if(!i||!K)return $(e,t,n);var r;return(r=n?new Function("_method_","_baseMethod_","_rootProto_","return function "+m(i)+"() {\n  var previous = _rootProto_.base; _rootProto_.base = _baseMethod_;\n  try {\n      return _method_.apply(this, arguments);\n  } finally { _rootProto_.base = previous; }\n};"):new Function("_method_","_baseMethod_","_rootProto_","return function "+m(i)+"() {\n  var previous = this.base; this.base = _baseMethod_;\n  try {\n     return _method_.apply(this, arguments);\n  } finally { this.base = previous; }\n};"))(e,t,n);
}function B(){return D.call(this.valueOf())}function V(e,t){e.displayName=t;try{Object.defineProperty(e,"name",{
value:t,configurable:!0})}catch(n){}}var D=Function.prototype.toString,k=Object.prototype.hasOwnProperty,N=Array.prototype.slice,L=1,q=Object.freeze({
constructor:1,extend_order:1,extend_exclude:1,base:1,__base_init__:1,__base_root_proto__:1,
__base_extend_order__:1,__base_extend_exclude__:1,__base_class_id__:1,__base_bases__:1,
__base_ops__:1}),z=Object.freeze({ancestor:1,mixins:1,prototype:1,valueOf:1,Array:1,
Object:1,base:1,name:1,displayName:1,extend_order:1,extend_exclude:1}),K=r.testLevel(o.debug,e);
return a()}),define("pentaho/lang/List",["./Base"],function(e){var t=e.Array.prototype;
return e.Array.extend("pentaho.lang.List",{constructor:function(e){this._addMany(this,e);
},_added:null,_replaced:null,elemClass:null,_getElemName:function(){return this.elemClass.prototype.elemName;
},push:function(){return this._addMany(arguments)},addMany:function(e,t){return this._addMany(e,t);
},add:function(e,t){return this.insert(e,this.length,t)},replace:function(e,t,n){
var i=this[t],r=this._replacing(e,t,i,n);return void 0!==r&&i!==r&&(this[t]=r,this._replaced&&this._replaced(r,t,i,n)),
r},insert:function(e,n,i){var r=this._adding(e,n,i);return void 0!==r&&(t.splice.call(this,n,0,r),
this._added&&this._added(r,n,i)),r},_adding:function(e,t,n){return this._cast(e,t,n);
},_replacing:function(e,t,n){return this._cast(e,t,n)},_cast:function(e,t,n){return this.elemClass?this.elemClass.to(e,n):e;
},_addMany:function(e,n){var i=e===this,r=e.length;if(!r)return this.length;for(var o=this._added,a=0,s=i?0:this.length;r>a;){
var u=e[a],l=this._adding(u,s,n);if(void 0===l){if(i){this.splice(s,1),r--;continue;
}}else i?u!==l&&(this[s]=l):t.push.call(this,l),o&&o.call(this,l,s,n);s++,a++}return s;
},copyTo:function(e){t.push.apply(e,this)},toSpec:function(){return this.map(function(e){
return e.toSpec?e.toSpec():e})}})}),define("pentaho/lang/SortedList",["./List","./Base","../util/object"],function(e,t,n){
"use strict";var i=t.Array.prototype,r=0,o=1,a=2;return e.extend("pentaho.lang.SortedList",{
constructor:function(e){null!=e&&(null!=e.orderingMode&&(this.__orderingMode=+e.orderingMode),
"function"==typeof e.comparer&&(this.comparer=e.comparer)),this.base(e)},__comparer:function(e,t){
if(null==e||null==t)return null!=e?1:null!=t?-1:0;var n=e.valueOf(),i=t.valueOf();
return n===i?0:n>i?1:-1},__orderingMode:a,get orderingMode(){return this.__orderingMode;
},get comparer(){return this.__comparer},set comparer(e){var t=n.hasOwn(this,"__comparer");
(t&&this.__comparer!==e||!t&&null!=e)&&(null==e?delete this.__comparer:this.__comparer=e,
this.sort())},sort:function(e){if(null!=e&&e!==this.__comparer)throw new Error("Can't specify a different sorting function in a sorted list.");
this.base(this.__comparer)},search:function(e){for(var t=0,n=this.length-1;n>=t;){
var i=(t+n)/2|0,r=this.__comparer(this[i],e);if(0>r)t=i+1;else{if(!(r>0))return i;
n=i-1}}return~t},copyWithin:function(){throw new Error("Can't copy within a sorted list.");
},fill:function(){throw new Error("Can't fill a sorted list.")},reverse:function(){
throw new Error("Can't reverse a sorted list.")},unshift:function(){throw new Error("Can't do a indexed insert in a sorted list.");
},insert:function(){throw new Error("Can't do a indexed insert in a sorted list.");
},replace:function(){throw new Error("Can't do a indexed replace in a sorted list.");
},splice:function(){if(arguments.length>2)throw new Error("Can't do a indexed insert in a sorted list.");
this.base(arguments)},__insertInOrder:function(e,t){var r=this._adding(e,null,t);if(void 0!==r){
var s=this.search(r);if(0>s)s=~s;else switch(n.getOwn(t,"orderingMode",this.__orderingMode)){
case o:for(;s>0&&0===this.__comparer(this[s-1],r);)s--;break;case a:for(var u=this.length-1;u>s&&0===this.__comparer(r,this[s+1]);)s++;
s++}i.splice.call(this,s,0,r),this._added&&this._added(r,s,t)}return r},_addMany:function(e,t){
var n=e===this,i=e.length;if(!i)return this.length;var r=0;if(n){for(;i>r;){var o=e[r],a=this._adding(o,r,t);
void 0!==a?(o!==a&&(this[r]=a),this._added&&this._added(a,r,t),r++):(this.splice(r,1),
i--)}this.sort()}else for(;i>r;)this.__insertInOrder(e[r],t),r++;return i},add:function(e,t){
this.__insertInOrder(e,t)}},{OrderingMode:{Total:r,PartialInsertBefore:o,PartialInsertAfter:a
}})}),define("pentaho/lang/ArgumentError",["./Base"],function(e){"use strict";return e.Error.extend("pentaho.lang.ArgumentError",{
constructor:function(e,t){this.base(t),this.argument=e},name:"ArgumentError"})}),
define("pentaho/lang/ArgumentRequiredError",["./ArgumentError","../util/text"],function(e,t){
"use strict";return e.extend("pentaho.lang.ArgumentRequiredError",{constructor:function(e,n){
this.base(e,t.andSentence("Argument "+e+" is required.",n))},name:"ArgumentRequiredError"
})}),define("pentaho/lang/ArgumentInvalidError",["./ArgumentError","../util/text"],function(e,t){
"use strict";return e.extend("pentaho.lang.ArgumentInvalidError",{constructor:function(e,n){
this.base(e,t.andSentence("Argument "+e+" is invalid.",n))},name:"ArgumentInvalidError"
})}),define("pentaho/_core/module/MetaService",["../../lang/SortedList","../../lang/ArgumentRequiredError","../../lang/ArgumentInvalidError","../../util/object","../../util/fun","../../util/text"],function(e,t,n,i,r,o){
var a=1;return function(t){function s(){this.__moduleMap=Object.create(null)}function u(){
return new e({comparer:p})}function l(e,t){h(t,function(t){var n=t.instances;n.length>0&&e.addMany(n);
})}function c(e,t){h(t,function(n){n!==t&&e.add(n)})}function h(e,t){t(e);for(var n=e.subtypes,i=n.length;i--;)h(n[i],t);
}function d(e,t,i){var r=e.get(t);if(null!==r&&"type"!==r.kind)throw new n(i,"Expected module with id or alias '"+t+"' to be a type module.");
return r}function p(e,t){return r.compare(t.ranking,e.ranking)||r.compare(e.__index,t.__index);
}return s.prototype={__get:function(e){return i.getOwn(this.__moduleMap,e,null)},
configure:function(e){function r(e,t){if(!t)throw new n("moduleSpecMap","Module map contains an empty module identifier.");
if(!e)throw new n("moduleSpecMap","Module with id '"+t+"' provides no specification.");
var r=this.__get(t);if(null!==r)r.__configure(e);else{if(i.hasOwn(c,t))throw new n("moduleSpecMap","A module with the id or alias '"+t+"' is already being defined.");
e=Object.create(e),e.id=t,e.index=a++,h.push(t),c[t]=e;var s=o.nonEmptyString(e.alias);
if(null!==s&&s!==t){if(null!==this.__get(s)||i.hasOwn(c,s))throw new n("moduleSpecMap","Module with id '"+t+"' specifies an alias which is already taken: '"+s+"'.");
c[s]=e}}}function s(e,t){var r=l.__get(e);if(null===r){var o=i.getOwn(c,e,null);if(null===o)throw new n("moduleSpecMap","A module with id '"+e+"' is not defined.");
r=u(o)}if(t&&r.kind!==t)throw new n("moduleSpecMap","Expected module '"+r.id+"' to be "+("type"===t?"a ":"an ")+t);
return r}function u(e){var n;return n="ancestor"in e||"base"in e?new t.TypeModuleMeta(e.id,e,s):new t.InstanceModuleMeta(e.id,e,s),
l.__registerModule(n),n}if(null==e)return this;var l=this,c={},h=[];return i.eachOwn(e,r,this),
h.forEach(function(e){s(e)}),this},__registerModule:function(e){this.__moduleMap[e.id]=e,
null!==e.alias&&(this.__moduleMap[e.alias]=e)},get:function(e,r){var o=this.__get(e);
if(null===o)if(i.getOwn(r,"createIfUndefined",!1))o=new t.InstanceModuleMeta(e,{},null),
this.__registerModule(o);else if(i.getOwn(r,"assertDefined",!1))throw new n("idOrAlias","A module with id or alias '"+e+"' is not defined.");
return o},getId:function(e){var t=this.get(e);return t&&t.id},getInstancesOf:function(e){
var t=u(),n=d(this,e,"typeIdOrAlias");return null!==n&&l(t,n),t},getInstanceOf:function(e){
var t=this.getInstancesOf(e);return t.length>0?t[0]:null},getSubtypesOf:function(e){
var t=u(),n=d(this,e,"baseTypeIdOrAlias");return null!==n&&c(t,n),t},getSubtypeOf:function(e){
var t=this.getSubtypesOf(e);return t.length>0?t[0]:null}},s}}),define("pentaho/util/logger",[],function(){
"use strict";function e(e,t,n){if(t=t||"info","undefined"!=typeof console){if(console[t]||(t="log"),
n)try{return void console[t]("%c"+e,n)}catch(i){}console[t](e)}}var t={logLevels:["debug","log","info","warn","error"],
logLevel:"log",debug:function(t){e(t,"debug")},log:function(t){e(t,"log")},info:function(t){
e(t,"info")},warn:function(t){e(t,"warn")},error:function(t){e(t,"error")}};return t;
}),define("pentaho/lang/ArgumentInvalidTypeError",["./ArgumentError","../util/text"],function(e,t){
"use strict";return e.extend("pentaho.lang.ArgumentInvalidTypeError",{constructor:function(e,n,i){
var r="Expected type to be ";if(Array.isArray(n)||(n=[n]),n.length>1){var o=n.slice(),a=o.pop();
r+="one of "+o.join(", ")+" or "+a}else r+=n[0];r+=i?", but got "+i+".":".",this.base(e,t.andSentence("Argument "+e+" is invalid.",r)),
this.actualType=i||null,this.expectedTypes=n},name:"ArgumentInvalidTypeError"})}),
define("pentaho/lang/ArgumentRangeError",["./ArgumentError"],function(e){"use strict";
return e.extend("pentaho.lang.ArgumentRangeError",{constructor:function(e){this.base(e,"Argument "+e+" is out of range.");
},name:"ArgumentRangeError"})}),define("pentaho/lang/OperationInvalidError",["./Base","../util/text"],function(e,t){
"use strict";return e.Error.extend("pentaho.lang.OperationInvalidError",{constructor:function(e){
this.base(t.andSentence("Operation invalid.",e))},name:"OperationInvalidError"})}),
define("pentaho/lang/NotImplementedError",["./Base","../util/text"],function(e,t){
"use strict";return e.Error.extend("pentaho.lang.NotImplementedError",{constructor:function(e){
this.base(t.andSentence("Not Implemented.",e))},name:"NotImplementedError"})}),define("pentaho/util/error",["../lang/ArgumentRequiredError","../lang/ArgumentInvalidError","../lang/ArgumentInvalidTypeError","../lang/ArgumentRangeError","../lang/OperationInvalidError","../lang/NotImplementedError"],function(e,t,n,i,r,o){
"use strict";return{argRequired:function(t,n){return new e(t,n)},argInvalid:function(e,n){
return new t(e,n)},argInvalidType:function(e,t,i){return new n(e,t,i)},argRange:function(e){
return new i(e)},operInvalid:function(e){return new r(e)},notImplemented:function(e){
return new o(e)}}}),define("pentaho/util/arg",["./error"],function(e){"use strict";
var t=Array.prototype.slice;return{optional:function(e,t,n){var i;return e&&null!=(i=e[t])?i:n;
},defined:function(e,t,n){var i;return e&&void 0!==(i=e[t])?i:n},required:function(t,n,i){
var r;if(t&&null!=(r=t[n]))return r;throw e.argRequired((i?i+".":"")+n)},slice:function(n,i,r){
if(!n)throw e.argRequired("args");switch(arguments.length){case 1:return t.call(n);
case 2:return t.call(n,i)}return t.call(n,i,r)}}}),function(){"use strict";function e(e){
return"function"==typeof e||"object"==typeof e&&null!==e}function t(e){return"function"==typeof e;
}function n(e){return"object"==typeof e&&null!==e}function i(e,t){J[q]=e,J[q+1]=t,
q+=2,2===q&&N()}function r(){var e=process.nextTick,t=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
return Array.isArray(t)&&"0"===t[1]&&"10"===t[2]&&(e=setImmediate),function(){e(l);
}}function o(){return function(){k(l)}}function a(){var e=0,t=new W(l),n=document.createTextNode("");
return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function s(){var e=new MessageChannel;
return e.port1.onmessage=l,function(){e.port2.postMessage(0)}}function u(){return function(){
setTimeout(l,1)}}function l(){for(var e=0;q>e;e+=2){var t=J[e],n=J[e+1];t(n),J[e]=void 0,
J[e+1]=void 0}q=0}function c(){try{var e=require,t=e("vertx");return k=t.runOnLoop||t.runOnContext,
o()}catch(n){return u()}}function h(){}function d(){return new TypeError("You cannot resolve a promise with itself");
}function p(){return new TypeError("A promises callback cannot return that same promise.");
}function f(e){try{return e.then}catch(t){return X.error=t,X}}function _(e,t,n,i){
try{e.call(t,n,i)}catch(r){return r}}function g(e,t,n){z(function(e){var i=!1,r=_(n,t,function(n){
i||(i=!0,t!==n?v(e,n):C(e,n))},function(t){i||(i=!0,O(e,t))},"Settle: "+(e._label||" unknown promise"));
!i&&r&&(i=!0,O(e,r))},e)}function m(e,t){t._state===Y?C(e,t._result):t._state===Z?O(e,t._result):x(t,void 0,function(t){
v(e,t)},function(t){O(e,t)})}function y(e,n){if(n.constructor===e.constructor)m(e,n);else{
var i=f(n);i===X?O(e,X.error):void 0===i?C(e,n):t(i)?g(e,n,i):C(e,n)}}function v(t,n){
t===n?O(t,d()):e(n)?y(t,n):C(t,n)}function b(e){e._onerror&&e._onerror(e._result),
w(e)}function C(e,t){e._state===Q&&(e._result=t,e._state=Y,0!==e._subscribers.length&&z(w,e));
}function O(e,t){e._state===Q&&(e._state=Z,e._result=t,z(b,e))}function x(e,t,n,i){
var r=e._subscribers,o=r.length;e._onerror=null,r[o]=t,r[o+Y]=n,r[o+Z]=i,0===o&&e._state&&z(w,e);
}function w(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i,r,o=e._result,a=0;a<t.length;a+=3)i=t[a],
r=t[a+n],i?T(n,i,r,o):r(o);e._subscribers.length=0}}function A(){this.error=null}
function j(e,t){try{return e(t)}catch(n){return ee.error=n,ee}}function T(e,n,i,r){
var o,a,s,u,l=t(i);if(l){if(o=j(i,r),o===ee?(u=!0,a=o.error,o=null):s=!0,n===o)return void O(n,p());
}else o=r,s=!0;n._state!==Q||(l&&s?v(n,o):u?O(n,a):e===Y?C(n,o):e===Z&&O(n,o))}function S(e,t){
try{t(function(t){v(e,t)},function(t){O(e,t)})}catch(n){O(e,n)}}function I(e,t){var n=this;
n._instanceConstructor=e,n.promise=new e(h),n._validateInput(t)?(n._input=t,n.length=t.length,
n._remaining=t.length,n._init(),0===n.length?C(n.promise,n._result):(n.length=n.length||0,
n._enumerate(),0===n._remaining&&C(n.promise,n._result))):O(n.promise,n._validationError());
}function R(e){return new te(this,e).promise}function E(e){function t(e){v(r,e)}function n(e){
O(r,e)}var i=this,r=new i(h);if(!L(e))return O(r,new TypeError("You must pass an array to race.")),
r;for(var o=e.length,a=0;r._state===Q&&o>a;a++)x(i.resolve(e[a]),void 0,t,n);return r;
}function F(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(h);
return v(n,e),n}function M(e){var t=this,n=new t(h);return O(n,e),n}function $(){
throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
}function P(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}function B(e){this._id=ae++,this._state=void 0,this._result=void 0,this._subscribers=[],
h!==e&&(t(e)||$(),this instanceof B||P(),S(this,e))}function V(){var e;if("undefined"!=typeof global)e=global;else if("undefined"!=typeof self)e=self;else try{
e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment");
}var n=e.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(e.Promise=se);
}var D;D=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e);
};var k,N,L=D,q=0,z=({}.toString,i),K="undefined"!=typeof window?window:void 0,U=K||{},W=U.MutationObserver||U.WebKitMutationObserver,G="undefined"!=typeof process&&"[object process]"==={}.toString.call(process),H="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,J=new Array(1e3);
N=G?r():W?a():H?s():void 0===K&&"function"==typeof require?c():u();var Q=void 0,Y=1,Z=2,X=new A,ee=new A;
I.prototype._validateInput=function(e){return L(e)},I.prototype._validationError=function(){
return new Error("Array Methods must be provided an Array")},I.prototype._init=function(){
this._result=new Array(this.length)};var te=I;I.prototype._enumerate=function(){for(var e=this,t=e.length,n=e.promise,i=e._input,r=0;n._state===Q&&t>r;r++)e._eachEntry(i[r],r);
},I.prototype._eachEntry=function(e,t){var i=this,r=i._instanceConstructor;n(e)?e.constructor===r&&e._state!==Q?(e._onerror=null,
i._settledAt(e._state,t,e._result)):i._willSettleAt(r.resolve(e),t):(i._remaining--,
i._result[t]=e)},I.prototype._settledAt=function(e,t,n){var i=this,r=i.promise;r._state===Q&&(i._remaining--,
e===Z?O(r,n):i._result[t]=n),0===i._remaining&&C(r,i._result)},I.prototype._willSettleAt=function(e,t){
var n=this;x(e,void 0,function(e){n._settledAt(Y,t,e)},function(e){n._settledAt(Z,t,e);
})};var ne=R,ie=E,re=F,oe=M,ae=0,se=B;B.all=ne,B.race=ie,B.resolve=re,B.reject=oe,
B.prototype={constructor:B,then:function(e,t){var n=this,i=n._state;if(i===Y&&!e||i===Z&&!t)return this;
var r=new this.constructor(h),o=n._result;if(i){var a=arguments[i-1];z(function(){
T(i,r,a,o)})}else x(n,r,e,t);return r},"catch":function(e){return this.then(null,e);
}};var ue=V,le={Promise:se,polyfill:ue};"function"==typeof define&&define.amd?define("pentaho/shim/_es6-promise/es6-promise",[],function(){
return le}):"undefined"!=typeof module&&module.exports?module.exports=le:"undefined"!=typeof this&&(this.ES6Promise=le),
ue()}.call(this),define("pentaho/shim/es6-promise",["./_es6-promise/es6-promise"],function(e){
return e.polyfill(),Promise}),define("pentaho/util/promise",["./arg","./error","../shim/es6-promise"],function(e,t){
"use strict";return{wrapCall:function(e,n){if(!e)throw t.argRequired("fun");return new Promise(function(t){
t(e.call(n))})},require:function(n,i){if(null==n)throw t.argRequired("deps");var r=i||require;
return Array.isArray(n)?new Promise(function(t,i){r(n,function(){t(e.slice(arguments));
},i)}):new Promise(function(e,t){r([n],e,t)})},"finally":function(e,n,i){if(!e)throw t.argRequired("promise");
if(!n)throw t.argRequired("fun");return e.then(function(e){return n.call(i),e},function(e){
return n.call(i),Promise.reject(e)})},"return":function(e,t){return t?e:Promise.resolve(e);
},error:function(e,t){if(t)throw e;return Promise.reject(e)}}}),define("pentaho/module/util",["../util/requireJSConfig!","../util/object","../lang/OperationInvalidError"],function(e,t,n){
"use strict";function i(e){var n;if(null==e)n=o["*"]||null;else if(n=t.getOwn(o,e),
void 0===n){var i="";for(var r in o)"*"!==r&&0===e.indexOf(r)&&r.length>i.length&&(i=r);
0===i.length&&(i="*"),n=o[i]||null}return n}function r(e,n){var i=n;if(!t.hasOwn(e,n)){
var r="";for(var o in e)0===n.indexOf(o)&&o.length>r.length&&(r=o);if(0===r.length)return n;
i=r}var a=n.substring(i.length);if(a.length>0&&0!==a.indexOf("/"))return n;var s=e[i];
return s+a}var o=e.map||{},a={getBaseIdOf:function(e){return e&&e.replace(/.[^\/]+$/,"");
},getId:function(e){return e.undef?null:e("module").id},absolutizeIdRelativeToSibling:function(e,t){
return this.absolutizeId(e,this.getBaseIdOf(t))},absolutizeId:function(e,t){if(e&&/^\./.test(e)&&!/\.js$/.test(e)){
for(var i=t?t.split("/"):[],r=e.split("/"),o=!1;r.length;){var a=r[0];if("."===a)r.shift(),
o=!0;else{if(".."!==a)break;if(!i.pop())throw new n("Invalid path: '"+e+"'.");r.shift(),
o=!0}}if(o)return t=i.join("/"),e=r.join("/"),t&&e?t+"/"+e:t||e}return e},resolveModuleId:function(e,t){
if(-1!==e.indexOf("!")){var n=e.split("!",2);return a.resolveModuleId(n[0],t)+"!"+a.resolveModuleId(n[1],t);
}var o=a.absolutizeIdRelativeToSibling(e,t),s=i(t);return null!==s?r(s,o):o}};return a;
}),define("pentaho/_core/module/Meta",["require","module","../../lang/Base","../../debug","../../debug/Levels","../../util/logger","../../util/promise","../../util/text","../../util/fun","../../module/util"],function(e,t,n,i,r,o,a,s,u,l){
"use strict";return function(c){return n.extend("pentaho._core.module.Meta",{constructor:function(e,t,n){
this.id=e,this.__index=t.index||0,this.alias=s.nonEmptyString(t.alias),this.alias===e&&(this.alias=null),
this.ranking=+t.ranking||0,this.__value=void 0,this.__valuePromise=null,this._isLoaded=!1,
this.__config=void 0,this.__configPromise=null;var i=t.value;void 0!==i&&this.__defineAmdModuleAsync(i);
},__configure:function(e){"ranking"in e&&(this.ranking=+e.ranking||0)},resolveId:function(e){
return l.resolveModuleId(e,this.id)},get value(){return this.__value},get isLoaded(){
return this._isLoaded},loadAsync:function(){var n=this.__valuePromise;if(null===n){
if(this._isLoaded)n=Promise.resolve(this.__value);else{var s=this;n=a.require(this.id,e).then(function(e){
return s.__value=e,s._isLoaded=!0,i.testLevel(r.info,t)&&o.info("Loaded module '"+s.id+"'."),
e},function(e){return i.testLevel(r.error,t)&&o.error("Failed loading module '"+s.id+"'. Error: "+e),
Promise.reject(e)})}this.__valuePromise=n}return n},__defineAmdModuleAsync:function(e){
return u.is(e)?define(this.id,["pentaho/module!_"],e):define(this.id,u.constant(e)),
this.loadAsync()},get config(){return this.__config||null},get isConfigLoaded(){return void 0!==this.__config;
},loadConfigAsync:function(){var e=this.__configPromise;return null===e&&(this.__configPromise=e=c.configService.selectAsync(this.id).then(function(e){
return this.__config=e}.bind(this))),e}})}}),define("pentaho/_core/module/InstanceMeta",[],function(){
"use strict";return function(e){return e.ModuleMeta.extend("pentaho._core.module.InstanceMeta",{
get kind(){return"instance"},constructor:function(e,t,n){this.base(e,t,n);var i=t.type||null;
this.type=i&&n(i,"type"),i&&this.type.__addInstance(this)}})}}),define("pentaho/_core/module/TypeMeta",["../../util/object"],function(e){
"use strict";return function(t){return t.ModuleMeta.extend("pentaho._core.module.TypeMeta",{
constructor:function(e,t,n){this.base(e,t,n);var i=t.ancestor||t.base||null,r=null!==i?n(i,"type"):null;
this.ancestor=r,this.isAbstract=!!t.isAbstract,this.isAbstract&&(this._isLoaded=!0),
null!==r&&r.__addSubtype(this)},get kind(){return"type"},__subtypes:Object.freeze([]),
get subtypes(){return this.__subtypes},__addSubtype:function(t){var n=e.getOwn(this,"__subtypes",null);
null===n&&(this.__subtypes=n=[]),n.push(t)},__instances:Object.freeze([]),get instances(){
return this.__instances},__addInstance:function(t){var n=e.getOwn(this,"__instances",null);
null===n&&(this.__instances=n=[]),n.push(t)}})}}),define("pentaho/_core/module/Service",[],function(){
function e(e){this.__metaService=e}function t(e){if(e.length>0){var t=e.map(function(e){
return e.loadAsync()["catch"](function(){return i})});return Promise.all(t).then(function(e){
return e.filter(n)})}return Promise.resolve([])}function n(e){return e!==i}var i={};
return e.prototype={getInstancesOfAsync:function(e){try{var n=this.__metaService.getInstancesOf(e);
return t(n)}catch(i){return Promise.reject(i)}},getInstanceOfAsync:function(e){try{
var t=this.__metaService.getInstanceOf(e);return null!==t?t.loadAsync():Promise.resolve(void 0);
}catch(n){return Promise.reject(n)}},getSubtypesOfAsync:function(e){try{var n=this.__metaService.getSubtypesOf(e);
return t(n)}catch(i){return Promise.reject(i)}},getSubtypeOfAsync:function(e){try{
var t=this.__metaService.getSubtypeOf(e);return null!==t?t.loadAsync():Promise.resolve(void 0);
}catch(n){return Promise.reject(n)}}},e}),define("pentaho/util/spec",["./object","../lang/OperationInvalidError"],function(e,t){
"use strict";function n(t,n){for(var r in n)e.hasOwn(n,r)&&i(t,r,n[r]);return t}function i(n,i,r){
var o;u(r)&&((o=r.$op)?(r=r.value,("merge"===o&&!u(r)||"add"===o&&!Array.isArray(r))&&(o="replace")):o="merge");
var a=e.getOwn(l,o||"replace");if(!a)throw new t("Merge operation '"+o+"' is not defined.");
a(n,i,r)}function r(e,t,i){var r=e[t];u(r)?n(r,i):o(e,t,i)}function o(e,t,n){e[t]=s(n);
}function a(e,t,n){var i;if(Array.isArray(n)&&Array.isArray(i=e[t]))for(var r=-1,a=n.length;++r<a;)i.push(s(n[r]));else o(e,t,n);
}function s(t){if(t&&"object"==typeof t)if(t instanceof Array)t=t.map(s);else if(t.constructor===Object){
var n={};e.eachOwn(t,function(e,t){this[t]=s(e)},n),t=n}return t}function u(e){return!!e&&"object"==typeof e&&e.constructor===Object;
}var l={replace:o,merge:r,add:a};return{merge:n}}),define("pentaho/_core/config/Service",["require","module","../../lang/Base","../../lang/SortedList","../../lang/ArgumentRequiredError","../../util/spec","../../util/object","../../util/promise","../../util/fun","../../util/requireJSConfig!","../../module/util"],function(e,t,n,i,r,o,a,s,u,l,c){
"use strict";function h(e,t){return function(n){var i=t.map(function(e){return n[e];
});return e.apply(null,i)}}function d(e,t){var n=e.priority||0,i=t.priority||0;if(n!==i)return n>i?1:-1;
for(var r=e.select||{},o=t.select||{},a=0,s=f.length;a!==s;++a){var u=f[a],l=null!=r[u],c=null!=o[u];
if(l!==c)return l?1:-1}return e._ordinal>t._ordinal?1:-1}function p(e){var t=e.select;
if(t)for(var n=f.length;n--;){var i=f[n],r=t[i];if(null!=r){var o=this[i];if(Array.isArray(r)?-1===r.indexOf(o):r!==o)return!1;
}}return!0}var f=["user","theme","locale","application"];return function(f){function _(t){
var n=f.moduleMetaService.get(t);return null!==n?n.loadAsync():s.require(t,e)}var g=0,m=n.extend(t.id,{
constructor:function(e){this.__environment=e||{},this.__ruleStore=Object.create(null);
},add:function(e){if(e&&e.rules){var t=e.contextId||null;e.rules.forEach(function(e){
this.addRule(e,t)},this)}},addRule:function(e,t){e._ordinal=g++;var n=e.select||{},o=n.module||n.instance||n.type;
if(!o)throw new r("rule.select.module");Array.isArray(o)||(o=[o]);var a=e.deps;a&&a.forEach(function(e,n){
a[n]=c.resolveModuleId(e,t)}),o.forEach(function(n){if(!n)throw new r("rule.select.module");
n=c.resolveModuleId(n,t);var o=this.__ruleStore[n];o||(this.__ruleStore[n]=o=new i({
comparer:d})),o.push(e)},this)},selectAsync:function(e,t){var n=!(!t||!t.excludeGlobal),i=n?null:l.config[e]||null,r=a.getOwn(this.__ruleStore,e,null);
if(null===r)return Promise.resolve(i);var s=r.filter(p,this.__environment);if(0===s.length)return Promise.resolve(i);
var c=null,d=null,g=function(e){var t=f.moduleMetaService.getId(e)||e,n=a.getOwn(d,t,null);
return null===n&&(n=c.length,d[t]=n,c.push(_(t))),n},m=function(e){var t=u.is(e.apply),n=t?[]:null;
return e.deps&&(null===c&&(c=[],d=Object.create(null)),e.deps.forEach(function(e){
var i=g(e);t&&n.push(i)})),t?h(e.apply,n):u.constant(e.apply)},y=s.map(m);return null!==i&&y.unshift(u.constant(i)),
Promise.all(c||[]).then(function(e){return y.reduce(function(t,n){var i=n(e);return o.merge(t,i);
},{})})}});return m}}),define("pentaho/_core/Core",["require","module","./module/MetaService","./module/Meta","./module/InstanceMeta","./module/TypeMeta","./module/Service","./config/Service"],function(e,t,n,i,r,o,a,s){
"use strict";function u(e){this.environment=e}var l="pentaho/config/spec/IRuleSet",c="pentaho/modules",h=Object.freeze({
excludeGlobal:!0});return u.createAsync=function(e,t){function d(){var e=_.moduleMetaService.getInstancesOf(l);
return 0===e.length?Promise.resolve([]):(e=e.slice().sort(function(e,t){return e.id.localeCompare(t.id);
}),Promise.all(e.map(p)))}function p(e){return e.loadAsync().then(function(t){return t&&!t.contextId&&(t.contextId=e.id),
t},function(){return null})}function f(t){_.ConfigurationService=s(_);var n=_.configService=new _.ConfigurationService(e);
return t.forEach(function(e){null!==e&&n.add(e)}),n.selectAsync(c,h).then(function(e){
return null!==e&&_.moduleMetaService.configure(e),_})}var _=new u(e);_.ModuleMeta=i(_),
_.TypeModuleMeta=o(_),_.InstanceModuleMeta=r(_);var g=n(_);return _.moduleMetaService=new g,
_.moduleMetaService.configure(t),_.moduleService=new a(_.moduleMetaService),d().then(f);
},u}),define("pentaho/util/url",["./has"],function(e){"use strict";function t(t){
if(!t)return null;if(e("URL"))return new URL(t,document.location);var r=n(t)||n(t=i(t))||[t,"",null,"",null,t],o=r[1]||"",a=r[2]?r[2].slice(0,-1).split(":"):"",s=r[3]||"",u=r[4]?r[4].substring(1):"",l=r[5]||"";
return{href:t,protocol:o,username:a.length>0?a[0]:"",password:a.length>1?a[1]:"",
hostname:s,host:s+":"+u,port:u,origin:o+"//"+s+":"+u,pathname:l,toString:function(){
return t}}}function n(e){return/^\s*([^:\/?#]+:)\/\/([^@]*@)?([^:\/?#]*)(:\d*)?(\/[^?#]*)+/.exec(e);
}function i(e){var t=document.createElement("a");return t.href=e,t.href}return{create:t,
parse:n}}),define("pentaho/environment/impl/Environment",["pentaho/util/url"],function(e){
"use strict";function t(t,i){t||(t={}),this.application=n(t,"application",i),this.theme=n(t,"theme",i);
var r=n(t,"locale",i);this.locale=r&&r.toLowerCase();var o=n(t,"user"),a=n(i,"user");
this.user=Object.freeze({id:n(o,"id",a),home:n(o,"home",a)}),o=n(t,"server"),a=n(i,"server"),
this.server=Object.freeze({root:e.create(n(o,"root",a)),packages:e.create(n(o,"packages",a)),
services:e.create(n(o,"services",a))}),this.reservedChars=n(t,"reservedChars",i),
Object.freeze(this)}function n(e,t,n){return e&&e[t]||n&&n[t]||null}var i=t.prototype={
createChild:function(e){return new t(e,this.toSpec())},toSpec:function(){return{application:this.application,
theme:this.theme,locale:this.locale,user:{id:this.user.id,home:this.user.home},server:{
root:this.server.root&&this.server.root.href,packages:this.server.packages&&this.server.packages.href,
services:this.server.services&&this.server.services.href},reservedChars:this.reservedChars
}}};return i.toJSON=i.toSpec,t}),define("pentaho/environment/main",["pentaho/util/requireJSConfig!","./impl/Environment"],function(e,t){
"use strict";var n=e.config["pentaho/environment"]||null;return new t(n)}),define("pentaho/environment",["pentaho/environment/main"],function(e){
return e}),define("pentaho/_core/main",["./Core","pentaho/environment","pentaho/util/requireJSConfig!"],function(e,t,n){
var i=null;return{load:function(r,o,a,s){if(s.isBuild)a({moduleMetaService:{},moduleService:{}
});else{if(null===i){var u=n.config["pentaho/modules"]||null;i=e.createAsync(t,u);
}i.then(a,a.error)}}}}),define("pentaho/config/service",["../_core/main!"],function(e){
"use strict";return e.configService}),define("pentaho/module/service",["../_core/main!"],function(e){
"use strict";return e.moduleService}),define("pentaho/module/metaService",["../_core/main!"],function(e){
"use strict";return e.moduleMetaService}),define("pentaho/module/metaOf",["./metaService","./util","../shim/es6-promise"],function(e,t){
"use strict";var n="$_$_",i=/^\$_\$_/,r=0,o={createIfUndefined:!0};return{load:function(n,r,a,s){
if(s.isBuild)a();else{("_"===n||i.test(n))&&(n=null);var u=t.getId(r),l=n?t.absolutizeIdRelativeToSibling(n,u):u,c=e.get(l,o);
c.loadConfigAsync().then(function(){a(c)},a.error)}},normalize:function(e,t){return e&&"_"!==e?t(e):n+ ++r;
}}}),define("pentaho/module",["pentaho/module/metaOf"],function(e){return e}),define("pentaho/module/impl/ServicePlugin",["../service","../util","pentaho/shim/es6-promise"],function(e,t){
"use strict";function n(e){this._callModuleService=e}return n.prototype.load=function(n,i,r,o){
if(o.isBuild)r();else{var a=t.getId(i),s=t.absolutizeIdRelativeToSibling(n,a);this._callModuleService(e,s).then(r,r.error);
}},n}),define("pentaho/module/subtypeOf",["./impl/ServicePlugin"],function(e){"use strict";
return new e(function(e,t){return e.getSubtypeOfAsync(t)})}),define("pentaho/module/subtypesOf",["./impl/ServicePlugin"],function(e){
"use strict";return new e(function(e,t){return e.getSubtypesOfAsync(t)})}),define("pentaho/module/instanceOf",["./impl/ServicePlugin"],function(e){
"use strict";return new e(function(e,t){return e.getInstanceOfAsync(t)})}),define("pentaho/module/instancesOf",["./impl/ServicePlugin"],function(e){
"use strict";return new e(function(e,t){return e.getInstancesOfAsync(t)})}),define("pentaho/type/SpecificationContext",["module","pentaho/lang/Base","pentaho/util/object","pentaho/util/error"],function(e,t,n,i){
"use strict";var r=null,o="_:",a=/^_:/,s=t.extend(e.id,{constructor:function(){this.__typeInfosByUid={},
this.__typeInfosByTid={},this.__nextId=1},getIdOf:function(e){var t=e.id;if(!t){var i=n.getOwn(this.__typeInfosByUid,e.uid);
i&&(t=i.id)}return t},get:function(e){var t=n.getOwn(this.__typeInfosByTid,e);return t?t.type:null;
},add:function(e,t){var r=e.id;if(r)return r;var a=e.uid,s=n.getOwn(this.__typeInfosByUid,a);
if(s)return s.id;if(t){if(n.hasOwn(this.__typeInfosByTid,t))throw i.argInvalid("tid","The temporary id is already being used by another type.");
}else do t=o+this.__nextId++;while(n.hasOwn(this.__typeInfosByTid,t));return this.__typeInfosByUid[a]=this.__typeInfosByTid[t]={
type:e,id:t},t},dispose:function(){r===this&&(r=null)}},{get current(){return r},
set current(e){if(e&&!(e instanceof s))throw i.argInvalidType("current","pentaho.type.SpecificationContext",typeof e);
r=e||null},isIdTemporary:function(e){return!!e&&a.test(e)},get idTemporaryPrefix(){
return o}});return s}),define("pentaho/type/SpecificationScope",["module","./SpecificationContext","pentaho/lang/Base"],function(e,t,n){
"use strict";return n.extend(e.id,{constructor:function(e){var n=t.current,i=!1;e?t.current=e:(e=n)||(i=!0,
t.current=e=new t),this.__isOwn=i,this.__context=e,this.__previous=n},get specContext(){
return this.__context},dispose:function(){var e=this.__context;if(e){this.__context=null,
this.__isOwn&&e.dispose();var n=this.__previous;n&&(n!==e&&(t.current=n),this.__previous=null);
}}})}),define("pentaho/type/impl/SpecificationProcessor",["require","module","pentaho/lang/Base","pentaho/module/metaService","../SpecificationContext","pentaho/util/promise","pentaho/util/object"],function(e,t,n,i,r,o,a){
"use strict";return n.extend(t.id,{loadTypeDependenciesAsync:function(e){return this.__loadDependenciesAsync(e,!0);
},loadInstanceDependenciesAsync:function(e){return this.__loadDependenciesAsync(e,!1);
},__loadDependenciesAsync:function(t,n){function r(t){var n=i.getId(t)||t;a.hasOwn(u,n)||(u[n]=1,
s.push(o.require(n,e)))}if(null==t)return Promise.resolve(t);var s=[],u=Object.create(null);
return n?this.eachTypeDependency(t,r):this.eachInstanceDependency(t,r),Promise.all(s).then(function(){
return null})},eachTypeDependency:function(e,t){if(null!=e)switch(typeof e){case"string":
return void(r.isIdTemporary(e)||t(e));case"object":return Array.isArray(e)?void(e.length>0&&this.eachTypeDependency(e[0],t)):void(e.constructor===Object&&this.__eachTypeDependencyGeneric(e,t));
}},eachInstanceDependency:function(e,t){e&&"object"==typeof e&&(Array.isArray(e)?e.forEach(function(e){
this.eachInstanceDependency(e,t)},this):e.constructor===Object&&Object.keys(e).forEach(function(n){
"_"===n?this.eachTypeDependency(e[n],t):this.eachInstanceDependency(e[n],t)},this));
},__eachTypeDependencyGeneric:function(e,t){this.eachTypeDependency(e.base,t),this.eachTypeDependency(e.of,t);
var n=e.props;n&&(Array.isArray(n)?n.forEach(function(e){e&&(this.eachInstanceDependency(e.defaultValue,t),
this.eachTypeDependency(e.valueType,t),this.eachTypeDependency(e.base,t))},this):Object.keys(n).forEach(function(e){
var i=n[e];i&&(this.eachInstanceDependency(i.defaultValue,t),this.eachTypeDependency(i.valueType,t),
this.eachTypeDependency(i.base,t))},this));var i=e.mixins;i&&(Array.isArray(i)||(i=[i]),
i.forEach(function(e){"string"==typeof e&&this.eachTypeDependency(e,t)},this))}});
}),define("pentaho/type/impl/Loader",["require","module","pentaho/lang/Base","../SpecificationScope","../SpecificationContext","./SpecificationProcessor","pentaho/module/metaService","pentaho/module/util","pentaho/util/object","pentaho/util/promise","pentaho/util/error","pentaho/util/fun"],function(e,t,n,i,r,o,a,s,u,l,c,h){
"use strict";function d(t){return u.hasOwn(R,t)?R[t]:R[t]=e(t)}function p(e,t,n){
if(null==e||""===e)return l.error(c.argRequired("typeRef"),n);switch(typeof e){case"string":
return f(e,n);case"function":return g(e,n);case"object":return Array.isArray(e)?y(e,n):v(e,t,n);
}return l.error(c.argInvalid("typeRef"),n)}function f(t,n){if(r.isIdTemporary(t)){
var i=r.current;if(!i)return l.error(c.argInvalid("typeRef","Temporary id '"+t+"' occurs outside of a generic type specification."),n);
var o=i.get(t);return o?l["return"](o.instance.constructor,n):l.error(c.argInvalid("typeRef","Temporary id '"+t+"' is not defined."),n);
}return t=a.getId(t)||t,n?_(t,n,e(t)):l.require(t,e).then(_.bind(null,t,n))}function _(e,t,n){
return h.is(n)&&m(n)?l["return"](n,t):l.error(c.operInvalid("typeRef","The value of module '"+e+"' is not a '"+A+"' constructor."),t);
}function g(e,t){return m(e)?l["return"](e,t):l.error(c.argInvalid("typeRef","Function is not a '"+A+"' constructor."),t);
}function m(e){var t=d(A);return e===t||e.prototype instanceof t}function y(e,t){
var n;return 1===e.length&&(n=e[0])?C({base:I,of:n},null,t):l.error(c.argInvalid("typeRef","List type specification must have a single child element type spec."),t);
}function v(e,t,n){return e.constructor===Object?C(e,t,n):b(e,n)}function b(e,t){
var n=d(A);return e instanceof n.Type?l["return"](e.instance.constructor,t):e instanceof n?l.error(c.argInvalid("typeRef","Instances are not supported as type references."),t):l.error(c.argInvalid("typeRef","Object is not a 'pentaho.type.Type' instance or a plain object."),t);
}function C(e,t,n){var i=e.id||null;if(null!==i){if(!r.isIdTemporary(i))return l.error(c.argInvalid("typeRef","Generic type specifications cannot have a permanent id."),n);
var o=r.current;if(null!==o&&null!==o.get(i))return l.error(c.argInvalid("typeRef","Temporary id '"+i+"' is already defined."),n);
}return n?O(i,e,t):E.loadTypeDependenciesAsync(e).then(function(){return O(i,e,t);
})}function O(e,t,n){return u.using(new i,function(i){var r=t.base||n||w,o=F.__resolveTypeSync(r),a=o.extend({
$type:t});return null!==e&&i.specContext.add(a.type,e),a})}var x="pentaho/type/",w=x+"Complex",A=x+"Instance",j=x+"String",T=x+"Boolean",S=x+"Number",I=x+"List",R=Object.create(null),E=new o,F=n.extend(t.id,{
resolveType:function(e,t){return F.__resolveTypeSync(e,u.getOwn(t,"defaultBase"));
},resolveTypeAsync:function(e,t){return F.__resolveTypeAsync(e,u.getOwn(t,"defaultBase"));
},resolveInstance:function(e,t,n){return F.__resolveInstanceSync(e,t,n)},resolveInstanceAsync:function(e,t,n){
return E.loadInstanceDependenciesAsync(e).then(function(){return F.__resolveInstanceSync(e,t,n);
})}},{__resolveTypeSync:function(e,t){return p(e,t,!0)},__resolveTypeAsync:function(e,t){
try{return p(e,t,!1)}catch(n){return Promise.reject(n)}},__resolveInstanceSync:function(e,t,n){
var i,r=null;if(null!=e&&"object"==typeof e&&e.constructor===Object&&(i=e._)){r=F.__resolveTypeSync(i);
var o=r.type;null!=n&&n.__assertSubtype(o),o.isAbstract&&o.__throwAbstractType()}else if(null==n||n.isAbstract){
switch(typeof e){case"string":r=d(j);break;case"number":r=d(S);break;case"boolean":
r=d(T)}if(null===r||null==n||r.type.isSubtypeOf(n)||(r=null),null===r){if(null==n)throw c.operInvalid("Cannot create instance of unspecified type.");
n.__throwAbstractType()}}else r=n.instance.constructor;return new r(e,t)}});return F;
}),define("pentaho/type/_baseLoader",["./impl/Loader"],function(e){"use strict";return new e;
}),define("pentaho/type/InstanceType",["require","./_baseLoader","./SpecificationScope","./SpecificationContext","pentaho/i18n!types","pentaho/module/metaService","pentaho/lang/Base","pentaho/util/error","pentaho/util/arg","pentaho/util/object","pentaho/util/fun","pentaho/util/promise","pentaho/util/text","pentaho/util/spec","pentaho/module/util","./theme/model"],function(e,t,n,i,r,o,a,s,u,l,c,h,d,p,f){
"use strict";function _(e,t,n){return null==e?e=n:t&&(e=t.call(this,e,n),null==e&&(e=n)),
e}function g(e,t,n){return function(i,r){var o=e.apply(this,arguments);return _.call(i,o,t,n);
}}var m=1,y=["description","category","helpUrl","isBrowsable","isAdvanced","ordinal"],v=Object.prototype.isPrototypeOf,b=null,C=a.extend("pentaho.type.Type",{
extend_order:["mixins"],constructor:function(e,t){e||(e={}),l.setConst(this,"uid",m++);
var n=u.required(t,"instance","keyArgs");l.setConst(n,"__type",this),l.setConst(this,"__instance",n),
u.optional(t,"isRoot")&&l.setConst(this,"root",this);var r=d.nonEmptyString(e.id);
null!==r&&i.isIdTemporary(r)&&(r=null);var a=d.nonEmptyString(e.sourceId);null===a?a=r:null===r&&(r=a);
var c=d.nonEmptyString(e.alias);if(null===c){if(null!==r){var h=o.get(r);null!==h&&(c=h.alias);
}}else if(null===r)throw s.argInvalid("alias","Anonymous types cannot have an alias");
l.setConst(this,"__id",r),l.setConst(this,"__sourceId",a),l.setConst(this,"__alias",c),
l.setConst(this,"__isAbstract",!!e.isAbstract),e.mixins&&(this.mixins=e.mixins,e=Object.create(e),
e.mixins=void 0),e=this._init(e,t)||e;var p=this.constructor;p.prototype===this?p.mix(e,null,t):this.extend(e,t),
this._postInit(e,t)},_init:function(e,t){Object.defineProperty(this,"__hasDescendants",{
value:!1,writable:!0}),"styleClass"in e||(this.styleClass=void 0),this.__application=p.merge({},this.__application);
},_postInit:function(e,t){},uid:-1,get isRoot(){return this===this.root},get ancestor(){
return this.isRoot?null:Object.getPrototypeOf(this)},get hasDescendants(){return this.__hasDescendants;
},get instance(){return this.__instance},set instance(e){e&&this.instance.extend(e);
},get isValue(){return!1},get isProperty(){return!1},get isContainer(){return!1},
get isList(){return!1},get isElement(){return!1},get isComplex(){return!1},get isSimple(){
return!1},get isContinuous(){return!1},get elementType(){return this},__id:null,get id(){
return this.__id},__sourceId:null,get sourceId(){return this.__sourceId},get shortId(){
return this.__alias||this.__id},buildSourceRelativeId:function(e){return f.absolutizeIdRelativeToSibling(e,this.sourceId);
},__alias:null,get alias(){return this.__alias},__isAbstract:!0,get isAbstract(){
return this.__isAbstract},get mixins(){var e=this.instance.constructor;if(e){var t=e.mixins;
if(t)return t.map(function(e){return e.type}).filter(function(e){return e instanceof C;
})}return[]},set mixins(e){function n(e){var n=t.resolveType(e);i.mix(n)}if(e){var i=this.instance.constructor;
Array.isArray(e)?e.forEach(n,this):n.call(this,e)}},__label:"instance",__labelIsSet:!1,
get label(){return this.__label},set label(e){e=d.nonEmptyString(e),null===e?(this.__labelIsSet=!1,
this!==b&&(e=d.nonEmptyString(this._getLabelDefault()),null==e?delete this.__label:this.__label=e)):(this.__labelIsSet=!0,
this.__label=e)},_getLabelDefault:function(){return void 0},get _isLabelSet(){return l.getOwn(this,"__labelIsSet")===!0;
},__application:{},get application(){return this.__application},set application(e){
p.merge(this.__application,e)},__description:null,get description(){return this.__description;
},set description(e){void 0===e?this!==b&&delete this.__description:this.__description=d.nonEmptyString(e);
},__category:null,get category(){return this.__category},set category(e){void 0===e?this!==b&&delete this.__category:this.__category=d.nonEmptyString(e);
},__helpUrl:null,get helpUrl(){return this.__helpUrl},set helpUrl(e){void 0===e?this!==b&&delete this.__helpUrl:this.__helpUrl=d.nonEmptyString(e);
},__isBrowsable:!0,get isBrowsable(){return this.__isBrowsable},set isBrowsable(e){
null==e?this!==b&&delete this.__isBrowsable:this.__isBrowsable=!!e},__isAdvanced:!1,
get isAdvanced(){return this.__isAdvanced},set isAdvanced(e){null==e?this!==b&&delete this.__isAdvanced:this.__isAdvanced=!!e;
},__styleClass:null,__styleClassIsSet:void 0,get styleClass(){return this.__styleClass;
},set styleClass(e){void 0===e?(this.__styleClass=this.__id?d.toSnakeCase(this.__id):null,
this.__styleClassIsSet=!1):(this.__styleClass=""===e?null:e,this.__styleClassIsSet=!0);
},get inheritedStyleClasses(){var e,t=this.__styleClass,n=this!==b?Object.getPrototypeOf(this):null;
return n?(e=n.inheritedStyleClasses,t&&(e=e.concat(t))):e=t?[t]:[],e},__ordinal:0,
get ordinal(){return this.__ordinal},set ordinal(e){null==e?this!==b&&delete this.__ordinal:this.__ordinal=Math.floor(+e||0);
},__defaultView:null,get defaultView(){return this.__defaultView&&this.__defaultView.value;
},set defaultView(e){var t;void 0===e?this!==b&&delete this.__defaultView:e?(t=l.getOwn(this,"__defaultView"),
(!t||t.value!==e&&t.fullValue!==e)&&(this.__defaultView={value:e,fullValue:this.buildSourceRelativeId(e)
})):this.__defaultView=null},get defaultViewAbs(){var e=this.__defaultView;return e?e.fullValue:null;
},create:function(e,n){return t.resolveInstance(e,n,this)},createAsync:function(e,n){
return t.resolveInstanceAsync(e,n,this)},__assertSubtype:function(e){if(!e.isSubtypeOf(this))throw s.operInvalid(r.format(r.structured.errors.instance.notOfExpectedBaseType,[this]));
return e},__throwAbstractType:function(){throw s.operInvalid(r.format(r.structured.errors.instance.cannotCreateInstanceOfAbstractType,[this]));
},_assertNoSubtypesAttribute:function(e){if(this.hasDescendants)throw s.operInvalid(r.get("errors.attributeLockedWhenTypeHasSubtypes",[e]));
},is:function(e){return v.call(this.instance,e)},isSubtypeOf:function(e){return!!e&&(e===this||v.call(e,this));
},to:function(e,t){return null==e?null:this.is(e)?e:this.create(e,t)},toSpec:function(e){
var t=this.id;return null!==t?e&&e.noAlias?t:this.shortId:l.using(new n,this.toSpecInContext.bind(this,e||{}));
},toSpecInContext:function(e){var t=this.id;return null!==t?e&&e.noAlias?t:this.shortId:(t=i.current.getIdOf(this),
null!==t?t:this._toSpecInContextCore(e||{}))},_toSpecInContextCore:function(e){var t=i.current.add(this),n={
id:t};return this._fillSpecInContext(n,e),n},toJSON:function(){return this.toSpec({
isJson:!0})},_fillSpecInContext:function(e,t){var n=!1,i=t.isJson;this.isAbstract&&(n=!0,
e.isAbstract=!0),this._isLabelSet&&(n=!0,e.label=this.__label);var r=this.mixins;r.length&&(n=!0,
e.mixins=r.map(function(e){return e.shortId})),y.forEach(function(t){var i="__"+t;
l.hasOwn(this,i)&&(n=!0,e[t]=this[i])},this);var o=this.__styleClass;o&&this.__styleClassIsSet&&(n=!0,
e.styleClass=o);var a=l.getOwn(this,"__defaultView");if(void 0!==a){var s=a&&a.value;
s&&i&&c.is(s)||(n=!0,e.defaultView=s)}return this.__fillSpecInContextDynamicAttributes(e,t)&&(n=!0),
n},toString:function(){return this.id||this.label},__dynamicAttrInfos:null,set dynamicAttributes(e){
Object.keys(e).forEach(function(t){this.__defineDynamicAttribute(t,e[t])},this)},
__defineDynamicAttribute:function(e,t){var n=t.cast,i=t.combine,r="__"+e,o=r+"On",a=this,s=l.getOwn(a,"__dynamicAttrInfos");
s||(s=a.__dynamicAttrInfos=[]),s.push({name:e,spec:t});var u;!function(){u=t.value;
var e;c.is(u)?(e=u,u=null,n&&(e=g.call(a,e,n,u))):(u=_.call(a,u,n,null),e=c.constant(u)),
a[r]=u,a[o]=e}(),Object.defineProperty(a,e,{get:function(){return l.getOwn(this,r);
},set:function(t){if(this!==a&&(this._assertNoSubtypesAttribute(e),null!=t)){var s;
if(c.is(t))s=t,n&&(s=g.call(this,s,n,u));else{if(t=_.call(this,t,n,null),null==t)return;
s=c.constant(t)}this[r]=t,this[o]=i(this[o],s)}}}),a[e+"On"]=function(e,t){return this[o].call(e,this,t);
}},__fillSpecInContextDynamicAttributes:function(e,t){function n(o){if(o){o!==b&&n(Object.getPrototypeOf(o));
var a=l.getOwn(o,"__dynamicAttrInfos");a&&a.forEach(function(n){r.__fillSpecInContextDynamicAttribute(e,n.name,n.spec.group,n.spec.localName,n.spec.toSpec,t)&&(i=!0);
})}}var i=!1,r=this;return n(r),i},__fillSpecInContextDynamicAttribute:function(e,t,n,i,r,o){
var a="__"+t,s=!1,u=l.getOwn(this,a);if(null!=u){var h;if(c.is(u)?o.isJson||(s=!0,
h=u.valueOf()):(s=!0,h=r?r.call(this,u,o):u),s){var d;d=n?e[n]||(e[n]={}):e,d[i||t]=h;
}}return s}},{_subclassed:function(e,t,n,i){l.setConst(this.prototype,"__hasDescendants",!0);
var r=i.instance.constructor;e._initInstCtor(r,t,i),n&&e.implementStatic(n)},_initInstCtor:function(e,t,n){
l.setConst(e,"Type",this),this.call(this.prototype,t,n||{instance:e.prototype})}});
return b=C.prototype,C}),define("pentaho/type/Instance",["pentaho/module!_","./InstanceType","./SpecificationScope","pentaho/i18n!types","pentaho/lang/Base","pentaho/util/error","pentaho/util/object"],function(e,t,n,i,r,o,a){
"use strict";var s=r.extend("pentaho.type.Instance",{constructor:function(){},extend_exclude:{
_:1},__type:null,get $type(){return this.__type},set $type(e){e&&this.__type.extend(e);
},toSpec:function(e){return a.using(new n,this.toSpecInContext.bind(this,e||{}))},
toSpecInContext:function(e){throw o.notImplemented()},toJSON:function(){return this.toSpec({
isJson:!0})}},{get type(){return this.prototype.$type},_extend:function(e,t,n,i){
var r;return null==e&&(r=t&&t.$type)&&(e=r.sourceId||r.id||null,e&&(e=e.toString())),
this.base(e,t,n,i)},_subclassed:function(e,t,n,i){var r=e.name||e.displayName,o=r&&r+".Type",a=i?Object.create(i):{};
a.instance=e.prototype,this.Type.extend(o,t&&t.$type,n&&n.$type,a),a=i?Object.create(i):{},
(a.exclude||(a.exclude={})).$type=1,this.base(e,t,n,a)},localize:function(e){return this.implement(e);
},configure:function(e){return this.implement(e)}});return t._initInstCtor(s,{id:e.id
}),s.localize({$type:i.structured.Instance}),s}),define("pentaho/type/changes/_transactionControl",[],function(){
"use strict";function e(e){var n=t;n!==e&&(n&&n.__exitingAmbient(),t=e,e&&e.__enteringAmbient());
}var t=null,n=[];return{get current(){return t},get currentScope(){var e=n;return e.length?e[e.length-1]:null;
},exitCurrent:function(){var e=t;t=null;for(var i=n,r=i.length;r--;){var o=i[r];if(o.transaction===e&&(i.splice(r,1),
o.__exitLocal(),o.isRoot))break}},enterScope:function(t){n.push(t),e(t.transaction);
},exitScope:function(){n.pop();var t=this.currentScope;e(t&&t.transaction)}}}),define("pentaho/type/ReferenceList",["module","pentaho/lang/Base"],function(e,t){
"use strict";return t.Array.extend(e.id,{constructor:function(){},add:function(e,t){
var n=this.length;return this.push({container:e,property:t||null}),this.length>n},
remove:function(e,t){t||(t=null);for(var n=this.length;n--;){var i=this[n];if(i.container===e&&i.property===t)return this.splice(n,1),
!0}return!1}})}),define("pentaho/type/changes/ChangeRef",["module","../ReferenceList","pentaho/lang/Base"],function(e,t,n){
"use strict";return n.extend(e.id,{constructor:function(e){this.owner=e,this.__refsAdd=null,
this.__refsRem=null,this.__refsCache=void 0},addReference:function(e,n){(null!==this.__refsRem&&this.__refsRem.remove(e,n)||(this.__refsAdd||(this.__refsAdd=t.to([]))).add(e,n))&&(this.__refsCache=void 0);
},removeReference:function(e,n){(null!==this.__refsAdd&&this.__refsAdd.remove(e,n)||(this.__refsRem||(this.__refsRem=t.to([]))).add(e,n))&&(this.__refsCache=void 0);
},get projectedReferences(){var e=this.__refsCache;return void 0===e&&(this.__refsCache=e=this.__updateReferences(this.owner.__refs,!1)),
e},apply:function(){var e=this.__refsCache;void 0===e?this.owner.__refs=this.__updateReferences(this.owner.__refs,!0):this.owner.__refs=e;
},__updateReferences:function(e,n){var i=this.__refsRem,r=this.__refsAdd;if(i||r){
e?n||(e=t.to(e.slice())):e=t.to([]);var o,a,s;if(i)for(o=-1,a=i.length;++o<a;)s=i[o],
e.remove(s.container,s.property);if(r)for(o=-1,a=r.length;++o<a;)s=r[o],e.add(s.container,s.property);
}return e}})}),define("pentaho/type/changes/AbstractTransactionScope",["module","./_transactionControl","pentaho/lang/Base","pentaho/util/object","pentaho/util/error","pentaho/util/logger"],function(e,t,n,i,r,o){
"use strict";return n.extend(e.id,{constructor:function(e){i.setConst(this,"transaction",e||null),
i.setConst(this,"isRoot",!!e&&!e.__scopeCount),this.__isInside=!0,e&&e.__scopeEnter(),
t.enterScope(this)},_assertInsideAndCurrent:function(){if(!this.__isInside)throw this.__getErrorNotInside();
if(!this.isCurrent)throw this.__getErrorNotCurrent()},__getErrorNotInside:function(){
return r.operInvalid("Scope has been exited from.")},__getErrorNotCurrent:function(){
return r.operInvalid("Scope is not the current scope.")},get isInside(){return this.__isInside;
},get isCurrent(){return this.__isInside&&this===t.currentScope},using:function(e,t){
try{return e.call(t,this)}finally{this.exit()}},exit:function(e){if(!i.getOwn(e,"sloppy",!1)){
var t=this.__isInside?this.isCurrent?null:this.__getErrorNotCurrent():this.__getErrorNotInside();
t&&o.warn(t.message)}return this.__isInside&&this.__exit(),this},__exit:function(){
this.__exitLocal(),this.transaction&&this.transaction.__scopeExit(),t.exitScope();
},__exitLocal:function(){this.__isInside=!1},dispose:function(){this.exit({sloppy:!0
})}})}),define("pentaho/type/changes/TransactionScope",["module","./AbstractTransactionScope"],function(e,t){
"use strict";return t.extend(e.id,{get canCommit(){return this.isRoot&&this.isCurrent&&this.transaction.isProposed;
},acceptWill:function(){return this._assertInsideAndCurrent(),this.transaction.__commitWill();
},accept:function(){return this._assertInsideAndCurrent(),this.canCommit?this.transaction.__commit():this.exit(),
this},reject:function(e){this._assertInsideAndCurrent(),this.transaction.__reject(e);
},using:function(e,t){var n;try{n=e.call(t,this)}catch(i){if(!this.isCurrent)throw i;
this.reject(i)}finally{this.dispose()}var r=this.transaction.result;if(r&&r.error)throw r.error;
return n}})}),define("pentaho/type/changes/CommittedScope",["module","./AbstractTransactionScope"],function(e,t){
"use strict";return t.extend(e.id,{constructor:function(){this.base(null)}})}),define("pentaho/lang/UserError",["./Base"],function(e){
"use strict";return e.Error.extend("pentaho.lang.UserError",{get name(){return"UserError";
}})}),define("pentaho/type/changes/TransactionRejectedError",["module","pentaho/lang/UserError","pentaho/util/object"],function(e,t,n){
"use strict";return t.extend(e.id,{constructor:function(e){this.base("Transaction was rejected"),
n.setConst(this,"reason",e)},get name(){return"TransactionRejectedError"}})}),define("pentaho/lang/ActionResult",["./Base","./UserError","../util/error"],function(e,t,n){
"use strict";var i=e.extend("pentaho.lang.ActionResult",{constructor:function(e,i){
if(i){if("string"==typeof i)i=new t(i);else if(!(i instanceof Error))throw n.argInvalidType("error",["string","Error"],typeof i);
this.__value=void 0,this.__error=i}else this.__value=e,this.__error=null},get value(){
return this.__value},get error(){return this.__error},get isCanceled(){var e=this.__error;
return null!=e&&e instanceof t},get isFailed(){var e=this.__error;return null!=e&&!(e instanceof t);
},get isFulfilled(){return!this.__error},get isRejected(){return!!this.__error}},{
fulfill:function(e){return new i(e)},reject:function(e){return new i(void 0,e||new Error("failed"));
}});return i}),define("pentaho/type/changes/Transaction",["module","./_transactionControl","./ChangeRef","./TransactionScope","./CommittedScope","./TransactionRejectedError","pentaho/lang/Base","pentaho/lang/ActionResult","pentaho/lang/SortedList","pentaho/util/object","pentaho/util/error"],function(e,t,n,i,r,o,a,s,u,l,c){
"use strict";function h(e,t){return t._netOrder-e._netOrder}function d(){return++_;
}function p(e){return e.isCanceled}var f=[],_=1,g=a.extend(e.id,{constructor:function(){
this.__csetByUid={},this.__csets=[],this.__crefByUid={},this.__crefs=[],this.__commitLockTaken=!1,
this.__resultWill=null,this.__result=null,this.__isCurrent=!1,this.__commitWillQueue=null,
this.__commitWillQueueSet=null,this.__commitWillChangeset=null,this.__commitWillRanSet=null,
this.__scopeCount=0,this.__version=0},__takeNextVersion:function(){return++this.__version;
},get version(){return this.__version},get isProposed(){return!this.__result},get isReadOnly(){
return!(!this.__result&&!this.__resultWill)},get result(){return this.__result},getChangeset:function(e){
return l.getOwn(this.__csetByUid,e,null)},__ensureChangeRef:function(e){var t=e.$uid,i=l.getOwn(this.__crefByUid,t);
return i||(this.__crefByUid[t]=i=new n(e),this.__crefs.push(i)),i},__getChangeRef:function(e){
return l.getOwn(this.__crefByUid,e,null)},getAmbientReferences:function(e){var t=l.getOwn(this.__crefByUid,e.$uid,null);
return t&&t.projectedReferences||e.__refs},ensureChangeset:function(e){return l.getOwn(this.__csetByUid,e.$uid)||this.__createChangeset(e);
},__createChangeset:function(e){if(this.isReadOnly)throw c.operInvalid("Transaction cannot change because it has already been previewed, committed or rejected.");
var t=e._createChangeset(this);this.__csetByUid[e.$uid]=t,this.__csets.push(t),this.__isCurrent&&(e.__cset=t);
var n=this.getAmbientReferences(e);return null!==n&&n.forEach(function(e){this.ensureChangeset(e.container).__onChildChangesetCreated(t,e.property);
},this),t},__eachChangeset:function(e){for(var t=this.__csets,n=t.length,i=-1;++i<n;)e.call(this,t[i]);
},get isCurrent(){return this.__isCurrent},enter:function(){return new i(this)},__scopeEnter:function(){
if(this.__result)throw c.operInvalid("The transaction is resolved.");if(!this.__scopeCount)for(var e,t=this.__csets,n=t.length,i=-1;++i<n;)if(e=t[i],
e.ownerVersion!==e.owner.$version)throw this.__reject(new o("Concurrency error."));
this.__scopeCount++},__scopeExit:function(){this.__scopeCount--},__enteringAmbient:function(){
this.__eachChangeset(function(e){e.owner.__cset=e}),this.__isCurrent=!0},__exitingAmbient:function(){
this.__isCurrent=!1,this.__eachChangeset(function(e){e.owner.__cset=null})},__acquireCommitLock:function(){
this.__assertCommitLockFree(),this.__commitLockTaken=!0},__assertCommitLockFree:function(){
if(this.__commitLockTaken)throw c.operInvalid("Already in the __commit or __commitWill methods.");
},__releaseCommitLock:function(){this.__commitLockTaken=!1},__reject:function(e){
throw this.__assertCommitLockFree(),this.__resolve(s.reject(e||"Transaction canceled."));
},__commitWill:function(){var e=this.__result||this.__resultWill;return e||(this.__acquireCommitLock(),
e=this.__doCommitWill(),this.__releaseCommitLock()),e},__doCommitWill:function(){
var e=this.__resultWill=this.__doCommitWillCore();return this.__eachChangeset(function(e){
e.__setReadOnlyInternal()}),e},__doCommitWillCore:function(){if(0===this.version)return s.fulfill();
if(this.__initCommitWillQueue())for(var e,t,n,i=this.__commitWillQueue,r=this.__commitWillQueueSet,o=Object.create(null),a={
isCanceled:p,interceptor:function(i,r,a,s){if(null===n&&(n=o[t.$uid]||(o[t.$uid]=[])),
(n[s]||0)<e.transactionVersion)try{i.apply(r,a)}finally{a[0].isCanceled||(n[s]=e.transactionVersion);
}}};void 0!==(e=i.shift());){t=e.owner,delete r[t.$uid],this.__commitWillRanSet[t.$uid]=!0,
this.__commitWillChangeset=e,n=null;var u=t._onChangeWill(e,a);if(null!=u)return this.__finalizeCommitWillQueue(),
s.reject(u);this.__addParentsToCommitWillQueue(t)}return this.__finalizeCommitWillQueue(),
s.fulfill()},__initCommitWillQueue:function(){function e(e){var i=!1;!n&&e.owner._hasListeners("will:change")&&(n=!0),
e.eachChildChangeset(function(){return i=!0,!1}),i||t.__addToCommitWillQueue(e)}var t=this;
this.__commitWillQueue=new u({comparer:h}),this.__commitWillQueueSet=Object.create(null),
this.__commitWillRanSet=Object.create(null),this.__commitWillChangeset=null;var n=!1;
return this.__csets.forEach(e),n},__finalizeCommitWillQueue:function(){this.__commitWillQueue=this.__commitWillQueueSet=this.__commitWillChangeset=this.__commitWillRanSet=null;
},__addParentsToCommitWillQueue:function(e){var t=this.getAmbientReferences(e);if(null!==t)for(var n=t.length,i=-1;++i<n;){
var r=t[i].container.__cset;null!==r&&this.__addToCommitWillQueue(r,!0)}},__addToCommitWillQueue:function(e,t){
var n=e.owner.$uid;this.__commitWillQueueSet[n]||!t&&this.__commitWillRanSet[n]||(this.__commitWillQueue.push(e),
this.__commitWillQueueSet[n]=!0)},__onChangesetLocalVersionChangeDid:function(e){
this.__commitWillChangeset!==e&&null!==this.__commitWillQueue&&this.__addToCommitWillQueue(e);
},__onChangesetNetOrderChangeWill:function(e){var t=this.__commitWillQueue;if(null!==t&&this.__commitWillQueueSet[e.owner.$uid]){
var n=t.search(e);if(n>=0)return t.splice(n,1),this.__onChangesetNetOrderChangeDid.bind(this,e);
}return null},__onChangesetNetOrderChangeDid:function(e){this.__commitWillQueue.push(e);
},__commit:function(){this.__acquireCommitLock();var e=this.__resultWill;if(e||(e=this.__doCommitWill()),
e.isFulfilled&&(e=this.__applyChanges()),this.__releaseCommitLock(),this.__resolve(e),
e.error)throw e.error;return e},__applyChanges:function(){var e=d();return this.__crefs.forEach(function(e){
e.apply()}),this.__eachChangeset(function(t){t._applyInternal(e)}),s.fulfill(e)},
__resolve:function(e){this.__result=e,this.__resultWill=null,this.__scopeCount&&(this.__scopeCount=0,
this.__exitingAmbient(),t.exitCurrent());var n=e.error,i=n?function(e){e.owner._onChangeRejected(e,n);
}:function(e){e.owner._onChangeDid(e)};f.push(this),g.enterCommitted().using(this.__eachChangeset.bind(this,i));
var r=f.pop();if(r!==this)throw c.operInvalid("Unbalanced transaction exit commit did.");
return n}},{get current(){return t.current},enter:function(){var e=t.current||new g;
return e.enter()},enterCommitted:function(){return new r},getChangesetsPending:function(e){
var t=null,n=f.length;if(n>0)for(var i=-1,r=e.$uid;++i<n;){var o=f[i],a=o.getChangeset(r);
null!==a&&(t||(t=[])).push(a)}return t}});return g}),define("pentaho/type/util",["pentaho/util/object"],function(e){
"use strict";function t(e){return Array.isArray(e)?e:[e]}return{__getFirstRefContainer:function(e){
var t=e.$references;return t&&t.length?t[0].container:null},__getFirstRefProperty:function(e){
var t=e.$references;return t&&t.length?t[0].property:null},normalizeErrors:function(e){
return e?t(e):null},combineErrors:function(e,n){return n&&(e?Array.isArray(n)?e.push.apply(e,n):e.push(n):e=t(n)),
e||null},fillSpecMethodInContext:function(t,n,i){var r,o=!1;return e.hasOwn(n,i)&&(r=n[i])&&(o=!0,
t[i]=r.valueOf()),o}}}),define("pentaho/type/ValidationError",["module","pentaho/lang/UserError"],function(e,t){
"use strict";return t.extend(e.id,{get name(){return"ValidationError"}})}),define("pentaho/type/Value",["pentaho/module!_","./Instance","./changes/Transaction","./util","./ValidationError","./SpecificationContext","pentaho/util/object","pentaho/util/arg","pentaho/util/error","pentaho/i18n!types"],function(e,t,n,i,r,o,a,s,u,l){
"use strict";var c="pentaho/type/Complex",h=t.extend({get $key(){return this.toString();
},equals:function(e){return this===e||null!=e&&this.constructor===e.constructor&&this._equals(e);
},_equals:function(e){return this.$key===e.$key},equalsContent:function(e){return!1;
},get $isValid(){return null==this.validate()},validate:function(){return null},assertValid:function(){
var e=this.validate();if(null!=e)throw e[0]},configure:function(e){null!=e&&e!==this&&n.enter().using(function(t){
this._configure(e),t.accept()},this)},_configure:function(e){if(this.$type.isReadOnly)throw new TypeError("Type '"+this.$type.id+"' is read-only.");
},$type:{id:e.id,isAbstract:!0,get isValue(){return!0},get isEntity(){return!1},get isReadOnly(){
return!1},areEqual:function(e,t){return null==e||null==t?null==e&&null==t:e.equals(t);
},areEqualContent:function(e,t){return this.areEqual(e,t)&&e.equalsContent(t)},areEqualContentElements:function(e,t){
var n=!0;return e.each(function(e,i){var r=t.at(i);return this.areEqualContent(e,r)?void 0:(n=!1,
!1)},this),n},normalizeInstanceSpec:function(e){return null!=e?this._normalizeInstanceSpec(e):null;
},_normalizeInstanceSpec:function(e){return e},hasNormalizedInstanceSpecKeyData:function(e){
return!1},_toSpecInContextCore:function(e){var t=o.current.add(this),n={id:t},i=Object.getPrototypeOf(this);
return i.id!==c&&(n.base=i.toSpecInContext(e)),this._fillSpecInContext(n,e),n}}},{},{
isRoot:!0}).localize({$type:l.structured.Value}).configure({$type:e.config});return h;
}),define("pentaho/type/Element",["pentaho/module!_","./Value","./changes/Transaction","./_baseLoader","pentaho/i18n!types","pentaho/util/object","pentaho/util/error","pentaho/util/fun"],function(e,t,n,i,r,o,a,s){
"use strict";function u(e,t){return e._?i.resolveInstance(e):t.create(e)}function l(e){
return i.resolveInstance(e)}var c=null,h=t.extend({compare:function(e){return null==e?1:e===this||this.constructor!==e.constructor||this._equals(e)?0:this._compare(e);
},_compare:function(e){return s.compare(this.$key,e.$key)},configureOrCreate:function(e){
if(null==e||e===this)return this;var t;return n.enter().using(function(n){t=this._configureOrCreate(e),
n.accept()},this),t},_configureOrCreate:function(e){var n=this.$type;if(e instanceof t){
var r=n.isEntity?this.equals(e):this.constructor===e.constructor;if(!r)return e;if(n.isReadOnly)return this.equalsContent(e)?this:e;
}else{if(e=n._normalizeInstanceSpec(e),e._&&i.resolveType(e._).type!==n)return l(e);
var o;if(n.isEntity&&n.hasNormalizedInstanceSpecKeyData(e)&&(o=u(e,n),!this.equals(o)))return o;
if(n.isReadOnly)return o=n.createLike(this,e),this.equalsContent(o)?this:o}return this._configure(e),
this},$type:{id:e.id,isAbstract:!0,get isElement(){return!0},__format:void 0,get format(){
return this.__format},set format(e){null==e?this!==c&&delete this.__format:this.__format=e||{};
},compareElements:function(e,t){return null==e?null==t?0:-1:e.compare(t)},__intersect:function(e,t){
var n={};o.eachOwn(e,function(e){n[e.$key]=e});for(var i=this.isSimple,r=[],a={},s=-1,u=t.length;++s<u;){
var l=t[s],c=l.$key,h=o.getOwn(n,c);if(h&&!o.hasOwn(a,c)){var d=!i||l.formatted?l:h;
a[c]=d,r.push(d)}}return r},createLike:function(e,t){var n=e.toSpec();return o.eachOwn(t,function(e,t){
void 0!==e&&(n[t]=e)}),e.$type.create(n)}}}).localize({$type:r.structured.Element
}).configure({$type:e.config});return c=h.type,h}),define("pentaho/lang/Event",["./Base","../util/object","../util/error","./UserError"],function(e,t,n,i){
"use strict";return e.extend("pentaho.lang.Event",{constructor:function(e,t,i){if(!e)throw n.argRequired("type");
if(!t)throw n.argRequired("source");this.__type=e,this.__source=t,this.__cancelable=!!i;
},__cancelReason:null,__isCanceled:!1,get type(){return this.__type},get source(){
return this.__source},get isCancelable(){return this.__cancelable},get cancelReason(){
return this.__cancelReason},cancel:function(e){if(this.__cancelable&&!this.__isCanceled){
if(e||(e="canceled"),"string"==typeof e)e=new i(e);else if(!(e instanceof Error))throw n.argInvalidType("reason",["string","Error"],typeof e);
this.__cancelReason=e,this.__isCanceled=!0}},get isCanceled(){return this.__isCanceled;
},clone:function(){var e=Object.getPrototypeOf(this),n=Object.create(e);for(var i in this)if(this.hasOwnProperty(i)){
var r=t.getPropertyDescriptor(this,i);Object.defineProperty(n,i,r)}return n}})}),
define("pentaho/lang/EventSource",["module","./Base","./Event","../module/metaService","../util/error","../util/object","../util/fun","../util/logger"],function(e,t,n,i,r,o,a,s){
"use strict";function u(e){this.dispose=e}function l(e){var t=this.__observersRegistry||(this.__observersRegistry={});
return t[e]||(t[e]=c())}function c(){var e=[];return e.emittingLevel=0,e}function h(e,t,n,r){
var o=i.get(e);null!==o&&(e=o.id);for(var a,s=l.call(this,e,!0),c=s.length;c--&&(a=s[c]).priority>=n;)a.index=c+1;
return c++,s.emittingLevel&&(this.__observersRegistry[e]=s=s.slice(),s.emittingLevel=0),
a={index:c,priority:n,observer:t,isCritical:r},s.splice(c,0,a),new u(d.bind(this,e,a));
}function d(e,t){var n=this.__observersRegistry[e],i=t.index;n.emittingLevel&&(this.__observersRegistry[e]=n=n.slice(),
n.emittingLevel=0),n.splice(i,1);var r=n.length;if(r)for(;r>i;)n[i].index=i,i++;else delete this.__observersRegistry[e];
}function p(e){for(var t=0,n=e.length;t!==n;++t)e[t].dispose()}function f(e,t){var n=o.getOwn(this.__observersRegistry,e);
if(n)for(var i=-1,r=n.length;++i<r;)if(n[i].observer.__===t)return n[i];return null;
}function _(e,t){var n=o.getOwn(this.__observersRegistry,e);if(n)for(var i=-1,r=n.length;++i<r;)if(n[i].observer===t)return n[i];
return null}function g(e){return e instanceof Array?e:e.indexOf(",")>-1?e.split(/\s*,\s*/):[e];
}function m(e){return e.isCanceled}function y(e,t,n,i){var r=n+("__"!==i?":"+i:""),o=e?" Error: "+e.message:"";
s.log("Event listener of '"+r+"' failed."+o)}var v=Object.prototype.hasOwnProperty,b={
isCanceled:m,errorHandler:null},C={isCanceled:m,errorHandler:y};return u.prototype.remove=function(){
this.dispose()},t.extend(e.id,{__observersRegistry:null,on:function(e,t,n){if(!e)throw r.argRequired("type");
if(!t)throw r.argRequired("observer");var i=g(e);if(i&&i.length){var o=n&&n.priority||0,s=!(!n||!n.isCritical);
a.is(t)&&(t={__:t});var l=i.map(function(e){return h.call(this,e,t,o,s)},this);return l.length>1?new u(p.bind(this,l)):l[0];
}return null},off:function(e,t){if(!e)throw r.argRequired("typeOrHandle");if(e instanceof u)return void e.dispose();
if(!t)throw r.argRequired("observer");var n=g(e);if(n&&n.length){var o=a.is(t)?f:_;
n.forEach(function(e){var n=i.get(e);null!==n&&(e=n.id);var r=o.call(this,e,t);r&&d.call(this,e,r);
},this)}},_hasListeners:function(e,t){var n=i.get(e);null!==n&&(e=n.id);var r=o.getOwn(this.__observersRegistry,e,null);
if(null!==r){if(!t)return!0;for(var a=-1,s=r.length;++a<s;)if(v.call(r[a].observer,t))return!0;
}return!1},_emit:function(e){if(!e)throw r.argRequired("event");if(!(e instanceof n))throw r.argInvalidType("event","pentaho.type.Event");
return this._emitGeneric(this,[e],e.type,null,b)?e:null},_emitSafe:function(e){if(!e)throw r.argRequired("event");
if(!(e instanceof n))throw r.argInvalidType("event","pentaho.type.Event");return this._emitGeneric(this,[e],e.type,null,C)?e:null;
},_emitGeneric:function(e,t,n,a,s){if(!e)throw r.argRequired("source");if(!t)throw r.argRequired("eventArgs");
if(!n)throw r.argRequired("type");var u;if((u=s&&s.isCanceled)&&u.apply(e,t))return!1;
var l=i.get(n);null!==l&&(n=l.id);var c;if(null===(c=o.getOwn(this.__observersRegistry,n,null)))return!0;
var h;a&&"__"!==a?h=a:(a=null,h="__");var d=s&&s.errorHandler;void 0===d&&(d=y);var p=s&&s.interceptor||null;
c.emittingLevel++;try{var f,_=c.length;if(d){for(;_--;)if(f=c[_].observer[h]){try{
null===p?f.apply(e,t):p(f,e,t,_)}catch(g){if(c[_].isCritical)throw g;d.call(e,g,t,n,a);
}if(u&&u.apply(e,t))return!1}}else for(;_--;)if((f=c[_].observer[h])&&(null===p?f.apply(e,t):p(f,e,t,_),
u&&u.apply(e,t)))return!1}finally{c.emittingLevel--}return!0},_emitGenericAllAsync:function(e,t,n,a,s){
function u(i){var r=new Promise(function(n){n(i.apply(e,t))});return null!==f&&(r=r["catch"](function(i){
return f.call(e,i,t,n,a)})),null!=l&&(r=r.then(function(){return l.apply(e,t)?null!=c?Promise.reject(c.apply(e,t)):Promise.reject():void 0;
})),r}if(!e)throw r.argRequired("source");if(!t)throw r.argRequired("eventArgs");if(!n)throw r.argRequired("type");
var l=s&&s.isCanceled,c=s&&s.getCancellationReason;if(l&&l.apply(e,t))return null!=c?Promise.reject(c.apply(e,t)):Promise.reject();
var h=i.get(n);null!==h&&(n=h.id);var d;if(null===(d=o.getOwn(this.__observersRegistry,n,null)))return Promise.resolve();
var p;a&&"__"!==a?p=a:(a=null,p="__");var f=s&&s.errorHandler;void 0===f&&(f=y),d.emittingLevel++;
for(var _,g=[],m=d.length;m--;)null!=(_=d[m].observer[p])&&g.push(u(_));return d.emittingLevel--,
Promise.all(g).then(function(){})}})}),define("pentaho/type/mixins/changeset",["pentaho/util/error"],function(e){
"use strict";return{_initChangeset:function(t){if(!t)throw e.argRequired("changeset");
this.__cset=t},get changeset(){return this.__cset}}}),define("pentaho/type/events/WillChange",["module","pentaho/lang/Event","../mixins/changeset"],function(e,t,n){
"use strict";return t.extend(e.id,{constructor:function(e,t){this.base("will:change",e,!0),
this._initChangeset(t)}}).implement(n)}),define("pentaho/type/mixins/error",["pentaho/util/error"],function(e){
"use strict";return{_initError:function(t){if(!t)throw e.argRequired("error");this.__error=t;
},get error(){return this.__error}}}),define("pentaho/type/events/RejectedChange",["module","pentaho/lang/Event","../mixins/changeset","../mixins/error"],function(e,t,n,i){
"use strict";return t.extend(e.id,{constructor:function(e,t,n){this.base("rejected:change",e,!1),
this._initChangeset(t),this._initError(n)}}).implement(n).implement(i)}),define("pentaho/type/events/DidChange",["module","pentaho/lang/Event","../mixins/changeset"],function(e,t,n){
"use strict";return t.extend(e.id,{constructor:function(e,t){this.base("did:change",e,!1),
this._initChangeset(t)}}).implement(n)}),define("pentaho/type/mixins/Container",["module","pentaho/lang/Base","pentaho/lang/EventSource","../ReferenceList","../changes/Transaction","../events/WillChange","../events/RejectedChange","../events/DidChange","pentaho/util/object"],function(e,t,n,i,r,o,a,s,u){
"use strict";var l=1;return t.extend(e.id,{_initContainer:function(){u.setConst(this,"$uid",String(l++)),
this.__version=0,this.__cset=null,this.__refs=null},clone:function(){var e=Object.create(Object.getPrototypeOf(this));
return this._initClone(e),e},_initClone:function(e){e._initContainer()},get $references(){
var e=r.current;return null!==e?e.getAmbientReferences(this):this.__refs},__addReference:function(e,t){
(this.__refs||(this.__refs=i.to([]))).add(e,t)},get $version(){return this.__version;
},__setVersionInternal:function(e){this.__version=e},get $changeset(){return this.__cset;
},get $hasChanges(){return!!this.__cset&&this.__cset.hasChanges},__usingChangeset:function(e){
var t=this.__cset;if(t)return e.call(this,t);var n=r.enter();return n.using(function(){
t=n.transaction.ensureChangeset(this);var i=e.call(this,t);return n.accept(),i},this);
},_onChangeWill:function(e,t){if(this._hasListeners("will:change")){var n=new o(this,e);
try{var i=null==t?this._emitSafe(n):this._emitGeneric(this,[n],n.type,null,t);if(!i)return n.cancelReason;
}catch(r){return n.cancel(r),n.cancelReason}}return null},_onChangeDid:function(e){
this._hasListeners("did:change")&&this._emitSafe(new s(this,e))},_onChangeRejected:function(e,t){
this._hasListeners("rejected:change")&&this._emitSafe(new a(this,e,t))}}).implement(n);
}),define("pentaho/type/changes/Change",["module","pentaho/lang/Base"],function(e,t){
"use strict";return t.extend(e.id,{constructor:function(){}})}),define("pentaho/type/changes/Changeset",["module","./Change","pentaho/util/error","pentaho/util/object"],function(e,t,n,i){
"use strict";return t.extend(e.id,{constructor:function(e,t){if(!e)throw n.argRequired("transaction");
if(!t)throw n.argRequired("owner");i.setConst(this,"transaction",e),i.setConst(this,"owner",t),
this.__isReadOnly=!1,this.__ownerVersion=t.$version,this._netOrder=0,this.__txnVersion=this.__txnVersionLocal=e.version,
this.__txnVersionDirty=!1},__updateNetOrder:function(e){if(this._netOrder<e){this.__setNetOrder(e);
var t=e+1;this.eachChildChangeset(function(e){e.__updateNetOrder(t)})}},_resetNetOrder:function(){
this.__setNetOrder(this.__calculateNetOrder()),this.eachChildChangeset(function(e){
e.__resetNetOrder()})},__setNetOrder:function(e){var t=this._netOrder;if(t!==e){var n=this.transaction.__onChangesetNetOrderChangeWill(this);
this._netOrder=e,null!==n&&n()}},__calculateNetOrder:function(){var e=0,t=this.transaction,n=t.getAmbientReferences(this.owner);
if(null!==n)for(var i=n.length;i--;){var r=n[i].container.__cset;null!==r&&r._netOrder>=e&&(e=r._netOrder);
}return e+1},_assertWritable:function(){if(this.isReadOnly)throw n.operInvalid("Changeset is read-only.");
},get isReadOnly(){return this.__isReadOnly},__setReadOnlyInternal:function(){this.__isReadOnly=!0;
},get ownerVersion(){return this.__ownerVersion},get transactionVersionLocal(){return this.__txnVersionLocal;
},get transactionVersion(){return this.__txnVersionDirty&&(this.__txnVersion=this.__calcCleanTransactionVersion(),
this.__txnVersionDirty=!1),this.__txnVersion},__calcCleanTransactionVersion:function(){
var e=this.__txnVersionLocal;return this.eachChildChangeset(function(t){var n=t.transactionVersion;
n>e&&(e=n)}),e},_setTransactionVersion:function(e,t){e>this.__txnVersion&&(this.__txnVersion=e,
this.__txnVersionDirty=!1,this.__notifyParentsTxnVersionDirty(t))},_setTransactionVersionLocal:function(e,t){
e>this.__txnVersionLocal&&(this.__txnVersionLocal=e,this._setTransactionVersion(e,t),
this.transaction.__onChangesetLocalVersionChangeDid(this))},__notifyParentsTxnVersionDirty:function(e){
var t=this.transaction.getAmbientReferences(this.owner);if(null!==t)for(var n=t.length,i=-1;++i<n;){
var r=t[i].container.__cset;r!==e&&r.__onChildTxnVersionDirty()}},__onChildTxnVersionDirty:function(){
this.__txnVersionDirty||(this.__txnVersionDirty=!0,this.__notifyParentsTxnVersionDirty(null));
},clearChanges:function(){this._assertWritable(),this._clearChangesRecursive(null);
},_clearChangesRecursive:function(e){var t=null!=e?e.transactionVersion:this.transaction.__takeNextVersion();
this._setTransactionVersionLocal(t,e),this._clearChanges()},_applyInternal:function(e){
var t=this.owner;this._apply(t),t.__setVersionInternal(e)}})}),define("pentaho/type/changes/PrimitiveChange",["module","./Change"],function(e,t){
"use strict";return t.extend(e.id,{get transactionVersion(){return this.__txnVersion;
},_setTransactionVersion:function(e){this.__txnVersion=e},_prepare:function(e){},
_cancel:function(e){}})}),define("pentaho/type/changes/Add",["module","./PrimitiveChange"],function(e,t){
"use strict";return t.extend(e.id,{constructor:function(e,t){this.element=e,this.index=t;
},get type(){return"add"},_prepare:function(e){var t=this.element;t.__addReference&&!e.owner.$isBoundary&&e.__addComplexElement(t);
},_cancel:function(e){var t=this.element;t.__addReference&&!e.owner.$isBoundary&&e.__removeComplexElement(t);
},_apply:function(e){var t=this.element;e.__elems.splice(this.index,0,t),e.__keys[t.$key]=t;
}})}),define("pentaho/type/changes/Remove",["module","./PrimitiveChange"],function(e,t){
"use strict";return t.extend(e.id,{constructor:function(e,t){this.elements=e,this.index=t;
},get type(){return"remove"},_prepare:function(e){var t=e.owner;if(!t.$isBoundary&&!t.$type.elementType.isSimple)for(var n=-1,i=this.elements,r=i.length;++n<r;)i[n].__addReference&&e.__removeComplexElement(i[n]);
},_cancel:function(e){var t=e.owner;if(!t.$isBoundary&&!t.$type.elementType.isSimple)for(var n=-1,i=this.elements,r=i.length;++n<r;)i[n].__addReference&&e.__addComplexElement(i[n]);
},_apply:function(e){var t=this.elements;e.__elems.splice(this.index,t.length),t.forEach(function(t){
delete e.__keys[t.$key]})}})}),define("pentaho/type/changes/Move",["module","./PrimitiveChange"],function(e,t){
"use strict";return t.extend(e.id,{constructor:function(e,t,n){this.element=e,this.indexOld=t,
this.indexNew=n},get type(){return"move"},_apply:function(e){e.__elems.splice(this.indexNew,0,e.__elems.splice(this.indexOld,1)[0]);
}})}),define("pentaho/type/changes/Sort",["module","./PrimitiveChange"],function(e,t){
"use strict";return t.extend(e.id,{constructor:function(e){this.comparer=e},get type(){
return"sort"},_apply:function(e){e.__elems.sort(this.comparer)}})}),define("pentaho/type/changes/Clear",["module","./PrimitiveChange"],function(e,t){
"use strict";return t.extend(e.id,{get type(){return"clear"},_prepare:function(e){
var t=e.owner;if(!t.$isBoundary&&!t.$type.elementType.isSimple)for(var n=-1,i=t.__elems,r=i.length;++n<r;)i[n].__addReference&&e.__removeComplexElement(i[n]);
},_cancel:function(e){var t=e.owner;if(!t.$isBoundary&&!t.$type.elementType.isSimple)for(var n=-1,i=t.__elems,r=i.length;++n<r;)i[n].__addReference&&e.__addComplexElement(i[n]);
},_apply:function(e){e.__elems=[],e.__keys={}}})}),define("pentaho/type/changes/ListChangeset",["module","./Changeset","./Add","./Remove","./Move","./Sort","./Clear","pentaho/util/arg","pentaho/util/object"],function(e,t,n,i,r,o,a,s,u){
"use strict";return t.extend(e.id,{constructor:function(e,t){this.base(e,t),this.__changesetByKey=Object.create(null),
this.__primitiveChanges=[],this.__projMock=null,this.__lastClearIndex=-1},get type(){
return"list"},get changes(){return this.__primitiveChanges},get hasChanges(){if(this.__primitiveChanges.length>0)return!0;
var e=this.__changesetByKey;for(var t in e)if(u.hasOwn(e,t)&&e[t].hasChanges)return!0;
return!1},getChange:function(e){return u.getOwn(this.__changesetByKey,e)||null},_clearChanges:function(){
this.__primitiveChanges.forEach(function(e){e._cancel(this)},this);var e=this.__changesetByKey;
for(var t in e)u.hasOwn(e,t)&&e[t]._clearChangesRecursive(this);this.__primitiveChanges=[],
this.__projMock=null,this.__lastClearIndex=-1},__addComplexElement:function(e){this.transaction.__ensureChangeRef(e).addReference(this.owner);
var t=e.__cset;null!==t&&(this.__changesetByKey[e.$key]=t,t.__updateNetOrder(this._netOrder+1));
},__removeComplexElement:function(e){this.transaction.__ensureChangeRef(e).removeReference(this.owner);
var t=e.__cset;null!==t&&(delete this.__changesetByKey[e.$key],t._resetNetOrder());
},eachChildChangeset:function(e,t){var n=this.__changesetByKey;for(var i in n)if(u.hasOwn(n,i)&&e.call(t,n[i])===!1)return;
},__onChildChangesetCreated:function(e,t){this.__changesetByKey[e.owner.$key]=e,this._setTransactionVersion(e.transactionVersion),
e.__updateNetOrder(this._netOrder+1)},get __projectedMock(){var e=this.__primitiveChanges.length;
if(0===e)return this.owner;var t=this.__projMock||(this.__projMock=this.owner._cloneElementData({
changeCount:0},!0));return t.changeCount<e&&(this.__applyFrom(t,t.changeCount),t.changeCount=e),
t},_apply:function(e){if(e===this.owner&&this.__projMock){var t=this.__projectedMock;
this.__projMock=null,e.__elems=t.__elems,e.__keys=t.__keys}else this.__applyFrom(e,0);
},__applyFrom:function(e,t){for(var n=this.__primitiveChanges,i=n.length,r=Math.max(this.__lastClearIndex,t);i>r;)n[r++]._apply(e);
},__set:function(e,t,o,a,s,l){this._assertWritable();var c,h,d,p=this.__projectedMock,f=p.__elems,_=p.__keys,g=this.owner.$type.elementType,m=this.owner.$isReadOnly,y=this.owner.__needReadOnlyElementValidation;
l=null==l?f.length:0>l?Math.max(0,f.length+l):Math.min(l,f.length);for(var v=Array.isArray(e)?e.map(g.to,g):[g.to(e)],b={},C=[],O=[],x=-1,w=v.length;++x<w;)if(null!=(h=v[x]))if(d=h.$key,
c=u.getOwn(_,d))if(o&&c!==h){b[d]=2;var A=c.configureOrCreate(h);A!==c&&t&&a&&(b[d]=4,
O.push({value:A,to:O.length}))}else b[d]=1;else t&&!u.hasOwn(b,d)?(b[d]=3,O.push({
value:h,to:O.length})):(v.splice(x,1),--w,--x);var j,T=0;for(x=-1,w=f.length;++x<w;)h=f[x],
d=h.$key,u.hasOwn(b,d)&&4!==b[d]?(null==j&&(j=x-T),C.push(d)):a?(l>x&&--l,m&&this.owner.__assertEditable(),
this.__addChange(new i([h],x-T)),++T):C.push(d);if(null==j&&O.length>0&&(j=l),t)for(x=-1,
w=O.length;++x<w;){var S=O[x],I=l+S.to;if(m&&this.owner.__assertEditable(),y&&!S.value.$type.isReadOnly)throw new TypeError("List requires elements of a read-only type.");
this.__addChange(new n(S.value,I)),C.splice(I,0,S.value.$key)}var R=0;if(s)for(x=-1,
w=v.length;++x<w;)if(null!=(h=v[x])){var E=C.indexOf(h.$key);if(j>E&&--j,j+x>E||R>E){
var F=Math.max(j+x,R);m&&this.owner.__assertEditable(),this.__addChange(new r([h],E,F)),
C.splice(F,0,C.splice(E,1)[0]),E=F}R=E}},__remove:function(e){this._assertWritable();
for(var t,n,r=this.__projectedMock,o=this.owner.$type.elementType,a=r.__elems,s=r.__keys,l=Array.isArray(e)?e.map(o.to,o):[o.to(e)],c={},h=[],d=-1,p=l.length;++d<p;)(t=l[d])&&(n=t.$key,
!u.hasOwn(c,n)&&u.hasOwn(s,n)&&(c[n]=1,h.push({value:t,from:a.indexOf(t)})));if(p=h.length){
this.owner.__assertEditable(),h.sort(function(e,t){return t.from-e.from});var f,_;
d=0;do{var g=h[d];f&&g.from===_-1||(f&&this.__addChange(new i(f,_)),f=[]),f.unshift(g.value),
_=g.from}while(++d<p);f&&this.__addChange(new i(f,_))}},__removeAt:function(e,t){
if(this._assertWritable(),!(0>t)){var n=this.__projectedMock;null==t&&(t=1);var r=n.__elems.length;
if(!(e>=r)){0>e&&(e=Math.max(0,r+e)),this.owner.__assertEditable();var o=n.__elems.slice(e,e+t);
this.__addChange(new i(o,e))}}},__move:function(e,t){this._assertWritable();var n=this.owner,i=n.__cast(e),o=n.get(i.$key);
if(o){var a=n.indexOf(o),s=this.__projectedMock.__elems.length;t=0>t?Math.max(0,s+t):Math.min(t,s),
a!==t&&(this.owner.__assertEditable(),this.__addChange(new r(i,a,t)))}},__sort:function(e){
this._assertWritable(),this.owner.__assertEditable(),this.__addChange(new o(e))},
__clear:function(){this._assertWritable(),0!==this.owner.count&&(this.owner.__assertEditable(),
this.__lastClearIndex=this.__primitiveChanges.length,this.__addChange(new a))},__addChange:function(e){
this.__primitiveChanges.push(e),e._prepare(this);var t=this.transaction.__takeNextVersion();
e._setTransactionVersion(t),this._setTransactionVersionLocal(t)}})}),define("pentaho/type/List",["pentaho/module!_","./Value","./Element","./mixins/Container","./changes/ListChangeset","./util","./SpecificationContext","./_baseLoader","pentaho/i18n!types","pentaho/util/arg","pentaho/util/error","pentaho/util/object"],function(e,t,n,i,r,o,a,s,u,l,c,h){
"use strict";var d,p=t.extend({constructor:function(e,t){if(this._initContainer(),
this.__elems=[],this.__keys={},t&&(t.isBoundary&&(this.__isBoundary=!0),t.isReadOnly&&(this.__isReadOnly=!0),
t.needReadOnlyElementValidation&&(this.__needReadOnlyElementValidation=!0)),null!=e){
var n=d.__getElementSpecsFromInstanceSpec(e);null!=n&&this.__load(n)}},__load:function(e){
for(var t,n,i=this.__isBoundary,r=-1,o=e.length,a=this.$type.elementType,s=this.__elems,u=this.__keys,l=this.__needReadOnlyElementValidation;++r<o;)if(null!=(t=a.to(e[r]))&&!h.hasOwn(u,n=t.$key)){
if(l&&!t.$type.isReadOnly)throw new TypeError("List requires elements of a read-only type.");
s.push(t),u[n]=t,!i&&t.__addReference&&t.__addReference(this)}},__needReadOnlyElementValidation:!1,
__isReadOnly:!1,get $isReadOnly(){return this.__isReadOnly},__assertEditable:function(){
if(this.__isReadOnly)throw new TypeError("The list is read-only.")},__isBoundary:!1,
get $isBoundary(){return this.__isBoundary},_cloneElementData:function(e,t){var n=t?this:this.__projectedMock;
return e.__elems=n.__elems.slice(),e.__keys=h.assignOwnDefined({},n.__keys),e},get __projectedMock(){
var e;return(e=this.__cset)?e.__projectedMock:this},get $key(){return this.$uid},
get count(){return this.__projectedMock.__elems.length},at:function(e){if(null==e)throw c.argRequired("index");
return this.__projectedMock.__elems[e]||null},has:function(e){return null!=e&&null!=(e=this.__castKey(e))&&h.hasOwn(this.__projectedMock.__keys,e);
},includes:function(e){return null!=e&&this.get(e.$key)===e},indexOf:function(e){
return null!=e&&this.has(e.$key)?this.__projectedMock.__elems.indexOf(e):-1},get:function(e){
return null!=e&&null!=(e=this.__castKey(e))?h.getOwn(this.__projectedMock.__keys,e,null):null;
},set:function(e,t){this.__set(e,!l.optional(t,"noAdd"),!l.optional(t,"noUpdate",!0),!l.optional(t,"noRemove"),!l.optional(t,"noMove"),l.optional(t,"index"));
},add:function(e){this.__set(e,!0,!1,!1,!1)},insert:function(e,t){this.__set(e,!0,!1,!1,!1,t);
},remove:function(e){this.__usingChangeset(function(t){t.__remove(e)})},move:function(e,t){
this.__usingChangeset(function(n){n.__move(e,t)})},removeAt:function(e,t){this.__usingChangeset(function(n){
n.__removeAt(e,t)})},sort:function(e){this.__usingChangeset(function(t){t.__sort(e);
})},clear:function(){this.__usingChangeset(function(e){e.__clear()})},toArray:function(e,t){
var n=this.__projectedMock.__elems;return e?n.map(e,t):n.slice()},each:function(e,t){
for(var n=this.__projectedMock.__elems,i=n.length,r=-1;++r<i&&e.call(t,n[r],r,this)!==!1;);
},__castKey:function(e){return e.toString()},__cast:function(e){return this.$type.__elemType.to(e);
},_createChangeset:function(e){return new r(e,this)},__set:function(e,t,n,i,r,o){
this.__usingChangeset(function(a){a.__set(e,t,n,i,r,o)})},_configure:function(e){
e=this.$type._normalizeInstanceSpec(e);var t=e.d;if(null!=t)if(t.constructor===Object)h.eachOwn(t,function(e,t){
if(null!=e){var n=this.get(t);if(null===n)throw c.argInvalid("config","There is no element with key '"+t+"'.");
var i=n._configureOrCreate(e);if(i!==n){var r=this.indexOf(n);this.removeAt(r,1),
this.insert(i,r)}}},this);else{if(!Array.isArray(t))throw c.argInvalidType("config",["Array","Object","pentaho.type.List"],typeof e);
this.set(t,{noUpdate:!1})}},toSpecInContext:function(e){e=e?Object.create(e):{};var t,n,i=this.$type,r=!!e.forceType||!!(t=e.declaredType)&&i!==t;
if(this.count){e.forceType=!1;var o=i.elementType;n=this.toArray(function(t){return e.declaredType=o,
t.toSpecInContext(e)})}else n=[];return r?{_:i.toSpecInContext(e),d:n}:n},validate:function(){
return this.__projectedMock.__elems.reduce(function(e,t){return o.combineErrors(e,t.validate());
},null)},$type:{_postInit:function(){this.base.apply(this,arguments),h.hasOwn(this,"__elemType")||(this.__elemType=this.__elemType);
},id:e.id,get isList(){return!0},get isContainer(){return!0},__elemType:n.type,get elementType(){
return this.__elemType},get of(){return this.__elemType},set of(e){if(void 0!==e){
if(!e)throw c.argRequired("of");var t=s.resolveType(e).type,n=this.__elemType;if(h.hasOwn(this,"__elemType")){
if(t!==n)throw c.operInvalid("Property 'of' cannot change.")}else{if(t!==n&&!t.isSubtypeOf(n))throw c.argInvalid("of",u.structured.errors.list.elemTypeNotSubtypeOfBaseElemType);
this.__elemType=t}}},_normalizeInstanceSpec:function(e){if(e.constructor===Object)return e;
if(Array.isArray(e))return{d:e};if(e instanceof p)return{d:e.__elems};throw c.argInvalidType("instSpec",["Array","Object","pentaho.type.List"],typeof e);
},__getElementSpecsFromInstanceSpec:function(e){if(Array.isArray(e))return e;if(e.constructor===Object)return Array.isArray(e.d)?e.d:null;
if(e instanceof p)return e.__elems;throw c.argInvalidType("instSpec",["Array","Object","pentaho.type.List"],typeof e);
},_toSpecInContextCore:function(e){var t=this.ancestor,n={id:null,base:t.toSpecInContext(e)
};if(this.__elemType!==t.__elemType&&(n.of=this.__elemType.toSpecInContext(e)),!this._fillSpecInContext(n,e)&&"list"===n.base){
var i=n.of||this.__elemType.toSpecInContext(e);return[i]}return n.id=a.current.add(this),
n}}}).implement(i).implement({_initClone:function(e){this.base(e),this._cloneElementData(e);
}}).localize({$type:u.structured.List}).configure({$type:e.config});return d=p.type,
p}),define("pentaho/type/mixins/DiscreteDomain",["pentaho/module!_","../Instance","../ValidationError","pentaho/util/object","pentaho/i18n!../i18n/types"],function(e,t,n,i,r){
"use strict";var o=t.extend({$type:{id:e.id,dynamicAttributes:{domain:{value:function(e){
var t=e.valueType.elementType.domain;return t?t.toArray():null},cast:function(e){
return Array.isArray(e)||(e=[e]),e.map(function(e){return this.to(e)},this.valueType.elementType);
},combine:function(e,t){return function(n,i){var r=e.call(this,n,i);if(r&&!r.length)return r;
var o=t.call(this,n,i);return o?r&&o.length?n.valueType.elementType.__intersect(r,o):o:r;
}},toSpec:function(e,t){return t.declaredType=this.valueType,e.map(function(e){return e.toSpecInContext(t);
})}}},_collectElementValidators:function(e,t){this.base.apply(this,arguments);var o=this.domainOn(t);
if(o){var a={};o.forEach(function(e){a[e.$key]=e});var s=this;e(function(e,t){return i.hasOwn(a,t.$key)?void 0:new n(r.get("errors.discreteDomain.notInDomain",[t.toString(),s.label]));
})}}}}).configure({$type:e.config});return o}),define("pentaho/type/Property",["pentaho/module!_","./Instance","./Value","./mixins/DiscreteDomain","./util","./ValidationError","./_baseLoader","pentaho/i18n!types","pentaho/util/arg","pentaho/util/error","pentaho/util/object","pentaho/util/text","pentaho/util/fun"],function(e,t,n,i,r,o,a,s,u,l,c,h,d){
"use strict";function p(e){return e=+e,isNaN(e)||0>e?void 0:Math.floor(e)}var f,_="pentaho/type/String",g=t.extend({
$type:{id:e.id,isAbstract:!0,styleClass:null,__label:null,__description:null,extend_order:["name","label","valueType"],
__isConstructing:!1,_init:function(e,t){e=this.base(e,t)||e,this.__isConstructing=!0;
var n=e.valueType,i=t&&t.declaringType;return i?(c.setConst(this,"__declaringType",i),
this.isRoot?(c.setConst(this,"__index",t.index||0),this.__setName(e.name),this.__setIsReadOnly(i.isReadOnly||e.isReadOnly),
n||this.__valueType!==f.__valueType||(n=_)):e.name&&this.__setName(e.name)):null===this.declaringType&&this.__setIsReadOnly(e.isReadOnly),
null!=n&&this.__setValueType(n),e},_postInit:function(){this.base.apply(this,arguments),
this.isRoot&&(c.hasOwn(this,"__valueType")||this.__assertValueTypeReadOnlyConsistent(this.valueType),
this._isLabelSet||(this.label=null),this.__createValueAccessor()),this.__isConstructing=!1;
},elemName:"property",keyName:"name",get key(){return this.__name},get isProperty(){
return!0},__declaringType:null,get declaringType(){return this.__declaringType},get index(){
return this.__index},__name:void 0,get name(){return this.__name},__setName:function(e){
if(e=h.nonEmptyString(e),!e)throw l.argRequired("name");if(this.isRoot)c.setConst(this,"__name",e);else if(e&&e!==this.__name)throw new TypeError("Sub-properties cannot change the 'name' attribute.");
},__nameAlias:void 0,get nameAlias(){return this.__nameAlias},set nameAlias(e){if(!this.isRoot)throw new TypeError("The 'nameAlias' attribute can only be assigned to a root property.");
if(e=h.nonEmptyString(e),!e)throw l.argRequired("nameAlias");c.setConst(this,"__nameAlias",e);
},get isList(){return this.__valueType.isList},__isReadOnly:!1,get isReadOnly(){return this.__isReadOnly;
},__setIsReadOnly:function(e){!this.__isReadOnly&&e&&c.setConst(this,"__isReadOnly",!0);
},__valueType:void 0,get valueType(){return this.__valueType},__setValueType:function(e){
if(null!=e){var t=this.__valueType,n=this.isRoot?c.getOwn(this,"__valueType"):t,i=a.resolveType(e,{
defaultBase:n}).type;if(i!==t){if(t&&!i.isSubtypeOf(t))throw l.argInvalid("valueType",s.structured.errors.property.valueTypeNotSubtypeOfBaseType);
this.__assertValueTypeReadOnlyConsistent(i),this.__valueType=i,d.is(this.__defaultValue)||(this.__defaultValue=null,
this.__defaultValueFun=null)}}},__assertValueTypeReadOnlyConsistent:function(e){this.__needReadOnlyElementValidation=!1;
var t=this.declaringType;if(null!==t&&t.isReadOnly){var n=e.elementType;if(!e.elementType.isReadOnly){
if(!n.isAbstract)throw l.argInvalid("valueType",s.structured.errors.property.valueTypeNotReadOnly);
this.__needReadOnlyElementValidation=!0}}},__defaultValue:null,__defaultValueFun:null,
get defaultValue(){return this.__defaultValue},set defaultValue(e){if(this._assertNoSubtypesAttribute("defaultValue"),
void 0===e)this!==f&&(c.hasOwn(this,"__valueType")?(this.__defaultValue=null,this.__defaultValueFun=null):(delete this.__defaultValue,
delete this.__defaultValueFun));else{var t;null===e?t=null:d.is(e)?t=function(t){
return t.toValueOn(null,e.apply(this,arguments))}:(e=this.toValueOn(null,e),t=d.constant(e)),
this.__defaultValue=e,this.__defaultValueFun=t}},toValueOn:function(e,t){if(this.isList)return null==t&&e&&(t=this.defaultValueOn(e)),
this.__valueType.create(t,this.__listCreateKeyArgs||this.__buildListCreateKeyArgs());
var n;if(n=null==t?e?this.defaultValueOn(e):null:this.__valueType.to(t),null!==n&&this.__needReadOnlyElementValidation&&!n.$type.isReadOnly)throw new TypeError("Property '"+this.label+"' requires a value of a read-only type.");
return n},defaultValueOn:function(e){var t=this.__defaultValueFun;return t?t.call(e,this):this.isList?this.__valueType.create(null):t;
},__listCreateKeyArgs:null,__buildListCreateKeyArgs:function(){return this.__listCreateKeyArgs={
isBoundary:this.__isBoundary,isReadOnly:this.__isReadOnly,needReadOnlyElementValidation:this.__needReadOnlyElementValidation
}},_getLabelDefault:function(){return this.isRoot?h.titleFromName(this.name):void 0;
},__isBoundary:!1,get isBoundary(){return this.__isBoundary},set isBoundary(e){if(this!==f){
if(!this.isRoot)throw l.operInvalid("Cannot only change the isBoundary attribute on a root property type.");
this._assertNoSubtypesAttribute("isBoundary"),null!=e&&(this.__isBoundary=!!e)}},
__createValueAccessor:function(){var e=this.__declaringType.instance,t=this.__name;
t in e||Object.defineProperty(e,t,{configurable:!0,get:function(){return this.getv(t);
},set:function(e){this.set(t,e)}})},validateOn:function(e){var t=null;if(this.isApplicableOn(e)){
var n=function(e){t=r.combineErrors(t,e)},i=e.__getAmbientByType(this);i&&(this.isBoundary||n(i.validate()),
n(this._validateValueOn(e,i)));var a=this.countRangeOn(e),u=this.isList?i.count:i?1:0;
u<a.min?n(this.isList?new o(s.get("errors.property.countOutOfRange",[this.label,u,a.min,a.max])):new o(s.get("errors.property.isRequired",[this.label]))):u>a.max&&n(new o(s.get("errors.property.countOutOfRange",[this.label,u,a.min,a.max])));
}return t},_validateValueOn:function(e,t){var n=null;if(!this.isList||t.count>0){
var i=null,o=function(e){(i||(i=[])).push(e)};if(this._collectElementValidators(o,e,t),
i){var a=function(t,o){i.forEach(function(i){n=r.combineErrors(n,i.call(this,e,t,o));
})};this.isList?t.each(a,this):a.call(this,t,0)}}return n},_collectElementValidators:function(e,t,n){},
_toSpecInContextCore:function(e){e||(e={});var t,i={},r=this.__valueType.toSpecInContext(e),o=!this.__declaringType;
if(o)t=Object.getPrototypeOf(this),i.base=t.toSpecInContext(e),this.__valueType!==n.type&&(i.valueType=r),
this._fillSpecInContext(i,e);else{var a=0;if(this.isRoot&&(t=Object.getPrototypeOf(this),
t!==f&&(i.base=t.toSpecInContext(e),a++)),i.name=this.__name,a++,this.__valueType.id!==_&&(i.valueType=r,
a++),!this._fillSpecInContext(i,e)&&1===a)return this.__name}return i},_fillSpecInContext:function(e,t){
var n=this.base(e,t),i=c.getOwn(this,"__defaultValue");void 0!==i&&(i?d.is(i)?t.isJson||(n=!0,
e.defaultValue=i.valueOf()):(n=!0,t.declaredType=this.__valueType,e.defaultValue=i.toSpecInContext(t)):c.hasOwn(this,"__valueType")||(n=!0,
e.defaultValue=null));var r=c.getOwn(this,"__isReadOnly");return void 0!==r&&(n=!0,
e.isReadOnly=r),n}}},{$type:{_extend:function(e,t,n,i){return"string"==typeof t&&(t={
name:t}),this.base(e,t,n,i)}}}).implement({$type:{dynamicAttributes:{isRequired:{
value:!1,cast:Boolean,combine:function(e,t){return function(n,i){return e.call(this,n,i)||t.call(this,n,i);
}}},countMin:{value:0,cast:p,combine:function(e,t){return function(n,i){return Math.max(e.call(this,n,i),t.call(this,n,i));
}}},countMax:{value:1/0,cast:p,combine:function(e,t){return function(n,i){return Math.min(e.call(this,n,i),t.call(this,n,i));
}}},isApplicable:{value:!0,cast:Boolean,combine:function(e,t){return function(n,i){
return e.call(this,n,i)&&t.call(this,n,i)}}},isEnabled:{value:!0,cast:Boolean,combine:function(e,t){
return function(n,i){return e.call(this,n,i)&&t.call(this,n,i)}}}},countRangeOn:function(e){
var t=this.isRequiredOn(e),n=this.countMinOn(e),i=this.countMaxOn(e);return this.isList||(n>1&&(n=1),
i>1&&(i=1)),t&&1>n&&(n=1),n>i&&(i=n),{min:n,max:i}}}}).implement({$type:{mixins:[i]
}}).configure({$type:e.config});return f=g.type,f.__setValueType(n),g}),define("pentaho/lang/Collection",["./List","../util/object"],function(e,t){
return e.extend("pentaho.lang.Collection",{constructor:function(e){this.__keys={},
this.base(e)},copyTo:function(e){this.base(e),t.assignOwn(e.__keys,this.__keys)},
missingValue:null,elemClass:null,_getKeyName:function(){return this.elemClass?this.elemClass.prototype.keyName:"key";
},_getElemKey:function(e){return e.key},_sayElemWithKey:function(e){return"A "+this._getElemName()+" with "+this._getKeyName()+" '"+e+"'";
},_sayElemCannotHaveNullyKey:function(){return"A "+this._getElemName()+" cannot have a nully "+this._getKeyName()+" value.";
},_adding:function(e,t,n){var i=this._cast(e,t,n);if(void 0!==i){var r=this._getElemKey(i);
if(null==r)throw new Error(this._sayElemCannotHaveNullyKey());if(this.has(r))throw new Error(this._sayElemWithKey(r)+" is already included.");
}return i},_replacing:function(e,t,n,i){var r=this._cast(e,t,i);if(void 0!==r){var o=this._getElemKey(r);
if(null==o)throw new Error(this._sayElemCannotHaveNullyKey())}return r},_added:function(e){
this.__keys[this._getElemKey(e)]=e},_replaced:function(e){this.__keys[this._getElemKey(e)]=e;
},includes:function(e){if(e){var t=this._getElemKey(e);if(null!=t)return this.get(t)===e;
}return!1},has:function(e){var n;return null!=e&&null!=(n=this._castKey(e))&&t.hasOwn(this.__keys,n);
},get:function(e,n){var i;if(null!=e&&null!=(i=this._castKey(e))&&t.hasOwn(this.__keys,i))return this.__keys[i];
if(n)throw new Error(this._sayElemWithKey(i)+" is not defined.");return this.missingValue;
},getExisting:function(e){return this.get(e,!0)},_castKey:function(e){return e}});
}),define("pentaho/type/PropertyTypeCollection",["module","./Property","./_baseLoader","pentaho/lang/Collection","pentaho/util/arg","pentaho/util/error","pentaho/util/object"],function(e,t,n,i,r,o,a){
"use strict";function s(e){return"string"==typeof e?e:e.name}var u=t.type;return i.extend(e.id,{
constructor:function(e){if(!e)throw o.argRequired("declaringType");this.__cachedKeyArgs={
declaringType:e,index:-1,isRoot:!1},this.__propTypesByAlias=Object.create(null);var t=e.ancestor,n=t.isComplex?t.__getProps():null;
if(n){var i;this.length&&(i=this.slice(),this.length=0),this.base(),n.copyTo(this),
i&&this.addMany(i)}else this.base()},copyTo:function(e){this.base(e),a.assignOwn(e.__propTypesByAlias,this.__propTypesByAlias);
},getByAlias:function(e){return a.getOwn(this.__propTypesByAlias,e,null)},get __declaringType(){
return this.__cachedKeyArgs.declaringType},_adding:function(e,t,n){if(!e)throw o.argRequired("props[i]");
var i,r=s(e);return r&&(i=this.get(r))?void(e!==r&&(i.declaringType===this.__declaringType?i.extend(e):this.replace(e,this.indexOf(i),n))):this.base.apply(this,arguments);
},_replacing:function(e,t,n,i){if(!e)throw o.argRequired("props[i]");var r=s(e);if(r!==n.name)throw o.argInvalid("props[i]","Incorrect property name.");
if(n.declaringType===this.__declaringType)return void(e!==r&&n.extend(e));var a;i?(a=Object.create(i),
a.declaringType=this.__declaringType):a=this.__cachedKeyArgs;var u=n.instance.constructor,l=u.extend({
$type:e},null,a);return l.type},_added:function(e){this.base.apply(this,arguments);
var t=e.nameAlias;null!==t&&(this.__propTypesByAlias[t]=e)},_replaced:function(e){
this.base.apply(this,arguments);var t=e.nameAlias;null!==t&&(this.__propTypesByAlias[t]=e);
},_cast:function(e,t,i){"string"==typeof e&&(e={name:e});var r,a=e.base;if(a){if(r=n.resolveType(a).type,
!r.isSubtypeOf(u))throw o.argInvalid("props[i]","Property base type does not extend Property.");
}else r=u;var s;i?(s=Object.create(i),s.declaringType=this.__declaringType):s=this.__cachedKeyArgs,
s.index=t,s.isRoot=!0;var l=r.instance.constructor,c=l.extend({$type:e},null,s);return i||(s.index=-1,
s.isRoot=!1),c.type},configure:function(e,t){if(!e)throw o.argRequired("config");Array.isArray(e)?this.addMany(e,t):a.eachOwn(e,function(e,n){
if(e&&"object"==typeof e){var i=e.name;if(i){if(i!==n)throw o.argInvalid("config","Property name does not match object key.");
}else e.name=n;this.add(e,t)}},this)}})}),define("pentaho/type/changes/Replace",["module","./PrimitiveChange","pentaho/util/object"],function(e,t,n){
"use strict";return t.extend(e.id,{constructor:function(e,t,i){n.setConst(this,"property",e),
this.__value=t,this.__state=i},__updateValue:function(e,t,n){this._setTransactionVersion(e.transaction.__takeNextVersion()),
this.__value!==t&&this.__replace(e,this.__value,t),this.__value=t,this.__state=n},
_prepare:function(e){var t=this.property;t.isBoundary||t.valueType.isSimple||this.__replace(e,e.owner.__getByName(t.name),this.__value);
},_cancel:function(e){var t=this.property;t.isBoundary||t.valueType.isSimple||this.__replace(e,this.__value,e.owner.__getByName(t.name));
},__replace:function(e,t,n){t&&t.__addReference&&e.__removeComplexElement(t,this.property),
n&&n.__addReference&&e.__addComplexElement(n,this.property)},get type(){return"replace";
},get value(){return this.__value},get state(){return this.__state},_apply:function(e){
var t=this.property.name;e.__values[t]=this.__value,e.__valuesState[t]=this.__state;
}})}),define("pentaho/type/changes/ComplexChangeset",["module","./Changeset","./ListChangeset","./Replace","./Transaction","pentaho/util/object"],function(e,t,n,i,r,o){
"use strict";function a(e){return!(e instanceof t)||e.hasChanges}var s=0,u=1;return t.extend(e.id,{
constructor:function(e,t){this.base(e,t),this._changes=Object.create(null)},get type(){
return"complex"},get hasChanges(){var e=this._changes;for(var t in e)if(o.hasOwn(e,t)&&a(e[t]))return!0;
return!1},getChange:function(e){return this.__getChange(this.__resolvePropertyName(e));
},__getChange:function(e){return o.getOwn(this._changes,e,null)},hasChange:function(e){
return this.__hasChange(this.__resolvePropertyName(e))},__hasChange:function(e){return o.hasOwn(this._changes,e)&&a(this._changes[e]);
},get propertyNames(){var e=this._changes;return Object.keys(e).filter(function(t){
return a(e[t])})},__getByName:function(e){var n=this.__getChange(e);return null!==n?n instanceof t?n.owner:n.value:this.owner.__getByName(e);
},__getStateByName:function(e){var n=this.__getChange(e);return null!==n?n instanceof t?u:n.state:this.owner.__getStateByName(e);
},getOld:function(e){var t=this.owner.$type.get(e).name;return this.owner.__getByName(t);
},eachChildChangeset:function(e,n){var i=this._changes,r=this.transaction.isCurrent;
for(var a in i)if(o.hasOwn(i,a)){var s=i[a];if(s instanceof t){if(e.call(n,s)===!1)return;
}else{var u=s.value;if(null!==u&&u.__addReference&&null!==(s=r?u.__cset:this.transaction.getChangeset(u.$uid))&&e.call(n,s)===!1)return;
}}},__onChildChangesetCreated:function(e,t){null===this.__getChange(t.name)&&(this._changes[t.name]=e,
this._setTransactionVersion(e.transactionVersion)),e.__updateNetOrder(this._netOrder+1);
},__setPrimitiveChange:function(e,t){this._changes[e]=t,t._prepare(this);var n=this.transaction.__takeNextVersion();
t._setTransactionVersion(n),this._setTransactionVersionLocal(n)},__removePrimitiveChange:function(e){
this._changes[e]._cancel(this),delete this._changes[e],this._setTransactionVersionLocal(this.transaction.__takeNextVersion());
},__updateReplaceChange:function(e,t,n){var i=this._changes[e];i.__updateValue(this,t,n),
this._setTransactionVersionLocal(i.transactionVersion)},__addComplexElement:function(e,t){
this.transaction.__ensureChangeRef(e).addReference(this.owner,t);var n=e.__cset;null!==n&&n.__updateNetOrder(this._netOrder+1);
},__removeComplexElement:function(e,t){this.transaction.__ensureChangeRef(e).removeReference(this.owner,t);
var n=e.__cset;null!==n&&n._resetNetOrder()},__resolvePropertyName:function(e){return this.owner.$type.get(e).name;
},_clearChanges:function(){var e=this._changes;for(var n in e)if(o.hasOwn(e,n)){var i=e[n];
i instanceof t?i._clearChangesRecursive(this):(delete e[n],i._cancel(this))}},_apply:function(e){
var n=this._changes;for(var i in n)if(o.hasOwn(n,i)){var r=n[i];r instanceof t?r.hasChanges&&(e.__valuesState[i]=u):r._apply(e);
}}},{__setElement:function(e,n,o,a){var l=e.$type,c=n.name,h=e.__getByName(c),d=e.__getStateByName(c),p=null==o?s:u,f=n.toValueOn(e,o),_=e.$changeset,g=null;
null!==_&&(g=_.__getChange(c),null!==g&&g instanceof t&&(g=null));var m=null!==g?g.value:h,y=null!==g?g.state:d,v=a?!1:l.areEqual(f,m);
if(p!==y||!v){if(n.isReadOnly)throw new TypeError("'"+c+"' is read-only.");if(null!==g)return void(p===d&&l.areEqual(f,h)?_.__removePrimitiveChange(c):_.__updateReplaceChange(c,v?m:f,p));
var b=r.enter();null===_&&(_=b.transaction.ensureChangeset(e)),_.__setPrimitiveChange(c,new i(n,v?m:f,p,h)),
b.accept()}}})}),define("pentaho/type/Simple",["require","pentaho/module!_","./Element","./util","pentaho/util/object","pentaho/util/error","pentaho/util/fun","pentaho/util/text","pentaho/i18n!types"],function(e,t,n,i,r,o,a,s,u){
"use strict";var l="pentaho/type/",c=l+"String",h=l+"Boolean",d=l+"Number",p=null,f=null,_=null,g=n.extend({
constructor:function(e){var t,n;e instanceof Object?e.constructor===Object?(void 0===(t=e.value)&&(t=e.v),
void 0===(n=e.formatted)&&(n=e.f)):e instanceof g?(t=e.value,n=e.formatted):t=e:t=e,
r.setConst(this,"value",this.$type.toValue(t)),r.setConst(this,"formatted",s.nonEmptyString(n));
},clone:function(){var e=this.constructor;return new e(this)},valueOf:function(){
return this.value},toString:function(){var e=this.formatted;return null!=e?e:String(this.value);
},get $key(){return this.value.toString()},get $contentKey(){return this.$key+(null!==this.formatted?" ["+this.formatted+"]":"");
},_equals:function(e){return this.value===e.value},equalsContent:function(e){return this.formatted===e.formatted;
},_compare:function(e){return this.$type.comparePrimitiveValues(this.value,e.value);
},toSpecInContext:function(t){t||(t={});var n=!t.omitFormatted&&null!==this.formatted,i=this.$type,r=t.declaredType,o=!!t.forceType;
!o&&r&&i!==r&&(null===f&&(f=e(c).type,p=e(d).type,_=e(h).type),(!r.isAbstract||i!==f&&i!==p&&i!==_)&&(o=!0));
var a;if(t.isJson){if(a=this._toJSONValue(t),null==a)return null}else a=this.value;
var s=a.constructor===Object;if(!(s||n||o))return a;var u=o||r&&i!==r?{_:i.toSpecInContext(t),
v:a}:{v:a};return n&&(u.f=this.formatted),u},_toJSONValue:function(e){return this.value;
},$type:{id:t.id,isAbstract:!0,get isSimple(){return!0},get isEntity(){return!0},
get isReadOnly(){return!0},toValue:function(e){if(null==e)throw o.argRequired("value");
if(e=this.cast(e),null==e)throw o.argInvalid("value",u.format(u.structured.errors.value.cannotConvertToType,[this.label]));
return e},cast:function(e){return e},comparePrimitiveValues:function(e,t){return a.compare(e,t);
},hasNormalizedInstanceSpecKeyData:function(e){return void 0!==e.value||void 0!==e.v;
},createLike:function(e,t){var n=t.formatted;void 0===n&&void 0===(n=t.f)&&(n=e.formatted);
var i=e.constructor;return new i({value:e.value,formatted:n})},_normalizeInstanceSpec:function(e){
if(e instanceof Object){if(e.constructor===Object)return e;if(e instanceof g)return{
value:e.value,formatted:e.formatted}}return{value:e}},_fillSpecInContext:function(e,t){
var n=this.base(e,t);return t.isJson||(n=i.fillSpecMethodInContext(e,this,"cast")||n),
n}}}).localize({$type:u.structured.Simple}).configure({$type:t.config});return g}),
define("pentaho/type/String",["pentaho/module!_","./Simple","pentaho/i18n!types"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,cast:String}}).localize({$type:n.structured.String
}).configure({$type:e.config})}),define("pentaho/type/Number",["pentaho/module!_","./Simple","pentaho/i18n!types"],function(e,t,n){
"use strict";function i(e){return e=+e,isNaN(e)?null:e}return t.extend({$type:{id:e.id,
cast:i,get isContinuous(){return!0}}}).localize({$type:n.structured.Number}).configure({
$type:e.config})}),define("pentaho/type/Boolean",["pentaho/module!_","./Simple","pentaho/i18n!types"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,cast:Boolean}}).localize({$type:n.structured.Boolean
}).configure({$type:e.config})}),define("pentaho/util/date",[],function(){"use strict";
function e(e){var t=r.exec(e);if(!t)return null;var n=[0,0];if(!t[1]){var i="+"===t[2]?1:-1;
t[3]&&(n[0]=i*Number(t[3])),t[4]&&(n[1]=i*Number(t[4]))}return n}function t(e){var t=i.exec(e);
return t?(e=[Number(t[1]),Number(t[2]),0,0],t[3]&&(e[2]=Number(t[3]),t[4]&&(e[3]=Number(t[4]))),
e):null}var n=/^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?(?:T([\d:\.]+))?([Z+\-][\d:]*)?$/,i=/^(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?$/,r=/^(?:(Z)|(?:([+\-])(\d{2}):(\d{2})))$/,o={
parseDateEcma262v7:function(i){if(null==i)return null;switch(typeof i){case"number":
return new Date(i);case"object":return i instanceof Date?i:null;case"string":break;
default:return null}var r=n.exec(i);if(!r)return null;var o,a=[Number(r[1]),Number(r[2]||"1")-1,Number(r[3]||"1")];
if(r[4]){if(o=t(r[4]),!o)return null}else o=[0,0,0,0];var s,u=a.concat(o);if(r[5]){
if(s=e(r[5]),!s)return null;u[3]-=s[0],u[4]-=s[1]}else r[4]||(s=[0,0]);var l=s?new Date(Date.UTC(u[0],u[1],u[2],u[3],u[4],u[5],u[6])):new Date(u[0],u[1],u[2],u[3],u[4],u[5],u[6]);
return isNaN(l.getTime())?null:l}};return o}),define("pentaho/type/Date",["pentaho/module!_","./Simple","pentaho/util/date","pentaho/i18n!types"],function(e,t,n,i){
"use strict";return t.extend({get $key(){return this.value.toISOString()},_toJSONValue:function(e){
return this.value.toJSON()},$type:{id:e.id,cast:function(e){return n.parseDateEcma262v7(e);
},get isContinuous(){return!0}}}).localize({$type:i.structured.Date}).configure({
$type:e.config})}),define("pentaho/type/Object",["pentaho/module!_","./Simple","pentaho/util/object","pentaho/i18n!types"],function(e,t,n,i){
"use strict";var r=1,o="__pentaho_type_ouid_"+Math.random().toString(32)+"__",a={
value:"",configurable:!0,writable:!0,enumerable:!1};return t.extend({constructor:function(e){
this.base(e);var t=n.getOwn(this.value,o);null==t&&(a.value=t=String(r++),Object.defineProperty(this.value,o,a)),
this.__uid=t},get $key(){return this.__uid},$type:{id:e.id,cast:Object}}).localize({
$type:i.structured.Object}).configure({$type:e.config})}),define("pentaho/type/Function",["pentaho/module!_","./Simple","pentaho/util/object","pentaho/util/fun","pentaho/util/logger","pentaho/i18n!types"],function(e,t,n,i,r,o){
"use strict";var a="[native code]",s=1,u="__pentaho_type_ouid_"+Math.random().toString(32)+"__",l={
value:"",configurable:!0,writable:!0,enumerable:!1};return t.extend({constructor:function(e){
this.base(e);var t=n.getOwn(this.value,u);null==t&&(l.value=t=String(s++),Object.defineProperty(this.value,u,l)),
this.__uid=t},get $key(){return this.__uid},_toJSONValue:function(e){var t=String(this.value);
return t.indexOf(a)>0&&(r.warn(o.structured.errors.json.cannotSerializeNativeFunction),
t=null),t},$type:{id:e.id,cast:i.as}}).localize({$type:o.structured.Function}).configure({
$type:e.config})}),define("pentaho/type/TypeDescriptor",["pentaho/module!_","./Simple","./_baseLoader","pentaho/i18n!types"],function(e,t,n,i){
"use strict";return t.extend({get $key(){return String(this.value.uid)},_toJSONValue:function(e){
return this.value.toSpecInContext(e)},$type:{id:e.id,cast:function(e){return n.resolveType(e).type;
}}}).localize({$type:i.structured.TypeDescriptor}).configure({$type:e.config})}),
define("pentaho/type/standardSimple",["./Simple","./String","./Number","./Boolean","./Date","./Object","./Function","./TypeDescriptor"],function(){
"use strict"}),define("pentaho/type/Complex",["pentaho/module!_","./Value","./Element","./Property","./PropertyTypeCollection","./util","./mixins/Container","./changes/ComplexChangeset","pentaho/lang/ActionResult","pentaho/lang/UserError","pentaho/util/object","pentaho/util/error","pentaho/i18n!types","./List","./standardSimple"],function(e,t,n,i,r,o,a,s,u,l,c,h,d){
"use strict";function p(e){this.$type.eachCommonWith(e.$type,function(t){var n=e.get(t.name);
this._configureProperty(t,n)},this)}function f(e){var t=this.$type;e=t._normalizeInstanceSpec(e);
var n;for(var i in e)if(c.hasOwn(e,i)&&"_"!==i&&void 0!==(n=e[i])){var r=t.get(i,!0);
null===r&&(r=t.__getByAlias(i),null!==r&&c.hasOwn(e,r.name)&&(r=null)),null!==r&&this._configureProperty(r,n);
}}function _(e,t,n){return null===t||null===n?void s.__setElement(this,e,n):(n=t._configureOrCreate(n),
void(n!==t&&s.__setElement(this,e,n,!0)))}function g(e,t){return e[t.index]}function m(e,t){
var n;return y.call(e,n=t.name)?e[n]:null!==(n=t.nameAlias)&&y.call(e,n)?e[n]:void 0;
}var y=Object.prototype.hasOwnProperty,v=0,b=1,C=t.type,O=n.extend({constructor:function(e,t){
this._initContainer(),this._initProperties(e)},_initProperties:function(e){var t=this.$type.__getProps(),n=t.length,i=e?Array.isArray(e)?g:m:void 0,r={},o={};
this.__values=r,this.__valuesState=o;for(var a,s,u,l=-1;++l<n;)a=t[l],u=a.name,s=i&&i(e,a),
o[u]=null==s?v:b,r[u]=s=a.toValueOn(this,s),null!=s&&s.__addReference&&this.__initPropertyValueRelation(a,s);
},__initPropertyValueRelation:function(e,t){(e.isList||!e.isBoundary)&&t.__addReference(this,e);
},get $key(){return this.$uid},equalsContent:function(e){var t=!0;return this.$type.each(function(n){
var i=this.get(n),r=e.get(n);return t=n.isList?C.areEqualContentElements(i,r):C.areEqualContent(i,r),
t?void 0:!1},this),t},get:function(e,t){var n=this.$type.get(e,t);return n?this.__getAmbientByType(n):void 0;
},isDefaultedOf:function(e){var t=this.$type.get(e);return this.__getAmbientStateByType(t)===v;
},__getAmbientByType:function(e){return(e.isList?this:this.__cset||this).__getByName(e.name);
},__getAmbientStateByType:function(e){return(this.__cset||this).__getStateByName(e.name);
},__getByName:function(e){return this.__values[e]},__getStateByName:function(e){return this.__valuesState[e];
},getv:function(e,t){var n=this.get(e,t);return n&&n.valueOf()},getf:function(e,t){
var n=this.get(e,t);return n?n.toString():""},set:function(e,t){var n=this.$type.get(e);
if(n.isList){var i=this.__getAmbientByType(n);if(i===t)return;if(null!=t&&(t=i.$type.__getElementSpecsFromInstanceSpec(t),
null!=t))return void i.set(t);i.clear()}else s.__setElement(this,n,t)},_configure:function(e){
e instanceof t?p.call(this,e):f.call(this,e)},_configureProperty:function(e,t){var n=this.__getAmbientByType(e);
n!==t&&(e.isList?null===t?n.clear():n._configure(t):_.call(this,e,n,t))},countOf:function(e,t){
var n=this.$type.get(e,t);if(!n)return 0;var i=this.__getAmbientByType(n);return n.isList?i.count:i?1:0;
},isApplicableOf:function(e){return this.$type.get(e).isApplicableOn(this)},isEnabledOf:function(e){
return this.$type.get(e).isEnabledOn(this)},countRangeOf:function(e){return this.$type.get(e).countRangeOn(this);
},isRequiredOf:function(e){return this.$type.get(e).countRangeOn(this).min>0},domainOf:function(e){
return this.$type.get(e).domainOn(this)},toSpecInContext:function(e){function t(t){
var i=o?t.name:t.nameAlias;if(i||(i=t.name),!r||r[i]!==!0){var a=this.__getAmbientByType(t),l=u||this.__getAmbientStateByType(t)===b;
if(l){var c;if(a){if(e.declaredType=t.valueType,c=a.toSpecInContext(e),null==c){if(!s)return;
c=null}}else c=null;s?n.push(c):n[i]=c}else s&&n.push(null)}}e=e?Object.create(e):{};
var n,i,r,o=!!e.noAlias,a=!!e.forceType||!!(i=e.declaredType)&&this.$type!==i,s=!a&&e.preferPropertyArray;
s?n=[]:(n={},a&&(n._=this.$type.toSpecInContext(e)),r=e.omitProps,e.omitProps=null);
var u=!!e.includeDefaults,l=this.$type;return e.forceType=!1,l.each(t,this),n},validate:function(){
var e=null;return this.$type.each(function(t){e=o.combineErrors(e,t.validateOn(this));
},this),e},$type:{_init:function(e,t){if(e=this.base(e,t)||e,!this.__isReadOnly&&e.isReadOnly){
if(this.ancestor.count>0)throw h.argInvalid("isReadOnly");this.__isReadOnly=!0}return e;
},id:e.id,isAbstract:!0,get isComplex(){return!0},get isContainer(){return!0},__isEntity:!1,
get isEntity(){return this.__isEntity},set isEntity(e){this._assertNoSubtypesAttribute("isEntity"),
null!=e&&!this.__isEntity&&e&&(this.__isEntity=!0)},__isReadOnly:!1,get isReadOnly(){
return this.__isReadOnly},__props:null,set props(e){this._configureProperties(e)},
__getProps:function(){var e=this.constructor.prototype;return c.getOwn(e,"__props")||(e.__props=r.to([],this));
},_configureProperties:function(e){this.__getProps().configure(e)},_normalizePropertiesSpec:function(e){
if(Array.isArray(e))return e.map(function(e){return"string"==typeof e?{name:e}:e});
var t=[];return c.eachOwn(e,function(e,n){e=Object.create(e),e.name=n,t.push(e)}),
t},get:function(e,t){if(!e)throw h.argRequired("name");var n=this.__get(e);if(!n&&!t)throw h.argInvalid("name","A property with the name '"+(e.name||e)+"' is not defined.");
return n},__get:function(e){var t;return e&&(t=this.__props)?"string"==typeof e?t.get(e):t.get(e.name)===e?e:null:null;
},__getByAlias:function(e){return null!==this.__props?this.__props.getByAlias(e):null;
},has:function(e){var t;return e&&(t=this.__props)?"string"==typeof e?t.has(e):t.get(e.name)===e:!1;
},at:function(e,t){if(null==e)throw h.argRequired("index");var n=this.__at(e);if(!n&&!t)throw h.argRange("index");
return n},__at:function(e){var t=this.__props;return t&&t[e]||null},get count(){var e=this.__props;
return e?e.length:0},each:function(e,t){var n,i=this.__props;if(i&&(n=i.length))for(var r=-1;++r<n&&e.call(t,i[r],r,this)!==!1;);
return this},eachCommonWith:function(e,t,n){var i;return e.isComplex&&(i=c.lca(this,e))&&i.isComplex&&i.each(function(e,i){
var r=e.name,o=this.get(r);return t.call(n,o,i,this)===!1?!1:void 0},this),this},
add:function(e){return Array.isArray(e)||(e=[e]),this._configureProperties(e),this;
},_fillSpecInContext:function(e,t){var n=this.base(e,t);if(c.hasOwn(this,"__isReadOnly")&&(n=!0,
e.isReadOnly=this.isReadOnly),c.hasOwn(this,"__isEntity")&&(n=!0,e.isEntity=this.isEntity),
this.count){var i;this.each(function(r){r.declaringType===this&&(i||(n=!0,i=e.props=[]),
i.push(r.toSpecInContext(t)))},this)}return n}}}).implement(a).implement({_initClone:function(e){
this.base(e);for(var t,n,i,r=this.$type.__getProps(),o=this.__cset||this,a=r.length,s={},u={};a--;)t=r[a],
n=t.name,s[n]=i=t.isList?this.__getByName(n).clone():o.__getByName(n),u[n]=this.__valuesState[n],
null!=i&&i.__addReference&&e.__initPropertyValueRelation(t,i);e.__values=s,e.__valuesState=u;
},_createChangeset:function(e){return new s(e,this)}}).localize({$type:d.structured.Complex
}).configure({$type:e.config});return O}),define("pentaho/type/mixins/Enum",["pentaho/module!_","../Simple","../List","../util","../ValidationError","../../i18n!../i18n/types","../../util/error"],function(e,t,n,i,r,o,a){
"use strict";return t.extend({validate:function(){return i.combineErrors(this.base(),this.$type.__validateDomain(this));
},$type:{id:e.id,_init:function(e,t){e=this.base(e,t)||e;var n=e.domain;if(!n)throw a.argRequired("spec.domain");
return e},__validateDomain:function(e){var t=this.__domain;return!t||t.has(e.$key)?null:new r(o.structured.errors["enum"].notInDomain);
},_fillSpecInContext:function(e,t){return this.base(e,t),t||(t={}),t.declaredType=this.$type,
e.domain=this.__domain.toSpecInContext(t),!0},__domain:null,__domainPrimitive:null,
get domain(){return this.__domain},set domain(e){if(null==e)throw a.argRequired("domain");
if(this.__domain){if(e.constructor!==Object)throw a.argInvalidType("domain",["Object"],typeof e);
this.__domain.configure({d:e})}else{var t=n.extend({$type:{of:this}});if(this.__domain=new t(e),
this.__domainPrimitive=this.__domain.toArray(function(e){return e.value}),!this.__domain.count)throw a.argRequired("spec.domain");
}},comparePrimitiveValues:function(e,t){var n=this.__domainPrimitive.indexOf(e),i=this.__domainPrimitive.indexOf(t);
return n===i?0:0>n?-1:0>i?1:n-i}}},{_extend:function(){throw a.operInvalid("Enum types are final and cannot be subtyped.");
}}).configure({$type:e.config})}),define("pentaho/type/standard",["./Instance","./Value","./Element","./List","./Complex","./standardSimple","./Property","./mixins/Enum","./mixins/DiscreteDomain"],function(){
"use strict"}),define("pentaho/type/loader",["./_baseLoader","./standard"],function(e){
"use strict";return e}),define("pentaho/data/_ElementMock",["../lang/Base"],function(e){
"use strict";return e.extend({constructor:function(e,t){this.table=e,this.rowIdx=t,
this.$type={has:function(t){return null!=e.model.attributes.get(t)}}},getv:function(e){
return this.table.getValue(this.rowIdx,this.table.getColumnIndexByAttribute(e))},
getf:function(e){return this.table.getFormattedValue(this.rowIdx,this.table.getColumnIndexByAttribute(e));
}})}),define("pentaho/data/AtomicTypeName",[],function(){var e={STRING:"string",NUMBER:"number",
BOOLEAN:"boolean",DATE:"date"};return e}),define("pentaho/data/_AbstractTable",["../lang/Base","./_ElementMock","./AtomicTypeName"],function(e,t,n){
function i(e){var t=e.length;return t?function(n){for(var i=0;t>i;i++){var r=e[i],o=r.value;
if(void 0!==o&&!this.isValueEqual(this.getValue(n,r.column),o))return!1}return!0}:void 0;
}function r(e){if(!o.hasOwnProperty(e))throw new Error("Unsupported data type");return o[e];
}var o={};o[n.NUMBER]="numeric",o[n.STRING]="string",o[n.DATE]="date",o[n.BOOLEAN]="boolean";
var a=e.extend("pentaho.data.AbstractTable",{isValueEqual:function(e,t){return e===t||null==e&&null==t||"number"==typeof e&&isNaN(e)&&"number"==typeof t&&isNaN(t);
},getColumnIndexByAttribute:function(e){if(e&&("string"==typeof e&&(e=this.model.attributes.get(e)),
this.model.attributes.includes(e)))for(var t=-1,n=this.getNumberOfColumns();++t<n;)if(this.getColumnAttribute(t)===e)return t;
return-1},getColumnIndexById:function(e){return this.getColumnIndexByAttribute(e);
},getColumnProperty:function(e,t){var n=this.model.attributes[e];return n?n.property(t):void 0;
},getColumnRange:function(e,t){for(var n,i,r=!1,o=t&&t.key,a=0,s=this.getNumberOfRows();s>a;){
var u=this.getValue(a++,e);if(null!=u&&("number"!=typeof u||!isNaN(u))){if(o&&(u=o(u),
null==u||isNaN(u)))continue;r?(n>u&&(n=u),u>i&&(i=u)):(n=i=u,r=!0)}}return{min:n,
max:i}},getDistinctValues:function(e){return this._getDistinctValuesCore(e,!1)},getDistinctFormattedValues:function(e){
return this._getDistinctValuesCore(e,!0)},_getDistinctValuesCore:function(e,t){for(var n,i,r=[],o={},a=0,s=this.getNumberOfRows(),u=t?this.getFormattedValue:this.getValue;s>a;)n=u.call(this,a++,e),
i=typeof n+":"+n,1!==o[i]&&(o[i]=1,r.push(n));return r},getFilteredRows:function(e){
var t=[],n=this.getNumberOfRows();if(n)for(var r=i.call(this,e),o=-1;++o<n;)(!r||r.call(this,o))&&t.push(o);
return t},filter:function(e){var n=[],i=this.getNumberOfRows();if(i>0)for(var r=e.compile(),o=new t(this,null),s=-1;++s<i;)o.rowIdx=s,
r(o)&&n.push(s);var u=new a.core.TableView(this);return u.setSourceRows(n),u},filterMatchesRow:function(e,n){
var i=new t(this,n);return e.contains(i)},toJsonCda:function(){for(var e,t,n,i,o=this.getNumberOfColumns(),a=this.getNumberOfRows(),s=new Array(o),u=new Array(a),l=o,c=a;l--;)s[l]={
colIndex:l,colName:this.getColumnId(l),colLabel:this.getColumnLabel(l),colType:r(this.getColumnType(l)),
colIsKey:this.isColumnKey(l)};for(;c--;)for(u[c]=t=new Array(o),l=o;l--;)e=this.getCell(c,l),
n=e.value,i=e.label,t[l]=null==i?n:{v:n,f:i};return{metadata:s,resultset:u}}});return a;
}),define("pentaho/data/_OfAttribute",["../lang/Base","../util/arg"],function(e,t){
return e.extend("pentaho.data._OfAttribute",{constructor:function(e){this._attr=t.required(e,"attribute");
},get attribute(){return this._attr}})}),define("pentaho/lang/_Annotatable",["../lang/Base","../util/arg","../util/object"],function(e,t,n){
return e.extend("pentaho.lang._Annotatable",{constructor:function(e){this._annots=t.optional(e,"p");
},property:function(e,t){var i=this._annots;return arguments.length<2?i?n.getOwn(i,e):void 0:(i||(this._annots=i={}),
i[e]=t,this)}},{configure:function(e,t){var n=t.p;if(n){var i=e._annots;Object.keys(n).forEach(function(t){
i||(e._annots=i={}),i[t]=n[t]})}},toSpec:function(e,t){return t||(t={}),e._annots&&(t.p=n.cloneShallow(e._annots)),
t}})}),define("pentaho/data/Member",["./_OfAttribute","../lang/Base","../lang/_Annotatable","../util/arg","../util/error","../util/object"],function(e,t,n,i,r,o){
var a=t.extend("pentaho.data.Member",{constructor:function(e,t){this._ord=i.required(t,"ordinal","keyArgs"),
this.value=e.v,this.label=e.f,n.call(this,e)},elemName:"member",keyName:"value",get key(){
return this._key},get attribute(){throw new Error("abstract")},get ordinal(){return this._ord;
},get value(){return this.v},set value(e){if(null==e)throw r.argInvalid("value","Cannot be nully.");
this.v=e,this._key=o.getSameTypeKey(e)},get label(){return this.f},set label(e){this.f=null==e?void 0:String(e);
},toString:function(){var e;return null!=(e=this.f)?e:this.v.toString()},toSpec:function(){
var e={v:this.v};return null!=this.f&&(e.f=this.f),n.toSpec(this,e),e}}).implement(n);
return a.Adhoc=a.extend("pentaho.data.Member.Adhoc",{constructor:function(t,n){e.call(this,n),
this.base(t,n)}}).implement(e),a}),define("pentaho/data/Cell",["./_OfAttribute","./Member","../lang/Base","../lang/_Annotatable","../util/error","../util/object"],function(e,t,n,i,r,o){
var a=n.extend("pentaho.data.Cell",{constructor:function(e){null==e?this.value=null:"object"!=typeof e||e.constructor!==Object?this.value=e:(this.value=e.v,
this.label=e.f,i.call(this,e))},elemName:"cell",keyName:"value",get key(){return this._key;
},get attribute(){throw new Error("abstract")},get value(){return this.v},set value(e){
var t=this.attribute;e=t.cast(e);var n;if(null==e)this.v=null,n="";else{if(t.isContinuous)n=o.getSameTypeKey(e);else{
var i=t.members.getOrAdd("object"==typeof e?{v:e}:e);n=i.key}this.v=e}this._key=n;
},get isEmpty(){return null==this.v},get referent(){var e=this.v;return null==e?null:this.attribute.isContinuous?void 0:this.attribute.members.get(e);
},set referent(e){if(this.attribute.isContinuous)throw new Error("Invalid operation");
if(null==e)this.v=null;else{if(!this.attribute.members.includes(e))throw r.argInvalid("member","Not a member of the the cell's attribute.");
this.v=e.value}},get label(){var e,t;return null==(e=this.f)&&(t=this.referent)?t.label:e;
},set label(e){this.f=null==e?void 0:String(e)},get formatted(){var e=this.label;return void 0!==e?e:null;
},set formatted(e){this.label=e},valueOf:function(){return this.v},toString:function(){
var e;return null!=(e=this.label)?e:null!=(e=this.v)?e.toString():""},toSpec:function(){
var e=null,t=this.v,n=this.f;return this._annots?(e={},null!=t&&(e.v=t),null!=n&&(e.f=n),
e=i.toSpec(this,e)):null!=n?(e={},null!=t&&(e.v=t),e.f=n):null!=t&&(e=t),e}}).implement(i);
return a.Adhoc=a.extend("pentaho.data.Cell.Adhoc",{constructor:function(t,n){e.call(this,n),
this.base(t,n)}}).implement(e),a}),define("pentaho/data/StructurePosition",["./_OfAttribute","../lang/Base","../util/arg"],function(e,t,n){
var i=t.extend("pentaho.data.StructurePosition",{constructor:function(e){this._ord=n.required(e,"ordinal","keyArgs");
},elemName:"structure position",keyName:"name",get key(){return this._attr.key},get ordinal(){
return this._ord},get attribute(){throw new Error("abstract")},toSpec:function(e){
return this._attr&&(e||(e={}),e.attr=this._attr.name),e}});return i.Adhoc=i.extend("pentaho.data.StructurePosition.Adhoc",{
constructor:function(t){e.call(this,t),this.base(t)}}).implement(e),i}),define("pentaho/data/MemberCollection",["./Member","../lang/Collection","../util/arg"],function(e,t,n){
return t.extend("pentaho.data.MemberCollection",{constructor:function(e){this._attr=n.required(e,"attribute","keyArgs"),
this.base()},elemClass:e,get attribute(){return this._attr},_cachedKeyArgs:null,_cast:function(e,t){
var n=this._cachedKeyArgs||(this._cachedKeyArgs={ordinal:0});return n.ordinal=t,this._attr.toMemberOf(e,n);
},getOrAdd:function(e){return this.get(e)||this.add(e)}})}),define("pentaho/data/Attribute",["./Cell","./Member","./StructurePosition","./MemberCollection","../lang/_Annotatable","../lang/Base","../util/arg","../util/error","../util/date"],function(e,t,n,i,r,o,a,s,u){
function l(e,t){return"string"==typeof e?t.attributes.getExisting(e):e instanceof d?e:null;
}function c(e){if(null==e)return null;var t=Number(e);return isNaN(t)?null:t}function h(e){
return e}var d=o.extend("pentaho.data.Attribute",{constructor:function(o,l){if("string"==typeof o&&(o={
name:o}),this._ord=a.required(l,"ordinal","keyArgs"),this.name=o.name,!this.name)throw s.argRequired("spec.name");
this.label=null!=o.label?o.label:void 0,this.format=o.format||null;var d=o.type;d?(d=d.toLowerCase(),
"datetime"===d&&(d="date")):d="string",this.type=d,this.isContinuous="number"===d||"date"===d,
this.isKey=!!o.isKey,this._cast="number"===d?c:"date"===d?u.parseDateEcma262v7:h;var p={
attribute:this,ordinal:0};this.memberBase=new t.Adhoc({v:""},p),this.cellBase=new e.Adhoc({},p),
this.structurePositionBase=new n.Adhoc(p),this.isContinuous?"number"===d&&(this.isPercent=null!=o.isPercent&&!!o.isPercent):this.members=i.to(o.members||[],p),
r.call(this,o)},elemName:"attribute",keyName:"name",get key(){return this.name},get ordinal(){
return this._ord},cast:function(e){return this._cast(e)},toMemberOf:function(e,n){
if(null==e)throw s.argRequired("memberSpec");"object"!=typeof e&&(e={v:e});var i=Object.create(this.memberBase);
return t.call(i,e,n),i},toCellOf:function(t){var n=Object.create(this.cellBase);return e.call(n,t),
n},toStructurePositionOf:function(e){var t=Object.create(this.structurePositionBase);
return n.call(t,e),t},toSpec:function(){var e={name:this.name,label:this.label,type:this.type,
format:this.format,isKey:this.isKey};return this.isContinuous?e.isPercent=this.isPercent:e.members=this.members.toSpec(),
r.toSpec(this,e),e},toString:function(){return this.label||this.name}},{fromOfAttributeSpec:function(e,t){
if(!e)return null;var n=l(e,t);return!n&&e.attr&&(n=l(e.attr,t)),n}}).implement(r);
return d}),define("pentaho/data/AttributeCollection",["./Attribute","../lang/Collection"],function(e,t){
return t.extend("pentaho.data.AttributeCollection",{elemClass:e,_cachedKeyArgs:null,
_cast:function(t,n){var i=this._cachedKeyArgs||(this._cachedKeyArgs={ordinal:0});return i.ordinal=n,
e.to(t,i)}})}),define("pentaho/data/Model",["./AttributeCollection","../lang/Base","../lang/_Annotatable"],function(e,t,n){
return t.extend("pentaho.data.Model",{constructor:function(t){var i;t instanceof Array?(i=t,
t=null):t&&t.constructor===Object&&(i=t.attrs),this.attributes=e.to(i),this.format=t&&t.format||null,
n.call(this,t)},get keyAttributes(){return this.attributes.filter(function(e){return e.isKey;
})},get hasAnyKeyAttributes(){return this.attributes.some(function(e){return e.isKey;
})},toSpec:function(){var e={attrs:this.attributes.toSpec(),format:this.format};return n.toSpec(this,e);
}}).implement(n)}),define("pentaho/data/Structure",["./Attribute","./StructurePosition","../lang/Collection","../util/arg","../util/error","../util/object"],function(e,t,n,i,r,o){
function a(e){return e.attribute}function s(e){return e.attribute.name}function u(e,t){
if(!e)return null;var n=l(e,t);return!n&&e.attr&&(n=l(e.attr,t)),n}function l(t,n){
return"string"==typeof t?n.attributes.getExisting(t):t instanceof e?t:null}var c=n.extend("pentaho.data.Structure",{
constructor:function(e){this._model=i.required(e,"model","keyArgs"),this.base(e)},
_cachedKeyArgs:null,elemClass:t,_cast:function(e,n,i){return t.to(e,this._buildKeyArgs(i,n));
},_buildKeyArgs:function(e,t){if(e)return o.setPrototypeOf({model:this._model,ordinal:t
},e);var n=this._cachedKeyArgs||(this._cachedKeyArgs={model:this._model,ordinal:0
});return n.ordinal=t,n},getByOrdinalOrName:function(e,t){return"string"==typeof e?this.get(e,t):this[e];
},ordinalOf:function(e){var t=this.get(e);return t?t.ordinal:-1},toSpec:function(e){
return this.map(i.optional(e,"shareModel",!1)?a:s)}});return t.to=function(e,t){if(!e)throw r.argRequired("spec");
var n=i.required(t,"model","keyArgs"),o=u(e,n);if(!o)throw r.argRequired("spec.attr");
return o.toStructurePositionOf(t)},c}),define("pentaho/data/_plain/Row",["../../lang/Base","../../util/arg"],function(e,t){
var n=e.extend("pentaho.data._plain.Row",{constructor:function(e,n){this.c=t.required(n,"rows").toCellTuple(e.c||[],n);
},get cells(){return this.c},toSpec:function(){return{c:this.c.toSpec()}},_onStructurePositionAdded:function(){
this.c._onStructurePositionAdded()}},{to:function(e,t){return e instanceof n?e:(e instanceof Array&&(e={
c:e}),new this(e,t))}});return n}),define("pentaho/data/_WithStructure",["../lang/Base","../util/arg"],function(e,t){
return e.extend("pentaho.data._WithStructure",{constructor:function(e){this._structure=t.required(e,"structure","keyArgs");
},get structure(){return this._structure}})}),define("pentaho/data/CellTuple",["./Cell","./_WithStructure","../lang/List"],function(e,t,n){
var i=n.extend("pentaho.data.CellTuple",{constructor:function(){this.base();for(var e=this.length,t=this.structure.length;e++<t;)this.add(null);
},elemName:"CellTuple",keyName:"key",_key:null,get key(){var e=this._key;return null==e&&(e=this._key=this.map(function(e){
return e.key}).join("~")),e},_label:null,get label(){var e=this._label;return null==e&&(e=this._label=this.map(function(e){
return e.label}).join("~")),e},elemClass:e,_cast:function(e,t){var n=this.structure[t];
if(!n)throw new Error("Cell tuple has out-of-bounds cells.");return n.attribute.toCellOf(e);
},get structure(){throw new Error("abstract")},has:function(e){return null!=this.get(e,!1);
},get:function(e,t){var n=this.structure.ordinalOf(e);if(n>=0)return this[n];if(t)throw new Error("A cell is not defined for attribute '"+e+"'.");
return null},getByOrdinalOrName:function(e,t){return"string"==typeof e?this.get(e,t):this[e];
},getExisting:function(e){return this.get(e,!0)},_onStructurePositionAdded:function(){
this.add(null)}});return i.Adhoc=i.extend("pentaho.data.AdhocCellTuple",{constructor:function(e){
t.call(this,e),this.base()}}).implement(t),i}),define("pentaho/data/_WithCellTupleBase",["./CellTuple","../lang/Base","../util/error","../util/object"],function(e,t,n,i){
return t.extend("pentaho.data._WithCellTupleBase",{constructor:function(t){this.cellTupleBase=e.Adhoc.to([],t),
this.cellTupleBase.constructor=e.Adhoc},toCellTuple:function(t,r){if(t instanceof e)return t;
if(!(t instanceof Array))throw n.argInvalidType("cellSpecs","Array");var o=i.setPrototypeOf(t,this.cellTupleBase);
return e.call(o,r),o}})}),define("pentaho/data/_plain/RowList",["./Row","../_WithStructure","../_WithCellTupleBase","../../lang/List","../../util/object"],function(e,t,n,i,r){
return i.extend("pentaho.data._plain.RowList",{constructor:function(e){t.call(this,e),
n.call(this,e),this.base(e)},elemName:"row",_cachedKeyArgs:null,elemClass:e,_cast:function(t,n,i){
return e.to(t,this._buildKeyArgs(i))},_buildKeyArgs:function(e){return e?r.setPrototypeOf({
rows:this},e):this._cachedKeyArgs||(this._cachedKeyArgs={rows:this})},_onStructurePositionAdded:function(){
this.cellTupleBase._onStructurePositionAdded(),this.forEach(function(e){e._onStructurePositionAdded();
})}}).implement(t,n)}),define("pentaho/data/_plain/Table",["../Structure","./RowList","../../lang/Base","../../util/arg","../../util/error"],function(e,t,n,i,r){
return n.extend("pentaho.data._plain.Table",{constructor:function(n,o){if(!n)throw r.argRequired("spec");
this.model=i.required(o,"model","keyArgs"),this.cols=e.to(n.cols||this.model.attributes.slice(),{
model:this.model}),this.rows=t.to(n.rows||[],{structure:this.cols})},getCell:function(e,t){
return this.rows[e].cells[t]},getNumberOfColumns:function(){return this.cols.length;
},getNumberOfRows:function(){return this.rows.length},getColumnAttribute:function(e){
return this.cols[e].attribute},getColumnType:function(e){return this.getColumnAttribute(e).type;
},getColumnId:function(e){return this.getColumnAttribute(e).name},getColumnLabel:function(e){
return this.getColumnAttribute(e).label},isColumnKey:function(e){return this.getColumnAttribute(e).isKey;
},getValue:function(e,t){return this.getCell(e,t).value},getValueKey:function(e,t){
return this.getCell(e,t).key},getFormattedValue:function(e,t){return this.getCell(e,t).toString();
},getLabel:function(e,t){return this.getCell(e,t).label},addColumn:function(e,t){
var n=this.cols.add(e,t).ordinal;return this.rows._onStructurePositionAdded(),n},
addRow:function(e,t){var n=this.rows.length;return this.rows.add(e,t),n},toSpec:function(e){
return{cols:this.cols.toSpec(e),rows:this.rows.toSpec()}}})}),define("pentaho/data/_cross/AxisPosition",["../../lang/Base","../../util/arg"],function(e,t){
return e.extend("pentaho.data._cross.AxisPosition",{constructor:function(e,n){this._cells=t.required(e,"cells","spec"),
this._ord=t.required(n,"ordinal","keyArgs")},elemName:"axis position",keyName:"key",
get key(){return this._cells.key},get ordinal(){return this._ord},get cells(){return this._cells;
},toSpec:function(){return this._cells.toSpec()}})}),define("pentaho/data/_cross/Axis",["./AxisPosition","../Structure","../_WithStructure","../_WithCellTupleBase","../../lang/Collection"],function(e,t,n,i,r){
return r.extend("pentaho.data._cross.Axis",{constructor:function(e){n.call(this,e),
i.call(this,e),this.base()},_cachedKeyArgs:null,_cachedPosSpec:null,elemClass:e,_cast:function(t,n){
var i=this._cachedKeyArgs||(this._cachedKeyArgs={ordinal:0}),r=this._cachedPosSpec||(this._cachedPosSpec={
cells:null});i.ordinal=n,r.cells=this.toCellTuple(t);var o=new e(r,i);return r.cells=null,
o},_castKey:function(e){return"string"==typeof e?e:this.toCellTuple(e)},intern:function(e){
var t=this.toCellTuple(e);return this.get(t.key)||this.add(t)},toSpec:function(){
return this.map(function(e){return e.toSpec()})}}).implement(n,i)}),define("pentaho/data/_cross/MeasureCellSet",["../Structure","../../lang/Base","../../util/arg"],function(e,t,n){
var i=t.extend("pentaho.data._cross.MeasureCellSet",{constructor:function(e,t){switch(this._structure=n.required(t,"structure","keyArgs"),
this._structure.length){case 0:this._cube=null;break;case 1:this._cube=new a(t);break;
default:this._cube=new o(t)}e&&this._load(e)},get structure(){return this._structure;
},get:function(e,t,n,i){var r=this._structure[null==n?0:n].attribute;return this._cube.get(e,t,r,i);
},getByName:function(e,t,n,i){var r=this._structure.getExisting(n).attribute;return this._cube.get(e,t,r,i);
},getByAttribute:function(e,t,n,i){return this._cube.get(e,t,n,i)},setByAttribute:function(e,t,n,i){
return this._cube.setByAttribute(e,t,n,i)},_load:function(e){for(var t=-1,n=e.length,i=this._structure.toSpec({
shareModel:!0});++t<n;)for(var r=e[t],o=-1,a=r.length;++o<a;){var s=r[o];if(s instanceof Array)for(var u=-1,l=s.length;++u<l;)this.set(t,o,i[u],s[u]);else this.set(t,o,i[0],s);
}},_onColAdded:function(){this._cube&&this._cube._onColAdded()}}),r=t.extend("pentaho.data._cross.MeasureCube",{
constructor:function(e){this._C=n.optional(e,"C",0),this._cube=[]},_getRow:function(e,t){
var n=this._cube;return n[e]||(t?null:n[e]=new Array(this._C))},_onColAdded:function(){
this._C++;for(var e=this._cube,t=-1,n=e.length;++t<n;)e[t].push(null)}}),o=r.extend("pentaho.data._cross.MultiMeasureCube",{
constructor:function(e){var t=n.required(e,"structure","keyArgs");this.base(e);var i=this._measHolderBase={};
t.forEach(function(e){i[e.attribute.name]=null})},get:function(e,t,n,i){var r=this._getRowCol(e,t,i);
return r?r[n.name]||(i?null:r[n.name]=n.toCellOf(null)):null},setByAttribute:function(e,t,n,i){
var r=this._getRowCol(e,t);return r[n.name]=n.toCellOf(i)},_getRowCol:function(e,t,n){
var i=this._getRow(e,n);if(!i)return null;var r=i[t];if(!r){if(n)return null;i[t]=r=Object.create(this._measHolderBase);
}return r}}),a=r.extend("pentaho.data._cross.SingleMeasureCube",{get:function(e,t,n,i){
var r=this._getRow(e,i);return r?r[t]||(i?null:r[t]=n.toCellOf(null)):null},setByAttribute:function(e,t,n,i){
return this._getRow(e)[t]=n.toCellOf(i)}});return i}),define("pentaho/data/_cross/Table",["../Structure","./Axis","./MeasureCellSet","../../lang/Base","../../util/arg","../../util/error","../../util/object"],function(e,t,n,i,r,o,a){
return i.extend("pentaho.data._cross.Table",{constructor:function(n,i){var o=r.required(i,"model","keyArgs"),a=r.optional(n,"layout"),s={
model:o},u={rows:e.to(a&&a.rows||[],s),cols:e.to(a&&a.cols||[],s),meas:e.to(a&&a.meas||[],s)
};this.model=o,this.layout=u,this._xR=u.rows.length,this._xC=u.cols.length,this._xM=u.meas.length,
this.rows=t.to([],{structure:u.rows}),this.cols=t.to([],{structure:u.cols}),this._micColsIndex={},
this.meas=null,n.meas?this._loadDataCube(n):this._loadDataMic(n)},_micCols:null,_micColsIndex:null,
_getMicColKey:function(e){if(this._xC){var t=this.cols[e.ordinal].key;return t+(e.attribute?"~"+e.attribute.name:"");
}return e.attribute.name},_getMicColLabel:function(e){if(this._xC){var t=this.cols[e.ordinal].cells.label;
return t+(e.attribute?"~"+e.attribute.label:"")}return e.attribute.label},_setMicCol:function(e,t,n){
n?this._setMicColCore(e,t,n.ordinal,n.attribute):this._setMicColCore(e,t,-1,null);
},_setMicColCore:function(e,t,n,i){return this._micColsIndex[t+"~"+n]=e,this._micCols[e]={
ordinal:t,attrOrdinal:n,attribute:i}},_hasMicCol:function(e,t){if(null==e)return!1;
var n=e+"~"+(t?t.ordinal:-1);return a.hasOwn(this._micColsIndex,n)},_buildFullMicView:function(){
var e=this.cols.length,t=this._xM;if(t){var n=e*t,i=this.layout.meas;for(this._micCols=new Array(n);e--;)for(var r=t;r--;)this._setMicCol(--n,e,i[r]);
}else for(;e--;)this._setMicCol(e,e,null)},_loadDataCube:function(e){e.rows&&this.rows.addMany(e.rows),
e.cols&&this.cols.addMany(e.cols);var t=this.layout.meas;this.meas=new n(e.meas,{
structure:t,C:this.cols.length});var i=e.micCols;if(i){this._micCols=new Array(i.length);
var r=t.length;i.forEach(function(e,n){this._setMicCol(n,e.o,r?t[e.a]:null)},this);
}else this._buildFullMicView()},_loadDataMic:function(e){var t=e&&e.cols||[],i=e&&e.rows||[],r=t.length,a=i.length,s=r-this._xR;
if(0>s&&(this._xC||this._xM))throw o.argInvalid("spec.cols","As many columns as row attributes are required when there are measure and/or column attributes.");
if(r&&this._xR&&this._processCrossRowColumns(t),s>0){this._micCols=new Array(s);for(var u=this._xR-1;++u<r;)this._addCrossCol(t[u],u);
}else this._micCols=[];this.meas=new n(null,{structure:this.layout.meas,C:this.cols.length
}),a>0&&(this._xR||this._xM)&&this._processCrossRows(i)},_processCrossRowColumns:function(e){
for(var t=this.rows.structure,n=Math.min(e.length,this._xR);n--;){var i=e[n],r=t[n].attribute,o=i&&"object"==typeof i?i.attr:i;
if(null!=o&&o!==r.name)throw new Error("Invalid cross-table - attribute mismatch: '"+o+"'. Expected: '"+r.name+"'.");
}},_addCrossCol:function(e,t){if(null==e)throw o.argRequired("cols["+t+"]");var n,i=t-this._xR,r=this._xC,a=this._xM;
if(r){if("object"!=typeof e)throw o.argInvalidType("cols["+t+"]","object");n=e.attr;
}else{if(!a)throw o.argInvalid("cols["+t+"]","Cannot have cross-columns when there are no measure and no column attributes.");
n=e&&"object"==typeof e?e.attr:e}var s;if(a)if(null==n){if(a>1)throw o.argInvalid("cols["+t+"].attr","Required when there is more than one measure.");
s=this.layout.meas[0]}else s=this.layout.meas.getExisting(n);else{if(null!=n)throw o.argInvalid("cols["+t+"].attr","Cannot be specified when there are no measures.");
s=null}var u,l;if(r){l=this.cols.toCellTuple(e.c);var c=this.cols.get(l.key);c&&(u=c.ordinal);
}else u=0;if(this._hasMicCol(u,s))throw o.argInvalid("cols["+t+"]","Duplicate column cell tuple and measure attribute.");
return r?null==u&&(u=this.cols.add(l).ordinal):i||this.cols.intern([]),this._setMicCol(i,u,s);
},get _isDegenerateCrossRow(){return!this._xR&&!!this._xM},_processCrossRows:function(e){
this._isDegenerateCrossRow&&this.rows.intern([]);for(var t=-1,n=e.length;++t<n;)this._addRow(e[t],t);
},_addRow:function(e,t){if(!e)throw o.argRequired("rows["+t+"]");var n;if(e instanceof Array)n=e;else if(n=e.c,
!(n instanceof Array))throw o.argInvalid("rows["+t+"].c","Not an array.");var i;if(this._isDegenerateCrossRow)i=0;else{
var r=n.splice(0,this._xR);i=this.rows.intern(r).ordinal}if(t!==i)throw o.argInvalid("rows["+t+"].c","Duplicate row tuple.");
if(this._xM){var a=this._micCols;if(a.length)for(var s,u=-1,l=Math.min(a.length,n.length),c=this.meas;++u<l;)null!=(s=n[u])&&c.setByAttribute(i,a[u].ordinal,a[u].attribute,s);
}},getCell:function(e,t){var n=t-this._xR;if(0>n)return this.rows[e].cells[t];var i=this._micCols[n];
return this.meas.getByAttribute(e,i.ordinal,i.attribute)},getNumberOfColumns:function(){
return this._xR+this._micCols.length},getNumberOfRows:function(){return this.rows.length;
},getColumnAttribute:function(e){var t=e-this._xR;return 0>t?this.layout.rows[e].attribute:this._micCols[t].attribute;
},getColumnType:function(e){var t=this.getColumnAttribute(e);return t?t.type:void 0;
},isColumnKey:function(e){var t=this.getColumnAttribute(e);return t?t.isKey:void 0;
},getColumnId:function(e){var t=e-this._xR;return 0>t?this.layout.rows[e].attribute.name:this._getMicColKey(this._micCols[t]);
},getColumnLabel:function(e){var t=e-this._xR;return 0>t?this.layout.rows[e].attribute.label:this._getMicColLabel(this._micCols[t]);
},getValue:function(e,t){return this.getCell(e,t).value},getValueKey:function(e,t){
return this.getCell(e,t).key},getFormattedValue:function(e,t){return this.getCell(e,t).toString();
},getLabel:function(e,t){return this.getCell(e,t).label},addColumn:function(e){var t=this.cols,n=t.length,i=this.getNumberOfColumns();
return this._addCrossCol(e,i),t.length>n&&this.meas._onColAdded(),i},addRow:function(e){
var t=this.rows.length;return this._addRow(e,t),t},toSpec:function(e){var t=this.layout;
return{layout:{rows:t.rows.toSpec(e),cols:t.cols.toSpec(e),meas:t.meas.toSpec(e)},
rows:this.rows.toSpec(),cols:this.cols.toSpec(),meas:this.meas.toSpec(),micCols:this._micCols.map(function(e){
return{o:e.ordinal,a:e.attrOrdinal}})}},toSpecPlain:function(e){for(var t=this.rows,n=this.cols,i=this.meas,r=t.length,o=n.length,s=Math.max(1,r),u=Math.max(1,o),l=this._xR,c=this._xC,h=this._xM,d=l+c,p=d+h,f=[],_=[].concat(t.structure.toSpec(e),n.structure.toSpec(e),i.structure.toSpec(e)),g=h>0&&!!a.getOwn(e,"skipRowsWithAllNullMeasures"),m=-1;++m<s;)for(var y=r?t[m].cells:null,v=-1;++v<u;){
var b,C,O=new Array(p);if(r)for(C=l;C--;)O[C]=y[C].toSpec();if(o)for(C=c,b=n[v].cells;C--;)O[l+C]=b[C].toSpec();
C=h;for(var x=g;C--;){var w=i.get(m,v,C,!0),A=w&&w.toSpec();x&&null!==A&&(x=!1),O[d+C]=A;
}x||f.push({c:O})}return{cols:_,rows:f}}})}),define("pentaho/data/_Table",["./_AbstractTable","./Model","./_plain/Table","./_cross/Table","./AtomicTypeName","../util/arg","../util/object"],function(AbstractTable,Model,PlainTable,CrossTable,AtomicTypeName,arg,O){
var COLTYPE_CDA_DT={numeric:AtomicTypeName.NUMBER,integer:AtomicTypeName.NUMBER,blob:AtomicTypeName.STRING,
string:AtomicTypeName.STRING,"boolean":AtomicTypeName.BOOLEAN,date:AtomicTypeName.DATE
},Table=AbstractTable.extend("pentaho.data.Table",{constructor:function(e){var t=this._readTableArgument(e),n=t.model,i=t.layout?CrossTable:PlainTable;
this.model=Model.to(n),this.implem=new i(t,{model:this.model}),this.isPlainTable||(this._cachedPlainTable=null);
},getCell:function(e,t){return this.implem.getCell(e,t)},getNumberOfColumns:function(){
return this.implem.getNumberOfColumns()},getNumberOfRows:function(){return this.implem.getNumberOfRows();
},getColumnAttribute:function(e){return this.implem.getColumnAttribute(e)},getColumnType:function(e){
return this.implem.getColumnType(e)},getColumnId:function(e){return this.implem.getColumnId(e);
},isColumnKey:function(e){return this.implem.isColumnKey(e)},getColumnLabel:function(e){
return this.implem.getColumnLabel(e)},getValue:function(e,t){return this.implem.getValue(e,t);
},getValueKey:function(e,t){return this.implem.getValueKey(e,t)},getFormattedValue:function(e,t){
return this.implem.getFormattedValue(e,t)},getLabel:function(e,t){return this.implem.getLabel(e,t);
},addColumn:function(e,t){return this.isPlainTable||(this._cachedPlainTable=null),
this.implem.addColumn(e,t)},addRow:function(e,t){return this.isPlainTable||(this._cachedPlainTable=null),
this.implem.addRow(e,t)},_readTableArgument:function(table){return table?table instanceof AbstractTable?table.toSpec():("string"==typeof table&&(table=eval("("+table+")")),
table.metadata?Table.convertJsonCdaToTableSpec(table):table):{cols:[]}},get isCrossTable(){
return this.implem instanceof CrossTable},get isPlainTable(){return this.implem instanceof PlainTable;
},toPlainTable:function(e){if(this.isPlainTable)return this;var t=!!O.getOwn(e,"skipRowsWithAllNullMeasures"),n=t?"_cachedPlainTableNoNulls":"_cachedPlainTable",i=this[n];
return i||(i=this[n]=new Table(this.toSpecPlain({shareModel:!0,skipRowsWithAllNullMeasures:t
})),i.originalCrossTable=this),i},toSpecPlain:function(e){return this._toSpec(e,!0);
},toSpec:function(e){return this._toSpec(e,!1)},_toSpec:function(e,t){var n=!t||this.isPlainTable?this.implem.toSpec(e):this.implem.toSpecPlain(e);
return n.model=arg.optional(e,"shareModel")?this.model:this.model.toSpec(),n}},{convertJsonCdaToTableSpec:function(e){
var t,n=e.metadata,i=e.resultset,r=n.length,o=i.length,a=new Array(r),s=new Array(o);
for(t=-1;++t<r;){var u=n[t],l=String(u.colType||"string").toLowerCase();COLTYPE_CDA_DT.hasOwnProperty(l)&&(l=COLTYPE_CDA_DT[l]);
var c=a[t]={name:u.colName,type:l,label:u.colLabel||u.colName};null!=u.colIsKey&&(c.isKey=u.colIsKey);
}for(var h=-1;++h<o;){var d=i[h],p=new Array(r);for(t=r;t--;){var f=d[t];p[t]=null==f?null:"object"==typeof f&&"v"in f?f:{
v:f,f:null}}s[h]={c:p}}return{model:a,rows:s}}});return Table}),define("pentaho/data/_TableView",["./_AbstractTable","./_Table","../lang/_Annotatable","../util/error"],function(e,t,n,i){
"use strict";var r=e.extend("pentaho.data.TableView",{constructor:function(e){if(!e)throw i.argRequired("table");
this._source=e,this.model=e.model,this._rows=null,this._columns=this._getSourceColumns();
},getSourceTable:function(){return this._source},getRootSourceTable:function(){for(var e=this._source;e instanceof r;)e=e._source;
return e},setSourceColumns:function(e){return this._columns=e?e.slice():this._getSourceColumns(),
this},getSourceColumns:function(){return this._columns},setSourceRows:function(e){
return this._rows=e||null,this},getSourceRows:function(){return this._rows},getSourceColumnIndex:function(e){
return this._columns[e]},getSourceRowIndex:function(e){return this._rows?this._rows[e]:e;
},getCell:function(e,t){return this._source.getCell(this.getSourceRowIndex(e),this.getSourceColumnIndex(t));
},getNumberOfColumns:function(){return this._columns.length},getNumberOfRows:function(){
return this._rows?this._rows.length:this._source.getNumberOfRows()},getColumnAttribute:function(e){
return this._source.getColumnAttribute(this.getSourceColumnIndex(e))},getColumnType:function(e){
return this._source.getColumnType(this.getSourceColumnIndex(e))},getColumnId:function(e){
return this._source.getColumnId(this.getSourceColumnIndex(e))},getColumnLabel:function(e){
return this._source.getColumnLabel(this.getSourceColumnIndex(e))},isColumnKey:function(e){
return this._source.isColumnKey(this.getSourceColumnIndex(e))},getValue:function(e,t){
return this._source.getValue(this.getSourceRowIndex(e),this.getSourceColumnIndex(t));
},getValueKey:function(e,t){return this._source.getValueKey(this.getSourceRowIndex(e),this.getSourceColumnIndex(t));
},getFormattedValue:function(e,t){return this._source.getFormattedValue(this.getSourceRowIndex(e),this.getSourceColumnIndex(t));
},getLabel:function(e,t){return this._source.getLabel(this.getSourceRowIndex(e),this.getSourceColumnIndex(t));
},addColumn:function(e,t){var n=this._source.addColumn(e,t);return this._columns.push(n)-1;
},addRow:function(e,t){throw new Error("Not implemented")},_getSourceColumns:function(){
for(var e=this._source.getNumberOfColumns(),t=new Array(e);e--;)t[e]=e;return t},
hideColumns:function(e){var t=this._columns;if(t.length){var n,i={};for(n=e.length;n--;)i[e[n]]=1;
for(n=t.length;n--;)1===i[t[n]]&&t.splice(n,1)}return this},toDataTable:function(){
return new t(this.toSpec())},toSpec:function(){for(var e=this.getNumberOfColumns(),t=new Array(e),i=-1;++i<e;){
var r,o=this.getColumnId(i),a=this.getColumnAttribute(i);a?(r=a.toSpec(),o!==a.name&&(r.name=o,
r.label=this.getColumnLabel(i))):r={name:o,label:this.getColumnLabel(i),type:"string"
},t[i]=r}var s=n.toSpec(this.model,{attrs:t});return{model:s,rows:this._getJsonRows()
}},_getJsonRows:function(){for(var e=this.getNumberOfColumns(),t=this.getNumberOfRows(),n=new Array(t),i=-1;++i<t;){
for(var r=e,o=new Array(e);r--;)o[r]=this.getCell(i,r).toSpec();n[i]={c:o}}return n;
}});return r}),define("pentaho/data/AbstractTable",["./_AbstractTable","./_Table","./_TableView"],function(e,t,n){
"use strict";return e.core={Abstract:e,Table:t,TableView:n},e}),define("pentaho/data/Table",["./AbstractTable"],function(e){
"use strict";return e.core.Table}),define("pentaho/data/TableView",["./AbstractTable"],function(e){
"use strict";return e.core.TableView}),define("pentaho/data/filter/_core/Tree",["pentaho/module!../Tree","pentaho/util/error"],function(e,t){
"use strict";return function(n){n.Tree=n.Abstract.extend("pentaho.data.filter.Tree",{
get isTerminal(){return!1},_buildContentKey:function(){return this.operands.toArray(function(e){
return e.$contentKey}).sort().join(" ")},negate:function(){var e=this.operands.toArray(function(e){
return e.negate()}),t=this._inverseClass;return new t({operands:e})},_operation:function(){
var e=arguments.length;if(!e)return this;for(var t,n=this.constructor,i=this.operands.toArray(),r=i.length,o=-1;++o<e;)if(t=arguments[o])if(t instanceof n)for(var a=t.operands,s=a.count,u=-1;++u<s;)i.push(a.at(u));else i.push(t);
switch(i.length){case r:return this;case 1:return i[0]}return new n({operands:i});
},_visitDefault:function(e){var t=this.visitOperands(e);return t?new this.constructor({
operands:t}):this},visitOperands:function(e,n){if(!e)throw t.argRequired("transformer");
for(var i=n&&n.where,r=null,o=this.operands,a=o.count,s=-1;++s<a;){var u=o.at(s),l=!i||i(u)?u.visit(e):null;
if(r||!l||l!==u){if(!r){r=[];for(var c=-1;++c<s;)r.push(o.at(c))}l&&r.push(l)}}return r;
},get __equalityLiteralsByPropertyName(){return this.__equalityLiteralsByName||(this.__equalityLiteralsByName=Object.freeze(this.__buildEqualityLiteralsByName()));
},__equalityLiteralsByName:null,__buildEqualityLiteralsByName:function(){for(var e,t,n={},i=this.operands,r=i.count;r--;)e=i.at(r),
t=e.isNot?e.operand:e,"isEqual"===t.kind&&(n[t.property]={operand:e,index:r});return n;
},$type:{id:e.id,isAbstract:!0,props:[{name:"operands",nameAlias:"o",valueType:[n.Abstract],
isBoundary:!0}]}})}}),define("pentaho/data/filter/KnownFilterKind",[],function(){
"use strict";var e={And:"and",Or:"or",Not:"not",IsEqual:"isEqual",IsIn:"isIn",IsGreater:"isGreater",
IsLess:"isLess",IsGreaterOrEqual:"isGreaterOrEqual",IsLessOrEqual:"isLessOrEqual",
IsLike:"isLike",True:"true",False:"false"};return e}),define("pentaho/data/filter/_core/And",["pentaho/module!../And","../KnownFilterKind"],function(e,t){
"use strict";return function(n){n.And=n.Tree.extend("pentaho.data.filter.And",{get kind(){
return t.And},_compile:function(){var e=this.operands.toArray(function(e){return e.compile();
}),t=e.length;return function(n){for(var i=-1;++i<t;)if(!e[i](n))return!1;return!0;
}},and:function(){return this._operation.apply(this,arguments)},get _inverseClass(){
return n.Or},$type:{id:e.id}})}}),define("pentaho/data/filter/_core/Or",["pentaho/module!../Or","../KnownFilterKind"],function(e,t){
"use strict";return function(n){n.Or=n.Tree.extend("pentaho.data.filter.Or",{get kind(){
return t.Or},_compile:function(){var e=this.operands.toArray(function(e){return e.compile();
}),t=e.length;return function(n){for(var i=-1;++i<t;)if(e[i](n))return!0;return!1;
}},or:function(){return this._operation.apply(this,arguments)},get _inverseClass(){
return n.And},$type:{id:e.id}})}}),define("pentaho/data/filter/_core/Not",["pentaho/module!../Not","../KnownFilterKind"],function(e,t){
"use strict";return function(n){n.Not=n.Abstract.extend("pentaho.data.filter.Not",{
get kind(){return t.Not},get isTerminal(){return!1},get isNot(){return!0},_buildContentKey:function(){
var e=this.operand;return e?e.$contentKey:""},_compile:function(){var e=this.operand.compile();
return function(t){return!e(t)}},_visitDefault:function(e){var t=this.operand;if(t){
var n=t.visit(e);return n!==t?n.negate():this}return this},negate:function(){return this.operand||new n.Not({
operand:this})},$type:{id:e.id,props:[{name:"operand",nameAlias:"o",valueType:n.Abstract,
isRequired:!0,isBoundary:!0}]}})}}),define("pentaho/data/filter/_core/True",["pentaho/module!../True","../KnownFilterKind"],function(e,t){
"use strict";return function(n){var i;n.True=n.Abstract.extend("pentaho.data.filter.True",{
constructor:function(){return i?i:(i=this,void this.base())},get kind(){return t.True;
},get isTerminal(){return!0},_buildContentKey:function(){return""},_compile:function(){
return function(){return!0}},negate:function(){return n.False.instance},$type:{id:e.id
}},{get instance(){return i||(i=new this)}})}}),define("pentaho/data/filter/_core/False",["pentaho/module!../False","../KnownFilterKind"],function(e,t){
"use strict";return function(n){var i=null;n.False=n.Abstract.extend("pentaho.data.filter.False",{
constructor:function(){return i?i:(i=this,void this.base())},get kind(){return t.False;
},get isTerminal(){return!0},_buildContentKey:function(){return""},_compile:function(){
return function(){return!1}},negate:function(){return n.True.instance},$type:{id:e.id
}},{get instance(){return i||(i=new this)}})}}),define("pentaho/data/filter/_core/Property",["pentaho/module!../Property"],function(e){
"use strict";return function(t){t.Property=t.Abstract.extend({get isProperty(){return!0;
},$type:{id:e.id,isAbstract:!0,props:[{name:"property",nameAlias:"p",valueType:"string",
isRequired:!0}]}})}}),define("pentaho/data/filter/_core/IsEqual",["pentaho/module!../IsEqual","../KnownFilterKind"],function(e,t){
"use strict";return function(n){n.IsEqual=n.Property.extend({get kind(){return t.IsEqual;
},_compile:function(){var e=this.property,t=this.value;return function(n){var i=n.getv(e,!0);
return i===t||null!=i&&null!=t&&i.valueOf()===t.valueOf()}},_buildContentKey:function(){
var e=this.get("value");return(this.property||"")+" "+(e?e.$key:"")},$type:{id:e.id,
props:[{name:"value",nameAlias:"v",valueType:"element",isBoundary:!0}]}})}}),define("pentaho/data/filter/_core/IsIn",["pentaho/module!../IsIn","../KnownFilterKind"],function(e,t){
"use strict";return function(n){n.IsIn=n.Property.extend({get kind(){return t.IsIn;
},_compile:function(){var e=this.property,t=this.values.toArray(function(e){return e.valueOf();
}),n=t.length;return function(i){var r=i.getv(e,!0);if(null!==r)for(var o=-1;++o<n;)if(t[o]===r)return!0;
return!1}},_buildContentKey:function(){return(this.property||"")+" "+this.values.toArray(function(e){
return e.$key}).join(" ")},$type:{id:e.id,props:[{name:"values",nameAlias:"v",valueType:["element"],
isBoundary:!0}]}})}}),define("pentaho/data/filter/_core/IsGreater",["pentaho/module!../IsGreater","../KnownFilterKind"],function(e,t){
"use strict";return function(n){n.IsGreater=n.Property.extend({get kind(){return t.IsGreater;
},negate:function(){return new n.IsLessOrEqual({property:this.property,value:this.value
})},_compile:function(){var e=this.property,t=this.value;return function(n){var i=n.getv(e,!0);
return null!==i&&t>i}},_buildContentKey:function(){var e=this.get("value");return(this.property||"")+" "+(e?e.$key:"");
},$type:{id:e.id,props:[{name:"value",nameAlias:"v",valueType:"element",isRequired:!0,
isBoundary:!0}]}})}}),define("pentaho/data/filter/_core/IsLess",["pentaho/module!../IsLess","../KnownFilterKind"],function(e,t){
"use strict";return function(n){n.IsLess=n.Property.extend({get kind(){return t.IsLess;
},negate:function(){return new n.IsGreaterOrEqual({property:this.property,value:this.value
})},_compile:function(){var e=this.property,t=this.value;return function(n){var i=n.getv(e,!0);
return null!==i&&i>t}},_buildContentKey:function(){var e=this.get("value");return(this.property||"")+" "+(e?e.$key:"");
},$type:{id:e.id,props:[{name:"value",nameAlias:"v",valueType:"element",isRequired:!0,
isBoundary:!0}]}})}}),define("pentaho/data/filter/_core/IsGreaterOrEqual",["pentaho/module!../IsGreaterOrEqual","../KnownFilterKind"],function(e,t){
"use strict";return function(n){n.IsGreaterOrEqual=n.Property.extend({get kind(){
return t.IsGreaterOrEqual},negate:function(){return new n.IsLess({property:this.property,
value:this.value})},_compile:function(){var e=this.property,t=this.value;return function(n){
var i=n.getv(e,!0);return null!==i&&t>=i}},_buildContentKey:function(){var e=this.get("value");
return(this.property||"")+" "+(e?e.$key:"")},$type:{id:e.id,props:[{name:"value",
nameAlias:"v",valueType:"element",isRequired:!0,isBoundary:!0}]}})}}),define("pentaho/data/filter/_core/IsLessOrEqual",["pentaho/module!../IsLessOrEqual","../KnownFilterKind"],function(e,t){
"use strict";return function(n){n.IsLessOrEqual=n.Property.extend({get kind(){return t.IsLessOrEqual;
},negate:function(){return new n.IsGreater({property:this.property,value:this.value
})},_compile:function(){var e=this.property,t=this.value;return function(n){var i=n.getv(e,!0);
return null!==i&&i>=t}},_buildContentKey:function(){var e=this.get("value");return(this.property||"")+" "+(e?e.$key:"");
},$type:{id:e.id,props:[{name:"value",nameAlias:"v",valueType:"element",isRequired:!0,
isBoundary:!0}]}})}}),define("pentaho/data/filter/_core/IsLike",["pentaho/module!../IsLike","../KnownFilterKind"],function(e,t){
"use strict";return function(n){n.IsLike=n.Property.extend({get kind(){return t.IsLike;
},_compile:function(){var e=this.property,t=this.anchorStart,n=this.anchorEnd,i=this.isCaseInsensitive,r=this.getf("value")||this.value.toString();
return i&&(r=r.toLowerCase()),function(o){var a;if(null==(a=o.getf(e,!0))&&null==(a=o.getv(e,!0)))return!1;
var s;return s=i?a.toLowerCase().indexOf(r):a.indexOf(r),s>-1&&(!t||0===s)&&(!n||s+r.length===a.length);
}},_buildContentKey:function(){var e=this.get("value"),t=this.get("anchorStart"),n=this.get("anchorEnd"),i=this.get("isCaseInsensitive");
return(this.property||"")+" "+(e?e.$type.isSimple?e.$contentKey:e.$key:"")+" "+(t?t.$key:"")+" "+(n?n.$key:"")+" "+(i?i.$key:"");
},$type:{id:e.id,props:[{name:"value",nameAlias:"v",valueType:"element",isRequired:!0,
isBoundary:!0},{name:"anchorStart",nameAlias:"s",valueType:"boolean",defaultValue:!1
},{name:"anchorEnd",nameAlias:"e",valueType:"boolean",defaultValue:!1},{name:"isCaseInsensitive",
nameAlias:"ci",valueType:"boolean",defaultValue:!1}]}})}}),define("pentaho/data/filter/Abstract",["module","pentaho/type/Complex","./_core/Tree","./_core/And","./_core/Or","./_core/Not","./_core/True","./_core/False","./_core/Property","./_core/IsEqual","./_core/IsIn","./_core/IsGreater","./_core/IsLess","./_core/IsGreaterOrEqual","./_core/IsLessOrEqual","./_core/IsLike","pentaho/util/arg","pentaho/util/error","pentaho/util/object","pentaho/util/logger","pentaho/debug","pentaho/debug/Levels"],function(e,t,n,i,r,o,a,s,u,l,c,h,d,p,f,_,g,m,y,v,b,C){
"use strict";function O(e){var t;if("not"===e.kind&&(t=e.operand))switch(t.kind){
case"and":return new M.Or({operands:t.operands.toArray(function(e){return e.negate().visit(O);
})});case"or":return new M.And({operands:t.operands.toArray(function(e){return e.negate().visit(O);
})});case"not":return t.operand&&t.operand.visit(O);case"true":return M.False.instance;
case"false":return new M.True;default:return t.negate()}}function x(e){if("and"===e.kind){
for(var t,n=-1,i=e.operands,r=i.count,o=[],a=[];++n<r;)t=i.at(n).visit(x),"or"===t.kind?a.push(t):o.push(t);
var s=a.length;if(s){var u=[],l=new Array(s).concat(o);return w(u,l,a,0),new M.Or({
operands:u})}return new M.And({operands:o})}}function w(e,t,n,i){if(i<n.length)for(var r=i+1,o=n[i].operands,a=o.count,s=-1;++s<a;)t[i]=o.at(s),
w(e,t,n,r);else e.push(new M.And({operands:t.slice()}))}function A(e){var t;switch(t=e.kind){
case"and":case"or":for(var n=-1,i=e.operands,r=i.count,o=[];++n<r;){var a=i.at(n).visit(A);
a.kind===t?o.push.apply(o,a.operands.toArray()):o.push(a)}return new e.constructor({
operands:o})}}function j(e){switch(e.kind){case"true":case"false":break;case"or":
for(var t=-1,n=e.operands,i=n.count,r=[];++t<i;){var o=n.at(t);switch(o.kind){case"true":
return M.True.instance;case"false":continue;case"and":r.push(o);break;default:r.push(new M.And({
operands:[o]}))}}return new e.constructor({operands:r});case"and":e=new M.Or({operands:[e]
});break;default:e=new M.Or({operands:[new M.And({operands:[e]})]})}return e}function T(e){
return"or"===e.kind?S(e):e}function S(e){for(var t={},n=[],i=-1,r=e.operands,o=r.count;++i<o;){
var a=r.at(i).visit(I);switch(a.kind){case"true":return M.True.instance;case"false":
continue}var s=a.$contentKey;y.hasOwn(t,s)||(t[s]=a,n.push(a))}return n.length?new M.Or({
operands:n}):M.False.instance}function I(e){for(var t={},n={},i=[],r=-1,o=e.operands,a=o.count;++r<a;){
var s,u=o.at(r),l=!1;switch(u.kind){case"false":return M.False.instance;case"true":
continue;case"not":l=!0}var c=u.$contentKey;if(!y.hasOwn(t,c)){if(l){var h=u.operand;
if(h){if(y.hasOwn(t,h.$contentKey))return M.False.instance;if("isEqual"===h.kind&&(s=h.property)){
if(y.hasOwn(n,"+"+s))continue;(n["-"+s]||(n["-"+s]=[])).push(u)}}}else{if(y.hasOwn(t,"(not "+c+")"))return M.False.instance;
if("isEqual"===u.kind&&(s=u.property)){if(y.hasOwn(n,"+"+s))return M.False.instance;
(n["+"+s]||(n["+"+s]=[])).push(u);var d=y.getOwn(n,"-"+s);d&&(d.forEach(function(e){
i.splice(i.indexOf(e),1),delete t[e.$contentKey]}),delete n["-"+s])}}t[c]=u,i.push(u);
}}return i.length?new M.And({operands:i}):M.True.instance}function R(e,t){for(var n,i,r,o=[],a=e.__equalityLiteralsByPropertyName,s=t.operands,u=s.count;u--;){
var l=s.at(u),c=(i=l.isNot)?l.operand:l,h=y.getOwn(a,c.property);if(h&&"isEqual"===c.kind){
var d=h.operand,p=(r=d.isNot)?d.operand:d;if(r){if(!i){if(E(p.value,c.value))return[e];
throw m.notImplemented("This case is not supported.")}E(p.value,c.value)||(n=e.operands.toArray(),
n[h.index]=c,o.push(new M.And({operands:n})))}else if(i){if(E(p.value,c.value))return[e];
}else if(!E(p.value,c.value))return[e]}else n=e.operands.toArray(),n.push(i?c:c.negate()),
o.push(new M.And({operands:n}))}return o.length?o:null}function E(e,t){return e===t||null!=e&&null!=t&&e.valueOf()===t.valueOf();
}var F=b.testLevel(C.debug,e),M={};return M.Abstract=t.extend("pentaho.data.filter.Abstract",{
get isTerminal(){return!0},get isNot(){return!1},get isProperty(){return!1},get $key(){
return this.$contentKey},get contentKey(){return this.$contentKey},get $contentKey(){
return this.__contentKey||(this.__contentKey=this.__buildContentKeyOuter())},equalsContent:function(e){
return!0},__buildContentKeyOuter:function(){var e=this._buildContentKey();return"("+this.$type.shortId+(e?" "+e:"")+")";
},contains:function(e){return this.compile()(e)},__compiled:null,compile:function(){
var e=this.__compiled;return null===e&&(this.assertValid(),this.__compiled=e=this._compile()),
e},visit:function(e){if(!e)throw m.argRequired("transformer");return e(this)||this._visitDefault(e);
},_visitDefault:function(e){return this},negate:function(){return new M.Not({operand:this
})},or:function(){if(!arguments.length)return this;var e=g.slice(arguments);return e.unshift(this),
new M.Or({operands:e})},and:function(){if(!arguments.length)return this;var e=g.slice(arguments);
return e.unshift(this),new M.And({operands:e})},andNot:function(e){if(!e)return this;
var t=this.toDnf();switch(t.kind){case"false":return t;case"true":return e.negate();
}var n=e.toDnf();switch(n.kind){case"false":return this;case"true":return M.False.instance;
}var i=[];F&&v.log("-----------------------------------------");var r={};n.operands.each(function(e){
r[e.$contentKey]=e}),t.operands.each(function(e){y.hasOwn(r,e.$contentKey)||i.push(e);
}),F&&v.log("remainders 1 #="+i.length+" ( "+i.length+" * "+n.operands.count+" = "+i.length*n.operands.count+")"),
i.length&&(n.operands.each(function(e){for(var t=i.length;t--;){var n=R(i[t],e);if(n)n.unshift(t,1),
i.splice.apply(i,n);else if(i.splice(t,1),!i.length)return!1}}),F&&v.log("remainders 2 #="+i.length));
var o=i.length?new M.Or({operands:i}):M.False.instance;return o},toDnf:function(){
var e=this.__toDnfCache;return e||(this.__toDnfCache=e=this.visit(O).visit(x).visit(A).visit(j).visit(T),
e.__toDnfCache=e),e},toExtensional:function(e,t){function n(e,t){var n={};return t.forEach(function(t){
var i=e.getColumnIndexById(t);if(-1===i)throw m.argInvalid("keyColumnNames","The column name "+t+" is not in the dataPlain.");
n[t]=i}),n}F&&v.log("toExtensional BEGIN");try{var i=e.filter(this),r=i.getNumberOfRows();
if(0===r)return M.False.instance;if(0===t.length)throw m.argInvalid("keyColumnNames","At least one key column must be specified.");
for(var o=n(i,t),a=[],s=0;r>s;s++){var u=t.map(function(e){var t=i.getValue(s,o[e]),n=i.getColumnType(o[e]);
return new M.IsEqual({property:e,value:{_:n,v:t}})});a.push(new M.And({operands:u
}))}return new M.Or({operands:a})}finally{F&&v.log("toExtensional END")}},$type:{
id:e.id,isAbstract:!0,isEntity:!0,isReadOnly:!0}}),M.Abstract._core=M,o(M),n(M),i(M),
r(M),a(M),s(M),u(M),l(M),c(M),h(M),d(M),p(M),f(M),_(M),M.Abstract}),define("pentaho/data/filter/Tree",["./Abstract"],function(e){
"use strict";return e._core.Tree}),define("pentaho/data/filter/Property",["./Abstract"],function(e){
"use strict";return e._core.Property}),define("pentaho/data/filter/And",["./Abstract"],function(e){
"use strict";return e._core.And}),define("pentaho/data/filter/Or",["./Abstract"],function(e){
"use strict";return e._core.Or}),define("pentaho/data/filter/Not",["./Abstract"],function(e){
"use strict";return e._core.Not}),define("pentaho/data/filter/IsEqual",["./Abstract"],function(e){
"use strict";return e._core.IsEqual}),define("pentaho/data/filter/IsIn",["./Abstract"],function(e){
"use strict";return e._core.IsIn}),define("pentaho/data/filter/IsGreater",["./Abstract"],function(e){
"use strict";return e._core.IsGreater}),define("pentaho/data/filter/IsLess",["./Abstract"],function(e){
"use strict";return e._core.IsLess}),define("pentaho/data/filter/IsGreaterOrEqual",["./Abstract"],function(e){
"use strict";return e._core.IsGreaterOrEqual}),define("pentaho/data/filter/IsLessOrEqual",["./Abstract"],function(e){
"use strict";return e._core.IsLessOrEqual}),define("pentaho/data/filter/IsLike",["./Abstract"],function(e){
"use strict";return e._core.IsLike}),define("pentaho/data/filter/True",["./Abstract"],function(e){
"use strict";return e._core.True}),define("pentaho/data/filter/False",["./Abstract"],function(e){
"use strict";return e._core.False}),define("pentaho/data/filter/standard",["./Abstract","./Tree","./Property","./And","./Or","./Not","./IsEqual","./IsIn","./IsGreater","./IsLess","./IsGreaterOrEqual","./IsLessOrEqual","./IsLike","./True","./False"],function(){
"use strict"}),define("pentaho/visual/role/MappingField",["pentaho/module!_","pentaho/type/Complex","pentaho/i18n!messages"],function(e,t,n){
"use strict";return t.extend({constructor:function(e,t){this.base(this.$type.normalizeInstanceSpec(e),t);
},get $key(){return this.name},toSpecInContext:function(e){var t=this.base(e);if(t.constructor===Object){
var n=0,i=null;for(var r in t){if(n++,n>1||"name"!==r)break;i=t.name}i&&1===n&&(t=i);
}return t},$type:{id:e.id,_normalizeInstanceSpec:function(e){return"string"==typeof e?{
name:e}:e},hasNormalizedInstanceSpecKeyData:function(e){return void 0!==e.name},props:[{
name:"name",valueType:"string",isRequired:!0,isReadOnly:!0}]}}).localize({$type:n.structured.MappingField
}).configure({$type:e.config})}),define("pentaho/data/util",["./TableView","./filter/IsEqual","./filter/And"],function(e,t,n){
"use strict";function i(e,n,i){var o=e.getColumnIndexById(n);if(o>=0){var a,s=r.getCellValue(i);
return a=null==s?null:{_:e.getColumnType(o),value:s,formatted:i.toString()},new t({
property:n,value:a})}return null}var r={hasAnyKeyColumns:function(e){for(var t=-1,n=e.getNumberOfColumns();++t<n;)if(e.isColumnKey(t))return!0;
return!1},isColumnKeyEffective:function(e,t,n){return null==n&&(n=r.hasAnyKeyColumns(e)),
n?e.isColumnKey(t):!r.isColumnTypeContinuous(e.getColumnType(t))},isColumnTypeContinuous:function(e){
return"number"===e||"date"===e},getCellValue:function(e){return null==e||e instanceof Date?e:e.valueOf();
},createFilterFromCellsMap:function(e,r){var o=[];switch(Object.keys(e).forEach(function(n){
var a=i(r,n,e[n],t);null!==a&&o.push(a)}),o.length){case 0:return null;case 1:return o[0];
default:return new n({operands:o})}},createFilterIsEqualFromCell:function(e,t,n){
return i(e,t,n)},getColumnIndexesByIds:function(e,t){for(var n=t.length,i=new Array(n),r=-1;++r<n;){
var o=e.getColumnIndexById(t[r]);if(0>o)return null;i[r]=o}return i},filterByPredicate:function(t,n){
var i=r.getFilteredRowsByPredicate(t,n);return null===i?t:new e(t).setSourceRows(i);
},getFilteredRowsByPredicate:function(e,t){for(var n=!0,i=[],r=-1,o=e.getNumberOfRows();++r<o;)t(e,r)?i.push(r):n&&(n=!1);
return n?null:i},buildRowPredicateNotAllNullColumns:function(e){var t=e.length;return function(n,i){
for(var r=t;r--;)if(null!==n.getValue(i,e[r]))return!0;return!1}}};return r}),define("pentaho/visual/role/AbstractMapping",["pentaho/module!_","pentaho/type/Complex","./MappingField","pentaho/data/util","pentaho/i18n!messages"],function(e,t,n,i,r){
"use strict";var o=t.extend({get hasFields(){return this.fields.count>0},_onDataOrMappingChanged:function(){},
get _modelReference(){var e=this.$references;return e&&e.length?e[0]:null},get fieldIndexes(){
var e=null,t=this._modelReference;if(null!==t){var n=t.container.data;if(null!==n){
var r=this.fields.toArray(function(e){return e.name});return i.getColumnIndexesByIds(n,r);
}}return e},$type:{id:e.id,props:[{name:"fields",valueType:[n]}]}}).localize({$type:r.structured.AbstractMapping
}).configure({$type:e.config});return o}),define("pentaho/visual/base/KeyTypes",[],function(){
"use strict";var e={dataOrdinal:"dataOrdinal",dataKey:"dataKey"};return Object.freeze(e);
}),define("pentaho/visual/role/AbstractProperty",["pentaho/module!_","pentaho/type/Property","./AbstractMapping","../base/KeyTypes","pentaho/i18n!messages","pentaho/type/loader","pentaho/type/ValidationError","pentaho/data/TableView","pentaho/type/util"],function(e,t,n,i,r,o,a,s,u){
"use strict";var l=t.extend({$type:{id:e.id,valueType:n,defaultValue:function(){return{};
},isRequired:!0,get hasAnyListModes(){var e=!1;return this.modes.each(function(t){
return t.dataType.isList?(e=!0,!1):void 0}),e},get hasAnyCategoricalModes(){var e=!1;
return this.modes.each(function(t){return t.isContinuous?void 0:(e=!0,!1)}),e},get hasAnyContinuousModes(){
var e=!1;return this.modes.each(function(t){return t.isContinuous?(e=!0,!1):void 0;
}),e},hasAnyModes:function(e){var t=e.isContinuous,n=e.isList,i=e.elementDataType?o.resolveType(e.elementDataType).type:null,r=!1;
return this.modes.each(function(e){return null!=t&&e.isContinuous!==t||null!=n&&e.dataType.isList!==n||null!=i&&!i.isSubtypeOf(e.dataType.elementType)?void 0:(r=!0,
!1)}),r},get isVisualKeyEffective(){var e=this.declaringType;return null!==e&&e.visualKeyType===i.dataKey?this.isVisualKey:void 0;
},validateOn:function(e){var t=this.base(e);if(!t){var n=function(e){t=u.combineErrors(t,e);
},i=e.get(this);!t&&i.hasFields&&this.__validateFieldsOn(e,i,n)}return t},__validateFieldsOn:function(e,t,n){
for(var i=e.data,o=-1,s=t.fields,u=s.count;++o<u;){var l=s.at(o),c=l.name,h=i?i.getColumnIndexById(c):-1;
0>h&&n(new a(r.format(r.structured.errors.property.fieldIsNotDefinedInAbstractModelData,{
name:c,role:this})))}}}}).localize({$type:r.structured.AbstractProperty}).configure({
$type:e.config});return l}),define("pentaho/visual/color/Level",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!messages"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["nominal","quantitative","divergent"]
}}).localize({$type:i.structured.Level}).configure({$type:e.config})}),define("pentaho/visual/color/Palette",["pentaho/module!_","pentaho/type/Complex","./Level"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:[{name:"level",valueType:n,isRequired:!0,
defaultValue:"nominal",isReadOnly:!0},{name:"colors",valueType:["string"],countMin:1,
isReadOnly:!0}]}}).configure({$type:e.config})}),define("pentaho/visual/color/PaletteProperty",["pentaho/module!_","pentaho/type/Property","./Level","./Palette","pentaho/type/loader","pentaho/i18n!messages","pentaho/type/ValidationError","pentaho/type/util","pentaho/util/object","pentaho/util/error","pentaho/module/instancesOf!pentaho/visual/color/Palette"],function(e,t,n,i,r,o,a,s,u,l,c){
"use strict";var h=n.type,d=r.resolveType([n]),p=t.extend({$type:{valueType:i,defaultValue:function(e){
for(var t=e.__collectOtherUsedPalettesIdsOn(this),n=e.levels,i=e.valueType,r=-1,o=c.length;++r<o;){
var a=c[r];if(i.is(a)&&n.has(a.level)&&!u.hasOwn(t,a.$uid))return a}return null},
__collectOtherUsedPalettesIdsOn:function(e){var t=Object.create(null);return e.$type.each(function(n){
if(n!==this&&n instanceof p.Type){var i=e.get(n);i&&(t[i.$uid]=!0)}},this),t},__levels:h.domain,
get levels(){return this.__levels},set levels(e){if(null!=e){this._assertNoSubtypesAttribute("levels"),
Array.isArray(e)||(e=[e]);var t=e.map(function(e){return this.to(e)},h),n=h.__intersect(this.__levels.toArray(),t);
if(!n.length)throw l.argInvalid("levels",o.structured.errors.property.noLevels);n.sort(h.compareElements.bind(h)),
this.__levels=new d(n)}},validateOn:function(e){var t=this.base(e);if(!t){var n=e.get(this);
if(n){var i=function(e){t=s.combineErrors(t,e)},r=n.get("level");r&&!this.levels.has(r.$key)&&i(new a(o.format(o.structured.errors.property.levelIsNotOneOfPalettePropertyLevels,{
property:this,level:r,propertyLevels:"'"+this.levels.toArray().join("', '")+"'"})));
}}return t},_fillSpecInContext:function(e,t){var n=this.base(e,t),i=u.getOwn(this,"__levels");
return i&&(n=!0,e.levels=i.toSpecInContext(t)),n}}}).localize({$type:o.structured.Property
}).configure({$type:e.config});return p}),define("pentaho/visual/base/Application",["pentaho/module!_","pentaho/type/Complex","pentaho/i18n!model"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id}}).localize({$type:n.structured.Application
}).configure({$type:e.config})}),define("pentaho/visual/base/AbstractModel",["pentaho/module!_","pentaho/type/Complex","../role/AbstractProperty","../color/PaletteProperty","./Application","./KeyTypes","pentaho/data/filter/Abstract","pentaho/type/Object","pentaho/util/object","pentaho/type/changes/ComplexChangeset","pentaho/i18n!model","pentaho/module/subtypesOf!pentaho/data/filter/Abstract"],function(e,t,n,i,r,o,a,s,u,l,c){
"use strict";var h=l.extend({_apply:function(e){this.base(e),this.__areDataOrMappingsChanged(e.$type)&&e._onDataOrMappingsChanged();
},__areDataOrMappingsChanged:function(e){for(var t=this.propertyNames,n=-1,i=t.length;++n<i;){
var r=t[n];if("data"===r)return!0;if(e.isVisualRole(e.get(r)))return!0}return!1}}),d=n.type,p=i.type,f=t.extend({
_createChangeset:function(e){return new h(e,this)},_onDataOrMappingsChanged:function(){
this.$type.eachVisualRole(function(e){this.get(e)._onDataOrMappingChanged()},this);
},get keyFieldNames(){var e=[],t=e.set=Object.create(null),n=this.$type;return n.visualKeyType===o.dataKey&&n.eachVisualRole(function(n){
n.isVisualKey&&this.get(n).fields.each(function(n){var i=n.name;u.hasOwn(t,i)||(t[i]=!0,
e.push(i))})},this),e},get measureFieldNames(){var e=this.keyFieldNames.set,t=[],n=t.set=Object.create(null),i=this.$type;
return i.visualKeyType===o.dataKey&&i.eachVisualRole(function(i){i.isVisualKey||this.get(i).fields.each(function(i){
var r=i.name;u.hasOwn(e,r)||u.hasOwn(n,r)||(n[r]=!0,t.push(r))})},this),t},toSpecInContext:function(e){
if(e&&e.isJson){e=Object.create(e);var t=e.omitProps;e.omitProps=t=t?Object.create(t):{},
null==t.data&&(t.data=!0),null==t.selectionFilter&&(t.selectionFilter=!0),null==t.application&&(t.application=!0);
}return this.base(e)},$type:{id:e.id,isAbstract:!0,props:[{name:"application",valueType:r
},{name:"data",valueType:"object",isRequired:!0,toValueOn:function(e,t){var n=this.base(e,t);
if(null!==n){var i=n.value.toPlainTable();return new s(i)}return n}},{name:"selectionFilter",
valueType:a,defaultValue:{_:"or"},isRequired:!0}],eachVisualRole:function(e,t){var n=0;
return this.each(function(i){return this.isVisualRole(i)&&e.call(t,i,n++,this)===!1?!1:void 0;
},this),this},isVisualRole:function(e){return e.isSubtypeOf(d)},isColorPalette:function(e){
return e.isSubtypeOf(p)}}}).localize({$type:c.structured.AbstractModel}).configure({
$type:e.config});return f}),define("pentaho/visual/role/Mode",["pentaho/module!_","pentaho/type/Complex","pentaho/i18n!messages"],function(e,t,n){
"use strict";var i=t.extend({constructor:function(e,t){this.base(this.$type.normalizeInstanceSpec(e),t);
},get $key(){return this.get("dataType").$key+"|"+this.isContinuous},canApplyToFieldTypes:function(e){
var t=this.dataType,n=t.elementType;if(t.isElement){if(e.length>1)return!1}else if(!t.isList)return!0;
return e.every(function(e){return e.isSubtypeOf(n)})},toSpecInContext:function(e){
var t=this.base(e);if(t.constructor===Object){var n=0,i=null;for(var r in t){if(n++,
n>1||"dataType"!==r)break;i=t.dataType}null!==i&&1===n&&(t=i)}return t},$type:{id:e.id,
isEntity:!0,_normalizeInstanceSpec:function(e){return e.constructor!==Object?{dataType:e
}:e},hasNormalizedInstanceSpecKeyData:function(e){return void 0!==e.dataType||void 0!==e.isContinuous;
},props:[{name:"dataType",valueType:"type",isRequired:!0,defaultValue:"instance",
isReadOnly:!0},{name:"isContinuous",valueType:"boolean",isRequired:!0,isReadOnly:!0,
defaultValue:function(){return this.dataType.elementType.isContinuous}}]}}).localize({
$type:n.structured.Mode}).configure({$type:e.config});return i}),define("pentaho/visual/role/Mapping",["pentaho/module!_","./AbstractMapping","./MappingField","./Mode","pentaho/type/changes/Transaction","pentaho/i18n!messages"],function(e,t,n,i,r,o){
"use strict";var a=t.extend({_onDataOrMappingChanged:function(){this.__mode=void 0;
},__mode:void 0,get mode(){var e;return null!==r.current?e=this.__getMode():void 0===(e=this.__mode)&&(this.__mode=e=this.__getMode()),
e||null},__getMode:function(){var e=this._modelReference;return null!==e?e.property.getModeEffectiveOn(e.container):void 0;
},$type:{id:e.id,props:[{name:"modeFixed",valueType:i}]}}).localize({$type:o.structured.Mapping
}).configure({$type:e.config});return a}),define("pentaho/visual/role/Property",["pentaho/module!_","./AbstractProperty","./Mapping","./Mode","pentaho/i18n!messages","pentaho/i18n!/pentaho/type/i18n/types","pentaho/type/loader","pentaho/type/util","pentaho/type/ValidationError","pentaho/util/object","pentaho/util/error","pentaho/util/arg"],function(e,t,n,i,r,o,a,s,u,l,c,h){
"use strict";function d(e){return e=+e,isNaN(e)||0>e?void 0:Math.floor(e)}var p=i.type,f=a.resolveType([i]),_=t.extend({
$type:{id:e.id,valueType:n,_init:function(e,t){if(e=this.base(e,t)||e,!this.declaringType||this.isRoot){
var n=e.modes;null!=n?this.__setModes(n):this.isRoot&&null===this.__modes&&this.__setModes([{
dataType:"string"}],!0);var i=e.isVisualKey;null!=i?this.isVisualKey=i:this.isRoot&&null===this.__isVisualKey&&(this.isVisualKey=this.hasAnyCategoricalModes),
e=Object.create(e),e.modes=void 0,e.isVisualKey=void 0}return e},__modes:null,__isModesDefault:!0,
get modes(){return this.__modes},set modes(e){this._assertNoSubtypesAttribute("modes"),
null!=e&&this.__setModes(e,!1)},__setModes:function(e,t){Array.isArray(e)||(e=[e]);
var n,i=e.map(function(e){return p.to(e)});if(n=null===this.__modes?i:p.__intersect(this.__modes.toArray(),i),
!n.length)throw c.argInvalid("modes",r.structured.errors.property.noModes);this.__modes=new f(n,{
isReadOnly:!0}),this.__isModesDefault=!!t},getModeEffectiveOn:function(e){var t=e.get(this),n=t.modeFixed;
if(null!==n)return n;var i=e.data;if(null===i)return null;var r=t.fieldIndexes;if(null===r)return null;
for(var o=r.map(function(e){var t=i.getColumnType(e);return a.resolveType(t).type;
}),s=this.modes,u=s.count,l=-1;++l<u;)if(n=s.at(l),n.canApplyToFieldTypes(o))return n;
return null},__isVisualKey:null,get isVisualKey(){return!!this.__isVisualKey},set isVisualKey(e){
this._assertNoSubtypesAttribute("isVisualKey"),null!=e&&(null===this.__isVisualKey?this.__isVisualKey=!!e:e&&!this.__isVisualKey&&(this.__isVisualKey=!0));
},get fields(){var e=l.getOwn(this,"__fields");if(!e){var t=this;this.__fields=e=Object.freeze({
get isRequired(){return t.__fieldsIsRequired},set isRequired(e){t.__fieldsIsRequired=e;
},get countMin(){return t.__fieldsCountMin},set countMin(e){t.__fieldsCountMin=e},
get countMax(){return t.__fieldsCountMax},set countMax(e){t.__fieldsCountMax=e},countRangeOn:function(e,n){
return t.__fieldsCountRangeOn(e,n)}})}return e},set fields(e){if(null!=e){var t=this.fields;
"isRequired"in e&&(t.isRequired=e.isRequired),"countMin"in e&&(t.countMin=e.countMin),
"countMax"in e&&(t.countMax=e.countMax)}},dynamicAttributes:{__fieldsIsRequired:{
value:!1,cast:Boolean,group:"fields",localName:"isRequired",combine:function(e,t){
return function(n,i){return e.call(this,n,i)||t.call(this,n,i)}}},__fieldsCountMin:{
value:0,cast:d,group:"fields",localName:"countMin",combine:function(e,t){return function(n,i){
return Math.max(e.call(this,n,i),t.call(this,n,i))}}},__fieldsCountMax:{value:function(e,t){
var n=null;if(!h.optional(t,"ignoreCurrentMode",!1)){var i=this.get(e);n=i&&i.mode;
}return(null!==n?n.dataType.isList:e.hasAnyListModes)?1/0:1},cast:d,group:"fields",
localName:"countMax",combine:function(e,t){return function(n,i){return Math.min(e.call(this,n,i),t.call(this,n,i));
}}}},__fieldsCountRangeOn:function(e,t){var n=this.__fieldsIsRequiredOn(e,t),i=this.__fieldsCountMinOn(e,t),r=this.__fieldsCountMaxOn(e,t);
return n&&1>i&&(i=1),i>r&&(r=i),{min:i,max:r}},validateOn:function(e){var t=this.base(e);
if(!t){var n=function(e){t=s.combineErrors(t,e)},i=e.get(this),a=this.__fieldsCountRangeOn(e),l=i.fields.count;
if(l<a.min?n(new u(o.get("errors.property.countOutOfRange",[this.label+" "+i.$type.get("fields").label,l,a.min,a.max]))):l>a.max&&n(new u(o.get("errors.property.countOutOfRange",[this.label+" "+i.$type.get("fields").label,l,a.min,a.max]))),
!t){var c=i.modeFixed;null!==c&&(this.modes.has(c.$key)||n(new u(r.format(r.structured.errors.property.modeFixedInvalid,{
role:this})))),!t&&l>0&&null==i.mode&&n(new u(r.format(r.structured.errors.property.noApplicableMode,{
role:this})))}}return t},_fillSpecInContext:function(e,t){var n=this.base(e,t),i=l.getOwn(this,"__modes");
i&&!this.__isModesDefault&&(n=!0,e.modes=i.toSpecInContext(t));var r=l.getOwn(this,"__isVisualKey",null);
return null!==r&&(this.isRoot&&r===this.hasAnyCategoricalModes||(n=!0,e.isVisualKey=r)),
n}}}).configure({$type:e.config});return _}),define("pentaho/visual/base/Model",["pentaho/module!_","./AbstractModel","./KeyTypes","pentaho/util/text","pentaho/util/error","../role/Property"],function(e,t,n,i,r){
"use strict";return t.extend({$type:{id:e.id,defaultView:"./View",isAbstract:!0,_init:function(e,t){
return e=this.base(e,t)||e,this.__setVisualKeyType(e.visualKeyType),e},__visualKeyType:void 0,
get visualKeyType(){return this.__visualKeyType},__setVisualKeyType:function(e){e=i.nonEmptyString(e);
var t=this.__visualKeyType;if(void 0===t){if(null===e){if(this.isAbstract)return;e=n.dataKey;
}else if(!n.hasOwnProperty(e))throw r.argRange("visualKeyType");return void(this.__visualKeyType=e);
}if(null!==e&&t!==e)throw r.operInvalid("Once defined, 'visualKeyType' cannot be changed.");
}}}).configure({$type:e.config})}),define("pentaho/type/action/Base",["pentaho/module!_","../Element","pentaho/lang/OperationInvalidError","pentaho/util/object","pentaho/util/text","pentaho/i18n!../i18n/types"],function(e,t,n,i,r,o){
"use strict";var a,s=t.extend({$type:{id:e.id,isAbstract:!0,label:null,description:null,
_init:function(e,t){e=this.base(e,t)||e;var n=e&&e.isSync;n=null==n?this.__isSync:!!n,
i.setConst(this,"__isSync",n)},__isSync:!0,get isSync(){return this.__isSync},_fillSpecInContext:function(e,t){
var n=this.base(e,t);return this!==a&&this.isSync!==this.ancestor.isSync&&(e.isSync=this.isSync,
n=!0),n}},constructor:function(e){this.label=e&&e.label,this.description=e&&e.description,
this._init(e)},_init:function(e){},clone:function(){return new this.constructor(this.toSpec());
},get label(){return this.__label||this.$type.label},set label(e){this.__label=r.nonEmptyString(e);
},get description(){return this.__description||this.$type.description},set description(e){
this.__description=r.nonEmptyString(e)},toSpecInContext:function(e){e=e?Object.create(e):{};
var t,n={},i=!!e.forceType||!!(t=e.declaredType)&&this.$type!==t;return i&&(n._=this.$type.toSpecInContext(e)),
null!==this.__label&&(n.label=this.label),null!==this.__description&&(n.description=this.description),
n}}).localize({$type:o.structured.Action}).configure({$type:e.config});return a=s.type,
s}),define("pentaho/visual/action/Base",["pentaho/module!_","pentaho/type/action/Base"],function(e,t){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0}}).configure({$type:e.config
})}),define("pentaho/visual/action/Update",["pentaho/module!_","./Base"],function(e,t){
"use strict";return t.extend({$type:{id:e.id,isSync:!1}}).configure({$type:e.config
})}),define("pentaho/visual/action/mixins/Data",["pentaho/module!_","pentaho/visual/action/Base","pentaho/data/filter/Abstract","pentaho/module/subtypesOf!pentaho/data/filter/Abstract","pentaho/data/filter/standard"],function(e,t,n){
"use strict";var i=n.type;return t.extend({$type:{id:e.id,isAbstract:!0},_init:function(e){
this.base(e),this.dataFilter=e&&e.dataFilter},get dataFilter(){return this.__dataFilter;
},set dataFilter(e){this.__dataFilter=i.to(e)},toSpecInContext:function(e){var t=this.base(e);
return this.__dataFilter&&(e=e?Object.create(e):{},e.declaredType=i,t.dataFilter=this.__dataFilter.toSpecInContext(e)),
t}}).configure({$type:e.config})}),define("pentaho/visual/action/mixins/Positioned",["pentaho/module!_","pentaho/visual/action/Base"],function(e,t){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0},_init:function(e){this.base(e),
this.position=e&&e.position},get position(){return this.__position},set position(e){
this.__position=e||null},toSpecInContext:function(e){var t=this.base(e);return this.__position&&(t.position={
x:this.__position.x,y:this.__position.y}),t}}).configure({$type:e.config})}),define("pentaho/visual/action/SelectionModes",["module","pentaho/util/logger","pentaho/debug","pentaho/debug/Levels","pentaho/data/util"],function(e,t,n,i,r){
"use strict";var o=n.testLevel(i.debug,e),a={replace:function(e,t){return t},toggle:function(e,n){
if(o&&t.log("TOGGLE BEGIN"),!n)return e;var i=this.model.data;if(!i)return e;var s=null;
switch(e.kind){case"true":s=!0;break;case"false":s=!1;break;case"or":0===e.operands.count&&(s=!1);
}if(null===s){var u=this.model.measureFieldNames;if(u.length>0){var l=r.getColumnIndexesByIds(i,u),c=r.buildRowPredicateNotAllNullColumns(l);
i=r.filterByPredicate(i,c)}var h=i.filter(n),d=h.filter(e);s=h.getNumberOfRows()===d.getNumberOfRows();
}var p=s?a.remove:a.add,f=p.call(this,e,n);return o&&t.log("TOGGLE END"),f},add:function(e,t){
return e.or(t)},remove:function(e,t){return e.andNot(t)}};return a}),define("pentaho/visual/action/Select",["pentaho/module!_","./Base","./mixins/Data","./mixins/Positioned","./SelectionModes","pentaho/type/Function","pentaho/util/object","pentaho/util/fun","pentaho/lang/ArgumentInvalidError","pentaho/lang/ArgumentInvalidTypeError"],function(e,t,n,i,r,o,a,s,u,l){
"use strict";function c(e,t){if(null!=e){var n;if("string"==typeof e){if(!a.hasOwn(r,e))throw new u(t,"Not one of the standard selection mode names.");
n=e,e=r[e]}else if(!s.is(e))throw new l(t,["string","function"],typeof e);var i=new o(e);
return i.selectionModeName=n,i}return null}function h(e,t){return e.selectionModeName?e.selectionModeName:(t=t?Object.create(t):{},
t.declaredType=o.type,e.toSpecInContext(t))}return t.extend({$type:{id:e.id,mixins:[n,i],
__defaultSelectionMode:null,get defaultSelectionMode(){var e=this.__defaultSelectionMode;
return e?e.valueOf():r.replace},set defaultSelectionMode(e){this.__defaultSelectionMode=c(e,"defaultSelectionMode");
},_fillSpecInContext:function(e,t){var n=this.base(e,t);return this.__defaultSelectionMode&&(e.defaultSelectionMode=h(this.__defaultSelectionMode,t),
n=!0),n}},constructor:function(e){this.base(e),this.selectionMode=e&&e.selectionMode;
},get selectionMode(){var e=this.__selectionMode;return e?e.valueOf():this.$type.defaultSelectionMode;
},set selectionMode(e){this.__selectionMode=c(e,"selectionMode")},toSpecInContext:function(e){
var t=this.base(e);return this.__selectionMode&&(t.selectionMode=h(this.__selectionMode,e)),
t}}).configure({$type:e.config})}),define("pentaho/visual/action/Execute",["pentaho/module!_","./Base","./mixins/Data","./mixins/Positioned"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n,i]}}).configure({$type:e.config
})}),define("pentaho/type/action/States",[],function(){"use strict";var e={unstarted:1,
init:2,will:4,"do":8,did:16,canceled:32,failed:64,finished:128};return Object.freeze(e);
}),define("pentaho/lang/RuntimeError",["module","./UserError"],function(e,t){"use strict";
return t.extend(e.id,{get name(){return this.constructor.displayName}})}),define("pentaho/type/action/Execution",["module","pentaho/lang/Base","./States","pentaho/lang/ArgumentRequiredError","pentaho/lang/ArgumentInvalidTypeError","pentaho/lang/OperationInvalidError","pentaho/lang/UserError","pentaho/lang/RuntimeError","pentaho/debug","pentaho/debug/Levels","pentaho/util/logger"],function(e,t,n,i,r,o,a,s,u,l,c){
"use strict";var h="The `execute` method can only be called while in the 'unstarted' state.",d="The `done` method can only be called while in the 'do' state.",p="The `reject` method can only be called while in the 'init', 'will' or 'do' states.",f=n.init|n.will|n["do"],_=n.canceled|n.failed,g=n.did|_;
return t.extend(e.id,{constructor:function(e,t){if(!e)throw new i("action");if(!t)throw new i("target");
this.__action=e.clone(),this.__target=t,this.__state=n.unstarted,this.__result=void 0,
this.__error=null,this.__promiseControl=null},get action(){return this.__action},
get target(){return this.__target},get state(){return this.__state},__assertStates:function(e,t){
if(0===(this.__state&e))throw new o(t)},get result(){return this.__result},get error(){
return this.__error},get isUnstarted(){return this.__state===n.unstarted},get isSettled(){
return 0!==(this.__state&g)},get isRejected(){return 0!==(this.__state&_)},get isCanceled(){
return 0!==(this.__state&n.canceled)},get isFailed(){return 0!==(this.__state&n.failed);
},get isExecuting(){return!(this.isUnstarted||this.isFinished)},get isDone(){return 0!==(this.__state&n.did);
},get isFinished(){return 0!==(this.__state&n.finished)},get promise(){return this.__getPromiseControl().promise;
},__getPromiseControl:function(){return this.__promiseControl||(this.__promiseControl=this.__createPromiseControl());
},__createPromiseControl:function(){var e={promise:null,resolve:null,reject:null};
return this.isFinished?e.promise=this.isDone?Promise.resolve(this.result):Promise.reject(this.error):e.promise=new Promise(function(t,n){
e.resolve=t,e.reject=n}),e},execute:function(){return this.__assertStates(n.unstarted,h),
this.__action.$type.isSync?this.__executeSyncAction():this.__executeAsyncAction(),
this},_doDefault:function(){return null},done:function(e){return this.__assertStates(n["do"],d),
this.__result=e,this.__state=n.did,this},reject:function(e){return this.__assertStates(f,p),
this.__reject(e),this},__executeSyncAction:function(){try{this.__executePhaseInit(),
this.isSettled||(this.__executePhaseWill(),this.isSettled||this.__executePhaseDo());
}catch(e){this.__rejectOrLog(e)}this.__executePhaseFinally()},__executeAsyncAction:function(){
var e;try{this.__executePhaseInit(),this.isSettled||(this.__executePhaseWill(),this.isSettled||(e=Promise.resolve(this.__executePhaseDo())["catch"](this.__rejectOrLog.bind(this))));
}catch(t){this.__rejectOrLog(t)}var n=this.__executePhaseFinally.bind(this);(e||Promise.resolve()).then(n,n);
},__rejectOrLog:function(t){this.isSettled?u.testLevel(l.warn,e)&&c.warn("Ignoring error occurred after being marked done: "+t):this.__reject(t);
},__reject:function(e){var t=!1;e?"string"==typeof e?e=new a(e):e instanceof Error?(!(e instanceof a)||e instanceof s)&&(t=!0):(e=new r("reason",["string","Error"],typeof e),
t=!0):e=null,this.__state=t?n.failed:n.canceled,this.__error=e,this.__result=void 0;
},__executePhaseInit:function(){this.__state=n.init,this._onPhaseInit()},__executePhaseWill:function(){
var e=this.__action.validate();return e&&e.length?void this.__reject(e[0]):(this.__state=n.will,
Object.freeze(this.__action),void this._onPhaseWill())},__executePhaseDo:function(){
this.__state=n["do"];var e=this._onPhaseDo(),t=this.__action.$type.isSync;return t?(this.isSettled||this._doDefault(),
null):!e||this.isSettled?this.__executePhaseDoDefaultAsync():e.then(this.__executePhaseDoDefaultAsync.bind(this));
},__executePhaseDoDefaultAsync:function(){if(!this.isSettled){var e=this._doDefault();
if(!this.isSettled)return e}return null},__executePhaseFinally:function(){this.isSettled||this.done();
try{this._onPhaseFinally()}catch(t){u.testLevel(l.warn,e)&&c.warn("Ignoring error occurred during action finally phase: "+t+"\n Stack trace:\n"+t.stack);
}this.__state|=n.finished;var i=this.__promiseControl;i&&(this.isDone?i.resolve(this.result):i.reject(this.error));
},_onPhaseInit:function(){},_onPhaseWill:function(){},_onPhaseDo:function(){return null;
},_onPhaseFinally:function(){}})}),define("pentaho/type/action/impl/Target",["module","pentaho/lang/EventSource","../Base","../Execution","pentaho/util/error"],function(e,t,n,i,r){
"use strict";var o=i.extend({_onPhaseInit:function(){this.target._emitActionPhaseInitEvent(this);
},_onPhaseWill:function(){this.target._emitActionPhaseWillEvent(this)},_onPhaseDo:function(){
return this.target._emitActionPhaseDoEvent(this)},_onPhaseFinally:function(){this.target._emitActionPhaseFinallyEvent(this);
}}),a=n.type,s={errorHandler:function(e,t){t.fail(e)},isCanceled:function(e){return e.isCanceled;
}};return t.extend(e.id,{act:function(e){if(!e)throw r.argRequired("action");return e=a.to(e),
this._createActionExecution(e).execute()},_createActionExecution:function(e){return this._createGenericActionExecution(e);
},_createGenericActionExecution:function(e){return new o(e,this)},_emitActionPhaseInitEvent:function(e){
var t=e.action,n=t.$type.id;this._emitGeneric(this,[e,t],n,"init",s)},_emitActionPhaseWillEvent:function(e){
var t=e.action,n=t.$type.id;this._emitGeneric(this,[e,t],n,"will",s)},_emitActionPhaseDoEvent:function(e){
var t=e.action,n=t.$type,i=n.id;return n.isSync?(this._emitGeneric(this,[e,t],i,"do",s),
null):this._emitGenericAllAsync(this,[e,t],i,"do",s)},_emitActionPhaseFinallyEvent:function(e){
var t=e.action,n=t.$type.id;this._emitGeneric(this,[e,t],n,"finally")}},{GenericActionExecution:o
})}),define("pentaho/util/BitSet",["module","pentaho/lang/Base"],function(e,t){"use strict";
return t.extend(e.id,{constructor:function(e){this.set(e||0)},get isEmpty(){return 0===this.__bits;
},get:function(){return this.__bits},is:function(e){return this.__bits===e},set:function(e){
this.__bits=null==e?-1:this.__bits|e},clear:function(e){this.__bits=null==e?0:this.__bits&~e;
},isSubsetOf:function(e){var t=this.__bits;return 0!==t&&(t|e)===e}})}),define("pentaho/visual/base/View",["pentaho/module!_","pentaho/type/Complex","./Model","../action/Update","../action/Select","../action/Execute","pentaho/type/loader","pentaho/type/action/Execution","pentaho/type/action/impl/Target","pentaho/type/changes/ComplexChangeset","pentaho/type/changes/Transaction","pentaho/lang/UserError","pentaho/util/object","pentaho/util/arg","pentaho/util/fun","pentaho/util/BitSet","pentaho/util/error","pentaho/util/logger","pentaho/util/promise","pentaho/util/spec","pentaho/i18n!view","pentaho/module/subtypesOf!pentaho/visual/action/Base"],function(e,t,n,i,r,o,a,s,u,l,c,h,d,p,f,_,g,m,y,v,b){
"use strict";function C(e,t){var n=0;return t.split("And").forEach(function(t){var i=e.PropertyGroups[t];
null==i||isNaN(+i)?m.warn("There is no registered property group with name '"+t+"'."):n|=i;
}),n}var O=/^_update(.+)$/,x=s.extend({_onPhaseInit:function(){var e=this.target;if(null===e.__domContainer)throw g.operInvalid("The view has no domContainer.");
if(null!==e.__updateActionExecution)throw g.operInvalid("The view is already updating.");
e.__updateActionExecution=this,e._onUpdateInit(this)},_onPhaseWill:function(){this.target._onUpdateWill(this);
},_onPhaseDo:function(){return this.target._onUpdateDo(this)},_onPhaseFinally:function(){
var e=this.target;e.__updateActionExecution=null,this.isDone&&e.__dirtyPropGroups.clear(),
e._onUpdateFinally(this)}}),w=u.GenericActionExecution.extend({_doDefault:function(){
var e=this.target,t=e.model,n=this.action.selectionMode.call(e,t.selectionFilter,this.action.dataFilter);
return t.selectionFilter=n&&n.toDnf(),null}}),A=t.extend({constructor:function(e){
this.base(e),this.__domContainer=null,this.__isAutoUpdate=!0,this.__dirtyPropGroups=new _(A.PropertyGroups.All),
this.__dirtyLastVersion=this.$version,this.__updateActionExecution=null,e&&(null!=e.domContainer&&(this.domContainer=e.domContainer),
null!=e.isAutoUpdate&&(this.isAutoUpdate=e.isAutoUpdate)),this._init(e)},_init:function(e){},
get domContainer(){return this.__domContainer},set domContainer(e){if(!e)throw g.argRequired("domContainer");
if(this.__domContainer){if(e!==this.__domContainer)throw g.operInvalid("Cannot change 'domContainer' once set.");
}else this.__domContainer=e,this._initDomContainer()},_initDomContainer:function(){},
_releaseDomContainer:function(){this.__domContainer=null},get isAutoUpdate(){return this.__isAutoUpdate;
},set isAutoUpdate(e){this.__isAutoUpdate=!!e},get isUpdating(){return null!==this.__updateActionExecution;
},get isDirty(){return this.isUpdating||this.__getIsDirty()},__getIsDirty:function(){
var e=c.getChangesetsPending(this);if(null!==e)for(var t=e.length,n=-1;++n<t;){var i=e[n];
if(i.ownerVersion>=this.__dirtyLastVersion){var r=new _;this._onChangeClassify(r,i),
r.isEmpty||this.__dirtyPropGroups.set(r.get())}this.__dirtyLastVersion=this.$version;
}return!this.__dirtyPropGroups.isEmpty},_onChangeDid:function(e){this.__getIsDirty()&&this._onChangeDirty(this.__dirtyPropGroups),
this.base(e)},_onChangeClassify:function(e,t){function n(t,i){i instanceof l?i.propertyNames.forEach(function(r){
var o,a=t[r];if(a)switch(typeof a){case"string":o=a;break;case"object":return n(a,i.getChange(r));
default:throw new Error("Invalid property groups tree.")}else o="General";e.set(A.PropertyGroups[o]);
}):e.set(t._||A.PropertyGroups.General)}n(this.constructor.__PropertyGroupOfProperty,t);
},_onChangeDirty:function(e){this.__domContainer&&this.isAutoUpdate&&this.update()["catch"](function(e){
m.warn("Auto-update was canceled: "+e)})},update:function(){var e=this.__updateActionExecution;
if(null===e){if(!this.__getIsDirty())return Promise.resolve();e=this.act(new i)}return e.promise;
},_onUpdateInit:function(e){},_onUpdateWill:function(e){this._emitActionPhaseWillEvent(e);
},_onUpdateDo:function(e){return this.__updateLoop()},_onUpdateFinally:function(e){
this._emitActionPhaseFinallyEvent(e)},__updateLoop:function(){var e=this.__dirtyPropGroups;
if(e.isEmpty)return this.__updateActionExecution.done(),Promise.resolve();var t=this.validate();
if(t)return Promise.reject(new h("View model is invalid:\n - "+t.join("\n - ")));var n=this.__selectUpdateMethod(e);
e.clear(n.mask);var i=this;return y.wrapCall(this[n.name],this).then(function(){return i.__updateLoop();
},function(t){return e.set(n.mask),Promise.reject(t)})},__selectUpdateMethod:function(e){
var t=this.constructor,n=t.__UpdateMethods[e.get()];return n||t.__UpdateMethodsList.some(function(t){
return e.isSubsetOf(t.mask)?(n=t,!0):!1}),n},dispose:function(){this.__domContainer&&this._releaseDomContainer();
},extend:function(e,t){if(this.base(e,t),e){var n=this.constructor,i=Object.prototype;
for(var r in e)if(!(e in i)){var o,a=e[r];if(f.is(a)&&(o=O.exec(r))){var s=C(n,o[1]);
if(s&&!n.__UpdateMethods[s]){var u={name:r,mask:s};n.__UpdateMethods[s]=u,n.__UpdateMethodsList.push(u),
n.__UpdateMethodsList.sort(function(e,t){return new _(e.mask).isSubsetOf(t.mask)?-1:1;
})}}}}return this},$type:{id:e.id,isAbstract:!0,props:[{name:"width",valueType:"number",
isRequired:!0},{name:"height",valueType:"number",isRequired:!0},{name:"model",valueType:n,
isRequired:!0}],_init:function(e,t){return e=this.base(e,t)||e,this.__extension=null,
this.__extensionEf=void 0,e},__extension:null,__extensionEf:void 0,get extension(){
return this.__extension},set extension(e){this._assertNoSubtypesAttribute("extension"),
this.__extension=e?Object(e):null,this.__extensionEf=void 0},get extensionEffective(){
var e=this.__extensionEf;if(void 0===e){e=null;var t=this.ancestor;if(t.isSubtypeOf(A.type)){
var n=t.extensionEffective;n&&(e={},v.merge(e,n))}this.__extension&&(e||(e={}),v.merge(e,this.__extension)),
this.__extensionEf=e}return e}}},{createAsync:function(e){if(!e)return Promise.reject(g.argRequired("viewSpec"));
var t;if(e._)t=a.resolveTypeAsync(e._);else{var n=e.model;if(!n)return Promise.reject(g.argRequired("viewSpec.model"));
var i;if(n.constructor===Object){if(!n._)return Promise.reject(g.argRequired("viewSpec.model._"));
i=a.resolveTypeAsync(n._)}else i=Promise.resolve(n.constructor);t=i.then(function(e){
return A.getClassAsync(e.type)})}return t.then(function(t){return t.type.createAsync(e);
})},getClassAsync:function(e){return e?a.resolveTypeAsync(e).then(function(e){var t=e.type.defaultViewAbs;
if(!t)throw new Error("No registered default view.");return a.resolveTypeAsync(t);
}):Promise.reject(g.argRequired("modelType"))},_subclassed:function(e,t,n,i){e.PropertyGroups=Object.create(this.PropertyGroups),
e.__PropertyGroupOfProperty=Object.create(this.__PropertyGroupOfProperty),e.__UpdateMethods=Object.create(this.__UpdateMethods),
e.__UpdateMethodsList=this.__UpdateMethodsList.slice(),this.base(e,t,n,i)},PropertyGroups:d.assignOwn(Object.create(null),{
All:-1,Ignored:0,General:1,Data:2,Size:4,Selection:8}),__PropertyGroupOfProperty:d.assignOwn(Object.create(null),{
selectionMode:"Ignored",model:{_:"All",data:"Data",selectionFilter:"Selection"},width:"Size",
height:"Size"}),__UpdateMethods:Object.create(null),__UpdateMethodsList:[]}).mix(u).implement({
_createActionExecution:function(e){if(e instanceof i){if(null!==this.__updateActionExecution)throw g.operInvalid("An update action is already executing.");
return new x(e,this)}return e instanceof r?new w(e,this):this.base(e)},_updateAll:function(){}
}).localize({$type:b.structured.type}).configure({$type:e.config});return A}),define("pentaho/visual/role/ExternalMapping",["pentaho/module!_","./AbstractMapping","pentaho/i18n!messages"],function(e,t,n){
"use strict";var i=t.extend({get strategy(){var e=this._modelReference;return null!==e?e.container.__getAmbientRoleStrategy(e.property.name):null;
},get mode(){var e=this._modelReference;return null!==e?e.container.__getAmbientRoleMode(e.property.name):null;
},$type:{id:e.id,props:[{name:"isCategoricalFixed",valueType:"boolean",isRequired:!0,
defaultValue:!1}]}}).localize({$type:n.structured.ExternalMapping}).configure({$type:e.config
});return i}),define("pentaho/visual/role/ExternalProperty",["pentaho/module!_","./AbstractProperty","./ExternalMapping","./Mode","../base/KeyTypes","pentaho/module/subtypesOf!pentaho/visual/role/adaptation/Strategy","pentaho/i18n!messages","pentaho/type/loader","pentaho/type/ValidationError","pentaho/data/TableView","pentaho/type/util","pentaho/util/object","pentaho/util/arg"],function(e,t,n,i,r,o,a,s,u,l,c,h,d){
"use strict";var p=o.filter(function(e){return e.type.isBrowsable}).map(function(e){
return e.type}),f=s.resolveType([i]),_=t.extend({$type:{id:e.id,valueType:n,_init:function(e,t){
e=this.base(e,t)||e;var n=this.declaringType;if(null!==n){var i=n.get("model").valueType,r=i.get(this.name);
h.setConst(this,"_internalProperty",r),this.label=r.label,this.description=r.description,
this.ordinal=r.ordinal,this.category=r.category,this.helpUrl=r.helpUrl,this.isBrowsable=r.isBrowsable;
}if(this.isRoot){var o=e.strategies;null==o&&this.__setStrategyTypes(p,!0)}return e;
},_internalProperty:null,get isVisualKey(){return this._internalProperty.isVisualKey;
},isApplicableOn:function(e){return this.base(e)&&this._internalProperty.isApplicableOn(e.model);
},get fields(){var e=h.getOwn(this,"__fields");if(!e){var t=this;this.__fields=e=Object.freeze({
countRangeOn:function(e,n){return t.__fieldsCountRangeOn(e,n)}})}return e},__fieldsCountRangeOn:function(e,t){
var n=this._internalProperty.fields.countRangeOn(e.model,t);if(this.__areAllStrategyApplicationsIdentity)return n;
var i=null;if(!d.optional(t,"ignoreCurrentMode",!1)){var r=e.get(this);i=r&&r.mode;
}var o=(null!==i?i.dataType.isList:this.hasAnyListModes)?1/0:1;return{min:n.min>0?1:0,
max:o}},get __areAllStrategyApplicationsIdentity(){var e=this.__strategyTypeApplicationList;
return null===e?!0:e.every(function(e){return e.strategyType.isIdentity})},__modes:null,
__strategyTypeList:null,__isStrategyTypesDefault:!0,__strategyTypeApplicationList:null,
get modes(){return this.__modes},get strategies(){return this.__strategyTypeList},
set strategies(e){this._assertNoSubtypesAttribute("strategies"),null!=e&&this.__setStrategyTypes(e,!1);
},__setStrategyTypes:function(e,t){var n=[],r=Object.create(null);e.forEach(function(e){
var t=s.resolveType(e).type;h.hasOwn(r,t.uid)||(r[t.uid]=!0,n.push(t))});var o=[],a=new f,u=this.isVisualKeyEffective;
this._internalProperty.modes.each(function(e){var t=e.isContinuous;n.forEach(function(n){
var r=n.getInputTypeFor(e.dataType,u);if(null!=r){var s=new i({dataType:r,isContinuous:t
});a.add(s),s=a.get(s.$key),o.push(Object.freeze({externalMode:s,strategyType:n,internalMode:e
}))}})}),this.__modes=a,this.__strategyTypeList=n,this.__isStrategyTypesDefault=!!t,
this.__strategyTypeApplicationList=o},selectAdaptationStrategyOn:function(e){var t=e.get(this);
if(!t.hasFields)return null;var n=t.fieldIndexes;if(null===n)return null;for(var i=e.data,r=this.__strategyTypeApplicationList,o=r.length,a=-1,s=t.isCategoricalFixed;++a<o;){
var u=r[a];if(!s||!u.externalMode.isContinuous){var l=this.__validateStrategyApplication(u,i,n);
if(null!==l)return l}}return null},__validateStrategyApplication:function(e,t,n){
var i=e.externalMode.dataType,r=n.length;if(!i.isList&&r>1)return null;for(var o=i.elementType,a=-1;++a<r;){
var u=n[a],l=s.resolveType(t.getColumnType(u)).type;if(!l.isSubtypeOf(o))return null;
}var c=e.strategyType.validateApplication(t,n);if(!c.isValid)return null;var h=Object.create(e);
return h.externalFieldIndexes=n,h.addsFields=c.addsFields,Object.freeze(h)},validateOn:function(e){
var t=this.base(e);if(!t){var n=function(e){t=c.combineErrors(t,e)},i=e.get(this);
i.hasFields&&null===i.strategy&&n(new u(a.format(a.structured.errors.property.noStrategy,{
role:this}))),n(this._internalProperty.validateOn(e.model))}return t},_fillSpecInContext:function(e,t){
var n=this.base(e,t),i=h.getOwn(this,"__strategyTypeList");return i&&!this.__isStrategyTypesDefault&&(n=!0,
e.strategies=i.map(function(e){return e.toSpecInContext(t)})),n}}}).configure({$type:e.config
});return _}),define("pentaho/visual/base/ModelAdapter",["pentaho/module!_","./AbstractModel","./Model","../role/ExternalProperty","pentaho/data/filter/True","pentaho/data/filter/False","pentaho/data/filter/Or","pentaho/data/filter/And","pentaho/type/loader","pentaho/type/changes/Transaction","pentaho/type/changes/ComplexChangeset","pentaho/data/Table","pentaho/data/util","pentaho/util/object","pentaho/util/error","pentaho/util/logger","pentaho/debug","pentaho/debug/Levels","pentaho/i18n!model"],function(e,t,n,i,r,o,a,s,u,l,c,h,d,p,f,_,g,m,y){
"use strict";function v(e){var t;switch(e.kind){case"true":case"false":case"or":return null;
case"and":t=null;for(var n=[],i=e.operands,a=i.count,u=0;a>u;u++){var l=i.at(u);if("isEqual"===l.kind){
if(null===t&&(t=Object.create(null)),void 0!==t[l.property]&&t[l.property]!==l.value)return o.instance;
t[l.property]=l.value}else n.push(l.visit(v.bind(this)))}return null!==t&&(t=this.modelAdapter.__convertValuesMap(t,this.toExternal),
n.push.apply(n,Object.keys(t).map(function(e){return d.createFilterIsEqualFromCell(this.internalData,e,t[e]);
},this))),new s({operands:n});case"isEqual":return t={},t[e.property]=e.value,t=this.modelAdapter.__convertValuesMap(t,this.toExternal),
e=d.createFilterFromCellsMap(t,this.internalData),null!==e?e:r.instance;default:throw f.argInvalid("filter","Converting "+e.kind+" filter is not supported.");
}}function b(e){var t;switch(t=e.kind){case"and":case"or":for(var n=-1,i=e.operands,r=i.count,o=[];++n<r;){
var a=i.at(n).visit(b);a.kind===t?o.push.apply(o,a.operands.toArray()):o.push(a)}
return new e.constructor({operands:o})}}function C(e,t){var n=null,i=0,r=e.fields.count;
return e.fields.each(function(e){var o=e.name,a=t[o];void 0!==a&&(a=d.getCellValue(a),
null==n&&(n=new Array(r)),n[i]=a),++i}),n}function O(e,t){return 1===e.length&&e[0]===t;
}function x(e,t,n){if(null!==n&&t.transactionVersion===n.transactionVersion)return t;
var i=e.data,r=null===t||t.externalData!==i,o=r?null:t.roleInfoMap,a=Object.create(null),s=[],u=!1;
e.$type.eachVisualRole(function(t){var r=t.name,l=null===o?{transactionVersion:0,
strategyApplication:null,strategy:null}:p.cloneShallow(o[r]),c=null!==n?n.getChange(t):null;
if(null===c||c.hasChanges||(c=null),null!==i&&(null===c||l.transactionVersion<c.transactionVersion)){
var h=t.selectAdaptationStrategyOn(e),d=l.strategyApplication;w(h,d)||(l.strategyApplication=h,
l.strategy=null,u||(null!==d&&d.addsFields||null!==h&&h.addsFields)&&(u=!0))}null!==c&&(l.transactionVersion=c.transactionVersion),
a[r]=l,s.push(l)});var l=null;return null!==i&&(r||u||(l=t.internalData),null===l&&(l=u?new h(i.toSpec()):i)),
null!==l&&s.forEach(function(e){var t=e.strategyApplication;null===t||!u&&null!==e.strategy||(e.strategy=t.strategyType.apply(l,t.externalFieldIndexes));
}),{transactionVersion:null!==n?n.transactionVersion:0,externalData:i,internalData:l,
roleInfoMap:a}}function w(e,t){return e===t?!0:null!=e&&null!=t&&e.internalMode.equals(t.internalMode)&&e.externalMode.equals(t.externalMode)&&e.strategyType===t.strategyType&&e.externalFieldIndexes.length===t.externalFieldIndexes.length&&e.externalFieldIndexes.every(function(e,n){
return t.externalFieldIndexes[n]===e})}var A=c.extend({constructor:function(e,t){
this.base(e,t),this.__adaptationModel=t.__adaptationModel,this.__getAdaptationModel();
},__getAdaptationModel:function(){return this.__adaptationModel=x(this.owner,this.__adaptationModel,this);
},_apply:function(t){this.base(t);try{var n=this.__getAdaptationModel();n.transactionVersion=0;
var i=n.roleInfoMap;Object.keys(i).forEach(function(e){i[e].transactionVersion=0}),
t.__adaptationModel=n}catch(r){g.testLevel(m.error,e)&&_.error("ModelAdapterChangeset apply failed: "+(r&&r.message));
}}}),j=i.type,T=t.extend({constructor:function(){if(this.base.apply(this,arguments),
null===this.model)throw f.argRequired("spec.model");this.__adaptationModel=x(this,null,null),
this.__updateInternalModel(),this.on("will:change",this.__onChangeWillHandler.bind(this),{
priority:-(1/0),isCritical:!0}),this.model.on("will:change",this.__onModelChangeWillHandler.bind(this),{
priority:-(1/0),isCritical:!0})},_createChangeset:function(e){return new A(e,this);
},__adaptationModel:null,__getAmbientAdaptationModel:function(){return(this.$changeset||this).__getAdaptationModel();
},__getAdaptationModel:function(){return this.__adaptationModel},__getAmbientRoleMode:function(e){
var t=this.__getAmbientAdaptationModel().roleInfoMap[e].strategyApplication;return t&&t.externalMode;
},__getAmbientRoleStrategy:function(e){return this.__getAmbientAdaptationModel().roleInfoMap[e].strategy;
},__onChangeWillHandler:function(e){var t=e.changeset,n=t.propertyNames;O(n,"selectionFilter")?this.__updateInternalSelection():this.__updateInternalModel();
},__onModelChangeWillHandler:function(e){var t=e.changeset;t.hasChange("selectionFilter")&&this.__updateExternalSelection();
},__updateInternalModel:function(){var e=this.__getAmbientAdaptationModel(),t=e.roleInfoMap,n=this.model,i=this.__calcInternalSelectionFilter();
l.enter().using(function(r){n.data=e.internalData,n.selectionFilter=i,Object.keys(t).forEach(function(e){
var i=t[e],r=i.strategyApplication,o=n.get(e);o.modeFixed=r&&r.internalMode,o.fields=null!==r?i.strategy.outputFieldNames:[];
}),r.accept()})},__updateInternalSelection:function(){this.model.selectionFilter=this.__calcInternalSelectionFilter();
},__updateExternalSelection:function(){this.selectionFilter=this.__calcExternalSelectionFilter();
},__calcInternalSelectionFilter:function(){var t=this.selectionFilter;if(null!==t)try{
return this._convertFilterToInternal(t)}catch(n){return g.testLevel(m.info,e)&&_.info("It was not possible to convert external selection filter: "+(n&&n.message)),
null}return null},__calcExternalSelectionFilter:function(){var t=this.model.selectionFilter;
if(null!==t)try{return this._convertFilterToExternal(t)}catch(n){return g.testLevel(m.info,e)&&_.info("It was not possible to convert internal selection filter: "+(n&&n.message)),
null}return null},_convertFilterToInternal:function(e){var t=this.__getAmbientAdaptationModel(),n=t.internalData;
if(null===n)return null;var i={modelAdapter:this,internalData:n,toExternal:!1};return e.visit(b).visit(v.bind(i));
},_convertFilterToExternal:function(e){var t=this.__getAmbientAdaptationModel(),n=t.internalData;
if(null===n)return null;var i={modelAdapter:this,internalData:n,toExternal:!0};return e.visit(b).visit(v.bind(i));
},__convertValuesMap:function(e,t){var n=this.__getAmbientAdaptationModel().roleInfoMap,i=Object.create(null),r=t?this.model:this;
return r.$type.eachVisualRole(function(o){var a,s=r.get(o);if(s.hasFields&&null!==(a=n[o.name].strategy)){
var u=C(s,e);if(null!==u){var l=t?a.invert(u):a.map(u);if(null==l)throw f.argInvalid("originalValuesMap","Unable to convert values.");
var c=t?a.inputFieldNames:a.outputFieldNames;l.forEach(function(e,t){void 0!==e&&(i[c[t]]=e);
})}}}),i},$type:{id:e.id,isAbstract:!0,get visualKeyType(){var e=this.get("model").valueType;
return e.visualKeyType},props:[{name:"model",valueType:n,isBoundary:!0,isRequired:!0,
isReadOnly:!0,defaultValue:function(){return{}}}]}}).implement({$type:{_configureProperties:function(e){
var t=this._normalizePropertiesSpec(e),n=Object.create(null);t.forEach(function(e,t){
p.hasOwn(n,e.name)||(n[e.name]={spec:e,index:t})});var i=n.model;if(null!=i){var r=i.spec.valueType;
if(null!=r){var o=this.get("model").valueType,a=u.resolveType(r).type;if(o!==a&&a.isSubtypeOf(o)){
this.label=a.label,this.description=a.description,this.ordinal=a.ordinal,this.category=a.category,
this.helpUrl=a.helpUrl;var s=[];a.eachVisualRole(function(t){var i=t.name,r=o.get(i,!0);
if(t!==r){var a,u=p.getOwn(n,i,null);null!==u?(a=Object.create(u.spec),this.has(i)||(a.base=j),
e[u.index]=null):a={name:i,base:this.has(i)?void 0:j},s.push(a)}},this),s.length>0&&(s.unshift(i.index+1,0),
t.splice.apply(t,s),e=t.filter(function(e){return null!==e}))}}}this.base(e)}}}).localize({
$type:y.structured.ModelAdapter}).configure({$type:e.config});return T}),define("pentaho/visual/color/utils",["require","pentaho/util/error"],function(e,t){
function n(e,t){var n,i={},r=e.length,o=t.length;for(n=0;r>n&&o>n;n++)i[e[n]]=t[n];
for(n=o;r>n;n++)i[e[n]]="#000000";return i}function i(e,t,n,i,a){return t>e?e=t:e>n&&(e=n),
arguments.length>4?o(e,t,n,u(i),u(a)):r(e,t,n,i)}function r(e,t,n,i){var r,a,s,l,c=i.length-1,h=n-t;
if(0>=h||!c)a=r=c;else{var d=(e-t)/h*c;r=Math.floor(d),a=Math.ceil(d)}s=u(i[r]),l=a!==r?u(i[a]):s;
var p=r/c*h+t,f=a/c*h+t;return o(e,p,f,s,l)}function o(e,t,n,i,r){var o;if(0>=n-t)o=r;else{
var a=(e-t)/(n-t);o=[Math.floor(a*(r[0]-i[0])+i[0]),Math.floor(a*(r[1]-i[1])+i[1]),Math.floor(a*(r[2]-i[2])+i[2])];
}return c(o)}function a(e,t){return e=u(e),t=Math.pow(.7,null!=t?t:1),c(Math.max(0,Math.floor(t*e[0])),Math.max(0,Math.floor(t*e[1])),Math.max(0,Math.floor(t*e[2])));
}function s(e,t,n,i){var r=i.length-1,o=n-t,a=Math.round((e-t)/o*r);return c(u(i[a]));
}function u(e){if("string"!=typeof e)return e;if(0===e.indexOf("#"))e=e.substring(1);else{
var t=h.exec(e);if(t)return[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)];
e=p[e.toLowerCase()]}return[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)];
}function l(n,i,r){var o=null;if(n){var a;switch(n.toLowerCase()){case"ryg":a="divergentRyg";
break;case"ryb":a="divergentRyb";break;case"blue":a="quantitativeBlue";break;case"gray":
a="quantitativeGray";break;default:throw t.argInvalid("colorSet")}if(i=i.toLowerCase(),
"gradient"===i)a+="5";else{var s=d.exec(i);a+=s?s[1]:""}var u="pentaho/visual/color/palettes/"+a,l=e(u);
o=l.colors.toArray(function(e){return e.value}),r&&(o=o.reverse())}return o}function c(e,t,n){
return e instanceof Array&&(n=e[2],t=e[1],e=e[0]),"RGB("+e+","+t+","+n+")"}var h=/^rgb\((\d+),(\d+),(\d+)\)$/i,d=/^(\d+)[_-]COLOR$/i,p={
aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",aquamarine:"7FFFD4",azure:"F0FFFF",
beige:"F5F5DC",bisque:"FFE4C4",black:"000000",blanchedalmond:"FFEBCD",blue:"0000FF",
blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",
chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",
cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenRod:"B8860B",darkgray:"A9A9A9",
darkgrey:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkoliveGreen:"556B2F",
darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",
darkslateblue:"483D8B",darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",
darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",
dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",
fuchsia:"FF00FF",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",
gray:"808080",grey:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",
hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",
lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",
lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",
lightgray:"D3D3D3",lightgrey:"D3D3D3",lightgreen:"90EE90",lightpink:"FFB6C1",lightsalmon:"FFA07A",
lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"778899",lightslategrey:"778899",
lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",
magenta:"FF00FF",maroon:"800000",mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",
mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",
mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",
mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",
olive:"808000",olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",
palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletRed:"D87093",
papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",
powderblue:"B0E0E6",purple:"800080",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",
saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",
sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",
slategrey:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",
teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",
wheat:"F5DEB3",white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"
};return{getRgbColor:c,parseColor:u,getRgbGradient:i,getRgbStep:s,buildPalette:l,
createPaletteMap:n,getRgbDarker:a}}),define("pentaho/visual/color/palettes/divergentRyb3",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"divergent",colors:["#FF0000","#FFFF00","#4BB6E4"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/divergentRyb5",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"divergent",colors:["#FF0000","#FFBF3F","#FFFF00","#DCDDDE","#4BB6E4"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/divergentRyg3",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"divergent",colors:["#FF0000","#FFFF00","#008000"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/divergentRyg5",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"divergent",colors:["#FF0000","#FFBF3F","#FFFF00","#BFDF3F","#008000"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/nominalDark",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"nominal",colors:["#002644","#014462","#663000","#604E1D","#261B4E","#3B2C58","#003524","#094E34","#668032","#74A611","#490B0B","#632422"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/nominalLight",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"nominal",colors:["#80AFD5","#81D4FA","#FFBC80","#F8E1A4","#AFA1E2","#C9B7EE","#80C2AD","#8BE2C1","#BFD09D","#CBEC8A","#DB8E8E","#FBADAB"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/nominalNeutral",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"nominal",colors:["#005DA6","#03A9F4","#FF7900","#F2C249","#5F43C4","#946FDD","#00845B","#18C482","#A4C65F","#AFE73E","#B71C1C","#F75B57"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/nominalPrimary",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/visual/color/palettes/nominalNeutral","pentaho/visual/color/palettes/nominalLight","pentaho/visual/color/palettes/nominalDark","pentaho/util/spec"],function(e,t,n,i,r,o){
"use strict";var a=n.colors.toArray().concat(i.colors.toArray().concat(r.colors.toArray())),s=o.merge({
level:"nominal",colors:a},e.config);return new t(s)}),define("pentaho/visual/color/palettes/quantitativeBlue3",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"quantitative",colors:["#CCDFED","#6D85A4","#0F2B5B"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/quantitativeBlue5",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"quantitative",colors:["#CCDFED","#9CB2C8","#6D85A4","#3E587F","#0F2B5B"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/quantitativeGray3",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"quantitative",colors:["#E6E6E6","#999999","#333333"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/quantitativeGray5",["pentaho/module!_","pentaho/visual/color/Palette","pentaho/util/spec"],function(e,t,n){
"use strict";var i=n.merge({level:"quantitative",colors:["#E6E6E6","#CCCCCC","#999999","#666666","#333333"]
},e.config);return new t(i)}),define("pentaho/visual/color/palettes/all",["./divergentRyb3","./divergentRyb5","./divergentRyg3","./divergentRyg5","./nominalDark","./nominalLight","./nominalNeutral","./nominalPrimary","./quantitativeBlue3","./quantitativeBlue5","./quantitativeGray3","./quantitativeGray5"],function(){
"use strict"}),define("pentaho/visual/models/types/Color",["pentaho/module!_","pentaho/type/String"],function(e,t){
"use strict";return t.extend({$type:{id:e.id}}).configure({$type:e.config})}),define("pentaho/visual/models/types/BackgroundFill",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["none","solid","gradient"]
}}).localize({$type:i.structured.BackgroundFill}).configure({$type:e.config})}),define("pentaho/visual/models/types/FontStyle",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["plain","bold","italic"]
}}).localize({$type:i.structured.FontStyle}).configure({$type:e.config})}),define("pentaho/visual/models/types/Sides",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["top","right","bottom","left"]
}}).localize({$type:i.structured.Sides}).configure({$type:e.config})}),define("pentaho/visual/models/types/LabelsOption",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["none","center","insideEnd","insideBase","outsideEnd","left","right","top","bottom","outside","inside"]
}}).localize({$type:i.structured.LabelsOption}).configure({$type:e.config})}),define("pentaho/visual/models/Abstract",["pentaho/module!_","../base/Model","./types/Color","./types/BackgroundFill","./types/FontStyle","./types/Sides","./types/LabelsOption","pentaho/i18n!./i18n/model","./theme/model"],function(e,t,n,i,r,o,a,s){
"use strict";function u(){return this.showLegend}return t.extend({$type:{id:e.id,
isAbstract:!0,defaultView:"pentaho/ccc/visual/Abstract",props:[{name:"rows",base:"pentaho/visual/role/Property",
isVisualKey:!0,modes:[{dataType:"number"},{dataType:"date"},{dataType:"list"}],ordinal:5
},{name:"backgroundFill",valueType:i,isRequired:!0,defaultValue:"none"},{name:"backgroundColor",
valueType:n,isApplicable:function(){return"none"!==this.backgroundFill},isRequired:!0
},{name:"backgroundColorEnd",valueType:n,isApplicable:function(){return"gradient"===this.backgroundFill;
},isRequired:!0},{name:"labelColor",valueType:n},{name:"labelSize",valueType:"number"
},{name:"labelStyle",valueType:r,isRequired:!0,defaultValue:"plain"},{name:"labelFontFamily",
valueType:"string"},{name:"showLegend",valueType:"boolean",defaultValue:!0},{name:"legendPosition",
valueType:o,isApplicable:u,isRequired:!0,defaultValue:"right"},{name:"legendBackgroundColor",
valueType:n,isApplicable:u},{name:"legendColor",valueType:n,isApplicable:u},{name:"legendSize",
valueType:"number",isApplicable:u},{name:"legendStyle",valueType:r,isApplicable:u,
isRequired:!0,defaultValue:"plain"},{name:"legendFontFamily",valueType:"string",isApplicable:u
},{name:"labelsOption",valueType:a}]}}).localize({$type:s.structured.Abstract}).configure({
$type:e.config})}),define("pentaho/visual/models/types/DisplayUnits",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["units_0","units_2","units_3","units_4","units_5","units_6"],
scaleFactorOf:function(e){if(e){var t=e.match(/^UNITS_(\d+)$/i);if(t){var n=+t[1];
if(n>0)return Math.pow(10,n)}}return 1}}}).localize({$type:i.structured.DisplayUnits
}).configure({$type:e.config})}),define("pentaho/visual/models/CartesianAbstract",["pentaho/module!_","./Abstract","./types/DisplayUnits","pentaho/i18n!./i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0,props:[{name:"autoRange",
valueType:"boolean",defaultValue:!0},{name:"valueAxisLowerLimit",valueType:"number"
},{name:"valueAxisUpperLimit",valueType:"number"},{name:"displayUnits",valueType:n,
isRequired:!0,defaultValue:"units_0"},{name:"autoRangeSecondary",valueType:"boolean",
defaultValue:!0},{name:"valueAxisLowerLimitSecondary",valueType:"number"},{name:"valueAxisUpperLimitSecondary",
valueType:"number"},{name:"displayUnitsSecondary",valueType:n,isRequired:!0,defaultValue:"units_0"
}]}}).localize({$type:i.structured.CartesianAbstract}).configure({$type:e.config});
}),define("pentaho/visual/models/mixins/ScaleColorDiscrete",["pentaho/module!_","../../base/Model","pentaho/i18n!../i18n/model"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0,props:[{name:"palette",
base:"pentaho/visual/color/PaletteProperty",levels:["nominal"],isRequired:!0}]}}).localize({
$type:n.structured.ScaleColorDiscrete}).configure({$type:e.config})}),define("pentaho/visual/models/CategoricalContinuousAbstract",["pentaho/module!_","./CartesianAbstract","./mixins/ScaleColorDiscrete","pentaho/i18n!./i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0,mixins:[n],props:[{name:"columns",
base:"pentaho/visual/role/Property",modes:[{dataType:"list"}],ordinal:6},{name:"multi",
base:"pentaho/visual/role/Property",modes:[{dataType:"list"}],ordinal:10},{name:"measures",
base:"pentaho/visual/role/Property",modes:[{dataType:["number"]}],ordinal:7}]}}).localize({
$type:i.structured.CategoricalContinuousAbstract}).configure({$type:e.config})}),
define("pentaho/visual/models/types/MaxChartsPerRow",["pentaho/module!_","pentaho/type/Number","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:[1,2,3,4,5]}}).localize({
$type:i.structured.MaxChartsPerRow}).configure({$type:e.config})}),define("pentaho/visual/models/types/MultiChartRangeScope",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["global","cell"]}
}).localize({$type:i.structured.MultiChartRangeScope}).configure({$type:e.config});
}),define("pentaho/visual/models/types/MultiChartOverflow",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["grow","fit","clip","page"]
}}).localize({$type:i.structured.MultiChartOverflow}).configure({$type:e.config});
}),define("pentaho/visual/models/mixins/MultiCharted",["pentaho/module!_","../../base/Model","../types/MaxChartsPerRow","../types/MultiChartRangeScope","../types/MultiChartOverflow","pentaho/i18n!../i18n/model"],function(e,t,n,i,r,o){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0,props:[{name:"maxChartsPerRow",
valueType:n,isRequired:!0,defaultValue:3},{name:"multiChartRangeScope",valueType:i,
isRequired:!0,defaultValue:"global"},{name:"multiChartOverflow",valueType:r,isRequired:!0,
defaultValue:"grow"}]}}).localize({$type:o.structured.MultiCharted}).configure({$type:e.config
})}),define("pentaho/visual/models/types/EmptyCellMode",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["gap","linear","zero"]
}}).localize({$type:i.structured.EmptyCellMode}).configure({$type:e.config})}),define("pentaho/visual/models/mixins/Interpolated",["pentaho/module!_","../../base/Model","../types/EmptyCellMode","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0,props:[{name:"emptyCellMode",
valueType:n,isRequired:!0,defaultValue:"gap"}]}}).localize({$type:i.structured.Interpolation
}).configure({$type:e.config})}),define("pentaho/visual/models/PointAbstract",["pentaho/module!_","./CategoricalContinuousAbstract","./types/LabelsOption","./mixins/MultiCharted","./mixins/Interpolated","pentaho/i18n!./i18n/model"],function(e,t,n,i,r,o){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0,mixins:[i,r],props:[{name:"measures",
fields:{isRequired:!0},ordinal:7},{name:"labelsOption",valueType:n,domain:["none","center","left","right","top","bottom"],
isRequired:!0,defaultValue:"none"}]}}).localize({$type:o.structured.PointAbstract
}).configure({$type:e.config})}),define("pentaho/visual/models/AreaStacked",["pentaho/module!_","./PointAbstract","pentaho/i18n!./i18n/model"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,v2Id:"ccc_area",category:"areachart",
defaultView:"pentaho/ccc/visual/AreaStacked"}}).localize({$type:n.structured.AreaStacked
}).configure({$type:e.config})}),define("pentaho/visual/models/BarAbstract",["pentaho/module!_","./CategoricalContinuousAbstract","./mixins/MultiCharted","pentaho/i18n!./i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],isAbstract:!0,props:[{name:"rows",
modes:[{dataType:"list"}]}]}}).localize({$type:i.structured.BarAbstract}).configure({
$type:e.config})}),define("pentaho/visual/models/types/TrendType",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["none","linear"]}
}).localize({$type:i.structured.TrendType}).configure({$type:e.config})}),define("pentaho/visual/models/types/LineWidth",["pentaho/module!_","pentaho/type/Number","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:[1,2,3,4,5,6,7,8]}
}).localize({$type:i.structured.LineWidth}).configure({$type:e.config})}),define("pentaho/visual/models/mixins/Trended",["pentaho/module!_","../../base/Model","../types/TrendType","../types/LineWidth","pentaho/i18n!../i18n/model"],function(e,t,n,i,r){
"use strict";function o(){return"none"!==this.trendType}return t.extend({$type:{id:e.id,
isAbstract:!0,props:[{name:"trendType",valueType:n,isRequired:!0,defaultValue:"none"
},{name:"trendName",valueType:"string",isApplicable:o},{name:"trendLineWidth",valueType:i,
isApplicable:o,isRequired:!0,defaultValue:1}]}}).localize({$type:r.structured.Trended
}).configure({$type:e.config})}),define("pentaho/visual/models/Bar",["pentaho/module!_","./BarAbstract","./types/LabelsOption","./mixins/Trended","pentaho/i18n!./i18n/model"],function(e,t,n,i,r){
"use strict";return t.extend({$type:{id:e.id,mixins:[i],v2Id:"ccc_bar",category:"barchart",
defaultView:"pentaho/ccc/visual/Bar",props:[{name:"measures",fields:{isRequired:!0
},ordinal:7},{name:"labelsOption",valueType:n,domain:["none","center","insideEnd","insideBase","outsideEnd"],
isRequired:!0,defaultValue:"none"}]}}).localize({$type:r.structured.Bar}).configure({
$type:e.config})}),define("pentaho/visual/models/BarHorizontal",["pentaho/module!_","./BarAbstract","./types/LabelsOption","pentaho/i18n!./i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,v2Id:"ccc_horzbar",category:"horzbarchart",
defaultView:"pentaho/ccc/visual/BarHorizontal",props:[{name:"measures",fields:{isRequired:!0
}},{name:"labelsOption",valueType:n,domain:["none","center","insideEnd","insideBase","outsideEnd"],
isRequired:!0,defaultValue:"none"}]}}).localize({$type:i.structured.BarHorizontal
}).configure({$type:e.config})}),define("pentaho/visual/models/types/Shape",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["none","circle","cross","diamond","square","triangle"]
}}).localize({$type:i.structured.Shape}).configure({$type:e.config})}),define("pentaho/visual/models/BarLine",["pentaho/module!_","./BarAbstract","./types/LabelsOption","./types/Shape","./types/LineWidth","./mixins/Interpolated","pentaho/i18n!./i18n/model"],function(e,t,n,i,r,o,a){
"use strict";function s(){return!this.measures.hasFields&&!this.measuresLine.hasFields;
}function u(){return this.measuresLine.hasFields}function l(){return this.measures.hasFields;
}return t.extend({$type:{id:e.id,mixins:[o],v2Id:"ccc_barline",category:"barchart",
defaultView:"pentaho/ccc/visual/BarLine",props:[{name:"measures",fields:{isRequired:s
}},{name:"measuresLine",base:"pentaho/visual/role/Property",modes:[{dataType:["number"]
}],fields:{isRequired:s},ordinal:7},{name:"lineWidth",valueType:r,isApplicable:u,
isRequired:!0,defaultValue:1},{name:"labelsOption",valueType:n,domain:["none","center","insideEnd","insideBase","outsideEnd"],
isApplicable:l,isRequired:!0,defaultValue:"none"},{name:"lineLabelsOption",valueType:n,
domain:["none","center","left","right","top","bottom"],isApplicable:u,isRequired:!0,
defaultValue:"none"},{name:"shape",valueType:i,isRequired:!0,defaultValue:"circle",
isApplicable:u}]}}).localize({$type:a.structured.BarLine}).configure({$type:e.config
})}),define("pentaho/visual/models/BarNormalizedAbstract",["pentaho/module!_","./BarAbstract","./types/LabelsOption","pentaho/i18n!./i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0,props:[{name:"measures",
fields:{isRequired:!0}},{name:"labelsOption",valueType:n,domain:["none","center","insideEnd","insideBase"],
isRequired:!0,defaultValue:"none"}]}}).localize({$type:i.structured.BarNormalizedAbstract
}).configure({$type:e.config})}),define("pentaho/visual/models/BarNormalized",["pentaho/module!_","./BarNormalizedAbstract","pentaho/i18n!./i18n/model"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,v2Id:"ccc_barnormalized",category:"barchart",
defaultView:"pentaho/ccc/visual/BarNormalized"}}).localize({$type:n.structured.BarNormalized
}).configure({$type:e.config})}),define("pentaho/visual/models/BarNormalizedHorizontal",["pentaho/module!_","./BarNormalizedAbstract","pentaho/i18n!./i18n/model"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,v2Id:"ccc_horzbarnormalized",category:"horzbarchart",
defaultView:"pentaho/ccc/visual/BarNormalizedHorizontal"}}).localize({$type:n.structured.BarNormalizedHorizontal
}).configure({$type:e.config})}),define("pentaho/visual/models/BarStacked",["pentaho/module!_","./BarAbstract","./types/LabelsOption","pentaho/i18n!./i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,v2Id:"ccc_barstacked",category:"barchart",
defaultView:"pentaho/ccc/visual/BarStacked",props:[{name:"measures",fields:{isRequired:!0
}},{name:"labelsOption",valueType:n,domain:["none","center","insideEnd","insideBase"],
isRequired:!0,defaultValue:"none"}]}}).localize({$type:i.structured.BarStacked}).configure({
$type:e.config})}),define("pentaho/visual/models/BarStackedHorizontal",["pentaho/module!_","./BarAbstract","./types/LabelsOption","pentaho/i18n!./i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,v2Id:"ccc_horzbarstacked",category:"horzbarchart",
defaultView:"pentaho/ccc/visual/BarStackedHorizontal",props:[{name:"measures",fields:{
isRequired:!0}},{name:"labelsOption",valueType:n,domain:["none","center","insideEnd","insideBase"],
isRequired:!0,defaultValue:"none"}]}}).localize({$type:i.structured.BarStackedHorizontal
}).configure({$type:e.config})}),define("pentaho/visual/models/types/ColorSet",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["ryg","ryb","blue","gray"]
}}).localize({$type:i.structured.ColorSet}).configure({$type:e.config})}),define("pentaho/visual/models/types/Pattern",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["gradient","3_color","5_color"]
}}).localize({$type:i.structured.Pattern}).configure({$type:e.config})}),define("pentaho/visual/models/mixins/ScaleColorContinuous",["pentaho/module!_","../../base/Model","../types/ColorSet","../types/Pattern","pentaho/i18n!../i18n/model"],function(e,t,n,i,r){
"use strict";function o(){var e=this.color.mode;return null!==e&&e.isContinuous}return t.extend({
$type:{id:e.id,isAbstract:!0,props:[{name:"paletteQuantitative",base:"pentaho/visual/color/PaletteProperty",
levels:["quantitative","divergent"],isApplicable:o,defaultValue:null},{name:"pattern",
valueType:i,isRequired:!0,isApplicable:o,defaultValue:"gradient"},{name:"colorSet",
valueType:n,isRequired:!0,isApplicable:o,defaultValue:"ryg"},{name:"reverseColors",
valueType:"boolean",isRequired:!0,isApplicable:o,defaultValue:!1}]}}).localize({$type:r.structured.ScaleColorContinuous
}).configure({$type:e.config})}),define("pentaho/visual/models/MetricPointAbstract",["pentaho/module!_","./CartesianAbstract","./types/LabelsOption","./mixins/ScaleColorContinuous","./mixins/ScaleColorDiscrete","./mixins/MultiCharted","./mixins/Trended","../base/KeyTypes","pentaho/i18n!./i18n/model"],function(e,t,n,i,r,o,a,s,u){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0,visualKeyType:s.dataOrdinal,
mixins:[a,r,i,o],category:"scatter",props:[{name:"rows",modes:[{dataType:"list"}]
},{name:"x",base:"pentaho/visual/role/Property",modes:[{dataType:"number"},{dataType:"date"
}],fields:{isRequired:!0},ordinal:1},{name:"y",base:"pentaho/visual/role/Property",
modes:[{dataType:"number"},{dataType:"date"}],fields:{isRequired:!0},ordinal:2},{
name:"color",base:"pentaho/visual/role/Property",isVisualKey:!1,modes:[{dataType:"number"
},{dataType:"list"}],ordinal:6},{name:"multi",base:"pentaho/visual/role/Property",
modes:[{dataType:"list"}],ordinal:10},{name:"labelsOption",valueType:n,domain:["none","center","left","right","top","bottom"],
isRequired:!0,defaultValue:"none"}]}}).localize({$type:u.structured.MetricPointAbstract
}).configure({$type:e.config})}),define("pentaho/visual/models/types/SizeByNegativesMode",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["negLowest","useAbs"]
}}).localize({$type:i.structured.SizeByNegativesMode}).configure({$type:e.config});
}),define("pentaho/visual/models/mixins/ScaleSizeContinuous",["pentaho/module!_","../../base/Model","../types/SizeByNegativesMode","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,isAbstract:!0,props:[{name:"sizeByNegativesMode",
valueType:n,isApplicable:function(){return this.countOf("size")>0},isRequired:!0,
defaultValue:"negLowest"}]}}).localize({$type:i.structured.ScaleSizeContinuous}).configure({
$type:e.config})}),define("pentaho/visual/models/Bubble",["pentaho/module!_","./MetricPointAbstract","./mixins/ScaleSizeContinuous","pentaho/i18n!./i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],v2Id:"ccc_scatter",defaultView:"pentaho/ccc/visual/Bubble",
props:[{name:"size",base:"pentaho/visual/role/Property",modes:[{dataType:"number"
}],ordinal:7}]}}).localize({$type:i.structured.Bubble}).configure({$type:e.config
})}),define("pentaho/visual/models/Pie",["pentaho/module!_","./Abstract","./types/LabelsOption","./mixins/MultiCharted","./mixins/ScaleColorDiscrete","pentaho/i18n!./i18n/model"],function(e,t,n,i,r,o){
"use strict";return t.extend({$type:{id:e.id,mixins:[i,r],v2Id:"ccc_pie",category:"piechart",
defaultView:"pentaho/ccc/visual/Pie",props:[{name:"rows",modes:[{dataType:"list"}]
},{name:"columns",base:"pentaho/visual/role/Property",modes:[{dataType:"list"}],ordinal:6
},{name:"measures",base:"pentaho/visual/role/Property",modes:[{dataType:["number"]
}],fields:{isRequired:!0},ordinal:7},{name:"labelsOption",valueType:n,domain:["none","outside","inside"],
isRequired:!0,defaultValue:"outside"}]}}).localize({$type:o.structured.Pie}).configure({
$type:e.config})}),define("pentaho/visual/models/Donut",["pentaho/module!_","./Pie","pentaho/i18n!./i18n/model"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,defaultView:"pentaho/ccc/visual/Donut"
}}).localize({$type:n.structured.Donut}).configure({$type:e.config})}),define("pentaho/visual/models/HeatGrid",["pentaho/module!_","./CartesianAbstract","./types/Shape","./types/LabelsOption","./mixins/ScaleSizeContinuous","./mixins/ScaleColorContinuous","pentaho/i18n!./i18n/model"],function(e,t,n,i,r,o,a){
"use strict";function s(){return!this.size.hasFields&&!this.color.hasFields}return t.extend({
$type:{id:e.id,mixins:[r,o],v2Id:"ccc_heatgrid",category:"heatgrid",defaultView:"pentaho/ccc/visual/HeatGrid",
props:[{name:"rows",modes:[{dataType:"list"}],fields:{isRequired:!0},ordinal:5},{
name:"columns",base:"pentaho/visual/role/Property",modes:[{dataType:"list"}],ordinal:6
},{name:"color",base:"pentaho/visual/role/Property",modes:[{dataType:"number"}],fields:{
isRequired:s},ordinal:7},{name:"size",base:"pentaho/visual/role/Property",modes:[{
dataType:"number"}],fields:{isRequired:s},ordinal:8},{name:"labelsOption",valueType:i,
domain:["none","center"],isRequired:!0,defaultValue:"none"},{name:"shape",valueType:n,
domain:["none","circle","square"],isRequired:!0,defaultValue:"square"}]}}).localize({
$type:a.structured.HeatGrid}).configure({$type:e.config})}),define("pentaho/visual/models/Line",["pentaho/module!_","./PointAbstract","./types/Shape","./types/LineWidth","./mixins/Trended","pentaho/i18n!./i18n/model"],function(e,t,n,i,r,o){
"use strict";return t.extend({$type:{id:e.id,mixins:[r],v2Id:"ccc_line",category:"linechart",
defaultView:"pentaho/ccc/visual/Line",props:[{name:"lineWidth",valueType:i,isRequired:!0,
defaultValue:1},{name:"shape",valueType:n,isRequired:!0,defaultValue:"circle"}]}}).localize({
$type:o.structured.Line}).configure({$type:e.config})}),define("pentaho/visual/models/Scatter",["pentaho/module!_","./MetricPointAbstract","pentaho/i18n!./i18n/model"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,defaultView:"pentaho/ccc/visual/Scatter"
}}).localize({$type:n.structured.Scatter}).configure({$type:e.config})}),define("pentaho/visual/models/types/SliceOrder",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum","pentaho/i18n!../i18n/model"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,mixins:[n],domain:["bySizeDescending","bySizeAscending","none"]
}}).localize({$type:i.structured.SliceOrder}).configure({$type:e.config})}),define("pentaho/visual/models/Sunburst",["pentaho/module!_","./Abstract","./types/DisplayUnits","./types/LabelsOption","./types/SliceOrder","./mixins/MultiCharted","./mixins/ScaleColorDiscrete","pentaho/i18n!./i18n/model"],function(e,t,n,i,r,o,a,s){
"use strict";function u(){return this.size.hasFields}return t.extend({$type:{id:e.id,
mixins:[o,a],v2Id:"ccc_sunburst",category:"treemapchart",defaultView:"pentaho/ccc/visual/Sunburst",
props:[{name:"rows",modes:[{dataType:"list"}],fields:{isRequired:!0}},{name:"size",
base:"pentaho/visual/role/Property",modes:[{dataType:"number"}],ordinal:7},{name:"multi",
base:"pentaho/visual/role/Property",modes:[{dataType:"list"}],ordinal:10},{name:"displayUnits",
valueType:n,isRequired:!0,defaultValue:"units_0"},{name:"labelsOption",valueType:i,
domain:["none","center"],isApplicable:u,isRequired:!0,defaultValue:"none"},{name:"emptySlicesHidden",
valueType:"boolean",isRequired:!0,defaultValue:!0},{name:"sliceOrder",valueType:r,
isApplicable:u,isRequired:!0,defaultValue:"bySizeDescending"}]}}).localize({$type:s.structured.Sunburst
}).configure({$type:e.config})}),define("pentaho/visual/models/all",["./Abstract","./AreaStacked","./Bar","./BarAbstract","./BarHorizontal","./BarLine","./BarNormalized","./BarNormalizedAbstract","./BarNormalizedHorizontal","./BarStacked","./BarStackedHorizontal","./Bubble","./CartesianAbstract","./CategoricalContinuousAbstract","./Donut","./HeatGrid","./Line","./MetricPointAbstract","./Pie","./PointAbstract","./Scatter","./Sunburst","./mixins/Interpolated","./mixins/MultiCharted","./mixins/ScaleColorContinuous","./mixins/ScaleColorDiscrete","./mixins/ScaleSizeContinuous","./mixins/Trended","./types/BackgroundFill","./types/Color","./types/ColorSet","./types/DisplayUnits","./types/EmptyCellMode","./types/FontStyle","./types/LabelsOption","./types/LineWidth","./types/MaxChartsPerRow","./types/MultiChartOverflow","./types/MultiChartRangeScope","./types/Pattern","./types/Shape","./types/Sides","./types/SizeByNegativesMode","./types/SliceOrder","./types/TrendType"],function(){
"use strict"}),define("pentaho/visual/role/adaptation/Strategy",["pentaho/module!_","pentaho/type/Complex","pentaho/util/object","pentaho/util/arg","pentaho/util/error","pentaho/lang/OperationInvalidError","pentaho/i18n!../i18n/messages"],function(e,t,n,i,r,o,a){
"use strict";var s=t.extend({constructor:function(e){this.base(e),n.setConst(this,"data",i.required(e,"data","instSpec")),
n.setConst(this,"inputFieldIndexes",i.required(e,"inputFieldIndexes","instSpec"));
},_setOutputFieldIndexes:function(e){if(null==e)throw r.argRequired("instSpec.outputFieldIndexes");
n.setConst(this,"outputFieldIndexes",e)},get isInvertible(){return!1},get outputFieldNames(){
var e=this.data;return this.outputFieldIndexes.map(function(t){return e.getColumnId(t);
})},get inputFieldNames(){var e=this.data;return this.inputFieldIndexes.map(function(t){
return e.getColumnId(t)})},invert:function(e){throw new o("Not supported.")},_getDataRowCells:function(e,t,n){
if(0>e)return null;null==n&&(n=t.length);for(var i=n,r=new Array(i),o=this.data;i--;)r[i]=o.getCell(e,t[i]);
return r},_createFieldsKeyFuns:function(e){for(var t=this.data,i=e.length,r=new Array(i),o=i;o--;)r[o]=n.getSameTypeKeyFun(t.getColumnType(e[o]));
return r},$type:{id:e.id,isAbstract:!0,get isIdentity(){return!1}}}).localize({$type:a.structured.adaptation.Strategy
}).configure({$type:e.config});return s}),define("pentaho/visual/role/adaptation/IdentityStrategy",["pentaho/module!_","./Strategy","pentaho/util/object","pentaho/data/util"],function(e,t,n,i){
var r=t.extend({constructor:function(e){this.base(e),this._setOutputFieldIndexes(this.inputFieldIndexes),
this.__index=null,this.__keyFun=null},get isInvertible(){return!0},map:function(e){
var t=this.__getCellByValue(e[0]);return t&&[t]},invert:function(e){var t=this.__getCellByValue(e[0]);
return t&&[t]},__getCellByValue:function(e){var t=this.__getRowIndexByValueKeyMap(),n=this.__keyFun(i.getCellValue(e)),r=t[n];
return void 0===r?null:this.data.getCell(r,this.inputFieldIndexes[0])},__getRowIndexByValueKeyMap:function(){
var e=this.__index;return null===e&&(this.__installIndex(),e=this.__index),e},__installIndex:function(){
for(var e=this.__index=Object.create(null),t=this.outputFieldIndexes[0],i=this.data,r=this.__keyFun=n.getSameTypeKeyFun(i.getColumnType(t)),o=i.getNumberOfRows(),a=-1;++a<o;){
var s=i.getValue(a,t),u=r(s);void 0===e[u]&&(e[u]=a)}},$type:{id:e.id,get isIdentity(){
return!0},getInputTypeFor:function(e,t){return e.isList?null:e},validateApplication:function(e,t){
return{isValid:!0,addsFields:!1}},apply:function(e,t){return new r({data:e,inputFieldIndexes:t
})}}}).configure({$type:e.config});return r}),define("pentaho/visual/role/adaptation/TupleStrategy",["pentaho/module!_","./Strategy","pentaho/util/object","pentaho/data/util"],function(e,t,n,i){
"use strict";function r(e,t){this.key=e,this.index=t,this.children=null}function o(e){
for(var t=e.length,n=0;t--&&void 0===e[t];)n++;return n>0?e.slice(0,-n):e}r.prototype.getIndexOf=function(e,t){
for(var n=-1,r=e.length,o=this;++n<r;){var a=o.children;if(null===a)return-1;var s=i.getCellValue(e[n]),u=t[n](s),l=a[u];
if(null==l)return-1;o=l}return o.index},r.prototype.add=function(e,t,n,i){for(var o=-1,a=n.length,s=new Array(a),u=this;++o<a;){
var l=u.children;null===l&&(u.children=l=Object.create(null));var c;s[o]=c=e.getValue(t,n[o]);
var h=i[o](c),d=l[h];null==d&&(l[h]=d=new r(h,t)),u=d}return s};var a=t.extend({constructor:function(e){
this.base(e),this._setOutputFieldIndexes(this.inputFieldIndexes),this.__keyFuns=this._createFieldsKeyFuns(this.inputFieldIndexes),
this.__index=null},get isInvertible(){return!0},map:function(e){return e=o(e),this._getDataRowCells(this.__getIndex().getIndexOf(e,this.__keyFuns),this.outputFieldIndexes,e.length);
},invert:function(e){return e=o(e),this._getDataRowCells(this.__getIndex().getIndexOf(e,this.__keyFuns),this.inputFieldIndexes,e.length);
},__getIndex:function(){var e=this.__index;return null===e&&(this.__installIndex(),
e=this.__index),e},__installIndex:function(){for(var e=this.__index=new r("",-1),t=this.inputFieldIndexes,n=this.__keyFuns,i=this.data,o=i.getNumberOfRows(),a=-1;++a<o;)e.add(i,a,t,n);
},$type:{id:e.id,get isIdentity(){return!0},getInputTypeFor:function(e,t){return e.isList?e:null;
},validateApplication:function(e,t){return{isValid:!0,addsFields:!1}},apply:function(e,t){
return new a({data:e,inputFieldIndexes:t})}}}).configure({$type:e.config});return a;
}),define("pentaho/visual/role/adaptation/CombineStrategy",["pentaho/module!_","./Strategy","pentaho/type/String","pentaho/type/List","pentaho/util/object","pentaho/data/util"],function(e,t,n,i,r,o){
"use strict";var a=t.extend({constructor:function(e){this.base(e);var t,n;this.__inputKeyFuns=t=this._createFieldsKeyFuns(this.inputFieldIndexes),
this.__outputKeyFun=r.getSameTypeKeyFun("string"),this.__outputIndex=n=Object.create(null);
for(var i,o=this.inputFieldIndexes,a=this.data,s=i="combined_"+o.join("_");a.getColumnIndexById(i)>=0;)i=s+"_"+new Date;
var u=this.formattedSeparator,l=o.map(function(e){return a.getColumnLabel(e)}).join(u);
a.model.attributes.add({name:i,type:"string",label:l,isKey:!0});for(var c=a.addColumn(i),h=a.getNumberOfRows(),d=-1,p=o.length,f=this.valueSeparator;++d<h;){
for(var _,g,m=-1;++m<p;){var y=a.getCell(d,o[m]),v=t[m](y.value);0===m?(_=v,g=y.formatted):(_+=f+v,
g+=u+(y.formatted||""))}var b=a.getCell(d,c);b.value=_,b.label=g,r.hasOwn(n,_)||(n[_]=d);
}this._setOutputFieldIndexes([c])},get isInvertible(){return!0},map:function(e){var t=this.__combine(e),n=r.getOwn(this.__outputIndex,t);
return void 0===n?null:[this.data.getCell(n,this.outputFieldIndexes[0])]},invert:function(e){
var t=this.__outputKeyFun(o.getCellValue(e[0])),n=r.getOwn(this.__outputIndex,t);return void 0===n?null:this._getDataRowCells(n,this.inputFieldIndexes);
},__combine:function(e){for(var t,n=this.valueSeparator,i=this.__inputKeyFuns,r=i.length,a=-1;++a<r;){
var s=o.getCellValue(e[a]),u=i[a](s);0===a?t=u:t+=n+u}return t},$type:{id:e.id,props:[{
name:"valueSeparator",valueType:"string",isRequired:!0,defaultValue:"~"},{name:"formattedSeparator",
valueType:"string",isRequired:!0,defaultValue:" ~ "}],getInputTypeFor:function(e,t){
return t!==!1&&e.isSubtypeOf(n.type)?i.type:null},validateApplication:function(e,t){
return{isValid:!0,addsFields:!0}},apply:function(e,t){return new a({data:e,inputFieldIndexes:t
})}}}).configure({$type:e.config});return a}),define("pentaho/visual/role/adaptation/TimeIntervalDuration",["pentaho/module!_","pentaho/type/String","pentaho/type/mixins/Enum"],function(e,t,n){
return t.extend({$type:{id:e.id,mixins:[n],domain:["year","halfYear","quarter","month","week","day","hour","minute","second","millisecond","instant"]
}}).configure({$type:e.config})}),define("pentaho/visual/role/adaptation/EntityWithTimeIntervalKeyStrategy",["pentaho/module!_","./Strategy","./TimeIntervalDuration","pentaho/type/loader","pentaho/type/Date","pentaho/util/object","pentaho/util/date","pentaho/data/util"],function(e,t,n,i,r,o,a,s){
"use strict";var u=i.resolveType(["string"]).type,l=t.extend({constructor:function(e){
this.base(e),this.__keyFun=o.getSameTypeKeyFun("date"),this.__forwardIndex=Object.create(null),
this.__backIndex=Object.create(null);var t=this.inputFieldIndexes,n=this.data;this.mainInputPosition=this.$type.__getMainInputFieldPosition(t,n);
for(var i,r=n.getColumnAttribute(t[this.mainInputPosition]),s=i=this.$type.__getOutputFieldName(t);n.getColumnIndexById(i)>=0;)i=s+"_"+new Date;
n.model.attributes.add({name:i,type:"date",label:this.$type.__getOutputFieldLabel(t,n),
isKey:!0,p:{timeIntervalDuration:r.property("EntityWithTimeIntervalKey").duration
}});for(var u=n.addColumn(i),l=n.getNumberOfRows();l--;){for(var c=t.length,h=new Array(c),d=[],p=-1;++p<c;){
h[p]=n.getCell(l,t[p]);var f=h[p].label;f&&d.push(f)}var _=h[this.mainInputPosition],g=_.value,m=null!==g?a.parseDateEcma262v7(_.referent.property("startDateTime")):null,y=n.getCell(l,u);
y.value=m,y.label=d.join(", "),this.__backIndex[this.__keyFun.call(null,m)]=l,this.__forwardIndex[null===g?"":g]=l;
}this._setOutputFieldIndexes([u])},get isInvertible(){return!0},map:function(e){var t=s.getCellValue(e[this.mainInputPosition]),n=this.__forwardIndex[null===t?"":t];
return null!=n?this._getDataRowCells(n,this.outputFieldIndexes):null},invert:function(e){
var t=s.getCellValue(e[0]);t=this.__keyFun.call(null,t);var n=this.__backIndex[t];
return null!=n?this._getDataRowCells(n,this.inputFieldIndexes):null},$type:{id:e.id,
getInputTypeFor:function(e,t){return t!==!1&&e.isSubtypeOf(r.type)?u:null},validateApplication:function(e,t){
var n=this.__getMainInputFieldPosition(t,e);return{isValid:n>-1,addsFields:!0}},__getMainInputFieldPosition:function(e,t){
for(var i=null,r=null,o=e.length;o--;){var a=t.getColumnProperty(e[o],"EntityWithTimeIntervalKey");
{if(null==a){i=null;break}(null==i||n.type.comparePrimitiveValues(i.duration,a.duration)<1)&&(i=a,
r=o)}}if(null!=i){var s=i.isStartDateTimeProvided;if(null==s||s)return r}return-1;
},__getOutputFieldName:function(e){return e.join("_")},__getOutputFieldLabel:function(e,t){
for(var n=e.length,i=new Array(n);n--;){var r=t.getColumnAttribute(e[n]);i[n]=r.label;
}return i.join(", ")},apply:function(e,t){return new l({data:e,inputFieldIndexes:t
})}}}).configure({$type:e.config});return l}),define("pentaho/visual/role/adaptation/EntityWithNumberKeyStrategy",["pentaho/module!_","./Strategy","pentaho/type/String","pentaho/type/Number","pentaho/util/object","pentaho/data/util"],function(e,t,n,i,r,o){
"use strict";var a=t.extend({constructor:function(e){this.base(e);var t,n,i,o;this.__inputKeyFun=t=r.getSameTypeKeyFun("string"),
this.__outputKeyFun=n=r.getSameTypeKeyFun("number"),this.__inputIndex=i=Object.create(null),
this.__outputIndex=o=Object.create(null);for(var a,s=this.inputFieldIndexes[0],u=this.data,l=a="numberKey_"+s;u.getColumnIndexById(a)>=0;)a=l+"_"+new Date;
u.model.attributes.add({name:a,type:"number",label:u.getColumnLabel(s),isKey:!0});
for(var c=u.addColumn(a),h=u.getNumberOfRows(),d=-1;++d<h;){var p=u.getCell(d,s),f=p.value,_=null!==f?p.referent.property("numberKey"):null,g=u.getCell(d,c);
g.value=_,g.label=p.label;var m=t(f);r.hasOwn(i,m)||(i[m]=d,o[n(_)]=d)}this._setOutputFieldIndexes([c]);
},get isInvertible(){return!0},map:function(e){var t=o.getCellValue(e[0]),n=r.getOwn(this.__inputIndex,this.__inputKeyFun(t));
return void 0===n?null:[this.data.getCell(n,this.outputFieldIndexes[0])]},invert:function(e){
var t=o.getCellValue(e[0]),n=r.getOwn(this.__outputIndex,this.__outputKeyFun(t));return void 0===n?null:[this.data.getCell(n,this.inputFieldIndexes[0])];
},$type:{id:e.id,get isIdentity(){return!0},getInputTypeFor:function(e,t){return t!==!1&&e.isSubtypeOf(i.type)?n.type:null;
},validateApplication:function(e,t){var n=t[0],i=e.getColumnProperty(n,"EntityWithNumberKey");
return null==i?{isValid:!1}:{isValid:!0,addsFields:!0}},apply:function(e,t){return new a({
data:e,inputFieldIndexes:t})}}}).configure({$type:e.config});return a}),define("pentaho/visual/role/adaptation/allStrategies",["./IdentityStrategy","./TupleStrategy","./CombineStrategy","./EntityWithTimeIntervalKeyStrategy","./EntityWithNumberKeyStrategy"],function(){
"use strict"}),define("pentaho/visual/role/util",["pentaho/type/changes/Transaction","pentaho/data/util","pentaho/util/arg","pentaho/util/fun"],function(e,t,n,i){
"use strict";function r(e,t){var n=t.length;return e.sort(function(e,r){for(var o=-1;++o<n;){
var a=t[o],s=i.compare(a(e),a(r));if(0!==s)return s}return 0})}var o={testAddField:function(t,i,r,o){
var a=n.optional(o,"alternateData",null);if(null===a&&null===t.data)return null;var s=t.$type.get(i),u=t.get(i),l=u.fields,c=l.count,h=c>0?l.get(r):null,d=n.optional(o,"fieldPosition",null),p=!1;
if(c>0&&null!=d&&c>d){d=Math.max(0,d);var f=l.at(d);if(f===h)return null;p=n.optional(o,"replaceTarget",!1),
"auto"===p&&(p=null===h?l.count>=s.fields.countRangeOn(t,{ignoreCurrentMode:!0}).max:!1);
}else if(d=c,null!==h&&l.at(d-1)===h)return null;return e.enter().using(function(e){
null!==a&&(t.data=a),t.selectionFilter=null,p&&l.removeAt(d,1),null===h?l.insert(r,d):l.move(h,d);
var n=e.acceptWill().isFulfilled&&!s.validateOn(t);return n?{name:i,propType:s,fieldName:r,
fieldPosition:d,replaceTarget:p,mode:u.mode}:null})},testAddFieldAtAutoPosition:function(e,t,n,i){
for(var r=null==i?{}:Object.create(i),a=e.get(t).fields.count+1;a--;){r.fieldPosition=a;
var s=o.testAddField(e,t,n,r);if(null!==s)return s}return null},getValidRolesForAddingField:function(e,t,n){
var i=[];return e.$type.eachVisualRole(function(r){if(r.isBrowsable){var a=o.testAddFieldAtAutoPosition(e,r.name,t,n);
null!==a&&i.push(a)}}),i},getBestRoleForAddingField:function(e,i,a){var s=n.optional(a,"alternateData")||e.data;
if(null===s)return null;var u=o.getValidRolesForAddingField(e,i,a);if(0===u.length)return null;
var l=s.getColumnIndexById(i),c=t.isColumnTypeContinuous(s.getColumnType(l)),h=r(u,[function(t){
var n=e.get(t.name),i=t.propType.fields.countRangeOn(e),r=n.fields.count<i.min;return r?0:1;
},function(e){return e.mode.isContinuous?0:c?1:0},function(t){var n=e.get(t.name),i=!1;
if(n.fields.count>0){var r=t.fieldName.lastIndexOf("].[");if(r>0){i=!0;var o=t.fieldName.substring(0,r+1);
n.fields.each(function(e){return 0!==e.name.indexOf(o)?(i=!1,!1):void 0})}}return i?0:1;
},function(t){var n=e.get(t.name);return n.fields.count},function(e){return e.propType.ordinal;
},function(e){return e.propType.index}]);return h[0]}};return o}),define("pentaho/visual/scene/util",["pentaho/util/error","pentaho/data/util"],function(e,t){
"use strict";var n={createFilterFromVars:function(e,i){var r=n.invertVars(e,i);return t.createFilterFromCellsMap(r,i.data);
},invertVars:function(e,n,i){function r(e,n){(!u||t.isColumnKeyEffective(s,o[n],l))&&(h[a[n]]=e);
}var o,a,s=n.data,u=!(i&&i.includeMeasureFields),l=u?t.hasAnyKeyColumns(s):null,c=n.$type,h={};
for(var d in e){var p=c.get(d,!0);if(null!==p&&c.isVisualRole(p)){var f=n.get(d);if(f.hasFields){
o=u?[]:null,a=[],f.fields.each(function(e){var t=e.name;a.push(t),u&&o.push(s.getColumnIndexById(t));
});var _=e[d];Array.isArray(_)?_.forEach(r):r(_,0)}}}return h}};return n}),define("pentaho/visual/scene/impl/Variable",["module","pentaho/lang/Base"],function(e,t){
return t.extend(e.id,{constructor:function(e,t){this.value=e,this.formatted=void 0!==t?t:null;
},valueOf:function(){return this.value},toString:function(){return this.formatted;
}})}),define("pentaho/visual/scene/Base",["module","pentaho/lang/Base","./util","./impl/Variable","pentaho/util/object","pentaho/util/error"],function(e,t,n,i,r,o){
function a(e,t){var n=e.fieldIndexes,i=e.mode;return i.dataType.isList?u(t,n):s(t,n[0]);
}function s(e,t){return function(n){return e.getCell(n,t)}}function u(e,t){var n=t.length;
return function(t){for(var i=new Array(n),r=n;r--;)i[r]=e.getCell(t,r);return i}}
var l=t.extend(e.id,{constructor:function(e,t){var n=null!=e;if(n)this.parent=e,this.index=e.__appendChildCore(this),
this.vars=Object.create(e.vars);else{if(this.parent=null,this.index=-1,this.vars=Object.create(null),
r.setConst(this.vars,"$root",this),null==t)throw o.argRequired("view");this.__view=t;
}},parent:null,index:-1,children:Object.freeze([]),get root(){return this.vars.$root;
},get view(){return this.root.__view},__appendChildCore:function(e){var t=r.getOwn(this,"children")||(this.children=[]),n=t.length;
return t.push(e),n},createFilter:function(){return n.createFilterFromVars(this.vars,this.view.model);
},invert:function(e){return n.invertVars(this.vars,this.view.model,e)}},{buildScenesFlat:function(e){
var t=new l(null,e),n=e.model,i=n.data,r=[];n.$type.eachVisualRole(function(e){var t=n.get(e);
t.hasFields&&r.push({name:e.name,mapper:a(t,i)})});for(var o=-1,s=i.getNumberOfRows(),u=r.length;++o<s;)for(var c=new l(t),h=-1;++h<u;){
var d=r[h];c.vars[d.name]=d.mapper(o)}return t}});return l}),define("pentaho/ccc/visual/_util",["cdf/lib/CCC/def","cdf/lib/CCC/protovis"],function(e,t){
"use strict";var n=/\[#null\]$/;return{isNullMember:function(e){return null==e||n.test(e);
},copyColorMap:function(n,i){if(i){n||(n={});for(var r in i)e.hasOwn(i,r)&&(n[r]=t.color(i[r]));
}return n},defaultFont:function(e,t){return e?e.replace(/\bdefault\s*$/i,"OpenSansRegular, sans-serif"):(t||10)+"px OpenSansRegular, sans-serif";
},readFontModel:function(e,t){var n=e.getv(t+"Size");if(n){var i=e.getv(t+"Style");
return null==i||"plain"===i?i="":i+=" ",i+n+"px "+e.getv(t+"FontFamily")}},getFilterClauseCount:function(e){
return e&&(e=e.toDnf(),"or"===e.kind)?e.operands.count:void 0},getCccValueTypeOfFieldType:function(e){
switch(e){case"string":return String;case"number":return Number;case"date":return Date;
}return null},getCccContextActiveVisualRolesOfMeasureDimension:function(e,t){var n=e.scene,i=n.panel().visualRolesOf(t);
if(null!==i){var r=n.group&&1===n.groups.length?n.group:n.data();i=i.filter(function(e){
return e.isMeasureEffective&&e.isBoundDimensionName(r,t)}),0===i.length&&(i=null);
}return i},getCccContextInterpolationLabelOfDimension:function(e,t){var n=e.scene.datums().where(function(e){
return e.isInterpolated&&e.interpDimName===t}).first();return n?n.interpolation:null;
},getCccContextAtomLabel:function(e,t){var n;if(e&&(n=e.scene.group)){var i=n&&n.count()>1;
if(i){var r=n.dimensions(t.dimension.name);return r.format(r.value({visible:!0}));
}}return t.label},findCccContextPercentRoleLabel:function(t,n){var i=t.scene,r=e.query(n).select(function(e){
if(e.isPercent){var t=i.vars[e.name];if(t&&null!=t.percent)return t.percent}}).first();
return null!=r?r.label:null}}}),define("pentaho/ccc/visual/Abstract",["pentaho/module!_","pentaho/visual/base/View","pentaho/visual/models/Abstract","pentaho/visual/action/Select","pentaho/visual/action/Execute","pentaho/visual/action/SelectionModes","pentaho/lang/UserError","cdf/lib/CCC/def","cdf/lib/CCC/pvc","cdf/lib/CCC/cdo","cdf/lib/CCC/protovis","./_util","pentaho/data/util","pentaho/data/filter/Or","pentaho/data/filter/And","pentaho/data/filter/IsEqual","pentaho/util/object","pentaho/visual/color/utils","pentaho/data/TableView","pentaho/util/logger","pentaho/debug","pentaho/debug/Levels","pentaho/i18n!view"],function(e,t,n,i,r,o,a,s,u,l,c,h,d,p,f,_,g,m,y,v,b,C,O){
"use strict";var x=b.testLevel(C.debug,e),w={compatVersion:1,compatFlags:1,isMultiValued:1,
measuresIndexes:1,multiChartIndexes:1,measuresInColumns:1,dataMeasuresInColumns:1,
ignoreMetadataLabels:1,dataIgnoreMetadataLabels:1,typeCheckingMode:1,dataTypeCheckingMode:1,
seriesInRows:1,crosstabMode:1,width:1,height:1,canvas:1,readers:1,visualRoles:1,extensionPoints:1,
categoriesCount:1,dataCategoriesCount:1};return t.extend({$type:{id:e.id,props:{model:{
valueType:n}}},_options:{compatVersion:2,compatFlags:{discreteTimeSeriesTickFormat:!1
},format:{percent:"#,0.00%"},clearSelectionMode:"manual",tooltipEnabled:!0,tooltip:{
className:"pentaho-visual-ccc",delayIn:200,delayOut:80,offset:2,html:!0,gravity:"nw",
fade:!1,followMouse:!0,useCorners:!0,arrowVisible:!1,opacity:1},trendDot_ibits:0,
trendDot_imask:"ShowsActivity",trendLine_ibits:0,trendLine_imask:"ShowsActivity",
crosstabMode:!1,isMultiValued:!0,seriesInRows:!1,dataTypeCheckingMode:"none",ignoreNulls:!1,
baseAxisOriginIsZero:!1},_hideNullMembers:!1,_roleToCccRole:{multi:"multiChart",columns:"series",
rows:"category",measures:"value"},_genericMeasureCccVisualRole:null,_genericMeasureDiscrimCccVisualRole:null,
get _genericMeasureDiscrimCccDimName(){var e=this._genericMeasureCccVisualRole;return null!==e?e+"Role.dim":null;
},_noRoleInTooltipMeasureRoles:{measures:!0},_tooltipHidePercentageOnPercentFields:!1,
_multiRole:"multi",_discreteColorRole:"columns",_updateAll:function(){return this._isMultiChartMode=!!this._multiRole&&this.model.get(this._multiRole).hasFields,
this._initOptions(),this._processExtensions(),this._initData(),this._configureOptions(),
this._prepareLayout(),this._applyExtensions(),this._renderCore()},_updateSize:function(){
null!=this._lastResizeTimeout&&clearTimeout(this._lastResizeTimeout),this._lastResizeTimeout=setTimeout(function(){
this._lastResizeTimeout=null,this._doResize()}.bind(this),50)},_releaseDomContainer:function(){
this._chart&&this._chart.dispose&&(this._chart.dispose(),this._chart=null)},_updateSelection:function(){
function e(e){var t=Object.keys(e).sort(),n=t.map(function(t){return t+":"+e[t]}).join(",");
return n}x&&v.log("_updateSelection BEGIN");try{var t=this.model.selectionFilter,n=this.model.data;
n.originalCrossTable&&(n=n.originalCrossTable.toPlainTable({skipRowsWithAllNullMeasures:!0
}));for(var i=this._getSourceKeyMappingFieldInfos().array(),r=n.filter(t),o=[],a={},s=0,u=r.getNumberOfRows();u>s;s++){
var l=i.reduce(function(e,t){return e[t.name]=r.getValue(s,t.sourceIndex),e},{}),c=e(l);
g.hasOwn(a,c)||(a[c]=!0,o.push(l))}if(!o.length)return this._chart.clearSelections();
this._chart.data.replaceSelected(this._chart.data.datums(o)),this._chart.updateSelections();
}finally{x&&v.log("_updateSelection END")}},_doResize:function(){if(this._chart){
var e=this._chart.options;e.width=this.width,e.height=this.height,this._prepareLayout(),
this._chart.renderResize(e.width,e.height)}},_initOptions:function(){var e=this.options=s.create(this._options);
s.set(e,"canvas",this.domContainer,"height",this.height||400,"width",this.width||400,"dimensions",{},"visualRoles",{},"readers",[]);
},_getMappingFieldInfosOfRole:function(e,t){var n=s.getOwn(this._visualMap,e,null);
return null!==n&&t&&(n=n.filter(function(e){return!e.isMeasureDiscrim})),n},_isRoleCategorical:function(e){
var t=this.model.get(e).mode;return null!==t&&!t.isContinuous},_getRolesMappedToCccRole:function(e){
return s.getOwn(this._rolesByCccVisualRole,e,null)},_getSourceKeyMappingFieldInfos:function(){
return s.query(this._axes.key).where(function(e){return!e.isMeasureDiscrim})},_setNullInterpolationMode:function(e){},
_initData:function(){var e=this.model.data,t=this._hasDataKeyColumns=d.hasAnyKeyColumns(e),n=0,i=this._genericMeasureCccVisualRole,r=[],o={},a={
key:[],measure:[]},u={},l={},c=function(e){e.isGenericMeasure=e.cccRoleName===i,e.isGenericMeasure&&n++,
r.push(e),o[e.name]=e,a[e.isKey?"key":"measure"].push(e),s.array.lazy(u,e.roleName).push(e);
};this.model.$type.eachVisualRole(function(n){var i=n.name,r=this.model.get(i),o=this._roleToCccRole[i];
if(!o)throw s.error.operationInvalid("No CCC Role for '{0}'",[i]);s.array.lazy(l,o).push(i),
r.hasFields&&r.fields.each(function(n,r){var a=n.name,s=e.getColumnIndexById(a),u=e.getColumnAttribute(s),l="_"+i+"_"+(r+1),h=t?u.isKey:!u.isContinuous;
c({name:l,label:u.label||a,roleName:i,isKey:h,sourceName:u.name,sourceType:u.type,
sourceIndex:e.getColumnIndexById(u.name),sourceIsContinuous:u.isContinuous,sourceFormat:u.format,
sourceMembers:u.members,sourceIsPercent:!!u.isPercent,sourceColor:u.property("color"),
sourceTimeIntervalDuration:u.property("timeIntervalDuration"),cccRoleName:o,isMeasureDiscrim:!1
})})},this),Object.keys(l).forEach(function(e){l[e].sort()}),this._mappingFieldInfos=r,
this._mappingFieldInfosByName=o,this._axes=a,this._visualMap=u,this._rolesByCccVisualRole=l,
this._genericMeasuresCount=n,(this._isGenericMeasureMode=n>1)&&c(this._createGenericMeasureDiscriminator()),
this._transformData(),this._configureCccDimensions(),this._configureCccVisualRoles();
},_createGenericMeasureDiscriminator:function(){var e=this._genericMeasureDiscrimCccVisualRole,t=this._getRolesMappedToCccRole(e)[0];
return{name:this._genericMeasureDiscrimCccDimName,label:"Generic Measure Discriminator",
roleName:t,cccRoleName:e,isKey:!0,sourceName:null,sourceType:null,sourceIndex:null,
sourceIsContinuous:null,sourceFormat:null,sourceMembers:null,sourceIsPercent:!1,sourceColor:null,
isMeasureDiscrim:!0}},_transformData:function(){var e=[],t=[],n=[],i=[],r=this.model.data;
this._mappingFieldInfos.forEach(function(r){if(!r.isMeasureDiscrim){var o,a;"number"===r.sourceType?(o=t,
a=i):(o=e,a=n),o.push(r.sourceIndex),a.push(r.name)}});for(var o=e.length,a=t.length,s=[];a--;)s.push(o++);
this.options.measuresIndexes=s,this._dataView=new y(r),this._dataView.setSourceColumns(e.concat(t)),
this.options.readers=n.concat(i)},_configureCccDimensions:function(){var e=this.options.dimensions;
this._mappingFieldInfos.forEach(function(t){if(t.sourceName){var n=s.lazy(e,t.name);
n.valueType=h.getCccValueTypeOfFieldType(t.sourceType),n.isDiscrete=this._isRoleCategorical(t.roleName),
n.comparer=null,n.valueType===Date&&(n.formatter=function(e){return null==e?"":e.toString();
})}},this)},_configureCccVisualRoles:function(){var e=this.options.visualRoles;this._mappingFieldInfos.forEach(function(t){
var n=s.lazy(e,t.cccRoleName);s.array.lazy(n,"dimensions").push(t.name)})},_configureOptions:function(){
var e=this.options,t=this.model;this._labelFont=h.defaultFont(t.labelSize?h.readFontModel(t,"label"):null);
var n=t.backgroundFill;if(n&&"none"!==n){var i;if("gradient"===n)if(this._isMultiChartMode){
var r=c.color(t.backgroundColor).rgb();r=c.rgb(Math.floor((255+r.r)/2),Math.floor((255+r.g)/2),Math.floor((255+r.b)/2),r.a),
i=r}else i="linear-gradient(to top, "+t.backgroundColor+", "+t.backgroundColorEnd+")";else i=t.backgroundColor;
e.base_fillStyle=i}if(n=t.getv("lineWidth",!0),null!=n){e.line_lineWidth=n;var o=5/6*(n-2)+4;
e.dot_shapeSize=o*o,e.plot2Line_lineWidth=e.line_lineWidth,e.plot2Dot_shapeSize=e.dot_shapeSize;
}n=t.getv("emptyCellMode",!0),n&&this._setNullInterpolationMode(n),n=t.getv("sizeByNegativesMode",!0),
e.sizeAxisUseAbs="useAbs"===n,this._configureColor();var a=s.get(this._validExtensionOptions,"legendAreaVisible");
null==a&&(a=this._shouldShowLegend()),e.legendAreaVisible=a,a&&this._configureLegend(),
this._configureTrends(),this._configureFormats(),this._configureLabels(),this._isMultiChartMode&&this._configureMultiChart(),
e.interactive=!!s.get(this._validExtensionOptions,"interactive",!0),e.interactive&&(e.tooltipEnabled&&this._configureTooltip(),
s.get(this._validExtensionOptions,"selectable",e.selectable)&&this._configureSelection(),
s.get(this._validExtensionOptions,"clickable",e.clickable)&&this._configureDoubleClick());
},_isColorCategorical:function(){var e=this._discreteColorRole;return e&&this.model[e].hasFields?this._isRoleCategorical(e):void 0;
},_getColorScaleKind:function(){return"discrete"},_configureColor:function(){switch(this._getColorScaleKind()){
case"discrete":this._configureDiscreteColors();break;case"continuous":this._configureContinuousColors();
}},_configureDiscreteColors:function(){var e,t=c.colors(this._getDefaultDiscreteColors());
if(this._discreteColorRole){var n=this._getDiscreteColorMap();if(n)if(s.fun.is(n))e=n;else{
var i=function(e){return s.getOwn(n,e)};e=this._createDiscreteColorMapScaleFactory(i,t);
}}this.options.colors=e||t},_configureContinuousColors:function(){var e=this.model;
this.options.colorScaleType="gradient"===e.pattern?"linear":"discrete";var t=e.paletteQuantitative;
t?this.options.colors=t.colors.toArray(function(e){return e.value}):this.options.colors=m.buildPalette(e.colorSet,e.pattern,e.reverseColors);
},_getDefaultDiscreteColors:function(){return this.model.palette.colors.toArray(function(e){
return e.value})},_getDiscreteColorMap:function(){var e=this._getMemberPalette();if(e){
var t,n=this._getMappingFieldInfosOfRole(this._discreteColorRole,!0),i=n?n.length:0,r=this._genericMeasuresCount;
if(i>0||r>0)if(0===i||r>1){if(t=e["[Measures].[MeasuresLevel]"],1===r){var o=t&&t[this._axes.measure[0].name];
return o?c.colors([o]):null}t=h.copyColorMap(null,t)}else t=h.copyColorMap(null,e[n[i-1].name]);
return t}},_getMemberPalette:function(){function e(e,n,i){t||(t={}),s.lazy(t,e)[n]=i;
}var t=null;return this._mappingFieldInfos.forEach(function(t){t.isMeasureDiscrim||(t.sourceMembers?t.sourceMembers.forEach(function(n){
var i=n.property("color");i&&e(t.name,n.value,i)}):t.isGenericMeasure&&t.sourceColor&&e("[Measures].[MeasuresLevel]",t.name,t.sourceColor));
}),t},_createDiscreteColorMapScaleFactory:function(e,t){function n(){return function(n){
if(n){var i=n.split("~"),r=i[i.length-1];return e(r)||t(r)}}}return function(){return s.copy(n(),t);
}},_configureTrends:function(){var e=this.options,t=this.model,n=(this._supportsTrends?t.trendType:null)||"none";
switch(n){case"none":case"linear":break;default:n="none"}if(e.trendType=n,"none"!==n){
var i=t.trendName;i||(i=O.get("trend.name."+n.toLowerCase(),n)),e.trendLabel=i;var r=t.trendLineWidth;
if(null!=r){r=+r,e.trendLine_lineWidth=r;var o=5/6*(r-2)+4;e.trendDot_shapeSize=o*o;
}}},_configureFormats:function(){var e=this.model.data.model.format;if(e){var t=this.options.format=s.create(this.options.format,e),n=e.number&&e.number.style;
!n||e.percent&&e.percent.style||(t.percent?s.string.is(t.percent)&&(t.percent={mask:t.percent
}):t.percent={},t.percent.style=n)}var i=this.options.dimensions,r=s.query(this._mappingFieldInfos).where(function(e){
return!e.isMeasureDiscrim&&e.sourceIsContinuous});r.each(function(e){var t=e.sourceFormat,n=t&&t.number&&t.number.mask;
n&&(s.lazy(i,e.name).format=n)})},_configureLabels:function(){var e=this.options,t=this.model,n=t.labelsOption,i=!!s.get(this._validExtensionOptions,"valuesVisible",n&&"none"!==n);
if(e.valuesVisible=i,i){this._configureLabelsAnchor(),e.valuesFont=this._labelFont;
var r=t.labelColor;r&&(e.label_textStyle=r)}},_configureLabelsAnchor:function(){var e=this.model.labelsOption,t=/(^\w+)([A-Z])(\w+)/,n=t.exec(e);
null!=n&&(e=n[1]+"_"+n[2].toLowerCase()+n[3]),this.options.valuesAnchor=e},_configureMultiChart:function(){
var e,t=this.model,n=this.options,i=t.labelSize;if(i){var r=t.labelFontFamily;e=h.defaultFont(i+2+"px "+r);
}else e=h.defaultFont(null,12);n.titleFont=e,/black|(\bbold\b)/i.test(e)||(e="bold "+e),
n.smallTitleFont=e;var o=t.multiChartOverflow;o&&(n.multiChartOverflow=o.toLowerCase()),
o=t.maxChartsPerRow,null!=o&&(n.multiChartColumnsMax=o),o=t.multiChartRangeScope,
o&&(n.numericAxisDomainScope=o)},_configureTooltip:function(){var e=this;this.options.tooltipFormat=function(){
return e._getTooltipHtml(this)}},_getTooltipHtml:function(e){if(!this.isDirty){var t,n=[];
this._axes.key.forEach(function(t){this._buildTooltipHtmlOfField(n,t,e)},this),this._axes.measure.forEach(function(t){
this._buildTooltipHtmlOfField(n,t,e)},this);var i=e.scene.datum;if(!i.isVirtual){
var r=this.model.application;if(r&&r.getDoubleClickTooltip){var o=this._createExecuteFilter(e);
null!==o&&(t=r.getDoubleClickTooltip(o),t&&n.push(t))}}var a=h.getFilterClauseCount(this.model.selectionFilter);
if(a>0){var s=1===a?"tooltip.footer.selectedOne":"tooltip.footer.selectedMany";t=O.get(s,[a]),
n.push(t)}return n.join("<br />")}},_buildTooltipHtmlOfField:function(e,t,n){if(!t.isMeasureDiscrim){
var i=n.chart.data.type.dimensions(t.name);i.isHidden||(t.isKey||"number"!==t.sourceType?this._buildTooltipHtmlOfFieldNonNumeric(e,t,n):this._buildTooltipHtmlOfFieldNumeric(e,t,n));
}},_buildTooltipHtmlOfFieldNonNumeric:function(e,t,n){if(null===this._multiRole||t.roleName!==this._multiRole){
var i=n.scene,r=i.group||i.datum,o=r.getSpecifiedAtom(t.name);if(null!==o){var a=o.value;
this._hideNullMembers&&h.isNullMember(a)||null==a&&null!==i.datum&&i.datum.isTrend||e.push(s.html.escape(t.label)+": "+s.html.escape(o.label));
}}},_buildTooltipHtmlOfFieldNumeric:function(e,t,n){var i=t.name,r=h.getCccContextActiveVisualRolesOfMeasureDimension(n,i);
if(null!==r){var o=n.scene.datums().first(function(e){return null!==e.atoms[i].value;
});if(null!=o){var a=s.html.escape(t.label);if(this._noRoleInTooltipMeasureRoles[t.roleName]!==!0&&(a+=" ("+s.html.escape(t.roleName)+")"),
a+=": "+s.html.escape(h.getCccContextAtomLabel(n,o.atoms[i])),!t.sourceIsPercent||!this._tooltipHidePercentageOnPercentFields){
var u=h.findCccContextPercentRoleLabel(n,r);null!==u&&(a+=" ("+s.html.escape(u)+")");
}var l=h.getCccContextInterpolationLabelOfDimension(n,i);null!==l&&(a+=" "+O.get("tooltip.dim.interpolation."+l)),
o.isTrend&&(a+=" ("+this.options.trendLabel+")"),e.push(a)}}},_shouldShowLegend:function(){
if(!this.model.showLegend)return!1;var e=this._isColorCategorical()===!1;return!e&&!!this._getMappingFieldInfosOfRole(this._discreteColorRole);
},_configureLegend:function(){var e=this.model,t=this.options,n=e.legendColor;n&&(t.legendLabel_textStyle=n),
n=e.legendBackgroundColor,n&&"#ffffff"!==n.toLowerCase()&&(t.legendArea_fillStyle=n),
n=e.legendPosition,n&&(t.legendPosition=n),e.legendSize&&(t.legendFont=h.readFontModel(e,"legend")),
t.legendFont=h.defaultFont(t.legendFont,10);var i=t.legendPosition,r="top"===i||"bottom"===i;
if(r)t.legendAlign="left";else if(t.legendAlign="top",this._isMultiChartMode){var o=t.legendMargins;
if(o)"object"!=typeof o&&(o=t.legendMargins={all:o});else{o=t.legendMargins={};var a=u.BasePanel.oppositeAnchor[i];
o[a]=5}o.top=20}var s=4,l=2,c=1;t.legendMarkerSize=2*(s+c),t.legend$Dot_lineWidth=l,
t.legend$Dot_shapeSize=Math.pow(s-l/2,2)},_prepareLayout:function(){},_processExtensions:function(){
var e=null,t=this.$type.extensionEffective;t&&s.each(t,function(t,n){s.hasOwn(w,n)||(e||(e={}),
e[n]=t)}),this._validExtensionOptions=e},_applyExtensions:function(){var e=this._validExtensionOptions;
e&&(this.options=s.mixin.copy({},this.options,e))},_createChart:function(e){return new e(this.options);
},_getVisualElementsCountMax:function(){var e=this.model.$type.application,t=+(e&&e.optimalMaxDataSize);
return t>0?t:-1},_validateVisualElementsCount:function(e,t){if(e>t){var n="visual-elems-count-max",i={
count:e,countMax:t},r=new u.InvalidDataException(O.get("error.visualElemsCountMax",i),n);
throw r.messageParams=i,r}},_renderCore:function(){this._chart=this._createChart(u[this._cccClass]),
this._chart.setData(this._dataView.toJsonCda());var e="page"===this.options.multiChartOverflow;
e?this._chart.renderPages():this._chart.render();var t=this._chart.getLastRenderError();
return t?Promise.reject(this._convertCccError(t)):(e||this._updateSelection(),null);
},_convertCccError:function(e){var t;return e instanceof u.InvalidDataException||e instanceof u.NoDataException?(t=new a(e.message),
Object.defineProperty(t,"name",{value:e.name})):t=new Error(e.toString()),t},_configureSelection:function(){
var e=this;this.options.userSelectionAction=function(t,n){return e._onUserSelection(this,t,n);
},this.options.base_event=[["click",function(){e._onUserSelection(this,[])}]]},_onUserSelection:function(e,t,n){
if(this.isDirty)return[];var r=this._createSelectFilter(t,n),o=e.event;return this.act(new i({
dataFilter:r,position:o?{x:o.clientX,y:o.clientY}:null})),[]},_createSelectFilter:function(e,t){
var n=[];if(t){var i=this._convertCccComplexToFilter(t);i&&n.push(i)}else e.forEach(function(e){
if(!e.isVirtual&&!e.isNull){var t=this._convertCccComplexToFilter(e);t&&n.push(t);
}},this);return new p({operands:n})},_configureDoubleClick:function(){var e=this;this.options.doubleClickAction=function(){
e._executeOn(this)},this.options.axisDoubleClickAction=function(){e._executeOn(this);
}},_executeOn:function(e){if(!this.isDirty){var t=this._createExecuteFilter(e);if(null!==t){
t=new p({operands:[t]});var n=e.event;this.act(new r({dataFilter:t,position:n?{x:n.clientX,
y:n.clientY}:null}))}}},_createExecuteFilter:function(e){var t=e.scene;if(null!==t.groups&&t.groups.length>1)return null;
var n=t.group||t.datum;return this._convertCccComplexToFilter(n)},_convertCccComplexToFilter:function(e){
var t=null;return this._getSourceKeyMappingFieldInfos().each(function(n){var i=e.getSpecifiedAtom(n.name);
if(i){var r=null===i.value?i.rawValue:i.value,o=n.sourceType,a=new _({property:n.sourceName,
value:null===r?null:{_:o,v:r,f:i.label}});t=null!==t?t.and(a):new f({operands:[a]
})}}),t}},{_extend:function(e,t,n,i){return t||(t={}),t._options=s.mixin.share({},this.prototype._options,t._options||{}),
this.base(e,t,n,i)}}).configure({$type:e.config})}),define("pentaho/ccc/visual/CartesianAbstract",["pentaho/module!_","./Abstract","pentaho/visual/models/CartesianAbstract","./_util","cdf/lib/CCC/def","pentaho/i18n!./i18n/view"],function(e,t,n,i,r,o){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_options:{
orientation:"vertical"},_configureOptions:function(){this.base();var e=this.options,t=this.model,n=t.labelColor;
null!=n&&(e.axisLabel_textStyle=e.axisTitleLabel_textStyle=n),n=t.labelSize,n?e.axisTitleFont=e.axisFont=this._labelFont:e.axisTitleFont=e.axisFont=i.defaultFont(null,12),
this._configureDisplayUnits(),this._isAxisTitleVisible("base")&&this._configureAxisTitle("base",this._getBaseAxisTitle()),
this._isAxisTitleVisible("ortho")&&this._configureAxisTitle("ortho",this._getOrthoAxisTitle());
},_isAxisTitleVisible:r.fun.constant(!0),_getOrthoAxisTitle:r.noop,_getBaseAxisTitle:r.noop,
_configureAxisTitle:function(e,t){var n=this._cartesianAxesDisplayUnitsText[e];t=r.string.join(" - ",t,n),
t&&(this.options[e+"AxisTitle"]=t)},_getMeasureRoleTitle:function(e){var t=this._getMappingFieldInfosOfRole(e);
return t&&1===t.length?t[0].label:""},_getDiscreteRolesTitle:function(e){var t=r.query(e);
this._multiRole&&(t=t.where(function(e){return e!==this._multiRole},this));var n=t.selectMany(function(e){
return this._getMappingFieldInfosOfRole(e)},this).distinct(function(e){return e.name;
}).select(function(e){return e.label}).where(r.truthy).array(),i=n.pop(),a=n.join(", ");
return a&&i?o.get("axis.title.multipleDimText",[a,i]):a||i},_configureAxisRange:function(e,t){
var n=e?"":"Secondary";if(!this.model.getv("autoRange"+n)){var i=this.model.getv("valueAxisLowerLimit"+n);
null!=i&&(this.options[t+"AxisFixedMin"]=i,this.options[t+"AxisOriginIsZero"]=!1),
i=this.model.getv("valueAxisUpperLimit"+n),null!=i&&(this.options[t+"AxisFixedMax"]=i);
}},_cartesianAxesDisplayUnitsText:null,_configureDisplayUnits:function(){this._cartesianAxesDisplayUnitsText={};
},_configureAxisTickUnits:function(e,t){var n=this._getMappingFieldInfosOfRole(t);
if(null!=n&&1===n.length&&null!=n[0].sourceTimeIntervalDuration){var i=n[0].sourceTimeIntervalDuration;
"halfYear"===i?i="6m":"quarter"===i&&(i="3m"),this.options[e+"AxisTickUnitMin"]=i;
}},_configureAxisDisplayUnits:function(e,t){var n="displayUnits"+(e?"":"Secondary"),i=this.model.getv(n),r=this.model.$type.get(n).valueType,o=r.scaleFactorOf(i);
this._cartesianAxesDisplayUnitsText[t]=o>1?r.domain.get(i).toString():""}}).configure({
$type:e.config})}),define("pentaho/ccc/visual/CategoricalContinuousAbstract",["pentaho/module!_","./CartesianAbstract","pentaho/visual/models/CategoricalContinuousAbstract"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_genericMeasureCccVisualRole:"value",
_genericMeasureDiscrimCccVisualRole:"series",_isAxisTitleVisible:function(e){return!this._isMultiChartMode||"ortho"===e;
},_getOrthoAxisTitle:function(){var e=this._getRolesMappedToCccRole(this._genericMeasureCccVisualRole);
return e&&e.length>0?this._getMeasureRoleTitle(e[0]):""},_getBaseAxisTitle:function(){
var e=this._getRolesMappedToCccRole("category");return e&&e.length>0?this._getDiscreteRolesTitle(e):"";
},_isBaseAxisCategorical:function(){var e=this._getRolesMappedToCccRole("category");
return!!e&&e.length>0&&this._isRoleCategorical(e[0])},_configureOptions:function(){
this.base(),this._configureAxisRange(!0,"ortho");var e=this.options;"vertical"===e.orientation?this._isBaseAxisCategorical()&&(e.xAxisLabel_textAngle=-Math.PI/4,
e.xAxisLabel_textAlign="right",e.xAxisLabel_textBaseline="top"):e.xAxisPosition="top";
},_configureDisplayUnits:function(){this.base(),this._configureAxisDisplayUnits(!0,"ortho"),
this._configureAxisTickUnits("base","rows")},_createChart:function(e){var t=this.base(e),n=this._getVisualElementsCountMax();
if(n>0){var i=this;t.override("_onWillCreatePlotPanelScene",function(e,t,r,o){var a=r.length,s=o.length,u=a*s;
i._validateVisualElementsCount(u,n)})}return t}}).configure({$type:e.config})}),define("pentaho/ccc/visual/PointAbstract",["pentaho/module!_","./CategoricalContinuousAbstract","pentaho/visual/models/PointAbstract","pentaho/data/util","pentaho/util/logger"],function(e,t,n,i,r){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_setNullInterpolationMode:function(e){
this.options.nullInterpolationMode=e},_transformData:function(){this.base();var e=this.model.rows;
if(e.hasFields){var t=e.mode;if(null!==t&&t.isContinuous){var n=e.fieldIndexes[0],o=this.model.data,a=i.getFilteredRowsByPredicate(o,function(e,t){
return null!==e.getValue(t,n)});if(null!==a){this._dataView.setSourceRows(a);var s=o.getNumberOfRows();
r.warn("The visualization has ignored "+(s-a.length)+" row(s) having a null '"+o.getColumnLabel(n)+"' field value.");
}}}}}).configure({$type:e.config})}),define("pentaho/ccc/visual/AreaAbstract",["pentaho/module!_","./PointAbstract"],function(e,t){
"use strict";return t.extend({_cccClass:"AreaChart",$type:{id:e.id}}).configure({
$type:e.config})}),define("pentaho/ccc/visual/Area",["pentaho/module!_","./AreaAbstract"],function(e,t){
"use strict";return t.extend({$type:{id:e.id}}).configure({$type:e.config})}),define("pentaho/ccc/visual/AreaStacked",["pentaho/module!_","./AreaAbstract","pentaho/visual/models/AreaStacked"],function(e,t,n){
"use strict";return t.extend({_cccClass:"StackedAreaChart",$type:{id:e.id,props:{
model:{valueType:n}}}}).configure({$type:e.config})}),define("pentaho/ccc/visual/BarAbstract",["pentaho/module!_","./CategoricalContinuousAbstract","pentaho/visual/models/BarAbstract","cdf/lib/CCC/def"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_cccClass:"BarChart",
_configureOptions:function(){this.base();var e=this.options;"vertical"!==e.orientation&&(i.lazy(e.visualRoles,"category").isReversed=!0);
},_configureLabelsAnchor:function(){var e=this.options;switch(e.label_textMargin=7,
this.model.labelsOption){case"center":e.valuesAnchor="center";break;case"insideEnd":
e.valuesAnchor="horizontal"===e.orientation?"right":"top";break;case"insideBase":
e.valuesAnchor="horizontal"===e.orientation?"left":"bottom";break;case"outsideEnd":
"horizontal"===e.orientation?(e.valuesAnchor="right",e.label_textAlign="left"):(e.valuesAnchor="top",
e.label_textBaseline="bottom")}}}).configure({$type:e.config})}),define("pentaho/data/_trends",["./AbstractTable","./Table","./TableView","../util/arg","../util/error"],function(e,t,n,i,r){
function o(e,t){if(!e)throw r.argRequired("type");if(e=""+e,!t)throw r.argRequired("spec");
var n=i.required(t,"model","spec");if("function"!=typeof n)throw r.argInvalidType("spec.model","function");
var o=t.label;o||(o=e.charAt(0).toUpperCase()+e.substr(1)+" Trend"),u[e]={type:e,
label:o,model:n}}function a(e,t){if(!e)throw r.argRequired("type");var n=u.hasOwnProperty(e)?u[e]:null;
if(!n&&t)throw r.argInvalid("type","There is no trend type named '"+e+"'.");return n;
}function s(){return Object.keys(u)}n.implement({createTrend:function(e){var t=this._source.createTrend(e);
return this._columns.push(t)-1}}),t.implement({createTrend:function(e){if(!(e instanceof Object))throw r.argRequired("trendArgs");
var t=e.type;if(!t)throw r.argRequired("trendArgs.type");t=""+t;var n=a(t,!0),o=this.getNumberOfColumns(),s=i.required(e,"x","trendArgs");
if(s=+s,isNaN(s))throw r.argInvalidType("trendArgs.x","number");if(0>s||s>=o)throw r.argRange("trendArgs.x");
var u=i.required(e,"y","trendArgs");if(u=+u,isNaN(u))throw r.argInvalidType("trendArgs.y","number");
if(0>u||u>=o)throw r.argRange("trendArgs.y");if("number"!==this.getColumnType(u))throw r.argInvalid("trendArgs.y","Must be a numeric column.");
var l=e.name||t+"Trend",c=e.label||(e.name?l:n.label),h=e.options||{};this.model.attributes.add({
name:l,type:"number",label:c});var d=this.addColumn(l),p=this,f="number"!==this.getColumnType(s),_=this.getRowIndexEnumerator(),g=f?null:function(e){
return p.getValue(e,s)},m=function(e){return p.getValue(e,u)},y=Object.create(h);y.rows=_,
y.x=g,y.y=m;var v=n.model(y);if(!v)return!1;for(var b=-1,C=this.getNumberOfRows();++b<C;){
var O=g?g(b):b,x=null!=O?v.sample(O,m(b),b):null;this.getCell(b,d).value=x}return!0;
}}),e.implement({getRowIndexEnumerator:function(){var e=-1,t=this.getNumberOfRows(),n={
item:void 0,next:function(){return t-1>e?(n.item=++e,!0):(n.item&&(n.item=void 0),
!1)}};return n}});var u={};return{types:s,define:o,get:a}}),define("pentaho/data/_trend-linear",["./_trends"],function(e){
function t(e){return null!=e?+e:NaN}e.define("linear",{label:"Linear trend",model:function(e){
for(var n=e.rows,i=e.x,r=e.y,o=0,a=0,s=0,u=0,l=0,c=0;n.next();){var h=n.item,d=i?t(i(h)):o;
if(!isNaN(d)){var p=t(r(h));isNaN(p)||(a++,s+=d,u+=p,l+=d*p,c+=d*d)}o++}if(a>=2){
var f=s/a,_=u/a,g=l/a,m=c/a,y=m-f*f,v=y&&(g-f*_)/y,b=_-v*f;return{alpha:b,beta:v,
reset:function(){},sample:function(e){return b+v*+e}}}}})}),define("pentaho/data/trends",["./_trends","./_trend-linear"],function(e){
return e}),define("pentaho/ccc/visual/_trends",["cdf/lib/CCC/pvc","pentaho/data/trends"],function(e,t){
t.types().forEach(function(n){if(!e.trends.has(n)){var i=t.get(n);e.trends.define(n,i);
}})}),define("pentaho/ccc/visual/Bar",["pentaho/module!_","./BarAbstract","pentaho/visual/models/Bar","./_trends"],function(e,t,n){
"use strict";return t.extend({_supportsTrends:!0,$type:{id:e.id,props:{model:{valueType:n
}}}}).configure({$type:e.config})}),define("pentaho/ccc/visual/BarHorizontal",["pentaho/module!_","./BarAbstract","pentaho/visual/models/BarHorizontal"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_options:{
orientation:"horizontal"}}).configure({$type:e.config})}),define("pentaho/ccc/visual/BarLine",["pentaho/module!_","./BarAbstract","pentaho/visual/models/BarLine","cdf/lib/CCC/def"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_roleToCccRole:{
columns:"series",rows:"category",multi:"multiChart",measures:"value",measuresLine:"value"
},_noRoleInTooltipMeasureRoles:{measures:!0,measuresLine:!0},_options:{plot2OrthoAxis:2,
ortho2AxisPosition:"right",plot2ColorAxis:1},_setNullInterpolationMode:function(e){
this.options.plot2NullInterpolationMode=e},_configureCccVisualRoles:function(){var e=this.options.visualRoles,t=null;
this.plot2=this.model.measuresLine.hasFields,this.plot2?(this.options.plots=[{name:"plot2",
visualRoles:{}}],t=this.options.plots[0].visualRoles):this.options.plots=null,this._mappingFieldInfos.forEach(function(n){
var r;r="measuresLine"===n.roleName?t:e;var o=i.lazy(r,n.cccRoleName);i.array.lazy(o,"dimensions").push(n.name);
})},_configureOptions:function(){this.base();var e=this.options,t=this.model.shape;
t&&"none"===t?e.pointDotsVisible=!1:(e.pointDotsVisible=!0,e.pointDot_shape=t),this._configureAxisRange(!1,"ortho2"),
this._configureAxisTitle("ortho2","")},_configureLabels:function(){this.base();var e=this.model,t=e.lineLabelsOption;
if(t&&"none"!==t){var n=this.options;n.plot2ValuesVisible=!0,n.plot2ValuesAnchor=t,
n.plot2ValuesFont=this._labelFont;var i=e.labelColor;null!=i&&(n.plot2Label_textStyle=i);
}},_configureDisplayUnits:function(){this.base(),this._configureAxisDisplayUnits(!1,"ortho2");
}}).configure({$type:e.config})}),define("pentaho/ccc/visual/BarNormalizedAbstract",["pentaho/module!_","./BarAbstract","pentaho/visual/models/BarNormalizedAbstract"],function(e,t,n){
"use strict";function i(e){return e+"%"}return t.extend({$type:{id:e.id,props:{model:{
valueType:n}}},_options:{valuesNormalized:!0,stacked:!0},_configureOptions:function(){
this.base(),this.options.orthoAxisTickFormatter=i}}).configure({$type:e.config})}),
define("pentaho/ccc/visual/BarNormalized",["pentaho/module!_","./BarNormalizedAbstract","pentaho/visual/models/BarNormalized"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}}}).configure({
$type:e.config})}),define("pentaho/ccc/visual/BarNormalizedHorizontal",["pentaho/module!_","./BarNormalizedAbstract","pentaho/visual/models/BarNormalizedHorizontal"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_options:{
orientation:"horizontal"}}).configure({$type:e.config})}),define("pentaho/ccc/visual/BarStacked",["pentaho/module!_","./BarAbstract","pentaho/visual/models/BarStacked"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_options:{
stacked:!0}}).configure({$type:e.config})}),define("pentaho/ccc/visual/BarStackedHorizontal",["pentaho/module!_","./BarAbstract","pentaho/visual/models/BarStackedHorizontal"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_options:{
orientation:"horizontal",stacked:!0}}).configure({$type:e.config})}),define("pentaho/ccc/visual/Boxplot",["pentaho/module!_","./CategoricalContinuousAbstract"],function(e,t){
"use strict";return t.extend({_cccClass:"BoxplotChart",$type:{id:e.id}}).configure({
$type:e.config})}),define("pentaho/ccc/visual/MetricPointAbstract",["pentaho/module!_","./CartesianAbstract","pentaho/visual/models/MetricPointAbstract","pentaho/data/util","pentaho/util/logger","./_trends"],function(e,t,n,i,r){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_cccClass:"MetricDotChart",
_supportsTrends:!0,_roleToCccRole:{multi:"multiChart",rows:"category",x:"x",y:"y",
color:"color"},_discreteColorRole:"color",_noRoleInTooltipMeasureRoles:{x:!0,y:!0,
measures:!1},_getColorScaleKind:function(){var e=this._isColorCategorical();return null==e?void 0:e?"discrete":"continuous";
},_configureOptions:function(){this.base(),this._configureAxisRange(!0,"base"),this._configureAxisRange(!1,"ortho");
},_shouldShowLegend:function(){var e=this.base();if(!e)return!1;var t=this.model.data;
return t.originalCrossTable&&(t=t.originalCrossTable),!t.isCrossTable||t.implem.cols.length>1;
},_getOrthoAxisTitle:function(){return this._getMeasureRoleTitle("y")},_getBaseAxisTitle:function(){
return this._getMeasureRoleTitle("x")},_configureDisplayUnits:function(){this.base(),
this._configureAxisDisplayUnits(!0,"base"),this._configureAxisDisplayUnits(!1,"ortho"),
this._configureAxisTickUnits("base","x"),this._configureAxisTickUnits("ortho","y");
},_transformData:function(){this.base();var e=this.model,t=e.data,n=e.x,o=e.y,a=n.fieldIndexes[0],s=o.fieldIndexes[0],u=i.getFilteredRowsByPredicate(t,function(e,t){
return null!==e.getValue(t,a)&&null!==e.getValue(t,s)});if(null!==u){this._dataView.setSourceRows(u);
var l=t.getNumberOfRows();r.warn("The visualization has ignored "+(l-u.length)+" row(s) having a null '"+t.getColumnLabel(a)+"' or '"+t.getColumnLabel(s)+"' field value(s).");
}}}).configure({$type:e.config})}),define("pentaho/ccc/visual/Bubble",["pentaho/module!_","./MetricPointAbstract","pentaho/visual/models/Bubble"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_options:{
sizeAxisUseAbs:!1},_roleToCccRole:{multi:"multiChart",rows:"category",x:"x",y:"y",
size:"size",color:"color"},_configureOptions:function(){this.base(),this.options.axisOffset=this.model.size.hasFields?1.1*this.options.sizeAxisRatio/2:0;
}}).configure({$type:e.config})}),define("pentaho/ccc/visual/Pie",["pentaho/module!_","./Abstract","pentaho/visual/models/Pie","./_util"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_cccClass:"PieChart",
_roleToCccRole:{columns:"multiChart",rows:"category",measures:"value"},_genericMeasureCccVisualRole:"value",
_genericMeasureDiscrimCccVisualRole:"multiChart",_multiRole:"columns",_discreteColorRole:"rows",
_tooltipHidePercentageOnPercentFields:!0,_configureOptions:function(){this.base(),
this.options.valuesVisible&&this._configureValuesMask()},_configureLabels:function(){
this.base(),this.options.valuesVisible&&(this.options.valuesLabelStyle="outside"===this.model.labelsOption?"linked":this.model.labelsOption);
},_configureLabelsAnchor:function(){},_configureMultiChart:function(){this.base(),
this.options.legendSizeMax="50%"},_configureValuesMask:function(){if(this._isGenericMeasureMode){
var e=this._mappingFieldInfosByName,t=this._genericMeasureDiscrimCccDimName;this.options.pie={
scenes:{category:{sliceLabelMask:function(){var n=this.atoms[t].value;return e[n].sourceIsPercent?"{value}":"{value} ({value.percent})";
}}}}}else{var n=this._getMappingFieldInfosOfRole("measures")[0];this.options.valuesMask=n.sourceIsPercent?"{value}":"{value} ({value.percent})";
}},_getDiscreteColorMap:function(){var e,t=this._getMemberPalette();if(t){var n=this._getMappingFieldInfosOfRole(this._discreteColorRole,!0)||[],r=n.length;
if(r>0){var o=n[r-1];e=i.copyColorMap(null,t[o.name])}}return e}}).configure({$type:e.config
})}),define("pentaho/ccc/visual/Donut",["pentaho/module!_","./Pie","pentaho/visual/models/Donut"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}}}).configure({
$type:e.config})}),define("pentaho/ccc/visual/HeatGrid",["pentaho/module!_","./CartesianAbstract","pentaho/visual/models/HeatGrid","cdf/lib/CCC/def"],function(e,t,n,i){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_cccClass:"HeatGridChart",
_roleToCccRole:{columns:"series",rows:"category",color:"color",size:"size"},_multiRole:null,
_configureOptions:function(){this.base(),this.options.shape=this.model.shape},_getColorScaleKind:function(){
return"continuous"},_prepareLayout:function(){this.base();var e,t,n=this.options;if(n.axisTitleSize=i.get(this._validExtensionOptions,"axisTitleSize",0),
n.axisComposite=i.get(this._validExtensionOptions,"axisComposite",n.axisComposite),
n.axisComposite){var r=this.model,o=r.size.fields.count+r.color.fields.count,a=r.rows.fields.count,s=r.columns.fields.count,u=this.model.data;
u.originalCrossTable&&(u=u.originalCrossTable);var l=Math.max(1,u.getNumberOfRows()-1),c=u.getNumberOfColumns()-a;
o>0&&(c/=o);var h=Math.max(0,n.width-n.axisTitleSize),d=Math.max(0,n.height-n.axisTitleSize),p=h/d,f=l/c,_=300,g=70,m=200,y=.35,v=Math.min(_,a*g),b=Math.min(_,s*g),C=Math.min(_,a*m,d*y),O=Math.min(_,s*m,h*y);
if(f>p){var x=d-h/f;t=b,e=Math.min(x,C),e=Math.max(e,v)}else if(p>f){var w=h-d*f;e=v,
t=Math.min(w,O),t=Math.max(t,b)}}else e=t=null;n.xAxisSize=e,n.yAxisSize=t},_createChart:function(e){
var t=this.base(e),n=this._getVisualElementsCountMax();if(n>0){var i=this;t.override("_onWillCreatePlotPanelScene",function(e,t,r,o){
var a=r.length,s=o.length,u=a*s;i._validateVisualElementsCount(u,n)})}return t},_getBaseAxisTitle:function(){
var e=this._getRolesMappedToCccRole("category");return e&&e.length>0?this._getDiscreteRolesTitle(e):"";
},_getOrthoAxisTitle:function(){var e=this._getRolesMappedToCccRole("series");return e&&e.length>0?this._getDiscreteRolesTitle(e):"";
}}).configure({$type:e.config})}),define("pentaho/ccc/visual/Line",["pentaho/module!_","./PointAbstract","pentaho/visual/models/Line","./_trends"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_cccClass:"LineChart",
_supportsTrends:!0,_configureOptions:function(){this.base();var e=this.options,t=this.model.shape;
t&&"none"===t?e.dotsVisible=!1:(e.dotsVisible=!0,e.dot_shape=t)}}).configure({$type:e.config
})}),define("pentaho/ccc/visual/Scatter",["pentaho/module!_","./MetricPointAbstract","pentaho/visual/models/Scatter"],function(e,t,n){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}}}).configure({
$type:e.config})}),define("pentaho/ccc/visual/Sunburst",["pentaho/module!_","./Abstract","pentaho/visual/models/Sunburst","cdf/lib/CCC/protovis","cdf/lib/CCC/def","./_util","pentaho/i18n!./i18n/view"],function(e,t,n,i,r,o,a){
"use strict";return t.extend({$type:{id:e.id,props:{model:{valueType:n}}},_cccClass:"SunburstChart",
_roleToCccRole:{multi:"multiChart",rows:"category",size:"size"},_discreteColorRole:"rows",
_formatSize:function(e,t){return e.label},_configureOptions:function(){this.base();
var e=this.model,t=e.sliceOrder;t&&(this.options.sliceOrder=t);var n=e.emptySlicesHidden;
this._hideNullMembers=n,n&&(this.options.slice_visible=function(e){return!o.isNullMember(e.vars.category.value);
}),this.options.rootCategoryLabel=a.get("sunburst.rootCategoryLabel"),this._configureDisplayUnits();
},_configureLabels:function(){var e=this.model,t=this.options,n=!!r.get(this._validExtensionOptions,"valuesVisible",t.valuesVisible);
if(t.valuesVisible=n,n){t.valuesFont=this._labelFont;var o=e.labelColor;if(null!=o&&(t.label_textStyle=o),
"none"!==e.labelsOption&&this.model.size.hasFields){t.label_textBaseline="bottom",
t.label_textMargin=2,t.label_visible=function(e){var t,n=this.pvMark,r=e.innerRadius,o=e.outerRadius,a=n.textMargin(),s=e.angle,u=i.Text.measure(e.vars.size.label,n.font());
if(s<Math.PI){var l=.85*u.height,c=2*(l+3*a/2);r=Math.max(r,c/(2*Math.tan(s/2)))}
return t=o-a-r,0>=t||u.width>t-a?!1:null};var a=this;t.label_add=function(){return(new i.Label).visible(function(e){
var t=this.proto;return t.visible()}).text(function(e){var t=this.proto;if(!t.text())return"";
var n=a._getMappingFieldInfosOfRole("size")[0].name;return a._formatSize(e.vars.size,e.firstAtoms[n].dimension);
}).textBaseline("top")}}}},_configureDisplayUnits:function(){var e=this.model.$type.get("displayUnits").valueType,t=this.model.displayUnits,n=e.scaleFactorOf(t);
if(n>1){var i=this.options.dimensions,r=i.size||(i.size={});r.converter=function(e){
return null==e||isNaN(e)?e:e*n},this._formatSize=function(e,t){var i=e.value;return null==i?"":t.format(i/n);
}}else delete this._formatSize},_getDiscreteColorMap:function(){var e={},t=this._getMemberPalette();
if(t){var n=this._getMappingFieldInfosOfRole(this._discreteColorRole,!0);n&&n.forEach(function(n){
var i=t[n.name];i&&o.copyColorMap(e,i)},this)}return e},_createDiscreteColorMapScaleFactory:function(e,t){
function n(){function n(n){if(n){var i=n.split("~"),r=i.length-1,o=i[r];return e(o)||(r?void 0:t(o));
}}return n.available=function(t){if(t){var n=t.split("~"),i=n.length-1,r=n[i];return!i||!!e(r);
}return!1},n}return function(){return r.copy(n(),t)}}}).configure({$type:e.config
})}),define("pentaho/ccc/visual/Treemap",["pentaho/module!_","./Abstract"],function(e,t){
"use strict";return t.extend({_cccClass:"TreemapChart",$type:{id:e.id}}).configure({
$type:e.config})}),define("pentaho/ccc/visual/Waterfall",["pentaho/module!_","./BarAbstract"],function(e,t){
return t.extend({_cccClass:"WaterfallChart",$type:{id:e.id}}).configure({$type:e.config
})}),define("pentaho/ccc/visual/all",["./Abstract","./Area","./AreaAbstract","./AreaStacked","./Bar","./BarAbstract","./BarHorizontal","./BarLine","./BarNormalized","./BarNormalizedAbstract","./BarNormalizedHorizontal","./BarStacked","./BarStackedHorizontal","./Boxplot","./Bubble","./CartesianAbstract","./CategoricalContinuousAbstract","./Donut","./HeatGrid","./Line","./MetricPointAbstract","./Pie","./PointAbstract","./Scatter","./Sunburst","./Treemap","./Waterfall"],function(){
"use strict"}),define("pentaho/platformBundle",["pentaho/config/service","pentaho/module/service","pentaho/module/metaService","pentaho/module/metaOf","pentaho/module/subtypeOf","pentaho/module/subtypesOf","pentaho/module/instanceOf","pentaho/module/instancesOf","pentaho/type/loader","pentaho/data/Table","pentaho/data/TableView","pentaho/data/filter/standard","pentaho/visual/base/Model","pentaho/visual/base/View","pentaho/visual/base/ModelAdapter","pentaho/visual/color/utils","pentaho/visual/color/palettes/all","pentaho/visual/models/all","pentaho/visual/role/adaptation/allStrategies","pentaho/visual/role/util","pentaho/visual/scene/Base","pentaho/ccc/visual/all"],function(){
"use strict"});