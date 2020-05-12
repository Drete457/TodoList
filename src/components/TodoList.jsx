import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { FilterN, FilterP } from "../Functions/Filter";
import {addTodo, toggleComplete, updateTodoToShow, onDelete} from "../Functions/Functions";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class TodoList extends React.Component {
  state = {
    todo: [{
      id: 1,
      text: "teste",
      complete: false,
    }],
    todoToShow: "all",
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todo;
    } else if (this.state.todoToShow === "Incomplete") {
      todos = this.state.todo.filter(FilterN);
    } else if (this.state.todoToShow === "Complete") {
      todos = this.state.todo.filter(FilterP);
    }

    return (
      <div className="MainBody">
        <h1>To-Do List</h1>
        <TodoForm
          onSubmit={(todo) =>
            this.setState({ todo: addTodo(todo, this.state.todo) })
          }
        />
        <div className="separators">
        <Tabs>
          <TabList>
            <Tab onClick={() => this.setState({ todoToShow: updateTodoToShow("all")})}>All</Tab>
            <Tab onClick={() => this.setState({ todoToShow: updateTodoToShow("Incomplete")})}>Incomplete</Tab>
            <Tab onClick={() => this.setState({ todoToShow: updateTodoToShow("Complete") })}>Complete</Tab>
         </TabList>
         <TabPanel>
           <h2>All To-Do</h2>
         </TabPanel>
         <TabPanel>
           <h2>To-Do Incomplete</h2>
          </TabPanel>
          <TabPanel>
           <h2>To-Do Complete</h2>
          </TabPanel>
        </Tabs>
        </div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={() =>
              this.setState({ todo: toggleComplete(this.state.todo, todo.id) })
            }
            onDelete={() =>
              this.setState({ todo: onDelete(this.state.todo, todo.id) })
            }
          />
        ))}
        <div className="todoincomplete">
          To-Do Incomplete: {this.state.todo.filter(FilterN).length}
        </div>
      </div>
    );
  }
}
