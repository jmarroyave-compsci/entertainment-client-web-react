(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8512],{6110:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(4942),o=n(67294),a=n(55619),i={automata:{name:"about-project-sitemap"},page:{title:"Sitemap",description:"are you lost or looking for something?",url:function(){return"/about/project/sitemap"}},banner:{showData:!1}},s=n(14308),c=n(9092),l=JSON.parse('{"home":{"stories":{},"movies":{"____tt0454876":{},"festivals":{"____mf00001":{}},"stories":{"actors":{},"awards":{"____award=mf00001&&year=2015":{}},"directors":{},"remakes":{},"writers":{}}},"tv-shows":{"____tt0454876":{},"stories":{"actors":{},"directors":{},"remakes":{},"writers":{}}},"video-games":{"stories":{},"____tt0022215":{}},"podcasts":{"stories":{},"____0002da5f-49a2-31ba-b44c-cdeabdf113cb":{}},"people":{"stories":{},"____nm0000158":{}},"search":{},"about":{"data":{},"project":{"log":{"____posts/7-7-v-1-1":{}},"roadmap":{},"sitemap":{}},"tech":{},"timeline":{}}}}'),d=JSON.parse('{"home":{"stories":{},"movies":{"____[movie]?movie=tt0454876":{},"festivals":{"____[festival]?festival=mf00001":{}},"stories":{"actors":{},"awards":{"____[award]?award=mf00001&&year=2015":{}},"directors":{},"remakes":{},"writers":{}}},"tv-shows":{"____[tv-show]?tv-show=tt0454876":{}},"video-games":{"____[video-game]?video-game=tt0022215":{}},"podcasts":{"____[podcast]?podcast=0002da5f-49a2-31ba-b44c-cdeabdf113cb":{}},"people":{"____[person]?person=nm0000199":{}},"search":{},"about":{"data":{},"project":{"log":{"____posts/7-7-v-1-1":{}},"roadmap":{},"sitemap":{}},"tech":{},"timeline":{}}}}'),u=n(89757),p=n(95899),f=n(23508),m=n(26215),v=n(89260),g=n(85893);function j(e){var t=(0,o.useRef)([]),n=c.Z.TEST?d:l;return(0,g.jsx)(s.Z,{children:(0,g.jsx)(u.Z,{id:"sitemap","aria-label":"file system navigator",defaultCollapseIcon:(0,g.jsx)(f.Z,{}),defaultExpandIcon:(0,g.jsx)(m.Z,{}),sx:{flexGrow:1},expanded:t.current,children:b(t.current,"home","/",n.home)})})}function b(e,t,n,r){var o=e.length.toString();return e.push(o),(0,g.jsx)(p.Z,{nodeId:o,label:(0,g.jsx)(v.Z,{href:n,children:t}),children:Object.keys(r).map((function(t){if(!t.startsWith("____"))return b(e,t,"".concat(n).concat(t,"/"),r[t])}))},o)}var h=function(e){return(0,g.jsx)(s.Z,{children:(0,g.jsx)(j,{})})};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){return(0,g.jsx)(a.Z,{params:e,config:i,mainCol:function(e){return(0,g.jsx)(h,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}})}},50789:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(4942),o=n(67294),a=n(52651),i=n(23275),s=n(79895),c=n(14308),l=n(28973),d=n(62448),u=n(50367),p=n(12666),f=n(85893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},j={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function b(e){var t=e.animations,n=void 0===t||t,r=e.data,s=e.loading,c=e.url,l=e.skeleton,m=e.item,b=e.onPageChange,_=e.page,O=e.pageSize,x=e.xs,y=void 0===x?12:x,w=e.sm,P=void 0===w?6:w,Z=e.md,k=void 0===Z?6:Z,D=e.lg,C=void 0===D?4:D,E=e.noPaging,S=void 0!==E&&E,T=e.noPadding,N=(0,o.useRef)(null);r=r&&r.length>0?r:[1,2,3,4,5,6];var I=function(e){return T?e:(0,f.jsx)(u.ck,{children:e})},R=function(e){return n?(0,f.jsx)(p.ZP,{in:!0,timeout:1300,children:function(t){return(0,f.jsx)("div",{style:v(v(v({},g),j[t]),{},{width:"100%"}),children:e})}}):e},F=function(e){return(0,f.jsx)(i.Z,{xs:y,sm:P,md:k,lg:C,children:I(s?l||(0,f.jsx)(h,{}):m?R(m(e.data)):null)})},z=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{ref:N}),(0,f.jsx)(a.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:r.map((function(t,n){return(0,f.jsx)(o.Fragment,{children:(0,f.jsx)(F,{data:t,params:e})},n)}))})]});return S||(z=(0,f.jsx)(d.Z,{pageSize:O,data:r,url:c,onPageChange:function(e){N.current.scrollIntoView(!1),b&&b(e)},page:_,loading:s,children:z})),(0,f.jsx)(u.RQ,{children:z})}function h(){return(0,f.jsx)(s.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,f.jsxs)(c.Z,{spacing:1,children:[(0,f.jsx)(l.Z,{variant:"text",width:"80%"}),(0,f.jsx)(l.Z,{variant:"rectangular",height:100}),(0,f.jsx)(l.Z,{variant:"text",width:"50%"}),(0,f.jsx)(l.Z,{variant:"text",width:"40%"}),(0,f.jsx)(l.Z,{variant:"text",width:"70%"})]})})}},62448:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});n(67294);var r=n(11163),o=n(14308),a=n(72642),i=n(50367),s=n(58862),c=n(85893);function l(e){var t=(0,r.useRouter)(),n=e||{},l=n.children,d=n.route,u=n.loading,p=n.data,f=n.url,m=n.skeleton,v=n.onPageChange,g=n.page,j=n.pageSize,b=void 0===j?10:j;g=(g=g||(d&&d.page?d.page:null))?parseInt(g):1;var h=function(e){if(v&&v(e),f){var n="".concat(f,"/").concat(e);t.push(n)}},_=p&&p.length<b,O=1==g;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.RQ,{children:p&&p.length>0?(0,c.jsxs)(o.Z,{spacing:2,children:[l,(0,c.jsxs)(o.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,c.jsx)(a.Z,{variant:"outlined",disabled:O,onClick:function(){return h(g-1)},children:"Back"}),(0,c.jsx)(a.Z,{variant:"outlined",disabled:_,onClick:function(){return h(g+1)},children:"Next"})]})]}):(0,c.jsx)(s.Dx,{children:u?m||"loading":"No results"})})})}},55619:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(4942),o=n(67294),a=n(11163),i=n(93942),s=n(19016),c=n(25810),l=n(14763),d=n(50789),u=(n(14308),n(529)),p=n(85893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t,n,r,l,d,u,f,v,j=(0,i.I0)(),b=(0,a.useRouter)(),h=e.config,_=(0,o.useState)(""),O=_[0],x=_[1],y=(0,i.v9)((function(e){return e[h.automata.name]})),w=null!==(t=e.params.render)&&void 0!==t?t:null,P=m(m({},e.params),{},{renderer:null!==(n=e.params.renderer)&&void 0!==n?n:w});y=e.data?{data:e.data,params:{page:e.params.page}}:y;(0,o.useEffect)((function(){y&&!e.data&&j((0,s.K4)({status:y.loading,sender:h.automata.name}))}),[y]),(0,o.useEffect)((function(){P.breadcrumbs&&j((0,s.YA)({breadcrumbs:"function"===typeof P.breadcrumbs?P.breadcrumbs(y):P.breadcrumbs}))}),[P.breadcrumbs,y]);var Z=function(t){e.fetch&&(e.data?e.fetch(m({},t)):j(e.fetch(m({},t))))};return(0,o.useEffect)((function(){null!==b&&void 0!==b&&b.isReady&&("banner"!==w||h.banner.showData)&&(e.data||Z(P))}),[null===b||void 0===b?void 0:b.isReady,P.id]),w&&"grid"!=w?((0,o.useEffect)((function(){""!=O&&j((0,s.PV)({message:O}))}),[O]),(0,p.jsx)(g,{config:e.config,render:w,state:y,loading:!(null!==b&&void 0!==b&&b.isReady)||!y||null===y||(null===(r=y)||void 0===r?void 0:r.loading),forceLoading:"detail"===w&&0==(null===(l=y)||void 0===l||null===(d=l.data)||void 0===d?void 0:d.length)||"list"==w&&0===(null===(u=y)||void 0===u||null===(f=u.data)||void 0===f?void 0:f.length)||(null===(v=y)||void 0===v?void 0:v.error),setErrorMessage:x,fetch:Z,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:P})):(0,p.jsx)(c.C,{from:h.page.title,data:"render property wasn't set"})}function g(e){(0,i.I0)();var t,n,r=e.config,o=e.item,a=e.mainCol,s=e.state,d=e.render,u=e.params,f=e.fetch,v=e.setErrorMessage,g=e.loading||e.forceLoading,h=r.page.title;if(0==e.loading&&s){var _,O;if("detail"===d)null!==s.data&&0!=(null===(_=s.data)||void 0===_?void 0:_.length)||(v("this is a demo version, this record was filtered out to reduce the database size"),g=!0);if("list"===d)0===(null===(O=s.data)||void 0===O?void 0:O.length)&&(v("data not found"),g=!0);s.error&&(v(s.error.message),g=!0)}var x=(0,p.jsx)(j,m({},e));return(0,p.jsxs)(p.Fragment,{children:[s&&s.error&&(0,p.jsx)(c.C,{from:h,data:s.error.message}),"banner"===d&&x,"list"===d&&(0,p.jsx)(l.Z,m(m({},e),{},{id:r.automata.name,banner:x,mainCol:g&&e.skeleton?e.skeleton:(0,p.jsx)(b,m({},e))})),"page"===d&&(0,p.jsx)(l.Z,m(m({},e),{},{id:r.automata.name,banner:x,mainCol:a?(0,p.jsx)(p.Fragment,{children:g&&e.skeleton?e.skeleton:a({data:null!==(t=null===s||void 0===s?void 0:s.data)&&void 0!==t?t:null,loading:g,params:u,fetch:f,item:o})}):(0,p.jsx)(c.C,{from:h,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===d&&(0,p.jsx)(l.Z,m(m({},e),{},{id:r.automata.name,mainCol:a?(0,p.jsx)(p.Fragment,{children:g&&e.skeleton?e.skeleton:a({data:null!==(n=null===s||void 0===s?void 0:s.data)&&void 0!==n?n:null,loading:g})}):(0,p.jsx)(c.C,{from:h,data:"main component missing, not found in mainCol or detail prop"})}))]})}function j(e){var t,n,r,o,a,i,s,c,l,d,f=e.config,m=e.state,v=null!==(t=null===(n=f.banner)||void 0===n?void 0:n.showData)&&void 0!==t&&t,g=e.customTitle?"function"===typeof e.customTitle?m?e.customTitle(null!==(r=null===m||void 0===m?void 0:m.params)&&void 0!==r?r:{}):"":e.customTitle:null!==(o=null===(a=f.page)||void 0===a?void 0:a.title)&&void 0!==o?o:"NO TITLE",j=e.customDescription?"function"===typeof e.customDescription?m?e.customDescription(null!==(i=null===m||void 0===m?void 0:m.params)&&void 0!==i?i:{}):"":e.customDescription:null!==(s=null===(c=f.page)||void 0===c?void 0:c.description)&&void 0!==s?s:"NO DESCRIPTION",b=null===(l=f.page)||void 0===l?void 0:l.url;return(0,p.jsx)(u.Z,{showData:v,loading:e.loading,title:g,description:j,data:null===m||void 0===m?void 0:m.data,item:e.item,actions:[{url:b(null!==(d=null===m||void 0===m?void 0:m.params)&&void 0!==d?d:{}),title:"See all"}],hero:"banner"!==e.render})}function b(e){var t,n,r=e.loading,o=e.state,a=e.fetch,i=e.item;return(0,p.jsx)(d.Z,{loading:r,page:null!==(t=null===o||void 0===o?void 0:o.params.page)&&void 0!==t?t:null,data:null!==(n=null===o||void 0===o?void 0:o.data)&&void 0!==n?n:null,onPageChange:function(e){a(m(m({},o.params),{},{page:e}))},item:i})}},91119:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});n(67294);var r=n(4942),o=n(6110),a=n(85893);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e){return(0,a.jsx)(o.Z,s(s({},e),{},{render:"page"}))},l=function(e){return(0,a.jsx)(c,{breadcrumbs:"/about/project/sitemap"})}},39882:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/sitemap",function(){return n(91119)}])}},function(e){e.O(0,[6499,5685,922,4197,9774,2888,179],(function(){return t=39882,e(e.s=t);var t}));var t=e.O();_N_E=t}]);