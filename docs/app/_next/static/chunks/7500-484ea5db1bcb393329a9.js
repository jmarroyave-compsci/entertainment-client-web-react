"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7500],{77585:function(e,n,t){t.d(n,{Ez:function(){return j},iY:function(){return h},AK:function(){return m}});var r,i,a,o=t(30168),c=t(4942),s=t(54397),d=t(42535),u=t(75679),l=t(85639);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=function(e){var n=e.page,t=e.op,r=e.qryName,i=void 0===r?"":r;return(0,d.h)(p({qryName:i}),{page:n,field:JSON.stringify(t)},(function(e){return g(g({},e),{},{data:e.data.videoGames})}))},p=function(e){var n=e.qryName;return(0,s.Ps)(r||(r=(0,o.Z)(["\n  query video_games_","($page: Int, $field: String)\n  {\n    videoGames(page: $page, field: $field){\n      id: _id\n      title\n    }\n  }\n"])),n)},h=function(e){var n=e.id,t=e.qryName,r=void 0===t?"":t;return(0,d.h)(v({qryName:r}),{id:n},(function(e){return g(g({},e),{},{data:e.data.videoGame})}))},v=function(e){e.qryName;return(0,s.Ps)(i||(i=(0,o.Z)(["\n","\n","\nquery video_game($id:String!) {\n  videoGame(id: $id){\n    id: _id\n    title\n    countries\n    type\n    genres\n    duration\n    ratings {\n      averageRating\n      name\n    }\n    releaseYear\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    produced{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    directed{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    cast {\n      id{\n        ...PersonTinyFragment\n      } \n      as\n    }\n    written{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    crew{\n      id{\n        ...PersonTinyFragment\n      } \n      as\n      cat\n      job\n    }    \n    awards {\n      category\n      festival{\n        ...MovieFestivalTinyFragment\n      }\n      won\n      year\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    remakes{\n      title\n      releaseYear\n      directed{\n        id{\n          ...PersonTinyFragment\n        } \n      }\n    }\n\n  }\n}\n"])),l.B9,u.T4)},m=function(e){var n=e.dataEntity,t=e.qryName;return(0,d.h)(x({ENTITY:n,qryName:t}),{},(function(e){return g(g({},e),{},{data:e.data.dashboardVideoGames})}))},x=function(e){e.ENTITY,e.qryName;return(0,s.Ps)(a||(a=(0,o.Z)(["\n  query dashboard_video_games\n  {\n    dashboardVideoGames {\n      total\n      type\n      releaseDecade\n      duration\n      genres\n      awards\n      countries\n      ratings\n      production\n      boxOffice\n      cast\n      directors\n      producers\n      writers\n    }\n  }\n"])))}},97820:function(e,n,t){t.d(n,{Z:function(){return c}});t(67294);var r=t(29602),i=t(48724),a=t(14308),o=t(85893);(0,r.ZP)("h1")({margin:0});function c(e){var n=e.data;return n?(0,o.jsx)(a.Z,{direction:"row",children:n.map((function(e,n){return(0,o.jsx)(i.Z,{variant:"outlined",text:e},n)}))}):(0,o.jsx)("div",{})}},12868:function(e,n,t){t(67294),t(52651),t(23275);var r=t(7945),i=t(74035),a=t(85893);function o(e){var n=e.src,t=e.height,i=e.width;return(0,a.jsx)(r.Z,{src:n,width:i,height:t})}n.Z=function(e){var n=e.src;return e.loading,(0,a.jsx)(i.RQ,{children:(0,a.jsx)("div",{style:{height:300,width:"100%",backgroundColor:"#333",overflow:"hidden"},children:(0,a.jsx)(o,{src:n,height:300,width:250})})})}},97060:function(e,n,t){var r=t(4942),i=t(67294),a=t(74035),o=t(58862),c=t(2535),s=t(25662),d=t(89260),u=t(34769),l=t(14308),f=t(85893);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.data,t=(e.loading,e.type),r=e.story,g=e.format,p=void 0===g?"list":g;if(!n||0==n.length)return(0,f.jsx)("div",{});var h=t?(0,f.jsx)(o.DK,{children:(0,f.jsx)(c.Ct,{content:n.length,children:t})}):"";return h=t&&r?(0,f.jsx)(d.Z,{href:r,children:h}):h,(0,f.jsxs)(a.RQ,{children:[n&&n.length>0&&h,"list"===p&&(0,f.jsx)(u.Z,{data:n,item:function(e){return(0,f.jsx)(s.Z,j({format:"list"},e))}}),"tiny"===p&&(0,f.jsx)(l.Z,{children:n.map((function(e,n){return(0,f.jsx)(i.Fragment,{children:(0,f.jsx)(s.Z,j(j({format:"tiny"},e),e.id))},n)}))})]})}},64129:function(e,n,t){t(67294);var r=t(74035),i=t(58862),a=t(82356),o=t(52651),c=t(23275),s=t(85893);n.Z=function(e){var n=e.data;return e.loading,e.route,!n||"name"in n||0==n.length?(0,s.jsx)("div",{}):(0,s.jsxs)(r.RQ,{children:[(0,s.jsx)(i.DK,{children:"Ratings"}),(0,s.jsx)(o.Z,{children:n&&n.length>0&&n.map((function(e,n){return(0,s.jsx)(c.Z,{xs:6,sm:4,md:3,lg:2,children:(0,s.jsx)(a.Z,{title:e.name,data:e.averageRating})},n)}))})]})}},28388:function(e,n,t){t.d(n,{Z:function(){return s}});t(67294);var r=t(14308),i=t(48724),a=t(74035),o=t(58862),c=t(85893);function s(e){var n,t,s=e.data,d=e.website;return s&&(d||null!==(n=s.id)&&void 0!==n&&n.startsWith("tt")||null!==(t=s.id)&&void 0!==t&&t.startsWith("nm")||s.wiki)?(0,c.jsxs)(a.RQ,{children:[(0,c.jsx)(o.DK,{children:"More information"}),(0,c.jsxs)(r.Z,{direction:"row",children:[d&&(0,c.jsx)("a",{href:d,children:(0,c.jsx)(i.Z,{text:"website"})}),s.id&&s.id.startsWith("tt")&&(0,c.jsx)("a",{href:"https://www.imdb.com/title/".concat(s.id,"/"),children:(0,c.jsx)(i.Z,{text:"IMDB"})}),s.id&&s.id.startsWith("nm")&&(0,c.jsx)("a",{href:"https://www.imdb.com/name/".concat(s.id,"/"),children:(0,c.jsx)(i.Z,{text:"IMDB"})}),s.wiki&&(0,c.jsx)("a",{href:"https://wikipedia.com/wiki/".concat(s.wiki.replace(/ /g,"_")),children:(0,c.jsx)(i.Z,{text:"wikipedia"})})]})]}):(0,c.jsx)("div",{})}},84307:function(e,n,t){t(67294);var r=t(74035),i=t(85893);n.Z=function(e){var n=e.data;return e.loading,e.route,n&&null!==n&&0!=n.length?"name"in n?(0,i.jsx)("div",{}):(0,i.jsx)(r.RQ,{children:n.map((function(e,n){return(0,i.jsxs)("div",{children:[e.name&&(0,i.jsxs)("div",{children:["Name: ",e.name]}),e.yearAdded&&(0,i.jsxs)("div",{children:["Year added: ",e.yearAdded]})]},n)}))}):(0,i.jsx)("div",{})}},29110:function(e,n,t){t.d(n,{Z:function(){return o}});t(67294);var r=t(74035),i=t(58862),a=t(85893);function o(e){var n=e.title,t=e.text;return t?(0,a.jsxs)(r.RQ,{children:[n&&(0,a.jsx)(i.DK,{children:n}),(0,a.jsx)(i.nv,{children:t})]}):(0,a.jsx)("div",{})}},59067:function(e,n,t){t.d(n,{Z:function(){return d}});t(67294);var r=t(74035),i=t(29602),a=t(85893),o=(0,i.ZP)("h2")({fontSize:"2.5rem",lineHeight:"2.75rem",padding:"0",margin:"0"}),c=(0,i.ZP)("div")({margin:0,padding:0,fontSize:"0.9rem",lineHeight:"1.3rem"}),s=(0,i.ZP)("div")({margin:0,padding:0,fontSize:"0.8rem",lineHeight:"1.2rem",fontWeight:500});function d(e){var n=e.text,t=e.subText1,i=e.subText2,d=e.subText,u=e.link;d=d||t;var l=(0,a.jsx)(o,{children:n});return u&&(l=(0,a.jsx)("a",{href:u,children:l})),(0,a.jsxs)(r.RQ,{children:[l,d&&(0,a.jsx)(c,{children:d}),i&&(0,a.jsxs)(s,{children:["by ",i]})]})}},34769:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294),i=t(29602),a=t(26447),o=t(62448),c=t(36501),s=t(28973),d=t(85893),u=(0,i.ZP)("div")((function(){return{padding:"1rem",marginBottom:"0rem",backgroundColor:"transparent"}}));function l(e){var n=e.skeleton,t=e.data,i=e.item,c=e.noPaging,s=void 0===c||c,l=e.pageSize,g=e.loading,j=e.onPageChange,p=e.page,h=e.url,v=(0,r.useRef)(null);t=t||[1,2,3,4];var m=(0,d.jsx)(u,{children:(0,d.jsxs)(a.Z,{direction:"row",style:{overflowX:"auto"},children:[(0,d.jsx)("div",{ref:v}),t.map((function(e,t){return(0,d.jsx)("div",{style:{width:"100%"},children:g?n||(0,d.jsx)(f,{}):i?i(e):null},t)}))]})});return s||(m=(0,d.jsx)(o.Z,{pageSize:l,data:t,url:h,onPageChange:function(e){v.current.scrollIntoView(!1),j&&j(e)},page:p,loading:g,children:m})),m}function f(){return(0,d.jsx)(c.Z,{style:{width:"200px",backgroundColor:"transparent",flexGrow:1,padding:"1rem",margin:"0.5rem"},children:(0,d.jsxs)(a.Z,{spacing:1,children:[(0,d.jsx)(s.Z,{variant:"text",width:"20%"}),(0,d.jsx)(s.Z,{variant:"text"}),(0,d.jsx)(s.Z,{variant:"text",width:"60%"})]})})}},7945:function(e,n,t){t(67294);var r=t(1216),i=t(29602),a=t(9092),o=t(85893),c="".concat(a.Z.APP.BASE_PATH).concat(a.Z.DEFAULTS.IMAGE_PLACEHOLDER),s=function(e){return e.target.src=c},d=(0,i.ZP)("div")({position:"relative",overflow:"hidden",backgroundColor:"#efefef",backgroundImage:"url('".concat(c,"')"),backgroundPosition:"center center",width:"fit-content",height:"fit-content",padding:0,margin:0});n.Z=function(e){var n,t=e.src,i=e.lazy,c=(e.preload,e.width),u=e.height,l=(e.style,e.layout);t=null!==(n=t)&&void 0!==n&&n.startsWith("/")?"".concat(a.Z.APP.BASE_PATH).concat(t):t,c=c||"100%",u=u||null;var f=(0,o.jsx)("img",{src:t,layout:l,width:c,height:u,onError:s});return i&&(f=(0,o.jsx)(r.ZP,{only:!0,children:f})),(0,o.jsx)(d,{children:f})}},48724:function(e,n,t){t.d(n,{Z:function(){return o}});t(67294);var r=t(29602),i=t(90461),a=t(85893);function o(e){var n=e.text,t=e.color,r=e.variant,o=e.onClick;return(0,a.jsx)(c,{children:(0,a.jsx)(i.Z,{variant:r,color:t,size:"small",label:n,onClick:o})})}o.defaultProps={onClick:null,text:"",color:"primary",variant:"default"};var c=(0,r.ZP)("div")({display:"inline-block",margin:"0",marginRight:"0.25rem",marginBottom:"0.25rem"})},67500:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});t(67294);var r=t(11163),i=t(4942),a=t(55619),o={automata:{name:"page_video_game"},page:{url:function(e){var n=e.id;return"/video-games/".concat(n)}}},c=(t(70357),t(52651),t(23275),t(28388)),s=t(84307),d=t(64129),u=t(97060),l=(t(59231),t(59067)),f=t(97820),g=(t(27159),t(48724)),j=t(12868),p=(t(74288),t(14308)),h=t(29110),v=t(74035),m=t(58862),x=t(82356),y=t(85893);function b(e){var n=e.data;e.loading;return n=n||{},(0,y.jsxs)(p.Z,{children:[(0,y.jsx)(j.Z,{src:n.image?n.image.poster:null}),(0,y.jsxs)(p.Z,{direction:"row",children:[(0,y.jsx)(g.Z,{color:"primary",text:n.type}),(0,y.jsx)(f.Z,{data:n.genre})]}),(0,y.jsx)(l.Z,{text:n.title}),(0,y.jsxs)(v.RQ,{children:[(0,y.jsx)(m.DK,{children:"general information"}),(0,y.jsx)(x.Z,{title:"Released",data:n.releaseYear}),(0,y.jsx)(x.Z,{title:"Duration",data:n.duration,sufix:"mins"}),(0,y.jsx)(x.Z,{title:"Classification",data:n.classification}),(0,y.jsx)(x.Z,{title:"Language",data:n.language}),(0,y.jsx)(x.Z,{title:"Country",data:n.country}),(0,y.jsx)(x.Z,{title:"Production",data:n.production})]}),(0,y.jsx)(c.Z,{data:n}),(0,y.jsx)(d.Z,{data:n.rating}),(0,y.jsx)(h.Z,{title:"plot",text:n.plot?n.plot:n.description}),(0,y.jsx)(u.Z,{type:"directors",data:n.directors,story:"/movies/stories/directors"}),(0,y.jsx)(u.Z,{type:"writers",data:n.writers,story:"/movies/stories/writers"}),(0,y.jsx)(u.Z,{type:"cast",data:n.cast}),(0,y.jsx)(u.Z,{type:"crew",data:n.crew}),(0,y.jsx)(s.Z,{data:n.streamBy})]})}var O=t(28973);function Z(e){return(0,y.jsx)(v.X,{children:(0,y.jsxs)(p.Z,{spacing:1,children:[(0,y.jsx)(O.Z,{variant:"rectangular",height:300}),(0,y.jsx)(O.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,y.jsx)(O.Z,{variant:"text",style:{width:"40%"}}),(0,y.jsx)(O.Z,{variant:"text",style:{width:"25%"}}),(0,y.jsx)(O.Z,{variant:"text",style:{width:"25%"}}),(0,y.jsx)(O.Z,{variant:"text",style:{width:"25%"}})]})})}var w,P=t(15861),D=t(87757),k=t.n(D),E=t(24268),S=t(80105),T=t(77585);function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C=o.automata.name,N=(0,E.hg)("stories/fetchData",function(){var e=(0,P.Z)(k().mark((function e(n,t){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(A(n)),e.next=3,T.iY(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),q=(0,E.oM)({name:C,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,n){e.params=_(_({},e.params),n.payload),"banner"!=e.params.renderer&&1!=e.params.page&&r.default.push("".concat(o.page.url(e.params)),null,{shallow:!0})}},extraReducers:(w={},(0,i.Z)(w,N.pending,(function(e,n){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(w,N.fulfilled,(function(e,n){var t=n.payload,r=t.loading,i=t.error,a=t.data;e.data=a,e.loading=r,e.error=i})),(0,i.Z)(w,N.rejected,(function(e,n){var t=n.error;e.data=[],e.loading=!1,e.error=t})),w)});S.h.reducerManager.add(C,q.reducer);q.reducer;var A=q.actions.setParams;function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function z(e){return(0,y.jsx)(a.Z,{params:F(F({},e),{},{breadcrumbs:function(n){var t,r;return"".concat(e.breadcrumbs,"/").concat(null!==(t=null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.title)&&void 0!==t?t:"loading")}}),config:o,fetch:function(e){return N(F({},e))},detail:function(e){return(0,y.jsx)(b,{data:e.data})},skeleton:(0,y.jsx)(Z,{})})}function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Q=function(e){return(0,y.jsx)(z,I(I({},e),{},{render:"detail"}))},Y=function(e){var n,t,i=(0,r.useRouter)(),a=e.id?e.id:null!==(n=null===(t=i.query)||void 0===t?void 0:t["video-game"])&&void 0!==n?n:"";return(0,y.jsx)(Q,{breadcrumbs:"/video-games",id:a})}}}]);