define(["./kernel","./lang","../sniff"],function(i,s,r){return r("host-browser")?(i._name="browser",
s.mixin(i,{isBrowser:!0,isFF:r("ff"),isIE:r("ie"),isKhtml:r("khtml"),isWebKit:r("webkit"),
isMozilla:r("mozilla"),isMoz:r("mozilla"),isOpera:r("opera"),isSafari:r("safari"),
isChrome:r("chrome"),isMac:r("mac"),isIos:r("ios"),isAndroid:r("android"),isWii:r("wii"),
isQuirks:r("quirks"),isAir:r("air")}),r):r});