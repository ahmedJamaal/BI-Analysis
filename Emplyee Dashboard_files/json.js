define(["./kernel","../json"],function(dojo,json){return dojo.fromJson=function(js){
return eval("("+js+")")},dojo._escapeString=json.stringify,dojo.toJsonIndentStr="	",
dojo.toJson=function(n,o){return json.stringify(n,function(n,o){if(o){var t=o.__json__||o.json;
if("function"==typeof t)return t.call(o)}return o},o&&dojo.toJsonIndentStr)},dojo;
});