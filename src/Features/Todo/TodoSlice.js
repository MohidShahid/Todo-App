import { createSlice, nanoid } from '@reduxjs/toolkit';



const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const { task } = action.payload;
            const todo = {
                id: nanoid(),
                task,
            };
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            console.log(action.payload)
        },

        updateTodo: (state, action) => {
            const { id, task } = action.payload;
            const updatedTodo = state.todos.map((todo) => todo.id === id ? { ...todo, task: task } : todo)
            return { ...state, todos: updatedTodo }
        }
    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
