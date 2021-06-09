(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{31:function(e,t,a){e.exports=a(61)},36:function(e,t,a){},37:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),o=a.n(r),c=(a(36),a(37),a(29)),s=a(4),i=a(2),m=a(3),u=a(1),d=a(7),p=a(6),E=a(8),h=a.n(E),y="http://35.223.238.250:8145/api/auth/people",b=new(function(){function e(){Object(i.a)(this,e)}return Object(m.a)(e,[{key:"getEmployees",value:function(){return h.a.get(y)}},{key:"createEmployee",value:function(e){return h.a.post(y,e)}},{key:"getEmployeeById",value:function(e){return h.a.get(y+"/"+e)}},{key:"updateEmployee",value:function(e,t){return h.a.put(y+"/"+t,e)}},{key:"deleteEmployee",value:function(e){return h.a.delete(y+"/"+e)}}]),e}()),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),console.log(e),n.state={employees:[]},n.addEmployee=n.addEmployee.bind(Object(u.a)(n)),n.editEmployee=n.editEmployee.bind(Object(u.a)(n)),n.deleteEmployee=n.deleteEmployee.bind(Object(u.a)(n)),n.login=n.login.bind(Object(u.a)(n)),n.imc=n.imc.bind(Object(u.a)(n)),n.email=n.email.bind(Object(u.a)(n)),n.cerrarSesion=n.cerrarSesion.bind(Object(u.a)(n)),n.editEmployee=n.editEmployee.bind(Object(u.a)(n)),n.deleteEmployee=n.deleteEmployee.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"deleteEmployee",value:function(e){var t=this;b.deleteEmployee(e).then((function(a){t.setState({employees:t.state.employees.filter((function(t){return t.id!==e}))})}))}},{key:"viewEmployee",value:function(e){this.props.history.push("/view-employee/".concat(e))}},{key:"editEmployee",value:function(e){this.props.history.push("/add-employee/".concat(e))}},{key:"componentDidMount",value:function(){var e=this;b.getEmployees().then((function(t){console.log(t),e.setState({employees:t.data.content})}))}},{key:"addEmployee",value:function(){this.props.history.push("/add-employee/_add")}},{key:"imc",value:function(){this.props.history.push("/add-imc/_add")}},{key:"email",value:function(){this.props.history.push("/emails")}},{key:"login",value:function(){this.props.history.push("/login/_add")}},{key:"cerrarSesion",value:function(){sessionStorage.setItem("token",null),alert("Sesion cerrada")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-center"},"Employees List"),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-success",onClick:this.addEmployee}," Agregar Usuario"),l.a.createElement("button",{className:"btn btn-info",onClick:this.imc}," Admins "),l.a.createElement("button",{className:"btn btn-info",onClick:this.email}," Emails "),l.a.createElement("button",{className:"btn btn-info",onClick:this.login}," Login "),l.a.createElement("button",{className:"btn btn-danger",onClick:this.cerrarSesion}," Cerrar Sesion ")),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," Employee First Name"),l.a.createElement("th",null," Employee Last Name"),l.a.createElement("th",null," Employee Email Id"),l.a.createElement("th",null," Actions"))),l.a.createElement("tbody",null,this.state.employees.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null," ",t.name," "),l.a.createElement("td",null," ",t.address),l.a.createElement("td",null," ",t.phone),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.editEmployee(t.id)},className:"btn btn-info"},"Update "),l.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return e.deleteEmployee(t.id)},className:"btn btn-danger"},"Delete "),l.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return e.viewEmployee(t.id)},className:"btn btn-info"},"View ")))}))))))}}]),a}(n.Component),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},l.a.createElement("div",null,l.a.createElement("a",{href:"/",className:"navbar-brand"},"Employee Management App")))))}}]),a}(n.Component),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"text-muted"},"All Rights Reserved 2020 @JavaGuides")))}}]),a}(n.Component),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).saveOrUpdateEmployee=function(e){e.preventDefault();var t={name:n.state.name,address:n.state.address,phone:n.state.phone};console.log("employee => "+JSON.stringify(t)),"_add"===n.state.id?b.createEmployee(t).then((function(e){n.props.history.push("/employees")})):b.updateEmployee(t,n.state.id).then((function(e){n.props.history.push("/employees")}))},n.changeFirstNameHandler=function(e){n.setState({name:e.target.value})},n.changeLastNameHandler=function(e){n.setState({address:e.target.value})},n.changeEmailHandler=function(e){n.setState({phone:e.target.value})},n.state={id:n.props.match.params.id,name:"",address:"",phone:""},n.changeFirstNameHandler=n.changeFirstNameHandler.bind(Object(u.a)(n)),n.changeLastNameHandler=n.changeLastNameHandler.bind(Object(u.a)(n)),n.saveOrUpdateEmployee=n.saveOrUpdateEmployee.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;"_add"!==this.state.id&&b.getEmployeeById(this.state.id).then((function(t){var a=t.data;e.setState({name:a.name,address:a.address,phone:a.phone})}))}},{key:"cancel",value:function(){this.props.history.push("/employees")}},{key:"getTitle",value:function(){return"_add"===this.state.id?l.a.createElement("h3",{className:"text-center"},"Add Employee"):l.a.createElement("h3",{className:"text-center"},"Update Employee")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},this.getTitle(),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," First Name: "),l.a.createElement("input",{placeholder:"First Name",name:"name",className:"form-control",value:this.state.name,onChange:this.changeFirstNameHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Last Name: "),l.a.createElement("input",{placeholder:"Last Name",name:"address",className:"form-control",value:this.state.address,onChange:this.changeLastNameHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Email Id: "),l.a.createElement("input",{placeholder:"Email Address",name:"Phone",className:"form-control",value:this.state.phone,onChange:this.changeEmailHandler})),l.a.createElement("button",{className:"btn btn-success",onClick:this.saveOrUpdateEmployee},"Save"),l.a.createElement("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"}},"Cancel")))))))}}]),a}(n.Component),N=new(function(){function e(){Object(i.a)(this,e)}return Object(m.a)(e,[{key:"signin",value:function(e){return h.a.post("http://35.223.238.250:8145/api/auth/signin",e)}}]),e}()),O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).saveOrUpdateEmployee=function(e){e.preventDefault();var t={username:n.state.emailId,password:n.state.password};console.log("login data => "+JSON.stringify(t)),"_add"===n.state.id&&N.signin(t).then((function(e){console.log(e.data),sessionStorage.setItem("token",e.data.accessToken),n.props.history.push("/employees")}))},n.changepasswordHandler=function(e){n.setState({password:e.target.value})},n.changeEmailHandler=function(e){n.setState({emailId:e.target.value})},n.state={id:n.props.match.params.id,password:"",emailId:""},n.changepasswordHandler=n.changepasswordHandler.bind(Object(u.a)(n)),n.saveOrUpdateEmployee=n.saveOrUpdateEmployee.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){}},{key:"cancel",value:function(){this.props.history.push("/employees")}},{key:"getTitle",value:function(){return"_add"===this.state.id?l.a.createElement("h3",{className:"text-center"},"Login "):l.a.createElement("h3",{className:"text-center"},"Login Employee")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},this.getTitle(),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Email: "),l.a.createElement("input",{placeholder:"email",name:"email",className:"form-control",value:this.state.emailId,onChange:this.changeEmailHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Password : "),l.a.createElement("input",{placeholder:"Password ",name:"password",className:"form-control",value:this.state.password,onChange:this.changepasswordHandler})),l.a.createElement("button",{className:"btn btn-success",onClick:this.saveOrUpdateEmployee}," Login "),l.a.createElement("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"}},"Cancel")))))))}}]),a}(n.Component),j="http://35.223.238.250:8145/users",w=new(function(){function e(){Object(i.a)(this,e)}return Object(m.a)(e,[{key:"getImcs",value:function(){var e=sessionStorage.getItem("token")||"";return h.a.get(j,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})}},{key:"createEmployee",value:function(e){return h.a.post(j,e)}},{key:"getEmployeeById",value:function(e){return h.a.get(j+"/"+e)}},{key:"updateEmployee",value:function(e,t){return h.a.put(j+"/"+t,e)}},{key:"deleteEmployee",value:function(e){return h.a.delete(j+"/"+e)}}]),e}()),S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={employees:[]},n.addEmployee=n.addEmployee.bind(Object(u.a)(n)),n.login=n.login.bind(Object(u.a)(n)),n.cerrarSesion=n.cerrarSesion.bind(Object(u.a)(n)),n.editEmployee=n.editEmployee.bind(Object(u.a)(n)),n.deleteEmployee=n.deleteEmployee.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"deleteEmployee",value:function(e){var t=this;w.deleteEmployee(e).then((function(a){t.setState({employees:t.state.employees.filter((function(t){return t.id!==e}))})}))}},{key:"viewEmployee",value:function(e){this.props.history.push("/view-employee/".concat(e))}},{key:"editEmployee",value:function(e){this.props.history.push("/add-employee/".concat(e))}},{key:"componentDidMount",value:function(){var e=this;w.getImcs().then((function(t){console.log("imcs "),console.log(t),e.setState({employees:t.data.content})}))}},{key:"addEmployee",value:function(){this.props.history.push("/add-employee/_add")}},{key:"login",value:function(){this.props.history.push("/login/_add")}},{key:"cerrarSesion",value:function(){localStorage.setItem("token",null),alert("Sesion cerrada")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-center"},"IMC demo (token)"),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," ID "),l.a.createElement("th",null," id usuario"),l.a.createElement("th",null," imc "),l.a.createElement("th",null," Actions"))),l.a.createElement("tbody",null,this.state.employees.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null," ",t.id," "),l.a.createElement("td",null," ",t.name),l.a.createElement("td",null," ",t.username),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.editEmployee(t.id)},className:"btn btn-info"},"Update "),l.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return e.deleteEmployee(t.id)},className:"btn btn-danger"},"Delete "),l.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return e.viewEmployee(t.id)},className:"btn btn-info"},"View ")))}))))))}}]),a}(n.Component),C=new(function(){function e(){Object(i.a)(this,e)}return Object(m.a)(e,[{key:"getEmployees",value:function(){return h.a.get("http://localhost:8085/emails")}}]),e}()),I=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={employees:[]},n.login=n.login.bind(Object(u.a)(n)),n.imc=n.imc.bind(Object(u.a)(n)),n.cerrarSesion=n.cerrarSesion.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"viewEmployee",value:function(e){this.props.history.push("/view-employee/".concat(e))}},{key:"componentDidMount",value:function(){var e=this;C.getEmployees().then((function(t){console.log(t),e.setState({employees:t.data.people.content})}))}},{key:"imc",value:function(){this.props.history.push("/add-imc/_add")}},{key:"login",value:function(){this.props.history.push("/login/_add")}},{key:"cerrarSesion",value:function(){sessionStorage.setItem("token",null),alert("Sesion cerrada")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-center"},"Emails"),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," Employee Email"))),l.a.createElement("tbody",null,this.state.employees.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null," ",e.phone))}))))))}}]),a}(n.Component),x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={id:n.props.match.params.id,employee:{}},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.getEmployeeById(this.state.id).then((function(t){e.setState({employee:t.data})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{className:"card col-md-6 offset-md-3"},l.a.createElement("h3",{className:"text-center"}," View Employee Details"),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("label",null," Employee First Name: "),l.a.createElement("div",null," ",this.state.employee.name)),l.a.createElement("div",{className:"row"},l.a.createElement("label",null," Employee Last Name: "),l.a.createElement("div",null," ",this.state.employee.address)),l.a.createElement("div",{className:"row"},l.a.createElement("label",null," Employee Email ID: "),l.a.createElement("div",null," ",this.state.employee.phone)))))}}]),a}(n.Component);var L=function(){return l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement(f,null),l.a.createElement("div",{className:"container"},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",exact:!0,component:v}),l.a.createElement(s.a,{path:"/employees",component:v}),l.a.createElement(s.a,{path:"/add-imc/:id",component:S}),l.a.createElement(s.a,{path:"/add-employee/:id",component:k}),l.a.createElement(s.a,{path:"/login/:id",component:O}),l.a.createElement(s.a,{path:"/view-employee/:id",component:x}),l.a.createElement(s.a,{path:"/emails",component:I}))),l.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(60);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.c968b537.chunk.js.map