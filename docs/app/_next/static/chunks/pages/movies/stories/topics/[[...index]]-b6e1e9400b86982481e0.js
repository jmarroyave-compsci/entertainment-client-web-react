(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6241],{60181:function(e,n,t){"use strict";var r=t(64119);n.Z=void 0;var i=r(t(64938)),a=t(85893),o=(0,i.default)((0,a.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");n.Z=o},23508:function(e,n,t){"use strict";var r=t(64119);n.Z=void 0;var i=r(t(64938)),a=t(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=o},1015:function(e,n,t){"use strict";t.d(n,{S:function(){return s},E:function(){return p}});var r,i,a=t(30168),o=t(4942),l=t(54397),u=t(42535);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=function(e){var n=e.topic,t=e.entity;return(0,u.h)(f({entity:t}),{topic:n},(function(e){return d(d({},e),{},{data:e.data.storyTopic})}))},f=function(e){var n=e.ENTITY;return(0,l.Ps)(r||(r=(0,a.Z)(["\nquery ","_topic($topic: String!){\n  storyTopic(topic: $topic){\n    year\n    genre\n  }\n}\n"])),n)},p=function(e){var n=e.page,t=e.entity,r=e.genre,i=e.decade;return(0,u.h)(m({ENTITY:t.replace(/-/g,"_")}),{page:n,year:parseInt(i),genre:r},(function(e){return d(d({},e),{},{data:e.data.storyTopics})}))},m=function(e){var n=e.ENTITY;return(0,l.Ps)(i||(i=(0,a.Z)(["\nquery ","_topics($page: Int, $genre: String, $year: Int){\n  storyTopics(page: $page, genre: $genre, year: $year){\n    year\n    genre\n    max\n    min\n    words{\n      n\n      p\n    }\n  }\n}\n"])),n)}},50789:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});t(4942);var r=t(67294),i=t(52651),a=t(23275),o=t(36501),l=t(14308),u=t(28973),c=t(62448),d=t(74035),s=(t(12666),t(85893));"opacity ".concat(1300,"ms ease-in-out");function f(e){e.animations;var n=e.data,t=e.loading,o=e.url,l=e.skeleton,u=e.item,f=e.onPageChange,m=e.page,v=e.pageSize,g=e.xs,h=void 0===g?12:g,y=e.sm,b=void 0===y?6:y,x=e.md,j=void 0===x?6:x,w=e.lg,O=void 0===w?4:w,Z=e.noPaging,P=void 0!==Z&&Z,C=e.noPadding,k=(0,r.useRef)(null);n=n&&n.length>0?n:[1,2,3,4,5,6];var E=function(e){return C?e:(0,s.jsx)(d.ck,{children:e})},S=function(e){return(0,s.jsx)(a.Z,{xs:h,sm:b,md:j,lg:O,children:E(t?l||(0,s.jsx)(p,{}):u?u(e.data):null)})},D=(0,r.useMemo)((function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{ref:k}),(0,s.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:n.map((function(n,t){return(0,s.jsx)(r.Fragment,{children:(0,s.jsx)(S,{data:n,params:e},t)},t)}))})]})}),[n]);return P||(D=(0,s.jsx)(c.Z,{pageSize:v,data:n,url:o,onPageChange:function(e){k.current.scrollIntoView(!1),f&&f(e)},page:m,loading:t,children:D})),(0,s.jsx)(d.RQ,{children:D})}function p(){return(0,s.jsx)(o.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,s.jsxs)(l.Z,{spacing:1,children:[(0,s.jsx)(u.Z,{variant:"text",width:"80%"}),(0,s.jsx)(u.Z,{variant:"rectangular",height:100}),(0,s.jsx)(u.Z,{variant:"text",width:"50%"}),(0,s.jsx)(u.Z,{variant:"text",width:"40%"}),(0,s.jsx)(u.Z,{variant:"text",width:"70%"})]})})}},62448:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});t(67294);var r=t(14308),i=t(72642),a=t(74035),o=t(58862),l=t(85893);function u(e){var n=e||{},t=n.children,u=n.loading,c=n.data,d=n.url,s=n.skeleton,f=n.onPageChange,p=n.page,m=n.pageSize,v=void 0===m?10:m,g=p?parseInt(p):1,h=function(e){if(f&&f(e),d){var n="".concat(d,"/").concat(e);router.push(n)}},y=c&&c.length<v,b=1==g;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.RQ,{children:c&&c.length>0?(0,l.jsxs)(r.Z,{spacing:2,children:[t,(0,l.jsxs)(r.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,l.jsx)(i.Z,{variant:"outlined",disabled:b,onClick:function(){return h(g-1)},children:"Back"}),(0,l.jsx)(i.Z,{variant:"outlined",disabled:y,onClick:function(){return h(g+1)},children:"Next"})]})]}):(0,l.jsx)(o.Dx,{children:u?s||"loading":"No results"})})})}},24463:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(67294),i=(t(74035),t(58862),t(72642)),a=t(71508),o=t(60181),l=t(23508),u=t(62318),c=t(85893);function d(e){var n=e.filters,t=(0,r.useState)(!1),d=t[0],s=t[1];var f=function(e){s(e)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{onClick:function(){return f(!d)},endIcon:d?(0,c.jsx)(o.Z,{}):(0,c.jsx)(l.Z,{}),children:"Filter"}),(0,c.jsx)(u.ZP,{anchor:"top",open:d,onClose:function(){return f(!1)},children:(0,c.jsx)(a.Z,{sx:{padding:"2rem 2rem 0rem 2rem",backgroundColor:"background.paper"},children:n({onChange:function(n){e.onChange&&e.onChange(n),f(!1)}})})})]})}},55619:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(4942),i=t(67294),a=t(11163),o=t(39704),l=t(19016),u=t(25810),c=t(14763),d=t(50789),s=(t(14308),t(529)),f=t(85893);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e){var n,t,r,c,d,s,p,v,h=(0,o.I0)(),y=(0,a.useRouter)(),b=e.config,x=(0,i.useState)(""),j=x[0],w=x[1],O=(0,o.v9)((function(e){return e[b.automata.name]})),Z=null!==(n=e.params.render)&&void 0!==n?n:null,P=m(m({},e.params),{},{renderer:null!==(t=e.params.renderer)&&void 0!==t?t:Z});O=e.data?{data:e.data,params:{page:e.params.page}}:O;(0,i.useEffect)((function(){O&&!e.data&&h((0,l.K4)({status:O.loading,sender:b.automata.name}))}),[O]),(0,i.useEffect)((function(){P.breadcrumbs&&h((0,l.YA)({breadcrumbs:"function"===typeof P.breadcrumbs?P.breadcrumbs(O):P.breadcrumbs}))}),[P.breadcrumbs,O]);var C=function(n){e.fetch&&(O&&(n=m(m({},O.params),n)),e.data?e.fetch(n):h(e.fetch(n)))};return(0,i.useEffect)((function(){null!==y&&void 0!==y&&y.isReady&&("banner"!==Z||b.banner.showData)&&(e.data||C(P))}),[null===y||void 0===y?void 0:y.isReady,P.id]),Z&&"grid"!=Z?((0,i.useEffect)((function(){""!=j&&h((0,l.PV)({message:j}))}),[j]),(0,f.jsx)(g,{config:e.config,render:Z,state:O,loading:!(null!==y&&void 0!==y&&y.isReady)||!O||null===O||(null===(r=O)||void 0===r?void 0:r.loading),forceLoading:"detail"===Z&&0==(null===(c=O)||void 0===c||null===(d=c.data)||void 0===d?void 0:d.length)||"list"==Z&&0===(null===(s=O)||void 0===s||null===(p=s.data)||void 0===p?void 0:p.length)||(null===(v=O)||void 0===v?void 0:v.error),setErrorMessage:w,fetch:C,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:P})):(0,f.jsx)(u.C,{from:b.page.title,data:"render property wasn't set"})}function g(e){(0,o.I0)();var n,t,r=e.config,i=e.item,a=e.mainCol,l=e.state,d=e.render,s=e.params,p=e.fetch,v=e.setErrorMessage,g=e.loading||e.forceLoading,b=r.page.title;if(0==e.loading&&l){var x,j;if("detail"===d)null!==l.data&&0!=(null===(x=l.data)||void 0===x?void 0:x.length)||(v("this is a demo version, this record was filtered out to reduce the database size"),g=!0);if("list"===d)0===(null===(j=l.data)||void 0===j?void 0:j.length)&&(v("data not found"),g=!0);l.error&&(v(l.error.message),g=!0)}var w=(0,f.jsx)(h,m({},e));return(0,f.jsxs)(f.Fragment,{children:[l&&l.error&&(0,f.jsx)(u.C,{from:b,data:l.error.message}),"banner"===d&&w,"list"===d&&(0,f.jsx)(c.Z,m(m({},e),{},{id:r.automata.name,banner:w,mainCol:g&&e.skeleton?e.skeleton:(0,f.jsx)(y,m({},e))})),"page"===d&&(0,f.jsx)(c.Z,m(m({},e),{},{id:r.automata.name,banner:w,mainCol:a?(0,f.jsx)(f.Fragment,{children:g&&e.skeleton?e.skeleton:a({data:null!==(n=null===l||void 0===l?void 0:l.data)&&void 0!==n?n:null,loading:g,params:s,fetch:p,item:i})}):(0,f.jsx)(u.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===d&&(0,f.jsx)(c.Z,m(m({},e),{},{id:r.automata.name,mainCol:a?(0,f.jsx)(f.Fragment,{children:g&&e.skeleton?e.skeleton:a({data:null!==(t=null===l||void 0===l?void 0:l.data)&&void 0!==t?t:null,loading:g})}):(0,f.jsx)(u.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})}))]})}function h(e){var n,t,r,i,a,o,l,u,c,d,p=e.config,m=e.state,v=null!==(n=null===(t=p.banner)||void 0===t?void 0:t.showData)&&void 0!==n&&n,g=e.customTitle?"function"===typeof e.customTitle?m?e.customTitle(null!==(r=null===m||void 0===m?void 0:m.params)&&void 0!==r?r:{}):"":e.customTitle:null!==(i=null===(a=p.page)||void 0===a?void 0:a.title)&&void 0!==i?i:"NO TITLE",h=e.customDescription?"function"===typeof e.customDescription?m?e.customDescription(null!==(o=null===m||void 0===m?void 0:m.params)&&void 0!==o?o:{}):"":e.customDescription:null!==(l=null===(u=p.page)||void 0===u?void 0:u.description)&&void 0!==l?l:"NO DESCRIPTION",y=null===(c=p.page)||void 0===c?void 0:c.url;return(0,f.jsx)(s.Z,{renderer:p.banner.renderer?p.banner.renderer:"carousel",showData:v,loading:e.loading,title:g,description:h,data:null===m||void 0===m?void 0:m.data,item:e.item,actions:[{url:y(null!==(d=null===m||void 0===m?void 0:m.params)&&void 0!==d?d:{}),title:"See all"}],hero:"banner"!==e.render})}function y(e){var n,t,r=e.loading,i=e.state,a=e.fetch,o=e.item;return(0,f.jsx)(d.Z,{loading:r,page:null!==(n=null===i||void 0===i?void 0:i.params.page)&&void 0!==n?n:null,data:null!==(t=null===i||void 0===i?void 0:i.data)&&void 0!==t?t:null,onPageChange:function(e){return a({page:e})},item:o})}},74187:function(e,n,t){"use strict";t.d(n,{$:function(){return o}});t(67294);var r=t(47036),i=t(6767),a=t.n(i);t(7269);function o(e,n){var t="dark"===e.palette.mode;n=n>9?9:n,n=t?10-n:n;var i=a()(10==n||0==n?t?"black":"white":r.Z[100*n]),o=(t?i.darken(.75):i.lighten(.75)).negate();return{backgroundColor:i.fade(.5).rgb().toString(),color:o.rgb().toString()}}},39698:function(e,n,t){"use strict";t.d(n,{Ct:function(){return g},xs:function(){return b},x4:function(){return j},Dx:function(){return x},u:function(){return v}});var r=t(67294),i=t(29602),a=t(15671),o=t(43144),l=t(60136),u=t(6215),c=t(61120),d=t(36501),s=t(85893);function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,c.Z)(e);if(n){var i=(0,c.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,u.Z)(this,t)}}r.Component;var p=t(32583),m=t(14563),v=function(e){var n=e.children,t=e.content;return t&&null!=t&&"?"!==t?(0,s.jsx)(m.Z,{title:t,placement:"bottom-start",children:n}):n},g=function(e){var n=e.children,t=e.content;return t&&null!=t&&0!=t?(0,s.jsx)(p.Z,{badgeContent:t,color:"primary",children:n}):n},h=(0,i.ZP)("div")((function(e){var n=e.theme,t=e.width,r=e.height;return{backgroundColor:n.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:n.palette.text.primary,alignItems:"center",minWidth:t,maxWidth:"100%",minHeight:r,maxHeight:r,borderRadius:"5px"}})),y=(0,i.ZP)("div")((function(e){var n=e.theme;e.width;return{backgroundColor:"transparent",color:n.palette.text.primary,padding:"0.7rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),b=function(e){var n=e.width,t=void 0===n?"300px":n,r=e.height,i=void 0===r?"300px":r;return(0,s.jsx)(h,{width:t,height:i,children:(0,s.jsx)(y,{children:e.children})})},x=(0,i.ZP)("h2")({fontSize:"1.3rem",lineHeight:"1.5rem",padding:0,margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),j=((0,i.ZP)("h3")({fontSize:"1.1rem",lineHeight:"1.3rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})},52871:function(e,n,t){"use strict";t.d(n,{J:function(){return r}});var r=function(){return["all","Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film-Noir","Game-Show","History","Horror","Music","Musical","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western"].map((function(e){return e.toLowerCase()}))}},50222:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(70885),i=(t(67294),t(11163)),a=t(4942),o=t(96786),l=t(85893);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){return(0,l.jsx)(o.Z,c(c({},e),{},{render:"page"}))},s=function(e){var n,t=(0,i.useRouter)(),a=null!==t&&void 0!==t&&null!==(n=t.query)&&void 0!==n&&n.index?t.query.index:[],o=(0,r.Z)(a,2),u=o[0],c=o[1];u=u||(new Date).getFullYear().toString().slice(0,3)+"0",c=c||"action";var s=(t&&t.query?t.query:[]).page;return s=s?parseInt(s):1,(0,l.jsx)(d,{entity:"movies",page:s,decade:u,genre:c,breadcrumbs:"/movies/stories/topics/".concat(u,"/").concat(c)})}},95157:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/topics/[[...index]]",function(){return t(50222)}])},97005:function(e,n,t){var r=t(67294);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=i(r),o=function(){return(o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');n.Z=function(e){var n,t,i,l,u=e.style,c=void 0===u?{}:u,d=e.className,s=void 0===d?"":d,f=e.play,p=void 0===f||f,m=e.pauseOnHover,v=void 0!==m&&m,g=e.pauseOnClick,h=void 0!==g&&g,y=e.direction,b=void 0===y?"left":y,x=e.speed,j=void 0===x?20:x,w=e.delay,O=void 0===w?0:w,Z=e.gradient,P=void 0===Z||Z,C=e.gradientColor,k=void 0===C?[255,255,255]:C,E=e.gradientWidth,S=void 0===E?200:E,D=e.children,T=e.loop,R=void 0===T?0:T,N=r.useState(0),I=N[0],z=N[1],_=r.useState(0),F=_[0],q=_[1],H=r.useState(0),L=H[0],B=H[1],M=r.useState(!1),$=M[0],A=M[1],W=r.useRef(null),Y=r.useRef(null),X=function(){Y.current&&W.current&&(z(W.current.getBoundingClientRect().width),q(Y.current.getBoundingClientRect().width)),B(F<I?I/j:F/j)};r.useEffect((function(){return X(),window.addEventListener("resize",X),function(){window.removeEventListener("resize",X)}})),r.useEffect((function(){A(!0)}),[]);var G="rgba("+k[0]+", "+k[1]+", "+k[2];return a.default.createElement(r.Fragment,null,$?a.default.createElement("div",{ref:W,style:o(o({},c),(n={},n["--pause-on-hover"]=v?"paused":"running",n["--pause-on-click"]=h?"paused":"running",n)),className:s+" marquee-container"},P&&a.default.createElement("div",{style:(t={},t["--gradient-color"]=G+", 1), "+G+", 0)",t["--gradient-width"]="number"===typeof S?S+"px":S,t),className:"overlay"}),a.default.createElement("div",{ref:Y,style:(i={},i["--play"]=p?"running":"paused",i["--direction"]="left"===b?"normal":"reverse",i["--duration"]=L+"s",i["--delay"]=O+"s",i["--iteration-count"]=R?""+R:"infinite",i),className:"marquee"},D),a.default.createElement("div",{style:(l={},l["--play"]=p?"running":"paused",l["--direction"]="left"===b?"normal":"reverse",l["--duration"]=L+"s",l["--delay"]=O+"s",l["--iteration-count"]=R?""+R:"infinite",l),className:"marquee"},D)):null)}}},function(e){e.O(0,[7146,4563,525,9581,4197,5688,6786,9774,2888,179],(function(){return n=95157,e(e.s=n);var n}));var n=e.O();_N_E=n}]);