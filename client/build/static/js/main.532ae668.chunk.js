(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/tab-logo.f94e4003.svg"},109:function(e,n,t){"use strict";t.r(n);var a,r,o,c,i,s,d=t(1),l=t.n(d),u=t(36),j=t.n(u),g=(t(93),t(42)),b=t(82),m=t(121),O=t(123),h=t(120),f=t(81),p=(t(94),t(95),t(96),t(122)),v=t(114),x=t(124),k=t(4),w=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(p.a,{bg:"light",expand:"md",children:Object(k.jsxs)(v.a,{children:[Object(k.jsx)(p.a.Brand,{href:"/",children:"Throw Me A Bone"}),Object(k.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(p.a.Collapse,{id:"basic-navbar-nav",children:Object(k.jsxs)(x.a,{className:"me-auto",children:[Object(k.jsx)(x.a.Link,{href:"#/",children:"Home"}),Object(k.jsx)(x.a.Link,{href:"about",children:"About"}),Object(k.jsx)(x.a.Link,{href:"profile",children:"Profile"}),Object(k.jsx)(x.a.Link,{href:"contact",children:"Contact"}),Object(k.jsx)(x.a.Link,{href:"login",children:"Login"}),Object(k.jsx)(x.a.Link,{href:"signup",children:"signup"})]})})]})})})},I=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("footer",{className:"footer mt-auto py-3",children:Object(k.jsx)(v.a,{children:Object(k.jsx)("img",{alt:"...",className:"img-fluid",width:"600",src:t(104).default})})})})},y=t(126),S=t(31),D=t(125),$=(Object(D.a)(a||(a=Object(S.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      savedDogs {\n        dogId\n        breed\n        image\n        description\n        age\n        spaynuet\n      }\n    }\n  }\n"]))),Object(D.a)(r||(r=Object(S.a)(["\n{\n  dogs {\n  id\n  name\n  breed\n  image\n  age\n  spaynuet\n  }\n}\n"])))),_=t(58),T=t.n(_),L=t(83),N=t(75),B=t(55),F=t(118),A=t(127),E=t(119),J=t(129),C=(Object(D.a)(o||(o=Object(S.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),Object(D.a)(c||(c=Object(S.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),Object(D.a)(i||(i=Object(S.a)(["\n  mutation saveDog($DogData: DogInput!) {\n    saveDog(DogData: $DogData) {\n      _id\n      username\n      email\n      savedDogs {\n        dogId\n        breed\n        image\n        description\n        age\n        spaynuet\n      }\n    }\n  }\n"])))),M=(Object(D.a)(s||(s=Object(S.a)(["\n  mutation removeDog($dogId: ID!) {\n    removeDog(dogId: $dogId) {\n      _id\n      username\n      email\n      savedDogs {\n        dogId\n        breed\n        image\n        description\n        age\n        spaynuet\n      }\n    }\n  }\n"]))),t(76)),P=t(77),U=t(59),q=t.n(U),z=new(function(){function e(){Object(M.a)(this,e)}return Object(P.a)(e,[{key:"getProfile",value:function(){return q()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return q()(e).exp<Date.now()/1e3}catch(n){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),H=function(e){var n=e.response,t=Object(d.useState)([]),a=Object(B.a)(t,2),r=a[0],o=(a[1],Object(d.useState)(localStorage.getItem("saved_dogs")?JSON.parse(localStorage.getItem("saved_dogs")):[])),c=Object(B.a)(o,2),i=c[0],s=c[1],l=Object(J.a)(C),u=Object(B.a)(l,2),j=u[0];u[1].error;Object(d.useEffect)((function(){return function(){var e;(e=i).length?localStorage.setItem("saved_dogs",JSON.stringify(e)):localStorage.removeItem("saved_dogs")}}));var b=function(){var e=Object(N.a)(T.a.mark((function e(n){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.find((function(e){return e.id===n})),z.loggedIn()?z.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,j({variables:{dogData:Object(g.a)({},t)}});case 7:a=e.sent,a.data,console.log(i),s([].concat(Object(L.a)(i),[t.id])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(n){return e.apply(this,arguments)}}();return console.log(null===n||void 0===n?void 0:n.data),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.a,{children:Object(k.jsx)("h1",{children:"Adopt or Sponsor one of these beauties!"})}),Object(k.jsxs)(v.a,{children:[Object(k.jsx)("h2",{children:r.length?"We currently have ".concat(r.length," up for Adoption:"):"Find out more by clicking on the each dog's picture."}),Object(k.jsx)(F.a,{children:n.loading?Object(k.jsx)("div",{children:"unloading"}):n.data.dogs.map((function(e){return Object(k.jsxs)(A.a,{border:"dark",m:10,children:[e.image?Object(k.jsx)(A.a.Img,{src:e.image,alt:"The picture for ".concat(e.name),variant:"top",style:{width:150}}):null,Object(k.jsxs)(A.a.Body,{children:[Object(k.jsx)(A.a.Title,{children:e.name}),Object(k.jsxs)("p",{className:"small",children:["Breed: ",e.breed]}),Object(k.jsx)(A.a.Text,{children:e.description}),z.loggedIn()&&Object(k.jsx)(E.a,{disabled:null===i||void 0===i?void 0:i.some((function(n){return n===e.id})),className:"btn-block btn-info",onClick:function(){return b(e.id)},children:(null===i||void 0===i?void 0:i.some((function(n){return n===e.id})))?"".concat(e.name," is already saved!"):"Save This dog!"})]})]},e.id)}))})]})]})};function W(){var e=Object(y.a)($),n=e.loading,t=e.data,a=e.error;return t&&console.log(t),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(w,{}),Object(k.jsx)(H,{response:{loading:n,data:t,error:a}}),Object(k.jsx)(I,{})]})}var G=Object(b.a)({uri:"/graphql"}),K=Object(f.a)((function(e,n){var t=n.headers,a=localStorage.getItem("id_token");return{headers:Object(g.a)(Object(g.a)({},t),{},{authorization:a?"Bearer ".concat(a):""})}})),Q=new m.a({link:K.concat(G),cache:new O.a});var R=function(){return Object(k.jsx)(h.a,{client:Q,children:Object(k.jsx)(W,{})})};j.a.render(Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsx)(R,{})}),document.getElementById("root"))},94:function(e,n,t){},95:function(e,n,t){},96:function(e,n,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.532ae668.chunk.js.map