"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{443:function(e,t,n){n.d(t,{Hg:function(){return u},IQ:function(){return d},Jh:function(){return p},pm:function(){return o},s_:function(){return l}});var r=n(861),a=n(757),i=n.n(a),s=n(340),c="3baa68ea77749629240e5bf215168455";s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),a=n(791),i=n(689),s=n(87),c=n(443),u="MovieDetails_link__U+v+7",o="MovieDetails_backBtn__rLQ3F",l="MovieDetails_wrapper__YMWLn",d="MovieDetails_details__TGlfg",p="MovieDetails_additional__+f3rh",f=n(184),v=function(){var e,t,n,v=(0,a.useState)(null),h=(0,r.Z)(v,2),m=h[0],_=h[1],x=(0,i.UO)().movieId,w=(0,i.TH)(),g=(0,a.useRef)(null!==(e=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");if((0,a.useEffect)((function(){(0,c.s_)(x).then(_)}),[x]),m)return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:l,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(s.rU,{to:g.current,className:u,children:(0,f.jsx)("button",{className:o,children:"\u2190 Go back"})}),(0,f.jsx)("img",{src:m.poster_path?"https://www.themoviedb.org/t/p/w500/".concat(m.poster_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:"".concat(m.title)})]}),(0,f.jsxs)("div",{className:d,children:[(0,f.jsxs)("h2",{children:[m.title," (",m.release_date.slice(0,4),")"]}),(0,f.jsxs)("p",{children:["User score: ",(n=m.vote_average,new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:0}).format(n/10))]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:m.overview}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:m.genres.map((function(e){return e.name})).join(" / ")})]})]}),(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("h2",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=135.dc025ebf.chunk.js.map