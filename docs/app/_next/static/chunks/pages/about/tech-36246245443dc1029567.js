(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2239],{22419:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});t(67294);var n=t(4942),o=t(83939),i=t(85893);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var c=function(e){return(0,i.jsx)(o.Z,l(l({},e),{},{render:"page"}))},s=function(e){return(0,i.jsx)(c,{breadcrumbs:"/about/tech"})}},83939:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(4942),o=(t(67294),t(55619)),i={automata:{name:"about-tech"},page:{title:"What about the tech used?",description:"details about the code",url:"/about/tech"},banner:{showData:!1}},a=t(14308),l=t(36024),c=t(2348),s=t(34532),u=t(19888),f=t(85893);function d(e){var r=(0,l.Y)();return r=function(e){var r=[],t=["area","files","loc","node_modules","loc","project","loc"];return Object.keys(e).forEach((function(t){var n=e[t],o=Object.keys(n);n=n[o[o.length-1]];var i=[t,(0,u.Rx)(n.nm.files+n.own.files,"0,0"),(0,u.Rx)(n.nm.lines+n.own.lines,"0,0"),(0,u.Rx)(n.nm.files,"0,0"),(0,u.Rx)(n.nm.lines,"0,0"),(0,u.Rx)(n.own.files,"0,0"),(0,u.Rx)(n.own.lines,"0,0")];r.push(i)})),{rows:r,header:t}}(r),(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(s.Dx,{children:"Lines of Code"}),(0,f.jsx)(c.Z,{tableHeader:r.header,tableData:r.rows,showHeader:!0})]})}function b(e){return(0,f.jsx)(a.Z,{children:(0,f.jsx)(s.Dx,{children:"DevOps - CI/CD"})})}var p=function(e){return(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(d,{}),(0,f.jsx)(b,{})]})};function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){return(0,f.jsx)(o.Z,{config:i,type:e.render,mainCol:function(e){return(0,f.jsx)(p,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))},breadcrumbs:e.breadcrumbs})}},19888:function(e,r,t){"use strict";t.d(r,{Rx:function(){return a},hT:function(){return l},T5:function(){return c}});var n=t(92077),o=t.n(n),i=t(24417),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return o()(Number(e)).format(r)},l=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var r=Number(e);return Number.isInteger(r)?new Date(r):new Date(e)}catch(t){return null}},n=function(e,r){switch(r){case"ago":return formatDistance(e,new Date);case"DD/MM/YYYY":return formatter(e,"dd/MM/yyyy");case"YYYY":return e.getFullYear();default:return formatter(e,r)}};return n(e=t(e),r)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return i.default.toSentenceCase(e)}},2348:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var n=t(4942),o=(t(67294),t(29602)),i=t(41120),a=t(9573),l=t(38732),c=t(98102),s=t(89755),u=t(56011),f=t(3694),d=t(13874);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=function(e){return{warningTableHeader:{color:d.MA[0]},primaryTableHeader:{color:d.lr[0]},dangerTableHeader:{color:d.E7[0]},successTableHeader:{color:d.nq[0]},infoTableHeader:{color:d.bE[0]},roseTableHeader:{color:d.An[0]},grayTableHeader:{color:d.X_[0]},table:{marginBottom:"0",width:"100%",maxWidth:"100%",backgroundColor:"transparent",borderSpacing:"0",borderCollapse:"collapse"},tableHeadCell:p(p({color:"inherit"},d.Df),{},{"&, &$tableCell":{fontSize:"1em"}}),tableCell:p(p({},d.Df),{},{lineHeight:"1.42857143",padding:"12px 8px",verticalAlign:"middle",fontSize:"0.8125rem"}),tableResponsive:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},tableHeadRow:{height:"56px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"},tableBodyRow:{height:"48px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"}}},h=t(360),g=t(85893),O=(0,i.Z)(m),j=(0,o.ZP)(c.Z)((function(e){var r,t=e.theme;return r={},(0,n.Z)(r,"&.".concat(s.Z.head),{backgroundColor:t.palette.common.black,color:t.palette.common.white}),(0,n.Z)(r,"&.".concat(s.Z.body),{fontSize:"0.75rem"}),r})),v=(0,o.ZP)(f.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),w=function(e){var r=O(),t=e.tableHead,n=e.tableHeader,o=e.tableData,i=e.tableHeaderColor,c=e.showHeader,s=e.tableDataExclude;return t=t||n,!0===c&&!t||!o?"No Data":(0,g.jsx)("div",{className:r.tableResponsive,children:(0,g.jsxs)(a.Z,{className:r.table,children:[void 0!==t&&c?(0,g.jsx)(u.Z,{className:r[i+"TableHeader"],children:(0,g.jsx)(v,{className:r.tableHeadRow,children:t.map((function(e,t){return(0,g.jsx)(j,{className:r.tableCell+" "+r.tableHeadCell,children:e},t)}))})}):null,(0,g.jsx)(l.Z,{children:(0,h.Y)(o,(function(e,t){return(0,g.jsx)(v,{className:r.tableBodyRow,children:(0,h.Y)(e,(function(e,t){if(!s||!s.includes(t))return(0,g.jsx)(j,{className:r.tableCell,children:e},t)}))},t)}))})]})})};w.defaultProps={tableHeaderColor:"gray",showHeader:!0};var y=w},55619:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var n=t(4942),o=t(67294),i=(t(97937),t(11613)),a=t(50789),l=t(6960),c=(t(30842),t(93942)),s=t(73981),u=t(85893);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e){var r,t,n,f,b,p,m=(0,c.I0)(),h=e.config,g=e.loading,O=e.data,j=e.item,v=e.type,w=null!==(r=null===h||void 0===h||null===(t=h.banner)||void 0===t?void 0:t.showData)&&void 0!==r&&r,y=null!==(n=null===h||void 0===h||null===(f=h.page)||void 0===f?void 0:f.title)&&void 0!==n?n:"NO TITLE",P=null!==(b=null===h||void 0===h||null===(p=h.page)||void 0===p?void 0:p.description)&&void 0!==b?b:"NO DESCRIPTION",x=e.url?e.url:h.page.url;(0,o.useEffect)((function(){e.breadcrumbs&&m((0,s.Y)({breadcrumbs:e.breadcrumbs}))}),[]);var D=(0,u.jsx)(l.Z,{showData:w,loading:g,title:y,description:P,data:O,item:j,actions:[{url:x,title:"See all"}],hero:"banner"!==v});return(0,u.jsxs)(u.Fragment,{children:["banner"===v&&D,("grid"===v||"page"===v)&&(0,u.jsx)(i.Z,d(d({},e),{},{banner:D,mainCol:e.mainCol?e.mainCol(e):(0,u.jsx)(a.Z,{loading:g,page:e.params.page,data:O,onPageChange:e.onPageChange,item:j})}))]})}},34532:function(e,r,t){"use strict";t.d(r,{Dx:function(){return o}});t(67294);var n=t(29602),o=(t(85893),(0,n.ZP)("h2")({padding:"0",margin:"1rem 0 0.5rem 0",textTransform:"lowercase",fontSize:"2.5rem"}));(0,n.ZP)("h3")({marginTop:"1rem",marginBottom:"0rem"}),(0,n.ZP)("div")({fontSize:"0.9rem",lineHeight:"1rem",marginBottom:"0.5rem"})},36024:function(e,r,t){"use strict";t.d(r,{Y:function(){return o}});var n=JSON.parse('{"scripts":{"2021-10-16":{"nm":{"files":8765,"lines":4161088},"own":{"files":91,"lines":4461}},"2021-10-17":{"nm":{"files":9006,"lines":4189911},"own":{"files":94,"lines":4627}}},"client":{"2021-10-11":{"nm":{"files":41379,"lines":2060460},"own":{"files":530,"lines":33181}},"2021-10-16":{"nm":{"files":41835,"lines":2145232},"own":{"files":567,"lines":37693}},"2021-10-17":{"nm":{"files":41835,"lines":2145232},"own":{"files":575,"lines":37943}}},"server":{"2021-10-16":{"nm":{"files":10362,"lines":1789436},"own":{"files":75,"lines":3919}},"2021-10-17":{"nm":{"files":10362,"lines":1789436},"own":{"files":75,"lines":3920}}}}'),o=function(){return n}},55194:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/tech",function(){return t(22419)}])}},function(e){e.O(0,[6499,5685,2328,4467,3707,9774,2888,179],(function(){return r=55194,e(e.s=r);var r}));var r=e.O();_N_E=r}]);