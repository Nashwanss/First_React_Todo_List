import React, { useState } from "react";

export default function Tasks() {
  const initialTodos = [
    "Learn React",
    "Be Awesome !",
    "Do Something here or there",
    "Another task",
    "Another task",
    "Another task",
  ];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <label> To Do </label>
      <ul>
        {todos.map((todo) => (
          <li>
            <input type="checkbox" key={todo.toString()} /> {todo}
          </li>
        ))}
      </ul>
      <h5> {todos.length} Tasks need to be done soon =D</h5>
    </>
  );
}
