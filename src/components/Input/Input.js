import React from 'react'
import {TextField} from "@mui/material";



const Input = ({ name, onChangeFunc, placeholder}) => {
  return (
    <TextField
    name={name}
    onChange={onChangeFunc}
    placeholder={placeholder}
    label="Search for tasks..." variant="outlined"
    />
  )
}

export default Input