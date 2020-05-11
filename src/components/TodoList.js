import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
export default class TodoList extends React.Component {
  state = {
    todo: [],
  };

  addTodo = (todo) => {
    this.setState({
      todo: [todo, ...this.state.todo],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todosComplete : this.state.todo.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todo.map((todo) => (
          <Todo
            todo={todo}
            toggleComplete={() => this.toggleComplete(todo.id)}
          />
        ))}
      </div>
    );
  }
}
