"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9125],{59231:function(e,n,r){r.d(n,{Z:function(){return O}});var t=r(67294),i=r(29602),a=r(50367),o=r(58862),c=r(82356),d=(r(52651),r(23275),r(74288),r(89260)),l=r(57435),s=r(87550),u=r(39660),h=r(21314),f=r(56775),x=r(72162),v=r(65148),m=r(54123),j=r(85893),g=(0,i.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),p=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),y=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),Z=(0,i.ZP)("div")({fontSize:"1.30rem",lineHeight:"1.4rem"}),w=(0,i.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),b=(0,i.ZP)("div")({paddingLeft:"1rem"}),P=function(e){var n=e.year,r=e.children;return(0,j.jsx)(d.Z,{href:"/movies/stories/awards?year=".concat(n),children:r})};function O(e){var n=e.data,r=[],i={};return n&&0!=n.length?((0,t.useMemo)((function(){(r=(r=n.slice(0)).sort((function(e,n){var r,t,i,a;return e.year!=n.year?e.year<n.year?1:-1:(null===e||void 0===e||null===(r=e.festival)||void 0===r?void 0:r.name)!=(null===n||void 0===n||null===(t=n.festival)||void 0===t?void 0:t.name)?(null===e||void 0===e||null===(i=e.festival)||void 0===i?void 0:i.name)<(null===n||void 0===n||null===(a=n.festival)||void 0===a?void 0:a.name)?-1:1:e.category<n.category?-1:1}))).forEach((function(e){var n,r,t=null!==(n=null===(r=e.festival)||void 0===r?void 0:r.name)&&void 0!==n?n:"festival name";i[e.year]||(i[e.year]={}),i[e.year][t]||(i[e.year][t]={id:e.festival.id}),i[e.year][t][e.category]||(i[e.year][t][e.category]={won:e.won})}))}),[n]),!0===e.mini?function(e,n){var r=e.year,t=e.all,i=t?n.length:2;r=parseInt(r);var a=function(e){return!r||e.year==r};return(0,j.jsxs)(g,{children:[n&&n.length>0&&n.slice(0,i).map((function(e,n){var r,t;return a(e)&&(0,j.jsx)("div",{children:(0,j.jsx)(P,{year:e.year,children:(0,j.jsxs)(p,{children:[e.year," - ",(null!==(r=null===(t=e.festival)||void 0===t?void 0:t.name)&&void 0!==r?r:"festival name").toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},n)})),!t&&n&&n.length>i&&(0,j.jsx)(p,{children:(0,j.jsx)(p,{children:(0,j.jsxs)(y,{children:["and ",n.length-i," more"]})})})]})}(e,r):function(e,n){return(0,j.jsxs)(a.RQ,{children:[(0,j.jsx)(o.DK,{children:"awards"}),(0,j.jsx)(s.Z,{children:n&&Object.keys(n).reverse().map((function(e,r){return(0,j.jsxs)(u.Z,{children:[(0,j.jsx)(m.Z,{style:{flex:0},color:"text.secondary",children:(0,j.jsx)(P,{year:e,children:(0,j.jsx)(Z,{children:e})})}),(0,j.jsxs)(h.Z,{children:[(0,j.jsx)(v.Z,{}),r+1<Object.keys(n).length&&(0,j.jsx)(f.Z,{})]}),(0,j.jsx)(x.Z,{children:Object.keys(n[e]).map((function(r){return(0,j.jsxs)("div",{children:[(0,j.jsx)(l.Z,{entity:"movies",year:e,id:n[e][r].id,children:(0,j.jsx)(w,{children:r})}),Object.keys(n[e][r]).filter((function(e){return"id"!==e})).map((function(t){return(0,j.jsx)(b,{children:(0,j.jsx)(c.Z,{title:!1===n[e][r][t].won?"nominee":"winner",value:t})},t)}))]},n[e][r].id)}))})]},e)}))})]})}(0,i)):(0,j.jsx)("div",{})}},57435:function(e,n,r){r(67294);var t=r(89260),i=r(85893);n.Z=function(e){var n=e.box,r=e.id,a=e.year,o=e.entity,c=e.children;return(0,i.jsx)(t.Z,{box:n,to:"/".concat(o,"/stories/awards/").concat(r,"/").concat(a),children:c})}},25662:function(e,n,r){r.d(n,{Z:function(){return d}});r(67294);var t=r(43332),i=r(55476),a=(r(59231),r(39698)),o=r(82356),c=r(85893);function d(e){var n=e.tiny,r=e.format;switch(r=n?"tiny":r){case"list":return function(e){var n=e.id,r=e.name,t=e.as;return(0,c.jsx)(a.xs,{width:"220px",height:"125px",children:(0,c.jsxs)(i.Z,{id:n,children:[(0,c.jsx)("div",{children:(0,c.jsx)(a.Dx,{children:null!==r&&void 0!==r?r:"?"})}),t&&(0,c.jsx)("div",{children:(0,c.jsxs)(a.x4,{children:["as ",t.replace(/[\[\]\'\"]/g,"")]})})]})},n)}(e);case"tiny":return function(e){var n=e.id,r=e.name,t=e.releaseYear;return(0,c.jsx)(i.Z,{id:n,children:(0,c.jsx)(o.Z,{value:r,title:t})})}(e);case"card":default:return function(e){var n=e.id,r=e.name,a=e.text;e.box;return(0,c.jsx)(i.Z,{box:!0,id:n,entity:r,children:(0,c.jsx)(t.Z,{title:r,text:a})},n)}(e)}}},55476:function(e,n,r){r(67294);var t=r(89260),i=r(85893);n.Z=function(e){var n=e.id,r=(e.entity,e.children),a=e.box;return n?(0,i.jsx)(t.Z,{box:a,border:!1,to:"/people/".concat(n),children:r}):r}},82356:function(e,n,r){r(67294);var t=r(58862),i=r(27159),a=r(85893);n.Z=function(e){var n=e.data,r=e.value,o=e.title,c=e.format,d=e.sufix;if(!(n=n||r)||null==n||0==n.length||"N/A"==n)return null;switch(r=n,c){case"date":r=(0,a.jsx)(i.Z,{value:n,format:"DD/MM/YYYY"});break;case"year":r=(0,a.jsx)(i.Z,{value:n,format:"YYYY"})}return(0,a.jsxs)("div",{children:[(0,a.jsx)(t.Qy,{children:o}),(0,a.jsxs)(t.GH,{children:[r," ",d]})]})}},97820:function(e,n,r){r.d(n,{Z:function(){return c}});r(67294);var t=r(29602),i=r(48724),a=r(14308),o=r(85893);(0,t.ZP)("h1")({margin:0});function c(e){var n=e.data;return n?(0,o.jsx)(a.Z,{direction:"row",children:n.map((function(e,n){return(0,o.jsx)(i.Z,{variant:"outlined",text:e},n)}))}):(0,o.jsx)("div",{})}},97060:function(e,n,r){var t=r(4942),i=r(67294),a=r(50367),o=r(58862),c=r(25662),d=r(89260),l=r(34769),s=r(14308),u=r(85893);function h(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?h(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n=e.data,r=(e.loading,e.type),t=e.story,h=e.format,x=void 0===h?"list":h;if(!n||0==n.length)return(0,u.jsx)("div",{});var v=r?(0,u.jsxs)(o.DK,{children:[r,(0,u.jsxs)(o.x4,{children:[" [",n.length,"]"]})]}):"";return v=r&&t?(0,u.jsx)(d.Z,{href:t,children:v}):v,(0,u.jsxs)(a.RQ,{children:[n&&n.length>0&&v,"list"===x&&(0,u.jsx)(l.Z,{data:n,item:function(e){return(0,u.jsx)(c.Z,f(f({format:"list"},e),e.id))}}),"tiny"===x&&(0,u.jsx)(s.Z,{children:n.map((function(e,n){return(0,u.jsx)(i.Fragment,{children:(0,u.jsx)(c.Z,f(f({format:"tiny"},e),e.id))},n)}))})]})}},64129:function(e,n,r){r(67294);var t=r(50367),i=r(58862),a=r(82356),o=r(52651),c=r(23275),d=r(85893);n.Z=function(e){var n=e.data;return e.loading,e.route,!n||"name"in n||0==n.length?(0,d.jsx)("div",{}):(0,d.jsxs)(t.RQ,{children:[(0,d.jsx)(i.DK,{children:"Ratings"}),(0,d.jsx)(o.Z,{children:n&&n.length>0&&n.map((function(e,n){return(0,d.jsx)(c.Z,{xs:6,sm:4,md:3,lg:2,children:(0,d.jsx)(a.Z,{title:e.name,data:e.averageRating})},n)}))})]})}},84307:function(e,n,r){r(67294);var t=r(50367),i=r(85893);n.Z=function(e){var n=e.data;return e.loading,e.route,n&&null!==n&&0!=n.length?"name"in n?(0,i.jsx)("div",{}):(0,i.jsx)(t.RQ,{children:n.map((function(e,n){return(0,i.jsxs)("div",{children:[e.name&&(0,i.jsxs)("div",{children:["Name: ",e.name]}),e.yearAdded&&(0,i.jsxs)("div",{children:["Year added: ",e.yearAdded]})]},n)}))}):(0,i.jsx)("div",{})}},29110:function(e,n,r){r.d(n,{Z:function(){return o}});r(67294);var t=r(50367),i=r(58862),a=r(85893);function o(e){var n=e.title,r=e.text;return r?(0,a.jsxs)(t.RQ,{children:[n&&(0,a.jsx)(i.DK,{children:n}),(0,a.jsx)(i.nv,{children:r})]}):(0,a.jsx)("div",{})}},34769:function(e,n,r){r.d(n,{Z:function(){return c}});r(67294);var t=r(29602),i=r(26447),a=r(85893),o=(0,t.ZP)("div")((function(){return{padding:"1rem",marginBottom:"2rem",backgroundColor:"transparent"}}));function c(e){var n=e.data,r=e.item;return(0,a.jsx)(o,{children:(0,a.jsx)(i.Z,{direction:"row",style:{overflowX:"auto"},children:n.map((function(e,n){return(0,a.jsx)("div",{children:r(e)},n)}))})})}},43332:function(e,n,r){r(67294);var t=r(65295),i=r(18515),a=r(42643),o=r(54962),c=r(49161),d=r(2658),l=r(360),s=r(9092),u=r(6447),h=r(27054),f=r(85893),x=(0,h.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),v="".concat(s.Z.APP.BASE_PATH).concat(s.Z.DEFAULTS.IMAGE_PLACEHOLDER),m=function(e){return e.target.src=v};n.Z=function(e){var n,r=x(),h=e.title,v=e.subtitle,j=e.text,g=e.image,p=e.imageHeight,y=void 0===p?180:p,Z=e.noImage,w=e.actions,b=0;v=v||"";return Z=!!Z,g=g||s.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,f.jsxs)(t.Z,{style:{flexGrow:1,width:"100%"},children:[(0,f.jsx)(i.Z,{sx:{width:"100%"},classes:{content:r.headerContent,root:r.headerRoot},title:(0,f.jsx)(u.ZP,{title:h||"",placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,f.jsx)(d.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:h})})}),subheader:v}),!Z&&(0,f.jsx)(o.Z,{height:y||null,image:null!==(n=g)&&void 0!==n&&n.startsWith("/")?"".concat(s.Z.APP.BASE_PATH).concat(g):g,component:"img",onError:m}),j&&(0,f.jsx)(a.Z,{children:(0,l.HD)(j)?(0,f.jsx)(d.Z,{variant:"body2",color:"text.secondary",component:"div",children:j}):j}),w&&w.length>0&&(0,f.jsx)(c.Z,{children:w.map((function(e){return(0,f.jsx)("div",{children:e},b++)}))})]})}},74288:function(e,n,r){r(67294),r(85893)},39698:function(e,n,r){r.d(n,{xs:function(){return v},x4:function(){return j},Dx:function(){return m}});var t=r(67294),i=r(29602),a=r(15671),o=r(43144),c=r(60136),d=r(82963),l=r(61120),s=r(79895),u=r(85893);function h(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return(0,d.Z)(this,r)}}t.Component;var f=(0,i.ZP)("div")((function(e){var n=e.theme,r=e.width,t=e.height;return{backgroundColor:n.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:n.palette.text.primary,alignItems:"center",minWidth:r,maxWidth:r,minHeight:t,maxHeight:t,borderRadius:"5px"}})),x=(0,i.ZP)("div")((function(e){var n=e.theme;e.width;return{backgroundColor:"transparent",color:n.palette.text.primary,padding:"1rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),v=function(e){var n=e.width,r=void 0===n?"300px":n,t=e.height,i=void 0===t?"300px":t;return(0,u.jsx)(f,{width:r,height:i,children:(0,u.jsx)(x,{children:e.children})})},m=(0,i.ZP)("h2")({fontSize:"1.5rem",lineHeight:"1.8rem",padding:0,margin:0}),j=((0,i.ZP)("h3")({fontSize:"1.2rem",lineHeight:"1.5rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})}}]);