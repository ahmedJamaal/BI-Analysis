define(["dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/dom-attr","dojo/dom-style","dojo/on","dojo/window","./_Widget","./_TemplatedMixin","./BackgroundIframe","./Viewport","./main"],function(o,t,e,i,n,d,s,a,l,h,r,c){
var m=o("dijit.DialogUnderlay",[a,l],{templateString:"<div class='dijitDialogUnderlayWrapper'><div class='dijitDialogUnderlay' tabIndex='-1' data-dojo-attach-point='node'></div></div>",
dialogId:"","class":"",_modalConnects:[],_setDialogIdAttr:function(o){i.set(this.node,"id",o+"_underlay"),
this._set("dialogId",o)},_setClassAttr:function(o){this.node.className="dijitDialogUnderlay "+o,
this._set("class",o)},postCreate:function(){this.ownerDocumentBody.appendChild(this.domNode),
this.own(d(this.domNode,"keydown",t.hitch(this,"_onKeyDown"))),this.inherited(arguments);
},layout:function(){var o=this.node.style,t=this.domNode.style;t.display="none";var e=s.getBox(this.ownerDocument);
t.top=e.t+"px",t.left=e.l+"px",o.width=e.w+"px",o.height=e.h+"px",t.display="block";
},show:function(){this.domNode.style.display="block",this.open=!0,this.layout(),this.bgIframe=new h(this.domNode);
var o=s.get(this.ownerDocument);this._modalConnects=[r.on("resize",t.hitch(this,"layout")),d(o,"scroll",t.hitch(this,"layout"))];
},hide:function(){for(this.bgIframe.destroy(),delete this.bgIframe,this.domNode.style.display="none";this._modalConnects.length;)this._modalConnects.pop().remove();
this.open=!1},destroy:function(){for(;this._modalConnects.length;)this._modalConnects.pop().remove();
this.inherited(arguments)},_onKeyDown:function(){}});return m.show=function(o,t){
var e=m._singleton;!e||e._destroyed?e=c._underlay=m._singleton=new m(o):o&&e.set(o),
n.set(e.domNode,"zIndex",t),e.open||e.show()},m.hide=function(){var o=m._singleton;
o&&!o._destroyed&&o.hide()},m});