"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{443:function(t,e,r){r.d(e,{Hg:function(){return i},IQ:function(){return f},Jh:function(){return h},pm:function(){return o},s_:function(){return p}});var n=r(861),a=r(757),c=r.n(a),u=r(340),s="3baa68ea77749629240e5bf215168455";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(439),a=r(791),c=r(689),u=r(443),s="Cast_wrapper__XmIBi",i="Cast_item__a0CDL",o="Cast_image__mOsuM",p=r(184),f=function(){var t=(0,a.useState)(null),e=(0,n.Z)(t,2),r=e[0],f=e[1],h=(0,c.UO)().movieId;if((0,a.useEffect)((function(){(0,u.IQ)(h).then(f)}),[h]),r)return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{className:s,children:r.map((function(t){return(0,p.jsxs)("li",{className:i,children:[(0,p.jsx)("img",{className:o,src:t.profile_path?"https://www.themoviedb.org/t/p/w500/".concat(t.profile_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:t.original_name}),(0,p.jsx)("h3",{children:t.name}),(0,p.jsxs)("p",{children:["As: ",t.character]})]},t.id)}))})})}}}]);
//# sourceMappingURL=76.852d6a23.chunk.js.map