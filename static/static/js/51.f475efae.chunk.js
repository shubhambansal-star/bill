/*! For license information please see 51.f475efae.chunk.js.LICENSE.txt */
(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[51],{1317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.XS="xs",r=t.S="s",o=t.L="l",i=t.XL="xl",s=(t.SIZES=[a,r,o,i],t.CONTRACT="contract"),l=t.CONTRACT_OVERLAY="contract-overlay",u=t.EXPAND_LEFT="expand-left",d=t.EXPAND_RIGHT="expand-right",c=t.EXPAND_UP="expand-up",p=t.EXPAND_DOWN="expand-down",f=t.SLIDE_LEFT="slide-left",h=t.SLIDE_RIGHT="slide-right",m=t.SLIDE_UP="slide-up",b=t.SLIDE_DOWN="slide-down",g=t.ZOOM_IN="zoom-in",F=t.ZOOM_OUT="zoom-out";t.STYLES=[s,l,u,d,c,p,f,h,m,b,g,F]},1991:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1317);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var r,o=n(1992),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=d(o),s=d(n(14)),l=d(n(1993)),u=n(1317);function d(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=["loading","progress"],h=function(e){function t(){var e,n,a;c(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=a=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.setNode=function(e){a.node=e},a.updateLaddaInstance=function(e){e.loading!==a.props.loading&&(e.loading?a.laddaInstance.start():e.disabled?a.laddaInstance.disable():a.laddaInstance.stop()),e.progress!==a.props.progress&&a.laddaInstance.setProgress(e.progress)},p(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.laddaInstance=l.default.create(this.node),this.props.loading&&this.laddaInstance.start(),"undefined"!==typeof this.props.progress&&this.laddaInstance.setProgress(this.props.progress)}},{key:"componentWillReceiveProps",value:function(e){this.updateLaddaInstance(e)}},{key:"componentWillUnmount",value:function(){this.laddaInstance.remove()}},{key:"render",value:function(){return i.default.createElement("button",a({},function(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}(this.props,f),{className:"ladda-button "+(this.props.className||""),ref:this.setNode,disabled:this.props.disabled||this.props.loading}),i.default.createElement("span",{className:"ladda-label"},this.props.children))}}]),t}(o.Component);h.propTypes={children:s.default.node,className:s.default.string,progress:s.default.number,loading:s.default.bool,disabled:s.default.bool,"data-color":s.default.string,"data-size":s.default.oneOf(u.SIZES),"data-style":s.default.oneOf(u.STYLES),"data-spinner-size":s.default.number,"data-spinner-color":s.default.string,"data-spinner-lines":s.default.number},t.default=h},1993:function(e,t,n){!function(t,a){"use strict";e.exports=function(e){var t=[];function n(n){if(void 0!==n){if(/ladda-button/i.test(n.className)||(n.className+=" ladda-button"),n.hasAttribute("data-style")||n.setAttribute("data-style","expand-right"),!n.querySelector(".ladda-label")){var a=document.createElement("span");a.className="ladda-label",r=n,o=a,(i=document.createRange()).selectNodeContents(r),i.surroundContents(o),r.appendChild(o)}var r,o,i,s,l,u=n.querySelector(".ladda-spinner");u||((u=document.createElement("span")).className="ladda-spinner"),n.appendChild(u);var d={start:function(){return s||(s=function(t){var n,a,r=t.offsetHeight;0===r&&(r=parseFloat(window.getComputedStyle(t).height)),r>32&&(r*=.8),t.hasAttribute("data-spinner-size")&&(r=parseInt(t.getAttribute("data-spinner-size"),10)),t.hasAttribute("data-spinner-color")&&(n=t.getAttribute("data-spinner-color")),t.hasAttribute("data-spinner-lines")&&(a=parseInt(t.getAttribute("data-spinner-lines"),10));var o=.2*r;return new e({color:n||"#fff",lines:a||12,radius:o,length:.6*o,width:o<7?2:3,zIndex:"auto",top:"auto",left:"auto",className:""})}(n)),n.disabled=!0,n.setAttribute("data-loading",""),clearTimeout(l),s.spin(u),this.setProgress(0),this},startAfter:function(e){return clearTimeout(l),l=setTimeout((function(){d.start()}),e),this},stop:function(){return d.isLoading()&&(n.disabled=!1,n.removeAttribute("data-loading")),clearTimeout(l),s&&(l=setTimeout((function(){s.stop()}),1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start()},setProgress:function(e){e=Math.max(Math.min(e,1),0);var t=n.querySelector(".ladda-progress");0===e&&t&&t.parentNode?t.parentNode.removeChild(t):(t||((t=document.createElement("div")).className="ladda-progress",n.appendChild(t)),t.style.width=(e||0)*n.offsetWidth+"px")},enable:function(){return this.stop()},disable:function(){return this.stop(),n.disabled=!0,this},isLoading:function(){return n.hasAttribute("data-loading")},remove:function(){clearTimeout(l),n.disabled=!1,n.removeAttribute("data-loading"),s&&(s.stop(),s=null),t.splice(t.indexOf(d),1)}};return t.push(d),d}console.warn("Ladda button target must be defined.")}function a(e,t){if("function"==typeof e.addEventListener){var a=n(e),r=-1;e.addEventListener("click",(function(){var n,o,i=!0,s=function(e,t){for(;e.parentNode&&e.tagName!==t;)e=e.parentNode;return t===e.tagName?e:void 0}(e,"FORM");if(void 0!==s&&!s.hasAttribute("novalidate"))if("function"==typeof s.checkValidity)i=s.checkValidity();else for(var l=(n=s,o=[],["input","textarea","select"].forEach((function(e){for(var t=n.getElementsByTagName(e),a=0;a<t.length;a++)t[a].hasAttribute("required")&&o.push(t[a])})),o),u=0;u<l.length;u++){var d=l[u],c=d.getAttribute("type");if(""===d.value.replace(/^\s+|\s+$/g,"")&&(i=!1),"checkbox"!==c&&"radio"!==c||d.checked||(i=!1),"email"===c&&(i=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(d.value)),"url"===c&&(i=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d.value)),!i)break}i&&(a.startAfter(1),"number"==typeof t.timeout&&(clearTimeout(r),r=setTimeout(a.stop,t.timeout)),"function"==typeof t.callback&&t.callback.apply(null,[a]))}),!1)}}return{bind:function(e,t){var n;if("string"==typeof e)n=document.querySelectorAll(e);else{if("object"!=typeof e)throw new Error("target must be string or object");n=[e]}t=t||{};for(var r=0;r<n.length;r++)a(n[r],t)},create:n,stopAll:function(){for(var e=0,n=t.length;e<n;e++)t[e].stop()}}}(n(1994))}()},1994:function(e,t,n){var a,r,o;o=function(){"use strict";var e,t,n=["webkit","Moz","ms","O"],a={};function r(e,t){var n,a=document.createElement(e||"div");for(n in t)a[n]=t[n];return a}function o(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function i(n,r,o,i){var s=["opacity",r,~~(100*n),o,i].join("-"),l=.01+o/i*100,u=Math.max(1-(1-n)/r*(100-l),n),d=e.substring(0,e.indexOf("Animation")).toLowerCase(),c=d&&"-"+d+"-"||"";return a[s]||(t.insertRule("@"+c+"keyframes "+s+"{0%{opacity:"+u+"}"+l+"%{opacity:"+n+"}"+(l+.01)+"%{opacity:1}"+(l+r)%100+"%{opacity:"+n+"}100%{opacity:"+u+"}}",t.cssRules.length),a[s]=1),s}function s(e,t){var a,r,o=e.style;if(void 0!==o[t=t.charAt(0).toUpperCase()+t.slice(1)])return t;for(r=0;r<n.length;r++)if(void 0!==o[a=n[r]+t])return a}function l(e,t){for(var n in t)e.style[s(e,n)||n]=t[n];return e}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)void 0===e[a]&&(e[a]=n[a])}return e}function d(e,t){return"string"==typeof e?e:e[t%e.length]}var c={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:1/4,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};function p(e){this.opts=u(e||{},p.defaults,c)}if(p.defaults={},u(p.prototype,{spin:function(t){this.stop();var n=this,a=n.opts,o=n.el=r(null,{className:a.className});if(l(o,{position:a.position,width:0,zIndex:a.zIndex,left:a.left,top:a.top}),t&&t.insertBefore(o,t.firstChild||null),o.setAttribute("role","progressbar"),n.lines(o,n.opts),!e){var i,s=0,u=(a.lines-1)*(1-a.direction)/2,d=a.fps,c=d/a.speed,p=(1-a.opacity)/(c*a.trail/100),f=c/a.lines;!function e(){s++;for(var t=0;t<a.lines;t++)i=Math.max(1-(s+(a.lines-t)*f)%c*p,a.opacity),n.opacity(o,t*a.direction+u,i,a);n.timeout=n.el&&setTimeout(e,~~(1e3/d))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(t,n){var a,s=0,u=(n.lines-1)*(1-n.direction)/2;function c(e,t){return l(r(),{position:"absolute",width:n.scale*(n.length+n.width)+"px",height:n.scale*n.width+"px",background:e,boxShadow:t,transformOrigin:"left",transform:"rotate("+~~(360/n.lines*s+n.rotate)+"deg) translate("+n.scale*n.radius+"px,0)",borderRadius:(n.corners*n.scale*n.width>>1)+"px"})}for(;s<n.lines;s++)a=l(r(),{position:"absolute",top:1+~(n.scale*n.width/2)+"px",transform:n.hwaccel?"translate3d(0,0,0)":"",opacity:n.opacity,animation:e&&i(n.opacity,n.trail,u+s*n.direction,n.lines)+" "+1/n.speed+"s linear infinite"}),n.shadow&&o(a,l(c("#000","0 0 4px #000"),{top:"2px"})),o(t,o(a,c(d(n.color,s),"0 0 1px rgba(0,0,0,.1)")));return t},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),"undefined"!==typeof document){t=function(){var e=r("style",{type:"text/css"});return o(document.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}();var f=l(r("group"),{behavior:"url(#default#VML)"});!s(f,"transform")&&f.adj?function(){function e(e,t){return r("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}t.addRule(".spin-vml","behavior:url(#default#VML)"),p.prototype.lines=function(t,n){var a=n.scale*(n.length+n.width),r=2*n.scale*a;function i(){return l(e("group",{coordsize:r+" "+r,coordorigin:-a+" "+-a}),{width:r,height:r})}var s,u=-(n.width+n.length)*n.scale*2+"px",c=l(i(),{position:"absolute",top:u,left:u});function p(t,r,s){o(c,o(l(i(),{rotation:360/n.lines*t+"deg",left:~~r}),o(l(e("roundrect",{arcsize:n.corners}),{width:a,height:n.scale*n.width,left:n.scale*n.radius,top:-n.scale*n.width>>1,filter:s}),e("fill",{color:d(n.color,t),opacity:n.opacity}),e("stroke",{opacity:0}))))}if(n.shadow)for(s=1;s<=n.lines;s++)p(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(s=1;s<=n.lines;s++)p(s);return o(t,c)},p.prototype.opacity=function(e,t,n,a){var r=e.firstChild;a=a.shadow&&a.lines||0,r&&t+a<r.childNodes.length&&(r=(r=(r=r.childNodes[t+a])&&r.firstChild)&&r.firstChild)&&(r.opacity=n)}}():e=s(f,"animation")}return p},e.exports?e.exports=o():void 0===(r="function"===typeof(a=o)?a.call(t,n,t,e):a)||(e.exports=r)},2177:function(e,t,n){"use strict";n.r(t);var a=n(50),r=n(8),o=n(9),i=n(15),s=n(16),l=n(0),u=n.n(l),d=n(103),c=n(1991),p=n.n(c),f=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={expLeft:!1,expRight:!1,expUp:!1,expDown:!1,expContract:!1,expOverlay:!1,expSlideLeft:!1,expSlideRight:!1,expSlideUp:!1,expSlideDown:!1,expZoomIn:!1,expZoomOut:!1},e.spinnerStyle=[c.EXPAND_LEFT,c.EXPAND_RIGHT,c.EXPAND_UP,c.EXPAND_DOWN,c.CONTRACT,c.SLIDE_LEFT,c.SLIDE_RIGHT,c.SLIDE_UP,c.SLIDE_DOWN,c.ZOOM_IN,c.ZOOM_OUT],e.varianList=["primary","success","warning","info","danger"],e}return Object(o.a)(n,[{key:"toggle",value:function(e){this.setState(Object(a.a)({},e,!this.state[e]))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(d.a,{routeSegments:[{name:"Home",path:"/"},{name:"Extra Kits",path:"/extra-kits"},{name:"Ladda Buttons"}]}),u.a.createElement(d.h,{title:"basic example",className:"mb-4"},Object.keys(this.state).map((function(t,n){return u.a.createElement(p.a,{key:n,className:"btn btn-".concat(e.varianList[n%5]," border-0 me-2 mb-2 position-relative"),loading:e.state[t],progress:.5,onClick:function(){return e.toggle(t)},"data-style":e.spinnerStyle[n]},"Submit")}))),u.a.createElement(d.h,{title:"defferent size",className:"mb-4"},u.a.createElement("p",null,"Small Ladda Button"),Object.keys(this.state).map((function(t,n){return u.a.createElement(p.a,{key:n,className:"btn btn-".concat(e.varianList[n%5]," \n              border-0 me-2 mb-2 btn-sm position-relative"),loading:e.state[t],onClick:function(){return e.toggle(t)},"data-style":e.spinnerStyle[n]},"Submit")})),u.a.createElement("p",null,"Large Ladda Button"),Object.keys(this.state).map((function(t,n){return u.a.createElement(p.a,{key:n,className:"btn btn-".concat(e.varianList[n%5]," \n              border-0 me-2 mb-2 btn-lg position-relative"),loading:e.state[t],onClick:function(){return e.toggle(t)},"data-style":e.spinnerStyle[n]},"Submit")}))))}}]),n}(l.Component);t.default=f}}]);
//# sourceMappingURL=51.f475efae.chunk.js.map