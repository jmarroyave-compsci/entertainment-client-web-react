(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4703],{40418:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n,a=r(67294),i=r(93942),o=r(73981),c=r(11163),u=r(4942),s=r(97937),l=r(55619),f={automata:{name:"stories_directors"},page:{title:"Directors",description:"",url:function(e){return"/".concat(e,"/stories/directors")}},banner:{showData:!1}},d=r(15861),p=r(87757),g=r.n(p),v=r(24268),h=r(16161),m=r(30168),y=r(54397),j=r(8300);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z,x=(0,y.Ps)(n||(n=(0,m.Z)(["\n  query GetData($page: Int)\n  {\n    storiesPeopleDirectors(page: $page){\n      id\n      name\n      directed {\n        id\n        title\n        releasedDate\n      }      \n    }\n  }\n"]))),P=f.automata.name,w=(0,v.hg)("".concat(P,"/fetchData"),function(){var e=(0,d.Z)(g().mark((function e(t,r){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(E(t)),e.next=3,n=t.page,(0,j.h)(x,{page:n},(function(e){return O(O({},e),{},{data:e.data.storiesPeopleDirectors})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(t,r){return e.apply(this,arguments)}}()),D=(0,v.oM)({name:P,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=t.payload,"banner"!==e.params.renderer&&c.default.push("".concat(f.page.url(e.params.entity),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(Z={},(0,u.Z)(Z,w.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,u.Z)(Z,w.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,i=r.data;e.data=i,e.loading=n,e.error=a})),Z)});h.h.reducerManager.add(P,D.reducer);D.reducer;var E=D.actions.setParams,R=r(25662),Y=r(2295),k=r(85893);function _(e){var t=e.id,r=e.name;e.directed;return(0,k.jsx)(R.Z,{id:t,name:r,text:(0,k.jsx)(Y.Z,{data:e.directed})})}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=(0,i.I0)(),r=(0,i.v9)((function(e){return e[f.automata.name]}));return r?(0,k.jsx)(s.Z,{xs:(0,k.jsx)(l.Z,{config:f,type:r.params.renderer,url:f.page.url(r.params.entity),data:r.data,loading:r.loading,onPageChange:function(e){return t(w(N(N({},r.params),{},{page:e})))},item:function(e){return(0,k.jsx)(_,N({full:!0},e))},params:N({},r.params)})}):(0,k.jsx)("div",{})}var I=function(e){var t=(0,i.I0)(),r=(0,c.useRouter)();return(0,a.useEffect)((function(){if(r.isReady){var e=r&&r.query?r.query:[],n=(e.year,e.page);n=n?parseInt(n):1,t((0,o.Y)({breadcrumbs:[{name:"movies",url:"/movies"},{name:"stories",url:"/movies/stories"},{name:"directors"}]})),t(w({renderer:"grid",entity:"movies",page:n}))}}),[]),(0,k.jsx)(S,{})}},49896:function(e,t,r){"use strict";r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children);return(0,a.jsx)(n.Z,{border:!1,to:"/movies/".concat(t),children:r})}},25662:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});r(67294);var n=r(42199),a=r(55476),i=r(85893);function o(e){var t=e.id,r=e.name,o=e.text;return(0,i.jsx)(n.Z,{title:r,text:o,actions:[(0,i.jsx)(a.Z,{id:t,children:"Go"})]})}},55476:function(e,t,r){"use strict";r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children);return(0,a.jsx)(n.Z,{border:!1,to:"/people/".concat(t),children:r})}},2295:function(e,t,r){"use strict";r(67294);var n=r(74035),a=r(58862),i=r(49896),o=r(52651),c=r(23275),u=r(27159),s=r(85893);t.Z=function(e){var t=e.data,r=(e.loading,e.type);if(!t||0==t.length)return(0,s.jsx)("div",{});var l=(0,s.jsxs)(a.DK,{children:[r,(0,s.jsxs)(a.x4,{children:[" [",t.length,"]"]})]});return(0,s.jsxs)(n.RQ,{children:[t&&t.length>0&&l,(0,s.jsx)(o.Z,{children:t&&t.length>0&&t.map((function(e,t){return(0,s.jsx)(c.Z,{xs:12,sm:12,md:6,lg:4,children:(0,s.jsx)("div",{children:(0,s.jsx)(i.Z,{id:e.id,children:(0,s.jsxs)("div",{children:[e.title," ",(0,s.jsxs)(a.x4,{children:["(",(0,s.jsx)(u.Z,{value:e.releasedDate,format:"YYYY"}),")"]})]})})})},t)}))})]})}},42199:function(e,t,r){"use strict";var n=r(15671),a=r(43144),i=r(60136),o=r(82963),c=r(61120),u=r(67294),s=r(65295),l=r(18515),f=r(42643),d=r(54962),p=r(49161),g=r(2658),v=r(85893);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var m=function(e){(0,i.Z)(r,e);var t=h(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.subtitle,n=e.text,a=e.image,i=e.imageHeight,o=e.noImage,c=e.actions,u=0;r=r||"";return o=!!o,a=a||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",(0,v.jsxs)(s.Z,{children:[(0,v.jsx)(l.Z,{title:(0,v.jsx)(g.Z,{noWrap:!0,children:t}),subheader:r}),!o&&(0,v.jsx)(d.Z,{style:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"},height:i||null,image:a}),n&&(0,v.jsx)(f.Z,{children:(0,v.jsx)(g.Z,{variant:"body2",color:"text.secondary",component:"div",children:n})}),(0,v.jsx)(p.Z,{children:c&&c.map((function(e){return(0,v.jsx)("div",{children:e},u++)}))})]})}}]),r}(u.Component);t.Z=m},27159:function(e,t,r){"use strict";var n=r(15671),a=r(43144),i=r(60136),o=r(82963),c=r(61120),u=r(67294),s=r(53651),l=r(65710),f=r(85893);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var p=function(e){(0,i.Z)(r,e);var t=d(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"getDate",value:function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(r){return null}}},{key:"toString",value:function(e,t,r){switch(r){case"ago":return(0,s.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yyyy");case"YYYY":return t.getFullYear();default:return(0,l.Z)(t,r)}}},{key:"render",value:function(){var e=this.props,t=e.lang,r=e.value,n=e.className,a=e.format;t=t||"en",a=a||"ago";var i=this.getDate(r);if(null==i)return(0,f.jsx)("span",{});var o=this.toString(t,i,a);return(0,f.jsx)("span",{className:n,children:o})}}]),r}(u.Component);t.Z=p},55619:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(4942),a=r(67294),i=(r(97937),r(11613)),o=r(50789),c=r(6960),u=(r(30842),r(93942)),s=r(73981),l=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){var t,r,n,f,p,g,v=(0,u.I0)(),h=e.config,m=e.loading,y=e.data,j=e.item,b=e.type,O=null!==(t=null===h||void 0===h||null===(r=h.banner)||void 0===r?void 0:r.showData)&&void 0!==t&&t,Z=null!==(n=null===h||void 0===h||null===(f=h.page)||void 0===f?void 0:f.title)&&void 0!==n?n:"NO TITLE",x=null!==(p=null===h||void 0===h||null===(g=h.page)||void 0===g?void 0:g.description)&&void 0!==p?p:"NO DESCRIPTION",P=e.url?e.url:h.page.url;(0,a.useEffect)((function(){e.breadcrumbs&&v((0,s.Y)({breadcrumbs:e.breadcrumbs}))}),[]);var w=(0,l.jsx)(c.Z,{showData:O,loading:m,title:Z,description:x,data:y,item:j,actions:[{url:P,title:"See all"}],hero:"banner"!==b});return(0,l.jsxs)(l.Fragment,{children:["banner"===b&&w,("grid"===b||"page"===b)&&(0,l.jsx)(i.Z,d(d({},e),{},{banner:w,mainCol:e.mainCol?e.mainCol(e):(0,l.jsx)(o.Z,{loading:m,page:e.params.page,data:y,onPageChange:e.onPageChange,item:j})}))]})}},10121:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/directors",function(){return r(40418)}])}},function(e){e.O(0,[6499,5685,5218,519,3707,9774,2888,179],(function(){return t=10121,e(e.s=t);var t}));var t=e.O();_N_E=t}]);