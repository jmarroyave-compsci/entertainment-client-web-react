"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1679],{59231:function(e,r,n){n.d(r,{Z:function(){return g}});var t=n(67294),a=n(29602),i=n(50367),o=n(58862),s=n(82356),c=(n(52651),n(23275),n(74288),n(89260)),l=n(85893),d=(0,a.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),u=(0,a.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),f=(0,a.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),v=(0,a.ZP)("div")({margin:"1rem 0 1rem 0",padding:"0",fontSize:"1.30rem",lineHeight:"1.4rem",marginBottom:"0.75rem"}),j=(0,a.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),p=(0,a.ZP)("div")({paddingLeft:"1rem"}),h=function(e){var r=e.year,n=e.children;return(0,l.jsx)(c.Z,{box:!0,href:"/movies/stories/awards?year=".concat(r),children:n})};function g(e){var r=e.data,n=[];return r&&0!=r.length?((0,t.useMemo)((function(){n=(n=r.slice(0)).sort((function(e,r){var n,t,a,i;return e.year!=r.year?e.year<r.year?1:-1:(null===e||void 0===e||null===(n=e.festival)||void 0===n?void 0:n.name)!=(null===r||void 0===r||null===(t=r.festival)||void 0===t?void 0:t.name)?(null===e||void 0===e||null===(a=e.festival)||void 0===a?void 0:a.name)<(null===r||void 0===r||null===(i=r.festival)||void 0===i?void 0:i.name)?-1:1:e.category<r.category?-1:1}))}),[r]),!0===e.mini?function(e,r){var n=e.year,t=e.all,a=t?r.length:2;n=parseInt(n);var i=function(e){return!n||e.year==n};return(0,l.jsxs)(d,{children:[r&&r.length>0&&r.slice(0,a).map((function(e,r){var n,t;return i(e)&&(0,l.jsx)("div",{children:(0,l.jsx)(h,{year:e.year,children:(0,l.jsxs)(u,{children:[e.year," - ",(null!==(n=null===(t=e.festival)||void 0===t?void 0:t.name)&&void 0!==n?n:"festival name").toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},r)})),!t&&r&&r.length>a&&(0,l.jsx)(u,{children:(0,l.jsx)(u,{children:(0,l.jsxs)(f,{children:["and ",r.length-a," more"]})})})]})}(e,n):function(e,r){var n=null,t=null,a=(e.year,function(e){return n&&n==e.year?null:(n=e.year,t=null,(0,l.jsx)(v,{children:e.year}))}),c=function(e){var r,n,a;return t&&t==(null===(r=e.festival)||void 0===r?void 0:r.name)?null:(t=null!==(n=null===(a=e.festival)||void 0===a?void 0:a.name)&&void 0!==n?n:"festival name",(0,l.jsx)(h,{year:e.year,children:(0,l.jsx)(j,{children:t})}))};return(0,l.jsxs)(i.RQ,{children:[(0,l.jsx)(o.DK,{children:"awards"}),r&&r.length>0&&r.map((function(e,r){return(0,l.jsxs)("div",{children:[a(e),c(e),(0,l.jsx)(p,{children:(0,l.jsx)(s.Z,{title:!1===e.won?"nominee":"winner",value:e.category})})]},r)}))]})}(e,n)):(0,l.jsx)("div",{})}},55476:function(e,r,n){n(67294);var t=n(89260),a=n(85893);r.Z=function(e){var r=e.id,n=(e.entity,e.children),i=e.box;return(0,a.jsx)(t.Z,{box:i,border:!1,to:"/people/".concat(r),children:n})}},97820:function(e,r,n){n.d(r,{Z:function(){return s}});n(67294);var t=n(29602),a=n(48724),i=n(14308),o=n(85893);(0,t.ZP)("h1")({margin:0});function s(e){var r=e.data;return r?(0,o.jsx)(i.Z,{direction:"row",children:r.map((function(e,r){return(0,o.jsx)(a.Z,{variant:"outlined",text:e},r)}))}):(0,o.jsx)("div",{})}},97060:function(e,r,n){n(67294);var t=n(50367),a=n(58862),i=n(55476),o=n(89260),s=n(52651),c=n(23275),l=n(85893);r.Z=function(e){var r=e.data,n=(e.loading,e.type),d=e.story;if(!r||0==r.length)return(0,l.jsx)("div",{});var u=(0,l.jsxs)(a.DK,{children:[n,(0,l.jsxs)(a.x4,{children:[" [",r.length,"]"]})]});return u=d?(0,l.jsx)(o.Z,{href:d,children:u}):u,(0,l.jsxs)(t.RQ,{children:[r&&r.length>0&&u,(0,l.jsx)(s.Z,{children:r&&r.length>0&&r.map((function(e,r){return(0,l.jsx)(c.Z,{xs:12,sm:6,md:4,lg:3,children:(0,l.jsx)("div",{children:(0,l.jsx)(i.Z,{id:e.id,children:e.name})})},r)}))})]})}},64129:function(e,r,n){n(67294);var t=n(50367),a=n(58862),i=n(82356),o=n(52651),s=n(23275),c=n(85893);r.Z=function(e){var r=e.data;return e.loading,e.route,!r||"name"in r?(0,c.jsx)("div",{}):(0,c.jsxs)(t.RQ,{children:[(0,c.jsx)(a.DK,{children:"Ratings"}),(0,c.jsx)(o.Z,{children:r&&r.length>0&&r.map((function(e,r){return(0,c.jsx)(s.Z,{xs:6,sm:4,md:3,lg:2,children:(0,c.jsx)(i.Z,{title:e.name,data:e.averageRating})},r)}))})]})}},84307:function(e,r,n){n(67294);var t=n(50367),a=n(85893);r.Z=function(e){var r=e.data;return e.loading,e.route,r&&null!==r&&0!=r.length?"name"in r?(0,a.jsx)("div",{}):(0,a.jsx)(t.RQ,{children:r.map((function(e,r){return(0,a.jsxs)("div",{children:[e.name&&(0,a.jsxs)("div",{children:["Name: ",e.name]}),e.yearAdded&&(0,a.jsxs)("div",{children:["Year added: ",e.yearAdded]})]},r)}))}):(0,a.jsx)("div",{})}},29110:function(e,r,n){n.d(r,{Z:function(){return o}});n(67294);var t=n(50367),a=n(58862),i=n(85893);function o(e){var r=e.title,n=e.text;return n?(0,i.jsxs)(t.RQ,{children:[r&&(0,i.jsx)(a.DK,{children:r}),(0,i.jsx)(a.nv,{children:n})]}):(0,i.jsx)("div",{})}},74288:function(e,r,n){n(67294),n(85893)},31679:function(e,r,n){n.r(r),n.d(r,{default:function(){return X}});n(67294);var t=n(11163),a=n(4942),i=n(55619),o={automata:{name:"page_tv_show"},page:{url:function(e){var r=e.id;return"/tv-shows/".concat(r)}}},s=(n(70357),n(52651),n(23275),n(28388)),c=n(84307),l=n(64129),d=n(97060),u=n(59231),f=n(59067),v=n(97820),j=(n(27159),n(48724)),p=n(12868),h=(n(74288),n(14308)),g=n(29110),m=n(50367),x=n(58862),y=n(82356),b=n(85893);function O(e){var r=e.data;e.loading;return r=r||{},(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.Z,{src:r.image?r.image.poster:null}),(0,b.jsxs)(h.Z,{direction:"row",children:[(0,b.jsx)(j.Z,{color:"primary",text:r.type}),(0,b.jsx)(v.Z,{data:r.genre})]}),(0,b.jsx)(f.Z,{text:r.title}),(0,b.jsxs)(m.RQ,{children:[(0,b.jsx)(x.DK,{children:"general information"}),(0,b.jsx)(y.Z,{title:"Released",data:r.releasedDate,format:"year"}),(0,b.jsx)(y.Z,{title:"Duration",data:r.duration,sufix:"mins"}),(0,b.jsx)(y.Z,{title:"Classification",data:r.classification}),(0,b.jsx)(y.Z,{title:"Language",data:r.language}),(0,b.jsx)(y.Z,{title:"Country",data:r.country}),(0,b.jsx)(y.Z,{title:"Production",data:r.production})]}),(0,b.jsx)(s.Z,{data:r}),(0,b.jsx)(l.Z,{data:r.rating}),(0,b.jsx)(d.Z,{type:"cast",data:r.cast,story:"/movies/stories/actors"}),(0,b.jsx)(u.Z,{data:r.awards}),(0,b.jsx)(g.Z,{title:"plot",text:r.plot?r.plot:r.description}),(0,b.jsx)(d.Z,{type:"directors",data:r.directors,story:"/movies/stories/directors"}),(0,b.jsx)(d.Z,{type:"writers",data:r.writers,story:"/movies/stories/writers"}),(0,b.jsx)(d.Z,{type:"crew",data:r.cast}),(0,b.jsx)(c.Z,{data:r.streamBy})]})}var Z=n(28973);function w(e){return(0,b.jsx)(m.X,{children:(0,b.jsxs)(h.Z,{spacing:1,children:[(0,b.jsx)(Z.Z,{variant:"rectangular",height:300}),(0,b.jsx)(Z.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,b.jsx)(Z.Z,{variant:"text",style:{width:"40%"}}),(0,b.jsx)(Z.Z,{variant:"text",style:{width:"25%"}}),(0,b.jsx)(Z.Z,{variant:"text",style:{width:"25%"}}),(0,b.jsx)(Z.Z,{variant:"text",style:{width:"25%"}})]})})}var P,D=n(15861),S=n(87757),R=n.n(S),k=n(24268),E=n(16161),Q=n(30168),_=n(54397),C=n(74273);function H(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function K(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?H(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var z,B=(0,_.Ps)(P||(P=(0,Q.Z)(["\n  query GetData($id: String!)\n  {\n    tVShow(id: $id) {\n    id\n    title\n    country\n    type\n    genre\n    duration\n    rating {\n      averageRating\n      name\n      votes\n    }\n    releasedDate\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    director{\n      id\n    }\n    cast {\n      id\n    }\n    awards {\n      category\n      festival{\n        id\n        name\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    }\n  }\n"])));function N(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function A(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?N(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var M=o.automata.name,T=(0,k.hg)("".concat(M,"/fetchData"),function(){var e=(0,D.Z)(R().mark((function e(r,n){return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(L(r)),e.next=3,t=r.id,(0,C.h)(B,{id:t},(function(e){return K(K({},e),{},{data:e.data.tVShow})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var t}),e)})));return function(r,n){return e.apply(this,arguments)}}()),q=(0,k.oM)({name:M,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=A(A({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&t.default.push("".concat(o.page.url(e.params)),null,{shallow:!0})}},extraReducers:(z={},(0,a.Z)(z,T.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(z,T.fulfilled,(function(e,r){var n=r.payload,t=n.loading,a=n.error,i=n.data;e.data=i,e.loading=t,e.error=a})),(0,a.Z)(z,T.rejected,(function(e,r){var n=r.error;e.data=[],e.loading=!1,e.error=n})),z)});E.h.reducerManager.add(M,q.reducer);q.reducer;var L=q.actions.setParams;function V(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function $(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?V(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function G(e){return(0,b.jsx)(i.Z,{params:$($({},e),{},{breadcrumbs:function(r){var n,t;return"".concat(e.breadcrumbs,"/").concat(null!==(n=null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.title)&&void 0!==n?n:"loading")}}),config:o,fetch:function(e){return T($({},e))},detail:function(e){return(0,b.jsx)(O,{data:e.data})},skeleton:(0,b.jsx)(w,{})})}function I(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function U(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?I(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var W=function(e){return(0,b.jsx)(G,U(U({},e),{},{render:"detail"}))},X=function(e){var r,n,a=(0,t.useRouter)(),i=e.id?e.id:null!==(r=null===(n=a.query)||void 0===n?void 0:n["tv-show"])&&void 0!==r?r:"";return(0,b.jsx)(W,{breadcrumbs:"/tv-shows",id:i})}}}]);