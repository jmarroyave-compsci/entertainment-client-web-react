(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4537],{42341:function(e,t,n){"use strict";n(67294);var r=n(89260),a=n(85893);t.Z=function(e){var t=e.id,n=e.children,o=e.box;return(0,a.jsx)(r.Z,{box:o,to:"/movies/festivals/".concat(t),children:n})}},68363:function(e,t,n){"use strict";n.d(t,{O:function(){return d},r:function(){return p}});var r,a,o=n(4942),i=n(30168),c=n(54397),s=n(74273);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=(0,c.Ps)(r||(r=(0,i.Z)(["\nfragment FestivalFragment on MovieFestival {\n  id\n  name\n  wiki\n  startYear\n  country\n  continent\n  image{\n    poster\n  }\n}\n"]))),p=function(e){return(0,s.h)(f,{id:e},(function(e){return l(l({},e),{},{data:e.data.movieFestival})}))},f=(0,c.Ps)(a||(a=(0,i.Z)(["\n  ","\n  query GetData($id: String!)\n  {\n    movieFestival(id: $id) {\n      ...FestivalFragment\n    }\n  }\n"])),d)},50789:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(4942),a=n(67294),o=n(52651),i=n(23275),c=n(79895),s=n(14308),u=n(28973),l=n(62448),d=n(50367),p=n(12666),f=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},b={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function j(e){var t=e.animations,n=void 0===t||t,r=e.data,c=e.loading,s=e.url,u=e.skeleton,g=e.item,j=e.onPageChange,h=e.page,y=e.xs,P=void 0===y?12:y,w=e.sm,x=void 0===w?6:w,Z=e.md,D=void 0===Z?6:Z,E=e.lg,k=void 0===E?4:E,C=e.noPaging,S=void 0!==C&&C,F=e.noPadding;r=r&&r.length>0?r:[1,2,3,4,5,6];var _=function(e){return F?e:(0,f.jsx)(d.ck,{children:e})},A=function(e){return n?(0,f.jsx)(p.ZP,{in:!0,timeout:1300,children:function(t){return(0,f.jsx)("div",{style:v(v({},m),b[t]),children:e})}}):e},R=function(e){return(0,f.jsx)(i.Z,{xs:P,sm:x,md:D,lg:k,children:_(c?u||(0,f.jsx)(O,{}):g?A(g(e.data)):null)})},T=(0,f.jsx)(o.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:r.map((function(t,n){return(0,f.jsx)(a.Fragment,{children:(0,f.jsx)(R,{data:t,params:e})},n)}))});return S||(T=(0,f.jsx)(l.Z,{data:r,url:s,onPageChange:j,page:h,loading:c,children:T})),(0,f.jsx)(d.RQ,{children:T})}function O(){return(0,f.jsx)(c.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,f.jsxs)(s.Z,{spacing:1,children:[(0,f.jsx)(u.Z,{variant:"text",width:"80%"}),(0,f.jsx)(u.Z,{variant:"rectangular",height:240}),(0,f.jsx)(u.Z,{variant:"text"})]})})}},62448:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});n(67294);var r=n(11163),a=n(14308),o=n(72642),i=n(50367),c=n(58862),s=n(85893);function u(e){var t=(0,r.useRouter)(),n=e||{},u=n.children,l=n.route,d=n.loading,p=n.data,f=n.url,g=n.skeleton,v=n.onPageChange,m=n.page;m=(m=m||(l&&l.page?l.page:null))?parseInt(m):1;var b=function(e){if(window.scrollTo(0,0),v)v(e);else{var n="".concat(f,"/").concat(e);t.push(n)}},j=p&&p.length<10,O=1==m;return(0,s.jsx)(i.RQ,{children:p&&p.length>0?(0,s.jsxs)(a.Z,{spacing:2,children:[u,(0,s.jsxs)(a.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,s.jsx)(o.Z,{variant:"outlined",disabled:O,onClick:function(){return b(m-1)},children:"Back"}),(0,s.jsx)(o.Z,{variant:"outlined",disabled:j,onClick:function(){return b(m+1)},children:"Next"})]})]}):(0,s.jsx)(c.Dx,{children:d?g||"loading":"No results"})})}},43332:function(e,t,n){"use strict";n(67294);var r=n(65295),a=n(18515),o=n(42643),i=n(54962),c=n(49161),s=n(2658),u=n(360),l=n(9092),d=n(6447),p=n(27054),f=n(85893),g=(0,p.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),v="".concat(l.Z.APP.BASE_PATH).concat(l.Z.DEFAULTS.IMAGE_PLACEHOLDER),m=function(e){return e.target.src=v};t.Z=function(e){var t,n=g(),p=e.title,v=e.subtitle,b=e.text,j=e.image,O=e.imageHeight,h=void 0===O?180:O,y=e.noImage,P=e.actions,w=0;v=v||"";return y=!!y,j=j||l.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,f.jsxs)(r.Z,{style:{flexGrow:1,width:"100%"},children:[(0,f.jsx)(a.Z,{sx:{width:"100%"},classes:{content:n.headerContent,root:n.headerRoot},title:(0,f.jsx)(d.ZP,{title:p,placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,f.jsx)(s.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:p})})}),subheader:v}),!y&&(0,f.jsx)(i.Z,{height:h||null,image:null!==(t=j)&&void 0!==t&&t.startsWith("/")?"".concat(l.Z.APP.BASE_PATH).concat(j):j,component:"img",onError:m}),b&&(0,f.jsx)(o.Z,{children:(0,u.HD)(b)?(0,f.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:b}):b}),P&&P.length>0&&(0,f.jsx)(c.Z,{children:P.map((function(e){return(0,f.jsx)("div",{children:e},w++)}))})]})}},55619:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(4942),a=n(67294),o=n(11163),i=n(93942),c=n(19016),s=n(25810),u=n(14763),l=n(50789),d=(n(14308),n(529)),p=(n(87863),n(85893));function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t,n,r,u,l=(0,i.I0)(),d=(0,o.useRouter)(),f=e.config,v=(0,a.useState)(""),b=v[0],j=v[1],O=(0,i.v9)((function(e){return e[f.automata.name]})),h=null!==(t=e.params.render)&&void 0!==t?t:null,y=g(g({},e.params),{},{renderer:null!==(n=e.params.renderer)&&void 0!==n?n:h});O=e.data?{data:e.data,params:{page:e.params.page}}:O;(0,a.useEffect)((function(){O&&(l((0,c.K4)({status:O.loading,sender:f.automata.name})),console.log(f.automata.name,O))}),[O]),(0,a.useEffect)((function(){y.breadcrumbs&&l((0,c.YA)({breadcrumbs:"function"===typeof y.breadcrumbs?y.breadcrumbs(O):y.breadcrumbs}))}),[y.breadcrumbs,O]);var P=function(t){e.fetch&&(e.data?e.fetch(g({},t)):l(e.fetch(g({},t))))};return(0,a.useEffect)((function(){null!==d&&void 0!==d&&d.isReady&&("banner"!==h||f.banner.showData)&&P(y)}),[null===d||void 0===d?void 0:d.isReady,y.id]),h&&"grid"!=h?((0,a.useEffect)((function(){""!=b&&l((0,c.PV)({message:b}))}),[b]),(0,p.jsx)(m,{config:e.config,render:h,state:O,loading:!(null!==d&&void 0!==d&&d.isReady)||!O||"detail"===h&&null==O.data||"list"==h&&0===(null===(r=O.data)||void 0===r?void 0:r.length)||O.loading||(null===(u=O)||void 0===u?void 0:u.error),setErrorMessage:j,fetch:P,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:y})):(0,p.jsx)(s.C,{from:f.page.title,data:"render property wasn't set"})}function m(e){(0,i.I0)();var t,n,r=e.config,a=e.item,o=e.mainCol,c=e.state,l=e.render,d=e.params,f=e.fetch,v=e.setErrorMessage,m=e.loading,O=r.page.title;if(!m&&c){var h;if("detail"===l&&null===c.data&&(v("this is a demo version, this record was filtered out to reduce the database size"),m=!0),"list"===l)0===(null===(h=c.data)||void 0===h?void 0:h.length)&&(v("data not found"),m=!0);c.error&&(v(c.error.message),m=!0)}var y=(0,p.jsx)(b,g({},e));return(0,p.jsxs)(p.Fragment,{children:[c&&c.error&&(0,p.jsx)(s.C,{from:O,data:c.error.message}),"banner"===l&&y,"list"===l&&(0,p.jsx)(u.Z,g(g({},e),{},{id:r.automata.name,banner:y,mainCol:m&&e.skeleton?e.skeleton:(0,p.jsx)(j,g({},e))})),"page"===l&&(0,p.jsx)(u.Z,g(g({},e),{},{id:r.automata.name,banner:y,mainCol:o?(0,p.jsx)(p.Fragment,{children:m&&e.skeleton?e.skeleton:o({data:null!==(t=null===c||void 0===c?void 0:c.data)&&void 0!==t?t:null,loading:m,params:d,fetch:f,item:a})}):(0,p.jsx)(s.C,{from:O,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===l&&(0,p.jsx)(u.Z,g(g({},e),{},{id:r.automata.name,mainCol:o?(0,p.jsx)(p.Fragment,{children:m&&e.skeleton?e.skeleton:o({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:m})}):(0,p.jsx)(s.C,{from:O,data:"main component missing, not found in mainCol or detail prop"})}))]})}function b(e){var t,n,r,a,o,i,c,s,u=e.config,l=e.state,f=null!==(t=null===(n=u.banner)||void 0===n?void 0:n.showData)&&void 0!==t&&t,g=e.customTitle?e.customTitle:null!==(r=null===(a=u.page)||void 0===a?void 0:a.title)&&void 0!==r?r:"NO TITLE",v=e.customDescription?e.customDescription:null!==(o=null===(i=u.page)||void 0===i?void 0:i.description)&&void 0!==o?o:"NO DESCRIPTION",m=null===(c=u.page)||void 0===c?void 0:c.url;return(0,p.jsx)(d.Z,{showData:f,loading:e.loading,title:g,description:v,data:null===l||void 0===l?void 0:l.data,item:e.item,actions:[{url:m(null!==(s=null===l||void 0===l?void 0:l.params)&&void 0!==s?s:{}),title:"See all"}],hero:"banner"!==e.render})}function j(e){var t,n,r=e.loading,a=e.state,o=e.fetch,i=e.item;return(0,p.jsx)(l.Z,{loading:r,page:null!==(t=null===a||void 0===a?void 0:a.params.page)&&void 0!==t?t:null,data:null!==(n=null===a||void 0===a?void 0:a.data)&&void 0!==n?n:null,onPageChange:function(e){o(g(g({},a.params),{},{page:e}))},item:i})}},48804:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});n(67294);var r,a,o=n(11163),i=n(4942),c=n(55619),s={automata:{name:"page_movies_festivals"},page:{title:"Movie Festivals",description:"",url:function(){return"/movies/festivals"}},banner:{showData:!0}},u=n(15861),l=n(87757),d=n.n(l),p=n(24268),f=n(16161),g=n(30168),v=n(54397),m=n(74273),b=n(68363);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h,y=(0,v.Ps)(r||(r=(0,g.Z)(["\n  ","\n  query GetData($page: Int)\n  {\n    movieFestivals(page: $page) {\n      ...FestivalFragment\n    }\n  }\n"])),b.O);(0,v.Ps)(a||(a=(0,g.Z)(["\n  query GetData\n  {\n    dashboardFestivals {\n      total\n      startYear\n      startDecade\n      countries\n      continent\n      withAwards\n      awardYear\n      awardedByYear\n    }\n  }\n"])));function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=s.automata.name,Z=(0,p.hg)("".concat(x,"/fetchData"),function(){var e=(0,u.Z)(d().mark((function e(t,n){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(E(t)),e.next=3,a=t.page,(0,m.h)(y,{page:a},(function(e){return O(O({},e),{},{data:e.data.movieFestivals})}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}var a}),e)})));return function(t,n){return e.apply(this,arguments)}}()),D=(0,p.oM)({name:x,initialState:{params:{renderer:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=w(w({},e.params),t.payload),"banner"!=e.params.renderer&&1!=e.params.page&&o.default.push("".concat(s.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(h={},(0,i.Z)(h,Z.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(h,Z.fulfilled,(function(e,t){var n=t.payload,r=n.loading,a=n.error,o=n.data;e.data=o,e.loading=r,e.error=a})),(0,i.Z)(h,Z.rejected,(function(e,t){var n=t.error;e.data=[],e.loading=!1,e.error=n})),h)});f.h.reducerManager.add(x,D.reducer);D.reducer;var E=D.actions.setParams,k=n(43332),C=n(42341),S=n(85893);function F(e){var t=e.id,n=e.name,r=(e.box,e.image);return(0,S.jsx)(C.Z,{box:!0,id:t,entity:n,children:(0,S.jsx)(k.Z,{title:n,image:null===r||void 0===r?void 0:r.poster})})}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){return(0,S.jsx)(c.Z,{params:e,config:s,fetch:function(e){return Z(A({},e))},item:function(e){return(0,S.jsx)(F,A({full:!0},e))},customUrl:function(e){return s.page.url(e.entity)}})}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){return(0,S.jsx)(R,I(I({},e),{},{render:"list"}))},M=function(e){var t=(0,o.useRouter)(),n=(t.query?t.query:{}).page;return n=n?parseInt(n):1,(0,S.jsx)(N,{breadcrumbs:"/movies/stories/awards",page:n})}},9849:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/festivals",function(){return n(48804)}])},87863:function(){}},function(e){e.O(0,[6499,5685,3128,4197,9774,2888,179],(function(){return t=9849,e(e.s=t);var t}));var t=e.O();_N_E=t}]);