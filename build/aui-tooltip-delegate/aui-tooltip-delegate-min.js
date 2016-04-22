YUI.add("aui-tooltip-delegate",function(e,t){var n=e.Lang,r=e.config.doc;e.TooltipDelegate=e.Base.create("tooltip-delegate",e.Base,[],{items:null,tooltip:null,initializer:function(){var e=this;e._eventHandles=[],e.bindUI()},destructor:function(){var t=this;(new e.EventHandle(t._eventHandles)).detach()},bindUI:function(){var t=this,n,r;n=t.get("container"),r=t.get("trigger"),t._eventHandles.push(n.delegate(t.get("triggerShowEvent"),e.bind(t._onUserShowInteraction,t),r),n.delegate(t.get("triggerHideEvent"),e.bind(t._onUserHideInteraction,t),r))},getTooltip:function(){var t=this,n=t.tooltip;return n||(n=t.tooltip=new e.Tooltip({align:t.get("align"),bindDOMEvents:!1,cssClass:t.get("cssClass"),duration:t.get("duration"),formatter:t.get("formatter"),opacity:t.get("opacity"),position:t.get("position"),html:t.get("html"),visible:!1,zIndex:t.get("zIndex")})),n},_onUserHideInteraction:function(){var e=this;e.getTooltip().hide()},_onUserShowInteraction:function(e){var t=this,n;n=e.currentTarget,t.getTooltip().set("trigger",n).render().show()},_validateTriggerEvent:function(t){return e.Lang.isString(t)?!0:e.Lang.isArray(t)?t.every(function(t){return e.Lang.isString(t)}):!1}},{ATTRS:{align:{value:null},container:{setter:e.one,value:r,writeOnce:!0},cssClass:{value:null},duration:{value:.15,writeOnce:!0},formatter:e.Tooltip.ATTRS.formatter,html:{value:!1,validator:n.isBoolean},opacity:{value:.8,writeOnce:!0},position:e.WidgetPositionAlignSuggestion.ATTRS.position,trigger:e.WidgetPositionAlignSuggestion.ATTRS.trigger,triggerHideEvent:{validator:"_validateTriggerEvent",value:"mouseleave",writeOnce:!0},triggerShowEvent:{validator:"_validateTriggerEvent",value:"mouseenter",writeOnce:!0},zIndex:{}}})},"3.0.3-deprecated.30",{requires:["node-event-delegate","aui-tooltip-base"]});
