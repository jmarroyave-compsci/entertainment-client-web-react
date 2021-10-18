(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{45252:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var r=t(67294),i=t(93942),a=t(73981),s=t(11163),c=t(4942),o=t(58248),d=t(40777),u={name:"page_tv_show"},l={url:function(e){return"/tv-shows/".concat(e)}},h=(t(60361),t(76085),t(92275),t(81356)),f=t(4818),x=t(674),j=t(22870),p=t(8498),m=t(98753),g=t(21611),v=(t(35566),t(89446)),y=t(21055),w=(t(31189),t(26447)),Z=t(95412),b=t(68220),O=t(8519),P=t(56490),D=t(85893);function S(e){var n=e.data;e.loading;return n=n||{},(0,D.jsxs)(w.Z,{children:[(0,D.jsx)(y.Z,{src:n.image?n.image.poster:null}),(0,D.jsxs)(w.Z,{direction:"row",children:[(0,D.jsx)(v.Z,{color:"primary",text:n.type}),(0,D.jsx)(g.Z,{data:n.genre})]}),(0,D.jsx)(m.Z,{text:n.title}),(0,D.jsxs)(b.RQ,{children:[(0,D.jsx)(O.DK,{children:"general information"}),(0,D.jsx)(P.Z,{title:"Released",data:n.releasedDate,format:"year"}),(0,D.jsx)(P.Z,{title:"Duration",data:n.duration,sufix:"mins"}),(0,D.jsx)(P.Z,{title:"Classification",data:n.classification}),(0,D.jsx)(P.Z,{title:"Language",data:n.language}),(0,D.jsx)(P.Z,{title:"Country",data:n.country}),(0,D.jsx)(P.Z,{title:"Production",data:n.production})]}),(0,D.jsx)(h.Z,{data:n}),(0,D.jsx)(x.Z,{data:n.rating}),(0,D.jsx)(j.Z,{type:"cast",data:n.cast,story:"/movies/stories/actors"}),(0,D.jsx)(p.Z,{data:n.awards}),(0,D.jsx)(Z.Z,{title:"plot",text:n.plot?n.plot:n.description}),(0,D.jsx)(j.Z,{type:"directors",data:n.directors,story:"/movies/stories/directors"}),(0,D.jsx)(j.Z,{type:"writers",data:n.writers,story:"/movies/stories/writers"}),(0,D.jsx)(j.Z,{type:"crew",data:n.cast}),(0,D.jsx)(f.Z,{data:n.streamBy})]})}var _=t(28973);function k(e){return(0,D.jsx)(b.X,{children:(0,D.jsxs)(w.Z,{spacing:1,children:[(0,D.jsx)(_.Z,{variant:"rectangular",height:300}),(0,D.jsx)(_.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,D.jsx)(_.Z,{variant:"text",style:{width:"40%"}}),(0,D.jsx)(_.Z,{variant:"text",style:{width:"25%"}}),(0,D.jsx)(_.Z,{variant:"text",style:{width:"25%"}}),(0,D.jsx)(_.Z,{variant:"text",style:{width:"25%"}})]})})}function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function T(e){var n=(0,i.v9)((function(e){return e[u.name]}));return n?(0,D.jsx)(o.Z,{xs:(0,D.jsx)(d.Z,{data:n.data,loading:n.loading,detail:function(e){return(0,D.jsx)(S,{data:e})},skeleton:(0,D.jsx)(k,{}),params:E({},n.params)})}):(0,D.jsx)("div",{})}var H,N=t(15861),Q=t(87757),z=t.n(Q),K=t(24268),B=t(16161),C=t(30168),M=t(54397),q=t(8300);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A,X=(0,M.Ps)(H||(H=(0,C.Z)(["\n  query GetData($id: String!)\n  {\n    tVShow(id: $id) {\n    id\n    title\n    country\n    type\n    genre\n    duration\n    rating {\n      averageRating\n      name\n      votes\n    }\n    releasedDate\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    director{\n      id\n    }\n    cast {\n      id\n    }\n    awards {\n      category\n      name\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    }\n  }\n"]))),V=u.name,Y=(0,K.hg)("".concat(V,"/fetchData"),function(){var e=(0,N.Z)(z().mark((function e(n,t){return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(G(n)),e.next=3,r=n.id,(0,q.h)(X,{id:r},(function(e){return W(W({},e),{},{data:e.data.tVShow})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var r}),e)})));return function(n,t){return e.apply(this,arguments)}}()),$=(0,K.oM)({name:V,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,n){e.params=n.payload,"banner"!==e.params.renderer&&e.params.page>1&&s.default.push("".concat(l.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(A={},(0,c.Z)(A,Y.pending,(function(e,n){e.data=null,e.loading=!0,e.error=""})),(0,c.Z)(A,Y.fulfilled,(function(e,n){var t=n.payload,r=t.loading,i=t.error,a=t.data;e.data=a,e.loading=r,e.error=i})),A)});B.h.reducerManager.add(V,$.reducer);$.reducer;var G=$.actions.setParams,L=function(e){var n=(0,i.I0)(),t=(0,s.useRouter)();return(0,r.useEffect)((function(){var e=t.query&&t.query["tv-show"]?t.query["tv-show"]:"",r=e;n((0,a.Y)({breadcrumbs:[{name:"tv-shows",url:"/tv-shows"},{name:r}]})),n(Y({id:e}))}),[t.isReady]),(0,D.jsx)(T,{})}},43459:function(e,n,t){"use strict";t(67294);var r=t(59983),i=t(85893);n.Z=function(e){var n=e.id,t=(e.entity,e.children);return(0,i.jsx)(r.Z,{border:!1,to:"/people/".concat(n),children:t})}},8498:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});t(67294);var r=t(29602),i=t(68220),a=t(8519),s=(t(76085),t(92275),t(31189),t(59983)),c=t(85893),o=(0,r.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),d=(0,r.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),u=(0,r.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),l=(0,r.ZP)("div")({margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",lineHeight:"1rem"}),h=(0,r.ZP)("div")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem",fontWeight:400}),f=(0,r.ZP)("div")({fontSize:"0.85rem",lineHeight:"0.95rem"}),x=(0,r.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"}),j=function(e){var n=e.year,t=e.children;return(0,c.jsx)(s.Z,{href:"/movies/stories/awards?year=".concat(n),children:t})};function p(e){var n=e.data;return n&&0!=n.length?!0===e.mini?function(e,n){var t=e.year,r=e.all,i=r?n.length:2;t=parseInt(t);var a=function(e){return!t||e.year==t};return(0,c.jsxs)(o,{children:[n&&n.length>0&&n.slice(0,i).map((function(e,n){return a(e)&&(0,c.jsx)("div",{children:(0,c.jsx)(j,{year:e.year,children:(0,c.jsxs)(d,{children:[e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},n)})),!r&&n&&n.length>i&&(0,c.jsx)(d,{children:(0,c.jsx)(d,{children:(0,c.jsxs)(u,{children:["and ",n.length-i," more"]})})})]})}(e,n):function(e,n){var t=null,r=null,s=(e.year,function(e){return t&&t==e.year?null:(t=e.year,r=null,(0,c.jsx)(l,{children:e.year}))}),o=function(e){return r&&r==e.name?null:(r=e.name,(0,c.jsx)(h,{children:e.name}))};return(0,c.jsxs)(i.RQ,{children:[(0,c.jsx)(a.DK,{children:"awards"}),n&&n.length>0&&n.map((function(e,n){return(0,c.jsxs)("div",{children:[s(e),o(e),(0,c.jsx)(j,{year:e.year,children:(0,c.jsxs)(i.ck,{children:[(0,c.jsx)(x,{children:"false"===e.won||!1===e.won?"nominee":"winner"}),(0,c.jsx)(f,{children:e.category})]})})]},n)}))]})}(e,n):(0,c.jsx)("div",{})}},21611:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});t(67294);var r=t(29602),i=t(89446),a=t(26447),s=t(85893);(0,r.ZP)("h1")({margin:0});function c(e){var n=e.data;return n?(0,s.jsx)(a.Z,{direction:"row",children:n.map((function(e,n){return(0,s.jsx)(i.Z,{variant:"outlined",text:e},n)}))}):(0,s.jsx)("div",{})}},22870:function(e,n,t){"use strict";t(67294);var r=t(68220),i=t(8519),a=t(43459),s=t(59983),c=t(76085),o=t(92275),d=t(85893);n.Z=function(e){var n=e.data,t=(e.loading,e.type),u=e.story;if(!n||0==n.length)return(0,d.jsx)("div",{});var l=(0,d.jsxs)(i.DK,{children:[t,(0,d.jsxs)(i.x4,{children:[" [",n.length,"]"]})]});return l=u?(0,d.jsx)(s.Z,{href:u,children:l}):l,(0,d.jsxs)(r.RQ,{children:[n&&n.length>0&&l,(0,d.jsx)(c.Z,{children:n&&n.length>0&&n.map((function(e,n){return(0,d.jsx)(o.Z,{xs:12,sm:6,md:4,lg:3,children:(0,d.jsx)("div",{children:(0,d.jsx)(a.Z,{id:e.id,children:e.name})})},n)}))})]})}},674:function(e,n,t){"use strict";t(67294);var r=t(68220),i=t(8519),a=t(56490),s=t(76085),c=t(92275),o=t(85893);n.Z=function(e){var n=e.data;return e.loading,e.route,!n||"name"in n?(0,o.jsx)("div",{}):(0,o.jsxs)(r.RQ,{children:[(0,o.jsx)(i.DK,{children:"Ratings"}),(0,o.jsx)(s.Z,{children:n&&n.length>0&&n.map((function(e,n){return(0,o.jsx)(c.Z,{xs:6,sm:4,md:3,lg:2,children:(0,o.jsx)(a.Z,{title:e.name,data:e.averageRating})},n)}))})]})}},81356:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});t(67294);var r=t(26447),i=t(89446),a=t(68220),s=t(8519),c=t(85893);function o(e){var n=e.data;return n?(0,c.jsxs)(a.RQ,{children:[(0,c.jsx)(s.DK,{children:"More information"}),(0,c.jsxs)(r.Z,{direction:"row",children:[n.id.startsWith("tt")&&(0,c.jsx)("a",{href:"https://www.imdb.com/title/".concat(n.id,"/"),children:(0,c.jsx)(i.Z,{text:"IMDB"})}),n.id.startsWith("nm")&&(0,c.jsx)("a",{href:"https://www.imdb.com/name/".concat(n.id,"/"),children:(0,c.jsx)(i.Z,{text:"IMDB"})}),n.wikiTopic&&(0,c.jsx)("a",{href:"https://wikipedia.com/wiki/".concat(n.wikiTopic.replace(/ /g,"_")),children:(0,c.jsx)(i.Z,{text:"wikipedia"})})]})]}):(0,c.jsx)("div",{})}},4818:function(e,n,t){"use strict";t(67294);var r=t(68220),i=t(85893);n.Z=function(e){var n=e.data;return e.loading,e.route,n&&null!==n&&0!=n.length?"name"in n?(0,i.jsx)("div",{}):(0,i.jsx)(r.RQ,{children:n.map((function(e,n){return(0,i.jsxs)("div",{children:[e.name&&(0,i.jsxs)("div",{children:["Name: ",e.name]}),e.yearAdded&&(0,i.jsxs)("div",{children:["Year added: ",e.yearAdded]})]},n)}))}):(0,i.jsx)("div",{})}},95412:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});t(67294);var r=t(68220),i=t(8519),a=t(85893);function s(e){var n=e.title,t=e.text;return t?(0,a.jsxs)(r.RQ,{children:[n&&(0,a.jsx)(i.DK,{children:n}),(0,a.jsx)(i.nv,{children:t})]}):(0,a.jsx)("div",{})}},31189:function(e,n,t){"use strict";t(67294),t(85893)},36068:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tv-shows/[tv-show]",function(){return t(45252)}])}},function(e){e.O(0,[572,196,774,888,179],(function(){return n=36068,e(e.s=n);var n}));var n=e.O();_N_E=n}]);