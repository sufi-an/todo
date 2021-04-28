import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './Task.module.css';
class Task extends Component{
  state={
    time: ""
  }
  has31Days=(month)=>{
    let listOf31DayMonths=['1','3','5','7','8','10','12'];
    for(let i=0;i<listOf31DayMonths.length;i++){
      if(month === listOf31DayMonths[i])
      return true;
    }
    return false;
  }
  getRemainingDays=(finish,start)=>{
    finish=finish.split('-');
    start=start.split('-')
    //console.log(finish+" "+start)
    let year=finish[0]-start[0];
    let month=finish[1]-start[1];
    let days=finish[2]-start[2];
    if(month<0){
      month=(parseInt(finish[1])+12-parseInt(start[1]));
    }
    if(days<0 && this.has31Days(start[1]) &&start[1]!=='2' ){
      days=(finish[2]-parseInt(start[2])+31)
      month-=1;
    }
    else if(days<0 && !this.has31Days(start[1]) &&start[1]!=='2'){
      days=( parseInt(finish[2])+30-parseInt(start[2]))
      month-=1;
    }
    else if(days<0 && start[1]==='2'){
      days=(finish[2]-(parseInt(start[2])+28))
      month-=1;
    }
    //console.log(year+" "+month+" "+ (parseInt(days)-1).toString())
    return year+" "+month+" "+ (parseInt(days)-1).toString();
  }
  getData(data){
    let time=new Date();
    time=(time.getHours()<10?"0"+time.getHours():time.getHours())
      +":"+(time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes())
      +":"+(time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds());
    //console.log(time)
    let startingTime=this.props.data.issueTime.split(":");
    let startingHour=startingTime[0];
    
    let startingMinute=startingTime[1];
    
    let daysLeft=this.getRemainingDays(this.props.data.deadline,this.props.data.issueDate);
    console.log(time)
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
