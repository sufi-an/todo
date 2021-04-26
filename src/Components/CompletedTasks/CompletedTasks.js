import React from 'react';
import CompletedTask from './CompletedTask/CompletedTask';
const completedTasks=(props)=>{
    //console.log(props.list)
    return(
        <div>
        {
            props.list.map((element)=>{
                return <CompletedTask key={element.id}  data={element}/>
            })
            }
        </div>
    );
}

export default completedTasks;