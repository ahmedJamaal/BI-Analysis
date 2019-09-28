define("analyzer/cv_api_report_util",["dojo/_base/lang"],function(e){var t=function(t){
var r={_BasicOptionType:function(e){this.type=e,this.validateValue=function(e,r){
r&&typeof r===this.type.toLowerCase()||t.log.error(i._errors.INVALID_OPTION_VALUE_TYPE(e,r,this.type),!0);
}},_StringOptionType:function(){this.base=r._BasicOptionType,this.base("String")},
_BooleanOptionType:function(){this.type="Boolean",this.validateValue=function(e,r){
"boolean"!=typeof r&&"true"!==r&&"false"!==r&&t.log.error(i._errors.INVALID_OPTION_VALUE_TYPE(e,r,this.type),!0);
}},_DoubleOptionType:function(){this.type="Double",this.validateValue=function(e,r){
/^\-?(\d+|\d+\.\d*|\.\d+)$/.test(r)||t.log.error(i._errors.INVALID_OPTION_VALUE_TYPE(e,r,this.type),!0);
}},_IntegerOptionType:function(){this.type="Integer",this.validateValue=function(e,r){
/^\d+$/.test(r)||t.log.error(i._errors.INVALID_OPTION_VALUE_TYPE(e,r,this.type),!0);
}},_HexOptionType:function(){this.type="Hex",this.validateValue=function(e,r){/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)||t.log.error(i._errors.INVALID_OPTION_VALUE_TYPE(e,r,this.type),!0);
}},_ArrayOptionType:function(){this.type="Array",this.validateValue=function(e,r){
Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e);
}),Array.isArray(r)||t.log.error(i._errors.INVALID_OPTION_VALUE_TYPE(e,r,this.type),!0);
}},_FunctionOptionType:function(){this.type="Function",this.validateValue=function(r,n){
e.isFunction(n)||t.log.error(i._errors.INVALID_OPTION_VALUE_TYPE(r,n,this.type),!0);
}},_BasicOption:function(e){this.name=e.name,this.type=e.type,this.expectedValues=e.expectedValues,
this.postValidateAction=e.postValidateAction,this.validateValue="undefined"!=typeof e.validateValue?e.validateValue:function(e){
this.expectedValues&&-1==this.expectedValues.indexOf(e)?t.log.error(i._errors.INVALID_OPTION_VALUE(this.name,e,this.expectedValues),!0):!this.expectedValues&&this.type&&this.type.validateValue(this.name,e);
var r=this.postValidateAction?this.postValidateAction(e):e;return r}},_FieldOption:function(e){
this.base=r._BasicOption,this.base(e),this.appliedTo=e.appliedTo,this.getFieldOptionHandler="undefined"!=typeof e.getFieldOptionHandler?e.getFieldOptionHandler:function(e,r,n){
var o=null,a=e.getNode(r);return a?o=a.getAttribute(this.name):t.log.warn(i._errors.NODE_NOT_FOUND(n)),
o},this.setFieldOptionHandler="undefined"!=typeof e.setFieldOptionHandler?e.setFieldOptionHandler:function(e,r,n,o){
var a=e.getNode(r);a?a.setAttribute(this.name,o):t.log.warn(i._errors.NODE_NOT_FOUND(n));
}},_FormatFieldOption:function(e){e.appliedTo="measure",e.setFieldOptionHandler=function(e,r,n,o){
var a=e.getNode(r);if(a){var s={};s[this.name]=o,e.setNumberFormat(a,s)}else t.log.warn(i._errors.NODE_NOT_FOUND(n));
},this.base=r._FieldOption,this.base(e)},_MeasureBooleanFieldOption:function(e){e.type=new r._BooleanOptionType,
e.appliedTo="measure",this.base=r._FieldOption,this.base(e)},_ReportOption:function(e){
e.type||(e.type=new r._BooleanOptionType),this.base=r._BasicOption,this.base(e),this.getReportOptionHandler="undefined"!=typeof e.getReportOptionHandler?e.getReportOptionHandler:function(e){
return e.reportDoc.getReportOption(this.name)},this.setReportOptionHandler="undefined"!=typeof e.setReportOptionHandler?e.setReportOptionHandler:function(e,t){
e.reportDoc.setReportOption(this.name,t)}},_ChartOption:function(e){this.base=r._BasicOption,
this.base(e),this.getChartOptionHandler="undefined"!=typeof e.getChartOptionHandler?e.getChartOptionHandler:function(e){
return e.reportDoc.getChartOption(this.name)},this.setChartOptionHandler="undefined"!=typeof e.setChartOptionHandler?e.setChartOptionHandler:function(e,t){
e.reportDoc.setChartOption(this.name,t)}}},i={_errors:{INVALID_OPTION_NAME:function(e,t){
return"Unexpected option '"+e+"'. One of the following are acceptable values: "+t;
},INVALID_OPTION_VALUE:function(e,t,r){return"Unexpected value '"+t+"' for option '"+e+"'. One of the following are acceptable values: "+r;
},INVALID_OPTION_VALUE_TYPE:function(e,t,r){return"Unexpected value '"+t+"' for option '"+e+"'. Must be type "+r;
},NODE_NOT_FOUND:function(e){return"Node was not found for formula '"+e+"'."},WRONG_NESTED_OBJECT:"Nested object must have 'name' property."
},_fieldOptions:{label:new r._FieldOption({name:"label",type:new r._StringOptionType,
setFieldOptionHandler:function(e,r,n,o){var a=e.getNode(r);a?e.updateDisplayLabel(a,o):t.log.warn(i._errors.NODE_NOT_FOUND(n));
}}),sortOrderEnum:new r._FieldOption({name:"sortOrderEnum",expectedValues:["NONE","ASC","DESC"]
}),showAggregate:new r._MeasureBooleanFieldOption({name:"showAggregate"}),showSum:new r._MeasureBooleanFieldOption({
name:"showSum"}),showAverage:new r._MeasureBooleanFieldOption({name:"showAverage"
}),showMin:new r._MeasureBooleanFieldOption({name:"showMin"}),showMax:new r._MeasureBooleanFieldOption({
name:"showMax"}),formatShortcut:new r._FormatFieldOption({name:"formatShortcut",expectedValues:["NONE","COLOR_SCALE_G_Y_R","COLOR_SCALE_R_Y_G","COLOR_SCALE_B_Y_R","COLOR_SCALE_R_Y_B","TREND_ARROW_GR","TREND_ARROW_RG","DATA_BAR_RED","DATA_BAR_GREEN","DATA_BAR_BLUE"]
}),formatCategory:new r._FormatFieldOption({name:"formatCategory",expectedValues:["Default","General Number","Currency ($)","Percentage (%)","Expression"]
}),formatScale:new r._FormatFieldOption({name:"formatScale",expectedValues:["0","1","2","3","4","5","6","7","8","9","10"]
}),formatExpression:new r._FormatFieldOption({name:"formatExpression",type:new r._StringOptionType
}),currencySymbol:new r._FormatFieldOption({name:"currencySymbol",type:new r._StringOptionType
}),showSubtotal:new r._FieldOption({name:"showSubtotal",appliedTo:"attribute",type:new r._BooleanOptionType
})},_reportOptions:{showRowGrandTotal:new r._ReportOption({name:"showRowGrandTotal"
}),showColumnGrandTotal:new r._ReportOption({name:"showColumnGrandTotal"}),useNonVisualTotals:new r._ReportOption({
name:"useNonVisualTotals"}),showEmptyCells:new r._ReportOption({name:"showEmptyCells"
}),showEmptyEnum:new r._ReportOption({name:"showEmptyEnum",type:new r._StringOptionType,
expectedValues:["SHOW_MEASURE","SHOW_CALCULATED_MEASURE","SHOW_EMPTY"]}),showDrillLinks:new r._ReportOption({
name:"showDrillLinks"}),autoRefresh:new r._ReportOption({name:"autoRefresh",setReportOptionHandler:function(e,t){
var r=t===!0||"true"===t;r!==cv.prefs.autoRefresh&&e.manager.onToggleAutoRefresh();
}}),freezeColumns:new r._ReportOption({name:"freezeColumns"}),freezeRows:new r._ReportOption({
name:"freezeRows"}),catalog:new r._ReportOption({name:"catalog",type:new r._StringOptionType
}),cube:new r._ReportOption({name:"cube",type:new r._StringOptionType}),cellLimit:new r._ReportOption({
name:"cellLimit",type:new r._IntegerOptionType})},_chartOptions:{legendPosition:new r._ChartOption({
name:"legendPosition",expectedValues:["TOP","RIGHT","BOTTOM","LEFT"]}),showLegend:new r._ChartOption({
name:"showLegend",type:new r._BooleanOptionType}),autoRange:new r._ChartOption({name:"autoRange",
type:new r._BooleanOptionType}),valueAxisLowerLimit:new r._ChartOption({name:"valueAxisLowerLimit",
type:new r._DoubleOptionType}),valueAxisUpperLimit:new r._ChartOption({name:"valueAxisUpperLimit",
type:new r._DoubleOptionType}),displayUnits:new r._ChartOption({name:"displayUnits",
expectedValues:["UNITS_0","UNITS_2","UNITS_3","UNITS_4","UNITS_5","UNITS_6"]}),autoRangeSecondary:new r._ChartOption({
name:"autoRangeSecondary",type:new r._BooleanOptionType}),valueAxisLowerLimitSecondary:new r._ChartOption({
name:"valueAxisLowerLimitSecondary",type:new r._DoubleOptionType}),valueAxisUpperLimitSecondary:new r._ChartOption({
name:"valueAxisUpperLimitSecondary",type:new r._DoubleOptionType}),displayUnitsSecondary:new r._ChartOption({
name:"displayUnitsSecondary",expectedValues:["UNITS_0","UNITS_2","UNITS_3","UNITS_4","UNITS_5","UNITS_6"]
}),maxValues:new r._ChartOption({name:"maxValues",type:new r._IntegerOptionType,postValidateAction:function(e){
var r=t.report._getReport()._getVizApplicationSpec().maxValues;return t.util._findClosestValueFromArray(r,e);
}}),backgroundColor:new r._ChartOption({name:"backgroundColor",type:new r._HexOptionType
}),labelColor:new r._ChartOption({name:"labelColor",type:new r._HexOptionType}),labelSize:new r._ChartOption({
name:"labelSize",type:new r._IntegerOptionType,postValidateAction:function(e){return t.util._findClosestValueFromArray([7,8,9,10,11,12,14,16,18,20,24,28,32,36,40],e);
}}),backgroundFill:new r._ChartOption({name:"backgroundFill",expectedValues:["NONE","SOLID","GRADIENT"]
}),maxChartsPerRow:new r._ChartOption({name:"maxChartsPerRow",type:new r._IntegerOptionType,
postValidateAction:function(e){return t.util._findClosestValueFromArray([1,2,3,4,5],e);
}}),multiChartRangeScope:new r._ChartOption({name:"multiChartRangeScope",expectedValues:["GLOBAL","CELL"]
}),emptyCellMode:new r._ChartOption({name:"emptyCellMode",expectedValues:["GAP","ZERO","LINEAR"]
}),sizeByNegativesMode:new r._ChartOption({name:"sizeByNegativesMode",expectedValues:["NEG_LOWEST","USE_ABS"]
}),backgroundColorEnd:new r._ChartOption({name:"backgroundColorEnd",type:new r._HexOptionType
}),labelStyle:new r._ChartOption({name:"labelStyle",expectedValues:["PLAIN","BOLD","ITALIC"]
}),legendBackgroundColor:new r._ChartOption({name:"legendBackgroundColor",type:new r._HexOptionType
}),legendSize:new r._ChartOption({name:"legendSize",type:new r._IntegerOptionType,
postValidateAction:function(e){return t.util._findClosestValueFromArray([7,8,9,10,11,12,14,16,18,20,24,28,32,36,40],e);
}}),legendColor:new r._ChartOption({name:"legendColor",type:new r._HexOptionType}),
legendStyle:new r._ChartOption({name:"legendStyle",expectedValues:["PLAIN","BOLD","ITALIC"]
}),labelFontFamily:new r._ChartOption({name:"labelFontFamily",type:new r._StringOptionType
}),legendFontFamily:new r._ChartOption({name:"legendFontFamily",type:new r._StringOptionType
})}},n={_getNestedObjectByName:function(e,n){var o=new r._StringOptionType;o.validateValue("name",n);
var a=[];for(var s in e){var l=e[s];if(l.name||t.log.error(i._errors.WRONG_NESTED_OBJECT,!0),
l.name==n)return l;a.push(l.name)}t.log.error(i._errors.INVALID_OPTION_NAME(n,a),!0);
},_addHistory:function(e,t){t.history.add(new cv.ReportState(e)),t.setReportPropsDirty(!0);
}};this.types=r,this.constants=i,this.utilities=n};return t}),define("analyzer/cv_api_report",["dojox/collections/Dictionary","dojox/xml/parser","dojo/query","dojo/dom-construct","dojo/_base/event","analyzer/cv_api_report_util"],function(e,t,r,i,n,o){
var a=function(t,a){this._apiReportUtil=new o(t),this._attachedReport=a,this._query=function(e,t){
return r(e,t)},this._isValidGembarId=function(e){var r=t.ui.listGembarIds(),i=r.indexOf(e)>-1;
return i||t.log.error(this._errors.INVALID_GEMBARID(e,r),!0),i},this._isValidGembarType=function(e,t){
var r=!1,i=cv.getFieldHelp(),n="NUMBER"===i.get(t,"type"),o=!n,a=o&&i.hasStartDateTimeKey(t),s=this._getReport(),l=s.vizModelAdapter,u=l.$type.get(e,!0);
if(null!==u&&l.$type.isVisualRole(u)&&(o&&u.hasAnyCategoricalModes||n&&u.hasAnyModes({
isContinuous:!0,elementDataType:"number"})||a&&u.hasAnyModes({isContinuous:!0,elementDataType:"date"
}))){var p=s.findGemsByGembarId(u.name).length,d=u.fields.countRangeOn(l,{ignoreCurrentMode:!0
});r=p<d.max}return r},this._isValidField=function(e,t){return this._isValidGembarType(e,t)&&this._getReport().validateField(t)&&this._getReport().checkDuplicateGem(t,!0);
},this._insertFieldFromFormula=function(e,r,i,n){if(!this._isValidField(e,r))return void t.log.error(this._errors.INVALID_FORMULA(e,r));
var o=this._getReport(),a={formula:r},s="undefined"==typeof n?-1:n;o.insertField(e,i,s,a,!0);
},this._isValidVizId=function(e){if("pivot"===e)return!0;var r=t.ui.listVizIds(),i=r.indexOf(e)>-1;
return i||t.log.error(this._errors.INVALID_VIZ_ID(e,r),!0),i},this._errors={INVALID_GEMBARID:function(e,t){
return"'"+e+"' is an invalid gembarId. Valid values for current visualization are "+t;
},INVALID_GEMBAR_ORDINAL:"Gembar Ordinal must be a number and greater than or equal to -1",
NO_REPORT_SET:"There is no valid report set to the report editor",INVALID_FORMULAS_TYPE_ARRAY:"'formulas' must be an Array. e.g. ['[TYPE].[VALUE1]', '[TYPE].[VALUE2]']",
INVALID_FORMULA:function(e,t){return"'"+t+"' is an invalid formula for gembar '"+e+"'";
},INVALID_VIZ_ID:function(e,t){return"'"+e+"' is not a registered visualization id. Valid values for are "+t;
},INVALID_CATALOG_OR_CUBE:function(e,t){return"Catalog: '"+e+"' or Cube: '"+t+"' is invalid.";
},INVALID_FIELD:function(e){return"'"+e+"' is an invalid formula."},EMPTY_CELLS_FOR_LINK:function(e){
return"The cells are not present in the page to have the field link set on them for formula '"+e+"'.";
},INVALID_VIZ_FOR_SETTING_LINK:"The API 'setFieldLink' is available for only 'pivot' vizualization.",
INVALID_OPER_REPORT_ATTACHED:"The API object is already attached to another report instance.",
DEPRECATED_SHOW_EMPTY:"'showEmptyCells' report option is being deprecated for 'showEmptyEnum'. Please refer to Analyzer's API documentation for further explanation."
},this._attachReport=function(e){if(this._attachedReport){if(this._attachedReport!==e)throw new Error(this._errors.INVALID_OPER_REPORT_ATTACHED);
}else this._attachedReport=e},this._getReport=function(){var e=this._attachedReport;
return"undefined"==typeof e&&(e="undefined"==typeof cv?e:cv.getActiveReport()),e||t.log.warn(this._errors.NO_REPORT_SET),
e},this._validateParamsForSetFieldLink=function(e,r,i){var n=!0,o=new this._apiReportUtil.types._StringOptionType;
o.validateValue("formula",e),i.validateField(e)||t.log.error(this._errors.INVALID_FIELD(e),!0);
var a=new this._apiReportUtil.types._FunctionOptionType;return a.validateValue("callback",r),
"pivot"!==this.getVizId()&&(t.log.warn(this._errors.INVALID_VIZ_FOR_SETTING_LINK),
n=!1),n},this.getLayoutFields=function(e){var t=[],r=this._getReport();if(r&&this._isValidGembarId(e)){
var i=r.findGemsByGembarId(e);i.forEach(function(e){t.push(e.getFormula())})}return t;
},this.setLayoutFields=function(e,t){var r=this._getReport();if(r&&this._isValidGembarId(e)){
var i=new this._apiReportUtil.types._ArrayOptionType;if(i.validateValue("formulas",t),
t.length>0){var n=r.findGemsByGembarId(e);n.forEach(function(e){r.removeGem(e,!0,null,!0);
},this);for(var o=0;o<t.length;++o)this._insertFieldFromFormula(e,t[o],0,-1);var a=r.findGemsByGembarId(e);
a.length<=0&&n.forEach(function(t){this._insertFieldFromFormula(e,t.getFormula(),0,-1);
},this)}}},this.addLayoutField=function(e,r,i){var n=this._getReport();if(n&&this._isValidGembarId(e)){
var o=n.findGemsByGembarId(e);"number"!=typeof i||-1>i?t.log.error(this._errors.INVALID_GEMBAR_ORDINAL,!0):(-1===i||i>o.length)&&(i=o.length);
for(var a=-1,s=0;s<o.length;s++){var l=o[s];l.getFormula()===r&&(a=s)}this._insertFieldFromFormula(e,r,i,a);
}},this.removeLayoutField=function(e,t){var r=this._getReport();if(r&&this._isValidGembarId(e)){
var i=r.findGemsByGembarId(e);i.forEach(function(e){e.getFormula()===t&&r.removeGem(e,!0,null,!0);
})}},this.getName=function(){var e=null,t=this._getReport();return t&&t.reportDoc&&(e=t.reportDoc.getReportProperty("name")),
e},this.getPath=function(){var e=null,t=this._getReport();return t&&t.reportDoc&&(e=t.reportDoc.getReportProperty("folder")),
e},this.getNumericFilters=function(){var e={filters:{}},t=this._getReport();if(!t)return e;
var r=t.reportDoc;if(!r)return e;var i=r.getMetricFilter();if(i&&i.conditions&&i.formula){
var n=i.formula;if(e.filters[n]=[],i.rank){var o={};o.count=i.rank.count,o.formula=i.rank.formula,
o.operator=i.rank.type,e.filters[n].push(o)}for(var a=0;a<i.conditions.length;a++){
var o={},s=i.conditions[a];o.operator=s.operator,o.formula=s.formula,o.op1=s.op1,
o.op2=s.op2,e.filters[n].push(o)}}return e},this.setNumericFilters=function(e,t){
var r=this._getReport();if(r){var i=r.reportDoc;if(i){var n=new this._apiReportUtil.types._StringOptionType;
n.validateValue("level",e);var o=new this._apiReportUtil.types._ArrayOptionType;o.validateValue("filterItems",t);
var a={type:"FILTER_METRIC"};a.conditions=[],a.formula=e;for(var s=0;s<t.length;s++){
var l=t[s],u=l.operator;if("TOP"==u||"BOTTOM"==u||"TOP_BOTTOM"==u)a.rank={},a.rank.type=u,
a.rank.formula=l.formula,a.rank.count=l.count;else{var p={};p.formula=l.formula,p.op1=l.op1,
p.op2=l.op2,p.operator=l.operator,a.conditions.push(p)}}var d=i.getMetricFilter();
d?a.old=d.formula:a.old=e,i.updateFilter(a),r.populateFilters(),this._apiReportUtil.utilities._addHistory("API numeric filter on "+e,r);
}}},this.getSelectionFilters=function(){var e={selectionFilters:[]},t=this._getReport();
if(!t)return e;var r=t.reportDoc;if(!r)return e;for(var i=r.getSelectionFilters(),n=[],o=0;o<i.length;o++){
var a=r.getSelectionFilterProps(i[o]);n.push(a)}for(var o=0;o<n.length;o++){var s=n[o].op,l=[],u=n[o].members;
if(u){for(var p=0;p<u.length;p++){var d={formula:u[p].formula,member:u[p].member};
l.push(d)}var a={operator:s,members:l};e.selectionFilters.push(a)}}return e},this.addSelectionFilter=function(e){
var t=this._getReport();if(t){var r=t.reportDoc;if(r){for(var i={op:e.operator,members:[]
},n="",o=0;o<e.members.length;o++){var a=e.members[o];n+=o<e.members.length-1?a.formula+", ":a.formula;
var s={formula:a.formula,member:a.member};i.members.push(s)}r.addSelectionFilter(i),
this._apiReportUtil.utilities._addHistory(n,t)}}},this.addSelectionFilters=function(e){
var t=this._getReport();if(t){var r=t.reportDoc;if(r)for(var i=0;i<e.length;i++)this.addSelectionFilter(e[i]);
}},this.removeSelectionFilters=function(e){var t=this._getReport();t&&(t.removeSelectionFilters(e),
this._apiReportUtil.utilities._addHistory("API remove selection filters",t))},this.getFilters=function(){
var e={filters:{}},t=this._getReport();if(!t)return e;var r=t.reportDoc;if(!r)return e;
for(var i={},n=r.getChildMembers("filters"),o=[],a=0;a<n.length;a++){var s=r.getFilterProps(n[a]);
o.push(s)}for(var a=0;a<o.length;a++){var l=o[a].formula,u=[],p=o[a].predicates;if(p)for(var d=o[a].predicates.getValueList(),c=0;c<d.length;c++){
for(var h=0;h<d[c].length;h++){var f=[],m={},_=d[c][h].op,v=d[c][h].op1,g=d[c][h].op2;
m.operator=_,v&&(m.op1=v),g&&(m.op2=g),d[c][h].parameterName&&(m.parameterName=d[c][h].parameterName),
f="CONTAIN"==_||"NOT_CONTAIN"==_?d[c][h].exp:d[c][h].members,m.members=f,u.push(m);
}i[l]=u}}return e.filters=i,e},this.setFilters=function(t,r,i){var n=this._getReport();
if(n){var o=n.reportDoc;if(o){var a=new this._apiReportUtil.types._StringOptionType;
a.validateValue("level",t);var s=new this._apiReportUtil.types._ArrayOptionType;s.validateValue("filterItems",r);
for(var l={formula:t,predicates:new e},u="",p=0;p<r.length;p++){var d=r[p];u+=p<r.length-1?d.parameterName+", ":d.parameterName;
var c={op:d.operator,members:d.members,parameterName:d.parameterName};d.op1&&(c.op1=d.op1),
d.op2&&(c.op2=d.op2),("CONTAIN"==c.op||"NOT_CONTAIN"==c.op)&&(c.exp=d.members,c.containsRegExp=d.containsRegExp,
delete c.members),l.predicates.add(p,[c])}o.updateFilter(l,i),n.populateFilters(),
this._apiReportUtil.utilities._addHistory(u,n)}}},this.removeFilters=function(e){
var t=this._getReport();t&&(t.removeFilter("filter_"+e+"_99",!0),this._apiReportUtil.utilities._addHistory("API remove filter on "+e,t));
},this.removeNumericFilters=function(){var e=this._getReport();e&&(e.removeFilter("filter_metric_0",!0),
this._apiReportUtil.utilities._addHistory("API remove filter",e))},this.getVizId=function(){
var e=this._getReport();if(e)return"PIVOT"==e.getReportFormat()?"pivot":e.reportDoc.getChartOption("customChartType");
},this.setVizId=function(e){t.util._validateModeForAPI(arguments.callee);var r=this._getReport();
r&&this._isValidVizId(e)&&("pivot"===e?r._initDisplay("PIVOT"):r._initDisplay("JSON","CUSTOM",e));
},this.getFieldOption=function(e,t){var r=null,i=this._getReport();if(!i||!i.reportDoc)return r;
var n=new this._apiReportUtil.types._StringOptionType;n.validateValue("formula",e),
n.validateValue("name",t);var o=this._apiReportUtil.utilities._getNestedObjectByName(this._apiReportUtil.constants._fieldOptions,t);
switch(t){case"label":r=o.getFieldOptionHandler(i.reportDoc,"cv:report//*[@formula='"+e+"']/cv:displayLabels/cv:displayLabel",e);
break;case"formatCategory":case"formatScale":case"formatShortcut":case"currencySymbol":
r=o.getFieldOptionHandler(i.reportDoc,"cv:report//*[@formula='"+e+"']/cv:numberFormat",e);
break;case"formatExpression":r=o.getFieldOptionHandler(i.reportDoc,"cv:report//*[@formula='"+e+"']/cv:numberFormat/cv:formatExpression",e);
break;default:r=o.getFieldOptionHandler(i.reportDoc,"cv:report//*[@formula='"+e+"']",e);
}return r},this.setFieldOption=function(e,t,r){var i=this._getReport();if(i&&i.reportDoc){
var n=new this._apiReportUtil.types._StringOptionType;n.validateValue("formula",e),
n.validateValue("name",t);var o=this._apiReportUtil.utilities._getNestedObjectByName(this._apiReportUtil.constants._fieldOptions,t),a=o.validateValue(r);
switch(o.appliedTo){case"measure":o.setFieldOptionHandler(i.reportDoc,"cv:report/cv:measures/cv:measure[@formula='"+e+"']",e,a);
break;case"attribute":o.setFieldOptionHandler(i.reportDoc,"cv:report//cv:attribute[@formula='"+e+"']",e,a);
break;default:o.setFieldOptionHandler(i.reportDoc,"cv:report//*[@formula='"+e+"']",e,a);
}}},this.isDirty=function(){var e=this._getReport();if(e)return e.isDirty()},this.isNew=function(){
var e=this._getReport();if(e&&e.reportDoc)return e.reportDoc.isNew()},this.getReportOption=function(e){
var t=this._getReport();if(t&&t.reportDoc){var r=this._apiReportUtil.utilities._getNestedObjectByName(this._apiReportUtil.constants._reportOptions,e);
return r.getReportOptionHandler(t)}},this.setReportOption=function(e,r){var i=this._getReport();
if(i&&i.reportDoc){"showEmptyCells"===e&&(t.log.warn(this._errors.DEPRECATED_SHOW_EMPTY),
e="showEmptyEnum",r=!0===r||"true"===r.toLowerCase()?"SHOW_EMPTY":"SHOW_MEASURE"),
t.util._validateModeForAPI(arguments.callee);var n=this._apiReportUtil.utilities._getNestedObjectByName(this._apiReportUtil.constants._reportOptions,e),o=n.validateValue(r);
n.setReportOptionHandler(i,o)}},this.getChartOption=function(e){var t=this._getReport();
if(t&&t.reportDoc){var r=this._apiReportUtil.utilities._getNestedObjectByName(this._apiReportUtil.constants._chartOptions,e);
return r.getChartOptionHandler(t)}},this.setChartOption=function(e,r){var i=this._getReport();
if(i&&i.reportDoc){t.util._validateModeForAPI(arguments.callee);var n=this._apiReportUtil.utilities._getNestedObjectByName(this._apiReportUtil.constants._chartOptions,e),o=n.validateValue(r);
n.setChartOptionHandler(i,o)}},this.setDatasource=function(e,r){var i=this._getReport();
if(i&&i.reportDoc&&(i.catalog!=e||i.cube!=r)){i.catalog=e,i.cube=r;var n=i.manager.updateCatalog(!0);
"undefined"!=typeof n&&(i.catalog=this.getReportOption("catalog"),i.cube=this.getReportOption("cube"),
0==n.length&&(n=this._errors.INVALID_CATALOG_OR_CUBE(e,r)),t.log.error(n,!0)),this.setReportOption("cube",i.cube),
this.setReportOption("catalog",i.catalog),i.openReport(void 0,!0)}},this.setFieldLink=function(e,r){
var o=this._getReport();if(o&&this._validateParamsForSetFieldLink(e,r,o)){var a=!0,s=o.byClass("pivotTable");
if(s){var l=o.buildFilterActionContext(),u=function(e){var a,s=this._query("a",e);
if(s.length>0)a=s[0];else for(var u,p=e.firstChild.childNodes,d=0;u=p[d];d++)if("#text"==u.nodeName){
a=u;break}if(a){var c=i.create("a",{innerHTML:a.textContent||a.innerText||a.nodeValue,
href:"javascript:;"});i.place(c,a,"replace");var h=o.buildCellActionContext(e),f=function(e){
r(cv.api,h,l),n.stop(e)};t.event._eventListenerUtil.addEventListener(c,"click",f,!1);
}},p=this._query('td[type="measure"][ctx*="'+e+'"]',o.reportHeaders.columnHeaderContainer);
if(p.length>0){var d=p[0].parentNode,c="";p.forEach(function(e,t,r){var i=[].indexOf.call(d.children,e);
c+='td[type="cell"][colindex="'+i+'"]',t!==p.length-1&&(c+=",")}),p.forEach(u,this),
this._query(c,o.reportHeaders.dataContainer).forEach(u,this),a=!1}else{var c='td[type="member"][ctx*="'+e+'"]',h=this._query(c,o.reportHeaders.rowLabelContainer);
h.forEach(u,this);var f=this._query(c,o.reportHeaders.columnHeaderContainer);f.forEach(u,this),
a=0===h.length&&0===f.length}}a&&t.log.warn(this._errors.EMPTY_CELLS_FOR_LINK(e));
}},this.buildFilterActionContext=function(){var e={},t=this._getReport();return t&&(e=t.buildFilterActionContext()),
e},this.buildCellActionContext=function(e){var t={},r=this._getReport();return r&&(t=r.buildCellActionContext(e)),
t}};return a}),define("analyzer/cv_api_operation",["analyzer/cv_api_report_util"],function(e){
var t=function(t){this._apiReportUtil=new e(t),this._cutStrByRegexp=function(e,t){
var r=e.search(t);return-1!=r&&(e=e.substring(0,r)),e},this.refreshReport=function(){
var e=t.report._getReport();e&&(e.refreshReport(!0),e.populateFilters())},this.getDropTarget=function(e,r,i){
var n=t.report._getReport();if("undefined"==typeof n)return null;this.filterCountLabel||(this.filterCountLabel=n.byId("FilterCountLabel")),
this.filterPaneToggle||(this.filterPaneToggle=n.byId("FilterPaneToggle"));var o=function(e){
return{clientX:e.x,clientY:e.y,anchor:{getAttribute:function(){return e.formula}}
}},a=function(e,t){return{dropTarget:e,domNodes:t,onGet:function(){},onShowDropIndicator:function(e){
this.dropTarget._showDropIndicator()},onClearDropIndicator:function(e){this.dropTarget._clearDropIndicator();
},onDrop:function(e){var t=o(e);this.dropTarget.onDrop(t),this.dropTarget._afterDrop(e.formula);
}}},s={reportArea:{dropTarget:n.dropTargets.reportArea,domNodes:[n.dropTargets.reportArea.node],
_setDragEvent:function(e){this.dropTarget.lastDragEvent=o(e)},onShowDropIndicator:function(e){
this._setDragEvent(e),this.dropTarget.calculateBoxes();var t=n.manager.fieldHelp,r=t.isAttribute(e.formula)?"attribute":"measure";
this.dropTarget._showDropIndicator(this.dropTarget.lastDragEvent,r)},onClearDropIndicator:function(e){
this.dropTarget._clearDropIndicator()},onGet:function(){this.dropTarget.calculateBoxes(!0);
},onDrop:function(e){this._setDragEvent(e);var t=n.manager.fieldHelp,r=t.isAttribute(e.formula)?"attribute":"measure";
this.dropTarget._onDrop(e.formula,r)}},filters:a(n.dropTargets.filters,[n.dropTargets.filters.filterPane]),
filterPaneTitle:a(n.dropTargets.filterPaneTitle,[n.dropTargets.filterPaneTitle.filterPane,this.filterCountLabel,this.filterPaneToggle])
},l=dijit.byId("layoutPanel");if(l)for(var u in l.propUIs){var p=l.propUIs[u];p.dropZone&&(s[p.id]={
dropTarget:p.dropZone,domNodes:[p.domNode],onGet:function(){this.dropInfo=null},onShowDropIndicator:function(e){
if(this.dropTarget.accept[cvConst.dndTypes.gemFromFieldList]){this.dropTarget.gemBar._showOver();
var t=o(e),r=this.dropTarget._showDropIndicator(t);r&&(this.dropInfo=r)}},onClearDropIndicator:function(e){
this.dropTarget.gemBar._hideOver(),this.dropTarget._hideDropIndicator()},onDrop:function(e){
this.dropInfo||(this.dropInfo={before:!1,anchor:null});var t={scope:n,f:n.emitDropEvent
};this.dropTarget._onDrop(e.formula,cvConst.dndTypes.gemFromFieldList,e.formula,this.dropTarget.gemBar,this.dropInfo.before,this.dropInfo.anchor,this.dropTarget.node,t);
}})}var d={source:{formula:i,x:e,y:r},target:null};for(var c in s){var h=s[c],f=h.domNodes;
for(var m in f){var _=f[m];if(t.ui._withinDomNode(e,r,_))return d.target=h,h.onGet(d.source),
d}}return null},this.completeDrop=function(e){e.target.onDrop(e.source)},this.showDropTargetIndicator=function(e){
e.target.onShowDropIndicator(e.source)},this.clearDropTargetIndicator=function(e){
e.target.onClearDropIndicator(e.source)},this.clearCache=function(e,r,i){var n=t.report._getReport();
n&&cv.util.clearCache(n,e,r,i)},this.undo=function(){var e=t.report._getReport();e&&e.history.undo();
},this.redo=function(){var e=t.report._getReport();e&&e.history.redo()},this.resetReport=function(){
var e=t.report._getReport();if(e){var r=e.history.getSaved();e.history.setTo(r),e.history.current().back();
}},this.saveReport=function(e,r,i,n,o){var a=t.report._getReport();if(a){var s=new this._apiReportUtil.types._StringOptionType;
s.validateValue("name",e),s.validateValue("path",r);var l=".xanalyzer";e=this._cutStrByRegexp(e,/\.xanalyzer$/),
r=this._cutStrByRegexp(r,/\/[^\/]*\.xanalyzer$/)+"/"+e+l;var u={success:function(){
"function"==typeof i&&i.apply(arguments)},error:function(){"function"==typeof n&&n.apply(arguments);
}};cv.util.saveReport(a,"saveAs",e,r,u,!!o)}}};return t}),define("analyzer/AnalyzerEvented",["dojo/Evented","dojo/_base/declare"],function(e,t){
return t([e],{constructor:function(e){this.stopImmediatePropagation=!1,this.preventDefault=!1,
this.config=e,this.disabledEvents={}},_on:function(e,t,r){if(this.stopImmediatePropagation)return void(this.config&&this.config.onPropagationStopped&&this.config.onPropagationStopped(t,e));
if(!this.isEventDisabled(t)){e.stopPropagation||(e.stopPropagation=function(){console.log("Stop Propagation is not implemented by dojo unless you implement a parent/child structure.");
});var i=this;e.stopImmediatePropagation||(e.stopImmediatePropagation=function(){
i.stopImmediatePropagation=!0}),e.preventDefault||(e.preventDefault=function(){i.preventDefault=!0;
}),r.call(this,e),this.config&&this.config.onListenerExecuted&&this.config.onListenerExecuted(t,e);
}},on:function(e,t){var r=this,i=t;return arguments[1]=function(t){r._on.call(r,t,e,i);
},this.inherited(arguments)},emit:function(e,t){return this.stopImmediatePropagation=!1,
this.preventDefault=!1,this.inherited(arguments),this.preventDefault?!1:t},isEventDisabled:function(e){
return this.disabledEvents&&e?this.disabledEvents.tableDoubleClick===!0&&e.match(/doubleclick|dblclick/i)?!0:void 0!==this.disabledEvents[e]&&this.disabledEvents[e]:!1;
}})}),define("analyzer/EventListenerUtil",[],function(){var e=function(){function e(e,n,o,l){
var u="on"+n,p=e;p._listener=p._listener||{},p._listener[n]=p._listener[n]||t(),0==p._listener[n][a].length&&0==p._listener[n][s].length&&(p._listener[u]=function(e){
var t={},o=e.srcElement;for(var a in e)t[a]=e[a];t.currentTarget=p,t.target=o,t.nativeEvent=e,
t.preventDefault=function(){this.nativeEvent.returnValue=!1},t.stopPropagation=function(){
this.nativeEvent.cancelBubble=!0};for(var s=[];o;)s.unshift(o),o=o.parentNode;r(p,n,s,e,t),
i(p,n,s,e,t),e.cancelBubble=!0},p.attachEvent(u,p._listener[u])),p._listener[n][l?a:s].push(o);
}function t(){var e={};return e[a]=[],e[s]=[],e}function r(e,t,r,i,o){for(var s,l=0;(s=r[l])&&!i.cancelBubble;l++)n(e,t,a,s,i,o);
}function i(e,t,r,i,o){for(var a,l=r.length-1;(a=r[l])&&!i.cancelBubble;l--)n(e,t,s,a,i,o);
}function n(e,t,r,i,n,o){if(i._listener&&i._listener[t])for(var a,s=0;(a=i._listener[t][r][s])&&!n.cancelBubble;s++)a.call(e,o);
}function o(e,r,i,n){var o="on"+r,l=e;l._listener=l._listener||{},l._listener[r]=l._listener[r]||t();
for(var u,p=l._listener[r][n?a:s],d=p.length-1;u=p[d];d--)u===i&&p.splice(d,1);0==l._listener[r][a].length&&0==l._listener[r][s].length&&l.detachEvent(o,l._listener[o]);
}var a="capturing",s="bubbling";this.addEventListener=function(t,r,i,n){t.addEventListener?t.addEventListener(r,i,n):e(t,r,i,n);
},this.removeEventListener=function(e,t,r,i){e.removeEventListener?e.removeEventListener(t,r,i):o(e,t,r,i);
}};return e}),define("analyzer/cv_api_event",["analyzer/AnalyzerEvented","analyzer/EventListenerUtil"],function(e,t){
var r=function(r){var i=this;this._eventListenerUtil=new t,this._eventedHelper=new e({
onPropagationStopped:function(e,t){r.log.info(i._infoMsgs.EVENT_SKIPPED(e))}}),this._availableActions=["actionAddLevel","actionAddMeasure","actionMoveLevel","actionMoveMeasure","actionRemoveLevel","actionRemoveMeasure"],
this._infoMsgs={EVENT_REGISTERED:function(e){return"["+e+"] event registered"},EVENT_EXECUTED:function(e){
return"["+e+"] event executed"},EVENT_SKIPPED:function(e){return"["+e+"] event skipped by stopImmediatePropagation";
}},this._availableMenuIds=["fieldViewMenu","fieldListMenu","moreActionsMenu","attributePopMenu","propPopMenu","measurePopMenu","filterPopMenu","grandTotalPopMenu","actionsMenu","memberPopMenu","cellPopMenu"],
this._on=function(e,t){var n=this._eventedHelper.on(e,function(n){n.args[0].hasOwnProperty("args")&&n.args[0].hasOwnProperty("bubbles")?n.args[0]=n:n.args.unshift(n);
try{t.apply(i._eventedHelper,n.args),r.log.info(i._infoMsgs.EVENT_EXECUTED(e))}catch(n){
r.log.error(n)}});return r.log.info(this._infoMsgs.EVENT_REGISTERED(e)),n},this._emit=function(e){
return this._eventedHelper.emit(e,{bubbles:!0,cancelable:!0,args:Array.prototype.slice.call(arguments,1)
})},this.registerInitListener=function(e){return this._on("init",e)},this.registerTableClickListener=function(e){
return this._on("tableClick",e)},this.registerTableContextMenuListener=function(e){
return this._on("tableContextMenu",e)},this.registerRenderListener=function(e){return this._on("render",e);
},this.registerActionEventListener=function(e){return this._on("actionEvent",e)},
this.registerDropEventListener=function(e){return this._on("drop",e)},this._emitActionEvent=function(e){
var t=!0;return this._availableActions.indexOf(e.action)>-1&&(t=this._emit("actionEvent",r,e.action,e.actionCtx)),
t},this.registerChartSelectItemsListener=function(e){return this._on("chartSelectItems",e);
},this.registerChartDoubleClickListener=function(e){return this._on("chartDoubleClick",e);
},this.registerTableDoubleClickListener=function(e){return this._on("tableDoubleClick",e);
},this.registerTableMouseOverListener=function(e){return this._on("tableMouseOver",e);
},this.registerTableMouseMoveListener=function(e){return this._on("tableMouseMove",e);
},this.registerBuildMenuListener=function(e){return this._on("buildMenu",e)},this._emitBuildMenu=function(e,t,i){
var n=!0;return this._availableMenuIds.indexOf(e.id)>-1&&(n=this._emit("buildMenu",r,e.id,e,t,i)),
n},this.registerDragEventListener=function(e){return this._on("drag",e)},this.registerPreExecutionListener=function(e){
return this._on("preExecution",e)},this.registerPostExecutionListener=function(e){
return this._on("postExecution",e)},this.disableDragAndDrop=function(e){this._eventedHelper.disabledEvents.dragAndDrop=JSON.parse(e);
},this.disableTableDoubleClick=function(e){this._eventedHelper.disabledEvents.tableDoubleClick=JSON.parse(e),
this._showDisabledEventTitle(this._eventedHelper.disabledEvents.tableDoubleClick,'td[type="member"] div[enabledeventtitle]'),
this._showDisabledEventTitle(this._eventedHelper.disabledEvents.tableDoubleClick,'td[type="member"][enabledeventtitle]');
},this.disableTableContextMenu=function(e){this._eventedHelper.disabledEvents.tableContextMenu=JSON.parse(e);
},this.isEventDisabled=function(e){return this._eventedHelper.isEventDisabled(e)},
this._showDisabledEventTitle=function(e,t){for(var r=document.querySelectorAll(t),i=0;i<r.length;i++){
var n=r[i];e&&n.hasAttribute("disabledeventtitle")?n.setAttribute("title",n.getAttribute("disabledeventtitle")):!e&&n.hasAttribute("enabledEventTitle")&&n.setAttribute("title",n.getAttribute("enabledeventtitle"));
}}};return r}),define("analyzer/cv_api_util",["analyzer/cv_api_report_util","dojo/request"],function(e,t){
var r=function(r){this._apiReportUtil=new e(r),this._validateUrlParamItem=function(e,t){
var i=void 0!==t.urlParams&&t.urlParams.length>0;return!i||t.handler&&t.handlerScope?i&&"function"!=typeof t.handler&&(r.log.warn(this._errorMessages.INVALID_HANDLER_FOR_URL_PARAM(e)),
i=!1):(r.log.warn(this._errorMessages.INVALID_PARAM_HANDLER(e)),i=!1),i},this._errorMessages={
INVALID_PARAM_HANDLER:function(e){return"Function handler is not set for API '"+e+"'.";
},INVALID_HANDLER_FOR_URL_PARAM:function(e){return"API '"+e+"' has an invalid function handler.";
},INVALID_URL_PARAM_FOR_MODE:function(e,t,r){return"API '"+e+"' is not allowed for the current report mode '"+t+"'. The valid mode is '"+r+"'.";
}},this._functions={setVizId:{urlParams:[{name:"vizId"}],handler:r.report.setVizId,
handlerScope:r.report},setReportOption:{urlParams:[{name:"showRowGrandTotal",args:["showRowGrandTotal"]
},{name:"showColumnGrandTotal",args:["showColumnGrandTotal"]},{name:"useNonVisualTotals",
args:["useNonVisualTotals"]},{name:"showEmptyCells",args:["showEmptyCells"]},{name:"showDrillLinks",
args:["showDrillLinks"]},{name:"autoRefresh",args:["autoRefresh"]},{name:"freezeColumns",
args:["freezeColumns"]},{name:"freezeRows",args:["freezeRows"]}],handler:r.report.setReportOption,
handlerScope:r.report},setChartOption:{urlParams:[{name:"legendPosition",args:["legendPosition"]
},{name:"showLegend",args:["showLegend"]},{name:"autoRange",args:["autoRange"]},{
name:"valueAxisLowerLimit",args:["valueAxisLowerLimit"]},{name:"valueAxisUpperLimit",
args:["valueAxisUpperLimit"]},{name:"displayUnits",args:["displayUnits"]},{name:"autoRangeSecondary",
args:["autoRangeSecondary"]},{name:"valueAxisLowerLimitSecondary",args:["valueAxisLowerLimitSecondary"]
},{name:"valueAxisUpperLimitSecondary",args:["valueAxisUpperLimitSecondary"]},{name:"displayUnitsSecondary",
args:["displayUnitsSecondary"]},{name:"maxValues",args:["maxValues"]},{name:"backgroundColor",
args:["backgroundColor"]},{name:"labelColor",args:["labelColor"]},{name:"labelSize",
args:["labelSize"]},{name:"backgroundFill",args:["backgroundFill"]},{name:"maxChartsPerRow",
args:["maxChartsPerRow"]},{name:"multiChartRangeScope",args:["multiChartRangeScope"]
},{name:"emptyCellMode",args:["emptyCellMode"]},{name:"sizeByNegativesMode",args:["sizeByNegativesMode"]
},{name:"backgroundColorEnd",args:["backgroundColorEnd"]},{name:"labelStyle",args:["labelStyle"]
},{name:"legendBackgroundColor",args:["legendBackgroundColor"]},{name:"legendSize",
args:["legendSize"]},{name:"legendColor",args:["legendColor"]},{name:"legendStyle",
args:["legendStyle"]},{name:"labelFontFamily",args:["labelFontFamily"]},{name:"legendFontFamily",
args:["legendFontFamily"]}],handler:r.report.setChartOption,handlerScope:r.report
},showFieldList:{urlParams:[{name:"showFieldList"}],handler:r.ui.showFieldList,handlerScope:r.ui,
mode:"EDIT"},showFieldLayout:{urlParams:[{name:"showFieldLayout"}],handler:r.ui.showFieldLayout,
handlerScope:r.ui,mode:"EDIT"},removeHeaderBar:{urlParams:[{name:"removeHeaderBar"
}],handler:r.ui.removeHeaderBar,handlerScope:r.ui},disableFilterPanel:{urlParams:[{
name:"disableFilterPanel"}],handler:r.ui.disableFilterPanel,handlerScope:r.ui},showFilterPanel:{
urlParams:[{name:"showFilterPanel"}],handler:r.ui.showFilterPanel,handlerScope:r.ui
},removeFieldList:{urlParams:[{name:"removeFieldList"}],handler:r.ui.removeFieldList,
handlerScope:r.ui,mode:"EDIT"},removeFieldLayout:{urlParams:[{name:"removeFieldLayout"
}],handler:r.ui.removeFieldLayout,handlerScope:r.ui,mode:"EDIT"},setFieldListView:{
urlParams:[{name:"fieldListView"}],handler:r.ui.setFieldListView,handlerScope:r.ui,
mode:"EDIT"},showRepositoryButtons:{urlParams:[{name:"showRepositoryButtons"}],handler:r.ui.showRepositoryButtons,
handlerScope:r.ui,mode:"EDIT"},removeUndoButton:{urlParams:[{name:"removeUndoButton"
}],handler:r.ui.removeUndoButton,handlerScope:r.ui,mode:"EDIT"},removeRedoButton:{
urlParams:[{name:"removeRedoButton"}],handler:r.ui.removeRedoButton,handlerScope:r.ui,
mode:"EDIT"},removeMainToolbar:{urlParams:[{name:"removeMainToolbar"}],handler:r.ui.removeMainToolbar,
handlerScope:r.ui,mode:"EDIT"},removeReportActions:{urlParams:[{name:"removeReportActions"
}],handler:r.ui.removeReportActions,handlerScope:r.ui,mode:"VIEW"},disableTableDoubleClick:{
urlParams:[{name:"disableTableDoubleClick"}],handler:r.event.disableTableDoubleClick,
handlerScope:r.event},disableTableContextMenu:{urlParams:[{name:"disableTableContextMenu"
}],handler:r.event.disableTableContextMenu,handlerScope:r.event},disableDragAndDrop:{
urlParams:[{name:"disableDragAndDrop"}],handler:r.event.disableDragAndDrop,handlerScope:r.event
},isFromTransformation:{urlParams:[{name:"isFromTransformation"}],handler:r.ui.setIsFromTransformation,
handlerScope:r.ui}},this.parseMDXExpression=function(e,t){var r=new this._apiReportUtil.types._StringOptionType;
return r.validateValue("formula",e),cv.util.parseMDXExpression(e,t)},this._applyUrlParameters=function(){
for(param in this._functions){var e=this._functions[param];try{if(this._validateUrlParamItem(param,e))for(var t,i=0;t=e.urlParams[i];i++){
var n=cv.util.getURLQueryValue(t.name);if(n){var o=t.args?t.args:[];o.push(n),e.handler.apply(e.handlerScope,o);
}}}catch(a){r.log.error(a)}}},this._validateModeForAPI=function(e){var t=!0,i=r.ui.getMode();
for(param in this._functions){var n=this._functions[param];if(n.handler===e){t=void 0===n.mode||n.mode===i,
t||r.log.error(this._errorMessages.INVALID_URL_PARAM_FOR_MODE(param,i,n.mode),!0);
break}}return t},this._findClosestValueFromArray=function(e,t){var r=t;if(e){var i=Math.max.apply(null,e);
t>i&&(i=t);for(var n=0;n<e.length;n++){var o=Math.abs(t-e[n]);i>o&&(i=o,r=e[n])}}
return r},this._hasInlineModelingPermission=function(){return"false"===cv.util.getURLQueryValue("hasInlineModelingPermission")?!1:this._hasManageDatasourcePermission();
},this._hasManageDatasourcePermission=function(){var e={},r="api/authorization/action/isauthorized?authAction=org.pentaho.platform.dataaccess.datasource.security.manage",i=null;
return e.time=(new Date).getTime(),t(CONTEXT_PATH+r,{data:e,sync:!0,headers:{"Content-Encoding":"utf8",
"Content-Type":"application/json"},method:"GET",preventCache:!0}).then(function(e){
i=e},function(e){}),"true"===i?!0:!1}};return r}),define("analyzer/visual/registry.legacy",["pentaho/module/metaService","pentaho/util/object","pentaho/visual/base/KeyTypes","dojo/_base/lang"],function(e,t,r,i){
"use strict";function n(e){return e&&e.indexOf("/")<0?m+e:e}function o(e){return i.clone(e.type.v2Spec);
}function a(e,t,r){if(!t)return Promise.resolve();var i=t.map(function(e){return e.menuOrdinal||(e.menuOrdinal=1e4),
h(e,r)});i.sort(function(e,t){return e.menuOrdinal-t.menuOrdinal});var n=null,o=i.map(function(t){
return n&&t.menuSeparator!==!0||(n=t.type),t._category=n,l(e,t,r)});return Promise.all(o);
}function s(e){var t=e.type;return-1!==t.id.indexOf(m)}function l(t,r,i){var n=u(r,i),o={};
return o[n.id]={base:t.type.id,value:function(e){return t.extend({$type:n}).configure({
$type:e.config})}},e.configure(o).get(n.id).loadAsync()}function u(e,t){var i=n(e.id),o=e.dataReqs&&e.dataReqs[0],a=!1,s=e.args||{},l={
index:-1,name:"",ordinal:0},u=o&&o.reqs.filter(function(e){var t=e.ui&&"button"===e.ui.type;
return!a&&t&&(a="optionsBtn"===e.id),!t}).map(function(e,t){return p(e,s,l,t)}),d=+t["filter.selection.max.count"]||500,c={
"filter.selection.max.count":d,showOptionsButton:a};return e.maxValues&&(c.maxValues=e.maxValues),
o&&(o.drillOrder&&(c.drillOrder=o.drillOrder),o.hyperlinkOrder&&(c.hyperlinkOrder=o.hyperlinkOrder)),
e.keepLevelOnDrilldown&&(c.keepLevelOnDrilldown=e.keepLevelOnDrilldown),{id:i,v2Spec:e,
v2Id:e.id,label:e.name||e.id,category:e._category,description:e.name||e.id,ordinal:e.menuOrdinal||1e4,
visualKeyType:e.visualKeyType||r.dataKey,props:u||[],application:c}}function p(e,t,r,i){
return e.dataStructure?d(e,i):c(e,t,r)}function d(e,t){var r=[],i=null==e.allowMultiple||!!e.allowMultiple,n=e.dataType||"string";
return n.match(/\bstring\b/)&&r.push(i?{dataType:["string"]}:{dataType:"string"}),
n.match(/\bnumber\b/)&&r.push(i?{dataType:["number"]}:{dataType:"number"}),{name:e.id,
label:e.caption,ordinal:t,base:"pentaho/visual/role/Property",modes:r,fields:{isRequired:!!e.required
},v2Spec:e}}function c(e,t,r){var i=e.ui||{},n=t[e.id];void 0===n&&(n=e.value,void 0===n&&(n=null));
var o;switch(e.dataType){case"string":case"number":case"boolean":case"date":o=e.dataType;
break;default:o="string"}var a,s=e.values;if(s){var l=i.labels;a=s.map(function(e,t){
var r=l&&t<l.length?l[t]:String(e);return{v:e,f:r}})}(r.index<0||e.ui.seperator)&&(r.name="category"+ ++r.index),
r.ordinal++;var u={name:e.id,label:i.caption,category:r.name,ordinal:r.ordinal,valueType:o,
defaultValue:n,v2Spec:e};return"checkbox"===i.type&&(u.application={checkedLabel:null!=i.caption?i.label:null
}),a&&(u.domain=a),u}function h(e,r){var n=i.clone(e),o=r["viz."+n.id+".maxValues"];
if(o){var a=f(o);n.maxValues=a}n.maxValues||(n.maxValues=[100,150,200,250]),n.args||(n.args={});
var s="viz."+n.id+".args.";t.eachOwn(r,function(e,t){if(-1!==t.indexOf(s)){var r=t.substr(s.length);
n.args[r]=e}});var l=+r["filter.selection.max.count"]||500;return n.args["filter.selection.max.count"]=l,
n}function f(e){if(!e)return[100,150,200,250];var t=e.split(/\s*,\s*/),r=t.map(function(e){
return parseInt(e,10)});return r}var m="pentaho/visual/models/legacy/";return{toId:n,
create:o,isLegacyViz:s,importLegacyVisualizations:a,_convertLegacyVisualization:u,
_convertLegacyDataReq:p}}),define("analyzer/visual/dataFilterUtils",["pentaho/data/filter/False"],function(e){
"use strict";function t(e){if(!e)return[];var t=[];switch(e=e.toDnf(),e.kind){case"false":
break;case"or":e.operands.each(function(e){t.push(r(e))});break;default:t.push(r(e));
}return t}function r(e){var t;switch(e.kind){case"isEqual":return{type:"row",rowId:[e.property],
rowItem:[e.value]};case"and":return t=i(),e.operands.each(function(e){var i=r(e);i&&(t.rowId.push.apply(t.rowId,i.rowId),
t.rowItem.push.apply(t.rowItem,i.rowItem))}),t;default:throw new Error("Not Implemented");
}}function i(e,t){return{type:"row",rowId:null==e?[]:[e],rowItem:null==t?[]:[t]}}
function n(t,r){if(null==r)return t;var i=e.instance;if(0===r.length)return i;var n={};
return r.forEach(function(e){n[e]=1}),(o(t,n)||i).toDnf()}function o(e,t){if(e.isTerminal){
var r=e.isProperty&&!a(t,e.property);return r?null:e}if("not"===e.kind){var i=o(e.operand,t);
return i?i.negate():null}var n=[];return e.operands.each(function(e){var r=o(e,t);
r&&n.push(r)}),n.length?new e.constructor({operands:n}):null}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t);
}function s(e,t,r,i){if(-1!==e){var n=t.toDnf();if("or"===n.kind){var o=n.operands,a=o.count;
if(a>e){for(var s=i||0,l=[],u=0,p=[],d=0,c=0;c!==a;++c){var h=o.at(c),f=h.$contentKey;
if(s>0&&null!=r[f]?(l.push(h),++u,--s):(p.push(h),++d),u>=e||0===s&&u+d>=e)break}
var m=l;e>u&&m.push.apply(l,p.slice(0,e-u));var _=n.$type;return _.create({operands:m
})}}}return t}return{toAnalyzerSelectionFormat:t,restrictFilter:n,limitSelection:s
}}),define("analyzer/visual/Application",["pentaho/module!_","pentaho/visual/base/Application","./dataFilterUtils"],function(e,t,r){
"use strict";return t.extend({$type:{id:e.id},constructor:function(e){this.base(e),
this.cv=e&&e.cv},getDoubleClickTooltip:function(e){var t=this.cv.getActiveReport(),i=t._vizModelAdapter._convertFilterToExternal(e),n=t._restrictFilterToDrillOrder(i),o=r.toAnalyzerSelectionFormat(n);
return t.getDoubleClickTooltip(o&&o[0])}}).configure({$type:e.config})}),define("analyzer/visual/registry",["require","pentaho/lang/Base","pentaho/environment","pentaho/module/service","pentaho/module/metaService","pentaho/config/service","pentaho/util/object","pentaho/util/fun","pentaho/util/promise","./registry.legacy","./Application"],function(e,t,r,i,n,o,a,s,l,u){
"use strict";function p(e,t){var r=e.type,i=t.type;return s.compare(r.ordinal||1/0,i.ordinal||1/0)||s.compare(r.label,i.label);
}function d(e){return e?e.split(/\s*,\s*/).map(function(e){return parseInt(e,10)}):y.slice();
}function c(e,t){return{priority:-1,select:{application:t,module:e},apply:{props:{},
application:{}}}}function h(){return!this.rows.hasFields&&!this.columns.hasFields&&!this.measures.hasFields;
}var f="pentaho/visual/base/Model",m="pentaho/visual/base/ModelAdapter",_="pentaho/visual/base/View",v="analyzer_PIVOT",g=500,y=[100,150,200,250],b=/^viz\.(.+?)\.args.(.+?)$/,O=/^viz\.(.+?)\.maxValues$/;
return t.extend({constructor:function(){this._isLoaded=!1,this.__loadedPromise=null,
this.__allModels=null,this.__allModelsById=null},loadAsync:function(){var e=this.__loadedPromise;
return null===e&&(this._createConfiguration(cv.analyzerProperties),this.__loadedPromise=e=this.__getModelsAsync().then(this.__setModules.bind(this))),
e},__getModelsAsync:function(){return l.require(f,e).then(function(t){return Promise.all([l.require([m,_],e),this._registerPivotTableAsync(t,cvCatalog),u.importLegacyVisualizations(t,cv.pentahoVisualizations,cv.analyzerProperties)]);
}.bind(this)).then(function(){return i.getSubtypesOfAsync(f)})},__setModules:function(e){
var t=this.__allModelsById=Object.create(null);return this.__allModels=e.filter(function(e){
var r=e.type;return r.isAbstract?!1:(t[e.type.id]=e,!0)}),this._isLoaded=!0,this},
get isLoaded(){return this._isLoaded},_assertLoaded:function(){if(!this.isLoaded)throw new Error("Visualization registry is not yet loaded");
},isLegacyViz:function(e){return u.isLegacyViz(e)},get:function(e){return this._assertLoaded(),
e=u.toId(e),a.getOwn(this.__allModelsById,e,null)},create:function(e,t){return this.isLegacyViz(e)?u.create(e):new e(t);
},getAll:function(){return this._assertLoaded(),this.__allModels.slice()},getAllByCategory:function(){
var e=this.getAll(),t={};e.forEach(function(e){var r=e.type;if(r.isBrowsable){var i=r.category,n=a.getOwn(t,i);
n||(t[i]=n={category:i,models:[]}),n.models.push(e)}}),a.eachOwn(t,function(e){e.models.sort(p);
});var r=[],i={};return a.eachOwn(t,function(e){i[e.category]=e.models.reduce(function(e,t){
var r=t.type.ordinal;return null==r?e:r>e?e:r},1/0),r.push(e)}),r.sort(function(e,t){
var r=i[e.category],n=i[t.category];return s.compare(r,n)}),r},_registerPivotTableAsync:function(e,t){
var r=u.toId(v),i={};return i[r]={base:f,value:function(r){return e.extend({$type:{
id:r.id,v2Spec:{},v2Id:v,label:"Pivot Table",category:"pivot",description:"Analyzer Pivot Table",
ordinal:1e4,isBrowsable:!1,props:[{name:"rows",ordinal:1,label:t.dropZoneLabels_PIVOT_ROW,
base:"pentaho/visual/role/Property",modes:[{dataType:["string"]}],fields:{isRequired:h
}},{name:"columns",ordinal:2,label:t.dropZoneLabels_PIVOT_COL,base:"pentaho/visual/role/Property",
modes:[{dataType:["string"]}],fields:{isRequired:h}},{name:"measures",ordinal:3,label:t.dropZoneLabels_PIVOT_NUM,
base:"pentaho/visual/role/Property",modes:[{dataType:["number"]}],fields:{isRequired:h
}}],application:{showOptionsButton:!0}}}).configure({$type:r.config})}},n.configure(i).get(r).loadAsync();
},_createConfiguration:function(e){function t(e){e=u.toId(e);var t=a.getOwn(o,e);return t||(o[e]=t=c(e,l),
s.push(t)),t}function i(){var r=t(f),i=r.apply.application;i.maxValues=d(),i["filter.selection.max.count"]=+e["filter.selection.max.count"]||g;
var n=e["chart.options.keepLevelOnDrilldown"];"string"==typeof n&&(n="true"===n),
i.keepLevelOnDrilldown=!!n}function n(){for(var r in e)if(a.hasOwn(e,r)){var i,n=e[r];
(i=b.exec(r))?t(i[1]).apply.props[i[2]]={defaultValue:n}:(i=O.exec(r))&&(t(i[1]).apply.application.maxValues=d(n));
}}var o={},s=[],l=r.application;i(),n(),this._addConfiguration({rules:s})},_addConfiguration:function(e){
o.add(e)}})}),define("analyzer/cv_api_ui",["dojo/dom-construct","dijit/registry","dojo/dom-class","dojo/dom","dojo/query","dojo/dom-geometry","analyzer/cv_api_report_util","./visual/registry"],function(e,t,r,i,n,o,a,s){
var l=function(l){this._visualRegistry=new s,this._apiReportUtil=new a(l),this._msgs={
UNSUPPORTED_VIEW:function(e){return"View: '"+e+"' is not a supported field list view";
}},this._query=function(e,t){return n(e,t)},this._makeVisible=function(e){var t=e,r=new this._apiReportUtil.types._BooleanOptionType;
return r.validateValue("makeVisible",t),"string"==typeof e&&(t="true"===t),t},this._destroyWidgetsAndRefreshLayout=function(r){
r.forEach(e.destroy);var i=t.byId("borderContainer");i&&i.layout()},this._destroySeparatorIfEmptyPanel=function(t){
var r=i.byId(t);if(r){var n=this._query(".reportBtn",r);0==n.length&&this._query(".separator",r).forEach(e.destroy);
}},this._isRemovable=function(e){return void 0===e||e===!0||"true"===e},this._withinDomNode=function(e,t,r){
var i=o.position(r);return e>=i.x&&t>=i.y&&e<=i.x+i.w&&t<=i.y+i.h},this.isFromTransformation=!1,
this.getMode=function(){var e=l.report._getReport();if(e)return e.mode},this.showFieldLayout=function(e){
var t=l.report._getReport();if(t){l.util._validateModeForAPI(arguments.callee),e=this._makeVisible(e);
var r=cv.util.isShowing("layoutPanelWrapper");r!=e&&t.onToggleReportPane("cmdLayout");
}},this.showFilterPanel=function(e){var t=l.report._getReport();if(t){l.util._validateModeForAPI(arguments.callee),
e=this._makeVisible(e);var r=cv.util.isShowing(t.id+"Filter");r!=e&&t.onToggleReportPane("cmdFilters");
}},this.listVizIds=function(){for(var e,t=["pivot"],r=this._visualRegistry.getAll(),i=0;e=r[i];i++){
var n=e.type;"pentaho/visual/models/legacy/analyzer_PIVOT"!==n.id&&t.push(n.v2Spec?n.v2Id:n.id);
}return t},this.listGembarIds=function(){var e=[],t=l.report._getReport();return t&&null!==t._vizModelAdapter&&t._vizModelAdapter.$type.eachVisualRole(function(t){
e.push(t.name)}),e},this.removeFieldList=function(e){l.util._validateModeForAPI(arguments.callee),
this._isRemovable(e)&&(this._destroyWidgetsAndRefreshLayout(["fieldListWrapper","fieldListWrapper_splitter","cmdFields"]),
this._destroySeparatorIfEmptyPanel("layoutButtonsPanel"))},this.removeHeaderBar=function(e){
var t=l.report._getReport();t&&this._isRemovable(e)&&("EDIT"==this.getMode()?this._destroyWidgetsAndRefreshLayout([t.id+"Filter",t.id+"ReportSummary","cmdFilters"]):"VIEW"==this.getMode()&&this._destroyWidgetsAndRefreshLayout([t.id+"Filter",t.id+"ReportSummary",t.id+"CmdActions",t.id+"ReportName"]));
},this.disableFilterPanel=function(e){var t=l.report._getReport();t&&(l.util._validateModeForAPI(arguments.callee),
this._isRemovable(e)&&(this._destroyWidgetsAndRefreshLayout([t.id+"Filter",t.id+"FilterPaneTitle","cmdFilters"]),
this._destroySeparatorIfEmptyPanel("layoutButtonsPanel")))},this.removeUndoButton=function(e){
l.util._validateModeForAPI(arguments.callee),this._isRemovable(e)&&(this._destroyWidgetsAndRefreshLayout(["cmdUndoPanel"]),
this._destroySeparatorIfEmptyPanel("historyButtonsPanel"))},this.removeFieldLayout=function(e){
if(l.util._validateModeForAPI(arguments.callee),this._isRemovable(e)){this._destroyWidgetsAndRefreshLayout(["layoutPanelWrapper","layoutPanelWrapper_splitter","cmdLayout"]),
this._destroySeparatorIfEmptyPanel("layoutButtonsPanel");var t=l.report._getReport();
if(!t)return;t.manager.layoutPanel.topic.remove()}},this.removeRedoButton=function(e){
l.util._validateModeForAPI(arguments.callee),this._isRemovable(e)&&(this._destroyWidgetsAndRefreshLayout(["cmdRedoPanel"]),
this._destroySeparatorIfEmptyPanel("historyButtonsPanel"))},this.removeMainToolbar=function(e){
l.util._validateModeForAPI(arguments.callee),this._isRemovable(e)&&this._destroyWidgetsAndRefreshLayout(["reportBtns"]);
},this.setFieldListView=function(e){var t=l.report._getReport();if(t){l.util._validateModeForAPI(arguments.callee);
var r={CATEGORY:"CMDVIEWCATEGORY",NAME:"CMDVIEWNAME",TYPE:"CMDVIEWTYPE",SCHEMA:"CMDVIEWSCHEMA"
};r.hasOwnProperty(e)||l.log.error(this._msgs.UNSUPPORTED_VIEW(e),!0),t.manager.fieldHelp.sortFields(r[e]);
}},this.showRepositoryButtons=function(e){var t=l.report._getReport();if(t){l.util._validateModeForAPI(arguments.callee),
e=this._makeVisible(e);var n="repositoryButtonsPanel",o=i.byId(n),a=cv.util.isShowing(n);
o&&a!=e&&r.toggle(o,"hidden")}},this.removeReportActions=function(e){var t=l.report._getReport();
if(t&&(l.util._validateModeForAPI(arguments.callee),this._isRemovable(e))){var r=t.id+"ReportFormatCmdDiv";
this._destroyWidgetsAndRefreshLayout([r])}},this.showFieldList=function(e){var t=l.report._getReport();
if(t){l.util._validateModeForAPI(arguments.callee),e=this._makeVisible(e);var r=cv.util.isShowing("fieldListWrapper");
r!=e&&t.onToggleReportPane("cmdFields")}},this.setIsFromTransformation=function(e){
this.isFromTransformation=e}};return l}),define("analyzer/API",["analyzer/cv_api_report","analyzer/cv_api_operation","analyzer/cv_api_event","analyzer/cv_api_util","analyzer/cv_api_ui"],function(e,t,r,i,n){
var o=function(o){this.report=new e(this,o),this.ui=new n(this),this.operation=new t(this),
this.properties={},this.event=new r(this),this.util=new i(this);var a=this;this.log={
_showStatus:function(e,t){a.report._getReport().manager.showStatus(e,t)},info:function(e,t){
t&&this._showStatus(e,"INFO"),console.log("INFO: "+e)},warn:function(e,t){t&&this._showStatus(e,"WARNING"),
console.log("WARNING: "+e)},error:function(e,t,r){if(r&&this._showStatus(e,"ERROR"),
t)throw e;console.log("ERROR: "+e)}},this.event.registerRenderListener(function(e,t,r){
t.event._showDisabledEventTitle(t.event.isEventDisabled("tableDoubleClick"),'td[type="member"] div[enabledeventtitle]'),
t.event._showDisabledEventTitle(t.event.isEventDisabled("tableDoubleClick"),'td[type="member"][enabledeventtitle]');
})};return o}),define("API",function(){});