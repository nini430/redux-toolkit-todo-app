import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo,addTodos } from "../../store/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddToDo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = () => {
    if (text.length > 0) {
    //   dispatch(
    //     addTodo({
    //       id: nanoid(),
    //       todo: text,
    //       completed: false,
    //     })
    //   );
    const items=text.split(",");
   
    // first method
    // items.forEach(item=>(
    //     dispatch(addTodo({
    //         id:nanoid(),
    //         todo:item,
    //         completed:false
    //     }))
    // ))

    dispatch(addTodos(items.map(item=>{return {id:nanoid(),todo:item,completed:false}})))

    }
  };
  return (
    <div>
      <p>To add multiple items write them comma seperated</p>
      <p className="mb-10">
        <i>eg: Eggs,Bread,Ham,Chease</i>
      </p>
      <input className="rounded shadow focus:outline-none p-2"
      placeholder="add todo ..."
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="p-2 bg-purple-500 text-white rounded shadow" onClick={submitHandler}>Add to do </button>
    </div>
  );
};

export default AddToDo;
