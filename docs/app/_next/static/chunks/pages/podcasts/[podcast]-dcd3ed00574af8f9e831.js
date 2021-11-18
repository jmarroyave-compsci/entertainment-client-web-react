(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583],{82356:function(t,e,r){"use strict";r(67294);var n=r(58862),a=r(27159),c=r(85893);e.Z=function(t){var e=t.data,r=t.value,i=t.title,o=t.format,s=t.sufix;if(!(e=e||r)||null==e||0==e.length||"N/A"==e)return null;switch(r=e,o){case"date":r=(0,c.jsx)(a.Z,{value:e,format:"DD/MM/YYYY"});break;case"year":r=(0,c.jsx)(a.Z,{value:e,format:"YYYY"})}return(0,c.jsxs)("div",{children:[(0,c.jsx)(n.Qy,{children:i}),(0,c.jsxs)(n.GH,{children:[r," ",s]})]})}},29110:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});r(67294);var n=r(50367),a=r(58862),c=r(85893);function i(t){var e=t.title,r=t.text;return r?(0,c.jsxs)(n.RQ,{children:[e&&(0,c.jsx)(a.DK,{children:e}),(0,c.jsx)(a.nv,{children:r})]}):(0,c.jsx)("div",{})}},29899:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return U}});r(67294);var n=r(11163),a=r(4942),c=r(55619),i={automata:{name:"page_podcast"},page:{url:function(t){var e=t.id;return"/podcasts/".concat(e)}}},o=(r(70357),r(52651),r(23275),r(27159),r(48724)),s=r(12868),u=r(59067),l=r(14308),d=r(29602),p=r(85893);(0,d.ZP)("h1")({margin:0});function f(t){var e=t.data;return e?(0,p.jsx)(l.Z,{direction:"row",children:(0,p.jsx)(o.Z,{text:e})}):(0,p.jsx)("div",{})}var j=r(29110),b=r(50367),O=r(58862),g=r(82356),y=r(28388);function v(t){var e=t.data;t.loading;return e=e||{},(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(s.Z,{src:e.image?e.image.poster:null}),(0,p.jsx)(f,{data:e.category}),(0,p.jsx)(u.Z,{text:e.title,subText1:e.subtitle,subText2:e.author,link:e.link}),(0,p.jsx)(j.Z,{text:e.summary}),(0,p.jsxs)(b.RQ,{children:[(0,p.jsx)(O.DK,{children:"general information"}),(0,p.jsx)(g.Z,{title:"Created",data:e.createdDate,format:"date"}),(0,p.jsx)(g.Z,{title:"Language",data:e.language}),(0,p.jsx)(g.Z,{title:"Country",data:e.country})]}),(0,p.jsx)(y.Z,{website:e.link,data:e})]})}var h=r(28973);function x(t){return(0,p.jsx)(b.X,{children:(0,p.jsxs)(l.Z,{spacing:1,children:[(0,p.jsx)(h.Z,{variant:"rectangular",height:300}),(0,p.jsx)(h.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,p.jsx)(h.Z,{variant:"text",style:{width:"40%"}}),(0,p.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,p.jsx)(h.Z,{variant:"text",style:{width:"25%"}}),(0,p.jsx)(h.Z,{variant:"text",style:{width:"25%"}})]})})}var m,w=r(15861),P=r(87757),Z=r.n(P),D=r(24268),k=r(16161),E=r(30168),_=r(54397),S=r(74273);function Y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var C,M=(0,_.Ps)(m||(m=(0,E.Z)(["\nquery getPodcast($id:String!) {\n  podcast(id: $id){\n    id\n    title\n    subtitle\n    feedUrl\n    description\n    summary\n    author\n    link\n    language\n    image{\n      poster\n    }\n    category\n    subcategory\n    createdDate\n  }\n}\n"])));function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Q=i.automata.name,X=(0,D.hg)("".concat(Q,"/fetchData"),function(){var t=(0,w.Z)(Z().mark((function t(e,r){return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(K(e)),t.next=3,n=e.id,(0,S.h)(M,{id:n},(function(t){return N(N({},t),{},{data:t.data.podcast})}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}var n}),t)})));return function(e,r){return t.apply(this,arguments)}}()),q=(0,D.oM)({name:Q,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,e){t.params=T(T({},t.params),e.payload),"banner"!=t.params.renderer&&1!=t.params.page&&n.default.push("".concat(i.page.url(t.params)),null,{shallow:!0})}},extraReducers:(C={},(0,a.Z)(C,X.pending,(function(t,e){t.data=null,t.loading=!0,t.error=""})),(0,a.Z)(C,X.fulfilled,(function(t,e){var r=e.payload,n=r.loading,a=r.error,c=r.data;t.data=c,t.loading=n,t.error=a})),(0,a.Z)(C,X.rejected,(function(t,e){var r=e.error;t.data=[],t.loading=!1,t.error=r})),C)});k.h.reducerManager.add(Q,q.reducer);q.reducer;var K=q.actions.setParams;function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function B(t){return(0,p.jsx)(c.Z,{params:A(A({},t),{},{breadcrumbs:function(e){var r,n;return"".concat(t.breadcrumbs,"/").concat(null!==(r=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.title)&&void 0!==r?r:"loading")}}),config:i,fetch:function(t){return X(A({},t))},detail:function(t){return(0,p.jsx)(v,{data:t.data})},skeleton:(0,p.jsx)(x,{})})}function G(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?G(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var L=function(t){return(0,p.jsx)(B,H(H({},t),{},{render:"detail"}))},U=function(t){var e,r,a=(0,n.useRouter)(),c=t.id?t.id:null!==(e=null===(r=a.query)||void 0===r?void 0:r.podcast)&&void 0!==e?e:"";return(0,p.jsx)(L,{breadcrumbs:"/podcasts",id:c})}},46668:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcasts/[podcast]",function(){return r(29899)}])}},function(t){t.O(0,[6499,5685,5218,1216,4197,4999,5863,9774,2888,179],(function(){return e=46668,t(t.s=e);var e}));var e=t.O();_N_E=e}]);