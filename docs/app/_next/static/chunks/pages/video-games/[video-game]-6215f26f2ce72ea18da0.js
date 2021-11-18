(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4686],{10616:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});r(67294);var n=r(11163),a=r(4942),i=r(55619),o={automata:{name:"page_video_game"},page:{url:function(e){var t=e.id;return"/video-games/".concat(t)}}},c=(r(70357),r(52651),r(23275),r(28388)),s=r(84307),u=r(64129),l=r(97060),d=(r(59231),r(59067)),p=r(97820),f=(r(27159),r(48724)),j=r(12868),g=(r(74288),r(14308)),O=r(29110),b=r(50367),y=r(58862),v=r(82356),m=r(85893);function x(e){var t=e.data;e.loading;return t=t||{},(0,m.jsxs)(g.Z,{children:[(0,m.jsx)(j.Z,{src:t.image?t.image.poster:null}),(0,m.jsxs)(g.Z,{direction:"row",children:[(0,m.jsx)(f.Z,{color:"primary",text:t.type}),(0,m.jsx)(p.Z,{data:t.genre})]}),(0,m.jsx)(d.Z,{text:t.title}),(0,m.jsxs)(b.RQ,{children:[(0,m.jsx)(y.DK,{children:"general information"}),(0,m.jsx)(v.Z,{title:"Released",data:t.releaseYear}),(0,m.jsx)(v.Z,{title:"Duration",data:t.duration,sufix:"mins"}),(0,m.jsx)(v.Z,{title:"Classification",data:t.classification}),(0,m.jsx)(v.Z,{title:"Language",data:t.language}),(0,m.jsx)(v.Z,{title:"Country",data:t.country}),(0,m.jsx)(v.Z,{title:"Production",data:t.production})]}),(0,m.jsx)(c.Z,{data:t}),(0,m.jsx)(u.Z,{data:t.rating}),(0,m.jsx)(O.Z,{title:"plot",text:t.plot?t.plot:t.description}),(0,m.jsx)(l.Z,{type:"directors",data:t.directors,story:"/movies/stories/directors"}),(0,m.jsx)(l.Z,{type:"writers",data:t.writers,story:"/movies/stories/writers"}),(0,m.jsx)(l.Z,{type:"crew",data:t.cast}),(0,m.jsx)(s.Z,{data:t.streamBy})]})}var h=r(28973);function w(e){return(0,m.jsx)(b.X,{children:(0,m.jsxs)(g.Z,{spacing:1,children:[(0,m.jsx)(h.Z,{variant:"rectangular",height:300}),(0,m.jsx)(h.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,m.jsx)(h.Z,{variant:"text",style:{width:"40%"}}),(0,m.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,m.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,m.jsx)(h.Z,{variant:"text",style:{width:"25%"}})]})})}var P,Z=r(15861),D=r(87757),_=r.n(D),E=r(24268),k=r(16161),S=r(30168),N=r(54397),R=r(74273);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X,q=(0,N.Ps)(P||(P=(0,S.Z)(["\n  query GetData($id: String!)\n  {\n    videoGame(id: $id) {\n    id\n    title\n    country\n    type\n    genres\n    duration\n    ratings {\n      averageRating\n      name\n    }\n    releaseYear\n    classification\n    references {\n      imdb\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    }\n  }\n"])));function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=o.automata.name,Y=(0,E.hg)("stories/fetchData",function(){var e=(0,Z.Z)(_().mark((function e(t,r){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(K(t)),e.next=3,n=t.id,(0,R.h)(q,{id:n},(function(e){return G(G({},e),{},{data:e.data.videoGame})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(t,r){return e.apply(this,arguments)}}()),$=(0,E.oM)({name:T,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=M(M({},e.params),t.payload),"banner"!=e.params.renderer&&1!=e.params.page&&n.default.push("".concat(o.page.url(e.params)),null,{shallow:!0})}},extraReducers:(X={},(0,a.Z)(X,Y.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(X,Y.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,i=r.data;e.data=i,e.loading=n,e.error=a})),(0,a.Z)(X,Y.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),X)});k.h.reducerManager.add(T,$.reducer);$.reducer;var K=$.actions.setParams;function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e){return(0,m.jsx)(i.Z,{params:Q(Q({},e),{},{breadcrumbs:function(t){var r,n;return"".concat(e.breadcrumbs,"/").concat(null!==(r=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.title)&&void 0!==r?r:"loading")}}),config:o,fetch:function(e){return Y(Q({},e))},detail:function(e){return(0,m.jsx)(x,{data:e.data})},skeleton:(0,m.jsx)(w,{})})}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=function(e){return(0,m.jsx)(z,F(F({},e),{},{render:"detail"}))},I=function(e){var t,r,a=(0,n.useRouter)(),i=e.id?e.id:null!==(t=null===(r=a.query)||void 0===r?void 0:r["video-game"])&&void 0!==t?t:"";return(0,m.jsx)(H,{breadcrumbs:"/video-games",id:i})}},13636:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/video-games/[video-game]",function(){return r(10616)}])}},function(e){e.O(0,[6499,5685,5218,3128,4471,1216,4197,4999,5863,9125,9774,2888,179],(function(){return t=13636,e(e.s=t);var t}));var t=e.O();_N_E=t}]);