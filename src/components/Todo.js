import React from "react";

export default function Todo({ todo, toggleTodo, todos, setTodos }) {
  const delelteHandler = () => {
    const newTodos = todos.filter((todoElement) => todoElement.id !== todo.id);
    setTodos(newTodos);

    console.log(`${todo.content} has been deleted saftly`);
  };
  return (
    <div>
      <label>
        <input
          className="todo-line"
          onChange={() => {
            toggleTodo(todo.id);
          }}
          type="checkbox"
          checked={todo.completed}
        />
        <button onClick={delelteHandler} className="btn-delete">
          Delete
        </button>
        {todo.content}
      </label>
    </div>
  );
}
