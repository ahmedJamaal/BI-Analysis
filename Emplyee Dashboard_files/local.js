/*! *
* local.js: A RequireJS plugin that enables coordinating other framework's asynchronous loading mechanisms with "local" modules.
*
* For more information see https://github.com/jganoff/localjs
*
* Licensed under the Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0.txt)
*
* This is a slight modification from the one found on Github. We use define here (instead of define) so it can be
* used outside of our build process.
*/

define([],function(){var n,e,l,o,i,u={},d={};return i=function(n,e){u[n]=[e],l(n,e);
},o=function(n){return void 0!==u[n]},e=function(n,e){var l=d[n]||[];l.push(e),d[n]=l;
},l=function(n,e){var l,o=d[n];if(void 0!==o)for(l=0;l<o.length;l++)o[l].call(null,e);
delete d[n]},n={load:function(n,l,i,d){o(n)?i.call(null,u[n][0]):e(n,i)},define:function(n,e){
var l;return o(n)?void("undefined"!=typeof console&&console.warn("local module is already defined: "+n)):(l="undefined"!=typeof e?e.call(null):null,
void i(n,l))}}});