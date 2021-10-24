(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2521],{25141:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});t(67294);var n=t(4942),o=t(64430),a=t(85893);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var i=function(e){return(0,a.jsx)(o.Z,c(c({},e),{},{render:"page"}))},u=function(e){return(0,a.jsx)(i,{breadcrumbs:"/about"})}},19888:function(e,r,t){"use strict";t.d(r,{Rx:function(){return l},hT:function(){return c},T5:function(){return i}});var n=t(92077),o=t.n(n),a=t(24417),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return o()(Number(e)).format(r)},c=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var r=Number(e);return Number.isInteger(r)?new Date(r):new Date(e)}catch(t){return null}},n=function(e,r){switch(r){case"ago":return formatDistance(e,new Date);case"DD/MM/YYYY":return formatter(e,"dd/MM/yyyy");case"YYYY":return e.getFullYear();default:return formatter(e,r)}};return n(e=t(e),r)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a.default.toSentenceCase(e)}},2348:function(e,r,t){"use strict";t.d(r,{Z:function(){return j}});var n=t(4942),o=(t(67294),t(29602)),a=t(41120),l=t(9573),c=t(38732),i=t(98102),u=t(89755),s=t(56011),d=t(3694),f=t(13874);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=function(e){return{warningTableHeader:{color:f.MA[0]},primaryTableHeader:{color:f.lr[0]},dangerTableHeader:{color:f.E7[0]},successTableHeader:{color:f.nq[0]},infoTableHeader:{color:f.bE[0]},roseTableHeader:{color:f.An[0]},grayTableHeader:{color:f.X_[0]},table:{marginBottom:"0",width:"100%",maxWidth:"100%",backgroundColor:"transparent",borderSpacing:"0",borderCollapse:"collapse"},tableHeadCell:p(p({color:"inherit"},f.Df),{},{"&, &$tableCell":{fontSize:"1em"}}),tableCell:p(p({},f.Df),{},{lineHeight:"1.42857143",padding:"12px 8px",verticalAlign:"middle",fontSize:"0.8125rem"}),tableResponsive:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},tableHeadRow:{height:"56px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"},tableBodyRow:{height:"48px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"}}},h=t(360),g=t(85893),v=(0,a.Z)(m),w=(0,o.ZP)(i.Z)((function(e){var r,t=e.theme;return r={},(0,n.Z)(r,"&.".concat(u.Z.head),{backgroundColor:t.palette.common.black,color:t.palette.common.white}),(0,n.Z)(r,"&.".concat(u.Z.body),{fontSize:"0.75rem"}),r})),y=(0,o.ZP)(d.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),O=function(e){var r=v(),t=e.tableHead,n=e.tableHeader,o=e.tableData,a=e.tableHeaderColor,i=e.showHeader,u=e.tableDataExclude;return t=t||n,!0===i&&!t||!o?"No Data":(0,g.jsx)("div",{className:r.tableResponsive,children:(0,g.jsxs)(l.Z,{className:r.table,children:[void 0!==t&&i?(0,g.jsx)(s.Z,{className:r[a+"TableHeader"],children:(0,g.jsx)(y,{className:r.tableHeadRow,children:t.map((function(e,t){return(0,g.jsx)(w,{className:r.tableCell+" "+r.tableHeadCell,children:e},t)}))})}):null,(0,g.jsx)(c.Z,{children:(0,h.Y)(o,(function(e,t){return(0,g.jsx)(y,{className:r.tableBodyRow,children:(0,h.Y)(e,(function(e,t){if(!u||!u.includes(t))return(0,g.jsx)(w,{className:r.tableCell,children:e},t)}))},t)}))})]})})};O.defaultProps={tableHeaderColor:"gray",showHeader:!0};var j=O},34532:function(e,r,t){"use strict";t.d(r,{Dx:function(){return o}});t(67294);var n=t(29602),o=(t(85893),(0,n.ZP)("h2")({padding:"0",margin:"1rem 0 0.5rem 0",textTransform:"lowercase",fontSize:"2.5rem"}));(0,n.ZP)("h3")({marginTop:"1rem",marginBottom:"0rem"}),(0,n.ZP)("div")({fontSize:"0.9rem",lineHeight:"1rem",marginBottom:"0.5rem"})},52088:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(25141)}])}},function(e){e.O(0,[6499,5685,519,2328,4467,922,3707,816,4430,9774,2888,179],(function(){return r=52088,e(e.s=r);var r}));var r=e.O();_N_E=r}]);