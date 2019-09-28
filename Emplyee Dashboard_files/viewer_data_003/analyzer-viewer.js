define("analyzer/cv_base",["dojo/_base/declare","dojo/on","dojo/query","dijit/Menu","dijit/Dialog","dojo/ready","dojo/_base/lang","dojo/html","dojo/dom"],function(e,t,i,r,o,s,a,n,l){
a.mixin(window.cv,{prefs:{suppressMsg:{},fadeTime:250,wipeTime:250,isDebug:0,skipDirtyAlert:!1
},defaultNS:"http://www.pentaho.com",contextPath:"",dojoWidgets:{},helpTopics:{},
helpWin:null,securityToken:null,nsResolver:function(e){return"http://www.pentaho.com";
},getFieldHelp:null,getActiveReport:null,init:function(){var e=l.byId("stok");e&&(cv.securityToken=e.value);
var t=!1;try{t=window.parent&&window.parent.PentahoMobile}catch(i){}console_enabled||t||(document.getElementsByTagName("body")[0].className+=" pentaho-page-background");
}}),cv.extension=cv.extension||{},s(cv.init),dojoConfig.bindEncoding="utf8";var d=window.cvConst={
dndObjectTypes:{gem:"G"},dndSourceTypes:{fieldList:"F",layoutPanel:"B",reportArea:"R"
}};d.dndTypes={gemFromFieldList:d.dndObjectTypes.gem+d.dndSourceTypes.fieldList,gemFromLayoutPanel:d.dndObjectTypes.gem+d.dndSourceTypes.layoutPanel,
gemFromReportArea:d.dndObjectTypes.gem+d.dndSourceTypes.reportArea}}),define("analyzer/cv_util",["dojo/_base/declare","dojo/_base/array","dojo/on","dojo/query","dojo/_base/lang","dijit/popup","dojo/dom-class","dojo/window","dojo/dom-style","dijit/registry","dojo/html","dojo/dom","dojo/topic","dojo/parser","dojox/fx","dojo/dnd/Manager","dojo/dnd/common","dojo/dom-geometry","dojox/xml/parser","dijit/MenuItem","dijit/MenuSeparator","dojo/dnd/Avatar","dijit/BackgroundIframe","dojo/has","dojo/sniff","dijit/PopupMenuItem","dijit/Tooltip","dijit/layout/TabController","dojo/cache","dojo/regexp","dijit/layout/_TabContainerBase","dijit/layout/TabContainer","dijit/DialogUnderlay","analyzer/cv_base","dojo/string","dojo/request","pentaho/common/Messages"],function(declare,array,on,query,lang,popup,domClass,domWindow,style,registry,html,dom,topic,parser,fx,ManagerClass,dnd,geometry,xmlParser,MenuItem,MenuSeparator,Avatar,BackgroundIframe,has,sniff,PopupMenuItem,Tooltip,TabController,cache,regexp,_TabContainerBase,TabContainer,DialogUnderlay,_cv_base,_string,request,messages){
ManagerClass.manager();cv.util={initDojoWidget:null,alertErrorOnPageOpen:function(e,t){
alert(e),t&&(window.location=t)},delayThese:function(e,t,i,r){return e.length?("undefined"==typeof i&&"number"==typeof t?(i=t,
t=function(){}):t||(t=function(){},i||(i=0)),void setTimeout(function(){e.shift()(),
t(),cv.util.delayThese(e,t,i,r)},i)):void("function"==typeof r&&r())},checkNumber:function(e){
return""===e?!1:!isNaN(Number(e))},checkPositiveInteger:function(e){if(!cv.util.checkNumber(e))return!1;
var t=parseInt(e);return 0>=t||t!=parseFloat(e)?!1:!0},escapeHtml:function(e,t){return e=e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;"),
t||(e=e.replace(/'/gm,"&#39;")),e},escapeJavaScript:function(e){return e.replace(/(["'\f\b\n\t\r])/gm,"\\$1");
},getAttribute:function(e,t){var i=e.getAttribute(t);return i},isValidElementName:function(e,t,i){
var r=['"',"\\"];if("undefined"==typeof t&&(t=!1),null==e||"undefined"==typeof e)return messages.getString("dlgPropertiesBlankNameError");
e=e.toLowerCase();var o=e;if(e=e.trim(),""===e)return messages.getString("dlgPropertiesBlankNameError");
e=o;var s,a=cv.getFieldHelp();if(a.selectedMenuField&&(s=a.selectedMenuField.textContent.toLowerCase()),
i.length>0)for(u=0;u<=i.length-1;u++){var n=i[u].getElementsByTagName("presentationFieldHelp")[0].getAttribute("displayLabel"),l=n.toLowerCase(),d="undefined"!=typeof i[u].getAttribute?i[u].getAttribute("measureName"):null,c=d;
if(d=d?d.toLowerCase():d,(e===l||e===d)&&(t||l!==s)){var h=i[u].getElementsByTagName("presentationFieldHelp")[0].getAttribute("hidden").toLowerCase();
return h&&"true"===h?e===d?messages.getString("dlgPropertiesHiddenDuplicateNameRenamedError",[c,n]):messages.getString("dlgPropertiesHiddenDuplicateNameError"):e===d?messages.getString("dlgPropertiesDuplicateNameRenamedError",[c,n]):messages.getString("dlgPropertiesDuplicateNameError");
}}for(var u=0;u<=e.length;u++)for(var p in r)if(e.charAt(u)===r[p])return messages.getString("dlgPropertiesInvalidCharacters");
return!0},isValidMeasureName:function(e,t){var i=cv.getFieldHelp();return this.isValidElementName(e,t,i.getMeasureList());
},isValidAttributeName:function(e,t){var i=cv.getFieldHelp(),r=i.selectedMenuField.getAttribute("formula"),o=i.get(r).getAttribute("hierarchy"),s=i.getHierarchyLevels(o);
return this.isValidElementName(e,t,s)},convertReportCalcMeasureToModel:function(e,t){
for(var i="[Measures].["+t+"]",r=cv.getFieldHelp().manager.report,o=r.reportDoc,s=o.getMetrics("EXPRESSION"),a=0;a<s.length;a++){
var n=s[a];if(n.id===e){var l="measures";null!==n.getAttribute("gembarId")&&(l=n.getAttribute("gembarId"));
var d=r.api.report.getLayoutFields(l),c=d.indexOf(e);-1!==c&&(r.api.report.removeLayoutField(l,e),
r.api.report.addLayoutField(l,i,c))}}this.updateMeasureReferences(e,t)},updateMeasureReferences:function(e,t){
var i="[Measures].["+t+"]";if(e!==i){var r=cv.getFieldHelp().manager.report,o=xmlParser.innerXML(r.reportDoc.getReportNode());
o=o.replace(new RegExp(regexp.escapeString(e),"g"),i);var s=cv.parseXML(o);try{r.openReport(s.documentElement);
}catch(a){r.history.current().exec(!0)}}},createCalcMeasureAnnotation:function(e,t,i,r,o,s,a,n){
var l={name:e,caption:i,description:r,formatCategory:o,formatScale:s,calculateSubtotals:a,
formula:t,dimension:"Measures",createdInline:!0};this._createGenericCalcMeasureAnnotation(l,"CREATE_CALCULATED_MEMBER");
},createUpdateCalcMeasureAnnotation:function(e,t,i,r,o,s,a,n,l){var d={originalName:e,
name:t,caption:r,description:o,formatCategory:s,formatScale:a,calculateSubtotals:n,
formula:i,dimension:"Measures",createdInline:!0};this._createGenericCalcMeasureAnnotation(d,"UPDATE_CALCULATED_MEMBER");
},_createGenericCalcMeasureAnnotation:function(e,t){var i=cv.getFieldHelp().manager.report,r={
properties:e,source:{cube:i.cube},type:t};i.modelAnnotations.push(r)},createShowHideFieldAnnotation:function(e){
var t=cv.getFieldHelp().manager.report,i=!this.isHiddenField(e),r=e.getAttribute("formula"),o=cv.getFieldHelp().get(r),s=t.api.util.parseMDXExpression(r),a="attributeHelp"===o.nodeName;
if(a){var n=o.getAttribute("hierarchy").replace(/[\[\]]/g,""),l=o.getAttribute("dimension").replace(/[\[\]]/g,"");
0===n.indexOf(l+".")&&(n=n.substring(l.length+1));var d={properties:{name:s,visible:!i,
hierarchy:n,dimension:l},source:{cube:t.cube},type:"SHOW_HIDE_ATTRIBUTE"}}else var d={
properties:{name:s,visible:!i},source:{cube:t.cube},type:"SHOW_HIDE_MEASURE"};t.modelAnnotations.push(d);
var c=t.manager.updateCatalog(!0);if("undefined"!=typeof c)return t.modelAnnotations.pop(),
void console.log(c);for(var h=[],u=cv.getActiveReport().reportDoc.getDrillColumns(),p=0;p<u.length;p++){
var m=cv.textContent(u[p]);m!==r?(h[m]=!0,"true"==cv.util.getAttribute(u[p],"hidden")&&(h[m]=!1)):h[m]=!i;
}if(cv.getActiveReport().reportDoc.replaceDrillColumns(h),i){var g=this.findContainingGemBar(t,r);
null!==g&&t.api.report.removeLayoutField(g,r),t.history.add(new cv.ReportState("actionHideField",r));
}else t.history.add(new cv.ReportState("actionShowField",r));t.api.operation.refreshReport();
},substituteParams:function(e,t){var i="object"==typeof t?t:cv.util.toArray(arguments,1);
return e.replace(/\%\{(\w+)\}/g,function(e,t){if("undefined"!=typeof i[t]&&null!=i[t])return i[t];
throw"Substitution not found: "+t})},toArray:function(e,t){for(var i=[],r=t||0;r<e.length;r++)i.push(e[r]);
return i},summary:function(e,t){return!t||e.length<=t?e:e.substring(0,t).replace(/\.+$/,"")+"...";
},sanitizeJSONString:function(e){if(!e)return null;var t=e;return t=t.replace(/\/\*[\s\S]*\*\//,"");
},connectPopupMenu:function(e,t){for(var i=0;t&&i<t.length;++i){var r=t[i],o=this.getDojoWidget(r.id);
o&&(on(o,"click",lang.hitch(r.src?r.src:e,r.handler)),on(o,"click",function(){popup.close();
}),r.disabled&&o.setDisabled(!0))}},showPopupMenu:function(e,t,i){t+=7,i+=7;var r=(domWindow.getBox().w,
domWindow.getBox().h),o=cv.api.event._emitBuildMenu(e,t,i);if(o){popup.open({popup:e,
x:t,y:i}),i+e.domNode.offsetHeight>r&&(i=r-e.domNode.offsetHeight-30,popup.open({
popup:e,x:t,y:i}));var s=on(e,"blur",function(){popup.close(),s.remove()});e.focus();
}},disableMenuItems:function(e,t){this.resetContextMenuItems(e);for(var i=cv.getFieldHelp(),r=t.getAttribute("formula"),o=this.isHiddenField(t),s=e.getChildren(),a=0;a<s.length;a++){
var n=s[a].id;"cmdHideField"===n?cv.util.setMenuItem(s[a],o?"checked":"none"):"cmdFieldAbout"!==n&&o?cv.util.setMenuItem(s[a],null,"disabled"):cv.util.setMenuItem(s[a],null,"active");
}var l=i.getModelInfoValue(r,"InlineCreatedInline");if(l=l&&"true"===l.trim(),t.classList.contains("measure"))for(var d="true"===i.get(r,"calculated"),s=e.getChildren(),a=0;a<s.length;a++){
var n=s[a].id;d?this._doesMenuItemApply(s[a],["calculated measure"])||this.hide(n):l||this._doesMenuItemApply(s[a],["measure"])||this.hide(n);
}else for(var s=e.getChildren(),a=0;a<s.length;a++)this._doesMenuItemApply(s[a],["level"])||this.hide(s[a].id);
},_doesMenuItemApply:function(e,t){if(e&&e.appliesTo){t.push("all");var r=!1;for(i in t)r=r||array.indexOf(e.appliesTo,t[i])>=0;
return r}return!1},resetContextMenuItems:function(e){for(var t=e.getChildren(),i=0;i<t.length;i++)this.show(t[i].domNode);
},destroyDojoWidgets:function(){for(var e in cv.dojoWidgets)try{cv.dojoWidgets[e]&&cv.dojoWidgets[e].destroy(!0);
}catch(t){}},disconnectPopupMenu:function(e,t){for(var i=0;t&&i<t.length;++i){this.getDojoWidget(t[i].id);
}},displayWidget:function(e,t){if(this.getDojoWidget(e)){var i=this.getDojoWidget(e).domNode;
i&&(t?style.set(i,"display",""):style.set(i,"display","none"))}},getAncestorByClass:function(e,t){
for(;e&&!domClass.contains(e,t);)e=e.parentNode;return e},getFirstChildByClass:function(e,t){
var i=query(" ."+t,e);return void 0!==i&&i.length>0?i[0]:void 0},getAncestorByTag:function(e,t){
for(t=t.toLowerCase();e;){if(e.tagName&&e.tagName.toLowerCase()==t)return e;e=e.parentNode;
}return null},getDojoWidget:function(id){if(cv.dojoWidgets[id])return cv.dojoWidgets[id];
var wi=registry.byId(id);if(!wi){if(wi=dom.byId(id),!wi)return null;wi=parser.instantiate([wi]),
wi=wi&&wi.length>0?wi[0]:null}if(wi)with(this.initDojoWidget&&this.initDojoWidget(wi),
cv.dojoWidgets[id]=wi,wi.domNode.style)zIndex=1002;return wi},stopDrag:function(){
domClass.remove(win.body(),["dojoDndCopy","dojoDndMove"]),array.forEach(this.events,function(e){
e.remove()}),this.events=[],this.avatar&&this.avatar.destroy(),this.avatar=null,this.source=this.target=null,
this.nodes=[],topic.publish("/dnd/cancel")},helpdialog:null,getHelp:function(e){if(lang.isObject(e)&&e.target&&(e=e.target.id),
e&&"null"!=e?e.indexOf(".html")<0&&(e=cv.helpTopics&&cv.helpTopics[e]?cv.helpTopics[e]:""):e="",
e=cv.contextPath+"help/topic.html?"+e,window.location.search&&window.location.search.indexOf("embeddedHelp=true")>-1)return null==this.helpDialog&&(this.helpDialog=new cv.HelpDialog,
this.helpDialog.init()),void this.helpDialog.showDlg(e);var t=domWindow.getBox();cv.helpWin&&!cv.helpWin.closed&&cv.helpWin.close();
var i=window.open(e,"helpWnd","height="+.8*t.h+",width="+.8*t.w+",menubar=0,status=0,toolbar=0,location=0,resizable=1");
i&&(cv.helpWin=i),i.focus()},getSelectionList:function(e){for(var t=e.getElementsByTagName("INPUT"),i=[],r=t.length,o=0;r>o;++o)t[o].checked&&i.push(t[o].name);
return 0==i.length&&(i=null),i},hide:function(){for(var e=0;e<arguments.length;++e)domClass.add(dom.byId(arguments[e]),"hidden");
},disableTextSelection:function(e){e.onselectstart=function(){return!1},style.set(e,{
"-moz-user-select":"-moz-none","-khtml-user-select":"none","-webkit-user-select":"none",
"user-select":"none"})},initDivButton:function(e,t,i){"string"==typeof e&&(e=dom.byId(e)),
e&&(on(e,"mouseover",lang.hitch(this,"_divButtonActive")),on(e,"mousedown",lang.hitch(this,"_divButtonPressed")),
on(e,"mouseout",lang.hitch(this,"_divButtonInactive")),on(e,"click",lang.hitch(this,"_divButtonInactive")),
t?on(e,"click",lang.hitch(t,i)):i&&on(e,"click",i),cv.util.disableTextSelection(e));
},isHidden:function(e){return domClass.contains(dom.byId(e),"hidden")},isHiddenField:function(e){
return domClass.contains(e,"hiddenField")||domClass.contains(e,"disabled")},gravity:function(node,e){
node=dom.byId(node);var mouse={y:e.clientY,x:e.clientX},bb=geometry.position(node),nodecenterx=bb.x+bb.w/2,nodecentery=bb.y+bb.h/2;
with(cv.util.gravity)return(mouse.x<nodecenterx?WEST:EAST)|(mouse.y<nodecentery?NORTH:SOUTH);
},overElement:function(e,t){if(!e)return!1;var i;switch(t.type){case"mouseout":case"mouseleave":
if(t.target==e)return!1;break;default:if(t.target==e)return!0}if("AREA"==e.tagName&&"RECT"==e.getAttribute("shape").toUpperCase()){
var r=e.coords.split(","),o=query("img[usemap='#"+e.parentNode.getAttribute("name")+"']")[0];
i=geometry.position(o,!0),i.x+=parseInt(r[0]),i.y+=parseInt(r[1]),i.h+=parseInt(r[4])-parseInt(r[1]),
i.w+=parseInt(r[3])-parseInt(r[0])}else i=geometry.position(e,!0);var s=t.clientX,a=t.clientY;
return s>i.x+i.w||s<i.x||a>i.y+i.h||a<i.y?!1:!0},setButtonDisabled:function(e,t){
if(e&&t!=e.disabled){if("IMG"==e.tagName){var i=e.src.indexOf(".png")>-1?".png":".gif";
e.src=t?e.src.replace(i,"_disabled"+i):e.src.replace("_disabled"+i,i)}else t?domClass.add(e,"disabled"):domClass.remove(e,"disabled");
e.disabled=t}},_divButtonActive:function(e){e.target.disabled||domClass.add(this.getAncestorByClass(e.target,"reportBtn"),"btnActive");
},_divButtonInactive:function(e){var t=this.getAncestorByClass(e.target,"reportBtn");
domClass.remove(t,"btnActive")},_divButtonPressed:function(e){e.target.disabled},
onToggleSectionCheckbox:function(e){e.target.checked?fx.wipeIn({duration:cv.prefs.wipeTime,
node:e.target.id+"DIV"}).play():fx.wipeOut({duration:cv.prefs.wipeTime,node:e.target.id+"DIV"
}).play()},parseMDXExpression:function(e,t){var i=e.lastIndexOf("].[");if(-1==i)return"";
e=e.substring(i);var r=/\]\.\[(.+)\]$/,o=r.exec(e);if(!o)return"";var s=o[1];return s=s.replace("]]","]"),
"#null"==s?cvCatalog.attributeNullValue:s.search(/\S/)<0?cvCatalog.attributeBlankValue:t?cv.util.escapeHtml(s):s;
},parseAjaxMsg:function(e){if("string"==typeof e){if(e.indexOf('<form name="login"')>0){
var t={loginCallback:function(){cv.getActiveReport()&&cv.getActiveReport().refreshReport();
}};if(console_enabled&&window.parent.authenticate)return window.parent.authenticate(t),
"sessionExpired";cv.getActiveReport()&&(cv.getActiveReport().setReportPropsDirty(!1),
cv.getActiveReport().history.setSaved()),window.location.reload()}var i=e.indexOf("<message");
if(0>i)return;var r=e.indexOf("</message>");if(0>r){if(r=e.indexOf("/>",i),0>r)return;
r+=2}else r+=10;e=cv.parseXML(e.substring(i,r)),cv.setDomDefaultNamespace(e)}if(lang.isObject(e)&&e.documentElement&&"message"==e.documentElement.tagName){
for(var o=(e.documentElement.getAttribute("id"),e.documentElement.attributes),s={},a=0;a<o.length;++a){
var n=o.item(a);n.name&&(s[n.name]=n.value)}var l=e.documentElement.selectSingleNode("cv:selectionItems");
return null!=l&&cv.getActiveReport().reportDoc.replaceSelectionItems(l.cloneNode(!0)),
s}return null},parseURLQuery:function(e){if(e||(e=window.location.search),0==e.length)return null;
for(var t=e.substring(1).split("&"),i={},r=0;r<t.length;++r){var o=t[r].indexOf("=");
o>0&&(i[t[r].substring(0,o)]=decodeURIComponent(t[r].substring(o+1)))}return i},getURLQueryValue:function(e,t){
var i=this.parseURLQuery(t);return i?i[e]:null},removeNode:function(e){e&&e.parentNode&&e.parentNode.removeChild(e);
},setCommonMsgTooltip:function(e){if(e){var t=this.getDojoWidget("commonMsgTooltip");
t&&(t.domNode.innerHTML=e)}},setDivActive:function(e,t){t?domClass.add(e,"active"):domClass.remove(e,"active");
},setHelpTopics:function(e){for(var t=0;t<e.length;++t){var i="string"==typeof e[t]?dom.byId(e[t]):e[t];
i&&(on(i,"click",lang.hitch(this,"getHelp")),cv.helpTopics[e[t]]=e[++t])}},setMenuItem:function(e,t,i){
if("string"==typeof e&&(e=this.getDojoWidget(e)),e){if(t){var r=e.iconNode;t&&"checked"==t?(domClass.remove(r,"dijitNoIcon unchecked"),
domClass.add(r,"checked")):(domClass.remove(r,"dijitNoIcon checked"),domClass.add(r,"unchecked"));
}i&&e.setDisabled&&e.set("disabled","disabled"==i?!0:!1)}},setSectionCollapsed:function(e){
var t=!0,i=dom.byId(e);i&&("checkbox"==i.type?i.checked=!1:"IMG"==i.tagName&&(this.hide(i.id+"DIV"),
i.name="closed",i.src=i.src.replace(/opened\./,"closed."),t=!1)),t&&dojox.fx.wipeOut({
duration:0,node:dom.byId(e+"DIV")}).play()},show:function(){for(var e=0;e<arguments.length;++e)arguments[e].tagName?domClass.remove(arguments[e],"hidden"):domClass.remove(dom.byId(arguments[e]),"hidden");
},updateMenuItemCaption:function(e,t,i){var r=this.getDojoWidget(e);r&&(t=cvCatalog[t],
i&&(t=cv.util.substituteParams(t,i)),r.setLabel(t))},TRACE:function(e){if(!(cv.prefs.isDebug<2))try{
if("_INIT"==e)this.TRACEWIN=window.open("","cvtrace","resizable=1,scrollbars=1"),
this.TRACEWIN.document.open(),this.TRACEWIN.document.writeln("<b>INITIALIZE ClearView JS Trace</b><p>");else if("_EXIT"==e)this.TRACEWIN.document.writeln("<b>EXIT ClearView JS Trace</b>"),
this.TRACEWIN.document.close(),this.TRACEWIN.close();else if("_START"==e)this.TSBASE=this.TSSTART=new Date,
this.TRACEWIN.document.writeln("<b>Start Profiling at: "+this.TSSTART+"</b><br>");else if("_END"==e)this.TRACEWIN.document.writeln("<b>Finish Profiling - Total: "+(new Date-this.TSSTART)+" ms</b><p>");else if("_CLEAR"==e)this.TRACEWIN.document.clear();else{
var t=new Date;this.TRACEWIN.document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;"+e+": "+(t-this.TSBASE)+" ms<br>"),
this.TSBASE=new Date}}catch(i){}},createEvent:function(e){var t=new Object;return t.target=e,
t.clientX=0,t.clientY=0,t.stopPropagation=function(){},t.preventDefault=function(){},
t},convertStringtoDate:function(e){return new Date(Date.parse(e))},formatDateString:function(e){
var t=this.convertStringtoDate(e),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=i[t.getMonth()],o=t.getDate(),s=t.getFullYear(),a=t.toLocaleTimeString();
return 0==a.indexOf("0")&&(a=a.substring(1)),r+" "+o+", "+s+" "+a},goToURL:function(e){
try{var t=e.href.lastIndexOf("#");-1!=t&&(e.href=e.href.substring(0,t)),window.location=e;
}catch(i){if(!(has("ie")&&i.message.indexOf("Unspecified error")>-1))throw i}},selectByValue:function(e,t){
for(var i=0;i<e.length;i++)e.options[i].selected=e.options[i].value==t},addChartMenuItems:function(e){
var t=this,i=cv.api.ui._visualRegistry.getAllByCategory(),r=cv.vizApiVersion,o=[],s=0;
return i.forEach(function(i){var a=i.models;s>0&&a.length>0&&e.addChild(new MenuSeparator({
id:"menu-item100000"+s})),s++,a.forEach(function(i){var s=i.type,a=null!=s.v2Spec,n=s.application&&s.application.isStockVisualization,l=a&&2===r,d=!a&&r>=3,c=(a?s.v2Id:s.id)+"",h=s.label+"";
(l||d||!n)&&o.push(t._createChartMenuItem(e,c,h))})}),o},_createChartMenuItem:function(e,t,i){
var r={id:t,label:i,customType:!0},o=new MenuItem(r);return domClass.remove(o.iconNode,"dijitNoIcon"),
domClass.add(o.iconNode,"unchecked"),e.addChild(o),o},clearCache:function(e,t,i,r){
var o=this;request(cv.contextPath+"service/ajax/clearCache",{method:"POST",data:{
catalog:dom.byId("REPORT_catalog").value,time:(new Date).getTime()},sync:!0}).then(function(s){
"true"==s?(r||o.showStatus("infoCacheCleared","Info",e),t&&t()):(r||o.showStatus("errorClearCache","Error",e),
i&&i())},function(t){r||o.showStatus("errorClearCache","Error",e),i&&i()},function(e){});
},showStatus:function(e,t,i){var r=cvCatalog[e];r||(r=e),cv.isMobile()?i.rptDlg.showConfirm(r):console_enabled&&window.parent.mantle_showMessage?window.parent.mantle_showMessage(t,r):alert(r);
},isShowing:function(e){var t=dom.byId(e);return t?0==parseInt(t.style.width)||"none"==t.style.display||"none"==style.getComputedStyle(t).display?!1:!0:!1;
},_sendRequest:function(e,t){return request(e,t)},saveReport:function(e,t,i,r,o,s){
if(("undefined"==typeof s||null==s)&&(s=!1),e.modelAnnotations.length)return e.pendingSaveParams.reportAction=t,
e.pendingSaveParams.reportName=i,e.pendingSaveParams.reportPath=r,e.pendingSaveParams.reportErrorCallback=o,
e.pendingSaveParams.suppressSuccessNotification=s,cv.rptEditor.saveModifiedModel(),
!1;console.log("now saving report");var a=!0,n={action:t,name:_string.trim(i),path:r
};e.saveUIAttributes();var l=e.reportDoc.getUIAttributes();return l.setAttribute("showFieldList",this.isShowing("fieldListWrapper")?"true":"false"),
l.setAttribute("showFieldLayout",this.isShowing("layoutPanelWrapper")?"true":"false"),
l.setAttribute("showFilterPanel","filterPane"==e.topPaneId?"true":"false"),l.setAttribute("fieldListView",e.manager.fieldHelp.currentView),
n.reportXML=e.getReportXml(),n.time=(new Date).getTime(),this._sendRequest(cv.contextPath+"service/ajax/saveReport",{
data:n,sync:!0,headers:{"Content-Encoding":"utf8"},method:"POST"}).then(function(t){
t=cv.parseXML(t),cv.setDomDefaultNamespace(t);var i=t.documentElement;if("success"!=i.getAttribute("type"))a=!1,
"function"==typeof o?o():"object"==typeof o&&o.error();else{e.reportDoc.replaceStorageNode(i.selectSingleNode("cv:commonStorageAttributes"));
var r=e.reportDoc.getReportProperty("name");e.setReportName(r),document.title=r,e.setReportPropsDirty(!1),
e.history.setSaved(),console_enabled&&window.parent.mantle_showMessage||s||e.manager.showStatus("successSaveReport","Info"),
"object"==typeof o&&o.success()}},function(t){e.manager.showStatus("errorSaveReport","Error");
},function(e){}),a},updateCatalog:function(e,t,i,r){var o=cv.io.getFieldHelpXml(t.catalog,t.cube,r);
try{o=dojo.fromJson(o)}catch(s){o={status:"EXCEPTION"}}return"SUCCESS"!=o.status?(!e&&this.showStatus(o.message,"Error"),
void 0==o.message?"":o.message):void i.updateXml(o.fieldHelpXml)},onToggleAutoRefresh:function(e,t,i){
var r=!cv.prefs.autoRefresh;t.setAutoRefresh(r,i),r&&!t.history.isStateRefreshed()&&t.refreshReport(!0);
},findContainingGemBar:function(e,t){var i=e.api.ui.listGembarIds();for(idx in i){
var r=i[idx],o=e.api.report.getLayoutFields(r),s=array.indexOf(o,t);if(-1!=s)return r;
}return null}},cv.util.gravity.NORTH=1,cv.util.gravity.SOUTH=2,cv.util.gravity.EAST=4,
cv.util.gravity.WEST=8,declare("cv.Collapsible",null,{constructor:function(e,t,i,r,o){
this.header=e,this.body=t,this.cssOpen=r?r:"folderClose",this.cssClose=o?o:"folderOpen",
this.isOpen=1==i,this.setState(this.isOpen,!0),cv.util.disableTextSelection(e),on(e,"click",lang.hitch(this,"onClickHeader"));
},onClickHeader:function(e){this.animation&&"playing"==this.animation.status()||(this.isOpen=!this.isOpen,
this.setState(this.isOpen,!0)),e&&e.stopPropagation()},setState:function(e,t){e?(domClass.remove(this.header,this.cssOpen),
domClass.add(this.header,this.cssClose),t?(this.body.style.display="block",this.animation=null):this.animation=fx.wipeIn({
duration:cv.prefs.wipeTime,node:this.body}).play()):(domClass.remove(this.header,this.cssClose),
domClass.add(this.header,this.cssOpen),t?(this.body.style.display="none",this.animation=null):this.animation=fx.wipeOut({
duration:cv.prefs.wipeTime,node:this.body}).play())}}),declare("cv.dnd.Avatar",[Avatar],{
constructor:function(e,t){this.manager=e,this.node=t},update:function(){}}),declare("cv.dnd.Manager",[ManagerClass],{
opacity:.8,startDrag:function(e,t,i){t&&0!=t.length&&(cv.util.isHiddenField(t[0])||cv.getActiveReport().isResizing||cv.api.event.isEventDisabled("dragAndDrop")||cv.getActiveReport().isEditDisabled()||this.inherited(arguments));
},makeAvatar:function(){var node,formula=this.nodes[0].getAttribute("formula");if(formula){
node=document.createElement("DIV");var dragClass;if(domClass.contains(this.nodes[0],"filterItem")||domClass.contains(this.nodes[0],"filterGroup")){
if(dragClass="filterDragObject",0==this.nodes[0].id.indexOf("filter_metric"))node.innerHTML=cvCatalog.filterMetric;else{
var spans=this.nodes[0].getElementsByTagName("span");node.innerHTML=cv.textContent(spans[0]);
}node.setAttribute("formula",this.nodes[0].id)}else dragClass=cv.getFieldHelp().isAttribute(formula)?"attributeDragObject":"metricDragObject",
node.innerHTML=cv.util.escapeHtml(cv.textContent(this.nodes[0])),node.setAttribute("formula",formula);
domClass.add(node,"commonDragObject"),dragClass&&domClass.add(node,dragClass),this.opacity<1&&style.set(node,"opacity",this.opacity);
}else if("DB"==this.type){node=document.createElement("DIV");var box=geometry.position(this.nodes[0]);
with(node.style)border="2px dashed black",height=box.h+"px",width=box.w+"px",backgroundColor="silver";
this.opacity<1&&style.set(node,"opacity",this.opacity)}else{node=this.nodes[0].cloneNode(!0),
this.dragClass&&domClass.add(node,this.dragClass),this.opacity<1&&style.set(node,"opacity",this.opacity);
var ltn=node.tagName.toLowerCase(),isTr="tr"==ltn;if(isTr||"tbody"==ltn){var doc=this.nodes[0].ownerDocument,table=doc.createElement("table");
if(isTr){var tbody=doc.createElement("tbody");table.appendChild(tbody),tbody.appendChild(node);
}else table.appendChild(node);for(var tmpDstTr=(isTr?this.nodes[0]:this.nodes[0].firstChild,
isTr?node:node.firstChild),domTds=tdp.childNodes,cloneTds=tmpDstTr.childNodes,i=0;i<domTds.length;i++)cloneTds[i]&&cloneTds[i].style&&(cloneTds[i].style.width=geometry.getContentBox(domTds[i]).w+"px");
node=table}}if(has("ie")<7&&this.createIframe){with(node.style)top="0px",left="0px";
var outer=document.createElement("div");outer.appendChild(node),this.bgIframe=new BackgroundIframe(outer),
outer.appendChild(this.bgIframe.iframe),node=outer}return node.style.zIndex=999,node.style.position="absolute",
new cv.dnd.Avatar(dnd._manager,node)}}),dnd._manager=new cv.dnd.Manager,lang.extend(MenuItem,{
onClick:function(){popup.close()}}),lang.extend(_TabContainerBase,{_setupChild:function(e){
this.inherited("_setupChild",arguments)}})}),define("analyzer/cv_history",["dojo/_base/declare","dijit/_Widget","dijit/_Templated","dojo/on","dojo/query","dojox/collections/Stack","dojo/_base/lang","dojo/aspect","dojo/sniff","analyzer/cv_base","analyzer/cv_util"],function(e,t,i,r,o,s,a,n,l){
return e("cv.History",null,{constructor:function(e,t,i){this.owner=e,this.undoStack=new s,
this.redoStack=new s,this.savedState=null,this.originalState=null,this.refreshedState=new Array,
t&&i&&(n.after(this,"add",a.hitch(t,i)),n.after(this,"undo",a.hitch(t,i)),n.after(this,"redo",a.hitch(t,i)),
n.after(this,"rewindTo",a.hitch(t,i)),n.after(this,"forwardTo",a.hitch(t,i)),n.after(this,"setTo",a.hitch(t,i)),
n.after(this,"setSaved",a.hitch(t,i)),n.after(this,"setRefreshed",a.hitch(t,i)))},
add:function(e){this.endCurrent(),e.init(this.owner),this.originalState||0!=this.undoStack.count||(this.originalState=e),
this.undoStack.push(e),this.redoStack.clear();var t=cv.api.event._emitActionEvent(e);
t||this.undo()},current:function(){return this.undoStack.peek()},next:function(){
return this.redoStack.peek()},undo:function(){if(this.hasUndo()){this.current().setPluginDataJSON(cv.getActiveReport().getPluginDataJSON());
var e=this.undoStack.pop();e&&(this.redoStack.push(e),(this.owner.mode&&"VIEW"==this.owner.mode||this.owner.manager.cmdUndo.title.indexOf("Column Resize")<0)&&(e=this.current()),
e.back())}},redo:function(){if(this.hasRedo()){this.current().setPluginDataJSON(cv.getActiveReport().getPluginDataJSON());
var e=this.redoStack.pop();e&&(this.undoStack.push(e),e.forward())}},rewindTo:function(e,t){
for(;this.hasUndo()&&(e!=this.current()||null==e);)this.redoStack.push(this.undoStack.pop());
return this.hasUndo()?(t&&this.current().back(),this.current()):null},forwardTo:function(e,t){
for(;this.hasRedo()&&e!=this.next();)this.undoStack.push(this.redoStack.pop());return this.hasRedo()?(this.undoStack.push(this.redoStack.pop()),
t&&this.current().forward(),this.current()):null},setTo:function(e){if(!e)return!1;
if(this.undoStack.contains(e))for(;e!=this.current();)this.redoStack.push(this.undoStack.pop());else{
if(!this.redoStack.contains(e))return!1;for(;e!=this.next();)this.undoStack.push(this.redoStack.pop());
this.undoStack.push(this.redoStack.pop())}return!0},hasUndo:function(){return this.undoStack.count>1;
},hasRedo:function(){return this.redoStack.count>0},setSaved:function(){this.savedState=this.current();
},getSaved:function(){return this.savedState},setRefreshed:function(e){e||(this.refreshedState=new Array),
this.refreshedState[this.refreshedState.length]=this.current()},isStateDirty:function(){
return this.savedState!=this.current()},isStateRefreshed:function(){for(var e=0;e<this.refreshedState.length;e++)if(this.refreshedState[e]==this.current())return!0;
return!1},isEmpty:function(){return this.undoStack.count<=1&&this.redoStack.count<=0;
},endCurrent:function(){var e=this.current();e&&e.end()},updateReportUsingPreviousChartTypeState:function(e,t){
this.endCurrent();for(var i,r=this.undoStack.toArray(),o=r.length-1;o>=0;o--)if(r[o].customChartType==t&&"JSON"==r[o].reportTypeEnum){
i=r[o];break}if(i){e.savePluginDataToXML(i.pluginDataJSON);var s,a=cv.parseXML(i.reportXml).documentElement,n={};
if(!dojo.isIE){var d=navigator.userAgent.toLowerCase(),c=/(msie\s|trident.*rv:)([\w.]+)/,h=c.exec(d);
h?dojo.isIE=h[2]-0:dojo.isIE=void 0}s=l("ie")||"11"==dojo.isIE?a.selectNodes("//columnAttributes//attribute | //rowAttributes//attribute"):a.selectNodes("cv:columnAttributes/cv:attribute | cv:rowAttributes/cv:attribute");
for(var u=0;u<s.length;u++)s[u].getAttribute("gembarId")&&(n[s[u].getAttribute("formula")]=[s[u].getAttribute("gembarId"),s[u].getAttribute("gembarOrdinal")]);
s=l("ie")||"11"==dojo.isIE?a.selectNodes("//measures//measure"):a.selectNodes("cv:measures/cv:measure");
for(var u=0;u<s.length;u++)s[u].getAttribute("gembarId")&&(n[s[u].getAttribute("id")]=[s[u].getAttribute("gembarId"),s[u].getAttribute("gembarOrdinal")]);
s=e.reportDoc.getChildMembers("rowAttributes","columnAttributes");for(var u=0;u<s.length;u++){
var p=n[s[u].getAttribute("formula")];p?(s[u].setAttribute("gembarId",p[0]),s[u].setAttribute("gembarOrdinal",p[1])):(s[u].removeAttribute("gembarId"),
s[u].removeAttribute("gembarOrdinal"))}s=e.reportDoc.getChildMembers(["measures"]);
for(var u=0;u<s.length;u++)if("true"!=s[u].getAttribute("hideInChart")){var p=n[s[u].getAttribute("id")];
p?(s[u].setAttribute("gembarId",p[0]),s[u].setAttribute("gembarOrdinal",p[1])):(s[u].removeAttribute("gembarId"),
s[u].removeAttribute("gembarOrdinal"))}e.reportDoc.setReportOption("reportTypeEnum",i.reportTypeEnum),
e.reportDoc.setChartOption("chartType",i.chartType),e.reportDoc.setChartOption("customChartType",i.customChartType),
e._clearClientViz()}}})}),define("analyzer/cv_browser",["dojo/_base/declare","dojo/on","dojo/query","dojo/html","dojox/xml/parser","analyzer/cv_base","analyzer/cv_util","analyzer/cv_history","dojo/has","dojo/sniff","dojo/_base/lang","dojo/dnd/Manager"],function(declare,on,query,html,parser,cv_base,cv_util,cv_history,has,sniff,lang,ManagerClass){
function fireMouseEvent(e,t,i,r){var o=t.changedTouches,s=o[0].clientX,a=o[0].clientY,n=document.createEvent("MouseEvent");
n.initMouseEvent(e,!0,!0,window,1,s,a,s,a,!1,!1,!1,!1,0,"undefined"!=typeof r?r:null),
i.dispatchEvent(n)}if(cv.setDomDefaultNamespace=function(e){"setProperty"in e&&e.setProperty("SelectionNamespaces","xmlns:cv='"+cv.defaultNS+"'");
},cv.parseXML=function(e){if(has("ie")||has("trident")){var t=new ActiveXObject("Microsoft.XMLDOM");
return t.async=!1,t.loadXML(e),t}return parser.parse(e)},has("ie")?(Array.prototype.indexOf||(Array.prototype.indexOf=function(e){
"use strict";if(void 0===this||null===this)throw new TypeError;var t=Object(this),i=t.length>>>0;
if(0===i)return-1;var r=0;if(arguments.length>0&&(r=Number(arguments[1]),r!==r?r=0:0!==r&&r!==1/0&&r!==-(1/0)&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),
r>=i)return-1;for(var o=r>=0?r:Math.max(i-Math.abs(r),0);i>o;o++)if(o in t&&t[o]===e)return o;
return-1}),cv.textContent=function(e,t){return void 0==t?parser.textContent(e):1!=e.nodeType?parser.textContent(e,t):void(e.text=t);
},cv.createNode=function(e,t,i){return e.createNode(1,t,i?i:cv.defaultNS)},cv.addOption=function(e,t){
e.add(t)},dojo.html.BackgroundIframe=function(e){var t="<iframe src=\"javascript:'<html><head></head><body></body></html>'\" style='position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;z-index: -1; filter:Alpha(Opacity=\"0\");'>";
this.iframe=dojo.doc().createElement(t),this.iframe.tabIndex=-1,e?(e.appendChild(this.iframe),
this.domNode=e):(dojo.body().appendChild(this.iframe),this.iframe.style.display="none");
},lang.extend(dojo.html.BackgroundIframe,{iframe:null,onResized:function(){if(this.iframe&&this.domNode&&this.domNode.parentNode){
var e=dojo.marginBox(this.domNode);if(0==e.w||0==e.h)return void setTimeout(lang.hitch(this,this.onResized),100);
this.iframe.style.width=e.width+"px",this.iframe.style.height=e.height+"px"}},size:function(node){
if(this.iframe){var coords=geometry.position(node,!0);with(this.iframe.style)width=coords.w+"px",
height=coords.h+"px",left=coords.l+"px",top=coords.t+"px"}},setZIndex:function(e){
this.iframe&&(dojo.dom.isNode(e)?this.iframe.style.zIndex=dojo.style(e,"z-index")-1:isNaN(e)||(this.iframe.style.zIndex=e));
},show:function(){this.iframe&&(this.iframe.style.display="block")},hide:function(){
this.iframe&&(this.iframe.style.display="none")},remove:function(){this.iframe&&(this.iframe.parentNode.removeChild(this.iframe),
delete this.iframe,this.iframe=null)}}),cv.contentMinWidth=750,cv.setMinWidth=function(){
var e=dojo.window.getBox().w;e<=cv.contentMinWidth?(document.body.style.width=cv.contentMinWidth+"px",
this.xScrolling=!0):(document.body.style.width=e+"px",this.xScrolling=!1)}):(Element.prototype.selectNodes=function(e){
var t=this.ownerDocument.evaluate(e,this,cv.nsResolver,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),i=[];
if(t)for(var r=t.iterateNext();r;)i.push(r),r=t.iterateNext();return i},Element.prototype.selectSingleNode=function(e){
var t=this.ownerDocument.evaluate(e,this,cv.nsResolver,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
return t?t.singleNodeValue:null},cv.textContent=function(e,t){return void 0==t?parser.textContent(e):parser.textContent(e,t);
},cv.createNode=function(e,t,i){return e.createElementNS?e.createElementNS(i?i:cv.defaultNS,t):e.createNode(1,t,i?i:cv.defaultNS);
},cv.addOption=function(e,t){e.appendChild(t)}),cv.isMobile=function(){return cv.isMobileSafari()||void 0!==window.orientation;
},cv.isMobileSafari=function(){return null!=navigator.userAgent.match(/(iPad|iPod|iPhone)/);
},cv.isMobile()){var checkEventProximity=function(){var e=Math.abs(window.lastMoveEvent.changedTouches[0].screenX-window.touchstartX)<10&&Math.abs(window.lastMoveEvent.changedTouches[0].screenY-window.touchstartY)<10;
return e};window.touchstartTime=0,window.lastTouchstartTime=0,window.hasMoved=!1;var touchHandler=function(e){
try{if(e.touches.length>1||e.changedTouches.length>1)return void(window.contextMenuInPlay=!1);
var t=ManagerClass.manager(),i=e.changedTouches[0].target;if("INPUT"==i.nodeName||"BUTTON"==i.nodeName||"TEXTAREA"==i.nodeName)return;
var r=e.changedTouches,o=r[0].screenX,s=r[0].screenY;switch(e.type){case"touchstart":
if((new Date).getTime()-window.lastTouchstartTime<350)return fireMouseEvent("dblclick",e,i),
e.preventDefault(),void(window.hasMoved=!0);window.contextMenuInPlay=!0,window.touchstartTime=(new Date).getTime(),
window.touchstartX=e.changedTouches[0].screenX,window.touchstartY=e.changedTouches[0].screenY,
window.lastMoveEvent=e,window.lastTouchstartTime=window.touchstartTime,window.lastOver=i,
fireMouseEvent("mouseover",e,i),fireMouseEvent("mousedown",e,i),e.preventDefault();
break;case"touchmove":window.hasMoved=!0,window.lastMoveEvent=e,(t.source||1==e.touches.length)&&e.preventDefault(),
i=document.elementFromPoint(o-cv.getOriginAdjustment().x,s-cv.getOriginAdjustment().y),
fireMouseEvent("mousemove",e,i),window.lastOver&&i!=window.lastOver&&fireMouseEvent("mouseout",e,window.lastOver,i),
fireMouseEvent("mouseover",e,i,window.lastOver),window.lastOver=i;break;case"touchend":
if(e.touches>0||!window.contextMenuInPlay)return;if(window.lastWasMultiTouch)return;
(!window.hasMoved||checkEventProximity())&&(new Date).getTime()-window.touchstartTime>200?(fireMouseEvent("contextmenu",e,i),
e.preventDefault()):(computedTarget=document.elementFromPoint(o-cv.getOriginAdjustment().x,s-cv.getOriginAdjustment().y),
fireMouseEvent("mouseup",e,computedTarget),fireMouseEvent("click",e,computedTarget),
i!=computedTarget&&(fireMouseEvent("mouseup",e,i),fireMouseEvent("click",e,i))),window.lastOver&&fireMouseEvent("mouseout",e,window.lastOver,i),
window.hasMoved=!1,window.lastMoveEvent=null;break;default:return}}catch(a){console.log("error in touch handler: "+a);
}};document.addEventListener("touchstart",touchHandler,!0),document.addEventListener("touchmove",touchHandler,!0),
document.addEventListener("touchend",touchHandler,!0),cv.getOriginAdjustment=function(){
var e;return window.addEventListener("orientationchange",function(){e=null}),function(){
return window.inMobile?e?e:e=getMyOriginOffset():{x:0,y:0}}}()}}),define("analyzer/cv_dlg",["dojo/_base/declare","dojo/on","dojo/query","dijit/Dialog","dojox/fx","dojo/html","dojo/dom","dojo/_base/lang","dojo/dom-class","dojo/dom-attr","dojo/request","dijit/registry","dojo/dom-geometry","dojo/dom-style","analyzer/cv_base","analyzer/cv_util","analyzer/cv_history","analyzer/cv_browser"],function(declare,on,query,Dialog,fx,html,dom,lang,domClass,domAttr,request,registry,geometry,style){
cv.Dialog=function(){this.theForm=null,this.type=null,this.dlgTemplate=null,this.prefix=null,
this.cache={},this.status=null,this.helpTopic=null,this.defaultMsg=null,this.lastSaveTime=null,
this.isShowing=!1,this.defaultFocus=null,this._parentReport=null},cv.Dialog.prototype={
show:null,save:null,prev:null,cancel:function(){cv.dlgWidget.hide(),null!=this._parentReport&&this._parentReport.refreshReport();
},next:function(){this.save()},onSave:function(){this.lastSaveTime&&new Date-this.lastSaveTime<1e3||(this.save(),
this.lastSaveTime=new Date)},showError:function(e,t,i){if(this.msgClass="error",this._showAlert(e,t),
i){var r=dom.byId("dlgTitle");r.innerText=i}},showWarning:function(e,t,i,r,o,s,a){
this.msgClass="warn",this._parentReport=s,this._showAlert(e,t,i,r,o,a)},showConfirm:function(e,t,i,r,o){
this.msgClass="info",this._showAlert(e,t,i,r,o)},_showAlert:function(e,t,i,r,o,s){
this.type="alertDlg",this.dlgTemplate="alertDlg.html";var a="<span class='alertMsgIcon "+this.msgClass+"'></span><div class='alertMsgText'>";
if("string"==typeof e)a+=cvCatalog[e]?cvCatalog[e]:e;else{if(!dojo.isArray(e))return;
e[0]=cvCatalog[e[0]],a+=cv.util.substituteParams.apply(this,e)}if(a+="</div>",this.load(a)){
if(t){var n=dom.byId("dlgHelp");n&&(n.className="titleBarButton",cv.util.setHelpTopics(["dlgHelp",t]));
}var l=dom.byId("alertDlgSuppressMsg");o?(cv.util.show(l.parentNode),l.onchange=function(){
cv.prefs.suppressMsg[o]=l.checked}):cv.util.hide(l.parentNode);var d=dom.byId("alertDlgOptionMsg");
s?(dom.byId("alertDlgOptionText").innerHTML=cvCatalog[s],cv.util.show(d.parentNode)):cv.util.hide(d.parentNode);
var c=dom.byId("dlgBtnCancel");if(i){var h=dom.byId("dlgBtnSave");on(h,"click",lang.hitch(cv.dlgWidget,"hide")),
i.srcObj?on(h,"click",lang.hitch(i.srcObj,i.srcFunc)):on(h,"click",i.srcFunc),"onSaveReport"==i.srcFunc&&(dom.byId("dlgBtnSave").innerHTML=cvCatalog.btnLabelSave),
cv.util.show(h),dom.byId("dlgBtnCancel").innerHTML=cvCatalog.btnLabelCancel}r&&(r.srcObj?on(c,"click",lang.hitch(r.srcObj,r.srcFunc)):on(c,"click",r.srcFunc)),
this.showDialog()}},showDialog:function(){if(cv.dlgWidget.animationInProgress&&cv.dlgWidget.isShowing())setTimeout(lang.hitch(this,"showDialog"),250);else{
if(cv.dlgWidget.show(),dom.byId("borderContainer")){var e=geometry.position(dom.byId("borderContainer"),!0),t=geometry.position(cv.dlgWidget.domNode);
style.set(cv.dlgWidget.domNode,"top",Math.floor((e.h-t.h)/2)+"px")}this.isShowing=!0;
}},displayMsg:function(){if(this.msgBar){var e=this.defaultMsg;1==arguments.length?e=arguments[0]:arguments.length>1&&(e=cv.util.substituteParams.apply(this,arguments)),
this.msgBar.innerHTML=e?e:"",e&&(cv.util.show(this.msgBar),fx.fadeIn({duration:cv.prefs.fadeTime,
node:this.msgBar}).play())}},displayError:function(){this.displayMsg.apply(this,0==arguments[0].indexOf("<span")?arguments:["<span class='dlgError'>"+arguments[0]+"</span>"].concat(Array.prototype.slice.call(arguments,1)));
},displayInfo:function(){this.displayMsg.apply(this,0==arguments[0].indexOf("<span")?arguments:["<span class='dlgInfo'>"+arguments[0]+"</span>"].concat(Array.prototype.slice.call(arguments,1)));
},clearMsg:function(){this.msgBar&&cv.util.hide(this.msgBar)},byId:function(e){return"string"==typeof e?dom.byId(this.prefix+e):dom.byId(e);
},load:function(){if(this.status=null,!this.cache[this.type]){var e=this;request(cv.contextPath+"service/templates/"+this.dlgTemplate,{
method:"POST",handleAs:"text",sync:!0}).then(function(t){return cv.util.parseAjaxMsg(t)?void(this.status="errorDlgLoad"):void(e.cache[e.type]=t);
},function(t){e.status="errorDlgLoad"},function(e){})}if(null!=this.status)return!1;
var t=this.load.arguments.length>0?cv.util.substituteParams(this.cache[this.type],this.load.arguments):this.cache[this.type];
void 0==cv.dlgWidget&&(cv.dlgWidget=cv.util.getDojoWidget("theDialog")),cv.dlgWidget.setContent('<form id="theDialogForm" action="" onsubmit="return false">'+t+"</form>"),
this.defaultMsg=null,this.theForm=dom.byId("theDialogForm"),this.titleBar=cv.dlgWidget.titleBar,
this.msgBar=dom.byId("dialogMessageBar"),this.msgBar&&cv.util.hide(this.msgBar),on(this.titleBar,"mousedown",lang.hitch(this,"onDragStart")),
on(document,"mouseup",lang.hitch(this,"onDragEnd"));var i=dom.byId("dlgBtnSave");i&&"alertDlg"!=this.type&&on(i,"click",lang.hitch(this,"onSave"));
var i=dom.byId("dlgBtnNext");return i&&on(i,"click",lang.hitch(this,"next")),i=dom.byId("dlgHelp"),
i&&(this.helpTopic?(on(i,"click",lang.hitch(this,"showHelpWnd")),i.title=cvCatalog.btnTitleHelp):cv.util.hide(i)),
on(dom.byId("dlgBtnCancel"),"click",lang.hitch(this,"cancel")),on(dom.byId("dialogTitleBar"),"mousedown",lang.hitch(this,"onDragStart")),
!0},updateHtml:function(e,t){var i=this.byId(e);if(!i&&(i=this.theForm[this.prefix+e],
i&&i.length>0&&"radio"==i[0].type))for(var r=0;r<i.length;++r)i[r].value==t&&(i[r].checked=!0);else i&&("INPUT"==i.tagName||"SELECT"==i.tagName?"checkbox"==i.type?i.checked="true"==t?!0:!1:i.value=t:i.innerHTML=t);
},updateXml:function(e,t){if(e){var i=this._attributeName(t.id);i&&e.setAttribute(i,this._getSrcValue(t));
}},_attributeName:function(e){return e.substr(e.indexOf(this.prefix)+this.prefix.length);
},_getSrcValue:function(e){switch(e.type){case"checkbox":return e.checked?"true":"false";
default:return e.value}},getRadioGroupValue:function(e){for(var t=this.theForm[e],i=0;i<t.length;++i)if(t[i].checked)return t[i].value;
},showHelpWnd:function(e){e.target&&cv.util.getHelp("dlgHelp"==e.target.id?this.helpTopic:e);
},onDragStart:function(e){var t=cv.dlgWidget.domNode;this.currentPos=geometry.position(t),
this.cursorPos={x:e.pageX,y:e.pageY},this.mouseMoveHandle=on(document,"mousemove",lang.hitch(this,"onDragMove"));
},onDragEnd:function(e){this.mouseMoveHandle&&this.mouseMoveHandle.remove()},onDragMove:function(e){
var x=this.currentPos.x+e.pageX-this.cursorPos.x,y=this.currentPos.y+e.pageY-this.cursorPos.y,viewport=dojo.window.getBox();
with(x<viewport.w-100&&x>20&&(this.currentPos.x=x,this.cursorPos.x=e.pageX),y<viewport.h-100&&y>20&&(this.currentPos.y=y,
this.cursorPos.y=e.pageY),cv.dlgWidget.domNode.style)left=this.currentPos.x+"px",
top=this.currentPos.y+"px"},setInvalidInputField:function(e){this.invalidInputField&&domClass.remove(this.invalidInputField,"invalid"),
this.invalidInputField=e?dom.byId(e):null,this.invalidInputField&&domClass.add(this.invalidInputField,"invalid");
},trackFormChange:function(){var e=dom.byId("dlgBtnSave");e.disabled=!0;for(var t=this.report.rptDlg.theForm.elements,i=0;i<t.length;i++){
var r=t[i];if("false"!=domAttr.get(r,"track-form-change")&&"dlgBtnCancel"!=r.id){
var o="change",s=r.getAttribute("type");"text"==s||"TEXTAREA"==r.tagName?o="keyup":("button"==s||"BUTTON"==r.tagName)&&(o="click"),
on(r,o,this.enableOkButton)}}var a=query(".dijitComboBox",this.theForm),n=this.enableOkButton;
a.forEach(function(e){var t=registry.byNode(e);if(t){var i=t.get("value");t.on("change",function(e){
e!=i&&n(e)})}})},enableOkButton:function(e){var t=dom.byId("dlgBtnSave");t.disabled=!1;
},setTextAndTitle:function(e,t){this.byId(e).innerText=t,this.byId(e).title=t}},declare("cv.Dialog",cv.Dialog);
}),define("analyzer/TabPanel",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojo/dom-class","dijit/layout/TabContainer"],function(e,t,i,r,o,s){
return e("analyzer.TabPanel",[s],{_transition:function(e,t){o.add(e.controlButton.domNode,"pentaho-tabWidget-selected"),
o.remove(t.controlButton.domNode,"pentaho-tabWidget-selected"),this.inherited(arguments);
},startup:function(){this._started||(this.inherited(arguments),o.add(this.selectedChildWidget.controlButton.domNode,"pentaho-tabWidget-selected"));
}})}),define("analyzer/cv_tooltip",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dijit/Tooltip","dojo/dom-class","dijit/place","dojo/_base/array","dojo/topic","dojo/dom-style","dojo/html","dojo/dom","dojo/dnd/Manager","dojo/dom-geometry"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p){
var m=u.manager(),g=e("clearview.widget.CVTooltip",[o],{handles:[],addConnectNode:function(e,i){
t(e,"mousemove",r.hitch(this,"mouseMove")),this.addTarget(e)},startup:function(){
s.add(this.domNode,"cvTooltip"),l.subscribe("/dnd/start",r.hitch(this,"close"))},
mouseMove:function(e){this._mouse={x:e.pageX,y:e.pageY};var t=e.target;this._connectNode=t,
cv.formatTooltip?(cv.formatTooltip(this.domNode,t),this.cancelShowing=!1):this.domNode.innerHTML="Tooltip has not been initialized for this element",
"none"!=this.domNode.style.display&&this._connectNode!=this._lastTarget&&(this.close(),
this._onHover(e)),this._lastTarget=e.target},close:function(){this.inherited(arguments),
this.domNode.style.display="none"},uninitialize:function(){this.close()},_onUnHover:function(e){
return cv.util.overElement(this.domNode,e)?void(this.outHandle=t(this.domNode,"mouseout",r.hitch(this,"closeDelayedTip"))):(this.close(),
void(this.domNode.style.display="none"))},closeDelayedTip:function(e){pos=p.position(this.domNode,!0);
var t=e.pageX,i=e.pageY;(t>=pos.x+pos.w||t<=pos.x||i>=pos.y+pos.h||i<=pos.y)&&(this._onUnHover(e),
this.outHandle.remove())},open:function(e){if(!m.source){var t=this._mouse.x+15,i=this._mouse.y-10;
this.domNode.style.display="",a.at(this.domNode,{x:t,y:i},["TL","TR","BL","BR"],{
x:10,y:5})}}});return e("clearview.widget.CVTooltipRefresh",[o],{open:function(e){
this._showTimer&&(this._showTimer.remove(),delete this._showTimer),d.set(this.domNode,"display","block"),
this._connectNode=e,a.around(this.domNode,e,["below"],!0)},close:function(){this._connectNode&&(d.set(this.domNode,"display","none"),
delete this._connectNode),this._showTimer&&(this._showTimer.remove(),delete this._showTimer);
}}),g}),define("analyzer/common",["analyzer/cv_api","analyzer/cv_base","analyzer/cv_util","analyzer/cv_history","analyzer/cv_browser","analyzer/cv_dlg","analyzer/TabPanel","analyzer/cv_tooltip","dijit/layout/BorderContainer","dijit/layout/ContentPane","pentaho/common/Overrides"],function(){}),
define("analyzer/report/cv_rptConst",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","analyzer/common"],function(e,t,i,r){
var o=cvConst.dndTypes;return r.mixin(cvConst,{MAX_FILTER_EXPRESSIONS:10,dndAcceptedTypes:{
report:[o.gemFromFieldList,o.gemFromLayoutPanel,o.gemFromReportArea],trashcan:[o.gemFromLayoutPanel,o.gemFromReportArea]
},TYPE_ATTRIBUTE:0,TYPE_METRIC:1,TYPE_FILTER:4,defaultGemTypes:{rowAttributes:0,columnAttributes:0,
measures:1,filters:4},defaultFormatExp:"Case\nWhen [Measures].CurrentMember > 0\nThen '|#,##0|arrow=up'\nWhen [Measures].CurrentMember < 0\nThen '|#,##0|arrow=down'\nElse '|#,##0'\nEnd"
}),r.mixin(cv.prefs,{chartOption:"VERTICAL_BAR",autoRefresh:!0,manyReportItems:8e3,
maxReportItems:15e3,maxFilterValues:3e3,numProgressImg:1,fieldListView:"CMDVIEWCATEGORY"
}),cv.pentahoVisualizations=[],cv.pentahoVisualizationHelpers={},r.mixin(cvCatalog,{
emptyReportAreaHTML:"<div class='reportEmpty'>%{3}<br><br><div class='viz-image %{2}'><img src='%{4}'></div><br>%{1}<br><div style='padding-top: 5px; font-size: 0.7em;'>"+cvCatalog.emptyVizHelp+"</div><div class='button-panel contrast-background pentaho-bottom-bar contrast-color' id='help-footer' style='font-size: .7em; left: 0px; position: absolute; bottom: 0px; width: 100%;'><div style='float: right; padding: 6px 10px;'>"+cvCatalog.reportHelpGettingStarted+"<button id='%{0}GettingStarted' class='pentaho-button' style='margin-left: 10px;'>"+cvCatalog.btnReportHelp+"</button></div></div></div>",
filterTemplateSingleLine:"<div formula='%{0}' id='%{1}' class='filterItem'><div class='filterIndent'><i class='filterAction pentaho-deletebutton' id='remove_%{1}' title='"+cvCatalog.ttRemoveFilder+"' onclick='cv.getActiveReport().removeFilter(\"%{1}\")'></i><i class='filterAction EDIT_Only pentaho-editbutton' id='edit_%{1}' title='"+cvCatalog.ttEditFilder+"' onclick='cv.getActiveReport().filterDlg.show(\"%{1}\")'></i>&nbsp;</div><span><b>%{2}</b>&nbsp;%{3}</span><i class='lockImg' title='"+cvCatalog.ttFilterLocked+"'></i></div>",
filterTemplateMultiLine:"<div class='filterItem filterLine'><div class='filterIndent'>&nbsp;</div><span><b>%{0}</b> is restricted as following:</span><i class='lockImg' title='"+cvCatalog.ttFilterLocked+"'></i></div>",
filterTemplateAttr:"<div formula='%{0}' id='%{1}' class='filterItem'><div class='filterIndent2'><i class='filterAction pentaho-deletebutton' id='remove_%{1}' title='"+cvCatalog.ttRemoveFilder+"' onclick='cv.getActiveReport().removeFilter(\"%{1}\")'></i><i class='filterAction EDIT_Only pentaho-editbutton' id='edit_%{1}' title='"+cvCatalog.ttEditFilder+"' onclick='cv.getActiveReport().filterDlg.show(\"%{1}\")'></i>&nbsp;</div><span>%{2}</span></div>",
filterTemplateSelection:"<div class='filterGroup' id='filter_selection'><div id='filter_selection_1' class='filterItem'><div class='filterIndent'><i class='filterAction pentaho-deletebutton' title='"+cvCatalog.ttRemoveFilder+"' onclick='cv.getActiveReport().removeSelectionFilters()'></i>&nbsp;</div><span>"+cvCatalog.filterSummarySelectionItems+" (<a onclick=\"cv.getActiveReport().filterDlg.showSelectionFilter('INCLUDE')\">"+cvCatalog.btnSelectionKeepOnly+"</a> | <a onclick=\"cv.getActiveReport().filterDlg.showSelectionFilter('EXCLUDE')\">"+cvCatalog.btnSelectionExclude+"</a>)</span></div></div>",
filterTemplateMetric:"<div formula='%{0}' id='filter_metric_0' class='filterItem'><div class='filterIndent'><i class='pentaho-deletebutton' id='remove_filter_metric' title='"+cvCatalog.ttRemoveFilder+"' onclick='cv.getActiveReport().removeCurrentGem()'></i><i class='EDIT_Only pentaho-editbutton' id='edit_filter_metric' title='"+cvCatalog.ttEditFilder+"' onclick='cv.getActiveReport().filterDlg.showMetricFilter()'></i>&nbsp;</div><div style='float:left;'>%{1}</div></div>",
filterConditionEdit:"<table><tr><td width=10></td><td width=210><select id='FT_condMetric' style='width:98%;' size=1></select></td><td width=160><select id='FT_condOp' size=1><option value='GREATER_THAN' selected>%{GT}</option><option value='LESS_THAN'>%{LT}</option><option value='GREATER_THAN_EQUAL'>%{GTE}</option><option value='LESS_THAN_EQUAL'>%{LTE}</option><option value='EQUAL'>%{E}</option><option value='NOT_EQUAL'>%{NE}</option><option value='BETWEEN'>%{B}</option><option value='IS_NOT_EMPTY'>%{NN}</option></select></td><td width=105><input id='FT_condOp1' style='width:95px' type='text' class='inputNum'><span> and <input id='FT_condOp2' style='width:95px' type='text' class='inputNum'></span></td><td width=16 class='filterConditionDelete' id='FT_remove_{%id}' title='"+cvCatalog.ttDeleteCondition+"'></td><td width=16></td></tr></table>",
filterConditionStatic:"<table><tr><td width=10></td><td width=210>%{metric}</td><td width=160>%{op}</td><td width=105><span>%{op1}</span><span class='%{op2Css}'> and <span>%{op2}</span></span></td><td width=16 class='filterConditionDelete' id='FT_remove_{%id}' title='"+cvCatalog.ttDeleteCondition+"'></td><td width=16></td></tr></table>",
reportNoDataMsgHTML:"<div class='noData'><span class='noDataHeader'>%{0}</span><span class='noDataHint'>"+cv.util.substituteParams(cvCatalog.filterNoData,{
FIELDS:cv.util.substituteParams("<a class='appCmdLink' onclick='return cv.getActiveReport().manager.onToggleReportPane(\"cmdLayout\");'>%{0}</a>",cvCatalog["filterNoData.Fields"]),
FILTERS:cv.util.substituteParams("<a class='appCmdLink' onclick='return cv.getActiveReport().manager.onToggleReportPane(\"cmdFilters\");'>%{0}</a>",cvCatalog["filterNoData.Filters"]),
VIEW_HELP:cv.util.substituteParams("<a class='appCmdLink helpLinkReportNoData'>%{0}</a>",cvCatalog["filterNoData.ViewHelp"]),
UNDO:cv.util.substituteParams("<a class='appCmdLink' href='#' onclick='cv.getActiveReport().history.undo();return false;'>%{0}</a>",cvCatalog["filterNoData.Undo"])
})+"</span></div>",transformationReportNoDataMsgHTML:"<div class='noData'><span class='noDataHeader'>%{0}</span><span class='noDataHint'>"+cvCatalog.transformationReportFieldsNoData+"</span></div>",
reportSuccessMsgHTML:"<div class='noData'><span class='noDataHeader'>%{0}</span></div>",
reportSuccessMsgChartHTML:"<div class='noData'><i class='icon-report-abstract'></i><br><div class='noDataHeader'>%{0}</div></div>",
refreshPanelCancel:"<div class='refreshPaneCanceledMode'>%{0}</div>",refreshPanelComplete:"<div class='refreshPaneComplete'>&nbsp;&nbsp;%{0}&nbsp;</div>"
}),e([])}),define("analyzer/report/cv_rptIO",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/xml/parser","analyzer/report/cv_rptConst","dojo/request","dojo/html","dojo/dom"],function(e,t,i,r,o,s,a,n,l){
cv.io={maxConnectionTries:3,initAsyncRequestCount:0,ajaxLoad:function(e,t,i,r){var o=null;
return t.time=(new Date).getTime(),a(cv.contextPath+e,{data:t,sync:i,headers:{"Content-Encoding":"utf8"
},method:"POST"}).then(function(e){i?o=e:i||r&&r(e)},function(e){},function(e){}),
i?o:void 0},initAsyncRequest:function(e,t){return null==e.prevId&&(e.prevId=""),this.ajaxLoad("service/ajax/initRequest",e,!1,t);
},cancelAsyncRequest:function(e){e&&this.ajaxLoad("service/ajax/cancelRequest",{requestId:e
},!1)},refreshReport:function(e){var t=(new Date).getTime();e.showProgressPane("reportRefreshing"),
e.refreshRequest&&e.refreshRequest.cancel(),e.refreshRequestErrorCounter=0,this.initAsyncRequestCount++;
var i=this.initAsyncRequestCount,r=this.initAsyncRequest({reportXML:e.getReportXml(),
prevId:e.refreshRequestId,format:"HTML",action:"REFRESH",dirtyFlag:e.isDirty(),annotations:e.getModelAnnotationsJson()
},function(o){if(cv.io.initAsyncRequestCount>i)return-1!==o.indexOf("LECRYPTO:")&&cv.io.cancelAsyncRequest(o),
!0;if(!o)return e.handleReportMsg({type:"exception",initId:r}),!0;var s=e.handleReportMsg(o);
return s&&t>=e.refreshTimeStamp?(e.refreshRequestId=s.text,e.refreshTimeStamp=t,cv.io.getReportHTML(e),
!0):void 0});return!1},getReportHTML:function(e,t,i){if(e.refreshRequestId&&(!t||t==e.refreshRequestId)){
t||(t=e.refreshRequestId),e.refreshRequest&&(e.refreshRequest.cancel(),e.refreshRequest=null),
i||(i=3);var o=this;e.refreshRequest=a("service/ajax/getReportHTML",{data:{requestId:t,
timeout:i,reportViewWidth:e.reportWidth,reportViewHeight:e.reportHeight,time:(new Date).getTime(),
sessionLocale:SESSION_LOCALE},sync:!1,method:"POST"}),e.refreshRequest.then(function(i){
var s=!0;i&&(s=!1,e.loadReportHTML(i)),s&&setTimeout(r.hitch(o,"getReportHTML",e,t,1),3e3);
},function(t){o._retryConnection(t,e.refreshRequestErrorCounter)?e.refreshRequestErrorCounter++:("xhr cancelled"!=t.message&&e.handleReportMsg({
type:"exception",details:json.stringify({name:t.name,message:t.message,fileName:t.fileName
})}),retry=!1)},function(e){})}},getReportInFormat:function(e,t,i){this.initAsyncRequest({
reportXML:e,action:"REFRESH",format:t,dirtyFlag:i,prevId:""},function(i){if(i){var r=cv.parseXML(e),o=(r.documentElement.selectSingleNode("cv:commonStorageAttributes/cv:path"),
r.documentElement.getElementsByTagName("path")[0].getAttribute("name")),s="service/ajax/getReportInFormat?requestId="+i+"&format="+t+"&stok="+cv.securityToken;
null!=o&&""!=o&&(s=s+"&reportName="+encodeURIComponent(o)),"EXCEL"==t&&document.all?l.byId("downloadIframe").setAttribute("src",s):window.open(s);
}})},_retryConnection:function(e,t){if(t<this.maxConnectionTries&&e&&e.message){e=e.message;
var i=/XMLHttpTransport\sError:\s(12\d\d\d)/,r=i.exec(e);if(r&&r[1])switch(r[1]){
case"12002":case"12029":case"12030":case"12031":case"12152":return!0}}return!1},getFieldHelpXml:function(e,t,i){
var r={};return r.catalog=e,r.cube=t,r.annotations=i,this.ajaxLoad("service/modeling/getFieldHelp",r,!0);
}}}),define("analyzer/GemUI",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","pentaho/common/propertiesPanel/Panel"],function(e,t,i,r,o){
return e(o.registeredTypes.gem,{className:"gem",postCreate:function(){this.domNode.setAttribute("type",this.model.type),
this.domNode.setAttribute("formula",this.model.formula);var e=i("div.gemMenuHandle",this.domNode)[0];
e||(e=i(".gemMenuHandle",this.domNode)[0]),e.className=e.className+" scalable";var t=cv.getActiveReport().getGem(this.model.formula);
t&&this.setAnalyzerGemNode(t),this.domNode.setAttribute("dndType",this.dndType+"B"),
this.inherited(arguments)},setAnalyzerGemNode:function(e){this.analyzerGem=e,this.analyzerGem.domNode=this.domNode;
},getFormula:function(){return this.model.formula},getName:function(){return this.model.value;
},onContextMenu:function(e){this.analyzerGem||(this.analyzerGem=cv.getActiveReport().getGem(this.model.formula)),
cv.util.popupSourceNode=this.domNode,this.analyzerGem.onContextMenu(e)},destroy:function(){
this.inherited(arguments),this.analyzerGem&&(this.analyzerGem.domNode=null,this.analyzerGem=null);
}})}),define("analyzer/visual/utils",["pentaho/visual/role/util"],function(e){function t(t,o,s,a,n){
var l=n[a];if(void 0===l){var d=r[a],c=d(i(t));n[a]=l=t.createSchemaDataTable(c)}
var h=l.model.attributes,u=h[h.length-1].name,p=e.testAddFieldAtAutoPosition(o,s,u,{
alternateData:l});if(null===p)return!1;var m="stringAttribute"!==a;return p.mode.isContinuous===m;
}function i(e){for(var t=0,i="__field_temp";e.gemList.contains(i+t);)t++;return i+t;
}var r={stringAttribute:function(e){return{name:e,type:"string",isKey:!0}},dateAttribute:function(e){
return{name:e,type:"string",isKey:!0,p:{EntityWithTimeIntervalKey:{duration:"month",
isStartDateTimeProvided:!0}}}},numberAttribute:function(e){return{name:e,type:"string",
isKey:!0,p:{EntityWithNumberKey:{isNumberProvided:!0}}}},numberMeasure:function(e){
return{name:e,type:"number",isKey:!1}}};return{testAddKnownFieldKinds:function(e,i,r,o){
var s=t(e,i,r,"stringAttribute",o),a=t(e,i,r,"dateAttribute",o),n=t(e,i,r,"numberAttribute",o),l=t(e,i,r,"numberMeasure",o);
return{stringAttribute:s,dateAttribute:a,numberAttribute:n,attribute:s||n||a,numberMeasure:l
}}}}),define("analyzer/LayoutPanel",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","pentaho/common/propertiesPanel/Configuration","pentaho/common/propertiesPanel/Panel","analyzer/GemUI","dijit/registry","dojo/_base/array","dojo/topic","dojo/aspect","pentaho/type/Simple","pentaho/type/changes/Transaction","pentaho/visual/role/util","pentaho/visual/color/utils","./visual/utils","pentaho/util/object","pentaho/util/fun"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m,g,v,f){
var b=e("analyzer.LayoutPanel",[],{constructor:function(){this.panel=n.byId("layoutPanel"),
c.after(this.panel,"onPropertyChange",r.hitch(this,"onUIPropertyChange"),!0),t(this.panel,"UIEvent",r.hitch(this,"onUIPropertyChange")),
this.topic=d.subscribe("/analyzer/reportDisplayed",r.hitch(this,"updatePanel")),this._onModelEventHandle=null;
},onUIPropertyChange:function(e,t){this.layoutConfig&&this.layoutConfig.onUIPropertyChange(e,t);
},onModelEvent:function(e,t,i){var r=this.layoutConfig.onModelEvent(this.panel.configuration,e,t,i),o=this.layoutConfig.report;
switch(r){case b.modelEventActions.refreshReport:o.refreshReport();break;case b.modelEventActions.refreshVisual:
this.updatePanel(o),o._vizView&&o._vizView.update()["catch"](function(){})}},updatePanel:function(e){
var t=this._getLayoutConfigClass(e);if(this.layoutConfig=t?new t(e):null,cv.activeLayoutConfig=this.layoutConfig,
this._onModelEventHandle&&(this._onModelEventHandle.remove(),this._onModelEventHandle=null),
this.layoutConfig){var i=this.layoutConfig.getConfiguration();this.panel.setConfiguration(i),
e.isClientSideViz()&&e.isLegacyViz()&&(this.layoutConfig.updateConfiguration(this.panel.configuration),
this.panel.reload())}else this.panel.setConfiguration(null);this._onModelEventHandle=c.after(this.panel.configuration,"onModelEvent",r.hitch(this,"onModelEvent"),!0);
},_getLayoutConfigClass:function(e){var t=e.getReportFormat(),i=t;if("JSON"===t){
var r=e.reportDoc,o=r.getChartOption("chartType"),s="CUSTOM"===o?r.getChartOption("customChartType"):o;
s&&(i+="_"+s),e.isLegacyViz()&&(t+="-LEGACY")}var a=b.configurationManagers[i]||b.configurationManagers[t]||null;
return a||console.error("No configuration could be found for "+i),a}}),y=e(s.registeredTypes.gemBar,{
checkAcceptance:function(e,t,i,r){var o=this.inherited(arguments);return o?(void 0===i&&(i=!0),
cv.activeLayoutConfig.checkAcceptance(this.dropZone,t,i,r)):!1}});s.registeredTypes.gem=a,
s.registeredTypes.gemBar=y,e("analyzer.LayoutPanel.Gem",[pentaho.common.propertiesPanel.Property],{
type:null,formula:null,measureId:null,gems:[],constructor:function(e){if(this.inherited(arguments),
e.sourceNode){var t=e.sourceNode.getAttribute("formula");cv.getFieldHelp().isAttribute(t)?this.type="attribute":(this.type="measure",
this.measureId=cv.getActiveReport().reportDoc.getNextMetricId()),this.formula=t}else r.mixin(this,e),
this.formula||(this.formula=e.id)},postCreate:function(){}}),o.registeredTypes.gem=b.Gem;
var _=e("analyzer.AbstractLayoutConfig",null,{constructor:function(e){this.report=e,
this.reportDoc=e.reportDoc},iconsForType:{rowAttributes:"gem-bar-level",measures:"gem-bar-measure",
"attribute+measures":"gem-bar-filter"},getConfiguration:function(){var e=[],t=function(t){
t&&(t._index=e.length,e.push(t))};this.__dataTableTestCache=Object.create(null);var i=this.report.vizModelAdapter,r=null;
i.$type.eachVisualRole(function(e){t(this._createPropInfo(i,e,r))},this);var o=this.report.vizModel,s=o.$type;
r=this.report._vizPropsImplied,s.each(function(e){s.isVisualRole(e)||t(this._createPropInfo(o,e,r));
},this);var a=s.application,n=a&&a.showOptionsButton;return null==n&&(n=this.report._inferVizUsesChartOptions()),
n&&t(this._createOptionsButton(o)),this._sortPropInfos(e),this.__dataTableTestCache=null,
{groups:{layout:{id:"layout",title:cvCatalog.dropZoneLabels_LAYOUT},options:{id:"options",
title:cvCatalog.dropZoneLabels_PROPERTIES}},properties:e}},_createOptionsButton:function(){
return{id:"optionsBtn",dataType:"none",ui:{group:"options",category:"optionsBtn",
ordinal:1/0,type:"button",label:cvCatalog.dropZoneLabels_CHART_OPTIONS}}},_sortPropInfos:function(e){
function t(e){return e.group+"|"+e.category}var i={};e.forEach(function(e){var r=e.ui,o=r._sectionKey=t(r),s=r.ordinal,a=v.getOwn(i,o);
(null==a||a>s)&&(i[o]=s)}),e.sort(function(e,t){var r=e.ui,o=t.ui;return f.compare(r.group,o.group)||f.compare(i[r._sectionKey],i[o._sectionKey])||f.compare(r.category,o.category)||f.compare(r.ordinal,o.ordinal)||f.compare(r.caption||r.label,o.caption||o.label)||f.compare(e._index,t._index);
});var r=null;e.forEach(function(e){if("layout"!==e.ui.group){var t=e.ui.category||"";
null==r?r=t:t!==r&&(r=t,e.ui.seperator=!0)}})},_createPropInfo:function(e,t,i){return t.isBrowsable&&e.isApplicableOf(t)&&!v.hasOwn(i,t.name)?e.$type.isVisualRole(t)?this._createPropInfoRole(e,t):this._createPropInfoGeneral(e,t):null;
},_createPropInfoRole:function(e,t){var i=t.name,r=this.__dataTableTestCache,o=this.report,s=g.testAddKnownFieldKinds(o,e,i,r),a=[];
s.stringAttribute&&a.push("string"),(s.numberMeasure||s.numberAttribute)&&a.push("number"),
s.dateAttribute&&a.push("time");var n,l=a.join(",");s.attribute&&s.numberMeasure?n=this.iconsForType["attribute+measures"]:s.attribute?n=this.iconsForType.rowAttributes:s.numberMeasure&&(n=this.iconsForType.measures);
var d=[];s.attribute&&d.push("string"),s.numberMeasure&&d.push("number");var c=cvCatalog["dropZonePlaceholder_"+d.join(",")],h=e.get(i),u=t.fields.countRangeOn(e,{
ignoreCurrentMode:!0});return{id:i,dataType:l,dataStructure:"column",caption:t.label,
required:u.min>0,allowMultiple:u.max>1,ui:{group:"layout",category:t.category,ordinal:t.ordinal,
type:"gemBar",dndType:cvConst.dndAcceptedTypes.report,caption:t.label,captionIcon:n,
showPlaceholder:!0,placeholderText:c},gems:h.fields.toArray(this._createGemModelFromMappingField,this)
}},_createGemModelFromMappingField:function(e){var t=this.report.getGem(e.name),i=this.createGemModel(t);
return i.postDrop={scope:this.report,f:this.report.emitDropEvent},i},_createPropInfoGeneral:function(e,t){
var i=t.name;switch(i){case"data":case"selectionMode":return null}var o=t.valueType;
if(o.isList)return null;var s=t.domainOn(e),a=this._getPropInfoGeneralDataType(o);
if(null==a||"function"===a)return null;var n,l=t.v2Spec;if(l)n=l.ui&&l.ui.type;else if(s)n="combo";else switch(a){
case"boolean":n="checkbox";break;default:n="textbox"}var d=l?r.clone(l):{};d.id=i,
d.dataType=a;var c=e.getv(t);l&&null===c||(d.value=c);var h=d.ui;return h||(d.ui=h={}),
h.group="options",h.category=t.category,h.ordinal=t.ordinal,h.type=n,s&&(d.values=s.map(function(e){
return e.$key}),d.ui.labels=s.map(function(e){return e.toString()})),d.ui.caption=t.label,
"checkbox"===n&&(t.application.checkedLabel?d.ui.label=t.application.checkedLabel:(d.ui.label=t.label,
d.ui.caption=void 0)),d},_getPropInfoGeneralDataType:function(e){if(!e.isSimple)return null;
var t=h.type;if(e===t)return null;for(var i;(i=e.ancestor)!==t;)e=i;return e.shortId;
},updateConfiguration:function(e){},createGemModel:function(e){return{type:e.type==cvConst.TYPE_ATTRIBUTE?"attribute":"measure",
id:e.getFormula().replace(/>/g,"&gt;"),formula:e.getFormula(),value:e.getDisplayLabel(),
dndType:cvConst.dndObjectTypes.gem}},onUIPropertyChange:function(e,t){},onModelEvent:function(e,t,i,r){
switch(i){case"value":return this.onModelValueEvent(e,t,r);case"clicked":return this.onModelClickedEvent(e,t);
case"gems":case"removedGem":case"insertAt":case"reorderedGems":return this.onModelGemEvent(e,t,i,r);
}},onModelValueEvent:function(e,t,i){return b.modelEventActions.none},onModelGemEvent:function(e,t,i,r){
return"insertAt"===i?(this.report.insertField(t.id,r.idx,r.oldIdx,r.gem),b.modelEventActions.refreshReport):b.modelEventActions.none;
},onModelClickedEvent:function(e,t){return"optionsBtn"===t.id?(this.onShowOptions(),
b.modelEventActions.none):b.modelEventActions.refreshReport},onShowOptions:function(){
this.report.chartOptionsDlg.show()},checkAcceptance:function(e,t,i,r){try{if(!e)return!1;
var o=e.gemBar;if(!o)return!1;var s=t[0];if(!s)return!1;var a=o.model.id,n=s.getAttribute("formula"),l=e.accept[s.getAttribute("dndtype")];
if(!l)return!1;var d=this.report.isReportFormatPivot(),c=o.propPanel.getGemUIById(s.id)||null,h=null!==c,u=this.report.getGemFromDomNode(s),m=null!==u,g=m?u.getId():n;
if(!h&&m&&(d||!this.report.isGemMetricValueAndUnmapped(u))&&(l=this.report.checkDuplicateGem(g,i),
!l))return l;if(d){var v="columns"===a?"columnAttributes":"rowAttributes";if(!this.report.checkColumnSelectionFilters(v,i))return!1;
}var f,b=this.report.createSchemaDataTable(m?void 0:g),y=this.report.vizModelAdapter;
return f=null==r?p.testAddFieldAtAutoPosition(y,a,g,{alternateData:b}):p.testAddField(y,a,g,{
alternateData:b,fieldPosition:r}),null!==f}catch(_){throw alert(_),_}}});return b.modelEventActions={
none:0,refreshVisual:1,refreshReport:2},e("analyzer.LayoutConfig",[_],{getConfiguration:function(){
var e=this.inherited(arguments),t=this.report.visualization;if(t){var i=this.report._generateVizPropsImplied();
l.forEach(e.properties,function(e){"undefined"!=typeof i[e.id]?(e.value=i[e.id],"undefined"!=typeof t.args[e.id]&&(t.args[e.id]=i[e.id])):"undefined"!=typeof t.args[e.id]&&(e.value=t.args[e.id]);
},this)}return e},onModelEvent:function(e,t,i,r){if("value"!=i&&"removedGem"!=i&&"gems"!=i){
var o=r.gem;if("insertAt"==i)this.report.insertField(t.id,r.idx,r.oldIdx,o);else if("optionsBtn"==t.id)return void(this.report.isReportFormatPivot()?this.report.rptDlg.showReportOptions():this.report.chartOptionsDlg.show());
this.report.refreshReport()}}}),e("analyzer.PivotLayoutConfig",[_],{_createOptionsButton:function(e){
var t=this.inherited(arguments);return t.ui.label=cvCatalog.dropZoneLabels_REPORT_OPTIONS,
t},updateConfiguration:function(e){throw new Error("Not supported")},onShowOptions:function(){
this.report.rptDlg.showReportOptions()}}),e("analyzer.JsonLayoutConfig",[_],{updateConfiguration:function(e){
throw new Error("Not supported")},onModelValueEvent:function(e,t,i){return u.enter().using(function(r){
var o=this._onModelValueEventCore(e,t,i);return r.accept(),o},this)},_onModelValueEventCore:function(e,t,i){
var r=this.report;return r.history.endCurrent(),r.vizModel.set(t.id,i.newVal),r.history.add(new cv.ReportState("actionChartProps")),
r._updateVizModelFromReport(),b.modelEventActions.refreshVisual}}),b.configurationManagers={
PIVOT:analyzer.PivotLayoutConfig,JSON:analyzer.JsonLayoutConfig,"JSON-LEGACY":analyzer.LayoutConfig
},e("analyzer.ColorConfiguration",[analyzer.LayoutConfig],{palettes:{"ryg-3":["#FF0000","#FFFF00","#008000"],
"ryg-5":["#FF0000","#FFBF3F","#FFFF00","#BFDF3F","#008000"],"ryb-3":["#FF0000","#FFFF00","#4BB6E4"],
"ryb-5":["#FF0000","#FFBF3F","#FFFF00","#DCDDDE","#4BB6E4"],"blue-3":["#CCDFED","#6D85A4","#0F2B5B"],
"blue-5":["#CCDFED","#9CB2C8","#6D85A4","#3E587F","#0F2B5B"],"gray-3":["#E6E6E6","#999999","#333333"],
"gray-5":["#E6E6E6","#CCCCCC","#999999","#666666","#333333"]},onModelEvent:function(e,t,i,r){
return"value"===i?(("colorSet"==t.id||"pattern"==t.id||"reverseColors"==t.id)&&this.updateColorConfiguration(e),
this.report.history.add(new cv.ReportState("actionChartProps")),void this.report.refreshReport()):this.inherited(arguments);
},updateColorConfiguration:function(e){var t=e.byId("pattern").value,i=e.byId("colorSet").value,r=e.byId("reverseColors").value,o="GRADIENT"===t?"linear":"discrete",s=m.buildPalette(i,t,r);
this._setScalingType(o),this._setColorRange(s)}}),b}),define("analyzer/report/cv_rptReport",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/collections/Dictionary","dojox/xml/parser","dojox/fx","dijit/layout/TabContainer","dijit/layout/ContentPane","analyzer/LayoutPanel","pentaho/common/propertiesPanel/Configuration","analyzer/TabPanel","dojo/_base/event","analyzer/report/cv_rptIO","dojo/html","dojo/dom-class","dijit/registry","dojo/dnd/Manager","dojo/_base/array","dojo/dom-style","dojo/request","dojo/topic","dojo/dom-geometry","dojo/dom","dojo/_base/window","dojo/window","dojo/dom-construct","dojo/json","analyzer/API"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m,g,v,f,b,y,_,T,C,I,A,E,D,M,F){
var N=f.manager(),w=e("cv.Report",null,{constructor:function(e){this.id=e.id,this.mode=e.mode,
this.manager=e.manager,this.uiController=e.uiController,this.containerNode=e.containerNode,
this.handles=[],this.history=new cv.History(this,e.manager,e.uiController),this.modelAnnotations=[],
this._constructViz(),e.reportDoc?this.reportDoc=e.reportDoc:(this.reportDoc=new cv.ReportDocument,
this.reportDoc.initialize(e.reportXml)),e.cube&&e.catalog?(this.cube=e.cube,this.catalog=e.catalog,
this.reportDoc.setReportOption("cube",this.cube),this.reportDoc.setReportOption("catalog",this.catalog)):(this.cube=this.reportDoc.getReportOption("cube"),
this.catalog=this.reportDoc.getReportOption("catalog")),this.currentSelection=null,
this.gemList=new o,this.badFields=[],this.badFilters=!1,this.pendingSaveParams={reportAction:null,
reportName:null,reportPath:null,reportErrorCallback:null,suppressSuccessNotification:!1
},this.okTimeoutInterval=250;var t=e.api;if(!t)throw new Error("Required argument 'api'.");
this.api=t,t.report._attachReport(this)},_query:function(e,t){return i(e,t)},on:function(){
return cv.api.event._on.apply(cv.api.event,arguments)},emit:function(){var e=arguments[0],t="init"==e?cv:cv.api;
return Array.prototype.splice.call(arguments,1,0,t),cv.api.event._emit.apply(cv.api.event,arguments);
},emitDropEvent:function(e,t){this.emit("drop",e,t)},MIN_REPORT_HEIGHT:100,HISTORY_ACTION_LIST:"",
reportBeCanceled:!1,byId:function(e){return 0!=e.indexOf(this.id)&&(e=this.id+e),
I.byId(e)},byClass:function(e){return cv.util.getFirstChildByClass(this.domNode,e);
},createNode:function(e,t,i,r){var o=document.createElement(e);return t&&(o.id=this.id+t),
i&&(o.className=i),r&&r.appendChild(o),o},init:function(){return window.name="cvrpt"+this.id,
this._initDom(),this.timeUnlimited=!0,this.refreshRequestId="",this.progressImgId=0,
this.isReportPropsDirty=!1,this.actionLog=[],this.pendingActionLen=0,this.topPaneId="",
this.reportHeight=300,this.reportWidth=500,this.refreshTimeStamp=null,this.isInitialized=!1,
this.pivotReportLoaded=!1,this.chartLoaded=!1,this.rptDlg=new cv.ReportDialog(this),
this.filterDlg=new cv.FilterDialog(this),this.linkDlg=new cv.LinkDialog(this),this.drillDlg=new cv.DrillDialog(this),
this.chartOptionsDlg=new cv.ChartOptionsDialog(this),this.pageSetupDlg=new cv.PageSetupDialog(this),
this.arithNumberDlg=new cv.ArithNumberDialog(this),this.createMeasureDlg=new cv.CreateMeasureDialog(this),
this.measurePropertiesDlg=new cv.MeasurePropertiesDialog(this),this.attributePropertiesDlg=new cv.AttributePropertiesDialog(this),
this.removeMeasureDlg=new cv.RemoveMeasureDialog(this),this.resizer=new cv.ReportResizer,
this.reportHeaders=null,this.isResizing=!1,this.rowFieldWidths=new Array,this.actualRowFieldWidths=null,
this.columnDataFieldWidths=new Array,this.actualColumnFieldWidths=null,N.nestedTargets=!0,
this.dropTargets={reportArea:new cv.ReportDropTarget(this.byId("ReportArea"),{accept:cvConst.dndAcceptedTypes.report,
report:this}),trashcan:new cv.TrashAreaDropTarget(this.byId("Trashcan"),{accept:cvConst.dndAcceptedTypes.trashcan,
report:this})},("EDIT"==this.mode||"VIEW"==this.mode)&&(g.add(this.byId("filters"),"dojoDndItem"),
this.dropTargets.filters=new cv.FilterPaneDropTarget(this.byId("filters").parentNode,{
accept:cvConst.dndAcceptedTypes.report,report:this}),this.dropTargets.filters.sync(),
this.dropTargets.filterPaneTitle=new cv.FilterPaneDropTarget(this.byId("FilterPaneTitle"),{
accept:cvConst.dndAcceptedTypes.report,report:this}),this.handles.push(t(this.nodeFilters,"dblclick",r.hitch(this,"showFilterDlg"))),
this.setAutoRefresh("true"==this.reportDoc.getReportOption("autoRefresh")?!0:!1)),
("VIEW"==this.mode||"MINI"==this.mode)&&this.handles.push(t(this.byId("CmdActions"),"click",r.hitch(this,"toggleActionsPopupMenu"))),
this.handles.push(t(this.byId("ReportSummary"),"click",r.hitch(this,"onToggleReportPane"))),
this.handles.push(t(this.byId("HideFilterPane"),"click",r.hitch(this,"onToggleReportPane"))),
this.handles.push(t(this.nodeFilters,"mousemove",r.hitch(this,"onMouseOverFilters"))),
this.handles.push(t(I.byId("closeRowTruncate"),"click",r.hitch(this,"hideTruncateMessage"))),
this.handles.push(t(I.byId("closeColTruncate"),"click",r.hitch(this,"hideTruncateMessage"))),
this.handles.push(t(I.byId("closeTransTruncate"),"click",r.hitch(this,"hideTruncateMessage"))),
cv.util.setHelpTopics([this.id+"HelpFilterPane","CV/Business_User/working_with_filters.html"]),
cv.util.show(this.domNode),this._initJSPlugins(),this._loadVizRegistryAsync()},_initDom:function(){
this.domNode=this.createNode("DIV","ReportMain","reportMain pentaho-panel-insetglow "+this.mode),
this.containerNode.appendChild(this.domNode);var e=this.createNode("DIV","ReportTitle","pentaho-titled-toolbar",this.domNode);
"EDIT"==this.mode?e.innerHTML="<div id='"+this.id+"ReportFormatCmdDiv' class='reportFormatShowDiv' style='height:23px;'></div><div class='titleLink reportName' id='"+this.id+"ReportName'></div>":e.innerHTML="<div id='"+this.id+"ReportFormatCmdDiv' class='reportFormatShowDiv' style='height:23px;'><div title='Report Actions' id='"+this.id+"CmdActions' class='cmdActionsBtn'><span>"+cvCatalog.reportDashboardActions+"</span></div></div><div class='titleLink reportName' id='"+this.id+"ReportName'></div>",
e=this.createNode("DIV","ReportSummary","reportSummary clearfix pentaho-titled-toolbar",this.domNode),
e.innerHTML='<div class="filterSummary" id="'+this.id+'FilterPaneTitle"><div id="'+this.id+'FilterPaneToggle" class="filterPaneToggle" title="'+cvCatalog.ttShowHideFilters+'">&nbsp;</div><span id="'+this.id+'FilterCountLabel" title="'+cvCatalog.ttShowHideFilters+'">No Filter in use</span></div><div id="refreshSummary"><div id="'+this.id+'StatusBar" class="statusBar"></div><div id="progressPane" class="progressPaneDiv hidden"></div></div>',
"EDIT"==this.mode&&(y.set("refreshSummary","position","absolute"),y.set("refreshSummary","right","0")),
this.nodeFilter=this.createNode("DIV","Filter","reportFilter clearfix hidden",this.domNode),
this.nodeFilter.innerHTML='<span id="'+this.id+'HideFilterPane" class="closeBox pentaho-closebutton pentaho-imagebutton-hover" style="float:right;" title="'+cvCatalog.ttHideFilterPane+'"></span><span id="'+this.id+'HelpFilterPane" class="helpIcon pull-right" title="'+cvCatalog.ttHelpOnFilters+'""></span><div id="'+this.id+'filters" class="filters"><div class="filterPaneHint"></div></div>',
this.nodeRowTruncate=this.createNode("DIV","RowTruncateInfo","rowTruncate hidden",this.domNode),
this.nodeRowTruncate.innerHTML='<span class="button-close pull-right" id="closeRowTruncate"></span><br><span class="info-icon"></span>&nbsp;'+cv.util.substituteParams(cvCatalog.rowTruncate,'<span id="'+this.id+'RowTruncateMsg"></span>'),
this.nodeColTruncate=this.createNode("DIV","ColTruncateInfo","colTruncate hidden",this.domNode),
this.nodeColTruncate.innerHTML='<span class="button-close pull-right" id="closeColTruncate"></span><br><span class="info-icon"></span>&nbsp;'+cv.util.substituteParams(cvCatalog.colTruncate,'<span id="'+this.id+'ColTruncateMsg"></span>'),
this.nodeTransTruncate=this.createNode("DIV","TransTruncateInfo","transTruncate hidden",this.domNode),
this.nodeTransTruncate.innerHTML='<span class="button-close pull-right" id="closeTransTruncate"></span><br><span class="info-icon"></span>'+cvCatalog.transTruncate,
this.nodeReportRefresh=this.createNode("DIV","ReportRefresh","reportRefresh",this.domNode),
this.nodeReportRefresh.innerHTML='<div class="pull-left"><span class="warn-icon vertical-align-middle"></span>'+cvCatalog.warnAutoRefreshPanel+'</div><button id="cmdRefreshBtn" style="margin-right: 10px;padding: 2px 5px 4px;" class="pentaho-button pull-right">'+cvCatalog.refreshButton+"</button>",
t(I.byId("cmdRefreshBtn"),"click",function(){cv.getActiveReport().history.isStateRefreshed()||cv.getActiveReport().refreshReport(!0);
}),cv.util.hide(this.nodeReportRefresh),this.nodeReportArea=this.createNode("DIV","ReportArea","reportArea",this.domNode),
this.nodeTrash=this.createNode("DIV","Trashcan","trashcan hidden",this.domNode),this.nodeFilters=this.byId("filters"),
this.statusBar=this.byId("StatusBar"),this.closeTruncateStatus="None"},_initJSPlugins:function(){
"undefined"!=typeof analyzerPlugins&&b.forEach(analyzerPlugins,function(e,t){try{
e.init()}catch(i){"undefined"!=typeof console&&console.log&&console.log("Error initializing Analyzer plugin #"+(t+1)+": "+i);
}})},postCreate:function(){var e="";this.reportDoc.isEmpty()||(e="actionOpenReport"),
this.openReport(),cv.api.util._applyUrlParameters(),this.emit("init"),this.history.add(new cv.ReportState(e)),
this.refreshReport(!1,!0),this.history.setSaved(),this.badFields.length>0&&(this.history.current().reportXml=s.innerXML(this.reportDoc.getReportNode())),
this.history.setRefreshed(!1),this.successState=this.history.current(),this.isInitialized=!0;
},destroy:function(){b.forEach(this.handles,function(e){e.remove()}),this.rptDlg.destroy(),
this.filterDlg.destroy(),this.resizer.destroy(),cv.util.destroyDojoWidgets(),this.rptDlg=null,
this.filterDlg=null,this.resizer=null,this.reportDoc=null,this.reportHeaders=null,
this.statusBar=null,this.nodeColTruncate=null,this.nodeRowTruncate=null,this.nodeTransTruncate=null,
this.nodeLayout=null,this.nodeFilter=null,cv.util.TRACE("_EXIT")},setReportPropsDirty:function(e){
this.isReportPropsDirty=e},showReportDescription:function(e){var t=e.currentTarget.id,i=I.byId(t);
i.setAttribute("title",this.getReportProperties().description)},openReport:function(e,t){
e&&(this.reportDoc.replaceReportNode(e),this.reportDoc.setReportOption("autoRefresh",cv.prefs.autoRefresh?"true":"false")),
this._initDisplay(null,null,null,t),this.cube=this.reportDoc.getReportOption("cube");
var i=this.reportDoc.getReportProperty("name");if(i)this.setReportName(i),document.title=i,
"EDIT"==this.mode&&"true"==this.reportDoc.getUIAttributes().getAttribute("showFilterPanel")&&this.onToggleReportPane("cmdFilters");else{
this.setReportName(cvCatalog.reportNewName),document.title=cvCatalog.reportNewName,
this.setReportPropsDirty(!0);var r=cv.util.getURLQueryValue("autoRefresh");e||"false"!=r||this.setAutoRefresh(!1);
}},setReportXML:function(e){var t=this;_(cv.contextPath+e+"&::getReportXml=true",{
data:{time:(new Date).getTime()},sync:!1,headers:{"Content-Encoding":"utf8"}}).then(function(e){
t.reportDoc.initialize(e),t.openReport(),t.history.add(new cv.ReportState("actionEditFilter")),
t.refreshReport()},function(e){},function(e){})},destroyReport:function(){this._removeSortHandlers(),
null!=this.reportHeaders&&(this.reportHeaders.disconnect(),this.reportHeaders=null),
this.resizeSubscription&&this.resizeSubscription.remove();var e=this.byClass("pivotTable");
if(e){var t=v.findWidgets(e);b.forEach(t,function(e){e.destroyRecursive(!1)})}e&&(e.innerHTML="",
cv.api.event._eventListenerUtil.removeEventListener(e,"contextmenu",this.rptTblPopupMenuHandler),
cv.api.event._eventListenerUtil.removeEventListener(e,"click",this.rptTblClickHandler,!0),
cv.api.event._eventListenerUtil.removeEventListener(e,"contextmenu",this.rptTblContextmenuHandler,!0),
this.rptOnKeepAndShow.remove(),cv.api.event._eventListenerUtil.removeEventListener(e,"dblclick",this.rptTblDblClickHandler,!0),
cv.api.event._eventListenerUtil.removeEventListener(e,"mouseenter",this.rptTblMouseOverHandler,!0),
cv.api.event._eventListenerUtil.removeEventListener(e,"mousemove",this.rptTblMouseMoveHandler,!0),
cv.util.hide(this.nodeColTruncate,this.nodeRowTruncate,this.nodeTransTruncate))},
loadReportResizeParams:function(){if(!(this.rowFieldWidths.length>0||this.columnDataFieldWidths.length>0)){
for(var e="cv:uiAttributes/cv:rowFieldWidths/cv:labelWidth",t=this.reportDoc.reportRecord.documentElement.selectNodes(e),i=0;i<t.length;++i)this.rowFieldWidths[t[i].attributes[0].value]=s.textContent(t[i].selectSingleNode("cv:width"))-0;
e="cv:uiAttributes/cv:columnDataFieldWidths/cv:labelWidth";for(var r=this.reportDoc.reportRecord.documentElement.selectNodes(e),i=0;i<r.length;++i)this.columnDataFieldWidths[r[i].attributes[0].value]=s.textContent(r[i].selectSingleNode("cv:width"))-0;
}},updateReportResizeParams:function(e,t,i,r){if("remove"==e)if("measure"==r)for(var o=t;o<this.columnDataFieldWidths.length;++o)this.columnDataFieldWidths[o]=this.columnDataFieldWidths[o+1];else for(var o=t;o<this.rowFieldWidths.length;++o)this.rowFieldWidths[o]=this.rowFieldWidths[o+1];else if("add"==e&&"before"==i)if("measure"==r){
for(var o=this.columnDataFieldWidths.length;o>t;o--)this.columnDataFieldWidths[o]=this.columnDataFieldWidths[o-1];
this.columnDataFieldWidths[t]=null}else{for(var o=this.rowFieldWidths.length;o>t;o--)this.rowFieldWidths[o]=this.rowFieldWidths[o-1];
this.rowFieldWidths[t]=null}},_transformDataFieldToDom:function(e,t){for(var i=0;i<e.length;++i)if("undefined"!=typeof e[i]&&null!=e[i]){
var r=cv.parseXML('<labelWidth xmlns="http://www.pentaho.com" index=\''+i+"'><width>"+parseInt(e[i])+"</width></labelWidth>").documentElement;
t.appendChild(r.cloneNode(!0))}},saveUIAttributes:function(){var e,t,i=this.reportDoc.getUIAttributes();
e=i.selectSingleNode("cv:rowFieldWidths"),this.actualRowFieldWidths&&(s.removeChildren(i.selectSingleNode("cv:rowFieldWidths")),
e.setAttribute("actualWidths",this.actualRowFieldWidths.toString())),t=i.selectSingleNode("cv:columnDataFieldWidths"),
this.actualColumnFieldWidths&&(s.removeChildren(i.selectSingleNode("cv:columnDataFieldWidths")),
t.setAttribute("actualWidths",this.actualColumnFieldWidths.toString())),this._transformDataFieldToDom(this.rowFieldWidths,e),
this._transformDataFieldToDom(this.columnDataFieldWidths,t),this.savePluginDataToXML(this.getPluginDataJSON());
},loadReportHTML:function(e){this.refreshRequest=null,this.refreshRequestId=null,
this.hideProgressPane(),this._removeAutoRefreshPane();var t=cv.util.parseAjaxMsg(e),i=this.emit("postExecution",t);
if(i){var r=this.handleReportMsg(t);if(r){if("success"==r.type&&"successGenerateReport"!=r.id){
var o=cvCatalog[r.id];o||(o=r.id),e="reportNoDataMsg"==r.id?cv.util.substituteParams("EDIT"==this.mode?cvCatalog.reportNoDataMsgHTML:cvCatalog.reportSuccessMsgHTML,o):cv.util.substituteParams(cvCatalog.reportSuccessMsgHTML,o);
}"reportNoDataMsg"==r.id?this.displayReport(e,r):this.isClientSideViz()?this.displayClientSideReport(e):(this.loadReportResizeParams(),
this.displayReport(e,r)),this._callRenderingEvents()}}},log:function(e,t){if(e){this.manager.cmdUndo&&("UNDO"==e&&this?e=this.manager.cmdUndo.title:"REDO"==e&&(e=this.manager.cmdRedo.title));
var i=e.indexOf(" (Ctrl+");i>0&&(e=e.substring(0,i)),this.actionLog.push(e)}t&&(this.pendingActionLen=this.actionLog.length);
},handleReportMsg:function(e){if(!e)return null;var t=r.isObject(e)?e:cv.util.parseAjaxMsg(e);
if(!t)return{type:"success",id:"successGenerateReport",text:e};switch(t.type){case"exception":
return void 0!=t.message&&(t.message.indexOf("Component returned failure code: 0x80040111")>=0||t.message.indexOf("XMLHttpTransport Error: 0")>=0)||void 0!=t.initId&&null==t.initId?null:(this.rptDlg.showError(cvCatalog.reportErrorMsg,null,cvCatalog.dlgSorryTitle),
this.hideProgressPane(),null);case"error":return this.rptDlg.showError(t.details),
this._revertToLastSuccessState(),this.hideProgressPane(),null;case"confirm":var i=this;
return this.refreshRequestId=t.text,this.rptDlg.showConfirm(t.details,null,{srcFunc:function(){
cv.io.getReportHTML(i)}},{srcObj:this,srcFunc:"cancelReport"}),null;case"warn":return cv.prefs.suppressMsg[t.id]||this.rptDlg.showWarning(t.details,null,!1,!1,t.id),
t;case"sessionExpired":return null;default:return t}},_findClosestTdForClickEvent:function(e){
var t,i=this._query(e).closest("td[type]");return i&&i.length>0&&(t=i[0]),t},_findClosestTdForMouseOverEvent:function(e){
var t;return"TD"===e.tagName&&e.getAttribute("type")&&(t=e),t},_onBindAdditionalEvent:function(e,t,i){
if(cv.api.event.isEventDisabled(e))return void u.stop(i);var r=i.target,o=t.call(this,r);
if(o){var s=this.buildCellActionContext(o),a=this.buildFilterActionContext(),n=this.emit(e,o,s,a,i);
n||u.stop(i)}},_addSortHandlersToPivot:function(){this.rptTblClickSortHandler=r.hitch(this,"onToggleSort"),
this.rptTblDblClickEditDlgHandler=r.hitch(this,"onShowEditDialogOnColumnHeader");var e=function(e){
cv.api.event._eventListenerUtil.addEventListener(e,"click",this.rptTblClickSortHandler),
cv.api.event._eventListenerUtil.addEventListener(e,"dblclick",this.rptTblDblClickEditDlgHandler);
};this._query(".sortActiveAsc, .sortActiveDesc, .sortInactive",this.reportHeaders.rowLabelHeaderContainer).forEach(function(t){
this._query(".sort",t).forEach(e,this)},this),this._query(".sortActiveAsc, .sortActiveDesc, .sortInactive",this.reportHeaders.columnHeaderContainer).forEach(function(t){
this._query(".sort",t).forEach(e,this)},this)},_removeSortHandlers:function(){if(this.reportHeaders){
var e=function(e){cv.api.event._eventListenerUtil.removeEventListener(e,"click",this.rptTblClickSortHandler),
cv.api.event._eventListenerUtil.removeEventListener(e,"dblclick",this.rptTblDblClickEditDlgHandler);
};this._query(".sortActiveAsc, .sortActiveDesc, .sortInactive",this.reportHeaders.rowLabelHeaderContainer).forEach(function(t){
this._query(".sort",t).forEach(e,this)},this),this._query(".sortActiveAsc, .sortActiveDesc, .sortInactive",this.reportHeaders.columnHeaderContainer).forEach(function(t){
this._query(".sort",t).forEach(e,this)},this)}},_updatePivotLayout:function(e){this.reportHeaders=new cv.ReportHeaders(this,e);
for(var t=0,r=i(".resize",this.reportHeaders.rowLabelHeaderContainer),o=0;o<r.length;++o)0!=o&&this.reportHeaders.attachResizeNode(r[o],"Label","before",t++),
this.reportHeaders.attachResizeNode(r[o],"Label","after",t++),y.set(r[o],"position","relative");
for(var s=i(".resize",this.reportHeaders.columnHeaderContainer),o=0;o<s.length;++o)"measure"==s[o].parentNode.getAttribute("type")&&(this.reportHeaders.attachResizeNode(s[o],"Column","before",t++),
this.reportHeaders.attachResizeNode(s[o],"Column","after",t++),y.set(s[o],"position","relative"));
this.reportHeaders.resizeLabels=r,this.reportHeaders.resizeColumns=s,this.closeTruncateStatus="None",
this.resizeContainer(),this.reportHeaders.updateLayout()},_truncateMsgFromPivot:function(e,t){
var i=e.getAttribute("rowcount"),r=e.getAttribute("columncount");if(t)switch(t.truncate&&(e.truncateType=t.truncate),
t.truncate){case"ROW":i=cv.util.substituteParams(cvCatalog.reportTableCountValue,i,t.rows),
e.rowMsg=i;break;case"COL":r=cv.util.substituteParams(cvCatalog.reportTableCountValue,r,t.cols),
e.colMsg=r;break;case"BOTH":i=cv.util.substituteParams(cvCatalog.reportTableCountValue,i,t.rows),
e.rowMsg=i,r=cv.util.substituteParams(cvCatalog.reportTableCountValue,r,t.cols),e.colMsg=r;
break;case"NONE":}var o={rowMsg:i,colMsg:r};return o},_bindRptOnKeepAndShowHandler:function(e){
this.rptOnKeepAndShow=t(e,"dblclick",r.hitch(this,"onKeepAndShow"))},displayReport:function(e,t,i){
cv.util.TRACE("_START");var o=this.getReportFormat();if(e){if(this.destroyReport(),
this._vizView&&this._disposeVizView(),cv.util.TRACE("set report HTML"),this.nodeReportArea.innerHTML=e,
t&&"reportNoDataMsg"==t.id&&"EDIT"==this.mode)cv.util.setHelpTopics([cv.util.getFirstChildByClass(this.nodeReportArea,"helpLinkReportNoData"),"CV/Business_User/working_with_filters.html#when_the_report_returns_no_data"]);else if("PIVOT"==o){
var s=this.byClass("pivotTable");if(s){this.rptTblClickHandler=r.hitch(this,"_onBindAdditionalEvent","tableClick",this._findClosestTdForClickEvent),
this.rptTblContextmenuHandler=r.hitch(this,"_onBindAdditionalEvent","tableContextMenu",this._findClosestTdForClickEvent),
this.rptTblMouseOverHandler=r.hitch(this,"_onBindAdditionalEvent","tableMouseOver",this._findClosestTdForMouseOverEvent),
this.rptTblMouseMoveHandler=r.hitch(this,"_onBindAdditionalEvent","tableMouseMove",this._findClosestTdForClickEvent),
cv.api.event._eventListenerUtil.addEventListener(s,"click",this.rptTblClickHandler,!0),
cv.api.event._eventListenerUtil.addEventListener(s,"contextmenu",this.rptTblContextmenuHandler,!0),
cv.api.event._eventListenerUtil.addEventListener(s,"mouseenter",this.rptTblMouseOverHandler,!0),
cv.api.event._eventListenerUtil.addEventListener(s,"mousemove",this.rptTblMouseMoveHandler,!0);
var a=this._truncateMsgFromPivot(s,t);this.statusBar.innerHTML=cv.util.substituteParams(cvCatalog.reportTableCount,a.rowMsg,a.colMsg),
cv.util.TRACE("Update layout"),this._updatePivotLayout(s),this.rptTblDblClickHandler=r.hitch(this,"_onBindAdditionalEvent","tableDoubleClick",this._findClosestTdForClickEvent),
cv.api.event._eventListenerUtil.addEventListener(s,"dblclick",this.rptTblDblClickHandler,!0),
this._bindRptOnKeepAndShowHandler(s),this.rptTblPopupMenuHandler=r.hitch(this,"toggleInReportPopupMenu"),
cv.api.event._eventListenerUtil.addEventListener(s,"contextmenu",this.rptTblPopupMenuHandler);
var n=cv.util.getDojoWidget("memberPopMenu");n&&n.domNode&&(n.domNode.memberId=null),
this._addSortHandlersToPivot()}}this.dropTargets.reportArea.init(o),this.successState=this.history.current(),
"exception"!=i&&(this.pivotReportLoaded=!0),cv.util.TRACE("_END")}},refreshReport:function(e,t){
if(this._updateVizModelFromReport(),t||this.reportDoc.replaceSelectionItems(),T.publish("/analyzer/reportDisplayed",this),
!e&&!this.autoRefresh())return!0;if(cv.util.hide(this.nodeReportRefresh),this.history.setRefreshed(!1),
this.statusBar.innerHTML="",this.reportDoc.isEmpty()||!this.isRequiredGembarsFilled()){
this.hideProgressPane(),this.refreshRequest&&this.refreshRequest.cancel(),this.refreshRequestId&&cv.io.cancelAsyncRequest(this.refreshRequestId),
this.refreshRequest=this.refreshRequestId=null,this.destroyReport();var i,r=this.getReportFormat(),o="PIVOT",s="../analyzer/images/spacer.gif";
if(this.isClientSideViz()){var a=this.vizModelType;if(i=a.label,this.isLegacyViz())o=this.reportDoc.getChartOption("customChartType").toUpperCase();else{
var n=a.inheritedStyleClasses;o=" "+n.join(" ")+" component-icon-landscape"}var l=this._getVizHelper();
s=l&&l.placeholderImageSrc||s}else i=cvCatalog.VIZ_PIVOT_DESC;return this._vizView&&this._disposeVizView(),
this.nodeReportArea.innerHTML=cv.util.substituteParams(cvCatalog.emptyReportAreaHTML,this.id,cvCatalog.emptyVizArea,o,i,s),
cv.util.setHelpTopics([this.id+"GettingStarted","CV/Business_User/creating_a_new_report.html#start_adding_fields_and_filters"]),
this.dropTargets.reportArea.init(r),this._callRenderingEvents(),this.successState=this.history.current(),
!0}var d=this.emit("preExecution");return d?(this.pivotReportLoaded=!1,this.chartLoaded=!1,
this.refreshTimeStamp=(new Date).getTime(),this.saveUIAttributes(),cv.io.refreshReport(this)):!0;
},_callRenderingEvents:function(){var e=this.byClass("reportArea");this.emit("render",e);
},cancelReport:function(){this.reportBeCanceled=!0,this.hideProgressPane(),this.refreshRequestId&&(this.refreshRequest&&this.refreshRequest.cancel(),
cv.io.cancelAsyncRequest(this.refreshRequestId),this.refreshRequest=this.refreshRequestId=null,
this._revertToLastSuccessState())},getReportXml:function(){return this.reportDoc.getXml();
},getReportFormat:function(){return this.reportDoc.getReportOption("reportTypeEnum");
},getModelAnnotationsJson:function(){return M.stringify(this.modelAnnotations)},getReportPDF:function(e){
(!e||this.isVisualizationPrintable("PDF"))&&(this.saveUIAttributes(),cv.io.getReportInFormat(this.getReportXml(),"PDF",this.isDirty()));
},getReportExcel:function(e){(!e||this.isVisualizationPrintable("EXCEL"))&&(this.saveUIAttributes(),
cv.io.getReportInFormat(this.getReportXml(),"EXCEL",this.isDirty()))},showProgressPane:function(e){
this.reportBeCanceled=!1;var i=I.byId("progressPane");if(i){var o="<div style='float:left' id='progressTooltipDiv'><div class='refresh-icon vertical-align-middle'></div><div style='float:left'>&nbsp;&nbsp;"+cvCatalog.refreshing+"&nbsp;&nbsp;</div></div><div id='progressPaneCancel' class='button-cancel vertical-align-middle'></div>";
i.innerHTML=o,cv.util.show(i);var s=cv.util.getFirstChildByClass(I.byId("refreshTooltip"),"progressPaneHeaderLabel");
if(null!=s&&(s.innerHTML="<span class='refresh-icon vertical-align-middle'></span>&nbsp;&nbsp;<b>"+cvCatalog.refreshing+"</b>"),
t(I.byId("progressPaneCancel"),"click",r.hitch(this,"cancelReport")),!cv.isMobile()){
g.add(I.byId("refreshHeader"),"progressPaneUp"),g.add(I.byId("refreshAction"),"progressPaneContent"),
g.add(I.byId("refreshFooter"),"progressPaneDown");var a=(C.position(i,!0),cv.util.getDojoWidget("refreshTooltip")),n=null;
a._setConnectIdAttr("progressTooltipDiv"),n=cv.util.getFirstChildByClass(a.domNode,"progressPaneContent"),
this.HISTORY_ACTION_LIST="";for(var l=this.pendingActionLen;l<this.actionLog.length;++l)this.HISTORY_ACTION_LIST+="<div style='font-size:11px;width:210px;'>"+this.actionLog[l]+"</div>";
n&&(n.innerHTML=this.HISTORY_ACTION_LIST)}}},_fadeInRefreshReport:function(){a.fadeIn({
duration:3*cv.prefs.fadeTime,node:this.nodeReportArea}).play()},hideProgressPane:function(){
this.log(null,!0);var e="",t=I.byId("progressPane");if(t){var i=cv.util.getDojoWidget("refreshTooltip");
i.close(),this.reportBeCanceled&&(e=cv.util.substituteParams(cvCatalog.refreshPanelCancel,cvCatalog.refreshPanelCancelMsg)),
t.innerHTML=e}},getReportProperties:function(){for(var e={},t=0;t<this.reportDoc.reportProps.length;++t){
var i=this.reportDoc.reportProps[t];e[i]=this.reportDoc.getReportProperty(i),null==e[i]&&(e[i]="");
}return e},setReportProperties:function(e){for(var t in e)this.reportDoc.setReportProperty(t,e[t]);
this.setReportPropsDirty(!0)},toggleActionsPopupMenu:function(e){if(cv.util.getDojoWidget("reportFormatMenu")){
var t=cv.util.getDojoWidget("actionsMenu");if(t){this.isReportFormatPivot()?(cv.util.setMenuItem("PIVOT","checked"),
cv.util.setMenuItem(this.chartMenuItem,"none")):(cv.util.setMenuItem(this.chartMenuItem,"checked"),
cv.util.setMenuItem("PIVOT","none")),cv.util.setMenuItem("cmdGrandTotalRow","true"==this.reportDoc.getReportOption("showRowGrandTotal")?"checked":"none"),
cv.util.setMenuItem("cmdGrandTotalCol","true"==this.reportDoc.getReportOption("showColumnGrandTotal")?"checked":"none");
var i=this.byId("CmdActions"),r=C.position(i,!0);cv.util.showPopupMenu(t,r.x+60,r.y+13),
u.stop(e)}}},toggleGrandTotalRow:function(){this.reportDoc.setReportOption("showRowGrandTotal","true"==this.reportDoc.getReportOption("showRowGrandTotal")?"false":"true"),
this.history.add(new cv.ReportState("actionReportOptions")),this.refreshReport()},
toggleGrandTotalCol:function(){this.reportDoc.setReportOption("showColumnGrandTotal","true"==this.reportDoc.getReportOption("showColumnGrandTotal")?"false":"true"),
this.history.add(new cv.ReportState("actionReportOptions")),this.refreshReport()},
toggleChartTypePopupMenu:function(e){var t=cv.util.getDojoWidget("chartTypeMenu");
if(t){cv.util.setMenuItem(this.chartMenuItem,"checked");var i=I.byId("cmdSelectChartType"),r=C.position(i,!0);
cv.util.showPopupMenu(t,r.x+5,r.y+13),u.stop(e)}},toggleReportFormat:function(e){
var t,i=this.getReportFormat(),r=null;if(e&&e.target)for(r=e.target;!r.id;)r=r.parentNode;
if("PIVOT"==i){if(r&&r.id.indexOf("CmdShowPivot")>=0)return;var o=(this.reportDoc.getChartOption("chartType")||cv.prefs.chartOption,
this.reportDoc.getChartOption("customChartType"));this.history.updateReportUsingPreviousChartTypeState(this,o),
this._initDisplay("JSON","CUSTOM",o),t="actionShowChart"}else{if(r&&r.id.indexOf("CmdShowChart")>=0)return;
this._initDisplay("PIVOT"),t="actionShowPivot"}this.history.add(new cv.ReportState(t)),
this.refreshReport()},setAutoRefresh:function(e,t){cv.prefs.autoRefresh=e,this.reportDoc.setReportOption("autoRefresh",e?"true":"false"),
e||!this.isInitialized||t||this.showLayoutPanel()},showLayoutPanel:function(){this.manager&&!cv.util.isShowing("layoutPanelWrapper")&&this.onToggleReportPane("cmdLayout");
},populateDropZone:function(e){for(var t=this.reportDoc.getChildMembers(e),i=0;t&&i<t.length;++i)this.createGemDomNode(t[i],e);
},populateFilters:function(){var e=this.reportDoc.getChildMembers("filters"),t=this.reportDoc.getSelectionFilters(),i=0;
if(this.timeUnlimited=!0,0==e.length&&0==t.length)this.nodeFilters.innerHTML=cvCatalog["EDIT"==this.mode?"filterSummZoneHint":"filterSummZoneNone"];else{
s.removeChildren(this.nodeFilters);var r,o,a=[],n=[];for(r=0;r<e.length;++r)e[r].selectSingleNode("cv:predicates/cv:predicate")?(o=this.createGemDomNode(e[r],"filters"),
o&&(cv.getFieldHelp().isTimeAttribute(o.getFormula())?a.push(o):n.push(o))):this.reportDoc.removeEmptyFilter(e[r]);
if(a.length>0)for(this.timeUnlimited=!1,r=0;r<a.length;++r)this.nodeFilters.appendChild(a[r].domNode),
i+=a[r].itemCount;if(n.length>0)for(r=0;r<n.length;++r)this.nodeFilters.appendChild(n[r].domNode),
i+=n[r].itemCount;if(t.length>0){var l=D.create("div",{innerHTML:cvCatalog.filterTemplateSelection
}).firstChild;this.nodeFilters.appendChild(l),++i}o=this.createMetricFilterGem(),
o&&(this.nodeFilters.appendChild(o.domNode),++i)}var d=this.byId("FilterCountLabel");
if(d&&(d.innerHTML=0==i?cvCatalog.filterTitleNone:cv.util.substituteParams(i>1?cvCatalog.filterTitlePlural:cvCatalog.filterTitleSingular,i+"")),
this.dropTargets.filters&&this.dropTargets.filters.sync(),this.isEditDisabled()){
for(var c=document.getElementsByClassName("filterAction pentaho-deletebutton"),h=0;h<c.length;h++)c[h].style.display="none";
document.getElementById("remove_filter_metric")&&(document.getElementById("remove_filter_metric").style.display="none");
}},showEditDialogOnColumnHeader:function(e){if("EDIT"==this.mode&&"member"!=e.target.parentNode.getAttribute("type")){
var t;if(e.target.parentNode.parentNode&&(t=e.target.parentNode.parentNode.getAttribute("formula")),
this.currentSelection=this.getGem(e.target.getAttribute("formula")||e.target.parentNode.getAttribute("formula")||t),
this.currentSelection){var i="attribute";this.currentSelection.type==cvConst.TYPE_METRIC&&(i=this.currentSelection.metricType),
"EXPRESSION"==i?this.rptDlg.showEditArithMeasure():"PCTOF"==i||"RANK"==i||"RSUM"==i||"PCTRSUM"==i?this.rptDlg.showEditSummaryMeasure():"VALUE"==i?this.rptDlg.showEditColumn():"attribute"==i?this.rptDlg.showEditColumn():"TREND"==i&&this.rptDlg.showEditTrendMeasure();
}}},showHelpDlg:function(){var e=this.currentSelection.metricType&&"VALUE"!=this.currentSelection.metricType?this.currentSelection.getBaseFieldFormula():this.currentSelection.getFormula();
e&&0!=e.indexOf("[MEASURE:")&&cv.getFieldHelp().showDlg(e)},showPropHelpDlg:function(){
this.rptDlg.show("show","propHelp")},resize:function(e,t){e=parseInt(this.domNode.parentNode.style.width),
t=parseInt(this.domNode.parentNode.style.height),e=isNaN(e)?0:e,t=isNaN(t)?0:t,this.domNode.style.width=e+"px",
this.domNode.style.height=t+"px";var i=t,r=this.byId("ReportTitle");r&&(i-=C.position(r).h);
var o=this.byId("ReportSummary");if(o&&(i-=C.position(o).h),i-="filterPane"==this.topPaneId?C.position(this.nodeFilter).h:0,
0>=i)return!1;if(this.reportWidth==e&&this.reportHeight==i)return!1;this.reportWidth=e,
this.reportHeight=i,this.nodeReportArea.style.width=e+"px",this.nodeReportArea.style.height=i+"px";
var s=this.byId("ReportEmpty");s&&(s.style.height=i+"px"),this.reportHeaders&&this.reportHeaders.updateLayout();
var a=this.byId("Trashcan");return a&&setTimeout(function(){a.style.top=t-140+"px",
a.style.left=e-130+"px"},200),this.vizDiv&&(this.vizDiv.style.height=this.reportHeight+"px",
this.vizDiv.style.width=this.reportWidth+"px",T.publish("/Analyzer/resize",this.reportHeight,this.reportWidth)),
this.setReportName(),!0},setReportName:function(e){try{if(window.parent&&window.parent.PentahoMobile)return;
if(window.parent&&window.parent.mantle_initialized)return}catch(t){}e&&(this.byId("ReportName").innerHTML=cv.util.escapeHtml(e));
var i=(C.position(this.byId("ReportTitle")).w-C.position(this.byId("ReportName")).w)/2;
this.byId("ReportName").style.left=i+"px"},resizeContainer:function(){return this.manager.resize();
},addOptionsForAllMeasures:function(e,t,i,r,o){function s(e,t){return u[t]?u[t]:f[e]?s(e+"_"+ ++f[e],t):(f[e]=1,
e)}function a(e,t){return u[e]>u[t]?1:u[e]<u[t]?-1:0}o=o&&cv.api.util._hasInlineModelingPermission();
var n,l,d,c=[],h=[],u={},p=this.reportDoc.getMetrics(),m=0,g={};for(n=0;n<p.length;++n){
var v=p[n].getAttribute("measureTypeEnum");if("VALUE"==v)l=p[n].getAttribute("formula"),
g[l]=r?!1:!0;else if(l=p[n].getAttribute("id"),i&&l==i){++m;continue}c.push(l)}var f={},b=p.length-m,y=cv.getFieldHelp();
for(p=y.getMeasureList(),n=0;n<p.length;++n)d=p[n].getAttribute("formula"),y.isHidden(p[n])&&!o||g[d]||(h.push(d),
u[d]=s(this.getFieldLabel(d,!0),d));if(0==c.length&&0==h.length)return!1;for(h.sort(a),
c=c.concat(h),e.innerHTML="",n=0;n<c.length;++n){if(n==b&&r){var _=new Option("-------------------------------------------------------","");
cv.addOption(e,_)}var T=b>n?s(this.getFieldLabel(c[n],!0),c[n]):u[c[n]];t&&(T=T.replace(/\]/g,"\\]"));
var _=new Option(T,c[n]);_.setAttribute("title",T),cv.addOption(e,_)}return!0},addOptionsForAttributes:function(e,t){
var i,r=[],o=t?1:0,s=this.reportDoc.getChildMembers("columnAttributes");for(i=0;i<s.length-o;++i)r.push(s[i]);
for(s=this.reportDoc.getChildMembers("rowAttributes"),i=0;i<s.length-o;++i)r.push(s[i]);
if(0==r.length)return!1;e.innerHTML="";var a=!1;for(i=r.length-1;i>=0;--i){var n=r[i].getAttribute("formula"),l=this.getFieldLabel(n,!0),d=new Option(l,n);
d.setAttribute("title",l),cv.addOption(e,d),a||(a=!0)}return a},showFilterDlg:function(){
if(!this.isEditDisabled()){var e=this.currentSelection;if(e){var t,i=e.id;e.getAttribute?t=e.getAttribute("formula"):e.getFormula&&(t=e.getFormula()),
i||t?i&&0==i.indexOf("filter_")?this.filterDlg.show(i):t&&this.rptDlg.showFilterList(t):(t=e.parentNode.getAttribute("formula"),
t&&this.rptDlg.showFilterList(t))}}},showNewFilterDlg:function(){var e=this.currentSelection;
if(e){var t=this.getGem(e.parentNode.id);t&&this.filterDlg.show(t.getFormula())}},
showFilterDlgCondition:function(){var e=this.currentSelection;e&&this.filterDlg.showMetricFilter(e.getFormula(),"CONDITIONS");
},showFilterDlgRank:function(){var e=this.currentSelection;e&&this.filterDlg.showMetricFilter(e.getFormula(),"RANK");
},isDirty:function(){return this.isReportPropsDirty||this.history.isStateDirty()},
isEmpty:function(){return this.reportDoc.isEmpty()},isEditDisabled:function(){return"VIEW"==this.mode&&cv.analyzerProperties["report.viewer.edit.disable"];
},_revertToLastSuccessState:function(){this.history.setTo(this.successState),this.successState&&this.successState.exec(!0),
cv.prefs.autoRefresh&&this.history.setRefreshed(!1),this.history.isStateRefreshed()||cv.util.show(this.nodeReportRefresh),
T.publish("/analyzer/reportDisplayed",this),this.log(cvCatalog.actionCancel,!0)},
_initRptTypeButtons:function(e){var t=I.byId("reportBtns");t&&"EDIT"==this.mode&&("PIVOT"==e?(g.add(I.byId("cmdShowPivot"),"reportDisplayFormatPressed"),
g.remove(I.byId("cmdShowChart"),"reportDisplayFormatPressed"),I.byId("cmdSelectChartType").title=cvCatalog.titleShowChartTypeTT):(g.add(I.byId("cmdShowChart"),"reportDisplayFormatPressed"),
g.remove(I.byId("cmdShowPivot"),"reportDisplayFormatPressed"),I.byId("cmdSelectChartType").title=cvCatalog.titleSwitchChartTypeTT));
},_checkBadFields:function(e){if(this.badFields.length>0){for(var t="",i=0,r=this.badFields.length;r>i;++i)t+="	"+this.badFields[i]+"\n";
var o=cv.util.substituteParams(cvCatalog.warnMissingFields,t);e||alert(o),this.setReportPropsDirty(!0);
}},_validateMaxValue:function(e){if("PIVOT"!=e){var t=this.reportDoc.getChartOption("maxValues"),i=this._getVizApplicationSpec().maxValues,r=cv.api.util._findClosestValueFromArray(i,t);
this.reportDoc.setChartOption("maxValues",r)}},_initDisplay:function(e,t,i,r){var o=this.reportDoc;
e||(e=this.getReportFormat()),t||(t=o.getChartOption("chartType"));var s=o.getChartOption("customChartType");
if(i||(i=s),i!=s)this.savePluginDataToXML("[]");else{var a=this.vizModelType;a&&"analyzer_PIVOT"!==a.v2Id&&this.savePluginDataToXML(this.getPluginDataJSON());
}o.setReportOption("reportTypeEnum",e),o.setChartOption("chartType",t),o.setChartOption("customChartType",i||"");
var n=this._initClientViz();if(null!=n&&(this._handleInitClientVizError(n),e="PIVOT",
this.reportDoc.setReportOption("reportTypeEnum",e),this._initClientViz()),this.hasVizModel){
var l=this.isLegacyViz()?"2.0":"3.0";o.setChartOption("vizApiVersion",l)}this._initRptTypeButtons(e),
this.clearGemList(),this.populateDropZone("measures"),this.populateDropZone("rowAttributes"),
this.populateDropZone("columnAttributes"),this.populateFilters(),this.isEditDisabled()&&(document.getElementById("PM:sprBeforeRemove").style.display="none",
document.getElementById("PM:removeAttr").style.display="none",document.getElementById("PM:removeMetric").style.display="none",
document.getElementById("PM:removeFilter").style.display="none");for(var d=this.reportDoc.getDrillColumns(),c=0;c<d.length;c++){
var h=d[c],u=cv.textContent(h),p=this.validateField(u);p||cv.util.removeNode(h)}this._checkBadFields(r),
this._updateVizModelFromReport(),this._validateMaxValue(e),this.validateLayoutState();
},onGemToggleInChart:function(){var e=this.currentSelection;if(e){var t=!e.isHideInChart();
e.setHideInChart(t);var i="JSON"===this.getReportFormat();this.history.add(new cv.ReportState(t?"actionHide":"actionShow",e.getDisplayLabel(!0))),
this.setVizModelRolesDirty(),i&&this.refreshReport()}},onGemSortDesc:function(){this.setSortOrder(null,"DESC",!0);
},onGemSortAsc:function(){this.setSortOrder(null,"ASC",!0)},onToggleSort:function(e){
this.headerClicked?(this.headerClicked=!1,clearTimeout(this.headerTimeout)):(this.headerClicked=!0,
this.headerTimeout=setTimeout(r.hitch(this,"onToggleSortHandler",e),300))},onToggleSortHandler:function(e){
this.headerClicked=!1;var t=this.findTableCell(e.target);this.currentSelection=this.getGem(t.getAttribute("formula")),
g.contains(t,"sortInactive")?(cv.util.popupSourceNode=t,this.onGemSortAsc()):g.contains(t,"sortActiveAsc")?this.onGemSortDesc():this.onGemSortAsc();
},onShowEditDialogOnColumnHeader:function(e){cv.api.event.isEventDisabled("doubleClick")||this.showEditDialogOnColumnHeader(e);
},onGemConditionalFormatting:function(e){var t=e.target.parentNode.id.substr("PM:condFormat_".length),i=this.currentSelection;
if(i){var r,o=i.getNumberFormat();o.formatShortcut==t?(i.setNumberFormat({formatShortcut:"NONE"
}),r="actionRemoveCondFormat"):(i.setNumberFormat({formatShortcut:t}),r="actionAddCondFormat"),
this.history.add(new cv.ReportState(r,i.getDisplayLabel(!0))),this.refreshReport();
}},onGemToggleSubtotal:function(){var e=this.currentSelection;if(e){var t="true"==e.xmlNode.getAttribute("showSubtotal")?"false":"true";
e.xmlNode.setAttribute("showSubtotal",t),this.history.add(new cv.ReportState("true"==t?"actionShowSubtotal":"actionHideSubtotal",e.getDisplayLabel(!0))),
this.refreshReport()}},onRptExclude:function(){this.updateInTableFilter("EXCLUDE"),
this.setReportPropsDirty(!0)},onRptKeep:function(){this.updateInTableFilter("KEEP"),
this.setReportPropsDirty(!0)},onRptDrillDown:function(){this.updateInTableFilter("KEEP_AND_DRILL"),
this.setReportPropsDirty(!0)},onRptShowAll:function(){this.updateInTableFilter("SHOW_ALL"),
this.setReportPropsDirty(!0)},onRptNonVisualTotal:function(){this.reportDoc.setReportOption("useNonVisualTotals","true"==this.reportDoc.getReportOption("useNonVisualTotals")?"false":"true"),
this.history.add(new cv.ReportState("actionNonVisual")),this.refreshReport()},onRptHideGrandTotal:function(){
var e=this.currentSelection;g.contains(cv.util.getAncestorByTag(e,"TABLE"),"ZONE_columnAttributes")?this.reportDoc.setReportOption("showRowGrandTotal","false"):this.reportDoc.setReportOption("showColumnGrandTotal","false"),
this.history.add(new cv.ReportState("actionHideGrandTotal")),this.refreshReport();
},onResetReport:function(){cv.util.goToURL(window.location)},onResetColumnSize:function(){
this.columnDataFieldWidths=new Array,this.rowFieldWidths=new Array,this.reportHeaders.updateLayout(),
this.isReportPropsDirty=!0;var e=new cv.ReportState("Reset Column Sizes");e.resizeData={
rowFieldWidths:this.rowFieldWidths.slice(0,this.rowFieldWidths.length),columnDataFieldWidths:this.columnDataFieldWidths.slice(0,this.columnDataFieldWidths.length)
};var t=this.history.isStateRefreshed();this.history.add(e),t&&this.history.setRefreshed(!0);
},onToggleReportPane:function(e){var t;if(r.isObject(e)){for(t=e.target;!t.id;)t=t.parentNode;
t=t.id.substring(this.id.length)}else t=e;return this.manager.onToggleReportPane(t);
},hideTruncateMessage:function(e){"closeRowTruncate"==e.target.id?(cv.util.hide(this.nodeRowTruncate),
"None"==this.closeTruncateStatus?this.closeTruncateStatus="RowClose":this.closeTruncateStatus="BothClose"):"closeColTruncate"==e.target.id?(cv.util.hide(this.nodeColTruncate),
"None"==this.closeTruncateStatus?this.closeTruncateStatus="ColClose":this.closeTruncateStatus="BothClose"):"closeTransTruncate"==e.target.id&&cv.api.ui.isFromTransformation&&(cv.util.hide(this.nodeTransTruncate),
this.closeTruncateStatus="BothClose")}});return cv.Report.prototype.cv=cv,cv.Report.prototype.cvConst=cvConst,
cv.Report.prototype.cvCatalog=cvCatalog,e("cv.ReportState",[],{constructor:function(e,t,i){
this.action=e,this.label=e&&t?cv.util.substituteParams(cvCatalog[e],t):cvCatalog[e],
this.label||(this.label=e),this.actionCtx=i,this.ended=!1},pluginDataJSON:"",customChartType:null,
resizeData:{},init:function(e){this.report=e,this.reportXml||(this.reportXml=s.innerXML(e.reportDoc.getReportNode())),
this.updatePluginState(),this.reportTypeEnum=e.reportDoc.getReportOption("reportTypeEnum"),
this.chartType=e.reportDoc.getChartOption("chartType"),this.customChartType=e.reportDoc.getChartOption("customChartType"),
this.resizeData.rowFieldWidths=this.report.rowFieldWidths.slice(0,this.report.rowFieldWidths.length),
this.resizeData.columnDataFieldWidths=this.report.columnDataFieldWidths.slice(0,this.report.columnDataFieldWidths.length),
this.modelAnnotations=this.report.modelAnnotations.slice(0,this.report.modelAnnotations.length),
"Column Resize"!=this.action&&e.log(this.label)},end:function(){if(!this.ended){if(this.ended=!0,
this.report.isLegacyViz())return;this.updatePluginState()}},checkRefresh:function(){
cv.prefs.autoRefresh?this.report.history.setRefreshed():this.report.refreshReport();
},exec:function(e,t){var i=cv.parseXML(this.reportXml);i&&i.documentElement&&(this.ended=!1,
null!=this.report.manager.cmdUndo&&this.report.manager.cmdUndo.title.indexOf("Column Resize")>-1&&"UNDO"==t?(this.report.reportHeaders.updateLayout(this.resizeData.index,-this.resizeData.dx,this.resizeData.colspan),
this.checkRefresh()):null!=this.report.manager.cmdUndo&&this.report.manager.cmdRedo.title.indexOf("Column Resize")>-1&&"REDO"==t?(this.report.reportHeaders.updateLayout(this.resizeData.index,this.resizeData.dx,this.resizeData.colspan),
this.checkRefresh()):null!=this.report.manager.cmdUndo&&(this.report.manager.cmdUndo.title.indexOf("Reset Column")>-1||this.report.manager.cmdRedo.title.indexOf("Reset Column")>-1)?(this.report.columnDataFieldWidths=this.resizeData.columnDataFieldWidths.slice(0,this.resizeData.columnDataFieldWidths.length),
this.report.rowFieldWidths=this.resizeData.rowFieldWidths.slice(0,this.resizeData.rowFieldWidths.length),
this.checkRefresh()):(this.report.columnDataFieldWidths=this.resizeData.columnDataFieldWidths.slice(0,this.resizeData.columnDataFieldWidths.length),
this.report.rowFieldWidths=this.resizeData.rowFieldWidths.slice(0,this.resizeData.rowFieldWidths.length),
this.report.modelAnnotations.length!=this.modelAnnotations.length&&(this.report.modelAnnotations=this.modelAnnotations.slice(0,this.modelAnnotations.length),
this.report.manager.updateCatalog()),this.report.savePluginDataToXML(this.pluginDataJSON),
this.report._clearClientViz(),this.report.openReport(i.documentElement),e||this.report.refreshReport(!1,!0)));
},back:function(e){(this.report.mode&&"VIEW"==this.report.mode||this.report.manager.cmdUndo.title.indexOf("Column")<0)&&this.report.log("UNDO"),
this.exec(e,"UNDO")},forward:function(e){(this.report.mode&&"VIEW"==this.report.mode||this.report.manager.cmdRedo.title.indexOf("Column")<0)&&this.report.log("REDO"),
this.exec(e,"REDO")},copy:function(e){this.reportXml=e.reportXml},setPluginDataJSON:function(e){
this.pluginDataJSON=e},updatePluginState:function(){var e=this.report.vizModelType;
e&&"analyzer_PIVOT"!==e.v2Id&&this.setPluginDataJSON(this.report.getPluginDataJSON());
}}),w}),define("analyzer/report/cv_rptReport.viz",["analyzer/report/cv_rptReport","dojo/_base/lang","dojox/xml/parser","dojo/json","dojo/_base/array","analyzer/LayoutPanel","pentaho/common/propertiesPanel/Configuration","pentaho/data/Table","pentaho/type/changes/Transaction","pentaho/util/object","pentaho/visual/role/adaptation/IdentityStrategy","pentaho/visual/role/adaptation/TupleStrategy","../visual/dataFilterUtils","pentaho/common/Messages","common-ui/vizapi/Events","common-ui/vizapi/VizController","common-ui/vizapi/DataTable"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p){
var m="incompatible-stock-viz",g="missing-visual-model",v="pentaho/visual/base/ModelAdapter",f="pentaho/visual/base/View";
Object.defineProperty(cv.Report.prototype,"vizModelType",{get:function(){var e=this._vizModel;
return e&&e.$type}}),Object.defineProperty(cv.Report.prototype,"hasVizModel",{get:function(){
return null!=this._vizModel}}),Object.defineProperty(cv.Report.prototype,"vizModel",{
get:function(){return this._updateVizModelRolesFromReport(),this._vizModel}}),Object.defineProperty(cv.Report.prototype,"vizModelAdapter",{
get:function(){return this._updateVizModelRolesFromReport(),this._vizModelAdapter;
}}),Object.defineProperty(cv.Report.prototype,"vizView",{get:function(){return this._vizView&&this._updateVizModelRolesFromReport(),
this._vizView}}),t.extend(cv.Report,{_constructViz:function(){this.visualizationController=null,
this.visualization=null,this.highlights=null,pentaho.palettes.splice(0,0,{name:"palette analyzer",
colors:cv.analyzerProperties["chart.series.colors"]}),this._vizModel=null,this._vizModelAdapter=null,
this._vizView=null,this._promiseVizViewEntering=null,this._scrollSize=18,this._vizContainerId="VIZFRAME",
this._isVizModelRolesDirty=!0,this._vizPropsImplied=null},setVizModelRolesDirty:function(){
this._isVizModelRolesDirty=!0},_loadVizRegistryAsync:function(){return cv.api.ui._visualRegistry.loadAsync().then(function(){});
},isClientSideViz:function(){return"JSON"==this.getReportFormat()&&"CUSTOM"==this.reportDoc.getChartOption("chartType");
},isLegacyViz:function(){var e=this.vizModelType;return!(!e||!e.v2Spec)},_getVizApplicationSpec:function(){
var e=this.vizModelType;return null!=e?e.application:null},_getVizHelper:function(){
var e=this.vizModelType,t=cv.pentahoVisualizationHelpers[e.id];return!t&&e.v2Spec&&(t=cv.pentahoVisualizationHelpers[e.v2Id]),
t||null},isVisualizationPrintable:function(e){if(!this.isClientSideViz())return this.isReportFormatPivot();
var t=this.vizModelType,i=t.v2Spec?t.v2Id:t.id,r=cv.io.ajaxLoad("service/checkPrintAvailable",{
vizId:i},!0);return"true"==r?!0:(setTimeout(function(){cv.getActiveReport().rptDlg.showConfirm("CANNOT_PRINT_VIZ",null,{
srcFunc:function(){"PDF"==e?cv.getActiveReport().getReportPDF():cv.getActiveReport().getReportExcel();
}})},500),!1)},getVizDataReq:function(){return this.vizModelType.v2Spec.dataReqs[0].reqs;
},getVizDefiniton:function(){return this.visualization},_initClientViz:function(){
this._clearClientViz();var e=this.isReportFormatPivot(),t=!e&&this.isClientSideViz();
if(!e&&!t)return null;var i=t?this.reportDoc.getChartOption("customChartType"):"analyzer_PIVOT",r=cv.api.ui._visualRegistry.get(i);
if(!r)return this._createMissingVisualModelError(i);var o=r.type,s=!!o.v2Spec;if(!s){
var a=o.application,n=a&&a.isStockVisualization;if(n&&2===cv.vizApiVersion)return this._createIncompatibleStockVizError();
}var l=this._getStoredVizSpec();s&&(this.visualization=this._createLegacyViz(o.v2Spec,l),
l&&(l={model:l.args}));var d=l&&l.model||{};return d.application={_:"analyzer/visual/Application",
cv:cv},this._vizModel=new r(d),this._vizModelAdapter=this.__createVizModelAdapter(this._vizModel),
e||(s||this._prefetchVizView(l),cv.util.setMenuItem(this.chartMenuItem,"none"),this.chartMenuItem=i),
null},__createVizModelAdapter:function(e){var t=e.$type,i=require(v),r=i.extend({
$type:{props:{model:{valueType:e.constructor}}}}),o=!!t.v2Spec;return o&&r.type.eachVisualRole(function(e){
e.strategies=[c,h]}),new r({model:e})},_prefetchVizView:function(e){e||(e={}),e.model=this._vizModel,
e.isAutoUpdate=!1;var t=this._vizModel.$type,i=require(f);return this._promiseVizViewEntering=i.getClassAsync(t).then(function(t){
return new t(e)}),this._promiseVizViewEntering},_createLegacyViz:function(e,i){var r=t.clone(e);
return i&&(i.options&&t.mixin(r.options||(r.options={}),i.options),i.args&&t.mixin(r.args||(r.args={}),i.args)),
r},_clearClientViz:function(){this._vizModel=this._vizModelAdapter=this._vizPropsImplied=this.visualization=this._promiseVizViewEntering=null,
this.setVizModelRolesDirty()},_createIncompatibleStockVizError:function(){var e=p.getString("INCOMPATIBLE_STOCK_VIZ_ERROR"),t=new Error(e);
return t.name=m,t},_createMissingVisualModelError:function(e){var t=p.getString("MISSING_VISUAL_MODEL_ERROR",e),i=new Error(t);
return i.name=g,i},_handleInitClientVizError:function(e){var t;switch(e.name){case m:
t=p.getString("INCOMPATIBLE_STOCK_VIZ_ERROR_TITLE");break;case g:t=p.getString("MISSING_VISUAL_MODEL_ERROR_TITLE");
break;default:t=p.getString("GENERIC_ERROR_TITLE")}this.rptDlg.showError(e.message,null,t);
},_disposeVizView:function(){this._vizView.dispose(),this._vizView=null},_vizWillOverflow:function(e,t){
var i=this._getVizApplicationSpec();return i.willOverflow?i.willOverflow(this._vizView,e,t):{
vertical:!0,horizontal:!0}},isRequiredGembarsFilled:function(){var e=this.isClientSideViz();
if(e){var t=this._getVizHelper();if(t&&t.canRefreshReport)return t.canRefreshReport(this);
}return this.vizModelAdapter.$isValid},_restrictFilterToDrillOrder:function(e){return this.__restrictFilterToList(e,"drillOrder");
},_restrictFilterToSelectionRestriction:function(e){return this.__restrictFilterToList(e,"selectionRestriction");
},__restrictFilterToList:function(e,t){var i=this._getVizApplicationSpec(),r=i&&i[t];
if(!r)return e;var o=this._getFieldsMappedToViz(r);return u.restrictFilter(e,o)},
_getFieldsMappedToViz:function(e){var t=[];if(e){var i=this.vizModelAdapter;e.forEach(function(e){
var r=i.get(e);if(r&&r.hasFields){var o=r.fields.toArray(function(e){return e.name;
});t.push.apply(t,o)}})}return t},createSchemaDataTable:function(e){function t(e){
var t=a.item(e);(t instanceof cv.AttributeGem||t instanceof cv.MetricGem)&&(null!==o&&e===o&&(o=null),
l.push(i(e,t.getFormula())))}function i(e,t){var i=null,r=s.isAttribute(t),o=r?"string":"number";
return r&&(s.hasStartDateTimeKey(t)?i={EntityWithTimeIntervalKey:{duration:s.get(t,"duration"),
isStartDateTimeProvided:!0}}:s.hasNumberKey(t)&&(i={EntityWithNumberKey:{isNumberProvided:!0
}})),{name:e,type:o,isKey:r,p:i}}var r=null,o=null;null!=e&&("string"==typeof e?o=e:r=e);
var s=cv.getFieldHelp(),a=this.gemList,l=[];return a.getKeyList().forEach(t),null!==o&&(r=i(o,o)),
null!==r&&l.push(r),new n({model:l})},_updateVizModelFromReport:function(){var e=this._vizModelAdapter;
if(e){var t=e.model,i=t.$type,r=this.isClientSideViz(),o=this._vizPropsImplied=r?this._generateVizPropsImplied():{};
try{l.enter().using(function(e){this._isVizModelRolesDirty&&this._updateVizModelRolesFromReportCore(),
i.each(function(e){if(!i.isVisualRole(e)){var r=e.name;d.hasOwn(o,r)&&t.set(r,o[r]);
}}),e.accept()},this)}catch(s){console.warn("Refreshing the visual model was rejected: "+s);
}this._isVizModelRolesDirty=!1}},_updateVizModelRolesFromReport:function(){if(this._isVizModelRolesDirty){
var e=this._vizModelAdapter;if(e){try{l.enter().using(function(e){this._updateVizModelRolesFromReportCore(),
e.accept()},this)}catch(t){console.warn("Refreshing the visual model roles was rejected: "+t);
}this._isVizModelRolesDirty=!1}}},_updateVizModelRolesFromReportCore:function(){var e=this._vizModelAdapter;
e.data=this.createSchemaDataTable(),this._vizModelAdapter.$type.eachVisualRole(function(e){
this._updateVizModelRoleFromReport(e.name)},this)},_updateVizModelRoleFromReport:function(e){
this._vizModelAdapter.get(e).fields=this.findGemsByGembarId(e).map(function(e){return e.getId();
})},_generateVizPropsImplied:function(){var e,t=this._getVizHelper();if(t&&t.generateOptionsFromAnalyzerState)e=t.generateOptionsFromAnalyzerState(this);else{
var i=this._getVizApplicationSpec().generateOptionsFromAnalyzerState;i&&(e=i(this));
}return e||{}},_inferVizUsesChartOptions:function(){var e=this._getVizHelper(),t=e&&e.generateOptionsFromAnalyzerState||this._getVizApplicationSpec().generateOptionsFromAnalyzerState;
return Boolean(t)},_getStoredVizSpec:function(){var e=this.isReportFormatPivot(),t=!e&&this.isClientSideViz();
if(!t)return null;var r=i.textContent(this.reportDoc.getPluginData()),o=r?JSON.parse(cv.util.sanitizeJSONString(r)):[];
return o.length?o[0]:null},getPluginDataJSON:function(){var e;if(this.isClientSideViz()){
var t;if(this.isLegacyViz()){e={};var i=this.visualization;i.args&&(e.args=i.args),
i.options&&(e.options=i.options),e.visualizationId=i.id}else{var o=this.vizView;o&&null==this._promiseVizViewEntering?(e=o.toJSON(),
delete e.width,delete e.height):(t=this.vizModel,t&&(e={model:t.toJSON()}));var s=e&&e.model;
s&&this._vizPropsImplied&&(d.eachOwn(this._vizPropsImplied,function(e,t){delete s[t];
}),t=this.vizModel,t&&t.$type.eachVisualRole(function(e){delete s[e.name]}))}}var a=e?[e]:[];
return r.stringify(a)}})}),define("analyzer/report/cv_rptReport2",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dijit/Menu","dijit/MenuItem","dijit/MenuSeparator","dojox/collections/Dictionary","dojox/xml/parser","dijit/Declaration","analyzer/report/cv_rptReport","dojo/dom-class","dojo/_base/event","dojo/dom","dojo/_base/array"],function(declare,on,query,lang,Menu,MenuItem,MenuSeparator,Dictionary,parser,Declaration,cv_rptReport,domClass,event,dom,array){
lang.extend(cv.Report,{appendGem:function(e,t){if(!this.checkDuplicateGem(e)&&!this.isGemMetricValueAndUnmapped(this.getGem(e)))return!1;
if(this._getGemsInHierarchy(e))return this.insertGemInHierarchy(e,t);var i=cv.getFieldHelp().isAttribute(e);
return this.insertGem(e,i?"rowAttributes":"measures","append",t)},checkDuplicateGem:function(e,t){
var i,r=this.gemList.getKeyList();if(!r||0==r.length)return!0;for(var o=0;o<r.length;++o){
var s=this.gemList.item(r[o]);if(r[o]==e||s.type==cvConst.TYPE_METRIC&&"VALUE"==s.metricType&&s.getFormula()==e){
i=s;break}}return i?(t||this.rptDlg.showError(["errorDuplicateItemInReport",i.getDisplayLabel()],"CV/Business_User/working_with_fields.html"),
!1):!0},checkGemHierarchy:function(e,t,i,r,o){if("rowAttributes"==e||"columnAttributes"==e){
var s=this._getGemsInHierarchy(t);if(!s||s[0].getZone()==e)return!0;if(r){for(var a="",n=[],l=0;l<s.length;++l)l>0&&(a+=", "),
a+=s[l].getDisplayLabel(),n.push(s[l]);n.push(this.getGem(t)),this.pendingAction={
func:"moveHierarchy",params:{list:n,zoneId:e,refId:r.refId,pos:r.pos}},this.rptDlg.showConfirm(["promptMoveFieldHierarchy",i,a],"CV/Business_User/working_with_fields.html#about_field_hierarchies",{
srcObj:this,srcFunc:"moveHierarchy"})}else o||this.rptDlg.showError(["errorBreakFieldHierarchy",i,s[0].getDisplayLabel()],"CV/Business_User/working_with_fields.html#about_field_hierarchies");
return!1}return!0},isGemMetricValueAndUnmapped:function(e){return null!=e&&e.type===cvConst.TYPE_METRIC&&"VALUE"===e.metricType&&(e.isHideInChart()||null==e.getGembarId());
},checkColumnSelectionFilters:function(e,t){if("columnAttributes"==e){var i=this.reportDoc.getSelectionFilters();
if(i.length>0)return t||this.rptDlg.showError(["errorColumnSelectionFilters"]),!1;
}return!0},clearGemList:function(){this.currentSelection=null,this.gemList.clear(),
this.badFields=[],this.badFilters=!1,this.setVizModelRolesDirty()},createGem:function(e){
if(e.gemType==cvConst.TYPE_METRIC&&"VALUE"!=e.metricType&&"EXPRESSION"!=e.metricType){
var t=this.getGem(e.formula);if(t){var i=t.xmlNode.selectSingleNode("cv:displayLabels/cv:displayLabel");
i&&i.getAttribute("label")&&(e.label=cv.util.substituteParams(cvCatalog["metric"+e.metricType],i.getAttribute("label")),
e.locale=i.getAttribute("locale"))}}else"measures"!=e.zoneId||e.metricType||(e.metricType="VALUE");
var r=this.reportDoc.createNode(e);return this.createGemDomNode(r,e.zoneId)},createGemDomNode:function(e,t){
var i;switch(cvConst.defaultGemTypes[t]){case cvConst.TYPE_ATTRIBUTE:i=new cv.AttributeGem(e,this);
break;case cvConst.TYPE_METRIC:i=new cv.MetricGem(e,this);break;case cvConst.TYPE_FILTER:
i=new cv.FilterGem(e,this,!1),i.bad||i.createDomNode();break;default:return null}
return i.bad?null:(t&&i.setZone(t),this.gemList.add(i.getId(),i),i)},createMetricFilterGem:function(){
var e=this.reportDoc.getMetricFilterNode();if(!e)return null;var t=new cv.FilterGem(e,this,!0);
return t.bad?null:(t.setZone("filters"),t.createDomNode(),this.gemList.add(t.getId(),t),
t)},createSpecialMetricGem:function(e){e.gemType=cvConst.TYPE_METRIC;var t=this.createGem(e);
return this.insertGem(t,e.refGem,"after",!0),t},getFieldLabel:function(e,t){if(!e)return"";
var i=null,r=null;if("string"==typeof e?i=e:lang.isObject(e)&&(e.id&&this.gemList.item(e.id)?r=this.gemList.item(e.id).getDisplayLabel(!0):i=e.getAttribute("formula")),
!r){if(!i)return"";var o=this.getGem(i);r=o?o.getDisplayLabel(!0):cv.getFieldHelp().get(i,"displayLabel");
}return r||(r=cv.util.parseMDXExpression(i,!1)),t?r:cv.util.escapeHtml(r)},getFieldLabelPlural:function(e,t){
if(!e)return"";var i=null,r=null;if("string"==typeof e?i=e:lang.isObject(e)&&(e.id&&this.gemList.item(e.id)?r=this.gemList.item(e.id).getDisplayLabelPlural(!0):i=e.getAttribute("formula")),
!r){if(!i)return"";var o=this.getGem(i);r=o?o.getDisplayLabelPlural(!0):cv.getFieldHelp().get(i,"displayLabelPlural");
}return!r||t?r:cv.util.escapeHtml(r)},getGem:function(e,t){if(!e)return null;if("string"==typeof e){
if(this.gemList.contains(e))return this.gemList.item(e);t||(t="VALUE")}else if(!e.xmlNode)return null;
var i=this.gemList.getKeyList();if(!i||0==i.length)return null;for(var r=0;r<i.length;++r){
var o=this.gemList.item(i[r]);if(o&&(e.xmlNode&&o.xmlNode==e.xmlNode||o.getFormula()==e&&o.metricType==t))return o;
}return null},getGemFromDomNode:function(e){if(!e)return null;if(e.id){var t=this.getGem(e.id);
if(t)return t}var i=cv.util.getAttribute(e,"formula");return"measure"==e.getAttribute("type")?this.getGem(i,e.getAttribute("metrictype")):this.getGem(i);
},_getGemsInHierarchy:function(e){for(var t=cv.getFieldHelp().getHierarchy(e),i=[],r=0;t&&r<t.length;++r){
var o,s=t[r];s!=e&&(o=this.getGem(s),o&&i.push(o))}return 0==i.length?null:i},getSummaryFacet:function(e,t){
var i=this.getGem(e,t);return i?i.getMetricFacet():null},getTrendNumberOnAncestors:function(e){
var t=cv.getFieldHelp().getHierarchy(e);if(!t)return null;for(var i=0;i<t.length;++i){
var r=t[i];if(r==e)break;var o=this.reportDoc.getNode('cv:report/cv:measures/cv:measure/cv:trendFacet[@trendAttributeFormula="'+r+'"]');
if(o)return{ancestor:r,trend:this.getGem({xmlNode:o.parentNode})}}return null},insertGem:function(e,t,i,r,o){
var s,a,n="object"==typeof t?t:this.getGem(t);n?a=n.getZone():(a=t,0==a.indexOf(this.id)&&(a=a.substring(this.id.length)),
n=this.reportDoc.getReportZoneNode(a)),s="object"==typeof e?e:this.getGem(e);var l;
if(s?(s.setZone(a),l=o?o:s.getHistoryActionCode("Move")):(s=this.createGem({zoneId:a,
formula:e}),l=o?o:s.getHistoryActionCode("Add")),this.isReportFormatPivot()||null!=s.getGembarId())this.setVizModelRolesDirty();else{
var d;if("append"!==i&&"measures"!==a)d=n.getGembarId();else{var c=this.getNextAvailableGembarForField(s.getId());
null!==c&&(d=c.name)}if(d)if(s.setGembarId(d),this.setVizModelRolesDirty(),"after"===i){
var h,u=n.getGembarOrdinal();if(h="measures"==a?this.reportDoc.getReportNode().selectNodes("*/cv:measure"):this.reportDoc.getReportNode().selectNodes("*/cv:attribute"))for(var p=0,m=h.length;m>p;p++){
var g=h[p];if(g.nodeType===Node.ELEMENT_NODE){var v=g.getAttribute("gembarOrdinal");
v>u&&g.setAttribute("gembarOrdinal",++v)}}s.setGembarOrdinal(++u)}else s.setGembarOrdinal(this.getNextOrdinal(d));
}var f;if("append"!=i?(f=this.reportDoc.getReportZoneNode(a).childNodes.length,"VALUE"==s.metricType?this.updateReportResizeParams("add",f,i,"measure"):this.updateReportResizeParams("add",f,i)):"VALUE"==s.metricType&&null!=this.reportHeaders&&this.reportHeaders.columnHeaderContainer.getElementsByTagName("COL").length>n.childNodes.length&&this.updateReportResizeParams("add",n.childNodes.length,"before","measure"),
"before"==i?n.xmlNode.parentNode.insertBefore(s.xmlNode,n.xmlNode):"after"==i?n.xmlNode.parentNode.insertBefore(s.xmlNode,n.xmlNode.nextSibling):"append"==i&&n.appendChild(s.xmlNode),
!r){var b={formula:s.getFormula()};this.history.add(new cv.ReportState(l,s.getDisplayLabel(!0),b));
}return this.resizeContainer(),r||this.refreshReport(),s},insertGemInHierarchy:function(e,t,i){
var r=cv.getFieldHelp().getHierarchy(e);if(!r)return null;for(var o=null,s=null,a=0;a<r.length;++a){
var n=r[a];if(n==e){if(o){s="after";break}s="before"}else{var l=this.getGem(n);if(l){
if(i&&l.zone!=i)continue;if(o=l,o&&s)break}}}return o&&s?this.insertGem(e,o,s,t):null;
},moveHierarchy:function(){if(this.pendingAction&&"moveHierarchy"==this.pendingAction.func){
for(var e=this.pendingAction.params,t=0;t<e.list.length;++t){var i=e.list[t],r=i.getFormula(),o=i.getSortOrder();
this.removeGem(i,!0,null,!0),i=0==t?this.insertGem(r,e.refId,e.pos,!0):this.insertGemInHierarchy(r,!0,e.zoneId),
i&&i.setSortOrder(o)}this.history.add(new cv.ReportState("actionMoveHierarchy")),
this.refreshReport()}},onMouseOverFilters:function(e){var t=cv.util.getAncestorByClass(e.target,"filterItem");
t&&t==this.currentSelection||!this.currentSelection||(this._setFilterSelected(this.currentSelection,!1),
this.currentSelection=t),t&&(this._setFilterSelected(t,!0),this.currentSelection=t);
},removeFilter:function(e,t){var i=/^(filter_.+)_(\d+)$/,r=i.exec(e);if(!r)return!1;
var o=this.getGem(r[1]);if(!o)return!1;if(o.isNumeric)cv.util.removeNode(this.reportDoc.getNode("cv:report/cv:filters/cv:filter/cv:conditions")),
cv.util.removeNode(this.reportDoc.getNode("cv:report/cv:filters/cv:filter/cv:topBottom")),
this.reportDoc.removeEmptyFilter(o.xmlNode),this.gemList.remove(o.getId());else if(99==r[2]){
var s={formula:o.getFormula(),predicates:new Dictionary};this.reportDoc.updateFilter(s),
this.gemList.remove(o.getId())}else this.reportDoc.removeFilterPredicate(o.xmlNode,r[2])||this.gemList.remove(o.getId());
if(cv.dlgWidget&&cv.dlgWidget.open){var a=r[1],n=this.getGem(a);if(n){this.rptDlg.load(this.getFieldLabel(a.substring(7)),cv.util.escapeHtml(a.substring(7)))||cv.dlgWidget.hide();
var l=this.rptDlg.byId("predicateList");domClass.add(l,"unlocked"),domClass.add(l,"filterGroup"),
parser.removeChildren(l),l.innerHTML=n.createSummary(!0)}else cv.dlgWidget.hide();
}this.populateFilters(),this.currentSelection=null,t||(o.isNumeric?this.history.add(new cv.ReportState("actionRemoveNumericFilter")):this.history.add(new cv.ReportState("actionRemoveFilter",o.getDisplayLabel(!0)))),
this.setVizModelRolesDirty(),this.resizeContainer(),t||this.refreshReport()},removeCurrentGem:function(e){
e&&!e.tagName&&(e=e.target),e&&(this.currentSelection=this.getGemFromDomNode(e));var t=this.currentSelection;
if(t||(t=this.currentSelection=this.getGemFromDomNode(cv.util.popupSourceNode)),t){
if(!(t instanceof cv.BaseGem)){var i=t.id;return void(i&&0==i.indexOf("filter_")&&this.removeFilter(i));
}var r=t.getZone();if("rowAttributes"==r||"columnAttributes"==r){var o=t.getFormula(),s=t.getDisplayLabel(),a=this.reportDoc.getNode("cv:report/cv:measures/cv:measure/cv:summaryFacet[@breakAttributeFormula='"+o+"']");
if(a&&(a=this.getGem({xmlNode:a.parentNode})))return this.rptDlg.showError(["errorUsedByMetric",s,a.getDisplayLabel()]);
if(this.reportDoc.isUsedByMetricFilter(o))return this.rptDlg.showConfirm(["promptUsedByFilter",s],"CV/Business_User/working_with_filters.html#numeric_filters_larger_than",{
srcObj:this,srcFunc:"removeGem"});var n=this.reportDoc.getNode('cv:report/cv:measures/cv:measure/cv:trendFacet[@trendAttributeFormula="'+o+'"]');
n&&(n=this.getGem({xmlNode:n.parentNode}));var l=cv.getFieldHelp().getHierarchy(o,!1);
if(l){for(var d=!1,c=0,h=!1;c<l.length;++c)if(l[c]==o)h=!0;else if(h&&this.getGem(l[c])){
d=!0;break}if(d)n=null;else if(!n){var u=this.reportDoc.getMetrics("TREND");if(u.length>0)for(var p=array.indexOf(l,o),c=0;!n&&c<u.length;++c){
var m=u[c].selectSingleNode("cv:trendFacet").getAttribute("trendAttributeFormula"),i=array.indexOf(l,m);
if(!(0>i||i>p)){if(n=u[c],this.getGem("filter_"+o))return this.rptDlg.showError(["errorRemoveWithTrendOnAncestor",s,this.getFieldLabel(m),this.getGem({
xmlNode:n}).getDisplayLabel()]);for(var g=i;p>g;++g)if(this.getGem(l[g])){n=null;break;
}}}if(n)return this.rptDlg.showError(["errorUsedByTrendMetric",s,this.getGem({xmlNode:n
}).getDisplayLabel()])}}if(n)return this.rptDlg.showError(["errorUsedByTrendMetric",s,n.getDisplayLabel()]);
}else if("measures"==r&&"VALUE"!=t.metricType){var i=t.getFormula(),a=this.reportDoc.getFirstMetricDependent(i);
if(a&&(a=this.getGem({xmlNode:a})))return this.rptDlg.showError(["errorUsedByMetric",t.getDisplayLabel(),a.getDisplayLabel()]);
if(this.reportDoc.isUsedByMetricFilter(i))return this.rptDlg.showConfirm(["promptUsedByFilter",t.getDisplayLabel()],"CV/Business_User/working_with_filters.html#numeric_filters_larger_than",{
srcObj:this,srcFunc:"removeGem"})}this.removeGem(t,!0),cv.util.popupSourceNode=null;
}},removeGem:function(e,t,i,r){if(e&&"undefined"==typeof e.getFormula&&(e=this.currentSelection),
e){this.setVizModelRolesDirty();for(var o=query(".gemLabel",e.zone),s=0;s<o.length;++s)if(parser.textContent(e.domNode)==parser.textContent(o[s])){
"VALUE"==e.metricType?this.updateReportResizeParams("remove",s,"","measure"):this.updateReportResizeParams("remove",s);
break}t||this.reportDoc.removeFromMetricFilter(e.getFormula())&&this.populateFilters(),
this.gemList.remove(e.getId()),cv.util.removeNode(e.xmlNode),this.currentSelection=null,
i||(i=e.getHistoryActionCode("Remove"));var a={formula:e.getFormula()};e.type==cvConst.TYPE_FILTER&&this.populateFilters(),
this.resizeContainer(),r||(this.history.add(new cv.ReportState(i,e.getDisplayLabel(!0),a)),
this.refreshReport())}},removeCurrentProp:function(){var e=this.currentSelection.getAttribute("name"),t=this.currentSelection.getAttribute("formula"),i=this.getGem(t);
i.removeProperty(e)},addCalcMeasureToDataSource:function(e){var t=this.currentSelection;
if(t||(t=this.currentSelection=this.getGemFromDomNode(cv.util.popupSourceNode)),t){
var i=t.getDisplayLabel(),r=cv.util.isValidMeasureName(i);if(r!==!0)return void cv.Dialog().showError(r);
var o=cv.textContent(t.getMetricFacet()),s=t.getNumberFormat().formatCategory,a=t.getNumberFormat().formatScale,n=t.getCalculateSubtotalsUsingFormula();
if(o.indexOf("[MEASURE:")>=0)return void cv.Dialog().showError(cvCatalog.errorModelingCalcMeasureValidationReportMeasure);
cv.util.createCalcMeasureAnnotation(i,o,i,i,s,a,n);var l=cv.getFieldHelp().manager.report;
l.manager.updateCatalog(),cv.util.convertReportCalcMeasureToModel(t.getFormula(),i),
l.history.add(new cv.ReportState("actionCreateCalculatedMeasure",i)),l.api.operation.refreshReport();
}},_setFilterSelected:function(e,t){t?(domClass.add(e,"filterItemMouseOver"),this.selectedFilterHandle=on(e,"MouseOut",lang.hitch(this,"deselectFilter"))):(domClass.remove(e,"filterItemMouseOver"),
this.selectedFilterHandle&&(this.selectedFilterHandle.remove(),this.selectedFilterHandle=null));
},deselectFilter:function(){this._setFilterSelected(this.currentSelection,!1)},setSortOrder:function(e,t,i,r){
if(e&&"string"==typeof e?e=this.getGem(e):e||(e=this.currentSelection),e)if(this.isReportFormatPivot()){
var o="rowAttributes"==e.getZone()&&e.isLast();if(e.setSortOrder(t),e.metricType||o)for(var s=this.gemList.getKeyList(),a=0;s&&a<s.length;++a){
var n=this.gemList.item(s[a]);n&&n.metricType&&n.getId()!=e.getId()&&n.setSortOrder("NONE");
}if(i)if(e.metricType){var l=this.reportDoc.getChildMembers("rowAttributes");this.history.add(new cv.ReportState("actionSort",e.getDisplayLabel(!0))),
l.length>=2?this.rptDlg.showWarning(["warnSortMetric",this.getFieldLabel(l[l.length-1]),e.getDisplayLabel(),this.getFieldLabel(l[l.length-2])],null,null,null,null,this):this.refreshReport();
}else this.history.add(new cv.ReportState("actionSort",e.getDisplayLabel(!0))),this.refreshReport();
}else{if(e.setSortOrder(t),"rows"==e.getGembarId()||e.metricType)for(var s=this.gemList.getKeyList(),a=0;s&&a<s.length;++a){
var n=this.gemList.item(s[a]);n&&n.metricType&&n.getId()!=e.getId()&&n.setSortOrder("NONE");
}this.history.add(new cv.ReportState("actionSort",e.getDisplayLabel(!0))),this.refreshReport();
}},sortMembers:function(e,t){if(e.caption==t.caption){var i=cv.util.parseMDXExpression(e.formula),r=cv.util.parseMDXExpression(t.formula);
return i==r?0:r>i?-1:1}return e.caption<t.caption?-1:1},onKeepAndShow:function(e){
if(!cv.api.event.isEventDisabled(e.type)){var t=e.target;for("resize"==t.className&&(t=t.parentNode);t&&"TD"!=t.tagName;)t=t.parentNode;
if(t){var i=t.getAttribute("type");if("member"==i){this.currentSelection=t;var r=(this.currentSelection.getAttribute("member"),
this.currentSelection.getAttribute("formula")),o=cv.getFieldHelp().getDirectChild(r);
o&&!this.getGem(o)&&this.updateInTableFilter("KEEP_AND_DRILL")}}}},findTableCell:function(e){
for("resize"==e.className&&(e=e.parentNode);e&&"TD"!=e.tagName;)e=e.parentNode;return e;
},toggleInReportPopupMenu:function(e){var t=this.findTableCell(e.target);if(t){cv.util.popupSourceNode=t;
var i=t.getAttribute("type"),r=cv.util.getDojoWidget(i+"PopMenu");switch(this.currentSelection=null,
i){case"measure":case"attribute":var o=cv.util.getAttribute(t,"formula");this.currentSelection=this.getGem(o),
null!=this.currentSelection&&this.currentSelection.updatePopupMenu();break;case"prop":
this.currentSelection=t;break;case"member":this.currentSelection=t;var s=this.currentSelection.getAttribute("member"),o=this.currentSelection.getAttribute("formula"),a=this.getGem("filter_"+o),n=cv.getFieldHelp().getDirectChild(o),r=cv.util.getDojoWidget(i+"PopMenu");
if(r.domNode&&r.domNode.memberId==s)break;cv.util.disconnectPopupMenu(this,[{id:"PM:membEXCLUDE",
handler:"onRptExclude"},{id:"PM:membKEEP",handler:"onRptKeep"},{id:"PM:membKEEP_AND_DRILL",
handler:"onRptDrillDown"},{id:"PM:membSHOW_ALL",handler:"onRptShowAll"}]),r.destroyDescendants(),
r.domNode.memberId=s,s=parser.textContent(t.firstChild);var l=new MenuItem({id:"PM:membEXCLUDE",
label:cv.util.substituteParams(cvCatalog.menuMembEXCLUDE,s)});r.addChild(l),on(l,"click",lang.hitch(this,"onRptExclude")),
l=new MenuItem({id:"PM:membKEEP",label:cv.util.substituteParams(cvCatalog.menuMembKEEP,s)
}),r.addChild(l),on(l,"click",lang.hitch(this,"onRptKeep")),n&&(l=new MenuItem({id:"PM:membKEEP_AND_DRILL",
label:cv.util.substituteParams(cvCatalog.menuMembKEEP_AND_DRILL,s,this.getFieldLabel(n))
}),r.addChild(l),on(l,"click",lang.hitch(this,"onRptDrillDown"))),a&&!cv.getActiveReport().isEditDisabled()&&(l=new MenuItem({
id:"PM:membSHOW_ALL",label:cv.util.substituteParams(cvCatalog.menuMembSHOW_ALL,this.getFieldLabel(o))
}),r.addChild(l),on(l,"click",lang.hitch(this,"onRptShowAll"))),this.addCustomActionMenuItems(r,i,t,o);
break;case"cell":this.currentSelection=t;var r=cv.util.getDojoWidget(i+"PopMenu");
r.destroyDescendants(),this.addCustomActionMenuItems(r,i,t,"[Measures].[MeasuresLevel]");
break;case"grandTotal":this.currentSelection=t,cv.util.setMenuItem("PM:totalNonVisual","true"==this.reportDoc.getReportOption("useNonVisualTotals")?"checked":"none","enabled"),
cv.util.updateMenuItemCaption("PM:totalHide",domClass.contains(cv.util.getAncestorByTag(t,"TABLE"),"ZONE_columnAttributes")?"menuHideGrandTotalRow":"menuHideGrandTotalCol");
break;default:return}null!=this.currentSelection&&r.hasChildren()&&cv.util.showPopupMenu(r,e.clientX,e.clientY),
event.stop(e)}},_getById:function(e){return dom.byId(e)},_fromJson:function(e){return dojo.fromJson(e);
},buildFilterActionContext:function(){var e={},t=this._getById("pivotTable");return t&&(e=this._fromJson(t.getAttribute("filterCtx"))),
e},buildCellActionContext:function(e){var t={},i=e.getAttribute("type");if("member"==i||"measure"==i)t=this._fromJson(e.getAttribute("ctx"));else if("cell"==i){
var r=e.getAttribute("colindex"),o=e.getAttribute("rowindex"),s={},a=this._query("tr",this.reportHeaders.rowLabelContainer)[o],n=this._query("td[type=member]",a);
if(n.length>0){var l=n[n.length-1].getAttribute("ctx");l&&(s=this._fromJson(l))}var d=this._query("tr",this.reportHeaders.columnHeaderTable),c=this._query("td",d[d.length-1]);
t=this._fromJson(c[r].getAttribute("ctx"));for(var h in s)t[h]=s[h]}return t},addCustomActionMenuItems:function(menu,type,obj,level){
var ctx=this.buildCellActionContext(obj),formula;if(formula="cell"==type?ctx["[Measures].[MeasuresLevel]"]:level){
var customActions=cv.getFieldHelp().getCustomActions(formula);if(0!=customActions.length){
var seperator=!1;this.currentSelection=obj,this.currentCustomActionCtx=ctx,this.currentCustomActionFormula=formula,
this.currentCustomActionType=type;for(var filterCtx=this.buildFilterActionContext(),x=0;x<customActions.length;x++){
var fnObj=eval("cv.extension."+customActions[x].fn+"_validate");if(!fnObj||fnObj(this,this.currentCustomActionFormula,this.currentCustomActionCtx,filterCtx)){
"[Measures].[MeasuresLevel]"==level||seperator||(menu.addChild(new MenuSeparator),
seperator=!0);var mi=new MenuItem({id:"PM:customAction_"+type+customActions[x].fn,
label:customActions[x].label});menu.addChild(mi),dojo.connect(mi,"onClick",this,"handleCustomAction");
}}}}},handleCustomAction:function(e){var fn=e.target.parentElement.id.substring(16+this.currentCustomActionType.length),fnObj=eval("cv.extension."+fn);
if(!fnObj)return void alert("Unable to find custom action function: cv.extension."+fn);
var filterCtx=this.buildFilterActionContext();fnObj(this,this.currentCustomActionFormula,this.currentCustomActionCtx,filterCtx);
},updateFilterProps:function(e,t,i,r){var o=e.predicates,s=null;!r&&t.members&&t.members.sort(this.sortMembers);
var a=o.getKeyList();if("CONTAIN"==t.op||"NOT_CONTAIN"==t.op||("EQUAL"==t.op||"NOT_EQUAL"==t.op)&&!t.preset)for(var n=0;n<a.length;++n){
for(var l=o.item(a[n]),d=0;d<l.length;d++){var c=l[d];if(c.op==t.op&&!c.preset){if(c.ordinal==t.ordinal)break;
if(i||alert(cv.util.substituteParams(cvCatalog.infoMergeFilter,cvCatalog["filterOpString_"+t.op],this.getFieldLabel(e.formula))),
"CONTAIN"==t.op||"NOT_CONTAIN"==t.op)for(var h=c.exp,u=t.exp,p=h.length,m=u.length,g=0;m>g;++g){
for(var v=0;p>v&&u[g]!=h[v];++v);v>=p&&h.push(u[g])}else{c.members.sort(this.sortMembers);
for(var f,b=c.members,y=t.members,v=0,g=0,p=b.length,m=y.length,_=[];p>v||m>g;)if(v>=p)for(;m>g;)_.push(y[g++]);else if(g>=m)for(;p>v;)_.push(b[v++]);else f=this.sortMembers(b[v],y[g]),
0==f?(_.push(b[v++]),++g):f>0?_.push(y[g++]):_.push(b[v++]);c.members=_}s=c,s.ordinal=n+1;
break}}if(s){o.contains(t.ordinal)&&o.remove(t.ordinal);break}}if(!s){s=t;var T=s.ordinal;
if(!T){for(var v=0;v<o.getKeyList().length;v++)o.getKeyList()[v]>T&&(T=o.getKeyList()[v]);
T+=1}var C=[];C.push(s),o.add(T,C)}return s},updateRelativeFilterProps:function(e,t){
var i=t[0].ordinal,r=e.predicates,o=r.getKeyList();if(!i)for(var s=0;s<o.length;s++)parseInt(o[s])>=i&&(i=parseInt(o[s])+1);
for(var s=0;s<t.length&&!t[s].ordinal;s++)t[s].ordinal=i;var a={EQUAL:0,TIME_YAGO:1,
TIME_RANGE_PREV:2,TIME_RANGE_NEXT:3,TIME_AGO:4,TIME_AHEAD:5};t.sort(function(e,t){
return e.op==t.op?0:a[e.op]>a[t.op]?1:-1}),r.add(i,t)},updateInTableFilter:function(e,t,i,r){
var o,s;r?o=t.formula:t?(o=t.formula,s={formula:t.member,caption:t.caption},r=[s]):(o=this.currentSelection.getAttribute("formula"),
s={formula:this.currentSelection.getAttribute("member"),caption:parser.textContent(this.currentSelection.firstChild)
},r=[s]);var a=this.getGem("filter_"+o),n=null;if("SHOW_ALL"==e){if(!a)return;cv.util.removeNode(a.xmlNode.selectSingleNode("cv:predicates")),
0==a.xmlNode.childNodes.length&&this.removeGem(a,!0,null,!0),n=cv.util.substituteParams(cvCatalog.actionSHOW_ALL,this.getFieldLabel(o,!0));
}else{for(var l="",d=0;d<r.length;d++)d&&(l+=", "),l+=r[d].caption;var c,h=this.reportDoc.getFilter(o);
switch(c=h?this.reportDoc.getFilterProps(h):{formula:o,viewFilterEnum:"MULTIPLE"},
e){case"EXCLUDE":case"ADD":var u="ADD"==e?"EQUAL":"NOT_EQUAL";if(c.predicates){for(var p,m,g=c.predicates.getKeyList(),v=!1,f=0;f<g.length;f++){
for(var b=c.predicates.item(g[f]),y=0;y<b.length;y++)if(p=b[y],p.ordinal>m&&(m=p.ordinal+1),
p.op==u){for(var _=0;_<r.length;_++)p.members.push(r[_]);v=!0;break}if(v)break}if(v){
if(p.members.length>cv.analyzerProperties["filter.include.exclude.max.count"])return void this.rptDlg.showError(["errprFilterMaxMembers",cv.analyzerProperties["filter.include.exclude.max.count"]]);
}else{var T=[];C=c.predicates;c.predicates.getKeyList().length+1;T.push({ordinal:m,
op:u,members:r}),C.add(m,T)}}else{var C=new Dictionary,T=[];T.push({ordinal:1,op:u,
members:r}),C.add(1,T),c.predicates=C}n=cv.util.substituteParams(cvCatalog.actionEXCLUDE,l);
break;case"KEEP":var C=new Dictionary,T=[];T.push({ordinal:1,op:"EQUAL",members:r
}),C.add(1,T),c.predicates=C,n=cv.util.substituteParams(cvCatalog.actionKEEP,l);break;
case"KEEP_AND_DRILL":var I=cv.getFieldHelp().getDirectChild(o);if(I){var C=new Dictionary,T=[];
T.push({ordinal:1,op:"EQUAL",members:r}),C.add(1,T),c.predicates=C,this.insertGemInHierarchy(I,!0),
n=cv.util.substituteParams(cvCatalog.actionKEEP_AND_DRILL,l,this.getFieldLabel(I,!0));
}break;default:return}this.reportDoc.updateFilter(c)}return i||(this.history.add(new cv.ReportState(n)),
this.openReport(),this.refreshReport(!1,!0)),n},validateField:function(e,t){if(0==e.indexOf("[MEASURE:"))return!0;
var i=cv.getFieldHelp().get(e);if(!i||cv.getFieldHelp().isHidden(i)&&!t){var r,o=this.getFieldLabel(e);
for(r=0;r<this.badFields.length&&this.badFields[r]!=o;++r);return r==this.badFields.length&&this.badFields.push(o),
!1}return!0},autoRefresh:function(){if(this.history.isEmpty())return!0;try{if("dashboards"==window.parent.PENTAHO_CONTEXT_NAME)return!0;
}catch(e){}if(!cv.prefs.autoRefresh){if(void 0==this.nodeReportArea.lastChild||"autoRefreshDirtyPane"!=this.nodeReportArea.lastChild.className){
cv.util.show(this.nodeReportRefresh);var t=document.createElement("div");t.className="autoRefreshDirtyPane",
t.id="autoRefreshDirtyPaneId",this.nodeReportArea.appendChild(t);var i=dom.byId("progressPane");
cv.util.hide(i),this.statusBar.innerHTML=""}this.history.isStateRefreshed()&&(this._removeAutoRefreshPane(),
cv.util.hide(this.nodeReportRefresh))}return cv.prefs.autoRefresh},_removeAutoRefreshPane:function(){
var e=dom.byId("autoRefreshDirtyPaneId");e&&e.parentNode.removeChild(e)},clickChart:function(e,t){
for(var i=0;i<e.length;i++){var r=e[i];"KEEP"==r.action?this.updateInTableFilter("KEEP",r,!0):(this.updateInTableFilter("KEEP_AND_DRILL",r,!0),
t||this.removeGem(this.getGem(r.formula),null,null,!0))}this.history.add(new cv.ReportState("actionDrillIntoChart")),
this.reportDoc.replaceSelectionItems(),this.openReport(),this.refreshReport(!1,!0);
}})}),define("analyzer/report/cv_rptReport3",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojo/topic","dojo/_base/array","dojo/json","dojox/fx","dojo/dom","dojo/dom-geometry","analyzer/report/cv_rptReport2","pentaho/data/Table","pentaho/data/filter/False","pentaho/type/changes/Transaction","../visual/dataFilterUtils","pentaho/visual/role/util","pentaho/data/util","./cv_rptConst"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m,g,v){
function f(e,t){return e.ordinal-t.ordinal||e.index-t.index}function b(e){var t,i,r,o=[];
if(e){if(e.columnId&&e.columnId.length>0)for(t=0,i=e.columnId.length;i>t;t++)r=e.columnItem[t],
r&&o.push({formula:e.columnId[t],member:r});if(e.rowId&&e.rowId.length>0)for(t=0,
i=e.rowId.length;i>t;t++)r=e.rowItem[t],r&&o.push({formula:e.rowId[t],member:r})}
return o}r.extend(cv.Report,{isChartSelectionsDisabled:function(){var e=this.reportDoc.getChildMembers("columnAttributes").length;
return this.isLegacyViz()?e>1:e>0},onClearSelectionItems:function(e){this.reportDoc.replaceSelectionItems(),
this.isLegacyViz()?(this.visualizationController.highlights=[],this.visualizationController.updateHighlights()):(this._vizModelAdapter.selectionFilter=null,
this._vizView.update()),this.hideSelectionFilterButtons()},onApplySelectionItems:function(e){
var t=this.reportDoc.getSelectionItems();if(0!=t.length){var i=this.isChartSelectionsDisabled();
if(i)return void this.rptDlg.showError(["actionSelectionFilterDisabledTooltip"]);var r=this.reportDoc.getChildMembers("columnAttributes").length,o="INCLUDE";
if(("cmdSelectionExclude"==e.target.id||"cmdSelectionExclude"==e.target.parentNode.id)&&(o="EXCLUDE"),
t=this.reportDoc.getSelectionItems(),1==r)for(var s={},a=0,n=t.length;n>a;++a)for(var l=t[a].selectNodes("cv:selectionMember"),d=0,c=l.length;c>d;++d){
var h=l[d],u={formula:h.getAttribute("formula"),member:h.getAttribute("member")};u.caption=cv.util.parseMDXExpression(u.member,!1),
"INCLUDE"!=o||s[u.formula]||(s[u.formula]=!0,this.updateInTableFilter("SHOW_ALL",u,!0)),
this.updateInTableFilter("INCLUDE"==o?"ADD":"EXCLUDE",u,!0)}else this.reportDoc.addSelectionFilters(t,o);
this.reportDoc.replaceSelectionItems(),"INCLUDE"==o?this.history.add(new cv.ReportState("actionKeepSelectedItems")):this.history.add(new cv.ReportState("actionExcludeSelectedItems")),
this.populateFilters(),this.refreshReport(),this.hideSelectionFilterButtons()}},removeSelectionFilters:function(e){
this.reportDoc.removeSelectionFilters(),this.populateFilters(),this.history.add(new cv.ReportState("actionRemoveSelectionFilters")),
this.resizeContainer(),e||this.refreshReport()},isReportFormatPivot:function(){return"PIVOT"===this.getReportFormat();
},displayClientSideReport:function(e){function t(){s&&(s.dispose(),s=null);var e=n._vizView;
if(a===e){for(;r.hasChildNodes();)r.removeChild(r.firstChild);r.appendChild(e.domContainer),
e.domContainer.style.visibility="inherit"}}if(this.isLegacyViz())return this._displayClientSideReportLegacy(e);
try{this.visualizationController&&(this.visualizationController.dispose(),this.visualizationController=null),
this.resizeSubscription&&this.resizeSubscription.remove();var i=this.reportDoc.getSelectionItems();
0===i.length&&(this.highlights=[]);var r=this.nodeReportArea,o=this._promiseVizViewEntering;
if(!o){if(this._vizView)return this._updateVizView(e,r.offsetWidth,r.offsetHeight)["catch"](this._updateVizViewRejected.bind(this));
o=this._prefetchVizView()}var s=this._vizView,a=null,n=this,l=n._vizModelAdapter;return o.then(function(i){
function s(e){for(var t=[],i=e.getNumberOfColumns(),r=0;i>r;r++)"string"===e.getColumnType(r)&&t.push(e.getColumnId(r));
return t}if(n._promiseVizViewEntering===o){n._promiseVizViewEntering=null,n._vizView=a=i;
var d=r.offsetWidth,c=r.offsetHeight;i.domContainer=n._createVizDomContainer(d,c),
i.on("execute",{init:function(e,t){n._executeActionInitHandler(t)},"do":function(e,t){
n._executeActionHandler(t)}});var h=n.isChartSelectionsDisabled();i.on("select",{
init:function(e,t){if(h)return void e.reject("Selection is disabled");var i=l._convertFilterToExternal(t.dataFilter),r=n._restrictFilterToSelectionRestriction(i);
return"false"===r.kind?void e.reject("Empty selection"):void(r.equals(i)||(t.dataFilter=l._convertFilterToInternal(r)));
}});var p=cv.analyzerProperties["filter.selection.max.count"]||200,g={},f=0;return l.on("will:change",function(e){
var t=e.changeset;if(t.hasChange("selectionFilter")){var i=l.data,r=l.measureFieldNames;
if(r.length>0){var o=v.getColumnIndexesByIds(i,r),a=v.buildRowPredicateNotAllNullColumns(o);
i=v.filterByPredicate(i,a)}var n=s(i);if(0===n.length)return void(l.selectionFilter=u.instance);
var d=l.selectionFilter.toExtensional(i,n),c=m.limitSelection(p,d,g,f);l.selectionFilter=c,
c.equals(d)||cv.getActiveReport().rptDlg.showConfirm(["infoExceededMaxSelectionItems",p],"SELECT_ITEM_LIMIT_REACHED");
}}),l.on("did:change",function(e){var t=e.changeset;if(t.hasChange("selectionFilter")){
g={},f=0;var i=l.selectionFilter.toDnf();if("or"===i.kind){var r=i.operands;f=r.count;
for(var o=0;o!==f;++o){var s=r.at(o),a=s.$contentKey;g[a]=!0}}var d=l.$type,c=t.propertyNames.some(function(e){
return"data"===e||d.isVisualRole(d.get(e))}),h=c;n.onSelectionChange(h)}}),n._updateVizView(e,d,c).then(t,function(e){
return t(),n._updateVizViewRejected(e)})}})}catch(d){alert(d.message)}},_createVizDomContainer:function(e,t){
var i=this._vizModel.$type.inheritedStyleClasses.join(" ")+" component-container",r=this._vizContainerId+Math.ceil(1e7*Math.random()).toString(20),o=document.createElement("DIV");
return o.setAttribute("id",r),o.setAttribute("class",i),o.setAttribute("style","position: absolute; top: 0; left: 0; visibility: hidden; width: "+e+"px; height: "+t+"px; "),
document.body.appendChild(o),this.vizDiv=o,o},_updateVizView:function(e,t,i){function r(e,t){
var i=l._vizWillOverflow(t,e);l._updateVizOverflow(t,e,i,!0)}var s=this._vizView,a=this._vizModelAdapter,n=new h(e);
p.enter().using(function(e){s.width=t,s.height=i,a.data=n,a.selectionFilter=null,
e.accept()});var l=this;return s.update().then(function(){l.resizeSubscription=o.subscribe("/Analyzer/resize",r);
var e=l._vizWillOverflow(t,i);l._updateVizOverflow(t,i,e)})},_updateVizOverflow:function(e,t,i,r){
var o=this._vizView,s=i.vertical,a=i.horizontal;if(r||s||a){var n=e-(s?this._scrollSize:0),l=t-(a?this._scrollSize:0);
o.configure({width:n,height:l}),o.update().then(function(){var e=o.domContainer;s?e.classList.add("vertical-axis-overflow"):e.classList.remove("vertical-axis-overflow"),
a?e.classList.add("horizontal-axis-overflow"):e.classList.remove("horizontal-axis-overflow");
})["catch"](function(){})}},_updateVizViewRejected:function(e){if(e&&"no-data"===e.name){
var t={id:"reportNoDataMsg"},i=cv.util.substituteParams("EDIT"===this.mode?cvCatalog.reportNoDataMsgHTML:cvCatalog.reportSuccessMsgHTML,cvCatalog.reportNoDataMsg);
return this.displayReport(i,t),null}return Promise.reject(e)},_displayClientSideReportLegacy:function(e){
try{var t=this.reportDoc.getSelectionItems();0==t.length&&(this.highlights=[]),this.localData=e;
var i=(this.reportDoc.getChildMembers(["measures"]),JSON.parse(cv.util.sanitizeJSONString(e))),r=i.colors,s=i.formatStrings;
delete i.colors,delete i.formatStrings;var a=new pentaho.DataTable(i);if(this._addGeoMetadata(a),
this._vizView&&this._disposeVizView(),this.visualizationController&&this.nodeReportArea.firstChild&&this.nodeReportArea.firstChild.id==this._vizContainerId&&this.visualizationController.currentViz==this.visualization)this.visualizationController.setDataTable(a),
this.visualizationController.setMemberPalette(r),this.visualizationController.setFormatInfo(s),
this.visualizationController.highlights=this.highlights,this.visualizationController.updateVisualization(this._generateVizPropsImplied());else{
this.destroyReport();var n=this.nodeReportArea.offsetHeight,l=this.nodeReportArea.offsetWidth;
for(this.vizDiv=document.createElement("DIV"),this.vizDiv.id=this._vizContainerId,
this.vizDiv.setAttribute("style","position:absolute; top:0; left:0; width:"+l+"px; height:"+n+"px; overflow: auto");this.nodeReportArea.firstChild;)this.nodeReportArea.removeChild(this.nodeReportArea.firstChild);
this.nodeReportArea.appendChild(this.vizDiv),this.visualizationController&&(this.visualizationController.dispose(),
this.visualizationController=null);var d=this,c=document.createElement("DIV");c.setAttribute("style","position:absolute; top:0; left:0; width:"+l+"px; height:"+n+"px"),
c.setAttribute("id","vizdiv0"),this.vizDiv.appendChild(c);var h=new pentaho.VizController(0);
this.visualizationController=h,pentaho.events.addListener(h,"select",function(){return d.selectChartItems.apply(d,arguments);
}),pentaho.events.addListener(h,"doubleclick",function(){return d._chartDoubleClickHandler.apply(d,arguments);
}),h.setDomNode(c),h.setDataTable(a),h.setMemberPalette(r),h.setFormatInfo(s),h.highlights=this.highlights,
h.setVisualization(this.visualization,this._generateVizPropsImplied()),this.resizeSubscription&&this.resizeSubscription.remove(),
this.resizeSubscription=o.subscribe("/Analyzer/resize",function(e,t){c.style.height=e+"px",
c.style.width=t+"px",h.resize(t,e)})}}catch(u){alert(u.message)}},_addGeoMetadata:function(e){
for(var t="geoRole",i=0,r=e.getNumberOfColumns();r>i;i++){var o=this.manager.fieldHelp.get(e.getColumnId(i));
if(o){var s=o.getAttribute(t);if(s){switch(s){case"country":s="Country";break;case"state":
s="CountrySubdivision";break;case"county":s="CountrySecondarySubdivision";break;case"city":
s="Municipality";break;case"postal_code":s="PostalCode";break;case"latitude":s="Latitude";
break;case"longitude":s="Longitude"}e.setColumnProperty(i,t,s)}}}return e},getDoubleClickTooltip:function(e){
var t=this._getDoubleClickAction(b(e));if(t)switch(t.type){case"hyperlink":var i=this.getGem(t.level).getLink(),r=i.getAttribute("type");
if("URL"===r||"FILE"===r){var o=i.getAttribute("toolTip");return o||(o=cvCatalog.chartTooltipHyperlinkDefaultTitle),
cv.util.substituteParams(cvCatalog.chartTooltipFooterHyperlink,o)}if("DASHBOARD"===r)return cvCatalog.chartTooltipFooterContentlink;
break;case"drilldown":var s=this.manager.fieldHelp.getDirectChild(t.level);return cv.util.substituteParams(cvCatalog.chartTooltipFooterDrillDown,cv.util.parseMDXExpression(s,!0));
}return null},_getDoubleClickAction:function(e){var t=e.map(function(e){return e.formula;
}),i=this._getHyperlinkLevel(t);if(i)return{type:"hyperlink",level:i};var r=this._getDrillLevel(t);
return r?{type:"drilldown",level:r}:null},_getDrillLevel:function(e){return this.__getLevelFormula(e,this._getDrilldownGemBars(),function(e,t){
var i=this.manager.fieldHelp,r=this,o=i.getChildLevels(e),s=o.some(function(e){return null!==r.getGem(e);
});if(s)return null;if(!i.getDirectChild(e))return null;if(!this.isLegacyViz()&&this._getVizApplicationSpec().keepLevelOnDrilldown){
var a=this.vizModelAdapter,n=a.$type.get(t),l=this.findGemsByGembarId(t).length,d=n.fields.countRangeOn(a,{
ignoreCurrentMode:!0});if(l+1>d.max)return null}return e})},_getHyperlinkLevel:function(e){
return this.__getLevelFormula(e,this._getHyperlinkGemBars(),function(e){var t=this.getGem(e);
return t.getLink()?e:null})},__getLevelFormula:function(e,t,i){if(0===t.length)return null;
for(var r,o,s=0;s<t.length;s++){o=t[s];for(var a=this.findGemsByGembarId(o).map(function(e){
return e.getFormula()}),n=a.length-1;n>=0;n--){var l=a[n],d=e.indexOf(l);if(-1!==d){
var c=e[d];if(r=i.call(this,c,o),null!==r)return r}}}return null},_getDrilldownGemBars:function(){
var e=this._getVizApplicationSpec().drillOrder;if(e)return e;e=[];var t=!1;return this.vizModelAdapter.$type.eachVisualRole(function(i){
if(i.hasAnyCategoricalModes)switch(i.name){case"multi":break;case"columns":t=!0;break;
default:e.push(i.name)}}),t&&e.unshift("columns"),e},_getHyperlinkGemBars:function(){
return this._getVizApplicationSpec().hyperlinkOrder||this._getDrilldownGemBars()},
_buildChartItemActionContext:function(e){var t,i,r={};if(e.columnId)for(t=0,i=e.columnId.length;i>t;t++)r[e.columnId[t]]=e.columnItem[t];
if(e.rowId)for(t=0,i=e.rowId.length;i>t;t++)r[e.rowId[t]]=e.rowItem[t];return r},
_executeActionInitHandler:function(e){var t=this._vizModelAdapter._convertFilterToExternal(e.dataFilter),i=m.toAnalyzerSelectionFormat(t);
if(i.length>0){var r=i[0],o=b(r),s=this._getDoubleClickAction(o);s&&"drilldown"===s.type&&(t=this._restrictFilterToDrillOrder(t),
e.dataFilter=this._vizModelAdapter._convertFilterToInternal(t))}},_executeActionHandler:function(e){
var t=this._vizModelAdapter._convertFilterToExternal(e.dataFilter),i=m.toAnalyzerSelectionFormat(t),r={
selections:i};this._chartDoubleClickHandler(r)&&e.done()},_chartDoubleClickHandler:function(e){
if(e.selections.length>0){var t=e.selections[0],i=this._buildChartItemActionContext(t),r=this.emit("chartDoubleClick",i);
if(!r)return!0;this.selectDoubleClick(t)}return!1},selectDoubleClick:function(e){
var t=b(e),i=this._getDoubleClickAction(t);if(i)switch(i.type){case"hyperlink":for(var r=0,o=t.length;o>r;r++)if(t[r].formula===i.level){
t[r].clickLevel=!0;break}this.linkDlg.performAction(t);break;case"drilldown":t.forEach(function(e){
e.action=e.formula===i.level?"KEEP_AND_DRILL":"KEEP",e.caption=cv.util.parseMDXExpression(e.member,!1);
});var s=this._getVizApplicationSpec();this.clickChart(t,s.keepLevelOnDrilldown)}
},onSelectionChange:function(e){var t=this._vizModelAdapter.selectionFilter,i=m.toAnalyzerSelectionFormat(t),r={
selections:i};this.selectChartItems(r,e)},selectChartItems:function(e,t){this.selectTriggered(e,t);
var i=[];e.selections.forEach(function(e){i.push(this._buildChartItemActionContext(e));
},this),this.emit("chartSelectItems",i)},selectTriggered:function(e,t){this.isLegacyViz()?(this.highlights=e.source.controller.highlights,
this.visualizationController.highlights=this.highlights,this.visualizationController.updateHighlights()):(this.highlights=e.selections,
t||this._vizView.update());for(var i='<selectionItems xmlns="http://www.pentaho.com" >',r=0;r<this.highlights.length;r++){
var o,s=this.highlights[r],a=s.colItem||s.columnItem,n=s.colId||s.columnId,l=s.rowItem,d=s.rowId;
if((a||l)&&(i+='<selectionItem op="SELECT" type="CategoryItem">'),"undefined"!=typeof a)for(o=0;o<a.length&&o<n.length;o++)i+='<selectionMember member="'+cv.util.escapeHtml(a[o])+'" formula="'+cv.util.escapeHtml(n[o])+'"/>';
if("undefined"!=typeof l)for(o=0;o<l.length&&o<d.length;o++)i+='<selectionMember member="'+cv.util.escapeHtml(l[o])+'" formula="'+cv.util.escapeHtml(d[o])+'"/>';
(a||l)&&(i+="</selectionItem>")}i+="</selectionItems>";var c=cv.parseXML(i).documentElement;
this.reportDoc.replaceSelectionItems(c.cloneNode(!0));var h=this.reportDoc.getSelectionItems();
0!=h.length?this.showSelectionFilterButtons():this.hideSelectionFilterButtons()},
getNextAvailableGembarForField:function(e){var t=this.createSchemaDataTable(e),i=g.getBestRoleForAddingField(this.vizModelAdapter,e,{
alternateData:t});return i},findGemsByGembarId:function(e){var t,i,r=[],o=this.reportDoc.getChildMembers("rowAttributes");
for(t=0;t<o.length;t++)i=this.getGem(o[t].getAttribute("formula")),i||(i=this.createGemDomNode(o[t],"rowAttributes")),
this.isReportFormatPivot()?"rows"==e&&r.push(i):i.getGembarId()==e&&r.push(i);for(o=this.reportDoc.getChildMembers("columnAttributes"),
t=0;t<o.length;t++)i=this.getGem(o[t].getAttribute("formula")),i||(i=this.createGemDomNode(o[t],"columnAttributes")),
this.isReportFormatPivot()?"columns"==e&&r.push(i):i.getGembarId()==e&&r.push(i);for(o=this.reportDoc.getChildMembers("measures"),
t=0;t<o.length;t++)i=this.getGem(o[t].getAttribute("id")),i||(i=this.createGemDomNode(o[t],"measures")),
this.isReportFormatPivot()?"measures"==e&&r.push(i):i.getGembarId()==e&&r.push(i);
return this.isReportFormatPivot()||r.sort(function(e,t){var i=e.getGembarOrdinal(),r=t.getGembarOrdinal();
return r>i?-1:i>r?1:0}),r},validateLayoutState:function(){function e(){c.eachVisualRole(function(e){
h.push(e)}),h.sort(f)}function t(){var e,t,r;for(r=d.reportDoc.getChildMembers("columnAttributes"),
e=0,t=r.length;t>e;e++)i(r[e],!1);for(r=d.reportDoc.getChildMembers("rowAttributes"),
e=0,t=r.length;t>e;e++)i(r[e],!1);for(r=d.reportDoc.getChildMembers("measures"),e=0,
t=r.length;t>e;e++)i(r[e],!0);Object.keys(u).forEach(function(e){u[e].sort(o)}),d.setVizModelRolesDirty();
}function i(e,t){if(!t||"true"!==e.getAttribute("hideInChart")){var i=e.getAttribute("formula"),r=t?e.getAttribute("id"):i,o=e.getAttribute("gembarId"),s=o||"",a=+(o&&e.getAttribute("gembarOrdinal"))||0,n=u[s];
void 0===n&&(u[s]=n=[]),n.push({id:r,formula:i,index:p++,element:e,roleName:o,roleOrdinal:a
})}e.removeAttribute("gembarOrdinal"),e.removeAttribute("gembarId")}function r(e,t){
return e.index-t.index}function o(e,t){return e.roleOrdinal-t.roleOrdinal||r(e,t);
}function s(){h.forEach(function(e){var t=e.name,i=u[t];void 0!==i&&(delete u[t],
a(i))});var e=[];Object.keys(u).forEach(function(t){e.push.apply(e,u[t])}),e.sort(r),
a(e)}function a(e){e.forEach(n)}function n(e){var t=null,i=e.id,r=e.roleName;if(null!=r){
var o=c.get(r,!0);null!==o&&(t=g.testAddFieldAtAutoPosition(d.vizModelAdapter,r,i,{
alternateData:m}))}return null==t&&(t=g.getBestRoleForAddingField(d.vizModelAdapter,i,{
alternateData:m}),null==t)?!1:(l(e.element,t.name,t.fieldPosition),!0)}function l(e,t,i){
e.setAttribute("gembarId",t),e.setAttribute("gembarOrdinal",-1);for(var r=d.findGemsByGembarId(t),o=0,s=1,a=r.length;a>s;s++)o===i&&o++,
r[s].setGembarOrdinal(o++);e.setAttribute("gembarOrdinal",i),d.setVizModelRolesDirty();
}if(!this.isReportFormatPivot()){var d=this,c=this.vizModelAdapter.$type,h=[],u=Object.create(null),p=0,m=this.createSchemaDataTable();
e(),t(),s()}},getNextOrdinal:function(e){var t,i,r=-1,o=this.reportDoc.getChildMembers("rowAttributes");
for(i=0;i<o.length;i++)o[i].getAttribute("gembarId")===e&&(t=parseInt(o[i].getAttribute("gembarOrdinal")),
t>r&&(r=t));for(o=this.reportDoc.getChildMembers("columnAttributes"),i=0;i<o.length;i++)o[i].getAttribute("gembarId")===e&&(t=parseInt(o[i].getAttribute("gembarOrdinal")),
t>r&&(r=t));for(o=this.reportDoc.getChildMembers("measures"),i=0;i<o.length;i++)o[i].getAttribute("gembarId")===e&&(t=parseInt(o[i].getAttribute("gembarOrdinal")),
t>r&&(r=t));return r+1},savePluginDataToXML:function(e){var t=this.reportDoc.getUIAttributes();
cv.util.removeNode(t.selectSingleNode("cv:pluginData"));var i=cv.parseXML('<pluginData xmlns="http://www.pentaho.com"><![CDATA['+e+"]]></pluginData>").documentElement;
t.appendChild(i.cloneNode(!0))},hideSelectionFilterButtons:function(){var e=l.byId("selectionFilterPanel");
e&&cv.util.hide(e)},showSelectionFilterButtons:function(){var e=l.byId("selectionFilterPanel");
if(e)return void(cv.util.isHidden(e)&&(e.style.height="0px",cv.util.show(e),n.wipeTo({
node:e,duration:150,height:cv.isMobile()?35:27}).play()));var i=document.createElement("div");
i.id="selectionFilterPanel",i.innerHTML='<div class="btnContainer"><button onclick="this.blur();" style="border-top-right-radius:0px; border-bottom-right-radius:0px;" type="button" class="pentaho-button" id="cmdSelectionKeepOnly" title="Keep only selected items">'+cvCatalog.btnSelectionKeepOnly+'</button></div><div class="btnContainer" style="margin-left: -5px;"><button onclick="this.blur();" style="border-top-right-radius:0px; border-bottom-right-radius:0px; border-top-left-radius:0px; border-bottom-left-radius:0px;" type="button" class="pentaho-button" id="cmdSelectionExclude" title="Exclude selected items">'+cvCatalog.btnSelectionExclude+'</button></div><div class="btnContainer" style="margin-left: -5px;"><button onclick="this.blur();" style="border-top-left-radius:0px; border-bottom-left-radius:0px;" type="button" class="pentaho-button" id="cmdClearSelections" title="Clear all selected items">'+cvCatalog.btnClearSelections+"</button></div>",
this.nodeReportArea.appendChild(i),e=l.byId("selectionFilterPanel"),e.style.marginLeft=(d.position(l.byId(this.nodeReportArea)).w-d.position(e).w)/2+"px",
e.style.height="0px";var o=l.byId("cmdSelectionKeepOnly"),s=l.byId("cmdSelectionExclude"),a=l.byId("cmdClearSelections");
t(o,"click",r.hitch(this,"onApplySelectionItems")),t(s,"click",r.hitch(this,"onApplySelectionItems")),
t(a,"click",r.hitch(this,"onClearSelectionItems")),n.wipeTo({node:e,duration:150,
height:cv.isMobile()?35:27}).play()},insertField:function(e,t,i,r,s){if(this.isReportFormatPivot()){
var a;if("columns"==e?a="columnAttributes":"rows"==e?a="rowAttributes":"measures"==e&&(a="measures"),
"measures"!=a){var n;if(n=-1==i&&void 0==r.previousGemBar?this.checkGemHierarchy(a,r.formula,this.getFieldLabel(r.formula)):this.checkGemHierarchy(a,r.formula,this.getFieldLabel(r.formula),{
refId:a,pos:"append"}),!n)return o.publish("/analyzer/reportDisplayed",this),!1}var l=this.reportDoc.getChildMembers(a);
if(0==l.length)this.insertGem(r.formula,a,"append",s);else{var d="before";-1!=i&&t>i&&(d="after");
var c=t;c>=l.length&&(c--,d="after");var h=null!=l[c].getAttribute("id")?l[c].getAttribute("id"):l[c].getAttribute("formula");
this.insertGem(r.formula,h,d,s)}}else{var u="Move";-1==i&&void 0==r.previousGemBar&&(this.appendGem(r.formula,!0),
u="Add");var p=this.getGem(r.formula);p.setGembarId(e),p.setGembarOrdinal(-1),this.setVizModelRolesDirty();
for(var m=p.getHistoryActionCode(u),g=this.findGemsByGembarId(e),v=0,f=1;f<g.length;f++)v==t&&v++,
g[f].setGembarOrdinal(v++);p.setGembarOrdinal(t);var b={formula:p.getFormula()};s||this.history.add(new cv.ReportState(m,p.getDisplayLabel(!0),b));
}}})}),define("analyzer/report/cv_rptGem",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dijit/Menu","dojox/collections/Dictionary","dojo/dnd/Source","dijit/_base/popup","dijit/Declaration","analyzer/report/cv_rptReport3","dojo/dom-class","dijit/MenuItem","dijit/MenuSeparator","dijit/PopupMenuItem","dijit/registry","dojo/_base/event","dojo/_base/array","dojo/dom-construct"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m,g,v,f){
e("cv.BaseGem",null,{constructor:function(e,t){this.report=t,this.handles=[]},type:null,
htmlTemplate:null,commonCssClass:"dropZoneItem",cssClass:null,cssClassHover:null,
popMenu:null,label:null,xmlNode:null,domNode:null,zone:null,getLink:function(){return null;
},getFormula:function(){return this.xmlNode.getAttribute("formula")},getUniqueId:function(){
return this.getFormula()},getId:function(){return this.getUniqueId()},getXmlAttributes:function(){
return this.xmlNode.attributes},getTagName:function(){return this.xmlNode.tagName;
},getZone:function(){return this.zone},getName:function(e){var t=cv.getFieldHelp().get(this.getFormula(),"displayLabel");
return t?e?t:cv.util.escapeHtml(t):""},getNamePlural:function(e){var t=cv.getFieldHelp().get(this.getFormula(),"displayLabelPlural");
return t?e?t:cv.util.escapeHtml(t):""},getDisplayLabel:function(e,t){var i=t?this.xmlNode.selectSingleNode("cv:displayLabels/cv:displayLabel[locale='"+t+"']"):this.xmlNode.selectSingleNode("cv:displayLabels/cv:displayLabel"),r=i&&i.getAttribute("label")?i.getAttribute("label"):this.getName(!0);
return r?e?r:cv.util.escapeHtml(r):""},getDisplayLabelPlural:function(e,t){var i=t?this.xmlNode.selectSingleNode("cv:displayLabels/cv:displayLabel[locale='"+t+"']"):this.xmlNode.selectSingleNode("cv:displayLabels/cv:displayLabel"),r=i&&i.getAttribute("labelPlural")?i.getAttribute("labelPlural"):this.getNamePlural(!0);
return r?e?r:cv.util.escapeHtml(r):""},getGembarId:function(){return this.xmlNode.getAttribute("gembarId");
},setGembarId:function(e){this.xmlNode.setAttribute("gembarId",e)},getGembarOrdinal:function(){
return this.xmlNode.getAttribute("gembarOrdinal")},setGembarOrdinal:function(e){this.xmlNode.setAttribute("gembarOrdinal",e);
},setDisplayLabel:function(e,t,i){this.report.reportDoc.updateDisplayLabel(this.xmlNode,e,t,i),
this.updateDomNode()},getCalculateSubtotalsUsingFormula:function(){return this.xmlNode.getAttribute("calculateSubtotalsUsingFormula");
},setCalculateSubtotalsUsingFormula:function(e){this.report.reportDoc.updateCalculateSubtotalsUsingFormula(e,this.xmlNode);
},isLast:function(){var e=this.xmlNode.parentNode.selectNodes("cv:"+this.xmlNode.tagName);
return e[e.length-1]==this.xmlNode},setXmlNode:function(e){this.xmlNode=e,e.parentNode&&(this.zone=this.report.byId(e.parentNode.tagName));
},setSortOrder:function(e){this.xmlNode.setAttribute("sortOrderEnum","ASC"==e||"DESC"==e?e:"NONE");
},getSortOrder:function(){return this.xmlNode.getAttribute("sortOrderEnum")},setZone:function(e){
this.zone=e},createDomNode:function(){},destroy:function(){v.forEach(this.handles,function(e){
e.remove()}),this.domNode=null},update:function(){},updateDomNode:function(){},onContextMenu:function(e){
this.report.currentSelection=this;var t=cv.util.getDojoWidget(this.popMenu);t&&(this.updatePopupMenu(),
cv.util.showPopupMenu(t,e.clientX,e.clientY),g.stop(e))},onMouseOver:function(e){
this.cssClassHover&&c.add(this.domNode,this.cssClassHover)},onMouseOut:function(e){
this.cssClassHover&&c.remove(this.domNode,this.cssClassHover)},onClick:function(e){
new n.close},updatePopupMenu:function(){},getHistoryActionCode:function(e){return"action"+e;
}}),currentGem=null,e("cv.AttributeGem",cv.BaseGem,{constructor:function(e,t){this.bad=!this.report.validateField(e.getAttribute("formula")),
this.bad?cv.util.removeNode(e):this.setXmlNode(e)},type:cvConst.TYPE_ATTRIBUTE,htmlTemplate:"<div class='gemLabel'>%{0}</div>",
cssClass:"attributeItem",cssClassHover:"attributeItemHover",popMenu:"attributePopMenu",
updatePopupMenu:function(){var e=this.getSortOrder(),t=this.getFormula();this.report.isReportFormatPivot()?this.report.reportDoc.getSortedMetric()&&"rowAttributes"==this.getZone()&&this.isLast()&&(e="NONE"):this.report.reportDoc.getSortedMetric()&&"rows"==this.getGembarId()&&(e="NONE");
var i=this.report.getGem("filter_"+t);cv.util.setMenuItem("PM:attrFilter",i?"checked":"none","enabled"),
cv.util.setMenuItem("PM:attrFilterRank",this.report.reportDoc.isUsedByMetricFilter(t,"RANK")?"checked":"none"),
cv.util.setMenuItem("PM:attrSortAZ","ASC"==e?"checked":"none"),cv.util.setMenuItem("PM:attrSortZA","DESC"==e?"checked":"none");
var r=!this.isLast();cv.util.setMenuItem("PM:attrShowSub",r&&"true"==this.xmlNode.getAttribute("showSubtotal")?"checked":"none",r?"enabled":"disabled"),
this._createHierarchyMenu(),this._createPropertiesMenu()},_createHierarchyMenu:function(){
var e=this.getFormula(),i=cv.getFieldHelp().getHierarchy(e),o=cv.util.getDojoWidget("PM:addHier");
if(!i||i.length<=1)return void o.setDisabled(!0);o.setDisabled(!1);var s=(this.getZone(),
cv.util.getDojoWidget("hierarchyPopMenu"));s&&s.destroyDescendants();for(var a=0;a<i.length;++a){
var l=i[a],d=this.report.getFieldLabel(l);if(l&&d){var c;l==e?c=new h({id:"HierPop:"+l,
label:d,disabled:!0}):this.report.getGem(l)?(c=new h({id:"HierPop:"+l,label:d}),c.iconNode.src=cv.contextPath+"images/checkmark.png"):(c=new h({
id:"HierPop:"+l,label:d}),t(c,"Click",r.hitch(r.hitch({form:l,execute:function(){
cv.getActiveReport().insertGemInHierarchy(this.form),n.close()}},"execute")))),s.addChild(c);
}}},_createPropertiesMenu:function(){var e=this.getFormula(),i=cv.getFieldHelp().getProperties(e);
if(!i||i.length<1)return void cv.util.getDojoWidget("PM:addProp").setDisabled(!0);
cv.util.getDojoWidget("PM:addProp").setDisabled(!1);var s=m.byId("propertiesPopMenu");
s&&s.destroyDescendants(),currentGem=this;var a=new h({id:"PropPop:AllMemberProps",
label:cvCatalog.memberPropertiesAddProps});t(a,"click",function(){currentGem.addAllProperties(),
n.close()}),s.addChild(a),a=new u,s.addChild(a);for(var l=Math.floor((this.report.reportHeight-125)/25),d=this.getProperties(),g=0;g<i.length;++g){
if(g%l==l-1){var v=new o;c.add(v.domNode,"pentaho-menu-outer pentaho-menu");var f=new p({
label:cvCatalog.memberPropertiesMoreProps,popup:v});s.addChild(new u),s.addChild(f),
s=v}var b=i[g];d[b]?(a=new h({id:"PropPop:"+b,label:b}),c.remove(a.iconNode,"dijitNoIcon"),
c.add(a.iconNode,"checked"),t(a,"Click",r.hitch({prop:b,execute:function(){currentGem.removeProperty(this.prop),
n.close()}},"execute"))):(a=new h({id:"PropPop:"+b,label:b}),c.remove(a.iconNode,"dijitNoIcon"),
c.add(a.iconNode,"unchecked"),t(a,"Click",r.hitch({prop:b,execute:function(){currentGem.addProperty(this.prop),
n.close()}},"execute"))),s.addChild(a)}},getProperties:function(){for(var e=this.xmlNode.selectNodes("cv:property"),t={},i=0;i<e.length;++i){
var r=e[i].getAttribute("name");t[r]=r}return t},addProperty:function(e){var t=this.getProperties();
t[e]||(this.report.reportDoc.addMemberProperty(this.xmlNode,e),this.report.history.add(new cv.ReportState("actionAdd",e)),
this.report.refreshReport())},addAllProperties:function(){for(var e=cv.getFieldHelp().getProperties(this.getFormula()),t=this.getProperties(),i=!1,r=0;r<e.length;++r){
var o=e[r];t[o]||(i=!0,this.report.reportDoc.addMemberProperty(this.xmlNode,o))}i&&(this.report.history.add(new cv.ReportState("actionAdd",cvCatalog.memberPropertiesAddProps)),
this.report.refreshReport())},removeProperty:function(e){var t=this.xmlNode.selectSingleNode("cv:property[@name='"+e+"']");
t&&(cv.util.removeNode(t),this.report.history.add(new cv.ReportState("actionRemove",e)),
this.report.refreshReport())},getLink:function(){return this.xmlNode.selectSingleNode("cv:link");
},setLink:function(e,t){var i=this.xmlNode.selectSingleNode("cv:link");i&&cv.util.removeNode(i),
this.report.reportDoc.addLink(this.xmlNode,e,t)},removeLink:function(){var e=this.xmlNode.selectSingleNode("cv:link");
e&&cv.util.removeNode(e)},setSortFormula:function(e){e&&"TOTAL"!=e?this.xmlNode.setAttribute("sortFormula",e):this.xmlNode.removeAttribute("sortFormula");
},getSortFormula:function(){return this.xmlNode.getAttribute("sortFormula")},getHistoryActionCode:function(e){
return"action"+e+"Level"}}),e("cv.MetricGem",cv.BaseGem,{constructor:function(e,t){
var i=e.getAttribute("formula");if(this.bad=i?!this.report.validateField(i):!1,this.popMenu="measurePopMenu",
!this.bad)if(this.metricType=e.getAttribute("measureTypeEnum"),this.isSummaryMetric()){
var r=e.selectSingleNode("cv:summaryFacet");(!r||"LABEL"==r.getAttribute("summaryAcrossEnum")&&!this.report.validateField(r.getAttribute("breakAttributeFormula")))&&(this.bad=!0);
}else if("EXPRESSION"==this.metricType){var o=e.selectSingleNode("cv:expression");
if(o){var s=cv.textContent(o).match(/\[Measures\]\.\[[^\]]+\]/g);if(s)for(var a=0;a<s.length;++a)if(!this.report.validateField(s[a],!0)){
this.bad=!0;break}}else this.bad=!0}else if("TREND"==this.metricType){var n=e.selectSingleNode("cv:trendFacet");
n&&this.report.validateField(n.getAttribute("trendAttributeFormula"))||(this.bad=!0);
}this.bad?cv.util.removeNode(e):(this.id=e.getAttribute("id"),this.id||(this.id=this.report.reportDoc.getNextMetricId(),
e.setAttribute("id",this.id)),this.setXmlNode(e))},type:cvConst.TYPE_METRIC,htmlTemplate:"<div class='gemLabel'>%{0}</div>",
cssClass:"metricItem",cssClassHover:"metricItemHover",popMenuOrigin:"measurePopMenu",
id:null,metricType:null,getFormula:function(){return"VALUE"==this.metricType?this.xmlNode.getAttribute("formula"):this.id;
},getBaseFieldFormula:function(){return"EXPRESSION"==this.metricType?null:this.xmlNode.getAttribute("formula");
},getId:function(){return this.id},getUniqueId:function(){return this.id},getDisplayLabel:function(e,t){
if("VALUE"==this.metricType)return cv.BaseGem.prototype.getDisplayLabel.call(this,e,t);
var i=this.xmlNode.selectSingleNode(t?"cv:displayLabels/cv:displayLabel[locale='"+t+"']":"cv:displayLabels/cv:displayLabel");
if(i&&i.getAttribute("label"))return i.getAttribute("label");var r;return"EXPRESSION"==this.metricType?r=this.id:(r=cv.getFieldHelp().get(this.xmlNode.getAttribute("formula"),"displayLabel",!e),
r||(r=cvCatalog.missingFieldLabel)),cv.util.substituteParams(cvCatalog["metric"+this.metricType],r);
},update:function(e){if(this.isSummaryMetric()){var t=this.xmlNode.selectSingleNode("cv:summaryFacet");
if(!t)return!1;t.setAttribute("summaryAcrossEnum",e.sumAcross),t.setAttribute("useNonVisualTotals",e.sumTotal),
"LABEL"==e.sumAcross?t.setAttribute("breakAttributeFormula",e.sumBreakBy):t.removeAttribute("breakAttributeFormula");
}else if("EXPRESSION"==this.metricType)cv.textContent(this.getMetricFacet(),e.expression);else if("TREND"==this.metricType){
var i=this.getMetricFacet();i.setAttribute("trendTypeEnum",e.trendType),i.setAttribute("amount",e.trendAmount),
i.setAttribute("trendDirectionEnum",e.trendDir),i.setAttribute("trendAttributeFormula",e.trendField);
}e.label&&this.report.reportDoc.updateDisplayLabel(this.xmlNode,e.label),e.numberFormat&&this.setNumberFormat(e.numberFormat),
this.updateDomNode()},updatePopupMenu:function(){for(var e=this.getSortOrder(),t=this.getFormula(),i=this._getSortCtx(),r=this.report.gemList.getKeyList(),o="",s=!0,a=0;a<r.length;++a){
var n=this.report.gemList.item(r[a]);n.type==cvConst.TYPE_ATTRIBUTE&&i[n.getId()]&&"TOTAL"!=i[n.getId()]&&(s||(o+=", "),
o+=cv.util.parseMDXExpression(i[n.getId()]),s=!1)}o=o+" "+cvCatalog.popupMenuNumberSortValue;
var l=o;o.length>25&&(o=o.substr(0,25)+"...");var d=!0;for(var c in i)if(("TOTAL"!=i[c]||this.report.getGem(c).getSortFormula())&&i[c]!=this.report.getGem(c).getSortFormula()){
d=!1;break}var h=cv.util.getDojoWidget("PM:measSortLowHi");h.setLabel(cv.util.substituteParams(cvCatalog.popupMenuNumberSortLowHigh,o)),
h.domNode.title=cv.util.substituteParams(cvCatalog.popupMenuNumberSortLowHigh,l).replace("&#8594;","→"),
h=cv.util.getDojoWidget("PM:measSortHiLow"),h.setLabel(cv.util.substituteParams(cvCatalog.popupMenuNumberSortHighLow,o)),
h.domNode.title=cv.util.substituteParams(cvCatalog.popupMenuNumberSortHighLow,l).replace("&#8594;","→"),
cv.util.setMenuItem("PM:measSortLowHi",d&&"ASC"==e?"checked":"none"),cv.util.setMenuItem("PM:measSortHiLow",d&&"DESC"==e?"checked":"none"),
cv.util.setMenuItem("PM:measFilterCond",this.report.reportDoc.isUsedByMetricFilter(t,"CONDITIONS")?"checked":"none"),
cv.util.setMenuItem("PM:measFilterRank",this.report.reportDoc.isUsedByMetricFilter(t,"RANK")?"checked":"none"),
cv.util.setMenuItem("PM:helpMetric",null,"VALUE"==this.metricType?"enabled":"disabled"),
cv.util.updateMenuItemCaption("PM:inChartHideMetric",this.isHideInChart()?"menuShowOnChart":"menuHideFromChart"),
cv.util.getDojoWidget("newNumberMenu"),cv.util.displayWidget("PM:editMeasureSummary",this.isSummaryMetric()),
cv.util.displayWidget("PM:editMeasureArith","EXPRESSION"==this.metricType);var u="EXPRESSION"==this.metricType&&cv.api.util._hasInlineModelingPermission();
cv.util.displayWidget("PM:addCalcMeasureToDataSourceSeparator",u),cv.util.displayWidget("PM:addCalcMeasureToDataSource",u),
cv.util.displayWidget("PM:editMeasureTrend","TREND"==this.metricType),cv.util.displayWidget("menuSeparator",this.isSummaryMetric()||"TREND"==this.metricType||"EXPRESSION"==this.metricType),
cv.util.getDojoWidget("condFormatMenu");var p=this.getNumberFormat(),m=["COLOR_SCALE_G_Y_R","COLOR_SCALE_R_Y_G","COLOR_SCALE_B_Y_R","COLOR_SCALE_R_Y_B","DATA_BAR_RED","DATA_BAR_GREEN","DATA_BAR_BLUE","TREND_ARROW_GR","TREND_ARROW_RG"];
for(var a in m)cv.util.setMenuItem("PM:condFormat_"+m[a],p.formatShortcut==m[a]?"checked":"none");
this._createSwapWithMeasureMenu()},_createSwapWithMeasureMenu:function(){var e=m.byId("swapMeasurePopMenu");
if(e){var i=this.report.reportDoc.getMetrics();if(i.length<=1||this.report.isReportFormatPivot())return void cv.util.getDojoWidget("PM:swapMeasure").setDisabled(!0);
cv.util.getDojoWidget("PM:swapMeasure").setDisabled(!1);var e=m.byId("swapMeasurePopMenu");
for(e&&e.destroyDescendants(),currentGem=this,x=0;x<i.length;++x){var o=i[x].getAttribute("id");
if(o!=this.id){var s=new h({id:"swapWithPop:"+o,label:this.report.getFieldLabel(o,!0)
});t(s,"Click",r.hitch({measureId:o,execute:function(){currentGem._swapMeasure(this.measureId),
n.close()}},"execute")),e.addChild(s)}}}},_swapMeasure:function(e){var t=this.report.getGem(e),i=this.xmlNode.getAttribute("gembarId"),r=this.xmlNode.getAttribute("gembarOrdinal");
"true"==t.xmlNode.getAttribute("hideInChart")?(this.xmlNode.removeAttribute("gembarId"),
this.xmlNode.removeAttribute("gembarOrdinal"),this.xmlNode.setAttribute("hideInChart","true")):t.xmlNode.getAttribute("gembarId")?(this.xmlNode.setAttribute("gembarId",t.xmlNode.getAttribute("gembarId")),
this.xmlNode.setAttribute("gembarOrdinal",t.xmlNode.getAttribute("gembarOrdinal"))):(this.xmlNode.removeAttribute("gembarId"),
this.xmlNode.removeAttribute("gembarOrdinal")),t.xmlNode.setAttribute("gembarId",i),
t.xmlNode.setAttribute("gembarOrdinal",r),t.xmlNode.removeAttribute("hideInChart"),
this.report.history.add(new cv.ReportState("actionSwapMeasure",this.report.getFieldLabel(e,!0))),
this.report.setVizModelRolesDirty(),this.report.refreshReport()},getNumberFormat:function(){
var e=this.report.reportDoc.getNumberFormat(this.xmlNode);return e||(e="VALUE"==this.metricType?cv.getFieldHelp().get(this.xmlNode.getAttribute("formula"),"format"):"PCTOF"==this.metricType||"PCTRSUM"==this.metricType?{
formatCategory:"Percentage (%)",formatScale:"2"}:{formatCategory:"General Number",
formatScale:"0"},e.formatExpression="",e.formatShortcut="NONE",e.currencySymbol=cv.analyzerProperties["renderer.currency.symbol"]),
e},setNumberFormat:function(e){this.report.reportDoc.setNumberFormat(this.xmlNode,e);
},isSummaryMetric:function(){return v.indexOf(["PCTOF","RSUM","PCTRSUM","RANK"],this.metricType)>-1;
},getMetricFacet:function(){return this.isSummaryMetric()?this.xmlNode.selectSingleNode("cv:summaryFacet"):"TREND"==this.metricType?this.xmlNode.selectSingleNode("cv:trendFacet"):"EXPRESSION"==this.metricType?this.xmlNode.selectSingleNode("cv:expression"):null;
},setGembarId:function(e){this.inherited(arguments),e&&this.setHideInChart(!1)},isHideInChart:function(){
return"true"==this.xmlNode.getAttribute("hideInChart")},setHideInChart:function(e){
e=!!e,this.xmlNode.setAttribute("hideInChart",String(e)),e&&(this.xmlNode.removeAttribute("gembarOrdinal"),
this.xmlNode.removeAttribute("gembarId"))},setSortOrder:function(e){if("ASC"==e||"DESC"==e)for(var t=this._getSortCtx(),i=this.report.gemList.getKeyList(),r=0;r<i.length;++r){
var o=this.report.gemList.item(i[r]);o.type==cvConst.TYPE_ATTRIBUTE&&o.setSortFormula(t[o.getId()]);
}this.inherited(arguments)},_getSortCtx:function(){var e;if(cv.util.popupSourceNode&&(e=dojo.fromJson(cv.util.popupSourceNode.getAttribute("sortctx"))),
!e){e={};for(var t=this.report.gemList.getKeyList(),i=0;i<t.length;++i){var r=this.report.gemList.item(t[i]);
r.type==cvConst.TYPE_ATTRIBUTE&&"columnAttributes"==r.getZone()&&(e[r.getId()]="TOTAL");
}}return e},getHistoryActionCode:function(e){return"action"+e+"Measure"}}),e("cv.FilterGem",cv.BaseGem,{
constructor:function(e,t,i){if(this.isNumeric=i,this.bad=!t.validateField(e.getAttribute("formula")),
!this.bad)if(this.isNumeric){for(var r,o=e.selectNodes("cv:conditions/cv:condition"),s=o.length,a=0;o&&a<o.length;++a)r=o[a],
t.validateField(r.getAttribute("formula"))||(cv.util.removeNode(r),--s);0==s&&o.length>0&&e.removeChild(e.selectSingleNode("cv:conditions")),
r=e.selectSingleNode("cv:topBottom"),r&&!t.validateField(r.getAttribute("formula"))&&(e.removeChild(r),
r=null),r||0!=s||(this.bad=!0)}else{var o=e.selectNodes("cv:predicates/cv:predicate");
o&&0!=o.length||(this.bad=!0);for(var n=cv.getFieldHelp().isTimeAttribute(e.getAttribute("formula")),l=0;l<o.length;++l){
var d=o[l].getAttribute("operatorEnum"),c=o[l].getAttribute("preset");n||!c&&"BETWEEN"!=d&&"BEFORE"!=d&&"AFTER"!=d||(this.bad=!0);
}this.bad&&(t.badFilters=!0)}this.bad?cv.util.removeNode(e):this.setXmlNode(e)},type:cvConst.TYPE_FILTER,
htmlTemplate:cvCatalog.filterTemplate,cssClass:"filterItem",cssClassHover:null,popMenu:"filterPopMenu",
itemCount:0,getUniqueId:function(){return"filter_"+(this.isNumeric?"metric":this.getFormula());
},createDomNode:function(){this.domNode=f.create("div",{innerHTML:this.htmlTemplate
}).firstChild,this.domNode.id=this.getUniqueId(),this.domNode.setAttribute("formula",this.getFormula()),
this.updateDomNode(),t(this.domNode,"contextmenu",r.hitch(this,"onContextMenu"))},
updateDomNode:function(){var e=f.create("div",{innerHTML:this.createSummary()}).childNodes;
if(e&&e.length>0)for(;e.length>0;)this.domNode.appendChild(e[0]);c.add(this.domNode,"unlocked");
},onContextMenu:function(e){if(this.report.currentSelection){cv.util.popupSourceNode=this.domNode;
var t=cv.util.getDojoWidget(this.popMenu);t&&(this.updatePopupMenu(),cv.util.showPopupMenu(t,e.clientX,e.clientY),
g.stop(e))}},updatePopupMenu:function(){var e=this.report.getFieldLabel(this.getFormula());
cv.util.updateMenuItemCaption("PM:addFilter","menuAddFilter",e),cv.util.setMenuItem("PM:editFilter",null,"enabled"),
cv.util.setMenuItem("PM:removeFilter",null,"enabled"),cv.util.setMenuItem("PM:addFilter",null,"enabled"),
cv.util.setMenuItem("PM:removeFilter",null,this.report.currentSelection.id?"enabled":"disabled");
},getViewType:function(){return this.xmlNode.getAttribute("viewFilterEnum")},setViewType:function(e){
this.xmlNode.setAttribute("viewFilterEnum",e),"NONE"!=e?c.add(this.domNode,"unlocked"):c.remove(this.domNode,"unlocked");
},createSummary:function(e){var t="",i=this.report.getFieldLabel(this.getFormula());
if(this.isNumeric){this.itemCount=1;for(var r,o=this.xmlNode.selectNodes("cv:conditions/cv:condition"),a=0;o&&a<o.length;++a)r=o[a],
t+="<div class='filterItemList'>"+cv.util.substituteParams(cvCatalog["filterSummMetric"+r.getAttribute("operator")],{
METRIC:this.report.getFieldLabel(r.getAttribute("formula")),OP1:r.getAttribute("op1"),
OP2:r.getAttribute("op2"),ATTR:i})+"</div>";r=this.xmlNode.selectSingleNode("cv:topBottom"),
r&&(t+="<div class='filterItemList'>"+cv.util.substituteParams(cvCatalog["filterSummMetric"+r.getAttribute("type")],{
METRIC:this.report.getFieldLabel(r.getAttribute("formula")),COUNT:r.getAttribute("count"),
ATTR:i})+"</div>"),this.isNumeric&&(t=cv.util.substituteParams(cvCatalog.filterTemplateMetric,this.getFormula(),t));
}else{for(var n,o=this.xmlNode.selectNodes("cv:predicates/cv:predicate"),l=new s,d=0;d<o.length;++d){
var c=this._createPredicateSummary(o[d]).split("`");if(n=o[d].getAttribute("ordinal"),
l.contains(n))for(var a=0;a<c.length;++a)l.item(n).labels.push(c[a]);else l.add(n,{
operatorEnum:o[d].getAttribute("operatorEnum"),labels:c})}var h=l.getKeyList(),u=h.length;
if(this.itemCount=u,0==o.length)return cvCatalog.filterTemplateNone;!e&&u>1&&(t+=cv.util.substituteParams(cvCatalog.filterTemplateMultiLine,i));
for(var d=0;d<h.length;d++){for(var p="",m=l.item(h[d]).labels,g=0;g<m.length;g++)if(g>0)if(g==m.length-1)if(p.indexOf("<a")>-1)p+=", "+m[g].replace("includes","");else{
var v=l.item(h[d]).operatorEnum,f=" and ";("NOT_CONTAIN"==v||"CONTAIN"==v)&&(f=" or "),
p+=f+m[g].replace("includes","")}else p+=", "+m[g].replace("includes","");else p=m[g];
t+=e||1!=u?cv.util.substituteParams(cvCatalog.filterTemplateAttr,this.getFormula(),"filter_"+this.getFormula()+"_"+h[d],p):cv.util.substituteParams(cvCatalog.filterTemplateSingleLine,this.getFormula(),"filter_"+this.getFormula()+"_"+h[d],i,p);
}}return t},_createPredicateSummary:function(e){for(var t,i="",r="",o=e.getAttribute("operatorEnum"),s=e.selectNodes("cv:member"),a=cv.getFieldHelp().get(this.getFormula()),n=0;s.length>0&&n<s.length;++n){
var l=s[n].getAttribute("formula");l||(n>0?t+=","+s[n].getAttribute("pos"):t=s[n].getAttribute("pos"));
}switch(o){case"EQUAL":case"NOT_EQUAL":if(t){if(!a)return"ERROR";for(var d=cv.getFieldHelp().get(a,"type"),c=t.split(","),h=0;h<c.length;++h)h>0&&(i+="`"),
i+="TIME_DATE"==d?cvCatalog["filterPreset"+cv.getFieldHelp().get(a,"type")+"_"+c[h].replace(",","a").replace("-","n")]:cvCatalog["filterSummR_3_"+c[h].replace("-","n")];
i=cv.util.substituteParams(i,this.report.getFieldLabel(this.getFormula()))}else{if(0==s.length)return cvCatalog.filterTemplateNone;
if(s.length<5)for(var h=0;h<s.length;++h)i+=(h>0?"` ":"")+cv.util.escapeHtml(s[h].getAttribute("caption"));else i=cv.util.substituteParams(cvCatalog.filterSummSimple,cv.util.escapeJavaScript(this.getFormula()),e.getAttribute("ordinal"),s.length);
}break;case"CONTAIN":case"NOT_CONTAIN":var u=e.selectNodes("cv:containsExpression");
if(!u||0==u.length)return cvCatalog.filterTemplateNone;for(var h=0;h<u.length;++h)i+=(h>0?"` ":"")+cv.util.escapeHtml(cv.textContent(u[h]));
break;case"BETWEEN":r=cv.util.escapeHtml(s[1].getAttribute("caption"));case"BEFORE":
case"AFTER":i=cv.util.escapeHtml(s[0].getAttribute("caption"));break;case"TIME_AHEAD":
case"TIME_AGO":case"TIME_RANGE_NEXT":case"TIME_RANGE_PREV":i=t,r=this.report.getFieldLabel(this.getFormula());
break;case"TIME_YAGO":return r=this.report.getFieldLabel(this.getFormula()),cv.util.substituteParams(cvCatalog["filterSumm"+o],r);
case"NUMERIC_BETWEEN":case"NUMERIC_GREATER_THAN":case"NUMERIC_GREATER_THAN_EQUAL":
case"NUMERIC_LESS_THAN":case"NUMERIC_LESS_THAN_EQUAL":i=e.getAttribute("op1"),r=e.getAttribute("op2");
break;default:s.length>0&&(i=cv.util.escapeHtml(s[0].getAttribute("caption")))}return cv.util.substituteParams(cvCatalog["filterSumm"+o],i,r);
},getHistoryActionCode:function(e){return"action"+e+"Filter"}})}),define("analyzer/report/cv_rptDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/xml/parser","analyzer/report/cv_rptGem","dijit/registry","dojo/html","dojo/_base/array","dojo/json","dojo/string","dojo/request","dojo/dom-class","dojo/dom","dojo/dom-style","dijit/registry"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m){
return e("cv.ReportDialog",[cv.Dialog],{constructor:function(e){this.report=e,this.dlgTemplates={
reportOpt_edit:"reportOptionsDlg.html",report_rename:"saveReportDlg.html",report_props:"reportPropsDlg.html",
report_xml:"reportDefDlg.html",create_calculated_measure:"arithNumberDlg.html",edit_calculated_measure:"arithNumberDlg.html",
create_measure:"createMeasureDlg.html",show_measure_properties:"measurePropertiesDlg.html",
show_attribute_properties:"attributePropertiesDlg.html",remove_measure:"removeMeasureDlg.html",
measures_subtotal:"measureDlg.html",measures_summaries:"summaryMetricsDlg.html",summary_new:"singleSummaryDlg.html",
summary_edit:"singleSummaryDlg.html",measures_arith:"arithNumberDlg.html",measures_trend:"trendNumberDlg.html",
arith_edit:"arithNumberDlg.html",trend_edit:"trendNumberDlg.html",gem_edit:"editGemDlg.html",
filter_list:"filterListDlg.html",field_edit:"editFieldDlg.html",fieldHelp_show:"fieldHelpDlg.html",
propHelp_show:"fieldHelpDlg.html"},this.prefixes={reportOpt_edit:"RO_",report_props:"RP_",
report_xml:"RD_",create_calculated_measure:"MA_",edit_calculated_measure:"MA_",measures_create:"MC_",
measures_subtotal:"VF_",measures_summaries:"SM_",summary_edit:"SM_",summary_new:"SM_",
measures_arith:"MA_",measures_trend:"MT_",arith_edit:"MA_",trend_edit:"MT_",gem_edit:"ED_",
filter_list:"FT_",field_edit:"MF_",fieldHelp_show:"FH_",propHelp_show:"FH_",gadget_displaying:"GD_",
remove_measure:"RM_"},this.helpTopics={reportOpt_edit:"CV/Business_User/setting_report_preferences.html",
report_props:"",report_xml:"",measures_subtotal:"CV/Business_User/working_with_calculations.html#displaying_totals_as_averages_max",
measures_summaries:"CV/Business_User/working_with_calculations.html#displaying_percent_rank_etc",
measures_create:"CV/Business_User/working_with_calculations.html#displaying_percent_rank_etc",
summary_edit:"CV/Business_User/working_with_calculations.html#",summary_new:"CV/Business_User/working_with_calculations.html#",
measures_arith:"CV/Business_User/working_with_calculations.html#",measures_trend:"CV/Business_User/working_with_calculations.html#",
arith_edit:"CV/Business_User/working_with_calculations.html#",trend_edit:"CV/Business_User/working_with_calculations.html#",
gem_edit:"CV/Business_User/working_with_fields.html#renaming_a_field",filter_list:"CV/Business_User/working_with_filters.html#filters_on_text_fields",
field_edit:"CV/Business_User/edit_field.html#edit_field",fieldHelp_show:"CV/Business_User/working_with_fields.html#viewing_the_definition_of_a_field",
remove_measure_show:"CV/Business_User/working_with_fields.html#viewing_the_definition_of_a_field",
gadget_displaying:""},this.src=null,this.dataSource=null},destroy:function(){this.src=null,
this.dataSource=null},show:function(e,i,s){function a(e){var t=d.byId("formatCategory"),i=d.byId("formatExpression");
cv.util.hide("ED_formatScaleDiv"),cv.util.hide("ED_currencySymbolDiv"),d.byId("formatExpression").disabled=!0,
"Expression"==t.value?(i.disabled=!1,""==i.value&&(i.value=cvConst.defaultFormatExp)):"Currency ($)"==t.value?(cv.util.show("ED_formatScaleDiv"),
cv.util.show("ED_currencySymbolDiv")):"Default"==t.value||cv.util.show("ED_formatScaleDiv");
}this.dataSource=this.report.currentSelection;var n=this.report.reportDoc;i?this.src=i:this.dataSource&&this.dataSource.getZone()&&(this.src=this.dataSource.getZone()),
this.type=this.src+"_"+e,this.param=s,this.prefix=this.prefixes[this.type],this.dlgTemplate=this.dlgTemplates[this.type],
this.helpTopic=this.helpTopics[this.type],this.defaultFocus=null;var d=this;switch(this.type){
case"reportOpt_edit":if(!this.load())break;for(var c=n.getReportOptions(),h=0,u=c.length;null!=c&&u>h;++h)this.updateHtml(c[h].name,c[h].value);
this.report.manager.disableDrillLinks&&cv.util.hide("RO_drillLinkTable"),cv.util.setHelpTopics(["RO_helpNonVisualTotal","CV/Business_User/working_with_calculations.html#non_visual_totals"]),
this.defaultFocus=this.byId("showEmptyCells");break;case"report_props":if(!this.loadRptProps())break;
var g=this.report.getReportProperties();for(var h in g){var v=this.byId(h);if(v){
if("INPUT"==v.tagName||"TEXTAREA"==v.tagName?v.value=g[h]:v.innerHTML=cv.util.escapeHtml(g[h]),
"description"==h&&""==g[h]&&("INPUT"==v.tagName||"TEXTAREA"==v.tagName?v.value=cvCatalog.RendererNoDescription:v.innerHTML=cv.util.escapeHtml(cvCatalog.RendererNoDescription)),
("created"==h||"update"==h)&&null!=g[h]&&""!=g[h]){var f=cv.util.formatDateString(g[h]);
v.innerHTML=cv.util.escapeHtml(f)}"folder"==h&&"/"==g[h].substring(0,1)&&(v.innerHTML=g[h].substring(1));
}}break;case"report_xml":if(!this.load())break;this.byId("reportDef").value=o.innerXML(n.getReportNode()),
this.byId("pluginData").value=this.report.getPluginDataJSON();break;case"measures_subtotal":
if(!this.dataSource)return;if(!this.load(this.dataSource.getDisplayLabel()))break;
for(var c=this.dataSource.getXmlAttributes(),h=0,u=c.length;null!=c&&u>h;++h)this.updateHtml(c[h].name,c[h].value);
this.defaultFocus=this.byId("showSum"),t(this.byId("showSumTD"),"click",function(){
p.byId("VF_showSum").checked=!p.byId("VF_showSum").checked}),t(this.byId("showAggregateTD"),"click",function(){
p.byId("VF_showAggregate").checked=!p.byId("VF_showAggregate").checked}),t(this.byId("showAverageTD"),"click",function(){
p.byId("VF_showAverage").checked=!p.byId("VF_showAverage").checked}),t(this.byId("showMaxTD"),"click",function(){
p.byId("VF_showMax").checked=!p.byId("VF_showMax").checked}),t(this.byId("showMinTD"),"click",function(){
p.byId("VF_showMin").checked=!p.byId("VF_showMin").checked});break;case"measures_summaries":
if(!this.dataSource||!this.load(this.dataSource.getDisplayLabel()))break;this.param?this.defaultFocus=this.byId(this.param):this.defaultFocus=this.byId("PCTOF"),
this.defaultFocus.checked=!0;break;case"summary_new":if(!this.dataSource)return;var b=this.dataSource.getDisplayLabel();
if(!this.load(cvCatalog.summaryMetricTitle,b))break;var y=this.byId("formatCategory"),_=this.byId("formatScale");
this.byId("name").value=this._getUniqueLabel(cv.util.substituteParams(cvCatalog["metric"+s],b)),
("PCTOF"==s||"PCTRSUM"==s||"RSUM"==s)&&("RSUM"==s?y.value=this.dataSource.getNumberFormat().formatCategory:y.value="Percentage (%)",
_.value="2"),this.byId(s).className="summaryOption";var T=this.byId("field_"+s);this.report.addOptionsForAttributes(T,!0)||(T.disabled=!0,
this.byId("LABEL_"+s).disabled=!0),t(p.byId("dlgBtnPrev"),"click",function(){d.show("summaries",null,d.param);
}),"true"==n.getReportOption("useNonVisualTotals")&&this.displayMsg(cvCatalog.dlgInfoNonvisualTotal),
this.helpTopic+=s,this.defaultFocus=this.byId("ROWS_"+s);break;case"summary_edit":
if(!this.dataSource)return;var C=this.dataSource.metricType,I=this.dataSource.getDisplayLabel();
if(!this.load(cvCatalog.summaryMetricEditTitle,this.report.getFieldLabel(this.dataSource.getBaseFieldFormula())))break;
this.byId("name").value=I,this._updateNumberFormat(this.dataSource,!0),this.byId(C).className="summaryOption";
var T=this.byId("field_"+C);this.report.addOptionsForAttributes(T,!0)||(T.disabled=!0,
this.byId("LABEL_"+C).disabled=!0);var A=this.dataSource.getMetricFacet(),E=A.getAttribute("summaryAcrossEnum");
this.updateHtml("RD_"+C,E),"LABEL"==E&&this.updateHtml(T,A.getAttribute("breakAttributeFormula")),
"true"==n.getReportOption("useNonVisualTotals")&&this.displayMsg(cvCatalog.dlgInfoNonvisualTotal),
this.helpTopic+=C,this.defaultFocus=this.byId("ROWS_"+C);var D=p.byId("dlgBtnPrev");
D&&m.set(D,"display","none"),D=p.byId("dlgBtnSave"),D&&(D.innerHTML="OK");break;case"create_calculated_measure":
case"edit_calculated_measure":case"measures_arith":case"arith_edit":if("create_calculated_measure"==this.type){
if(!this.load(this.report.getFieldLabel(s)," "))break}else if(!this.load())break;this.report.arithNumberDlg.show(s);
break;case"measures_trend":case"trend_edit":if(!this.dataSource)return;var M=this.report.reportDoc.getChildMembers("columnAttributes","rowAttributes"),F=[];
if(M)for(var h=0;h<M.length;++h){var c=M[h].getAttribute("formula"),N=cv.getFieldHelp().getHierarchy(c,!1,!0);
if(N)for(var u=0;u<N.length;++u)-1==l.indexOf(F,N[u])&&F.push(N[u]);else-1==l.indexOf(F,c)&&F.push(c);
}if(0==F.length)return void this.showError("errorNoFieldForTrend");if("trend_edit"==this.type){
if(!this.load(this.report.getFieldLabel(this.dataSource.getBaseFieldFormula())))break;
}else if(!this.load(this.dataSource.getDisplayLabel()))break;var w=this.byId("trendFields");
w.innerHTML="";for(var h=0;h<F.length;++h){var R=F[h];cv.addOption(w,new Option(this.report.getFieldLabel(R,!0),R));
}if(this._updateNumberFormat(this.dataSource,!0),"trend_edit"==this.type){p.byId("dialogTitleText").innerHTML=cvCatalog.trendNumberEditTitle,
this.byId("name").value=this.dataSource.getDisplayLabel(!0);var S=this.dataSource.getMetricFacet();
this.updateHtml("trendType",S.getAttribute("trendTypeEnum")),this.updateHtml("amount",S.getAttribute("amount")),
this.updateHtml("trendFields",S.getAttribute("trendAttributeFormula"))}else this.baseGemFormat=this.dataSource.getNumberFormat().formatCategory,
this.byId("formatScale").value="2";t(this.byId("trendType"),"change",r.hitch(this,"_onclickTrendType"));
break;case"gem_edit":if(!this.dataSource)return;var I=this.dataSource.getDisplayLabel();
if(this.dataSource.metricType){if(!this.load(cvCatalog.editColumn))break}else if(!this.load(I))break;
this.byId("name").innerHTML=this.dataSource.getName();var L=this.byId("displayLabel");
L.value=this.dataSource.getDisplayLabel(!0),this.dataSource.metricType?(cv.util.hide("ED_pluralNameRow"),
cv.util.hide("ED_pluralLabelRow"),this.dataSourceOrigin={},this.dataSourceOrigin.numberFormat=this._updateNumberFormat(this.dataSource,!0),
"VALUE"!=this.dataSource.metricType&&(cv.util.hide("ED_nameRow"),cv.util.hide("blankRow")),
t(this.byId("formatCategory"),"change",a),a()):(this.byId("namePlural").innerHTML=this.dataSource.getNamePlural(),
this.byId("displayLabelPlural").value=this.dataSource.getDisplayLabelPlural(!0),cv.util.hide("ED_formatRow","ED_formatExpRow")),
this.defaultFocus=L;break;case"create_measure":if(!this.load(this.report.getFieldLabel(s)," "))break;
this.report.createMeasureDlg.show(s);break;case"remove_measure":if(!this.load(this.report.getFieldLabel(s)," "))break;
this.report.removeMeasureDlg.show(s);break;case"show_measure_properties":if(!this.load(this.report.getFieldLabel(s)," "))break;
this.report.measurePropertiesDlg.show(s);break;case"show_attribute_properties":if(!this.load(this.report.getFieldLabel(s)," "))break;
this.report.attributePropertiesDlg.show(s);break;case"field_edit":console.log("field_edit");
break;case"filter_list":var P=this.report.getGem("filter_"+s);if(!P)return this.report.filterDlg.show(s);
if(1==P.itemCount)return this.report.filterDlg.show(s,1);if(!this.load(this.report.getFieldLabel(s),cv.util.escapeHtml(s)))break;
var x=this.byId("predicateList");x.innerHTML=P.createSummary(!0);break;case"fieldHelp_show":
var O=cv.getFieldHelp(),v=O.get(s),H=O.get(v,"displayLabelOriginal",!0);H||(H="&nbsp;");
var k=this.report.getFieldLabel(s),I=O.get(v,"displayLabel",!0);if(!this.load(k,I,H))break;
k!=I&&cv.util.show("FH_customLabel"),"nbsp;"!=H&&H!=I&&cv.prefs.isAdmin&&cv.util.show("FH_name");
var z=O.get(v,"displayDescription",!0);z&&this.updateHtml("displayDescription",z),
this.updateHtml("formula",s);var j=O.get(v,"type");"true"==O.get(v,"calculated")&&(j="CALCULATED_"+j),
this.updateHtml("type",cvCatalog["fieldTypes_"+j]);var g=cv.getFieldHelp().getProperties(s);
if(g&&g.length>1){var z="";cv.util.show("FH_memberProperties");for(var h=0;h<g.length;++h){
var V=g[h];0!=h&&(z+=", "),z+=V}this.updateHtml("memberPropertiesDescription",z)}
break;case"propHelp_show":var B=this.dataSource.getAttribute("formula"),G=this.dataSource.getAttribute("name"),O=cv.getFieldHelp(),v=O.get(B),I=this.report.getFieldLabel(B);
if(I||(I=O.get(v,"displayLabel",!0)),!this.load(G,G,G))break;this.updateHtml("displayDescription",cv.util.substituteParams(cvCatalog.memberPropertyHelp,G,I)),
this.updateHtml("type",cvCatalog.fieldTypes_PROPERTY);break;default:return}return this.status?void alert(this.status):(this.showDialog(),
void(this.lastSaveTime=null))},_onclickTrendType:function(e){var t=this.dataSource;
"trend_edit"==this.type&&(t=this.report.getGem(this.dataSource.xmlNode.getAttribute("formula"))),
this.byId("formatCategory").value="PCT_CHANGE"==e.target.value?"Percentage (%)":t.getNumberFormat().formatCategory;
},save:function(e){var t=this.report.reportDoc,i=this.theForm.elements,r=!0;switch(this.type){
case"reportOpt_edit":for(var o=0;o<i.length;++o)("INPUT"==i[o].tagName||"SELECT"==i[o].tagName)&&this.updateXml(t.getReportNode(),i[o]);
this.report.history.add(new cv.ReportState("actionReportOptions"));break;case"report_props":
this.report.setReportProperties({description:this.byId("description").value}),r=!1;
break;case"report_xml":var s=cv.parseXML(this.byId("reportDef").value);if(!s||!s.documentElement||"report"!=s.documentElement.tagName)return this.displayError(cvCatalog.errorReportDefinition);
try{d.parse(this.byId("pluginData").value)}catch(a){return this.displayError("Invalid visualization state JSON");
}this.report.savePluginDataToXML(this.byId("pluginData").value);try{this.report._clearClientViz(),
this.report.openReport(s.documentElement)}catch(a){return this.report.history.current().exec(!0),
this.displayError(cvCatalog.errorReportDefinition)}this.report.history.add(new cv.ReportState("actionImport"));
break;case"measures_subtotal":for(var o=0;null!=this.dataSource&&o<i.length;++o)"INPUT"==i[o].tagName&&this.updateXml(this.dataSource.xmlNode,i[o]);
this.report.history.add(new cv.ReportState("actionEdit",this.dataSource.getDisplayLabel(!0)));
break;case"measures_summaries":var n=this.getRadioGroupValue(this.prefix+"Group");
if(!n){r=!1;break}return this.show("new","summary",n);case"summary_new":var h=c.trim(this.byId("name").value),u=this.report.createSpecialMetricGem({
zoneId:"measures",formula:this.dataSource.getFormula(),metricType:this.param,sumAcross:this.getRadioGroupValue(this.prefix+"RD_"+this.param),
sumTotal:"false",sumBreakBy:this.byId("field_"+this.param).value,refGem:this.dataSource
});this._updateNumberFormat(u),u.setDisplayLabel(h),this.report.history.add(new cv.ReportState("actionAdd",h));
break;case"summary_edit":var h=c.trim(this.byId("name").value),n=this.dataSource.metricType,p=this.getRadioGroupValue(this.prefix+"RD_"+n),m={
sumAcross:p,sumBreakBy:this.byId("field_"+n).value,sumTotal:"false"};this.dataSource.update(m),
this._updateNumberFormat(this.dataSource),this.dataSource.setDisplayLabel(h),t.isUsedByMetricFilter(this.dataSource.getFormula())&&this.report.populateFilters(),
this.report.history.add(new cv.ReportState("actionEdit",h));break;case"create_calculated_measure":
case"edit_calculated_measure":case"measures_arith":case"arith_edit":r=this.report.arithNumberDlg.save();
break;case"measures_trend":case"trend_edit":var m={zoneId:"measures",metricType:"TREND",
formula:this.dataSource.getFormula(),trendType:this.byId("trendType").value,trendDir:this.byId("direction").value,
trendAmount:this.byId("amount").value,trendField:this.byId("trendFields").value,refGem:this.dataSource
},g=cv.getFieldHelp().getHierarchy(m.trendField);if(g)for(var o=l.indexOf(g,m.trendField)+1;o<g.length;++o)if(!this.report.getGem(g[o])&&this.report.getGem("filter_"+g[o]))return this.showError(["errorAddTrendWithFilterOnChild",this.report.getFieldLabel(g[o]),this.report.getFieldLabel(m.trendField)]),
!1;if(!this._validateName())return this.byId("name").focus(),!1;var v=this._validateAmountField(m.trendAmount);
if(v)return this.displayMsg(cvCatalog[v]),this.byId("amount").focus(),!1;var f;"trend_edit"==this.type?(this.dataSource.update(m),
f="actionEdit"):(this.dataSource=this.report.createSpecialMetricGem(m),f="actionAdd");
var h=c.trim(this.byId("name").value);this.dataSource.setDisplayLabel(h),this._updateNumberFormat(this.dataSource),
this.report.history.add(new cv.ReportState(f,h)),"trend_edit"==this.type&&t.isUsedByMetricFilter(this.dataSource.getFormula())&&this.report.populateFilters();
break;case"gem_edit":if(this.dataSource.metricType&&(this._updateNumberFormat(this.dataSource),
"Expression"==this.byId("formatCategory").value)){if(""==this.byId("formatExpression").value)return this.displayError("Format expression cannot be empty.");
var b=cv.util.parseAjaxMsg(cv.io.ajaxLoad("service/ajax/parseReport",{reportXML:this.report.getReportXml(),
annotations:this.report.getModelAnnotationsJson()},!0));if(b&&"error"==b.type)return this.displayError(b.details?b.details:cvCatalog.dlgErrGeneric);
}this.dataSource.setDisplayLabel(c.trim(this.byId("displayLabel").value),c.trim(this.byId("displayLabelPlural").value)),
this.report.populateFilters(),this.report.history.add(new cv.ReportState("actionRename"));
break;case"create_measure":this.report.createMeasureDlg.save();break;case"remove_measure":
this.report.removeMeasureDlg.save();break;case"show_measure_properties":this.report.measurePropertiesDlg.save();
break;case"show_attribute_properties":this.report.attributePropertiesDlg.save();break;
default:r=!1}e||this.report.rptDlg.noHide||cv.dlgWidget.hide(),r&&this.report.refreshReport();
},cancel:function(){switch(this.type){case"gem_edit":this.dataSource.metricType&&this.dataSource.setNumberFormat(this.dataSourceOrigin.numberFormat);
break;case"create_calculated_measure":case"edit_calculated_measure":case"measures_arith":
case"arith_edit":this.report.arithNumberDlg.cancel()}cv.Dialog.prototype.cancel.call(this);
},showEditColumn:function(){this.show("edit","gem")},showEditSummaryMeasure:function(){
this.show("edit","summary")},showEditArithMeasure:function(){this.show("edit","arith");
},showEditTrendMeasure:function(){this.show("edit","trend")},showReplaceAttribute:function(){
this.show("replace","attribute")},showReportOptions:function(){this.show("edit","reportOpt");
},showReportProps:function(){this.show("props","report")},loadRptProps:function(){
if(this.status=null,!this.cache[this.type]){var e=this;h.get(cv.contextPath+"service/templates/"+this.dlgTemplate,{
handleAs:"text",sync:!0}).then(function(t){return cv.util.parseAjaxMsg(t)?void(e.status="errorDlgLoad"):void(e.cache[e.type]=t);
},function(t){e.status="errorDlgLoad"})}if(null!=this.status)return!1;var i=this.loadRptProps.arguments.length>0?cv.util.substituteParams(this.cache[this.type],this.loadRptProps.arguments):this.cache[this.type];
return void 0==cv.dlgWidget&&(cv.dlgWidget=cv.util.getDojoWidget("theDialog")),cv.dlgWidget.setContent('<form id="theDialogForm" action="" onsubmit="return false">'+i+"</form>"),
this.defaultMsg=null,this.theForm=p.byId("theDialogForm"),this.byId("editDescButton")&&t(this.byId("editDescButton"),"click",r.hitch(this,"showEditDesc")),
this.byId("descBtnCancel")&&t(this.byId("descBtnCancel"),"click",r.hitch(this,"hideEditDesc")),
this.byId("descBtnSave")&&t(this.byId("descBtnSave"),"click",r.hitch(this,"saveRptDesc")),
this.byId("closeButton")&&t(this.byId("closeButton"),"click",r.hitch(this,"cancel")),
!0},showReportDefinition:function(){this.show("xml","report")},showSubtotals:function(){
this.show("subtotal")},showNewSummaryOptions:function(){this.show("summaries")},showNewArithBuilder:function(){
this.show("arith")},showNewTrendNumber:function(){this.show("trend")},showCreateMeasureDlg:function(){
this.show("measure","create")},showCreateCalculatedMeasureDlg:function(){this.show("calculated_measure","create");
},showEditCalculatedMeasureDlg:function(){this.show("calculated_measure","edit")},
showRemoveMeasureDlg:function(){this.show("measure","remove")},showMeasurePropertiesDlg:function(){
this.show("measure_properties","show")},showAttributePropertiesDlg:function(){this.show("attribute_properties","show");
},showFilterList:function(e){this.show("list","filter",e)},showEditField:function(){
this.show("edit","field")},remove:function(){switch(this.type){case"attribute_replace":
return void this.report.reportDoc.setReplaced(this.dataSource.getFormula(),null)}
},_updateNumberFormat:function(e,t){var i,r=this.byId("formatCategory"),o=this.byId("formatScale"),s=this.byId("formatExpression"),a=this.byId("currencySymbol");
return t?e?(i=e.getNumberFormat(),i.formatCategory&&(r.value=i.formatCategory),i.formatScale&&(o.value=i.formatScale),
a&&i.currencySymbol&&(a.value=i.currencySymbol),s&&(s.value=i.formatExpression)):(r.selectedIndex=-1,
o.selectedIndex=-1):(i={formatCategory:r.value,formatScale:o.value},a&&(i.currencySymbol=a.value),
s&&(i.formatExpression=s.value),e&&e.setNumberFormat(i)),i},_validateAmountField:function(e){
return u.remove(p.byId("MT_amount"),"invalid"),!cv.util.checkNumber(e)||parseInt(e)<=0||parseInt(e)!=parseFloat(e)?(this.report.filterDlg.setInvalidInputField("MT_amount"),
"dlgErrTrendNumberAmountNumberExpected"):null},_getUniqueLabel:function(e){function t(e){
for(var t=0;t<r.length;++t){var o=i.item(r[t]);if(o.getDisplayLabel()==e)return!0;
}return!1}var i=this.report.gemList,r=i.getKeyList();if(!r||0==r.length)return e;if(!t(e))return e;
for(var o=2,s=e+"_"+o;t(s);)s=e+"_"+ ++o;return s},_validateNumberFormatAndDecimalPlaces:function(){
u.remove(this.byId("formatCategory"),"invalid"),u.remove(this.byId("formatScale"),"invalid");
var e=!0;return this.byId("formatScale").value==cvCatalog.dlgNullSelection&&(this.byId("formatScale").focus(),
u.add(this.byId("formatScale"),"invalid"),e=!1),e||this.displayMsg(cvCatalog.dlgErrNumberFormatOrDecimalRequired),
e},_validateName:function(){return u.remove(this.byId("name"),"invalid"),""==this.byId("name").value?(this.byId("amount")&&this._validateAmountField(this.byId("amount").value)?(u.add(this.byId("name"),"invalid"),
u.add(this.byId("amount"),"invalid"),this.displayMsg(cvCatalog.dlgErrNameAndNmbPeriodRequired)):(u.add(this.byId("name"),"invalid"),
this.displayMsg(cvCatalog.dlgErrNameRequired)),!1):!0},showEditDesc:function(){var e=this.byId("editDescTextArea");
u.remove(this.byId("editDescTextAreaTR"),"hidden"),u.add(this.byId("descDivTR"),"hidden"),
cv.getActiveReport().reportDoc.getReportProperty("description")?e.innerHTML='<input id="RP_hiddenDesc" type="hidden" value="'+this.byId("description").innerHTML.replace(/(["])/gm,"&quot;")+'"><textarea id="RP_description" rows=3>'+this.byId("description").innerHTML.replace(/(["])/gm,"&quot;")+"</textarea>":e.innerHTML='<input id="RP_hiddenDesc" type="hidden" value="'+this.byId("description").innerHTML.replace(/(["])/gm,"&quot;")+'"><textarea id="RP_description" rows=3></textarea>',
u.remove(this.byId("descBtn"),"hidden"),this.byId("editDescDiv").innerHTML="",this.byId("description").focus(),
this.isEditDescHidden=!1,this.isShowingNow=this.isEditDescHidden&&this.isRenamingHidden;
},hideEditDesc:function(){var e=this.byId("editDescDiv");u.add(this.byId("editDescTextAreaTR"),"hidden"),
u.remove(this.byId("descDivTR"),"hidden");this.byId("hiddenDesc").value;e.innerHTML="<div id='RP_description' class='RP_description'>"+this.byId("hiddenDesc").value+"</div>",
u.add(this.byId("descBtn"),"hidden"),this.byId("editDescTextArea").innerHTML="",this.isEditDescHidden=!0,
this.isShowingNow=this.isEditDescHidden&&this.isRenamingHidden},saveRptDesc:function(){
this.report.setReportProperties({description:this.byId("description").value});var e=this.byId("description").value;
this.byId("description").innerHTML=e,this.byId("hiddenDesc").value=this.byId("description").value,
this.hideEditDesc()}})}),define("analyzer/report/cv_rptLinkDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","analyzer/report/cv_rptDlg","dijit/registry","dojo/html","dojo/request","dojo/dom","dojo/has","common-ui/util/URLEncoder"],function(e,t,i,r,o,s,a,n,l,d,c){
return e("cv.LinkDialog",cv.Dialog,{constructor:function(e){this.report=e,this.dlgTemplate="linkDlg.html",
this.prefix="AL_",this.dataSource=null,this.linkTypes=["FILE","URL"]},performAction:function(e){
for(var t,i=0;i<e.length;i++)if(e[i].clickLevel){t=e[i];break}var r=cv.util.parseMDXExpression(t.formula,!1),o=cv.util.parseMDXExpression(t.member,!1),s=this.report.getGem(t.formula),a=s.getLink(),n=a.getAttribute("target"),l=a.getAttribute("type");
if("URL"==l){for(var d=a.getAttribute("url"),i=0;i<e.length;++i){var t=e[i];r=cv.util.parseMDXExpression(t.formula,!1),
o=cv.util.parseMDXExpression(t.member,!1);var h=encodeURIComponent(o);0==o.toLowerCase().indexOf("http")&&(h=o),
d=d.replace("{"+r+"}",h)}this._openUrl(n,d,o)}else if("FILE"==l){var u=a.getAttribute("filePath"),p=c.encodeRepositoryPath(u),m="default";
".xanalyzer"==p.substring(p.length-10,p.length)&&(m="EDIT"==this.report.mode?"editor":"viewer");
var d=c.encode(window.CONTEXT_PATH+"api/repos/{0}/"+m+"?",p),g=a.selectNodes("cv:linkParam"),v=c.encode(CONTEXT_PATH+"api/repos/{0}/parameter",p),f=null;
g.length>0&&v&&(f=this._getParams(v));for(var i=0;i<g.length;++i){var b=g[i].getAttribute("name");
d=d+"&"+encodeURIComponent(b)+"=";var y=g[i].getAttribute("value");if(y=this._substituteParam(y,e),
f){var _;_=-1!=b.indexOf('"')||-1!=y.indexOf('"')?f.selectSingleNode("parameter[@name='"+b+"']/values/value[@label='"+y+"']"):f.selectSingleNode('parameter[@name="'+b+'"]/values/value[@label="'+y+'"]'),
_&&(y=_.getAttribute("value"))}d+=encodeURIComponent(y)}this._openUrl(n,d,o)}else if("DASHBOARD"==l)for(var i=0;i<e.length;++i){
if(t=e[i],o=cv.util.parseMDXExpression(t.member,!1),!parent||!parent.pentahoDashboardController)return void alert("Unable to call.fireChange on param "+t.formula+" with value "+o);
parent.pentahoDashboardController.fireOutputParam(window,t.formula,o)}},_substituteParam:function(e,t){
for(var i=0;i<t.length;++i){var r=t[i],o=cv.util.parseMDXExpression(r.formula,!1),s=cv.util.parseMDXExpression(r.member,!1);
if(e=="{"+o+"}")return s}return e},_openUrl:function(e,t,i){if("NEW_TAB"==e){if(console_enabled&&window.parent.mantle_openTab)return void window.parent.mantle_openTab(i,i,t);
if(isRunningIFrameInSameOrigin&&window.parent&&window.parent.parent&&window.parent.parent.mantle_openTab)return void window.parent.parent.mantle_openTab(i,i,t);
}"CURRENT"==e?window.location=t:window.open(t)},show:function(){if(this.dataSource=this.report.currentSelection,
this.dataSource){var e=this.dataSource.getName();if(this.load(e)){t(this.byId("enableCheckbox"),"click",r.hitch(cv.util,"onToggleSectionCheckbox")),
t(this.byId("linkType"),"change",r.hitch(this,"_changeType")),t(this.byId("filePicker"),"click",r.hitch(this,"_openGwtRepositoryBrowser"));
var i=this.dataSource.getLink();if(i){var o=(this.byId("linkType"),i.getAttribute("type"));
if("URL"==o){var s=i.getAttribute("url"),a=this;s=s.replace(/{(.*?)}/g,function(e){
return a._tryResolveNameToCaption(e)}),this.byId("urlInput").value=s,this.byId("urlToolTip").value=i.getAttribute("toolTip"),
cv.util.selectByValue(this.byId("urlTarget"),i.getAttribute("target"))}else"FILE"==o&&(this.byId("fileLabel").value=i.getAttribute("fileLabel"),
this.byId("filePath").value=i.getAttribute("filePath"),this.byId("fileToolTip").value=i.getAttribute("toolTip"),
cv.util.selectByValue(this.byId("fileTarget"),i.getAttribute("target")),this._populateParameters(i.getAttribute("fileLabel"),i.getAttribute("filePath"),i.selectNodes("cv:linkParam")));
cv.util.selectByValue(this.byId("linkType"),i.getAttribute("type"))}else cv.util.setSectionCollapsed("AL_enableCheckbox");
this._changeType(),this.showDialog()}}},save:function(){if(!l.byId("dlgBtnSave").disabled){
if(this.byId("enableCheckbox").checked){var e=this.byId("linkType").value;if(!this._validateParameter(e))return;
if("URL"==e){var t=this.byId("urlInput").value,i=this;t=t.replace(/{(.*?)}/g,function(e){
return i._tryResolveCaptionToName(e)});var r={type:e,url:t,toolTip:this.byId("urlToolTip").value,
target:this.byId("urlTarget").value};this.dataSource.setLink(r),this.report.history.add(new cv.ReportState("actionAdd","hyperlink"));
}else if("FILE"==e){for(var r={type:e,fileLabel:this.byId("fileLabel").value,filePath:this.byId("filePath").value,
toolTip:this.byId("fileToolTip").value,target:this.byId("fileTarget").value},o=this.byId("linkParamsTable").rows,s={},a=0;a<o.length;++a)if(o[a].lastChild.firstChild.checked){
var n=o[a].lastChild.lastChild,d=this._tryResolveCaptionToName(n.value);s[n.name]=d;
}this.dataSource.setLink(r,s),this.report.history.add(new cv.ReportState("actionAdd","hyperlink"));
}}else this.dataSource.removeLink(),this.report.history.add(new cv.ReportState("actionRemove","hyperlink"));
cv.dlgWidget.hide(),this.report.refreshReport()}},_openGwtRepositoryBrowser:function(e){
var t=l.byId("theDialog").style["z-index"];l.byId("theDialog").style["z-index"]=100;
var i=this;openFileChooserDialog({fileSelected:function(e,r,o,s){i.byId("fileLabel").value=s,
i.byId("filePath").value=r,i._populateParameters(s,r,null),l.byId("theDialog").style["z-index"]=t;
},dialogCanceled:function(){l.byId("theDialog").style["z-index"]=t}})},_changeType:function(){
for(var e=this.byId("linkType"),t=0;t<this.linkTypes.length;++t)this.linkTypes[t]==e.value?cv.util.show(this.prefix+this.linkTypes[t]):cv.util.hide(this.prefix+this.linkTypes[t]);
},_validateParameter:function(e){if("URL"==e){if(!this.byId("urlInput").value)return this.displayError(cvCatalog.linkRequiredURL),
this.setInvalidInputField("AL_urlInput"),!1}else if("FILE"==e&&!this.byId("fileLabel").value)return this.displayError(cvCatalog.linkRequiredFile),
this.setInvalidInputField("AL_fileLabel"),!1;return!0},_getParams:function(e){var t;
return n(e,{method:"POST",sync:!0}).then(function(e){d("ie")||d("trident")?(t=new ActiveXObject("Microsoft.XMLDOM"),
t.async=!1,t.loadXML(e)):t=dojox.xml.parser.parse(e)},function(e){},function(e){}),
t?t.documentElement:null},_populateParameters:function(e,i,o){this.byId("fileLabelSpan").title=e;
var s=this.byId("linkParamsTable");for(cv.util.hide("AL_linkParamsDiv");s.rows.length>0;)s.deleteRow(0);
if(null==i)return alert(cvCatalog.linkFileRemoved),this.byId("fileLabel").value="",
void(this.byId("fileName").value="");var i=c.encodeRepositoryPath(i),a=c.encode(CONTEXT_PATH+"api/repos/{0}/parameter",i),n=this._getParams(a);
n=n?n.selectNodes("parameter"):[];for(var l=!1,d=0;d<n.length;++d){var h=n[d].selectSingleNode("attribute[@name='parameter-group']");
if(!h||"system"!=h.getAttribute("value")&&"subscription"!=h.getAttribute("value")){
l=!0;var u=n[d].getAttribute("name"),p=null;h=n[d].selectSingleNode("attribute[@name='label']"),
p=h?h.getAttribute("value"):u;var m=s.insertRow(s.rows.length),g=null,v=!1;if(o)for(var f=0;f<o.length;++f)if(o[f].getAttribute("name")==u){
g=o[f].getAttribute("value"),g=this._tryResolveNameToCaption(g),v=!0;break}g||(p==this.dataSource.getName()?(g="{"+p+"}",
v=!0):g="");var b=document.createElement("td");b.className="paramCell",m.appendChild(b),
b.innerHTML=p,b=document.createElement("td"),b.className="valueCell",m.appendChild(b);
var y=document.createElement("input");y.type="checkbox",b.appendChild(y),y=document.createElement("input"),
y.name=u,y.type="text",y.size=40,y.value=g,b.appendChild(y),v?m.lastChild.firstChild.checked=!0:m.lastChild.lastChild.disabled=!0,
t(m.lastChild.firstChild,"click",r.hitch(this,"_toggleLinkParam"))}}l&&cv.util.show("AL_linkParamsDiv");
},_toggleLinkParam:function(e){var t=e.target.checked,i=e.target.parentNode.lastChild;
t?(i.disabled=!1,i.focus()):(i.value="",i.disabled=!0)},_tryResolveCaptionToName:function(e){
for(var t=this.report.gemList.getKeyList(),i=0;i<t.length;++i){var r=this.report.gemList.item(t[i]),o=r.getDisplayLabel(!0);
if(e=="{"+o+"}"){var s=cv.util.parseMDXExpression(r.getFormula(),!1);return"{"+s+"}";
}}return e},_tryResolveNameToCaption:function(e){for(var t=this.report.gemList.getKeyList(),i=0;i<t.length;++i){
var r=this.report.gemList.item(t[i]),o=cv.util.parseMDXExpression(r.getFormula(),!1);
if(e=="{"+o+"}"){var s=r.getDisplayLabel(!0);return"{"+s+"}"}}return e}})}),define("analyzer/report/cv_rptDrillDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojo/dom","analyzer/report/cv_rptDlg"],function(e,t,i,r,o){
return e("cv.DrillDialog",[cv.Dialog],{constructor:function(e){this.report=e,this.dlgTemplate="drillDlg.html",
this.prefix="DT_",this.fieldHelp=null,this.col=null,this.row=null},show:function(e,t){
if(this.load()){void 0!=e&&(this.col=e,this.row=t);for(var i={},r=this.report.reportDoc.getDrillColumns(),s=0;s<r.length;++s)i[cv.textContent(r[s])]=!0;
this.fieldHelp=new cv.FieldHelp(o.byId("fieldHelpXML").value,this.report.manager,!0),
this.report.modelAnnotations&&this.report.modelAnnotations.length&&cv.util.updateCatalog(!0,this.report,this.fieldHelp,this.report.getModelAnnotationsJson()),
this.fieldHelp.init(i),this.showDialog()}},save:function(){var e=this.fieldHelp.getSelectedFields(),t=!1;
for(var i in e){t=!0;break}return t?(this.report.reportDoc.replaceDrillColumns(e),
this.fieldHelp=null,cv.dlgWidget.hide(),void(void 0!=this.col&&(drill(this.col,this.row),
delete this.col,delete this.row))):this.displayError(cvCatalog.dlgDrillthroughNoFieldsError);
},cancel:function(){this.fieldHelp=null,cv.Dialog.prototype.cancel.call(this)}})}),
define("analyzer/report/cv_rptChartOptionsDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dijit/Declaration","dijit/ColorPalette","analyzer/report/cv_rptLinkDlg","dojo/html","dijit/registry","dojo/dom-style","dojo/dom"],function(e,t,i,r,o,s,a,n,l,d,c){
return e("cv.ChartOptionsDialog",[cv.Dialog],{constructor:function(e){this.report=e,
this.dlgTemplate="chartPropsDlg.html",this.prefix="CP_",this.originalOptions={},this.applied=!1,
this.lastScale=0,this.lastScaleSecondary=0},show:function(){if(this.load()){this.applied=!1;
var e=this.report.reportDoc.getChartOption("maxValues"),i=this.report._getVizApplicationSpec().maxValues;
i=i?i:[];var o=c.byId("CP_maxValues");o.options.length=0;for(var a=0;a<i.length;a++){
i[a]==e&&(e=null);var n=new Option(i[a],i[a]);o.add(n,null)}if(this.report.isReportFormatPivot()&&e){
var n=new Option(e,e);o.add(n,null)}for(var l=this.report.reportDoc,h=l.getChartOptions().attributes,a=0,u=h.length;null!=h&&u>a;++a)this.updateHtml(h[a].name,h[a].value),
this.originalOptions[h[a].name]=h[a].value;this.toggleAutoRange({target:{id:"CP_autoRange"
}}),this.toggleAutoRange({target:{id:"CP_autoRangeSecondary"}}),t(this.byId("autoRange"),"click",r.hitch(this,"toggleAutoRange")),
t(this.byId("autoRangeSecondary"),"click",r.hitch(this,"toggleAutoRange")),t(this.byId("labelColorDiv"),"click",r.hitch(this,"toggleColorPalette"));
var p=new s({palette:"7x10"},c.byId("CP_labelColorPaletteWidget"));p.startup(),t(p,"Change",r.hitch(this,"selectColor")),
d.set(this.byId("labelColorDiv"),"background-color",l.getChartOption("labelColor")),
t(this.byId("backgroundColorDiv"),"click",r.hitch(this,"toggleColorPalette")),p=new s({
palette:"7x10"},c.byId("CP_backgroundColorPaletteWidget")),p.startup(),t(p,"Change",r.hitch(this,"selectColor")),
d.set(this.byId("backgroundColorDiv"),"background-color",l.getChartOption("backgroundColor")),
t(this.byId("backgroundColorEndDiv"),"click",r.hitch(this,"toggleColorPalette")),
p=new s({palette:"7x10"},c.byId("CP_backgroundColorEndPaletteWidget")),p.startup(),
t(p,"change",r.hitch(this,"selectColor")),d.set(this.byId("backgroundColorEndDiv"),"background-color",l.getChartOption("backgroundColorEnd")),
t(this.byId("legendColorDiv"),"click",r.hitch(this,"toggleColorPalette")),p=new s({
palette:"7x10"},c.byId("CP_legendColorPaletteWidget")),p.startup(),t(p,"Change",r.hitch(this,"selectColor")),
d.set(this.byId("legendColorDiv"),"background-color",l.getChartOption("legendColor")),
t(this.byId("legendBackgroundColorDiv"),"click",r.hitch(this,"toggleColorPalette")),
p=new s({palette:"7x10"},c.byId("CP_legendBackgroundColorPaletteWidget")),p.startup(),
t(p,"Change",r.hitch(this,"selectColor")),d.set(this.byId("legendBackgroundColorDiv"),"background-color",l.getChartOption("legendBackgroundColor")),
t(c.byId("dlgBtnApply"),"click",r.hitch(this,"apply")),t(this.byId("backgroundFill"),"change",r.hitch(this,"toggleFillType")),
this.toggleFillType(),this.lastScale=this.report.reportDoc.getChartOption("displayUnits"),
this.lastScale=this.lastScale.substring(6),this.lastScaleSecondary=this.report.reportDoc.getChartOption("displayUnitsSecondary"),
this.lastScaleSecondary=this.lastScaleSecondary.substring(6),t(this.byId("displayUnits"),"change",r.hitch(this,"toggleDisplayUnits")),
t(this.byId("displayUnitsSecondary"),"change",r.hitch(this,"toggleDisplayUnits")),
t(c.byId("standardDialog"),"click",r.hitch(this,"hideColorPalettes")),this.showDialog();
}},save:function(e){var t=this.report.reportDoc,i=this.theForm.elements;if(!c.byId("CP_autoRange").checked&&!cv.util.checkNumber(c.byId("CP_valueAxisLowerLimit").value))return this.displayError(cvCatalog.dlgChartPropsAxisLimitError),
this.setInvalidInputField("CP_valueAxisLowerLimit"),c.byId("CP_valueAxisLowerLimit").focus(),
!1;if(!c.byId("CP_autoRange").checked&&!cv.util.checkNumber(c.byId("CP_valueAxisUpperLimit").value))return this.displayError(cvCatalog.dlgChartPropsAxisLimitError),
this.setInvalidInputField("CP_valueAxisUpperLimit"),c.byId("CP_valueAxisUpperLimit").focus(),
!1;if(!c.byId("CP_autoRangeSecondary").checked&&!cv.util.checkNumber(c.byId("CP_valueAxisLowerLimitSecondary").value))return this.displayError(cvCatalog.dlgChartPropsAxisLimitError),
this.setInvalidInputField("CP_valueAxisLowerLimitSecondary"),c.byId("CP_valueAxisLowerLimitSecondary").focus(),
!1;if(!c.byId("CP_autoRangeSecondary").checked&&!cv.util.checkNumber(c.byId("CP_valueAxisUpperLimitSecondary").value))return this.displayError(cvCatalog.dlgChartPropsAxisLimitError),
this.setInvalidInputField("CP_valueAxisUpperLimitSecondary"),c.byId("CP_valueAxisUpperLimitSecondary").focus(),
!1;var r=this.applyChanges(i,t);e||(this.report.history.add(new cv.ReportState("actionChartProps")),
cv.dlgWidget.hide()),r&&this.report.refreshReport()},applyChanges:function(e,t){for(var i=!1,r=0;r<e.length;++r){
var o=e[r];if("INPUT"===o.tagName||"SELECT"===o.tagName){if(""===o.value){var s=o.id;
if("CP_valueAxisLowerLimit"===s||"CP_valueAxisUpperLimit"===s)continue;if("CP_valueAxisLowerLimitSecondary"===s||"CP_valueAxisUpperLimitSecondary"===s)continue;
}var a=t.getChartOptions(),n=this._isNewValue(a,o);n&&(this.updateXml(a,o),i=!0)}
}return i},_isNewValue:function(e,t){if(!e)return!1;var i=this._attributeName(t.id);
if(!i)return!1;var r=e.getAttribute(i),o=this._getSrcValue(t);return r!==o},toggleAutoRange:function(e){
var t="";"CP_autoRangeSecondary"==e.target.id&&(t="Secondary"),c.byId("CP_valueAxisLowerLimit"+t).disabled=c.byId("CP_autoRange"+t).checked,
c.byId("CP_valueAxisUpperLimit"+t).disabled=c.byId("CP_autoRange"+t).checked},toggleColorPalette:function(e){
var t=e.target.id.replace("Div","Palette");this.hideColorPalettes(),cv.util.show(t),
e.preventDefault(),e.stopPropagation()},toggleFillType:function(){var e=c.byId("CP_backgroundFill").value;
"NONE"==e?(cv.util.hide("CP_backgroundColorWrapper"),cv.util.hide("CP_backgroundColorEndWrapper")):"SOLID"==e?(cv.util.show("CP_backgroundColorWrapper"),
cv.util.hide("CP_backgroundColorEndWrapper")):"GRADIENT"==e&&(cv.util.show("CP_backgroundColorWrapper"),
cv.util.show("CP_backgroundColorEndWrapper"))},toggleDisplayUnits:function(e){if("CP_displayUnits"==e.target.id){
var t=c.byId("CP_displayUnits").value;t=t.substring(6);var i=this.lastScale-t;this.lastScale=t,
c.byId("CP_valueAxisLowerLimit").value&&(c.byId("CP_valueAxisLowerLimit").value=c.byId("CP_valueAxisLowerLimit").value*Math.pow(10,i)),
c.byId("CP_valueAxisUpperLimit").value&&(c.byId("CP_valueAxisUpperLimit").value=c.byId("CP_valueAxisUpperLimit").value*Math.pow(10,i));
}else if("CP_displayUnitsSecondary"==e.target.id){var t=c.byId("CP_displayUnitsSecondary").value;
t=t.substring(6);var i=this.lastScaleSecondary-t;this.lastScaleSecondary=t,c.byId("CP_valueAxisLowerLimitSecondary").value&&(c.byId("CP_valueAxisLowerLimitSecondary").value=c.byId("CP_valueAxisLowerLimitSecondary").value*Math.pow(10,i)),
c.byId("CP_valueAxisUpperLimitSecondary").value&&(c.byId("CP_valueAxisUpperLimitSecondary").value=c.byId("CP_valueAxisUpperLimitSecondary").value*Math.pow(10,i));
}},selectColor:function(e){var t;cv.util.isHidden("CP_labelColorPalette")?cv.util.isHidden("CP_backgroundColorPalette")?cv.util.isHidden("CP_backgroundColorEndPalette")?cv.util.isHidden("CP_legendColorPalette")?cv.util.isHidden("CP_legendBackgroundColorPalette")||(t="CP_legendBackgroundColor"):t="CP_legendColor":t="CP_backgroundColorEnd":t="CP_backgroundColor":t="CP_labelColor",
c.byId(t).value=e,d.set(c.byId(t+"Div"),"backgroundColor",e),cv.util.hide(t+"Palette");
},hideColorPalettes:function(e){cv.util.hide("CP_labelColorPalette"),cv.util.hide("CP_backgroundColorPalette"),
cv.util.hide("CP_backgroundColorEndPalette"),cv.util.hide("CP_legendBackgroundColorPalette"),
cv.util.hide("CP_legendColorPalette")},apply:function(){this.save(!0),this.applied=!0;
},cancel:function(){if(this.applied){var e=this.report.reportDoc;for(var t in this.originalOptions)e.setChartOption(t,this.originalOptions[t]);
this.report.refreshReport()}cv.Dialog.prototype.cancel.call(this)}})}),define("analyzer/report/cv_rptPageSetupDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dijit/Declaration","analyzer/report/cv_rptLinkDlg","dojo/html","dijit/registry","dojo/dom-class","dojo/dom"],function(e,t,i,r,o,s,a,n,l,d){
return e("cv.PageSetupDialog",[cv.Dialog],{constructor:function(e){this.report=e,
this.dlgTemplate="pageSetupDlg.html",this.prefix="",this.originalOptions={},this.formatType="PDF";
},showExcel:function(){this.load()&&(this.formatType="EXCEL",cv.util.show("pageFormatFieldSet"),
cv.util.show("pageOrientationFieldSet"),cv.util.hide("csvOptions"),cv.util.hide("pdfPageSize"),
cv.util.show("excelPageSize"),cv.util.show("excelScalingRow"),d.byId("pageSetupTitle").innerHTML=cvCatalog.dlgPageSetupExcelTitle,
this._show())},showPDF:function(){this.load()&&(this.formatType="PDF",cv.util.show("pageFormatFieldSet"),
cv.util.show("pageOrientationFieldSet"),cv.util.hide("csvOptions"),cv.util.show("pdfPageSize"),
cv.util.hide("excelPageSize"),cv.util.hide("excelScalingRow"),d.byId("pageSetupTitle").innerHTML=cvCatalog.dlgPageSetupPDFTitle,
this._show())},showCSV:function(){this.load()&&(this.formatType="CSV",cv.util.hide("pageFormatFieldSet"),
cv.util.hide("pageOrientationFieldSet"),cv.util.show("csvOptions"),cv.util.hide("pdfPageSize"),
cv.util.hide("excelPageSize"),cv.util.hide("excelScalingRow"),d.byId("pageSetupTitle").innerHTML=cvCatalog.dlgCSVDownloadTitle,
this._show())},_show:function(){for(var e=this.report.reportDoc,i=e.getPageSetup().attributes,o=0;o<i.length;++o)this.updateHtml(i[o].name,i[o].value),
this.originalOptions[i[o].name]=i[o].value,"PDF"==this.formatType&&"pdfOrientation"==i[o].name?this.setPortraitOrientation("PORTRAIT"==i[o].value):"EXCEL"==this.formatType&&"excelOrientation"==i[o].name&&this.setPortraitOrientation("PORTRAIT"==i[o].value);
d.byId("dlgBtnSave").disabled=!0;var s=this;t(this.byId("orientationPortrait"),"click",r.hitch(this,function(){
s.setPortraitOrientation(!0)})),t(this.byId("orientationLandscape"),"click",r.hitch(this,function(){
s.setPortraitOrientation(!1)})),t(d.byId("dlgBtnDownload"),"click",r.hitch(this,"download")),
t(d.byId("excelPageSize"),"change",r.hitch(this,"enableDoneButton")),t(d.byId("pdfPageSize"),"change",r.hitch(this,"enableDoneButton")),
t(d.byId("csvIncludeSubtotals"),"click",r.hitch(this,"enableDoneButton")),t(d.byId("csvFormatNumbers"),"click",r.hitch(this,"enableDoneButton")),
t(d.byId("excelScalingPercent"),"click",r.hitch(this,"enableDoneButton")),t(d.byId("excelScalingPageWide"),"click",r.hitch(this,"enableDoneButton")),
t(d.byId("excelScalingPageTall"),"click",r.hitch(this,"enableDoneButton"));var a=this.theForm.excelScalingType;
t(a[0],"click",r.hitch(this,"enableDoneButton")),t(a[1],"click",r.hitch(this,"enableDoneButton")),
this.showDialog()},download:function(){this._updatePageSetupXML()&&(cv.dlgWidget.hide(),
"PDF"==this.formatType?this.report.getReportPDF(!0):"EXCEL"==this.formatType?this.report.getReportExcel(!0):"CSV"==this.formatType&&cv.io.getReportInFormat(this.report.getReportXml(),"CSV",this.report.isDirty()));
},save:function(){this._updatePageSetupXML()&&cv.dlgWidget.hide()},_updatePageSetupXML:function(){
if(!cv.util.checkPositiveInteger(d.byId("excelScalingPercent").value))return this.displayError(cvCatalog.dlgSharedErrorPositiveInteger),
this.setInvalidInputField("excelScalingPercent"),d.byId("excelScalingPercent").focus(),
!1;if(!cv.util.checkPositiveInteger(d.byId("excelScalingPageWide").value))return this.displayError(cvCatalog.dlgSharedErrorPositiveInteger),
this.setInvalidInputField("excelScalingPageWide"),d.byId("excelScalingPageWide").focus(),
!1;if(!cv.util.checkPositiveInteger(d.byId("excelScalingPageTall").value))return this.displayError(cvCatalog.dlgSharedErrorPositiveInteger),
this.setInvalidInputField("excelScalingPageTall"),d.byId("excelScalingPageTall").focus(),
!1;for(var e=this.report.reportDoc,t=this.theForm.elements,i=0;i<t.length;++i)("INPUT"==t[i].tagName||"SELECT"==t[i].tagName)&&this.updateXml(e.getPageSetup(),t[i]);
var r=d.byId("orientationPortrait");if("CSV"!=this.formatType){var o="PDF"==this.formatType?"pdf":"excel";
o+="Orientation",l.contains(r,"pageSetupDialogPortraitSelected")?e.setPageSetup(o,"PORTRAIT"):e.setPageSetup(o,"LANDSCAPE");
}var s=this.getRadioGroupValue("excelScalingType");return e.setPageSetup("excelScalingType",s),
!0},setPortraitOrientation:function(e){var t=this.byId("orientationPortrait"),i=this.byId("orientationLandscape");
e?(l.add(t,"pageSetupDialogPortraitSelected"),l.remove(i,"pageSetupDialogLandscapeSelected")):(l.add(i,"pageSetupDialogLandscapeSelected"),
l.remove(t,"pageSetupDialogPortraitSelected")),this.enableDoneButton()},enableDoneButton:function(){
d.byId("dlgBtnSave").disabled=!1},cancel:function(){var e=this.report.reportDoc;for(var t in this.originalOptions)e.setPageSetup(t,this.originalOptions[t]);
cv.Dialog.prototype.cancel.call(this)}})}),define("analyzer/report/cv_rptFilterDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/collections/Dictionary","dojox/collections/ArrayList","analyzer/report/cv_rptDlg","dojo/html","dojo/dom-class","dojo/dom-geometry","dojo/request","dojo/dom","dojo/dom-construct","dojox/xml/parser","dijit/form/DateTextBox","pentaho/common/Messages"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m,g){
return e("cv.FilterDialog",[cv.Dialog],{constructor:function(e){this.report=e,this.dlgTemplate=null,
this.prefix="FT_",this.filterTypes=["FILTER_METRIC","FILTER_PICKLIST","FILTER_MATCH","FILTER_PRESET","FILTER_RANGE","FILTER_NUMERIC_LEVEL"];
},destroy:function(){this.clear()},clear:function(){this.gem=null,this.type=null,
this.attribute=null,this.attributeType=null,this.isTimeAttribute=!1,this.metric=null,
this.ordinal=0,this.filterProps=null,this.parentFilterMsg=null,this.asyncRequestId=null,
this.asyncMode=!1,this.searchCache=new Array(30),this.searchCacheTopIndex=-1,this.searchRequestId=null,
this.valueListNode=null,this.search=null,this.handleSetFilterType&&(this.handleSetFilterType.remove(),
this.handleSetFilterType=null),this.handleToggleParameterCheckbox&&(this.handleToggleParameterCheckbox.remove(),
this.handleToggleParameterCheckbox=null),this.handleOnChangeRangeOp&&(this.handleOnChangeRangeOp.remove(),
this.handleOnChangeRangeOp=null),this.handleOnShowDatePicker&&(this.handleOnShowDatePicker.remove(),
this.handleOnShowDatePicker=null),this.handleOnClickMatchTbl&&(this.handleOnClickMatchTbl.remove(),
this.handleOnClickMatchTbl=null),this.handleAddExpressionItem&&(this.handleAddExpressionItem.remove(),
this.handleAddExpressionItem=null),this.handleOnChangePicklistOp&&(this.handleOnChangePicklistOp.remove(),
this.handleOnChangePicklistOp=null),this.handleValueListNodeOnClickList&&(this.handleValueListNodeOnClickList.remove(),
this.handleValueListNodeOnClickList=null),this.handleValueListNodeAddMembers&&(this.handleValueListNodeAddMembers.remove(),
this.handleValueListNodeAddMembers=null),this.handleMemberListNodeOnClickList&&(this.handleMemberListNodeOnClickList.remove(),
this.handleMemberListNodeOnClickList=null),this.handleMemberListNodeRemoveMembers&&(this.handleMemberListNodeRemoveMembers.remove(),
this.handleMemberListNodeRemoveMembers=null),this.handleSearchValueList&&(this.handleSearchValueList.remove(),
this.handleSearchValueList=null),this.handleSelectAddAddMembers&&(this.handleSelectAddAddMembers.remove(),
this.handleSelectAddAddMembers=null),this.handleSelectAddAllAddMembers&&(this.handleSelectAddAllAddMembers.remove(),
this.handleSelectAddAllAddMembers=null),this.handleSelectRemoveRemoveMembers&&(this.handleSelectRemoveRemoveMembers.remove(),
this.handleSelectRemoveRemoveMembers=null),this.handleSelectRemoveAllRemoveMembers&&(this.handleSelectRemoveAllRemoveMembers.remove(),
this.handleSelectRemoveAllRemoveMembers=null),this.handleOnChangeNumericLevelOp&&(this.handleOnChangeNumericLevelOp.remove(),
this.handleOnChangeNumericLevelOp=null)},show:function(e,i){if("string"==typeof e&&0==e.indexOf("filter_metric"))return this.showMetricFilter();
if("NUMBER"==cv.getFieldHelp().get(e,"type")||"string"==typeof e&&0==e.indexOf("[MEASURE:"))return this.showMetricFilter(e);
if(this.clear(),0==e.indexOf("filter_")){var s=/^filter_(.+)_(\d)$/,a=s.exec(e);if(!a)return!1;
this.attribute=a[1],this.ordinal=a[2]}else this.attribute=e,i=parseInt(i),!isNaN(i)&&i>0&&(this.ordinal=i);
if(this.attributeType=cv.getFieldHelp().get(this.attribute,"type"),this.attributeType){
if(this.isTimeAttribute=cv.getFieldHelp().isTimeAttribute(this.attribute),this.gem=this.report.getGem("filter_"+this.attribute),
this.gem)this.filterProps=this.report.reportDoc.getFilterProps(this.gem.xmlNode);else{
if(!this.report.getGem(this.attribute)){var n=this.report.getTrendNumberOnAncestors(this.attribute);
if(n)return this.showError(["errorAddFilterWithTrendOnAncestor",this.report.getFieldLabel(this.attribute),this.report.getFieldLabel(n.ancestor),n.trend.getDisplayLabel()]),
!1}this.filterProps={type:this.type,formula:this.attribute,predicates:new o}}if(0==this.ordinal)this.type=this.isTimeAttribute?"FILTER_PRESET":"FILTER_PICKLIST";else{
var l=this.filterProps.predicates.item(this.ordinal)[0];switch(l.op){case"CONTAIN":
case"NOT_CONTAIN":this.type="FILTER_MATCH";break;case"BEFORE":case"AFTER":case"BETWEEN":
this.type="FILTER_RANGE";break;case"EQUAL":case"NOT_EQUAL":this.type=this.isTimeAttribute&&l.preset?"FILTER_PRESET":"FILTER_PICKLIST";
break;case"TIME_YAGO":case"TIME_AHEAD":case"TIME_AGO":case"TIME_RANGE_NEXT":case"TIME_RANGE_PREV":
this.type="FILTER_PRESET";break;case"NUMERIC_BETWEEN":case"NUMERIC_GREATER_THAN":
case"NUMERIC_GREATER_THAN_EQUAL":case"NUMERIC_LESS_THAN":case"NUMERIC_LESS_THAN_EQUAL":
this.type="FILTER_NUMERIC_LEVEL";break;default:return}}this.dlgTemplate="filterPredicateDlg.html",
this.helpTopic="CV/Business_User/working_with_filters.html#filters_on_text_fields";
var d,c=this.report.getFieldLabel(this.attribute)?this.report.getFieldLabel(this.attribute):this.report.getFieldLabelPlural(this.attribute),u=cv.getFieldHelp().get(this.attribute,"type");
if(d="TIME_DATE"==u?this.load(c,g.getString("FilterPresetTIME_DATE0"),g.getString("FilterPresetTIME_DATE__1"),g.getString("FilterPresetTIME_DATE1")):this.load(c,g.getString("FilterTIME_CURRENT",c),g.getString("FilterTIME_PREVIOUS",c),g.getString("FilterTIME_NEXT",c)),
!d)return void alert(this.status);var p;if(this.isTimeAttribute?(p=h.byId("FT_filterTypeTime"),
cv.util.removeNode(h.byId("FT_filterTypeText")),cv.util.removeNode(h.byId("FT_filterTypeNumericLevel"))):cv.getFieldHelp().isNumberAttribute(this.attribute)?(p=h.byId("FT_filterTypeNumericLevel"),
cv.util.removeNode(h.byId("FT_filterTypeText")),cv.util.removeNode(h.byId("FT_filterTypeTime"))):(p=h.byId("FT_filterTypeText"),
cv.util.removeNode(h.byId("FT_filterTypeTime")),cv.util.removeNode(h.byId("FT_filterTypeNumericLevel"))),
this.handleSetFilterType||(this.handleSetFilterType=t(p,"click",r.hitch(this,"_setFilterType"))),
this.valueListNode=h.byId("FT_valueList"),cv.util.disableTextSelection(this.valueListNode),
!this.report.manager.applyReportContextInFilterDialog){var m=cv.getFieldHelp().getHierarchy(this.attribute);
if(m){for(var v=null,f=0;m&&f<m.length;++f){var b=m[f];if(b==this.attribute)break;
this.report.getGem("filter_"+b)&&(v=b)}this.parentFilterMsg=v?cv.util.substituteParams(cvCatalog.dlgInfoFilterOnParent,this.report.getFieldLabel(v)):null;
}}this._setFilterType(this.type)&&this.showDialog()}},save:function(){if(!h.byId("dlgBtnSave").disabled&&this._validateParameter()){
var e=!1;switch(this.type){case"FILTER_METRIC":e=this._saveMetricFilter();break;case"FILTER_PICKLIST":
e=this._savePicklistFilter();break;case"FILTER_MATCH":e=this._saveMatchFilter();break;
case"FILTER_PRESET":e=this._savePresetFilter();break;case"FILTER_RANGE":e=this._saveRangeFilter();
break;case"FILTER_NUMERIC_LEVEL":e=this._saveNumericLevelFilter();break;default:return;
}e&&(cv.dlgWidget.hide(),this.filterProps&&(this.report.reportDoc.updateFilter(this.filterProps),
this.report.populateFilters(),this.report.resizeContainer(),this.report.history.add(new cv.ReportState("actionEditFilter")),
this.report.refreshReport(),this.valueListNode=null))}},showAttrSelection:function(e,t,i){
var r=this.report.getGem("filter_"+e);if(r){if("EDIT"==this.report.mode)return this.show(e,t);
if(this.type="filter_selection",this.attribute=e,this.dlgTemplate="filterAttrViewDlg.html",
this.helpTopic=null,this.load(this.report.getFieldLabel(e),i)){var o=h.byId("FT_memberList"),s=this.report.reportDoc.getFilterProps(r.xmlNode);
o.innerHTML=this._formatValueList(s.predicates.item(t)[0].members,"SELECTED"),this.showDialog();
}}},showSelectionFilter:function(e){this.type="filter_selection",this.attribute="foo",
this.dlgTemplate="filterSelectionViewDlg.html",this.helpTopic=null;for(var t="",i=this.report.reportDoc.getSelectionFilters(),r=0,o=0;o<i.length;o++){
var s=i[o];if(s.getAttribute("op")==e){for(var a=s.selectNodes("cv:selectionMember"),n="",l=0;l<a.length;l++){
var d=a[l].getAttribute("member");0!=l&&(n+=" and "),n+=cv.util.parseMDXExpression(d,!0);
}t+="<div>"+n+"</div>",r++}}if(this.load(cvCatalog["dlgSelectionFilterTitle"+e],r)){
var c=h.byId("FT_memberList");c.innerHTML=t,this.showDialog()}},_setFilterType:function(e){
var i=!0,o=null;if("string"==typeof e&&0==e.indexOf("FILTER_"))this.type=e,this.updateHtml("filterType",e);else{
if(!e.target)return;var s=this.type;if("INPUT"==e.target.tagName)this.type=this.getRadioGroupValue("FT_filterType");else if("A"==e.target.tagName){
switch(e.target.id){case"FT_filterOp_PRESET_EQUAL":case"FT_filterOp_PRESET_NOT_EQUAL":
this.type="FILTER_PRESET",o=e.target.id.substr(19);break;case"FT_filterOp_EQUAL":
case"FT_filterOp_NOT_EQUAL":this.type="FILTER_PICKLIST",o=e.target.id.substr(12);break;
case"FT_filterOp_CONTAIN":case"FT_filterOp_NOT_CONTAIN":this.type="FILTER_MATCH",
o=e.target.id.substr(12);break;case"FT_filterOp_AFTER":case"FT_filterOp_BEFORE":case"FT_filterOp_BETWEEN":
this.type="FILTER_RANGE",this.type="FILTER_RANGE",o=e.target.id.substr(12);break;default:
return i}dojo.stopEvent(e),this.updateHtml("filterType",this.type)}}if(this._showFilterTab(),
this.type!=s)switch(this.type){case"FILTER_PICKLIST":i=this._initPicklistFilter(o);
break;case"FILTER_MATCH":i=this._initMatchFilter(o);break;case"FILTER_PRESET":i=this._initPresetFilter(o);
break;case"FILTER_RANGE":i=this._initRangeFilter(o);break;case"FILTER_NUMERIC_LEVEL":
i=this._initNumericLevelFilter(o)}return this.handleToggleParameterCheckbox||(this.handleToggleParameterCheckbox=t(h.byId("FT_PARAMETER_ENABLE"),"click",r.hitch(this,"_toggleParameterCheckbox"))),
i},_showFilterTab:function(){for(var e=1;e<this.filterTypes.length;++e)this.filterTypes[e]==this.type?cv.util.show(this.prefix+this.filterTypes[e]):cv.util.hide(this.prefix+this.filterTypes[e]);
},_initPresetFilter:function(e){this.defaultMsg=null;var i,o,s,a;if(this.ordinal>0)for(var n=this.filterProps.predicates.item(this.ordinal),d=0;d<n.length;d++)if(i=n[d],
o=i.op,s=i.preset,i.parameterName&&this._setParameterName(i.parameterName),s||"TIME_YAGO"==o)switch(o){
case"EQUAL":for(var c=s.split(","),u=0;u<c.length;++u)a="-1"==c[u]?h.byId("FT_PREVIOUS_TIME"):"0"==c[u]?h.byId("FT_CURRENT_TIME"):"-4"==c[u]||"-12"==c[u]?h.byId("FT_TIME_YAGO"):h.byId("FT_NEXT_TIME"),
a.checked=!0;break;case"TIME_YAGO":h.byId("FT_TIME_YAGO").checked=!0;break;case"TIME_RANGE_PREV":
h.byId("FT_TIME_RANGE_PREV").checked=!0,h.byId("FT_TIME_RANGE_PREV_NUM").value=s;break;
case"TIME_AGO":h.byId("FT_TIME_AGO").checked=!0,h.byId("FT_TIME_AGO_NUM").value=s;
break;case"TIME_RANGE_NEXT":h.byId("FT_TIME_RANGE_NEXT").checked=!0,h.byId("FT_TIME_RANGE_NEXT_NUM").value=s;
break;case"TIME_AHEAD":h.byId("FT_TIME_AHEAD").checked=!0,h.byId("FT_TIME_AHEAD_NUM").value=s;
}return a=h.byId("FT_TIME_RANGE_PREV"),h.byId("FT_TIME_RANGE_PREV_NUM").disabled=!a.checked,
t(a,"click",r.hitch(this,"_switchPreset")),a=h.byId("FT_TIME_AGO"),h.byId("FT_TIME_AGO_NUM").disabled=!a.checked,
t(a,"click",r.hitch(this,"_switchPreset")),a=h.byId("FT_TIME_RANGE_NEXT"),h.byId("FT_TIME_RANGE_NEXT_NUM").disabled=!a.checked,
t(a,"click",r.hitch(this,"_switchPreset")),a=h.byId("FT_TIME_AHEAD"),h.byId("FT_TIME_AHEAD_NUM").disabled=!a.checked,
t(a,"click",r.hitch(this,"_switchPreset")),"TIME_YEAR"==this.attributeType?l.add(h.byId("TD_FT_TIME_YAGO"),"hidden"):l.remove(h.byId("TD_FT_TIME_YAGO"),"hidden"),
!0},_switchPreset:function(e){var t,i=e.target.id,r=e.target.checked;switch(i){case"FT_TIME_RANGE_PREV":
t=h.byId("FT_TIME_RANGE_PREV_NUM");break;case"FT_TIME_AGO":t=h.byId("FT_TIME_AGO_NUM");
break;case"FT_TIME_RANGE_NEXT":t=h.byId("FT_TIME_RANGE_NEXT_NUM");break;case"FT_TIME_AHEAD":
t=h.byId("FT_TIME_AHEAD_NUM")}r?(t.disabled=!1,t.focus()):(t.value="",t.disabled=!0,
l.remove(t,"inputNum invalid"))},_savePresetFilter:function(){if(h.byId("FT_TIME_RANGE_PREV").checked&&!this._validatePreset(h.byId("FT_TIME_RANGE_PREV_NUM").value))return h.byId("FT_TIME_RANGE_PREV_NUM").focus(),
l.add(h.byId("FT_TIME_RANGE_PREV_NUM"),"inputNum invalid"),!1;if(h.byId("FT_TIME_AGO").checked&&!this._validatePreset(h.byId("FT_TIME_AGO_NUM").value))return h.byId("FT_TIME_AGO_NUM").focus(),
l.add(h.byId("FT_TIME_AGO_NUM"),"inputNum invalid"),!1;if(h.byId("FT_TIME_RANGE_NEXT").checked&&!this._validatePreset(h.byId("FT_TIME_RANGE_NEXT_NUM").value))return h.byId("FT_TIME_RANGE_NEXT_NUM").focus(),
l.add(h.byId("FT_TIME_RANGE_NEXT_NUM"),"inputNum invalid"),!1;if(h.byId("FT_TIME_AHEAD").checked&&!this._validatePreset(h.byId("FT_TIME_AHEAD_NUM").value))return h.byId("FT_TIME_AHEAD_NUM").focus(),
l.add(h.byId("FT_TIME_AHEAD_NUM"),"inputNum invalid"),!1;if(!(h.byId("FT_TIME_RANGE_PREV").checked||h.byId("FT_TIME_AGO").checked||h.byId("FT_TIME_RANGE_NEXT").checked||h.byId("FT_CURRENT_TIME").checked||h.byId("FT_PREVIOUS_TIME").checked||h.byId("FT_NEXT_TIME").checked||h.byId("FT_TIME_AHEAD").checked||"hidden"!=h.byId("TD_FT_TIME_YAGO").className&&("hidden"==h.byId("TD_FT_TIME_YAGO").className||h.byId("FT_TIME_YAGO").checked)))return this.report.removeFilter("filter_"+this.filterProps.formula+"_"+this.ordinal),
!1;var e;h.byId("FT_PREVIOUS_TIME").checked&&(e="-1"),h.byId("FT_CURRENT_TIME").checked&&(e=e?e+",0":"0"),
h.byId("FT_NEXT_TIME").checked&&(e=e?e+",1":"1");var t=[];return e&&t.push({ordinal:this.ordinal,
op:"EQUAL",preset:e,rela_filter:1}),h.byId("FT_TIME_YAGO").checked&&t.push({ordinal:this.ordinal,
op:h.byId("FT_TIME_YAGO").value,rela_filter:1}),h.byId("FT_TIME_RANGE_PREV").checked&&t.push({
ordinal:this.ordinal,op:h.byId("FT_TIME_RANGE_PREV").value,preset:h.byId("FT_TIME_RANGE_PREV_NUM").value,
rela_filter:1}),h.byId("FT_TIME_RANGE_NEXT").checked&&t.push({ordinal:this.ordinal,
op:h.byId("FT_TIME_RANGE_NEXT").value,preset:h.byId("FT_TIME_RANGE_NEXT_NUM").value,
rela_filter:1}),h.byId("FT_TIME_AGO").checked&&t.push({ordinal:this.ordinal,op:h.byId("FT_TIME_AGO").value,
preset:h.byId("FT_TIME_AGO_NUM").value,rela_filter:1}),h.byId("FT_TIME_AHEAD").checked&&t.push({
ordinal:this.ordinal,op:h.byId("FT_TIME_AHEAD").value,preset:h.byId("FT_TIME_AHEAD_NUM").value,
rela_filter:1}),t.length>0&&(t[0].parameterName=h.byId("FT_PARAMETER_NAME").value,
this.report.updateRelativeFilterProps(this.filterProps,t)),!0},_validatePreset:function(e){
return!cv.util.checkNumber(e)||parseInt(e)<=0||parseInt(e)>180?(this.displayError("Please input a number between 1 and 180"),
!1):!0},_setPresetMenu:function(e){if(!(e.childNodes.length>1)){e.innerHTML="";var t=cvCatalog["filterPreset"+this.attributeType];
for(var i in t)cv.addOption(e,new Option(t[i],i));e.childNodes[0].selected=!0}},_initRangeFilter:function(e){
return this.defaultMsg=this.parentFilterMsg,"true"!=cv.getFieldHelp().get(this.attribute,"useDateLookup")&&cv.getFieldHelp().get(this.attribute,"currentDateMember")||cv.util.hide(h.byId("FT_openDatePicker")),
this.asyncMode=!0,this._loadAttributeMembers(e),this._populateUIRangeFilter(e),!0;
},_populateUIRangeFilter:function(e){var i=h.byId("FT_rangeOp");if(!i.disabled){var o=h.byId("FT_range1"),s=h.byId("FT_range2");
this.handleOnChangeRangeOp||(this.handleOnChangeRangeOp=t(i,"change",r.hitch(this,"_onChangeRangeOp"))),
this.handleOnShowDatePicker||(this.handleOnShowDatePicker=t(dojo.byId("FT_openDatePicker"),"click",r.hitch(this,"_onShowDatePicker")));
var a=this.ordinal>0?this.filterProps.predicates.item(this.ordinal)[0]:null;!a||"BETWEEN"!=a.op&&"AFTER"!=a.op&&"BEFORE"!=a.op?(o.options[0].selected=!0,
s.options[s.options.length-1].selected=!0):(i.value=a.op,o.value=a.members[0].formula,
o.value!=a.members[0].formula&&(cv.addOption(o,new Option(a.members[0].caption,a.members[0].formula)),
o.value=a.members[0].formula),"BETWEEN"==a.op?(s.value=a.members[1].formula,s.value!=a.members[1].formula&&(cv.addOption(s,new Option(a.members[1].caption,a.members[1].formula)),
s.value=a.members[1].formula)):s.options[s.options.length-1].selected=!0,a.parameterName&&this._setParameterName(a.parameterName)),
e&&(i.value=e),this._onChangeRangeOp()}},_saveRangeFilter:function(){var e=h.byId("FT_rangeOp").value,t=h.byId("FT_range1").options[h.byId("FT_range1").selectedIndex],i=[{
formula:t.value,caption:t.text}];if(!i[0])return this.displayMsg(cvCatalog.dlgErrFilterInvalidValue),
!1;"BETWEEN"==e&&(t=h.byId("FT_range2").options[h.byId("FT_range2").selectedIndex],
i.push({formula:t.value,caption:t.text}));var r=this.report.updateFilterProps(this.filterProps,{
ordinal:this.ordinal,op:e,preset:null,members:i},!1,!0);return r.parameterName=h.byId("FT_PARAMETER_NAME").value,
!0},_initNumericLevelFilter:function(e){var i=h.byId("FT_numericLevelOp"),o=h.byId("FT_numericLevelOp1"),s=h.byId("FT_numericLevelOp2");
this.handleOnChangeNumericLevelOp||(this.handleOnChangeNumericLevelOp=t(i,"change",r.hitch(this,"_onChangeNumericLevelOp")));
var a=this.ordinal>0?this.filterProps.predicates.item(this.ordinal)[0]:null;return!a||"NUMERIC_BETWEEN"!=a.op&&"NUMERIC_GREATER_THAN"!=a.op&&"NUMERIC_GREATER_THAN_EQUAL"!=a.op&&"NUMERIC_LESS_THAN"!=a.op&&"NUMERIC_LESS_THAN_EQUAL"!=a.op||(i.value=a.op,
o.value=a.op1,"NUMERIC_BETWEEN"==a.op&&(s.value=a.op2),a.parameterName&&this._setParameterName(a.parameterName)),
e&&(i.value=e),this._onChangeNumericLevelOp(),!0},_onChangeNumericLevelOp:function(){
switch(h.byId("FT_numericLevelOp").value){case"NUMERIC_BETWEEN":cv.util.isHidden("FT_numericLevelOp1")&&cv.util.show("FT_numericLevelOp1"),
cv.util.isHidden("FT_numericLevelOp2_row")&&cv.util.show("FT_numericLevelOp2_row");
break;default:cv.util.isHidden("FT_numericLevelOp1")&&cv.util.show("FT_numericLevelOp1"),
cv.util.isHidden("FT_numericLevelOp2_row")||cv.util.hide("FT_numericLevelOp2_row");
}},_saveNumericLevelFilter:function(){var e=h.byId("FT_numericLevelOp").value,t=h.byId("FT_numericLevelOp1").value,i=h.byId("FT_numericLevelOp2").value,r={
ordinal:this.ordinal,op:e,preset:null};switch(e){case"NUMERIC_BETWEEN":if(!(t&&i&&cv.util.checkNumber(t)&&cv.util.checkNumber(i)))return this.displayMsg(cvCatalog.dlgErrFilterNumericLevelNumberExpected),
!1;r.op1=t,r.op2=i;break;default:if(!t||!cv.util.checkNumber(t))return this.displayMsg(cvCatalog.dlgErrFilterNumericLevelNumberExpected),
!1;r.op1=t}var o=this.report.updateFilterProps(this.filterProps,r,!1,!0);return o.parameterName=h.byId("FT_PARAMETER_NAME").value,
!0},_onChangeRangeOp:function(){switch(h.byId("FT_rangeOp").value){case"AFTER":cv.util.isHidden("FT_range1_row")&&cv.util.show("FT_range1_row"),
cv.util.isHidden("FT_range2_row")||cv.util.hide("FT_range2_row");break;case"BETWEEN":
cv.util.isHidden("FT_range1_row")&&cv.util.show("FT_range1_row"),cv.util.isHidden("FT_range2_row")&&cv.util.show("FT_range2_row");
break;case"BEFORE":cv.util.isHidden("FT_range1_row")&&cv.util.show("FT_range1_row"),
cv.util.isHidden("FT_range2_row")||cv.util.hide("FT_range2_row")}},_onShowDatePicker:function(e){
var t=new cv.DatePickerDialog(this,this.report);t.show()},_initPicklistFilter:function(e){
this.defaultMsg=this.parentFilterMsg,this.memberListNode=h.byId("FT_memberList"),
cv.util.disableTextSelection(this.memberListNode),this.search=h.byId("FT_searchText"),
this.asyncMode=!1,this._loadAttributeMembers(e);var i=h.byId("FT_picklistOp");return this.handleOnChangePicklistOp||(this.handleOnChangePicklistOp=t(i,"change",r.hitch(this,"_onChangePicklistOp"))),
this.handleValueListNodeOnClickList||(this.handleValueListNodeOnClickList=t(this.valueListNode,"click",r.hitch(this,"_onClickList"))),
this.handleValueListNodeAddMembers||(this.handleValueListNodeAddMembers=t(this.valueListNode,"dblclick",r.hitch(this,"_addMembers"))),
this.handleMemberListNodeOnClickList||(this.memberListNodeOnClickList=t(this.memberListNode,"click",r.hitch(this,"_onClickList"))),
this.handleMemberListNodeRemoveMembers||(this.memberListNodeRemoveMembers=t(this.memberListNode,"dblclick",r.hitch(this,"_removeMembers"))),
this.handleSearchValueList||(this.handleSearchValueList=t(h.byId("FT_searchBy"),"click",r.hitch(this,"_searchValueList"))),
this.handleSelectAddAddMembers||(this.handleSelectAddAddMembers=t(h.byId("FT_select_add"),"click",r.hitch(this,"_addMembers"))),
this.handleSelectAddAllAddMembers||(this.handleSelectAddAllAddMembers=t(h.byId("FT_select_addAll"),"click",r.hitch(this,"_addMembers"))),
this.handleSelectRemoveRemoveMembers||(this.handleSelectRemoveRemoveMembers=t(h.byId("FT_select_remove"),"click",r.hitch(this,"_removeMembers"))),
this.handleSelectRemoveAllRemoveMembers||(this.handleSelectRemoveAllRemoveMembers=t(h.byId("FT_select_removeAll"),"click",r.hitch(this,"_removeMembers"))),
this._populateUIPicklistFilter(e),!0},_populateUIPicklistFilter:function(e){var t=h.byId("FT_picklistOp"),i=this.ordinal>0?this.filterProps.predicates.item(this.ordinal)[0]:null;
!i||"EQUAL"!=i.op&&"NOT_EQUAL"!=i.op||i.preset||(t.value=i.op,this.memberListNode.innerHTML=this._formatValueList(i.members,"SELECTED"),
i.parameterName&&this._setParameterName(i.parameterName)),e&&(t.value=e),t.value||(t.options[0].selected=!0),
this._onChangePicklistOp()},_savePicklistFilter:function(){var e=this._getSelectionList();
if(0==e.count)return this.displayMsg(cvCatalog.dlgErrFilterNoSelection),!1;if(e.count>cv.analyzerProperties["filter.include.exclude.max.count"])return this.displayMsg(cvCatalog.dlgErrFilterMaxMembers,cv.analyzerProperties["filter.include.exclude.max.count"]),
!1;var t=this.report.updateFilterProps(this.filterProps,{ordinal:this.ordinal,op:h.byId("FT_picklistOp").value,
members:e.toArray()});return t.parameterName=h.byId("FT_PARAMETER_NAME").value,t.members.length>cv.analyzerProperties["filter.include.exclude.max.count"]?(this.displayMsg(cvCatalog.dlgErrFilterMaxMembers,cv.analyzerProperties["filter.include.exclude.max.count"]),
t.ordinal>0&&t.ordinal!=this.ordinal&&(this.memberListNode.innerHTML=this._formatValueList(t.members,"SELECTED"),
this.ordinal=t.ordinal),!1):!0},_onChangePicklistOp:function(){l.remove(this.memberListNode,"excluded"),
l.remove(this.memberListNode,"included");var e="EQUAL"==h.byId("FT_picklistOp").value?"included":"excluded";
l.add(this.memberListNode,e)},_addMembers:function(e){var t;switch(e.target.id){case"FT_select_add":
if(!this.valueListNode.selection)return;t=this.valueListNode.selection.toArray();break;
case"FT_select_addAll":t=this.valueListNode.getElementsByTagName("DIV");break;default:
if(0!=e.target.id.indexOf("FT_AVA_"))return;t=[e.target]}if(0!=t.length){for(var i=this._getSelectionList(),r=i.count,o={},s=0;r>s;++s)o[i.item(s).formula]=!0;
for(var s=0;s<t.length;++s){var a=t[s];if(a.id){var n=a.id.substring(7);if(!o[n]){
var l=u.create("div",{id:"FT_SEL_"+n,title:n,innerHTML:a.innerHTML});this.memberListNode.appendChild(l),
++r}}}r>cv.analyzerProperties["filter.include.exclude.max.count"]&&this.displayMsg(cvCatalog.dlgErrFilterMaxMembers,cv.analyzerProperties["filter.include.exclude.max.count"]),
h.byId("FT_memberListStat").innerHTML=cv.util.substituteParams(cvCatalog[1>=r?"filterSelectionSummarySingle":"filterSelectionSummaryAll"],r);
}},_removeMembers:function(e){var t=this.memberListNode.getElementsByTagName("DIV"),i=t.length;
switch(e.target.id){case"FT_select_remove":if(!this.memberListNode.selection)return;
var t=this.memberListNode.selection.toArray();i-=t.length;break;case"FT_select_removeAll":
i=0;break;default:if(0!=e.target.id.indexOf("FT_SEL_"))return;t=[e.target],--i}if(0==t.length)return!1;
for(var r=t.length-1;r>=0;--r)this.memberListNode.removeChild(t[r]),this.memberListNode.selection&&this.memberListNode.selection.clear();
return h.byId("FT_memberListStat").innerHTML=cv.util.substituteParams(cvCatalog[1>=i?"filterSelectionSummarySingle":"filterSelectionSummaryAll"],i),
!1},_onClickList:function(e){var t=e.target;"FT_valueList"==t.id&&t.focus();var i=cv.util.getAncestorByClass(t,"selectableList");
if(i&&i!=t){if(i.selection)for(var r=0,o=i.selection.count;o>r;++r)l.remove(i.selection.item(r),"selected");
if(i.selection&&(e.ctrlKey||e.shiftKey||e.metaKey)){if(e.ctrlKey||e.metaKey)i.selection.contains(t)?i.selection.remove(t):i.selection.add(t);else if(e.shiftKey){
var a,n,c=i.selection.item(0);d.position(c,!0).y>d.position(t,!0).y?(a=t,n=c):(a=c,
n=t);var h=i.getElementsByTagName("DIV"),u=!1;i.selection.clear(),i.selection.add(c);
for(var r=0,o=h.length;o>r&&(h[r]==a&&(u=!0),u&&h[r]!=c&&(i.selection.add(h[r]),l.add(t,"selected")),
h[r]!=n);++r);}}else i.selection?i.selection.clear():i.selection=new s,i.selection.add(t);
for(var r=0,o=i.selection.count;o>r;++r)l.add(i.selection.item(r),"selected")}},_loadAttributeMembers:function(e){
var t=this;if(r.isObject(this.searchCache[0])){if("FILTER_RANGE"==this.type){if(e){
var i=h.byId("FT_rangeOp");i.value=e}this._onChangeRangeOp()}else if("FILTER_PICKLIST"==this.type&&e){
var o=h.byId("FT_picklistOp");o.value=e,this._onChangePicklistOp()}}else{this.valueListNode.innerHTML="<span style='margin-left:5px'><span class='page-loading-icon'></span>&nbsp;"+cvCatalog.progressLoading+"</span>";
var s=function(i){i&&(t.asyncRequestId=i,t._getMembers({requestId:i,timeout:1,search:"",
op:e}))};this._initGetMembersRequest("",s)}},_searchValueList:function(e){var t=this,i=this.search.value,r=this.search.value,o=r?r.length:0;
r&&(r=r.toLowerCase());var s=this.searchCache[o];if(this.valueListNode.selection&&this.valueListNode.selection.clear(),
!s||0!=o&&s.key!=r)if(0==this.searchCacheTopIndex||this.searchCacheTopIndex>0&&r&&r.indexOf(this.searchCache[this.searchCacheTopIndex].key)>=0){
for(var a=this.searchCache[this.searchCacheTopIndex].data,n=[],l=0,d=a.length;d>l;++l)cv.util.escapeHtml(a[l].caption).toLowerCase().indexOf(r)>=0&&n.push(a[l]);
this.searchCache[r.length]={key:r,data:n},this.valueListNode.innerHTML=this._formatValueList(n,"AVAILABLE");
}else this.asyncRequest&&this.asyncRequest.cancel(),this.valueListNode.innerHTML="<span style='margin-left:5px'><span class='page-loading-icon'></span>&nbsp;"+cvCatalog.progressLoading+"</span>",
this._initGetMembersRequest(i,function(e){e&&(t.asyncRequestId=e),t._getMembers({
requestId:e,timeout:1,search:i})});else this.valueListNode.innerHTML=this._formatValueList(s.data,"AVAILABLE",s.count);
return e.preventDefault(),e.stopPropagation(),!1},_initGetMembersRequest:function(e,t){
var i={reportXML:this.report.getReportXml(),action:"MEMBERS",attribute:this.attribute,
search:e};return this.asyncRequestId&&(i.prevId=this.asyncRequestId),cv.io.initAsyncRequest(i,t);
},_getMembers:function(e){if(e.requestId==this.asyncRequestId){var t=this;e.time=(new Date).getTime(),
c(cv.contextPath+"service/ajax/getMembers",{handleAs:"json",method:"post",sync:this.asyncMode,
headers:{"Content-Encoding":"utf8"},data:e}).then(function(i){if(cv.dlgWidget.open&&(t.status=null,
e.requestId==t.asyncRequestId)){if(i){if(t.asyncRequestId=t.asyncRequest=null,t.searchCacheTopIndex=i.count&&i.values.length!=i.count?-1:e.search.length,
e.search.length>0)t.searchCache[e.search.length]={key:e.search.toLowerCase(),data:i.values,
count:i.count};else if(t.searchCache[0]={key:null,data:i.values,count:i.count},t.isTimeAttribute){
var o=h.byId("FT_range1"),s=h.byId("FT_range2");o.innerHTML=s.innerHTML="",cv.util.hide("FT_rangeLoading");
for(var a=0,n=i.values.length;n>a;++a){var l=cv.util.escapeHtml(i.values[a].caption),d=i.values[a].formula;
cv.addOption(o,new Option(l,d)),cv.addOption(s,new Option(l,d))}i.values.length<i.count&&(cv.util.show("FT_rangeWarning"),
h.byId("FT_rangeWarningText").innerHTML=cv.util.substituteParams(cvCatalog.dlgAttributeFilterTooManyValues,i.values.length));
}switch(t.valueListNode.innerHTML=t._formatValueList(i.values,"AVAILABLE",i.count),
t.type){case"FILTER_PICKLIST":0===e.search.length&&t._populateUIPicklistFilter(e.op);
break;case"FILTER_MATCH":break;case"FILTER_PRESET":break;case"FILTER_RANGE":t._populateUIRangeFilter(e.op);
}}else e.timeout=1,t.asyncRequest=null,setTimeout(r.hitch(t,"_getMembers",e),3e3);
t.status&&t.displayMsg(cvCatalog[t.status])}},function(i){"xhr cancelled"!=i.message&&e.requestId==t.asyncRequestId&&(t.asyncRequestId=t.asyncRequest=null,
t.status="dlgErrGeneric",t.displayMsg(cvCatalog[t.status]))},function(e){})}},cancel:function(){
this.asyncRequest&&(this.asyncRequest.cancel(),this.asyncRequest=null),this.asyncRequestId&&(cv.io.cancelAsyncRequest(this.asyncRequestId),
this.asyncRequestId=null),cv.Dialog.prototype.cancel.call(this)},_formatValueList:function(e,t,i){
var r,o,s=e?e.length:0,a="";"SELECTED"==t?(r=h.byId("FT_memberListStat"),o="filterSelectionSummary"):(r=h.byId("FT_valueListStat"),
o=this.search&&this.search.value?"filterMatchesSummary":"filterValuesSummary"),r&&(!i||i>=0&&s>=i?r.innerHTML=cv.util.substituteParams(cvCatalog[o+(1>=s?"Single":"All")],s):r.innerHTML=cv.util.substituteParams(cvCatalog[o+(-1==i?"PartialFirst":"Partial")],s,i));
for(var n=0;s>n;++n){var l=cv.util.escapeHtml(e[n].formula),d=cv.util.escapeHtml(e[n].caption);
"SELECTED"==t?a+='<div id="FT_SEL_':"AVAILABLE"==t&&(a+='<div id="FT_AVA_'),a+=l+'" title="'+l+'">'+d+"</div>";
}return i>s&&(a+="<div style='font-size:92%'>"+cvCatalog.filterHintForFind+"</div>"),
a},_getSelectionList:function(){for(var e=this.memberListNode.getElementsByTagName("DIV"),t=new s,i=0,r=e.length;r>i;++i)t.add({
formula:e[i].id.substring(7),caption:p.textContent(e[i])});return t},_initMatchFilter:function(e){
this.defaultMsg=null;var i=h.byId("FT_matchOp"),o=h.byId("FT_FILTER_MATCH");this.handleOnClickMatchTbl||(this.handleOnClickMatchTbl=t(o,"click",r.hitch(this,"_onClickMatchTbl"))),
this.handleAddExpressionItem||(this.handleAddExpressionItem=t(h.byId("FT_exp_add"),"click",r.hitch(this,"_addExpressionItem"))),
this.defaultFocus=h.byId("FT_expression_0");var s=this.ordinal>0?this.filterProps.predicates.item(this.ordinal)[0]:null;
if(s&&("CONTAIN"==s.op||"NOT_CONTAIN"==s.op)){if(i.value=s.op,s.exp)for(var a=0;a<s.exp.length;++a)this._createExpressionItem(s.exp[a],a+"");
s.parameterName&&this._setParameterName(s.parameterName)}return e&&(i.value=e),i.value||(i.options[0].selected=!0),
!0},_saveMatchFilter:function(){var e=this._getExpressionList();if(0==e.length)return this.displayMsg(cvCatalog.dlgErrFilterRequiredExpression),
!1;var t=this.report.updateFilterProps(this.filterProps,{ordinal:this.ordinal,op:h.byId("FT_matchOp").value,
exp:e});if(t.parameterName=h.byId("FT_PARAMETER_NAME").value,t.exp.length>cvConst.MAX_FILTER_EXPRESSIONS){
if(this.displayMsg(cvCatalog.dlgErrFilterMaxExpressions,cvConst.MAX_FILTER_EXPRESSIONS),
t.ordinal>0&&t.ordinal!=this.ordinal){for(var i=0;i<cvConst.MAX_FILTER_EXPRESSIONS;++i)this._createExpressionItem(t.exp[i],i+"");
this.ordinal=t.ordinal}return!1}return!0},_addExpressionItem:function(){var e=h.byId("FT_FILTER_MATCH");
return e.rows.length==cvConst.MAX_FILTER_EXPRESSIONS+1?void this.displayMsg(cvCatalog.dlgErrFilterMaxExpressions,cvConst.MAX_FILTER_EXPRESSIONS):void this._createExpressionItem();
},_onClickMatchTbl:function(e){if(e.target&&e.target.id){var t=e.target.id;if(0==t.indexOf("FT_exp_remove_")){
var i=h.byId("FT_FILTER_MATCH"),r=i.rows.length;if(2==r)return;t=parseInt(t.substr(14));
for(var o=t;r-2>o;++o)h.byId("FT_expression_"+o).value=h.byId("FT_expression_"+(o+1)).value;
3==r&&l.remove(i,"FT_multiExp"),i.deleteRow(r-2)}}},_getExpressionList:function(){
for(var e=[],t=0,i=h.byId("FT_FILTER_MATCH").rows.length-1;i>t;++t){var r=h.byId("FT_expression_"+t).value;
r&&e.push(r)}return e},_createExpressionItem:function(e,t){var i=h.byId("FT_FILTER_MATCH");
if(t&&(t=h.byId("FT_expression_"+t)),!t){t=i.rows.length-1;var r=i.insertRow(t),o=r.insertCell(0);
o.innerHTML=cvCatalog.filterTemplateExpressionOR,o.className="FT_expressionOR",o=r.insertCell(1),
o.innerHTML='<input type="text" id="FT_expression_'+t+'">',o.className="FT_expression",
o=r.insertCell(2),o.innerHTML="&nbsp;",o.id="FT_exp_remove_"+t,o.className="FT_removeExp",
3==i.rows.length&&l.add(i,"FT_multiExp"),t=h.byId("FT_expression_"+t)}e&&(t.value=e);
},_setParameterName:function(e){h.byId("FT_PARAMETER_ENABLE").checked=!0,h.byId("FT_PARAMETER_NAME").disabled=!1,
h.byId("FT_PARAMETER_NAME").value=e},_toggleParameterCheckbox:function(e){var t=e.target.checked,i=h.byId("FT_PARAMETER_NAME");
t?(i.disabled=!1,i.focus()):(i.value="",i.disabled=!0,l.remove(i,"invalid"))},_validateParameter:function(){
if("FILTER_METRIC"==this.type)return!0;if(!h.byId("FT_PARAMETER_ENABLE").checked)return!0;
var e=h.byId("FT_PARAMETER_NAME");return""==e.value?(this.displayError("Please input a parameter name."),
e.focus(),l.add(e,"invalid"),!1):!0}})}),define("analyzer/report/cv_rptArithNumberDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/collections/Dictionary","dojox/collections/ArrayList","analyzer/report/cv_rptDlg","dojo/html","dojo/dom-class","dojo/dom-geometry","dojo/request","dojo/dom","dojo/dom-construct","dojox/xml/parser","dijit/form/DateTextBox","dojo/string"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m,g){
return e("cv.ArithNumberDialog",[cv.Dialog],{constructor:function(e){this.report=e,
this.rptDlg=this.report.rptDlg,this.dlgTemplate="arithNumberDlg.html",this.prefix="MA_";
},destroy:function(){this.clear()},clear:function(){},show:function(e,i){function o(e,t){
var i=0,r=0;if("number"==typeof e.selectionStart)i=e.selectionStart,r=e.selectionEnd,
e.value=e.value.slice(0,i)+t+e.value.slice(r);else if(document.selection){if(!c){
var o=(event.srcElement,e.createTextRange());o.moveStart("character",e.value.length),
o.collapse(!0),o.select()}e.focus();var s=document.selection.createRange();s.text=t;
}}function s(e){var t=e.target;if(!t)return!0;if("INPUT"==t.tagName&&"button"==t.type)1==t.value.length?o(l,t.value):t.id==u.prefix+"clear"&&(l.value=""),
e.preventDefault();else if(t.id==u.prefix+"measures"||t.id==u.prefix+"addField"||"OPTION"==t.tagName){
if(""!=a.options[a.selectedIndex].value){var i;i=0==a.options[a.selectedIndex].value.indexOf("[MEASURE:")?"["+a.options[a.selectedIndex].text+"]":a.options[a.selectedIndex].value,
o(l,i),u.enableOkButton()}}else t.id==u.prefix+"content"&&(c=!0);return l.focus(),
!1}var a=this.rptDlg.byId("measures");a.selectedIndex=-1;var n=this.rptDlg.byId("ops").childNodes,l=this.rptDlg.byId("content"),d=cv.getFieldHelp(),c=!1,u=this;
cv.util.hide(h.byId("mdxTableRow"));for(var p=0;p<n.length;++p)"INPUT"==n[p].tagName&&"button"==n[p].type&&t(n[p],"click",s);
t(this.rptDlg.byId("addField"),"click",s),t(a,"dblclick",s),t(this.rptDlg.byId("clear"),"click",s),
t(this.rptDlg.byId("content"),"click",s),cv.dlgWidget.onCancel=r.hitch(this,"cancel"),
cv.util.setHelpTopics(["helpCalculateSubtotals","CV/Business_User/working_with_calculations.html#subtotal_calculation"]),
this.helpTopic+="creating_new_numbers";var m=cv.getFieldHelp().showHiddenFields;if("arith_edit"==this.rptDlg.type){
this.dataSourceOrigin={},this.report.addOptionsForAllMeasures(a,!0,this.rptDlg.dataSource.getId(),!0,m),
this.dataSourceOrigin.label=this.byId("name").value=this.rptDlg.dataSource.getDisplayLabel(!0),
this.dataSourceOrigin.numberFormat=this.rptDlg._updateNumberFormat(this.rptDlg.dataSource,!0),
this.dataSourceOrigin.expression=cv.textContent(this.rptDlg.dataSource.getMetricFacet()),
l.value=this._transformArithExpression(this.dataSourceOrigin.expression,!1),this.rptDlg.byId("calculateSubtotalsUsingFormula").checked="true"==this.rptDlg.dataSource.getCalculateSubtotalsUsingFormula();
var g=cv.util.substituteParams(cvCatalog.dlgPropertiesTitle,this.dataSourceOrigin.label);
h.byId("dialogTitleText").innerText=g,h.byId("dialogTitleText").title=g}else if("edit_calculated_measure"==this.rptDlg.type){
if(this.report.addOptionsForAllMeasures(a,!0,null,!0,m),this.populateFormFields(),
d.selectedMenuField){var v=d.selectedMenuField.getAttribute("formula"),f=d.get(v,"displayLabel").trim(),g=cv.util.substituteParams(cvCatalog.dlgPropertiesTitle,f);
h.byId("dialogTitleText").innerText=g,h.byId("dialogTitleText").title=g,this.setTextAndTitle("mdx",v),
cv.util.show(h.byId("mdxTableRow"))}this.byId("applyDataSource").checked=!0,this.byId("applyDataSourceWrapper").style.display="none";
}else{if(this.byId("name").value="",this.report.addOptionsForAllMeasures(a,!0,null,!0,m),
"measures_arith"==this.rptDlg.type){var b=this.rptDlg.dataSource.getFormula();b=this._transformArithExpression(b,!1),
l.value+=b}else l.value+=cv.getFieldHelp().selectedMenuField.getAttribute("formula");
this.rptDlg.refGem=this.rptDlg.dataSource,this.rptDlg.dataSource=null,"create_calculated_measure"==this.rptDlg.type&&(this.byId("applyDataSource").checked=!0,
this.byId("applyDataSourceWrapper").style.display="none")}cv.api.util._hasInlineModelingPermission()||(this.byId("applyDataSourceWrapper").style.display="none",
this.byId("applyDataSource").checked=!1),this.showDialog(),this.trackFormChange();
},populateFormFields:function(){var e=cv.getFieldHelp();if(e.selectedMenuField){var t=e.selectedMenuField.getAttribute("formula").trim(),i=e.get(t,"displayLabel").trim(),r=e.getModelInfoValue(t,"InlineFormatCategory").trim(),o=e.getModelInfoValue(t,"InlineFormatScale").trim(),s=e.getModelInfoValue(t,"InlineFormulaExpression").trim(),a=e.getModelInfoValue(t,"InlineCalcSubtotals").trim();
this.byId("name").value=i;for(var n=this.byId("formatCategory").options,l=0;l<=n.length-1;l++){
var d=n[l];d.value==r&&(n.selectedIndex=d.index)}for(var c=this.byId("formatScale").options,l=0;l<=c.length-1;l++){
var h=c[l];h.value==o&&(c.selectedIndex=h.index)}this.byId("content").value=s,this.byId("calculateSubtotalsUsingFormula").checked="true"==a?!0:!1;
}},save:function(){var e=g.trim(this.byId("name").value),t=this.byId("applyDataSource").checked;
if(this.rptDlg.noHide=!1,l.remove(this.byId("name"),"invalid"),l.remove(this.byId("formatCategory"),"invalid"),
l.remove(this.byId("formatScale"),"invalid"),l.remove(this.byId("content"),"invalid"),
!this.rptDlg._validateName())return void(this.rptDlg.noHide=!0);var i="edit_calculated_measure"===this.rptDlg.type,r=cv.util.isValidMeasureName(e,!i);
if(t&&r!==!0)return l.add(this.byId("name"),"invalid"),this.rptDlg.displayError(r),
void(this.rptDlg.noHide=!0);if(!this.rptDlg._validateNumberFormatAndDecimalPlaces())return void(this.rptDlg.noHide=!0);
var o,s="[MEASURE:0]",a=this.report.reportDoc,n=this._transformArithExpression(this.byId("content").value,!0),d=this.byId("calculateSubtotalsUsingFormula").checked?"true":"false";
if(t){if(n.indexOf("[MEASURE:")>=0)return l.add(this.byId("content"),"invalid"),this.rptDlg.displayError(cvCatalog.errorModelingCalcMeasureValidationReportMeasure),
void(this.rptDlg.noHide=!0);o=a.reportRecord.cloneNode(!0);var c=a.createNode({zoneId:"measures",
metricType:"EXPRESSION",formula:null,expression:n,refGem:this.rptDlg.refGem,gemType:cvConst.TYPE_METRIC
});c.setAttribute("id",s),labelNode=cv.createNode(a.reportRecord,"displayLabel"),
labelNode.setAttribute("label",e?e:""),labelNode.setAttribute("labelPlural",""),labelNode.setAttribute("locale","");
var h=this.rptDlg._updateNumberFormat();a.setNumberFormat(c,h),a.updateCalculateSubtotalsUsingFormula(d,c);
var u=o.getElementsByTagName("report"),m=o.getElementsByTagName("measures");if(1!=u.length)return this.rptDlg.noHide=!0,
this.rptDlg.displayError(cvCatalog.dlgErrGeneric),!1;u=u[0],1==m.length&&u.removeChild(m[0]),
m=cv.createNode(a.reportRecord,"measures"),m.appendChild(c),u.appendChild(m),o=p.innerXML(o);
}else this.rptDlg.dataSource?this.rptDlg.dataSource.update({expression:n}):(this.rptDlg.dataSource=this.report.createSpecialMetricGem({
zoneId:"measures",metricType:"EXPRESSION",formula:null,refGem:this.rptDlg.refGem}),
this.rptDlg.dataSource.update({expression:n})),this.rptDlg.dataSource.setDisplayLabel(e),
this.rptDlg._updateNumberFormat(this.rptDlg.dataSource),this.rptDlg.dataSource.setCalculateSubtotalsUsingFormula(d),
o=this.report.getReportXml(),s=this.rptDlg.dataSource.getId();var v=cv.util.parseAjaxMsg(cv.io.ajaxLoad("service/ajax/validateCalculatedMeasure",{
reportXML:o,measureId:s,annotations:this.report.getModelAnnotationsJson()},!0));if(!v||"error"==v.type)return this.rptDlg.noHide=!0,
this.rptDlg.displayError(v&&v.details?v.details:cvCatalog.dlgErrGeneric),!1;if(t){
var f,b,y=cv.getFieldHelp();if("edit_calculated_measure"===this.rptDlg.type){b=y.selectedMenuField.getAttribute("formula").trim();
var _=y.get(b,"measureName");f="actionUpdateCalculatedMeasure",cv.util.createUpdateCalcMeasureAnnotation(_,_,n,e,e,this.byId("formatCategory").value,this.byId("formatScale").value,d,!1),
this.rptDlg.dataSource=void 0}else b="[Measures].["+e+"]",f="actionCreateCalculatedMeasure",
cv.util.createCalcMeasureAnnotation(e,n,e,e,this.byId("formatCategory").value,this.byId("formatScale").value,d,!1);
var T=this.report.manager.updateCatalog(!0);if("undefined"!=typeof T)return this.report.modelAnnotations.pop(),
this.rptDlg.displayMsg(cvCatalog.dlgErrGeneric),this.rptDlg.noHide=!0,!1;if(this.rptDlg.dataSource)cv.util.convertReportCalcMeasureToModel(this.rptDlg.dataSource.getFormula(),e);else if("measures_arith"===this.rptDlg.type){
var C,I;if(this.report.isReportFormatPivot()){C="measures";var m=this.report.api.report.getLayoutFields(C);
I=m.indexOf(this.rptDlg.refGem.getFormula())+1}else{var A=this.report.getNextAvailableGembarForField(b);
null!==A&&(C=A.name,I=A.fieldPosition)}C&&this.report.api.report.addLayoutField(C,b,I);
}b&&e&&this.report.refreshReport(),this.report.history.add(new cv.ReportState(f,e));
}else this.report.history.add(new cv.ReportState("arith_edit"==this.rptDlg.type?"actionEdit":"actionAdd",e)),
"arith_edit"==this.rptDlg.type&&this.report.reportDoc.isUsedByMetricFilter(this.rptDlg.dataSource.getFormula())&&this.report.populateFilters();
return!0},cancel:function(){switch(this.rptDlg.type){case"measures_arith":this.rptDlg.dataSource&&(this.report.gemList.remove(this.rptDlg.dataSource.getId()),
cv.util.removeNode(this.rptDlg.dataSource.xmlNode));break;case"arith_edit":this.rptDlg.dataSource.update(this.dataSourceOrigin);
}cv.Dialog.prototype.cancel.call(this)},_transformArithExpression:function(e,t){for(var i=this.byId("measures").options,r={},o=0;o<i.length;++o)0==i[o].value.indexOf("[MEASURE:")&&(t?r["["+i[o].text+"]"]=i[o].value:r[i[o].value]="["+i[o].text+"]");
var s;return s=t?/(\[(\\\]|[^\]])+\])/g:/(\[MEASURE[^\]]+\])/g,e.replace(s,function(e,t){
return r[e]?r[e]:e})}})}),define("analyzer/report/cv_rptCreateMeasureDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/collections/Dictionary","dojox/collections/ArrayList","analyzer/report/cv_rptDlg","dojo/html","dojo/dom-class","dojo/dom-geometry","dojo/request","dojo/dom","dojo/dom-construct","dojox/xml/parser","dijit/form/DateTextBox"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m){
return e("cv.CreateMeasureDialog",[cv.Dialog],{constructor:function(e){this.report=e,
this.rptDlg=this.report.rptDlg,this.dlgTemplate="createMeasureDlg.html",this.prefix="FT_",
this.filterTypes=["FILTER_METRIC","FILTER_PICKLIST","FILTER_MATCH","FILTER_PRESET","FILTER_RANGE"];
},destroy:function(){this.clear()},clear:function(){},show:function(e,t){this.dlgTemplate="createMeasureDlg.html",
this.helpTopic="CV/Business_User/working_with_filters.html#filters_on_text_fields",
this.showDialog()},save:function(){var e=cv.getFieldHelp(),t=document.getElementById("CM_measureName").value,i=document.getElementById("CM_aggType").value,r=document.getElementById("CM_formatCategory"),o=document.getElementById("CM_formatScale");
null==r&&(r="General Number"),null==o&&(o="0");var s=cv.util.isValidMeasureName(t);
if(s!==!0)return this.rptDlg.noHide=!0,void this.showError(s);if(e.selectedMenuField){
var a=e.selectedMenuField.getAttribute("formula"),n="NUMBER"==e.get(a,"type")?"Measure":"HierarchyLevel",l=(e.get(a,"displayLabel"),
e.manager.report),d={};e.count||(e.count=1),d.source={cube:l.cube,measure:a,sourceType:n
},d.type="CREATE_MEASURE",d.properties={name:t,aggregationType:i,formatCategory:r,
formatScale:o},l.modelAnnotations.push(d);var c=l.manager.updateCatalog(!0);if("undefined"!=typeof c)return l.modelAnnotations.pop(),
this.rptDlg.noHide=!0,void this.showError(c);l.history.add(new cv.ReportState("actionCreateMeasure",t)),
l.api.operation.refreshReport()}},cancel:function(){cv.Dialog.prototype.cancel.call(this);
}})}),define("analyzer/report/cv_rptRemoveMeasureDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/collections/Dictionary","dojox/collections/ArrayList","analyzer/report/cv_rptDlg","dojo/html","dojo/dom-class","dojo/dom-geometry","dojo/request","dojo/dom","dojo/dom-construct","dojox/xml/parser","dijit/form/DateTextBox"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m){
return e("cv.RemoveMeasureDialog",[cv.Dialog],{constructor:function(e){this.report=e,
this.dlgTemplate="removeMeasureDlg.html",this.prefix="RM_"},destroy:function(){this.clear();
},clear:function(){},show:function(e,t){this.dlgTemplate="removeMeasureDlg.html",
this.helpTopic="CV/Business_User/working_with_filters.html#filters_on_text_fields",
this.showDialog()},save:function(){var e="Measures",t=cv.getFieldHelp();if(t.selectedMenuField){
var i=t.selectedMenuField.innerHTML,r=t.selectedMenuField.getAttribute("formula"),o="NUMBER"==t.get(r,"type")?"Measure":"HierarchyLevel";
"true"==t.get(r,"calculated")&&(o="CalculatedMember");var s=(t.get(r,"displayLabel"),
t.manager.report),a={};a.source={cube:s.cube,measure:r,sourceType:o},a.properties={
name:i,dimension:e},a.type="REMOVE_MEASURE",s.modelAnnotations.push(a),s.manager.updateCatalog(),
s.history.add(new cv.ReportState("actionRemoveMeasure",i)),s.api.operation.refreshReport();
}},cancel:function(){cv.Dialog.prototype.cancel.call(this)}})}),define("analyzer/report/cv_rptMeasurePropertiesDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/collections/Dictionary","dojox/collections/ArrayList","analyzer/report/cv_rptDlg","dojo/html","dojo/dom-class","dojo/dom-geometry","dojo/request","dojo/dom","dojo/dom-construct","dojox/xml/parser","dijit/registry","pentaho/common/FormatCombo"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m,g){
return e("cv.MeasurePropertiesDialog",[cv.Dialog],{constructor:function(e){this.report=e,
this.rptDlg=this.report.rptDlg,this.dlgTemplate="measurePropertiesDlg.html",this.prefix="MP_",
this.helpTopic="CV/Business_User/working_with_filters.html#filters_on_text_fields",
this.formatText=m.byId("MP_formatText")},destroy:function(){this.clear()},clear:function(){},
show:function(e,t){this.formatText=m.byId("MP_formatText");var i=cv.api.util._hasInlineModelingPermission();
this.measure={};var r=cv.getFieldHelp();if(r.selectedMenuField){var o=r.selectedMenuField.getAttribute("formula"),s=r.get(o,"aggregationType"),a=r.get(o,"displayLabel"),n=r.get(o,"formatString"),l=r.get(o,"displayDescription"),d="true"===r.get(o,"calculated"),c=cv.util.substituteParams(cvCatalog.dlgPropertiesTitle,a);
h.byId("dialogTitleText").innerText=c,h.byId("dialogTitleText").title=c;var u=this.report.getFieldLabel(o);
if(u&&u!=a){var p=cv.util.substituteParams(cvCatalog.dlgAboutFieldRenamed,u);this.setTextAndTitle("fieldRenamed",p),
cv.util.show("MP_fieldRenamed")}this.setTextAndTitle("mdx",o),this.setTextAndTitle("description",l?l:a),
i?(this.byId("name").value=a,cv.util.hide("MP_nameLabel"),this.byId("aggType").value=s,
cv.util.hide("MP_aggTypeLabel"),cv.util.show("MP_aggContainer"),this.formatText.setDataType("numeric"),
this.formatText.set("value",n),cv.util.hide("MP_formatTextLabel")):(cv.util.hide("MP_name"),
this.setTextAndTitle("nameLabel",a),cv.util.hide("MP_aggType"),this.setTextAndTitle("aggTypeLabel",s),
cv.util.hide("MP_formatContainer"),n?this.setTextAndTitle("formatTextLabel",n):cv.util.hide("MP_format"),
cv.util.hide("dlgBtnSave"),h.byId("dlgBtnCancel").innerText=cv.util.substituteParams(cvCatalog.btnLabelClose)),
d&&cv.util.hide("MP_aggContainer")}this.showDialog(),this.trackFormChange(),this.addKeyUpHandler(this.byId("name"));
},addKeyUpHandler:function(e){var t,i=h.byId("dlgBtnSave"),r=h.byId("error-measure-name"),o=this.report.okTimeoutInterval;
e.onkeyup=function(e){clearInterval(t);var s=this;t=setTimeout(function(){var e=s.value.toLowerCase(),t=cv.util.isValidMeasureName(e);
t!==!0?(i.disabled=!0,n.set(r,t),r.style.display="block"):(i.disabled=!1,r.style.display="none");
},o)}},hasPropertiesChanged:function(e,t){var i=e.selectedMenuField.getAttribute("formula"),r=e.get(i,"aggregationType"),o=e.get(i,"displayLabel"),s=e.get(i,"formatString");
return r!==t.properties.aggregation||o!==t.properties.name||s!==t.properties.format?!0:!1;
},save:function(){var e=cv.getFieldHelp(),t=this.byId("name").value,i=this.byId("aggType").value,r=this.formatText.get("value");
this.rptDlg.noHide=!1;var o=cv.util.isValidMeasureName(t);if(o!==!0)return this.rptDlg.noHide=!0,
void this.showError(o);if(e.selectedMenuField){var s=e.selectedMenuField.getAttribute("formula"),a=(e.get(s,"displayLabel"),
e.manager.report),n={};if(e.count||(e.count=1),n.source={cube:a.cube,measure:s},n.type="UPDATE_MEASURE",
n.properties={name:"",caption:t,aggregation:i,format:r},!this.hasPropertiesChanged(e,n))return;
a.modelAnnotations.push(n);var l=a.manager.updateCatalog(!0);if("undefined"!=typeof l)return a.modelAnnotations.pop(),
this.rptDlg.noHide=!0,void this.showError(l);this.report.refreshReport(),a.history.add(new cv.ReportState("actionUpdateMeasure",t));
}},cancel:function(){cv.Dialog.prototype.cancel.call(this)}})}),define("analyzer/report/cv_rptAttributePropertiesDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/collections/Dictionary","dojox/collections/ArrayList","analyzer/report/cv_rptDlg","dojo/html","dojo/dom-class","dojo/dom-geometry","dojo/request","dojo/dom","dojo/dom-construct","dojox/xml/parser","dijit/registry","pentaho/common/FormatCombo"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m,g){
return e("cv.AttributePropertiesDialog",[cv.Dialog],{constructor:function(e){this.report=e,
this.rptDlg=this.report.rptDlg,this.dlgTemplate="attributePropertiesDlg.html",this.prefix="AP_",
this.helpTopic="CV/Business_User/working_with_filters.html#filters_on_text_fields",
this.formatText=m.byId("AP_formatText")},destroy:function(){this.clear()},clear:function(){},
show:function(e,t){this.attribute={},this.formatText=m.byId("AP_formatText");var i=cv.api.util._hasInlineModelingPermission(),r=cv.getFieldHelp();
if(r.selectedMenuField){var o=r.selectedMenuField.getAttribute("formula"),s=r.get(o,"displayLabel"),a=r.get(o,"type"),n=r.get(o,"displayDescription");
a=cvCatalog["fieldTypes_"+a];var l=r.get(o,"formatString"),d=cv.util.substituteParams(cvCatalog.dlgPropertiesTitle,s);
h.byId("dialogTitleText").innerText=d,h.byId("dialogTitleText").title=d,this.setTextAndTitle("mdx",o),
this.setTextAndTitle("description",n?n:s),this.setTextAndTitle("type",a);var c=cv.getFieldHelp().getProperties(o);
if(c&&c.length>1){var u="";cv.util.show("AP_memberProperties");for(var p=0;p<c.length;++p){
var g=c[p];0!=p&&(u+=", "),u+=g}this.setTextAndTitle("memberPropertiesDescription",u);
}i?(cv.util.hide("AP_nameLabel"),cv.util.hide("AP_formatTextLabel"),this.byId("name").value=s,
this.formatText.set("value",l)):(cv.util.hide("AP_name"),cv.util.hide("AP_formatContainer"),
this.setTextAndTitle("nameLabel",s),this.setTextAndTitle("formatTextLabel",l),cv.util.hide("dlgBtnSave"),
h.byId("dlgBtnCancel").innerText=h.byId("dlgBtnSave").innerText);var v=r.getDatabaseInfo(o);
v.dataType&&"string"!=v.dataType.toLowerCase()?(cv.util.show("formatWrapper"),this.formatText.setDataType(v.dataType.toLowerCase())):l?cv.util.show("formatWrapper"):cv.util.hide("formatWrapper");
}this.showDialog(),this.trackFormChange(),this.addKeyUpHandler(this.byId("name"));
},addKeyUpHandler:function(e){var t,i=h.byId("dlgBtnSave"),r=h.byId("error-attribute-name"),o=this.report.okTimeoutInterval;
e.onkeyup=function(e){clearInterval(t);var s=this;t=setTimeout(function(){var e=s.value.toLowerCase(),t=cv.util.isValidAttributeName(e);
t!==!0?(i.disabled=!0,n.set(r,t),r.style.display="block"):(i.disabled=!1,r.style.display="none");
},o)}},hasPropertiesChanged:function(e,t){var i=e.selectedMenuField.getAttribute("formula"),r=e.get(i,"displayLabel"),o=e.get(i,"formatString");
return r!==t.properties.name||o!==t.properties.formatString?!0:!1},save:function(){
var e=cv.getFieldHelp(),t=e.selectedMenuField.getAttribute("formula"),i=e.get(t),r=this.byId("name").value,o=i.getAttribute("level"),s=i.getAttribute("hierarchy").replace(/[\[\]]/g,""),a=i.getAttribute("dimension").replace(/[\[\]]/g,""),n=this.formatText.get("value");
0===s.indexOf(a+".")&&(s=s.substring(a.length+1)),this.rptDlg.noHide=!1;var l=cv.util.isValidAttributeName(r);
if(l!==!0)return this.rptDlg.noHide=!0,void this.showError(l);if(e.selectedMenuField){
var d=(e.get(t,"displayLabel"),e.manager.report),c={};if(e.count||(e.count=1),c.source={
cube:d.cube},c.type="UPDATE_ATTRIBUTE",c.properties={name:r,dimension:a,hierarchy:s,
level:o,formatString:n},!this.hasPropertiesChanged(e,c))return;d.modelAnnotations.push(c);
var h=d.manager.updateCatalog(!0);if("undefined"!=typeof h)return d.modelAnnotations.pop(),
this.rptDlg.noHide=!0,void this.showError(h);this.report.refreshReport(),d.history.add(new cv.ReportState("actionUpdateAttribute",r));
}},cancel:function(){cv.Dialog.prototype.cancel.call(this)}})}),define("analyzer/report/cv_rptFilterMetricDlg",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","analyzer/report/cv_rptFilterDlg","dojo/html","dojo/dom-class","dojo/dom"],function(e,t,i,r,o,s,a,n){
r.extend(cv.FilterDialog,{showMetricFilter:function(e,t){this.clear(),this.attributeType=this.type="FILTER_METRIC",
e&&(0==e.indexOf("[MEASURE:")||"NUMBER"==cv.getFieldHelp().get(e,"type")?this.metric=e:this.attribute=e),
t||(t="CONDITIONS"),this._initMetricFilter(t)&&this.showDialog()},_initMetricFilter:function(e){
if(this.helpTopic="CV/Business_User/working_with_filters.html#filters_on_number_fields",
!this.report.reportDoc.getNode("//cv:attribute"))return this.report.rptDlg.showError("errorNoAttributeInReport","CV/Business_User/working_with_filters.html#filters_on_number_fields"),
!1;if(this.type="FILTER_METRIC",this.gem=this.report.getGem("filter_metric"),this.gem&&(this.attribute&&!this.report.reportDoc.isUsedByMetricFilter(this.attribute)||this.metric&&!this.report.reportDoc.isUsedByMetricFilter(this.metric))&&(this.attribute=this.metric=null),
this.dlgTemplate="filterMetricDlg.html",!this.load())return alert(this.status),!1;
this.filterProps=this.report.reportDoc.getMetricFilter(),this.rankCtrl=n.byId("FT_rank"),
t(this.rankCtrl,"click",r.hitch(cv.util,"onToggleSectionCheckbox"));var i=n.byId("FT_rankMetric");
if(this.report.addOptionsForAllMeasures(i),this.filterProps?(this.attribute=this.filterProps.formula,
this.filterProps.rank?(i.value=this.filterProps.rank.formula,n.byId("FT_rankType").value=this.filterProps.rank.type,
n.byId("FT_rankCount").value=this.filterProps.rank.count):"RANK"!=e&&cv.util.setSectionCollapsed("FT_rank")):(this.metric&&(i.value=this.metric),
"RANK"!=e&&cv.util.setSectionCollapsed("FT_rank")),this.conditionsCtrl=n.byId("FT_conditions"),
t(this.conditionsCtrl,"click",r.hitch(cv.util,"onToggleSectionCheckbox")),t(n.byId("FT_addCondition"),"click",r.hitch(this,"_editCondition")),
t(n.byId("FT_conditionsList"),"click",r.hitch(this,"_onClickConditionsList")),this.filterProps&&this.filterProps.conditions){
this.numConditions=this.filterProps.conditions.length;for(var o=0;o<this.numConditions;++o)this._updateCondition("FT_condition_"+o,!0);
}else this.numConditions=1,this._editCondition("FT_condition_0"),(this.filterProps||"RANK"==e)&&cv.util.setSectionCollapsed("FT_conditions");
var s=n.byId("FT_attribute");return this.report.addOptionsForAttributes(s),1==s.options.length?(this.attribute=s.options[0].value,
s.parentNode.innerHTML=cv.util.substituteParams(cvCatalog.filterMetricSubtitle,s.options[0].innerHTML)):(this.attribute&&(s.value=this.attribute),
t(s,"change",r.hitch(this,"_selectMetricFilterAttribute"))),this._selectMetricFilterAttribute(),
this.filterProps||(this.filterProps={}),this.filterProps.type=this.type,this.filterProps.old=this.attribute,
this.defaultFocus=n.byId("RANK"==e?"FT_rank":"FT_conditions"),!0},_saveMetricFilter:function(){
var e=n.byId("FT_attribute");if(this.filterProps.formula=e?e.value:this.attribute,
this.conditionsCtrl.checked){if(this.selectedItem&&!this._updateCondition())return!1;
}else this.filterProps.conditions=null;if(this.rankCtrl.checked){var t={formula:n.byId("FT_rankMetric").value,
type:n.byId("FT_rankType").value,count:n.byId("FT_rankCount").value},i=this._validateRank(t);
if(i)return this.displayMsg(cvCatalog[i]),!1;t.count=parseInt(t.count),this.filterProps.rank=t,
this.report.setSortOrder(t.formula,"BOTTOM"==t.type?"ASC":"DESC",!1,!0)}else this.filterProps.rank=null;
return this.filterProps.conditions||this.filterProps.rank||(this.report.removeFilter("filter_metric_0"),
this.filterProps=null),!0},_editCondition:function(e){if(this._updateCondition()){
var i;"string"!=typeof e?(i=this.filterProps.conditions.length,++this.numConditions,
e="FT_condition_"+i):i=parseInt(this._getListItemIndex(e));var o=n.byId(e);o||(o=document.createElement("div"),
n.byId("FT_conditionsList").appendChild(o),a.add(o,"filterCondition"),o.id=e),a.add(o,"filterConditionSelected"),
o.innerHTML=cv.util.substituteParams(cvCatalog.filterConditionEdit,{GT:cvCatalog.filterConditionOperators_GREATER_THAN,
GTE:cvCatalog.filterConditionOperators_GREATER_THAN_EQUAL,LT:cvCatalog.filterConditionOperators_LESS_THAN,
LTE:cvCatalog.filterConditionOperators_LESS_THAN_EQUAL,E:cvCatalog.filterConditionOperators_EQUAL,
NE:cvCatalog.filterConditionOperators_NOT_EQUAL,B:cvCatalog.filterConditionOperators_BETWEEN,
NN:cvCatalog.filterConditionOperators_IS_NOT_EMPTY});var s=n.byId("FT_condMetric");
this.report.addOptionsForAllMeasures(s);var l=n.byId("FT_condOp");if(t(l,"change",r.hitch(this,"_setConditionOperands")),
this.filterProps&&this.filterProps.conditions&&this.filterProps.conditions[i]){var d=this.filterProps.conditions[i];
s.value=d.formula,l.value=d.operator,n.byId("FT_condOp1").value=d.op1,n.byId("FT_condOp2").value=d.op2?d.op2:"";
}else this.metric&&(s.value=this.metric);this._setConditionOperands(),this.selectedItem=e;
}},_updateCondition:function(e,t){if(!e){if(!this.selectedItem)return!0;e=this.selectedItem;
}var i,r=parseInt(this._getListItemIndex(e)),o=n.byId(e);if(o)this.filterProps.conditions||(this.filterProps.conditions=[]),
r==this.filterProps.conditions.length&&this.filterProps.conditions.push({}),i=this.filterProps.conditions[r],
i.formula=n.byId("FT_condMetric").value,i.operator=n.byId("FT_condOp").value,i.op1=n.byId("FT_condOp1").value,
i.op2="BETWEEN"!=i.operator?null:n.byId("FT_condOp2").value;else{if(!t)return!0;o=document.createElement("div"),
n.byId("FT_conditionsList").appendChild(o),a.add(o,"filterCondition"),o.id=e,i=this.filterProps.conditions[r];
}var s=this._validateCondition(i);return s?(this.displayMsg(cvCatalog[s]),!1):(o.innerHTML=cv.util.substituteParams(cvCatalog.filterConditionStatic,{
metric:this.report.getFieldLabel(i.formula),op:cvCatalog["filterConditionOperators_"+i.operator],
op1:i.op1?i.op1:" ",op2:i.op2?i.op2:" ",op2Css:i.op2?" ":"hidden"}),a.remove(o,"filterConditionSelected"),
this.selectedItem=null,this.displayMsg(),!0)},_onClickConditionsList:function(e){
var t=e.target,i=cv.util.getAncestorByClass(t,"filterCondition");if(!i)return this._updateCondition();
if(a.contains(t,"filterConditionDelete")){if(1==this.numConditions)return this.displayMsg(cvCatalog.dlgErrFilterLastCondition);
var r=this._getListItemIndex(i.id);return this.filterProps.conditions[r]=null,this.selectedItem==i.id&&(this.selectedItem=null),
cv.util.removeNode(i),void--this.numConditions}i.id!=this.selectedItem&&this._updateCondition()&&this._editCondition(i.id);
},_selectMetricFilterAttribute:function(){var e=n.byId("FT_attribute");n.byId("FT_rankAttribute").innerHTML=this.report.getFieldLabel(e?e.value:this.attribute);
},_setConditionOperands:function(){var e=n.byId("FT_condOp").value,t=n.byId("FT_condOp1"),i=n.byId("FT_condOp2").parentNode;
"IS_NOT_EMPTY"==e?(cv.util.hide(t,i),t.value=i.value=""):"BETWEEN"==e?cv.util.show(t,i):(cv.util.show(t),
cv.util.hide(i),i.value="")},_validateCondition:function(e){var t=parseFloat(e.op1),i=parseFloat(e.op2);
return e.formula&&e.operator?"IS_NOT_EMPTY"==e.operator||cv.util.checkNumber(e.op1)?"BETWEEN"!=e.operator||cv.util.checkNumber(e.op2)?t>=i?(this.setInvalidInputField("FT_condOp1"),
"dlgErrFilterConditionOp2LTOp1"):null:(this.setInvalidInputField("FT_condOp2"),"dlgErrFilterConditionNumberExpected"):(this.setInvalidInputField("FT_condOp1"),
"dlgErrFilterConditionNumberExpected"):"dlgErrFilterConditionRequiredFields"},_validateRank:function(e){
return cv.util.checkPositiveInteger(e.count)?e.formula&&e.type?void 0:"dlgErrFilterRankRequiredFields":(this.setInvalidInputField("FT_rankCount"),
"dlgErrFilterRankNumberExpected")},_getListItemIndex:function(e){return e.substr(13);
}})}),define("analyzer/report/cv_rptDatePickerDlg",["dojo/_base/declare","dojo/dom","dojo/dom-class","dojo/json","analyzer/report/cv_rptDlg","dojo/request","dojo/_base/lang","dojo/on","dojo/dom-geometry","dojo/dom-style"],function(e,t,i,r,o,s,a,n,l,d){
return e("cv.DatePickerDialog",[cv.Dialog],{constructor:function(e,t){this.report=t,
this.dlgTemplate="datePickerDlg.html",this.prefix="DP_",this.templateCache=null,this.rangeOp=null,
this.parent=e,this.validatedMember1=null,this.validatedMember2=null,this.lastValidatedMember=null,
this.lastRange1LookupValue=null,this.lastRange2LookupValue=null},init:function(){
this.rangeOp=dojo.byId("FT_rangeOp").value;var e=this.report.getFieldLabel(this.parent.attribute)+" is ";
e+="BETWEEN"==this.rangeOp?cvCatalog.filterConditionOperators_BETWEEN:"AFTER"==this.rangeOp?cvCatalog.dlgAttributeFilterAfter:cvCatalog.dlgAttributeFilterBefore,
e+=" "+cvCatalog.dlgAttributeFilterAndIncludes,t.byId("DP_title").innerHTML=e,"BETWEEN"==this.rangeOp?(t.byId("DP_range1DateLabel").innerHTML=cvCatalog.dlgDatePickerDateBegin,
this._getDateByMember(1),this._getDateByMember(2)):(t.byId("DP_range1DateLabel").innerHTML=cvCatalog.dlgDatePickerDate,
cv.util.hide(dojo.byId("DP_range2")),this._getDateByMember(1));var i=this;this.lastRange1LookupValue=t.byId("DP_range1_lookup").value,
this.lastRange2LookupValue=t.byId("DP_range2_lookup").value;var r=$("#DP_range1_lookup, #DP_range2_lookup");
r.on("focus keyup blur",function(){if($(".dijitTooltip").hide(),"DP_range1_lookup"==$(this)[0].id){
if(i.lastRange1LookupValue==$(this)[0].value)return;i.lastRange1LookupValue=$(this)[0].value;
}else if("DP_range2_lookup"==$(this)[0].id){if(i.lastRange2LookupValue==$(this)[0].value)return;
i.lastRange2LookupValue=$(this)[0].value}i._dateLookupValidation.call(i,$(this),r);
})},_dateLookupValidation:function(e,t){var r=!0,o=this;return this.clearMsg(),"BETWEEN"==this.rangeOp?(t.each(function(e,t){
r=o._isValid($(t),!1)&&r}),r&&(r=this._isDateRangeValid()&&r),t.each(function(e,t){
var r=$(t);"true"===r.attr("isValid")&&i.remove(r[0],"invalid")}),r=r&&!t.hasClass("invalid")):(r=this._isValid(e,!0),
r=r&&!e.hasClass("invalid")),$("#dlgBtnSave2").attr("disabled",!r),r},_showError:function(e,t){
this.displayError(t),i.add(e[0],"invalid"),e.attr("isValid",!1)},_isValid:function(e,t){
if(e.val()==cvCatalog.attributeNullValue)this.lastValidatedMember={caption:cvCatalog.attributeNullValue,
formula:e.attr("formula"),exact:!0},"1"==e.attr("id").charAt("DP_range".length)?this.validatedMember1=this.lastValidatedMember:this.validatedMember2=this.lastValidatedMember;else{
if(""==e.val())return this._showError(e,cvCatalog.dlgDatePickerDateFormatError),!1;
var r="[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])";if(e.val().search(r)<0)return this._showError(e,cvCatalog.dlgDatePickerDateFormatError),
!1;var o=this._lookupByDate(e[0]);if(o)return this._showError(e,o),!1;this.lastValidatedMember.exact||(this.displayError(cv.util.substituteParams(cvCatalog.dlgDatePickerNearbyInfo,this.report.getFieldLabel(this.parent.attribute),e.val(),this.lastValidatedMember.caption,this.lastValidatedMember.nearbyDate)),
e.val(this.lastValidatedMember.nearbyDate),"DP_range1_lookup"==e[0].id?this.lastRange1LookupValue=this.lastValidatedMember.nearbyDate:"DP_range2_lookup"==e[0].id&&(this.lastRange2LookupValue=this.lastValidatedMember.nearbyDate));
}return t&&i.remove(e[0],"invalid"),e.attr("isValid",!0),!0},_isDateRangeValid:function(){
var e=$("#DP_range1_lookup"),t=$("#DP_range2_lookup");if(e==cvCatalog.attributeNullValue||t==cvCatalog.attributeNullValue)return!0;
var i=new Date(e.val()),r=new Date(t.val());return i>r?(this._showError(e,cvCatalog.dlgDatePickerDateRangeError),
this._showError(t,cvCatalog.dlgDatePickerDateRangeError),!1):!0},save:function(){
var e=t.byId("FT_range1"),i=cv.util.escapeHtml(this.validatedMember1.caption);e.value=this.validatedMember1.formula,
e.value!=this.validatedMember1.formula&&(cv.addOption(e,new Option(i,this.validatedMember1.formula)),
e.value=this.validatedMember1.formula),"BETWEEN"==this.rangeOp&&(e=t.byId("FT_range2"),
i=cv.util.escapeHtml(this.validatedMember2.caption),cv.addOption(e,new Option(i,this.validatedMember2.formula)),
e.value=this.validatedMember2.formula,e.value!=this.validatedMember2.formula&&(cv.addOption(e,new Option(i,this.validatedMember2.formula)),
e.value=this.validatedMember2.formula)),cv.dlgWidget2.hide()},cancel:function(){cv.dlgWidget2.hide();
},_getDateByMember:function(e){var i=t.byId("DP_range"+e+"_lookup"),r=t.byId("FT_range"+e).value;
if(r.indexOf("[#null]")>-1)i.value=cvCatalog.attributeNullValue,i.setAttribute("formula",r);else{
var o=cv.io.ajaxLoad("service/date/getDateByMember",{catalog:this.report.catalog,
cube:this.report.cube,level:this.parent.attribute,member:r},!0),s=cv.util.parseAjaxMsg(o);
if(s){this.displayError(cv.util.substituteParams(cvCatalog.dlgDatePickerGetDateError,r));
var a=new Date,n=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();i.value=n}else i.value=o;
}},_lookupByDate:function(e){var t=cv.io.ajaxLoad("service/date/lookupDate",{catalog:this.report.catalog,
cube:this.report.cube,level:this.parent.attribute,isoDate:e.value},!0),i=cv.util.parseAjaxMsg(t);
return i?i.details:(this.lastValidatedMember=r.parse(t),"1"==e.id.charAt("DP_range".length)?this.validatedMember1=this.lastValidatedMember:this.validatedMember2=this.lastValidatedMember,
null)},show:function(){var e=this;if(!this.templateCache){var e=this;s(cv.contextPath+"service/templates/"+this.dlgTemplate,{
handleAs:"text",method:"POST",sync:!0}).then(function(t){return cv.util.parseAjaxMsg(t)?void alert("An error occurred loading dialog"):void(e.templateCache=t);
},function(e){alert("An error occurred loading dialog")})}void 0==cv.dlgWidget2&&(cv.dlgWidget2=cv.util.getDojoWidget("theDialog2")),
cv.dlgWidget2.setContent('<form id="theDialogForm2" action="" onsubmit="return false">'+this.templateCache+"</form>"),
this.defaultMsg=null,this.theForm=t.byId("theDialogForm2"),this.msgBar=t.byId("dialogMessageBar2"),
this.msgBar&&cv.util.hide(this.msgBar);var i=t.byId("dlgBtnSave2");if(i&&n(i,"click",a.hitch(this,"save")),
n(t.byId("dlgBtnCancel2"),"click",a.hitch(this,"cancel")),this.init(),cv.dlgWidget2.show(),
t.byId("borderContainer")){var r=l.position(dojo.byId("borderContainer"),!0),o=l.position(cv.dlgWidget2.domNode);
d.set(cv.dlgWidget2.domNode,"top",Math.floor((r.h-o.h)/2)+"px")}}})}),define("analyzer/report/cv_rptDoc",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/collections/Dictionary","dojox/xml/parser","dojo/_base/array","analyzer/report/cv_rptLinkDlg"],function(e,t,i,r,o,s,a){
cv.ReportDocument=function(){this.reportRecord=null,this.status=null,this.childTags={
measures:"measure",columnAttributes:"attribute",rowAttributes:"attribute",filters:"filter"
};var e=cv.analyzerProperties["report.mdx.default.total.type"];this.attributes={measure:{
showAggregate:"AGGREGATE"==e?"true":"false",showSum:"SUM"==e?"true":"false",showAverage:"AVG"==e?"true":"false",
showCount:"COUNT"==e?"true":"false",showMin:"MIN"==e?"true":"false",showMax:"MAX"==e?"true":"false",
measureTypeEnum:"VALUE",sortOrderEnum:"NONE"},attribute:{showSubtotal:"false",sortOrderEnum:"ASC"
},filter:{viewFilterEnum:"NONE"}},this.reportProps=["name","folder","description","cube","reportTypeEnum","update","updatedBy","created","createdBy","title","subtitle"];
},cv.ReportDocument.prototype={initialize:function(e){this.reportRecord=cv.parseXML(e),
cv.setDomDefaultNamespace(this.reportRecord),this.status="reportOpenOK"},getReportNode:function(){
return this.getNode("cv:report")},getStorageNode:function(){return this.getNode("cv:commonStorageAttributes");
},getXml:function(){return s.innerXML(this.reportRecord)},replaceReportNode:function(e){
this.reportRecord.documentElement.replaceChild(e.cloneNode(!0),this.getReportNode());
},replaceStorageNode:function(e){this.reportRecord.documentElement.replaceChild(e.cloneNode(!0),this.getStorageNode());
},getReportProperty:function(e){var t=null;switch(e){case"catalog":case"cube":case"reportTypeEnum":
t=this.getReportNode().getAttribute(e);break;case"title":t=this.getReportTitle();break;
case"subtitle":t=this.getReportSubtitle();break;case"name":case"folder":t=this.getStoragePathNode().getAttribute(e);
break;default:t=this.getStorageNode().getAttribute(e)}return t},setReportProperty:function(e,t){
switch(e){case"catalog":this.getReportNode().setAttribute(e,t);break;case"cube":case"reportTypeEnum":
this.getReportNode().setAttribute(e,t);break;case"title":this.setReportTitle(t);break;
case"subtitle":this.setReportSubtitle(t);break;case"name":case"folder":this.getStoragePathNode().setAttribute(e,t);
break;default:this.getStorageNode().setAttribute(e,t)}},getReportOptions:function(){
return this.getReportNode().attributes},getReportOption:function(e){return this.getReportNode().getAttribute(e);
},setReportOption:function(e,t){this.getReportNode().setAttribute(e,t)},getStoragePathNode:function(){
return this.getNode("cv:commonStorageAttributes/cv:path")},getReportTitle:function(){
var e=this.getNode("cv:report/cv:title");return e?s.textContent(e):null},setReportTitle:function(e){
var t=this.getNode("cv:report/cv:title");t||(t=this.reportRecord.createElement("title"),
this.getReportNode().appendChild(t)),cv.textContent(t,e)},getReportSubtitle:function(){
var e=this.getNode("cv:report/cv:subtitle");return e?s.textContent(e):null},setReportSubtitle:function(e){
var t=this.getNode("cv:report/cv:subtitle");t||(t=this.reportRecord.createElement("subtitle"),
this.getReportNode().appendChild(t)),cv.textContent(t,e)},setChartOption:function(e,t){
var i=this.getChartOptions();i.setAttribute(e,t)},getChartOption:function(e){var t=this.getChartOptions();
return t.getAttribute(e)},getChartOptions:function(){var e=this.getNode("cv:report/cv:chartOptions");
return e},setPageSetup:function(e,t){var i=this.getPageSetup();i.setAttribute(e,t);
},getPageSetup:function(e){var t=this.getPageSetup();return t.getAttribute(e)},getPageSetup:function(){
var e=this.getNode("cv:report/cv:pageSetup");return e},getReplaced:function(){return this.getNode("cv:report/cv:attributeReplacement");
},setReplaced:function(e,t){var i=this.getReplaced();if(i){if(!t)return void cv.util.removeNode(i);
s.removeChildren(i)}else i=this._createXmlNode("attributeReplacement"),this.getReportNode().appendChild(i);
i.setAttribute("formula",e);for(var r=0;r<t.length;++r){var o=this._createXmlNode("replacementOption");
cv.textContent(o,t[r]),i.appendChild(o)}},replaceAttribute:function(e){try{var t=this.getReplaced();
if(!t)return;var i=t.getAttribute("formula");if(i==e)return;t.setAttribute("formula",e);
for(var r=t.selectNodes("cv:replacementOption"),o=0;o<r.length;++o)if(cv.textContent(r[o])==e){
cv.textContent(r[o],i);break}}catch(s){console.log(s)}},isNew:function(){return!this.getStorageNode().getAttribute("created");
},isEmpty:function(){var e=this.getReportNode().selectNodes("cv:measures/cv:measure|*/cv:attribute");
return!e||0==e.length},getSortedMetric:function(){return this.getNode("cv:report/cv:measures/cv:measure[@sortOrderEnum!='NONE']");
},createNode:function(e){var t,i=this._createXmlNode(this.childTags[e.zoneId]);return e.formula&&i.setAttribute("formula",e.formula),
e.metricType&&(a.indexOf(["PCTOF","RSUM","PCTRSUM","RANK"],e.metricType)>-1?(t=this._createXmlNode("summaryFacet",{
summaryAcrossEnum:e.sumAcross,useNonVisualTotals:e.sumTotal}),"LABEL"==e.sumAcross&&t.setAttribute("breakAttributeFormula",e.sumBreakBy)):"EXPRESSION"==e.metricType?(t=this._createXmlNode("expression"),
cv.textContent(t,e.expression)):"TREND"==e.metricType&&(t=this._createXmlNode("trendFacet",{
trendTypeEnum:e.trendType,trendDirectionEnum:e.trendDir,amount:e.trendAmount,trendAttributeFormula:e.trendField
})),i.setAttribute("measureTypeEnum",e.metricType),t&&i.appendChild(t)),e.label&&(t=this._createXmlNode("displayLabels"),
i.appendChild(t),t.appendChild(this._createXmlNode("displayLabel",{label:e.label,
locale:e.locale}))),e.gembarId&&i.setAttribute("gembarId",e.gembarId),i},getNode:function(e,t){
return t||(t=this.reportRecord.documentElement),t.selectSingleNode(e)},getChildMembers:function(){
for(var e="",t=0;t<this.getChildMembers.arguments.length;++t)t>0&&(e+=" | "),e+="cv:"+this.getChildMembers.arguments[t]+"/cv:"+this.childTags[this.getChildMembers.arguments[t]];
return this.getReportNode().selectNodes(e)},getTimeAttributes:function(){var e=this.getReportNode().selectNodes("*/cv:attribute"),t=null;
if(e&&e.length>0)for(var i=0;i<e.length;++i){var r=e[i].getAttribute("formula");cv.getFieldHelp().isTimeAttribute(r)&&(t?t.push(r):t=[r]);
}return t},getReportZoneNode:function(e){return this.reportRecord.documentElement.selectSingleNode("cv:report/cv:"+e);
},getFirstMetricDependent:function(e){for(var t=this.getReportNode().selectNodes("cv:measures/cv:measure[@measureTypeEnum!='VALUE' and @id!='"+e+"']"),i=0;t&&i<t.length;++i){
var r=t[i];if("EXPRESSION"==r.getAttribute("measureTypeEnum")&&cv.textContent(r.selectSingleNode("cv:expression")).indexOf(e)>=0||r.getAttribute("formula")==e)return r;
}return null},getMetrics:function(e){return this.getReportNode().selectNodes("cv:measures/cv:measure"+(e?"[@measureTypeEnum='"+e+"']":""));
},getNextMetricId:function(){for(var e=0,t=this.getNode("cv:report/cv:measures");this.getNode("cv:measure[@id='[MEASURE:"+e+"]']",t);)++e;
return"[MEASURE:"+e+"]"},getNumberFormat:function(e){var t;t="string"==typeof e?this.getNode('cv:report/cv:measures/cv:measure[@formula="'+e+'"]/cv:numberFormat'):e.selectSingleNode("cv:numberFormat");
var i="";if(t){var r=t.selectSingleNode("cv:formatExpression");r&&(i=cv.textContent(r));
}return t?{formatCategory:t.getAttribute("formatCategory"),formatScale:t.getAttribute("formatScale"),
formatExpression:i,formatShortcut:t.getAttribute("formatShortcut"),currencySymbol:t.getAttribute("currencySymbol")
}:null},setNumberFormat:function(e,t){if("string"==typeof e&&(e=this.getNode('cv:report/cv:measures/cv:measure[@formula="'+e+'"]')),
!e)return!1;var i=e.selectSingleNode("cv:numberFormat");i||(i=this._createXmlNode("numberFormat"),
e.appendChild(i),i.setAttribute("formatShortcut","NONE"),i.setAttribute("formatCategory","Default"),
i.setAttribute("formatScale","0"),i.setAttribute("currencySymbol",cv.analyzerProperties["renderer.currency.symbol"])),
t.formatCategory&&i.setAttribute("formatCategory",t.formatCategory),t.formatScale&&i.setAttribute("formatScale",t.formatScale),
t.formatShortcut&&i.setAttribute("formatShortcut",t.formatShortcut),t.currencySymbol&&i.setAttribute("currencySymbol",t.currencySymbol);
var r=i.selectSingleNode("cv:formatExpression");r||(r=this._createXmlNode("formatExpression"),
i.appendChild(r)),t.formatExpression&&cv.textContent(r,t.formatExpression)},updateDisplayLabel:function(e,t,i,r){
var o=!t&&!i,s=null,a=e.selectSingleNode("cv:displayLabels");if(a)s=a.selectSingleNode(r?"cv:displayLabel[locale='"+r+"']":"cv:displayLabel");else{
if(o)return;a=this._createXmlNode("displayLabels"),e.appendChild(a)}if(!s){if(o)return;
s=this._createXmlNode("displayLabel"),a.appendChild(s)}return o?(a.removeChild(s),
a.selectSingleNode("cv:displayLabel")||e.removeChild(a),null):(s.setAttribute("label",t?t:""),
s.setAttribute("labelPlural",i?i:""),s.setAttribute("locale",r?r:""),s)},getFilter:function(e){
return this.getNode('cv:report/cv:filters/cv:filter[@formula="'+e+'"]')},getFilterProps:function(e){
var t={formula:e.getAttribute("formula"),viewFilterEnum:e.getAttribute("viewFilterEnum"),
predicates:null},i=e.selectNodes("cv:predicates/cv:predicate");if(!i||0==i.length)return t;
t.predicates=new o;for(var r,s,a=0;a<i.length;++a){s=i[a].getAttribute("ordinal");
var n={ordinal:s,op:i[a].getAttribute("operatorEnum"),preset:i[a].getAttribute("preset"),
parameterName:i[a].getAttribute("parameterName"),op1:i[a].getAttribute("op1"),op2:i[a].getAttribute("op2")
};if("CONTAIN"==n.op||"NOT_CONTAIN"==n.op){var l=i[a].selectNodes("cv:containsExpression");
n.exp=[];for(var d=0,c=l.length;c>0&&c>d;++d)n.exp.push(cv.textContent(l[d]))}else{
var h=i[a].selectNodes("cv:member"),c=h.length;n.members=[];for(var d=0;c>0&&c>d;++d){
var u=h[d].getAttribute("formula");u?n.members.push({formula:u,caption:h[d].getAttribute("caption")
}):(n.members.push(parseInt(h[d].getAttribute("pos"))),d>0?r+=","+h[d].getAttribute("pos"):r=h[d].getAttribute("pos"));
}r&&(n.preset=r),r=null}if(t.predicates.contains(s))t.predicates.item(s).push(n);else{
var p=[];p.push(n),t.predicates.add(s,p)}}return t},removeFilterPredicate:function(e,t){
var i=this.getFilterProps(e);if(!i)return e;i.predicates.remove(t);var r=this.updateFilter(i);
return r&&r.selectSingleNode("cv:predicates/cv:predicate")?r:null},updateFilter:function(e,t){
if(!e.conditions&&!e.rank&&!e.predicates)return null;var i=null,r=this.getReportZoneNode("filters");
if("FILTER_METRIC"==e.type){if(e.old&&(i=this.getFilter(e.old))){var o=this.getNode("cv:conditions",i);
o&&i.removeChild(o),o=this.getNode("cv:topBottom",i),o&&i.removeChild(o),e.old!=e.formula&&0==i.childNodes.length&&r.removeChild(i);
}e.old&&e.old==e.formula||(i=this.getFilter(e.formula))}else i=this.getFilter(e.formula),
i&&cv.util.removeNode(this.getNode("cv:predicates",i));if(i||(i=this._createXmlNode("filter",{
formula:e.formula,viewFilterEnum:"MULTIPLE"}),this.getReportZoneNode("filters").appendChild(i)),
void 0!==t&&i.setAttribute("forceAnd",String(t)),e.conditions){for(var s=this._createXmlNode("conditions"),a=0;a<e.conditions.length;++a)if(e.conditions[a]){
var n=this._createXmlNode("condition");for(var l in e.conditions[a])e.conditions[a][l]&&n.setAttribute(l,e.conditions[a][l]);
s.appendChild(n)}i.appendChild(s)}if(e.rank){var d=this._createXmlNode("topBottom");
for(var l in e.rank)e.rank[l]&&d.setAttribute(l,e.rank[l]);i.appendChild(d)}if(e.predicates&&e.predicates.getKeyList()&&e.predicates.getKeyList().length>0){
for(var c=e.predicates.getKeyList(),h=[],l=0;l<c.length;l++){var u=[],p=e.predicates.item(c[l]);
if(p.length>0){var m=this.getOrderKey(p);if(h.length>0){for(var g=h.length-1;g>=0&&this.getOrderKey(h[g])>m;g--)u.push(h.pop());
h.push(p),u.length>0&&(h=h.concat(u.reverse()))}else h.push(p)}}var v,f=this.getNode("cv:predicates",i);
f||(f=this._createXmlNode("predicates"));for(var a=0;a<h.length;a++)if(v=h[a])for(var b=0;b<v.length;b++){
var y=v[b];if(y){var _=this._createXmlNode("predicate",{ordinal:a+1,operatorEnum:y.op
});if(y.preset){y.members=[];for(var T=y.preset.split(","),l=0;l<T.length;++l)y.members.push(parseInt(T[l]));
}for(var C=y.members,l=0;C&&l<C.length;++l){var I=this._createXmlNode("member");cv.util.checkNumber(C[l])?I.setAttribute("pos",C[l]):(I.setAttribute("pos","0"),
I.setAttribute("formula",C[l].formula),I.setAttribute("caption",C[l].caption)),_.appendChild(I);
}if(y.exp){for(var l=0;l<y.exp.length;++l){var A=this._createXmlNode("containsExpression");
A.appendChild(this.reportRecord.createTextNode(y.exp[l])),_.appendChild(A)}y.containsRegExp&&_.setAttribute("containsRegExp","true");
}y.parameterName&&_.setAttribute("parameterName",y.parameterName),y.op1&&_.setAttribute("op1",y.op1),
y.op2&&_.setAttribute("op2",y.op2),f.appendChild(_)}}i.appendChild(f)}return this.removeEmptyFilter(i)?null:(e.viewFilterEnum&&i.setAttribute("viewFilterEnum",e.viewFilterEnum),
i)},getOrderKey:function(e){var t=new o;t.add("EQUAL",2),t.add("TIME_YAGO",2),t.add("TIME_RANGE_PREV",2),
t.add("TIME_RANGE_NEXT",2),t.add("TIME_AGO",2),t.add("TIME_AHEAD",2),t.add("CONTAIN",3),
t.add("BETWEEN",4),t.add("AFTER",5),t.add("BEFORE",6),t.add("NULL",7),t.add("NUMERIC_BETWEEN",8),
t.add("NUMERIC_GREATER_THAN",8),t.add("NUMERIC_GREATER_THAN_EQUAL",8),t.add("NUMERIC_LESS_THAN",8),
t.add("NUMERIC_LESS_THAN_EQUAL",8),t.add("NOT_EQUAL",9),t.add("NOT_CONTAIN",10),t.add("NOT_NULL",11);
var i;if("EQUAL"==e[0].op){var r=e[0].members;i=e[0].preset||cv.util.checkNumber(r[0])?2:1;
}else i=t.item(e[0].op);return i},getMetricFilter:function(){var e=null,t=null,i=this.getNode("cv:report/cv:filters/cv:filter/cv:topBottom");
if(i?(e=i.parentNode,t=this.getNode("cv:conditions",e)):(t=this.getNode("cv:report/cv:filters/cv:filter/cv:conditions"),
t&&(e=t.parentNode)),!e)return null;var r={node:e,formula:e.getAttribute("formula"),
conditions:null,rank:null};if(i){r.rank={};for(var o=i.attributes,s=0;s<o.length;++s)r.rank[o[s].name]=o[s].value;
}if(t){conds=t.getElementsByTagName("condition"),r.conditions=new Array(conds.length);
for(var a=0;a<conds.length;++a){var o=conds[a].attributes;r.conditions[a]={};for(var s=0;s<o.length;++s)r.conditions[a][o[s].name]=o[s].value;
}}return r},getMetricFilterNode:function(){var e=this.getNode("cv:report/cv:filters/cv:filter/cv:conditions | cv:report/cv:filters/cv:filter/cv:topBottom");
return e?e.parentNode:null},isUsedByMetricFilter:function(e,t){var i=this.getMetricFilter();
if(!i)return null;if(i.formula==e)return!t||"RANK"==t&&i.rank||"CONDITIONS"==t&&i.conditions?i.node:null;
if(i.rank&&i.rank.formula==e&&(!t||"RANK"==t))return i.node;if(i.conditions&&(!t||"CONDITIONS"==t))for(var r=0;r<i.conditions.length;++r)if(i.conditions[r].formula==e)return i.node;
return null},removeFromMetricFilter:function(e){var t=this.isUsedByMetricFilter(e);
if(!t)return!1;var i=this.getNode("cv:conditions",t),r=this.getNode("cv:topBottom",t);
if(t.getAttribute("formula")==e)i&&t.removeChild(i),r&&t.removeChild(r);else{if(i){
conds=i.getElementsByTagName("condition");for(var o=conds.length,s=0;s<conds.length;++s)conds[s].getAttribute("formula")==e&&(i.removeChild(conds[s]),
--o);0==o&&t.removeChild(i)}r&&r.getAttribute("formula")==e&&t.removeChild(r)}return this.removeEmptyFilter(t),
!0},removeEmptyFilter:function(e){return e&&e.selectSingleNode("cv:conditions|cv:topBottom|cv:predicates/cv:predicate")?!1:(cv.util.removeNode(e),
!0)},updateCalculateSubtotalsUsingFormula:function(e,t){return t.setAttribute("calculateSubtotalsUsingFormula",e);
},addMemberProperty:function(e,t){var i=this._createXmlNode("property",{name:t});e.appendChild(i);
},addLink:function(e,t,i){var r=this._createXmlNode("link",t);if(i)for(var o in i){
var s=this._createXmlNode("linkParam",{name:o,value:i[o]});r.appendChild(s)}e.appendChild(r);
},addSelectionFilters:function(e,t){"INCLUDE"==t&&this.removeSelectionFilters();var i=this.getNode("cv:report/cv:selectionFilters");
i||(i=this._createXmlNode("selectionFilters"),this.getReportNode().appendChild(i));
for(var r=0;r<e.length;++r)e[r].setAttribute("op",t),i.appendChild(e[r])},addSelectionFilter:function(e){
var t=this.getNode("cv:report/cv:selectionFilters");t||(t=this._createXmlNode("selectionFilters"),
this.getReportNode().appendChild(t));var i=this._createXmlNode("selectionItem");i.setAttribute("op",e.op);
for(var r=0;r<e.members.length;++r){var o=e.members[r],s=this._createXmlNode("selectionMember");
s.setAttribute("formula",o.formula),s.setAttribute("member",o.member),i.appendChild(s);
}t.appendChild(i)},getSelectionFilters:function(){return this.getReportNode().selectNodes("cv:selectionFilters/cv:selectionItem");
},getSelectionFilterProps:function(e){var t={op:e.getAttribute("op"),members:[]},i=e.selectNodes("cv:selectionMember");
if(!i||0==i.length)return t;for(var r=0;r<i.length;++r){var o={formula:i[r].getAttribute("formula"),
member:node[r].getAttribute("member")};t.members.push(o)}return t},removeSelectionFilters:function(){
var e=this.getNode("cv:report/cv:selectionFilters");e&&cv.util.removeNode(e)},replaceSelectionItems:function(e){
var t=this.getNode("cv:report/cv:selectionItems");t&&cv.util.removeNode(t),e&&this.getReportNode().appendChild(e);
},getSelectionItems:function(){return this.getReportNode().selectNodes("cv:selectionItems/cv:selectionItem");
},getDrillColumns:function(){return this.getReportNode().selectNodes("cv:drillColumns/cv:drillColumn");
},replaceDrillColumns:function(e){var t=this.getNode("cv:report/cv:drillColumns");
t&&cv.util.removeNode(t);var t=this._createXmlNode("drillColumns");for(var i in e){
var r=null;r=1==e[i]?this._createXmlNode("drillColumn"):this._createXmlNode("drillColumn",{
hidden:!0}),cv.textContent(r,i),t.appendChild(r)}this.getReportNode().appendChild(t);
},_createXmlNode:function(e,t){var i,r=cv.createNode(this.reportRecord,e),o=this.attributes[e];
for(i in o)r.setAttribute(i,o[i]);for(i in t)r.setAttribute(i,t[i]);return r},getPluginData:function(){
return this.getUIAttributes().selectSingleNode("cv:pluginData")},getUIAttributes:function(){
var e=this.reportRecord.documentElement.selectSingleNode("cv:uiAttributes");if(e||(e=this._createXmlNode("uiAttributes",{
showFieldList:"true",showFieldLayout:"true",showFilterPanel:"false"}),this.reportRecord.documentElement.appendChild(e)),
e.selectSingleNode("cv:rowFieldWidths")||e.appendChild(this._createXmlNode("rowFieldWidths")),
e.selectSingleNode("cv:columnDataFieldWidths")||e.appendChild(this._createXmlNode("columnDataFieldWidths")),
!e.selectSingleNode("cv:pluginData")){var t=this._createXmlNode("pluginData");cv.textContent(t,"[]"),
e.appendChild(t)}return e}}}),define("analyzer/report/cv_rptDnd",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dijit/_base/popup","dojo/dnd/Source","dojo/dnd/Target","analyzer/report/cv_rptDoc","dojo/topic","dojo/dom-construct","dojo/dom-geometry","dojo/dnd/Manager","dojo/dom-class","dojo/_base/event","dojo/aspect"],function(declare,on,query,lang,popup,Source,Target,cv_rptDoc,topic,construct,geometry,ManagerClass,domClass,event,aspect){
function dragStart(){drag.start=!0,drag.stop=!1}function dragStop(){drag.start=!1,
drag.stop=!0}var Manager=ManagerClass.manager(),drag={start:!1,stop:!0,drop:!1};declare("cv.ReportDropTarget",[Target],{
copyOnly:!0,selfAccept:!0,constructor:function(e,t){this.node=e,this.curItem=null,
this.dropIndicator=construct.create("div",{"class":"dndDropIndicator"}),on(this.dropIndicator,"mouseover",lang.hitch(this,"_redirectMouseOver")),
on(this.dropIndicator,"mouseup",lang.hitch(this,"_redirectMouseUp")),topic.subscribe("/dnd/start",lang.hitch(this,"dndStart")),
this._drop=this.dropIndicator,this.dropIndicator.parentNode||document.body.appendChild(this.dropIndicator),
cv.util.hide(this.dropIndicator)},onDndStart:function(e,t,i){if(cv.api.event.isEventDisabled("dragAndDrop"))return void this._clearDropIndicator();
dragStart(),this.inherited(arguments);var r=geometry.position(e.node),o=geometry.position(this.node);
r.x<=o.x+o.w&&r.x>=o.x&&r.y<o.y+o.h&&r.y>o.y&&this.fireSyntheticOverEvent(),this.report.emit("drag",e.anchor.getAttribute("formula"));
},fireSyntheticOverEvent:function(){if(document.createEvent){var e=document.createEvent("MouseEvent");
e.initMouseEvent("mouseover",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.node.dispatchEvent(e);
}else if(document.createEventObject){var e=document.createEventObject(window.event);
this.node.fireEvent("onmouseover",e)}},_redirectMouseOver:function(e){this.fireSyntheticOverEvent(),
this._getZoneIdForPivot(Manager.nodes[0]);var t=this._getNodeUnderMouse(e);this.lastItemOver=t,
this.position=this._getNodeUnderMouse();var i=this.childBoxes[this.zoneId];if(t>-1)if(document.createEvent){
var r=document.createEvent("MouseEvent");r.initMouseEvent("mouseover",!0,!0,window,0,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),
this.node.dispatchEvent(r),i[t].node.dispatchEvent(r),r=document.createEvent("MouseEvent"),
r.initMouseEvent("mousemove",!0,!0,window,0,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),
this.node.dispatchEvent(r),i[t].node.dispatchEvent(r)}else if(document.createEventObject){
var r=document.createEventObject(window.event);r.button=1,i[t].node.fireEvent("onmouseover",r),
i[t].node.fireEvent("onmousemove",r)}},_redirectMouseUp:function(e){this._getZoneIdForPivot(Manager.nodes[0]);
var t=this._getNodeUnderMouse(e);this.position=this._getNodeUnderMouse();var i=this.childBoxes[this.zoneId];
if(t>-1)if(document.createEvent){var r=document.createEvent("MouseEvent");r.initMouseEvent("mouseup",!0,!0,window,0,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),
i[t].node.dispatchEvent(r)}else if(document.createEventObject){var r=document.createEventObject(window.event),o=this.node.children;
o[t]&&o[t].fireEvent("onmouseup",r),i[t].node.fireEvent("onmouseup",r)}},onMouseOut:function(e){
return this.dropIndicator&&cv.util.overElement(this.dropIndicator,e)?void event.stop(e):void this.inherited(arguments);
},isReportFormatPivot:function(){return"PIVOT"==this.reportFormat},init:function(e){
this.reportFormat=e,this.isReportFormatPivot()?(this.zones={measures:this.report.byClass("ZONE_measures"),
rowAttributes:this.report.byClass("ZONE_rowAttributes"),columnAttributes:this.report.byClass("ZONE_columnAttributes")
},this.zones.rowAttributes&&0==this.zones.rowAttributes.getElementsByTagName("TD").length&&(this.zones.rowAttributes=this.report.byClass("pivotTableRowLabelHeaderContainer")),
this.zones.columnAttributes&&0==this.zones.columnAttributes.getElementsByTagName("TR").length&&(this.zones.columnAttributes=this.report.byClass("pivotTableColumnHeaderSection"))):(this.zones=null,
this.childBoxes=[],this.zoneId=null);var t=this.__dndCancelHandle;null==t&&(this.__dndCancelHandle=topic.subscribe("/dnd/cancel",lang.hitch(this,"onDraggingOut")),
topic.subscribe("/dnd/drop",lang.hitch(this,"onDraggingOut")))},dndCancel:function(){
this.onDraggingOut()},checkAcceptance:function(e,t){return this.report.isResizing||!this.report.history.isStateRefreshed()?!1:this.inherited(arguments);
},accepted:!1,dndStart:function(){this.childBoxes=null,this.accepted=this.checkAcceptance(Manager.source,Manager.nodes);
},onMouseOver:function(){Manager.source&&null==this.childBoxes&&this.calculateBoxes(),
this.inherited(arguments)},calculateBoxes:function(e){if(!this.isReportFormatPivot())return!0;
if(this.report.isResizing)return this.onDraggingOut(),void cv.util.stopDrag();this.childBoxes={
measures:[],rowAttributes:[],columnAttributes:[]};var t,i=this.zones.measures?this.zones.measures.getElementsByTagName("TD"):null,r=this.report.byClass("pivotTable");
if(r){var o=geometry.position(r,!0);o.x=o.y+geometry.position(r).y;var s=i?i.length:0;
for(s>20&&(s=20),t=0;s>t;++t)if("measure"==i[t].getAttribute("type")){var a=geometry.position(i[t],!0);
this.childBoxes.measures.push({top:o.y,bottom:o.x,left:a.x,right:a.x+geometry.position(i[t]).w,
node:i[t]})}i=this.zones.rowAttributes?this.zones.rowAttributes.getElementsByTagName("TD"):null;
var n=null;for(t=0;i&&t<i.length;++t){var a=geometry.position(i[t],!0);i[t].getAttribute("formula")==n?this.childBoxes.rowAttributes[this.childBoxes.rowAttributes.length-1].right=a.x+geometry.position(i[t]).w:this.childBoxes.rowAttributes.push({
top:o.y,bottom:o.x,left:a.x,right:a.x+geometry.position(i[t]).w,node:i[t]}),n=i[t].getAttribute("formula");
}for(i=this.zones.columnAttributes?this.zones.columnAttributes.getElementsByTagName("TR"):null,
n=null,t=0;i&&t<i.length;++t){var l=i[t].firstChild;if(!l||"attribute"!=l.getAttribute("type")&&"prop"!=l.getAttribute("type"))break;
var a=geometry.position(i[t],!0);l.getAttribute("formula")==n?this.childBoxes.columnAttributes[this.childBoxes.columnAttributes.length-1].bottom=a.y+a.h:this.childBoxes.columnAttributes.push({
top:a.y,bottom:a.y+a.h,left:a.x,right:a.x+a.w,node:l}),n=l.getAttribute("formula");
}}return e||cv.util.show(this.dropIndicator),!0},onMouseMove:function(e){if(this.lastDragEvent=e,
!(Manager.nodes.length<1)&&this.accepted&&this.isReportFormatPivot()){if(this.report.isResizing)return this.onDraggingOut(),
void cv.util.stopDrag();null==this.childBoxes&&this.calculateBoxes(e);var t=Manager.nodes[0].getAttribute("type");
this._showDropIndicator(e,t)}},_showDropIndicator:function(e,t){this._setZoneIdForPivot(t),
this.position=this._getNodeUnderMouse();var i=this.childBoxes[this.zoneId],r=!0;this.position<0?i.length&&(r=cv.util.gravity(i[0].node,e)&this.gravity):r=cv.util.gravity(i[this.position].node,e)&this.gravity,
this.isReportFormatPivot()&&cv.util.show(this.dropIndicator),this.placeIndicator(e,Manager.nodes,this.position,r);
},_clearDropIndicator:function(){this.isReportFormatPivot()&&this.dropIndicator&&cv.util.hide(this.dropIndicator),
this.hoverMetric&&(domClass.remove(this.hoverMetric,"metricHover"),this.hoverMetric=null);
},onDraggingOut:function(){this._clearDropIndicator()},onMouseUp:function(){this.inherited(arguments),
drag.start&&this.onDrop(Manager.source,Manager.nodes,Manager.copy)},onDrop:function(e,t,i){
if(drag.start){dragStop();try{if(this.onDraggingOut(),null==e)return;var r=t[0],o=cv.util.getAttribute(r,"formula"),s=e.getItem(r.id).type;
if(0===s.length)return;var a=s[0];this._onDrop(o,a,r)}catch(n){alert(n)}}},_onDrop:function(e,t,i){
if(!this.isReportFormatPivot())return t===cvConst.dndTypes.gemFromFieldList?this.report.appendGem(e):!1;
var r,o,s,a,n=!0,l=cv.getFieldHelp().isAttribute(e)?"attribute":"measure";this._setZoneIdForPivot(l);
try{this.position=this._getNodeUnderMouse();var d=this.childBoxes[this.zoneId]}catch(c){
return!1}if(!d)return!1;var c=this.lastDragEvent;if(this.position<0)d.length?cv.util.gravity(d[0].node,c)&this.gravity?(r=this.report.getGemFromDomNode(d[0].node),
r&&(o=r,s="before")):(r=this.report.getGemFromDomNode(d[d.length-1].node),r&&(o=r,
s="after")):(o=this.zoneId,s="append");else{var h=d[this.position].node;r=this.report.getGemFromDomNode(h),
r&&(o=r,s=cv.util.gravity(h,c)&this.gravity?"before":"after")}if(!s)return!1;if(t===cvConst.dndTypes.gemFromFieldList){
if(n=this.report.checkDuplicateGem(e),n&&(n=this.report.checkGemHierarchy(this.zoneId,e,this.report.getFieldLabel(e))),
n&&(n=this.report.checkColumnSelectionFilters(this.zoneId)),!n)return!1;a=this.report.createGem({
zoneId:this.zoneId,formula:e}),this.curItem=a,this.actionStr=a.getHistoryActionCode("Add");
}else{if(a=this.report.getGemFromDomNode(i),n=this.report.checkGemHierarchy(this.zoneId,e,this.report.getFieldLabel(i),{
refId:"append"===s?o:o.getId(),pos:s}),!n)return!0;if(!this.report.checkColumnSelectionFilters(this.zoneId))return!1;
a.setZone(r?r.zone:o),this.curItem=a,this.actionStr=a.getHistoryActionCode("Move");
}return n=this.insert(o,s),this.curItem=null,this.report.emit("drop",e,this.declaredClass.replace("cv.","")),
n},_getNodeUnderMouse:function(){for(var children=this.childBoxes[this.zoneId],i=0;children&&i<children.length;++i)with(children[i])if(this.lastDragEvent.clientX>=left&&this.lastDragEvent.clientX<=right&&this.lastDragEvent.clientY>=top&&this.lastDragEvent.clientY<=bottom)return i;
return-1},_getZoneIdForPivot:function(e){if(!this.isReportFormatPivot()&&e){var t=e.getAttribute("type");
this._setZoneIdForPivot(t)}},_setZoneIdForPivot:function(e){this.isReportFormatPivot()&&(this.gravity=cv.util.gravity.WEST,
"measure"===e?this.zoneId="measures":this.zones.rowAttributes&&cv.util.overElement(this.zones.rowAttributes,this.lastDragEvent)?this.zoneId="rowAttributes":this.zones.columnAttributes&&cv.util.overElement(this.zones.columnAttributes,this.lastDragEvent)?(this.zoneId="columnAttributes",
this.gravity=cv.util.gravity.NORTH):this.zoneId="rowAttributes")},placeIndicator:function(e,t,i,r){
if(this.zoneId){var o=this.dropIndicator.style,s=this.childBoxes[this.zoneId],a=s.length,n=this.zones[this.zoneId];
if(n||(n=this.node),this.gravity==cv.util.gravity.NORTH){var l,d=geometry.getContentBox(this.node).w;
l=0>i?a?r?s[0].top:s[a-1].bottom:geometry.position(n,!0).y:r?s[i].top:s[i].bottom,
o.width=d+15+"px",o.height="28px",o.left=geometry.position(this.node,!0).x-14+"px",
o.top=l-14+"px",o.position="absolute",o.zIndex=2e3,this.dropIndicator.innerHTML="<div class='dnd-indicator-horizontal-left'></div><div class='dnd-indicator-horizontal-line' style='width:"+(d-18)+"px;'></div><div class='dnd-indicator-horizontal-right'></div>";
}else{var c,h=geometry.getContentBox(this.node).h;"measures"==this.zoneId&&a&&((0>i||i>=a)&&(i=r?0:a-1),
this.hoverMetric&&this.hoverMetric!=s[i].node&&domClass.remove(this.hoverMetric,"metricHover"),
this.hoverMetric=s[i].node,domClass.add(this.hoverMetric,"metricHover")),0>i?a?c=r?s[0].left:s[a-1].right:("measures"==this.zoneId&&this.zones.columnAttributes&&(n=this.zones.columnAttributes),
c=geometry.position(n,!0).x):c=r?s[i].left:s[i].right,o.left=c-14+"px",o.height=h+10+"px",
o.width="28px",o.position="absolute",o.zIndex=2e3,o.top=geometry.position(this.node,!0).y-7+"px",
this.dropIndicator.innerHTML="<div class='dnd-indicator-vertical-top'></div><div class='dnd-indicator-vertical-line' style='height:"+(h-22)+"px;'></div><div class='dnd-indicator-vertical-bottom'></div>";
}}},insert:function(e,t){return e==this.curItem?!1:this.report.insertGem(this.curItem.getId(),"string"==typeof e?e:e.getId(),t,!1,this.actionStr);
}}),declare("cv.FilterPaneDropTarget",[Target],{constructor:function(e,t){this.curItem=null,
this.filterPane=e,this.autoSync=!0,aspect.after(this,"onDrop",lang.hitch(this,"afterDrop"));
},onDraggingOver:function(e){return this.report.isResizing||Manager.nodes.length<1||!this.checkAcceptance(Manager.source,Manager.nodes)?void 0:(this._showDropIndicator(),
this.inherited(arguments))},onDragMove:function(e){},onDraggingOut:function(e){return this._clearDropIndicator(),
this.inherited(arguments)},onDrop:function(e){this.curItem=Manager.nodes[0],this._clearDropIndicator(),
this.report.emitDropEvent(e.anchor.getAttribute("formula"),this.declaredClass.replace("cv.",""));
},_showDropIndicator:function(){cv.util.setDivActive(this.filterPane,!0)},_clearDropIndicator:function(){
cv.util.setDivActive(this.filterPane,!1)},createDropIndicator:function(){},afterDrop:function(){
var e;this.curItem&&(e=this.curItem.getAttribute("formula")),this._afterDrop(e)},
_afterDrop:function(e){e&&this.report.filterDlg.show(e),this.curItem=null},insert:function(e,t,i){
return!0}}),declare("cv.TrashAreaDropTarget",[Target],{constructor:function(e,t){
this.node=e,domClass.contains(this.node,"trashcan")&&(aspect.after(Manager,"onMouseMove",lang.hitch(this,"_onMouseMove"),!0),
aspect.after(Manager,"onMouseUp",lang.hitch(this,"_onMouseUp"),!0))},onDraggingOver:function(e){
return this.report.isResizing||Manager.nodes.length<1||!this.checkAcceptance(Manager.source,Manager.nodes)?void 0:(this.childBoxes=[],
domClass.add(this.node,"trashActive"),!0)},onDragMove:function(e){},onDraggingOut:function(){
return domClass.remove(this.node,"trashActive"),!0},createDropIndicator:function(){},
onDrop:function(e){var t=Manager.nodes[0].id;return 0==t.indexOf("filter_")?this.report.removeFilter(t):this.report.removeCurrentGem(Manager.nodes[0]),
domClass.remove(this.node,"trashActive"),this.node.focus(),this.report.emitDropEvent(e.anchor.getAttribute("formula"),this.declaredClass.replace("cv.","")),
!0},_onMouseMove:function(e){this.report.isResizing||cv.api.event.isEventDisabled("dragAndDrop")||(popup.close(),
Manager.nodes.length<1||!this.checkAcceptance(Manager.source,Manager.nodes)||cv.util.show(this.node));
},_onMouseUp:function(e){cv.util.isHidden(this.node)||cv.util.hide(this.node)}})}),
define("analyzer/report/cv_rptFieldHelp",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/xml/parser","dijit/_base/popup","dojo/dnd/Source","analyzer/report/cv_rptDnd","dojo/_base/array","dojo/html","dijit/registry","dojo/dom-class","dojo/dom-style","dojo/regexp","dojo/_base/event","dojo/dom","./cv_rptConst"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m,g){
return e("cv.FieldHelp",null,{constructor:function(e,t,i){this.doc=cv.parseXML(e),
cv.setDomDefaultNamespace(this.doc),this.manager=t,this.fieldListItems=null,this.fieldListTree=null,
this.fieldListNodes=null,this.groups=null,this.selectedField=null,this.clickedField=null,
this.selectedMenuField=null,this.searchField=null,this.viewOptions={CMDVIEWCATEGORY:"businessGroup",
CMDVIEWNAME:"displayLabel",CMDVIEWTYPE:"type",CMDVIEWSCHEMA:"schema"},this.showHiddenFields=!1,
this.currentView=cv.prefs.fieldListView,this.handles=[],this.isDrill=i,this.drillFields={},
this.groupIsOpen=!cv.analyzerProperties["report.field.list.collapse"]},_on:function(e,i,r){
return t(e,i,r)},destroy:function(){if(this.fieldListItems=null,this.fieldListTree){
if(this.fieldListNodes)for(var e=0,t=this.fieldListNodes.length;t>e;++e)this.fieldListNodes[e].dndObj&&(this.fieldListNodes[e].dndObj=null);
l.forEach(this.handles,function(e){e.remove()}),this.doc=null,this.fieldListTree=null,
this.fieldListNodes=null,this.groups=null,this.selectedField=null,this.selectedMenuField=null,
this.searchField=null}},_getFieldListItems:function(){for(var e=this.doc.documentElement.selectNodes("cv:attributeHelp|cv:measureHelp"),t=[],i=0,r=e.length;r>i;++i)this.isDrill&&"true"==e[i].getAttribute("calculated")||t.push(e[i]);
return t},_getFieldListItemCount:function(){var e=cv.api.util._hasInlineModelingPermission();
if(e)return this.fieldListItems.length;var t=0;for(var i in this.fieldListItems){
var r=this.fieldListItems[i];this.isHidden(r.getAttribute("formula"))||t++}return t;
},byId:function(e){return this.isDrill?g.byId(e+"Drill"):g.byId(e)},init:function(e){
var t,i;if(this.fieldListItems=this._getFieldListItems(),this.fieldCount=this.fieldListItems.length,
this.isDrill){var o=!1;for(var s in e){o=!0;break}if(!o)for(var t=0,i=this.fieldListItems.length;i>t;++t)this.isHidden(this.fieldListItems[t])?e[this.fieldListItems[t].getAttribute("formula")]=!1:e[this.fieldListItems[t].getAttribute("formula")]=!0;
this.drillFields=e}if(this.fieldListTree=this.byId("fieldListTree"),this.fieldListTree&&(this.fieldListTreeContent=this.byId("fieldListTreeContent"),
this.searchField=this.byId("searchField"),this.searchField.value="",this.clearSearchField=this.byId("clearSearchField"),
cv.util.getDojoWidget("fieldViewMenu"),this.sortFields(cv.prefs.fieldListView),this.handles.push(this._on(this.searchField,"keyup",r.hitch(this,"searchFields"))),
this.handles.push(this._on(this.clearSearchField,"click",r.hitch(this,"onClearSearch"))),
this.isDrill||(this.byId("fieldCount").innerHTML=this._getFieldListItemCount(),this.handles.push(this._on(this.fieldListTree,"mouseover",r.hitch(this,"onMouseOver"))),
this.handles.push(this._on(this.fieldListTree,"mouseout",r.hitch(this,"onMouseOut"))),
this.handles.push(this._on(this.fieldListTree,"mousedown",r.hitch(this,"onMouseDown"))),
this.handles.push(this._on(this.fieldListTree,"click",r.hitch(this,"onMouseDown"))),
this.handles.push(this._on(this.fieldListTree,"dblclick",r.hitch(this,"onDblClick"))),
this.handles.push(this._on(this.fieldListTree,"contextmenu",r.hitch(this,"onContextMenu")))),
this.handles.push(this._on(this.byId("viewFieldOptions"),"click",r.hitch(this,"onViewFieldOptions")))),
!this.isDrill){var a=this;cv.formatTooltip=function(e,t){a.formatTooltip(e,t)}}},
formatTooltip:function(e,t){var i=cvCatalog.fieldTooltipNone;if(h.contains(t,"folder")){
var r=t.getAttribute("businessGroup"),o=this.doc.documentElement.selectSingleNode('cv:businessGroupInfo[@businessGroup="'+r+'"]');
o&&(i=o.getAttribute("description"))}else if(h.contains(t,"field")){var s=this.get(t.getAttribute("formula")),a=this.get(s,"displayDescription",!0);
i=(a?a:cvCatalog.fieldTooltipNone)+"<div class='fieldTooltipFooter'><a id='showFieldHelpDlg' class='appCmdLink' style='float:right;text-decoration:none;' href='#' onclick='cv.getFieldHelp().onFieldHelpTooltip();return false'>"+cvCatalog.fieldTooltipMoreLink+"</a></div>";
}e.innerHTML=i},get:function(e,t,i){if("string"==typeof e&&(e=this.doc.documentElement.selectSingleNode('*[@formula="'+e+'"]')),
!e||!t)return e;var r=e.selectSingleNode("cv:presentationFieldHelp"),o=null;switch(t){
case"currentDateMember":case"useDateLookup":case"dataType":case"duration":case"formula":
case"hierarchy":o=e.getAttribute(t);break;case"type":o="measureHelp"==e.tagName?"NUMBER":r.getAttribute("type");
break;case"displayLabel":o=r?r.getAttribute(t):null,o||(o="");break;case"displayLabelOriginal":
if(r){var s=r.selectSingleNode("cv:originalPresentationFieldHelp");if(s){o=s.getAttribute("displayLabel");
break}}o||(o="");break;case"format":o={formatCategory:"Default",formatScale:"0",formatExpression:"",
formatShortcut:"NONE"};break;case"calculated":case"measureName":o=e.getAttribute(t);
break;default:o=r?r.getAttribute(t):null}return o&&i?cv.util.escapeHtml(o):o},getAttributeList:function(){
return this.doc.documentElement.selectNodes("cv:attributeHelp")},getMeasureList:function(){
return this.doc.documentElement.selectNodes("cv:measureHelp")},getDirectChild:function(e){
var t=this.getChildLevels(e);return t.length>0?t[0]:null},getChildLevels:function(e){
for(var t=this.getHierarchy(e),i=[],r=!1,o=0;t&&o<t.length;++o)r&&i.push(t[o]),t[o]==e&&(r=!0);
return i},getHierarchy:function(e,t,i){var r=this.get(e);if(!r)return null;if(r=r.getAttribute("hierarchy"),
!r)return null;for(var o=this.doc.documentElement.selectNodes('cv:hierarchyInfo[@formula="'+r+'"]/cv:levelInfo'),s=[],a=0;a<o.length;++a){
var n=o[a].getAttribute("formula");if((t||!this.isHidden(n))&&s.push(n),i&&n==e)break;
}return s},getHierarchyLevels:function(e){return this.doc.documentElement.selectNodes("cv:attributeHelp[@hierarchy='"+e+"']");
},getProperties:function(e){for(var t=this.doc.documentElement.selectNodes('cv:attributeHelp[@formula="'+e+'"]/cv:presentationFieldHelp/cv:property'),i=[],r=0;r<t.length;++r)i.push(t[r].getAttribute("name"));
return i},getModelInfoValue:function(e,t){var i=this.doc.documentElement.selectSingleNode('*[@formula="'+e+'"]/cv:presentationFieldHelp/cv:modelInfo[@name="'+t+'"]');
return i?cv.textContent(i):void 0},getDatabaseInfo:function(e){var t={columnName:null,
tableName:null,dataType:null,tableSchema:null,tableType:null,isFactTable:function(){
return"FACT_TABLE"===this.tableType}},i=this.doc.documentElement.selectSingleNode('*[@formula="'+e+'"]/cv:presentationFieldHelp/cv:dbColumn');
if(i){t.columnName=i.getAttribute("name"),t.dataType=i.getAttribute("dataType");var r=i.selectSingleNode("cv:table");
r&&(t.tableName=r.getAttribute("name"),t.tableType=r.getAttribute("tableType"),t.tableSchema=r.getAttribute("schema"));
}return t},getCustomActions:function(e){for(var t=this.doc.documentElement.selectNodes('*[@formula="'+e+'"]/cv:presentationFieldHelp/cv:customAction'),i=[],r=0;r<t.length;++r)i.push({
label:t[r].getAttribute("label"),fn:t[r].getAttribute("fn")});return i},isHidden:function(e){
return"true"==this.get(e,"hidden")},isAttribute:function(e){return"string"!=typeof e||(e=this.get(e))?"attributeHelp"==e.tagName:!1;
},isNumberAttribute:function(e){if("string"==typeof e&&(e=this.get(e),!e))return!1;
var t=this.get(e,"dataType");return!!t&&("Numeric"===t||"Integer"===t)},isTimeAttribute:function(e){
if("string"==typeof e&&(e=this.get(e),!e))return!1;var t=this.get(e,"type");return"attributeHelp"==e.tagName&&("TIME_YEAR"==t||"TIME_QUARTER"==t||"TIME_MONTH"==t||"TIME_WEEK"==t||"TIME_DATE"==t||"TIME_HALFYEAR"==t||"TIME_HOUR"==t||"TIME_MINUTE"==t||"TIME_SECOND"==t);
},hasStartDateTimeKey:function(e){if("string"==typeof e&&(e=this.get(e),!e))return!1;
var t=this.get(e,"duration");return!!t&&"ordinal"!==t},hasNumberKey:function(e){if("string"==typeof e&&(e=this.get(e),
!e))return!1;var t=this.get(e,"duration");return!!t&&"ordinal"===t},searchFields:function(e){
if(this.selectedField&&h.remove(this.selectedField,"selectedField"),e&&13==e.keyCode)return void(1==this.fieldCount&&this.selectedField&&this.manager.report.appendGem(this.selectedField.getAttribute("formula")));
e&&"string"==typeof e||(e=this.searchField.value);var t=this.fieldListNodes.length;
this.fieldCount=0;var i=null;e?(i=new RegExp(p.escapeString(e),"i"),cv.util.isHidden(this.clearSearchField)&&cv.util.show(this.clearSearchField)):cv.util.hide(this.clearSearchField);
for(var r=!1,o=null,s=null,a=0;t>a;++a){var n=this.fieldListNodes[a];o!=n.groupHeader&&(o=n.groupHeader,
r=!1,o&&cv.util.hide(o)),h.contains(n,"hiddenField")||(!i||n.textContent.search(i)>=0?(cv.util.show(n),
h.contains(n,"hidden")||(++this.fieldCount,s||(s=n),!r&&o&&(cv.util.show(o),r=!0))):cv.util.isHidden(n)||cv.util.hide(n));
}1===this.fieldCount?(this.selectedField=s,h.add(this.selectedField,"selectedField")):this.selectedField&&(h.remove(this.selectedField,"selectedField"),
this.selectedField=null),this.setGroupState(e?!0:this.groupIsOpen)},showDlg:function(e){
this.manager.report.rptDlg.show("show","fieldHelp",e)},sortFields:function(e){if(this.fieldListTree){
this.currentView&&cv.util.setMenuItem(this.currentView,"none"),this.currentView=e,
cv.util.setMenuItem(this.currentView,"checked");var t,i=!0,o=this;switch(e=this.viewOptions[e]){
case"displayLabel":i=!1,t=function(e,t){return o._sortByName(e,t)};break;case"schema":
t=null,this.fieldListItems=this._getFieldListItems(),e="businessGroup";break;case"type":
t=function(e,t){if(o.isTimeAttribute(e)&&o.isTimeAttribute(t))return o._sortByName(e,t);
var i=o.get(e,"type"),r=o.get(t,"type");return i==r?o._sortByName(e,t):"NUMBER"==i?-1:"NUMBER"==r?1:"ATTRIBUTE"==i?-1:1;
};break;case"businessGroup":t=function(e,t){var i=o.get(e,"businessGroup"),r=o.get(t,"businessGroup");
return i||r?i?r?i>r?1:r>i?-1:o._sortByHierarchy(e,t):-1:1:o._sortByHierarchy(e,t);
};break;default:return}if(t&&this.fieldListItems.sort(t),this.fieldListNodes)for(var s=0,a=this.fieldListNodes.length;a>s;++s)this.fieldListNodes[s].dndObj&&(this.fieldListNodes[s].dndObj=null);
this.fieldListNodes=[],this.groups=[],this.fieldListTreeContent.innerHTML="";for(var a=this.fieldListItems.length,n="!@#$",l=null,d=null,c=!1,p=0,s=0;a>s;++s){
var m,g=this.fieldListItems[s],v=g.getAttribute("formula");if(i){var f;if(f="type"==e&&this.isTimeAttribute(g)?"TIME":this.get(g,e),
f!=n){n=f;var b;switch(e){case"schema":b=n?n:cvCatalog.fieldGroupNoValue;break;case"type":
b=cvCatalog["fieldTypeLabels_"+(n?n:"NUMBER")];break;case"businessGroup":b=n?n:cvCatalog.fieldGroupNoValue;
break;default:b=cvCatalog.fieldGroupNoValue}l=document.createElement("DIV"),l.innerHTML=cv.util.escapeHtml(b),
l.id="GROUP"+p,h.add(l,"folder hidden uncommon"),c=!1,this.fieldListTreeContent.appendChild(l),
d=document.createElement("DIV"),d.id="GROUP"+p+"DIV",h.add(d,"folderContent uncommon"),
this.fieldListTreeContent.appendChild(d),this.groups.push(this._makeCollapsible(l,d,this.groupIsOpen)),
++p,m=this._makeSource(d,{}),r.mixin(m,{onDrop:function(){}}),l.setAttribute("businessGroup",b);
}}var y=document.createElement("DIV"),v=g.getAttribute("formula"),_=this.get(g,"displayLabel",!0),T=this.getProperties(v);
!this.isDrill&&T&&T.length>0&&(_+=" ("+T.length+")"),y.innerHTML=_?_:"&nbsp;",y.setAttribute("formula",v),
y.groupHeader=l;var C=this.get(v,"displayDescription",!0),I=C&&C.length>0?$("<div/>").html(C).text():_?$("<div/>").html(_).text():_;
y.setAttribute("title",I);var A="NUMBER"===this.get(g,"type");y.setAttribute("type",A?"measure":"attribute"),
this.isDrill?(h.add(y,A?"fieldDrill measure":"fieldDrill attribute"),y.innerHTML="<input type='checkbox' "+(this.drillFields[v]?"checked":"")+" />"+y.innerHTML):(h.add(y,A?"field measure":"field attribute"),
h.add(y,"dojoDndItem")),"true"!=this.get(g,"isDefaultFavorite")?h.add(y,"uncommon"):l&&h.contains(l,"uncommon")&&(h.remove(l,"uncommon"),
h.remove(d,"uncommon"));var E=this.getModelInfoValue(v,"InlineCreatedInline");E&&"true"==E.trim()&&h.add(y,"inlineCalcMeasure"),
this.isHidden(g)&&h.add(y,this.showHiddenFields?"disabled":"hiddenField"),this.fieldListNodes.push(y),
d?d.appendChild(y):this.fieldListTreeContent.appendChild(y),l&&!c&&(cv.isMobile()&&"none"!=y.style.display||"none"!=u.get(y,"display"))&&(cv.util.show(l),
c=!0);var v=y.getAttribute("formula"),D=this.get(v);D&&cv.util.disableTextSelection(y),
y.setAttribute("dndType",cvConst.dndTypes.gemFromFieldList),d&&m.sync()}c||(this.fieldListDnDSource||(this.fieldListDnDSource=this._makeSource(this.fieldListTreeContent,{}),
r.mixin(this.fieldListDnDSource,{onDrop:function(){}})),this.fieldListDnDSource.sync()),
this.searchField.value&&this.searchFields();var M=this.byId("fieldCount");M&&(M.innerHTML=this._getFieldListItemCount());
}},_makeCollapsible:function(e,t,i,r,o){return new cv.Collapsible(e,t,i,r,o)},_makeSource:function(e,t){
return t.postDrop={scope:this.manager.report,f:this.manager.report.emitDropEvent},
new a(e,t)},_sortByName:function(e,t){var i=this.get(e,"displayLabel"),r=this.get(t,"displayLabel");
return i>r?1:r>i?-1:0},_sortByHierarchy:function(e,t){var i=this.get(e,"hierarchy"),r=this.get(t,"hierarchy");
if(!i&&!r)return this._sortByName(e,t);if(!i)return-1;if(!r)return 1;if(i!=r)return r>i?-1:1;
var o=this.doc.documentElement.selectNodes('cv:hierarchyInfo[@formula="'+i+'"]/cv:levelInfo');
i=this.get(e,"formula"),r=this.get(t,"formula");for(var s=0;s<o.length;++s){var a=o[s].getAttribute("formula");
if(a==i)return-1;if(a==r)return 1}return this._sortByName(e,t)},onClearSearch:function(){
this.searchField.value&&(this.searchField.value="",this.searchFields(),this.setGroupState(this.groupIsOpen),
this.searchField.focus()),cv.util.hide(this.clearSearchField)},onMouseOver:function(e){
var t=e.target;if(t&&h.contains(t,"field")&&this.selectedField!=t&&(this.selectedField&&h.remove(this.selectedField,"fieldListItem-selected"),
this.selectedField=t,h.add(this.selectedField,"fieldListItem-selected"),h.contains(t,"field")&&(h.add(this.selectedField,"gem"),
0==t.childElementCount))){var i=document.createElement("div");i.className="gemMenuHandle scalable",
this.handles.push(this._on(i,"click",r.hitch(this,"onContextMenu"))),t.appendChild(i);
}},onMouseDown:function(e){var t=e.target;if(s.close(),null!=this.clickedField&&(h.remove(this.clickedField,"gem"),
h.remove(this.clickedField,"measureSelected")),t!=this.clickedField&&(this.clickedField=null),
(h.contains(t,"measure")||h.contains(t,"gem"))&&h.add(this.selectedField,"gem"),t&&h.contains(t,"field")){
var i=t.getAttribute("formula");this.get(i)}},onMouseOut:function(e){var t=e.target;
t!=this.clickedField&&t.parentNode!=this.clickedField&&(null==e.relatedTarget||e.relatedTarget.parentNode!=t&&e.relatedTarget!=t.parentNode)&&(h.contains(t,"gem")||t.parentNode&&h.contains(t.parentNode,"gem"))&&(h.remove(this.selectedField,"gem"),
this.selectedField.childNodes[0].childNodes>0&&this.selectedField.removeChild(this.selectedField.childNodes[0].childNodes[0]),
this.selectedField&&h.remove(this.selectedField,"fieldListItem-selected"),this.selectedField=null);
},onDblClick:function(e){var t=this.selectedField.getAttribute("formula");e.target!=this.selectedField||this.isHidden(t)||this.manager.report.appendGem(t);
},onContextMenu:function(e){var t=cv.util.getAncestorByClass(e.target,"field");if(t){
this.selectedMenuField=this.selectedField,cv.util.popupSourceNode=t,cv.util.getDojoWidget("theTooltip").cancelShowing=!0;
var i=cv.util.getDojoWidget("fieldListMenu");cv.util.disableMenuItems(i,this.selectedField),
cv.util.showPopupMenu(i,e.clientX,e.clientY),m.stop(e)}},onFieldEdit:function(){this.selectedMenuField&&(this.manager.report.rptDlg.showCreateMeasureDlg(),
s.close())},onMeasureProperties:function(){this.selectedMenuField&&(this.manager.report.rptDlg.showMeasurePropertiesDlg(),
s.close())},onAttributeProperties:function(){this.selectedMenuField&&(this.manager.report.rptDlg.showAttributePropertiesDlg(),
s.close())},onCalculatedMeasureProperties:function(){if(this.selectedMenuField){var e=cv.api.util._hasInlineModelingPermission(),t=cv.getFieldHelp().selectedMenuField.getAttribute("formula"),i=this.getModelInfoValue(t,"InlineCreatedInline");
e&&i&&"true"==i.trim()?this.manager.report.rptDlg.showEditCalculatedMeasureDlg():this.onMeasureProperties(),
s.close()}},onCreateCalculatedMeasure:function(){this.selectedMenuField&&(this.manager.report.rptDlg.showCreateCalculatedMeasureDlg(),
s.close())},onRemoveMeasure:function(){this.selectedMenuField&&(this.manager.report.rptDlg.showRemoveMeasureDlg(),
s.close())},onFieldAdd:function(){this.selectedMenuField&&(this.manager.report.appendGem(this.selectedMenuField.getAttribute("formula")),
s.close())},onFieldFilter:function(){this.selectedMenuField&&(this.manager.report.rptDlg.showFilterList(this.selectedMenuField.getAttribute("formula")),
s.close())},onFieldHelp:function(){this.selectedMenuField&&(this.showDlg(this.selectedMenuField.getAttribute("formula")),
s.close())},onFieldHelpTooltip:function(){this.selectedField&&(this.showDlg(this.selectedField.getAttribute("formula")),
s.close())},onViewCategory:function(){this.manager.report.drillDlg.fieldHelp?this.manager.report.drillDlg.fieldHelp.sortFields("CMDVIEWCATEGORY"):this.sortFields("CMDVIEWCATEGORY");
},onViewName:function(){this.manager.report.drillDlg.fieldHelp?this.manager.report.drillDlg.fieldHelp.sortFields("CMDVIEWNAME"):this.sortFields("CMDVIEWNAME");
},onViewSchema:function(){this.manager.report.drillDlg.fieldHelp?this.manager.report.drillDlg.fieldHelp.sortFields("CMDVIEWSCHEMA"):this.sortFields("CMDVIEWSCHEMA");
},onShowHideFields:function(){this.manager.report.drillDlg.fieldHelp||(this.showHiddenFields=!this.showHiddenFields,
this.sortFields(this.currentView))},onViewType:function(){this.manager.report.drillDlg.fieldHelp?this.manager.report.drillDlg.fieldHelp.sortFields("CMDVIEWTYPE"):this.sortFields("CMDVIEWTYPE");
},onViewFieldOptions:function(e){var t=cv.util.getDojoWidget("fieldViewMenu");t&&(cv.util.setMenuItem("CMDVIEWCATEGORY","none"),
cv.util.setMenuItem("CMDVIEWTYPE","none"),cv.util.setMenuItem("CMDVIEWNAME","none"),
cv.util.setMenuItem("CMDVIEWSCHEMA","none"),cv.util.setMenuItem(this.currentView,"checked"),
cv.util.setMenuItem("CMDSHOWHIDEFIELDS",this.showHiddenFields?"checked":"none"),this.isDrill&&(this.drillFields=this.getSelectedFields()),
this.isDrill||!cv.api.util._hasInlineModelingPermission()?(h.add("CMDSHOWHIDEFIELDS","hidden"),
h.add("showHideSeparator","hidden")):(h.remove("CMDSHOWHIDEFIELDS","hidden"),h.remove("showHideSeparator","hidden")),
cv.util.showPopupMenu(t,e.pageX,e.pageY),m.stop(e))},getSelectedFields:function(){
for(var e={},t=0,i=this.fieldListNodes.length;i>t;++t){var r=this.fieldListNodes[t].getElementsByTagName("input")[0];
r.checked&&(this.fieldListNodes[t].className&&this.fieldListNodes[t].className.indexOf("hiddenField")>-1?e[this.fieldListNodes[t].getAttribute("formula")]=!1:e[this.fieldListNodes[t].getAttribute("formula")]=!0);
}return e},selectAll:function(e){this.onClearSearch();var t={};if(e)for(var i=0,r=this.fieldListNodes.length;r>i;++i)t[this.fieldListNodes[i].getAttribute("formula")]=!0;
this.drillFields=t,this.sortFields(this.currentView)},updateXml:function(e){this.doc=cv.parseXML(e),
cv.setDomDefaultNamespace(this.doc),this.fieldListItems=this._getFieldListItems(),
this.fieldCount=this.fieldListItems.length,this.sortFields(this.currentView)},onShowHideField:function(){
this.selectedMenuField&&cv.util.createShowHideFieldAnnotation(this.selectedMenuField);
},setGroupState:function(e){for(var t=0;t<this.groups.length;++t)this.groups[t].isOpen!=e&&this.groups[t].onClickHeader();
}})}),define("analyzer/report/cv_rptResize",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","analyzer/report/cv_rptFieldHelp","dojo/_base/array","dojo/has","dojo/sniff"],function(e,t,i,r,o,s,a){
cv.ReportResizer=function(e){this.report=e,this.previousPageX=-1,this.resizeObj=null,
this.resizeData=null,this.page=null,this.handles=[]},cv.ReportResizer.prototype={
destroy:function(){this.page=null,this.resizeData=null,this.resizeobj=null},gainedFocus:function(e){
var i=e.target;if(i){for(this._updateCursorLook(e);"DIV"!=i.tagName;)i=i.childNodes[0];
this.handles.push(t(i,"mousemove",r.hitch(this,"_updateCursorLook"))),this.handles.push(t(i,"click",r.hitch(this,"_showMenu"))),
this.handles.push(t(i,"mousedown",r.hitch(this,"_beginResize"))),this.handles.push(t(i,"mouseout",r.hitch(this,"_lostFocus")));
}},_lostFocus:function(e){for(var t=e.target;"DIV"!=t.tagName;)t=t.childNodes[0];this.handles=s.filter(this.handles,function(e){
return e.remove(),!1})},_beginResize:function(e){if(this._isInResizeZone(e)){this.report.resizing=!0,
this.previousPageX=e.pageX;for(var i=e.target;"DIV"!=i.tagName;)i=i.childNodes[0];
for(this.resizeObj=i,this.resizeData=this.report.reportHeaders.getDataColumn(this.resizeObj.offsetParent),
this.page=this.resizeObj;this.page.offsetParent;)this.page=this.page.offsetParent;
this.resizeHandles=[t(this.page,"mousemove",r.hitch(this,"_resize")),t(this.page,"mouseup",r.hitch(this,"_endResize"))];
}},_endResize:function(e){this.report.reportHeaders.updateLayout(),s.forEach(this.resizeHandles,function(e){
e.remove()});for(var t=this._getWidth(this.resizeObj),i=0;i<this.resizeData.length;i++)this.resizeData[i].childNodes[0].style.width=t+1+"px";
this.report.resizing=!1},_resize:function(e){for(var t=this._getParentHeaders(this.resizeObj),i=0;i<t.length;i++)this._resizeObj(t[i],e);
this.previousPageX=e.pageX},_resizeObj:function(e,t){var i=this._getWidth(e);i+=t.pageX-this.previousPageX;
var r=1*e.offsetParent.getAttribute("colspan");10*r>i&&(i=10*r),e.style.width=i+"px";
},_getParentHeaders:function(e){var t=e.parentNode,i=t.parentNode,r=i.parentNode,o=r.getElementsByTagName("TR"),s=1*t.getAttribute("colindex");
return this.getParentHeaders(o,s)},getParentHeaders:function(e,t){for(var i=new Array,r=0;r<e.length;r++)for(var o=e[r].childNodes,s=0;s<o.length;s++){
var a=o[s],n=1*a.getAttribute("colspan"),l=1*a.getAttribute("rowspan"),d=1*a.getAttribute("colindex");
if(t>=d&&d+n>t){i.push(a.childNodes[0]),r+=l-1;break}}return i},_updateCursorLook:function(e){
for(var t=e.target;"DIV"!=t.tagName;)t=t.childNodes[0];e.target.style&&e.target.style.cursor&&(this._isInResizeZone(e)?t.offsetParent.style.cursor="e-resize":t.offsetParent.style.cursor="");
},_showMenu:function(e){this._isInResizeZone(e)||this.report.toggleInReportPopupMenu(e);
},_isInResizeZone:function(e){for(var t=e.target;"DIV"!=t.tagName;)t=t.childNodes[0];
var i=e.pageX,r=this._findLeft(t),o=t.offsetWidth,s=r+o;return i>s-10&&s>i?!0:!1},
_findLeft:function(e){var t=0;if(e.offsetParent)for(;e.offsetParent;)t+=e.offsetLeft-e.scrollLeft,
e=e.offsetParent;else e.x&&(t+=e.x);return a("ie")||(t-=this.report.reportHeaders.getHorzScrollAmount()),
t},_getWidth:function(e){var t=parseInt(e.style.width.substring(0,e.style.width.length-2));
return t}}}),define("analyzer/ResizeHandle",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojox/layout/ResizeHandle","dojo/dom-class","dojo/has","dojo/sniff","dojo/dom-geometry","dojo/_base/window","dojo/_base/array","dojo/NodeList-traverse"],function(declare,on,query,lang,DResizeHandle,domClass,has,sniff,geometry,baseWin,array){
var ResizeHandle=declare([DResizeHandle],{templateString:'<div class="resizeHandle" style="right: 0"><div></div></div>',
INITIAL_WIDTH:0,MINIMAL_WIDTH:10,postCreate:function(){this.domNode.id="CVResizeHandle_"+this.resizeNodeId,
this.handles=[on(this.domNode,"mousedown",lang.hitch(this,"_beginSizing")),on(this.domNode,"dblclick",lang.hitch(this,"_revert"))];
},_revert:function(e){if("Label"==this.targetType)this.reportHeader.report.rowFieldWidths[this.resizeIndex]=0;else if("Column"==this.targetType)for(var t=this.targetDomNode.parentNode.getAttribute("colspan")-0,i=0;i<this.reportHeader.report.columnDataFieldWidths.length;i++)i>=this.resizeIndex&&i<this.resizeIndex+t&&(this.reportHeader.report.columnDataFieldWidths[i]=0);
this.reportHeader.updateLayout(),this.reportHeader.report.history.add(new cv.ReportState("Reset Column")),
this.reportHeader.report.history.setRefreshed(!0)},_drawLine:function(leftX){with(this.line.style)left=leftX+"px",
has("ie")&&(top="2px");this.reportHeader.rowLabelSection.appendChild(this.line)},
_showLine:function(){if(null!=this.line)with(this.line.style)visibility=""},_hideLine:function(){
if(null!=this.line)with(this.line.style)visibility="hidden"},_createLineOnCursorPosition:function(e){
var t=geometry.position(this.reportHeader.rowLabelSection,!0),i=e.clientX-t.x+this.INITIAL_WIDTH;
return null==this.line?(this.line=document.createElement("div"),domClass.add(this.line,"resizeIndicator"),
void this._drawLine(i)):void 0},_moveLineToCursorPosition:function(e){var t=geometry.position(this.reportHeader.rowLabelSection,!0),i=e.clientX-t.x+this.INITIAL_WIDTH;
if("undefined"!=typeof this.currentWidth){var r=1;"Column"==this.targetType&&(r=this.targetDomNode.parentNode.getAttribute("colspan")-0);
var o=parseInt(this.currentWidth);o-this.dx<this.MINIMAL_WIDTH*r&&(i=this.startPoint.x-(o-this.MINIMAL_WIDTH*r)-t.x+this.INITIAL_WIDTH,
has("ie")?this.changeSizingHandle.remove():e.offsetX=i,this.dx=o-this.MINIMAL_WIDTH*r);
}this._showLine(),this._drawLine(i)},_getCurrentColumnWidth:function(){this.currentWidth=0;
var e=[];if("Label"==this.targetType)e=this.reportHeader.rowLabelHeaderContainer.getElementsByTagName("COL"),
this.currentWidth=e[this.resizeIndex].width;else{if("Column"!=this.targetType)return;
e=this.reportHeader.columnHeaderContainer.getElementsByTagName("COL");for(var t=this.targetDomNode.parentNode.getAttribute("colspan")-0,i=0;i<e.length;i++)i>=this.resizeIndex&&i<this.resizeIndex+t&&(this.currentWidth+=e[i].width-0);
}},_beginSizing:function(e){this.reportHeader.report.isResizing=!0,this.resizeIndex=this.targetDomNode.attributes.resizeIndex.value-0,
this._getCurrentColumnWidth(),this.dx=0,this.startPoint={x:e.clientX,y:e.clientY},
this._createLineOnCursorPosition(e),this.sizingHandles=[on(this.line,"dblclick",lang.hitch(this,"_revert")),on(document,"mouseup",lang.hitch(this,"_endSizing"))],
this.changeSizingHandle=on(document,"mousemove",lang.hitch(this,"_changeSizing")),
e.preventDefault(),this.maxDx=$(this.domNode.parentElement).width()},_changeSizing:function(e){
try{cv.util.stopDrag()}catch(t){}try{if(!e.clientX||!e.clientY)return}catch(e){return;
}e.preventDefault(),this.dx=this.startPoint.x-e.clientX,this.dx<this.maxDx&&this._moveLineToCursorPosition(e);
},_endSizing:function(e){this.inherited("_endSizing",[e]),this._hideLine(),this.dx=this.dx||0,
this.dx>this.maxDx&&(this.dx=this.maxDx);var t=new cv.ReportState("Column Resize");
if("Label"==this.targetType)this.reportHeader.updateLayout(this.resizeIndex,this.dx),
t.resizeData={index:this.resizeIndex,dx:this.dx};else if("Column"==this.targetType){
var i=this.targetDomNode.parentNode.getAttribute("colspan")-0;this.reportHeader.updateLayout(this.resizeIndex,this.dx,i),
t.resizeData={index:this.resizeIndex,dx:this.dx,colspan:i}}this.reportHeader.report.history.add(t),
this.reportHeader.report.history.setRefreshed(!0),this.reportHeader.report.isResizing=!1,
array.forEach(this.sizingHandles,function(e){e.remove()}),this.changeSizingHandle.remove(),
void 0==has("ie")&&has("trident")&&dojo.query(this.domNode).closest("td").removeClass("dojoDndItem");
}});return declare("analyzer.BeforeResizeHandle",[ResizeHandle],{templateString:'<div class="resizeHandle" style="left: 0"><div></div></div>',
postCreate:function(){this.domNode.id="CVResizeHandle_"+this.resizeNodeId,this.handles=[on(this.domNode,"mousedown",lang.hitch(this,"_beginSizing")),on(this.domNode,"dblclick",lang.hitch(this,"_revert"))];
},_getCurrentColumnWidth:function(){this.currentWidth=0;var e=[];if("Label"==this.targetType)e=this.reportHeader.rowLabelHeaderContainer.getElementsByTagName("COL"),
this.currentWidth=e[this.resizeIndex-1].width;else{if("Column"!=this.targetType)return;
if(0==this.resizeIndex){var t=this.reportHeader.rowLabelHeaderContainer.getElementsByTagName("COL").length-1;
this.currentWidth=this.reportHeader.rowLabelHeaderContainer.getElementsByTagName("COL")[t].width;
}else{e=this.reportHeader.columnHeaderContainer.getElementsByTagName("COL");for(var i=this.targetDomNode.parentNode.getAttribute("colspan")-0,r=this.resizeIndex-i,o=0;o<e.length;o++)o>=r&&r+i>o&&(this.currentWidth+=e[o].width-0);
}}},_revert:function(e){if("Label"==this.targetType)this.reportHeader.report.rowFieldWidths[this.resizeIndex-1]=0;else if("Column"==this.targetType)if(0==this.resizeIndex){
var t=this.reportHeader.rowLabelHeaderContainer.getElementsByTagName("COL").length-1;
this.reportHeader.report.rowFieldWidths[t]=0}else for(var i=this.targetDomNode.parentNode.getAttribute("colspan")-0,r=this.resizeIndex-i,o=0;o<this.reportHeader.report.columnDataFieldWidths.length;o++)o>=r&&r+i>o&&(this.reportHeader.report.columnDataFieldWidths[o]=0);
this.reportHeader.updateLayout(),this.reportHeader.report.history.add(new cv.ReportState("Reset Column")),
this.reportHeader.report.history.setRefreshed(!0)},_endSizing:function(e){this._hideLine(),
this.dx=this.dx||0;var t=new cv.ReportState("Column Resize","");if("Label"==this.targetType)this.reportHeader.updateLayout(this.resizeIndex-1,this.dx),
t.resizeData={index:this.resizeIndex-1,dx:this.dx};else if("Column"==this.targetType)if(0==this.resizeIndex){
var i=this.reportHeader.rowLabelHeaderContainer.getElementsByTagName("COL").length-1;
this.reportHeader.updateLayout(i,this.dx),t.resizeData={index:i,dx:this.dx}}else{
var r=this.targetDomNode.parentNode.getAttribute("colspan")-0;this.reportHeader.updateLayout(this.resizeIndex-r,this.dx,r),
t.resizeData={index:this.resizeIndex-r,dx:this.dx,colspan:r}}this.reportHeader.report.history.add(t),
this.reportHeader.report.history.setRefreshed(!0),this.reportHeader.report.isResizing=!1,
array.forEach(this.sizingHandles,dojo.disconnect),this.changeSizingHandle.remove(),
void 0==has("ie")&&has("trident")&&dojo.query(this.domNode).closest("td").removeClass("dojoDndItem");
}}),ResizeHandle}),define("analyzer/report/cv_rptHeaders",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojo/dnd/Source","analyzer/ResizeHandle","analyzer/report/cv_rptFieldHelp","dojo/_base/array","dojo/dom-style","dojo/dom-geometry","dojo/dom-class","dojo/has","dojo/sniff"],function(e,t,i,r,o,s,a,n,l,d,c,h){
cv.ReportHeaders=function(e,o){this.report=e,this.tableArea=e.nodeReportArea,this.pivotTable=i(" > div:first-of-type",e.nodeReportArea)[0],
this.rowLabelHeaderSection=cv.util.getFirstChildByClass(this.pivotTable,"pivotTableRowLabelHeaderSection"),
this.rowLabelHeaderContainer=cv.util.getFirstChildByClass(this.pivotTable,"pivotTableRowLabelHeaderContainer"),
this.rowLabelSection=cv.util.getFirstChildByClass(this.pivotTable,"pivotTableRowLabelSection"),
this.rowLabelContainer=cv.util.getFirstChildByClass(this.pivotTable,"pivotTableRowLabelContainer"),
this.columnHeaderSection=cv.util.getFirstChildByClass(this.pivotTable,"pivotTableColumnHeaderSection"),
this.columnHeaderContainer=cv.util.getFirstChildByClass(this.pivotTable,"pivotTableColumnHeaderContainer"),
this.columnHeaderTable=cv.util.getFirstChildByClass(this.columnHeaderContainer,"ZONE_columnAttributes"),
this.rowHeaderTable=cv.util.getFirstChildByClass(this.rowLabelHeaderSection,"ZONE_rowAttributes"),
this.measureHeaderTable=cv.util.getFirstChildByClass(this.columnHeaderTable,"ZONE_measures"),
this.dataSection=cv.util.getFirstChildByClass(this.pivotTable,"pivotTableDataSection"),
this.dataContainer=cv.util.getFirstChildByClass(this.pivotTable,"pivotTableDataContainer"),
this.content=cv.util.getFirstChildByClass(this.pivotTable,"pivotTableContent"),this.scrollbarArea=cv.util.getFirstChildByClass(this.pivotTable,"pivotTableScrollbars"),
this.scrollbarAreaDiv=i(" > div:first-of-type",this.scrollbarArea)[0],this.truncateType=this.pivotTable.truncateType,
this.dragNodes=[],this.handles=[],this.tempDragHandles=[];for(var s=this.rowLabelContainer.firstChild;"TABLE"!=s.tagName;)s=s.nextSibling;
this.rowLabelTable=s;for(var s=this.dataContainer.firstChild;"TABLE"!=s.tagName;)s=s.nextSibling;
this.colLabelTable=s;for(var s=this.content.firstChild;"TABLE"!=s.tagName;)s=s.nextSibling;
this.contentTable=s,("ROW"==this.truncateType||"BOTH"==this.truncateType)&&(e.byId("RowTruncateMsg").innerHTML=this.pivotTable.rowMsg),
("COL"==this.truncateType||"BOTH"==this.truncateType)&&(e.byId("ColTruncateMsg").innerHTML=this.pivotTable.colMsg),
cv.util.hide(this.report.nodeColTruncate,this.report.nodeRowTruncate,this.report.nodeTransTruncate),
this._refreshRowLabelHeaders(),this.labelRows=this.rowLabelSection.getElementsByTagName("TR");
var a=null;this.rowLabels=null,this.labelRows.length>0&&(a=this.labelRows[0].childNodes,
this.rowLabels=this.rowLabelSection.getElementsByTagName("COLGROUP")[0].childNodes);
var n=this.columnHeaderSection.getElementsByTagName("TR");if(this.columnHeaders=n.length?n[n.length-1].childNodes:null,
null!=this.columnHeaders&&(h("ie")||h("trident"))&&1==n.length)for(var l=this.columnHeaderSection.getElementsByTagName("COLGROUP")[0].childNodes,c=0;c<l.length;c++)l[c].width=1*l[c].width-1;
this.dataColumns=this.dataSection.getElementsByTagName("TR"),this.connectScrollbar(),
this.previousPageX=-1,this.previousPageY=-1,this._setUpDrag(),h("mozilla")?this.pivotTable.addEventListener&&this.pivotTable.addEventListener("DOMMouseScroll",r.hitch(this,"_mouseScroll"),!1):(this.mouseWheelHandle=t(this.pivotTable,"mousewheel",r.hitch(this,"_mouseScroll")),
this.handles.push(this.mouseWheelHandle),this.handles.push(t(this.pivotTable,"mousemove",r.hitch(this,"_clearSelection")))),
this.handles.push(t(this.pivotTable,"mousedown",r.hitch(this,"_mouseDown"))),this.widths=new Array,
this.initialWidths=new Array,this.columnWidths=new Array,this.initialColumnWidths=new Array,
this.DEFAULT_COLUMN_WIDTH=120,this.MINIMAL_WIDTH=10,this.resizeLabels=new Array,this.resizeColumns=new Array,
this._refreshRowLabelHeaders();for(var c=0;c<this.rowLabelHeaders.length;c++){var u=0;
null!=this.rowLabels&&(u=d.getContentBox(a[c]).w);var p=d.getContentBox(this.rowLabelHeaders[c]).w;
this.isTooLongOrHasSpace(this.rowLabelHeaders[c].title)&&(p=1.1*p/2),this.widths[c]=Math.min(u,210),
this.widths[c]=Math.max(this.widths[c],80),this.widths[c]=Math.max(this.widths[c],p),
this.initialWidths[c]=this.widths[c]}if(h("ie")||h("trident")){var m=this.dataContainer.childNodes[0].childNodes[0].childNodes;
if(null!=this.columnHeaders&&this.columnHeaders.length>0&&m.length>0){var g=m[0];g.width=1*g.width+1,
g=m[m.length-1],g.width=1*g.width-(1==n.length?2:1)}}},cv.ReportHeaders.prototype={
disconnect:function(){this._tearDownDrag();for(var e=0;e<this.dragNodes.length;++e)this.dragNodes[e].dndObj=null;
n.forEach(this.handles,function(e){e.remove()}),this.pivotTable=null,this.rowLabelHeaderSection=null,
this.rowLabelHeaderContainer=null,this.rowLabelSection=null,this.rowLabelContainer=null,
this.columnHeaderSection=null,this.columnHeaderContainer=null,this.dataSection=null,
this.dataContainer=null,this.tableArea=null,this.content=null,this.scrollbarArea=null,
this.rowLabelHeaders=null,this.rowLabels=null,this.labelRows=null,this.columnHeaders=null,
this.dataColumns=null,this.dragNodes=null},connectScrollbar:function(){this.scrollHandle=t(this.scrollbarArea,"scroll",r.hitch(this,"_scroll")),
this.handles.push(this.scrollHandle)},isTooLongOrHasSpace:function(e){return e.length>30||e.indexOf(" ")>-1;
},attachResizeNode:function(e,t,i,r){if(null!=e){var o=document.createElement("div");
if("after"==i){var a=new s({resizeNodeId:r,reportHeader:this,targetType:t,targetDomNode:e
},o);e.appendChild(a.domNode)}else{var a=new analyzer.BeforeResizeHandle({resizeNodeId:r,
reportHeader:this,targetType:t,targetDomNode:e},o);e.insertBefore(a.domNode,e.firstChild);
}}},_sumOf:function(e){for(var t=0,i=0;i<e.length;i++)t+=e[i];return t},_computeRowLabelWidths:function(){
for(var e=new Array,t=0;t<this.widths.length;t++)e[t]=this.widths[t];for(var i=this._sumOf(e),r=.67*this.pivotTableWidth;i>r;){
for(var o=new Array,s=0,a=0,t=0;t<e.length;t++)e[t]==s?o[o.length]=t:e[t]>s&&(o=new Array,
o[0]=t,s=e[t]);for(var t=0;t<e.length;t++)e[t]>a&&e[t]<s&&(a=e[t]);for(var n=Math.max(1,Math.min(Math.ceil((i-r)/o.length),s-a)),t=0;t<o.length;t++)e[o[t]]-=n;
i=this._sumOf(e)}return e},_adjustRowLabelWidths:function(e,t,i){var r=[],o=Math.max(l.get(this.rowLabelContainer,"padding"),l.get(this.rowLabelHeaderContainer,"padding")),s=o;
this.rowLabelContainer.childNodes[0].style.tableLayout="fixed",this.rowLabelContainer.childNodes[0].style.width="0px";
var a=this.rowLabelHeaderContainer.getElementsByTagName("COL");this.rowLabelHeaderContainer.childNodes[0].style.tableLayout="fixed",
this.rowLabelHeaderContainer.childNodes[0].style.width="0px";for(var n=0;n<e.length;n++){
var d=this.widths[n];null!=this.report.rowFieldWidths[n]&&(d-=this.report.rowFieldWidths[n]),
d<this.MINIMAL_WIDTH&&(d=this.MINIMAL_WIDTH),"undefined"!=typeof t&&n==t&&(this.report.isReportPropsDirty=!0,
d-=i,d<this.MINIMAL_WIDTH&&(d=this.MINIMAL_WIDTH),"undefined"==typeof this.report.rowFieldWidths[n]?this.report.rowFieldWidths[n]=i:this.report.rowFieldWidths[n]+=i),
this._refreshRowLabelHeaders(),this.rowLabelHeaders[n].childNodes[0].style.whiteSpace="normal",
a[n].width=d+"px",r.push(d),null!=this.rowLabels&&(this.rowLabels[n].width=d+"px"),
o+=d}return o-=s,this.rowLabelHeaderSection.setAttribute("width",o),this.rowLabelSection.setAttribute("width",o),
o>0&&(this.rowLabelHeaderContainer.style.width=o+"px"),this.report.actualRowFieldWidths=r,
o},_refreshRowLabelHeaders:function(){this.rowLabelHeaders=this.rowLabelHeaderContainer.getElementsByTagName("TD");
},_adjustColumnWidths:function(e,t,i){for(var r=[],o=new Array,s=this.columnHeaderContainer.getElementsByTagName("COL"),a=0;a<s.length;a++)"undefined"!=typeof this.report.columnDataFieldWidths[a]?o[a]=this.DEFAULT_COLUMN_WIDTH-this.report.columnDataFieldWidths[a]:o[a]=this.DEFAULT_COLUMN_WIDTH;
for(var a=0;a<o.length;a++)"undefined"!=typeof e&&"undefined"!=typeof i&&a>=e&&e+i>a&&(this.report.isReportPropsDirty=!0,
o[a]-=t/i);for(var n=0,a=0;a<o.length;++a)n+=o[a];(h("ie")||h("trident"))&&(n+=1),
this.columnHeaderSection.style.width=n+"px",this.columnHeaderContainer.style.width=n+"px",
this.columnHeaderSection.setAttribute("width",n),this.columnHeaderContainer.setAttribute("width",n);
for(var l=this.dataContainer.getElementsByTagName("COL"),a=0;a<o.length;a++){var d=o[a]<this.MINIMAL_WIDTH?this.MINIMAL_WIDTH:o[a];
l[a].width=d,s[a].width=d,r.push(d)}for(var a=0;a<o.length;a++)this.report.columnDataFieldWidths[a]=this.DEFAULT_COLUMN_WIDTH-o[a];
cv.util.getFirstChildByClass(this.columnHeaderContainer,"ZONE_columnAttributes").style.width=n+"px",
this.dataContainer.setAttribute("width",n),this.dataContainer.style.width=n+"px";var c=this.dataContainer.getElementsByTagName("table");
c[0].setAttribute("width",n),this.report.actualColumnFieldWidths=r},_adjustCellsHeight:function(){
if(null!=this.labelRows&&this.labelRows.length>0&&null!=this.dataColumns&&this.dataColumns.length>0){
var e=this.labelRows.length;if(e!==this.dataColumns.length)return;for(var t=[],i=0;e>i;i++){
var r=-1;if(this._containsSpecialCharacters(this.labelRows[i].textContent)||this._containsSpecialCharacters(this.dataColumns[i].textContent)){
var o=d.getContentBox(this.labelRows[i]).h,s=d.getContentBox(this.dataColumns[i]).h;
o!==s&&(r=Math.max(o,s))}t.push(r)}for(var i=0;e>i;i++)t[i]>-1&&(this.labelRows[i].style.height=t[i]+"px",
this.dataColumns[i].style.height=t[i]+"px")}},_containsSpecialCharacters:function(e){
if(e&&e.length>0)for(var t=0;t<e.length;t++)if(e.charCodeAt(t)>1792)return!0;return!1;
},_adjustHeadersHeight:function(){if(this._refreshRowLabelHeaders(),null!=this.rowLabelHeaders&&this.rowLabelHeaders.length>0&&null!=this.columnHeaders&&this.columnHeaders.length>0){
for(var e=d.getContentBox(this.columnHeaders[0]).h,t=d.getContentBox(this.rowLabelHeaders[0]).h,i=Math.max(e,t),r=0;r<this.rowLabelHeaders.length;r++)this.rowLabelHeaders[r].style.height=i+"px";
for(var r=0;r<this.columnHeaders.length;r++)this.columnHeaders[r].style.height=i+"px";
}},_hideEmptyContainers:function(){d.getContentBox(this.columnHeaderTable).h<=1&&(this.columnHeaderTable.style.display="none");
},_adjustContainer:function(e){var t=Math.max(d.position(this.columnHeaderContainer.childNodes[0]).h,d.position(this.rowLabelHeaderContainer.childNodes[0]).h);
this.rowLabelHeaderSection.setAttribute("height",t),this.rowLabelHeaderContainer.style.height=t+"px",
this.columnHeaderSection.setAttribute("height",t),this.dataAreaWidth=this.scrollbarArea.clientWidth-e-2;
var i=this.scrollbarArea.clientHeight-t;this.content.style.width=this.scrollbarArea.clientWidth+"px",
this.content.style.height=this.scrollbarArea.clientHeight+"px",this.dataContainer.scrollLeft=0,
this.dataContainer.scrollTop=0;var r=this.rowLabelContainer.childNodes[0].offsetHeight*this.scrollbarArea.clientHeight/i,o=this.columnHeaderSection.getAttribute("width")-0,s=e+o;
this.scrollbarAreaDiv.style.height=Math.max(i,r)+"px",this.scrollbarAreaDiv.style.width=Math.max(this.dataAreaWidth,s)+"px";
},_clearHeaderHeightStyle:function(){if(this._refreshRowLabelHeaders(),null!=this.rowLabelHeaders)for(var e=0;e<this.rowLabelHeaders.length;e++)this.rowLabelHeaders[e].style.height="";
if(null!=this.columnHeaders)for(var e=0;e<this.columnHeaders.length;e++)this.columnHeaders[e].style.height="";
},_updateHeaderTdClasses:function(){var e=dojo.query("tr",this.columnHeaderContainer);
e.forEach(function(e){c.add(e.childNodes[e.childNodes.length-1],"last")})},_updateRowLabelSectionClasses:function(){
0==dojo.query("table tr",this.rowLabelContainer).length&&c.add(this.rowLabelSection,"empty");
},updateLayout:function(e,t,r){this.pivotTableHeight=this.report.reportHeight-10,
this.pivotTableWidth=this.report.reportWidth-10,this.scrollbarArea.style.height=this.pivotTableHeight+"px",
this.scrollbarArea.style.width=this.pivotTableWidth+"px",this.pivotTable.style.height=this.pivotTableHeight+"px",
this.pivotTable.style.width=this.pivotTableWidth+"px",this.content.style.marginTop="-"+this.pivotTableHeight+"px";
var o=this._computeRowLabelWidths();this._clearHeaderHeightStyle();var s=0;if(s="undefined"!=typeof r?this._adjustRowLabelWidths(o):this._adjustRowLabelWidths(o,e,t),
this._adjustColumnWidths(e,t,r),this._adjustCellsHeight(),this._adjustHeadersHeight(),
this._adjustContainer(s),this._hideEmptyContainers(),h("ie")||h("trident")){for(var a=i(".resize",this.columnHeaderContainer),n=0;n<a.length;++n)l.set(a[n],"top","0px"),
l.set(a[n],"position","static"),l.set(a[n],"position","relative");for(var n=0;n<this.resizeLabels.length;++n)l.set(this.resizeLabels[n],"top","0px"),
l.set(this.resizeLabels[n],"position","static"),l.set(this.resizeLabels[n],"position","relative");
}this._updateHeaderTdClasses(),this._updateRowLabelSectionClasses(),this._scroll(null);
},getDataColumn:function(e){for(var t=0;t<this.columnHeaders.length;t++)if(this.columnHeaders[t]==e){
for(var i=new Array,r=0;r<this.dataColumns.length;r++)i[r]=this.dataColumns[r].childNodes[t];
return i}return null},_scroll:function(e){var t,i=cv.getActiveReport().reportDoc;t="true"==i.getReportOption("freezeColumns")&&"true"==i.getReportOption("freezeRows")?this.XYLockedScrollStrategy:"true"==i.getReportOption("freezeColumns")?this.YLockedScrollStrategy:"true"==i.getReportOption("freezeRows")?this.XLockedScrollStrategy:this.UnlockedScrollStrategy;
try{var r=-this.scrollbarArea.scrollLeft/(this.scrollbarArea.clientWidth-parseInt(this.scrollbarAreaDiv.clientWidth)),o=-this.scrollbarArea.scrollTop/(this.scrollbarArea.clientHeight-parseInt(this.scrollbarAreaDiv.clientHeight));
r||(r=0),o||(o=0);var s=Math.round(t.getMaxXOffset(this)*r),a=Math.round(t.getMaxYOffset(this)*o);
t.scroll(this,s,a),this._checkTruncate(r,o)}catch(e){throw alert(e),e}},_clearSelection:function(e){},
_mouseScroll:function(e){this.mouseWheelHandle&&this.mouseWheelHandle.remove();var i=0;
"number"==typeof e.wheelDelta?i=e.wheelDelta:"number"==typeof e.detail&&(i=40*-e.detail),
this._scrollByAmount(0,i),this.mouseWheelHandle=t(this.pivotTable,h("mozilla")?"DOMMouseScroll":"mousewheel",r.hitch(this,"_mouseScroll"));
},_mouseDown:function(e){var t=cv.util.getAncestorByTag(e.target,"td");if(t){var i=t.getAttribute("type");
if(("measure"===i||"attribute"===i)&&!t.dndObj){var r;r=cvConst.dndTypes.gemFromReportArea,
c.add(t,"dojoDndItem"),t.setAttribute("dndType",r),t.dndObj=new o(t.parentNode,{}),
t.dndObj.onMouseOver(e),t.dndObj.onMouseDown(e),this.dragNodes.push(t)}}},keyPress:function(e){
33==e?this._scrollByAmount(0,250):34==e?this._scrollByAmount(0,-250):38==e?this._scrollByAmount(0,10):40==e?this._scrollByAmount(0,-10):37==e?this._scrollByAmount(10,0):39==e&&this._scrollByAmount(-10,0);
},_setUpDrag:function(){this.dragHandle=t(this.dataContainer,"mousedown",r.hitch(this,"_startDrag"));
},_tearDownDrag:function(){this.dragHandle.remove()},_startDrag:function(e){this.scrollHandle.remove(),
this.previousPageX=e.pageX,this.previousPageY=e.pageY,this.changeIndex=0,this.previousXChanges=new Array,
this.previousYChanges=new Array;for(var i=0;9>i;i++)this.previousXChanges[i]=0,this.previousYChanges[i]=0;
for(var o=e.target;o.offsetParent;)o=o.offsetParent;this.tempDragHandles.push(t(o,"mouseup",r.hitch(this,"_stopDrag"))),
this.tempDragHandles.push(t(document,"mouseup",r.hitch(this,"_stopDrag"))),this.tempDragHandles.push(t(o,"mousemove",r.hitch(this,"_drag"))),
this.tempDragHandles.push(t(document,"mousemove",r.hitch(this,"_drag")))},_stopDrag:function(e){
for(var t=e.target;t.offsetParent;)t=t.offsetParent;n.forEach(this.tempDragHandles,function(e){
e.remove()}),this.connectScrollbar()},_drag:function(e){if(e.button<0||e.button>2)return void this._stopDrag();
var t=!0,i=!0,r=e.pageX-this.previousPageX,o=e.pageY-this.previousPageY;this.previousXChanges[this.changeIndex]=r,
this.previousYChanges[this.changeIndex]=o;for(var s=0,a=0,n=0;9>n;n++)s+=this.previousXChanges[n],
a+=this.previousYChanges[n];2*Math.abs(s)<Math.abs(a),2*Math.abs(a)<Math.abs(s),this.changeIndex=(this.changeIndex+1)%9,
this.previousPageY=e.pageY,this.previousPageX=e.pageX,t||(r=0),i||(o=0),this._scrollByAmount(r,o);
},_scrollByAmount:function(e,t){if(0!=e||0!=t){var i,r=cv.getActiveReport().reportDoc;
i="true"==r.getReportOption("freezeColumns")&&"true"==r.getReportOption("freezeRows")?this.XYLockedScrollStrategy:"true"==r.getReportOption("freezeColumns")?this.YLockedScrollStrategy:"true"==r.getReportOption("freezeRows")?this.XLockedScrollStrategy:this.UnlockedScrollStrategy;
var o=i.getXOffset(this,e),s=i.getYOffset(this,t),a=i.getMaxXOffset(this),n=i.getMaxYOffset(this);
i.scroll(this,o,s),this.updateScrollbars(Math.min(1,o/a),Math.min(1,s/n)),this._checkTruncate(o/a,s/n);
}},updateScrollbars:function(e,t){this.scrollbarArea.scrollLeft=-Math.round((this.scrollbarArea.clientWidth-this.scrollbarAreaDiv.clientWidth)*e),
this.scrollbarArea.scrollTop=-Math.round((this.scrollbarArea.clientHeight-this.scrollbarAreaDiv.clientHeight)*t);
},UnlockedScrollStrategy:{getXOffset:function(e,t){return e.contentTable.style.marginLeft?parseInt(e.contentTable.style.marginLeft)+t:t;
},getMaxXOffset:function(e){return e.content.clientWidth-e.contentTable.scrollWidth;
},getYOffset:function(e,t){return e.contentTable.style.marginTop?parseInt(e.contentTable.style.marginTop)+t:t;
},getMaxYOffset:function(e){return e.content.clientHeight-e.contentTable.scrollHeight;
},scroll:function(e,t,i){var r=Math.min(Math.max(t,this.getMaxXOffset(e)),0),o=Math.min(Math.max(i,this.getMaxYOffset(e)),0);
e.contentTable.style.marginLeft=r+"px",e.contentTable.style.marginTop=o+"px"}},XLockedScrollStrategy:{
getXOffset:function(e,t){return e.columnHeaderTable.style.left?parseInt(e.columnHeaderTable.style.left)+t:t;
},getMaxXOffset:function(e){return e.content.clientWidth-e.contentTable.scrollWidth;
},getYOffset:function(e,t){return e.contentTable.style.marginTop?parseInt(e.contentTable.style.marginTop)+t:t;
},getMaxYOffset:function(e){return e.content.clientHeight-e.contentTable.scrollHeight;
},scroll:function(e,t,i){var r=Math.min(Math.max(t,this.getMaxXOffset(e)),0),o=Math.min(Math.max(i,this.getMaxYOffset(e)),0);
e.colLabelTable.style.left=r+"px",e.columnHeaderTable.style.left=r+"px",e.contentTable.style.marginTop=o+"px";
}},YLockedScrollStrategy:{getXOffset:function(e,t){return e.contentTable.style.marginLeft?parseInt(e.contentTable.style.marginLeft)+t:t;
},getMaxXOffset:function(e){return e.content.clientWidth-e.contentTable.scrollWidth;
},getYOffset:function(e,t){return e.rowLabelTable.style.top?parseInt(e.rowLabelTable.style.top)+t:t;
},getMaxYOffset:function(e){return e.content.clientHeight-e.contentTable.scrollHeight;
},scroll:function(e,t,i){var r=Math.min(Math.max(t,this.getMaxXOffset(e)),0),o=Math.min(Math.max(i,this.getMaxYOffset(e)),0);
e.contentTable.style.marginLeft=r+"px",e.colLabelTable.style.top=o+"px",e.rowLabelTable.style.top=o+"px";
}},XYLockedScrollStrategy:{getXOffset:function(e,t){return e.columnHeaderTable.style.left?parseInt(e.columnHeaderTable.style.left)+t:t;
},getMaxXOffset:function(e){return e.content.clientWidth-e.contentTable.scrollWidth;
},getYOffset:function(e,t){return e.rowLabelTable.style.top?parseInt(e.rowLabelTable.style.top)+t:t;
},getMaxYOffset:function(e){return e.content.clientHeight-e.contentTable.scrollHeight;
},scroll:function(e,t,i){var r=Math.min(Math.max(t,this.getMaxXOffset(e)),0),o=Math.min(Math.max(i,this.getMaxYOffset(e)),0);
e.colLabelTable.style.left=r+"px",e.columnHeaderTable.style.left=r+"px",e.rowLabelTable.style.top=o+"px",
e.colLabelTable.style.top=o+"px"}},_checkTruncate:function(e,t){"BothClose"!=this.report.closeTruncateStatus&&(cv.api.ui.isFromTransformation?"ROW"==this.truncateType||"COL"==this.truncateType||"BOTH"==this.truncateType?cv.util.show(this.report.nodeTransTruncate):cv.util.hide(this.report.nodeTransTruncate):("COL"!=this.truncateType&&"BOTH"!=this.truncateType||"ColClose"==this.report.closeTruncateStatus||(e>=1||this.scrollbarArea.clientWidth>=this.scrollbarAreaDiv.clientWidth?(cv.util.show(this.report.nodeColTruncate),
this.report.nodeColTruncate.style.left=this.tableArea.clientWidth-d.getContentBox(this.report.nodeColTruncate).w-35+"px",
this.report.nodeColTruncate.style.top=this.tableArea.offsetTop+10+"px"):cv.util.hide(this.report.nodeColTruncate)),
("ROW"==this.truncateType||"BOTH"==this.truncateType&&"RowClose"!=this.report.closeTruncateStatus)&&(t>=1||this.scrollbarArea.clientHeight>=this.scrollbarAreaDiv.clientHeight?(cv.util.show(this.report.nodeRowTruncate),
this.report.nodeRowTruncate.style.top=this.tableArea.offsetTop+this.tableArea.clientHeight-d.position(this.report.nodeRowTruncate).h-28+"px"):cv.util.hide(this.report.nodeRowTruncate))));
}}}),define("analyzer/report/cv_pentaho",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dojo/dom","common-ui/util/URLEncoder","analyzer/common"],function(e,t,i,r,o,s){
return window.pentahoLoad=function(){enableSaveButtons()},window.editContentToggled=function(e){},
window.enableEditButton=function(){},window.disableEditButton=function(){},window.lowerEditButton=function(){},
window.resetEditButton=function(){},window.enableSaveButtons=function(){console_enabled&&window.parent.enableSave&&window.parent.enableSaveForFrame(window.frameElement.id,!0);
},window.disableSaveButtons=function(){console_enabled&&window.parent.enableSave&&window.parent.enableSaveForFrame(window.frameElement.id,!1);
},window.refreshBrowsePanel=function(){console_enabled&&window.parent.mantle_refreshRepository&&window.parent.mantle_refreshRepository();
},window.getPossibleFileExtensions=function(){return[".xanalyzer"]},window.hasUnsavedChanges=function(){
return cv.getActiveReport().isDirty()},window.linkReport=function(e){var t=JSON.parse(cv.util.sanitizeJSONString(e));
cv.getActiveReport().linkDlg.performAction(t)},window.handle_puc_save=function(e,t,i,r,o){
("undefined"==typeof o||null==o)&&(o=!1);var a=t.search(/\.xanalyzer$/);-1!=a&&(t=t.substring(0,a)),
a=e.search(/\/[^\/]*\.xanalyzer$/),-1!=a&&(e=e.substring(0,a)),e=e+"/"+t+".xanalyzer";
var n=cv.util.saveReport(cv.getActiveReport(),"saveAs",t,e,r,o);return 1==n&&refreshBrowsePanel(),
s.encode("{0}",e)},window.drill=function(e,t,i){var r=!1;try{window.parent.PentahoMobile&&(r=!0);
}catch(s){}var a=new Date,n="drillpopup"+a.getTime(),l=o.byId("drillForm");l.setAttribute("action",cv.contextPath+"service/drill"+(i?"CSV":""));
var d=cv.getActiveReport();if(o.byId("drillForm_annotations")){var c=o.byId("drillForm_annotations");
c.parentNode.removeChild(c)}if(d.modelAnnotations&&d.modelAnnotations.length){var h=document.createElement("input");
h.type="text",h.name="annotations",h.id="drillForm_annotations",h.value=d.getModelAnnotationsJson(),
l.appendChild(h)}if(r){var u=window.parent.PentahoMobile.openUrl("about:blank","Drill Results");
l.target=u}else window.open("",n,"scrollbars=no,menubar=no,height=550,width=800,resizable=yes,toolbar=no,status=no"),
l.setAttribute("target",n);var p=cv.getActiveReport().reportDoc.getDrillColumns();
if(0==p.length){var m,g=[],v=new cv.FieldHelp(o.byId("fieldHelpXML").value,d.manager,!0);
d.modelAnnotations&&d.modelAnnotations.length&&cv.util.updateCatalog(!0,d,v,d.getModelAnnotationsJson());
var f=v._getFieldListItems();if(f.length>0){for(var b=0,m=f.length;m>b;++b)cv.FieldHelp().isHidden(f[b])?g[f[b].getAttribute("formula")]=!1:g[f[b].getAttribute("formula")]=!0;
cv.getActiveReport().reportDoc.replaceDrillColumns(g)}}var y=o.byId("drillForm_reportXML");
y.setAttribute("value",cv.getActiveReport().getReportXml()),y=o.byId("drillForm_colIndex"),
y.setAttribute("value",e),y=o.byId("drillForm_rowIndex"),y.setAttribute("value",t),
l.submit()},e([])}),define("analyzer/report/report",["analyzer/common","analyzer/report/cv_rptConst","analyzer/report/cv_rptIO","analyzer/report/cv_rptReport","analyzer/report/cv_rptReport.viz","analyzer/report/cv_rptReport2","analyzer/report/cv_rptReport3","analyzer/report/cv_rptGem","analyzer/report/cv_rptDlg","analyzer/report/cv_rptLinkDlg","analyzer/report/cv_rptDrillDlg","analyzer/report/cv_rptChartOptionsDlg","analyzer/report/cv_rptPageSetupDlg","analyzer/report/cv_rptFilterDlg","analyzer/report/cv_rptArithNumberDlg","analyzer/report/cv_rptCreateMeasureDlg","analyzer/report/cv_rptRemoveMeasureDlg","analyzer/report/cv_rptMeasurePropertiesDlg","analyzer/report/cv_rptAttributePropertiesDlg","analyzer/report/cv_rptFilterMetricDlg","analyzer/report/cv_rptDatePickerDlg","analyzer/report/cv_rptDoc","analyzer/report/cv_rptDnd","analyzer/report/cv_rptFieldHelp","analyzer/report/cv_rptResize","analyzer/report/cv_rptHeaders","analyzer/report/cv_pentaho"],function(){}),
define("analyzer/main",["analyzer/oss-module","analyzer/common","analyzer/report/report"]),
define("analyzer/report/viewer.js.uncompressed",["dojo/_base/declare","dojo/on","dojo/query","dojo/_base/lang","dijit/Menu","dojox/fx","dojo/_base/event","analyzer/report/report","dojo/html","dojo/dom-class","dijit/registry","dijit/popup","dojo/ready","dojo/parser","dojo/dom","dojo/window","dijit/MenuSeparator","dijit/MenuItem","dojo/aspect"],function(e,t,i,r,o,s,a,n,l,d,c,h,u,p,m,g,v,f,b){
var y=e("cv.ReportViewer",[],{constructor:function(e,t){this.report=null,this.fieldHelp=null,
this.mode=e,this.domNode=m.byId(t),this.reportContainer=d.contains(this.domNode,"reportContainer")?this.domNode:cv.util.getFirstChildByClass(this.domNode,"reportContainer");
},MIN_REPORT_HEIGHT:100,init:function(){cv.contentMinWidth=100;var e,i,o=cv.util.getURLQueryValue("path"),s=m.byId("reportXML").value;
if(s)try{i=new cv.ReportDocument,i.initialize(s),e=i.getReportOption("cube")}catch(a){
s=null}return s?(this.report=new cv.Report({id:"RPT"+(new Date).getTime(),mode:this.mode,
reportDoc:i,containerNode:this.reportContainer,manager:this,uiController:null,api:cv.api
}),cv.prefs.fieldListView=this.report.reportDoc.getUIAttributes().getAttribute("fieldListView"),
this.fieldHelp=new cv.FieldHelp(m.byId("fieldHelpXML").value,this,!1),this.report.init().then(r.hitch(this,function(){
if(window.location.href.indexOf("frameless")>-1){var e=(document.getElementById(this.report.id+"ReportMain"),
document.getElementById(this.report.id+"ReportTitle")),i=document.getElementById(this.report.id+"ReportFormatCmdDiv"),o=document.getElementById(this.report.id+"ReportSummary"),s=document.getElementById(this.report.id+"ReportMain");
o.insertBefore(i,o.firstChild),e.style.display="none",s.style.border="none"}cv.popupMenus={
actionsMenu:[{id:"cmdPDF",handler:"getReportPDF"},{id:"cmdExcel",handler:"getReportExcel"
},{id:"cmdGrandTotalRow",handler:"toggleGrandTotalRow"},{id:"cmdGrandTotalCol",handler:"toggleGrandTotalCol"
}],attributePopMenu:[{id:"PM:attrSortAZ",handler:"onGemSortAsc"},{id:"PM:attrSortZA",
handler:"onGemSortDesc"},{id:"PM:attrShowSub",handler:"onGemToggleSubtotal"},{id:"PM:removeAttr",
handler:"removeCurrentGem"}],propPopMenu:[{id:"PM:removeProp",src:this.report,handler:"removeCurrentProp"
}],condFormatMenu:[{id:"PM:condFormat_COLOR_SCALE_G_Y_R",src:this.report,handler:"onGemConditionalFormatting"
},{id:"PM:condFormat_COLOR_SCALE_R_Y_G",src:this.report,handler:"onGemConditionalFormatting"
},{id:"PM:condFormat_COLOR_SCALE_B_Y_R",src:this.report,handler:"onGemConditionalFormatting"
},{id:"PM:condFormat_COLOR_SCALE_R_Y_B",src:this.report,handler:"onGemConditionalFormatting"
},{id:"PM:condFormat_DATA_BAR_RED",src:this.report,handler:"onGemConditionalFormatting"
},{id:"PM:condFormat_DATA_BAR_GREEN",src:this.report,handler:"onGemConditionalFormatting"
},{id:"PM:condFormat_DATA_BAR_BLUE",src:this.report,handler:"onGemConditionalFormatting"
},{id:"PM:condFormat_TREND_ARROW_GR",src:this.report,handler:"onGemConditionalFormatting"
},{id:"PM:condFormat_TREND_ARROW_RG",src:this.report,handler:"onGemConditionalFormatting"
}],measurePopMenu:[{id:"PM:measSortHiLow",handler:"onGemSortDesc"},{id:"PM:measSortLowHi",
handler:"onGemSortAsc"},{id:"PM:inChartHideMetric",handler:"onGemToggleInChart"},{
id:"PM:removeMetric",handler:"removeCurrentGem"}],filterPopMenu:[{id:"PM:removeFilter",
handler:"removeCurrentGem"}],grandTotalPopMenu:[{id:"PM:totalNonVisual",handler:"onRptNonVisualTotal"
},{id:"PM:totalHide",handler:"onRptHideGrandTotal"}]};var a=this,n=this.report;if(cv.util.initDojoWidget=function(e){
var i=e.id;switch(e.declaredClass){case"dijit.Menu":if("actionsMenu"==i)cv.isMobile()&&(c.byId("cmdExcel").setDisabled(!0),
c.byId("cmdPDF").setDisabled(!0)),cv.util.connectPopupMenu(n,cv.popupMenus[i]);else if("reportFormatMenu"==i){
var o=new f({id:"PIVOT",label:cvCatalog.VIZ_PIVOT});e.addChild(o),e.addChild(new v({
id:"menu-item1"}));var s=cv.util.addChartMenuItems(e);s.push(o);for(var a=0;s&&a<s.length;++a)s[a].onSelectChartType=function(){
h.close(),"PIVOT"==this.id?n._initDisplay("PIVOT"):(n.history.updateReportUsingPreviousChartTypeState(n,this.id),
n._initDisplay("JSON","CUSTOM",this.id)),n.history.add(new cv.ReportState("actionChartType")),
n.refreshReport()},t(s[a],"click",r.hitch(s[a],"onSelectChartType"))}else cv.util.connectPopupMenu(n,cv.popupMenus[i]);
break;case"FloatingPane":"progressPane"==i&&t(m.byId("progressPaneCancel"),"click",r.hitch(n,"cancelReport"));
}},this.fieldHelp.init(),cv.getFieldHelp=function(e){return a.fieldHelp},cv.getActiveReport=function(){
return n},t(window,"resize",r.hitch(this,"onWindowResize")),t(document,"key",r.hitch(this,"onKey")),
window.onunload=function(){n.destroyReport(),n.destroy()},this.reportBorderContainer=c.byId("reportContent"),
b.after(this.reportBorderContainer,"layout",r.hitch(this,"onResize")),cv.isMobile()){
var l=this;window.addEventListener("orientationchange",function(){l.onWindowResize(),
h.close()})}this.onWindowResize(),this.onResize(),this.reportHeight=-1,this.reportWidth=-1,
this.resize(),this.report.postCreate()}))):cv.util.alertErrorOnPageOpen(cv.util.substituteParams(cvCatalog.errorBadReport,o),"../");
},destroy:function(){},showStatus:function(e,t){var i=cvCatalog[e];i||(i=e),alert(i);
},resize:function(){var e=g.getBox();return this.report.resize(e.w,e.h)},_toggleReportPane:function(e,i,r,o){
if(i)cv.util.show(e),r&&s.fadeIn({duration:cv.prefs.fadeTime,node:e}).play(),o&&this.onResize();else if(r){
var a=this,n=s.fadeOut({duration:cv.prefs.fadeTime,node:e});t(n,"End",function(e){
cv.util.hide(e),o&&a.onResize()}),n.play()}else cv.util.hide(e),o&&this.onResize();
},onKey:function(e){var t=this.report;if(cv.dlgWidget&&cv.dlgWidget.open){switch(e.key){
case 13:if(e.target&&"TEXTAREA"==e.target.tagName)return;t.filterDlg.isShowing?t.filterDlg.save():t.rptDlg.isShowing&&t.rptDlg.save();
break;case 27:cv.dlgWidget.hide();break;default:return}a.stop(e)}else if(!e.target||"INPUT"!=e.target.tagName){
if(e.ctrlKey||e.altKey){if(e.ctrlKey&&!e.altKey)switch(e.key){case"z":t.history.undo();
break;case"y":t.history.redo();break;case"q":t.onResetReport();break;default:return;
}else if(e.ctrlKey&&e.altKey)switch(e.key){case"c":t.toggleReportFormat();break;case"t":
t.onToggleReportPane("cmdFilters");break;case"y":t.onToggleReportPane("cmdLayout");
break;default:return}else if(!e.ctrlKey&&e.altKey)return}else switch(e.key){case 33:
case 34:case 38:case 40:case 37:case 39:if(null!=t.reportHeaders){t.reportHeaders.keyPress(e.key);
break}default:return}a.stop(e)}},onWindowResize:function(){var e=!1;try{e=window.top.PentahoMobile;
}catch(t){}if(e)try{for(var i=window.parent.document.getElementsByTagName("IFRAME"),r=0;r<i.length;r++)if(i[r].contentWindow==window){
var o=i[r];"100%"==o.getAttribute("width")&&(o=o.parentNode);var s=parseInt(o.getAttribute("width"));
s=s||o.clientWidth;var a=parseInt(o.getAttribute("height"));a=a||o.clientHeight,this.reportBorderContainer.domNode.setAttribute("style","width:"+s+"px !important; height : "+a+"px !important"),
this.reportContainer.setAttribute("style","width:"+s+"px !important; height : "+a+"px !important"),
this.reportBorderContainer.layout(),this.onResize()}}catch(t){}},onResize:function(){
!this.resize()},onToggleReportPane:function(e){var t;if(r.isObject(e)){for(t=e.target;!t.id;)t=t.parentNode;
t=t.id}else t=e;var i=this.report.byId("FilterPaneToggle");switch(t){case"cmdFilters":
case"FilterPaneToggle":case"FilterPaneTitle":case"FilterCountLabel":case"ReportSummary":
case"HideFilterPane":"filterPane"==this.report.topPaneId||"HideFilterPane"==t?(this.report.topPaneId="",
i&&d.remove(i,"hide"),this._toggleReportPane(this.report.nodeFilter,!1,!0,!0)):("layoutPane"==this.report.topPaneId&&this._toggleReportPane(this.report.nodeLayout,!1,!1,!1),
this.report.topPaneId="filterPane",i&&d.add(i,"hide"),this._toggleReportPane(this.report.nodeFilter,!0,!0,!0));
break;case"cmdLayout":"layoutPane"==this.report.topPaneId?(this.report.topPaneId="",
this._toggleReportPane(this.report.nodeLayout,!1,!0,!0)):("filterPane"==this.report.topPaneId&&(this._toggleReportPane(this.report.nodeFilter,!1,!1,!1),
i&&d.remove(i,"hide")),this.report.topPaneId="layoutPane",this._toggleReportPane(this.report.nodeLayout,!0,!0,!0));
break;case"HideLayoutPane":this.report.topPaneId="",this._toggleReportPane(this.report.nodeLayout,!1,!0,!0);
break;default:return}return!1},updateCatalog:function(e){return cv.util.updateCatalog(e,this.report,this.fieldHelp);
},onToggleAutoRefresh:function(){cv.util.onToggleAutoRefresh(null,this.report,!0);
}});return u(function(){p.parse()}),y}),define("analyzer/analyzer-viewer",["dojo/ready","pentaho/i18n!./resources/messages","pentaho/common/Messages","analyzer/main","analyzer/report/viewer.js.uncompressed","analyzer/viz-plugins"],function(e,t,i){
i.addBundle("analyzer",t.source),e(function(){var e=new cv.ReportViewer("VIEW","reportContent");
e.init()})}),define("analyzer-viewer",function(){});