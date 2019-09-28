/*!
 * HITACHI VANTARA PROPRIETARY AND CONFIDENTIAL
 *
 * Copyright 2002 - 2017 Hitachi Vantara. All rights reserved.
 *
 * NOTICE: All information including source code contained herein is, and
 * remains the sole property of Hitachi Vantara and its licensors. The intellectual
 * and technical concepts contained herein are proprietary and confidential
 * to, and are trade secrets of Hitachi Vantara and may be covered by U.S. and foreign
 * patents, or patents in process, and are protected by trade secret and
 * copyright laws. The receipt or possession of this source code and/or related
 * information does not convey or imply any rights to reproduce, disclose or
 * distribute its contents, or to manufacture, use, or sell anything that it
 * may describe, in whole or in part. Any reproduction, modification, distribution,
 * or public display of this information without the express written authorization
 * from Hitachi Vantara is strictly prohibited and in violation of applicable laws and
 * international treaties. Access to the source code contained herein is strictly
 * prohibited to anyone except those individuals and entities who have executed
 * confidentiality and non-disclosure agreements or other agreements with Hitachi Vantara,
 * explicitly covering such access.
 */

define(["common-ui/vizapi/VizController", "geo/openlayers_wrapper", "pentaho/common/Messages", "dojo/_base/array", "dojo/_base/declare"],
  function(VizController, wrapper, Messages, array, declare){

  analyzerPlugins = typeof analyzerPlugins == "undefined" ? [] : analyzerPlugins;

  analyzerPlugins.push(
      {
        init:function () {
          pentaho.common.Messages.addUrlBundle('pgeo',pentaho.openlayers.OpenLayersMap.buildUrl('i18n?plugin=pentaho-geo&name=resources/messages/messages'));

          // Register types to display in Analyzer
          if(!cv.pentahoVisualizations){
            cv.pentahoVisualizations = [];
          }
          cv.pentahoVisualizations.push(pentaho.visualizations.getById("open_layers"));

          cv.pentahoVisualizationHelpers["open_layers"] = {
            previousAction: null,
            canRefreshReport:function(report) {
              if (report.findGemsByGembarId("rows").length == 0)
                return false;
              if (report.findGemsByGembarId("color").length > 0 || report.findGemsByGembarId("size").length > 0)
                return true;
              return false;
            },
            generateOptionsFromAnalyzerState:function (report) {
              var userDefinedOpts = {};
              
              userDefinedOpts.sizeByNegativesMode = 
                  report.reportDoc.getChartOptions().getAttribute('sizeByNegativesMode');
              
              // set the last action taken
              if(report.visualization.args.configAction !== 'undefined' && report.visualization.args.configAction != null) {
                userDefinedOpts.action = "keepPanZoomState";
                report.visualization.args.configAction = null;
              } else if(report.history.current() != null) {
                var action = report.history.current().action;
                var inParamLinkMode = false;

                var filters = cv.getActiveReport().reportDoc.reportRecord.getElementsByTagName("predicate");
                array.forEach(filters, function(filter){
                  var paramname = filter.getAttribute("parameterName");
                  if(paramname){
                    if(window.location.href.indexOf("&"+paramname+"=") > 0){
                      inParamLinkMode = true;
                      return false;
                    }
                  }
                });

                if( inParamLinkMode ||                                  // filtered Param, extents change
                    action == "actionKeepSelectedItems" ||              // keep only
                    action == "actionRemoveSelectionFilters" ||         // removing selection filter
                    action == "actionChartType" ||                      // initial action to display the chart
                    action == "actionDrillIntoChart" ||                 // drill
                    ( action == "actionChartProps" && this.previousAction == "actionDrillIntoChart") ||
                    ( action == "actionOpenReport" &&                   // open a saved report
                        report.visualization.args.zoomState == null ) ) {
                  userDefinedOpts.action = "resetPanZoomState";
                } else if (action == "actionOpenReport" && report.visualization.args.zoomState != null) {
                  // set this to avoid autozooming if we are opening a report with saved zoomstate
                  userDefinedOpts.action = "keepPanZoomState";
                }
                this.previousAction = action;
              }
              return userDefinedOpts;
            }

          };

          declare("analyzer.OpenLayersConfig", [analyzer.ColorConfiguration], {
            onModelEvent:function (config, item, eventName, args) {
              if (eventName == "value") {
                // works by convention where the ids of the data req items match the property names
                this.report.visualization.args[item.id] = args.newVal;
                if(typeof(args.prevVal) != "undefined" && args.prevVal != args.newVal){
                  this.report.visualization.args.configAction = item.id + "Changed";
                }
              }
              this.inherited(arguments); // Let super class handle the insertAt and removedGem events
            },
            _setScalingType:function (scalingType) {

              this.report.visualization.args.scalingType = scalingType;
            },
            _setColorRange:function (range) {
              this.report.visualization.args.colorRange = range;
            },
            getConfiguration:function () {
              var config = this.inherited(arguments);
              return config;
            },
            updateConfiguration: function(config){
              var geo = config.byId("rows");
              var color = config.byId("color");
              var size = config.byId("size");
              var hasDisplayable = color.gems.length > 0 || size.gems.length > 0;
              color.required = !hasDisplayable;
              size.required = !hasDisplayable;

              array.forEach(this.report.visualization.dataReqs[0].reqs, function(item, i) {
                if(item.id == 'color' || item.id == 'size') {
                  item.required = !hasDisplayable;
                }
              });
            }

          });
          analyzer.LayoutPanel.configurationManagers["JSON_open_layers"] = analyzer.OpenLayersConfig;

        }
      }
  );
});
