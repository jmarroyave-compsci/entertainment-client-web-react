(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6710],{20780:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});t(67294);var n=t(43332),i=t(49896),a=t(59231),c=t(39698),o=t(82356),s=t(85893);function u(e){var r=e.tiny,t=e.format;switch(t=r?"tiny":t){case"list":return function(e){var r=e.id,t=e.title,n=e.releaseYear,a=e.as;return(0,s.jsx)(c.xs,{width:"220px",height:"125px",children:(0,s.jsxs)(i.Z,{id:r,children:[(0,s.jsx)(c.x4,{children:null!==n&&void 0!==n?n:"?"}),(0,s.jsx)(c.Dx,{children:null!==t&&void 0!==t?t:"?"}),a&&(0,s.jsx)("div",{children:(0,s.jsxs)(c.x4,{children:["as ",a.replace(/[\[\]\'\"]/g,"")]})})]})},r)}(e);case"tiny":return function(e){var r,t;return(0,s.jsx)(i.Z,{id:e.id,children:(0,s.jsx)(o.Z,{title:null!==(r=null===e||void 0===e?void 0:e.releaseYear)&&void 0!==r?r:"?",value:null!==(t=null===e||void 0===e?void 0:e.title)&&void 0!==t?t:"?"})})}(e);case"card":default:return function(e){var r=e.full,t=e.releaseYear,c=e.all,o=e.id,u=e.title,l=e.awards,d=e.image;return(0,s.jsx)(i.Z,{box:!0,id:o,children:(0,s.jsx)(n.Z,{image:d?d.poster:d,text:l?(0,s.jsx)(a.Z,{mini:!r,data:l,year:year,all:c}):null,title:u,subtitle:t})})}(e)}}},25662:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});t(67294);var n=t(43332),i=t(55476),a=(t(59231),t(39698)),c=t(82356),o=t(85893);function s(e){var r=e.tiny,t=e.format;switch(t=r?"tiny":t){case"list":return function(e){var r=e.id,t=e.name,n=e.as;return(0,o.jsx)(a.xs,{width:"220px",height:"125px",children:(0,o.jsxs)(i.Z,{id:r,children:[(0,o.jsx)("div",{children:(0,o.jsx)(a.Dx,{children:null!==t&&void 0!==t?t:"?"})}),n&&(0,o.jsx)("div",{children:(0,o.jsxs)(a.x4,{children:["as ",n.replace(/[\[\]\'\"]/g,"")]})})]})},r)}(e);case"tiny":return function(e){var r=e.id,t=e.name,n=e.releaseYear;return(0,o.jsx)(i.Z,{id:r,children:(0,o.jsx)(c.Z,{value:t,title:n})})}(e);case"card":default:return function(e){var r=e.id,t=e.name,a=e.text;e.box;return(0,o.jsx)(i.Z,{box:!0,id:r,entity:t,children:(0,o.jsx)(n.Z,{title:t,text:a})},r)}(e)}}},55476:function(e,r,t){"use strict";t(67294);var n=t(89260),i=t(85893);r.Z=function(e){var r=e.id,t=(e.entity,e.children),a=e.box;return r?(0,i.jsx)(n.Z,{box:a,border:!1,to:"/people/".concat(r),children:t}):t}},2295:function(e,r,t){"use strict";var n=t(4942),i=(t(67294),t(50367)),a=t(58862),c=t(34769),o=t(20780),s=t(85893);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.data,t=(e.loading,e.type),n=e.filter;if(!r||0==r.length)return(0,s.jsx)("div",{});var u=e.tiny?r.slice(0,3):r;u=n?u.filter(n):u;var d=(0,s.jsxs)(a.DK,{children:[t,(0,s.jsxs)(a.x4,{children:[" [",u.length,"]"]})]});return(0,s.jsxs)(i.RQ,{children:[!e.tiny&&d,e.tiny&&u.map((function(e,r){return(0,s.jsx)("div",{children:(0,s.jsx)(o.Z,l({format:"tiny"},e.id))},r)})),!e.tiny&&(0,s.jsx)(c.Z,{data:u,item:function(e){return(0,s.jsx)(o.Z,l(l({format:"list"},e),e.id))}}),e.tiny&&r.length>u.length&&(0,s.jsxs)(a.x4,{children:["and ",r.length-u.length," more"]})]})}},21786:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n,i=t(4942),a=(t(67294),t(55619)),c={automata:{name:"stories_actors"},page:{title:"Actors",description:"",url:function(e){var r=e.entity;return"/".concat(r,"/stories/actors")}},banner:{showData:!1}},o=t(15861),s=t(87757),u=t.n(s),l=t(24268),d=t(16161),f=t(11163),p=t(75679);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y=c.automata.name,b=(0,l.hg)("".concat(y,"/fetchData"),function(){var e=(0,o.Z)(u().mark((function e(r,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(v(r)),r.op={op:"in",field:"profession",value:["actor","actress"]},r.withActed=!0,r.withDirected=!1,r.qryName="actors",e.next=7,p.Ez(r);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),O=(0,l.oM)({name:y,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=h(h({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&f.default.push("".concat(c.page.url(e.params),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(n={},(0,i.Z)(n,b.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(n,b.fulfilled,(function(e,r){var t=r.payload,n=t.loading,i=t.error,a=t.data;e.data=a,e.loading=n,e.error=i})),(0,i.Z)(n,b.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),n)});d.h.reducerManager.add(y,O.reducer);O.reducer;var v=O.actions.setParams,x=t(25662),g=t(2295),m=t(85893);function w(e){var r=e.id,t=e.name,n=e.acted;return(0,m.jsx)(x.Z,{id:r,name:t,text:(0,m.jsx)(g.Z,{tiny:!0,data:n})})}var P=t(45688);function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function E(e){return(0,m.jsx)(a.Z,{params:e,config:c,fetch:function(e){return b(D({},e))},item:function(e){return(0,m.jsx)(w,D({full:!0},e))},customDescription:(0,m.jsx)(P.C,{tag:"actor"}),customUrl:function(e){return c.page.url(e.entity)}})}function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var S=function(e){return(0,m.jsx)(E,k(k({},e),{},{render:"list"}))}},92970:function(e,r,t){"use strict";t.r(r);t(67294);var n=t(11163),i=t(21786),a=t(85893);r.default=function(e){var r=(0,n.useRouter)(),t=(r&&r.query?r.query:[]).page;return t=t?parseInt(t):1,(0,a.jsx)(i.Z,{page:t,entity:"tv-shows",breadcrumbs:"/tv-shows/stories/actors"})}},97101:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tv-shows/stories/actors",function(){return t(92970)}])}},function(e){e.O(0,[6499,5685,3128,5218,4471,4197,7338,7792,5683,9774,2888,179],(function(){return r=97101,e(e.s=r);var r}));var r=e.O();_N_E=r}]);