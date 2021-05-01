import React from 'react';
import classes from '../../Tasks/Task/Task.module.css'
const completedTask=(props)=>{

    const task=props.data;
    //console.log(task)
    let btnType=null;
  if(props.data.id%5 === 0){
    btnType='BlueBg';
  }
  else if(props.data.id%4 === 0){
    btnType='PinkBg';
  }
  else if(props.data.id%3 === 0){
    btnType='NavyBlueBg';
  }
  else{
    btnType='LightBlueBg';
  }
  //,classes[props.btnType]].join(' ')
    return (
        <div className={classes.TaskController}>  
    <div className={[classes.Task,classes[btnType]].join(' ')}>
        <div className={classes.TaskData} >
        <span>Task : </span> {task.task}
        </div>
        <div>
         <span>Issued : </span> {task.issueDate}
        </div>
        <div>
         <span>Finished : </span> {task.deadline}
        </div>
        
        </div>
        </div>
    )
}

export default completedTask;