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


define(["cdf/components/BaseComponent", 'dashboards/pentaho-dashboard-controller', "dashboards/oss-module", "local!Ext"], function(BaseComponent){
  PentahoGridComponent = BaseComponent.extend( {
    ignoreFields : [ "grid" ],
    isDirty : false,
    setDirty : function(isDirty) {
      this.isDirty = isDirty;
    },
    getOutputParameters : function(){
      if(!this.columns) return [];
      if(!this.outputParameters || this.columns.length != this.outputParameters.length){
        this.refreshParameters();
      }
      return this.outputParameters;
    },
    setOutputParameters : function(outputParameters){
      if(!this.columns) return;
      if(outputParameters.length != this.columns.length) {
        //alert('setOutputParameters: expected ' + this.columns.length + ', got ' + outputParameters.length + ' items');
        return
      }
      if(this.outputParameters.length != outputParameters.length){
        this.refreshParameters();
      }
      for(var i=0; i< outputParameters.length; i++){
        this.setColumnContentLinkStatus(i, OutputParametersHelper.isParamEnabled(outputParameters[i]));
      }
    },
    getOutputParameterFromColumnIdx : function (idx, enabled){
      if(this.columns && this.columns.length > idx){
        var title = this.columns[idx].header;
        var id = OutputParametersHelper.getOutParameterUID(this, this.columns[idx].dataIndex);
        return OutputParametersHelper.newParam(title, enabled, id);
      }
      else return null;
    },
    //when grid is created
    refreshParameters : function(){
      var prevOutParams =this.outputParameters || [];
      if(this.columns){
        this.outputParameters = [];
        for(var i=0; i<this.columns.length;i++){
          var param = this.getOutputParameterFromColumnIdx(i, false);
          if(param != null){
            if(this.parameter && this.outColumnIdx == i){//replace old parameter with new version
              var paramId = param[OutputParametersHelper.OUT_PARAMS_ID_IDX]
              pentahoDashboardController.renameParameter(this.parameter, paramId);
              param[OutputParametersHelper.OUT_PARAMS_ENABLED_IDX] = true;
            }
            this.outputParameters.push(param);
          }
        }
      }

      //merge parameters
      WidgetHelper.overlayOutputParameters(this, prevOutParams);
//    for(var i=0; i<this.outputParameters.length; i++){
//      var name = this.outputParameters[i][0];
//      for(var y=0; y<prevOutParams.length; y++){
//        if(prevOutParams[y][0] == name){
//          this.outputParameters[i][1] = prevOutParams[y][1];
//          this.outputParameters[i][2] = prevOutParams[y][2];
//          break;
//        }
//      }
//    }
    },
    getValue : function(paramId, rowIdx) {
      var colDataId = OutputParametersHelper.getParameterInnerIdFromUID(this, paramId);
      if(colDataId != null && this.grid){
        var selectedRowIdx = (rowIdx != null && rowIdx >= 0)? rowIdx : this.grid.getSelectionModel().last;
        if(selectedRowIdx == null || selectedRowIdx == false || selectedRowIdx < 0 ) selectedRowIdx = 0;
        if(selectedRowIdx < this.grid.getStore().getTotalCount()) {
          return this.grid.getStore().getAt(selectedRowIdx).get(colDataId);
        } else {
          return null;
        }
      }
      else return null;
    },
    fireRow: function(rowIdx){
      //Firing content-links needs to be a two-step process in order to ensure that a component listening to .
      // multiple output params from the table receives both updated values. see (PDB-919)
      for(var i=0; i<this.outputParameters.length;i++){
        var param = this.outputParameters[i];
        if(OutputParametersHelper.isParamEnabled(param)){
          var paramId = param[OutputParametersHelper.OUT_PARAMS_ID_IDX];
          var value = this.getValue(paramId, rowIdx);
          this.dashboard.setParameter(paramId, value);
        }
      }

      for(var i=0; i<this.outputParameters.length;i++){
        var param = this.outputParameters[i];
        if(OutputParametersHelper.isParamEnabled(param)){
          var paramId = param[OutputParametersHelper.OUT_PARAMS_ID_IDX];
          var value = this.getValue(paramId, rowIdx);
          this.dashboard.fireChange(paramId, value, true);
        }
      }

    },
    setColumnContentLinkStatus : function (colIdx, enabled){
      if(this.outputParameters && this.outputParameters.length > colIdx){
        var prevEnabled = this.outputParameters[colIdx][OutputParametersHelper.OUT_PARAMS_ENABLED_IDX];
        if(enabled && !prevEnabled){
          //set default
          var paramId = this.outputParameters[colIdx][OutputParametersHelper.OUT_PARAMS_ID_IDX];
          var value = this.getValue(paramId);
          pentahoDashboardController.setParameterAndDefaultValue(null, paramId, value);
        }
        this.outputParameters[colIdx][OutputParametersHelper.OUT_PARAMS_ENABLED_IDX] = enabled;
      }
    },
    initColumnsAndFields: function(resultSet, width) {
      var cols = this.mqlQuery.cols[0]["org.pentaho.commons.metadata.mqleditor.beans.Column"];
      if (cols.type) cols = [cols];

      var headers = resultSet.headers, header,
          col, id, colid, colname, colinc,
          selectedAggType, aggName,
          numCols = cols.length,
          columnWidth = Math.floor((width -4) / numCols),
          uniqueIds = {},
          type, types = {
        FLOAT: "float",
        BOOLEAN: "boolean",
        NUMERIC: "int"
      }
          ;
      this.fields = [];
      this.columns = [];

      for (var i = 0; i < numCols; i++) {
        col = cols[i];
        header = headers[i].name;
        type = types[col.type];
        if (!type) type = "string";
        id = col.id;
        colid = id;
        colinc = 1;
        while (uniqueIds[colid]) {
          colid = id + '_' + colinc++;
        }
        uniqueIds[colid] = true;
        this.fields.push( {
          name : colid,
          type : type
        });
        selectedAggType = col.selectedAggType;
        if (selectedAggType === 'NONE') {
          colname = header;
        }
        else {
          aggName = pho_messages.getMessage("DataGrid.AGGREGATION_" + selectedAggType, selectedAggType);
          colname = pho_messages.getMessage("DataGrid.AGG_PATTERN", header + " (" + aggName + ")", header, aggName);
        }
        this.columns.push( {
          header : colname,
          width : columnWidth,
          sortable : true,
          dataIndex : colid
        });
      }
    },
    initGrid: function(resultSet, width, height) {
      var me = this;
      this.initColumnsAndFields(resultSet, width);

      // create the data store
      var store = new Ext.data.SimpleStore( {
        fields : this.fields,
        proxy : new Ext.ux.data.PagingMemoryProxy(resultSet.data),
        remoteSort: true
      });

      var setOutputValue = function(grid, rowIdx){
        if(this.outColumnIdx == null) return null;
        var row = grid.getStore().getAt(rowIdx);
        var colName = grid.getColumnModel().getDataIndex(this.outColumnIdx);
        var value = "";
        if (typeof(row) != 'undefined') value = row.get(colName);
        if (this.parameter) {
          this.getValue = function() {
            return value;
          };
          this.dashboard.processChange(this.name);
        }
        return value;
      }

      // create the Grid
      var pageSize = 20;
      this.grid = new Ext.grid.GridPanel( {
        store : store,
        columns : this.columns,
        stripeRows : true,
        height : height,
        width : width,
        bbar : new Ext.PagingToolbar( {
          pageSize : pageSize,
          displayInfo : true,
          emptyMsg : 'No data found',
          store : store
        }),
        autoSizeColumns : true,
        listeners : {
          cellclick : function(grid, rowIdx, colIdx){//for grid content linking
            if(OutputParametersHelper.hasOutputParameters(me)){
              me.fireRow(rowIdx);
            }
            else {
              setOutputValue(grid,rowIdx);
            }
          }
        }
      });

      if (!this.gridState) {
        this.gridState = {};
      }
      else {
        var state = this.gridState["grid-state"];
        if (state) {
          var tempGridState = state;
          this.gridState = tempGridState;
          var sortInfo = state.sortInfo;
          if (sortInfo) store.setDefaultSort(sortInfo.field, sortInfo.direction);
        }
      }
      var gridStateProvider = new GridStateProvider(this.gridState);
      this.grid.render(this.htmlObject);
      this.grid.restoreState(gridStateProvider);

      store.load( {
        params : {
          start : 0,
          limit : pageSize
        }
      });

      //set parameter
      if(this.parameter){
        //select first row
        var selModel = this.grid.getSelectionModel();
        if(!selModel.last){//no row selected
          selModel.selectFirstRow();//highlight first row in grid
          var firstValue = setOutputValue(this.grid,0);//change value and trigger update in listeners
          pentahoDashboardController.setParameterAndDefaultValue(previousParam, this.parameter, firstValue);
        }
      }
    },
    handleResponse: function(result){
      var me = this,
          resultSet = JSON.parse( result ),
          data = resultSet.data,
          htmlObject = document.getElementById(this.htmlObject),
          rect = getRectangle(htmlObject),
          width = rect.width, height = rect.height
          ;
      this.initGrid(resultSet, width, height);

      //Output parameter
      var previousParam = this.parameter;
      if(this.parameter){
        if(!OutputParametersHelper.hasOutputParameters(this)){
          //has old single output parameter that should be converted to new type
          this.refreshParameters();
        }
      }
    },
    doRequest: function(){
      var me = this;
      pho.dashboards.enableWaitCursor(true);
      this.updatingAsync = true;
      pentahoPost(
          "service",
          "command=dataGrid" +
              "&query=" + encodeURIComponent(this.mql) +
              "&parameters=" + encodeURIComponent(CreateParametersStream(this.parameters)),
          function(result) {
            try {
              me.handleResponse(result);
            }
            catch (e) {
              var message;
              if (result && result.indexOf("SqlOpenFormula.ERROR_0024") >= 0) {
                // we passed multiple values for a param to a comparison type that doesn't support that
                // strip the offending comparison type off of the message
                message = result.substring("SqlOpenFormula.ERROR_0024 - ".length, result.length).trim();
                var dialogTitle = pho_messages.getMessage("DashboardWizard.ERROR", "Error");
              } else {
                message = pho_messages.getMessage("DashboardWizard.ERROR_PARSING_GRID", "There is an error in your query. Please check the query and try again.");
              }
              document.getElementById(me.htmlObject).innerHTML = message;
            }
            me.updatingAsync = true;
            if (currentWidget != null) {
              PropertiesPanelHelper.updateContentLinkingPanel(currentWidget.name);
              pentahoDashboardController.setEditContentEnabledById(currentWidget.name.substr("widget".length), true);
            }
            pho.dashboards.enableWaitCursor(false);
          }
      );
    },
    update : function() {
      document.getElementById(this.htmlObject).innerHTML = "";
      if (!gridInitialized) initializeGrid();
      this.doRequest();
    },
    print: function(title) {
      var head = getHead(document).innerHTML,
          baseURI = getBaseUri(window),
          win = window.open("", "_blank"),
          doc = win.document
      ;
      doc.open();
      doc.writeln("<html>");
      doc.writeln(  "<head>");
      doc.writeln(    "<title>" + title + "</title>");
      doc.writeln(    "<base href=\"" + baseURI + "\"\/>");
      doc.writeln(    head.replace(/<title>.+<\/title>/ig, ""));
      doc.writeln(  "<\/head>");
      doc.writeln(  "<body style=\"height:100%\">");
      doc.writeln(    "<div id=\"grid\"></div>");
      doc.writeln(    "<script type=\"text\/javascript\">");
      doc.writeln(    "var xulDomJson = " + JSON.stringify(xulDomJson) + ";");
      doc.writeln(    "var dashboardJson = " + JSON.stringify(dashboardJson) + ";");
      doc.writeln(    "var store = new Ext.data.SimpleStore({");
      doc.writeln(      "fields:" + JSON.stringify(this.fields) + ",");
      doc.writeln(      "data:" + JSON.stringify(this.grid.getStore().proxy.data));
      doc.writeln(    "});");
      doc.writeln(    "var gridPanel = new Ext.grid.GridPanel({");
      doc.writeln(       "store: store,");
      doc.writeln(       "columns: " + JSON.stringify(this.columns) + ",");
      doc.writeln(       "width: " + this.grid.width + ",");
      doc.writeln(       "height: document.body.clientHeight");
      doc.writeln(    "});");
      doc.writeln(    "gridPanel.render(\"grid\");");
      doc.writeln(    "store.load();");
      doc.writeln(    "<\/script>");
      doc.writeln(    "<script type=\"text\/javascript\">");
      doc.writeln(      "window.onload=function(){printWindow();}");
      doc.writeln(    "<\/script>");
      doc.writeln(  "<\/body>");
      doc.writeln("<\/html>");
      doc.close();
    },
    resize : function() {

      var htmlObject = document.getElementById(this.htmlObject);
      if(!htmlObject){
        // Widget defined, but template does not have a space for it.
        return;
      }

      if (this.grid && this.grid.setWidth) {
        var widgetNum = this.htmlObject.substring(this.htmlObject.length - 1);
        var widgetPanel = document.getElementById("content-area-Panel_" + widgetNum);
        if(!widgetPanel){
          // Widget defined, but template does not have a space for it.
          return;
        }
        var rect = getRectangle(widgetPanel);

        this.grid.setWidth(rect.width);
        this.grid.setHeight(rect.height);
        var innerWidth = rect.width - 4;

        // the gridState.widths property is an object, not an array. This function calculates the number of widths it has
        var calcGridWidthLength = function(gridComponent){
          var len = 0;
          if(gridComponent.gridState && gridComponent.gridState.widths){
            for(prop in gridComponent.gridState.widths){
              len++;
            }
          }
          return len;
        }

        // If there are stored lengths, use those
        var totalStoredWidths = 0;
        var widthMap = {};
        var totalStoredWidth = 0;
        if(calcGridWidthLength(this) > 0){
          for ( var colId in this.gridState.widths) {
            totalStoredWidths++;

            var colIndex = this.grid.getColumnModel().getIndexById(colId.replace("_", ""));
            var savedWidth = parseInt(this.gridState.widths[colId]);
            totalStoredWidth += savedWidth;
            widthMap[""+colIndex] = savedWidth
            this.grid.getColumnModel().setColumnWidth(colIndex, savedWidth);
          }
          // If not all widths were stored, divy up the remaining space for them.
          if(totalStoredWidths < this.columns.length){
            var columnWidth = Math.floor((rect.width-4 - totalStoredWidth) / (this.columns.length -totalStoredWidths)) -/*scrollbar*/17;

            for ( var i = 0; i < this.columns.length; i++) {
              if(widthMap[""+i]){  //check to see if a width was set from stored values.
                continue;
              }
              this.grid.getColumnModel().setColumnWidth(i, columnWidth);
            }
          }
        } else {
          // expand columns to fill available area
          var columnWidth = Math.floor((rect.width-4) / this.columns.length);
          for ( var i = 0; i < this.columns.length; i++) {
            this.grid.getColumnModel().setColumnWidth(i, columnWidth);
          }
        }
      }
    },
    editWidget: function() {
      pho.dashboards.enableWaitCursor(true);
      try{
        window.parent.pho.showMqlEditorDialogWithQueryModel(currentWidget.mqlQueryString,
            new GridHelper.EditQueryGridCallback(currentWidget));
      } catch (e) { // Ignore "Same-origin policy" violation in embedded IFrame
        alert("ERROR-0017 - cannot show Mql Editor Dialog With Query Model embedded in an IFrame in different domain");
      }
    },
    createWidget: function() {
      var selectedWidgetIndex = pentahoDashboardController.getSelectedWidget();
      var wname = 'widget' + selectedWidgetIndex;

      var widget = pentahoDashboardController.cdfDashboard.getComponentByName(wname);

      if (widget) {
        pentahoDashboardController.cdfDashboard.removeComponent(wname);
      }

      var gridComp = new PentahoGridComponent();
      gridComp.htmlObject = currentWidget.htmlObject;
      gridComp.name = wname;
      gridComp.GUID = WidgetHelper.generateGUID();
      gridComp.type = "PentahoGridComponent";

      pentahoDashboardController.addComponent(gridComp);

      pho.dashboards.enableWaitCursor(true);
      try{
        window.parent.pho.showDatasourceSelectionDialog("dashboard-content", new function() {
          this.onFinish = function(domainId, modelId) {
            pho.dashboards.enableWaitCursor(true);
            window.parent.pho.showMqlEditorDialog(domainId, modelId, new GridHelper.EditQueryGridCallback(gridComp));
          }

          this.onCancel = function() {
          }

          this.onReady = function() {
            pho.dashboards.enableWaitCursor(false);
          }
        });
      } catch (e) { // Ignore "Same-origin policy" violation in embedded IFrame
        alert("ERROR-0017 - cannot show Datasource Selection Dialog embedded in an IFrame in different domain");
      }  
    },

    getGUID : function(){
      if(this.GUID == null){
        this.GUID = WidgetHelper.generateGUID();
      }
      return this.GUID;
    },

    type : "PentahoGridComponent",
    executeAtStart : true,
    iconClass: "tableIcon",
    // used in GWT properties panel
    iconImgSrc: '../../themes/' + active_theme + '/images/tableIcon.png',
    localizedName:'data_table_component_lbl',
    defaultLabel:'Data Table'
  });

  var GridHelper = {};

// callback from mql query editor to grid widget
  GridHelper.EditQueryGridCallback = function(gridComp) {

    // hold this widget until the user clicks OK on the query builder dialog (he might click cancel in which case we don't
    // overwrite currentWidget
    this.gridComp = gridComp;

    this.onFinish = function(mqlQueryModel) {
      // make the current widget the grid widget
      currentWidget = this.gridComp;

      var tempObj = JSON.parse( mqlQueryModel );
      currentWidget.mqlQuery = tempObj["MQLQuery"];
      currentWidget.mqlQueryString = mqlQueryModel;
      currentWidget.mql = currentWidget.mqlQuery.query;

      if(!currentWidget.hasOwnProperty('localizedName')) {
    	  currentWidget.localizedName = window.dashboard_messages.getMessage(currentWidget.localizedName, currentWidget.defaultLabel);
      }
      
      var newParams = [];

      if(currentWidget.mqlQuery.conditions){
        var conditions = WidgetHelper.getJsonMqlConditions(currentWidget.mqlQuery);// currentWidget.mqlQuery.conditions[0]["org.pentaho.commons.metadata.mqleditor.beans.Condition"];

        newParams = WidgetHelper.parseParameters(conditions);
      }

      if (!currentWidget.parameters) {
        currentWidget.parameters = [];
      }
      //multiple output
      if(!currentWidget.outputParameters){
        currentWidget.outputParameters = [];
      }

      //Fix for PDB-827. Always assign the default parameter from the MQL Query Editor.
      //WidgetHelper.assignParametersIfChanged(currentWidget, newParams);
      currentWidget.parameters = newParams;

      PropertiesPanelHelper.initPropertiesPanel();
    } // onFinish

    this.onCancel = function() {
    } // onCancel

    this.onReady = function() {
      pho.dashboards.enableWaitCursor(false);
    } // onReady
  }


  var gridInitialized = false;
  var initializeGrid = function() {

    Ext.grid.GridStateManager = function() {
      // default empty state
      this.state = {
        hidden : {},
        locked : {},
        widths : {}
      };
    };

    Ext.grid.GridStateManager.prototype = {
      init : function(grid, provider) {
        this.provider = provider;
        this.grid = grid;
        var state = provider.getState();
        if (state["grid-state"]) {
          state = state["grid-state"];
        }

        if (state) {
          state.hidden = state.hidden || {};
          this.state.hidden = state.hidden;
          for ( var colId in state.hidden) {

            var colIndex = this.grid.getColumnModel().getIndexById(colId.replace("_", ""));
            if (colIndex != undefined && colIndex >= 0) {
              this.grid.getColumnModel().setHidden(colIndex, state.hidden[colId]);
            }
          }
          state.locked = state.locked || {};
          this.state.locked = state.locked;
          for ( var colId in state.locked) {
            var colIndex = this.grid.getColumnModel().getIndexById(colId.replace("_", ""));
            if (colIndex != undefined && colIndex >= 0) {
              this.grid.getColumnModel().setLocked(colIndex, state.locked[colId]);
            }
          }
          state.widths = state.widths || {};
          this.state.widths = state.widths;
          var widthArray = [];

          var totalStoredWidths = 0;
          var widthMap = {};
          var totalStoredWidth = 0;

          for ( var colId in state.widths) {
            totalStoredWidths++;

            var colIndex = this.grid.getColumnModel().getIndexById(colId.replace("_", ""));
            var savedWidth = parseInt(state.widths[colId]);
            totalStoredWidth += savedWidth;
            widthMap[""+colIndex] = savedWidth
            this.grid.getColumnModel().setColumnWidth(colIndex, savedWidth);
          }
          // If not all widths were stored, divy up the remaining space for them.
          if(totalStoredWidths < this.grid.getColumnModel().getColumnCount()){
            var columnWidth = Math.floor((parseInt(this.grid.getGridEl().getWidth(true)) -totalStoredWidth) / (this.grid.getColumnModel().getColumnCount() -totalStoredWidths));

            for ( var i = 0; i < this.grid.getColumnModel().getColumnCount(); i++) {
              if(widthMap[""+i]){  //check to see if a width was set from stored values.
                continue;
              }
              this.grid.getColumnModel().setColumnWidth(i, columnWidth);
            }
          }


          //if (state.sortInfo) {
          //  alert("has sort info");
          // this.state.sortInfo = state.sortInfo;
          // this.grid.getDataSource().setDefaultSort(state.sortInfo.field, state.sortInfo.direction);
          // }
          if (state.colIds) {
            this.state.colIds = state.colIds;
            for ( var i = 0; i < state.colIds.length; i++) {
              var savedColId = state.colIds[i];
              var initialColIndex = this.grid.getColumnModel().getIndexById(savedColId);
              if (initialColIndex != undefined && initialColIndex > 0 && initialColIndex != i) {
                this.grid.getColumnModel().moveColumn(initialColIndex, i);
              }
            }
          }
        }
        grid.getColumnModel().on("hiddenchange", this.onHiddenChange, this);
        // for some reason the widthchange event on ColumnModel always gives width = undefined
        // so have to list to the event on the grid directly
        grid.on("columnresize", this.onColumnResize, this);
        grid.getColumnModel().on("columnlockchange", this.onLockChange, this);
        grid.getColumnModel().on("columnmoved", this.onColumnMove, this);
        grid.on('sortchange', this.onSort, this);
      },

      getStateKey : function() {
        return "grid-state";
      },

      storeState : function() {
        this.provider.set(this.getStateKey(), this.state);
      },

      onHiddenChange : function(cm, colIndex, hidden) {
        var colId = cm.getColumnId(colIndex);
        this.state.hidden["_" + colId] = hidden;
        this.storeState();
      },

      onColumnResize : function(colIndex, width) {
        var colId = this.grid.getColumnModel().getColumnId(colIndex);
        this.state.widths["_" + colId] = width;
        this.storeState();
      },

      onLockChange : function(cm, colIndex, lockState) {
        var colId = cm.getColumnId(colIndex);
        this.state.locked["_" + colId] = lockState;
        this.storeState();
      },

      onColumnMove : function(cm, oldIndex, newIndex) {
        // we do this one by saving array of current order of column ids
        var colIds = [];
        for ( var i = 0; i < cm.getColumnCount(); i++) {
          colIds.push(cm.getColumnId(i));
        }
        this.state.colIds = colIds;
        this.storeState();
      },

      onSort : function(grid, sortInfo) {
        if (sortInfo) {
          this.state.sortInfo = sortInfo;
          this.storeState();
        }
      }
    };

    Ext.apply(Ext.grid.GridPanel.prototype, {
      restoreState : function(provider) {
        var sm = new Ext.grid.GridStateManager();
        sm.init(this, provider);
      }
    });

    window.GridStateProvider = function(config) {
      GridStateProvider.superclass.constructor.call(this);
      if (!config) {
        config = {};
      }
      this.state = config;
      this.getState = function() {
        return this.state;
      }
    };

    Ext.extend(GridStateProvider, Ext.state.Provider, {
      // private
      set : function(name, value) {
        this.state[name] = value;
      },

      // private
      clear : function(name) {
        this.state[name] = null;
      },

      get : function(name) {
        return this.state[name];
      }
    });
  }

  Ext.namespace("Ext.ux");
  Ext.namespace("Ext.ux.data");

  Ext.ux.data.PagingMemoryProxy = function(data, config) {
    Ext.ux.data.PagingMemoryProxy.superclass.constructor.call(this);
    this.data = data;
    Ext.apply(this, config);
  };

  Ext.extend(Ext.ux.data.PagingMemoryProxy, Ext.data.MemoryProxy, {
    customFilter : null,
    start: 0,
    limit: 10,

    load : function(params, reader, callback, scope, arg) {
      params = params || {};
      var result;
      try {
        result = reader.readRecords(this.data);
      } catch (e) {
        this.fireEvent("loadexception", this, arg, null, e);
        callback.call(scope, null, arg, false);
        return;
      }

      // filtering
      if (this.customFilter != null) {
        result.records = result.records.filter(this.customFilter);
        result.totalRecords = result.records.length;
      } else if (params.filter !== undefined) {
        result.records = result.records.filter( function(el) {
          if (typeof (el) == "object") {
            var att = params.filterCol || 0;
            return String(el.data[att]).match(params.filter) ? true : false;
          } else {
            return String(el).match(params.filter) ? true : false;
          }
        });
        result.totalRecords = result.records.length;
      }

      // sorting
      if (scope.sortInfo !== undefined) {
        // use integer as params.sort to specify column, since arrays are not named
        // params.sort=0; would also match a array without columns
        var dir = String(scope.sortInfo.direction).toUpperCase() == "DESC" ? -1 : 1;
        var fn = function(r1, r2) {
          return r1 == r2 ? 0 : r1 < r2 ? -1 : 1;
        };
        var st = reader.recordType.getField(scope.sortInfo.field).sortType;
        result.records.sort( function(a, b) {
          var v = 0;
          if (typeof (a) == "object") {
            v = fn(st(a.data[scope.sortInfo.field]), st(b.data[scope.sortInfo.field])) * dir;
          } else {
            v = fn(a, b) * dir;
          }
          if (v == 0) {
            v = (a.index < b.index ? -1 : 1);
          }
          return v;
        });
      }

      // paging (use undefined cause start can also be 0 (thus false))
      if (params.start !== undefined && params.limit !== undefined) {
        result.records = result.records.slice(params.start, params.start + params.limit);
        this.start = params.start;
        this.limit = params.limit;
      }

      callback.call(scope, result, arg, true);
    }
  });

  require(["dashboards/dashboard-module"], function(){
    PentahoDashboardController.registerWidgetType(new PentahoGridComponent());
  });

});
