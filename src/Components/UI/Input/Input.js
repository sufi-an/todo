import React, { Component } from 'react';
import Button from '../Button/Button';
import classes from './Input.module.css'
class Input extends Component{
    state={
        taskControl:"",
        dateControl:""
    }
    task=null;
    date=null;
    handleTaskChange=(event)=>{
        this.task=event.target.value;
        //console.log(this.task);   
        this.setState({taskControl:this.task});
        //console.log(this.state.taskControl)
    }
    handleDateChange=(event)=>{
        this.date=event.target.value;
        this.setState({dateControl:this.date});
        //console.log(this.date);
    }
    onBtnClick=()=>{
        this.props.clicked(this.date,this.task);
        this.setState({taskControl:''});
        this.setState({dateControl:''})
    }
    
  render(){ 
    
    return (
        <div className={classes.Input}>
            <input  type='text' placeholder="Task" onChange={this.handleTaskChange}  value={this.state.taskControl} />
            <label>Due Date</label>
            <input  onChange={this.handleDateChange} type="date" value={this.state.dateControl} />
            <div className={classes.BtnSuccess}>
                <Button  clicked={this.onBtnClick}  >Add To list</Button>
            </div>
        </div>
    );
  }
}

export default Input;