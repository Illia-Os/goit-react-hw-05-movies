"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[756],{1454:function(e,n,t){t.d(n,{Z:function(){return s}});var r,a=t(8273),c=t(168),i=t(5706).Z.div(r||(r=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(46, 47, 66, 0.2);\n  z-index: 1000;\n"]))),u=t(184),s=function(){return(0,u.jsx)(i,{children:(0,u.jsx)(a.g4,{height:"100",width:"100",radius:"9",color:"#f87719",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},8300:function(e,n){n.Z=function(e){e("Oops, some error occurred. Please, try again later.")}},5756:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(5861),a=t(9439),c=t(4687),i=t.n(c),u=t(7689),s=t(2646),o=t(2791),l=t(5652),p=t(184),d=function(e){var n,t,r=e.film,a=r.poster_path,c=r.title,i=r.name,d=r.vote_average,f=r.overview,h=r.release_date,v=r.genres,x=(0,u.TH)(),g=(0,o.useRef)(null!==(n=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,p.jsxs)("section",{children:[(0,p.jsxs)(s.jB,{to:g.current,children:[(0,p.jsx)(s.Ci,{}),"Go back"]}),(0,p.jsxs)(s.rt,{children:[(0,p.jsx)(s.AL,{src:a?"https://image.tmdb.org/t/p/original/".concat(a," "):l,alt:null!==c&&void 0!==c?c:i}),(0,p.jsxs)(s.MJ,{children:[(0,p.jsxs)("h1",{children:[null!==c&&void 0!==c?c:i,h&&" (".concat(null===h||void 0===h?void 0:h.substring(0,4),")")]}),(0,p.jsxs)(s.pT,{children:["User score: ",Math.round(d/10*100),"%"]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:f}),(null===v||void 0===v?void 0:v.length)>0&&(0,p.jsx)("h2",{children:"Genres"}),(0,p.jsx)("p",{children:(null===v||void 0===v?void 0:v.length)>0&&v.map((function(e){return e.name})).join(", ")})]})]}),(0,p.jsxs)(s.Ik,{children:[(0,p.jsx)("li",{children:(0,p.jsx)(s.Fg,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(s.Fg,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(o.Suspense,{children:(0,p.jsx)(u.j3,{})})]})},f=t(1454),h=t(8300),v=t(4390),x=function(){var e=(0,o.useState)({}),n=(0,a.Z)(e,2),t=n[0],c=n[1],s=(0,o.useState)(null),l=(0,a.Z)(s,2),x=l[0],g=l[1],m=(0,o.useState)(!1),j=(0,a.Z)(m,2),w=j[0],k=j[1],Z=(0,u.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,v.ts)(Z);case 4:n=e.sent,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(0,h.Z)(g);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]),(0,p.jsxs)(p.Fragment,{children:[w&&(0,p.jsx)(f.Z,{}),x?(0,p.jsx)("p",{children:x}):t&&!w&&(0,p.jsx)(d,{film:t})]})}},4390:function(e,n,t){t.d(n,{JS:function(){return o},Jh:function(){return d},Pt:function(){return f},mt:function(){return p},ts:function(){return l}});var r=t(5861),a=t(4687),c=t.n(a),i=t(1243),u="https://api.themoviedb.org/3",s="07c0e032482e785f96b6eca01e8f41dd",o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/trending/all/day?api_key=").concat(s,"&page=").concat(n,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/search/movie?query=").concat(n,"&include_adult=false&api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},5652:function(e,n,t){e.exports=t.p+"static/media/no-image.08ba4a3915c0ff049252.jpg"}}]);
//# sourceMappingURL=756.614a5c83.chunk.js.map