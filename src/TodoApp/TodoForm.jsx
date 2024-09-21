import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../Features/Todo/TodoSlice";

function TodoForm({ todos, setisEditable, setSelectedTodo, setTask }) {
  const dispatch = useDispatch();

  return (
    <div className="todoForm w-full flex items-center justify-center">
      <ul className="w-2/4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between px-4 border-2 border-emerald-400 "
          >
            <div>{todo.task}</div>
            <div className="btn-operate flex items-center justify-center">
              <button
                className="w-10 h-10"
                onClick={() => {
                  setisEditable(true);
                  setSelectedTodo({ id: todo.id, task: todo.task });
                  setTask(todo.task);
                }}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/zfzufhzk.json"
                  trigger="hover"
                  style={{ width: "40px", height: "40px", color: "white" }}
                ></lord-icon>
              </button>{" "}
              <button
                className="w-10 h-10"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/xekbkxul.json"
                  trigger="hover"
                  style={{ width: "40px", height: "40px", color: "white" }}
                ></lord-icon>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoForm;
