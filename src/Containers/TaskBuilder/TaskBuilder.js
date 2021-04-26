import React, { Component } from 'react';

import Tasks from '../../Components/Tasks/Tasks';

class TaskBuilder extends Component{
    
    render(){
        return(
           <div>
                <Tasks clicked={this.createTaskBtnHandler} />
           </div>
        )
    }

}

export default TaskBuilder;