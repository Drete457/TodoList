export function FilterN(todo){return !todo.complete;}

export function FilterP(todo){return todo.complete;}

export function FilterD(todo, id){return todo.id !== id }