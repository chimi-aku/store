(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(21),s=a.n(r),l=(a(28),a(8)),c=a(3),u=a(5),m=a(7),i=a(6),h=a(4),d=a(1),b=(a(29),a(13)),f=a(14),p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleChange=function(e){o.setState(Object(f.a)({},e.target.name,e.target.value))},o.handleSubmit=function(e){e.preventDefault();var t=o.state,a=t.username,n=t.password,r=t.bookChart,s=t.boughtBooks,l=t.money,c=t.moneyToPay;o.props.handleSuccessfulLogin({username:a,password:n,bookChart:r,boughtBooks:s,money:l,moneyToPay:c})},o.state={username:"",password:"",bookChart:[],boughtBooks:[],money:e.money,moneyToPay:e.moneyToPay},o}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"input"},n.a.createElement("label",{for:"username"},"username:"),n.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange})),n.a.createElement("div",{className:"input"},n.a.createElement("label",{for:"password"},"password:"),n.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange})),n.a.createElement("button",{className:"button submit_button",type:"submit"},"Log In"))}}]),a}(o.Component),g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleSuccessfulLogin=o.handleSuccessfulLogin.bind(Object(b.a)(o)),o}return Object(u.a)(a,[{key:"handleSuccessfulLogin",value:function(e){var t=this;(function(){var a,o=t.props.usersData,n=Object(l.a)(o);try{for(n.s();!(a=n.n()).done;){var r=a.value;if(r.username===e.username&&r.password===e.password)return e.money=r.money,e.moneyToPay=r.moneyToPay,e.bookChart=r.bookChart,e.boughtBooks=r.boughtBooks,!0}}catch(s){n.e(s)}finally{n.f()}return!1})()?(this.props.handleLogin(e),this.props.history.push("/store")):alert("Wrong username or password!")}},{key:"render",value:function(){return n.a.createElement("div",{className:"home_page"},n.a.createElement(p,{handleSuccessfulLogin:this.handleSuccessfulLogin}),n.a.createElement(h.b,{to:"/register"},n.a.createElement("button",{className:"button"},n.a.createElement("a",{href:!0},"Create Account")," ")))}}]),a}(o.Component),v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleChange=function(e){o.setState(Object(f.a)({},e.target.name,e.target.value))},o.handleSubmit=function(e){e.preventDefault();var t=o.state,a=t.username,n=t.password,r=t.confirmPassword,s=t.bookChart,l=t.boughtBooks,c=t.money,u=t.moneyToPay;o.props.handleSuccessfulRegistration({username:a,password:n,confirmPassword:r,bookChart:s,boughtBooks:l,money:c,moneyToPay:u})},o.state={username:"",password:"",confirmPassword:"",bookChart:[],boughtBooks:[],money:100,moneyToPay:0},o}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{className:"form registration_form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"input"},n.a.createElement("label",{for:"username"},"username:"),n.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange})),n.a.createElement("div",{className:"input"},n.a.createElement("label",{for:"password"},"password:"),n.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange})),n.a.createElement("div",{className:"input"},n.a.createElement("label",{for:"confirmPassword"},"confirm password:"),n.a.createElement("input",{type:"password",name:"confirmPassword",onChange:this.handleChange})),n.a.createElement("button",{className:"button submit_button",type:"submit"},"Register"))}}]),a}(o.Component),y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleSuccessfulRegistration=o.handleSuccessfulRegistration.bind(Object(b.a)(o)),o}return Object(u.a)(a,[{key:"handleSuccessfulRegistration",value:function(e){var t=this;(function(){var a,o=t.props.usersData,n=Object(l.a)(o);try{for(n.s();!(a=n.n()).done;){if(a.value.username===e.username)return!1}}catch(r){n.e(r)}finally{n.f()}return e.username.length>0&&e.password.length>0&&e.password===e.confirmPassword})()?(this.props.handleRegistration(e),this.props.history.push("/")):alert("incorrect data!")}},{key:"render",value:function(){return n.a.createElement("div",{className:"registration_page"},n.a.createElement(v,{handleSuccessfulRegistration:this.handleSuccessfulRegistration}),n.a.createElement(h.b,{to:"/"},n.a.createElement("button",{className:"button"},n.a.createElement("a",{href:!0},"Home"))))}}]),a}(o.Component),E=function e(t,a,o,n,r){Object(c.a)(this,e),this.image=t,this.title=a,this.authors=o,this.published=n,this.price=r},k=function(e){var t=e.image,a=e.title,o=e.authors,r=e.published,s=e.price,l=void 0===s?40:s;return n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"bookcard_container"},n.a.createElement("img",{src:t,alt:"book cover"}),n.a.createElement("div",{className:"bookcard_desc"},n.a.createElement("h2",{className:"title"},a),n.a.createElement("h3",{className:"author"},o),n.a.createElement("h3",{className:"published"},"Publish date: ",r),n.a.createElement("h3",{className:"price"},"".concat(l,"PLN")))),n.a.createElement("button",{className:"button add_to_chart_button",onClick:function(){var n=new E(t,a,o,r,l);e.handleAddBookToChart(n)}},"Add to chart"))},N=function(e){return n.a.createElement("div",{className:"book_list"},e.books.map((function(t,a){var o,r;return o=void 0===t.volumeInfo.publishedDate?"-":t.volumeInfo.publishedDate.slice(0,4),r=void 0===t.saleInfo.listPrice.amount?"-":t.saleInfo.listPrice.amount,n.a.createElement(k,{key:a,image:t.volumeInfo.imageLinks.thumbnail,title:t.volumeInfo.title,authors:t.volumeInfo.authors,published:o,price:r,handleAddBookToChart:e.handleAddBookToChart})})))},C=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={text:"",books:[]},e.handleChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSearchBook=function(t){t.preventDefault();var a=e.state.text;a=a.replace(/ /g,"%22");var o="https://www.googleapis.com/books/v1/volumes?q=".concat(a,"&filter=paid-ebooks");console.log(o),fetch(o).then((function(e){return e.json()})).then((function(t){if(console.log(t.items),void 0!==t.items){var a,o=Object(l.a)(t.items);try{for(o.s();!(a=o.n()).done;){var n=a.value;void 0===n.volumeInfo.imageLinks.thumbnail&&(n.volumeInfo.imageLinks.thumbnail="../imgs/No-image-available.png")}}catch(r){o.e(r)}finally{o.f()}e.setState({books:t.items})}})).catch((function(e){console.log(e)}))},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"store_page"},n.a.createElement("header",{className:"store_header"},n.a.createElement("div",{className:"logo_box"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"}))),n.a.createElement("div",{className:"money_box"},n.a.createElement("p",null,"money"),n.a.createElement("p",null,this.props.user.money)),n.a.createElement("div",{className:"logout_box"},n.a.createElement(h.b,{to:"/"},n.a.createElement("button",{className:"button logout_button",onClick:this.props.logout},n.a.createElement("a",{href:!0},"Logout")))),n.a.createElement("div",{className:"books_buttons"},n.a.createElement("div",{className:"chart_box"},n.a.createElement(h.b,{to:"/chart"},n.a.createElement("button",{className:"button chart_button"},n.a.createElement("a",{href:!0},"chart")))),n.a.createElement("div",{className:"myBooks_box"},n.a.createElement(h.b,{to:"/mybooks"},n.a.createElement("button",{className:"button chart_button"},n.a.createElement("a",{href:!0},"my books")))),n.a.createElement("div",{className:"myBooks_box"},n.a.createElement(h.b,{to:"/money"},n.a.createElement("button",{className:"button chart_button"},n.a.createElement("a",{href:!0},"Money")))))),n.a.createElement("section",{className:"search_section"},n.a.createElement("form",{className:"store_form",onSubmit:this.handleSearchBook},n.a.createElement("input",{className:"searchBook_input",name:"text",type:"text",value:this.state.text,onChange:this.handleChange}),n.a.createElement("button",{className:"button submit_button searchBook_button",type:"submit"},"Search"))),n.a.createElement(N,{books:this.state.books,handleAddBookToChart:this.props.handleAddBookToChart}))}}]),a}(o.Component),S=function(e){var t=e.image,a=e.title,o=e.authors,r=e.published,s=e.price,l=void 0===s?40:s;return n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"bookcard_container"},n.a.createElement("img",{src:t,alt:"book cover"}),n.a.createElement("div",{className:"bookcard_desc"},n.a.createElement("h2",{className:"title"},a),n.a.createElement("h3",{className:"author"},o),n.a.createElement("h3",{className:"published"},"Publish date: ",r),n.a.createElement("h3",{className:"price"},"".concat(l,"PLN")))),n.a.createElement("button",{className:"button remove_from_chart_button",onClick:e.removeBookFromChart},"Remove from chart"))},O=function(e){return console.log(e.bookChart),n.a.createElement("div",{className:"chart_list"},e.bookChart.map((function(t,a){return n.a.createElement(S,{key:a,image:t.image,title:t.title,authors:t.authors,published:t.published,price:t.price,removeBookFromChart:e.handleRemoveBookFromChart})})))},_=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"chart"},n.a.createElement("header",{className:"chart_header"},n.a.createElement(h.b,{to:"/store"},n.a.createElement("button",{className:"button chart_button"},n.a.createElement("a",{href:!0},"Back")," ")),n.a.createElement("button",{className:"button chart_button clear_button",onClick:this.props.clearChart},"Clear"),n.a.createElement("button",{className:"button chart_button buy_button",onClick:this.props.buyBooks},"Buy")),n.a.createElement("div",{className:"summary"},n.a.createElement("p",null,"Total chart value: ".concat(this.props.moneyToPay))),n.a.createElement(O,{bookChart:this.props.bookChart,handleRemoveBookFromChart:this.props.handleRemoveBookFromChart}))}}]),a}(o.Component),j=function(e){var t=e.image,a=e.title,o=e.authors,r=e.published,s=e.price,l=void 0===s?40:s;return n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"bookcard_container"},n.a.createElement("img",{src:t,alt:"book cover"}),n.a.createElement("div",{className:"bookcard_desc"},n.a.createElement("h2",{className:"title"},a),n.a.createElement("h3",{className:"author"},o),n.a.createElement("h3",{className:"published"},"Publish date: ",r),n.a.createElement("h3",{className:"price"},"".concat(l,"PLN")))))},B=function(e){return console.log(e.boughtBooks),n.a.createElement("div",{className:"chart_list"},e.boughtBooks.map((function(e,t){return n.a.createElement(j,{key:t,image:e.image,title:e.title,authors:e.authors,published:e.published,price:e.price})})))},w=function(e){return n.a.createElement("div",{className:"myBooks_page"},n.a.createElement("header",{className:"money_header"},n.a.createElement(h.b,{to:"/store"},n.a.createElement("button",{className:"button chart_button"},n.a.createElement("a",{href:!0},"Back")," "))),n.a.createElement(B,{boughtBooks:e.boughtBooks}))},I=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={moneyToAdd:0},e.handleChangeOfMoneyToAdd=function(t){e.setState({moneyToAdd:t.target.value})},e.handleAddMoney=function(t){t.preventDefault();var a=parseInt(e.state.moneyToAdd,10);a>0?e.props.updateMoney(a):e.setState({moneyToAdd:0})},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"chart_page"},n.a.createElement("header",{className:"money_header"},n.a.createElement(h.b,{to:"/store"},n.a.createElement("button",{className:"button chart_button"},n.a.createElement("a",{href:!0},"Back")," ")),n.a.createElement("div",{className:"money_box"},n.a.createElement("p",null,"money"),n.a.createElement("p",null,this.props.money))),n.a.createElement("form",{className:"money_form",onSubmit:this.handleAddMoney},n.a.createElement("div",{className:"input money_input"},n.a.createElement("input",{type:"number",placeholder:"type in amout of money",onChange:this.handleChangeOfMoneyToAdd})),n.a.createElement("button",{className:"button chart_button submit_button",type:"submit"},"add Money")))}}]),a}(o.Component);function T(e){for(;e.length>0;)e.pop()}var P=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={loggedInStatus:"NOT_LOGGED_IN",user:{},users:[]},e.handleLogin=function(t){e.setState({loggedInStatus:"LOGGED_IN",user:t})},e.handleLogout=function(){e.setState({loggedInStatus:"NOT_LOGGED_IN",user:{}})},e.handleRegistration=function(t){var a={username:t.username,password:t.password,bookChart:t.bookChart,boughtBooks:t.boughtBooks,money:100,moneyToPay:0},o=e.state.users;o.push(a),e.setState({users:o}),"undefined"!==typeof localStorage&&(localStorage.removeItem("users"),localStorage.setItem("users",JSON.stringify(o)))},e.handleAddBookToChart=function(t){var a=e.state.user;console.log(a),a.bookChart.push(t),a.bookChart.pop(),a.bookChart.sort((function(e,t){return e.title.localeCompare(t.title)})),e.setState({user:a});var o,n=e.state.users,r=Object(l.a)(n);try{for(r.s();!(o=r.n()).done;){var s=o.value;if(a.username===s.username){s.bookChart.push(t),s.bookChart.sort((function(e,t){return e.title.localeCompare(t.title)}));break}}}catch(c){r.e(c)}finally{r.f()}e.setState({users:n}),"undefined"!==typeof localStorage&&(localStorage.removeItem("users"),localStorage.setItem("users",JSON.stringify(n))),e.hadndleUpdateMoneyToPay()},e.handleRemoveBookFromChart=function(t){var a,o=t.target.parentNode.childNodes[0].childNodes[1].childNodes[0].textContent,n=e.state.user,r=Object(l.a)(n.bookChart);try{for(r.s();!(a=r.n()).done;){var s=a.value;if(o===s.title){var c=n.bookChart.indexOf(s);n.bookChart.splice(c,1);break}}}catch(u){r.e(u)}finally{r.f()}e.setState({user:n}),e.hadndleUpdateMoneyToPay()},e.handleClearChart=function(){console.log("clear chart");var t=e.state.user;T(t.bookChart);var a,o=e.state.users,n=Object(l.a)(o);try{for(n.s();!(a=n.n()).done;){var r=a.value;if(t.username===r.username){T(r.bookChart);break}}}catch(s){n.e(s)}finally{n.f()}e.setState({user:t,users:o}),"undefined"!==typeof localStorage&&(localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(t)),localStorage.removeItem("users"),localStorage.setItem("users",JSON.stringify(o))),e.hadndleUpdateMoneyToPay()},e.hadndleUpdateMoneyToPay=function(){var t,a=0,o=Object(l.a)(e.state.user.bookChart);try{for(o.s();!(t=o.n()).done;){a+=t.value.price}}catch(m){o.e(m)}finally{o.f()}var n=e.state.user;n.moneyToPay=a,e.setState({user:n});var r,s=e.state.users,c=Object(l.a)(s);try{for(c.s();!(r=c.n()).done;){var u=r.value;if(n.username===u.username){u.moneyToPay=a;break}}}catch(m){c.e(m)}finally{c.f()}"undefined"!==typeof localStorage&&(localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(n)),localStorage.removeItem("users"),localStorage.setItem("users",JSON.stringify(s)))},e.handleUpdateMoney=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=e.state.user;a.money+=t,e.setState({user:a});var o,n=e.state.users,r=Object(l.a)(n);try{for(r.s();!(o=r.n()).done;){var s=o.value;if(a.username===s.username){s.money+=t;break}}}catch(c){r.e(c)}finally{r.f()}e.setState({users:n}),"undefined"!==typeof localStorage&&(localStorage.removeItem("users"),localStorage.setItem("users",JSON.stringify(n)))},e.hadnleBuyBooks=function(){var t=e.state.user,a=e.state.users;if(t.money>t.moneyToPay){var o=parseInt(t.money,10)-parseInt(t.moneyToPay,10);t.money=o;var n,r=Object(l.a)(t.bookChart);try{for(r.s();!(n=r.n()).done;){var s=n.value;t.boughtBooks.push(s),t.boughtBooks.pop()}}catch(b){r.e(b)}finally{r.f()}t.boughtBooks.sort((function(e,t){return e.title.localeCompare(t.title)}));var c,u=Object(l.a)(a);try{for(u.s();!(c=u.n()).done;){var m=c.value;if(t.username===m.username){var i,h=Object(l.a)(m.bookChart);try{for(h.s();!(i=h.n()).done;){var d=i.value;m.boughtBooks.push(d)}}catch(b){h.e(b)}finally{h.f()}t.boughtBooks.sort((function(e,t){return e.title.localeCompare(t.title)})),m.money=o;break}}}catch(b){u.e(b)}finally{u.f()}e.handleUpdateMoney(),e.handleClearChart()}else alert("You have not enough money")},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){if("undefined"!==typeof localStorage&&"undefined"!=localStorage.getItem("users")){var e=JSON.parse(localStorage.getItem("users"));null===e&&(e=[]),this.setState({users:e})}else this.setState({users:[]})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(h.a,{basename:"/"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(g,Object.assign({},t,{handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus,usersData:e.state.users}))}}),n.a.createElement(d.a,{exact:!0,path:"/register",render:function(t){return n.a.createElement(y,Object.assign({},t,{handleRegistration:e.handleRegistration,loggedInStatus:e.state.loggedInStatus,usersData:e.state.users}))}}),n.a.createElement(d.a,{exact:!0,path:"/store",render:function(t){return n.a.createElement(C,Object.assign({},t,{loggedInStatus:e.state.loggedInStatus,user:e.state.user,handleAddBookToChart:e.handleAddBookToChart,logout:e.handleLogout}))}}),n.a.createElement(d.a,{exact:!0,path:"/chart",render:function(t){return n.a.createElement(_,Object.assign({},t,{clearChart:e.handleClearChart,bookChart:e.state.user.bookChart,handleRemoveBookFromChart:e.handleRemoveBookFromChart,moneyToPay:e.state.user.moneyToPay,buyBooks:e.hadnleBuyBooks}))}}),n.a.createElement(d.a,{exact:!0,path:"/mybooks",render:function(t){return n.a.createElement(w,Object.assign({},t,{boughtBooks:e.state.user.boughtBooks}))}}),n.a.createElement(d.a,{exact:!0,path:"/money",render:function(t){return n.a.createElement(I,Object.assign({},t,{updateMoney:e.handleUpdateMoney,money:e.state.user.money}))}}))))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d18d535e.chunk.js.map