/*! For license information please see 5223.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[5223],{41749:(e,t,l)=>{l.d(t,{Z:()=>h});var n=l(45987),r=l(87462),a=l(67294),i=(l(45697),l(86010)),o=l(14670),s=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,l=parseFloat(e);return"".concat(l/t).concat(String(e).replace(String(l),"")||"px")}var d=a.forwardRef((function(e,t){var l=e.alignContent,o=void 0===l?"stretch":l,s=e.alignItems,c=void 0===s?"stretch":s,u=e.classes,d=e.className,h=e.component,p=void 0===h?"div":h,f=e.container,m=void 0!==f&&f,g=e.direction,y=void 0===g?"row":g,v=e.item,x=void 0!==v&&v,b=e.justify,k=e.justifyContent,w=void 0===k?"flex-start":k,S=e.lg,E=void 0!==S&&S,C=e.md,O=void 0!==C&&C,T=e.sm,D=void 0!==T&&T,j=e.spacing,W=void 0===j?0:j,Z=e.wrap,I=void 0===Z?"wrap":Z,R=e.xl,M=void 0!==R&&R,B=e.xs,N=void 0!==B&&B,P=e.zeroMinWidth,A=void 0!==P&&P,G=(0,n.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),H=(0,i.Z)(u.root,d,m&&[u.container,0!==W&&u["spacing-xs-".concat(String(W))]],x&&u.item,A&&u.zeroMinWidth,"row"!==y&&u["direction-xs-".concat(String(y))],"wrap"!==I&&u["wrap-xs-".concat(String(I))],"stretch"!==c&&u["align-items-xs-".concat(String(c))],"stretch"!==o&&u["align-content-xs-".concat(String(o))],"flex-start"!==(b||w)&&u["justify-content-xs-".concat(String(b||w))],!1!==N&&u["grid-xs-".concat(String(N))],!1!==D&&u["grid-sm-".concat(String(D))],!1!==O&&u["grid-md-".concat(String(O))],!1!==E&&u["grid-lg-".concat(String(E))],!1!==M&&u["grid-xl-".concat(String(M))]);return a.createElement(p,(0,r.Z)({className:H,ref:t},G))}));const h=(0,o.Z)((function(e){return(0,r.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var l={};return s.forEach((function(t){var n=e.spacing(t);0!==n&&(l["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(u(n,2)),width:"calc(100% + ".concat(u(n),")"),"& > $item":{padding:u(n,2)}})})),l}(e),e.breakpoints.keys.reduce((function(t,l){return function(e,t,l){var n={};c.forEach((function(e){var t="grid-".concat(l,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===l?(0,r.Z)(e,n):e[t.breakpoints.up(l)]=n}(t,e,l),t}),{}))}),{name:"MuiGrid"})(d)},41120:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(87462),r=l(63746),a=l(99700);const i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.Z)(e,(0,n.Z)({defaultTheme:a.Z},t))}},93871:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(60288);function r(e){if("string"!=typeof e)throw new Error((0,n.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},86688:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(67294),r=l(72797);n.Component;const a=e=>class extends n.Component{render(){const t="title"in this.props?this.props.title:null,l="placeholder"in this.props?this.props.placeholder:{};return l.width&&l.width,l.height&&l.height,n.createElement(r.Z,{from:t,style:{width:"100%"}},n.createElement(e,this.props))}}},80383:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(67294),r=l(86688),a=l(41749);class i extends n.Component{render(){var{direction:e,spacing:t,className:l,justify:r,alignItems:i,style:o,flex:s}=this.props,t=t||0;return o=o||{},s&&(o.display="flex"),n.createElement(a.Z,{container:!0,direction:e,justifyContent:r,alignItems:i,className:l,spacing:t,style:o},this.props.children)}}const o=(0,r.Z)(i)},81648:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(67294),r=l(86688),a=l(41749);class i extends n.Component{render(){var{visible:e,className:t,xs:l,sm:r,md:i,style:o,fill:s,flex:c,center:u}=this.props;e=e||!0;var d={...o};return(d=d||{textAlign:"inherit"}).textAlign=u?"center":d.textAlign,s&&(d.width="100%"),c&&(d.flex=1),e&&n.createElement(a.Z,{className:t,item:!0,xs:l,sm:r,md:i,style:d},this.props.children)}}const o=(0,r.Z)(i)},25091:(e,t,l)=>{var n=l(67294),r=l(45697),a=l.n(r),i=l(24561);class o extends n.Component{render(){var{data:e,type:t,grow:l}=this.props;switch(t){case"title":case"=":case"+":e=[[["="]]];break;case"text-1-line":e=[[["=="]]];break;case"square":e=[[["-","100","100"]]];break;case"rect4:3":e=[[["-","100","75"]]]}e=this.renderPlaceholders(e);const r=l?{}:{width:e.width,height:e.height};return n.createElement(i.ZP,{style:r,height:e.height,width:e.width,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#bcbcbc"},e.phs.map((e=>e)))}renderPlaceholders(e){for(var t,l,r=0,a=[],i=0,o=0,s=0;s<e.length;s++){for(var c=e[s],u=0,d=0,h=0,p=0;p<c.length;p++){switch((t=c[p])[1]=parseInt(t[1]),t[2]=parseInt(t[2]),t[0]){case"o":l=n.createElement("rect",{key:o++,x:u,y:i,rx:"0",ry:"0",width:t[1],height:t[2]}),u+=t[1]+(s+1<e.length&&s>0?4:0),d=t[2];break;case"=":case"==":l=n.createElement("rect",{key:o++,x:u,y:i,rx:"0",ry:"0",width:100*t[0].length,height:20}),u+=100*t[0].length+(s+1<e.length&&s>0?4:0),d=20;break;default:l=n.createElement("rect",{key:o++,x:u,y:i,rx:"0",ry:"0",width:t[1],height:t[2]}),u+=t[1]+(s+1<e.length&&s>0?4:0),d=t[2]}r=u>r?u:r,h=d>h?d:h,a.push(l)}i+=h+(p+1<c.length&&p>0?4:0)}return{height:i,width:r,phs:a}}}o.propTypes={data:a().array,type:a().string,grow:a().bool},o.defaultProps={type:"custom",grow:!0}},95702:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var n=l(67294),r=l(80383),a=l(81648),i=(l(25091),l(87125),l(38310));class o extends n.Component{render(){const{data:e,loading:t}=this.props,{movies:l,people:o,lastUpdate:s}=e|{};return n.createElement("div",{style:{width:"100%"}},n.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(a.Z,{xs:12,sm:12,md:12},n.createElement(r.Z,{justifyContent:"center",fill:!0},n.createElement(i.default,null)))))}}const s=o},38310:(e,t,l)=>{l.r(t),l.d(t,{default:()=>f});var n=l(67294),r=l(14313),a=l(92863),i=l(8920);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},o.apply(this,arguments)}const s=function({data:e}){return n.createElement(r.VerticalTimeline,null,e.map(((e,t)=>n.createElement(c,o({key:t},e)))))},c=function({text:e,title:t,subtitle:l,info:o,date:s,iconColor:c,icon:u,contentColor:d,contentArrowColor:h}){var p=(0,i.Z)();return n.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:d?{background:p.palette[d].main,color:p.palette[d].contrastText}:{},contentArrowStyle:h?{background:p.palette[d].dark,color:p.palette[h].contrastText}:{},date:s,iconStyle:c?{background:p.palette[c].main,color:p.palette[c].contrastText}:{},icon:n.createElement(a.Z,{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},u)},t&&n.createElement("h3",{className:"vertical-timeline-element-title"},t),l&&n.createElement("h4",{className:"vertical-timeline-element-subtitle"},l),o&&n.createElement("p",{dangerouslySetInnerHTML:{__html:o}}))};s.Item=c;const u=JSON.parse('{"c":{"Sprint 1":{"Day 1":[{"area":null,"hour":0,"task":"Building Starter","level":2,"children":null}],"Day 2":[{"area":null,"hour":0,"task":"Building Starter [Web]","level":2,"children":null}],"Day 3":[{"area":null,"hour":0,"task":"Building Starter [Web]","level":2,"children":null}],"Day 4":[{"area":null,"hour":0,"task":"Building Starter [Web]","level":2,"children":null}],"Day 5":[{"area":null,"hour":0,"task":"Building Starter [Web]","level":2,"children":null}],"Day 6":[{"area":null,"hour":0,"task":"Building Starter [Web]","level":2,"children":null}],"Day 7":[{"area":null,"hour":0,"task":"Building Starter [Web]","level":2,"children":null},{"area":null,"hour":0,"task":"Building Starter [Mobile]","level":2,"children":null},{"area":null,"hour":0,"task":"Release - Starter [Web] -> Web Client","level":2,"children":null}]},"Sprint 2":{"Day 1":[{"area":null,"hour":0,"task":"Building Starter [Mobile]","level":2,"children":null},{"area":null,"hour":0,"task":"Web Client: Fixes","level":2,"children":null}],"Day 2":[{"area":null,"hour":0,"task":"Building Starter [Mobile]","level":2,"children":null}],"Day 3":[{"area":null,"hour":0,"task":"Data: People\'s network","level":2,"children":null},{"area":null,"hour":0,"task":"Data: Searching more datasets","level":2,"children":null},{"area":null,"hour":0,"task":"Building Starter [Mobile]","level":2,"children":null},{"area":null,"hour":0,"task":"Tests: Web Angular","level":2,"children":null}],"Day 4":[{"area":null,"hour":0,"task":"Tests: Web Vue, Web .NET","level":2,"children":null}],"Day 5":[{"area":null,"hour":0,"task":"Tests: Web .NET","level":2,"children":null},{"area":null,"hour":0,"task":"Web Client: Dashboard design","level":2,"children":null}],"Day 6":[{"area":null,"hour":"0900","task":"Web Client: Fixes","level":2,"children":null},{"area":null,"hour":"1000","task":"Web Client: Fixes","level":2,"children":null},{"area":null,"hour":"1000","task":"Web Client: Dataset component with multiple data rendering","level":2,"children":null},{"area":null,"hour":"1100","task":"Web Client: Fixes","level":2,"children":null},{"area":null,"hour":"1200","task":"Web Client: Fixes","level":2,"children":null},{"area":null,"hour":"1200","task":"Web Client: Release","level":2,"children":null},{"area":null,"hour":"1200","task":"Building Starter [Mobile]","level":2,"children":null},{"area":null,"hour":"1300","task":"Tests: improve layout","level":2,"children":null}],"Day 7":[{"area":null,"hour":"1000","task":"Tests: improve layout","level":2,"children":null},{"area":null,"hour":"1100","task":"Tests: improve layout","level":2,"children":null}]},"Sprint 3":{"Day 1":[],"Day 2":[],"Day 3":[{"area":null,"hour":0,"task":"Docs: roadmap","level":2,"children":null},{"area":null,"hour":"1000","task":"Web Client: about","level":2,"children":null},{"area":null,"hour":"1000","task":"Data Server versioning","level":2,"children":null}],"Day 4":[{"area":null,"hour":0,"task":"Import more data from other sources","level":2,"children":null},{"area":null,"hour":0,"task":"View stories about data","level":2,"children":null},{"area":null,"hour":0,"task":"View detailed info about each movie","level":2,"children":null},{"area":null,"hour":0,"task":"View detailed info about each person","level":2,"children":null},{"area":null,"hour":0,"task":"View detailed info about each person","level":2,"children":null}],"Day 5":[{"area":null,"hour":0,"task":"Research and import more data","level":2,"children":null},{"area":null,"hour":0,"task":"How to navigate in 11M records?","level":2,"children":null},{"area":null,"hour":0,"task":"Get insights from imported data","level":2,"children":null},{"area":null,"hour":0,"task":"Get insights the fetch process","level":2,"children":null}],"Day 6":[{"area":"STORIES","hour":0,"task":"Get insights from data","level":3,"children":null},{"area":"STORIES","hour":0,"task":"How to navigate in 11M records?","level":3,"children":null}],"Day 7":[{"area":"STORIES","hour":0,"task":"Consistency in the look and feel","level":3,"children":null}]},"Sprint 4: towards the Beta":{"Day 1":[{"area":"STORIES","hour":0,"task":"Story: Music podcasts","level":3,"children":null},{"area":"STORIES","hour":0,"task":"Consistency in the look and feel","level":3,"children":null}],"Day 2":[{"area":"STORIES","hour":0,"task":"Story: Music podcasts","level":3,"children":null},{"area":"STORIES","hour":0,"task":"Story: Movie Awards winners","level":3,"children":null},{"area":"STORIES","hour":0,"task":"Consistency in the look and feel","level":3,"children":null}],"Day 3":[{"area":"STORIES","hour":0,"task":"Home will be a list of stories","level":3,"children":null},{"area":"STORIES","hour":0,"task":"Consistency in the look and feel","level":3,"children":null},{"area":"STORIES","hour":0,"task":"The search functionality must work well and fast","level":3,"children":null}],"Day 4":[{"area":"STORIES","hour":0,"task":"The search functionality must work well and fast","level":3,"children":null},{"area":"STORIES","hour":0,"task":"Home will be a list of stories","level":3,"children":null}],"Day 5":[{"area":"STORIES","hour":0,"task":"Home will be a list of stories","level":3,"children":null}],"Day 6":[{"area":"STORIES","hour":0,"task":"Home will be a list of stories","level":3,"children":null}],"Day 7":[{"area":"STORIES","hour":0,"task":"Home will be a list of stories","level":3,"children":null}]}}}');var d=l(80383),h=l(81648);class p extends n.Component{render(){const{data:e,loading:t}=this.props;return this.renderTemplate(e)}renderTemplate(e){return n.createElement("div",{style:{width:"100%"}},n.createElement(d.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(h.Z,{xs:12,sm:12,md:12},n.createElement(d.Z,{justifyContent:"center",fill:!0},n.createElement("h2",null,"Roadmap"),n.createElement(s,{data:(t=[],Object.keys(u.c).reverse().forEach((e=>{Object.keys(u.c[e]).reverse().forEach((l=>{var n={date:`${e}-${l}`,text:l,title:l,subtitle:null,info:[],iconColor:"info",icon:"circle"};n.info.push("<ul>");var r=[];u.c[e][l].map((e=>{r.find((t=>t.task==e.task))||(r.push(e),n.info.push(`<li>${e.task}</li>`))})),n.info.push("</ul>"),n.info=n.info.join(""),t.push(n)})),t.push({date:e,title:e,subtitle:null,info:null,iconColor:"primary",contentColor:"primary",icon:"star"})})),t)})))));var t}}const f=p},86010:(e,t,l)=>{function n(e){var t,l,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(l=n(e[t]))&&(r&&(r+=" "),r+=l);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,l=0,r="";l<arguments.length;)(e=arguments[l++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}l.d(t,{Z:()=>r})},24561:(e,t,l)=>{l.d(t,{ZP:()=>s});var n=l(67294),r=function(){return r=Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++)for(var r in t=arguments[l])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},a=function(e){var t=e.animate,l=e.backgroundColor,a=e.backgroundOpacity,i=e.baseUrl,o=e.children,s=e.foregroundColor,c=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,h=e.interval,p=e.rtl,f=e.speed,m=e.style,g=e.title,y=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]])}return l}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),v=d||Math.random().toString(36).substring(6),x=v+"-diff",b=v+"-animated-diff",k=v+"-aria",w=p?{transform:"scaleX(-1)"}:null,S="0; "+h+"; 1",E=f+"s";return(0,n.createElement)("svg",r({"aria-labelledby":k,role:"img",style:r(r({},m),w)},y),g?(0,n.createElement)("title",{id:k},g):null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+i+"#"+x+")",style:{fill:"url("+i+"#"+b+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:x},o),(0,n.createElement)("linearGradient",{id:b},(0,n.createElement)("stop",{offset:"0%",stopColor:l,stopOpacity:a},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:S,dur:E,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:c},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:S,dur:E,repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"100%",stopColor:l,stopOpacity:a},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:S,dur:E,repeatCount:"indefinite"})))))};a.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var i=function(e){return e.children?(0,n.createElement)(a,r({},e)):(0,n.createElement)(o,r({},e))},o=function(e){return(0,n.createElement)(i,r({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const s=i}}]);