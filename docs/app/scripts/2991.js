"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[2991,977,1327,5298],{93871:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(60288);function a(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},86688:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(72797);r.Component;const l=e=>class extends r.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,r.createElement(a.Z,{from:t,style:{width:"100%"}},r.createElement(e,this.props))}}},36776:(e,t,n)=>{n.d(t,{Z:()=>r});const r={links_disabled:!1}},24186:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(14670),l=n(18463),i=n(51907),o=n(79912),s=n(951),c=n(94697),d=n(22318);class m extends r.Component{render(){var{classes:e,title:t,text:n,image:a,className:m,style:u,actions:p,imageHeight:f,noImage:h}=this.props,g=0;return(u=u||{}).display="flex",u.flexDirection="column",a=a||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",r.createElement(l.Z,{className:m,style:u},r.createElement(c.Z,{title:r.createElement(d.Z,{noWrap:!0,variant:"h6",component:"h4"},t),style:{display:"block",overflow:"hidden"}}),!h&&r.createElement(s.Z,{className:e.media,height:f||null,image:a}),n&&""!==n.trim&&r.createElement(o.Z,{style:{flex:1}},n),r.createElement(i.Z,null,p&&p.map((e=>r.createElement("div",{key:g++},e)))))}}const u=(0,a.Z)((e=>({media:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"}})))(m)},93268:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(26447);function l(e){return r.createElement(a.Z,{sx:{padding:{sm:"0rem 2rem 3rem 2rem",lg:"0rem 4rem 3rem 4rem"}}},e.children)}},80383:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86688),l=n(41749);class i extends r.Component{render(){var{direction:e,spacing:t,className:n,justify:a,alignItems:i,style:o,flex:s}=this.props,t=t||0;return o=o||{},s&&(o.display="flex"),r.createElement(l.Z,{container:!0,direction:e,justifyContent:a,alignItems:i,className:n,spacing:t,style:o},this.props.children)}}const o=(0,a.Z)(i)},81648:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86688),l=n(41749);class i extends r.Component{render(){var{visible:e,className:t,xs:n,sm:a,md:i,style:o,fill:s,flex:c,center:d}=this.props;e=e||!0;var m={...o};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,s&&(m.width="100%"),c&&(m.flex=1),e&&r.createElement(l.Z,{className:t,item:!0,xs:n,sm:a,md:i,style:m},this.props.children)}}const o=(0,a.Z)(i)},83347:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(12613),l=n(86688);class i extends r.Component{render(){var{xs:e,sm:t,md:n,lg:l,xl:i}=this.props;return e=e||null,t=t||e,n=n||t,l=l||n,i=i||l,r.createElement("div",{style:{width:"100%"}},r.createElement(a.Z,{only:["sm","md","lg","xl"]},e),r.createElement(a.Z,{only:["xs","md","lg","xl"]},t),r.createElement(a.Z,{only:["xs","sm","lg","xl"]},n),r.createElement(a.Z,{only:["xs","sm","md","xl"]},l),r.createElement(a.Z,{only:["xs","sm","md","lg"]},i))}}const o=(0,l.Z)(i)},87558:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(73727),l=n(36776);class i extends r.Component{render(){var{children:e,className:t,to:n,href:i,style:o,external:s}=this.props;if(e=(n=(n=n||i)||"http://localhost")?e:"NO LINK DEFINED",o=o||{},n&&"string"!=typeof n)return"INVALID URL";const c=!((s=!0===s)||n&&0===n.indexOf("http")),d=c?"_self":"_blank";return 0==(0===n.indexOf("#"))&&1==c&&0==l.Z.links_disabled?r.createElement(a.OL,{className:t,to:n,style:o},e):r.createElement("a",{className:t,href:n,style:o,target:d},e)}}const o=i},97236:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(87558);n(36776);class l extends r.Component{render(){var{children:e,className:t,to:n,href:l,border:i,style:o,external:s}=this.props;return e=(n=(n=n||l)||"http://localhost")?e:"NO LINK DEFINED",i=!0===i||"true"===i?"text-link":"",(o=o||{}).padding=o.padding?o.padding:"0.5rem 0.75rem",t=`${i} ${t||""}`,s=!0===s,r.createElement(a.Z,{className:t,to:n,style:o,external:s},e)}}const i=l},70227:(e,t,n)=>{n(67294)},76249:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(67294),a=n(87558);const l=function(e){const{id:t,entity:n,children:l}=e;return r.createElement(a.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(n)}`},l)}},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(67294),a=n(58524);n(80383),n(81648),n(70227);const l=(0,a.ZP)("div")({}),i=(0,a.ZP)("div")({}),o=(0,a.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),s=(0,a.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),c=(0,a.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),d=(0,a.ZP)("h4")({margin:0}),m=(0,a.ZP)("h5")({margin:"1rem 0 1rem 0",padding:"0"}),u=(0,a.ZP)("h6")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",fontWeight:400}),p=(0,a.ZP)("div")({fontSize:"0.85rem"}),f=(0,a.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"});function h(e){var{data:t}=e;return t&&0!=t.length?!0===e.mini?function(e,t){var{year:n,all:a}=e,l=a?t.length:2;n=parseInt(n);return r.createElement(o,null,t&&t.length>0&&t.slice(0,l).map(((e,t)=>(e=>!n||e.year==n)(e)&&r.createElement("div",{key:t},r.createElement(s,null,e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category)))),!a&&t&&t.length>l&&r.createElement(s,null,r.createElement(s,null,r.createElement(c,null,"and ",t.length-l," more"))))}(e,t):function(e,t){var n=null,a=null;const{year:o}=e;return r.createElement(l,null,r.createElement(d,null,"Awards"),t&&t.length>0&&t.map(((e,t)=>r.createElement("div",{key:t},(e=>n&&n==e.year?null:(n=e.year,a=null,r.createElement(m,null,e.year)))(e),(e=>a&&a==e.name?null:(a=e.name,r.createElement(u,null,e.name)))(e),r.createElement(i,null,r.createElement(f,null,"false"===e.won||!1===e.won?"nominee":"winner"),r.createElement(p,null,e.category))))))}(e,t):null}},89921:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(26447),l=n(91355);const i=(0,n(30977).default)((function(e){return r.createElement(a.Z,null,r.createElement(l.default,e))}))},30977:(e,t,n)=>{n.r(t),n.d(t,{QRY:()=>o,default:()=>s});var r=n(67294),a=n(54397),l=n(70846);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const o=a.Ps`
  query getStory($page: Int)
{
  storiesPodcastMusic(page: $page) {
    id
    title
    link
    image
  }
}
`,s=e=>function(t){var{route:n}=t,a=(n=n||{}).page?n.page:1,s=t.data?{}:(0,l.a)(o,{variables:{page:parseInt(a)}}),c=t.data?t.data:s.data?s.data.storiesPodcastMusic:null;return r.createElement(e,i({},t,s,{data:c}))}},91355:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(67294),a=n(58524),l=n(80383),i=n(81648),o=n(37206),s=n(79895),c=n(26447),d=n(28973),m=n(29019);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const p=(0,a.ZP)("div")({padding:"0.5rem"}),f=(0,a.ZP)("div")({padding:"0.5rem"});function h(e){var{data:t,loading:n}=e;return n=n||!t||0==t.length,t=t&&t.length>0?t:[1,2,3,4,5],r.createElement(p,null,r.createElement(m.default,u({},e,{url:"/podcasts/stories/music"}),r.createElement(l.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t.map(((e,t)=>r.createElement(i.Z,{key:t,xs:12,sm:6,md:6,lg:4},r.createElement(f,null,n?r.createElement(g,null):r.createElement(v,{data:e}))))))))}function g(){return r.createElement(s.Z,{style:{padding:"0.5rem"}},r.createElement(c.Z,{spacing:1},r.createElement(d.Z,{variant:"text",width:"80%"}),r.createElement(d.Z,{variant:"rectangular",height:240}),r.createElement(d.Z,{variant:"text"})))}function v({data:e}){return r.createElement(o.default,u({full:!0},e))}},37206:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294),a=n(24186),l=n(76249);function i(e){const{id:t,title:n,awards:i,full:o,image:s,description:c}=e;return r.createElement(l.default,{id:t,entity:n},r.createElement(a.Z,{image:s,imageHeight:100,text:c,title:n}))}n(80607)},95479:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(67294),a=n(93268),l=n(80383),i=n(81648),o=n(89921),s=n(61400);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const d=function(e){return r.createElement(a.Z,null,r.createElement(l.Z,{className:"page-module",fill:!0},r.createElement(i.Z,{xs:12,sm:12,md:9,lg:10,style:{paddingRight:"1rem"}},r.createElement(o.default,e)),r.createElement(i.Z,{xs:12,sm:12,md:3,lg:2,style:{paddingRight:"1rem"}},r.createElement(s.default,c({},e,{filter:"podcast_music"})))))}},23057:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(93268),l=n(89921),i=n(61400);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const s=function(e){return r.createElement(a.Z,null,r.createElement(l.default,e),r.createElement(i.default,o({},e,{filter:"podcast_music"})))}},85237:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=n(83347),l=n(23057),i=n(95479);function o(e){return r.createElement(a.Z,{xs:r.createElement(l.default,e),md:r.createElement(i.default,e)})}},94492:(e,t,n)=>{n.r(t),n.d(t,{Controls:()=>s,Loading:()=>o,default:()=>l});var r=n(85237);const a=JSON.parse('[{"id":"0005ab14-ea88-3038-b82c-86366713e96a","title":"Steven Redant\'s Podcast","link":null,"image":"https://assets.podomatic.net/ts/b8/34/09/stevenredant/pro/1400x1400_9971074.jpg","__typename":"StoryPodcast"},{"id":"002f4ad4-f714-353a-b4e1-dff07ecfa456","title":"Gilles Peterson","link":null,"image":"http://az592690.vo.msecnd.net/media/channels/gillespetersonww/images/original/gillespeterson_logo-square-thumb-e1352205457791.jpg","__typename":"StoryPodcast"},{"id":"00348695-e40c-3af6-b964-f896d2f02b11","title":"No Entries","link":null,"image":"http://static.castfire.com/media/aol/podcasts/music_theinterface_podcast.jpg","__typename":"StoryPodcast"},{"id":"00355961-473b-3b24-8baa-7fa4fbcfca53","title":"Tommy Trash - Trashed Podcast","link":"http://trashedradiopodcast.libsyn.com/","image":"http://static.libsyn.com/p/assets/5/9/9/1/599127c24189eabe/trashe_podcast_01.jpg","__typename":"StoryPodcast"},{"id":"0035f757-3204-3723-8567-ba701a5903e8","title":"The Brutal Backhand","link":null,"image":"http://brutalbackhand.com/files/BB-Miguel_100_white.jpg","__typename":"StoryPodcast"},{"id":"005ab174-06ec-3595-a740-6df586de137f","title":"Stoneface and Terminal Reflected Broadcast","link":"http://www.stoneface-terminal.de","image":"http://www.stoneface-terminal.de/podcast/Itunes-Profil-BeDifferent-ES.jpg","__typename":"StoryPodcast"},{"id":"0068f776-9b73-3af8-a2c1-de6f03679820","title":"Music Mondays with Chris Millz (Outside The Boom Box)","link":null,"image":"http://s13.postimage.org/p4sup5a0n/Music_Mondays_Logo.png","__typename":"StoryPodcast"},{"id":"00773642-ee69-34f6-9dc5-0bb3590e9c82","title":"Soundcheck from WNYC","link":null,"image":"https://media2.wnyc.org/i/1400/1400/l/80/1/wn16_wnycstudios_Soundcheck.jpg","__typename":"StoryPodcast"},{"id":"00a0b9af-dead-31b4-b9a9-fcf47959d45e","title":"Violin Geek Podcast","link":"http://www.laurelthomsen.com","image":"http://www.laurelthomsen.com/Podcast/violin%20geek%20podcast%20image%202.jpg","__typename":"StoryPodcast"},{"id":"00cd03e4-977b-3953-a94e-4848a143fa17","title":"ROOM84 PODCAST","link":"http://www.room84.ch","image":"http://www.room84.ch/ITUNES_LOGO_2.png","__typename":"StoryPodcast"}]'),l={title:"Project/Stories/Podcast-Music/Page"},i=e=>React.createElement(r.default,e),o=i.bind({});o.args={loading:!0};const s=i.bind({});s.args={data:a}},29019:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),a=n(58524),l=n(5977),i=n(26447),o=n(72642);const s=(0,a.ZP)("h3")({marginTop:0});function c(e){const t=(0,l.k6)(),{children:n,route:a,loading:c,data:d,url:m,skeleton:u}=e,p=a&&a.page?parseInt(a.page):1,f=e=>{var n=`${m}/${e}`;t.push(n),window.scrollTo(0,0)},h=d&&d.length<10,g=1==p;return r.createElement(r.Fragment,null,d&&d.length>0?r.createElement(i.Z,{spacing:2},n,r.createElement(i.Z,{direction:"row",spacing:2,justifyContent:"center"},r.createElement(o.Z,{variant:"outlined",disabled:g,onClick:()=>f(p-1)},"Back"),r.createElement(o.Z,{variant:"outlined",disabled:h,onClick:()=>f(p+1)},"Next"))):r.createElement(s,null,c?u||"loading":"No results"))}},61400:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(58524),l=n(75298),i=n(36501),o=n(97236);const s=(0,a.ZP)("div")({padding:"0.85rem"}),c=(0,a.ZP)("div")({fontSize:"1.5rem",paddingBottom:"0.5rem"}),d=(0,a.ZP)("div")({fontSize:"0.9rem"}),m=function(e){const{filter:t}=e,n=l.default.getBy(t);return r.createElement(i.Z,null,r.createElement(s,null,r.createElement(c,null,"Stories"),n.map(((e,t)=>r.createElement(d,{key:t},r.createElement(o.Z,{href:e.url},e.title))))))}},75298:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const r=[{id:"movies",title:"Movies",url:"/movies",tags:["tv","awards"]},{id:"awards",title:"Awards",url:"/stories/awards",tags:["movies","people","tv"]},{id:"people",title:"People",url:"/people",tags:["awards"]},{id:"podcasts",title:"Podcasts",url:"/podcasts",tags:["podcast_music"]},{id:"podcast_music",title:"Music Podcasts",url:"/podcasts/stories/music",tags:["podcasts"]}],a=new class{constructor(){}getBy(e){const t=[];return r.forEach((n=>{n.id!==e&&n.tags.includes(e)&&t.push(n)})),t}}},86010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})},94537:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(63366),a=n(87462),l=n(97326),i=n(51721),o=(n(45697),n(67294)),s=n(220);function c(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function d(e,t,n){return null!=n[t]?n[t]:e.props[t]}function m(e,t,n){var r=c(e.children),a=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,a=Object.create(null),l=[];for(var i in e)i in t?l.length&&(a[i]=l,l=[]):l.push(i);var o={};for(var s in t){if(a[s])for(r=0;r<a[s].length;r++){var c=a[s][r];o[a[s][r]]=n(c)}o[s]=n(s)}for(r=0;r<l.length;r++)o[l[r]]=n(l[r]);return o}(t,r);return Object.keys(a).forEach((function(l){var i=a[l];if((0,o.isValidElement)(i)){var s=l in t,c=l in r,m=t[l],u=(0,o.isValidElement)(m)&&!m.props.in;!c||s&&!u?c||!s||u?c&&s&&(0,o.isValidElement)(m)&&(a[l]=(0,o.cloneElement)(i,{onExited:n.bind(null,i),in:m.props.in,exit:d(i,"exit",e),enter:d(i,"enter",e)})):a[l]=(0,o.cloneElement)(i,{in:!1}):a[l]=(0,o.cloneElement)(i,{onExited:n.bind(null,i),in:!0,exit:d(i,"exit",e),enter:d(i,"enter",e)})}})),a}var u=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},p=function(e){function t(t,n){var r,a=(r=e.call(this,t,n)||this).handleExited.bind((0,l.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},r}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,a=t.children,l=t.handleExited;return{children:t.firstRender?(n=e,r=l,c(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:d(e,"appear",n),enter:d(e,"enter",n),exit:d(e,"exit",n)})}))):m(e,a,l),firstRender:!1}},n.handleExited=function(e,t){var n=c(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,a.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=(0,r.Z)(e,["component","childFactory"]),l=this.state.contextValue,i=u(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?o.createElement(s.Z.Provider,{value:l},i):o.createElement(s.Z.Provider,{value:l},o.createElement(t,a,i))},t}(o.Component);p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};const f=p},220:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(null)}}]);