(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[8524,6249,607,4101,8333,1734,2678,8645],{41749:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(45987),a=n(87462),i=n(67294),l=(n(45697),n(86010)),o=n(14670),s=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=i.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,s=e.alignItems,c=void 0===s?"stretch":s,m=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,y=e.container,f=void 0!==y&&y,g=e.direction,v=void 0===g?"row":g,w=e.item,h=void 0!==w&&w,E=e.justify,x=e.justifyContent,S=void 0===x?"flex-start":x,A=e.lg,Z=void 0!==A&&A,_=e.md,C=void 0!==_&&_,R=e.sm,T=void 0!==R&&R,I=e.spacing,b=void 0===I?0:I,O=e.wrap,P=void 0===O?"wrap":O,k=e.xl,M=void 0!==k&&k,N=e.xs,B=void 0!==N&&N,W=e.zeroMinWidth,j=void 0!==W&&W,D=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=(0,l.Z)(m.root,d,f&&[m.container,0!==b&&m["spacing-xs-".concat(String(b))]],h&&m.item,j&&m.zeroMinWidth,"row"!==v&&m["direction-xs-".concat(String(v))],"wrap"!==P&&m["wrap-xs-".concat(String(P))],"stretch"!==c&&m["align-items-xs-".concat(String(c))],"stretch"!==o&&m["align-content-xs-".concat(String(o))],"flex-start"!==(E||S)&&m["justify-content-xs-".concat(String(E||S))],!1!==B&&m["grid-xs-".concat(String(B))],!1!==T&&m["grid-sm-".concat(String(T))],!1!==C&&m["grid-md-".concat(String(C))],!1!==Z&&m["grid-lg-".concat(String(Z))],!1!==M&&m["grid-xl-".concat(String(M))]);return i.createElement(p,(0,a.Z)({className:G,ref:t},D))}));const u=(0,o.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(t){var r=e.spacing(t);0!==r&&(n["spacing-".concat("xs","-").concat(t)]={margin:"-".concat(m(r,2)),width:"calc(100% + ".concat(m(r),")"),"& > $item":{padding:m(r,2)}})})),n}(e),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d)},93871:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(60288);function a(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},86688:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),a=n(72797);r.Component;const i=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={links_disabled:!1}},80383:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86688),i=n(41749);class l extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:l,style:o,flex:s}=this.props,t=t||0;return o=o||{},s&&(o.display="flex"),r.createElement(i.Z,{container:!0,direction:e,justifyContent:a,alignItems:l,className:n,spacing:t,style:o},this.props.children)}}const o=(0,a.Z)(l)},81648:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86688),i=n(41749);class l extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:l,style:o,fill:s,flex:c,center:m}=this.props;e=e||!0;var d={...o};return(d=d||{textAlign:"inherit"}).textAlign=m?"center":d.textAlign,s&&(d.width="100%"),c&&(d.flex=1),e&&r.createElement(i.Z,{className:t,item:!0,xs:n,sm:a,md:l,style:d},this.props.children)}}const o=(0,a.Z)(l)},87558:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(73727),i=n(36776);class l extends r.Component{render(){var{children:e,className:t,to:n,href:l,style:o,external:s}=this.props;if(e=(n=(n=n||l)||"http://localhost")?e:"NO LINK DEFINED",o=o||{},n&&"string"!=typeof n)return"INVALID URL";const c=!((s=!0===s)||n&&0===n.indexOf("http")),m=c?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==c&&0==i.Z.links_disabled?r.createElement(a.OL,{className:t,to:n,style:o},e):r.createElement("a",{className:t,href:n,style:o,target:m},e)}}const o=l},97236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(87558);n(36776);class i extends r.Component{render(){var{children:e,className:t,to:n,href:i,border:l,style:o,external:s}=this.props;return e=(n=(n=n||i)||"http://localhost")?e:"NO LINK DEFINED",l=!0===l||"true"===l?"text-link":"",(o=o||{}).padding=o.padding?o.padding:"0.5rem 0.75rem",t=`${l} ${t||""}`,s=!0===s,r.createElement(a.Z,{className:t,to:n,style:o,external:s},e)}}const l=i},70227:(e,t,n)=>{"use strict";n(67294)},76249:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(87558);const i=function(e){const{id:t,entity:n,children:i}=e;return r.createElement(a.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(n)}`},i)}},80607:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(67294),a=n(58524);n(80383),n(81648),n(70227);const i=(0,a.ZP)("div")({}),l=(0,a.ZP)("div")({}),o=(0,a.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),s=(0,a.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),c=(0,a.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),m=(0,a.ZP)("h4")({margin:0}),d=(0,a.ZP)("h5")({margin:"1rem 0 1rem 0",padding:"0"}),u=(0,a.ZP)("h6")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",fontWeight:400}),p=(0,a.ZP)("div")({fontSize:"0.85rem"}),y=(0,a.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"});function f(e){var{data:t}=e;return t&&0!=t.length?!0===e.mini?function(e,t){var{year:n,all:a}=e,i=a?t.length:2;n=parseInt(n);return r.createElement(o,null,t&&t.length>0&&t.slice(0,i).map(((e,t)=>(e=>!n||e.year==n)(e)&&r.createElement("div",{key:t},r.createElement(s,null,e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category)))),!a&&t&&t.length>i&&r.createElement(s,null,r.createElement(s,null,r.createElement(c,null,"and ",t.length-i," more"))))}(e,t):function(e,t){var n=null,a=null;const{year:o}=e;return r.createElement(i,null,r.createElement(m,null,"Awards"),t&&t.length>0&&t.map(((e,t)=>r.createElement("div",{key:t},(e=>n&&n==e.year?null:(n=e.year,a=null,r.createElement(d,null,e.year)))(e),(e=>a&&a==e.name?null:(a=e.name,r.createElement(u,null,e.name)))(e),r.createElement(l,null,r.createElement(y,null,"false"===e.won||!1===e.won?"nominee":"winner"),r.createElement(p,null,e.category))))))}(e,t):null}},18115:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(18463),i=n(79912),l=n(94697),o=n(76249),s=n(80607),c=n(22318);function m(e){const{full:t,year:n,all:m}=e,{id:d,title:u,awards:p}=e.data;return r.createElement(o.default,{id:d,entity:u},r.createElement(a.Z,null,r.createElement(l.Z,{title:r.createElement(c.Z,{noWrap:!0,variant:"h6",component:"h4"},u),style:{display:"block",overflow:"hidden"}}),r.createElement(i.Z,{style:{marginTop:"-1.5rem"}},r.createElement(s.default,{mini:!t,data:p,year:n,all:m}))))}},26276:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(67294),a=n(70614),i=n(18115);function l(e){const{data:t,loading:n}=e;return r.createElement(a.default,{data:t,renderItem:e=>r.createElement(i.default,{data:e})})}},61980:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(67294),a=n(58524),i=n(80383),l=n(81648),o=n(97236),s=n(26276),c=n(92678);const m=(0,a.ZP)("div")({fontSize:"3rem",padding:"1rem 0 2rem 0"}),d=(0,a.ZP)("div")({fontSize:"1rem"}),u=(0,a.ZP)("div")({paddingTop:"2rem"}),p=(0,c.default)((function(e){const{data:t,loading:n}=e;return r.createElement("div",{style:{width:"100%"}},r.createElement(i.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(m,null,"Awards")),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(d,null,"search and visualize the award's information from the Oscars, Golden Globes and Emmys")),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(s.default,{data:t})),r.createElement(l.Z,{xs:12,sm:12,md:12},r.createElement(u,null,r.createElement(o.Z,{border:!0,href:"/stories/awards"}," See more")))))}))},53293:(e,t,n)=>{"use strict";n.r(t);var r=n(67294),a=(n(65267),n(61980)),i=n(25559),l=n(72797),o=n(31280),s=n(43613),c=n.n(s),m=n(73727);(0,o.configure)({adapter:new(c())}),describe("Home page",(()=>{it("error in components?",(()=>{const e=(0,o.mount)(r.createElement(m.VK,null,r.createElement(a.default,{data:i})));expect(e.find(l.Z)).toEqual(0)}))}))},92678:(e,t,n)=>{"use strict";n.r(t),n.d(t,{QRY:()=>o,default:()=>s});var r=n(67294),a=n(54397),i=n(70846);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const o=a.Ps`
query get($entity:String, $year: Int, $page: Int) {
  storiesAwards(entity: $entity, year: $year, page: $page){
    id
    title
    image
    link
    awards {
      category
      name
      won
      year
    }
  }
}
`,s=e=>function(t){var{route:n}=t,a=(n=n||{}).entity?n.entity:"movies",s=n.year?n.year:t.year?t.year:(new Date).getFullYear(),c=n.page?n.page:1,m=t.data?{}:(0,i.a)(o,{variables:{entity:a,year:parseInt(s),page:parseInt(c)}}),d=t.data?t.data:m.data?m.data.storiesAwards:null;return r.createElement(e,l({},t,m,{data:d}))}},70614:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(67294),a=n(58524),i=n(86529),l=n(28973),o=n(26447),s=n(36501);const c=(0,a.ZP)("div")({padding:"1rem 0"}),m=(0,a.ZP)("div")({padding:"0 0.5rem"});function d(e){var{data:t,loading:n}=e;return n=n||!t||!t.length,t=t&&t.length&&t.length>0?t:[1,2,3,4,5],r.createElement(c,null,r.createElement(i.default,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container-with-dots",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0},t.map(((t,a)=>r.createElement(m,{key:a},n?r.createElement(u,null):e.renderItem?e.renderItem(t):function(e){const{id:t,description:n,title:a,image:i,link:l}=e;return r.createElement("div",null,r.createElement("h1",null,a),r.createElement("span",null,n))}(t))))))}function u(){return r.createElement(s.Z,{style:{padding:"0.5rem"}},r.createElement(o.Z,{spacing:1},r.createElement(l.Z,{variant:"text",width:"80%"}),r.createElement(l.Z,{variant:"rectangular",height:118}),r.createElement(l.Z,{variant:"text"})))}},86010:(e,t,n)=>{"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})},73727:(e,t,n)=>{"use strict";n.d(t,{VK:()=>m,OL:()=>h});var r=n(5977),a=n(51721),i=n(67294),l=n(37531),o=(n(45697),n(87462)),s=n(63366),c=n(2177),m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=(0,l.lX)(t.props),t}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(r.F0,{history:this.history,children:this.props.children})},t}(i.Component);i.Component;var d=function(e,t){return"function"==typeof e?e(t):e},u=function(e,t){return"string"==typeof e?(0,l.ob)(e,null,null,t):e},p=function(e){return e},y=i.forwardRef;void 0===y&&(y=p);var f=y((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,l=(0,s.Z)(e,["innerRef","navigate","onClick"]),c=l.target,m=(0,o.Z)({},l,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return m.ref=p!==y&&t||n,i.createElement("a",m)})),g=y((function(e,t){var n=e.component,a=void 0===n?f:n,m=e.replace,g=e.to,v=e.innerRef,w=(0,s.Z)(e,["component","replace","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var n=e.history,r=u(d(g,e.location),e.location),s=r?n.createHref(r):"",f=(0,o.Z)({},w,{href:s,navigate:function(){var t=d(g,e.location),r=(0,l.Ep)(e.location)===(0,l.Ep)(u(t));(m||r?n.replace:n.push)(t)}});return p!==y?f.ref=t||v:f.innerRef=v,i.createElement(a,f)}))})),v=function(e){return e},w=i.forwardRef;void 0===w&&(w=v);var h=w((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,l=e.activeClassName,m=void 0===l?"active":l,p=e.activeStyle,y=e.className,f=e.exact,h=e.isActive,E=e.location,x=e.sensitive,S=e.strict,A=e.style,Z=e.to,_=e.innerRef,C=(0,s.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var n=E||e.location,l=u(d(Z,n),n),s=l.pathname,R=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),T=R?(0,r.LX)(n.pathname,{path:R,exact:f,sensitive:x,strict:S}):null,I=!!(h?h(T,n):T),b="function"==typeof y?y(I):y,O="function"==typeof A?A(I):A;I&&(b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(b,m),O=(0,o.Z)({},O,p));var P=(0,o.Z)({"aria-current":I&&a||null,className:b,style:O,to:l},C);return v!==w?P.ref=t||_:P.innerRef=_,i.createElement(g,P)}))}))},24654:()=>{},25559:e=>{"use strict";e.exports=JSON.parse('[{"id":"tt0041021","title":"The Ed Wynn Show","image":null,"link":null,"awards":[{"category":"BEST LIVE SHOW","name":"emmy","won":true,"year":1950,"__typename":"Award"}],"__typename":"StoryAwardMovie"},{"id":"tt0165006","title":"Crusade in Europe","image":null,"link":null,"awards":[{"category":"BEST PUBLIC SERVICE, CULTURAL OR EDUCATIONAL PROGRAM","name":"emmy","won":true,"year":1950,"__typename":"Award"}],"__typename":"StoryAwardMovie"},{"id":"tt0157198","title":"Wrestling","image":null,"link":null,"awards":[{"category":"BEST SPORTS COVERAGE","name":"emmy","won":true,"year":1950,"__typename":"Award"}],"__typename":"StoryAwardMovie"},{"id":"tt0513786","title":"Truth or Consequences","image":null,"link":null,"awards":[{"category":"BEST GAMES AND AUDIENCE PARTICIPATION SHOW","name":"emmy","won":true,"year":1951,"__typename":"Award"}],"__typename":"StoryAwardMovie"},{"id":"tt11214644","title":"City at Night","image":null,"link":null,"awards":[{"category":"BEST PUBLIC SERVICE","name":"emmy","won":true,"year":1951,"__typename":"Award"}],"__typename":"StoryAwardMovie"},{"id":"tt0042070","title":"The Alan Young Show","image":null,"link":null,"awards":[{"category":"BEST VARIETY SHOW","name":"emmy","won":true,"year":1951,"__typename":"Award"}],"__typename":"StoryAwardMovie"},{"id":"tt0042138","title":"Pulitzer Prize Playhouse","image":null,"link":null,"awards":[{"category":"BEST DRAMATIC SHOW","name":"emmy","won":false,"year":1952,"__typename":"Award"},{"category":"BEST DRAMATIC SHOW","name":"emmy","won":true,"year":1951,"__typename":"Award"}],"__typename":"StoryAwardMovie"},{"id":"tt0042141","title":"Robert Montgomery Presents","image":null,"link":null,"awards":[{"category":"BEST DRAMATIC PROGRAM","name":"emmy","won":false,"year":1954,"__typename":"Award"},{"category":"BEST DRAMATIC PROGRAM","name":"emmy","won":true,"year":1953,"__typename":"Award"},{"category":"BEST DRAMATIC SHOW","name":"emmy","won":false,"year":1952,"__typename":"Award"}],"__typename":"StoryAwardMovie"},{"id":"tt0042173","title":"Your Show of Shows","image":null,"link":null,"awards":[{"category":"BEST FEMALE STAR OF REGULAR SERIES","name":"emmy","won":false,"year":1954,"__typename":"Award"},{"category":"BEST MALE STAR OF REGULAR SERIES","name":"emmy","won":false,"year":1954,"__typename":"Award"},{"category":"BEST SERIES SUPPORTING ACTOR","name":"emmy","won":false,"year":1954,"__typename":"Award"},{"category":"BEST VARIETY PROGRAM","name":"emmy","won":false,"year":1954,"__typename":"Award"},{"category":"BEST VARIETY PROGRAM","name":"emmy","won":true,"year":1953,"__typename":"Award"},{"category":"BEST VARIETY SHOW","name":"emmy","won":true,"year":1952,"__typename":"Award"},{"category":"BEST VARIETY SHOW","name":"emmy","won":false,"year":1951,"__typename":"Award"}],"__typename":"StoryAwardMovie"},{"id":"tt0046658","title":"Victory at Sea","image":null,"link":null,"awards":[{"category":"BEST PUBLIC AFFAIRS PROGRAM","name":"emmy","won":true,"year":1954,"__typename":"Award"},{"category":"BEST PUBLIC AFFAIRS PROGRAM","name":"emmy","won":false,"year":1953,"__typename":"Award"}],"__typename":"StoryAwardMovie"}]')}}]);