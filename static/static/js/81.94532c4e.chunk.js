(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[81],{2137:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(9),i=t(15),l=t(16),c=t(0),s=t.n(c),m=t(103),o=t(106),d=t(688),b=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={},e.variantList=["primary","success","info","warning","danger"],e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(m.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Progress Bar"}]}),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-4"},s.a.createElement(o.a,{title:"Basic Progress Bar"},[25,50,75,100].map((function(e){return s.a.createElement(d.a,{key:e,now:e,className:"mb-3"})})))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(o.a,{title:"Basic Progress Bar With Label"},[25,50,75,100].map((function(e){return s.a.createElement(d.a,{key:e,now:e,label:"".concat(e,"%"),className:"mb-3"})}))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-4"},s.a.createElement(o.a,{title:"Basic Progress Bar With diff. Background"},[10,25,50,75,100].map((function(a,t){return s.a.createElement(d.a,{key:a,now:a,variant:e.variantList[t],className:"mb-3"})})))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(o.a,{title:"Labeled Progress Bar With diff. background"},[10,25,50,75,100].map((function(a,t){return s.a.createElement(d.a,{key:a,now:a,label:"".concat(a,"%"),variant:e.variantList[t],className:"mb-3"})}))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-6 mb-4"},s.a.createElement(o.a,{title:"Progress Bar With Multiple bars"},s.a.createElement(d.a,{className:"mb-3"},s.a.createElement(d.a,{variant:"",now:10,key:1}),s.a.createElement(d.a,{variant:"success",now:25,key:2}),s.a.createElement(d.a,{variant:"info",now:50,key:3})),s.a.createElement(d.a,{className:"mb-3"},s.a.createElement(d.a,{variant:"",now:20,label:"20%",key:1}),s.a.createElement(d.a,{variant:"",now:35,label:"35%",key:2}),s.a.createElement(d.a,{variant:"danger",now:40,label:"40%",key:3})),s.a.createElement(d.a,{className:"mb-3"},s.a.createElement(d.a,{variant:"success",now:15,label:"15%",key:1}),s.a.createElement(d.a,{variant:"info",now:25,label:"25%",key:2}),s.a.createElement(d.a,{variant:"warning",now:30,label:"30%",key:3})),s.a.createElement(d.a,{className:"mb-3"},s.a.createElement(d.a,{variant:"warning",now:20,label:"20%",key:1}),s.a.createElement(d.a,{variant:"",now:20,label:"20%",key:2}),s.a.createElement(d.a,{variant:"danger",now:50,label:"50%",key:3})),s.a.createElement(d.a,{className:"mb-3"},s.a.createElement(d.a,{striped:!0,variant:"success",now:15,label:"15%",key:1}),s.a.createElement(d.a,{striped:!0,variant:"info",now:25,label:"25%",key:2}),s.a.createElement(d.a,{striped:!0,variant:"warning",now:30,label:"30%",key:3})))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(o.a,{title:"Striped Progress Bar"},[10,25,50,75,100].map((function(a,t){return s.a.createElement(d.a,{key:a,now:a,striped:!0,label:"".concat(a,"%"),variant:e.variantList[t],className:"mb-3"})}))))),s.a.createElement("div",{className:"row mb-4"},s.a.createElement("div",{className:"col-md-12 mb-4"},s.a.createElement(o.a,{title:"Animated stripes Progress Bar"},[10,25,50,75,100].map((function(a,t){return s.a.createElement(d.a,{key:a,now:a,animated:!0,striped:!0,variant:e.variantList[t],className:"mb-3"})}))))))}}]),t}(c.Component);a.default=b},549:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return l}));var n=t(0);function r(e,a){var t=0;return n.Children.map(e,(function(e){return n.isValidElement(e)?a(e,t++):e}))}function i(e,a){var t=0;n.Children.forEach(e,(function(e){n.isValidElement(e)&&a(e,t++)}))}function l(e,a){return n.Children.toArray(e).some((function(e){return n.isValidElement(e)&&e.type===a}))}},688:function(e,a,t){"use strict";var n=t(50),r=t(1),i=t(10),l=t(12),c=t.n(l),s=t(0),m=t(18),o=t(549),d=t(5),b=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],u=["isChild"],v=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function E(e,a,t){var n=(e-a)/(t-a)*100;return Math.round(1e3*n)/1e3}function f(e,a){var t,l=e.min,s=e.now,m=e.max,o=e.label,u=e.visuallyHidden,v=e.striped,f=e.animated,w=e.className,p=e.style,y=e.variant,N=e.bsPrefix,h=Object(i.a)(e,b);return Object(d.jsx)("div",Object(r.a)(Object(r.a)({ref:a},h),{},{role:"progressbar",className:c()(w,"".concat(N,"-bar"),(t={},Object(n.a)(t,"bg-".concat(y),y),Object(n.a)(t,"".concat(N,"-bar-animated"),f),Object(n.a)(t,"".concat(N,"-bar-striped"),f||v),t)),style:Object(r.a)({width:"".concat(E(s,l,m),"%")},p),"aria-valuenow":s,"aria-valuemin":l,"aria-valuemax":m,children:u?Object(d.jsx)("span",{className:"visually-hidden",children:o}):o}))}var w=s.forwardRef((function(e,a){var t=e.isChild,n=Object(i.a)(e,u);if(n.bsPrefix=Object(m.b)(n.bsPrefix,"progress"),t)return f(n,a);var l=n.min,b=n.now,E=n.max,w=n.label,p=n.visuallyHidden,y=n.striped,N=n.animated,h=n.bsPrefix,k=n.variant,g=n.className,j=n.children,O=Object(i.a)(n,v);return Object(d.jsx)("div",Object(r.a)(Object(r.a)({ref:a},O),{},{className:c()(g,h),children:j?Object(o.c)(j,(function(e){return Object(s.cloneElement)(e,{isChild:!0})})):f({min:l,now:b,max:E,label:w,visuallyHidden:p,striped:y,animated:N,bsPrefix:h,variant:k},a)}))}));w.displayName="ProgressBar",w.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1},a.a=w}}]);
//# sourceMappingURL=81.94532c4e.chunk.js.map