(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1174],{50789:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(4942),o=n(67294),i=n(52651),a=n(23275),c=n(36501),s=n(14308),l=n(28973),u=n(62448),d=n(50367),p=n(12666),f=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},j={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function b(e){var t=e.animations,n=void 0===t||t,r=e.data,c=e.loading,s=e.url,l=e.skeleton,g=e.item,b=e.onPageChange,h=e.page,y=e.pageSize,x=e.xs,P=void 0===x?12:x,w=e.sm,D=void 0===w?6:w,Z=e.md,k=void 0===Z?6:Z,E=e.lg,C=void 0===E?4:E,S=e.noPaging,N=void 0!==S&&S,_=e.noPadding,T=(0,o.useRef)(null);r=r&&r.length>0?r:[1,2,3,4,5,6];var R=function(e){return _?e:(0,f.jsx)(d.ck,{children:e})},I=function(e){return n?(0,f.jsx)(p.ZP,{in:!0,timeout:1300,children:function(t){return(0,f.jsx)("div",{style:v(v(v({},m),j[t]),{},{width:"100%"}),children:e})}}):e},F=function(e){return(0,f.jsx)(a.Z,{xs:P,sm:D,md:k,lg:C,children:R(c?l||(0,f.jsx)(O,{}):g?I(g(e.data)):null)})},z=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{ref:T}),(0,f.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:r.map((function(t,n){return(0,f.jsx)(o.Fragment,{children:(0,f.jsx)(F,{data:t,params:e})},n)}))})]});return N||(z=(0,f.jsx)(u.Z,{pageSize:y,data:r,url:s,onPageChange:function(e){T.current.scrollIntoView(!1),b&&b(e)},page:h,loading:c,children:z})),(0,f.jsx)(d.RQ,{children:z})}function O(){return(0,f.jsx)(c.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,f.jsxs)(s.Z,{spacing:1,children:[(0,f.jsx)(l.Z,{variant:"text",width:"80%"}),(0,f.jsx)(l.Z,{variant:"rectangular",height:100}),(0,f.jsx)(l.Z,{variant:"text",width:"50%"}),(0,f.jsx)(l.Z,{variant:"text",width:"40%"}),(0,f.jsx)(l.Z,{variant:"text",width:"70%"})]})})}},62448:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(67294);var r=n(14308),o=n(72642),i=n(50367),a=n(58862),c=n(85893);function s(e){var t=e||{},n=t.children,s=t.loading,l=t.data,u=t.url,d=t.skeleton,p=t.onPageChange,f=t.page,g=t.pageSize,v=void 0===g?10:g,m=f?parseInt(f):1,j=function(e){if(p&&p(e),u){var t="".concat(u,"/").concat(e);router.push(t)}},b=l&&l.length<v,O=1==m;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.RQ,{children:l&&l.length>0?(0,c.jsxs)(r.Z,{spacing:2,children:[n,(0,c.jsxs)(r.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,c.jsx)(o.Z,{variant:"outlined",disabled:O,onClick:function(){return j(m-1)},children:"Back"}),(0,c.jsx)(o.Z,{variant:"outlined",disabled:b,onClick:function(){return j(m+1)},children:"Next"})]})]}):(0,c.jsx)(a.Dx,{children:s?d||"loading":"No results"})})})}},55619:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(4942),o=n(67294),i=n(11163),a=n(39704),c=n(19016),s=n(25810),l=n(14763),u=n(50789),d=(n(14308),n(529)),p=n(85893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t,n,r,l,u,d,f,v,j=(0,a.I0)(),b=(0,i.useRouter)(),O=e.config,h=(0,o.useState)(""),y=h[0],x=h[1],P=(0,a.v9)((function(e){return e[O.automata.name]})),w=null!==(t=e.params.render)&&void 0!==t?t:null,D=g(g({},e.params),{},{renderer:null!==(n=e.params.renderer)&&void 0!==n?n:w});P=e.data?{data:e.data,params:{page:e.params.page}}:P;(0,o.useEffect)((function(){P&&!e.data&&j((0,c.K4)({status:P.loading,sender:O.automata.name}))}),[P]),(0,o.useEffect)((function(){D.breadcrumbs&&j((0,c.YA)({breadcrumbs:"function"===typeof D.breadcrumbs?D.breadcrumbs(P):D.breadcrumbs}))}),[D.breadcrumbs,P]);var Z=function(t){e.fetch&&(e.data?e.fetch(g(g({},P.params),t)):j(e.fetch(g({},t))))};return(0,o.useEffect)((function(){null!==b&&void 0!==b&&b.isReady&&("banner"!==w||O.banner.showData)&&(e.data||Z(D))}),[null===b||void 0===b?void 0:b.isReady,D.id]),w&&"grid"!=w?((0,o.useEffect)((function(){""!=y&&j((0,c.PV)({message:y}))}),[y]),(0,p.jsx)(m,{config:e.config,render:w,state:P,loading:!(null!==b&&void 0!==b&&b.isReady)||!P||null===P||(null===(r=P)||void 0===r?void 0:r.loading),forceLoading:"detail"===w&&0==(null===(l=P)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.length)||"list"==w&&0===(null===(d=P)||void 0===d||null===(f=d.data)||void 0===f?void 0:f.length)||(null===(v=P)||void 0===v?void 0:v.error),setErrorMessage:x,fetch:Z,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:D})):(0,p.jsx)(s.C,{from:O.page.title,data:"render property wasn't set"})}function m(e){(0,a.I0)();var t,n,r=e.config,o=e.item,i=e.mainCol,c=e.state,u=e.render,d=e.params,f=e.fetch,v=e.setErrorMessage,m=e.loading||e.forceLoading,O=r.page.title;if(0==e.loading&&c){var h,y;if("detail"===u)null!==c.data&&0!=(null===(h=c.data)||void 0===h?void 0:h.length)||(v("this is a demo version, this record was filtered out to reduce the database size"),m=!0);if("list"===u)0===(null===(y=c.data)||void 0===y?void 0:y.length)&&(v("data not found"),m=!0);c.error&&(v(c.error.message),m=!0)}var x=(0,p.jsx)(j,g({},e));return(0,p.jsxs)(p.Fragment,{children:[c&&c.error&&(0,p.jsx)(s.C,{from:O,data:c.error.message}),"banner"===u&&x,"list"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,banner:x,mainCol:m&&e.skeleton?e.skeleton:(0,p.jsx)(b,g({},e))})),"page"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,banner:x,mainCol:i?(0,p.jsx)(p.Fragment,{children:m&&e.skeleton?e.skeleton:i({data:null!==(t=null===c||void 0===c?void 0:c.data)&&void 0!==t?t:null,loading:m,params:d,fetch:f,item:o})}):(0,p.jsx)(s.C,{from:O,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,mainCol:i?(0,p.jsx)(p.Fragment,{children:m&&e.skeleton?e.skeleton:i({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:m})}):(0,p.jsx)(s.C,{from:O,data:"main component missing, not found in mainCol or detail prop"})}))]})}function j(e){var t,n,r,o,i,a,c,s,l,u,f=e.config,g=e.state,v=null!==(t=null===(n=f.banner)||void 0===n?void 0:n.showData)&&void 0!==t&&t,m=e.customTitle?"function"===typeof e.customTitle?g?e.customTitle(null!==(r=null===g||void 0===g?void 0:g.params)&&void 0!==r?r:{}):"":e.customTitle:null!==(o=null===(i=f.page)||void 0===i?void 0:i.title)&&void 0!==o?o:"NO TITLE",j=e.customDescription?"function"===typeof e.customDescription?g?e.customDescription(null!==(a=null===g||void 0===g?void 0:g.params)&&void 0!==a?a:{}):"":e.customDescription:null!==(c=null===(s=f.page)||void 0===s?void 0:s.description)&&void 0!==c?c:"NO DESCRIPTION",b=null===(l=f.page)||void 0===l?void 0:l.url;return(0,p.jsx)(d.Z,{showData:v,loading:e.loading,title:m,description:j,data:null===g||void 0===g?void 0:g.data,item:e.item,actions:[{url:b(null!==(u=null===g||void 0===g?void 0:g.params)&&void 0!==u?u:{}),title:"See all"}],hero:"banner"!==e.render})}function b(e){var t,n,r=e.loading,o=e.state,i=e.fetch,a=e.item;return(0,p.jsx)(u.Z,{loading:r,page:null!==(t=null===o||void 0===o?void 0:o.params.page)&&void 0!==t?t:null,data:null!==(n=null===o||void 0===o?void 0:o.data)&&void 0!==n?n:null,onPageChange:function(e){return i({page:e})},item:a})}},12870:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return P},default:function(){return w}});var r=n(4942),o=(n(67294),n(55619)),i={automata:{name:"about-project-blog-post"},page:{title:"the Post",url:function(){return"/about/project/log/posts/"}},banner:{showData:!1}},a=n(45987),c=n(94226),s=n(84283),l=n(92657),u=n(85893),d=["node","inline","className","children"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.content,n={code:function(e){e.node;var t=e.inline,n=e.className,r=e.children,o=(0,a.Z)(e,d),i=/language-(\w+)/.exec(n||"");return!t&&i?(0,u.jsx)(l.Z,f({style:s.$E,PreTag:"div",language:i[1],children:String(r).replace(/\n$/,"")},o)):(0,u.jsx)("code",f(f({className:n||""},o),{},{children:r}))}};return(0,u.jsx)("div",{className:"markdown-body",children:(0,u.jsx)(c.Z,{components:n,children:t})})};n(58862);var v=function(e){var t=e.article;return(0,u.jsx)(g,{content:t.content})};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){var t=e.article;return(0,u.jsx)(o.Z,{config:i,params:e,customTitle:t.meta.title,customDescription:"sprint ".concat(t.meta.sprint," - day ").concat(t.meta.day),mainCol:function(){return(0,u.jsx)(v,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}})}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){return(0,u.jsx)(j,O(O({},e),{},{render:"page"}))};n(11163);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=!0,w=function(e){return(0,u.jsx)(h,x(x({},e),{},{breadcrumbs:"/about/project/log/".concat(e.article.meta.slug)}))}},87466:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/log/posts/[index]",function(){return n(12870)}])}},function(e){e.O(0,[7146,1861,4197,9774,2888,179],(function(){return t=87466,e(e.s=t);var t}));var t=e.O();_N_E=t}]);