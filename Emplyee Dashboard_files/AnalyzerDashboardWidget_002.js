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

pen.require(["local!Ext"], function(){
  pen.require(["cdf/components/BaseComponent", "dashboards/oss-module", "dashboards/dashboard-module", "common-ui/util/URLEncoder"],
    function( BaseComponent, ossModule, dashModule, Encoder ){

      window.AnalyzerComponent = BaseComponent.extend({
      type: "AnalyzerComponent",
      executeAtStart: true,
      iconImgSrc:'../../../../../repos/analyzer/images/analysis_report_file_icon.png',
      isDirty : false,
      setDirty : function(isDirty) {
        this.isDirty = isDirty;
      },

      getOutputParameters : function(){//TODO: [[name, enabled, inner_id]]
        return this.outputParameters;
      },
      setOutputParameters : function(outputParameters){
        for(var i=0; i< outputParameters.length; i++){
          this.setColumnContentLinkStatus(i, OutputParametersHelper.isParamEnabled(outputParameters[i]));
        }
      },
      setColumnContentLinkStatus : function (colIdx, enabled){
        if(this.outputParameters && this.outputParameters.length > colIdx){
          var prevEnabled = this.outputParameters[colIdx][OutputParametersHelper.OUT_PARAMS_ENABLED_IDX];
          if(enabled && !prevEnabled){
            //set default
            var dataId = this.outputParameters[colIdx][OutputParametersHelper.OUT_PARAMS_ID_IDX];
            var paramUID = OutputParametersHelper.getOutParameterUID(this, dataId);
            pentahoDashboardController.setParameterAndDefaultValue(null, paramUID, null);
          }
          this.outputParameters[colIdx][OutputParametersHelper.OUT_PARAMS_ENABLED_IDX] = enabled;
        }
      },

      update : function() {
        var localThis = this;

        try {

            var path = Encoder.encodeRepositoryPath( this.path );
            var reportURL = CONTEXT_PATH + "api/repos/" + Encoder.encode("{0}", path ) + "/viewer?frameless=true";

          // Add args
          var p = new Array(this.parameters.length);
          for(var i= 0, len = p.length; i < len; i++){
            var arg = "&" + Encoder.encode("{0}", this.parameters[i][0]) + "=";

            var paramVal = (this.parameters[i][1] == null || this.parameters[i][1] == "") ? this.parameters[i][2] : pentahoDashboardController.cdfDashboard.getParameterValue(this.parameters[i][1]);
            if(paramVal == "NIL" || paramVal == ""){
              paramVal = this.parameters[i][2];
              if(paramVal != "NIL"){
                reportURL += arg + Encoder.encode("{0}", paramVal);
              }
            } else if (typeof(paramVal) == 'string') {
              reportURL += arg + Encoder.encode("{0}", paramVal);
            } else if (typeof(paramVal) == 'object' && paramVal.length) {
              for (var prop in paramVal) {
                var param = paramVal[prop];
                if (typeof(param) == 'string') {
                  reportURL += arg + Encoder.encode("{0}", param);
                }
              }
            }
          }

          // Remember which content links are currently being shown 
          this.cl = "";

          // Add content linking args
          if(this.outputParameters) {
            var cl = new Array(this.outputParameters.length);
            for(var j= 0, len = cl.length; j < len; j++){
              if (this.outputParameters[j][1] == true ) {
                //EC: The widgetId is included here as a temporary solution for content linking.
                var arg = "&::cl=";
                if (this.outputParameters[j].length == 3) {
                  var paramid = this.outputParameters[j][2];

                  //Temporary fix until removal of widget id from parameter name
                  if(paramid.indexOf("$") > 0){
                    paramid = paramid.substring(paramid.indexOf("$")+1);
                  }
                  reportURL += arg + Encoder.encode("{0}", paramid);
                  this.cl += paramid;
                } else {
                  // something isn't right here
                }
              }
            }
          }

          // If 1) iframe already exists, 2) iframe's report matches this report and 
          // 3) last set of content links match
          // 4) we won't get ReferenceError, using cv, then
          // just update the report XML directly instead of reloading the whole iframe.
          var contentIframe = $("#"+localThis.htmlObject+" iframe");
          if ((contentIframe.size() > 0) && (contentIframe[0].getAttribute("action") == escape(this.action)) &&
              (contentIframe[0].getAttribute("cl") == escape(this.cl)) && typeof contentIframe[0].contentWindow.cv != 'undefined' ) {
            contentIframe[0].contentWindow.setTimeout(function() { 
              if(this.cv) {
                this.cv.getActiveReport().setReportXML(reportURL);
              } else {
                contentIframe[0].contentWindow.cv.getActiveReport().setReportXML(reportURL);
              }
            });
          } else {
            var xactionIFrameHTML = "<iframe onload='AnalyzerComponent.updateScreenPos(this)' id=\"iframe_"+ this.htmlObject + "\"" +
                " frameborder=\"0\"" +
                " height=\"100%\"" +
                " width=\"100%\"" +
                " cl=\"" + escape(this.cl)+ "\"" +
                " action=\"" + escape(this.action)+ "\" src=\"";
            xactionIFrameHTML += reportURL + "\"></iframe>";
            setTimeout(function(){$("#"+localThis.htmlObject).html(xactionIFrameHTML)});
          }

        } catch (e) {
          // don't cause the rest of CDF to fail if xaction component fails for whatever reason
        }
      },

      print: function(title) {
        var container = document.getElementById(this.htmlObject);
        //get the frame we use to view the report.
        var frame = container.getElementsByTagName("IFRAME").item(0);
        frame.contentWindow.setTimeout("cv.getActiveReport().getReportPDF();", 1);
        return;
        var contentDocument = frame.contentDocument,
            contentElement = contentDocument.body,
            head = contentDocument.documentElement.getElementsByTagName("HEAD").item(0).innerHTML,
            baseURI = contentDocument.baseURI,
            body = contentElement.innerHTML,
            divs = contentElement.getElementsByTagName("DIV"),
            i, div, index, html, numDivs = divs.length,
            win = window.open("", "_blank"),
            targetDocument = win.document
            ;
        for (i = 0; i < numDivs; i++) {
          div = divs.item(i);
          if (div.className === "reportContainer") {
            html = div.innerHTML;
            index = body.indexOf(html);
            if (index === -1) break;
            body = body.substr(0, index) + body.substr(index + html.length);
            break;
          }
        }
        targetDocument.open();
        targetDocument.write("<html>");
        targetDocument.write(  "<head>");
        targetDocument.write(    "<title>" + title + "</title>");
        targetDocument.write(    "<base href=\"" + baseURI + "\"\/>");
        targetDocument.write(    head.replace(/<title>.+<\/title>/ig, ""));
        targetDocument.write(  "<\/head>");
        targetDocument.write(  "<body>");
        targetDocument.write(    body);
        targetDocument.write(    "<script type=\"text\/javascript\">print();<\/script>");
        targetDocument.write(  "<\/body>");
        targetDocument.write("<\/html>");
        targetDocument.close();

      },

      // This will retrieve the parameters for this Analyzer report from the server
      refreshParameters : function() {

        this.staticParameters = true;
        // save a reference to this for use in nested functions
        var thisComponent = this;

        var defaultParams = [];
        var filePath = Encoder.encodeRepositoryPath( this.path );
        $.ajax({
          url: Encoder.encode(CONTEXT_PATH + "api/repos/{0}/parameter", filePath),
          success:function(data) {
            $('parameter', data).each(function() {
              var paramId = $(this).attr('name');
              var paramLabel = $(this).find('attribute[name=label]').eq(0).attr("value");
              var defaultVals = $(this).find('values').find('value[selected=true]');
              if(defaultVals && defaultVals.length > 0){
                for(var y=0; y< defaultVals.length; y++){
                  var paramDefaultValue = $(this).find('values').find('value[selected=true]').eq(y).attr('value');
                  var paramRequired = $(this).attr('is-mandatory');
                  if (paramDefaultValue == undefined) {
                    paramDefaultValue = '';
                  }
                  defaultParams.push([paramLabel, '', paramDefaultValue]);
                }
              }
            });

            WidgetHelper.mergeParameters(thisComponent, defaultParams);

            // handle the output parameters too
            WidgetHelper.mergeOutputParameters(thisComponent, data);

          },
          type: "GET",
          async:   false,
          mimeType: "text/xml",
          dataType: "xml"
        });
      },
      getGUID : function(){
        if(this.GUID == null){
          this.GUID = WidgetHelper.generateGUID();
        }
        return this.GUID;
      }

    });

    AnalyzerComponent.newInstance = function(prptref, localizedFileName) {

      var widget = new AnalyzerComponent();
      widget.localizedName = localizedFileName;
      widget.GUID = WidgetHelper.generateGUID();
      widget.type = "AnalyzerComponent";

      // used in GWT properties panel
      widget.iframe = true;
      widget.parameters = [];
      widget.outputParameters = [];
      var selectedWidgetIndex = pentahoDashboardController.getSelectedWidget();
      widget.name = 'widget' + selectedWidgetIndex;
      widget.htmlObject = 'content-area-Panel_' + selectedWidgetIndex;
      var vals = XActionHelper.parseXaction(prptref);

      widget.xactionPath = prptref;
      widget.solution = vals[0];
      widget.path = prptref;
      widget.action = vals[2];
      currentWidget = widget;

      widget.refreshParameters();
      currentWidget = widget;
      var details = XActionHelper.genXaction(widget.solution, widget.path, widget.action);
      PropertiesPanelHelper.initPropertiesPanel(details);

    }
    AnalyzerComponent.updateScreenPos = function(frame){
      try{
        if(typeof frame.contentWindow.setOriginAdjustment != "undefined"){
          var offset = $(frame).offset();
          frame.contentWindow.setOriginAdjustment(window.originAdjustmentLeft + offset.left, window.originAdjustmentTop + offset.top);
        }
      } catch (/* XSS catch */ e){
        if (typeof(console)!=="undefined") {
          console.error(e);
        }
      }
    }

    resolveOutParams = function(outputParameters) {
      if(!outputParameters) {
        return [];
      }
      if (outputParameters.length) {
        return outputParameters;
      } else {
        var params = [];
        var ok = true;
        var i = 0;
        while(ok) {
          var param = eval("outputParameters.parameter" + i);
          if (typeof(param) != 'undefined') {
            ok = true;
            i++;
            var id = param.name;
            if (typeof(param.id) != 'undefined') {
              id = param.id;
            }
            params.push([param.name, param.enabled, id]);
          } else {
            ok = false;
          }
        }
        return params;
      }
    }

    PentahoDashboardController.registerComponentForFileType("xanalyzer", AnalyzerComponent);

  });
});
