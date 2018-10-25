YUI.add("aui-form-builder-field-types-modal",function(e,t){var n=e.getClassName("field","type"),r=e.getClassName("form","builder","field","types","list"),i=e.getClassName("modal","title");e.FormBuilderFieldTypesModal=e.Base.create("form-builder-field-types-modal",e.Modal,[],{TPL_HEADER_LABEL:'<h4 class="'+i+'">{addField}</h4>',TPL_TYPES_LIST:'<div class="clearfix '+r+'" role="main"></div>',initializer:function(){this.after("fieldTypesChange",this._afterFieldTypesChange)},bindUI:function(){var t=this.getStdModNode("body");e.FormBuilderFieldTypesModal.superclass.bindUI.apply(this,arguments),this._eventHandles.push(t.delegate("click",this._onClickFieldType,"."+n,this),t.delegate("key",e.bind(this._onKeyPressFieldType,this),"enter","."+n))},renderUI:function(){e.FormBuilderFieldTypesModal.superclass.renderUI.apply(this,arguments),this._uiSetFieldTypes(this.get("fieldTypes"))},_afterFieldTypesChange:function(){this._uiSetFieldTypes(this.get("fieldTypes"))},_onClickFieldType:function(e){var t=e.currentTarget.getData("fieldType");this.hide(),this.fire("selectFieldType",{fieldType:t})},_onFieldTypesModalCloseClick:function(){this.hide()},_onKeyPressFieldType:function(e){this._onClickFieldType(e)},_uiSetFieldTypes:function(t){var n=e.Node.create(this.TPL_TYPES_LIST);n.get("children").remove(),e.Array.each(t,function(e){n.append(e.get("node"))}),this.set("bodyContent",n)},_valueHeaderContent:function(){return e.Lang.sub(this.TPL_HEADER_LABEL,{addField:this.get("strings").addField})},_valueToolbars:function(){return{header:[{cssClass:"close",discardDefaultButtonCssClasses:!0,labelHTML:"<span> \u00d7 </span>",on:{click:e.bind(this._onFieldTypesModalCloseClick,this)}}]}}},{ATTRS:{fieldTypes:{validator:e.Lang.isArray,value:[]},headerContent:{valueFn:"_valueHeaderContent"},strings:{value:{addField:"Add Field"}},toolbars:{validator:e.Lang.isObject,valueFn:"_valueToolbars"}},CSS_PREFIX:"modal-dialog"})},"3.1.0-deprecated.51",{requires:["aui-modal"],skinnable:!0});
