import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuid} from 'uuid'
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task:todo, completed:false,isEditing:false}])
    }
  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
        <Todo/>
    </div>
  )
}
