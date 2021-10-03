/*! For license information please see 9246.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[9246,1321,5298],{71993:(e,_,t)=>{function r(e,_,t){const r={};return Object.keys(e).forEach((n=>{r[n]=e[n].reduce(((e,r)=>(r&&(t&&t[r]&&e.push(t[r]),e.push(_(r))),e)),[]).join(" ")})),r}t.d(_,{Z:()=>r})},15773:(e,_,t)=>{t.d(_,{Z:()=>n});const r={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function n(e,_){return r[_]||`${e}-${_}`}},88858:(e,_,t)=>{t.d(_,{Z:()=>n});var r=t(15773);function n(e,_){const t={};return _.forEach((_=>{t[_]=(0,r.Z)(e,_)})),t}},87893:(e,_,t)=>{t.d(_,{Z:()=>l});var r=t(87462),n=t(63366),s=t(94863);const a=["sx"];function l(e){const{sx:_}=e,t=(0,n.Z)(e,a),{systemProps:l,otherProps:o}=(e=>{const _={systemProps:{},otherProps:{}};return Object.keys(e).forEach((t=>{s.G[t]?_.systemProps[t]=e[t]:_.otherProps[t]=e[t]})),_})(t);return(0,r.Z)({},o,{sx:(0,r.Z)({},l,_)})}},71713:(e,_,t)=>{t.d(_,{Z:()=>a});var r=t(83528),n=t(35754);const s=(0,r.Z)(),a=function(e=s){return(0,n.Z)(e)}},35754:(e,_,t)=>{t.d(_,{Z:()=>s});var r=t(67294);const n=r.createContext(null),s=function(e=null){const _=r.useContext(n);return _&&(t=_,0!==Object.keys(t).length)?_:e;var t}},5609:(e,_,t)=>{t.d(_,{Z:()=>a});var r=t(87462),n=t(71713);var s=t(90247);function a({props:e,name:_}){return function({props:e,name:_,defaultTheme:t}){const s=function(e){const{theme:_,name:t,props:n}=e;if(!(_&&_.components&&_.components[t]&&_.components[t].defaultProps))return n;const s=(0,r.Z)({},n),a=_.components[t].defaultProps;let l;for(l in a)void 0===s[l]&&(s[l]=a[l]);return s}({theme:(0,n.Z)(t),name:_,props:e});return s}({props:e,name:_,defaultTheme:s.Z})}},86688:(e,_,t)=>{t.d(_,{Z:()=>s});var r=t(67294),n=t(72797);r.Component;const s=e=>class extends r.Component{render(){const _="title"in this.props?this.props.title:null,t="placeholder"in this.props?this.props.placeholder:{};return t.width&&t.width,t.height&&t.height,r.createElement(n.Z,{from:_,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,_,t)=>{t.d(_,{Z:()=>r});const r={links_disabled:!1}},93268:(e,_,t)=>{t.d(_,{Z:()=>s});var r=t(67294),n=t(26447);function s(e){return r.createElement(n.Z,{sx:{padding:{sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"}}},e.children)}},80383:(e,_,t)=>{t.d(_,{Z:()=>l});var r=t(67294),n=t(86688),s=t(41749);class a extends r.Component{render(){var{direction:e,spacing:_,className:t,justify:n,alignItems:a,style:l,flex:o}=this.props,_=_||0;return l=l||{},o&&(l.display="flex"),r.createElement(s.Z,{container:!0,direction:e,justifyContent:n,alignItems:a,className:t,spacing:_,style:l},this.props.children)}}const l=(0,n.Z)(a)},81648:(e,_,t)=>{t.d(_,{Z:()=>l});var r=t(67294),n=t(86688),s=t(41749);class a extends r.Component{render(){var{visible:e,className:_,xs:t,sm:n,md:a,style:l,fill:o,flex:i,center:c}=this.props;e=e||!0;var d={...l};return(d=d||{textAlign:"inherit"}).textAlign=c?"center":d.textAlign,o&&(d.width="100%"),i&&(d.flex=1),e&&r.createElement(s.Z,{className:_,item:!0,xs:t,sm:n,md:a,style:d},this.props.children)}}const l=(0,n.Z)(a)},83347:(e,_,t)=>{t.d(_,{Z:()=>l});var r=t(67294),n=t(12613),s=t(86688);class a extends r.Component{render(){var{xs:e,sm:_,md:t,lg:s,xl:a}=this.props;return e=e||null,_=_||e,t=t||_,s=s||t,a=a||s,r.createElement("div",{style:{width:"100%"}},r.createElement(n.Z,{only:["sm","md","lg","xl"]},e),r.createElement(n.Z,{only:["xs","md","lg","xl"]},_),r.createElement(n.Z,{only:["xs","sm","lg","xl"]},t),r.createElement(n.Z,{only:["xs","sm","md","xl"]},s),r.createElement(n.Z,{only:["xs","sm","md","lg"]},a))}}const l=(0,s.Z)(a)},87558:(e,_,t)=>{t.d(_,{Z:()=>l});var r=t(67294),n=t(73727),s=t(36776);class a extends r.Component{render(){var{children:e,className:_,to:t,href:a,style:l,external:o}=this.props;if(e=(t=(t=t||a)||"http://localhost")?e:"NO LINK DEFINED",l=l||{},t&&"string"!=typeof t)return"INVALID URL";const i=!((o=!0===o)||t&&0===t.indexOf("http")),c=i?"_self":"_blank";return 0==(0===t.indexOf("#"))&&1==i&&0==s.Z.links_disabled?r.createElement(n.OL,{className:_,to:t,style:l},e):r.createElement("a",{className:_,href:t,style:l,target:c},e)}}const l=a},97236:(e,_,t)=>{t.d(_,{Z:()=>a});var r=t(67294),n=t(87558);t(36776);class s extends r.Component{render(){var{children:e,className:_,to:t,href:s,border:a,style:l,external:o}=this.props;return e=(t=(t=t||s)||"http://localhost")?e:"NO LINK DEFINED",a=!0===a||"true"===a?"text-link":"",(l=l||{}).padding=l.padding?l.padding:"0.5rem 0.75rem",_=`${a} ${_||""}`,o=!0===o,r.createElement(n.Z,{className:_,to:t,style:l,external:o},e)}}const a=s},61142:(e,_,t)=>{t.r(_),t.d(_,{default:()=>i});var r=t(67294),n=t(80383),s=t(81648),a=t(87125),l=t(93775),o=t(26447);const i=function(e={}){const{data:_,loading:t,route:i}=e,{total:c,profession:d,yearBirth:m}=_||{},p=(e,_,n)=>r.createElement(s.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},r.createElement(l.default,{loading:t,title:e,data:_||{},ranges:n}));return r.createElement(o.Z,{spacing:2},r.createElement("h1",null,"general"),r.createElement(n.Z,{justifyContent:"center",fill:!0},((e,_,n)=>r.createElement(s.Z,{xs:12,sm:6,md:6,lg:3,style:{paddingRight:"1rem"}},r.createElement(a.default,{loading:t,title:"people",data:_?_.toString():_,icon:"people"})))(0,c)),r.createElement("h1",null,"segments"),r.createElement(n.Z,{justifyContent:"center",fill:!0},p("profession",d,[1e3,5e4,1e5]),p("birth year",m,[50,100,1e3,2500,5e3,6e3,7e3])))}},17202:(e,_,t)=>{t.r(_),t.d(_,{default:()=>c});var r=t(67294),n=t(93268),s=t(80383),a=t(81648),l=t(61142),o=t(61400);function i(){return i=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}const c=function(e){return r.createElement(n.Z,null,r.createElement(s.Z,{className:"page-module",fill:!0},r.createElement(a.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"}},r.createElement(l.default,e)),r.createElement(a.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"}},r.createElement(o.default,i({},e,{filter:"people"})))))}},92644:(e,_,t)=>{t.r(_),t.d(_,{default:()=>o});var r=t(67294),n=t(93268),s=t(61142),a=t(61400);function l(){return l=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}const o=function(e){return r.createElement(n.Z,null,r.createElement(s.default,e),r.createElement(a.default,l({},e,{filter:"people"})))}},82842:(e,_,t)=>{t.r(_),t.d(_,{default:()=>l});var r=t(67294),n=t(83347),s=t(92644),a=t(17202);function l(e){return r.createElement(n.Z,{xs:r.createElement(s.default,e),md:r.createElement(a.default,e)})}},68922:(e,_,t)=>{t.r(_),t.d(_,{default:()=>s,Controls:()=>l,Loading:()=>o});var r=t(82842),n=t(41671);const s={title:"Project/Stories/People/Page"},a=e=>React.createElement(r.default,e),l=a.bind({});l.args={data:n};const o=a.bind({});o.args={loading:!0}},61400:(e,_,t)=>{t.r(_),t.d(_,{default:()=>d});var r=t(67294),n=t(58524),s=t(75298),a=t(36501),l=t(97236);const o=(0,n.ZP)("div")({padding:"0.85rem"}),i=(0,n.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),c=(0,n.ZP)("div")({fontSize:"0.9rem"}),d=function(e){const{filter:_}=e,t=s.default.getBy(_);return r.createElement(a.Z,null,r.createElement(o,null,r.createElement(i,null,"Stories"),t.map(((e,_)=>r.createElement(c,{key:_},r.createElement(l.Z,{href:e.url},e.title))))))}},75298:(e,_,t)=>{t.r(_),t.d(_,{default:()=>n});const r=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcast_music"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]}],n=new class{constructor(){}getBy(e){const _=[];return r.forEach((t=>{t.id!==e&&t.tags.includes(e)&&_.push(t)})),_}}},75251:(e,_,t)=>{var r=t(67294),n=60103;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;n=s("react.element"),s("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,_,t){var r,s={},i=null,c=null;for(r in void 0!==t&&(i=""+t),void 0!==_.key&&(i=""+_.key),void 0!==_.ref&&(c=_.ref),_)l.call(_,r)&&!o.hasOwnProperty(r)&&(s[r]=_[r]);if(e&&e.defaultProps)for(r in _=e.defaultProps)void 0===s[r]&&(s[r]=_[r]);return{$$typeof:n,type:e,key:i,ref:c,props:s,_owner:a.current}}_.jsx=i,_.jsxs=i},85893:(e,_,t)=>{e.exports=t(75251)},41671:e=>{e.exports=JSON.parse('{"alive":11042298,"profession":{"soundtrack":138885,"actor":2567815,"miscellaneous":1134443,"actress":1558517,"musicDepartment":212956,"writer":733757,"director":597958,"producer":969602,"makeUpDepartment":188204,"composer":271701,"assistantDirector":216359,"cameraDepartment":659028,"editor":293763,"cinematographer":313932,"castingDirector":26856,"scriptDepartment":67866,"artDirector":78628,"stunts":74796,"editorialDepartment":157770,"costumeDepartment":128466,"animationDepartment":175693,"artDepartment":387352,"executive":27741,"specialEffects":58794,"productionDesigner":69108,"productionManager":182736,"soundDepartment":328017,"talentAgent":12409,"castingDepartment":47463,"costumeDesigner":64955,"visualEffects":191145,"locationManagement":67142,"setDecorator":46953,"transportationDepartment":83223,"manager":11879,"legal":3423,"publicist":3634,"assistant":3175,"productionDepartment":9,"electricalDepartment":16,"choreographer":1},"total":11235761,"yearBirth":{"_4":1,"_163":1,"_354":1,"_384":1,"_403":1,"_570":1,"_770":1,"_949":1,"_973":1,"_1048":1,"_1095":1,"_1098":1,"_1130":1,"_1138":1,"_1150":1,"_1162":1,"_1180":1,"_1193":1,"_1207":1,"_1225":1,"_1265":1,"_1283":1,"_1291":1,"_1313":1,"_1314":1,"_1330":1,"_1335":1,"_1343":1,"_1398":2,"_1412":1,"_1413":1,"_1414":1,"_1415":1,"_1420":1,"_1422":1,"_1431":1,"_1435":1,"_1440":2,"_1449":1,"_1450":1,"_1451":1,"_1452":1,"_1454":1,"_1455":1,"_1465":1,"_1468":1,"_1469":1,"_1471":1,"_1474":1,"_1475":1,"_1477":1,"_1480":1,"_1483":2,"_1485":1,"_1486":1,"_1489":1,"_1491":1,"_1492":2,"_1493":1,"_1494":2,"_1497":1,"_1500":1,"_1503":1,"_1504":1,"_1505":1,"_1506":1,"_1507":1,"_1508":2,"_1510":2,"_1511":1,"_1515":1,"_1520":1,"_1524":1,"_1525":2,"_1527":3,"_1529":1,"_1530":2,"_1532":1,"_1533":1,"_1540":1,"_1542":2,"_1543":1,"_1544":1,"_1546":1,"_1547":2,"_1549":1,"_1550":4,"_1558":1,"_1560":1,"_1561":1,"_1562":1,"_1563":1,"_1564":2,"_1566":1,"_1567":3,"_1568":2,"_1569":1,"_1571":3,"_1572":2,"_1575":2,"_1577":2,"_1578":1,"_1579":2,"_1580":4,"_1581":1,"_1582":1,"_1583":2,"_1584":2,"_1585":3,"_1586":1,"_1587":2,"_1588":1,"_1589":1,"_1593":1,"_1595":1,"_1596":1,"_1597":1,"_1598":1,"_1599":1,"_1600":1,"_1601":1,"_1602":1,"_1604":2,"_1606":2,"_1608":1,"_1610":1,"_1616":1,"_1618":1,"_1619":3,"_1621":1,"_1622":2,"_1623":1,"_1625":1,"_1626":1,"_1627":1,"_1628":3,"_1629":1,"_1631":1,"_1632":4,"_1633":1,"_1634":1,"_1635":1,"_1636":2,"_1639":3,"_1640":4,"_1641":2,"_1643":1,"_1644":1,"_1645":1,"_1646":1,"_1648":1,"_1652":3,"_1653":2,"_1654":1,"_1656":1,"_1657":1,"_1658":1,"_1659":1,"_1660":2,"_1663":1,"_1664":1,"_1667":2,"_1668":2,"_1669":1,"_1670":2,"_1671":2,"_1674":4,"_1676":1,"_1677":1,"_1678":3,"_1681":1,"_1682":1,"_1683":1,"_1684":2,"_1685":6,"_1686":1,"_1687":2,"_1688":2,"_1689":1,"_1693":1,"_1694":2,"_1695":1,"_1696":1,"_1697":3,"_1698":2,"_1700":2,"_1701":1,"_1703":1,"_1706":2,"_1707":3,"_1710":4,"_1711":4,"_1712":4,"_1713":3,"_1714":3,"_1715":2,"_1716":2,"_1717":2,"_1719":1,"_1720":3,"_1723":1,"_1724":2,"_1725":5,"_1726":2,"_1727":2,"_1728":2,"_1729":3,"_1730":2,"_1731":3,"_1732":5,"_1733":1,"_1734":5,"_1735":5,"_1736":1,"_1737":5,"_1738":3,"_1739":1,"_1740":4,"_1741":5,"_1743":3,"_1745":1,"_1746":5,"_1747":2,"_1748":2,"_1749":5,"_1750":2,"_1751":5,"_1752":1,"_1753":1,"_1754":3,"_1755":6,"_1756":2,"_1757":5,"_1758":4,"_1759":4,"_1760":4,"_1761":3,"_1763":2,"_1764":3,"_1765":1,"_1766":5,"_1767":7,"_1768":4,"_1769":4,"_1770":6,"_1771":2,"_1772":5,"_1773":4,"_1774":7,"_1775":8,"_1776":3,"_1777":6,"_1778":4,"_1779":5,"_1780":4,"_1781":3,"_1782":7,"_1783":8,"_1784":8,"_1785":6,"_1786":11,"_1787":1,"_1788":5,"_1789":6,"_1790":7,"_1791":15,"_1792":11,"_1793":7,"_1794":2,"_1795":7,"_1796":7,"_1797":12,"_1798":8,"_1799":8,"_1800":1,"_1801":13,"_1802":14,"_1803":11,"_1804":15,"_1805":15,"_1806":10,"_1807":8,"_1808":16,"_1809":20,"_1810":21,"_1811":17,"_1812":16,"_1813":19,"_1814":11,"_1815":11,"_1816":11,"_1817":17,"_1818":17,"_1819":26,"_1820":21,"_1821":24,"_1822":23,"_1823":18,"_1824":18,"_1825":21,"_1826":17,"_1827":16,"_1828":21,"_1829":20,"_1830":31,"_1831":25,"_1832":26,"_1833":21,"_1834":31,"_1835":32,"_1836":35,"_1837":44,"_1838":38,"_1839":40,"_1840":32,"_1841":42,"_1842":60,"_1843":44,"_1844":57,"_1845":54,"_1846":69,"_1847":65,"_1848":78,"_1849":76,"_1850":91,"_1851":97,"_1852":98,"_1853":117,"_1854":121,"_1855":113,"_1856":139,"_1857":160,"_1858":187,"_1859":207,"_1860":253,"_1861":217,"_1862":271,"_1863":291,"_1864":273,"_1865":317,"_1866":328,"_1867":364,"_1868":360,"_1869":417,"_1870":478,"_1871":450,"_1872":497,"_1873":500,"_1874":578,"_1875":606,"_1876":646,"_1877":645,"_1878":728,"_1879":791,"_1880":834,"_1881":850,"_1882":924,"_1883":952,"_1884":1032,"_1885":1122,"_1886":1137,"_1887":1163,"_1888":1368,"_1889":1390,"_1890":1359,"_1891":1371,"_1892":1526,"_1893":1519,"_1894":1534,"_1895":1567,"_1896":1677,"_1897":1657,"_1898":1798,"_1899":1826,"_1900":1869,"_1901":2159,"_1902":2084,"_1903":2152,"_1904":2307,"_1905":2247,"_1906":2400,"_1907":2489,"_1908":2607,"_1909":2509,"_1910":2631,"_1911":2557,"_1912":2775,"_1913":2677,"_1914":2877,"_1915":2697,"_1916":2690,"_1917":2650,"_1918":2885,"_1919":2946,"_1920":3840,"_1921":3866,"_1922":3907,"_1923":3958,"_1924":4160,"_1925":4248,"_1926":4361,"_1927":4400,"_1928":4539,"_1929":4580,"_1930":4700,"_1931":4423,"_1932":4189,"_1933":3964,"_1934":4122,"_1935":4059,"_1936":4200,"_1937":4393,"_1938":4482,"_1939":4620,"_1940":4722,"_1941":4745,"_1942":4921,"_1943":5106,"_1944":5151,"_1945":4892,"_1946":5487,"_1947":5912,"_1948":5361,"_1949":5111,"_1950":5079,"_1951":4981,"_1952":5079,"_1953":5007,"_1954":4964,"_1955":5097,"_1956":4996,"_1957":5257,"_1958":5346,"_1959":5346,"_1960":5641,"_1961":5759,"_1962":5998,"_1963":6058,"_1964":6352,"_1965":6321,"_1966":6192,"_1967":6325,"_1968":6674,"_1969":7066,"_1970":7739,"_1971":7577,"_1972":7507,"_1973":7381,"_1974":7793,"_1975":7883,"_1976":8146,"_1977":8180,"_1978":8735,"_1979":8744,"_1980":8939,"_1981":8668,"_1982":8519,"_1983":8002,"_1984":7921,"_1985":7544,"_1986":7455,"_1987":6687,"_1988":6336,"_1989":5725,"_1990":5306,"_1991":4792,"_1992":4410,"_1993":3869,"_1994":3561,"_1995":3203,"_1996":2767,"_1997":2549,"_1998":2101,"_1999":1590,"_2000":1251,"_2001":10702172,"_2002":782,"_2003":605,"_2004":508,"_2005":352,"_2006":271,"_2007":238,"_2008":199,"_2009":157,"_2010":109,"_2011":93,"_2012":82,"_2013":42,"_2014":43,"_2015":15,"_2016":14,"_2017":16,"_2018":16,"_2019":9,"_2020":12,"_2021":12,"_2037":1,"_2046":1,"_2059":1},"__typename":"DashboardPeople"}')}}]);