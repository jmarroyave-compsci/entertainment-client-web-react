(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{66971:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return U}});var t=n(67294),a=n(93942),i=n(73981),s=n(11163),o=n(4942),c=n(58248),d=n(40777),l={name:"page_person"},u={url:function(e){return"/people/".concat(e)}},p=(n(60361),n(76085),n(92275),n(81356)),f=n(8498),h=(n(35566),n(89446)),j=n(21055),x=n(26447),m=n(29602),g=n(85893);(0,m.ZP)("h1")({margin:0});function v(e){var r=e.data;return r?(0,g.jsx)(x.Z,{direction:"row",children:r.map((function(e,r){return(0,g.jsx)(h.Z,{text:e},r)}))}):(0,g.jsx)("div",{})}var y=n(98753),w=n(11951),Z=n(68220),b=n(8519),O=n(56490);var P=function(e){var r=e.data;return e.loading,r=r||{},console.log(r),(0,g.jsxs)(x.Z,{children:[(0,g.jsx)(j.Z,{src:r.image}),(0,g.jsx)(v,{data:r.profession}),(0,g.jsx)(y.Z,{text:r.name}),(0,g.jsxs)(Z.RQ,{children:[(0,g.jsx)(b.DK,{children:"General information"}),(0,g.jsx)(O.Z,{title:"Birth",data:r.birthDate,format:"year"}),(0,g.jsx)(O.Z,{title:"Death",data:r.deathDate,format:"year"})]}),(0,g.jsx)(p.Z,{data:r}),(0,g.jsx)(f.Z,{data:r?r.awards:null}),(0,g.jsx)(w.Z,{type:"acted",data:r.acted}),(0,g.jsx)(w.Z,{type:"directed",data:r.directed}),(0,g.jsx)(w.Z,{type:"wrote",data:r.wrote})]})},D=n(28973);function S(e){return(0,g.jsx)(Z.X,{children:(0,g.jsxs)(x.Z,{spacing:1,children:[(0,g.jsx)(D.Z,{variant:"rectangular",height:300}),(0,g.jsx)(D.Z,{variant:"text",height:"3rem",style:{marginBottom:"1rem"}}),(0,g.jsx)(D.Z,{variant:"text",style:{width:"40%"}}),(0,g.jsx)(D.Z,{variant:"text",style:{width:"25%"}}),(0,g.jsx)(D.Z,{variant:"text",style:{width:"25%"}}),(0,g.jsx)(D.Z,{variant:"text",style:{width:"25%"}})]})})}function _(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function E(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?_(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function k(e){var r=(0,a.v9)((function(e){return e[l.name]}));return r?(0,g.jsx)(c.Z,{xs:(0,g.jsx)(d.Z,{data:r.data,loading:r.loading,detail:function(e){return(0,g.jsx)(P,{data:e})},skeleton:(0,g.jsx)(S,{}),params:E({},r.params)})}):(0,g.jsx)("div",{})}var H,T=n(15861),z=n(87757),N=n.n(z),R=n(24268),Y=n(16161),q=n(30168),C=n(54397),K=n(8300);function Q(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function X(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Q(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var B,I=(0,C.Ps)(H||(H=(0,q.Z)(["\nquery getPerson($id:String!) {\n  person(id: $id){\n    id\n    name\n    birthDate\n    deathDate\n    profession\n    awards {\n      category\n      name\n      won\n      year\n    }\n    references {\n      imdb\n    }\n    directed {\n      id\n      title\n      releasedDate\n    }\n    wrote {\n      id\n      title\n      releasedDate\n    }\n    acted {\n      id\n      title\n      releasedDate\n    }\n  }\n}\n"]))),M=l.name,W=(0,R.hg)("".concat(M,"/fetchData"),function(){var e=(0,T.Z)(N().mark((function e(r,n){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(G(r)),e.next=3,t=r.id,(0,K.h)(I,{id:t},(function(e){return X(X({},e),{},{data:e.data.person})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var t}),e)})));return function(r,n){return e.apply(this,arguments)}}()),$=(0,R.oM)({name:M,initialState:{params:{id:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=r.payload,"banner"!==e.params.renderer&&e.params.page>1&&s.default.push("".concat(u.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(B={},(0,o.Z)(B,W.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(B,W.fulfilled,(function(e,r){var n=r.payload,t=n.loading,a=n.error,i=n.data;e.data=i,e.loading=t,e.error=a})),B)});Y.h.reducerManager.add(M,$.reducer);$.reducer;var G=$.actions.setParams,U=function(e){var r=(0,a.I0)(),n=(0,s.useRouter)();return(0,t.useEffect)((function(){var e=n.query&&n.query.person?n.query.person:"",t=e;r((0,i.Y)({breadcrumbs:[{name:"people",url:"/people"},{name:t}]})),r(W({id:e}))}),[n.isReady]),(0,g.jsx)(k,{})}},88329:function(e,r,n){"use strict";n(67294);var t=n(59983),a=n(85893);r.Z=function(e){var r=e.id,n=(e.entity,e.children);return(0,a.jsx)(t.Z,{border:!1,to:"/movies/".concat(r),children:n})}},8498:function(e,r,n){"use strict";n.d(r,{Z:function(){return x}});n(67294);var t=n(29602),a=n(68220),i=n(8519),s=(n(76085),n(92275),n(31189),n(59983)),o=n(85893),c=(0,t.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),d=(0,t.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),l=(0,t.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),u=(0,t.ZP)("div")({margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",lineHeight:"1rem"}),p=(0,t.ZP)("div")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem",fontWeight:400}),f=(0,t.ZP)("div")({fontSize:"0.85rem",lineHeight:"0.95rem"}),h=(0,t.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"}),j=function(e){var r=e.year,n=e.children;return(0,o.jsx)(s.Z,{href:"/movies/stories/awards?year=".concat(r),children:n})};function x(e){var r=e.data;return r&&0!=r.length?!0===e.mini?function(e,r){var n=e.year,t=e.all,a=t?r.length:2;n=parseInt(n);var i=function(e){return!n||e.year==n};return(0,o.jsxs)(c,{children:[r&&r.length>0&&r.slice(0,a).map((function(e,r){return i(e)&&(0,o.jsx)("div",{children:(0,o.jsx)(j,{year:e.year,children:(0,o.jsxs)(d,{children:[e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})})},r)})),!t&&r&&r.length>a&&(0,o.jsx)(d,{children:(0,o.jsx)(d,{children:(0,o.jsxs)(l,{children:["and ",r.length-a," more"]})})})]})}(e,r):function(e,r){var n=null,t=null,s=(e.year,function(e){return n&&n==e.year?null:(n=e.year,t=null,(0,o.jsx)(u,{children:e.year}))}),c=function(e){return t&&t==e.name?null:(t=e.name,(0,o.jsx)(p,{children:e.name}))};return(0,o.jsxs)(a.RQ,{children:[(0,o.jsx)(i.DK,{children:"awards"}),r&&r.length>0&&r.map((function(e,r){return(0,o.jsxs)("div",{children:[s(e),c(e),(0,o.jsx)(j,{year:e.year,children:(0,o.jsxs)(a.ck,{children:[(0,o.jsx)(h,{children:"false"===e.won||!1===e.won?"nominee":"winner"}),(0,o.jsx)(f,{children:e.category})]})})]},r)}))]})}(e,r):(0,o.jsx)("div",{})}},11951:function(e,r,n){"use strict";n(67294);var t=n(68220),a=n(8519),i=n(88329),s=n(76085),o=n(92275),c=n(35566),d=n(85893);r.Z=function(e){var r=e.data,n=(e.loading,e.type);if(!r||0==r.length)return(0,d.jsx)("div",{});var l=(0,d.jsxs)(a.DK,{children:[n,(0,d.jsxs)(a.x4,{children:[" [",r.length,"]"]})]});return(0,d.jsxs)(t.RQ,{children:[r&&r.length>0&&l,(0,d.jsx)(s.Z,{children:r&&r.length>0&&r.map((function(e,r){return(0,d.jsx)(o.Z,{xs:12,sm:12,md:6,lg:4,children:(0,d.jsx)("div",{children:(0,d.jsx)(i.Z,{id:e.id,children:(0,d.jsxs)("div",{children:[e.title," ",(0,d.jsxs)(a.x4,{children:["(",(0,d.jsx)(c.Z,{value:e.releasedDate,format:"YYYY"}),")"]})]})})})},r)}))})]})}},31189:function(e,r,n){"use strict";n(67294),n(85893)},54317:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/[person]",function(){return n(66971)}])}},function(e){e.O(0,[572,951,774,888,179],(function(){return r=54317,e(e.s=r);var r}));var r=e.O();_N_E=r}]);