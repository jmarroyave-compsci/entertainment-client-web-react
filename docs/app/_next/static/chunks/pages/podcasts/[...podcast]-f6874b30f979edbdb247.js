(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[854],{4935:function(t,e,r){"use strict";r.r(e),r.d(e,{QRY:function(){return T},default:function(){return H}});var n=r(4942),i=r(885),o=r(168),c=(r(7294),r(4419)),a=r(7090),s=r(361),u=r(6447),l=r(9602),f=(r(6085),r(2275),r(5566)),d=r(9446),p=r(1055),g=r(8753),h=r(5893);(0,l.ZP)("h1")({margin:0});function m(t){var e=t.data;return e?(0,h.jsx)(u.Z,{direction:"row",children:(0,h.jsx)(d.Z,{text:e})}):(0,h.jsx)("span",{})}var j=r(5412),y=(0,l.ZP)("h4")({margin:"1rem 0 0.5rem 0",padding:0}),b=((0,l.ZP)("div")({fontSize:"0.9rem",lineHeight:"1.5rem"}),(0,l.ZP)("div")({fontSize:"0.9rem",lineHeight:"1rem",marginBottom:"0.5rem"}));function v(t){var e=t.data;t.loading;return e=e||{},console.log(e),(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(p.Z,{src:e.image}),(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(m,{data:e.category}),(0,h.jsx)(g.Z,{text:e.title,subText1:e.subtitle,subText2:e.author,link:e.link}),(0,h.jsx)(j.Z,{text:e.summary}),(0,h.jsx)(y,{children:"general information"}),e&&e.createdDate&&(0,h.jsxs)(b,{children:["Created: ",(0,h.jsx)(f.Z,{value:e.createdDate})]}),e&&e.language&&(0,h.jsxs)(b,{children:["Language: ",e.language]}),e&&e.country&&(0,h.jsxs)(b,{children:["Country: ",e.country]})]})]})}var O=r(8973);function x(t){return(0,h.jsxs)(u.Z,{spacing:1,children:[(0,h.jsx)(O.Z,{variant:"rectangular",height:300}),(0,h.jsx)(O.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,h.jsx)(O.Z,{variant:"text",style:{width:"40%"}}),(0,h.jsx)(O.Z,{variant:"text",style:{width:"25%"}}),(0,h.jsx)(O.Z,{variant:"text",style:{width:"25%"}}),(0,h.jsx)(O.Z,{variant:"text",style:{width:"25%"}})]})}function Z(t){var e=t.data,r=t.loading;return(0,h.jsx)(u.Z,{children:r?(0,h.jsx)(x,{}):(0,h.jsx)(v,{data:e})})}function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function D(t){return(0,h.jsx)(s.Z,{noPadding:!0,children:(0,h.jsx)(Z,w({},t))})}function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var E,_=function(t){return(0,h.jsx)(a.Z,{xs:(0,h.jsx)(D,S({},t))})},C=r(1163),R=r(4397),B=r(846);function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var T=(0,R.Ps)(E||(E=(0,o.Z)(["\nquery getPodcast($id:String!) {\n  podcast(id: $id){\n    id\n    title\n    subtitle\n    feedUrl\n    description\n    summary\n    author\n    link\n    language\n    image\n    category\n    subcategory\n    createdDate\n  }\n}\n"]))),H=function(t){var e=(0,C.useRouter)(),r=e&&e.query&&e.query.podcast?e.query.podcast:[],n=(0,i.Z)(r,2),o=n[0],a=n[1];a=decodeURIComponent(a).toLowerCase();var s=(0,B.a)(T,{variables:{id:o}}),u=s.loading,l=s.error,f=s.data,d=z(z({},t),{},{loading:u,error:l,data:f});return d.data=d.data?d.data.podcast:null,d.breadcrumbs=[{name:"podcasts",url:"/podcasts"},{name:a}],(0,h.jsx)(c.Z,z(z({},d),{},{children:(0,h.jsx)(_,z({},d))}))}},1055:function(t,e,r){"use strict";var n=r(4942),i=(r(7294),r(6085),r(2275),r(8631)),o=r(2863),c=r(5893);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){var e=t.src,r=t.height;t.width;return e?(0,c.jsx)(i.Z,{src:e,height:r}):(0,c.jsx)(u,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t))}function u(t){var e=t.height,r=t.width;return(0,c.jsx)("div",{style:{width:"".concat(r,"px"),height:"".concat(e,"px"),display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#888"},children:(0,c.jsx)(o.Z,{children:"broken_image"})})}e.Z=function(t){var e=t.src;return t.loading,(0,c.jsx)("div",{style:{height:300,width:"100%",backgroundColor:"#333",margin:0,marginBottom:"1rem"},children:(0,c.jsx)(s,{src:e,height:300,width:250})})}},5412:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});r(7294);var n=r(9602),i=r(5893),o=(0,n.ZP)("div")({margin:0,marginBottom:"1rem"}),c=(0,n.ZP)("p")({margin:0,marginBottom:"1rem"}),a=(0,n.ZP)("h4")({margin:0});function s(t){var e=t.title,r=t.text;return r?(0,i.jsxs)(o,{children:[e&&(0,i.jsx)(a,{children:e}),(0,i.jsx)(c,{children:r})]}):null}},8753:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});r(7294);var n=r(9602),i=r(5893),o=(0,n.ZP)("div")({margin:0,marginBottom:"1rem"}),c=(0,n.ZP)("div")({margin:0,padding:0,fontSize:"2.5rem",lineHeight:"2.5rem"}),a=(0,n.ZP)("div")({margin:0,padding:0,fontSize:"0.9rem",lineHeight:"1.1rem"}),s=(0,n.ZP)("div")({margin:0,padding:0,fontSize:"0.6rem",lineHeight:"1rem",fontWeight:500});function u(t){var e=t.text,r=t.subText1,n=t.subText2,u=t.subText,l=t.link;u=u||r;var f=(0,i.jsx)(c,{children:e});return l&&(f=(0,i.jsx)("a",{href:l,children:f})),(0,i.jsxs)(o,{children:[f,u&&(0,i.jsx)(a,{children:u}),n&&(0,i.jsxs)(s,{children:["by ",n]})]})}},5566:function(t,e,r){"use strict";var n=r(5671),i=r(3144),o=r(136),c=r(2963),a=r(1120),s=r(7294),u=r(3651),l=r(5710),f=r(5893);function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,a.Z)(t);if(e){var i=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,c.Z)(this,r)}}var p=function(t){(0,o.Z)(r,t);var e=d(r);function r(){return(0,n.Z)(this,r),e.apply(this,arguments)}return(0,i.Z)(r,[{key:"getDate",value:function(t){try{if(!t||null==t||""===t||0==t.length)return new Date;if(t instanceof Date)return new Date(t);var e=Number(t);return Number.isInteger(e)?new Date(e):new Date(t)}catch(r){return new Date}}},{key:"_format",value:function(t,e,r){switch(r){case"ago":return(0,u.Z)(e,new Date);case"DD/MM/YYYY":return(0,l.Z)(e,"dd/MM/yy");default:return(0,l.Z)(e,r)}}},{key:"render",value:function(){var t=this.props,e=t.lang,r=t.value,n=t.className;e=e||"en";var i=this.props.format?this.props.format:"ago",o=this.getDate(r),c=this._format(e,o,i);return(0,f.jsx)("span",{className:n,children:c})}}]),r}(s.Component);e.Z=p},8631:function(t,e,r){"use strict";var n=r(4942),i=r(5671),o=r(3144),c=r(136),a=r(2963),s=r(1120),u=r(7294),l=r(5893);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,s.Z)(t);if(e){var i=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var g=function(t){(0,c.Z)(r,t);var e=p(r);function r(){return(0,i.Z)(this,r),e.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){var t=this,e=this.props,r=e.src,n=e.width,i=e.height,o=e.style,c=e.notFound,a={};return c&&(a.ref=function(e){return t.img=e},a.onError=function(){return c&&t.img.src!=c?t.img.src=c:null}),(0,l.jsx)("img",d(d({},a),{},{style:o,width:n,height:i,src:r}))}}]),r}(u.Component);e.Z=g},361:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});r(7294);var n=r(6447),i=r(5893);function o(t){var e=t.noPadding;return(0,i.jsx)(n.Z,{sx:{padding:e?{}:{xs:"0rem 2rem 3rem 2rem",sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"},fontSize:"1rem"},children:t.children})}},9446:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});r(7294);var n=r(9602),i=r(1131),o=r(5893);function c(t){var e=t.text,r=t.color,n=t.variant,c=t.onClick;return(0,o.jsx)(a,{children:(0,o.jsx)(i.Z,{variant:n,color:r,size:"small",label:e,onClick:c})})}c.defaultProps={onClick:null,text:"",color:"primary",variant:"default"};var a=(0,n.ZP)("div")({display:"inline-block",margin:"0",marginRight:"0.25rem",marginBottom:"0.25rem"})},1205:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcasts/[...podcast]",function(){return r(4935)}])}},function(t){t.O(0,[34,846,218,988,419,774,888,179],(function(){return e=1205,t(t.s=e);var e}));var e=t.O();_N_E=e}]);