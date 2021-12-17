"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7923],{59231:function(n,e,t){t.d(e,{Z:function(){return O}});var r=t(67294),i=t(29602),o=t(50367),c=t(58862),a=t(82356),d=(t(52651),t(23275),t(74288),t(89260)),l=t(57435),s=t(87550),u=t(39660),h=t(21314),f=t(56775),m=t(72162),p=t(65148),y=t(54123),v=t(85893),g=(0,i.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),x=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),w=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),j=(0,i.ZP)("div")({fontSize:"1.30rem",lineHeight:"1.4rem"}),b=(0,i.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),P=(0,i.ZP)("div")({paddingLeft:"1rem"}),Z=function(n){var e=n.year,t=n.children;return(0,v.jsx)(d.Z,{href:"/movies/stories/awards?year=".concat(e),children:t})};function O(n){var e=n.data,t=[],i={};return e&&0!=e.length?((0,r.useMemo)((function(){(t=(t=e.slice(0)).sort((function(n,e){var t,r,i,o;return n.year!=e.year?n.year<e.year?1:-1:(null===n||void 0===n||null===(t=n.festival)||void 0===t?void 0:t.name)!=(null===e||void 0===e||null===(r=e.festival)||void 0===r?void 0:r.name)?(null===n||void 0===n||null===(i=n.festival)||void 0===i?void 0:i.name)<(null===e||void 0===e||null===(o=e.festival)||void 0===o?void 0:o.name)?-1:1:n.category<e.category?-1:1}))).forEach((function(n){var e,t,r=null!==(e=null===(t=n.festival)||void 0===t?void 0:t.name)&&void 0!==e?e:"festival name";i[n.year]||(i[n.year]={}),i[n.year][r]||(i[n.year][r]={id:n.festival.id}),i[n.year][r][n.category]||(i[n.year][r][n.category]={won:n.won})}))}),[e]),!0===n.mini?function(n,e){var t=n.year,r=n.all,i=r?e.length:2;t=parseInt(t);var o=function(n){return!t||n.year==t};return(0,v.jsxs)(g,{children:[e&&e.length>0&&e.slice(0,i).map((function(n,e){var t,r;return o(n)&&(0,v.jsx)("div",{children:(0,v.jsx)(Z,{year:n.year,children:(0,v.jsxs)(x,{children:[n.year," - ",(null!==(t=null===(r=n.festival)||void 0===r?void 0:r.name)&&void 0!==t?t:"festival name").toUpperCase()," - ","false"===n.won||!1===n.won?"[N]":"[W]"," ",n.category]})})},e)})),!r&&e&&e.length>i&&(0,v.jsx)(x,{children:(0,v.jsx)(x,{children:(0,v.jsxs)(w,{children:["and ",e.length-i," more"]})})})]})}(n,t):function(n,e){return(0,v.jsxs)(o.RQ,{children:[(0,v.jsx)(c.DK,{children:"awards"}),(0,v.jsx)(s.Z,{children:e&&Object.keys(e).reverse().map((function(n,t){return(0,v.jsxs)(u.Z,{children:[(0,v.jsx)(y.Z,{style:{flex:0},color:"text.secondary",children:(0,v.jsx)(Z,{year:n,children:(0,v.jsx)(j,{children:n})})}),(0,v.jsxs)(h.Z,{children:[(0,v.jsx)(p.Z,{}),t+1<Object.keys(e).length&&(0,v.jsx)(f.Z,{})]}),(0,v.jsx)(m.Z,{children:Object.keys(e[n]).map((function(t){return(0,v.jsxs)("div",{children:[(0,v.jsx)(l.Z,{entity:"movies",year:n,id:e[n][t].id,children:(0,v.jsx)(b,{children:t})}),Object.keys(e[n][t]).filter((function(n){return"id"!==n})).map((function(r){return(0,v.jsx)(P,{children:(0,v.jsx)(a.Z,{title:!1===e[n][t][r].won?"nominee":"winner",value:r})},r)}))]},e[n][t].id)}))})]},n)}))})]})}(0,i)):(0,v.jsx)("div",{})}},57435:function(n,e,t){t(67294);var r=t(89260),i=t(85893);e.Z=function(n){var e=n.box,t=n.id,o=n.year,c=n.entity,a=n.children;return(0,i.jsx)(r.Z,{box:e,to:"/".concat(c,"/stories/awards/").concat(t,"/").concat(o),children:a})}},75679:function(n,e,t){t.d(e,{T4:function(){return y},AK:function(){return x},iY:function(){return j},Ez:function(){return v}});var r,i,o,c,a,d=t(4942),l=t(30168),s=t(54397),u=t(42535),h=(0,s.Ps)(r||(r=(0,l.Z)(["\nfragment EntityTinyFragment on Entity {\n  id: _id\n  title\n}\n"]))),f=t(85639);function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){(0,d.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var y=(0,s.Ps)(i||(i=(0,l.Z)(["\nfragment PersonTinyFragment on Person {\n  id: _id\n  name\n}\n"]))),v=function(n){var e=n.page,t=n.op,r=n.qryName,i=void 0===r?"":r,o=n.withDirected,c=void 0===o||o,a=n.withActed,d=void 0!==a&&a,l=n.withWrote,s=void 0!==l&&l,h=n.withProduced,f=void 0!==h&&h,m=n.withActedWith,y=void 0!==m&&m,v=n.withDirectedTo,x=void 0!==v&&v,w=n.withDirectedBy,j=void 0!==w&&w;return(0,u.h)(g({qryName:i}),{page:e,withActed:d,withDirected:null!==c&&void 0!==c&&c,withProduced:f,withWrote:s,withActedWith:y,withDirectedBy:j,withDirectedTo:x,field:JSON.stringify(t)},(function(n){return p(p({},n),{},{data:n.data.people})}))},g=function(n){var e=n.qryName;n.withActed,n.withDirected,n.withProduced,n.withWrote,n.withDirectedTo,n.withDirectedBy,n.withActedWith;return(0,s.Ps)(o||(o=(0,l.Z)(["\n  ","\n  ","\n  query people_","($page: Int, $field: String, $withActed: Boolean!, $withProduced: Boolean!, $withDirected: Boolean!, $withWrote: Boolean!)\n  {\n    people(page: $page, field: $field, withActed: $withActed, withWrote: $withWrote, withDirected: $withDirected, withProduced: $withProduced){\n      ...PersonTinyFragment\n      directed @include(if: $withDirected){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      acted @include(if: $withActed){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      produced @include(if: $withProduced){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      wrote @include(if: $withWrote){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n    }\n  }\n"])),h,y,e)},x=function(){return(0,u.h)(w(),{},(function(n){return p(p({},n),{},{data:n.data.dashboardPeople})}))},w=function(){return(0,s.Ps)(c||(c=(0,l.Z)(["\n  query dashboard_people\n  {\n    dashboardPeople {\n      total\n      birthYear\n      birthDecade\n      professionsPerPerson\n      professions\n      professionsByDecade\n      awards\n      directors\n      producers\n      actors\n      writers\n    }\n  }\n"])))},j=function(n){var e=n.id,t=n.qryName,r=void 0===t?"":t;return(0,u.h)(b({qryName:r}),{id:e},(function(n){return p(p({},n),{},{data:n.data.person})}))},b=function(n){n.qryName;return(0,s.Ps)(a||(a=(0,l.Z)(["\n","\n","\n","\nquery person($id:String!) {\n  person(id: $id){\n    id: _id\n    name\n    birthYear\n    deathYear\n    profession\n    awards {\n      category\n      festival{\n        ...MovieFestivalTinyFragment\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    produced{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    directed{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    acted {\n      id{\n        ...EntityTinyFragment\n      } \n      as\n    }\n    wrote{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    crew{\n      id{\n        ...EntityTinyFragment\n      } \n      as\n      cat\n      job\n    }    \n    directedTo{\n      p{\n        ...PersonTinyFragment\n      }\n      n\n    }\n    directedBy{\n      p{\n        ...PersonTinyFragment\n      }\n      n\n    }\n    actedWith{\n      p{\n        ...PersonTinyFragment\n      }\n      n\n    }    \n  }\n}\n"])),y,f.B9,h)}},25662:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(4942),i=(t(67294),t(43332)),o=t(55476),c=(t(59231),t(39698)),a=t(82356),d=t(85893);function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n){var e=n.tiny,t=n.format;t=e?"tiny":t;var r=n.p?n.p:n.id?n.id:null,l=s(s(s({},n),r),{},{n:n.n?n.n:0});switch(t){case"list":return function(n){var e=n.id,t=n.name,r=n.as,i=n.n;return(0,d.jsx)(c.u,{content:t,children:(0,d.jsx)(c.xs,{width:"220px",height:"125px",children:(0,d.jsx)(c.Ct,{content:i,children:(0,d.jsxs)(o.Z,{id:e,children:[(0,d.jsx)("div",{children:(0,d.jsx)(c.Dx,{children:null!==t&&void 0!==t?t:"?"})}),r&&(0,d.jsx)("div",{children:(0,d.jsxs)(c.x4,{children:["as ",r.replace(/[\[\]\'\"]/g,"")]})})]})})},e)})}(l);case"tiny":return function(n){var e=n.id,t=n.name,r=n.releaseYear;return(0,d.jsx)(c.u,{content:t,children:(0,d.jsx)(o.Z,{id:e,children:(0,d.jsx)(a.Z,{value:t,title:r})})})}(l);case"card":default:return function(n){var e=n.id,t=n.name,r=n.text,a=(n.box,n.n);return(0,d.jsx)(c.u,{content:t,children:(0,d.jsx)(o.Z,{box:!0,id:e,entity:t,children:(0,d.jsx)(i.Z,{title:(0,d.jsx)(c.Ct,{content:a,children:t}),text:r})},e)})}(l)}}},55476:function(n,e,t){t(67294);var r=t(89260),i=t(85893);e.Z=function(n){var e=n.id,t=(n.entity,n.children),o=n.box;return e?(0,i.jsx)(r.Z,{box:o,border:!1,to:"/people/".concat(e),children:t}):t}},43332:function(n,e,t){t(67294);var r=t(65295),i=t(18515),o=t(42643),c=t(54962),a=t(49161),d=t(2658),l=t(360),s=t(9092),u=t(14563),h=t(44290),f=t(85893),m=(0,h.Z)((function(n){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),p="".concat(s.Z.APP.BASE_PATH).concat(s.Z.DEFAULTS.IMAGE_PLACEHOLDER),y=function(n){return n.target.src=p};e.Z=function(n){var e,t=m(),h=n.title,p=n.subtitle,v=n.text,g=n.image,x=n.imageHeight,w=void 0===x?180:x,j=n.noImage,b=n.actions,P=0;p=p||"";return j=!!j,g=g||s.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,f.jsxs)(r.Z,{style:{flexGrow:1,width:"100%"},children:[(0,f.jsx)(i.Z,{sx:{width:"100%"},classes:{content:t.headerContent,root:t.headerRoot},title:(0,f.jsx)(u.Z,{title:h||"",placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,f.jsx)(d.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:h})})}),subheader:p}),!j&&(0,f.jsx)(c.Z,{height:w||null,image:null!==(e=g)&&void 0!==e&&e.startsWith("/")?"".concat(s.Z.APP.BASE_PATH).concat(g):g,component:"img",onError:y}),v&&(0,f.jsx)(o.Z,{children:(0,l.HD)(v)?(0,f.jsx)(d.Z,{variant:"body2",color:"text.secondary",component:"div",children:v}):v}),b&&b.length>0&&(0,f.jsx)(a.Z,{children:b.map((function(n){return(0,f.jsx)("div",{children:n},P++)}))})]})}},74288:function(n,e,t){t(67294),t(85893)},39698:function(n,e,t){t.d(e,{Ct:function(){return y},xs:function(){return x},x4:function(){return j},Dx:function(){return w},u:function(){return p}});var r=t(67294),i=t(29602),o=t(15671),c=t(43144),a=t(60136),d=t(6215),l=t(61120),s=t(36501),u=t(85893);function h(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=(0,l.Z)(n);if(e){var i=(0,l.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,d.Z)(this,t)}}r.Component;var f=t(32583),m=t(14563),p=function(n){var e=n.children,t=n.content;return t&&null!=t&&"?"!==t?(0,u.jsx)(m.Z,{title:t,placement:"bottom-start",children:e}):e},y=function(n){var e=n.children,t=n.content;return t&&null!=t&&0!=t?(0,u.jsx)(f.Z,{badgeContent:t,color:"primary",children:e}):e},v=(0,i.ZP)("div")((function(n){var e=n.theme,t=n.width,r=n.height;return{backgroundColor:e.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:e.palette.text.primary,alignItems:"center",minWidth:t,maxWidth:"100%",minHeight:r,maxHeight:r,borderRadius:"5px"}})),g=(0,i.ZP)("div")((function(n){var e=n.theme;n.width;return{backgroundColor:"transparent",color:e.palette.text.primary,padding:"0.7rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),x=function(n){var e=n.width,t=void 0===e?"300px":e,r=n.height,i=void 0===r?"300px":r;return(0,u.jsx)(v,{width:t,height:i,children:(0,u.jsx)(g,{children:n.children})})},w=(0,i.ZP)("h2")({fontSize:"1.3rem",lineHeight:"1.5rem",padding:0,margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),j=((0,i.ZP)("h3")({fontSize:"1.1rem",lineHeight:"1.3rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})}}]);