YUI.add("aui-image-viewer",function(e,t){var n=e.getClassName("image","viewer","caption"),r=e.getClassName("image","viewer","close"),i=e.getClassName("image","viewer","base","control"),s=e.getClassName("image","viewer","base","control","left"),o=e.getClassName("image","viewer","base","control","right"),u=e.getClassName("image","viewer","footer","buttons"),a=e.getClassName("image","viewer","footer","content"),f=e.getClassName("image","viewer","info"),l=e.getClassName("image","viewer","mask"),c=e.getClassName("image","viewer","thumbnails");e.ImageViewer=e.Base.create("image-viewer",e.ImageViewerBase,[e.ImageViewerSlideshow,e.WidgetCssClass,e.WidgetStdMod,e.WidgetToggle,e.WidgetPosition,e.WidgetStack,e.WidgetPositionAlign,e.WidgetPositionConstrain,e.WidgetModality],{TPL_CAPTION:'<h4 class="'+n+'"></h4>',TPL_CLOSE:'<button class="close '+i+" "+r+'" type="button">'+'<span class="glyphicon glyphicon-remove"></span></button>',TPL_CONTROL_LEFT:'<a href="#" class="carousel-control left '+i+" "+s+'"><span class="glyphicon glyphicon-chevron-left"></span></a>',TPL_CONTROL_RIGHT:'<a href="#" class="carousel-control right '+i+" "+o+'"><span class="glyphicon glyphicon-chevron-right"></span></a>',TPL_FOOTER_BUTTONS:'<span class="'+u+'"></span>',TPL_FOOTER_CONTENT:'<div class="'+a+'"></div>',TPL_INFO:'<h5 class="'+f+'"></h5>',TPL_PLAYER:'<span><span class="glyphicon glyphicon-play"></span></span>',TPL_THUMBNAILS:'<div class="'+c+'"></div>',renderUI:function(){e.ImageViewer.superclass.renderUI.apply(this,arguments),this._renderFooter()},bindUI:function(){e.ImageViewer.superclass.bindUI.apply(this,arguments),this._attachLinkEvent(),this._eventHandles.push(this.after({linksChange:this._afterLinksChange,thumbnailsConfigChange:this._afterThumbnailsConfigChange}),this._closeEl.after("click",e.bind(this._afterCloseClicked,this)),e.getDoc().on("keydown",e.bind(this._onKeydown,this)),e.after(this._afterFillHeight,this,"fillHeight")),this._bindThumbnails()},destructor:function(){this._detachLinkEvent(),this.get("controlPrevious").remove(!0),this.get("controlNext").remove(!0),this._closeEl.remove(!0),this.get("maskNode").removeClass(l),this._thumbnailsWidget&&this._thumbnailsWidget.destroy()},getLink:function(e){return this.get("links").item(e)},_afterCloseClicked:function(){this.hide()},_afterFillHeight:function(){var e=this.getStdModNode(this.get("fillHeight"));e.setStyle("lineHeight",e.getStyle("height"))},_afterLinksChange:function(){this._attachLinkEvent()},_afterResponsive:function(){e.ImageViewer.superclass._afterResponsive.apply(this,arguments),this.footerNode.setStyle("width",""),this.bodyNode.setStyles({height:"",lineHeight:""}),this._fillHeight(),this._setAlignCenter(!0)},_afterThumbnailsConfigChange:function(e){e.newVal===!1?this._thumbnailsEl.hide():e.prevVal===!1?this._thumbnailsWidget?this._thumbnailsEl.show():(this._renderThumbnailsWidget(),this._bindThumbnails()):this._thumbnailsWidget.setAttrs(this.get("thumbnailsConfig"))},_afterThumbnailsIndexChange:function(){this.set("currentIndex",this._thumbnailsWidget.get("currentIndex"))},_afterUISetVisible:function(){e.ImageViewer.superclass._afterUISetVisible.apply(this,arguments),this.get("visible")?(this._fillHeight(),this._thumbnailsWidget&&this._thumbnailsWidget.updateDimensions(),this._closeEl.show(),this.get("modal")&&this.get("maskNode").addClass(l)):(this._closeEl.hide(),this.get("maskNode").removeClass(l))},_attachLinkEvent:function(){this._detachLinkEvent(),this._linkEvent=this.get("links").on("click",e.bind(this._onClickLinks,this))},_bindControls:function(){this._eventHandles.push(this.get("controlPrevious").after("click",e.bind(this._onClickControl,this)),this.get("controlNext").after("click",e.bind(this._onClickControl,this)))},_bindThumbnails:function(){this._thumbnailsWidget&&this._eventHandles.push(this._thumbnailsWidget.after("currentIndexChange",e.bind(this._afterThumbnailsIndexChange,this)))},_detachLinkEvent:function(){this._linkEvent&&(this._linkEvent.detach(),this._linkEvent=null)},_getInfoTemplate:function(t){return e.Lang.sub(t,{current:this.get("currentIndex")+1,total:this.get("links").size()})},_getThumbnailsConfig:function(t){return t===!1?t:e.merge({height:70,showControls:!1,sources:this._getThumbnailImageSources(),width:"100%"},t)},_getThumbnailImageSources:function(){var e,t,n=this.get("links"),r=this.get("sources"),i=[];for(t=0;t<n.size();t++)e=n.item(t).one("img"),e?i.push(e.getAttribute("src")):i.push(r[t]);return i},_onClickLinks:function(e){e.preventDefault(),this.show(),this.set("currentIndex",this.get("links").indexOf(e.currentTarget))},_onKeydown:function(e){if(!this.get("visible"))return!1;e.isKey("LEFT")?this.prev():e.isKey("RIGHT")?this.next():e.isKey("ESC")&&this.hide()},_onResponsive:function(){e.ImageViewer.superclass._onResponsive.apply(this,arguments),this.footerNode.setStyle("width",0)},_renderControls:function(){var t=e.one("body");t.append(this.get("controlPrevious")),t.append(this.get("controlNext")),this._closeEl=e.Node.create(this.TPL_CLOSE),t.append(this._closeEl)},_renderFooter:function(){var t=e.Node.create(this.TPL_FOOTER_CONTENT);this.setStdModContent("footer",t),this._captionEl=e.Node.create(this.TPL_CAPTION),this._captionEl.selectable(),t.append(this._captionEl),this._infoEl=e.Node.create(this.TPL_INFO),this._infoEl.selectable(),t.append(this._infoEl),t.append(e.Node.create(this.TPL_FOOTER_BUTTONS)),this._thumbnailsEl=e.Node.create(this.TPL_THUMBNAILS),t.append(this._thumbnailsEl),this._renderThumbnailsWidget()},_renderImageListNode:function(){var t=e.Node.create(this.TPL_IMAGE_LIST);return this.setStdModContent("body",t),t.one(".image-viewer-base-image-list-inner")},_renderPlayer:function(){this.get("showPlayer")&&!this._player&&(this._player=e.Node.create(this.TPL_PLAYER),this.get("contentBox").one("."+u).append(this._player))},_renderThumbnailsWidget:function(){var t=this.get("thumbnailsConfig");t===!1?this._thumbnailsEl.hide():(this._thumbnailsEl.show(),this._thumbnailsWidget=(new e.ImageViewerMultiple
(t)).render(this._thumbnailsEl))},_setLinks:function(t){var n,r=[];return t instanceof e.NodeList?n=t:e.Lang.isString(t)?n=e.all(t):n=new e.NodeList([t]),n.size()>0&&(n.each(function(){r.push(this.getAttribute("href"))}),this.set("sources",r)),n},_showCurrentImage:function(){e.ImageViewer.superclass._showCurrentImage.apply(this,arguments),this._syncCaptionUI(),this._syncInfoUI(),this._syncThumbnails()},_syncCaptionUI:function(){var e=this.get("caption"),t;this.get("captionFromTitle")&&(t=this.get("links").item(this.get("currentIndex")),e=t.attr("title")?t.attr("title"):e),this._captionEl.set("text",e)},_syncInfoUI:function(){this._infoEl.setHTML(this.get("infoTemplate"))},_syncThumbnails:function(){this._thumbnailsWidget&&this._thumbnailsWidget.set("currentIndex",this.get("currentIndex"))}},{ATTRS:{caption:{value:"blank",validator:e.Lang.isString},captionFromTitle:{value:!0,validator:e.Lang.isBoolean},centered:{value:!0},height:{value:"100%"},infoTemplate:{getter:"_getInfoTemplate",value:"Image {current} of {total}",validator:e.Lang.isString},links:{lazyAdd:!1,setter:"_setLinks"},modal:{value:!0},thumbnailsConfig:{getter:"_getThumbnailsConfig",value:{}},visible:{value:!1},width:{value:"100%"}},CSS_PREFIX:e.getClassName("image-viewer")})},"3.1.0-deprecated.51",{requires:["widget","widget-modality","widget-position","widget-position-align","widget-position-constrain","widget-stack","widget-stdmod","aui-event","aui-image-viewer-base","aui-image-viewer-multiple","aui-image-viewer-slideshow","aui-node-base","aui-widget-cssclass","aui-widget-toggle"],skinnable:!0});
