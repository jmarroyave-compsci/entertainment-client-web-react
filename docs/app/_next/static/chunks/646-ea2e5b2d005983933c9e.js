"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{88329:function(e,r,n){n(67294);var t=n(59983),a=n(85893);r.Z=function(e){var r=e.id,n=(e.entity,e.children);return(0,a.jsx)(t.Z,{border:!1,to:"/movies/".concat(r),children:n})}},8498:function(e,r,n){n.d(r,{Z:function(){return y}});n(67294);var t=n(29602),a=n(68220),i=n(8519),o=(n(76085),n(92275),n(31189),n(59983)),c=n(85893),s=(0,t.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),u=(0,t.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),l=(0,t.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),p=(0,t.ZP)("div")({margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",lineHeight:"1rem"}),d=(0,t.ZP)("div")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem",fontWeight:400}),f=(0,t.ZP)("div")({fontSize:"0.85rem",lineHeight:"0.95rem"}),g=(0,t.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"}),h=function(e){var r=e.year,n=e.children;return(0,c.jsx)(o.Z,{href:"/movies/stories/awards?year=".concat(r),children:n})};function y(e){var r=e.data;return r&&0!=r.length?!0===e.mini?function(e,r){var n=e.year,t=e.all,a=t?r.length:2;n=parseInt(n);var i=function(e){return!n||e.year==n};return(0,c.jsxs)(s,{children:[r&&r.length>0&&r.slice(0,a).map((function(e,r){return i(e)&&(0,c.jsx)("div",{children:(0,c.jsx)(h,{year:e.year,children:(0,c.jsxs)(u,{children:[e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},r)})),!t&&r&&r.length>a&&(0,c.jsx)(u,{children:(0,c.jsx)(u,{children:(0,c.jsxs)(l,{children:["and ",r.length-a," more"]})})})]})}(e,r):function(e,r){var n=null,t=null,o=(e.year,function(e){return n&&n==e.year?null:(n=e.year,t=null,(0,c.jsx)(p,{children:e.year}))}),s=function(e){return t&&t==e.name?null:(t=e.name,(0,c.jsx)(d,{children:e.name}))};return(0,c.jsxs)(a.RQ,{children:[(0,c.jsx)(i.DK,{children:"awards"}),r&&r.length>0&&r.map((function(e,r){return(0,c.jsxs)("div",{children:[o(e),s(e),(0,c.jsx)(h,{year:e.year,children:(0,c.jsxs)(a.ck,{children:[(0,c.jsx)(g,{children:"false"===e.won||!1===e.won?"nominee":"winner"}),(0,c.jsx)(f,{children:e.category})]})})]},r)}))]})}(e,r):(0,c.jsx)("div",{})}},55619:function(e,r,n){n.d(r,{Z:function(){return c}});n(67294),n(58248);var t=n(70360),a=n(67616),i=n(96035),o=(n(515),n(85893));function c(e){var r=(0,o.jsx)(i.Z,{showData:e.showDataInBanner,loading:e.loading,title:e.title,description:e.description,data:e.data,item:e.item,actions:[{url:e.url,title:"See all"}],hero:"banner"!==e.type});return(0,o.jsxs)(o.Fragment,{children:["banner"===e.type&&r,"grid"===e.type&&(0,o.jsx)(t.Z,{banner:r,mainCol:e.mainCol?e.mainCol(e):(0,o.jsx)(a.Z,{loading:e.loading,page:e.params.page,data:e.data,onPageChange:e.onPageChange,item:e.item})})]})}},58072:function(e,r){r.Z={automata:{name:"stories_movies_awards"},page:{title:"Awards",description:"search and visualize the award's information from the Oscars, Golden Globes and Emmys",url:function(e){var r=e.entity;return"/".concat(r,"/stories/awards")}},banner:{showData:!0}}},73388:function(e,r,n){n.d(r,{rQ:function(){return v}});var t,a=n(4942),i=n(15861),o=n(87757),c=n.n(o),s=n(24268),u=n(16161),l=n(11163),p=n(30168),d=n(54397),f=n(8300);function g(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function h(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?g(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var y,m=(0,d.Ps)(t||(t=(0,p.Z)(["\nquery get($entity:String, $year: Int, $page: Int) {\n  storiesMoviesAwards(entity: $entity, year: $year, page: $page){\n    id\n    title\n    awards {\n      category\n      name\n      won\n      year\n    }\n    image {\n      poster\n    }\n  }\n}\n"]))),j=n(58072),b=j.Z.automata.name,v=(0,s.hg)("".concat(b,"/fetchData"),function(){var e=(0,i.Z)(c().mark((function e(r,n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(x(r)),e.next=3,a=r.entity,i=r.year,o=r.page,(0,f.h)(m,{entity:a,year:parseInt(i),page:parseInt(o)},(function(e){return h(h({},e),{},{data:e.data.storiesMoviesAwards})}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}var a,i,o}),e)})));return function(r,n){return e.apply(this,arguments)}}()),O=(0,s.oM)({name:b,initialState:{params:{renderer:null,year:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=r.payload,"banner"!==e.params.renderer&&l.default.push("".concat(j.Z.page.url(e.params),"?year=").concat(e.params.year,"&page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(y={},(0,a.Z)(y,v.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(y,v.fulfilled,(function(e,r){var n=r.payload,t=n.loading,a=n.error,i=n.data;e.data=i,e.loading=t,e.error=a})),y)});u.h.reducerManager.add(b,O.reducer);O.reducer;var x=O.actions.setParams},27646:function(e,r,n){n.d(r,{Z:function(){return C}});var t=n(4942),a=n(67294),i=n(58248),o=n(55619),c=n(93942),s=n(58072),u=n(73388),l=(n(11163),n(26447)),p=n(92848),d=n(7338),f=n(68220),g=n(85893);function h(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function m(e){var r=e.onChange,n=(0,a.useMemo)((function(){return[{label:"Movies",id:"movies"}]}),[]),t=(0,a.useMemo)((function(){return function(){for(var e=[],r=(new Date).getFullYear();r>1920;r--)e.push({label:r.toString(),id:r.toString()});return e}()}),[]),i=(0,a.useState)(n.find((function(r){return r.id==e.entity}))),o=i[0],c=i[1],s=(0,a.useState)(t.find((function(r){return r.id==e.year}))),u=s[0],h=s[1],m=function(e,n){r&&r(e.id,n.id)};return(0,g.jsx)(f.RQ,{children:(0,g.jsxs)(l.Z,{spacing:2,children:[(0,g.jsx)(d.Z,{disableClearable:!0,options:n,value:o,onChange:function(e,r){m(u,r),c(r)},sx:{width:300},renderInput:function(e){return(0,g.jsx)(p.Z,y(y({},e),{},{label:"From"}))}}),(0,g.jsx)(d.Z,{disableClearable:!0,options:t,value:u,onChange:function(e,r){m(r,o),h(r)},sx:{width:300},renderInput:function(e){return(0,g.jsx)(p.Z,y(y({},e),{},{label:"Year"}))}})]})})}var j=n(67616);function b(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function v(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?b(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var O=function(e){e.data,e.loading;var r=e.onPageChange,n=e.params,t=(0,a.useState)(n.year),i=t[0],o=t[1],c=(0,a.useState)(n.entity),s=c[0],u=c[1],p=n.page;return(0,g.jsxs)(l.Z,{children:[(0,g.jsx)(m,{year:i,entity:s,onChange:function(e,n){o(e),u(n),window.scrollTo(0,0),r({year:e,entity:n,page:p})}}),(0,g.jsx)(j.Z,v(v({},e),{},{page:e.params.page,onPageChange:function(e){return r({year:i,entity:s,page:e})}}))]})},x=n(92498),w=n(88329),Z=n(8498);function P(e){e.full;var r=e.year,n=e.all,t=e.id,a=e.title,i=e.awards,o=e.image;return(0,g.jsx)(x.Z,{image:o?o.poster:o,imageHeight:100,text:(0,g.jsx)(Z.Z,{mini:!0,data:i,year:r,all:n}),title:a,actions:[(0,g.jsx)(w.Z,{id:t,entity:a,children:"Go"})]})}function D(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function S(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?D(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function C(e){var r=(0,c.I0)(),n=(0,c.v9)((function(e){return e[s.Z.automata.name]}));return n&&n.params.entity?(0,g.jsx)(i.Z,{xs:(0,g.jsx)(o.Z,{mainCol:function(e){return(0,g.jsx)(O,S({},e))},type:n.params.renderer,title:s.Z.page.title,description:s.Z.page.description,url:s.Z.page.url(n.params),showDataInBanner:s.Z.banner.showData,data:n.data,loading:n.loading,onPageChange:function(e){return r((0,u.rQ)(S(S({},n.params),e)))},item:function(e){return(0,g.jsx)(P,S({full:!0},e))},params:S({},n.params)})}):(0,g.jsx)("div",{})}},92498:function(e,r,n){var t=n(15671),a=n(43144),i=n(60136),o=n(82963),c=n(61120),s=n(67294),u=n(65295),l=n(18515),p=n(42643),d=n(54962),f=n(49161),g=n(2658),h=n(85893);function y(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,c.Z)(e);if(r){var a=(0,c.Z)(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return(0,o.Z)(this,n)}}var m=function(e){(0,i.Z)(n,e);var r=y(n);function n(){return(0,t.Z)(this,n),r.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.props,r=e.title,n=e.subtitle,t=e.text,a=e.image,i=e.imageHeight,o=e.noImage,c=e.actions,s=0;n=n||"";return o=!!o,a=a||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(l.Z,{title:(0,h.jsx)(g.Z,{noWrap:!0,children:r}),subheader:n}),!o&&(0,h.jsx)(d.Z,{style:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"},height:i||null,image:a}),t&&(0,h.jsx)(p.Z,{children:(0,h.jsx)(g.Z,{variant:"body2",color:"text.secondary",children:t})}),(0,h.jsx)(f.Z,{children:c&&c.map((function(e){return(0,h.jsx)("div",{children:e},s++)}))})]})}}]),n}(s.Component);r.Z=m},31189:function(e,r,n){n(67294),n(85893)}}]);