(this["webpackJsonpinto-routing"]=this["webpackJsonpinto-routing"]||[]).push([[0],{13:function(t,e,a){t.exports={Toolbar:"Toolbar_Toolbar__Wdg1I",HomeContainer:"Toolbar_HomeContainer__28ntK",BtnHome:"Toolbar_BtnHome__6VfcW",BtnSuccess:"Toolbar_BtnSuccess__1cwP2",BtnDisable:"Toolbar_BtnDisable__2ogzv"}},18:function(t,e,a){t.exports={Input:"Input_Input__1NKyO",BtnSuccess:"Input_BtnSuccess__26Hv_"}},23:function(t,e,a){t.exports={Backdrop:"Backdrop_Backdrop__2x_C4"}},24:function(t,e,a){t.exports={Modal:"Modal_Modal__wqyAW"}},25:function(t,e,a){t.exports={Button:"Button_Button__1YFoo"}},26:function(t,e,a){t.exports={CompletedTask:"CompletedTask_CompletedTask__2eh4k"}},27:function(t,e,a){t.exports={Tasks:"Tasks_Tasks__3SDm4"}},33:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),i=a(22),c=a.n(i),r=(a(33),a(8)),o=a(9),l=a(11),d=a(10),u=function(t){return t.children},h=a(23),j=a.n(h),k=a(0),p=function(t){return t.show?Object(k.jsx)("div",{className:j.a.Backdrop,onClick:t.clicked}):null},b=a(24),g=a.n(b),m=function(t){return Object(k.jsxs)(u,{children:[Object(k.jsx)(p,{show:t.backDropShow,clicked:t.clicked}),Object(k.jsx)("div",{className:g.a.Modal,style:{transform:t.modalShow?"translateY(0)":"translateY(-100vh)",opacity:t.modalShow?"1":"0"},children:t.children})]})},O=a(25),v=a.n(O),x=function(t){return Object(k.jsx)("button",{className:v.a.Button,onClick:t.clicked,children:t.children})},T=a(18),f=a.n(T),_=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={taskControl:"",dateControl:""},t.task=null,t.date=null,t.handleTaskChange=function(e){t.task=e.target.value,t.setState({taskControl:t.task})},t.handleDateChange=function(e){t.date=e.target.value,t.setState({dateControl:t.date})},t.onBtnClick=function(){t.props.clicked(t.date,t.task),t.setState({taskControl:""}),t.setState({dateControl:""})},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:f.a.Input,children:[Object(k.jsx)("input",{type:"text",placeholder:"Task",onChange:this.handleTaskChange,value:this.state.taskControl}),Object(k.jsx)("label",{children:"Due Date"}),Object(k.jsx)("input",{onChange:this.handleDateChange,type:"date",value:this.state.dateControl}),Object(k.jsx)("div",{className:f.a.BtnSuccess,children:Object(k.jsx)(x,{clicked:this.onBtnClick,children:"Add To list"})})]})}}]),a}(s.Component),B=a(15),D=a(2),S=a(13),C=a.n(S),y=a(7),w=a.n(y),L=function(t){var e=t.data,a=null;return a=t.data.id%5===0?"BlueBg":t.data.id%4===0?"PinkBg":t.data.id%3===0?"NavyBlueBg":"LightBlueBg",Object(k.jsx)("div",{className:w.a.TaskController,children:Object(k.jsxs)("div",{className:[w.a.Task,w.a[a]].join(" "),children:[Object(k.jsxs)("div",{className:w.a.TaskData,children:[Object(k.jsx)("span",{children:"Task : "})," ",e.task]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Issued : "})," ",e.issueDate]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Finished : "})," ",e.deadline]})]})})},H=a(26),N=a.n(H),I=function(t){var e=t.list.map((function(t){return Object(k.jsx)(L,{data:t},t.id)}));return 0===e.length&&(e=Object(k.jsx)("h1",{children:"No History Found"})),Object(k.jsx)("div",{className:N.a.CompletedTask,children:e})},M=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={time:""},t.has31Days=function(t){for(var e=["1","3","5","7","8","10","12"],a=0;a<e.length;a++)if(t===e[a])return!0;return!1},t.getRemainingDays=function(e,a){e=e.split("-"),a=a.split("-");var s=e[0]-a[0],n=e[1]-a[1],i=e[2]-a[2];n<0&&(n=parseInt(e[1])+12-parseInt(a[1])),i<0&&t.has31Days(a[1])&&"2"!==a[1]?(i=e[2]-parseInt(a[2])+31,n-=1):i<0&&!t.has31Days(a[1])&&"2"!==a[1]?(i=parseInt(e[2])+30-parseInt(a[2]),n-=1):i<0&&"2"===a[1]&&(i=e[2]-(parseInt(a[2])+28),n-=1);return"0"===s.toString()&&"0"===n.toString()&&"0"===i.toString()?"":"0"===s.toString()&&"0"===n.toString()?(parseInt(i)-1).toString()+" Days":"0"===s.toString()?n+" Months "+(parseInt(i)-1).toString()+" Days":s+" Years "+n+" Months "+(parseInt(i)-1).toString()+" Days"},t}return Object(o.a)(a,[{key:"getData",value:function(t){var e=new Date,a=e.getSeconds()<10?"059"-e.getSeconds():59-e.getSeconds(),s=e.getMinutes()<10?"059"-e.getMinutes():59-e.getMinutes(),n=e.getHours()<10?"023"-e.getHours():25-e.getHours();e=(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"059"-e.getSeconds():59-e.getSeconds());var i=this.props.data.issueTime.split(":"),c=(i[0],i[1],n),r=s;this.getRemainingDays(this.props.data.deadline,this.props.data.issueDate);return this.getRemainingDays(this.props.data.deadline,this.props.data.issueDate)+" "+c+" Hours : "+r+" Minutes :  "+a+" Seconds"}},{key:"componentDidMount",value:function(){var t=this,e=new Date;e=e.getMinutes(),this.interval=setInterval((function(){return Date.now()>0?t.setState({time:t.getData(Date.now())}):null}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this,e=null;return e=this.props.data.id%5===0?"BlueBg":this.props.data.id%4===0?"PinkBg":this.props.data.id%3===0?"NavyBlueBg":"LightBlueBg",Object(k.jsx)("div",{className:w.a.TaskController,children:Object(k.jsxs)("div",{className:[w.a.Task,w.a[e]].join(" "),children:[Object(k.jsx)("div",{className:w.a.TaskData,children:this.props.data.task}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Issue Date : "})," ",this.props.data.issueDate]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Due Date : "})," ",this.props.data.deadline]}),Object(k.jsx)("div",{children:"Remaining Time "}),Object(k.jsx)("div",{children:Object(k.jsxs)("span",{style:{fontSize:".8rem"},children:[" ",this.state.time," "]})}),Object(k.jsx)("div",{className:w.a.BtnSuccess,children:Object(k.jsx)(x,{clicked:function(){return t.props.onClicked(t.props.data.id)},children:"Task Done"})})]})})}}]),a}(s.Component),A=a(27),F=a.n(A),P=function(t){var e=null;return 0===(e=Object(k.jsx)("div",{className:F.a.Tasks,children:t.tasksList.map((function(e){return Object(k.jsx)(M,{data:e,onClicked:t.clicked},e.id)}))})).props.children.length&&(e=Object(k.jsx)("div",{style:{textAlign:"center",marginTop:"10px",fontSize:"1.7rem",cursor:"pointer"},onClick:t.addTask,children:"Add A Task"})),Object(k.jsx)("div",{children:e})},Y=function(t){return 0===t.tasksList.length&&Object(k.jsx)("div",{children:"Add A Component"}),Object(k.jsxs)(B.a,{children:[Object(k.jsx)(s.Fragment,{children:Object(k.jsxs)("div",{className:C.a.Toolbar,children:[Object(k.jsx)("div",{className:C.a.HomeContainer,children:Object(k.jsx)("div",{className:C.a.BtnHome,children:Object(k.jsx)(B.b,{to:"/",children:Object(k.jsx)(x,{children:"Home"})})})}),Object(k.jsx)("div",{className:C.a.BtnSuccess,children:Object(k.jsx)(B.b,{to:"/",children:Object(k.jsx)(x,{clicked:t.addTask,children:"Create Task"})})}),Object(k.jsx)("div",{className:C.a.BtnDisable,children:Object(k.jsx)(B.b,{to:"/history",children:Object(k.jsx)(x,{clicked:t.historyCheck,children:"History"})})})]})}),Object(k.jsxs)(D.c,{children:[Object(k.jsx)(D.a,{exact:!0,path:"/",render:function(){return Object(k.jsx)(P,{addTask:t.addTask,tasksList:t.tasksList,clicked:t.clicked})}}),Object(k.jsx)(D.a,{path:"/history",render:function(){return Object(k.jsx)(I,{list:t.completedTaskList})}})]})]})},R=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={modalShow:!1,backDropShow:!1,taskList:[],completedTaskList:[]},t.backdropToggler=function(){var e=t.state.backDropShow;t.setState({backDropShow:!e})},t.modalOpen=function(){t.setState({modalShow:!0}),t.backdropToggler()},t.modalClosed=function(){t.setState({modalShow:!1}),t.backdropToggler()},t.createTaskBtnHandler=function(){t.modalOpen()},t.onAddTaskHandler=function(e,a){t.modalClosed();var s=t.state.taskList,n={id:"",task:"",issueDate:"",issueTime:"",deadline:""};n.task=a,n.deadline=e,n.issueDate=t.getDate(),n.issueTime=t.getTime(),t.getRemainingTime(n.issueTime),0===t.state.taskList.length?n.id=2:n.id=t.state.taskList[t.state.taskList.length-1].id+1,s.push(n),t.setState({taskList:s})},t.onTaskDoneHandler=function(e){var a=new Date,s=null;t.state.taskList.map((function(t){if(t.id===e)return t.deadline=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),s=t,t}));if(null!==s){var n=t.state.completedTaskList,i={id:"",task:"",issueDate:"",issueTime:"",deadline:""};i.deadline=s.deadline,i.id=s.id,i.issueDate=s.issueDate,i.task=s.task,n.push(i),t.setState({completedTaskList:n});var c=t.state.taskList.filter((function(t){return t.id!==e}));t.setState({taskList:c})}},t.onHistoryCheck=function(){},t}return Object(o.a)(a,[{key:"getTime",value:function(){var t=new Date,e=t.getHours();return e=e+":"+t.getMinutes()}},{key:"getDate",value:function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},{key:"getRemainingTime",value:function(t){}},{key:"render",value:function(){return Object(k.jsxs)(u,{children:[Object(k.jsx)(m,{backDropShow:this.state.backDropShow,modalShow:this.state.modalShow,clicked:this.modalClosed,children:Object(k.jsx)(_,{clicked:this.onAddTaskHandler})}),Object(k.jsx)("div",{children:Object(k.jsx)(Y,{tasksList:this.state.taskList,clicked:this.onTaskDoneHandler,completedTaskList:this.state.completedTaskList,historyCheck:this.onHistoryCheck,addTask:this.createTaskBtnHandler})})]})}}]),a}(s.Component),W=(s.Component,function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)(R,{})})}}]),a}(s.Component)),z=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),s(t),n(t),i(t),c(t)}))};c.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(W,{})}),document.getElementById("root")),z()},7:function(t,e,a){t.exports={TaskContainer:"Task_TaskContainer__YwW0u",Task:"Task_Task__2iG-a",TaskData:"Task_TaskData__2bZsw",BtnSuccess:"Task_BtnSuccess__1KZPh",BlueBg:"Task_BlueBg__1nzqE",PinkBg:"Task_PinkBg__L3Wcf",NavyBlueBg:"Task_NavyBlueBg__2ZcC7",LightBlueBg:"Task_LightBlueBg__1U1Ik"}}},[[40,1,2]]]);
//# sourceMappingURL=main.12463c05.chunk.js.map