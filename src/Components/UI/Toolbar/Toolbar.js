import React, { Fragment } from 'react';
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom';
import Button from '../Button/Button';
import classes from './Toolbar.module.css';
import CompletedTasks from '../../CompletedTasks/CompletedTasks';
import Tasks from '../../Tasks/Tasks';
const toolbar=(props)=>{ 
    let tasks=null;
    if(props.tasksList.length === 0){
        tasks=<div>Add A Component</div>
    }
    return( <BrowserRouter>
        <Fragment>
    <div className={classes.Toolbar}>
            <div className={classes.HomeContainer}>
            <div className={classes.BtnHome}  >
            <Link to="/" >
            <Button>Home</Button>
            </Link>
            </div>
            </div>
            <div className={classes.BtnSuccess}>
            <Link  to="/">
            <Button clicked={props.addTask} >Create Task</Button>
            </Link>
            </div>
            <div className={classes.BtnDisable}>
        <Link to="/history">
            <Button  clicked={props.historyCheck}>History</Button>
        </Link>
            </div>
            </div>
            </Fragment>
            <Switch>
         
            <Route exact path="/"  render={()=><Tasks tasksList={props.tasksList}  clicked={props.clicked} />}/>
            <Route  path="/history" render={()=><CompletedTasks list={props.completedTaskList}/>}/>
        </Switch>
        </BrowserRouter>
    )
};

export default toolbar;