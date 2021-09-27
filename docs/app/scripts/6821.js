"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[6821,2737],{99613:(e,a,t)=>{t.d(a,{Z:()=>u});var r=t(87462),o=t(45987),n=t(67294),l=(t(45697),t(86010)),i=t(14670),s=t(10462),d={variant:"body"},c="tbody",p=n.forwardRef((function(e,a){var t=e.classes,i=e.className,p=e.component,u=void 0===p?c:p,g=(0,o.Z)(e,["classes","className","component"]);return n.createElement(s.Z.Provider,{value:d},n.createElement(u,(0,r.Z)({className:(0,l.Z)(t.root,i),ref:a,role:u===c?null:"rowgroup"},g)))}));const u=(0,i.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(p)},88222:(e,a,t)=>{t.d(a,{Z:()=>g});var r=t(45987),o=t(87462),n=t(67294),l=(t(45697),t(86010)),i=t(14670),s=t(93871),d=t(59693),c=t(90106),p=t(10462),u=n.forwardRef((function(e,a){var t,i,d=e.align,u=void 0===d?"inherit":d,g=e.classes,m=e.className,h=e.component,f=e.padding,b=e.scope,v=e.size,y=e.sortDirection,Z=e.variant,x=(0,r.Z)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),w=n.useContext(c.Z),H=n.useContext(p.Z),C=H&&"head"===H.variant;h?(i=h,t=C?"columnheader":"cell"):i=C?"th":"td";var N=b;!N&&C&&(N="col");var k=f||(w&&w.padding?w.padding:"normal"),E=v||(w&&w.size?w.size:"medium"),T=Z||H&&H.variant,R=null;return y&&(R="asc"===y?"ascending":"descending"),n.createElement(i,(0,o.Z)({ref:a,className:(0,l.Z)(g.root,g[T],m,"inherit"!==u&&g["align".concat((0,s.Z)(u))],"normal"!==k&&g["padding".concat((0,s.Z)(k))],"medium"!==E&&g["size".concat((0,s.Z)(E))],"head"===T&&w&&w.stickyHeader&&g.stickyHeader),"aria-sort":R,role:t,scope:N},x))}));const g=(0,i.Z)((function(e){return{root:(0,o.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,d.$n)((0,d.Fq)(e.palette.divider,1),.88):(0,d._j)((0,d.Fq)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},83750:(e,a,t)=>{t.d(a,{Z:()=>u});var r=t(87462),o=t(45987),n=t(67294),l=(t(45697),t(86010)),i=t(14670),s=t(10462),d={variant:"head"},c="thead",p=n.forwardRef((function(e,a){var t=e.classes,i=e.className,p=e.component,u=void 0===p?c:p,g=(0,o.Z)(e,["classes","className","component"]);return n.createElement(s.Z.Provider,{value:d},n.createElement(u,(0,r.Z)({className:(0,l.Z)(t.root,i),ref:a,role:u===c?null:"rowgroup"},g)))}));const u=(0,i.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(p)},57394:(e,a,t)=>{t.d(a,{Z:()=>p});var r=t(87462),o=t(45987),n=t(67294),l=(t(45697),t(86010)),i=t(14670),s=t(10462),d=t(59693),c=n.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.component,c=void 0===d?"tr":d,p=e.hover,u=void 0!==p&&p,g=e.selected,m=void 0!==g&&g,h=(0,o.Z)(e,["classes","className","component","hover","selected"]),f=n.useContext(s.Z);return n.createElement(c,(0,r.Z)({ref:a,className:(0,l.Z)(t.root,i,f&&{head:t.head,footer:t.footer}[f.variant],u&&t.hover,m&&t.selected),role:"tr"===c?null:"row"},h))}));const p=(0,i.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,d.Fq)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(c)},82302:(e,a,t)=>{t.d(a,{Z:()=>p});var r=t(45987),o=t(87462),n=t(67294),l=(t(45697),t(86010)),i=t(14670),s=t(90106),d="table",c=n.forwardRef((function(e,a){var t=e.classes,i=e.className,c=e.component,p=void 0===c?d:c,u=e.padding,g=void 0===u?"normal":u,m=e.size,h=void 0===m?"medium":m,f=e.stickyHeader,b=void 0!==f&&f,v=(0,r.Z)(e,["classes","className","component","padding","size","stickyHeader"]),y=n.useMemo((function(){return{padding:g,size:h,stickyHeader:b}}),[g,h,b]);return n.createElement(s.Z.Provider,{value:y},n.createElement(p,(0,o.Z)({role:p===d?null:"table",ref:a,className:(0,l.Z)(t.root,i,b&&t.stickyHeader)},v)))}));const p=(0,i.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(c)},90106:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t(67294).createContext()},10462:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t(67294).createContext()},41120:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(87462),o=t(30115),n=t(99700);const l=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.Z)(e,(0,r.Z)({defaultTheme:n.Z},a))}},93871:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(60288);function o(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},72737:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});var r=t(67294);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}const n=e=>class extends r.Component{parseMapToData(e,a){if(!a)return null;var t=[];return Object.keys(a).forEach((e=>{var r=a[e].toString(),o=e.startsWith("_")?e.substring(1):e;t.push([o,r])})),{head:["label","value"],data:t=t.sort(((e,a)=>Number(e[1])>Number(a[1])?-1:1))}}renderChart(a){return r.createElement(e,o({},this.props,{tableHead:a?a.head:null,tableData:a?a.data:null}))}render(){const{data:e,ranges:a,title:t}=this.props;var o=null;return e&&(o=this.parseMapToData(t,e,a)),r.createElement("div",null,this.renderChart(o))}}},16821:(e,a,t)=>{t.r(a),t.d(a,{default:()=>y});var r=t(67294),o=t(45697),n=t.n(o),l=t(41120),i=t(82302),s=t(83750),d=t(57394),c=t(99613),p=t(88222),u=t(79088);const g=(0,l.Z)((e=>({warningTableHeader:{color:u.MA[0]},primaryTableHeader:{color:u.lr[0]},dangerTableHeader:{color:u.E7[0]},successTableHeader:{color:u.nq[0]},infoTableHeader:{color:u.bE[0]},roseTableHeader:{color:u.An[0]},grayTableHeader:{color:u.X_[0]},table:{marginBottom:"0",width:"100%",maxWidth:"100%",backgroundColor:"transparent",borderSpacing:"0",borderCollapse:"collapse"},tableHeadCell:{color:"inherit",...u.Df,"&, &$tableCell":{fontSize:"1em"}},tableCell:{...u.Df,lineHeight:"1.42857143",padding:"12px 8px",verticalAlign:"middle",fontSize:"0.8125rem"},tableResponsive:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},tableHeadRow:{height:"56px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"},tableBodyRow:{height:"48px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"}})));var m=function(e){const a=g(),{tableHead:t,tableData:o,tableHeaderColor:n,showHeader:l}=e;return t&&o?r.createElement("div",{className:a.tableResponsive},r.createElement(i.Z,{className:a.table},void 0!==t&&l?r.createElement(s.Z,{className:a[n+"TableHeader"]},r.createElement(d.Z,{className:a.tableHeadRow},t.map(((e,t)=>r.createElement(p.Z,{className:a.tableCell+" "+a.tableHeadCell,key:t},e))))):null,r.createElement(c.Z,null,o.map(((e,t)=>r.createElement(d.Z,{key:t,className:a.tableBodyRow},e.map(((e,t)=>r.createElement(p.Z,{className:a.tableCell,key:t},e))))))))):"No Data"};m.defaultProps={tableHeaderColor:"gray",showHeader:!0},m.propTypes={tableHeaderColor:n().oneOf(["warning","primary","danger","success","info","rose","gray"]),tableHead:n().arrayOf(n().string),tableData:n().arrayOf(n().arrayOf(n().string)),showHeader:n().bool};const h=m;var f=t(72737);function b(){return b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b.apply(this,arguments)}class v extends r.Component{render(){return r.createElement(h,b({},this.props,{showHeader:!1}))}}const y=(0,f.default)(v)},86010:(e,a,t)=>{function r(e){var a,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(o&&(o+=" "),o+=t);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function o(){for(var e,a,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(o&&(o+=" "),o+=a);return o}t.d(a,{Z:()=>o})}}]);