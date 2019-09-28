define(["exports","./_base/kernel","./sniff","./_base/lang","./dom","./dom-style","./dom-construct","./_base/connect"],function(e,t,n,r,o,a,s,i){
var l={},c=0,d=t._scopeName+"attrid";e.names={"class":"className","for":"htmlFor",
tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",
rowspan:"rowSpan",valuetype:"valueType"},e.get=function(t,n){t=o.byId(t);var r=n.toLowerCase(),a=e.names[r]||n;
return t[a]},e.set=function(t,f,u){if("undefined"==typeof t||null==t)return t;t=o.byId(t);
var m=arguments.length;if(2==m&&"string"!=typeof f){for(var p in f)e.set(t,p,f[p]);
return t}var y=f.toLowerCase(),b=e.names[y]||f;if("style"==b&&"string"!=typeof u)return a.set(t,u),
t;if("innerHTML"==b)return n("ie")&&t.tagName.toLowerCase()in{col:1,colgroup:1,table:1,
tbody:1,tfoot:1,thead:1,tr:1,title:1}?(s.empty(t),t.appendChild(s.toDom(u,t.ownerDocument))):t[b]=u,
t;if(r.isFunction(u)){var v=t[d];v||(v=c++,t[d]=v),l[v]||(l[v]={});var g=l[v][b];if(g)i.disconnect(g);else try{
delete t[b]}catch(w){}return u?l[v][b]=i.connect(t,b,u):t[b]=null,t}return t[b]=u,
t}});