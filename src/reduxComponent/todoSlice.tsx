// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//   name: "todo",
//   initialState: {
//     todos: ["Learn React", "Learn Redux"],
//   },
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push(action.payload);
//     },

//     deleteTodo: (state, action) => {
//       state.todos = state.todos.filter((_, index) => index !== action.payload);
//     },
//   },
// });

// export const { addTodo, deleteTodo } = todoSlice.actions;

// export const todoReducer = todoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Learn Redux", completed: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.todos.length + 1,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodoStatus, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
