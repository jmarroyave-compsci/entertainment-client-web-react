(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6241],{50789:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});t(4942);var r=t(67294),i=t(52651),o=t(23275),a=t(36501),l=t(14308),d=t(28973),s=t(62448),u=t(50367),c=(t(12666),t(85893));"opacity ".concat(1300,"ms ease-in-out");function f(e){e.animations;var n=e.data,t=e.loading,a=e.url,l=e.skeleton,d=e.item,f=e.onPageChange,p=e.page,g=e.pageSize,v=e.xs,h=void 0===v?12:v,x=e.sm,j=void 0===x?6:x,b=e.md,y=void 0===b?6:b,w=e.lg,O=void 0===w?4:w,Z=e.noPaging,P=void 0!==Z&&Z,C=e.noPadding,k=(0,r.useRef)(null);n=n&&n.length>0?n:[1,2,3,4,5,6];var D=function(e){return C?e:(0,c.jsx)(u.ck,{children:e})},S=function(e){return(0,c.jsx)(o.Z,{xs:h,sm:j,md:y,lg:O,children:D(t?l||(0,c.jsx)(m,{}):d?d(e.data):null)})},E=(0,r.useMemo)((function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{ref:k}),(0,c.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:n.map((function(n,t){return(0,c.jsx)(r.Fragment,{children:(0,c.jsx)(S,{data:n,params:e},t)},t)}))})]})}),[n]);return P||(E=(0,c.jsx)(s.Z,{pageSize:g,data:n,url:a,onPageChange:function(e){k.current.scrollIntoView(!1),f&&f(e)},page:p,loading:t,children:E})),(0,c.jsx)(u.RQ,{children:E})}function m(){return(0,c.jsx)(a.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,c.jsxs)(l.Z,{spacing:1,children:[(0,c.jsx)(d.Z,{variant:"text",width:"80%"}),(0,c.jsx)(d.Z,{variant:"rectangular",height:100}),(0,c.jsx)(d.Z,{variant:"text",width:"50%"}),(0,c.jsx)(d.Z,{variant:"text",width:"40%"}),(0,c.jsx)(d.Z,{variant:"text",width:"70%"})]})})}},62448:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});t(67294);var r=t(14308),i=t(72642),o=t(50367),a=t(58862),l=t(85893);function d(e){var n=e||{},t=n.children,d=n.loading,s=n.data,u=n.url,c=n.skeleton,f=n.onPageChange,m=n.page,p=n.pageSize,g=void 0===p?10:p,v=m?parseInt(m):1,h=function(e){if(f&&f(e),u){var n="".concat(u,"/").concat(e);router.push(n)}},x=s&&s.length<g,j=1==v;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.RQ,{children:s&&s.length>0?(0,l.jsxs)(r.Z,{spacing:2,children:[t,(0,l.jsxs)(r.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,l.jsx)(i.Z,{variant:"outlined",disabled:j,onClick:function(){return h(v-1)},children:"Back"}),(0,l.jsx)(i.Z,{variant:"outlined",disabled:x,onClick:function(){return h(v+1)},children:"Next"})]})]}):(0,l.jsx)(a.Dx,{children:d?c||"loading":"No results"})})})}},55619:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(4942),i=t(67294),o=t(11163),a=t(39704),l=t(19016),d=t(25810),s=t(14763),u=t(50789),c=(t(14308),t(529)),f=t(85893);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e){var n,t,r,s,u,c,m,g,h=(0,a.I0)(),x=(0,o.useRouter)(),j=e.config,b=(0,i.useState)(""),y=b[0],w=b[1],O=(0,a.v9)((function(e){return e[j.automata.name]})),Z=null!==(n=e.params.render)&&void 0!==n?n:null,P=p(p({},e.params),{},{renderer:null!==(t=e.params.renderer)&&void 0!==t?t:Z});O=e.data?{data:e.data,params:{page:e.params.page}}:O;(0,i.useEffect)((function(){O&&!e.data&&h((0,l.K4)({status:O.loading,sender:j.automata.name}))}),[O]),(0,i.useEffect)((function(){P.breadcrumbs&&h((0,l.YA)({breadcrumbs:"function"===typeof P.breadcrumbs?P.breadcrumbs(O):P.breadcrumbs}))}),[P.breadcrumbs,O]);var C=function(n){e.fetch&&(O&&(n=p(p({},O.params),n)),e.data?e.fetch(n):h(e.fetch(n)))};return(0,i.useEffect)((function(){null!==x&&void 0!==x&&x.isReady&&("banner"!==Z||j.banner.showData)&&(e.data||C(P))}),[null===x||void 0===x?void 0:x.isReady,P.id]),Z&&"grid"!=Z?((0,i.useEffect)((function(){""!=y&&h((0,l.PV)({message:y}))}),[y]),(0,f.jsx)(v,{config:e.config,render:Z,state:O,loading:!(null!==x&&void 0!==x&&x.isReady)||!O||null===O||(null===(r=O)||void 0===r?void 0:r.loading),forceLoading:"detail"===Z&&0==(null===(s=O)||void 0===s||null===(u=s.data)||void 0===u?void 0:u.length)||"list"==Z&&0===(null===(c=O)||void 0===c||null===(m=c.data)||void 0===m?void 0:m.length)||(null===(g=O)||void 0===g?void 0:g.error),setErrorMessage:w,fetch:C,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:P})):(0,f.jsx)(d.C,{from:j.page.title,data:"render property wasn't set"})}function v(e){(0,a.I0)();var n,t,r=e.config,i=e.item,o=e.mainCol,l=e.state,u=e.render,c=e.params,m=e.fetch,g=e.setErrorMessage,v=e.loading||e.forceLoading,j=r.page.title;if(0==e.loading&&l){var b,y;if("detail"===u)null!==l.data&&0!=(null===(b=l.data)||void 0===b?void 0:b.length)||(g("this is a demo version, this record was filtered out to reduce the database size"),v=!0);if("list"===u)0===(null===(y=l.data)||void 0===y?void 0:y.length)&&(g("data not found"),v=!0);l.error&&(g(l.error.message),v=!0)}var w=(0,f.jsx)(h,p({},e));return(0,f.jsxs)(f.Fragment,{children:[l&&l.error&&(0,f.jsx)(d.C,{from:j,data:l.error.message}),"banner"===u&&w,"list"===u&&(0,f.jsx)(s.Z,p(p({},e),{},{id:r.automata.name,banner:w,mainCol:v&&e.skeleton?e.skeleton:(0,f.jsx)(x,p({},e))})),"page"===u&&(0,f.jsx)(s.Z,p(p({},e),{},{id:r.automata.name,banner:w,mainCol:o?(0,f.jsx)(f.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(n=null===l||void 0===l?void 0:l.data)&&void 0!==n?n:null,loading:v,params:c,fetch:m,item:i})}):(0,f.jsx)(d.C,{from:j,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===u&&(0,f.jsx)(s.Z,p(p({},e),{},{id:r.automata.name,mainCol:o?(0,f.jsx)(f.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(t=null===l||void 0===l?void 0:l.data)&&void 0!==t?t:null,loading:v})}):(0,f.jsx)(d.C,{from:j,data:"main component missing, not found in mainCol or detail prop"})}))]})}function h(e){var n,t,r,i,o,a,l,d,s,u,m=e.config,p=e.state,g=null!==(n=null===(t=m.banner)||void 0===t?void 0:t.showData)&&void 0!==n&&n,v=e.customTitle?"function"===typeof e.customTitle?p?e.customTitle(null!==(r=null===p||void 0===p?void 0:p.params)&&void 0!==r?r:{}):"":e.customTitle:null!==(i=null===(o=m.page)||void 0===o?void 0:o.title)&&void 0!==i?i:"NO TITLE",h=e.customDescription?"function"===typeof e.customDescription?p?e.customDescription(null!==(a=null===p||void 0===p?void 0:p.params)&&void 0!==a?a:{}):"":e.customDescription:null!==(l=null===(d=m.page)||void 0===d?void 0:d.description)&&void 0!==l?l:"NO DESCRIPTION",x=null===(s=m.page)||void 0===s?void 0:s.url;return(0,f.jsx)(c.Z,{renderer:m.banner.renderer?m.banner.renderer:"carousel",showData:g,loading:e.loading,title:v,description:h,data:null===p||void 0===p?void 0:p.data,item:e.item,actions:[{url:x(null!==(u=null===p||void 0===p?void 0:p.params)&&void 0!==u?u:{}),title:"See all"}],hero:"banner"!==e.render})}function x(e){var n,t,r=e.loading,i=e.state,o=e.fetch,a=e.item;return(0,f.jsx)(u.Z,{loading:r,page:null!==(n=null===i||void 0===i?void 0:i.params.page)&&void 0!==n?n:null,data:null!==(t=null===i||void 0===i?void 0:i.data)&&void 0!==t?t:null,onPageChange:function(e){return o({page:e})},item:a})}},39698:function(e,n,t){"use strict";t.d(n,{Ct:function(){return v},xs:function(){return j},x4:function(){return y},Dx:function(){return b},u:function(){return g}});var r=t(67294),i=t(29602),o=t(15671),a=t(43144),l=t(60136),d=t(6215),s=t(61120),u=t(36501),c=t(85893);function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,s.Z)(e);if(n){var i=(0,s.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,d.Z)(this,t)}}r.Component;var m=t(32583),p=t(14563),g=function(e){var n=e.children,t=e.content;return t&&null!=t&&"?"!==t?(0,c.jsx)(p.Z,{title:t,placement:"bottom-start",children:n}):n},v=function(e){var n=e.children,t=e.content;return t&&null!=t&&0!=t?(0,c.jsx)(m.Z,{badgeContent:t,color:"primary",children:n}):n},h=(0,i.ZP)("div")((function(e){var n=e.theme,t=e.width,r=e.height;return{backgroundColor:n.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:n.palette.text.primary,alignItems:"center",minWidth:t,maxWidth:"100%",minHeight:r,maxHeight:r,borderRadius:"5px"}})),x=(0,i.ZP)("div")((function(e){var n=e.theme;e.width;return{backgroundColor:"transparent",color:n.palette.text.primary,padding:"0.7rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),j=function(e){var n=e.width,t=void 0===n?"300px":n,r=e.height,i=void 0===r?"300px":r;return(0,c.jsx)(h,{width:t,height:i,children:(0,c.jsx)(x,{children:e.children})})},b=(0,i.ZP)("h2")({fontSize:"1.3rem",lineHeight:"1.5rem",padding:0,margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),y=((0,i.ZP)("h3")({fontSize:"1.1rem",lineHeight:"1.3rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})},50222:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(70885),i=(t(67294),t(11163)),o=t(4942),a=t(77643),l=t(85893);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=function(e){return(0,l.jsx)(a.Z,s(s({},e),{},{render:"page"}))},c=function(e){var n,t=(0,i.useRouter)(),o=null!==t&&void 0!==t&&null!==(n=t.query)&&void 0!==n&&n.index?t.query.index:[],a=(0,r.Z)(o,2),d=a[0],s=a[1];d=d||(new Date).getFullYear().toString().slice(0,3)+"0",s=s||"action";var c=(t&&t.query?t.query:[]).page;return c=c?parseInt(c):1,(0,l.jsx)(u,{entity:"movies",page:c,decade:d,genre:s,breadcrumbs:"/movies/stories/topics/".concat(d,"/").concat(s)})}},95157:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/topics/[[...index]]",function(){return t(50222)}])}},function(e){e.O(0,[7146,4563,525,4197,5688,7643,9774,2888,179],(function(){return n=95157,e(e.s=n);var n}));var n=e.O();_N_E=n}]);