import React from "react";
import "../Css/Todo.css";

export default ({todo, toggleComplete }) => (
  <div
    key={todo.id}
    className={!todo.complete ? 'complete' : 'incomplete'}
    onClick={toggleComplete}
  >
    {todo.id} {todo.text}
  </div>
);
