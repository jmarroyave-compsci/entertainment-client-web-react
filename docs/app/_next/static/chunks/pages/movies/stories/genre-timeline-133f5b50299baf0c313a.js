(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8814],{1015:function(e,n,t){"use strict";t.d(n,{S:function(){return d},E:function(){return p}});var r,i,o=t(30168),a=t(4942),c=t(54397),l=t(42535);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.topic,t=e.entity;return(0,l.h)(f({entity:t}),{topic:n},(function(e){return u(u({},e),{},{data:e.data.storyTopic})}))},f=function(e){var n=e.ENTITY;return(0,c.Ps)(r||(r=(0,o.Z)(["\nquery ","_topic($topic: String!){\n  storyTopic(topic: $topic){\n    year\n    genre\n  }\n}\n"])),n)},p=function(e){var n=e.page,t=e.entity,r=e.genre,i=e.decade;return(0,l.h)(g({ENTITY:t.replace(/-/g,"_")}),{page:n,year:parseInt(i),genre:r},(function(e){return u(u({},e),{},{data:e.data.storyTopics})}))},g=function(e){var n=e.ENTITY;return(0,c.Ps)(i||(i=(0,o.Z)(["\nquery ","_topics($page: Int, $genre: String, $year: Int){\n  storyTopics(page: $page, genre: $genre, year: $year){\n    year\n    genre\n    max\n    min\n    words{\n      n\n      p\n    }\n  }\n}\n"])),n)}},26989:function(e,n,t){"use strict";var r=t(4942),i=t(67294),o=t(26447),a=t(90461),c=t(9573),l=t(38732),s=t(98102),u=t(56011),d=t(3694),f=t(85893);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.Z=function(e){var n,t,g,m,v=e.onExit,h=e.topic,j=null!==(n=e.data)&&void 0!==n&&n.records?null===(t=e.data)||void 0===t?void 0:t.records:null===(g=e.data)||void 0===g||null===(m=g.topic)||void 0===m?void 0:m.data,b=(0,i.useState)({}),y=b[0],x=b[1],O=function(e,n){return n?"rgba(0,0,0,0.4)":e%2==0?"rgba(0,0,0,0.1)":"inherit"};return(0,i.useEffect)((function(){if(j){var e={},n={};j.forEach((function(t){e[t.year]||(e[t.year]={}),n[t.genre]||(n[t.genre]={})}));var t={};Object.keys(n).forEach((function(n){return t[n]=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e)})),j.forEach((function(e){t[e.genre][e.year]=1})),x(t)}}),[j]),(0,f.jsxs)("div",{children:[(0,f.jsxs)(o.Z,{direction:"row",style:{marginBottom:"1rem"},children:[(0,f.jsx)(a.Z,{label:h.replace(/,/g," "),onDelete:v}),(0,f.jsx)("div",{style:{flex:1}})]}),(0,f.jsx)("div",{style:{fontSize:"0.6rem",width:"100%",maxHeight:"400px",overflow:"auto"},children:(0,f.jsxs)(c.Z,{size:"small",stickyHeader:!0,children:[(0,f.jsx)(u.Z,{children:(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(s.Z,{children:"\xa0"}),Object.keys(y).slice(0,1).map((function(e){return Object.keys(y[e]).map((function(e){return(0,f.jsx)(s.Z,{align:"center",children:e},e)}))})),(0,f.jsx)(s.Z,{children:"\xa0"})]})}),(0,f.jsx)(l.Z,{children:Object.keys(y).map((function(n,t){return(0,f.jsxs)(d.Z,{style:{backgroundColor:O(t,!1)},children:[(0,f.jsx)(s.Z,{style:{backgroundColor:O(0,n==e.genre)},children:n}),Object.keys(y[n]).map((function(t){return(0,f.jsx)(s.Z,{style:{backgroundColor:O(0,t==e.year||n==e.genre)},align:"center",children:1==y[n][t]?"\u2713":" "},t)})),(0,f.jsx)(s.Z,{style:{backgroundColor:O(0,n==e.genre)},children:n})]},t)}))})]})})]})}},50789:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});t(4942);var r=t(67294),i=t(52651),o=t(23275),a=t(36501),c=t(14308),l=t(28973),s=t(62448),u=t(74035),d=(t(12666),t(85893));"opacity ".concat(1300,"ms ease-in-out");function f(e){e.animations;var n=e.data,t=e.loading,a=e.url,c=e.skeleton,l=e.item,f=e.onPageChange,g=e.page,m=e.pageSize,v=e.xs,h=void 0===v?12:v,j=e.sm,b=void 0===j?6:j,y=e.md,x=void 0===y?6:y,O=e.lg,Z=void 0===O?4:O,w=e.noPaging,P=void 0!==w&&w,k=e.noPadding,C=(0,r.useRef)(null);n=n&&n.length>0?n:[1,2,3,4,5,6];var E=function(e){return k?e:(0,d.jsx)(u.ck,{children:e})},D=function(e){return(0,d.jsx)(o.Z,{xs:h,sm:b,md:x,lg:Z,children:E(t?c||(0,d.jsx)(p,{}):l?l(e.data):null)})},S=(0,r.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{ref:C}),(0,d.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:n.map((function(n,t){return(0,d.jsx)(r.Fragment,{children:(0,d.jsx)(D,{data:n,params:e},t)},t)}))})]})}),[n]);return P||(S=(0,d.jsx)(s.Z,{pageSize:m,data:n,url:a,onPageChange:function(e){C.current.scrollIntoView(!1),f&&f(e)},page:g,loading:t,children:S})),(0,d.jsx)(u.RQ,{children:S})}function p(){return(0,d.jsx)(a.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,d.jsxs)(c.Z,{spacing:1,children:[(0,d.jsx)(l.Z,{variant:"text",width:"80%"}),(0,d.jsx)(l.Z,{variant:"rectangular",height:100}),(0,d.jsx)(l.Z,{variant:"text",width:"50%"}),(0,d.jsx)(l.Z,{variant:"text",width:"40%"}),(0,d.jsx)(l.Z,{variant:"text",width:"70%"})]})})}},62448:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});t(67294);var r=t(14308),i=t(72642),o=t(74035),a=t(58862),c=t(85893);function l(e){var n=e||{},t=n.children,l=n.loading,s=n.data,u=n.url,d=n.skeleton,f=n.onPageChange,p=n.page,g=n.pageSize,m=void 0===g?10:g,v=p?parseInt(p):1,h=function(e){if(f&&f(e),u){var n="".concat(u,"/").concat(e);router.push(n)}},j=s&&s.length<m,b=1==v;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.RQ,{children:s&&s.length>0?(0,c.jsxs)(r.Z,{spacing:2,children:[t,(0,c.jsxs)(r.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,c.jsx)(i.Z,{variant:"outlined",disabled:b,onClick:function(){return h(v-1)},children:"Back"}),(0,c.jsx)(i.Z,{variant:"outlined",disabled:j,onClick:function(){return h(v+1)},children:"Next"})]})]}):(0,c.jsx)(a.Dx,{children:l?d||"loading":"No results"})})})}},88888:function(e,n,t){"use strict";var r=t(15671),i=t(43144),o=t(60136),a=t(6215),c=t(61120),l=t(67294),s=t(36501),u=t(85893);function d(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,c.Z)(e);if(n){var i=(0,c.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}var f=function(e){(0,o.Z)(t,e);var n=d(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.className,r=e.elevation,i=e.style;return i=i||{},e.fill&&(i.width="100%"),(0,u.jsx)(s.Z,{className:t,style:i,elevation:r,children:n})}}]),t}(l.Component);n.Z=f},55619:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(4942),i=t(67294),o=t(11163),a=t(39704),c=t(19016),l=t(25810),s=t(14763),u=t(50789),d=(t(14308),t(529)),f=t(85893);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e){var n,t,r,s,u,d,p,m,h=(0,a.I0)(),j=(0,o.useRouter)(),b=e.config,y=(0,i.useState)(""),x=y[0],O=y[1],Z=(0,a.v9)((function(e){return e[b.automata.name]})),w=null!==(n=e.params.render)&&void 0!==n?n:null,P=g(g({},e.params),{},{renderer:null!==(t=e.params.renderer)&&void 0!==t?t:w});Z=e.data?{data:e.data,params:{page:e.params.page}}:Z;(0,i.useEffect)((function(){Z&&!e.data&&h((0,c.K4)({status:Z.loading,sender:b.automata.name}))}),[Z]),(0,i.useEffect)((function(){P.breadcrumbs&&h((0,c.YA)({breadcrumbs:"function"===typeof P.breadcrumbs?P.breadcrumbs(Z):P.breadcrumbs}))}),[P.breadcrumbs,Z]);var k=function(n){e.fetch&&(Z&&(n=g(g({},Z.params),n)),e.data?e.fetch(n):h(e.fetch(n)))};return(0,i.useEffect)((function(){null!==j&&void 0!==j&&j.isReady&&("banner"!==w||b.banner.showData)&&(e.data||k(P))}),[null===j||void 0===j?void 0:j.isReady,P.id]),w&&"grid"!=w?((0,i.useEffect)((function(){""!=x&&h((0,c.PV)({message:x}))}),[x]),(0,f.jsx)(v,{config:e.config,render:w,state:Z,loading:!(null!==j&&void 0!==j&&j.isReady)||!Z||null===Z||(null===(r=Z)||void 0===r?void 0:r.loading),forceLoading:"detail"===w&&0==(null===(s=Z)||void 0===s||null===(u=s.data)||void 0===u?void 0:u.length)||"list"==w&&0===(null===(d=Z)||void 0===d||null===(p=d.data)||void 0===p?void 0:p.length)||null!=(null===(m=Z)||void 0===m?void 0:m.error),setErrorMessage:O,fetch:k,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:P})):(0,f.jsx)(l.C,{from:b.page.title,data:"render property wasn't set"})}function v(e){(0,a.I0)();var n,t,r=e.config,i=e.item,o=e.mainCol,c=e.state,u=e.render,d=e.params,p=e.fetch,m=e.setErrorMessage,v=e.loading||e.forceLoading;v=!1!==v;var b=r.page.title;if(0==e.loading&&c){var y,x;if("detail"===u)null!==c.data&&0!=(null===(y=c.data)||void 0===y?void 0:y.length)||(m("this is a demo version, this record was filtered out to reduce the database size"),v=!0);if("list"===u)0===(null===(x=c.data)||void 0===x?void 0:x.length)&&(m("data not found"),v=!0);c.error&&(m(c.error.message),v=!0)}var O=(0,f.jsx)(h,g(g({},e),{},{loading:v}));return(0,f.jsxs)(f.Fragment,{children:[c&&c.error&&(0,f.jsx)(l.C,{from:b,data:c.error.message}),"banner"===u&&O,"list"===u&&(0,f.jsx)(s.Z,g(g({},e),{},{id:r.automata.name,banner:O,mainCol:v&&e.skeleton?e.skeleton:(0,f.jsx)(j,g({},e))})),"page"===u&&(0,f.jsx)(s.Z,g(g({},e),{},{id:r.automata.name,banner:O,mainCol:o?(0,f.jsx)(f.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:v,params:d,fetch:p,item:i})}):(0,f.jsx)(l.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===u&&(0,f.jsx)(s.Z,g(g({},e),{},{id:r.automata.name,mainCol:o?(0,f.jsx)(f.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(t=null===c||void 0===c?void 0:c.data)&&void 0!==t?t:null,loading:v})}):(0,f.jsx)(l.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})}))]})}function h(e){var n,t,r,i,o,a,c,l,s,u,p=e.config,g=e.state,m=e.loading,v=null!==(n=null===(t=p.banner)||void 0===t?void 0:t.showData)&&void 0!==n&&n,h=e.customTitle?"function"===typeof e.customTitle?g?e.customTitle(null!==(r=null===g||void 0===g?void 0:g.params)&&void 0!==r?r:{}):"":e.customTitle:null!==(i=null===(o=p.page)||void 0===o?void 0:o.title)&&void 0!==i?i:"NO TITLE",j=e.customDescription?"function"===typeof e.customDescription?g?e.customDescription(null!==(a=null===g||void 0===g?void 0:g.params)&&void 0!==a?a:{}):"":e.customDescription:null!==(c=null===(l=p.page)||void 0===l?void 0:l.description)&&void 0!==c?c:"NO DESCRIPTION",b=null===(s=p.page)||void 0===s?void 0:s.url;return(0,f.jsx)(d.Z,{renderer:p.banner.renderer?p.banner.renderer:"carousel",showData:v,loading:m,title:h,description:j,data:null===g||void 0===g?void 0:g.data,item:e.item,actions:[{url:b(null!==(u=null===g||void 0===g?void 0:g.params)&&void 0!==u?u:{}),title:"See all"}],hero:"banner"!==e.render})}function j(e){var n,t,r=e.loading,i=e.state,o=e.fetch,a=e.item;return(0,f.jsx)(u.Z,{loading:r,page:null!==(n=null===i||void 0===i?void 0:i.params.page)&&void 0!==n?n:null,data:null!==(t=null===i||void 0===i?void 0:i.data)&&void 0!==t?t:null,onPageChange:function(e){return o({page:e})},item:a})}},74187:function(e,n,t){"use strict";t.d(n,{$:function(){return a}});t(67294);var r=t(47036),i=t(6767),o=t.n(i);t(7269);function a(e,n){var t="dark"===e.palette.mode;n=n>9?9:n,n=t?10-n:n;var i=o()(10==n||0==n?t?"black":"white":r.Z[100*n]),a=(t?i.darken(.75):i.lighten(.75)).negate();return{backgroundColor:i.fade(.5).rgb().toString(),color:a.rgb().toString()}}},2535:function(e,n,t){"use strict";t.d(n,{u:function(){return c},Ct:function(){return l},xs:function(){return d},Dx:function(){return f},x4:function(){return p}});t(67294);var r=t(29602),i=(t(88888),t(32583)),o=t(14563),a=t(85893),c=function(e){var n=e.children,t=e.content;return t&&null!=t&&"?"!==t?(0,a.jsx)(o.Z,{title:t,placement:"bottom-start",children:n}):n},l=function(e){var n=e.children,t=e.content;return t&&null!=t&&0!=t?(0,a.jsx)(i.Z,{badgeContent:t,color:"primary",children:n}):n},s=(0,r.ZP)("div")((function(e){var n=e.theme,t=e.width,r=e.height;return{backgroundColor:n.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:n.palette.text.primary,alignItems:"center",minWidth:t,maxWidth:"100%",minHeight:r,maxHeight:r,borderRadius:"5px"}})),u=(0,r.ZP)("div")((function(e){var n=e.theme;e.width;return{backgroundColor:"transparent",color:n.palette.text.primary,padding:"0.7rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),d=function(e){var n=e.width,t=void 0===n?"300px":n,r=e.height,i=void 0===r?"300px":r;return(0,a.jsx)(s,{width:t,height:i,children:(0,a.jsx)(u,{children:e.children})})},f=(0,r.ZP)("h2")({fontSize:"1.3rem",lineHeight:"1.5rem",padding:0,margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),p=((0,r.ZP)("h3")({fontSize:"1.1rem",lineHeight:"1.3rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,r.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,r.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,r.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,r.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})},1753:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});t(67294);var r=t(11163),i=t(4942),o=t(78038),a=t(85893);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=function(e){return(0,a.jsx)(o.Z,l(l({},e),{},{render:"page"}))},u=function(e){var n=(0,r.useRouter)(),t=n&&n.query?n.query:{},i=t.page,o=t.genre;return o=o||"action",i=i?parseInt(i):1,(0,a.jsx)(s,{entity:"movies",page:i,genre:o,breadcrumbs:"/movies/stories/genre-timeline/".concat(o)})}},26422:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/genre-timeline",function(){return t(1753)}])}},function(e){e.O(0,[7146,4563,525,9581,4197,5688,8038,9774,2888,179],(function(){return n=26422,e(e.s=n);var n}));var n=e.O();_N_E=n}]);