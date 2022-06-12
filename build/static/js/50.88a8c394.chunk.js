(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[50],{1106:function(e,a,t){"use strict";var n=t(1),c=t(10),r=t(12),l=t.n(r),o=t(0),i=t.n(o),s=t(108),m=t(18),u=t(50),d=t(62),b=t(52),f=t(116);var v,p=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];e.apply(this,n),a.apply(this,n)}}),null)},j=t(114),y=t(115),h=t(5),O=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],E={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function x(e,a){var t=a["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],n=E[e];return t+parseInt(Object(d.a)(a,n[0]),10)+parseInt(Object(d.a)(a,n[1]),10)}var N=(v={},Object(u.a)(v,b.c,"collapse"),Object(u.a)(v,b.d,"collapsing"),Object(u.a)(v,b.b,"collapsing"),Object(u.a)(v,b.a,"collapse show"),v),g={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:x},w=i.a.forwardRef((function(e,a){var t=e.onEnter,r=e.onEntering,s=e.onEntered,m=e.onExit,u=e.onExiting,d=e.className,b=e.children,v=e.dimension,E=void 0===v?"height":v,g=e.getDimensionValue,w=void 0===g?x:g,C=Object(c.a)(e,O),K="function"===typeof E?E():E,A=Object(o.useMemo)((function(){return p((function(e){e.style[K]="0"}),t)}),[K,t]),k=Object(o.useMemo)((function(){return p((function(e){var a="scroll".concat(K[0].toUpperCase()).concat(K.slice(1));e.style[K]="".concat(e[a],"px")}),r)}),[K,r]),P=Object(o.useMemo)((function(){return p((function(e){e.style[K]=null}),s)}),[K,s]),T=Object(o.useMemo)((function(){return p((function(e){e.style[K]="".concat(w(K,e),"px"),Object(j.a)(e)}),m)}),[m,w,K]),I=Object(o.useMemo)((function(){return p((function(e){e.style[K]=null}),u)}),[K,u]);return Object(h.jsx)(y.a,Object(n.a)(Object(n.a)({ref:a,addEndListener:f.a},C),{},{"aria-expanded":C.role?C.in:null,onEnter:A,onEntering:k,onEntered:P,onExit:T,onExiting:I,childRef:b.ref,children:function(e,a){return i.a.cloneElement(b,Object(n.a)(Object(n.a)({},a),{},{className:l()(d,b.props.className,N[e],"width"===K&&"collapse-horizontal")}))}}))}));w.defaultProps=g;var C=w,K=t(569),A=["as","bsPrefix","className","children","eventKey"],k=o.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,i=e.bsPrefix,s=e.className,u=e.children,d=e.eventKey,b=Object(c.a)(e,A),f=Object(o.useContext)(K.a).activeEventKey;return i=Object(m.b)(i,"accordion-collapse"),Object(h.jsx)(C,Object(n.a)(Object(n.a)({ref:a,in:Object(K.b)(f,d)},b),{},{className:l()(s,i),children:Object(h.jsx)(r,{children:o.Children.only(u)})}))}));k.displayName="AccordionCollapse";var P=k,T=t(570),I=["as","bsPrefix","className"],R=o.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,i=e.bsPrefix,s=e.className,u=Object(c.a)(e,I);i=Object(m.b)(i,"accordion-body");var d=Object(o.useContext)(T.a).eventKey;return Object(h.jsx)(P,{eventKey:d,children:Object(h.jsx)(r,Object(n.a)(Object(n.a)({ref:a},u),{},{className:l()(s,i)}))})}));R.displayName="AccordionBody";var M=R,S=t(607),B=["as","bsPrefix","className","children","onClick"],q=o.forwardRef((function(e,a){var t=e.as,r=void 0===t?"h2":t,o=e.bsPrefix,i=e.className,s=e.children,u=e.onClick,d=Object(c.a)(e,B);return o=Object(m.b)(o,"accordion-header"),Object(h.jsx)(r,Object(n.a)(Object(n.a)({ref:a},d),{},{className:l()(i,o),children:Object(h.jsx)(S.a,{onClick:u,children:s})}))}));q.displayName="AccordionHeader";var D=q,U=["as","bsPrefix","className","eventKey"],V=o.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,i=e.bsPrefix,s=e.className,u=e.eventKey,d=Object(c.a)(e,U);i=Object(m.b)(i,"accordion-item");var b=Object(o.useMemo)((function(){return{eventKey:u}}),[u]);return Object(h.jsx)(T.a.Provider,{value:b,children:Object(h.jsx)(r,Object(n.a)(Object(n.a)({ref:a},d),{},{className:l()(s,i)}))})}));V.displayName="AccordionItem";var H=V,J=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],L=o.forwardRef((function(e,a){var t=Object(s.a)(e,{activeKey:"onSelect"}),r=t.as,i=void 0===r?"div":r,u=t.activeKey,d=t.bsPrefix,b=t.className,f=t.onSelect,v=t.flush,p=t.alwaysOpen,j=Object(c.a)(t,J),y=Object(m.b)(d,"accordion"),O=Object(o.useMemo)((function(){return{activeEventKey:u,onSelect:f,alwaysOpen:p}}),[u,f,p]);return Object(h.jsx)(K.a.Provider,{value:O,children:Object(h.jsx)(i,Object(n.a)(Object(n.a)({ref:a},j),{},{className:l()(b,y,v&&"".concat(y,"-flush"))}))})}));L.displayName="Accordion";a.a=Object.assign(L,{Button:S.a,Collapse:P,Item:H,Header:D,Body:M})},2133:function(e,a,t){"use strict";t.r(a);var n=t(8),c=t(9),r=t(15),l=t(16),o=t(0),i=t.n(o),s=t(103),m=t(1106),u=t(607),d=(t(106),t(991),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var c=arguments.length,r=new Array(c),l=0;l<c;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(s.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Collapsibles"}]}),i.a.createElement("div",{className:"mb-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4 mb-5"},i.a.createElement(m.a,null,i.a.createElement("div",{className:"card card-body py-3"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h5",{className:"heading text-primary"},"Inline or block element"),i.a.createElement("p",{className:"mb-3 text-muted"},"Example of inline text toggler"),i.a.createElement(b,{Tag:"span",eventKey:2,className:"t-font-boldest ul-cursor--pointer"},"Toggle Context")),i.a.createElement(m.a.Collapse,{eventKey:2},i.a.createElement("div",{className:"mt-3"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."))))),i.a.createElement("div",{className:"col-lg-4 mb-5"},i.a.createElement(m.a,null,i.a.createElement("div",{className:"card card-body py-3"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h5",{className:"heading text-primary"},"Text and other links"),i.a.createElement("p",{className:"mb-3 text-muted"},"Example of a simple ",i.a.createElement("code",null,"<a>")," element"),i.a.createElement(b,{Tag:"a",eventKey:1,className:"font-weight-semibold collapsed typo_link text-primary t-font-boldest cursor-pointer"},"Toggle Context")),i.a.createElement(m.a.Collapse,{eventKey:1},i.a.createElement("div",{className:"mt-3"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."))))),i.a.createElement("div",{className:"col-lg-4 mb-5"},i.a.createElement(m.a,null,i.a.createElement("div",{className:"card card-body py-3"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h5",{className:"heading text-primary"},"Single or multiple icons"),i.a.createElement("p",{className:"mb-3 text-muted"},"Icons in block or inline elements"),i.a.createElement(b,{eventKey:2,Tag:"span",className:"text-default collapsed cursor-pointer"},i.a.createElement("i",{className:"i-Arrow-Down-2 t-font-boldest"}))),i.a.createElement(m.a.Collapse,{eventKey:2},i.a.createElement("div",{className:"mt-3"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."))))),i.a.createElement("div",{className:"col-lg-4 mb-5"},i.a.createElement(m.a,null,i.a.createElement("div",{className:"card card-body py-3"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h5",{className:"heading text-primary"},"Button"),i.a.createElement("p",{className:"mb-3 text-muted"},"Icons in block or inline elements"),i.a.createElement(b,{eventKey:3,Tag:"button",className:"btn btn-primary collapsed cursor-pointer"},"Toggle content")),i.a.createElement(m.a.Collapse,{eventKey:3},i.a.createElement("div",{className:"mt-3"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."))))))))}}]),t}(o.Component));function b(e){var a=e.children,t=e.eventKey,n=e.Tag,c=e.className,r=Object(u.b)(t,(function(){return console.log("totally custom!")}));return i.a.createElement(n,{onClick:r,className:c},a)}a.default=d},569:function(e,a,t){"use strict";t.d(a,"b",(function(){return c}));var n=t(0);function c(e,a){return Array.isArray(e)?e.includes(a):e===a}var r=n.createContext({});r.displayName="AccordionContext",a.a=r},570:function(e,a,t){"use strict";var n=t(0),c=n.createContext({eventKey:""});c.displayName="AccordionItemContext",a.a=c},607:function(e,a,t){"use strict";t.d(a,"b",(function(){return f}));var n=t(1),c=t(10),r=t(2),l=t(0),o=t(12),i=t.n(o),s=t(569),m=t(570),u=t(18),d=t(5),b=["as","bsPrefix","className","onClick"];function f(e,a){var t=Object(l.useContext)(s.a),n=t.activeEventKey,c=t.onSelect,o=t.alwaysOpen;return function(t){var l=e===n?null:e;o&&(l=Array.isArray(n)?n.includes(e)?n.filter((function(a){return a!==e})):[].concat(Object(r.a)(n),[e]):[e]),null==c||c(l,t),null==a||a(t)}}var v=l.forwardRef((function(e,a){var t=e.as,r=void 0===t?"button":t,o=e.bsPrefix,v=e.className,p=e.onClick,j=Object(c.a)(e,b);o=Object(u.b)(o,"accordion-button");var y=Object(l.useContext)(m.a).eventKey,h=f(y,p),O=Object(l.useContext)(s.a).activeEventKey;return"button"===r&&(j.type="button"),Object(d.jsx)(r,Object(n.a)(Object(n.a)({ref:a,onClick:h},j),{},{"aria-expanded":y===O,className:i()(v,o,!Object(s.b)(O,y)&&"collapsed")}))}));v.displayName="AccordionButton",a.a=v},991:function(e,a,t){"use strict";t(11),t(0),t(1106),t(26)}}]);
//# sourceMappingURL=50.88a8c394.chunk.js.map