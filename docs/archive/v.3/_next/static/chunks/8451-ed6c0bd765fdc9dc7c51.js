"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8451],{88654:function(t,n,r){r.d(n,{Ez:function(){return j},iY:function(){return g},AK:function(){return x}});var e,i,a,o=r(30168),c=r(4942),s=r(54397),d=r(42535),u=r(75679),l=r(85639);function f(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function h(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){(0,c.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var j=function(t){var n=t.page,r=t.op,e=t.qryName,i=void 0===e?"":e;return(0,d.h)(p({qryName:i}),{page:n,field:JSON.stringify(r)},(function(t){return h(h({},t),{},{data:t.data.tvShows})}))},p=function(t){var n=t.qryName;return(0,s.Ps)(e||(e=(0,o.Z)(["\n  query tv_shows_","($page: Int, $field: String)\n  {\n    tvShows(page: $page, field: $field){\n      id: _id\n      title\n    }\n  }\n"])),n)},g=function(t){var n=t.id,r=t.qryName,e=void 0===r?"":r;return(0,d.h)(v({qryName:e}),{id:n},(function(t){return h(h({},t),{},{data:t.data.tvShow})}))},v=function(t){t.qryName;return(0,s.Ps)(i||(i=(0,o.Z)(["\n","\n","\nquery tv_show($id:String!) {\n  tvShow(id: $id){\n    id: _id\n    title\n    countries\n    type\n    genres\n    duration\n    ratings {\n      averageRating\n      name\n    }\n    releaseYear\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    produced{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    directed{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    cast {\n      id{\n        ...PersonTinyFragment\n      } \n      as\n    }\n    written{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    crew{\n      id{\n        ...PersonTinyFragment\n      } \n      as\n      cat\n      job\n    }    \n    awards {\n      category\n      festival{\n        ...MovieFestivalTinyFragment\n      }\n      won\n      year\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    remakes{\n      title\n      releaseYear\n      directed{\n        id{\n          ...PersonTinyFragment\n        } \n      }\n    }\n\n  }\n}\n"])),l.B9,u.T4)},x=function(t){var n=t.dataEntity,r=t.qryName;return(0,d.h)(m({ENTITY:n,qryName:r}),{},(function(t){return h(h({},t),{},{data:t.data.dashboardTVShows})}))},m=function(t){t.ENTITY,t.qryName;return(0,s.Ps)(a||(a=(0,o.Z)(["\n  query dashboard_tv_shows\n  {\n    dashboardTVShows {\n      total\n      type\n      releaseDecade\n      duration\n      genres\n      awards\n      countries\n      ratings\n      production\n      boxOffice\n      cast\n      directors\n      producers\n      writers\n    }\n  }\n"])))}},97820:function(t,n,r){r.d(n,{Z:function(){return c}});r(67294);var e=r(29602),i=r(48724),a=r(14308),o=r(85893);(0,e.ZP)("h1")({margin:0});function c(t){var n=t.data;return n?(0,o.jsx)(a.Z,{direction:"row",children:n.map((function(t,n){return(0,o.jsx)(i.Z,{variant:"outlined",text:t},n)}))}):(0,o.jsx)("div",{})}},12868:function(t,n,r){r(67294),r(52651),r(23275);var e=r(7945),i=r(74035),a=r(85893);function o(t){var n=t.src,r=t.height,i=t.width;return(0,a.jsx)(e.Z,{src:n,width:i,height:r})}n.Z=function(t){var n=t.src;return t.loading,(0,a.jsx)(i.RQ,{children:(0,a.jsx)("div",{style:{height:300,width:"100%",backgroundColor:"#333",overflow:"hidden"},children:(0,a.jsx)(o,{src:n,height:300,width:250})})})}},97060:function(t,n,r){var e=r(4942),i=r(67294),a=r(74035),o=r(58862),c=r(39698),s=r(25662),d=r(89260),u=r(34769),l=r(14308),f=r(85893);function h(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function j(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?h(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}n.Z=function(t){var n=t.data,r=(t.loading,t.type),e=t.story,h=t.format,p=void 0===h?"list":h;if(!n||0==n.length)return(0,f.jsx)("div",{});var g=r?(0,f.jsx)(o.DK,{children:(0,f.jsx)(c.Ct,{content:n.length,children:r})}):"";return g=r&&e?(0,f.jsx)(d.Z,{href:e,children:g}):g,(0,f.jsxs)(a.RQ,{children:[n&&n.length>0&&g,"list"===p&&(0,f.jsx)(u.Z,{data:n,item:function(t){return(0,f.jsx)(s.Z,j({format:"list"},t))}}),"tiny"===p&&(0,f.jsx)(l.Z,{children:n.map((function(t,n){return(0,f.jsx)(i.Fragment,{children:(0,f.jsx)(s.Z,j(j({format:"tiny"},t),t.id))},n)}))})]})}},64129:function(t,n,r){r(67294);var e=r(74035),i=r(58862),a=r(82356),o=r(52651),c=r(23275),s=r(85893);n.Z=function(t){var n=t.data;return t.loading,t.route,!n||"name"in n||0==n.length?(0,s.jsx)("div",{}):(0,s.jsxs)(e.RQ,{children:[(0,s.jsx)(i.DK,{children:"Ratings"}),(0,s.jsx)(o.Z,{children:n&&n.length>0&&n.map((function(t,n){return(0,s.jsx)(c.Z,{xs:6,sm:4,md:3,lg:2,children:(0,s.jsx)(a.Z,{title:t.name,data:t.averageRating})},n)}))})]})}},28388:function(t,n,r){r.d(n,{Z:function(){return s}});r(67294);var e=r(14308),i=r(48724),a=r(74035),o=r(58862),c=r(85893);function s(t){var n,r,s=t.data,d=t.website;return s&&(d||null!==(n=s.id)&&void 0!==n&&n.startsWith("tt")||null!==(r=s.id)&&void 0!==r&&r.startsWith("nm")||s.wiki)?(0,c.jsxs)(a.RQ,{children:[(0,c.jsx)(o.DK,{children:"More information"}),(0,c.jsxs)(e.Z,{direction:"row",children:[d&&(0,c.jsx)("a",{href:d,children:(0,c.jsx)(i.Z,{text:"website"})}),s.id&&s.id.startsWith("tt")&&(0,c.jsx)("a",{href:"https://www.imdb.com/title/".concat(s.id,"/"),children:(0,c.jsx)(i.Z,{text:"IMDB"})}),s.id&&s.id.startsWith("nm")&&(0,c.jsx)("a",{href:"https://www.imdb.com/name/".concat(s.id,"/"),children:(0,c.jsx)(i.Z,{text:"IMDB"})}),s.wiki&&(0,c.jsx)("a",{href:"https://wikipedia.com/wiki/".concat(s.wiki.replace(/ /g,"_")),children:(0,c.jsx)(i.Z,{text:"wikipedia"})})]})]}):(0,c.jsx)("div",{})}},84307:function(t,n,r){r(67294);var e=r(74035),i=r(85893);n.Z=function(t){var n=t.data;return t.loading,t.route,n&&null!==n&&0!=n.length?"name"in n?(0,i.jsx)("div",{}):(0,i.jsx)(e.RQ,{children:n.map((function(t,n){return(0,i.jsxs)("div",{children:[t.name&&(0,i.jsxs)("div",{children:["Name: ",t.name]}),t.yearAdded&&(0,i.jsxs)("div",{children:["Year added: ",t.yearAdded]})]},n)}))}):(0,i.jsx)("div",{})}},29110:function(t,n,r){r.d(n,{Z:function(){return o}});r(67294);var e=r(74035),i=r(58862),a=r(85893);function o(t){var n=t.title,r=t.text;return r?(0,a.jsxs)(e.RQ,{children:[n&&(0,a.jsx)(i.DK,{children:n}),(0,a.jsx)(i.nv,{children:r})]}):(0,a.jsx)("div",{})}},59067:function(t,n,r){r.d(n,{Z:function(){return d}});r(67294);var e=r(74035),i=r(29602),a=r(85893),o=(0,i.ZP)("h2")({fontSize:"2.5rem",lineHeight:"2.75rem",padding:"0",margin:"0"}),c=(0,i.ZP)("div")({margin:0,padding:0,fontSize:"0.9rem",lineHeight:"1.3rem"}),s=(0,i.ZP)("div")({margin:0,padding:0,fontSize:"0.8rem",lineHeight:"1.2rem",fontWeight:500});function d(t){var n=t.text,r=t.subText1,i=t.subText2,d=t.subText,u=t.link;d=d||r;var l=(0,a.jsx)(o,{children:n});return u&&(l=(0,a.jsx)("a",{href:u,children:l})),(0,a.jsxs)(e.RQ,{children:[l,d&&(0,a.jsx)(c,{children:d}),i&&(0,a.jsxs)(s,{children:["by ",i]})]})}},34769:function(t,n,r){r.d(n,{Z:function(){return l}});var e=r(67294),i=r(29602),a=r(26447),o=r(62448),c=r(36501),s=r(28973),d=r(85893),u=(0,i.ZP)("div")((function(){return{padding:"1rem",marginBottom:"0rem",backgroundColor:"transparent"}}));function l(t){var n=t.skeleton,r=t.data,i=t.item,c=t.noPaging,s=void 0===c||c,l=t.pageSize,h=t.loading,j=t.onPageChange,p=t.page,g=t.url,v=(0,e.useRef)(null);r=r||[1,2,3,4];var x=(0,d.jsx)(u,{children:(0,d.jsxs)(a.Z,{direction:"row",style:{overflowX:"auto"},children:[(0,d.jsx)("div",{ref:v}),r.map((function(t,r){return(0,d.jsx)("div",{style:{width:"100%"},children:h?n||(0,d.jsx)(f,{}):i?i(t):null},r)}))]})});return s||(x=(0,d.jsx)(o.Z,{pageSize:l,data:r,url:g,onPageChange:function(t){v.current.scrollIntoView(!1),j&&j(t)},page:p,loading:h,children:x})),x}function f(){return(0,d.jsx)(c.Z,{style:{width:"200px",backgroundColor:"transparent",flexGrow:1,padding:"1rem",margin:"0.5rem"},children:(0,d.jsxs)(a.Z,{spacing:1,children:[(0,d.jsx)(s.Z,{variant:"text",width:"20%"}),(0,d.jsx)(s.Z,{variant:"text"}),(0,d.jsx)(s.Z,{variant:"text",width:"60%"})]})})}},7945:function(t,n,r){r(67294);var e=r(1216),i=r(29602),a=r(20883),o=r(85893),c="".concat(a.Z.APP.BASE_PATH).concat(a.Z.DEFAULTS.IMAGE_PLACEHOLDER),s=function(t){return t.target.src=c},d=(0,i.ZP)("div")({position:"relative",overflow:"hidden",backgroundColor:"#efefef",backgroundImage:"url('".concat(c,"')"),backgroundPosition:"center center",width:"fit-content",height:"fit-content",padding:0,margin:0});n.Z=function(t){var n,r=t.src,i=t.lazy,c=(t.preload,t.width),u=t.height,l=(t.style,t.layout);r=null!==(n=r)&&void 0!==n&&n.startsWith("/")?"".concat(a.Z.APP.BASE_PATH).concat(r):r,c=c||"100%",u=u||null;var f=(0,o.jsx)("img",{src:r,layout:l,width:c,height:u,onError:s});return i&&(f=(0,o.jsx)(e.ZP,{only:!0,children:f})),(0,o.jsx)(d,{children:f})}},48724:function(t,n,r){r.d(n,{Z:function(){return o}});r(67294);var e=r(29602),i=r(90461),a=r(85893);function o(t){var n=t.text,r=t.color,e=t.variant,o=t.onClick;return(0,a.jsx)(c,{children:(0,a.jsx)(i.Z,{variant:e,color:r,size:"small",label:n,onClick:o})})}o.defaultProps={onClick:null,text:"",color:"primary",variant:"default"};var c=(0,e.ZP)("div")({display:"inline-block",margin:"0",marginRight:"0.25rem",marginBottom:"0.25rem"})},28451:function(t,n,r){r.r(n),r.d(n,{default:function(){return H}});r(67294);var e=r(11163),i=r(4942),a=r(55619),o={automata:{name:"page_tv_show"},page:{url:function(t){var n=t.id;return"/tv-shows/".concat(n)}}},c=(r(70357),r(52651),r(23275),r(28388)),s=r(84307),d=r(64129),u=r(97060),l=r(59231),f=r(59067),h=r(97820),j=(r(27159),r(48724)),p=r(12868),g=(r(74288),r(14308)),v=r(29110),x=r(74035),m=r(58862),y=r(82356),b=r(85893);function w(t){var n=t.data;t.loading;return n=n||{},(0,b.jsxs)(g.Z,{children:[(0,b.jsx)(p.Z,{src:n.image?n.image.poster:null}),(0,b.jsxs)(g.Z,{direction:"row",children:[(0,b.jsx)(j.Z,{color:"primary",text:n.type}),(0,b.jsx)(h.Z,{data:n.genre})]}),(0,b.jsx)(f.Z,{text:n.title}),(0,b.jsxs)(x.RQ,{children:[(0,b.jsx)(m.DK,{children:"general information"}),(0,b.jsx)(y.Z,{title:"Released",data:n.releasedDate,format:"year"}),(0,b.jsx)(y.Z,{title:"Duration",data:n.duration,sufix:"mins"}),(0,b.jsx)(y.Z,{title:"Classification",data:n.classification}),(0,b.jsx)(y.Z,{title:"Language",data:n.language}),(0,b.jsx)(y.Z,{title:"Country",data:n.country}),(0,b.jsx)(y.Z,{title:"Production",data:n.production})]}),(0,b.jsx)(c.Z,{data:n}),(0,b.jsx)(d.Z,{data:n.rating}),(0,b.jsx)(u.Z,{type:"cast",data:n.cast,story:"/movies/stories/actors"}),(0,b.jsx)(l.Z,{data:n.awards}),(0,b.jsx)(v.Z,{title:"plot",text:n.plot?n.plot:n.description}),(0,b.jsx)(u.Z,{type:"directors",data:n.directors,story:"/movies/stories/directors"}),(0,b.jsx)(u.Z,{type:"writers",data:n.writers,story:"/movies/stories/writers"}),(0,b.jsx)(u.Z,{type:"crew",data:n.crew}),(0,b.jsx)(s.Z,{data:n.streamBy})]})}var O=r(28973);function Z(t){return(0,b.jsx)(x.X,{children:(0,b.jsxs)(g.Z,{spacing:1,children:[(0,b.jsx)(O.Z,{variant:"rectangular",height:300}),(0,b.jsx)(O.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,b.jsx)(O.Z,{variant:"text",style:{width:"40%"}}),(0,b.jsx)(O.Z,{variant:"text",style:{width:"25%"}}),(0,b.jsx)(O.Z,{variant:"text",style:{width:"25%"}}),(0,b.jsx)(O.Z,{variant:"text",style:{width:"25%"}})]})})}var P,D=r(15861),k=r(87757),S=r.n(k),E=r(24268),T=r(80105),R=r(88654);function _(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function C(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?_(Object(r),!0).forEach((function(n){(0,i.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var N=o.automata.name,q=(0,E.hg)("".concat(N,"/fetchData"),function(){var t=(0,D.Z)(S().mark((function t(n,r){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(B(n)),t.next=3,R.iY(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}()),A=(0,E.oM)({name:N,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,n){t.params=C(C({},t.params),n.payload),"banner"!=t.params.renderer&&1!=t.params.page&&e.default.push("".concat(o.page.url(t.params)),null,{shallow:!0})}},extraReducers:(P={},(0,i.Z)(P,q.pending,(function(t,n){t.data=null,t.loading=!0,t.error=""})),(0,i.Z)(P,q.fulfilled,(function(t,n){var r=n.payload,e=r.loading,i=r.error,a=r.data;t.data=a,t.loading=e,t.error=i})),(0,i.Z)(P,q.rejected,(function(t,n){var r=n.error;t.data=[],t.loading=!1,t.error=r})),P)});T.h.reducerManager.add(N,A.reducer);A.reducer;var B=A.actions.setParams;function F(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function z(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?F(Object(r),!0).forEach((function(n){(0,i.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function I(t){return(0,b.jsx)(a.Z,{params:z(z({},t),{},{breadcrumbs:function(n){var r,e;return"".concat(t.breadcrumbs,"/").concat(null!==(r=null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.title)&&void 0!==r?r:"loading")}}),config:o,fetch:function(t){return q(z({},t))},detail:function(t){return(0,b.jsx)(w,{data:t.data})},skeleton:(0,b.jsx)(Z,{})})}function Q(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function M(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(r),!0).forEach((function(n){(0,i.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var Y=function(t){return(0,b.jsx)(I,M(M({},t),{},{render:"detail"}))},H=function(t){var n,r,i=(0,e.useRouter)(),a=t.id?t.id:null!==(n=null===(r=i.query)||void 0===r?void 0:r["tv-show"])&&void 0!==n?n:"";return(0,b.jsx)(Y,{breadcrumbs:"/tv-shows",id:a})}}}]);