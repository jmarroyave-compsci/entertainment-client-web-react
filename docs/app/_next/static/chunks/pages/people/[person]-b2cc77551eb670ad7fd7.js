(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4054],{20780:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});r(67294);var n=r(43332),a=r(49896),i=r(59231),o=r(39698),c=r(82356),s=r(85893);function u(e){var t=e.tiny,r=e.format;switch(r=t?"tiny":r){case"list":return function(e){var t=e.id,r=e.title,n=e.releaseYear,i=e.as;return(0,s.jsx)(o.xs,{width:"220px",height:"125px",children:(0,s.jsxs)(a.Z,{id:t,children:[(0,s.jsx)(o.x4,{children:null!==n&&void 0!==n?n:"?"}),(0,s.jsx)(o.Dx,{children:null!==r&&void 0!==r?r:"?"}),i&&(0,s.jsx)("div",{children:(0,s.jsxs)(o.x4,{children:["as ",i.replace(/[\[\]\'\"]/g,"")]})})]})},t)}(e);case"tiny":return function(e){var t,r;return(0,s.jsx)(a.Z,{id:e.id,children:(0,s.jsx)(c.Z,{title:null!==(t=null===e||void 0===e?void 0:e.releaseYear)&&void 0!==t?t:"?",value:null!==(r=null===e||void 0===e?void 0:e.title)&&void 0!==r?r:"?"})})}(e);case"card":default:return function(e){var t=e.full,r=e.releaseYear,o=e.all,c=e.id,u=e.title,l=e.awards,d=e.image;return(0,s.jsx)(a.Z,{box:!0,id:c,children:(0,s.jsx)(n.Z,{image:d?d.poster:d,text:l?(0,s.jsx)(i.Z,{mini:!t,data:l,year:year,all:o}):null,title:u,subtitle:r})})}(e)}}},49896:function(e,t,r){"use strict";r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),i=e.box;return t?(0,a.jsx)(n.Z,{box:i,border:!1,to:"/movies/".concat(t),children:r}):r}},2295:function(e,t,r){"use strict";var n=r(4942),a=(r(67294),r(50367)),i=r(58862),o=r(34769),c=r(20780),s=r(85893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.data,r=(e.loading,e.type),n=e.filter;if(!t||0==t.length)return(0,s.jsx)("div",{});var u=e.tiny?t.slice(0,3):t;u=n?u.filter(n):u;var d=(0,s.jsxs)(i.DK,{children:[r,(0,s.jsxs)(i.x4,{children:[" [",u.length,"]"]})]});return(0,s.jsxs)(a.RQ,{children:[!e.tiny&&d,e.tiny&&u.map((function(e,t){return(0,s.jsx)("div",{children:(0,s.jsx)(c.Z,l({format:"tiny"},e.id))},t)})),!e.tiny&&(0,s.jsx)(o.Z,{data:u,item:function(e){return(0,s.jsx)(c.Z,l(l({format:"list"},e),e.id))}}),e.tiny&&t.length>u.length&&(0,s.jsxs)(i.x4,{children:["and ",t.length-u.length," more"]})]})}},14023:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return G}});r(67294);var n=r(11163),a=r(4942),i=r(55619),o={automata:{name:"page_person"},page:{url:function(e){var t=e.id;return"/people/".concat(t)}}},c=(r(70357),r(52651),r(23275),r(28388)),s=r(59231),u=(r(27159),r(48724)),l=r(12868),d=r(14308),p=r(29602),f=r(85893);(0,p.ZP)("h1")({margin:0});function j(e){var t=e.data;return t?(0,f.jsx)(d.Z,{direction:"row",children:t.map((function(e,t){return(0,f.jsx)(u.Z,{text:e},t)}))}):(0,f.jsx)("div",{})}var h=r(59067),x=r(2295),b=r(50367),v=r(58862),y=r(82356);var O=function(e){var t=e.data;return e.loading,t=t||{},(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(l.Z,{src:t.image?t.image.poster:null}),(0,f.jsx)(j,{data:t.profession}),(0,f.jsx)(h.Z,{text:t.name}),(0,f.jsxs)(b.RQ,{children:[(0,f.jsx)(v.DK,{children:"General information"}),(0,f.jsx)(y.Z,{title:"Birth",data:t.birthYear}),(0,f.jsx)(y.Z,{title:"Death",data:t.deathYear})]}),(0,f.jsx)(c.Z,{data:t}),(0,f.jsx)(s.Z,{data:t?t.awards:null}),(0,f.jsx)(x.Z,{type:"acted",data:t.acted}),(0,f.jsx)(x.Z,{type:"directed",data:t.directed}),(0,f.jsx)(x.Z,{type:"produced",data:t.produced}),(0,f.jsx)(x.Z,{type:"wrote",data:t.wrote})]})},g=r(28973);function m(e){return(0,f.jsx)(b.X,{children:(0,f.jsxs)(d.Z,{spacing:1,children:[(0,f.jsx)(g.Z,{variant:"rectangular",height:300}),(0,f.jsx)(g.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,f.jsx)(g.Z,{variant:"text",style:{width:"40%"}}),(0,f.jsx)(g.Z,{variant:"text",style:{width:"25%"}}),(0,f.jsx)(g.Z,{variant:"text",style:{width:"25%"}}),(0,f.jsx)(g.Z,{variant:"text",style:{width:"25%"}})]})})}var w,Z=r(15861),P=r(87757),D=r.n(P),E=r(24268),_=r(16161),k=r(75679);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=o.automata.name,R=(0,E.hg)("".concat(N,"/fetchData"),function(){var e=(0,Z.Z)(D().mark((function e(t,r){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(B(t)),e.next=3,k.iY({id:t.id});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),X=(0,E.oM)({name:N,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=Y(Y({},e.params),t.payload),"banner"!=e.params.renderer&&1!=e.params.page&&n.default.push("".concat(o.page.url(e.params)),null,{shallow:!0})}},extraReducers:(w={},(0,a.Z)(w,R.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(w,R.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,i=r.data;e.data=i,e.loading=n,e.error=a})),(0,a.Z)(w,R.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),w)});_.h.reducerManager.add(N,X.reducer);X.reducer;var B=X.actions.setParams;function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e){return(0,f.jsx)(i.Z,{params:K(K({},e),{},{breadcrumbs:function(t){var r,n;return"".concat(e.breadcrumbs,"/").concat(null!==(r=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.name)&&void 0!==r?r:"loading")}}),config:o,fetch:function(e){return R(K({},e))},detail:function(e){return(0,f.jsx)(O,{data:e.data})},skeleton:(0,f.jsx)(m,{})})}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){return(0,f.jsx)(M,T(T({},e),{},{render:"detail"}))},G=function(e){var t,r,a=(0,n.useRouter)(),i=e.id?e.id:null!==(t=null===(r=a.query)||void 0===r?void 0:r.person)&&void 0!==t?t:"";return(0,f.jsx)(q,{breadcrumbs:"/people",id:i})}},54317:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/[person]",function(){return r(14023)}])}},function(e){e.O(0,[6499,5685,3128,5218,4471,1216,4197,7338,7792,5863,9774,2888,179],(function(){return t=54317,e(e.s=t);var t}));var t=e.O();_N_E=t}]);