(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4054],{59231:function(e,r,n){"use strict";n.d(r,{Z:function(){return m}});var t=n(67294),a=n(29602),i=n(50367),o=n(58862),s=n(82356),c=(n(52651),n(23275),n(74288),n(89260)),l=n(85893),d=(0,a.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),u=(0,a.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),f=(0,a.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),p=(0,a.ZP)("div")({margin:"1rem 0 1rem 0",padding:"0",fontSize:"1.30rem",lineHeight:"1.4rem",marginBottom:"0.75rem"}),v=(0,a.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),h=(0,a.ZP)("div")({paddingLeft:"1rem"}),j=function(e){var r=e.year,n=e.children;return(0,l.jsx)(c.Z,{box:!0,href:"/movies/stories/awards?year=".concat(r),children:n})};function m(e){var r=e.data,n=[];return r&&0!=r.length?((0,t.useMemo)((function(){n=(n=r.slice(0)).sort((function(e,r){var n,t,a,i;return e.year!=r.year?e.year<r.year?1:-1:(null===e||void 0===e||null===(n=e.festival)||void 0===n?void 0:n.name)!=(null===r||void 0===r||null===(t=r.festival)||void 0===t?void 0:t.name)?(null===e||void 0===e||null===(a=e.festival)||void 0===a?void 0:a.name)<(null===r||void 0===r||null===(i=r.festival)||void 0===i?void 0:i.name)?-1:1:e.category<r.category?-1:1}))}),[r]),!0===e.mini?function(e,r){var n=e.year,t=e.all,a=t?r.length:2;n=parseInt(n);var i=function(e){return!n||e.year==n};return(0,l.jsxs)(d,{children:[r&&r.length>0&&r.slice(0,a).map((function(e,r){var n,t;return i(e)&&(0,l.jsx)("div",{children:(0,l.jsx)(j,{year:e.year,children:(0,l.jsxs)(u,{children:[e.year," - ",(null!==(n=null===(t=e.festival)||void 0===t?void 0:t.name)&&void 0!==n?n:"festival name").toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},r)})),!t&&r&&r.length>a&&(0,l.jsx)(u,{children:(0,l.jsx)(u,{children:(0,l.jsxs)(f,{children:["and ",r.length-a," more"]})})})]})}(e,n):function(e,r){var n=null,t=null,a=(e.year,function(e){return n&&n==e.year?null:(n=e.year,t=null,(0,l.jsx)(p,{children:e.year}))}),c=function(e){var r,n,a;return t&&t==(null===(r=e.festival)||void 0===r?void 0:r.name)?null:(t=null!==(n=null===(a=e.festival)||void 0===a?void 0:a.name)&&void 0!==n?n:"festival name",(0,l.jsx)(j,{year:e.year,children:(0,l.jsx)(v,{children:t})}))};return(0,l.jsxs)(i.RQ,{children:[(0,l.jsx)(o.DK,{children:"awards"}),r&&r.length>0&&r.map((function(e,r){return(0,l.jsxs)("div",{children:[a(e),c(e),(0,l.jsx)(h,{children:(0,l.jsx)(s.Z,{title:!1===e.won?"nominee":"winner",value:e.category})})]},r)}))]})}(e,n)):(0,l.jsx)("div",{})}},49896:function(e,r,n){"use strict";n(67294);var t=n(89260),a=n(85893);r.Z=function(e){var r=e.id,n=(e.entity,e.children),i=e.box;return(0,a.jsx)(t.Z,{box:i,border:!1,to:"/movies/".concat(r),children:n})}},2295:function(e,r,n){"use strict";n(67294);var t=n(50367),a=n(58862),i=n(49896),o=n(52651),s=n(23275),c=n(27159),l=n(85893);r.Z=function(e){var r=e.data,n=(e.loading,e.type),d=e.tiny;if(!r||0==r.length)return(0,l.jsx)("div",{});var u=d?r.slice(0,5):r,f=(0,l.jsxs)(a.DK,{children:[n,(0,l.jsxs)(a.x4,{children:[" [",r.length,"]"]})]});return(0,l.jsxs)(t.RQ,{children:[!d&&f,(0,l.jsx)(o.Z,{children:u.map((function(e,r){return(0,l.jsx)(s.Z,{xs:12,sm:12,md:6,lg:4,children:(0,l.jsx)("div",{children:(0,l.jsx)(i.Z,{id:e.id,children:(0,l.jsxs)("div",{children:[e.title," ",(0,l.jsxs)(a.x4,{children:["(",(0,l.jsx)(c.Z,{value:e.releasedDate,format:"YYYY"}),")"]})]})})})},r)}))}),d&&r.length>u.length&&(0,l.jsxs)(a.x4,{children:["and ",r.length-u.length," more"]})]})}},74288:function(e,r,n){"use strict";n(67294),n(85893)},8126:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return U}});var t,a=n(67294),i=n(11163),o=n(4942),s=n(93942),c=n(55619),l=n(15861),d=n(87757),u=n.n(d),f=n(24268),p=n(16161),v=n(30168),h=n(54397),j=n(8300);function m(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?m(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var x,y=(0,h.Ps)(t||(t=(0,v.Z)(["\nquery getPerson($id:String!) {\n  person(id: $id){\n    id\n    name\n    birthDate\n    deathDate\n    profession\n    awards {\n      category\n      festival{\n        id\n        name\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    directed {\n      id\n      title\n      releasedDate\n    }\n    wrote {\n      id\n      title\n      releasedDate\n    }\n    acted {\n      id\n      title\n      releasedDate\n    }\n  }\n}\n"]))),b={automata:{name:"page_person"},page:{url:function(e){return"/people/".concat(e)}}},O=b.automata.name,w=(0,f.hg)("".concat(O,"/fetchData"),function(){var e=(0,l.Z)(u().mark((function e(r,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(P(r)),e.next=3,t=r.id,(0,j.h)(y,{id:t},(function(e){return g(g({},e),{},{data:e.data.person})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var t}),e)})));return function(r,n){return e.apply(this,arguments)}}()),Z=(0,f.oM)({name:O,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=r.payload,"banner"!==e.params.renderer&&e.params.page>1&&i.default.push("".concat(b.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(x={},(0,o.Z)(x,w.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(x,w.fulfilled,(function(e,r){var n=r.payload,t=n.loading,a=n.error,i=n.data;e.data=i,e.loading=t,e.error=a})),(0,o.Z)(x,w.rejected,(function(e,r){var n=r.error;e.data=[],e.loading=!1,e.error=n})),x)});p.h.reducerManager.add(O,Z.reducer);Z.reducer;var P=Z.actions.setParams,D=(n(70357),n(52651),n(23275),n(28388)),S=n(59231),_=(n(27159),n(48724)),E=n(12868),k=n(14308),N=n(29602),H=n(85893);(0,N.ZP)("h1")({margin:0});function R(e){var r=e.data;return r?(0,H.jsx)(k.Z,{direction:"row",children:r.map((function(e,r){return(0,H.jsx)(_.Z,{text:e},r)}))}):(0,H.jsx)("div",{})}var T=n(86809),z=n(2295),Y=n(50367),B=n(58862),C=n(82356);var K=function(e){var r=e.data;return e.loading,r=r||{},(0,H.jsxs)(k.Z,{children:[(0,H.jsx)(E.Z,{src:r.image}),(0,H.jsx)(R,{data:r.profession}),(0,H.jsx)(T.Z,{text:r.name}),(0,H.jsxs)(Y.RQ,{children:[(0,H.jsx)(B.DK,{children:"General information"}),(0,H.jsx)(C.Z,{title:"Birth",data:r.birthDate,format:"year"}),(0,H.jsx)(C.Z,{title:"Death",data:r.deathDate,format:"year"})]}),(0,H.jsx)(D.Z,{data:r}),(0,H.jsx)(S.Z,{data:r?r.awards:null}),(0,H.jsx)(z.Z,{type:"acted",data:r.acted}),(0,H.jsx)(z.Z,{type:"directed",data:r.directed}),(0,H.jsx)(z.Z,{type:"wrote",data:r.wrote})]})},M=n(28973);function Q(e){return(0,H.jsx)(Y.X,{children:(0,H.jsxs)(k.Z,{spacing:1,children:[(0,H.jsx)(M.Z,{variant:"rectangular",height:300}),(0,H.jsx)(M.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,H.jsx)(M.Z,{variant:"text",style:{width:"40%"}}),(0,H.jsx)(M.Z,{variant:"text",style:{width:"25%"}}),(0,H.jsx)(M.Z,{variant:"text",style:{width:"25%"}}),(0,H.jsx)(M.Z,{variant:"text",style:{width:"25%"}})]})})}function X(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function q(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?X(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function I(e){var r,n,t=(0,s.I0)(),i=(0,s.v9)((function(e){return e[b.automata.name]}));return(0,a.useEffect)((function(){t(w({id:e.id}))}),[]),i?(0,H.jsx)(c.Z,{config:b,type:e.render,data:i.data,loading:i.loading,error:i.error,detail:function(e){return(0,H.jsx)(K,{data:e.data})},skeleton:(0,H.jsx)(Q,{}),params:q({},i.params),breadcrumbs:"".concat(e.breadcrumbs,"/").concat(null!==(r=null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.name)&&void 0!==r?r:"loading")}):(0,H.jsx)("div",{})}function $(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function G(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?$(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var L=function(e){return(0,H.jsx)(I,G(G({},e),{},{render:"detail"}))},U=function(e){var r,n,t=null!==(r=null===(n=(0,i.useRouter)().query)||void 0===n?void 0:n.person)&&void 0!==r?r:"";return(0,H.jsx)(L,{breadcrumbs:"/people",id:t})}},54317:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/[person]",function(){return n(8126)}])}},function(e){e.O(0,[6499,5685,5218,1216,5619,5630,9774,2888,179],(function(){return r=54317,e(e.s=r);var r}));var r=e.O();_N_E=r}]);