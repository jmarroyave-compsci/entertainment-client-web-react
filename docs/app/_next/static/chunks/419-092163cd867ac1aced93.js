"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{4419:function(e,r,n){n.d(r,{Z:function(){return ye}});var t=n(4942),o=n(5861),i=n(168),c=n(7757),s=n.n(c),a=n(7294),u=n(1163),l=n(885),f=n(1267),p=(n(4184),n(9983)),h=n(6085),d=n(2275),g=n(2041),m=n(8358),x=n(2863),y=n(7812),v=n(9875),j=n(5517),b=n(998),w=n(6869),Z=n(5757),O=n(6837),k=n(1508),P=n(5893);var S=function(e){var r=e.nav,n=(e.footer,e.header,e.toggleDrawer),t=e.open,o=function(e,r){e=(e=e.options)?e.filter((function(e){return e.showInDrawer?e:null})):[];for(var n=0,t=[],o=0;o<e.length;o++){var i=e[o];if(i.separator)t.push((0,P.jsx)(j.Z,{},n++));else if(i.group)t.push(r?(0,P.jsx)(O.Z,{children:i.group.toUpperCase()},n++):(0,P.jsx)(j.Z,{},n++));else if(!1!==i.onMini||r){var c=r&&i.nameOpen?i.nameOpen:i.name,s=(0,P.jsx)(p.Z,{to:i.link?i.link:i.route,children:(0,P.jsxs)(b.Z,{button:!0,children:[i.icon&&(0,P.jsx)(w.Z,{children:(0,P.jsx)(x.Z,{alt:c,children:i.icon})}),(0,P.jsx)(Z.Z,{inset:!i.icon,primary:c})]})},n++);t.push(s)}}return t}(r,t);return(0,P.jsx)(g.ZP,{anchor:"left",open:t,onClose:n,children:(0,P.jsxs)(k.Z,{sx:{width:"".concat(260,"px")},role:"presentation",children:[(0,P.jsx)(m.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:(0,P.jsx)(y.Z,{onClick:n,children:(0,P.jsx)(v.Z,{})})}),o]})})},D=n(5258),I=n(8884),R=n(515),E=n(2982),C=n(2848),T=n(7338),N=n(9062);function A(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function B(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?A(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function M(e,r){return L.apply(this,arguments)}function L(){return(L=(0,o.Z)(s().mark((function e(r,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&!(r.length<3)){e.next=2;break}return e.abrupt("return",[]);case 2:if(!n){e.next=6;break}return e.next=5,n(r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){var r=e.onSearchQuery,n=e.onSearchSuggestions,t=a.useState(!1),i=(0,l.Z)(t,2),c=i[0],u=i[1],f=a.useState([]),p=(0,l.Z)(f,2),h=p[0],d=p[1],g=a.useState(""),m=(0,l.Z)(g,2),x=m[0],y=m[1],v=a.useState(null),j=(0,l.Z)(v,2),b=j[0],w=j[1],Z=c&&0===h.length;return a.useEffect((function(){var e=!0;return(0,o.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,M(x,n);case 2:t=r.sent,e&&d((0,E.Z)(t));case 4:case"end":return r.stop()}}),r)})))(),function(){e=!1}}),[Z,c,x,n]),(0,P.jsx)(T.Z,{freeSolo:!0,clearOnEscape:!0,sx:{flexGrow:1},open:c,onOpen:function(){u(!0)},onClose:function(){u(!1)},isOptionEqualToValue:function(e,r){return e===r},getOptionLabel:function(e){return e},options:h,loading:Z,value:b,onChange:function(e,n){var t,o;d(n?[n].concat((0,E.Z)(h)):h),w(n),o=r,!(t=n)||t.length<3||o&&o(t)},onInputChange:function(e,r){y(r)},renderInput:function(e){return(0,P.jsx)(C.Z,B(B({},e),{},{label:"Search",InputProps:B(B({},e.InputProps),{},{type:"searching",endAdornment:(0,P.jsxs)(a.Fragment,{children:[Z?(0,P.jsx)(N.Z,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}var q=n(9956);function F(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function z(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?F(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var H=function(e){var r=e.onSearchQuery,n=e.onSearchSuggestions,t=(e.classes,e.nav),o=e.title,i=(e.drawerOpen,e.notifications,e.drawer,e.search),c=(e.loading,e.toggleDrawer),s=e.open;return t&&t.routes&&t.routes.filter((function(e){return e.showInMenu?e:null})),t&&t.filter((function(e){return e.showInMenu?e:null})),i=!0===i,o=o||"PAGE TITLE",c?(0,P.jsx)(D.Z,{position:"fixed",open:s,children:(0,P.jsxs)(m.Z,{sx:{pr:"24px"},children:[(0,P.jsx)(y.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:c,sx:z({marginRight:"36px"},s&&{display:"none"}),children:(0,P.jsx)(I.Z,{})}),i&&(0,P.jsx)(q.Z,{sx:{flexGrow:1,padding:"0.5rem 0.75rem 0.5rem 1rem"},children:(0,P.jsx)(_,{onSearchQuery:r,onSearchSuggestions:n})})]})}):(0,P.jsx)("div",{})},Q=(n(2369),n(8920));var U=function(e){var r,n=e.error,t=(0,Q.Z)();return"ServerError"===(null===n||void 0===n||null===(r=n.networkError)||void 0===r?void 0:r.name)||null===n||void 0===n||n.message,(0,P.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexOrientation:"column",zIndex:9999,width:"100%",height:"100vh",backgroundColor:t.palette.primary.main,color:t.palette.primary.constrastText},children:(0,P.jsxs)("div",{children:[(0,P.jsx)("div",{style:{textAlign:"center",fontSize:"0.5rem",textTransform:"lowercase",paddingBottom:"1rem",letterSpacing:"0.3rem"},children:"hello - hola - bonjour"}),(0,P.jsx)("div",{children:(0,P.jsx)("div",{style:{fontSize:"0.8rem",textTransform:"uppercase"},children:n?n.toString():""})})]})})},G=n(770),$=n(2318);function V(e){var r=e.data,n=e.style;return delete(r=[{url:"/",name:"home"}].concat(r=r||[]))[r.length-1].url,(0,P.jsx)(G.Z,{maxItems:4,"aria-label":"breadcrumb",style:n,children:r.map((function(e,r){return e.url?(0,P.jsx)(R.Z,{underline:"hover",color:"inherit",href:e.url,style:{padding:"0.5rem 0.25rem"},children:e.name},r):(0,P.jsx)($.Z,{color:"primary","aria-current":"page",style:{padding:"0.5rem 0.25rem"},children:e.name},r)}))})}var W=function(e){var r=a.useState(!1),n=(0,l.Z)(r,2),t=n[0],o=n[1],i=function(){o(!t)},c=(e.pageTitle,e.title),s=e.breadcrumbs,u=e.error,p=e.onSearchQuery,h=e.onSearchSuggestions,d=e.nav,g=e.children,m=(e.notifications,e.search),x=(e.loading,e.footer);return d=d||{},!!u?(0,P.jsx)(U,{error:u}):(0,P.jsxs)("div",{children:[(0,P.jsxs)(q.Z,{sx:{display:"flex"},style:{padding:0,margin:0},children:[(0,P.jsx)(H,{title:c,toggleDrawer:i,open:t,onSearchQuery:p,onSearchSuggestions:h,search:m}),(0,P.jsx)(S,{toggleDrawer:i,open:t,nav:d}),(0,P.jsxs)(q.Z,{sx:{flexGrow:1,overflow:"auto"},style:{padding:0,margin:0},children:[(0,P.jsx)("div",{style:{paddingTop:"4.5rem"}}),(0,P.jsx)(V,{data:s,style:{padding:0,marginBottom:"0.5rem",marginLeft:"1rem"}}),(0,P.jsx)("div",{style:{padding:0,margin:0},children:(0,P.jsx)(f.Z,{from:"/core/ui/app/children",children:g})})]})]}),(0,P.jsx)(q.Z,{component:"footer",style:{margin:0,padding:0},children:x})]})},K=n(5671),X=n(3144);new(function(){function e(){(0,K.Z)(this,e)}return(0,X.Z)(e,[{key:"getLinkToView",value:function(e,r){return"week/".concat(r)}},{key:"getLinkToTopic",value:function(e,r){return"/topic/".concat(encodeURIComponent(r))}},{key:"getLinkToTrend",value:function(e){if(!e)return"/";var r=e?e.id:"",n=e?e.ini.substr(0,10):"";return"/".concat(r,"/").concat(n)}}]),e}()),n(8420);var Y=function(e){var r=e.links,n=0;return(0,P.jsx)(h.Z,{spacing:1,className:"mod-footer",children:r.map((function(e){return(0,P.jsxs)(d.Z,{xs:12,sm:6,md:4,children:[(0,P.jsx)("h3",{className:"section",children:e.name}),(0,P.jsx)(h.Z,{spacing:1,children:e.items.map((function(e){return(0,P.jsx)(d.Z,{xs:6,sm:12,children:(0,P.jsx)(p.Z,{border:!1,className:"link",to:e.link,children:e.name})},n++)}))})]},n++)}))})};var J=function(e){var r=e.size,n=e.links;switch(r){case"sm":r="sm";break;default:r="lg"}return(0,P.jsx)("div",{className:"mod-social-icons ".concat(r," layout-align-center-center layout-column flex"),children:n.map((function(e,n){return e.enable&&(0,P.jsx)("a",{href:e.url,children:(0,P.jsxs)("span",{className:"fa-stack fa-".concat(r),children:[(0,P.jsx)("i",{className:"fa fa-square-o fa-stack-2x"}),(0,P.jsx)("i",{className:"fa fa-".concat(e.icon," fa-stack-1x"),style:{color:e.color}})]})},n)}))})};var ee=function(e){var r=e.version;return(0,P.jsxs)("span",{children:["v.",r]})},re=n(7090),ne=function(e){var r=e.socialNetworksLinks,n=e.footerLinks,t=e.version,o=(0,Q.Z)(),i=function(e,r,n,t){return(0,P.jsx)("div",{children:(0,P.jsxs)(h.Z,{spacing:0,fill:!0,className:"footer",style:{backgroundColor:"".concat(o.palette.primary.main),color:"".concat(o.palette.primary.contrastText),padding:"1rem"},children:[(0,P.jsx)(d.Z,{fill:!0,children:(0,P.jsx)(Y,{links:r})}),(0,P.jsx)(d.Z,{fill:!0,center:!0,style:{paddingTop:"1rem"},children:(0,P.jsx)(J,{links:e})}),(0,P.jsx)(d.Z,{fill:!0,center:!0,children:(0,P.jsx)(ee,{version:n})})]})})};return(0,P.jsx)(re.Z,{xs:i(r,n,t),sm:i(r,n,t),md:i(r,n,t)})};var te=function(e){var r=e.params;return(0,P.jsx)(ne,{version:r.version,footerLinks:r.links,socialNetworksLinks:r.socialNetworks})},oe=n(136),ie=n(2963),ce=n(1120);function se(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,ce.Z)(e);if(r){var o=(0,ce.Z)(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return(0,ie.Z)(this,n)}}a.Component;var ae=n(4397),ue=n(6075),le=n(4155),fe=function e(){(0,K.Z)(this,e)};fe.search="true"==le.env.__FEATURE_SEARCH;n(4518);var pe,he,de=new function e(){(0,K.Z)(this,e),this.drawer={show:!1},this.options=[{showInMenu:!0,showInDrawer:!0,name:"Home",icon:"home",route:"/"},{showInMenu:!0,showInDrawer:!0,separator:!0},{showInMenu:!0,showInDrawer:!0,name:"Movies",icon:"movie",route:"/movies"},{showInMenu:!1,showInDrawer:!1,name:"Movie",icon:"movie",route:"/movie/:id/:name"},{showInMenu:!0,showInDrawer:!0,name:"Podcasts",icon:"podcasts",route:"/podcasts"},{showInMenu:!1,showInDrawer:!1,name:"Podcast",icon:"podcast",route:"/podcast/:id/:name"},{showInMenu:!0,showInDrawer:!0,separator:!0},{showInMenu:!0,showInDrawer:!0,name:"People",icon:"people",route:"/people"},{showInMenu:!1,showInDrawer:!1,name:"Person",icon:"person",route:"/person/:id/:name"},{showInMenu:!1,showInDrawer:!1,name:"Awards",route:"/stories/awards/:entity?/:year?/:page?"},{showInMenu:!1,showInDrawer:!1,name:"Stories",route:"/stories"},{showInMenu:!1,showInDrawer:!1,name:"PodcastMusic",route:"/podcasts/stories/music/:page?"},{showInMenu:!0,showInDrawer:!0,separator:!0},{showInMenu:!0,showInDrawer:!0,name:"About",icon:"info",route:"/about"},{showInMenu:!1,showInDrawer:!1,name:"Search",icon:"search",route:"/search/:qry/:page?"}]};function ge(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function me(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ge(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var xe=(0,ae.Ps)(pe||(pe=(0,i.Z)(["\nquery getSuggestions($qry:String) {\n  searchSuggestions(qry: $qry){\n    suggestions\n  }\n}\n"]))),ye=((0,ae.Ps)(he||(he=(0,i.Z)(["\nquery getSuggestions($qry:String) {\n  searchSuggestions(qry: $qry){\n    suggestions\n  }\n}\n"]))),function(e){var r=(0,ue.x)(),n=(0,u.useRouter)(),t=function(){var e=(0,o.Z)(s().mark((function e(n){var t,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=n.toLowerCase(),e.next=3,r.query({query:xe,fetchPolicy:"cache-first",variables:{qry:n}});case 3:return t=e.sent,t.loading,t.error,o=t.data,e.abrupt("return",o.searchSuggestions.suggestions);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=e.params,c=e.children;return(0,P.jsx)(W,me(me({notifications:!1,title:i.page.title,pageTitle:i.page.pageTitle,footer:(0,P.jsx)(te,{params:i.footer}),onSearchQuery:function(e){e=e.toLowerCase(),n.push("/search/".concat(encodeURIComponent(e)))},onSearchSuggestions:t,search:!0,nav:de},e),{},{children:c}))})},1267:function(e,r,n){var t=n(5671),o=n(3144),i=n(136),c=n(2963),s=n(1120),a=n(7294),u=n(9602),l=n(5893);function f(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,s.Z)(e);if(r){var o=(0,s.Z)(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return(0,c.Z)(this,n)}}var p=(0,u.ZP)("div")({backgroundColor:"red",color:"white",border:"1px solid #A00",margin:"1rem",padding:"1rem"}),h=(0,u.ZP)("h3")({margin:0}),d=(0,u.ZP)("div")({fontSize:"0.75rem",textTransform:"uppercase"}),g=(0,u.ZP)("div")({fontSize:"0.75rem",fontFamily:"monospace",backgroundColor:"white",padding:"0.5rem",color:"black"}),m=function(e){(0,i.Z)(n,e);var r=f(n);function n(e){var o;return(0,t.Z)(this,n),(o=r.call(this,e)).state={hasError:!1,errors:[]},o}return(0,o.Z)(n,[{key:"componentDidCatch",value:function(e,r){this.state.errors.push(e),this.setState({hasError:!0,errors:this.state.errors}),window.__api&&window.__api.setError(errors.toString())}},{key:"render",value:function(){var e=this.state,r=e.errors,n=e.hasError,t=this.props,o=t.from,i=t.children,c=o||"-";return n?(0,l.jsxs)(p,{children:[(0,l.jsx)(h,{children:"Error in components"}),(0,l.jsx)(d,{children:c}),(0,l.jsx)("hr",{}),(0,l.jsx)(g,{children:r.map((function(e,r){return(0,l.jsx)("div",{style:{fontSize:"0.8em"},children:e.toString()},r++)}))})]}):i}}]),n}(a.Component);r.Z=m},3875:function(e,r,n){n.d(r,{Z:function(){return m}});var t=n(4942),o=n(5671),i=n(3144),c=n(136),s=n(2963),a=n(1120),u=n(7294),l=n(1267),f=n(5893);function p(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,a.Z)(e);if(r){var o=(0,a.Z)(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return(0,s.Z)(this,n)}}u.Component;function h(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function g(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,a.Z)(e);if(r){var o=(0,a.Z)(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return(0,s.Z)(this,n)}}var m=function(e){return function(r){(0,c.Z)(t,r);var n=g(t);function t(){return(0,o.Z)(this,t),n.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var r="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};n.width&&n.width,n.height&&n.height;return(0,f.jsx)(l.Z,{from:r,style:{width:"100%"},children:(0,f.jsx)(e,d({},this.props))})}}]),t}(u.Component)}},9750:function(e,r){r.Z={links_disabled:!1}},6085:function(e,r,n){var t=n(5671),o=n(3144),i=n(136),c=n(2963),s=n(1120),a=n(7294),u=n(3875),l=n(1749),f=n(5893);function p(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,s.Z)(e);if(r){var o=(0,s.Z)(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return(0,c.Z)(this,n)}}var h=function(e){(0,i.Z)(n,e);var r=p(n);function n(){return(0,t.Z)(this,n),r.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){var e=this.props,r=e.direction,n=e.spacing,t=e.className,o=e.justify,i=e.alignItems,c=e.style;n=n||0;return c=c||{},e.flex&&(c.display="flex"),(0,f.jsx)(l.Z,{container:!0,direction:r,justifyContent:o,alignItems:i,className:t,spacing:n,style:c,children:this.props.children})}}]),n}(a.Component);r.Z=(0,u.Z)(h)},2275:function(e,r,n){var t=n(4942),o=n(5671),i=n(3144),c=n(136),s=n(2963),a=n(1120),u=n(7294),l=n(3875),f=n(1749),p=n(5893);function h(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,a.Z)(e);if(r){var o=(0,a.Z)(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return(0,s.Z)(this,n)}}var g=function(e){(0,c.Z)(n,e);var r=d(n);function n(){return(0,o.Z)(this,n),r.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,r=e.visible,n=e.className,o=e.xs,i=e.sm,c=e.md,s=e.style,a=e.fill,u=e.flex,l=e.center;r=r||!0;var d=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},s);return(d=d||{textAlign:"inherit"}).textAlign=l?"center":d.textAlign,a&&(d.width="100%"),u&&(d.flex=1),r&&(0,p.jsx)(f.Z,{className:n,item:!0,xs:o,sm:i,md:c,style:d,children:this.props.children})}}]),n}(u.Component);r.Z=(0,l.Z)(g)},7090:function(e,r,n){var t=n(5671),o=n(3144),i=n(136),c=n(2963),s=n(1120),a=n(7294),u=n(2613),l=n(3875),f=n(5893);function p(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,s.Z)(e);if(r){var o=(0,s.Z)(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return(0,c.Z)(this,n)}}var h=function(e){(0,i.Z)(n,e);var r=p(n);function n(){return(0,t.Z)(this,n),r.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){var e=this.props,r=e.xs,n=e.sm,t=e.md,o=e.lg,i=e.xl;return r=r||null,n=n||r,t=t||n,o=o||t,i=i||o,(0,f.jsxs)("div",{style:{width:"100%"},children:[(0,f.jsx)(u.Z,{only:["sm","md","lg","xl"],children:r}),(0,f.jsx)(u.Z,{only:["xs","md","lg","xl"],children:n}),(0,f.jsx)(u.Z,{only:["xs","sm","lg","xl"],children:t}),(0,f.jsx)(u.Z,{only:["xs","sm","md","xl"],children:o}),(0,f.jsx)(u.Z,{only:["xs","sm","md","lg"],children:i})]})}}]),n}(a.Component);r.Z=(0,l.Z)(h)},9983:function(e,r,n){n(7294);var t=n(1664),o=n(9750),i=n(5893);r.Z=function(e){var r=e.children,n=e.className,c=e.to,s=e.href,a=e.style,u=e.external;if(r=(c=(c=c||s)||"http://localhost")?r:"NO LINK DEFINED",a=a||{},c&&"string"!==typeof c)return"INVALID URL";var l=!((u=!0===u)||c&&0===c.indexOf("http")),f=l?"_self":"_blank";return 0==(0===c.indexOf("#"))&&1==l&&0==o.Z.links_disabled?(0,i.jsx)(t.default,{className:n,href:c,style:a,children:r}):(0,i.jsx)("a",{className:n,href:c,style:a,target:f,children:r})}},515:function(e,r,n){var t=n(5671),o=n(3144),i=n(136),c=n(2963),s=n(1120),a=n(7294),u=n(9983),l=(n(9750),n(5893));function f(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,s.Z)(e);if(r){var o=(0,s.Z)(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return(0,c.Z)(this,n)}}var p=function(e){(0,i.Z)(n,e);var r=f(n);function n(){return(0,t.Z)(this,n),r.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){var e=this.props,r=e.children,n=e.className,t=e.to,o=e.href,i=e.border,c=e.style,s=e.external;return r=(t=(t=t||o)||"http://localhost")?r:"NO LINK DEFINED",i=!0===i||"true"===i?"text-link":"",(c=c||{}).padding=c.padding?c.padding:"0.5rem 0.75rem",n="".concat(i," ").concat(n||""),s=!0===s,(0,l.jsx)(u.Z,{className:n,to:t,style:c,external:s,children:r})}}]),n}(a.Component);r.Z=p},2369:function(e,r,n){n.d(r,{FT:function(){return x},yF:function(){return I},E7:function(){return h},Df:function(){return j},X_:function(){return m},oo:function(){return v},Yi:function(){return R},bE:function(){return d},hF:function(){return E},lr:function(){return u},Bp:function(){return C},An:function(){return g},aT:function(){return D},nq:function(){return p},rt:function(){return S},MA:function(){return f},zQ:function(){return y}});var t,o=n(4942),i=(n(7294),n(8225)),c=n(23);function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var u=[(t=c.Z.palette.primary).main,t.light,t.dark,t.contrastText],l=[(t=c.Z.palette.secondary).main,t.light,t.dark,t.contrastText],f=[(t=c.Z.palette.warning).main,t.light,t.dark,t.contrastText],p=[(t=c.Z.palette.success).main,t.light,t.dark,t.contrastText],h=[(t=c.Z.palette.error).main,t.light,t.dark,t.contrastText],d=[(t=c.Z.palette.info).main,t.light,t.dark,t.contrastText],g=["#e91e63","#ec407a","#d81b60","#eb3573"],m=["#999","#777","#3C4858","#AAAAAA","#D2D2D2","#DDD","#b4b4b4","#555555","#333","#a9afbb","#eee","#e7e7e7"],x="#000",y="#FFF",v=((0,i.Z)({palette:{primary:{main:u[0]},secondary:{main:l[0]}}}),function(e){e=(e+="").replace("#","");if(!/[0-9A-Fa-f]/g.test(e)||3!==e.length&&6!==e.length)throw new Error("input is not a valid hex color.");if(3===e.length){var r=e[0],n=e[1],t=e[2];e=r+r+n+n+t+t}var o=(e=e.toUpperCase())[0]+e[1],i=e[2]+e[3],c=e[4]+e[5];return parseInt(o,16)+", "+parseInt(i,16)+", "+parseInt(c,16)}),j={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"},b=(v(x),v(x),v(x),{boxShadow:"0 4px 20px 0 rgba("+v(x)+",.14), 0 7px 10px -5px rgba("+v(u[0])+",.4)"}),w={boxShadow:"0 4px 20px 0 rgba("+v(x)+",.14), 0 7px 10px -5px rgba("+v(d[0])+",.4)"},Z={boxShadow:"0 4px 20px 0 rgba("+v(x)+",.14), 0 7px 10px -5px rgba("+v(p[0])+",.4)"},O={boxShadow:"0 4px 20px 0 rgba("+v(x)+",.14), 0 7px 10px -5px rgba("+v(f[0])+",.4)"},k={boxShadow:"0 4px 20px 0 rgba("+v(x)+",.14), 0 7px 10px -5px rgba("+v(h[0])+",.4)"},P={boxShadow:"0 4px 20px 0 rgba("+v(x)+",.14), 0 7px 10px -5px rgba("+v(g[0])+",.4)"},S=a({background:"linear-gradient(60deg, "+f[1]+", "+f[2]+")"},O),D=a({background:"linear-gradient(60deg, "+p[1]+", "+p[2]+")"},Z),I=a({background:"linear-gradient(60deg, "+h[1]+", "+h[2]+")"},k),R=a({background:"linear-gradient(60deg, "+d[1]+", "+d[2]+")"},w),E=a({background:"linear-gradient(60deg, "+u[1]+", "+u[2]+")"},b),C=a({background:"linear-gradient(60deg, "+g[1]+", "+g[2]+")"},P),T=(a({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid "+m[10],height:"auto"},j),v(x),v(x),v(x),v(x),v(x),{color:m[2],textDecoration:"none",fontWeight:"300",marginTop:"30px",marginBottom:"25px",minHeight:"32px",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif","& small":{color:m[1],fontWeight:"400",lineHeight:"1"}});a(a({},T),{},{marginTop:"0",marginBottom:"3px",minHeight:"auto","& a":a(a({},T),{},{marginTop:".625rem",marginBottom:"0.75rem",minHeight:"auto"})})}}]);