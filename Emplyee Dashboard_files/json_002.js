define(["./has"],function(has){"use strict";var hasJSON="undefined"!=typeof JSON;if(has.add("json-parse",hasJSON),
has.add("json-stringify",hasJSON&&'{"a":1}'==JSON.stringify({a:0},function(r,n){return n||1;
})),has("json-stringify"))return JSON;var escapeString=function(r){return('"'+r.replace(/(["\\])/g,"\\$1")+'"').replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");
};return{parse:has("json-parse")?JSON.parse:function(str,strict){if(strict&&!/^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(str))throw new SyntaxError("Invalid characters in JSON");
return eval("("+str+")")},stringify:function(r,n,e){function t(r,a,s){n&&(r=n(s,r));
var f,u=typeof r;if("number"==u)return isFinite(r)?r+"":"null";if("boolean"==u)return r+"";
if(null===r)return"null";if("string"==typeof r)return escapeString(r);if("function"==u||"undefined"==u)return i;
if("function"==typeof r.toJSON)return t(r.toJSON(s),a,s);if(r instanceof Date)return'"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g,function(n,e,t){
var i=r["getUTC"+e]()+(t?1:0);return 10>i?"0"+i:i});if(r.valueOf()!==r)return t(r.valueOf(),a,s);
var o=e?a+e:"",c=e?" ":"",l=e?"\n":"";if(r instanceof Array){var p=r.length,g=[];for(s=0;p>s;s++){
var h=r[s];f=t(h,o,s),"string"!=typeof f&&(f="null"),g.push(l+o+f)}return"["+g.join(",")+l+a+"]";
}var y=[];for(s in r){var S;if(r.hasOwnProperty(s)){if("number"==typeof s)S='"'+s+'"';else{
if("string"!=typeof s)continue;S=escapeString(s)}if(f=t(r[s],o,s),"string"!=typeof f)continue;
y.push(l+o+S+":"+c+f)}}return"{"+y.join(",")+l+a+"}"}var i;return"string"==typeof n&&(e=n,
n=null),t(r,"","")}}});