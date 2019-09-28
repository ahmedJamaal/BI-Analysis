define(["./kernel","../has","../sniff"],function(n,t){t.add("bug-for-in-skips-shadowed",function(){
for(var n in{toString:1})return 0;return 1});var r=t("bug-for-in-skips-shadowed")?"hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."):[],e=r.length,i=function(t,r,e){
var i,o=0,u=n.global;if(!e){if(!t.length)return u;i=t[o++];try{e=n.scopeMap[i]&&n.scopeMap[i][1];
}catch(c){}e=e||(i in u?u[i]:r?u[i]={}:void 0)}for(;e&&(i=t[o++]);)e=i in e?e[i]:r?e[i]={}:void 0;
return e},o=Object.prototype.toString,u=function(n,t,r){return(r||[]).concat(Array.prototype.slice.call(n,t||0));
},c=/\{([^\}]+)\}/g,a={_extraNames:r,_mixin:function(n,i,o){var u,c,a,s={};for(u in i)c=i[u],
u in n&&(n[u]===c||u in s&&s[u]===c)||(n[u]=o?o(c):c);if(t("bug-for-in-skips-shadowed")&&i)for(a=0;e>a;++a)u=r[a],
c=i[u],u in n&&(n[u]===c||u in s&&s[u]===c)||(n[u]=o?o(c):c);return n},mixin:function(n,t){
n||(n={});for(var r=1,e=arguments.length;e>r;r++)a._mixin(n,arguments[r]);return n;
},setObject:function(n,t,r){var e=n.split("."),o=e.pop(),u=i(e,!0,r);return u&&o?u[o]=t:void 0;
},getObject:function(n,t,r){return i(n.split("."),t,r)},exists:function(n,t){return void 0!==a.getObject(n,!1,t);
},isString:function(n){return"string"==typeof n||n instanceof String},isArray:function(n){
return n&&(n instanceof Array||"array"==typeof n)},isFunction:function(n){return"[object Function]"===o.call(n);
},isObject:function(n){return void 0!==n&&(null===n||"object"==typeof n||a.isArray(n)||a.isFunction(n));
},isArrayLike:function(n){return!(!n||void 0===n||a.isString(n)||a.isFunction(n)||n.tagName&&"form"==n.tagName.toLowerCase()||!a.isArray(n)&&!isFinite(n.length));
},isAlien:function(n){return n&&!a.isFunction(n)&&/\{\s*\[native code\]\s*\}/.test(String(n));
},extend:function(n,t){for(var r=1,e=arguments.length;e>r;r++)a._mixin(n.prototype,arguments[r]);
return n},_hitchArgs:function(t,r){var e=a._toArray(arguments,2),i=a.isString(r);return function(){
var o=a._toArray(arguments),u=i?(t||n.global)[r]:r;return u&&u.apply(t||this,e.concat(o));
}},hitch:function(t,r){if(arguments.length>2)return a._hitchArgs.apply(n,arguments);
if(r||(r=t,t=null),a.isString(r)){if(t=t||n.global,!t[r])throw['lang.hitch: scope["',r,'"] is null (scope="',t,'")'].join("");
return function(){return t[r].apply(t,arguments||[])}}return t?function(){return r.apply(t,arguments||[]);
}:r},delegate:function(){function n(){}return function(t,r){n.prototype=t;var e=new n;
return n.prototype=null,r&&a._mixin(e,r),e}}(),_toArray:t("ie")?function(){function n(n,t,r){
for(var e=r||[],i=t||0;i<n.length;i++)e.push(n[i]);return e}return function(t){return(t.item?n:u).apply(this,arguments);
}}():u,partial:function(t){var r=[null];return a.hitch.apply(n,r.concat(a._toArray(arguments)));
},clone:function(n){if(!n||"object"!=typeof n||a.isFunction(n))return n;if(n.nodeType&&"cloneNode"in n)return n.cloneNode(!0);
if(n instanceof Date)return new Date(n.getTime());if(n instanceof RegExp)return new RegExp(n);
var t,r,e;if(a.isArray(n))for(t=[],r=0,e=n.length;e>r;++r)r in n&&t.push(a.clone(n[r]));else t=n.constructor?new n.constructor:{};
return a._mixin(t,n,a.clone)},trim:String.prototype.trim?function(n){return n.trim();
}:function(n){return n.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},replace:function(n,t,r){
return n.replace(r||c,a.isFunction(t)?t:function(n,r){return a.getObject(r,!1,t)});
}};return t("extend-dojo")&&a.mixin(n,a),a});