import React, { useState } from "react";

export default function TodoList(task) {
  const initialTodos = [];

  // const initialTodos = [
  // "Learn React",
  // "Learn Redux",
  // "Learn React Router",
  // "Learn React Hooks",
  // "Learn React Context",
  // "Learn React Redux",
  // ];

  // const initialTodos = [
  //   { id: 1, content: "Learn React", completed: false },
  //   { id: 2, content: "Learn Redux", completed: false },
  //   { id: 3, content: "Learn React Native", completed: false },
  //   { id: 4, content: "Learn GraphQL", completed: false },
  //   { id: 5, content: "Learn NodeJS", completed: false },
  //   { id: 6, content: "Learn Express", completed: false },
  // ];

  const [todos, setTodos] = useState(initialTodos);

  const moreThan10 = todos.length > 10;

  return (
    <>
      <label> To Do </label>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} /> {todo.content}
          </li>
        ))}
      </ul>
      <h5>
        {moreThan10
          ? `ATTENTION !!! You have  ${todos.length}   Tasks need to be done !!`
          : "You have less than 10 tasks ! "}
      </h5>

      <h5>
        {moreThan10
          ? console.error("Attention more than 10 tasks")
          : console.log("OK less than 10 tasks")}
      </h5>
    </>
  );
}
