(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6179],{2093:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(4942),o=(n(67294),n(11163)),i=n(55619),a={automata:{name:"about-project-blog"},page:{title:"the Log",description:"some lessons learned while programming this project",url:function(){return"/about/project/log"}},banner:{showData:!0}},c=(n(43332),n(89260)),s=n(58862),l=n(85893);function u(e){e.id;var t=e.title,n=(e.thumbnail,e.description,e.slug),r=e.sprint,o=e.day;return(0,l.jsx)(c.Z,{box:!0,href:"".concat(a.page.url(),"/posts/").concat(n),children:(0,l.jsxs)(s.Zh,{children:[(0,l.jsx)(s.x4,{children:"sprint ".concat(r," - day ").concat(o).toUpperCase()}),(0,l.jsx)(s.nv,{children:t})]})})}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=(0,o.useRouter)();return(0,l.jsx)(i.Z,{config:a,data:e.data,item:function(e){return(0,l.jsx)(u,p({},e))},params:p(p({},e),{},{loading:!1}),fetch:function(n){"banner"!==e.render&&t.push("".concat(a.page.url(),"/").concat(n.page))}})}},50789:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(4942),o=n(67294),i=n(52651),a=n(23275),c=n(79895),s=n(14308),l=n(28973),u=n(62448),d=n(50367),p=n(12666),f=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},m={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function h(e){var t=e.animations,n=void 0===t||t,r=e.data,c=e.loading,s=e.url,l=e.skeleton,g=e.item,h=e.onPageChange,O=e.page,y=e.pageSize,x=e.xs,P=void 0===x?12:x,w=e.sm,Z=void 0===w?6:w,D=e.md,E=void 0===D?6:D,C=e.lg,k=void 0===C?4:C,S=e.noPaging,_=void 0!==S&&S,R=e.noPadding;r=r&&r.length>0?r:[1,2,3,4,5,6];var T=function(e){return R?e:(0,f.jsx)(d.ck,{children:e})},A=function(e){return n?(0,f.jsx)(p.ZP,{in:!0,timeout:1300,children:function(t){return(0,f.jsx)("div",{style:j(j({},b),m[t]),children:e})}}):e},N=function(e){return(0,f.jsx)(a.Z,{xs:P,sm:Z,md:E,lg:k,children:T(c?l||(0,f.jsx)(v,{}):g?A(g(e.data)):null)})},I=(0,f.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:r.map((function(t,n){return(0,f.jsx)(o.Fragment,{children:(0,f.jsx)(N,{data:t,params:e})},n)}))});return _||(I=(0,f.jsx)(u.Z,{pageSize:y,data:r,url:s,onPageChange:h,page:O,loading:c,children:I})),(0,f.jsx)(d.RQ,{children:I})}function v(){return(0,f.jsx)(c.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,f.jsxs)(s.Z,{spacing:1,children:[(0,f.jsx)(l.Z,{variant:"text",width:"80%"}),(0,f.jsx)(l.Z,{variant:"rectangular",height:240}),(0,f.jsx)(l.Z,{variant:"text"})]})})}},62448:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});n(67294);var r=n(11163),o=n(14308),i=n(72642),a=n(50367),c=n(58862),s=n(85893);function l(e){var t=(0,r.useRouter)(),n=e||{},l=n.children,u=n.route,d=n.loading,p=n.data,f=n.url,g=n.skeleton,j=n.onPageChange,b=n.page,m=n.pageSize,h=void 0===m?10:m;b=(b=b||(u&&u.page?u.page:null))?parseInt(b):1;var v=function(e){if(j)j(e);else if(f){window.scrollTo(0,0);var n="".concat(f,"/").concat(e);t.push(n)}},O=p&&p.length<h,y=1==b;return(0,s.jsx)(a.RQ,{children:p&&p.length>0?(0,s.jsxs)(o.Z,{spacing:2,children:[l,(0,s.jsxs)(o.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,s.jsx)(i.Z,{variant:"outlined",disabled:y,onClick:function(){return v(b-1)},children:"Back"}),(0,s.jsx)(i.Z,{variant:"outlined",disabled:O,onClick:function(){return v(b+1)},children:"Next"})]})]}):(0,s.jsx)(c.Dx,{children:d?g||"loading":"No results"})})}},43332:function(e,t,n){"use strict";n(67294);var r=n(65295),o=n(18515),i=n(42643),a=n(54962),c=n(49161),s=n(2658),l=n(360),u=n(9092),d=n(6447),p=n(27054),f=n(85893),g=(0,p.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),j="".concat(u.Z.APP.BASE_PATH).concat(u.Z.DEFAULTS.IMAGE_PLACEHOLDER),b=function(e){return e.target.src=j};t.Z=function(e){var t,n=g(),p=e.title,j=e.subtitle,m=e.text,h=e.image,v=e.imageHeight,O=void 0===v?180:v,y=e.noImage,x=e.actions,P=0;j=j||"";return y=!!y,h=h||u.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,f.jsxs)(r.Z,{style:{flexGrow:1,width:"100%"},children:[(0,f.jsx)(o.Z,{sx:{width:"100%"},classes:{content:n.headerContent,root:n.headerRoot},title:(0,f.jsx)(d.ZP,{title:p||"",placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,f.jsx)(s.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:p})})}),subheader:j}),!y&&(0,f.jsx)(a.Z,{height:O||null,image:null!==(t=h)&&void 0!==t&&t.startsWith("/")?"".concat(u.Z.APP.BASE_PATH).concat(h):h,component:"img",onError:b}),m&&(0,f.jsx)(i.Z,{children:(0,l.HD)(m)?(0,f.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:m}):m}),x&&x.length>0&&(0,f.jsx)(c.Z,{children:x.map((function(e){return(0,f.jsx)("div",{children:e},P++)}))})]})}},55619:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(4942),o=n(67294),i=n(11163),a=n(93942),c=n(19016),s=n(25810),l=n(14763),u=n(50789),d=(n(14308),n(529)),p=(n(87863),n(85893));function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t,n,r,l,u=(0,a.I0)(),d=(0,i.useRouter)(),f=e.config,j=(0,o.useState)(""),m=j[0],h=j[1],v=(0,a.v9)((function(e){return e[f.automata.name]})),O=null!==(t=e.params.render)&&void 0!==t?t:null,y=g(g({},e.params),{},{renderer:null!==(n=e.params.renderer)&&void 0!==n?n:O});v=e.data?{data:e.data,params:{page:e.params.page}}:v;(0,o.useEffect)((function(){v&&u((0,c.K4)({status:v.loading,sender:f.automata.name}))}),[v]),(0,o.useEffect)((function(){y.breadcrumbs&&u((0,c.YA)({breadcrumbs:"function"===typeof y.breadcrumbs?y.breadcrumbs(v):y.breadcrumbs}))}),[y.breadcrumbs,v]);var x=function(t){e.fetch&&(e.data?e.fetch(g({},t)):u(e.fetch(g({},t))))};return(0,o.useEffect)((function(){null!==d&&void 0!==d&&d.isReady&&("banner"!==O||f.banner.showData)&&x(y)}),[null===d||void 0===d?void 0:d.isReady,y.id]),O&&"grid"!=O?((0,o.useEffect)((function(){""!=m&&u((0,c.PV)({message:m}))}),[m]),(0,p.jsx)(b,{config:e.config,render:O,state:v,loading:!(null!==d&&void 0!==d&&d.isReady)||!v||"detail"===O&&null==v.data||"list"==O&&0===(null===(r=v.data)||void 0===r?void 0:r.length)||v.loading||(null===(l=v)||void 0===l?void 0:l.error),setErrorMessage:h,fetch:x,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:y})):(0,p.jsx)(s.C,{from:f.page.title,data:"render property wasn't set"})}function b(e){(0,a.I0)();var t,n,r=e.config,o=e.item,i=e.mainCol,c=e.state,u=e.render,d=e.params,f=e.fetch,j=e.setErrorMessage,b=e.loading,v=r.page.title;if(!b&&c){var O;if("detail"===u&&null===c.data&&(j("this is a demo version, this record was filtered out to reduce the database size"),b=!0),"list"===u)0===(null===(O=c.data)||void 0===O?void 0:O.length)&&(j("data not found"),b=!0);c.error&&(j(c.error.message),b=!0)}var y=(0,p.jsx)(m,g({},e));return(0,p.jsxs)(p.Fragment,{children:[c&&c.error&&(0,p.jsx)(s.C,{from:v,data:c.error.message}),"banner"===u&&y,"list"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,banner:y,mainCol:b&&e.skeleton?e.skeleton:(0,p.jsx)(h,g({},e))})),"page"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,banner:y,mainCol:i?(0,p.jsx)(p.Fragment,{children:b&&e.skeleton?e.skeleton:i({data:null!==(t=null===c||void 0===c?void 0:c.data)&&void 0!==t?t:null,loading:b,params:d,fetch:f,item:o})}):(0,p.jsx)(s.C,{from:v,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,mainCol:i?(0,p.jsx)(p.Fragment,{children:b&&e.skeleton?e.skeleton:i({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:b})}):(0,p.jsx)(s.C,{from:v,data:"main component missing, not found in mainCol or detail prop"})}))]})}function m(e){var t,n,r,o,i,a,c,s,l=e.config,u=e.state,f=null!==(t=null===(n=l.banner)||void 0===n?void 0:n.showData)&&void 0!==t&&t,g=e.customTitle?e.customTitle:null!==(r=null===(o=l.page)||void 0===o?void 0:o.title)&&void 0!==r?r:"NO TITLE",j=e.customDescription?e.customDescription:null!==(i=null===(a=l.page)||void 0===a?void 0:a.description)&&void 0!==i?i:"NO DESCRIPTION",b=null===(c=l.page)||void 0===c?void 0:c.url;return(0,p.jsx)(d.Z,{showData:f,loading:e.loading,title:g,description:j,data:null===u||void 0===u?void 0:u.data,item:e.item,actions:[{url:b(null!==(s=null===u||void 0===u?void 0:u.params)&&void 0!==s?s:{}),title:"See all"}],hero:"banner"!==e.render})}function h(e){var t,n,r=e.loading,o=e.state,i=e.fetch,a=e.item;return(0,p.jsx)(u.Z,{loading:r,page:null!==(t=null===o||void 0===o?void 0:o.params.page)&&void 0!==t?t:null,data:null!==(n=null===o||void 0===o?void 0:o.data)&&void 0!==n?n:null,onPageChange:function(e){i(g(g({},o.params),{},{page:e}))},item:a})}},24324:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return g}});var r=n(4942),o=n(70885),i=(n(67294),n(2093)),a=n(85893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){return(0,a.jsx)(i.Z,s(s({},e),{},{render:"list"}))},u=n(11163);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=!0,g=function(e){var t=(0,u.useRouter)(),n=t&&t.query&&t.query.index?t.query.index:[],r=(0,o.Z)(n,1)[0];return r=r?parseInt(r):1,(0,a.jsx)(l,p(p({},e),{},{page:r,breadcrumbs:"/about/project/log"}))}},96507:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/log/[[...index]]",function(){return n(24324)}])},87863:function(){}},function(e){e.O(0,[6499,5685,3128,4197,9774,2888,179],(function(){return t=96507,e(e.s=t);var t}));var t=e.O();_N_E=t}]);