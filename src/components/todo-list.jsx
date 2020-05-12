import React from "react";
import Todo from "./todo";
import TodoForm from "./todo-form";
import {
  AddTodo,
  ToggleComplete,
  UpdateTodoToShow,
  OnDelete,
} from "../Functions/functions";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default class TodoList extends React.Component {
  state = {
    todo: [],
    todoToShow: "all",
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todo;
    } else if (this.state.todoToShow === "incomplete") {
      todos = this.state.todo.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todo.filter((todo) => todo.complete);
    }

    return (
      <div className="mainBody">
        <h1>To-Do List</h1>
        <TodoForm
          onSubmit={(todo) =>
            this.setState({ todo: AddTodo(todo, this.state.todo) })
          }
        />
        <div className="separators">
          <Tabs>
            <TabList>
              <Tab
                onClick={() =>
                  this.setState({ todoToShow: UpdateTodoToShow("all") })
                }
              >
                All
              </Tab>
              <Tab
                onClick={() =>
                  this.setState({ todoToShow: UpdateTodoToShow("incomplete") })
                }
              >
                Incomplete
              </Tab>
              <Tab
                onClick={() =>
                  this.setState({ todoToShow: UpdateTodoToShow("complete") })
                }
              >
                Complete
              </Tab>
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
              this.setState({ todo: ToggleComplete(this.state.todo, todo.id) })
            }
            onDelete={() =>
              this.setState({ todo: OnDelete(this.state.todo, todo.id) })
            }
          />
        ))}
        <div className="todoincomplete">
          <p></p>
          To-Do Incomplete:{" "}
          {this.state.todo.filter((todo) => !todo.complete).length}
        </div>
      </div>
    );
  }
}
