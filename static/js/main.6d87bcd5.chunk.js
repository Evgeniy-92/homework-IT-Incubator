(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),s=n.n(r),i=(n(93),n(43)),o=n.n(i),j=n(7),l=n(33),u=n(22),d=n.n(u),b=n(20),O=n(1);var h=function(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(b.c)((function(e){return e.theme.currentTheme})),s=n?d.a.menu:"".concat(d.a.menu," ").concat(d.a.active),i="dark"===r?"".concat(d.a.item," ").concat(d.a.itemWhite):d.a.item;return Object(O.jsxs)("div",{className:s,onMouseLeave:function(){c(!0)},children:[Object(O.jsx)(l.b,{className:i,activeClassName:d.a.activeItem,to:"/pre-Junior",children:"pre-junior"}),Object(O.jsx)(l.b,{className:i,activeClassName:d.a.activeItem,to:"/junior",children:"junior"}),Object(O.jsx)(l.b,{className:i,activeClassName:d.a.activeItem,to:"/junior+",children:"junior+"}),Object(O.jsx)("span",{className:d.a.square,onClick:function(){c(!1)}})]})},x=n(12),p=n(29),m=n.n(p);var v=function(e){return Object(O.jsxs)("div",{className:m.a.messageWrapper,children:[Object(O.jsx)("img",{src:e.avatar,alt:"avatar"}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"flex-end"},children:[Object(O.jsx)("div",{className:m.a.angle}),Object(O.jsxs)("div",{className:m.a.message,children:[Object(O.jsx)("div",{className:m.a.name,children:e.name}),Object(O.jsxs)("div",{className:m.a.block,children:[Object(O.jsx)("div",{className:m.a.textMessage,children:e.message}),Object(O.jsx)("div",{className:m.a.timeMessage,children:e.time})]})]})]})]})},f="https://delai-vibor.com/wp-content/uploads/2018/01/Web-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82-2.jpg",_="Yauheni",g="\u042f \u0441\u0435\u0439\u0447\u0430\u0441 \u0443\u0447\u0443 JavaScript \u0438 React ",C="22:00";var k=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:["homeworks 1",Object(O.jsx)(v,{avatar:f,name:_,message:g,time:C})]}),Object(O.jsx)("hr",{})]})};var N=function(e){return Object(O.jsxs)("div",{children:[e.affair.name,Object(O.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},y=n(75),S=n.n(y);var w=function(e){var t=e.data.map((function(t){return Object(O.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(O.jsxs)("div",{className:S.a.container,children:[t,Object(O.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var W=function(){var e=Object(a.useState)(T),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(j.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:["homeworks 2",Object(O.jsx)(w,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]}),Object(O.jsx)("hr",{})]})},H=n(35),I=n(152),D=n(57),E=n.n(D),B=function(e){var t=e.name,n=e.setNameCallback,a=e.onKeyPressHandler,c=e.addUser,r=e.error,s=e.totalUsers,i="Error, incorrect name"===r?E.a.error:"";return Object(O.jsxs)("div",{className:E.a.container,children:[Object(O.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:a}),Object(O.jsx)("span",{children:r}),Object(O.jsx)("button",{onClick:c,children:"add"}),Object(O.jsx)("span",{children:s})]})},L=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(j.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),u=l[0],d=l[1],b=function(){""!==s.trim()?(n(s),i(""),alert("Hello ".concat(s," !"))):d("Error, incorrect name")},h=t.length;return Object(O.jsx)(B,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;i(t),d("")},addUser:b,error:u,totalUsers:h,onKeyPressHandler:function(e){"Enter"===e.key&&b()}})};var M=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:["homeworks 3",Object(O.jsx)(L,{users:n,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};c([t].concat(Object(H.a)(n)))}})]}),Object(O.jsx)("hr",{})]})},P=n(10),U=n(15),A=n(38),F=n.n(A),R=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(F.a.error," ").concat(i||""),l="".concat(F.a.input," ").concat(r?F.a.errorInput:F.a.superInput," ").concat(s);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(P.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(O.jsx)("span",{className:j,children:r})]})},G=n(50),J=n.n(G),K=n(51),V=n.n(K),Y=function(e){var t=e.red,n=e.className,a=e.disabled,c=Object(U.a)(e,["red","className","disabled"]),r="".concat(t?V.a.red:V.a.default," ").concat(n),s=a?V.a.disabled:r;return Object(O.jsx)("button",Object(P.a)({className:s},c))},q=n(58),z=n.n(q),Z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(z.a.checkbox," ").concat(a||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(P.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(O.jsx)("span",{className:z.a.spanClassName,children:c})]})};var Q=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:["homeworks 4",Object(O.jsxs)("div",{className:J.a.column,children:[Object(O.jsx)(R,{value:n,onChangeText:c,onEnter:s,error:r,spanClassName:J.a.testSpanError}),Object(O.jsx)(R,{className:J.a.blue}),Object(O.jsx)(Y,{children:"default"}),Object(O.jsx)(Y,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(Y,{disabled:!0,children:"disabled"}),Object(O.jsx)(Z,{checked:l,onChangeChecked:u,children:"some text "}),Object(O.jsx)(Z,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]})]}),Object(O.jsx)("hr",{})]})},X=n(76),$=n.n(X),ee=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(U.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],u=c||{},d=u.children,b=u.onDoubleClick,h=u.className,x=Object(U.a)(u,["children","onDoubleClick","className"]),p="".concat($.a.span," ").concat(h||"");return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(R,Object(P.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(O.jsxs)("span",Object(P.a)(Object(P.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:p},x),{},{children:["\u270e",d||r.value]}))})};function te(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ne(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}te("test",{x:"A",y:1});ne("test",{x:"",y:0});var ae=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:["homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)(ee,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(O.jsx)(Y,{onClick:function(){te("editable-span-value",n)},children:"save"}),Object(O.jsx)(Y,{onClick:function(){var e=ne("editable-span-value","");c(e)},children:"restore"})]}),Object(O.jsx)("hr",{})]})};var ce=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(k,{}),Object(O.jsx)(W,{}),Object(O.jsx)(M,{}),Object(O.jsx)(Q,{}),Object(O.jsx)(ae,{})]})};var re=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"404"}),Object(O.jsx)("div",{children:"Page not found!"}),Object(O.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},se={loadingValue:!1},ie=n(52),oe=n.n(ie);var je=function(){var e=Object(b.c)((function(e){return e.loading})),t=Object(b.b)();return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:["homeworks 10",e.loadingValue?Object(O.jsx)("div",{className:oe.a.load,children:Object(O.jsx)("div",{className:oe.a.ring})}):Object(O.jsx)("div",{className:oe.a.buttonWrapper,children:Object(O.jsx)(Y,{onClick:function(){t({type:"SHOW-LOADING"}),setTimeout((function(){t({type:"HIDE-LOADING"})}),3e3),console.log("loading...")},children:"set loading..."})})]}),Object(O.jsx)("hr",{})]})},le=n(59),ue=n.n(le),de=function(e){var t=e.options,n=e.className,a=e.onChange,c=e.onChangeOption,r=Object(U.a)(e,["options","className","onChange","onChangeOption"]),s=t?t.map((function(e,t){return Object(O.jsx)("option",{className:ue.a.option,value:e,children:e},"0-1")})):[],i=ue.a.select+(n?" "+n:"");return Object(O.jsx)("select",Object(P.a)(Object(P.a)({className:i,onChange:function(e){a&&a(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))},be=n(77),Oe=n.n(be),he=function(e){e.type;var t=e.name,n=(e.className,e.options),a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(U.a)(e,["type","name","className","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),r&&r(e.currentTarget.value)},o=Oe.a.radio,j=n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(P.a)({type:"radio",className:o,name:t,checked:e===a,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:j})},xe=["x","y","z"];var pe=function(){var e=Object(a.useState)(xe[1]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:["homeworks 7",Object(O.jsx)("div",{style:{marginLeft:"10px"},children:Object(O.jsx)(de,{options:xe,value:n,onChangeOption:c})}),Object(O.jsx)("div",{style:{marginLeft:"10px"},children:Object(O.jsx)(he,{name:"radio",options:xe,value:n,onChangeOption:c})})]}),Object(O.jsx)("hr",{})]})},me=function(e,t){switch(t.type){case"SORT-UP":return Object(H.a)(e).sort((function(e,t){return e.age<t.age?1:-1}));case"SORT-DOWN":return Object(H.a)(e).sort((function(e,t){return e.age>t.age?1:-1}));case"CHECK":return Object(H.a)(e).filter((function(e){return e.age>18}));default:return e}},ve=n(60),fe=n.n(ve),_e=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ge=function(){var e=Object(a.useState)(_e),t=Object(j.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(O.jsxs)("div",{className:fe.a.peopleWrapper,children:[Object(O.jsx)("span",{children:e.name}),Object(O.jsx)("span",{children:e.age})]},e._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:["homeworks 8",Object(O.jsx)("div",{style:{marginLeft:"10px"},children:r}),Object(O.jsxs)("div",{className:fe.a.buttonWrapper,children:[Object(O.jsx)(Y,{onClick:function(){return c(me(_e,{type:"SORT-UP"}))},children:"sort up"}),Object(O.jsx)(Y,{onClick:function(){return c(me(_e,{type:"SORT-DOWN"}))},children:"sort down"}),Object(O.jsx)(Y,{onClick:function(){return c(me(_e,{type:"CHECK"}))},children:" check 18"})]})]}),Object(O.jsx)("hr",{})]})},Ce=n(24),ke=n.n(Ce);var Ne=function(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(new Date),s=Object(j.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(!1),u=Object(j.a)(l,2),d=u[0],b=u[1],h=function(){clearInterval(n)},x=i.toLocaleTimeString(),p=i.toLocaleDateString(),m=d?ke.a.timeBlock:"".concat(ke.a.timeBlock," ").concat(ke.a.timeMargin);return Object(O.jsxs)("div",{className:ke.a.wrapper,children:[Object(O.jsx)("div",{className:m,onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:x}),d&&Object(O.jsx)("div",{className:ke.a.dateBlock,children:p}),Object(O.jsxs)("div",{className:ke.a.buttonBlock,children:[Object(O.jsx)(Y,{className:ke.a.buttonStyle,onClick:function(){h();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(O.jsx)(Y,{className:ke.a.buttonStyle,onClick:h,children:"stop"})]})]})};var ye=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:["homeworks 9",Object(O.jsx)(Ne,{})]}),Object(O.jsx)("hr",{})]})},Se=n(78),we=n.n(Se),Te=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,c=e.value,r=Object(U.a)(e,["type","onChange","onChangeRange","className","value"]),s="".concat(we.a.range," ").concat(a||"");return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("input",Object(P.a)({value:c,type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:s},r))})},We=n(153),He=function(e){var t=e.onHandleChange,n=e.value,a=e.min,c=e.max,r=e.step,s=e.disable;return Object(O.jsx)("div",{style:{width:"700px",display:"inline-block"},children:Object(O.jsx)(We.a,{value:n,onChange:function(e,n){t&&t(n)},"aria-labelledby":"range-slider",min:a,max:c,step:r,disabled:s})})},Ie=n(151);var De=function(){var e=Object(a.useState)([20,70]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(10),s=Object(j.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(90),u=Object(j.a)(l,2),d=u[0],b=u[1],h=Object(a.useState)(5),x=Object(j.a)(h,2),p=x[0],m=(x[1],Object(a.useState)(!1)),v=Object(j.a)(m,2),f=v[0],_=(v[1],{display:"inline-block",width:"30px",marginLeft:"10px"});return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:["homeworks 11",Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{style:_,children:n[0]}),Object(O.jsx)(Te,{onChangeRange:function(e){c([e,n[1]])},value:n[0]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{style:_,children:n[0]}),Object(O.jsx)(He,{value:n,onHandleChange:function(e){c(e)},min:i,max:d,step:p,disable:f}),Object(O.jsx)("span",{style:_,children:n[1]}),Object(O.jsx)(Ie.a,{style:{width:"120px",marginRight:"10px"},type:"number",label:"min value",variant:"filled",InputProps:{inputProps:{max:99,min:0}},value:i,onChange:function(e){o(+e.currentTarget.value)}}),Object(O.jsx)(Ie.a,{style:{width:"120px"},type:"number",label:"max value",variant:"filled",InputProps:{inputProps:{max:100,min:1}},value:d,onChange:function(e){b(+e.currentTarget.value)}})]})]}),Object(O.jsx)("hr",{})]})};var Ee=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(pe,{}),Object(O.jsx)(ge,{}),Object(O.jsx)(ye,{}),Object(O.jsx)(je,{}),Object(O.jsx)(De,{})]})},Be={currentTheme:"purple"},Le=["dark","red","some","purple"];var Me=function(){var e=Object(b.c)((function(e){return e.theme.currentTheme})),t=Object(b.b)();return Object(O.jsxs)("div",{className:o.a[e],children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{paddingLeft:"15px"},children:[Object(O.jsx)("span",{children:"homeworks 12"}),Object(O.jsx)("div",{children:Object(O.jsx)(de,{options:Le,value:e,onChangeOption:function(e){t(function(e){return{type:"CHANGE-THEME",newTheme:e}}(e))}})})]}),Object(O.jsx)("hr",{})]})},Pe=n(83),Ue=n.n(Pe),Ae=function(e){return Ue.a.post("https://neko-cafe-back.herokuapp.com/auth/test",e)};var Fe=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(j.a)(r,2),i=s[0],o=s[1],l={success:n};return Object(O.jsxs)("div",{children:[Object(O.jsx)(Y,{onClick:function(){Ae(l).then((function(e){o(e.data.errorText)})).catch((function(e){var t;o(null===(t=e.response)||void 0===t?void 0:t.data.errorText)}))},children:"Button"}),Object(O.jsx)(Z,{onChange:function(e){c(e.currentTarget.checked)},checked:n}),i]})};var Re=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(Fe,{})})};var Ge=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(Me,{}),Object(O.jsx)(Re,{})]})},Je="/pre-junior",Ke="/junior",Ve="/junior+";var Ye=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(x.d,{children:[Object(O.jsx)(x.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(x.a,{to:Je})}}),Object(O.jsx)(x.b,{path:Je,render:function(){return Object(O.jsx)(ce,{})}}),Object(O.jsx)(x.b,{path:Ke,render:function(){return Object(O.jsx)(Ee,{})}}),Object(O.jsx)(x.b,{path:Ve,render:function(){return Object(O.jsx)(Ge,{})}}),Object(O.jsx)(x.b,{render:function(){return Object(O.jsx)(re,{})}})]})})};var qe=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(h,{}),Object(O.jsx)(Ye,{})]})})};var ze=function(){var e=Object(b.c)((function(e){return e.theme.currentTheme}));return Object(O.jsxs)("div",{className:o.a[e],children:[Object(O.jsx)("div",{children:"react homeworks:"}),Object(O.jsx)(qe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ze=n(62),Qe=Object(Ze.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW-LOADING":var n=Object(P.a)({},e);return n.loadingValue=!0,n;case"HIDE-LOADING":var a=Object(P.a)({},e);return a.loadingValue=!1,a;default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":return Object(P.a)(Object(P.a)({},e),{},{currentTheme:t.newTheme});default:return e}}}),Xe=Object(Ze.b)(Qe),$e=Xe;window.store=Xe,s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(b.a,{store:$e,children:Object(O.jsx)(ze,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,t,n){e.exports={menu:"Header_menu__3IIfq",active:"Header_active__165we",item:"Header_item__3wDDm",itemWhite:"Header_itemWhite__2u2ZH",activeItem:"Header_activeItem__2Yc5b",square:"Header_square__39yYP"}},24:function(e,t,n){e.exports={wrapper:"Clock_wrapper__1H9Eo",timeBlock:"Clock_timeBlock__28Af2",timeMargin:"Clock_timeMargin__3NY7Q",dateBlock:"Clock_dateBlock__2shJW",buttonBlock:"Clock_buttonBlock__1Y93T"}},29:function(e,t,n){e.exports={messageWrapper:"Message_messageWrapper__WHeNu",message:"Message_message__3rmCR",name:"Message_name__3dpOt",block:"Message_block__1M5I0",textMessage:"Message_textMessage__2QgrH",angle:"Message_angle__1_2wB"}},38:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2Udw9",errorInput:"SuperInputText_errorInput__21OWU",error:"SuperInputText_error__1z-bW",input:"SuperInputText_input__1UPtL"}},43:function(e,t,n){e.exports={dark:"HW12_dark__3nqA-",red:"HW12_red__2lb_i",some:"HW12_some__2dT6Z",purple:"HW12_purple__2FI3J"}},50:function(e,t,n){e.exports={blue:"HW4_blue__2EjBU",column:"HW4_column__2mJvw",testSpanError:"HW4_testSpanError__28_lS"}},51:function(e,t,n){e.exports={default:"SuperButton_default__1gbSM",red:"SuperButton_red__30k6m",disabled:"SuperButton_disabled__2joEE"}},52:function(e,t,n){e.exports={ring:"HW10_ring__om8xI",load:"HW10_load__1bhSy",loadingD:"HW10_loadingD__2GD26",buttonWrapper:"HW10_buttonWrapper__3a5T_"}},57:function(e,t,n){e.exports={someClass:"Greeting_someClass__psW8-",error:"Greeting_error__25vVD",container:"Greeting_container__27Zjl"}},58:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1W3u9",spanClassName:"SuperCheckbox_spanClassName__3U2T-"}},59:function(e,t,n){e.exports={option:"SuperSelect_option__2y1Bu",select:"SuperSelect_select__3w-YU"}},60:function(e,t,n){e.exports={peopleWrapper:"homeWorkReducer_peopleWrapper__2LDeB",buttonWrapper:"homeWorkReducer_buttonWrapper__2c_T9"}},75:function(e,t,n){e.exports={container:"Affairs_container__tGFC3"}},76:function(e,t,n){e.exports={span:"SuperEditableSpan_span__VcIoU"}},77:function(e,t,n){e.exports={radio:"SuperRadio_radio__2TfzH"}},78:function(e,t,n){e.exports={range:"SuperRange_range__3UEVy"}},93:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.6d87bcd5.chunk.js.map