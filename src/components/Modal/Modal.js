
import React, { useState } from 'react'
import classes from './modal.module.css'
import Buttons from '../Button/Buttons'
import Input from '../Input/Input'
import {TextField} from "@mui/material";


const Modal = ({ handleShow, handleChangeCheck, handleAdd  }) => {
  
  return (
    <React.Fragment>
    <div className={classes.modalWrapper} onClick={handleShow}></div>
      <div className={classes.modalContent}>
      <TextField name={'add'} onChange={handleChangeCheck} label="Add to task"/>
      <Buttons className={classes.buttonsModal} handleClick={handleShow} >Close modal</Buttons>
      <Buttons handleClick={handleAdd}>Add this task</Buttons>



    </div>
    </React.Fragment>
  )
}

export default Modal



/// rafce - для создание компоненты