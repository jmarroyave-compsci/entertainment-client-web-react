(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{50201:function(e,t,r){"use strict";r.r(t),r.d(t,{QRY_DASHBOARD:function(){return T},default:function(){return V}});var n=r(4942),o=r(30168),c=r(67294),i=r(64419),s=r(7090),a=r(2637),l=r(5114),u=r(15671),f=r(43144),d=r(60136),p=r(82963),h=r(61120),g=r(76085),b=r(92275),y=r(22310),j=r(65846),O=r(26447),m=r(80112),v=r(85893);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,h.Z)(e);if(t){var o=(0,h.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,p.Z)(this,r)}}var Z=function(e){(0,d.Z)(r,e);var t=x(r);function r(){return(0,u.Z)(this,r),t.apply(this,arguments)}return(0,f.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.data,r=e.loading,n=t||{},o=n.total,c=n.awards,i=(n.classification,n.country),s=n.genre,a=n.type,l=n.rating,u=n.yearReleased,f=n.streamBy,d=function(e,t,n){return(0,v.jsx)(b.Z,{xs:12,sm:6,md:6,lg:4,style:{paddingRight:"1rem"},children:(0,v.jsx)(y.Z,{loading:r,title:e,data:t?t.toString():t,icon:n})})},p=function(e,t,n){return(0,v.jsx)(b.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"},children:(0,v.jsx)(j.Z,{loading:r,title:e,data:t||{},ranges:n})})};return(0,v.jsxs)(O.Z,{spacing:2,children:[(0,v.jsx)(m.Dx,{children:"general"}),(0,v.jsx)(g.Z,{justifyContent:"center",fill:!0,children:d("movies",o,"local_movies")}),(0,v.jsx)(m.Dx,{children:"segments"}),(0,v.jsxs)(g.Z,{justifyContent:"center",fill:!0,children:[p("by type",a,[25e3,5e4]),p("by genre",s,[1e3,25e3,5e4,75e3,1e4,25e4]),p("from",i,[1,5,10,50,100]),p("released",u,[1e4,25e3,5e4,1e5])]}),(0,v.jsx)(m.Dx,{children:"awards"}),(0,v.jsx)(g.Z,{justifyContent:"center",fill:!0,children:p("nominees",c,[])}),(0,v.jsx)(m.Dx,{children:"ratings"}),(0,v.jsx)(g.Z,{justifyContent:"center",fill:!0,children:d("imdb",l?l.imdb:null,"local_movies")}),(0,v.jsx)(m.Dx,{children:"stream"}),(0,v.jsx)(g.Z,{justifyContent:"center",fill:!0,children:d("netflix",f?f.netflix:null,"local_movies")})]})}}]),r}(c.Component);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e){return(0,v.jsx)(a.Z,{banner:(0,v.jsx)(l.Z,{hero:!0}),mainCol:(0,v.jsx)(Z,w({},e))})}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R,_=function(e){return(0,v.jsx)(s.Z,{xs:(0,v.jsx)(D,S({},e))})},E=r(54397),C=r(70846);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=(0,E.Ps)(R||(R=(0,o.Z)(["\n  query getDashboard \n{\n  dashboardTV {\n    awards\n    classification\n    country\n    genre\n    rating\n    streamBy\n    total\n    type\n    yearReleased\n  }\n}\n"]))),V=function(e){var t=(0,C.a)(T),r=t.loading,n=t.error,o=t.data;o=o?o.dashboardTV:{};var c=B(B({},e),{},{loading:r,error:n,data:o});return c.breadcrumbs=[{name:"tv-shows"}],(0,v.jsx)(i.Z,B(B({},c),{},{children:(0,v.jsx)(_,B({},c))}))}},2637:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(4942),o=(r(67294),r(26447)),c=r(60361),i=r(99601),s=r(76085),a=r(92275),l=r(73925),u=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){var t=e.banner,r=e.mainCol,n=e.rightCol,f=e.id;return(0,u.jsxs)(o.Z,{children:[t&&(0,u.jsx)("div",{style:{marginBottom:"1rem"},children:(0,u.jsx)(i.Z,{compact:!0,className:"section-0",children:t})}),(0,u.jsx)(c.Z,{children:(0,u.jsxs)(s.Z,{className:"page-module",fill:!0,children:[(0,u.jsx)(a.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"},children:r}),(0,u.jsxs)(a.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"},children:[(0,u.jsx)(l.Z,d(d({},e),{},{filter:f})),n]})]})})]})}},5114:function(e,t,r){"use strict";var n=r(4942),o=(r(67294),r(96035)),c=r(515),i=r(85893);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){e.data,e.loading,e.hero;return(0,i.jsx)(o.Z,a(a({},e),{},{title:"TV Shows",description:"a dashboard with information from over 8M tv shows, how they are segmented, awards and ratings",footer:(0,i.jsx)(c.Z,{border:!0,href:"/tv-shows",children:" See more"})}))}},96035:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});r(67294);var n=r(26447),o=(r(515),r(29602)),c=(0,o.ZP)("h2")({padding:"1rem 0",margin:0}),i=(0,o.ZP)("div")({fontSize:"1rem"}),s=(0,o.ZP)("div")({paddingTop:"2rem"}),a=r(85893),l=function(e){var t=e.title,r=e.description,o=e.carousel,l=e.footer,u=e.hero;return(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(c,{children:t}),r&&(0,a.jsx)(i,{children:r}),!u&&o,!u&&(0,a.jsx)(s,{children:l})]})}},99601:function(e,t,r){"use strict";var n=r(15671),o=r(43144),c=r(60136),i=r(82963),s=r(61120),a=r(67294),l=r(7090),u=r(33875),f=r(1267),d=r(90023),p=r(85893);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var g=function(e){(0,c.Z)(r,e);var t=h(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.cover,n=(e.padding,e.children),o=(e.hero,e.rounded),c=(e.compact,!0===r?"100vh":"inherit");return o=!0===o,(0,p.jsx)(l.Z,{xs:this.renderSection("xs",n,t,c,o),sm:this.renderSection("sm",n,t,c,o),md:this.renderSection("md",n,t,c,o)})}},{key:"renderSection",value:function(e,t,r,n,o){var c=this.getStyle(r),i={boxSizing:"border-box",width:"100%",height:n,padding:this.getPadding(e),borderRadius:o?"0.5rem 0.5rem 0 0":0,background:c.background,color:c.color};return(0,p.jsx)(f.Z,{from:"/core/ui/section",children:(0,p.jsx)("div",{className:"com-layout-section",children:(0,p.jsx)("div",{className:"".concat(r),style:i,children:t})})})}},{key:"getPadding",value:function(e){var t=this.props.compact,r={xs:{top:1.5,bottom:3,left:1.5,right:1.5},sm:{top:2,bottom:4,left:3,right:3},md:{top:3,bottom:2.5,left:2.5,right:2.5}}[e];return"".concat(r.top,"rem ").concat(r.right,"rem ").concat(t?r.top:r.bottom,"rem ").concat(r.left,"rem")}},{key:"getStyle",value:function(e){switch(e){case"section-0":return{background:"linear-gradient(60deg, ".concat(d.Z.palette.primary.dark," 0%, #000 150%)"),color:d.Z.palette.primary.contrastText};case"section-1":return{background:"linear-gradient(60deg, ${theme.palette.primary.light} 0%, rgba(85,85,85,1) 100%)",color:"black"};case"section-2":return{background:"linear-gradient(180deg, rgba(215,215,215,1) 0%, rgba(255,245,245,1) 125%)",color:"#444"};case"section-3":return{background:"linear-gradient(180deg, #fff 0%, rgba(215,215,215,1) 100%)",color:"#333"};default:return""!=e&&console.log(e),{background:"#f0f0f0",color:"black"}}}}]),r}(a.Component);t.Z=(0,u.Z)(g)},9343:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tv-shows",function(){return r(50201)}])}},function(e){e.O(0,[34,846,218,467,184,419,269,774,888,179],(function(){return t=9343,e(e.s=t);var t}));var t=e.O();_N_E=t}]);