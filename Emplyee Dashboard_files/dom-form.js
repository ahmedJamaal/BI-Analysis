define(["./_base/lang","./dom","./io-query","./json"],function(e,t,i,n){function r(t,i,n){
if(null!==n){var r=t[i];"string"==typeof r?t[i]=[r,n]:e.isArray(r)?r.push(n):t[i]=n;
}}var o="file|submit|image|reset|button",l={fieldToObject:function(e){var i=null;if(e=t.byId(e)){
var n=e.name,r=(e.type||"").toLowerCase();if(n&&r&&!e.disabled)if("radio"==r||"checkbox"==r)e.checked&&(i=e.value);else if(e.multiple){
i=[];for(var o=[e.firstChild];o.length;)for(var l=o.pop();l;l=l.nextSibling){if(1!=l.nodeType||"option"!=l.tagName.toLowerCase()){
l.nextSibling&&o.push(l.nextSibling),l.firstChild&&o.push(l.firstChild);break}l.selected&&i.push(l.value);
}}else i=e.value}return i},toObject:function(e){for(var i={},n=t.byId(e).elements,a=0,u=n.length;u>a;++a){
var f=n[a],s=f.name,b=(f.type||"").toLowerCase();s&&b&&o.indexOf(b)<0&&!f.disabled&&(r(i,s,l.fieldToObject(f)),
"image"==b&&(i[s+".x"]=i[s+".y"]=i[s].x=i[s].y=0))}return i},toQuery:function(e){
return i.objectToQuery(l.toObject(e))},toJson:function(e,t){return n.stringify(l.toObject(e),null,t?4:0);
}};return l});