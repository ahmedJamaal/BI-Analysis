/** webcontext.js is created by a PentahoWebContextFilter. This filter searches for an incoming URI having "webcontext.js" in it. If it finds that, it write CONTEXT_PATH and FULLY_QUALIFIED_SERVER_URL and it values from the servlet request to this js **/ 



/** @deprecated - use 'pentaho/environment' module's variable instead */
var CONTEXT_PATH = "\/pentaho\/";

/** @deprecated - use 'pentaho/environment' module's variable instead */
var FULL_QUALIFIED_URL = "http:\/\/localhost:8081\/pentaho\/";

/** @deprecated - use 'pentaho/environment' module's variable instead */
var SERVER_PROTOCOL = "http";

/** @deprecated - use 'pentaho/environment' module's variable instead */
var PENTAHO_CONTEXT_NAME = "dashboards";

/** @deprecated - use 'pentaho/environment' module's variable instead */
var active_theme = "ruby";

var requireCfg = {
  waitSeconds: 30,
  paths: {},
  shim: {},
  map: {"*": {}},
  bundles: {},
  config: {"pentaho/modules": {}},
  packages: []
};

// configuration for 'pentaho/environment' amd module
requireCfg.config["pentaho/environment"] = {
  application: null,
  theme: "ruby",
  locale: "en_US",
  user: {
    id: "admin",
    home: "\/home\/admin"
  },
  reservedChars: "\/\\\t\r\n",
  server: {
    root: "\/pentaho\/",
    packages: "\/pentaho\/osgi\/",
    services: "\/pentaho\/osgi\/cxf\/"
  }
};

<!-- Injecting web resources defined in by plugins as external-resources for: requirejs-->
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/reporting/reportviewer/reporting-require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/pentaho-interactive-reporting/resources/web/pir-require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/pentaho-geo/resources/web/geo-require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/pentaho-cdf-dd/js/cde-require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/pentaho-cdf/js/cdf-require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/config/deploy/client-config-enabler-require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "js/require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "api/repos/dashboards/script/dashboards-require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/common-ui/resources/web/common-ui-require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/analyzer/scripts/analyzer-require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/admin-plugin/resources/admin-plugin-require-js-cfg.js?context=dashboards'></scr"+"ipt>");
document.write("<script type='text/javascript' src='" + CONTEXT_PATH + "content/common-ui/resources/web/require.js'></scr"+"ipt>");

document.write("<script type='text/javascript' src='" + CONTEXT_PATH + "content/common-ui/resources/web/require-cfg.js'></scr"+"ipt>");

/** @deprecated - use 'pentaho/environment' module's variable instead */
var SESSION_NAME = "admin";

/** @deprecated - use 'pentaho/environment' module's variable instead */
var SESSION_LOCALE = "en_US";
// If RequireJs is available, supply a module
if (typeof(pen) !== 'undefined' && pen.define) {
  pen.define('Locale', {locale: "en_US" });
}

/** @deprecated - use 'pentaho/environment' module's variable instead */
var HOME_FOLDER = "\/home\/admin";

/** @deprecated - use 'pentaho/environment' module's variable instead */
var RESERVED_CHARS = "\/\\\t\r\n";

/** @deprecated - use 'pentaho/environment' module's variable instead */
var RESERVED_CHARS_DISPLAY = "\/, \\, \\t, \\r, \\n";

/** @deprecated - use 'pentaho/environment' module's variable instead */
var RESERVED_CHARS_REGEX_PATTERN = /.*[\/\\\t\r\n]+.*/;

document.write("<script type='text/javascript' src='" + CONTEXT_PATH + "osgi/requirejs-manager/js/require-init.js?requirejs=false'></scr"+"ipt>");

<!-- Injecting web resources defined in by plugins as external-resources for: global-->
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "js/themes.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/common-ui/resources/themes/jquery.js?context=dashboards'></scr"+"ipt>");
document.write("<link rel='stylesheet' type='text/css' href='" + CONTEXT_PATH + "content/data-access/resources/gwt/datasourceEditorDialog.css?context=dashboards'/>");
document.write("<link rel='stylesheet' type='text/css' href='" + CONTEXT_PATH + "content/data-access/resources/gwt/datasourceAdminDialog.css?context=dashboards'/>");
document.write("<link rel='stylesheet' type='text/css' href='" + CONTEXT_PATH + "content/common-ui/resources/web/angular-directives/angular-directives.css?context=dashboards'/>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/common-ui/resources/web/dojo/djConfig.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/common-ui/resources/web/cache/cache-service.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/common-ui/resources/themes/jquery.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/common-ui/resources/themes/themeUtils.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/common-ui/resources/web/util/URLEncoder.js?context=dashboards'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/common-ui/resources/web/util/SessionExpiryCheckStartingPoint.js?context=dashboards'></scr"+"ipt>");
<!-- Injecting web resources defined in by plugins as external-resources for: dashboards-->
document.write("<script language='javascript' type='text/javascript' src='" + CONTEXT_PATH + "content/analyzer/scripts/widget/AnalyzerDashboardWidget.js?context=dashboards'></scr"+"ipt>");var IS_VALID_PLATFORM_LICENSE = true;

