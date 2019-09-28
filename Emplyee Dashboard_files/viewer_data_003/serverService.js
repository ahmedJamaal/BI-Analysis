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

define(["../environment","./MessageBundle","../util/url","json"],function(e,n,r){
"use strict";function t(e){var n;if(e)if("/"===e[0]){if(n=e.substr(1),!n)throw new Error("[pentaho/messages!] Bundle path argument cannot be a single '/'.");
}else n="."!==e[0]&&e.indexOf("/")<0?"./i18n/"+e:e;else n="./i18n/messages";return n;
}function s(e,n){var r=t(n),s=i(e,r),u=s.indexOf("/"),a=u>0||u<s.length-1;if(!a)throw new Error("[pentaho/messages!] Bundle path argument is invalid: '"+n+"'.");
return{pluginId:s.substr(0,u),name:s.substr(u+1)}}function i(n,t){var s=e.server.root.pathname,i="content/",u="/plugin/",a="res:",o=r.create(n.toUrl(t)),l=o.pathname,f=o.protocol,g=!l.indexOf(s);
g&&(l=l.substring(s.length));var d=!l.indexOf(i);d&&(l=l.substr(i.length));var c=!l.indexOf(a);
c&&(l=l.substr(a.length));var h=/^[.\/]*(.*)$/,m=c||f===a,v=!l.indexOf(u);if(m&&h.test(l)){
var p=h.exec(l);l=p[1]}else v&&(l=l.substr(u.length));return l}return{load:function(r,t,i,u){
if(u.isBuild)i();else{var a=s(t,r),o=e.server.root,l="json!"+o+"i18n?plugin="+a.pluginId+"&name="+a.name;
t([l],function(e){i(new n(e))},i.error)}},normalize:function(e,n){return n(t(e))},
__getBundleInfo:s}});