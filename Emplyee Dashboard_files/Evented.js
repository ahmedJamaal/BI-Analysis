define(["./aspect","./on"],function(t,n){"use strict";function r(){}var e=t.after;
return r.prototype={on:function(t,r){return n.parse(this,t,r,function(t,n){return e(t,"on"+n,r,!0);
})},emit:function(t,r){var e=[this];return e.push.apply(e,arguments),n.emit.apply(n,e);
}},r});