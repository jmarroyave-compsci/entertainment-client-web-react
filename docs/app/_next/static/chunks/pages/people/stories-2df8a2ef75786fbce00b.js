(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1206],{26447:function(e,r,t){"use strict";var n=t(1048),o=t(32793),i=t(67294),c=(t(45697),t(95408)),s=t(62605),a=t(39707),u=t(59766),d=t(29602),l=t(16122),p=t(85893);const f=["component","direction","spacing","divider","children"];function m(e,r){const t=i.Children.toArray(e).filter(Boolean);return t.reduce(((e,n,o)=>(e.push(n),o<t.length-1&&e.push(i.cloneElement(r,{key:`separator-${o}`})),e)),[])}const b=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>[r.root]})((({ownerState:e,theme:r})=>{let t=(0,o.Z)({display:"flex"},(0,c.k9)({theme:r},e.direction,(e=>({flexDirection:e}))));if(e.spacing){const n=(0,s.hB)(r),o=Object.keys(r.breakpoints.values).reduce(((r,t)=>(null==e.spacing[t]&&null==e.direction[t]||(r[t]=!0),r)),{}),i=(0,c.P$)({values:e.direction,base:o}),a=(0,c.P$)({values:e.spacing,base:o}),d=(r,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${o=t?i[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,s.NA)(n,r)}};var o};t=(0,u.Z)(t,(0,c.k9)({theme:r},a,d))}return t})),g=i.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiStack"}),i=(0,a.Z)(t),{component:c="div",direction:s="column",spacing:u=0,divider:d,children:g}=i,O=(0,n.Z)(i,f),h={direction:s,spacing:u};return(0,p.jsx)(b,(0,o.Z)({as:c,ownerState:h,ref:r},O,{children:d?m(g,d):g}))}));r.Z=g},81474:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});t(67294);var n=t(14763),o=t(85893);function i(e){return(0,o.jsx)(n.Z,{mainCol:(0,o.jsx)("div",{children:"SOOOOOON"})})}},14308:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(4942),o=(t(67294),t(26447)),i=t(85893);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e){return(0,i.jsx)(o.Z,s(s({},e),{},{children:e.children}))}},70357:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});t(67294);var n=t(14308),o=t(85893);function i(e){var r=e.noPadding;return(0,o.jsx)(n.Z,{sx:{padding:r?{}:{xs:"0rem 2rem 3rem 2rem",sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"},fontSize:"1rem"},children:e.children})}},40915:function(e,r,t){"use strict";var n=t(67294),o=t(90908),i=t(11053),c=t(71508),s=t(85893),a=function(e,r){var t=r.compact,n={xs:{top:1.5,bottom:3,left:1.5,right:1.5},sm:{top:2,bottom:4,left:3,right:3},md:{top:3,bottom:2.5,left:2.5,right:2.5}}[e];return"".concat(n.top,"rem ").concat(n.right,"rem ").concat(t?n.top:n.bottom,"rem ").concat(n.left,"rem")},u=function(e,r){switch(e){case"section-0":return{background:"linear-gradient(60deg, ".concat(r.palette.primary.main," 0%, #000 150%)"),color:r.palette.text.primary};case"section-1":return{background:"linear-gradient(60deg, ${theme.palette.primary.main} 0%, rgba(85,85,85,1) 100%)",color:r.palette.text.primary};case"section-2":return{background:"linear-gradient(180deg, rgba(215,215,215,1) 0%, rgba(255,245,245,1) 125%)",color:"#444"};case"section-3":return{background:"linear-gradient(180deg, #fff 0%, rgba(215,215,215,1) 100%)",color:"#333"};default:return{background:"inherit",color:"inherit"}}};r.Z=function(e){var r=(0,n.useContext)(i.Ni).theme,t=e.className,d=e.cover,l=(e.padding,e.children),p=(e.hero,e.rounded),f=(e.compact,!0===d?"100vh":"inherit");p=!0===p;var m=u(t,r);return(0,s.jsx)(o.Z,{from:"/core/ui/section",children:(0,s.jsx)(c.Z,{className:"com-layout-section ".concat(t),sx:{padding:{xs:a("xs",e),sm:a("sm",e),md:a("md",e)},boxSizing:"border-box",width:"100%",height:f,borderRadius:p?"0.5rem 0.5rem 0 0":0,background:m.background,color:m.color},children:l})})}},14763:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var n=t(4942),o=(t(67294),t(14308)),i=t(70357),c=t(40915),s=t(52651),a=t(23275),u=t(29602),d=t(29352),l=t(36501),p=t(89260),f=t(85893),m=(0,u.ZP)("div")({padding:"0.85rem"}),b=(0,u.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),g=(0,u.ZP)("div")({fontSize:"0.9rem"}),O=function(e){var r=e.filter,t=e.breadcrumbs,n=(0,d.i)(r,t);return(0,f.jsx)(l.Z,{children:(0,f.jsxs)(m,{children:[(0,f.jsx)(b,{children:"See also"}),n.map((function(e,r){return(0,f.jsx)(g,{children:(0,f.jsx)(p.Z,{href:e.url,children:e.title})},r)}))]})})},h=t(50367);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e){var r=e.banner,t=e.mainCol,n=e.rightCol,u=e.id,d=!!e.noPadding&&e.noPadding;return(0,f.jsxs)(o.Z,{children:[r&&(0,f.jsx)("div",{style:{marginBottom:"2rem"},children:(0,f.jsx)(c.Z,{compact:!0,className:"section-0",children:r})}),(0,f.jsx)(i.Z,{noPadding:d,children:(0,f.jsxs)(s.Z,{className:"page-module",fill:!0,children:[(0,f.jsx)(a.Z,{xs:12,sm:12,md:9,lg:10,children:(0,f.jsx)(h.X,{children:t})}),(0,f.jsx)(a.Z,{xs:12,sm:12,md:3,lg:2,children:(0,f.jsxs)("div",{style:{paddingLeft:"1rem",paddingRight:"0.5rem"},children:[(0,f.jsx)(O,y(y({},e),{},{filter:u,breadcrumbs:e.breadcrumbs})),n]})})]})})]})}},50367:function(e,r,t){"use strict";t.d(r,{RQ:function(){return l},X:function(){return b},ck:function(){return m}});var n=t(4942),o=(t(67294),t(29602)),i=t(36501),c=t(85893);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e){return(0,c.jsx)(i.Z,a(a({},e),{},{children:e.children}))}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var l=(0,o.ZP)("div")({margin:"0 0 2rem 0",padding:0,width:"100%"}),p=(0,o.ZP)("div")((function(e){return{margin:"0",padding:"0 1rem 1rem 0",display:"flex",flexGrow:1,overflow:"hidden",width:"100%",backgroundColor:e.theme.palette.background.d}})),f=(0,o.ZP)("div")({display:"flex",flexGrow:1,width:"100%"}),m=function(e){var r=!e.paper||e.paper,t=(0,c.jsx)(f,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e));return r&&(t=(0,c.jsx)(u,{sx:{display:"flex",flexGrow:1,margin:"0.1rem",width:"100%"},children:t})),(0,c.jsx)(p,{children:t})},b=(0,o.ZP)("div")({padding:"0rem 0rem 4rem 0rem"})},75729:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});t(67294);var n=t(4942),o=t(81474),i=t(85893);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var a=function(e){return(0,i.jsx)(o.Z,s(s({},e),{},{render:"page"}))},u=function(e){return(0,i.jsx)(a,{breadcrumbs:"/people/stories"})}},325:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/stories",function(){return t(75729)}])}},function(e){e.O(0,[9774,2888,179],(function(){return r=325,e(e.s=r);var r}));var r=e.O();_N_E=r}]);