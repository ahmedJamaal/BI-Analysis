define(["require","./main","dojo/_base/config","dojo/dom-construct","dojo/dom-style","dojo/_base/lang","dojo/on","dojo/sniff"],function(e,t,i,o,n,r,s,a){
a.add("config-bgIframe",!a("touch"));var f=new function(){var t=[];this.pop=function(){
var r;if(t.length)r=t.pop(),r.style.display="";else{if(a("ie")<9){var s=i.dojoBlankHtmlUrl||e.toUrl("dojo/resources/blank.html")||'javascript:""',f="<iframe src='"+s+"' role='presentation' style='position: absolute; left: 0px; top: 0px;z-index: -1; filter:Alpha(Opacity=\"0\");'>";
r=document.createElement(f)}else r=o.create("iframe"),r.src='javascript:""',r.className="dijitBackgroundIframe",
r.setAttribute("role","presentation"),n.set(r,"opacity",.1);r.tabIndex=-1}return r;
},this.push=function(e){e.style.display="none",t.push(e)}};return t.BackgroundIframe=function(e){
if(!e.id)throw new Error("no id");if(a("config-bgIframe")){var t=this.iframe=f.pop();
e.appendChild(t),a("ie")<7||a("quirks")?(this.resize(e),this._conn=s(e,"resize",r.hitch(this,"resize",e))):n.set(t,{
width:"100%",height:"100%"})}},r.extend(t.BackgroundIframe,{resize:function(e){this.iframe&&n.set(this.iframe,{
width:e.offsetWidth+"px",height:e.offsetHeight+"px"})},destroy:function(){this._conn&&(this._conn.remove(),
this._conn=null),this.iframe&&(f.push(this.iframe),delete this.iframe)}}),t.BackgroundIframe;
});