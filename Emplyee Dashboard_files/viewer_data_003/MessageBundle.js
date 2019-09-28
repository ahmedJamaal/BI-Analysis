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

define(["../util/object","../lang/ArgumentRequiredError"],function(t,r){"use strict";
function n(t){this.source=t&&"object"==typeof t?t:{},this.__structured=null}function e(r){
var n={};return t.eachOwn(r,u,n),n}function u(r,n){for(var e=n.split("."),u=this,o=0,i=e.length;o!==i;++o){
var c=e[o];i-1>o?(t.hasOwn(u,c)||(u[c]={}),u=u[c]):u[c]=r}}return n.prototype.has=function(r){
return null!=t.getOwn(this.source,r)},n.prototype.get=function(r,n,e){2===arguments.length&&"string"==typeof n&&(e=n,
n=null);var u=t.getOwn(this.source,r);return null==u?void 0===e?r:e:this.format(u,n);
},Object.defineProperty(n.prototype,"structured",{get:function(){return this.__structured||(this.__structured=e(this.source)),
this.__structured}}),n.format=function(n,e){if(null==n)throw new r("text");var u;return u=null==e?function(t){
return null}:"function"==typeof e?e:function(r){return t.getOwn(e,r)},String(n).replace(/(^|[^{])\{([^{}]+)\}/g,function(t,r,n){
var e=u(n);return r+(null==e?"[?]":e.toString())})},n.prototype.format=n.format,n;
});