(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{19257:function(e,r,t){"use strict";t.r(r),t.d(r,{QRY_DASHBOARD:function(){return _},default:function(){return S}});var n=t(4942),o=t(30168),i=(t(67294),t(64419)),c=t(7090),s=t(1211),a=t(71785),p=t(76085),u=t(92275),f=t(22310),l=t(65846),O=t(26447),b=t(80112),j=t(85893);var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.data,t=e.loading,n=(e.route,r||{}),o=n.total,i=n.profession,c=n.yearBirth,s=function(e,r,n){return(0,j.jsx)(u.Z,{xs:12,sm:6,md:6,lg:3,style:{paddingRight:"1rem"},children:(0,j.jsx)(f.Z,{loading:t,title:e,data:r?r.toString():r,icon:n})})},a=function(e,r,n){return(0,j.jsx)(u.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"},children:(0,j.jsx)(l.Z,{loading:t,title:e,data:r||{},ranges:n})})};return(0,j.jsxs)(O.Z,{spacing:2,children:[(0,j.jsx)(b.Dx,{children:"general"}),(0,j.jsx)(p.Z,{justifyContent:"center",fill:!0,children:s("people",o,"people")}),(0,j.jsx)(b.Dx,{children:"segments"}),(0,j.jsxs)(p.Z,{justifyContent:"center",fill:!0,children:[a("profession",i,[1e3,5e4,1e5]),a("birth year",c,[50,100,1e3,2500,5e3,6e3,7e3])]})]})};function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function h(e){return(0,j.jsx)(s.Z,{banner:(0,j.jsx)(a.Z,{hero:!0}),mainCol:(0,j.jsx)(d,g({},e))})}function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v,m=function(e){return(0,j.jsx)(c.Z,{xs:(0,j.jsx)(h,w({},e))})},x=t(54397),D=t(70846);function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _=(0,x.Ps)(v||(v=(0,o.Z)(["\n  query getDashboard \n{\n  dashboardPeople {\n    alive\n    profession\n    total\n    yearBirth\n  }\n}\n  "])));function S(e){var r=(0,D.a)(_),t=r.loading,n=r.error,o=r.data;o=o?o.dashboardPeople:{};var c=E(E({},e),{},{loading:t,error:n,data:o});return c.breadcrumbs=[{name:"people"}],(0,j.jsx)(i.Z,E(E({},c),{},{children:(0,j.jsx)(m,E({},c))}))}},71785:function(e,r,t){"use strict";var n=t(4942),o=(t(67294),t(96035)),i=t(515),c=t(85893);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){e.data,e.loading,e.hero;return(0,c.jsx)(o.Z,a(a({},e),{},{title:"People",description:"a dashboard with information from over 11M people, their professions and age distribution",footer:(0,c.jsx)(i.Z,{border:!0,href:"/people",children:" See more"})}))}},51677:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people",function(){return t(19257)}])}},function(e){e.O(0,[34,846,218,467,184,244,312,774,888,179],(function(){return r=51677,e(e.s=r);var r}));var r=e.O();_N_E=r}]);