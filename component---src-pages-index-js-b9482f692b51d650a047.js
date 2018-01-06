webpackJsonp([35783957827783],{94:function(e,t,a){"use strict";function n(e){return e}function r(e,t,a){function r(e,t){var a=y.hasOwnProperty(t)?y[t]:null;_.hasOwnProperty(t)&&s("OVERRIDE_BASE"===a,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===a||"DEFINE_MANY_MERGED"===a,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function o(e,a){if(a){s("function"!=typeof a,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(a),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype,o=n.__reactAutoBindPairs;a.hasOwnProperty(c)&&b.mixins(e,a.mixins);for(var i in a)if(a.hasOwnProperty(i)&&i!==c){var l=a[i],u=n.hasOwnProperty(i);if(r(u,i),b.hasOwnProperty(i))b[i](e,l);else{var d=y.hasOwnProperty(i),m="function"==typeof l,h=m&&!d&&!u&&a.autobind!==!1;if(h)o.push(i,l),n[i]=l;else if(u){var E=y[i];s(d&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,i),"DEFINE_MANY_MERGED"===E?n[i]=f(n[i],l):"DEFINE_MANY"===E&&(n[i]=p(n[i],l))}else n[i]=l}}}else;}function u(e,t){if(t)for(var a in t){var n=t[a];if(t.hasOwnProperty(a)){var r=a in b;s(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',a);var o=a in e;s(!o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",a),e[a]=n}}}function d(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var a in t)t.hasOwnProperty(a)&&(s(void 0===e[a],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",a),e[a]=t[a]);return e}function f(e,t){return function(){var a=e.apply(this,arguments),n=t.apply(this,arguments);if(null==a)return n;if(null==n)return a;var r={};return d(r,a),d(r,n),r}}function p(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var a=t.bind(e);return a}function h(e){for(var t=e.__reactAutoBindPairs,a=0;a<t.length;a+=2){var n=t[a],r=t[a+1];e[n]=m(e,r)}}function E(e){var t=n(function(e,n,r){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=n,this.refs=l,this.updater=r||a,this.state=null;var o=this.getInitialState?this.getInitialState():null;s("object"==typeof o&&!Array.isArray(o),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=o});t.prototype=new x,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(o.bind(null,t)),o(t,N),o(t,e),o(t,v),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in y)t.prototype[r]||(t.prototype[r]=null);return t}var g=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var a=0;a<t.length;a++)o(e,t[a])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},N={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},x=function(){};return i(x.prototype,e.prototype,_),E}var o,i=a(2),l=a(34),s=a(1),c="mixins";o={},e.exports=r},2:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,l,s=a(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var u in n)o.call(n,u)&&(s[u]=n[u]);if(r){l=r(n);for(var d=0;d<l.length;d++)i.call(n,l[d])&&(s[l[d]]=n[l[d]])}}return s}},308:function(e,t){},229:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(5),s=n(l);a(308);var c=function(e){var t="slide";return e.active&&(t+=" slide-active"),s.default.createElement("div",{className:t},s.default.createElement("div",{className:"image-container"},s.default.createElement("button",{className:"slide-button previous",onClick:e.handlePrevious},s.default.createElement("i",{className:"fas fa-angle-left"})),s.default.createElement("a",{href:"https://reddit-reactjs.herokuapp.com",target:"_blank"},s.default.createElement("img",{src:e.imagePath,alt:e.title})),s.default.createElement("button",{className:"slide-button next",onClick:e.handleNext},s.default.createElement("i",{className:"fas fa-angle-right"}))),s.default.createElement("p",{className:"slide-description"},e.title))},u=function(e){function t(a){r(this,t);var n=o(this,e.call(this,a));return n.state={currentSlide:0},n.handleNext=n.handleNext.bind(n),n.handlePrevious=n.handlePrevious.bind(n),n}return i(t,e),t.prototype.handleNext=function(){this.setState({currentSlide:(this.state.currentSlide+1)%this.props.data.length})},t.prototype.handlePrevious=function(){0===this.state.currentSlide?this.setState({currentSlide:this.props.data.length-1}):this.setState({currentSlide:this.state.currentSlide-1})},t.prototype.render=function(){var e=this;return s.default.createElement("div",{className:"slide-show"},this.props.data.map(function(t,a){return s.default.createElement(c,{active:e.state.currentSlide===a,key:a,imagePath:t.path,title:t.title,handleNext:e.handleNext,handlePrevious:e.handlePrevious})}))},t}(s.default.PureComponent);t.default=u,e.exports=t.default},565:function(e,t,a){e.exports=a.p+"static/homeAndRedux.1187ac70.png"},566:function(e,t,a){e.exports=a.p+"static/listings.090a8cb1.gif"},567:function(e,t,a){e.exports=a.p+"static/loginAndRedux.0330030c.png"},568:function(e,t,a){e.exports=a.p+"static/redditRequestForPermission.d9f7cc25.png"},324:function(e,t,a){e.exports=a.p+"static/resume.70face36.pdf"},569:function(e,t,a){e.exports=a.p+"static/subredditAndRedux.d01f76ce.png"},310:function(e,t){},232:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(5),o=n(r),i=a(229),l=n(i),s=a(324),c=n(s),u=a(565),d=n(u),f=a(566),p=n(f),m=a(567),h=n(m),E=a(568),g=n(E),y=a(569),b=n(y);a(310);var N=[{iconClass:"fas fa-code",title:"Front End",summary:"In depth knowledge of CSS3, HTML5, Responsive Web Design, JavaScript, React & Redux libraries."},{iconClass:"fas fa-database",title:"Back End",summary:"Adept with PHP and Python back end frameworks including Laravel and Django. Versed in SQL and relational databases."},{iconClass:"fas fa-cogs",title:"Tool Set",summary:"Extensive experience with development tools including Heroku, Bash, Docker, Vagrant, Linux, Git, and Vim."}],v=[{path:h.default,title:"Login Page with Redux Devtools"},{path:g.default,title:"Reddit Request For Permission Page"},{path:p.default,title:"Endlessly Loading Data"},{path:d.default,title:"Home Page with Redux Devtools"},{path:b.default,title:"Subreddit Page with Redux Devtools"}],_=function(){return o.default.createElement("div",null,o.default.createElement("div",{id:"hero"},o.default.createElement("div",{className:"hero-container"},o.default.createElement("div",{className:"hero-content"},o.default.createElement("div",{id:"logo-container"},o.default.createElement("i",{id:"hero-logo",className:"fab fa-grav"})),o.default.createElement("h1",{id:"hero-header"},"Ian Henderson"),o.default.createElement("p",{id:"hero-subheader",className:"statement"},"Software Engineer"),o.default.createElement("a",{target:"_blank",href:c.default},o.default.createElement("button",{id:"hero-button"},"Yes, I'm available for hire")),o.default.createElement("div",{className:"learn-more-container"},o.default.createElement("a",{id:"learn-more-link",href:"#me"},"Learn more about what I do",o.default.createElement("br",null),o.default.createElement("i",{id:"learn-more-chevron",className:"fas fa-chevron-down"})))))),o.default.createElement("section",{id:"me"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{id:"me-header-container"},o.default.createElement("p",{className:"intro"},"My Expertise"),o.default.createElement("p",{className:"statement"},"These are the areas I have the most experience in.",o.default.createElement("br",null),"Picking up new languages and frameworks isn't a problem.")),o.default.createElement("div",null,N.map(function(e,t){return o.default.createElement("div",{key:t,className:"column"},o.default.createElement("div",{className:"expertise-block"},o.default.createElement("i",{className:e.iconClass+" expertise-logo"}),o.default.createElement("h4",{className:"expertise-title"},e.title),o.default.createElement("p",{className:"expertise-summary"},e.summary)))})))),o.default.createElement("section",{id:"personal-projects"},o.default.createElement("div",{className:"container"},o.default.createElement("div",null,o.default.createElement("p",{className:"intro"},"Personal Projects"),o.default.createElement("p",{className:"statement"},"When I'm not freelancing, I'm working on digital products.")),o.default.createElement("div",null,o.default.createElement("div",{className:"expertise-block"},o.default.createElement("p",{className:"intro"},o.default.createElement("a",{target:"_blank",href:"https://github.com/ian-henderson/reddit"},"Reddit Browser")),o.default.createElement("p",{className:"description-container"},"A progressive web app for Reddit. It consumes Reddit's API to minimally present subreddit data with endlessly scrolling feeds."),o.default.createElement(l.default,{data:v}))))),o.default.createElement("section",{id:"sub-footer"},o.default.createElement("div",{className:"container"},o.default.createElement("div",null,o.default.createElement("p",{className:"intro"},"Want to work together?"),o.default.createElement("p",{className:"statement"},"I'm currently on the job hunt; feel free to reach out."),o.default.createElement("a",{href:"mailto:iancurtish@gmail.com?subject=Work"},o.default.createElement("button",null,"get started"))))),o.default.createElement("footer",null,o.default.createElement("div",{className:"container"},o.default.createElement("div",null,o.default.createElement("div",{className:"footer-logo-container"},o.default.createElement("i",{className:"fab fa-grav footer-logo"})),o.default.createElement("p",{className:"made-by-me"},"Handmade by me © 2018."),o.default.createElement("div",{className:"social-logos-container"},o.default.createElement("a",{target:"_blank",href:"https://github.com/ian-henderson"},o.default.createElement("i",{className:"fab fa-github-alt social-logo"})),o.default.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/iancurtish/"},o.default.createElement("i",{className:"fab fa-linkedin social-logo"})),o.default.createElement("a",{target:"_blank",href:"https://twitter.com/iancurtish"},o.default.createElement("i",{className:"fab fa-twitter social-logo"})))))))};t.default=_,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-b9482f692b51d650a047.js.map