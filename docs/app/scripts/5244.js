"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[5244,6249,766,4931,6282,7129],{93871:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(60288);function a(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},86688:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(72797);r.Component;const o=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},80383:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(86688),o=n(41749);class i extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:i,style:c,flex:l}=this.props,t=t||0;return c=c||{},l&&(c.display="flex"),r.createElement(o.Z,{container:!0,direction:e,justifyContent:a,alignItems:i,className:n,spacing:t,style:c},this.props.children)}}const c=(0,a.Z)(i)},81648:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(86688),o=n(41749);class i extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:i,style:c,fill:l,flex:s,center:d}=this.props;e=e||!0;var f={...c};return(f=f||{textAlign:"inherit"}).textAlign=d?"center":f.textAlign,l&&(f.width="100%"),s&&(f.flex=1),e&&r.createElement(o.Z,{className:t,item:!0,xs:n,sm:a,md:i,style:f},this.props.children)}}const c=(0,a.Z)(i)},83347:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(12613),o=n(86688);class i extends r.Component{render(){var{xs:e,sm:t,md:n,lg:o,xl:i}=this.props;return e=e||null,t=t||e,n=n||t,o=o||n,i=i||o,r.createElement("div",{style:{width:"100%"}},r.createElement(a.Z,{only:["sm","md","lg","xl"]},e),r.createElement(a.Z,{only:["xs","md","lg","xl"]},t),r.createElement(a.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(a.Z,{only:["xs","sm","md","xl"]},o),r.createElement(a.Z,{only:["xs","sm","md","lg"]},i))}}const c=(0,o.Z)(i)},91534:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(83347),o=n(86688),i=n(72797);class c extends r.Component{render(){const{className:e,cover:t,padding:n,children:o,hero:i}=this.props,c=!0===t?"100vh":"inherit";return r.createElement(a.Z,{xs:this.renderSection(o,e,c,"2rem 0rem"),sm:this.renderSection(o,e,c,"3rem 0rem"),md:this.renderSection(o,e,c,"4rem 2.5rem")})}renderSection(e,t,n,a){return r.createElement(i.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:a}},e)))}}const l=(0,o.Z)(c)},87558:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(73727),o=n(36776);class i extends r.Component{render(){var{children:e,className:t,to:n,href:i,style:c,external:l}=this.props;if(e=(n=(n=n||i)||"http://localhost")?e:"NO LINK DEFINED",c=c||{},n&&"string"!=typeof n)return"INVALID URL";const s=!((l=!0===l)||n&&0===n.indexOf("http")),d=s?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==s&&0==o.Z.links_disabled?r.createElement(a.OL,{className:t,to:n,style:c},e):r.createElement("a",{className:t,href:n,style:c,target:d},e)}}const c=i},76249:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=n(87558);const o=function(e){const{id:t,entity:n,children:o}=e;return r.createElement(a.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(n)}`},o)}},20766:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=n(87558);const o=function(e){const{id:t,entity:n,children:o}=e;return r.createElement(a.Z,{border:!1,to:`/person/${t}/${encodeURIComponent(n)}`},o)}},74931:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=n(87558);const o=function(e){const{id:t,entity:n,children:o}=e;return r.createElement(a.Z,{border:!1,to:`/podcast/${t}/${encodeURIComponent(n)}`},o)}},8445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=(n(91534),n(80383)),o=n(81648),i=n(79601);const c=function(e){const{qry:t}=e;return r.createElement(a.Z,{className:"page-module",fill:!0},r.createElement(o.Z,{xs:12,sm:12,md:12},r.createElement("h1",null,"Search results for: ",t)),r.createElement(o.Z,{fill:!0},r.createElement(i.default,e)))}},13654:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(83347),o=n(8445);function i(e){return r.createElement(a.Z,{xs:r.createElement(o.default,e)})}},26933:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o,Controls:()=>c,Loading:()=>l});var r=n(13654),a=n(2311);const o={title:"Project/Pages/Search/Page"},i=e=>React.createElement(r.default,e),c=i.bind({});c.args={data:a};const l=i.bind({});l.args={loading:!0,data:null}},79601:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),a=n(80383),o=n(81648),i=n(20766),c=n(76249),l=n(74931);function s(e){const{r:t}=e;switch(t.type){case"movie":return r.createElement(c.default,{id:t.entityId,entity:t.entity},r.createElement("h3",null,t.entity));case"person":return r.createElement(i.default,{id:t.entityId,entity:t.entity},r.createElement("h3",null,t.entity));case"podcast":return r.createElement(l.default,{id:t.entityId,entity:t.entity},r.createElement("h3",null,t.entity))}return`ERROR: type ${t.type}`}const d=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.map(((e,t)=>r.createElement(o.Z,{key:t,xs:12,sm:12,md:12},r.createElement(s,{r:e})))))}},86010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})},73727:(e,t,n)=>{n.d(t,{OL:()=>v});var r=n(5977),a=(n(51721),n(67294)),o=n(37531),i=(n(45697),n(87462)),c=n(63366),l=n(2177);a.Component,a.Component;var s=function(e,t){return"function"==typeof e?e(t):e},d=function(e,t){return"string"==typeof e?(0,o.ob)(e,null,null,t):e},f=function(e){return e},m=a.forwardRef;void 0===m&&(m=f);var u=m((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,l=(0,c.Z)(e,["innerRef","navigate","onClick"]),s=l.target,d=(0,i.Z)({},l,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return d.ref=f!==m&&t||n,a.createElement("a",d)})),p=m((function(e,t){var n=e.component,p=void 0===n?u:n,h=e.replace,y=e.to,v=e.innerRef,x=(0,c.Z)(e,["component","replace","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=e.history,r=d(s(y,e.location),e.location),c=r?n.createHref(r):"",u=(0,i.Z)({},x,{href:c,navigate:function(){var t=s(y,e.location),r=(0,o.Ep)(e.location)===(0,o.Ep)(d(t));(h||r?n.replace:n.push)(t)}});return f!==m?u.ref=t||v:u.innerRef=v,a.createElement(p,u)}))})),h=function(e){return e},y=a.forwardRef;void 0===y&&(y=h);var v=y((function(e,t){var n=e["aria-current"],o=void 0===n?"page":n,f=e.activeClassName,m=void 0===f?"active":f,u=e.activeStyle,v=e.className,x=e.exact,E=e.isActive,Z=e.location,g=e.sensitive,b=e.strict,C=e.style,N=e.to,R=e.innerRef,w=(0,c.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.createElement(r.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var n=Z||e.location,c=d(s(N,n),n),f=c.pathname,J=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),_=J?(0,r.LX)(n.pathname,{path:J,exact:x,sensitive:g,strict:b}):null,k=!!(E?E(_,n):_),I="function"==typeof v?v(k):v,A="function"==typeof C?C(k):C;k&&(I=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(I,m),A=(0,i.Z)({},A,u));var S=(0,i.Z)({"aria-current":k&&o||null,className:I,style:A,to:c},w);return h!==y?S.ref=t||R:S.innerRef=R,a.createElement(p,S)}))}))},2311:e=>{e.exports=JSON.parse('[{"entity":"people","text":"Julia Roberts","ref":"nm0000210","score":1.5},{"_id":"614e68d826855d0e6413274e","entity":"podcast","text":"Dispatches from CBC Radio","ref":"0002da5f-49a2-31ba-b44c-cdeabdf113cb","score":1.5},{"_id":"614e6a3e26855d0e646d2aa7","entity":"movie","text":"Rocky","ref":"tt0541007","score":1.5},{"_id":"614e690726855d0e641fa974","entity":"people","text":"John Johns","ref":"614a920e2fefdc11ebc592a9","score":1.5},{"_id":"614e689226855d0e6405aab5","entity":"people","text":"John John","ref":"614a8ff02fefdc11ebab933f","score":1.5},{"_id":"614e6a5e26855d0e64748229","entity":"people","text":"John-John","ref":"614a98b52fefdc11eb1a6d8b","score":1.5},{"_id":"614e689f26855d0e640844fa","entity":"people","text":"John-John","ref":"614a90222fefdc11ebae2d95","score":1.5},{"_id":"614e67b426855d0e64d38f17","entity":"people","text":"John Johns","ref":"614a8ba42fefdc11eb797659","score":1.5},{"_id":"614e685326855d0e64f68e78","entity":"people","text":"John John","ref":"614a8ecb2fefdc11eb9c769f","score":1.5},{"_id":"614e690d26855d0e642034a1","entity":"people","text":"John Johns","ref":"614a92192fefdc11ebc61dd9","score":1.5}]')}}]);