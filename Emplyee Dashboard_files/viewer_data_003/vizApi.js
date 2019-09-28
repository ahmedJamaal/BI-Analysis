/*!
 * Copyright 2016 - 2018 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(["cdf/lib/CCC/pvc","cdf/lib/CCC/protovis"],function(){"use strict";function e(e){
return e.isOn()?e.color:n().toGrayScale(e.color)}function i(e,i){var t=i>=1e3,a=t+"|"+e,l=x[a];
if(!l){var s=e?"."+new Array(e+1).join("0"):".##",o="#,0"+s+(t?" A":"");l=n().data.numberFormat(o),
l.style(y),x[a]=l}return l}function t(){var e=this.delegate();if(e){e=e.rgb();var i=s(this);
!i.isActive&&i.isSelected<0?e=o().color(v):i.isActive&&i.isSelected>-1&&(e=e.hsl(),
e=e.lightness(.8*e.l))}return this.finished(e)}function a(){var e=this.delegate();
if(e){e=e.rgb();var i=s(this);i.isActive?i.isActive&&i.isSelected>0&&(e=e.hsl(),e=e.lightness(.8*e.l)):i.isSelected<0?(e=o().color(v),
e=e.alpha(.75)):e=e.alpha(.5)}return this.finished(e)}function l(){var e=this.delegate();
if(e){e=e.rgb();var i=s(this);!i.isActive&&i.isSelected<0?e=o().color(v):i.isActive&&i.isSelected>-1&&(e=e.hsl(),
e=e.lightness(.8*e.l))}return this.finished(e)}function s(e){var i=e.sign,t=e.scene;
return g.isSelected=i.showsSelection()&&t.anySelected()?t.isSelected()?1:-1:0,g.isActive=i.mayShowActive(t,!0)?1:0,
g}function n(){return p||(p=require("cdf/lib/CCC/pvc"))}function o(){return d||(d=require("cdf/lib/CCC/protovis"));
}var r=-5,c=-1,p=null,d=null,u="10px OpenSansRegular",h=117,x={},y={group:" ",abbreviations:["k","M","G","T","P","E","Z","Y"],
subAbbreviations:["m","µ","n","p","f","a","z","y"]},g={isSelected:0,isActive:0},v="rgb(234,234,234)";
return{rules:[{priority:1/0,select:{application:["pentaho-analyzer","pentaho-dashboards"],
module:"pentaho/visual/role/AbstractProperty"},deps:["pentaho/type/ValidationError"],
apply:function(e){return{validateOn:function(i){var t=this.base(i);if(null!==t)return t;
var a,l=i.get(this);if(!l.hasFields||void 0===(a=this.isVisualKeyEffective))return null;
for(var s=i.data,n=-1,o=l.fields,r=o.count;++n<r;){var c=o.at(n).name,p=s.getColumnIndexById(c);
s.isColumnKey(p)!==a&&(t=[new e("Visual role '"+this.name+"' cannot be mapped to non-key field '"+c+"'.")]);
}return t}}}},{priority:r,select:{module:["pentaho/visual/models/Line","pentaho/visual/models/BarLine"]
},apply:{props:{lineWidth:{defaultValue:2}}}},{priority:r,select:{module:"pentaho/visual/models/HeatGrid"
},apply:{props:{colorSet:{defaultValue:"blue"}}}},{priority:r,select:{module:"pentaho/visual/models/MetricPointAbstract"
},apply:{props:{colorSet:{defaultValue:"ryg"}}}},{priority:r,select:{module:"pentaho/ccc/visual/Abstract"
},apply:{extension:{margins:0,paddings:10,format:{number:{style:y}},multiChartMax:50,
errorMessage_visible:!1,noDataMessage_visible:!1,invalidDataMessage_visible:!1,plotFrameVisible:!1,
animate:!1,clickable:!0,selectable:!0,ctrlSelectMode:!1,hoverable:!0,groupedLabelSep:"~",
legendDrawLine:!1,color2AxisLegendDrawLine:!1,legendDrawMarker:!0,legendShape:"circle",
legendItemCountMax:20,legendSizeMax:"30%",legendOverflow:"collapse",legendPaddings:0,
legendMargins:0,legendItemSize:{height:30},legendItemPadding:{left:7.5,right:7.5,
top:0,bottom:0},legendTextMargin:6,legendArea_lineWidth:0,legendArea_strokeStyle:"#c0c0c0",
legend$Dot_ibits:0,legend$Dot_imask:"Hoverable",legend$Rule_ibits:0,legend$Rule_imask:"Hoverable",
legend:{scenes:{item:{labelText:function(){var e=this.base();return n().text.trimToWidthB(h,e,this.vars.font,"..");
}}}},legendClickMode:"toggleSelected",color2AxisLegendClickMode:"toggleSelected",
color3AxisLegendClickMode:"toggleSelected",legendLabel_textDecoration:null,legendDot_fillStyle:e,
legendDot_strokeStyle:e,legend2Dot_fillStyle:e,legend2Dot_strokeStyle:e,tooltipOffset:20,
titleVisible:!0,titleSize:30,titlePosition:"top",titleAlign:"center",titleAlignTo:"page-center",
titleFont:u,label_ibits:0,label_imask:"ShowsActivity"}}},{priority:r,select:{module:"pentaho/ccc/visual/CartesianAbstract"
},apply:{extension:{margins:0,paddings:0,contentMargins:{top:30,bottom:30},axisComposite:!1,
axisSizeMax:"50%",xAxisPosition:"bottom",yAxisPosition:"left",panelSizeRatio:.8,axisTitleVisible:!0,
axisTitleSizeMax:"20%",axisTitleLabel_textMargin:0,xAxisTitleAlign:"left",x2AxisTitleAlign:"left",
x3AxisTitleAlign:"left",yAxisTitleAlign:"top",y2AxisTitleAlign:"top",y3AxisTitleAlign:"top",
discreteAxisLabel_ibits:0,discreteAxisLabel_imask:"ShowsActivity|Hoverable",axisLabel_textMargin:10,
xAxisOverlappedLabelsMode:"rotatethenhide",xAxisLabelRotationDirection:"clockwise",
xAxisLabelDesiredAngles:[0,40*(Math.PI/180)],numericAxisTickFormatter:function(e,t){
return i(t,this.base)(e)},axisGrid:!1,continuousAxisGrid:!0,axisGrid_lineWidth:1,
axisGrid_strokeStyle:"#CCC",axisRule_lineWidth:1,axisRule_strokeStyle:"#999999",axisTicks:!0,
axisMinorTicks:!1,continuousAxisDesiredTickCount:5,continuousAxisLabelSpacingMin:2,
axisTicks_lineWidth:1,axisTicks_strokeStyle:"#999999",xAxisTicks_height:3,yAxisTicks_width:3
}}},{priority:r,select:{module:["pentaho/ccc/visual/Bar","pentaho/ccc/visual/BarStacked","pentaho/ccc/visual/BarNormalized","pentaho/ccc/visual/PointAbstract","pentaho/ccc/visual/BarLine","pentaho/ccc/visual/Boxplot","pentaho/ccc/visual/Waterfall"]
},apply:{extension:{xAxisSizeMax:90}}},{priority:r,select:{module:["pentaho/ccc/visual/Bar","pentaho/ccc/visual/BarStacked","pentaho/ccc/visual/BarNormalized","pentaho/ccc/visual/PointAbstract","pentaho/ccc/visual/BarLine","pentaho/ccc/visual/Waterfall","pentaho/ccc/visual/Boxplot","pentaho/ccc/visual/MetricPointAbstract"]
},apply:{extension:{yAxisSize:57,contentPaddings:{right:75}}}},{priority:r,select:{
module:"pentaho/ccc/visual/MetricPointAbstract"},apply:{extension:{xAxisSize:30,autoPaddingByDotSize:!0,
axisOffset:0,dot_lineWidth:0,dot_fillStyle:a}}},{priority:r,select:{module:"pentaho/ccc/visual/Bubble"
},apply:{extension:{sizeAxisRatio:.2,sizeAxisRatioTo:"minwidthheight",sizeAxisOriginIsZero:!0,
dot_lineWidth:function(){var e=this.panel.visualRoles.size.isBound()&&null==this.getSize()?this.delegate():0;
return this.finished(e)},dot_strokeStyle:a,dot_shapeSize:function(){var e=this.panel.visualRoles.size.isBound()?this.delegate():25;
return this.finished(e)},dot_DefaultVisible:function(){return this.finished(!0)}}
}},{priority:r,select:{module:"pentaho/ccc/visual/Scatter"},apply:{extension:{dot_shapeRadius:function(){
return this.finished(5)}}}},{priority:r,select:{module:["pentaho/ccc/visual/BarHorizontal","pentaho/ccc/visual/BarStackedHorizontal","pentaho/ccc/visual/BarNormalizedHorizontal"]
},apply:{extension:{xAxisPosition:"top",xAxisSize:30,yAxisSizeMax:h,contentMargins:{
right:30}}}},{priority:r,select:{module:"pentaho/ccc/visual/BarAbstract"},apply:{
extension:{barSizeRatio:.92,barSizeSpacing:2,barSizeMin:4,barSizeMax:150,bar_lineWidth:function(){
return this.finished(0)},bar_fillStyle:t}}},{priority:r,select:{module:"pentaho/ccc/visual/PointAbstract"
},apply:{extension:{axisOffset:0,tooltipOffset:15,xAxisGrid:!0,xAxisGrid_visible:function(){
return this.panel.axes.base.isDiscrete()?this.index>0:this.delegate()},xAxisGrid_left:function(){
var e=this.delegate();if(this.panel.axes.base.isDiscrete()){var i=this.panel.axes.base.scale.range().step/2;
return e-i}return e},linesVisible:!1}}},{priority:r,select:{module:["pentaho/ccc/visual/PointAbstract","pentaho/ccc/visual/BarLine"]
},apply:{extension:{pointDot_fillStyle:function(){var e=this.delegate(),i=this.scene,t=this.sign;
return t.showsInteraction()&&(t.mayShowNotAmongSelected(i)?e=t.mayShowActive(i,!0)?o().Color.names.darkgray.darker(2).alpha(.8):n().toGrayScale(e,-.3):t.mayShowActive(i,!0)&&(e="white")),
this.finished(e)},pointDot_strokeStyle:function(){var e=this.delegate(),i=this.scene,t=this.sign;
return t.showsInteraction()&&t.mayShowNotAmongSelected(i)&&(e=t.mayShowActive(i,!0)?o().Color.names.darkgray.darker(2).alpha(.8):n().toGrayScale(e,-.3)),
this.finished(e)},pointDot_lineWidth:function(){return this.finished(2)},pointLine_ibits:0,
pointLine_imask:"ShowsActivity"}}},{priority:r,select:{module:"pentaho/ccc/visual/AreaAbstract"
},apply:{extension:{linesVisible:!1}}},{priority:r,select:{module:"pentaho/ccc/visual/Area"
},apply:{extension:{area_fillStyle:a}}},{priority:r,select:{module:"pentaho/ccc/visual/AreaStacked"
},apply:{extension:{area_fillStyle:l}}},{priority:r,select:{module:"pentaho/ccc/visual/Pie"
},apply:{extension:{contentPaddings:0,contentMargins:{top:30},legendAlign:"center",
activeSliceRadius:0,valuesAnchor:"outer",valuesOptimizeLegibility:!0,titlePosition:"bottom",
slice_lineWidth:0,slice_strokeStyle:"white",slice_fillStyle:t}}},{priority:r,select:{
module:"pentaho/ccc/visual/Donut"},apply:{extension:{slice_innerRadiusEx:"60%"}}},{
priority:r,select:{module:"pentaho/ccc/visual/HeatGrid"},apply:{extension:{useShapes:!0,
colorScaleType:"linear",colorNormByCategory:!1,axisTitleSize:25,contentPaddings:{
right:98},axisRule_lineWidth:0,axisBandSpacing:5,xAxisPosition:"top",xAxisSizeMax:80,
xAxisLabelRotationDirection:"counterclockwise",yAxisSizeMax:80,dot_lineWidth:function(){
var e=null!=this.getSize()?0:this.delegate();return this.finished(e)},dot_strokeStyle:t,
dot_shapeRadius:function(){return this.finished(this.delegate())},dot_fillStyle:t
}}},{priority:r,select:{module:"pentaho/ccc/visual/Sunburst"},apply:{extension:{rootCategoryLabel:"",
legendAreaVisible:!1,valuesVisible:!0,valuesOverflow:"trim",valuesOptimizeLegibility:!0,
colorMode:"level",slice_strokeStyle:function(){return this.finished("white")},slice_lineWidth:function(){
return this.finished(2)},slice_fillStyle:t}}},{priority:r,select:{module:"pentaho/ccc/visual/Treemap"
},apply:{extension:{valuesVisible:!0}}},{priority:c,select:{application:"pentaho-det",
module:"pentaho/ccc/visual/Abstract"},apply:{extension:{selectable:!1}}},{priority:c,
select:{application:["pentaho-det","pentaho-cdf"],module:"pentaho/ccc/visual/Abstract"
},apply:{extension:{legendPosition:"top",legendAlign:"left",legendFont:u,legendLabel_textStyle:"#666"
}}},{priority:c,select:{application:"pentaho-cdf",module:"pentaho/ccc/visual/Abstract"
},apply:{extension:{valuesVisible:!1,valuesFont:u,legend$Dot_shapeSize:9,legend$Dot_lineWidth:2,
legendMarkerSize:8}}},{priority:c,select:{application:["pentaho-det","pentaho-cdf"],
module:"pentaho/ccc/visual/PointAbstract"},apply:{extension:{dotsVisible:!1,dot_shapeRadius:function(){
return this.finished(5)}}}},{priority:c,select:{application:["pentaho-det","pentaho-cdf"],
module:"pentaho/ccc/visual/CartesianAbstract"},apply:{extension:{axisFont:u,axisLabel_textStyle:"#666",
axisTitleSize:18,axisTitleFont:u,axisTitleLabel_textStyle:"#666"}}},{priority:c,select:{
application:"pentaho-cdf",module:"pentaho/ccc/visual/BarAbstract"},apply:{extension:{
label_textMargin:7}}},{priority:c,select:{application:["pentaho-analyzer","pentaho-det"],
module:"pentaho/ccc/visual/CartesianAbstract"},apply:{extension:{xAxisBandSizeMin:18,
yAxisBandSizeMin:30,discreteAxisLabelSpacingMin:0,discreteAxisTickFormatter:function(e,i){
return arguments.length>2?String(e):i}}}},{priority:c,select:{application:["pentaho-analyzer","pentaho-det"],
module:"pentaho/ccc/visual/HeatGrid"},apply:{extension:{xAxisBandSizeMin:30}}},{priority:c,
select:{application:"pentaho-cdf",module:"pentaho/ccc/visual/MetricPointAbstract"
},apply:{extension:{continuousColorAxisColors:["#FF0000","#FFFF00","#008000"]}}},{
priority:c,select:{application:"pentaho-cdf",module:"pentaho/ccc/visual/Bubble"},
apply:{extension:{sizeAxisUseAbs:!1}}}]}});