define(["./has"],function(d){if(d("host-browser")){var a=navigator,e=a.userAgent,i=a.appVersion,o=parseFloat(i);
if(d.add("air",e.indexOf("AdobeAIR")>=0),d.add("msapp",parseFloat(e.split("MSAppHost/")[1])||void 0),
d.add("khtml",i.indexOf("Konqueror")>=0?o:void 0),d.add("webkit",parseFloat(e.split("WebKit/")[1])||void 0),
d.add("chrome",parseFloat(e.split("Chrome/")[1])||void 0),d.add("safari",i.indexOf("Safari")>=0&&!d("chrome")?parseFloat(i.split("Version/")[1]):void 0),
d.add("mac",i.indexOf("Macintosh")>=0),d.add("quirks","BackCompat"==document.compatMode),
e.match(/(iPhone|iPod|iPad)/)){var t=RegExp.$1.replace(/P/,"p"),r=e.match(/OS ([\d_]+)/)?RegExp.$1:"1",p=parseFloat(r.replace(/_/,".").replace(/_/g,""));
d.add(t,p),d.add("ios",p)}if(d.add("android",parseFloat(e.split("Android ")[1])||void 0),
d.add("bb",(e.indexOf("BlackBerry")>=0||e.indexOf("BB10")>=0)&&parseFloat(e.split("Version/")[1])||void 0),
d.add("trident",parseFloat(i.split("Trident/")[1])||void 0),d.add("svg","undefined"!=typeof SVGAngle),
!d("webkit")){if(e.indexOf("Opera")>=0&&d.add("opera",o>=9.8?parseFloat(e.split("Version/")[1])||o:o),
e.indexOf("Gecko")>=0&&!d("khtml")&&!d("webkit")&&!d("trident")&&d.add("mozilla",o),
d("mozilla")&&d.add("ff",parseFloat(e.split("Firefox/")[1]||e.split("Minefield/")[1])||void 0),
document.all&&!d("opera")){var l=parseFloat(i.split("MSIE ")[1])||void 0,s=document.documentMode;
s&&5!=s&&Math.floor(l)!=s&&(l=s),d.add("ie",l)}d.add("wii","undefined"!=typeof opera&&opera.wiiremote);
}}return d});