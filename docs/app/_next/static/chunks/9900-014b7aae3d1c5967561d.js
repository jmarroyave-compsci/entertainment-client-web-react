"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9900],{91200:function(t,e,n){n.d(e,{Ez:function(){return f},AK:function(){return g},iY:function(){return m}});var r,a,i,o=n(30168),c=n(4942),u=n(54397),s=n(74273);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=function(t){var e=t.page,n=t.op,r=t.qryName,a=void 0===r?"":r;return(0,s.h)(p({qryName:a}),{page:e,field:JSON.stringify(n)},(function(t){return d(d({},t),{},{data:t.data.podcasts})}))},p=function(t){var e=t.qryName;return(0,u.Ps)(r||(r=(0,o.Z)(["\n  query podcasts_","($page: Int, $field: String)\n  {\n    podcasts(page: $page, field: $field){\n      id: _id\n      title\n      author\n    }\n  }\n"])),e)},g=function(){return(0,s.h)(v(),{},(function(t){return d(d({},t),{},{data:t.data.dashboardPodcasts})}))},v=function(){return(0,u.Ps)(a||(a=(0,o.Z)(["\nquery dashboard_podcasts\n  {\n    dashboardPodcasts {\n      total\n      author\n      countries\n      languages\n      category\n      subcategory\n    }\n  }\n"])))},m=function(t){var e=t.id,n=t.qryName,r=void 0===n?"":n;return(0,s.h)(j({qryName:r}),{id:e},(function(t){return d(d({},t),{},{data:t.data.podcast})}))},j=function(t){t.qryName;return(0,u.Ps)(i||(i=(0,o.Z)(["\nquery podcast($id: String!)\n{\n  podcast(id: $id){\n    id: _id \n    title\n    subtitle\n    feedUrl\n    description\n    summary\n    author\n    link\n    language\n    image{\n      poster\n    }\n    category\n    subcategory\n    createdDate\n  }\n}\n"])))}},82356:function(t,e,n){n(67294);var r=n(58862),a=n(27159),i=n(85893);e.Z=function(t){var e=t.data,n=t.value,o=t.title,c=t.format,u=t.sufix;if(!(e=e||n)||null==e||0==e.length||"N/A"==e)return null;switch(n=e,c){case"date":n=(0,i.jsx)(a.Z,{value:e,format:"DD/MM/YYYY"});break;case"year":n=(0,i.jsx)(a.Z,{value:e,format:"YYYY"})}return(0,i.jsxs)("div",{children:[(0,i.jsx)(r.Qy,{children:o}),(0,i.jsxs)(r.GH,{children:[n," ",u]})]})}},29110:function(t,e,n){n.d(e,{Z:function(){return o}});n(67294);var r=n(50367),a=n(58862),i=n(85893);function o(t){var e=t.title,n=t.text;return n?(0,i.jsxs)(r.RQ,{children:[e&&(0,i.jsx)(a.DK,{children:e}),(0,i.jsx)(a.nv,{children:n})]}):(0,i.jsx)("div",{})}},50789:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(4942),a=n(67294),i=n(52651),o=n(23275),c=n(79895),u=n(14308),s=n(28973),l=n(62448),d=n(50367),f=n(12666),p=n(85893);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},j={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function h(t){var e=t.animations,n=void 0===e||e,r=t.data,c=t.loading,u=t.url,s=t.skeleton,g=t.item,h=t.onPageChange,y=t.page,O=t.pageSize,x=t.xs,Z=void 0===x?12:x,w=t.sm,P=void 0===w?6:w,D=t.md,k=void 0===D?6:D,C=t.lg,S=void 0===C?4:C,E=t.noPaging,Y=void 0!==E&&E,N=t.noPadding,R=(0,a.useRef)(null);r=r&&r.length>0?r:[1,2,3,4,5,6];var T=function(t){return N?t:(0,p.jsx)(d.ck,{children:t})},q=function(t){return n?(0,p.jsx)(f.ZP,{in:!0,timeout:1300,children:function(e){return(0,p.jsx)("div",{style:v(v(v({},m),j[e]),{},{width:"100%"}),children:t})}}):t},M=function(t){return(0,p.jsx)(o.Z,{xs:Z,sm:P,md:k,lg:S,children:T(c?s||(0,p.jsx)(b,{}):g?q(g(t.data)):null)})},I=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{ref:R}),(0,p.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:r.map((function(e,n){return(0,p.jsx)(a.Fragment,{children:(0,p.jsx)(M,{data:e,params:t})},n)}))})]});return Y||(I=(0,p.jsx)(l.Z,{pageSize:O,data:r,url:u,onPageChange:function(t){R.current.scrollIntoView(!1),h&&h(t)},page:y,loading:c,children:I})),(0,p.jsx)(d.RQ,{children:I})}function b(){return(0,p.jsx)(c.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,p.jsxs)(u.Z,{spacing:1,children:[(0,p.jsx)(s.Z,{variant:"text",width:"80%"}),(0,p.jsx)(s.Z,{variant:"rectangular",height:100}),(0,p.jsx)(s.Z,{variant:"text",width:"50%"}),(0,p.jsx)(s.Z,{variant:"text",width:"40%"}),(0,p.jsx)(s.Z,{variant:"text",width:"70%"})]})})}},62448:function(t,e,n){n.d(e,{Z:function(){return s}});n(67294);var r=n(11163),a=n(14308),i=n(72642),o=n(50367),c=n(58862),u=n(85893);function s(t){var e=(0,r.useRouter)(),n=t||{},s=n.children,l=n.route,d=n.loading,f=n.data,p=n.url,g=n.skeleton,v=n.onPageChange,m=n.page,j=n.pageSize,h=void 0===j?10:j;m=(m=m||(l&&l.page?l.page:null))?parseInt(m):1;var b=function(t){if(v&&v(t),p){var n="".concat(p,"/").concat(t);e.push(n)}},y=f&&f.length<h,O=1==m;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.RQ,{children:f&&f.length>0?(0,u.jsxs)(a.Z,{spacing:2,children:[s,(0,u.jsxs)(a.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,u.jsx)(i.Z,{variant:"outlined",disabled:O,onClick:function(){return b(m-1)},children:"Back"}),(0,u.jsx)(i.Z,{variant:"outlined",disabled:y,onClick:function(){return b(m+1)},children:"Next"})]})]}):(0,u.jsx)(c.Dx,{children:d?g||"loading":"No results"})})})}},27159:function(t,e,n){var r=n(15671),a=n(43144),i=n(60136),o=n(82963),c=n(61120),u=n(67294),s=n(53651),l=n(65710),d=n(85893);function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,c.Z)(t);if(e){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var p=function(t){(0,i.Z)(n,t);var e=f(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"getDate",value:function(t){if(!t||null==t||""===t||0==t.length)return null;if(t instanceof Date)return t;try{var e=Number(t);return Number.isInteger(e)?new Date(e):new Date(t)}catch(n){return null}}},{key:"toString",value:function(t,e,n){switch(n){case"ago":return(0,s.Z)(e,new Date);case"DD/MM/YYYY":return(0,l.Z)(e,"dd/MM/yyyy");case"YYYY":return e.getFullYear();default:return(0,l.Z)(e,n)}}},{key:"render",value:function(){var t=this.props,e=t.lang,n=t.value,r=t.className,a=t.format;e=e||"en",a=a||"ago";var i=this.getDate(n);if(null==i)return(0,d.jsx)("span",{});var o=this.toString(e,i,a);return(0,d.jsx)("span",{className:r,children:o})}}]),n}(u.Component);e.Z=p},55619:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(4942),a=n(67294),i=n(11163),o=n(93942),c=n(19016),u=n(25810),s=n(14763),l=n(50789),d=(n(14308),n(529)),f=n(85893);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t){var e,n,r,s,l,d,p,v,j=(0,o.I0)(),h=(0,i.useRouter)(),b=t.config,y=(0,a.useState)(""),O=y[0],x=y[1],Z=(0,o.v9)((function(t){return t[b.automata.name]})),w=null!==(e=t.params.render)&&void 0!==e?e:null,P=g(g({},t.params),{},{renderer:null!==(n=t.params.renderer)&&void 0!==n?n:w});Z=t.data?{data:t.data,params:{page:t.params.page}}:Z;(0,a.useEffect)((function(){Z&&!t.data&&j((0,c.K4)({status:Z.loading,sender:b.automata.name}))}),[Z]),(0,a.useEffect)((function(){P.breadcrumbs&&j((0,c.YA)({breadcrumbs:"function"===typeof P.breadcrumbs?P.breadcrumbs(Z):P.breadcrumbs}))}),[P.breadcrumbs,Z]);var D=function(e){t.fetch&&(t.data?t.fetch(g({},e)):j(t.fetch(g({},e))))};return(0,a.useEffect)((function(){null!==h&&void 0!==h&&h.isReady&&("banner"!==w||b.banner.showData)&&(t.data||D(P))}),[null===h||void 0===h?void 0:h.isReady,P.id]),w&&"grid"!=w?((0,a.useEffect)((function(){""!=O&&j((0,c.PV)({message:O}))}),[O]),(0,f.jsx)(m,{config:t.config,render:w,state:Z,loading:!(null!==h&&void 0!==h&&h.isReady)||!Z||null===Z||(null===(r=Z)||void 0===r?void 0:r.loading),forceLoading:"detail"===w&&0==(null===(s=Z)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.length)||"list"==w&&0===(null===(d=Z)||void 0===d||null===(p=d.data)||void 0===p?void 0:p.length)||(null===(v=Z)||void 0===v?void 0:v.error),setErrorMessage:x,fetch:D,item:t.item,customDescription:t.customDescription,customTitle:t.customTitle,mainCol:t.mainCol||t.dashboard||t.detail,skeleton:t.skeleton,params:P})):(0,f.jsx)(u.C,{from:b.page.title,data:"render property wasn't set"})}function m(t){(0,o.I0)();var e,n,r=t.config,a=t.item,i=t.mainCol,c=t.state,l=t.render,d=t.params,p=t.fetch,v=t.setErrorMessage,m=t.loading||t.forceLoading,b=r.page.title;if(0==t.loading&&c){var y,O;if("detail"===l)null!==c.data&&0!=(null===(y=c.data)||void 0===y?void 0:y.length)||(v("this is a demo version, this record was filtered out to reduce the database size"),m=!0);if("list"===l)0===(null===(O=c.data)||void 0===O?void 0:O.length)&&(v("data not found"),m=!0);c.error&&(v(c.error.message),m=!0)}var x=(0,f.jsx)(j,g({},t));return(0,f.jsxs)(f.Fragment,{children:[c&&c.error&&(0,f.jsx)(u.C,{from:b,data:c.error.message}),"banner"===l&&x,"list"===l&&(0,f.jsx)(s.Z,g(g({},t),{},{id:r.automata.name,banner:x,mainCol:m&&t.skeleton?t.skeleton:(0,f.jsx)(h,g({},t))})),"page"===l&&(0,f.jsx)(s.Z,g(g({},t),{},{id:r.automata.name,banner:x,mainCol:i?(0,f.jsx)(f.Fragment,{children:m&&t.skeleton?t.skeleton:i({data:null!==(e=null===c||void 0===c?void 0:c.data)&&void 0!==e?e:null,loading:m,params:d,fetch:p,item:a})}):(0,f.jsx)(u.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===l&&(0,f.jsx)(s.Z,g(g({},t),{},{id:r.automata.name,mainCol:i?(0,f.jsx)(f.Fragment,{children:m&&t.skeleton?t.skeleton:i({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:m})}):(0,f.jsx)(u.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})}))]})}function j(t){var e,n,r,a,i,o,c,u,s,l,p=t.config,g=t.state,v=null!==(e=null===(n=p.banner)||void 0===n?void 0:n.showData)&&void 0!==e&&e,m=t.customTitle?"function"===typeof t.customTitle?g?t.customTitle(null!==(r=null===g||void 0===g?void 0:g.params)&&void 0!==r?r:{}):"":t.customTitle:null!==(a=null===(i=p.page)||void 0===i?void 0:i.title)&&void 0!==a?a:"NO TITLE",j=t.customDescription?"function"===typeof t.customDescription?g?t.customDescription(null!==(o=null===g||void 0===g?void 0:g.params)&&void 0!==o?o:{}):"":t.customDescription:null!==(c=null===(u=p.page)||void 0===u?void 0:u.description)&&void 0!==c?c:"NO DESCRIPTION",h=null===(s=p.page)||void 0===s?void 0:s.url;return(0,f.jsx)(d.Z,{showData:v,loading:t.loading,title:m,description:j,data:null===g||void 0===g?void 0:g.data,item:t.item,actions:[{url:h(null!==(l=null===g||void 0===g?void 0:g.params)&&void 0!==l?l:{}),title:"See all"}],hero:"banner"!==t.render})}function h(t){var e,n,r=t.loading,a=t.state,i=t.fetch,o=t.item;return(0,f.jsx)(l.Z,{loading:r,page:null!==(e=null===a||void 0===a?void 0:a.params.page)&&void 0!==e?e:null,data:null!==(n=null===a||void 0===a?void 0:a.data)&&void 0!==n?n:null,onPageChange:function(t){i(g(g({},a.params),{},{page:t}))},item:o})}},49900:function(t,e,n){n.r(e),n.d(e,{default:function(){return z}});n(67294);var r=n(11163),a=n(4942),i=n(55619),o={automata:{name:"page_podcast"},page:{url:function(t){var e=t.id;return"/podcasts/".concat(e)}}},c=(n(70357),n(52651),n(23275),n(27159),n(48724)),u=n(12868),s=n(59067),l=n(14308),d=n(29602),f=n(85893);(0,d.ZP)("h1")({margin:0});function p(t){var e=t.data;return e?(0,f.jsx)(l.Z,{direction:"row",children:(0,f.jsx)(c.Z,{text:e})}):(0,f.jsx)("div",{})}var g=n(29110),v=n(50367),m=n(58862),j=n(82356),h=n(28388);function b(t){var e=t.data;t.loading;return e=e||{},(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(u.Z,{src:e.image?e.image.poster:null}),(0,f.jsx)(p,{data:e.category}),(0,f.jsx)(s.Z,{text:e.title,subText1:e.subtitle,subText2:e.author,link:e.link}),(0,f.jsx)(g.Z,{text:e.summary}),(0,f.jsxs)(v.RQ,{children:[(0,f.jsx)(m.DK,{children:"general information"}),(0,f.jsx)(j.Z,{title:"Created",data:e.createdDate,format:"date"}),(0,f.jsx)(j.Z,{title:"Language",data:e.language}),(0,f.jsx)(j.Z,{title:"Country",data:e.country})]}),(0,f.jsx)(h.Z,{website:e.link,data:e})]})}var y=n(28973);function O(t){return(0,f.jsx)(v.X,{children:(0,f.jsxs)(l.Z,{spacing:1,children:[(0,f.jsx)(y.Z,{variant:"rectangular",height:300}),(0,f.jsx)(y.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,f.jsx)(y.Z,{variant:"text",style:{width:"40%"}}),(0,f.jsx)(y.Z,{variant:"text",style:{width:"25%"}}),(0,f.jsx)(y.Z,{variant:"text",style:{width:"25%"}}),(0,f.jsx)(y.Z,{variant:"text",style:{width:"25%"}})]})})}var x,Z=n(15861),w=n(87757),P=n.n(w),D=n(24268),k=n(16161),C=n(91200);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Y=o.automata.name,N=(0,D.hg)("".concat(Y,"/fetchData"),function(){var t=(0,Z.Z)(P().mark((function t(e,n){return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.dispatch(T(e)),t.next=3,C.iY({id:e.id});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),R=(0,D.oM)({name:Y,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,e){t.params=E(E({},t.params),e.payload),"banner"!=t.params.renderer&&1!=t.params.page&&r.default.push("".concat(o.page.url(t.params)),null,{shallow:!0})}},extraReducers:(x={},(0,a.Z)(x,N.pending,(function(t,e){t.data=null,t.loading=!0,t.error=""})),(0,a.Z)(x,N.fulfilled,(function(t,e){var n=e.payload,r=n.loading,a=n.error,i=n.data;t.data=i,t.loading=r,t.error=a})),(0,a.Z)(x,N.rejected,(function(t,e){var n=e.error;t.data=[],t.loading=!1,t.error=n})),x)});k.h.reducerManager.add(Y,R.reducer);R.reducer;var T=R.actions.setParams;function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t){return(0,f.jsx)(i.Z,{params:M(M({},t),{},{breadcrumbs:function(e){var n,r;return"".concat(t.breadcrumbs,"/").concat(null!==(n=null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.title)&&void 0!==n?n:"loading")}}),config:o,fetch:function(t){return N(M({},t))},detail:function(t){return(0,f.jsx)(b,{data:t.data})},skeleton:(0,f.jsx)(O,{})})}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var $=function(t){return(0,f.jsx)(I,F(F({},t),{},{render:"detail"}))},z=function(t){var e,n,a=(0,r.useRouter)(),i=t.id?t.id:null!==(e=null===(n=a.query)||void 0===n?void 0:n.podcast)&&void 0!==e?e:"";return(0,f.jsx)($,{breadcrumbs:"/podcasts",id:i})}}}]);