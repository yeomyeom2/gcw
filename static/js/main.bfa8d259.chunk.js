(this.webpackJsonpgcw=this.webpackJsonpgcw||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),s=c.n(n),i=c(29),r=c.n(i),o=c(2),l=c(4),j=c(7),u=c.n(j),d=c(10),b=c(9),p=c(11),O=c.n(p),h=function(e){var t=e.data;return Object(a.jsxs)("li",{children:[Object(a.jsx)("div",{className:"pic",children:Object(a.jsx)("img",{src:t.filename,alt:t.title})}),Object(a.jsx)("p",{className:"subject",children:Object(a.jsx)(l.b,{to:"/gcw/social/"+t._id,children:Object(a.jsx)("span",{children:t.title})})}),Object(a.jsx)("span",{className:"date",children:t.reg_date.split(" ")[0]})]})},g=c(18),m=c(31),f=Object(m.a)((function(e,t){return void 0===e?{pageNum:1}:"PAGE_CHANGE"===t.type?Object(g.a)(Object(g.a)({},e),{},{pageNum:t.pageNum}):e}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),x=function(e){var t=e.totalPage,c=f.getState().pageNum,n=Math.ceil(t/5),s=Math.ceil(c/5),i=5*s;i>t&&(i=t),console.log("lastPage:",i);var r=0,o=i+1,j=(r=i%5===0?i-4:i-3)-1;return Object(a.jsxs)("div",{className:"board_paging",children:[Object(a.jsx)(l.b,{to:"/gcw/social",className:["prev",s>=n?"on":"disabled"].join(" "),onClick:function(){return f.dispatch({type:"PAGE_CHANGE",pageNum:j})},children:"\uc774\uc804 \ud398\uc774\uc9c0\ub85c"}),function(){for(var e=[],t=function(t){e.push(Object(a.jsx)(l.b,{to:"/gcw/social",className:c===t?"current":"",onClick:function(){return f.dispatch({type:"PAGE_CHANGE",pageNum:t})},children:t},t))},n=r;n<=i;n++)t(n);return e}(),Object(a.jsx)(l.b,{to:"/gcw/social",className:["next",s<n?"on":"disabled"].join(" "),onClick:function(){return f.dispatch({type:"PAGE_CHANGE",pageNum:o})},children:"\ub2e4\uc74c \ud398\uc774\uc9c0\ub85c"})]})},N=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],i=f.getState().pageNum,r=Object(n.useState)(0),o=Object(b.a)(r,2),l=o[0],j=o[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://test-idback.withhive.com/test/api/getCom2usCompanyInfo/social?lang=ko&pagenum=".concat(i,"&pagesize=").concat(3));case 3:t=e.sent,s(t.data.data),j(t.data.totalCount),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("api \ud638\ucd9c \uc5d0\ub7ec");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[i,3]);var p=c.map((function(e,t){return Object(a.jsx)(h,{data:e},t)})),g=Math.ceil(l/3);return Object(a.jsxs)(n.Fragment,{children:[Object(a.jsx)("ul",{className:"list-social",children:p}),Object(a.jsx)(x,{totalPage:g})]})},v=function(){return Object(a.jsx)("div",{className:"GCWcontents",children:Object(a.jsx)(N,{})})},_=function(e){var t=e.match.params.id,c=Object(n.useState)([]),s=Object(b.a)(c,2),i=s[0],r=s[1];return console.log(),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("//test-idback.withhive.com/test/api/getCom2usCompanyInfo/social?id=".concat(t));case 2:c=e.sent,r(c.data.data[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(a.jsxs)("div",{className:"GCWcontents",children:[Object(a.jsx)("div",{className:"board-view",children:Object(a.jsxs)("dl",{children:[Object(a.jsxs)("dt",{children:[i.title," ",Object(a.jsx)("span",{className:"date",children:i.reg_date})]}),Object(a.jsx)("dd",{className:"article",dangerouslySetInnerHTML:{__html:i.description}})]})}),Object(a.jsx)("div",{className:"board_foot",children:Object(a.jsx)(l.b,{to:"/gcw/social",className:"btn_base",children:"\ubaa9\ub85d\ubcf4\uae30"})})]})},w=(c(61),c(62),function(){return Object(a.jsx)("div",{className:"GCWwrap",children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/gcw/social/:id",component:_}),Object(a.jsx)(o.a,{path:"/gcw/",component:v})]})})}),E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(w,{})})}),document.getElementById("root")),E()}},[[63,1,2]]]);
//# sourceMappingURL=main.bfa8d259.chunk.js.map