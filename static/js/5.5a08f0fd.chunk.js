(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[5],{525:function(e,a,t){"use strict";t.r(a);var r=t(28),n=t(9),l=t(10),s=t(13),i=t(12),m=t(0),o=t.n(m),c=t(58),d=t(7),u=t(101),p=t(20),g=t.n(p),h=t(34),b=d.object().shape({email:d.string().email("Invalid email").required("email is required"),password:d.string().min(8,"Password must be 8 character long").required("password is required")}),v=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:""},e.handleChange=function(a){a.persist(),e.setState(Object(r.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a,t){t.isSubmitting;e.props.loginWithEmailAndPassword(a)},e}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"auth-layout-wrap",style:{backgroundImage:""}},o.a.createElement("div",{className:"auth-content"},o.a.createElement("div",{className:"card o-hidden"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"p-4"},o.a.createElement("div",{className:"auth-logo text-center mb-4"},o.a.createElement("img",{src:"http://skrkmk.in/static/logo.png",alt:""})),o.a.createElement("h1",{className:"mb-3 text-18"},"Sign In"),o.a.createElement(c.b,{initialValues:this.state,validationSchema:b,onSubmit:this.handleSubmit},(function(e){var a=e.values,t=e.errors,r=(e.touched,e.handleChange),n=e.handleBlur,l=e.handleSubmit;e.isSubmitting;return o.a.createElement("form",{onSubmit:l},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email"},"Email address"),o.a.createElement("input",{className:"form-control form-control-rounded position-relative",type:"email",name:"email",onChange:r,onBlur:n,value:a.email}),t.email&&o.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.email)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{className:"form-control form-control-rounded",type:"password",name:"password",onChange:r,onBlur:n,value:a.password}),t.password&&o.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.password)),o.a.createElement("button",{className:"btn btn-rounded btn-primary w-100 my-1 mt-2",type:"submit"},"Sign In"))})))),o.a.createElement("div",{className:"col-md-6 text-center ",style:{backgroundSize:"cover",backgroundImage:"url(http://skrkmk.in/static/logo512.png)"}})))))}}]),t}(m.Component);a.default=Object(h.b)((function(e){return{loginWithEmailAndPassword:g.a.func.isRequired,user:e.user}}),{loginWithEmailAndPassword:u.e})(v)}}]);
//# sourceMappingURL=5.5a08f0fd.chunk.js.map