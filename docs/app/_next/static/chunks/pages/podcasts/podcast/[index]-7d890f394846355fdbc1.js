(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3350],{25553:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return z}});var n=r(67294),a=r(93942),i=r(73981),c=r(11163),s=r(4942),o=(r(97937),r(40777)),u={name:"page_podcast"},d={url:function(t){return"/podcasts/".concat(t)}},l=(r(70357),r(52651),r(23275),r(27159),r(48724)),p=r(12868),f=r(59067),j=r(14308),g=r(29602),x=r(85893);(0,g.ZP)("h1")({margin:0});function h(t){var e=t.data;return e?(0,x.jsx)(j.Z,{direction:"row",children:(0,x.jsx)(l.Z,{text:e})}):(0,x.jsx)("div",{})}var y=r(29110),b=r(74035),v=r(58862),m=r(82356),O=r(28388);function w(t){var e=t.data;t.loading;return e=e||{},(0,x.jsxs)(j.Z,{children:[(0,x.jsx)(p.Z,{src:e.image}),(0,x.jsx)(h,{data:e.category}),(0,x.jsx)(f.Z,{text:e.title,subText1:e.subtitle,subText2:e.author,link:e.link}),(0,x.jsx)(y.Z,{text:e.summary}),(0,x.jsxs)(b.RQ,{children:[(0,x.jsx)(v.DK,{children:"general information"}),(0,x.jsx)(m.Z,{title:"Created",data:e.createdDate,format:"date"}),(0,x.jsx)(m.Z,{title:"Language",data:e.language}),(0,x.jsx)(m.Z,{title:"Country",data:e.country})]}),(0,x.jsx)(O.Z,{website:e.link,data:e})]})}var Z=r(28973);function P(t){return(0,x.jsx)(b.X,{children:(0,x.jsxs)(j.Z,{spacing:1,children:[(0,x.jsx)(Z.Z,{variant:"rectangular",height:300}),(0,x.jsx)(Z.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,x.jsx)(Z.Z,{variant:"text",style:{width:"40%"}}),(0,x.jsx)(Z.Z,{variant:"text",style:{width:"25%"}}),(0,x.jsx)(Z.Z,{variant:"text",style:{width:"25%"}}),(0,x.jsx)(Z.Z,{variant:"text",style:{width:"25%"}})]})})}function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){(0,s.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t){var e=(0,a.v9)((function(t){return t[u.name]}));return e?(0,x.jsx)(o.Z,{data:e.data,loading:e.loading,detail:function(t){return(0,x.jsx)(w,{data:t})},skeleton:(0,x.jsx)(P,{}),params:_({},e.params)}):(0,x.jsx)("div",{})}var E,S=r(15861),N=r(87757),R=r.n(N),C=r(24268),T=r(16161),q=r(30168),X=r(54397),K=r(8300);function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){(0,s.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var $,B=(0,X.Ps)(E||(E=(0,q.Z)(["\nquery getPodcast($id:String!) {\n  podcast(id: $id){\n    id\n    title\n    subtitle\n    feedUrl\n    description\n    summary\n    author\n    link\n    language\n    image\n    category\n    subcategory\n    createdDate\n  }\n}\n"]))),I=u.name,L=(0,C.hg)("".concat(I,"/fetchData"),function(){var t=(0,S.Z)(R().mark((function t(e,r){return R().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(Y(e)),t.next=3,n=e.id,(0,K.h)(B,{id:n},(function(t){return Q(Q({},t),{},{data:t.data.podcast})}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}var n}),t)})));return function(e,r){return t.apply(this,arguments)}}()),U=(0,C.oM)({name:I,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,e){t.params=e.payload,"banner"!==t.params.renderer&&t.params.page>1&&c.default.push("".concat(d.url(),"/?page=").concat(t.params.page),null,{shallow:!0})}},extraReducers:($={},(0,s.Z)($,L.pending,(function(t,e){t.data=null,t.loading=!0,t.error=""})),(0,s.Z)($,L.fulfilled,(function(t,e){var r=e.payload,n=r.loading,a=r.error,i=r.data;t.data=i,t.loading=n,t.error=a})),$)});T.h.reducerManager.add(I,U.reducer);U.reducer;var Y=U.actions.setParams,z=function(t){var e=(0,a.I0)(),r=(0,c.useRouter)();return(0,n.useEffect)((function(){var t=r.query.podcast?r.query.podcast:"",n=t;e((0,i.Y)({breadcrumbs:[{name:"podcasts",url:"/podcasts"},{name:n}]})),e(L({id:t}))}),[r.isReady]),(0,x.jsx)(k,{})}},29110:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});r(67294);var n=r(74035),a=r(58862),i=r(85893);function c(t){var e=t.title,r=t.text;return r?(0,i.jsxs)(n.RQ,{children:[e&&(0,i.jsx)(a.DK,{children:e}),(0,i.jsx)(a.nv,{children:r})]}):(0,i.jsx)("div",{})}},7104:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcasts/podcast/[index]",function(){return r(25553)}])}},function(t){t.O(0,[5218,2578,1779,9774,2888,179],(function(){return e=7104,t(t.s=e);var e}));var e=t.O();_N_E=e}]);