import React from "react";
import "../Css/todo.css";
import trash from "../Resources/Icons/trash.png";

export default ({ todo, toggleComplete, onDelete }) => (
  <div key={todo.id} className="todo">
    <div className="tododisplaynpm" onClick={toggleComplete}>
      <div className="id">{todo.id}</div>
      <div className="text">{todo.text}</div>
      <div className={!todo.complete ? "incomplete" : "complete"}>
        {!todo.complete ? "incomplete" : "complete"}
      </div>
    </div>
    <div className="deleteicon" onClick={onDelete}>
      <img src={trash} className="deleteiconimage" alt="deleteicon" />
    </div>
  </div>
);
