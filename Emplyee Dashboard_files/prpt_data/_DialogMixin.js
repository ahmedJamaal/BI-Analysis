define(["dojo/_base/declare","./a11y"],function(t,e){return t("dijit._DialogMixin",null,{
execute:function(){},onCancel:function(){},onExecute:function(){},_onSubmit:function(){
this.onExecute(),this.execute(this.get("value"))},_getFocusItems:function(){var t=e._getTabNavigable(this.containerNode);
this._firstFocusItem=t.lowest||t.first||this.closeButtonNode||this.domNode,this._lastFocusItem=t.last||t.highest||this._firstFocusItem;
}})});