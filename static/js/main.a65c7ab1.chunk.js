(this["webpackJsonpblog-form"]=this["webpackJsonpblog-form"]||[]).push([[0],{170:function(e,a,t){e.exports=t.p+"static/media/logo.968531f8.png"},189:function(e,a,t){e.exports=t(342)},198:function(e,a,t){},215:function(e,a,t){},217:function(e,a,t){},339:function(e,a,t){},340:function(e,a,t){},341:function(e,a,t){},342:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(43),c=t.n(l),o=t(26),s=t(168),m=t(70),u=t(169),i=t(65),p={currentUser:{},errors:{}};t(197),t(198);var d=t(48),E=t(6),f=t(40),b=t.n(f),v=t(82),h=t(83),g=t.n(h);g.a.defaults.baseURL="https://conduit.productionready.io/api/";var w=function(){return"users"},O=function(){return"users/login"},N=function(){return"user"},j=function(e){return{type:"CHANGE_FETCH_STATUS",payload:e}},k=function(e){return{type:"LOGIN_USER",payload:e}},S=function(e,a){return function(){var t=Object(v.a)(b.a.mark((function t(n){var r,l,c,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=O(),t.next=4,g.a.post(r,{user:e});case 4:l=t.sent,c=l.data,localStorage.setItem("token",c.user.token),n({type:"CHANGE_FETCH_STATUS",payload:null}),n(k(c.user)),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),o=t.t0.response.data.errors,n(j(o)),a("password","email or password ".concat(o["email or password"]));case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},x=(t(215),t(170)),y=t.n(x),I=function(){return r.a.createElement("header",null,r.a.createElement("img",{src:y.a,width:"100",alt:"logo"}))},U=t(12),T=t(46),C=t(344),F=t(346),_=t(343),z=t(347),A=t(348),q=t(349),G=(t(217),T.a().shape({username:T.b().max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e - \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0418\u043c\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:T.b().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{6,40}$/,"\u043e\u0442 6 \u0434\u043e 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u0430 \u0446\u0438\u0444\u0440\u0430 \u0438 \u043e\u0434\u043d\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0443\u0436\u0435\u043d"),email:T.b().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430").required("\u041f\u043e\u0447\u0442\u0443, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430")})),H={username:"",password:"",email:""},L=function(){var e=Object(o.b)();return r.a.createElement("div",{className:"formContainer"},r.a.createElement(U.c,{initialValues:H,validationSchema:G,onSubmit:function(a,t){var n=t.setFieldError;e(function(e,a){return function(){var t=Object(v.a)(b.a.mark((function t(n){var r,l,c,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=w(),t.next=4,g.a.post(r,{user:e});case 4:l=t.sent,c=l.data,localStorage.setItem("token",c.user.token),n({type:"CHANGE_FETCH_STATUS",payload:null}),n(k(c.user)),t.next=18;break;case 11:t.prev=11,t.t0=t.catch(0),o=t.t0.response.data.errors,n(j(o)),a("email",o.email),a("username",o.username),a("password",o.password);case 18:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(a,n))}},r.a.createElement(C.a,{className:"form"},r.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"username"},"\u0418\u043c\u044f",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(C.a.Item,{name:"username"},r.a.createElement(F.a,{id:"username",name:"username",placeholder:"\u0418\u0432\u0430\u043d",size:"large",suffix:r.a.createElement(z.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"email"},"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(C.a.Item,{name:"email"},r.a.createElement(F.a,{id:"email",name:"email",placeholder:"ivan@mail.ru",size:"large",suffix:r.a.createElement(A.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"pwd"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(C.a.Item,{name:"password"},r.a.createElement(F.a.Password,{id:"pwd",name:"password",placeholder:"bu7UYvjl2nkj9WNshd",size:"large",autoComplete:"off"}))),r.a.createElement("div",{className:"formButtonsContainer"},r.a.createElement(_.a,{loading:!1,disabled:!1,size:"large",shape:"round",icon:r.a.createElement(q.a,null),className:"button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))),r.a.createElement("div",{className:"link-container"},r.a.createElement("span",null,"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c? "),r.a.createElement(d.b,{to:"/login"},"\u0412\u043e\u0439\u0442\u0438")))},R=t(350),B=(t(339),{password:"",email:""}),W=T.a().shape({password:T.b().required("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0443\u0436\u0435\u043d"),email:T.b().email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430").required("\u041f\u043e\u0447\u0442\u0443, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430")}),D=function(){var e=Object(o.b)(),a=function(){var a=Object(v.a)(b.a.mark((function a(t,n){var r;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=n.setFieldError,e(S(t,r));case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"formContainer"},r.a.createElement(U.c,{initialValues:B,validationSchema:W,onSubmit:a},r.a.createElement(C.a,null,r.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"email"},"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0447\u0442\u0430",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(C.a.Item,{name:"email"},r.a.createElement(F.a,{id:"email",name:"email",placeholder:"ivan@mail.ru",size:"large",suffix:r.a.createElement(A.a,null)}))),r.a.createElement("div",{className:"formItem"},r.a.createElement("label",{htmlFor:"pwd"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("span",{className:"required-star"}," *")),r.a.createElement(C.a.Item,{name:"password"},r.a.createElement(F.a.Password,{id:"pwd",name:"password",size:"large",autoComplete:"off"}))),r.a.createElement("div",{className:"formButtonsContainer"},r.a.createElement(_.a,{loading:!1,disabled:!1,size:"large",shape:"round",icon:r.a.createElement(R.a,null),className:"button"},"\u0412\u043e\u0439\u0442\u0438")))),r.a.createElement("div",{className:"link-container"},r.a.createElement(d.b,{to:"/signup"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))},J=t(117),P=t(351),V=(t(340),function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.currentUser})).username;return r.a.createElement("div",{className:"form-container"},r.a.createElement("h1",null,"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439 ".concat(a)),r.a.createElement(J.a,{disabled:!1,size:"large",className:"button",icon:r.a.createElement(P.a,null),shape:"round",onClick:function(a){a.preventDefault(),localStorage.removeItem("token"),e({type:"LOGOUT_USER"})},type:"danger"},"\u0412\u044b\u0439\u0442\u0438"))}),Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"))},M=t(112),Y=function(e){var a=e.component,t=Object(M.a)(e,["component"]);return r.a.createElement(E.b,Object.assign({},t,{render:function(){return localStorage.getItem("token")?r.a.createElement(a,null):r.a.createElement(E.a,{to:"/login"})}}))},$=function(e){var a=e.component,t=Object(M.a)(e,["component"]);return r.a.createElement(E.b,Object.assign({},t,{render:function(){return localStorage.getItem("token")?r.a.createElement(E.a,{to:"/"}):r.a.createElement(a,null)}}))},K=(t(341),function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.currentUser}));return Object(n.useEffect)((function(){e(function(){var e=Object(v.a)(b.a.mark((function e(a){var t,n,r,l,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage,n=t.token){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,r=N(),e.next=7,g.a.get(r,{headers:{Authorization:"Token ".concat(n)}});case 7:l=e.sent,c=l.data,a(k(c.user)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),401===e.t0.response.status&&localStorage.removeItem("token");case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}())}),[a.id]),r.a.createElement(d.a,null,r.a.createElement(I,null),r.a.createElement(E.d,null,r.a.createElement(Y,{exact:!0,path:"/",component:V}),r.a.createElement($,{exact:!0,path:"/login",component:D}),r.a.createElement($,{exact:!0,path:"/signup",component:L}),r.a.createElement(E.b,{path:"*",component:Z})))}),Q=Object(m.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_USER":return Object(i.a)(Object(i.a)({},e),{},{currentUser:a.payload});case"LOGOUT_USER":return Object(i.a)(Object(i.a)({},e),{},{currentUser:{}});case"CHANGE_FETCH_STATUS":return Object(i.a)(Object(i.a)({},e),{},{errors:a.payload});default:return e}}),Object(u.composeWithDevTools)(Object(m.applyMiddleware)(s.a)));c.a.render(r.a.createElement(o.a,{store:Q},r.a.createElement(K,null)),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.a65c7ab1.chunk.js.map