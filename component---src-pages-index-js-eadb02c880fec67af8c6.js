webpackJsonp([35783957827783],{94:function(e,t,a){"use strict";function n(e){return e}function r(e,t,a){function r(e,t){var a=y.hasOwnProperty(t)?y[t]:null;_.hasOwnProperty(t)&&l("OVERRIDE_BASE"===a,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===a||"DEFINE_MANY_MERGED"===a,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function o(e,a){if(a){l("function"!=typeof a,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(a),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype,o=n.__reactAutoBindPairs;a.hasOwnProperty(c)&&N.mixins(e,a.mixins);for(var i in a)if(a.hasOwnProperty(i)&&i!==c){var s=a[i],u=n.hasOwnProperty(i);if(r(u,i),N.hasOwnProperty(i))N[i](e,s);else{var f=y.hasOwnProperty(i),p="function"==typeof s,h=p&&!f&&!u&&a.autobind!==!1;if(h)o.push(i,s),n[i]=s;else if(u){var E=y[i];l(f&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,i),"DEFINE_MANY_MERGED"===E?n[i]=m(n[i],s):"DEFINE_MANY"===E&&(n[i]=d(n[i],s))}else n[i]=s}}}else;}function u(e,t){if(t)for(var a in t){var n=t[a];if(t.hasOwnProperty(a)){var r=a in N;l(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',a);var o=a in e;l(!o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",a),e[a]=n}}}function f(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var a in t)t.hasOwnProperty(a)&&(l(void 0===e[a],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",a),e[a]=t[a]);return e}function m(e,t){return function(){var a=e.apply(this,arguments),n=t.apply(this,arguments);if(null==a)return n;if(null==n)return a;var r={};return f(r,a),f(r,n),r}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function p(e,t){var a=t.bind(e);return a}function h(e){for(var t=e.__reactAutoBindPairs,a=0;a<t.length;a+=2){var n=t[a],r=t[a+1];e[n]=p(e,r)}}function E(e){var t=n(function(e,n,r){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=n,this.refs=s,this.updater=r||a,this.state=null;var o=this.getInitialState?this.getInitialState():null;l("object"==typeof o&&!Array.isArray(o),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=o});t.prototype=new w,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(o.bind(null,t)),o(t,b),o(t,e),o(t,v),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in y)t.prototype[r]||(t.prototype[r]=null);return t}var g=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},N={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var a=0;a<t.length;a++)o(e,t[a])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=m(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},b={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},w=function(){};return i(w.prototype,e.prototype,_),E}var o,i=a(2),s=a(34),l=a(1),c="mixins";o={},e.exports=r},2:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,s,l=a(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var u in n)o.call(n,u)&&(l[u]=n[u]);if(r){s=r(n);for(var f=0;f<s.length;f++)i.call(n,s[f])&&(l[s[f]]=n[s[f]])}}return l}},563:function(e,t,a){e.exports=a.p+"static/redditScreenshot.455c5a38.png"},322:function(e,t,a){e.exports=a.p+"static/resume.70face36.pdf"},308:function(e,t){},231:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(5),o=n(r),i=a(563),s=n(i),l=a(322),c=n(l);a(308);var u=[{iconClass:"fas fa-code",title:"Front End",summary:"I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start."},{iconClass:"fas fa-database",title:"Back End",summary:"I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start."},{iconClass:"fas fa-pencil-alt",title:"???",summary:"I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start."}],f=function(){return o.default.createElement("div",null,o.default.createElement("div",{id:"hero"},o.default.createElement("div",{className:"hero-container"},o.default.createElement("div",{className:"hero-content"},o.default.createElement("div",{id:"logo-container"},o.default.createElement("i",{id:"hero-logo",className:"fab fa-grav"})),o.default.createElement("h1",{id:"hero-header"},"Ian Henderson"),o.default.createElement("p",{id:"hero-subheader",className:"statement"},"Software Engineer"),o.default.createElement("a",{href:"#sub-footer"},o.default.createElement("button",{id:"hero-button"},"Yes, I'm available for hire")),o.default.createElement("div",{className:"learn-more-container"},o.default.createElement("a",{id:"learn-more-link",href:"#me"},"Learn more about what I do",o.default.createElement("br",null),o.default.createElement("i",{id:"learn-more-chevron",className:"fas fa-chevron-down"})))))),o.default.createElement("section",{id:"me"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{id:"me-header-container"},o.default.createElement("p",{className:"intro"},"My Expertise"),o.default.createElement("p",{className:"statement"},"Full Stack Development")),o.default.createElement("div",null,u.map(function(e,t){return o.default.createElement("div",{className:"column"},o.default.createElement("div",{className:"expertise-block"},o.default.createElement("i",{className:e.iconClass+" expertise-logo"}),o.default.createElement("h4",{className:"expertise-title"},e.title),o.default.createElement("p",{className:"expertise-summary"},e.summary)))})))),o.default.createElement("section",{id:"personal-projects"},o.default.createElement("div",{className:"container"},o.default.createElement("div",null,o.default.createElement("p",{className:"intro"},"Personal Projects"),o.default.createElement("p",{className:"statement"},"When I'm not freelancing, I'm working on digital products.")),o.default.createElement("div",null,o.default.createElement("div",{className:"expertise-block"},o.default.createElement("a",{target:"_blank",href:"https://reddit-reactjs.herokuapp.com"},o.default.createElement("img",{src:s.default})),o.default.createElement("p",{className:"description-container"},o.default.createElement("a",{target:"_blank",href:"https://github.com/ian-henderson/reddit"},"Reddit Browser")," is platform that helps independent distributors of Young Living essential oils grow their business through automated class promotion and prospect follow-up management."))))),o.default.createElement("section",{id:"sub-footer"},o.default.createElement("div",{className:"container"},o.default.createElement("div",null,o.default.createElement("p",{className:"intro"},"Want to work together?"),o.default.createElement("p",{className:"statement"},"I'm currently on the job hunt; feel free to reach out."),o.default.createElement("a",{href:"mailto:iancurtish@gmail.com?subject=Work"},o.default.createElement("button",null,"get started"))))),o.default.createElement("footer",null,o.default.createElement("div",{className:"container"},o.default.createElement("div",null,o.default.createElement("div",{className:"footer-logo-container"},o.default.createElement("i",{className:"fab fa-grav footer-logo"})),o.default.createElement("p",{className:"made-by-me"},"Handmade by me © 2018."),o.default.createElement("div",{className:"social-logos-container"},o.default.createElement("a",{target:"_blank",href:"https://github.com/ian-henderson"},o.default.createElement("i",{className:"fab fa-github-alt social-logo"})),o.default.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/iancurtish/"},o.default.createElement("i",{className:"fab fa-linkedin social-logo"})),o.default.createElement("a",{target:"_blank",href:c.default},o.default.createElement("i",{className:"fas fa-file-alt"})),o.default.createElement("a",{target:"_blank",href:"https://twitter.com/iancurtish"},o.default.createElement("i",{className:"fab fa-twitter social-logo"})))))))};t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-eadb02c880fec67af8c6.js.map