"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7123],{59231:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(67294),i=t(29602),o=t(50367),a=t(58862),c=t(82356),d=(t(52651),t(23275),t(74288),t(89260)),s=t(57435),u=t(87550),l=t(39660),f=t(21314),p=t(56775),h=t(72162),y=t(65148),v=t(54123),g=t(85893),m=(0,i.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),j=(0,i.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),w=(0,i.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),b=(0,i.ZP)("div")({fontSize:"1.30rem",lineHeight:"1.4rem"}),O=(0,i.ZP)("div")({textTransform:"uppercase",margin:"0.5rem 0 0.5rem 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem"}),P=(0,i.ZP)("div")({paddingLeft:"1rem"}),x=function(e){var n=e.year,t=e.children;return(0,g.jsx)(d.Z,{href:"/movies/stories/awards?year=".concat(n),children:t})};function Z(e){var n=e.data,t=[],i={};return n&&0!=n.length?((0,r.useMemo)((function(){(t=(t=n.slice(0)).sort((function(e,n){var t,r,i,o;return e.year!=n.year?e.year<n.year?1:-1:(null===e||void 0===e||null===(t=e.festival)||void 0===t?void 0:t.name)!=(null===n||void 0===n||null===(r=n.festival)||void 0===r?void 0:r.name)?(null===e||void 0===e||null===(i=e.festival)||void 0===i?void 0:i.name)<(null===n||void 0===n||null===(o=n.festival)||void 0===o?void 0:o.name)?-1:1:e.category<n.category?-1:1}))).forEach((function(e){var n,t,r=null!==(n=null===(t=e.festival)||void 0===t?void 0:t.name)&&void 0!==n?n:"festival name";i[e.year]||(i[e.year]={}),i[e.year][r]||(i[e.year][r]={id:e.festival.id}),i[e.year][r][e.category]||(i[e.year][r][e.category]={won:e.won})}))}),[n]),!0===e.mini?function(e,n){var t=e.year,r=e.all,i=r?n.length:2;t=parseInt(t);var o=function(e){return!t||e.year==t};return(0,g.jsxs)(m,{children:[n&&n.length>0&&n.slice(0,i).map((function(e,n){var t,r;return o(e)&&(0,g.jsx)("div",{children:(0,g.jsx)(x,{year:e.year,children:(0,g.jsxs)(j,{children:[e.year," - ",(null!==(t=null===(r=e.festival)||void 0===r?void 0:r.name)&&void 0!==t?t:"festival name").toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},n)})),!r&&n&&n.length>i&&(0,g.jsx)(j,{children:(0,g.jsx)(j,{children:(0,g.jsxs)(w,{children:["and ",n.length-i," more"]})})})]})}(e,t):function(e,n){return(0,g.jsxs)(o.RQ,{children:[(0,g.jsx)(a.DK,{children:"awards"}),(0,g.jsx)(u.Z,{children:n&&Object.keys(n).reverse().map((function(e,t){return(0,g.jsxs)(l.Z,{children:[(0,g.jsx)(v.Z,{style:{flex:0},color:"text.secondary",children:(0,g.jsx)(x,{year:e,children:(0,g.jsx)(b,{children:e})})}),(0,g.jsxs)(f.Z,{children:[(0,g.jsx)(y.Z,{}),t+1<Object.keys(n).length&&(0,g.jsx)(p.Z,{})]}),(0,g.jsx)(h.Z,{children:Object.keys(n[e]).map((function(t){return(0,g.jsxs)("div",{children:[(0,g.jsx)(s.Z,{entity:"movies",year:e,id:n[e][t].id,children:(0,g.jsx)(O,{children:t})}),Object.keys(n[e][t]).filter((function(e){return"id"!==e})).map((function(r){return(0,g.jsx)(P,{children:(0,g.jsx)(c.Z,{title:!1===n[e][t][r].won?"nominee":"winner",value:r})},r)}))]},n[e][t].id)}))})]},e)}))})]})}(0,i)):(0,g.jsx)("div",{})}},57435:function(e,n,t){t(67294);var r=t(89260),i=t(85893);n.Z=function(e){var n=e.box,t=e.id,o=e.year,a=e.entity,c=e.children;return(0,i.jsx)(r.Z,{box:n,to:"/".concat(a,"/stories/awards/").concat(t,"/").concat(o),children:c})}},75679:function(e,n,t){t.d(n,{T4:function(){return v},AK:function(){return j},iY:function(){return b},Ez:function(){return g}});var r,i,o,a,c,d=t(4942),s=t(30168),u=t(54397),l=t(42535),f=(0,u.Ps)(r||(r=(0,s.Z)(["\nfragment EntityTinyFragment on Entity {\n  id: _id\n  title\n}\n"]))),p=t(85639);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=(0,u.Ps)(i||(i=(0,s.Z)(["\nfragment PersonTinyFragment on Person {\n  id: _id\n  name\n}\n"]))),g=function(e){var n=e.page,t=e.op,r=e.qryName,i=void 0===r?"":r,o=e.withDirected,a=void 0===o||o,c=e.withActed,d=void 0!==c&&c,s=e.withWrote,u=void 0!==s&&s,f=e.withProduced,p=void 0!==f&&f,h=e.withActedWith,v=void 0!==h&&h,g=e.withDirectedTo,j=void 0!==g&&g,w=e.withDirectedBy,b=void 0!==w&&w;return(0,l.h)(m({qryName:i}),{page:n,withActed:d,withDirected:null!==a&&void 0!==a&&a,withProduced:p,withWrote:u,withActedWith:v,withDirectedBy:b,withDirectedTo:j,field:JSON.stringify(t)},(function(e){return y(y({},e),{},{data:e.data.people})}))},m=function(e){var n=e.qryName;e.withActed,e.withDirected,e.withProduced,e.withWrote,e.withDirectedTo,e.withDirectedBy,e.withActedWith;return(0,u.Ps)(o||(o=(0,s.Z)(["\n  ","\n  ","\n  query people_","($page: Int, $field: String, $withActed: Boolean!, $withProduced: Boolean!, $withDirected: Boolean!, $withWrote: Boolean!)\n  {\n    people(page: $page, field: $field, withActed: $withActed, withWrote: $withWrote, withDirected: $withDirected, withProduced: $withProduced){\n      ...PersonTinyFragment\n      directed @include(if: $withDirected){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      acted @include(if: $withActed){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      produced @include(if: $withProduced){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n      wrote @include(if: $withWrote){\n        id{\n          ...EntityTinyFragment\n        } \n      }\n    }\n  }\n"])),f,v,n)},j=function(){return(0,l.h)(w(),{},(function(e){return y(y({},e),{},{data:e.data.dashboardPeople})}))},w=function(){return(0,u.Ps)(a||(a=(0,s.Z)(["\n  query dashboard_people\n  {\n    dashboardPeople {\n      total\n      birthYear\n      birthDecade\n      professionsPerPerson\n      professions\n      professionsByDecade\n      awards\n      directors\n      producers\n      actors\n      writers\n    }\n  }\n"])))},b=function(e){var n=e.id,t=e.qryName,r=void 0===t?"":t;return(0,l.h)(O({qryName:r}),{id:n},(function(e){return y(y({},e),{},{data:e.data.person})}))},O=function(e){e.qryName;return(0,u.Ps)(c||(c=(0,s.Z)(["\n","\n","\n","\nquery person($id:String!) {\n  person(id: $id){\n    id: _id\n    name\n    birthYear\n    deathYear\n    profession\n    awards {\n      category\n      festival{\n        ...MovieFestivalTinyFragment\n      }\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    produced{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    directed{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    acted {\n      id{\n        ...EntityTinyFragment\n      } \n      as\n    }\n    wrote{\n      id{\n        ...EntityTinyFragment\n      } \n    }\n    crew{\n      id{\n        ...EntityTinyFragment\n      } \n      as\n      cat\n      job\n    }    \n    directedTo{\n      p{\n        ...PersonTinyFragment\n      }\n      n\n    }\n    directedBy{\n      p{\n        ...PersonTinyFragment\n      }\n      n\n    }\n    actedWith{\n      p{\n        ...PersonTinyFragment\n      }\n      n\n    }    \n  }\n}\n"])),v,p.B9,f)}},41821:function(e,n,t){t.d(n,{Z:function(){return N}});var r,i=t(4942),o=(t(67294),t(55619)),a={automata:{name:"stories-remakes"},page:{title:"Remakes",description:"",url:function(e){var n=e.entity;return"/".concat(n,"/stories/remakes")}},banner:{showData:!0}},c=t(15861),d=t(87757),s=t.n(d),u=t(24268),l=t(80105),f=t(11163),p=t(30168),h=t(54397),y=t(42535),v=t(75679);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j,w=function(e){var n=e.page,t=e.entity;return(0,y.h)(b({ENTITY:t.replace(/-/g,"_")}),{page:n},(function(e){return m(m({},e),{},{data:e.data.storyRemakes})}))},b=function(e){var n=e.ENTITY;return(0,h.Ps)(r||(r=(0,p.Z)(["\n","\nquery ","_remakes($page: Int){\n  storyRemakes(page: $page){\n    name\n    count\n    recs{\n      id: _id\n      releaseYear\n      directed{\n        id{\n          ...PersonTinyFragment\n        } \n      }\n    }\n  }\n}\n"])),v.T4,n)};function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=a.automata.name,Z=(0,u.hg)("".concat(x,"/fetchData"),function(){var e=(0,c.Z)(s().mark((function e(n,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch(E(n));case 2:return e.next=4,w(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),D=(0,u.oM)({name:x,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,n){e.params=P(P({},e.params),n.payload),"banner"!=e.params.renderer&&1!=e.params.page&&f.default.push("".concat(a.page.url(e.params),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(j={},(0,i.Z)(j,Z.pending,(function(e,n){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(j,Z.fulfilled,(function(e,n){var t=n.payload,r=t.loading,i=t.error,o=t.data;e.data=o,e.loading=r,e.error=i})),(0,i.Z)(j,Z.rejected,(function(e,n){var t=n.error;e.data=[],e.loading=!1,e.error=t})),j)});l.h.reducerManager.add(x,D.reducer);D.reducer;var E=D.actions.setParams,T=t(43332),S=t(49896),A=(t(59231),t(19888),t(82356)),k=t(85893);function F(e){var n=e.image,t=e.name,r=(e.count,e.recs);return(0,k.jsx)(T.Z,{image:n?n.poster:n,text:(0,k.jsx)("div",{children:r.slice(0,3).map((function(e,n){var t,r,i;return null!==(t=e.directed[0])&&void 0!==t&&t.id?(0,k.jsx)(A.Z,{title:e.releaseYear,value:(0,k.jsx)($,{id:e.id,children:null===(r=e.directed[0])||void 0===r||null===(i=r.id)||void 0===i?void 0:i.name},n)},n):(0,k.jsx)(A.Z,{title:"\xa0",value:(0,k.jsx)($,{id:e.id,children:e.releaseYear},n)},n)}))}),title:t})}function $(e){var n=e.id,t=e.children;return n?(0,k.jsx)(S.Z,{id:n,children:(0,k.jsx)("div",{children:t})}):t}t(45688);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e){return(0,k.jsx)(o.Z,{params:e,config:a,fetch:function(e){return Z(W({},e))},item:function(e){return(0,k.jsx)(F,W({full:!0},e))}})}},47123:function(e,n,t){var r=t(4942),i=(t(67294),t(41821)),o=t(85893);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){return(0,o.jsx)(i.Z,c(c({},e),{},{render:"list"}))}},19888:function(e,n,t){t.d(n,{Rx:function(){return a},T5:function(){return c},et:function(){return d}});var r=t(92077),i=t.n(r),o=t(24417),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return i()(Number(e)).format(n)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.default.toSentenceCase(e)},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.default.toHeaderCase(e)}},43332:function(e,n,t){t(67294);var r=t(65295),i=t(18515),o=t(42643),a=t(54962),c=t(49161),d=t(2658),s=t(360),u=t(9092),l=t(14563),f=t(44290),p=t(85893),h=(0,f.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),y="".concat(u.Z.APP.BASE_PATH).concat(u.Z.DEFAULTS.IMAGE_PLACEHOLDER),v=function(e){return e.target.src=y};n.Z=function(e){var n,t=h(),f=e.title,y=e.subtitle,g=e.text,m=e.image,j=e.imageHeight,w=void 0===j?180:j,b=e.noImage,O=e.actions,P=0;y=y||"";return b=!!b,m=m||u.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,p.jsxs)(r.Z,{style:{flexGrow:1,width:"100%"},children:[(0,p.jsx)(i.Z,{sx:{width:"100%"},classes:{content:t.headerContent,root:t.headerRoot},title:(0,p.jsx)(l.Z,{title:f||"",placement:"bottom-start",children:(0,p.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,p.jsx)(d.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:f})})}),subheader:y}),!b&&(0,p.jsx)(a.Z,{height:w||null,image:null!==(n=m)&&void 0!==n&&n.startsWith("/")?"".concat(u.Z.APP.BASE_PATH).concat(m):m,component:"img",onError:v}),g&&(0,p.jsx)(o.Z,{children:(0,s.HD)(g)?(0,p.jsx)(d.Z,{variant:"body2",color:"text.secondary",component:"div",children:g}):g}),O&&O.length>0&&(0,p.jsx)(c.Z,{children:O.map((function(e){return(0,p.jsx)("div",{children:e},P++)}))})]})}},74288:function(e,n,t){t(67294),t(85893)}}]);