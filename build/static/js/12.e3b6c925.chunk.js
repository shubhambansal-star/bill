(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[12],{1051:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var r=[{name:"Dashboard",description:"Dashboard",path:"/dashboard/v2",icon:"i-Bar-Chart"},{name:"Orders",description:"Company",type:"dropDown",icon:"i-Atom",sub:[{icon:"i-Add-UserStar",name:"Sales Order",path:"/invoice/create",type:"link"},{icon:"i-Receipt-4",name:"Purchase Order",path:"/invoice/list",type:"link"},{icon:"i-Receipt-4",name:"Loading",path:"/pages/faq",type:"link"},{icon:"i-Receipt-4",name:"Unloading",path:"/pages/faq",type:"link"}]},{name:"Company",description:"Company",type:"dropDown",icon:"i-Administrator",sub:[{icon:"i-Add-UserStar",name:"Add Company",path:"/company/create",type:"link"},{icon:"i-Receipt-4",name:"Company List",path:"/company/list",type:"link"}]},{name:"Party",description:"Party",type:"dropDown",icon:"i-Checked-User",sub:[{icon:"i-Add-User",name:"Add Party",path:"/party/create",type:"link"},{icon:"i-Receipt-4",name:"Party List",path:"/party/list",type:"link"}]},{name:"Invoice",description:"Invoice",type:"dropDown",icon:"i-Billing",sub:[{icon:"i-Add-File",name:"Create Invoice",path:"/invoice/create",type:"link"},{icon:"i-Receipt-4",name:"Invoice List",path:"/invoice/list",type:"link"}]}]},1052:function(e,a,t){"use strict";var r=t(0),n=t.n(r);a.a=function(){return n.a.createElement(r.Fragment,null,n.a.createElement("div",null))}},1054:function(e,a,t){"use strict";var r=t(8),n=t(9),i=t(15),s=t(16),o=t(0),l=t.n(o),c=t(26),u=t(558),p=t.n(u),d=t(34),m=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=a.call.apply(a,[this].concat(i))).debounceTimer=null,e.dummyProductList=[{name:"Headphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"Sale",imgUrl:"/assets/images/products/headphone-1.jpg"},{name:"Bitz Headphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"New",imgUrl:"/assets/images/products/headphone-2.jpg"},{name:"Sony Headphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"New",imgUrl:"/assets/images/products/headphone-3.jpg"},{name:"Earphone 1",category:"Gadget",currentPrice:300,prevPrice:400,status:"New",imgUrl:"/assets/images/products/headphone-4.jpg"}],e.state={query:"",searchList:e.dummyProductList},e.handleSearch=function(a){a.persist(),e.setState({query:a.target.value},(function(){e.debounceTimer&&clearTimeout(e.debounceTimer),e.debounceTimer=setTimeout((function(){e.setState({searchList:e.dummyProductList.filter((function(a){return a.name.toLocaleLowerCase().match(e.state.query.toLowerCase())}))})}),250)}))},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.props,a=e.open,t=e.handleClose,r=this.state.searchList;return l.a.createElement("div",{className:Object(c.a)({"search-ui":!0,open:a})},l.a.createElement("div",{className:"d-flex justify-content-between align-items-center search-header o-hidden"},l.a.createElement("img",{src:"/assets/images/logo.png",alt:"",className:"logo float-left"}),l.a.createElement("button",{className:"search-close btn btn-icon bg-transparent mt-2",onClick:t},l.a.createElement("i",{className:"i-Close-Window text-22 text-muted"}))),l.a.createElement("input",{type:"text",placeholder:"Type here",className:"search-input",autoFocus:!0,onChange:this.handleSearch}),l.a.createElement("div",{className:"search-title"},l.a.createElement("span",{className:"text-muted"},"Search results")),l.a.createElement("div",{className:"search-results list-horizontal"},r.map((function(e,a){return l.a.createElement("div",{key:a,className:"list-item col-md-12 p-0"},l.a.createElement("div",{className:"card o-hidden flex-row mb-4 d-flex"},l.a.createElement("div",{className:"list-thumb d-flex"},l.a.createElement("img",{src:e.imgUrl,alt:""})),l.a.createElement("div",{className:"flex-grow-1 pl-2 d-flex"},l.a.createElement("div",{className:"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row"},l.a.createElement(d.a,{to:"/",className:"w-40 w-sm-100"},l.a.createElement("div",{className:"item-title"},e.name)),l.a.createElement("p",{className:"m-0 text-muted text-small w-15 w-sm-100"},"Gadget"),l.a.createElement("p",{className:"m-0 text-muted text-small w-15 w-sm-100"},"$",e.currentPrice,l.a.createElement("del",{className:"text-secondary"},"$",e.prevPrice)),l.a.createElement("p",{className:"m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"},l.a.createElement("span",{className:Object(c.a)({badge:!0,"bg-danger":"Sale"===e.status,"bg-primary":"New"===e.status})},e.status))))))}))),l.a.createElement("div",{className:"px-3 mt-5 d-flex flex-row justify-content-center"},l.a.createElement(p.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",breakClassName:"break-me",pageCount:5,marginPagesDisplayed:2,pageRangeDisplayed:5,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))}}]),t}(o.Component);a.a=m},558:function(e,a,t){(function(r){var n;e.exports=(n=t(0),function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=n},function(e,a,t){"use strict";var r=t(3);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),s=r(0),o=r.n(s);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.page,n=e.selected,s=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,m=e.ariaLabel||"Page "+r+(d?" "+d:""),f=null;return n&&(f="page",m=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+s:s,void 0!==t?void 0!==o&&(t=t+" "+o):t=o),i.a.createElement("li",{className:a},i.a.createElement("a",l({role:"button",className:t,href:p,tabIndex:"0","aria-label":m,"aria-current":f,onKeyPress:u},c(u)),r))};c.propTypes={pageSelectedHandler:o.a.func.isRequired,selected:o.a.bool.isRequired,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,extraAriaContext:o.a.string,href:o.a.string,ariaLabel:o.a.string,page:o.a.number.isRequired,getEventListener:o.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,s=e.getEventListener,o=t||"break";return i.a.createElement("li",{className:o},i.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},s(n)),a))};d.propTypes={breakLabel:o.a.oneOfType([o.a.string,o.a.node]),breakClassName:o.a.string,breakLinkClassName:o.a.string,breakHandler:o.a.func.isRequired,getEventListener:o.a.func.isRequired};var m=d;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function b(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,a){return(v=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function h(e,a){return!a||"object"!==f(a)&&"function"!=typeof a?y(e):a}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var P=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&v(e,a)}(n,e);var a,t,r=function(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=C(e);if(a){var n=C(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return h(this,t)}}(n);function n(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,n),k(y(a=r.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),k(y(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<r-1&&a.handlePageSelected(t+1,e)})),k(y(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),k(y(a),"getEventListener",(function(e){return k({},a.props.eventListener,e)})),k(y(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var r=a.state.selected;a.handlePageSelected(r<e?a.getForwardJump():a.getBackwardJump(),t)})),k(y(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),k(y(a),"pagination",(function(){var e=[],t=a.props,r=t.pageRangeDisplayed,n=t.pageCount,s=t.marginPagesDisplayed,o=t.breakLabel,l=t.breakClassName,c=t.breakLinkClassName,u=a.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(a.getPageElement(p));else{var d,f,g,b=r/2,v=r-b;u>n-r/2?b=r-(v=n-u):u<r/2&&(v=r-(b=u));var h=function(e){return a.getPageElement(e)};for(d=0;d<n;d++)(f=d+1)<=s||f>n-s||d>=u-b&&d<=u+v?e.push(h(d)):o&&e[e.length-1]!==g&&(g=i.a.createElement(m,{key:d,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,d),getEventListener:a.getEventListener}),e.push(g))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=n,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,n=t.pageLinkClassName,s=t.activeClassName,o=t.activeLinkClassName,l=t.extraAriaContext;return i.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:n,activeClassName:s,activeLinkClassName:o,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,r=e.containerClassName,n=e.previousLabel,s=e.previousClassName,o=e.previousLinkClassName,l=e.previousAriaLabel,c=e.nextLabel,u=e.nextClassName,p=e.nextLinkClassName,d=e.nextAriaLabel,m=this.state.selected,f=s+(0===m?" ".concat(a):""),b=u+(m===t-1?" ".concat(a):""),v=0===m?"true":"false",h=m===t-1?"true":"false";return i.a.createElement("ul",{className:r},i.a.createElement("li",{className:f},i.a.createElement("a",g({className:o,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":v,"aria-label":l},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),i.a.createElement("li",{className:b},i.a.createElement("a",g({className:p,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":h,"aria-label":d},this.getEventListener(this.handleNextPage)),c)))}}])&&b(a.prototype,t),n}(n.Component);k(P,"propTypes",{pageCount:o.a.number.isRequired,pageRangeDisplayed:o.a.number.isRequired,marginPagesDisplayed:o.a.number.isRequired,previousLabel:o.a.node,previousAriaLabel:o.a.string,nextLabel:o.a.node,nextAriaLabel:o.a.string,breakLabel:o.a.oneOfType([o.a.string,o.a.node]),hrefBuilder:o.a.func,onPageChange:o.a.func,initialPage:o.a.number,forcePage:o.a.number,disableInitialCallback:o.a.bool,containerClassName:o.a.string,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,previousClassName:o.a.string,nextClassName:o.a.string,previousLinkClassName:o.a.string,nextLinkClassName:o.a.string,disabledClassName:o.a.string,breakClassName:o.a.string,breakLinkClassName:o.a.string,extraAriaContext:o.a.string,ariaLabelBuilder:o.a.func,eventListener:o.a.string}),k(P,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=P,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t(30))}}]);
//# sourceMappingURL=12.e3b6c925.chunk.js.map