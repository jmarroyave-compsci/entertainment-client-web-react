(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{98543:function(e,r,t){"use strict";var n=t(4942),o=(t(67294),t(2093)),c=t(85893);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){return(0,c.jsx)(o.Z,a(a({},e),{},{render:"banner"}))}},2093:function(e,r,t){"use strict";t.d(r,{Z:function(){return O}});var n=t(4942),o=(t(67294),t(11163)),c=t(55619),i={automata:{name:"about-project-blog"},page:{title:"the Log",description:"some lessons learned while programming this project",url:function(){return"/about/project/log"}},banner:{showData:!0}},a=(t(43332),t(89260)),s=t(58862),u=t(85893);function p(e){e.id;var r=e.title,t=(e.thumbnail,e.description,e.slug),n=e.sprint,o=e.day;return(0,u.jsx)(a.Z,{box:!0,href:"".concat(i.page.url(),"/posts/").concat(t),children:(0,u.jsxs)(s.Zh,{children:[(0,u.jsx)(s.x4,{children:"sprint ".concat(n," - day ").concat(o).toUpperCase()}),(0,u.jsx)(s.nv,{children:r})]})})}function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function O(e){var r=(0,o.useRouter)();return(0,u.jsx)(c.Z,{config:i,data:e.data,item:function(e){return(0,u.jsx)(p,l({},e))},params:l(l({},e),{},{loading:!1}),fetch:function(t){"banner"!==e.render&&r.push("".concat(i.page.url(),"/").concat(t.page))}})}},92432:function(e,r,t){"use strict";t.d(r,{Z:function(){return N}});var n,o=t(4942),c=(t(67294),t(55619)),i={automata:{name:"stories_podcasts_music"},page:{title:"Music Podcasts",description:"",url:function(){return"/podcasts/stories/music"}},banner:{showData:!0}},a=t(15861),s=t(87757),u=t.n(s),p=t(24268),f=t(16161),l=t(11163),O=t(30168),b=t(54397),j=t(74273);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d,m=(0,b.Ps)(n||(n=(0,O.Z)(["\n  query getStory($page: Int)\n{\n  podcastsCategoryMusic(page: $page) {\n    id\n    title\n    link\n    image\n  }\n}\n"])));function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var w=i.automata.name,v=(0,p.hg)("".concat(w,"/fetchData"),function(){var e=(0,a.Z)(u().mark((function e(r,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(x(r)),e.next=3,n=r.page,(0,j.h)(m,{page:n},(function(e){return y(y({},e),{},{data:e.data.podcastsCategoryMusic})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(r,t){return e.apply(this,arguments)}}()),D=(0,p.oM)({name:w,initialState:{params:{renderer:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=h(h({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&l.default.push("".concat(i.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(d={},(0,o.Z)(d,v.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(d,v.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(d,v.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),d)});f.h.reducerManager.add(w,D.reducer);D.reducer;var x=D.actions.setParams,Z=t(43332),S=t(44898),E=(t(59231),t(85893));function _(e){var r=e.id,t=e.title,n=(e.awards,e.full,e.image),o=e.description;e.box;return(0,E.jsx)(S.Z,{box:!0,id:r,entity:name,style:{width:"100%"},children:(0,E.jsx)(Z.Z,{image:n,text:o,title:t})})}function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function M(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function N(e){return(0,E.jsx)(c.Z,{params:e,config:i,fetch:function(e){return v(M({},e))},item:function(e){return(0,E.jsx)(_,M({full:!0},e))}})}},41821:function(e,r,t){"use strict";t.d(r,{Z:function(){return T}});var n,o=t(4942),c=(t(67294),t(55619)),i={automata:{name:"stories_remakes"},page:{title:"Remakes",description:"",url:function(e){var r=e.entity;return"/".concat(r,"/stories/remakes")}},banner:{showData:!0}},a=t(15861),s=t(87757),u=t.n(s),p=t(24268),f=t(16161),l=t(11163),O=t(30168),b=t(54397),j=t(74273);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d,m=(0,b.Ps)(n||(n=(0,O.Z)(["\n  query GetData($page: Int){\n  storiesMoviesRemakes(page: $page){\n    name\n    count\n    recs{\n      id\n      releasedDate\n      type\n      genre\n      directors{\n        id\n        name\n      }\n    }\n  }\n}\n"])));function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var w=i.automata.name,v=(0,p.hg)("".concat(w,"/fetchData"),function(){var e=(0,a.Z)(u().mark((function e(r,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(x(r)),e.next=3,n=r.page,(0,j.h)(m,{page:n},(function(e){return y(y({},e),{},{data:e.data.storiesMoviesRemakes})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(r,t){return e.apply(this,arguments)}}()),D=(0,p.oM)({name:w,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=h(h({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&l.default.push("".concat(i.page.url(e.params),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(d={},(0,o.Z)(d,v.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(d,v.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(d,v.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),d)});f.h.reducerManager.add(w,D.reducer);D.reducer;var x=D.actions.setParams,Z=t(43332),S=t(49896),E=(t(59231),t(19888)),_=t(82356),k=t(85893);function M(e){var r=e.image,t=e.name,n=(e.count,e.recs);return(0,k.jsx)(Z.Z,{image:r?r.poster:r,text:(0,k.jsx)("div",{children:n.slice(0,3).map((function(e,r){return(0,k.jsx)(_.Z,{title:(0,E.hT)(e.releasedDate,"YYYY"),value:(0,k.jsx)(N,{id:e.id,children:e.directors[0]?e.directors[0].name:"?"},r)},r)}))}),title:t})}function N(e){var r=e.id,t=e.children;return r?(0,k.jsx)(S.Z,{id:r,children:(0,k.jsx)("div",{children:t})}):t}t(45688);function Y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Y(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function T(e){return(0,k.jsx)(c.Z,{params:e,config:i,fetch:function(e){return v(C({},e))},item:function(e){return(0,k.jsx)(M,C({full:!0},e))}})}},85670:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});t(67294);var n=t(29602),o=(t(43332),t(89260)),c=t(58862),i=t(9092),a=t(85893),s=(0,n.ZP)("div")((function(e){var r=e.theme,t=e.img;return{width:"100%",height:"150px",padding:"1rem",color:r.palette.primary.contrastText,backgroundColor:r.palette.background.paper,backgroundImage:"url('".concat(i.Z.APP.BASE_PATH).concat(t,"')"),margin:"0 1px 1px 0",display:"flex",justifyContent:"center",alignItems:"center",flex:1}}));function u(e){e.id;var r=e.name,t=e.url,n=e.img;return(0,a.jsx)(o.Z,{box:!0,href:t,children:(0,a.jsx)(s,{img:n,children:(0,a.jsx)(c.Dx,{children:r})})})}},19888:function(e,r,t){"use strict";t.d(r,{Rx:function(){return i},hT:function(){return a},T5:function(){return s}});var n=t(92077),o=t.n(n),c=t(24417),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return o()(Number(e)).format(r)},a=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var r=Number(e);return Number.isInteger(r)?new Date(r):new Date(e)}catch(t){return null}},n=function(e,r){switch(r){case"ago":return formatDistance(e,new Date);case"DD/MM/YYYY":return formatter(e,"dd/MM/yyyy");case"YYYY":return e.getFullYear();default:return formatter(e,r)}};return n(e=t(e),r)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return c.default.toSentenceCase(e)}},75588:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return U},default:function(){return W}});var n=t(4942),o=t(67294),c=t(93942),i=t(19016),a=t(14308),s=t(40915),u=t(5398),p=t(85893);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=function(e){return(0,p.jsx)(u.Z,l(l({},e),{},{render:"banner"}))},b=t(41821);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y=function(e){return(0,p.jsx)(b.Z,g(g({},e),{},{render:"banner"}))},d=t(92432);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h=function(e){return(0,p.jsx)(d.Z,P(P({},e),{},{render:"banner"}))},w=t(98543),v={title:"Professions",description:"you can take a look to peopl"},D=t(529),x=t(85670);function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){return(0,p.jsx)(x.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))}var E=t(45688);function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){return(0,p.jsx)(D.Z,{showData:!0,title:v.title,description:(0,p.jsx)(E.C,{tag:"director,actor,writer"}),data:[{name:"Actors",url:"/movies/stories/actors",img:"/img/ba_pro_act.jpg"},{name:"Directors",url:"/movies/stories/directors",img:"/img/ba_pro_dir.jpg"},{name:"Writers",url:"/movies/stories/writers",img:"/img/ba_pro_wri.jpg"},{name:"Producers",url:"/movies/stories/producers",img:"/img/ba_pro_wri.jpg"}],item:function(e){return(0,p.jsx)(S,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({full:!0},e))},renderer:"tiles",xs:6,sm:6,md:3,lg:3})}function M(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?M(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Y=function(e){return(0,p.jsx)(k,N(N({},e),{},{render:"banner"}))},C=(t(55619),{title:"Dashboards",description:""});function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){return(0,p.jsx)(x.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))}function I(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function A(e){return(0,p.jsx)(D.Z,{showData:!0,title:C.title,description:(0,p.jsx)(E.C,{tag:"data"}),data:[{name:"People",url:"/people",img:"/img/ba_pro_act.jpg"},{name:"Movies",url:"/movies",img:"/img/ba_pro_dir.jpg"},{name:"TV Shows",url:"/tv-shows",img:"/img/ba_pro_wri.jpg"},{name:"Video Games",url:"/video-games",img:"/img/ba_pro_wri.jpg"},{name:"Podcasts",url:"/podcasts",img:"/img/ba_pro_wri.jpg"},{name:"Festivals",url:"/movies/festivals",img:"/img/ba_pro_wri.jpg"}],item:function(e){return(0,p.jsx)(R,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?I(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({full:!0},e))},renderer:"tiles",xs:6,sm:6,md:4,lg:4})}function $(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function G(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?$(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var q=function(e){return(0,p.jsx)(A,G(G({},e),{},{render:"banner"}))};function F(e){var r=(0,c.I0)(),t=(e.data,e.blog),n=function(e){return Math.floor(Math.random()*e)+1};return(0,o.useEffect)((function(){r((0,i.YA)({breadcrumbs:e.breadcrumbs}))}),[]),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(s.Z,{className:"section-1",children:(0,p.jsx)(O,{entity:"movies",year:2018-n(50)})}),(0,p.jsx)(s.Z,{className:"section-2",children:(0,p.jsx)(y,{entity:"movies",page:n(10)})}),(0,p.jsx)(s.Z,{className:"section-3",children:(0,p.jsx)(Y,{})}),(0,p.jsx)(s.Z,{className:"section-2",children:(0,p.jsx)(q,{})}),(0,p.jsx)(s.Z,{className:"section-0",children:(0,p.jsx)(h,{page:n(10)})}),(0,p.jsx)(s.Z,{className:"section-2",children:(0,p.jsx)(w.Z,{data:t})})]})}function V(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function X(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?V(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var B=function(e){return(0,p.jsx)(F,X(X({},e),{},{render:"page"}))};function H(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?H(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var U=!0,W=function(e){var r=L({},e);return(0,p.jsx)(B,L(L({},r),{},{breadcrumbs:"/"}))}},78581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(75588)}])}},function(e){e.O(0,[6499,5685,5218,3128,2328,4010,266,5398,9774,2888,179],(function(){return r=78581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);