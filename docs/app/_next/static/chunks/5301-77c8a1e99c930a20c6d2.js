"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5301],{59231:function(e,r,n){n.d(r,{Z:function(){return j}});var t=n(67294),i=n(29602),a=n(50367),o=n(58862),c=n(82356),s=(n(52651),n(23275),n(74288),n(89260)),l=n(85893),d=(0,i.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),u=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),f=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),m=(0,i.ZP)("div")({margin:"1rem 0 1rem 0",padding:"0",fontSize:"1.30rem",lineHeight:"1.4rem",marginBottom:"0.75rem"}),p=(0,i.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),h=(0,i.ZP)("div")({paddingLeft:"1rem"}),v=function(e){var r=e.year,n=e.children;return(0,l.jsx)(s.Z,{box:!0,href:"/movies/stories/awards?year=".concat(r),children:n})};function j(e){var r=e.data,n=[];return r&&0!=r.length?((0,t.useMemo)((function(){n=(n=r.slice(0)).sort((function(e,r){var n,t,i,a;return e.year!=r.year?e.year<r.year?1:-1:(null===e||void 0===e||null===(n=e.festival)||void 0===n?void 0:n.name)!=(null===r||void 0===r||null===(t=r.festival)||void 0===t?void 0:t.name)?(null===e||void 0===e||null===(i=e.festival)||void 0===i?void 0:i.name)<(null===r||void 0===r||null===(a=r.festival)||void 0===a?void 0:a.name)?-1:1:e.category<r.category?-1:1}))}),[r]),!0===e.mini?function(e,r){var n=e.year,t=e.all,i=t?r.length:2;n=parseInt(n);var a=function(e){return!n||e.year==n};return(0,l.jsxs)(d,{children:[r&&r.length>0&&r.slice(0,i).map((function(e,r){var n,t;return a(e)&&(0,l.jsx)("div",{children:(0,l.jsx)(v,{year:e.year,children:(0,l.jsxs)(u,{children:[e.year," - ",(null!==(n=null===(t=e.festival)||void 0===t?void 0:t.name)&&void 0!==n?n:"festival name").toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},r)})),!t&&r&&r.length>i&&(0,l.jsx)(u,{children:(0,l.jsx)(u,{children:(0,l.jsxs)(f,{children:["and ",r.length-i," more"]})})})]})}(e,n):function(e,r){var n=null,t=null,i=(e.year,function(e){return n&&n==e.year?null:(n=e.year,t=null,(0,l.jsx)(m,{children:e.year}))}),s=function(e){var r,n,i;return t&&t==(null===(r=e.festival)||void 0===r?void 0:r.name)?null:(t=null!==(n=null===(i=e.festival)||void 0===i?void 0:i.name)&&void 0!==n?n:"festival name",(0,l.jsx)(v,{year:e.year,children:(0,l.jsx)(p,{children:t})}))};return(0,l.jsxs)(a.RQ,{children:[(0,l.jsx)(o.DK,{children:"awards"}),r&&r.length>0&&r.map((function(e,r){return(0,l.jsxs)("div",{children:[i(e),s(e),(0,l.jsx)(h,{children:(0,l.jsx)(c.Z,{title:!1===e.won?"nominee":"winner",value:e.category})})]},r)}))]})}(e,n)):(0,l.jsx)("div",{})}},49896:function(e,r,n){n(67294);var t=n(89260),i=n(85893);r.Z=function(e){var r=e.id,n=(e.entity,e.children),a=e.box;return(0,i.jsx)(t.Z,{box:a,border:!1,to:"/movies/".concat(r),children:n})}},55476:function(e,r,n){n(67294);var t=n(89260),i=n(85893);r.Z=function(e){var r=e.id,n=(e.entity,e.children),a=e.box;return(0,i.jsx)(t.Z,{box:a,border:!1,to:"/people/".concat(r),children:n})}},97820:function(e,r,n){n.d(r,{Z:function(){return c}});n(67294);var t=n(29602),i=n(48724),a=n(14308),o=n(85893);(0,t.ZP)("h1")({margin:0});function c(e){var r=e.data;return r?(0,o.jsx)(a.Z,{direction:"row",children:r.map((function(e,r){return(0,o.jsx)(i.Z,{variant:"outlined",text:e},r)}))}):(0,o.jsx)("div",{})}},414:function(e,r,n){n.d(r,{Z:function(){return j}});var t=n(4942),i=(n(67294),n(50367)),a=n(58862),o=n(29602),c=n(26447),s=n(85893),l=(0,o.ZP)("div")((function(){return{padding:"1rem",marginBottom:"2rem",backgroundColor:"transparent"}}));function d(e){var r=e.data,n=e.item;return(0,s.jsx)(l,{children:(0,s.jsx)(c.Z,{direction:"row",style:{overflowX:"auto"},children:r.map((function(e,r){return n(e)}))})})}var u=n(43332),f=n(49896),m=n(59231),p=n(39698);function h(e){switch(e.format){case"mini":return function(e){var r=e.id,n=e.title,t=e.releaseYear;return console.log(e),(0,s.jsx)(p.xs,{width:"250px",children:(0,s.jsxs)(f.Z,{id:r,children:[(0,s.jsx)(p.x4,{children:t}),(0,s.jsx)(p.Dx,{children:n})]})},r)}(e);case"card":default:return function(e){var r=e.full,n=e.year,t=e.all,i=e.id,a=e.title,o=e.awards,c=e.image;e.box;return(0,s.jsx)(f.Z,{box:!0,id:i,entity:name,children:(0,s.jsx)(u.Z,{image:c?c.poster:c,text:(0,s.jsx)(m.Z,{mini:!r,data:o,year:n,all:t}),title:a})})}(e)}}function v(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var j=function(e){var r=e.data,n=(e.loading,e.type),o=e.tiny;if(!r||0==r.length)return(0,s.jsx)("div",{});var c=o?r.slice(0,5):r,l=(0,s.jsxs)(a.DK,{children:[n,(0,s.jsxs)(a.x4,{children:[" [",r.length,"]"]})]});return(0,s.jsxs)(i.RQ,{children:[!o&&l,(0,s.jsx)(d,{data:c,item:function(e){return(0,s.jsx)(h,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?v(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({format:"mini"},e))}}),o&&r.length>c.length&&(0,s.jsxs)(a.x4,{children:["and ",r.length-c.length," more"]})]})}},97060:function(e,r,n){n(67294);var t=n(50367),i=n(58862),a=n(55476),o=n(89260),c=n(52651),s=n(23275),l=n(85893);r.Z=function(e){var r=e.data,n=(e.loading,e.type),d=e.story;if(!r||0==r.length)return(0,l.jsx)("div",{});var u=(0,l.jsxs)(i.DK,{children:[n,(0,l.jsxs)(i.x4,{children:[" [",r.length,"]"]})]});return u=d?(0,l.jsx)(o.Z,{href:d,children:u}):u,(0,l.jsxs)(t.RQ,{children:[r&&r.length>0&&u,(0,l.jsx)(c.Z,{children:r&&r.length>0&&r.map((function(e,r){return(0,l.jsx)(s.Z,{xs:12,sm:6,md:4,lg:3,children:(0,l.jsx)("div",{children:(0,l.jsx)(a.Z,{id:e.id,children:e.name})})},r)}))})]})}},64129:function(e,r,n){n(67294);var t=n(50367),i=n(58862),a=n(82356),o=n(52651),c=n(23275),s=n(85893);r.Z=function(e){var r=e.data;return e.loading,e.route,!r||"name"in r?(0,s.jsx)("div",{}):(0,s.jsxs)(t.RQ,{children:[(0,s.jsx)(i.DK,{children:"Ratings"}),(0,s.jsx)(o.Z,{children:r&&r.length>0&&r.map((function(e,r){return(0,s.jsx)(c.Z,{xs:6,sm:4,md:3,lg:2,children:(0,s.jsx)(a.Z,{title:e.name,data:e.averageRating})},r)}))})]})}},84307:function(e,r,n){n(67294);var t=n(50367),i=n(85893);r.Z=function(e){var r=e.data;return e.loading,e.route,r&&null!==r&&0!=r.length?"name"in r?(0,i.jsx)("div",{}):(0,i.jsx)(t.RQ,{children:r.map((function(e,r){return(0,i.jsxs)("div",{children:[e.name&&(0,i.jsxs)("div",{children:["Name: ",e.name]}),e.yearAdded&&(0,i.jsxs)("div",{children:["Year added: ",e.yearAdded]})]},r)}))}):(0,i.jsx)("div",{})}},29110:function(e,r,n){n.d(r,{Z:function(){return o}});n(67294);var t=n(50367),i=n(58862),a=n(85893);function o(e){var r=e.title,n=e.text;return n?(0,a.jsxs)(t.RQ,{children:[r&&(0,a.jsx)(i.DK,{children:r}),(0,a.jsx)(i.nv,{children:n})]}):(0,a.jsx)("div",{})}},43332:function(e,r,n){n(67294);var t=n(65295),i=n(18515),a=n(42643),o=n(54962),c=n(49161),s=n(2658),l=n(360),d=n(9092),u=n(6447),f=n(27054),m=n(85893),p=(0,f.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),h="".concat(d.Z.APP.BASE_PATH).concat(d.Z.DEFAULTS.IMAGE_PLACEHOLDER),v=function(e){return e.target.src=h};r.Z=function(e){var r,n=p(),f=e.title,h=e.subtitle,j=e.text,x=e.image,g=e.imageHeight,y=void 0===g?180:g,b=e.noImage,Z=e.actions,O=0;h=h||"";return b=!!b,x=x||d.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,m.jsxs)(t.Z,{style:{flexGrow:1,width:"100%"},children:[(0,m.jsx)(i.Z,{sx:{width:"100%"},classes:{content:n.headerContent,root:n.headerRoot},title:(0,m.jsx)(u.ZP,{title:f,placement:"bottom-start",children:(0,m.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,m.jsx)(s.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:f})})}),subheader:h}),!b&&(0,m.jsx)(o.Z,{height:y||null,image:null!==(r=x)&&void 0!==r&&r.startsWith("/")?"".concat(d.Z.APP.BASE_PATH).concat(x):x,component:"img",onError:v}),j&&(0,m.jsx)(a.Z,{children:(0,l.HD)(j)?(0,m.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:j}):j}),Z&&Z.length>0&&(0,m.jsx)(c.Z,{children:Z.map((function(e){return(0,m.jsx)("div",{children:e},O++)}))})]})}},74288:function(e,r,n){n(67294),n(85893)},39698:function(e,r,n){n.d(r,{xs:function(){return h},x4:function(){return j},Dx:function(){return v}});var t=n(67294),i=n(29602),a=n(15671),o=n(43144),c=n(60136),s=n(82963),l=n(61120),d=n(79895),u=n(85893);function f(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,l.Z)(e);if(r){var i=(0,l.Z)(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return(0,s.Z)(this,n)}}t.Component;var m=(0,i.ZP)("div")((function(e){var r=e.theme,n=e.width;return{margin:"0",padding:"0 1rem 1rem 0",display:"block",color:r.palette.text.primary,backgroundColor:"transparent",minWidth:n,maxWidth:n}})),p=(0,i.ZP)("div")((function(e){var r=e.theme;e.width;return{backgroundColor:r.palette.action.selected,color:r.palette.text.primary,padding:"1rem",display:"flex",flexGrow:1,margin:"0.1rem",width:"100%"}})),h=function(e){return console.log(e),(0,u.jsx)(m,{width:e.width,children:(0,u.jsx)(p,{children:e.children})})},v=(0,i.ZP)("h2")({fontSize:"1.5rem",lineHeight:"1.5rem",padding:"0",margin:"0 0 0.75rem 0"}),j=((0,i.ZP)("h3")({fontSize:"1.2rem",lineHeight:"1.5rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})},55301:function(e,r,n){n.r(r),n.d(r,{default:function(){return $}});n(67294);var t=n(11163),i=n(4942),a=n(55619),o={automata:{name:"page_movie"},page:{url:function(e){var r=e.id;return"/movies/".concat(r)}}},c=(n(70357),n(52651),n(23275),n(28388)),s=n(84307),l=n(64129),d=n(97060),u=n(59231),f=n(59067),m=n(97820),p=(n(27159),n(48724)),h=n(12868),v=(n(74288),n(14308)),j=n(29110),x=n(50367),g=n(58862),y=n(82356),b=n(414),Z=n(85893);function O(e){var r=e.data;e.loading;return r=r||{},(0,Z.jsxs)(v.Z,{children:[(0,Z.jsx)(h.Z,{src:r.image?r.image.poster:null}),(0,Z.jsxs)(v.Z,{direction:"row",children:[(0,Z.jsx)(p.Z,{color:"primary",text:r.type}),(0,Z.jsx)(m.Z,{data:r.genre})]}),(0,Z.jsx)(f.Z,{text:r.title}),(0,Z.jsxs)(x.RQ,{children:[(0,Z.jsx)(g.DK,{children:"general information"}),(0,Z.jsx)(y.Z,{title:"Released",data:r.releaseYear}),(0,Z.jsx)(y.Z,{title:"Duration",data:r.duration,sufix:"mins"}),(0,Z.jsx)(y.Z,{title:"Classification",data:r.classification}),(0,Z.jsx)(y.Z,{title:"Language",data:r.language}),(0,Z.jsx)(y.Z,{title:"Country",data:r.country}),(0,Z.jsx)(y.Z,{title:"Production",data:r.production})]}),(0,Z.jsx)(c.Z,{data:r}),(0,Z.jsx)(l.Z,{data:r.rating}),(0,Z.jsx)(d.Z,{type:"cast",data:r.cast,story:"/movies/stories/actors"}),(0,Z.jsx)(u.Z,{data:r.awards}),(0,Z.jsx)(j.Z,{title:"plot",text:r.plot?r.plot:r.description}),(0,Z.jsx)(b.Z,{type:"remakes",data:r.remakes}),(0,Z.jsx)(d.Z,{type:"directors",data:r.directors,story:"/movies/stories/directors"}),(0,Z.jsx)(d.Z,{type:"writers",data:r.writers,story:"/movies/stories/writers"}),(0,Z.jsx)(d.Z,{type:"crew",data:r.cast}),(0,Z.jsx)(s.Z,{data:r.streamBy})]})}var w=n(28973);function P(e){return(0,Z.jsx)(x.X,{children:(0,Z.jsxs)(v.Z,{spacing:1,sx:{padding:"1rem",display:"flex",flexGrow:1},children:[(0,Z.jsx)(w.Z,{variant:"rectangular",height:300}),(0,Z.jsx)(w.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,Z.jsx)(w.Z,{variant:"text",style:{width:"40%"}}),(0,Z.jsx)(w.Z,{variant:"text",style:{width:"25%"}}),(0,Z.jsx)(w.Z,{variant:"text",style:{width:"25%"}}),(0,Z.jsx)(w.Z,{variant:"text",style:{width:"25%"}})]})})}var D,S=n(15861),E=n(87757),R=n.n(E),k=n(24268),H=n(16161),A=n(30168),C=n(54397),B=n(74273);function z(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function _(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?z(Object(n),!0).forEach((function(r){(0,i.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var L,T=(0,C.Ps)(D||(D=(0,A.Z)(["\nquery getMovie($id:String!) {\n  movie(id: $id){\n    id\n    title\n    country\n    type\n    genre\n    duration\n    rating {\n      averageRating\n      name\n    }\n    releaseYear\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    directors{\n      id\n      name\n    }\n    cast {\n      id\n      name\n    }\n    writers{\n      id\n      name\n    }\n    crew{\n      id\n      name\n    }    \n    awards {\n      category\n      festival{\n        id\n        name\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    remakes{\n      id\n      title\n      releaseYear\n      directors{\n        id\n        name\n      }\n    }\n\n  }\n}\n"])));function Q(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function K(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Q(Object(n),!0).forEach((function(r){(0,i.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var M=o.automata.name,G=(0,k.hg)("".concat(M,"/fetchData"),function(){var e=(0,S.Z)(R().mark((function e(r,n){return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(Y(r)),e.next=3,t=r.id,(0,B.h)(T,{id:t},(function(e){return _(_({},e),{},{data:e.data.movie})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var t}),e)})));return function(r,n){return e.apply(this,arguments)}}()),W=(0,k.oM)({name:M,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=K(K({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&t.default.push("".concat(o.page.url(e.params)),null,{shallow:!0})}},extraReducers:(L={},(0,i.Z)(L,G.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(L,G.fulfilled,(function(e,r){var n=r.payload,t=n.loading,i=n.error,a=n.data;e.data=a,e.loading=t,e.error=i})),(0,i.Z)(L,G.rejected,(function(e,r){var n=r.error;e.data=[],e.loading=!1,e.error=n})),L)});H.h.reducerManager.add(M,W.reducer);W.reducer;var Y=W.actions.setParams;function I(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function N(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?I(Object(n),!0).forEach((function(r){(0,i.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function U(e){return(0,Z.jsx)(a.Z,{params:N(N({},e),{},{breadcrumbs:function(r){var n,t;return"".concat(e.breadcrumbs,"/").concat(null!==(n=null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.title)&&void 0!==n?n:"loading")}}),config:o,fetch:function(e){return G(N({},e))},detail:function(e){return(0,Z.jsx)(O,{data:e.data})},skeleton:(0,Z.jsx)(P,{})})}function q(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function F(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?q(Object(n),!0).forEach((function(r){(0,i.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var X=function(e){return(0,Z.jsx)(U,F(F({},e),{},{render:"detail"}))},$=function(e){var r,n,i=(0,t.useRouter)(),a=e.id?e.id:null!==(r=null===i||void 0===i||null===(n=i.query)||void 0===n?void 0:n.movie)&&void 0!==r?r:"";return(0,Z.jsx)(X,{breadcrumbs:"/movies",id:a})}}}]);