"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[8653,611,5070,4990],{28973:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(63366),a=n(87462),i=n(67294),l=n(86010),o=(n(45697),n(25258)),s=n(71993);var m=n(94581),c=n(58524),d=n(5609),h=n(15773);function u(e){return(0,h.Z)("MuiSkeleton",e)}(0,n(88858).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g=n(85893);const p=["animation","className","component","height","style","variant","width"];let f,v,E,Z,w=e=>e;const y=(0,o.F4)(f||(f=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),x=(0,o.F4)(v||(v=w`
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
`)),b=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((({theme:e,ownerState:t})=>{const n=(l=e.shape.borderRadius,String(l).match(/[\d.\-+]*\s*(.*)/)[1]||""||"px"),r=(i=e.shape.borderRadius,parseFloat(i));var i,l;return(0,a.Z)({display:"block",backgroundColor:(0,m.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&(0,o.iv)(E||(E=w`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),y)),(({ownerState:e,theme:t})=>"wave"===e.animation&&(0,o.iv)(Z||(Z=w`
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
    `),x,t.palette.action.hover))),C=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:m="span",height:c,style:h,variant:f="text",width:v}=n,E=(0,r.Z)(n,p),Z=(0,a.Z)({},n,{animation:i,component:m,variant:f,hasChildren:Boolean(E.children)}),w=(e=>{const{classes:t,variant:n,animation:r,hasChildren:a,width:i,height:l}=e,o={root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!l&&"heightAuto"]};return(0,s.Z)(o,u,t)})(Z);return(0,g.jsx)(b,(0,a.Z)({as:m,ref:t,className:(0,l.Z)(w.root,o),ownerState:Z},E,{style:(0,a.Z)({width:v,height:c},h)}))}))},86688:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(72797);r.Component;const i=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},19976:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=(n(45697),n(19119)),i=n(34902);class l extends r.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,n){switch(n){case"ago":return(0,a.Z)(t,new Date);case"DD/MM/YYYY":return(0,i.Z)(t,"dd/MM/yy");default:return(0,i.Z)(t,n)}}render(){var{lang:e,value:t,className:n}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",i=this.getDate(t),l=this._format(e,i,a);return r.createElement("span",{className:n},l)}}const o=l},93013:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}class i extends r.Component{render(){var{src:e,width:t,height:n,style:i,notFound:l}=this.props,o={};return l&&(o.ref=e=>this.img=e,o.onError=()=>l&&this.img.src!=l?this.img.src=l:null),r.createElement("img",a({},o,{style:i,width:t,height:n,src:e}))}}const l=i},80383:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86688),i=n(41749);class l extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:l,style:o,flex:s}=this.props,t=t||0;return o=o||{},s&&(o.display="flex"),r.createElement(i.Z,{container:!0,direction:e,justifyContent:a,alignItems:l,className:n,spacing:t,style:o},this.props.children)}}const o=(0,a.Z)(l)},81648:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86688),i=n(41749);class l extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:l,style:o,fill:s,flex:m,center:c}=this.props;e=e||!0;var d={...o};return(d=d||{textAlign:"inherit"}).textAlign=c?"center":d.textAlign,s&&(d.width="100%"),m&&(d.flex=1),e&&r.createElement(i.Z,{className:t,item:!0,xs:n,sm:a,md:l,style:d},this.props.children)}}const o=(0,a.Z)(l)},83347:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(12613),i=n(86688);class l extends r.Component{render(){var{xs:e,sm:t,md:n,lg:i,xl:l}=this.props;return e=e||null,t=t||e,n=n||t,i=i||n,l=l||i,r.createElement("div",{style:{width:"100%"}},r.createElement(a.Z,{only:["sm","md","lg","xl"]},e),r.createElement(a.Z,{only:["xs","md","lg","xl"]},t),r.createElement(a.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(a.Z,{only:["xs","sm","md","xl"]},i),r.createElement(a.Z,{only:["xs","sm","md","lg"]},l))}}const o=(0,i.Z)(l)},91534:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(83347),i=n(86688),l=n(72797);class o extends r.Component{render(){var{className:e,cover:t,padding:n,children:i,hero:l,rounded:o}=this.props,s=!0===t?"100vh":"inherit";return o=!0===o,r.createElement(a.Z,{xs:this.renderSection(i,e,s,"1.5rem 1.5rem 3rem 1.5rem",o),sm:this.renderSection(i,e,s,"2rem 3rem 4rem 3rem",o),md:this.renderSection(i,e,s,"3rem 2.5rem 3.5rem 2.5rem",o)})}renderSection(e,t,n,a,i){return r.createElement(l.Z,{from:"/core/ui/section"},r.createElement("div",{className:"com-layout-section"},r.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:a,borderRadius:i?"0.5rem 0.5rem 0 0":0}},e)))}}const s=(0,i.Z)(o)},43178:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(91288),i=n(71267);function l({text:e,onClick:t}){return r.createElement(o,null,r.createElement(i.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}l.defaultProps={onClick:null,text:""};const o=a.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},70227:(e,t,n)=>{n(67294)},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(67294),a=n(58524);n(80383),n(81648),n(70227);const i=(0,a.ZP)("div")({}),l=(0,a.ZP)("div")({}),o=(0,a.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),s=(0,a.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),m=(0,a.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),c=(0,a.ZP)("h4")({margin:0}),d=(0,a.ZP)("h5")({margin:"1rem 0 1rem 0",padding:"0"}),h=(0,a.ZP)("h6")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",fontWeight:400}),u=(0,a.ZP)("div")({fontSize:"0.85rem"}),g=(0,a.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"});function p(e){var{data:t}=e;return t&&0!=t.length?!0===e.mini?function(e,t){var{year:n,all:a}=e,i=a?t.length:2;n=parseInt(n);return r.createElement(o,null,t&&t.length>0&&t.slice(0,i).map(((e,t)=>(e=>!n||e.year==n)(e)&&r.createElement("div",{key:t},r.createElement(s,null,e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category)))),!a&&t&&t.length>i&&r.createElement(s,null,r.createElement(s,null,r.createElement(m,null,"and ",t.length-i," more"))))}(e,t):function(e,t){var n=null,a=null;const{year:o}=e;return r.createElement(i,null,r.createElement(c,null,"Awards"),t&&t.length>0&&t.map(((e,t)=>r.createElement("div",{key:t},(e=>n&&n==e.year?null:(n=e.year,a=null,r.createElement(d,null,e.year)))(e),(e=>a&&a==e.name?null:(a=e.name,r.createElement(h,null,e.name)))(e),r.createElement(l,null,r.createElement(g,null,"false"===e.won||!1===e.won?"nominee":"winner"),r.createElement(u,null,e.category))))))}(e,t):null}},91293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=n(80383),i=n(81648),l=n(93013),o=n(92863);function s(e){const{src:t,height:n,width:a}=e;return t?r.createElement(l.Z,{src:t,width:a,height:n}):r.createElement(m,e)}function m(e){const{height:t,width:n}=e;return r.createElement("div",{style:{width:`${n}px`,height:`${t}px`,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#888"}},r.createElement(o.Z,null,"broken_image"))}const c=function(e){const{src:t,loading:n}=e;return r.createElement(a.Z,{fill:!0,style:{height:300,width:"100%",backgroundColor:"#333",marginBottom:"1rem"}},r.createElement(i.Z,{xs:12,sm:12,md:12},r.createElement(s,{src:t,height:300,width:250})))}},38538:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=n(58524),i=n(43178),l=n(26447);function o(e){const{data:t}=e;return t?r.createElement(l.Z,{direction:"row"},t.map(((e,t)=>r.createElement(i.Z,{key:t,text:e})))):r.createElement("span",null)}(0,a.ZP)("h1")({margin:0})},71065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(58524),i=n(26447),l=n(43178);const o=(0,a.ZP)("div")({marginTop:"1rem",marginBottom:"1rem"}),s=(0,a.ZP)("h4")({margin:0});function m(e){const{data:t}=e;return t?r.createElement(o,null,r.createElement(i.Z,null,r.createElement(s,null,"More information"),r.createElement("div",null,t&&t.imdb&&r.createElement("a",{href:t.imdb},r.createElement(l.Z,{text:"IMDB"}))))):r.createElement("div",null)}},40611:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294);const a=(0,n(58524).ZP)("h1")({margin:0,padding:0,paddingBottom:"0.5rem",fontSize:"3rem",lineHeight:"3rem"});function i(e){const{text:t}=e;return r.createElement(a,null,t)}},93374:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=n(26447),i=n(77053),l=n(57041);function o(e){const{data:t,loading:n}=e;return r.createElement(a.Z,null,n?r.createElement(l.default,null):r.createElement(i.default,{data:t}))}},77053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),a=n(58524),i=(n(80383),n(81648),n(71065),n(80607)),l=n(19976),o=(n(43178),n(91293)),s=n(26447),m=n(38538),c=n(40611);const d=(0,a.ZP)("div")({margin:"0rem 2rem 2rem 2rem"}),h=(0,a.ZP)("h4")({marginTop:"1rem",marginBottom:"0rem"}),u=function(e){var{data:t,loading:n}=e;return t=t||{},r.createElement(s.Z,null,r.createElement(o.default,{src:t.image}),r.createElement(d,null,r.createElement(m.default,{data:t.profession}),r.createElement(c.default,{text:t.name}),r.createElement(h,null,"General information"),t&&t.birthDate&&r.createElement("span",null,"Age: ",r.createElement(l.Z,{value:t.birthDate})),r.createElement(i.default,{data:t?t.awards:null})))}},34990:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=(n(91534),n(80383)),i=n(81648),l=n(93374);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=function(e){const{data:t,loading:n}=e;return r.createElement(a.Z,{fill:!0},r.createElement(i.Z,{fill:!0},r.createElement(l.default,o({data:t?t.dashboard:null},e))))}},55070:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(67294),a=n(83347),i=n(34990);function l(e){return r.createElement(a.Z,{xs:r.createElement(i.default,e)})}},8653:(e,t,n)=>{n.r(t),n.d(t,{Controls:()=>s,Loading:()=>o,default:()=>i});var r=n(55070);const a=JSON.parse('{"references":{"imdb":"https://www.imdb.com/name/nm0000210/"},"id":"nm0000210","name":"Julia Roberts","birthDate":"1967-01-01T05:00:00.000Z","profession":["actress","producer","soundtrack"],"directed":[],"acted":[],"created":1632275362108,"__v":2,"awards":[{"name":"oscar","year":1989,"category":"ACTRESS IN A SUPPORTING ROLE","won":false,"_id":"614d1d0efb0b06f98f2fc91c"}]}'),i={title:"Project/Pages/Person/Page"},l=e=>React.createElement(r.default,e),o=l.bind({});o.args={loading:!0};const s=l.bind({});s.args={data:a}},57041:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(67294),a=n(26447),i=n(28973);function l(e){return r.createElement(a.Z,{spacing:1},r.createElement(i.Z,{variant:"rectangular",height:300}),r.createElement(i.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),r.createElement(i.Z,{variant:"text",style:{width:"40%"}}),r.createElement(i.Z,{variant:"text",style:{width:"25%"}}),r.createElement(i.Z,{variant:"text",style:{width:"25%"}}),r.createElement(i.Z,{variant:"text",style:{width:"25%"}}))}}}]);