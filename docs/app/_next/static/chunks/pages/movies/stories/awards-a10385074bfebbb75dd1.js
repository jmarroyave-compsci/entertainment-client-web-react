(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5461],{99159:function(e,t,r){"use strict";r.r(t);var n=r(67294),i=r(93942),a=r(73981),o=r(11163),u=r(92168),c=r(17616),s=r(85893);t.default=function(e){var t=(0,i.I0)(),r=(0,o.useRouter)();return(0,n.useEffect)((function(){if(r.isReady){var e=r.query?r.query:{},n=e.year,i=e.page;i=i?parseInt(i):1,n=n||2017,t((0,a.Y)({breadcrumbs:[{name:"movies",url:"/movies"},{name:"stories",url:"/movies/stories"},{name:"awards"}]})),t((0,c.rQ)({renderer:"grid",year:n,entity:"movies",page:i}))}}),[]),(0,s.jsx)(u.Z,{})}},42199:function(e,t,r){"use strict";var n=r(15671),i=r(43144),a=r(60136),o=r(82963),u=r(61120),c=r(67294),s=r(65295),l=r(18515),f=r(42643),d=r(54962),p=r(49161),v=r(2658),h=r(85893);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var y=function(e){(0,a.Z)(r,e);var t=g(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.subtitle,n=e.text,i=e.image,a=e.imageHeight,o=e.noImage,u=e.actions,c=0;r=r||"";return o=!!o,i=i||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(l.Z,{title:(0,h.jsx)(v.Z,{noWrap:!0,children:t}),subheader:r}),!o&&(0,h.jsx)(d.Z,{style:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"},height:a||null,image:i}),n&&(0,h.jsx)(f.Z,{children:(0,h.jsx)(v.Z,{variant:"body2",color:"text.secondary",component:"div",children:n})}),(0,h.jsx)(p.Z,{children:u&&u.map((function(e){return(0,h.jsx)("div",{children:e},c++)}))})]})}}]),r}(c.Component);t.Z=y},27159:function(e,t,r){"use strict";var n=r(15671),i=r(43144),a=r(60136),o=r(82963),u=r(61120),c=r(67294),s=r(53651),l=r(65710),f=r(85893);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var p=function(e){(0,a.Z)(r,e);var t=d(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"getDate",value:function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(r){return null}}},{key:"toString",value:function(e,t,r){switch(r){case"ago":return(0,s.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yyyy");case"YYYY":return t.getFullYear();default:return(0,l.Z)(t,r)}}},{key:"render",value:function(){var e=this.props,t=e.lang,r=e.value,n=e.className,i=e.format;t=t||"en",i=i||"ago";var a=this.getDate(r);if(null==a)return(0,f.jsx)("span",{});var o=this.toString(t,a,i);return(0,f.jsx)("span",{className:n,children:o})}}]),r}(c.Component);t.Z=p},55619:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(4942),i=r(67294),a=(r(97937),r(11613)),o=r(50789),u=r(6960),c=(r(30842),r(93942)),s=r(73981),l=r(85893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){var t,r,n,f,p,v,h=(0,c.I0)(),g=e.config,y=e.loading,m=e.data,b=e.item,Z=e.type,j=null!==(t=null===g||void 0===g||null===(r=g.banner)||void 0===r?void 0:r.showData)&&void 0!==t&&t,O=null!==(n=null===g||void 0===g||null===(f=g.page)||void 0===f?void 0:f.title)&&void 0!==n?n:"NO TITLE",w=null!==(p=null===g||void 0===g||null===(v=g.page)||void 0===v?void 0:v.description)&&void 0!==p?p:"NO DESCRIPTION",x=e.url?e.url:g.page.url;(0,i.useEffect)((function(){e.breadcrumbs&&h((0,s.Y)({breadcrumbs:e.breadcrumbs}))}),[]);var D=(0,l.jsx)(u.Z,{showData:j,loading:y,title:O,description:w,data:m,item:b,actions:[{url:x,title:"See all"}],hero:"banner"!==Z});return(0,l.jsxs)(l.Fragment,{children:["banner"===Z&&D,("grid"===Z||"page"===Z)&&(0,l.jsx)(a.Z,d(d({},e),{},{banner:D,mainCol:e.mainCol?e.mainCol(e):(0,l.jsx)(o.Z,{loading:y,page:e.params.page,data:m,onPageChange:e.onPageChange,item:b})}))]})}},37e3:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/awards",function(){return r(99159)}])}},function(e){e.O(0,[6499,5685,5218,519,3707,2168,9774,2888,179],(function(){return t=37e3,e(e.s=t);var t}));var t=e.O();_N_E=t}]);