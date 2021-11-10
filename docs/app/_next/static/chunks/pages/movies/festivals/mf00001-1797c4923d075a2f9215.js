(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1317],{60111:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return K}});r(67294);var n=r(11163),a=r(4942),i=r(55619),o={automata:{name:"page_movie_festival"},page:{url:function(e){var t=e.id;return"/movies/festivals/".concat(t)}}},c=r(28388),s=r(59067),u=r(12868),l=r(14308),f=r(50367),d=r(58862),p=r(82356),O=r(85893);function b(e){var t=e.data;return(0,O.jsx)(f.RQ,{children:(0,O.jsxs)(l.Z,{children:[(0,O.jsx)(u.Z,{src:t.image?t.image.poster:null}),(0,O.jsx)(s.Z,{text:t.name}),(0,O.jsxs)(f.RQ,{children:[(0,O.jsx)(d.DK,{children:"general information"}),(0,O.jsx)(p.Z,{title:"established",data:t.established}),(0,O.jsx)(p.Z,{title:"country",data:t.country}),(0,O.jsx)(p.Z,{title:"continent",data:t.continent})]}),(0,O.jsx)(c.Z,{data:t})]})})}var j=r(28973);function v(e){return(0,O.jsx)(f.X,{children:(0,O.jsxs)(l.Z,{spacing:1,sx:{display:"flex",flexGrow:1},children:[(0,O.jsx)(j.Z,{variant:"rectangular",height:300}),(0,O.jsx)(j.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,O.jsx)(j.Z,{variant:"text",style:{width:"40%"}}),(0,O.jsx)(j.Z,{variant:"text",style:{width:"25%"}}),(0,O.jsx)(j.Z,{variant:"text",style:{width:"25%"}}),(0,O.jsx)(j.Z,{variant:"text",style:{width:"25%"}})]})})}var y,g=r(15861),m=r(87757),h=r.n(m),w=r(24268),P=r(16161),x=r(30168),Z=r(54397),D=r(74273);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k,S=(0,Z.Ps)(y||(y=(0,x.Z)(["\n  query GetData($id: String!)\n  {\n    movieFestival(id: $id) {\n      id\n      name\n      wikiTopic\n      established\n      country\n      continent\n    }\n  }\n"])));function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=o.automata.name,X=(0,w.hg)("".concat(T,"/fetchData"),function(){var e=(0,g.Z)(h().mark((function e(t,r){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(C(t)),e.next=3,n=t.id,(0,D.h)(S,{id:n},(function(e){return E(E({},e),{},{data:e.data.movieFestival})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(t,r){return e.apply(this,arguments)}}()),q=(0,w.oM)({name:T,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=R(R({},e.params),t.payload),"banner"!=e.params.renderer&&1!=e.params.page&&n.default.push("".concat(o.page.url(e.params)),null,{shallow:!0})}},extraReducers:(k={},(0,a.Z)(k,X.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(k,X.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,i=r.data;e.data=i,e.loading=n,e.error=a})),(0,a.Z)(k,X.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),k)});P.h.reducerManager.add(T,q.reducer);q.reducer;var C=q.actions.setParams;function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e){return(0,O.jsx)(i.Z,{params:G(G({},e),{},{breadcrumbs:function(t){var r,n;return"".concat(e.breadcrumbs,"/").concat(null!==(r=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.name)&&void 0!==r?r:"loading")}}),config:o,fetch:function(e){return X(G({},e))},detail:function(e){return(0,O.jsx)(b,{data:e.data})},skeleton:(0,O.jsx)(v,{})})}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=function(e){return(0,O.jsx)(M,$($({},e),{},{render:"detail"}))},K=function(e){var t,r,a=(0,n.useRouter)(),i=e.id?e.id:null!==(t=null===(r=a.query)||void 0===r?void 0:r.festival)&&void 0!==t?t:"";return(0,O.jsx)(B,{breadcrumbs:"/movies/festivals",id:i})}},57530:function(e,t,r){"use strict";r.r(t);var n=r(60111),a=r(85893);t.default=function(e){return(0,a.jsx)(n.default,{id:"mf00001"})}},10187:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/festivals/mf00001",function(){return r(57530)}])}},function(e){e.O(0,[6499,5685,5218,1216,4010,9531,9774,2888,179],(function(){return t=10187,e(e.s=t);var t}));var t=e.O();_N_E=t}]);