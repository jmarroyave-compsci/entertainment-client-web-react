(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{72642:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(1048),a=n(32793),o=n(67294),i=(n(45697),n(86010)),l=n(77463),s=n(41796),d=n(29602),c=n(16122),u=n(55116),p=n(98216),g=n(21420);function h(e){return(0,g.Z)("MuiButton",e)}var b=(0,n(11271).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),f=n(85893);const m=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),v=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,p.Z)(n.color)}`],t[`size${(0,p.Z)(n.size)}`],t[`${n.variant}Size${(0,p.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${b.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${b.disabled}`]:(0,a.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,s.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}})),y=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,p.Z)(n.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},x(e)))),S=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,p.Z)(n.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},x(e))));var Z=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiButton"}),{children:o,color:s="primary",component:d="button",disabled:u=!1,disableElevation:g=!1,disableFocusRipple:b=!1,endIcon:x,focusVisibleClassName:Z,fullWidth:w=!1,size:z="medium",startIcon:j,type:O,variant:P="text"}=n,k=(0,r.Z)(n,m),C=(0,a.Z)({},n,{color:s,component:d,disabled:u,disableElevation:g,disableFocusRipple:b,fullWidth:w,size:z,type:O,variant:P}),I=(e=>{const{color:t,disableElevation:n,fullWidth:r,size:o,variant:i,classes:s}=e,d={root:["root",i,`${i}${(0,p.Z)(t)}`,`size${(0,p.Z)(o)}`,`${i}Size${(0,p.Z)(o)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,p.Z)(o)}`],endIcon:["endIcon",`iconSize${(0,p.Z)(o)}`]},c=(0,l.Z)(d,h,s);return(0,a.Z)({},s,c)})(C),R=j&&(0,f.jsx)(y,{className:I.startIcon,ownerState:C,children:j}),$=x&&(0,f.jsx)(S,{className:I.endIcon,ownerState:C,children:x});return(0,f.jsxs)(v,(0,a.Z)({ownerState:C,component:d,disabled:u,focusRipple:!b,focusVisibleClassName:(0,i.Z)(I.focusVisible,Z),ref:t,type:O},k,{classes:I,children:[R,o,$]}))}))},77173:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(93942),o=n(73981),i=n(11163),l=n(42671),s=n(66122),d=n(85893);t.default=function(e){var t=(0,a.I0)();(0,i.useRouter)();return(0,r.useEffect)((function(){t((0,o.Y)({breadcrumbs:[{name:"podcasts"}]})),t((0,s.rQ)({renderer:"grid"}))}),[]),(0,d.jsx)(l.Z,{})}},85122:function(e,t){"use strict";t.Z={automata:{name:"stories_podcasts"},page:{title:"Podcasts",description:"a dashboard with information from over 30K podcasts, their categories and language distribution",url:function(){return"/podcasts"}},banner:{showData:!1}}},66122:function(e,t,n){"use strict";n.d(t,{rQ:function(){return y}});var r,a=n(4942),o=n(15861),i=n(87757),l=n.n(i),s=n(24268),d=n(16161),c=n(11163),u=n(30168),p=n(54397),g=n(8300);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f,m=(0,p.Ps)(r||(r=(0,u.Z)(["\n  query GetData\n  {\n    dashboardPodcasts {\n      category\n      language\n      country\n      total\n      yearCreated\n    }\n\n  }\n"]))),x=n(85122),v=x.Z.automata.name,y=(0,s.hg)("".concat(v,"/fetchData"),function(){var e=(0,o.Z)(l().mark((function e(t,n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.dispatch(Z(t)),"banner"===t.renderer){e.next=7;break}return e.next=4,(0,g.h)(m,{},(function(e){return b(b({},e),{},{data:e.data.dashboardPodcasts})}));case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={data:null,loading:!1,error:null};case 8:return e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),S=(0,s.oM)({name:v,initialState:{params:{renderer:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,t){e.params=t.payload,"banner"!==e.params.renderer&&e.params.page>1&&c.default.push("".concat(x.Z.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(f={},(0,a.Z)(f,y.pending,(function(e,t){e.data=null,e.loading=!0,e.error=""})),(0,a.Z)(f,y.fulfilled,(function(e,t){var n=t.payload,r=n.loading,a=n.error,o=n.data;e.data=o,e.loading=r,e.error=a})),f)});d.h.reducerManager.add(v,S.reducer);S.reducer;var Z=S.actions.setParams},42671:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(4942),a=(n(67294),n(58248)),o=n(42702),i=n(93942),l=n(85122),s=(n(66122),n(76085)),d=n(92275),c=n(22310),u=n(92192),p=n(26447),g=n(63515),h=n(85893);var b=function(e){var t=e.data,n=e.loading,r=(e.route,t||{}),a=r.total,o=r.category,i=r.language,l=r.yearCreated,b=r.country,f=function(e,t,r){return(0,h.jsx)(d.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"},children:(0,h.jsx)(u.Z,{loading:n,title:e,data:t||{},ranges:r})})};return(0,h.jsxs)(p.Z,{spacing:2,children:[(0,h.jsx)(g.Dx,{children:"general"}),(0,h.jsx)(s.Z,{justifyContent:"center",fill:!0,children:function(e,t,r){return(0,h.jsx)(d.Z,{xs:12,sm:6,md:6,lg:3,style:{paddingRight:"1rem"},children:(0,h.jsx)(c.Z,{loading:n,title:e,data:t?t.toString():t,icon:r})})}("podcasts",a,"podcasts")}),(0,h.jsx)(g.Dx,{children:"segments"}),(0,h.jsxs)(s.Z,{justifyContent:"center",fill:!0,children:[f("category",o,[10,100,250]),f("language",i,[10,100]),f("country",b,[10,100]),f("created",l,[])]})]})};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){(0,i.I0)();var t=(0,i.v9)((function(e){return e[l.Z.automata.name]}));return t?(0,h.jsx)(a.Z,{xs:(0,h.jsx)(o.Z,{type:t.params.renderer,title:l.Z.page.title,description:l.Z.page.description,url:l.Z.page.url(t.params.entity),data:t.data,dashboard:(0,h.jsx)(b,{data:t.data,loading:t.loading}),loading:t.loading,params:m({},t.params)})}):(0,h.jsx)("div",{})}},20111:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcasts",function(){return n(77173)}])}},function(e){e.O(0,[572,685,378,922,894,364,774,888,179],(function(){return t=20111,e(e.s=t);var t}));var t=e.O();_N_E=t}]);