import React from 'react';
import CompletedTask from './CompletedTask/CompletedTask';
import classes from './CompletedTask.module.css'
const completedTasks=(props)=>{
    let history=props.list.map((element)=>{
        return <CompletedTask key={element.id}  data={element}/>
    });
   if(history.length === 0){
      history=<h1>No History Found</h1>
   }
    
    return(
        <div className={classes.CompletedTask}>
        {history}
        </div>
    );
}

export default completedTasks;