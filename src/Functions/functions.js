
export function addTodo(todo, props) {
  return [todo, ...props];
}

export function toggleComplete(todos, id) {
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

export function updateTodoToShow(choose) {
  return choose;
}

export function onDelete(todos, id) {

  return todos.filter((todo) => todo.id !== id);
}
