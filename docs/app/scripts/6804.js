/*! For license information please see 6804.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[6804,5298],{60122:(e,t,r)=>{r.d(t,{x:()=>i});var a=r(24909),o=r(67294),n=r(24273);function i(){var e=o.useContext((0,n.K)()).client;return __DEV__?(0,a.kG)(e,"No Apollo Client instance can be found. Please ensure that you have called `ApolloProvider` higher up in your tree."):(0,a.kG)(e,33),e}},10770:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(87462),o=r(42982),n=r(45987),i=r(67294),s=(r(59864),r(45697),r(86010)),l=r(14670),c=r(22318),d=r(59693);const u=(0,r(25209).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var m=r(32467);const p=(0,l.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,d._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=(0,n.Z)(e,["classes"]);return i.createElement(m.Z,(0,a.Z)({component:"li",className:t.root,focusRipple:!0},r),i.createElement(u,{className:t.icon}))}));var f=i.forwardRef((function(e,t){var r=e.children,l=e.classes,d=e.className,u=e.component,m=void 0===u?"nav":u,f=e.expandText,h=void 0===f?"Show path":f,y=e.itemsAfterCollapse,g=void 0===y?1:y,v=e.itemsBeforeCollapse,Z=void 0===v?1:v,b=e.maxItems,x=void 0===b?8:b,w=e.separator,E=void 0===w?"/":w,k=(0,n.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),S=i.useState(!1),C=S[0],P=S[1],$=i.Children.toArray(r).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return i.createElement(c.Z,(0,a.Z)({ref:t,component:m,color:"textSecondary",className:(0,s.Z)(l.root,d)},k),i.createElement("ol",{className:l.ol},function(e,t,r){return e.reduce((function(a,o,n){return n<e.length-1?a=a.concat(o,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:t},r)):a.push(o),a}),[])}(C||x&&$.length<=x?$:function(e){return Z+g>=e.length?e:[].concat((0,o.Z)(e.slice(0,Z)),[i.createElement(p,{"aria-label":h,key:"ellipsis",onClick:function(e){P(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,o.Z)(e.slice(e.length-g,e.length)))}($),l.separator,E)))}));const h=(0,l.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},79895:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(45987),o=r(87462),n=r(67294),i=(r(45697),r(86010)),s=r(14670),l=n.forwardRef((function(e,t){var r=e.classes,s=e.className,l=e.component,c=void 0===l?"div":l,d=e.square,u=void 0!==d&&d,m=e.elevation,p=void 0===m?1:m,f=e.variant,h=void 0===f?"elevation":f,y=(0,a.Z)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(c,(0,o.Z)({className:(0,i.Z)(r.root,s,"outlined"===h?r.outlined:r["elevation".concat(p)],!u&&r.rounded),ref:t},y))}));const c=(0,s.Z)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),(0,o.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(l)},22318:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(87462),o=r(45987),n=r(67294),i=(r(45697),r(86010)),s=r(14670),l=r(93871),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=n.forwardRef((function(e,t){var r=e.align,s=void 0===r?"inherit":r,d=e.classes,u=e.className,m=e.color,p=void 0===m?"initial":m,f=e.component,h=e.display,y=void 0===h?"initial":h,g=e.gutterBottom,v=void 0!==g&&g,Z=e.noWrap,b=void 0!==Z&&Z,x=e.paragraph,w=void 0!==x&&x,E=e.variant,k=void 0===E?"body1":E,S=e.variantMapping,C=void 0===S?c:S,P=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),$=f||(w?"p":C[k]||c[k])||"span";return n.createElement($,(0,a.Z)({className:(0,i.Z)(d.root,u,"inherit"!==k&&d[k],"initial"!==p&&d["color".concat((0,l.Z)(p))],b&&d.noWrap,v&&d.gutterBottom,w&&d.paragraph,"inherit"!==s&&d["align".concat((0,l.Z)(s))],"initial"!==y&&d["display".concat((0,l.Z)(y))]),ref:t},P))}));const u=(0,s.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},24622:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(87462),o=r(63366),n=r(67294),i=(r(45697),r(86010)),s=r(56289),l=r(18784),c=r(87893),d=r(71713),u=r(85893);const m=["className","component"],p=function(e={}){const{defaultTheme:t}=e,r=(0,s.ZP)("div")(l.Z);return n.forwardRef((function(e,n){const s=(0,d.Z)(t),l=(0,c.Z)(e),{className:p,component:f="div"}=l,h=(0,o.Z)(l,m);return(0,u.jsx)(r,(0,a.Z)({as:f,ref:n,className:(0,i.Z)(p,"MuiBox-root"),theme:s},h))}))}({defaultTheme:(0,r(24345).Z)()})},59062:(e,t,r)=>{r.d(t,{Z:()=>C});var a=r(63366),o=r(87462),n=r(67294),i=(r(45697),r(86010)),s=r(71993),l=r(25258),c=r(98216),d=r(5609),u=r(58524),m=r(15773);function p(e){return(0,m.Z)("MuiCircularProgress",e)}(0,r(88858).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=r(85893);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let y,g,v,Z,b=e=>e;const x=(0,l.F4)(y||(y=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,l.F4)(g||(g=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),E=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,o.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:t.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(v||(v=b`
      animation: ${0} 1.4s linear infinite;
    `),x))),k=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),S=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,o.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(Z||(Z=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w))),C=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:l="primary",disableShrink:u=!1,size:m=40,style:y,thickness:g=3.6,value:v=0,variant:Z="indeterminate"}=r,b=(0,a.Z)(r,h),x=(0,o.Z)({},r,{color:l,disableShrink:u,size:m,thickness:g,value:v,variant:Z}),w=(e=>{const{classes:t,variant:r,color:a,disableShrink:o}=e,n={root:["root",r,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,o&&"circleDisableShrink"]};return(0,s.Z)(n,p,t)})(x),C={},P={},$={};if("determinate"===Z){const e=2*Math.PI*((44-g)/2);C.strokeDasharray=e.toFixed(3),$["aria-valuenow"]=Math.round(v),C.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,f.jsx)(E,(0,o.Z)({className:(0,i.Z)(w.root,n),style:(0,o.Z)({width:m,height:m},P,y),ownerState:x,ref:t,role:"progressbar"},$,b,{children:(0,f.jsx)(k,{className:w.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,f.jsx)(S,{className:w.circle,style:C,ownerState:x,cx:44,cy:44,r:(44-g)/2,fill:"none",strokeWidth:g})})}))}))},93268:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294),o=r(26447);function n(e){return a.createElement(o.Z,{sx:{padding:{sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"}}},e.children)}},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(83037).default},13210:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(67294),o=r(80383),n=r(81648),i=r(87125),s=r(93775);class l extends a.Component{render(){const{data:e,loading:t}=this.props,{total:r,awards:l,classification:c,country:d,genre:u,type:m,rating:p,yearReleased:f,streamBy:h}=e||{},y=(e,r,o)=>a.createElement(n.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},a.createElement(s.default,{loading:t,title:e,data:r||{},ranges:o}));return a.createElement("div",{style:{width:"100%"}},a.createElement(o.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},a.createElement(n.Z,{xs:12,sm:12,md:12},a.createElement(o.Z,{justifyContent:"center",fill:!0},((e,r,o)=>a.createElement(n.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},a.createElement(i.default,{loading:t,title:"movies",data:r?r.toString():r,icon:"local_movies"})))(0,r))),a.createElement(n.Z,{xs:12,sm:12,md:12},a.createElement(o.Z,{justifyContent:"center",fill:!0},y("awards",l,[1,5,10,20,30,70,100,250]),y("classification",c,[]),y("countries",d,[1,5,10,20,30,70,100,250]),y("genres",u,[100,250]),y("stream by",h,[]),y("types",m,[]),y("rated by",p,[]),y("years released",f,[10,25,50])))))}}const c=l},36579:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(92667).default},76257:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=r(67294),o=r(93268),n=r(80383),i=r(81648),s=r(13210),l=r(61400);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}const d=function(e){return a.createElement(o.Z,null,a.createElement(n.Z,{className:"page-module",fill:!0},a.createElement(i.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"}},a.createElement(s.default,e)),a.createElement(i.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"}},a.createElement(l.default,c({},e,{filter:"movies"})))))}},51299:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(67294),o=r(93268),n=r(13210),i=r(61400);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}const l=function(e){return a.createElement(o.Z,null,a.createElement(n.default,e),a.createElement(i.default,s({},e,{filter:"movies"})))}},92667:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294),o=r(83347),n=r(51299),i=r(76257);function s(e){return a.createElement(o.Z,{xs:a.createElement(n.default,e),md:a.createElement(i.default,e)})}},61400:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var a=r(67294),o=r(58524),n=r(75298),i=r(36501),s=r(97236);const l=(0,o.ZP)("div")({padding:"0.85rem"}),c=(0,o.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),d=(0,o.ZP)("div")({fontSize:"0.9rem"}),u=function(e){const{filter:t}=e,r=n.default.getBy(t);return a.createElement(i.Z,null,a.createElement(l,null,a.createElement(c,null,"Stories"),r.map(((e,t)=>a.createElement(d,{key:t},a.createElement(s.Z,{href:e.url},e.title))))))}},75298:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});const a=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcast_music"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]}],o=new class{constructor(){}getBy(e){const t=[];return a.forEach((r=>{r.id!==e&&r.tags.includes(e)&&t.push(r)})),t}}},85196:(e,t,r)=>{r.r(t),r.d(t,{QRY_DASHBOARD:()=>l,default:()=>c});var a=r(67294),o=r(18319),n=r(36579),i=r(54397),s=r(70846);const l=i.Ps`
  query getDashboard 
{
  dashboardMovies {
    awards
    classification
    country
    genre
    rating
    streamBy
    total
    type
    yearReleased
  }
}
`;function c(e){var{loading:t,error:r,data:i}=(0,s.a)(l);const c={loading:t,error:r,data:i=i?i.dashboardMovies:{},breadcrumbs:[{name:"tv"}]};return a.createElement(o.default,c,a.createElement(n.default,c))}},69921:(e,t)=>{var r=60103,a=60106,o=60107,n=60108,i=60114,s=60109,l=60110,c=60112,d=60113,u=60120,m=60115,p=60116,f=60121,h=60122,y=60117,g=60129,v=60131;if("function"==typeof Symbol&&Symbol.for){var Z=Symbol.for;r=Z("react.element"),a=Z("react.portal"),o=Z("react.fragment"),n=Z("react.strict_mode"),i=Z("react.profiler"),s=Z("react.provider"),l=Z("react.context"),c=Z("react.forward_ref"),d=Z("react.suspense"),u=Z("react.suspense_list"),m=Z("react.memo"),p=Z("react.lazy"),f=Z("react.block"),h=Z("react.server.block"),y=Z("react.fundamental"),g=Z("react.debug_trace_mode"),v=Z("react.legacy_hidden")}function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case i:case n:case d:case u:return e;default:switch(e=e&&e.$$typeof){case l:case c:case p:case m:case s:return e;default:return t}}case a:return t}}}var x=s,w=r,E=c,k=o,S=p,C=m,P=a,$=i,M=n,R=d;t.ContextConsumer=l,t.ContextProvider=x,t.Element=w,t.ForwardRef=E,t.Fragment=k,t.Lazy=S,t.Memo=C,t.Portal=P,t.Profiler=$,t.StrictMode=M,t.Suspense=R,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return b(e)===l},t.isContextProvider=function(e){return b(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return b(e)===c},t.isFragment=function(e){return b(e)===o},t.isLazy=function(e){return b(e)===p},t.isMemo=function(e){return b(e)===m},t.isPortal=function(e){return b(e)===a},t.isProfiler=function(e){return b(e)===i},t.isStrictMode=function(e){return b(e)===n},t.isSuspense=function(e){return b(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===i||e===g||e===n||e===d||e===u||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===c||e.$$typeof===y||e.$$typeof===f||e[0]===h)},t.typeOf=b},59864:(e,t,r)=>{e.exports=r(69921)}}]);