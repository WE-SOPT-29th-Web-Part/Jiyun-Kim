(this["webpackJsonpgithub-profile-finder"]=this["webpackJsonpgithub-profile-finder"]||[]).push([[0],{36:function(n,e,t){},37:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var r,i,o,c,a,s,l,u,b,d,j=t(1),p=t.n(j),f=t(26),x=t.n(f),g=(t(36),t(2)),h=t(7),O=(t(37),t(3)),m=t(0),v=O.a.h1(r||(r=Object(g.a)(["\n    margin-bottom: 10px;\n    font-size: 32px;\n    color: rgb(229, 230, 231);\n"]))),y=function(){return Object(m.jsx)(v,{children:"GitHub Profile Finder"})},w=O.a.div(i||(i=Object(g.a)(["\n    & > .yellow {\n        background-color: #ffff56;\n    }\n    & > .red {\n        background-color: #ff725f;\n        position: relative;\n        left: -15px;\n        top: 3px;\n    }\n    & > .blue {\n        position: relative;\n        right: -5px;\n        background-color: #2382ff;\n    }\n    & > div {\n        width: 10px;\n        height: 10px;\n        animation: loading_circle 1s linear 0s infinite normal none;\n    \n        @keyframes loading_circle {\n            0% { transform: rotate(0deg); border-radius: 50%; }\n            50% { transform: rotate(90deg); border-radius: 0%; }\n            100% { transform: rotate(180deg); border-radius: 50%; }\n        }\n    }\n"]))),k=function(){return Object(m.jsxs)(w,{children:[Object(m.jsx)("div",{className:"yellow"}),Object(m.jsx)("div",{className:"red"}),Object(m.jsx)("div",{className:"blue"})]})},I=O.a.div(o||(o=Object(g.a)(["\n    color: white;\n    font-size: 2rem;\n    margin-top: 20px;\n"]))),U=function(){return Object(m.jsx)(I,{children:"\uc0ac\uc6a9\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})},S=O.a.article(c||(c=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n"]))),z=O.a.div(a||(a=Object(g.a)(["\n    & > h3 {\n      font-size: 24px;\n      margin-top: 24px;\n      font-weight: bold;\n    }\n\n    & > h4 {\n      font-size: 14px;\n      margin-top: 5px;\n    }\n\n    & > div {\n      font-size: 0.25rem;\n      margin-top: 10px;\n    }\n\n    & > p {\n      padding: 10px 0;\n      text-align: center;\n    }\n"]))),_=function(n){var e=n.name,t=n.login,r=n.bio,i=n.blog,o=n.company;return Object(m.jsx)(S,{children:Object(m.jsxs)(z,{children:[Object(m.jsx)("h3",{children:e}),Object(m.jsx)("h4",{children:t}),Object(m.jsx)("div",{children:o}),Object(m.jsx)("div",{children:i}),Object(m.jsx)("p",{children:r})]})})},H=O.a.ul(s||(s=Object(g.a)(["\n  display: flex;\n  width: 100%;\n  margin-top: 10px;\n  font-size: 0.725rem;\n\n    & > li {\n      height: 59px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      line-height: 1.5;\n      margin-right: 10px;\n\n      & > span {\n        font-weight: bold;\n        margin-right: 2px;\n      }\n    }\n"]))),N=function(n){var e=n.followers,t=n.following,r=n.publicRepos;return Object(m.jsxs)(H,{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:e}),"followers"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:t}),"following"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:r}),"Repos"]})]})},C=O.a.header(l||(l=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n\n  & > button {\n    width: 30px;\n    height: 30px;\n    background-color: rgb(251, 251, 253);\n    outline: none;\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n  }\n  & > button:hover {\n    background-color: rgb(236, 235, 235);\n  }\n\n  & > a {\n    border-radius: 50%;\n    text-decoration: none;\n    color: rgb(27, 29, 33);\n    margin-right: 5px;\n    & > img {\n      width: 30px;\n      height: 30px;\n    }\n  }\n"]))),J=function(n){var e=n.htmlUrl,t=n.setUserInfo;return Object(m.jsxs)(C,{children:[Object(m.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:"https://github.githubassets.com/images/mona-loading-default.gif",alt:""})}),Object(m.jsx)("button",{onClick:function(){t({})},children:"x"})]})},D=O.a.article(u||(u=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 16px;\n  color: rgb(45, 47, 49);\n  background-color: rgb(251, 251, 253);\n  width: 35%;\n  padding: 20px;\n  border-radius: 30px;\n  position: relative;\n  animation: slideDown 400ms ease-in 0s 1 normal forwards;\n\n  @keyframes slideDown {\n    0% {\n        transform: translateY(-20px);\n        opacity: 0;\n    }\n    100% {\n        transform: translateY(0px);\n        opacity: 1;\n    }\n  }\n\n    & > img {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    margin-right: 30px;\n  }\n"]))),E=O.a.div(b||(b=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),F=function(n){var e=n.userInfo,t=n.setUserInfo,r=e.data,i=r.avatar_url,o=r.name,c=r.login,a=r.bio,s=r.blog,l=r.company,u=r.html_url,b=r.followers,d=r.following,j=r.public_repos;return Object(m.jsxs)(D,{children:[Object(m.jsx)(J,{htmlUrl:u,setUserInfo:t}),Object(m.jsx)("img",{src:i,alt:"avatar"}),Object(m.jsxs)(E,{children:[Object(m.jsx)(_,{avatarUrl:i,name:o,login:c,bio:a,blog:s,company:l}),Object(m.jsx)(N,{followers:b,following:d,publicRepos:j})]})]})},R=function(n){var e=n.userInfo,t=n.setUserInfo;switch(e.status){case"idle":return Object(m.jsx)(m.Fragment,{});case"pending":return Object(m.jsx)(k,{});case"resolved":return Object(m.jsx)(F,{userInfo:e,setUserInfo:t});case"rejected":return Object(m.jsx)(U,{});default:return Object(m.jsx)(m.Fragment,{})}},G=t(15),Y=t(5),B=t(14),M=t.n(B),P=t(30),X=t(31),q=t.n(X),A=function(){var n=Object(P.a)(M.a.mark((function n(e){var t,r;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q.a.get("https://api.github.com/users/".concat(e));case 3:return t=n.sent,r=t.data,n.next=7,r;case 7:return n.abrupt("return",n.sent);case 10:return n.prev=10,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",null);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),K=O.a.li(d||(d=Object(g.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 34px;\n    padding: 8px 16px;\n    background-color: rgb(229, 230, 231);\n    color: rgb(36, 39, 43);\n    border-radius: 30px;\n    margin-right: 5px;\n    \n    & > span {\n        cursor: pointer;\n    }\n\n    & > button {\n        border: 0;\n        background-color: rgb(229, 230, 231);\n        color: rgb(36, 39, 43);\n        cursor: pointer;\n        width: 15px;\n        height: 15px;\n    }\n"]))),L=function(n){var e=n.item,t=n.history,r=n.setHistory,i=n.setUserInfo,o=function(n){var e=n?"resolved":"rejected";i((function(t){return Object(Y.a)(Object(Y.a)({},t),{},{data:n,status:e})}))};return Object(m.jsxs)(K,{children:[Object(m.jsx)("span",{onClick:function(){i((function(n){return Object(Y.a)(Object(Y.a)({},n),{},{status:"pending"})})),A(e).then((function(n){o(n)}))},children:e}),Object(m.jsx)("button",{onClick:function(){r(t.filter((function(n){return n!==e})))},children:"X"})]})};var Q,T,V,W,Z=O.a.ul(Q||(Q=Object(g.a)(["\n    display: flex;\n    flex-direction: row-reverse;\n    margin-top: 10px;\n"]))),$=function(n){var e=n.history,t=n.setHistory,r=n.setUserInfo;return Object(j.useEffect)((function(){!function(n){var e=n.key,t=n.value;localStorage.setItem(e,JSON.stringify(t))}({key:"history",value:e})}),[e]),Object(m.jsx)(Z,{children:e.map((function(n){return Object(m.jsx)(L,{item:n,history:e,setHistory:t,setUserInfo:r},n)}))})},nn=O.a.div(T||(T=Object(g.a)(["\n  position: relative;\n  display: flex;\n"]))),en=O.a.input(V||(V=Object(g.a)(["\n  width: 220px;\n  height: 40px;\n  padding: 16px;\n  margin-right: 15px;\n  outline: none;\n  color: rgb(251, 251, 253);\n  background-color: rgb(27, 29, 33);\n  border: 0;\n  border-bottom: 2px solid rgb(251, 251, 253);\n"]))),tn=function(n){var e,t=n.setUserInfo,r=Object(j.useState)(""),i=Object(h.a)(r,2),o=i[0],c=i[1],a=Object(j.useState)((e="history",JSON.parse(localStorage.getItem(e)))),s=Object(h.a)(a,2),l=s[0],u=s[1],b=function(n){var e=n?"resolved":"rejected";t((function(t){return Object(Y.a)(Object(Y.a)({},t),{},{data:n,status:e})}))},d=function(){p()||(l.length<3?u([].concat(Object(G.a)(l),[o])):u([].concat(Object(G.a)(l.splice(1,l.length-1)),[o])))},p=function(){return l.filter((function(n){return n===o})).length};return Object(m.jsxs)(nn,{children:[Object(m.jsx)("form",{onSubmit:function(n){n.preventDefault(),t((function(n){return Object(Y.a)(Object(Y.a)({},n),{},{status:"pending"})})),A(o).then((function(n){b(n),d()})),c("")},children:Object(m.jsx)(en,{value:o,type:"text",placeholder:"Github \ud504\ub85c\ud544\uc744 \uac80\uc0c9\ud574\ubcf4\uc138\uc694.",onChange:function(n){c(n.target.value)}})}),Object(m.jsx)($,{history:l,setHistory:u,setUserInfo:t})]})};var rn=O.a.main(W||(W=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),on=function(){var n=Object(j.useState)({data:null,status:"idle"}),e=Object(h.a)(n,2),t=e[0],r=e[1];return Object(j.useEffect)((function(){console.log(t)}),[t]),Object(m.jsxs)(rn,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(tn,{setUserInfo:r}),Object(m.jsx)(R,{userInfo:t,setUserInfo:r})]})};x.a.render(Object(m.jsx)(p.a.StrictMode,{children:Object(m.jsx)(on,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.3697a056.chunk.js.map