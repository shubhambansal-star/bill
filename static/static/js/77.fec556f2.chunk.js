(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[77],{2149:function(e,a,t){"use strict";t.r(a);var n=t(50),r=t(8),s=t(9),i=t(15),l=t(16),o=t(0),c=t.n(o),m=t(597),u=t(592),d=t(56),b=t(14),g=t.n(b),p=t(27),v=t(34),f=t(547),h=u.object().shape({email:u.string().email("Invalid email").required("email is required"),password:u.string().min(8,"Password must be 8 character long").required("password is required")}),E=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),l=0;l<s;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={email:"watson@example.com",password:"12345678"},e.handleChange=function(a){a.persist(),e.setState(Object(n.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a,t){t.isSubmitting;e.props.loginWithEmailAndPassword(a)},e}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"auth-layout-wrap",style:{backgroundImage:"url(/assets/images/photo-wide-4.jpg)"}},c.a.createElement("div",{className:"auth-content"},c.a.createElement("div",{className:"card o-hidden"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"p-4"},c.a.createElement("div",{className:"auth-logo text-center mb-4"},c.a.createElement("img",{src:"/assets/images/logo.png",alt:""})),c.a.createElement("h1",{className:"mb-3 text-18"},"Sign In"),c.a.createElement(m.b,{initialValues:this.state,validationSchema:h,onSubmit:this.handleSubmit},(function(e){var a=e.values,t=e.errors,n=(e.touched,e.handleChange),r=e.handleBlur,s=e.handleSubmit;e.isSubmitting;return c.a.createElement("form",{onSubmit:s},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Email address"),c.a.createElement("input",{className:"form-control form-control-rounded position-relative",type:"email",name:"email",onChange:n,onBlur:r,value:a.email}),t.email&&c.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.email)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{className:"form-control form-control-rounded",type:"password",name:"password",onChange:n,onBlur:r,value:a.password}),t.password&&c.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.password)),c.a.createElement("button",{className:"btn btn-rounded btn-primary w-100 my-1 mt-2",type:"submit"},"Sign In"))})),c.a.createElement("div",{className:"mt-3 text-center"},c.a.createElement(v.a,{to:"/session/forgot-password",className:"text-muted"},c.a.createElement("u",null,"Forgot Password?"))))),c.a.createElement("div",{className:"col-md-6 text-center ",style:{backgroundSize:"cover",backgroundImage:"url(/assets/images/photo-long-3.jpg)"}},c.a.createElement("div",{className:"pe-3 auth-right"},c.a.createElement(v.a,{to:"/session/signup",className:"btn btn-rounded btn-outline-primary btn-outline-email w-100 my-1 btn-icon-text"},c.a.createElement("i",{className:"i-Mail-with-At-Sign"})," Sign up with Email"),c.a.createElement(f.a,{className:"btn btn-rounded btn-outline-google w-100 my-1 btn-icon-text"},c.a.createElement("i",{className:"i-Google-Plus"})," Sign up with Google"),c.a.createElement(f.a,{className:"btn btn-rounded w-100 my-1 btn-icon-text btn-outline-facebook"},c.a.createElement("i",{className:"i-Facebook-2"})," Sign up with Facebook")))))))}}]),t}(o.Component);a.default=Object(p.b)((function(e){return{loginWithEmailAndPassword:g.a.func.isRequired,user:e.user}}),{loginWithEmailAndPassword:d.e})(E)},529:function(e,a,t){"use strict";t.d(a,"b",(function(){return l}));var n=t(11),r=t(0),s=t(5),i=["as","disabled"];function l(e){var a=e.tagName,t=e.disabled,n=e.href,r=e.target,s=e.rel,i=e.onClick,l=e.tabIndex,o=void 0===l?0:l,c=e.type;a||(a=null!=n||null!=r||null!=s?"a":"button");var m={tagName:a};if("button"===a)return[{type:c||"button",disabled:t},m];var u=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),t?e.stopPropagation():null==i||i(e)};return"a"===a&&(n||(n="#"),t&&(n=void 0)),[{role:"button",disabled:void 0,tabIndex:t?void 0:o,href:n,target:"a"===a?r:void 0,"aria-disabled":t||void 0,rel:"a"===a?s:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},m]}var o=r.forwardRef((function(e,a){var t=e.as,r=e.disabled,o=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i),c=l(Object.assign({tagName:t,disabled:r},o)),m=Object(n.a)(c,2),u=m[0],d=m[1].tagName;return Object(s.jsx)(d,Object.assign({},o,u,{ref:a}))}));o.displayName="Button",a.a=o},547:function(e,a,t){"use strict";var n=t(1),r=t(11),s=t(10),i=t(12),l=t.n(i),o=t(0),c=t(529),m=t(18),u=t(5),d=["as","bsPrefix","variant","size","active","className"],b=o.forwardRef((function(e,a){var t=e.as,i=e.bsPrefix,o=e.variant,b=e.size,g=e.active,p=e.className,v=Object(s.a)(e,d),f=Object(m.b)(i,"btn"),h=Object(c.b)(Object(n.a)({tagName:t},v)),E=Object(r.a)(h,2),N=E[0],w=E[1].tagName;return Object(u.jsx)(w,Object(n.a)(Object(n.a)(Object(n.a)({},N),v),{},{ref:a,className:l()(p,f,g&&"active",o&&"".concat(f,"-").concat(o),b&&"".concat(f,"-").concat(b),v.href&&v.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=b}}]);
//# sourceMappingURL=77.fec556f2.chunk.js.map