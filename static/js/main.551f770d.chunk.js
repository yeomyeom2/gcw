(this.webpackJsonpgcw=this.webpackJsonpgcw||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),i=c(29),r=c.n(i),o=c(2),l=c(4),j=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(l.b,{to:"/gcw/social",children:"\uc0ac\ud68c\uacf5\ud5cc\ud65c\ub3d9"})})},u=c(7),d=c.n(u),b=c(10),p=c(9),O=c(11),h=c.n(O),g=function(e){var t=e.data;return Object(n.jsxs)("li",{children:[Object(n.jsx)("div",{className:"pic",children:Object(n.jsx)("img",{src:t.filename,alt:t.title})}),Object(n.jsx)("p",{className:"subject",children:Object(n.jsx)(l.b,{to:"/gcw/social/"+t._id,children:Object(n.jsx)("span",{children:t.title})})}),Object(n.jsx)("span",{className:"date",children:t.reg_date.split(" ")[0]})]})},m=c(18),f=c(31),x=Object(f.a)((function(e,t){return void 0===e?{pageNum:1}:"PAGE_CHANGE"===t.type?Object(m.a)(Object(m.a)({},e),{},{pageNum:t.pageNum}):e}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),N=function(e){var t=e.totalPage,c=x.getState().pageNum,a=Math.ceil(t/5),s=Math.ceil(c/5),i=5*s;i>t&&(i=t),console.log("lastPage:",i);var r=0,o=i+1,j=(r=i%5===0?i-4:i-3)-1;return Object(n.jsxs)("div",{className:"board_paging",children:[Object(n.jsx)(l.b,{to:"/gcw/social",className:["prev",s>=a?"on":"disabled"].join(" "),onClick:function(){return x.dispatch({type:"PAGE_CHANGE",pageNum:j})},children:"\uc774\uc804 \ud398\uc774\uc9c0\ub85c"}),function(){for(var e=[],t=function(t){e.push(Object(n.jsx)(l.b,{to:"/gcw/social",className:c===t?"current":"",onClick:function(){return x.dispatch({type:"PAGE_CHANGE",pageNum:t})},children:t},t))},a=r;a<=i;a++)t(a);return e}(),Object(n.jsx)(l.b,{to:"/gcw/social",className:["next",s<a?"on":"disabled"].join(" "),onClick:function(){return x.dispatch({type:"PAGE_CHANGE",pageNum:o})},children:"\ub2e4\uc74c \ud398\uc774\uc9c0\ub85c"})]})},v=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),c=t[0],s=t[1],i=x.getState().pageNum,r=Object(a.useState)(0),o=Object(p.a)(r,2),l=o[0],j=o[1];Object(a.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("//test-idback.withhive.com/test/api/getCom2usCompanyInfo/social?lang=ko&pagenum=".concat(i,"&pagesize=").concat(3));case 3:t=e.sent,s(t.data.data),j(t.data.totalCount),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("api \ud638\ucd9c \uc5d0\ub7ec");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[i,3]);var u=c.map((function(e,t){return Object(n.jsx)(g,{data:e},t)})),O=Math.ceil(l/3);return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("ul",{className:"list-social",children:u}),Object(n.jsx)(N,{totalPage:O})]})},w=function(){return Object(n.jsx)("div",{className:"GCWcontents",children:Object(n.jsx)(v,{})})},_=function(e){var t=e.match.params.id,c=Object(a.useState)([]),s=Object(p.a)(c,2),i=s[0],r=s[1];return console.log(),Object(a.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("//test-idback.withhive.com/test/api/getCom2usCompanyInfo/social?id=".concat(t));case 2:c=e.sent,r(c.data.data[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsxs)("div",{className:"GCWcontents",children:[Object(n.jsx)("div",{className:"board-view",children:Object(n.jsxs)("dl",{children:[Object(n.jsxs)("dt",{children:[i.title," ",Object(n.jsx)("span",{className:"date",children:i.reg_date})]}),Object(n.jsx)("dd",{className:"article",dangerouslySetInnerHTML:{__html:i.description}})]})}),Object(n.jsx)("div",{className:"board_foot",children:Object(n.jsx)(l.b,{to:"/gcw/social",className:"btn_base",children:"\ubaa9\ub85d\ubcf4\uae30"})})]})},E=(c(61),c(62),function(){return Object(n.jsx)("div",{className:"GCWwrap",children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/gcw/social/:id",component:_}),Object(n.jsx)(o.a,{path:"/gcw/social",component:w}),Object(n.jsx)(o.a,{path:"/gcw/",component:j})]})})}),C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(E,{})})}),document.getElementById("root")),C()}},[[63,1,2]]]);
//# sourceMappingURL=main.551f770d.chunk.js.map