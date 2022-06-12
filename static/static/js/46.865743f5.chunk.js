(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[46],{2206:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),i=a(15),c=a(16),s=a(0),o=a.n(s),l=a(1),u=a(10),m=a(12),f=a.n(m),b=a(108),d=a(49),v=a(580),j=a(18),O=a(85),p=a(990),h=a(96),g=a(25),y=a(5),w=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],E=Object(h.a)("h4");E.displayName="DivStyledAsH4";var N=Object(g.a)("alert-heading",{Component:E}),C=Object(g.a)("alert-link",{Component:v.a}),k={variant:"primary",show:!0,transition:O.a,closeLabel:"Close alert"},x=s.forwardRef((function(e,t){var a=Object(b.a)(e,{show:"onClose"}),n=a.bsPrefix,r=a.show,i=a.closeLabel,c=a.closeVariant,s=a.className,o=a.children,m=a.variant,v=a.onClose,h=a.dismissible,g=a.transition,E=Object(u.a)(a,w),N=Object(j.b)(n,"alert"),C=Object(d.a)((function(e){v&&v(!1,e)})),k=!0===g?O.a:g,x=Object(y.jsxs)("div",Object(l.a)(Object(l.a)({role:"alert"},k?void 0:E),{},{ref:t,className:f()(s,N,m&&"".concat(N,"-").concat(m),h&&"".concat(N,"-dismissible")),children:[h&&Object(y.jsx)(p.a,{onClick:C,"aria-label":i,variant:c}),o]}));return k?Object(y.jsx)(k,Object(l.a)(Object(l.a)({unmountOnExit:!0},E),{},{ref:void 0,in:r,children:x})):r?x:null}));x.displayName="Alert",x.defaultProps=k;var A=Object.assign(x,{Link:C,Heading:N}),D=a(547),L=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={variantList:["primary","secondary","success","danger","warning","info","light","dark"],showCustomAlert:!0},e.handleClose=function(t){var a=e.state.variantList.filter((function(e,a){return a!==t}));e.setState({variantList:a})},e.closeCustomAlert=function(){e.setState({showCustomAlert:!1})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.variantList,n=t.showCustomAlert;return o.a.createElement(s.Fragment,null,n&&o.a.createElement(A,{className:"text-center alert-card",variant:"warning",dismissible:!0,onClose:this.closeCustomAlert},"Gull makes developent life easier!",o.a.createElement(D.a,{variant:"warning",className:"btn-rounded ms-3"},"Buy Now")),a.map((function(t,a){return o.a.createElement(A,{key:a,variant:t,dismissible:!0,onClose:function(){return e.handleClose(a)}},"This is a ",t," alert\u2014check it out!")})))}}]),a}(s.Component),S=a(11),P=function(){var e=Object(s.useState)(!0),t=Object(S.a)(e,2),a=t[0],n=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(A,{show:a,variant:"success"},o.a.createElement(A.Heading,null,"How's it going?!"),o.a.createElement("p",null,"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum."),o.a.createElement("hr",{className:"my-3"}),o.a.createElement("div",{className:"d-flex justify-content-end"},o.a.createElement(D.a,{onClick:function(){return n(!1)},variant:"outline-success"},"Close me ya'll!"))),!a&&o.a.createElement(D.a,{onClick:function(){return n(!0)}},"Show Alert"))},K=function(){var e=o.a.useState(!0),t=Object(S.a)(e,2),a=t[0],n=t[1];return o.a.createElement(s.Fragment,null,a&&o.a.createElement(A,{variant:"danger",dismissible:!0,onClose:function(){return n(!1)}},o.a.createElement(A.Heading,null,"Oh snap! You got an error!"),o.a.createElement("p",null,"Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.")),!a&&o.a.createElement(D.a,{variant:"success",onClick:function(){return n(!0)}},"Show Alert"))},R=a(103),H=a(7),B=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).componentDidMount=function(){return window.scrollTo(0,0)},e.componentDidUpdate=function(t){e.props.location!==t.location&&window.scrollTo(0,0)},e.state={},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(R.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Alerts"}]}),o.a.createElement("div",{className:"mb-4"},o.a.createElement(L,null)),o.a.createElement("div",{className:"mb-4"},o.a.createElement("h4",{className:"mb-3"},"Success Alert"),o.a.createElement(P,null)),o.a.createElement("div",{className:"mb-4"},o.a.createElement("h4",{className:"mb-3"},"Danger Alert"),o.a.createElement(K,null)))}}]),a}(s.Component);t.default=Object(H.h)(B)},529:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var n=a(11),r=a(0),i=a(5),c=["as","disabled"];function s(e){var t=e.tagName,a=e.disabled,n=e.href,r=e.target,i=e.rel,c=e.onClick,s=e.tabIndex,o=void 0===s?0:s,l=e.type;t||(t=null!=n||null!=r||null!=i?"a":"button");var u={tagName:t};if("button"===t)return[{type:l||"button",disabled:a},u];var m=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),a?e.stopPropagation():null==c||c(e)};return"a"===t&&(n||(n="#"),a&&(n=void 0)),[{role:"button",disabled:void 0,tabIndex:a?void 0:o,href:n,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?i:void 0,onClick:m,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),m(e))}},u]}var o=r.forwardRef((function(e,t){var a=e.as,r=e.disabled,o=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,c),l=s(Object.assign({tagName:a,disabled:r},o)),u=Object(n.a)(l,2),m=u[0],f=u[1].tagName;return Object(i.jsx)(f,Object.assign({},o,m,{ref:t}))}));o.displayName="Button",t.a=o},533:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a(49);function i(e,t,a,i){void 0===i&&(i=!1);var c=Object(r.a)(a);Object(n.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(t,c,i),function(){return a.removeEventListener(t,c,i)}}),[e])}},535:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}},547:function(e,t,a){"use strict";var n=a(1),r=a(11),i=a(10),c=a(12),s=a.n(c),o=a(0),l=a(529),u=a(18),m=a(5),f=["as","bsPrefix","variant","size","active","className"],b=o.forwardRef((function(e,t){var a=e.as,c=e.bsPrefix,o=e.variant,b=e.size,d=e.active,v=e.className,j=Object(i.a)(e,f),O=Object(u.b)(c,"btn"),p=Object(l.b)(Object(n.a)({tagName:a},j)),h=Object(r.a)(p,2),g=h[0],y=h[1].tagName;return Object(m.jsx)(y,Object(n.a)(Object(n.a)(Object(n.a)({},g),j),{},{ref:t,className:s()(v,O,d&&"active",o&&"".concat(O,"-").concat(o),b&&"".concat(O,"-").concat(b),j.href&&j.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=b},553:function(e,t,a){"use strict";(function(e){var n=a(0),r="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,i="undefined"!==typeof document;t.a=i||r?n.useLayoutEffect:n.useEffect}).call(this,a(30))},580:function(e,t,a){"use strict";var n=a(11),r=a(0),i=(a(77),a(104),a(49));a(533);a(58),a(535);a(553),new WeakMap;var c=a(529),s=a(5),o=["onKeyDown"];var l=r.forwardRef((function(e,t){var a,r=e.onKeyDown,l=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o),u=Object(c.b)(Object.assign({tagName:"a"},l)),m=Object(n.a)(u,1)[0],f=Object(i.a)((function(e){m.onKeyDown(e),null==r||r(e)}));return((a=l.href)&&"#"!==a.trim()||l.role)&&"button"!==l.role?Object(s.jsx)("a",Object.assign({ref:t},l,{onKeyDown:r})):Object(s.jsx)("a",Object.assign({ref:t},l,m,{onKeyDown:f}))}));l.displayName="Anchor";t.a=l},990:function(e,t,a){"use strict";var n=a(1),r=a(10),i=a(14),c=a.n(i),s=a(0),o=a(12),l=a.n(o),u=a(5),m=["className","variant"],f={"aria-label":c.a.string,onClick:c.a.func,variant:c.a.oneOf(["white"])},b=s.forwardRef((function(e,t){var a=e.className,i=e.variant,c=Object(r.a)(e,m);return Object(u.jsx)("button",Object(n.a)({ref:t,type:"button",className:l()("btn-close",i&&"btn-close-".concat(i),a)},c))}));b.displayName="CloseButton",b.propTypes=f,b.defaultProps={"aria-label":"Close"},t.a=b}}]);
//# sourceMappingURL=46.865743f5.chunk.js.map