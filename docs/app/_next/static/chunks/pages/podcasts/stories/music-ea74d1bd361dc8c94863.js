(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1381],{26673:function(e,r,n){"use strict";n.r(r);var t=n(67294),a=n(93942),i=n(73981),o=n(11163),c=n(63656),s=n(98244),u=n(85893);r.default=function(e){var r=(0,a.I0)(),n=(0,o.useRouter)();return(0,t.useEffect)((function(){var e=(n.query?n.query:{}).page;e=e?parseInt(e):1,r((0,i.Y)({breadcrumbs:[{name:"podcasts",url:"/podcasts"},{name:"stories",url:"/podcasts/stories"},{name:"music"}]})),r((0,s.rQ)({renderer:"grid",page:e}))}),[]),(0,u.jsx)(c.Z,{})}},59231:function(e,r,n){"use strict";n.d(r,{Z:function(){return h}});n(67294);var t=n(29602),a=n(74035),i=n(58862),o=(n(52651),n(23275),n(74288),n(89260)),c=n(85893),s=(0,t.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),u=(0,t.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),l=(0,t.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),d=(0,t.ZP)("div")({margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",lineHeight:"1rem"}),p=(0,t.ZP)("div")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem",fontWeight:400}),f=(0,t.ZP)("div")({fontSize:"0.85rem",lineHeight:"0.95rem"}),g=(0,t.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"}),m=function(e){var r=e.year,n=e.children;return(0,c.jsx)(o.Z,{href:"/movies/stories/awards?year=".concat(r),children:n})};function h(e){var r=e.data;return r&&0!=r.length?!0===e.mini?function(e,r){var n=e.year,t=e.all,a=t?r.length:2;n=parseInt(n);var i=function(e){return!n||e.year==n};return(0,c.jsxs)(s,{children:[r&&r.length>0&&r.slice(0,a).map((function(e,r){return i(e)&&(0,c.jsx)("div",{children:(0,c.jsx)(m,{year:e.year,children:(0,c.jsxs)(u,{children:[e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},r)})),!t&&r&&r.length>a&&(0,c.jsx)(u,{children:(0,c.jsx)(u,{children:(0,c.jsxs)(l,{children:["and ",r.length-a," more"]})})})]})}(e,r):function(e,r){var n=null,t=null,o=(e.year,function(e){return n&&n==e.year?null:(n=e.year,t=null,(0,c.jsx)(d,{children:e.year}))}),s=function(e){return t&&t==e.name?null:(t=e.name,(0,c.jsx)(p,{children:e.name}))};return(0,c.jsxs)(a.RQ,{children:[(0,c.jsx)(i.DK,{children:"awards"}),r&&r.length>0&&r.map((function(e,r){return(0,c.jsxs)("div",{children:[o(e),s(e),(0,c.jsx)(m,{year:e.year,children:(0,c.jsxs)(a.ck,{children:[(0,c.jsx)(g,{children:"false"===e.won||!1===e.won?"nominee":"winner"}),(0,c.jsx)(f,{children:e.category})]})})]},r)}))]})}(e,r):(0,c.jsx)("div",{})}},44898:function(e,r,n){"use strict";n(67294);var t=n(89260),a=n(85893);r.Z=function(e){var r=e.id,n=(e.entity,e.children);return(0,a.jsx)(t.Z,{border:!0,to:"/podcasts/".concat(r),children:n})}},83844:function(e,r){"use strict";r.Z={automata:{name:"stories_podcasts_music"},page:{title:"Music Podcasts",description:"",url:function(){return"/podcasts/stories/music"}},banner:{showData:!0}}},98244:function(e,r,n){"use strict";n.d(r,{rQ:function(){return b}});var t,a=n(4942),i=n(15861),o=n(87757),c=n.n(o),s=n(24268),u=n(16161),l=n(11163),d=n(30168),p=n(54397),f=n(8300);function g(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?g(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var h,v=(0,p.Ps)(t||(t=(0,d.Z)(["\n  query getStory($page: Int)\n{\n  podcastsCategoryMusic(page: $page) {\n    id\n    title\n    link\n    image\n  }\n}\n"]))),y=n(83844),j=y.Z.automata.name,b=(0,s.hg)("".concat(j,"/fetchData"),function(){var e=(0,i.Z)(c().mark((function e(r,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(x(r)),e.next=3,t=r.page,(0,f.h)(v,{page:t},(function(e){return m(m({},e),{},{data:e.data.podcastsCategoryMusic})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var t}),e)})));return function(r,n){return e.apply(this,arguments)}}()),O=(0,s.oM)({name:j,initialState:{params:{renderer:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=r.payload,"banner"!==e.params.renderer&&e.params.page>1&&l.default.push("".concat(y.Z.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(h={},(0,a.Z)(h,b.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(h,b.fulfilled,(function(e,r){var n=r.payload,t=n.loading,a=n.error,i=n.data;e.data=i,e.loading=t,e.error=a})),h)});u.h.reducerManager.add(j,O.reducer);O.reducer;var x=O.actions.setParams},63656:function(e,r,n){"use strict";n.d(r,{Z:function(){return m}});var t=n(4942),a=(n(67294),n(97937)),i=n(55619),o=n(93942),c=n(83844),s=n(98244),u=n(42199),l=n(44898),d=(n(59231),n(85893));function p(e){var r=e.id,n=e.title,t=(e.awards,e.full,e.image),a=e.description;return(0,d.jsx)(u.Z,{image:t,imageHeight:100,text:a,title:n,actions:[(0,d.jsx)(l.Z,{id:r,entity:n,children:"Go"})]})}function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function m(e){var r=(0,o.I0)(),n=(0,o.v9)((function(e){return e[c.Z.automata.name]}));return n?(0,d.jsx)(a.Z,{xs:(0,d.jsx)(i.Z,{config:c.Z,type:n.params.renderer,url:c.Z.page.url(n.params.entity),data:n.data,loading:n.loading,onPageChange:function(e){return r((0,s.rQ)(g(g({},n.params),{},{page:e})))},item:function(e){return(0,d.jsx)(p,g({full:!0},e))},params:g({},n.params)})}):(0,d.jsx)("div",{})}},42199:function(e,r,n){"use strict";var t=n(15671),a=n(43144),i=n(60136),o=n(82963),c=n(61120),s=n(67294),u=n(65295),l=n(18515),d=n(42643),p=n(54962),f=n(49161),g=n(2658),m=n(85893);function h(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,c.Z)(e);if(r){var a=(0,c.Z)(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return(0,o.Z)(this,n)}}var v=function(e){(0,i.Z)(n,e);var r=h(n);function n(){return(0,t.Z)(this,n),r.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.props,r=e.title,n=e.subtitle,t=e.text,a=e.image,i=e.imageHeight,o=e.noImage,c=e.actions,s=0;n=n||"";return o=!!o,a=a||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(l.Z,{title:(0,m.jsx)(g.Z,{noWrap:!0,children:r}),subheader:n}),!o&&(0,m.jsx)(p.Z,{style:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"},height:i||null,image:a}),t&&(0,m.jsx)(d.Z,{children:(0,m.jsx)(g.Z,{variant:"body2",color:"text.secondary",component:"div",children:t})}),(0,m.jsx)(f.Z,{children:c&&c.map((function(e){return(0,m.jsx)("div",{children:e},s++)}))})]})}}]),n}(s.Component);r.Z=v},74288:function(e,r,n){"use strict";n(67294),n(85893)},55619:function(e,r,n){"use strict";n.d(r,{Z:function(){return f}});var t=n(4942),a=n(67294),i=(n(97937),n(11613)),o=n(50789),c=n(6960),s=(n(30842),n(93942)),u=n(73981),l=n(85893);function d(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?d(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function f(e){var r,n,t,d,f,g,m=(0,s.I0)(),h=e.config,v=e.loading,y=e.data,j=e.item,b=e.type,O=null!==(r=null===h||void 0===h||null===(n=h.banner)||void 0===n?void 0:n.showData)&&void 0!==r&&r,x=null!==(t=null===h||void 0===h||null===(d=h.page)||void 0===d?void 0:d.title)&&void 0!==t?t:"NO TITLE",Z=null!==(f=null===h||void 0===h||null===(g=h.page)||void 0===g?void 0:g.description)&&void 0!==f?f:"NO DESCRIPTION",w=e.url?e.url:h.page.url;(0,a.useEffect)((function(){e.breadcrumbs&&m((0,u.Y)({breadcrumbs:e.breadcrumbs}))}),[]);var P=(0,l.jsx)(c.Z,{showData:O,loading:v,title:x,description:Z,data:y,item:j,actions:[{url:w,title:"See all"}],hero:"banner"!==b});return(0,l.jsxs)(l.Fragment,{children:["banner"===b&&P,("grid"===b||"page"===b)&&(0,l.jsx)(i.Z,p(p({},e),{},{banner:P,mainCol:e.mainCol?e.mainCol(e):(0,l.jsx)(o.Z,{loading:v,page:e.params.page,data:y,onPageChange:e.onPageChange,item:j})}))]})}},28454:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcasts/stories/music",function(){return n(26673)}])}},function(e){e.O(0,[6499,5685,519,3707,9774,2888,179],(function(){return r=28454,e(e.s=r);var r}));var r=e.O();_N_E=r}]);