(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9800],{98543:function(e,t,r){"use strict";var n=r(4942),o=(r(67294),r(2093)),i=r(85893);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){return(0,i.jsx)(o.Z,c(c({},e),{},{render:"banner"}))}},2093:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(4942),o=(r(67294),r(11163)),i=r(55619),a={automata:{name:"about-project-blog"},page:{title:"the Log",description:"some lessons learned while programming this project",url:function(){return"/about/project/log"}},banner:{showData:!0}},c=(r(43332),r(89260)),s=r(58862),u=r(85893);function l(e){e.id;var t=e.title,r=(e.thumbnail,e.description,e.slug),n=e.sprint,o=e.day;return(0,u.jsx)(c.Z,{box:!0,href:"".concat(a.page.url(),"/posts/").concat(r),children:(0,u.jsxs)(s.Zh,{children:[(0,u.jsx)(s.x4,{children:"sprint ".concat(n," - day ").concat(o).toUpperCase()}),(0,u.jsx)(s.nv,{children:t})]})})}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e){var t=(0,o.useRouter)();return(0,u.jsx)(i.Z,{config:a,data:e.data,item:function(e){return(0,u.jsx)(l,f({},e))},params:f(f({},e),{},{loading:!1}),fetch:function(r){"banner"!==e.render&&t.push("".concat(a.page.url(),"/").concat(r.page))}})}},6110:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(4942),o=r(67294),i=r(55619),a={automata:{name:"about-project-sitemap"},page:{title:"Sitemap",description:"are you lost or looking for something?",url:function(){return"/about/project/sitemap"}},banner:{showData:!1}},c=r(14308),s=r(9092),u=JSON.parse('{"home":{"stories":{},"movies":{"____tt0454876":{},"festivals":{"____mf00001":{}},"stories":{"actors":{},"awards":{"____award=mf00001&&year=2015":{}},"directors":{},"remakes":{},"writers":{}}},"tv-shows":{"____tt0454876":{},"stories":{"actors":{},"directors":{},"remakes":{},"writers":{}}},"video-games":{"stories":{},"____tt0022215":{}},"podcasts":{"stories":{},"____0002da5f-49a2-31ba-b44c-cdeabdf113cb":{}},"people":{"stories":{},"____nm0000158":{}},"search":{},"about":{"data":{},"project":{"log":{"____posts/7-7-v-1-1":{}},"roadmap":{},"sitemap":{}},"tech":{},"timeline":{}}}}'),l=JSON.parse('{"home":{"stories":{},"movies":{"____[movie]?movie=tt0454876":{},"festivals":{"____[festival]?festival=mf00001":{}},"stories":{"actors":{},"awards":{"____[award]?award=mf00001&&year=2015":{}},"directors":{},"remakes":{},"writers":{}}},"tv-shows":{"____[tv-show]?tv-show=tt0454876":{}},"video-games":{"____[video-game]?video-game=tt0022215":{}},"podcasts":{"____[podcast]?podcast=0002da5f-49a2-31ba-b44c-cdeabdf113cb":{}},"people":{"____[person]?person=nm0000199":{}},"search":{},"about":{"data":{},"project":{"log":{"____posts/7-7-v-1-1":{}},"roadmap":{},"sitemap":{}},"tech":{},"timeline":{}}}}'),p=r(89757),f=r(95899),d=r(23508),b=r(26215),j=r(89260),O=r(85893);function m(e){var t=(0,o.useRef)([]),r=s.Z.TEST?l:u;return(0,O.jsx)(c.Z,{children:(0,O.jsx)(p.Z,{id:"sitemap","aria-label":"file system navigator",defaultCollapseIcon:(0,O.jsx)(d.Z,{}),defaultExpandIcon:(0,O.jsx)(b.Z,{}),sx:{flexGrow:1},expanded:t.current,children:g(t.current,"home","/",r.home)})})}function g(e,t,r,n){var o=e.length.toString();return e.push(o),(0,O.jsx)(f.Z,{nodeId:o,label:(0,O.jsx)(j.Z,{href:r,children:t}),children:Object.keys(n).map((function(t){if(!t.startsWith("____"))return g(e,t,"".concat(r).concat(t,"/"),n[t])}))},o)}var h=function(e){return(0,O.jsx)(c.Z,{children:(0,O.jsx)(m,{})})};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){return(0,O.jsx)(i.Z,{params:e,config:a,mainCol:function(e){return(0,O.jsx)(h,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}},55861:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(4942),o=(r(67294),r(55619)),i={automata:{name:"about-project"},page:{title:"Project",description:"The story of this project",url:function(){return"/about/project"}},banner:{showData:!1}},a=r(14308),c=r(40915),s=r(6110),u=r(85893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){return(0,u.jsx)(s.Z,p(p({},e),{},{render:"banner"}))},d=r(66093);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){return(0,u.jsx)(d.Z,j(j({},e),{},{render:"banner"}))},m=r(98543),g=function(e){return(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(c.Z,{children:(0,u.jsx)(m.Z,{data:e.blog})}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(O,{})}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(f,{})})]})};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){return(0,u.jsx)(o.Z,{params:e,config:i,mainCol:function(e){return(0,u.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}},43332:function(e,t,r){"use strict";r(67294);var n=r(65295),o=r(18515),i=r(42643),a=r(54962),c=r(49161),s=r(2658),u=r(360),l=r(9092),p=r(6447),f=r(27054),d=r(85893),b=(0,f.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),j="".concat(l.Z.APP.BASE_PATH).concat(l.Z.DEFAULTS.IMAGE_PLACEHOLDER),O=function(e){return e.target.src=j};t.Z=function(e){var t,r=b(),f=e.title,j=e.subtitle,m=e.text,g=e.image,h=e.imageHeight,v=void 0===h?180:h,y=e.noImage,w=e.actions,_=0;j=j||"";return y=!!y,g=g||l.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,d.jsxs)(n.Z,{style:{flexGrow:1,width:"100%"},children:[(0,d.jsx)(o.Z,{sx:{width:"100%"},classes:{content:r.headerContent,root:r.headerRoot},title:(0,d.jsx)(p.ZP,{title:f,placement:"bottom-start",children:(0,d.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,d.jsx)(s.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:f})})}),subheader:j}),!y&&(0,d.jsx)(a.Z,{height:v||null,image:null!==(t=g)&&void 0!==t&&t.startsWith("/")?"".concat(l.Z.APP.BASE_PATH).concat(g):g,component:"img",onError:O}),m&&(0,d.jsx)(i.Z,{children:(0,u.HD)(m)?(0,d.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:m}):m}),w&&w.length>0&&(0,d.jsx)(c.Z,{children:w.map((function(e){return(0,d.jsx)("div",{children:e},_++)}))})]})}},55619:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(4942),o=r(67294),i=r(11163),a=r(93942),c=r(19016),s=r(25810),u=r(14763),l=r(50789),p=(r(14308),r(529)),f=r(85893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e){var t,r,n=(0,a.I0)(),u=(0,i.useRouter)(),l=e.config,p=(0,o.useState)(!1),d=p[0],j=p[1],m=(0,a.v9)((function(e){return e[l.automata.name]})),g=null!==(t=e.params.render)&&void 0!==t?t:null,h=b(b({},e.params),{},{renderer:null!==(r=e.params.renderer)&&void 0!==r?r:g});m=e.data?{data:e.data,params:{page:e.params.page}}:m,(0,o.useEffect)((function(){u&&j(u.isReady)}),[u]),(0,o.useEffect)((function(){h.breadcrumbs&&n((0,c.YA)({breadcrumbs:"function"===typeof h.breadcrumbs?h.breadcrumbs(m):h.breadcrumbs}))}),[h.breadcrumbs,m]);var v=function(t){e.fetch&&(e.data?e.fetch(b({},t)):n(e.fetch(b({},t))))};return(0,o.useEffect)((function(){d&&("banner"!==g||l.banner.showData)&&v(h)}),[d]),g&&"grid"!=g?(0,f.jsx)(O,{config:e.config,render:g,state:m,loading:!d||!m||m.loading||e.fetch&&!m.data,fetch:v,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:h}):(0,f.jsx)(s.C,{from:l.page.title,data:"render property wasn't set"})}function O(e){(0,a.I0)();var t,r,n=e.config,o=e.error,i=(e.data,e.item),c=(e.noData,e.loading),l=e.mainCol,p=e.state,d=e.render,j=e.params,O=e.fetch,h=n.page.title,v=(0,f.jsx)(m,b({},e));return(0,f.jsxs)(f.Fragment,{children:[o&&(0,f.jsx)(s.C,{from:h,data:o.message}),"banner"===d&&v,"list"===d&&(0,f.jsx)(u.Z,b(b({},e),{},{id:n.automata.name,banner:v,mainCol:l?l(e):(0,f.jsx)(g,b({},e))})),"page"===d&&(0,f.jsx)(u.Z,b(b({},e),{},{id:n.automata.name,banner:v,mainCol:l?(0,f.jsx)(f.Fragment,{children:c&&e.skeleton?e.skeleton:l({data:null!==(t=null===p||void 0===p?void 0:p.data)&&void 0!==t?t:null,loading:e.loading,params:j,fetch:O,item:i})}):(0,f.jsx)(s.C,{from:h,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===d&&(0,f.jsx)(u.Z,b(b({},e),{},{id:n.automata.name,mainCol:l?(0,f.jsx)(f.Fragment,{children:c&&e.skeleton?e.skeleton:l({data:null!==(r=null===p||void 0===p?void 0:p.data)&&void 0!==r?r:null,loading:e.loading})}):(0,f.jsx)(s.C,{from:h,data:"main component missing, not found in mainCol or detail prop"})}))]})}function m(e){var t,r,n,o,i,a,c,s,u=e.config,l=e.state,d=null!==(t=null===(r=u.banner)||void 0===r?void 0:r.showData)&&void 0!==t&&t,b=e.customTitle?e.customTitle:null!==(n=null===(o=u.page)||void 0===o?void 0:o.title)&&void 0!==n?n:"NO TITLE",j=e.customDescription?e.customDescription:null!==(i=null===(a=u.page)||void 0===a?void 0:a.description)&&void 0!==i?i:"NO DESCRIPTION",O=null===(c=u.page)||void 0===c?void 0:c.url;return(0,f.jsx)(p.Z,{showData:d,loading:e.loading,title:b,description:j,data:null===l||void 0===l?void 0:l.data,item:e.item,actions:[{url:O(null!==(s=null===l||void 0===l?void 0:l.params)&&void 0!==s?s:{}),title:"See all"}],hero:"banner"!==e.render})}function g(e){var t,r,n=e.loading,o=e.state,i=e.fetch,a=e.item;return(0,f.jsx)(l.Z,{loading:n,page:null!==(t=null===o||void 0===o?void 0:o.params.page)&&void 0!==t?t:null,data:null!==(r=null===o||void 0===o?void 0:o.data)&&void 0!==r?r:null,onPageChange:function(e){i(b(b({},o.params),{},{page:e}))},item:a})}},82216:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return p},default:function(){return f}});var n=r(4942),o=(r(67294),r(55861)),i=r(85893);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){return(0,i.jsx)(o.Z,c(c({},e),{},{render:"page"}))};function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=!0,f=function(e){return(0,i.jsx)(s,l(l({},e),{},{breadcrumbs:"/about/project"}))}},91937:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project",function(){return r(82216)}])}},function(e){e.O(0,[6499,5685,3128,922,4010,6093,9774,2888,179],(function(){return t=91937,e(e.s=t);var t}));var t=e.O();_N_E=t}]);