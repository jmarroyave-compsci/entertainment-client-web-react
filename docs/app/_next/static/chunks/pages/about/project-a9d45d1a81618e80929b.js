(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9800],{98543:function(e,t,r){"use strict";var n=r(4942),o=(r(67294),r(2093)),i=r(85893);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){return(0,i.jsx)(o.Z,c(c({},e),{},{render:"banner"}))}},2093:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(4942),o=(r(67294),r(11163)),i=r(55619),a={automata:{name:"about-project-blog"},page:{title:"the Log",description:"some lessons learned while programming this project",url:function(){return"/about/project/log"}},banner:{showData:!0}},c=(r(43332),r(89260)),s=r(58862),u=r(85893);function l(e){e.id;var t=e.title,r=(e.thumbnail,e.description,e.slug),n=e.sprint,o=e.day;return(0,u.jsx)(c.Z,{box:!0,href:"".concat(a.page.url(),"/posts/").concat(r),children:(0,u.jsxs)(s.Zh,{children:[(0,u.jsx)(s.x4,{children:"sprint ".concat(n," - day ").concat(o).toUpperCase()}),(0,u.jsx)(s.nv,{children:t})]})})}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=(0,o.useRouter)();return(0,u.jsx)(i.Z,{config:a,data:e.data,item:function(e){return(0,u.jsx)(l,p({},e))},params:p(p({},e),{},{loading:!1}),fetch:function(r){"banner"!==e.render&&t.push("".concat(a.page.url(),"/").concat(r.page))}})}},6110:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(4942),o=r(67294),i=r(55619),a={automata:{name:"about-project-sitemap"},page:{title:"Sitemap",description:"are you lost or looking for something?",url:function(){return"/about/project/sitemap"}},banner:{showData:!1}},c=r(14308),s=r(9092),u=JSON.parse('{"home":{"stories":{},"movies":{"____tt0454876":{},"festivals":{"____mf00001":{}},"stories":{"actors":{},"awards":{"____award=mf00001&&year=2015":{}},"directors":{},"remakes":{},"writers":{}}},"tv-shows":{"____tt0454876":{},"stories":{"actors":{},"directors":{},"remakes":{},"writers":{}}},"video-games":{"stories":{},"____tt0022215":{}},"podcasts":{"stories":{},"____0002da5f-49a2-31ba-b44c-cdeabdf113cb":{}},"people":{"stories":{},"____nm0000158":{}},"search":{},"about":{"data":{},"project":{"log":{"____posts/7-7-v-1-1":{}},"roadmap":{},"sitemap":{}},"tech":{},"timeline":{}}}}'),l=JSON.parse('{"home":{"stories":{},"movies":{"____[movie]?movie=tt0454876":{},"festivals":{"____[festival]?festival=mf00001":{}},"stories":{"actors":{},"awards":{"____[award]?award=mf00001&&year=2015":{}},"directors":{},"remakes":{},"writers":{}}},"tv-shows":{"____[tv-show]?tv-show=tt0454876":{}},"video-games":{"____[video-game]?video-game=tt0022215":{}},"podcasts":{"____[podcast]?podcast=0002da5f-49a2-31ba-b44c-cdeabdf113cb":{}},"people":{"____[person]?person=nm0000199":{}},"search":{},"about":{"data":{},"project":{"log":{"____posts/7-7-v-1-1":{}},"roadmap":{},"sitemap":{}},"tech":{},"timeline":{}}}}'),d=r(89757),p=r(95899),f=r(23508),b=r(26215),j=r(89260),g=r(85893);function O(e){var t=(0,o.useRef)([]),r=s.Z.TEST?l:u;return(0,g.jsx)(c.Z,{children:(0,g.jsx)(d.Z,{id:"sitemap","aria-label":"file system navigator",defaultCollapseIcon:(0,g.jsx)(f.Z,{}),defaultExpandIcon:(0,g.jsx)(b.Z,{}),sx:{flexGrow:1},expanded:t.current,children:m(t.current,"home","/",r.home)})})}function m(e,t,r,n){var o=e.length.toString();return e.push(o),(0,g.jsx)(p.Z,{nodeId:o,label:(0,g.jsx)(j.Z,{href:r,children:t}),children:Object.keys(n).map((function(t){if(!t.startsWith("____"))return m(e,t,"".concat(r).concat(t,"/"),n[t])}))},o)}var h=function(e){return(0,g.jsx)(c.Z,{children:(0,g.jsx)(O,{})})};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){return(0,g.jsx)(i.Z,{params:e,config:a,mainCol:function(e){return(0,g.jsx)(h,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}},55861:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(4942),o=(r(67294),r(55619)),i={automata:{name:"about-project"},page:{title:"Project",description:"The story of this project",url:function(){return"/about/project"}},banner:{showData:!1}},a=r(14308),c=r(40915),s=r(6110),u=r(85893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){return(0,u.jsx)(s.Z,d(d({},e),{},{render:"banner"}))},f=r(66093);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){return(0,u.jsx)(f.Z,j(j({},e),{},{render:"banner"}))},O=r(98543),m=function(e){return(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(c.Z,{children:(0,u.jsx)(O.Z,{data:e.blog})}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(g,{})}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(p,{})})]})};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){return(0,u.jsx)(o.Z,{params:e,config:i,mainCol:function(e){return(0,u.jsx)(m,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}},50789:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(4942),o=r(67294),i=r(52651),a=r(23275),c=r(79895),s=r(14308),u=r(28973),l=r(62448),d=r(50367),p=r(12666),f=r(85893);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},O={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function m(e){var t=e.animations,r=void 0===t||t,n=e.data,c=e.loading,s=e.url,u=e.skeleton,b=e.item,m=e.onPageChange,v=e.page,y=e.xs,w=void 0===y?12:y,P=e.sm,x=void 0===P?6:P,_=e.md,Z=void 0===_?6:_,D=e.lg,E=void 0===D?4:D,k=e.noPaging,S=void 0!==k&&k,C=e.noPadding;n=n&&n.length>0?n:[1,2,3,4,5,6];var T=function(e){return C?e:(0,f.jsx)(d.ck,{children:e})},R=function(e){return r?(0,f.jsx)(p.ZP,{in:!0,timeout:1300,children:function(t){return(0,f.jsx)("div",{style:j(j({},g),O[t]),children:e})}}):e},A=function(e){return(0,f.jsx)(a.Z,{xs:w,sm:x,md:Z,lg:E,children:T(c?u||(0,f.jsx)(h,{}):b?R(b(e.data)):null)})},N=(0,f.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:n.map((function(t,r){return(0,f.jsx)(o.Fragment,{children:(0,f.jsx)(A,{data:t,params:e})},r)}))});return S||(N=(0,f.jsx)(l.Z,{data:n,url:s,onPageChange:m,page:v,loading:c,children:N})),(0,f.jsx)(d.RQ,{children:N})}function h(){return(0,f.jsx)(c.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,f.jsxs)(s.Z,{spacing:1,children:[(0,f.jsx)(u.Z,{variant:"text",width:"80%"}),(0,f.jsx)(u.Z,{variant:"rectangular",height:240}),(0,f.jsx)(u.Z,{variant:"text"})]})})}},62448:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});r(67294);var n=r(11163),o=r(14308),i=r(72642),a=r(50367),c=r(58862),s=r(85893);function u(e){var t=(0,n.useRouter)(),r=e||{},u=r.children,l=r.route,d=r.loading,p=r.data,f=r.url,b=r.skeleton,j=r.onPageChange,g=r.page;g=(g=g||(l&&l.page?l.page:null))?parseInt(g):1;var O=function(e){if(window.scrollTo(0,0),j)j(e);else{var r="".concat(f,"/").concat(e);t.push(r)}},m=p&&p.length<10,h=1==g;return(0,s.jsx)(a.RQ,{children:p&&p.length>0?(0,s.jsxs)(o.Z,{spacing:2,children:[u,(0,s.jsxs)(o.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,s.jsx)(i.Z,{variant:"outlined",disabled:h,onClick:function(){return O(g-1)},children:"Back"}),(0,s.jsx)(i.Z,{variant:"outlined",disabled:m,onClick:function(){return O(g+1)},children:"Next"})]})]}):(0,s.jsx)(c.Dx,{children:d?b||"loading":"No results"})})}},43332:function(e,t,r){"use strict";r(67294);var n=r(65295),o=r(18515),i=r(42643),a=r(54962),c=r(49161),s=r(2658),u=r(360),l=r(9092),d=r(6447),p=r(27054),f=r(85893),b=(0,p.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),j="".concat(l.Z.APP.BASE_PATH).concat(l.Z.DEFAULTS.IMAGE_PLACEHOLDER),g=function(e){return e.target.src=j};t.Z=function(e){var t,r=b(),p=e.title,j=e.subtitle,O=e.text,m=e.image,h=e.imageHeight,v=void 0===h?180:h,y=e.noImage,w=e.actions,P=0;j=j||"";return y=!!y,m=m||l.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,f.jsxs)(n.Z,{style:{flexGrow:1,width:"100%"},children:[(0,f.jsx)(o.Z,{sx:{width:"100%"},classes:{content:r.headerContent,root:r.headerRoot},title:(0,f.jsx)(d.ZP,{title:p,placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,f.jsx)(s.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:p})})}),subheader:j}),!y&&(0,f.jsx)(a.Z,{height:v||null,image:null!==(t=m)&&void 0!==t&&t.startsWith("/")?"".concat(l.Z.APP.BASE_PATH).concat(m):m,component:"img",onError:g}),O&&(0,f.jsx)(i.Z,{children:(0,u.HD)(O)?(0,f.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:O}):O}),w&&w.length>0&&(0,f.jsx)(c.Z,{children:w.map((function(e){return(0,f.jsx)("div",{children:e},P++)}))})]})}},55619:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(4942),o=r(67294),i=r(11163),a=r(93942),c=r(19016),s=r(25810),u=r(14763),l=r(50789),d=(r(14308),r(529)),p=(r(87863),r(85893));function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e){var t,r,n,u,l=(0,a.I0)(),d=(0,i.useRouter)(),f=e.config,j=(0,o.useState)(""),O=j[0],m=j[1],h=(0,a.v9)((function(e){return e[f.automata.name]})),v=null!==(t=e.params.render)&&void 0!==t?t:null,y=b(b({},e.params),{},{renderer:null!==(r=e.params.renderer)&&void 0!==r?r:v});h=e.data?{data:e.data,params:{page:e.params.page}}:h;(0,o.useEffect)((function(){h&&(l((0,c.K4)({status:h.loading,sender:f.automata.name})),console.log(f.automata.name,h))}),[h]),(0,o.useEffect)((function(){y.breadcrumbs&&l((0,c.YA)({breadcrumbs:"function"===typeof y.breadcrumbs?y.breadcrumbs(h):y.breadcrumbs}))}),[y.breadcrumbs,h]);var w=function(t){e.fetch&&(e.data?e.fetch(b({},t)):l(e.fetch(b({},t))))};return(0,o.useEffect)((function(){null!==d&&void 0!==d&&d.isReady&&("banner"!==v||f.banner.showData)&&w(y)}),[null===d||void 0===d?void 0:d.isReady,y.id]),v&&"grid"!=v?((0,o.useEffect)((function(){""!=O&&l((0,c.PV)({message:O}))}),[O]),(0,p.jsx)(g,{config:e.config,render:v,state:h,loading:!(null!==d&&void 0!==d&&d.isReady)||!h||"detail"===v&&null==h.data||"list"==v&&0===(null===(n=h.data)||void 0===n?void 0:n.length)||h.loading||(null===(u=h)||void 0===u?void 0:u.error),setErrorMessage:m,fetch:w,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:y})):(0,p.jsx)(s.C,{from:f.page.title,data:"render property wasn't set"})}function g(e){(0,a.I0)();var t,r,n=e.config,o=e.item,i=e.mainCol,c=e.state,l=e.render,d=e.params,f=e.fetch,j=e.setErrorMessage,g=e.loading,h=n.page.title;if(!g&&c){var v;if("detail"===l&&null===c.data&&(j("this is a demo version, this record was filtered out to reduce the database size"),g=!0),"list"===l)0===(null===(v=c.data)||void 0===v?void 0:v.length)&&(j("data not found"),g=!0);c.error&&(j(c.error.message),g=!0)}var y=(0,p.jsx)(O,b({},e));return(0,p.jsxs)(p.Fragment,{children:[c&&c.error&&(0,p.jsx)(s.C,{from:h,data:c.error.message}),"banner"===l&&y,"list"===l&&(0,p.jsx)(u.Z,b(b({},e),{},{id:n.automata.name,banner:y,mainCol:g&&e.skeleton?e.skeleton:(0,p.jsx)(m,b({},e))})),"page"===l&&(0,p.jsx)(u.Z,b(b({},e),{},{id:n.automata.name,banner:y,mainCol:i?(0,p.jsx)(p.Fragment,{children:g&&e.skeleton?e.skeleton:i({data:null!==(t=null===c||void 0===c?void 0:c.data)&&void 0!==t?t:null,loading:g,params:d,fetch:f,item:o})}):(0,p.jsx)(s.C,{from:h,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===l&&(0,p.jsx)(u.Z,b(b({},e),{},{id:n.automata.name,mainCol:i?(0,p.jsx)(p.Fragment,{children:g&&e.skeleton?e.skeleton:i({data:null!==(r=null===c||void 0===c?void 0:c.data)&&void 0!==r?r:null,loading:g})}):(0,p.jsx)(s.C,{from:h,data:"main component missing, not found in mainCol or detail prop"})}))]})}function O(e){var t,r,n,o,i,a,c,s,u=e.config,l=e.state,f=null!==(t=null===(r=u.banner)||void 0===r?void 0:r.showData)&&void 0!==t&&t,b=e.customTitle?e.customTitle:null!==(n=null===(o=u.page)||void 0===o?void 0:o.title)&&void 0!==n?n:"NO TITLE",j=e.customDescription?e.customDescription:null!==(i=null===(a=u.page)||void 0===a?void 0:a.description)&&void 0!==i?i:"NO DESCRIPTION",g=null===(c=u.page)||void 0===c?void 0:c.url;return(0,p.jsx)(d.Z,{showData:f,loading:e.loading,title:b,description:j,data:null===l||void 0===l?void 0:l.data,item:e.item,actions:[{url:g(null!==(s=null===l||void 0===l?void 0:l.params)&&void 0!==s?s:{}),title:"See all"}],hero:"banner"!==e.render})}function m(e){var t,r,n=e.loading,o=e.state,i=e.fetch,a=e.item;return(0,p.jsx)(l.Z,{loading:n,page:null!==(t=null===o||void 0===o?void 0:o.params.page)&&void 0!==t?t:null,data:null!==(r=null===o||void 0===o?void 0:o.data)&&void 0!==r?r:null,onPageChange:function(e){i(b(b({},o.params),{},{page:e}))},item:a})}},82216:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d},default:function(){return p}});var n=r(4942),o=(r(67294),r(55861)),i=r(85893);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){return(0,i.jsx)(o.Z,c(c({},e),{},{render:"page"}))};function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=!0,p=function(e){return(0,i.jsx)(s,l(l({},e),{},{breadcrumbs:"/about/project"}))}},91937:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project",function(){return r(82216)}])},87863:function(){}},function(e){e.O(0,[6499,5685,3128,922,4197,6093,9774,2888,179],(function(){return t=91937,e(e.s=t);var t}));var t=e.O();_N_E=t}]);