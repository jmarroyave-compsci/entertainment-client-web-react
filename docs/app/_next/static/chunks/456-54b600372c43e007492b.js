"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[456],{72642:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(1048),i=n(32793),o=n(67294),a=(n(45697),n(86010)),l=n(77463),c=n(41796),s=n(29602),d=n(16122),u=n(55116),p=n(98216),h=n(21420);function m(e){return(0,h.Z)("MuiButton",e)}var f=(0,n(11271).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=n(85893);const x=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],v=e=>(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),b=(0,s.ZP)(u.Z,{shouldForwardProp:e=>(0,s.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,p.Z)(n.color)}`],t[`size${(0,p.Z)(n.size)}`],t[`${n.variant}Size${(0,p.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,i.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${f.focusVisible}`]:(0,i.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${f.disabled}`]:(0,i.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${f.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${f.disabled}`]:{boxShadow:"none"}})),y=(0,s.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,p.Z)(n.size)}`]]}})((({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},v(e)))),Z=(0,s.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,p.Z)(n.size)}`]]}})((({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},v(e))));var j=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiButton"}),{children:o,color:c="primary",component:s="button",disabled:u=!1,disableElevation:h=!1,disableFocusRipple:f=!1,endIcon:v,focusVisibleClassName:j,fullWidth:S=!1,size:w="medium",startIcon:z,type:k,variant:O="text"}=n,P=(0,r.Z)(n,x),C=(0,i.Z)({},n,{color:c,component:s,disabled:u,disableElevation:h,disableFocusRipple:f,fullWidth:S,size:w,type:k,variant:O}),R=(e=>{const{color:t,disableElevation:n,fullWidth:r,size:o,variant:a,classes:c}=e,s={root:["root",a,`${a}${(0,p.Z)(t)}`,`size${(0,p.Z)(o)}`,`${a}Size${(0,p.Z)(o)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,p.Z)(o)}`],endIcon:["endIcon",`iconSize${(0,p.Z)(o)}`]},d=(0,l.Z)(s,m,c);return(0,i.Z)({},c,d)})(C),I=z&&(0,g.jsx)(y,{className:R.startIcon,ownerState:C,children:z}),$=v&&(0,g.jsx)(Z,{className:R.endIcon,ownerState:C,children:v});return(0,g.jsxs)(b,(0,i.Z)({ownerState:C,component:s,disabled:u,focusRipple:!f,focusVisibleClassName:(0,a.Z)(R.focusVisible,j),ref:t,type:k},P,{classes:R,children:[I,o,$]}))}))},2637:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(4942),i=(n(67294),n(26447)),o=n(60361),a=n(99601),l=n(76085),c=n(92275),s=n(73925),d=n(85893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=e.banner,n=e.mainCol,r=e.rightCol,u=e.id;return(0,d.jsxs)(i.Z,{children:[t&&(0,d.jsx)("div",{style:{marginBottom:"1rem"},children:(0,d.jsx)(a.Z,{compact:!0,className:"section-0",children:t})}),(0,d.jsx)(o.Z,{children:(0,d.jsxs)(l.Z,{className:"page-module",fill:!0,children:[(0,d.jsx)(c.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"},children:n}),(0,d.jsxs)(c.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"},children:[(0,d.jsx)(s.Z,p(p({},e),{},{filter:u})),r]})]})})]})}},96035:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var r=n(26447),i=(n(515),n(29602)),o=(0,i.ZP)("h2")({padding:"1rem 0",margin:0}),a=(0,i.ZP)("div")({fontSize:"1rem"}),l=(0,i.ZP)("div")({paddingTop:"2rem"}),c=n(85893),s=function(e){var t=e.title,n=e.description,i=e.carousel,s=e.footer,d=e.hero;return(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(o,{children:t}),n&&(0,c.jsx)(a,{children:n}),!d&&i,!d&&(0,c.jsx)(l,{children:s})]})}},32478:function(e,t,n){n.d(t,{Z:function(){return u}});n(67294);var r=n(29602),i=n(86529),o=(n(70338),n(28973)),a=n(26447),l=n(36501),c=n(85893),s=(0,r.ZP)("div")({padding:"1rem 0"}),d=(0,r.ZP)("div")({padding:"0.5rem"});function u(e){var t=e.data,n=e.loading;return n=n||!t||!t.length,t=t&&t.length&&t.length>0?t:[1,2,3,4,5],(0,c.jsx)(s,{children:(0,c.jsx)(i.default,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container-with-dots",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0,children:t.map((function(t,r){return(0,c.jsx)(d,{children:n?(0,c.jsx)(p,{}):e.renderItem?e.renderItem(t):h(t)},r)}))})})}function p(){return(0,c.jsx)(l.Z,{style:{padding:"0.5rem"},children:(0,c.jsxs)(a.Z,{spacing:1,children:[(0,c.jsx)(o.Z,{variant:"text",width:"80%"}),(0,c.jsx)(o.Z,{variant:"rectangular",height:118}),(0,c.jsx)(o.Z,{variant:"text"})]})})}function h(e){e.id;var t=e.description,n=e.title;e.image,e.link;return(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:n}),(0,c.jsx)("span",{children:t})]})}},45528:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(4942),i=(n(67294),n(76085)),o=n(92275),a=n(79895),l=n(26447),c=n(28973),s=n(9482),d=n(29602),u=(0,d.ZP)("div")({padding:"0.5rem"}),p=(0,d.ZP)("div")({padding:"0.5rem"}),h=n(85893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=e.data,n=e.loading,r=e.url,a=e.skeleton,l=e.item;return n=n||!t||0==t.length,t=t&&t.length>0?t:[1,2,3,4,5],(0,h.jsx)(u,{children:(0,h.jsx)(s.Z,f(f({},e),{},{url:r,children:(0,h.jsx)(i.Z,{justifyContent:"center",fill:!0,style:{width:"100%"},children:t.map((function(e,t){return(0,h.jsx)(o.Z,{xs:12,sm:6,md:6,lg:4,children:(0,h.jsx)(p,{children:n?a||(0,h.jsx)(x,{}):l?l(e):null})},t)}))})}))})}function x(){return(0,h.jsx)(a.Z,{style:{padding:"0.5rem"},children:(0,h.jsxs)(l.Z,{spacing:1,children:[(0,h.jsx)(c.Z,{variant:"text",width:"80%"}),(0,h.jsx)(c.Z,{variant:"rectangular",height:240}),(0,h.jsx)(c.Z,{variant:"text"})]})})}},9482:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var r=n(29602),i=n(11163),o=n(26447),a=n(72642),l=n(85893),c=(0,r.ZP)("h3")({marginTop:0});function s(e){var t=(0,i.useRouter)(),n=e.children,r=e.route,s=e.loading,d=e.data,u=e.url,p=e.skeleton,h=r.page;h=h?parseInt(h):1;var m=function(e){var n="".concat(u,"/").concat(e);t.push(n),window.scrollTo(0,0)},f=d&&d.length<10,g=1==h;return(0,l.jsx)(l.Fragment,{children:d&&d.length>0?(0,l.jsxs)(o.Z,{spacing:2,children:[n,(0,l.jsxs)(o.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,l.jsx)(a.Z,{variant:"outlined",disabled:g,onClick:function(){return m(h-1)},children:"Back"}),(0,l.jsx)(a.Z,{variant:"outlined",disabled:f,onClick:function(){return m(h+1)},children:"Next"})]})]}):(0,l.jsx)(c,{children:s?p||"loading":"No results"})})}},73925:function(e,t,n){n.d(t,{Z:function(){return m}});n(67294);var r=n(29602),i=n(15671),o=n(43144),a=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcast_music"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]}],l=new(function(){function e(){(0,i.Z)(this,e)}return(0,o.Z)(e,[{key:"getBy",value:function(e){var t=[];return a.forEach((function(n){n.id!==e&&n.tags.includes(e)&&t.push(n)})),t}}]),e}()),c=n(36501),s=n(515),d=n(85893),u=(0,r.ZP)("div")({padding:"0.85rem"}),p=(0,r.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),h=(0,r.ZP)("div")({fontSize:"0.9rem"}),m=function(e){var t=e.filter,n=l.getBy(t);return(0,d.jsx)(c.Z,{children:(0,d.jsxs)(u,{children:[(0,d.jsx)(p,{children:"Stories"}),n.map((function(e,t){return(0,d.jsx)(h,{children:(0,d.jsx)(s.Z,{href:e.url,children:e.title})},t)}))]})})}},92498:function(e,t,n){var r=n(15671),i=n(43144),o=n(60136),a=n(82963),l=n(61120),c=n(67294),s=n(14670),d=n(18463),u=n(51907),p=n(79912),h=n(951),m=n(94697),f=n(22318),g=n(85893);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var v=function(e){(0,o.Z)(n,e);var t=x(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.title,r=e.text,i=e.image,o=e.className,a=e.style,l=e.actions,c=e.imageHeight,s=e.noImage,x=0;return(a=a||{}).display="flex",a.flexDirection="column",i=i||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",(0,g.jsxs)(d.Z,{className:o,style:a,children:[(0,g.jsx)(m.Z,{title:(0,g.jsx)(f.Z,{noWrap:!0,variant:"h6",component:"h4",children:n}),style:{display:"block",overflow:"hidden"}}),!s&&(0,g.jsx)(h.Z,{className:t.media,height:c||null,image:i}),r&&""!==r.trim&&(0,g.jsx)(p.Z,{style:{flex:1},children:r}),(0,g.jsx)(u.Z,{children:l&&l.map((function(e){return(0,g.jsx)("div",{children:e},x++)}))})]})}}]),n}(c.Component);t.Z=(0,s.Z)((function(e){return{media:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"}}}))(v)},60361:function(e,t,n){n.d(t,{Z:function(){return o}});n(67294);var r=n(26447),i=n(85893);function o(e){var t=e.noPadding;return(0,i.jsx)(r.Z,{sx:{padding:t?{}:{xs:"0rem 2rem 3rem 2rem",sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"},fontSize:"1rem"},children:e.children})}},99601:function(e,t,n){var r=n(15671),i=n(43144),o=n(60136),a=n(82963),l=n(61120),c=n(67294),s=n(7090),d=n(33875),u=n(1267),p=n(90023),h=n(85893);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var f=function(e){(0,o.Z)(n,e);var t=m(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.cover,r=(e.padding,e.children),i=(e.hero,e.rounded),o=(e.compact,!0===n?"100vh":"inherit");return i=!0===i,(0,h.jsx)(s.Z,{xs:this.renderSection("xs",r,t,o,i),sm:this.renderSection("sm",r,t,o,i),md:this.renderSection("md",r,t,o,i)})}},{key:"renderSection",value:function(e,t,n,r,i){var o=this.getStyle(n),a={boxSizing:"border-box",width:"100%",height:r,padding:this.getPadding(e),borderRadius:i?"0.5rem 0.5rem 0 0":0,background:o.background,color:o.color};return(0,h.jsx)(u.Z,{from:"/core/ui/section",children:(0,h.jsx)("div",{className:"com-layout-section",children:(0,h.jsx)("div",{className:"".concat(n),style:a,children:t})})})}},{key:"getPadding",value:function(e){var t=this.props.compact,n={xs:{top:1.5,bottom:3,left:1.5,right:1.5},sm:{top:2,bottom:4,left:3,right:3},md:{top:3,bottom:2.5,left:2.5,right:2.5}}[e];return"".concat(n.top,"rem ").concat(n.right,"rem ").concat(t?n.top:n.bottom,"rem ").concat(n.left,"rem")}},{key:"getStyle",value:function(e){switch(e){case"section-0":return{background:"linear-gradient(60deg, ".concat(p.Z.palette.primary.dark," 0%, #000 150%)"),color:p.Z.palette.primary.contrastText};case"section-1":return{background:"linear-gradient(60deg, ${theme.palette.primary.light} 0%, rgba(85,85,85,1) 100%)",color:"black"};case"section-2":return{background:"linear-gradient(180deg, rgba(215,215,215,1) 0%, rgba(255,245,245,1) 125%)",color:"#444"};case"section-3":return{background:"linear-gradient(180deg, #fff 0%, rgba(215,215,215,1) 100%)",color:"#333"};default:return""!=e&&console.log(e),{background:"#f0f0f0",color:"black"}}}}]),n}(c.Component);t.Z=(0,d.Z)(f)}}]);