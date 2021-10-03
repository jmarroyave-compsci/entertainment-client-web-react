"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[9376,611],{19976:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),a=(r(45697),r(19119)),l=r(34902);class i extends n.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,r){switch(r){case"ago":return(0,a.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yy");default:return(0,l.Z)(t,r)}}render(){var{lang:e,value:t,className:r}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",l=this.getDate(t),i=this._format(e,l,a);return n.createElement("span",{className:r},i)}}const c=i},93013:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}class l extends n.Component{render(){var{src:e,width:t,height:r,style:l,notFound:i}=this.props,c={};return i&&(c.ref=e=>this.img=e,c.onError=()=>i&&this.img.src!=i?this.img.src=i:null),n.createElement("img",a({},c,{style:l,width:t,height:r,src:e}))}}const i=l},91534:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(83347),l=r(86688),i=r(72797);class c extends n.Component{render(){var{className:e,cover:t,padding:r,children:l,hero:i,rounded:c}=this.props,o=!0===t?"100vh":"inherit";return c=!0===c,n.createElement(a.Z,{xs:this.renderSection(l,e,o,"1.5rem 1.5rem 3rem 1.5rem",c),sm:this.renderSection(l,e,o,"2rem 3rem 4rem 3rem",c),md:this.renderSection(l,e,o,"3rem 2.5rem 3.5rem 2.5rem",c)})}renderSection(e,t,r,a,l){return n.createElement(i.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:a,borderRadius:l?"0.5rem 0.5rem 0 0":0}},e)))}}const o=(0,l.Z)(c)},43178:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(91288),l=r(71267);function i({text:e,onClick:t}){return n.createElement(c,null,n.createElement(l.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}i.defaultProps={onClick:null,text:""};const c=a.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r(83037).default},82118:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(67294),a=r(58524),l=r(43178),i=r(26447);function c(e){const{data:t}=e;return t?n.createElement(i.Z,{direction:"row"},n.createElement(l.Z,{text:t})):n.createElement("span",null)}(0,a.ZP)("h1")({margin:0})},91293:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(67294),a=r(80383),l=r(81648),i=r(93013),c=r(92863);function o(e){const{src:t,height:r,width:a}=e;return t?n.createElement(i.Z,{src:t,width:a,height:r}):n.createElement(m,e)}function m(e){const{height:t,width:r}=e;return n.createElement("div",{style:{width:`${r}px`,height:`${t}px`,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#888"}},n.createElement(c.Z,null,"broken_image"))}const d=function(e){const{src:t,loading:r}=e;return n.createElement(a.Z,{fill:!0,style:{height:300,width:"100%",backgroundColor:"#333",marginBottom:"1rem"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(o,{src:t,height:300,width:250})))}},40611:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294);const a=(0,r(58524).ZP)("h1")({margin:0,padding:0,paddingBottom:"0.5rem",fontSize:"3rem",lineHeight:"3rem"});function l(e){const{text:t}=e;return n.createElement(a,null,t)}},65349:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(67294),a=r(26447),l=r(62198),i=r(32275);function c(e){const{data:t,loading:r}=e;return n.createElement(a.Z,null,r?n.createElement(i.default,null):n.createElement(l.default,{data:t}))}},62198:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(67294),a=r(58524),l=(r(80383),r(81648),r(19976)),i=(r(43178),r(91293)),c=r(92863),o=r(40611),m=r(26447),d=r(82118);const s=(0,a.ZP)("h4")({marginTop:"1rem",marginBottom:"0rem"}),u=(0,a.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem"}),h=(0,a.ZP)("div")({fontSize:"0.8rem",lineHeight:"0.9rem"}),g=(0,a.ZP)("div")({margin:"0rem 2rem 2rem 2rem"});function f(e){var{data:t,loading:r}=e;return t=t||{},n.createElement(m.Z,null,n.createElement(i.default,{src:t.image}),n.createElement(g,null,n.createElement(d.default,{data:t.category}),n.createElement(o.default,{text:n.createElement("div",null,t.title," ",n.createElement("a",{href:t.link}," ",n.createElement(c.Z,null,"link")))}),t&&t.subtitle&&n.createElement("h3",null,t.subtitle),t&&t.author&&n.createElement(h,null,"by ",t.author),n.createElement("br",null),t&&t.description&&n.createElement("div",null,"Description: ",t.description),t&&t.summary&&n.createElement(u,null,t.summary),n.createElement(s,null,"General information"),t&&t.createdDate&&n.createElement("div",null,"Created: ",n.createElement(l.Z,{value:t.createdDate})),t&&t.language&&n.createElement("div",null,"Language: ",t.language),t&&t.country&&n.createElement("div",null,"Country: ",t.country)))}},5168:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r(40600).default},1e3:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(67294),a=(r(91534),r(80383)),l=r(81648),i=r(65349);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}const o=function(e){const{data:t,loading:r}=e;return n.createElement(a.Z,{fill:!0},n.createElement(l.Z,{fill:!0},n.createElement(i.default,c({data:t?t.dashboard:null},e))))}},40600:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(67294),a=r(83347),l=r(1e3);function i(e){return n.createElement(a.Z,{xs:n.createElement(l.default,e)})}},32275:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(67294),a=r(26447),l=r(28973);function i(e){return n.createElement(a.Z,{spacing:1},n.createElement(l.Z,{variant:"rectangular",height:300}),n.createElement(l.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),n.createElement(l.Z,{variant:"text",style:{width:"40%"}}),n.createElement(l.Z,{variant:"text",style:{width:"25%"}}),n.createElement(l.Z,{variant:"text",style:{width:"25%"}}),n.createElement(l.Z,{variant:"text",style:{width:"25%"}}))}},82951:(e,t,r)=>{r.r(t),r.d(t,{QRY:()=>m,default:()=>d});var n=r(67294),a=r(18319),l=r(5168),i=r(5977),c=r(54397),o=r(70846);const m=c.Ps`
query getPodcast($id:String!) {
  podcast(id: $id){
    id
    title
    subtitle
    feedUrl
    description
    summary
    author
    link
    language
    image
    category
    subcategory
    createdDate
  }
}
`;function d(e){var t=(0,i.UO)();t.name=decodeURIComponent(t.name);const{loading:r,error:c,data:d}=(0,o.a)(m,{variables:{id:t.id}}),s={loading:r,error:c,data:d,route:t};return s.data=s.data?s.data.podcast:null,s.breadcrumbs=[{name:"podcasts",url:"/podcasts"},{name:t.name.toLowerCase()}],n.createElement(a.default,s,n.createElement(l.default,s))}}}]);