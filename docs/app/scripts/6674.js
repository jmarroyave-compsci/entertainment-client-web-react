/*! For license information please see 6674.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[6674,199,2536,611],{41749:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(45987),a=n(87462),i=n(67294),o=(n(45697),n(86010)),l=n(14670),s=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=i.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,s=e.alignItems,c=void 0===s?"stretch":s,m=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,f=e.container,g=void 0!==f&&f,h=e.direction,x=void 0===h?"row":h,v=e.item,y=void 0!==v&&v,w=e.justify,Z=e.justifyContent,E=void 0===Z?"flex-start":Z,b=e.lg,C=void 0!==b&&b,P=e.md,S=void 0!==P&&P,j=e.sm,k=void 0!==j&&j,D=e.spacing,_=void 0===D?0:D,I=e.wrap,N=void 0===I?"wrap":I,O=e.xl,T=void 0!==O&&O,W=e.xs,z=void 0!==W&&W,M=e.zeroMinWidth,B=void 0!==M&&M,A=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=(0,o.Z)(m.root,d,g&&[m.container,0!==_&&m["spacing-xs-".concat(String(_))]],y&&m.item,B&&m.zeroMinWidth,"row"!==x&&m["direction-xs-".concat(String(x))],"wrap"!==N&&m["wrap-xs-".concat(String(N))],"stretch"!==c&&m["align-items-xs-".concat(String(c))],"stretch"!==l&&m["align-content-xs-".concat(String(l))],"flex-start"!==(w||E)&&m["justify-content-xs-".concat(String(w||E))],!1!==z&&m["grid-xs-".concat(String(z))],!1!==k&&m["grid-sm-".concat(String(k))],!1!==S&&m["grid-md-".concat(String(S))],!1!==C&&m["grid-lg-".concat(String(C))],!1!==T&&m["grid-xl-".concat(String(T))]);return i.createElement(p,(0,a.Z)({className:G,ref:t},A))}));const u=(0,l.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(m(r,2)),width:"calc(100% + ".concat(m(r),")"),"& > $item":{padding:m(r,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d)},87893:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(87462),a=n(63366),i=n(94863);const o=["sx"];function l(e){const{sx:t}=e,n=(0,a.Z)(e,o),{systemProps:l,otherProps:s}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{i.G[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);return(0,r.Z)({},s,{sx:(0,r.Z)({},l,t)})}},71713:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(83528),a=n(35754);const i=(0,r.Z)(),o=function(e=i){return(0,a.Z)(e)}},35754:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294);const a=r.createContext(null),i=function(e=null){const t=r.useContext(a);return t&&(n=t,0!==Object.keys(n).length)?t:e;var n}},5609:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(87462),a=n(71713);var i=n(90247);function o({props:e,name:t}){return function({props:e,name:t,defaultTheme:n}){const i=function(e){const{theme:t,name:n,props:a}=e;if(!(t&&t.components&&t.components[n]&&t.components[n].defaultProps))return a;const i=(0,r.Z)({},a),o=t.components[n].defaultProps;let l;for(l in o)void 0===i[l]&&(i[l]=o[l]);return i}({theme:(0,a.Z)(n),name:t,props:e});return i}({props:e,name:t,defaultTheme:i.Z})}},86688:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(72797);r.Component;const i=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},19976:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=(n(45697),n(19119)),i=n(34902);class o extends r.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,n){switch(n){case"ago":return(0,a.Z)(t,new Date);case"DD/MM/YYYY":return(0,i.Z)(t,"dd/MM/yy");default:return(0,i.Z)(t,n)}}render(){var{lang:e,value:t,className:n}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",i=this.getDate(t),o=this._format(e,i,a);return r.createElement("span",{className:n},o)}}const l=o},93013:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}class i extends r.Component{render(){var{src:e,width:t,height:n,style:i,notFound:o}=this.props,l={};return o&&(l.ref=e=>this.img=e,l.onError=()=>o&&this.img.src!=o?this.img.src=o:null),r.createElement("img",a({},l,{style:i,width:t,height:n,src:e}))}}const o=i},80383:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86688),i=n(41749);class o extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:o,style:l,flex:s}=this.props,t=t||0;return l=l||{},s&&(l.display="flex"),r.createElement(i.Z,{container:!0,direction:e,justifyContent:a,alignItems:o,className:n,spacing:t,style:l},this.props.children)}}const l=(0,a.Z)(o)},81648:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86688),i=n(41749);class o extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:o,style:l,fill:s,flex:c,center:m}=this.props;e=e||!0;var d={...l};return(d=d||{textAlign:"inherit"}).textAlign=m?"center":d.textAlign,s&&(d.width="100%"),c&&(d.flex=1),e&&r.createElement(i.Z,{className:t,item:!0,xs:n,sm:a,md:o,style:d},this.props.children)}}const l=(0,a.Z)(o)},43178:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(91288),i=n(71267);function o({text:e,onClick:t}){return r.createElement(l,null,r.createElement(i.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}o.defaultProps={onClick:null,text:""};const l=a.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},70227:(e,t,n)=>{n(67294)},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(67294),a=n(58524);n(80383),n(81648),n(70227);const i=(0,a.ZP)("div")({}),o=(0,a.ZP)("div")({}),l=(0,a.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),s=(0,a.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),c=(0,a.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),m=(0,a.ZP)("h4")({margin:0}),d=(0,a.ZP)("h5")({margin:"1rem 0 1rem 0",padding:"0"}),u=(0,a.ZP)("h6")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",fontWeight:400}),p=(0,a.ZP)("div")({fontSize:"0.85rem"}),f=(0,a.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"});function g(e){var{data:t}=e;return t&&0!=t.length?!0===e.mini?function(e,t){var{year:n,all:a}=e,i=a?t.length:2;n=parseInt(n);return r.createElement(l,null,t&&t.length>0&&t.slice(0,i).map(((e,t)=>(e=>!n||e.year==n)(e)&&r.createElement("div",{key:t},r.createElement(s,null,e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category)))),!a&&t&&t.length>i&&r.createElement(s,null,r.createElement(s,null,r.createElement(c,null,"and ",t.length-i," more"))))}(e,t):function(e,t){var n=null,a=null;const{year:l}=e;return r.createElement(i,null,r.createElement(m,null,"Awards"),t&&t.length>0&&t.map(((e,t)=>r.createElement("div",{key:t},(e=>n&&n==e.year?null:(n=e.year,a=null,r.createElement(d,null,e.year)))(e),(e=>a&&a==e.name?null:(a=e.name,r.createElement(u,null,e.name)))(e),r.createElement(o,null,r.createElement(f,null,"false"===e.won||!1===e.won?"nominee":"winner"),r.createElement(p,null,e.category))))))}(e,t):null}},91293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(80383),i=n(81648),o=n(93013),l=n(92863);function s(e){const{src:t,height:n,width:a}=e;return t?r.createElement(o.Z,{src:t,width:a,height:n}):r.createElement(c,e)}function c(e){const{height:t,width:n}=e;return r.createElement("div",{style:{width:`${n}px`,height:`${t}px`,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#888"}},r.createElement(l.Z,null,"broken_image"))}const m=function(e){const{src:t,loading:n}=e;return r.createElement(a.Z,{fill:!0,style:{height:300,width:"100%",backgroundColor:"#333",marginBottom:"1rem"}},r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(s,{src:t,height:300,width:250})))}},38538:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(67294),a=n(58524),i=n(43178),o=n(26447);function l(e){const{data:t}=e;return t?r.createElement(o.Z,{direction:"row"},t.map(((e,t)=>r.createElement(i.Z,{key:t,text:e})))):r.createElement("span",null)}(0,a.ZP)("h1")({margin:0})},71065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=n(58524),i=n(26447),o=n(43178);const l=(0,a.ZP)("div")({marginTop:"1rem",marginBottom:"1rem"}),s=(0,a.ZP)("h4")({margin:0});function c(e){const{data:t}=e;return t?r.createElement(l,null,r.createElement(i.Z,null,r.createElement(s,null,"More information"),r.createElement("div",null,t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(o.Z,{text:"IMDB"}))))):r.createElement("div",null)}},40611:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294);const a=(0,n(58524).ZP)("h1")({margin:0,padding:0,paddingBottom:"0.5rem",fontSize:"3rem",lineHeight:"3rem"});function i(e){const{text:t}=e;return r.createElement(a,null,t)}},77053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(67294),a=n(58524),i=(n(80383),n(81648),n(71065),n(80607)),o=n(19976),l=(n(43178),n(91293)),s=n(26447),c=n(38538),m=n(40611);const d=(0,a.ZP)("div")({margin:"0rem 2rem 2rem 2rem"}),u=(0,a.ZP)("h4")({marginTop:"1rem",marginBottom:"0rem"}),p=function(e){var{data:t,loading:n}=e;return t=t||{},r.createElement(s.Z,null,r.createElement(l.default,{src:t.image}),r.createElement(d,null,r.createElement(c.default,{data:t.profession}),r.createElement(m.default,{text:t.name}),r.createElement(u,null,"General information"),t&&t.birthDate&&r.createElement("span",null,"Age: ",r.createElement(o.Z,{value:t.birthDate})),r.createElement(i.default,{data:t?t.awards:null})))}},75251:(e,t,n)=>{var r=n(67294),a=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;a=i("react.element"),i("react.fragment")}var o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,m=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:m,props:i,_owner:o.current}}t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)}}]);