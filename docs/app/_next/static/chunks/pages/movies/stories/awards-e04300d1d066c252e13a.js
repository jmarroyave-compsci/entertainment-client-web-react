(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5461],{60181:function(n,e,t){"use strict";var r=t(64119);e.Z=void 0;var i=r(t(64938)),o=t(85893),a=(0,i.default)((0,o.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");e.Z=a},23508:function(n,e,t){"use strict";var r=t(64119);e.Z=void 0;var i=r(t(64938)),o=t(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");e.Z=a},59231:function(n,e,t){"use strict";t.d(e,{Z:function(){return O}});var r=t(67294),i=t(29602),o=t(50367),a=t(58862),c=t(82356),d=(t(52651),t(23275),t(74288),t(89260)),s=t(57435),u=t(87550),l=t(39660),f=t(21314),h=t(56775),v=t(72162),y=t(65148),p=t(54123),m=t(85893),g=(0,i.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),w=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),j=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),x=(0,i.ZP)("div")({fontSize:"1.30rem",lineHeight:"1.4rem"}),b=(0,i.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),Z=(0,i.ZP)("div")({paddingLeft:"1rem"}),P=function(n){var e=n.year,t=n.children;return(0,m.jsx)(d.Z,{href:"/movies/stories/awards?year=".concat(e),children:t})};function O(n){var e=n.data,t=[],i={};return e&&0!=e.length?((0,r.useMemo)((function(){(t=(t=e.slice(0)).sort((function(n,e){var t,r,i,o;return n.year!=e.year?n.year<e.year?1:-1:(null===n||void 0===n||null===(t=n.festival)||void 0===t?void 0:t.name)!=(null===e||void 0===e||null===(r=e.festival)||void 0===r?void 0:r.name)?(null===n||void 0===n||null===(i=n.festival)||void 0===i?void 0:i.name)<(null===e||void 0===e||null===(o=e.festival)||void 0===o?void 0:o.name)?-1:1:n.category<e.category?-1:1}))).forEach((function(n){var e,t,r=null!==(e=null===(t=n.festival)||void 0===t?void 0:t.name)&&void 0!==e?e:"festival name";i[n.year]||(i[n.year]={}),i[n.year][r]||(i[n.year][r]={id:n.festival.id}),i[n.year][r][n.category]||(i[n.year][r][n.category]={won:n.won})}))}),[e]),!0===n.mini?function(n,e){var t=n.year,r=n.all,i=r?e.length:2;t=parseInt(t);var o=function(n){return!t||n.year==t};return(0,m.jsxs)(g,{children:[e&&e.length>0&&e.slice(0,i).map((function(n,e){var t,r;return o(n)&&(0,m.jsx)("div",{children:(0,m.jsx)(P,{year:n.year,children:(0,m.jsxs)(w,{children:[n.year," - ",(null!==(t=null===(r=n.festival)||void 0===r?void 0:r.name)&&void 0!==t?t:"festival name").toUpperCase()," - ","false"===n.won||!1===n.won?"[N]":"[W]"," ",n.category]})})},e)})),!r&&e&&e.length>i&&(0,m.jsx)(w,{children:(0,m.jsx)(w,{children:(0,m.jsxs)(j,{children:["and ",e.length-i," more"]})})})]})}(n,t):function(n,e){return(0,m.jsxs)(o.RQ,{children:[(0,m.jsx)(a.DK,{children:"awards"}),(0,m.jsx)(u.Z,{children:e&&Object.keys(e).reverse().map((function(n,t){return(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(p.Z,{style:{flex:0},color:"text.secondary",children:(0,m.jsx)(P,{year:n,children:(0,m.jsx)(x,{children:n})})}),(0,m.jsxs)(f.Z,{children:[(0,m.jsx)(y.Z,{}),t+1<Object.keys(e).length&&(0,m.jsx)(h.Z,{})]}),(0,m.jsx)(v.Z,{children:Object.keys(e[n]).map((function(t){return(0,m.jsxs)("div",{children:[(0,m.jsx)(s.Z,{entity:"movies",year:n,id:e[n][t].id,children:(0,m.jsx)(b,{children:t})}),Object.keys(e[n][t]).filter((function(n){return"id"!==n})).map((function(r){return(0,m.jsx)(Z,{children:(0,m.jsx)(c.Z,{title:!1===e[n][t][r].won?"nominee":"winner",value:r})},r)}))]},e[n][t].id)}))})]},n)}))})]})}(0,i)):(0,m.jsx)("div",{})}},57435:function(n,e,t){"use strict";t(67294);var r=t(89260),i=t(85893);e.Z=function(n){var e=n.box,t=n.id,o=n.year,a=n.entity,c=n.children;return(0,i.jsx)(r.Z,{box:e,to:"/".concat(a,"/stories/awards/").concat(t,"/").concat(o),children:c})}},42341:function(n,e,t){"use strict";t(67294);var r=t(89260),i=t(85893);e.Z=function(n){var e=n.id,t=n.children,o=n.box;return(0,i.jsx)(r.Z,{box:o,to:"/movies/festivals/".concat(e),children:t})}},49896:function(n,e,t){"use strict";t(67294);var r=t(89260),i=t(85893);e.Z=function(n){var e=n.id,t=(n.entity,n.children),o=n.box;return e?(0,i.jsx)(r.Z,{box:o,border:!1,to:"/movies/".concat(e),children:t}):t}},75679:function(n,e,t){"use strict";t.d(e,{T4:function(){return p},AK:function(){return w},iY:function(){return x},Ez:function(){return m}});var r,i,o,a,c,d=t(4942),s=t(30168),u=t(54397),l=t(74273),f=(0,u.Ps)(r||(r=(0,s.Z)(["\nfragment EntityTinyFragment on Entity {\n  id: _id\n  title\n}\n"]))),h=t(85639);function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,d.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var p=(0,u.Ps)(i||(i=(0,s.Z)(["\nfragment PersonTinyFragment on Person {\n  id: _id\n  name\n}\n"]))),m=function(n){var e=n.page,t=n.op,r=n.qryName,i=void 0===r?"":r,o=n.withDirected,a=void 0===o||o,c=n.withActed,d=void 0!==c&&c,s=n.withWrote,u=void 0!==s&&s,f=n.withProduced,h=void 0!==f&&f;return(0,l.h)(g({qryName:i}),{page:e,withActed:d,withDirected:null!==a&&void 0!==a&&a,withProduced:h,withWrote:u,field:JSON.stringify(t)},(function(n){return y(y({},n),{},{data:n.data.people})}))},g=function(n){var e=n.qryName;n.withActed,n.withDirected,n.withProduced,n.withWrote;return(0,u.Ps)(o||(o=(0,s.Z)(["\n  ","\n  ","\n  query people_","($page: Int, $field: String, $withActed: Boolean!, $withProduced: Boolean!, $withDirected: Boolean!, $withWrote: Boolean!)\n  {\n    people(page: $page, field: $field, withActed: $withActed, withWrote: $withWrote, withDirected: $withDirected, withProduced: $withProduced){\n      ...PersonTinyFragment\n      directed @include(if: $withDirected){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      acted @include(if: $withActed){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      produced @include(if: $withProduced){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      wrote @include(if: $withWrote){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n    }\n  }\n"])),f,p,e)},w=function(){return(0,l.h)(j(),{},(function(n){return y(y({},n),{},{data:n.data.dashboardPeople})}))},j=function(){return(0,u.Ps)(a||(a=(0,s.Z)(["\n  query dashboard_people\n  {\n    dashboardPeople {\n      total\n      birthYear\n      birthDecade\n      professionsPerPerson\n      professions\n      professionsByDecade\n      awards\n      directors\n      producers\n      actors\n      writers\n    }\n  }\n"])))},x=function(n){var e=n.id,t=n.qryName,r=void 0===t?"":t;return(0,l.h)(b({qryName:r}),{id:e},(function(n){return y(y({},n),{},{data:n.data.person})}))},b=function(n){n.qryName;return(0,u.Ps)(c||(c=(0,s.Z)(["\n","\n","\nquery person($id:String!) {\n  person(id: $id){\n    id: _id\n    name\n    birthYear\n    deathYear\n    profession\n    awards {\n      category\n      festival{\n        ...MovieFestivalTinyFragment\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    produced{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    directed{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    acted {\n      id{\n        ...EntityTinyFragment\n      } \n      as\n    }\n    wrote{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    crew{\n      id{\n        ...EntityTinyFragment\n      } \n      as\n      cat\n      job\n    }    \n  }\n}\n"])),h.B9,f)}},55476:function(n,e,t){"use strict";t(67294);var r=t(89260),i=t(85893);e.Z=function(n){var e=n.id,t=(n.entity,n.children),o=n.box;return e?(0,i.jsx)(r.Z,{box:o,border:!1,to:"/people/".concat(e),children:t}):t}},44898:function(n,e,t){"use strict";t(67294);var r=t(89260),i=t(85893);e.Z=function(n){var e=n.id,t=(n.entity,n.children),o=n.box;return(0,i.jsx)(r.Z,{box:o,border:!0,to:"/podcasts/".concat(e),children:t})}},24463:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(67294),i=(t(50367),t(58862),t(72642)),o=t(71508),a=t(60181),c=t(23508),d=t(62318),s=t(85893);function u(n){var e=n.filters,t=(0,r.useState)(!1),u=t[0],l=t[1];var f=function(n){l(n)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{onClick:function(){return f(!u)},endIcon:u?(0,s.jsx)(a.Z,{}):(0,s.jsx)(c.Z,{}),children:"Filter"}),(0,s.jsx)(d.ZP,{anchor:"top",open:u,onClose:function(){return f(!1)},children:(0,s.jsx)(o.Z,{sx:{padding:"2rem 2rem 0rem 2rem",backgroundColor:"background.paper"},children:e({onChange:function(e){n.onChange&&n.onChange(e),f(!1)}})})})]})}},43332:function(n,e,t){"use strict";t(67294);var r=t(65295),i=t(18515),o=t(42643),a=t(54962),c=t(49161),d=t(2658),s=t(360),u=t(9092),l=t(6447),f=t(27054),h=t(85893),v=(0,f.Z)((function(n){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),y="".concat(u.Z.APP.BASE_PATH).concat(u.Z.DEFAULTS.IMAGE_PLACEHOLDER),p=function(n){return n.target.src=y};e.Z=function(n){var e,t=v(),f=n.title,y=n.subtitle,m=n.text,g=n.image,w=n.imageHeight,j=void 0===w?180:w,x=n.noImage,b=n.actions,Z=0;y=y||"";return x=!!x,g=g||u.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,h.jsxs)(r.Z,{style:{flexGrow:1,width:"100%"},children:[(0,h.jsx)(i.Z,{sx:{width:"100%"},classes:{content:t.headerContent,root:t.headerRoot},title:(0,h.jsx)(l.ZP,{title:f||"",placement:"bottom-start",children:(0,h.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,h.jsx)(d.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:f})})}),subheader:y}),!x&&(0,h.jsx)(a.Z,{height:j||null,image:null!==(e=g)&&void 0!==e&&e.startsWith("/")?"".concat(u.Z.APP.BASE_PATH).concat(g):g,component:"img",onError:p}),m&&(0,h.jsx)(o.Z,{children:(0,s.HD)(m)?(0,h.jsx)(d.Z,{variant:"body2",color:"text.secondary",component:"div",children:m}):m}),b&&b.length>0&&(0,h.jsx)(c.Z,{children:b.map((function(n){return(0,h.jsx)("div",{children:n},Z++)}))})]})}},74288:function(n,e,t){"use strict";t(67294),t(85893)},98326:function(n,e,t){"use strict";t.d(e,{a:function(){return r},V:function(){return i}});var r=function(){for(var n=[],e=1880;e<(new Date).getFullYear();e+=10){var t=e.toString().slice(0,3).padEnd(4,"0");n.push(t)}return n.reverse()},i=function(){for(var n=[],e=1880;e<(new Date).getFullYear();e++){var t=e.toString();n.push(t)}return n.reverse()}},49631:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});t(67294);var r=t(11163),i=t(4942),o=t(22575),a=t(85893);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s=function(n){return(0,a.jsx)(o.Z,d(d({},n),{},{render:"page"}))},u=function(n){var e=(0,r.useRouter)(),t=e.query?e.query:{},i=t.year,o=t.page;return o=o?parseInt(o):1,i=i||2017,(0,a.jsx)(s,{breadcrumbs:"/movies/stories/awards",year:i,entity:"movies",page:o})}},37e3:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/awards",function(){return t(49631)}])}},function(n){n.O(0,[6499,5685,3128,5218,4471,4197,7338,2575,9774,2888,179],(function(){return e=37e3,n(n.s=e);var e}));var e=n.O();_N_E=e}]);