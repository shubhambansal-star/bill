(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[83],{1053:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(34);t.a=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"row m-0"},l.a.createElement("div",{className:"col-md-4 p-4 bg-img"},l.a.createElement("h2",{className:"title"},"Mega Menu ",l.a.createElement("br",null)," Sidebar"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur."),l.a.createElement("p",{className:"mb-4"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat."),l.a.createElement("button",{className:"btn btn-lg btn-rounded btn-outline-warning"},"Learn More")),l.a.createElement("div",{className:"col-md-4 p-4"},l.a.createElement("p",{className:"text-primary text--cap border-bottom-primary d-inline-block"},"Features"),l.a.createElement("div",{className:"menu-icon-grid w-auto p-0"},l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-Shop-4"})," Home"),l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-Library"})," UI Kits"),l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-Drop"})," Apps"),l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-File-Clipboard-File--Text"})," Forms"),l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-Checked-User"})," Sessions"),l.a.createElement(s.a,{to:"/"},l.a.createElement("i",{className:"i-Ambulance"})," Support"))),l.a.createElement("div",{className:"col-md-4 p-4"},l.a.createElement("p",{className:"text-primary text--cap border-bottom-primary d-inline-block"},"Components"),l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"accordion.html"},"Accordion")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"alerts.html"},"Alerts")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"buttons.html"},"Buttons")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"badges.html"},"Badges")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"carousel.html"},"Carousels")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"lists.html"},"Lists")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"popover.html"},"Popover")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"tables.html"},"Tables")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"datatables.html"},"Datatables")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"modals.html"},"Modals")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"nouislider.html"},"Sliders")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",href:"tabs.html"},"Tabs"))))))}},2220:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(9),s=a(15),i=a(16),r=a(0),c=a.n(r),o=a(121),m=a(1),u=a(34),d=a(1051),p=a(21),h=a(26),E=a(110),g=a.n(E),v=a(103),b=a(14),S=a.n(b),f=a(27),y=a(31),N=a(32),w=a(7),O=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).windowListener=null,e.state={selectedItem:null,navOpen:!0,secondaryNavOpen:!1},e.onMainItemMouseEnter=function(t){"dropDown"===t.type?(e.setSelected(t),e.openSecSidenav()):(e.setSelected(t),e.closeSecSidenav())},e.onMainItemMouseLeave=function(){},e.setSelected=function(t){e.setState({selectedItem:t})},e.removeSelected=function(){e.setState({selectedItem:null})},e.openSecSidenav=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{leftSidebar:{secondaryNavOpen:!0}}}))},e.closeSecSidenav=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings,l={};Object(h.d)()&&(l.open=!1),a(Object(p.merge)({},n,{layout1Settings:{leftSidebar:Object(m.a)(Object(m.a)({},l),{},{secondaryNavOpen:!1})}}))},e.closeSidenav=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{leftSidebar:{open:!1,secondaryNavOpen:!1}}}))},e.openSidenav=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{leftSidebar:{open:!0}}}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;null===this.state.selectedItem&&this.closeSecSidenav(),window&&(window.innerWidth<1200?this.closeSidenav():this.openSidenav()),this.windowListener=window.addEventListener("resize",(function(t){t.target;window.innerWidth<1200?e.closeSidenav():e.openSidenav()}))}},{key:"componentWillUnmount",value:function(){this.windowListener&&window.removeEventListener("resize",this.windowListener)}},{key:"render",value:function(){var e=this,t=this.props.settings;return c.a.createElement("div",{className:"side-content-wrap"},c.a.createElement(g.a,{className:Object(h.a)({"sidebar-left o-hidden rtl-ps-none":!0,open:t.layout1Settings.leftSidebar.open})},c.a.createElement("ul",{className:"navigation-left"},d.a.map((function(t,a){return c.a.createElement("li",{className:Object(h.a)({"nav-item":!0,active:e.state.selectedItem===t}),onMouseEnter:function(){e.onMainItemMouseEnter(t)},onMouseLeave:e.onMainItemMouseLeave,key:a},t.path&&"extLink"!==t.type&&c.a.createElement(u.b,{className:"nav-item-hold",to:t.path},c.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),c.a.createElement("span",{className:"nav-text"},t.name)),t.path&&"extLink"===t.type&&c.a.createElement("a",{className:"nav-item-hold",href:t.path},c.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),c.a.createElement("span",{className:"nav-text"},t.name)),!t.path&&c.a.createElement("div",{className:"nav-item-hold"},c.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),c.a.createElement("span",{className:"nav-text"},t.name)),c.a.createElement("div",{className:"triangle"}))})))),c.a.createElement(g.a,{className:Object(h.a)({"sidebar-left-secondary o-hidden rtl-ps-none":!0,open:t.layout1Settings.leftSidebar.secondaryNavOpen})},this.state.selectedItem&&this.state.selectedItem.sub&&c.a.createElement(v.c,{menu:this.state.selectedItem.sub,closeSecSidenav:this.closeSecSidenav}),c.a.createElement("span",null)),c.a.createElement("div",{onMouseEnter:this.closeSecSidenav,className:Object(h.a)({"sidebar-overlay":!0,open:t.layout1Settings.leftSidebar.secondaryNavOpen})}))}}]),a}(r.Component),j=Object(w.h)(Object(f.b)((function(e){return{setDefaultSettings:S.a.func.isRequired,setLayoutSettings:S.a.func.isRequired,logoutUser:S.a.func.isRequired,user:e.user,settings:e.layout.settings}}),{setLayoutSettings:y.d,setDefaultSettings:y.c,logoutUser:N.d})(O)),L=a(1052),k=a(2113),x=(a(1053),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={shorcutMenuList:[{icon:"i-Shop-4",link:"#",text:"Home"},{icon:"i-Library",link:"#",text:"Ui Kits"},{icon:"i-Drop",link:"#",text:"Apps"},{icon:"i-File-Clipboard-File--Text",link:"#",text:"Form"},{icon:"i-Checked-User",link:"#",text:"Sessions"},{icon:"i-Ambulance",link:"#",text:"Support"}],notificationList:[{icon:"i-Speach-Bubble-6",title:"New message",description:"James: Hey! are you busy?",time:"2019-10-30T02:10:18.931Z",color:"primary",status:"New"},{icon:"i-Receipt-3",title:"New order received",description:"1 Headphone, 3 iPhone",time:"2019-03-10T02:10:18.931Z",color:"success",status:"New"},{icon:"i-Empty-Box",title:"Product out of stock",description:"1 Headphone, 3 iPhone",time:"2019-05-10T02:10:18.931Z",color:"danger",status:"3"},{icon:"i-Data-Power",title:"Server up!",description:"Server rebooted successfully",time:"2019-03-10T02:10:18.931Z",color:"success",status:"3"}],showSearchBox:!1},e.handleMenuClick=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{leftSidebar:{open:!!n.layout1Settings.leftSidebar.secondaryNavOpen||!n.layout1Settings.leftSidebar.open,secondaryNavOpen:!1}}}))},e.toggleFullScreen=function(){document.fullscreenEnabled&&(document.fullscreen?document.exitFullscreen():document.documentElement.requestFullscreen())},e.handleSearchBoxOpen=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{searchBox:{open:!0}}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state;e.shorcutMenuList,e.notificationList;return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"/assets/images/logo.png",alt:""})),c.a.createElement("div",{className:"menu-toggle",onClick:this.handleMenuClick},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)),c.a.createElement("div",{style:{margin:"auto"}}),c.a.createElement("div",{className:"header-part-right"},c.a.createElement("i",{className:"i-Full-Screen header-icon d-none d-sm-inline-block","data-fullscreen":!0,onClick:this.toggleFullScreen}),c.a.createElement("div",{className:"user col px-3"},c.a.createElement(k.a,null,c.a.createElement(k.a.Toggle,{as:"span",className:"toggle-hidden cursor-pointer"},c.a.createElement("img",{src:"/assets/images/faces/1.jpg",id:"userDropdown",alt:"","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"})),c.a.createElement(k.a.Menu,null,c.a.createElement("div",{className:"dropdown-header"},c.a.createElement("i",{className:"i-Lock-User me-1"})," Timothy Carlson"),c.a.createElement(u.a,{to:"/",className:"dropdown-item cursor-pointer"},"Account settings"),c.a.createElement(u.a,{to:"/",className:"dropdown-item cursor-pointer"},"Billing history"),c.a.createElement(u.a,{to:"/",className:"dropdown-item cursor-pointer",onClick:this.props.logoutUser},"Sign out"))))))}}]),a}(r.Component)),M=Object(w.h)(Object(f.b)((function(e){return{setDefaultSettings:S.a.func.isRequired,setLayoutSettings:S.a.func.isRequired,logoutUser:S.a.func.isRequired,user:e.user,settings:e.layout.settings}}),{setLayoutSettings:y.d,setDefaultSettings:y.c,logoutUser:N.d})(x)),C=a(1054),F=a(69),I=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e.handleSearchBoxClose=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{searchBox:{open:!1}}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props,t=e.settings,a=e.routes;return c.a.createElement("div",null,c.a.createElement("div",{className:"app-admin-wrap layout-sidebar-large"},c.a.createElement(M,null),c.a.createElement(j,null),c.a.createElement("div",{className:Object(h.a)({"main-content-wrap d-flex flex-column":!0,"sidenav-open":t.layout1Settings.leftSidebar.open})},c.a.createElement(r.Suspense,{fallback:c.a.createElement(F.a,null)},c.a.createElement("div",{className:"main-content"},Object(o.a)(a))),t.footer.show&&c.a.createElement(L.a,null))),c.a.createElement(C.a,{open:t.layout1Settings.searchBox.open,handleClose:this.handleSearchBoxClose}))}}]),a}(r.Component);t.default=Object(w.h)(Object(f.b)((function(e){return{setLayoutSettings:S.a.func.isRequired,settings:e.layout.settings}}),{setLayoutSettings:y.d})(I))}}]);
//# sourceMappingURL=83.5c650ecf.chunk.js.map