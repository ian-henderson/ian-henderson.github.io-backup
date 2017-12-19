webpackJsonp([35783957827783],{94:function(e,t,n){"use strict";function o(e){return e}function r(e,t,n){function r(e,t){var n=N.hasOwnProperty(t)?N[t]:null;b.hasOwnProperty(t)&&c("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&c("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){c("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),c(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,a=o.__reactAutoBindPairs;n.hasOwnProperty(u)&&_.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==u){var s=n[i],l=o.hasOwnProperty(i);if(r(l,i),_.hasOwnProperty(i))_[i](e,s);else{var p=N.hasOwnProperty(i),m="function"==typeof s,h=m&&!p&&!l&&n.autobind!==!1;if(h)a.push(i,s),o[i]=s;else if(l){var E=N[i];c(p&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,i),"DEFINE_MANY_MERGED"===E?o[i]=f(o[i],s):"DEFINE_MANY"===E&&(o[i]=d(o[i],s))}else o[i]=s}}}else;}function l(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in _;c(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;c(!a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=o}}}function p(e,t){c(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(c(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=m(e,r)}}function E(e){var t=o(function(e,o,r){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;c("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new D,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(a.bind(null,t)),a(t,v),a(t,e),a(t,g),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),c(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in N)t.prototype[r]||(t.prototype[r]=null);return t}var y=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},_={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){l(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},g={componentWillUnmount:function(){this.__isMounted=!1}},b={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},D=function(){};return i(D.prototype,e.prototype,b),E}var a,i=n(2),s=n(34),c=n(1),u="mixins";a={},e.exports=r},2:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,s,c=n(e),u=1;u<arguments.length;u++){o=Object(arguments[u]);for(var l in o)a.call(o,l)&&(c[l]=o[l]);if(r){s=r(o);for(var p=0;p<s.length;p++)i.call(o,s[p])&&(c[s[p]]=o[s[p]])}}return c}},308:function(e,t){},229:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(5),a=o(r);n(308);var i=function(e){return a.default.createElement("div",{id:"fullscreen-hero",className:"home-hero"},a.default.createElement("div",{className:"hero-container"},a.default.createElement("div",{className:"hero-content"},a.default.createElement("div",{id:"logo-container"},a.default.createElement("i",{id:"logo",className:"fas fa-code"})),a.default.createElement("h1",null,"Hi, I'm  Ian. I build software for the web."),a.default.createElement("div",{className:"buttons"},a.default.createElement("a",{href:"#"},a.default.createElement("button",null,"Yes, I'm available for hire"))),a.default.createElement("div",{className:"learn-more"},a.default.createElement("a",{href:"#"},"Learn more about what I do",a.default.createElement("br",null),a.default.createElement("i",{id:"learn-more-chevron",className:"fas fa-chevron-down"}))))))};t.default=i,e.exports=t.default},232:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(5),a=o(r),i=n(229),s=o(i),c=function(){return a.default.createElement("div",null,a.default.createElement(s.default,null))};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-b8a9447fc6843e652bf3.js.map