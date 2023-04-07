import React, { useState } from 'react'
import TodoCard from '../TodoCard/TodoCard';


const TaskList = (
  { 
    list,
    handleDelete,
    handleDone ,
    handleEdit,
    }
  ) => {

    const [currentEdit , setCurrentEdit] = useState();

  return <>
      <ol>
        {list.map((task, index) => <TodoCard
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleEdit={handleEdit}
        handleSelectCurrent={setCurrentEdit}
        iEdit={task.id === currentEdit}
        key={task.id}
        queue={index + 1}
        task={task} />)}
    </ol>
  </>

}

export default TaskList