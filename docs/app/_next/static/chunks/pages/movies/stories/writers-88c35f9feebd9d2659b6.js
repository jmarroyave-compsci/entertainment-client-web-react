(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1441],{49896:function(e,t,r){"use strict";r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),i=e.box;return(0,a.jsx)(n.Z,{box:i,border:!1,to:"/movies/".concat(t),children:r})}},25662:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});r(67294);var n=r(43332),a=r(55476),i=r(85893);function o(e){var t=e.id,r=e.name,o=e.text;e.box;return(0,i.jsx)(a.Z,{box:!0,id:t,entity:r,children:(0,i.jsx)(n.Z,{title:r,text:o})})}},55476:function(e,t,r){"use strict";r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),i=e.box;return(0,a.jsx)(n.Z,{box:i,border:!1,to:"/people/".concat(t),children:r})}},2295:function(e,t,r){"use strict";r(67294);var n=r(50367),a=r(58862),i=r(49896),o=r(52651),c=r(23275),u=r(27159),s=r(85893);t.Z=function(e){var t=e.data,r=(e.loading,e.type);if(!t||0==t.length)return(0,s.jsx)("div",{});var l=(0,s.jsxs)(a.DK,{children:[r,(0,s.jsxs)(a.x4,{children:[" [",t.length,"]"]})]});return(0,s.jsxs)(n.RQ,{children:[t&&t.length>0&&l,(0,s.jsx)(o.Z,{children:t&&t.length>0&&t.map((function(e,t){return(0,s.jsx)(c.Z,{xs:12,sm:12,md:6,lg:4,children:(0,s.jsx)("div",{children:(0,s.jsx)(i.Z,{id:e.id,children:(0,s.jsxs)("div",{children:[e.title," ",(0,s.jsxs)(a.x4,{children:["(",(0,s.jsx)(u.Z,{value:e.releasedDate,format:"YYYY"}),")"]})]})})})},t)}))})]})}},43332:function(e,t,r){"use strict";var n=r(15671),a=r(43144),i=r(60136),o=r(82963),c=r(61120),u=r(67294),s=r(65295),l=r(18515),f=r(42643),p=r(54962),d=r(49161),h=r(2658),g=r(360),y=r(85893);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var j=function(e){(0,i.Z)(r,e);var t=v(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.subtitle,n=e.text,a=e.image,i=e.imageHeight,o=e.noImage,c=e.actions,u=0;r=r||"";return o=!!o,a=a||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",(0,y.jsxs)(s.Z,{style:{flexGrow:1},children:[(0,y.jsx)(l.Z,{title:(0,g.HD)(t)?(0,y.jsx)(h.Z,{noWrap:!1,children:t}):t,subheader:r}),!o&&(0,y.jsx)(p.Z,{style:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"},height:i||null,image:a}),n&&(0,y.jsx)(f.Z,{children:(0,g.HD)(n)?(0,y.jsx)(h.Z,{variant:"body2",color:"text.secondary",component:"div",children:n}):n}),c&&c.length>0&&(0,y.jsx)(d.Z,{children:c.map((function(e){return(0,y.jsx)("div",{children:e},u++)}))})]})}}]),r}(u.Component);t.Z=j},27159:function(e,t,r){"use strict";var n=r(15671),a=r(43144),i=r(60136),o=r(82963),c=r(61120),u=r(67294),s=r(53651),l=r(65710),f=r(85893);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var d=function(e){(0,i.Z)(r,e);var t=p(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"getDate",value:function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(r){return null}}},{key:"toString",value:function(e,t,r){switch(r){case"ago":return(0,s.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yyyy");case"YYYY":return t.getFullYear();default:return(0,l.Z)(t,r)}}},{key:"render",value:function(){var e=this.props,t=e.lang,r=e.value,n=e.className,a=e.format;t=t||"en",a=a||"ago";var i=this.getDate(r);if(null==i)return(0,f.jsx)("span",{});var o=this.toString(t,i,a);return(0,f.jsx)("span",{className:n,children:o})}}]),r}(u.Component);t.Z=d},18035:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n,a=r(67294),i=r(11163),o=r(4942),c=r(97937),u=r(94219),s=r(93942),l={automata:{name:"stories_writers"},page:{title:"Writers",description:"",url:function(e){return"/".concat(e,"/stories/writers")}},banner:{showData:!1}},f=r(15861),p=r(87757),d=r.n(p),h=r(24268),g=r(16161),y=r(30168),v=r(54397),j=r(8300);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O,x=(0,v.Ps)(n||(n=(0,y.Z)(["\n  query GetData($page: Int)\n  {\n    storiesPeopleWriters(page: $page){\n      id\n      name\n      directed {\n        id\n        title\n        releasedDate\n      }      \n    }\n  }\n"]))),Z=l.automata.name,w=(0,h.hg)("".concat(Z,"/fetchData"),function(){var e=(0,f.Z)(d().mark((function e(t,r){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(D(t)),e.next=3,n=t.page,(0,j.h)(x,{page:n},(function(e){return b(b({},e),{},{data:e.data.storiesPeopleWriters})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n}),e)})));return function(t,r){return e.apply(this,arguments)}}()),P=(0,h.oM)({name:Z,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=t.payload,"banner"!==e.params.renderer&&i.default.push("".concat(l.page.url(e.params.entity),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(O={},(0,o.Z)(O,w.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(O,w.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,i=r.data;e.data=i,e.loading=n,e.error=a})),(0,o.Z)(O,w.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),O)});g.h.reducerManager.add(Z,P.reducer);P.reducer;var D=P.actions.setParams,k=r(25662),R=r(2295),Y=r(85893);function _(e){var t=e.id,r=e.name,n=e.wrote;return(0,Y.jsx)(k.Z,{id:t,name:r,text:(0,Y.jsx)(R.Z,{data:n})})}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=(0,s.I0)(),r=(0,s.v9)((function(e){return e[l.automata.name]}));return(0,a.useEffect)((function(){t(w({renderer:e.render,entity:e.entity,page:e.page}))}),[]),r?(0,Y.jsx)(c.Z,{xs:(0,Y.jsx)(u.Z,{config:l,type:r.params.renderer,url:l.page.url(r.params.entity),data:r.data,loading:r.loading,onPageChange:function(e){return t(w(N(N({},r.params),{},{page:e})))},item:function(e){return(0,Y.jsx)(_,N({full:!0},e))},params:N({},r.params)})}):(0,Y.jsx)("div",{})}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=function(e){return(0,Y.jsx)(S,M(M({},e),{},{render:"page"}))},I=function(e){var t=(0,i.useRouter)(),r=(t&&t.query?t.query:[]).page;return r=r?parseInt(r):1,(0,Y.jsx)(H,{page:r,entity:"movies",breadcrumbs:"/movies/stories/writers"})}},72852:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/writers",function(){return r(18035)}])}},function(e){e.O(0,[6499,5685,5218,519,4219,9774,2888,179],(function(){return t=72852,e(e.s=t);var t}));var t=e.O();_N_E=t}]);