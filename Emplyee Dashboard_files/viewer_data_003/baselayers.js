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

/*
 You can edit this file to set the base map layers that you want to be available to users.
 You can mix and match map layers from different providers.
 The order that the Layer objects are created below is the order they will appear UI the layer switcher UI
 Some map layers (Google, Yahoo etc) require additional imports
 */

pentaho = typeof pentaho == "undefined" ? {} : pentaho;
pentaho.openlayers = pentaho.openlayers || {};

// Start Google Maps libraries

// Google maps api strongly encourages authentication. Check https://developers.google.com/maps/documentation/javascript/get-api-key
// on how to get one and set it on the variable below.
// pentaho.openlayers.googleApiKey = "API_KEY";

// Add the import
if (pentaho.openlayers.googleApiKey) {
  document.write('<script src="' + SERVER_PROTOCOL + '://maps.google.com/maps/api/js?v=3&key=' + pentaho.openlayers.googleApiKey + '"></script>');
}

// End Google Maps libraries

pentaho.openlayers.getMapLayers = function () {
  pentaho.geo.baselayers = [];

  // Check http://dev.openlayers.org/releases/OpenLayers-2.13.1/doc/apidocs/files/OpenLayers-js.html
  // on how to add additional layers.

  if (typeof google != "undefined") {
    // the Google Map API should have been loaded by now
    pentaho.geo.baselayers.push(
        new OpenLayers.Layer.Google(
            "Google Physical",
            {'sphericalMercator': true, type: google.maps.MapTypeId.TERRAIN}
        )
    );

    pentaho.geo.baselayers.push(
        new OpenLayers.Layer.Google(
            "Google Streets", // the default
            {'sphericalMercator': true, numZoomLevels: 20}
        )
    );

    pentaho.geo.baselayers.push(
        new OpenLayers.Layer.Google(
            "Google Hybrid",
            {'sphericalMercator': true, type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20}
        )
    );

    pentaho.geo.baselayers.push(
        new OpenLayers.Layer.Google(
            "Google Satellite",
            {'sphericalMercator': true, type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22}
        )
    );
  } else {
    if (window.console && pentaho.openlayers.googleApiKey) {
      console.log("The Google Maps API could not be accessed. Are you connected to the internet?");
    }
  }

/*
  pentaho.geo.baselayers.push(
      new OpenLayers.Layer.Bing({
        key: "",
        type: "Road"
      })
  );

  pentaho.geo.baselayers.push(
      new OpenLayers.Layer.Bing({
        key: "",
        type: "Aerial"
      })
  );

  pentaho.geo.baselayers.push(
      new OpenLayers.Layer.Bing({
        key: "",
        type: "AerialWithLabels",
        name: "Bing Aerial With Labels"
      })
  );

  pentaho.geo.baselayers.push(
      new OpenLayers.Layer.Yahoo("Yahoo")
  );
*/

  pentaho.geo.baselayers.push(
      new OpenLayers.Layer.OSM("Open Street Maps")
  );

/*
  pentaho.geo.baselayers.push(
      new OpenLayers.Layer.WMS(
          "OpenLayers WMS",
          "http://vmap0.tiles.osgeo.org/wms/vmap0",
          {layers: 'basic'}
      )
  );

  pentaho.geo.baselayers.push(
      new OpenLayers.Layer.OSM("MapQuest-OSM Tiles", [
        "http://otile1.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
        "http://otile2.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
        "http://otile3.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
        "http://otile4.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png"])
  );

  pentaho.geo.baselayers.push(
      new OpenLayers.Layer.OSM("MapQuest Open Aerial Tiles", [
        "http://oatile1.mqcdn.com/naip/${z}/${x}/${y}.png",
        "http://oatile2.mqcdn.com/naip/${z}/${x}/${y}.png",
        "http://oatile3.mqcdn.com/naip/${z}/${x}/${y}.png",
        "http://oatile4.mqcdn.com/naip/${z}/${x}/${y}.png"])
  );
*/

  if (pentaho.openlayers.getCustomBaselayers) {
    if (window.console) {
      console.log('Getting custom base layers');
    }
    pentaho.openlayers.getCustomBaselayers();
  }

  return pentaho.geo.baselayers;
}
