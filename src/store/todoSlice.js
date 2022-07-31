import {createSlice,createEntityAdapter} from "@reduxjs/toolkit";


export const todoAdapters=createEntityAdapter();
export const todoSelectors=todoAdapters.getSelectors(state=>state.todos);


const todoSlice=createSlice({
    name:"todos",
    initialState:todoAdapters.getInitialState({deletedTodos:[]}),
    reducers:{
        addTodo:todoAdapters.addOne,
        addTodos:todoAdapters.addMany,
        deleteTodo:(state,action)=>{
            state.deletedTodos.push(state.entities[action.payload])
            todoAdapters.removeOne(state,action);
        },
        updateTodo:todoAdapters.updateOne,
        clearTodos:todoAdapters.removeAll,
        restoreTodo:(state,action)=>{
            todoAdapters.addOne(state,action);
            state.deletedTodos=state.deletedTodos.filter(item=>(item.id!==action.payload.id));
        }
    }
})

export const {addTodo,addTodos,deleteTodo,updateTodo,clearTodos,restoreTodo}=todoSlice.actions;


export default todoSlice.reducer;