import React from 'react';
import Auxi from '../../../hoc/auxi';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';
const modal=(props)=>(
    <Auxi>
    <Backdrop show={props.backDropShow} clicked={props.clicked}/>
    <div  className={classes.Modal} style={{
        transform:props.modalShow ? 'translateY(0)':'translateY(-100vh)',
        opacity:props.modalShow?'1':'0'
    }}>
        {props.children}
    </div>
    </Auxi>
);

export default modal;