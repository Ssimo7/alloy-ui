YUI.add("aui-text-unicode",function(e,t){var n=e.Text.Data.Unicode,r={compile:function(e,t){var r=null;return n.hasOwnProperty(e)&&(r=new RegExp(n[e],t)),r},match:e.cached(function(e,t,n){return r.compile(t,n).exec(e)}),test:e.cached(function(e,t,n){return r.compile(t,n).test(e)})};e.Text.Unicode=r},"3.0.3-deprecated.44",{requires:["aui-text-data-unicode"]});
