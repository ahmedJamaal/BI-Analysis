define(["dojo/_base/array","dojo/_base/declare","dojo/cldr/supplemental","dojo/date","dojo/date/locale","dojo/date/stamp","dojo/dom","dojo/dom-class","dojo/_base/lang","dojo/on","dojo/sniff","dojo/string","./_WidgetBase","./_TemplatedMixin","dojo/text!./templates/Calendar.html","./a11yclick","./hccss"],function(t,e,a,i,s,d,n,o,l,r,h,u,c,g,f){
var m=e("dijit.CalendarLite",[c,g],{templateString:f,dowTemplateString:'<th class="dijitReset dijitCalendarDayLabelTemplate" role="columnheader" scope="col"><span class="dijitCalendarDayLabel">${d}</span></th>',
dateTemplateString:'<td class="dijitReset" role="gridcell" data-dojo-attach-point="dateCells"><span class="dijitCalendarDateLabel" data-dojo-attach-point="dateLabels"></span></td>',
weekTemplateString:'<tr class="dijitReset dijitCalendarWeekTemplate" role="row">${d}${d}${d}${d}${d}${d}${d}</tr>',
value:new Date(""),datePackage:"",dayWidth:"narrow",tabIndex:"0",currentFocus:new Date,
_setSummaryAttr:"gridNode",baseClass:"dijitCalendar",_isValidDate:function(t){return t&&!isNaN(t)&&"object"==typeof t&&t.toString()!=this.constructor.prototype.value.toString();
},_getValueAttr:function(){var t=this._get("value");if(t&&!isNaN(t)){var e=new this.dateClassObj(t);
return e.setHours(0,0,0,0),e.getDate()<t.getDate()&&(e=this.dateModule.add(e,"hour",1)),
e}return null},_setValueAttr:function(t,e){"string"==typeof t&&(t=d.fromISOString(t)),
t=this._patchDate(t),this._isValidDate(t)&&!this.isDisabledDate(t,this.lang)?(this._set("value",t),
this.set("currentFocus",t),this._markSelectedDates([t]),this._created&&(e||"undefined"==typeof e)&&this.onChange(this.get("value"))):(this._set("value",null),
this._markSelectedDates([]))},_patchDate:function(t){return t&&(t=new this.dateClassObj(t),
t.setHours(1,0,0,0)),t},_setText:function(t,e){for(;t.firstChild;)t.removeChild(t.firstChild);
t.appendChild(t.ownerDocument.createTextNode(e))},_populateGrid:function(){var e=new this.dateClassObj(this.currentFocus);
e.setDate(1);var i=e.getDay(),s=this.dateModule.getDaysInMonth(e),d=this.dateModule.getDaysInMonth(this.dateModule.add(e,"month",-1)),n=new this.dateClassObj,o=a.getFirstDayOfWeek(this.lang);
if(o>i&&(o-=7),!this.summary){var l=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,e);
this.gridNode.setAttribute("summary",l[e.getMonth()])}this._date2cell={},t.forEach(this.dateCells,function(t,a){
var l,r=a+o,h=new this.dateClassObj(e),u="dijitCalendar",c=0;i>r?(l=d-i+r+1,c=-1,
u+="Previous"):r>=i+s?(l=r-i-s+1,c=1,u+="Next"):(l=r-i+1,u+="Current"),c&&(h=this.dateModule.add(h,"month",c)),
h.setDate(l),this.dateModule.compare(h,n,"date")||(u="dijitCalendarCurrentDate "+u),
this.isDisabledDate(h,this.lang)?(u="dijitCalendarDisabledDate "+u,t.setAttribute("aria-disabled","true")):(u="dijitCalendarEnabledDate "+u,
t.removeAttribute("aria-disabled"),t.setAttribute("aria-selected","false"));var g=this.getClassForDate(h,this.lang);
g&&(u=g+" "+u),t.className=u+"Month dijitCalendarDateTemplate";var f=h.valueOf();this._date2cell[f]=t,
t.dijitDateValue=f,this._setText(this.dateLabels[a],h.getDateLocalized?h.getDateLocalized(this.lang):h.getDate());
},this)},_populateControls:function(){var e=new this.dateClassObj(this.currentFocus);
e.setDate(1),this.monthWidget.set("month",e);var a=e.getFullYear()-1,i=new this.dateClassObj;
t.forEach(["previous","current","next"],function(t){i.setFullYear(a++),this._setText(this[t+"YearLabelNode"],this.dateLocaleModule.format(i,{
selector:"year",locale:this.lang}))},this)},goToToday:function(){this.set("value",new this.dateClassObj);
},constructor:function(t){this.dateModule=t.datePackage?l.getObject(t.datePackage,!1):i,
this.dateClassObj=this.dateModule.Date||Date,this.dateLocaleModule=t.datePackage?l.getObject(t.datePackage+".locale",!1):s;
},_createMonthWidget:function(){return m._MonthWidget({id:this.id+"_mddb",lang:this.lang,
dateLocaleModule:this.dateLocaleModule},this.monthNode)},buildRendering:function(){
var t=this.dowTemplateString,e=this.dateLocaleModule.getNames("days",this.dayWidth,"standAlone",this.lang),i=a.getFirstDayOfWeek(this.lang);
this.dayCellsHtml=u.substitute([t,t,t,t,t,t,t].join(""),{d:""},function(){return e[i++%7];
});var s=u.substitute(this.weekTemplateString,{d:this.dateTemplateString});this.dateRowsHtml=[s,s,s,s,s,s].join(""),
this.dateCells=[],this.dateLabels=[],this.inherited(arguments),n.setSelectable(this.domNode,!1);
var d=new this.dateClassObj(this.currentFocus);this.monthWidget=this._createMonthWidget(),
this.set("currentFocus",d,!1)},postCreate:function(){this.inherited(arguments),this._connectControls();
},_connectControls:function(){var t=l.hitch(this,function(t,e,a){return r(this[t],"click",l.hitch(this,function(){
this._setCurrentFocusAttr(this.dateModule.add(this.currentFocus,e,a))}))});this.own(t("incrementMonth","month",1),t("decrementMonth","month",-1),t("nextYearLabelNode","year",1),t("previousYearLabelNode","year",-1));
},_setCurrentFocusAttr:function(t,e){var a=this.currentFocus,i=this._getNodeByDate(a);
t=this._patchDate(t),this._set("currentFocus",t),this._date2cell&&0==this.dateModule.difference(a,t,"month")||(this._populateGrid(),
this._populateControls(),this._markSelectedDates([this.value]));var s=this._getNodeByDate(t);
s.setAttribute("tabIndex",this.tabIndex),(this.focused||e)&&s.focus(),i&&i!=s&&(h("webkit")?i.setAttribute("tabIndex","-1"):i.removeAttribute("tabIndex"));
},focus:function(){this._setCurrentFocusAttr(this.currentFocus,!0)},_onDayClick:function(t){
t.stopPropagation(),t.preventDefault();for(var e=t.target;e&&!e.dijitDateValue;e=e.parentNode);
e&&!o.contains(e,"dijitCalendarDisabledDate")&&this.set("value",e.dijitDateValue);
},_getNodeByDate:function(t){return t=this._patchDate(t),t&&this._date2cell?this._date2cell[t.valueOf()]:null;
},_markSelectedDates:function(e){function a(t,e){o.toggle(e,"dijitCalendarSelectedDate",t),
e.setAttribute("aria-selected",t?"true":"false")}t.forEach(this._selectedCells||[],l.partial(a,!1)),
this._selectedCells=t.filter(t.map(e,this._getNodeByDate,this),function(t){return t;
}),t.forEach(this._selectedCells,l.partial(a,!0))},onChange:function(){},isDisabledDate:function(){},
getClassForDate:function(){}});return m._MonthWidget=e("dijit.CalendarLite._MonthWidget",c,{
_setMonthAttr:function(e){var a=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,e),i=6==h("ie")?"":"<div class='dijitSpacer'>"+t.map(a,function(t){
return"<div>"+t+"</div>"}).join("")+"</div>";this.domNode.innerHTML=i+"<div class='dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'>"+a[e.getMonth()]+"</div>";
}}),m});