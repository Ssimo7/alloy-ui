YUI.add("aui-undo-redo",function(e,t){e.UndoRedo=e.Base.create("undo-redo",e.Base,[],{ACTION_TYPE_REDO:"redo",ACTION_TYPE_UNDO:"undo",AFTER_REDO:"afterRedo",AFTER_UNDO:"afterUndo",BEFORE_REDO:"beforeRedo",BEFORE_UNDO:"beforeUndo",EVENT_PREFIX_AFTER:"after",EVENT_PREFIX_BEFORE:"before",_currentStateIndex:-1,_pendingActions:null,_states:null,initializer:function(){this.clearHistory(),this.publish({afterRedo:{},afterUndo:{},beforeRedo:{defaultFn:this._defBeforeActionFn,preventedFn:this._prevBeforeActionFn},beforeUndo:{defaultFn:this._defBeforeActionFn,preventedFn:this._prevBeforeActionFn}}),this.after("maxUndoDepthChange",this._removeStatesBeyondMaxDepth)},add:function(e){if(!e.undo||!e.redo)throw new Error("Invalid state. States used in UndoRedo need to have both the 'undo'  and the 'redo' functions defined");this._currentStateIndex<this._states.length-1&&(this._states=this._states.slice(0,this._currentStateIndex+1));if(this._tryMerge(e))return;this._states.push(e),this._currentStateIndex++,this._removeStatesBeyondMaxDepth()},canRedo:function(){return this._currentStateIndex<this._states.length-1&&!this._shouldIgnoreNewActions()},canUndo:function(){return this._currentStateIndex>=0&&!this._shouldIgnoreNewActions()},clearHistory:function(){this._states=[],this._pendingActions=[],this._currentStateIndex=-1},isActionInProgress:function(){return this._pendingActions.length>0},redo:function(){return this.canRedo()?(this._currentStateIndex++,this._runAction({state:this._states[this._currentStateIndex],type:this.ACTION_TYPE_REDO,undoIndex:this._currentStateIndex-1}),!0):!1},redoPeek:function(){return this._states[this._currentStateIndex+1]},undo:function(){return this.canUndo()?(this._runAction({state:this._states[this._currentStateIndex],type:this.ACTION_TYPE_UNDO,undoIndex:this._currentStateIndex}),this._currentStateIndex--,!0):!1},undoPeek:function(){return this._states[this._currentStateIndex]},_afterAction:function(e){this.fire(this._makeEventName(this.EVENT_PREFIX_AFTER,e.type)),this._pendingActions.shift(),this._removeStatesBeyondMaxDepth(),this._runNextPendingAction()},_defBeforeActionFn:function(){var t=this._pendingActions[0],n=t.state[t.type]();e.Promise.isPromise(n)?n.then(e.bind(this._afterAction,this,t)):this._afterAction(t)},_makeEventName:function(e,t){return e+t.substring(0,1).toUpperCase()+t.substring(1)},_prevBeforeActionFn:function(){var e=this._pendingActions[0];this._currentStateIndex=e.undoIndex,this._pendingActions=[],this._removeStatesBeyondMaxDepth()},_removeStatesBeyondMaxDepth:function(){var e=this._currentStateIndex+1-this.get("maxUndoDepth");e>0&&!this._pendingActions.length&&(this._states=this._states.slice(e),this._currentStateIndex-=e)},_runAction:function(e){this._pendingActions.push(e),this._pendingActions.length===1&&this._runNextPendingAction()},_runNextPendingAction:function(){var e=this._pendingActions[0];if(!e)return;this.fire(this._makeEventName(this.EVENT_PREFIX_BEFORE,e.type))},_shouldIgnoreNewActions:function(){return!this.get("queueable")&&this.isActionInProgress()},_tryMerge:function(t){return this._currentStateIndex>=0&&e.Lang.isFunction(t.merge)?t.merge(this.undoPeek()):!1}},{ATTRS:{maxUndoDepth:{validator:function(e){return e>=1},value:100},queueable:{validator:e.Lang.isBoolean,value:!1}}})},"3.0.3-deprecated.86",{requires:["base","base-build","promise"]});
