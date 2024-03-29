define(["dojo/_base/array","dojo/date","dojo/date/locale","dojo/_base/declare","dojo/dom-attr","dojo/dom-class","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","./CalendarLite","./_Widget","./_CssStateMixin","./_TemplatedMixin","./form/DropDownButton"],function(e,t,o,n,a,i,d,r,s,h,u,l,c,D,M,_){
var j=n("dijit.Calendar",[l,c,D],{cssStateNodes:{decrementMonth:"dijitCalendarArrow",
incrementMonth:"dijitCalendarArrow",previousYearLabelNode:"dijitCalendarPreviousYear",
nextYearLabelNode:"dijitCalendarNextYear"},setValue:function(e){d.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.","","2.0"),
this.set("value",e)},_createMonthWidget:function(){return new j._MonthDropDownButton({
id:this.id+"_mddb",tabIndex:-1,onMonthSelect:s.hitch(this,"_onMonthSelect"),lang:this.lang,
dateLocaleModule:this.dateLocaleModule},this.monthNode)},postCreate:function(){this.inherited(arguments),
this.own(h(this.domNode,"keydown",s.hitch(this,"_onKeyDown")),h(this.dateRowsNode,"mouseover",s.hitch(this,"_onDayMouseOver")),h(this.dateRowsNode,"mouseout",s.hitch(this,"_onDayMouseOut")),h(this.dateRowsNode,"mousedown",s.hitch(this,"_onDayMouseDown")),h(this.dateRowsNode,"mouseup",s.hitch(this,"_onDayMouseUp")));
},_onMonthSelect:function(e){var t=new this.dateClassObj(this.currentFocus);t.setDate(1),
t.setMonth(e);var o=this.dateModule.getDaysInMonth(t),n=this.currentFocus.getDate();
t.setDate(Math.min(n,o)),this._setCurrentFocusAttr(t)},_onDayMouseOver:function(e){
var t=i.contains(e.target,"dijitCalendarDateLabel")?e.target.parentNode:e.target;t&&(t.dijitDateValue&&!i.contains(t,"dijitCalendarDisabledDate")||t==this.previousYearLabelNode||t==this.nextYearLabelNode)&&(i.add(t,"dijitCalendarHoveredDate"),
this._currentNode=t)},_onDayMouseOut:function(e){if(this._currentNode&&(!e.relatedTarget||e.relatedTarget.parentNode!=this._currentNode)){
var t="dijitCalendarHoveredDate";i.contains(this._currentNode,"dijitCalendarActiveDate")&&(t+=" dijitCalendarActiveDate"),
i.remove(this._currentNode,t),this._currentNode=null}},_onDayMouseDown:function(e){
var t=e.target.parentNode;t&&t.dijitDateValue&&!i.contains(t,"dijitCalendarDisabledDate")&&(i.add(t,"dijitCalendarActiveDate"),
this._currentNode=t)},_onDayMouseUp:function(e){var t=e.target.parentNode;t&&t.dijitDateValue&&i.remove(t,"dijitCalendarActiveDate");
},handleKey:function(e){var t,o=-1,n=this.currentFocus;switch(e.keyCode){case r.RIGHT_ARROW:
o=1;case r.LEFT_ARROW:t="day",this.isLeftToRight()||(o*=-1);break;case r.DOWN_ARROW:
o=1;case r.UP_ARROW:t="week";break;case r.PAGE_DOWN:o=1;case r.PAGE_UP:t=e.ctrlKey||e.altKey?"year":"month";
break;case r.END:n=this.dateModule.add(n,"month",1),t="day";case r.HOME:n=new this.dateClassObj(n),
n.setDate(1);break;default:return!0}return t&&(n=this.dateModule.add(n,t,o)),this._setCurrentFocusAttr(n),
!1},_onKeyDown:function(e){this.handleKey(e)||(e.stopPropagation(),e.preventDefault());
},onValueSelected:function(){},onChange:function(e){this.onValueSelected(e)},getClassForDate:function(){}
});return j._MonthDropDownButton=n("dijit.Calendar._MonthDropDownButton",_,{onMonthSelect:function(){},
postCreate:function(){this.inherited(arguments),this.dropDown=new j._MonthDropDown({
id:this.id+"_mdd",onChange:this.onMonthSelect})},_setMonthAttr:function(e){var t=this.dateLocaleModule.getNames("months","wide","standAlone",this.lang,e);
this.dropDown.set("months",t),this.containerNode.innerHTML=(6==u("ie")?"":"<div class='dijitSpacer'>"+this.dropDown.domNode.innerHTML+"</div>")+"<div class='dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'>"+t[e.getMonth()]+"</div>";
}}),j._MonthDropDown=n("dijit.Calendar._MonthDropDown",[c,M],{months:[],templateString:"<div class='dijitCalendarMonthMenu dijitMenu' data-dojo-attach-event='onclick:_onClick,onmouseover:_onMenuHover,onmouseout:_onMenuHover'></div>",
_setMonthsAttr:function(t){this.domNode.innerHTML=e.map(t,function(e,t){return e?"<div class='dijitCalendarMonthLabel' month='"+t+"'>"+e+"</div>":"";
}).join("")},_onClick:function(e){this.onChange(a.get(e.target,"month"))},onChange:function(){},
_onMenuHover:function(e){i.toggle(e.target,"dijitCalendarMonthLabelHover","mouseover"==e.type);
}}),j});