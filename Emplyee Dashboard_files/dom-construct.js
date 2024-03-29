define(["exports","./_base/kernel","./sniff","./_base/window","./dom","./dom-attr"],function(e,t,r,o,i,n){
function a(e,t){var r=t.parentNode;r&&r.insertBefore(e,t)}function d(e,t){var r=t.parentNode;
r&&(r.lastChild==t?r.appendChild(e):r.insertBefore(e,t.nextSibling))}function l(e){
if(e.canHaveChildren)try{return void(e.innerHTML="")}catch(t){}for(var r;r=e.lastChild;)s(r,e);
}function s(e,t){e.firstChild&&l(e),t&&(r("ie")&&t.canHaveChildren&&"removeNode"in e?e.removeNode(!1):t.removeChild(e));
}var c={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],
td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],
colgroup:["table"],col:["table","colgroup"],li:["ul"]},f=/<\s*([\w\:]+)/,p={},h=0,b="__"+t._scopeName+"ToDomId";
for(var u in c)if(c.hasOwnProperty(u)){var m=c[u];m.pre="option"==u?'<select multiple="multiple">':"<"+m.join("><")+">",
m.post="</"+m.reverse().join("></")+">"}var v;r("ie")<=8&&(v=function(e){e.__dojo_html5_tested="yes";
var t=y("div",{innerHTML:"<nav>a</nav>",style:{visibility:"hidden"}},e.body);1!==t.childNodes.length&&"abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g,function(t){
e.createElement(t)}),C(t)}),e.toDom=function(e,t){t=t||o.doc;var i=t[b];i||(t[b]=i=++h+"",
p[i]=t.createElement("div")),r("ie")<=8&&!t.__dojo_html5_tested&&t.body&&v(t),e+="";
var n,a,d,l,s=e.match(f),u=s?s[1].toLowerCase():"",m=p[i];if(s&&c[u])for(n=c[u],m.innerHTML=n.pre+e+n.post,
a=n.length;a;--a)m=m.firstChild;else m.innerHTML=e;if(1==m.childNodes.length)return m.removeChild(m.firstChild);
for(l=t.createDocumentFragment();d=m.firstChild;)l.appendChild(d);return l},e.place=function(t,r,o){
if(r=i.byId(r),"string"==typeof t&&(t=/^\s*</.test(t)?e.toDom(t,r.ownerDocument):i.byId(t)),
"number"==typeof o){var n=r.childNodes;!n.length||n.length<=o?r.appendChild(t):a(t,n[0>o?0:o]);
}else switch(o){case"before":a(t,r);break;case"after":d(t,r);break;case"replace":
r.parentNode.replaceChild(t,r);break;case"only":e.empty(r),r.appendChild(t);break;
case"first":if(r.firstChild){a(t,r.firstChild);break}default:r.appendChild(t)}return t;
};var y=e.create=function(t,r,a,d){var l=o.doc;return a&&(a=i.byId(a),l=a.ownerDocument),
"string"==typeof t&&(t=l.createElement(t)),r&&n.set(t,r),a&&e.place(t,a,d),t};e.empty=function(e){
l(i.byId(e))};var C=e.destroy=function(e){e=i.byId(e),e&&s(e,e.parentNode)}});