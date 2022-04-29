import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, name, toggleTodo, setTodos }) {
  // console.log(todos)

  const counts = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            toggleTodo={toggleTodo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <h5>
        {counts} task uncompleted out of {todos.length}
      </h5>
      <h6>Bye {name}</h6>
    </>
  );
}
