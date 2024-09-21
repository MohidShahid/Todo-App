import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../Features/Todo/TodoSlice";

function AddTodo({ todos , isEditable ,selectedTodo , task , setTask , setisEditable}) {
  
  
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodo({task : task}))
    setTask('')
  };
  const handleUpdateTodo = () =>{
    const {id} = selectedTodo;
    dispatch(updateTodo({id : id, task: task}))
    setTask('')
    setisEditable(false)
  };
  return (
    <>
      <div className="AddTodo w-full">
        <input
          type="text"
          className="py-2 px-0 text-stone-900 w-2/5"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="p-3 text-base bg-emerald-600"
          onClick={isEditable? handleUpdateTodo : handleAddTodo}
        >
         {isEditable ?  'Update' : 'Add'}
        </button>
      </div>
    </>
  );
}

export default AddTodo;
