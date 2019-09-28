define("analyzer/cv_api",["dojo/_base/lang","analyzer/API"],function(n,e){cv="undefined"==typeof cv?{
analyzerProperties:{}}:cv,"undefined"==typeof cv.api&&(cv.api=new e);var a=!1;try{
window.parent.document||(a=!0)}catch(i){a=!0}try{window.customDomain&&a&&(document.domain=window.customDomain);
}catch(i){cv.api.log.error(i)}try{window.parent&&(window.parent.onAnalyzerLoad&&window.parent.onAnalyzerLoad(cv.api,window.frameElement&&window.frameElement.id),
window.parent.onAnalyzerReady&&cv.api.event.registerInitListener(function(n,e){window.parent.onAnalyzerReady(e.api,window.frameElement&&window.frameElement.id);
}))}catch(i){cv.api.log.error(i)}return cv.api}),define("cv_api",function(){});