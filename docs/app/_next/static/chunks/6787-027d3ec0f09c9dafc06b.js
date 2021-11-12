"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6787],{67247:function(e,t,r){r.d(t,{C:function(){return u}});r(67294);var n=r(29602),a=r(50367),i=r(58862),o=r(43826),c=r(85893),s=(0,n.ZP)("div")({padding:0,margin:"0 0 0.5rem 0"});function u(e){var t=e.data,r=(e.loading,e.mini),n=function(e,t){for(var r="",n=[],a=[],u=0,l=0;l<e.length;l++){var d,f=e[l];r!==f.category&&(n.length>0&&a.push((0,c.jsx)(s,{children:t?n.slice(0,2):n},u++)),n=[],r=f.category,n.push((0,c.jsx)(i.x4,{children:r.toUpperCase()},u++)));var p=f.entityType?f.entityType:null!==(d=f.entityId)&&void 0!==d&&d.startsWith("nm")?"person":"movie";n.push((0,c.jsx)(i.VY,{children:f.entityId?(0,c.jsx)(o.Z,{type:p,id:f.entityId,children:f.entity}):f.entity},u++))}n.length>0&&a.push((0,c.jsx)(s,{children:n},u++));return t?a.slice(0,3):a}(t,r);return n=r?n:(0,c.jsx)(a.RQ,{children:n}),(0,c.jsx)(c.Fragment,{children:n})}},43826:function(e,t,r){r(67294);var n=r(49896),a=r(55476),i=r(44898),o=r(62226),c=r(11106),s=r(85893);t.Z=function(e){var t=e.id,r=e.type,u=e.children,l=e.box;switch(r){case"movie":return(0,s.jsx)(n.Z,{box:l,id:t,children:u});case"person":return(0,s.jsx)(a.Z,{box:l,id:t,children:u});case"podcast":return(0,s.jsx)(i.Z,{box:l,id:t,children:u});case"tv-show":return(0,s.jsx)(o.Z,{box:l,id:t,children:u});case"video-game":return(0,s.jsx)(c.Z,{box:l,id:t,children:u})}return(0,s.jsxs)("div",{children:["ENTITY ",r," NOT FOUND"]})}},49896:function(e,t,r){r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),i=e.box;return(0,a.jsx)(n.Z,{box:i,border:!1,to:"/movies/".concat(t),children:r})}},55476:function(e,t,r){r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),i=e.box;return(0,a.jsx)(n.Z,{box:i,border:!1,to:"/people/".concat(t),children:r})}},44898:function(e,t,r){r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),i=e.box;return(0,a.jsx)(n.Z,{box:i,border:!0,to:"/podcasts/".concat(t),children:r})}},62226:function(e,t,r){r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),i=e.box;return(0,a.jsx)(n.Z,{box:i,border:!1,to:"/tv-shows/".concat(t),children:r})}},11106:function(e,t,r){r(67294);var n=r(89260),a=r(85893);t.Z=function(e){var t=e.id,r=(e.entity,e.children),i=e.box;return(0,a.jsx)(n.Z,{box:i,border:!1,to:"/video-games/".concat(t),children:r})}},82356:function(e,t,r){r(67294);var n=r(58862),a=r(27159),i=r(85893);t.Z=function(e){var t=e.data,r=e.value,o=e.title,c=e.format,s=e.sufix;if(!(t=t||r)||null==t||0==t.length)return null;switch(r=t,c){case"date":r=(0,i.jsx)(a.Z,{value:t,format:"DD/MM/YYYY"});break;case"year":r=(0,i.jsx)(a.Z,{value:t,format:"YYYY"})}return(0,i.jsxs)("div",{children:[(0,i.jsx)(n.Qy,{children:o}),(0,i.jsxs)(n.GH,{children:[r," ",s]})]})}},12868:function(e,t,r){r(67294),r(52651),r(23275);var n=r(7945),a=r(50367),i=r(85893);function o(e){var t=e.src,r=e.height,a=e.width;return(0,i.jsx)(n.Z,{src:t,width:a,height:r})}t.Z=function(e){var t=e.src;return e.loading,(0,i.jsx)(a.RQ,{children:(0,i.jsx)("div",{style:{height:300,width:"100%",backgroundColor:"#333",overflow:"hidden"},children:(0,i.jsx)(o,{src:t,height:300,width:250})})})}},59067:function(e,t,r){r.d(t,{Z:function(){return u}});r(67294);var n=r(50367),a=r(29602),i=r(85893),o=(0,a.ZP)("h2")({fontSize:"2.5rem",lineHeight:"2.75rem",padding:"0",margin:"0"}),c=(0,a.ZP)("div")({margin:0,padding:0,fontSize:"0.9rem",lineHeight:"1.3rem"}),s=(0,a.ZP)("div")({margin:0,padding:0,fontSize:"0.8rem",lineHeight:"1.2rem",fontWeight:500});function u(e){var t=e.text,r=e.subText1,a=e.subText2,u=e.subText,l=e.link;u=u||r;var d=(0,i.jsx)(o,{children:t});return l&&(d=(0,i.jsx)("a",{href:l,children:d})),(0,i.jsxs)(n.RQ,{children:[d,u&&(0,i.jsx)(c,{children:u}),a&&(0,i.jsxs)(s,{children:["by ",a]})]})}},27159:function(e,t,r){var n=r(15671),a=r(43144),i=r(60136),o=r(82963),c=r(61120),s=r(67294),u=r(53651),l=r(65710),d=r(85893);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var p=function(e){(0,i.Z)(r,e);var t=f(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"getDate",value:function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(r){return null}}},{key:"toString",value:function(e,t,r){switch(r){case"ago":return(0,u.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yyyy");case"YYYY":return t.getFullYear();default:return(0,l.Z)(t,r)}}},{key:"render",value:function(){var e=this.props,t=e.lang,r=e.value,n=e.className,a=e.format;t=t||"en",a=a||"ago";var i=this.getDate(r);if(null==i)return(0,d.jsx)("span",{});var o=this.toString(t,i,a);return(0,d.jsx)("span",{className:n,children:o})}}]),r}(s.Component);t.Z=p},7945:function(e,t,r){r(67294);var n=r(1216),a=r(29602),i=r(9092),o=r(85893),c="".concat(i.Z.APP.BASE_PATH).concat(i.Z.DEFAULTS.IMAGE_PLACEHOLDER),s=function(e){return e.target.src=c},u=(0,a.ZP)("div")({position:"relative",overflow:"hidden",backgroundColor:"#efefef",backgroundImage:"url('".concat(c,"')"),backgroundPosition:"center center",width:"fit-content",height:"fit-content",padding:0,margin:0});t.Z=function(e){var t,r=e.src,a=e.lazy,c=(e.preload,e.width),l=e.height,d=(e.style,e.layout);r=null!==(t=r)&&void 0!==t&&t.startsWith("/")?"".concat(i.Z.APP.BASE_PATH).concat(r):r,c=c||"100%",l=l||null;var f=(0,o.jsx)("img",{src:r,layout:d,width:c,height:l,onError:s});return a&&(f=(0,o.jsx)(n.ZP,{only:!0,children:f})),(0,o.jsx)(u,{children:f})}},55619:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(4942),a=r(67294),i=r(11163),o=r(93942),c=r(19016),s=r(25810),u=r(14763),l=r(50789),d=(r(14308),r(529)),f=r(85893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){var t,r,n=(0,o.I0)(),u=(0,i.useRouter)(),l=e.config,d=(0,a.useState)(!1),p=d[0],h=d[1],m=(0,o.v9)((function(e){return e[l.automata.name]})),b=null!==(t=e.params.render)&&void 0!==t?t:null,y=v(v({},e.params),{},{renderer:null!==(r=e.params.renderer)&&void 0!==r?r:b});m=e.data?{data:e.data,params:{page:e.params.page}}:m,(0,a.useEffect)((function(){m&&n((0,c.K4)({status:m.loading,sender:l.automata.name}))}),[m]),(0,a.useEffect)((function(){u&&h(u.isReady)}),[u]),(0,a.useEffect)((function(){y.breadcrumbs&&n((0,c.YA)({breadcrumbs:"function"===typeof y.breadcrumbs?y.breadcrumbs(m):y.breadcrumbs}))}),[y.breadcrumbs,m]);var j=function(t){e.fetch&&(e.data?e.fetch(v({},t)):n(e.fetch(v({},t))))};return(0,a.useEffect)((function(){p&&("banner"!==b||l.banner.showData)&&j(y)}),[p]),b&&"grid"!=b?(0,f.jsx)(g,{config:e.config,render:b,state:m,loading:!p||!m||m.loading,fetch:j,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:y}):(0,f.jsx)(s.C,{from:l.page.title,data:"render property wasn't set"})}function g(e){var t,r,n=(0,o.I0)(),a=e.config,i=e.item,l=e.mainCol,d=e.state,p=e.render,h=e.params,g=e.fetch,y=e.loading,j=a.page.title,x=(0,f.jsx)(m,v({},e));return y||("detail"===p&&null===d.data&&(n((0,c.PV)({message:"this is a demo version, this record was filtered out to reduce the database size"})),y=!0),"list"===p&&0===d.data.length&&(n((0,c.PV)({message:"data not found"})),y=!0),d.error&&(y=!0)),(0,f.jsxs)(f.Fragment,{children:[d&&d.error&&(0,f.jsx)(s.C,{from:j,data:d.error.message}),"banner"===p&&x,"list"===p&&(0,f.jsx)(u.Z,v(v({},e),{},{id:a.automata.name,banner:x,mainCol:l?l(e):(0,f.jsx)(b,v({},e))})),"page"===p&&(0,f.jsx)(u.Z,v(v({},e),{},{id:a.automata.name,banner:x,mainCol:l?(0,f.jsx)(f.Fragment,{children:y&&e.skeleton?e.skeleton:l({data:null!==(t=null===d||void 0===d?void 0:d.data)&&void 0!==t?t:null,loading:e.loading,params:h,fetch:g,item:i})}):(0,f.jsx)(s.C,{from:j,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===p&&(0,f.jsx)(u.Z,v(v({},e),{},{id:a.automata.name,mainCol:l?(0,f.jsx)(f.Fragment,{children:y&&e.skeleton?e.skeleton:l({data:null!==(r=null===d||void 0===d?void 0:d.data)&&void 0!==r?r:null,loading:e.loading})}):(0,f.jsx)(s.C,{from:j,data:"main component missing, not found in mainCol or detail prop"})}))]})}function m(e){var t,r,n,a,i,o,c,s,u=e.config,l=e.state,p=null!==(t=null===(r=u.banner)||void 0===r?void 0:r.showData)&&void 0!==t&&t,v=e.customTitle?e.customTitle:null!==(n=null===(a=u.page)||void 0===a?void 0:a.title)&&void 0!==n?n:"NO TITLE",h=e.customDescription?e.customDescription:null!==(i=null===(o=u.page)||void 0===o?void 0:o.description)&&void 0!==i?i:"NO DESCRIPTION",g=null===(c=u.page)||void 0===c?void 0:c.url;return(0,f.jsx)(d.Z,{showData:p,loading:e.loading,title:v,description:h,data:null===l||void 0===l?void 0:l.data,item:e.item,actions:[{url:g(null!==(s=null===l||void 0===l?void 0:l.params)&&void 0!==s?s:{}),title:"See all"}],hero:"banner"!==e.render})}function b(e){var t,r,n=e.loading,a=e.state,i=e.fetch,o=e.item;return(0,f.jsx)(l.Z,{loading:n,page:null!==(t=null===a||void 0===a?void 0:a.params.page)&&void 0!==t?t:null,data:null!==(r=null===a||void 0===a?void 0:a.data)&&void 0!==r?r:null,onPageChange:function(e){i(v(v({},a.params),{},{page:e}))},item:o})}},56787:function(e,t,r){r.r(t),r.d(t,{default:function(){return Q}});var n=r(70885),a=(r(67294),r(11163)),i=r(4942),o=r(55619),c={automata:{name:"stories_movies_award"},page:{title:"Award",url:function(e){var t=e.entity,r=e.id,n=e.year;return"/".concat(t,"/stories/awards/").concat(r,"/").concat(n)}}},s=(r(70357),r(59067)),u=r(50367),l=r(58862),d=r(67247),f=(r(82356),r(12868)),p=r(14308),v=(r(43826),r(85893));function h(e){var t=e.data;e.loading;return(0,v.jsxs)(p.Z,{children:[(0,v.jsx)(f.Z,{src:t.image?t.image.poster:null}),(0,v.jsx)(s.Z,{text:"".concat(t.festival.name," [").concat(t.year,"]")}),(0,v.jsxs)(u.RQ,{children:[(0,v.jsx)(l.DK,{children:"awarded"}),(0,v.jsx)(d.C,{data:t.awarded})]})]})}var g=r(28973);function m(e){return(0,v.jsx)(u.X,{children:(0,v.jsxs)(p.Z,{spacing:1,sx:{display:"flex",flexGrow:1},children:[(0,v.jsx)(g.Z,{variant:"rectangular",height:300}),(0,v.jsx)(g.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,v.jsx)(g.Z,{variant:"text",style:{width:"40%"}}),(0,v.jsx)(g.Z,{variant:"text",style:{width:"25%"}}),(0,v.jsx)(g.Z,{variant:"text",style:{width:"25%"}}),(0,v.jsx)(g.Z,{variant:"text",style:{width:"25%"}})]})})}var b,y=r(15861),j=r(87757),x=r.n(j),O=r(24268),w=r(16161),Z=r(30168),P=r(54397),D=r(74273);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C,S=(0,P.Ps)(b||(b=(0,Z.Z)(["\nquery get($festival: String, $year: Int) {\n  storiesMoviesAwards(festival: $festival, year: $year) {\n    festival {\n      id\n      name\n      image{\n        poster\n      }          \n    }\n    year\n    awarded{\n      category\n      entity\n      won\n      entityId\n    }\n  }\n}\n"])));function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=c.automata.name,R=(0,O.hg)("".concat(I,"/fetchData"),function(){var e=(0,y.Z)(x().mark((function e(t,r){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch(M(t)),e.next=3,n=t.id,a=t.year,(0,D.h)(S,{festival:n,year:parseInt(a)},(function(e){return E(E({},e),{},{data:e.data.storiesMoviesAwards?e.data.storiesMoviesAwards[0]:null})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var n,a}),e)})));return function(t,r){return e.apply(this,arguments)}}()),A=(0,O.oM)({name:I,initialState:{params:{id:null,year:null,entity:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=T(T({},e.params),t.payload),"banner"!=e.params.renderer&&1!=e.params.page&&a.default.push("".concat(c.page.url(e.params)),null,{shallow:!0})}},extraReducers:(C={},(0,i.Z)(C,R.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(C,R.fulfilled,(function(e,t){var r=t.payload,n=r.loading,a=r.error,i=r.data;e.data=i,e.loading=n,e.error=a})),(0,i.Z)(C,R.rejected,(function(e,t){var r=t.error;e.data=[],e.loading=!1,e.error=r})),C)});w.h.reducerManager.add(I,A.reducer);A.reducer;var M=A.actions.setParams;function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e){return(0,v.jsx)(o.Z,{params:_(_({},e),{},{breadcrumbs:function(t){var r,n,a;return"".concat(e.breadcrumbs,"/").concat(null!==(r=null===t||void 0===t||null===(n=t.data)||void 0===n||null===(a=n.festival)||void 0===a?void 0:a.name)&&void 0!==r?r:"loading")}}),config:c,fetch:function(e){return R(_({},e))},detail:function(e){return(0,v.jsx)(h,{data:e.data})},skeleton:(0,v.jsx)(m,{})})}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=function(e){return(0,v.jsx)(F,z(z({},e),{},{render:"detail"}))},Q=function(e){var t,r,i,o=(0,a.useRouter)(),c=e.id?[e.id,e.year]:null!==(t=null===o||void 0===o||null===(r=o.query)||void 0===r?void 0:r.award)&&void 0!==t?t:[],s=(0,n.Z)(c,2),u=s[0],l=s[1];return l=null!==(i=l)&&void 0!==i?i:(new Date).getFullYear(),(0,v.jsx)(B,{breadcrumbs:"/movies/stories/awards",id:u,year:l,entity:"movies"})}}}]);