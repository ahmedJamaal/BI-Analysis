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

define([
  "geo/featureTypes",
  "common-ui/vizapi/VizController",
  "pentaho/common/Messages",
  "geo/pentahogeoclient"
], function(defaultTypes) {


  pentaho = typeof pentaho == "undefined" ? {} : pentaho;

  pentaho.visualizations = pentaho.visualizations || [];

  pentaho.openlayers = pentaho.openlayers || {};

  /*
   THe constructor takes as a parameter the HTML element that the visualization should
   be displayed within
   */
  pentaho.openlayers.OpenLayersMap = function( element ) {
    this.element = element;         // the div to display the map within
    this.dataTable = null;          // the raw data
    this.options = {};              // the display options
    this.selections = [];           // array of currently highlighted objects
    this.initDone = false;          // have we done the init function yet?
    this.vectorLayer = null;        // our layer for the geocoded features
    this.features = [];             // our geocoded features
    this.featureType = 'Country';   // the type of features being displayed, e.g. 'Country'
    this.featureMap = {};           // a map between feature names and the feature objects
    this.featureTypeMap = {};       // a map between lowercase feature types and known feature types
    this.featureNameMap = {};       // a map between localized feature alias and known feature types
    this.doubleClick = false;       // are we in double click mode
    this.clickPending = false;      // click detection prior to timeout for doubleclick
    this.pendingPanLonLat = null;   // do we have a pending pan action
    this.slideFactor = 100;         // how far to pan using the pan buttons
    this.maxBubbleSize = 25;        // maximum bubble size
    this.minBubbleSize = 5;         // minimum bubble size
    this.defaultBubbleSize = 10;    // used when no size-by data is available
    this.sizeAxisUseAbs = false;    // the size by values are passed through "abs"
    this.showHoverTips = true;      // should we show hover tips
    this.mode = 'pan';              // the current mode 'pan', 'poly', or 'zoom'
    this.autoExtents = true;        // should the map automatically pan and zoom to fit the current data?
    this.pendingSelections = [];     // array of features to select
    this.hasPannedOrZoomed = false;
    this.colorColumn = -1;
    this.sizeColumn = -1;
  }

  pentaho.openlayers.OpenLayersMap.prototype.getLocaleString = function(key, substitutionVars) {
    var str = pentaho.common.Messages.getString(key, substitutionVars);
    // enable this line to test localization - it puts [[ and ]] around every localizaed string
    if(this.localizeTest) {
      str = (key == 'defaultPageFormat') ? str : (str == key) ? key : '[['+str+']]';
    }
    return str;
  }

  /*
   Initialize open layers
   */

  pentaho.openlayers.OpenLayersMap.initMessages = function() {
    pentaho.common.Messages.addUrlBundle('pgeo-geonames',pentaho.openlayers.OpenLayersMap.buildUrl('i18n?plugin=pentaho-geo&name=resources//messages/geonames'));
    pentaho.common.Messages.addUrlBundle('pgeo',pentaho.openlayers.OpenLayersMap.buildUrl('i18n?plugin=pentaho-geo&name=resources//messages/messages'));
  }

  pentaho.openlayers.OpenLayersMap.prototype.init = function(mapElementId) {

    if(this.initDone) {
      return;
    }


    pentaho.openlayers.OpenLayersMap.initMessages();

    this.featureTypes = defaultTypes.getFeatureTypes();

    // setup the list of known geographic names
    // inject localization strings into UI elements using a naming convention
    var namesBundle = pentaho.common.Messages.messageBundle["pgeo-geonames"];
    if(typeof(namesBundle) != 'undefined') {
      for( key in namesBundle ) {
        var featureName = this.getLocaleString(key).toLowerCase();
        // remove the prefix
        var feature = key.substr('pgeo-geonames.'.length);
        // pull off the index
        feature = feature.substr(0, feature.length-1);
        this.featureNameMap[featureName] = feature;
      }
    }

    this.featureMap = {};
    // fill the feature type map
    for( var idx=0; idx<this.featureTypes.length; idx++) {
      this.featureTypeMap[this.featureTypes[idx]] = idx;
      this.featureTypeMap[this.featureTypes[idx].toLowerCase()] = idx;
    }

    internalThis = this;

    // create the custom cross shape, if not created yet
    if(!OpenLayers.Renderer.symbol['pentaho-geo-cross']){
        // A cross with no fill
        OpenLayers.Renderer.symbol['pentaho-geo-cross'] =
            [5,0, 5,5, 10,5, 5,5, 5,10, 5,5, 0,5, 5,5, 5,0];
    }

    // create the projections to use
    this.wgs84 = new OpenLayers.Projection("EPSG:4326");
    this.mapProjection = new OpenLayers.Projection("EPSG:900913");

    // create the main DIV
    this.canvasDiv = document.createElement('DIV');
    this.canvasDiv.setAttribute('id',mapElementId);
    this.canvasDiv.setAttribute('style','width:'+(this.element.offsetWidth)+'px; height:'+(this.element.offsetHeight)+'px');
    this.element.appendChild(this.canvasDiv);

    // create the control DIV
    this.controlDiv = document.createElement('DIV');
    this.controlDiv.setAttribute('id','wrapper_map_control');
    this.controlDiv.setAttribute('style','padding: 0px; position: absolute; border: 0px solid #888888;z-index: 2010; width: 60px; top: 8px; left:10px; display: block;');
    this.element.appendChild(this.controlDiv);

    internalThis = this;

    // create the style template for the feature layer
    var template = {
      'pointRadius': '${radius}',
      'fillColor': '${color}',
      'strokeColor': '${borderColor}',
      'fillOpacity': '0.5',
      'strokeOpacity': '${borderOpacity}',
      'strokeDashstyle': '${borderDashstyle}',
      'graphicName':     '${shape}', // for changing the shape of the Point to a cross
      'rotation':        '${shapeRotation}' // idem, for rotating the cross
    };
    this.styleMap = new OpenLayers.StyleMap(template);
    var proj = this.mapProjection;

    // create the vector layer for the geocoded features
    this.vectorLayer = new OpenLayers.Layer.Vector(this.getLocaleString("pgeo.pentaho_layer_name"), {
      styleMap: this.styleMap
    });

    // create the map object
    options = {
      projection: proj,
      controls: []
    }
    if(this.map != null) {
      var baseLayer = this.map.baseLayer.name;
    } else {
      var baseLayer = pentaho.visualizations.getById("open_layers").args.baseLayer
    }

    this.map = new OpenLayers.Map(mapElementId, options);

    // add the base layers
    var mapLayers = pentaho.openlayers.getMapLayers();
    this.map.addLayers(mapLayers);

    // if addUnderLayers has been implemented, call it
    if( pentaho.openlayers.addUnderLayers ) {
        pentaho.openlayers.addUnderLayers( this );
    }

    var layers = this.map.getLayersByName(baseLayer);
    if(layers != null && layers.length > 0) {
      this.map.setBaseLayer(layers[0]);
    }

    // create the control for clicking on and mousing over features
    this.clickSelector = new OpenLayers.Control.SelectFeature(this.vectorLayer, {
      clickout: true, toggle: true,
      multiple: true, hover: false,
      box: false,
      title:'',
      callbacks: {
        over: function() {
          return internalThis.featureMouseOver.apply(internalThis,arguments);
        },
        out: function() {
          return internalThis.featureMouseOut.apply(internalThis,arguments);
        },
        clickout: function() {
          return internalThis.clickOut.apply(internalThis,arguments);
        },
        click: function(){
          internalThis.clickPending = true;
          internalThis.pendingSelections.push(arguments[0]);
          if(internalThis.featureTimer){
            clearTimeout(internalThis.featureTimer);
            internalThis.doubleClick = true;
            return internalThis.featureDoubleClicked.apply(internalThis, arguments);
          }
          internalThis.doubleClick = false;
          internalThis.featureTimer = setTimeout('internalThis.featureSelected()', 301);
        },
        dblclick: function(){
          // ANALYZER-1174 - no longer need a double click callback from OL, we manage it on our own


          // except in IE, we still need this...
          // ANALYZER-1177 - IE9: Double click on chart to drilldown or update linked content does not work
          if(dojo.isIE > 0) {
            internalThis.doubleClick = true;
            return internalThis.featureDoubleClicked.apply(internalThis, arguments);
          }
        }
      }
    } );
    var featureHandler = new OpenLayers.Handler.Feature(
        this.clickSelector, this.clickSelector.layer, this.clickSelector.callbacks,
        {geometryTypes: this.clickSelector.geometryTypes});
    this.clickSelector.handlers.feature = featureHandler;

    // create a control for selecting with a box tool
    this.boxSelector = new OpenLayers.Control.SelectFeature(this.vectorLayer, {
          clickout: false,
          toggle: false,
          multiple: true,
          hover: false,
          box: true
        }
    );

    var boxFeatureHandler = new OpenLayers.Handler.Feature(this.boxSelector, this.boxSelector.layer, {});

    // override the mouseup on this to switch back into pan mode
    OpenLayers.Util.extend(boxFeatureHandler, {
      mouseup: function(evt) {
        // this function is being called before the special onmouseup listener below, causing the
        // mode to be in "pan". We make the boxSelectionComplete later for Mobile.
        if(!pentaho.geo.isMobile()) {
          return internalThis.boxSelectionComplete.apply(internalThis, arguments);
        }
      }
    });

    this.boxSelector.handlers.feature = boxFeatureHandler;
    OpenLayers.Util.extend(this.boxSelector, {
      onSelect: function() {
        // add the selection to the list of pending selections
        // console.log("adding item to pendingSelections " + arguments[0]);
        internalThis.pendingSelections.push(arguments[0]);

        // ** when the box selection is complete, the featureSelected function will be called
      }
    });

    this.map.addLayer(this.vectorLayer);

    // if addOverLayers has been implemented, call it
    if( pentaho.openlayers.addOverLayers ) {
        pentaho.openlayers.addOverLayers( this );
    }

    if(pentaho.geo.isMobile()) {
      OpenLayers.Util.extend(this.boxSelector.handlers.box.callbacks, {
        done: function(bounds){
          console.log("boxSelection.done called");
          internalThis.startPixel = null;
          internalThis.endPixel = null;
          internalThis.boxSelector.selectBox(bounds);
        }
      });

      var mouseEventTarget = dojo.byId("borderContainer");
      dojo.connect(mouseEventTarget, 'onmouseup', function(event) {
        // console.log("__mouseEventTarget mouseup called, firing dragHandler mouseup__");

        // Convert event coordinates that are relative to the document body to
        // ones that are relative to the map viewport
        var pos = OpenLayers.Util.pagePosition(internalThis.map.div);

        internalThis.endPixel = new OpenLayers.Pixel(event.x-pos[0], event.y-pos[1]);
        if(internalThis.mode == 'poly') {
          internalThis.boxSelector.handlers.box.endBox(internalThis.endPixel);
          var newEvent = document.createEvent("MouseEvent");
          var newTarget = internalThis.vectorLayer.div; //dojo.byId("zoomBox");
          newEvent.initMouseEvent('mouseup', true, true, window, 1, event.screenX, event.screenY, event.clientX, event.clientY, false, false, false, false, 0, null);

          newTarget.dispatchEvent(newEvent);
        } else if(internalThis.mode == 'zoom') {
          internalThis.zoomControl.handler.endBox(internalThis.endPixel);
        }

        internalThis.startPixel = null;
        internalThis.endPixel = null;

        // put us back in "pan" mode
        return internalThis.boxSelectionComplete.apply(internalThis, arguments);
      });

      var mouseDownEventTarget = dojo.byId(this.vectorLayer.id+"_svgRoot");
      dojo.connect(mouseDownEventTarget, 'onmousedown', function(event) {
        internalThis.startPixel = new OpenLayers.Pixel(event.x, event.y);
        if(internalThis.mode == 'poly'){
          internalThis.boxSelector.handlers.box.startBox(internalThis.startPixel);
        } else if(internalThis.mode == 'zoom') {
          internalThis.zoomControl.handler.startBox(internalThis.startPixel);
        }
      });
    }

    zoom = new OpenLayers.Control.ZoomBox( {title:"Zoom box: Selecting it you can zoom on an area by clicking and dragging."});
    this.zoomControl =  new OpenLayers.Control.ZoomBox( {title:"Zoom box: Selecting it you can zoom on an area by clicking and dragging."});
    zoom.setMap(this.map);
    OpenLayers.Util.extend(this.zoomControl, {
      zoomBox: function(bounds) {
        var ret = zoom.zoomBox(bounds);
        internalThis.boxSelectionComplete.apply(internalThis, arguments);
        return ret;
      }
    });

    this.layerSwitcher = new OpenLayers.Control.LayerSwitcher( {title: this.getLocaleString("pgeo.layer_switcher_hint")});
    this.layerSwitcher.roundedCornerColor = "#000000";
    var navOptions = {
      title: 'Pan and Zoom'
    };
    this.navigationControl = new OpenLayers.Control.Navigation( navOptions );


    this.map.addControl(this.navigationControl);
    this.map.addControl(this.zoomControl);
    this.map.addControl(this.boxSelector);
    this.map.addControl(this.layerSwitcher);
    this.map.addControl(this.clickSelector);

    this.clickSelector.activate();

    this.zoom = 2;
    this.center = this.map.getCenter();

    var imagesPath = '/content/pentaho-geo/resources/web/images';

    // create the control panel HTML
    var html = '<div id="map_nav" style="padding: 0px; position: absolute; z-index: 2010; width: 60px; top: 8px; left:10px; display: block;">';
    html += '<div id="pan_controls">';
    html += '<div id="pan_up"><img id="geo_panup" width="18" height="16" src="'+pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/map-pan-up.png')+'" style="cursor:pointer" title="'+this.getLocaleString("pgeo.panUp")+'"/></div>';
    html += '<div id="pan_left" ><img id="geo_panleft" height="18" width="16" src="'+pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/map-pan-left.png')+'" style="cursor:pointer" title="'+this.getLocaleString("pgeo.panLeft")+'"/></div>';
    html += '<div id="pan_right"><img id="geo_panright" height="18" width="16" src="'+pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/map-pan-right.png')+'" style="cursor:pointer" title="'+this.getLocaleString("pgeo.panRight")+'"/></div>';
    html += '<div id="pan_center"><img id="geo_zoomreset" src="'+pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/map-pan-zoomout.png')+'" height="12" width="12" style="cursor:pointer" title="'+this.getLocaleString("pgeo.zoomReset")+'"/></div>';
    html += '<div id="pan_down"><img id="geo_pandown" width="18" height="16" src="'+pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/map-pan-down.png')+'" style="cursor:pointer" title="'+this.getLocaleString("pgeo.panDown")+'"/></div>';
    html += '</div>';
    html += '<div id="control_container">&nbsp;</div>';
    html += '<div id="map_controls">';
    html += '<table cellpadding="0" cellspacing="0" style="width:31px; padding:0px; margin:0px">';
    html += '<tbody>';
    html += '<tr>';
    html += '<td style="text-align:center"><img id="geo_zoomin" src="'+pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/btn-map-zoom-in.png')+'" width="23" height="23" style="cursor:pointer" title="'+this.getLocaleString("pgeo.zoomIn")+'"></td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td style="text-align:center"><img id="geo_zoomout" src="'+pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/btn-map-zoom-out.png')+'" width="23" height="23" style="cursor:pointer" title="'+this.getLocaleString("pgeo.zoomOut")+'"></td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td style="text-align:center"><img id="geo_zoommode" src="'+pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/btn-map-drag-zoom-in.png')+'" width="23" height="23" style="cursor:pointer" title="'+this.getLocaleString("pgeo.zoom_mode_hint")+'"></td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td style="height:7px"></td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td style="text-align:center"><img id="geo_polymode" src="'+pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/btn-map-drag-select.png')+'" width="23" height="23" style="cursor:pointer" title="'+this.getLocaleString("pgeo.select_mode_hint")+'"></td>';
    html += '</tr>';
    html += '</tbody>';
    html += '</table>';
    html += '</div>';
    html += '</div>';

    this.controlDiv.innerHTML = html;

    // hook up the control panel events
    document.getElementById('geo_panup').onclick = function() {return internalThis.panMap.apply(internalThis,['up']);};
    document.getElementById('geo_pandown').onclick = function() {return internalThis.panMap.apply(internalThis,['down']);};
    document.getElementById('geo_panleft').onclick = function() {return internalThis.panMap.apply(internalThis,['left']);};
    document.getElementById('geo_panright').onclick = function() {return internalThis.panMap.apply(internalThis,['right']);};
    document.getElementById('geo_zoomin').onclick = function() {return internalThis.zoomMap.apply(internalThis,[0,1]);};
    document.getElementById('geo_zoomout').onclick = function() {return internalThis.zoomMap.apply(internalThis,[0,-1]);};
    document.getElementById('geo_zoomreset').onclick = function() {return internalThis.zoomReset.apply(internalThis);};

    document.getElementById('geo_polymode').onclick = function() {return internalThis.setMode.apply(internalThis,['poly']);};
    document.getElementById('geo_zoommode').onclick = function() {return internalThis.setMode.apply(internalThis,['zoom']);};

    var zoomState = this.controller.currentViz.args.zoomState;
    if(zoomState == null) {
      this.zoomMap(this.zoom, 0);
    } else {
      this.setState(zoomState);
    }
    this.initDone = true;

    this.map.events.on({
      "moveend": this.mapMoved,
      "changelayer": this.layerChanged,
      scope: this
    });

    this.setMode('pan');

  }

  pentaho.openlayers.OpenLayersMap.prototype.setMode = function( mode ) {
    var imagesPath = '/content/pentaho-geo/resources/web/images';

    if( this.mode == mode ) {
      // user clicked on the same mode again, so toggle back to pan mode
      mode = 'pan';
    }
    if(mode == 'poly') {
      this.showHoverTips = true;
      this.clickSelector.deactivate();
      this.zoomControl.handler.deactivate();
      this.boxSelector.activate();
      this.selectionMode = "APPEND";
      //      this.selectionMode = "TOGGLE";

      document.getElementById('geo_polymode').src = pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/btn-map-drag-select-on.png');
      document.getElementById('geo_zoommode').src = pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/btn-map-drag-zoom-in.png');
    }
    else if(mode == 'pan') {
      this.showHoverTips = true;
      this.boxSelector.deactivate();
      this.zoomControl.handler.deactivate();
      this.clickSelector.activate();
      this.selectionMode = "TOGGLE";
      document.getElementById('geo_polymode').src = pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/btn-map-drag-select.png');
      document.getElementById('geo_zoommode').src = pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/btn-map-drag-zoom-in.png');
    }
    else if(mode == 'zoom') {
      this.boxSelector.deactivate();
      this.clickSelector.deactivate();
      this.zoomControl.handler.activate();
      this.showHoverTips = false;
      document.getElementById('geo_polymode').src = pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/btn-map-drag-select.png');
      document.getElementById('geo_zoommode').src = pentaho.openlayers.OpenLayersMap.buildUrl(imagesPath + '/btn-map-drag-zoom-in-on.png');
    }
    this.mode = mode;
  }


  /**
   Zooms the map fit all of the points
   **/
  pentaho.openlayers.OpenLayersMap.prototype.zoomReset = function() {
    var measureLayers = this.map.getLayersByName('Measures');
    if(measureLayers && measureLayers != null && measureLayers.length > 0) {
      var layer = measureLayers[0];
      this.map.zoomToExtent(layer.getDataExtent());
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.zoomMap = function( level, bump ) {
    if(bump != 0) {
      level = this.map.getZoom();
      level += bump;
    }
    if(this.map.isValidZoomLevel(level)) {
      this.map.setCenter( this.map.getCenter(), level);
      var zoomState = this.getState();
      this.controller.currentViz.args.zoomState = zoomState;
      this.updateZoomControl();
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.updateZoomControl = function() {

    // Fix for ANALYZER-1094
    if(!(this.map.baseLayer instanceof OpenLayers.Layer.Google)){
      var gmaps=dojo.query(".MapLeftOverride");
      for( var idx=0; idx<gmaps.length; idx++) {
      dojo.removeClass(gmaps[idx],"MapLeftOverride");
      }
    }
    else {
      var cache = OpenLayers.Layer.Google.cache[this.map.id];
      if (cache) {
        var mapObject = cache.mapObject;
        dojo.addClass(mapObject, "MapLeftOverride");
      }
    }
    return;
    level = this.map.getZoom();
    for(var idx=1; idx<11; idx++) {
      var img = document.getElementById('geo_zoom'+idx);
      if( idx == level ) {
        img.src = pentaho.openlayers.OpenLayersMap.buildUrl('/content/pentaho-geo/resources/web/images/zoom_level_selected.png');
      } else {
        img.src = pentaho.openlayers.OpenLayersMap.buildUrl('/content/pentaho-geo/resources/web/images/zoom_level.png');
      }
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.panMap = function(dir) {

    if(dir == 'up' ) {
      this.map.pan(0, -this.slideFactor);
    }
    else if(dir == 'down' ) {
      this.map.pan(0, this.slideFactor);
    }
    else if(dir == 'left' ) {
      this.map.pan(-this.slideFactor, 0);
    }
    else if(dir == 'right' ) {
      this.map.pan(this.slideFactor, 0);
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.featureMouseOver = function(feature) {

    if( !this.showHoverTips ) {
      return;
    }

    var idx = feature.attributes.rowIdx;

    if( this.featureOverIdx && this.featureOverIdx == idx ) {
      // same feature
      return;
    }
    this.featureOverIdx = idx;

    var lonlat;
    if( typeof feature.geometry.x != "undefined" && typeof feature.geometry.y != "undefined" ) {
        // it is a point
        lonlat = new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y);
    }
    else if( typeof feature.geometry.components != "undefined" && feature.geometry.components.length > 0  && typeof feature.geometry.components[0].x != "undefined" ) {
        // it is a line
        lonlat = new OpenLayers.LonLat(feature.geometry.components[0].x, feature.geometry.components[0].y);
    }
    else if( typeof feature.geometry.components != "undefined" && feature.geometry.components.length > 0  && typeof feature.geometry.components[0].components != "undefined" ) {
        // it is a polygon
        lonlat = new OpenLayers.LonLat(feature.geometry.components[0].components[0].x, feature.geometry.components[0].components[0].y);
    } else {
        // we don't know where to put the hover tip
        return;
    }

    // BACKLOG-18225: Fix longitude if out of bounds
    // I would expect to transpose it 360 degrees,
    // but 40075016.68 seems to be the one best looking
    // (https://github.com/pentaho/ol2/blob/master/tests/BaseTypes/Bounds.html#L41)
    var mapBounds = this.map.calculateBounds(null, this.map.getResolution());
    var FULL_LON = 40075016.67999999;
    if(lonlat.lon > mapBounds.right) {
      lonlat.lon -= FULL_LON;
    } else if(lonlat.lon < mapBounds.left) {
      lonlat.lon += FULL_LON;
    }

    var html = '<div class="pentaho-rounded-panel" style="border: 1px solid #848484; background-color: #dedede; overflow: visible; white-space: normal;">';
    for(var colNo=0; colNo<this.dataTable.getNumberOfColumns(); colNo++) {
      html += '<div>'
      try {
        var value = this.dataTable.getFormattedValue(idx,colNo);
        var label = this.dataTable.getColumnLabel(colNo);
        if (colNo == this.sizeColumn || colNo == this.colorColumn)
          html += '<b>'; // Bold the color and size column to give some visual indicator in the tooltip so
        // that the user knows what the color and size values are based on.  Eventually
        // we will support aggregating across the columns on the client side.
        html += '<span>' + label + '</span>';
        html += ': ';
        html += '<span>' + value + '</span>';
        if (colNo == this.sizeColumn || colNo == this.colorColumn)
          html += '</b>';
      } catch(e) {
        // when aggregating by a field, the data table might be unbalanced.. don't display these ones
      }

      html += '</div>'
    }

    if(typeof cv != 'undefined') {
    var doubleClickToolTip = cv.getActiveReport().getDoubleClickTooltip(this.toSelectionItem(feature));
      if(doubleClickToolTip) {
        html += '<div class="tipsy-footer">' + doubleClickToolTip + '</div>';
      }
    }

    html += '</div>';

    // if onMouseOver has been implemented, call it
    if( pentaho.openlayers.onMouseOver ) {
        var handled = pentaho.openlayers.onMouseOver( feature, this, lonlat, html );
        if( handled ) {
            return;
        }
    }

    var popup = new OpenLayers.Popup.Anchored("featurePopup",
        lonlat,
        new OpenLayers.Size(100,100),
        html
    );

    // BACKLOG-18225: Internal conversions lonlat -> px -> lonlat
    // loses the fixed longitude value, so this needs to be overridden
    popup.calculateRelativePosition = function() {
      var quadrant = "";
      var center = mapBounds.getCenterLonLat();

      quadrant += (lonlat.lat < center.lat) ? "b" : "t";
      quadrant += (lonlat.lon < center.lon) ? "l" : "r";

      return OpenLayers.Bounds.oppositeQuadrant(quadrant);
    };

    popup.autoSize = true;
    popup.keepInMap = true;
    popup.backgroundColor = "transparent";
    this.featurePopup = popup;
    this.map.addPopup(this.featurePopup);
    popup.updateSize();
  }

  pentaho.openlayers.OpenLayersMap.prototype.featureMouseOut = function(feature) {
    // if onMouseOver has been implemented, call it
    if( pentaho.openlayers.onMouseOut ) {
        var handled = pentaho.openlayers.onMouseOut( feature, this );
        if( handled ) {
            return;
        }
    }
    this.clearPopup();
    this.featureOverIdx = -1;
  }

  pentaho.openlayers.OpenLayersMap.prototype.clearPopup = function() {
    if (this.featurePopup && this.featurePopup != null) {
      this.map.removePopup(this.featurePopup);
      this.featurePopup.destroy();
      this.featurePopup = null;
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.mapMoved = function() {
    // ANALYZER-1176 - only need to set the panned/zoomed status if there are points on the map,
    // but do not set to false, if it's already true
    this.hasPannedOrZoomed = this.hasPannedOrZoomed || this.features.length > 0;
    this.zoom = this.map.getZoom();
    this.center = this.map.getCenter();
    var zoomState = this.getState();
    this.controller.currentViz.args.zoomState = zoomState;

    this.updateZoomControl();
    // if onMapMove has been implemented, call it
    if( pentaho.openlayers.onMapMove ) {
        var handled = pentaho.openlayers.onMapMove( this );
        if( handled ) {
            return;
        }
    }

  }

  pentaho.openlayers.OpenLayersMap.prototype.layerChanged = function(event) {

    // we need to konw when the base layer has changed

    // first determine that it is showing a layer
    if( event.property == "visibility" && event.layer.visibility == true ) {
      // then make sure it is not a vector layer (one of our overlays)
      var vectorLayers = this.map.getLayersByClass("OpenLayers.Layer.Vector");
      for (var i = 0; i < vectorLayers.length; i++) {
        if (event.layer.name == vectorLayers[i].name) {
          return;
        }
      }
      this.controller.currentViz.args.baseLayer = event.layer.name;
      var zoomState = this.getState();
      this.controller.currentViz.args.zoomState = zoomState;
      //    console.log("base layer changed to " + event.layer.name);
      pentaho.openlayers.OpenLayersMap.currentLayer = event.layer.name;
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.clickOut = function(evt) {
    // avoid double clicking outside of a feature and drilling...
    this.pendingSelections = [];
  }

  pentaho.openlayers.OpenLayersMap.prototype.boxSelectionComplete = function(arg) {
    this.setMode('pan');
    this.selectionMode = "APPEND";
    this.featureSelected(); // fire the feature selection now that we are done selecting
    this.setMode('pan');
  }

  pentaho.openlayers.OpenLayersMap.prototype.featureDoubleClicked = function (event) {
    if (this.pendingSelections.length > 0) {
      this.featureSelected(true);
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.featureSelected = function (drill) {

    this.pendingPanLonLat = null; // make sure we don't pan the map

    var drillIn = drill || false;
    if(this.featureTimer){
      this.featureTimer = null;
    }

    if(this.pendingSelections.length == 0 ||
        (drillIn != this.doubleClick) ||
        (!this.clickPending && this.doubleClick) ) {

      return;

    }

    if(this.mode == 'poly') {
      // don't want to do the selection if we are in box-select mode.
      // it would call the service once for each selected feature
      return;
    }

    var selections = [];
    for(var i = 0; i < this.pendingSelections.length; i++) {
      var feature = this.pendingSelections[i];

      if(feature.layer && feature.layer.selectedFeatures) {
        OpenLayers.Util.removeItem(feature.layer.selectedFeatures, feature);
      }

      selections.push(this.toSelectionItem(feature));

      // if onFeatureSelection has been implemented, call it
      if( pentaho.openlayers.onFeatureSelection ) {
          pentaho.openlayers.onFeatureSelection( feature, this );
      }

    }

    var args = {
      source: myself,
      selections: selections,
      selectionMode: this.selectionMode || "TOGGLE"
    };

    // clear out the selection to allow clicking on it again
    this.clickSelector.handlers.feature.lastFeature =  null;

    if (selections.length > 0) {
      this.pendingSelections = [];
      if(drillIn) {
        this.hasPannedOrZoomed = false;
        pentaho.events.trigger( this, "doubleclick", args );
        this.doubleClick = false;
      } else {
        pentaho.events.trigger( this, "select", args );
        this.clickPending = false;
      }
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.toSelectionItem = function(feature) {
    var featureCol = this.getGeoFieldIndex(this.featureType);
    var rowIdx = feature.attributes.rowIdx;
    var rowItem = this.dataTable.getValue(rowIdx,featureCol);

    return {
      rowId: [this.dataTable.getColumnId(featureCol)],
      rowIdx: rowIdx,
      rowItem: [rowItem],
      colItem: new Array(),
      colId: new Array(),
      type: 'row'
    };
  };

  pentaho.openlayers.OpenLayersMap.prototype.startClickTimer = function() {
    if( pentaho.openlayers.OpenLayersMap.clickTimer == null ) {
      pentaho.openlayers.OpenLayersMap.clickObject = this;
      pentaho.openlayers.OpenLayersMap.clickTimer = setTimeout('pentaho.openlayers.OpenLayersMap.cancelClickTimer()', 500);
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.cancelClickTimer = function() {
    if( this.pendingPanLonLat != null ) {
      this.map.setCenter(this.pendingPanLonLat, this.map.getZoom());
      this.pendingPanLonLat = null;
    }
  }

  pentaho.openlayers.OpenLayersMap.cancelClickTimer = function() {
    pentaho.openlayers.OpenLayersMap.clickTimer = null;
    pentaho.openlayers.OpenLayersMap.clickObject.cancelClickTimer();
  }

  pentaho.openlayers.OpenLayersMap.prototype.polyDrawDone = function(args) {

    // convert this path into a polygon
    var geometry = args.feature.geometry;

    var polygon = args.feature.geometry;

    var isClick = false;
    if(polygon != null && polygon.components.length > 0 && polygon.components[0].components.length < 3 ) {
      // this is a point click
      isClick = true;
    }

    this.setMode('pan');

    if( isClick ) {
      if(pentaho.openlayers.OpenLayersMap.clickTimer != null) {
        this.doubleClick = true;
      } else {
        this.doubleClick = false;
      }
      var point = polygon.components[0].components[0];
      var point2 = point.transform(this.map.getProjectionObject(), this.wgs84);

      var lonlat = new OpenLayers.LonLat(point2.x, point2.y);

      var pixel = this.map.getPixelFromLonLat(lonlat);
      var evt = {
        xy: pixel
      }

      //        evt = this.freehandSelector.handler.firstEvent;
      //        this.freehandSelector.handler.persist = true;
      //        this.freehandSelector.deactivate;

      if( !evt || (evt.type != 'click' && evt.type != 'mousedown' && evt.type != 'mouseup')) {
        //            this.freehandSelector.handler.destroyFeature();
        return;
      }

      var evt2 = {
        target: evt.target,
        xy: evt.xy,
        srcElement: evt.srcElement,
        type: 'click'
      };

      this.clickSelector.activate;
      this.clickSelector.handlers.feature.handle(evt2);

      this.clickSelector.deactivate;
      //        this.freehandSelector.activate;
      //
      //        this.freehandSelector.handler.destroyFeature();

      this.startClickTimer();

      return true;

    }

    var selections = [];
    var columnIdx =  this.getGeoFieldIndex(this.featureType);
    for( var featureIdx=0; featureIdx<this.features.length; featureIdx++) {
      if(polygon != null && polygon.containsPoint(this.features[featureIdx].geometry) ) {
        var rowIdx = this.features[featureIdx].attributes.rowIdx;
        selections.push( {
          rowId: [this.dataTable.getColumnId(columnIdx)],
          rowIdx: rowIdx,
          rowItem: [this.dataTable.getValue(rowIdx,columnIdx)],
          type: 'row'
        } );
      }
    }

    //    this.freehandSelector.handler.destroyFeature();

    myself = this;
    var args = {
      source: myself,
      selections: selections
    };

    if (selections.length > 0) {
      pentaho.events.trigger( this, "select", args );
    }

    return false;
  }
  
  var __getGeoRoles = function (table, idx) {
    var formula = table.getColumnId(idx);
    var hierarchy = cv.getActiveReport().manager.fieldHelp.getHierarchy(formula, false, true);
    var geoRoles = hierarchy.map( function (formula) {
      var mondrianGeoRole = cv.getActiveReport().manager.fieldHelp.get(formula).getAttribute("geoRole");
      if (!mondrianGeoRole) { 
        return null; //this column does not have a geoRole
      }
      var geoRole = null;
      switch(mondrianGeoRole) {
        case "country":
          geoRole = "Country";
          break;
        case "state":
          geoRole = "CountrySubdivision";
          break;
        case "county":
          geoRole = "CountrySecondarySubdivision";
          break;
        case "city":
          geoRole = "Municipality";
          break;
        case "postal_code":
          geoRole = "PostalCode";
          break;
      }
      return geoRole;
    });
    return geoRoles;
  };
  /*
   the options map has some standard items:
   width: in pixels
   height: in pixels
   metrics: information about the datatable passed
   palette: current palette, used for charts, probably not for maps
   */
  pentaho.openlayers.OpenLayersMap.prototype.draw = function( dataTable, options ) {

    // we want to reset the hasPannedOrZoomed flag on KEEP interaction coming from analyzer
    // this will allow the auto-zoom to happen

    if(options.action == "resetPanZoomState") {
      this.hasPannedOrZoomed = false;
    } else if(options.action == "keepPanZoomState") {
      this.hasPannedOrZoomed = true;
    }

    this.clearPopup();

    var cacheOn = true;
    if(typeof pentaho_geo_cache_on != 'undefined') {
      cacheOn = pentaho_geo_cache_on;
      //      console.log("Cache is on = " + cacheOn);
    }

    // store the options and data for later when mouse events happen
    this.options = options;
    this.dataTable = dataTable;

    var width = options.width;
    var height = options.height;
    var title = options.title;
    var action = options.action; // the last action type
    this.selections = options.selections;

    this.sizeAxisUseAbs = options.sizeByNegativesMode === 'USE_ABS';

    // visualize the information.
    myself = this;

    this.init('mapdiv'+this.id);

    var hasGeoData = false;

    // Must identify the size colum here, because if this.sizeAxisUseAbs,
    // the dataTable.getColumnRange call below, for the size column,
    // must receive an argument for extracting the abs value.
    this.detectSizeAndColorColumns();

    // find all data that maps to geo-role (country, state, city)
    // identify the column
    this.geoField = {  };
    this.measureCols = [];
    this.ranges = new Array(this.dataTable.getNumberOfColumns());
    var types = [];
    this.featureType = null;
    this.customType = null;
    for( var columnIdx=0; columnIdx<this.dataTable.getNumberOfColumns(); columnIdx++) {
      var type = this.dataTable.getColumnProperty(columnIdx,'geoRole');
      if(typeof(type) != 'undefined') {
        // make sure the lat & lon fields are cased properly so everything works
        if(type == 'latitude') type = "Latitude";
        if(type == 'longitude') type = "Longitude";
        this.geoField[ type ] = columnIdx;
        types.push(type);
      } else {
        label = this.dataTable.getColumnLabel(columnIdx);
        type = this.featureNameMap[label.toLowerCase()];
        if( type ) {
          if(type == 'Custom') {
            this.customType = label;

            // ANALYZER-1648 - Adding Territory to GeoMap causes all points to disappear
            if(type != label && typeof(label) != 'undefined' ) {
              // 2 different names for the same type, make sure we add both as entries
              this.geoField[ type ] = columnIdx;

              // make sure the type we use in array to determine the lowest GeoLevel is the named version
              type = label;
            }

          }
          this.geoField[ type ] = columnIdx;
          types.push(type);
        }
      }

      if(this.dataTable.getColumnType(columnIdx) == 'number') {
        var options = this.sizeAxisUseAbs && (columnIdx === this.sizeColumn) ? {key: Math.abs} : null;

        var range = this.ranges[columnIdx] = this.dataTable.getColumnRange(columnIdx, options);

        // NULL or Equal
        range.isNull = range.min == null || Math.abs(range.min - range.max) < 1e-6;
        if(range.isNull){
            if(range.min == null){ range.min = 0; }
            range.max = range.min + 1;
        }

        this.measureCols.push(columnIdx);
      }
    }

    this.resolveBaseLayer();

    // find the most granular level
    this.featureType = this.findLowestLayer( types );
    this.isLatLon = (this.geoField[ 'Latitude' ] > 0 || this.geoField[ 'Latitude' ] == 0) &&
        (this.geoField[ 'Longitude' ] > 0 || this.geoField[ 'Longitude' ] == 0);
    if( this.isLatLon ) {
      this.displayFeatures();
    }
    else if (types.length > 0 && this.vectorLayer && this.featureType != 'Longitude' ) {

      var internalThis = this;

      // get the features

      var addresses = [];
      var rowCount = internalThis.dataTable.getNumberOfRows();
      var nullValue = "";
      if (typeof cvCatalog != 'undefined') {
        nullValue = cvCatalog.attributeNullValue;
      }
      var geoRoles = __getGeoRoles(this.dataTable, this.getGeoFieldIndex(this.featureType));

      for( var rowIdx=0; rowIdx < rowCount; rowIdx++) {
        var regionId = dataTable.getValue(rowIdx, this.getGeoFieldIndex(this.featureType));
        //Parse string regionId to array e.g. [Market].[NA].[USA].[CA].[Glendale] -> NA,USA,CA,Glendale
        var regionLevelIds = regionId.split("].[").slice(1).map(function(r){ return r.replace("[", "").replace("]", "") });
        // create an address for this row
        var map = [];
        for (var geotypeidx=0, geoRolesLen = geoRoles.length; geotypeidx<geoRolesLen; geotypeidx++) {
          type = geoRoles[geotypeidx];
          if(type == 'Custom' || type == null) {
            map[this.customType] = internalThis.dataTable.getFormattedValue(rowIdx, this.geoField[this.customType] );
          } else {
            regionValue = regionLevelIds[geotypeidx];
            if (regionValue == '#null') { regionValue = null;}
            map[type] = regionValue;
          }
        }
        if(this.featureType == 'Custom') {
          addresses.push(pentaho.geo.createAddress(map, this.customType));
        } else {
          addresses.push(pentaho.geo.createAddress(map, this.featureType));
        }
      }

      var isEmptyLevel = false;

      //[ANALYZER-916] see if we are asking for a single, null location
      if( nullValue == this.dataTable.getFormattedValue(0,this.getGeoFieldIndex(this.featureType) ) ) {
        // possible "empty" level, lets see
        if(rowCount == 1) {
          isEmptyLevel = true;
        } else {
          var tempTypes = types;
          // remove the current level to leave ancestors in the array
          tempTypes.splice(tempTypes.indexOf(this.featureType), 1);

          // does this level have parents, it wasn't a drill operation if there aren't parents?
          if(tempTypes.length > 0) {
            // get the next lowest level left (the parent)
            var parentLevel = this.findLowestLayer(tempTypes);

            // get the distinct values for the parent level, if there is one then it might be the result of a drill
            if (this.dataTable.getDistinctValues(this.getGeoFieldIndex(parentLevel)).length == 1) {
              isEmptyLevel = true;
              var maxRows = Math.min(rowCount, 20);
              // only possibly an empty level that if all of the values are nullValue
              for (var rowIdx = 1; rowIdx < maxRows; rowIdx++) {
                if(nullValue != this.dataTable.getFormattedValue(rowIdx,this.getGeoFieldIndex(this.featureType) ) ) {
                  isEmptyLevel = false;
                  break;
                }
              }
            } else {
              isEmptyLevel = false;
            }
          }

        }
      }

      if( isEmptyLevel ) {
        console.log('Request for an empty location [' + this.featureType + ']');

        // remove the empty level, save it for later
        var tmpAddElems = [];
        var impersonate = null;
        var removeIdx = addresses[0].elements.length - 1;
        for(var i = 0; i < addresses[0].elements.length; i++) {
          if(addresses[0].elements[i].type == this.featureType) {
            impersonate = addresses[0].elements[i];
          } else {
            tmpAddElems.push(addresses[0].elements[i]);
          }
        }

        addresses[0].elements = tmpAddElems;

        // IE has a bug where after poping an object, it's type is 'indexOf'... let's reset that
        impersonate.type = this.featureType;

        if(addresses[0].elements.length > 0) {
          // set the level we need to plot as the parent
          var aTypes = [];
          for(var idx = 0; idx < addresses[0].elements.length; idx++) {
            aTypes.push(addresses[0].elements[idx].type);
          }

          this.featureType = this.findLowestLayer(aTypes);
          addresses[0].type = this.featureType;
          var json = pentaho.geo.getCentroids(this.featureType,addresses.splice(0,1), null, cacheOn);
          var result = JSON.parse(json);

          // update the results, make them impersonate the desired level
          result.features[0].properties[impersonate.type]=nullValue;
          this.featureType = impersonate.type;
          json = JSON.stringify(result);
          return internalThis.gotFeatures(json);
        }
      } else {
        // if canProvideGeo has been implemented and returns true, call it getCustomGeo
        if( pentaho.geo.canProvideGeo && pentaho.geo.getCustomGeo && pentaho.geo.canProvideGeo( this.featureType,addresses, this ) ) {
            pentaho.geo.getCustomGeo(this.featureType,addresses, function(){ return internalThis.gotFeatures.apply(internalThis,arguments||[]);} , cacheOn, this);
        } else {
            pentaho.geo.getCentroids(this.featureType,addresses, function(){ return internalThis.gotFeatures.apply(internalThis,arguments||[]);} , cacheOn);
        }
      }

    } else if (types.length == 0) {
      this.displayFeatures();
    }

  }

  pentaho.openlayers.OpenLayersMap.prototype.resolveBaseLayer = function() {
    if(typeof this.map == 'undefined') {
      return;
    }
    if(typeof(pentaho.openlayers.OpenLayersMap.currentLayer) != 'undefined' && pentaho.openlayers.OpenLayersMap.currentLayer != this.controller.currentViz.args.baseLayer) {
      var vizBaseLayer = pentaho.openlayers.OpenLayersMap.currentLayer;
    } else if(this.map.baseLayer.name != pentaho.visualizations.getById("open_layers").args.baseLayer) {
      // at some point our layer changed, use that one
      var vizBaseLayer = this.map.baseLayer.name;
    } else {
      var vizBaseLayer = this.controller.currentViz.args.baseLayer;
    }
    var layers = this.map.getLayersByName(vizBaseLayer);
    if(layers != null && layers.length > 0) {
      this.map.setBaseLayer(layers[0]);
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.gotFeatures = function(json) {

    var response = json;
    // the caller can pass a JSON string or a JSON object, if it is a string convert it to an object
    if( typeof json == "string" ) {
        response = JSON.parse(json);
    } else {
	json = dojo.toJson(json);
    }

    var parser = new OpenLayers.Format.GeoJSON( {
      ignoreExtraDims: true,
      internalProjection: this.map.baseLayer.projection,
      externalProjection: this.wgs84
    });
    var type = this.featureType;
    if( type == 'Custom' ) {
      type = this.customType;
    }
    this.featureMap[type] = {};
    var features = parser.read(json);

    var helper = pentaho.geo.getCacheHelper(this.featureType);

    for( var featureNo=0; featureNo<response.features.length; featureNo++ ) {
      var attrs = {};

      attrs.Country = response.features[featureNo].properties.Country;
      attrs.CountryCode = response.features[featureNo].properties.CountryCode;
      attrs.CountryCode3 = response.features[featureNo].properties.CountryCode3;
      attrs.CountrySubdivision = response.features[featureNo].properties.CountrySubdivision;
      attrs.CountrySubdivisionCode = response.features[featureNo].properties.CountrySubdivisionCode;
      attrs.CountrySecondarySubdivision = response.features[featureNo].properties.CountrySecondarySubdivision;
      attrs.Municipality = response.features[featureNo].properties.Municipality;
      attrs.MunicipalitySubdivision = response.features[featureNo].properties.MunicipalitySubdivision;
      attrs.PostalCode = response.features[featureNo].properties.PostalCode;

      // handle custom types
      if( typeof(response.features[featureNo].properties[type]) != 'undefined' && typeof(attrs[type]) == 'undefined') {
        attrs[type] = response.features[featureNo].properties[type];
      }


      for (var i = 0; i < helper.featurePropNameArray.length; i++) {
        var geoType = helper.featurePropNameArray[i];
        if(this.featureMap[geoType] == undefined) {
          this.featureMap[geoType] = {};
        }
        var key = attrs[geoType];
        if( key ) {
          key = key.toLowerCase();
          for(x in attrs) {
            features[featureNo].attributes[x] = attrs[x];
          }

            var geoTypeMap = this.featureMap[geoType];
            if (!geoTypeMap[key]) {
              geoTypeMap[key] = [];
            }

            geoTypeMap[key].push(features[featureNo]);
        }
      }

    }

    this.displayFeatures();
  }

  /*
   * Analyzes the data table and finds the size and color columns, if any.
   * Updates properties this.colorColumn and this.sizeColumn.
   */
  pentaho.openlayers.OpenLayersMap.prototype.detectSizeAndColorColumns = function() {
      this.colorColumn = -1;
      this.sizeColumn = -1;

      for(var colNo=0; colNo < this.dataTable.getNumberOfColumns(); colNo++) {
        var dataReq = this.dataTable.getColumnProperty(colNo, 'dataReq');
        if(dataReq) {
          for (var idx=0; idx < dataReq.length; idx++) {
            if( dataReq[idx].id == 'color' && this.colorColumn == -1) {
              this.colorColumn = colNo;
            }

            if( dataReq[idx].id == 'size' && this.sizeColumn == -1) {
              this.sizeColumn = colNo;
            }
          }
        }
      }

      if( this.colorColumn == -1 && this.sizeColumn != -1 ) {
        // [ANALYZER-958] if only size is specified, use it but don't color by it too. don't set the color by column
        // this.colorColumn = this.sizeColumn;
      } else if( this.colorColumn == -1 && this.sizeColumn == -1 ) {
        if(this.isLatLon) {
          // make sure we don't use the lat or lon columns for the measures
          for(var idx=0; idx<this.measureCols.length; idx++) {
            if(this.measureCols[idx] != this.geoField['Latitude'] && this.measureCols[idx] != this.geoField['Longitude']) {
              if(this.colorColumn == -1) {
                this.colorColumn = this.measureCols[idx];
              } else if (this.sizeColumn == -1){
                this.sizeColumn = this.measureCols[idx];
              }
            }
          }
        } else {
          this.colorColumn = this.measureCols[0];
          if(this.measureCols.length > 1) {
            this.sizeColumn = this.measureCols[1];
          }
        }
      }
  },

  pentaho.openlayers.OpenLayersMap.prototype.displayFeatures = function() {

    // find out how the data columns should be used
    var geoColumn = -1;
    var minLat = null;
    var minLon = null;
    var maxLat = null;
    var maxLon = null;

    var range;
    var ranges  = this.ranges;
    var options = this.options;
    var dataTable = this.dataTable;

    // make sure that the base layer is set to the proper one
    //            this.resolveBaseLayer();

    // set the zoom state
    this.setState();

    var minColorValue = 0;
    var maxColorValue = 1;
    var colorIsUnboundOrAllNulls = true;
    var colorColumn = this.colorColumn;
    if(colorColumn != null && colorColumn > -1) {
      range = ranges[colorColumn];
      minColorValue = range.min;
      maxColorValue = range.max;
      colorIsUnboundOrAllNulls = !!range.isNull;
    } else {
        colorColumn = -1;
    }

    var defaultColor = (options.colorRange && options.colorRange.length && options.colorRange[0]) ||
                       (options.color1 && pentaho.VizController.getRrbColor.apply(pentaho.VizController, options.color1)) ||
                       '#1f77b4'; // a light blue

    var minSizeValue, maxSizeValue;
    var sizeIsUnboundOrAllNulls = true;
    var sizeColumn = this.sizeColumn;
    if(sizeColumn != null && sizeColumn > -1 ) {
      range = ranges[sizeColumn];
      minSizeValue = range.min;
      maxSizeValue = range.max;
      sizeIsUnboundOrAllNulls = !!range.isNull;
    } else {
        sizeColumn = -1;
    }

    var newFeatures = [];
    // remove any features that were previously displayed
    this.vectorLayer.destroyFeatures();
    var features = this.features = [];
    //            alert(this.featureType);
    //            alert(dojo.toJson(this.geoField));
    // add a new feature for each geo item found

    var type = this.featureType;
    if( type == 'Custom' ) {
      type = this.customType;
    }

    var featureKeyColumn = this.getGeoFieldIndex(type);

    var NoneSelected = 0;
    var AnySelected  = 1;
    var IsSelected   = 2;

    
    var nullLabel = "";
    if (typeof cvCatalog != 'undefined') {
      nullLabel = cvCatalog.attributeNullValue.toLowerCase();
    }
    var getRowHighlighted = function(rowIdx){
      var sels = me.selections;
      if(!sels || !sels.length) {
        // Nothing is selected
        return NoneSelected;  // 00
      }

      // AnySelected

      var regionId = dataTable.getValue(rowIdx, featureKeyColumn);
      for(var selIdx = 0; selIdx < sels.length ; selIdx++) {
        var sel = sels[selIdx];
        if((sel.type == 'row' && sel.rowItem[0] == regionId) ) {
          return AnySelected | IsSelected; // 11
        }
      }

      // Not among the selected
      return AnySelected; // 01
    };

    var me = this;
    var configRowFeatureSize = function(feature, rowIdx/*, rowHighlighted, */){

      feature.attributes.shape = 'circle';
      feature.attributes.shapeRotation = 0;

      // When size is unbound or bound but all size values are null, show bubbles with default size
      if(!sizeIsUnboundOrAllNulls) {
        // Make the radius dependent on the range from 5-40
        var r = dataTable.getValue(rowIdx, sizeColumn);
        if(r == null) {
          if(colorColumn < 0){
            // Nothing to show
            feature.attributes.radius = 0;
          } else {
            // Need a shape to be able to show the color.
            feature.attributes.radius = me.defaultBubbleSize;
            // TODO change shape to cross
            feature.attributes.shape = 'pentaho-geo-cross';
            feature.attributes.shapeRotation = 45;
          }
        } else {
          if(r < 0 && me.sizeAxisUseAbs) {
            r = -r;

            // Show a dashed border
            feature.attributes.borderDashstyle = 'dash';
            // Color is set to black, below
            //feature.attributes.borderColor = 'black';
          } else {
            feature.attributes.borderDashstyle = 'solid';
          }

          if(r == maxSizeValue) {
            feature.attributes.radius = me.maxBubbleSize;
          } else if (r == minSizeValue) {
            feature.attributes.radius = me.minBubbleSize;
          } else {
            feature.attributes.radius =
                me.minBubbleSize +
                (r-minSizeValue)/(maxSizeValue-minSizeValue)*(me.maxBubbleSize-me.minBubbleSize);
          }
        }

      } else {
        feature.attributes.radius = me.defaultBubbleSize;
      }
    };

    var configRowFeatureColor = function(feature, rowIdx, rowHighlighted) {
        var attrs = feature.attributes;

        var baseColor;
        var colorRange = options.colorRange;

        // Test the IsSelected bit
        var isSelected = (rowHighlighted & IsSelected) !== 0;

        // Is Selected or Nothing Is Selected ?
        var isSelectedOrNoneIs = isSelected || rowHighlighted === NoneSelected;

        if(colorColumn < 0){
          // Color is unbound
          baseColor = defaultColor;

          attrs.borderColor   = baseColor;
          attrs.color         = isSelectedOrNoneIs ? baseColor : "#bbbbbb";
          attrs.borderOpacity = isSelectedOrNoneIs ? "0.80"    : "0.5";
        } else {
            var controller = pentaho.VizController;
            var colorValue = dataTable.getValue(rowIdx, colorColumn);
            if(colorValue == null) {
                // If size is Unbound or null -> hide the dot
                if(sizeColumn < 0 || dataTable.getValue(rowIdx, sizeColumn) == null){
                    feature.attributes.radius = 0;
                    return;
                }

                // Otherwise, null color values are shown with a base gray color
                baseColor = "#999999"; //"#d3d3d3"; with alpha the same color as CCC gets too light

                if(isSelected) {
                    // "Is among selected" state
                    // Go darker
                    attrs.color         = controller.getDarkerFromColorHex(baseColor, 3);
                    attrs.borderColor   = controller.getDarkerFromColorHex(baseColor, 2);
                    attrs.borderOpacity = "0.80";
                } else {
                    // "Normal" state OR "Not among selected" state
                    attrs.color         = baseColor;
                    attrs.borderColor   = controller.getDarkerFromColorHex(baseColor);
                    attrs.borderOpacity = rowHighlighted === NoneSelected ? "0.80" : "0.5";
                }
            } else {
                if(colorRange) {
                  if(options.scalingType == "linear") {
                    baseColor = controller.getRgbGradientFromMultiColorHex(colorValue, minColorValue, maxColorValue, colorRange);
                  } else {
                    baseColor = controller.getRgbStepFromMultiColorHex(colorValue, minColorValue, maxColorValue, colorRange);
                  }
                } else {
                  baseColor = controller.getRrbGradient(colorValue, minColorValue, maxColorValue, options.color1, options.color2);
                }

                if(sizeColumn >= 0) {
                    var r = dataTable.getValue(rowIdx, sizeColumn);
                    if(r == null) {
                        // The shape only has border, so must dim the border instead
                        attrs.borderColor = isSelectedOrNoneIs ? baseColor : "#bbbbbb";
                    } else if(r < 0 && me.sizeAxisUseAbs){
                        // Size is negative and abs is in use
                        attrs.borderColor = 'black';
                    } else {
                        attrs.borderColor = baseColor;
                    }
                } else {
                    attrs.borderColor = baseColor;
                }

                attrs.color         = isSelectedOrNoneIs ? baseColor : "#bbbbbb";
                attrs.borderOpacity = isSelectedOrNoneIs ? "0.80"    : "0.5";
            }
        }
    };

    var updateMapExtent = function(point){
      if(maxLon == null) {
        maxLon = point.x;
        minLon = point.x;
        maxLat = point.y;
        minLat = point.y;
      } else {
        maxLon = Math.max( point.x, maxLon );
        minLon = Math.min( point.x, minLon );
        maxLat = Math.max( point.y, maxLat );
        minLat = Math.min( point.y, minLat );
      }
    };

    var setGeometry = function(feature, rowIdx, point, type) {
      feature.geometry = point;
      feature.attributes.geoRole = type;
      feature.attributes.rowIdx = rowIdx;

      updateMapExtent(point);

      var rowHighlighted = getRowHighlighted(rowIdx);

      configRowFeatureSize (feature, rowIdx, rowHighlighted);
            // allow custom attributes to be set
            if( feature.properties && feature.properties.shape ) {
                feature.attrs.shape = feature.properties.shape;
            }
            if( feature.properties && feature.properties.raduis ) {
                feature.attrs.radius = feature.properties.radius;
            }
            if( feature.properties && feature.properties.color ) {
                feature.attrs.color = feature.properties.color;
            } else {
                configRowFeatureColor(feature, rowIdx, rowHighlighted);
            }
    }

    var haveLinesOrPolys = false;
    
    function isMatch(contestant, attribute, regionValue) {
      if (contestant.attributes[attribute] === undefined) return undefined;
      
      var geovalue = contestant.attributes[attribute].toLowerCase();
      return geovalue === regionValue;
    }
    
    for( var rowIdx=0, N = this.dataTable.getNumberOfRows(); rowIdx < N; rowIdx++ ) {
      var feature = null;
      var point;
      
      if(this.isLatLon) {
        var lat = dataTable.getValue(rowIdx, this.geoField['Latitude']);
        var lon = dataTable.getValue(rowIdx, this.geoField['Longitude']);
        point = new OpenLayers.Geometry.Point(lon,lat);
        point = point.transform(this.wgs84, this.map.getProjectionObject());

        feature = new OpenLayers.Feature.Vector({
          styleMap:  this.styleMap,
          projection: new OpenLayers.Projection("EPSG:4326")
        });
        feature.attributes = {};

        feature.attributes.Latitude  = lat;
        feature.attributes.Longitude = lon;
        feature.data.Latitude  = lat;
        feature.data.Longitude = lon;

        newFeatures.push(feature);

        setGeometry(feature, rowIdx, point, type);

      } else if (featureKeyColumn || featureKeyColumn == 0) {
        var regionLabel = dataTable.getFormattedValue(rowIdx, featureKeyColumn);
        var featureArray = this.getFeature(type, regionLabel);

        // figure out how many fields in the Geography gem have geoRoles that appear as properties of the features returned by the geoservice
        // get the properties that the geo service returns for the most granular geoRole
        // and that identify how many fields in the Geography gem have a geoRole that matches those properties

        var regionId = dataTable.getValue(rowIdx, featureKeyColumn);
        //Parse string regionId to array e.g. [Market].[NA].[USA].[CA].[Glendale] -> NA,USA,CA,Glendale
        var regions = regionId.split("].[").slice(1).map(function(r){ return r.replace("[", "").replace("]", "").toLowerCase(); });
        var feature = null;

        if (featureArray) {
          // if there is an only feature, we consider it found
          if (featureArray.length == 1) {
            feature = featureArray[0];
          } else {
            var foundFeature = false;
            for (var i = 0, fALen = featureArray.length; i < fALen; i++) {
              var contestant = featureArray[i];
              if (contestant.geometry == null) {
                continue;// skip this feature due to feature.geometry is undefined
              }
              //get geoTypes e.g. [null],[Country],[CountrySubdivision],[Municipality]
              var geoRoles = __getGeoRoles(this.dataTable, featureKeyColumn);
              //search suits feature by comparing feature.attribute with value from regions.
              for (var geotypeidx=0, geoRolesLen = geoRoles.length; geotypeidx<geoRolesLen; geotypeidx++) {
                var regionValue = regions[geotypeidx];

                if (geoRoles[geotypeidx] == null) {
                  //check for case when only customType level uses e.g. Territory
                  if ( geotypeidx === this.getGeoFieldIndex(this.customType) ) {
                    if( isMatch(contestant, this.customType, regionValue) ) {
                      foundFeature = true;
                      feature = contestant;
                      continue;
                    }
                  }
                  continue;//skip unsupported geotype
                }
                var helper = pentaho.geo.getCacheHelper(geoRoles[geotypeidx]);
                //considering synonyms for feature.attributes e.g. for Country checks also CountyCode and CountryCode3
                for (var prop = 0, propLen = helper.featurePropNameArray.length; prop < propLen; prop++) {
                  foundFeature = false;
                  var role = helper.featurePropNameArray[prop];
                  var formattedValue = dataTable.getFormattedValue(rowIdx, this.getGeoFieldIndex(role));
                  if (formattedValue == null) {
                    formattedValue = nullLabel;
                  } else {
                    formattedValue = formattedValue.toLowerCase();
                  }
                  var attrMatch = isMatch(contestant, role, regionValue) || isMatch(contestant, role, formattedValue);
                  if (attrMatch!==false) {
                    feature = contestant;
                    foundFeature = true; // we've found the suitable feature
                    break;
                  }
                  if (regionValue == '#null' && (attrMatch !== undefined)) {
                    foundFeature = false; // this feature does not suit because this geoRole was supposed to be undefined
                    break;
                  }
                  foundFeature = (attrMatch === undefined);
                }
                if (!foundFeature) {
                  feature = null;
                  break;//this feature does not suit
                }
              }
              if (foundFeature) {
                break;// we found feature;
              }
            }
          }

          if (feature) {
            if (newFeatures.length == 0 || (newFeatures.length > 0 && feature != newFeatures[newFeatures.length - 1])) {
              newFeatures.push(feature);
            }

            feature.attributes.geoRole = type;

            if (features.length == 0 || (features.length > 0 && feature != features[features.length - 1])) {
              features.push(feature);
            }
            // create the feature based on the geometry it has
            var geometryType = null;
            if (feature.geometry) {
              geometryType = feature.geometry.CLASS_NAME;
            }
            if (geometryType == "OpenLayers.Geometry.Point") {
              point = new OpenLayers.Geometry.Point(feature.geometry.x, feature.geometry.y);
              setGeometry(feature, rowIdx, point, type);
            }
          }

        else if ( geometryType == "OpenLayers.Geometry.Polygon" ) {
            var polygon = new OpenLayers.Geometry.Polygon([feature.geometry.components]);
            var points = feature.geometry.components[0].components;
            for( var idx=0; idx<points.length; idx++ ) {
                updateMapExtent(points[idx]);
            }
            var rowHighlighted = getRowHighlighted(rowIdx);
            feature.attributes.rowIdx = rowIdx;

            if( feature.properties && feature.properties.color ) {
                feature.attrs.color = feature.properties.color;
            } else {
                configRowFeatureColor(feature, rowIdx, rowHighlighted);
            }
            haveLinesOrPolys = true;
        }
        else if ( geometryType == "OpenLayers.Geometry.LineString" ) {
            var polygon = new OpenLayers.Geometry.LineString([feature.geometry.components]);
            var points = feature.geometry.components;
            for( var idx=0; idx<points.length; idx++ ) {
                updateMapExtent(points[idx]);
            }
            var rowHighlighted = getRowHighlighted(rowIdx);
            feature.attributes.rowIdx = rowIdx;

            if( feature.attributes && ( feature.attributes.color || feature.attributes.borderColor ) ) {
                // the feature already has colors defined
            } else {
                configRowFeatureColor(feature, rowIdx, rowHighlighted);
            }
            haveLinesOrPolys = true;
        }
            if( pentaho.geo.customizeFeature ) {
                pentaho.geo.customizeFeature( feature, sizeColumn, colorColumn, rowIdx, dataTable, this);
            }
        }
      } // if not isLatLon
    } // for

    // if beforeDisplayFeatures has been implemented, call it
    if( pentaho.openlayers.beforeDisplayFeatures ) {
        pentaho.openlayers.beforeDisplayFeatures( newFeatures, this );
    }

    this.vectorLayer.addFeatures(newFeatures);

    if(this.autoExtents && minLon != null && !this.hasPannedOrZoomed) {
      // now set the extent of the map
      var bounds = new OpenLayers.Bounds( minLon, minLat, maxLon, maxLat );
      var zoom = 5;

      var width = bounds.right - bounds.left;
      var height = bounds.top - bounds.bottom;
      if(width !== 0 || height !== 0 || haveLinesOrPolys ) {
        zoom = this.map.getZoomForExtent(bounds, false);
      }

      var lonlat = new OpenLayers.LonLat((minLon+maxLon)/2, (minLat+maxLat)/2);
      this.map.setCenter(lonlat, zoom);
      this.zoomMap(zoom, 0);
    }
    // if afterDisplayFeatures has been implemented, call it
    if( pentaho.openlayers.afterDisplayFeatures ) {
        pentaho.openlayers.afterDisplayFeatures( feature, this );
    }
  }

  /*
   The controller is calling us with updated highlight information
   */
  pentaho.openlayers.OpenLayersMap.prototype.setHighlights = function( selections ) {
    this.selections = selections;
    this.options.selections = selections;
    this.options.action = "setHighlights";
    if( this.dataTable && this.options ) {
      this.draw(this.dataTable, this.options);
    }
  }

  /*
   The user has clicked on an item.
   We need to trigger an event
   */
  pentaho.openlayers.OpenLayersMap.prototype.click = function( event ) {

    //    var selections = [];
    //    for (var i = 0; i < this.vectorLayer.selectedFeatures.length; i++) {
    //        // we need to find out which row/column in the data table this marker relates to
    //        var f = this.vectorLayer.selectedFeatures[i];
    //        var rowIdx = f.attributes.rowIdx
    //        var rowItem = this.dataTable.getValue(rowIdx,0);
    //
    //        var selection = {
    //            rowId: [this.dataTable.getColumnId(0)],
    //            rowItem: [rowItem],
    //            type: 'row'
    //        };
    //        selections.push(selection)
    //    }
    //    var args = {
    //        source: myself,
    //        selections: selections
    //    };
    //    if (selections.length > 0) {
    //        pentaho.events.trigger( this, "select", args );
    //    }

  }

  pentaho.openlayers.OpenLayersMap.prototype.getFeature = function( geoRole, attr ) {

    var result = null;
    // need to be lenient in our lookup...

    var helper = pentaho.geo.getCacheHelper(geoRole);

    for (var i = 0; i < helper.featurePropNameArray.length; i++) {
      var role = helper.featurePropNameArray[i];
      var feature = this.featureMap[role];
      if(feature) {
        result = feature[attr.toLowerCase()];
        if (result && (result != null || result.length > 0)) {
          return result;
        } else {
          result = null;
        }
      }
    }
    //alert('geoRole='+geoRole+', value='+attr+', featureMap='+feature+', result='+result) ;
    return result;
  }

  pentaho.openlayers.OpenLayersMap.prototype.featureOver = function(feature) {
    // var tooltip = document.getElementById('tooltip');
    // tooltip.style.display = "block";
    // tooltip.innerHTML = feature.attributes.country_name;
  }
  pentaho.openlayers.OpenLayersMap.prototype.hideTooltip = function(){
    // document.getElementById('tooltip').style.display = "none";
  }

  /*
   getState
   Returns the state of the map - the center, the zoom level, and the visible layers
   */
  pentaho.openlayers.OpenLayersMap.prototype.getState = function() {

    var center = this.map.getCenter();
    var zoom = this.map.getZoom();
    var extent = this.map.getExtent();
    var layers = [];

    for( var idx=0; idx<this.map.layers.length; idx++ ) {
      if( this.map.layers[idx].visibility ) {
        layers.push(this.map.layers[idx].name);
      }
    }

    var state = {
      center: center,
      zoom: zoom,
      layers: layers,
      extent: {
        top: extent.top,
        left: extent.left,
        bottom: extent.bottom,
        right: extent.right
      }
    }

    // if onStateSave has been implemented, call it
    if( pentaho.openlayers.onStateSave ) {
        pentaho.openlayers.onStateSave( state, this );
    }

    return state;

  }

  /*
   setState
   Sets the state of the map - the center and the zoom level
   */
  pentaho.openlayers.OpenLayersMap.prototype.setState = function( json ) {

    // if onStateLoad has been implemented, call it
    if( pentaho.openlayers.onStateLoad ) {
        pentaho.openlayers.onStateLoad( json, this );
    }

    if(json == null) {
      if(this.controller.currentViz.args.zoomState == null) {
        return;
      }
      json = this.controller.currentViz.args.zoomState;
    }

    var jsonLayers = json.layers;
    var mapLayers = this.map.layers;
    var baseLayers = this.layerSwitcher.baseLayers;
    var dataLayers = this.layerSwitcher.dataLayers;

    var baseLayerDefined = false;

    // match visibility with configured layers
    for (var mi = 0; mi < mapLayers.length; mi++) {
      mapLayers[mi].visibility = false;
      for (var ji in jsonLayers) {
        if (mapLayers[mi].name == jsonLayers[ji]) {
          mapLayers[mi].visibility = true;
          break;
        }
      }
    }

    // base layers
    for (var bi = 0; bi < baseLayers.length; bi++) {
      var mapLayer = this.map.getLayer(baseLayers[bi].layer.id);

      if (mapLayer.visibility) {
        baseLayerDefined = true;
        baseLayers[bi].inputElem.checked = true;

        // set the baseLayer property
        this.controller.currentViz.args.baseLayer = mapLayer.name;
        break;
      }
    }

    // No base layer is visible, need to revert to default or we get a blank map,
    // could happen if the graph was built with a currently disable layer.
    if (!baseLayerDefined) {
      this.map.baseLayer.visibility = true;
      for (var bi = 0; bi < baseLayers.length; bi++) {
        if (baseLayers[bi].layer.name == this.map.baseLayer.name) {
          baseLayers[bi].inputElem.checked = true;

          // set the baseLayer property
          this.controller.currentViz.args.baseLayer = this.map.baseLayer.name;
          break;
        }
      }
    }

    // data layers
    for (var di = 0; di < dataLayers.length; di++) {
      var mapLayer = this.map.getLayer(dataLayers[di].layer.id)

      if (mapLayer.visibility) {
        dataLayers[di].inputElem.checked = true;
      }
    }

    this.layerSwitcher.updateMap();

    if(json.extent) {
      // use the map extent
      var bounds = new OpenLayers.Bounds( json.extent.left, json.extent.bottom, json.extent.right, json.extent.top );
      var zoom = this.map.getZoomForExtent(bounds, true);
      lonlat = new OpenLayers.LonLat(json.center.lon, json.center.lat);
      this.map.setCenter( lonlat, zoom );
      this.zoomMap(zoom, 0);
    } else {
      // use the center and the zoom level
      lonlat = new OpenLayers.LonLat(json.center.lon, json.center.lat);
      this.map.setCenter( lonlat, json.zoom );
      this.zoomMap(json.zoom, 0);
    }
  }

  pentaho.openlayers.OpenLayersMap.prototype.getOutputParameters = function() {

    var params = [];
    params.push( [
      this.dataTable.getColumnId( 0 ),
      true,
      this.dataTable.getColumnId( 0 )
    ] );
    return params;
  }

  pentaho.openlayers.OpenLayersMap.prototype.findLowestLayer = function(types) {
    var lowest = null;
    var maxIdx = -1
    for( var idx=0; idx<types.length; idx++) {
      var itemNo = this.featureTypeMap[types[idx].toLowerCase()];
      if(typeof(itemNo) != 'undefined') {
        maxIdx = Math.max( maxIdx, itemNo );
      }
    }
    if( maxIdx == -1 ) {
      return null;
    }
    return this.featureTypes[maxIdx];
  }

  pentaho.openlayers.OpenLayersMap.Handler = {};

  pentaho.openlayers.OpenLayersMap.Handler.Polygon = OpenLayers.Class(OpenLayers.Handler.Polygon, {

    initDone: false,

    panMode: true,

    subMouseDown: false,

    dragging: false,

    lastPx: null,

    featureHandler: null,

    map: null,

    addedFeatures: [],

    /**
     * Method: createFeature
     * Add temporary geometries
     *
     * Parameters:
     * pixel - {<OpenLayers.Pixel>} The initial pixel location for the new
     *     feature.
     */
    createFeature: function(pixel) {
      var lonlat = this.control.map.getLonLatFromPixel(pixel);
      this.point = new OpenLayers.Feature.Vector(
          new OpenLayers.Geometry.Point(lonlat.lon, lonlat.lat), {pointRadius: 9, color:"#ff8800"}, {radius:1, fillColor:"#ffddbb", fillOpacity: 0.2}
      );
      this.line = new OpenLayers.Feature.Vector(
          new OpenLayers.Geometry.LinearRing([this.point.geometry]), {pointRadius: 9, color:"#ffddbb"}, {radius:1, fillColor:"#ffddbb", fillOpacity: 0.2}
      );
      this.polygon = new OpenLayers.Feature.Vector(
          new OpenLayers.Geometry.Polygon([this.line.geometry]), {pointRadius: 9, color:"#ff8800"}, {radius:1, fillColor:"#ffddbb", fillOpacity: 0.2}
      );
      this.callback("create", [this.point.geometry, this.getSketch()]);
      this.point.geometry.clearBounds();
      this.layer.addFeatures([this.polygon, this.point], {silent: true});
      this.addedFeatures.push(this.polygon);
      this.addedFeatures.push(this.point);
    },

    /**
     * Method: destroyFeature
     * Destroy temporary geometries
     */
    destroyFeature: function() {

      this.layer.destroyFeatures(this.addedFeatures);
      this.addedFeatures = [];

      var l = this.layer;
      this.layer = null;
      OpenLayers.Handler.Path.prototype.destroyFeature.apply(this);
      this.polygon = null;
      this.layer = l;
    },

    deactivate: function() {
    },

    activate: function() {

      if( this.initDone ) {
        return;
      }
      this.initDone = true;
      if(!OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
        return false;
      }
      // create temporary vector layer for rendering geometry sketch
      // TBD: this could be moved to initialize/destroy - setting visibility here
      var options = OpenLayers.Util.extend({
        displayInLayerSwitcher: false,
        // indicate that the temp vector layer will never be out of range
        // without this, resolution properties must be specified at the
        // map-level for this temporary layer to init its resolutions
        // correctly
        calculateInRange: OpenLayers.Function.True
      }, this.layerOptions);
      return true;
    },

    mouseup: function(evt) {
      this.subMouseDown = false;
      if( this.panMode && this.dragging ) {
        this.dragging = false;
        this.lastPx = evt.px;
        this.destroyFeature();
        return false;
      }
      this.dragging = false;
      return OpenLayers.Handler.Path.prototype.mouseup.apply(this, arguments);
      this.drawing = false;
    },

    mousedown: function(evt) {

      if( this.panMode ) {
        this.subMouseDown = true;
      }
      this.subMouseDown = true;

      // ignore double-clicks
      if (this.lastDown && this.lastDown.equals(evt.xy)) {
        return false;
      }
      if(this.lastDown == null) {
        this.firstEvent = evt;
      }
      var result = OpenLayers.Handler.Path.prototype.mousedown.apply(this, arguments);

    },

    mousemove: function (evt) {

      if( this.panMode && this.subMouseDown ) {
        this.dragging = true;
        if(!this.lastPx) {
          this.lastPx = evt.xy;
        }
        this.map.pan(
            this.lastPx.x - evt.xy.x,
            this.lastPx.y - evt.xy.y,
            {dragging: false, animate: false}
        );
      }
      else {
        //                alert(this.subMouseDown);
        if(this.subMouseDown == true) {
          return OpenLayers.Handler.Path.prototype.mousedown.apply(this, arguments);
        } else {
          // see if we have a mouse over event
          if(this.featureHandler) {
            return this.featureHandler.handleMouseMove(evt);
          }
        }
      }
      this.lastPx = evt.xy;
      return true;
    },

    CLASS_NAME: "pentaho.openlayers.OpenLayersMap.Handler.Polygon"
  });



  pentaho.openlayers.OpenLayersMap.prototype.resize = function(width, height){
    this.canvasDiv.style.height = height + "px";
    this.canvasDiv.style.width= width+ "px";
    this.map.updateSize();
    var localThis=this;
    setTimeout( function() { localThis.map.updateSize();}, 200);

    this.updateZoomControl();
  };

  pentaho.openlayers.OpenLayersMap.buildUrl = function(partialUrl) {
    var base = CONTEXT_PATH;
    var url = partialUrl;

    // if the base doesn't end with a slash, add it
    if(typeof(base) == 'undefined' || base == null) {
      base = '/';
    } else if(base.match(/\/$/) == null) {
      base += '/';
    }

    // if the url passed in starts with a slash, strip it off
    if(url.indexOf('/') === 0) {
      url = url.substring(1, url.length);
    }

    return base + url;
  };

  pentaho.openlayers.OpenLayersMap.prototype.getGeoFieldIndex = function(/*String*/ geoRoleName) {
      if(typeof(geoRoleName) == 'undefined' || geoRoleName == null) {
        return -1;
      }
    var colIdx = this.geoField[geoRoleName];
    if( typeof(colIdx) == 'undefined' ) {
      colIdx = this.geoField[geoRoleName.toLowerCase()];
    }
    return colIdx;
  };

  pentaho.openlayers.OpenLayersMap.initMessages();
  pentaho.visualizations.push({
    id: 'open_layers',
    type: 'geographic',
    source: 'openlayers',
    name: pentaho.common.Messages.getString("visualization_name"),
    'class': 'pentaho.openlayers.OpenLayersMap',
    needsColorGradient: true,
    customType: 'MAP',
    maxValues: [250,500,1000,5000],
    keepLevelOnDrilldown: true,
    getDropZoneLabel: function(type){
      var label = pentaho.common.Messages.getString("dropZoneLabels_" + type);
      if(label == "dropZoneLabels_" + type) {
        // not found, messages probably not init'd yet. try again after init
        pentaho.openlayers.OpenLayersMap.initMessages();
        label = pentaho.common.Messages.getString("dropZoneLabels_" + type);
      }
      return label;
    },
    args: {
      type: 'bubbles',
      baseLayer: "Open Street Maps",
      zoomState: null,
      scalingType: "linear",
      colorRange: ["#FF0000","#FFBF3F","#FFFF00","#BFDF3F","#008000"]
    },
    propMap: [
    ],
    dataReqs: [
      {
        name: 'Known Regions',
    drillOrder : ['rows'],
        reqs :
            [
              {   id: 'rows',
                dataType: 'string',
                dataStructure: 'column',
                caption: 'geography',
                required: true
              },
              {   id: 'color',
                dataType: 'number',
                dataStructure: 'column',
                caption: 'color_by',
                required: true,
                isColorGradient: true,
                allowMultiple: false
              },
              {   id: 'size',
                dataType: 'number',
                dataStructure: 'column',
                caption: 'size_by',
                required: true,
                allowMultiple: false
              },
              {   id: 'columns', // Needed by Analyzer to indicate to render to column (and not rows)
                dataType: 'string',
                dataStructure: 'column',
                caption: 'agg_by',
                required: false,
                allowMultiple: true
              },
              {
                id: 'pattern',
                dataType: 'string',
                values: ["GRADIENT", "3-COLOR", "5-COLOR"],
                ui: {
                  labels: ["gradient", "step_3", "step_5"],
                  group: "options",
                  type: 'combo',
                  caption: "Pattern"
                }
              },

              {
                id: 'colorSet',
                dataType: 'string',
                values: ["ryg", "ryb", "blue", "gray"],
                ui: {
                  labels: ["RYG", "RYB", "blue_scale", "gray_scale"],
                  group: "options",
                  type: 'combo',
                  caption: "Color"
                }
              },


              {
                id: 'reverseColors',
                dataType: 'boolean',
                ui: {
                  label: "reverse_colors",
                  group: "options",
                  type: 'checkbox'
                }
              }
            ]
      },
      {
        name: 'Lat/Long',
        reqs :
            [
              {   id: 'latitude',
                dataType: 'number',
                dataStructure: 'column',
                caption: 'Latitude',
                required: true
              },
              {   id: 'longitude',
                dataType: 'number',
                dataStructure: 'column',
                caption: 'Longitude',
                required: true
              },
              {   id: 'color',
                dataType: 'number',
                dataStructure: 'column',
                caption: 'Color',
                required: true,
                isColorGradient: true
              },
              {   id: 'size',
                dataType: 'number',
                dataStructure: 'column',
                caption: 'Size',
                required: false
              },
              {   id: 'attributes',
                dataType: 'any',
                dataStructure: 'column',
                caption: 'Attributes',
                required: false,
                allowMultiple: true
              }
            ]
      },
      {
        name: 'Advanced',
        reqs :
            [
              {   id: 'Country',
                dataType: 'string',
                dataStructure: 'column',
                caption: 'Country',
                required: false
              },
              {   id: 'CountrySubdivision',
                dataType: 'string',
                dataStructure: 'column',
                caption: 'State/Region',
                required: false
              },
              {   id: 'Municipality',
                dataType: 'string',
                dataStructure: 'column',
                caption: 'City',
                required: false
              },
              {   id: 'PostalCode',
                dataType: 'string',
                dataStructure: 'column',
                caption: 'Zip/Postal Code',
                required: false
              },
              {   id: 'color',
                dataType: 'number',
                dataStructure: 'column',
                caption: 'Color',
                required: true,
                isColorGradient: true
              },
              {   id: 'size',
                dataType: 'number',
                dataStructure: 'column',
                caption: 'Size',
                required: false
              },
              {   id: 'attributes',
                dataType: 'any',
                dataStructure: 'column',
                caption: 'Attributes',
                required: false,
                allowMultiple: true
              }
            ]
      }
    ]
  });

  /*
  pentaho.visualizations.push({
  id: 'open_layers',
  type: 'geographic',
  source: 'openlayers',
  name: 'Area Map',
  'class': 'pentaho.openlayers.OpenLayersMap',
  needsColorGradient: true,
  args: {
  type: 'area'
  },
  propMap: [
  ],
  dataReqs: [
  [
  {   id: 'geography',
  dataType: 'string',
  dataStructure: 'column',
  caption: 'Regions',
  required: true
  },
  {   id: 'color',
  dataType: 'number',
  dataStructure: 'column',
  caption: 'Color',
  required: true,
  isColorGradient: true
  }
  ]
  ]
  });
  */
  
});
