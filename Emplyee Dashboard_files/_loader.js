define(["../has","require"],function(e,t){if("undefined"!=typeof document){var n=document.createElement("div");
e.add("dom-qsa2.1",!!n.querySelectorAll),e.add("dom-qsa3",function(){try{return n.innerHTML="<p class='TEST'></p>",
1==n.querySelectorAll(".TEST:empty").length}catch(e){}})}var r,c="./acme",i="./lite";
return{load:function(n,a,s,d){if(d&&d.isBuild)return s();var l=t;if(n="default"==n?e("config-selectorEngine")||"css3":n,
n="css2"==n||"lite"==n?i:"css2.1"==n?e("dom-qsa2.1")?i:c:"css3"==n?e("dom-qsa3")?i:c:"acme"==n?c:(l=a)&&n,
"?"==n.charAt(n.length-1)){n=n.substring(0,n.length-1);var o=!0}return o&&(e("dom-compliant-qsa")||r)?s(r):void l([n],function(e){
"./lite"!=n&&(r=e),s(e)})}}});