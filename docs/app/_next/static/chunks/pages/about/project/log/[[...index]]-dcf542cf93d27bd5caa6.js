(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6179],{2093:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var n=r(4942),o=(r(67294),r(11163)),c=r(55619),i={automata:{name:"about-project-blog"},page:{title:"the Log",description:"some lessons learned while programming this project",url:"/about/project/log"},banner:{showData:!0}},a=(r(43332),r(89260)),s=r(58862),u=r(85893);function p(t){t.id;var e=t.title,r=(t.thumbnail,t.description,t.slug),n=t.sprint,o=t.day;return(0,u.jsx)(a.Z,{box:!0,href:"".concat(i.page.url,"/posts/").concat(r),children:(0,u.jsxs)(s.Zh,{children:[(0,u.jsx)(s.x4,{children:"srpint ".concat(n," - day ").concat(o).toUpperCase()}),(0,u.jsx)(s.nv,{children:e})]})})}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){var e=(0,o.useRouter)();return(0,u.jsx)(c.Z,{config:i,type:t.render,data:t.data,item:function(t){return(0,u.jsx)(p,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t))},breadcrumbs:t.breadcrumbs,params:t.route?t.route:{page:1},onPageChange:function(t){return e.push("".concat(i.page.url,"/").concat(t))}})}},43332:function(t,e,r){"use strict";r(67294);var n=r(65295),o=r(18515),c=r(42643),i=r(54962),a=r(49161),s=r(2658),u=r(360),p=r(9092),l=r(6447),b=r(27054),f=r(85893),d=(0,b.Z)((function(t){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),j="".concat(p.Z.APP.BASE_PATH).concat(p.Z.DEFAULTS.IMAGE_PLACEHOLDER),O=function(t){return t.target.src=j};e.Z=function(t){var e,r=d(),b=t.title,j=t.subtitle,h=t.text,g=t.image,y=t.imageHeight,P=void 0===y?180:y,w=t.noImage,v=t.actions,m=0;j=j||"";return w=!!w,g=g||p.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,f.jsxs)(n.Z,{style:{flexGrow:1,width:"100%"},children:[(0,f.jsx)(o.Z,{sx:{width:"100%"},classes:{content:r.headerContent,root:r.headerRoot},title:(0,f.jsx)(l.ZP,{title:b,placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,f.jsx)(s.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:b})})}),subheader:j}),!w&&(0,f.jsx)(i.Z,{height:P||null,image:null!==(e=g)&&void 0!==e&&e.startsWith("/")?"".concat(p.Z.APP.BASE_PATH).concat(g):g,component:"img",onError:O}),h&&(0,f.jsx)(c.Z,{children:(0,u.HD)(h)?(0,f.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:h}):h}),v&&v.length>0&&(0,f.jsx)(a.Z,{children:v.map((function(t){return(0,f.jsx)("div",{children:t},m++)}))})]})}},24324:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return f},default:function(){return d}});var n=r(4942),o=r(70885),c=(r(67294),r(2093)),i=r(85893);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=function(t){return(0,i.jsx)(c.Z,s(s({},t),{},{render:"list"}))},p=r(11163);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=!0,d=function(t){var e=(0,p.useRouter)(),r=e&&e.query&&e.query.index?e.query.index:[],n=(0,o.Z)(r,1)[0],c={page:n=n?parseInt(n):1},a=b(b({},t),{},{route:c});return(0,i.jsx)(u,b(b({},a),{},{breadcrumbs:"/about/project/log"}))}},96507:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/log/[[...index]]",function(){return r(24324)}])}},function(t){t.O(0,[6499,5685,3128,5619,9774,2888,179],(function(){return e=96507,t(t.s=e);var e}));var e=t.O();_N_E=e}]);