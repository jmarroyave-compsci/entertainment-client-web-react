(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8814],{60181:function(e,n,t){"use strict";var r=t(64119);n.Z=void 0;var i=r(t(64938)),o=t(85893),a=(0,i.default)((0,o.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");n.Z=a},23508:function(e,n,t){"use strict";var r=t(64119);n.Z=void 0;var i=r(t(64938)),o=t(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=a},1015:function(e,n,t){"use strict";t.d(n,{S:function(){return d},E:function(){return p}});var r,i,o=t(30168),a=t(4942),c=t(54397),l=t(42535);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.topic,t=e.entity;return(0,l.h)(f({entity:t}),{topic:n},(function(e){return s(s({},e),{},{data:e.data.storyTopic})}))},f=function(e){var n=e.ENTITY;return(0,c.Ps)(r||(r=(0,o.Z)(["\nquery ","_topic($topic: String!){\n  storyTopic(topic: $topic){\n    year\n    genre\n  }\n}\n"])),n)},p=function(e){var n=e.page,t=e.entity,r=e.genre,i=e.decade,o=e.nratio;return(0,l.h)(g({ENTITY:t.replace(/-/g,"_")}),{page:n,year:parseInt(i),genre:r,nratio:o},(function(e){return s(s({},e),{},{data:e.data.storyTopics})}))},g=function(e){var n=e.ENTITY;return(0,c.Ps)(i||(i=(0,o.Z)(["\nquery ","_topics($page: Int, $genre: String, $year: Int, $nratio : Int){\n  storyTopics(page: $page, genre: $genre, year: $year, nratio: $nratio){\n    year\n    genre\n    max\n    min\n    words{\n      n\n      p\n    }\n  }\n}\n"])),n)}},26989:function(e,n,t){"use strict";var r=t(4942),i=t(67294),o=t(29602),a=t(76637),c=t(26447),l=t(90461),u=t(9573),s=t(38732),d=t(98102),f=t(56011),p=t(3694),g=t(31298),m=t(79521),v=t(12871),h=t(98326),j=t(52871),b=t(85893);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O=(0,o.ZP)(d.Z)((function(e){return{backgroundColor:e.theme.palette.background.paper,zIndex:"100!important"}})),w=(0,o.ZP)(d.Z)((function(e){e.theme;return{textAlign:"center",padding:"0.2rem",fontSize:"0.8rem",lineHeight:"0.8rem",fontFamily:"monospace"}})),P=(0,o.ZP)(d.Z)((function(e){return{backgroundColor:e.theme.palette.background.paper,zIndex:90,padding:"0.2rem",paddingLeft:"1rem",fontSize:"0.75rem",lineHeight:"0.75rem"}})),Z=(0,o.ZP)(d.Z)((function(e){return{padding:0,fontSize:"0.7rem",lineHeight:"0.7rem",borderRight:"1px dotted",borderColor:e.theme.palette.action.selected}}));function k(e){var n=e.columns,t=e.data,r=e.onClick,i=(0,m.useTable)({columns:n,data:t},v.useSticky),o=i.getTableProps,a=i.getTableBodyProps,c=i.headerGroups,l=i.rows,d=i.prepareRow,g=function(e,n){return n?"rgba(0,0,0,0.4)":e%2==0?"rgba(0,0,0,0.1)":"inherit"};return(0,b.jsxs)(u.Z,x(x({size:"small",stickyHeader:!0},o()),{},{children:[(0,b.jsx)(f.Z,{children:c.map((function(e){return(0,b.jsx)(p.Z,x(x({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e,n){return 0==n?(0,b.jsx)(O,x(x({},e.getHeaderProps()),{},{children:e.render("Header")})):(0,b.jsx)(w,x(x({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),(0,b.jsx)(s.Z,x(x({},a()),{},{children:l.map((function(e,n){return d(e),(0,b.jsx)(p.Z,x(x({},e.getRowProps()),{},{style:{backgroundColor:g(n,!1)},children:e.cells.map((function(e,n){return 0==n?(0,b.jsx)(P,x(x({},e.getCellProps()),{},{children:e.render("Cell")})):(0,b.jsx)(Z,x(x({align:"center"},e.getCellProps()),{},{children:(0,b.jsx)(C,{onClick:function(){r&&r({decade:e.column.Header,genre:e.row.values.genre})},cell:e})}))}))}))}))}))]}))}var C=function(e){var n=e.cell,t=e.onClick;return""==n.value?null:(0,b.jsx)(a.Z,{onClick:t,style:{width:"100%"},children:"\u2713"})};n.Z=function(e){var n=(0,i.useMemo)((function(){return function(e,n){if(!e||0==e.length||n)return[null,null];var t,r=[],i=[],o=(0,h.a)({ascending:!0}),a=(0,j.J)({all:!1}),c=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.push(x({Header:e,accessor:n},t?{sticky:"left"}:{}))};return c("Genre","genre",!0),o.forEach((function(e,n){c("".concat(e),"_".concat(e),!1)})),a.forEach((function(n){t={genre:n},o.forEach((function(r){var i=e.find((function(e){return e.genre==n&&e.year==r}));t["_".concat(r)]=i?"\u2713":""})),r.push(t)})),[i,r]}(e.data,e.loading)}),[e.data]),t=n[0],r=n[1],o=e.onExit,a=e.topic,u=e.v3,s=e.onClick;return null==t?null:(0,b.jsx)("div",{style:{width:"100%",display:"flex",flex:1},children:(0,b.jsxs)(c.Z,{direction:"column",spacing:1,style:{width:"100%"},children:[!u&&(0,b.jsx)("span",{children:(0,b.jsx)(l.Z,{label:a.replace(/,/g," "),onDelete:o})}),(0,b.jsx)(g.$B,{autoHeight:!u,style:{flex:1},children:(0,b.jsx)("div",{style:{width:"100%",fontSize:"0.6rem",padding:"0 1rem 1rem 0"},children:(0,b.jsx)(k,{columns:t,data:r,onClick:s})})})]})})}},50789:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});t(4942);var r=t(67294),i=t(52651),o=t(23275),a=t(36501),c=t(14308),l=t(28973),u=t(62448),s=t(74035),d=(t(12666),t(85893));"opacity ".concat(1300,"ms ease-in-out");function f(e){e.animations;var n=e.data,t=e.loading,a=e.url,c=e.skeleton,l=e.item,f=e.onPageChange,g=e.page,m=e.pageSize,v=e.xs,h=void 0===v?12:v,j=e.sm,b=void 0===j?6:j,y=e.md,x=void 0===y?6:y,O=e.lg,w=void 0===O?4:O,P=e.noPaging,Z=void 0!==P&&P,k=e.noPadding,C=(0,r.useRef)(null);n=n&&n.length>0?n:[1,2,3,4,5,6];var S=function(e){return k?e:(0,d.jsx)(s.ck,{children:e})},D=function(e){return(0,d.jsx)(o.Z,{xs:h,sm:b,md:x,lg:w,children:S(t?c||(0,d.jsx)(p,{}):l?l(e.data):null)})},E=(0,r.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{ref:C}),(0,d.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:n.map((function(n,t){return(0,d.jsx)(r.Fragment,{children:(0,d.jsx)(D,{data:n,params:e},t)},t)}))})]})}),[n]);return Z||(E=(0,d.jsx)(u.Z,{pageSize:m,data:n,url:a,onPageChange:function(e){C.current.scrollIntoView(!1),f&&f(e)},page:g,loading:t,children:E})),(0,d.jsx)(s.RQ,{children:E})}function p(){return(0,d.jsx)(a.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,d.jsxs)(c.Z,{spacing:1,children:[(0,d.jsx)(l.Z,{variant:"text",width:"80%"}),(0,d.jsx)(l.Z,{variant:"rectangular",height:100}),(0,d.jsx)(l.Z,{variant:"text",width:"50%"}),(0,d.jsx)(l.Z,{variant:"text",width:"40%"}),(0,d.jsx)(l.Z,{variant:"text",width:"70%"})]})})}},62448:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});t(67294);var r=t(14308),i=t(72642),o=t(74035),a=t(58862),c=t(85893);function l(e){var n=e||{},t=n.children,l=n.loading,u=n.data,s=n.url,d=n.skeleton,f=n.onPageChange,p=n.page,g=n.pageSize,m=void 0===g?10:g,v=p?parseInt(p):1,h=function(e){if(f&&f(e),s){var n="".concat(s,"/").concat(e);router.push(n)}},j=u&&u.length<m,b=1==v;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.RQ,{children:u&&u.length>0?(0,c.jsxs)(r.Z,{spacing:2,children:[t,(0,c.jsxs)(r.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,c.jsx)(i.Z,{variant:"outlined",disabled:b,onClick:function(){return h(v-1)},children:"Back"}),(0,c.jsx)(i.Z,{variant:"outlined",disabled:j,onClick:function(){return h(v+1)},children:"Next"})]})]}):(0,c.jsx)(a.Dx,{children:l?d||"loading":"No results"})})})}},55619:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(4942),i=t(67294),o=t(11163),a=t(39704),c=t(19016),l=t(25810),u=t(14763),s=t(50789),d=(t(14308),t(529)),f=t(85893);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e){var n,t,r,u,s,d,p,m,h=(0,a.I0)(),j=(0,o.useRouter)(),b=e.config,y=(0,i.useState)(""),x=y[0],O=y[1],w=(0,a.v9)((function(e){return e[b.automata.name]})),P=null!==(n=e.params.render)&&void 0!==n?n:null,Z=g(g({},e.params),{},{renderer:null!==(t=e.params.renderer)&&void 0!==t?t:P});w=e.data?{data:e.data,params:{page:e.params.page}}:w;(0,i.useEffect)((function(){w&&!e.data&&h((0,c.K4)({status:w.loading,sender:b.automata.name}))}),[w]),(0,i.useEffect)((function(){Z.breadcrumbs&&h((0,c.YA)({breadcrumbs:"function"===typeof Z.breadcrumbs?Z.breadcrumbs(w):Z.breadcrumbs}))}),[Z.breadcrumbs,w]);var k=function(n){e.fetch&&(w&&(n=g(g({},w.params),n)),e.data?e.fetch(n):h(e.fetch(n)))};return(0,i.useEffect)((function(){null!==j&&void 0!==j&&j.isReady&&("banner"!==P||b.banner.showData)&&(e.data||k(Z))}),[null===j||void 0===j?void 0:j.isReady,Z.id]),P&&"grid"!=P?((0,i.useEffect)((function(){""!=x&&h((0,c.PV)({message:x}))}),[x]),(0,f.jsx)(v,{config:e.config,render:P,state:w,loading:!(null!==j&&void 0!==j&&j.isReady)||!w||null===w||(null===(r=w)||void 0===r?void 0:r.loading),forceLoading:"detail"===P&&0==(null===(u=w)||void 0===u||null===(s=u.data)||void 0===s?void 0:s.length)||"list"==P&&0===(null===(d=w)||void 0===d||null===(p=d.data)||void 0===p?void 0:p.length)||null!=(null===(m=w)||void 0===m?void 0:m.error),setErrorMessage:O,fetch:k,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:Z})):(0,f.jsx)(l.C,{from:b.page.title,data:"render property wasn't set"})}function v(e){(0,a.I0)();var n,t,r=e.config,i=e.item,o=e.mainCol,c=e.state,s=e.render,d=e.params,p=e.fetch,m=e.setErrorMessage,v=e.loading||e.forceLoading;v=!1!==v;var b=r.page.title;if(0==e.loading&&c){var y,x;if("detail"===s)null!==c.data&&0!=(null===(y=c.data)||void 0===y?void 0:y.length)||(m("this is a demo version, this record was filtered out to reduce the database size"),v=!0);if("list"===s)0===(null===(x=c.data)||void 0===x?void 0:x.length)&&(m("data not found"),v=!0);c.error&&(m(c.error.message),v=!0)}var O=(0,f.jsx)(h,g(g({},e),{},{loading:v}));return(0,f.jsxs)(f.Fragment,{children:[c&&c.error&&(0,f.jsx)(l.C,{from:b,data:c.error.message}),"banner"===s&&O,"list"===s&&(0,f.jsx)(u.Z,g(g({},e),{},{id:r.automata.name,banner:O,mainCol:v&&e.skeleton?e.skeleton:(0,f.jsx)(j,g({},e))})),"page"===s&&(0,f.jsx)(u.Z,g(g({},e),{},{id:r.automata.name,banner:O,mainCol:o?(0,f.jsx)(f.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:v,params:d,fetch:p,item:i})}):(0,f.jsx)(l.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===s&&(0,f.jsx)(u.Z,g(g({},e),{},{id:r.automata.name,mainCol:o?(0,f.jsx)(f.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(t=null===c||void 0===c?void 0:c.data)&&void 0!==t?t:null,loading:v})}):(0,f.jsx)(l.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})}))]})}function h(e){var n,t,r,i,o,a,c,l,u,s,p=e.config,g=e.state,m=e.loading,v=null!==(n=null===(t=p.banner)||void 0===t?void 0:t.showData)&&void 0!==n&&n,h=e.customTitle?"function"===typeof e.customTitle?g?e.customTitle(null!==(r=null===g||void 0===g?void 0:g.params)&&void 0!==r?r:{}):"":e.customTitle:null!==(i=null===(o=p.page)||void 0===o?void 0:o.title)&&void 0!==i?i:"NO TITLE",j=e.customDescription?"function"===typeof e.customDescription?g?e.customDescription(null!==(a=null===g||void 0===g?void 0:g.params)&&void 0!==a?a:{}):"":e.customDescription:null!==(c=null===(l=p.page)||void 0===l?void 0:l.description)&&void 0!==c?c:"NO DESCRIPTION",b=null===(u=p.page)||void 0===u?void 0:u.url;return(0,f.jsx)(d.Z,{renderer:p.banner.renderer?p.banner.renderer:"carousel",showData:v,loading:m,title:h,description:j,data:null===g||void 0===g?void 0:g.data,item:e.item,actions:[{url:b(null!==(s=null===g||void 0===g?void 0:g.params)&&void 0!==s?s:{}),title:"See all"}],hero:"banner"!==e.render})}function j(e){var n,t,r=e.loading,i=e.state,o=e.fetch,a=e.item;return(0,f.jsx)(s.Z,{loading:r,page:null!==(n=null===i||void 0===i?void 0:i.params.page)&&void 0!==n?n:null,data:null!==(t=null===i||void 0===i?void 0:i.data)&&void 0!==t?t:null,onPageChange:function(e){return o({page:e})},item:a})}},74187:function(e,n,t){"use strict";t.d(n,{$:function(){return a}});t(67294);var r=t(47036),i=t(6767),o=t.n(i);t(7269);function a(e,n){var t="dark"===e.palette.mode;n=n>9?9:n,n=t?10-n:n;var i=o()(10==n||0==n?t?"black":"white":r.Z[100*n]),a=(t?i.darken(.75):i.lighten(.75)).negate();return{backgroundColor:i.fade(.5).rgb().toString(),color:a.rgb().toString()}}},39698:function(e,n,t){"use strict";t.d(n,{Ct:function(){return v},xs:function(){return b},x4:function(){return x},Dx:function(){return y},u:function(){return m}});var r=t(67294),i=t(29602),o=t(15671),a=t(43144),c=t(60136),l=t(6215),u=t(61120),s=t(36501),d=t(85893);function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,u.Z)(e);if(n){var i=(0,u.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,l.Z)(this,t)}}r.Component;var p=t(32583),g=t(14563),m=function(e){var n=e.children,t=e.content;return t&&null!=t&&"?"!==t?(0,d.jsx)(g.Z,{title:t,placement:"bottom-start",children:n}):n},v=function(e){var n=e.children,t=e.content;return t&&null!=t&&0!=t?(0,d.jsx)(p.Z,{badgeContent:t,color:"primary",children:n}):n},h=(0,i.ZP)("div")((function(e){var n=e.theme,t=e.width,r=e.height;return{backgroundColor:n.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:n.palette.text.primary,alignItems:"center",minWidth:t,maxWidth:"100%",minHeight:r,maxHeight:r,borderRadius:"5px"}})),j=(0,i.ZP)("div")((function(e){var n=e.theme;e.width;return{backgroundColor:"transparent",color:n.palette.text.primary,padding:"0.7rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),b=function(e){var n=e.width,t=void 0===n?"300px":n,r=e.height,i=void 0===r?"300px":r;return(0,d.jsx)(h,{width:t,height:i,children:(0,d.jsx)(j,{children:e.children})})},y=(0,i.ZP)("h2")({fontSize:"1.3rem",lineHeight:"1.5rem",padding:0,margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),x=((0,i.ZP)("h3")({fontSize:"1.1rem",lineHeight:"1.3rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})},52871:function(e,n,t){"use strict";t.d(n,{J:function(){return r}});var r=function(e){var n=e.all,t=void 0===n||n,r=["all","Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film-Noir","Game-Show","History","Horror","Music","Musical","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western"].map((function(e){return e.toLowerCase()}));return t||(r=r.filter((function(e){return"all"!=e}))),r}},98326:function(e,n,t){"use strict";t.d(n,{a:function(){return r},V:function(){return i}});var r=function(e){for(var n=e.ascending,t=void 0!==n&&n,r=[],i=1870;i<(new Date).getFullYear();i+=10){var o=i.toString().slice(0,3).padEnd(4,"0");r.push(o)}return t?r:r.reverse()},i=function(){for(var e=[],n=1870;n<(new Date).getFullYear();n++){var t=n.toString();e.push(t)}return e.reverse()}},1753:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});t(67294);var r=t(11163),i=t(4942),o=t(78038),a=t(85893);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=function(e){return(0,a.jsx)(o.Z,l(l({},e),{},{render:"page"}))},s=function(e){var n=(0,r.useRouter)(),t=n&&n.query?n.query:{},i=t.page,o=t.genre;return o=o||"action",i=i?parseInt(i):1,(0,a.jsx)(u,{entity:"movies",page:i,genre:o,breadcrumbs:"/movies/stories/genre-timeline/".concat(o)})}},26422:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/genre-timeline",function(){return t(1753)}])}},function(e){e.O(0,[7146,4563,525,7533,4197,5688,8038,9774,2888,179],(function(){return n=26422,e(e.s=n);var n}));var n=e.O();_N_E=n}]);