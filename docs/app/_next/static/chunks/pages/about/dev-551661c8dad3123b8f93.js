(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2173],{50789:function(e,n,i){"use strict";i.d(n,{Z:function(){return u}});i(4942);var l=i(67294),s=i(52651),o=i(23275),t=i(36501),r=i(14308),f=i(28973),a=i(62448),d=i(74035),m=(i(12666),i(85893));"opacity ".concat(1300,"ms ease-in-out");function u(e){e.animations;var n=e.data,i=e.loading,t=e.url,r=e.skeleton,f=e.item,u=e.onPageChange,w=e.page,v=e.pageSize,p=e.xs,g=void 0===p?12:p,h=e.sm,j=void 0===h?6:h,b=e.md,x=void 0===b?6:b,O=e.lg,y=void 0===O?4:O,P=e.noPaging,Z=void 0!==P&&P,C=e.noPadding,k=(0,l.useRef)(null);n=n&&n.length>0?n:[1,2,3,4,5,6];var D=function(e){return C?e:(0,m.jsx)(d.ck,{children:e})},E=function(e){return(0,m.jsx)(o.Z,{xs:g,sm:j,md:x,lg:y,children:D(i?r||(0,m.jsx)(c,{}):f?f(e.data):null)})},S=(0,l.useMemo)((function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{ref:k}),(0,m.jsx)(s.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:n.map((function(n,i){return(0,m.jsx)(l.Fragment,{children:(0,m.jsx)(E,{data:n,params:e},i)},i)}))})]})}),[n]);return Z||(S=(0,m.jsx)(a.Z,{pageSize:v,data:n,url:t,onPageChange:function(e){k.current.scrollIntoView(!1),u&&u(e)},page:w,loading:i,children:S})),(0,m.jsx)(d.RQ,{children:S})}function c(){return(0,m.jsx)(t.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,m.jsxs)(r.Z,{spacing:1,children:[(0,m.jsx)(f.Z,{variant:"text",width:"80%"}),(0,m.jsx)(f.Z,{variant:"rectangular",height:100}),(0,m.jsx)(f.Z,{variant:"text",width:"50%"}),(0,m.jsx)(f.Z,{variant:"text",width:"40%"}),(0,m.jsx)(f.Z,{variant:"text",width:"70%"})]})})}},62448:function(e,n,i){"use strict";i.d(n,{Z:function(){return f}});i(67294);var l=i(14308),s=i(72642),o=i(74035),t=i(58862),r=i(85893);function f(e){var n=e||{},i=n.children,f=n.loading,a=n.data,d=n.url,m=n.skeleton,u=n.onPageChange,c=n.page,w=n.pageSize,v=void 0===w?10:w,p=c?parseInt(c):1,g=function(e){if(u&&u(e),d){var n="".concat(d,"/").concat(e);router.push(n)}},h=a&&a.length<v,j=1==p;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.RQ,{children:a&&a.length>0?(0,r.jsxs)(l.Z,{spacing:2,children:[i,(0,r.jsxs)(l.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,r.jsx)(s.Z,{variant:"outlined",disabled:j,onClick:function(){return g(p-1)},children:"Back"}),(0,r.jsx)(s.Z,{variant:"outlined",disabled:h,onClick:function(){return g(p+1)},children:"Next"})]})]}):(0,r.jsx)(t.Dx,{children:f?m||"loading":"No results"})})})}},55619:function(e,n,i){"use strict";i.d(n,{Z:function(){return v}});var l=i(4942),s=i(67294),o=i(11163),t=i(39704),r=i(19016),f=i(25810),a=i(14763),d=i(50789),m=(i(14308),i(529)),u=i(85893);function c(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,l)}return i}function w(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?c(Object(i),!0).forEach((function(n){(0,l.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function v(e){var n,i,l,a,d,m,c,v,g=(0,t.I0)(),h=(0,o.useRouter)(),j=e.config,b=(0,s.useState)(""),x=b[0],O=b[1],y=(0,t.v9)((function(e){return e[j.automata.name]})),P=null!==(n=e.params.render)&&void 0!==n?n:null,Z=w(w({},e.params),{},{renderer:null!==(i=e.params.renderer)&&void 0!==i?i:P});y=e.data?{data:e.data,params:{page:e.params.page}}:y;(0,s.useEffect)((function(){y&&!e.data&&g((0,r.K4)({status:y.loading,sender:j.automata.name}))}),[y]),(0,s.useEffect)((function(){Z.breadcrumbs&&g((0,r.YA)({breadcrumbs:"function"===typeof Z.breadcrumbs?Z.breadcrumbs(y):Z.breadcrumbs}))}),[Z.breadcrumbs,y]);var C=function(n){e.fetch&&(y&&(n=w(w({},y.params),n)),e.data?e.fetch(n):g(e.fetch(n)))};return(0,s.useEffect)((function(){null!==h&&void 0!==h&&h.isReady&&("banner"!==P||j.banner.showData)&&(e.data||C(Z))}),[null===h||void 0===h?void 0:h.isReady,Z.id]),P&&"grid"!=P?((0,s.useEffect)((function(){""!=x&&g((0,r.PV)({message:x}))}),[x]),(0,u.jsx)(p,{config:e.config,render:P,state:y,loading:!(null!==h&&void 0!==h&&h.isReady)||!y||null===y||(null===(l=y)||void 0===l?void 0:l.loading),forceLoading:"detail"===P&&0==(null===(a=y)||void 0===a||null===(d=a.data)||void 0===d?void 0:d.length)||"list"==P&&0===(null===(m=y)||void 0===m||null===(c=m.data)||void 0===c?void 0:c.length)||null!=(null===(v=y)||void 0===v?void 0:v.error),setErrorMessage:O,fetch:C,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:Z})):(0,u.jsx)(f.C,{from:j.page.title,data:"render property wasn't set"})}function p(e){(0,t.I0)();var n,i,l=e.config,s=e.item,o=e.mainCol,r=e.state,d=e.render,m=e.params,c=e.fetch,v=e.setErrorMessage,p=e.loading||e.forceLoading;p=!1!==p;var j=l.page.title;if(0==e.loading&&r){var b,x;if("detail"===d)null!==r.data&&0!=(null===(b=r.data)||void 0===b?void 0:b.length)||(v("this is a demo version, this record was filtered out to reduce the database size"),p=!0);if("list"===d)0===(null===(x=r.data)||void 0===x?void 0:x.length)&&(v("data not found"),p=!0);r.error&&(v(r.error.message),p=!0)}var O=(0,u.jsx)(g,w(w({},e),{},{loading:p}));return(0,u.jsxs)(u.Fragment,{children:[r&&r.error&&(0,u.jsx)(f.C,{from:j,data:r.error.message}),"banner"===d&&O,"list"===d&&(0,u.jsx)(a.Z,w(w({},e),{},{id:l.automata.name,banner:O,mainCol:p&&e.skeleton?e.skeleton:(0,u.jsx)(h,w({},e))})),"page"===d&&(0,u.jsx)(a.Z,w(w({},e),{},{id:l.automata.name,banner:O,mainCol:o?(0,u.jsx)(u.Fragment,{children:p&&e.skeleton?e.skeleton:o({data:null!==(n=null===r||void 0===r?void 0:r.data)&&void 0!==n?n:null,loading:p,params:m,fetch:c,item:s})}):(0,u.jsx)(f.C,{from:j,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===d&&(0,u.jsx)(a.Z,w(w({},e),{},{id:l.automata.name,mainCol:o?(0,u.jsx)(u.Fragment,{children:p&&e.skeleton?e.skeleton:o({data:null!==(i=null===r||void 0===r?void 0:r.data)&&void 0!==i?i:null,loading:p})}):(0,u.jsx)(f.C,{from:j,data:"main component missing, not found in mainCol or detail prop"})}))]})}function g(e){var n,i,l,s,o,t,r,f,a,d,c=e.config,w=e.state,v=e.loading,p=null!==(n=null===(i=c.banner)||void 0===i?void 0:i.showData)&&void 0!==n&&n,g=e.customTitle?"function"===typeof e.customTitle?w?e.customTitle(null!==(l=null===w||void 0===w?void 0:w.params)&&void 0!==l?l:{}):"":e.customTitle:null!==(s=null===(o=c.page)||void 0===o?void 0:o.title)&&void 0!==s?s:"NO TITLE",h=e.customDescription?"function"===typeof e.customDescription?w?e.customDescription(null!==(t=null===w||void 0===w?void 0:w.params)&&void 0!==t?t:{}):"":e.customDescription:null!==(r=null===(f=c.page)||void 0===f?void 0:f.description)&&void 0!==r?r:"NO DESCRIPTION",j=null===(a=c.page)||void 0===a?void 0:a.url;return(0,u.jsx)(m.Z,{renderer:c.banner.renderer?c.banner.renderer:"carousel",showData:p,loading:v,title:g,description:h,data:null===w||void 0===w?void 0:w.data,item:e.item,actions:[{url:j(null!==(d=null===w||void 0===w?void 0:w.params)&&void 0!==d?d:{}),title:"See all"}],hero:"banner"!==e.render})}function h(e){var n,i,l=e.loading,s=e.state,o=e.fetch,t=e.item;return(0,u.jsx)(d.Z,{loading:l,page:null!==(n=null===s||void 0===s?void 0:s.params.page)&&void 0!==n?n:null,data:null!==(i=null===s||void 0===s?void 0:s.data)&&void 0!==i?i:null,onPageChange:function(e){return o({page:e})},item:t})}},66890:function(e,n,i){"use strict";i.d(n,{Y:function(){return t}});var l=i(9092),s=JSON.parse('{"server":{"2021-10-16":{"nm":{"files":10310,"lines":1777715},"own":{"files":75,"lines":3919}},"2021-10-17":{"nm":{"files":10310,"lines":1777715},"own":{"files":75,"lines":3920}},"2021-10-26":{"nm":{"files":10677,"lines":1830003},"own":{"files":154,"lines":11026}},"2021-10-27":{"nm":{"files":10677,"lines":1830003},"own":{"files":154,"lines":11025}},"2021-10-28":{"nm":{"files":10677,"lines":1830003},"own":{"files":154,"lines":11037}},"2021-10-30":{"nm":{"files":10677,"lines":1830003},"own":{"files":154,"lines":11078}},"2021-10-31":{"nm":{"files":10677,"lines":1830003},"own":{"files":154,"lines":11078}},"2021-11-09":{"nm":{"files":10825,"lines":1841735},"own":{"files":156,"lines":11299}},"2021-11-11":{"nm":{"files":10825,"lines":1841735},"own":{"files":156,"lines":11383}},"2021-11-12":{"nm":{"files":10825,"lines":1841735},"own":{"files":156,"lines":11392}},"2021-11-13":{"nm":{"files":10825,"lines":1841735},"own":{"files":156,"lines":11611}},"2021-11-14":{"nm":{"files":10825,"lines":1841735},"own":{"files":156,"lines":11611}},"2021-11-15":{"nm":{"files":10825,"lines":1841735},"own":{"files":156,"lines":11642}},"2021-11-19":{"nm":{"files":10825,"lines":1841735},"own":{"files":156,"lines":12249}},"2021-11-23":{"nm":{"files":10825,"lines":1841735},"own":{"files":156,"lines":12301}},"2021-11-25":{"nm":{"files":10825,"lines":1841735},"own":{"files":156,"lines":12303}},"2021-12-04":{"nm":{"files":10825,"lines":1841735},"own":{"files":156,"lines":12409}},"2021-12-07":{"nm":{"files":10825,"lines":1841735},"own":{"files":160,"lines":12503}},"2021-12-08":{"nm":{"files":10825,"lines":1841735},"own":{"files":164,"lines":12602}},"2021-12-10":{"nm":{"files":10825,"lines":1841735},"own":{"files":165,"lines":12625}},"2021-12-11":{"nm":{"files":10825,"lines":1841735},"own":{"files":165,"lines":12625}},"2021-12-13":{"nm":{"files":10825,"lines":1841735},"own":{"files":165,"lines":12625}},"2021-12-15":{"nm":{"files":10825,"lines":1841735},"own":{"files":165,"lines":12671}},"2021-12-27":{"nm":{"files":10825,"lines":1841735},"own":{"files":165,"lines":12682}},"2021-12-28":{"nm":{"files":10825,"lines":1841735},"own":{"files":165,"lines":12682}},"2021-12-30":{"nm":{"files":10825,"lines":1841735},"own":{"files":165,"lines":12682}},"2022-01-02":{"nm":{"files":10825,"lines":1841735},"own":{"files":165,"lines":12682}}},"scripts":{"2021-10-16":{"nm":{"files":8725,"lines":4144276},"own":{"files":91,"lines":4461}},"2021-10-17":{"nm":{"files":8966,"lines":4173099},"own":{"files":94,"lines":4627}},"2021-10-26":{"nm":{"files":9298,"lines":4207504},"own":{"files":106,"lines":5383}},"2021-10-27":{"nm":{"files":9298,"lines":4207504},"own":{"files":106,"lines":5388}},"2021-10-28":{"nm":{"files":9298,"lines":4207504},"own":{"files":106,"lines":5388}},"2021-10-30":{"nm":{"files":9539,"lines":4236327},"own":{"files":103,"lines":5339}},"2021-10-31":{"nm":{"files":11442,"lines":4540210},"own":{"files":103,"lines":5231}},"2021-11-09":{"nm":{"files":12226,"lines":3897605},"own":{"files":135,"lines":6073}},"2021-11-12":{"nm":{"files":12264,"lines":3898715},"own":{"files":144,"lines":6362}},"2021-11-13":{"nm":{"files":12264,"lines":3898715},"own":{"files":144,"lines":6362}},"2021-11-14":{"nm":{"files":12264,"lines":3898715},"own":{"files":144,"lines":6369}},"2021-11-15":{"nm":{"files":12264,"lines":3898715},"own":{"files":144,"lines":6369}},"2021-11-19":{"nm":{"files":13485,"lines":4077463},"own":{"files":156,"lines":6721}},"2021-11-23":{"nm":{"files":13485,"lines":4077463},"own":{"files":156,"lines":6777}},"2021-11-25":{"nm":{"files":13485,"lines":4077463},"own":{"files":158,"lines":6899}},"2021-12-04":{"nm":{"files":18152,"lines":4825321},"own":{"files":227,"lines":9225}},"2021-12-07":{"nm":{"files":18152,"lines":4825321},"own":{"files":230,"lines":9246}},"2021-12-08":{"nm":{"files":19119,"lines":4976900},"own":{"files":233,"lines":9323}},"2021-12-10":{"nm":{"files":19119,"lines":4976900},"own":{"files":230,"lines":9046}},"2021-12-11":{"nm":{"files":19119,"lines":4976900},"own":{"files":230,"lines":9047}},"2021-12-13":{"nm":{"files":19119,"lines":4976900},"own":{"files":230,"lines":9048}},"2021-12-15":{"nm":{"files":19119,"lines":4976900},"own":{"files":230,"lines":9057}},"2021-12-27":{"nm":{"files":19119,"lines":4976900},"own":{"files":231,"lines":9060}},"2021-12-28":{"nm":{"files":19119,"lines":4976900},"own":{"files":231,"lines":9060}},"2021-12-30":{"nm":{"files":19119,"lines":4976900},"own":{"files":231,"lines":9074}},"2022-01-02":{"nm":{"files":19119,"lines":4976900},"own":{"files":231,"lines":9074}}},"client":{"2021-10-11":{"nm":{"files":41277,"lines":2052315},"own":{"files":422,"lines":13883}},"2021-10-16":{"nm":{"files":41732,"lines":2137087},"own":{"files":454,"lines":15725}},"2021-10-17":{"nm":{"files":41732,"lines":2137087},"own":{"files":462,"lines":15975}},"2021-10-23":{"nm":{"files":149046,"lines":5608322},"own":{"files":513,"lines":16639}},"2021-10-24":{"nm":{"files":154133,"lines":5779009},"own":{"files":517,"lines":16626}},"2021-10-26":{"nm":{"files":154218,"lines":5784817},"own":{"files":542,"lines":16901}},"2021-10-27":{"nm":{"files":154218,"lines":5784817},"own":{"files":527,"lines":16361}},"2021-10-28":{"nm":{"files":154224,"lines":5785311},"own":{"files":535,"lines":16566}},"2021-10-30":{"nm":{"files":154224,"lines":5785311},"own":{"files":535,"lines":16677}},"2021-10-31":{"nm":{"files":154224,"lines":5785311},"own":{"files":535,"lines":16677}},"2021-11-09":{"nm":{"files":161429,"lines":6270014},"own":{"files":527,"lines":16415}},"2021-11-11":{"nm":{"files":161429,"lines":6270014},"own":{"files":557,"lines":17023}},"2021-11-12":{"nm":{"files":161669,"lines":6331721},"own":{"files":560,"lines":17288}},"2021-11-13":{"nm":{"files":161669,"lines":6331721},"own":{"files":560,"lines":17358}},"2021-11-14":{"nm":{"files":161669,"lines":6331721},"own":{"files":560,"lines":17406}},"2021-11-15":{"nm":{"files":161669,"lines":6331721},"own":{"files":561,"lines":17545}},"2021-11-19":{"nm":{"files":161669,"lines":6331721},"own":{"files":581,"lines":18171}},"2021-11-23":{"nm":{"files":162395,"lines":6432070},"own":{"files":563,"lines":18082}},"2021-11-25":{"nm":{"files":162395,"lines":6432070},"own":{"files":566,"lines":18167}},"2021-12-04":{"nm":{"files":75539,"lines":4612046},"own":{"files":563,"lines":18248}},"2021-12-07":{"nm":{"files":75542,"lines":4612150},"own":{"files":573,"lines":18538}},"2021-12-08":{"nm":{"files":75542,"lines":4612150},"own":{"files":576,"lines":18776}},"2021-12-10":{"nm":{"files":75558,"lines":4613444},"own":{"files":578,"lines":18783}},"2021-12-11":{"nm":{"files":75558,"lines":4613444},"own":{"files":578,"lines":18783}},"2021-12-13":{"nm":{"files":75558,"lines":4613444},"own":{"files":578,"lines":18783}},"2021-12-15":{"nm":{"files":75558,"lines":4613444},"own":{"files":581,"lines":19082}},"2021-12-27":{"nm":{"files":75568,"lines":4615049},"own":{"files":601,"lines":19878}},"2021-12-28":{"nm":{"files":75568,"lines":4615049},"own":{"files":599,"lines":19725}},"2021-12-30":{"nm":{"files":75568,"lines":4615049},"own":{"files":601,"lines":19958}},"2022-01-02":{"nm":{"files":75568,"lines":4615049},"own":{"files":601,"lines":19958}}}}'),o=JSON.parse('{"scripts":{"2021-10-16":{"nm":{"files":8765,"lines":4161088},"own":{"files":91,"lines":4461}},"2021-10-17":{"nm":{"files":9006,"lines":4189911},"own":{"files":94,"lines":4627}},"2021-10-26":{"nm":{"files":9338,"lines":4224316},"own":{"files":106,"lines":5383}},"2021-10-27":{"nm":{"files":9338,"lines":4224316},"own":{"files":106,"lines":5388}},"2021-10-28":{"nm":{"files":9338,"lines":4224316},"own":{"files":106,"lines":5388}},"2021-10-30":{"nm":{"files":9579,"lines":4253139},"own":{"files":103,"lines":5339}},"2021-10-31":{"nm":{"files":11490,"lines":4568268},"own":{"files":103,"lines":5231}}},"client":{"2021-10-11":{"nm":{"files":41379,"lines":2060460},"own":{"files":530,"lines":33181}},"2021-10-16":{"nm":{"files":41835,"lines":2145232},"own":{"files":567,"lines":37693}},"2021-10-17":{"nm":{"files":41835,"lines":2145232},"own":{"files":575,"lines":37943}},"2021-10-23":{"nm":{"files":149375,"lines":5622641},"own":{"files":671,"lines":52468}},"2021-10-24":{"nm":{"files":154470,"lines":5793328},"own":{"files":677,"lines":52455}},"2021-10-26":{"nm":{"files":154555,"lines":5799136},"own":{"files":710,"lines":55935}},"2021-10-27":{"nm":{"files":154555,"lines":5799136},"own":{"files":695,"lines":55891}},"2021-10-28":{"nm":{"files":154561,"lines":5799630},"own":{"files":704,"lines":56105}},"2021-10-30":{"nm":{"files":154561,"lines":5799630},"own":{"files":704,"lines":56208}},"2021-10-31":{"nm":{"files":154561,"lines":5799630},"own":{"files":705,"lines":87085}}},"server":{"2021-10-16":{"nm":{"files":10362,"lines":1789436},"own":{"files":75,"lines":3919}},"2021-10-17":{"nm":{"files":10362,"lines":1789436},"own":{"files":75,"lines":3920}},"2021-10-26":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11026}},"2021-10-27":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11025}},"2021-10-28":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11037}},"2021-10-30":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11078}},"2021-10-31":{"nm":{"files":10729,"lines":1841724},"own":{"files":154,"lines":11078}}}}'),t=function(){return l.Z.TEST?o:s}},70242:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});i(67294);var l=i(4942),s=i(57379),o=i(85893);function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){(0,l.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var f=function(e){return(0,o.jsx)(s.Z,r(r({},e),{},{render:"page"}))},a=function(e){return(0,o.jsx)(f,{breadcrumbs:"/about/dev"})}},60263:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/dev",function(){return i(70242)}])}},function(e){e.O(0,[7146,4290,5218,525,2328,5019,4197,909,2401,1485,9774,2888,179],(function(){return n=60263,e(e.s=n);var n}));var n=e.O();_N_E=n}]);