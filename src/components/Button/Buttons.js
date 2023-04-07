import React from 'react'
import {Button} from "@mui/material";
const Buttons = ({ children, handleClick }) => {

  return (
    <Button
        variant='contained'
        onClick={handleClick}
    >
      {children}
    </Button>
  )
}

export default Buttons