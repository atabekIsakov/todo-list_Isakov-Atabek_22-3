import {useEffect, useState} from 'react';
import styles from './App.css';
import Modal from './components/Modal/Modal';
import Buttons from './components/Button/Buttons';
import TaskList from './components/TaskList/TaskList';
import Input from "./components/Input/Input";
import {Button} from "@mui/material";


function App() {
  const [ show, setShow ] = useState(false);
  const [ newTask, setNewTask ] = useState('');
  const [ inputForState, inputChange] = useState("");
  const [ filtered, setFiltered] = useState('all')
  const [ tasks, setTasks ] = useState([
    {
        id: 1,
        title: 'OOZ ZHABUU',
        editing:false,
        completed: false
    },
      {
        id: 2,
        title: 'OOZ ACHUU',
        editing:false,
        completed: false
    },
  ])
    //1) фильтр по списку по совпадению
    const inputFilter = tasks.filter(item => item.title.trim().toLowerCase().includes(inputForState.trim()))

    //2) Эта функция меняет значение переменной show на противоположное
    const handleShow  = () => setShow(!show)

    //3) Эта функция вызывается при изменении состояния
    const handleChangeCheck = (event) => {
      setNewTask(event.target.value);
    }

    //4) Эта функция вызывается при добавлении новой задачи в список задач
    const handleAddTask = () => {
        setTasks(prevTasks => [
            ...prevTasks,
            {
                id: Math.floor(Math.random() * 100),
                title: newTask,
                completed: false,
                editing: false
            }
        ]);
        handleShow();
    };
    console.log(tasks)
    //5) Функция handleDelete удаляет задачу из списка задач по ее id
    const handleDelete = (id) => {
        // Создаем новый массив tasks, который содержит все задачи, кроме той, что нужно удалить
        const updatedTasks = tasks.filter(task => task.id !== id);
        // Обновляем состояние tasks новым массивом без удаленной задачи
        setTasks(updatedTasks);
    };

    //6) Функция handleDone меняет статус выполнения задачи (completed) по ее id
    const handleDone = (id) => {
        // Находим индекс задачи в массиве tasks по ее id
        const currentIndex = tasks.findIndex(task => task.id === id)
        // Меняем статус выполнения задачи на противоположный
        tasks[currentIndex].completed = !tasks[currentIndex].completed
        // Обновляем состояние tasks новым массивом
        setTasks([...tasks])
    };console.log(tasks)

    //7) Функция handleEdit редактирует задачу в массиве tasks
    const handleEdit = (editTodo) => {
        // Создаем новый массив tasks, где для задачи с заданным id заменяем заголовок на новый
        const editList = tasks.map(task => {
            if(task.id === editTodo.id) {
                return {...task, title: editTodo.title}
            }
            return task
        })
        // Выводим editList в консоль для проверки
        console.log(editList)
        // Обновляем состояние tasks новым массивом
        setTasks(editList)
    };

    // useEffect(() => {
    //     const myLocalList = JSON.parse(localStorage.getItem('tasks'));
    //     if (!myLocalList.length) {
    //         setTasks(myLocalList)
    //         console.log('вытянули')
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }, [tasks])

    //8) Функция updateInput принимает событие event и использует его для обновления состояния inputChange
    const updateInput = (event) => {
        // Обновляем состояние inputChange, используя значение из события (event)
        inputChange((event.target.value).toLowerCase());
    };

    //9) Фильтрация задач по списку то есть по выпадающему списку
    // Затем, в зависимости от значения filtered, определяется какие задачи должны быть отображены в списке задач,
    // и результат сохраняется в переменной resultFilter.
    let resultFilter;
    // Определяем какие задачи должны быть отображены в списке задач
    if (filtered === 'all') {
        resultFilter = inputFilter;
    } else if (filtered === 'completed') {
        resultFilter = inputFilter.filter(t => t.completed);
    } else if (filtered === 'notCompleted') {
        resultFilter = inputFilter.filter(t => !t.completed);
    } else {
        resultFilter = null;
    }

    // Функция, вызываемая при изменении значения выпадающего списка
    const filteredInput = ({target}) => {
        setFiltered(target.value);
    }

    // 10) Функция deleteAllTask устанавливает состояние tasks на пустой массив, тем самым удаляя все задачи
    const deleteAllTask = () => {
        setTasks([])
        localStorage.clear()
    }


  return <>
    <div className="App">
      {show && <Modal
      handleChangeCheck={handleChangeCheck}
      handleAdd={handleAddTask}
      handleShow={handleShow}  />}

      <Buttons handleClick={handleShow}>
        Open modal window...
      </Buttons>
        <Input name="search" onChangeFunc={updateInput}/>
        <div  className={styles.twoItems}>
            <Button onClick={deleteAllTask} variant="outlined" color="error">delete all tasks</Button>
              <select
                  onChange={filteredInput}>
                  <option value="all">All tasks</option>
                  <option value="completed">Completed</option>
                  <option value="notCompleted">Not Completed</option>
              </select>


        </div>

          <TaskList
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
          list={resultFilter}
          searchTask={inputForState}
          />
    </div>
  </>
}

export default App;
