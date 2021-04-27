import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './Task.module.css';
class Task extends Component{
  state={
    time: ""
  }
  getData(data){
    let time=new Date();
    time=(time.getHours()<10?"0"+time.getHours():time.getHours())
      +":"+(time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes())
      +":"+(time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds());
    //console.log(time)
    return time;
  }
  componentDidMount() {
    
    let time=new Date();
    time=time.getMinutes();
    this.interval = setInterval(()=>Date.now()>0? this.setState({time:this.getData(Date.now())}):null,1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render(){ 
  let btnType=null;
  if(this.props.data.id%5 === 0){
    btnType='BlueBg';
  }
  else if(this.props.data.id%4 === 0){
    btnType='PinkBg';
  }
  else if(this.props.data.id%3 === 0){
    btnType='NavyBlueBg';
  }
  else{
    btnType='LightBlueBg';
  }
  //,classes[this.props.btnType]].join(' ')
    return (
        <div  className={classes.TaskController}>  
    <div className={[classes.Task,classes[btnType]].join(' ')}>
        <div className={classes.TaskData} >
        {this.props.data.task}
        </div>
        <div>
        <span>Issue Date : </span> {this.props.data.issueDate}
        </div>
        <div>
        <span>Due Date : </span> {this.props.data.deadline}
        </div>
        <div>
        <span>Issue Time : </span>{this.props.data.issueTime}
        </div>
        <div>
          {this.state.time}
        </div>
        <div className={classes.BtnSuccess}>
        <Button clicked={()=>this.props.onClicked(this.props.data.id)} >Task Done</Button>
        </div>
        </div>
        </div>
    )
  }
}

export default Task;
