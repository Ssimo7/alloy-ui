YUI.add("aui-diagram-node-fork",function(e,t){var n=e.Component.create({NAME:"diagram-node",ATTRS:{height:{value:60},type:{value:"fork"},width:{value:60}},EXTENDS:e.DiagramNodeState,prototype:{hotPoints:e.DiagramNode.DIAMOND_POINTS,renderShapeBoundary:e.DiagramNodeCondition.prototype.renderShapeBoundary,_valueShapeBoundary:e.DiagramNode.prototype._valueShapeBoundary}});e.DiagramNodeFork=n},"3.0.3-deprecated.44",{requires:["aui-diagram-node-state"]});
