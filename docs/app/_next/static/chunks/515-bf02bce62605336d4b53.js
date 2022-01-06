"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{70515:function(e,r,t){t.d(r,{Z:function(){return re}});var n,o=t(4942),c=t(67294),a=t(55619),i={automata:{name:"story-topics"},page:{title:"Topics",description:"",url:function(e){var r=e.entity,t=e.decade,n=e.genre,o=e.page;return"/".concat(r,"/stories/topics?decade=").concat(t,"&genre=").concat(n,"&page=").concat(o)}},banner:{showData:!0,renderer:"marquee"}},u=t(15861),p=t(87757),s=t.n(p),l=t(24268),d=t(80105),f=t(11163),g=t(1015);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b=i.automata.name,j=(0,l.hg)("".concat(b,"/fetchTopic"),function(){var e=(0,u.Z)(s().mark((function e(r,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.S)(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),h=(0,l.hg)("".concat(b,"/fetchData"),function(){var e=(0,u.Z)(s().mark((function e(r,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(w(r)),e.next=3,(0,g.E)(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),v=(0,l.oM)({name:b,initialState:{params:{renderer:null,entity:null,page:null,genre:null,decade:null},data:null,loading:!0,error:null,topic:{data:null,loading:!0,error:null}},reducers:{setParams:function(e,r){e.params=y(y({},e.params),r.payload),"banner"!=e.params.renderer&&f.default.push("".concat(i.page.url(e.params)),null,{shallow:!0})}},extraReducers:(n={},(0,o.Z)(n,h.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(n,h.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(n,h.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),(0,o.Z)(n,j.pending,(function(e,r){e.topic.data=null,e.topic.loading=!0,e.topic.error=""})),(0,o.Z)(n,j.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.topic.data=c,e.topic.loading=n,e.topic.error=o})),(0,o.Z)(n,j.rejected,(function(e,r){var t=r.error;e.topic.data=[],e.topic.loading=!1,e.topic.error=t})),n)});d.h.reducerManager.add(b,v.reducer);v.reducer;var w=v.actions.setParams,m=t(39704),P=t(39698),E=t(74035),D=t(26989),x=t(23620),C=t(85893);function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var k={showLines:!0,showTimeline:!1,topic:""};function S(e,r){var t;switch(r.type){case"INIT":return T(T({},e),{},{showLines:!0,showTimeline:!1,topic:""});case"SELECT_WORD":return T(T({},e),{},{showLines:!1,showTimeline:!0,topic:r.payload.topic});case"EXIT_TIMELINE":return T(T({},e),{},{showLines:!0,showTimeline:!1,topic:""});default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}var I=function(e){var r=e.props,t=r.words,n=r.genre,o=r.year,a=(0,c.useReducer)(S,k),i=a[0],u=a[1];return(0,C.jsxs)("div",{children:[(0,C.jsx)(x.Z,{data:t,onTopicClick:function(r){e.onTopicClick&&e.onTopicClick(r),u({type:"SELECT_WORD",payload:{topic:r}})},wordName:function(e){return e.p.split(",").join(" ")},wordCount:function(e){return e.n}}),(0,C.jsx)("br",{}),i.topic&&(0,C.jsx)(D.Z,{topic:i.topic,genre:n,year:o,data:e.topicData,onExit:function(e){u({type:"EXIT_TIMELINE"})}})]})};function N(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?N(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var R=function(e){var r=(0,m.I0)(),t=(0,m.v9)((function(e){return e["story-topics"]})),n=(e.max,e.min,e.words,e.genre),o=e.year,c=e.header,a=void 0===c||c;return(0,C.jsxs)("div",{style:{padding:"1rem",width:"100%"},children:[a&&(0,C.jsx)(E.RQ,{children:(0,C.jsxs)(P.Dx,{children:[n.toUpperCase()," ",o]})}),(0,C.jsx)(I,_(_({},e),{},{onTopicClick:function(t){e.onTopicClick&&e.onTopicClick(t),r(j({entity:"movie",topic:t}))},props:e,topicData:t}))]})},L=t(45688),G=t(14308),A=t(24463),M=t(86547),H=t(15121),U=t(98326),F=t(52871),Q=t(72642);function W(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function X(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?W(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Y={decade:null,genre:null};function q(e,r){var t;switch(r.type){case"INIT":return X(X({},e),{},{decade:r.payload.decade?r.payload.decade:e.decade,genre:r.payload.genre?r.payload.genre:e.genre});case"DECADE_CHANGE":return X(X({},e),{},{decade:r.payload});case"GENRE_CHANGE":return X(X({},e),{},{genre:r.payload});default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}function J(e){var r=(0,c.useState)(!1),t=(r[0],r[1],(0,c.useReducer)(q,Y)),n=t[0],o=t[1],a=e.params,i=e.onChange,u=(0,c.useMemo)((function(){return(0,U.a)().map((function(e){return{label:e,id:e}}))}),[]),p=(0,c.useMemo)((function(){return(0,F.J)().map((function(e){return{label:e,id:e}}))}),[]);console.log(a),(0,c.useEffect)((function(){o({type:"INIT",payload:{decade:u.find((function(e){return e.id==a.decade})),genre:p.find((function(e){return e.id==a.genre}))}})}),[a]);return n.decade&&n.genre?(0,C.jsx)(E.RQ,{children:(0,C.jsxs)(G.Z,{spacing:2,children:[(0,C.jsx)(H.Z,{id:"decade",disableClearable:!0,options:u,value:n.decade,onChange:function(e,r){return o({type:"DECADE_CHANGE",payload:r})},sx:{width:300},renderInput:function(e){return(0,C.jsx)(M.Z,X(X({},e),{},{label:"Decade"}))}}),(0,C.jsx)(H.Z,{id:"genre",disableClearable:!0,options:p,value:n.genre,onChange:function(e,r){return o({type:"GENRE_CHANGE",payload:r})},sx:{width:300},renderInput:function(e){return(0,C.jsx)(M.Z,X(X({},e),{},{label:"Genre"}))}}),(0,C.jsx)(E.RQ,{children:(0,C.jsx)(Q.Z,{variant:"outlined",onClick:function(){!function(){var e={decade:n.decade.id,genre:n.genre.id};i&&i(e)}()},children:"Filter"})})]})}):null}var V=t(50789);function z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?z(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var K=function(e){var r=e.data,t=e.loading,n=e.fetch,o=e.params,c=e.item;return(0,C.jsxs)(G.Z,{children:[(0,C.jsx)(A.Z,{onChange:function(e){n(B(B({},e),{},{page:1}))},filters:function(e){var r=e.onChange;return(0,C.jsx)(J,{onChange:r,params:o})}}),(0,C.jsx)(V.Z,{data:r,loading:t,item:c,page:e.params.page,params:o,onPageChange:function(e){return n(B(B({},o),{},{page:e}))}})]})};function $(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ee(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?$(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function re(e){return(0,C.jsx)(a.Z,{params:e,config:i,fetch:function(e){return h(e)},item:function(r){return(0,C.jsx)(R,ee(ee({type:e.type},r),{},{header:"banner"!=e.render}))},mainCol:function(e){return(0,C.jsx)(K,ee({},e))},customTitle:function(e){return"".concat(i.page.title,": ").concat(e.decade,"s ").concat(e.genre)},customDescription:function(e){return e.decade?(0,C.jsx)(L.C,{tag:e.decade}):""},customUrl:function(e){return i.page.url(e)}})}},98326:function(e,r,t){t.d(r,{a:function(){return n},V:function(){return o}});var n=function(){for(var e=[],r=1880;r<(new Date).getFullYear();r+=10){var t=r.toString().slice(0,3).padEnd(4,"0");e.push(t)}return e.reverse()},o=function(){for(var e=[],r=1880;r<(new Date).getFullYear();r++){var t=r.toString();e.push(t)}return e.reverse()}}}]);