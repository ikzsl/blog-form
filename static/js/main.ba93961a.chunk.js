(this["webpackJsonpblog-form"]=this["webpackJsonpblog-form"]||[]).push([[0],{174:function(e,a,t){e.exports=t.p+"static/media/logo.968531f8.png"},194:function(e,a,t){e.exports=t(352)},219:function(e,a,t){},225:function(e,a,t){},227:function(e,a,t){},349:function(e,a,t){},350:function(e,a,t){},351:function(e,a,t){},352:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(35),l=t.n(c),o=t(21),s=t(171),u=t(49),m=t(172),i=t(90),p=t(355),d=t(27),f=t.n(d),E=t(67),b=t(84),v=t.n(b),h=t(358);v.a.defaults.baseURL="https://conduit.productionready.io/api/";var g,O=function(){return"users"},j=function(){return"users/login"},w=function(){return"user"},N=Object(h.a)("CHANGE_FETCH_STATUS"),k=Object(h.a)("CHANGE_LOADING_STATUS"),x=Object(h.a)("LOGIN_USER"),I=Object(h.a)("LOGOUT_USER"),S=function(){var e=Object(E.a)(f.a.mark((function e(a,t,n){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(n,{user:a});case 2:r=e.sent,c=r.data,localStorage.setItem("token",c.user.token),t(N(null)),t(x(c.user));case 7:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),y=function(e,a){return function(){var t=Object(E.a)(f.a.mark((function t(n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(k(!0)),t.prev=1,t.next=4,S(e,n,j());case 4:n(k(!1)),t.next=14;break;case 7:t.prev=7,t.t0=t.catch(1),r=t.t0.response,c=r.data.errors,n(N(c)),n(k(!1)),a("password","email or password ".concat(c["email or password"]));case 14:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},q=Object(p.a)((g={},Object(i.a)(g,I,(function(){})),Object(i.a)(g,x,(function(e,a){return a.payload})),g),{}),z=Object(p.a)(Object(i.a)({},N,(function(e,a){return a.payload})),{}),C=Object(p.a)(Object(i.a)({},k,(function(e,a){return a.payload})),!1),U=Object(u.combineReducers)({currentUser:q,errors:z,loading:C}),F=(t(218),t(219),t(48)),A=t(6),T=t(173),_=t.n(T),G=(t(225),t(174)),L=t.n(G),R=function(){return r.a.createElement("header",null,r.a.createElement("img",{src:L.a,width:"100",alt:"logo"}))},B=t(12),D=t(46),H=t(354),W=t(357),J=t(353),P=t(359),V=t(360),Z=t(361),M=(t(227),D.a().shape({username:D.b().max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e - \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0418\u043c\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:D.b().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{6,40}$/,"\u043e\u0442 6 \u0434\u043e 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u0430 \u0446\u0438\u0444\u0440\u0430 \u0438 \u043e\u0434\u043d\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0443\u0436\u0435\u043d"),email:D.b().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430").required("\u041f\u043e\u0447\u0442\u0443, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430")})),Y={username:"",password:"",email:""},$=function(){var e=Object(o.b)();return r.a.createElement("div",{className:"formContainer"},r.a.createElement(B.c,{initialValues:Y,validationSchema:M,onSubmit:function(a,t){var n=t.setFieldError;e(function(e,a){return function(){var t=Object(E.a)(f.a.mark((function t(n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(k(!0)),t.prev=1,t.next=4,S(e,n,O());case 4:n(k(!1)),t.next=16;break;case 7:t.prev=7,t.t0=t.catch(1),r=t.t0.response,c=r.data.errors,n(N(c)),n(k(!1)),a("email",c.email),a("username",c.username),a("password",c.password);case 16:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}(a,n))}},r.a.createElement(H.a,{className:"form"},r.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"username"},"\u0418\u043c\u044f",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(H.a.Item,{name:"username"},r.a.createElement(W.a,{id:"username",name:"username",placeholder:"\u0418\u0432\u0430\u043d",size:"large",suffix:r.a.createElement(P.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"email"},"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(H.a.Item,{name:"email"},r.a.createElement(W.a,{id:"email",name:"email",placeholder:"ivan@mail.ru",size:"large",suffix:r.a.createElement(V.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"pwd"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(H.a.Item,{name:"password"},r.a.createElement(W.a.Password,{id:"pwd",name:"password",placeholder:"bu7UYvjl2nkj9WNshd",size:"large",autoComplete:"off"}))),r.a.createElement("div",{className:"formButtonsContainer"},r.a.createElement(J.a,{loading:!1,disabled:!1,size:"large",shape:"round",icon:r.a.createElement(Z.a,null),className:"button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))),r.a.createElement("div",{className:"link-container"},r.a.createElement("span",null,"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c? "),r.a.createElement(F.b,{to:"/login"},"\u0412\u043e\u0439\u0442\u0438")))},K=t(362),Q=(t(349),{password:"",email:""}),X=D.a().shape({password:D.b().required("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0443\u0436\u0435\u043d"),email:D.b().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430").required("\u041f\u043e\u0447\u0442\u0443, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430")}),ee=function(){var e=Object(o.b)(),a=function(){var a=Object(E.a)(f.a.mark((function a(t,n){var r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=n.setFieldError,e(y(t,r));case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"formContainer"},r.a.createElement(B.c,{initialValues:Q,validationSchema:X,onSubmit:a},r.a.createElement(H.a,null,r.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"email"},"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(H.a.Item,{name:"email"},r.a.createElement(W.a,{id:"email",name:"email",placeholder:"ivan@mail.ru",size:"large",suffix:r.a.createElement(V.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"pwd"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(H.a.Item,{name:"password"},r.a.createElement(W.a.Password,{id:"pwd",name:"password",size:"large",autoComplete:"off"}))),r.a.createElement("div",{className:"formButtonsContainer"},r.a.createElement(J.a,{loading:!1,disabled:!1,size:"large",shape:"round",icon:r.a.createElement(K.a,null),className:"button"},"\u0412\u043e\u0439\u0442\u0438")))),r.a.createElement("div",{className:"link-container"},r.a.createElement(F.b,{to:"/signup"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))},ae=t(120),te=t(363),ne=(t(350),function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.currentUser})).username,t=function(){return a?r.a.createElement("h1",null,"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439 ".concat(a)):null};return r.a.createElement("div",{className:"form-container"},r.a.createElement(t,null),r.a.createElement(ae.a,{disabled:!1,size:"large",className:"button",icon:r.a.createElement(te.a,null),shape:"round",onClick:function(a){a.preventDefault(),localStorage.removeItem("token"),e(I())},type:"danger"},"\u0412\u044b\u0439\u0442\u0438"))}),re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"))},ce=t(115),le=function(e){var a=e.component,t=Object(ce.a)(e,["component"]);return r.a.createElement(A.b,Object.assign({},t,{render:function(){return localStorage.getItem("token")?r.a.createElement(a,null):r.a.createElement(A.a,{to:"/login"})}}))},oe=function(e){var a=e.component,t=Object(ce.a)(e,["component"]);return r.a.createElement(A.b,Object.assign({},t,{render:function(){return localStorage.getItem("token")?r.a.createElement(A.a,{to:"/"}):r.a.createElement(a,null)}}))},se=(t(351),function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.currentUser})),t=Object(o.c)((function(e){return e.loading}));return Object(n.useEffect)((function(){e(function(){var e=Object(E.a)(f.a.mark((function e(a){var t,n,r,c,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage,n=t.token){e.next=3;break}return e.abrupt("return");case 3:return a(k(!0)),e.prev=4,e.next=7,v.a.interceptors.request.use((function(e){return e.headers.Authorization="Token ".concat(n),e}));case 7:return r=w(),e.next=10,v.a.get(r);case 10:c=e.sent,l=c.data,a(x(l.user)),a(k(!1)),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),401===e.t0.response.status&&localStorage.removeItem("token"),a(k(!1));case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(a){return e.apply(this,arguments)}}())}),[a.id]),r.a.createElement(F.a,null,r.a.createElement(R,null),r.a.createElement(_.a,{loaded:!t}),r.a.createElement(A.d,null,r.a.createElement(le,{exact:!0,path:"/",component:ne}),r.a.createElement(oe,{exact:!0,path:"/login",component:ee}),r.a.createElement(oe,{exact:!0,path:"/signup",component:$}),r.a.createElement(A.b,{path:"*",component:re})))}),ue=Object(u.createStore)(U,Object(m.composeWithDevTools)(Object(u.applyMiddleware)(s.a)));l.a.render(r.a.createElement(o.a,{store:ue},r.a.createElement(se,null)),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.ba93961a.chunk.js.map