/*!
 * HITACHI VANTARA PROPRIETARY AND CONFIDENTIAL
 *
 * Copyright 2002 - 2018 Hitachi Vantara. All rights reserved.
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
define(function() {

  "use strict";

  var V3_BASE_ORDINAL = 1000000;
  var ANALYZER_APP_ID = "pentaho-analyzer";
  var DASHBOARD_DESIGNER_APP_ID = "pentaho-dashboards";

  var legacyCategoriesCCC = {
    "ccc_line": "misc1",
    "ccc_sunburst": "misc1",
    "ccc_area": "misc1",
    "ccc_pie": "misc1",
    "open_layers": "misc2",
    "ccc_scatter": "misc2",
    "ccc_heatgrid": "misc2"
  };

  var legacyCategoryRules = createCategoryRules(legacyCategoriesCCC, "pentaho/visual/models/legacy/");
  var stockVisualizationRule = createStockVizPropertyRule();

  var rules = [
    {
      priority: -1,
      select: {
        application: ANALYZER_APP_ID,
        type: "pentaho/ccc/visual/Abstract"
      },
      apply: {
        extension: {
          plotSizeMin: {width: 600, height: 300}
        }
      }
    },

    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        type: "pentaho/ccc/visual/Abstract"
      },
      apply: {
        extension: {
          clickable: true,
          selectable: true
        }
      }
    },
    {
      priority: Infinity,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/role/ExternalProperty"
      },
      deps: [
        "pentaho/type/ValidationError"
      ],
      apply: function(ValidationError) {
        return {
          // @override
          validateOn: function(modelAdapter) {
            var errors = this.base(modelAdapter);
            if(errors === null) {
              var mapping = modelAdapter.get(this);
              if(mapping.hasFields) {
                // Required, so must not be null.
                var data = modelAdapter.data;

                // Don't let downgrade fields such as a number field in
                // a role in a categorical mode.
                // `mode` Must be non-null, or it would not be valid.
                if(!mapping.mode.isContinuous) {
                  mapping.fieldIndexes.some(function(fieldIndex) {
                    // TODO: Ideally, we'd check the metadata of the field for an isKey attribute.
                    // Is it a measure?
                    if(data.getColumnType(fieldIndex) === "number") {
                      errors = [
                        // TODO: Localize.
                        new ValidationError("Cannot map measure to categorical role.")
                      ];

                      // break;
                      return true;
                    }

                    // continue;
                    return false;
                  });
                }
              }
            }

            return errors;
          }
        };
      }
    },

    // All Stock Vizs
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        type: "pentaho/visual/models/Abstract"
      },
      apply: {
        isBrowsable: true,
        ordinal: V3_BASE_ORDINAL // VizAPI 3.0 are pushed to the end of the list
      }
    },

    // Hide the Sample Calculator Visualization
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        type: [
          "pentaho/visual/samples/calc/Model"
        ]
      },
      apply: {
        isBrowsable: false
      }
    },

    // CCC / Stock visualizations
    {
      priority: -2,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        type: "pentaho/visual/models/Abstract"
      },
      deps: ["analyzer/vizApi.conf.helper"],
      apply: function(vizApiHelper) {
        return {
          application: {
            generateOptionsFromAnalyzerState: vizApiHelper.generateOptionsFromAnalyzerState,
            willOverflow: vizApiHelper.willPlotOverflow
          },
          props: {
            "multiChartOverflow": {
              isBrowsable: false
            },
            "labelsOption": {
              ordinal: 1,
              category: "labelStyle"
            }
          }
        }
      }
    },

    {
      priority: -2,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        type: "pentaho/visual/models/CartesianAbstract"
      },
      deps: ["analyzer/vizApi.conf.helper"],
      apply: function(vizApiHelper) {
        return {
          application: {
            willOverflow: vizApiHelper.willOverflow
          }
        }
      }
    },

    // region Actions
    {
      priority: -2,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/action/Select"
      },
      apply: {
        defaultSelectionMode: "toggle"
      }
    },
    {
      priority: -2,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/ccc/visual/Abstract"
      },
      apply: {
        instance: {
          _configureSelection: function() {
            // App not available when printing
            var app = this.model.application;
            if(app && app.cv) {
              var report = app.cv.getActiveReport();

              if (report.isChartSelectionsDisabled()) {
                this.options.selectable = false;
                if (this._validExtensionOptions) {
                  this._validExtensionOptions.selectable = false;
                }
                return;
              }
            }

            this.base();
          }
        }
      }
    },
    {
      priority: -2,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: [
          "pentaho/visual/models/CategoricalContinuousAbstract",
          "pentaho/visual/models/HeatGrid"
        ]
      },
      apply: {
        application: {
          selectionRestriction: ["columns", "rows"],
          drillOrder: ["columns", "rows"],
          hyperlinkOrder: ["columns", "rows"],
          keepLevelOnDrilldown: true
        }
      }
    },
    {
      priority: -2,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/PointAbstract"
      },
      apply: {
        application: {
          selectionRestriction: ["columns", "rows"],
          drillOrder: ["rows"],
          hyperlinkOrder: ["rows", "columns"],
          keepLevelOnDrilldown: true
        }
      }
    },
    {
      priority: -2,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/Pie"
      },
      deps: ["analyzer/vizApi.conf.helper"],
      apply: function(vizApiHelper) {
        return {
          application: {
            selectionRestriction: ["rows"],
            drillOrder: ["rows"],
            hyperlinkOrder: ["rows", "columns"],
            keepLevelOnDrilldown: true,
            willOverflow: vizApiHelper.willOverflow
          }
        }
      }
    },
    {
      priority: -2,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/MetricPointAbstract"
      },
      apply: {
        application: {
          // All but multi
          selectionRestriction: ["rows", "color", "x", "y", "size"],
          drillOrder: ["rows", "color", "x", "y", "size"],
          hyperlinkOrder: ["rows", "color", "x", "y", "size"],
          keepLevelOnDrilldown: true
        }
      }
    },
    {
      priority: -2,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/Sunburst"
      },
      deps: ["analyzer/vizApi.conf.helper"],
      apply: function(vizApiHelper) {
        return {
          application: {
            selectionRestriction: ["rows"],
            drillOrder: ["rows"],
            hyperlinkOrder: ["rows"],
            keepLevelOnDrilldown: true,
            willOverflow: vizApiHelper.willOverflow
          }
        }
      }
    },
    // endregion

    // region Per Viz Type
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/Bar"
      },
      apply: {
        ordinal: V3_BASE_ORDINAL + 10
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/BarStacked"
      },
      apply: {
        ordinal: V3_BASE_ORDINAL + 20
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/BarNormalized"
      },
      apply: {
        ordinal: V3_BASE_ORDINAL + 30
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/BarLine"
      },
      apply: {
        ordinal: V3_BASE_ORDINAL + 40,
        props: {
          "lineLabelsOption": {
            ordinal: 2,
            category: "labelStyle"
          }
        }
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/BarHorizontal"
      },
      apply: {
        ordinal: V3_BASE_ORDINAL + 50
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/BarStackedHorizontal"
      },
      apply: {
        ordinal: V3_BASE_ORDINAL + 60
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/BarNormalizedHorizontal"
      },
      apply: {
        ordinal: V3_BASE_ORDINAL + 70
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/Line"
      },
      apply: {
        category: "misc1",
        ordinal: V3_BASE_ORDINAL + 80
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/AreaStacked"
      },
      apply: {
        category: "misc1",
        ordinal: V3_BASE_ORDINAL + 90
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/Pie"
      },
      apply: {
        category: "misc1",
        ordinal: V3_BASE_ORDINAL + 100
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/Donut"
      },
      apply: {
        isBrowsable: false
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/Sunburst"
      },
      deps: ["pentaho/i18n!analyzer/resources/messages"],
      apply: function(bundle) {
        return {
          category: "misc1",
          ordinal: V3_BASE_ORDINAL + 110,
          props: {
            "sliceOrder": {
              ordinal: 11,
              category: "slices"
            },
            "emptySlicesHidden": {
              isBrowsable: true,
              defaultValue: true,
              ordinal: 12,
              category: "slices",
              label: bundle.get("dropZoneLabels_EMPTY_SLICES"),
              application: {
                checkedLabel: bundle.get("dropZoneLabels_SHOW_AS_GAPS")
              }
            }
          }
        }
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/Scatter"
      },
      apply: {
        // Hide the Scatter viz (no size role) | favoring the Bubble viz
        isBrowsable: false
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/Bubble"
      },
      apply: {
        category: "misc2",
        ordinal: V3_BASE_ORDINAL + 120,
        application: {
          maxValues: [1000, 2500, 5000, 10000]
        }
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/HeatGrid"
      },
      apply: {
        category: "misc2",
        ordinal: V3_BASE_ORDINAL + 130,
        props: {
          "shape": {
            category: "scale",
            ordinal: 23
          }
        },
        application: {
          maxValues: [500, 1000, 2000, 5000]
        }
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/samples/calc/Model"
      },
      apply: {
        ordinal: V3_BASE_ORDINAL + 140
      }
    },
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/visual/models/legacy/open_layers"
      },
      apply: {
        ordinal: V3_BASE_ORDINAL + 150
      }
    },
    // endregion

    // region Special Viz Sets
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: [
          "pentaho/visual/models/BarLine",
          "pentaho/visual/models/Line"
        ]
      },
      apply: {
        props: {
          "shape": {
            ordinal: 11,
            category: "lineStyle"
          },
          "lineWidth": {
            ordinal: 12,
            category: "lineStyle"
          }
        }
      }
    }, {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: [
          "pentaho/visual/models/HeatGrid",
          "pentaho/visual/models/MetricPointAbstract"
        ]
      },
      apply: {
        props: {
          "pattern": {
            category: "colorScale",
            ordinal: 20
          },
          "colorSet": {
            category: "colorScale",
            ordinal: 21
          },
          "reverseColors": {
            category: "colorScale",
            ordinal: 22
          }
        }
      }
    }, {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: [
          "pentaho/visual/models/Bar",
          "pentaho/visual/models/Line",
          "pentaho/visual/models/MetricPointAbstract"
        ]
      },
      apply: {
        props: {
          "trendType": {
            ordinal: 30,
            category: "trend"
          },
          "trendName": {
            ordinal: 31,
            category: "trend"
          },
          "trendLineWidth": {
            ordinal: 32,
            category: "trend"
          }
        }
      }
    },
    // endregion

    // region CCC views configurations
    // Heat Grid
    {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: "pentaho/ccc/visual/HeatGrid"
      },
      apply: {
        extension: {
          // Use composite/hierarchical axes
          axisComposite: true,

          // Y
          yAxisSizeMax: null
        }
      }
    },
    // endregion

    // region Dashboard Designer specific rules
    {
      priority: -1,
      select: {
        application: DASHBOARD_DESIGNER_APP_ID,
        module: "pentaho/ccc/visual/Abstract"
      },
      apply: {
        extension: {
          titleVisible: false
        }
      }
    },
    {
      priority: -1,
      select: {
        application: DASHBOARD_DESIGNER_APP_ID,
        module: [
          "pentaho/ccc/visual/CartesianAbstract",
          "pentaho/ccc/visual/BarHorizontal",
          "pentaho/ccc/visual/BarStackedHorizontal",
          "pentaho/ccc/visual/BarNormalizedHorizontal",
          "pentaho/ccc/visual/Pie"
        ]
      },
      apply: {
        extension: {
          contentMargins: {top: 0, right: 0, bottom: 0}
        }
      }
    },

    {
      priority: -1,
      select: {
        application: DASHBOARD_DESIGNER_APP_ID,
        module: [
          "pentaho/ccc/visual/Bar",
          "pentaho/ccc/visual/BarStacked",
          "pentaho/ccc/visual/BarNormalized",
          "pentaho/ccc/visual/PointAbstract",
          "pentaho/ccc/visual/BarLine",
          "pentaho/ccc/visual/Boxplot",
          "pentaho/ccc/visual/Waterfall"
        ]
      },
      apply: {
        extension: {
          xAxisSizeMax: "30%" // 90 / 300
        }
      }
    },

    {
      priority: -1,
      select: {
        application: DASHBOARD_DESIGNER_APP_ID,
        module: [
          "pentaho/ccc/visual/BarHorizontal",
          "pentaho/ccc/visual/BarStackedHorizontal",
          "pentaho/ccc/visual/BarNormalizedHorizontal"
        ]
      },
      apply: {
        extension: {
          yAxisSizeMax: "19.5%" // 117 / 600
        }
      }
    },

    {
      priority: -1,
      select: {
        application: DASHBOARD_DESIGNER_APP_ID,
        module: "pentaho/ccc/visual/HeatGrid"
      },
      apply: {
        extension: {
          xAxisSizeMax: "26.6%", // 80 / 300
          yAxisSizeMax: "13.3%" // 80 / 600
        }
      }
    }
    // endregion
  ];

  return {
    rules: legacyCategoryRules.concat(stockVisualizationRule, rules)
  };

  function createCategoryRules(categories, prefix) {
    return Object.keys(categories).map(function(vizId) {
      var category = categories[vizId];
      return {
        select: {
          application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
          module: prefix + vizId
        },
        apply: {
          category: category
        }
      };
    });
  }

  function createStockVizPropertyRule() {
    var stockVisualizations = [
      // Legacy Visualizations
      "pentaho/visual/models/legacy/ccc_bar",
      "pentaho/visual/models/legacy/ccc_barstacked",
      "pentaho/visual/models/legacy/ccc_horzbar",
      "pentaho/visual/models/legacy/ccc_horzbarstacked",
      "pentaho/visual/models/legacy/ccc_barnormalized",
      "pentaho/visual/models/legacy/ccc_horzbarnormalized",
      "pentaho/visual/models/legacy/ccc_barline",
      "pentaho/visual/models/legacy/ccc_line",
      "pentaho/visual/models/legacy/ccc_sunburst",
      "pentaho/visual/models/legacy/ccc_area",
      "pentaho/visual/models/legacy/ccc_pie",
      "pentaho/visual/models/legacy/ccc_scatter",
      "pentaho/visual/models/legacy/ccc_heatgrid",

      // CCC 3.0+ Visualizations
      "pentaho/visual/models/Abstract"
    ];

    return {
      priority: -1,
      select: {
        application: [ANALYZER_APP_ID, DASHBOARD_DESIGNER_APP_ID],
        module: stockVisualizations
      },
      apply: {
        application: {
          isStockVisualization: true
        }
      }
    };
  }
});
