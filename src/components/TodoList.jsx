import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import {FilterN, FilterP} from "../Functions/Filter"
import {addTodo,toggleComplete, updateTodoToShow, onDelete} from "../Functions/Functions"

export default class TodoList extends React.Component {

  state = {
    todo: [],
    todoToShow: 'all',
  };

  render() {
   let todos = [];

   if (this.state.todoToShow === 'all') {
      todos = this.state.todo;
    } else if(this.state.todoToShow === "Incomplete") {
      todos = this.state.todo.filter(FilterN)
    }  else if(this.state.todoToShow === "Complete") {
      todos = this.state.todo.filter(FilterP)
    }

    return (
      <div className="MainBody">
        <TodoForm onSubmit={(todo) => this.setState({todo: addTodo(todo, this.state.todo)})} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={() => this.setState({todo: toggleComplete(this.state.todo, todo.id)})}
            onDelete={() => this.setState({todo: onDelete(this.state.todo, todo.id)})}
          />
        ))}
      <div className="todoincomplete"> 
        To-Do Incomplete: {this.state.todo.filter(FilterN).length}
      </div>
      <div className="buttons">
        <button onClick={() => this.setState({todoToShow: updateTodoToShow("all")})}>All</button>
        <button onClick={() => this.setState({todoToShow: updateTodoToShow("Incomplete")})}>Incomplete</button>
        <button onClick={() => this.setState({todoToShow: updateTodoToShow("Complete")})}>Complete</button>
      </div>
      </div>
    );
  }
}
