import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoForm from "./TodoForm";
import { useDispatch, useSelector } from "react-redux";

function Todo() {
  const [isEditable, setisEditable] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos);

  return (
    <div className="w-full flex items-center justify-center flex-col h-3/4">
      <h1 className="text-3xl  ">Todo Tasker</h1>
      <AddTodo
        todos={todos}
        isEditable={isEditable}
        selectedTodo={selectedTodo}
        task={task}
        setTask={setTask}
        setisEditable={setisEditable}
      />
      <TodoForm
        todos={todos}
        setisEditable={setisEditable}
        setSelectedTodo={setSelectedTodo}
        setTask={setTask}
      />
    </div>
  );
}

export default Todo;
