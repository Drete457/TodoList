import React from "react";

export default ({ todo, toggleComplete}) => (
  <div key={todo.id} onClick={toggleComplete}>
    {todo.id}
    {todo.text}
  </div>
);
