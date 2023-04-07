import React, { useState } from 'react'
import classes from './todocard.module.css'
import ButtonDone from "../ButtonDone/ButtonDone";
import {Button} from "@mui/material";
import {TextField} from "@mui/material";

const TodoCard = ({task, handleDelete, handleDone , handleEdit, handleSelectCurrent, iEdit, queue}) => {

    const [ newTitle ,setNewTitle ] = useState(task.title);

    const edit = () => {
        handleSelectCurrent(false)
        handleEdit({
            id: task.id,
            title: newTitle,
            completed: task.completed
        })
    }
    const cancel = () => {
        handleSelectCurrent(false)
    }

    if(iEdit) {
      return <div className={classes.inputs}>
           <TextField
               name='edit'
               value={newTitle}
               onChange={(event) => setNewTitle(event.target.value)}/>
              <Button onClick={edit} variant="contained" color="success" href="#contained-buttons">Save</Button>
              <Button onClick={cancel} variant="outlined" color="error">Cancel</Button>
      </div>
    }
  return (
    <li className={classes.todoCard}>
        <div className={classes.head}>
            <h5 >{queue})</h5>
            <h5 style={!task.completed ? {textDecoration: "none"} : {textDecoration: 'line-through'}}>{task.title}</h5>
        </div>
        <div className={classes.buttons}>
            <Button onClick={() => handleSelectCurrent(task.id)}  variant="contained" color="secondary">Edit</Button>
            <ButtonDone handleClick={handleDone} todo={task} variant="contained" color="success">Done</ButtonDone>
            <Button onClick={() => handleDelete(task.id)}  variant="outlined" color="error">Delete</Button>
        </div>
    </li>
  )
}

export default TodoCard