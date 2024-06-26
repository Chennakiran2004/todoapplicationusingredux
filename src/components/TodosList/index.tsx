import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodoStatus,
} from "../../reduxComponent/todoSlice";

import "./index.css";

const TodosList: React.FC = () => {
  const todos = useSelector((state: any) => state.todo.todos);
  const [userInput, setUserInput] = useState<string>("");
  const dispatch = useDispatch();

  const onChangeUserInput = (event: any) => {
    setUserInput(event.target.value);
  };

  const onClickAddTodo = () => {
    if (userInput.trim()) {
      dispatch(addTodo(userInput));
      setUserInput("");
    }
  };

  const onClickDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const onClickToggleTodoStatus = (id: number) => {
    dispatch(toggleTodoStatus(id));
  };

  return (
    <div>
      <h1>Todos List</h1>
      <div>
        <input
          type="text"
          placeholder="Add Todo"
          onChange={onChangeUserInput}
          value={userInput}
        />
        <button onClick={onClickAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo: any) => (
            <li key={todo.id} className="todos-list">
              <p
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
              >
                {todo.text}
              </p>
              <button onClick={() => onClickDeleteTodo(todo.id)}>
                Delete Todo
              </button>
              <button onClick={() => onClickToggleTodoStatus(todo.id)}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodosList;
