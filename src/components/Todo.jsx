import React from "react";
import "../Css/Todo.css";
import trash from '../Resources/Icons/trash.png';

export default ({ todo, toggleComplete, onDelete }) => (
  <div key={todo.id} className="todo">
    <table>
      <tr>
        <td className="id">{todo.id}</td>
        <td className="text">{todo.text}</td>
        <td className={!todo.complete ? "incomplete" : "complete"} onClick={toggleComplete}>
          {!todo.complete ? "incomplete" : "complete"}</td>
        <td><img src={trash} className="deleteicon" alt="deleteicon" onClick={onDelete}/></td>
      </tr>
    </table>
  </div>
);
