define("analyzer/vizApi.conf.helper",[],function(){"use strict";function e(e){for(var a=i.propsImpliedDefault(),t=e.reportDoc.getChartOptions().attributes,o=0,r=t.length;r>o;o++){
var l=t[o],s=l.nodeName;if(!i.isIgnoredChartOption(s)){var c=l.nodeValue;switch(s){
case"autoRange":case"autoRangeSecondary":case"showLegend":c="true"===c;break;case"sizeByNegativesMode":
c=n(c);break;case"legendPosition":case"displayUnits":case"displayUnitsSecondary":
case"backgroundFill":case"labelStyle":case"legendStyle":case"multiChartRangeScope":
case"emptyCellMode":c&&(c=c.toLowerCase());break;case"maxChartsPerRow":c=parseFloat(c);
}a[s]=c}}return a}function a(e){switch(e){case"vizApiVersion":case"customChartType":
case"chartType":case"maxValues":case"lineShape":case"lineWidth":case"scatterPattern":
case"scatterColorSet":case"scatterReverseColors":return!0}return!1}function t(){return{
legendPosition:"right",showLegend:!0,autoRange:!0,displayUnits:"units_0",autoRangeSecondary:!0,
displayUnitsSecondary:"units_0",backgroundColor:"#ffffff",labelColor:"#000000",labelSize:"12",
backgroundFill:"none",maxChartsPerRow:3,backgroundColorEnd:"#ffffff",labelStyle:"plain",
legendBackgroundColor:"#ffffff",legendSize:"12",legendColor:"#000000",legendStyle:"plain",
labelFontFamily:"Default",legendFontFamily:"Default",multiChartRangeScope:"global",
sizeByNegativesMode:"negLowest",emptyCellMode:"gap",valueAxisLowerLimit:null,valueAxisLowerLimitSecondary:null,
valueAxisUpperLimit:null,valueAxisUpperLimitSecondary:null}}function n(e){switch(e){
case"NEG_LOWEST":return"negLowest";case"USE_ABS":return"useAbs"}}function o(e,a,t){
var n=r(e,a,t),o=e&&e.domContainer,i=o&&o.scrollHeight>t,l=o&&o.scrollWidth>a;return{
vertical:n.vertical||i,horizontal:n.horizontal||l}}function r(e,a,t){var n=e.$type.extensionEffective&&e.$type.extensionEffective.plotSizeMin;
return{vertical:n&&n.height>t,horizontal:n&&n.width>a}}var i={generateOptionsFromAnalyzerState:e,
isIgnoredChartOption:a,propsImpliedDefault:t,convertSizeByNegativesMode:n,willPlotOverflow:r,
willOverflow:o};return i}),define("vizApi.conf.helper",function(){});