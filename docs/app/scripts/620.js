"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[620],{282:(e,a,t)=>{t.d(a,{Z:()=>v});var o=t(45987),r=t(87462),l=t(67294),n=(t(45697),t(86010)),i=t(14670),c=t(59693),d=t(54720),s=t(93871),p=l.forwardRef((function(e,a){var t=e.children,i=e.classes,c=e.className,p=e.color,v=void 0===p?"default":p,h=e.component,m=void 0===h?"button":h,u=e.disabled,g=void 0!==u&&u,f=e.disableElevation,Z=void 0!==f&&f,b=e.disableFocusRipple,y=void 0!==b&&b,z=e.endIcon,x=e.focusVisibleClassName,S=e.fullWidth,C=void 0!==S&&S,M=e.size,H=void 0===M?"medium":M,E=e.startIcon,k=e.type,V=void 0===k?"button":k,w=e.variant,L=void 0===w?"text":w,R=(0,o.Z)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),N=E&&l.createElement("span",{className:(0,n.Z)(i.startIcon,i["iconSize".concat((0,s.Z)(H))])},E),T=z&&l.createElement("span",{className:(0,n.Z)(i.endIcon,i["iconSize".concat((0,s.Z)(H))])},z);return l.createElement(d.Z,(0,r.Z)({className:(0,n.Z)(i.root,i[L],c,"inherit"===v?i.colorInherit:"default"!==v&&i["".concat(L).concat((0,s.Z)(v))],"medium"!==H&&[i["".concat(L,"Size").concat((0,s.Z)(H))],i["size".concat((0,s.Z)(H))]],Z&&i.disableElevation,g&&i.disabled,C&&i.fullWidth),component:m,disabled:g,focusRipple:!y,focusVisibleClassName:(0,n.Z)(i.focusVisible,x),ref:a,type:V},R),l.createElement("span",{className:i.label},N,t,T))}));const v=(0,i.Z)((function(e){return{root:(0,r.Z)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,c.Fq)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,c.Fq)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,c.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},92863:(e,a,t)=>{t.d(a,{Z:()=>s});var o=t(87462),r=t(45987),l=t(67294),n=(t(45697),t(86010)),i=t(14670),c=t(93871),d=l.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.color,s=void 0===d?"inherit":d,p=e.component,v=void 0===p?"span":p,h=e.fontSize,m=void 0===h?"medium":h,u=(0,r.Z)(e,["classes","className","color","component","fontSize"]);return l.createElement(v,(0,o.Z)({className:(0,n.Z)("material-icons",t.root,i,"inherit"!==s&&t["color".concat((0,c.Z)(s))],"default"!==m&&"medium"!==m&&t["fontSize".concat((0,c.Z)(m))]),"aria-hidden":!0,ref:a},u))}));d.muiName="Icon";const s=(0,i.Z)((function(e){return{root:{userSelect:"none",fontSize:e.typography.pxToRem(24),width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(36)}}}),{name:"MuiIcon"})(d)},99613:(e,a,t)=>{t.d(a,{Z:()=>v});var o=t(87462),r=t(45987),l=t(67294),n=(t(45697),t(86010)),i=t(14670),c=t(10462),d={variant:"body"},s="tbody",p=l.forwardRef((function(e,a){var t=e.classes,i=e.className,p=e.component,v=void 0===p?s:p,h=(0,r.Z)(e,["classes","className","component"]);return l.createElement(c.Z.Provider,{value:d},l.createElement(v,(0,o.Z)({className:(0,n.Z)(t.root,i),ref:a,role:v===s?null:"rowgroup"},h)))}));const v=(0,i.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(p)},88222:(e,a,t)=>{t.d(a,{Z:()=>h});var o=t(45987),r=t(87462),l=t(67294),n=(t(45697),t(86010)),i=t(14670),c=t(93871),d=t(59693),s=t(90106),p=t(10462),v=l.forwardRef((function(e,a){var t,i,d=e.align,v=void 0===d?"inherit":d,h=e.classes,m=e.className,u=e.component,g=e.padding,f=e.scope,Z=e.size,b=e.sortDirection,y=e.variant,z=(0,o.Z)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=l.useContext(s.Z),S=l.useContext(p.Z),C=S&&"head"===S.variant;u?(i=u,t=C?"columnheader":"cell"):i=C?"th":"td";var M=f;!M&&C&&(M="col");var H=g||(x&&x.padding?x.padding:"normal"),E=Z||(x&&x.size?x.size:"medium"),k=y||S&&S.variant,V=null;return b&&(V="asc"===b?"ascending":"descending"),l.createElement(i,(0,r.Z)({ref:a,className:(0,n.Z)(h.root,h[k],m,"inherit"!==v&&h["align".concat((0,c.Z)(v))],"normal"!==H&&h["padding".concat((0,c.Z)(H))],"medium"!==E&&h["size".concat((0,c.Z)(E))],"head"===k&&x&&x.stickyHeader&&h.stickyHeader),"aria-sort":V,role:t,scope:M},z))}));const h=(0,i.Z)((function(e){return{root:(0,r.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,d.$n)((0,d.Fq)(e.palette.divider,1),.88):(0,d._j)((0,d.Fq)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(v)},83750:(e,a,t)=>{t.d(a,{Z:()=>v});var o=t(87462),r=t(45987),l=t(67294),n=(t(45697),t(86010)),i=t(14670),c=t(10462),d={variant:"head"},s="thead",p=l.forwardRef((function(e,a){var t=e.classes,i=e.className,p=e.component,v=void 0===p?s:p,h=(0,r.Z)(e,["classes","className","component"]);return l.createElement(c.Z.Provider,{value:d},l.createElement(v,(0,o.Z)({className:(0,n.Z)(t.root,i),ref:a,role:v===s?null:"rowgroup"},h)))}));const v=(0,i.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(p)},57394:(e,a,t)=>{t.d(a,{Z:()=>p});var o=t(87462),r=t(45987),l=t(67294),n=(t(45697),t(86010)),i=t(14670),c=t(10462),d=t(59693),s=l.forwardRef((function(e,a){var t=e.classes,i=e.className,d=e.component,s=void 0===d?"tr":d,p=e.hover,v=void 0!==p&&p,h=e.selected,m=void 0!==h&&h,u=(0,r.Z)(e,["classes","className","component","hover","selected"]),g=l.useContext(c.Z);return l.createElement(s,(0,o.Z)({ref:a,className:(0,n.Z)(t.root,i,g&&{head:t.head,footer:t.footer}[g.variant],v&&t.hover,m&&t.selected),role:"tr"===s?null:"row"},u))}));const p=(0,i.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,d.Fq)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(s)},82302:(e,a,t)=>{t.d(a,{Z:()=>p});var o=t(45987),r=t(87462),l=t(67294),n=(t(45697),t(86010)),i=t(14670),c=t(90106),d="table",s=l.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,p=void 0===s?d:s,v=e.padding,h=void 0===v?"normal":v,m=e.size,u=void 0===m?"medium":m,g=e.stickyHeader,f=void 0!==g&&g,Z=(0,o.Z)(e,["classes","className","component","padding","size","stickyHeader"]),b=l.useMemo((function(){return{padding:h,size:u,stickyHeader:f}}),[h,u,f]);return l.createElement(c.Z.Provider,{value:b},l.createElement(p,(0,r.Z)({role:p===d?null:"table",ref:a,className:(0,n.Z)(t.root,i,f&&t.stickyHeader)},Z)))}));const p=(0,i.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},90106:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t(67294).createContext()},10462:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t(67294).createContext()},41120:(e,a,t)=>{t.d(a,{Z:()=>n});var o=t(87462),r=t(30115),l=t(99700);const n=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.Z)(e,(0,o.Z)({defaultTheme:l.Z},a))}},8777:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"}),"Archive");a.Z=n},37726:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");a.Z=n},71200:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"}),"Block");a.Z=n},75219:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"}),"BugReport");a.Z=n},85685:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");a.Z=n},47298:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");a.Z=n},46775:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}),"ChatBubble");a.Z=n},80366:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");a.Z=n},51975:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}),"Contacts");a.Z=n},28428:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");a.Z=n},10637:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");a.Z=n},78880:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts");a.Z=n},59067:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.Z=n},63781:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");a.Z=n},76324:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");a.Z=n},3551:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"}),"FiberNew");a.Z=n},71779:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M12 8V4l8 8-8 8v-4H4V8z"}),"Forward");a.Z=n},60424:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");a.Z=n},57321:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"History");a.Z=n},92448:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");a.Z=n},81077:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"InsertComment");a.Z=n},78513:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");a.Z=n},18042:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");a.Z=n},98121:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.Z=n},7168:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}),"Reply");a.Z=n},60697:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}),"ReplyAll");a.Z=n},53624:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Room");a.Z=n},53375:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");a.Z=n},43910:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");a.Z=n},2375:(e,a,t)=>{var o=t(95318),r=t(20862);a.Z=void 0;var l=r(t(67294)),n=(0,o(t(2108)).default)(l.createElement("path",{d:"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"}),"SettingsApplications");a.Z=n}}]);