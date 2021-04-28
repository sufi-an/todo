import React, { Component } from 'react';
import Auxi from '../../hoc/auxi';
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal';
import Input from '../UI/Input/Input';

import classes from './Layout.module.css'
import Tasks from '../Tasks/Tasks';
import Toolbar from '../UI/Toolbar/Toolbar';

class Layout extends Component{
    state={
        modalShow:false,
        backDropShow:false,
        taskList:[],
        completedTaskList:[],
    }
    backdropToggler=()=>{
        const backdropState= this.state.backDropShow;
        this.setState({backDropShow:!backdropState});
    }
    modalOpen=()=>{
        
        this.setState({modalShow:true})
        this.backdropToggler();
    }
    modalClosed=()=>{
        this.setState({modalShow:false})
        this.backdropToggler();
    }
    createTaskBtnHandler=()=>{
        this.modalOpen();
       
    }
    getTime(){
        let today=new Date();
        let time=today.getHours();
        //console.log()
       /*  if(time>12){
            time=time-12;
            time=time+":"+(today.getMinutes())+" PM";
        }
        else{
            time=time+":"+(today.getMinutes())+" AM";
        } */
        time=time+":"+today.getMinutes();
        console.log(time)
        return time;
    }
    getDate(){
        let today=new Date();
        let date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date;
    }
    getRemainingTime(time){
        console.log(time)
    }
    onAddTaskHandler=(date,task)=>{
        this.modalClosed();
        let list=this.state.taskList;
        let instance={
            'id':'',
            task:'',
            issueDate:'',
            issueTime:'',
            deadline:''
        }
        
        instance.task=task;
        instance.deadline=date;
        instance.issueDate= this.getDate();     
        instance.issueTime=this.getTime();
        this.getRemainingTime(instance.issueTime);
        if(this.state.taskList.length === 0){
            instance.id=2;
        }
        else{
            instance.id=(this.state.taskList[this.state.taskList.length-1].id)+1;
        }
        list.push(instance);
       this.setState({taskList:list})
    }
    onTaskDoneHandler=(id)=>{
        let today=new Date();
        const removedData=this.state.taskList.map((element)=>{
            if(element.id === id){
                element.deadline=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                return element;
            }
        })
        const removedList=this.state.completedTaskList;
        removedList.push(removedData);
        this.setState({completedTaskList:removedList});
        const updatedData=this.state.taskList.filter((item)=> item.id!== id);
        this.setState({taskList:updatedData});
    }
    onHistoryCheck=()=>{
        console.log(this.state.completedTaskList);
    }
    render(){ 
    return (
        <Auxi>
        <Modal backDropShow={this.state.backDropShow} modalShow={this.state.modalShow} clicked={this.modalClosed}>
            <Input clicked={this.onAddTaskHandler} />
            
        </Modal>
            <div>
            <Toolbar 
                tasksList={this.state.taskList} 
                clicked={this.onTaskDoneHandler} 
                completedTaskList={this.state.completedTaskList}
                historyCheck={this.onHistoryCheck} 
                addTask={this.createTaskBtnHandler} />
            </div>
            
        </Auxi>
    );
    }
}



export default Layout;