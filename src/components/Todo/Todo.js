import React from 'react'
import {useDispatch} from "react-redux"
import { updateTodo,deleteTodo } from '../../store/todoSlice';

 const Todo = ({todo,completed,id}) => {
    const dispatch=useDispatch();
    const toggle=()=>{
        dispatch(updateTodo({
            id,
            changes:{completed:!completed}
        }))
    }
    const deleteHandler=()=>{
        dispatch(deleteTodo(id))
    }
  return (
    <div className="flex justify-center item-center gap-5 my-4">
        <input type="checkbox" value={completed} onChange={toggle}/>
        <span>{todo}</span>
        <button className="p-2 bg-red-500 rounded shadow" onClick={deleteHandler}>X</button>
    </div>
  )
}

export default Todo;