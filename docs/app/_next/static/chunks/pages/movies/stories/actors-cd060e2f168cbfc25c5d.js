(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{73202:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var n,a=r(67294),i=r(93942),o=r(73981),c=r(11163),s=r(4942),u=r(58248),l=r(55619),f={name:"stories_actors"},d={title:"Actors",description:"",url:function(e){return"/".concat(e,"/stories/actors")}},p={showData:!1},h=r(15861),g=r(87757),m=r.n(g),v=r(24268),y=r(16161),j=r(30168),x=r(54397),Z=r(8300);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w,P=(0,x.Ps)(n||(n=(0,j.Z)(["\n  query GetData($page: Int)\n  {\n    storiesPeopleActors(page: $page){\n      id\n      name\n      directed {\n        id\n        title\n        releasedDate\n      }      \n    }\n  }\n"]))),D=f.name,R=(0,v.hg)("".concat(D,"/fetchData"),function(){var e=(0,h.Z)(m().mark((function e(t,r){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(_(t)),e.next=3,n=t.page,(0,Z.h)(P,{page:n},(function(e){return O(O({},e),{},{data:e.data.storiesPeopleActors})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(t,r){return e.apply(this,arguments)}}()),Y=(0,v.oM)({name:D,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=t.payload,"banner"!==e.params.renderer&&c.default.push("".concat(d.url(e.params.entity),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(w={},(0,s.Z)(w,R.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,s.Z)(w,R.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,i=r.data;e.data=i,e.loading=n,e.error=a})),w)});y.h.reducerManager.add(D,Y.reducer);Y.reducer;var _=Y.actions.setParams,k=r(5286),C=r(11951),E=r(85893);function N(e){var t=e.id,r=e.name,n=e.acted;return(0,E.jsx)(k.Z,{id:t,name:r,text:(0,E.jsx)(C.Z,{data:n})})}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e){var t=(0,i.I0)(),r=(0,i.v9)((function(e){return e[f.name]}));return r?(0,E.jsx)(u.Z,{xs:(0,E.jsx)(l.Z,{type:r.params.renderer,title:d.title,description:d.description,url:d.url(r.params.entity),showDataInBanner:p.showData,data:r.data,loading:r.loading,onPageChange:function(e){return t(R(S(S({},r.params),{},{page:e})))},item:function(e){return(0,E.jsx)(N,S({full:!0},e))},params:S({},r.params)})}):(0,E.jsx)("div",{})}var M=function(e){var t=(0,i.I0)(),r=(0,c.useRouter)();return(0,a.useEffect)((function(){if(r.isReady){var e=r&&r.query?r.query:[],n=(e.year,e.page);n=n?parseInt(n):1,t((0,o.Y)({breadcrumbs:[{name:"movies",url:"/movies"},{name:"stories",url:"/movies/stories"},{name:"actors"}]})),t(R({renderer:"grid",entity:"movies",page:n}))}}),[]),(0,E.jsx)(B,{})}},88329:function(e,t,r){"use strict";r(67294);var n=r(59983),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children);return(0,a.jsx)(n.Z,{border:!1,to:"/movies/".concat(t),children:r})}},5286:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});r(67294);var n=r(92498),a=r(43459),i=r(85893);function o(e){var t=e.id,r=e.name,o=e.text;return(0,i.jsx)(n.Z,{title:r,text:o,actions:[(0,i.jsx)(a.Z,{id:t,children:"Go"})]})}},43459:function(e,t,r){"use strict";r(67294);var n=r(59983),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children);return(0,a.jsx)(n.Z,{border:!1,to:"/people/".concat(t),children:r})}},11951:function(e,t,r){"use strict";r(67294);var n=r(68220),a=r(8519),i=r(88329),o=r(76085),c=r(92275),s=r(35566),u=r(85893);t.Z=function(e){var t=e.data,r=(e.loading,e.type);if(!t||0==t.length)return(0,u.jsx)("div",{});var l=(0,u.jsxs)(a.DK,{children:[r,(0,u.jsxs)(a.x4,{children:[" [",t.length,"]"]})]});return(0,u.jsxs)(n.RQ,{children:[t&&t.length>0&&l,(0,u.jsx)(o.Z,{children:t&&t.length>0&&t.map((function(e,t){return(0,u.jsx)(c.Z,{xs:12,sm:12,md:6,lg:4,children:(0,u.jsx)("div",{children:(0,u.jsx)(i.Z,{id:e.id,children:(0,u.jsxs)("div",{children:[e.title," ",(0,u.jsxs)(a.x4,{children:["(",(0,u.jsx)(s.Z,{value:e.releasedDate,format:"YYYY"}),")"]})]})})})},t)}))})]})}},55619:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});r(67294),r(58248);var n=r(70360),a=r(67616),i=r(96035),o=(r(515),r(85893));function c(e){var t=(0,o.jsx)(i.Z,{showData:e.showDataInBanner,loading:e.loading,title:e.title,description:e.description,data:e.data,item:e.item,actions:[{url:e.url,title:"See all"}],hero:"banner"!==e.type});return(0,o.jsxs)(o.Fragment,{children:["banner"===e.type&&t,"grid"===e.type&&(0,o.jsx)(n.Z,{banner:t,mainCol:e.mainCol?e.mainCol(e):(0,o.jsx)(a.Z,{loading:e.loading,page:e.params.page,data:e.data,onPageChange:e.onPageChange,item:e.item})})]})}},92498:function(e,t,r){"use strict";var n=r(15671),a=r(43144),i=r(60136),o=r(82963),c=r(61120),s=r(67294),u=r(65295),l=r(18515),f=r(42643),d=r(54962),p=r(49161),h=r(2658),g=r(85893);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var v=function(e){(0,i.Z)(r,e);var t=m(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.subtitle,n=e.text,a=e.image,i=e.imageHeight,o=e.noImage,c=e.actions,s=0;r=r||"";return o=!!o,a=a||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",(0,g.jsxs)(u.Z,{children:[(0,g.jsx)(l.Z,{title:(0,g.jsx)(h.Z,{noWrap:!0,children:t}),subheader:r}),!o&&(0,g.jsx)(d.Z,{style:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"},height:i||null,image:a}),n&&(0,g.jsx)(f.Z,{children:(0,g.jsx)(h.Z,{variant:"body2",color:"text.secondary",children:n})}),(0,g.jsx)(p.Z,{children:c&&c.map((function(e){return(0,g.jsx)("div",{children:e},s++)}))})]})}}]),r}(s.Component);t.Z=v},35566:function(e,t,r){"use strict";var n=r(15671),a=r(43144),i=r(60136),o=r(82963),c=r(61120),s=r(67294),u=r(53651),l=r(65710),f=r(85893);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var p=function(e){(0,i.Z)(r,e);var t=d(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"getDate",value:function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(r){return null}}},{key:"toString",value:function(e,t,r){switch(r){case"ago":return(0,u.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yyyy");case"YYYY":return t.getFullYear();default:return(0,l.Z)(t,r)}}},{key:"render",value:function(){var e=this.props,t=e.lang,r=e.value,n=e.className,a=e.format;t=t||"en",a=a||"ago";var i=this.getDate(r);if(null==i)return(0,f.jsx)("span",{});var o=this.toString(t,i,a);return(0,f.jsx)("span",{className:n,children:o})}}]),r}(s.Component);t.Z=p},15584:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/actors",function(){return r(73202)}])}},function(e){e.O(0,[572,685,845,894,774,888,179],(function(){return t=15584,e(e.s=t);var t}));var t=e.O();_N_E=t}]);