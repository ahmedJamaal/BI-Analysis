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
var prefix =
  // environment configured
  (typeof ENVIRONMENT_CONFIG !== "undefined" && typeof ENVIRONMENT_CONFIG.paths !== "undefined" &&
   typeof ENVIRONMENT_CONFIG.paths["pir"] !== "undefined") ? ENVIRONMENT_CONFIG.paths["pir"] :
  // production
  (typeof CONTEXT_PATH != "undefined") ? CONTEXT_PATH+'api/repos/pentaho-interactive-reporting/resources/web/pir' : 'pir';
if(typeof KARMA_RUN !== "undefined" || typeof document == "undefined" || document.location.href.indexOf("debug=true") > 0){
  requireCfg['paths']['pir'] = prefix;
} else {
  requireCfg['paths']['pir'] = prefix+'/compressed';
}
