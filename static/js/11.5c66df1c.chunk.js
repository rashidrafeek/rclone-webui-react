(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{426:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,s=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(l){r=!0,s=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw s}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},434:function(e,t,a){"use strict";var n=a(4),r=a(11),s=a(139),o=a(18),c=a(0),l=a.n(c),i=a(1),u=a.n(i),f=a(28),d=a.n(f),p=a(37),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,f=e.addon,m=e.plaintext,b=e.innerRef,g=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),O=u||("select"===s||"textarea"===s?s:"input"),j="form-control";m?(j+="-plaintext",O=u||"input"):"file"===s?j+="-file":h&&(j=f?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var E=Object(p.l)(d()(t,i&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,j),a);return("input"===O||u&&"function"===typeof u)&&(g.type=s),g.children&&!m&&"select"!==s&&"string"===typeof O&&"select"!==O&&(Object(p.r)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(O,Object(n.a)({},g,{ref:b,className:E}))},t}(l.a.Component);b.propTypes=m,b.defaultProps={type:"text"},t.a=b},443:function(e,t,a){"use strict";var n=a(4),r=a(11),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(28),u=a.n(i),f=a(37),d={tag:f.p,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,a=e.cssModule,s=e.color,c=e.body,l=e.inverse,i=e.outline,d=e.tag,p=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(f.l)(u()(t,"card",!!l&&"text-white",!!c&&"card-body",!!s&&(i?"border":"bg")+"-"+s),a);return o.a.createElement(d,Object(n.a)({},m,{className:b,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},444:function(e,t,a){"use strict";var n=a(4),r=a(11),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(28),u=a.n(i),f=a(37),d={tag:f.p,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,c=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(f.l)(u()(t,"card-body"),a);return o.a.createElement(c,Object(n.a)({},l,{className:i,ref:s}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},445:function(e,t,a){"use strict";var n=a(4),r=a(11),s=a(139),o=a(18),c=a(0),l=a.n(c),i=a(1),u=a.n(i),f=a(28),d=a.n(f),p=a(37),m={children:u.a.node,inline:u.a.bool,tag:p.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,o=e.tag,c=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.l)(d()(t,!!s&&"form-inline"),a);return l.a.createElement(o,Object(n.a)({},i,{ref:c,className:u}))},t}(c.Component);b.propTypes=m,b.defaultProps={tag:"form"},t.a=b},516:function(e,t,a){"use strict";var n=a(4),r=a(11),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(28),u=a.n(i),f=a(37),d={tag:f.p,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),l=Object(f.l)(u()(t,"card-header"),a);return o.a.createElement(s,Object(n.a)({},c,{className:l}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},518:function(e,t,a){"use strict";var n=a(4),r=a(11),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(28),u=a.n(i),f=a(37),d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:f.p,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.row,c=e.disabled,l=e.check,i=e.inline,d=e.tag,p=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(f.l)(u()(t,!!s&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!c)&&"disabled"),a);return o.a.createElement(d,Object(n.a)({},p,{className:m}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},519:function(e,t,a){"use strict";var n=a(4),r=a(11),s=a(0),o=a.n(s),c=a(1),l=a.n(c),i=a(28),u=a.n(i),f=a(148),d=a.n(f),p=a(37),m=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:m,order:m,offset:m})]),g={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:p.p,className:l.a.string,cssModule:l.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:l.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},O=function(e){var t=e.className,a=e.cssModule,s=e.hidden,c=e.widths,l=e.tag,i=e.check,f=e.size,m=e.for,b=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];c.forEach(function(t,n){var r=e[t];if(delete b[t],r||""===r){var s,o=!n;if(d()(r)){var c,l=o?"-":"-"+t+"-";s=v(o,t,r.size),g.push(Object(p.l)(u()(((c={})[s]=r.size||""===r.size,c["order"+l+r.order]=r.order||0===r.order,c["offset"+l+r.offset]=r.offset||0===r.offset,c))),a)}else s=v(o,t,r),g.push(s)}});var h=Object(p.l)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,g,!!g.length&&"col-form-label"),a);return o.a.createElement(l,Object(n.a)({htmlFor:m},b,{className:h}))};O.propTypes=g,O.defaultProps=h,t.a=O},800:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(5),s=a(426),o=a(38),c=a(90),l=a(89),i=a(39),u=a(91),f=a(0),d=a.n(f),p=a(88),m=a(443),b=a(516),g=a(444),h=a(518),v=a(519),O=a(434),j=a(445),E=a(138),y=a(420),R=a(104),N=a(141),w=a(67);function M(e){var t=e.data;return e.hasError?d.a.createElement("p",null,"Error loading."):d.a.createElement(p.a,{sm:12,lg:4,md:6},d.a.createElement(m.a,null,d.a.createElement(b.a,null,"Version"),d.a.createElement(g.a,null,d.a.createElement("p",null,d.a.createElement("strong",null,"Arch:"),t.arch),d.a.createElement("p",null,d.a.createElement("strong",null,"goVersion:"),t.goVersion),d.a.createElement("p",null,d.a.createElement("strong",null,"OS:"),t.os),d.a.createElement("p",null,d.a.createElement("strong",null,"Rclone version:"),t.version),d.a.createElement("p",null,d.a.createElement("strong",null,"isGit:"),t.isGit))))}var k=function(e){function t(e,a){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(l.a)(t).call(this,e,a))).getRcloneStatus=function(){R.a.post(w.a.getRcloneVersion).then(function(e){i.setState({version:e.data,hasError:!1})},function(){i.setState({hasError:!0})})},i.getMemStats=function(){R.a.post(w.a.getRcloneMemStats).then(function(e){i.setState({memStats:e.data})}).catch(function(e){console.log("Rejected"+e)})},i.getOptions=function(){R.a.post(w.a.getOptions).then(function(e){i.setState({options:e.data})}).catch(function(e){console.log("Rejected"+e)})},i.getOptionViewCards=function(e,t){var a=[];if(t)for(var n=0,r=Object.entries(t);n<r.length;n++){var o=r[n],c=Object(s.a)(o,2),l=c[0],u=c[1];a.push(d.a.createElement(h.a,{key:e+"$"+l,row:!0},d.a.createElement(v.a,{for:"driveType",sm:5},l),d.a.createElement(p.a,{sm:7},d.a.createElement(O.a,{onChange:i.handleInputChange,type:"text",value:null!==u?u:"",name:e+"$"+l}))))}return a},i.getOptionsView=function(){var e=i.state,t=e.hasError,a=e.options;if(t)return d.a.createElement("p",null,"Error loading.");var n=[];if(!t&&a)for(var r=0,o=Object.entries(a);r<o.length;r++){var c=o[r],l=Object(s.a)(c,2),u=l[0],f=l[1];n.push(d.a.createElement(p.a,{sm:12,lg:4,md:6,key:u},d.a.createElement(m.a,null,d.a.createElement(b.a,null,u),d.a.createElement(g.a,null,i.getOptionViewCards(u,f)))))}return d.a.createElement(j.a,{onSubmit:function(e){return e.preventDefault()&&console.log("Hey")}},d.a.createElement(E.a,{lg:12},n))},i.handleInputChange=function(e){var t=e.target.name,a=e.target.value,s=t.split("$");i.setState({options:Object(r.a)({},i.state.options,Object(n.a)({},s[0],Object(n.a)({},s[1],a)))})},i.state={version:{},hasError:!1,memStats:{},options:{}},i}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getRcloneStatus(),this.getOptions()}}]),Object(i.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{"data-test":"backendComponent"},d.a.createElement(N.a,null,d.a.createElement(y.a,{fluid:!0},d.a.createElement(E.a,null,d.a.createElement(M,{data:this.state.version,hasError:this.state.hasError})),this.getOptionsView())))}}]),t}(d.a.Component);t.default=k}}]);
//# sourceMappingURL=11.5c66df1c.chunk.js.map