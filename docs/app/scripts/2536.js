/*! For license information please see 2536.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[2536],{87893:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(87462),o=r(63366),a=r(94863);const l=["sx"];function s(e){const{sx:t}=e,r=(0,o.Z)(e,l),{systemProps:s,otherProps:c}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((r=>{a.G[r]?t.systemProps[r]=e[r]:t.otherProps[r]=e[r]})),t})(r);return(0,n.Z)({},c,{sx:(0,n.Z)({},s,t)})}},71713:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(83528),o=r(35754);const a=(0,n.Z)(),l=function(e=a){return(0,o.Z)(e)}},35754:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const o=n.createContext(null),a=function(e=null){const t=n.useContext(o);return t&&(r=t,0!==Object.keys(r).length)?t:e;var r}},5609:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(87462),o=r(71713);var a=r(90247);function l({props:e,name:t}){return function({props:e,name:t,defaultTheme:r}){const a=function(e){const{theme:t,name:r,props:o}=e;if(!(t&&t.components&&t.components[r]&&t.components[r].defaultProps))return o;const a=(0,n.Z)({},o),l=t.components[r].defaultProps;let s;for(s in l)void 0===a[s]&&(a[s]=l[s]);return a}({theme:(0,o.Z)(r),name:t,props:e});return a}({props:e,name:t,defaultTheme:a.Z})}},43178:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),o=r(91288),a=r(71267);function l({text:e,onClick:t}){return n.createElement(s,null,n.createElement(a.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}l.defaultProps={onClick:null,text:""};const s=o.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},71065:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(67294),o=r(58524),a=r(26447),l=r(43178);const s=(0,o.ZP)("div")({marginTop:"1rem",marginBottom:"1rem"}),c=(0,o.ZP)("h4")({margin:0});function u(e){const{data:t}=e;return t?n.createElement(s,null,n.createElement(a.Z,null,n.createElement(c,null,"More information"),n.createElement("div",null,t&&t.imdb&&n.createElement("a",{href:t.imdb},n.createElement(l.Z,{text:"IMDB"}))))):n.createElement("div",null)}},75251:(e,t,r)=>{var n=r(67294),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,i=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(i=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:i,props:a,_owner:l.current}}t.jsx=u,t.jsxs=u},85893:(e,t,r)=>{e.exports=r(75251)}}]);