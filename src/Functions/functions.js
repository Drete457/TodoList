
export function AddTodo(todo, props) {
  return [todo, ...props];
}

export function ToggleComplete(todos, id) {
  let todo = [];

  todo = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        complete: !todo.complete,
      };
    } else {
      return todo;
    }
  });

  return todo;
}

export function UpdateTodoToShow(choose) {
  return choose;
}

export function OnDelete(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}
