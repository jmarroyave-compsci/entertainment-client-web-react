"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8451],{25662:function(t,e,n){n.d(e,{Z:function(){return c}});n(67294);var r=n(43332),a=n(55476),i=(n(59231),n(39698)),o=n(82356),s=n(85893);function c(t){var e=t.tiny,n=t.format;switch(n=e?"tiny":n){case"list":return function(t){var e=t.id,n=t.name,r=t.as;return(0,s.jsx)(i.xs,{width:"220px",height:"125px",children:(0,s.jsxs)(a.Z,{id:e,children:[(0,s.jsx)("div",{children:(0,s.jsx)(i.Dx,{children:null!==n&&void 0!==n?n:"?"})}),r&&(0,s.jsx)("div",{children:(0,s.jsxs)(i.x4,{children:["as ",r.replace(/[\[\]\'\"]/g,"")]})})]})},e)}(t);case"tiny":return function(t){var e=t.id,n=t.name,r=t.releaseYear;return(0,s.jsx)(a.Z,{id:e,children:(0,s.jsx)(o.Z,{value:n,title:r})})}(t);case"card":default:return function(t){var e=t.id,n=t.name,i=t.text;t.box;return(0,s.jsx)(a.Z,{box:!0,id:e,entity:n,children:(0,s.jsx)(r.Z,{title:n,text:i})},e)}(t)}}},55476:function(t,e,n){n(67294);var r=n(89260),a=n(85893);e.Z=function(t){var e=t.id,n=(t.entity,t.children),i=t.box;return e?(0,a.jsx)(r.Z,{box:i,border:!1,to:"/people/".concat(e),children:n}):n}},88654:function(t,e,n){n.d(e,{Ez:function(){return j},iY:function(){return v},AK:function(){return h}});var r,a,i,o=n(30168),s=n(4942),c=n(54397),d=n(74273),u=n(75679),l=n(85639);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){(0,s.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j=function(t){var e=t.page,n=t.op,r=t.qryName,a=void 0===r?"":r;return(0,d.h)(y({qryName:a}),{page:e,field:JSON.stringify(n)},(function(t){return p(p({},t),{},{data:t.data.tvShows})}))},y=function(t){var e=t.qryName;return(0,c.Ps)(r||(r=(0,o.Z)(["\n  query tv_shows_","($page: Int, $field: String)\n  {\n    tvShows(page: $page, field: $field){\n      id: _id\n      title\n    }\n  }\n"])),e)},v=function(t){var e=t.id,n=t.qryName,r=void 0===n?"":n;return(0,d.h)(g({qryName:r}),{id:e},(function(t){return p(p({},t),{},{data:t.data.tvShow})}))},g=function(t){t.qryName;return(0,c.Ps)(a||(a=(0,o.Z)(["\n","\n","\nquery tv_show($id:String!) {\n  tvShow(id: $id){\n    id: _id\n    title\n    countries\n    type\n    genres\n    duration\n    ratings {\n      averageRating\n      name\n    }\n    releaseYear\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    produced{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    directed{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    cast {\n      id{\n        ...PersonTinyFragment\n      } \n      as\n    }\n    written{\n      id{\n        ...PersonTinyFragment\n      } \n    }\n    crew{\n      id{\n        ...PersonTinyFragment\n      } \n      as\n      cat\n      job\n    }    \n    awards {\n      category\n      festival{\n        ...MovieFestivalTinyFragment\n      }\n      won\n      year\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n    remakes{\n      title\n      releaseYear\n      directed{\n        id{\n          ...PersonTinyFragment\n        } \n      }\n    }\n\n  }\n}\n"])),l.B9,u.T4)},h=function(t){var e=t.dataEntity,n=t.qryName;return(0,d.h)(x({ENTITY:e,qryName:n}),{},(function(t){return p(p({},t),{},{data:t.data.dashboardTVShows})}))},x=function(t){t.ENTITY,t.qryName;return(0,c.Ps)(i||(i=(0,o.Z)(["\n  query dashboard_tv_shows\n  {\n    dashboardTVShows {\n      total\n      type\n      releaseDecade\n      duration\n      genres\n      awards\n      countries\n      ratings\n      production\n      boxOffice\n      cast\n      directors\n      producers\n      writers\n    }\n  }\n"])))}},97820:function(t,e,n){n.d(e,{Z:function(){return s}});n(67294);var r=n(29602),a=n(48724),i=n(14308),o=n(85893);(0,r.ZP)("h1")({margin:0});function s(t){var e=t.data;return e?(0,o.jsx)(i.Z,{direction:"row",children:e.map((function(t,e){return(0,o.jsx)(a.Z,{variant:"outlined",text:t},e)}))}):(0,o.jsx)("div",{})}},97060:function(t,e,n){var r=n(4942),a=n(67294),i=n(50367),o=n(58862),s=n(25662),c=n(89260),d=n(34769),u=n(14308),l=n(85893);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.Z=function(t){var e=t.data,n=(t.loading,t.type),r=t.story,f=t.format,j=void 0===f?"list":f;if(!e||0==e.length)return(0,l.jsx)("div",{});var y=n?(0,l.jsxs)(o.DK,{children:[n,(0,l.jsxs)(o.x4,{children:[" [",e.length,"]"]})]}):"";return y=n&&r?(0,l.jsx)(c.Z,{href:r,children:y}):y,(0,l.jsxs)(i.RQ,{children:[e&&e.length>0&&y,"list"===j&&(0,l.jsx)(d.Z,{data:e,item:function(t){return(0,l.jsx)(s.Z,p(p({format:"list"},t),t.id))}}),"tiny"===j&&(0,l.jsx)(u.Z,{children:e.map((function(t,e){return(0,l.jsx)(a.Fragment,{children:(0,l.jsx)(s.Z,p(p({format:"tiny"},t),t.id))},e)}))})]})}},64129:function(t,e,n){n(67294);var r=n(50367),a=n(58862),i=n(82356),o=n(52651),s=n(23275),c=n(85893);e.Z=function(t){var e=t.data;return t.loading,t.route,!e||"name"in e||0==e.length?(0,c.jsx)("div",{}):(0,c.jsxs)(r.RQ,{children:[(0,c.jsx)(a.DK,{children:"Ratings"}),(0,c.jsx)(o.Z,{children:e&&e.length>0&&e.map((function(t,e){return(0,c.jsx)(s.Z,{xs:6,sm:4,md:3,lg:2,children:(0,c.jsx)(i.Z,{title:t.name,data:t.averageRating})},e)}))})]})}},84307:function(t,e,n){n(67294);var r=n(50367),a=n(85893);e.Z=function(t){var e=t.data;return t.loading,t.route,e&&null!==e&&0!=e.length?"name"in e?(0,a.jsx)("div",{}):(0,a.jsx)(r.RQ,{children:e.map((function(t,e){return(0,a.jsxs)("div",{children:[t.name&&(0,a.jsxs)("div",{children:["Name: ",t.name]}),t.yearAdded&&(0,a.jsxs)("div",{children:["Year added: ",t.yearAdded]})]},e)}))}):(0,a.jsx)("div",{})}},29110:function(t,e,n){n.d(e,{Z:function(){return o}});n(67294);var r=n(50367),a=n(58862),i=n(85893);function o(t){var e=t.title,n=t.text;return n?(0,i.jsxs)(r.RQ,{children:[e&&(0,i.jsx)(a.DK,{children:e}),(0,i.jsx)(a.nv,{children:n})]}):(0,i.jsx)("div",{})}},28451:function(t,e,n){n.r(e),n.d(e,{default:function(){return M}});n(67294);var r=n(11163),a=n(4942),i=n(55619),o={automata:{name:"page_tv_show"},page:{url:function(t){var e=t.id;return"/tv-shows/".concat(e)}}},s=(n(70357),n(52651),n(23275),n(28388)),c=n(84307),d=n(64129),u=n(97060),l=n(59231),f=n(59067),p=n(97820),j=(n(27159),n(48724)),y=n(12868),v=(n(74288),n(14308)),g=n(29110),h=n(50367),x=n(58862),b=n(82356),m=n(85893);function O(t){var e=t.data;t.loading;return e=e||{},(0,m.jsxs)(v.Z,{children:[(0,m.jsx)(y.Z,{src:e.image?e.image.poster:null}),(0,m.jsxs)(v.Z,{direction:"row",children:[(0,m.jsx)(j.Z,{color:"primary",text:e.type}),(0,m.jsx)(p.Z,{data:e.genre})]}),(0,m.jsx)(f.Z,{text:e.title}),(0,m.jsxs)(h.RQ,{children:[(0,m.jsx)(x.DK,{children:"general information"}),(0,m.jsx)(b.Z,{title:"Released",data:e.releasedDate,format:"year"}),(0,m.jsx)(b.Z,{title:"Duration",data:e.duration,sufix:"mins"}),(0,m.jsx)(b.Z,{title:"Classification",data:e.classification}),(0,m.jsx)(b.Z,{title:"Language",data:e.language}),(0,m.jsx)(b.Z,{title:"Country",data:e.country}),(0,m.jsx)(b.Z,{title:"Production",data:e.production})]}),(0,m.jsx)(s.Z,{data:e}),(0,m.jsx)(d.Z,{data:e.rating}),(0,m.jsx)(u.Z,{type:"cast",data:e.cast,story:"/movies/stories/actors"}),(0,m.jsx)(l.Z,{data:e.awards}),(0,m.jsx)(g.Z,{title:"plot",text:e.plot?e.plot:e.description}),(0,m.jsx)(u.Z,{type:"directors",data:e.directors,story:"/movies/stories/directors"}),(0,m.jsx)(u.Z,{type:"writers",data:e.writers,story:"/movies/stories/writers"}),(0,m.jsx)(u.Z,{type:"crew",data:e.crew}),(0,m.jsx)(c.Z,{data:e.streamBy})]})}var w=n(28973);function Z(t){return(0,m.jsx)(h.X,{children:(0,m.jsxs)(v.Z,{spacing:1,children:[(0,m.jsx)(w.Z,{variant:"rectangular",height:300}),(0,m.jsx)(w.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,m.jsx)(w.Z,{variant:"text",style:{width:"40%"}}),(0,m.jsx)(w.Z,{variant:"text",style:{width:"25%"}}),(0,m.jsx)(w.Z,{variant:"text",style:{width:"25%"}}),(0,m.jsx)(w.Z,{variant:"text",style:{width:"25%"}})]})})}var P,D=n(15861),S=n(87757),E=n.n(S),N=n(24268),T=n(16161),q=n(88654);function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var R=o.automata.name,F=(0,N.hg)("".concat(R,"/fetchData"),function(){var t=(0,D.Z)(E().mark((function t(e,n){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.dispatch($(e)),t.next=3,q.iY(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),Y=(0,N.oM)({name:R,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,e){t.params=k(k({},t.params),e.payload),"banner"!=t.params.renderer&&1!=t.params.page&&r.default.push("".concat(o.page.url(t.params)),null,{shallow:!0})}},extraReducers:(P={},(0,a.Z)(P,F.pending,(function(t,e){t.data=null,t.loading=!0,t.error=""})),(0,a.Z)(P,F.fulfilled,(function(t,e){var n=e.payload,r=n.loading,a=n.error,i=n.data;t.data=i,t.loading=r,t.error=a})),(0,a.Z)(P,F.rejected,(function(t,e){var n=e.error;t.data=[],t.loading=!1,t.error=n})),P)});T.h.reducerManager.add(R,Y.reducer);Y.reducer;var $=Y.actions.setParams;function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t){return(0,m.jsx)(i.Z,{params:Q(Q({},t),{},{breadcrumbs:function(e){var n,r;return"".concat(t.breadcrumbs,"/").concat(null!==(n=null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.title)&&void 0!==n?n:"loading")}}),config:o,fetch:function(t){return F(Q({},t))},detail:function(t){return(0,m.jsx)(O,{data:t.data})},skeleton:(0,m.jsx)(Z,{})})}function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I=function(t){return(0,m.jsx)(A,C(C({},t),{},{render:"detail"}))},M=function(t){var e,n,a=(0,r.useRouter)(),i=t.id?t.id:null!==(e=null===(n=a.query)||void 0===n?void 0:n["tv-show"])&&void 0!==e?e:"";return(0,m.jsx)(I,{breadcrumbs:"/tv-shows",id:i})}}}]);