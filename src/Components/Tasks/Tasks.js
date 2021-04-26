import React from 'react';
import Task from './Task/Task';

import classes from './Tasks.module.css';
const tasks=(props)=>{
     let list=null;
     
    list=<div className={classes.Tasks} >{props.tasksList.map(element => {
        console.log(element.task+" "+element.deadline)
        return <Task key={element.id} data={element} onClicked={props.clicked}/>
    })}</div>
   
    if(list.props.children.length === 0){
        list=<div  style={{
            textAlign:'center',
            marginTop:'10px',
            fontSize:'1.7rem'
        }}>Add A Task</div>
    } 
    return (
        <div >
        {list}
        </div>
    );
}

export default tasks;