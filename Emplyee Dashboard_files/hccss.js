define(["require","./_base/config","./dom-class","./dom-style","./has","./domReady","./_base/window"],function(e,o,r,d,n,t,i){
return n.add("highcontrast",function(){var r=i.doc.createElement("div");r.style.cssText="border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url("+(o.blankGif||e.toUrl("./resources/blank.gif"))+");",
i.body().appendChild(r);var t=d.getComputedStyle(r),a=t.backgroundImage,l=t.borderTopColor==t.borderRightColor||a&&("none"==a||"url(invalid-url:)"==a);
return n("ie")<=8?r.outerHTML="":i.body().removeChild(r),l}),t(function(){n("highcontrast")&&r.add(i.body(),"dj_a11y");
}),n});