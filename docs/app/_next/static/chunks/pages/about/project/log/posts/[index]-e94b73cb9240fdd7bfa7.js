(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1174],{55619:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(4942),o=r(67294),a=r(11163),i=r(93942),c=r(19016),s=r(25810),u=r(14763),l=r(50789),d=(r(14308),r(529)),p=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t,r,n=(0,i.I0)(),u=(0,a.useRouter)(),l=e.config,d=(0,o.useState)(!1),f=d[0],m=d[1],g=(0,i.v9)((function(e){return e[l.automata.name]})),j=null!==(t=e.params.render)&&void 0!==t?t:null,v=b(b({},e.params),{},{renderer:null!==(r=e.params.renderer)&&void 0!==r?r:j});g=e.data?{data:e.data,params:{page:e.params.page}}:g,(0,o.useEffect)((function(){g&&n((0,c.K4)({status:g.loading,sender:l.automata.name}))}),[g]),(0,o.useEffect)((function(){u&&m(u.isReady)}),[u]),(0,o.useEffect)((function(){v.breadcrumbs&&n((0,c.YA)({breadcrumbs:"function"===typeof v.breadcrumbs?v.breadcrumbs(g):v.breadcrumbs}))}),[v.breadcrumbs,g]);var y=function(t){e.fetch&&(e.data?e.fetch(b({},t)):n(e.fetch(b({},t))))};return(0,o.useEffect)((function(){f&&("banner"!==j||l.banner.showData)&&y(v)}),[f]),j&&"grid"!=j?(0,p.jsx)(O,{config:e.config,render:j,state:g,loading:!f||!g||g.loading,fetch:y,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:v}):(0,p.jsx)(s.C,{from:l.page.title,data:"render property wasn't set"})}function O(e){var t,r,n=(0,i.I0)(),o=e.config,a=e.item,l=e.mainCol,d=e.state,f=e.render,m=e.params,O=e.fetch,v=e.loading,y=o.page.title,h=(0,p.jsx)(g,b({},e));return v||("detail"===f&&null===d.data&&(n((0,c.PV)({message:"this is a demo version, this record was filtered out to reduce the database size"})),v=!0),"list"===f&&0===d.data.length&&(n((0,c.PV)({message:"data not found"})),v=!0),d.error&&(v=!0)),(0,p.jsxs)(p.Fragment,{children:[d&&d.error&&(0,p.jsx)(s.C,{from:y,data:d.error.message}),"banner"===f&&h,"list"===f&&(0,p.jsx)(u.Z,b(b({},e),{},{id:o.automata.name,banner:h,mainCol:l?l(e):(0,p.jsx)(j,b({},e))})),"page"===f&&(0,p.jsx)(u.Z,b(b({},e),{},{id:o.automata.name,banner:h,mainCol:l?(0,p.jsx)(p.Fragment,{children:v&&e.skeleton?e.skeleton:l({data:null!==(t=null===d||void 0===d?void 0:d.data)&&void 0!==t?t:null,loading:e.loading,params:m,fetch:O,item:a})}):(0,p.jsx)(s.C,{from:y,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===f&&(0,p.jsx)(u.Z,b(b({},e),{},{id:o.automata.name,mainCol:l?(0,p.jsx)(p.Fragment,{children:v&&e.skeleton?e.skeleton:l({data:null!==(r=null===d||void 0===d?void 0:d.data)&&void 0!==r?r:null,loading:e.loading})}):(0,p.jsx)(s.C,{from:y,data:"main component missing, not found in mainCol or detail prop"})}))]})}function g(e){var t,r,n,o,a,i,c,s,u=e.config,l=e.state,f=null!==(t=null===(r=u.banner)||void 0===r?void 0:r.showData)&&void 0!==t&&t,b=e.customTitle?e.customTitle:null!==(n=null===(o=u.page)||void 0===o?void 0:o.title)&&void 0!==n?n:"NO TITLE",m=e.customDescription?e.customDescription:null!==(a=null===(i=u.page)||void 0===i?void 0:i.description)&&void 0!==a?a:"NO DESCRIPTION",O=null===(c=u.page)||void 0===c?void 0:c.url;return(0,p.jsx)(d.Z,{showData:f,loading:e.loading,title:b,description:m,data:null===l||void 0===l?void 0:l.data,item:e.item,actions:[{url:O(null!==(s=null===l||void 0===l?void 0:l.params)&&void 0!==s?s:{}),title:"See all"}],hero:"banner"!==e.render})}function j(e){var t,r,n=e.loading,o=e.state,a=e.fetch,i=e.item;return(0,p.jsx)(l.Z,{loading:n,page:null!==(t=null===o||void 0===o?void 0:o.params.page)&&void 0!==t?t:null,data:null!==(r=null===o||void 0===o?void 0:o.data)&&void 0!==r?r:null,onPageChange:function(e){a(b(b({},o.params),{},{page:e}))},item:i})}},12870:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return w},default:function(){return D}});var n=r(4942),o=(r(67294),r(55619)),a={automata:{name:"about-project-blog-post"},page:{title:"the Post",url:function(){return"/about/project/log/posts/"}},banner:{showData:!1}},i=r(45987),c=r(94226),s=r(84283),u=r(92657),l=r(85893),d=["node","inline","className","children"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.content,r={code:function(e){e.node;var t=e.inline,r=e.className,n=e.children,o=(0,i.Z)(e,d),a=/language-(\w+)/.exec(r||"");return!t&&a?(0,l.jsx)(u.Z,f({style:s.$E,PreTag:"div",language:a[1],children:String(n).replace(/\n$/,"")},o)):(0,l.jsx)("code",f(f({className:r||""},o),{},{children:n}))}};return(0,l.jsx)("div",{className:"markdown-body",children:(0,l.jsx)(c.Z,{components:r,children:t})})};r(58862);var m=function(e){var t=e.article;return(0,l.jsx)(b,{content:t.content})};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){var t=e.article;return(0,l.jsx)(o.Z,{config:a,params:e,customTitle:t.meta.title,customDescription:"sprint ".concat(t.meta.sprint," - day ").concat(t.meta.day),mainCol:function(){return(0,l.jsx)(m,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){return(0,l.jsx)(g,v(v({},e),{},{render:"page"}))};r(11163);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=!0,D=function(e){return(0,l.jsx)(y,P(P({},e),{},{breadcrumbs:"/about/project/log/".concat(e.article.meta.slug)}))}},87466:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/log/posts/[index]",function(){return r(12870)}])}},function(e){e.O(0,[6499,5685,1861,4010,9774,2888,179],(function(){return t=87466,e(e.s=t);var t}));var t=e.O();_N_E=t}]);