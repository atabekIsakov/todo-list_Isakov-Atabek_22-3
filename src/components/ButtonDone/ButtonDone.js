import React from 'react'
import style from './buttonDone.module.css'

const ButtonDone = ({ children, type, handleClick, todo }) => {
    return (
        <button onClick={() => handleClick(todo.id)}
                className={style['actionButton'] + ' ' +  style[type]}>
            {children}
        </button>
    )
}

export default ButtonDone;