define(["dojo/_base/array","dojo/aspect","dojo/_base/declare"],function(e,o,r){return r("dijit.Destroyable",null,{
destroy:function(e){this._destroyed=!0},own:function(){return e.forEach(arguments,function(e){
var r="destroyRecursive"in e?"destroyRecursive":"destroy"in e?"destroy":"remove",t=o.before(this,"destroy",function(o){
e[r](o)}),n=o.after(e,r,function(){t.remove(),n.remove()},!0)},this),arguments}});
});