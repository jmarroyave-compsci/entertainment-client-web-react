"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[2753],{22753:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(67294),o=r(45697),c=r.n(o),u=r(92077),l=r.n(u);const a=function(e){var t=e.value,r=""===(t=t||0)?"":l()(Number(t)).format("0a");return n.createElement("span",null,r.toUpperCase())};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,r,o,c,u=(o=l,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(o);if(c){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return y(this,e)});function l(){return f(this,l),u.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){var e=this.props,t=e.title,r=e.data,o=e.smaller,c=e.type;return n.createElement("div",{className:"indicador"},n.createElement("div",{className:"row title",style:{textAlign:"left"}},n.createElement("div",{className:"title"},t)),n.createElement("div",{className:"row"},n.createElement("div",{className:"content ".concat(o?"small":"")},n.createElement("div",null,this.renderType(c,r)))))}},{key:"renderType",value:function(e,t){switch(e){case"number":return n.createElement(a,{value:t});case"string":return t}}}])&&s(t.prototype,r),l}(n.Component);const d=b;b.propTypes={title:c().string,type:c().oneOf(["number","string"]),smaller:c().bool},b.defaultProps={title:"title",data:null,type:"number",smaller:!1}}}]);