(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(2),l=function(e){var n=e.persons,t=e.nameFilter,a=e.handleRemove;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement("p",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return a(e)}},"delete"))}))},i=function(e){var n=e.handleFilter,t=e.nameFilter;return r.a.createElement("div",null,"filter shown with"," ",r.a.createElement("input",{onChange:n,value:t}))},m=function(e){var n=e.addNew,t=e.handleNameChange,a=e.newName,u=e.handleNumberChange,c=e.newNumber;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add New"),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:t,value:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:u,value:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},f=t(3),d=t.n(f),s="https://pacific-fjord-48842.herokuapp.com/api/persons",h=function(){return d.a.get(s)},p=function(e){return d.a.post(s,e).then((function(e){return e.data}))},b=function(e){return d.a.delete("".concat(s,"/").concat(e)).catch((function(e){console.log("something went wrong",e)})).then((function(e){return e}))},v=function(e,n){return d.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},E=(t(36),function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),f=Object(o.a)(c,2),d=f[0],s=f[1],E=Object(a.useState)(""),w=Object(o.a)(E,2),g=w[0],j=w[1],O=Object(a.useState)(""),N=Object(o.a)(O,2),C=N[0],k=N[1],S=Object(a.useState)(null),F=Object(o.a)(S,2),y=F[0],T=F[1],D=Object(a.useState)(null),J=Object(o.a)(D,2),L=J[0],R=J[1];Object(a.useEffect)((function(){h().then((function(e){u(e.data)})).catch((function(e){R("error"),T("Error fetching data from server")}))}),[]);var x=function(e){var n=e.notification;return null===n?null:r.a.createElement("div",{className:L},n)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(x,{notification:y}),r.a.createElement(i,{handleFilter:function(e){k(e.target.value)},nameFilter:C}),r.a.createElement(m,{handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){j(e.target.value)},addNew:function(e){e.preventDefault();var n={name:d,number:g};if(t.map((function(e){return e.name})).includes(n.name)){var a=t.filter((function(e){return e.name===n.name}))[0].id;v(a,n).then((function(e){u(t.map((function(n){return n.id!==a?n:e}))),R("info"),T("".concat(n.name," was updated")),setTimeout((function(){T(null)}),4e3),s(""),j("")})).catch((function(e){R("error"),T("Error in updating phonebook"),console.log(e)}))}else p(n).then((function(e){u(t.concat(e)),R("info"),T("".concat(n.name," was created")),setTimeout((function(){T(null)}),4e3),s(""),j("")})).catch((function(e){R("error"),T("Could not create new person")}))},newName:d,newNumber:g}),r.a.createElement(l,{persons:t,nameFilter:C,handleRemove:function(e){if(!window.confirm("Delete"))return"";b(e.id).then((function(){u(t.filter((function(n){return n.id!==e.id}))),T("".concat(e.name," was deleted")),setTimeout((function(){T(null)}),4e3)})).catch((function(e){R("error"),T("Error deleting")}))}}))});c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c507f07c.chunk.js.map