/*! For license information please see 9467.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[9467,5298],{71993:(e,t,r)=>{function n(e,t,r){const n={};return Object.keys(e).forEach((s=>{n[s]=e[s].reduce(((e,n)=>(n&&(r&&r[n]&&e.push(r[n]),e.push(t(n))),e)),[]).join(" ")})),n}r.d(t,{Z:()=>n})},15773:(e,t,r)=>{r.d(t,{Z:()=>s});const n={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function s(e,t){return n[t]||`${e}-${t}`}},88858:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(15773);function s(e,t){const r={};return t.forEach((t=>{r[t]=(0,n.Z)(e,t)})),r}},87893:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(87462),s=r(63366),l=r(94863);const a=["sx"];function o(e){const{sx:t}=e,r=(0,s.Z)(e,a),{systemProps:o,otherProps:i}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((r=>{l.G[r]?t.systemProps[r]=e[r]:t.otherProps[r]=e[r]})),t})(r);return(0,n.Z)({},i,{sx:(0,n.Z)({},o,t)})}},71713:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(83528),s=r(35754);const l=(0,n.Z)(),a=function(e=l){return(0,s.Z)(e)}},35754:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294);const s=n.createContext(null),l=function(e=null){const t=n.useContext(s);return t&&(r=t,0!==Object.keys(r).length)?t:e;var r}},5609:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(87462),s=r(71713);var l=r(90247);function a({props:e,name:t}){return function({props:e,name:t,defaultTheme:r}){const l=function(e){const{theme:t,name:r,props:s}=e;if(!(t&&t.components&&t.components[r]&&t.components[r].defaultProps))return s;const l=(0,n.Z)({},s),a=t.components[r].defaultProps;let o;for(o in a)void 0===l[o]&&(l[o]=a[o]);return l}({theme:(0,s.Z)(r),name:t,props:e});return l}({props:e,name:t,defaultTheme:l.Z})}},86688:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),s=r(72797);n.Component;const l=e=>class extends n.Component{render(){const t="title"in this.props?this.props.title:null,r="placeholder"in this.props?this.props.placeholder:{};return r.width&&r.width,r.height&&r.height,n.createElement(s.Z,{from:t,style:{width:"100%"}},n.createElement(e,this.props))}}},36776:(e,t,r)=>{r.d(t,{Z:()=>n});const n={links_disabled:!1}},93268:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),s=r(26447);function l(e){return n.createElement(s.Z,{sx:{padding:{sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"}}},e.children)}},80383:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),s=r(86688),l=r(41749);class a extends n.Component{render(){var{direction:e,spacing:t,className:r,justify:s,alignItems:a,style:o,flex:i}=this.props,t=t||0;return o=o||{},i&&(o.display="flex"),n.createElement(l.Z,{container:!0,direction:e,justifyContent:s,alignItems:a,className:r,spacing:t,style:o},this.props.children)}}const o=(0,s.Z)(a)},81648:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),s=r(86688),l=r(41749);class a extends n.Component{render(){var{visible:e,className:t,xs:r,sm:s,md:a,style:o,fill:i,flex:c,center:d}=this.props;e=e||!0;var m={...o};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,i&&(m.width="100%"),c&&(m.flex=1),e&&n.createElement(l.Z,{className:t,item:!0,xs:r,sm:s,md:a,style:m},this.props.children)}}const o=(0,s.Z)(a)},83347:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),s=r(12613),l=r(86688);class a extends n.Component{render(){var{xs:e,sm:t,md:r,lg:l,xl:a}=this.props;return e=e||null,t=t||e,r=r||t,l=l||r,a=a||l,n.createElement("div",{style:{width:"100%"}},n.createElement(s.Z,{only:["sm","md","lg","xl"]},e),n.createElement(s.Z,{only:["xs","md","lg","xl"]},t),n.createElement(s.Z,{only:["xs","sm","lg","xl"]},r),n.createElement(s.Z,{only:["xs","sm","md","xl"]},l),n.createElement(s.Z,{only:["xs","sm","md","lg"]},a))}}const o=(0,l.Z)(a)},87558:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),s=r(73727),l=r(36776);class a extends n.Component{render(){var{children:e,className:t,to:r,href:a,style:o,external:i}=this.props;if(e=(r=(r=r||a)||"http://localhost")?e:"NO LINK DEFINED",o=o||{},r&&"string"!=typeof r)return"INVALID URL";const c=!((i=!0===i)||r&&0===r.indexOf("http")),d=c?"_self":"_blank";return 0==(0===r.indexOf("#"))&&1==c&&0==l.Z.links_disabled?n.createElement(s.OL,{className:t,to:r,style:o},e):n.createElement("a",{className:t,href:r,style:o,target:d},e)}}const o=a},97236:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),s=r(87558);r(36776);class l extends n.Component{render(){var{children:e,className:t,to:r,href:l,border:a,style:o,external:i}=this.props;return e=(r=(r=r||l)||"http://localhost")?e:"NO LINK DEFINED",a=!0===a||"true"===a?"text-link":"",(o=o||{}).padding=o.padding?o.padding:"0.5rem 0.75rem",t=`${a} ${t||""}`,i=!0===i,n.createElement(s.Z,{className:t,to:r,style:o,external:i},e)}}const a=l},13210:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(67294),s=r(80383),l=r(81648),a=r(87125),o=r(93775);class i extends n.Component{render(){const{data:e,loading:t}=this.props,{total:r,awards:i,classification:c,country:d,genre:m,type:u,rating:p,yearReleased:f,streamBy:h}=e||{},y=(e,r,s)=>n.createElement(l.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},n.createElement(o.default,{loading:t,title:e,data:r||{},ranges:s}));return n.createElement("div",{style:{width:"100%"}},n.createElement(s.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(s.Z,{justifyContent:"center",fill:!0},((e,r,s)=>n.createElement(l.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},n.createElement(a.default,{loading:t,title:"movies",data:r?r.toString():r,icon:"local_movies"})))(0,r))),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(s.Z,{justifyContent:"center",fill:!0},y("awards",i,[1,5,10,20,30,70,100,250]),y("classification",c,[]),y("countries",d,[1,5,10,20,30,70,100,250]),y("genres",m,[100,250]),y("stream by",h,[]),y("types",u,[]),y("rated by",p,[]),y("years released",f,[10,25,50])))))}}const c=i},76257:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(67294),s=r(93268),l=r(80383),a=r(81648),o=r(13210),i=r(61400);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}const d=function(e){return n.createElement(s.Z,null,n.createElement(l.Z,{className:"page-module",fill:!0},n.createElement(a.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"}},n.createElement(o.default,e)),n.createElement(a.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"}},n.createElement(i.default,c({},e,{filter:"movies"})))))}},51299:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(67294),s=r(93268),l=r(13210),a=r(61400);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const i=function(e){return n.createElement(s.Z,null,n.createElement(l.default,e),n.createElement(a.default,o({},e,{filter:"movies"})))}},92667:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(67294),s=r(83347),l=r(51299),a=r(76257);function o(e){return n.createElement(s.Z,{xs:n.createElement(l.default,e),md:n.createElement(a.default,e)})}},61400:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(67294),s=r(58524),l=r(75298),a=r(36501),o=r(97236);const i=(0,s.ZP)("div")({padding:"0.85rem"}),c=(0,s.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),d=(0,s.ZP)("div")({fontSize:"0.9rem"}),m=function(e){const{filter:t}=e,r=l.default.getBy(t);return n.createElement(a.Z,null,n.createElement(i,null,n.createElement(c,null,"Stories"),r.map(((e,t)=>n.createElement(d,{key:t},n.createElement(o.Z,{href:e.url},e.title))))))}},75298:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});const n=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcast_music"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]}],s=new class{constructor(){}getBy(e){const t=[];return n.forEach((r=>{r.id!==e&&r.tags.includes(e)&&t.push(r)})),t}}},75251:(e,t,r)=>{var n=r(67294),s=60103;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;s=l("react.element"),l("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,l={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:d,props:l,_owner:a.current}}t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)}}]);