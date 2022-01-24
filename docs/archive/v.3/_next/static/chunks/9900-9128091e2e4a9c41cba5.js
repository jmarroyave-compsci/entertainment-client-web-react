"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9900],{91200:function(t,e,n){n.d(e,{Ez:function(){return p},AK:function(){return h},iY:function(){return m}});var r,a,i,o=n(30168),c=n(4942),s=n(54397),u=n(42535);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=function(t){return t?t.replace(/_/g," "):"-"},p=function(t){var e=t.page,n=t.op,r=t.qryName,a=void 0===r?"":r;return(0,u.h)(g({qryName:a}),{page:e,field:JSON.stringify(n)},(function(t){return d(d({},t),{},{data:t.data.podcasts.map((function(t){return d(d({},t),{},{author:f(t.author)})}))})}))},g=function(t){var e=t.qryName;return(0,s.Ps)(r||(r=(0,o.Z)(["\n  query podcasts_","($page: Int, $field: String)\n  {\n    podcasts(page: $page, field: $field){\n      id: _id\n      title\n      author\n    }\n  }\n"])),e)},h=function(){return(0,u.h)(v(),{},(function(t){return d(d({},t),{},{data:t.data.dashboardPodcasts})}))},v=function(){return(0,s.Ps)(a||(a=(0,o.Z)(["\nquery dashboard_podcasts\n  {\n    dashboardPodcasts {\n      total\n      author\n      countries\n      languages\n      category\n      subcategory\n    }\n  }\n"])))},m=function(t){var e=t.id,n=t.qryName,r=void 0===n?"":n;return(0,u.h)(j({qryName:r}),{id:e},(function(t){return d(d({},t),{},{data:d(d({},t.data.podcast),{},{author:f(t.data.podcast.author)})})}))},j=function(t){t.qryName;return(0,s.Ps)(i||(i=(0,o.Z)(["\nquery podcast($id: String!)\n{\n  podcast(id: $id){\n    id: _id \n    title\n    subtitle\n    feedUrl\n    description\n    summary\n    author\n    link\n    language\n    image{\n      poster\n    }\n    category\n    subcategory\n    createdDate\n  }\n}\n"])))}},82356:function(t,e,n){n(67294);var r=n(58862),a=n(27159),i=n(85893);e.Z=function(t){var e=t.data,n=t.value,o=t.title,c=t.format,s=t.sufix;if(!(e=e||n)||null==e||0==e.length||"N/A"==e)return null;switch(n=e,c){case"date":n=(0,i.jsx)(a.Z,{value:e,format:"DD/MM/YYYY"});break;case"year":n=(0,i.jsx)(a.Z,{value:e,format:"YYYY"})}return(0,i.jsxs)("div",{children:[(0,i.jsx)(r.Qy,{children:o}),(0,i.jsxs)(r.GH,{children:[n," ",s]})]})}},12868:function(t,e,n){n(67294),n(52651),n(23275);var r=n(7945),a=n(74035),i=n(85893);function o(t){var e=t.src,n=t.height,a=t.width;return(0,i.jsx)(r.Z,{src:e,width:a,height:n})}e.Z=function(t){var e=t.src;return t.loading,(0,i.jsx)(a.RQ,{children:(0,i.jsx)("div",{style:{height:300,width:"100%",backgroundColor:"#333",overflow:"hidden"},children:(0,i.jsx)(o,{src:e,height:300,width:250})})})}},28388:function(t,e,n){n.d(e,{Z:function(){return s}});n(67294);var r=n(14308),a=n(48724),i=n(74035),o=n(58862),c=n(85893);function s(t){var e,n,s=t.data,u=t.website;return s&&(u||null!==(e=s.id)&&void 0!==e&&e.startsWith("tt")||null!==(n=s.id)&&void 0!==n&&n.startsWith("nm")||s.wiki)?(0,c.jsxs)(i.RQ,{children:[(0,c.jsx)(o.DK,{children:"More information"}),(0,c.jsxs)(r.Z,{direction:"row",children:[u&&(0,c.jsx)("a",{href:u,children:(0,c.jsx)(a.Z,{text:"website"})}),s.id&&s.id.startsWith("tt")&&(0,c.jsx)("a",{href:"https://www.imdb.com/title/".concat(s.id,"/"),children:(0,c.jsx)(a.Z,{text:"IMDB"})}),s.id&&s.id.startsWith("nm")&&(0,c.jsx)("a",{href:"https://www.imdb.com/name/".concat(s.id,"/"),children:(0,c.jsx)(a.Z,{text:"IMDB"})}),s.wiki&&(0,c.jsx)("a",{href:"https://wikipedia.com/wiki/".concat(s.wiki.replace(/ /g,"_")),children:(0,c.jsx)(a.Z,{text:"wikipedia"})})]})]}):(0,c.jsx)("div",{})}},29110:function(t,e,n){n.d(e,{Z:function(){return o}});n(67294);var r=n(74035),a=n(58862),i=n(85893);function o(t){var e=t.title,n=t.text;return n?(0,i.jsxs)(r.RQ,{children:[e&&(0,i.jsx)(a.DK,{children:e}),(0,i.jsx)(a.nv,{children:n})]}):(0,i.jsx)("div",{})}},59067:function(t,e,n){n.d(e,{Z:function(){return u}});n(67294);var r=n(74035),a=n(29602),i=n(85893),o=(0,a.ZP)("h2")({fontSize:"2.5rem",lineHeight:"2.75rem",padding:"0",margin:"0"}),c=(0,a.ZP)("div")({margin:0,padding:0,fontSize:"0.9rem",lineHeight:"1.3rem"}),s=(0,a.ZP)("div")({margin:0,padding:0,fontSize:"0.8rem",lineHeight:"1.2rem",fontWeight:500});function u(t){var e=t.text,n=t.subText1,a=t.subText2,u=t.subText,l=t.link;u=u||n;var d=(0,i.jsx)(o,{children:e});return l&&(d=(0,i.jsx)("a",{href:l,children:d})),(0,i.jsxs)(r.RQ,{children:[d,u&&(0,i.jsx)(c,{children:u}),a&&(0,i.jsxs)(s,{children:["by ",a]})]})}},50789:function(t,e,n){n.d(e,{Z:function(){return f}});n(4942);var r=n(67294),a=n(52651),i=n(23275),o=n(36501),c=n(14308),s=n(28973),u=n(62448),l=n(74035),d=(n(12666),n(85893));"opacity ".concat(1300,"ms ease-in-out");function f(t){t.animations;var e=t.data,n=t.loading,o=t.url,c=t.skeleton,s=t.item,f=t.onPageChange,g=t.page,h=t.pageSize,v=t.xs,m=void 0===v?12:v,j=t.sm,x=void 0===j?6:j,b=t.md,y=void 0===b?6:b,O=t.lg,Z=void 0===O?4:O,w=t.noPaging,P=void 0!==w&&w,D=t.noPadding,k=(0,r.useRef)(null);e=e&&e.length>0?e:[1,2,3,4,5,6];var C=function(t){return D?t:(0,d.jsx)(l.ck,{children:t})},E=function(t){return(0,d.jsx)(i.Z,{xs:m,sm:x,md:y,lg:Z,children:C(n?c||(0,d.jsx)(p,{}):s?s(t.data):null)})},S=(0,r.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{ref:k}),(0,d.jsx)(a.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:e.map((function(e,n){return(0,d.jsx)(r.Fragment,{children:(0,d.jsx)(E,{data:e,params:t},n)},n)}))})]})}),[e]);return P||(S=(0,d.jsx)(u.Z,{pageSize:h,data:e,url:o,onPageChange:function(t){k.current.scrollIntoView(!1),f&&f(t)},page:g,loading:n,children:S})),(0,d.jsx)(l.RQ,{children:S})}function p(){return(0,d.jsx)(o.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,d.jsxs)(c.Z,{spacing:1,children:[(0,d.jsx)(s.Z,{variant:"text",width:"80%"}),(0,d.jsx)(s.Z,{variant:"rectangular",height:100}),(0,d.jsx)(s.Z,{variant:"text",width:"50%"}),(0,d.jsx)(s.Z,{variant:"text",width:"40%"}),(0,d.jsx)(s.Z,{variant:"text",width:"70%"})]})})}},62448:function(t,e,n){n.d(e,{Z:function(){return s}});n(67294);var r=n(14308),a=n(72642),i=n(74035),o=n(58862),c=n(85893);function s(t){var e=t||{},n=e.children,s=e.loading,u=e.data,l=e.url,d=e.skeleton,f=e.onPageChange,p=e.page,g=e.pageSize,h=void 0===g?10:g,v=p?parseInt(p):1,m=function(t){if(f&&f(t),l){var e="".concat(l,"/").concat(t);router.push(e)}},j=u&&u.length<h,x=1==v;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.RQ,{children:u&&u.length>0?(0,c.jsxs)(r.Z,{spacing:2,children:[n,(0,c.jsxs)(r.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,c.jsx)(a.Z,{variant:"outlined",disabled:x,onClick:function(){return m(v-1)},children:"Back"}),(0,c.jsx)(a.Z,{variant:"outlined",disabled:j,onClick:function(){return m(v+1)},children:"Next"})]})]}):(0,c.jsx)(o.Dx,{children:s?d||"loading":"No results"})})})}},27159:function(t,e,n){var r=n(15671),a=n(43144),i=n(60136),o=n(6215),c=n(61120),s=n(67294),u=n(53651),l=n(65710),d=n(85893);function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,c.Z)(t);if(e){var a=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var p=function(t){(0,i.Z)(n,t);var e=f(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"getDate",value:function(t){if(!t||null==t||""===t||0==t.length)return null;if(t instanceof Date)return t;try{var e=Number(t);return Number.isInteger(e)?new Date(e):new Date(t)}catch(n){return null}}},{key:"toString",value:function(t,e,n){switch(n){case"ago":return(0,u.Z)(e,new Date);case"DD/MM/YYYY":return(0,l.Z)(e,"dd/MM/yyyy");case"YYYY":return e.getFullYear();default:return(0,l.Z)(e,n)}}},{key:"render",value:function(){var t=this.props,e=t.lang,n=t.value,r=t.className,a=t.format;e=e||"en",a=a||"ago";var i=this.getDate(n);if(null==i)return(0,d.jsx)("span",{});var o=this.toString(e,i,a);return(0,d.jsx)("span",{className:r,children:o})}}]),n}(s.Component);e.Z=p},7945:function(t,e,n){n(67294);var r=n(1216),a=n(29602),i=n(20883),o=n(85893),c="".concat(i.Z.APP.BASE_PATH).concat(i.Z.DEFAULTS.IMAGE_PLACEHOLDER),s=function(t){return t.target.src=c},u=(0,a.ZP)("div")({position:"relative",overflow:"hidden",backgroundColor:"#efefef",backgroundImage:"url('".concat(c,"')"),backgroundPosition:"center center",width:"fit-content",height:"fit-content",padding:0,margin:0});e.Z=function(t){var e,n=t.src,a=t.lazy,c=(t.preload,t.width),l=t.height,d=(t.style,t.layout);n=null!==(e=n)&&void 0!==e&&e.startsWith("/")?"".concat(i.Z.APP.BASE_PATH).concat(n):n,c=c||"100%",l=l||null;var f=(0,o.jsx)("img",{src:n,layout:d,width:c,height:l,onError:s});return a&&(f=(0,o.jsx)(r.ZP,{only:!0,children:f})),(0,o.jsx)(u,{children:f})}},48724:function(t,e,n){n.d(e,{Z:function(){return o}});n(67294);var r=n(29602),a=n(90461),i=n(85893);function o(t){var e=t.text,n=t.color,r=t.variant,o=t.onClick;return(0,i.jsx)(c,{children:(0,i.jsx)(a.Z,{variant:r,color:n,size:"small",label:e,onClick:o})})}o.defaultProps={onClick:null,text:"",color:"primary",variant:"default"};var c=(0,r.ZP)("div")({display:"inline-block",margin:"0",marginRight:"0.25rem",marginBottom:"0.25rem"})},55619:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(4942),a=n(67294),i=n(11163),o=n(39704),c=n(19016),s=n(25810),u=n(14763),l=n(50789),d=(n(14308),n(529)),f=n(85893);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t){var e,n,r,u,l,d,p,h,m=(0,o.I0)(),j=(0,i.useRouter)(),x=t.config,b=(0,a.useState)(""),y=b[0],O=b[1],Z=(0,o.v9)((function(t){return t[x.automata.name]})),w=null!==(e=t.params.render)&&void 0!==e?e:null,P=g(g({},t.params),{},{renderer:null!==(n=t.params.renderer)&&void 0!==n?n:w});Z=t.data?{data:t.data,params:{page:t.params.page}}:Z;(0,a.useEffect)((function(){Z&&!t.data&&m((0,c.K4)({status:Z.loading,sender:x.automata.name}))}),[Z]),(0,a.useEffect)((function(){P.breadcrumbs&&m((0,c.YA)({breadcrumbs:"function"===typeof P.breadcrumbs?P.breadcrumbs(Z):P.breadcrumbs}))}),[P.breadcrumbs,Z]);var D=function(e){t.fetch&&(Z&&(e=g(g({},Z.params),e)),t.data?t.fetch(e):m(t.fetch(e)))};return(0,a.useEffect)((function(){null!==j&&void 0!==j&&j.isReady&&("banner"!==w||x.banner.showData)&&(t.data||D(P))}),[null===j||void 0===j?void 0:j.isReady,P.id]),w&&"grid"!=w?((0,a.useEffect)((function(){""!=y&&m((0,c.PV)({message:y}))}),[y]),(0,f.jsx)(v,{config:t.config,render:w,state:Z,loading:!(null!==j&&void 0!==j&&j.isReady)||!Z||null===Z||(null===(r=Z)||void 0===r?void 0:r.loading),forceLoading:"detail"===w&&0==(null===(u=Z)||void 0===u||null===(l=u.data)||void 0===l?void 0:l.length)||"list"==w&&0===(null===(d=Z)||void 0===d||null===(p=d.data)||void 0===p?void 0:p.length)||null!=(null===(h=Z)||void 0===h?void 0:h.error),setErrorMessage:O,fetch:D,item:t.item,customDescription:t.customDescription,customTitle:t.customTitle,mainCol:t.mainCol||t.dashboard||t.detail,skeleton:t.skeleton,params:P})):(0,f.jsx)(s.C,{from:x.page.title,data:"render property wasn't set"})}function v(t){(0,o.I0)();var e,n,r=t.config,a=t.item,i=t.mainCol,c=t.state,l=t.render,d=t.params,p=t.fetch,h=t.setErrorMessage,v=t.loading||t.forceLoading;v=!1!==v;var x=r.page.title;if(0==t.loading&&c){var b,y;if("detail"===l)null!==c.data&&0!=(null===(b=c.data)||void 0===b?void 0:b.length)||(h("this is a demo version, this record was filtered out to reduce the database size"),v=!0);if("list"===l)0===(null===(y=c.data)||void 0===y?void 0:y.length)&&(h("data not found"),v=!0);c.error&&(h(c.error.message),v=!0)}var O=(0,f.jsx)(m,g(g({},t),{},{loading:v}));return(0,f.jsxs)(f.Fragment,{children:[c&&c.error&&(0,f.jsx)(s.C,{from:x,data:c.error.message}),"banner"===l&&O,"list"===l&&(0,f.jsx)(u.Z,g(g({},t),{},{id:r.automata.name,banner:O,mainCol:v&&t.skeleton?t.skeleton:(0,f.jsx)(j,g({},t))})),"page"===l&&(0,f.jsx)(u.Z,g(g({},t),{},{id:r.automata.name,banner:O,mainCol:i?(0,f.jsx)(f.Fragment,{children:v&&t.skeleton?t.skeleton:i({data:null!==(e=null===c||void 0===c?void 0:c.data)&&void 0!==e?e:null,loading:v,params:d,fetch:p,item:a})}):(0,f.jsx)(s.C,{from:x,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===l&&(0,f.jsx)(u.Z,g(g({},t),{},{id:r.automata.name,mainCol:i?(0,f.jsx)(f.Fragment,{children:v&&t.skeleton?t.skeleton:i({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:v})}):(0,f.jsx)(s.C,{from:x,data:"main component missing, not found in mainCol or detail prop"})}))]})}function m(t){var e,n,r,a,i,o,c,s,u,l,p=t.config,g=t.state,h=t.loading,v=null!==(e=null===(n=p.banner)||void 0===n?void 0:n.showData)&&void 0!==e&&e,m=t.customTitle?"function"===typeof t.customTitle?g?t.customTitle(null!==(r=null===g||void 0===g?void 0:g.params)&&void 0!==r?r:{}):"":t.customTitle:null!==(a=null===(i=p.page)||void 0===i?void 0:i.title)&&void 0!==a?a:"NO TITLE",j=t.customDescription?"function"===typeof t.customDescription?g?t.customDescription(null!==(o=null===g||void 0===g?void 0:g.params)&&void 0!==o?o:{}):"":t.customDescription:null!==(c=null===(s=p.page)||void 0===s?void 0:s.description)&&void 0!==c?c:"NO DESCRIPTION",x=null===(u=p.page)||void 0===u?void 0:u.url;return(0,f.jsx)(d.Z,{renderer:p.banner.renderer?p.banner.renderer:"carousel",showData:v,loading:h,title:m,description:j,data:null===g||void 0===g?void 0:g.data,item:t.item,actions:[{url:x(null!==(l=null===g||void 0===g?void 0:g.params)&&void 0!==l?l:{}),title:"See all"}],hero:"banner"!==t.render})}function j(t){var e,n,r=t.loading,a=t.state,i=t.fetch,o=t.item;return(0,f.jsx)(l.Z,{loading:r,page:null!==(e=null===a||void 0===a?void 0:a.params.page)&&void 0!==e?e:null,data:null!==(n=null===a||void 0===a?void 0:a.data)&&void 0!==n?n:null,onPageChange:function(t){return i({page:t})},item:o})}},49900:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});n(67294);var r=n(11163),a=n(4942),i=n(55619),o={automata:{name:"page_podcast"},page:{url:function(t){var e=t.id;return"/podcasts/".concat(e)}}},c=(n(70357),n(52651),n(23275),n(27159),n(48724)),s=n(12868),u=n(59067),l=n(14308),d=n(29602),f=n(85893);(0,d.ZP)("h1")({margin:0});function p(t){var e=t.data;return e?(0,f.jsx)(l.Z,{direction:"row",children:(0,f.jsx)(c.Z,{text:e})}):(0,f.jsx)("div",{})}var g=n(29110),h=n(74035),v=n(58862),m=n(82356),j=n(28388);function x(t){var e=t.data;t.loading;return e=e||{},(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(s.Z,{src:e.image?e.image.poster:null}),(0,f.jsx)(p,{data:e.category}),(0,f.jsx)(u.Z,{text:e.title,subText1:e.subtitle,subText2:e.author,link:e.link}),(0,f.jsx)(g.Z,{text:e.summary}),(0,f.jsxs)(h.RQ,{children:[(0,f.jsx)(v.DK,{children:"general information"}),(0,f.jsx)(m.Z,{title:"Created",data:e.createdDate,format:"date"}),(0,f.jsx)(m.Z,{title:"Language",data:e.language}),(0,f.jsx)(m.Z,{title:"Country",data:e.country})]}),(0,f.jsx)(j.Z,{website:e.link,data:e})]})}var b=n(28973);function y(t){return(0,f.jsx)(h.X,{children:(0,f.jsxs)(l.Z,{spacing:1,children:[(0,f.jsx)(b.Z,{variant:"rectangular",height:300}),(0,f.jsx)(b.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,f.jsx)(b.Z,{variant:"text",style:{width:"40%"}}),(0,f.jsx)(b.Z,{variant:"text",style:{width:"25%"}}),(0,f.jsx)(b.Z,{variant:"text",style:{width:"25%"}}),(0,f.jsx)(b.Z,{variant:"text",style:{width:"25%"}})]})})}var O,Z=n(15861),w=n(87757),P=n.n(w),D=n(24268),k=n(80105),C=n(91200);function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var R=o.automata.name,Y=(0,D.hg)("".concat(R,"/fetchData"),function(){var t=(0,Z.Z)(P().mark((function t(e,n){return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.dispatch(T(e)),t.next=3,C.iY({id:e.id});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),N=(0,D.oM)({name:R,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(t,e){t.params=S(S({},t.params),e.payload),"banner"!=t.params.renderer&&1!=t.params.page&&r.default.push("".concat(o.page.url(t.params)),null,{shallow:!0})}},extraReducers:(O={},(0,a.Z)(O,Y.pending,(function(t,e){t.data=null,t.loading=!0,t.error=""})),(0,a.Z)(O,Y.fulfilled,(function(t,e){var n=e.payload,r=n.loading,a=n.error,i=n.data;t.data=i,t.loading=r,t.error=a})),(0,a.Z)(O,Y.rejected,(function(t,e){var n=e.error;t.data=[],t.loading=!1,t.error=n})),O)});k.h.reducerManager.add(R,N.reducer);N.reducer;var T=N.actions.setParams;function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t){return(0,f.jsx)(i.Z,{params:_(_({},t),{},{breadcrumbs:function(e){var n,r;return"".concat(t.breadcrumbs,"/").concat(null!==(n=null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.title)&&void 0!==n?n:"loading")}}),config:o,fetch:function(t){return Y(_({},t))},detail:function(t){return(0,f.jsx)(x,{data:t.data})},skeleton:(0,f.jsx)(y,{})})}function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var z=function(t){return(0,f.jsx)(I,q(q({},t),{},{render:"detail"}))},B=function(t){var e,n,a=(0,r.useRouter)(),i=t.id?t.id:null!==(e=null===(n=a.query)||void 0===n?void 0:n.podcast)&&void 0!==e?e:"";return(0,f.jsx)(z,{breadcrumbs:"/podcasts",id:i})}}}]);