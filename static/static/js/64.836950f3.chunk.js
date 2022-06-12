(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[64],{2218:function(e,a,l){"use strict";l.r(a);var t=l(8),n=l(9),r=l(15),o=l(16),c=l(0),i=l.n(c),s=l(170),m=l(547),d=l(34),u=l(947),b=l(7),v=function(e){Object(r.a)(l,e);var a=Object(o.a)(l);function l(){var e;Object(t.a)(this,l);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={},e.subTotalCost=0,e}return Object(n.a)(l,[{key:"componentDidMount",value:function(){var e=this;Object(u.d)(this.props.match.params.id).then((function(a){e.setState({company:a.data})}))}},{key:"render",value:function(){var e,a,l,t,n,r,o,c,s,u,b,v,p,h,g,E,f,y,N,_,k,C,w,S=this;return i.a.createElement("div",{className:"invoice-viewer py-16"},i.a.createElement("div",{className:"viewer_actions px-3 mb-3 d-flex align-items-center justify-content-between"},i.a.createElement(d.a,{to:"/company/list"},i.a.createElement("i",{className:"i-Left1 text-20 font-weight-700"}," ")),i.a.createElement("div",null,i.a.createElement(m.a,{className:"mr-3 py-2",variant:"primary",onClick:function(){return S.props.toggleCompanyEditor()}},"Edit Company"))),i.a.createElement("div",{id:"print-area",className:"px-3"},i.a.createElement("div",{className:"table-responsive"},i.a.createElement("div",{className:"col"},i.a.createElement("h4",{className:"fw-bold"},"DETAILS OF ",null===(e=this.state)||void 0===e||null===(a=e.company)||void 0===a||null===(l=a.name)||void 0===l?void 0:l.toUpperCase())),i.a.createElement("table",{id:"user_table",className:"table"},i.a.createElement("thead",null),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null," Company GSTIN :- ")),i.a.createElement("td",null,null===(t=this.state)||void 0===t||null===(n=t.company)||void 0===n?void 0:n.gstin),i.a.createElement("td",null,i.a.createElement("strong",null," Company Address :- ")),i.a.createElement("td",null,null===(r=this.state)||void 0===r||null===(o=r.company)||void 0===o?void 0:o.address)),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null," Company State :- ")),i.a.createElement("td",null,null===(c=this.state)||void 0===c||null===(s=c.company)||void 0===s?void 0:s.state),i.a.createElement("td",null,i.a.createElement("strong",null," Company State Code :- ")),i.a.createElement("td",null,null===(u=this.state)||void 0===u||null===(b=u.company)||void 0===b?void 0:b.state_code)),i.a.createElement("tr",null,i.a.createElement("td",{className:"pl-sm-24 capitalize",align:"left"},i.a.createElement("strong",null," Mobile No :- ")),i.a.createElement("td",{className:"pl-sm-24 capitalize",align:"left"},null===(v=this.state)||void 0===v||null===(p=v.company)||void 0===p?void 0:p.mobile1),i.a.createElement("td",{className:"pl-sm-24 capitalize",align:"left"},i.a.createElement("strong",null," Alternative Mobile No :- ")),i.a.createElement("td",{className:"pl-sm-24 capitalize",align:"left"},null===(h=this.state)||void 0===h||null===(g=h.company)||void 0===g?void 0:g.mobile2)),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null," Bank Name :- ")),i.a.createElement("td",null,null===(E=this.state)||void 0===E||null===(f=E.company)||void 0===f?void 0:f.bank_name),i.a.createElement("td",null,i.a.createElement("strong",null," Bank Account No :- ")),i.a.createElement("td",null,null===(y=this.state)||void 0===y||null===(N=y.company)||void 0===N?void 0:N.bank_account_no)),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null," Bank IFSC :- ")),i.a.createElement("td",null,null===(_=this.state)||void 0===_||null===(k=_.company)||void 0===k?void 0:k.bank_ifsc),i.a.createElement("td",null,i.a.createElement("strong",null," Bank Branch :- ")),i.a.createElement("td",null,null===(C=this.state)||void 0===C||null===(w=C.company)||void 0===w?void 0:w.bank_branch)))))))}}]),l}(c.Component),p=Object(b.h)(v),h=l(1),g=l(1105),E=l(630),f=l(597),y=l(592),N=l(872),_=function(e){Object(r.a)(l,e);var a=Object(o.a)(l);function l(){var e;Object(t.a)(this,l);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={loading:!1,id:"",name:"",address:"",gstin:"",state:"",state_code:9,mobile1:"",mobile2:"",bank_account_no:"",bank_branch:"",bank_ifsc:"",bank_name:""},e.generateRandomId=function(){e.setState({id:0})},e.handleSubmit=function(a,l){var t=l.setSubmitting;console.log("hey its me");var n=e.state.id;e.setState({loading:!0}),t(!0),e.props.isNewCompany?Object(u.a)(a).then((function(a){e.setState({loading:!1}),e.props.history.push("/company/".concat(a.data.id)),e.props.toggleCompanyEditor()})):Object(u.e)(n,a).then((function(){e.setState({loading:!1}),e.props.toggleCompanyEditor()}))},e}return Object(n.a)(l,[{key:"componentDidMount",value:function(){var e=this;this.props.isNewCompany?this.generateRandomId():Object(u.d)(this.props.match.params.id).then((function(a){e.setState(Object(h.a)({},a.data))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,a=this.state.loading;return i.a.createElement("div",{className:"invoice-viewer py-3"},i.a.createElement(f.b,{initialValues:this.state,validationSchema:k,onSubmit:this.handleSubmit,enableReinitialize:!0},(function(l){var t=l.values,n=l.errors,r=l.touched,o=l.handleChange,s=l.handleBlur,d=l.handleSubmit,u=(l.isSubmitting,l.setSubmitting,l.setFieldValue),b=l.setFieldTouched;return i.a.createElement(c.Fragment,null,i.a.createElement(g.a,{onSubmit:d,className:"px-3"},i.a.createElement("div",{className:"row mb-3 justify-content-between"},i.a.createElement("div",{className:"col-md-3"},i.a.createElement("h4",{className:"fw-bold"},"Company")),i.a.createElement("div",{className:"col-md-2 text-right"},i.a.createElement("div",{className:"justify-content-end"},i.a.createElement("div",{className:"mb-4"},i.a.createElement(m.a,{type:"button",className:"me-3 py-2",variant:"warning",onClick:function(){return e.props.history.push("/company/list")},tabIndex:12},"Cancel"),i.a.createElement(m.a,{type:"submit",className:"py-2",variant:"primary",disabled:a,tabIndex:11},"Save"))))),i.a.createElement("div",{className:"custom-separator"}),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-3 col-form-label fw-bold"},"Company Name :"),i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(E.a,{value:t.name,name:"name",type:"text",placeholder:"Company Name",onChange:o,onBlur:s,isInvalid:n.name&&r.name,tabIndex:1})),i.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-3 col-form-label fw-bold"},"Company GSTIN :"),i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(E.a,{value:t.gstin,name:"gstin",type:"text",placeholder:"Company GSTIN",onChange:o,onBlur:s,isInvalid:n.gstin&&r.gstin,tabIndex:2}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-3 col-form-label fw-bold"},"Company Address :"),i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(E.a,{value:t.address,name:"address",type:"text",placeholder:"Company Address",onChange:o,onBlur:s,isInvalid:n.address&&r.address,tabIndex:3})),i.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-3 col-form-label fw-bold"},"Company State :"),i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(g.a.Select,{name:"state",value:t.state_code,onChange:function(e){u("state",e.target.options[e.target.options.selectedIndex].label),u("state_code",e.target.value)},onBlur:function(){b("state",!0),b("state_code",!0)},isInvalid:n.state&&r.state&&n.state_code&&r.state_code,tabIndex:4},N.b.map((function(e,a){return i.a.createElement("option",{value:e.value,key:e.value},e.label)}))))),i.a.createElement("div",{className:"custom-separator"}),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-3 col-form-label fw-bold"},"Mobile No :"),i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(E.a,{value:t.mobile1,name:"mobile1",type:"text",placeholder:"Mobile No",onChange:o,onBlur:s,isInvalid:n.mobile1&&r.mobile1,tabIndex:5})),i.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-3 col-form-label fw-bold"},"Another Mobile No :"),i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(E.a,{value:t.mobile2,name:"mobile2",type:"text",placeholder:"Alternate Mobile No",onChange:o,onBlur:s,isInvalid:n.mobile2&&r.mobile2,tabIndex:6}))),i.a.createElement("div",{className:"custom-separator"}),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-3 col-form-label fw-bold"},"Bank Name :"),i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(E.a,{value:t.bank_name,name:"bank_name",type:"text",placeholder:"Bank Name",onChange:o,onBlur:s,isInvalid:n.bank_name&&r.bank_name,tabIndex:7})),i.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-3 col-form-label fw-bold"},"Bank Accont No :"),i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(E.a,{value:t.bank_account_no,name:"bank_account_no",type:"text",placeholder:"Bank Account No",onChange:o,onBlur:s,isInvalid:n.bank_account_no&&r.bank_account_no,tabIndex:8}))),i.a.createElement("div",{className:"form-group row"},i.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-3 col-form-label fw-bold"},"Bank IFSC :"),i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(E.a,{value:t.bank_ifsc,name:"bank_ifsc",type:"text",placeholder:"Bank IFSC",onChange:o,onBlur:s,isInvalid:n.bank_ifsc&&r.bank_ifsc,tabIndex:9})),i.a.createElement("label",{className:"ul-form__label ul-form--margin col-lg-3 col-form-label fw-bold"},"Bank Branch :"),i.a.createElement("div",{className:"col-lg-2"},i.a.createElement(E.a,{value:t.bank_branch,name:"bank_branch",type:"text",placeholder:"Bank Branch",onChange:o,onBlur:s,isInvalid:n.bank_branch&&r.bank_branch,tabIndex:10})))))})))}}]),l}(c.Component),k=y.object().shape({name:y.string().required(),address:y.string().required(),gstin:y.string().required().matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,"Please Enter incorrect format"),state:y.string().required(),state_code:y.number().required(),mobile1:y.string().required().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/,"Please Enter in correct format"),mobile2:y.string().required().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/,"Please Enter in correct format"),bank_account_no:y.string().required(),bank_branch:y.string().required(),bank_ifsc:y.string().required(),bank_name:y.string().required()}),C=Object(b.h)(_),w=function(e){Object(r.a)(l,e);var a=Object(o.a)(l);function l(){var e;Object(t.a)(this,l);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={showCompanyEditor:!1,isNewCompany:!1},e.toggleCompanyEditor=function(){e.setState({showCompanyEditor:!e.state.showCompanyEditor,isNewCompany:!1})},e}return Object(n.a)(l,[{key:"componentDidMount",value:function(){"create"===this.props.match.params.id&&this.setState({showCompanyEditor:!0,isNewCompany:!0})}},{key:"render",value:function(){return i.a.createElement(s.a,{elevation:6,className:"invoice-details m-sm-30"},this.state.showCompanyEditor?i.a.createElement(C,{toggleCompanyEditor:this.toggleCompanyEditor,isNewCompany:this.state.isNewCompany}):i.a.createElement(p,{toggleCompanyEditor:this.toggleCompanyEditor}))}}]),l}(c.Component);a.default=w},872:function(e,a,l){"use strict";l.d(a,"a",(function(){return t})),l.d(a,"b",(function(){return n}));l(0);var t=[{label:"Maize",value:"maize"},{label:"Paddy",value:"paddy"},{label:"Paddy Sugandh",value:"paddy sugandh"},{label:"Paddy Sarbati",value:"paddy sarbati"},{label:"Paddy 1509",value:"paddy 1509"},{label:"Paddy RS10",value:"paddy RS10"},{label:"Paddy 1121",value:"paddy 1121"},{label:"Bajra",value:"bajra"},{label:"Wheat",value:"wheat"},{label:"Mustard Seeds",value:"mustard_seed"}],n=[{label:"Andhra Pradesh",value:37},{label:"Arunachal Pradesh",value:12},{label:"Assam",value:18},{label:"Bihar",value:10},{label:"Chattisgarh",value:22},{label:"Delhi",value:7},{label:"Goa",value:30},{label:"Gujarat",value:24},{label:"Haryana",value:6},{label:"Himachal Pradesh",value:2},{label:"Jammu and Kashmir",value:1},{label:"Jharkhand",value:20},{label:"Karnataka",value:29},{label:"Kerala",value:32},{label:"Lakshadweep Islands",value:31},{label:"Madhya Pradesh",value:23},{label:"Maharashtra",value:27},{label:"Manipur",value:14},{label:"Meghalaya",value:17},{label:"Mizoram",value:15},{label:"Nagaland",value:13},{label:"Odisha",value:21},{label:"Pondicherry",value:34},{label:"Punjab",value:3},{label:"Rajasthan",value:8},{label:"Sikkim",value:11},{label:"Tamil Nadu",value:33},{label:"Telangana",value:36},{label:"Tripura",value:16},{label:"Uttar Pradesh",value:9},{label:"Uttarakhand",value:5},{label:"West Bengal",value:19}]},947:function(e,a,l){"use strict";l.d(a,"c",(function(){return n})),l.d(a,"d",(function(){return r})),l.d(a,"b",(function(){return o})),l.d(a,"a",(function(){return c})),l.d(a,"e",(function(){return i}));var t=l(63),n=function(){return t.a.get("/api/bill-by-list/all")},r=function(e){return t.a.get("/api/bill-by/"+e)},o=function(e){return t.a.post("/api/invoices/delete",e)},c=function(e){return t.a.put("/api/bill-by/0",e)},i=function(e,a){return t.a.patch("/api/bill-by/"+e,a)}}}]);
//# sourceMappingURL=64.836950f3.chunk.js.map