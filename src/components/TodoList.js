import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
export default class TodoList extends React.Component {

  state = {
    todo: [],
    todoToShow: 'all',
  };

  filter = (todo) => !todo.complete;

  addTodo = (todo) => {
    this.setState({
      todo: [todo, ...this.state.todo],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todo : this.state.todo.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === 'all') {
      todos = this.state.todo;
    } else if(this.state.todoToShow === "Incomplete") {
      todos = this.state.todos.filter(this.filter)
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todo.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={() => this.toggleComplete(todo.id)}
          />
        ))}
      <div>
        todos left: {this.state.todo.filter(this.filter).length}
      </div>
      <div>
        <button>All</button>
        <button>Incomplete</button>
        <button>Complete</button>
      </div>
      </div>
    );
  }
}
