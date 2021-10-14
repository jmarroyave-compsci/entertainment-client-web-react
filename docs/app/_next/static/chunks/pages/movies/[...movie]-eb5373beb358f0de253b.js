(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{47471:function(e,n,r){"use strict";r.r(n),r.d(n,{QRY:function(){return g}});var t,i=r(4942),a=r(70885),o=r(30168),s=(r(67294),r(74887)),c=r(68676),d=r(11163),l=r(54397),u=r(70846),m=r(85893);function f(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var g=(0,l.Ps)(t||(t=(0,o.Z)(["\nquery getMovie($id:String!) {\n  movie(id: $id){\n    id\n    title\n    country\n    type\n    genre\n    duration\n    rating {\n      averageRating\n      name\n      votes\n    }\n    releasedDate\n    classification\n    streamBy {\n      name\n      yearAdded\n    }\n    director{\n      id\n    }\n    cast {\n      id\n    }\n    awards {\n      category\n      name\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    image {\n      poster\n    }\n    boxOffice\n    production\n    language\n    plot\n  }\n}\n"])));n.default=function(e){var n=(0,d.useRouter)(),r=n&&n.query&&n.query.movie?n.query.movie:[],t=(0,a.Z)(r,2),i=t[0],o=t[1];o=decodeURIComponent(o).toLowerCase();var l=(0,u.a)(g,{variables:{id:i}}),f=l.loading,h=l.error,p=l.data,x=j(j({},e),{},{loading:f,error:h,data:p});return x.data=x.data?x.data.movie:null,x.breadcrumbs=[{name:"movies",url:"/movies"},{name:o}],(0,m.jsx)(s.Z,j(j({},x),{},{children:(0,m.jsx)(c.Z,j({},x))}))}},8498:function(e,n,r){"use strict";r.d(n,{Z:function(){return g}});r(67294);var t=r(29602),i=(r(76085),r(92275),r(31189),r(85893)),a=(0,t.ZP)("div")({marginTop:"1rem"}),o=(0,t.ZP)("div")({}),s=(0,t.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),c=(0,t.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),d=(0,t.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),l=(0,t.ZP)("h4")({margin:0}),u=(0,t.ZP)("div")({margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",lineHeight:"1rem"}),m=(0,t.ZP)("div")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem",fontWeight:400}),f=(0,t.ZP)("div")({fontSize:"0.85rem",lineHeight:"0.95rem"}),j=(0,t.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"});function g(e){var n=e.data;return n&&0!=n.length?!0===e.mini?function(e,n){var r=e.year,t=e.all,a=t?n.length:2;r=parseInt(r);var o=function(e){return!r||e.year==r};return(0,i.jsxs)(s,{children:[n&&n.length>0&&n.slice(0,a).map((function(e,n){return o(e)&&(0,i.jsx)("div",{children:(0,i.jsxs)(c,{children:[e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})},n)})),!t&&n&&n.length>a&&(0,i.jsx)(c,{children:(0,i.jsx)(c,{children:(0,i.jsxs)(d,{children:["and ",n.length-a," more"]})})})]})}(e,n):function(e,n){var r=null,t=null,s=(e.year,function(e){return r&&r==e.year?null:(r=e.year,t=null,(0,i.jsx)(u,{children:e.year}))}),c=function(e){return t&&t==e.name?null:(t=e.name,(0,i.jsx)(m,{children:e.name}))};return(0,i.jsxs)(a,{children:[(0,i.jsx)(l,{children:"awards"}),n&&n.length>0&&n.map((function(e,n){return(0,i.jsxs)("div",{children:[s(e),c(e),(0,i.jsxs)(o,{children:[(0,i.jsx)(j,{children:"false"===e.won||!1===e.won?"nominee":"winner"}),(0,i.jsx)(f,{children:e.category})]})]},n)}))]})}(e,n):null}},21611:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});r(67294);var t=r(29602),i=r(89446),a=r(26447),o=r(85893);(0,t.ZP)("h1")({margin:0});function s(e){var n=e.data;return n?(0,o.jsx)(a.Z,{direction:"row",children:n.map((function(e,n){return(0,o.jsx)(i.Z,{variant:"outlined",text:e},n)}))}):(0,o.jsx)("div",{})}},22870:function(e,n,r){"use strict";r(67294);var t=r(76085),i=r(92275),a=r(85893);n.Z=function(e){var n=e.data,r=(e.loading,e.type);return(0,a.jsxs)(t.Z,{justifyContent:"center",fill:!0,style:{width:"100%"},children:[n&&n.length>0&&(0,a.jsx)("h2",{children:r}),n&&n.length>0&&n.map((function(e){return(0,a.jsx)(i.Z,{xs:12,sm:12,md:12,children:e.id&&(0,a.jsxs)("div",{children:["ID: ",e.id]})})}))]})}},674:function(e,n,r){"use strict";r(67294);var t=r(76085),i=r(92275),a=r(85893);n.Z=function(e){var n=e.data;return e.loading,e.route,(0,a.jsx)(t.Z,{justifyContent:"center",fill:!0,style:{width:"100%"},children:n&&n.length>0&&n.map((function(e){return(0,a.jsxs)(i.Z,{xs:12,sm:12,md:12,children:[e.name&&(0,a.jsxs)("div",{children:["By: ",e.name]}),e.averageRating&&(0,a.jsxs)("div",{children:["Rating: ",e.averageRating]}),e.votes&&(0,a.jsxs)("div",{children:["Votes: ",e.votes]})]})}))})}},81356:function(e,n,r){"use strict";r(67294);var t=r(29602);r(89446),r(85893),(0,t.ZP)("div")({marginTop:"1rem",marginBottom:"1rem"}),(0,t.ZP)("h4")({margin:0})},4818:function(e,n,r){"use strict";r(67294);var t=r(76085),i=r(92275),a=r(85893);n.Z=function(e){var n=e.data;return e.loading,e.route,(0,a.jsx)(t.Z,{justifyContent:"center",fill:!0,style:{width:"100%"},children:n&&n.length>0&&n.map((function(e){return(0,a.jsxs)(i.Z,{xs:12,sm:12,md:12,children:[e.name&&(0,a.jsxs)("div",{children:["Name: ",e.name]}),e.yearAdded&&(0,a.jsxs)("div",{children:["Year added: ",e.yearAdded]})]})}))})}},95412:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});r(67294);var t=r(29602),i=r(85893),a=(0,t.ZP)("div")({margin:0,marginBottom:"1rem"}),o=(0,t.ZP)("p")({margin:0,marginBottom:"1rem"}),s=(0,t.ZP)("h4")({margin:0});function c(e){var n=e.title,r=e.text;return r?(0,i.jsxs)(a,{children:[n&&(0,i.jsx)(s,{children:n}),(0,i.jsx)(o,{children:r})]}):null}},68676:function(e,n,r){"use strict";r.d(n,{Z:function(){return T}});var t=r(4942),i=(r(67294),r(58248)),a=r(70360),o=r(26447),s=r(29602),c=r(60361),d=(r(76085),r(92275),r(81356),r(4818)),l=r(674),u=r(22870),m=r(8498),f=r(98753),j=r(21611),g=r(35566),h=r(89446),p=r(21055),x=(r(31189),r(95412)),v=r(85893),y=(0,s.ZP)("h4")({margin:"1rem 0 0.5rem 0",padding:0}),Z=(0,s.ZP)("div")({fontSize:"0.9rem",lineHeight:"1rem",marginBottom:"0.5rem"});function O(e){var n=e.data;e.loading;return n=n||{},(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(p.Z,{src:n.image?n.image.poster:null}),(0,v.jsxs)(c.Z,{children:[(0,v.jsxs)(o.Z,{direction:"row",children:[(0,v.jsx)(h.Z,{color:"primary",text:n.type}),(0,v.jsx)(j.Z,{data:n.genre})]}),(0,v.jsx)(f.Z,{text:n.title}),(0,v.jsx)(x.Z,{title:"plot",text:n.plot}),(0,v.jsx)(y,{children:"general information"}),n&&n.createdDate&&(0,v.jsxs)(Z,{children:["Created: ",(0,v.jsx)(g.Z,{value:n.createdDate})]}),n&&n.language&&(0,v.jsxs)(Z,{children:["Language: ",n.language]}),n&&n.country&&(0,v.jsxs)(Z,{children:["Country: ",n.country]}),(0,v.jsx)(l.Z,{data:n?n.rating:null}),(0,v.jsx)(d.Z,{data:n?n.streamBy:null}),(0,v.jsx)(u.Z,{type:"directors",data:n?n.director:null}),(0,v.jsx)(u.Z,{type:"writers",data:n?n.writer:null}),(0,v.jsx)(u.Z,{type:"cast",data:n?n.cast:null}),(0,v.jsx)(m.Z,{data:n?n.awards:null})]})]})}var w=r(28973);function b(e){return(0,v.jsxs)(o.Z,{spacing:1,children:[(0,v.jsx)(w.Z,{variant:"rectangular",height:300}),(0,v.jsx)(w.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,v.jsx)(w.Z,{variant:"text",style:{width:"40%"}}),(0,v.jsx)(w.Z,{variant:"text",style:{width:"25%"}}),(0,v.jsx)(w.Z,{variant:"text",style:{width:"25%"}}),(0,v.jsx)(w.Z,{variant:"text",style:{width:"25%"}})]})}function P(e){var n=e.data,r=e.loading;return(0,v.jsx)(o.Z,{children:r?(0,v.jsx)(b,{}):(0,v.jsx)(O,{data:n})})}function D(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function S(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?D(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function _(e){return(0,v.jsx)(a.Z,{mainCol:(0,v.jsx)(P,S({},e))})}function C(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function E(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?C(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var T=function(e){return(0,v.jsx)(i.Z,{xs:(0,v.jsx)(_,E({},e))})}},31189:function(e,n,r){"use strict";r(67294),r(85893)},69378:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/[...movie]",function(){return r(47471)}])}},function(e){e.O(0,[67,218,988,41,774,888,179],(function(){return n=69378,e(e.s=n);var n}));var n=e.O();_N_E=n}]);