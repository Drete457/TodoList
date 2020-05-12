import React from "react";
import "../Css/todo.css";
import trash from "../Resources/Icons/trash.png";

export default ({ todo, toggleComplete, onDelete }) => (
  <div key={todo.id} className="todo" onClick={toggleComplete}>
    <table>
      <tbody>
        <tr>
          <td className="id">{todo.id}</td>
          <td className="text">{todo.text}</td>
          <td className={!todo.complete ? "incomplete" : "complete"}>
            {!todo.complete ? "incomplete" : "complete"}
          </td>
          <td>
            <img
              src={trash}
              className="deleteicon"
              alt="deleteicon"
              onClick={onDelete}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
