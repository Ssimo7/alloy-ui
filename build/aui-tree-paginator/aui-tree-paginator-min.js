YUI.add("aui-tree-paginator",function(e,t){function a(){var t=this;e.after(t._bindPaginatorUI,this,"bindUI"),e.after(t._syncPaginatorUI,this,"syncUI")}var n=e.Lang,r=n.isObject,i=n.isValue,s=e.getClassName,o=s("tree","node","paginator"),u='<a class="'+o+'" hrsef="javascript:void(0);">{moreResultsLabel}</a>';a.ATTRS={paginator:{setter:function(t){var r=e.Node.create(n.sub(u,{moreResultsLabel:t.moreResultsLabel||"Load more results"}));return e.merge({alwaysVisible:!1,autoFocus:!0,element:r,endParam:"end",limitParam:"limit",start:0,startParam:"start"},t)},validator:r}},a.prototype={_bindPaginatorUI:function(){var t=this,n=t.get("paginator");n&&n.element.on("click",e.bind(t._handlePaginatorClickEvent,t)),t._createEvents()},_createEvents:function(){var e=this;e.publish("paginatorClick",{defaultFn:e._defPaginatorClickFn,prefix:"tree-node-io"})},_defPaginatorClickFn:function(){var e=this,t=e.get("paginator");i(t.limit)&&(t.start=e.getChildrenLength()),e.get("io")&&e.initIO()},_handlePaginatorClickEvent:function(e){var t=this,n=t.getEventOutputMap(t);t.fire("paginatorClick",n),e.halt()},_syncPaginatorIOData:function(e){var t=this,n=t.get("paginator");if(n&&i(n.limit)){var r=e.cfg.data||{};r[n.limitParam]=n.limit,r[n.startParam]=n.start,r[n.endParam]=n.start+n.limit,e.cfg.data=r}},_syncPaginatorUI:function(e){var t=this,n=t.get("paginator");if(n){var r=!0;e&&(r=e.length>0);var i=t.getChildrenLength(),s=n.total||i,o=i&&r&&s>i;if(n.alwaysVisible||o){t.get("container").append(n.element.show());if(n.autoFocus)try{n.element.focus()}catch(u){}}else n.element.hide()}}},e.TreeViewPaginator=a},"3.1.0-deprecated.55",{requires:["yui-base"]});
