(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4211],{42081:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});n(67294);var r=n(4942),i=n(66093),o=n(85893);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){return(0,o.jsx)(i.Z,a(a({},e),{},{render:"page"}))},c=function(e){return(0,o.jsx)(s,{breadcrumbs:"/about/project/roadmap"})}},46242:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/roadmap",function(){return n(42081)}])},37680:function(){},70131:function(e,t,n){"use strict";n.r(t),n.d(t,{InView:function(){return d},observe:function(){return c},useInView:function(){return f}});var r=n(67294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=new Map,l=new WeakMap,a=0;function s(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(l.has(n)||(a+=1,l.set(n,a.toString())),l.get(n)):"0":e[t]);var n})).toString()}function c(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=s(e),n=o.get(t);if(!n){var r,i=new Map,l=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);r=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:i},o.set(t,n)}return n}(n),i=r.id,l=r.observer,a=r.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),l.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),l.unobserve(e)),0===a.size&&(l.disconnect(),o.delete(i))}}function u(e){return"function"!==typeof e.children}var d=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=o.prototype;return l.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},l.componentWillUnmount=function(){this.unobserve(),this.node=null},l.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,o=e.delay;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o})}},l.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},l.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var o=this.props,l=o.children,a=o.as,s=o.tag,c=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,r.createElement)(a||s||"div",i({ref:this.handleNode},c),l)},o}(r.Component);function f(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,o=t.trackVisibility,l=t.rootMargin,a=t.root,s=t.triggerOnce,u=t.skip,d=t.initialInView,f=(0,r.useRef)(),p=(0,r.useState)({inView:!!d}),h=p[0],m=p[1],v=(0,r.useCallback)((function(e){void 0!==f.current&&(f.current(),f.current=void 0),u||e&&(f.current=c(e,(function(e,t){m({inView:e,entry:t}),t.isIntersecting&&s&&f.current&&(f.current(),f.current=void 0)}),{root:a,rootMargin:l,threshold:n,trackVisibility:o,delay:i}))}),[Array.isArray(n)?n.toString():n,a,l,s,u,o,i]);(0,r.useEffect)((function(){f.current||!h.entry||s||u||m({inView:!!d})}));var y=[v,h.inView,h.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}d.displayName="InView",d.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1},t.default=d},38940:function(e,t,n){"use strict";t.Z=void 0;var r=l(n(67294)),i=l(n(45697)),o=l(n(94184));function l(e){return e&&e.__esModule?e:{default:e}}const a=({animate:e,className:t,layout:n,children:i})=>r.default.createElement("div",{className:(0,o.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":"2-columns"===n,"vertical-timeline--one-column-left":"1-column"===n||"1-column-left"===n,"vertical-timeline--one-column-right":"1-column-right"===n})},i);a.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]).isRequired,className:i.default.string,animate:i.default.bool,layout:i.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"])},a.defaultProps={animate:!0,className:"",layout:"2-columns"};var s=a;t.Z=s},47509:function(e,t,n){"use strict";t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(94184)),l=n(70131);function a(e){return e&&e.__esModule?e:{default:e}}const s=({children:e,className:t,contentArrowStyle:n,contentStyle:i,date:a,dateClassName:s,icon:c,iconClassName:u,iconOnClick:d,onTimelineElementClick:f,iconStyle:p,id:h,position:m,style:v,textClassName:y,intersectionObserverProps:b,visible:g})=>r.default.createElement(l.InView,b,(({inView:l,ref:b})=>r.default.createElement("div",{ref:b,id:h,className:(0,o.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===m,"vertical-timeline-element--right":"right"===m,"vertical-timeline-element--no-children":""===e}),style:v},r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:p,onClick:d,className:(0,o.default)(u,"vertical-timeline-element-icon",{"bounce-in":l||g,"is-hidden":!(l||g)})},c),r.default.createElement("div",{style:i,onClick:f,className:(0,o.default)(y,"vertical-timeline-element-content",{"bounce-in":l||g,"is-hidden":!(l||g)})},r.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),e,r.default.createElement("span",{className:(0,o.default)(s,"vertical-timeline-element-date")},a))))));s.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),className:i.default.string,contentArrowStyle:i.default.shape({}),contentStyle:i.default.shape({}),date:i.default.node,dateClassName:i.default.string,icon:i.default.element,iconClassName:i.default.string,iconStyle:i.default.shape({}),iconOnClick:i.default.func,onTimelineElementClick:i.default.func,id:i.default.string,position:i.default.string,style:i.default.shape({}),textClassName:i.default.string,visible:i.default.bool,intersectionObserverProps:i.default.shape({root:i.default.object,rootMargin:i.default.string,threshold:i.default.number,triggerOnce:i.default.bool})},s.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px"}};var c=s;t.Z=c},14313:function(e,t,n){"use strict";e.exports={VerticalTimeline:n(38940).Z,VerticalTimelineElement:n(47509).Z}}},function(e){e.O(0,[7146,4197,6093,9774,2888,179],(function(){return t=46242,e(e.s=t);var t}));var t=e.O();_N_E=t}]);