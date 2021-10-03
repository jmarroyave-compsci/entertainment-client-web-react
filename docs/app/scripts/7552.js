"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[7552],{32116:(t,e,i)=>{i.d(e,{Z:()=>f});var r=i(63366),n=i(87462),a=i(67294),o=(i(45697),i(86010)),l=i(71993),s=i(94581),h=i(58524),d=i(5609),c=i(15773);function m(t){return(0,c.Z)("MuiDivider",t)}(0,i(88858).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var p=i(85893);const g=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],u=(0,h.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,"vertical"===i.orientation&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&"vertical"===i.orientation&&e.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:t.palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:(0,s.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:t,ownerState:e})=>(0,n.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${t.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:t,ownerState:e})=>(0,n.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${t.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:t})=>(0,n.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),v=(0,h.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.wrapper,"vertical"===i.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,n.Z)({display:"inline-block",paddingLeft:t.spacing(1.2),paddingRight:t.spacing(1.2)},"vertical"===e.orientation&&{paddingTop:t.spacing(1.2),paddingBottom:t.spacing(1.2)}))),f=a.forwardRef((function(t,e){const i=(0,d.Z)({props:t,name:"MuiDivider"}),{absolute:a=!1,children:s,className:h,component:c=(s?"div":"hr"),flexItem:f=!1,light:w=!1,orientation:b="horizontal",role:x=("hr"!==c?"separator":void 0),textAlign:Z="center",variant:y="fullWidth"}=i,S=(0,r.Z)(i,g),C=(0,n.Z)({},i,{absolute:a,component:c,flexItem:f,light:w,orientation:b,role:x,textAlign:Z,variant:y}),k=(t=>{const{absolute:e,children:i,classes:r,flexItem:n,light:a,orientation:o,textAlign:s,variant:h}=t,d={root:["root",e&&"absolute",h,a&&"light","vertical"===o&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(d,m,r)})(C);return(0,p.jsx)(u,(0,n.Z)({as:c,className:(0,o.Z)(k.root,h),role:x,ref:e,ownerState:C},S,{children:s?(0,p.jsx)(v,{className:k.wrapper,ownerState:C,children:s}):null}))}))},28973:(t,e,i)=>{i.d(e,{Z:()=>C});var r=i(63366),n=i(87462),a=i(67294),o=i(86010),l=(i(45697),i(25258)),s=i(71993);var h=i(94581),d=i(58524),c=i(5609),m=i(15773);function p(t){return(0,m.Z)("MuiSkeleton",t)}(0,i(88858).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g=i(85893);const u=["animation","className","component","height","style","variant","width"];let v,f,w,b,x=t=>t;const Z=(0,l.F4)(v||(v=x`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),y=(0,l.F4)(f||(f=x`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),S=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,e[i.variant],!1!==i.animation&&e[i.animation],i.hasChildren&&e.withChildren,i.hasChildren&&!i.width&&e.fitContent,i.hasChildren&&!i.height&&e.heightAuto]}})((({theme:t,ownerState:e})=>{const i=(o=t.shape.borderRadius,String(o).match(/[\d.\-+]*\s*(.*)/)[1]||""||"px"),r=(a=t.shape.borderRadius,parseFloat(a));var a,o;return(0,n.Z)({display:"block",backgroundColor:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${i}/${Math.round(r/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(({ownerState:t})=>"pulse"===t.animation&&(0,l.iv)(w||(w=x`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),Z)),(({ownerState:t,theme:e})=>"wave"===t.animation&&(0,l.iv)(b||(b=x`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(90deg, transparent, ${0}, transparent);
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),y,e.palette.action.hover))),C=a.forwardRef((function(t,e){const i=(0,c.Z)({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:l,component:h="span",height:d,style:m,variant:v="text",width:f}=i,w=(0,r.Z)(i,u),b=(0,n.Z)({},i,{animation:a,component:h,variant:v,hasChildren:Boolean(w.children)}),x=(t=>{const{classes:e,variant:i,animation:r,hasChildren:n,width:a,height:o}=t,l={root:["root",i,r,n&&"withChildren",n&&!a&&"fitContent",n&&!o&&"heightAuto"]};return(0,s.Z)(l,p,e)})(b);return(0,g.jsx)(S,(0,n.Z)({as:h,ref:e,className:(0,o.Z)(x.root,l),ownerState:b},w,{style:(0,n.Z)({width:f,height:d},m)}))}))},26447:(t,e,i)=>{i.d(e,{Z:()=>v});var r=i(63366),n=i(87462),a=i(67294),o=(i(45697),i(46663)),l=i(11930),s=i(87893),h=i(86521),d=i(58524),c=i(5609),m=i(85893);const p=["component","direction","spacing","divider","children"];function g(t,e){const i=a.Children.toArray(t).filter(Boolean);return i.reduce(((t,r,n)=>(t.push(r),n<i.length-1&&t.push(a.cloneElement(e,{key:`separator-${n}`})),t)),[])}const u=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>[e.root]})((({ownerState:t,theme:e})=>{let i=(0,n.Z)({display:"flex"},(0,o.k9)({theme:e},t.direction,(t=>({flexDirection:t}))));if(t.spacing){const r=(0,l.hB)(e),n=Object.keys(e.breakpoints.values).reduce(((e,i)=>(null==t.spacing[i]&&null==t.direction[i]||(e[i]=!0),e)),{}),a=(0,o.P$)({values:t.direction,base:n}),s=(0,o.P$)({values:t.spacing,base:n}),d=(e,i)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${n=i?a[i]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]}`]:(0,l.NA)(r,e)}};var n};i=(0,h.Z)(i,(0,o.k9)({theme:e},s,d))}return i})),v=a.forwardRef((function(t,e){const i=(0,c.Z)({props:t,name:"MuiStack"}),a=(0,s.Z)(i),{component:o="div",direction:l="column",spacing:h=0,divider:d,children:v}=a,f=(0,r.Z)(a,p),w={direction:l,spacing:h};return(0,m.jsx)(u,(0,n.Z)({as:o,ownerState:w,ref:e},f,{children:d?g(v,d):v}))}))},67552:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var r=i(67294),n=i(26447),a=i(28973),o=i(32116);function l(t){return r.createElement(n.Z,{spacing:1,divider:r.createElement(o.Z,{flexItem:!0})},r.createElement("div",null,r.createElement(a.Z,{variant:"text",style:{width:"25%"}}),r.createElement(a.Z,{variant:"text",style:{width:"60%"}})),r.createElement("div",null,r.createElement(a.Z,{variant:"text",style:{width:"25%"}}),r.createElement(a.Z,{variant:"text",style:{width:"60%"}})),r.createElement("div",null,r.createElement(a.Z,{variant:"text",style:{width:"25%"}}),r.createElement(a.Z,{variant:"text",style:{width:"60%"}})),r.createElement("div",null,r.createElement(a.Z,{variant:"text",style:{width:"25%"}}),r.createElement(a.Z,{variant:"text",style:{width:"60%"}})))}},86010:(t,e,i)=>{function r(t){var e,i,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(i=r(t[e]))&&(n&&(n+=" "),n+=i);else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function n(){for(var t,e,i=0,n="";i<arguments.length;)(t=arguments[i++])&&(e=r(t))&&(n&&(n+=" "),n+=e);return n}i.d(e,{Z:()=>n})}}]);