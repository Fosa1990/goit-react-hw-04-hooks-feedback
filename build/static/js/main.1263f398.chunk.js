(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var o,r=n(0),l=n.n(r),a=n(9),c=n.n(a),i=(n(22),n(10)),s=n(11),d=n(17),f=n(16),b=n(4),u=n(2),j=n(3),x=n(1);function p(e){var t=e.children,n=e.flex,o=e.vertical;return Object(x.jsx)(h,{flex:n,vertical:o,children:t})}p.defaultProps={flex:!1,vertical:!1};var v,y,h=j.a.section(o||(o=Object(u.a)(["\n  ",";\n\n  ",";\n\n  padding: 0 25px;\n  margin: 0;\n"])),(function(e){return e.flex?"display: flex; align-items: center; justify-content: center; flex-direction: row;":"display: block;"}),(function(e){return e.vertical?"flex-direction: column;":""}));var g={redColor:"#ef2f3c",whiteColor:"#f6f4f3",blueColor:"#276fbf",darkColor:"#183059",yellowColor:"#f0a202",greenColor:"#27991a"};function O(e){var t=e.good,n=e.neutral,o=e.bad,r=e.total,l=e.percent;return Object(x.jsxs)(C,{children:[Object(x.jsxs)(S,{listItemStyles:"green",children:["Good: ",t]}),Object(x.jsxs)(S,{listItemStyles:"yellow",children:["Neutral: ",n]}),Object(x.jsxs)(S,{listItemStyles:"red",children:["Bad: ",o]}),Object(x.jsxs)(S,{listItemStyles:"white",children:["Total: ",r]}),Object(x.jsxs)(S,{listItemStyles:"blue",children:["Positive feedback: ",l,"%"]})]})}O.defaultProps={good:0,neutral:0,bad:0,total:0,percent:0};var m,w,k={green:{color:"".concat(g.greenColor)},yellow:{color:"".concat(g.yellowColor)},red:{color:"".concat(g.redColor)},blue:{color:"".concat(g.blueColor)},white:{color:"".concat(g.whiteColor)}},C=j.a.ul(v||(v=Object(u.a)(["\n  list-style: none;\n  padding: 0;\n"]))),S=j.a.li(y||(y=Object(u.a)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 2px;\n  color: ",";\n"])),(function(e){var t=e.listItemStyles;return k[t].color}));function I(e){var t=e.options,n=e.onLeaveFeedback;return Object(x.jsx)(P,{children:t.map((function(e){return Object(x.jsx)(R,{type:"button",title:"Leave a ".concat(e," response"),onClick:function(){n(e)},children:e},e)}))})}var T,z,P=j.a.div(m||(m=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 10px;\n"]))),R=j.a.button(w||(w=Object(u.a)(["\n  padding: 10px 20px;\n  font-family: var(--big);\n  font-weight: 700;\n  text-transform: capitalize;\n  color: var(--yellow);\n  border: 1px solid gray;\n  border-radius: 6px;\n  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;\n  transition: all 250ms ease-in;\n  :first-of-type {\n    color: var(--green);\n  }\n  :last-of-type {\n    color: var(--red);\n  }\n  :hover {\n    color: var(--white);\n    background-color: var(--yellow);\n  }\n  :first-of-type:hover {\n    background-color: var(--green);\n  }\n  :last-of-type:hover {\n    background-color: var(--red);\n  }\n"])));function F(e){var t=e.message;return Object(x.jsx)(L,{children:Object(x.jsx)(E,{children:t})})}F.defaultProps={message:"It's empty here"};var B,L=j.a.div(T||(T=Object(u.a)(["\n  padding: 5px;\n"]))),E=j.a.p(z||(z=Object(u.a)(["\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"])));function J(e){var t=e.onResetButton;return Object(x.jsx)(N,{title:"Reset values",onClick:t,children:"Reset"})}var M,G,N=j.a.button(B||(B=Object(u.a)(["\n  padding: 10px 20px;\n  font-family: var(--big);\n  font-weight: 700;\n  text-transform: capitalize;\n  color: var(--dark);\n  background-color: var(--white);\n  border: 1px solid gray;\n  border-radius: 6px;\n  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;\n  transition: all 250ms ease-in;\n  :hover {\n    color: var(--white);\n    background-color: var(--dark);\n  }\n"]))),q={redColor:"#ef2f3c",whiteColor:"#f6f4f3",blueColor:"#276fbf",darkColor:"#183059",yellowColor:"#f0a202",greenColor:"#27991a"};function A(e){var t=e.title,n=e.titleType,o=e.titleStyles;return Object(x.jsx)(r.Fragment,{children:!0===n?Object(x.jsx)(H,{titleStyles:o,children:t}):Object(x.jsx)(K,{titleStyles:o,children:t})})}A.defaultProps={title:"Title",titleType:!1,titleStyles:"normal"};var D={accented:{color:"".concat(q.yellowColor)},normal:{color:"".concat(q.blueColor)}},H=j.a.h1(M||(M=Object(u.a)(["\n  text-align: center;\n  font-size: 32px;\n  font-family: var(--big);\n  color: ",";\n"])),(function(e){var t=e.titleStyles;return D[t].color})),K=j.a.h2(G||(G=Object(u.a)(["\n  text-align: center;\n  font-size: 28px;\n  font-family: var(--font);\n  color: ",";\n"])),(function(e){var t=e.titleStyles;return D[t].color})),Q="good",U="neutral";function V(){var e=Object(r.useState)(0),t=Object(b.a)(e,2),n=t[0],o=t[1],l=Object(r.useState)(0),a=Object(b.a)(l,2),c=a[0],i=a[1],s=Object(r.useState)(0),d=Object(b.a)(s,2),f=d[0],u=d[1],j=n+c+f,v=j?Math.floor(n/j*100):0,y=[Q,U,"bad"];return Object(x.jsxs)(r.Fragment,{children:[Object(x.jsxs)(p,{flex:!1,vertical:!1,children:[Object(x.jsx)(A,{title:"Cafe Expresso",titleType:!0,titleStyles:"accented"}),Object(x.jsx)(A,{title:"Please leave feedback",titleType:!1,titleStyles:"normal"}),Object(x.jsx)(I,{options:y,onLeaveFeedback:function(e){e===Q&&o((function(e){return e+1})),e===U&&i((function(e){return e+1})),"bad"===e&&u((function(e){return e+1}))}})]}),Object(x.jsxs)(p,{flex:!0,vertical:!0,children:[Object(x.jsx)(A,{title:"Statistics",titleType:!1,titleStyles:"accented"}),j?Object(x.jsxs)(r.Fragment,{children:[Object(x.jsx)(O,{good:n,neutral:c,bad:f,total:j,percent:v,listItemStyles:"green"}),Object(x.jsx)(J,{onResetButton:function(){o(0),i(0),u(0)}})]}):Object(x.jsx)(F,{message:"There is no feedback"})]})]})}var W=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsx)(V,{})}}]),n}(r.Component),X=W;c.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(X,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1263f398.chunk.js.map