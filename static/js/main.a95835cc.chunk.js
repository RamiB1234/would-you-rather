(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{37:function(e,t,a){e.exports=a(54)},43:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),o=a(23),c=a.n(o),s=(a(43),a(4)),i=a(5),l=a(7),u=a(6),m=a(8),d=a(14),p=a(18),h=a(2),v=a(36),b=a(9);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},y={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function j(e){return new Promise((function(t,a){var n=e.author,r=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout((function(){y=O({},y,Object(b.a)({},r.id,r)),f=O({},f,Object(b.a)({},n,O({},f[n],{questions:f[n].questions.concat([r.id])}))),t(r)}),1e3)}))}function w(e){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise((function(e,r){setTimeout((function(){f=O({},f,Object(b.a)({},t,O({},f[t],{answers:O({},f[t].answers,Object(b.a)({},a,n))}))),y=O({},y,Object(b.a)({},a,O({},y[a],Object(b.a)({},n,O({},y[a][n],{votes:y[a][n].votes.concat([t])}))))),e()}),500)}))}(e)}var g="RECEIVE_USERS",N="ADD_USER_QUESTION",q="ADD_USER_QUESTION_ANSWER";var x="RECEIVE_QUESTIONS",T="ADD_QUESTION",U="ADD_QUESTION_ANSWER";var k=a(19),S=a.n(k);function I(){return function(e){return Promise.all([new Promise((function(e,t){setTimeout((function(){return e(O({},f))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(O({},y))}),1e3)}))]).then((function(e){var t=Object(v.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var a=t.users,n=t.questions;e(function(e){return{type:g,users:e}}(a)),e(function(e){return{type:x,questions:e}}(n))}))}}function P(e,t){return function(a,n){a(Object(k.showLoading)());var r,o=n().authedUser;return(r={optionOneText:e,optionTwoText:t,author:o},j(r)).then((function(e){var t;a(function(e){return{type:T,question:e}}(e)),a((t=e.id,{type:N,questionId:t,userId:o})),a(Object(k.hideLoading)())}))}}function R(e,t){return function(a,n){var r=n().authedUser;return w({authedUser:r,qid:t,answer:e}).then((function(){a(function(e,t,a){return{type:U,answer:e,qid:t,userId:a}}(e,t,r)),a(function(e,t,a){return{type:q,questionId:e,userId:t,answer:a}}(t,r,e))}))}}a(51);var D="SET_AUTHED_USER",C="LOGOUT_USER";var A=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.c,{to:"/",exact:!0,activeClassName:"active"},"Home")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/add",activeClassName:"active"},"Add Question")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/leaderboard",activeClassName:"active"},"Leaderboard"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("b",null,"Welcome ",this.props.authedUser)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{render:function(t){var a=t.history;return r.a.createElement("button",{type:"button",onClick:function(){a.push("/"),e.props.dispatch({type:C})},className:"btn btn-primary btn-logout"},"Logout")}}))))}}]),t}(n.Component),L=Object(h.connect)()(A),z=a(20);a(53);function _(e,t,a){var n=e.id;return{name:t.name,id:n,authedUser:a,avatarURL:t.avatarURL,optionOne:e.optionOne.text,optionTwo:e.optionTwo.text}}function W(e,t,a){var n=t[e],r=n.optionOne.votes,o=n.optionTwo.votes;return!(!r.includes(a)&&!o.includes(a))}var B=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement("div",{className:"card",style:{width:"100%"}},r.a.createElement("h5",{className:"card-header"},this.props.question.name," asks would you rather:"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:this.props.question.avatarURL,width:"120",height:"120",alt:"avatar"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",{className:"card-text"},"1. ",this.props.question.optionOne,r.a.createElement("br",null),r.a.createElement("b",null,"OR"),r.a.createElement("br",null),"2. ",this.props.question.optionTwo),r.a.createElement(d.b,{to:"/questions/".concat(this.props.question.id),className:"btn btn-success"},"Details")))))),r.a.createElement("div",{className:"col-md-3"})))}}]),t}(n.Component);var V=Object(h.connect)((function(e,t){var a=e.authedUser,n=e.users,r=e.questions[t.id];return{authedUser:a,question:_(r,n[r.author],a)}}))(B),F=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-center"},r.a.createElement(z.d,null,r.a.createElement(z.b,null,r.a.createElement(z.a,null,"Unanswered"),r.a.createElement(z.a,null,"Answered")),r.a.createElement(z.c,null,r.a.createElement("ul",null,this.props.questionIds.filter((function(t){return!1===W(t,e.props.questions,e.props.authedUser)})).map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(V,{id:e}))})))),r.a.createElement(z.c,null,r.a.createElement("ul",null,this.props.questionIds.filter((function(t){return!0===W(t,e.props.questions,e.props.authedUser)})).map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(V,{id:e}))}))))))}}]),t}(n.Component);var Q=Object(h.connect)((function(e){var t=e.questions,a=e.authedUser;return{questions:t,authedUser:a,questionIds:Object.keys(t).sort((function(e,a){return t[a].timestamp-t[e].timestamp}))}}))(F),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={optionA:"",optionB:"",redirectToHome:!1},a.handleChangeOptionA=function(e){var t=e.target.value;a.setState((function(){return{optionA:t}}))},a.handleChangeOptionB=function(e){var t=e.target.value;a.setState((function(){return{optionB:t}}))},a.handleSubmit=function(e){e.preventDefault(),(0,a.props.dispatch)(P(a.state.optionA,a.state.optionB)),a.setState({optionA:"",optionB:"",redirectToHome:!0})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.optionA,a=e.optionB;return!0===e.redirectToHome?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Would You Rather .. ")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"1. "),r.a.createElement("input",{type:"text",placeholder:"Your first option",value:t,onChange:this.handleChangeOptionA}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"OR"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"2. "),r.a.createElement("input",{type:"text",placeholder:"Your second option",value:a,onChange:this.handleChangeOptionB}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-success",type:"submit",disabled:""===t||""===a},"Submit"))))),r.a.createElement("div",{className:"col-md-3"}))}}]),t}(n.Component),J=Object(h.connect)()(H),M=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.avatarURL,n=e.asked,o=e.answered;return r.a.createElement("div",{className:"card mb-3",style:{maxWidth:"540px"}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h4",null,"Rank: ",this.props.rank),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:a,width:"90",height:"90",alt:"avatar"})),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card text-white bg-primary mb-3",style:{maxWidth:"18rem"}},r.a.createElement("div",{className:"card-header"},"Asked"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},n)))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card text-white bg-secondary mb-3",style:{maxWidth:"18rem"}},r.a.createElement("div",{className:"card-header"},"Answered"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},o)))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card text-white bg-success mb-3",style:{maxWidth:"18rem"}},r.a.createElement("div",{className:"card-header"},"Score"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},n+o)))))))))}}]),t}(n.Component);var Y=Object(h.connect)((function(e,t){var a=e.users[t.id];return{avatarURL:a.avatarURL,name:a.name,asked:a.questions.length,answered:Object.keys(a.answers).length}}))(M),G=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.userIds,t=0;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement("div",null,r.a.createElement("h3",null,"Leaderboard"),r.a.createElement("ul",null,e.map((function(e){return t++,r.a.createElement("li",{key:e},r.a.createElement(Y,{id:e,rank:t}))}))))),r.a.createElement("div",{className:"col-md-3"}))}}]),t}(n.Component);var $=Object(h.connect)((function(e){var t=e.users;return{userIds:Object.keys(t).sort((function(e,a){return Object.keys(t[a].answers).length+t[a].questions.length-(Object.keys(t[e].answers).length+t[e].questions.length)}))}}))(G),K=a(56);function X(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"404 Error",r.a.createElement("br",null),"Ops, we couldn't find your question!"))}var Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedOption:"optionOne"},a.handleOptionChange=function(e){return a.setState({selectedOption:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.props.dispatch;console.log("You have selected:",a.state.selectedOption),t(R(a.state.selectedOption,a.props.questionId))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,a,n,o,c=this.props.questionFound;return!0===c&&(n=W(this.props.questionId,this.props.questions,this.props.authedUser),o=function(e,t,a){var n=t[e],r=n.optionOne.votes,o=n.optionTwo.votes;return r.includes(a)?"optionOne":o.includes(a)?"optionTwo":void 0}(this.props.questionId,this.props.questions,this.props.authedUser),e=this.props.optionOneVotes+this.props.optionTwoVotes,t=100*this.props.optionOneVotes/e,a=100*this.props.optionTwoVotes/e),r.a.createElement("div",null,!0===c&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"card mb-3",style:{maxWidth:"540px"}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:this.props.avatarURL,width:"90",height:"90",alt:"avatar"}),r.a.createElement("br",null),r.a.createElement("b",null,"By : ",this.props.authorName)),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Would you Rather.."),!1===n&&r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"radio"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"optionOne",checked:"optionOne"===this.state.selectedOption,onChange:this.handleOptionChange}),this.props.optionOne)),r.a.createElement("div",{className:"radio"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"optionTwo",checked:"optionTwo"===this.state.selectedOption,onChange:this.handleOptionChange}),this.props.optionTwo)),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Save")),!0===n&&r.a.createElement("div",null,r.a.createElement("div",{className:"radio"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",checked:"optionOne"===o,readOnly:!0}),this.props.optionOne,r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(K.a,{now:t,label:"".concat(t.toFixed(2),"%"),striped:!0}),r.a.createElement("small",null,this.props.optionOneVotes," out of ",e," ","votes")),r.a.createElement("div",{className:"radio"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",checked:"optionTwo"===o,readOnly:!0}),this.props.optionTwo,r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(K.a,{now:a,label:"".concat(a.toFixed(2),"%"),striped:!0}),r.a.createElement("small",null,this.props.optionTwoVotes," out of ",e," ","votes")))))))),r.a.createElement("div",{className:"col-md-3"})),!1===c&&r.a.createElement(X,null))}}]),t}(n.Component);var ee=Object(h.connect)((function(e,t){var a=e.questions,n=e.users,r=e.authedUser,o=t.questionId,c=a[o],s="undefined"!==typeof c;if(!0===s){var i=n[c.author];return{questionFound:s,questionId:o,authedUser:r,author:i,authorName:i.name,avatarURL:i.avatarURL,optionOne:c.optionOne.text,optionTwo:c.optionTwo.text,optionOneVotes:c.optionOne.votes.length,optionTwoVotes:c.optionTwo.votes.length,questions:a}}return{questionFound:s}}))(Z),te=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedUser:""},a.handleSubmit=function(e){var t;e.preventDefault(),a.props.dispatch((t=a.state.selectedUser,{type:D,id:t}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"}),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},"Login"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Welcome to Would you Rather App"),r.a.createElement("img",{src:"/would-you-rather/images/react-and-redux.jpg",alt:"react logo"}),r.a.createElement("p",{className:"card-text"},"Please select a user"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("select",{value:this.state.selectedUser,onChange:function(t){return e.setState({selectedUser:t.target.value})}},this.props.userIds.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Login"))),r.a.createElement("div",{className:"card-footer text-muted"},"Powered by React & Redux"))),r.a.createElement("div",{className:"col-md-4"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.userIds.length>0&&""===t.selectedUser?{selectedUser:e.userIds[0]}:null}}]),t}(n.Component);var ae=Object(h.connect)((function(e){var t=e.users;return{userIds:Object.keys(t)}}))(te),ne=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(I())}},{key:"render",value:function(){return r.a.createElement("div",null,null===this.props.authedUser?r.a.createElement(ae,null):r.a.createElement(n.Fragment,null,r.a.createElement(S.a,null),r.a.createElement(d.a,{basename:"/"},r.a.createElement(L,{authedUser:this.props.authedUser}),!0===this.props.loading?null:r.a.createElement("div",null,r.a.createElement(p.b,{path:"/",exact:!0,component:Q}),r.a.createElement(p.b,{path:"/add",component:J}),r.a.createElement(p.b,{path:"/leaderboard",component:$}),r.a.createElement(p.b,{path:"/questions/:questionId",render:function(e){return r.a.createElement(ee,{questionId:e.match.params.questionId})}})))))}}]),t}(n.Component);var re=Object(h.connect)((function(e){var t=e.authedUser;return{authedUser:t,loading:null===t}}))(ne),oe=a(17);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ue=Object(oe.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return t.id;case C:return null;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return se({},e,{},t.users);case N:return se({},e,Object(b.a)({},t.userId,se({},e[t.userId],{questions:e[t.userId].questions.concat([t.questionId])})));case q:return se({},e,Object(b.a)({},t.userId,se({},e[t.userId],{answers:se({},e[t.userId].answers,Object(b.a)({},t.questionId,t.answer))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return le({},e,{},t.questions);case T:return le({},e,Object(b.a)({},t.question.id,t.question));case U:return"optionOne"===t.answer?le({},e,Object(b.a)({},t.qid,le({},e[t.qid],{optionOne:le({},e[t.qid].optionOne,{votes:e[t.qid].optionOne.votes.concat([t.userId])})}))):le({},e,Object(b.a)({},t.qid,le({},e[t.qid],{optionTwo:le({},e[t.qid].optionTwo,{votes:e[t.qid].optionTwo.votes.concat([t.userId])})})));default:return e}},loadingBar:k.loadingBarReducer}),me=a(35),de=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},pe=Object(oe.a)(me.a,de),he=Object(oe.d)(ue,pe);c.a.render(r.a.createElement(h.Provider,{store:he},r.a.createElement(re,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a95835cc.chunk.js.map