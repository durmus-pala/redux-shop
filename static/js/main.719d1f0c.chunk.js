(this["webpackJsonpredux-shop-app"]=this["webpackJsonpredux-shop-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(4),u=n.n(s),o=(n(14),n(15),n(2)),a=n(1),b=Object(o.b)((function(e){return{numberOfLaptops:e.laptop.numberOfLaptops}}),(function(e){return{sellLaptop:function(){return e({type:"SELL_LAPTOP"})}}}))((function(e){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Laptops [Pure Redux]"}),Object(a.jsxs)("h3",{children:["Number of Laptops :",Object(a.jsx)("span",{className:"number",children:e.numberOfLaptops})]}),Object(a.jsx)("button",{onClick:e.sellLaptop,children:"Sell Laptop"})]})})),i="SELL_LAPTOP",j="SELL_PHONE",l="SELL_WATCH",O="SELL_COMP",p=function(){var e=Object(o.d)((function(e){return e.phone.numberOfPhones})),t=Object(o.c)();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Phones [Hooks Example]"}),Object(a.jsxs)("h3",{children:["Number Of Phones: ",Object(a.jsxs)("span",{className:"number",children:[" ",e," "]})," "]}),Object(a.jsx)("button",{onClick:function(){return t({type:j})},children:"Sell Phone"})]})},h=n(5),d=function(){var e=Object(c.useState)(1),t=Object(h.a)(e,2),n=t[0],r=t[1],s=Object(o.c)(),u=Object(o.d)((function(e){return e.watch.numberOfWatches}));return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Watches [Hooks Example]"}),Object(a.jsxs)("h3",{children:["Number Of Watches : ",Object(a.jsxs)("span",{className:"number",children:[" ",u," "]})," "]}),Object(a.jsx)("input",{type:"number",value:n,onChange:function(e){return r(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsxs)("button",{onClick:function(){return s(function(){return{type:l,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}(n))},children:[" ","Sell ",n," Watch"," "]})]})},f=Object(o.b)((function(e){return{numberOfComp:e.comp.numberOfComp}}),(function(e){return{sellComp:function(t){return e(function(){return{type:O,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}(t))}}}))((function(e){var t=r.a.useState(1),n=Object(h.a)(t,2),c=n[0],s=n[1];return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Computers [Pure Redux]"}),Object(a.jsxs)("h3",{children:["Number of Computers :",Object(a.jsx)("span",{className:"number",children:e.numberOfComp})]}),Object(a.jsx)("input",{type:"number",value:c,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsxs)("button",{onClick:function(){e.sellComp(c)},children:["Sell ",c," Comps"]})]})}));var m=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Clarus Shop"}),Object(a.jsx)(b,{}),Object(a.jsx)(p,{}),Object(a.jsx)(d,{}),Object(a.jsx)(f,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,u=t.getTTFB;n(e),c(e),r(e),s(e),u(e)}))},v=n(9),L=n(3),C={numberOfLaptops:100},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(L.a)(Object(L.a)({},e),{},{numberOfLaptops:e.numberOfLaptops-1});default:return e}},P={numberOfPhones:500},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(L.a)(Object(L.a)({},e),{},{numberOfPhones:e.numberOfPhones-1});default:return e}},N={numberOfWatches:750},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(L.a)(Object(L.a)({},e),{},{numberOfWatches:e.numberOfWatches-t.payload});default:return e}},E={numberOfComp:250},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(L.a)(Object(L.a)({},e),{},{numberOfComp:e.numberOfComp-t.payload});default:return e}},w=Object(v.a)({laptop:g,phone:y,watch:S,comp:k}),W=Object(v.b)(w);u.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o.a,{store:W,children:Object(a.jsx)(m,{})})}),document.getElementById("root")),x()}},[[21,1,2]]]);
//# sourceMappingURL=main.719d1f0c.chunk.js.map