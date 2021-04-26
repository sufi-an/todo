import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './Task.module.css';
class Task extends Component{
  state={
    time: this.props.data.issueTime
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){ 
  console.log(this.props)
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
