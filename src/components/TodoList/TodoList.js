import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { clearTodos, restoreTodo, todoSelectors } from '../../store/todoSlice';
import Todo from '../Todo/Todo';

 const TodoList = () => {
    const allTodos=useSelector(todoSelectors.selectEntities);
    const todoCount=useSelector(todoSelectors.selectTotal);
    const deletedtodos=useSelector(state=>state.todos.deletedTodos)
   
    const dispatch=useDispatch();

    const todoList=[];

    for(const id in allTodos) {
        if(Object.hasOwnProperty.call(allTodos,id)) {
            const todoItem=allTodos[id];
            todoList.push(<Todo key={todoItem.id} id={todoItem.id} todo={todoItem.todo} completed={todoItem.completed}/>);
        }
    }

    const restore=(todo)=>{
        dispatch(restoreTodo(todo))
    }

const deletedList=deletedtodos.map(item=>(
       <div className="my-4 flex gap-3 justify-center" key={item.id}>
        <span>{item.todo}</span>
        <button className="bg-green-500 p-2 rounded shadow" onClick={()=>restore(item)}>restore</button>
       </div>
))

  return (
    <div clasName="mt-20">
    <h3 className="my-4 text-center text-purple-500">Your todos:</h3>
    <h4 className="mb-2 text-2xl">Count: <span className="text-purple-500">{todoCount}</span></h4>
    <button className="p-2 bg-red-500 shadow rounded text-white" onClick={()=>dispatch(clearTodos())}>Clear todos</button>
    <div>{todoList}</div>
    <h3 className="my-3 text-red-500">Deleted Todos</h3>
    <div>{deletedList}</div>


    </div>
  )
}


export default TodoList;