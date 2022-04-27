import React, { useState } from "react";

export default function TodoList(inputText, setInputText) {
  // const initialTodos = [];
  console.log(inputText);
  console.log(setInputText);

  // const initialTodos = ["test", "test2", "test3"];

  const initialTodos = [
    { id: 1, content: "Learn React", completed: false },
    { id: 2, content: "Learn Redux", completed: false },
    { id: 3, content: "Learn React Native", completed: false },
    { id: 4, content: "Learn GraphQL", completed: false },
    { id: 5, content: "Learn NodeJS", completed: false },
    { id: 6, content: "Learn Express", completed: false },
  ];

  // at the beginning of our component:
  // const [fruits, setFruits] = useState(["apples", "pears"]);

  // later:
  // const newFruits = [...fruits]; // ✅  we "shallow clone" the array
  // newFruits.push("bananas"); // ✅  we add the item to the cloned array
  // setFruits(newFruits); // ✅  we use the cloned array

  const [todos, setTodos] = useState(initialTodos);

  // setTodos(
  //   ...(prevtodos) => {
  //     return [...prevtodos, { id: 1, content: inputText, completed: false }];
  //   }
  // );

  const moreThan10 = todos.length > 10;

  return (
    <>
      <label> TO DO </label>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} /> {todo.content}
          </li>
        ))}
      </ul>
      <br />
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
