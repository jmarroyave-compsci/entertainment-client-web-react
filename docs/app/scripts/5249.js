/*! For license information please see 5249.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[5249],{91534:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(83347),i=r(86688),l=r(72797);class o extends a.Component{render(){const{className:e,cover:t,padding:r,children:i,hero:l}=this.props,o=!0===t?"100vh":"inherit";return a.createElement(n.Z,{xs:this.renderSection(i,e,o,"2rem 0rem"),sm:this.renderSection(i,e,o,"3rem 0rem"),md:this.renderSection(i,e,o,"4rem 2.5rem")})}renderSection(e,t,r,n){return a.createElement(l.Z,{from:"/core/ui/section"},a.createElement("div",{className:"com-layout-section"},a.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:n}},e)))}}const c=(0,i.Z)(o)},25091:(e,t,r)=>{var a=r(67294),n=r(45697),i=r.n(n),l=r(24561);class o extends a.Component{render(){var{data:e,type:t,grow:r}=this.props;switch(t){case"title":case"=":case"+":e=[[["="]]];break;case"text-1-line":e=[[["=="]]];break;case"square":e=[[["-","100","100"]]];break;case"rect4:3":e=[[["-","100","75"]]]}e=this.renderPlaceholders(e);const n=r?{}:{width:e.width,height:e.height};return a.createElement(l.ZP,{style:n,height:e.height,width:e.width,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#bcbcbc"},e.phs.map((e=>e)))}renderPlaceholders(e){for(var t,r,n=0,i=[],l=0,o=0,c=0;c<e.length;c++){for(var s=e[c],d=0,u=0,m=0,f=0;f<s.length;f++){switch((t=s[f])[1]=parseInt(t[1]),t[2]=parseInt(t[2]),t[0]){case"o":r=a.createElement("rect",{key:o++,x:d,y:l,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(c+1<e.length&&c>0?4:0),u=t[2];break;case"=":case"==":r=a.createElement("rect",{key:o++,x:d,y:l,rx:"0",ry:"0",width:100*t[0].length,height:20}),d+=100*t[0].length+(c+1<e.length&&c>0?4:0),u=20;break;default:r=a.createElement("rect",{key:o++,x:d,y:l,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(c+1<e.length&&c>0?4:0),u=t[2]}n=d>n?d:n,m=u>m?u:m,i.push(r)}l+=m+(f+1<s.length&&f>0?4:0)}return{height:l,width:n,phs:i}}}o.propTypes={data:i().array,type:i().string,grow:i().bool},o.defaultProps={type:"custom",grow:!0}},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(39398).default},74931:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(67294),n=r(87558);const i=function(e){const{id:t,entity:r,children:i}=e;return a.createElement(n.Z,{border:!1,to:`/podcast/${t}/${encodeURIComponent(r)}`},i)}},79242:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(52257).default},99140:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(67294),n=r(91534),i=r(80383),l=r(81648),o=r(63560);const c=function(e){const{data:t}=e;return a.createElement(i.Z,{className:"page-module",fill:!0},a.createElement(l.Z,{fill:!0},a.createElement(n.Z,{className:"section-0"},a.createElement(o.default,{data:t.storiesPodcastMusic?t.storiesPodcastMusic:[]}))))}},52257:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(67294),n=r(83347),i=r(99140);function l(e){return a.createElement(n.Z,{xs:a.createElement(i.default,e)})}},12864:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(67294),n=r(86529),i=r(74931);function l(e){const{data:t,loading:r}=e,{}=t||{};return a.createElement(n.default,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container-with-dots",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0},t&&t.length>0&&t.map(((e,t)=>a.createElement(o,{key:t,id:e.id,title:e.title,link:e.link,description:e.description,image:e.image}))))}function o(e){const{id:t,description:r,title:n,image:l,link:o}=e;return a.createElement(i.default,{id:t,entity:n},a.createElement("div",null,a.createElement("h1",null,n),a.createElement("span",null,r)))}},63560:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(67294),n=r(80383),i=r(81648),l=(r(25091),r(87125),r(93775),r(97236)),o=r(12864);function c(e){const{data:t,loading:r}=e;return a.createElement("div",{style:{width:"100%"}},a.createElement(n.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},a.createElement(i.Z,{xs:12,sm:12,md:12},a.createElement("h1",null,"Music Podcasts")),a.createElement(i.Z,{xs:12,sm:12,md:12},a.createElement(o.default,{data:t})),a.createElement(i.Z,{xs:12,sm:12,md:12},a.createElement(l.Z,{href:"/podcasts/stories/music"}," See all"))))}},3967:(e,t,r)=>{r.r(t),r.d(t,{QRY_DASHBOARD:()=>c,default:()=>s});var a=r(67294),n=r(18319),i=r(79242),l=r(54397),o=r(70846);const c=l.Ps`
  query getStory
{
  storiesPodcastMusic {
    id
    title
    link
    image
  }
}
  `;function s(e){const t=(0,o.a)(c);var{loading:r,error:l,data:s}=t;const d={loading:r,error:l,data:s};return console.log(d.data),d.data=d.data?d.data:{},d.breadcrumbs=[],a.createElement(n.default,d,a.createElement(i.default,d))}},24561:(e,t,r)=>{r.d(t,{ZP:()=>c});var a=r(67294),n=function(){return n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)},i=function(e){var t=e.animate,r=e.backgroundColor,i=e.backgroundOpacity,l=e.baseUrl,o=e.children,c=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,m=e.interval,f=e.rtl,p=e.speed,h=e.style,y=e.title,g=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),b=u||Math.random().toString(36).substring(6),E=b+"-diff",v=b+"-animated-diff",w=b+"-aria",x=f?{transform:"scaleX(-1)"}:null,k="0; "+m+"; 1",O=p+"s";return(0,a.createElement)("svg",n({"aria-labelledby":w,role:"img",style:n(n({},h),x)},g),y?(0,a.createElement)("title",{id:w},y):null,(0,a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+E+")",style:{fill:"url("+l+"#"+v+")"}}),(0,a.createElement)("defs",null,(0,a.createElement)("clipPath",{id:E},o),(0,a.createElement)("linearGradient",{id:v},(0,a.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},t&&(0,a.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:k,dur:O,repeatCount:"indefinite"})),(0,a.createElement)("stop",{offset:"50%",stopColor:c,stopOpacity:s},t&&(0,a.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:k,dur:O,repeatCount:"indefinite"})),(0,a.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},t&&(0,a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:k,dur:O,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var l=function(e){return e.children?(0,a.createElement)(i,n({},e)):(0,a.createElement)(o,n({},e))},o=function(e){return(0,a.createElement)(l,n({viewBox:"0 0 476 124"},e),(0,a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const c=l},69921:(e,t)=>{var r=60103,a=60106,n=60107,i=60108,l=60114,o=60109,c=60110,s=60112,d=60113,u=60120,m=60115,f=60116,p=60121,h=60122,y=60117,g=60129,b=60131;if("function"==typeof Symbol&&Symbol.for){var E=Symbol.for;r=E("react.element"),a=E("react.portal"),n=E("react.fragment"),i=E("react.strict_mode"),l=E("react.profiler"),o=E("react.provider"),c=E("react.context"),s=E("react.forward_ref"),d=E("react.suspense"),u=E("react.suspense_list"),m=E("react.memo"),f=E("react.lazy"),p=E("react.block"),h=E("react.server.block"),y=E("react.fundamental"),g=E("react.debug_trace_mode"),b=E("react.legacy_hidden")}var v=s,w=m;t.ForwardRef=v,t.Memo=w,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===l||e===g||e===i||e===d||e===u||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===m||e.$$typeof===o||e.$$typeof===c||e.$$typeof===s||e.$$typeof===y||e.$$typeof===p||e[0]===h)},t.typeOf=function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case l:case i:case d:case u:return e;default:switch(e=e&&e.$$typeof){case c:case s:case f:case m:case o:return e;default:return t}}case a:return t}}}},59864:(e,t,r)=>{e.exports=r(69921)}}]);