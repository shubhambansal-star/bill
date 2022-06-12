(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[98],{2200:function(t,i,e){"use strict";e.r(i);var n=e(8),a=e(9),r=e(15),o=e(16),s=e(0),u=e.n(s),p=e(103),g=e(936),w=e(751),l=function(t){Object(r.a)(e,t);var i=Object(o.a)(e);function e(){var t;Object(n.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=i.call.apply(i,[this].concat(r))).state={useCanvas:!1},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this.state.useCanvas,i=t?w.k:w.j;return u.a.createElement(w.e,{height:320},u.a.createElement(w.h,null),u.a.createElement(w.o,null),u.a.createElement(w.p,{style:{text:{stroke:"none",fontWeight:600}}}),u.a.createElement(w.q,{style:{text:{stroke:"none",fontWeight:600}}}),u.a.createElement(w.c,{text:"X Axis",className:"alt-x-label",includeMargin:!1,xPercent:.025,yPercent:1.01}),u.a.createElement(w.c,{text:"Y Axis",className:"alt-y-label",includeMargin:!1,xPercent:.06,yPercent:.06,style:{transform:"rotate(-90)",textAnchor:"end"}}),u.a.createElement(i,{className:"first-series",data:[{x:1,y:3},{x:2,y:5},{x:3,y:15},{x:4,y:12}]}),u.a.createElement(i,{className:"second-series",data:null}),u.a.createElement(i,{className:"third-series",curve:"curveMonotoneX",data:[{x:1,y:10},{x:2,y:4},{x:3,y:2},{x:4,y:15}],strokeDasharray:t?[7,3]:"7, 3"}),u.a.createElement(i,{className:"fourth-series",curve:g.a.alpha(.5),style:{strokeDasharray:"2 2"},data:[{x:1,y:7},{x:2,y:11},{x:3,y:9},{x:4,y:2}]}))}}]),e}(s.Component),c=function(t){Object(r.a)(e,t);var i=Object(o.a)(e);function e(){var t;Object(n.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=i.call.apply(i,[this].concat(r))).state={data:[]},t.loadData=function(){for(var i=[],e=0;e<20;e++){for(var n=[],a=0;a<100;a++)n.push({x:a,y:(e/10+1)*Math.sin(Math.PI*(e+a)/50)});i.push({color:e,key:e,data:n,opacity:.9})}t.setState({data:[].concat(i)})},t}return Object(a.a)(e,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var t=this.state.data;return u.a.createElement(w.e,{height:320,colorType:"linear",colorDomain:[0,9],colorRange:["yellow","orange"]},u.a.createElement(w.p,null),u.a.createElement(w.q,null),t.map((function(t){return u.a.createElement(w.j,t)})))}}]),e}(s.Component),m=function(t){t.theme;return u.a.createElement(w.e,{height:320},u.a.createElement(w.p,{style:{text:{stroke:"none",fontWeight:600}}}),u.a.createElement(w.q,{style:{text:{stroke:"none",fontWeight:600}}}),u.a.createElement(w.a,{className:"area-series-example",curve:"curveNatural",data:[{x:1,y:10},{x:2,y:5},{x:3,y:15}]}))},y=[{x:"A",y:10},{x:"B",y:5},{x:"C",y:15}],h=[{x:"A",y:12},{x:"B",y:2},{x:"C",y:11}],x=y.map((function(t,i){return{x:t.x,y:Math.max(y[i].y,h[i].y)}})),d=function(t){Object(r.a)(e,t);var i=Object(o.a)(e);function e(){var t;Object(n.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=i.call.apply(i,[this].concat(r))).state={useCanvas:!1},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this.state.useCanvas?w.n:w.m;return u.a.createElement(w.e,{xType:"ordinal",height:300,xDistance:100},u.a.createElement(w.p,{style:{text:{stroke:"none",fontWeight:600}}}),u.a.createElement(w.q,{style:{text:{stroke:"none",fontWeight:600}}}),u.a.createElement(t,{className:"vertical-bar-series-example",data:y}),u.a.createElement(t,{data:h}),u.a.createElement(w.i,{data:x,getLabel:function(t){return t.x}}))}}]),e}(u.a.Component),f=[{id:"00036",y:200400,x:1504121437},{id:"00036",y:200350,x:1504121156},{id:"00036",y:200310,x:1504120874},{id:"00036",y:200260,x:1504120590},{id:"00036",y:200210,x:1504120306},{id:"00036",y:200160,x:1504120024},{id:"00036",y:200120,x:1504119740},{id:"00036",y:200070,x:1504119458},{id:"00036",y:200020,x:1504119177},{id:"00036",y:199980,x:1504118893},{id:"00036",y:199930,x:1504118611},{id:"00036",y:199880,x:1504118330},{id:"00036",y:199830,x:1504118048},{id:"00036",y:199790,x:1504117763},{id:"00036",y:199740,x:1504117481}],v=f.reduce((function(t,i){return{max:Math.max(t.max,i.y),min:Math.min(t.min,i.y)}}),{max:-1/0,min:1/0}),E=function(t){Object(r.a)(e,t);var i=Object(o.a)(e);function e(){var t;Object(n.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=i.call.apply(i,[this].concat(r))).state={useCanvas:!1},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this.state.useCanvas?w.n:w.m;return u.a.createElement(w.e,{margin:{left:75},xType:"time",height:300,yDomain:[v.min,v.max]},u.a.createElement(t,{className:"vertical-bar-series-example",data:f}),u.a.createElement(w.p,{style:{text:{stroke:"none",fontWeight:600}}}),u.a.createElement(w.q,{style:{text:{stroke:"none",fontWeight:600}}}))}}]),e}(u.a.Component),b=e(644),j=["A","B","C","D","E","F","G","H","I","J"],O=j.reduce((function(t,i,e){return t.concat(j.map((function(t,n){return{x:"".concat(i,"1"),y:"".concat(t,"2"),color:(e+n)%Math.floor(n/e)||e}})))}),[]),k=O.reduce((function(t,i){return{min:Math.min(t.min,i.color),max:Math.max(t.max,i.color)}}),{min:1/0,max:-1/0}),C=k.min,N=k.max,A=function(t){Object(r.a)(e,t);var i=Object(o.a)(e);function e(){var t;Object(n.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=i.call.apply(i,[this].concat(r))).state={value:!1},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this,i=this.state.value,e=(this.props.theme,Object(b.a)().domain([C,(C+N)/2,N]).range(["orange","white","cyan"]));return u.a.createElement(w.e,{xType:"ordinal",xDomain:j.map((function(t){return"".concat(t,"1")})),yType:"ordinal",yDomain:j.map((function(t){return"".concat(t,"2")})).reverse(),margin:50,height:500},u.a.createElement(w.p,{orientation:"top",style:{text:{stroke:"none",fontWeight:600}}}),u.a.createElement(w.q,{style:{text:{stroke:"none",fontWeight:600}}}),u.a.createElement(w.f,{colorType:"literal",getColor:function(t){return e(t.color)},style:{stroke:"white",strokeWidth:"2px",rectStyle:{rx:10,ry:10}},className:"heatmap-series-example",data:O,onValueMouseOver:function(i){return t.setState({value:i})},onSeriesMouseOut:function(i){return t.setState({value:!1})}}),u.a.createElement(w.i,{style:{pointerEvents:"none"},data:O,labelAnchorX:"middle",labelAnchorY:"baseline",getLabel:function(t){return"".concat(t.color)}}),!1!==i&&u.a.createElement(w.g,{value:i}))}}]),e}(s.Component),M=[{eruptions:3.6,waiting:79},{eruptions:1.8,waiting:54},{eruptions:3.333,waiting:74},{eruptions:2.283,waiting:62},{eruptions:4.533,waiting:85},{eruptions:2.883,waiting:55},{eruptions:4.7,waiting:88},{eruptions:3.6,waiting:85},{eruptions:1.95,waiting:51},{eruptions:4.35,waiting:85},{eruptions:1.833,waiting:54},{eruptions:3.917,waiting:84},{eruptions:4.2,waiting:78},{eruptions:1.75,waiting:47},{eruptions:4.7,waiting:83},{eruptions:2.167,waiting:52},{eruptions:1.75,waiting:62},{eruptions:4.8,waiting:84},{eruptions:1.6,waiting:52},{eruptions:4.25,waiting:79},{eruptions:1.8,waiting:51},{eruptions:1.75,waiting:47},{eruptions:3.45,waiting:78},{eruptions:3.067,waiting:69},{eruptions:4.533,waiting:74},{eruptions:3.6,waiting:83},{eruptions:1.967,waiting:55},{eruptions:4.083,waiting:76},{eruptions:3.85,waiting:78},{eruptions:4.433,waiting:79},{eruptions:4.3,waiting:73},{eruptions:4.467,waiting:77},{eruptions:3.367,waiting:66},{eruptions:4.033,waiting:80},{eruptions:3.833,waiting:74},{eruptions:2.017,waiting:52},{eruptions:1.867,waiting:48},{eruptions:4.833,waiting:80},{eruptions:1.833,waiting:59},{eruptions:4.783,waiting:90},{eruptions:4.35,waiting:80},{eruptions:1.883,waiting:58},{eruptions:4.567,waiting:84},{eruptions:1.75,waiting:58},{eruptions:4.533,waiting:73},{eruptions:3.317,waiting:83},{eruptions:3.833,waiting:64},{eruptions:2.1,waiting:53},{eruptions:4.633,waiting:82},{eruptions:2,waiting:59},{eruptions:4.8,waiting:75},{eruptions:4.716,waiting:90},{eruptions:1.833,waiting:54},{eruptions:4.833,waiting:80},{eruptions:1.733,waiting:54},{eruptions:4.883,waiting:83},{eruptions:3.717,waiting:71},{eruptions:1.667,waiting:64},{eruptions:4.567,waiting:77},{eruptions:4.317,waiting:81},{eruptions:2.233,waiting:59},{eruptions:4.5,waiting:84},{eruptions:1.75,waiting:48},{eruptions:4.8,waiting:82},{eruptions:1.817,waiting:60},{eruptions:4.4,waiting:92},{eruptions:4.167,waiting:78},{eruptions:4.7,waiting:78},{eruptions:2.067,waiting:65},{eruptions:4.7,waiting:73},{eruptions:4.033,waiting:82},{eruptions:1.967,waiting:56},{eruptions:4.5,waiting:79},{eruptions:4,waiting:71},{eruptions:1.983,waiting:62},{eruptions:5.067,waiting:76},{eruptions:2.017,waiting:60},{eruptions:4.567,waiting:78},{eruptions:3.883,waiting:76},{eruptions:3.6,waiting:83},{eruptions:4.133,waiting:75},{eruptions:4.333,waiting:82},{eruptions:4.1,waiting:70},{eruptions:2.633,waiting:65},{eruptions:4.067,waiting:73},{eruptions:4.933,waiting:88},{eruptions:3.95,waiting:76},{eruptions:4.517,waiting:80},{eruptions:2.167,waiting:48},{eruptions:4,waiting:86},{eruptions:2.2,waiting:60},{eruptions:4.333,waiting:90},{eruptions:1.867,waiting:50},{eruptions:4.817,waiting:78},{eruptions:1.833,waiting:63},{eruptions:4.3,waiting:72},{eruptions:4.667,waiting:84},{eruptions:3.75,waiting:75},{eruptions:1.867,waiting:51},{eruptions:4.9,waiting:82},{eruptions:2.483,waiting:62},{eruptions:4.367,waiting:88},{eruptions:2.1,waiting:49},{eruptions:4.5,waiting:83},{eruptions:4.05,waiting:81},{eruptions:1.867,waiting:47},{eruptions:4.7,waiting:84},{eruptions:1.783,waiting:52},{eruptions:4.85,waiting:86},{eruptions:3.683,waiting:81},{eruptions:4.733,waiting:75},{eruptions:2.3,waiting:59},{eruptions:4.9,waiting:89},{eruptions:4.417,waiting:79},{eruptions:1.7,waiting:59},{eruptions:4.633,waiting:81},{eruptions:2.317,waiting:50},{eruptions:4.6,waiting:85},{eruptions:1.817,waiting:59},{eruptions:4.417,waiting:87},{eruptions:2.617,waiting:53},{eruptions:4.067,waiting:69},{eruptions:4.25,waiting:77},{eruptions:1.967,waiting:56},{eruptions:4.6,waiting:88},{eruptions:3.767,waiting:81},{eruptions:1.917,waiting:45},{eruptions:4.5,waiting:82},{eruptions:2.267,waiting:55},{eruptions:4.65,waiting:90},{eruptions:1.867,waiting:45},{eruptions:4.167,waiting:83},{eruptions:2.8,waiting:56},{eruptions:4.333,waiting:89},{eruptions:1.833,waiting:46},{eruptions:4.383,waiting:82},{eruptions:1.883,waiting:51},{eruptions:4.933,waiting:86},{eruptions:2.033,waiting:53},{eruptions:3.733,waiting:79},{eruptions:4.233,waiting:81},{eruptions:2.233,waiting:60},{eruptions:4.533,waiting:82},{eruptions:4.817,waiting:77},{eruptions:4.333,waiting:76},{eruptions:1.983,waiting:59},{eruptions:4.633,waiting:80},{eruptions:2.017,waiting:49},{eruptions:5.1,waiting:96},{eruptions:1.8,waiting:53},{eruptions:5.033,waiting:77},{eruptions:4,waiting:77},{eruptions:2.4,waiting:65},{eruptions:4.6,waiting:81},{eruptions:3.567,waiting:71},{eruptions:4,waiting:70},{eruptions:4.5,waiting:81},{eruptions:4.083,waiting:93},{eruptions:1.8,waiting:53},{eruptions:3.967,waiting:89},{eruptions:2.2,waiting:45},{eruptions:4.15,waiting:86},{eruptions:2,waiting:58},{eruptions:3.833,waiting:78},{eruptions:3.5,waiting:66},{eruptions:4.583,waiting:76},{eruptions:2.367,waiting:63},{eruptions:5,waiting:88},{eruptions:1.933,waiting:52},{eruptions:4.617,waiting:93},{eruptions:1.917,waiting:49},{eruptions:2.083,waiting:57},{eruptions:4.583,waiting:77},{eruptions:3.333,waiting:68},{eruptions:4.167,waiting:81},{eruptions:4.333,waiting:81},{eruptions:4.5,waiting:73},{eruptions:2.417,waiting:50},{eruptions:4,waiting:85},{eruptions:4.167,waiting:74},{eruptions:1.883,waiting:55},{eruptions:4.583,waiting:77},{eruptions:4.25,waiting:83},{eruptions:3.767,waiting:83},{eruptions:2.033,waiting:51},{eruptions:4.433,waiting:78},{eruptions:4.083,waiting:84},{eruptions:1.833,waiting:46},{eruptions:4.417,waiting:83},{eruptions:2.183,waiting:55},{eruptions:4.8,waiting:81},{eruptions:1.833,waiting:57},{eruptions:4.8,waiting:76},{eruptions:4.1,waiting:84},{eruptions:3.966,waiting:77},{eruptions:4.233,waiting:81},{eruptions:3.5,waiting:87},{eruptions:4.366,waiting:77},{eruptions:2.25,waiting:51},{eruptions:4.667,waiting:78},{eruptions:2.1,waiting:60},{eruptions:4.35,waiting:82},{eruptions:4.133,waiting:91},{eruptions:1.867,waiting:53},{eruptions:4.6,waiting:78},{eruptions:1.783,waiting:46},{eruptions:4.367,waiting:77},{eruptions:3.85,waiting:84},{eruptions:1.933,waiting:49},{eruptions:4.5,waiting:83},{eruptions:2.383,waiting:71},{eruptions:4.7,waiting:80},{eruptions:1.867,waiting:49},{eruptions:3.833,waiting:75},{eruptions:3.417,waiting:64},{eruptions:4.233,waiting:76},{eruptions:2.4,waiting:53},{eruptions:4.8,waiting:94},{eruptions:2,waiting:55},{eruptions:4.15,waiting:76},{eruptions:1.867,waiting:50},{eruptions:4.267,waiting:82},{eruptions:1.75,waiting:54},{eruptions:4.483,waiting:75},{eruptions:4,waiting:78},{eruptions:4.117,waiting:79},{eruptions:4.083,waiting:78},{eruptions:4.267,waiting:78},{eruptions:3.917,waiting:70},{eruptions:4.55,waiting:79},{eruptions:4.083,waiting:70},{eruptions:2.417,waiting:54},{eruptions:4.183,waiting:86},{eruptions:2.217,waiting:50},{eruptions:4.45,waiting:90},{eruptions:1.883,waiting:54},{eruptions:1.85,waiting:54},{eruptions:4.283,waiting:77},{eruptions:3.95,waiting:79},{eruptions:2.333,waiting:64},{eruptions:4.15,waiting:75},{eruptions:2.35,waiting:47},{eruptions:4.933,waiting:86},{eruptions:2.9,waiting:63},{eruptions:4.583,waiting:85},{eruptions:3.833,waiting:82},{eruptions:2.083,waiting:57},{eruptions:4.367,waiting:82},{eruptions:2.133,waiting:67},{eruptions:4.35,waiting:74},{eruptions:2.2,waiting:54},{eruptions:4.45,waiting:83},{eruptions:3.567,waiting:73},{eruptions:4.5,waiting:73},{eruptions:4.15,waiting:88},{eruptions:3.817,waiting:80},{eruptions:3.917,waiting:71},{eruptions:4.45,waiting:83},{eruptions:2,waiting:56},{eruptions:4.283,waiting:79},{eruptions:4.767,waiting:78},{eruptions:4.533,waiting:84},{eruptions:1.85,waiting:58},{eruptions:4.25,waiting:83},{eruptions:1.983,waiting:43},{eruptions:2.25,waiting:60},{eruptions:4.75,waiting:75},{eruptions:4.117,waiting:81},{eruptions:2.15,waiting:46},{eruptions:4.417,waiting:90},{eruptions:1.817,waiting:46},{eruptions:4.467,waiting:74}],D=function(t){Object(r.a)(e,t);var i=Object(o.a)(e);function e(){var t;Object(n.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=i.call.apply(i,[this].concat(r))).state={data:M},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this.state.data;return u.a.createElement(w.e,{xDomain:[40,100],yDomain:[1.5,8],getX:function(t){return t.waiting},getY:function(t){return t.eruptions},height:300,width:700},u.a.createElement(w.d,{animation:!0,className:"contour-series-example",style:{stroke:"#125C77",strokeLinejoin:"round"},colorRange:["#79C7E3","#FF9833"],data:t}),u.a.createElement(w.l,{animation:!0,data:t,size:1,color:"#125C77"}),u.a.createElement(w.b,{style:{all:{fill:"#fff"}}}),u.a.createElement(w.p,null),u.a.createElement(w.q,null))}}]),e}(s.Component),W=function(t){Object(r.a)(e,t);var i=Object(o.a)(e);function e(){var t;Object(n.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=i.call.apply(i,[this].concat(r))).state={},t}return Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(p.a,{routeSegments:[{name:"Charts",path:"/charts"},{name:"React Vis Charts"}]}),u.a.createElement(p.h,{title:"heatmap with label"},u.a.createElement(A,null)),u.a.createElement("div",{className:"py-2"}),u.a.createElement(p.h,{title:"line chart with many color"},u.a.createElement(c,null)),u.a.createElement("div",{className:"py-2"}),u.a.createElement(p.h,{title:"big base bar series"},u.a.createElement(E,null)),u.a.createElement("div",{className:"py-2"}),u.a.createElement(p.h,{title:"contour map"},u.a.createElement(D,null)),u.a.createElement("div",{className:"py-2"}),u.a.createElement(p.h,{title:"line chart"},u.a.createElement(l,null)),u.a.createElement("div",{className:"py-2"}),u.a.createElement(p.h,{title:"area Chart"},u.a.createElement(m,null)),u.a.createElement("div",{className:"py-2"}),u.a.createElement(p.h,{title:"bar Chart"},u.a.createElement(d,null)))}}]),e}(s.Component);i.default=W}}]);
//# sourceMappingURL=98.595cd987.chunk.js.map