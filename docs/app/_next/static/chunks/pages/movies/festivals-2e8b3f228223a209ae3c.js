(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4537],{42341:function(e,r,t){"use strict";t(67294);var n=t(89260),a=t(85893);r.Z=function(e){var r=e.id,t=e.children,o=e.box;return(0,a.jsx)(n.Z,{box:o,to:"/movies/festivals/".concat(r),children:t})}},43332:function(e,r,t){"use strict";t(67294);var n=t(65295),a=t(18515),o=t(42643),i=t(54962),c=t(49161),s=t(2658),u=t(360),l=t(22854),p=t(47386),d=t(27054),f=t(85893),b=(0,d.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),g="".concat(l.Z.APP.BASE_PATH).concat(l.Z.DEFAULTS.IMAGE_PLACEHOLDER),v=function(e){return e.target.src=g};r.Z=function(e){var r,t=b(),d=e.title,g=e.subtitle,O=e.text,h=e.image,j=e.imageHeight,m=void 0===j?180:j,y=e.noImage,P=e.actions,w=0;g=g||"";return y=!!y,h=h||l.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,f.jsxs)(n.Z,{style:{flexGrow:1,width:"100%"},children:[(0,f.jsx)(a.Z,{sx:{width:"100%"},classes:{content:t.headerContent,root:t.headerRoot},title:(0,f.jsx)(p.ZP,{title:d,placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",maxWidth:"100%"},children:(0,f.jsx)(s.Z,{noWrap:!0,variant:"subtitle",children:d})})}),subheader:g}),!y&&(0,f.jsx)(i.Z,{height:m||null,image:null!==(r=h)&&void 0!==r&&r.startsWith("/")?"".concat(l.Z.APP.BASE_PATH).concat(h):h,component:"img",onError:v}),O&&(0,f.jsx)(o.Z,{children:(0,u.HD)(O)?(0,f.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:O}):O}),P&&P.length>0&&(0,f.jsx)(c.Z,{children:P.map((function(e){return(0,f.jsx)("div",{children:e},w++)}))})]})}},84954:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return R}});var n,a=t(67294),o=t(11163),i=t(4942),c=t(97937),s=t(55619),u=t(93942),l={automata:{name:"stories_movies_festivals"},page:{title:"Movie Festivals",description:"",url:function(){return"/movies/festivals"}},banner:{showData:!0}},p=t(15861),d=t(87757),f=t.n(d),b=t(24268),g=t(16161),v=t(30168),O=t(54397),h=t(8300);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y,P=(0,O.Ps)(n||(n=(0,v.Z)(["\n  query GetData($page: Int)\n  {\n    movieFestivals(page: $page) {\n      id\n      name\n      wikiTopic\n      established\n      country\n      continent\n    }\n  }\n"]))),w=l.automata.name,x=(0,b.hg)("".concat(w,"/fetchData"),function(){var e=(0,p.Z)(f().mark((function e(r,t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(E(r)),e.next=3,a=r.page,(0,h.h)(P,{page:a},(function(e){return m(m({},e),{},{data:e.data.movieFestivals})}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}var a}),e)})));return function(r,t){return e.apply(this,arguments)}}()),Z=(0,b.oM)({name:w,initialState:{params:{renderer:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=r.payload,"banner"!==e.params.renderer&&e.params.page>1&&o.default.push("".concat(l.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(y={},(0,i.Z)(y,x.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(y,x.fulfilled,(function(e,r){var t=r.payload,n=t.loading,a=t.error,o=t.data;e.data=o,e.loading=n,e.error=a})),(0,i.Z)(y,x.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),y)});g.h.reducerManager.add(w,Z.reducer);Z.reducer;var E=Z.actions.setParams,D=t(43332),_=t(42341),A=t(85893);function S(e){var r=e.id,t=e.name;e.box;return(0,A.jsx)(_.Z,{box:!0,id:r,entity:t,children:(0,A.jsx)(D.Z,{title:t})})}function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function T(e){var r=(0,u.I0)(),t=(0,u.v9)((function(e){return e[l.automata.name]}));return(0,a.useEffect)((function(){r(x({renderer:e.render,page:e.page}))}),[]),t?(0,A.jsx)(c.Z,{xs:(0,A.jsx)(s.Z,{config:l,type:t.params.renderer,url:l.page.url(t.params.entity),data:t.data,loading:t.loading,error:t.error,onPageChange:function(e){return r(x(C(C({},t.params),{},{page:e})))},item:function(e){return(0,A.jsx)(S,C({full:!0},e))},params:C({},t.params),breadcrumbs:e.breadcrumbs})}):(0,A.jsx)("div",{})}function H(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?H(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var L=function(e){return(0,A.jsx)(T,I(I({},e),{},{render:"list"}))},R=function(e){var r=(0,o.useRouter)(),t=(r.query?r.query:{}).page;return t=t?parseInt(t):1,(0,A.jsx)(L,{breadcrumbs:"/movies/stories/awards",page:t})}},9849:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/festivals",function(){return t(84954)}])}},function(e){e.O(0,[6499,5685,4193,5619,9774,2888,179],(function(){return r=9849,e(e.s=r);var r}));var r=e.O();_N_E=r}]);