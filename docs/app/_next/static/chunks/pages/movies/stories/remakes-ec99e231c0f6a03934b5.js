(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8326],{41821:function(e,r,t){"use strict";t.d(r,{Z:function(){return q}});var n,a=t(4942),o=(t(67294),t(55619)),c={automata:{name:"stories_remakes"},page:{title:"Remakes",description:"",url:function(e){var r=e.entity;return"/".concat(r,"/stories/remakes")}},banner:{showData:!0}},i=t(15861),u=t(87757),s=t.n(u),p=t(24268),f=t(16161),l=t(11163),O=t(30168),d=t(54397),b=t(74273);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y,m=(0,d.Ps)(n||(n=(0,O.Z)(["\n  query GetData($page: Int){\n  storiesMoviesRemakes(page: $page){\n    name\n    count\n    recs{\n      id\n      releaseYear\n      type\n      genre\n      directors{\n        id\n        name\n      }\n    }\n  }\n}\n"])));function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var P=c.automata.name,w=(0,p.hg)("".concat(P,"/fetchData"),function(){var e=(0,i.Z)(s().mark((function e(r,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(Z(r)),e.next=3,n=r.page,(0,b.h)(m,{page:n},(function(e){return j(j({},e),{},{data:e.data.storiesMoviesRemakes})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(r,t){return e.apply(this,arguments)}}()),D=(0,p.oM)({name:P,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=h(h({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&l.default.push("".concat(c.page.url(e.params),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(y={},(0,a.Z)(y,w.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(y,w.fulfilled,(function(e,r){var t=r.payload,n=t.loading,a=t.error,o=t.data;e.data=o,e.loading=n,e.error=a})),(0,a.Z)(y,w.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),y)});f.h.reducerManager.add(P,D.reducer);D.reducer;var Z=D.actions.setParams,k=t(43332),x=t(49896),E=(t(59231),t(19888),t(82356)),_=t(85893);function S(e){var r=e.image,t=e.name,n=(e.count,e.recs);return(0,_.jsx)(k.Z,{image:r?r.poster:r,text:(0,_.jsx)("div",{children:n.slice(0,3).map((function(e,r){return(0,_.jsx)(E.Z,{title:e.releaseYear,value:(0,_.jsx)(N,{id:e.id,children:e.directors[0]?e.directors[0].name:"?"},r)},r)}))}),title:t})}function N(e){var r=e.id,t=e.children;return r?(0,_.jsx)(x.Z,{id:r,children:(0,_.jsx)("div",{children:t})}):t}t(45688);function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function M(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function q(e){return(0,_.jsx)(o.Z,{params:e,config:c,fetch:function(e){return w(M({},e))},item:function(e){return(0,_.jsx)(S,M({full:!0},e))}})}},47123:function(e,r,t){"use strict";var n=t(4942),a=(t(67294),t(41821)),o=t(85893);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){return(0,o.jsx)(a.Z,i(i({},e),{},{render:"list"}))}},19888:function(e,r,t){"use strict";t.d(r,{Rx:function(){return c},T5:function(){return i}});var n=t(92077),a=t.n(n),o=t(24417),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return a()(Number(e)).format(r)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.default.toSentenceCase(e)}},40191:function(e,r,t){"use strict";t.r(r);t(67294);var n=t(11163),a=t(47123),o=t(85893);r.default=function(e){var r=(0,n.useRouter)(),t=(r&&r.query?r.query:[]).page;return t=t?parseInt(t):1,(0,o.jsx)(a.Z,{breadcrumbs:"/movies/stories/remakes",entity:"movies",page:t})}},88529:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/remakes",function(){return t(40191)}])}},function(e){e.O(0,[6499,5685,5218,3128,2328,4010,1419,9774,2888,179],(function(){return r=88529,e(e.s=r);var r}));var r=e.O();_N_E=r}]);